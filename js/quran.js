/* ============================================
   Islam Is The Way — Quran Library
   Renders the 114-surah grid and fetches live
   Arabic text + English translation from the
   AlQuran Cloud API (api.alquran.cloud) when a
   surah is opened.
   ============================================ */

/* ---------- Reciters ----------
   Per-ayah audio comes from everyayah.com, where each file is named
   {surah3}{ayah3}.mp3 — e.g. 002255.mp3 is Ayat al-Kursi. Every folder below
   was checked to be live before being listed here. */
const RECITERS = [
  { id: "Alafasy_128kbps",                    name: "Mishary Rashid Alafasy",   ar: "مشاري راشد العفاسي" },
  { id: "Yasser_Ad-Dussary_128kbps",          name: "Yasser Al-Dossary",        ar: "ياسر الدوسري" },
  { id: "Abdurrahmaan_As-Sudais_192kbps",     name: "Abdurrahman As-Sudais",    ar: "عبد الرحمن السديس" },
  { id: "Maher_AlMuaiqly_64kbps",             name: "Maher Al-Muaiqly",         ar: "ماهر المعيقلي" },
  { id: "Abdul_Basit_Murattal_64kbps",        name: "Abdul Basit (Murattal)",   ar: "عبد الباسط عبد الصمد" },
  { id: "Husary_128kbps",                     name: "Mahmoud Al-Husary",        ar: "محمود خليل الحصري" },
  { id: "Minshawy_Murattal_128kbps",          name: "Al-Minshawi (Murattal)",   ar: "محمد صديق المنشاوي" },
  { id: "Saood_ash-Shuraym_128kbps",          name: "Saud Ash-Shuraim",         ar: "سعود الشريم" },
  { id: "Ghamadi_40kbps",                     name: "Saad Al-Ghamdi",           ar: "سعد الغامدي" },
  { id: "Hudhaify_128kbps",                   name: "Ali Al-Hudhaify",          ar: "علي الحذيفي" },
  { id: "Abdullaah_3awwaad_Al-Juhaynee_128kbps", name: "Abdullah Al-Juhany",    ar: "عبد الله الجهني" },
  { id: "Nasser_Alqatami_128kbps",            name: "Nasser Al-Qatami",         ar: "ناصر القطامي" },
  { id: "Salah_Al_Budair_128kbps",            name: "Salah Al-Budair",          ar: "صلاح البدير" },
  { id: "Muhammad_Ayyoub_128kbps",            name: "Muhammad Ayyoub",          ar: "محمد أيوب" },
  { id: "Ali_Jaber_64kbps",                   name: "Ali Jaber",                ar: "علي جابر" },
  { id: "Fares_Abbad_64kbps",                 name: "Fares Abbad",              ar: "فارس عباد" }
];

const RECITER_KEY = "iitw-reciter";

function getReciter() {
  const saved = localStorage.getItem(RECITER_KEY);
  return RECITERS.some(r => r.id === saved) ? saved : RECITERS[0].id;
}

function pad3(n) { return String(n).padStart(3, "0"); }

// ١٢٣ — the ayah number as it appears in a printed mushaf.
function toArabicDigits(n) {
  return String(n).replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[+d]);
}

/* Arabic counts its nouns differently from English: one, two, a few (3–10)
   and many (11+) each take a different form. "75 آيات" is wrong where
   "٧٥ آية" is right, and a native reader notices immediately. */
function arCount(n, one, two, few, many) {
  if (n === 1) return one;
  if (n === 2) return two;
  const d = toArabicDigits(n);
  return (n >= 3 && n <= 10) ? d + " " + few : d + " " + many;
}
function arCountAyah(n) { return arCount(n, "آية واحدة", "آيتان", "آيات", "آية"); }
function arCountPage(n) { return arCount(n, "صفحة واحدة", "صفحتان", "صفحات", "صفحة"); }

function ayahAudioUrl(surahNum, ayahNumInSurah) {
  return "https://everyayah.com/data/" + getReciter() + "/" + pad3(surahNum) + pad3(ayahNumInSurah) + ".mp3";
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("surahGrid");
  if (!grid) return;

  renderSurahGrid(SURAHS);

  // Build the reciter dropdown
  const recSel = document.getElementById("reciterSelect");
  if (recSel) {
    recSel.innerHTML = RECITERS
      .map(r => `<option value="${r.id}">${r.name} — ${r.ar}</option>`)
      .join("");
    recSel.value = getReciter();
    recSel.addEventListener("change", () => {
      localStorage.setItem(RECITER_KEY, recSel.value);
      stopAudio();
      // If a surah is open, rebuild its audio links for the new reciter.
      if (window._openSurah) openSurah(window._openSurah);
    });
  }

  const searchInput = document.getElementById("surahSearch");
  const placeFilter = document.getElementById("placeFilter");

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const place = placeFilter.value;

    const rawQ = searchInput.value.trim();
    const filtered = SURAHS.filter(s => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.meaning.toLowerCase().includes(q) ||
        String(s.n) === q ||
        s.arabic.includes(rawQ);
      const matchesPlace = place === "all" || s.place === place;
      return matchesQuery && matchesPlace;
    });

    renderSurahGrid(filtered);
  }

  searchInput.addEventListener("input", applyFilters);
  placeFilter.addEventListener("change", applyFilters);

  // Modal controls
  const overlay = document.getElementById("surahModal");
  const closeBtn = document.getElementById("modalClose");
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
});

function renderSurahGrid(surahs) {
  const grid = document.getElementById("surahGrid");
  grid.innerHTML = "";

  if (surahs.length === 0) {
    grid.innerHTML = `<div class="no-results">No surahs match your search.</div>`;
    return;
  }

  surahs.forEach(s => {
    const card = document.createElement("div");
    card.className = "surah-card";
    card.innerHTML = `
      <div class="surah-number"><span class="en-only">${s.n}</span><span class="ar-only">${toArabicDigits(s.n)}</span></div>
      <div class="surah-info">
        <h4><span class="en-only">${s.name} </span><span class="surah-arabic">${s.arabic}</span></h4>
        <div class="surah-meta en-only">${s.meaning} • ${s.verses} verses • ${s.place}</div>
        <div class="surah-meta ar-only" dir="rtl">${arCountAyah(s.verses)} • ${s.place === "Meccan" ? "مكية" : "مدنية"}</div>
        ${s.pages ? `<div class="surah-pages en-only">📖 ${s.pages} ${s.pages === 1 ? "page" : "pages"} in the Mushaf${s.pages > 1 ? ` (${s.pageFrom}–${s.pageTo})` : ` (p. ${s.pageFrom})`}</div>
        <div class="surah-pages ar-only" dir="rtl">📖 ${arCountPage(s.pages)} في المصحف${s.pages > 1 ? ` (${toArabicDigits(s.pageFrom)}–${toArabicDigits(s.pageTo)})` : ` (ص ${toArabicDigits(s.pageFrom)})`}</div>` : ""}
      </div>
    `;
    card.addEventListener("click", () => openSurah(s));
    grid.appendChild(card);
  });
}

async function openSurah(surah) {
  const overlay = document.getElementById("surahModal");
  const title = document.getElementById("modalTitle");
  const arabicTitle = document.getElementById("modalArabicTitle");
  const body = document.getElementById("modalBody");

  window._openSurah = surah;
  title.textContent = `${surah.n}. ${surah.name} — ${surah.meaning}`;
  arabicTitle.textContent = surah.arabic;
  body.innerHTML = `<div class="loading">Loading verses…</div>`;
  overlay.classList.add("open");

  try {
    const [arabicRes, translationRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/quran-uthmani`),
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/en.sahih`)
    ]);

    if (!arabicRes.ok || !translationRes.ok) throw new Error("Network response was not ok");

    const arabicData = await arabicRes.json();
    const translationData = await translationRes.json();

    const arabicAyahs = arabicData.data.ayahs;
    const translationAyahs = translationData.data.ayahs;

    const current = RECITERS.find(r => r.id === getReciter()) || RECITERS[0];

    /* Which pages of the printed Mushaf this surah occupies. The API gives a
       `page` on every ayah — the standard Madani Mushaf numbering, 1 to 604 —
       so the reader can tell how long a surah really is, and where each page
       ends, exactly as it does in the book in front of them. */
    const pages = [...new Set(arabicAyahs.map(a => a.page))].sort((x, y) => x - y);
    const pageCount = pages.length;
    const pageRange = pageCount === 1 ? "page " + pages[0]
                                      : "pages " + pages[0] + "–" + pages[pages.length - 1];
    const pageRangeAr = pageCount === 1 ? "صفحة " + toArabicDigits(pages[0])
                                        : "الصفحات " + toArabicDigits(pages[0]) + "–" + toArabicDigits(pages[pages.length - 1]);

    let html = `<div class="reciter-bar">
      <div class="reciter-now">🎧 Reciter: <strong>${current.name}</strong> <span dir="rtl" style="font-family:'Amiri',serif;">${current.ar}</span></div>
      <div>
        <button onclick="playAllAyahs()" class="rq-btn rq-play">▶ Play Full Surah</button>
        <button onclick="stopAudio()" class="rq-btn rq-stop">⏹ Stop</button>
        <!-- Sits beside Stop, as asked. It stays disabled until a verse's
             audio has finished, and then names the verse it will save. -->
        <button onclick="iitwSaveHere()" class="rq-btn rq-save" id="rqSaveBtn" disabled
                title="Play a verse, then save where you stopped">💾 Save my place
          <span dir="rtl" style="font-family:'Amiri',serif;">— احفظ موضعي</span></button>
      </div>
    </div>
    <div class="rq-save-note" id="rqSaveNote"></div>
    <div class="mushaf-info">
      📖 <strong>${pageCount}</strong> ${pageCount === 1 ? "page" : "pages"} in the Mushaf — ${pageRange}
      &nbsp;·&nbsp; ${arabicAyahs.length} ${arabicAyahs.length === 1 ? "verse" : "verses"}
      <span dir="rtl" style="font-family:'Amiri',serif;">
        — في المصحف <strong>${toArabicDigits(pageCount)}</strong> ${pageCount === 1 ? "صفحة" : "صفحات"}، ${pageRangeAr}، وعدد آياتها ${toArabicDigits(arabicAyahs.length)}
      </span>
    </div>`;

    // Per-ayah audio URLs are built directly from the chosen reciter.
    window._ayahAudios  = arabicAyahs.map(a => ayahAudioUrl(surah.n, a.numberInSurah));
    window._ayahNumbers = arabicAyahs.map(a => a.numberInSurah);
    window._lastFinishedAyah = null;

    /* Each verse carries its number on the Arabic line (in the traditional
       end-of-ayah marker) AND its full surah:ayah reference underneath.
       Without the reference you cannot find a verse again — reading "2:255"
       is what lets someone look it up or quote it correctly. */
    arabicAyahs.forEach((ayah, i) => {
      const translation = translationAyahs[i] ? translationAyahs[i].text : "";
      const audioUrl = ayahAudioUrl(surah.n, ayah.numberInSurah);
      const cite = surah.n + ":" + ayah.numberInSurah;
      html += `
        <div class="ayah-block" id="ayah-${ayah.numberInSurah}">
          <div class="arabic-text">${ayah.text} <span class="ayah-end" title="Verse ${ayah.numberInSurah}">${toArabicDigits(ayah.numberInSurah)}</span> <button onclick="playAyah('${audioUrl}', ${ayah.numberInSurah})" style="border:none;background:none;cursor:pointer;font-size:1.2rem;" title="Listen to this verse">🔊</button></div>
          <div class="translation-text"><span class="ayah-num">${ayah.numberInSurah}</span>${translation}</div>
          <div class="ayah-cite">Surah ${surah.name} — <strong>${cite}</strong> <span dir="rtl" style="font-family:'Amiri',serif;">سورة ${surah.arabic || surah.name} — الآية ${toArabicDigits(ayah.numberInSurah)}</span></div>
        </div>
      `;

      /* When the next verse falls on a different page of the Mushaf, this
         verse was the last one on its page — so the page ends here. The
         reader can then follow along in a printed copy and know exactly
         where each page finishes. */
      const next = arabicAyahs[i + 1];
      if (next && next.page !== ayah.page) {
        const n = pages.indexOf(ayah.page) + 1;
        html += `<div class="page-break">
          <span class="page-break-label">
            End of page ${ayah.page}
            <span class="page-break-sub">— ${n} of ${pageCount} in this surah</span>
            <span dir="rtl" style="font-family:'Amiri',serif;">نهاية الصفحة ${toArabicDigits(ayah.page)} — ${toArabicDigits(n)} من ${toArabicDigits(pageCount)}</span>
          </span>
        </div>`;
      }
    });

    body.innerHTML = html;
  } catch (err) {
    body.innerHTML = `
      <div class="error-msg">
        Unable to load this surah right now. Please check your internet connection and try again.<br><br>
        <em>Surah ${surah.name} (${surah.meaning}) — ${surah.verses} verses, ${surah.place}.</em>
      </div>
    `;
  }
}

function closeModal() {
  stopAudio();
  document.getElementById("surahModal").classList.remove("open");
}

let currentAudioEl = null;
let ayahPlayIndex = 0;

/* The verse whose audio last finished. This is what the "Save my place"
   button beside Stop offers to save — the reader asked for the save to
   become available at the moment a verse finishes playing, which is the
   natural point at which someone stops for the day. */
window._lastFinishedAyah = null;

function iitwMarkFinished(ayahNum) {
  window._lastFinishedAyah = ayahNum;
  if (typeof window.iitwArmSaveButton === "function") window.iitwArmSaveButton(ayahNum);
}

function playAyah(url, ayahNum) {
  stopAudio();
  currentAudioEl = new Audio(url);
  currentAudioEl.addEventListener("ended", () => iitwMarkFinished(ayahNum));
  currentAudioEl.play();
}

function playAllAyahs() {
  if (!window._ayahAudios || window._ayahAudios.length === 0) return;
  ayahPlayIndex = 0;
  playNextAyah();
}

function playNextAyah() {
  if (ayahPlayIndex >= window._ayahAudios.length) return;
  stopAudio();
  const num = window._ayahNumbers ? window._ayahNumbers[ayahPlayIndex] : ayahPlayIndex + 1;
  currentAudioEl = new Audio(window._ayahAudios[ayahPlayIndex]);
  currentAudioEl.addEventListener("ended", () => {
    // Each verse of a full-surah reading also arms the save, so stopping
    // part-way through still leaves the right verse ready to save.
    iitwMarkFinished(num);
    ayahPlayIndex++;
    playNextAyah();
  });
  currentAudioEl.play();
}

function stopAudio() {
  if (currentAudioEl) {
    currentAudioEl.pause();
    currentAudioEl.currentTime = 0;
    currentAudioEl = null;
  }
  window.speechSynthesis && window.speechSynthesis.cancel();
}

/* ============================================================
   SAVE MY PLACE — tied to the signed-in reader
   ============================================================
   Armed when a verse's audio finishes, so the button beside Stop
   knows which verse it is offering to save. Everything is stored
   against the username in js/account.js.
   ============================================================ */

window.iitwArmSaveButton = function (ayahNum) {
  const btn = document.getElementById("rqSaveBtn");
  if (!btn) return;
  const reader = (typeof iitwReader === "function") ? iitwReader() : null;
  btn.disabled = false;
  btn.classList.add("armed");
  btn.innerHTML = reader
    ? `💾 Save here — verse ${ayahNum} <span dir="rtl" style="font-family:'Amiri',serif;">— احفظ عند الآية ${toArabicDigits(ayahNum)}</span>`
    : `💾 Sign in to save verse ${ayahNum} <span dir="rtl" style="font-family:'Amiri',serif;">— سجّل الدخول لتحفظ</span>`;
};

function iitwSaveHere() {
  const note = document.getElementById("rqSaveNote");
  const surah = window._openSurah;
  const ayah = window._lastFinishedAyah;
  if (!surah || !ayah) return;

  const reader = (typeof iitwReader === "function") ? iitwReader() : null;
  if (!reader) {
    if (note) {
      note.className = "rq-save-note warn";
      note.innerHTML = `You need to sign in first — the place is saved under your username.
        <a href="#readerBox" onclick="closeModal()">Sign in at the top of this page.</a>
        <br><span dir="rtl" style="font-family:'Amiri',serif;">سجّل الدخول أولًا، فالموضع يُحفظ باسم المستخدم.
        <a href="#readerBox" onclick="closeModal()">سجّل من أعلى الصفحة.</a></span>`;
    }
    return;
  }

  const ok = iitwSavePlace({
    surah: surah.n,
    surahName: surah.name,
    surahArabic: surah.arabic,
    ayah: ayah
  });

  if (note) {
    note.className = ok ? "rq-save-note ok" : "rq-save-note warn";
    note.innerHTML = ok
      ? `Saved. Surah ${surah.name}, verse ${ayah} — you will be brought straight back here.
         <br><span dir="rtl" style="font-family:'Amiri',serif;">حُفظ. سورة ${surah.arabic}، الآية ${toArabicDigits(ayah)} — وستُعاد إلى هنا مباشرةً.</span>`
      : `Could not save on this browser.
         <br><span dir="rtl" style="font-family:'Amiri',serif;">تعذّر الحفظ في هذا المتصفح.</span>`;
  }
  if (typeof renderReaderBox === "function") renderReaderBox();
}

/* Reopen the saved surah and scroll to the saved verse. */
async function iitwGoToSavedPlace() {
  const place = (typeof iitwGetPlace === "function") ? iitwGetPlace() : null;
  if (!place) return;
  const surah = SURAHS.find(s => s.n === place.surah);
  if (!surah) return;
  await openSurah(surah);
  // openSurah fills the modal; wait a tick for the DOM, then jump to the verse.
  setTimeout(() => {
    const el = document.getElementById("ayah-" + place.ayah);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ayah-flash");
      setTimeout(() => el.classList.remove("ayah-flash"), 2200);
    }
    window._lastFinishedAyah = place.ayah;
    window.iitwArmSaveButton(place.ayah);
  }, 120);
}

/* ============================================================
   THE SIGN-IN PANEL AT THE TOP OF THE QURAN PAGE
   ============================================================ */

function renderReaderBox() {
  const box = document.getElementById("readerBox");
  if (!box || typeof iitwReader !== "function") return;

  const reader = iitwReader();

  if (reader) {
    const p = reader.place;
    box.innerHTML = `
      <div class="reader-in">
        <div class="reader-who">
          <span class="reader-hi">Signed in as <strong>${iitwEsc(reader.name)}</strong></span>
          <span dir="rtl" style="font-family:'Amiri',serif;">مسجَّل الدخول باسم <strong>${iitwEsc(reader.name)}</strong></span>
        </div>
        ${p ? `
          <button class="btn btn-primary reader-continue" onclick="iitwGoToSavedPlace()">
            ↩ Continue where you stopped — Surah ${iitwEsc(p.surahName)}, verse ${p.ayah}
            <span dir="rtl" style="font-family:'Amiri',serif;">— تابع من حيث وقفت: سورة ${iitwEsc(p.surahArabic || "")} الآية ${toArabicDigits(p.ayah)}</span>
          </button>
          <div class="reader-meta">Saved ${new Date(p.at).toLocaleString()}
            · <a href="#" onclick="iitwForgetPlace(event)">forget it</a></div>
        ` : `
          <div class="reader-meta">
            Nothing saved yet. Open a surah, play a verse, and the <strong>Save my place</strong> button beside Stop will remember it.
            <br><span dir="rtl" style="font-family:'Amiri',serif;">لا يوجد موضعٌ محفوظ بعد. افتح سورة وشغّل آية، ثم احفظ بزرّ «احفظ موضعي» بجانب زر الإيقاف.</span>
          </div>
        `}
        <button class="btn btn-outline btn-small" onclick="iitwDoSignOut()">Sign out <span dir="rtl" style="font-family:'Amiri',serif;">— خروج</span></button>
      </div>`;
    return;
  }

  box.innerHTML = `
    <div class="reader-out">
      <div class="reader-lead">
        <strong>Save the verse you stopped at.</strong>
        Choose a username and a password, and the exact surah and verse you reach will be kept for you.
        <br><span dir="rtl" style="font-family:'Amiri',serif;">احفظ الآية التي وقفت عندها. اختر اسم مستخدم وكلمة مرور، ويُحفظ لك موضعك بالسورة والآية بالضبط.</span>
      </div>

      <div class="reader-form">
        <input type="text" id="rdUser" autocomplete="username" placeholder="Username — اسم المستخدم" dir="auto" />
        <input type="password" id="rdPass" autocomplete="current-password" placeholder="Password — كلمة المرور" />
        <button class="btn btn-primary btn-small" onclick="iitwDoSignIn()">Sign in <span dir="rtl" style="font-family:'Amiri',serif;">— دخول</span></button>
        <button class="btn btn-outline btn-small" onclick="iitwDoSignUp()">Create <span dir="rtl" style="font-family:'Amiri',serif;">— إنشاء</span></button>
      </div>

      <div class="reader-rules">
        Username: 3–20 characters, starting with a letter — letters, numbers, dot or underscore. Capitals are fine, and it does <strong>not</strong> have to be an email.
        Password: 6 characters or more, anything you like.
        <br><span dir="rtl" style="font-family:'Amiri',serif;">اسم المستخدم: من ٣ إلى ٢٠ خانة يبدأ بحرف — حروف أو أرقام أو نقطة أو شَرطة سفلية، والحروف الكبيرة مقبولة، و<strong>ليس</strong> بريدًا إلكترونيًا. وكلمة المرور: ستة أحرف فأكثر، وما شئت.</span>
      </div>

      <div class="reader-honest">
        ⚠️ <strong>Read this once.</strong> This website has no server, so the account and your saved verse live in <strong>this browser on this device</strong>. They will not appear on another phone or computer, and clearing the browser's data erases them. Your password is stored only as a scrambled hash, never as text — but do not reuse an important password here.
        <br><span dir="rtl" style="font-family:'Amiri',serif;">تنبيه يُقرأ مرة: هذا الموقع بلا خادم، فالحساب والموضع المحفوظ في <strong>هذا المتصفح على هذا الجهاز</strong> فقط. ولن يظهرا على هاتفٍ أو حاسوبٍ آخر، ومسح بيانات المتصفح يمحوهما. وكلمة المرور تُخزَّن مشفَّرةً لا نصًّا — ومع ذلك لا تستعمل هنا كلمة مرورٍ مهمة.</span>
      </div>

      <div id="rdMsg" class="reader-msg" style="display:none;"></div>
    </div>`;
}

function iitwReaderMsg(text, ok) {
  const m = document.getElementById("rdMsg");
  if (!m) return;
  m.style.display = "";
  m.className = "reader-msg " + (ok ? "ok" : "warn");
  m.innerHTML = text;
}

async function iitwDoSignIn() {
  const u = document.getElementById("rdUser").value;
  const p = document.getElementById("rdPass").value;
  const r = await iitwSignIn(u, p);
  if (r.ok) { renderReaderBox(); return; }
  iitwReaderMsg(r.msg.en + `<br><span dir="rtl" style="font-family:'Amiri',serif;">${r.msg.ar}</span>`, false);
}

async function iitwDoSignUp() {
  const u = document.getElementById("rdUser").value;
  const p = document.getElementById("rdPass").value;
  const r = await iitwSignUp(u, p);
  if (r.ok) { renderReaderBox(); return; }
  iitwReaderMsg(r.msg.en + `<br><span dir="rtl" style="font-family:'Amiri',serif;">${r.msg.ar}</span>`, false);
}

function iitwDoSignOut() {
  iitwSignOut();
  renderReaderBox();
}

function iitwForgetPlace(e) {
  if (e) e.preventDefault();
  iitwClearPlace();
  renderReaderBox();
}

document.addEventListener("DOMContentLoaded", () => {
  renderReaderBox();
  if (window.applyI18n) window.applyI18n();
});
