/* ============================================================
   VERIFY — تحقّق
   The authenticity checker: paste a forwarded text and find out
   what it actually is.
   ============================================================
   WHY THIS EXISTS. The commonest religious-information problem
   an ordinary Muslim has is the forwarded message: "the Prophet ﷺ
   said whoever recites this a hundred times…". There is no easy
   way to check one, because Sunnah.com needs you to know the
   wording already and Arabic search fails on spelling and marks.

   FIVE RULES. Every one of them is this site's discipline turned
   into behaviour, and none may be softened.

   1. NEVER SAY FABRICATED. Not finding something proves only
      that we did not find it. The wording may be a paraphrase,
      or it may sit in a collection this site does not carry. The
      not-found answer says exactly that, in both languages, and
      points the reader at a scholar.

   2. MUSLIM IS NEVER CITED BY NUMBER. The numbering in the
      machine editions is sequential (1–7563) and does NOT match
      the standard numbering; Bukhari's does. So a Muslim hit is
      reported by BOOK, and the number is not shown at all.

   3. SAY WHAT WAS SEARCHED. The reader is told which collections
      were actually looked in, so "not found" has a known scope.

   4. THE QURAN IS SEARCHED FIRST, AND SAYS SO LOUDLY. Confusing
      a hadith with a verse is the mistake this site was built to
      stop making — the owner once believed the hadith about men
      imitating women was a verse. So if the pasted text is Quran,
      the answer leads with that, and if the reader called it a
      hadith the page corrects them explicitly.

   5. GRADING IS NEVER INVENTED. The full collections carry no
      grading in this API, so a hit there reports the collection
      only, plus the standing rule: al-Bukhari and Muslim are the
      two Sahihs, the four Sunan are outside them and need a
      grader named. Nothing is graded here that was not graded by
      a scholar somewhere else.

   MATCHING. Ported from the locator built for the verse links,
   which is already tested against 50 spans: strip marks, drop
   every weak letter and every hamza form, fold ta marbuta. The
   Uthmani script spells the long a four different ways and each
   fold that fixes one verse breaks another, so consonants carry
   the match. No look-behind anywhere — it breaks older Safari at
   parse time and would kill the whole file.
   ============================================================ */

/* ---------- the skeleton, shared by every search below ---------- */

const V_MARKS = /[ؐ-ًؚ-ٰٟۖ-ۭ࣓-ࣿـ]/;
const V_WEAK = "اٱٰآأإىيوءؤئ";
const V_ARABIC = /[؀-ۿ]/;
/* The letters themselves, not the whole block — see the note in vSkel. */
const V_LETTER = /[ء-يٮ-ۓە]/;

function vIsArabic(s) { return V_ARABIC.test(s || ""); }

/* Consonant skeleton. Everything the script spells inconsistently is
   removed from BOTH sides, so a phrase typed the ordinary way finds its
   place in a text written in the Uthmani or the classical hand. */
function vSkel(s) {
  s = (s || "").normalize("NFD");
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (V_MARKS.test(ch)) continue;
    if (V_WEAK.indexOf(ch) >= 0) continue;
    if (ch === "۞") continue;              // rub-el-hizb star
    if (ch === "ة") { out += "ه"; continue; }   // ta marbuta -> ha
    if (/\s/.test(ch)) { out += " "; continue; }
    /* ARABIC LETTERS ONLY. The Arabic Unicode block also holds the comma
       ، the semicolon ؛ the question mark ؟ the end-of-ayah mark ۝ and the
       Arabic-Indic digits, and keeping them made punctuation decide matches:
       the stored wording of al-Bukhari 1 carries a comma, a pasted forward
       does not, and every window spanning that comma failed. Measured at 0.00
       on a claim that plainly contained the hadith. */
    if (V_LETTER.test(ch)) { out += ch; continue; }
    if (/[a-zA-Z0-9]/.test(ch)) { out += ch.toLowerCase(); continue; }
    // Arabic punctuation, brackets, the salutation glyph, everything else: dropped
  }
  return out.replace(/\s+/g, " ").trim();
}

/* Latin skeleton — letters only, so punctuation and spelling of names
   ("Bukhari" / "Bukhaari") do not decide a match. */
function vSkelEn(s) {
  return (s || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

/* ---------------- how a match is actually measured ----------------

   WHAT WAS TRIED AND FAILED, so nobody rebuilds it. Sampling fixed windows
   across the claim and counting how many appear in the text cannot see a
   TRUNCATED quotation. Someone forwards the first half of al-Bukhari 1 with
   a salutation in front; the shared run is then twelve characters of
   skeleton, shorter than one window, and no window is ever sampled that sits
   exactly on it. Measured at 0.00 on a claim that plainly contained the
   hadith, at both 22 and 14 characters.

   WHAT IS DONE INSTEAD. The real question is "how long is the longest run of
   text these two share", so that is computed directly. Doing it naively for
   every one of 6,236 verses would be far too slow, so it runs in two stages:

     1. a cheap filter — the claim's N-grams are put in a Set once, and a
        candidate is only considered if it shares even one of them
     2. the survivors, which are few, get an exact longest-common-substring

   A run is accepted on an ABSOLUTE floor of consonants, not only a ratio,
   because a ratio alone lets two short common words carry a match. */

const V_GRAM = 8;          // the cheap filter's n-gram size
const V_MIN_RUN = 11;      // consonants that must line up, absolutely
const V_MIN_SHARE = 0.40;  // and as a fraction of the shorter text

/* FORMULAIC WORDING CARRIES NO SIGNAL AND MUST BE STRIPPED FIRST.
   "قال رسول الله صلى الله عليه وسلم" appears verbatim in thousands of
   hadith, so on its own it matched one at 0.60 and the page answered a bare
   salutation with a hadith about the siwak. These phrases are removed from
   the claim before anything is compared. The basmala is deliberately NOT in
   this list — it is a verse, and looking it up is a fair question. */
const V_BOILER = [
  "صلى الله عليه وسلم", "صلى الله عليه و سلم", "عليه الصلاة والسلام",
  "قال رسول الله", "قال النبي", "عن رسول الله", "عن النبي",
  "رضي الله عنه", "رضي الله عنها", "رضي الله عنهم", "رضي الله عنهما",
  "عليه السلام", "حدثنا", "أخبرنا", "اخبرنا", "قال صلى الله عليه وسلم"
].map(vSkel).filter(function (s) { return s.length >= 4; })
 .sort(function (a, b) { return b.length - a.length; });   // longest first

function vStripBoiler(skel) {
  let s = skel;
  for (let i = 0; i < V_BOILER.length; i++) {
    let at;
    while ((at = s.indexOf(V_BOILER[i])) >= 0) {
      s = s.slice(0, at) + " " + s.slice(at + V_BOILER[i].length);
    }
  }
  return s.replace(/\s+/g, " ").trim();
}

function vGrams(s) {
  const set = new Set();
  for (let i = 0; i + V_GRAM <= s.length; i++) set.add(s.slice(i, i + V_GRAM));
  return set;
}

function vSharesGram(text, gramSet) {
  for (let i = 0; i + V_GRAM <= text.length; i++) {
    if (gramSet.has(text.slice(i, i + V_GRAM))) return true;
  }
  return false;
}

/* How many of the claim's n-grams this text contains. Cheap, and good
   enough to RANK by — the exact longest-run check is then run on a short
   list instead of on everything.

   WHY: searching the two Sahihs is 15,000 texts, and running the exact
   O(n*m) check on every candidate that shares even one n-gram took 8.8
   SECONDS. Ranking first and checking only the top of the list brings it
   into the range a person will actually wait for, and cannot change the
   answer for anything that was going to score well — a text with a long
   shared run necessarily shares many n-grams. */
function vGramScore(text, gramArr) {
  let n = 0;
  for (let i = 0; i < gramArr.length; i++) {
    if (text.indexOf(gramArr[i]) >= 0) n++;
  }
  return n;
}

/* A sample of the claim's n-grams, as an ARRAY. Driving the scan from the
   claim with native indexOf beats slicing every position of every candidate
   in JS: the same deep search went from 5.3 seconds to well under one. The
   sample is capped because a long pasted message would otherwise contribute
   hundreds of grams and undo the saving. */
function vGramList(skel, cap) {
  cap = cap || 40;
  const all = [];
  for (let i = 0; i + V_GRAM <= skel.length; i += 2) all.push(skel.slice(i, i + V_GRAM));
  if (all.length <= cap) return all;
  const step = all.length / cap, out = [];
  for (let i = 0; i < cap; i++) out.push(all[Math.floor(i * step)]);
  return out;
}

const V_SHORTLIST = 80;

/* Longest common substring, rolling rows so the memory stays O(min). Only
   ever reached for candidates that already share an n-gram. */
function vLongestRun(a, b) {
  if (!a.length || !b.length) return 0;
  if (b.length < a.length) { const t = a; a = b; b = t; }
  let prev = new Uint16Array(a.length + 1);
  let cur = new Uint16Array(a.length + 1);
  let best = 0;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      cur[i] = (a[i - 1] === b[j - 1]) ? prev[i - 1] + 1 : 0;
      if (cur[i] > best) best = cur[i];
    }
    const t = prev; prev = cur; cur = t;
    cur.fill(0);
  }
  return best;
}

/* THE LONGEST RUN ALONE IS NOT ENOUGH, and this was found by the owner on
   the live page rather than by me.

   He checked "اطلبوا العلم ولو في الصين". The instant search correctly said
   not found. The deep search then answered with Sunan Ibn Majah 226 — which
   is a COMPLETELY DIFFERENT hadith, the one about the angels lowering their
   wings for whoever leaves his house seeking knowledge. The two share the
   phrase "طلب العلم", that run was long enough to pass, and the word that
   actually identifies the claim — الصين — is not in Ibn Majah anywhere.

   So the words of the SHORTER side must also be present in the longer one.
   Shorter, not the claim, because both directions are legitimate:
     · a short hadith inside a long forwarded message — the TEXT is shorter,
       and all of its words appear in the message. Accept.
     · a short claim against a long hadith — the CLAIM is shorter, and if a
       distinctive word of it is missing, the match is a coincidence of
       common phrasing. Reject.
   Measured on the case above: coverage 0.25, comfortably rejected, while
   every true positive in the battery stays at 1.00. */
function vWordCover(shortSkel, longSkel) {
  const words = shortSkel.split(" ").filter(function (w) { return w.length >= 3; });
  if (!words.length) return 1;
  let n = 0;
  for (let i = 0; i < words.length; i++) {
    if (longSkel.indexOf(words[i]) >= 0) n++;
  }
  return n / words.length;
}

const V_MIN_COVER = 0.70;

/* 0 when the two do not share enough, otherwise 0..1. */
function vScore(claimSkel, textSkel, gramSet) {
  if (!claimSkel || !textSkel) return 0;
  if (textSkel.length < 8) return 0;
  if (gramSet && !vSharesGram(textSkel, gramSet)) return 0;
  const run = vLongestRun(claimSkel, textSkel);
  /* A short claim can never produce a long run, so the floor cannot be a
     fixed number: "الدين النصيحة" is nine consonants of skeleton and was
     rejected outright by an eleven-consonant rule. The STORED text matters
     the same way — a full isnad in front of a short hadith leaves a claim
     long enough to pass but a target only nine consonants long. So the floor
     is the shorter of the two, and then the whole of it has to line up. */
  const need = Math.min(V_MIN_RUN, claimSkel.length, textSkel.length);
  if (run < need) return 0;
  const share = run / Math.min(claimSkel.length, textSkel.length);
  if (share < V_MIN_SHARE) return 0;
  /* and the shorter side's own words must actually be there — see above */
  const shorter = claimSkel.length <= textSkel.length ? claimSkel : textSkel;
  const longer  = claimSkel.length <= textSkel.length ? textSkel : claimSkel;
  if (vWordCover(shorter, longer) < V_MIN_COVER) return 0;
  return share;
}

/* ---------- 1. the Quran, which ships with the site ---------- */

function vSearchQuran(claim) {
  if (typeof QURAN_TEXT === "undefined") return [];
  const ar = vIsArabic(claim);
  const cs = ar ? vStripBoiler(vSkel(claim)) : vSkelEn(claim);
  if (cs.length < 6) return [];
  const gs = vGrams(cs);
  const hits = [];
  const keys = Object.keys(QURAN_TEXT);
  for (let k = 0; k < keys.length; k++) {
    const s = keys[k], data = QURAN_TEXT[s];
    const arr = ar ? data.a : data.e;
    if (!arr) continue;
    for (let i = 0; i < arr.length; i++) {
      const sc = vScore(cs, ar ? vSkel(arr[i]) : vSkelEn(arr[i]), gs);
      if (sc) hits.push({ kind: "quran", surah: +s, ayah: i + 1, score: sc,
                          ar: data.a[i], en: data.e[i] });
    }
  }
  return hits.sort(function (a, b) { return b.score - a.score; }).slice(0, 4);
}

/* ---------- 2. what this site itself carries, already graded ---------- */

function vSearchSite(claim) {
  const ar = vIsArabic(claim);
  const cs = ar ? vStripBoiler(vSkel(claim)) : vSkelEn(claim);
  if (cs.length < 6) return [];
  const gs = vGrams(cs);
  const hits = [];

  function tryOne(text, entry) {
    if (!text) return;
    const sc = vScore(cs, ar ? vSkel(text) : vSkelEn(text), gs);
    if (sc) hits.push(Object.assign({ kind: "site", score: sc }, entry));
  }

  if (typeof HADITHS !== "undefined") {
    HADITHS.forEach(function (h) {
      tryOne(ar ? h.arabic : (h.text + " " + (h.title || "")), {
        title: h.title || h.topic, ar: h.arabic, en: h.text,
        ref: h.ref, strength: h.strength, where: "hadith.html"
      });
    });
  }
  if (typeof SUNNAH !== "undefined") {
    SUNNAH.forEach(function (s) {
      tryOne(ar ? (s.arabic || "") : (s.detail + " " + (s.title || "")), {
        title: s.title, titleAr: s.titleAr, ar: s.arabic, en: s.detail,
        ref: s.ref, strength: s.strength, where: "sunnah.html"
      });
    });
  }
  if (typeof PROPHET_STORIES !== "undefined") {
    PROPHET_STORIES.forEach(function (p) {
      tryOne(ar ? (p.arabic || "") : (p.story || ""), {
        title: p.title, titleAr: p.titleAr, ar: p.arabic, en: p.lesson,
        ref: p.ref, strength: p.strength, where: "stories.html"
      });
    });
  }
  if (typeof ADHKAR !== "undefined") {
    ADHKAR.forEach(function (d) {
      tryOne(ar ? d.arabic : (d.en + " " + (d.title || "")), {
        title: d.title, titleAr: d.titleAr, ar: d.arabic, en: d.en,
        ref: d.ref, strength: d.strength, where: "guidance.html#adhkar"
      });
    });
  }
  return hits.sort(function (a, b) { return b.score - a.score; }).slice(0, 5);
}

/* ---------- 3. the full collections, on demand ---------- */

const V_API = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions";

/* The two Sahihs first and separately, because they are the two the reader
   most needs an answer about, and because loading everything at once on a
   phone is a poor trade. */
const V_SAHIH = [
  { id: "bukhari", en: "Sahih al-Bukhari", ar: "صحيح البخاري", numbered: true },
  { id: "muslim",  en: "Sahih Muslim",     ar: "صحيح مسلم",    numbered: false }
];
const V_SUNAN = [
  { id: "abudawud", en: "Sunan Abu Dawud", ar: "سنن أبي داود", numbered: true },
  { id: "tirmidhi", en: "Jami at-Tirmidhi", ar: "جامع الترمذي", numbered: true },
  { id: "nasai",    en: "Sunan an-Nasa'i", ar: "سنن النسائي",  numbered: true },
  { id: "ibnmajah", en: "Sunan Ibn Majah", ar: "سنن ابن ماجه", numbered: true },
  { id: "malik",    en: "Muwatta Malik",   ar: "موطأ مالك",    numbered: true }
];

const vCache = {};

async function vLoad(col) {
  if (vCache[col.id]) return true;
  try {
    const res = await Promise.all([
      fetch(V_API + "/ara-" + col.id + ".min.json").then(function (r) { return r.json(); }),
      fetch(V_API + "/eng-" + col.id + ".min.json").then(function (r) { return r.json(); })
    ]);
    const eng = {};
    res[1].hadiths.forEach(function (h) { eng[h.hadithnumber] = h.text; });
    /* The skeleton of every hadith is computed ONCE, here, and kept.
       Computing it per search instead meant stripping marks from 15,000
       texts on every keystroke-to-answer, which was the real cost — the
       exact-match check was never the bottleneck. */
    vCache[col.id] = res[0].hadiths.map(function (h) {
      const en = eng[h.hadithnumber] || "";
      return { n: h.hadithnumber, ar: h.text, en: en,
               kAr: vSkel(h.text), kEn: vSkelEn(en) };
    });
    return true;
  } catch (e) {
    return false;
  }
}

function vSearchLoaded(claim, cols) {
  const ar = vIsArabic(claim);
  const cs = ar ? vStripBoiler(vSkel(claim)) : vSkelEn(claim);
  if (cs.length < 6) return [];
  const gl = vGramList(cs);
  if (!gl.length) return [];

  // stage 1 — rank cheaply
  const shortlist = [];
  cols.forEach(function (col) {
    const list = vCache[col.id];
    if (!list) return;
    for (let i = 0; i < list.length; i++) {
      const h = list[i];
      const skel = ar ? h.kAr : h.kEn;
      const g = vGramScore(skel, gl);
      if (g > 0) shortlist.push({ col: col, h: h, skel: skel, g: g });
    }
  });
  shortlist.sort(function (a, b) { return b.g - a.g; });

  // stage 2 — exact check, only on the top of the list
  const hits = [];
  const top = shortlist.slice(0, V_SHORTLIST);
  for (let i = 0; i < top.length; i++) {
    const c = top[i];
    const sc = vScore(cs, c.skel, null);
    if (sc) hits.push({ kind: "collection", col: c.col, n: c.h.n,
                        ar: c.h.ar, en: c.h.en, score: sc });
  }
  return hits.sort(function (a, b) { return b.score - a.score; }).slice(0, 6);
}

/* ---------- 4. what IS established on the same subject ----------

   THE OWNER ASKED FOR THIS AND HE IS RIGHT. Telling a reader "we did not
   find this" and stopping is a dead end — and worse, it leaves someone who
   wanted to share something good with nothing to share. "اطلبوا العلم ولو
   في الصين" is not established, but the Prophet ﷺ said a great deal about
   seeking knowledge that IS, and that is what the person actually wanted.

   So when the wording is not found, the subject is searched instead, in
   what this site carries WITH ITS GRADING. Matching here is deliberately
   loose — shared content words, not a shared run — because the whole point
   is that the wording is different.

   TWO RULES. It is labelled as RELATED, never as the same hadith; and it
   only ever draws on the site's own graded content, so nothing is offered
   as a replacement without a grading attached to it. */

const V_STOP = ("من في على الى عن مع كل ما لا ان اذا هذا هذه ذلك التي الذي "
  + "قال قل يقول كان كانت هو هي هم قد ثم او و ب ل ك يا ايها لم لن كي حتى "
  + "the and for that with this from was were you your not but has have").split(" ");

function vContentWords(skel) {
  const stop = {};
  for (let i = 0; i < V_STOP.length; i++) stop[vSkel(V_STOP[i]) || V_STOP[i]] = 1;
  const seen = {}, out = [];
  skel.split(" ").forEach(function (w) {
    if (w.length < 3 || stop[w] || seen[w]) return;
    seen[w] = 1; out.push(w);
  });
  return out;
}

function vSearchRelated(claim) {
  const ar = vIsArabic(claim);
  const cs = ar ? vStripBoiler(vSkel(claim)) : vSkelEn(claim);
  const words = vContentWords(cs);
  if (!words.length) return [];
  const hits = [];

  function tryOne(text, entry) {
    if (!text) return;
    const skel = ar ? vSkel(text) : vSkelEn(text);
    let n = 0, strong = 0;
    for (let i = 0; i < words.length; i++) {
      if (skel.indexOf(words[i]) >= 0) { n++; if (words[i].length >= 4) strong++; }
    }
    /* AT LEAST ONE SHARED WORD OF FOUR LETTERS OR MORE. A three-letter
       Arabic word is far too common to carry a subject: searching the
       "seek knowledge even in China" wording returned a hadith about the
       hour of answered supplication on Friday, purely because طلب appears
       in it meaning ASKING rather than seeking knowledge. It shared no
       other word with the claim at all. */
    if (strong >= 1) hits.push(Object.assign({ kind: "related", score: n / words.length, shared: n }, entry));
  }

  if (typeof HADITHS !== "undefined") {
    HADITHS.forEach(function (h) {
      tryOne(ar ? (h.arabic + " " + (h.topic || "")) : (h.text + " " + (h.title || "") + " " + (h.topic || "")),
        { title: h.title || h.topic, ar: h.arabic, en: h.text,
          ref: h.ref, strength: h.strength, where: "hadith.html" });
    });
  }
  if (typeof SUNNAH !== "undefined") {
    SUNNAH.forEach(function (s) {
      tryOne(ar ? ((s.arabic || "") + " " + (s.titleAr || "") + " " + (s.detailAr || ""))
                : (s.title + " " + s.detail),
        { title: s.title, titleAr: s.titleAr, ar: s.arabic, en: s.detail,
          ref: s.ref, strength: s.strength, where: "sunnah.html" });
    });
  }
  if (typeof ADHKAR !== "undefined") {
    ADHKAR.forEach(function (d) {
      tryOne(ar ? (d.arabic + " " + (d.titleAr || "")) : (d.en + " " + (d.title || "")),
        { title: d.title, titleAr: d.titleAr, ar: d.arabic, en: d.en,
          ref: d.ref, strength: d.strength, where: "guidance.html#adhkar" });
    });
  }
  return hits.sort(function (a, b) { return b.shared - a.shared || b.score - a.score; }).slice(0, 3);
}
