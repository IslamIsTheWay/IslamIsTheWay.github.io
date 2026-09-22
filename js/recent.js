/* ============================================================
   RECENTLY ADDED — GENERATED, DO NOT EDIT BY HAND
   ============================================================
   Written by ./build-recent.py, which asks git when each part of the site
   last changed and sorts the cards newest first. bump-version.sh runs it
   before every commit, and the weekly workflow fails if it is out of date.

   The wording lives in build-recent.py and is English here on purpose:
   js/i18n.js carries the Arabic for every one of these strings, the same
   way it does for the rest of the site.
   ============================================================ */
const RECENT = [
  {"id": "golden", "icon": "🏛️", "title": "The Golden Age of Islam", "blurb": "41 of the men and women who built it — algebra, optics, surgery, the hospital, the university — with the Latinised name Europe gave each of them, what Europe built on their work, and the documented cases where the credit went elsewhere. Every claim says how strong its evidence is, the same way every hadith on this site does.", "href": "golden.html", "cta": "See What We Built", "at": "2026-09-22"},
  {"id": "treasure", "icon": "⛰️", "title": "The mountain of gold", "blurb": "What the Prophet ﷺ said about the Euphrates uncovering a mountain of gold; where it could be — the river itself, or the melting ice of the North; why the whole world would fight over it even knowing the hadith; and what we are told to do. The hadith is marked as certain, and every reading is marked as a reading.", "href": "judgement.html#treasure", "cta": "Read it", "at": "2026-09-22"},
  {"id": "judgement", "icon": "⏳", "title": "The Day of Judgement", "blurb": "Fifteen stages in the order they happen: death and the soul, the grave and its questions, the Trumpet, the standing, the seven under the shade, the settling of what people owe each other, the Records, the Scales, the Bridge, and the gates. 64 referenced points and 54 passages of the Quran.", "href": "judgement.html", "cta": "See the Stages", "at": "2026-09-22"},
  {"id": "sunnah", "icon": "🌿", "title": "199 Sunnah Practices", "blurb": "The Prophet's practice through an ordinary day — waking, eating, dressing, entering and leaving, sleeping — each with the hadith it comes from and its grading.", "href": "sunnah.html", "cta": "Browse the Sunnah", "at": "2026-09-22"},
  {"id": "guidance", "icon": "🕌", "title": "What to Say, and When", "blurb": "The worship reference: how each act of worship is performed, what is said in it, and what to do when something goes wrong — with the evidence beside every ruling.", "href": "guidance.html", "cta": "Open the Worship Reference", "at": "2026-09-22"},
  {"id": "companions", "icon": "📚", "title": "94 Full Life Stories", "blurb": "94 lives told in full rather than in summary — all 65 Companions and all 29 Prophets — from before Islam, through the moment of belief, to what changed in them, their greatest hour, and their death. Every source is listed with its rank.", "href": "companions.html", "cta": "Read a Full Life", "at": "2026-09-22"},
  {"id": "raghib", "icon": "📜", "title": "Ar-Raghib al-Isfahani on the Quran", "blurb": "His own explanation under the verses of the first ten surahs — from his tafsir where it survives, and from his dictionary of the Quran where it does not. Every word of his is checked letter by letter against the printed book, every verse he connects is in the Mushaf's own text, and the page he said it on is printed with it.", "href": "quran.html", "cta": "Open the Quran", "at": "2026-09-16"},
  {"id": "comfort", "icon": "🌙", "title": "Night reading, bigger text, and one search", "blurb": "A dark theme for reading at night, a text size that holds across the whole site, one search in the header of every page — and the home page now opens on what you were last reading.", "href": "index.html", "cta": "See for yourself", "at": "2026-09-16"},
  {"id": "hadith", "icon": "🕋", "title": "Words of the Prophet", "blurb": "Hadith from the two Sahihs, each with its book, its number and the grading the scholars gave it, and the Arabic beside the English.", "href": "hadith.html", "cta": "Read the Hadith", "at": "2026-09-14"},
  {"id": "verify", "icon": "✅", "title": "Check what you were told", "blurb": "Paste a hadith, a claim or a quotation and see whether this site can find it in the sources it carries, and how strong it is.", "href": "verify.html", "cta": "Check something", "at": "2026-09-14"},
  {"id": "stories", "icon": "📖", "title": "Stories of the Prophet ﷺ", "blurb": "57 stories, every one found in the text of Sahih al-Bukhari or Sahih Muslim before it was written here — none from memory. The classical Arabic words in each story are explained in plain modern Arabic and English, and the eight stories about the Dajjal are linked together as one series, each with its own plain-words box.", "href": "stories.html", "cta": "Read the Stories", "at": "2026-09-13"},
  {"id": "daily", "icon": "🌱", "title": "Today's reading", "blurb": "A small daily plan on the home page — read from the Quran, a moment from his life, a sunnah to act on, and what you have started to forget — with the run of days you have kept.", "href": "index.html#daily", "cta": "Start today", "at": "2026-08-15"}
];

/* The newest six, each with the day it was last worked on. The month names
   and the Arabic digits are written out here on purpose: the helper that
   does this elsewhere lives in js/quran.js, which is 2 MB and is not loaded
   on the home page. */
var RECENT_MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function iitwArDigits(s) {
  return String(s).replace(/[0-9]/g, function (c) {
    return String.fromCharCode(0x0660 + Number(c));
  });
}

function iitwRecentDate(iso) {
  var d = String(iso).split("-");
  if (d.length !== 3) return { en: iso, ar: iso };
  return {
    en: Number(d[2]) + " " + (RECENT_MONTHS[Number(d[1]) - 1] || d[1]) + " " + d[0],
    ar: iitwArDigits(Number(d[2]) + "/" + Number(d[1]) + "/" + d[0])
  };
}

function iitwRenderRecent() {
  var box = document.getElementById("recentGrid");
  if (!box || typeof RECENT === "undefined") return;
  box.innerHTML = RECENT.slice(0, 6).map(function (r) {
    var when = iitwRecentDate(r.at);
    return '<div class="card recent-card">' +
      '<div class="icon">' + r.icon + '</div>' +
      '<div class="recent-when">' +
        '<span class="en-only">Last worked on ' + when.en + '</span>' +
        '<span class="ar-only" dir="rtl">آخر تحديث ' + when.ar + '</span>' +
      '</div>' +
      '<h3>' + r.title + '</h3><p>' + r.blurb + '</p><br>' +
      '<a href="' + r.href + '" class="btn btn-outline btn-small">' + r.cta + '</a>' +
      '</div>';
  }).join("");
  if (window.applyI18n) window.applyI18n();
}

document.addEventListener("DOMContentLoaded", iitwRenderRecent);
