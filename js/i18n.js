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
  "Stories": "القصص",
  "Judgement Day": "يوم القيامة",
  "Angels": "الملائكة",
  "The Angels": "الملائكة",
  "Golden Age": "العصر الذهبي",
  "The Golden Age of Islam": "العصر الذهبي للإسلام",
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
  "Stories of the Prophet صلى الله عليه وسلم": "قصص النبي ﷺ",
  "The Day of Judgement": "يوم القيامة",
  "Islamic Wisdom for Every Heart": "حكمة الإسلام لكل قلب",
  "© 2026 Islam Is The Way. All rights reserved.": "© 2026 الإسلام هو الطريق. جميع الحقوق محفوظة.",
  "A resource for learning the Quran, the Prophets, and the Companions of Prophet Muhammad ﷺ — built to inform, inspire, and guide.":
    "موقع لتعلّم القرآن الكريم وسيرة الأنبياء وصحابة النبي ﷺ — للتعليم والإلهام والتوجيه.",
  "Clear": "مسح",

  // ---- Home ----
  "Unlock the Wisdom of the Quran": "اكتشف حكمة القرآن الكريم",
  "A welcoming space to read the Quran, follow the Sunnah of the Prophet ﷺ through the ordinary day, read the stories of his life and what awaits on the Day of Judgement, explore the lives of the Prophets and his noble Companions, and find trustworthy, referenced answers — all in one place.":
    "مكانٌ يرحّب بك لتقرأ القرآن، وتتّبع سنة النبي ﷺ في يومك المعتاد، وتقرأ قصص حياته وما ينتظر العباد يوم القيامة، وتتعرّف على سِيَر الأنبياء وصحابته الكرام، وتجد أجوبةً موثّقة بمراجعها — في مكان واحد.",
  "Open the Quran Library": "افتح مكتبة القرآن",
  "Ask About Your Situation": "اسأل عن حالتك",
  "Search a Person": "ابحث عن شخص",
  "Quick Access": "وصول سريع",
  "Jump straight to what you're looking for.": "اذهب مباشرة إلى ما تبحث عنه.",
  "The Holy Quran": "القرآن الكريم",
  "All 114 surahs with Arabic text, English translation, and 16 reciters to choose from. Every verse carries its page in the 604-page Madani Mushaf, and 225 verses — at least one in every surah — open into a full explanation of why they are worded as they are.":
    "جميع السور الـ114 بالنص العربي والترجمة الإنجليزية، مع ستة عشر قارئًا تختار بينهم. وكل آية مقرونة بصفحتها في المصحف المدني ذي الأربع والستمائة صفحة، ومئتان وخمسٌ وعشرون آية — في كلّ سورةٍ منها آيةٌ فأكثر — تُفتح على شرحٍ كاملٍ لسبب ورودها بهذا اللفظ.",
  "Hadith Collection": "مجموعة الأحاديث",
  "Complete Sahih al-Bukhari and Sahih Muslim — 15,000+ hadith in Arabic and English, plus 43 chosen ones. Every grading names the scholar behind it.":
    "صحيح البخاري وصحيح مسلم كاملين — أكثر من 15,000 حديث بالعربية والإنجليزية، ومعها ثلاثة وأربعون حديثًا مختارًا. وكل درجةٍ مذكورٌ معها اسم من صحّحها.",
  "The Sunnah in Daily Life": "السنة في الحياة اليومية",
  "177 practices of the Prophet ﷺ across 18 areas of the day — sleeping, eating, washing, travelling, entering the mosque — each with its source.":
    "مئة وسبعٌ وسبعون سنة من هدي النبي ﷺ في ثمانية عشر بابًا من أبواب اليوم — النوم والطعام والطهارة والسفر ودخول المسجد — كلٌّ منها بمرجعها.",
  "Stories of the Prophet ﷺ": "قصص النبي ﷺ",
  "49 moments from his life, every one located in Sahih al-Bukhari or Sahih Muslim before it was written, with the classical words explained.":
    "تسعةٌ وأربعون موقفًا من حياته ﷺ، كلُّ واحد وُجد في صحيح البخاري أو صحيح مسلم قبل كتابته، مع شرح الألفاظ القديمة الواردة فيه.",
  "15 stages in the order they happen — from the moment of death to the gates — with 64 referenced points and 54 passages of the Quran.":
    "خمس عشرة مرحلة بترتيب وقوعها — من لحظة الموت إلى الأبواب — مع أربعٍ وستين مسألة موثّقة، وأربعةٍ وخمسين موضعًا من القرآن الكريم.",
  "The 29 Prophets named in the Quran, from Adam to Muhammad ﷺ — every one of them with a full life and the message he was sent with.":
    "الأنبياء التسعة والعشرون المذكورون في القرآن، من آدم إلى محمد ﷺ — لكل واحدٍ منهم سيرةٌ كاملة ورسالةٌ بُعث بها.",
  "Companions (Sahaba)": "الصحابة رضي الله عنهم",
  "65 of the men and women who stood beside the Prophet ﷺ, including all eleven Mothers of the Believers — every one of them with a full life story.":
    "خمسة وستون من الرجال والنساء الذين وقفوا مع النبي ﷺ، ومنهم أمهات المؤمنين الإحدى عشرة جميعًا — وكلّ واحدٍ منهم بسيرةٍ كاملة.",
  "Guidance & Reflection": "التوجيه والتدبر",
  "Guidance &amp; Reflection": "التوجيه والتدبر",
  "Describe your situation and receive what relates to it from the Quran and the Sunnah — plus 23 Quranic themes and what to say at each step of worship.":
    "صِفْ حالك ليُعرض عليك ما يتعلق به من القرآن والسنة — ومعه ثلاثة وعشرون معنًى قرآنيًا، وما يُقال في كل خطوة من خطوات العبادة.",
  "Courses & Private Tutoring": "الدورات والدروس الخاصة",
  "Courses &amp; Private Tutoring": "الدورات والدروس الخاصة",
  "Tafsir, Hifz testing, 1-on-1 Quran teaching, Hadith explanation with context, Fiqh, Arabic, and private tutoring.":
    "التفسير، واختبار الحفظ، وتعليم القرآن فرديًا، وشرح الحديث بسياقه، والفقه، والعربية، ودروس خاصة.",

  // ---- Home: recently added ----
  "Recently Added": "أحدث الإضافات",
  "The newest additions to the site — each one written from the source, with its reference and its grading.":
    "أحدث ما أُضيف إلى الموقع — كلُّ مادةٍ مكتوبة من أصلها، ومعها مرجعها ودرجتها.",
  "49 stories, every one found in the text of Sahih al-Bukhari or Sahih Muslim before it was written here — none from memory. The classical Arabic words in each story are explained in plain modern Arabic and English, and the five stories about the Dajjal are linked together as one series.":
    "تسعٌ وأربعون قصة، كلُّ واحدة وُجدت في نص صحيح البخاري أو صحيح مسلم قبل كتابتها هنا، وليس فيها شيء من الذاكرة. والألفاظ العربية القديمة في كل قصة مشروحة بالعربية المعاصرة وبالإنجليزية، وقصص الدجّال الخمس مرتبطٌ بعضها ببعض كسلسلة واحدة.",
  "Read the Stories": "اقرأ القصص",
  "Fifteen stages in the order they happen: death and the soul, the grave and its questions, the Trumpet, the standing, the seven under the shade, the settling of what people owe each other, the Records, the Scales, the Bridge, and the gates. 64 referenced points and 54 passages of the Quran.":
    "خمس عشرة مرحلة بترتيب وقوعها: الموت والروح، والقبر وسؤاله، والنفخ في الصور، والموقف، والسبعة الذين يُظلّهم الله، والقصاص بين الناس، والصحف، والموازين، والصراط، والأبواب. أربعٌ وستون مسألة موثّقة، وأربعةٌ وخمسون موضعًا من القرآن.",
  "See the Stages": "اطّلع على المراحل",
  "177 Sunnah Practices": "مئة وسبعٌ وسبعون سنة",
  "How the Prophet ﷺ actually lived, across 18 areas of ordinary life — waking, wudu, prayer, food, dress, the mosque, travel, Friday, illness, hardship and the treatment of family, neighbours and animals. Ask a question in Arabic or English and the right practice is found for you.":
    "كيف عاش النبي ﷺ فعلاً، في ثمانية عشر بابًا من أبواب الحياة اليومية — الاستيقاظ والوضوء والصلاة والطعام واللباس والمسجد والسفر والجمعة والمرض والشدّة، ومعاملة الأهل والجيران والحيوان. اسأل بالعربية أو الإنجليزية ويُعرض لك ما يناسبك.",
  "Browse the Sunnah": "تصفّح السنن",
  "What to Say, and When": "ماذا تقول ومتى",
  "Twenty-four steps of worship on the Guidance page: what is said before the prayer, inside it, after it, through the day, and when asking forgiveness — with the Arabic wording, how many times, what it means, and where it comes from.":
    "أربعٌ وعشرون خطوة من خطوات العبادة في صفحة التوجيه: ما يُقال قبل الصلاة، وفيها، وبعدها، وفي عموم اليوم، وعند الاستغفار — مع النص العربي، وعدد المرات، والمعنى، والمرجع.",
  "Open the Worship Reference": "افتح دليل العبادة",
  "Mushaf Page Numbers": "صفحات المصحف",
  "Every surah now shows how many pages it occupies in the 604-page Madani Mushaf, and while reading you are told where each page ends — so what you read on the screen matches the printed Mushaf in your hands.":
    "كل سورة تُظهر الآن عدد صفحاتها في المصحف المدني ذي الأربع والستمائة صفحة، وأثناء القراءة يُبيَّن لك أين تنتهي كل صفحة — ليوافق ما على الشاشة ما بين يديك من المصحف المطبوع.",
  "Open the Quran": "افتح المصحف",
  "94 Full Life Stories": "سِيَر كاملة للجميع",
  "94 lives told in full rather than in summary — all 65 Companions and all 29 Prophets — from before Islam, through the moment of belief, to what changed in them, their greatest hour, and their death. Every source is listed with its rank.":
    "أربعٌ وتسعون سيرة مبسوطة لا مختصرة — الصحابة الخمسة والستون جميعًا والأنبياء التسعة والعشرون — من حالهم قبل الإسلام، إلى لحظة الإيمان، وما تغيّر فيهم، وأعظم مواقفهم، ووفاتهم. وكلُّ مصدرٍ مذكورةٌ درجته.",
  "Read a Full Life": "اقرأ سيرة كاملة",

  "Words of the Prophet ﷺ": "من أقوال النبي ﷺ",
  "A glimpse from our Hadith collection, primarily from Sahih al-Bukhari — the most authentic collection of the Prophet's sayings.":
    "لمحة من مجموعة الأحاديث، أكثرها من صحيح البخاري — أصحّ كتب الحديث في أقوال النبي ﷺ.",
  "View All Hadith": "اطّلع على جميع الأحاديث",
  "Common Questions": "أسئلة شائعة",

  // ---- Home: common questions ----
  "What can I find in the Quran Library?": "ماذا أجد في مكتبة القرآن؟",
  "All 114 surahs with their Arabic names, meanings, number of verses, and whether they were revealed in Makkah or Madinah. Open any surah to read it in Arabic with an English translation, choose from 16 reciters, and follow along by Mushaf page.":
    "جميع السور الـ114 بأسمائها العربية ومعانيها وعدد آياتها، وهل نزلت بمكة أم بالمدينة. افتح أي سورة لتقرأها بالعربية مع الترجمة الإنجليزية، واختر من ستة عشر قارئًا، وتابع القراءة بصفحات المصحف.",
  "How do I know a hadith here is authentic?": "كيف أعرف أن الحديث هنا صحيح؟",
  "Every hadith on this site carries its grading and names the scholar behind it — \"Sahih — Narrated by al-Bukhari\", \"Sahih — Agreed upon\". Anything outside Sahih al-Bukhari and Sahih Muslim is labelled as such, and material taken from the historical sira is marked as history rather than hadith. Where something well known is not authentic, the site says so on the entry itself.":
    "كل حديث في الموقع مذكورةٌ درجته ومعها اسم من صحّحه — «صحيح — رواه البخاري»، «صحيح — متفق عليه». وما كان خارج الصحيحين نُصّ على ذلك، وما كان من كتب السيرة بُيّن أنه تاريخ لا حديث. وإذا كان الأمر مشهورًا وهو غير ثابت، صرّح الموقع بذلك في موضعه.",
  "What is on the Stories page?": "ماذا في صفحة القصص؟",
  "49 moments from the life of the Prophet ﷺ. Each was located in the text of Sahih al-Bukhari or Sahih Muslim before it was written here, and each carries the Arabic he spoke, the reference, the grading, and what the situation teaches — in both languages.":
    "تسعةٌ وأربعون موقفًا من حياة النبي ﷺ. كلُّ موقف وُجد في نص صحيح البخاري أو صحيح مسلم قبل كتابته هنا، ومعه لفظه العربي ومرجعه ودرجته وما يُستفاد منه — باللغتين.",
  "What does the Day of Judgement page cover?": "ماذا تتناول صفحة يوم القيامة؟",
  "Fifteen stages in the order they occur, from death to the gates, built on 54 passages of the Quran and hadith from the two Sahihs. Where a widely repeated detail sits outside them — the names of the angels of the grave, for instance — the page states that plainly instead of presenting it as settled.":
    "خمس عشرة مرحلة بترتيب وقوعها، من الموت إلى الأبواب، مبنيّة على أربعةٍ وخمسين موضعًا من القرآن وأحاديث الصحيحين. وما اشتُهر من التفاصيل وهو خارجهما — كأسماء ملَكَي القبر مثلاً — تُصرّح الصفحة بذلك ولا تُقدّمه على أنه مقطوعٌ به.",
  "How do I find something for my own situation?": "كيف أجد ما يناسب حالي؟",
  "On the Guidance page, describe what you are going through by typing or speaking, in Arabic or English. The site searches the Quranic themes, the Sunnah, the worship steps, the full Bukhari and Muslim collections, and the lives of the Prophets and Companions, and shows what relates to it with full references. It is not a fatwa — read each verse in its full surah and consult a qualified scholar.":
    "في صفحة التوجيه، اكتب ما تمرّ به أو قله بصوتك، بالعربية أو الإنجليزية. يبحث الموقع في المعاني القرآنية والسنن وخطوات العبادة وصحيحَي البخاري ومسلم كاملين وسِيَر الأنبياء والصحابة، ويعرض لك ما يتعلق بحالك مع مراجعه كاملة. وهذا ليس فتوى — اقرأ كل آية في سورتها كاملة وارجع إلى أهل العلم.",
  "Is the content free to access?": "هل المحتوى مجاني؟",
  "Yes. All content on Islam Is The Way is free, intended for learning, reflection, and sharing knowledge of Islam with others.":
    "نعم. كلُّ ما في «الإسلام هو الطريق» مجاني، غايته التعلّم والتدبّر ونشر العلم بالإسلام.",
  "Houses of Allah Around the World": "بيوت الله في أنحاء العالم",
  "بيوت الله في أنحاء العالم — from Makkah and Madinah to Istanbul, Casablanca and Abu Dhabi.":
    "بيوت الله في أنحاء العالم — من مكة والمدينة إلى إسطنبول والدار البيضاء وأبوظبي.",
  /* ---- The Tadabbur section on the home page (added August 2026) ----
     The site's largest feature had never been named on the home page.

     ONLY the strings with no Arabic beside them belong here. The badge, the
     example label and the two body paragraphs each carry their own Arabic
     twin in the markup, and the English lines that do not are `.en-only`;
     adding those as keys would print the Arabic twice, which is the same
     mistake as translating a `life-head` that already ends in "— مصادر". */
  "Not just what the verse says — why it says it that way":
    "لا ما تقوله الآية فحسب — بل لماذا قالته هكذا",
  "Open the Quran and try it": "افتح المصحف وجرّبه",
  "Browse all 114 surahs": "تصفّح السور المئة والأربع عشرة",

  "Community Reflections": "مشاركات المجتمع",
  "We invite you to share your personal stories, questions, and reflections on faith. Your voice adds to the strength of our community, fostering deeper connection and mutual support.":
    "ندعوك لمشاركة قصصك وأسئلتك وخواطرك في الإيمان. صوتك يزيد مجتمعنا قوة، ويعمّق الصلة والتعاون بيننا.",
  "Recitations Worth Hearing": "تلاوات تستحق السماع",
  "Get Started": "ابدأ الآن",
  "Share a Reflection": "شارك خاطرة",
  "Get in Touch": "تواصل معنا",
  "Questions about a course, a correction to something you read, or an idea to make this site better — we would be glad to hear from you.":
    "سؤال عن دورة، أو تصويب لما قرأت، أو فكرة لتحسين الموقع — يسعدنا تواصلك معنا.",
  "Browse the courses": "تصفّح الدورات",
  "Send feedback": "أرسل ملاحظاتك",

  // ---- Feedback (injected on every page) ----
  "Tell Us What You Think": "قل لنا رأيك",
  "💬 Tell Us What You Think": "💬 قل لنا رأيك",
  "Found a mistake in a reference, a word translated wrongly, or something that would make this site better? Tell us — every message is read.":
    "وجدتَ خطأً في مرجع، أو ترجمةً غير دقيقة، أو عندك فكرة تُحسّن الموقع؟ اكتب لنا — كل رسالة تُقرأ.",
  "Describe the problem or your suggestion…  |  اكتب الملاحظة أو الاقتراح…":
    "اكتب الملاحظة أو الاقتراح…",
  "Knowledge That Brings Peace to the Heart": "علمٌ تطمئن به القلوب",
  "Indeed, With Hardship Comes Ease": "إنّ مع العسر يسرًا",

  // ---- Quran page ----
  "The Quran Library": "مكتبة القرآن الكريم",
  "All 114 surahs in one place. Search by name or meaning, filter by Makkah or Madinah, and open any surah to read it in Arabic with an English translation.":
    "سور القرآن الكريم الـ114 في مكان واحد. ابحث بالاسم أو بالمعنى، وصنّف المكية والمدنية، وافتح أي سورة لتقرأها بالعربية مع الترجمة الإنجليزية.",
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
  "Try:": "جرّب:",
  "Type a name below — such as \"Musa\", \"Ibrahim\", \"Abu Bakr\", or \"عائشة\" — and see a summary with its references.":
    "اكتب اسمًا بالأسفل — مثل «موسى» أو «إبراهيم» أو «أبو بكر» أو «عائشة» — لتظهر لك نبذةٌ مع مراجعها.",
  "Muhammad ﷺ": "محمد ﷺ",
  "Ibrahim": "إبراهيم",
  "Musa": "موسى",
  "Yusuf": "يوسف",
  "Abu Bakr": "أبو بكر",
  "Prophet": "نبيّ",
  "Companion (Sahabi)": "صحابيّ",

  // ---- Speech / voice notice ----
  "No Arabic voice is installed on this device.": "لا يوجد صوت عربي مثبّت على هذا الجهاز.",
  "A note:": "تنبيه:",
  "not a fatwa": "ليست فتوى",
  "The meaning of the hadith above": "معنى الحديث المذكور أعلاه",
  "How these were chosen:": "طريقة الاختيار:",
  "How this page handles its sources:": "طريقة التوثيق في هذه الصفحة:",
  "outside": "خارج",

  // ---- Login page ----
  "Staff members can sign in below to manage content. Everyone else can browse the site freely — no account is needed.":
    "يمكن لأعضاء الفريق تسجيل الدخول لإدارة المحتوى. وأما الزوّار فيتصفّحون الموقع بحرية دون حساب.",
  "For site administrators and instructors only.": "لمديري الموقع والمعلّمين فقط.",
  "No password needed. Browse the Quran, Prophets, Companions, Hadith and Guidance freely.":
    "لا حاجة لكلمة مرور. تصفّح القرآن والأنبياء والصحابة والحديث والتوجيه بحرية.",
  "Note:": "ملاحظة:",

  // ---- Sunnah page ----
  "Sunnah": "السنة",
  "The Sunnah of the Prophet ﷺ": "سنة النبي ﷺ",
  "How the Prophet Muhammad ﷺ actually lived — how he prayed, slept, ate, washed, travelled, and treated his family and everyone around him. Every practice here carries its source.":
    "هدي النبي محمد ﷺ العملي — كيف كان يصلي وينام ويأكل ويتطهر ويسافر، وكيف كان يعامل أهله والناس. كل سنة مذكورة بمرجعها.",
  // ---- Golden Age page ----
  // The figure cards carry their own Arabic in golden.js; these are the page
  // furniture around them.
  "Algebra, optics, surgery, the hospital, the university — who built them, what Europe did with them, and whose name ended up on them.":
    "الجبر والبصريات والجراحة والبيمارستان والجامعة — من بناها، وماذا صنعت بها أوروبا، وباسم مَن قُيِّدت.",
  "Each card carries the name Europe used for him, because a student can study his subject for years under that name and never learn he was a Muslim.":
    "في كلّ بطاقةٍ الاسم الذي دعته به أوروبا، لأنّ الطالب قد يدرس فنّه سنين بذلك الاسم ولا يعلم قطّ أنه مسلم.",
  /* The tab labels, the section headings and "Known in Europe as" are NOT keys
     here on purpose. They live inside .en-only spans (or carry an emoji, which
     stops the exact-string match anyway), so Arabic mode already hides them and
     shows the Arabic twin beside them — the same bilingual heading pattern the
     rest of the site uses. Adding "Mathematics", "Chemistry", "Astronomy" and
     the like as keys would have translated those bare words in EVERY text node
     on EVERY page, which is the same class of accident as the duplicate-key
     trap: a key added for one page quietly changing another. */
  "So what happened to us — and how do we go back?": "فماذا جرى لنا — وكيف نعود؟",
  "That question deserves more than a page of pride. The answer is on the Guidance page, in the words of the Quran, the Sunnah and the scholars: why the ummah is in the state it is in, what the Prophet ﷺ said would cause exactly this, and the way back that he named.":
    "وهذا السؤال أكبر من أن تُجاب عنه صفحةُ افتخار. والجواب في صفحة التوجيه، من الكتاب والسنة وكلام أهل العلم: لماذا صارت الأمة إلى ما صارت إليه، وما الذي أخبر النبي ﷺ أنه يورث هذا بعينه، والطريق الذي سمّاه للرجوع.",
  "Nothing matches those words.": "لا يوجد ما يطابق هذه الكلمات.",
  "Why we fell, and the way back": "لماذا سقطنا وكيف نعود",
  "See What We Built": "انظر ماذا بنينا",
  "41 of the men and women who built it — algebra, optics, surgery, the hospital, the university — with the Latinised name Europe gave each of them, what Europe built on their work, and the documented cases where the credit went elsewhere. Every claim says how strong its evidence is, the same way every hadith on this site does.":
    "واحدٌ وأربعون من الرجال والنساء الذين بنوه — الجبر والبصريات والجراحة والبيمارستان والجامعة — ومع كلٍّ منهم الاسم اللاتيني الذي سمّته به أوروبا، وما بنته أوروبا على عمله، والمواضع الموثّقة التي ذهب فيها الفضل إلى غيره. وكلّ دعوى مقرونةٌ بدرجة قوّتها، كما يُصنع مع كلّ حديثٍ في هذا الموقع.",
  // ---- Gradings ----
  // These appear on hundreds of cards. They are their own text nodes, so an
  // exact entry here translates every one of them site-wide. The owner's rule
  // is that the grading names the scholar — so does the Arabic.
  "Sahih — Agreed upon (al-Bukhari and Muslim)": "صحيح — متفق عليه (البخاري ومسلم)",
  "Sahih — Narrated by al-Bukhari": "صحيح — رواه البخاري",
  // Gradings used on the Angels page, where a point may be Quran, hadith, or
  // explicitly neither. NOTE: a bare "Quran" is deliberately NOT a key here —
  // it already exists as the navigation label, and adding it a second time
  // silently overwrote the nav link with the wrong wording.
  "Not established": "غير ثابت",
  "Quran; and Sahih — Agreed upon (al-Bukhari and Muslim)": "قرآن؛ وصحيح — متفق عليه (البخاري ومسلم)",
  "Quran; the size description is outside the two Sahihs": "قرآن؛ ووصف العِظَم خارج الصحيحين",
  "Quran and Sahih for the name; the rain and provision: outside the two Sahihs":
    "قرآن وصحيح في الاسم؛ وأما المطر والرزق فخارج الصحيحين",
  "Quran for the description; the name 'Azrail' is NOT established":
    "قرآن في الوصف؛ واسم «عزرائيل» غير ثابت",
  "Sahih and Quran for everything above except where the entry says otherwise":
    "صحيح وقرآن في كل ما تقدّم إلا ما نُصّ على خلافه",
  "The description is Quran. The NAME is not established": "الوصف قرآن، وأما الاسم فغير ثابت",
  "The questioning: Sahih. The names: outside the two Sahihs": "السؤال صحيح، وأما الاسمان فخارج الصحيحين",
  "When:": "متى:",
  "🎤 I speak English": "🎤 أتحدث الإنجليزية",
  "Settings → Time & language → Language & region → add Arabic → Language options → Speech":
    "الإعدادات ← الوقت واللغة ← اللغة والمنطقة ← أضف العربية ← خيارات اللغة ← الكلام",
  "Sahih — Narrated by Muslim": "صحيح — رواه مسلم",
  "Sahih — established in the collections": "صحيح — ثابت في كتب السنة",
  "Sahih — authenticated in the collections": "صحيح — ثابت في كتب السنة",
  "Strong — established in the collections": "قويّ — ثابت في كتب السنة",
  "Strong — authenticated by al-Albani": "قويّ — صحّحه الألباني",
  "Sahih — authenticated by al-Albani": "صحيح — صحّحه الألباني",
  "Strong — graded Strong by the scholars of hadith": "قويّ — قوّاه أهل الحديث",
  "Sahih — Narrated by al-Bukhari and at-Tirmidhi": "صحيح — رواه البخاري والترمذي",
  "Sahih — Narrated by Muslim; also at-Tirmidhi": "صحيح — رواه مسلم، ورواه الترمذي أيضًا",
  "Sahih — Narrated by at-Tirmidhi; authenticated by al-Albani": "صحيح — رواه الترمذي، وصحّحه الألباني",
  "Sahih — Narrated by at-Tirmidhi; graded Sahih by at-Tirmidhi and al-Albani": "صحيح — رواه الترمذي، وصحّحه الترمذي والألباني",
  "Strong — Narrated by at-Tirmidhi; graded Strong by at-Tirmidhi": "قويّ — رواه الترمذي، وحسّنه الترمذي",
  "Strong — Narrated by at-Tirmidhi; graded Strong by al-Albani": "قويّ — رواه الترمذي، وحسّنه الألباني",
  "Strong — Narrated by at-Tirmidhi and Malik; graded Strong by at-Tirmidhi and an-Nawawi": "قويّ — رواه الترمذي ومالك، وحسّنه الترمذي والنووي",
  "Sahih — Narrated by Abu Dawud and at-Tirmidhi; authenticated by al-Albani": "صحيح — رواه أبو داود والترمذي، وصحّحه الألباني",
  "Strong — Narrated by Abu Dawud and at-Tirmidhi; graded Strong by an-Nawawi": "قويّ — رواه أبو داود والترمذي، وحسّنه النووي",
  "Sahih — Narrated by Ibn Majah; authenticated by as-Suyuti and al-Albani": "صحيح — رواه ابن ماجه، وصحّحه السيوطي والألباني",
  "Sahih — Narrated by Ibn Majah and Ahmad; authenticated by al-Albani": "صحيح — رواه ابن ماجه وأحمد، وصحّحه الألباني",
  "Strong — Narrated by Ibn Majah and Malik; authenticated by al-Albani": "قويّ — رواه ابن ماجه ومالك، وصحّحه الألباني",
  "Strong — Narrated by at-Tabarani; graded Strong by al-Albani": "قويّ — رواه الطبراني، وحسّنه الألباني",
  "Sahih — Narrated by al-Hakim; authenticated by al-Hakim and al-Albani": "صحيح — رواه الحاكم، وصحّحه الحاكم والألباني",
  "Sahih — Narrated by al-Bukhari; the second by at-Tirmidhi (authenticated)": "صحيح — رواه البخاري، والثاني رواه الترمذي وصُحّح",
  "Sahih — Narrated by al-Bukhari; the dua graded Strong": "صحيح — رواه البخاري، والدعاء قويّ",
  "Sahih — Narrated by al-Bukhari; the manner graded Strong": "صحيح — رواه البخاري، وصفة الفعل قويّة",
  "Sahih — Narrated by Muslim; the reward narration graded Strong": "صحيح — رواه مسلم، ورواية الأجر قويّة",
  "Sahih — Narrated by Muslim; the description of the Dajjal is agreed upon (al-Bukhari and Muslim)": "صحيح — رواه مسلم، ووصف الدجال متفق عليه (البخاري ومسلم)",
  "Sahih — Narrated by al-Bukhari (for reciting it before sleep); the practice after each prayer is Strong — Narrated by an-Nasa'i, authenticated by al-Albani":
    "صحيح — رواه البخاري (في قراءتها عند النوم)، وأما بعد كل صلاة فقويّ — رواه النسائي وصحّحه الألباني",
  "The words themselves are Quran. The hadith recommending them: Strong — Narrated by at-Tirmidhi, authenticated by al-Albani; not in the two Sahihs":
    "الكلمات نفسها قرآن. وأما الحديث في الدعاء بها فقويّ — رواه الترمذي وصحّحه الألباني، وليس في الصحيحين",
  "Strong — Narrated by Abu Dawud and at-Tirmidhi, authenticated by al-Albani (for the morning and evening); Sahih — Narrated by al-Bukhari (for before sleeping)":
    "قويّ — رواه أبو داود والترمذي وصحّحه الألباني (في الصباح والمساء)؛ وصحيح — رواه البخاري (في قراءتها عند النوم)",
  "Strong — Narrated by an-Nasa'i, authenticated by al-Albani; not in the two Sahihs":
    "قويّ — رواه النسائي وصحّحه الألباني، وليس في الصحيحين",

  "before sleeping": "قبل النوم",
  "how to make wudu": "كيف أتوضأ",
  "eating": "الطعام",
  "entering the mosque": "دخول المسجد",
  "when I am sad": "عند الحزن",
  "All": "الكل"
};

/* Reference lines like "Sahih al-Bukhari, Book of Wudu, Hadith 247" or
   "Surah Al-Baqarah (2:25)" are built from a few repeating pieces. Translating
   those pieces covers every reference on the site without listing them all. */
const AR_PARTS = [
  /* Narrators and the bare collection names that appear in the newer
     citation lines. Without these a reference translated only halfway —
     "صحيح مسلم, كتاب Fitan — Hudhayfah ibn Usayd al-Ghifari" — which is
     worse to read than leaving it in English. Narrators go FIRST so a
     name is matched before any shorter pattern can cut into it. */
  /* Narrator names still rendering in English on the hadith page, counted in
     Arabic mode. `Omar` and `Osman` are spelled with an O throughout this
     site's data by the owner's instruction, so the AR_PARTS entries keyed on
     `Umar`/`Uthman` never matched them — "رواه Omar ibn al-Khattab".
     Longest first, as everywhere in this array. */
  [/\bAbdullah ibn Amr ibn al-As\b/g, "عبد الله بن عمرو بن العاص"],
  [/\bAbu Barzah al-Aslami\b/g, "أبو برزة الأسلمي"],
  [/\bAbu Dharr al-Ghifari\b/g, "أبو ذرّ الغفاري"],
  [/\bOmar ibn al-Khattab\b/g, "عمر بن الخطاب"],
  [/\bAbdullah ibn Mas'ud\b/g, "عبد الله بن مسعود"],
  [/\bJabir ibn Abdullah\b/g, "جابر بن عبد الله"],
  [/\bJarir ibn Abdullah\b/g, "جرير بن عبد الله"],
  [/\bAbdullah ibn Abbas\b/g, "عبد الله بن عباس"],
  [/\bAisha bint Abu Bakr\b/g, "عائشة بنت أبي بكر"],
  [/\bImran ibn Husayn\b/g, "عمران بن حصين"],
  [/\bJubayr ibn Mut'im\b/g, "جبير بن مطعم"],
  [/\bAbdullah ibn Omar\b/g, "عبد الله بن عمر"],
  [/\bAbdullah ibn Amr\b/g, "عبد الله بن عمرو"],
  [/\bOsman ibn Affan\b/g, "عثمان بن عفان"],
  [/\bIbn Omar\b/g, "ابن عمر"],
  [/\bby at-Tabarani\b/g, "الطبراني"],

  [/\bHudhayfah ibn Usayd al-Ghifari\b/g, "حذيفة بن أسيد الغفاري"],
  [/\bAbu Sa'id al-Khudri\b/g, "أبو سعيد الخدري"],
  [/\bAbdullah ibn Umar\b/g, "عبد الله بن عمر"],
  [/\bUbayy ibn Ka'b\b/g, "أُبيّ بن كعب"],
  [/\bSahl ibn Sa'd\b/g, "سهل بن سعد"],
  [/\bAbu Hurairah\b/g, "أبو هريرة"],
  [/\bIbn Mas'ud\b/g, "ابن مسعود"],
  [/\bIbn Abbas\b/g, "ابن عباس"],
  /* The full name must precede the short one, or "Anas ibn Malik" comes out
     as "أنس ibn Malik" — the bare pattern fires first and leaves the rest. */
  [/\bAnas ibn Malik\b/g, "أنس بن مالك"],
  [/\bAnas\b/g, "أنس"],
  [/\bAishah\b/g, "عائشة"],
  [/\bUmar ibn al-Khattab\b/g, "عمر بن الخطاب"],

  [/\bBook of Fitan\b/g, "كتاب الفتن"],
  [/\bBook of Qasamah\b/g, "كتاب القسامة"],
  [/\bBook of Repentance\b/g, "كتاب التوبة"],
  [/\bBook of Paradise\b/g, "كتاب الجنة"],
  [/\bBook of Zakat\b/g, "كتاب الزكاة"],
  [/\bBook of Faith\b/g, "كتاب الإيمان"],

  [/\boutside the two Sahihs\b/gi, "خارج الصحيحين"],

  [/\bSurah\b/g, "سورة"],
  [/\bSahih al-Bukhari\b/g, "صحيح البخاري"],
  [/\bSahih Muslim\b/g, "صحيح مسلم"],
  [/\bJami at-Tirmidhi\b/g, "جامع الترمذي"],
  [/\bSunan Abu Dawud\b/g, "سنن أبي داود"],
  [/\bSunan an-Nasa'i\b/g, "سنن النسائي"],
  [/\bSunan Ibn Majah\b/g, "سنن ابن ماجه"],
  [/\bMusnad Ahmad\b/g, "مسند أحمد"],
  [/\bMuwatta Imam Malik\b/g, "موطأ الإمام مالك"],
  [/\bMustadrak al-Hakim\b/g, "مستدرك الحاكم"],
  [/\bAl-Mu'jam al-Awsat\b/g, "المعجم الأوسط"],
  // Histories and sira — these are NOT hadith collections, and the site marks
  // them as such. Their names were showing in English on the Arabic pages.
  [/\bMusannaf Ibn Abi Shaybah\b/g, "مصنّف ابن أبي شيبة"],
  [/\bIbn Kathir, Al-Bidaya wan-Nihaya\b/g, "ابن كثير، البداية والنهاية"],
  [/\bIbn Kathir, Stories of the Prophets\b/g, "ابن كثير، قصص الأنبياء"],
  [/\bAl-Bidaya wan-Nihaya\b/g, "البداية والنهاية"],
  /* Must come BEFORE the bare "Stories of the Prophets" below, or that rule
     fires first and leaves "كتاب the قصص الأنبياء" stranded on the page. */
  [/Book of the Stories of the Prophets/g, "كتاب أحاديث الأنبياء"],
  [/\bStories of the Prophets\b/g, "قصص الأنبياء"],
  [/\bIbn Kathir\b/g, "ابن كثير"],
  [/\bIbn Ishaq\b/g, "ابن إسحاق"],
  [/\bIbn Sa'd, Tabaqat\b/g, "ابن سعد، الطبقات"],
  [/\bIbn Sa'd\b/g, "ابن سعد"],
  [/\bTabaqat\b/g, "الطبقات"],
  [/\bat-Tabari\b/g, "الطبري"],
  /* These compounds MUST precede the bare "historical sira" and "historical
     accounts" rules. When they did not, the shorter rule fired first and left
     the tail stranded in English — "سيرة تاريخية accounts", 24 times on the
     companions page alone. Longest first, the same discipline as everywhere
     else in this array. */
  [/\bthe incident is from historical sira accounts\b/g, "الخبر من روايات السيرة التاريخية"],
  [/\bhistorical and biographical accounts\b/g, "روايات تاريخية وكتب تراجم"],
  [/\bhistorical and Israiliyyat accounts\b/g, "روايات تاريخية وإسرائيليات"],
  [/\btafsir and historical accounts\b/g, "تفسير وروايات تاريخية"],
  [/\bhistorical sira accounts\b/g, "روايات السيرة التاريخية"],
  [/\bhistorical accounts differ\b/g, "تختلف الروايات التاريخية"],
  [/\bhistorical accounts only\b/g, "روايات تاريخية فقط"],
  [/\bthe accounts differ\b/g, "تختلف الروايات"],
  [/\bhistorical sira, not hadith\b/g, "سيرة تاريخية لا حديث"],
  [/\bhistorical sira\b/g, "سيرة تاريخية"],
  [/\boutside the two Sahihs\b/g, "خارج الصحيحين"],
  // The full phrase must come before the bare "the two Sahihs" below it,
  // or that rule fires first and leaves "Outside الصحيحين".
  [/\bOutside the two Sahihs\b/g, "خارج الصحيحين"],
  [/\bthe two Sahihs\b/g, "الصحيحين"],
  /* Every remaining "Book of X" that was still rendering in English inside an
     otherwise Arabic reference — collected by sweeping all seven content
     pages in Arabic mode and listing what came out as "كتاب <English>".
     Longest first, as with everything else in this list. */
  [/Book of Holding Fast to the Book and the Sunnah/g, "كتاب الاعتصام بالكتاب والسنة"],
  [/Book of Softening the Hearts \(ar-Riqaq\)/g, "كتاب الرقاق"],
  [/Book of the Virtues of the Prophet ﷺ/g, "كتاب المناقب"],
  [/Book of Cultivation and Sharecropping/g, "كتاب المزارعة"],
  [/Book of Permission \(on the midday rest\)/g, "كتاب الاستئذان"],
  [/Book of Purification \(Kitab at-Taharah\)/g, "كتاب الطهارة"],
  [/Book of Greetings \(Kitab as-Salam\)/g, "كتاب السلام"],
  [/Book of Paradise \(Kitab al-Jannah\)/g, "كتاب الجنة"],
  [/Book of the Companions of the Prophet/g, "كتاب فضائل أصحاب النبي"],
  [/Book of Virtue \(Kitab al-Birr\)/g, "كتاب البر والصلة"],
  [/Book of the Beginning of Revelation/g, "كتاب بدء الوحي"],
  [/Book of the Beginning of Creation/g, "كتاب بدء الخلق"],
  [/Book of the Military Expeditions/g, "كتاب المغازي"],
  [/Book of the Prayer of Travellers/g, "كتاب صلاة المسافرين"],
  [/Book of Softening the Hearts/g, "كتاب الرقاق"],
  [/Book of the Virtues of Madinah/g, "كتاب فضائل المدينة"],
  [/Book of the Virtues of the Ansar/g, "كتاب مناقب الأنصار"],
  [/Book of the Merits of the Ansar/g, "كتاب مناقب الأنصار"],
  /* THESE FOUR ARE ORDERING FIXES, and they must stay above the shorter
     patterns that follow them. Each of these long titles was already in this
     array — but further DOWN it, below its own prefix. So the prefix matched
     first and left the tail in English on the Arabic hadith page:

       "Book of Food and Drink"            → "كتاب الأطعمة و Drink"
       "Book of Remembrance and Supplication" → "كتاب الذكر والدعاء Supplication"
       "Book of Dress (Al-Libas)"          → "كتاب اللباس (Al-Libas)"

     This is the trap already written up in the handoff — the full name must
     always precede the short one — caught a second time, silently, exactly as
     that note warns. The now-unreachable copies lower down are left in place
     rather than deleted, so the array stays a single ordered list. */
  [/Book of Remembrance and Supplication/g, "كتاب الذكر والدعاء"],
  [/Book of Dress and Adornment/g, "كتاب اللباس والزينة"],
  [/Book of Dress \(Al-Libas\)/g, "كتاب اللباس"],
  [/Book of Food and Drink/g, "كتاب الأطعمة والأشربة"],
  [/\bTamim ad-Dari\b/g, "تميم الداري"],

  [/Book of Remembrance/g, "كتاب الذكر والدعاء"],
  [/Book of Purification/g, "كتاب الطهارة"],
  [/Book of Oppressions/g, "كتاب المظالم"],
  [/Book of Invocations/g, "كتاب الدعوات"],
  [/Book of the Prophets/g, "كتاب أحاديث الأنبياء"],
  [/Book of Bequests/g, "كتاب الوصايا"],
  [/Book of Marriage/g, "كتاب النكاح"],
  [/Book of Tahajjud/g, "كتاب التهجد"],
  [/Book of Patients/g, "كتاب المرضى"],
  [/Book of Destiny/g, "كتاب القدر"],
  [/Book of Tafsir/g, "كتاب التفسير"],
  [/Book of Tawhid/g, "كتاب التوحيد"],
  [/Book of Prophets/g, "كتاب أحاديث الأنبياء"],
  [/Book of Ar-Riqaq/g, "كتاب الرقاق"],
  [/Book of Jizyah/g, "كتاب الجزية"],
  [/Book of Qadar/g, "كتاب القدر"],
  [/Book of Salat/g, "كتاب الصلاة"],
  [/Book of Gifts/g, "كتاب الهبة"],
  [/Book of Dress/g, "كتاب اللباس"],
  [/Book of Food/g, "كتاب الأطعمة"],
  // Book titles inside references, longest first so they match before the
  // shorter words they contain.
  /* Added for the Golden Age, the revival section and the new stories. These
     MUST sit above the catch-all [/\bBook of\b/ → "كتاب"] at the bottom of
     this list — without them the catch-all fires on its own and leaves
     half-Arabic references on the page, like "كتاب Battles (al-Malahim)". */
  [/Book of Tribulations and the Portents of the Last Hour/g, "كتاب الفتن وأشراط الساعة"],
  /* The full-lives citations use two more wordings for the same book, and both
     were falling through to the catch-all as "كتاب the Merits of the
     Companions". Counted in Arabic mode on the companions page: 8 and 3. */
  [/Book of the Merits of the Companions/g, "كتاب فضائل الصحابة"],
  [/Book of the Companions/g, "كتاب فضائل الصحابة"],
  [/Book of the Virtues of the Companions/g, "كتاب فضائل الصحابة"],
  [/Book of Virtue and Good Manners/g, "كتاب البر والصلة والآداب"],
  [/Book of Transactions \(al-Buyu'\)/g, "كتاب البيوع"],
  [/Book of Prayer of Travellers/g, "كتاب صلاة المسافرين"],
  [/Book of Prescribed Punishments/g, "كتاب الحدود"],
  [/Book of Dhikr and Supplication/g, "كتاب الذكر والدعاء"],
  [/Book of Belief \(Kitab al-Iman\)/g, "كتاب الإيمان"],
  [/Book of Funerals \(al-Jana'iz\)/g, "كتاب الجنائز"],
  [/Book of Battles \(al-Malahim\)/g, "كتاب الملاحم"],
  [/Book of Dress and Adornment/g, "كتاب اللباس والزينة"],
  [/Book of Marriage \(an-Nikah\)/g, "كتاب النكاح"],
  [/Book of Manners \(al-Adab\)/g, "كتاب الأدب"],
  [/Book of the Call to Prayer/g, "كتاب الأذان"],
  [/Book of Afflictions/g, "كتاب الفتن"],
  [/Book of Medicine/g, "كتاب الطب"],
  [/Book of Fasting/g, "كتاب الصيام"],
  [/Book of Prayers/g, "كتاب الصلاة"],
  [/Book of Oaths/g, "كتاب الأيمان"],
  [/Book of Adhan/g, "كتاب الأذان"],
  // Trailing narrator and grading phrases that appear on the same lines.
  [/\bnarrated from Ibn Umar\b/g, "من حديث ابن عمر"],
  [/\bnarrated from Thawban\b/g, "من حديث ثوبان"],
  [/\bnarrated from\b/g, "من حديث"],
  [/\balso narrated by\b/g, "ورواه أيضًا"],
  [/\bnarrated by Ahmad\b/g, "رواه أحمد"],
  [/\bnarrated by\b/g, "رواه"],
  [/\bgraded weak by\b/g, "وضعّفه"],
  [/\bThe scholars differ\b/g, "والخلاف فيه ثابت"],
  [/Book of the Virtues of the Quran/g, "كتاب فضائل القرآن"],
  [/Book of the Description of the Day of Judgment/g, "كتاب صفة القيامة"],
  [/Book of Limits and Punishments/g, "كتاب الحدود"],
  [/Book of Good Manners \(Al-Adab\)/g, "كتاب الأدب"],
  [/Book of Merits of the Companions/g, "كتاب فضائل الصحابة"],
  [/Book of Travellers' Prayer/g, "كتاب صلاة المسافرين"],
  [/Book of Remembrance and Supplication/g, "كتاب الذكر والدعاء"],
  [/Book of Heart Softeners/g, "كتاب الرقاق"],
  [/Book of Food and Drink/g, "كتاب الأطعمة والأشربة"],
  [/Book of Good Manners/g, "كتاب الأدب"],
  [/Book of Supplications/g, "كتاب الدعوات"],
  [/Book of Righteousness/g, "كتاب البر والصلة"],
  [/Book of Revelation/g, "كتاب بدء الوحي"],
  [/Book of Tribulations/g, "كتاب الفتن"],
  [/Book of Monotheism/g, "كتاب التوحيد"],
  [/Book of Asceticism/g, "كتاب الزهد"],
  [/Book of Adornment/g, "كتاب الزينة"],
  [/Book of Funerals/g, "كتاب الجنائز"],
  [/Book of Knowledge/g, "كتاب العلم"],
  [/Book of Mosques/g, "كتاب المساجد"],
  [/Book of the Sunnah/g, "كتاب السنة"],
  [/Book of Manners/g, "كتاب الأدب"],
  [/Book of Prayer/g, "كتاب الصلاة"],
  [/Book of Drinks/g, "كتاب الأشربة"],
  [/Book of Jumu'ah/g, "كتاب الجمعة"],
  [/Book of Sales/g, "كتاب البيوع"],
  [/Book of Faith/g, "كتاب الإيمان"],
  [/Book of Zakat/g, "كتاب الزكاة"],
  [/Book of Wudu/g, "كتاب الوضوء"],
  [/Book of Hajj/g, "كتاب الحج"],
  [/Book of Dress \(Al-Libas\)/g, "كتاب اللباس"],
  [/Book of Virtues/g, "كتاب الفضائل"],
  [/Book of Jihad/g, "كتاب الجهاد"],
  [/\bBook of\b/g, "كتاب"],
  [/\bHadith\b/g, "حديث"],
  [/\bNarrated by\b/g, "رواه"],
  [/\bAgreed upon\b/g, "متفق عليه"],
  [/\bauthenticated by\b/g, "صححه"],
  [/\bgraded Strong by\b/g, "حسّنه"],
  [/\bgraded Sahih by\b/g, "صححه"],
  [/\bestablished in the collections\b/g, "ثابت في كتب السنة"],
  [/\bthe scholars of hadith\b/g, "أهل الحديث"],
  [/\bStrong\b/g, "قوي"],
  [/\bReferences:/g, "المراجع:"],
  [/\bReference:/g, "المرجع:"],
  [/\bal-Albani\b/g, "الألباني"],

  /* The Tadabbur sections cite Ar-Raghib's Al-Mufradat by root and page, and
     none of those pieces were translatable, so nine citations sat in English
     on an Arabic page. The longest patterns come first, as everywhere here. */
  [/\bAr-Raghib al-Isfahani\b/g, "الراغب الأصفهاني"],
  [/\bAl-Mufradat fi Gharib al-Quran\b/g, "المفردات في غريب القرآن"],
  [/\bAl-Mufradat\b/g, "المفردات"],
  [/Shamela ed\., p\./g, "ط. الشاملة، ص"],
  [/\bentry\b/g, "مادّة"],
  [/\bcompare\b/gi, "وقارِن"],

  /* These two belong with the group below, not above it: they are substrings
     of "Sunan an-Nasa'i" and "Sunan Abu Dawud", which are matched earlier in
     this array. Putting them any higher would stop the full names matching. */
  /* THE GRADING WORDS THEMSELVES — the last English left in an otherwise
     Arabic citation, and the most important words on the line, because how
     strong a source is is the thing this site promises to state every time.

     Counted in Arabic mode across the 94 full lives: "Sahih" 116 times,
     "agreed upon" 41, "historical accounts" 36, "Quran" 10. The bare words
     must sit here, at the very bottom: "Sahih" above would cut into
     "Sahih al-Bukhari", and "Quran" above would cut into
     "Book of the Virtues of the Quran". */
  [/\bJami' at-Tirmidhi\b/g, "جامع الترمذي"],
  [/\breported in the biographical works\b/g, "مذكور في كتب التراجم"],
  [/\bhistorical accounts of his life\b/g, "روايات تاريخية عن حياته"],
  [/\bhistorical accounts\b/g, "روايات تاريخية"],
  [/\bin Ibn Hisham's Sira\b/g, "في سيرة ابن هشام"],
  [/\bIbn Hisham\b/g, "ابن هشام"],
  [/\bIbn Majah\b/g, "ابن ماجه"],
  [/\bal-Hakim\b/g, "الحاكم"],
  [/\bagreed upon\b/g, "متفق عليه"],
  [/\bnot hadith\b/g, "لا حديث"],

  [/\ban-Nasa'i\b/g, "النسائي"],
  [/\bAbu Dawud\b/g, "أبو داود"],
  [/\bat-Tirmidhi\b/g, "الترمذي"],
  [/\bal-Bukhari\b/g, "البخاري"],
  [/\bMuslim\b/g, "مسلم"],
  [/\bSahih\b/g, "صحيح"],
  [/\bQuran\b/g, "قرآن"],
  [/\bsira\b/g, "سيرة"],
  [/\band\b/g, "و"]
];

/* ---------- Surah names, generated from the data ----------
   References were coming out half-translated on every page that cites a
   verse — "سورة Aal-Imran (3:165)", "سورة At-Tawbah (9:40)". There are 114
   surahs and hand-typing them into AR_PARTS would guarantee typos and drift
   from the Quran page, so they are generated from SURAHS in data.js, which
   already carries the Arabic name of every one.

   Two safety points:
   • The rules match "سورة <EnglishName>", not the bare name. By the time
     these run, [/\bSurah\b/ → "سورة"] has already fired, so the Arabic word
     is the anchor. That stops a name like "An-Nur" or "Ali 'Imran" being
     replaced where it appears in ordinary prose rather than in a citation.
   • Longest name first, so "Al-Ma'idah" cannot be partly eaten by a shorter
     name that is a prefix of it.

   Built once, lazily, and only if data.js actually loaded — pages that do
   not include it simply keep the old behaviour rather than erroring. */
/* The lookup is keyed on a NORMALISED name rather than the exact spelling,
   because the references were written over many sessions and do not spell
   the transliterations the same way the SURAHS array does:

       data "Ali 'Imran"  ·  refs "Aal-Imran" and "Al-Imran"
       data "Ash-Shuraa"  ·  refs "Ash-Shura"
       data "An-Naziat"   ·  refs "An-Nazi'at"

   Normalising strips everything that is not a letter, lowercases, and then
   collapses doubled letters — which makes all three pairs above land on the
   same key without anyone having to go and re-spell 114 names by hand. */
function iitwNormSurah(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/(.)\1+/g, "$1");
}

let iitwSurahMap = null;
function iitwGetSurahMap() {
  if (iitwSurahMap) return iitwSurahMap;
  iitwSurahMap = {};
  if (typeof SURAHS === "undefined") return iitwSurahMap;
  SURAHS.forEach(s => { iitwSurahMap[iitwNormSurah(s.name)] = s.arabic; });
  return iitwSurahMap;
}

function iitwTranslateReference(text) {
  let out = text;
  AR_PARTS.forEach(([re, rep]) => { out = out.replace(re, rep); });

  /* By this point [/\bSurah\b/ → "سورة"] has already fired, so the Arabic
     word is the anchor: only a name that is actually part of a citation is
     touched, never one that happens to appear in ordinary prose. The name
     runs up to the opening bracket of the verse number, or to the end. */
  const map = iitwGetSurahMap();
  out = out.replace(/سورة\s+([A-Za-z][A-Za-z'’’\- ]*?)\s*(?=\(|$|[،,;—])/g,
    (whole, name) => {
      const ar = map[iitwNormSurah(name)];
      return ar ? "سورة " + ar + " " : whole;
    });
  return out;
}

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

/* WHICH ELEMENTS HOLD A SOURCE LINE.
   A reference is only translated ("Sahih al-Bukhari" → "صحيح البخاري",
   "Surah Al-Baqarah" → "سورة البقرة") when its parent matches this. It is
   a hand-written list, which is exactly why it went stale: the Tadabbur,
   Signs and Judgement-detail sections all use `.tad-ref`, that class was
   never added here, and every reference on those sections stayed in English
   on an Arabic page — 16 of them on the Judgement page alone.

   ANY NEW SECTION THAT PRINTS A SOURCE LINE MUST ADD ITS CLASS HERE, or the
   references will silently stay English. `.tad-ref` is the class the newer
   sections use, so prefer it over inventing another one.

   It went stale a SECOND time, and wider than the first. Measured in the
   browser in Arabic mode, 190 of the 240 source lines rendered on the
   companions page were still English, because the class their citations sat
   in was never listed here. `.rv-ev-ref` (the revival evidence on Guidance)
   and `.gold-ref` (the Golden Age points) were missing for the same reason —
   both hold a bare citation, so both are safe to list.

   The full lives are NOT listed, deliberately. Their source lines read
   "<what it supports>: <citation>", and handing a line with English prose in
   it to AR_PARTS mangles the prose — "his trade and lineage" became "his
   trade و lineage". `prophets.html` and `companions.html` therefore split the
   line and wrap only the citation half in `.tad-ref`. The rule this comes
   from is already in the handoff: never put prose in a source field.

   The check that catches this: switch to Arabic and search the rendered page
   for "Sahih al-Bukhari" — in Arabic mode there should be none. */
const IITW_REF_SELECTOR =
  ".refs, .hadith-meta, .ayah-ref, .sunnah-card .refs, .tad-ref, " +
  ".rv-ev-ref, .gold-ref";

function iitwTranslateDom(lang) {
  iitwCollectNodes().forEach(node => {
    if (node._iitwEn === undefined) node._iitwEn = node.nodeValue;
    const original = node._iitwEn;
    const key = original.trim();
    if (lang === "ar") {
      const t = AR[key];
      if (t) {
        node.nodeValue = original.replace(key, t);
      } else if (node.parentElement.closest(IITW_REF_SELECTOR)) {
        // Source lines ("Sahih al-Bukhari, Book of…", "Surah Al-Baqarah (2:25)")
        node.nodeValue = original.replace(key, iitwTranslateReference(key));
      }
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
