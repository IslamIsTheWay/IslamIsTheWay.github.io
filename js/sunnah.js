/* ============================================
   Islam Is The Way — The Sunnah of the Prophet ﷺ
   --------------------------------------------
   The practical guidance of the Prophet ﷺ for daily life: prayer, sleep,
   eating, cleanliness, travel, family, character and more.

   Every entry carries its source. Where a hadith number is well known it is
   given; otherwise the collection and book are cited rather than inventing a
   number. Grading follows the terms used across this site (Sahih / Strong).

   This is a study aid for reflection, not a substitute for a scholar.
   ============================================ */

const SUNNAH_CATEGORIES = [
  { id: "prayer",       en: "Prayer (Salah)",          ar: "الصلاة" },
  { id: "purity",       en: "Purity & Wudu",           ar: "الطهارة والوضوء" },
  { id: "sleep",        en: "Sleeping & Waking",       ar: "النوم والاستيقاظ" },
  { id: "food",         en: "Eating & Drinking",       ar: "الطعام والشراب" },
  { id: "mosque",       en: "The Mosque",              ar: "المسجد" },
  { id: "dhikr",        en: "Daily Remembrance",       ar: "الأذكار اليومية" },
  { id: "manners",      en: "Manners with People",     ar: "الأخلاق ومعاملة الناس" },
  { id: "dress",        en: "Dress & Appearance",      ar: "اللباس والمظهر" },
  { id: "home",         en: "Home & Family",           ar: "البيت والأهل" },
  { id: "travel",       en: "Travel",                  ar: "السفر" },
  { id: "fasting",      en: "Fasting",                 ar: "الصيام" },
  { id: "friday",       en: "Friday (Jumu'ah)",        ar: "الجمعة" },
  { id: "quran",        en: "With the Quran",          ar: "مع القرآن" },
  { id: "health",       en: "Illness & Healing",       ar: "المرض والشفاء" },
  { id: "hardship",     en: "Worry & Hardship",        ar: "الهم والشدة" },
  { id: "character",    en: "Character of the Prophet ﷺ", ar: "أخلاق النبي ﷺ" },
  { id: "animals",      en: "Mercy to Animals",        ar: "الرحمة بالحيوان" },
  { id: "death",        en: "Death & the Grave",       ar: "الموت والقبر" }
];

const SUNNAH = [

  /* ================= SLEEPING & WAKING ================= */
  {
    cat: "sleep",
    title: "Perform wudu before going to sleep",
    titleAr: "الوضوء قبل النوم",
    detail: "The Prophet ﷺ instructed that when you go to your bed, you should perform wudu as you do for prayer, then lie down on your right side.",
    detailAr: "أوصى النبي ﷺ أنه إذا أراد الإنسان النوم فليتوضأ وضوءه للصلاة، ثم يضطجع على شقه الأيمن.",
    arabic: "إِذَا أَتَيْتَ مَضْجَعَكَ فَتَوَضَّأْ وُضُوءَكَ لِلصَّلَاةِ، ثُمَّ اضْطَجِعْ عَلَى شِقِّكَ الأَيْمَنِ",
    ref: "Sahih al-Bukhari, Book of Wudu, Hadith 247",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["sleep","sleeping","before sleep","bed","wudu","ablution","night","نوم","قبل النوم","وضوء","فراش","ليل"]
  },
  {
    cat: "sleep",
    title: "Sleep on your right side, hand under your cheek",
    titleAr: "النوم على الشق الأيمن واليد تحت الخد",
    detail: "The Prophet ﷺ would lie on his right side and place his right hand under his cheek. Sleeping on the right side is the sunnah posture.",
    detailAr: "كان النبي ﷺ ينام على شقه الأيمن ويضع يده اليمنى تحت خده. والنوم على الجانب الأيمن هو هيئة السنة.",
    arabic: "كَانَ إِذَا أَرَادَ أَنْ يَرْقُدَ وَضَعَ يَدَهُ الْيُمْنَى تَحْتَ خَدِّهِ",
    ref: "Sunan Abu Dawud, Book of Manners; Jami at-Tirmidhi",
    strength: "Sahih — authenticated by al-Albani",
    keys: ["sleep","right side","posture","cheek","hand","نوم","الشق الأيمن","خد","هيئة النوم"]
  },
  {
    cat: "sleep",
    title: "What the Prophet ﷺ said just before sleeping",
    titleAr: "دعاء النبي ﷺ عند النوم",
    detail: "When the Prophet ﷺ went to his bed he would say: 'In Your name, O Allah, I die and I live.' On waking he would say: 'All praise is for Allah who gave us life after death, and to Him is the return.'",
    detailAr: "كان النبي ﷺ إذا أخذ مضجعه قال: «بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا»، وإذا استيقظ قال: «الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ».",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا … الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6324",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["sleep dua","before sleep","waking","wake up","morning","دعاء النوم","الاستيقاظ","أذكار النوم","نشور"]
  },
  {
    cat: "sleep",
    title: "Recite Ayat al-Kursi before sleeping",
    titleAr: "قراءة آية الكرسي قبل النوم",
    detail: "Whoever recites Ayat al-Kursi (Surah Al-Baqarah 2:255) when going to bed has a protector from Allah, and no devil comes near him until morning.",
    detailAr: "من قرأ آية الكرسي (البقرة 255) عند نومه كان عليه من الله حافظ، ولا يقربه شيطان حتى يصبح.",
    arabic: "إِذَا أَوَيْتَ إِلَى فِرَاشِكَ فَاقْرَأْ آيَةَ الْكُرْسِيِّ … لَنْ يَقْرَبَكَ شَيْطَانٌ حَتَّى تُصْبِحَ",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Quran, Hadith 5010",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["ayat al kursi","kursi","protection","before sleep","satan","آية الكرسي","حفظ","حماية","شيطان","قبل النوم"]
  },
  {
    cat: "sleep",
    title: "The three surahs blown into the hands at night",
    titleAr: "المعوذات ونفخها في الكفين",
    detail: "Each night the Prophet ﷺ would cup his hands, recite Al-Ikhlas, Al-Falaq and An-Nas into them, then wipe over his head, face and body — repeating this three times.",
    detailAr: "كان النبي ﷺ كل ليلة يجمع كفيه ويقرأ فيهما: الإخلاص والفلق والناس، ثم يمسح بهما رأسه ووجهه وجسده، يفعل ذلك ثلاث مرات.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Quran, Hadith 5017",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["ikhlas","falaq","nas","muawwidhat","blow hands","night protection","المعوذات","الإخلاص","الفلق","الناس","النفخ","قبل النوم"]
  },
  {
    cat: "sleep",
    title: "Dust off the bed before lying down",
    titleAr: "نفض الفراش قبل النوم",
    detail: "The Prophet ﷺ taught that when going to bed one should dust it off with the edge of his garment three times, saying Bismillah, since he does not know what may have come onto it.",
    detailAr: "علّم النبي ﷺ أن من أتى فراشه فلينفضه بداخلة إزاره ثلاث مرات ويقول: بسم الله، فإنه لا يدري ما خلفه عليه.",
    ref: "Sahih al-Bukhari, Hadith 6320; Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["bed","dust","shake bed","before sleep","فراش","نفض","قبل النوم"]
  },
  {
    cat: "sleep",
    title: "The tasbih of Fatimah before sleep",
    titleAr: "تسبيح فاطمة عند النوم",
    detail: "The Prophet ﷺ taught his daughter Fatimah to say, on going to bed: SubhanAllah 33 times, Alhamdulillah 33 times, and Allahu Akbar 34 times — telling her it was better for her than a servant.",
    detailAr: "علّم النبي ﷺ ابنته فاطمة أن تقول عند النوم: سبحان الله ثلاثاً وثلاثين، والحمد لله ثلاثاً وثلاثين، والله أكبر أربعاً وثلاثين، وقال إن ذلك خير لها من خادم.",
    ref: "Sahih al-Bukhari, Hadith 5362; Sahih Muslim, Hadith 2727",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tasbih","33","34","subhanallah","alhamdulillah","allahu akbar","fatimah","تسبيح","فاطمة","ثلاثا وثلاثين","أذكار النوم"]
  },
  {
    cat: "sleep",
    title: "Put out fires and lamps before sleeping",
    titleAr: "إطفاء النار والمصابيح قبل النوم",
    detail: "The Prophet ﷺ instructed that fires be extinguished before sleeping, and that doors be shut and vessels covered — a teaching of practical safety.",
    detailAr: "أمر النبي ﷺ بإطفاء النار عند النوم، وإغلاق الأبواب، وتغطية الأواني — وهو من هدايته العملية في السلامة.",
    ref: "Sahih al-Bukhari, Hadith 6293; Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["fire","lamp","light","safety","doors","before sleep","نار","مصباح","إطفاء","أبواب","سلامة"]
  },
  {
    cat: "sleep",
    title: "Sleeping on the stomach is discouraged",
    titleAr: "كراهة النوم على البطن",
    detail: "The Prophet ﷺ passed a man lying on his stomach and said that this manner of lying is not liked by Allah.",
    detailAr: "مرّ النبي ﷺ برجل مضطجع على بطنه فقال إن هذه ضجعة لا يحبها الله.",
    ref: "Jami at-Tirmidhi, Book of Manners; Sunan Abu Dawud",
    strength: "Strong — authenticated by al-Albani",
    keys: ["stomach","prone","lying","posture","sleep","بطن","انبطاح","ضجعة","نوم"]
  },

  /* ================= PRAYER ================= */
  {
    cat: "prayer",
    title: "Use the miswak before every prayer",
    titleAr: "السواك عند كل صلاة",
    detail: "The Prophet ﷺ said that were it not for fear of burdening people, he would have commanded the miswak at every prayer. He used it on waking, before prayer, and on entering his home.",
    detailAr: "قال النبي ﷺ: لولا أن أشقّ على أمتي لأمرتهم بالسواك عند كل صلاة. وكان يستاك عند الاستيقاظ وقبل الصلاة وعند دخوله بيته.",
    arabic: "لَوْلَا أَنْ أَشُقَّ عَلَى أُمَّتِي لَأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلَاةٍ",
    ref: "Sahih al-Bukhari, Book of Jumu'ah, Hadith 887",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["miswak","siwak","teeth","brush","clean mouth","before prayer","سواك","مسواك","أسنان","نظافة الفم","قبل الصلاة"]
  },
  {
    cat: "prayer",
    title: "Answer the adhan, then make the dua after it",
    titleAr: "إجابة المؤذن والدعاء بعد الأذان",
    detail: "The Prophet ﷺ taught that when you hear the call to prayer you repeat what the muezzin says, then ask Allah to grant him the praised station — whoever does so, intercession is granted for him.",
    detailAr: "علّم النبي ﷺ أن من سمع النداء فليقل مثل ما يقول المؤذن، ثم يسأل الله له الوسيلة والفضيلة والمقام المحمود، فمن فعل ذلك حلّت له الشفاعة.",
    ref: "Sahih al-Bukhari, Hadith 614; Sahih Muslim, Hadith 384",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["adhan","call to prayer","muezzin","dua after adhan","intercession","أذان","مؤذن","دعاء الأذان","الوسيلة","شفاعة"]
  },
  {
    cat: "prayer",
    title: "Walk calmly to the prayer, never rushing",
    titleAr: "السكينة في المشي إلى الصلاة",
    detail: "The Prophet ﷺ said: when you hear the iqamah, walk to the prayer with calmness and dignity; do not hurry. Pray what you catch and complete what you missed.",
    detailAr: "قال النبي ﷺ: إذا سمعتم الإقامة فامشوا إلى الصلاة وعليكم السكينة والوقار ولا تسرعوا، فما أدركتم فصلوا وما فاتكم فأتموا.",
    ref: "Sahih al-Bukhari, Hadith 636; Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["walking to prayer","hurry","rush","calm","iqamah","late","المشي إلى الصلاة","السكينة","الوقار","الإسراع","الإقامة"]
  },
  {
    cat: "prayer",
    title: "Straighten the rows — it is part of the prayer",
    titleAr: "تسوية الصفوف من تمام الصلاة",
    detail: "The Prophet ﷺ would straighten the rows himself and said that straightening the rows is part of establishing the prayer, warning that differing rows lead to differing hearts.",
    detailAr: "كان النبي ﷺ يسوّي الصفوف بنفسه وقال إن تسوية الصفوف من إقامة الصلاة، وحذّر من اختلاف الصفوف فإنه يورث اختلاف القلوب.",
    ref: "Sahih al-Bukhari, Hadith 723; Sahih Muslim, Hadith 433",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["rows","saff","straighten","congregation","jamaah","صفوف","تسوية","الجماعة","اعتدال"]
  },
  {
    cat: "prayer",
    title: "Prostrate on seven bones",
    titleAr: "السجود على سبعة أعظم",
    detail: "The Prophet ﷺ said he was commanded to prostrate on seven bones: the forehead together with the nose, the two hands, the two knees, and the extremities of the two feet.",
    detailAr: "قال النبي ﷺ: أُمرت أن أسجد على سبعة أعظم: الجبهة ومعها الأنف، واليدين، والركبتين، وأطراف القدمين.",
    arabic: "أُمِرْتُ أَنْ أَسْجُدَ عَلَى سَبْعَةِ أَعْظُمٍ: الْجَبْهَةِ — وَأَشَارَ إِلَى أَنْفِهِ — وَالْيَدَيْنِ وَالرُّكْبَتَيْنِ وَأَطْرَافِ الْقَدَمَيْنِ",
    ref: "Sahih al-Bukhari, Hadith 812; Sahih Muslim, Hadith 490",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["sujood","prostration","seven bones","forehead","how to pray","سجود","سبعة أعظم","الجبهة","كيف أصلي"]
  },
  {
    cat: "prayer",
    title: "Pray with tranquillity — do not rush the movements",
    titleAr: "الطمأنينة في الصلاة",
    detail: "The Prophet ﷺ told a man who prayed hastily to go back and pray again, teaching him to be still in each position: standing, bowing, rising, prostrating and sitting — until he was settled in each.",
    detailAr: "أمر النبي ﷺ رجلاً صلّى مسرعاً أن يعيد صلاته، وعلّمه أن يطمئن في كل رُكن: القيام والركوع والرفع والسجود والجلوس، حتى يستقر في كل منها.",
    ref: "Sahih al-Bukhari, Hadith 757; Sahih Muslim, Hadith 397",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tranquility","rush prayer","fast prayer","tuma'ninah","how to pray properly","طمأنينة","العجلة","الإسراع في الصلاة","المسيء صلاته"]
  },
  {
    cat: "prayer",
    title: "The twelve voluntary rak'ahs each day",
    titleAr: "السنن الرواتب اثنتا عشرة ركعة",
    detail: "Whoever prays twelve voluntary rak'ahs in a day and night will have a house built for him in Paradise: four before Dhuhr and two after, two after Maghrib, two after Isha, and two before Fajr.",
    detailAr: "من صلى في يوم وليلة اثنتي عشرة ركعة تطوعاً بُني له بيت في الجنة: أربع قبل الظهر وركعتان بعدها، وركعتان بعد المغرب، وركعتان بعد العشاء، وركعتان قبل الفجر.",
    ref: "Sahih Muslim, Book of Prayer, Hadith 728; Jami at-Tirmidhi",
    strength: "Sahih — Narrated by Muslim",
    keys: ["sunnah prayers","rawatib","twelve rakah","voluntary","nafl","house in paradise","السنن الرواتب","اثنتا عشرة","تطوع","نافلة","بيت في الجنة"]
  },
  {
    cat: "prayer",
    title: "Two rak'ahs before sitting in the mosque",
    titleAr: "تحية المسجد ركعتان",
    detail: "The Prophet ﷺ said that when one of you enters the mosque, he should not sit down until he has prayed two rak'ahs.",
    detailAr: "قال النبي ﷺ: إذا دخل أحدكم المسجد فلا يجلس حتى يصلي ركعتين.",
    arabic: "إِذَا دَخَلَ أَحَدُكُمُ الْمَسْجِدَ فَلَا يَجْلِسْ حَتَّى يُصَلِّيَ رَكْعَتَيْنِ",
    ref: "Sahih al-Bukhari, Hadith 1163; Sahih Muslim, Hadith 714",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tahiyyat al masjid","entering mosque","two rakah","greeting the mosque","تحية المسجد","دخول المسجد","ركعتان"]
  },
  {
    cat: "prayer",
    title: "Never neglect the night prayer (Tahajjud)",
    titleAr: "قيام الليل",
    detail: "The Prophet ﷺ said the best prayer after the obligatory prayers is the night prayer. He would stand at night until his feet swelled, out of gratitude to Allah.",
    detailAr: "قال النبي ﷺ إن أفضل الصلاة بعد الفريضة صلاة الليل. وكان يقوم من الليل حتى تتفطر قدماه شكراً لله.",
    ref: "Sahih Muslim, Hadith 1163; Sahih al-Bukhari, Hadith 1130",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tahajjud","night prayer","qiyam","witr","last third","قيام الليل","تهجد","الوتر","الثلث الأخير"]
  },
  {
    cat: "prayer",
    title: "Adhkar after every prayer",
    titleAr: "الأذكار بعد الصلاة",
    detail: "After the prayer the Prophet ﷺ would seek forgiveness three times, then say: 'O Allah, You are Peace and from You is peace...' He taught saying SubhanAllah, Alhamdulillah and Allahu Akbar thirty-three times each after prayer.",
    detailAr: "كان النبي ﷺ بعد الصلاة يستغفر ثلاثاً ثم يقول: «اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ...»، وعلّم أن يُقال بعد الصلاة: سبحان الله والحمد لله والله أكبر ثلاثاً وثلاثين.",
    ref: "Sahih Muslim, Book of Mosques, Hadith 591 and 597",
    strength: "Sahih — Narrated by Muslim",
    keys: ["after prayer","adhkar","dhikr","33 times","astaghfirullah","بعد الصلاة","أذكار","تسبيح","استغفار"]
  },

  /* ================= PURITY & WUDU ================= */
  {
    cat: "purity",
    title: "How the Prophet ﷺ performed wudu",
    titleAr: "صفة وضوء النبي ﷺ",
    detail: "He would wash his hands, rinse his mouth and nose, wash his face, wash each arm to the elbow, wipe his head and ears, then wash each foot to the ankle — generally three times for the washed parts, beginning with the right.",
    detailAr: "كان يغسل كفيه، ويتمضمض ويستنشق، ويغسل وجهه، ويغسل يديه إلى المرفقين، ويمسح رأسه وأذنيه، ثم يغسل رجليه إلى الكعبين — ثلاثاً في الغالب، ويبدأ بالميامن.",
    ref: "Sahih al-Bukhari, Book of Wudu, Hadith 159; Sahih Muslim, Hadith 226",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["wudu","ablution","how to make wudu","wash","face","arms","feet","وضوء","كيف أتوضأ","غسل","المضمضة","المرفقين","الكعبين"]
  },
  {
    cat: "purity",
    title: "Begin with the right side in everything good",
    titleAr: "التيمن في الطهور والشأن كله",
    detail: "Aisha رضي الله عنها said the Prophet ﷺ used to begin with the right side when putting on shoes, combing his hair, purifying himself, and in all his affairs.",
    detailAr: "قالت عائشة رضي الله عنها: كان النبي ﷺ يحب التيمن في تنعّله وترجّله وطهوره وفي شأنه كله.",
    arabic: "كَانَ يُحِبُّ التَّيَمُّنَ فِي تَنَعُّلِهِ وَتَرَجُّلِهِ وَطُهُورِهِ وَفِي شَأْنِهِ كُلِّهِ",
    ref: "Sahih al-Bukhari, Hadith 168; Sahih Muslim, Hadith 268",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["right side","right hand","shoes","comb","order","التيمن","اليمين","التنعل","الترجل","البدء بالأيمن"]
  },
  {
    cat: "purity",
    title: "The dua on entering and leaving the toilet",
    titleAr: "دعاء دخول الخلاء والخروج منه",
    detail: "On entering he ﷺ would say: 'O Allah, I seek refuge in You from the male and female devils.' On leaving he would say: 'Ghufranak' — I seek Your forgiveness. One enters with the left foot and leaves with the right.",
    detailAr: "كان ﷺ إذا دخل الخلاء قال: «اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ»، وإذا خرج قال: «غُفْرَانَكَ». ويُدخل الرجل اليسرى ويُخرج اليمنى.",
    ref: "Sahih al-Bukhari, Hadith 142; Jami at-Tirmidhi, Hadith 7",
    strength: "Sahih — Narrated by al-Bukhari; the second by at-Tirmidhi (authenticated)",
    keys: ["toilet","bathroom","dua entering","ghufranak","left foot","خلاء","دخول الحمام","غفرانك","الخبث والخبائث"]
  },
  {
    cat: "purity",
    title: "The five acts of natural cleanliness (fitrah)",
    titleAr: "خمس من الفطرة",
    detail: "The Prophet ﷺ named five practices of natural human cleanliness: circumcision, removing the pubic hair, trimming the moustache, clipping the nails, and plucking the underarm hair.",
    detailAr: "ذكر النبي ﷺ خمساً من الفطرة: الختان، والاستحداد، وقص الشارب، وتقليم الأظفار، ونتف الإبط.",
    arabic: "الْفِطْرَةُ خَمْسٌ: الِاخْتِتَانُ وَالِاسْتِحْدَادُ وَقَصُّ الشَّارِبِ وَتَقْلِيمُ الْأَظْفَارِ وَنَتْفُ الْإِبِطِ",
    ref: "Sahih al-Bukhari, Hadith 5889; Sahih Muslim, Hadith 257",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["fitrah","hygiene","nails","moustache","circumcision","grooming","clean","فطرة","نظافة","أظفار","شارب","ختان","استحداد"]
  },

  /* ================= EATING & DRINKING ================= */
  {
    cat: "food",
    title: "Say Bismillah, eat with the right hand, from what is nearest",
    titleAr: "التسمية والأكل باليمين ومما يليك",
    detail: "The Prophet ﷺ told a boy: 'Say Bismillah, eat with your right hand, and eat from what is in front of you.' If one forgets at the start, he says: 'Bismillah in the beginning and the end.'",
    detailAr: "قال النبي ﷺ لغلام: «سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ». ومن نسي في أوله فليقل: «بسم الله أوله وآخره».",
    arabic: "يَا غُلَامُ سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ",
    ref: "Sahih al-Bukhari, Hadith 5376; Sahih Muslim, Hadith 2022",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["bismillah","eating","right hand","food","before eating","manners","التسمية","بسم الله","الأكل","اليمين","مما يليك","آداب الطعام"]
  },
  {
    cat: "food",
    title: "Never criticise food",
    titleAr: "عدم عيب الطعام",
    detail: "The Prophet ﷺ never found fault with food. If he liked it he ate it, and if he disliked it he simply left it without criticising.",
    detailAr: "ما عاب النبي ﷺ طعاماً قط، إن أعجبه أكله، وإن كرهه تركه ولم يعبه.",
    arabic: "مَا عَابَ النَّبِيُّ ﷺ طَعَامًا قَطُّ، إِنْ أَعْجَبَهُ أَكَلَهُ، وَإِنْ كَرِهَهُ تَرَكَهُ",
    ref: "Sahih al-Bukhari, Hadith 5409; Sahih Muslim, Hadith 2064",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["criticise food","complain","dislike food","gratitude","عيب الطعام","الشكوى","كراهة الطعام","الرضا"]
  },
  {
    cat: "food",
    title: "A third for food, a third for drink, a third for breath",
    titleAr: "ثلث للطعام وثلث للشراب وثلث للنفس",
    detail: "The Prophet ﷺ taught moderation: a few morsels are enough to keep a person upright, but if he must eat more, then a third for his food, a third for his drink and a third for his breath.",
    detailAr: "علّم النبي ﷺ الاعتدال: بحسب ابن آدم لقيمات يقمن صلبه، فإن كان لا بد فثلث لطعامه وثلث لشرابه وثلث لنفسه.",
    ref: "Jami at-Tirmidhi, Hadith 2380; Sunan Ibn Majah",
    strength: "Strong — authenticated by al-Albani",
    keys: ["overeating","moderation","third","full stomach","diet","health","الإسراف","الاعتدال","ثلث","الشبع","صحة"]
  },
  {
    cat: "food",
    title: "Drink in three breaths, and do not blow into the vessel",
    titleAr: "الشرب ثلاثاً وعدم النفخ في الإناء",
    detail: "The Prophet ﷺ would breathe three times while drinking, saying it is more satisfying and wholesome. He forbade breathing or blowing into the drinking vessel.",
    detailAr: "كان النبي ﷺ يتنفس في الشراب ثلاثاً ويقول إنه أروى وأمرأ، ونهى عن التنفس والنفخ في الإناء.",
    ref: "Sahih Muslim, Hadith 2028; Sahih al-Bukhari, Hadith 5630",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["drinking","water","three breaths","blow","vessel","الشرب","الماء","ثلاث أنفاس","النفخ","الإناء"]
  },
  {
    cat: "food",
    title: "Praise Allah after eating",
    titleAr: "الحمد بعد الطعام",
    detail: "After eating the Prophet ﷺ would praise Allah, saying: 'All praise is for Allah who fed me this and provided it for me, without any strength or power of my own.'",
    detailAr: "كان النبي ﷺ بعد الطعام يحمد الله فيقول: «الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ».",
    ref: "Jami at-Tirmidhi, Hadith 3458; Sunan Abu Dawud",
    strength: "Strong — authenticated by al-Albani",
    keys: ["after eating","alhamdulillah","gratitude","dua after food","بعد الطعام","الحمد","دعاء الطعام","شكر"]
  },
  {
    cat: "food",
    title: "Eat together — blessing is in company",
    titleAr: "البركة في الاجتماع على الطعام",
    detail: "The Prophet ﷺ said that the food of two suffices three, and the food of three suffices four; eating together brings blessing.",
    detailAr: "قال النبي ﷺ: طعام الاثنين يكفي الثلاثة، وطعام الثلاثة يكفي الأربعة؛ والبركة في الاجتماع على الطعام.",
    ref: "Sahih al-Bukhari, Hadith 5392; Sahih Muslim, Hadith 2059",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["eat together","sharing","guests","blessing","barakah","الاجتماع","المشاركة","الضيوف","بركة"]
  },

  /* ================= THE MOSQUE ================= */
  {
    cat: "mosque",
    title: "Enter the mosque with the right foot and its dua",
    titleAr: "دخول المسجد باليمنى ودعاؤه",
    detail: "On entering the mosque he ﷺ would step in with the right foot and say: 'O Allah, open for me the doors of Your mercy.' On leaving, with the left foot: 'O Allah, I ask You of Your bounty.'",
    detailAr: "كان ﷺ إذا دخل المسجد قدّم رجله اليمنى وقال: «اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ»، وإذا خرج قدّم اليسرى وقال: «اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ».",
    ref: "Sahih Muslim, Book of Mosques, Hadith 713",
    strength: "Sahih — Narrated by Muslim",
    keys: ["entering mosque","leaving mosque","right foot","dua","masjid","دخول المسجد","الخروج","اليمنى","دعاء المسجد"]
  },
  {
    cat: "mosque",
    title: "Sitting in the mosque after Fajr until sunrise",
    titleAr: "الجلوس في المسجد بعد الفجر حتى الشروق",
    detail: "The Prophet ﷺ would remain sitting after the Fajr prayer until the sun had well risen. He mentioned a great reward for one who prays Fajr in congregation, then sits remembering Allah until sunrise, then prays two rak'ahs.",
    detailAr: "كان النبي ﷺ يجلس بعد صلاة الفجر حتى تطلع الشمس. وذكر فضلاً كبيراً لمن صلى الفجر في جماعة ثم جلس يذكر الله حتى تطلع الشمس ثم صلى ركعتين.",
    ref: "Sahih Muslim, Hadith 670; Jami at-Tirmidhi, Hadith 586",
    strength: "Sahih — Narrated by Muslim; the reward narration graded Strong",
    keys: ["after fajr","sunrise","sitting","dhikr","ishraq","duha","بعد الفجر","الشروق","الجلوس","الذكر","الضحى"]
  },

  /* ================= DAILY REMEMBRANCE ================= */
  {
    cat: "dhikr",
    title: "The dua on leaving the house",
    titleAr: "دعاء الخروج من البيت",
    detail: "The Prophet ﷺ taught that whoever says on leaving his house: 'In the name of Allah, I place my trust in Allah, there is no power except with Allah' — is guarded, guided and sufficed.",
    detailAr: "علّم النبي ﷺ أن من قال عند خروجه من بيته: «بِاسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ» — كُفي ووُقي وهُدي.",
    arabic: "بِاسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    ref: "Sunan Abu Dawud, Hadith 5095; Jami at-Tirmidhi, Hadith 3426",
    strength: "Sahih — authenticated by al-Albani",
    keys: ["leaving home","going out","dua","protection","travel","الخروج من البيت","دعاء الخروج","توكلت","حفظ"]
  },
  {
    cat: "dhikr",
    title: "The Prophet ﷺ sought forgiveness over seventy times a day",
    titleAr: "استغفار النبي ﷺ أكثر من سبعين مرة",
    detail: "He ﷺ said: 'By Allah, I seek Allah's forgiveness and turn to Him in repentance more than seventy times a day' — and in another narration, a hundred times.",
    detailAr: "قال ﷺ: «وَاللَّهِ إِنِّي لَأَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةً»، وفي رواية: مائة مرة.",
    ref: "Sahih al-Bukhari, Hadith 6307; Sahih Muslim, Hadith 2702",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["istighfar","forgiveness","repentance","seventy","hundred","daily","استغفار","التوبة","سبعين","مائة","يوميا"]
  },
  {
    cat: "dhikr",
    title: "The two words most beloved and light upon the tongue",
    titleAr: "كلمتان خفيفتان ثقيلتان في الميزان",
    detail: "The Prophet ﷺ said two phrases are light on the tongue, heavy on the scale and beloved to the Most Merciful: 'SubhanAllah wa bihamdih, SubhanAllah al-'Adheem.'",
    detailAr: "قال النبي ﷺ: كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: «سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ».",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    ref: "Sahih al-Bukhari, Hadith 6682; Sahih Muslim, Hadith 2694",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tasbih","subhanallah","scale","dhikr","easy dhikr","تسبيح","سبحان الله وبحمده","الميزان","ذكر"]
  },
  {
    cat: "dhikr",
    title: "Send blessings upon the Prophet ﷺ abundantly",
    titleAr: "الإكثار من الصلاة على النبي ﷺ",
    detail: "He ﷺ said: whoever sends one blessing upon me, Allah sends ten blessings upon him. Sending salawat is especially encouraged on Friday.",
    detailAr: "قال ﷺ: من صلّى عليّ صلاة واحدة صلى الله عليه بها عشراً. ويُستحب الإكثار منها يوم الجمعة.",
    ref: "Sahih Muslim, Hadith 408; Sunan Abu Dawud",
    strength: "Sahih — Narrated by Muslim",
    keys: ["salawat","blessings on prophet","durood","friday","الصلاة على النبي","صلوا عليه","الجمعة"]
  },

  /* ================= MANNERS WITH PEOPLE ================= */
  {
    cat: "manners",
    title: "Give the greeting of peace, even to those you do not know",
    titleAr: "إفشاء السلام على من تعرف ومن لا تعرف",
    detail: "Asked which Islam is best, the Prophet ﷺ said: to feed people and to give the greeting of peace to those you know and those you do not know.",
    detailAr: "سُئل النبي ﷺ أي الإسلام خير؟ فقال: تُطعم الطعام، وتقرأ السلام على من عرفت ومن لم تعرف.",
    arabic: "تُطْعِمُ الطَّعَامَ وَتَقْرَأُ السَّلَامَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ",
    ref: "Sahih al-Bukhari, Hadith 12; Sahih Muslim, Hadith 39",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["salam","greeting","peace","stranger","feed","السلام","إفشاء السلام","الإطعام","الغريب"]
  },
  {
    cat: "manners",
    title: "Visit the sick",
    titleAr: "زيارة المريض",
    detail: "Visiting the sick is a right of a Muslim upon a Muslim. The Prophet ﷺ said one who visits a sick person walks in the mercy of Allah, and taught the dua asking Allah, Lord of the Mighty Throne, to cure him.",
    detailAr: "زيارة المريض حق للمسلم على المسلم. وقال النبي ﷺ إن عائد المريض يخوض في رحمة الله، وعلّم أن يُدعى: «أسأل الله العظيم رب العرش العظيم أن يشفيك».",
    ref: "Sahih al-Bukhari, Hadith 1240; Jami at-Tirmidhi, Hadith 2083",
    strength: "Sahih — Narrated by al-Bukhari; the dua graded Strong",
    keys: ["visiting sick","illness","hospital","dua for sick","زيارة المريض","المرض","دعاء الشفاء","عيادة"]
  },
  {
    cat: "manners",
    title: "Seek permission three times before entering",
    titleAr: "الاستئذان ثلاثاً",
    detail: "The Prophet ﷺ taught that permission is sought three times; if you are not granted it, then return. He also taught that one should not stand facing the door but to its side.",
    detailAr: "علّم النبي ﷺ أن الاستئذان ثلاث، فإن لم يُؤذن لك فارجع. وعلّم ألا يقف الرجل مقابل الباب بل عن جانبه.",
    ref: "Sahih al-Bukhari, Hadith 6245; Sahih Muslim, Hadith 2153",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["permission","knock","door","visiting","privacy","استئذان","الباب","الزيارة","ثلاثا"]
  },
  {
    cat: "manners",
    title: "Honour your guest",
    titleAr: "إكرام الضيف",
    detail: "Whoever believes in Allah and the Last Day should honour his guest. The Prophet ﷺ specified hospitality for three days; beyond that it becomes a favour.",
    detailAr: "من كان يؤمن بالله واليوم الآخر فليكرم ضيفه. وحدّد النبي ﷺ الضيافة ثلاثة أيام، وما بعدها صدقة.",
    ref: "Sahih al-Bukhari, Hadith 6019; Sahih Muslim, Hadith 48",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["guest","hospitality","host","three days","visitors","الضيف","إكرام","الضيافة","ثلاثة أيام"]
  },

  /* ================= DRESS ================= */
  {
    cat: "dress",
    title: "Begin with the right when putting on shoes",
    titleAr: "البدء باليمنى في الانتعال",
    detail: "The Prophet ﷺ said: when you put on your shoes begin with the right, and when you remove them begin with the left — so the right is first to be put on and last to be taken off.",
    detailAr: "قال النبي ﷺ: إذا انتعلتم فابدؤوا باليمنى، وإذا خلعتم فابدؤوا باليسرى، فتكون اليمنى أولهما تُنعل وآخرهما تُنزع.",
    ref: "Sahih Muslim, Hadith 2097; Sahih al-Bukhari, Hadith 5856",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["shoes","sandals","right foot","dressing","clothes","النعال","الانتعال","اليمنى","اللباس"]
  },
  {
    cat: "dress",
    title: "Do not let your garment trail out of pride",
    titleAr: "النهي عن إسبال الثوب خيلاء",
    detail: "The Prophet ﷺ warned against letting the garment drag below the ankles out of arrogance, and praised simple, clean, modest dress. He said white garments are among the best to wear.",
    detailAr: "حذّر النبي ﷺ من إسبال الثوب أسفل الكعبين خيلاء، وحبّب اللباس النظيف المتواضع، وقال إن خير الثياب البياض.",
    ref: "Sahih al-Bukhari, Hadith 5787; Jami at-Tirmidhi, Hadith 994 (on white)",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["isbal","garment","ankles","pride","white clothes","modest dress","الإسبال","الثوب","الكعبين","الخيلاء","البياض"]
  },
  {
    cat: "dress",
    title: "The Prophet ﷺ loved good fragrance",
    titleAr: "محبة النبي ﷺ للطيب",
    detail: "Good scent was among the things he ﷺ loved, and he would not refuse perfume when offered. Cleanliness and pleasant appearance were part of his practice, especially for Friday and gatherings.",
    detailAr: "كان الطيب من أحب الأشياء إليه ﷺ، وكان لا يرد الطيب إذا عُرض عليه. وكانت النظافة وحسن المظهر من هديه، خاصة للجمعة والمجالس.",
    ref: "Sunan an-Nasa'i, Book of Adornment; Sahih al-Bukhari, Hadith 5929",
    strength: "Sahih — established in the collections",
    keys: ["perfume","fragrance","smell","clean","appearance","الطيب","العطر","النظافة","المظهر"]
  },

  /* ================= HOME & FAMILY ================= */
  {
    cat: "home",
    title: "He ﷺ helped with the housework",
    titleAr: "كان يعمل في بيته ﷺ",
    detail: "Asked what the Prophet ﷺ did at home, Aisha رضي الله عنها said he would mend his sandals, patch his garment and work as any of you works in his house — and he was always in service of his family.",
    detailAr: "سُئلت عائشة رضي الله عنها ما كان النبي ﷺ يصنع في بيته؟ قالت: كان يخصف نعله، ويرقع ثوبه، ويعمل كما يعمل أحدكم في بيته — وكان في خدمة أهله.",
    ref: "Musnad Ahmad; Sahih al-Bukhari, Book of Adhan (on being asked)",
    strength: "Sahih — authenticated in the collections",
    keys: ["housework","home","helping wife","chores","family","خدمة الأهل","البيت","مساعدة الزوجة","الأعمال المنزلية"]
  },
  {
    cat: "home",
    title: "Mercy and play with children",
    titleAr: "الرحمة بالأطفال وملاعبتهم",
    detail: "He ﷺ kissed his grandsons, carried a child during prayer, and when a man expressed surprise at his kissing children he said: whoever shows no mercy will be shown no mercy.",
    detailAr: "كان ﷺ يقبّل سبطيه، ويحمل الطفلة في الصلاة، ولما تعجب رجل من تقبيله الأطفال قال: من لا يَرحم لا يُرحم.",
    arabic: "مَنْ لَا يَرْحَمْ لَا يُرْحَمْ",
    ref: "Sahih al-Bukhari, Hadith 5997; Sahih Muslim, Hadith 2318",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["children","kids","kiss","play","mercy","father","الأطفال","الأولاد","التقبيل","الملاعبة","الرحمة"]
  },
  {
    cat: "home",
    title: "The dua on entering the home",
    titleAr: "الذكر عند دخول البيت",
    detail: "The Prophet ﷺ taught mentioning Allah's name on entering the home and when beginning to eat, saying that when a man enters mentioning Allah, Satan finds no place to stay the night.",
    detailAr: "علّم النبي ﷺ التسمية عند دخول البيت وعند الطعام، وقال إن الرجل إذا دخل بيته فذكر الله لم يجد الشيطان مبيتاً.",
    ref: "Sahih Muslim, Book of Drinks, Hadith 2018",
    strength: "Sahih — Narrated by Muslim",
    keys: ["entering home","house","bismillah","satan","دخول البيت","التسمية","الشيطان","المبيت"]
  },

  /* ================= TRAVEL ================= */
  {
    cat: "travel",
    title: "The dua when setting out and mounting a ride",
    titleAr: "دعاء السفر والركوب",
    detail: "When mounting his ride he ﷺ would say 'Glory to Him who has subjected this to us,' then ask Allah for righteousness and ease in the journey, and for protection over his family.",
    detailAr: "كان ﷺ إذا استوى على دابته قال: «سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا»، ثم سأل الله البرّ والتقوى وأن يُهوّن عليه السفر ويحفظ أهله.",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
    ref: "Sahih Muslim, Book of Hajj, Hadith 1342",
    strength: "Sahih — Narrated by Muslim",
    keys: ["travel","journey","car","plane","riding","dua","السفر","الركوب","دعاء السفر","سبحان الذي سخر"]
  },
  {
    cat: "travel",
    title: "On returning, go first to the mosque",
    titleAr: "البدء بالمسجد عند القدوم من السفر",
    detail: "When the Prophet ﷺ returned from a journey he would begin with the mosque and pray two rak'ahs there before going to his home.",
    detailAr: "كان النبي ﷺ إذا قدم من سفر بدأ بالمسجد فصلّى فيه ركعتين قبل أن يأتي بيته.",
    ref: "Sahih al-Bukhari, Hadith 3088; Sahih Muslim, Hadith 716",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["returning","coming home","after travel","mosque","two rakah","القدوم","الرجوع من السفر","المسجد","ركعتان"]
  },

  /* ================= FASTING ================= */
  {
    cat: "fasting",
    title: "Never skip suhoor — there is blessing in it",
    titleAr: "بركة السحور",
    detail: "The Prophet ﷺ said: eat suhoor, for in suhoor there is blessing. He described it as the blessed meal and encouraged even a sip of water.",
    detailAr: "قال النبي ﷺ: تسحّروا فإن في السحور بركة. ووصفه بالغداء المبارك وحثّ عليه ولو بجرعة ماء.",
    arabic: "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً",
    ref: "Sahih al-Bukhari, Hadith 1923; Sahih Muslim, Hadith 1095",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["suhoor","sahur","fasting","ramadan","before dawn","السحور","الصيام","رمضان","بركة"]
  },
  {
    cat: "fasting",
    title: "Hasten to break the fast, with dates or water",
    titleAr: "تعجيل الفطر على رطب أو ماء",
    detail: "The Prophet ﷺ said people remain in good as long as they hasten breaking the fast. He would break his fast with fresh dates, or dried dates, or else sips of water.",
    detailAr: "قال النبي ﷺ: لا يزال الناس بخير ما عجّلوا الفطر. وكان يفطر على رطب، فإن لم يكن فعلى تمر، فإن لم يكن حسا حسوات من ماء.",
    ref: "Sahih al-Bukhari, Hadith 1957; Sunan Abu Dawud, Hadith 2356",
    strength: "Sahih — Narrated by al-Bukhari; the manner graded Strong",
    keys: ["iftar","breaking fast","dates","water","maghrib","الفطر","الإفطار","رطب","تمر","ماء"]
  },
  {
    cat: "fasting",
    title: "Voluntary fasts he ﷺ kept",
    titleAr: "صيام النبي ﷺ التطوعي",
    detail: "He ﷺ frequently fasted Mondays and Thursdays, encouraged the six days of Shawwal after Ramadan, the Day of Arafah for non-pilgrims, and the Day of Ashura.",
    detailAr: "كان ﷺ يكثر صيام الاثنين والخميس، وحثّ على ست من شوال بعد رمضان، ويوم عرفة لغير الحاج، ويوم عاشوراء.",
    ref: "Sahih Muslim, Hadith 1162 (Arafah, Ashura) and 1164 (Shawwal); Jami at-Tirmidhi (Mon/Thu)",
    strength: "Sahih — Narrated by Muslim",
    keys: ["monday","thursday","shawwal","arafah","ashura","voluntary fast","الاثنين","الخميس","شوال","عرفة","عاشوراء","صيام التطوع"]
  },

  /* ================= FRIDAY ================= */
  {
    cat: "friday",
    title: "Bathe, perfume and come early on Friday",
    titleAr: "الغسل والطيب والتبكير يوم الجمعة",
    detail: "The Prophet ﷺ urged bathing on Friday, using perfume and one's best clothing, and coming early — describing the reward of those who come first, and instructing silence during the khutbah.",
    detailAr: "حثّ النبي ﷺ على الغسل يوم الجمعة والطيب وأحسن الثياب والتبكير، وذكر أجر من بكّر، وأمر بالإنصات في الخطبة.",
    ref: "Sahih al-Bukhari, Hadith 881 and 929; Sahih Muslim, Hadith 850",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["friday","jumuah","ghusl","bath","perfume","early","khutbah","silence","الجمعة","الغسل","الطيب","التبكير","الخطبة","الإنصات"]
  },

  /* ================= WITH THE QURAN ================= */
  {
    cat: "quran",
    title: "Recite the Quran beautifully and reflect",
    titleAr: "تحسين القراءة والتدبر",
    detail: "The Prophet ﷺ would recite slowly and clearly, stopping at each verse. He said the best of people is the one who learns the Quran and teaches it, and that the Quran will intercede for its companion.",
    detailAr: "كان النبي ﷺ يقرأ مترسّلاً مبيّناً يقف عند كل آية. وقال: خيركم من تعلّم القرآن وعلّمه، وأن القرآن يشفع لصاحبه.",
    ref: "Sahih al-Bukhari, Hadith 5027; Sunan Abu Dawud, Hadith 1466",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["quran","recite","tajweed","learn","teach","memorise","القرآن","التلاوة","التدبر","تعلم","تعليم","حفظ"]
  },
  {
    cat: "quran",
    title: "Surah Al-Kahf on Friday, and Al-Mulk at night",
    titleAr: "قراءة الكهف يوم الجمعة والملك بالليل",
    detail: "Reciting Surah Al-Kahf on Friday is reported to bring light for the believer, and the Prophet ﷺ would not sleep until he had recited Surah Al-Mulk.",
    detailAr: "وردت فضيلة قراءة سورة الكهف يوم الجمعة وأنها نور للمؤمن، وكان النبي ﷺ لا ينام حتى يقرأ سورة الملك.",
    ref: "Sunan an-Nasa'i / al-Bayhaqi (Al-Kahf); Jami at-Tirmidhi, Hadith 2892 (Al-Mulk)",
    strength: "Strong — graded Strong by the scholars of hadith",
    keys: ["kahf","mulk","friday","night reading","surah","الكهف","الملك","الجمعة","قراءة الليل"]
  },

  /* ================= WORRY & HARDSHIP ================= */
  {
    cat: "hardship",
    title: "What he ﷺ said in times of distress",
    titleAr: "دعاء النبي ﷺ عند الهم والكرب",
    detail: "In distress he ﷺ would say: 'There is no god but Allah, the Mighty, the Forbearing; there is no god but Allah, Lord of the Mighty Throne...' He also taught: 'Allah is sufficient for us, and He is the best Disposer of affairs.'",
    detailAr: "كان ﷺ يقول عند الكرب: «لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ...»، وعلّم: «حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ».",
    ref: "Sahih al-Bukhari, Hadith 6346; Sahih Muslim, Hadith 2730",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["distress","worry","worried","anxiety","anxious","sad","sadness","upset","depressed","depression","hardship","stress","grief","lonely","alone","overwhelmed","dua","الكرب","الهم","القلق","الحزن","الشدة","ضيق","اكتئاب","وحدة","دعاء الفرج"]
  },
  {
    cat: "hardship",
    title: "Turn to prayer when something troubles you",
    titleAr: "الفزع إلى الصلاة عند الشدة",
    detail: "Whenever a matter distressed the Prophet ﷺ he would turn to prayer, and he was commanded to seek help through patience and prayer. He also taught the prayer of seeking guidance (istikharah) when facing a decision.",
    detailAr: "كان النبي ﷺ إذا حزبه أمر فزع إلى الصلاة، وأُمر بالاستعانة بالصبر والصلاة. وعلّم صلاة الاستخارة عند الحاجة إلى قرار.",
    ref: "Sunan Abu Dawud, Hadith 1319; Sahih al-Bukhari, Hadith 1162 (istikharah)",
    strength: "Sahih — established in the collections",
    keys: ["prayer in hardship","istikharah","decision","confused","guidance","patience","الصلاة عند الشدة","الاستخارة","قرار","حيرة","الصبر"]
  },

  /* ================= ILLNESS & HEALING ================= */
  {
    cat: "health",
    title: "Ruqyah — seeking healing with the Quran",
    titleAr: "الرقية بالقرآن",
    detail: "The Prophet ﷺ would place his hand on the place of pain and say: 'In the name of Allah' three times, then a dua seeking refuge from the harm. He approved ruqyah with Al-Fatihah and the Quran.",
    detailAr: "كان ﷺ يضع يده على موضع الألم ويقول: «بسم الله» ثلاثاً، ثم يدعو بالاستعاذة من الشر. وأقرّ الرقية بالفاتحة والقرآن.",
    ref: "Sahih Muslim, Hadith 2202; Sahih al-Bukhari, Hadith 5736 (Al-Fatihah)",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["ruqyah","healing","sick","pain","fatihah","cure","الرقية","الشفاء","المرض","الألم","الفاتحة"]
  },
  {
    cat: "health",
    title: "Illness wipes away sins",
    titleAr: "المرض يكفّر الخطايا",
    detail: "The Prophet ﷺ said that no Muslim is afflicted by harm, illness or even the prick of a thorn without Allah wiping away his sins by it — teaching patience and hope in trial.",
    detailAr: "قال النبي ﷺ ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن ولا أذى، حتى الشوكة يُشاكها، إلا كفّر الله بها من خطاياه — تعليماً للصبر والرجاء.",
    ref: "Sahih al-Bukhari, Hadith 5641; Sahih Muslim, Hadith 2573",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["illness","sickness","sins","patience","reward","suffering","المرض","الخطايا","الصبر","الأجر","الألم"]
  },

  /* ================= MERCY TO ANIMALS ================= */
  {
    cat: "animals",
    title: "Mercy to an animal is rewarded",
    titleAr: "الرحمة بالحيوان مأجورة",
    detail: "The Prophet ﷺ told of a man who gave water to a thirsty dog and Allah forgave him, and of a woman punished over a cat she confined. He said there is reward in every act of kindness to a living creature.",
    detailAr: "أخبر النبي ﷺ عن رجل سقى كلباً عطشاناً فغفر الله له، وعن امرأة عُذّبت في هرة حبستها. وقال: في كل ذات كبد رطبة أجر.",
    ref: "Sahih al-Bukhari, Hadith 2363 and 3318; Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["animals","dog","cat","water","kindness","mercy","pets","الحيوان","الكلب","الهرة","الرحمة","سقي"]
  },

  /* ================= CHARACTER OF THE PROPHET ﷺ ================= */
  {
    cat: "character",
    title: "He ﷺ was never immoderate, never struck a servant",
    titleAr: "لم يضرب خادماً ولم ينتقم لنفسه",
    detail: "Aisha رضي الله عنها said he never struck a servant or a woman, and never took revenge for himself — only for the sake of Allah when His limits were violated.",
    detailAr: "قالت عائشة رضي الله عنها: ما ضرب النبي ﷺ خادماً ولا امرأة، ولا انتقم لنفسه قط، إلا أن تُنتهك حدود الله فينتقم لله.",
    ref: "Sahih Muslim, Hadith 2328; Sunan Abu Dawud",
    strength: "Sahih — Narrated by Muslim",
    keys: ["anger","revenge","servant","gentle","character","hitting","الغضب","الانتقام","الخادم","اللين","الأخلاق"]
  },
  {
    cat: "character",
    title: "The most complete believers are the best in character",
    titleAr: "أكمل المؤمنين إيماناً أحسنهم خلقاً",
    detail: "He ﷺ said the most complete of believers in faith are the best of them in character, and that he was sent to perfect good character. Good character weighs heaviest on the scale.",
    detailAr: "قال ﷺ: أكمل المؤمنين إيماناً أحسنهم خلقاً، وقال: إنما بُعثت لأتمّم حسن الأخلاق. وحسن الخلق أثقل ما يوضع في الميزان.",
    ref: "Jami at-Tirmidhi, Hadith 1162; Musnad Ahmad; Sunan Abu Dawud, Hadith 4799",
    strength: "Sahih — authenticated by al-Albani",
    keys: ["character","akhlaq","manners","best","faith","الأخلاق","حسن الخلق","الإيمان","الميزان"]
  },
  {
    cat: "character",
    title: "He ﷺ smiled often and was easy to be with",
    titleAr: "كان بشّاراً سهلاً ﷺ",
    detail: "The Companions described him as the most smiling of people and the gentlest in company. Jarir رضي الله عنه said he never met him without his smiling at him.",
    detailAr: "وصفه أصحابه بأنه أكثر الناس تبسّماً وألينهم عِشرة. وقال جرير رضي الله عنه: ما لقيني النبي ﷺ إلا تبسّم في وجهي.",
    ref: "Sahih al-Bukhari, Hadith 3035; Jami at-Tirmidhi, Book of Virtues",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["smile","cheerful","kindness","company","gentle","التبسم","البشاشة","اللين","المعاملة"]
  },

  /* ================= DEATH & THE GRAVE ================= */
  {
    cat: "death",
    title: "Remember death, and visit the graves",
    titleAr: "تذكّر الموت وزيارة القبور",
    detail: "The Prophet ﷺ encouraged visiting graves as a reminder of the Hereafter, and taught greeting the people of the graves: 'Peace be upon you, dwellers of these abodes among the believers.'",
    detailAr: "حثّ النبي ﷺ على زيارة القبور لأنها تذكّر بالآخرة، وعلّم السلام على أهلها: «السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ».",
    ref: "Sahih Muslim, Hadith 976 and 975",
    strength: "Sahih — Narrated by Muslim",
    keys: ["death","graves","cemetery","remembrance","hereafter","الموت","القبور","الزيارة","الآخرة","السلام على القبور"]
  },
  {
    cat: "death",
    title: "What to say when hearing of a death",
    titleAr: "ما يُقال عند المصيبة والموت",
    detail: "On being struck by a calamity the believer says: 'To Allah we belong and to Him we return; O Allah, reward me for my affliction and replace it with something better.' The Prophet ﷺ taught this brings recompense.",
    detailAr: "عند المصيبة يقول المؤمن: «إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا». وعلّم النبي ﷺ أن الله يُخلف عليه خيراً.",
    ref: "Sahih Muslim, Book of Funerals, Hadith 918",
    strength: "Sahih — Narrated by Muslim",
    keys: ["death","calamity","loss","grief","inna lillah","condolence","الموت","المصيبة","الفقد","الحزن","إنا لله","العزاء"]
  },

  /* ================= MORE: SPEECH & GATHERINGS ================= */
  {
    cat: "manners",
    title: "What to say when someone sneezes",
    titleAr: "ما يُقال عند العطاس",
    detail: "When one sneezes he says 'Alhamdulillah'; the one who hears replies 'Yarhamukallah' (may Allah have mercy on you), and the sneezer answers 'Yahdikumullah wa yuslih balakum'.",
    detailAr: "إذا عطس أحدكم فليقل: «الحمد لله»، وليقل له من سمعه: «يرحمك الله»، فيرد عليه: «يهديكم الله ويصلح بالكم».",
    arabic: "إِذَا عَطَسَ أَحَدُكُمْ فَلْيَقُلْ: الْحَمْدُ لِلَّهِ، وَلْيَقُلْ لَهُ أَخُوهُ: يَرْحَمُكَ اللَّهُ",
    ref: "Sahih al-Bukhari, Book of Manners, Hadith 6224",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["sneeze","sneezing","alhamdulillah","yarhamukallah","bless you","عطاس","العطس","الحمد لله","يرحمك الله"]
  },
  {
    cat: "manners",
    title: "Yawning — cover your mouth",
    titleAr: "كف الفم عند التثاؤب",
    detail: "The Prophet ﷺ taught that when yawning one should place his hand over his mouth, and he disliked the raised voice of yawning.",
    detailAr: "علّم النبي ﷺ أن من تثاءب فليضع يده على فيه، وكره الصوت المرتفع في التثاؤب.",
    ref: "Sahih Muslim, Book of Manners, Hadith 2995",
    strength: "Sahih — Narrated by Muslim",
    keys: ["yawn","yawning","mouth","cover","tired","التثاؤب","كف الفم","التعب"]
  },
  {
    cat: "manners",
    title: "The dua for leaving a gathering",
    titleAr: "كفارة المجلس",
    detail: "The Prophet ﷺ taught that whoever sits in a gathering and says before leaving: 'Glory to You O Allah and praise, there is no god but You, I seek Your forgiveness and turn to You' — is forgiven what occurred in it.",
    detailAr: "علّم النبي ﷺ أن من جلس مجلساً فقال قبل أن يقوم: «سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ» — غُفر له ما كان في مجلسه.",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    ref: "Jami at-Tirmidhi, Hadith 3433; Sunan Abu Dawud",
    strength: "Sahih — authenticated by al-Albani",
    keys: ["gathering","majlis","meeting","leaving","kaffarah","sitting","المجلس","كفارة المجلس","الاجتماع","القيام"]
  },
  {
    cat: "manners",
    title: "Speak well, or keep silent",
    titleAr: "قل خيراً أو اصمت",
    detail: "The Prophet ﷺ said whoever believes in Allah and the Last Day should speak good or remain silent, and warned that a person may be thrown far into the Fire because of a word he did not weigh.",
    detailAr: "قال النبي ﷺ: من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت، وحذّر أن العبد قد يُلقى في النار بكلمة لم يُلقِ لها بالاً.",
    ref: "Sahih al-Bukhari, Hadith 6018 and 6478; Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["speech","talking","silence","words","tongue","gossip","الكلام","الصمت","اللسان","الكلمة","حفظ اللسان"]
  },
  {
    cat: "manners",
    title: "Do not turn away a beggar empty-handed if you can give",
    titleAr: "الإحسان إلى السائل",
    detail: "The Prophet ﷺ was never asked for something and said no. He gave generously and taught that charity does not decrease wealth, and that a kind word is itself charity.",
    detailAr: "ما سُئل النبي ﷺ شيئاً فقال: لا. وكان يعطي بسخاء، وعلّم أن الصدقة لا تنقص المال، وأن الكلمة الطيبة صدقة.",
    ref: "Sahih al-Bukhari, Hadith 6034; Sahih Muslim, Hadith 2588",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["beggar","charity","give","sadaqah","generous","poor","help","السائل","الصدقة","العطاء","الكرم","الفقير"]
  },

  /* ================= MORE: WORK & WEALTH ================= */
  {
    cat: "manners",
    title: "The best earnings are from the work of one's own hand",
    titleAr: "خير الكسب عمل اليد",
    detail: "The Prophet ﷺ said no food is better than what a man earns with his own hand, and that the Prophet Dawud ate from the work of his hands. He praised honest labour over dependence.",
    detailAr: "قال النبي ﷺ ما أكل أحد طعاماً خيراً من عمل يده، وأن نبي الله داود كان يأكل من عمل يده. وأثنى على الكسب الحلال بدل السؤال.",
    ref: "Sahih al-Bukhari, Book of Sales, Hadith 2072",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["work","job","earning","income","halal earning","labour","business","العمل","الكسب","الرزق","اليد","الوظيفة"]
  },
  {
    cat: "manners",
    title: "Pay the worker his wage without delay",
    titleAr: "إعطاء الأجير أجره",
    detail: "The Prophet ﷺ commanded that a worker be given his wage before his sweat dries, and warned severely against withholding the pay of one who has laboured.",
    detailAr: "أمر النبي ﷺ أن يُعطى الأجير أجره قبل أن يجف عرقه، وحذّر بشدة من منع أجر من عمل.",
    ref: "Sunan Ibn Majah, Hadith 2443; Sahih al-Bukhari, Hadith 2270 (on withholding)",
    strength: "Sahih — authenticated by al-Albani",
    keys: ["worker","wage","salary","pay","employee","delay","الأجير","الأجرة","الراتب","العامل","تأخير"]
  },

  /* ================= MORE: KNOWLEDGE ================= */
  {
    cat: "manners",
    title: "Seeking knowledge is a path to Paradise",
    titleAr: "طلب العلم طريق إلى الجنة",
    detail: "The Prophet ﷺ said whoever travels a path seeking knowledge, Allah makes easy for him a path to Paradise, and that the angels lower their wings for the seeker of knowledge.",
    detailAr: "قال النبي ﷺ: من سلك طريقاً يلتمس فيه علماً سهّل الله له طريقاً إلى الجنة، وأن الملائكة تضع أجنحتها لطالب العلم.",
    ref: "Sahih Muslim, Hadith 2699; Sunan Abu Dawud, Hadith 3641",
    strength: "Sahih — Narrated by Muslim",
    keys: ["knowledge","study","learn","student","school","teacher","العلم","التعلم","الدراسة","طالب العلم","المعلم"]
  },
  {
    cat: "dhikr",
    title: "The dua for beneficial knowledge and memory",
    titleAr: "الدعاء بالعلم النافع",
    detail: "The Prophet ﷺ would ask: 'O Allah, benefit me with what You have taught me, teach me what benefits me, and increase me in knowledge.' He was also commanded in the Quran to say: 'My Lord, increase me in knowledge.'",
    detailAr: "كان ﷺ يدعو: «اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا»، وأُمر في القرآن أن يقول: «رَبِّ زِدْنِي عِلْمًا».",
    ref: "Sunan Ibn Majah, Hadith 251; Jami at-Tirmidhi",
    strength: "Strong — authenticated by al-Albani",
    keys: ["knowledge dua","memory","exam","study","learning","forget","دعاء العلم","الحفظ","الامتحان","المذاكرة","النسيان"]
  },

  /* ================= MORE: ANGER & FORGIVENESS ================= */
  {
    cat: "character",
    title: "What to do when you become angry",
    titleAr: "ما يفعله الغاضب",
    detail: "The Prophet ﷺ advised seeking refuge in Allah from Satan when angry, and that if a man is angry standing he should sit, and if sitting he should lie down. He said the strong one is he who controls himself in anger.",
    detailAr: "أرشد النبي ﷺ الغاضب أن يستعيذ بالله من الشيطان، وإن كان قائماً فليجلس، وإن كان جالساً فليتّكئ. وقال: الشديد من يملك نفسه عند الغضب.",
    ref: "Sunan Abu Dawud, Hadith 4782; Sahih al-Bukhari, Hadith 6114",
    strength: "Sahih — established in the collections",
    keys: ["anger","angry","rage","temper","control","calm","fight","الغضب","الغاضب","الحلم","السيطرة","الهدوء"]
  },
  {
    cat: "character",
    title: "Pardon, and Allah will raise you",
    titleAr: "العفو يرفع صاحبه",
    detail: "The Prophet ﷺ said charity does not decrease wealth, no one pardons another except that Allah raises him in honour, and no one is humble for Allah's sake except that Allah elevates him.",
    detailAr: "قال النبي ﷺ: ما نقصت صدقة من مال، وما عفا رجل عن مظلمة إلا رفعه الله بها، وما تواضع أحد لله إلا رفعه الله.",
    ref: "Sahih Muslim, Book of Righteousness, Hadith 2588",
    strength: "Sahih — Narrated by Muslim",
    keys: ["forgive","pardon","forgiveness","humble","revenge","argument","العفو","الصفح","التواضع","الانتقام","الخصام"]
  },

  /* ================= MORE: RAIN, MOON, NATURE ================= */
  {
    cat: "dhikr",
    title: "When it rains",
    titleAr: "الدعاء عند المطر",
    detail: "When rain fell the Prophet ﷺ would say: 'O Allah, a beneficial rain.' He would also uncover part of his body to let the rain touch him, saying it had just come from his Lord.",
    detailAr: "كان النبي ﷺ إذا رأى المطر قال: «اللَّهُمَّ صَيِّبًا نَافِعًا»، وكان يكشف عن بعض جسده ليصيبه المطر ويقول إنه حديث عهد بربه.",
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    ref: "Sahih al-Bukhari, Hadith 1032; Sahih Muslim, Hadith 898",
    strength: "Sahih — established in the collections",
    keys: ["rain","weather","storm","water","المطر","الغيث","الجو","دعاء المطر"]
  },
  {
    cat: "dhikr",
    title: "On seeing the new moon",
    titleAr: "الدعاء عند رؤية الهلال",
    detail: "On seeing the new crescent the Prophet ﷺ would say: 'O Allah, bring it upon us with blessing and faith, safety and Islam.'",
    detailAr: "كان النبي ﷺ إذا رأى الهلال قال: «اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ».",
    ref: "Jami at-Tirmidhi, Hadith 3451",
    strength: "Strong — authenticated by al-Albani",
    keys: ["moon","crescent","hilal","new month","ramadan start","الهلال","القمر","الشهر","رمضان"]
  },
  {
    cat: "animals",
    title: "Do not overburden or brand an animal on the face",
    titleAr: "النهي عن تحميل الحيوان ما لا يطيق",
    detail: "The Prophet ﷺ forbade striking or branding animals on the face, told those who ride not to make animals' backs into chairs, and commanded kindness in slaughter — sharpening the blade and being merciful.",
    detailAr: "نهى النبي ﷺ عن ضرب الحيوان أو وسمه في الوجه، وأمر ألا تُتخذ ظهور الدواب مجالس، وأمر بالإحسان في الذبح بإحداد الشفرة والرحمة.",
    ref: "Sahih Muslim, Hadith 2116 and 1955",
    strength: "Sahih — Narrated by Muslim",
    keys: ["animal","burden","branding","slaughter","kindness","riding","الحيوان","الدابة","الوسم","الذبح","الإحسان","الرحمة"]
  },

  /* ================= MORE: HEALTH ================= */
  {
    cat: "health",
    title: "Honey, black seed, and seeking treatment",
    titleAr: "العسل والحبة السوداء والتداوي",
    detail: "The Prophet ﷺ encouraged seeking treatment, saying Allah has not sent down a disease without sending down its cure. He mentioned honey as healing and black seed (habbat as-sawda) as a remedy for many ailments.",
    detailAr: "حثّ النبي ﷺ على التداوي وقال: ما أنزل الله داءً إلا أنزل له شفاءً. وذكر العسل شفاءً، والحبة السوداء دواءً لكثير من الأمراض.",
    ref: "Sahih al-Bukhari, Hadith 5678 (cure), 5684 (black seed), 5683 (honey)",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["honey","black seed","medicine","treatment","cure","doctor","remedy","العسل","الحبة السوداء","التداوي","الدواء","الشفاء","الطبيب"]
  },
  {
    cat: "health",
    title: "Moderation and physical strength",
    titleAr: "القوة والاعتدال",
    detail: "The Prophet ﷺ said the strong believer is more beloved to Allah than the weak one, encouraged teaching children swimming, riding and archery, and himself raced and wrestled.",
    detailAr: "قال النبي ﷺ: المؤمن القوي أحب إلى الله من المؤمن الضعيف، وحثّ على تعليم الأبناء السباحة والرمي والفروسية، وكان يسابق ويصارع.",
    ref: "Sahih Muslim, Hadith 2664; Sunan al-Bayhaqi (on teaching children)",
    strength: "Sahih — Narrated by Muslim",
    keys: ["strength","strong","exercise","sport","swimming","archery","health","fitness","القوة","الرياضة","السباحة","الرمي","الصحة","اللياقة"]
  },

  /* ================= MORE: PRAYER DETAIL ================= */
  {
    cat: "prayer",
    title: "The opening dua and what he ﷺ recited in prayer",
    titleAr: "دعاء الاستفتاح والقراءة في الصلاة",
    detail: "He ﷺ opened the prayer with takbir, then a dua of praise such as 'Subhanaka Allahumma…', sought refuge from Satan, and recited Al-Fatihah in every rak'ah followed by another passage in the first two.",
    detailAr: "كان ﷺ يفتتح الصلاة بالتكبير ثم دعاء الاستفتاح مثل: «سبحانك اللهم...»، ويستعيذ من الشيطان، ويقرأ الفاتحة في كل ركعة وسورة بعدها في الأوليين.",
    ref: "Sahih Muslim, Hadith 399; Sahih al-Bukhari, Hadith 756",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["opening dua","istiftah","fatihah","recitation","takbir","how to pray","دعاء الاستفتاح","التكبير","الفاتحة","القراءة","كيف أصلي"]
  },
  {
    cat: "prayer",
    title: "The best supplication is in prostration",
    titleAr: "أقرب ما يكون العبد في السجود",
    detail: "The Prophet ﷺ said the closest a servant is to his Lord is while prostrating, so make much supplication then. He also said the dua between the adhan and iqamah is not refused.",
    detailAr: "قال النبي ﷺ: أقرب ما يكون العبد من ربه وهو ساجد، فأكثروا الدعاء. وقال إن الدعاء بين الأذان والإقامة لا يُرد.",
    ref: "Sahih Muslim, Hadith 482; Jami at-Tirmidhi, Hadith 212",
    strength: "Sahih — Narrated by Muslim",
    keys: ["dua in sujood","prostration","best time for dua","accepted dua","adhan","الدعاء في السجود","السجود","استجابة الدعاء","بين الأذان والإقامة"]
  },
  {
    cat: "prayer",
    title: "Do not leave the two rak'ahs before Fajr",
    titleAr: "المحافظة على ركعتي الفجر",
    detail: "The Prophet ﷺ said the two rak'ahs before Fajr are better than the world and everything in it, and he never left them, even while travelling.",
    detailAr: "قال النبي ﷺ: ركعتا الفجر خير من الدنيا وما فيها، وكان لا يتركهما حتى في السفر.",
    arabic: "رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا",
    ref: "Sahih Muslim, Book of Travellers' Prayer, Hadith 725",
    strength: "Sahih — Narrated by Muslim",
    keys: ["fajr sunnah","two rakah","before fajr","morning prayer","سنة الفجر","ركعتا الفجر","قبل الفجر"]
  },
  {
    cat: "prayer",
    title: "End the night with Witr",
    titleAr: "اجعلوا آخر صلاتكم بالليل وتراً",
    detail: "The Prophet ﷺ instructed making the Witr the last prayer of the night. He would pray it in an odd number, and never abandoned it.",
    detailAr: "أمر النبي ﷺ أن تكون آخر صلاة الليل وتراً، وكان يصليه عدداً فردياً ولا يتركه.",
    ref: "Sahih al-Bukhari, Hadith 998; Sahih Muslim, Hadith 751",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["witr","night prayer","odd","last prayer","الوتر","آخر الليل","صلاة الليل"]
  },

  /* ================= MORE: HOME & MARRIAGE ================= */
  {
    cat: "home",
    title: "Choosing a spouse for character and faith",
    titleAr: "اختيار الزوج والزوجة للدين والخلق",
    detail: "The Prophet ﷺ taught that a woman is sought for four things but advised choosing for religion, and told guardians to accept a man of faith and character. He said the best provision of this world is a righteous spouse.",
    detailAr: "علّم النبي ﷺ أن المرأة تُنكح لأربع وأرشد إلى اختيار ذات الدين، وأمر الأولياء بتزويج صاحب الدين والخلق. وقال إن خير متاع الدنيا الزوجة الصالحة.",
    ref: "Sahih al-Bukhari, Hadith 5090; Sahih Muslim, Hadith 1467",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["marriage","spouse","wife","husband","choosing","proposal","engagement","الزواج","اختيار الزوجة","الزوج","الخطبة","الدين والخلق"]
  },
  {
    cat: "home",
    title: "Be just between your children",
    titleAr: "العدل بين الأولاد",
    detail: "When a father wished to give one son a gift, the Prophet ﷺ asked whether he had given the same to all his children, and told him to be just, saying: do not make me a witness to injustice.",
    detailAr: "لما أراد أب أن يخصّ ابناً بعطية سأله النبي ﷺ: أكل ولدك أعطيت مثله؟ وأمره بالعدل وقال: لا تُشهدني على جور.",
    ref: "Sahih al-Bukhari, Hadith 2587; Sahih Muslim, Hadith 1623",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["children","justice","fair","gift","favouritism","sons","daughters","الأولاد","العدل","العطية","التفريق","الأبناء"]
  },
  {
    cat: "home",
    title: "Raising daughters is a shield from the Fire",
    titleAr: "من عال جاريتين",
    detail: "The Prophet ﷺ said whoever is tested with daughters and is patient and good to them, they will be a screen for him from the Fire; and whoever raises two girls until they mature will be with him closely on the Day of Judgment.",
    detailAr: "قال النبي ﷺ: من ابتُلي بالبنات فصبر وأحسن إليهن كنّ له ستراً من النار، ومن عال جاريتين حتى تبلغا جاء يوم القيامة قريباً منه.",
    ref: "Sahih Muslim, Hadith 2631; Sahih al-Bukhari, Hadith 1418",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["daughters","girls","children","raising","patience","father","البنات","الجاريتين","التربية","الصبر","الأب"]
  },

  /* ================= MORE: FRIDAY & TIME ================= */
  {
    cat: "friday",
    title: "The hour of answered dua on Friday",
    titleAr: "ساعة الاستجابة يوم الجمعة",
    detail: "The Prophet ﷺ mentioned that in Friday there is an hour in which a servant's supplication is not refused, and urged seeking it — many scholars place it in the last part of the day before Maghrib.",
    detailAr: "ذكر النبي ﷺ أن في الجمعة ساعة لا يُرد فيها دعاء العبد، وحثّ على تحرّيها، وذهب كثير من العلماء إلى أنها في آخر النهار قبل المغرب.",
    ref: "Sahih Muslim, Book of Jumu'ah, Hadith 853",
    strength: "Sahih — Narrated by Muslim",
    keys: ["friday hour","dua accepted","last hour","jumuah","ساعة الجمعة","استجابة","آخر النهار","الدعاء"]
  },
  {
    cat: "character",
    title: "Value your time — two blessings people waste",
    titleAr: "نعمتان مغبون فيهما كثير من الناس",
    detail: "The Prophet ﷺ said there are two blessings many people squander: good health and free time. He urged acting before old age, illness, poverty and death arrive.",
    detailAr: "قال النبي ﷺ: نعمتان مغبون فيهما كثير من الناس: الصحة والفراغ. وحثّ على العمل قبل الهرم والمرض والفقر والموت.",
    arabic: "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ",
    ref: "Sahih al-Bukhari, Book of Heart Softeners, Hadith 6412",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["time","free time","health","waste","youth","procrastination","الوقت","الفراغ","الصحة","الشباب","التسويف"]
  },

  /* ================= MORE: PURITY ================= */
  {
    cat: "purity",
    title: "Do not waste water, even in wudu",
    titleAr: "عدم الإسراف في ماء الوضوء",
    detail: "The Prophet ﷺ performed wudu with a small amount of water and disliked extravagance in it, teaching restraint even in an act of worship.",
    detailAr: "كان النبي ﷺ يتوضأ بالماء القليل وكره الإسراف فيه، تعليماً للاقتصاد حتى في العبادة.",
    ref: "Sahih al-Bukhari, Hadith 201; Sunan Ibn Majah, Hadith 425",
    strength: "Sahih — established in the collections",
    keys: ["water","waste","wudu","extravagance","save water","الماء","الإسراف","الوضوء","الاقتصاد"]
  },
  {
    cat: "purity",
    title: "Ghusl on Friday and cleanliness of the body",
    titleAr: "الغسل يوم الجمعة والنظافة",
    detail: "The Prophet ﷺ said the Friday bath is a duty upon every adult, and he taught general cleanliness of body, clothing and mouth as part of faith.",
    detailAr: "قال النبي ﷺ: غسل الجمعة واجب على كل محتلم، وعلّم نظافة البدن والثوب والفم من الدين.",
    ref: "Sahih al-Bukhari, Hadith 879; Sahih Muslim, Hadith 846",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["ghusl","bath","shower","friday","clean","hygiene","الغسل","الاستحمام","الجمعة","النظافة"]
  },

  /* ================= MORE: FOOD ================= */
  {
    cat: "food",
    title: "He ﷺ never filled himself, and disliked leaning while eating",
    titleAr: "لم يشبع ﷺ ولم يأكل متكئاً",
    detail: "The Prophet ﷺ did not eat reclining, and his household would pass months without much bread. He taught contentment with little and thankfulness for it.",
    detailAr: "لم يكن النبي ﷺ يأكل متكئاً، وكان بيته يمضي الشهر دون كثير من الخبز. وعلّم القناعة بالقليل والشكر عليه.",
    ref: "Sahih al-Bukhari, Hadith 5398 and 5416",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["eating","reclining","full","hunger","contentment","simple food","الأكل","متكئا","الشبع","القناعة","الطعام البسيط"]
  },
  {
    cat: "food",
    title: "Do not waste food — even a fallen morsel",
    titleAr: "عدم إضاعة الطعام",
    detail: "The Prophet ﷺ instructed that if a morsel falls, one should remove any dirt and eat it rather than leave it for Satan, and that the fingers and dish be wiped clean.",
    detailAr: "أمر النبي ﷺ أن من سقطت لقمته فليمسح ما بها من أذى وليأكلها ولا يدعها للشيطان، وأمر بلعق الأصابع ومسح القصعة.",
    ref: "Sahih Muslim, Book of Drinks, Hadith 2033",
    strength: "Sahih — Narrated by Muslim",
    keys: ["waste food","leftovers","morsel","plate","fingers","israf","إضاعة الطعام","اللقمة","القصعة","الأصابع","الإسراف"]
  },

  /* ================= MORE: HARDSHIP & TRUST ================= */
  {
    cat: "hardship",
    title: "Tie your camel and trust in Allah",
    titleAr: "التوكل مع الأخذ بالأسباب",
    detail: "The Prophet ﷺ taught genuine reliance on Allah joined with practical effort — a man was told to tie his camel and then trust, and he ﷺ said that if people relied on Allah truly, they would be provided like the birds.",
    detailAr: "علّم النبي ﷺ التوكل الحق مع الأخذ بالأسباب — فقيل للرجل: اعقلها وتوكّل، وقال ﷺ: لو أنكم توكلتم على الله حق توكله لرزقكم كما يرزق الطير.",
    ref: "Jami at-Tirmidhi, Hadith 2517 (tie it) and 2344 (the birds)",
    strength: "Strong — authenticated by al-Albani",
    keys: ["trust","tawakkul","effort","provision","rizq","worry about money","التوكل","الأسباب","الرزق","القلق","العمل"]
  },
  {
    cat: "hardship",
    title: "Look at those below you, not above you",
    titleAr: "انظر إلى من هو أسفل منك",
    detail: "The Prophet ﷺ said: when one of you looks at someone given more in wealth and appearance, let him also look at one who has less — so he does not belittle Allah's favour upon him.",
    detailAr: "قال النبي ﷺ: إذا نظر أحدكم إلى من فُضّل عليه في المال والخَلْق فلينظر إلى من هو أسفل منه، حتى لا يزدري نعمة الله عليه.",
    ref: "Sahih al-Bukhari, Hadith 6490; Sahih Muslim, Hadith 2963",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["envy","jealous","comparison","gratitude","content","social media","الحسد","المقارنة","الشكر","القناعة","النعمة"]
  },

  /* ================= ADDITIONAL PRACTICES ================= */
  {
    cat: "dhikr",
    title: "The morning and evening remembrance",
    titleAr: "أذكار الصباح والمساء",
    detail: "The Prophet ﷺ taught saying morning and evening: 'O Allah, by You we have reached the morning…', along with Ayat al-Kursi, the three protective surahs, and 'SubhanAllah wa bihamdih' a hundred times — whoever says the latter has his sins forgiven though they be like the foam of the sea.",
    detailAr: "علّم النبي ﷺ أن يُقال صباحاً ومساءً: «اللَّهُمَّ بِكَ أَصْبَحْنَا...»، مع آية الكرسي والمعوذات، و«سُبْحَانَ اللَّهِ وَبِحَمْدِهِ» مائة مرة — فمن قالها غُفرت ذنوبه وإن كانت مثل زبد البحر.",
    ref: "Sunan Abu Dawud, Hadith 5068; Sahih al-Bukhari, Hadith 6405",
    strength: "Sahih — established in the collections",
    keys: ["morning","evening","adhkar","daily dhikr","protection","hundred times","أذكار الصباح","المساء","الأذكار اليومية","حفظ","مائة مرة"]
  },
  {
    cat: "dhikr",
    title: "The best word after the Quran, and the tree in Paradise",
    titleAr: "الباقيات الصالحات",
    detail: "The Prophet ﷺ said the most beloved words to Allah are: SubhanAllah, Alhamdulillah, La ilaha illa Allah and Allahu Akbar, and that each of them plants a tree for the servant in Paradise.",
    detailAr: "قال النبي ﷺ إن أحب الكلام إلى الله: سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر، وأن كل واحدة منها تُغرس للعبد شجرة في الجنة.",
    ref: "Sahih Muslim, Hadith 2137; Jami at-Tirmidhi, Hadith 3462",
    strength: "Sahih — Narrated by Muslim",
    keys: ["tasbih","tahmid","takbir","best words","tree in paradise","easy good deeds","الباقيات الصالحات","سبحان الله","الحمد لله","الله أكبر","شجرة في الجنة"]
  },
  {
    cat: "dhikr",
    title: "The dua of Yunus for every difficulty",
    titleAr: "دعوة ذي النون",
    detail: "The Prophet ﷺ said the supplication of Yunus in the belly of the whale — 'There is no god but You, glory to You, indeed I was among the wrongdoers' — is such that no Muslim supplicates with it for anything except that Allah answers him.",
    detailAr: "قال النبي ﷺ إن دعوة ذي النون في بطن الحوت: «لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ» ما دعا بها مسلم في شيء إلا استجاب الله له.",
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    ref: "Jami at-Tirmidhi, Hadith 3505; Musnad Ahmad",
    strength: "Sahih — authenticated by al-Albani",
    keys: ["yunus","dua","difficulty","answered","trouble","problem","help","ذو النون","يونس","الدعاء","الاستجابة","الشدة","المشكلة"]
  },
  {
    cat: "manners",
    title: "Shake hands when you meet",
    titleAr: "المصافحة عند اللقاء",
    detail: "The Prophet ﷺ taught that when two Muslims meet and shake hands, they are forgiven before they part. He would never withdraw his hand first from anyone who shook it.",
    detailAr: "علّم النبي ﷺ أن المسلمين إذا التقيا وتصافحا غُفر لهما قبل أن يفترقا. وكان لا ينزع يده من يد من صافحه حتى ينزعها الآخر.",
    ref: "Sunan Abu Dawud, Hadith 5212; Jami at-Tirmidhi, Hadith 2490",
    strength: "Strong — authenticated by al-Albani",
    keys: ["handshake","shake hands","meeting","greeting","forgiven","المصافحة","اللقاء","السلام","المغفرة"]
  },
  {
    cat: "manners",
    title: "Let the young greet the elder, and the rider the walker",
    titleAr: "من يبدأ بالسلام",
    detail: "The Prophet ﷺ taught the order of greeting: the rider greets the one walking, the walker greets the one sitting, and the smaller group greets the larger.",
    detailAr: "علّم النبي ﷺ ترتيب السلام: يسلّم الراكب على الماشي، والماشي على القاعد، والقليل على الكثير.",
    ref: "Sahih al-Bukhari, Book of Manners, Hadith 6233",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["greeting order","salam","rider","walking","elder","young","group","السلام","الراكب","الماشي","القاعد","الكثير"]
  },
  {
    cat: "manners",
    title: "Do not sit between two people without permission",
    titleAr: "لا يجلس بين اثنين إلا بإذنهما",
    detail: "The Prophet ﷺ said it is not permitted for a man to separate two people already sitting together except with their permission, and that no one should be made to stand so another may sit in his place.",
    detailAr: "قال النبي ﷺ لا يحل لرجل أن يفرّق بين اثنين إلا بإذنهما، ولا يُقام أحد من مجلسه ليجلس فيه غيره.",
    ref: "Sunan Abu Dawud, Hadith 4844; Sahih al-Bukhari, Hadith 6269",
    strength: "Sahih — established in the collections",
    keys: ["sitting","gathering","seat","majlis","manners","permission","المجلس","الجلوس","المكان","الأدب","الإذن"]
  },
  {
    cat: "character",
    title: "He ﷺ would repeat a word three times to be understood",
    titleAr: "كان يعيد الكلمة ثلاثاً ليُفهم",
    detail: "When the Prophet ﷺ spoke he spoke clearly and unhurriedly, and would repeat a sentence three times so it was understood. Aisha said his speech was distinct, such that anyone listening could count it.",
    detailAr: "كان النبي ﷺ إذا تكلّم تكلّم كلاماً بيّناً غير مستعجل، وكان يعيد الكلمة ثلاثاً لتُفهم. وقالت عائشة: كان كلامه فصلاً يفهمه كل من سمعه.",
    ref: "Sahih al-Bukhari, Hadith 95; Sunan Abu Dawud, Hadith 4839",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["speech","clear","teaching","explain","repeat","communication","الكلام","البيان","التعليم","الإفهام","التكرار"]
  },
  {
    cat: "character",
    title: "He ﷺ never turned away from someone speaking to him",
    titleAr: "كان يُقبل على محدّثه",
    detail: "The Prophet ﷺ gave his full attention to whoever spoke with him, turning his whole face toward them, and did not pull his hand or face away first. He treated each person as though they were the most important to him.",
    detailAr: "كان النبي ﷺ يُقبل بكله على من يحدثه، ويوجه إليه وجهه كاملاً، ولا ينصرف عنه أولاً، ويُشعر كل من جلس إليه أنه أكرم الناس عليه.",
    ref: "Jami at-Tirmidhi, Book of Virtues; Sunan Abu Dawud",
    strength: "Strong — established in the collections",
    keys: ["listening","attention","respect","conversation","kindness","الإقبال","الاستماع","الاحترام","المجالسة","حسن المعاملة"]
  },
  {
    cat: "food",
    title: "He ﷺ liked dates, milk and simple food",
    titleAr: "من طعامه ﷺ",
    detail: "Among the foods he ﷺ liked were dates, milk, honey, barley bread and vinegar with oil. He said a house without dates is a hungry house, and he praised simple wholesome food.",
    detailAr: "من الطعام الذي أحبه ﷺ: التمر واللبن والعسل وخبز الشعير والخل والزيت. وقال: بيت لا تمر فيه جياع أهله، وأثنى على الطعام البسيط الطيب.",
    ref: "Sahih Muslim, Hadith 2046 (dates); Sahih al-Bukhari, Book of Food and Drink",
    strength: "Sahih — established in the collections",
    keys: ["dates","milk","honey","bread","food he ate","simple","التمر","اللبن","العسل","الخبز","طعامه","البسيط"]
  },
  {
    cat: "sleep",
    title: "The Qaylulah — a short rest in the day",
    titleAr: "القيلولة",
    detail: "A brief midday rest was part of the practice of the Prophet ﷺ and his Companions, taken after Dhuhr, and it was a means of strength for worship at night.",
    detailAr: "كانت القيلولة من هدي النبي ﷺ وأصحابه، تُؤخذ بعد الظهر، وكانت عوناً على قيام الليل والعبادة.",
    ref: "Sahih al-Bukhari, Book of Permission (on the midday rest); established in the Sunnah",
    strength: "Sahih — established in the collections",
    keys: ["nap","qaylulah","rest","midday","afternoon","tired","القيلولة","النوم نهارا","الراحة","بعد الظهر"]
  },
  {
    cat: "purity",
    title: "Rinse your mouth after milk, and after eating",
    titleAr: "المضمضة بعد اللبن والطعام",
    detail: "After drinking milk the Prophet ﷺ rinsed his mouth, saying it has fat in it. He also washed his hands before and after eating.",
    detailAr: "شرب النبي ﷺ لبناً ثم تمضمض وقال: إن له دسماً. وكان يغسل يديه قبل الطعام وبعده.",
    ref: "Sahih al-Bukhari, Hadith 211; Jami at-Tirmidhi (washing hands)",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["rinse mouth","milk","wash hands","after eating","clean","المضمضة","اللبن","غسل اليدين","بعد الطعام","النظافة"]
  },
  {
    cat: "mosque",
    title: "Do not raise your voice or trade in the mosque",
    titleAr: "حرمة المسجد",
    detail: "The Prophet ﷺ taught that the mosque is for prayer and remembrance — he forbade buying and selling in it, calling out for lost property, and raising voices. He also disliked coming to the mosque with an offensive smell.",
    detailAr: "علّم النبي ﷺ أن المسجد للصلاة والذكر — فنهى عن البيع والشراء فيه، وعن إنشاد الضالة، ورفع الأصوات. وكره أن يأتي المسجد من به ريح كريهة.",
    ref: "Sunan Abu Dawud, Hadith 1079; Sahih Muslim, Hadith 568",
    strength: "Sahih — established in the collections",
    keys: ["mosque manners","voice","selling","smell","garlic","respect","أدب المسجد","الصوت","البيع","الريح","احترام"]
  },
  {
    cat: "quran",
    title: "Do not let the Quran be forgotten — review it",
    titleAr: "معاهدة القرآن",
    detail: "The Prophet ﷺ likened memorised Quran to a tethered camel: if its owner keeps hold of it he keeps it, and if he lets go it escapes. He urged constant review of what one has memorised.",
    detailAr: "شبّه النبي ﷺ حافظ القرآن بصاحب الإبل المعقّلة: إن عاهد عليها أمسكها، وإن أطلقها ذهبت. وحثّ على مداومة مراجعة المحفوظ.",
    ref: "Sahih al-Bukhari, Hadith 5031; Sahih Muslim, Hadith 789",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["memorise","hifz","forget","review","revision","quran memorisation","الحفظ","المراجعة","النسيان","معاهدة القرآن","التثبيت"]
  },
  {
    cat: "fasting",
    title: "Fasting is a shield — guard your tongue while fasting",
    titleAr: "الصيام جُنّة",
    detail: "The Prophet ﷺ said fasting is a shield, so the fasting person should not be obscene or quarrel; if someone abuses him he should say 'I am fasting'. He warned that Allah does not want mere abstention from food if one abandons falsehood.",
    detailAr: "قال النبي ﷺ: الصيام جُنّة، فلا يرفث الصائم ولا يجهل، وإن سابّه أحد فليقل: إني صائم. وحذّر أن من لم يدع قول الزور فليس لله حاجة في تركه طعامه.",
    ref: "Sahih al-Bukhari, Hadith 1894 and 1903; Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["fasting","ramadan","tongue","argue","anger while fasting","الصيام","رمضان","اللسان","الخصام","قول الزور"]
  },
  {
    cat: "health",
    title: "There is no blame in seeking a cure, but no charms or superstition",
    titleAr: "التداوي بلا تعليق أو تطيّر",
    detail: "The Prophet ﷺ commanded seeking treatment but forbade amulets, charms and superstition, saying there is no contagion in the way people imagined it and no evil omens — and he liked a good word.",
    detailAr: "أمر النبي ﷺ بالتداوي ونهى عن التمائم والتعليق والتطيّر، وقال: لا عدوى ولا طيرة، وكان يعجبه الفأل الحسن.",
    ref: "Sahih al-Bukhari, Hadith 5707; Sahih Muslim, Hadith 2220",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["amulet","charm","superstition","evil eye","treatment","medicine","omen","التمائم","التطير","الحسد","العدوى","التداوي","الفأل"]
  },
  {
    cat: "home",
    title: "Teach your family and pray with them",
    titleAr: "تعليم الأهل والصلاة معهم",
    detail: "The Prophet ﷺ would wake his family for prayer in the night, taught them the Quran and adhkar, and said the best of you are those best to their families. He instructed teaching children the prayer as they grow.",
    detailAr: "كان النبي ﷺ يوقظ أهله لصلاة الليل، ويعلّمهم القرآن والأذكار، وقال: خيركم خيركم لأهله. وأمر بتعليم الأولاد الصلاة عند بلوغهم سنّها.",
    ref: "Sahih al-Bukhari, Hadith 1129; Sunan Abu Dawud, Hadith 495",
    strength: "Sahih — established in the collections",
    keys: ["family","teach","children prayer","wake up","tarbiyah","upbringing","الأهل","التعليم","تعليم الصلاة","الإيقاظ","التربية"]
  },
  {
    cat: "manners",
    title: "Return a gift, or at least pray for the giver",
    titleAr: "المكافأة على الهدية والدعاء للمُهدي",
    detail: "The Prophet ﷺ accepted gifts and would repay them. He said whoever is given a favour and cannot repay it should pray for the giver, saying 'JazakAllahu khayran' — for he has then fully thanked him.",
    detailAr: "كان النبي ﷺ يقبل الهدية ويكافئ عليها. وقال: من صُنع إليه معروف فلم يستطع المكافأة فليدعُ لصاحبه ويقل: «جزاك الله خيراً»، فقد أبلغ في الثناء.",
    ref: "Jami at-Tirmidhi, Hadith 2035; Sahih al-Bukhari, Hadith 2585 (accepting gifts)",
    strength: "Sahih — authenticated by al-Albani",
    keys: ["gift","thank","favour","jazakallah","gratitude","repay","الهدية","الشكر","المعروف","جزاك الله خيرا","المكافأة"]
  },
  {
    cat: "death",
    title: "Charity that continues after death",
    titleAr: "الصدقة الجارية",
    detail: "The Prophet ﷺ said that when a person dies his deeds end except three: ongoing charity, knowledge that continues to benefit, and a righteous child who prays for him.",
    detailAr: "قال النبي ﷺ: إذا مات الإنسان انقطع عمله إلا من ثلاث: صدقة جارية، وعلم يُنتفع به، وولد صالح يدعو له.",
    arabic: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، وَعِلْمٍ يُنْتَفَعُ بِهِ، وَوَلَدٍ صَالِحٍ يَدْعُو لَهُ",
    ref: "Sahih Muslim, Book of Bequests, Hadith 1631",
    strength: "Sahih — Narrated by Muslim",
    keys: ["sadaqah jariyah","legacy","after death","charity","knowledge","righteous child","الصدقة الجارية","بعد الموت","العلم","الولد الصالح","الأثر"]
  },

  /* ================= FURTHER PRACTICES ================= */
  {
    cat: "prayer",
    title: "Pray as you have seen me pray",
    titleAr: "صلوا كما رأيتموني أصلي",
    detail: "The Prophet ﷺ said: pray as you have seen me pray. He taught the prayer by demonstration — standing, reciting, bowing, prostrating and sitting — so the community would follow his exact manner.",
    detailAr: "قال النبي ﷺ: صلوا كما رأيتموني أصلي. وعلّم الصلاة بالفعل — قياماً وقراءة وركوعاً وسجوداً وجلوساً — لتقتدي به الأمة في هيئتها.",
    arabic: "صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 631",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["how to pray","learn prayer","method","imitate","salah steps","كيف أصلي","تعلم الصلاة","صفة الصلاة","الاقتداء"]
  },
  {
    cat: "prayer",
    title: "Take a sutrah — something in front of you when you pray",
    titleAr: "السترة في الصلاة",
    detail: "The Prophet ﷺ would place something in front of him when praying — a spear, a stick, or the back of his saddle — and instructed that one pray toward a sutrah so people do not pass directly in front.",
    detailAr: "كان النبي ﷺ يجعل بين يديه شيئاً في الصلاة — عنزة أو عصا أو رحل — وأمر أن يصلي الرجل إلى سترة حتى لا يمرّ أحد بين يديه.",
    ref: "Sahih al-Bukhari, Hadith 501; Sahih Muslim, Hadith 501",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["sutrah","in front","passing","praying alone","barrier","السترة","المرور","أمام المصلي","الصلاة منفردا"]
  },
  {
    cat: "prayer",
    title: "The prayer of repentance and of need",
    titleAr: "صلاة التوبة وصلاة الحاجة",
    detail: "The Prophet ﷺ taught that whoever commits a sin, then performs wudu and prays two rak'ahs and seeks Allah's forgiveness, is forgiven. He also taught praying two rak'ahs and seeking guidance when facing any decision.",
    detailAr: "علّم النبي ﷺ أن من أذنب ثم توضأ وصلى ركعتين واستغفر الله غُفر له. وعلّم أن يصلي المرء ركعتين ويستخير الله عند كل أمر يهمّه.",
    ref: "Jami at-Tirmidhi, Hadith 406; Sahih al-Bukhari, Hadith 1162",
    strength: "Sahih — established in the collections",
    keys: ["repentance prayer","salat tawbah","istikharah","decision","sin","forgiveness","صلاة التوبة","الاستخارة","القرار","الذنب","المغفرة"]
  },
  {
    cat: "purity",
    title: "Wudu erases sins with every limb washed",
    titleAr: "الوضوء يحطّ الخطايا",
    detail: "The Prophet ﷺ said that when a servant makes wudu, the sins of his face fall away with the water, then those of his hands, then his feet — until he emerges cleansed of sin.",
    detailAr: "قال النبي ﷺ إن العبد إذا توضأ خرجت خطايا وجهه مع الماء، ثم خطايا يديه، ثم رجليه، حتى يخرج نقياً من الذنوب.",
    ref: "Sahih Muslim, Book of Purification, Hadith 244",
    strength: "Sahih — Narrated by Muslim",
    keys: ["wudu reward","sins","purification","cleansing","virtue of wudu","فضل الوضوء","الخطايا","التطهر","الذنوب"]
  },
  {
    cat: "purity",
    title: "Say the shahadah after completing wudu",
    titleAr: "الذكر بعد الوضوء",
    detail: "The Prophet ﷺ said whoever completes wudu then testifies that there is no god but Allah and that Muhammad is His Messenger, the eight gates of Paradise are opened for him to enter by whichever he wishes.",
    detailAr: "قال النبي ﷺ: من توضأ فأحسن الوضوء ثم شهد أن لا إله إلا الله وأن محمداً رسول الله، فُتحت له أبواب الجنة الثمانية يدخل من أيها شاء.",
    ref: "Sahih Muslim, Book of Purification, Hadith 234",
    strength: "Sahih — Narrated by Muslim",
    keys: ["after wudu","shahadah","dua after wudu","gates of paradise","بعد الوضوء","الشهادة","دعاء الوضوء","أبواب الجنة"]
  },
  {
    cat: "dress",
    title: "The dua when wearing a new garment",
    titleAr: "دعاء لبس الثوب الجديد",
    detail: "On wearing a new garment the Prophet ﷺ would name it and say: 'O Allah, praise is Yours; You clothed me with it. I ask You for its good and the good for which it was made.'",
    detailAr: "كان النبي ﷺ إذا لبس ثوباً جديداً سمّاه وقال: «اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ».",
    ref: "Sunan Abu Dawud, Hadith 4020; Jami at-Tirmidhi, Hadith 1767",
    strength: "Strong — authenticated by al-Albani",
    keys: ["new clothes","garment","dua","wearing","shopping","الثوب الجديد","لبس","دعاء اللباس","الشراء"]
  },
  {
    cat: "manners",
    title: "Lower your gaze and guard your glance",
    titleAr: "غض البصر",
    detail: "The Prophet ﷺ warned against following the first glance with a second, and taught that the eye has its own share of accountability. Believing men and women are commanded in the Quran to lower the gaze.",
    detailAr: "حذّر النبي ﷺ من إعادة النظر بعد النظرة الأولى، وبيّن أن للعين نصيبها من الحساب. وأُمر المؤمنون والمؤمنات في القرآن بغض البصر.",
    ref: "Sunan Abu Dawud, Hadith 2149; Surah An-Nur (24:30-31)",
    strength: "Sahih — established in the collections",
    keys: ["gaze","looking","eyes","glance","modesty","haram looking","phone","غض البصر","النظر","العين","الحياء","النظرة"]
  },
  {
    cat: "manners",
    title: "Do not enter a house without permission or look inside",
    titleAr: "النهي عن الاطلاع في البيوت",
    detail: "The Prophet ﷺ forbade looking into people's houses without permission, and taught that seeking permission exists precisely because of the gaze. Privacy of the home is protected.",
    detailAr: "نهى النبي ﷺ عن الاطلاع في بيوت الناس بغير إذن، وبيّن أن الاستئذان جُعل من أجل النظر. وحُرمة البيت مصونة.",
    ref: "Sahih al-Bukhari, Hadith 6241; Sahih Muslim, Hadith 2158",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["privacy","house","looking in","permission","neighbours","الخصوصية","البيوت","الاطلاع","الاستئذان","الجيران"]
  },
  {
    cat: "character",
    title: "Keep good company and avoid harmful company",
    titleAr: "مثل الجليس الصالح",
    detail: "The Prophet ﷺ likened the righteous companion to a seller of musk — you either receive some or at least a pleasant scent — and the bad companion to a blacksmith's bellows that burns or leaves you with a foul smell.",
    detailAr: "شبّه النبي ﷺ الجليس الصالح بحامل المسك — إما أن يحذيك أو تجد منه ريحاً طيبة — والجليس السوء بنافخ الكير يحرقك أو تجد منه ريحاً خبيثة.",
    ref: "Sahih al-Bukhari, Hadith 5534; Sahih Muslim, Hadith 2628",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["friends","company","companion","bad friends","influence","musk","الأصدقاء","الجليس","الصحبة","رفقة السوء","التأثير"]
  },
  {
    cat: "character",
    title: "Be trustworthy — the signs of hypocrisy to avoid",
    titleAr: "علامات المنافق التي يُحذر منها",
    detail: "The Prophet ﷺ described three signs to avoid: lying when speaking, breaking a promise, and betraying a trust. He said whoever has them has a share of hypocrisy even if he prays and fasts.",
    detailAr: "ذكر النبي ﷺ ثلاث علامات يُحذر منها: إذا حدّث كذب، وإذا وعد أخلف، وإذا اؤتمن خان. ومن كانت فيه فله نصيب من النفاق وإن صلى وصام.",
    ref: "Sahih al-Bukhari, Hadith 34; Sahih Muslim, Hadith 58",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["trust","promise","lying","hypocrisy","betray","reliable","الأمانة","الوعد","الكذب","النفاق","الخيانة"]
  },
  {
    cat: "hardship",
    title: "No fatigue or sorrow befalls you without reward",
    titleAr: "ما يصيب المؤمن من نصب إلا كُفّر به",
    detail: "The Prophet ﷺ said no fatigue, illness, worry, grief or harm reaches a Muslim — even the prick of a thorn — without Allah wiping away some of his sins by it. Hardship is never wasted.",
    detailAr: "قال النبي ﷺ: ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن ولا أذى، حتى الشوكة يُشاكها، إلا كفّر الله بها من خطاياه. فلا يذهب التعب سُدى.",
    ref: "Sahih al-Bukhari, Hadith 5641; Sahih Muslim, Hadith 2573",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["hardship","tired","exhausted","grief","reward","trial","suffering","التعب","النصب","الحزن","الأجر","الابتلاء","الهم"]
  },
  {
    cat: "hardship",
    title: "Remember that relief is near",
    titleAr: "بشارة قرب الفرج",
    detail: "The Prophet ﷺ taught wonder at the believer's state: if good comes he is grateful and rewarded, and if hardship comes he is patient and rewarded — so all his affairs are good.",
    detailAr: "علّم النبي ﷺ العجب من أمر المؤمن: إن أصابته سرّاء شكر فكان خيراً له، وإن أصابته ضرّاء صبر فكان خيراً له، فكل أمره خير.",
    ref: "Sahih Muslim, Book of Asceticism, Hadith 2999",
    strength: "Sahih — Narrated by Muslim",
    keys: ["patience","gratitude","hope","relief","hardship","optimism","الصبر","الشكر","الرجاء","الفرج","التفاؤل"]
  },
  {
    cat: "travel",
    title: "The traveller's supplication is answered",
    titleAr: "دعوة المسافر مستجابة",
    detail: "The Prophet ﷺ mentioned that three supplications are not refused: that of a parent, of a fasting person, and of a traveller. He also urged appointing a leader among a travelling group.",
    detailAr: "ذكر النبي ﷺ أن ثلاث دعوات لا تُرد: دعوة الوالد، ودعوة الصائم، ودعوة المسافر. وأمر بتأمير أحدهم إذا خرج جماعة في سفر.",
    ref: "Sunan al-Bayhaqi; Sunan Abu Dawud, Hadith 2608 (appointing a leader)",
    strength: "Strong — established in the collections",
    keys: ["traveller dua","journey","answered dua","group travel","leader","دعاء المسافر","السفر","الاستجابة","الرفقة","الأمير"]
  },
  {
    cat: "friday",
    title: "The best day the sun rises upon",
    titleAr: "خير يوم طلعت عليه الشمس",
    detail: "The Prophet ﷺ said the best day on which the sun rises is Friday: on it Adam was created, on it he entered Paradise and was brought out of it, and the Hour will occur on it.",
    detailAr: "قال النبي ﷺ: خير يوم طلعت عليه الشمس يوم الجمعة، فيه خُلق آدم، وفيه أُدخل الجنة، وفيه أُخرج منها، وفيه تقوم الساعة.",
    ref: "Sahih Muslim, Book of Jumu'ah, Hadith 854",
    strength: "Sahih — Narrated by Muslim",
    keys: ["friday","best day","jumuah","virtue","الجمعة","خير يوم","فضل الجمعة"]
  },
  {
    cat: "quran",
    title: "Al-Fatihah, and the greatest verse",
    titleAr: "الفاتحة وأعظم آية",
    detail: "The Prophet ﷺ called Al-Fatihah the greatest surah and taught that there is no prayer without it. He asked Ubayy which verse of the Book is greatest, and affirmed it was Ayat al-Kursi.",
    detailAr: "سمّى النبي ﷺ الفاتحة أعظم سورة، وبيّن أن لا صلاة إلا بها. وسأل أُبيّاً: أي آية في كتاب الله أعظم؟ فأقرّه على أنها آية الكرسي.",
    ref: "Sahih al-Bukhari, Hadith 4474; Sahih Muslim, Hadith 810",
    strength: "Sahih — established in the collections",
    keys: ["fatihah","ayat al kursi","greatest verse","surah","prayer recitation","الفاتحة","آية الكرسي","أعظم آية","الصلاة"]
  },
  {
    cat: "dhikr",
    title: "Seek refuge for your children as Ibrahim did",
    titleAr: "التعويذ للأبناء",
    detail: "The Prophet ﷺ would seek Allah's protection for Hasan and Husayn with the words: 'I seek refuge for you both in the perfect words of Allah from every devil and vermin, and from every harmful eye.'",
    detailAr: "كان النبي ﷺ يعوّذ الحسن والحسين فيقول: «أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ».",
    arabic: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    ref: "Sahih al-Bukhari, Book of Prophets, Hadith 3371",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["children protection","evil eye","ruqyah for kids","baby","hasan","husayn","تعويذ الأبناء","العين","الحفظ","الأطفال","الرقية"]
  },
  {
    cat: "animals",
    title: "Feeding animals and plants is charity",
    titleAr: "الأجر في سقي الزرع وإطعام الدابة",
    detail: "The Prophet ﷺ said that whoever plants a tree or sows a field from which a person, bird or animal eats, it is charity for him — and he urged planting even at the end of time.",
    detailAr: "قال النبي ﷺ: من غرس شجراً أو زرع زرعاً فأكل منه إنسان أو طائر أو دابة كان له به صدقة، وحثّ على الغرس حتى في آخر الزمان.",
    ref: "Sahih Muslim, Hadith 1552; Musnad Ahmad",
    strength: "Sahih — Narrated by Muslim",
    keys: ["planting","tree","environment","charity","birds","farming","الزرع","الغرس","الشجرة","البيئة","الصدقة","الطيور"]
  },
  {
    cat: "food",
    title: "Share food with your neighbour",
    titleAr: "إهداء الطعام للجار",
    detail: "The Prophet ﷺ told Abu Dharr that when he cooks a stew, he should add extra water and give some to his neighbour. He warned that one is not a believer who sleeps full while his neighbour beside him is hungry.",
    detailAr: "قال النبي ﷺ لأبي ذر: إذا طبخت مرقة فأكثر ماءها وتعاهد جيرانك. وحذّر: ليس المؤمن الذي يشبع وجاره جائع إلى جنبه.",
    ref: "Sahih Muslim, Hadith 2625; al-Bayhaqi (the second narration)",
    strength: "Sahih — Narrated by Muslim",
    keys: ["neighbour","food","share","hungry","cooking","الجار","الطعام","المشاركة","الجائع","الطبخ"]
  },
  {
    cat: "manners",
    title: "Smiling and a good word are charity",
    titleAr: "الكلمة الطيبة والتبسم صدقة",
    detail: "The Prophet ﷺ said every act of goodness is charity — a smile toward your brother, removing a harm from the road, guiding someone who is lost, and even a good word.",
    detailAr: "قال النبي ﷺ: كل معروف صدقة — تبسّمك في وجه أخيك، وإماطة الأذى عن الطريق، وإرشاد التائه، والكلمة الطيبة.",
    ref: "Jami at-Tirmidhi, Hadith 1956; Sahih al-Bukhari, Hadith 2989",
    strength: "Sahih — established in the collections",
    keys: ["smile","good word","charity","kindness","help","road","small deeds","التبسم","الكلمة الطيبة","الصدقة","المعروف","إماطة الأذى"]
  },
  {
    cat: "character",
    title: "Modesty is a branch of faith",
    titleAr: "الحياء شعبة من الإيمان",
    detail: "The Prophet ﷺ said faith has many branches and modesty is one of them; he also said that modesty and faith are joined together, so when one goes the other follows.",
    detailAr: "قال النبي ﷺ: الإيمان شُعب، والحياء شعبة من الإيمان. وقال: الحياء والإيمان قُرناء، فإذا ذهب أحدهما تبعه الآخر.",
    ref: "Sahih al-Bukhari, Hadith 9; Sahih Muslim, Hadith 35",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["modesty","haya","shyness","shame","faith","الحياء","الإيمان","العفة","الخجل"]
  },
  {
    cat: "home",
    title: "Do not sleep angry with one another",
    titleAr: "الإصلاح قبل النوم",
    detail: "The Prophet ﷺ urged reconciliation and warned that abandoning a fellow Muslim beyond three days is not permitted; the better of two is the one who greets first. Deeds are presented to Allah, and the one bearing enmity is left aside.",
    detailAr: "حثّ النبي ﷺ على الإصلاح وحذّر من الهجر فوق ثلاث، وخيرهما الذي يبدأ بالسلام. وتُعرض الأعمال على الله فيُترك المتشاحنان حتى يصطلحا.",
    ref: "Sahih Muslim, Hadith 2565; Sunan Abu Dawud, Hadith 4912",
    strength: "Sahih — established in the collections",
    keys: ["argument","fight","reconcile","angry","three days","family dispute","الخصام","الهجر","الإصلاح","المصالحة","ثلاثة أيام"]
  }
];
