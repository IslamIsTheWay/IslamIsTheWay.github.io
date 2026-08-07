/* ============================================================
   COURSE ENROLMENT — التسجيل في الدورات
   ------------------------------------------------------------
   The gap this fills: courses.html had an "Ask about a course"
   mailto and nothing else, so a student could press it and the
   staff had no idea who they were, which course they meant, or
   how to reply.

   HOW THIS WORKS, AND THE ONE THING IT CANNOT DO.
   This site is static — GitHub Pages, no server, no database.
   Nothing typed into a page here can travel to the staff by
   itself. Anyone who tells you otherwise on a serverless site is
   describing a form that quietly loses its messages.

   So the request is what carries the information: pressing
   "Request this course" opens the student's own mail app (or
   WhatsApp) with the course, their name, their email and their
   note already written into it. They press send; it arrives in
   the owner's real inbox and he can reply to a real address.

   The ACCOUNT is a convenience on top of that, not the delivery
   mechanism. It saves the student's name and email on their own
   device so they do not retype it, and keeps a list of what they
   have asked for. It is device-local, and the panel says so in
   both languages rather than implying a server exists.

   THE PASSWORD. The owner asked specifically that it be made
   clear this is NOT the password to their email account, and
   that they create a new one. That warning is shown twice: above
   the field and inside the field's own placeholder. It is stored
   only as a SHA-256 hash of a random per-user salt, the same way
   js/account.js stores the Quran reader's, and it never leaves
   the device.
   ============================================================ */

const IITW_ENROL_USERS = "iitw-course-users";
const IITW_ENROL_SESSION = "iitw-course-session";
const IITW_ENROL_REQUESTS = "iitw-course-requests";

/* The address the requests actually go to. */
const IITW_ENROL_EMAIL = "ammarwalidyounis@gmail.com";

function iitwEnrolEmailProblem(email) {
  const e = (email || "").trim();
  if (!e) return { en: "Enter your email address.", ar: "أدخل بريدك الإلكتروني." };
  // Deliberately loose: the point is that a human can reply to it.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)) {
    return { en: "That does not look like an email address.", ar: "لا يبدو هذا بريدًا إلكترونيًّا صحيحًا." };
  }
  return null;
}

function iitwEnrolNameProblem(name) {
  const n = (name || "").trim();
  if (n.length < 2) return { en: "Enter your name so the teacher knows who is asking.", ar: "أدخل اسمك ليعرف المعلّم من السائل." };
  return null;
}

function iitwEnrolPassProblem(pass) {
  if (!pass || pass.length < 6) {
    return { en: "Choose a password of at least 6 characters — a NEW one, not your email password.",
             ar: "اختر كلمة مرورٍ من ستّة أحرفٍ فأكثر — كلمةً جديدة، لا كلمة مرور بريدك." };
  }
  return null;
}

function iitwEnrolKey(email) { return (email || "").trim().toLowerCase(); }

function iitwEnrolUsers() {
  try { return JSON.parse(localStorage.getItem(IITW_ENROL_USERS) || "{}"); }
  catch (e) { return {}; }
}
function iitwEnrolSaveUsers(o) {
  try { localStorage.setItem(IITW_ENROL_USERS, JSON.stringify(o)); return true; }
  catch (e) { return false; }
}

function iitwEnrolSalt() {
  const a = new Uint8Array(16);
  (window.crypto || window.msCrypto).getRandomValues(a);
  return Array.from(a).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function iitwEnrolHash(salt, pass) {
  const data = new TextEncoder().encode(salt + ":" + pass);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function iitwEnrolSignUp(name, email, pass) {
  let p = iitwEnrolNameProblem(name) || iitwEnrolEmailProblem(email) || iitwEnrolPassProblem(pass);
  if (p) return { ok: false, msg: p };
  const users = iitwEnrolUsers();
  const key = iitwEnrolKey(email);
  if (users[key]) {
    return { ok: false, msg: { en: "That email already has an account on this device — sign in instead.",
                               ar: "لهذا البريد حسابٌ على هذا الجهاز — سجّل الدخول بدلًا من ذلك." } };
  }
  const salt = iitwEnrolSalt();
  users[key] = { name: name.trim(), email: email.trim(), salt, hash: await iitwEnrolHash(salt, pass) };
  if (!iitwEnrolSaveUsers(users)) {
    return { ok: false, msg: { en: "This browser is blocking local storage, so the account cannot be saved.",
                               ar: "المتصفّح يمنع التخزين المحلّي، فلا يمكن حفظ الحساب." } };
  }
  try { localStorage.setItem(IITW_ENROL_SESSION, key); } catch (e) {}
  return { ok: true };
}

async function iitwEnrolSignIn(email, pass) {
  const users = iitwEnrolUsers();
  const key = iitwEnrolKey(email);
  const u = users[key];
  const wrong = { en: "No account on this device with that email and password.",
                  ar: "لا يوجد حسابٌ على هذا الجهاز بهذا البريد وكلمة المرور." };
  if (!u) return { ok: false, msg: wrong };
  if (await iitwEnrolHash(u.salt, pass) !== u.hash) return { ok: false, msg: wrong };
  try { localStorage.setItem(IITW_ENROL_SESSION, key); } catch (e) {}
  return { ok: true };
}

function iitwEnrolSignOut() {
  try { localStorage.removeItem(IITW_ENROL_SESSION); } catch (e) {}
}

function iitwEnrolCurrent() {
  try {
    const key = localStorage.getItem(IITW_ENROL_SESSION);
    if (!key) return null;
    const u = iitwEnrolUsers()[key];
    return u ? { key, name: u.name, email: u.email } : null;
  } catch (e) { return null; }
}

/* ---- The requests themselves ---- */
function iitwEnrolRequests() {
  try { return JSON.parse(localStorage.getItem(IITW_ENROL_REQUESTS) || "[]"); }
  catch (e) { return []; }
}
function iitwEnrolSaveRequest(r) {
  try {
    const all = iitwEnrolRequests();
    all.unshift(r);
    localStorage.setItem(IITW_ENROL_REQUESTS, JSON.stringify(all.slice(0, 50)));
    return true;
  } catch (e) { return false; }
}

/* Builds the message that actually reaches the staff. Everything the
   teacher needs to reply is inside it — who, which course, how to
   reach them back, and when they are free. */
function iitwEnrolMessage(req) {
  const lines = [
    "Assalamu alaikum,",
    "",
    "I would like to take this course:",
    "  Course: " + req.course,
    "",
    "My details:",
    "  Name:  " + req.name,
    "  Email: " + req.email
  ];
  if (req.phone) lines.push("  Phone / WhatsApp: " + req.phone);
  if (req.when) lines.push("  Times that suit me: " + req.when);
  if (req.note) { lines.push("", "Note:", "  " + req.note); }
  lines.push("", "Please let me know if a place is available and when we could meet.", "", "JazakAllahu khayran.");
  return lines.join("\n");
}

function iitwEnrolMailto(req) {
  return "mailto:" + IITW_ENROL_EMAIL +
    "?subject=" + encodeURIComponent("Course request — " + req.course + " — " + req.name) +
    "&body=" + encodeURIComponent(iitwEnrolMessage(req));
}

/* WhatsApp, when the staff has published a number. Same message. */
function iitwEnrolWhatsApp(req, number) {
  const n = String(number || "").replace(/[^0-9]/g, "");
  if (!n) return "";
  return "https://wa.me/" + n + "?text=" + encodeURIComponent(iitwEnrolMessage(req));
}
