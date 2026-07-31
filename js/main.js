/* ============================================
   Islam Is The Way — Shared Site Behaviour
   ============================================ */

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
