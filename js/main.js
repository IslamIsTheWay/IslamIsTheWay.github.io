/* ============================================
   Islam Is The Way — Shared Site Behaviour
   ============================================ */

/* ---------- Anonymous visit analytics ----------
   Counts total visits, per-page visits, and which nav sections are clicked,
   using a free public counter service. No personal data is collected. The
   numbers are read back only inside the admin analytics panel. Everything is
   wrapped in try/catch so a counter outage can never break the site. */
(function () {
  const NS = "iitw-islamistheway-2026";
  function bump(key) {
    try { fetch("https://abacus.jasoncameron.dev/hit/" + NS + "/" + key).catch(() => {}); } catch (e) {}
  }
  try {
    let page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    page = page.replace(".html", "") || "index";
    // Count each visitor once per browser session to reflect real people.
    if (!sessionStorage.getItem("iitw-session")) {
      bump("total");
      sessionStorage.setItem("iitw-session", "1");
    }
    if (!sessionStorage.getItem("iitw-pv-" + page)) {
      bump("page-" + page);
      sessionStorage.setItem("iitw-pv-" + page, "1");
    }
    document.addEventListener("click", function (e) {
      const a = e.target.closest("nav.main-nav a");
      if (a) {
        const label = (a.textContent || "").trim().toLowerCase().replace(/[^a-z]/g, "");
        if (label) bump("nav-" + label);
      }
    });
  } catch (e) {}
})();

/* ---------- Text-to-speech for Hadith (Arabic + English) ----------
   Fixes two bugs: (1) the 🔊 button emoji was being read aloud as
   "speaker high volume", and (2) Arabic used the browser's default
   (often female, mispronouncing) voice. We now strip all emoji/UI
   symbols before speaking and prefer a MALE Arabic voice when the
   device has one installed. */
let _iitwVoices = [];
function _iitwLoadVoices() {
  if (window.speechSynthesis) _iitwVoices = window.speechSynthesis.getVoices() || [];
}
if (window.speechSynthesis) {
  _iitwLoadVoices();
  window.speechSynthesis.onvoiceschanged = _iitwLoadVoices;
}

// Male voices we know about, per platform. Listed first so a man's voice is
// always preferred over a woman's, in both languages.
const _MALE_AR = /naayf|nayef|maged|majed|tarik|hamed|fahd|salim|khalid|ahmed|omar|hattab/i;
const _MALE_EN = /david|george|mark|guy|ryan|james|christopher|eric|daniel|alex|fred|male/i;
const _FEMALE  = /hoda|salma|zeina|laila|amira|hazel|susan|zira|female|linda|heera|catherine|samantha|victoria|karen|moira|tessa|aria|jenny|michelle/i;

function _iitwVoiceList() {
  if (_iitwVoices.length) return _iitwVoices;
  return window.speechSynthesis ? (window.speechSynthesis.getVoices() || []) : [];
}

const IITW_AR_VOICE_KEY = "iitw-ar-voice";

function _iitwArabicVoices() {
  return _iitwVoiceList().filter(v => (v.lang || "").toLowerCase().startsWith("ar"));
}

function _iitwPickVoice(langPrefix) {
  const voices = _iitwVoiceList().filter(v => (v.lang || "").toLowerCase().startsWith(langPrefix));
  if (!voices.length) return null;

  // For Arabic, honour the reader's own choice first.
  if (langPrefix === "ar") {
    const chosen = localStorage.getItem(IITW_AR_VOICE_KEY);
    const match = voices.find(v => v.name === chosen);
    if (match) return match;
  }

  const malePattern = langPrefix === "ar" ? _MALE_AR : _MALE_EN;

  /* Quality first, then gender. Google's network voices (the same family
     Google Translate uses) pronounce Arabic letters like خ ح ع ق and the word
     الله far better than the offline system voices, so they are preferred. */
  const score = v => {
    let s = 0;
    if (v.localService === false) s += 4;          // network voice — best quality
    if (/google/i.test(v.name)) s += 4;            // Google's own voice
    if (/natural|neural|online|enhanced|premium/i.test(v.name)) s += 3;
    if (malePattern.test(v.name)) s += 2;          // a man's voice
    else if (!_FEMALE.test(v.name)) s += 1;
    return s;
  };

  return voices.slice().sort((a, b) => score(b) - score(a))[0];
}

/* A small panel letting the reader choose which Arabic voice is used, and
   telling them plainly what to do if their device has none. Browser speech
   cannot recite classical Arabic the way a qualified reciter does — this at
   least puts the choice of voice in the reader's hands. */
function iitwBuildVoiceBar() {
  const host = document.getElementById("arVoiceBar");
  if (!host) return;
  const voices = _iitwArabicVoices();

  if (!voices.length) {
    host.innerHTML = `<div class="voice-bar voice-bar-warn">
      <strong>No Arabic voice is installed on this device.</strong>
      The 🔊 button for Arabic is disabled, because reading Arabic with an English voice mispronounces it badly.
      To enable it on Windows: <em>Settings → Time &amp; language → Language &amp; region → add Arabic → Language options → Speech</em>, then reload this page. The Arabic voice <strong>Naayf</strong> is a man's voice.
      <br><span dir="rtl" style="font-family:'Amiri',serif;">لا يوجد صوت عربي على هذا الجهاز. أضف حزمة اللغة العربية من إعدادات النظام ثم أعد تحميل الصفحة، وصوت «نايف» صوت رجل.</span>
    </div>`;
    return;
  }

  const current = _iitwPickVoice("ar");
  const hasGoogle = voices.some(v => /google/i.test(v.name) || v.localService === false);

  const label = v => {
    const bits = [];
    if (/google/i.test(v.name) || v.localService === false) bits.push("best quality");
    if (_MALE_AR.test(v.name)) bits.push("male");
    else if (_FEMALE.test(v.name)) bits.push("female");
    return v.name + (bits.length ? " — " + bits.join(", ") : "");
  };

  host.innerHTML = `<div class="voice-bar">
    <label for="arVoiceSelect">🎙 Arabic voice <span dir="rtl">— الصوت العربي</span>:</label>
    <select id="arVoiceSelect">
      ${voices.map(v => `<option value="${v.name.replace(/"/g, "&quot;")}"${current && v.name === current.name ? " selected" : ""}>${label(v)}</option>`).join("")}
    </select>
    <button type="button" class="voice-test">▶ Test</button>
    <span class="voice-hint">${hasGoogle
      ? "Voices marked “best quality” are Google’s own — the same ones Google Translate uses."
      : "For much better Arabic pronunciation, open this site in <strong>Google Chrome</strong>: it provides Google’s Arabic voice, the same one Google Translate uses."}</span>
  </div>`;

  host.querySelector("#arVoiceSelect").addEventListener("change", e => {
    localStorage.setItem(IITW_AR_VOICE_KEY, e.target.value);
  });
  host.querySelector(".voice-test").addEventListener("click", () => {
    speakText("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", "ar");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  iitwBuildVoiceBar();
  // Voices often arrive after first paint.
  if (window.speechSynthesis) {
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      _iitwLoadVoices();
      iitwBuildVoiceBar();
    });
  }
});

// Small on-screen note, used when speech genuinely cannot work.
function _iitwToast(msg) {
  let el = document.getElementById("iitw-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "iitw-toast";
    el.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);max-width:min(92vw,540px);" +
      "background:#14532d;color:#fff;padding:14px 18px;border-radius:12px;font-size:.9rem;line-height:1.6;" +
      "box-shadow:0 10px 34px rgba(0,0,0,.32);z-index:9999;text-align:center;";
    document.body.appendChild(el);
  }
  el.innerHTML = msg;
  el.style.display = "block";
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.display = "none"; }, 9000);
}

function speakText(text, lang) {
  if (!window.speechSynthesis) {
    _iitwToast("Your browser cannot read text aloud. Please try Chrome or Edge.");
    return;
  }
  window.speechSynthesis.cancel();

  let clean = String(text || "");
  // Strip emoji/symbols so the 🔊 icon is never read out as "speaker high volume".
  clean = clean.replace(/[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{2600}-\u{26FF}]/gu, " ");

  if (lang === "ar") {
    clean = clean.replace(/[A-Za-z0-9]/g, " ");
    // Keep the tashkeel (harakat). It tells the engine which vowel to use, so
    // words like شَمْس and ابْن come out right; stripping it forces the engine
    // to guess and mispronounce. Only the tatweel stretch mark is removed.
    clean = clean.replace(/ـ/g, "");
  } else {
    clean = clean.replace(/[؀-ۿݐ-ݿ]/g, " ");
  }
  clean = clean.replace(/["'`]/g, " ").replace(/\s+/g, " ").trim();
  if (!clean) return;

  const voice = _iitwPickVoice(lang === "ar" ? "ar" : "en");

  // Never let an English voice attempt Arabic — it produces gibberish, which is
  // worse than saying nothing. Tell the reader how to enable a real Arabic voice.
  if (lang === "ar" && !voice) {
    _iitwToast(
      "<strong>No Arabic voice is installed on this device.</strong><br>" +
      "Reading Arabic with an English voice would mispronounce it, so we stopped.<br>" +
      "On Windows: <em>Settings → Time &amp; language → Language &amp; region → add Arabic → Language options → Speech</em>. Then reload this page.<br>" +
      "<span dir='rtl' style='font-family:Amiri,serif'>لا يوجد صوت عربي مثبَّت على هذا الجهاز. أضف حزمة اللغة العربية من إعدادات النظام ثم أعد تحميل الصفحة.</span>"
    );
    return;
  }

  const u = new SpeechSynthesisUtterance(clean);
  u.lang = lang === "ar" ? (voice ? voice.lang : "ar-SA") : "en-US";
  // Arabic is read slowly so the harakat and the heavier letters (خ ح ع ق ط)
  // are articulated rather than rushed.
  u.rate = lang === "ar" ? 0.7 : 0.95;
  u.pitch = 0.9;                       // a slightly lower, more masculine tone
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}
window.speakText = speakText;

/* One delegated listener for every 🔊 button on the site.
   The text is read from the DOM rather than embedded in an onclick attribute —
   embedding it broke the buttons, because quotes inside the text ended the
   attribute early. */
document.addEventListener("click", e => {
  const btn = e.target.closest(".speak-btn");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const lang = btn.dataset.lang === "ar" ? "ar" : "en";
  const holder = btn.closest("[data-speak]") || btn.parentElement;
  speakText(holder ? holder.textContent : "", lang);
});

/* ---------- Scroll reveal ----------
   Anything with class="reveal" fades and rises into place as it scrolls into
   view, and fades back out once it leaves — the effect the photos use. */
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length || !("IntersectionObserver" in window)) return;

  const root = document.documentElement;
  let fired = false;

  const io = new IntersectionObserver(entries => {
    fired = true;
    entries.forEach(entry => {
      entry.target.classList.toggle("in-view", entry.isIntersecting);
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

  // Only now do we allow the hidden state, so the text is never invisible
  // unless the animation is genuinely running.
  root.classList.add("js-reveal");
  targets.forEach(el => io.observe(el));

  // Safety net: if the observer never reports anything (unusual browsers,
  // embedded webviews), drop the effect entirely and show all the content.
  setTimeout(() => {
    if (!fired) {
      io.disconnect();
      root.classList.remove("js-reveal");
    }
  }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav.main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Highlight active nav link based on current page
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
});

/* ---------- Global "Search a Person" logic ----------
   Used on search.html. Searches PROPHETS + COMPANIONS (from data.js)
   by name, title, or summary text and renders result cards with refs.
------------------------------------------------------- */
function runPersonSearch(query) {
  const resultsEl = document.getElementById("searchResults");
  if (!resultsEl) return;

  const q = query.trim().toLowerCase();
  resultsEl.innerHTML = "";

  if (!q) {
    resultsEl.innerHTML = "";
    return;
  }

  const matches = ALL_PEOPLE.filter(person => {
    return (
      person.name.toLowerCase().includes(q) ||
      person.title.toLowerCase().includes(q) ||
      person.summary.toLowerCase().includes(q) ||
      person.id.toLowerCase().includes(q) ||
      person.arabic.includes(query.trim()) ||
      (person.summaryAr && person.summaryAr.includes(query.trim()))
    );
  });

  if (matches.length === 0) {
    resultsEl.innerHTML = `<div class="no-results">
      No results found for "<strong>${escapeHtml(query)}</strong>". This page searches <em>people</em> — try a name like "Musa", "Ibrahim", "Abu Bakr", "عائشة".
      <br><br>Describing a <strong>situation</strong> instead? The <a href="guidance.html" style="color:var(--green);text-decoration:underline;">Guidance page</a> matches your situation to verses and hadith.
      <br><span dir="rtl" style="font-family:'Amiri',serif;">هذه الصفحة للبحث عن الأشخاص. إن كنت تصف حالة، فصفحة التوجيه تعرض لك الآيات والأحاديث المتعلقة بها.</span>
    </div>`;
    return;
  }

  matches.forEach(person => {
    const card = document.createElement("div");
    card.className = "result-card";

    const categoryLabel = person.category === "prophet" ? "Prophet" : "Companion (Sahabi)";

    card.innerHTML = `
      <span class="category">${categoryLabel}</span>
      <h3>${person.name} <span style="font-family:'Amiri',serif; color: var(--green); font-size:1.1rem;">${person.arabic}</span></h3>
      <p style="color: var(--gold); font-weight:600; font-size:0.85rem; margin-bottom: 8px;">${person.title}</p>
      <p>${person.summary}</p>
      ${person.summaryAr ? `<p dir="rtl" style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.9; color: var(--green-dark); text-align:right; background: var(--green-pale); border-radius:8px; padding:10px 14px; margin-bottom:12px;">${person.summaryAr}</p>` : ""}
      <div class="refs">
        <strong>References:</strong>
        <ul>${person.refs.map(r => `<li>${r}</li>`).join("")}</ul>
      </div>
    `;
    resultsEl.appendChild(card);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
