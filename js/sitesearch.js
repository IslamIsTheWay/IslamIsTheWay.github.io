/* ============================================================
   SITE SEARCH — search.html
   ============================================================
   The Search page searched PEOPLE and nothing else. Measured in September
   2026: "zakat", "hajj", "الصيام", "الزكاة", "dajjal" and "الدجال" all came
   back "No results found", on a site that carries the Dajjal in eight
   stories, fasting in the Sunnah, zakat in the rulings. The owner's words
   for what a search box must do: "you don't have to use extra complicated
   words to actually get the results that you want".

   So the people come first, exactly as before, and under them everything
   else this site carries that the words point at: stories, curated hadith,
   Sunnah practices, adhkar and the surahs by name. Each result says which
   page it lives on and links there.

   HOW WORDS ARE MATCHED — the same lessons this site paid for elsewhere:
   · whole words, never substrings (ولي inside وليس, علي inside على);
   · Arabic with its marks off, the alef forms folded, and the attached
     particles tried both on and off — الأكل and اكل, النوم and نوم, are
     one word; بلال is NOT لال, so the unstripped form is always kept too;
   · English plurals folded, and the names a reader knows from English
     (Moses, Jesus, Joseph) folded onto the ones the site uses;
   · function words ignored in both scripts, and a longer question must
     match most of its words — one word may never decide the answer. */

const SS_STOP_EN = new Set((
  "a an the and or of to in on at by for with from into is are was were be been am do does did " +
  "how what when where why who whom which i me my mine you your he him his she her it its we us our " +
  "they them their this that these those there here about can should would could will shall may " +
  "not no yes please tell show want need know say said says about any some all just also very"
).split(" "));

const SS_STOP_AR = new Set(["في", "من", "على", "عن", "الى", "إلى", "ما", "ماذا", "هل", "كيف", "لماذا", "متى",
  "اين", "أين", "هو", "هي", "ان", "أن", "إن", "لا", "يا", "انا", "أنا", "عند", "مع", "هذا", "هذه", "ذلك",
  "تلك", "التي", "الذي", "كل", "كان", "او", "أو", "ثم", "قد", "لم", "لن", "اريد", "أريد", "بدي", "ابغى",
  "شو", "ايش", "وش", "شنو", "حكم", "عن"]);

/* One word for one thing. Applied to the query AND to the text alike, so a
   fold can only ever join a word to its own spelling or to the name the
   site uses — never widen a match to a new subject. */
const SS_SYN = {
  moses: "musa", jesus: "isa", abraham: "ibrahim", joseph: "yusuf", noah: "nuh", jonah: "yunus",
  solomon: "sulaiman", sulayman: "sulaiman", david: "dawud", dawood: "dawud", mary: "maryam",
  gabriel: "jibril", jibreel: "jibril", jacob: "yaqub", ishmael: "ismail", isaac: "ishaq",
  aaron: "harun", job: "ayyub", lot: "lut", zechariah: "zakariya", john: "yahya",
  antichrist: "dajjal", heaven: "paradise", jannah: "paradise", hell: "fire", jahannam: "fire",
  salah: "prayer", salat: "prayer", namaz: "prayer", pray: "prayer", praying: "prayer",
  fast: "fasting", fasts: "fasting", sawm: "fasting", siyam: "fasting", ramadhan: "ramadan",
  zakah: "zakat", zakaat: "zakat", sadaqa: "sadaqah", pilgrimage: "hajj",
  wudhu: "wudu", ablution: "wudu", miswak: "siwak",
  mom: "mother", mum: "mother", mommy: "mother", dad: "father",
  koran: "quran", "quran": "quran",
  /* NOT المسيح → الدجال: al-Masih is Isa as well as the Dajjal, and a fold
     that sent a search for Isa to the Dajjal would be a wrong answer. */
  "صوم": "صيام", "صلوات": "صلاه"
};

function ssStemEn(w) {
  if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + "y";        // stories -> story
  if (w.length > 4 && /(sses|shes|ches|xes)$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && /s$/.test(w) && !/(ss|us|is)$/.test(w)) return w.slice(0, -1);
  return w;
}

function ssFoldAr(w) {
  return w.replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
          .replace(/ئ/g, "ي").replace(/ؤ/g, "و");
}

/* Every form a word may be matched under: itself, and — for Arabic — itself
   with an attached particle taken off, if a real word is left. */
function ssForms(raw) {
  let w = String(raw || "").toLowerCase().replace(/[’`']/g, "");
  if (!w) return [];
  if (/[ء-ي]/.test(w)) {
    if (SS_STOP_AR.has(w)) return [];
    w = ssFoldAr(w);
    const out = [w];
    let m = w.match(/^(?:وال|فال|بال|كال|لل|ال)(.{2,})$/);
    if (m) out.push(m[1]);
    m = w.match(/^[وفبكل](.{3,})$/);
    if (m) {
      out.push(m[1]);
      const m2 = m[1].match(/^ال(.{2,})$/);
      if (m2) out.push(m2[1]);
    }
    return out.map(function (x) { return SS_SYN[x] || x; });
  }
  if (SS_STOP_EN.has(w) || w.length < 2) return [];
  if (SS_SYN[w]) return [SS_SYN[w]];      // before the stemmer: "moses" is not a plural of "mose"
  w = ssStemEn(w);
  return [SS_SYN[w] || w];
}

function ssWords(text) {
  return String(text || "")
    /* Written as escapes on purpose: typed as characters, this class came
       out as U+0610-U+064B, a range that holds every Arabic LETTER, and
       every Arabic search on this page returned nothing. */
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, "")
    .split(/[^A-Za-z0-9’'`ء-ي]+/).filter(Boolean);
}

/* A field as a Set of every form of every word in it. */
function ssSet(text) {
  const s = new Set();
  ssWords(text).forEach(function (w) { ssForms(w).forEach(function (f) { s.add(f); }); });
  return s;
}

/* THE SECTIONS THAT ANSWER A SUBJECT. A great deal of this site is written
   as sections rather than as entries — zakat, inheritance, marriage, the
   grave — and none of it is in the files this page loads. "zakat" found
   nothing at all. So each section is listed here by name, with the plain
   words a reader would use for it, in both languages. Only its KEYS are
   searched: a section is offered when the subject is named, never because a
   word happens to occur in its title. */
const SS_SECTIONS = [
  ["guidance.html#worship", "What do I say — and when?", "ماذا أقول ومتى؟",
   "dua duas supplication sujud sujood ruku tashahhud istighfar forgiveness دعاء أدعية السجود الركوع التشهد الاستغفار"],
  ["guidance.html#who", "Who Allah is, and what He is able to do", "من هو الله؟ وما الذي يقدر عليه؟",
   "allah god lord names attributes tawhid monotheism الله أسماء الصفات التوحيد"],
  ["guidance.html#pillars", "The pillars of Islam and of faith", "أركان الإسلام وأركان الإيمان",
   "pillar pillars shahadah iman faith arkan أركان الأركان الشهادة الشهادتين الإيمان"],
  ["guidance.html#zakat", "Zakat — how much, when, and to whom", "الزكاة — كم ومتى ولمن",
   "zakat zakah nisab alms fitr fitrah wealth gold savings الزكاة زكاة النصاب الفطر المال الذهب"],
  /* Three pillars that have a card of their own on Guidance: "hajj" found
     only the name of Surah al-Hajj, and "fasting" only stories. */
  ["guidance.html#pi-hajj", "Hajj, and what \"able\" actually means", "الحج، وما معنى الاستطاعة",
   "hajj haj pilgrimage umrah mecca makkah kaaba able afford الحج حج أحج العمرة مكة الكعبة الاستطاعة"],
  ["guidance.html#pi-sawm", "Fasting — and who does not have to", "الصيام — ومن لا يلزمه",
   "fasting fast sawm siyam ramadan suhoor iftar الصيام الصوم صوم رمضان السحور الإفطار أفطر"],
  ["guidance.html#pm-qadar", "The decree — and the commonest misunderstanding of it", "القدر — وأكثر ما يُساء فهمه فيه",
   "qadar decree destiny fate predestination written القدر القضاء المكتوب مكتوب"],
  ["guidance.html#basics", "The basics, step by step — for someone starting out", "الأساسيات خطوةً خطوة — لمن يبدأ",
   "basics beginner beginners start new muslim convert revert الأساسيات البداية أبدأ جديد مسلم أسلمت"],
  ["guidance.html#grave", "The grave — the first stop", "القبر — أوّل منزل",
   "grave death barzakh questioning munkar nakir القبر الموت البرزخ سؤال عذاب منكر نكير"],
  ["guidance.html#destination", "Paradise and the Fire — the levels of each", "الجنة والنار — درجاتها ودركاتها",
   "paradise heaven jannah hell fire jahannam level levels الجنة النار جهنم الدرجات الدركات"],
  ["guidance.html#prayer", "The prayer in practice — missed prayers, doubts, travel", "الصلاة عملًا — القضاء والسهو والسفر",
   "prayer salah pray missed qada doubt forgot sahw combine shorten times الصلاة قضاء السهو نسيت الجمع القصر أوقات أصلي"],
  ["guidance.html#marriage", "Marriage, and what you are agreeing to", "النكاح، وما الذي تلتزمه",
   "marriage marry nikah wedding husband wife spouse mahr dowry divorce الزواج النكاح الزوج الزوجة المهر الطلاق"],
  ["guidance.html#inheritance", "Inheritance — the shares, worked through", "المواريث — الأنصبة مقسومةً خطوةً خطوة",
   "inheritance inherit estate heirs shares mirath will الميراث المواريث الإرث التركة الورثة الوصية"],
  ["guidance.html#standard", "\"Give me an argument that isn't religious\"", "«هاتِ لي دليلًا من غير الدين»",
   "atheist atheism argument proof evidence reason logic ملحد الإلحاد دليل العقل برهان"],
  ["guidance.html#morals", "Morals — where they went", "الأخلاق — أين ذهبت",
   "morals morality ethics modesty gaze zina الأخلاق الحياء غض البصر الزنا"],
  ["guidance.html#sins", "The major sins, named one by one", "الكبائر، مسمّاةً واحدةً واحدة",
   "sin sins major kabair forbidden الكبائر الذنوب المعاصي"],
  ["guidance.html#rulings", "What the scholars ruled — halal and haram", "ما قرّره أهل العلم — الحلال والحرام",
   "ruling rulings fatwa halal haram allowed permissible music scholars حكم فتوى حلال حرام يجوز الموسيقى الأغاني العلماء"],
  ["guidance.html#misunderstood", "The hardest questions — jihad, hijab, women, compulsion", "أصعب الأسئلة — الجهاد والحجاب والمرأة والإكراه",
   "jihad terrorism terrorist violence hijab women compulsion khawarij extremism الجهاد الإرهاب الحجاب المرأة الإكراه الخوارج التطرف"],
  ["guidance.html#endprep", "The map of the end of time — where we are on it", "خريطة آخر الزمان — وأين نحن منها",
   "end signs hour mahdi qiyamah آخر الزمان علامات الساعة أشراط المهدي"],
  ["guidance.html#revival", "Why we fell, and the way back", "لماذا سقطنا، وكيف نعود",
   "revival ummah decline weakness nahda النهضة الأمة الضعف سقطنا"],
  ["guidance.html#bidah", "Adding to the religion — bid'ah", "الزيادة في الدين — البدعة",
   "bidah bid'ah innovation mawlid celebration البدعة البدع المولد الاحتفال"],
  ["guidance.html#adhkar", "The adhkar — morning, evening and sleep", "الأذكار — الصباح والمساء والنوم",
   "adhkar dhikr remembrance morning evening tasbih الأذكار الذكر الصباح المساء التسبيح"],
  ["judgement.html", "The Day of Judgement, stage by stage", "يوم القيامة، مرحلةً مرحلة",
   "judgement judgment qiyamah resurrection scale mizan sirat bridge intercession hawd القيامة البعث الميزان الصراط الشفاعة الحوض"],
  ["judgement.html#angels", "The angels", "الملائكة",
   "angel angels jibril mikail israfil الملائكة ملك جبريل ميكائيل إسرافيل"],
  ["golden.html", "The Golden Age of Islam — the scholars and what they built", "العصر الذهبي للإسلام — العلماء وما بنوا",
   "golden age science scientists inventions civilisation civilization الذهبي العصر العلوم الاختراعات الحضارة"],
  ["verify.html", "Check a hadith before you forward it", "تحقَّق من الحديث قبل أن تُرسله",
   "verify check authentic fake fabricated forwarded real hadith تحقق موضوع مكذوب حديث"],
  ["quran.html", "Read and listen to the Quran", "اقرأ القرآن واستمع إليه",
   "quran recitation reciter mushaf wird listen القرآن تلاوة قارئ المصحف الورد استماع"],
  ["hadith.html", "The full collections of al-Bukhari and Muslim", "صحيحا البخاري ومسلم كاملين",
   "bukhari muslim collection collections البخاري مسلم الصحيحين"]
];

let SS_INDEX = null;

function ssIndex() {
  if (SS_INDEX) return SS_INDEX;
  const E = [];
  const add = function (o) {
    o.kSet = ssSet(o.keys); o.hSet = ssSet(o.head); o.bSet = ssSet(o.body);
    E.push(o);
  };
  SS_SECTIONS.forEach(function (x) {
    add({ kind: "section", url: x[0], title: x[1], titleAr: x[2], snip: "", snipAr: "",
          keys: x[3], head: "", body: "" });
  });
  if (typeof SURAHS !== "undefined") SURAHS.forEach(function (s) {
    add({ kind: "surah", url: "quran.html#surah-" + s.n,
      title: "Surah " + s.name + " (" + s.n + ")", titleAr: "سورة " + s.arabic + " (" + s.n + ")",
      snip: s.meaning + " · " + s.verses + " verses", snipAr: s.verses + " آية",
      keys: s.name + " " + s.name.replace(/^(al|an|ar|as|at|ad|ash|az)-/i, "") + " " + s.arabic + " " + s.meaning,
      head: "", body: "" });
  });
  if (typeof PROPHET_STORIES !== "undefined") PROPHET_STORIES.forEach(function (s) {
    /* The section a story sits in names what it teaches ("mercy",
       "الرحمة"), so its name counts as a key of every story in it. */
    const sec = (typeof STORY_SECTIONS !== "undefined" &&
                 STORY_SECTIONS.filter(function (x) { return x.id === s.section; })[0]) || {};
    add({ kind: "story", id: s.id, url: "stories.html#" + s.id, title: s.title, titleAr: s.titleAr,
      snip: s.theme || "", snipAr: s.themeAr || "",
      keys: (s.keys || []).join(" ") + " " + (s.groupTitle || "") + " " + (s.groupTitleAr || "") +
            " " + (sec.en || "") + " " + (sec.ar || ""),
      head: [s.title, s.titleAr, s.theme, s.themeAr].join(" "),
      body: [s.story, s.storyAr, s.lesson, s.lessonAr].join(" ") });
  });
  if (typeof HADITHS !== "undefined") HADITHS.forEach(function (h) {
    add({ kind: "hadith", url: "hadith.html", title: h.title || h.topic, titleAr: h.titleAr || "",
      snip: h.text, snipAr: h.arabic, ref: h.ref, refAr: h.refAr,
      keys: (h.keys || []).join(" ") + " " + (h.topic || ""),
      head: [h.title, h.titleAr].join(" "),
      body: [h.text, h.arabic, h.explain, h.explainAr].join(" ") });
  });
  if (typeof SUNNAH !== "undefined") SUNNAH.forEach(function (s) {
    add({ kind: "sunnah", url: "sunnah.html", title: s.title, titleAr: s.titleAr,
      snip: s.detail, snipAr: s.detailAr, ref: s.ref, refAr: s.refAr,
      keys: (s.keys || []).join(" "),
      head: [s.title, s.titleAr].join(" "),
      body: [s.detail, s.detailAr, s.arabic].join(" ") });
  });
  if (typeof ADHKAR !== "undefined") ADHKAR.forEach(function (d) {
    add({ kind: "dhikr", url: "guidance.html#adhkar", title: d.title, titleAr: d.titleAr,
      snip: d.en, snipAr: d.arabic, ref: d.ref, refAr: d.refAr,
      keys: (d.keys || []).join(" "),
      head: [d.title, d.titleAr].join(" "),
      body: [d.en, d.arabic, d.virtue, d.virtueAr].join(" ") });
  });
  SS_INDEX = E;
  return E;
}

/* [{ entry, score }] best first. A query of one or two words must match all
   of them; a longer one most of them, and at least one in a title or key —
   a body mention alone is how a single common word used to decide. */
/* opts.kinds limits the search to some kinds (the Stories page searches its
   own stories with this); opts.weak lets a match stand on the text alone,
   which is right INSIDE one page, where the reader has already chosen the
   subject, and wrong across the whole site. */
function ssSearch(query, opts) {
  opts = opts || {};
  const q = ssWords(query).map(ssForms).filter(function (f) { return f.length; });
  if (!q.length) return [];
  const need = q.length <= 2 ? q.length : Math.ceil(q.length * 0.6);
  const out = [];
  ssIndex().forEach(function (e) {
    if (opts.kinds && opts.kinds.indexOf(e.kind) < 0) return;
    let score = 0, hit = 0, strong = opts.weak ? 1 : 0;
    q.forEach(function (forms) {
      const inK = forms.some(function (f) { return e.kSet.has(f); });
      const inH = !inK && forms.some(function (f) { return e.hSet.has(f); });
      const inB = !inK && !inH && forms.some(function (f) { return e.bSet.has(f); });
      if (inK) { score += 6; hit++; strong++; }
      else if (inH) { score += 4; hit++; strong++; }
      else if (inB) { score += 1; hit++; }
    });
    if (hit >= need && strong > 0) out.push({ entry: e, score: score });
  });
  return out.sort(function (a, b) { return b.score - a.score; });
}

const SS_KINDS = [
  { kind: "section", icon: "🧭", en: "Where the site explains it", ar: "أين يشرحه الموقع", page: "guidance.html", pageEn: "the Guidance page", pageAr: "صفحة التوجيه" },
  { kind: "surah",  icon: "📖", en: "In the Quran",       ar: "في القرآن",          page: "quran.html",           pageEn: "the Quran page",   pageAr: "صفحة القرآن" },
  { kind: "story",  icon: "📜", en: "Stories",            ar: "القصص",              page: "stories.html",         pageEn: "the Stories page", pageAr: "صفحة القصص" },
  { kind: "hadith", icon: "💬", en: "Hadith",             ar: "الأحاديث",           page: "hadith.html",          pageEn: "the Hadith page",  pageAr: "صفحة الحديث" },
  { kind: "sunnah", icon: "🌿", en: "Sunnah practices",   ar: "من السنن",           page: "sunnah.html",          pageEn: "the Sunnah page",  pageAr: "صفحة السنة" },
  { kind: "dhikr",  icon: "📿", en: "Adhkar",             ar: "الأذكار",            page: "guidance.html#adhkar", pageEn: "the Adhkar section", pageAr: "قسم الأذكار" }
];

function ssEsc(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function ssCut(s, n) {
  s = String(s || "").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, "") + "…" : s;
}

/* The block under the people results. Returns how many results it showed. */
function ssRender(query, host) {
  const hits = ssSearch(query);
  if (!hits.length) return 0;
  let html = `<div class="ss-wrap"><h2 class="ss-title">
      <span class="en-only">On the rest of the site</span><span class="ar-only" dir="rtl">في بقية الموقع</span></h2>`;
  SS_KINDS.forEach(function (k) {
    const list = hits.filter(function (h) { return h.entry.kind === k.kind; });
    if (!list.length) return;
    html += `<div class="ss-block"><h3 class="ss-head">${k.icon}
        <span class="en-only">${k.en}</span><span class="ar-only" dir="rtl">${k.ar}</span>
        <span class="ss-count">${list.length}</span></h3>`;
    list.slice(0, 4).forEach(function (h) {
      const e = h.entry;
      html += `<a class="ss-item" href="${ssEsc(e.url)}">
          <div class="ss-item-title"><span class="en-only">${ssEsc(e.title)}</span><span class="ar-only" dir="rtl">${ssEsc(e.titleAr || e.title)}</span></div>
          ${e.snip || e.snipAr ? `<div class="ss-item-snip"><span class="en-only">${ssEsc(ssCut(e.snip, 150))}</span><span class="ar-only" dir="rtl">${ssEsc(ssCut(e.snipAr || e.snip, 150))}</span></div>` : ""}
          ${e.ref ? `<div class="ss-item-ref">${e.refAr ? `<span class="en-only">${ssEsc(e.ref)}</span><span class="ar-only" dir="rtl">${ssEsc(e.refAr)}</span>` : `<span class="tad-ref">${ssEsc(e.ref)}</span>`}</div>` : ""}
        </a>`;
    });
    if (list.length > 4) {
      html += `<a class="ss-more" href="${k.page}">
          <span class="en-only">${list.length - 4} more — open ${k.pageEn} and search there</span>
          <span class="ar-only" dir="rtl">و${list.length - 4} غيرها — افتح ${k.pageAr} وابحث فيها</span></a>`;
    }
    html += `</div>`;
  });
  html += `</div>`;
  host.insertAdjacentHTML("beforeend", html);
  return hits.length;
}
