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

    /* A surah name reaches an English reader in more than one spelling, and
       the reader has no way of knowing which one this site chose. Measured:
       "Ya-Sin" found the surah and "Yaseen" found NOTHING. The same skeleton
       used by the person search on search.html is applied here, so Yaseen,
       Yaaseen and Ya-Sin all land on 36. `iitwTranslitWords` lives in
       main.js, which loads after this file — it is only ever called from an
       input handler, long after both files have run, but the guard keeps
       this honest if that load order ever changes. */
    const translitOK = typeof iitwTranslitWords === "function" && !/[ء-ي]/.test(rawQ);
    const qSkel = translitOK ? iitwTranslitWords(q).join("") : "";

    const filtered = SURAHS.filter(s => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.meaning.toLowerCase().includes(q) ||
        String(s.n) === q ||
        s.arabic.includes(rawQ) ||
        (qSkel.length >= 3 && iitwTranslitWords(s.name).join("").includes(qSkel));
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
    let arabicAyahs, translationAyahs;

    /* ---------- THE TEXT COMES FROM THIS SITE, NOT FROM A SERVER ----------
       js/quran-text.js carries every verse, its translation and its Mushaf
       page. Reading it needs no connection at all, which is the whole point:
       the owner reported twice that a surah would not open without internet,
       and the cause was that the text was fetched from api.alquran.cloud on
       every single open. Caching those replies only ever helped for surahs
       that had already been read once — useless to someone who installs the
       app and then goes offline.

       The API is kept only as a fallback for the case where the local file
       has not loaded, so nothing is lost if a browser fails to parse it. */
    const local = (typeof QURAN_TEXT !== "undefined") ? QURAN_TEXT[String(surah.n)] : null;

    if (local && local.a && local.a.length) {
      arabicAyahs = local.a.map((t, i) => ({
        numberInSurah: i + 1,
        text: t,
        page: local.p[i]
      }));
      translationAyahs = local.e.map((t, i) => ({
        numberInSurah: i + 1,
        text: t
      }));
    } else {
      const [arabicRes, translationRes] = await Promise.all([
        fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/quran-uthmani`),
        fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/en.sahih`)
      ]);

      if (!arabicRes.ok || !translationRes.ok) throw new Error("Network response was not ok");

      const arabicData = await arabicRes.json();
      const translationData = await translationRes.json();

      arabicAyahs = arabicData.data.ayahs;
      translationAyahs = translationData.data.ayahs;
    }

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

    /* Tadabbur, if this surah has any. `iitwTadabburFor` returns null when
       it does not, and the button is then not drawn at all — an empty
       Tadabbur panel would promise something the surah has not got yet.
       Guarded with typeof because quran.html is not the only page that
       could ever load quran.js. */
    const tad = (typeof iitwTadabburFor === "function") ? iitwTadabburFor(surah.n) : null;
    window._tadOpen = false;

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
        <!-- Shown on EVERY surah, never conditionally. It used to be drawn
             only where tadabbur existed, which meant it was simply absent on
             106 of the 114 surahs — and an absent button reads as a broken
             one, especially after switching language, when you are opening a
             different surah anyway. It now always appears and says plainly
             when a surah has not been written yet. -->
        <button onclick="iitwToggleTadabbur()" class="rq-btn rq-tad${tad ? "" : " rq-tad-empty"}" id="rqTadBtn"
                title="Why is this verse here? Why this word?"><span class="en-only">🧠 Tadabbur</span><span class="ar-only" dir="rtl" style="font-family:'Amiri',serif;">🧠 تدبّر</span></button>
      </div>
    </div>
    <div class="rq-save-note" id="rqSaveNote"></div>
    <div class="mushaf-info">
      📖 <strong>${pageCount}</strong> ${pageCount === 1 ? "page" : "pages"} in the Mushaf — ${pageRange}
      &nbsp;·&nbsp; ${arabicAyahs.length} ${arabicAyahs.length === 1 ? "verse" : "verses"}
      <span dir="rtl" style="font-family:'Amiri',serif;">
        — في المصحف <strong>${toArabicDigits(pageCount)}</strong> ${pageCount === 1 ? "صفحة" : "صفحات"}، ${pageRangeAr}، وعدد آياتها ${toArabicDigits(arabicAyahs.length)}
      </span>
    </div>
    ${tad ? iitwTadabburSurahHtml(tad, surah) : iitwTadabburEmptyHtml(surah)}`;

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
          ${tad ? iitwTadabburAyahHtml(tad, ayah.numberInSurah) : ""}
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

/* ============================================================
   TADABBUR — rendering
   ------------------------------------------------------------
   The data lives in js/tadabbur.js; this draws it. Two places:
   a panel under the surah heading (why this surah, why here),
   and a block under each verse that has one.

   Everything starts HIDDEN. The reader came to read the Quran,
   and a wall of commentary between every two verses would push
   the text itself off the screen. The button opens it.
   ============================================================ */

/* Blank lines in the content become real paragraphs. The content
   is static and written in this repo — there is no user input on
   this path — but it is still inserted as text-bearing markup
   only, never into an attribute. */
/* **bold** -> <strong>. js/tadabbur.js carries 486 of these markers and
   nothing converted them, so every Arabic reader of the Tadabbur panel was
   being shown the literal asterisks. English was unaffected because the
   English text uses CAPITALS for emphasis, which is how it stayed hidden.
   Non-greedy, and no look-behind — a look-behind breaks older Safari at
   parse time and would kill the whole file.

   Heading fields (h / title / w) are inserted raw elsewhere and never reach
   this function, so they must not carry markers. */
function tadPara(text, rtl) {
  if (!text) return "";
  return String(text).split("\n\n").map(function (p) {
    return '<p' + (rtl ? ' dir="rtl"' : '') + '>' +
      p.replace(/\n/g, "<br>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") + '</p>';
  }).join("");
}

/* What KIND of claim this is. The site grades hadith; this grades
   meaning the same way, because a reader cannot weigh a statement
   without knowing whether it is revelation, a lexicographer, or a
   scholar's reading. */
const TAD_STRENGTH = {
  quran:    { en: "The Quran",                     ar: "قرآن",              cls: "t-quran" },
  hadith:   { en: "Hadith — graded, see reference", ar: "حديث — مع درجته",   cls: "t-hadith" },
  lugha:    { en: "Language — from a named lexicon", ar: "لغة — من معجمٍ مسمّى", cls: "t-lugha" },
  tafsir:   { en: "A scholar's reading — not revelation", ar: "قول مفسّر — لا وحي", cls: "t-tafsir" },
  qiraah:   { en: "A difference in the established recitations", ar: "اختلاف قراءات متواترة", cls: "t-qiraah" },
  ikhtilaf: { en: "The scholars differed — both views given", ar: "خلافٌ بين أهل العلم — والقولان مذكوران", cls: "t-ikhtilaf" },
  note:     { en: "A note on coverage",             ar: "بيان عن حدود ما أُنجز", cls: "t-note" }
};

function tadBadge(k) {
  const s = TAD_STRENGTH[k];
  if (!s) return "";
  return '<span class="tad-badge ' + s.cls + '">' +
    '<span class="en-only">' + s.en + '</span>' +
    '<span class="ar-only" dir="rtl">' + s.ar + '</span></span>';
}

/* THE MAIN IDEA OF THE SURAH — الفكرة الأساسية
   The first thing shown when Tadabbur is opened, before any
   verse detail. Every surah is driving at one thing; this says
   what it is, why, and the verse where the surah says it most
   plainly. It is rendered on surahs with no verse-by-verse
   tadabbur too, so the button always answers with something
   real. Data in js/concepts.js. */
function iitwConceptHtml(surahNum) {
  const c = (typeof iitwConceptFor === "function") ? iitwConceptFor(surahNum) : null;
  if (!c) return "";
  return '<div class="tad-concept">' +
    '<div class="tad-concept-label">💡 <span class="en-only">The main idea of this surah</span>' +
      '<span class="ar-only" dir="rtl">الفكرة الأساسية لهذه السورة</span></div>' +
    '<div class="tad-concept-line"><span class="en-only">' + c.c + '</span>' +
      '<span class="ar-only" dir="rtl">' + c.cAr + '</span></div>' +
    '<div class="en-only">' + tadPara(c.w) + '</div>' +
    '<div class="ar-only">' + tadPara(c.wAr, true) + '</div>' +
    (c.a ? '<div class="tad-ref" dir="auto"><span class="en-only">Where the surah says it: ' + c.a + '</span>' +
           '<span class="ar-only" dir="rtl">حيث تقوله السورة: ' + c.a + '</span></div>' : "") +
    (c.careful ? '<div class="tad-careful">' +
        '<div class="tad-careful-label">⚠ <span class="en-only">Commonly misread</span>' +
          '<span class="ar-only" dir="rtl">ممّا يُساء فهمه</span></div>' +
        '<div class="en-only">' + tadPara(c.careful) + '</div>' +
        '<div class="ar-only">' + tadPara(c.carefulAr, true) + '</div></div>' : "") +
    '</div>';
}

/* The panel under the surah title: why the Quran opens here, why
   seven verses, and — when only part of a surah is covered — a
   plain statement of exactly which verses have tadabbur. */
function iitwTadabburSurahHtml(tad, surah) {
  const d = tad.data;
  let h = '<div class="tad-surah tad-hidden" id="tadSurahPanel">';
  h += iitwConceptHtml(surah.n);

  h += '<div class="tad-surah-head">🧠 <span class="en-only">' + d.surahTitle + '</span>' +
       '<span class="ar-only" dir="rtl">' + d.surahTitleAr + '</span></div>';

  (d.surahWhy || []).forEach(function (s) {
    h += '<div class="tad-why">' +
         '<h4><span class="en-only">' + s.h + '</span><span class="ar-only" dir="rtl">' + s.hAr + '</span></h4>' +
         '<div class="en-only">' + tadPara(s.en) + '</div>' +
         '<div class="ar-only">' + tadPara(s.ar, true) + '</div>' +
         (s.ref ? '<div class="tad-ref" dir="auto">' + s.ref + '</div>' : "") +
         (s.strength ? tadBadge(s.strength) : "") +
         '</div>';
  });

  /* Which verses actually have tadabbur. Derived from the data, not
     typed — the same lesson the analytics page taught.

     The numbers are BUTTONS, not text. Ayat al-Kursi has had a full
     entry all along, but it sits 255 verses down a surah of 286, so
     the only way to reach it was to scroll past everything — and the
     owner reasonably concluded it had never been written. A list that
     names a verse without being able to take you to it is a catalogue
     of things you cannot find. */
  const jump = tad.verses.map(function (v) {
    return '<button type="button" class="tad-jump" onclick="iitwJumpToTadabburVerse(' + v + ')">' +
           '<span class="en-only">' + v + '</span>' +
           '<span class="ar-only" dir="rtl">' +
             (typeof toArabicDigits === "function" ? toArabicDigits(v) : v) + '</span>' +
           '</button>';
  }).join("");
  h += '<div class="tad-coverage">' +
       '<span class="en-only">Tadabbur is written for ' +
         (tad.verses.length === 1 ? 'verse ' : 'verses ') + '</span>' +
       '<span class="ar-only" dir="rtl">التدبّر مكتوبٌ لِ' +
         (tad.verses.length === 1 ? 'الآية ' : 'الآيات ') + '</span>' +
       jump +
       '<span class="en-only"> of this surah — tap a number to go straight to it' +
         (tad.partial ? '. The rest has not been written yet, and nothing here pretends otherwise.' : '.') +
       '</span>' +
       '<span class="ar-only" dir="rtl"> من هذه السورة — انقُر الرقم ينقلك إليه' +
         (tad.partial ? '. وما بقي لم يُكتب بعد، وليس هنا ما يُوهم غير ذلك.' : '.') +
       '</span></div>';

  h += '</div>';
  return h;
}

/* Shown when a surah has no tadabbur written yet. The button is
   drawn on every surah, so pressing it must always answer — an
   inert button is worse than an absent one. */
function iitwTadabburEmptyHtml(surah) {
  /* A surah with no verse-by-verse tadabbur may still have its main idea
     written, and that is the thing most readers want anyway. Show it, and
     only then say the verse detail is still to come. */
  const concept = iitwConceptHtml(surah.n);
  return '<div class="tad-surah tad-surah-empty tad-hidden" id="tadSurahPanel">' +
    concept +
    '<div class="tad-surah-head">🧠 <span class="en-only">' +
      (concept ? "The verse-by-verse detail is still to come" : "Tadabbur for this surah is not written yet") + '</span>' +
      '<span class="ar-only" dir="rtl">' +
      (concept ? "وأمّا تفصيل الآيات فلم يُكتب بعد" : "لم يُكتب تدبّر هذه السورة بعد") + '</span></div>' +
    '<div class="en-only"><p>This is written verse by verse and word by word — why each verse sits where it does, why a particular word was chosen over the one beside it, and which verse elsewhere in the Quran completes the thought. At that depth it is slow, and Surah ' + surah.name + ' has not been done yet.</p>' +
      '<p>Rather than show you a thin summary and call it tadabbur, this says plainly that it is not ready. Open the Quran page and the section above the surah list names every surah that is finished.</p></div>' +
    '<div class="ar-only" dir="rtl"><p>هذا يُكتب آيةً آية وكلمةً كلمة: لِمَ وقعت كلّ آيةٍ في موضعها، ولِمَ اختير لفظٌ دون الذي بجانبه، وأيُّ آيةٍ في موضعٍ آخر من القرآن تُتمّ المعنى. وهو على هذا العمق بطيء، وسورة ' + (surah.arabic || surah.name) + ' لم تُعمل بعد.</p>' +
      '<p>وبدل أن يُعرض عليك تلخيصٌ رقيقٌ يُسمّى تدبّرًا، يُقال لك صراحةً إنه لم يتمّ. وفي صدر صفحة القرآن بيانُ السور التي فُرغ منها.</p></div>' +
    '</div>';
}

/* The block under one verse. Returns "" when this verse has no
   entry, so verses without tadabbur are simply left alone. */
function iitwTadabburAyahHtml(tad, n) {
  const a = (tad.data.ayat || []).filter(function (x) { return x.n === n; })[0];
  if (!a) return "";

  let h = '<div class="tad-ayah tad-hidden">';
  h += '<div class="tad-ayah-head">🧠 <span class="en-only">Why this verse, and why these words</span>' +
       '<span class="ar-only" dir="rtl">لِمَ هذه الآية، ولِمَ هذه الألفاظ</span></div>';

  /* WHICH VERSE THIS IS. The panel used to open straight into the
     explanation without ever naming the surah or the verse, so a reader deep
     inside a long surah had no anchor for what they were reading and nothing
     to quote or look up afterwards. `tad.num` carries the surah number; the
     name is read from SURAHS so it can never drift from the Quran page. */
  const surahMeta = (typeof SURAHS !== "undefined" && tad.num)
    ? SURAHS.filter(function (s) { return s.n === tad.num; })[0] : null;
  if (surahMeta) {
    h += '<div class="tad-which">' +
         '<span class="en-only">Surah ' + surahMeta.name +
           ' &middot; verse ' + n + '  (' + surahMeta.n + ':' + n + ')</span>' +
         '<span class="ar-only" dir="rtl">سورة ' + surahMeta.arabic +
           ' &middot; الآية ' + toArabicDigits(n) +
           '  (' + toArabicDigits(surahMeta.n) + ':' + toArabicDigits(n) + ')</span>' +
         '</div>';
  }

  if (a.arNote) {
    h += '<div class="tad-note-small"><span class="en-only">' + a.arNote + '</span>' +
         '<span class="ar-only" dir="rtl">' + a.arNoteAr + '</span></div>';
  }

  if (a.why) {
    h += '<div class="tad-sec"><div class="en-only">' + tadPara(a.why) + '</div>' +
         '<div class="ar-only">' + tadPara(a.whyAr, true) + '</div>' +
         (a.ref ? '<div class="tad-ref" dir="auto">' + a.ref + '</div>' : "") +
         (a.strength ? tadBadge(a.strength) : "") + '</div>';
  }

  /* WHAT PEOPLE GET WRONG ABOUT THIS VERSE.
     The whole reason this section exists: a verse that corrects an idea most
     readers were taught and never questioned. Styled loudly — it is the
     thing to stop at, not a footnote. */
  if (a.misunderstood) {
    h += '<div class="tad-misread">' +
         '<div class="tad-misread-label">⚠ <span class="en-only">What people get wrong here</span>' +
           '<span class="ar-only" dir="rtl">ما يُخطئ الناس فيه هنا</span></div>' +
         '<div class="en-only">' + tadPara(a.misunderstood) + '</div>' +
         '<div class="ar-only" dir="rtl">' + tadPara(a.misunderstoodAr, true) + '</div></div>';
  }

  /* The plain-language box. Same one used on the Judgement and Golden Age
     pages: ordinary words, for a reader who is not a student of knowledge. */
  if (a.plain) {
    h += '<div class="tad-plain">' +
         '<div class="tad-plain-label">💬 <span class="en-only">In plain words</span>' +
           '<span class="ar-only" dir="rtl">بكلامٍ بسيط</span></div>' +
         '<div class="en-only">' + tadPara(a.plain) + '</div>' +
         '<div class="ar-only" dir="rtl">' + tadPara(a.plainAr, true) + '</div></div>';
  }

  /* Why THIS word and not the one beside it — the thing the whole
     feature was asked for. */
  (a.words || []).forEach(function (w) {
    h += '<div class="tad-word">' +
         '<div class="tad-word-head"><span class="tad-w" dir="rtl">' + w.w + '</span>' +
           /* English-only: a transliteration exists for a reader who cannot
              read the Arabic word, and in Arabic mode that word is printed
              right beside it. Some of these slots also hold a short English
              gloss ("they establish it — not merely perform it"), which was
              showing untranslated on an Arabic page. */
           '<span class="tad-translit en-only">' + w.t + '</span></div>' +
         '<div class="tad-word-body">' +
           '<div class="en-only">' + tadPara(w.meaning) + '</div>' +
           '<div class="ar-only">' + tadPara(w.meaningAr, true) + '</div>';
    if (w.instead) {
      h += '<div class="tad-instead">' +
           '<div class="tad-instead-label"><span class="en-only">Why this word and not another</span>' +
             '<span class="ar-only" dir="rtl">لِمَ هذه الكلمة دون غيرها</span></div>' +
           '<div class="en-only">' + tadPara(w.instead) + '</div>' +
           '<div class="ar-only">' + tadPara(w.insteadAr, true) + '</div></div>';
    }
    h += (w.source ? '<div class="tad-ref" dir="auto">' + w.source + '</div>' : "") +
         (w.strength ? tadBadge(w.strength) : "") +
         '</div></div>';
  });

  /* Where else the Quran says it — the verse that completes this one. */
  (a.links || []).forEach(function (l) {
    h += '<div class="tad-link">' +
         '<div class="tad-link-label">🔗 <span class="en-only">Where the thought is completed</span>' +
           '<span class="ar-only" dir="rtl">حيث يتمّ المعنى</span></div>';
    if (l.ar) h += '<div class="tad-link-ar" dir="rtl">' + l.ar + '</div>';
    if (l.en) h += '<div class="tad-link-en en-only">' + l.en + '</div>';
    h += '<div class="tad-ref" dir="auto">' + l.ref + '</div>' +
         '<div class="en-only">' + tadPara(l.how) + '</div>' +
         '<div class="ar-only">' + tadPara(l.howAr, true) + '</div></div>';
  });

  /* Where the scholars differed. Both sides, by name, then which
     way the weight leaned — never a single view presented as the
     only one. */
  if (a.differ) {
    const df = a.differ;
    h += '<div class="tad-differ">' +
         '<div class="tad-differ-head">⚖️ <span class="en-only">' + df.title + '</span>' +
           '<span class="ar-only" dir="rtl">' + df.titleAr + '</span></div>';
    (df.views || []).forEach(function (v) {
      h += '<div class="tad-view">' +
           '<div class="tad-who"><span class="en-only">' + v.who + '</span>' +
             '<span class="ar-only" dir="rtl">' + v.whoAr + '</span></div>' +
           '<div class="en-only">' + tadPara(v.view) + '</div>' +
           '<div class="ar-only">' + tadPara(v.viewAr, true) + '</div></div>';
    });
    h += '<div class="tad-weight">' +
         '<div class="en-only">' + tadPara(df.weight) + '</div>' +
         '<div class="ar-only">' + tadPara(df.weightAr, true) + '</div></div>' +
         tadBadge(df.strength || "ikhtilaf") + '</div>';
  }

  h += '</div>';
  return h;
}

/* Jump from the coverage list to the verse itself.

   It must OPEN the tadabbur blocks first, not just scroll: the blocks
   carry .tad-hidden until the button is pressed, so scrolling to a
   verse while they are hidden lands the reader on the bare ayah with
   nothing under it — which looks exactly like the bug this is meant
   to fix. Reuses the flash that save-my-place already uses, so the
   eye lands on the right verse rather than somewhere near it. */
function iitwJumpToTadabburVerse(n) {
  if (!window._tadOpen) iitwToggleTadabbur();
  const el = document.getElementById("ayah-" + n);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("ayah-flash");
  setTimeout(function () { el.classList.remove("ayah-flash"); }, 2200);
}

/* One button shows and hides every tadabbur block in the open
   surah, including the surah panel. */
function iitwToggleTadabbur() {
  const open = !window._tadOpen;
  window._tadOpen = open;

  document.querySelectorAll("#modalBody .tad-surah, #modalBody .tad-ayah")
    .forEach(function (el) { el.classList.toggle("tad-hidden", !open); });

  /* The label is rebuilt as .en-only / .ar-only spans rather than as one
     string with the Arabic appended. Written as a single string it showed
     "🧠 Tadabbur — تدبّر" in Arabic mode, leaking the English word onto an
     Arabic page. */
  const btn = document.getElementById("rqTadBtn");
  if (btn) {
    btn.classList.toggle("armed", open);
    btn.innerHTML =
      '<span class="en-only">🧠 ' + (open ? "Hide Tadabbur" : "Tadabbur") + '</span>' +
      '<span class="ar-only" dir="rtl" style="font-family:\'Amiri\',serif;">🧠 ' +
        (open ? "إخفاء التدبّر" : "تدبّر") + '</span>';
  }

  /* Newly revealed markup has to be translated, or it renders in
     English while the page is in Arabic. */
  if (open && window.applyI18n) window.applyI18n();
}

/* The opening section on the page itself — why ponder at all,
   built from TADABBUR_INTRO. Rendered above the surah grid so it
   is read before any surah is opened. */
function renderTadabburIntro() {
  const box = document.getElementById("tadabburIntro");
  if (!box || typeof TADABBUR_INTRO === "undefined") return;
  const d = TADABBUR_INTRO;

  let h = '<div class="tad-intro">' +
    '<h2 class="tad-intro-title"><span class="en-only">🧠 ' + d.title + '</span>' +
      '<span class="ar-only" dir="rtl">🧠 ' + d.titleAr + '</span></h2>' +
    '<p class="tad-intro-lead"><span class="en-only">' + d.lead + '</span>' +
      '<span class="ar-only" dir="rtl">' + d.leadAr + '</span></p>';

  h += '<div class="tad-verse-big">' +
       '<div class="tad-verse-ar" dir="rtl">' + d.verse.ar + '</div>' +
       '<div class="tad-verse-en en-only">' + d.verse.en + '</div>' +
       '<div class="tad-ref" dir="auto">' + d.verse.ref + '</div>' + tadBadge(d.verse.strength) + '</div>';

  h += '<div class="tad-context">' +
       '<h3><span class="en-only">' + d.context.title + '</span>' +
         '<span class="ar-only" dir="rtl">' + d.context.titleAr + '</span></h3>' +
       '<div class="en-only">' + tadPara(d.context.en) + '</div>' +
       '<div class="ar-only">' + tadPara(d.context.ar, true) + '</div></div>';

  h += '<div class="tad-more">';
  (d.more || []).forEach(function (m) {
    h += '<div class="tad-more-item">' +
         '<div class="tad-link-ar" dir="rtl">' + m.ar + '</div>' +
         '<div class="tad-link-en en-only">' + m.en + '</div>' +
         '<div class="tad-ref" dir="auto">' + m.ref + '</div>' +
         '<div class="tad-more-note"><span class="en-only">' + m.note + '</span>' +
           '<span class="ar-only" dir="rtl">' + m.noteAr + '</span></div></div>';
  });
  h += '</div>';

  h += '<div class="tad-method">' +
       '<h3><span class="en-only">' + d.methodTitle + '</span>' +
         '<span class="ar-only" dir="rtl">' + d.methodTitleAr + '</span></h3>' +
       '<p><span class="en-only">' + d.methodLead + '</span>' +
         '<span class="ar-only" dir="rtl">' + d.methodLeadAr + '</span></p><ol>';
  (d.method || []).forEach(function (m) {
    h += '<li><strong><span class="en-only">' + m.q + '</span>' +
         '<span class="ar-only" dir="rtl">' + m.qAr + '</span></strong>' +
         '<span class="en-only"> ' + m.d + '</span>' +
         '<span class="ar-only" dir="rtl"> ' + m.dAr + '</span></li>';
  });
  h += '</ol></div>';

  /* Which surahs are covered — derived from the data, so adding a
     surah to tadabbur.js is enough to list it here. */
  const nums = (typeof iitwTadabburSurahs === "function") ? iitwTadabburSurahs() : [];
  const names = nums.map(function (n) {
    const s = (typeof SURAHS !== "undefined") ? SURAHS.filter(function (x) { return x.n === n; })[0] : null;
    return s ? (n + ". " + s.name) : String(n);
  });
  const namesAr = nums.map(function (n) {
    const s = (typeof SURAHS !== "undefined") ? SURAHS.filter(function (x) { return x.n === n; })[0] : null;
    return s ? (toArabicDigits(n) + ". " + (s.arabic || s.name)) : toArabicDigits(n);
  });

  h += '<div class="tad-covered">' +
       '<div class="en-only"><strong>Where to find it:</strong> open any surah below and press the ' +
         '<strong>🧠 Tadabbur</strong> button beside Stop. It is written so far for ' + names.join(" · ") + ' — and the button only appears on a surah that has it. The Quran is 6,236 verses and this is done verse by verse and word by word, so it grows rather than arriving finished.</div>' +
       '<div class="ar-only" dir="rtl"><strong>أين تجده:</strong> افتح أيّ سورةٍ أدناه واضغط زرّ ' +
         '<strong>🧠 تدبّر</strong> بجانب زرّ الإيقاف. وقد كُتب إلى الآن لِ' + namesAr.join(" · ") +
         '، ولا يظهر الزرّ إلا على سورةٍ كُتب لها. والقرآن ستّة آلافٍ ومئتان وستٌّ وثلاثون آية، وهذا يُكتب آيةً آية وكلمةً كلمة، فهو ينمو ولا يأتي تامًّا.</div></div>';

  h += '<div class="tad-notice"><span class="en-only">' + d.notice + '</span>' +
       '<span class="ar-only" dir="rtl">' + d.noticeAr + '</span></div>';

  h += '</div>';
  box.innerHTML = h;
}

document.addEventListener("DOMContentLoaded", () => {
  renderReaderBox();
  renderTadabburIntro();
  if (window.applyI18n) window.applyI18n();
});
