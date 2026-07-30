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

function _iitwPickVoice(langPrefix, preferMale) {
  let voices = _iitwVoices.length ? _iitwVoices : (window.speechSynthesis ? window.speechSynthesis.getVoices() : []);
  const langVoices = voices.filter(v => (v.lang || "").toLowerCase().startsWith(langPrefix));
  if (!langVoices.length) return null;
  if (preferMale) {
    // Known male Arabic voices across Windows / macOS / Android.
    const male = langVoices.find(v => /naayf|nayef|maged|majed|tarik|hamed|fahd|salim|khalid|male/i.test(v.name));
    if (male) return male;
  }
  return langVoices[0];
}

function speakText(text, lang) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  let clean = String(text || "");
  // Remove emoji, symbols, arrows and variation selectors (the 🔊 bug).
  clean = clean.replace(/[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{2600}-\u{26FF}]/gu, " ");
  if (lang === "ar") {
    clean = clean.replace(/[A-Za-z0-9]/g, " ");        // drop any Latin/UI text
  } else {
    clean = clean.replace(/[؀-ۿݐ-ݿ]/g, " "); // drop Arabic when reading English
  }
  clean = clean.replace(/["'`]/g, " ").replace(/\s+/g, " ").trim();
  if (!clean) return;
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = lang === "ar" ? "ar-SA" : "en-US";
  u.rate = lang === "ar" ? 0.8 : 0.95;
  const v = _iitwPickVoice(lang === "ar" ? "ar" : "en", lang === "ar");
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
}
window.speakText = speakText;

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
