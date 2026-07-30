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
    keys: ["distress","worry","anxiety","sadness","hardship","stress","grief","dua","الكرب","الهم","القلق","الحزن","الشدة","دعاء الفرج"]
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
  }
];
