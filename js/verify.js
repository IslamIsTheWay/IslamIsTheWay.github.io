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
/* ================= TWO NORMALISERS, AND THEY ARE NOT INTERCHANGEABLE ======
   This file needs two different ideas of "the same word", and using one for
   both jobs was the root of a whole family of wrong answers.

   vSkelMatch — drops every weak letter (ا و ي and the hamza forms). That is
     REQUIRED for the exact matcher, because the Uthmani script spells the
     long a four different ways and nothing else survives the variance.

   vSkelWord — keeps the letters and folds the alef forms instead. That is
     required for anything that works with WORDS: content words, coverage,
     and the related-subject search.

   WHY IT MATTERS. vSkelMatch turns الوطن into لطن and الإيمان into لمن.
   For matching that is harmless, because both sides are crushed the same
   way. For words it is fatal: a seven-letter subject becomes three letters,
   every word-length rule then measures the wrong thing, and the related
   search could not see that a claim was about الإيمان at all. The
   four-letter minimum added earlier was compensating for this instead of
   fixing it.
   ======================================================================= */

/* Word-level: marks off, alef forms folded, LETTERS KEPT. */
function vSkelWord(s) {
  return String(s || "")
    .normalize("NFC")
    .replace(/[ؐ-ًؚ-ٰٟۖ-ۭـ]/g, "")
    .replace(/[ٱآأإ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^ء-ي\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* Match-level: weak letters dropped as well. */
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
].map(function (p) { return [vSkel(p), vSkelWord(p)]; })
 .reduce(function (a, b) { return a.concat(b); }, [])
 .filter(function (s) { return s.length >= 4; })
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
  if (vWordCover(shorter, longer) < V_MIN_COVER) return 0;   // both already match-level
  return share;
}

/* ---------- 1. the Quran, which ships with the site ---------- */

/* THE SKELETONS ARE BUILT ONCE, NOT ON EVERY CHECK.

   Measured: 470ms of the roughly 480ms a check took was this function
   re-skeletoning all 6,236 verses, twice over (Arabic and English), for
   every single query. This file already records the same lesson for the
   deep search — "precompute each collection's skeleton once at load" — and
   the Quran, which ships with the site and never changes, is the easiest
   place of all to apply it. Built lazily so it costs nothing until the
   reader actually checks something. */
var V_QURAN_SKEL = null;

function vQuranSkel() {
  if (V_QURAN_SKEL) return V_QURAN_SKEL;
  const rows = [];
  const keys = Object.keys(QURAN_TEXT);
  for (let k = 0; k < keys.length; k++) {
    const s = keys[k], data = QURAN_TEXT[s];
    const a = data.a || [], e = data.e || [];
    const n = Math.max(a.length, e.length);
    for (let i = 0; i < n; i++) {
      rows.push({ surah: +s, ayah: i + 1,
                  ar: a[i], en: e[i],
                  arSkel: a[i] ? vSkel(a[i]) : "",
                  enSkel: e[i] ? vSkelEn(e[i]) : "" });
    }
  }
  V_QURAN_SKEL = rows;
  return rows;
}

function vSearchQuran(claim) {
  if (typeof QURAN_TEXT === "undefined") return [];
  const ar = vIsArabic(claim);
  const cs = ar ? vStripBoiler(vSkel(claim)) : vSkelEn(claim);
  if (cs.length < 6) return [];
  const gs = vGrams(cs);
  const hits = [];
  const rows = vQuranSkel();
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    const skel = ar ? r.arSkel : r.enSkel;
    if (!skel) continue;
    const sc = vScore(cs, skel, gs);
    if (sc) hits.push({ kind: "quran", surah: r.surah, ayah: r.ayah, score: sc,
                        ar: r.ar, en: r.en });
  }
  return hits.sort(function (a, b) { return b.score - a.score; }).slice(0, 4);
}

/* ---------- 2. what this site itself carries, already graded ---------- */

/* A NARRATION AND THIS SITE'S OWN PROSE ARE NOT THE SAME THING, and telling
   them apart is the whole of this section.

   THE BUG THIS EXISTS TO STOP, found by measuring the page rather than
   reading it. Pasting "the best of you are those who are best to their
   families" was answered:

       ✅ This site carries this, and it is graded
          Teach your family and pray with them
          Sahih al-Bukhari, Hadith 1129; Sunan Abu Dawud, Hadith 495
          Sahih — established in the collections

   Every part of that is wrong. al-Bukhari 1129 is the Prophet ﷺ rousing Ali
   and Fatimah for the night prayer; Abu Dawud 495 is the command to teach
   children the prayer at seven. Neither carries those words. The wording is
   خيركم خيركم لأهله — at-Tirmidhi 3895 and Ibn Majah 1977, both read out of
   the collections before this note was written — and THIS SITE ALREADY
   CARRIES IT, correctly cited, in `HADITHS`. The reader was handed a wrong
   number with a Sahih grading on it, for a hadith the site had right all
   along, while the correct entry was pushed off the list.

   The cause: for an ENGLISH claim a Sunnah practice was matched against its
   `detail` and a story against its `story`. Those fields are the SITE'S OWN
   SUMMARY — often bundling several practices and quoting a hadith in passing
   — while the `ref` covers the entry as a whole. Sharing a run of text with a
   summary proves nothing about the reference printed beneath it. The Arabic
   side never had this fault: it matches `arabic`, which is the narration.

   So a prose match is FLAGGED, and thereafter it is:
     · never given the verdict that certifies a wording (see verify.html), and
     · ranked below every real narration, so a summary can no longer bury the
       narration this site actually carries.

   This is the "Ibn Majah 226" lesson a second time: a long shared run is not
   proof, and a battery that only checks whether AN answer appeared is not a
   test — read what the answer actually says. */
function vSearchSite(claim) {
  const ar = vIsArabic(claim);
  const cs = ar ? vStripBoiler(vSkel(claim)) : vSkelEn(claim);
  if (cs.length < 6) return [];
  const gs = vGrams(cs);
  const hits = [];

  function tryOne(text, entry, prose) {
    if (!text) return;
    const sc = vScore(cs, ar ? vSkel(text) : vSkelEn(text), gs);
    if (sc) hits.push(Object.assign({ kind: "site", score: sc, prose: !!prose }, entry));
  }

  if (typeof HADITHS !== "undefined") {
    HADITHS.forEach(function (h) {
      /* `text` here is a translation of the narration itself, so an English
         match on it is a match on the hadith and not on anything written
         about it. This is the one collection where that is true. */
      tryOne(ar ? h.arabic : (h.text + " " + (h.title || "")), {
        title: h.title || h.topic, ar: h.arabic, en: h.text,
        ref: h.ref, strength: h.strength, where: "hadith.html"
      }, false);
    });
  }
  if (typeof SUNNAH !== "undefined") {
    SUNNAH.forEach(function (s) {
      tryOne(ar ? (s.arabic || "") : (s.detail + " " + (s.title || "")), {
        title: s.title, titleAr: s.titleAr, ar: s.arabic, en: s.detail,
        ref: s.ref, strength: s.strength, where: "sunnah.html"
      }, !ar);          // the Arabic side is the narration; the English is our summary
    });
  }
  if (typeof PROPHET_STORIES !== "undefined") {
    PROPHET_STORIES.forEach(function (p) {
      tryOne(ar ? (p.arabic || "") : (p.story || ""), {
        title: p.title, titleAr: p.titleAr, ar: p.arabic, en: p.lesson,
        ref: p.ref, strength: p.strength, where: "stories.html"
      }, !ar);
    });
  }
  if (typeof ADHKAR !== "undefined") {
    ADHKAR.forEach(function (d) {
      tryOne(ar ? d.arabic : (d.en + " " + (d.title || "")), {
        title: d.title, titleAr: d.titleAr, ar: d.arabic, en: d.en,
        ref: d.ref, strength: d.strength, where: "guidance.html#adhkar"
      }, false);        // `en` is a translation of the dhikr, not prose about it
    });
  }
  /* A narration always outranks a summary, however long the shared run was. */
  return hits.sort(function (a, b) {
    if (!!a.prose !== !!b.prose) return a.prose ? 1 : -1;
    return b.score - a.score;
  }).slice(0, 5);
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

/* FUNCTION WORDS, IN BOTH SCRIPTS.

   This list was forty words long and every gap in it cost a wrong answer.
   The Guidance page recorded the identical lesson — "there was not one
   Arabic stopword on the page" — and this file was written without looking
   at it. Two measured examples, both from the battery:

     "seek knowledge even if you have to go to china" was answered with
     "do not waste water, EVEN in wudu", "do not waste food — EVEN a fallen
     morsel" and "give the greeting of peace, EVEN to those you do not
     know". The shared word was "even".

     "اطلبوا العلم ولو في الصين" was answered with "لا تحقرن جارة لجارتها
     ولو فرسن شاة" and the hadith on accepting an invitation ولو. The shared
     word was ولو.

   Written in the form the tokeniser produces: no harakat, hamza folded onto
   ا, ة folded to ه. A word listed in a form no text ever contains does
   nothing, which is how half of the Guidance page's list sat dead for
   months. */
const V_STOP = (
  "the and for that with this from was were you your not but has have "
  + "are is am be been being had having will would shall should can could "
  + "may might must do does did done get got gets very too also just only "
  + "even more most less least than then there their them they what when "
  + "where which who whom whose why how all any some each both few other "
  + "those these thing things anything something nothing everything "
  + "others such own same so still yet about above below under over after "
  + "before between during without within through because while until since "
  + "again once here out off down back into onto upon per via its it his "
  + "her him she he we our us my mine yours himself herself themselves "
  + "if else unless whether though although however therefore thus hence "
  + "as at by in of on or to a an no nor not one two three "
  /* ARABIC. The prepositions, pronouns, demonstratives, relatives and
     connectives — including the و/ف-prefixed forms, because the reader
     writes ولو and فان, not لو and ان. */
  + "من في على الي عن مع كل بعض جميع ما لا ان اذا اذ لو ولو هذا هذه هذان "
  + "هؤلاء ذلك تلك اولئك التي الذي الذين اللاتي قال قل يقول قالت كان كانت "
  + "يكون تكون ليس ليست هو هي هم هن نحن انا انت انتم قد لقد ثم او و ب ل ك "
  + "يا ايها لم لن كي حتي كما حيث بين تحت فوق امام خلف بعد قبل عند عندما "
  + "دون سوي غير ضد حول نحو منذ لدي مثل ايضا فقط جدا هنا هناك الان كيف اين "
  + "متي لماذا ماذا هل اي عليه عليها منه منها فيه فيها به بها له لها لهم "
  + "لكم لنا اليه اليها وهو وهي وقد وان فان لان لكن ولكن الا وقال وكان "
  /* THE ATTACHED PRONOUNS. عليك was worth more than الجار in "حق الجار
     عليك" — it sits in two entries and الجار in seven — so a pronoun set
     the bar and the hadith on the neighbour was refused outright. */
  + "عليك عليكم عليكما اليك اليكم منك منكم فيك فيكم بك بكم لك عندك عندكم "
  + "لديك معك معكم عنك عنكم اليهم عليهم منهم فيهم بهم لهما عليهما "
  + "ولا وهذا وهذه وذلك وفي ومن وعلي وبين وبعد وقبل سوف كذلك انه انها"
).split(/\s+/).filter(Boolean);

const V_STOP_SET = (function () {
  const m = Object.create(null);
  for (let i = 0; i < V_STOP.length; i++) {
    const k = V_ARABIC.test(V_STOP[i]) ? (vSkelWord(V_STOP[i]) || V_STOP[i]) : V_STOP[i];
    if (k) m[k] = 1;
  }
  return m;
})();

function vContentWords(skel) {
  const seen = {}, out = [];
  skel.split(" ").forEach(function (w) {
    if (w.length < 3 || V_STOP_SET[w] || seen[w]) return;
    /* A word whose stripped form is a function word is one too — ولو is
       written as one word and reduces to لو. */
    if (V_STOP_SET[vArStrip(w)]) return;
    seen[w] = 1; out.push(w);
  });
  return out;
}

/* ====================================================================
   READ THE WHOLE SENTENCE, NOT THE ONE WORD IN IT THAT HAPPENS TO BE RARE
   ====================================================================

   HIS COMPLAINT, and it is the right one:

     "make sure that when I am searching for something, it doesn't
      constitute only one word and then leave the whole sentence.
      Because if I say I love my mom, if it only concentrates on mom and
      leaves I love, the meaning can come out different or the opposite."

   Measured on this page before any of the below existed. Every one of these
   is a real answer it gave, and in each the engine kept ONE word of the
   sentence and threw the rest away:

     الجنة تحت أقدام الأمهات → "Seeking knowledge is a path to Paradise"
        الأمهات and أقدام occur nowhere in the corpus, so both were dropped
        and الجنة alone chose the answer. Nothing about mothers came back —
        although this site carries "your mother, then your mother, then your
        mother". The handoff records this exact case as FIXED. It was not.
     حب الوطن من الإيمان   → "On seeing the new moon"
        الوطن dropped, الإيمان alone decided, and الإيمان happens to sit in
        the supplication for a new moon.
     بر الوالدين واجب على كل مسلم → "Ghusl on Friday and cleanliness"
        matched on واجب — a word that ranks a ruling and is never a subject.
     I love my mom          → "Loving for your brother what you love for
        yourself" — "mom" is three letters and the matcher only looked at
        words of four or more, so the sentence WAS "love".

   FOUR RULES, and all four are needed — each of the cases above survives
   any three of them:

   1. WHOLE WORDS, NEVER SUBSTRINGS. `indexOf` on a skeleton is the trap
      this repo has now recorded four times (ولي inside وليس, عينة inside
      بعينه, ألم inside بالمولد). Attached prefixes are stripped instead.

   2. GENERIC WORDS CANNOT CARRY A MATCH. واجب, حرام, مسلم, man, people,
      thing rank or classify whatever the subject turns out to be; they are
      never the subject. This is the list the Guidance page had and this
      page did not.

   3. CONCEPTS, IN BOTH SCRIPTS. الأمهات and أمك are one subject, and so are
      "mom" and "mother" — the synonym map here was English-only and did not
      even carry "mom". A concept is matched when the entry holds ANY word of
      the group, which is what lets a plural in the claim reach a singular in
      the text without a root stemmer.

   4. THE MATCH MUST ACCOUNT FOR THE SENTENCE. One shared concept is enough
      only when it is the most distinctive one the claim has AND the entry is
      actually ABOUT it — its own title or `keys` say so. Otherwise two are
      needed, and either way the matched words must cover a real share of the
      claim. This is the rule that answers his complaint directly: a leftover
      common word can no longer speak for a sentence. */

/* Attached prefixes, longest first — the same list the Guidance page uses. */
const V_AR_PREFIX = ["وبال", "فبال", "وال", "بال", "فال", "كال", "لل", "ال",
                     "و", "ف", "ب", "ك", "ل"];

function vArStrip(w) {
  if (!V_ARABIC.test(w)) return w;
  for (let i = 0; i < V_AR_PREFIX.length; i++) {
    const p = V_AR_PREFIX[i];
    if (w.lastIndexOf(p, 0) !== 0) continue;
    const rest = w.slice(p.length);
    /* A ONE-LETTER PREFIX MUST LEAVE A LONGER WORD BEHIND THAN A THREE-LETTER
       ONE, because و ف ب ك ل are also ordinary letters. Measured: فُتِحَت
       ("were opened") had its ف stripped and became تحت ("under"), which
       then matched "الجنة تحت أقدام الأمهات" and answered a claim about
       mothers with the supplication after wudu. The determiners (ال and its
       compounds) are unambiguous and keep the looser rule. */
    const min = p.length === 1 ? 4 : 3;
    if (rest.length >= min) return rest;
  }
  return w;
}

/* Every whole word of a text, plus its prefix-stripped form. O(1) lookups,
   and nothing can be found inside a longer word. */
function vWordSet(skel) {
  const set = Object.create(null);
  skel.split(" ").forEach(function (w) {
    if (!w) return;
    set[w] = 1;
    const s = vArStrip(w);
    if (s !== w && s.length >= 3) set[s] = 1;
  });
  return set;
}

/* Semantically generic even where they are statistically rare here. Matching
   only one of these is never relevance. Written in skeleton form — the same
   mistake the Guidance page made was writing the Arabic half in a form no
   reader ever types, so it never fired. */
const V_GENERIC = (
  "man men male woman women female people person human boy girl child "
  + "thing things someone somebody anyone everyone other others "
  + "prophet messenger allah god islam islamic muslim muslims said say says "
  + "told came come went give given take made make day days time year years "
  + "life live world great good bad best better very also first second story "
  + "most more less least important thing whoever whatever every each "
  /* NOUNS THAT CARRY NO SUBJECT. "way" was worth 3.92 in "kindness to your
     mother is the way to paradise" and helped an entry about mercy to
     animals outweigh the hadith about one's mother. */
  + "way ways part parts half whole side sides place places point points "
  + "case cases sort sorts type types kind number lot lots piece pieces "
  + "طريق الطريق طريقه جزء الجزء نصف الجانب مكان المكان نوع النوع حال الحال "
  + "رجل رجال امراه نساء انسان الانسان الناس ناس شخص احد ولد بنت طفل "
  + "شيء اشياء الاشياء امر الامر امور حاجه الله النبي الرسول محمد الاسلام "
  + "مسلم المسلم المسلمين مؤمن المؤمن جاء ذهب اخذ اعطى فعل يفعل "
  + "يوم ايام وقت سنه سنوات حياه الحياه الدنيا العالم كبير صغير "
  + "جيد حسن سيء جدا اول ثاني قصه كثير قليل بعض جميع "
  + "اكثر اقل اهم اعظم اشهر افضل احسن اسوا ابرز اخطر معظم اغلب "
  /* RULING AND OBLIGATION WORDS. واجب is what answered "بر الوالدين واجب
     على كل مسلم" with ghusl on a Friday: it is in the corpus, it is rare,
     and it says nothing whatever about the subject. */
  + "واجب الواجب فرض الفرض حرام الحرام حلال الحلال جائز يجوز مستحب مكروه "
  + "سنه مندوب مباح حكم الحكم"
).split(/\s+/).filter(Boolean);

const V_GENERIC_SET = (function () {
  const m = Object.create(null);
  V_GENERIC.forEach(function (w) {
    const k = V_ARABIC.test(w) ? vSkelWord(w) : w;
    if (k) { m[k] = 1; m[vArStrip(k)] = 1; }
  });
  return m;
})();

function vIsGeneric(w) { return !!V_GENERIC_SET[w] || !!V_GENERIC_SET[vArStrip(w)]; }

/* Document frequency over everything this site carries, built once.

   WHY THIS EXISTS. Ranking related material by how MANY words it shares was
   useless, because the words a claim shares are usually the common ones:
   "الجنة تحت أقدام الأمهات" returned nothing about mothers at all, because
   الجنة and تحت pulled in every entry that mentions Paradise. A word found
   in a hundred entries carries almost no information; one found in three is
   decisive.

   This is the same lesson the Guidance page learned and wrote down —
   relevance there uses word rarity so common words score near zero — and it
   should have been applied here from the start rather than after being
   told twice. */
var V_DF = null, V_DOCS = 0;

/* THE `keys` FIELDS ARE THE WHOLE POINT FOR EVERYDAY LANGUAGE, and this
   search was ignoring them.

   The content guide in this repo says what they are for, in these words:
   "Keys matter. They are how a natural question finds the entry. Include
   the everyday words a person would actually type, in both languages."
   That is exactly the problem here — nobody knows the wording of a hadith,
   they know what it is ABOUT. Somebody typing "make connections with your
   family" is asking for صلة الرحم and should be given it.

   So every entry's searchable text now carries its keys, in both scripts,
   and the keys are mixed into BOTH sides: Arabic keys into the Arabic text
   and Latin keys into the English, because a key list holds both. */
function vKeyText(keys, wantArabic) {
  if (!keys || !keys.length) return "";
  var out = [];
  for (var i = 0; i < keys.length; i++) {
    var isAr = /[ء-ي]/.test(keys[i]);
    if (isAr === !!wantArabic) out.push(keys[i]);
  }
  return " " + out.join(" ");
}

/* fn(arBody, enBody, entry, arSubject, enSubject)

   THE SUBJECT IS THE FOURTH AND FIFTH ARGUMENT, and it is what the entry is
   ABOUT: its title and its `keys`. Matching a word somewhere in a body is
   weak evidence — الإيمان sits in the supplication for a new moon — while
   matching the title or a key is the entry declaring its own subject. The
   two were previously mixed into one blob, so nothing could tell them
   apart. */
function vEachEntry(fn) {
  if (typeof HADITHS !== "undefined") {
    HADITHS.forEach(function (h) {
      fn(h.arabic + " " + (h.topic || "") + vKeyText(h.keys, true),
         h.text + " " + (h.title || "") + " " + (h.topic || "") + vKeyText(h.keys, false),
         { title: h.title || h.topic, ar: h.arabic, en: h.text,
           ref: h.ref, strength: h.strength, where: "hadith.html" },
         (h.topic || "") + vKeyText(h.keys, true),
         (h.title || "") + " " + (h.topic || "") + vKeyText(h.keys, false));
    });
  }
  if (typeof SUNNAH !== "undefined") {
    SUNNAH.forEach(function (s) {
      fn((s.arabic || "") + " " + (s.titleAr || "") + " " + (s.detailAr || "") + vKeyText(s.keys, true),
         s.title + " " + s.detail + vKeyText(s.keys, false),
         { title: s.title, titleAr: s.titleAr, ar: s.arabic, en: s.detail,
           ref: s.ref, strength: s.strength, where: "sunnah.html" },
         (s.titleAr || "") + vKeyText(s.keys, true),
         (s.title || "") + vKeyText(s.keys, false));
    });
  }
  if (typeof ADHKAR !== "undefined") {
    ADHKAR.forEach(function (d) {
      fn(d.arabic + " " + (d.titleAr || "") + vKeyText(d.keys, true),
         d.en + " " + (d.title || "") + vKeyText(d.keys, false),
         { title: d.title, titleAr: d.titleAr, ar: d.arabic, en: d.en,
           ref: d.ref, strength: d.strength, where: "guidance.html#adhkar" },
         (d.titleAr || "") + vKeyText(d.keys, true),
         (d.title || "") + vKeyText(d.keys, false));
    });
  }
  if (typeof PROPHET_STORIES !== "undefined") {
    PROPHET_STORIES.forEach(function (p) {
      fn((p.arabic || "") + " " + (p.titleAr || "") + " " + (p.lessonAr || "") + vKeyText(p.keys, true),
         (p.title || "") + " " + (p.lesson || "") + vKeyText(p.keys, false),
         { title: p.title, titleAr: p.titleAr, ar: p.arabic, en: p.lesson,
           ref: p.ref, strength: p.strength, where: "stories.html" },
         (p.titleAr || "") + vKeyText(p.keys, true),
         (p.title || "") + vKeyText(p.keys, false));
    });
  }
}

function vBuildDf() {
  V_DF = {}; V_DOCS = 0;
  vEachEntry(function (arText, enText) {
    V_DOCS++;
    var seen = {};
    vSkelWord(arText).split(" ").concat(vSkelEn(enText).split(" ")).forEach(function (w) {
      if (w.length < 3 || seen[w]) return;
      seen[w] = 1;
      V_DF[w] = (V_DF[w] || 0) + 1;
    });
  });
}

function vWeight(w) {
  if (!V_DF) vBuildDf();
  var df = V_DF[w] || 0;
  return Math.log((V_DOCS + 1) / (df + 1));
}

/* At least one shared word has to be genuinely distinctive — and
   "distinctive" is judged RELATIVE TO THIS CLAIM, not against a fixed
   number. An absolute bar cannot work: الجنة weighs 3.22, which sounds
   rare until the claim is "الجنة تحت أقدام الأمهات", where the word that
   actually carries the subject is الأمهات at 5.52. Anything matching only
   on الجنة is then about Paradise in general, not about mothers, and it
   was filling the panel with exactly that.

   So an entry must match on a word worth at least this fraction of the
   best word the claim has. When nothing clears it, the honest result is
   an empty related section — the site simply has nothing close, and
   saying so beats three confident irrelevancies. */
var V_MIN_WEIGHT = 1.8;
var V_REL_SHARE = 0.65;

/* EVERYDAY WORDS THAT MEAN THE SAME THING.

   His complaint, and it is the right one: "do you think I know what the
   words of the hadith are? most people don't know what words to use, so
   use normal people words and not only formal words."

   A person asking about صلة الرحم may well type "make connections with your
   family" — which is a literal rendering of the Arabic — while the entry
   itself says "ties" and "relatives". No amount of rarity weighting bridges
   that, because the words genuinely do not overlap. So a small map of
   everyday phrasings onto the vocabulary the content actually uses.

   Kept deliberately small and concrete. It is not a thesaurus: each group
   is one SUBJECT that people ask about in more than one way, and adding a
   word here can only widen what is found, never change a grading. */
var V_SYNONYMS = [
  ["connection", "connections", "connect", "ties", "tie", "kinship", "relatives", "relative", "rahim"],
  /* The plural again. "the best of you are those who are best to their
     FAMILIES" could not reach the entry whose keys say "family", so the one
     hadith on this site that carries those words — at-Tirmidhi 3895, cited
     correctly in HADITHS — was never offered, while the Sunnah summary that
     merely quotes it in passing was. */
  ["family", "families", "relatives", "relative", "kin", "kinship", "household", "households"],
  ["parents", "mother", "father", "mum", "dad", "parent"],
  ["angry", "anger", "temper", "rage", "furious"],
  ["charity", "sadaqah", "giving", "give", "donate", "alms",
   "poor", "needy", "money", "spend", "spending", "help"],
  ["sleep", "sleeping", "bed", "night", "bedtime"],
  ["cheat", "cheating", "deceive", "fraud", "dishonest"],
  ["wash", "washing", "wudu", "ablution", "purity", "clean", "cleanliness"],
  ["forgive", "forgiveness", "pardon", "istighfar", "repent", "repentance",
   "sorry", "apologise", "apologize", "sin", "sins", "mistake"],
  ["patience", "patient", "sabr", "endure", "hardship", "difficult",
   "hard", "trouble", "distress", "sad", "sadness", "worry"],
  ["neighbour", "neighbor", "neighbours", "neighbors"],
  ["knowledge", "learn", "learning", "study", "seek", "ilm"],
  ["tongue", "speech", "speak", "words", "backbiting", "gossip"],
  ["prayer", "pray", "salah", "salat"],
  ["fasting", "fast", "sawm", "ramadan"],
  ["smile", "smiling", "cheerful", "face"],
  ["mercy", "merciful", "kind", "kindness", "compassion"],
  ["debt", "loan", "owe", "borrow"],
  ["orphan", "orphans"],
  ["intention", "intentions", "niyyah", "sincerity"],

  /* "mom" was missing and that is the whole of why "I love my mom" was
     answered with loving for your brother what you love for yourself. The
     Guidance page's own concept list has carried "mom" all along; this one
     did not, and the two were never compared. */
  /* PLURALS MUST BE LISTED. "paradise lies at the feet of mothers" reached
     nothing about mothers because only the singular was here, and there is
     no English stemmer on this page. */
  ["mother", "mothers", "mom", "moms", "mum", "mums", "mummy", "mama"],
  ["father", "fathers", "dad", "dads", "daddy", "baba"],
  ["parent", "parents"],
  ["brother", "brothers", "sister", "sisters", "sibling", "siblings"],
  ["son", "sons", "daughter", "daughters", "child", "children", "kids"],
  ["homeland", "country", "nation", "patriotism", "patriotic"],
  ["paradise", "jannah", "heaven"],
  ["faith", "belief", "believer", "believers", "iman"],

  /* THE ARABIC SIDE, which did not exist. The note that used to sit here
     said Arabic was "left alone" because widening it would need a root
     normaliser. That is true of a general solution and false of this one: a
     named list of the subjects people actually forward needs no morphology,
     and without it الأمهات could never reach أمك, so a claim about mothers
     was answered with whatever else mentioned Paradise.

     Written in SKELETON form (vSkelWord), which is what the matcher sees. */
  ["ام", "امي", "امك", "امه", "الام", "امهات", "الامهات", "والده", "الوالده", "امهاتكم"],
  ["اب", "ابي", "ابوك", "الاب", "اباء", "الاباء", "والد", "الوالد"],
  ["الوالدين", "والدين", "الابوين", "ابوين", "بر الوالدين", "الام", "الاب"],
  /* KINSHIP AND HOUSEHOLD ARE TWO GROUPS, AND صلة IS IN NEITHER.

     They were one, and the phrase "صلة الرحم" sat inside it — which indexes
     صلة and الرحم as THE SAME concept, so a claim naming both counted as one
     and could never reach the two-concept gate. الأهل was in there too, and
     it is common enough to have diluted the whole group to twelve entries.
     Measured on "صلة الرحم تزيد في العمر": the kinship concept fell to 3.15
     while العمر stood at 4.61, so the one entry actually about صلة الرحم was
     refused and the hadith on being questioned about your lifespan answered
     instead. Words that merely CO-OCCUR are not synonyms. */
  ["الرحم", "رحم", "ارحام", "الاقارب", "اقارب", "قرابه", "عشيره", "ذوي القربي"],
  ["الاهل", "اهل", "اهله", "اهلي", "العائله", "عائله", "ذوي"],
  ["الجنه", "جنه", "الفردوس", "النعيم"],
  ["الايمان", "ايمان", "مؤمن", "المؤمنين", "تصديق"],
  ["العلم", "علم", "تعلم", "يتعلم", "العلماء", "طالب العلم", "معرفه"],
  ["الصلاه", "صلاه", "يصلي", "المصلي", "ركعه", "ركعتين"],
  ["الصدقه", "صدقه", "تصدق", "الزكاه", "زكاه", "انفاق", "ينفق"],
  ["الغضب", "غضب", "غاضب", "يغضب", "الحلم"],
  ["الصبر", "صبر", "يصبر", "الصابرين", "احتساب"],
  ["النظافه", "نظافه", "طهاره", "الطهاره", "وضوء", "الوضوء", "غسل", "الغسل"],
  ["الكذب", "كذب", "يكذب", "الصدق", "صدق"],
  ["الغش", "غش", "خيانه", "يخون", "تدليس"],
  ["الجار", "جار", "الجيران", "جيران"],
  ["اللسان", "لسان", "الغيبه", "غيبه", "نميمه", "الكلام"],
  ["التوبه", "توبه", "استغفار", "الاستغفار", "يتوب", "الذنب", "ذنب", "ذنوب", "المغفره"],
  ["الزوجه", "زوجه", "الزوج", "زوج", "النكاح", "الزواج", "زواج", "اهلي", "اهله"],
  ["اليتيم", "يتيم", "الايتام", "ايتام"],
  ["النيه", "نيه", "بالنيات", "النيات", "الاخلاص", "اخلاص"],
  ["الابتسامه", "ابتسامه", "تبسم", "التبسم", "بشاشه", "وجه طلق"],
  ["الرحمه", "رحمه", "يرحم", "الرحماء", "شفقه"],
  /* الدَّين (debt) and الدِّين (religion) are one word once the vowels are
     dropped, so neither may be folded into this group — "الصلاة عماد الدين"
     would then be answered with the entries on borrowing. Only the forms
     that can mean nothing else are listed. */
  ["الديون", "ديون", "قرض", "القرض", "مدين", "استدان"]
];

/* word -> the ids of every group it belongs to. A word may sit in several
   (الأم is both "mother" and "parents"), and that is deliberate. */
const V_CONCEPT = (function () {
  const m = Object.create(null);
  V_SYNONYMS.forEach(function (g, id) {
    g.forEach(function (raw) {
      /* A multi-word entry like "صلة الرحم" is indexed on each of its words;
         the group is what carries the meaning, not the phrase. */
      const norm = V_ARABIC.test(raw) ? vSkelWord(raw) : vSkelEn(raw);
      norm.split(" ").forEach(function (w) {
        if (!w || w.length < 3) return;
        (m[w] = m[w] || []).push("g" + id);
        const s = vArStrip(w);
        if (s !== w && s.length >= 3) (m[s] = m[s] || []).push("g" + id);
      });
    });
  });
  return m;
})();

/* Every group a word belongs to, flattened into the extra words to try.
   Kept for the callers that only want a widened word list. */
function vExpand(words) {
  var out = words.slice(), seen = {}, i, j, g;
  words.forEach(function (w) { seen[w] = 1; });
  for (i = 0; i < V_SYNONYMS.length; i++) {
    g = V_SYNONYMS[i];
    var inGroup = false;
    for (j = 0; j < g.length; j++) { if (seen[g[j]]) { inGroup = true; break; } }
    if (!inGroup) continue;
    for (j = 0; j < g.length; j++) {
      if (!seen[g[j]]) { seen[g[j]] = 1; out.push(g[j]); }
    }
  }
  return out;
}

/* ---- the claim, read as a sentence rather than as a bag of words ----

   Each content word becomes a CONCEPT: itself, plus every word of every
   group it belongs to. The concept's weight is the rarest form of it that
   the corpus actually contains — never the df = 0 maximum, because absence
   is not distinctiveness (the trap this file already records for
   "connections"), and never zero either, because the word is still part of
   what the reader wrote. `generic` concepts are carried so they can be
   counted for coverage but never allowed to decide a match. */
function vClaimConcepts(claim) {
  const ar = vIsArabic(claim);
  const cs = ar ? vStripBoiler(vSkelWord(claim)) : vSkelEn(claim);
  const words = vContentWords(cs);
  if (!V_DF) vBuildDf();
  const byId = Object.create(null), out = [];
  words.forEach(function (w) {
    const base = vArStrip(w);
    const groups = (V_CONCEPT[w] || []).concat(V_CONCEPT[base] || []);
    const id = groups.length ? groups[0] : ("w:" + base);
    let c = byId[id];
    if (!c) {
      c = byId[id] = { id: id, forms: Object.create(null), weight: 0,
                       generic: true, words: [] };
      out.push(c);
    }
    c.words.push(w);
    if (!vIsGeneric(w)) c.generic = false;
    /* every form this concept may appear as in an entry */
    const forms = [w, base];
    groups.forEach(function (gid) {
      V_SYNONYMS[+gid.slice(1)].forEach(function (raw) {
        const norm = V_ARABIC.test(raw) ? vSkelWord(raw) : vSkelEn(raw);
        norm.split(" ").forEach(function (x) { if (x.length >= 3) forms.push(x); });
      });
    });
    forms.forEach(function (f) {
      if (!f || f.length < 3) return;
      c.forms[f] = 1;
      /* The weight is set by the rarest form the corpus HAS. A form the
         corpus has never seen contributes nothing to the weight, so a claim
         cannot be ranked on a word that exists only in the claim. */
      if ((V_DF[f] || 0) > 0) c.weight = Math.max(c.weight, vWeight(f));
    });
  });
  /* A concept the corpus has never seen in any form still counts toward how
     much of the sentence an entry has to account for — that is exactly what
     was being thrown away — so it gets a nominal weight rather than none. */
  out.forEach(function (c) { if (!c.weight) { c.weight = 2.2; c.absent = true; } });
  return out;
}

/* Which of the claim's concepts does this entry hold, and is the entry
   ABOUT any of them — that is, does the concept appear in the entry's own
   title or `keys` rather than somewhere down in its body? */
function vMatchConcepts(concepts, bodySet, subjSet) {
  let total = 0, covered = 0, best = 0, n = 0, subjectHit = false;
  const hitWords = [];
  concepts.forEach(function (c) {
    total += c.weight;
    let inBody = false, inSubj = false;
    for (const f in c.forms) {
      if (bodySet[f]) inBody = true;
      if (subjSet && subjSet[f]) { inSubj = true; inBody = true; }
      if (inBody && inSubj) break;
    }
    if (!inBody) return;
    covered += c.weight;
    if (c.generic) return;             // counts for coverage, never for the decision
    n++;
    hitWords.push(c.words[0]);
    if (c.weight > best) best = c.weight;
    if (inSubj) subjectHit = true;
  });
  return { total: total, covered: covered, share: total ? covered / total : 0,
           best: best, n: n, subjectHit: subjectHit, words: hitWords };
}

/* The gates, together. Written once so `related` and `explain` cannot drift
   apart — they had already drifted, and the explain side was the looser of
   the two, which is why a claim about seeking knowledge was answered with
   the entry on the niqab. */
var V_MIN_SHARE_OF_CLAIM = 0.34;   // how much of the sentence a match must account for
var V_TOP_CONCEPT_SHARE  = 0.85;   // a lone concept must be the claim's strongest

function vConceptGate(m, claimTop, bar) {
  if (!m.n) return false;
  if (m.best < bar) return false;
  /* TWO OR MORE CONCEPTS: the danger is a pile of weak ones, so they have to
     add up to a real share of the sentence. */
  if (m.n >= 2) return m.share >= V_MIN_SHARE_OF_CLAIM;
  /* ONE CONCEPT: it has to be the most distinctive thing in the sentence AND
     the entry has to be ABOUT it — its own title or keys must say so. This
     is the rule that stops "On seeing the new moon" answering "حب الوطن من
     الإيمان", and it does not use the share, because a share cannot tell a
     subject from an incidental word: "صلة الرحم تزيد في العمر" spends two
     thirds of its weight on تزيد and العمر, and requiring a share of the
     whole sentence threw away the one entry that was actually about صلة
     الرحم. */
  return m.subjectHit && m.best >= claimTop * V_TOP_CONCEPT_SHARE;
}

/* ---- the word sets, built ONCE ----------------------------------------

   Rebuilding a word set for every entry on every keystroke took the battery
   of 29 claims from milliseconds to 15.6 SECONDS. This file already records
   the same lesson for the deep search ("precompute each collection's
   skeleton once at load"); it applies here for exactly the same reason. Both
   scripts are built for every entry, because the reader can switch language
   between one question and the next. */
var V_ENTRY_INDEX = null, V_EXPLAIN_INDEX = null;

function vIndexOf(each) {
  var rows = [];
  each(function (arText, enText, entry, arSubj, enSubj) {
    rows.push({
      arBody: vWordSet(vSkelWord(arText || "")),
      enBody: vWordSet(vSkelEn(enText || "")),
      arSubj: vWordSet(vSkelWord(arSubj || "")),
      enSubj: vWordSet(vSkelEn(enSubj || "")),
      entry: entry
    });
  });
  return rows;
}

function vEntryIndex() {
  if (!V_ENTRY_INDEX) V_ENTRY_INDEX = vIndexOf(vEachEntry);
  return V_ENTRY_INDEX;
}
function vExplainIndex() {
  if (!V_EXPLAIN_INDEX) V_EXPLAIN_INDEX = vIndexOf(vEachExplain);
  return V_EXPLAIN_INDEX;
}

/* ---- HOW SELECTIVE IS THIS CONCEPT, IN THIS CORPUS? ---------------------

   Rarity measured on single words could not choose between النظافة and
   الإيمان in "النظافة من الإيمان": both sit in five entries and both weigh
   3.92, so the three entries about faith crowded out the one about
   cleanliness, which is the subject of the sentence. The same fault in
   English let "kindness" — a concept 24 entries match — outweigh "mother",
   which 9 match, and the hadith naming one's mother three times was dropped
   from a claim whose subject was one's mother.

   So the weight used for RANKING is measured over CONCEPTS, and over the
   entries that actually hold them, in one pass at query time. A concept that
   half the collection shares tells the reader nothing about which entry
   answers them; a concept nine entries share is close to an answer by
   itself. */
function vConceptSelectivity(rows, concepts, ar) {
  var n = rows.length, i, j;
  var counts = concepts.map(function () { return 0; });
  var subjCounts = concepts.map(function () { return 0; });
  var held = new Array(n);
  for (i = 0; i < n; i++) {
    var body = ar ? rows[i].arBody : rows[i].enBody;
    var subj = ar ? rows[i].arSubj : rows[i].enSubj;
    var row = held[i] = { body: [], subj: [] };
    for (j = 0; j < concepts.length; j++) {
      var forms = concepts[j].forms, inB = false, inS = false, f;
      for (f in forms) {
        if (body[f]) inB = true;
        if (subj[f]) { inS = true; inB = true; }
        if (inB && inS) break;
      }
      if (inB) {
        counts[j]++; row.body.push(j);
        if (inS) { row.subj.push(j); subjCounts[j]++; }
      }
    }
  }
  var weights = counts.map(function (c) { return Math.log((n + 1) / (c + 1)); });
  return { held: held, counts: counts, subjCounts: subjCounts, weights: weights };
}

/* WHICH CONCEPT IN THIS SENTENCE IS ITS SUBJECT?

   Taking the rarest one is wrong, and it fails in the mirror image of the
   fault this whole file was rebuilt for. Measured, all three real:

     "حق الجار عليك"        → nothing. عليك — a PRONOUN — sits in two entries
                              and therefore outweighed الجار, which sits in
                              seven, so the bar rose above the subject and
                              the hadith on the neighbour was refused.
     "whoever relieves a believer of a hardship" → nothing, because
                              "relieves" occurs in one entry and shut out
                              "believer" and "hardship" beneath it.
     "أحب لأخيك ما تحب لنفسك" → nothing, on تحب.

   A word no entry anywhere treats as its own subject — none of them names it
   in a title or a `keys` list — is vocabulary, not subject matter, however
   rare it happens to be. So only concepts that at least one entry DECLARES
   may set the bar. If the claim has none of those, fall back to whatever the
   corpus holds at all, because a bar of zero would admit everything. */
function vClaimTop(concepts, sel) {
  var top = 0, j;
  for (j = 0; j < concepts.length; j++) {
    if (!concepts[j].generic && sel.subjCounts[j] > 0 && sel.weights[j] > top) {
      top = sel.weights[j];
    }
  }
  if (top) return top;
  for (j = 0; j < concepts.length; j++) {
    if (!concepts[j].generic && sel.counts[j] > 0 && sel.weights[j] > top) {
      top = sel.weights[j];
    }
  }
  return top;
}

/* Score one entry against the WHOLE claim, using the selectivity weights. */
function vScoreRow(concepts, sel, i) {
  var row = sel.held[i], total = 0, covered = 0, best = 0, n = 0;
  var subjectHit = false, j, w, k;
  for (j = 0; j < concepts.length; j++) total += sel.weights[j];
  var inSubj = Object.create(null);
  for (k = 0; k < row.subj.length; k++) inSubj[row.subj[k]] = 1;
  for (k = 0; k < row.body.length; k++) {
    j = row.body[k];
    w = sel.weights[j];
    covered += w;
    if (concepts[j].generic) continue;
    n++;
    if (w > best) best = w;
    if (inSubj[j]) subjectHit = true;
  }
  return { total: total, covered: covered, share: total ? covered / total : 0,
           best: best, n: n, subjectHit: subjectHit };
}

function vSearchRelated(claim) {
  var ar = vIsArabic(claim);
  var concepts = vClaimConcepts(claim);
  if (!concepts.length) return [];
  if (!V_DF) vBuildDf();
  var hits = [];

  /* The bar is set by the strongest CONCEPT the claim has that the corpus
     actually contains. Absence is not distinctiveness — a word found in
     nothing used to score the maximum and shut out every real match beneath
     it ("make connections with your family" was answered with nothing at
     all, because "connections" occurs in no entry) — so an absent concept
     carries a nominal weight and sets no bar. What it DOES still do is
     count toward how much of the sentence a match has to account for, which
     is what stops الجنة speaking for a claim about الأمهات. */
  var rows = vEntryIndex();
  var sel = vConceptSelectivity(rows, concepts, ar);
  /* THE BAR IS SET BY THE STRONGEST CONCEPT THE CORPUS ACTUALLY HAS.

     A concept NO entry holds gets the maximum selectivity weight, and that
     is the df = 0 trap this file already records twice — absence is not
     distinctiveness. It came back the moment weights were measured over
     concepts instead of words: الصين and أقدام are held by nothing, scored
     5.73, and the bar they set shut out أمّك at 3.43, so the two claims this
     whole change exists to fix went empty. An unheld concept therefore sets
     no bar. It still counts toward `total`, so it still decides how much of
     the sentence a match has to account for — which is the part that must
     never be thrown away. */
  var claimTop = vClaimTop(concepts, sel);
  var bar = Math.max(V_MIN_WEIGHT, claimTop * V_REL_SHARE);

  for (var i = 0; i < rows.length; i++) {
    var m = vScoreRow(concepts, sel, i);
    if (!vConceptGate(m, claimTop, bar)) continue;
    hits.push(Object.assign({ kind: "related", score: m.covered, best: m.best,
                              shared: m.n, subj: m.subjectHit }, rows[i].entry));
  }

  /* RANK ON THE STRONGEST THING MATCHED, NOT ON HOW MANY THINGS WERE.
     Summing let an entry that brushed three incidental words of a sentence
     beat the one entry that was actually about its subject — measured on
     "kindness to your mother is the way to paradise", where the hadith
     naming one's mother three times was pushed off the list altogether.
     Breadth is kept only as a tiebreak. */
  hits.sort(function (a, b) {
    if (!!a.subj !== !!b.subj) return a.subj ? -1 : 1;
    if (Math.abs(b.best - a.best) > 0.001) return b.best - a.best;
    return b.score - a.score;
  });
  /* Drop the tail for the same reason the bar is relative: an entry matching
     something far weaker than the best one is not "also relevant", it is the
     next thing down a long list. Three weak suggestions read as padding and
     cost the page the trust the strong one earned. */
  if (hits.length) {
    var top = hits[0].best;
    hits = hits.filter(function (h) { return h.best >= top * 0.75; });
  }
  return hits.slice(0, 3);
}

/* ================= WHAT THE SITE EXPLAINS ABOUT THIS ====================

   A SECOND THING PEOPLE ACTUALLY DO, which this page was ignoring: they ask
   a QUESTION. "ما هي البدعة؟" is not a claimed hadith, and answering it with
   "we did not find this wording" is useless when the site carries a whole
   section on the subject. It also fails his standing complaint — a person
   uses the words they have, not the words a text uses.

   So the site's own EXPLANATORY content is searched too: the terms glossary,
   the scholars' rulings, the section on adding to the religion, and the
   hardest-questions cards. These are explanations, not narrations, so they
   are rendered as their own kind of answer and never carry a hadith grading.
   ===================================================================== */

function vEachExplain(fn) {
  /* the technical terms — the shortest, most direct answer to "what is X" */
  if (typeof TERMS !== "undefined") {
    TERMS.forEach(function (x) {
      fn((x.ar || "") + " " + (x.defAr || ""),
         (x.en || "") + " " + (x.def || "") + " " + (x.alt || []).join(" "),
         { kind: "explain", what: "term", title: x.en, titleAr: x.ar,
           body: x.def, bodyAr: x.defAr, where: "guidance.html#terms" },
         (x.ar || ""), (x.en || "") + " " + (x.alt || []).join(" "));
    });
  }
  /* the scholars' rulings — question and authored answer */
  if (typeof FIQH_RULINGS !== "undefined") {
    FIQH_RULINGS.forEach(function (r) {
      fn((r.titleAr || "") + " " + (r.questionAr || "") + " " + (r.answerAr || "") + vKeyText(r.keys, true),
         (r.title || "") + " " + (r.question || "") + " " + (r.answer || "") + vKeyText(r.keys, false),
         { kind: "explain", what: "ruling", title: r.title, titleAr: r.titleAr,
           body: r.answer, bodyAr: r.answerAr, where: "guidance.html#rulings" },
         (r.titleAr || "") + " " + (r.questionAr || "") + vKeyText(r.keys, true),
         (r.title || "") + " " + (r.question || "") + vKeyText(r.keys, false));
    });
  }
  /* adding to the religion */
  if (typeof BIDAH !== "undefined") {
    var push = function (c) {
      if (!c) return;
      fn((c.titleAr || "") + " " + (c.arabicAr || "") + " " + (c.bodyAr || c.textAr || ""),
         (c.title || "") + " " + (c.body || c.text || ""),
         { kind: "explain", what: "bidah", title: c.title || BIDAH.title,
           titleAr: c.titleAr || BIDAH.titleAr, body: c.body || c.text,
           bodyAr: c.bodyAr || c.textAr, where: "guidance.html#bidah" },
         (c.titleAr || ""), (c.title || ""));
    };
    fn((BIDAH.titleAr || "") + " " + (BIDAH.introAr || ""),
       (BIDAH.title || "") + " " + (BIDAH.intro || ""),
       { kind: "explain", what: "bidah", title: BIDAH.title, titleAr: BIDAH.titleAr,
         body: BIDAH.intro, bodyAr: BIDAH.introAr, where: "guidance.html#bidah" },
       (BIDAH.titleAr || ""), (BIDAH.title || ""));
    (BIDAH.base || []).forEach(push);
    (BIDAH.cards || []).forEach(push);
    (BIDAH.notBidah || []).forEach(push);
  }
  /* the hardest questions */
  if (typeof MISUNDERSTOOD !== "undefined") {
    (MISUNDERSTOOD.sections || []).forEach(function (s) {
      (s.cards || []).forEach(function (c) {
        fn((c.titleAr || "") + " " + (c.plainAr || ""),
           (c.title || "") + " " + (c.plain || ""),
           { kind: "explain", what: "misunderstood", title: c.title, titleAr: c.titleAr,
             body: c.plain, bodyAr: c.plainAr, where: "guidance.html#misunderstood" },
           (c.titleAr || ""), (c.title || ""));
      });
    });
  }
}

/* `strict` is passed when something has ALREADY been identified. In that
   case an explanation is a bonus beside a real answer, and a loose one is
   pure noise — pasting إنما الأعمال بالنيات, which the page matches exactly
   to al-Bukhari 1, was followed by "wiping over socks instead of washing the
   feet". So when there is already a verdict, the explanation has to be about
   the subject and not merely to contain one of its words. */
function vSearchExplain(claim, strict) {
  var ar = vIsArabic(claim);
  var concepts = vClaimConcepts(claim);
  if (!concepts.length) return [];
  if (!V_DF) vBuildDf();

  var rows = vExplainIndex();
  var sel = vConceptSelectivity(rows, concepts, ar);
  /* Only a concept some entry DECLARES may set the bar — see vClaimTop. */
  var claimTop = vClaimTop(concepts, sel);
  /* A question is usually SHORT and its subject is one word — "ما هي
     البدعة؟" reduces to a single content word. So the bar here is gentler
     than for related narrations: this content is an explanation offered as
     an explanation, not a text being identified. */
  var bar = Math.max(1.2, claimTop * 0.45);

  var hits = [];
  for (var i = 0; i < rows.length; i++) {
    var m = vScoreRow(concepts, sel, i);
    if (!m.n || m.best < bar) continue;
    /* The same gates the related search uses, so the two cannot drift. */
    if (!vConceptGate(m, claimTop, bar)) continue;
    if (strict && !m.subjectHit) continue;
    hits.push(Object.assign({ score: m.covered, best: m.best, subj: m.subjectHit }, rows[i].entry));
  }
  hits.sort(function (a, b) {
    if (!!a.subj !== !!b.subj) return a.subj ? -1 : 1;
    if (Math.abs(b.best - a.best) > 0.001) return b.best - a.best;
    return b.score - a.score;
  });
  if (hits.length) {
    var top = hits[0].best;
    hits = hits.filter(function (h) { return h.best >= top * 0.75; });
  }
  return hits.slice(0, strict ? 1 : 3);
}
