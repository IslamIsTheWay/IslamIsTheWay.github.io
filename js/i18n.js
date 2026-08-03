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
  "All 114 surahs with Arabic text, English translation, and 16 reciters to choose from. Every verse carries its page in the 604-page Madani Mushaf.":
    "جميع السور الـ114 بالنص العربي والترجمة الإنجليزية، مع ستة عشر قارئًا تختار بينهم. وكل آية مقرونة بصفحتها في المصحف المدني ذي الأربع والستمائة صفحة.",
  "Hadith Collection": "مجموعة الأحاديث",
  "Complete Sahih al-Bukhari and Sahih Muslim — 15,000+ hadith in Arabic and English, plus 43 chosen ones. Every grading names the scholar behind it.":
    "صحيح البخاري وصحيح مسلم كاملين — أكثر من 15,000 حديث بالعربية والإنجليزية، ومعها ثلاثة وأربعون حديثًا مختارًا. وكل درجةٍ مذكورٌ معها اسم من صحّحها.",
  "The Sunnah in Daily Life": "السنة في الحياة اليومية",
  "166 practices of the Prophet ﷺ across 18 areas of the day — sleeping, eating, washing, travelling, entering the mosque — each with its source.":
    "مئة وستٌّ وستون سنة من هدي النبي ﷺ في ثمانية عشر بابًا من أبواب اليوم — النوم والطعام والطهارة والسفر ودخول المسجد — كلٌّ منها بمرجعها.",
  "Stories of the Prophet ﷺ": "قصص النبي ﷺ",
  "28 moments from his life, every one located in Sahih al-Bukhari or Sahih Muslim before it was written, with the classical words explained.":
    "ثمانية وعشرون موقفًا من حياته ﷺ، كلُّ واحد وُجد في صحيح البخاري أو صحيح مسلم قبل كتابته، مع شرح الألفاظ القديمة الواردة فيه.",
  "14 stages in the order they happen — from the moment of death to the gates — with 58 referenced points and 52 passages of the Quran.":
    "أربع عشرة مرحلة بترتيب وقوعها — من لحظة الموت إلى الأبواب — مع ثمانٍ وخمسين مسألة موثّقة، واثنين وخمسين موضعًا من القرآن الكريم.",
  "The 29 Prophets named in the Quran, from Adam to Muhammad ﷺ, with full life stories for Nuh, Ibrahim, Musa and Isa.":
    "الأنبياء التسعة والعشرون المذكورون في القرآن، من آدم إلى محمد ﷺ، مع سِيَرٍ كاملة لنوح وإبراهيم وموسى وعيسى عليهم السلام.",
  "Companions (Sahaba)": "الصحابة رضي الله عنهم",
  "66 of the men and women who stood beside the Prophet ﷺ, including all eleven Mothers of the Believers — twelve with their full life story.":
    "ستة وستون من الرجال والنساء الذين وقفوا مع النبي ﷺ، ومنهم أمهات المؤمنين الإحدى عشرة جميعًا — واثنا عشر منهم بسيرةٍ كاملة.",
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
  "28 stories, every one found in the text of Sahih al-Bukhari or Sahih Muslim before it was written here — none from memory. The classical Arabic words in each story are explained in plain modern Arabic and English, and the five stories about the Dajjal are linked together as one series.":
    "ثمانٍ وعشرون قصة، كلُّ واحدة وُجدت في نص صحيح البخاري أو صحيح مسلم قبل كتابتها هنا، وليس فيها شيء من الذاكرة. والألفاظ العربية القديمة في كل قصة مشروحة بالعربية المعاصرة وبالإنجليزية، وقصص الدجّال الخمس مرتبطٌ بعضها ببعض كسلسلة واحدة.",
  "Read the Stories": "اقرأ القصص",
  "Fourteen stages in the order they happen: death and the soul, the grave and its questions, the Trumpet, the standing, the seven under the shade, the settling of what people owe each other, the Records, the Scales, the Bridge, and the gates. 58 referenced points and 52 passages of the Quran.":
    "أربع عشرة مرحلة بترتيب وقوعها: الموت والروح، والقبر وسؤاله، والنفخ في الصور، والموقف، والسبعة الذين يُظلّهم الله، والقصاص بين الناس، والصحف، والموازين، والصراط، والأبواب. ثمانٍ وخمسون مسألة موثّقة، واثنان وخمسون موضعًا من القرآن.",
  "See the Stages": "اطّلع على المراحل",
  "166 Sunnah Practices": "مئة وستٌّ وستون سنة",
  "How the Prophet ﷺ actually lived, across 18 areas of ordinary life — waking, wudu, prayer, food, dress, the mosque, travel, Friday, illness, hardship and the treatment of family, neighbours and animals. Ask a question in Arabic or English and the right practice is found for you.":
    "كيف عاش النبي ﷺ فعلاً، في ثمانية عشر بابًا من أبواب الحياة اليومية — الاستيقاظ والوضوء والصلاة والطعام واللباس والمسجد والسفر والجمعة والمرض والشدّة، ومعاملة الأهل والجيران والحيوان. اسأل بالعربية أو الإنجليزية ويُعرض لك ما يناسبك.",
  "Browse the Sunnah": "تصفّح السنن",
  "What to Say, and When": "ماذا تقول ومتى",
  "Sixteen steps of worship on the Guidance page: what is said before the prayer, inside it, after it, through the day, and when asking forgiveness — with the Arabic wording, how many times, what it means, and where it comes from.":
    "ست عشرة خطوة من خطوات العبادة في صفحة التوجيه: ما يُقال قبل الصلاة، وفيها، وبعدها، وفي عموم اليوم، وعند الاستغفار — مع النص العربي، وعدد المرات، والمعنى، والمرجع.",
  "Open the Worship Reference": "افتح دليل العبادة",
  "Mushaf Page Numbers": "صفحات المصحف",
  "Every surah now shows how many pages it occupies in the 604-page Madani Mushaf, and while reading you are told where each page ends — so what you read on the screen matches the printed Mushaf in your hands.":
    "كل سورة تُظهر الآن عدد صفحاتها في المصحف المدني ذي الأربع والستمائة صفحة، وأثناء القراءة يُبيَّن لك أين تنتهي كل صفحة — ليوافق ما على الشاشة ما بين يديك من المصحف المطبوع.",
  "Open the Quran": "افتح المصحف",
  "Full Life Stories": "سِيَر كاملة",
  "Sixteen lives told in full rather than in summary — twelve Companions and four Prophets — from before Islam, through the moment of belief, to what changed in them, their greatest hour, and their death. Every source is listed with its rank.":
    "ست عشرة سيرة مبسوطة لا مختصرة — اثنا عشر صحابيًا وأربعة أنبياء — من حالهم قبل الإسلام، إلى لحظة الإيمان، وما تغيّر فيهم، وأعظم مواقفهم، ووفاتهم. وكلُّ مصدرٍ مذكورةٌ درجته.",
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
  "28 moments from the life of the Prophet ﷺ. Each was located in the text of Sahih al-Bukhari or Sahih Muslim before it was written here, and each carries the Arabic he spoke, the reference, the grading, and what the situation teaches — in both languages.":
    "ثمانية وعشرون موقفًا من حياة النبي ﷺ. كلُّ موقف وُجد في نص صحيح البخاري أو صحيح مسلم قبل كتابته هنا، ومعه لفظه العربي ومرجعه ودرجته وما يُستفاد منه — باللغتين.",
  "What does the Day of Judgement page cover?": "ماذا تتناول صفحة يوم القيامة؟",
  "Fourteen stages in the order they occur, from death to the gates, built on 52 passages of the Quran and hadith from the two Sahihs. Where a widely repeated detail sits outside them — the names of the angels of the grave, for instance — the page states that plainly instead of presenting it as settled.":
    "أربع عشرة مرحلة بترتيب وقوعها، من الموت إلى الأبواب، مبنيّة على اثنين وخمسين موضعًا من القرآن وأحاديث الصحيحين. وما اشتُهر من التفاصيل وهو خارجهما — كأسماء ملَكَي القبر مثلاً — تُصرّح الصفحة بذلك ولا تُقدّمه على أنه مقطوعٌ به.",
  "How do I find something for my own situation?": "كيف أجد ما يناسب حالي؟",
  "On the Guidance page, describe what you are going through by typing or speaking, in Arabic or English. The site searches the Quranic themes, the Sunnah, the worship steps, the full Bukhari and Muslim collections, and the lives of the Prophets and Companions, and shows what relates to it with full references. It is not a fatwa — read each verse in its full surah and consult a qualified scholar.":
    "في صفحة التوجيه، اكتب ما تمرّ به أو قله بصوتك، بالعربية أو الإنجليزية. يبحث الموقع في المعاني القرآنية والسنن وخطوات العبادة وصحيحَي البخاري ومسلم كاملين وسِيَر الأنبياء والصحابة، ويعرض لك ما يتعلق بحالك مع مراجعه كاملة. وهذا ليس فتوى — اقرأ كل آية في سورتها كاملة وارجع إلى أهل العلم.",
  "Is the content free to access?": "هل المحتوى مجاني؟",
  "Yes. All content on Islam Is The Way is free, intended for learning, reflection, and sharing knowledge of Islam with others.":
    "نعم. كلُّ ما في «الإسلام هو الطريق» مجاني، غايته التعلّم والتدبّر ونشر العلم بالإسلام.",
  "Houses of Allah Around the World": "بيوت الله في أنحاء العالم",
  "بيوت الله في أنحاء العالم — from Makkah and Madinah to Istanbul, Casablanca and Abu Dhabi.":
    "بيوت الله في أنحاء العالم — من مكة والمدينة إلى إسطنبول والدار البيضاء وأبوظبي.",
  "Community Reflections": "مشاركات المجتمع",
  "We invite you to share your personal stories, questions, and reflections on faith. Your voice adds to the strength of our community, fostering deeper connection and mutual support.":
    "ندعوك لمشاركة قصصك وأسئلتك وخواطرك في الإيمان. صوتك يزيد مجتمعنا قوة، ويعمّق الصلة والتعاون بيننا.",
  "Recitations Worth Hearing": "تلاوات تستحق السماع",
  "Get Started": "ابدأ الآن",
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
  // ---- Gradings ----
  // These appear on hundreds of cards. They are their own text nodes, so an
  // exact entry here translates every one of them site-wide. The owner's rule
  // is that the grading names the scholar — so does the Arabic.
  "Sahih — Agreed upon (al-Bukhari and Muslim)": "صحيح — متفق عليه (البخاري ومسلم)",
  "Sahih — Narrated by al-Bukhari": "صحيح — رواه البخاري",
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
  [/\bStories of the Prophets\b/g, "قصص الأنبياء"],
  [/\bIbn Kathir\b/g, "ابن كثير"],
  [/\bIbn Ishaq\b/g, "ابن إسحاق"],
  [/\bIbn Sa'd, Tabaqat\b/g, "ابن سعد، الطبقات"],
  [/\bIbn Sa'd\b/g, "ابن سعد"],
  [/\bTabaqat\b/g, "الطبقات"],
  [/\bat-Tabari\b/g, "الطبري"],
  [/\bhistorical sira, not hadith\b/g, "سيرة تاريخية لا حديث"],
  [/\bhistorical sira\b/g, "سيرة تاريخية"],
  [/\boutside the two Sahihs\b/g, "خارج الصحيحين"],
  [/\bthe two Sahihs\b/g, "الصحيحين"],
  // Book titles inside references, longest first so they match before the
  // shorter words they contain.
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
  [/\bat-Tirmidhi\b/g, "الترمذي"],
  [/\bal-Bukhari\b/g, "البخاري"],
  [/\bMuslim\b/g, "مسلم"],
  [/\band\b/g, "و"]
];

function iitwTranslateReference(text) {
  let out = text;
  AR_PARTS.forEach(([re, rep]) => { out = out.replace(re, rep); });
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

function iitwTranslateDom(lang) {
  iitwCollectNodes().forEach(node => {
    if (node._iitwEn === undefined) node._iitwEn = node.nodeValue;
    const original = node._iitwEn;
    const key = original.trim();
    if (lang === "ar") {
      const t = AR[key];
      if (t) {
        node.nodeValue = original.replace(key, t);
      } else if (node.parentElement.closest(".refs, .hadith-meta, .ayah-ref, .sunnah-card .refs")) {
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
