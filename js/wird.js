/* ============================================================
   الوِرْد اليومي — THE DAILY READING COMMITMENT
   ============================================================
   Rendered on quran.html, above the surah grid.

   The owner asked for this shape exactly: you make a commitment ("one page
   every day"), and after that the site hands you TODAY'S PAGE by itself,
   following the Mushaf page order. You read it, and you mark it done.

   TWO DESIGN RULES HE SET, AND THEY GOVERN THE WHOLE FILE:

   1. THE INTENTION COMES BEFORE THE TICK. His words: you are not reading
      this to put a click, you are doing it for Allah. So the reminder is not
      a footnote at the bottom — it sits ON the button you press, every single
      day, and it is worded to be read rather than skipped. A habit tracker
      that makes the streak the point would be the opposite of what this is
      for. There is a streak, because it helps; it is deliberately not the
      biggest thing on the card.

   2. IT FOLLOWS THE PAGE NUMBER. Day one is where you started, day two is
      the next page, and so on. It tracks the PLACE, not the calendar — miss
      a day and you carry on from where you stopped rather than being told
      you failed. Nothing here scolds.

   Storage is localStorage only. There is no server, so this is per-device,
   and the card says so plainly rather than implying it syncs.
   ============================================================ */

const WIRD_KEY = "iitw-wird";
const MUSHAF_PAGES = 604;          // the Madani Mushaf the whole site follows

/* The commitments offered. `pages` is how many Mushaf pages a day.
   The khatmah figures are the real ones: 604 pages in a year is under two a
   day, and one page a day is a khatmah in a year and eight months. Saying so
   on the option is more useful than a vague "a little every day". */
const WIRD_PLANS = [
  { id: "p1",  pages: 1,  en: "One page a day",      ar: "صفحة كل يوم",
    noteEn: "A complete Quran in about 20 months.",  noteAr: "ختمة كاملة في نحو عشرين شهرًا." },
  { id: "p2",  pages: 2,  en: "Two pages a day",     ar: "صفحتان كل يوم",
    noteEn: "A complete Quran in about 10 months.",  noteAr: "ختمة كاملة في نحو عشرة أشهر." },
  { id: "p5",  pages: 5,  en: "Five pages a day",    ar: "خمس صفحات كل يوم",
    noteEn: "A complete Quran in about 4 months.",   noteAr: "ختمة كاملة في نحو أربعة أشهر." },
  { id: "p20", pages: 20, en: "One juz a day",       ar: "جزء كل يوم",
    noteEn: "A complete Quran in 30 days — the Ramadan pace.", noteAr: "ختمة في ثلاثين يومًا — وهو قدر رمضان." }
];

/* ---------- reading and writing the commitment ---------- */
function wirdLoad() {
  try {
    const raw = localStorage.getItem(WIRD_KEY);
    if (!raw) return null;
    const w = JSON.parse(raw);
    return (w && w.plan && w.cursor) ? w : null;
  } catch (e) { return null; }
}

function wirdSave(w) {
  try { localStorage.setItem(WIRD_KEY, JSON.stringify(w)); } catch (e) {}
}

function wirdClear() {
  try { localStorage.removeItem(WIRD_KEY); } catch (e) {}
}

/* Local date, not UTC — otherwise "today" flips at the wrong hour for
   everyone east or west of Greenwich, and the reader loses or gains a day. */
function wirdToday() {
  const d = new Date();
  const p = n => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
}

function wirdStart(planId, startPage) {
  const plan = WIRD_PLANS.filter(p => p.id === planId)[0] || WIRD_PLANS[0];
  const w = {
    plan: plan.id,
    pages: plan.pages,
    startedAt: wirdToday(),
    startPage: Math.max(1, Math.min(MUSHAF_PAGES, startPage || 1)),
    cursor: Math.max(1, Math.min(MUSHAF_PAGES, startPage || 1)),
    log: {},            // "YYYY-MM-DD" -> [pages read that day]
    doneCount: 0        // pages finished, for the progress bar
  };
  wirdSave(w);
  return w;
}

/* Today's assignment: the pages from the cursor onward. Wraps at 604 so a
   finished khatmah rolls into the next one rather than stopping dead. */
function wirdTodaysPages(w) {
  const out = [];
  for (let i = 0; i < w.pages; i++) {
    let p = w.cursor + i;
    while (p > MUSHAF_PAGES) p -= MUSHAF_PAGES;
    out.push(p);
  }
  return out;
}

function wirdDoneToday(w) {
  return !!(w.log && w.log[wirdToday()]);
}

/* Marking it read moves the cursor on. Called only from the button. */
function wirdMarkDone(w) {
  const today = wirdToday();
  if (w.log[today]) return w;                 // already recorded
  const pages = wirdTodaysPages(w);
  w.log[today] = pages;
  w.doneCount = (w.doneCount || 0) + pages.length;
  let next = w.cursor + w.pages;
  while (next > MUSHAF_PAGES) next -= MUSHAF_PAGES;
  w.cursor = next;
  wirdSave(w);
  return w;
}

/* Consecutive days ending today or yesterday. Counting back from yesterday
   as well is deliberate: at 9am a reader who has not read yet today still
   has their streak, instead of being shown a zero for most of the day. */
function wirdStreak(w) {
  if (!w.log) return 0;
  const day = new Date();
  const p = n => String(n).padStart(2, "0");
  const key = d => d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  if (!w.log[key(day)]) day.setDate(day.getDate() - 1);
  let n = 0;
  while (w.log[key(day)]) { n++; day.setDate(day.getDate() - 1); }
  return n;
}

/* ---------- which surah is on a given Mushaf page ----------
   SURAHS carries pageFrom/pageTo for all 114, so a page maps to whichever
   surahs overlap it. A page often holds the end of one surah and the start
   of the next, which is why this returns a list. */
function wirdSurahsOnPage(page) {
  if (typeof SURAHS === "undefined") return [];
  return SURAHS.filter(s => s.pageFrom <= page && s.pageTo >= page);
}

/* The surah to OPEN for a page: the one that covers most of it, which in
   practice is the one that starts on or before it and runs furthest. */
function wirdSurahToOpen(page) {
  const list = wirdSurahsOnPage(page);
  if (!list.length) return null;
  return list.reduce((a, b) => (b.pageFrom > a.pageFrom ? b : a));
}
