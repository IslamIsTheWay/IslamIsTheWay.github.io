/* ============================================================
   ورد اليوم — THE DAILY BOX ON THE HOME PAGE
   ============================================================
   The owner asked for the Duolingo shape on the MAIN page: a small box that
   tells you each day whether you have kept to it, and reminds you what to do
   today — read from the Quran, read a story, act on a sunnah, revise what you
   memorised and have started to forget.

   ONE THING HE ASKED FOR THAT CANNOT BE BUILT THIS WAY, said plainly rather
   than quietly skipped: a WIDGET on the phone's home screen — the tile the
   size of four app icons. That needs a native app (Kotlin on Android, Swift
   on iPhone); no website and no installed web app can draw one. This box is
   the nearest honest thing: the first screen inside the app, so opening the
   icon lands straight on it.

   THE RULE FROM THE QURAN PAGE APPLIES HERE TOO. The ticks are for knowing
   where you are, not for scoring. Nothing in this file congratulates a number
   on its own, and the reminder about intention sits on the card.

   ROTATION: what appears each day is chosen from the day of the year, not at
   random. So it changes daily, it is the same for everyone on the same day,
   and re-opening the page does not shuffle it — which would make it feel like
   a slot machine rather than a plan.
   ============================================================ */

const DAILY_KEY = "iitw-daily";

function dailyToday() {
  const d = new Date();
  const p = n => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
}

/* Day of the year, 0-based — the rotation index. */
function dailyIndex() {
  const d = new Date();
  return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
}

function dailyLoad() {
  try { return JSON.parse(localStorage.getItem(DAILY_KEY)) || {}; }
  catch (e) { return {}; }
}

function dailySave(o) {
  try { localStorage.setItem(DAILY_KEY, JSON.stringify(o)); } catch (e) {}
}

function dailyState() {
  const all = dailyLoad();
  return all[dailyToday()] || {};
}

function dailyToggle(id) {
  const all = dailyLoad();
  const t = dailyToday();
  all[t] = all[t] || {};
  all[t][id] = !all[t][id];
  /* Keep 400 days and no more. Without a trim this grows for ever in a store
     that is only a few megabytes. */
  const keys = Object.keys(all).sort();
  while (keys.length > 400) delete all[keys.shift()];
  dailySave(all);
  return all[t];
}

/* Consecutive days on which at least ONE thing was done. Counted from
   yesterday as well, so the streak does not read zero all morning. */
function dailyStreak() {
  const all = dailyLoad();
  const p = n => String(n).padStart(2, "0");
  const key = d => d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  const any = k => all[k] && Object.keys(all[k]).some(x => all[k][x]);
  const day = new Date();
  if (!any(key(day))) day.setDate(day.getDate() - 1);
  let n = 0;
  while (any(key(day))) { n++; day.setDate(day.getDate() - 1); }
  return n;
}

/* ============================================================
   THE DASHBOARD — the big number, the week, and the next marked day
   ============================================================
   The owner asked for "that type of dashboard like Duolingo, the one that
   shows a certain number on it". Three parts, and the number is the hero:

     1. the run of days, large enough to be the first thing seen
     2. the last seven days, so a gap is visible rather than described
     3. how far the next marked day is, so the number points somewhere

   ONE DELIBERATE DEPARTURE FROM DUOLINGO: it uses a FLAME for the streak.
   Not here. This site has a whole page about the Fire, and making 🔥 the
   reward for reading Quran is the wrong note entirely. The hero icon is
   instead the milestone already earned (🌱 → 🌿 → ⭐ → 🌟 → 🌙 → 🕌 → 🏅 →
   💎 → 👑), which grows with the streak and is better than a static flame.
   ============================================================ */

function dailyKeyOf(d) {
  const p = n => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
}

/* Was anything at all done on this date? */
function dailyDayDone(k) {
  const all = dailyLoad();
  return !!(all[k] && Object.keys(all[k]).some(x => all[k][x]));
}

/* Sunday-first, matching Date.getDay(). The Arabic is the single letter each
   day is known by: ح ن ث ر خ ج س. */
const DAILY_DOW_EN = ["S", "M", "T", "W", "T", "F", "S"];
const DAILY_DOW_AR = ["ح", "ن", "ث", "ر", "خ", "ج", "س"];

/* The last seven days, OLDEST FIRST so today is last. In Arabic the page is
   RTL, so the first element lands on the right and the run still reads in
   the direction the language is read. */
function dailyWeek() {
  const out = [];
  const d = new Date();
  d.setDate(d.getDate() - 6);
  const today = dailyToday();
  for (let i = 0; i < 7; i++) {
    const k = dailyKeyOf(d);
    out.push({
      key: k,
      en: DAILY_DOW_EN[d.getDay()],
      ar: DAILY_DOW_AR[d.getDay()],
      done: dailyDayDone(k),
      isToday: k === today,
      isJumuah: d.getDay() === 5
    });
    d.setDate(d.getDate() + 1);
  }
  return out;
}

/* The longest run ever kept. Shown only when it is ahead of the current one,
   where it is a target; showing it while it EQUALS the current streak would
   just print the same number twice. */
function dailyBest() {
  const all = dailyLoad();
  const days = Object.keys(all)
    .filter(k => Object.keys(all[k]).some(x => all[k][x]))
    .sort();
  let best = 0, run = 0, prev = null;
  days.forEach(k => {
    if (prev) {
      const gap = Math.round(
        (new Date(k + "T00:00:00") - new Date(prev + "T00:00:00")) / 86400000
      );
      run = (gap === 1) ? run + 1 : 1;
    } else {
      run = 1;
    }
    if (run > best) best = run;
    prev = k;
  });
  return best;
}

/* Where this streak sits between the marked days in js/wird.js — which one
   has been passed, which one is next, and how far along the gap it is. */
function dailyMark(streak) {
  const ms = (typeof WIRD_MILESTONES !== "undefined") ? WIRD_MILESTONES : [];
  let reached = null, next = null;
  ms.forEach(m => {
    if (streak >= m.days) reached = m;
    else if (!next) next = m;
  });
  const from = reached ? reached.days : 0;
  const to = next ? next.days : from;
  /* A hair of fill at the start, so the bar never reads as broken. */
  const pct = next ? Math.max(4, Math.round(((streak - from) / (to - from)) * 100)) : 100;
  return { reached: reached, next: next, toGo: next ? next.days - streak : 0, pct: pct };
}

/* ---------- What today's four things are ----------
   Each returns null when its data file is not on the page, so the box simply
   shows fewer rows rather than breaking. index.html loads data.js and
   sunnah.js; the Quran row reads the commitment from js/wird.js if it is
   there, and otherwise invites the reader to set one. */
function dailyItems() {
  const i = dailyIndex();
  const out = [];

  /* 1. The Quran — today's page from the commitment, if one is set. */
  let quranEn, quranAr, quranHref = "quran.html#wird";
  if (typeof wirdLoad === "function" && wirdLoad()) {
    const w = wirdLoad();
    const pages = wirdTodaysPages(w);
    const label = pages.length === 1 ? "page " + pages[0]
                                     : "pages " + pages[0] + "–" + pages[pages.length - 1];
    const labelAr = pages.length === 1 ? "صفحة " + dailyArNum(pages[0])
                                       : "الصفحات " + dailyArNum(pages[0]) + "–" + dailyArNum(pages[pages.length - 1]);
    quranEn = "Read " + label;
    quranAr = "اقرأ " + labelAr;
  } else {
    quranEn = "Read from the Quran — set a daily amount";
    quranAr = "اقرأ من القرآن — اختر وردًا يوميًا";
  }
  out.push({ id: "quran", icon: "📖", href: quranHref,
             en: quranEn, ar: quranAr,
             kindEn: "The Quran", kindAr: "القرآن" });

  /* 2. A story from his life ﷺ. */
  if (typeof PROPHET_STORIES !== "undefined" && PROPHET_STORIES.length) {
    const s = PROPHET_STORIES[i % PROPHET_STORIES.length];
    out.push({ id: "story", icon: "📜", href: "stories.html",
               en: s.title, ar: s.titleAr,
               kindEn: "A moment from his life ﷺ", kindAr: "موقف من سيرته ﷺ" });
  }

  /* 3. A sunnah to actually do today. */
  if (typeof SUNNAH !== "undefined" && SUNNAH.length) {
    const s = SUNNAH[i % SUNNAH.length];
    out.push({ id: "sunnah", icon: "🌿", href: "sunnah.html",
               en: s.title, ar: s.titleAr,
               kindEn: "A sunnah to act on", kindAr: "سنّة تعمل بها" });
  }

  /* 4. Revision — the thing he asked for by name: what you memorised before
        and have started to forget. The short surahs are what most people hold,
        so the rotation walks backwards from An-Nas. */
  if (typeof SURAHS !== "undefined" && SURAHS.length) {
    const shortOnes = SURAHS.filter(s => s.verses <= 11 && s.n >= 93);
    if (shortOnes.length) {
      const s = shortOnes[i % shortOnes.length];
      out.push({ id: "revise", icon: "🔁", href: "quran.html",
                 en: "Revise " + s.name + " from memory, then check it",
                 ar: "راجع سورة " + s.arabic + " من حفظك ثم تحقّق",
                 kindEn: "Revision", kindAr: "مراجعة" });
    }
  }

  return out;
}

function dailyArNum(n) {
  return String(n).replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[+d]);
}
