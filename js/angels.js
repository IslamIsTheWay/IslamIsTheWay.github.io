/* ============================================================
   THE ANGELS — الملائكة
   ============================================================
   Every angel the Prophet ﷺ met or described on the night of the
   Isra and the Mi'raj, every angel named or described in the
   Quran, and what the two Sahihs add.

   The Mi'raj section is built on three narrations, read in the
   source before anything was written here:
     · Sahih al-Bukhari 3207 — Malik ibn Sa'sa'ah: the ascent
       through the seven heavens, the gatekeeper at each one,
       al-Bayt al-Ma'mur, Sidrat al-Muntaha.
     · Sahih al-Bukhari 349 — Abu Dharr: the splitting of the
       chest, the keeper of the lowest heaven, Adam and the souls,
       the scratching of the pens.
     · Sahih al-Bukhari 3239 and Sahih Muslim, Book of Faith —
       Ibn Abbas: he was shown Malik, the keeper of the Fire.

   And the same rule as the rest of the site: where something
   famous is NOT in the two Sahihs — the name Azrail, the name
   Ridwan, the names Munkar and Nakir — the entry says so instead
   of letting it pass.
   ============================================================ */

const ANGEL_GROUPS = [
  { id: "miraj",  en: "On the night of the Mi'raj", ar: "ليلة الإسراء والمعراج", icon: "🌙" },
  { id: "quran",  en: "Named in the Quran",         ar: "المذكورون في القرآن",   icon: "📖" },
  { id: "sahih",  en: "Described in the two Sahihs", ar: "الموصوفون في الصحيحين", icon: "📚" },
  { id: "notest", en: "Famous but not established",  ar: "مشهورٌ غير ثابت",       icon: "⚠️" }
];

const ANGELS = [

  /* ================= THE MI'RAJ ================= */
  {
    id: "ang-jibril-miraj",
    group: "miraj",
    order: 1,
    name: "Jibril — who came for him, and stayed with him the whole way",
    nameAr: "جبريل عليه السلام — الذي جاءه وصحبه الطريق كلَّه",
    role: "The angel of revelation, and the companion of the journey",
    roleAr: "ملَك الوحي، ورفيق الرحلة",
    detail: "It began before the journey did. Jibril came down, opened his chest, washed it with the water of Zamzam, and brought a golden basin filled with wisdom and faith, and emptied it into his chest, then closed it. Then he took him by the hand and ascended with him. At every one of the seven heavens it was Jibril who asked for the gate, and Jibril whom the Prophet ﷺ asked when he saw something he did not know.",
    detailAr: "بدأ الأمر قبل الرحلة نفسها. نزل جبريل ففرج صدره، وغسله بماء زمزم، وجاء بطستٍ من ذهبٍ مملوءٍ حكمةً وإيمانًا فأفرغه في صدره ثم أطبقه. ثم أخذ بيده فعرج به. وفي كل سماءٍ من السبع كان جبريل هو الذي يستفتح، وهو الذي يسأله النبي ﷺ عمّا رأى ولم يعرفه.",
    arabic: "فَنَزَلَ جِبْرِيلُ فَفَرَجَ صَدْرِي، ثُمَّ غَسَلَهُ بِمَاءِ زَمْزَمَ، ثُمَّ جَاءَ بِطَسْتٍ مِنْ ذَهَبٍ مُمْتَلِئٍ حِكْمَةً وَإِيمَانًا، فَأَفْرَغَهُ فِي صَدْرِي ثُمَّ أَطْبَقَهُ، ثُمَّ أَخَذَ بِيَدِي فَعَرَجَ بِي إِلَى السَّمَاءِ الدُّنْيَا",
    ref: "Sahih al-Bukhari, Book of Prayer, Hadith 349 — narrated by Abu Dharr رضي الله عنه",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["jibril", "gabriel", "miraj", "isra", "night journey", "chest", "zamzam",
           "جبريل", "المعراج", "الإسراء", "شق الصدر", "زمزم"]
  },
  {
    id: "ang-gatekeeper",
    group: "miraj",
    order: 2,
    name: "The keeper of each heaven — and the words said at every gate",
    nameAr: "خازن كل سماء — والكلام الذي دار عند كل باب",
    role: "The angel appointed to the gate of each of the seven heavens",
    roleAr: "الملَك الموكَّل بباب كل سماءٍ من السبع",
    detail: "This is the part people rarely notice: the same exchange happened seven times, at seven gates, with seven keepers. Jibril says: open. The keeper asks: who is this? He says: Jibril. The keeper asks: is anyone with you? He says: Muhammad. The keeper asks: has he been sent for? He says: yes. And only then is it opened — and the greeting comes back: welcome to him, and what an excellent arrival.",
    detailAr: "وهذا ما يغفل عنه كثيرٌ من الناس: أن الحوار نفسه تكرّر سبع مرات، عند سبعة أبواب، مع سبعة خزنة. يقول جبريل: افتح. فيقول الخازن: من هذا؟ فيقول: جبريل. فيقول: ومن معك؟ فيقول: محمد. فيقول: أوقد أُرسل إليه؟ فيقول: نعم. فعند ذلك يُفتح، ويأتي الترحيب: مرحبًا به، ولنِعم المجيء جاء.",
    arabic: "قَالَ جِبْرِيلُ لِخَازِنِ السَّمَاءِ: افْتَحْ. قَالَ: مَنْ هَذَا؟ قَالَ: هَذَا جِبْرِيلُ. قَالَ: هَلْ مَعَكَ أَحَدٌ؟ قَالَ: نَعَمْ مَعِي مُحَمَّدٌ ﷺ. فَقَالَ: أُرْسِلَ إِلَيْهِ؟ قَالَ: نَعَمْ",
    ref: "Sahih al-Bukhari, Book of Prayer, Hadith 349; and Book of the Beginning of Creation, Hadith 3207",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["gatekeeper", "keeper of heaven", "seven heavens", "gate", "open", "khazin",
           "خازن السماء", "أبواب السماء", "السماوات السبع", "استفتح"]
  },
  {
    id: "ang-malik-miraj",
    group: "miraj",
    order: 3,
    name: "Malik, the keeper of the Fire — whom he was shown that night",
    nameAr: "مالك خازن النار — الذي أُريه تلك الليلة",
    role: "The angel in charge of the Fire",
    roleAr: "الملَك الموكَّل بالنار",
    detail: "Ibn Abbas رضي الله عنهما reported that on the night he was taken, the Prophet ﷺ was shown Musa, and Isa, and Malik the keeper of the Fire, and the Dajjal — among signs Allah showed him. In another narration the two angels in a vision identify him directly: the one kindling the Fire is Malik, the keeper of the Fire; and I am Jibril, and this is Mika'il.",
    detailAr: "روى ابن عباس رضي الله عنهما أن النبي ﷺ ليلة أُسري به رأى موسى وعيسى، ورأى مالكًا خازن النار، والدجّال — في آياتٍ أراهنّ الله إياه. وفي روايةٍ أخرى يُعرّفه الملَكان في الرؤيا صراحةً: الذي يُوقد النار مالكٌ خازن النار، وأنا جبريل، وهذا ميكائيل.",
    arabic: "وَرَأَيْتُ مَالِكًا خَازِنَ النَّارِ … الَّذِي يُوقِدُ النَّارَ مَالِكٌ خَازِنُ النَّارِ، وَأَنَا جِبْرِيلُ، وَهَذَا مِيكَائِيلُ",
    ref: "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3239 and Hadith 3236; and Sahih Muslim, Book of Faith",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["malik", "keeper of fire", "hell", "miraj", "dajjal",
           "مالك", "خازن النار", "النار", "المعراج"]
  },
  {
    id: "ang-bayt-mamur",
    group: "miraj",
    order: 4,
    name: "The seventy thousand of al-Bayt al-Ma'mur — who enter and never return",
    nameAr: "سبعون ألفًا في البيت المعمور — يدخلونه ولا يعودون",
    role: "The angels of the House that is visited, in the seventh heaven",
    roleAr: "ملائكة البيت المعمور في السماء السابعة",
    detail: "When he reached the seventh heaven and met Ibrahim عليه السلام, al-Bayt al-Ma'mur was raised for him. He asked Jibril what it was, and Jibril told him: seventy thousand angels pray in it every day — and when they leave it, they never come back to it again. Think about what that number means about how many of them there are.",
    detailAr: "لمّا بلغ السماء السابعة ولقي إبراهيم عليه السلام، رُفع له البيت المعمور، فسأل جبريل عنه فقال: هذا البيت المعمور يصلي فيه كل يومٍ سبعون ألف ملَك، إذا خرجوا منه لم يعودوا إليه آخر ما عليهم. فتأمّل ما يدلّ عليه هذا العدد من كثرتهم.",
    arabic: "هَذَا الْبَيْتُ الْمَعْمُورُ يُصَلِّي فِيهِ كُلَّ يَوْمٍ سَبْعُونَ أَلْفَ مَلَكٍ، إِذَا خَرَجُوا لَمْ يَعُودُوا إِلَيْهِ آخِرَ مَا عَلَيْهِمْ",
    ref: "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3207 — narrated by Malik ibn Sa'sa'ah رضي الله عنه",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["bayt al mamur", "seventy thousand", "70000 angels", "seventh heaven", "how many angels",
           "البيت المعمور", "سبعون ألف ملك", "السماء السابعة", "عدد الملائكة"]
  },
  {
    id: "ang-pens",
    group: "miraj",
    order: 5,
    name: "The level where he heard the pens writing",
    nameAr: "المستوى الذي سمع فيه صريف الأقلام",
    role: "What is heard above the seventh heaven",
    roleAr: "ما يُسمع فوق السماء السابعة",
    detail: "He was raised until he reached a level at which he could hear the scratching of the pens. The scholars explain this as the writing of what Allah decrees. It is one line in the hadith and it says a great deal: the decree is not silent — it is being written, and he was brought close enough to hear it.",
    detailAr: "ثم عُرج به حتى ظهر لمستوًى يسمع فيه صريف الأقلام. وفسّره أهل العلم بكتابة ما يقضي الله به. وهو سطرٌ واحد في الحديث، وفيه معنًى عظيم: أن القدر لا يجري صامتًا، بل يُكتب، وقد قُرِّب ﷺ حتى سمع ذلك.",
    arabic: "ثُمَّ عُرِجَ بِي حَتَّى ظَهَرْتُ لِمُسْتَوًى أَسْمَعُ فِيهِ صَرِيفَ الْأَقْلَامِ",
    ref: "Sahih al-Bukhari, Book of Prayer, Hadith 349",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["pens", "sareef al aqlam", "decree", "writing", "miraj",
           "صريف الأقلام", "القدر", "الكتابة", "المعراج"]
  },
  {
    id: "ang-adam-souls",
    group: "miraj",
    order: 6,
    name: "Adam and the souls on his right and his left",
    nameAr: "آدم والأسودة عن يمينه وشماله",
    role: "What he saw at the gate of the lowest heaven",
    roleAr: "ما رآه عند باب السماء الدنيا",
    detail: "In the lowest heaven he found a man seated, with dark shapes on his right and dark shapes on his left. When he looked to his right he laughed, and when he looked to his left he wept. He asked Jibril who it was: this is Adam, and these shapes are the souls of his children. Those on the right are the people of Paradise, and those on the left are the people of the Fire. That is why he laughs one way and weeps the other.",
    detailAr: "رأى في السماء الدنيا رجلًا قاعدًا، عن يمينه أسودةٌ وعن شماله أسودة، إذا نظر قِبَل يمينه ضحك، وإذا نظر قِبَل شماله بكى. فسأل جبريل: من هذا؟ فقال: هذا آدم، وهذه الأسودة عن يمينه وشماله نَسَم بنيه؛ فأهل اليمين منهم أهل الجنة، والأسودة التي عن شماله أهل النار. فلذلك يضحك إلى هؤلاء ويبكي على هؤلاء.",
    arabic: "هَذَا آدَمُ، وَهَذِهِ الْأَسْوِدَةُ عَنْ يَمِينِهِ وَشِمَالِهِ نَسَمُ بَنِيهِ، فَأَهْلُ الْيَمِينِ مِنْهُمْ أَهْلُ الْجَنَّةِ، وَالْأَسْوِدَةُ الَّتِي عَنْ شِمَالِهِ أَهْلُ النَّارِ",
    ref: "Sahih al-Bukhari, Book of Prayer, Hadith 349",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["adam", "souls", "right and left", "paradise", "fire", "first heaven",
           "آدم", "نسم بنيه", "اليمين والشمال", "السماء الدنيا"]
  },
  {
    id: "ang-jibril-wings",
    group: "sahih",
    order: 7,
    name: "Jibril in the form he was created in — six hundred wings",
    nameAr: "جبريل في صورته التي خُلق عليها — ستمائة جناح",
    role: "What he actually looks like",
    roleAr: "صفته الحقيقية",
    detail: "Ibn Mas'ud رضي الله عنه reported that the Prophet ﷺ saw Jibril with six hundred wings. Aishah رضي الله عنها reported that he saw him in the form in which he was created, and that his creation filled what is between the horizon. These two together are the whole of what is authentically established about his appearance — everything beyond that is people's addition.",
    detailAr: "روى ابن مسعود رضي الله عنه أن النبي ﷺ رأى جبريل له ستمائة جناح. وروت عائشة رضي الله عنها أنه رآه في صورته التي خُلق عليها، وأن خَلقه سادٌّ ما بين الأفق. وهذان الحديثان هما جملة ما ثبت في صفته، وما زاد على ذلك فمن زيادات الناس.",
    arabic: "أَنَّهُ رَأَى جِبْرِيلَ لَهُ سِتُّمِائَةِ جَنَاحٍ",
    ref: "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3232; also Hadith 4856 and 4857; his form filling the horizon: Hadith 3234 and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["jibril", "wings", "six hundred", "form", "appearance", "what do angels look like",
           "جبريل", "ستمائة جناح", "صورته", "شكل الملائكة"]
  },

  /* ================= NAMED IN THE QURAN ================= */
  {
    id: "ang-q-jibril",
    group: "quran",
    order: 10,
    name: "Jibril — named three times",
    nameAr: "جبريل — سُمّي في القرآن",
    role: "The one who brought the revelation down upon the heart",
    roleAr: "الذي نزل بالوحي على القلب",
    detail: "He is named directly in Al-Baqarah twice and in At-Tahrim. He is also called Ar-Ruh al-Amin, the trustworthy spirit, and Ruh al-Qudus.",
    detailAr: "سُمّي صريحًا في البقرة مرتين وفي التحريم. وسُمّي أيضًا الروح الأمين، وروح القدس.",
    arabic: "قُلْ مَن كَانَ عَدُوًّا لِّجِبْرِيلَ فَإِنَّهُ نَزَّلَهُ عَلَىٰ قَلْبِكَ بِإِذْنِ اللَّهِ",
    ref: "Surah Al-Baqarah (2:97 and 2:98); Surah At-Tahrim (66:4); Ar-Ruh al-Amin in Surah Ash-Shu'ara (26:193)",
    strength: "Quran",
    keys: ["jibril", "gabriel", "ruh al amin", "revelation",
           "جبريل", "الروح الأمين", "روح القدس", "الوحي"]
  },
  {
    id: "ang-q-mikail",
    group: "quran",
    order: 11,
    name: "Mika'il — named once, alongside Jibril",
    nameAr: "ميكائيل — سُمّي مرةً مع جبريل",
    role: "Named in the Quran and by the Prophet ﷺ",
    roleAr: "مذكورٌ في القرآن وعلى لسان النبي ﷺ",
    detail: "Whoever is an enemy to Allah, His angels, His messengers, Jibril and Mika'il — then Allah is an enemy to the disbelievers. He is also named by the Prophet ﷺ in the supplication he opened the night prayer with, and in the narration where the two angels identify themselves.",
    detailAr: "من كان عدوًّا لله وملائكته ورسله وجبريل وميكال فإن الله عدوٌّ للكافرين. وسمّاه النبي ﷺ أيضًا في دعاء استفتاح قيام الليل، وفي الحديث الذي يعرّف فيه الملَكان بنفسيهما.",
    arabic: "مَن كَانَ عَدُوًّا لِّلَّهِ وَمَلَائِكَتِهِ وَرُسُلِهِ وَجِبْرِيلَ وَمِيكَالَ فَإِنَّ اللَّهَ عَدُوٌّ لِّلْكَافِرِينَ",
    ref: "Surah Al-Baqarah (2:98); and Sahih al-Bukhari, Hadith 3236",
    strength: "Quran; and Sahih — Narrated by al-Bukhari",
    keys: ["mikail", "michael", "مikail", "ميكائيل", "ميكال"]
  },
  {
    id: "ang-q-harut",
    group: "quran",
    order: 12,
    name: "Harut and Marut — the two at Babylon",
    nameAr: "هاروت وماروت — المَلَكان ببابل",
    role: "Two angels named in the Quran, sent as a trial",
    roleAr: "ملَكان مُسمَّيان في القرآن، أُنزلا فتنةً",
    detail: "The Quran names them in the account of what was taught at Babylon, and states that they would not teach anyone until they had said plainly: we are only a trial, so do not disbelieve. This is one of the few places the Quran names an angel other than Jibril and Mika'il.",
    detailAr: "سمّاهما القرآن في خبر ما أُنزل ببابل، وذكر أنهما لا يعلّمان من أحدٍ حتى يقولا صراحةً: إنما نحن فتنة فلا تكفر. وهذا من المواضع القليلة التي سمّى فيها القرآن ملَكًا غير جبريل وميكائيل.",
    arabic: "وَمَا أُنزِلَ عَلَى الْمَلَكَيْنِ بِبَابِلَ هَارُوتَ وَمَارُوتَ ۚ وَمَا يُعَلِّمَانِ مِنْ أَحَدٍ حَتَّىٰ يَقُولَا إِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ",
    ref: "Surah Al-Baqarah (2:102)",
    strength: "Quran",
    keys: ["harut", "marut", "babylon", "magic", "sihr",
           "هاروت", "ماروت", "بابل", "السحر"]
  },
  {
    id: "ang-q-throne",
    group: "quran",
    order: 13,
    name: "The bearers of the Throne — eight on that Day",
    nameAr: "حملة العرش — ثمانية يومئذٍ",
    role: "Those who bear the Throne of the Lord",
    roleAr: "الحاملون لعرش الربّ",
    detail: "And the angels will be on its edges, and eight will bear the Throne of your Lord above them on that Day. The Quran gives the number for that Day specifically.",
    detailAr: "والملَك على أرجائها، ويحمل عرش ربّك فوقهم يومئذٍ ثمانية. وقد ذكر القرآن العدد في ذلك اليوم على وجه الخصوص.",
    arabic: "وَالْمَلَكُ عَلَىٰ أَرْجَائِهَا ۚ وَيَحْمِلُ عَرْشَ رَبِّكَ فَوْقَهُمْ يَوْمَئِذٍ ثَمَانِيَةٌ",
    ref: "Surah Al-Haqqah (69:17)",
    strength: "Quran",
    keys: ["throne", "bearers", "eight", "arsh",
           "حملة العرش", "ثمانية", "العرش"]
  },
  {
    id: "ang-q-writers",
    group: "quran",
    order: 14,
    name: "The two writers — and the one ready beside you",
    nameAr: "الكاتبان — والرقيب العتيد",
    role: "The recording angels",
    roleAr: "الملائكة الكاتبون",
    detail: "Over you are keepers — noble, recording — who know whatever you do. And in Surah Qaf: not a word is uttered but that there is an observer beside him, ready. Two verses, and between them the whole idea that nothing said or done is unattended.",
    detailAr: "وإنّ عليكم لحافظين، كرامًا كاتبين، يعلمون ما تفعلون. وفي سورة ق: ما يلفظ من قولٍ إلا لديه رقيبٌ عتيد. آيتان، وفيهما المعنى كلّه: أن ما يُقال وما يُفعل لا يمرّ بغير حافظ.",
    arabic: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ ۝ كِرَامًا كَاتِبِينَ ۝ يَعْلَمُونَ مَا تَفْعَلُونَ",
    ref: "Surah Al-Infitar (82:10-12); and Surah Qaf (50:18)",
    strength: "Quran",
    keys: ["writers", "kiraman katibin", "recording", "raqib atid", "deeds written",
           "الكاتبان", "كراما كاتبين", "رقيب عتيد", "كتابة الأعمال"]
  },
  {
    id: "ang-q-nineteen",
    group: "quran",
    order: 15,
    name: "The nineteen, and the Zabaniyah",
    nameAr: "التسعة عشر والزبانية",
    role: "The angels over the Fire",
    roleAr: "الملائكة على النار",
    detail: "Over it are nineteen. And its angels are described as stern and severe, who do not disobey Allah in what He commands them and do exactly what they are commanded. The Zabaniyah are named in Surah Al-'Alaq.",
    detailAr: "عليها تسعة عشر. ووُصف ملائكتها بأنهم غلاظٌ شدادٌ لا يعصون الله ما أمرهم ويفعلون ما يُؤمرون. والزبانية مُسمَّون في سورة العلق.",
    arabic: "عَلَيْهَا تِسْعَةَ عَشَرَ ۝ عَلَيْهَا مَلَائِكَةٌ غِلَاظٌ شِدَادٌ لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ",
    ref: "Surah Al-Muddaththir (74:30); Surah At-Tahrim (66:6); the Zabaniyah in Surah Al-'Alaq (96:18)",
    strength: "Quran",
    keys: ["nineteen", "zabaniyah", "hell angels", "ghilaz shidad",
           "تسعة عشر", "الزبانية", "غلاظ شداد", "ملائكة النار"]
  },
  {
    id: "ang-q-badr",
    group: "quran",
    order: 16,
    name: "The angels sent down at Badr",
    nameAr: "الملائكة المُنزَلون يوم بدر",
    role: "Sent as reinforcement and as reassurance",
    roleAr: "أُنزلوا مددًا وبشرى",
    detail: "Allah says He reinforced them with a thousand angels in succession, and that He made it only as good news and so hearts would be at rest by it — and that victory is from Allah alone, not from the number. In Al-Imran the number is given as three thousand, then five thousand marked.",
    detailAr: "أخبر الله أنه أمدّهم بألفٍ من الملائكة مردفين، وأنه ما جعله إلا بشرى ولتطمئنّ به القلوب — وأن النصر من عند الله وحده لا من العدد. وفي آل عمران ذُكر ثلاثة آلاف ثم خمسة آلاف مسوّمين.",
    arabic: "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ",
    ref: "Surah Al-Anfal (8:9-10); Surah Al-Imran (3:124-125)",
    strength: "Quran",
    keys: ["badr", "battle", "angels help", "victory", "three thousand", "five thousand",
           "بدر", "المدد", "الملائكة في بدر", "النصر"]
  },
  {
    id: "ang-q-guests",
    group: "quran",
    order: 17,
    name: "The messengers who came to Ibrahim and to Lut",
    nameAr: "الرسل الذين جاءوا إبراهيم ولوطًا",
    role: "Angels who came in the form of men",
    roleAr: "ملائكةٌ جاءوا في صورة رجال",
    detail: "They came to Ibrahim عليه السلام as guests. He did not know them, brought them a roasted calf, and when he saw their hands did not reach for it he became uneasy of them — and they told him not to fear, and gave his wife the news of Ishaq. Then they went on to the people of Lut. The Quran shows angels here in a form that was not recognised until they said who they were.",
    detailAr: "جاءوا إبراهيم عليه السلام أضيافًا فلم يعرفهم، فقرّب إليهم عجلًا حنيذًا، فلما رأى أيديهم لا تصل إليه نكرهم وأوجس منهم خيفة — فقالوا: لا تخف، وبشّروا امرأته بإسحاق. ثم مضوا إلى قوم لوط. فالقرآن يُري الملائكة هنا في صورةٍ لم تُعرف حتى أخبروا عن أنفسهم.",
    arabic: "فَلَمَّا رَأَىٰ أَيْدِيَهُمْ لَا تَصِلُ إِلَيْهِ نَكِرَهُمْ وَأَوْجَسَ مِنْهُمْ خِيفَةً ۚ قَالُوا لَا تَخَفْ إِنَّا أُرْسِلْنَا إِلَىٰ قَوْمِ لُوطٍ",
    ref: "Surah Hud (11:69-81); Surah Adh-Dhariyat (51:24-30)",
    strength: "Quran",
    keys: ["ibrahim", "lut", "guests", "angels as men", "calf", "ishaq",
           "إبراهيم", "لوط", "الضيف", "العجل", "بشارة إسحاق"]
  },
  {
    id: "ang-q-maryam",
    group: "quran",
    order: 18,
    name: "The one who came to Maryam",
    nameAr: "الذي أتى مريم عليها السلام",
    role: "Sent to her in the form of a perfect man",
    roleAr: "أُرسل إليها فتمثّل لها بشرًا سويًّا",
    detail: "We sent to her Our spirit, and he appeared to her as a well-proportioned man. She said: I seek refuge in the Most Merciful from you, if you fear Allah. He said: I am only a messenger of your Lord, to give you a pure boy.",
    detailAr: "فأرسلنا إليها روحنا فتمثّل لها بشرًا سويًّا. قالت: إني أعوذ بالرحمن منك إن كنت تقيًّا. قال: إنما أنا رسول ربّك لأهب لك غلامًا زكيًّا.",
    arabic: "فَأَرْسَلْنَا إِلَيْهَا رُوحَنَا فَتَمَثَّلَ لَهَا بَشَرًا سَوِيًّا ۝ قَالَتْ إِنِّي أَعُوذُ بِالرَّحْمَٰنِ مِنكَ إِن كُنتَ تَقِيًّا ۝ قَالَ إِنَّمَا أَنَا رَسُولُ رَبِّكِ لِأَهَبَ لَكِ غُلَامًا زَكِيًّا",
    ref: "Surah Maryam (19:17-19)",
    strength: "Quran",
    keys: ["maryam", "mary", "isa", "annunciation", "ruh",
           "مريم", "الروح", "بشارة عيسى"]
  },
  {
    id: "ang-q-death",
    group: "quran",
    order: 19,
    name: "The Angel of Death — and those who take the souls",
    nameAr: "ملَك الموت — والذين يتوفَّون الأنفس",
    role: "Appointed to take the soul",
    roleAr: "الموكَّل بقبض الروح",
    detail: "Say: the Angel of Death, who has been put in charge of you, will take you, then you will be returned to your Lord. The Quran also speaks of angels in the plural taking the souls — those taken in a good state are met with peace.",
    detailAr: "قل يتوفّاكم ملَك الموت الذي وُكِّل بكم ثم إلى ربكم تُرجعون. وذكر القرآن أيضًا الملائكة بالجمع في قبض الأرواح — فالذين تتوفّاهم الملائكة طيّبين يُستقبلون بالسلام.",
    arabic: "قُلْ يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ الَّذِي وُكِّلَ بِكُمْ ثُمَّ إِلَىٰ رَبِّكُمْ تُرْجَعُونَ",
    ref: "Surah As-Sajdah (32:11); and Surah An-Nahl (16:32)",
    strength: "Quran",
    keys: ["angel of death", "death", "soul", "malak al mawt",
           "ملك الموت", "قبض الروح", "الموت", "الوفاة"]
  },
  {
    id: "ang-q-qadr",
    group: "quran",
    order: 20,
    name: "The angels who descend on the Night of Decree",
    nameAr: "الملائكة الذين يتنزّلون ليلة القدر",
    role: "Descending with every matter, by their Lord's permission",
    roleAr: "يتنزّلون بكل أمرٍ بإذن ربهم",
    detail: "The angels and the Spirit descend in it by permission of their Lord for every matter. Peace it is, until the emergence of dawn.",
    detailAr: "تنزّل الملائكة والروح فيها بإذن ربهم من كل أمر. سلامٌ هي حتى مطلع الفجر.",
    arabic: "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
    ref: "Surah Al-Qadr (97:4-5)",
    strength: "Quran",
    keys: ["laylat al qadr", "night of decree", "ramadan", "descend",
           "ليلة القدر", "تنزل الملائكة", "رمضان"]
  },

  /* ================= IN THE TWO SAHIHS ================= */
  {
    id: "ang-created-from",
    group: "sahih",
    order: 30,
    name: "What they were created from",
    nameAr: "مِمَّ خُلقوا",
    role: "Their origin, in one sentence",
    roleAr: "أصل خِلقتهم في جملة",
    detail: "The angels were created from light, and the jinn were created from a smokeless flame, and Adam was created from what you have been told about. One hadith, and it settles the question people ask most often.",
    detailAr: "خُلقت الملائكة من نور، وخُلق الجانّ من مارجٍ من نار، وخُلق آدم مما وُصف لكم. حديثٌ واحد، وفيه جواب أكثر ما يُسأل عنه.",
    arabic: "خُلِقَتِ الْمَلَائِكَةُ مِنْ نُورٍ، وَخُلِقَ الْجَانُّ مِنْ مَارِجٍ مِنْ نَارٍ، وَخُلِقَ آدَمُ مِمَّا وُصِفَ لَكُمْ",
    ref: "Sahih Muslim, Book of Asceticism (Kitab az-Zuhd) — narrated by Aishah رضي الله عنها",
    strength: "Sahih — Narrated by Muslim",
    keys: ["created from light", "what are angels made of", "noor", "jinn",
           "خلقت الملائكة من نور", "خلق الملائكة", "الجن", "النور"]
  },
  {
    id: "ang-sahih-shifts",
    group: "sahih",
    order: 31,
    name: "The angels who take turns over you, night and day",
    nameAr: "الملائكة يتعاقبون فيكم بالليل والنهار",
    role: "Two shifts, meeting at Fajr and at Asr",
    roleAr: "فوجان يجتمعان في الفجر والعصر",
    detail: "Angels take turns among you by night and by day, and they gather at the prayer of Fajr and the prayer of Asr. Then those who spent the night among you ascend, and their Lord asks them — though He knows best — how did you leave My servants? They say: we left them praying, and we came to them praying.",
    detailAr: "يتعاقبون فيكم ملائكةٌ بالليل وملائكةٌ بالنهار، ويجتمعون في صلاة الفجر وصلاة العصر. ثم يعرج الذين باتوا فيكم فيسألهم ربّهم وهو أعلم بهم: كيف تركتم عبادي؟ فيقولون: تركناهم وهم يصلّون، وأتيناهم وهم يصلّون.",
    arabic: "يَتَعَاقَبُونَ فِيكُمْ مَلَائِكَةٌ بِاللَّيْلِ وَمَلَائِكَةٌ بِالنَّهَارِ، وَيَجْتَمِعُونَ فِي صَلَاةِ الْفَجْرِ وَصَلَاةِ الْعَصْرِ",
    ref: "Sahih al-Bukhari, Book of the Times of Prayer, Hadith 555 — Sahih, agreed upon",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["shifts", "fajr", "asr", "angels watching", "night and day",
           "يتعاقبون", "ملائكة الليل والنهار", "الفجر والعصر"]
  },
  {
    id: "ang-sahih-praying",
    group: "sahih",
    order: 32,
    name: "The angels who ask forgiveness for you where you sat",
    nameAr: "الملائكة تُصلّي عليك في مُصلّاك",
    role: "What they say while you remain",
    roleAr: "ما يقولونه ما دمتَ في مكانك",
    detail: "The angels send blessings on one of you as long as he remains in the place where he prayed, so long as he does not break his wudu. They say: O Allah, forgive him. O Allah, have mercy on him.",
    detailAr: "الملائكة تصلّي على أحدكم ما دام في مُصلّاه الذي صلّى فيه ما لم يُحدِث، تقول: اللهم اغفر له، اللهم ارحمه.",
    arabic: "الْمَلَائِكَةُ تُصَلِّي عَلَىٰ أَحَدِكُمْ مَا دَامَ فِي مُصَلَّاهُ الَّذِي صَلَّى فِيهِ مَا لَمْ يُحْدِثْ، تَقُولُ: اللَّهُمَّ اغْفِرْ لَهُ، اللَّهُمَّ ارْحَمْهُ",
    ref: "Sahih al-Bukhari, Book of Prayer, Hadith 445 — Sahih",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["angels pray for you", "after prayer", "sitting", "forgiveness",
           "الملائكة تصلي عليه", "المصلى", "بعد الصلاة", "الاستغفار"]
  },

  /* ================= FAMOUS BUT NOT ESTABLISHED ================= */
  {
    id: "ang-not-azrail",
    group: "notest",
    order: 40,
    name: "'Azrail' — the name is not in the Quran or the two Sahihs",
    nameAr: "«عزرائيل» — الاسم ليس في القرآن ولا الصحيحين",
    role: "A name in wide circulation with no authentic source",
    roleAr: "اسمٌ منتشرٌ لا أصل له في الصحيحين",
    detail: "The Quran calls him Malak al-Mawt — the Angel of Death — and gives him no personal name. The name Azrail, which almost everyone uses, is not in the Quran and not in al-Bukhari or Muslim. Saying so is not a criticism of anyone; it is only refusing to present as certain what is not.",
    detailAr: "سمّاه القرآن «ملَك الموت» ولم يُعطه اسمًا علَمًا. وأما «عزرائيل» الذي يتداوله الناس فليس في القرآن ولا في البخاري ومسلم. وبيان ذلك ليس تخطئةً لأحد، وإنما هو امتناعٌ عن تقديم غير الثابت على أنه ثابت.",
    arabic: "قُلْ يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ الَّذِي وُكِّلَ بِكُمْ",
    ref: "Surah As-Sajdah (32:11) for the description. The name 'Azrail': not found in the Quran or the two Sahihs",
    strength: "The description is Quran. The NAME is not established",
    keys: ["azrail", "azrael", "angel of death name",
           "عزرائيل", "اسم ملك الموت"]
  },
  {
    id: "ang-not-ridwan",
    group: "notest",
    order: 41,
    name: "'Ridwan' — the keeper of Paradise is not named in the two Sahihs",
    nameAr: "«رِضوان» — خازن الجنة غير مُسمّى في الصحيحين",
    role: "The Quran calls them khazanatuha — its keepers",
    roleAr: "سمّاهم القرآن «خزنتها»",
    detail: "The Quran records what the keepers of Paradise say to those arriving: peace be upon you, you have done well, so enter it to remain forever. It calls them its keepers and does not name one of them Ridwan. That name is not in the Quran and not in the two Sahihs.",
    detailAr: "ذكر القرآن ما تقوله خزنة الجنة للقادمين: سلامٌ عليكم طبتم فادخلوها خالدين. وسمّاهم «خزنتها» ولم يُسمِّ أحدهم رِضوان. وهذا الاسم ليس في القرآن ولا في الصحيحين.",
    arabic: "وَقَالَ لَهُمْ خَزَنَتُهَا سَلَامٌ عَلَيْكُمْ طِبْتُمْ فَادْخُلُوهَا خَالِدِينَ",
    ref: "Surah Az-Zumar (39:73). The name 'Ridwan': not found in the Quran or the two Sahihs",
    strength: "The description is Quran. The NAME is not established",
    keys: ["ridwan", "keeper of paradise", "gatekeeper of jannah",
           "رضوان", "خازن الجنة", "خزنة الجنة"]
  },
  {
    id: "ang-not-munkar",
    group: "notest",
    order: 42,
    name: "'Munkar and Nakir' — outside the two Sahihs, not baseless",
    nameAr: "«منكر ونكير» — خارج الصحيحين ولا يُقال لا أصل له",
    role: "The two angels of the questioning in the grave",
    roleAr: "ملَكا السؤال في القبر",
    detail: "The questioning in the grave itself is firmly established in the two Sahihs. The two NAMES come from a narration of at-Tirmidhi — which places them outside al-Bukhari and Muslim, but does not make them baseless. This entry sits between the fully established and the unfounded, and is marked that way rather than being pushed to either side.",
    detailAr: "أما السؤال في القبر نفسه فثابتٌ في الصحيحين. وأما الاسمان فمن رواية الترمذي — وهو خارج البخاري ومسلم، ولا يُقال إنه لا أصل له. فهذا المدخل بين الثابت والمردود، ونُنزله منزلته ولا نُلحقه بأحد الطرفين.",
    arabic: "",
    ref: "The questioning: Sahih al-Bukhari, Book of Funerals, Hadith 1369 — Sahih. The two names: Jami' at-Tirmidhi — outside the two Sahihs",
    strength: "The questioning: Sahih — Narrated by al-Bukhari. The names: outside the two Sahihs",
    keys: ["munkar", "nakir", "grave angels", "questioning",
           "منكر", "نكير", "ملكا القبر", "سؤال القبر"]
  }
];
