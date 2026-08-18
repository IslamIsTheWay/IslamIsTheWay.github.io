/* ============================================
   IslamBasics — Shared Site Behaviour
   ============================================ */

/* ---------- Staff sign-in that survives leaving the page ----------
   This used to live in sessionStorage, which is per-tab and dies with it. So
   opening a video link, or coming back to the dashboard later, meant signing in
   again and losing everything that had been typed. It is kept in localStorage
   now, with a deliberate expiry so a shared computer is not left open forever. */
const IITW_STAFF_KEY = "iitw-staff-session";
const IITW_STAFF_HOURS = 12;

function iitwStaffLogin(user) {
  try {
    localStorage.setItem(IITW_STAFF_KEY, JSON.stringify({ user, at: Date.now() }));
  } catch (e) {}
  // Kept in step with the old keys so nothing else in the site breaks.
  try {
    sessionStorage.setItem("islamIsTheWayStaff", "true");
    sessionStorage.setItem("islamIsTheWayStaffUser", user);
  } catch (e) {}
}

function iitwStaffUser() {
  try {
    const raw = localStorage.getItem(IITW_STAFF_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (s && s.user && Date.now() - s.at < IITW_STAFF_HOURS * 3600e3) {
        // Refresh the clock so an active session does not expire mid-task.
        localStorage.setItem(IITW_STAFF_KEY, JSON.stringify({ user: s.user, at: Date.now() }));
        return s.user;
      }
      localStorage.removeItem(IITW_STAFF_KEY);
    }
  } catch (e) {}
  // Fall back to an older tab that signed in before this change.
  try {
    return sessionStorage.getItem("islamIsTheWayStaff") === "true"
      ? sessionStorage.getItem("islamIsTheWayStaffUser") : null;
  } catch (e) { return null; }
}

function iitwStaffLogout() {
  try { localStorage.removeItem(IITW_STAFF_KEY); } catch (e) {}
  try {
    sessionStorage.removeItem("islamIsTheWayStaff");
    sessionStorage.removeItem("islamIsTheWayStaffUser");
  } catch (e) {}
}

/* ---------- Recommended recitations: one shared video parser ----------
   Used by BOTH the staff preview and the home page, deliberately. If the two
   parsed a link differently, the admin could approve one video and publish
   another — so there is exactly one implementation. */
function iitwParseVideo(url) {
  const raw = String(url || "").trim();
  if (!raw) return null;

  // youtu.be/ID · youtube.com/watch?v=ID · /shorts/ID · /embed/ID · /live/ID
  const yt = raw.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (yt) {
    const id = yt[1];
    return {
      kind: "youtube",
      id,
      // A Shorts link is a tall video, so the card is made tall to match.
      vertical: /youtube\.com\/shorts\//i.test(raw),
      /* nocookie: no tracking cookie before play. rel=0: no unrelated videos
         suggested afterwards on a site about the Quran. modestbranding and
         iv_load_policy strip the title bar and the annotation overlay, so the
         card reads as a video on this site rather than a YouTube page. The
         logo in the control bar cannot be removed — that is YouTube's. */
      embed: "https://www.youtube-nocookie.com/embed/" + id +
             "?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&color=white",
      // maxres is sharp when it exists; the caller falls back to hq on error.
      thumb: "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg",
      thumbFallback: "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg",
      watch: "https://www.youtube.com/watch?v=" + id
    };
  }

  if (/^https?:\/\//i.test(raw) && /\.(mp4|webm|ogg|ogv|m4v)(\?.*)?$/i.test(raw)) {
    return { kind: "file", id: raw, vertical: false, embed: raw, thumb: "", thumbFallback: "", watch: raw };
  }
  return null;
}

/* ---------- Reading what a video says about itself ----------
   YouTube's oEmbed endpoint is free, needs no key and allows cross-origin
   requests. It returns the video's own title and channel name. It does NOT
   describe the content — so everything derived from it is offered to the admin
   as a suggestion to accept or overwrite, never written silently. */
async function iitwFetchVideoInfo(url) {
  const v = iitwParseVideo(url);
  if (!v || v.kind !== "youtube") return null;
  try {
    const r = await fetch("https://www.youtube.com/oembed?format=json&url=" +
      encodeURIComponent("https://www.youtube.com/watch?v=" + v.id));
    if (!r.ok) return null;
    const j = await r.json();
    return { title: j.title || "", author: j.author_name || "" };
  } catch (e) { return null; }
}

/* ---------- Recognising which surah a title names ----------
   This was wrong before, and wrong in the worst way: it matched surah names as
   substrings of the whole title with the spaces removed, so "Sad recitation
   that made everyone cry" was reported as Surah Sad. Names are now matched as
   WHOLE WORDS, and 36 of the 114 are short enough to collide with ordinary
   words (Sad, Nuh, Hud, Qaf, Tin, Fil, Asr, Nas, Nur, Rum, Fath, Layl…), so
   those are only accepted when the title actually says "Surah" before them.
   When nothing is certain, nothing is suggested. */

/* ---------- Finding a verse from the words themselves ----------
   Recitation clips are very often titled with the opening words of the verse
   rather than the surah — "خذوه فغلوه | محمد اللحيدان" names no surah at all.
   Looking only for surah names found nothing and left the owner to look
   everything up by hand. So the whole Quran is fetched once and searched: if
   the title quotes the verse, the surah AND the exact ayah number come back. */
let _iitwQuran = null;
let _iitwQuranPromise = null;

function iitwNormQuran(s) {
  return String(s || "")
    .replace(/[ً-ْٰـۖ-ۭ]/g, "")   // harakat, waqf marks
    .replace(/[أإآٱ]/g, "ا")            // hamza forms -> alif
    .replace(/ى/g, "ي").replace(/ة/g, "ه")   // alif maqsura, ta marbuta
    .replace(/[^ء-ي ]/g, " ")
    .replace(/\s+/g, " ").trim();
}

async function iitwLoadQuran() {
  if (_iitwQuran) return _iitwQuran;
  if (_iitwQuranPromise) return _iitwQuranPromise;
  _iitwQuranPromise = (async () => {
    try {
      const r = await fetch("https://api.alquran.cloud/v1/quran/quran-simple");
      const j = await r.json();
      if (j.code !== 200) throw new Error("no quran");
      const out = [];
      j.data.surahs.forEach(su => {
        su.ayahs.forEach(a => {
          out.push({
            s: su.number, sName: su.englishName,
            // "سُورَةُ الحَاقَّةِ" -> "الحاقة": drop the word and the harakat.
            sAr: su.name.replace(/^سُورَةُ\s*/, "").replace(/[ؐ-ًؚ-ٰٟۖ-ۭ]/g, ""),
            a: a.numberInSurah, norm: iitwNormQuran(a.text), text: a.text
          });
        });
      });
      _iitwQuran = out;
      return out;
    } catch (e) { _iitwQuranPromise = null; return null; }
  })();
  return _iitwQuranPromise;
}

/* Pull the Arabic phrases out of a video title, longest first, and look each
   one up. The longest phrase that lands on exactly one verse wins — a short
   common phrase that appears in many verses is not evidence of anything. */
async function iitwFindVerseFromText(text) {
  const quran = await iitwLoadQuran();
  if (!quran) return null;

  // Titles usually read "<verse words> | <reciter>". Try each part.
  const parts = String(text || "").split(/[|｜\-–—•·:،]/).map(p => iitwNormQuran(p)).filter(p => p);
  const candidates = [];
  parts.forEach(p => {
    const words = p.split(" ").filter(w => w.length > 1);
    // Every run of words, longest first.
    for (let len = Math.min(words.length, 8); len >= 2; len--) {
      for (let i = 0; i + len <= words.length; i++) {
        candidates.push(words.slice(i, i + len).join(" "));
      }
    }
  });
  candidates.sort((a, b) => b.length - a.length);

  for (const q of candidates) {
    if (q.length < 8) continue;                 // too short to be distinctive
    const hits = quran.filter(v => v.norm.indexOf(q) !== -1);
    if (hits.length === 1) {
      return { surah: hits[0].s, surahName: hits[0].sName, surahAr: hits[0].sAr,
               ayah: hits[0].a, arabic: hits[0].text, matched: q, exact: true };
    }
    if (hits.length > 1 && hits.length <= 4) {
      // Same words in a few places — report the first and say it is not certain.
      return { surah: hits[0].s, surahName: hits[0].sName, surahAr: hits[0].sAr,
               ayah: hits[0].a, arabic: hits[0].text, matched: q, exact: false,
               alsoIn: hits.slice(1).map(h => h.s + ":" + h.a) };
    }
  }
  return null;
}

/* The reciter is usually after the separator: "خذوه فغلوه | محمد اللحيدان".
   The channel name is often the page, not the person, so this is preferred. */
function iitwReciterFromTitle(title) {
  const parts = String(title || "").split(/[|｜]/).map(p => p.trim()).filter(Boolean);
  if (parts.length < 2) return "";
  const last = parts[parts.length - 1];
  // A name, not a sentence: a few words, mostly Arabic letters.
  const words = last.split(/\s+/);
  if (words.length > 5) return "";
  if (!/[ء-ي]/.test(last) && !/[A-Za-z]/.test(last)) return "";
  return last.replace(/^(الشيخ|القارئ|قراءة|تلاوة|بصوت)\s+/, "").trim();
}

// Common spellings people actually type. Without these, "Yaseen" found nothing.
const IITW_SURAH_ALIASES = {
  1:["fatiha","fatihah","faatiha"], 2:["baqara","baqarah","bakara","baqrah"],
  3:["imran","ali imran","aal imran","al imran"], 4:["nisa","nisaa"],
  5:["maida","maidah","maaida"], 6:["anam","anaam"], 7:["araf","aaraf"],
  8:["anfal"], 9:["tawba","tawbah","tauba","taubah","baraah"], 10:["yunus","younus"],
  11:["hud","hood"], 12:["yusuf","yousuf","yousef","yusof"], 13:["rad","raad"],
  14:["ibrahim","ibraheem"], 15:["hijr"], 16:["nahl"], 17:["isra","israa","bani israil"],
  18:["kahf","kahaf"], 19:["maryam","mariam","maryem"], 20:["taha","ta ha"],
  21:["anbiya","anbiyaa"], 22:["hajj"], 23:["muminun","mominoon","muminoon"],
  24:["nur","noor"], 25:["furqan","furqaan"], 26:["shuara","shuaraa"], 27:["naml"],
  28:["qasas"], 29:["ankabut","ankaboot"], 30:["rum","room"], 31:["luqman","luqmaan"],
  32:["sajda","sajdah"], 33:["ahzab","ahzaab"], 34:["saba"], 35:["fatir"],
  36:["yasin","ya sin","yaseen","yaaseen","yasseen"], 37:["saffat","saaffat"],
  38:["sad","saad"], 39:["zumar"], 40:["ghafir","mumin","momin"],
  41:["fussilat","fusilat"], 42:["shura","shoora"], 43:["zukhruf"], 44:["dukhan"],
  45:["jathiya","jathiyah"], 46:["ahqaf"], 47:["muhammad"], 48:["fath","fatah"],
  49:["hujurat","hujuraat"], 50:["qaf","qaaf"], 51:["dhariyat","zariyat"],
  52:["tur","toor"], 53:["najm"], 54:["qamar"], 55:["rahman","rehman","rahmaan"],
  56:["waqia","waqiah","waqiya","waaqia"], 57:["hadid","hadeed"], 58:["mujadila","mujadala"],
  59:["hashr"], 60:["mumtahina","mumtahanah"], 61:["saff"], 62:["jumua","jumuah","juma"],
  63:["munafiqun","munafiqoon"], 64:["taghabun"], 65:["talaq"], 66:["tahrim"],
  67:["mulk"], 68:["qalam"], 69:["haqqa","haqqah","haaqqa"], 70:["maarij","maaarij"],
  71:["nuh","nooh","noah"], 72:["jinn"], 73:["muzzammil","muzammil"],
  74:["muddaththir","muddathir","mudathir"], 75:["qiyama","qiyamah","qiyamat"],
  76:["insan","dahr"], 77:["mursalat"], 78:["naba","nabaa"], 79:["naziat","naziaat"],
  80:["abasa"], 81:["takwir"], 82:["infitar"], 83:["mutaffifin","tatfif"],
  84:["inshiqaq"], 85:["buruj","burooj"], 86:["tariq","taariq"], 87:["ala","aala"],
  88:["ghashiya","ghashiyah"], 89:["fajr"], 90:["balad"], 91:["shams"],
  92:["layl","lail","lail"], 93:["duha","dhuha"], 94:["sharh","inshirah","alam nashrah"],
  95:["tin","teen"], 96:["alaq","alaqq"], 97:["qadr","qadar"], 98:["bayyina","bayyinah"],
  99:["zalzala","zalzalah","zilzal"], 100:["adiyat","aadiyat"], 101:["qaria","qariah"],
  102:["takathur"], 103:["asr"], 104:["humaza","humazah"], 105:["fil","feel"],
  106:["quraysh","quraish"], 107:["maun","maaun"], 108:["kawthar","kauthar"],
  109:["kafirun","kafiroon"], 110:["nasr"], 111:["masad","lahab"],
  112:["ikhlas","ikhlaas","tawhid"], 113:["falaq"], 114:["nas","naas"]
};

// Words that mean "the following words are a surah name".
const IITW_SURAH_MARKER = /^(surah|surat|surah|sura|suratul|surahs|سورة|سوره|سورت|السورة)$/i;

function iitwNormWord(s) {
  let t = String(s || "").toLowerCase()
    .replace(/[ً-ٰٟـ]/g, "")                       // Arabic harakat + tatweel
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .replace(/[^a-zء-ي ]+/g, " ")
    .replace(/\s+/g, " ").trim();
  // Drop the definite article, English transliterated or Arabic.
  t = t.replace(/^(al|ash|as|ar|an|at|ad|az|adh|ath|el)\s+/, "");
  t = t.replace(/^ال/, "");
  return t;
}

// Split a title into comparable words, keeping Arabic and Latin separately.
function iitwWords(text) {
  return String(text || "")
    .replace(/[ً-ٰٟـ]/g, "")
    .split(/[^A-Za-zء-ي]+/)
    .filter(Boolean);
}

let _iitwSurahIndex = null;
function iitwSurahIndex() {
  if (_iitwSurahIndex || typeof SURAHS === "undefined") return _iitwSurahIndex;
  const map = new Map();
  const add = (key, s) => {
    const k = iitwNormWord(key);
    if (!k) return;
    if (!map.has(k)) map.set(k, s);
  };
  SURAHS.forEach(s => {
    add(s.name, s);
    add(s.arabic, s);
    (IITW_SURAH_ALIASES[s.n] || []).forEach(a => add(a, s));
  });
  _iitwSurahIndex = map;
  return map;
}

/* Surahs named after a person, a people or an everyday word. On their own these
   are not evidence of anything — "Maryam Hospital charity appeal" is not a
   recitation of Surah Maryam — so they also need the word "Surah" in front. */
const IITW_NEEDS_MARKER = new Set([3,10,11,12,14,19,31,34,40,47,71,76,87,94,106,112]);

/* A name is "weak" when it is short enough, or common enough, to appear in an
   ordinary sentence. Weak names count only when the title says "Surah" first. */
function iitwIsWeakName(key, surahNum) {
  if (IITW_NEEDS_MARKER.has(surahNum)) return true;
  return key.replace(/\s/g, "").length <= 4;
}

/* Returns { n, name, arabic, confident, ambiguous } or null.
   `confident` means the title said "Surah <name>" outright. */
function iitwDetectSurah(text) {
  const index = iitwSurahIndex();
  if (!index || !text) return null;
  const words = iitwWords(text);
  const found = [];

  for (let i = 0; i < words.length; i++) {
    const markerBefore = i > 0 && IITW_SURAH_MARKER.test(words[i - 1]);
    // Try the longest phrase first: three words, then two, then one.
    for (let len = 3; len >= 1; len--) {
      if (i + len > words.length) continue;
      const phrase = words.slice(i, i + len).join(" ");
      const key = iitwNormWord(phrase);
      if (!key) continue;
      const hit = index.get(key);
      if (!hit) continue;
      const weak = iitwIsWeakName(key, hit.n);
      // A short name only counts when the title actually says "Surah" first.
      if (weak && !markerBefore) continue;
      found.push({ n: hit.n, name: hit.name, arabic: hit.arabic, meaning: hit.meaning,
                   confident: markerBefore, at: i });
      i += len - 1;
      break;
    }
  }

  if (!found.length) return null;
  const distinct = [...new Set(found.map(f => f.n))];
  // Prefer one the title explicitly labelled "Surah …".
  const best = found.find(f => f.confident) || found[0];
  return { ...best, ambiguous: distinct.length > 1,
           alsoFound: distinct.filter(n => n !== best.n) };
}

// "29-33", "29 - 33", "الآيات 29 إلى 33", "verses 29 to 33", or a single number.
function iitwDetectAyahs(text) {
  const t = String(text || "").replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
  let m = t.match(/(\d{1,3})\s*(?:-|–|—|to|إلى|الى)\s*(\d{1,3})/);
  if (m) return { from: +m[1], to: +m[2] };
  m = t.match(/(?:ayah?|ayat|verse[s]?|الآيات|الآية|اية|آية)\s*[:\-]?\s*(\d{1,3})/i);
  if (m) return { from: +m[1], to: +m[1] };
  return null;
}

/* ---------- Suggested notes for the listener ----------
   Grouped by what the surah is about, so the admin gets a sensible starting
   point instead of a blank box. These are gentle reminders for reflection,
   never rulings — the same standard as the rest of the site. */
const IITW_NOTE_THEMES = [
  {
    // The Hour, the Reckoning, Paradise and the Fire
    surahs: [56,69,75,77,78,79,80,81,82,83,84,88,99,100,101,102,104],
    notes: [
      { en: "Listen slowly, then read the whole surah — it describes the Day of Judgement from beginning to end.",
        ar: "استمع بتأنٍّ ثم اقرأ السورة كاملة، فهي تصف يوم القيامة من أوله إلى آخره." },
      { en: "A reminder to guard your time: none of us knows when our own hour will come.",
        ar: "تذكير بحفظ الوقت، فما منّا أحد يعلم متى تأتيه ساعته." },
      { en: "Let these verses move you to leave what you fear would harm you on that Day.",
        ar: "لتحملك هذه الآيات على ترك ما تخشى أن يضرّك في ذلك اليوم." }
    ]
  },
  {
    // Mercy, relief, hope
    surahs: [55,93,94,105,106,108,110],
    notes: [
      { en: "A reminder of how much has been given to us, and how little we stop to notice it.",
        ar: "تذكير بعظيم ما أُعطينا، وقلّة وقوفنا عنده شكراً." },
      { en: "If you are going through something hard, sit with these verses — relief is promised after difficulty.",
        ar: "إن كنت تمرّ بضيق فاجلس مع هذه الآيات، فإنّ مع العسر يسراً." }
    ]
  },
  {
    // Tawhid and sincerity
    surahs: [1,109,112],
    notes: [
      { en: "Short, and the whole of belief rests on it. Repeat it until the meaning settles in the heart.",
        ar: "قصيرة، وعليها يقوم أصل الاعتقاد. ردّدها حتى يستقرّ المعنى في القلب." }
    ]
  },
  {
    // Refuge and protection
    surahs: [113,114],
    notes: [
      { en: "Recite these morning and evening, and before sleeping, as the Prophet ﷺ did.",
        ar: "اقرأها صباحاً ومساءً وقبل النوم، كما كان النبي ﷺ يفعل." }
    ]
  },
  {
    // The stories of the Prophets
    surahs: [11,12,14,18,19,21,26,28,37,71],
    notes: [
      { en: "A story told for those who came after — read it looking for what it asks of you.",
        ar: "قصّة سيقت لمن بعدهم، فاقرأها متأملاً ما تطلبه منك." },
      { en: "Patience is the thread running through this passage. Notice how long it was tested.",
        ar: "الصبر هو الخيط الجامع في هذه الآيات، وتأمّل كم طال الابتلاء." }
    ]
  }
];

const IITW_NOTE_GENERAL = [
  { en: "Listen with an unhurried heart, then read the passage within its full surah.",
    ar: "استمع بقلبٍ حاضر، ثم اقرأ الآيات في سياق سورتها كاملة." },
  { en: "Beautiful recitation is a door — the aim is to understand and act, not only to be moved.",
    ar: "حُسن التلاوة بابٌ، والمقصود الفهم والعمل لا مجرّد التأثر." }
];

/* Suggested TITLES, by the same themes. The title says what the verses are
   about, so it is drawn from the same grouping as the notes. */
const IITW_TITLE_THEMES = [
  { surahs: [56,69,75,77,78,79,80,81,82,83,84,88,99,100,101,102,104],
    titles: [
      { en: "The verses that describe the Day of Judgement", ar: "آيات تصف يوم القيامة" },
      { en: "A warning that shakes the heart", ar: "تحذير يهزّ القلب" },
      { en: "When the earth gives up what it holds", ar: "حين تُخرج الأرض أثقالها" }
    ] },
  { surahs: [55,93,94,105,106,108,110],
    titles: [
      { en: "Which of the favours of your Lord will you deny?", ar: "فبأيِّ آلاء ربكما تكذبان" },
      { en: "Mercy after hardship", ar: "الرحمة بعد الشدة" }
    ] },
  { surahs: [1,109,112],
    titles: [
      { en: "The heart of belief in a few short verses", ar: "أصل الاعتقاد في آياتٍ قصيرة" }
    ] },
  { surahs: [113,114],
    titles: [
      { en: "Seeking refuge with Allah", ar: "الاستعاذة بالله" }
    ] },
  { surahs: [11,12,14,18,19,21,26,28,37,71],
    titles: [
      { en: "A story of patience told for those who came after", ar: "قصة صبرٍ سيقت لمن بعدهم" },
      { en: "How the Prophets were tested", ar: "كيف ابتُلي الأنبياء" }
    ] }
];
const IITW_TITLE_GENERAL = [
  { en: "A recitation worth stopping for", ar: "تلاوة تستحق الوقوف عندها" },
  { en: "Verses to listen to slowly", ar: "آيات تُسمَع على مهل" }
];

function iitwSuggestTitles(surahNum, surahName, surahAr) {
  const n = parseInt(surahNum, 10);
  const themed = IITW_TITLE_THEMES.filter(t => t.surahs.includes(n)).flatMap(t => t.titles);
  const named = (surahName && surahAr)
    ? [{ en: "From Surah " + surahName, ar: "من سورة " + surahAr }]
    : [];
  return named.concat(themed, IITW_TITLE_GENERAL);
}

function iitwSuggestNotes(surahNum) {
  const n = parseInt(surahNum, 10);
  const themed = IITW_NOTE_THEMES.filter(t => t.surahs.includes(n)).flatMap(t => t.notes);
  return themed.concat(IITW_NOTE_GENERAL);
}

/* ---------- Translate one line, for the dashboard's speak-once fields ----
   Uses the same free MyMemory service the meeting captions use. It is machine
   translation: good enough to save typing, NOT good enough to publish
   unchecked. Anything it produces is flagged in the UI for review. */
async function iitwTranslate(text, from, to) {
  const s = String(text || "").trim();
  if (!s) return "";
  try {
    const r = await fetch("https://api.mymemory.translated.net/get?q=" +
      encodeURIComponent(s.slice(0, 480)) + "&langpair=" + from + "|" + to);
    if (!r.ok) return "";
    const j = await r.json();
    const out = j && j.responseData && j.responseData.translatedText;
    if (!out || /MYMEMORY WARNING|INVALID/i.test(out)) return "";
    return out;
  } catch (e) { return ""; }
}

// Which language was actually spoken, judged from the script that came back.
function iitwIsArabicText(s) {
  return /[؀-ۿ]/.test(String(s || ""));
}

// Text from the dashboard is escaped before it ever reaches innerHTML.
function iitwEsc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// "Surah Al-Haqqah 69:29-33" — built from whatever fields are filled in.
function iitwRecitationRef(r) {
  const name = r.surah ? "Surah " + r.surah : "";
  const num = r.surahNum ? String(r.surahNum) : "";
  const from = r.ayahFrom ? String(r.ayahFrom) : "";
  const to = r.ayahTo && String(r.ayahTo) !== from ? "-" + r.ayahTo : "";
  const cite = num && from ? " " + num + ":" + from + to : (from ? " — verses " + from + to.replace("-", "–") : "");
  return (name + cite).trim();
}
/* Only shown when the Arabic surah name was actually given — "سورة Al-Haqqah"
   reads badly, so no Arabic name means no Arabic line. */
function iitwRecitationRefAr(r) {
  if (!r.surahAr) return "";
  const ar = n => String(n).replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[+d]);
  const name = "سورة " + r.surahAr;
  const from = r.ayahFrom ? String(r.ayahFrom) : "";
  if (!from) return name;
  const single = !r.ayahTo || String(r.ayahTo) === from;
  return name + (single ? " — الآية " + ar(from) : " — الآيات " + ar(from) + "-" + ar(r.ayahTo));
}

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
    /* The counter key comes from the link's HREF, never from its text.
       It used to be built from the text with /[^a-z]/g stripped — which
       works in English and silently produces an EMPTY string in Arabic,
       because i18n.js translates the nav and Arabic letters are not in
       [a-z]. `if (label)` was then false, so every nav click made by a
       reader in Arabic mode was dropped and never counted. The href is
       the same in both languages, which is the whole point of using it.

       Legacy keys are preserved on purpose: the old text-derived keys
       ("judgementday", "goldenage") already hold months of counts, so
       the href is mapped onto them rather than starting from zero. */
    const NAV_KEY_ALIASES = { judgement: "judgementday", golden: "goldenage" };
    document.addEventListener("click", function (e) {
      const a = e.target.closest("nav.main-nav a");
      if (!a) return;
      const href = (a.getAttribute("href") || "").split("#")[0].split("?")[0];
      if (!href || href.indexOf("//") >= 0) return;
      let key = href.replace(/\.html$/, "").toLowerCase();
      if (!key || key === "index") key = "index";
      key = NAV_KEY_ALIASES[key] || key;
      if (key) bump("nav-" + key);
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
/* Matched on whole words, not substrings. Modern voices are named in CamelCase
   ("HamedNeural", "ZariyahNeural"), so the name is split on both punctuation
   and case changes before comparing — a plain \b boundary never fires between
   "Hamed" and "Neural", which silently lost the owner's requested male voice. */
const _iitwNameTokens = n => String(n || "")
  .replace(/([a-z])([A-Z])/g, "$1 $2")
  .toLowerCase().split(/[^a-z]+/).filter(Boolean);

const _MALE_AR_NAMES = new Set(["naayf","nayef","maged","majed","tarik","hattab","hamed",
  "hamdan","shakir","bassel","taim","fahed","fahd","layth","laith","jamal","abdullah",
  "moaz","hedi","saleh","ismael","ali","omar","salim","khalid","ahmed"]);
const _MALE_EN_NAMES = new Set(["david","george","mark","guy","ryan","james","christopher",
  "eric","daniel","alex","fred","male","brian","andrew","roger","steffan"]);
const _FEMALE_NAMES = new Set(["hoda","salma","zariyah","amina","fatima","noura","iman",
  "sana","rana","amal","layla","maryam","zeina","aysha","reem","laila","amira","hazel",
  "susan","zira","linda","heera","catherine","samantha","victoria","karen","moira",
  "tessa","aria","jenny","michelle","emma","ava","female"]);

const _iitwIsMale   = (v, ar) => _iitwNameTokens(v.name)
  .some(t => (ar ? _MALE_AR_NAMES : _MALE_EN_NAMES).has(t));
const _iitwIsFemale = v => _iitwNameTokens(v.name).some(t => _FEMALE_NAMES.has(t));

/* ---------- Classical Arabic (فصحى) vs regional dialect ----------
   The owner's complaint: certain letters come out wrong — ق swallowed into a
   hamza, ج turned into an English "g", ث ذ ظ flattened into س ز. That is not a
   defect in the engine; it is what a DIALECT voice is supposed to do. The
   dialect is carried in the voice's locale tag, and the old picker ignored it
   entirely, so an Egyptian voice ranked exactly the same as a Saudi one.

   Every letter must be articulated, so classical locales are now preferred by a
   wide margin and marked dialects are pushed to the bottom. */
const _AR_LOCALE_TIER = {
  // Classical / Modern Standard — every letter pronounced as written.
  "ar-sa": 100, "ar-xa": 100, "ar-001": 100, "ar": 96,
  // Gulf and Jordanian: read formal text close to فصحى; ق and ج survive.
  "ar-ae": 70, "ar-kw": 68, "ar-qa": 68, "ar-bh": 68, "ar-om": 66,
  "ar-jo": 62, "ar-ye": 60,
  // Marked dialects: these are the ones that alter or drop letters.
  "ar-iq": 34, "ar-sd": 32, "ar-ly": 30,
  "ar-eg": 26,                       // ق→ء, ج→g, ث→س, ذ→ز, ظ→ز
  "ar-ps": 24, "ar-sy": 22, "ar-lb": 20,   // ق→ء, ث→ت
  // Maghrebi: vowels compressed, hardest to follow for classical text.
  "ar-tn": 14, "ar-dz": 12, "ar-ma": 10
};

const _AR_LOCALE_NAME = {
  "ar-sa": "فصحى — Classical (Saudi)", "ar-xa": "فصحى — Classical (Google)",
  "ar-001": "فصحى — Classical", "ar": "فصحى — Classical",
  "ar-ae": "Gulf (UAE)", "ar-kw": "Gulf (Kuwait)", "ar-qa": "Gulf (Qatar)",
  "ar-bh": "Gulf (Bahrain)", "ar-om": "Gulf (Oman)", "ar-jo": "Jordanian",
  "ar-ye": "Yemeni", "ar-iq": "Iraqi dialect", "ar-sd": "Sudanese dialect",
  "ar-ly": "Libyan dialect", "ar-eg": "Egyptian dialect — ق and ج change",
  "ar-ps": "Palestinian dialect", "ar-sy": "Syrian dialect",
  "ar-lb": "Lebanese dialect — ق becomes ء", "ar-tn": "Tunisian dialect",
  "ar-dz": "Algerian dialect", "ar-ma": "Moroccan dialect"
};

const _iitwArLocale = v => (v.lang || "").toLowerCase().replace(/_/g, "-");
const _iitwArTier   = v => _AR_LOCALE_TIER[_iitwArLocale(v)] ?? 45;
// 60 is the cut-off: at or above it the voice reads classical text letter by
// letter as written; below it, letters are altered.
const _iitwIsClassical = v => _iitwArTier(v) >= 60;
const _iitwArDialectName = v => _AR_LOCALE_NAME[_iitwArLocale(v)] || v.lang || "";
// Neural / natural voices articulate ق ح ع خ ط ص ض ظ far more completely than
// the old offline formant voices, which is where letters get lost entirely.
const _iitwIsNatural = v =>
  v.localService === false || /google|natural|neural|online|enhanced|premium/i.test(v.name || "");

/* How suitable an Arabic voice is for classical text. The dialect dominates:
   a polished Egyptian voice still says ق as a hamza and ج as an English "g",
   so it is worse here than a plainer Saudi voice that pronounces every letter.
   Quality comes next (it decides whether the heavy letters are articulated at
   all), and a man's voice breaks the tie, as the owner asked. */
function _iitwArScore(v) {
  let s = _iitwArTier(v) * 4;
  if (v.localService === false) s += 12;
  if (/natural|neural/i.test(v.name)) s += 10;
  if (/google/i.test(v.name)) s += 8;
  if (/online|enhanced|premium/i.test(v.name)) s += 4;
  if (_iitwIsMale(v, true)) s += 3;
  else if (!_iitwIsFemale(v)) s += 1;
  return s;
}

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

  const isAr = langPrefix === "ar";

  const score = v => {
    if (isAr) return _iitwArScore(v);
    let s = 0;
    if (v.localService === false) s += 4;
    if (/google/i.test(v.name)) s += 4;
    if (/natural|neural|online|enhanced|premium/i.test(v.name)) s += 3;
    if (_iitwIsMale(v, isAr)) s += 2;
    else if (!_iitwIsFemale(v)) s += 1;
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

  /* Classical and dialect voices are separated, because the difference is not a
     matter of taste — a dialect voice changes which letters are pronounced. */
  const byBest    = (a, b) => _iitwArScore(b) - _iitwArScore(a);
  const classical = voices.filter(_iitwIsClassical).sort(byBest);
  const dialect   = voices.filter(v => !_iitwIsClassical(v)).sort(byBest);
  const hasClassical = classical.length > 0;

  const label = v => {
    const bits = [_iitwArDialectName(v)];
    if (_iitwIsNatural(v)) bits.push("best quality");
    if (_iitwIsMale(v, true)) bits.push("male");
    else if (_iitwIsFemale(v)) bits.push("female");
    return v.name + " — " + bits.join(", ");
  };
  const opt = v => `<option value="${v.name.replace(/"/g, "&quot;")}"${current && v.name === current.name ? " selected" : ""}>${label(v)}</option>`;
  const group = (name, list) => list.length ? `<optgroup label="${name}">${list.map(opt).join("")}</optgroup>` : "";

  host.innerHTML = `<div class="voice-bar">
    <label for="arVoiceSelect">🎙 Arabic voice <span dir="rtl">— الصوت العربي</span>:</label>
    <select id="arVoiceSelect">
      ${group("Classical Arabic (فصحى) — recommended", classical)}
      ${group("Regional dialects — some letters change", dialect)}
    </select>
    <button type="button" class="voice-test">▶ Test the letters</button>
    <span class="voice-hint">${hasClassical
      ? "Classical (فصحى) voices pronounce every letter as written. A dialect voice will change ق, ج, ث, ذ and ظ — that is the dialect, not a fault."
      : "<strong>Only dialect voices are installed</strong>, so ق, ج, ث, ذ and ظ will be altered. For classical Arabic add the <em>Arabic (Saudi Arabia)</em> speech pack in Windows settings, or open this site in <strong>Microsoft Edge</strong>, which provides Google/Microsoft online Arabic voices."}</span>
  </div>`;

  host.querySelector("#arVoiceSelect").addEventListener("change", e => {
    localStorage.setItem(IITW_AR_VOICE_KEY, e.target.value);
  });
  /* A pronunciation drill, deliberately NOT a Quranic verse: the Quran is only
     ever recited on this site by a real human reciter. These are the letters a
     dialect voice alters or swallows, so the reader can judge a voice in one
     click — قاف, جيم, ثاء, ذال, ظاء and the heavy letters. */
  host.querySelector(".voice-test").addEventListener("click", () => {
    speakText(
      "هَٰذَا اخْتِبَارُ النُّطْقِ. قَافٌ، جِيمٌ، ثَاءٌ، ذَالٌ، ظَاءٌ، " +
      "حَاءٌ، عَيْنٌ، خَاءٌ، غَيْنٌ، طَاءٌ، صَادٌ، ضَادٌ، هَمْزَةٌ. " +
      "الْقَمَرُ، الْجَبَلُ، الثَّلْجُ، الذَّهَبُ، الظِّلُّ.", "ar");
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

/* Prepare Arabic so the engine has nothing left to guess at or choke on.

   The harakat are KEPT — they are what tell the engine which vowel to use, and
   removing them was the original mistake. What is removed here is the layer
   ABOVE the harakat: Quranic recitation marks (ۖ ۗ ۘ ۙ ۚ ۛ, the sajdah and
   hizb signs). Those are instructions to a human reciter, not letters. Speech
   engines do not know them, and an unknown character mid-word makes the engine
   abandon the rest of the word — which is exactly how a letter goes missing. */
function _iitwPrepArabic(s) {
  return s
    // Ligatures spelled out, otherwise they are skipped silently.
    .replace(/ﷺ/g, " صَلَّى اللهُ عَلَيْهِ وَسَلَّم ")   // ﷺ
    .replace(/ﷻ/g, " جَلَّ جَلَالُهُ ")                    // ﷻ
    .replace(/ﷲ/g, " اللَّه ")                             // ﷲ
    .replace(/﷽/g, " بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ") // ﷽
    .replace(/﴾|﴿/g, " ")                             // ﴾ ﴿ ornate brackets
    // Small high dotless head of khah is a Quranic sukoon — convert, don't drop.
    .replace(/ۡ/g, "ْ")
    // Waqf / sajdah / hizb marks: not letters, not harakat.
    .replace(/[ۖ-۝۞-۠ۢ-ۤۥ-ۭ]/g, "")
    // Alef wasla trips several engines; a plain alef is read correctly.
    .replace(/ٱ/g, "ا")
    .replace(/ـ/g, "");                                          // tatweel only
}

/* Split into short pieces at natural pauses. Chrome and Edge silently truncate
   a long utterance (the well-known ~15 second cut-off), which drops the end of
   a hadith mid-word. Short pieces spoken in sequence never hit it, and the
   pause at each comma also makes the reading easier to follow. */
function _iitwChunk(s, max) {
  // Split at sentence punctuation, keeping each mark with the phrase it ends.
  // Deliberately no look-behind: older Safari cannot parse it, and a regex
  // syntax error here would break the whole of main.js, not just the speech.
  const bits = s.split(/([.!?؟،؛:۔])/);
  const pieces = [];
  for (let i = 0; i < bits.length; i += 2) {
    const seg = ((bits[i] || "") + (bits[i + 1] || "")).trim();
    if (seg) pieces.push(seg);
  }

  const out = [];
  let buf = "";
  const flush = () => { if (buf) { out.push(buf); buf = ""; } };

  for (let piece of (pieces.length ? pieces : [s.trim()])) {
    // A phrase longer than the limit is broken at the last space that fits.
    while (piece.length > max) {
      flush();
      let cut = piece.lastIndexOf(" ", max);
      if (cut <= 0) cut = max;
      out.push(piece.slice(0, cut).trim());
      piece = piece.slice(cut).trim();
    }
    if (!piece) continue;
    if (buf && (buf + " " + piece).length > max) flush();
    buf = buf ? buf + " " + piece : piece;
  }
  flush();
  return out.filter(Boolean);
}

function speakText(text, lang) {
  if (!window.speechSynthesis) {
    _iitwToast("Your browser cannot read text aloud. Please try Edge or Chrome.");
    return;
  }
  window.speechSynthesis.cancel();

  let clean = String(text || "");
  // Strip emoji/symbols so the 🔊 icon is never read out as "speaker high volume".
  clean = clean.replace(/[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{2600}-\u{26FF}]/gu, " ");

  if (lang === "ar") {
    clean = clean.replace(/[A-Za-z0-9]/g, " ");
    clean = _iitwPrepArabic(clean);
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

  // Say once, plainly, when the only Arabic voice available speaks a dialect.
  // No code can make a dialect voice pronounce ق and ج classically.
  if (lang === "ar" && voice && !_iitwIsClassical(voice) && !sessionStorage.getItem("iitw-dialect-warned")) {
    sessionStorage.setItem("iitw-dialect-warned", "1");
    _iitwToast(
      "<strong>This device only has a dialect Arabic voice (" + _iitwArDialectName(voice) + ").</strong><br>" +
      "It will change some letters — ق, ج, ث, ذ and ظ — because that is how the dialect is spoken.<br>" +
      "For classical Arabic (فصحى), add the <em>Arabic (Saudi Arabia)</em> speech pack in Windows settings, or open the site in Microsoft Edge.<br>" +
      "<span dir='rtl' style='font-family:Amiri,serif'>هذا الجهاز لا يحتوي إلا على صوت بلهجة محلية، وسيغيّر نطق بعض الحروف. أضف صوت العربية السعودية للنطق الفصيح.</span>"
    );
  }

  const natural = voice ? _iitwIsNatural(voice) : false;
  /* Arabic is read slowly so the harakat and the heavier letters (خ ح ع ق ط)
     are articulated rather than rushed. But neural voices slur and drop endings
     when pushed as low as 0.7 — they need a gentler slowdown than the old
     offline voices do. Pitch is left alone on neural voices for the same
     reason: shifting it smears the consonants. */
  const rate  = lang === "ar" ? (natural ? 0.82 : 0.7) : 0.95;
  const pitch = natural ? 1 : 0.9;

  const chunks = _iitwChunk(clean, lang === "ar" ? 120 : 200);
  chunks.forEach((part, i) => {
    const u = new SpeechSynthesisUtterance(part);
    u.lang  = lang === "ar" ? (voice ? voice.lang : "ar-SA") : "en-US";
    u.rate  = rate;
    u.pitch = pitch;
    if (voice) u.voice = voice;
    // A short breath between pieces, so the last letter of one is not clipped
    // by the first letter of the next.
    if (i < chunks.length - 1) u.text = part + " ";
    window.speechSynthesis.speak(u);
  });
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

/* ---------- Spelling-tolerant name matching ----------
   An Arabic name reaches an English reader in several spellings, and this
   site's own writing uses more than one of them: the handoff says "Aishah",
   the data says "Aisha"; the owner asked for "Omar" and "Osman" while the
   ids stay `umar` and `uthman`.

   Measured on the live search before this existed: of 51 spellings a reader
   is likely to type, FIFTEEN returned nothing at all — Aishah, Ayesha,
   Hamzah, Othman, Talhah, Muaz, Zubair, Yousef, Ibraheem, Dawood, Ismael,
   Zachariah, AbuBakr, and — worst of the set — BOTH `Sulayman` and
   `Suleiman`, because the data spells him `Sulaiman`. The prophet was
   reachable only by typing `Solomon`.

   Both the query and the name are reduced to the same skeleton, so any rule
   here is safe as long as it does not merge two genuinely different names.
   The rules are the regular transliteration swaps only:
     th → s   Uthman / Othman / Osman
     dh → z   Mu'adh / Muaz
     ch → k   Zachariah / Zakariya
     ay, ey, ei → ai      Sulayman / Suleiman / Sulaiman
     oo, ou → u    ee → i    aa → a
     a trailing h dropped  Aishah / Aisha
     doubled letters collapsed
   `kh` is deliberately NOT touched — it is a distinct letter, and folding it
   into `k` would start merging names that differ.

   This tier only ever ADDS a match to a person already in the data. It never
   widens a match the way query expansion did on the guidance page, because
   it compares whole words, not substrings — the bug that once made "Ali"
   return seventeen people is not reachable from here. */
const IITW_TRANSLIT_ALIASES = {
  // Spellings the mechanical rules above cannot reach, and the names a
  // reader may know from the Bible that are not already in the data.
  yusuf:    ["yousef", "youssef", "yousuf", "yusef"],
  muhammad: ["mohammed", "mohamed", "muhammed", "mohammad", "ahmad", "ahmed"],
  ayyub:    ["ayoub", "ayub", "ayyoub"],
  idris:    ["enoch"],
  shuayb:   ["jethro", "shoaib", "shuaib"],
  yahya:    ["yahia"],
  ishaq:    ["isaac", "ishak"],
  ilyas:    ["ilyaas", "elias"],
  yunus:    ["younus", "younis"],
  lut:      ["loot"],
  harun:    ["haroon"],
  uthman:   ["usman"],
  aisha:    ["aishah", "ayesha", "aaisha"]
};

function iitwTranslitWord(w) {
  return w
    .replace(/ph/g, "f")
    .replace(/ch/g, "k")
    .replace(/th/g, "s")
    .replace(/dh/g, "z")
    .replace(/oo|ou/g, "u")
    .replace(/ee/g, "i")
    .replace(/aa/g, "a")
    .replace(/ay|ey|ei/g, "ai")
    .replace(/(?!^)y/g, "i")   // y is a consonant only at the start: Yusuf
    .replace(/o/g, "u")
    .replace(/e/g, "i")
    .replace(/(.)\1+/g, "$1")  // collapse doubles, after the vowel rules
    .replace(/h$/, "");        // Aishah → Aisha, Hamzah → Hamza
}

function iitwTranslitWords(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/['’`ʿʾ]/g, "")     // Sa'd → sad, Ja'far → jafar
    .replace(/[^a-z]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(iitwTranslitWord)
    .filter(Boolean);
}

/* Built once per person and cached — the search runs on every keystroke. */
const iitwPersonKeyCache = new Map();
function iitwPersonKeys(person) {
  let k = iitwPersonKeyCache.get(person.id);
  if (k) return k;
  /* Canonicalised, so a name that CONTAINS another person's name is reachable
     by either spelling of it. Fatimah bint Muhammad was returned by
     "Muhammad" and not by "Mohammed", because the alias table only ever
     applied to the person whose own id it was - and her id is `fatimah`. */
  const words = iitwTranslitWords(person.name).map(iitwCanonWord)
    .concat(iitwTranslitWords(person.id.replace(/-/g, " ")).map(iitwCanonWord));
  /* The person's own aliases are added UNFOLDED. That is deliberate: this is
     where "Isaac" reaches Ishaq and "Ahmad" reaches the Prophet, and those
     two are kept out of the canonical fold on purpose (see
     IITW_TEXT_ALIAS_SKIP), so they have to survive here as themselves. */
  (IITW_TRANSLIT_ALIASES[person.id] || []).forEach(a => {
    iitwTranslitWords(a).forEach(w => words.push(w));
  });
  k = { words: new Set(words), joined: words.join("") };
  iitwPersonKeyCache.set(person.id, k);
  return k;
}

/* The same skeleton, for the FREE TEXT of a person rather than the name.

   Why this is needed. The spelling folding above was only ever applied to
   names, so `title` and `summary` were still matched against the RAW query.
   The effect was that the two spellings of one name returned two different
   result sets, because the site's own prose is not spelt consistently: the
   summaries say "Omar" and "Osman" while the ids are `umar` and `uthman`.
   Measured before this fix: Omar 3 / Umar 2, Osman 3 / Uthman 2,
   Aisha 5 / Aishah 1, Abu Bakr 6 / AbuBakr 1. Whichever spelling the reader
   did not type silently lost results, with nothing to show it had happened.

   Whole words only, out of a Set. Never a substring - that is the trap that
   made "Ali" return seventeen people, and it is not reachable from here. */

/* Some pairs the mechanical rules cannot bridge, because the two spellings
   genuinely reduce to different skeletons: `mohammed` folds to muhamid and
   `muhammad` to muhamad; `yousef` to yusif and `yusuf` to yusuf. The alias
   table above already bridges those for NAMES. This map bridges them for the
   prose as well, by folding both sides to one canonical form.

   NOT every alias is carried over. The table above also maps a person to the
   name a reader may know from the Bible - Enoch, Jethro, Isaac, Elias - and
   maps `ahmad` to `muhammad`. Those belong in a NAME lookup: someone typing
   Isaac should find Ishaq. They do not belong here, because folding them into
   the prose would report every summary that mentions Muhammad as a match for
   a reader searching Ahmad, which is a different name and would bury the real
   results under scores of passing mentions. So this list is spelling variants
   only. */
const IITW_TEXT_ALIAS_SKIP = new Set(["enoch", "jethro", "isaac", "elias",
                                      "ahmad", "ahmed"]);

const IITW_ALIAS_FOLD = (function () {
  const m = new Map();
  Object.keys(IITW_TRANSLIT_ALIASES).forEach(function (canon) {
    const cw = iitwTranslitWords(canon);
    if (cw.length !== 1) return;               // single-word names only
    IITW_TRANSLIT_ALIASES[canon].forEach(function (a) {
      if (IITW_TEXT_ALIAS_SKIP.has(a)) return;
      const aw = iitwTranslitWords(a);
      if (aw.length === 1) m.set(aw[0], cw[0]);
    });
  });
  return m;
})();

function iitwCanonWord(w) {
  return IITW_ALIAS_FOLD.get(w) || w;
}

const iitwPersonTextCache = new Map();
function iitwPersonTextKeys(person) {
  let k = iitwPersonTextCache.get(person.id);
  if (k) return k;
  k = {
    title:   new Set(iitwTranslitWords(person.title).map(iitwCanonWord)),
    summary: new Set(iitwTranslitWords(person.summary).map(iitwCanonWord))
  };
  iitwPersonTextCache.set(person.id, k);
  return k;
}

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

  /* ---------- Matching ----------
     This used to be a bare `includes()` on every field, which had two bad
     consequences that were both reported:

       "Ali"   returned SEVENTEEN people, because the letters a-l-i sit
               inside Salih, Khalid, Malik, Salim and Ja'far ibn Abi Talib.
       "Yusuf" returned Yaqub level with Yusuf, because Yusuf is named in
               his father's summary — with nothing on the card to say that
               was why it appeared.

     So Latin text is now matched on WORD BOUNDARIES, Arabic word by word
     after stripping harakat, and every hit carries a score and a reason.
     A name match outranks a passing mention, and the card says which it
     was, so a result can never look like an answer when it is really a
     cross-reference. */
  const qLatin = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const wordRe = new RegExp("(^|[^a-z])" + qLatin + "([^a-z]|$)", "i");
  const startsRe = new RegExp("(^|[^a-z])" + qLatin, "i");

  const stripAr = s => String(s || "").replace(/[ً-ْٰـ]/g, "")
    .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");
  const arWords = txt => new Set(stripAr(txt).split(/[^ء-ي]+/).filter(Boolean));

  /* The Arabic query must be split into WORDS the same way the text is.
     It was previously kept whole — so "أبو بكر" was compared, space and all,
     against a set of single words, and nothing can ever equal it. The effect
     was that EVERY multi-word Arabic search returned nothing: أبو بكر,
     عمر بن الخطاب and خالد بن الوليد all found zero, while their English
     spellings found 34, 15 and 5. Reported by the owner, who reads the site
     in Arabic.

     Every word must be present (the same rule the Latin side already used),
     and each is still matched WHOLE — never as a substring, which is the
     trap that has cost this site three separate bugs. */
  const qArWords = stripAr(query.trim()).split(/[^ء-ي]+/).filter(Boolean);
  const arWordHit = (set, qw) =>
    [...set].some(w => w === qw || w === "ال" + qw ||
      (w.length > qw.length && w.endsWith(qw) && w.length - qw.length <= 2));
  const hasArWord = txt => {
    if (!qArWords.length || !/[ء-ي]/.test(query)) return false;
    const set = arWords(txt);
    return qArWords.every(qw => arWordHit(set, qw));
  };

  /* The query reduced to the same skeleton as the names. `qJoined` exists so
     a reader who runs the words together ("AbuBakr") still lands on the
     person; it must be a PREFIX of the whole name, not a substring, or short
     queries would start matching the middle of unrelated names. */
  const qWords = iitwTranslitWords(query);
  const qJoined = qWords.join("");
  /* Every query word must be present as a WHOLE word in the folded text. */
  const translitTextHit = set => {
    if (!qWords.length || /[ء-ي]/.test(query)) return false;
    return qWords.every(w => set.has(iitwCanonWord(w)));
  };

  const translitHit = person => {
    if (!qWords.length || /[ء-ي]/.test(query)) return false;
    const keys = iitwPersonKeys(person);
    if (qWords.every(w => keys.words.has(w) || keys.words.has(iitwCanonWord(w)))) return true;
    return qWords.length === 1 && qJoined.length >= 6 && keys.joined.startsWith(qJoined);
  };

  const scored = ALL_PEOPLE.map(person => {
    let score = 0;
    let why = "";
    const name = person.name.toLowerCase();

    if (name === q || person.id.toLowerCase() === q) { score = 120; why = "name"; }
    else if (startsRe.test(name)) { score = 100; why = "name"; }
    else if (wordRe.test(name)) { score = 90; why = "name"; }
    else if (wordRe.test(person.id.replace(/-/g, " "))) { score = 85; why = "name"; }
    else if (hasArWord(person.arabic)) { score = 95; why = "name"; }
    /* Scored just under an exact-word name match: a spelling variant is still
       a name match, but a reader who typed the site's own spelling should not
       be outranked by one who typed a variant. */
    else if (translitHit(person)) { score = 80; why = "name"; }
    else if (wordRe.test(person.title)) { score = 45; why = "title"; }
    else if (person.titleAr && hasArWord(person.titleAr)) { score = 45; why = "title"; }
    /* A spelling variant found in the prose. Scored one under the literal
       match so a reader who typed the site's own spelling still ranks first,
       and placed after it so this tier can only ever ADD a person to the
       list, never reorder the people who were already matching. */
    else if (translitTextHit(iitwPersonTextKeys(person).title)) { score = 44; why = "title"; }
    else if (wordRe.test(person.summary)) { score = 20; why = "mention"; }
    else if (person.summaryAr && hasArWord(person.summaryAr)) { score = 20; why = "mention"; }
    else if (translitTextHit(iitwPersonTextKeys(person).summary)) { score = 19; why = "mention"; }

    return { person, score, why };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

  const matches = scored.map(x => x.person);
  const reasonOf = {};
  scored.forEach(x => { reasonOf[x.person.id] = x.why; });

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

    /* Say WHY this person is in the list. A cross-reference must never look
       like an answer: searching "Yusuf" surfaces his father Yaqub because
       Yusuf is named in Yaqub's story, and without this badge that reads as
       though the site thinks Yaqub is Yusuf. */
    const reason = reasonOf[person.id];
    const badge = reason === "mention"
      ? `<span class="match-why match-mention">
           <span class="en-only">Not a name match — "${escapeHtml(query)}" appears in this person's story</span>
           <span class="ar-only" dir="rtl">ليست مطابقة اسم — «${escapeHtml(query)}» مذكورٌ في سيرة هذا الشخص</span>
         </span>`
      : reason === "title"
      ? `<span class="match-why match-title">
           <span class="en-only">Matched their title, not their name</span>
           <span class="ar-only" dir="rtl">مطابقةٌ في اللقب لا في الاسم</span>
         </span>`
      : "";

    /* The full life, where one is written. The summary alone was the whole
       result before, so someone searching a name got three lines about a
       person this site has a complete biography for. */
    const life = (typeof FULL_LIVES !== "undefined") ? FULL_LIVES[person.id] : null;
    const lifePart = (en, ar, labelEn, labelAr) => (!en && !ar) ? "" : `
      <div class="life-part">
        <div class="life-part-head">
          <span class="en-only">${labelEn}</span>
          <span class="ar-only" dir="rtl">${labelAr}</span>
        </div>
        ${en ? `<p class="en-only">${en}</p>` : ""}
        ${ar ? `<p class="life-ar" dir="rtl">${ar}</p>` : ""}
      </div>`;

    const fullLife = !life ? "" : `
      <details class="full-life">
        <summary>
          <span class="en-only">📖 Read his full life — before Islam, the moment he believed, what changed, his greatest hour, and his death</span>
          <span class="ar-only" dir="rtl">📖 اقرأ سيرته كاملة — قبل الإسلام، ولحظة الإيمان، وما تغيّر، وأعظم مواقفه، ووفاته</span>
        </summary>
        <div class="full-life-body">
          ${lifePart(life.message, life.messageAr, "The message he was sent with", "الرسالة التي أُرسل بها")}
          ${lifePart(life.before, life.beforeAr, "Before", "قبل ذلك")}
          ${lifePart(life.islam, life.islamAr, "The moment he believed", "لحظة الإيمان")}
          ${lifePart(life.change, life.changeAr, "What changed in him", "ما تغيّر فيه")}
          ${lifePart(life.greatest, life.greatestAr, "His greatest hour", "أعظم مواقفه")}
          ${lifePart(life.death, life.deathAr, "His death", "وفاته")}
          ${(life.sources && life.sources.length) ? `<div class="refs">
            <strong><span class="en-only">Sources — each with its rank</span><span class="ar-only" dir="rtl">المصادر ودرجة كلٍّ منها</span></strong>
            <ul>${life.sources.map(s => `<li>${s}</li>`).join("")}</ul>
          </div>` : ""}
        </div>
      </details>`;

    card.innerHTML = `
      <span class="category">${categoryLabel}</span>
      <h3><span class="en-only">${person.name} </span><span style="font-family:'Amiri',serif; color: var(--green); font-size:1.1rem;">${person.arabic}</span></h3>
      ${badge}
      <p class="en-only" style="color: var(--gold); font-weight:600; font-size:0.85rem; margin-bottom: 8px;">${person.title}</p>
      ${person.titleAr ? `<p class="ar-only" dir="rtl" style="color: var(--gold); font-weight:600; font-size:0.9rem; margin-bottom: 8px;">${person.titleAr}</p>` : ""}
      <p class="en-only">${person.summary}</p>
      ${person.summaryAr ? `<p dir="rtl" style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.9; color: var(--green-dark); text-align:right; background: var(--green-pale); border-radius:8px; padding:10px 14px; margin-bottom:12px;">${person.summaryAr}</p>` : ""}
      ${fullLife}
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

/* ============================================================
   SITE-WIDE FEEDBACK
   ------------------------------------------------------------
   The feedback form used to live on the courses page only. It is
   now injected above the footer of every page from here, so there
   is one copy to maintain rather than fourteen.

   Two things happen on submit:
     1. the message is kept on the device (localStorage), so it is
        never lost if the mail client fails to open, and so the
        staff dashboard can show what was sent from this device;
     2. the mail client opens, pre-filled, addressed to the site
        owner — that is the part that actually delivers it.

   Being straight about the limit: a site with no server cannot
   collect visitors' messages into one shared inbox by itself.
   The mail step is what carries a message from a visitor's phone
   to the owner. The dashboard list is per-device.
   ============================================================ */

const IITW_FEEDBACK_KEY = "iitw-feedback";
const IITW_FEEDBACK_TO = "ammarwalidyounis@gmail.com";

function iitwFeedbackAll() {
  try { return JSON.parse(localStorage.getItem(IITW_FEEDBACK_KEY) || "[]"); }
  catch (e) { return []; }
}

function iitwFeedbackSave(entry) {
  try {
    const all = iitwFeedbackAll();
    all.unshift(entry);
    localStorage.setItem(IITW_FEEDBACK_KEY, JSON.stringify(all.slice(0, 200)));
  } catch (e) { /* private mode — the mail step still works */ }
}

function iitwSendFeedback(e) {
  if (e) e.preventDefault();
  const nameEl = document.getElementById("iitwFbName");
  const msgEl = document.getElementById("iitwFbMsg");
  const noteEl = document.getElementById("iitwFbNote");
  if (!msgEl) return;

  const name = (nameEl && nameEl.value.trim()) || "";
  const body = msgEl.value.trim();
  if (!body) return;

  const page = (location.pathname.split("/").pop() || "index.html");
  iitwFeedbackSave({
    id: "fb-" + Date.now(),
    name: name,
    msg: body,
    page: page,
    at: new Date().toISOString()
  });

  const subject = "IslamBasics — Feedback" + (name ? " from " + name : "") + " (" + page + ")";
  const mailBody = body + "\n\n—\nSent from: " + page + "\n" + new Date().toLocaleString();
  window.location.href = "mailto:" + IITW_FEEDBACK_TO +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(mailBody);

  msgEl.value = "";
  if (nameEl) nameEl.value = "";
  if (noteEl) {
    noteEl.style.display = "";
    noteEl.innerHTML = 'Thank you — your message was saved and your mail app should now open. If it does not, write to <strong>' +
      IITW_FEEDBACK_TO + '</strong> directly.' +
      '<br><span dir="rtl" style="font-family:\'Amiri\',serif;">جزاك الله خيرًا — حُفظت رسالتك وسيُفتح تطبيق البريد. فإن لم يُفتح فراسلنا مباشرة على العنوان أعلاه.</span>';
  }
}

function iitwInjectFeedback() {
  // The staff dashboard has its own panel for reading feedback; it does not
  // need a form for sending it.
  const page = (location.pathname.split("/").pop() || "index.html");
  if (page === "staff.html") return;
  if (document.getElementById("feedback")) return;

  const footer = document.querySelector("footer");
  if (!footer) return;

  const sec = document.createElement("section");
  sec.className = "fb-section";
  sec.id = "feedback";
  sec.innerHTML = `
    <div class="container" style="max-width:660px;">
      <h2 class="section-title">💬 Tell Us What You Think</h2>
      <div class="divider"></div>
      <p class="section-sub" style="margin-top:16px;">
        Found a mistake in a reference, a word translated wrongly, or something that would make this site better? Tell us — every message is read.
        <br><span dir="rtl" style="font-family:'Amiri',serif;font-size:1.05rem;">وجدتَ خطأً في مرجع، أو ترجمةً غير دقيقة، أو عندك فكرة تُحسّن الموقع؟ اكتب لنا — كل رسالة تُقرأ.</span>
      </p>
      <form class="fb-form" onsubmit="iitwSendFeedback(event)">
        <label for="iitwFbName">Your name (optional)</label>
        <input type="text" id="iitwFbName" autocomplete="name" />
        <label for="iitwFbMsg">Your message</label>
        <div class="fb-mic-wrap">
          <textarea id="iitwFbMsg" required dir="auto"
            placeholder="Describe the problem or your suggestion…  |  اكتب الملاحظة أو الاقتراح…"></textarea>
          <button type="button" id="iitwFbMic" class="mic-btn" title="Speak instead of typing — تحدث بدل الكتابة">🎤</button>
        </div>
        <div class="fb-mic-row">
          <select id="iitwFbMicLang" aria-label="Speaking language">
            <option value="ar-SA">🎤 أتحدّث بالعربية</option>
            <option value="en-US">🎤 I speak English</option>
          </select>
          <button type="submit" class="btn btn-primary">Send Feedback</button>
        </div>
        <div id="iitwFbMicStatus" class="mic-status"></div>
        <p id="iitwFbNote" class="fb-note" style="display:none;"></p>
      </form>
    </div>`;
  footer.parentNode.insertBefore(sec, footer);
  iitwWireFeedbackMic();
  if (window.applyI18n) window.applyI18n();
}

/* ------------------------------------------------------------
   THE MIC ON THE FEEDBACK BOX

   Asked for directly. The point of it: the people most likely to
   catch a mistake on this site — a wrong reference, a word
   translated badly — are often the ones least willing to type a
   paragraph on a phone, and in Arabic on a Latin keyboard that is
   worse still.

   The behaviour is copied from the Guidance mic deliberately,
   because that one was already corrected once for a real fault:
   the browser ends recognition the moment you stop talking, so a
   mic that is not `continuous` shuts while the person is still
   thinking of the next sentence. `continuous`, plus restarting in
   `onend` unless stop was actually clicked, is what fixes it.
   `wants` holds that intention.

   Only what is NEW and final is appended — with `continuous` the
   results array accumulates across the session, so appending the
   whole of it on every event pastes the same sentence again at
   every pause.

   IF THE BROWSER HAS NO SPEECH API THE BUTTON IS REMOVED, not
   left on the page to explain itself when pressed. A control that
   is visible is a promise that it works.
   ------------------------------------------------------------ */
function iitwWireFeedbackMic() {
  const btn = document.getElementById("iitwFbMic");
  const box = document.getElementById("iitwFbMsg");
  const status = document.getElementById("iitwFbMicStatus");
  const langSel = document.getElementById("iitwFbMicLang");
  if (!btn || !box || !status || !langSel) return;

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {                       // no promise we cannot keep
    btn.remove();
    langSel.remove();
    return;
  }

  /* Start on the language the reader is already reading the site in.
     Read the STORED preference, not the `lang-ar` class: this runs from
     `iitwInjectFeedback` on DOMContentLoaded, and i18n.js loads after
     main.js on every page, so the class is not on <html> yet. Testing the
     class defaulted an Arabic reader to English dictation. */
  let iitwLang = "en";
  try { iitwLang = localStorage.getItem("iitw-lang") === "ar" ? "ar" : "en"; }
  catch (e) { /* private mode — fall back to the class, then to English */
    iitwLang = document.documentElement.classList.contains("lang-ar") ? "ar" : "en"; }
  langSel.value = iitwLang === "ar" ? "ar-SA" : "en-US";

  const SAY_LISTENING =
    "● Listening — take your time, click the mic again to stop  ·  أستمع إليك — خذ وقتك، واضغط الميكروفون ثانيةً للإيقاف";

  let rec = null, listening = false, wants = false;

  btn.addEventListener("click", () => {
    if (listening) {
      wants = false;
      listening = false;
      if (rec) rec.stop();
      btn.classList.remove("listening");
      status.textContent = "■ Microphone off — أُغلق الميكروفون";
      return;
    }

    wants = true;
    rec = new SR();
    rec.lang = langSel.value;
    rec.interimResults = true;
    rec.continuous = true;

    rec.onstart = () => {
      listening = true;
      btn.classList.add("listening");
      status.textContent = SAY_LISTENING;
    };

    rec.onresult = e => {
      let fresh = "", interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) fresh += e.results[i][0].transcript;
        else interim += e.results[i][0].transcript;
      }
      if (fresh.trim()) {
        box.value = (box.value ? box.value.trim() + " " : "") + fresh.trim();
      }
      status.textContent = interim.trim() ? "● " + interim.trim() : SAY_LISTENING;
    };

    rec.onerror = e => {
      if (e.error === "no-speech" || e.error === "aborted") return;  // silence is not a failure
      wants = false;
      listening = false;
      btn.classList.remove("listening");
      status.textContent = e.error === "not-allowed"
        ? "Microphone blocked. Please allow it in your browser. — تم منع الميكروفون، اسمح به من المتصفح."
        : "The microphone stopped. Click it to start again. — توقف الميكروفون، اضغطه لتشغيله من جديد.";
    };

    // Chrome closes the session itself after a stretch of silence.
    rec.onend = () => {
      if (wants) {
        try { rec.start(); return; } catch (err) { /* fall through */ }
      }
      listening = false;
      btn.classList.remove("listening");
    };

    rec.start();
  });

  /* Switching language mid-session has to reopen recognition, because
     `lang` is read once when the session starts. The old session must be
     torn down with its `onend` detached first — otherwise the restart
     inside `onend` fires while `wants` is still true and reopens the mic
     on the language just switched away from. */
  langSel.addEventListener("change", () => {
    if (!listening) return;
    wants = false;
    listening = false;
    if (rec) { rec.onend = null; rec.stop(); }
    btn.classList.remove("listening");
    btn.click();                       // reopen, now on the new language
  });
}

document.addEventListener("DOMContentLoaded", iitwInjectFeedback);

/* ============================================================
   READING AIDS — a progress bar and a way back to the top
   ============================================================
   Injected here rather than written into each page, for the same reason the
   feedback form is: one copy to maintain across thirteen pages.

   These exist because of how long the pages on this site actually are. The
   Day of Judgement page runs to fifteen stages, the signs of the Hour and the
   angels; the Golden Age page to forty-one figures and eighteen sections of
   argument. A reader part-way down one of them had no sense of how much was
   left and no way back to the navigation except a long scroll.

   Both are injected only where they earn their place — a page that is barely
   longer than the window gets neither.

   RTL: the button is placed with `inset-inline-end`, so it sits bottom-left
   in Arabic without a separate rule. The progress bar grows with
   `transform: scaleX()` from `transform-origin: left`, which is flipped for
   RTL below in the stylesheet rather than in script.
------------------------------------------------------------- */
function iitwInjectReadingAids() {
  if (document.getElementById("iitwProgress")) return;

  const bar = document.createElement("div");
  bar.id = "iitwProgress";
  bar.className = "iitw-progress";
  bar.innerHTML = '<span class="iitw-progress-fill"></span>';

  const top = document.createElement("button");
  top.id = "iitwToTop";
  top.className = "iitw-to-top";
  top.type = "button";
  top.setAttribute("aria-label", "Back to top — عودة إلى الأعلى");
  top.title = "Back to top — عودة إلى الأعلى";
  top.textContent = "↑";

  document.body.appendChild(bar);
  document.body.appendChild(top);

  top.addEventListener("click", () => {
    // A reader who has turned motion down should not be thrown up the page.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });

  let ticking = false;
  // rAF-throttled: scroll fires far more often than the screen refreshes, and
  // these pages are tens of thousands of pixels long.
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; iitwUpdateReadingAids(); });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  iitwUpdateReadingAids();
}

/* How far down the page the reader is, 0 to 1. Kept as its own function
   because it is the only arithmetic here worth being sure about, and because
   requestAnimationFrame is paused whenever the page is not being painted —
   so this is the piece that has to be checkable on its own. */
function iitwProgressRatio() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

function iitwUpdateReadingAids() {
  const bar = document.getElementById("iitwProgress");
  const top = document.getElementById("iitwToTop");
  if (!bar || !top) return;
  const fill = bar.querySelector(".iitw-progress-fill");

  // A page barely longer than the window needs neither of these.
  if (document.documentElement.scrollHeight <= window.innerHeight * 2.5) {
    bar.classList.remove("on");
    top.classList.remove("on");
    return;
  }

  bar.classList.add("on");
  fill.style.transform = "scaleX(" + iitwProgressRatio() + ")";
  top.classList.toggle("on", window.scrollY > window.innerHeight * 0.9);
}

document.addEventListener("DOMContentLoaded", () => {
  // After the feedback section and any page render, so the height is real.
  setTimeout(iitwInjectReadingAids, 0);
});

/* ---- The header reacts to being scrolled ----
   At the top of a page the bar sits nearly transparent so the hero photograph
   runs behind it; once the page moves it goes opaque and takes a shadow. It
   is the cheapest single change that makes a site feel like an application
   rather than a document.

   Piggy-backs on the reading-aids scroll listener rather than adding a second
   one — the long pages here fire scroll thousands of times. */
function iitwUpdateHeaderState() {
  const h = document.querySelector("header.site-header");
  if (!h) return;
  h.classList.toggle("is-scrolled", window.scrollY > 8);
}

document.addEventListener("DOMContentLoaded", () => {
  iitwUpdateHeaderState();
  window.addEventListener("scroll", () => {
    // Cheap: a class toggle, guarded so it only writes when the state flips.
    iitwUpdateHeaderState();
  }, { passive: true });
});

/* ============================================================
   INSTALLING THE SITE AS AN APP (PWA)
   ============================================================
   Registers the service worker and offers an install button.

   The worker is NETWORK-FIRST — see the long note at the top of sw.js. It
   cannot cause the "reload and see no change" problem, because when the
   network is available the network always wins. bump-version.sh keeps
   working exactly as it did.

   Registration is deferred to the `load` event so it never competes with the
   page's own scripts for bandwidth on a phone.
------------------------------------------------------------- */
function iitwRegisterServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  // file:// has no service worker support and would throw.
  if (location.protocol !== "https:" && location.hostname !== "localhost") return;

  window.addEventListener("load", () => {
    /* `updateViaCache: "none"` is not optional here.

       The browser caches sw.js ITSELF through the normal HTTP cache. Without
       this, a new worker can sit undelivered: registering "sw.js" returns the
       byte-identical old copy from cache, the browser sees no change, and the
       new version never installs. That is exactly what happened while
       building this — a rewritten worker reported itself active while the
       OLD six-file one was actually running, and the cache stayed nearly
       empty. It is the same class of problem as the asset cache trap, one
       level further down, and bump-version.sh cannot reach it.

       "none" tells the browser to always go to the network for the worker
       script and its imports. */
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(reg => {
      // Ask the browser to check for a new worker on every page load.
      try { reg.update(); } catch (e) {}
      /* When a new version is waiting, tell it to take over straight away.
         Without this the reader would have to close every tab before an
         update reached them — which is the cache trap wearing a hat. */
      reg.addEventListener("updatefound", () => {
        const sw = reg.installing;
        if (!sw) return;
        sw.addEventListener("statechange", () => {
          if (sw.state === "installed" && navigator.serviceWorker.controller) {
            sw.postMessage("iitw-skip-waiting");
          }
        });
      });
    }).catch(() => {/* offline support is a bonus; never break the page for it */});
  });
}

/* ---------- Adding the site to a phone ----------
   Two completely different situations, and the first version got the second
   one wrong badly enough that the owner reported it as broken:

   ANDROID / DESKTOP CHROME & EDGE fire `beforeinstallprompt`. There a real
   Install button works, because there is an API behind it.

   IPHONE HAS NO SUCH API. A web page on iOS cannot add itself to the home
   screen at all — only the person can, through Safari's Share menu. The first
   version still showed a button labelled "Install" there. Pressing it could
   not install anything; it swapped a line of text, and pressing it again did
   nothing at all. A button that names an action and does not perform it is
   broken, and this one was.

   So on iOS there is NO BUTTON. The three steps are shown straight away with
   the Share glyph drawn beside them, so the reader can match it to the icon
   on their own screen. Nothing on the card claims to do something it cannot.

   The glyph is an inline SVG of SHAPES ONLY — no text inside it. Text in an
   SVG is not a node i18n.js can reach, so it would sit in English on an
   Arabic page. That rule is in the handoff and it holds here too. */

const IITW_SHARE_ICON =
  '<svg class="iitw-share-ico" viewBox="0 0 24 24" width="17" height="17" ' +
       'aria-hidden="true" focusable="false">' +
    '<path d="M12 3l4 4h-3v8h-2V7H8l4-4z" fill="currentColor"/>' +
    '<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" fill="none" ' +
          'stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
  '</svg>';

function iitwInjectInstall() {
  if (document.getElementById("iitwInstall")) return;

  // Already installed — the bar would be noise.
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
                       window.navigator.standalone === true;
  if (isStandalone) return;
  if (localStorage.getItem("iitw-install-dismissed") === "1") return;

  /* iPadOS 13+ reports itself as a Mac, so the touch check is needed as well
     or an iPad gets the Android bar and a button that never fires. */
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  let deferred = null;

  const bar = document.createElement("div");
  bar.id = "iitwInstall";
  bar.className = "iitw-install" + (isIOS ? " is-ios" : "");
  bar.hidden = true;

  if (isIOS) {
    /* No button. The steps ARE the content. */
    bar.innerHTML =
      '<div class="iitw-install-text">' +
        '<strong><span class="en-only">Add this site to your home screen</span>' +
          '<span class="ar-only" dir="rtl">أضِف الموقع إلى شاشتك الرئيسية</span></strong>' +
        '<ol class="iitw-ios-steps">' +
          '<li><span class="en-only">Tap the Share button ' + IITW_SHARE_ICON +
                ' at the bottom of Safari</span>' +
              '<span class="ar-only" dir="rtl">اضغط زر المشاركة ' + IITW_SHARE_ICON +
                ' في أسفل سفاري</span></li>' +
          '<li><span class="en-only">Scroll down and choose <strong>Add to Home Screen</strong></span>' +
              '<span class="ar-only" dir="rtl">انزل واختر <strong>إضافة إلى الشاشة الرئيسية</strong></span></li>' +
          '<li><span class="en-only">Tap <strong>Add</strong></span>' +
              '<span class="ar-only" dir="rtl">اضغط <strong>إضافة</strong></span></li>' +
        '</ol>' +
        '<span class="iitw-install-sub">' +
          '<span class="en-only">This only works in Safari. Chrome and Firefox on iPhone cannot add it.</span>' +
          '<span class="ar-only" dir="rtl">هذا يعمل في سفاري فقط. ولا يستطيعه كروم ولا فايرفوكس على الآيفون.</span></span>' +
      '</div>' +
      '<div class="iitw-install-actions">' +
        '<button type="button" class="btn btn-outline btn-small" id="iitwInstallNo">' +
          '<span class="en-only">Got it</span><span class="ar-only" dir="rtl">فهمت</span></button>' +
      '</div>';
  } else {
    bar.innerHTML =
      '<div class="iitw-install-text">' +
        '<strong><span class="en-only">Add this site to your phone</span>' +
          '<span class="ar-only" dir="rtl">أضِف الموقع إلى هاتفك</span></strong>' +
        '<span class="iitw-install-sub">' +
          '<span class="en-only">Opens straight from your home screen — no browser, no address bar, no searching for it again.</span>' +
          '<span class="ar-only" dir="rtl">يفتح مباشرةً من شاشة هاتفك — بلا متصفّح، ولا شريط عنوان، ولا بحث عنه من جديد.</span></span>' +
      '</div>' +
      '<div class="iitw-install-actions">' +
        '<button type="button" class="btn btn-primary btn-small" id="iitwInstallGo">' +
          '<span class="en-only">Install</span><span class="ar-only" dir="rtl">تثبيت</span></button>' +
        '<button type="button" class="iitw-install-close" id="iitwInstallNo" aria-label="Dismiss">✕</button>' +
      '</div>';
  }

  document.body.appendChild(bar);

  document.getElementById("iitwInstallNo").addEventListener("click", () => {
    localStorage.setItem("iitw-install-dismissed", "1");
    bar.hidden = true;
  });

  const go = document.getElementById("iitwInstallGo");
  if (go) {
    go.addEventListener("click", async () => {
      if (!deferred) return;                 // never shown without one
      deferred.prompt();
      await deferred.userChoice;
      deferred = null;
      bar.hidden = true;
    });
  }

  /* Android/desktop: only reveal the bar once the browser has actually given
     us a prompt to fire. Showing an Install button before that is the same
     mistake as showing one on iOS. */
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferred = e;
    bar.hidden = false;
    if (window.applyI18n) window.applyI18n();
  });

  if (isIOS) {
    bar.hidden = false;
    if (window.applyI18n) window.applyI18n();
  }
}

iitwRegisterServiceWorker();
document.addEventListener("DOMContentLoaded", iitwInjectInstall);

/* ---------- Making the site usable with no connection ----------
   The owner's complaint was that the Quran section did not work offline, and
   that nothing else did either. Two causes, and this handles the first:

   A SERVICE WORKER'S INSTALL IS KILLED IF IT TAKES TOO LONG. Pulling all
   3.5MB of pages and content inside install left eleven files cached and the
   worker reporting itself installed — a reader would have gone offline
   believing the site was saved. So the worker takes only the shell, and the
   rest is fetched HERE, from the page, where nothing terminates the work half
   done. Each fetch lands in the same cache through the worker's fetch handler.

   It runs quietly: after load, once, at most one file at a time, and only on
   a connection that is not metered or slow. Nothing about it blocks the page.
------------------------------------------------------------- */
function iitwWarmOfflineCache() {
  if (!("serviceWorker" in navigator) || !("caches" in window)) return;
  if (sessionStorage.getItem("iitw-warmed") === "1") return;

  /* Respect the reader's data. If the browser tells us the connection is
     metered or slow, this waits for a better one rather than spending
     someone's mobile allowance without asking. */
  const c = navigator.connection;
  if (c && (c.saveData || /2g/.test(c.effectiveType || ""))) return;

  navigator.serviceWorker.ready.then(reg => {
    const sw = reg.active;
    if (!sw) return;
    const ch = new MessageChannel();
    ch.port1.onmessage = async ev => {
      const list = ev.data;
      if (!Array.isArray(list)) return;
      /* `cache: "no-store"` USED TO BE ON THIS FETCH AND IT BROKE THE WHOLE
         THING. A response fetched with no-store cannot be written to the
         Cache API, so every one of these downloads completed with status 200
         and stored NOTHING — the reader ended up with five files cached and
         a flag saying the site was ready for offline use. Measured on the
         live site: 0 pages cached after 45 seconds. Never put it back.

         The "done" flag is also written only AFTER the loop finishes, so an
         interrupted warm-up is retried on the next page load instead of being
         marked complete. */
      let stored = 0;
      for (const url of list) {
        try {
          const res = await fetch(url);
          if (res && res.ok) stored++;
        } catch (e) {/* retried next load */}
      }
      if (stored >= list.length) sessionStorage.setItem("iitw-warmed", "1");
    };
    sw.postMessage("iitw-content-list", [ch.port2]);
  }).catch(() => {});
}

/* Deliberately late: the reader's own page finishes loading first. */
window.addEventListener("load", () => setTimeout(iitwWarmOfflineCache, 2500));
