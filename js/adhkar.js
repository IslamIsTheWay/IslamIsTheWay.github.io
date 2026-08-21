/* ============================================================
   ADHKAR — الأذكار
   ============================================================
   The remembrances of the day: morning and evening, before sleep,
   on waking, after the prayer, the words of tasbih, and what is
   said in distress.

   Every entry below was located in the text of Sahih al-Bukhari or
   Sahih Muslim before it was written here — the Arabic is copied
   from the source, not typed from memory. Where a dhikr people
   practise every day is NOT in the two Sahihs (the three suras
   morning and evening, Ayat al-Kursi after the prayer, "O Allah,
   protect me from Your punishment on the Day You raise Your
   servants"), the entry says so plainly instead of letting it pass
   as agreed upon.

   `count` drives the tap counter on the page. `countAr` is written
   out in words because that is how it reads in Arabic.
   ============================================================ */

const ADHKAR_CATEGORIES = [
  { id: "morning",  en: "Morning & evening",   ar: "أذكار الصباح والمساء", icon: "🌅" },
  { id: "wake",     en: "On waking",           ar: "أذكار الاستيقاظ",      icon: "🌄" },
  { id: "sleep",    en: "Before sleeping",     ar: "أذكار النوم",          icon: "🌙" },
  { id: "prayer",   en: "After the prayer",    ar: "أذكار بعد الصلاة",     icon: "🕌" },
  { id: "tasbih",   en: "Tasbih & tahlil",     ar: "التسبيح والتهليل",     icon: "📿" },
  { id: "distress", en: "Worry & hardship",    ar: "أذكار الكرب والهمّ",   icon: "🤲" }
];

const ADHKAR = [

  /* ---------------- Morning and evening ---------------- */
  {
    id: "dh-sayyid",
    cat: "morning",
    title: "Sayyid al-Istighfar — the master of asking forgiveness",
    titleAr: "سيّد الاستغفار",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    en: "O Allah, You are my Lord. There is no god but You. You created me and I am Your servant, and I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin — so forgive me, for none forgives sins but You.",
    count: 1,
    countEn: "Once, morning and evening",
    countAr: "مرّة واحدة صباحًا ومساءً",
    virtue: "The Prophet ﷺ said whoever says it during the day, certain of it, and dies before evening, is of the people of Paradise — and whoever says it at night, certain of it, and dies before morning, is of the people of Paradise.",
    virtueAr: "قال النبي ﷺ: من قالها من النهار موقنًا بها فمات من يومه قبل أن يُمسي فهو من أهل الجنة، ومن قالها من الليل وهو موقنٌ بها فمات قبل أن يُصبح فهو من أهل الجنة.",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6306",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["istighfar", "forgiveness", "morning", "evening", "سيد الاستغفار", "الاستغفار", "الصباح", "المساء"]
  },
  {
    id: "dh-asbahna",
    cat: "morning",
    title: "We have entered the morning and the dominion belongs to Allah",
    titleAr: "أصبحنا وأصبح الملك لله",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    en: "We have entered the morning and the dominion belongs to Allah. Praise be to Allah. There is no god but Allah alone, with no partner; His is the dominion and His the praise, and He is able to do all things. My Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. My Lord, I seek refuge in You from laziness and the misery of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.",
    count: 1,
    countEn: "Once — in the evening say \"amsayna\" (we have entered the evening) in place of \"asbahna\"",
    countAr: "مرّة واحدة — ويُقال في المساء: أمسينا وأمسى الملك لله",
    virtue: "This is what the Prophet ﷺ himself said when he entered the morning, and the same when he entered the evening.",
    virtueAr: "هذا ما كان يقوله النبي ﷺ إذا أصبح، وكان يقول مثله إذا أمسى.",
    ref: "Sahih Muslim, Book of Remembrance and Supplication (Kitab adh-Dhikr wa'd-Du'a)", refAr: "صحيح مسلم، كتاب الذكر والدعاء",
    strength: "Sahih — Narrated by Muslim",
    keys: ["morning", "evening", "dominion", "أصبحنا", "أمسينا", "الملك لله", "الصباح", "المساء"]
  },
  {
    id: "dh-kalimat-tammat",
    cat: "morning",
    title: "I seek refuge in the perfect words of Allah",
    titleAr: "أعوذ بكلمات الله التامّات",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    en: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    count: 3,
    countEn: "Three times in the evening",
    countAr: "ثلاث مرّات في المساء",
    virtue: "The Prophet ﷺ said that whoever stops at a place and says this, nothing will harm him until he leaves that place.",
    virtueAr: "قال النبي ﷺ: من نزل منزلًا ثم قال: أعوذ بكلمات الله التامّات من شرّ ما خلق، لم يضرّه شيءٌ حتى يرتحل من منزله ذلك.",
    ref: "Sahih Muslim, Book of Remembrance and Supplication — narrated by Khawlah bint Hakim رضي الله عنها", refAr: "صحيح مسلم، كتاب الذكر والدعاء — عن خولة بنت حكيم رضي الله عنها",
    strength: "Sahih — Narrated by Muslim",
    keys: ["refuge", "protection", "harm", "كلمات الله", "الاستعاذة", "الحفظ", "المساء"]
  },
  {
    id: "dh-subhan-100",
    cat: "morning",
    title: "Subhan Allah wa bihamdih — a hundred times",
    titleAr: "سبحان الله وبحمده مئة مرّة",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    en: "Glory be to Allah, and praise be to Him.",
    count: 100,
    countEn: "A hundred times a day",
    countAr: "مئة مرّة في اليوم",
    virtue: "The Prophet ﷺ said whoever says it a hundred times in a day, his sins are wiped away even if they were like the foam of the sea.",
    virtueAr: "قال النبي ﷺ: من قال سبحان الله وبحمده في يومٍ مئة مرة حُطّت خطاياه وإن كانت مثل زَبَد البحر.",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6405 — and Sahih Muslim, Book of Remembrance", refAr: "صحيح البخاري، كتاب الدعوات، حديث ٦٤٠٥ — ورواه مسلم في كتاب الذكر",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tasbih", "hundred", "sins", "سبحان الله", "مئة", "الذنوب", "التسبيح"]
  },
  {
    id: "dh-tahlil-100",
    cat: "morning",
    title: "La ilaha illa Allah, alone with no partner — a hundred times",
    titleAr: "لا إله إلا الله وحده لا شريك له مئة مرّة",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    en: "There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He is able to do all things.",
    count: 100,
    countEn: "A hundred times a day",
    countAr: "مئة مرّة في اليوم",
    virtue: "The Prophet ﷺ said whoever says it a hundred times in a day has the reward of freeing ten slaves, a hundred good deeds are written for him, a hundred bad deeds are erased, and it is a protection for him from Shaytan that day until evening — and no one brings anything better than it except a man who did more.",
    virtueAr: "قال النبي ﷺ: من قالها في يومٍ مئة مرة كانت له عَدْلَ عشر رقاب، وكُتبت له مئة حسنة، ومُحيت عنه مئة سيئة، وكانت له حِرزًا من الشيطان يومه ذلك حتى يُمسي، ولم يأتِ أحدٌ بأفضل ممّا جاء به إلا رجلٌ عمل أكثر منه.",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6403 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tahlil", "hundred", "protection", "لا إله إلا الله", "مئة", "حرز", "التهليل"]
  },
  {
    id: "dh-three-suras",
    cat: "morning",
    title: "The three suras — Al-Ikhlas, Al-Falaq and An-Nas",
    titleAr: "المعوّذات: الإخلاص والفلق والناس",
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ … قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ … قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    en: "Surah Al-Ikhlas (112), Surah Al-Falaq (113) and Surah An-Nas (114), recited in full.",
    count: 3,
    countEn: "Three times each, morning and evening",
    countAr: "ثلاث مرّات لكلٍّ منها صباحًا ومساءً",
    virtue: "Reciting them three times each morning and evening is reported as sufficing a person against everything. Note carefully: reciting them at THIS time is not in al-Bukhari or Muslim — it is narrated by Abu Dawud and at-Tirmidhi and graded authentic by al-Albani. What IS in al-Bukhari is that the Prophet ﷺ recited them into his hands and wiped over himself each night before sleeping.",
    virtueAr: "قراءتها ثلاثًا صباحًا ومساءً جاء فيها أنها تكفي العبد من كل شيء. وانتبه: قراءتها في هذا الوقت ليست في البخاري ولا مسلم، وإنما رواها أبو داود والترمذي وصحّحها الألباني. وأما الثابت في البخاري فهو أنه ﷺ كان ينفث بها في كفّيه ويمسح بهما جسده كل ليلة عند النوم.",
    ref: "Morning and evening: Sunan Abu Dawud and Jami' at-Tirmidhi, authenticated by al-Albani — outside the two Sahihs. Before sleeping: Sahih al-Bukhari, Book of the Virtues of the Quran, Hadith 5017 — Sahih", refAr: "الصباح والمساء: سنن أبي داود وجامع الترمذي، صحّحه الألباني — خارج الصحيحين. وقبل النوم: صحيح البخاري، كتاب فضائل القرآن، حديث ٥٠١٧ — صحيح",
    strength: "Strong — Narrated by Abu Dawud and at-Tirmidhi, authenticated by al-Albani (for the morning and evening); Sahih — Narrated by al-Bukhari (for before sleeping)",
    keys: ["ikhlas", "falaq", "nas", "muawwidhat", "protection", "المعوذات", "الإخلاص", "الفلق", "الناس", "الرقية"]
  },

  /* ---------------- On waking ---------------- */
  {
    id: "dh-wake",
    cat: "wake",
    title: "Praise be to Allah who gave us life after He caused us to die",
    titleAr: "الحمد لله الذي أحيانا بعد ما أماتنا",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    en: "Praise be to Allah, who gave us life after He caused us to die — and to Him is the resurrection.",
    count: 1,
    countEn: "Once, on waking",
    countAr: "مرّة واحدة عند الاستيقاظ",
    virtue: "This is what the Prophet ﷺ said when he woke from sleep. Sleep is called a death in this wording, and waking a raising — the small rehearsal of the greater one.",
    virtueAr: "هذا ما كان يقوله النبي ﷺ إذا استيقظ من نومه. وقد سُمّي النوم في هذا اللفظ موتًا، والاستيقاظ نشورًا — فهو تذكيرٌ بالبعث الأكبر.",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6312",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["waking", "morning", "sleep", "الاستيقاظ", "النوم", "النشور", "الحمد لله"]
  },

  /* ---------------- Before sleeping ---------------- */
  {
    id: "dh-sleep-name",
    cat: "sleep",
    title: "In Your name, O Allah, I die and I live",
    titleAr: "باسمك اللهم أموت وأحيا",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    en: "In Your name, O Allah, I die and I live.",
    count: 1,
    countEn: "Once, on lying down",
    countAr: "مرّة واحدة عند الاضطجاع",
    virtue: "The Prophet ﷺ said this when he went to his bed.",
    virtueAr: "كان النبي ﷺ يقول هذا إذا أوى إلى فراشه.",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6324",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["sleep", "bed", "night", "النوم", "الفراش", "الاضطجاع"]
  },
  {
    id: "dh-sleep-kursi",
    cat: "sleep",
    title: "Ayat al-Kursi before sleeping",
    titleAr: "آية الكرسي قبل النوم",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ …",
    en: "Allah — there is no god but He, the Ever-Living, the Sustainer of all. Neither drowsiness overtakes Him nor sleep… (Surah Al-Baqarah 2:255, recited to the end)",
    count: 1,
    countEn: "Once, on going to bed",
    countAr: "مرّة واحدة عند النوم",
    virtue: "\"When you go to your bed, recite Ayat al-Kursi — a guard from Allah will not leave you, and no devil will come near you until morning.\" The Prophet ﷺ confirmed the words were true, though the one who said them was a liar.",
    virtueAr: "«إذا أويتَ إلى فراشك فاقرأ آية الكرسي، لن يزال معك من الله حافظ، ولا يقربك شيطان حتى تصبح.» وأقرّ النبي ﷺ صدق الكلمة وإن كان قائلها كذوبًا.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Quran, Hadith 5010",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["ayat al kursi", "sleep", "protection", "devil", "آية الكرسي", "النوم", "الحفظ", "الشيطان"]
  },
  {
    id: "dh-sleep-tasbih",
    cat: "sleep",
    title: "The tasbih of Fatimah — thirty-three, thirty-three, thirty-four",
    titleAr: "تسبيح فاطمة رضي الله عنها عند النوم",
    arabic: "سُبْحَانَ اللَّهِ (٣٣) — الْحَمْدُ لِلَّهِ (٣٣) — اللَّهُ أَكْبَرُ (٣٤)",
    en: "Glory be to Allah (33) — praise be to Allah (33) — Allah is greatest (34).",
    count: 100,
    countEn: "A hundred in total, at bedtime",
    countAr: "مئة في المجموع عند النوم",
    virtue: "Fatimah رضي الله عنها came to her father asking for a servant to help her, and he offered her this instead: \"Shall I not tell you of what is better for you than a servant?\" Ali رضي الله عنه said he never left it after that — and when he was asked, \"not even on the night of Siffin?\", he said: not even on the night of Siffin. The narrations differ over which of the three is the thirty-four; both wordings are in al-Bukhari.",
    virtueAr: "أتت فاطمة رضي الله عنها أباها تسأله خادمًا، فدلّها على ما هو خيرٌ لها منه: «ألا أخبرك بما هو خيرٌ لك منه؟» قال عليٌّ رضي الله عنه: فما تركتها بعد، فقيل: ولا ليلة صِفّين؟ قال: ولا ليلة صِفّين. واختلفت الروايات في أيّها تكون أربعًا وثلاثين، وكلا اللفظين في البخاري.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Companions, Hadith 5362; and Book of Supplications, Hadith 6318", refAr: "صحيح البخاري، كتاب فضائل الصحابة، حديث ٥٣٦٢؛ وكتاب الدعوات، حديث ٦٣١٨",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tasbih", "fatimah", "sleep", "servant", "تسبيح فاطمة", "النوم", "الخادم", "التسبيح"]
  },

  /* ---------------- After the prayer ---------------- */
  {
    id: "dh-after-istighfar",
    cat: "prayer",
    title: "Astaghfirullah three times, then: O Allah, You are Peace",
    titleAr: "أستغفر الله ثلاثًا ثم: اللهم أنت السلام",
    arabic: "أَسْتَغْفِرُ اللَّهَ (ثَلَاثًا) — اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    en: "I seek Allah's forgiveness (three times) — O Allah, You are Peace and from You comes peace. Blessed are You, Owner of majesty and honour.",
    count: 3,
    countEn: "The istighfar three times, then the words once",
    countAr: "الاستغفار ثلاثًا ثم الذكر مرّة",
    virtue: "This is what the Prophet ﷺ said the moment he finished the obligatory prayer, before anything else.",
    virtueAr: "هذا ما كان يقوله النبي ﷺ إذا انصرف من صلاته المكتوبة، قبل كل شيء.",
    ref: "Sahih Muslim, Book of Mosques and Places of Prayer", refAr: "صحيح مسلم، كتاب المساجد ومواضع الصلاة",
    strength: "Sahih — Narrated by Muslim",
    keys: ["after prayer", "istighfar", "salam", "بعد الصلاة", "الاستغفار", "اللهم أنت السلام"]
  },
  {
    id: "dh-after-33",
    cat: "prayer",
    title: "Thirty-three, thirty-three, thirty-three — and the hundredth",
    titleAr: "ثلاثٌ وثلاثون تسبيحة وتحميدة وتكبيرة وتمام المئة",
    arabic: "سُبْحَانَ اللَّهِ (٣٣) — الْحَمْدُ لِلَّهِ (٣٣) — اللَّهُ أَكْبَرُ (٣٣) — ثُمَّ: لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    en: "Glory be to Allah (33), praise be to Allah (33), Allah is greatest (33) — then, completing the hundred: there is no god but Allah alone, with no partner; His is the dominion and His the praise, and He is able to do all things.",
    count: 100,
    countEn: "After every obligatory prayer",
    countAr: "بعد كل صلاة مكتوبة",
    virtue: "The Prophet ﷺ said whoever does this after every prayer — that is ninety-nine — and completes the hundred with the words of tahlil, his sins are forgiven even if they were like the foam of the sea.",
    virtueAr: "قال النبي ﷺ: من سبّح الله في دُبُر كل صلاة ثلاثًا وثلاثين، وحمد الله ثلاثًا وثلاثين، وكبّر الله ثلاثًا وثلاثين، فتلك تسعٌ وتسعون، وقال تمام المئة: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير — غُفرت خطاياه وإن كانت مثل زَبَد البحر.",
    ref: "Sahih Muslim, Book of Mosques and Places of Prayer; and Sahih al-Bukhari, Book of Adhan, Hadith 843", refAr: "صحيح مسلم، كتاب المساجد ومواضع الصلاة؛ وصحيح البخاري، كتاب الأذان، حديث ٨٤٣",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["after prayer", "33", "tasbih", "بعد الصلاة", "ثلاث وثلاثين", "التسبيح", "تمام المئة"]
  },
  {
    id: "dh-after-la-mania",
    cat: "prayer",
    title: "O Allah, none can withhold what You give",
    titleAr: "اللهم لا مانع لما أعطيت",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    en: "There is no god but Allah alone, with no partner; His is the dominion and His the praise, and He is able to do all things. O Allah, none can withhold what You have given, and none can give what You have withheld, and no wealth or standing avails its owner against You.",
    count: 1,
    countEn: "Once, after every obligatory prayer",
    countAr: "مرّة واحدة بعد كل صلاة مكتوبة",
    virtue: "The Prophet ﷺ used to say this when he finished the prayer and gave the salam.",
    virtueAr: "كان النبي ﷺ يقول هذا إذا فرغ من الصلاة وسلّم.",
    ref: "Sahih Muslim, Book of Mosques and Places of Prayer — narrated by al-Mughirah ibn Shu'bah رضي الله عنه; also Sahih al-Bukhari", refAr: "صحيح مسلم، كتاب المساجد ومواضع الصلاة — عن المغيرة بن شعبة رضي الله عنه، ورواه البخاري",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["after prayer", "provision", "بعد الصلاة", "لا مانع لما أعطيت", "الرزق"]
  },
  {
    id: "dh-after-kursi",
    cat: "prayer",
    title: "Ayat al-Kursi after the prayer — and what its standing actually is",
    titleAr: "آية الكرسي بعد الصلاة — وما درجتها",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ …",
    en: "Allah — there is no god but He, the Ever-Living, the Sustainer of all… (Surah Al-Baqarah 2:255)",
    count: 1,
    countEn: "Once, after each obligatory prayer",
    countAr: "مرّة واحدة بعد كل صلاة مكتوبة",
    virtue: "Reading it after every obligatory prayer is very widely practised, and the report behind it — that nothing stands between the one who reads it and Paradise except death — is narrated by an-Nasa'i and graded authentic by al-Albani. It is NOT in al-Bukhari or Muslim. The site says so rather than letting it be assumed. What is in al-Bukhari is reading it before sleeping.",
    virtueAr: "قراءتها عقب كل صلاة مكتوبة مشهورةٌ جدًّا عند الناس، ومستندها حديثٌ عند النسائي صحّحه الألباني، وفيه أنه لا يمنعه من دخول الجنة إلا أن يموت. وليست في البخاري ولا مسلم، ونُبيّن ذلك ولا نوهم خلافه. وأما الثابت في البخاري فقراءتها عند النوم.",
    ref: "Sunan an-Nasa'i, authenticated by al-Albani — outside the two Sahihs. Before sleeping: Sahih al-Bukhari, Hadith 5010 — Sahih", refAr: "سنن النسائي، صحّحه الألباني — خارج الصحيحين. وقبل النوم: صحيح البخاري، حديث ٥٠١٠ — صحيح",
    strength: "Strong — Narrated by an-Nasa'i, authenticated by al-Albani; not in the two Sahihs",
    keys: ["ayat al kursi", "after prayer", "آية الكرسي", "بعد الصلاة", "درجة الحديث"]
  },

  /* ---------------- Tasbih and tahlil ---------------- */
  {
    id: "dh-kalimatan",
    cat: "tasbih",
    title: "Two words light on the tongue, heavy on the Scale",
    titleAr: "كلمتان خفيفتان على اللسان ثقيلتان في الميزان",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    en: "Glory be to Allah and praise be to Him; glory be to Allah the Most Great.",
    count: 1,
    countEn: "Any time — the Prophet ﷺ named no limit",
    countAr: "في أي وقت — ولم يحدّ النبي ﷺ عددًا",
    virtue: "The Prophet ﷺ said: two words beloved to the Most Merciful, light on the tongue, heavy on the Scale.",
    virtueAr: "قال النبي ﷺ: كلمتان حبيبتان إلى الرحمن، خفيفتان على اللسان، ثقيلتان في الميزان.",
    ref: "Sahih al-Bukhari, Book of Tawhid, Hadith 7563 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tasbih", "scale", "mizan", "التسبيح", "الميزان", "كلمتان"]
  },
  {
    id: "dh-hawqala",
    cat: "tasbih",
    title: "There is no power and no strength except by Allah",
    titleAr: "لا حول ولا قوة إلا بالله",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    en: "There is no power and no strength except by Allah.",
    count: 1,
    countEn: "Any time, and often",
    countAr: "في أي وقت، والإكثار منها مطلوب",
    virtue: "The Prophet ﷺ said to Abu Musa رضي الله عنه: shall I not point you to a word that is a treasure from the treasures of Paradise? — La hawla wa la quwwata illa billah.",
    virtueAr: "قال النبي ﷺ لأبي موسى رضي الله عنه: ألا أدلّك على كلمةٍ هي كنزٌ من كنوز الجنة؟ لا حول ولا قوة إلا بالله.",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6384 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["hawqala", "strength", "treasure", "لا حول ولا قوة", "كنز", "الجنة"]
  },

  /* ---------------- Worry and hardship ---------------- */
  {
    id: "dh-karb",
    cat: "distress",
    title: "What he ﷺ said at a moment of distress",
    titleAr: "دعاء الكرب",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
    en: "There is no god but Allah, the Mighty, the Forbearing. There is no god but Allah, Lord of the Mighty Throne. There is no god but Allah, Lord of the heavens and Lord of the earth and Lord of the noble Throne.",
    count: 1,
    countEn: "Said at the moment of distress",
    countAr: "يُقال عند الكرب",
    virtue: "Ibn Abbas رضي الله عنهما reported that the Prophet ﷺ used to say this at a time of distress. Notice that it is not a request — it is the naming of who Allah is, said by someone in trouble.",
    virtueAr: "روى ابن عباس رضي الله عنهما أن النبي ﷺ كان يقول هذا عند الكرب. وتأمّل أنه ليس سؤالًا، وإنما هو تعظيمٌ لله وذكرٌ لأسمائه يقوله المكروب.",
    ref: "Sahih al-Bukhari, Book of Supplications, Hadith 6346 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["distress", "worry", "anxiety", "hardship", "الكرب", "الهم", "الضيق", "القلق"]
  },
  {
    id: "dh-hasbunallah",
    cat: "distress",
    title: "Allah is enough for us — what Ibrahim said in the fire",
    titleAr: "حسبنا الله ونعم الوكيل",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    en: "Allah is enough for us, and He is the best Disposer of affairs.",
    count: 1,
    countEn: "Said when you are outnumbered or afraid",
    countAr: "يُقال عند الخوف وكثرة العدو",
    virtue: "Ibn Abbas رضي الله عنهما said: Ibrahim عليه السلام said it when he was thrown into the fire, and Muhammad ﷺ said it when the people said to him, \"the people have gathered against you, so fear them\" — and it only increased them in faith.",
    virtueAr: "قال ابن عباس رضي الله عنهما: قالها إبراهيم عليه السلام حين أُلقي في النار، وقالها محمد ﷺ حين قالوا: إنّ الناس قد جمعوا لكم فاخشوهم، فزادهم إيمانًا وقالوا: حسبنا الله ونعم الوكيل.",
    ref: "Sahih al-Bukhari, Book of Tafsir, Hadith 4563; the words are Surah Al-Imran (3:173)", refAr: "صحيح البخاري، كتاب التفسير، حديث ٤٥٦٣؛ واللفظ من سورة آل عمران (٣:١٧٣)",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["fear", "enough", "trust", "tawakkul", "حسبنا الله", "الخوف", "التوكل", "الشدة"]
  },
  {
    id: "dh-dhun-nun",
    cat: "distress",
    title: "The supplication of Yunus عليه السلام",
    titleAr: "دعاء ذي النون",
    arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    en: "There is no god but You. Glory be to You. I was indeed among the wrongdoers.",
    count: 1,
    countEn: "Said in any distress",
    countAr: "يُقال في كل كرب",
    virtue: "These words are in the Quran, spoken by Yunus عليه السلام inside the darkness — Surah Al-Anbiya (21:87), and Allah says after them: \"So We answered him and saved him from the distress; and thus do We save the believers.\" The well-known hadith that no Muslim says them in any matter but that Allah answers him is narrated by at-Tirmidhi and graded authentic by al-Albani — it is NOT in al-Bukhari or Muslim, and this page says so.",
    virtueAr: "هذه الكلمات في القرآن، قالها يونس عليه السلام في الظلمات — سورة الأنبياء (٢١:٨٧)، وقال الله بعدها: «فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ وَكَذَٰلِكَ نُنجِي الْمُؤْمِنِينَ». وأما الحديث المشهور أنه لم يدعُ بها مسلمٌ في شيءٍ قط إلا استجاب الله له فرواه الترمذي وصحّحه الألباني، وليس في البخاري ولا مسلم، ونُبيّن ذلك.",
    ref: "Surah Al-Anbiya (21:87). The hadith on saying it: Jami' at-Tirmidhi, authenticated by al-Albani — outside the two Sahihs", refAr: "سورة الأنبياء (٢١:٨٧). وحديثُ قولها: جامع الترمذي، صحّحه الألباني — خارج الصحيحين",
    strength: "The words themselves are Quran. The hadith recommending them: Strong — Narrated by at-Tirmidhi, authenticated by al-Albani; not in the two Sahihs",
    keys: ["yunus", "dhun nun", "distress", "darkness", "ذو النون", "يونس", "الكرب", "الظلمات"]
  }
];
