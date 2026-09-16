/* ============================================
   IslamBasics — Arabic / English switch
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
  "Verify": "تحقَّق",
  "Courses": "الدورات",
  "Search": "البحث",
  "Login": "تسجيل الدخول",
  "Logout": "تسجيل الخروج",
  "IslamBasics": "أساسيات الإسلام",
  "Explore": "استكشف",
  "Contact": "تواصل معنا",
  "Quran Library": "مكتبة القرآن",
  "Prophets in Islam": "الأنبياء في الإسلام",
  "Stories of the Prophet صلى الله عليه وسلم": "قصص النبي ﷺ",
  "The Day of Judgement": "يوم القيامة",
  "Islamic Wisdom for Every Heart": "حكمة الإسلام لكل قلب",
  "© 2026 IslamBasics. All rights reserved.": "© 2026 أساسيات الإسلام. جميع الحقوق محفوظة.",
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
  "Or browse by subject": "أو تصفَّح بحسب الموضوع",
  "The doors above are arranged by what is happening to you. These are arranged by what the material is.": "الأبواب فوق مرتّبة بحسب حالك، وهذه مرتّبة بحسب موضوع المادّة.",
  "The Holy Quran": "القرآن الكريم",
  "All 114 surahs with Arabic text, English translation, and 16 reciters to choose from. Every verse carries its page in the 604-page Madani Mushaf, and 496 verses — at least two in every surah — open into a full explanation of why they are worded as they are.":
    "جميع السور الـ114 بالنص العربي والترجمة الإنجليزية، مع ستة عشر قارئًا تختار بينهم. وكل آية مقرونة بصفحتها في المصحف المدني ذي الأربع والستمائة صفحة، وأربعمئة وستٌّ وتسعون آية — في كلّ سورةٍ منها آيتان فأكثر — تُفتح على شرحٍ كاملٍ لسبب ورودها بهذا اللفظ.",
  "Hadith Collection": "مجموعة الأحاديث",
  "Complete Sahih al-Bukhari and Sahih Muslim — 15,000+ hadith in Arabic and English, plus 43 chosen ones. Every grading names the scholar behind it.":
    "صحيح البخاري وصحيح مسلم كاملين — أكثر من 15,000 حديث بالعربية والإنجليزية، ومعها ثلاثة وأربعون حديثًا مختارًا. وكل درجةٍ مذكورٌ معها اسم من صحّحها.",
  "The Sunnah in Daily Life": "السنة في الحياة اليومية",
  "199 practices of the Prophet ﷺ across 18 areas of the day — sleeping, eating, washing, travelling, entering the mosque — each with its source.":
    "مئة وتسعٌ وتسعون سنة من هدي النبي ﷺ في ثمانية عشر بابًا من أبواب اليوم — النوم والطعام والطهارة والسفر ودخول المسجد — كلٌّ منها بمرجعها.",
  "Stories of the Prophet ﷺ": "قصص النبي ﷺ",
  "52 moments from his life, every one located in Sahih al-Bukhari or Sahih Muslim before it was written, with the classical words explained.":
    "اثنان وخمسون موقفًا من حياته ﷺ، كلُّ واحد وُجد في صحيح البخاري أو صحيح مسلم قبل كتابته، مع شرح الألفاظ القديمة الواردة فيه.",
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
  "🎓 Add a Course": "🎓 أضِف دورة",
  "The Courses page shows": "صفحة الدورات لا تعرض",
  "only what you add here": "إلّا ما تضيفه هنا",
  ". While this list is empty the page tells visitors that courses are on the way — so nothing is advertised before it exists. Fill in what you know, press Add, then press": ". وما دامت القائمة فارغة فالصفحة تخبر الزوّار أنّ الدورات في الطريق — فلا يُعلَن عن شيءٍ قبل وجوده. املأ ما تعرفه، واضغط «أضِف الدورة»، ثمّ اضغط",
  "at the bottom.": "في الأسفل.",
  "Course title": "عنوان الدورة",
  "required": "مطلوب",
  "Level": "المستوى",
  "Price": "السعر",
  "Description — what the course covers": "الوصف — ماذا تتناول الدورة",
  "What is included (one line each)": "ما الذي تشمله (سطرٌ لكلّ بند)",
  "Intro video link (optional)": "رابط الفيديو التعريفيّ (اختياري)",
  "This course is": "هذه الدورة",
  "part of a series": "جزءٌ من سلسلة",
  "— it follows on from another one": "— تأتي بعد دورةٍ أخرى",
  "Leave it unticked and the course stands on its own. Tick it and give the series a name, and every course with that same name is grouped together on the Courses page, in the order you set.": "اتركه دون تحديد فتقوم الدورة وحدها. وإن حدّدته وسمّيت السلسلة، جُمعت كلّ دورةٍ تحمل الاسم نفسه في صفحة الدورات، بالترتيب الذي تضعه.",
  "Series name": "اسم السلسلة",
  "Position in the series (1, 2, 3…)": "ترتيبها في السلسلة (١، ٢، ٣…)",
  "Add Course": "أضِف الدورة",
  "Cancel edit": "ألغِ التعديل",
  "Clear the form": "أفرغ الحقول",
  "🎬 Add a Paid Video Lesson": "🎬 أضِف درسًا مرئيًّا مدفوعًا",
  "Users see the title and price; they get the video link after they pay and you confirm.": "يرى المستخدم العنوان والسعر، ولا يصله رابط الفيديو إلّا بعد أن يدفع وتؤكّد أنت.",
  "Video title": "عنوان الفيديو",
  "Description": "الوصف",
  "Upload the video file from your laptop (up to ~45 MB)": "ارفع ملفّ الفيديو من حاسوبك (حتى ٤٥ ميغابايت تقريبًا)",
  "⬆ Upload Video File": "⬆ ارفع ملفّ الفيديو",
  "Tip: paste your GitHub token in the bar at the bottom first — the upload uses it. For videos larger than 45 MB, upload to YouTube (unlisted) instead and paste the link below.": "تنبيه: ألصِق رمز GitHub في الشريط الأسفل أوّلًا، فالرفع يستعمله. وإن كان الفيديو أكبر من ٤٥ ميغابايت فارفعه على يوتيوب (غير مُدرَج) وألصِق رابطه أدناه.",
  "OR paste a video link (YouTube unlisted / Google Drive — kept hidden from users)": "أو ألصِق رابط فيديو (يوتيوب غير مُدرَج / جوجل درايف — يبقى محجوبًا عن المستخدمين)",
  "Access code (you give this to users after they pay)": "رمز الدخول (تعطيه للمستخدم بعد الدفع)",
  "Add Video": "أضِف الفيديو",
  "📹 Live Meetings & Class Recording": "📹 اللقاءات المباشرة وتسجيل الدرس",
  "1) Fill the meeting title below and press": "١) اكتب عنوان اللقاء أدناه واضغط",
  "Create Meeting": "إنشاء لقاء",
  "— the site makes a unique code.   2) Press": "— فيصنع الموقع رمزًا خاصًّا به. ٢) اضغط",
  "at the bottom so the code becomes active.   3) Send the code to your students.   4) When it's time, press": "في الأسفل ليصير الرمز فعّالًا. ٣) أرسل الرمز إلى طلّابك. ٤) وفي موعده اضغط",
  "▶ Start & Host": "▶ ابدأ واستضِف",
  "to open the room yourself first — students then join with the code. You can record the class and turn on live translated captions inside the room.": "لتفتح الغرفة أنت أوّلًا، ثمّ ينضمّ الطلّاب بالرمز. ويمكنك تسجيل الدرس وتشغيل الترجمة الفوريّة داخل الغرفة.",
  "Meeting title": "عنوان اللقاء",
  "Related course (optional)": "الدورة المرتبطة (اختياري)",
  "Date & time (optional)": "التاريخ والوقت (اختياري)",
  "Create Meeting & Generate Code": "أنشئ اللقاء وولّد الرمز",
  "Just want to record a lesson (no students)?": "تريد تسجيل درسٍ فقط، بلا طلّاب؟",
  "Create a meeting named e.g. \"Recording — Tafsir 1\", publish, press ▶ Start & Host, use the": "أنشئ لقاءً باسمٍ مثل «تسجيل — تفسير ١»، وانشُر، واضغط ▶ ابدأ واستضِف، ثمّ استعمل زرّ",
  "⏺ Record": "⏺ تسجيل",
  "button in the room, then upload the saved file in the \"Add a Paid Video\" panel above.": "داخل الغرفة، وارفع الملفّ المحفوظ في لوحة «أضِف درسًا مرئيًّا مدفوعًا» أعلاه.",
  "Copy Code": "انسخ الرمز",
  "Delete": "احذف",
  "code:": "الرمز:",
  "💬 User Feedback": "💬 رسائل الزوّار",
  "Every page of the site now carries a feedback form. When a visitor sends one, two things happen: it opens their mail app addressed to": "في كلّ صفحةٍ من الموقع نموذج رسالة. فإذا أرسل زائرٌ رسالةً وقع أمران: يُفتح تطبيق بريده على العنوان",
  "— that is what delivers it to you — and a copy is kept on": "— وهذا هو الذي يوصلها إليك — وتُحفظ نسخةٌ على",
  "their own device": "جهازه هو",
  "Read this once.": "اقرأ هذا مرّةً واحدة.",
  "This website has no server. A page on GitHub Pages cannot receive and store a message from someone else's phone — there is nowhere for it to be written. So the list below shows only the messages sent": "هذا الموقع بلا خادم. وصفحةٌ على GitHub Pages لا تستطيع أن تستقبل رسالةً من هاتف شخصٍ آخر وتخزّنها — فليس ثَمّ مكانٌ تُكتب فيه. ولذلك لا تعرض القائمة أدناه إلّا الرسائل المُرسَلة",
  "from this device": "من هذا الجهاز",
  ", which in practice means the ones you sent yourself while testing.": "، وهي عمليًّا ما أرسلته أنت أثناء التجربة.",
  "The real inbox is your email.": "صندوق الوارد الحقيقيّ هو بريدك.",
  "If you want every visitor's message collected in one place here instead, that needs either a small backend or a free form service connected to your address — say the word and it can be wired up.": "وإن أردت أن تُجمَع رسائل الزوّار كلّها هنا في مكانٍ واحد، فذلك يحتاج خادمًا صغيرًا أو خدمة نماذج مجّانيّة موصولة بعنوانك — قُل الكلمة وتُوصَل.",
  "📧 Open the feedback in Gmail": "📧 افتح الرسائل في Gmail",
  "↻ Refresh": "↻ تحديث",
  "📋 Copy all": "📋 انسخ الكلّ",
  "🗑 Clear this device": "🗑 امسح ما في هذا الجهاز",
  "🎧 Recommended Recitations on the Home Page": "🎧 التلاوات المختارة في الصفحة الرئيسية",
  "Paste a video link,": "ألصِق رابط الفيديو،",
  "watch the preview to be sure it is the right one": "وشاهد المعاينة لتتأكّد أنّه الفيديو الصحيح",
  ", then fill in the details and add it. Nothing appears on the website until you press": "، ثمّ املأ التفاصيل وأضِفه. ولا يظهر شيءٌ في الموقع حتى تضغط",
  "at the bottom. They show three across, just above the “Get in Touch” section on the home page.": "في الأسفل. وتُعرَض ثلاثًا في الصفّ، فوق قسم «تواصل معنا» في الصفحة الرئيسية مباشرة.",
  "1) Video link — YouTube (normal or Shorts) or a direct .mp4 link": "١) رابط الفيديو — يوتيوب (عاديّ أو Shorts) أو رابط mp4 مباشر",
  "👁 Check this video": "👁 افحص هذا الفيديو",
  "Is this the video you want?": "أهذا هو الفيديو الذي تريده؟",
  "2) Title — what these verses are about": "٢) العنوان — عمّاذا تتحدّث هذه الآيات",
  "🎤 Speak": "🎤 تكلَّم",
  "3) Reciter": "٣) القارئ",
  "4) Surah": "٤) السورة",
  "Surah number": "رقم السورة",
  "From verse": "من آية",
  "To verse": "إلى آية",
  "5) A short note for the listener": "٥) كلمةٌ قصيرة للمستمع",
  "Video shape": "شكل الفيديو",
  "Detect automatically (Shorts links become tall)": "اكتشِفه تلقائيًّا (روابط Shorts تُعرَض طوليّة)",
  "Tall — a Short / vertical video": "طوليّ — فيديو قصير/عموديّ",
  "Wide — a normal video": "عَرْضيّ — فيديو عاديّ",
  "✔ Put it on the home page now": "✔ ضَعه في الصفحة الرئيسية الآن",
  "Add to the list only": "أضِفه إلى القائمة فقط",
  "✕ Wrong video": "✕ الفيديو خطأ",
  "On the home page now": "الموجود في الصفحة الرئيسية الآن",
  "The order here is the order visitors see. Three fit on a row, so three or six looks best.": "الترتيب هنا هو الترتيب الذي يراه الزوّار. وثلاثةٌ تتّسع في الصفّ، فالثلاثة أو الستّة أجمل.",
  "💾 Save these to the website": "💾 احفظ هذه في الموقع",
  "Same as “Publish Changes” at the bottom — nothing appears on the site until you press it.": "هو نفسه «نشر التغييرات» في الأسفل — لا يظهر شيءٌ في الموقع حتى تضغطه.",
  "✓ token remembered": "✓ الرمز محفوظ",
  "forget it": "انسَه",
  "Language you will speak": "اللغة التي ستتحدّث بها",
  "Say it once — both boxes are filled": "قُلها مرّةً واحدة — ويُملأ الحقلان",
  "Say the name once": "قُل الاسم مرّةً واحدة",
  "Say the surah name": "قُل اسم السورة",
  "e.g. Tafsir class — Tuesday": "مثال: درس تفسير — الثلاثاء",
  "e.g. Bank account, Vodafone Cash, PayPal...": "مثال: حساب بنكيّ، فودافون كاش، باي بال…",
  "e.g. After paying, send your receipt on WhatsApp +20... to receive access.": "مثال: بعد الدفع، أرسل الإيصال على واتساب ‎+20…‎ ليصلك الدخول.",
  "e.g. +20 10 1234 5678": "مثال: ‎+20 10 1234 5678‎",
  "e.g. 201012345678": "مثال: 201012345678",
  "e.g. Tajweed from the beginning": "مثال: التجويد من البداية",
  "e.g. Beginner, or Beginner → Advanced": "مثال: مبتدئ، أو من المبتدئ إلى المتقدّم",
  "e.g. $30 per month, or: ask us": "مثال: ٣٠ دولارًا شهريًّا، أو: اسألنا",
  "A few plain sentences about what someone will actually learn.": "جملٌ قليلة واضحة عمّا سيتعلّمه الدارس فعلًا.",
  "https://… shown to everyone as a free preview": "‎https://…‎ يُعرَض للجميع معاينةً مجّانيّة",
  "e.g. Quran Recitation Path": "مثال: مسار تلاوة القرآن",
  "e.g. Tafsir of Surah Al-Kahf — Part 1": "مثال: تفسير سورة الكهف — الجزء الأوّل",
  "What the video explains...": "ما الذي يشرحه الفيديو…",
  "e.g. $5": "مثال: ٥ دولارات",
  "https://... (filled automatically after upload)": "‎https://…‎ (يُملأ تلقائيًّا بعد الرفع)",
  "e.g. TAFSIR18-A": "مثال: TAFSIR18-A",
  "e.g. Quran Recitation Class — Group A": "مثال: حلقة تلاوة — المجموعة أ",
  "e.g. Quran Recitation A to Z": "مثال: تلاوة القرآن من الألف إلى الياء",
  "English — e.g. The verses describing the Day of Judgement": "بالإنجليزيّة — مثال: الآيات التي تصف يوم القيامة",
  "English — e.g. Islam Sobhi": "بالإنجليزيّة — مثال: إسلام صبحي",
  "English — e.g. Al-Haqqah": "بالإنجليزيّة — مثال: الحاقّة",
  "English — a sentence or two inviting people to reflect": "بالإنجليزيّة — جملةٌ أو جملتان تدعو إلى التدبّر",
  "GitHub token — paste once, it is remembered on this computer": "رمز GitHub — ألصِقه مرّةً واحدة، ويُحفظ على هذا الحاسوب",
  "Staff dashboard": "لوحة الإدارة",
  "Live meetings": "اللقاءات المباشرة",
  "Angels (redirect)": "الملائكة (تحويل)",
  "Edit": "تعديل",
  "Surah": "سورة",
  /* ---- The staff dashboard (staff.html). It is behind a login, so it was
     never seen by the Arabic audit and stayed entirely in English. ---- */
  "Staff Dashboard": "لوحة إدارة الموقع",
  "Manage courses, paid videos, payment details, and live meetings. Changes go live for all visitors after you click \"Publish Changes\".": "من هنا تُدار الدورات، والدروس المدفوعة، وبيانات الدفع، واللقاءات المباشرة. ولا يرى الزوّار أيّ تغييرٍ حتى تضغط «نشر التغييرات».",
  "How it works:": "كيف تعمل:",
  "Pick a section below, fill it in, then press": "اختر قسمًا ممّا يلي، واملأه، ثمّ اضغط",
  "Publish Changes": "نشر التغييرات",
  "at the bottom with your GitHub token. Everything is saved to the live website for all users.": "في الأسفل ومعك رمز GitHub. عندها يُحفظ كلّ شيء في الموقع المنشور ويراه الجميع.",
  "⚠ You have changes that are NOT on the website yet.": "⚠ عندك تغييراتٌ لم تصل إلى الموقع بعد.",
  "They are saved in this browser, so you can leave this page and come back — but visitors will not see them until you press": "هي محفوظةٌ في هذا المتصفّح، فلك أن تغادر الصفحة وتعود — لكنّ الزوّار لن يروها حتى تضغط",
  "at the bottom with your GitHub token.": "في الأسفل ومعك رمز GitHub.",
  "📹 Meetings": "📹 اللقاءات",
  "🎓 Courses": "🎓 الدورات",
  "🎬 Videos": "🎬 الدروس المرئيّة",
  "💳 Payment": "💳 الدفع",
  "📞 Contact": "📞 التواصل",
  "💬 Feedback": "💬 رسائل الزوّار",
  "🎧 Recitations": "🎧 التلاوات",
  "📊 Analytics": "📊 الإحصاءات",
  "▶ Start a Meeting Right Now": "▶ ابدأ لقاءً الآن",
  "One click: the site creates the code, activates it for your students, and opens the room with you as host. Use this when you just want to teach or record straight away.": "بضغطةٍ واحدة: يُنشئ الموقع الرمز، ويفعّله لطلّابك، ويفتح الغرفة وأنت مضيفها. استعمل هذا حين تريد أن تدرّس أو تسجّل على الفور.",
  "Meeting name (optional)": "اسم اللقاء (اختياري)",
  "▶ Start Meeting Now": "▶ ابدأ اللقاء الآن",
  "Give this code to your students:": "أعطِ طلّابك هذا الرمز:",
  "📋 Copy Code": "📋 انسخ الرمز",
  "▶ Open the Room": "▶ افتح الغرفة",
  "Needs your GitHub token in the bar at the bottom, so the code can be activated for students.": "يحتاج إلى رمز GitHub في الشريط الأسفل، حتى يُفعَّل الرمز للطلّاب.",
  "📊 Website Analytics": "📊 إحصاءات الموقع",
  "Admin only": "للمشرف وحده",
  "How many people opened the website, which pages they visited, and which sections they clicked. Counts every visitor across the whole site (updates live).": "كم شخصًا فتح الموقع، وأيّ الصفحات زاروا، وأيّ الأقسام ضغطوا. يَعُدّ كلّ زائرٍ في الموقع كلّه، ويتحدّث لحظةً بلحظة.",
  "Total visits to the website": "مجموع الزيارات للموقع",
  "Pages opened": "الصفحات المفتوحة",
  "Sections clicked": "الأقسام المضغوطة",
  "🔄 Refresh Numbers": "🔄 حدِّث الأرقام",
  "💳 Payment Details": "💳 بيانات الدفع",
  "Shown to users when they want to unlock a paid video or enroll in a course.": "تُعرَض للمستخدم حين يريد فتح درسٍ مدفوع أو التسجيل في دورة.",
  "Account number / IBAN / payment address": "رقم الحساب / الآيبان / عنوان الدفع",
  "QR code image link (optional — upload your QR image anywhere and paste its link)": "رابط صورة رمز الاستجابة (اختياري — ارفع الصورة في أيّ مكان وألصق رابطها)",
  "Payment instructions for users": "تعليمات الدفع للمستخدمين",
  "📞 Contact Numbers, Demo & Free Trial": "📞 أرقام التواصل، والدرس التعريفيّ، والتجربة المجّانيّة",
  "Shown to users on the Courses page. The Free Trial button opens WhatsApp (or email if no WhatsApp number is set), and the Demo button plays your demo lesson.": "تُعرَض للمستخدمين في صفحة الدورات. زرّ التجربة المجّانيّة يفتح واتساب (أو البريد إن لم يكن هناك رقم واتساب)، وزرّ الدرس التعريفيّ يشغّل درسك التعريفيّ.",
  "Phone number (with country code)": "رقم الهاتف (مع رمز الدولة)",
  "WhatsApp number (digits only, with country code)": "رقم واتساب (أرقامًا فقط، مع رمز الدولة)",
  "Demo lesson video link (YouTube etc. — leave empty to hide the Demo button)": "رابط الدرس التعريفيّ (يوتيوب أو غيره — اتركه فارغًا ليختفي الزرّ)",
  "Recently Added": "أحدث الإضافات",
  "Ar-Raghib al-Isfahani on the Quran": "الراغب الأصفهاني على القرآن",
  "His own explanation under the verses of the first ten surahs — from his tafsir where it survives, and from his dictionary of the Quran where it does not. Every word of his is checked letter by letter against the printed book, every verse he connects is in the Mushaf's own text, and the page he said it on is printed with it.": "شرحه بنصّه تحت آيات السور العشر الأولى — من تفسيره حيث وصلنا، ومن «المفردات» حيث لم يصلنا. كلّ كلمةٍ من كلامه مطابَقةٌ على الكتاب المطبوع حرفًا حرفًا، وكلّ آيةٍ يربط بها بخطّ المصحف، ومعها الصفحة التي قالها فيها.",
  "Night reading, bigger text, and one search": "قراءةٌ ليليّة، وخطٌّ أكبر، وبحثٌ واحد",
  "A dark theme for reading at night, a text size that holds across the whole site, one search in the header of every page — and the home page now opens on what you were last reading.": "وضعٌ ليليٌّ للقراءة في الليل، وحجم خطٍّ يثبت في الموقع كلّه، وبحثٌ واحد في أعلى كلّ صفحة — والصفحة الرئيسية تفتح الآن على ما كنت تقرؤه.",
  "See for yourself": "جرّبها بنفسك",
  "Words of the Prophet": "من كلام النبيّ ﷺ",
  "Hadith from the two Sahihs, each with its book, its number and the grading the scholars gave it, and the Arabic beside the English.": "أحاديث من الصحيحين، لكلّ حديثٍ كتابه ورقمه ودرجته التي حكم بها أهل العلم، والعربيّة إلى جانب الإنجليزيّة.",
  "Read the Hadith": "اقرأ الأحاديث",
  "The Prophet's practice through an ordinary day — waking, eating, dressing, entering and leaving, sleeping — each with the hadith it comes from and its grading.": "هديُه ﷺ في اليوم المعتاد — الاستيقاظ والطعام واللباس والدخول والخروج والنوم — مع الحديث الذي جاءت منه كلّ سنّة ودرجته.",
  "The worship reference: how each act of worship is performed, what is said in it, and what to do when something goes wrong — with the evidence beside every ruling.": "مرجع العبادة: كيف تُؤدّى كلّ عبادة، وماذا يُقال فيها، وماذا تصنع إذا وقع الخلل — والدليل بجانب كلّ حكم.",
  "Check what you were told": "تحقَّق ممّا قيل لك",
  "Paste a hadith, a claim or a quotation and see whether this site can find it in the sources it carries, and how strong it is.": "الصق حديثًا أو دعوى أو نقلًا، وانظر هل يجده هذا الموقع في مصادره التي يحملها، وما درجته.",
  "Check something": "تحقَّق من شيء",
  "Today's reading": "وِرد اليوم",
  "A small daily plan on the home page — read from the Quran, a moment from his life, a sunnah to act on, and what you have started to forget — with the run of days you have kept.": "خطّةٌ يوميّةٌ صغيرة في الصفحة الرئيسية — اقرأ من القرآن، وموقفًا من سيرته، وسنّةً تعمل بها، وما بدأت تنساه — مع سلسلة الأيام التي حافظت عليها.",
  "Start today": "ابدأ اليوم",
  "The newest additions to the site — each one written from the source, with its reference and its grading.":
    "أحدث ما أُضيف إلى الموقع — كلُّ مادةٍ مكتوبة من أصلها، ومعها مرجعها ودرجتها.",
  "57 stories, every one found in the text of Sahih al-Bukhari or Sahih Muslim before it was written here — none from memory. The classical Arabic words in each story are explained in plain modern Arabic and English, and the eight stories about the Dajjal are linked together as one series, each with its own plain-words box.":
    "سبعٌ وخمسون قصة، كلُّ واحدة وُجدت في نص صحيح البخاري أو صحيح مسلم قبل كتابتها هنا، وليس فيها شيء من الذاكرة. والألفاظ العربية القديمة في كل قصة مشروحة بالعربية المعاصرة وبالإنجليزية، وقصص الدجّال الثماني مرتبطٌ بعضها ببعض كسلسلة واحدة، ومع كلِّ واحدةٍ منها صندوقُ «بكلماتٍ بسيطة».",
  "Read the Stories": "اقرأ القصص",
  "Fifteen stages in the order they happen: death and the soul, the grave and its questions, the Trumpet, the standing, the seven under the shade, the settling of what people owe each other, the Records, the Scales, the Bridge, and the gates. 64 referenced points and 54 passages of the Quran.":
    "خمس عشرة مرحلة بترتيب وقوعها: الموت والروح، والقبر وسؤاله، والنفخ في الصور، والموقف، والسبعة الذين يُظلّهم الله، والقصاص بين الناس، والصحف، والموازين، والصراط، والأبواب. أربعٌ وستون مسألة موثّقة، وأربعةٌ وخمسون موضعًا من القرآن.",
  "See the Stages": "اطّلع على المراحل",
  "199 Sunnah Practices": "مئة وتسعٌ وتسعون سنة",
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
  "52 moments from the life of the Prophet ﷺ. Each was located in the text of Sahih al-Bukhari or Sahih Muslim before it was written here, and each carries the Arabic he spoke, the reference, the grading, and what the situation teaches — in both languages.":
    "اثنان وخمسون موقفًا من حياة النبي ﷺ. كلُّ موقف وُجد في نص صحيح البخاري أو صحيح مسلم قبل كتابته هنا، ومعه لفظه العربي ومرجعه ودرجته وما يُستفاد منه — باللغتين.",
  "What does the Day of Judgement page cover?": "ماذا تتناول صفحة يوم القيامة؟",
  "Fifteen stages in the order they occur, from death to the gates, built on 54 passages of the Quran and hadith from the two Sahihs. Where a widely repeated detail sits outside them — the names of the angels of the grave, for instance — the page states that plainly instead of presenting it as settled.":
    "خمس عشرة مرحلة بترتيب وقوعها، من الموت إلى الأبواب، مبنيّة على أربعةٍ وخمسين موضعًا من القرآن وأحاديث الصحيحين. وما اشتُهر من التفاصيل وهو خارجهما — كأسماء ملَكَي القبر مثلاً — تُصرّح الصفحة بذلك ولا تُقدّمه على أنه مقطوعٌ به.",
  "How do I find something for my own situation?": "كيف أجد ما يناسب حالي؟",
  "On the Guidance page, describe what you are going through by typing or speaking, in Arabic or English. The site searches the Quranic themes, the Sunnah, the worship steps, the full Bukhari and Muslim collections, and the lives of the Prophets and Companions, and shows what relates to it with full references. It is not a fatwa — read each verse in its full surah and consult a qualified scholar.":
    "في صفحة التوجيه، اكتب ما تمرّ به أو قله بصوتك، بالعربية أو الإنجليزية. يبحث الموقع في المعاني القرآنية والسنن وخطوات العبادة وصحيحَي البخاري ومسلم كاملين وسِيَر الأنبياء والصحابة، ويعرض لك ما يتعلق بحالك مع مراجعه كاملة. وهذا ليس فتوى — اقرأ كل آية في سورتها كاملة وارجع إلى أهل العلم.",
  "Is the content free to access?": "هل المحتوى مجاني؟",
  "Yes. All content on IslamBasics is free, intended for learning, reflection, and sharing knowledge of Islam with others.":
    "نعم. كلُّ ما في «أساسيات الإسلام» مجاني، غايته التعلّم والتدبّر ونشر العلم بالإسلام.",
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

  /* The Judgement Day page's source lines and gradings, September 2026. They
     carry notes the reference translator cannot reach ("the two blasts",
     "the forty between them"), and 48 of them reached the Arabic page half
     English. Keyed by the exact English: change one, change both. */
  "Not found in the Quran or the two Sahihs":
    "لم يَرِد في القرآن ولا في الصحيحين",
  "Sahih Muslim, Book of the Prayer of Travellers (his name); Surah Az-Zumar (39:68) and Surah Ya-Sin (36:49-53) (the two blasts); Sahih al-Bukhari 4935 (the forty between them)":
    "صحيح مسلم، كتاب صلاة المسافرين (اسمه)؛ سورة الزمر (٣٩:٦٨) وسورة يس (٣٦:٤٩–٥٣) (النفختان)؛ صحيح البخاري ٤٩٣٥ (الأربعون بينهما)",
  "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3232; also 4856 and 4857 — Sahih":
    "صحيح البخاري، كتاب بدء الخلق، حديث ٣٢٣٢؛ وكذا ٤٨٥٦ و٤٨٥٧ — صحيح",
  "Reported in tafsir and in narrations from the companions and later — outside the two Sahihs":
    "مرويٌّ في كتب التفسير وفي آثارٍ عن الصحابة ومن بعدهم — خارج الصحيحين",
  "Sahih al-Bukhari, Book of Prayer, Hadith 349 — narrated by Abu Dharr رضي الله عنه":
    "صحيح البخاري، كتاب الصلاة، حديث ٣٤٩ — من رواية أبي ذرّ رضي الله عنه",
  "Surah Al-Haqqah (69:17). The description of their size: Sunan Abu Dawud — outside the two Sahihs":
    "سورة الحاقة (٦٩:١٧). ووصف عِظَم خَلقهم: سنن أبي داود — خارج الصحيحين",
  "Sahih al-Bukhari, Book of the Times of Prayer, Hadith 555 — Sahih, agreed upon":
    "صحيح البخاري، كتاب مواقيت الصلاة، حديث ٥٥٥ — صحيح، متّفقٌ عليه",
  "Surah As-Sajdah (32:11) for the description. The name: not found in the Quran or the two Sahihs":
    "سورة السجدة (٣٢:١١) في وصفه. أمّا الاسم فلم يَرِد في القرآن ولا في الصحيحين",
  "Surah Az-Zumar (39:73). The name: not found in the Quran or the two Sahihs":
    "سورة الزمر (٣٩:٧٣). أمّا الاسم فلم يَرِد في القرآن ولا في الصحيحين",
  "The questioning: Sahih al-Bukhari, Hadith 1369 — Sahih. The two names: Jami' at-Tirmidhi — outside the two Sahihs":
    "السؤال: صحيح البخاري، حديث ١٣٦٩ — صحيح. والاسمان: جامع الترمذي — خارج الصحيحين",
  "Not found in the Quran or the two Sahihs; parts of it are traced to Israiliyyat":
    "لم يَرِد في القرآن ولا في الصحيحين، وبعضه راجعٌ إلى الإسرائيليات",
  "The hadith of al-Bara ibn Azib — Musnad Ahmad 18534, Sunan Abu Dawud 4753":
    "حديث البراء بن عازب — مسند أحمد ١٨٥٣٤، سنن أبي داود ٤٧٥٣",
  "The same hadith; the verses are Surah Al-A'raf 7:40 and Surah Al-Hajj 22:31":
    "الحديث نفسه؛ والآيتان: سورة الأعراف ٧:٤٠ وسورة الحج ٢٢:٣١",
  "The hadith of al-Bara ibn Azib — Musnad Ahmad 18534, Sunan Abu Dawud 4753; the questioning is also in Sahih al-Bukhari, Book of Funerals, Hadith 1338":
    "حديث البراء بن عازب — مسند أحمد ١٨٥٣٤، سنن أبي داود ٤٧٥٣؛ والسؤال في صحيح البخاري أيضًا، كتاب الجنائز، حديث ١٣٣٨",
  "Strong — graded hasan by at-Tirmidhi and authenticated by al-Albani":
    "قويّ — حسّنه الترمذيّ وصحّحه الألبانيّ",
  "Sunan Abu Dawud 4742 and Jami at-Tirmidhi 2430 (\"a horn that is blown into\"); the description of its size is in the sunan collections":
    "سنن أبي داود ٤٧٤٢ وجامع الترمذي ٢٤٣٠ («قرنٌ يُنفخ فيه»)؛ ووصف عِظَمه في كتب السنن",
  "Surah Al-Qari'ah 101:5; An-Naba 78:20; Al-Infitar 82:2–3; At-Takwir 81:6; Ar-Rahman 55:37; Al-Qiyamah 75:8–9; Az-Zalzalah 99:1–3":
    "سورة القارعة ١٠١:٥؛ النبأ ٧٨:٢٠؛ الانفطار ٨٢:٢–٣؛ التكوير ٨١:٦؛ الرحمن ٥٥:٣٧؛ القيامة ٧٥:٨–٩؛ الزلزلة ٩٩:١–٣",
  "Surah Az-Zumar 39:68; Surah Ghafir 40:16":
    "سورة الزمر ٣٩:٦٨؛ سورة غافر ٤٠:١٦",
  "Surah Al-Ma'arij 70:4; Sahih Muslim, Book of Zakat, Hadith 987 (the fifty thousand years); the lightening upon the believer: Musnad Ahmad 11114 — from Abu Sa'id al-Khudri":
    "سورة المعارج ٧٠:٤؛ صحيح مسلم، كتاب الزكاة، حديث ٩٨٧ (الخمسون ألف سنة)؛ وتخفيفه على المؤمن: مسند أحمد ١١١١٤ — عن أبي سعيد الخدريّ",
  "The verse is Quran; the Muslim hadith is Sahih. The report about it being made light is authenticated by al-Albani, and is outside the two Sahihs":
    "الآية من القرآن، وحديث مسلم صحيح. وحديث التخفيف صحّحه الألبانيّ، وهو خارج الصحيحين",
  "Surah Al-Inshiqaq 84:7–12; Surah Al-Kahf 18:49":
    "سورة الانشقاق ٨٤:٧–١٢؛ سورة الكهف ١٨:٤٩",
  "Surah Al-Anbiya 21:47; Surah Az-Zalzalah 99:7–8; the hadith is Sahih al-Bukhari, Book of Invocations, Hadith 6406, and Sahih Muslim 2694":
    "سورة الأنبياء ٢١:٤٧؛ سورة الزلزلة ٩٩:٧–٨؛ والحديث في صحيح البخاري، كتاب الدعوات، حديث ٦٤٠٦، وصحيح مسلم ٢٦٩٤",
  "Sahih al-Bukhari, Book of Oppressions, Hadith 2441; also narrated by Muslim in the Book of Repentance — the verse is Surah Hud 11:18":
    "صحيح البخاري، كتاب المظالم، حديث ٢٤٤١؛ وأخرجه مسلمٌ في كتاب التوبة — والآية: سورة هود ١١:١٨",
  "The first is Sahih — agreed upon. The report about their age is in at-Tirmidhi and is authenticated by al-Albani; it is outside the two Sahihs":
    "الأوّل صحيح — متّفقٌ عليه. وخبر أعمارهم عند الترمذي، وصحّحه الألبانيّ، وهو خارج الصحيحين",
  "Musnad Ahmad and the sunan collections (the strength of a hundred and the sweat); Surah At-Tur 52:22; Surah Al-Waqi'ah 56:33":
    "مسند أحمد وكتب السنن (قوّة مئة رجل، والعَرَق)؛ سورة الطور ٥٢:٢٢؛ سورة الواقعة ٥٦:٣٣",
  "The hadith is authenticated by al-Albani and sits outside the two Sahihs. The two verses are Quran":
    "الحديث صحّحه الألبانيّ، وهو خارج الصحيحين. والآيتان من القرآن",
  "Surah Muhammad 47:15; Surah Al-Waqi'ah 56:25–26; Surah Yunus 10:10; Surah Al-Hijr 15:47":
    "سورة محمد ٤٧:١٥؛ سورة الواقعة ٥٦:٢٥–٢٦؛ سورة يونس ١٠:١٠؛ سورة الحجر ١٥:٤٧",
  "Sahih Muslim, Book of Faith, Hadith 181 — from Suhayb ar-Rumi; Surah Al-Qiyamah 75:22–23; Surah Yunus 10:26":
    "صحيح مسلم، كتاب الإيمان، حديث ١٨١ — عن صهيب الروميّ؛ سورة القيامة ٧٥:٢٢–٢٣؛ سورة يونس ١٠:٢٦",
  "Surah Al-An'am (6:94); and “Every one of them will come to Him on the Day of Resurrection alone” — Maryam (19:95); and Abasa (80:34-37)":
    "سورة الأنعام (٦:٩٤)؛ وسورة مريم (١٩:٩٥) في أنّ كلًّا يأتيه يوم القيامة فردًا؛ وسورة عبس (٨٠:٣٤–٣٧)",
  "The Quran":
    "القرآن",
  "Surah Az-Zumar (39:53); the man who killed a hundred is in Sahih al-Bukhari, Hadith 3470, and in Muslim":
    "سورة الزمر (٣٩:٥٣)؛ وخبر قاتل المئة في صحيح البخاري، حديث ٣٤٧٠، وفي مسلم",
  "The Quran; and the story is Sahih — agreed upon":
    "القرآن؛ والقصّة صحيحة — متّفقٌ عليها",
  "Jami at-Tirmidhi, Book of Qadar, Hadith 2140; also Ahmad and Ibn Majah":
    "جامع الترمذي، أبواب القدر، حديث ٢١٤٠؛ ورواه أحمد وابن ماجه",
  "Surah Aal-Imran (3:8) — the prayer of those firm in knowledge, asking not to be turned away AFTER being guided":
    "سورة آل عمران (٣:٨) — دعاء الراسخين في العلم ألّا تزيغ قلوبهم بعد أن هُدوا",
  "Surah Ibrahim (14:27) — and the Prophet ﷺ said this verse was revealed about the questioning in the grave: Sahih al-Bukhari, Book of Funerals, Hadith 1369":
    "سورة إبراهيم (١٤:٢٧) — وقد أخبر النبي ﷺ أنها نزلت في سؤال القبر: صحيح البخاري، كتاب الجنائز، حديث ١٣٦٩",
  "Surah Al-Baqarah (2:97); his form filling the horizon: Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3234 — Sahih; the six hundred wings: Sahih al-Bukhari, Hadith 3232 and Sahih Muslim — Sahih":
    "سورة البقرة (٢:٩٧)؛ وخَلقه سادًّا الأفق: صحيح البخاري، كتاب بدء الخلق، حديث ٣٢٣٤ — صحيح؛ والستّمئة جناح: صحيح البخاري، حديث ٣٢٣٢، وصحيح مسلم — صحيح",
  "The questioning: Sahih al-Bukhari, Book of Funerals, Hadith 1369 — Sahih. The two names: Jami' at-Tirmidhi — outside the two Sahihs":
    "السؤال: صحيح البخاري، كتاب الجنائز، حديث ١٣٦٩ — صحيح. والاسمان: جامع الترمذي — خارج الصحيحين",
  "Surah Al-Muddaththir (74:30); Surah At-Tahrim (66:6); the Zabaniyah in Surah Al-'Alaq (96:18)":
    "سورة المدثر (٧٤:٣٠)؛ سورة التحريم (٦٦:٦)؛ والزبانية في سورة العلق (٩٦:١٨)",
  "Surah 'Abasa (80:38-39)":
    "سورة عبس (٨٠:٣٨–٣٩)",
  "Surah 'Abasa (80:40-42)":
    "سورة عبس (٨٠:٤٠–٤٢)",
  "Sahih al-Bukhari, Book of the Virtues of Madinah, Hadith 1888 — Sahih; the Basin is described in many places in the two Sahihs":
    "صحيح البخاري، كتاب فضائل المدينة، حديث ١٨٨٨ — صحيح؛ ووصف الحوض في مواضع كثيرة من الصحيحين",
  "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3257 — Sahih; and the gate of Ar-Rayyan also in Hadith 1896":
    "صحيح البخاري، كتاب بدء الخلق، حديث ٣٢٥٧ — صحيح؛ وباب الريّان أيضًا في حديث ١٨٩٦",
  "Surah Az-Zukhruf (43:77); and the nineteen in Surah Al-Muddaththir (74:30)":
    "سورة الزخرف (٤٣:٧٧)؛ والتسعة عشر في سورة المدثر (٧٤:٣٠)",
  "Surah Az-Zumar (39:71) compared with (39:73)":
    "سورة الزمر (٣٩:٧١) مقارنةً بالآية (٣٩:٧٣)",
  "Sahih Muslim, Book of Faith (Kitab al-Iman), in the hadith of the intercession — Sahih. The forty-year wording: Sahih Muslim, Book of Zuhd, Hadith 2967 — Sahih, but in the words of Utbah ibn Ghazwan رضي الله عنه, not the Prophet ﷺ":
    "صحيح مسلم، كتاب الإيمان، في حديث الشفاعة — صحيح. ولفظ الأربعين سنة: صحيح مسلم، كتاب الزهد والرقائق، حديث ٢٩٦٧ — صحيح، ولكنه من كلام عتبة بن غزوان رضي الله عنه لا من كلام النبي ﷺ",
  "Surah 'Abasa (80:34-37)":
    "سورة عبس (٨٠:٣٤–٣٧)",
  "Sahih Muslim, Book of the Travellers' Prayer":
    "صحيح مسلم، كتاب صلاة المسافرين",
  "Sahih al-Bukhari, Book of Tafsir — Ibn Mas'ud; Sahih Muslim, Book of Tribulations — the hadith of the ten":
    "صحيح البخاري، كتاب التفسير — عن ابن مسعود؛ صحيح مسلم، كتاب الفتن — حديث العشر",
  "Sahih Muslim, Book of Tribulations — Hudhayfah ibn Usayd, the hadith of the ten":
    "صحيح مسلم، كتاب الفتن — حذيفة بن أسيد، حديث العشر",
  "Sahih Muslim, Book of Tribulations — the hadith of the ten":
    "صحيح مسلم، كتاب الفتن — حديث العشر",
  "Sahih Muslim, Book of Tribulations — Hudhayfah ibn Usayd, the hadith of the ten; Sahih Muslim, Book of Faith — the sun and the beast":
    "صحيح مسلم، كتاب الفتن — حذيفة بن أسيد، حديث العشر؛ صحيح مسلم، كتاب الإيمان — الشمس والدابّة",
  "Jami at-Tirmidhi, Book of the Description of the Day of Judgement — outside the two Sahihs, graded Strong":
    "جامع الترمذي، أبواب صفة القيامة — خارج الصحيحين، وإسناده قويّ",
  "Surah Al-Qamar (54:1); also al-Bukhari and Muslim":
    "سورة القمر (٥٤:١)؛ وفي البخاري ومسلم أيضًا",
  "Sahih Muslim, Book of Faith — Umar ibn al-Khattab; also Sahih al-Bukhari 50":
    "صحيح مسلم، كتاب الإيمان — عن عمر بن الخطاب؛ وصحيح البخاري ٥٠ أيضًا",
  "Musnad Ahmad — Hudhayfah ibn al-Yaman. OUTSIDE THE TWO SAHIHS; graded Sahih by al-Albani (as-Silsilah as-Sahihah). NOTE: unlike every al-Bukhari and Muslim citation on this site, the wording here could not be checked against a primary text file, so it is given as the widely transmitted wording and is cited by collection rather than by a number":
    "مسند أحمد — عن حذيفة بن اليمان. خارج الصحيحين؛ وصحّحه الألبانيّ (السلسلة الصحيحة). تنبيه: بخلاف أحاديث البخاري ومسلم في هذا الموقع، لم يُتحقَّق من هذا اللفظ في نسخةٍ أصلية، فهو مذكورٌ باللفظ المشهور، ويُعزى إلى مصدره دون رقم",

  /* The Quran page's sign-in box: its labels are en-only/Arabic pairs, and
     these two placeholders are attributes, which only this dictionary reaches. */
  /* The Golden Age page's source lines that have no Arabic twin of their own.
     Keyed by the exact English. */
  "Surah An-Nisa (4:11-12); al-Khwarizmi, Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala":
    "سورة النساء (٤:١١–١٢)؛ الخوارزمي، «الكتاب المختصر في حساب الجبر والمقابلة»",
  "Surah Aal-Imran (3:165) — said to the companions themselves, after Uhud":
    "سورة آل عمران (٣:١٦٥) — قيلت للصحابة أنفسهم بعد أُحُد",
  "Surah Al-A'raf (7:179); the same image again at Al-Furqan (25:44)":
    "سورة الأعراف (٧:١٧٩)؛ والصورة نفسها في سورة الفرقان (٢٥:٤٤)",
  "Surah An-Nur (24:30), and then (24:31); “Modesty is a branch of faith” — Sahih al-Bukhari, Hadith 9, and Muslim":
    "سورة النور (٢٤:٣٠)، ثم (٢٤:٣١)؛ و«الحياء شعبةٌ من الإيمان» — صحيح البخاري، حديث ٩، ومسلم",
  "The Quran; and the hadith on modesty is Sahih — agreed upon":
    "القرآن؛ وحديث الحياء صحيح — متّفقٌ عليه",
  "Narrated by al-Bayhaqi in Shu'ab al-Iman and by Abu Ya'la":
    "رواه البيهقي في «شعب الإيمان»، وأبو يعلى",
  "Outside the two Sahihs — graded Sahih by al-Albani in Sahih al-Jami'; some scholars considered its chain weak. Its meaning is supported by the Quran's command to give full measure.":
    "خارج الصحيحين — صحّحه الألبانيّ في «صحيح الجامع»، وضعّف بعضُ العلماء إسناده. ومعناه يشهد له أمرُ القرآن بإيفاء الكيل.",
  "Jami at-Tirmidhi, Book of Qadar, Hadith 2140; also narrated by Ahmad and Ibn Majah":
    "جامع الترمذي، أبواب القدر، حديث ٢١٤٠؛ ورواه أحمد وابن ماجه",
  "Outside the two Sahihs — narrated by at-Tirmidhi; graded Sahih by al-Albani":
    "خارج الصحيحين — رواه الترمذي، وصحّحه الألبانيّ",
  "Surah An-Nur (24:55) — the promise, and its condition in the final clause":
    "سورة النور (٢٤:٥٥) — الوعد، وشرطه في آخر الآية",

  /* The full lives' citations that carry an English comment of their own
     ("— NOT established", "historical sira, not hadith"), which the
     reference translator can only half translate. Exact English keys. */
  "historical and Israiliyyat accounts — NOT established, and not relied on here":
    "روايات تاريخية وإسرائيليات — غير ثابتة، ولا يُعتمد عليها هنا",
  "Surah An-Nisa (4:164); asking to see Him: Surah Al-A'raf (7:143) — Quran":
    "سورة النساء (٤:١٦٤)؛ وسؤاله رؤيةَ ربّه: سورة الأعراف (٧:١٤٣) — قرآن",
  "Israiliyyat and later histories — NOT established": "إسرائيليات وتواريخ متأخّرة — غير ثابتة",
  "Israiliyyat — NOT established": "إسرائيليات — غير ثابتة",
  "not in the Quran or the two Sahihs — NOT established": "ليس في القرآن ولا في الصحيحين — غير ثابت",
  "historical accounts, e.g. Ibn Kathir, Al-Bidaya wan-Nihaya — historical sira, NOT hadith":
    "روايات تاريخية، منها ابن كثير في «البداية والنهاية» — سيرةٌ تاريخيّة، لا حديث",
  "tafsir and historical accounts — NOT part of the hadith itself":
    "التفسير والروايات التاريخية — وليس من الحديث نفسه",
  "appoint for us a king: Surah Al-Baqarah (2:246) — Quran": "طلبُهم مَلِكًا: سورة البقرة (٢:٢٤٦) — قرآن",
  "historical accounts, e.g. Ibn Kathir — historical sira, NOT hadith":
    "روايات تاريخية، منها ابن كثير — سيرةٌ تاريخيّة، لا حديث",
  "Musannaf Ibn Abi Shaybah and historical accounts — historical sira, NOT hadith":
    "مصنّف ابن أبي شيبة وروايات تاريخية — سيرةٌ تاريخيّة، لا حديث",
  "historical accounts only — NOT established in the Quran or the two Sahihs":
    "روايات تاريخية فقط — لم يثبت في القرآن ولا في الصحيحين",
  "historical sira accounts (Ibn Ishaq, Ibn Kathir) — historical sira, NOT hadith":
    "روايات السيرة التاريخية (ابن إسحاق، ابن كثير) — سيرةٌ تاريخيّة، لا حديث",
  "historical sira accounts — historical sira, NOT hadith; his forbearance that day is established in the two Sahihs in other wordings":
    "روايات السيرة التاريخية — سيرةٌ تاريخيّة، لا حديث؛ وحِلمُه ﷺ يومئذٍ ثابتٌ في الصحيحين بألفاظٍ أخرى",
  "Have I conveyed? Sahih al-Bukhari, Book of Hajj, Hadith 1741 — Sahih, agreed upon":
    "«ألا هل بلّغت؟» صحيح البخاري، كتاب الحج، حديث ١٧٤١ — صحيح، متّفقٌ عليه",
  "recorded in the histories of at-Tabari and Ibn Sa'd — historical":
    "مذكورٌ في تاريخ الطبري وطبقات ابن سعد — تاريخيّ",
  "Ibn Sa'd, Tabaqat — historical": "ابن سعد، «الطبقات» — تاريخيّ",
  "Ibn Ishaq and Ibn Sa'd — historical sira, not in the two Sahihs":
    "ابن إسحاق وابن سعد — سيرةٌ تاريخيّة، ليست في الصحيحين",
  "Musnad Ahmad, and Ibn Ishaq (in Ibn Hisham) — historical sira, reported at length from Salman himself":
    "مسند أحمد، وابن إسحاق (في سيرة ابن هشام) — سيرةٌ تاريخيّة، مرويّةٌ مطوّلةً عن سلمان نفسه",
  "Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4101 — Sahih for the events of the Trench; the attribution of the idea to Salman is from the sira":
    "صحيح البخاري، كتاب المغازي، حديث ٤١٠١ — صحيحٌ في وقائع الخندق؛ ونسبة الفكرة إلى سلمان من كتب السيرة",
  "Sahih al-Bukhari, Hadith 143 — Sahih; 'and teach him the interpretation' is in Musnad Ahmad — outside the two Sahihs, graded Sahih by al-Albani":
    "صحيح البخاري، حديث ١٤٣ — صحيح؛ وزيادة «وعلّمه التأويل» في مسند أحمد — خارج الصحيحين، وصحّحها الألبانيّ",
  "Musnad Ahmad and others — outside the two Sahihs": "مسند أحمد وغيره — خارج الصحيحين",
  "Sahih Muslim, Book of the Merits of the Companions — Sahih; the verse is Surah Luqman (31:15)":
    "صحيح مسلم، كتاب فضائل الصحابة — صحيح؛ والآية من سورة لقمان (٣١:١٥)",
  "the verse is Surah Al-Mujadila (58:22) — Quran; the incident is from historical sira accounts, not hadith":
    "الآية من سورة المجادلة (٥٨:٢٢) — قرآن؛ والحادثة من روايات السيرة التاريخية، لا حديث",
  "Sahih al-Bukhari, Book of the Merits of the Ansar, Hadith 3803 — Sahih, and also in Muslim":
    "صحيح البخاري، كتاب مناقب الأنصار، حديث ٣٨٠٣ — صحيح، وهو في مسلم أيضًا",
  "reported outside the two Sahihs; stated here as such and not relied upon":
    "مرويٌّ خارج الصحيحين؛ ذُكر هنا على هذا الوصف ولا يُعتمد عليه",
  "the verse is Surah An-Nahl (16:106) — Quran; the account is reported in tafsir and sira — outside the two Sahihs":
    "الآية من سورة النحل (١٦:١٠٦) — قرآن؛ والخبر مرويٌّ في التفسير والسيرة — خارج الصحيحين",
  "historical and hadith sources outside the two Sahihs": "مصادر تاريخية وحديثية خارج الصحيحين",
  "Sunan Abu Dawud and at-Tirmidhi — outside the two Sahihs; scholars have discussed its chain":
    "سنن أبي داود والترمذي — خارج الصحيحين؛ وقد تكلّم العلماء في إسناده",
  "reported outside the two Sahihs": "مرويٌّ خارج الصحيحين",
  "historical sira accounts (Ibn Ishaq, Ibn Sa'd, Ibn Kathir) — historical sira, NOT hadith":
    "روايات السيرة التاريخية (ابن إسحاق، ابن سعد، ابن كثير) — سيرةٌ تاريخيّة، لا حديث",
  "Sahih al-Bukhari, Hadith 2880-2881 mentions the women carrying water — Sahih":
    "صحيح البخاري، حديث ٢٨٨٠–٢٨٨١، وفيه ذكر النساء يحملن الماء — صحيح",
  "Musnad Ahmad — outside the two Sahihs, graded authentic by scholars of hadith":
    "مسند أحمد — خارج الصحيحين، وصحّحه أهل الحديث",
  "reported in tafsir and the biographical works — outside the two Sahihs; the verse is Surah Al-Baqarah (2:207) — Quran":
    "مرويٌّ في التفسير وكتب التراجم — خارج الصحيحين؛ والآية من سورة البقرة (٢:٢٠٧) — قرآن",
  "reported in the biographical works and tafsir — outside the two Sahihs":
    "مرويٌّ في كتب التراجم والتفسير — خارج الصحيحين",
  "Sunan Abu Dawud and at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani; the meaning is supported in Sahih al-Bukhari, Hadith 3212":
    "سنن أبي داود والترمذي — خارج الصحيحين، وصحّحه الألبانيّ؛ ويشهد لمعناه صحيح البخاري، حديث ٣٢١٢",
  "Sahih al-Bukhari, Hadith 1461 — Sahih; the verse is Surah Al-Imran (3:92) — Quran":
    "صحيح البخاري، حديث ١٤٦١ — صحيح؛ والآية من سورة آل عمران (٣:٩٢) — قرآن",
  "reported in the biographical and historical works — historical sira, not hadith":
    "مرويٌّ في كتب التراجم والتاريخ — سيرةٌ تاريخيّة، لا حديث",
  "Sahih al-Bukhari, Hadith 3613 and 4846 and Sahih Muslim — Sahih, agreed upon; the verse is Surah Al-Hujurat (49:2)":
    "صحيح البخاري، حديث ٣٦١٣ و٤٨٤٦، وصحيح مسلم — صحيح، متّفقٌ عليه؛ والآية من سورة الحجرات (٤٩:٢)",
  "historical accounts — historical sira, not hadith; the verse is Surah Al-Imran (3:146)":
    "روايات تاريخية — سيرةٌ تاريخيّة، لا حديث؛ والآية من سورة آل عمران (٣:١٤٦)",
  "reported with the account of her marriage — outside the two Sahihs": "مرويٌّ مع خبر زواجها — خارج الصحيحين",
  "her death at Sarif — Sahih al-Bukhari, Hadith 4258; her funeral there — Sahih al-Bukhari, Hadith 5067, and Sahih Muslim, Hadith 1465 — Sahih; that the marriage itself was at Sarif — Sunan Abu Dawud, Hadith 1843 — outside the two Sahihs; her asking to be buried there — historical accounts":
    "وفاتها بسَرِف — صحيح البخاري، حديث ٤٢٥٨؛ وجنازتها هناك — صحيح البخاري، حديث ٥٠٦٧، وصحيح مسلم، حديث ١٤٦٥ — صحيح؛ وكونُ الزواج نفسه بسَرِف — سنن أبي داود، حديث ١٨٤٣ — خارج الصحيحين؛ ووصيّتها أن تُدفن هناك — روايات تاريخية",
  "very little about her is established in the two Sahihs, and this entry does not pretend otherwise":
    "القليل جدًّا من خبرها ثابتٌ في الصحيحين، ولا تدّعي هذه الترجمة غير ذلك",

  /* The Quran reader's composite source lines ("verse · the hadith that goes
     with it: collection — narrator"), too mixed for the part translator. */
  "Sahih al-Bukhari, Book of Tafsir, on Surah Al-Baqarah — the Prophet ﷺ explaining wasatan as 'adlan":
    "صحيح البخاري، كتاب التفسير، في سورة البقرة — تفسير النبي ﷺ «وسطًا» بـ«عدلًا»",
  "Surah Al-Baqarah (2:152) · The qudsi narration: Sahih al-Bukhari 7405 and Sahih Muslim — Abu Hurairah":
    "سورة البقرة (٢:١٥٢) · والحديث القدسيّ: صحيح البخاري ٧٤٠٥ وصحيح مسلم — عن أبي هريرة",
  "Surah Al-Baqarah (2:261) · The sheep: at-Tirmidhi 2470 — outside the two Sahihs, authenticated by al-Albani":
    "سورة البقرة (٢:٢٦١) · وحديث الشاة: الترمذي ٢٤٧٠ — خارج الصحيحين، وصحّحه الألبانيّ",
  "Surah Aal-Imran (3:92) · Abu Talhah and Bayruha: Sahih al-Bukhari 1461 and Sahih Muslim — Anas ibn Malik":
    "سورة آل عمران (٣:٩٢) · وأبو طلحة وبَيرُحاء: صحيح البخاري ١٤٦١ وصحيح مسلم — عن أنس بن مالك",
  "Surah An-Nisa (4:34) · “He never struck a woman or a servant”: Sahih Muslim, Book of Virtues — Aishah · “The best of you are the best to their wives”: at-Tirmidhi 3895 — outside the two Sahihs, authenticated by al-Albani · Al-Mufradat, Ar-Raghib al-Isfahani, entry q-w-m":
    "سورة النساء (٤:٣٤) · و«ما ضرب امرأةً ولا خادمًا»: صحيح مسلم، كتاب الفضائل — عن عائشة · و«خيركم خيركم لأهله»: الترمذي ٣٨٩٥ — خارج الصحيحين، وصحّحه الألبانيّ · «المفردات» للراغب الأصفهاني، مادّة (ق و م)",
  "Surah An-Nisa (4:58) · The key of the Ka'bah: reported in the books of tafsir and sira — historical report, not in the two Sahihs":
    "سورة النساء (٤:٥٨) · ومفتاح الكعبة: مرويٌّ في كتب التفسير والسيرة — خبرٌ تاريخيّ، ليس في الصحيحين",
  "Surah Al-A'raf (7:172) · The fitrah: Sahih al-Bukhari 1385 and Sahih Muslim — Abu Hurairah":
    "سورة الأعراف (٧:١٧٢) · والفطرة: صحيح البخاري ١٣٨٥ وصحيح مسلم — عن أبي هريرة",
  "Surah Hud (11:112) · “Hud and its sisters turned my hair white”: at-Tirmidhi 3297 — outside the two Sahihs":
    "سورة هود (١١:١١٢) · و«شيّبتني هودٌ وأخواتها»: الترمذي ٣٢٩٧ — خارج الصحيحين",
  "Ar-Raghib al-Isfahani, Al-Mufradat, entries و د د and ر ح م":
    "الراغب الأصفهاني، «المفردات»، مادّتا (و د د) و(ر ح م)",
  "Surah Al-Ahqaf (46:15), read with Al-Baqarah (2:233) and Luqman (31:14)":
    "سورة الأحقاف (٤٦:١٥)، وتُقرأ مع سورة البقرة (٢:٢٣٣) وسورة لقمان (٣١:١٤)",
  "Surah Al-Hujurat (49:12) · The definition of backbiting: Sahih Muslim, Book of Righteousness — Abu Hurairah":
    "سورة الحجرات (٤٩:١٢) · وتعريف الغيبة: صحيح مسلم، كتاب البرّ والصلة — عن أبي هريرة",
  "Surah Ar-Rahman (55:13) · The recitation to the jinn: at-Tirmidhi 3291 — outside the two Sahihs":
    "سورة الرحمن (٥٥:١٣) · وقراءتها على الجنّ: الترمذي ٣٢٩١ — خارج الصحيحين",
  "Surah Ar-Rahman (55:60) · Ihsan defined: Sahih al-Bukhari 50 (from Abu Hurairah) and Sahih Muslim 8 (from Umar ibn al-Khattab)":
    "سورة الرحمن (٥٥:٦٠) · وتعريف الإحسان: صحيح البخاري ٥٠ (عن أبي هريرة)، وصحيح مسلم ٨ (عن عمر بن الخطاب)",
  "Surah Al-Hadid (57:16), read with 57:17 · Ibn Mas'ud's report: Sahih Muslim, Book of Tafsir":
    "سورة الحديد (٥٧:١٦)، وتُقرأ مع ٥٧:١٧ · وخبر ابن مسعود: صحيح مسلم، كتاب التفسير",
  "Surah Al-Mumtahanah (60:8) · Asma's mother: Sahih al-Bukhari 2620 and Sahih Muslim — Asma bint Abi Bakr":
    "سورة الممتحنة (٦٠:٨) · وأمّ أسماء: صحيح البخاري ٢٦٢٠ وصحيح مسلم — عن أسماء بنت أبي بكر",
  "Surah Al-Qalam (68:4) · “His character was the Quran”: Sahih Muslim, Book of the Prayer of Travellers — Aishah":
    "سورة القلم (٦٨:٤) · و«كان خُلُقه القرآن»: صحيح مسلم، كتاب صلاة المسافرين — عن عائشة",
  "Surah Al-Qiyamah (75:22-23) · “You will see your Lord”: Sahih al-Bukhari 554 and Sahih Muslim — Jarir ibn Abdullah":
    "سورة القيامة (٧٥:٢٢–٢٣) · و«إنكم سترون ربكم»: صحيح البخاري ٥٥٤ وصحيح مسلم — عن جرير بن عبد الله",
  "Surah Al-Mutaffifin (83:14) · The black spot: at-Tirmidhi 3334 — outside the two Sahihs, authenticated by al-Albani":
    "سورة المطففين (٨٣:١٤) · والنكتة السوداء: الترمذي ٣٣٣٤ — خارج الصحيحين، وصحّحه الألبانيّ",
  "Surah Al-Layl (92:5-10) · Sahih al-Bukhari 4949 and Sahih Muslim — Ali ibn Abi Talib":
    "سورة الليل (٩٢:٥–١٠) · صحيح البخاري ٤٩٤٩ وصحيح مسلم — عن عليّ بن أبي طالب",
  "Surah Ad-Duha (93:3), read with 93:6-8 · The pause in revelation: Sahih al-Bukhari 4950 and Sahih Muslim — Jundub ibn Sufyan":
    "سورة الضحى (٩٣:٣)، وتُقرأ مع ٩٣:٦–٨ · وفترة الوحي: صحيح البخاري ٤٩٥٠ وصحيح مسلم — عن جندب بن سفيان",
  "Surah Al-Qadr (97:3) · The date being lifted: Sahih al-Bukhari 49 — Ubadah ibn as-Samit":
    "سورة القدر (٩٧:٣) · ورفعُ العلم بتعيين ليلتها: صحيح البخاري ٤٩ — عن عبادة بن الصامت",
  "Surah Al-Qari'ah (101:6-9) · The hadith of the card: at-Tirmidhi 2639 — outside the two Sahihs, authenticated by al-Albani":
    "سورة القارعة (١٠١:٦–٩) · وحديث البطاقة: الترمذي ٢٦٣٩ — خارج الصحيحين، وصحّحه الألبانيّ",
  "Surah At-Takathur (102:8) · The dates and water: Sahih Muslim, Book of Drinks — Abu Hurairah":
    "سورة التكاثر (١٠٢:٨) · والتمر والماء: صحيح مسلم، كتاب الأشربة — عن أبي هريرة",
  "A statement of Imam ash-Shafi'i, reported in the tafsir works — the words of a scholar, NOT a hadith":
    "قولٌ للإمام الشافعي، منقولٌ في كتب التفسير — كلامُ عالمٍ، لا حديث",
  "Reported in the works on the Quranic sciences — historical report, outside the two Sahihs":
    "مرويٌّ في كتب علوم القرآن — خبرٌ تاريخيّ، خارج الصحيحين",
  "The wording of the verse; nothing further on their description is established in the two Sahihs":
    "لفظ الآية؛ ولم يثبت في الصحيحين شيءٌ زائد في وصفها",
  "Surah An-Nasr (110:3) · Umar and Ibn Abbas: Sahih al-Bukhari 4970":
    "سورة النصر (١١٠:٣) · وخبر عمر وابن عباس: صحيح البخاري ٤٩٧٠",
  "Surah Al-Falaq (113:1-5) · Reciting them in his final illness: Sahih al-Bukhari 5735 — Aishah":
    "سورة الفلق (١١٣:١–٥) · وقراءته ﷺ إيّاها في مرض موته: صحيح البخاري ٥٧٣٥ — عن عائشة",

  "Username — اسم المستخدم": "اسم المستخدم",
  "Password — كلمة المرور": "كلمة المرور",
  "Access code — رمز الدخول": "رمز الدخول",

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
  /* THE QURAN READER'S SOURCE LINES. Measured by opening all 114 surahs in
     Arabic mode: 83 of them came out half-English — "سورة يونس (10:62), read
     with 10:63", "Tafsir الطبري". These run first: the surah-name step that
     follows needs the سورة put in front of a name after "read with". */
  [/,\s*read with\s+(?=['’A-Z])/g, "، وتُقرأ مع سورة "],
  [/,\s*read with\s+/g, "، وتُقرأ مع "],
  [/,\s*and again at\s+/g, "، وتكرّرت في "],
  [/\s+with\s+(?=Surah\b|سورة)/g, " مع "],
  [/\bTafsir at-Tabari\b/g, "تفسير الطبري"],
  [/^The wording of the verse$/g, "لفظ الآية"],
  [/\bThe Uthmani text\b/g, "الرسم العثماني"],
  [/^Reported from\s+/g, "مرويٌّ عن "],
  [/\s*—\s*quoted in his own words/g, " — منقولٌ بلفظه"],

  /* BOOK NAMES THAT WERE COMING OUT HALF-ENGLISH, measured September 2026 by
     running every "Book of …" phrase in the data through this function: 82 of
     159 left English behind — "كتاب الفضائل of the قرآن", "كتاب Wills",
     "كتاب Loans و Settling Debts". Each is a whole name with a word boundary
     at both ends, the long form always above any name that is its prefix
     ("Book of Virtue and Good Manners" above "Book of Virtue"). A name that
     carries its own transliteration in brackets is matched WITH it where the
     bracket says something the English does not (al-Manaqib, an-Nafaqat). */
  [/\bBook of Virtues \(al-Manaqib\)/g, "كتاب المناقب"],
  [/\bBook of Supporting the Family \(an-Nafaqat\)/g, "كتاب النفقات"],
  [/\bBook of Transactions \(Kitab al-Musaqah\)/g, "كتاب المساقاة"],
  [/\bBook of Suckling \(Kitab ar-Rida'\)/g, "كتاب الرضاع"],
  [/\bBook of Government \(al-Imarah\)/g, "كتاب الإمارة"],
  [/\bSahih Muslim, Book of Transactions\b/g, "صحيح مسلم، كتاب المساقاة"],
  [/\bBook of Knowledge of Ingenious Mechanical Devices\b/g, "كتاب الجامع بين العلم والعمل النافع في صناعة الحيل"],
  [/\b(?:the )?Book of (?:the )?Virtues of the Companions\b/g, "كتاب فضائل الصحابة"],
  [/\b(?:the )?Book of (?:the )?Virtues of the Qur'?an\b/g, "كتاب فضائل القرآن"],
  [/\bBook of Mosques and Places of Prayer\b/g, "كتاب المساجد ومواضع الصلاة"],
  [/\bBook of Paradise and its Description\b/g, "كتاب الجنّة وصفة نعيمها وأهلها"],
  [/\bBook of Righteousness and Good Manners\b/g, "كتاب البرّ والصلة والآداب"],
  [/\bBook of Virtue and Good Manners\b/g, "كتاب البرّ والصلة والآداب"],
  [/\bBook of Loans and Settling Debts\b/g, "كتاب الاستقراض وأداء الديون"],
  [/\bBook of Jihad and Expeditions\b/g, "كتاب الجهاد والسير"],
  [/\bBook of Sales and Trade\b/g, "كتاب البيوع"],
  [/\bBook of Reports of Single Narrators(?: \(Akhbar al-Ahad\))?/g, "كتاب أخبار الآحاد"],
  [/\bBook of Softening of the Hearts\b/g, "كتاب الرقاق"],
  [/\bBook of Softening the Heart\b/g, "كتاب الرقاق"],
  [/\bBook of Heart Softeners\b/g, "كتاب الرقاق"],
  [/\bBook of Supporting the Family\b/g, "كتاب النفقات"],
  [/\bBook of Shortening the Prayer\b/g, "كتاب تقصير الصلاة"],
  [/\bBook of Asking Permission\b/g, "كتاب الاستئذان"],
  [/\bBook of General Behaviou?r\b/g, "كتاب الأدب"],
  [/\bBook of (?:Legal|Prescribed) Punishments\b/g, "كتاب الحدود"],
  [/\bBook of Limits and Punishments\b/g, "كتاب الحدود"],
  [/\bBook of (?:the )?Military Expeditions\b/g, "كتاب المغازي"],
  [/\bBook of Maghazi\b/g, "كتاب المغازي"],
  [/\bBook of Ablutions\b/g, "كتاب الوضوء"],
  [/\bBook of Aqiqah\b/g, "كتاب العقيقة"],
  [/\bBook of Battles\b/g, "كتاب الملاحم"],
  [/\bBook of Coercion\b/g, "كتاب الإكراه"],
  [/\bBook of Conditions\b/g, "كتاب الشروط"],
  [/\bBook of Government\b/g, "كتاب الإمارة"],
  [/\bBook of Hiring\b/g, "كتاب الإجارة"],
  [/\bBook of Inheritance\b/g, "كتاب الفرائض"],
  [/\bBook of Judge?ments\b/g, "كتاب الأحكام"],
  [/\bBook of Musaqah\b/g, "كتاب المساقاة"],
  [/\bBook of Pilgrimage\b/g, "كتاب الحج"],
  [/\bBook of Suckling\b/g, "كتاب الرضاع"],
  [/\bBook of Virtue\b/g, "كتاب البرّ"],
  [/\bBook of Wills\b/g, "كتاب الوصايا"],
  [/\bBook of Witnesses\b/g, "كتاب الشهادات"],
  [/\bBook of Zuhd\b/g, "كتاب الزهد"],
  [/\bBook of Optics\b/g, "كتاب المناظر"],
  [/\bChapters on (?:Judge?ments|Rulings)\b/g, "أبواب الأحكام"],
  [/\bChapters on Virtues\b/g, "أبواب المناقب"],
  [/\bChapters on Zuhd\b/g, "أبواب الزهد"],
  [/\bthe Book of Allah\b/g, "كتاب الله"],

  /* Narrators, graders and collections that were still rendering in Latin
     inside an otherwise Arabic citation. Measured across eight pages in
     Arabic mode. Longest form first, per the rule above. */
  [/\bShu'ayb al-Arna'ut\b/g, "شعيب الأرناؤوط"],
  [/\bSunan al-Bayhaqi\b/g, "سنن البيهقي"],
  [/\bShu'ab al-Iman\b/g, "شعب الإيمان"],
  [/\bFatimah bint Qays\b/g, "فاطمة بنت قيس"],
  [/\bMu'adh ibn Jabal\b/g, "معاذ بن جبل"],
  [/\bShaddad ibn Aws\b/g, "شداد بن أوس"],
  [/\bZayd ibn Arqam\b/g, "زيد بن أرقم"],
  [/\bUqbah ibn Amir\b/g, "عقبة بن عامر"],
  [/\bal-Bayhaqi\b/g, "البيهقي"],

  /* ---- LONGEST FIRST: these were being masked by a shorter entry below ----
     AR_PARTS is applied in order and the first match wins, so a SHORT pattern
     that is a substring of a LONGER one silently eats it and leaves the tail in
     English: "Book of Food and Drink" came out as "كتاب الأطعمة و Drink", and
     "narrated from Thawban" as "narrated عن ثوبان". This repo has recorded that
     trap twice and it came back both times, because the fix was to ADD the long
     form rather than to place it above the short one. These 17 are hoisted here
     so the rule holds by construction. scratchpad/arparts.py re-checks it. */
  ["both also narrated by Muslim", "وأخرجهما مسلمٌ أيضًا"],
  [/\bAbdullah ibn Amr ibn al-As\b/g, "عبد الله بن عمرو بن العاص"],
  [/\bHudhayfah ibn Usayd al-Ghifari\b/g, "حذيفة بن أسيد الغفاري"],
  [/\bthe incident is from historical sira accounts\b/g, "الخبر من روايات السيرة التاريخية"],
  [/\bhistorical sira accounts\b/g, "روايات السيرة التاريخية"],
  [/\bhistorical sira, not hadith\b/g, "سيرة تاريخية لا حديث"],
  [/Book of Food and Drink/g, "كتاب الأطعمة والأشربة"],
  [/Book of Dress and Adornment/g, "كتاب اللباس والزينة"],
  [/\bnarrated from Ibn Umar\b/g, "من حديث ابن عمر"],
  [/\bnarrated from Thawban\b/g, "من حديث ثوبان"],
  [/\bnarrated from\b/g, "من حديث"],
  [/Book of Remembrance and Supplication/g, "كتاب الذكر والدعاء"],


  /* Reference and grading lines from js/journey.js. The owner reported that
     names and references were still showing in English in Arabic mode.
     Longest first — the first match wins. */
  ["graded it sahih on the conditions of the two Shaykhs", "صححه على شرط الشيخين"],
  ["the long hadith of al-Bara ibn Azib", "حديث البراء بن عازب الطويل"],
  ["The same hadith of al-Bara ibn Azib", "الحديث نفسه، حديث البراء بن عازب"],
  ["the long hadith of an-Nawwas ibn Sam'an", "حديث النوّاس بن سمعان الطويل"],
  ["the hadith of an-Nawwas ibn Sam'an", "حديث النوّاس بن سمعان"],
  ["Book of Tribulations and the Portents of the Last Hour", "كتاب الفتن وأشراط الساعة"],
  ["Book of the Stories of the Prophets", "كتاب أحاديث الأنبياء"],
  ["Book of Virtue and Good Manners", "كتاب البرّ والصلة والآداب"],
  ["Book of Softening the Hearts", "كتاب الرقاق"],
  ["Book of the Beginning of Creation", "كتاب بدء الخلق"],
  ["Book of Oppressions", "كتاب المظالم"],
  ["Book of Afflictions", "كتاب الفتن"],
  ["Book of Invocations", "كتاب الدعوات"],
  ["Book of Paradise", "كتاب الجنّة"],
  ["Book of Funerals", "كتاب الجنائز"],
  ["Book of Fasting", "كتاب الصوم"],
  ["Book of Faith", "كتاب الإيمان"],
  ["Book of Tafsir", "كتاب التفسير"],
  ["Book of Adhan", "كتاب الأذان"],
  ["Book of Jihad", "كتاب الجهاد"],
  ["Book of Zakat", "كتاب الزكاة"],
  ["Book of Wudu", "كتاب الوضوء"],
  ["Book of Virtues", "كتاب الفضائل"],
  ["Book of Marriage", "كتاب النكاح"],
  ["Book of Patients", "كتاب المرضى"],
  ["Book of Food", "كتاب الأطعمة"],
  ["al-Bara ibn Azib", "البراء بن عازب"],
  ["an-Nawwas ibn Sam'an", "النوّاس بن سمعان"],
  ["Abu Sa'id al-Khudri", "أبو سعيد الخدريّ"],
  ["Abdullah ibn Amr", "عبد الله بن عمرو"],
  ["al-Miqdad ibn al-Aswad", "المقداد بن الأسود"],
  ["Suhayb ar-Rumi", "صهيب الروميّ"],
  ["Anas ibn Malik", "أنس بن مالك"],
  ["Adiy ibn Hatim", "عديّ بن حاتم"],
  ["Abu Hurayrah", "أبو هريرة"],
  ["Umm Atiyyah", "أمّ عطيّة"],
  ["Aishah", "عائشة"],
  ["Ibn Umar", "ابن عمر"],
  ["the same book", "الكتاب نفسه"],
  ["a supporting narration, weaker than the first", "روايةٌ شاهدة، أضعف من الأولى"],
  ["is outside the two Sahihs", "خارج الصحيحين"],
  ["sits outside the two Sahihs", "خارج الصحيحين"],
  ["and is cited by collection rather than by a number", "ويُعزى إلى مصدره دون رقم"],
  ["the questioning in the grave is agreed upon", "وسؤال القبر متّفقٌ عليه"],
  ["the description of the Dajjal is agreed upon", "ووصف الدجّال متّفقٌ عليه"],
  ["the two verses are Quran", "والآيتان من القرآن"],
  ["the verses are Quran", "والآيات من القرآن"],
  ["the verse is Quran", "والآية من القرآن"],
  ["The verses are Quran", "الآيات من القرآن"],
  ["the hadith is agreed upon", "والحديث متّفقٌ عليه"],
  ["The report about it being made light is authenticated by al-Albani", "وحديث التخفيف صححه الألبانيّ"],
  ["The hadith is authenticated by al-Albani", "والحديث صححه الألبانيّ"],
  ["authenticated by al-Albani", "صححه الألبانيّ"],
  ["graded hasan by at-Tirmidhi", "حسّنه الترمذيّ"],
  ["at-Tirmidhi graded it hasan", "حسّنه الترمذيّ"],
  ["the Muslim hadith is Sahih", "وحديث مسلمٍ صحيح"],
  ["The first is hasan/sahih", "الأوّل حسنٌ صحيح"],
  ["The wording about its size", "واللفظ الذي في عِظَمه"],
  ["The first is Sahih", "الأوّل صحيح"],
  ["the description of his eye is in", "ووصف عينه في"],
  ["the angels guarding Madinah in", "وحراسة الملائكة للمدينة في"],
  ["also narrated by Muslim in", "وأخرجه مسلمٌ أيضًا في"],
  ["also narrated by Muslim", "وأخرجه مسلمٌ أيضًا"],
  ["both also in Sahih Muslim", "وكلاهما في صحيح مسلم"],
  ["also Sahih Muslim", "وكذا صحيح مسلم"],
  ["also narrated by", "وأخرجه أيضًا"],
  ["the one in ihram", "المُحرِم"],
  ["the shroud", "الكفن"],
  ["the two qirats", "القيراطان"],
  ["hurry with it", "الإسراع بها"],
  ["the liver", "الكبد"],
  ["the earth as a loaf", "الأرض خبزةً"],
  ["the fifty thousand years", "الخمسون ألف سنة"],
  ["aged thirty-three", "أبناء ثلاثٍ وثلاثين"],
  ["the first group", "أوّل زمرة"],
  ["the strength of a hundred and the sweat", "قوّة المئة والعرق"],
  ["and the sunan collections", "وكتب السنن"],
  ["the sunan collections", "كتب السنن"],
  ["historical sira", "سيرةٌ تاريخيّة"],
  ["from", "عن"],

  /* Added after an Arabic-mode audit of judgement.html found nine citation
     lines still half in English. Longest first — the first match wins. */
  ["NOTE: unlike every البخاري و مسلم citation on this site, the wording here could not be checked against a primary text file, so it is given as the widely transmitted wording و is cited by collection rather than by a number", "تنبيه: بخلاف كلّ إحالةٍ إلى البخاري ومسلم في هذا الموقع، لم يتيسّر التحقّق من لفظ هذا الحديث في نصٍّ أصليّ، فأُثبت باللفظ المتداول، وعُزي إلى مصدره دون رقم"],
  ["the two narrations of Hudhayfah ibn Usayd, one after the other", "روايتا حذيفة بن أسيد، إحداهما تلو الأخرى"],
  ["a scholar's reading, not revelation", "قراءةُ عالمٍ لا وحي"],
  ["Ibn Hajar al-Asqalani, Fath al-Bari", "ابن حجر العسقلاني، فتح الباري"],
  ["al-Bidayah wa'n-Nihayah, year 654", "البداية والنهاية، سنة ٦٥٤"],
  ["the same hadith, continued", "الحديث نفسه، تتمّته"],
  ["Isa as a sign of the Hour", "عيسى عليه السلام من أشراط الساعة"],
  ["The closing of repentance", "إغلاق باب التوبة"],
  ["The Hour upon the worst", "قيام الساعة على شرار الخلق"],
  ["Mu'awiyah ibn Abi Sufyan", "معاوية بن أبي سفيان"],
  ["Hudhayfah ibn al-Yaman", "حذيفة بن اليمان"],
  ["as-Silsilah as-Sahihah", "السلسلة الصحيحة"],
  ["an-Nawwas ibn Sam'an", "النوّاس بن سمعان"],
  ["historical chronicles", "كتب التاريخ"],
  ["Hudhayfah ibn Usayd", "حذيفة بن أسيد"],
  ["the Signs of the Hour", "أشراط الساعة"],
  ["SAHIH, AGREED UPON", "صحيح، متّفقٌ عليه"],
  ["historical reports", "أخبارٌ تاريخيّة"],
  ["Sunan Abi Dawud", "سنن أبي داود"],
  ["widely accepted", "متلقًّى بالقبول"],
  ["Awf ibn Malik", "عوف بن مالك"],
  ["al-Qurtubi", "القرطبي"],
  ["an-Nawawi", "النووي"],
  ["Isa's rule", "حكم عيسى عليه السلام"],
  ["The dating", "التأريخ"],
  ["His rule", "حُكمه"],
  ["Thawban", "ثوبان"],

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
  [/\bhistorical and biographical accounts\b/g, "روايات تاريخية وكتب تراجم"],
  [/\bhistorical and Israiliyyat accounts\b/g, "روايات تاريخية وإسرائيليات"],
  [/\btafsir and historical accounts\b/g, "تفسير وروايات تاريخية"],
  [/\bhistorical accounts differ\b/g, "تختلف الروايات التاريخية"],
  [/\bhistorical accounts only\b/g, "روايات تاريخية فقط"],
  [/\bthe accounts differ\b/g, "تختلف الروايات"],
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
  /* Books cited by the bid'ah section. Longest first, as always. */
  [/Book of the Prayer at Night in Ramadan/g, "كتاب صلاة التراويح"],
  [/Book of Judicial Decisions/g, "كتاب الأقضية"],
  [/Book of Reconciliation/g, "كتاب الصلح"],

  /* Scholars and works cited by the bid'ah section. These are proper nouns
     inside citations, so without them an otherwise Arabic reference reads
     "ابن حزم" for one name and "Ibn Hazm" for the next. */
  [/\bIbn Hazm, Al-Ihkam\b/g, "ابن حزم، الإحكام"],
  [/\bash-Shatibi, Al-I'tisam\b/g, "الشاطبي، الاعتصام"],
  [/\bal-Maqrizi, Al-Khitat\b/g, "المقريزي، الخطط"],
  [/\bAbu Shamah, Al-Ba'ith\b/g, "أبو شامة، الباعث"],
  [/\bAbu Qatadah\b/g, "أبي قتادة"],
  [/\bIbn Hazm\b/g, "ابن حزم"],
  [/\bash-Shatibi\b/g, "الشاطبي"],
  [/\bal-Maqrizi\b/g, "المقريزي"],
  [/\bAbu Shamah\b/g, "أبو شامة"],
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
  [/Book of Heart Softeners/g, "كتاب الرقاق"],
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
  [/\band\b/g, "و"],
  /* Tidying after the book names have become Arabic. A transliteration in
     brackets straight after an Arabic book name only repeats it in Latin —
     "كتاب الإيمان (Kitab al-Iman)" — and an English "the" or "in" left in
     front of one reads "the كتاب الحدود". Anchored on كتاب, so a bracket like
     "(al-Bukhari and Muslim)" after a grading is never touched. */
  [/(كتاب [^()؛;,،—]+?)\s*\((?:Kitab\s[^)]*|(?:al|an|ar|as|at|ad|adh|ash|az|Al)-[^)]*)\)/g, "$1"],
  [/\bin the\s+(?=كتاب)/g, "في "],
  [/\bthe\s+(?=كتاب)/g, ""],
  [/\bin\s+(?=كتاب)/g, "في "]
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
    .replace(/(.)\1+/g, "$1")
    .replace(/h$/, "");       // "Al-Mujadilah" and SURAHS' "Al-Mujadila"
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
  /* A title quoted in «» is left exactly as written: an Arabic source line
     that names an English report came out as «Our Epidemic of Loneliness و
     Isolation». (Hadith and Home put the English of a reference with no
     Arabic twin in the .ar-only half, so the .ar-only half cannot simply be
     skipped.) */
  let out = text.split(/(«[^«»]*»)/).map(part => {
    if (part.charAt(0) === "«") return part;
    AR_PARTS.forEach(([re, rep]) => { part = part.replace(re, rep); });
    return part;
  }).join("");

  /* By this point [/\bSurah\b/ → "سورة"] has already fired, so the Arabic
     word is the anchor: only a name that is actually part of a citation is
     touched, never one that happens to appear in ordinary prose. The name
     runs up to the opening bracket of the verse number, or to the end. */
  const map = iitwGetSurahMap();
  // a name may open with an apostrophe ('Abasa) and be followed by " · "
  out = out.replace(/سورة\s+(['’‘]?[A-Za-z][A-Za-z'’‘\- ]*?)\s*(?=\(|$|[،,;—·])/g,
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
  ".rv-ev-ref, .gold-ref, .vf-src";

/* The same sentence, whatever the editor did with it.
   A paragraph written across four lines in the HTML arrives here with the
   newlines and the indentation inside it, and did not match a dictionary key
   written on one line — so it stayed in English, silently, and looked like a
   missing translation rather than a whitespace difference. Every key is also
   indexed with its spaces collapsed. */
const AR_LOOSE = {};
(function () {
  const flat = s => s.replace(/\s+/g, " ").trim();
  for (const k in AR) {
    const f = flat(k);
    if (!(f in AR_LOOSE)) AR_LOOSE[f] = AR[k];
  }
})();

function iitwTranslateDom(lang) {
  iitwCollectNodes().forEach(node => {
    if (node._iitwEn === undefined) node._iitwEn = node.nodeValue;
    const original = node._iitwEn;
    const key = original.trim();
    if (lang === "ar") {
      const t = AR[key] || AR_LOOSE[key.replace(/\s+/g, " ")];
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
    const ph = el._iitwPh.trim();
    const t = lang === "ar" ? (AR[ph] || AR_LOOSE[ph.replace(/\s+/g, " ")]) : null;
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
