/* ============================================
   Islam Is The Way — Arabic / English switch
   --------------------------------------------
   Adds a language button to every page. Switching to Arabic translates the
   interface, flips the layout to right-to-left, and shows the Arabic version
   of the content (biographies, hadith) instead of the English one.
   The choice is remembered on the device.
   ============================================ */

const IITW_LANG_KEY = "iitw-lang";

/* UI strings. Key = the exact English text on the page. */
const AR = {
  // ---- Navigation & shared ----
  "Home": "الرئيسية",
  "Quran": "القرآن",
  "Prophets": "الأنبياء",
  "Companions": "الصحابة",
  "Hadith": "الحديث",
  "Guidance": "التوجيه",
  "Courses": "الدورات",
  "Search": "البحث",
  "Login": "تسجيل الدخول",
  "Logout": "تسجيل الخروج",
  "Islam Is The Way": "الإسلام هو الطريق",
  "Explore": "استكشف",
  "Contact": "تواصل معنا",
  "Quran Library": "مكتبة القرآن",
  "Prophets in Islam": "الأنبياء في الإسلام",
  "Islamic Wisdom for Every Heart": "حكمة الإسلام لكل قلب",
  "© 2026 Islam Is The Way. All rights reserved.": "© 2026 الإسلام هو الطريق. جميع الحقوق محفوظة.",
  "A resource for learning the Quran, the Prophets, and the Companions of Prophet Muhammad ﷺ — built to inform, inspire, and guide.":
    "موقع لتعلّم القرآن الكريم وسيرة الأنبياء وصحابة النبي ﷺ — للتعليم والإلهام والتوجيه.",
  "Clear": "مسح",

  // ---- Home ----
  "Unlock the Wisdom of the Quran": "اكتشف حكمة القرآن الكريم",
  "A welcoming space to read the Quran, explore the lives of the Prophets, learn about the noble Companions of Prophet Muhammad ﷺ, and search for trustworthy, referenced answers — all in one place.":
    "مكان يرحّب بك لقراءة القرآن، والتعرّف على سِيَر الأنبياء، ومعرفة صحابة النبي ﷺ الكرام، والبحث عن أجوبة موثوقة بمراجعها — في مكان واحد.",
  "Open the Quran Library": "افتح مكتبة القرآن",
  "Search a Person": "ابحث عن شخص",
  "Quick Access": "وصول سريع",
  "Jump straight to what you're looking for.": "اذهب مباشرة إلى ما تبحث عنه.",
  "The Holy Quran": "القرآن الكريم",
  "All 114 surahs with Arabic text, English translation, and audio recitation by Mishary al-Afasy. Search in Arabic or English.":
    "جميع السور الـ114 بالنص العربي والترجمة الإنجليزية وتلاوة صوتية. ابحث بالعربية أو الإنجليزية.",
  "Hadith Collection": "مجموعة الأحاديث",
  "Complete Sahih al-Bukhari and Sahih Muslim — 15,000+ hadith in Arabic and English, with audio and scholar-verified grading.":
    "صحيح البخاري وصحيح مسلم كاملين — أكثر من 15,000 حديث بالعربية والإنجليزية مع بيان درجة الحديث.",
  "The lives and lessons of the Prophets named in the Quran, from Adam to Muhammad ﷺ.":
    "سِيَر الأنبياء المذكورين في القرآن ودروسهم، من آدم إلى محمد ﷺ.",
  "Companions (Sahaba)": "الصحابة رضي الله عنهم",
  "The men and women who stood beside the Prophet ﷺ and shaped the early Muslim community.":
    "الرجال والنساء الذين وقفوا مع النبي ﷺ وبنوا المجتمع المسلم الأول.",
  "Guidance & Reflection": "التوجيه والتدبر",
  "Guidance &amp; Reflection": "التوجيه والتدبر",
  "Quranic themes on the path to Paradise and warnings to reflect upon, with verse references.":
    "معانٍ قرآنية عن طريق الجنة وتحذيرات للتدبر، مع مراجع الآيات.",
  "Courses & Private Tutoring": "الدورات والدروس الخاصة",
  "Courses &amp; Private Tutoring": "الدورات والدروس الخاصة",
  "Tafsir, Hifz testing, 1-on-1 Quran teaching, Hadith explanation with context, Fiqh, Arabic, and private tutoring.":
    "التفسير، واختبار الحفظ، وتعليم القرآن فرديًا، وشرح الحديث بسياقه، والفقه، والعربية، ودروس خاصة.",
  "Explore the Site": "استكشف الموقع",
  "Everything you need to begin or deepen your journey of Islamic learning.":
    "كل ما تحتاجه لتبدأ رحلتك في تعلّم الإسلام أو تعمّقها.",
  "Words of the Prophet ﷺ": "من أقوال النبي ﷺ",
  "View All Hadith": "اطّلع على جميع الأحاديث",
  "Common Questions": "أسئلة شائعة",
  "Houses of Allah Around the World": "بيوت الله في أنحاء العالم",
  "Community Reflections": "مشاركات المجتمع",
  "Get Started": "ابدأ الآن",
  "Get in Touch": "تواصل معنا",
  "Questions about a course, a correction to something you read, or an idea to make this site better — we would be glad to hear from you.":
    "سؤال عن دورة، أو تصويب لما قرأت، أو فكرة لتحسين الموقع — يسعدنا تواصلك معنا.",
  "Browse the courses": "تصفّح الدورات",
  "Send feedback": "أرسل ملاحظاتك",
  "Knowledge That Brings Peace to the Heart": "علمٌ تطمئن به القلوب",
  "Indeed, With Hardship Comes Ease": "إنّ مع العسر يسرًا",

  // ---- Quran page ----
  "The Quran Library": "مكتبة القرآن الكريم",
  "Play Full Surah": "تشغيل السورة كاملة",
  "▶ Play Full Surah": "▶ تشغيل السورة كاملة",
  "⏹ Stop": "⏹ إيقاف",
  "All Revelations": "كل السور",
  "Meccan": "مكية",
  "Medinan": "مدنية",

  // ---- Hadith page ----
  "Highlights": "مختارات",
  "Sahih al-Bukhari": "صحيح البخاري",
  "Sahih Muslim": "صحيح مسلم",
  "Loading hadith collection... Please wait.": "جارٍ تحميل مجموعة الأحاديث... يُرجى الانتظار.",

  // ---- Prophets / Companions ----
  "Companions of Prophet Muhammad ﷺ": "صحابة النبي محمد ﷺ",
  "Allah sent many prophets throughout history to guide humanity. Below are the prophets named in the Quran, with brief biographies and references for deeper study.":
    "أرسل الله أنبياء كثيرين على مدى التاريخ لهداية البشرية. وفيما يلي الأنبياء المذكورون في القرآن مع نبذة عن سِيَرهم ومراجع للاستزادة.",
  "The Sahaba were the men and women who accompanied, supported, and learned directly from the Prophet ﷺ. Their lives remain a model of faith, sacrifice, and character.":
    "الصحابة هم الرجال والنساء الذين صحبوا النبي ﷺ ونصروه وتعلّموا منه مباشرة. وسِيَرهم نموذج في الإيمان والتضحية والأخلاق.",
  "References:": "المراجع:",

  // ---- Guidance page ----
  "The Quran repeatedly describes the qualities and deeds that lead toward Allah's mercy and Paradise, as well as behaviors it warns against. Below are some recurring themes, with references for further study.":
    "يذكر القرآن الكريم الصفات والأعمال التي تقود إلى رحمة الله وجنته، ويحذّر من أعمال أخرى. وفيما يلي أبرز هذه المعاني مع مراجعها للاستزادة.",
  "Find Guidance — ابحث عن التوجيه": "ابحث عن التوجيه",
  "Describe what you are going through, in Arabic or English, and we will show you the Quranic themes and Prophets' stories that relate to it — each with its full reference so you can read it in context.":
    "اكتب ما تمر به بالعربية أو الإنجليزية، وسنعرض لك المعاني القرآنية وقصص الأنبياء المتعلقة بحالتك، مع المرجع كاملاً لتقرأه في سياقه.",

  // ---- Courses ----
  "Learning Paths & Courses": "المسارات التعليمية والدورات",
  "Learning Paths &amp; Courses": "المسارات التعليمية والدورات",
  "Enroll Now": "سجّل الآن",
  "Choose a course": "اختر دورة",
  "Try it free": "جرّبها مجانًا",
  "Pay & get your code": "ادفع واحصل على رمزك",
  "Pay &amp; get your code": "ادفع واحصل على رمزك",
  "Learn": "تعلّم",
  "Not Ready to Enroll?": "لست مستعدًا للتسجيل؟",
  "Explore Free Resources": "استكشف المصادر المجانية",
  "Send Feedback": "أرسل الملاحظات",
  "Your message": "رسالتك",
  "Your name (optional)": "اسمك (اختياري)",
  "Join": "انضم",

  // ---- Login ----
  "Welcome Back": "مرحبًا بعودتك",
  "Staff Login": "دخول الفريق",
  "Username": "اسم المستخدم",
  "Password": "كلمة المرور",
  "Sign In": "تسجيل الدخول",
  "Visitors & Students": "الزوار والطلاب",
  "Visitors &amp; Students": "الزوار والطلاب",
  "Continue without an Account": "المتابعة بدون حساب",
  "Browse Courses": "تصفّح الدورات",

  // ---- Search page ----
  "Search a Prophet or Companion": "ابحث عن نبي أو صحابي",
  "Try:": "جرّب:"
};

function iitwGetLang() {
  return localStorage.getItem(IITW_LANG_KEY) === "ar" ? "ar" : "en";
}

/* Walk every text node once and remember its original English, so switching
   back and forth never loses or double-translates anything. */
function iitwCollectNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const p = node.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || p.id === "iitw-toast") return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim().length ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);
  return nodes;
}

function iitwTranslateDom(lang) {
  iitwCollectNodes().forEach(node => {
    if (node._iitwEn === undefined) node._iitwEn = node.nodeValue;
    const original = node._iitwEn;
    const key = original.trim();
    if (lang === "ar") {
      const t = AR[key];
      if (t) node.nodeValue = original.replace(key, t);
    } else {
      node.nodeValue = original;
    }
  });

  // Placeholders, titles and button labels
  document.querySelectorAll("[placeholder]").forEach(el => {
    if (el._iitwPh === undefined) el._iitwPh = el.getAttribute("placeholder");
    const t = lang === "ar" ? AR[el._iitwPh.trim()] : null;
    el.setAttribute("placeholder", t || el._iitwPh);
  });
}

function iitwApply(lang) {
  const root = document.documentElement;
  root.lang = lang === "ar" ? "ar" : "en";
  root.dir = lang === "ar" ? "rtl" : "ltr";
  root.classList.toggle("lang-ar", lang === "ar");
  iitwTranslateDom(lang);

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.textContent = lang === "ar" ? "English" : "العربية";
    btn.setAttribute("title", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  }
}

/* Re-apply after a page renders content dynamically. */
window.applyI18n = function () { iitwApply(iitwGetLang()); };

document.addEventListener("DOMContentLoaded", () => {
  // Put the switch in the navigation, just before the Login button.
  const nav = document.querySelector("nav.main-nav");
  if (nav && !document.getElementById("langToggle")) {
    const btn = document.createElement("button");
    btn.id = "langToggle";
    btn.type = "button";
    btn.className = "lang-toggle";
    btn.addEventListener("click", () => {
      const next = iitwGetLang() === "ar" ? "en" : "ar";
      localStorage.setItem(IITW_LANG_KEY, next);
      iitwApply(next);
    });
    const loginLink = nav.querySelector(".nav-login");
    if (loginLink) nav.insertBefore(btn, loginLink); else nav.appendChild(btn);
  }
  iitwApply(iitwGetLang());
});
