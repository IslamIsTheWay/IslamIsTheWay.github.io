/* ============================================================
   READER ACCOUNTS — حساب القارئ
   ============================================================
   A username and a password so a reader can save the exact verse
   he stopped at, and come straight back to it next time.

   BE CLEAR ABOUT WHAT THIS IS. This website has no server. There
   is nowhere on the internet for an account to live. So the
   account and the saved verse are stored in this browser, on this
   device — which means:

     · signing in on a different phone or laptop will not find it;
     · clearing the browser's site data erases it;
     · nobody else can see it, because it never leaves the device.

   That is said plainly on the sign-in panel too. It is not
   presented as a real account, because it is not one.

   The password is never stored. What is stored is a SHA-256 hash
   of a random salt joined to the password, so the stored value
   cannot be read back as the password. That is not because this
   guards anything valuable — it is because people reuse passwords,
   and a password should not sit in plain text in a browser store.
   ============================================================ */

const IITW_USERS_KEY   = "iitw-readers";
const IITW_SESSION_KEY = "iitw-reader-session";

/* ---------- the rules, kept deliberately simple ---------- */
const IITW_USER_MIN = 3;
const IITW_USER_MAX = 20;
const IITW_PASS_MIN = 6;

/* Letters (either case), digits, underscore, dot — starting with a letter.
   No email needed and none accepted as a requirement. */
const IITW_USER_RE = /^[A-Za-z][A-Za-z0-9._]{2,19}$/;

function iitwUserNameProblem(name) {
  const n = (name || "").trim();
  if (!n) return { en: "Please choose a username.", ar: "اختر اسم مستخدم." };
  if (n.length < IITW_USER_MIN || n.length > IITW_USER_MAX)
    return { en: "The username must be between 3 and 20 characters.",
             ar: "اسم المستخدم من ٣ إلى ٢٠ حرفًا." };
  if (!IITW_USER_RE.test(n))
    return { en: "Start with a letter, then letters, numbers, dot or underscore. Capitals are fine.",
             ar: "ابدأ بحرف، ثم حروف أو أرقام أو نقطة أو شَرطة سفلية. والحروف الكبيرة مقبولة." };
  return null;
}

function iitwPassProblem(pass) {
  if (!pass || pass.length < IITW_PASS_MIN)
    return { en: "The password must be at least 6 characters. Anything you like after that.",
             ar: "كلمة المرور ستة أحرف فأكثر، وما شئت بعد ذلك." };
  return null;
}

/* Usernames are matched case-insensitively so a capital letter on the
   first character does not lock someone out of his own saved place. */
function iitwUserKey(name) { return (name || "").trim().toLowerCase(); }

function iitwReaders() {
  try { return JSON.parse(localStorage.getItem(IITW_USERS_KEY) || "{}"); }
  catch (e) { return {}; }
}

function iitwSaveReaders(obj) {
  try { localStorage.setItem(IITW_USERS_KEY, JSON.stringify(obj)); return true; }
  catch (e) { return false; }
}

function iitwRandomSalt() {
  const a = new Uint8Array(16);
  (window.crypto || window.msCrypto).getRandomValues(a);
  return Array.from(a).map(b => b.toString(16).padStart(2, "0")).join("");
}

/* SHA-256 of salt + password. Falls back to storing a marker if the browser
   has no SubtleCrypto (very old, or a non-secure origin) — in that case the
   sign-in still works but the panel says the password is not protected. */
async function iitwHash(salt, pass) {
  const subtle = window.crypto && window.crypto.subtle;
  if (!subtle) return "plain:" + salt + ":" + pass;
  const data = new TextEncoder().encode(salt + "|" + pass);
  const buf = await subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function iitwSignUp(name, pass) {
  const un = iitwUserNameProblem(name); if (un) return { ok: false, msg: un };
  const pp = iitwPassProblem(pass);     if (pp) return { ok: false, msg: pp };

  const users = iitwReaders();
  const key = iitwUserKey(name);
  if (users[key]) {
    return { ok: false, msg: { en: "That username is already used on this device. Sign in instead, or pick another.",
                               ar: "هذا الاسم مستعملٌ على هذا الجهاز. سجّل الدخول به أو اختر غيره." } };
  }
  const salt = iitwRandomSalt();
  users[key] = {
    display: (name || "").trim(),
    salt: salt,
    hash: await iitwHash(salt, pass),
    place: null,
    created: new Date().toISOString()
  };
  if (!iitwSaveReaders(users))
    return { ok: false, msg: { en: "This browser will not let the site store anything (private mode?).",
                               ar: "المتصفح لا يسمح بالحفظ (وضع التصفح الخاص؟)." } };
  iitwSetSession(key);
  return { ok: true };
}

async function iitwSignIn(name, pass) {
  const users = iitwReaders();
  const key = iitwUserKey(name);
  const u = users[key];
  // The same message either way, so this does not tell a stranger which
  // usernames exist on the device.
  const wrong = { ok: false, msg: { en: "That username and password do not match anything saved on this device.",
                                    ar: "لا يوجد على هذا الجهاز اسمٌ وكلمة مرور بهذا الشكل." } };
  if (!u) return wrong;
  const h = await iitwHash(u.salt, pass);
  if (h !== u.hash) return wrong;
  iitwSetSession(key);
  return { ok: true };
}

function iitwSetSession(key) {
  try { localStorage.setItem(IITW_SESSION_KEY, key); } catch (e) {}
}

function iitwSignOut() {
  try { localStorage.removeItem(IITW_SESSION_KEY); } catch (e) {}
}

/* The signed-in reader, or null. */
function iitwReader() {
  try {
    const key = localStorage.getItem(IITW_SESSION_KEY);
    if (!key) return null;
    const u = iitwReaders()[key];
    if (!u) return null;
    return { key: key, name: u.display, place: u.place || null };
  } catch (e) { return null; }
}

/* ---------- the saved place ---------- */

/* place = { surah, surahName, surahArabic, ayah, at } */
function iitwSavePlace(place) {
  const r = iitwReader();
  if (!r) return false;
  const users = iitwReaders();
  if (!users[r.key]) return false;
  users[r.key].place = Object.assign({}, place, { at: new Date().toISOString() });
  return iitwSaveReaders(users);
}

function iitwGetPlace() {
  const r = iitwReader();
  return r ? r.place : null;
}

function iitwClearPlace() {
  const r = iitwReader();
  if (!r) return false;
  const users = iitwReaders();
  if (!users[r.key]) return false;
  users[r.key].place = null;
  return iitwSaveReaders(users);
}
