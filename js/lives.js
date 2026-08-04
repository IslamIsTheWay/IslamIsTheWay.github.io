/* ============================================================
   FULL LIVES — the whole story, not a summary
   ============================================================
   For each person: who they were before Islam, how they entered it,
   what changed in them, the single thing they are most remembered
   for, and how they died.

   On sources. Where something is in Sahih al-Bukhari or Sahih Muslim
   it is cited with its number and that is the strongest there is.
   Much of a companion's life, however, is recorded in the sira and
   tabaqat literature — Ibn Ishaq as preserved by Ibn Hisham, Ibn Sa'd's
   Tabaqat, adh-Dhahabi's Siyar A'lam an-Nubala — which are historical
   works, not hadith collections held to the same standard. Where a
   detail comes from those, it says so on the entry itself rather than
   being blurred into the rest. A reader is entitled to know exactly how
   firm each thing is.

   `key` matches the id in COMPANIONS or PROPHETS in data.js.
   ============================================================ */
/* ============================================================
   ONE RELIGION, DIFFERENT LAWS
   Shown at the top of the Prophets page. The Quran states both
   halves of this and they are not in tension: the message every
   prophet carried was the same, while the law each was given
   differed. Verses verified in the Quranic text itself.
   ============================================================ */
const ONE_RELIGION = {
  title: "One religion, many paths to fulfilling it",
  titleAr: "دينٌ واحد، وشرائع مختلفة",
  intro: "Every prophet named in the Quran brought the same message — worship Allah alone. What differed between them was the law and the way, not the God they called to. The Quran says both things plainly, and neither cancels the other.",
  introAr: "كل نبيٍّ ذُكر في القرآن جاء بالرسالة نفسها: أن يُعبد الله وحده. وإنما اختلفت بينهم الشرائع والمناهج، لا الإله الذي دعوا إليه. وقد قرّر القرآن الأمرين معًا، ولا يُلغي أحدهما الآخر.",
  points: [
    { en: "Not one messenger was sent before you except that We revealed to him that there is no god but Me, so worship Me. The message never changed.",
      ar: "ما أُرسل رسولٌ قبلك إلا أُوحي إليه أنه لا إله إلا أنا فاعبدون. فالرسالة لم تتغيّر.",
      quran: "وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ",
      ref: "Surah Al-Anbiya (21:25)" },
    { en: "He has ordained for you of religion what He enjoined upon Nuh, and what We revealed to you, and what We enjoined upon Ibrahim and Musa and Isa: that you establish the religion and do not divide in it. Five prophets named in one verse, given one instruction.",
      ar: "شرع لكم من الدين ما وصّى به نوحًا، والذي أوحينا إليك، وما وصّينا به إبراهيم وموسى وعيسى: أن أقيموا الدين ولا تتفرّقوا فيه. خمسة أنبياء في آيةٍ واحدة وأمرٌ واحد.",
      quran: "شَرَعَ لَكُم مِّنَ الدِّينِ مَا وَصَّىٰ بِهِ نُوحًا وَالَّذِي أَوْحَيْنَا إِلَيْكَ وَمَا وَصَّيْنَا بِهِ إِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ ۖ أَنْ أَقِيمُوا الدِّينَ وَلَا تَتَفَرَّقُوا فِيهِ",
      ref: "Surah Ash-Shura (42:13)" },
    { en: "And here is the other half, in the same Quran: to each of you We prescribed a law and a way. Had Allah willed He would have made you one community, but He tests you in what He has given you — so race one another in good.",
      ar: "وهذا هو الشقّ الآخر في القرآن نفسه: لكلٍّ جعلنا منكم شِرعةً ومنهاجًا، ولو شاء الله لجعلكم أمةً واحدة، ولكن ليبلوكم في ما آتاكم، فاستبقوا الخيرات.",
      quran: "لِكُلٍّ جَعَلْنَا مِنكُمْ شِرْعَةً وَمِنْهَاجًا ۚ وَلَوْ شَاءَ اللَّهُ لَجَعَلَكُمْ أُمَّةً وَاحِدَةً وَلَٰكِن لِّيَبْلُوَكُمْ فِي مَا آتَاكُمْ ۖ فَاسْتَبِقُوا الْخَيْرَاتِ",
      ref: "Surah Al-Ma'idah (5:48)" },
    { en: "So the prophets are not rivals and are not separate religions. The Prophet ﷺ said the prophets are brothers of one father with different mothers, and their religion is one.",
      ar: "فليس الأنبياء متنافسين ولا أديانًا شتّى؛ قال النبي ﷺ: الأنبياء إخوةٌ لِعَلَّات، أمهاتهم شتى ودينهم واحد.",
      quran: "الْأَنْبِيَاءُ إِخْوَةٌ لِعَلَّاتٍ، أُمَّهَاتُهُمْ شَتَّى وَدِينُهُمْ وَاحِدٌ",
      ref: "Sahih al-Bukhari, Book of the Prophets, Hadith 3443 — Sahih, agreed upon" }
  ],

  /* The strongest evidence for the point is that the prophets say it about
     themselves. Each of these is the prophet's own words in the Quran,
     using the word "muslim" — one who submits. Every verse below was
     located in the Quranic text before being written. */
  declarationsTitle: "Each of them called himself a Muslim — in his own words",
  declarationsTitleAr: "وكلٌّ منهم سمّى نفسه مسلمًا — بلفظه هو",
  declarationsIntro: "The word 'Muslim' in the Quran means one who submits to Allah. Read what each prophet says about himself, and the point stops being an argument and becomes a quotation.",
  declarationsIntroAr: "و«المسلم» في القرآن هو المستسلم المنقاد لله. فاقرأ ما قاله كلُّ نبيٍّ عن نفسه، فتتحوّل المسألة من استدلالٍ إلى نقل.",
  declarations: [
    { who: "Ibrahim — when his Lord said to him: submit", whoAr: "إبراهيم — إذ قال له ربّه: أسلِم",
      en: "His Lord said to him: submit. He said: I have submitted to the Lord of the worlds.",
      ar: "قال له ربّه: أسلِم. قال: أسلمتُ لربّ العالمين.",
      quran: "إِذْ قَالَ لَهُ رَبُّهُ أَسْلِمْ ۖ قَالَ أَسْلَمْتُ لِرَبِّ الْعَالَمِينَ",
      ref: "Surah Al-Baqarah (2:131)" },
    { who: "Ibrahim and Ismail — raising the Kaaba", whoAr: "إبراهيم وإسماعيل — عند رفع القواعد",
      en: "Our Lord, make us both submitters to You, and from our descendants a nation submitting to You.",
      ar: "ربنا واجعلنا مسلمَين لك، ومن ذريّتنا أمّةً مسلمةً لك.",
      quran: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ",
      ref: "Surah Al-Baqarah (2:128)" },
    { who: "Yaqub's sons — at his deathbed", whoAr: "بنو يعقوب — عند موته",
      en: "He asked them: what will you worship after me? They said: we will worship your God and the God of your fathers Ibrahim, Ismail and Ishaq — one God — and we are Muslims to Him.",
      ar: "قال لبنيه: ما تعبدون من بعدي؟ قالوا: نعبد إلهك وإله آبائك إبراهيم وإسماعيل وإسحاق إلهًا واحدًا ونحن له مسلمون.",
      quran: "قَالُوا نَعْبُدُ إِلَٰهَكَ وَإِلَٰهَ آبَائِكَ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ إِلَٰهًا وَاحِدًا وَنَحْنُ لَهُ مُسْلِمُونَ",
      ref: "Surah Al-Baqarah (2:133)" },
    { who: "Nuh", whoAr: "نوح",
      en: "I have been commanded to be of the Muslims.",
      ar: "وأُمرتُ أن أكون من المسلمين.",
      quran: "وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُسْلِمِينَ",
      ref: "Surah Yunus (10:72)" },
    { who: "Musa — to his people", whoAr: "موسى — لقومه",
      en: "O my people, if you have believed in Allah then rely upon Him, if you are Muslims.",
      ar: "يا قومِ إن كنتم آمنتم بالله فعليه توكّلوا إن كنتم مسلمين.",
      quran: "وَقَالَ مُوسَىٰ يَا قَوْمِ إِن كُنتُمْ آمَنتُم بِاللَّهِ فَعَلَيْهِ تَوَكَّلُوا إِن كُنتُم مُّسْلِمِينَ",
      ref: "Surah Yunus (10:84)" },
    { who: "Yusuf — his final supplication", whoAr: "يوسف — في آخر دعائه",
      en: "You are my protector in this world and the Hereafter. Take my soul as a Muslim, and join me with the righteous.",
      ar: "أنت وليّي في الدنيا والآخرة، توفَّني مسلمًا وألحقني بالصالحين.",
      quran: "أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
      ref: "Surah Yusuf (12:101)" },
    { who: "Sulaiman — in his letter", whoAr: "سليمان — في كتابه",
      en: "Do not be haughty with me, and come to me in submission — as Muslims.",
      ar: "ألّا تعلوا عليَّ وأتوني مسلمين.",
      quran: "أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ",
      ref: "Surah An-Naml (27:31)" },
    { who: "The Queen of Sheba — her answer", whoAr: "ملكة سبأ — جوابها",
      en: "My Lord, I have wronged myself, and I submit with Sulaiman to Allah, Lord of the worlds.",
      ar: "ربِّ إني ظلمتُ نفسي وأسلمتُ مع سليمان لله ربّ العالمين.",
      quran: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ",
      ref: "Surah An-Naml (27:44)" },
    { who: "The disciples of Isa", whoAr: "حواريّو عيسى",
      en: "We are the helpers of Allah. We have believed in Allah, and bear witness that we are Muslims.",
      ar: "نحن أنصار الله، آمنّا بالله واشهد بأنّا مسلمون.",
      quran: "قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ آمَنَّا بِاللَّهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ",
      ref: "Surah Ali 'Imran (3:52)" },
    { who: "The household of Lut", whoAr: "بيت لوط",
      en: "We did not find in it other than a single house of Muslims.",
      ar: "فما وجدنا فيها غير بيتٍ من المسلمين.",
      quran: "فَمَا وَجَدْنَا فِيهَا غَيْرَ بَيْتٍ مِّنَ الْمُسْلِمِينَ",
      ref: "Surah Adh-Dhariyat (51:36)" },
    { who: "And the name itself goes back to Ibrahim", whoAr: "والاسم نفسه يرجع إلى إبراهيم",
      en: "It is the religion of your father Ibrahim. He named you Muslims before, and in this.",
      ar: "ملّة أبيكم إبراهيم، هو سمّاكم المسلمين من قبلُ وفي هذا.",
      quran: "مِّلَّةَ أَبِيكُمْ إِبْرَاهِيمَ ۚ هُوَ سَمَّاكُمُ الْمُسْلِمِينَ مِن قَبْلُ وَفِي هَٰذَا",
      ref: "Surah Al-Hajj (22:78)" }
  ]
};

const FULL_LIVES = {

  "nuh": {
    before: "He was sent to a people who had begun worshipping idols with names the Quran records — Wadd, Suwa', Yaghuth, Ya'uq and Nasr — the first idolatry after the way of Adam.",
    beforeAr: "بُعث إلى قومٍ ابتدعوا عبادة الأصنام، وسمّى القرآن أصنامهم: وَدًّا وسُواعًا ويَغوثَ ويعوقَ ونَسرًا، وهي أول شركٍ بعد ملّة آدم.",
    islam: "His message was the message of every prophet: worship Allah, you have no god besides Him.",
    islamAr: "ورسالته هي رسالة كل نبي: اعبدوا الله ما لكم من إلهٍ غيره.",
    change: "He called them night and day, in secret and openly, for nine hundred and fifty years — a figure the Quran gives exactly. He describes his own effort: every time he called them so they might be forgiven, they put their fingers in their ears and covered themselves.",
    changeAr: "دعاهم ليلًا ونهارًا، سرًّا وجهارًا، ألف سنةٍ إلا خمسين عامًا — وهو عددٌ ذكره القرآن بعينه. ووصف اجتهاده: كلما دعاهم ليغفر لهم جعلوا أصابعهم في آذانهم واستغشوا ثيابهم.",
    greatest: "Endurance without result. Only a few believed with him. He built the ark on dry land while his people mocked him, and his own son refused to board and drowned.",
    greatestAr: "الصبر بلا ثمرةٍ ظاهرة؛ فما آمن معه إلا قليل. وصنع الفلك في البرّ وقومه يسخرون، وأبى ابنه أن يركب فكان من المُغرَقين.",
    death: "The Quran does not narrate his death. What it records is that he was saved with those who believed, and that peace was sent upon him among the worlds.",
    deathAr: "لم يذكر القرآن وفاته، وإنما ذكر نجاته ومن آمن معه، وأنه سلامٌ عليه في العالمين.",
    sources: [
      "950 years: Surah Al-Ankabut (29:14) — Quran",
      "The names of the idols: Surah Nuh (71:23) — Quran",
      "Calling night and day, fingers in ears: Surah Nuh (71:5-7) — Quran",
      "His son: Surah Hud (11:42-43) — Quran"
    ],
    message: "Worship Allah alone — the same call, to the first people who turned away from it.",
    messageAr: "عبادة الله وحده — الدعوة نفسها، إلى أول من أعرض عنها."
  },

  "ibrahim": {
    before: "He grew up among a people who worshipped idols and heavenly bodies, and his own father made and sold them.",
    beforeAr: "نشأ في قومٍ يعبدون الأصنام والكواكب، وكان أبوه يصنعها ويبيعها.",
    islam: "The Quran shows him reasoning his way to the truth in public — looking at a star, the moon, the sun, each time saying 'this is my Lord' and then, as each set, refusing what sets. Then he turned his face to the One who created the heavens and the earth.",
    islamAr: "عرض القرآن محاجّته أمام قومه: نظر إلى الكوكب ثم القمر ثم الشمس، يقول في كلٍّ: هذا ربي، فإذا أفل قال: لا أحبّ الآفلين. ثم وجّه وجهه للذي فطر السماوات والأرض.",
    change: "He broke the idols of his people and left the largest one, telling them to ask it who did it — forcing them to admit aloud that it could not speak. They threw him into the fire and Allah made it cool and safe for him.",
    changeAr: "كسّر أصنام قومه وترك كبيرها وقال: فاسألوهم إن كانوا ينطقون، فألزمهم الإقرار بأنها لا تنطق. فألقوه في النار فجعلها الله بردًا وسلامًا عليه.",
    greatest: "He was commanded in a dream to sacrifice his son, and both father and son submitted. The son said: do what you are commanded, you will find me patient. It was ransomed with a great sacrifice. He also raised the foundations of the Kaaba with his son Ismail, praying that it be accepted from them.",
    greatestAr: "أُمر في المنام بذبح ابنه فأسلما، وقال الابن: يا أبتِ افعل ما تُؤمر، ستجدني إن شاء الله من الصابرين، ففُدي بذبحٍ عظيم. ورفع مع ابنه إسماعيل القواعد من البيت يدعوان: ربنا تقبّل منّا.",
    death: "The Quran calls him a nation in himself, obedient to Allah, upright, and not of those who associate partners; and Allah took him as an intimate friend — khalil.",
    deathAr: "وصفه القرآن بأنه كان أمّةً قانتًا لله حنيفًا ولم يكُ من المشركين، واتّخذه الله خليلًا.",
    sources: [
      "The star, moon and sun: Surah Al-An'am (6:76-79) — Quran",
      "Breaking the idols and the fire: Surah Al-Anbiya (21:57-69) — Quran",
      "The sacrifice: Surah As-Saffat (37:102-107) — Quran",
      "Raising the Kaaba: Surah Al-Baqarah (2:127) — Quran",
      "Taken as khalil: Surah An-Nisa (4:125) — Quran"
    ],
    message: "Pure monotheism, reasoned and defended in public, and submission even when the command is the hardest imaginable.",
    messageAr: "التوحيد الخالص مُحاجًّا به علانية، والتسليم ولو كان الأمر أشقّ ما يكون."
  },

  "musa": {
    before: "Born under a decree that the sons of the Israelites be killed. His mother was inspired to place him in the river, and he was taken up by the household of Pharaoh — raised in the house of the man who had ordered the killing.",
    beforeAr: "وُلد في زمن أمرٍ بذبح أبناء بني إسرائيل، فأُوحي إلى أمه أن تُلقيه في اليمّ، فالتقطه آل فرعون — فتربّى في بيت الذي أمر بالقتل.",
    islam: "He struck a man in defence of another and the man died; he left in fear and lived years in Madyan tending sheep. Returning, he saw a fire on the mountain and was spoken to directly by Allah.",
    islamAr: "وكز رجلًا نصرةً لآخر فقضى عليه، فخرج خائفًا وأقام سنين بمدين يرعى الغنم. ثم آنس في الطور نارًا، فكلّمه الله تكليمًا.",
    change: "He was sent back to the very palace he had fled, to the most powerful man of his age — and was told to speak to him gently. He asked for his brother Harun to help him because of a difficulty in his speech, and it was granted.",
    changeAr: "أُرسل إلى القصر الذي فرّ منه، إلى أعتى أهل زمانه، وأُمر أن يقول له قولًا ليّنًا. وسأل أن يُشدّ أزره بأخيه هارون لعُقدةٍ في لسانه فأُوتي سؤله.",
    greatest: "The staff and the sea. When the Israelites were caught between Pharaoh's army and the water and said they were overtaken, he answered: never — my Lord is with me, He will guide me. Then the sea parted.",
    greatestAr: "العصا والبحر؛ لمّا تراءى الجمعان وقال بنو إسرائيل: إنّا لمُدرَكون، قال: كلّا، إنّ معي ربي سيهدين. فانفلق البحر.",
    death: "The Quran does not narrate his death in detail. He is the prophet spoken to directly by Allah, and the one who asked to see Him and was told: you will not see Me.",
    deathAr: "لم يفصّل القرآن وفاته. وهو كليم الله، والذي سأل الرؤية فقيل له: لن تراني.",
    sources: [
      "His mother and the river: Surah Al-Qasas (28:7) — Quran",
      "Speaking gently to Pharaoh: Surah Ta-Ha (20:44) — Quran",
      "Harun and his speech: Surah Ta-Ha (20:25-36) — Quran",
      "'My Lord is with me': Surah Ash-Shu'ara (26:61-63) — Quran",
      "Spoken to directly: Surah An-Nisa (4:164); asking to see Him: Surah Al-A'raf (7:143) — Quran"
    ],
    message: "The same tawhid, carried to a tyrant who claimed lordship — and a law given to a nation.",
    messageAr: "التوحيد نفسه يُحمل إلى طاغيةٍ ادّعى الربوبية، وشريعةٌ تُعطى لأمّة."
  },

  "isa": {
    before: "Born to Maryam without a father, by the word of Allah — the Quran states that his likeness with Allah is as the likeness of Adam, created from dust and told 'Be', and he was.",
    beforeAr: "وُلد لمريم من غير أبٍ بكلمة الله؛ وقرّر القرآن أن مثله عند الله كمثل آدم، خلقه من ترابٍ ثم قال له كن فيكون.",
    islam: "He spoke in the cradle, and his first recorded words are a declaration: I am the servant of Allah; He gave me the Scripture and made me a prophet.",
    islamAr: "تكلّم في المهد، وأول ما نُقل عنه إعلانٌ: إني عبد الله آتاني الكتاب وجعلني نبيًّا.",
    change: "He was given clear signs — healing the blind and the leper, and giving life to the dead by the permission of Allah. The Quran repeats that phrase every time: by the permission of Allah.",
    changeAr: "أُوتي البيّنات: يُبرئ الأكمه والأبرص ويُحيي الموتى بإذن الله. ويُكرّر القرآن هذا القيد في كل مرة: بإذن الله.",
    greatest: "He confirmed the Torah before him and gave glad tidings of a messenger to come after him named Ahmad. And when asked on the Day of Judgement whether he told people to take him and his mother as gods, he answers that he only said what he was commanded: worship Allah, my Lord and your Lord.",
    greatestAr: "صدّق ما بين يديه من التوراة وبشّر برسولٍ يأتي من بعده اسمه أحمد. وإذا سُئل يوم القيامة: أأنت قلت للناس اتّخذوني وأمي إلهين؟ يقول: ما قلتُ لهم إلا ما أمرتني به: أن اعبدوا الله ربي وربكم.",
    death: "They did not kill him and did not crucify him, but it was made to appear so to them; Allah raised him to Himself.",
    deathAr: "وما قتلوه وما صلبوه ولكن شُبِّه لهم، بل رفعه الله إليه.",
    sources: [
      "Like Adam: Surah Ali 'Imran (3:59) — Quran",
      "Speaking in the cradle: Surah Maryam (19:30) — Quran",
      "The signs, by Allah's permission: Surah Ali 'Imran (3:49) — Quran",
      "Glad tidings of Ahmad: Surah As-Saff (61:6) — Quran",
      "His answer on the Day of Judgement: Surah Al-Ma'idah (5:116-117) — Quran",
      "Not killed, not crucified: Surah An-Nisa (4:157-158) — Quran"
    ],
    message: "The same call — worship Allah, my Lord and your Lord — and a warning against raising a prophet above his rank.",
    messageAr: "الدعوة نفسها: اعبدوا الله ربي وربكم، وتحذيرٌ من رفع النبي فوق منزلته."
  },

  "abu-bakr": {
    before: "A cloth merchant of Makkah, wealthy and widely liked. He was a genealogist of the Arabs — he knew the lineages of the tribes better than almost anyone — which made him a man whose word carried weight in a society built on lineage. He never drank alcohol in the days of ignorance, and never worshipped an idol.",
    beforeAr: "كان تاجر بَزٍّ من تجّار مكة، ذا مالٍ ومحبّةٍ في قومه، وكان أعلم الناس بأنساب العرب، وذلك مما رفع قدره في مجتمعٍ يقوم على النسب. ولم يشرب خمرًا في الجاهلية قط، ولم يسجد لصنم.",
    islam: "He believed the moment he was asked, without argument. When the Prophet ﷺ told the people of the Night Journey and Makkah mocked it, they came to Abu Bakr expecting him to break. He said: if he said it, he told the truth — and from that came his name, As-Siddiq.",
    islamAr: "آمن حين دُعي دون جدال. ولما أخبر النبي ﷺ بالإسراء وكذّبته قريش جاؤوا إلى أبي بكر يظنون أنه سيرتاب، فقال: إن كان قال ذلك فقد صدق. ومن هنا كان لقبه: الصدّيق.",
    change: "He spent his wealth buying and freeing tortured slaves — Bilal among them — until the money that had made him a notable in Makkah was gone. His father said he was freeing the weak; better to free strong men who would defend him. He answered that he wanted only what is with Allah.",
    changeAr: "أنفق ماله في عتق المستضعفين المعذَّبين، ومنهم بلال، حتى ذهب المال الذي كان به وجيهًا في مكة. فقال له أبوه: لو أعتقتَ رجالًا أشدّاء يمنعونك! فقال: إنما أريد ما عند الله.",
    greatest: "The cave. On the migration, hidden in Thawr with the search party overhead, he whispered that if one of them looked down he would see them — and the Prophet ﷺ answered: \"What do you think of two, when Allah is the third of them?\" Later, when the Prophet ﷺ died and even Omar could not accept it, it was Abu Bakr who stood before the people and said: whoever worshipped Muhammad, Muhammad has died; whoever worships Allah, Allah is alive and never dies.",
    greatestAr: "الغار. في الهجرة، وهما مختبئان في ثَور والطلب فوق رؤوسهما، قال: لو أن أحدهم نظر تحت قدميه لأبصرنا، فقال النبي ﷺ: «ما ظنُّك باثنين اللهُ ثالثهما؟». ثم لمّا تُوفي النبي ﷺ ولم يحتمل عمر الخبر، قام أبو بكر في الناس فقال: من كان يعبد محمدًا فإن محمدًا قد مات، ومن كان يعبد الله فإن الله حيٌّ لا يموت.",
    death: "He was caliph for about two years and three months. He died in Madinah and was buried beside the Prophet ﷺ. He left instructions that what he had taken from the public treasury be returned from his own property.",
    deathAr: "وَلِيَ الخلافة نحو سنتين وثلاثة أشهر، ثم تُوفي بالمدينة ودُفن إلى جوار النبي ﷺ. وأوصى أن يُردَّ ما أخذه من بيت المال من خاصّ ماله.",
    sources: [
      "The cave: Sahih al-Bukhari, Book of the Companions, Hadith 3653 — Sahih",
      "His speech at the Prophet's death: Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4454 — Sahih",
      "Freeing Bilal and the details of his trade and lineage: Ibn Ishaq (in Ibn Hisham's Sira) and Ibn Sa'd, Tabaqat — historical sira, not hadith"
    ]
  },

  "umar": {
    before: "A powerful, hot-tempered young man of Banu Adi, known for physical strength and for representing Quraysh as an envoy. He was among the fiercest enemies of the Muslims and beat those who accepted Islam, including a slave girl he owned.",
    beforeAr: "شابٌّ قويٌّ شديدٌ من بني عديّ، عُرف بالقوة وبأنه كان سفير قريش. وكان من أشدّ الناس على المسلمين، يضرب من أسلم، حتى جاريةً كانت له.",
    islam: "He set out with his sword to kill the Prophet ﷺ. On the way he was told his own sister had accepted Islam. He went to her house, struck her, and then saw blood on her face and fell silent. He asked for the page she was reading — it was Surah Ta-Ha — and after reading it he went straight to the Prophet ﷺ and accepted Islam. The Muslims prayed openly at the Kaaba for the first time after that.",
    islamAr: "خرج متقلّدًا سيفه يريد قتل النبي ﷺ، فقيل له: إن أختك قد أسلمت. فأتى بيتها فضربها، فلما رأى الدم على وجهها سكت، وطلب الصحيفة التي كانت تقرؤها — وكانت سورة طه — فلما قرأها انطلق إلى النبي ﷺ فأسلم. وصلّى المسلمون عند الكعبة ظاهرين بعد إسلامه.",
    change: "The same hardness became a shield for the weak. As caliph he walked the streets of Madinah at night, and the accounts of him carrying flour on his own back to a hungry family are among the most repeated things told of him.",
    changeAr: "تحوّلت تلك الشدّة نفسها حمايةً للضعفاء. فلما وَلِيَ الخلافة كان يعُسّ بالمدينة ليلًا، وأخباره في حمل الدقيق على ظهره إلى أهل بيتٍ جياع من أشهر ما رُوي عنه.",
    greatest: "The Prophet ﷺ said of him something said of no other companion: Sa'd ibn Abi Waqqas reported him saying, when Omar sought permission to enter and the women hurried to cover themselves — \"By Him in whose hand is my soul, Shaytan never meets you on a path but that he takes a path other than yours.\" His caliphate saw the conquests of Persia, Syria and Egypt, and the establishment of the Hijri calendar and the office of the judge.",
    greatestAr: "قال فيه النبي ﷺ ما لم يقله في غيره؛ روى سعد بن أبي وقّاص أنه لمّا استأذن عمر وبادر النساء إلى الحجاب قال ﷺ: «والذي نفسي بيده ما لَقِيَكَ الشيطان سالكًا فجًّا قطُّ إلا سلك فجًّا غير فجّك». وفي خلافته فُتحت فارس والشام ومصر، ووُضع التاريخ الهجري ونُظِّم القضاء.",
    death: "He was stabbed while leading the Fajr prayer by Abu Lu'lu'ah, a Persian slave, and died of the wounds. He asked Aishah رضي الله عنها for permission to be buried beside the Prophet ﷺ and Abu Bakr, and she gave it.",
    deathAr: "طُعن وهو يصلي الفجر إمامًا على يد أبي لؤلؤة المجوسي، فمات من جراحه. وكان قد استأذن عائشة رضي الله عنها أن يُدفن إلى جوار النبي ﷺ وأبي بكر فأذنت له.",
    sources: [
      "Shaytan taking another path: Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3294 — Sahih, agreed upon",
      "His acceptance of Islam and the account of his sister: Ibn Ishaq (in Ibn Hisham) and Ibn Sa'd, Tabaqat — historical sira",
      "His assassination and burial request: Sahih al-Bukhari, Book of the Companions, Hadith 3700 — Sahih"
    ]
  },

  "khadijah": {
    before: "A merchant of Makkah in her own right, of noble descent, who hired men to trade her caravans and was known as at-Tahirah, the pure one. She was twice widowed and had refused proposals from the leading men of Quraysh.",
    beforeAr: "كانت تاجرةً في مكة بمالها، شريفة النسب، تستأجر الرجال في تجارتها، وكانت تُدعى الطاهرة. تزوّجت قبله مرّتين ورُدَّ عنها أشراف قريش.",
    islam: "She employed Muhammad ﷺ before prophethood for his honesty, and it was she who proposed marriage. She was the first human being to believe in him — before any man, woman or child.",
    islamAr: "استأجرت محمدًا ﷺ قبل البعثة لأمانته، وهي التي عرضت عليه الزواج. وكانت أول من آمن به من الخلق جميعًا، قبل رجلٍ أو امرأةٍ أو صبيّ.",
    change: "She spent her entire fortune supporting him and the Muslims, and died with almost nothing after the boycott of Banu Hashim in the valley.",
    changeAr: "أنفقت مالها كلّه في نصرته ونصرة المسلمين، وماتت ولم يبقَ لها شيءٌ يُذكر بعد حصار بني هاشم في الشِّعب.",
    greatest: "When he came down from Hira shaking and said \"cover me\", and said he feared for himself, she did not doubt him for a moment. She answered: \"Never. By Allah, Allah will never disgrace you. You keep good relations with your kin, you carry the burden of the weak, you give to the destitute, you honour the guest, and you help those struck by calamity.\" The Prophet ﷺ later said Khadijah is the best of the women of this nation.",
    greatestAr: "لمّا نزل من حراء يرجُف فؤاده يقول: «زمِّلوني»، وقال: «لقد خشيتُ على نفسي»، لم تشكّ فيه لحظة، بل قالت: كلَّا واللهِ ما يُخزيك اللهُ أبدًا؛ إنك لتصِل الرحم، وتحمل الكَلّ، وتُكسِب المعدوم، وتقري الضيف، وتُعين على نوائب الحقّ. وقال ﷺ بعدُ: خديجة خير نساء هذه الأمة.",
    death: "She died in Makkah three years before the migration, in the year the Prophet ﷺ also lost his uncle Abu Talib — the year remembered as the Year of Sorrow. He continued to speak of her and to send gifts to her friends for the rest of his life, and Aishah رضي الله عنها said she was never jealous of any woman as she was of Khadijah, though she never met her.",
    deathAr: "تُوفيت بمكة قبل الهجرة بثلاث سنين، في العام الذي فقد فيه النبي ﷺ عمّه أبا طالب، وهو العام الذي سُمّي عام الحزن. وظلّ يذكرها ويصل صواحبها بقيّة عمره، وقالت عائشة رضي الله عنها: ما غِرتُ على امرأةٍ ما غِرتُ على خديجة، وما رأيتها قط.",
    sources: [
      "The first revelation and her answer: Sahih al-Bukhari, Book of Revelation, Hadith 3 — Sahih",
      "Best of the women of this nation: Sahih al-Bukhari, Book of the Prophets, Hadith 3432 — Sahih",
      "Aishah's words about her: Sahih al-Bukhari, Book of the Companions, Hadith 3816 — Sahih",
      "Her trade, her titles and the Year of Sorrow: Ibn Ishaq and Ibn Sa'd — historical sira"
    ]
  },

  "bilal": {
    before: "An Abyssinian slave in Makkah, owned by Umayyah ibn Khalaf. He had no protection of tribe or wealth — the two things that kept a man safe in that society.",
    beforeAr: "عبدٌ حبشيٌّ بمكة، مملوكٌ لأميّة بن خلف، لا عشيرة تحميه ولا مالٌ يمنعه، وهما ما كان يُعتصم بهما في ذلك المجتمع.",
    islam: "He accepted Islam early, and was dragged out into the heat of the desert with a rock on his chest to make him renounce it. He answered with one word, repeated: ahad, ahad — One, One.",
    islamAr: "أسلم مبكرًا، فكان يُخرَج إلى رمضاء مكة وتُوضع الصخرة على صدره ليرجع عن دينه، فما يزيد على كلمةٍ واحدة يردّدها: أحدٌ أحد.",
    change: "Abu Bakr bought him and set him free. From a man whose life was worth nothing he became the one whose voice called the whole city to prayer.",
    changeAr: "اشتراه أبو بكر فأعتقه، فصار من رجلٍ لا تُساوي حياته شيئًا إلى صاحب الصوت الذي يدعو المدينة كلّها إلى الصلاة.",
    greatest: "At Fajr the Prophet ﷺ said to him: \"Tell me the deed you did with most hope after entering Islam, for I heard the sound of your sandals ahead of me in Paradise.\" Bilal could think of nothing except that he never made wudu, by day or night, without praying with it whatever was written for him.",
    greatestAr: "قال له النبي ﷺ عند الفجر: «حدِّثني بأرجى عملٍ عملته في الإسلام، فإني سمعتُ دفَّ نعليك بين يديَّ في الجنة». فما وجد بلالٌ عملًا يذكره إلا أنه لم يتطهَّر طُهورًا في ساعةٍ من ليلٍ أو نهارٍ إلا صلّى بذلك الطُّهور ما كُتب له.",
    death: "He is reported to have left Madinah after the Prophet's death, unable to give the adhan there without him, and to have died in Syria.",
    deathAr: "ذُكر أنه خرج من المدينة بعد وفاة النبي ﷺ إذ لم يُطق الأذان بها بعده، وأنه تُوفي بالشام.",
    sources: [
      "His footsteps in Paradise: Sahih al-Bukhari, Book of Tahajjud, Hadith 1149 — Sahih",
      "His torture and 'ahad, ahad', and his death in Syria: Ibn Ishaq and Ibn Sa'd — historical sira, not in the two Sahihs"
    ]
  },

  "saad-ibn-muadh": {
    before: "A chief of the Aws in Yathrib, obeyed by his tribe, and thirty-one years old when he first heard of Islam.",
    beforeAr: "سيّد الأوس بيثرب، مُطاعٌ في قومه، وكان ابن إحدى وثلاثين سنة حين سمع بالإسلام.",
    islam: "Mus'ab ibn Umayr had been sent to Yathrib to teach. Sa'd came to him angry, spear in hand, to drive him out. Mus'ab said: sit and listen; if you like it, accept it, and if you hate it, we will leave you alone. He sat, listened, and accepted Islam — then went to his own people and said: your speech with your men and your women is forbidden to me until you believe. By evening there was not a household of Banu Abd al-Ashhal without a Muslim man and woman in it.",
    islamAr: "كان مصعب بن عمير قد بُعث إلى يثرب معلِّمًا، فأتاه سعدٌ مغضبًا شاهرًا رمحه ليُخرجه، فقال مصعب: اجلس فاسمع، فإن رضيتَ أمرًا قبلتَه، وإن كرهتَه كُفَّ عنك ما تكره. فجلس وسمع فأسلم، ثم أتى قومه فقال: كلام رجالكم ونسائكم عليَّ حرامٌ حتى تؤمنوا. فما أمسى في بني عبد الأشهل رجلٌ ولا امرأة إلا مسلمًا.",
    change: "He entered Islam at thirty-one and lived about six years after it. In that short time his tribe followed him into Islam entirely, and he became one of the chiefs of the Ansar at Badr and Uhud and the Trench.",
    changeAr: "أسلم وهو ابن إحدى وثلاثين، وعاش بعد إسلامه نحو ست سنين، أسلمت في تلك المدّة القصيرة قبيلته كلّها على يديه، وصار من سادات الأنصار في بدرٍ وأحدٍ والخندق.",
    greatest: "At Badr, when the Prophet ﷺ consulted the people before the fighting, Sa'd spoke for the Ansar and told him that if he crossed the sea they would cross it with him. He was struck in the arm by an arrow at the Trench and the wound did not heal.",
    greatestAr: "في بدرٍ لمّا استشار النبيُّ ﷺ الناس قبل القتال تكلّم سعدٌ عن الأنصار وقال له: لو خُضتَ بنا هذا البحر لخُضناه معك. وأُصيب في أكحله بسهمٍ يوم الخندق فلم يبرأ الجرح.",
    death: "He died of that wound. Jabir رضي الله عنه heard the Prophet ﷺ say: \"The Throne of the Most Merciful shook at the death of Sa'd ibn Mu'adh.\" That is in al-Bukhari. The often-repeated detail that seventy thousand angels attended his funeral is NOT in al-Bukhari or Muslim — it appears in other collections, and this site will not present it as though it were.",
    deathAr: "مات من ذلك الجرح، وسمع جابرٌ رضي الله عنه النبي ﷺ يقول: «اهتزّ عرش الرحمن لموت سعد بن معاذ»، وهذا في البخاري. وأما ما يُتداول من أن سبعين ألفًا من الملائكة شهدوا جنازته فليس في البخاري ولا مسلم، وإنما جاء في غيرهما، ولا نُقدّمه هنا على أنه منهما.",
    sources: [
      "The Throne shaking at his death: Sahih al-Bukhari, Book of the Merits of the Ansar, Hadith 3803 — Sahih, and also in Muslim",
      "His acceptance of Islam through Mus'ab, his words at Badr, his age: Ibn Ishaq (in Ibn Hisham) and Ibn Sa'd, Tabaqat — historical sira",
      "The seventy thousand angels: reported outside the two Sahihs; stated here as such and not relied upon"
    ]
  },

  "musab": {
    before: "The most pampered young man in Makkah. His mother was wealthy and dressed him in the finest clothes; it was said the scent of his perfume stayed in a street after he had walked down it.",
    beforeAr: "كان أنعم فتى بمكة، أمّه ذات مال، تكسوه أحسن الثياب، حتى قيل إن أثر طيبه يبقى في الطريق بعد مروره.",
    islam: "He accepted Islam secretly and prayed in hiding. When his mother learned of it she confined him, and he eventually left with the migration to Abyssinia. He came back in a coarse patched garment, and those who saw him wept at the change.",
    islamAr: "أسلم سرًّا وكان يصلي مستخفيًا، فلما علمت أمّه حبسته، ثم خرج في هجرة الحبشة. وعاد وعليه بُردةٌ مرقّعة، فبكى من رآه لِما صار إليه.",
    change: "From the best-dressed man in Makkah to a man in patched cloth. The Prophet ﷺ sent him to Yathrib as the first teacher of Islam there, and through him the chiefs of the Aws and Khazraj entered Islam before the migration.",
    changeAr: "من أحسن أهل مكة لباسًا إلى رجلٍ في ثوبٍ مرقّع. وبعثه النبي ﷺ إلى يثرب أوّل معلِّمٍ للإسلام بها، فأسلم على يديه سادات الأوس والخزرج قبل الهجرة.",
    greatest: "He was the first ambassador of Islam. Sa'd ibn Mu'adh and Usayd ibn Hudayr — and with them their whole tribes — entered Islam through his teaching, which is why Madinah was ready to receive the Prophet ﷺ when he arrived.",
    greatestAr: "كان أوّل سفيرٍ في الإسلام؛ أسلم على يديه سعد بن معاذ وأُسيد بن حُضير ومعهما قبائلهما، ولذلك كانت المدينة مهيّأةً لاستقبال النبي ﷺ حين قدمها.",
    death: "He was martyred at Uhud carrying the banner. Khabbab رضي الله عنه said: we migrated with the Messenger of Allah ﷺ seeking Allah's countenance; some of us died without having taken any of their reward in this world — among them Mus'ab ibn Umayr, killed at Uhud, and he left nothing but a cloak. When they covered his head with it his feet showed, and when they covered his feet his head showed, so the Prophet ﷺ told them to cover his head with it and put grass over his feet.",
    deathAr: "استُشهد يوم أُحد وهو يحمل اللواء. قال خبّاب رضي الله عنه: هاجرنا مع رسول الله ﷺ نبتغي وجه الله، فمنّا من مضى لم يأكل من أجره شيئًا، منهم مصعب بن عمير قُتل يوم أُحد، ولم يترك إلا نَمِرة، فكنّا إذا غطّينا بها رأسه بدت رجلاه، وإذا غطّينا رجليه بدا رأسه، فأمرنا النبي ﷺ أن نُغطّي رأسه ونجعل على رجليه من الإذخر.",
    sources: [
      "His death and the cloak: Sahih al-Bukhari, Book of the Merits of the Ansar, Hadith 3914 — Sahih",
      "His life in Makkah, his mother, and his mission to Yathrib: Ibn Ishaq (in Ibn Hisham) and Ibn Sa'd — historical sira"
    ]
  },

  "ali": {
    before: "A boy in the household of the Prophet ﷺ. Abu Talib, his father, had many dependents and a hard year, so the Prophet ﷺ took Ali into his own home and raised him.",
    beforeAr: "غلامٌ في بيت النبي ﷺ؛ كان أبوه أبو طالب كثير العيال أصابته سنةٌ شديدة، فضمّه النبي ﷺ إلى بيته وربّاه.",
    islam: "He was the first child to accept Islam, at around ten years of age.",
    islamAr: "كان أوّل من أسلم من الصبيان، وهو ابن نحو عشر سنين.",
    change: "On the night of the migration he slept in the Prophet's bed while the assassins waited outside, so that they would think the Prophet ﷺ was still in the house — and stayed behind to return the trusts people had left with the Prophet ﷺ to their owners.",
    changeAr: "نام ليلة الهجرة في فراش النبي ﷺ والقوم يرصدون البيت، ليظنّوا أنه فيه، ثم تخلَّف بعده ليؤدّي الأمانات التي كانت عند النبي ﷺ إلى أهلها.",
    greatest: "At Khaybar the Prophet ﷺ said he would give the banner tomorrow to a man who loves Allah and His Messenger and whom Allah and His Messenger love. The people spent the night wondering which of them it would be. In the morning he called for Ali, who was suffering from an eye complaint; he applied his saliva to his eyes and the pain went, and gave him the banner.",
    greatestAr: "يوم خيبر قال النبي ﷺ: لأُعطينّ الراية غدًا رجلًا يحبّ الله ورسوله ويحبّه الله ورسوله. فبات الناس يدوكون أيّهم يُعطاها، فلمّا أصبح دعا عليًّا وكان يشتكي عينيه، فبصق في عينيه فبرأ، ودفع إليه الراية.",
    death: "He was struck while going out to the Fajr prayer in Kufa and died of the wound, in the fortieth year after the migration.",
    deathAr: "ضُرب وهو خارجٌ إلى صلاة الفجر بالكوفة فمات من ضربته، سنة أربعين للهجرة.",
    sources: [
      "The banner at Khaybar: Sahih al-Bukhari, Book of Jihad, Hadith 2975 — Sahih, agreed upon",
      "Sleeping in the Prophet's bed and returning the trusts: Ibn Ishaq (in Ibn Hisham) — historical sira",
      "His assassination in Kufa: recorded in the histories of at-Tabari and Ibn Sa'd — historical"
    ]
  },

  "aisha": {
    before: "The daughter of Abu Bakr, born into Islam — she said she never knew her parents except practising the religion.",
    beforeAr: "ابنة أبي بكر، وُلدت في الإسلام، وقالت: لم أعقِل أبويَّ قطُّ إلا وهما يدينان الدين.",
    islam: "She was raised in it from the beginning, in the household closest to the Prophet ﷺ.",
    islamAr: "نشأت عليه منذ صغرها، في البيت الأقرب إلى النبي ﷺ.",
    change: "She became the most learned of the women of this nation, and one of the most relied upon narrators of hadith. The companions came to her with questions after the Prophet's death, and much of what is known about his private life, his worship at home and his manner with his family comes through her.",
    changeAr: "صارت أعلم نساء هذه الأمة، ومن أكثر من رُوي عنه الحديث، وكان الصحابة يسألونها بعد وفاة النبي ﷺ، وأكثر ما يُعرف من سيرته في بيته وعبادته وخلقه مع أهله إنما جاء من طريقها.",
    greatest: "The Prophet ﷺ said that many men reached perfection but among women only Asiyah the wife of Pharaoh and Maryam the daughter of Imran — and that the superiority of Aishah over other women is like the superiority of tharid over other food. When she was slandered, her innocence was declared in the Quran itself, in Surah An-Nur.",
    greatestAr: "قال النبي ﷺ: كمَل من الرجال كثير، ولم يكمُل من النساء إلا آسية امرأة فرعون ومريم ابنة عمران، وإن فضل عائشة على النساء كفضل الثريد على سائر الطعام. ولمّا رُميت بالإفك نزلت براءتها في القرآن في سورة النور.",
    death: "She died in Madinah and was buried in al-Baqi'.",
    deathAr: "تُوفيت بالمدينة ودُفنت بالبقيع.",
    sources: [
      "The superiority of tharid: Sahih al-Bukhari, Book of the Prophets, Hadith 3411 — Sahih, agreed upon",
      "The declaration of her innocence: Surah An-Nur (24:11-20), and Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4141 — Sahih",
      "Her death and burial: Ibn Sa'd, Tabaqat — historical"
    ]
  },

  "hamza": {
    before: "The uncle of the Prophet ﷺ and close to him in age, known in Makkah as a hunter and a man of great physical strength.",
    beforeAr: "عمّ النبي ﷺ وقريبٌ منه في السنّ، عُرف بمكة بالصيد وبشدّة البأس.",
    islam: "He came back from hunting to be told that Abu Jahl had insulted his nephew. He went to the Kaaba, struck Abu Jahl with his bow, and declared himself a Muslim — at first out of tribal anger, and then, as he said, the matter settled in his heart.",
    islamAr: "رجع من صيده فأُخبر أن أبا جهلٍ نال من ابن أخيه، فأتى الكعبة فضرب أبا جهلٍ بقوسه وأعلن إسلامه — بدأها حميّةً، ثم وقر الإيمان في قلبه كما قال.",
    change: "His acceptance of Islam gave the Muslims of Makkah a protection they had not had, because Quraysh knew what it meant to have Hamza against them.",
    changeAr: "كان إسلامه عزًّا للمسلمين بمكة، إذ عرفت قريش ما يعني أن يكون حمزة في صفّ من تُؤذيهم.",
    greatest: "He fought at Badr and at Uhud, and the Prophet ﷺ called him the lion of Allah and of His Messenger.",
    greatestAr: "شهد بدرًا وأُحدًا، وسمّاه النبي ﷺ أسد الله وأسد رسوله.",
    death: "He was killed at Uhud by Wahshi, who was promised his freedom for it. The Prophet ﷺ was deeply grieved at the sight of him. Later Wahshi accepted Islam and the Prophet ﷺ accepted him, but asked him to keep his face away, because he could not look at him without remembering Hamza.",
    deathAr: "قُتل يوم أُحد على يد وحشيّ الذي وُعد بالعتق على قتله، فحزن النبي ﷺ عليه حزنًا شديدًا حين رآه. ثم أسلم وحشيّ فقبل النبي ﷺ إسلامه، وقال له: غيِّب عني وجهك، لأنه كان لا يراه إلا ذكر حمزة.",
    sources: [
      "The killing of Hamza and Wahshi's account and later Islam: Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4072 — Sahih",
      "His acceptance of Islam after Abu Jahl's insult, and the title 'lion of Allah': Ibn Ishaq (in Ibn Hisham) — historical sira"
    ]
  },

  "abu-hurairah": {
    before: "A poor man of the tribe of Daws in Yemen, who came to Madinah with nothing. He was called Abu Hurairah — father of the kitten — because of a small cat he used to carry.",
    beforeAr: "رجلٌ فقيرٌ من دوسٍ باليمن، قدم المدينة ولا شيء معه، وكُنّي أبا هريرة لهرّةٍ صغيرة كان يحملها.",
    islam: "He accepted Islam around the year of Khaybar, in the last years of the Prophet's life — which makes what he preserved all the more remarkable.",
    islamAr: "أسلم عام خيبر في أواخر حياة النبي ﷺ، وهو ما يجعل ما حفظه أعجب.",
    change: "He attached himself to the Prophet ﷺ, living in the Suffah — the shelter at the mosque for those with no home — accepting hunger in order to be present for everything the Prophet ﷺ said. He said plainly that the Muhajirun were busy with their trade and the Ansar with their land, and he stayed on an empty stomach and was present.",
    changeAr: "لزم النبي ﷺ وسكن الصُّفَّة — مأوى من لا مسكن له في المسجد — وصبر على الجوع ليشهد كل ما يقوله النبي ﷺ. وقال صريحًا: إن إخواني من المهاجرين كان يشغلهم الصفق بالأسواق، والأنصار يشغلهم عملُ أموالهم، وكنتُ ألزم رسول الله ﷺ على مِلءِ بطني.",
    greatest: "He narrated more hadith than any other companion. He said he had complained to the Prophet ﷺ of forgetting, and was told to spread out his cloak; the Prophet ﷺ made a gesture into it and told him to gather it to his chest — and he said he never forgot anything after that.",
    greatestAr: "روى من الحديث أكثر من أيّ صحابي. وذكر أنه شكا إلى النبي ﷺ النسيان، فأمره أن يبسط رداءه، فغرف بيديه فيه ثم قال: ضُمَّه، فضمّه إلى صدره، قال: فما نسيتُ شيئًا بعده.",
    death: "He died in Madinah in the later years of the first century and was buried in al-Baqi'.",
    deathAr: "تُوفي بالمدينة في أواخر القرن الأول ودُفن بالبقيع.",
    sources: [
      "Staying with the Prophet on an empty stomach, and the cloak and forgetting: Sahih al-Bukhari, Book of Knowledge, Hadith 118 and 119 — Sahih",
      "His name, his tribe and his death: Ibn Sa'd, Tabaqat — historical"
    ]
  },

  "salman": {
    before: "A Persian from a village near Isfahan, the son of a Zoroastrian landowner who kept him at home tending the sacred fire. He left it for Christianity, served a succession of monks, and the last of them told him a prophet was about to be sent in a land of palm trees between two lava fields.",
    beforeAr: "فارسيٌّ من قريةٍ قرب أصبهان، ابن دهقانٍ مجوسيّ كان يحبسه في البيت على النار يوقدها. فترك ذلك إلى النصرانية وخدم عالمًا بعد عالم، وأخبره آخرهم بأن نبيًّا قد أظلّ زمانه يُبعث في أرضٍ ذات نخلٍ بين حَرَّتين.",
    islam: "He set out to find him and was betrayed on the way and sold as a slave, ending up in Yathrib. When the Prophet ﷺ arrived there Salman tested him against the signs he had been told: he would accept a gift but not charity, and between his shoulders was the seal of prophethood. He found all of it and accepted Islam.",
    islamAr: "خرج يطلبه فغُدر به في الطريق وبِيع رقيقًا حتى وقع بيثرب. فلما قدم النبي ﷺ اختبره سلمان بما وُصف له: أنه يأكل الهديّة ولا يأكل الصدقة، وأن بين كتفيه خاتم النبوة، فوجد ذلك كلّه فأسلم.",
    change: "He was still a slave when the Muslims were fighting at Badr and Uhud — his enslavement kept him from both. The Prophet ﷺ told him to make a contract for his freedom, and the Muslims helped him pay it.",
    changeAr: "كان لا يزال رقيقًا حين كان المسلمون في بدرٍ وأُحد، فحال رقّه بينه وبينهما، فأمره النبي ﷺ أن يكاتب سيّده على حرّيته، وأعانه المسلمون على أدائها.",
    greatest: "At the Trench, when Madinah was about to be besieged by a force it could not meet in open battle, it was Salman who proposed digging a trench across the exposed side — a Persian tactic the Arabs did not use. The city held.",
    greatestAr: "يوم الخندق، لمّا أحاطت بالمدينة قوّةٌ لا تُواجَه في العراء، أشار سلمان بحفر خندقٍ في الجهة المكشوفة، وهي حيلةٌ فارسية لم تكن العرب تصنعها، فامتنعت المدينة.",
    death: "He died in al-Mada'in in Iraq during the caliphate of Osman رضي الله عنه.",
    deathAr: "تُوفي بالمدائن بالعراق في خلافة عثمان رضي الله عنه.",
    sources: [
      "His long account of his own search, in his own words: Musnad Ahmad, and Ibn Ishaq (in Ibn Hisham) — historical sira, reported at length from Salman himself",
      "The digging of the Trench: Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4101 — Sahih for the events of the Trench; the attribution of the idea to Salman is from the sira"
    ]
  },

  "khalid": {
    before: "One of the finest cavalry commanders of Quraysh. It was Khalid who led the horsemen that turned the battle of Uhud against the Muslims, when the archers left their position.",
    beforeAr: "من أمهر فرسان قريش وقادتها. وهو الذي قاد الخيل التي حوّلت أُحدًا على المسلمين حين ترك الرُّماة مواقعهم.",
    islam: "He accepted Islam before the conquest of Makkah, coming to Madinah of his own accord. The Prophet ﷺ received him and said he had known that a man of his intelligence would not remain outside it.",
    islamAr: "أسلم قبل فتح مكة وقدم المدينة من تلقاء نفسه، فاستقبله النبي ﷺ وقال: قد كنتُ أرى لك عقلًا رجوتُ ألّا يُسلمك إلا إلى خير.",
    change: "The same skill that had almost destroyed the Muslims at Uhud was now on their side.",
    changeAr: "فصارت البراعة نفسها التي كادت تُهلك المسلمين في أُحد في صفّهم.",
    greatest: "At Mu'tah, after three commanders were killed in turn, Khalid took the banner and brought the army out. The Prophet ﷺ announced the deaths of the three from Madinah on the day it happened, and said the banner was then taken by a sword from among the swords of Allah, and Allah gave them victory. He was later given command in the conquests of Iraq and Syria.",
    greatestAr: "في مؤتة، بعد أن قُتل الأمراء الثلاثة واحدًا بعد واحد، أخذ خالدٌ الراية فانحاز بالجيش. وقد نعى النبي ﷺ الثلاثة بالمدينة يوم قُتلوا وقال: ثم أخذ الراية سيفٌ من سيوف الله ففتح الله عليهم. ثم كانت له القيادة في فتوح العراق والشام.",
    death: "He died in his bed, and it is reported that he said there was not a hand's span on his body without a wound from a sword or an arrow, and yet he died on his bed as a camel dies.",
    deathAr: "مات على فراشه، ورُوي أنه قال: ما في جسدي موضع شبرٍ إلا وفيه ضربةٌ بسيفٍ أو رميةٌ بسهم، وها أنا أموت على فراشي كما يموت البعير.",
    sources: [
      "Mu'tah and 'a sword from among the swords of Allah': Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4262 — Sahih",
      "His command at Uhud: Sahih al-Bukhari, Book of the Military Expeditions — Sahih",
      "His acceptance of Islam, and his words at his death: Ibn Ishaq and Ibn Sa'd — historical sira"
    ]
  },

  "adam": {
    before: "There was no before. He is the beginning of us — created by Allah with His own hand, taught the names of all things, and honoured with the prostration of the angels. Iblis alone refused, out of pride, and was cast out.",
    beforeAr: "لم يكن قبله شيءٌ من أمرنا؛ فهو البداية — خلقه الله بيده، وعلّمه الأسماء كلّها، وأكرمه بسجود الملائكة. وأبى إبليس وحده استكبارًا فطُرد.",
    message: "That a human being is honoured by his Lord, and that the honour is not in never falling but in what he does after the fall.",
    messageAr: "أن الإنسان مُكرَّمٌ عند ربّه، وأن الكرامة ليست في ألّا يزلّ، بل فيما يصنع بعد الزلّة.",
    islam: "He was placed in the Garden with his wife and given one prohibition: do not approach this tree. Shaytan whispered until they ate from it, and their nakedness became apparent to them.",
    islamAr: "أُسكن الجنة هو وزوجه ونُهي عن شجرةٍ واحدة: ولا تقربا هذه الشجرة. فوسوس لهما الشيطان حتى أكلا منها، فبدت لهما سوءاتهما.",
    change: "What separates him from Iblis is not the sin — it is the answer to it. Iblis argued and blamed Allah; Adam said: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy on us we will be among the losers. He received words from his Lord, and Allah turned to him.",
    changeAr: "والذي فرّق بينه وبين إبليس ليس الذنب، بل ما بعده. فإبليس جادل وألقى اللوم على ربّه، وأما آدم فقال: ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكوننّ من الخاسرين. فتلقّى من ربّه كلماتٍ فتاب عليه.",
    greatest: "The Prophet ﷺ described Musa and Adam disputing, and Adam answered him with the decree: do you blame me for something Allah decreed upon me forty years before He created me? The Prophet ﷺ said: so Adam got the better of Musa, three times.",
    greatestAr: "ذكر النبي ﷺ محاجّة موسى وآدم، فاحتجّ آدم بالقدر: أتلومني على أمرٍ قدّره الله عليّ قبل أن يخلقني بأربعين سنة؟ قال النبي ﷺ: فحجّ آدمُ موسى، ثلاثًا.",
    death: "He is the father of mankind, and on the night of the Isra the Prophet ﷺ found him in the lowest heaven, with the souls of his children on his right and his left — laughing towards the people of Paradise, weeping towards the people of the Fire.",
    deathAr: "هو أبو البشر، وقد وجده النبي ﷺ ليلة الإسراء في السماء الدنيا وعن يمينه وشماله نَسَم بنيه — يضحك إلى أهل الجنة ويبكي على أهل النار.",
    sources: [
      "Created and taught the names, the angels prostrating: Surah Al-Baqarah (2:30-34) — Quran",
      "The tree and the whisper: Surah Al-A'raf (7:19-22) — Quran",
      "His repentance, and the words he received: Surah Al-A'raf (7:23) and Surah Al-Baqarah (2:37) — Quran",
      "Adam and Musa disputing: Sahih al-Bukhari, Hadith 6614 — Sahih, agreed upon",
      "Seen in the lowest heaven: Sahih al-Bukhari, Book of Prayer, Hadith 349 — Sahih"
    ]
  },

  "idris": {
    before: "The Quran says very little about him, and this entry says only what the Quran says. He is named twice, both times in praise, and nothing of his people or his times is established.",
    beforeAr: "لم يذكر القرآن عنه إلا القليل، ولا نذكر هنا إلا ما ذكره. سُمّي مرتين، وفي الموضعين ثناءٌ عليه، ولم يثبت شيءٌ عن قومه ولا عن زمانه.",
    message: "The message of every prophet before and after him: worship Allah alone.",
    messageAr: "رسالة كل نبيٍّ قبله وبعده: عبادة الله وحده.",
    islam: "Allah calls him a man of truth, a prophet — siddiq, nabiy — and that is the whole of what is said of his character in the Quran.",
    islamAr: "وصفه الله بأنه صدّيقٌ نبيّ، وهذا جملة ما وُصف به في القرآن.",
    change: "And We raised him to a high station. The scholars of tafsir differ over what the raising means, and the Quran does not settle it, so neither does this page.",
    changeAr: "ورفعناه مكانًا عليًّا. واختلف المفسّرون في معنى الرفع، ولم يفصل القرآن فيه، فلا نفصل فيه هنا.",
    greatest: "He is listed among those on whom Allah bestowed favour, of the offspring of Adam and of those carried with Nuh, of whom it is said: when the verses of the Most Merciful were recited to them, they fell down prostrate and weeping.",
    greatestAr: "ذُكر في المُنعَم عليهم من ذرية آدم وممن حملنا مع نوح، الذين قال الله فيهم: إذا تُتلى عليهم آيات الرحمن خرّوا سُجّدًا وبُكيًّا.",
    death: "Nothing about his death is established in the Quran or the two Sahihs. The account of him being seen in the fourth heaven on the night of the Mi'raj IS established. Everything else told about him — his trade, his writing, his age — comes from historical and Israiliyyat material, not from revelation, and is not repeated here as fact.",
    deathAr: "لم يثبت شيءٌ عن وفاته في القرآن ولا في الصحيحين. وأما لقاؤه في السماء الرابعة ليلة المعراج فثابت. وسائر ما يُذكر عنه — من صناعته وكتابته وعمره — فمن كتب التاريخ والإسرائيليات لا من الوحي، ولا نُعيده هنا على أنه ثابت.",
    sources: [
      "A man of truth, a prophet; raised to a high station: Surah Maryam (19:56-57) — Quran",
      "Among the patient and the righteous: Surah Al-Anbiya (21:85-86) — Quran",
      "Met in the fourth heaven: Sahih al-Bukhari, Book of Prayer, Hadith 349 — Sahih",
      "His trade and his age: historical and Israiliyyat accounts — NOT established, and not relied on here"
    ]
  },

  "hud": {
    before: "He was sent to 'Ad, a people the Quran describes as given a strength no other people had been given, who built landmarks on every high place and took for themselves fortresses as though they would live forever.",
    beforeAr: "بُعث إلى عادٍ، وقد وصفهم القرآن بقوّةٍ لم تُعطَ لغيرهم، يبنون بكلّ ريعٍ آيةً، ويتّخذون مصانع لعلّهم يخلدون.",
    message: "O my people, worship Allah — you have no god other than Him. Will you not fear Him?",
    messageAr: "يا قوم اعبدوا الله ما لكم من إلهٍ غيره، أفلا تتّقون؟",
    islam: "He was one of them, not a stranger. He asked them for no wage: my reward is only upon the One who created me.",
    islamAr: "كان منهم لا غريبًا عنهم، ولم يسألهم أجرًا: إن أجري إلا على الذي فطرني.",
    change: "They answered him with the sentence that ends every such argument: we see you in foolishness, and we think you are a liar. And they said: who is greater than us in strength? He told them their strength was the gift of the One they were denying.",
    changeAr: "فأجابوه بما يُختم به كل جدال: إنّا لنراك في سفاهةٍ وإنّا لنظنّك من الكاذبين. وقالوا: من أشدّ منّا قوة؟ فذكّرهم أن قوّتهم من الذي يجحدونه.",
    greatest: "Standing alone against a people who could not be resisted, and telling them so: I call Allah to witness, and bear witness yourselves, that I am free of what you associate with Him. Plot against me all together and give me no respite.",
    greatestAr: "وقوفه وحده أمام قومٍ لا يُقاومون، وقوله لهم: إني أُشهد الله واشهدوا أني بريءٌ مما تُشركون من دونه، فكيدوني جميعًا ثم لا تُنظرون.",
    death: "Their end came as a wind: a barren wind that left nothing it came upon without reducing it to ruin — seven nights and eight days without break, so that in the morning nothing could be seen but their dwellings. Hud and those who believed with him were saved by a mercy from Allah.",
    deathAr: "وكان هلاكهم بالريح: ريحًا صرصرًا عاتية، سخّرها عليهم سبع ليالٍ وثمانية أيامٍ حُسومًا، فأصبحوا لا يُرى إلا مساكنهم. ونجّى الله هودًا والذين آمنوا معه برحمةٍ منه.",
    sources: [
      "'Ad and their buildings: Surah Ash-Shu'ara (26:123-140) — Quran",
      "Who is greater than us in strength: Surah Fussilat (41:15) — Quran",
      "I am free of what you associate: Surah Hud (11:54-56) — Quran",
      "The wind, seven nights and eight days: Surah Al-Haqqah (69:6-8) and Surah Al-Ahqaf (46:24-25) — Quran"
    ]
  },

  "salih": {
    before: "He was sent to Thamud, who carved their homes out of the mountains and felt secure in them. Like 'Ad before them, they had been given ease, and it made them certain of themselves.",
    beforeAr: "بُعث إلى ثمود، وكانوا ينحتون من الجبال بيوتًا ويأمنون فيها. وقد أُوتوا من السَّعة مثل ما أُوتيت عادٌ قبلهم، فاغترّوا بأنفسهم.",
    message: "O my people, worship Allah — you have no god other than Him. He produced you from the earth and settled you in it, so ask His forgiveness and turn to Him.",
    messageAr: "يا قوم اعبدوا الله ما لكم من إلهٍ غيره، هو أنشأكم من الأرض واستعمركم فيها، فاستغفروه ثم توبوا إليه.",
    islam: "Before he called them, he had been the one among them they had hoped for: they said, O Salih, you were among us one in whom hope was placed before this.",
    islamAr: "وقد كان قبل دعوته مرجوًّا فيهم، قالوا: يا صالح قد كنتَ فينا مرجوًّا قبل هذا.",
    change: "They asked for a sign, and were given the she-camel — with one condition: leave her to eat in the earth of Allah, do not touch her with harm, and the water is shared, a drink for her and a drink for you, each on its known day. The test was not the camel. It was whether they could leave one thing alone.",
    changeAr: "طلبوا آيةً فأُعطوا الناقة، وشُرط عليهم: ذروها تأكل في أرض الله ولا تمسّوها بسوء، والماء قسمةٌ بينهم، لها شِربٌ ولهم شِرب يومٍ معلوم. ولم يكن الاختبار في الناقة، بل في أن يتركوا شيئًا واحدًا وشأنه.",
    greatest: "They hamstrung her, and then said to him: bring us what you promise us, if you are of the messengers. He gave them three days. On the third the cry took them, and they lay dead in their homes.",
    greatestAr: "فعقروها ثم قالوا له: ائتنا بما تعدنا إن كنتَ من المرسلين. فأمهلهم ثلاثة أيام، فلما كان اليوم الثالث أخذتهم الصيحة فأصبحوا في ديارهم جاثمين.",
    death: "Salih and those who believed with him were saved. Centuries later, passing their ruined dwellings at al-Hijr on the way to Tabuk, the Prophet ﷺ told his companions not to enter the place of those who wronged themselves except weeping, lest what struck them strike you — and he covered his head and hurried his mount through the valley.",
    deathAr: "ونجّى الله صالحًا والذين آمنوا معه. وبعد قرون، لما مرّ النبي ﷺ بديارهم بالحِجر في طريقه إلى تبوك قال لأصحابه: لا تدخلوا مساكن الذين ظلموا أنفسهم إلا أن تكونوا باكين، أن يصيبكم مثل ما أصابهم. ثم قنّع رأسه وأسرع السير حتى جاوز الوادي.",
    sources: [
      "Carving homes in the mountains: Surah Al-A'raf (7:74) and Surah Al-Hijr (15:82) — Quran",
      "You were one in whom hope was placed: Surah Hud (11:62) — Quran",
      "The she-camel and the shared water: Surah Ash-Shu'ara (26:155-156) and Surah Al-Qamar (54:28) — Quran",
      "Three days, then the cry: Surah Hud (11:65-67) — Quran",
      "At al-Hijr on the way to Tabuk: Sahih al-Bukhari, Book of the Stories of the Prophets, Hadith 3380 — Sahih, agreed upon"
    ]
  },

  "lut": {
    before: "He was the nephew of Ibrahim عليه السلام and believed in him — the Quran records it plainly: so Lut believed in him. He left with him, and was later sent to the people of Sodom.",
    beforeAr: "كان ابن أخي إبراهيم عليه السلام وآمن به، وقد نصّ القرآن على ذلك: فآمن له لوط. وهاجر معه، ثم أُرسل إلى أهل سدوم.",
    message: "Will you not fear Allah? I am to you a trustworthy messenger — and he named the thing they did that no one in the worlds had done before them.",
    messageAr: "ألا تتّقون؟ إني لكم رسولٌ أمين — وسمّى لهم الفعل الذي ما سبقهم به من أحدٍ من العالمين.",
    islam: "He called them for years and not one of his people followed him. The Quran is exact about how few believed: We brought out whoever was in it of the believers, and We did not find in it except one house of Muslims.",
    islamAr: "دعاهم سنين فلم يتّبعه من قومه أحد. وقد بيّن القرآن قلّة من آمن: فأخرجنا من كان فيها من المؤمنين، فما وجدنا فيها غير بيتٍ من المسلمين.",
    change: "Their answer was to threaten to drive him out: expel them from your city, they are people who keep themselves pure. And he said the sentence of a man with no one behind him: if only I had against you some power, or could take shelter in a strong support.",
    changeAr: "وكان جوابهم أن هدّدوه بالإخراج: أخرجوهم من قريتكم إنهم أُناسٌ يتطهّرون. فقال كلمة رجلٍ لا سند له: لو أنّ لي بكم قوةً أو آوي إلى ركنٍ شديد.",
    greatest: "The night the angels came to him as guests and his people came running to the door. He stood between them and his guests and offered them anything else, and they refused — and then the angels told him who they were, and to leave by night with his family and not to look back.",
    greatestAr: "ليلة جاءه الملائكة أضيافًا وجاءه قومه يُهرعون إلى الباب، فوقف بينهم وبين ضيفه وعرض عليهم غير ذلك فأبَوا — ثم أخبره الملائكة من هم، وأمروه أن يسري بأهله بقطعٍ من الليل ولا يلتفت.",
    death: "The town was overturned and stones of baked clay rained upon them. His wife was not saved — she was of those who stayed behind, and the Quran uses her elsewhere as the example that closeness to a righteous man saves nobody by itself.",
    deathAr: "فجُعل عاليها سافلها وأُمطروا حجارةً من سِجّيل. ولم تنجُ امرأته، بل كانت من الغابرين. وقد ضرب الله بها المثل في موضعٍ آخر على أن القرب من الصالح لا يُنجي بنفسه.",
    sources: [
      "So Lut believed in him: Surah Al-Ankabut (29:26) — Quran",
      "Not one house but his: Surah Adh-Dhariyat (51:35-36) — Quran",
      "If only I had against you some power: Surah Hud (11:80) — Quran",
      "The night of the guests and the order to leave: Surah Hud (11:77-81) — Quran",
      "His wife as an example: Surah At-Tahrim (66:10) — Quran"
    ]
  },

  "ismail": {
    before: "He was the first son of Ibrahim عليه السلام, born to Hajar after a long wait. While still a nursing child he was left with his mother in a barren valley with no cultivation, beside the Sacred House.",
    beforeAr: "هو ابن إبراهيم عليه السلام الأول، وُلد لهاجر بعد طول انتظار. وتُرك رضيعًا مع أمّه بوادٍ غير ذي زرعٍ عند البيت الحرام.",
    message: "He was a messenger and a prophet, and the Quran singles out one quality above the rest: he was true to his promise.",
    messageAr: "كان رسولًا نبيًّا، وخصّه القرآن بصفةٍ قبل غيرها: إنه كان صادق الوعد.",
    islam: "His mother asked Ibrahim as he walked away whether Allah had commanded this. He said yes. She said: then He will not abandon us. She ran between Safa and Marwah looking for water, and Zamzam came up at the child's feet. Muslims repeat her running to this day.",
    islamAr: "سألت أمّه إبراهيم وهو ينصرف: آللهُ أمرك بهذا؟ قال: نعم. قالت: إذًا لا يُضيّعنا. ثم سعت بين الصفا والمروة تطلب الماء، فانبجست زمزم عند قدمي الغلام. ولا يزال المسلمون يسعون سعيها إلى اليوم.",
    change: "When he was old enough to work alongside his father, Ibrahim told him he had seen in a dream that he was slaughtering him, and asked what he thought. His answer is why he is remembered: O my father, do as you are commanded — you will find me, if Allah wills, of the patient.",
    changeAr: "فلمّا بلغ معه السعي قال له إبراهيم: إني أرى في المنام أني أذبحك فانظر ماذا ترى. فكان جوابه هو الذي خُلّد به: يا أبتِ افعل ما تُؤمر، ستجدني إن شاء الله من الصابرين.",
    greatest: "He was ransomed with a great sacrifice, and he and his father raised the foundations of the House together, saying as they built: our Lord, accept from us — You are the Hearing, the Knowing.",
    greatestAr: "ففُدي بذبحٍ عظيم، ثم رفع مع أبيه القواعد من البيت، وهما يقولان وهما يبنيان: ربنا تقبّل منا إنك أنت السميع العليم.",
    death: "From his line came the Arabs, and from them the Prophet Muhammad ﷺ. The Prophet ﷺ said of the tribe of Ismail while they were competing in archery: shoot, sons of Ismail — your father was an archer.",
    deathAr: "ومن ذريته العرب، ومنهم النبي محمد ﷺ. وقال النبي ﷺ لبني إسماعيل وهم ينتضلون: ارموا بني إسماعيل، فإن أباكم كان راميًا.",
    sources: [
      "Left in a valley with no cultivation: Surah Ibrahim (14:37) — Quran",
      "Hajar, the running, and Zamzam: Sahih al-Bukhari, Book of the Stories of the Prophets, Hadith 3364 — Sahih",
      "The dream and his answer: Surah As-Saffat (37:102) — Quran",
      "Ransomed with a great sacrifice: Surah As-Saffat (37:107) — Quran",
      "Raising the foundations: Surah Al-Baqarah (2:127) — Quran",
      "True to his promise: Surah Maryam (19:54) — Quran",
      "Your father was an archer: Sahih al-Bukhari, Hadith 3373 — Sahih"
    ]
  },

  "ishaq": {
    before: "He was the son given to Ibrahim عليه السلام in old age, and to Sarah after she had despaired of children. The angels who were on their way to the people of Lut brought the news.",
    beforeAr: "هو الابن الذي وُهب لإبراهيم عليه السلام على الكِبَر، ولسارة بعد أن يئست من الولد. وجاءت البشارة به على أيدي الملائكة في طريقهم إلى قوم لوط.",
    message: "A prophet from among the righteous — and the promise that his line would carry prophethood after him.",
    messageAr: "نبيًّا من الصالحين — ومعه البشارة بأن النبوّة تكون في ذريته من بعده.",
    islam: "His mother laughed when she heard, and said: shall I give birth when I am an old woman and this husband of mine is an old man? This is a strange thing. And they answered: are you amazed at the decree of Allah?",
    islamAr: "ضحكت أمّه حين سمعت وقالت: أألد وأنا عجوزٌ وهذا بعلي شيخًا؟ إنّ هذا لشيءٌ عجيب. فقالوا: أتعجبين من أمر الله؟",
    change: "The Quran pairs him with his brother as a single mercy: praise be to Allah, who granted me, despite old age, Ismail and Ishaq. Indeed my Lord is the Hearer of supplication.",
    changeAr: "وجمع القرآن بينه وبين أخيه في نعمةٍ واحدة: الحمد لله الذي وهب لي على الكبر إسماعيل وإسحاق، إنّ ربي لسميع الدعاء.",
    greatest: "That the promise about him was made before he existed. He was named, and his son Yaqub named after him, while he was still only news brought to a woman who laughed.",
    greatestAr: "أن البشارة به سبقت وجوده؛ فسُمّي وسُمّي من بعده يعقوب، وهو بعدُ خبرٌ يُبشَّر به امرأةٌ ضحكت.",
    death: "The Quran describes him and Yaqub as given understanding and made leaders guiding by Allah's command, and inspired to do good, establish prayer and give zakat — and it says they were worshippers of Us.",
    deathAr: "وصفه القرآن هو ويعقوب بأنهما وُهبا الفهم وجُعلا أئمةً يهدون بأمر الله، وأُوحي إليهما فعل الخيرات وإقام الصلاة وإيتاء الزكاة، وقال: وكانوا لنا عابدين.",
    sources: [
      "The news brought by the angels: Surah Hud (11:69-73) — Quran",
      "Sarah's laughter and reply: Surah Hud (11:72-73) — Quran",
      "Granted me despite old age: Surah Ibrahim (14:39) — Quran",
      "Made leaders guiding by Our command: Surah Al-Anbiya (21:72-73) — Quran"
    ]
  },

  "yaqub": {
    before: "He is Israel — the son of Ishaq and grandson of Ibrahim عليهم السلام, and the father of the twelve from whom the tribes came.",
    beforeAr: "هو إسرائيل — ابن إسحاق وحفيد إبراهيم عليهم السلام، وأبو الاثني عشر الذين كانت منهم الأسباط.",
    message: "The same one his fathers carried, and he made his sons say it at his deathbed: we worship your God and the God of your fathers, one God, and we are Muslims to Him.",
    messageAr: "الرسالة نفسها التي حملها آباؤه، وقد استحلف بنيه عليها عند موته: نعبد إلهك وإله آبائك إلهًا واحدًا ونحن له مسلمون.",
    islam: "He knew what Yusuf's dream meant the moment he heard it, and told him not to relate it to his brothers lest they plot against him.",
    islamAr: "عرف معنى رؤيا يوسف حين سمعها، وقال له: لا تقصص رؤياك على إخوتك فيكيدوا لك كيدًا.",
    change: "He lost Yusuf, and then lost Binyamin, and went blind from grief — and never once complained to anyone but Allah: I only complain of my anguish and my grief to Allah. His patience is named in the Quran by its own word: beautiful patience.",
    changeAr: "فقد يوسف ثم فقد بنيامين وابيضّت عيناه من الحزن — ولم يشكُ إلى أحدٍ قطّ إلا إلى الله: إنما أشكو بثّي وحزني إلى الله. وسمّى القرآن صبره باسمه: فصبرٌ جميل.",
    greatest: "Holding on to hope when there was no reason left for it: O my sons, go and seek news of Yusuf and his brother, and do not despair of the mercy of Allah — none despairs of the mercy of Allah except the disbelieving people. And he had said, years before, when everyone had given up: perhaps Allah will bring them all to me.",
    greatestAr: "تمسّكه بالرجاء حين لم يبقَ ما يدعو إليه: يا بنيّ اذهبوا فتحسّسوا من يوسف وأخيه ولا تيأسوا من رَوح الله، إنه لا ييأس من رَوح الله إلا القوم الكافرون. وقد قال قبل ذلك بسنين وقد يئس الناس: عسى الله أن يأتيني بهم جميعًا.",
    death: "He lived to see the dream fulfilled: Yusuf raised his parents upon the throne, and they fell down before him in prostration. And at his death he gathered his sons and asked them the only question that mattered: what will you worship after me?",
    deathAr: "وعاش حتى رأى تأويل الرؤيا: ورفع أبويه على العرش وخرّوا له سُجّدًا. ولمّا حضره الموت جمع بنيه وسألهم السؤال الذي لا يعدله سؤال: ما تعبدون من بعدي؟",
    sources: [
      "Do not relate your dream: Surah Yusuf (12:5) — Quran",
      "Beautiful patience: Surah Yusuf (12:18 and 12:83) — Quran",
      "I complain only to Allah: Surah Yusuf (12:86) — Quran",
      "Do not despair of the mercy of Allah: Surah Yusuf (12:87) — Quran",
      "Perhaps Allah will bring them all: Surah Yusuf (12:83) — Quran",
      "What will you worship after me: Surah Al-Baqarah (2:133) — Quran"
    ]
  },

  "yusuf": {
    before: "A boy of eleven brothers who saw eleven stars and the sun and the moon prostrating to him, and whose father loved him — which was the beginning of everything that happened to him.",
    beforeAr: "غلامٌ من أحد عشر أخًا، رأى أحد عشر كوكبًا والشمس والقمر له ساجدين، وكان أبوه يحبّه — وكان ذلك مبتدأ كل ما جرى له.",
    message: "He preached in a prison cell, to two men who had asked him about dreams, before he interpreted anything: are separate lords better, or Allah, the One, the Prevailing?",
    messageAr: "دعا في السجن رجلين سألاه عن رؤيا، قبل أن يُعبّر لهما شيئًا: أأربابٌ متفرّقون خيرٌ أم الله الواحد القهّار؟",
    islam: "His brothers threw him into a well and told their father a wolf had eaten him. He was sold as a slave, bought in Egypt, and raised in the house of the man who bought him.",
    islamAr: "ألقاه إخوته في غيابة الجُبّ وقالوا لأبيهم أكله الذئب. فبِيع رقيقًا واشتُري بمصر ونشأ في بيت من اشتراه.",
    change: "The wife of the house locked the doors and called him to herself. He said: I seek the refuge of Allah — he is my lord who has made good my stay; the wrongdoers do not succeed. And when the choice was prison or the sin, he chose the prison out loud: my Lord, prison is dearer to me than what they call me to.",
    changeAr: "فراودته امرأة العزيز عن نفسه وغلّقت الأبواب، فقال: معاذ الله، إنه ربي أحسن مثواي، إنه لا يُفلح الظالمون. ولمّا صار الأمر بين السجن والمعصية اختار السجن جهارًا: ربّ السجن أحبّ إليّ مما يدعونني إليه.",
    greatest: "The day he had absolute power over the men who had thrown him in a well, and used it for nothing. He said: no blame upon you today. May Allah forgive you, and He is the most merciful of the merciful. He did not remind them of what they did; he told them their father would see again.",
    greatestAr: "يوم صار له عليهم كل سلطان — وهم الذين ألقوه في الجبّ — فلم يستعمله في شيء، وقال: لا تثريب عليكم اليوم، يغفر الله لكم وهو أرحم الراحمين. لم يُعدّد عليهم ما صنعوا، بل بشّرهم بأن أباهم يرتدّ بصيرًا.",
    death: "At the height of it all — power, family restored, the dream fulfilled — his prayer was not for more: my Lord, You have given me of sovereignty and taught me the interpretation of events. Take me as a Muslim and join me with the righteous.",
    deathAr: "وفي ذروة الأمر كلّه — المُلك واجتماع الأهل وتأويل الرؤيا — لم يسأل مزيدًا، بل قال: ربّ قد آتيتني من المُلك وعلّمتني من تأويل الأحاديث، توفّني مسلمًا وألحقني بالصالحين.",
    sources: [
      "The dream: Surah Yusuf (12:4) — Quran",
      "The well and the shirt: Surah Yusuf (12:15-18) — Quran",
      "I seek the refuge of Allah: Surah Yusuf (12:23) — Quran",
      "Prison is dearer to me: Surah Yusuf (12:33) — Quran",
      "Preaching in the prison: Surah Yusuf (12:39) — Quran",
      "No blame upon you today: Surah Yusuf (12:92) — Quran",
      "Take me as a Muslim: Surah Yusuf (12:101) — Quran"
    ]
  },

  "ayyub": {
    before: "He had health, wealth and family — and then lost all of it. The Quran does not describe his illness in detail, and neither does this page; what it records is what he said in it.",
    beforeAr: "كان في صحةٍ ومالٍ وأهل، ثم ذهب ذلك كلّه. ولم يُفصّل القرآن مرضه، ولا نُفصّله هنا؛ وإنما سجّل ما قاله فيه.",
    message: "That a servant may be tested severely and stay a servant — and that asking for relief is not complaint.",
    messageAr: "أن العبد قد يُبتلى ابتلاءً شديدًا ويبقى عبدًا — وأن سؤال العافية ليس شكوى.",
    islam: "The whole of his complaint, in the Quran, is two lines: he called upon his Lord — indeed adversity has touched me, and You are the most merciful of the merciful. No demand, no argument, no why.",
    islamAr: "وجملة شكواه في القرآن سطران: إذ نادى ربّه أني مسّني الضرّ وأنت أرحم الراحمين. بلا مطالبةٍ ولا جدالٍ ولا سؤالٍ عن السبب.",
    change: "And in another place: adversity has touched me, and You are the most merciful — with Shaytan touching him with hardship and torment, and still his address to his Lord did not change.",
    changeAr: "وفي موضعٍ آخر: أني مسّني الشيطان بنُصبٍ وعذاب — ومع ذلك لم يتغيّر خطابه لربّه.",
    greatest: "The answer: strike with your foot — this is a spring, cool and drink. And Allah removed what was with him of adversity and gave him back his family and the like of them with them, as a mercy from Us and a reminder for those of understanding.",
    greatestAr: "فكان الجواب: اركض برجلك، هذا مغتسلٌ باردٌ وشراب. فكشف الله ما به من ضرّ، وآتاه أهله ومثلهم معهم رحمةً من عنده وذكرى لأولي الألباب.",
    death: "Allah's own verdict on him is the sentence every Muslim knows: indeed We found him patient — an excellent servant. Indeed he was one who repeatedly turned back to Us.",
    deathAr: "وحكم الله فيه هو الجملة التي يعرفها كل مسلم: إنّا وجدناه صابرًا نِعم العبد، إنه أوّاب.",
    sources: [
      "Adversity has touched me: Surah Al-Anbiya (21:83-84) — Quran",
      "Shaytan touched me with hardship: Surah Sad (38:41) — Quran",
      "Strike with your foot: Surah Sad (38:42) — Quran",
      "His family restored and the like with them: Surah Sad (38:43) and Surah Al-Anbiya (21:84) — Quran",
      "We found him patient, an excellent servant: Surah Sad (38:44) — Quran"
    ]
  },

  "shuayb": {
    before: "He was sent to Madyan, a trading people whose wrongdoing was in the marketplace: they short-measured, cheated the scales, and took from people what was theirs.",
    beforeAr: "بُعث إلى مدين، وكانوا قومًا تجّارًا، وكان فسادهم في السوق: يُطفّفون الكيل ويبخسون الميزان ويأخذون من الناس حقوقهم.",
    message: "O my people, worship Allah — you have no god other than Him. And do not decrease the measure and the scale. He joined the two: worship, and honesty in what you weigh.",
    messageAr: "يا قوم اعبدوا الله ما لكم من إلهٍ غيره، ولا تنقصوا المكيال والميزان. فجمع بين الأمرين: التوحيد، والصدق في الكيل.",
    islam: "He is called the orator of the prophets for the way he argued with them, and his argument was always the same shape: give full measure and do not be of those who cause loss; weigh with an even balance.",
    islamAr: "ويُسمّى خطيب الأنبياء لحسن مجادلته إياهم، وكانت حجّته على صورةٍ واحدة: أوفوا الكيل ولا تكونوا من المخسرين، وزِنوا بالقسطاس المستقيم.",
    change: "They answered with mockery aimed at his prayer: does your prayer command you that we should leave what our fathers worshipped, or that we should not do with our wealth what we please? And he answered them without raising his voice: I do not intend to differ from you in what I forbid you. I only intend reform as much as I am able.",
    changeAr: "فسخِروا من صلاته: أصلاتك تأمرك أن نترك ما يعبد آباؤنا أو أن نفعل في أموالنا ما نشاء؟ فأجابهم بلا صخب: وما أريد أن أخالفكم إلى ما أنهاكم عنه، إن أريد إلا الإصلاح ما استطعت.",
    greatest: "Refusing to make his message negotiable when they offered him the way out: we will surely drive you out, Shuayb, and those who believe with you from our city, or you must return to our religion. He said: even if we were unwilling?",
    greatestAr: "رفضه أن يساوم على دينه حين عرضوا عليه المخرج: لنُخرجنّك يا شعيب والذين آمنوا معك من قريتنا أو لتعودُنّ في ملّتنا. فقال: أوَلو كنّا كارهين؟",
    death: "The earthquake seized them and they lay dead in their homes, and in another passage it is the punishment of the day of the shade. He turned away from them and said: I conveyed to you the messages of my Lord and advised you — so how could I grieve over a disbelieving people?",
    deathAr: "فأخذتهم الرجفة فأصبحوا في دارهم جاثمين، وفي موضعٍ آخر عذاب يوم الظُّلّة. فتولّى عنهم وقال: لقد أبلغتكم رسالات ربي ونصحتُ لكم، فكيف آسى على قومٍ كافرين؟",
    sources: [
      "Do not decrease the measure: Surah Hud (11:84-85) — Quran",
      "Does your prayer command you: Surah Hud (11:87) — Quran",
      "I only intend reform: Surah Hud (11:88) — Quran",
      "Or you must return to our religion: Surah Al-A'raf (7:88) — Quran",
      "The earthquake, and how could I grieve: Surah Al-A'raf (7:91-93) — Quran",
      "The day of the shade: Surah Ash-Shu'ara (26:189) — Quran"
    ]
  },

  "harun": {
    before: "He was the older brother of Musa عليه السلام, and he was asked for by name — not by himself, but by Musa, who wanted him because of one thing: he is more fluent than me in speech.",
    beforeAr: "هو أخو موسى عليه السلام الأكبر، وقد طُلب بالاسم — لا طلبَ نفسه، بل طلبه موسى لأمرٍ واحد: وأخي هارون هو أفصح مني لسانًا.",
    message: "The same message as his brother, carried to the same man: go, both of you, to Pharaoh — indeed he has transgressed. And speak to him with gentle speech.",
    messageAr: "الرسالة نفسها التي حملها أخوه، إلى الرجل نفسه: اذهبا إلى فرعون إنه طغى، فقولا له قولًا ليّنًا.",
    islam: "Musa asked for him in the plainest words a man can use about his brother: appoint for me a helper from my family — Harun, my brother. Increase my strength through him and let him share my task. Allah answered: you have been granted your request, Musa.",
    islamAr: "سأله موسى بأصرح ما يُسأل به: واجعل لي وزيرًا من أهلي، هارون أخي، اشدد به أزري وأشركه في أمري. فقال الله: قد أُوتيتَ سؤلك يا موسى.",
    change: "He was left in charge when Musa went to the appointment with his Lord, and in his absence the people made the calf. He forbade them and was overpowered: O my people, you are only being tested by it, and your Lord is the Most Merciful — so follow me and obey my order. They said: we will not cease being devoted to it.",
    changeAr: "استُخلف حين ذهب موسى لميقات ربّه، فاتّخذ القوم العجل في غيبته. فنهاهم فغُلب: يا قوم إنما فُتنتم به، وإن ربّكم الرحمن فاتّبعوني وأطيعوا أمري. قالوا: لن نبرح عليه عاكفين.",
    greatest: "When Musa returned in anger and seized him by the head and the beard, he did not defend himself with his own authority. He said: son of my mother, the people overpowered me and were about to kill me, so do not let the enemies rejoice over me. He had held the group together rather than split it.",
    greatestAr: "ولمّا رجع موسى غضبان وأخذ برأسه ولحيته لم يحتجّ بمنصبه، بل قال: يا ابن أمّ، إن القوم استضعفوني وكادوا يقتلونني، فلا تُشمت بي الأعداء. فقد آثر ألّا يُفرّق بينهم على أن يُفرّق.",
    death: "He died before Musa. Allah names them together as those upon whom He bestowed favour, and says: peace be upon Musa and Harun. Indeed thus do We reward the doers of good.",
    deathAr: "ومات قبل موسى. وقد جمعهما الله في المُنعَم عليهم، وقال: سلامٌ على موسى وهارون، إنّا كذلك نجزي المحسنين.",
    sources: [
      "More fluent than me: Surah Al-Qasas (28:34) — Quran",
      "Appoint for me a helper: Surah Ta-Ha (20:29-36) — Quran",
      "Speak to him with gentle speech: Surah Ta-Ha (20:43-44) — Quran",
      "You are only being tested by it: Surah Ta-Ha (20:90-91) — Quran",
      "Son of my mother: Surah Al-A'raf (7:150) and Surah Ta-Ha (20:94) — Quran",
      "Peace be upon Musa and Harun: Surah As-Saffat (37:120-121) — Quran"
    ]
  },

  "dawud": {
    before: "He was a young man in the army of Talut when the army faced Jalut. Those who were certain they would meet Allah said: how many a small company has overcome a large company by the permission of Allah.",
    beforeAr: "كان فتًى في جيش طالوت حين لقي الجيشُ جالوت، وقال الذين يظنون أنهم مُلاقو الله: كم من فئةٍ قليلةٍ غلبت فئةً كثيرةً بإذن الله.",
    message: "He was given the Zabur, and made a khalifah in the land — with the charge that comes with it: judge between people in truth and do not follow desire, for it will lead you astray from the way of Allah.",
    messageAr: "أُوتي الزبور وجُعل خليفةً في الأرض، ومعها التكليف: فاحكم بين الناس بالحق ولا تتّبع الهوى فيُضلّك عن سبيل الله.",
    islam: "He killed Jalut, and Allah gave him kingship and wisdom and taught him of what He willed. The Quran states the principle in the same breath: were it not that Allah checks the people, some by means of others, the earth would be corrupted.",
    islamAr: "فقتل جالوت، وآتاه الله المُلك والحكمة وعلّمه مما يشاء. وقرّر القرآن القاعدة في السياق نفسه: ولولا دفع الله الناس بعضهم ببعض لفسدت الأرض.",
    change: "The mountains and the birds were made to join him in glorifying Allah — and iron was made soft for him, so he worked it himself. The Prophet ﷺ said: the best food a man eats is from the work of his own hand, and the prophet of Allah Dawud used to eat from the work of his own hand.",
    changeAr: "وسُخّرت معه الجبال والطير يُسبّحن، وأُلين له الحديد فكان يعمل بيده. وقال النبي ﷺ: ما أكل أحدٌ طعامًا قطّ خيرًا من أن يأكل من عمل يده، وإنّ نبيّ الله داود كان يأكل من عمل يده.",
    greatest: "The two disputants who climbed the wall of his private chamber, and the judgement he gave before hearing the other side — and then realised he had been tested. He asked forgiveness of his Lord and fell down bowing, and turned in repentance. The Quran does not dwell on the fault; it dwells on the returning.",
    greatestAr: "الخصمان اللذان تسوّرا المحراب، والحكم الذي حكمه قبل أن يسمع من الآخر — ثم علم أنما فتنّاه، فاستغفر ربّه وخرّ راكعًا وأناب. ولم يُطِل القرآن في الزلّة، وإنما أطال في الأوبة.",
    death: "His worship is the standard the Prophet ﷺ pointed to: the most beloved prayer to Allah is the prayer of Dawud, and the most beloved fasting is the fasting of Dawud — he used to sleep half the night, stand a third of it, and sleep a sixth; and he used to fast a day and not fast a day.",
    deathAr: "وعبادته هي الميزان الذي دلّ عليه النبي ﷺ: أحبّ الصلاة إلى الله صلاة داود، وأحبّ الصيام إلى الله صيام داود — كان ينام نصف الليل ويقوم ثلثه وينام سدسه، وكان يصوم يومًا ويفطر يومًا.",
    sources: [
      "How many a small company: Surah Al-Baqarah (2:249-251) — Quran",
      "Given the Zabur: Surah An-Nisa (4:163) — Quran",
      "Judge in truth and do not follow desire: Surah Sad (38:26) — Quran",
      "Mountains and birds; iron made soft: Surah Saba (34:10-11) and Surah Al-Anbiya (21:79) — Quran",
      "He ate from the work of his own hand: Sahih al-Bukhari, Book of Sales, Hadith 2072 — Sahih",
      "The two disputants: Surah Sad (38:21-25) — Quran",
      "The prayer and fasting of Dawud: Sahih al-Bukhari, Hadith 1131 and 3420 — Sahih, agreed upon"
    ]
  },

  "sulaiman": {
    before: "He was the son of Dawud عليه السلام and inherited from him — and the Quran records the sentence he said about it: and he said, O people, we have been taught the language of birds, and we have been given of all things. Indeed this is evident bounty.",
    beforeAr: "هو ابن داود عليه السلام وورثه، وسجّل القرآن قوله: وقال يا أيها الناس عُلّمنا منطق الطير وأُوتينا من كلّ شيء، إنّ هذا لهو الفضل المبين.",
    message: "That the greatest kingdom ever given to a man is still a test — and he named it as one: this is from the favour of my Lord, to test me whether I am grateful or ungrateful.",
    messageAr: "أن أعظم مُلكٍ أُوتيه بشرٌ يبقى ابتلاءً، وقد سمّاه هو كذلك: هذا من فضل ربي ليبلوني أأشكر أم أكفر.",
    islam: "He asked for something no one would ask for: my Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. The wind was made subject to him, and the jinn, and he was given what no one was given.",
    islamAr: "سأل ما لا يسأله أحد: ربّ اغفر لي وهب لي مُلكًا لا ينبغي لأحدٍ من بعدي. فسُخّرت له الريح والجنّ، وأُوتي ما لم يُؤتَه أحد.",
    change: "As a young man he had already been given understanding: he and his father judged in the case of the field, and Allah says We gave understanding of it to Sulaiman — and to each We gave judgement and knowledge. The Quran corrects the ruling without diminishing either man.",
    changeAr: "وقد أُوتي الفهم صغيرًا؛ إذ حكم هو وأبوه في الحرث، فقال الله: ففهّمناها سليمان، وكلًّا آتينا حكمًا وعلمًا. فصوّب القرآن الحكم دون أن ينقص أحدهما.",
    greatest: "The ant, and what he did about it. An ant said: O ants, enter your dwellings lest Sulaiman and his soldiers crush you while they perceive not. And he smiled, laughing at her speech, and said: my Lord, enable me to be grateful for Your favour which You have bestowed upon me. A king with armies of men and jinn stopped for an ant, and asked for gratitude.",
    greatestAr: "النملة، وما صنع عندها. قالت نملة: يا أيها النمل ادخلوا مساكنكم لا يحطمنّكم سليمان وجنوده وهم لا يشعرون. فتبسّم ضاحكًا من قولها وقال: ربّ أوزعني أن أشكر نعمتك التي أنعمت عليّ. ملكٌ له جنودٌ من الإنس والجنّ يقف عند نملة، ويسأل الشكر.",
    death: "He died leaning on his staff, and the jinn — who were said to know the unseen — did not know he had died until the creature of the earth ate through his staff and he fell. The Quran uses his death to end that claim: had they known the unseen, they would not have remained in humiliating punishment.",
    deathAr: "مات متّكئًا على عصاه، ولم تعلم الجنّ — وقد كان يُظنّ أنهم يعلمون الغيب — بموته حتى أكلت دابّة الأرض منسأته فخرّ. وختم القرآن بموته تلك الدعوى: أن لو كانوا يعلمون الغيب ما لبثوا في العذاب المهين.",
    sources: [
      "We have been taught the language of birds: Surah An-Naml (27:16) — Quran",
      "To test me whether I am grateful: Surah An-Naml (27:40) — Quran",
      "A kingdom such as will not belong to anyone after me: Surah Sad (38:35) — Quran",
      "The case of the field: Surah Al-Anbiya (21:78-79) — Quran",
      "The ant, and his smile: Surah An-Naml (27:18-19) — Quran",
      "His death and the creature of the earth: Surah Saba (34:14) — Quran"
    ]
  },

  "ilyas": {
    before: "He was sent to a people who worshipped an idol called Ba'l. The Quran names it, which is unusual, and names what he said to them about it.",
    beforeAr: "بُعث إلى قومٍ يعبدون صنمًا يُسمّى بعلًا. وقد سمّاه القرآن، وهذا قليل، وسمّى ما قاله لهم فيه.",
    message: "Will you not fear Allah? Do you call upon Ba'l and leave the best of creators — Allah, your Lord and the Lord of your forefathers?",
    messageAr: "ألا تتّقون؟ أتدعون بعلًا وتذرون أحسن الخالقين، الله ربّكم وربّ آبائكم الأولين؟",
    islam: "He is named among the righteous in the same list as Zakariya, Yahya and Isa — and Allah says of that whole group: and all of them We preferred over the worlds.",
    islamAr: "ذُكر في الصالحين مع زكريا ويحيى وعيسى، وقال الله في تلك الجملة: وكلًّا فضّلنا على العالمين.",
    change: "They denied him, and the Quran states the outcome briefly: so they will indeed be brought — except the chosen servants of Allah. It does not describe a punishment in this world for them, and neither does this page.",
    changeAr: "فكذّبوه، وأوجز القرآن العاقبة: فإنهم لمُحضَرون، إلا عباد الله المخلَصين. ولم يذكر لهم عذابًا في الدنيا، ولا نذكره هنا.",
    greatest: "That his name was left standing among later generations: and We left for him among later generations — peace be upon Ilyas. The Quran gives him the salutation it gives to Nuh, Ibrahim, Musa and Harun.",
    greatestAr: "أن ذكره أُبقي في الآخِرين: وتركنا عليه في الآخِرين، سلامٌ على إل ياسين. وأعطاه القرآن السلام الذي أعطاه لنوحٍ وإبراهيم وموسى وهارون.",
    death: "Nothing about his death is established in the Quran or the two Sahihs. The stories that circulate about him being raised, or living on, are from Israiliyyat and later histories. They are not repeated here as fact, because they are not established as fact.",
    deathAr: "لم يثبت شيءٌ عن وفاته في القرآن ولا في الصحيحين. وأما ما يُتداول من رفعه أو بقائه فمن الإسرائيليات وكتب التاريخ المتأخرة، ولا نُعيده هنا على أنه ثابت، لأنه غير ثابت.",
    sources: [
      "Do you call upon Ba'l: Surah As-Saffat (37:123-126) — Quran",
      "Among the righteous with Zakariya, Yahya and Isa: Surah Al-An'am (6:85) — Quran",
      "Peace be upon Ilyas: Surah As-Saffat (37:129-130) — Quran",
      "Accounts of him being raised or living on: Israiliyyat and later histories — NOT established"
    ]
  },

  "al-yasa": {
    before: "The Quran names him twice and no more. Both times he is in a list of prophets, and both times the point is the same: he is one of them, and he was preferred.",
    beforeAr: "سمّاه القرآن مرتين لا غير، وفي الموضعين هو في سياق ذكر الأنبياء، والمعنى واحد: أنه منهم، وأنه من المفضَّلين.",
    message: "The message of all of them: worship Allah alone.",
    messageAr: "رسالتهم جميعًا: عبادة الله وحده.",
    islam: "He is listed with Ismail, Yunus and Lut — and Allah says of the four: and all of them We preferred over the worlds.",
    islamAr: "ذُكر مع إسماعيل ويونس ولوط، وقال الله في الأربعة: وكلًّا فضّلنا على العالمين.",
    change: "And in Surah Sad he is listed with Ismail and Dhul-Kifl among those Allah calls the outstanding — and all are among the outstanding.",
    changeAr: "وفي سورة ص ذُكر مع إسماعيل وذي الكفل فيمن سمّاهم الله الأخيار: وكلٌّ من الأخيار.",
    greatest: "That Allah counted him among the outstanding is the whole of what is established about him, and it is not a small thing to have that said in a book that will be read until the Hour.",
    greatestAr: "وعدّه الله من الأخيار هو جملة ما ثبت عنه، وليس ذلك بالقليل أن يُقال فيه هذا في كتابٍ يُتلى إلى قيام الساعة.",
    death: "Nothing of his people, his time, or his death is established in the Quran or the two Sahihs. The detailed stories told about him come from Israiliyyat, and this page leaves them where it found them rather than dressing a short account up as a long one.",
    deathAr: "لم يثبت شيءٌ عن قومه ولا زمانه ولا وفاته في القرآن ولا في الصحيحين. وما يُروى عنه من تفاصيل فمن الإسرائيليات، ونتركه حيث هو ولا نُطيل ما جاء قصيرًا.",
    sources: [
      "Preferred over the worlds: Surah Al-An'am (6:86) — Quran",
      "Among the outstanding: Surah Sad (38:48) — Quran",
      "Detailed stories about his life: Israiliyyat — NOT established"
    ]
  },

  "dhul-kifl": {
    before: "He is named twice in the Quran, both times briefly, and both times in company: with Ismail and Idris in one place, with Ismail and Al-Yasa in the other.",
    beforeAr: "سُمّي في القرآن مرتين، بإيجازٍ في الموضعين، وفي سياق ذكر غيره: مع إسماعيل وإدريس في موضع، ومع إسماعيل واليسع في الآخر.",
    message: "The message of every prophet: worship Allah alone.",
    messageAr: "رسالة كل نبي: عبادة الله وحده.",
    islam: "What Allah says of him is: all were of the patient. The patience is stated; the trial that required it is not described.",
    islamAr: "والذي قاله الله فيه: كلٌّ من الصابرين. فذُكر الصبر ولم يُذكر البلاء الذي احتاج إليه.",
    change: "And We admitted them into Our mercy. Indeed they were of the righteous. That is the sentence he shares with Ismail and Idris.",
    changeAr: "وأدخلناهم في رحمتنا إنهم من الصالحين. وهذه الجملة يشترك فيها مع إسماعيل وإدريس.",
    greatest: "Even his name is not fully settled: the scholars differ over whether Dhul-Kifl was a prophet or a righteous man, and over what the name means. Some said it refers to a pledge he took upon himself. The Quran does not explain it, so it is left unexplained here.",
    greatestAr: "بل حتى اسمه لم يُقطع فيه: اختلف أهل العلم هل كان نبيًّا أو رجلًا صالحًا، وفي معنى الاسم. فقال بعضهم: من الكِفل، وهو ما تكفّل به. ولم يُبيّنه القرآن، فلا نُبيّنه هنا.",
    death: "Nothing about his death is established. The long story attached to his name in some books — a man who guaranteed to fast by day, stand by night and judge without anger — is not in the Quran and not in the two Sahihs, and is not presented here as his.",
    deathAr: "ولم يثبت شيءٌ عن وفاته. وأما القصة الطويلة التي تُنسب إليه في بعض الكتب — من تكفّله بصيام النهار وقيام الليل والقضاء بغير غضب — فليست في القرآن ولا في الصحيحين، ولا نُقدّمها هنا على أنها له.",
    sources: [
      "All were of the patient; admitted into Our mercy: Surah Al-Anbiya (21:85-86) — Quran",
      "Among the outstanding: Surah Sad (38:48) — Quran",
      "The story of the pledge: not in the Quran or the two Sahihs — NOT established"
    ]
  },

  "yunus": {
    before: "He was sent to a town, and when they did not respond he left them in anger, before he was given permission to leave.",
    beforeAr: "أُرسل إلى قريةٍ فلمّا لم يستجيبوا خرج مُغاضبًا، قبل أن يُؤذن له.",
    message: "Worship Allah alone — and the mercy that follows a nation which turns back before the punishment arrives.",
    messageAr: "عبادة الله وحده — ورحمةٌ تلحق أمّةً رجعت قبل نزول العذاب.",
    islam: "He went to a loaded ship, and lots were drawn, and he was of those thrown out. The fish swallowed him while he was blameworthy.",
    islamAr: "فأبق إلى الفلك المشحون، فساهم فكان من المُدحضين، فالتقمه الحوت وهو مُليم.",
    change: "In the darkness — the dark of the sea, the dark of the night, the dark of the fish — he called out. And what he said was not a request. It was the truth about who Allah is and who he was: there is no god but You. Glory be to You. I was indeed among the wrongdoers.",
    changeAr: "وفي الظلمات — ظلمة البحر وظلمة الليل وظلمة الحوت — نادى. ولم يكن نداؤه طلبًا، بل كان تقريرًا لحقيقة ربّه وحقيقة نفسه: لا إله إلا أنت سبحانك إني كنتُ من الظالمين.",
    greatest: "The answer, and what Allah attached to it: so We answered him and saved him from the distress. And thus do We save the believers. The rescue was not made his alone — it was made a rule.",
    greatestAr: "فكان الجواب وما عُلّق به: فاستجبنا له ونجّيناه من الغمّ، وكذلك نُنجي المؤمنين. فلم تُجعل النجاة له وحده، بل جُعلت قاعدة.",
    death: "Had he not been of those who glorify Allah, he would have remained inside the fish until the Day they are raised. And his people are the one people the Quran records as being spared after the warning: so why was there not a city that believed and its faith benefited it — except the people of Yunus?",
    deathAr: "فلولا أنه كان من المسبّحين للبث في بطنه إلى يوم يُبعثون. وقومه هم القوم الوحيدون الذين ذكر القرآن نجاتهم بعد الإنذار: فلولا كانت قريةٌ آمنت فنفعها إيمانها إلا قوم يونس.",
    sources: [
      "He left in anger, the ship and the lots: Surah As-Saffat (37:139-142) — Quran",
      "The call in the darkness: Surah Al-Anbiya (21:87) — Quran",
      "And thus do We save the believers: Surah Al-Anbiya (21:88) — Quran",
      "Had he not been of those who glorify: Surah As-Saffat (37:143-144) — Quran",
      "Except the people of Yunus: Surah Yunus (10:98) — Quran"
    ]
  },

  "zakariya": {
    before: "He was an old man who had served in the sanctuary for years, the guardian of Maryam, and he had no child. His bones had weakened and his head was aflame with white hair — his own description.",
    beforeAr: "كان شيخًا كبيرًا خدم المحراب سنين، وهو كافل مريم، ولم يكن له ولد. وقد وهن العظم منه واشتعل الرأس شيبًا — وهو وصفه لنفسه.",
    message: "That a man may ask his Lord for what looks impossible, and ask it quietly, and be answered.",
    messageAr: "أن العبد قد يسأل ربّه ما يبدو مستحيلًا، ويسأله سرًّا، فيُجاب.",
    islam: "What moved him to ask was what he saw with Maryam: whenever he entered upon her in the chamber he found provision with her. He said: where is this from? She said: it is from Allah — Allah provides for whom He wills without account. There he prayed.",
    islamAr: "والذي حرّكه للسؤال ما رآه عند مريم: كلما دخل عليها المحراب وجد عندها رزقًا، قال: أنّى لكِ هذا؟ قالت: هو من عند الله، إن الله يرزق من يشاء بغير حساب. فهنالك دعا.",
    change: "He called upon his Lord in secret — the Quran says so explicitly — and said: my Lord, I have never been unblessed in my supplication to You. He asked for an heir who would inherit prophethood, not property, and asked that Allah make him pleasing.",
    changeAr: "نادى ربّه نداءً خفيًّا — نصّ القرآن على ذلك — وقال: ولم أكن بدعائك ربّ شقيًّا. وسأل وليًّا يرث النبوّة لا المال، وسأل أن يجعله رضيًّا.",
    greatest: "He was answered by name, and the child was given a name no one had been given before: O Zakariya, We give you good news of a boy whose name will be Yahya. We have not assigned to any before this name.",
    greatestAr: "فأُجيب باسمه، وأُعطي الغلام اسمًا لم يُسمَّ به أحدٌ قبله: يا زكريا إنّا نُبشّرك بغلامٍ اسمه يحيى، لم نجعل له من قبل سميًّا.",
    death: "The Quran describes him and his household with one line that explains the whole answer: indeed they used to hasten to good deeds and supplicate Us in hope and fear, and they were humbly submissive to Us.",
    deathAr: "ووصفه القرآن وأهلَ بيته بجملةٍ تُفسّر الإجابة كلّها: إنهم كانوا يُسارعون في الخيرات ويدعوننا رغبًا ورهبًا، وكانوا لنا خاشعين.",
    sources: [
      "The provision with Maryam: Surah Al-Imran (3:37) — Quran",
      "A secret call; my bones have weakened: Surah Maryam (19:3-6) — Quran",
      "I have never been unblessed in my supplication: Surah Maryam (19:4) — Quran",
      "News of Yahya, a name no one had: Surah Maryam (19:7) — Quran",
      "They used to hasten to good deeds: Surah Al-Anbiya (21:90) — Quran"
    ]
  },

  "yahya": {
    before: "He was the answer to an old man's private prayer, and he was given his task while he was still a child: O Yahya, take the Scripture with strength. And We gave him judgement while a boy.",
    beforeAr: "كان جواب دعاءٍ خفيٍّ لشيخٍ كبير، وأُعطي أمره وهو صبي: يا يحيى خذ الكتاب بقوّة، وآتيناه الحُكم صبيًّا.",
    message: "Take it with strength — the Quran gives the command in that word, not in a softer one.",
    messageAr: "خذ الكتاب بقوّة — بهذا اللفظ جاء الأمر، لا بما هو ألين منه.",
    islam: "Allah lists what He gave him: tenderness from Us, and purity; and he was fearing of Allah, and dutiful to his parents, and he was not a tyrant or disobedient.",
    islamAr: "وعدّد الله ما آتاه: وحنانًا من لدنّا وزكاةً، وكان تقيًّا، وبرًّا بوالديه، ولم يكن جبّارًا عصيًّا.",
    change: "He is one of very few given peace at three points by name: and peace be upon him the day he was born, the day he dies, and the day he is raised alive. The same three are said of Isa عليه السلام about himself.",
    changeAr: "وهو ممن خُصّ بالسلام في ثلاثة مواضع بالاسم: وسلامٌ عليه يوم وُلد ويوم يموت ويوم يُبعث حيًّا. والثلاثة نفسها قالها عيسى عليه السلام عن نفسه.",
    greatest: "That he was confirmed before he was born — named by Allah, described by Allah, and given the Book as a boy. He was not asked to become worthy of the task; he was made for it.",
    greatestAr: "أنه أُثبت قبل أن يُولد — سمّاه الله ووصفه الله وآتاه الكتاب صبيًّا. فلم يُطلب منه أن يصير أهلًا للأمر، بل جُعل له.",
    death: "He was killed. The Quran does not narrate the killing, and this page does not narrate what the Quran does not — but the salutation Allah gave him covers the day he dies, and that is where his account is left.",
    deathAr: "قُتل. ولم يقصّ القرآن خبر قتله، ولا نقصّ ما لم يقصّه — غير أن السلام الذي أعطاه الله إياه شمل يوم يموت، وعند هذا يُترك خبره.",
    sources: [
      "Take the Scripture with strength; judgement as a boy: Surah Maryam (19:12) — Quran",
      "Tenderness, purity, dutiful to his parents: Surah Maryam (19:13-14) — Quran",
      "Peace upon him on three days: Surah Maryam (19:15) — Quran",
      "Confirming a word from Allah, a leader and chaste: Surah Al-Imran (3:39) — Quran"
    ]
  },

  "shith": {
    before: "He is not named in the Quran. He is named in the histories as a son of Adam who carried on after him, and this page will not turn that into more than it is.",
    beforeAr: "لم يُسمَّ في القرآن. وإنما ذُكر في كتب التاريخ ابنًا لآدم قام بالأمر بعده، ولا نجعل هذا أكثر مما هو.",
    message: "Worship Allah alone — the message every prophet carried.",
    messageAr: "عبادة الله وحده — رسالة كل نبيّ.",
    islam: "What IS established in the Quran about the sons of Adam is the story of the two who each offered a sacrifice: it was accepted from one and not the other, and one killed his brother, and became the first of that.",
    islamAr: "والثابت في القرآن من خبر ابني آدم قصّة اللذين قرّبا قربانًا، فتُقبّل من أحدهما ولم يُتقبّل من الآخر، فقتل أحدهما أخاه، فكان أوّل من سنّ ذلك.",
    change: "The Prophet ﷺ said that no soul is killed wrongfully without a share of the guilt falling on the first son of Adam, because he was the first to establish killing. That is the authentic teaching that comes out of the account of Adam's sons.",
    changeAr: "وقال النبي ﷺ: لا تُقتل نفسٌ ظلمًا إلا كان على ابن آدم الأول كِفلٌ من دمها، لأنه أول من سنّ القتل. وهذا هو الثابت الذي يخرج من خبر ابني آدم.",
    greatest: "The honest position: the number of prophets, and which of Adam's sons were among them, is not something the Quran or the two Sahihs settle. Abu Dharr رضي الله عنه narrated a long hadith giving numbers of prophets, but it is not in al-Bukhari or Muslim and scholars have spoken about its chain.",
    greatestAr: "والإنصاف أن عدد الأنبياء ومن كان منهم من بني آدم ليس مما فصل فيه القرآن ولا الصحيحان. وقد رُوي عن أبي ذر رضي الله عنه حديثٌ طويل في عددهم، وليس في البخاري ولا مسلم، وتكلّم أهل العلم في إسناده.",
    death: "So this entry stops where the evidence stops. What is certain is that Allah sent messengers to every nation — and We certainly sent into every nation a messenger — and that of them He has told us some and not told us others.",
    deathAr: "فيقف هذا المدخل حيث يقف الدليل. والمقطوع به أن الله أرسل في كل أمّةٍ رسولًا — ولقد بعثنا في كل أمّةٍ رسولًا — وأن منهم من قصّه علينا ومنهم من لم يقصصه.",
    sources: [
      "The two sons of Adam and the sacrifice: Surah Al-Ma'idah (5:27-31) — Quran",
      "The first son of Adam and the share of every wrongful killing: Sahih al-Bukhari, Hadith 3335 — Sahih, agreed upon",
      "Into every nation a messenger: Surah An-Nahl (16:36) — Quran",
      "Of them We have told you some and not others: Surah Ghafir (40:78) — Quran",
      "The name Shith and his story: historical accounts, e.g. Ibn Kathir, Al-Bidaya wan-Nihaya — historical sira, NOT hadith"
    ]
  },

  "yusha": {
    before: "He is not named in the Quran, but he is present in it. He is the young companion of Musa عليه السلام on the journey to the meeting place of the two seas — and the scholars of tafsir identify the young man as Yusha ibn Nun.",
    beforeAr: "لم يُسمَّ في القرآن، لكنه فيه. فهو فتى موسى عليه السلام في رحلته إلى مجمع البحرين — وقد عيّنه المفسّرون بأنه يوشع بن نون.",
    message: "That the one who serves a prophet and keeps walking with him is being prepared for something.",
    messageAr: "أن من خدم نبيًّا ولازم السير معه فإنما يُعَدّ لأمر.",
    islam: "The Quran records his part in the journey: he carried the food, he forgot the fish, and he said the sentence that turned them back — I forgot the fish, and none but Shaytan made me forget to mention it.",
    islamAr: "وسجّل القرآن دوره في الرحلة: حمل الزاد، ونسي الحوت، وقال الجملة التي ردّتهما: وما أنسانيه إلا الشيطان أن أذكره.",
    change: "The Prophet ﷺ narrated the whole account of Musa and al-Khidr and named the servant in the telling — the hadith of Ibn Abbas in al-Bukhari, in which the young man with Musa is Yusha ibn Nun.",
    changeAr: "وقد قصّ النبي ﷺ خبر موسى والخضر كاملًا وسمّى الفتى في القصّ — وهو حديث ابن عباس في البخاري، وفيه أن فتى موسى هو يوشع بن نون.",
    greatest: "The Prophet ﷺ also told of a prophet who fought and told his people not to follow him if they had certain ties holding them back, and the sun was held back for him until Allah gave him victory. The Prophet ﷺ said the sun was never held back for any human being except for him.",
    greatestAr: "وأخبر النبي ﷺ عن نبيٍّ غزا فقال لقومه: لا يتبعني رجلٌ له كذا وكذا، وأنّ الشمس حُبست له حتى فتح الله عليه. وقال النبي ﷺ: إن الشمس لم تُحبس على بشرٍ إلا له.",
    death: "That hadith does not name him in the two Sahihs; the identification with Yusha comes from the scholars of tafsir and the histories. So it is given here as what it is: an authentic hadith, with an identification that is not itself part of the hadith.",
    deathAr: "وهذا الحديث لم يُسمِّه في الصحيحين، وإنما جاء تعيينه بيوشع من كلام المفسّرين وكتب التاريخ. فيُذكر هنا على وجهه: حديثٌ صحيح، وتعيينٌ ليس من الحديث نفسه.",
    sources: [
      "The young man with Musa, and the forgotten fish: Surah Al-Kahf (18:60-64) — Quran",
      "The full account, with the servant named: Sahih al-Bukhari, Book of Knowledge, Hadith 122 — Sahih",
      "The sun held back for a prophet: Sahih al-Bukhari, Hadith 3124 — Sahih, agreed upon",
      "Identifying that prophet as Yusha: tafsir and historical accounts — NOT part of the hadith itself"
    ]
  },

  "samuel": {
    before: "He is not named in the Quran either — but the event he is known for is told in it in detail, and told without his name: the chiefs of the Children of Israel after Musa who asked their prophet to appoint a king for them.",
    beforeAr: "ولم يُسمَّ في القرآن أيضًا — لكن الحادثة التي اشتُهر بها مقصوصةٌ فيه بتفصيل، ومن غير تسميته: الملأ من بني إسرائيل من بعد موسى إذ قالوا لنبيٍّ لهم ابعث لنا مَلِكًا.",
    message: "That leadership is given by Allah on His measure, not on people's measure of wealth and lineage.",
    messageAr: "أن المُلك يُؤتيه الله بميزانه لا بميزان الناس في المال والنسب.",
    islam: "They asked for a king so they could fight in the way of Allah. He warned them: is it possible that if fighting is prescribed for you, you will not fight? They insisted — and when it was prescribed, they turned away, except a few.",
    islamAr: "سألوا مَلِكًا ليقاتلوا في سبيل الله، فحذّرهم: هل عسيتم إن كُتب عليكم القتال ألّا تقاتلوا؟ فأصرّوا — فلمّا كُتب عليهم تولّوا إلا قليلًا منهم.",
    change: "He appointed Talut, and they objected on exactly the grounds people always object on: how can he have kingship over us when we are more worthy of it than him, and he has not been given abundance of wealth? He answered: Allah has chosen him over you and increased him in knowledge and stature.",
    changeAr: "فبعث لهم طالوت، فاعترضوا بالحجّة التي يعترض بها الناس دائمًا: أنّى يكون له المُلك علينا ونحن أحقّ بالمُلك منه ولم يُؤتَ سَعةً من المال؟ فقال: إن الله اصطفاه عليكم وزاده بسطةً في العلم والجسم.",
    greatest: "That he held to the choice Allah made and did not soften it to please the chiefs — and the outcome proved it, when the small company that stayed with Talut overcame the large one, and Dawud killed Jalut.",
    greatestAr: "أنه ثبت على اختيار الله ولم يُداهن الملأ فيه — وصدّقت العاقبة ذلك، إذ غلبت الفئة القليلة التي ثبتت مع طالوت الفئة الكثيرة، وقتل داودُ جالوت.",
    death: "Nothing about his death is established in the Quran or the two Sahihs. His name comes from the histories and from the accounts of the People of the Book, and it is recorded here as that and nothing more.",
    deathAr: "لم يثبت شيءٌ عن وفاته في القرآن ولا في الصحيحين. واسمه إنما جاء من كتب التاريخ وأخبار أهل الكتاب، ويُذكر هنا على أنه كذلك لا أكثر.",
    sources: [
      "They said to a prophet of theirs: appoint for us a king: Surah Al-Baqarah (2:246) — Quran",
      "The objection about wealth, and Allah's answer: Surah Al-Baqarah (2:247) — Quran",
      "The river, the small company, and Dawud killing Jalut: Surah Al-Baqarah (2:249-251) — Quran",
      "The name Shamwil/Samuel: historical accounts, e.g. Ibn Kathir — historical sira, NOT hadith"
    ]
  },

  "danyal": {
    before: "He is not mentioned in the Quran at all, and not in the two Sahihs. He is known from the histories as a prophet among the Children of Israel in the time of the Babylonian exile.",
    beforeAr: "لم يُذكر في القرآن البتّة، ولا في الصحيحين. وإنما عُرف من كتب التاريخ نبيًّا في بني إسرائيل زمن السبي البابلي.",
    message: "Worship Allah alone — the message of every prophet.",
    messageAr: "عبادة الله وحده — رسالة كل نبيّ.",
    islam: "The account most often given about him in Muslim sources is not about his life at all but about what happened long after his death, in the time of the Caliph Omar رضي الله عنه.",
    islamAr: "وأشهر ما يُنقل عنه في مصادر المسلمين ليس من حياته، بل مما جرى بعد وفاته بزمنٍ طويل، في خلافة عمر رضي الله عنه.",
    change: "When Tustar was conquered, a body was found which the people there venerated. The report says Omar رضي الله عنه ordered that it be buried in a concealed place, and that several graves be dug so that nobody would know which one it was — precisely so that it would not become an object of veneration.",
    changeAr: "لمّا فُتحت تُستر وُجد جسدٌ كان أهلها يعظّمونه، ففي الخبر أن عمر رضي الله عنه أمر أن يُدفن في موضعٍ خفيّ، وأن تُحفر قبورٌ عدّة حتى لا يُعرف أيّها هو — قطعًا لأن يُتّخذ معبودًا من دون الله.",
    greatest: "That report is in Musannaf Ibn Abi Shaybah and in the histories. It is NOT in the Quran and NOT in the two Sahihs. The lesson taken from it — that graves are not made into places of veneration — is itself firmly established in the two Sahihs by other texts.",
    greatestAr: "وهذا الخبر في مصنّف ابن أبي شيبة وكتب التاريخ، وليس في القرآن ولا في الصحيحين. وأما المعنى المستفاد منه — ألّا تُتّخذ القبور مواضع تعظيمٍ وعبادة — فثابتٌ في الصحيحين بنصوصٍ أخرى.",
    death: "So the honest summary is short: a prophet named in the histories, not in revelation; and the one story Muslims usually tell about him is a story about Omar رضي الله عنه guarding the worship of Allah, not a story about Danyal.",
    deathAr: "فالخلاصة المنصفة قصيرة: نبيٌّ ذُكر في كتب التاريخ لا في الوحي؛ والقصّة التي يرويها المسلمون عنه غالبًا هي في الحقيقة قصّةُ عمر رضي الله عنه وهو يحمي التوحيد، لا قصّةُ دانيال.",
    sources: [
      "The discovery at Tustar in the caliphate of Omar: Musannaf Ibn Abi Shaybah and historical accounts — historical sira, NOT hadith",
      "Not taking graves as places of worship: Sahih al-Bukhari, Hadith 435 and Sahih Muslim — Sahih, agreed upon",
      "His prophethood and his life: historical accounts only — NOT established in the Quran or the two Sahihs"
    ]
  },

  "muhammad": {
    before: "He was born in Makkah, an orphan before he was born and motherless at six. He never worshipped an idol, never drank, never lied — and his people, who later fought him, called him Al-Amin, the trustworthy one, before he ever claimed anything. When the Kaaba was rebuilt and the tribes nearly went to war over who would place the Black Stone, they accepted his judgement: he laid it on a cloak and had every tribe carry a corner.",
    beforeAr: "وُلد بمكة يتيمًا قبل أن يُولد، وماتت أمّه وله ستّ سنين. لم يعبد صنمًا قطّ، ولم يشرب خمرًا، ولم يكذب — وقد سمّاه قومه الذين قاتلوه بعدُ «الأمين» قبل أن يدّعي شيئًا. ولمّا أعادت قريش بناء الكعبة وكادوا يقتتلون في وضع الحجر الأسود رضوا بحكمه، فبسط رداءه ووضعه فيه وأمر كل قبيلةٍ أن تأخذ بطرف.",
    message: "That there is no god but Allah, and that he is His Messenger — and that this is not a new religion but the same one Nuh, Ibrahim, Musa and Isa were sent with. Say: I am not something new among the messengers.",
    messageAr: "أن لا إله إلا الله وأنه رسول الله — وأن هذا ليس دينًا جديدًا، بل هو دين نوحٍ وإبراهيم وموسى وعيسى. قل: ما كنتُ بِدْعًا من الرسل.",
    islam: "It began in the cave of Hira at forty, with an angel who seized him and said: read. He said: I am not a reader. Three times, until the first five verses came down. He came home shaking and said to Khadijah: cover me, cover me — and she answered with the sentence that steadied him: never — by Allah, Allah will never disgrace you. You keep the ties of kinship, you carry the burden of others, you give to the poor, you honour the guest and you help against the calamities of truth.",
    islamAr: "ابتدأ الأمر في غار حراء وله أربعون سنة، بمَلَكٍ غطّه وقال: اقرأ. قال: ما أنا بقارئ. ثلاثًا، حتى نزلت الآيات الخمس الأُوَل. فرجع يرجف فؤاده وقال لخديجة: زمّلوني زمّلوني — فأجابته بما ثبّته: كلا والله لا يُخزيك الله أبدًا، إنك لتصل الرحم، وتحمل الكَلّ، وتُكسب المعدوم، وتَقري الضيف، وتُعين على نوائب الحق.",
    change: "Thirteen years in Makkah of being mocked, boycotted in a valley until they ate leaves, and losing Khadijah and Abu Talib in one year. At Ta'if he was stoned by children until his sandals filled with blood, and when the angel of the mountains offered to crush the town he refused and asked instead for their children. Then the migration to Madinah, and a state built by a man who still mended his own sandals and milked his own goat.",
    changeAr: "ثلاث عشرة سنةً بمكة في السخرية والحصار في الشِّعب حتى أكلوا ورق الشجر، وفقد خديجة وأبا طالب في عامٍ واحد. وبالطائف رُمي بالحجارة حتى دميت قدماه، ولمّا عرض عليه ملَك الجبال أن يُطبق عليهم الأخشبين أبى وسأل لأبنائهم. ثم كانت الهجرة إلى المدينة، وقامت دولةٌ على يد رجلٍ ظلّ يخصف نعله ويحلب شاته بيده.",
    greatest: "The day he entered Makkah with ten thousand men, in total power over the people who had driven him out, killed his companions and tried to kill him. He asked them: what do you think I will do with you? They said: a noble brother and the son of a noble brother. He said: go — you are free. Not one execution for what had been done to him.",
    greatestAr: "يوم دخل مكة في عشرة آلاف، وقد صار له عليهم كل سلطان — وهم الذين أخرجوه وقتلوا أصحابه وحاولوا قتله — فقال لهم: ما ترون أني فاعلٌ بكم؟ قالوا: أخٌ كريم وابن أخٍ كريم. قال: اذهبوا فأنتم الطلقاء. ولم يُقتل أحدٌ ثأرًا لما صُنع به.",
    death: "He died in Aishah's room with his head on her chest, at sixty-three, after a farewell sermon in which he asked the people three times whether he had conveyed the message, and made them the witnesses. He left no gold and no silver — his shield was in pledge with a Jew for barley taken for his family. His last words were: rather, the highest Companion. And when Omar could not accept that he had died, Abu Bakr stood and said: whoever worshipped Muhammad, Muhammad has died; whoever worships Allah, Allah is alive and does not die.",
    deathAr: "مات في بيت عائشة ورأسه على صدرها وله ثلاثٌ وستون سنة، بعد خطبة الوداع التي سألهم فيها ثلاثًا: هل بلّغت؟ وأشهدهم على ذلك. ولم يترك دينارًا ولا درهمًا، ودرعه مرهونةٌ عند يهوديٍّ في شعيرٍ أخذه لأهله. وكان آخر كلامه: بل الرفيق الأعلى. ولمّا لم يُصدّق عمر أنه مات قام أبو بكر فقال: من كان يعبد محمدًا فإن محمدًا قد مات، ومن كان يعبد الله فإن الله حيٌّ لا يموت.",
    sources: [
      "Al-Amin and the Black Stone: historical sira accounts (Ibn Ishaq, Ibn Kathir) — historical sira, NOT hadith",
      "The cave of Hira and Khadijah's words: Sahih al-Bukhari, Book of the Beginning of Revelation, Hadith 3 — Sahih, agreed upon",
      "The first five verses: Surah Al-Alaq (96:1-5) — Quran",
      "Ta'if and the angel of the mountains: Sahih al-Bukhari, Hadith 3231 — Sahih, agreed upon",
      "Mending his sandals and serving his family: Sahih al-Bukhari, Hadith 676 — Sahih",
      "You are free, on the conquest of Makkah: historical sira accounts — historical sira, NOT hadith; his forbearance that day is established in the two Sahihs in other wordings",
      "Have I conveyed? Sahih al-Bukhari, Book of Hajj, Hadith 1741 — Sahih, agreed upon",
      "His shield in pledge for barley: Sahih al-Bukhari, Hadith 2916 — Sahih",
      "Died with his head on her chest; the highest Companion: Sahih al-Bukhari, Hadith 4449 and 4463 — Sahih",
      "Abu Bakr's words on his death: Sahih al-Bukhari, Hadith 3667 — Sahih",
      "I am not something new among the messengers: Surah Al-Ahqaf (46:9) — Quran"
    ]
  },

  "uthman": {
    before: "He was a wealthy merchant of Banu Umayyah, known before Islam for a modesty so marked that people commented on it. He was among the earliest to believe, brought by Abu Bakr رضي الله عنه.",
    beforeAr: "كان تاجرًا موسرًا من بني أميّة، عُرف قبل الإسلام بحياءٍ شديدٍ يتحدّث به الناس. وأسلم في أوائل من أسلم على يد أبي بكرٍ رضي الله عنه.",
    islam: "He is called Dhun-Nurayn — the man of the two lights — because he married two daughters of the Prophet ﷺ, Ruqayyah and then Umm Kulthum. The Prophet ﷺ said of him: should I not feel shy before a man before whom the angels feel shy?",
    islamAr: "ويُسمّى ذا النورين لأنه تزوّج ابنتَي النبي ﷺ: رقيّة ثم أمّ كلثوم. وقال فيه النبي ﷺ: ألا أستحيي من رجلٍ تستحيي منه الملائكة؟",
    change: "His wealth stopped being his. He bought the well of Rumah and gave it to the Muslims when they had to buy their water. He equipped the army of Hardship at Tabuk almost single-handedly, and the Prophet ﷺ said: nothing will harm Osman after today, whatever he does.",
    changeAr: "لم يعد ماله له. اشترى بئر رومة وسبّلها للمسلمين وكانوا يشترون ماءهم. وجهّز جيش العُسرة في تبوك حتى كفاهم، فقال النبي ﷺ: ما ضرّ عثمان ما عمل بعد اليوم.",
    greatest: "The pledge of Ridwan at Hudaybiyyah. He was sent into Makkah as the envoy, word came back that he had been killed, and the Prophet ﷺ took the pledge of the companions under the tree to avenge him — and pledged for Osman with his own hand, saying: this is for Osman. Allah revealed His pleasure with those who pledged that day.",
    greatestAr: "بيعة الرضوان بالحديبية. أُرسل إلى مكة سفيرًا فبلغهم أنه قُتل، فبايع النبي ﷺ أصحابه تحت الشجرة على قتالهم — وبايع عن عثمان بيده وقال: هذه عن عثمان. وأنزل الله رضاه عن المبايعين يومئذ.",
    death: "He was killed in his own house while fasting, with the Quran open in front of him, by rebels who besieged him. He had refused to let his supporters fight for him, saying he would not be the first to shed Muslim blood over himself. The Prophet ﷺ had told him years before that Allah would clothe him in a shirt, and that if people wanted him to take it off he should not — and had said he would face a trial.",
    deathAr: "قُتل في داره وهو صائمٌ والمصحف بين يديه، على يد من حاصره من أهل الفتنة. وكان قد منع أنصاره من القتال عنه وقال: لا أكون أول من أراق دم المسلمين في نفسه. وقد أخبره النبي ﷺ قبل ذلك بسنين أن الله سيُقمّصه قميصًا، فإن أرادوه على خلعه فلا يخلعه، وأخبره أنه سيُبتلى.",
    sources: [
      "The angels feel shy before him: Sahih Muslim, Book of the Merits of the Companions — Sahih",
      "The well of Rumah and the army of Tabuk; nothing will harm him after today: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "The pledge of Ridwan and pledging for Osman: Sahih al-Bukhari, Hadith 3698 — Sahih",
      "Allah's pleasure with those who pledged: Surah Al-Fath (48:18) — Quran",
      "The shirt Allah would clothe him in: Jami' at-Tirmidhi and Sunan Ibn Majah — outside the two Sahihs, authenticated by al-Albani",
      "The circumstances of his killing: historical accounts — historical sira, not hadith"
    ]
  },

  "fatimah": {
    before: "She was the youngest daughter of the Prophet ﷺ, born before prophethood, and she grew up watching what was done to her father. As a girl she pulled the filth off his back when Quraysh threw it on him while he prayed, weeping while she did it.",
    beforeAr: "هي أصغر بنات النبي ﷺ، وُلدت قبل البعثة، ونشأت ترى ما يُصنع بأبيها. وكانت وهي صغيرة تُزيل عن ظهره الأذى الذي تُلقيه عليه قريش وهو ساجد، وهي تبكي.",
    islam: "She married Ali ibn Abi Talib رضي الله عنه, and her house had almost nothing in it. She came to her father asking for a servant because grinding the mill had blistered her hands — and he gave her tasbih instead, and told her it was better for her than a servant.",
    islamAr: "تزوّجت عليّ بن أبي طالبٍ رضي الله عنه، وكان بيتها لا يكاد يكون فيه شيء. وجاءت أباها تسأله خادمًا لأن الرحى أثّرت في يدها — فدلّها على التسبيح وقال إنه خيرٌ لها من خادم.",
    change: "The Prophet ﷺ said of her: Fatimah is a piece of me — whoever angers her angers me. And he said she is the leader of the women of the believers, or of the women of this nation.",
    changeAr: "قال فيها النبي ﷺ: فاطمة بَضعةٌ مني، من أغضبها أغضبني. وقال: إنها سيّدة نساء المؤمنين، أو سيّدة نساء هذه الأمة.",
    greatest: "The last conversation. In his final illness he whispered something to her and she wept, then whispered again and she laughed. She would not say what it was until after he died: he had told her he would not survive that illness, so she wept — then that she would be the first of his family to follow him, so she laughed.",
    greatestAr: "آخر حديثٍ بينهما. أسرّ إليها في مرضه شيئًا فبكت، ثم أسرّ إليها فضحكت. ولم تُخبر بذلك حتى مات: أخبرها أنه لا يقوم من مرضه فبكت، ثم أخبرها أنها أول أهله لحوقًا به فضحكت.",
    death: "She died six months after her father, the first of his household to follow him, exactly as he had told her. She was in her twenties.",
    deathAr: "ماتت بعد أبيها بستة أشهر، أول أهله لحوقًا به كما أخبرها، وهي في العشرينيات من عمرها.",
    sources: [
      "The mill and the tasbih: Sahih al-Bukhari, Hadith 5362 — Sahih, agreed upon",
      "Fatimah is a piece of me: Sahih al-Bukhari, Hadith 3714 — Sahih, agreed upon",
      "Leader of the women of the believers: Sahih al-Bukhari, Hadith 3624 — Sahih",
      "The whisper, the weeping and the laughing: Sahih al-Bukhari, Hadith 3623-3624 — Sahih, agreed upon",
      "Pulling the filth from his back: Sahih al-Bukhari, Hadith 240 — Sahih"
    ]
  },

  "ibn-abbas": {
    before: "He was the Prophet's ﷺ cousin, a boy when the Prophet ﷺ died — about thirteen. He was young enough that people did not take him seriously, and old enough to have heard.",
    beforeAr: "هو ابن عمّ النبي ﷺ، وكان غلامًا حين توفي النبي ﷺ، نحو ثلاث عشرة سنة. كان أصغر من أن يُلتفت إليه، وأكبر من أن يفوته السماع.",
    islam: "The Prophet ﷺ pulled him close and made a supplication for him that shaped his whole life: O Allah, give him understanding of the religion and teach him the interpretation.",
    islamAr: "ضمّه النبي ﷺ إليه ودعا له دعوةً صاغت حياته كلّها: اللهم فقّهه في الدين وعلّمه التأويل.",
    change: "After the Prophet ﷺ died he went after knowledge like a man chasing something escaping. He would go to a companion's door and, rather than wake him, lie down on the ground with his cloak over his face while the wind blew dust on him, waiting for him to come out. The man would say: cousin of the Messenger of Allah, why did you not send for me? He would say: I am the one who should come to you.",
    changeAr: "ولمّا توفي النبي ﷺ طلب العلم طلب من يخشى فواته. كان يأتي باب الصحابي فلا يوقظه، بل يضطجع على بابه ورداؤه على وجهه تسفي عليه الريح التراب حتى يخرج. فيقول له: يا ابن عمّ رسول الله، ألا أرسلتَ إليّ فآتيك؟ فيقول: أنا أحقّ أن آتيك.",
    greatest: "Omar رضي الله عنه used to seat him in the council of the veterans of Badr, and when the older men objected he tested them all with a question about a surah — and the boy answered better than any of them. Omar said to them: this is what I knew of him.",
    greatestAr: "كان عمر رضي الله عنه يُدخله مع أشياخ بدر، فلمّا وجد بعضهم في أنفسهم سألهم جميعًا عن سورة، فأجاب الغلام بما لم يُجيبوا به. فقال لهم عمر: هذا الذي علمتُ منه.",
    death: "He became the interpreter of the Quran for the whole nation — the man later scholars quote first in tafsir. He went blind in old age and said the light of his heart had not gone. He died in at-Ta'if.",
    deathAr: "فصار ترجمان القرآن للأمّة كلّها، وهو أول من يُنقل عنه في التفسير عند من جاء بعده. وكُفّ بصره في آخر عمره فقال: إن يأخذ الله من عينيّ نورهما ففي لساني وقلبي نور. وتوفي بالطائف.",
    sources: [
      "O Allah, give him understanding of the religion: Sahih al-Bukhari, Hadith 143 — Sahih; and teach him the interpretation: Sahih Muslim",
      "Omar seating him with the veterans of Badr, and the question about the surah: Sahih al-Bukhari, Hadith 4970 — Sahih",
      "Waiting at the doors of the companions: historical accounts of his life — historical sira, not hadith",
      "His blindness and his death at at-Ta'if: historical accounts — historical sira, not hadith"
    ]
  },

  "umm-salamah": {
    before: "Hind bint Abi Umayyah, of a noble Makkan family. She and her husband Abu Salamah were among the first Muslims and emigrated twice — to Abyssinia, and then towards Madinah.",
    beforeAr: "هي هند بنت أبي أميّة، من بيتٍ شريفٍ بمكة. أسلمت هي وزوجها أبو سلمة في أوائل المسلمين، وهاجرا الهجرتين: إلى الحبشة ثم إلى المدينة.",
    islam: "When they set out for Madinah her family took her from her husband and his family took the child, and she was left alone. She went out every morning to the valley and wept until a man of her people shamed them into letting her go — a year later.",
    islamAr: "لمّا خرجا إلى المدينة انتزعها أهلها من زوجها وانتزع أهله الولد، فبقيت وحدها. فكانت تخرج كل غداةٍ إلى الأبطح فتبكي حتى رقّ لها رجلٌ من قومها فعنّفهم، فخلّوا سبيلها — بعد سنة.",
    change: "Abu Salamah died of a wound from Uhud. She had learned from the Prophet ﷺ the words to say at a calamity, and she said them — and privately thought: who could be better than Abu Salamah? Then she was married to the Prophet ﷺ.",
    changeAr: "ومات أبو سلمة من جرحٍ أصابه بأُحد. وكانت قد تعلّمت من النبي ﷺ ما يُقال عند المصيبة فقالته — وقالت في نفسها: ومن خيرٌ من أبي سلمة؟ ثم تزوّجها النبي ﷺ.",
    greatest: "Hudaybiyyah. When the treaty was written and the Prophet ﷺ told the companions to slaughter and shave, not one man moved, because they were crushed by the terms. He came into her tent distressed. She said: go out, say nothing to anyone, slaughter your animal and call your barber. He did — and when they saw it, they got up and did the same, almost trampling one another. Her advice saved the day.",
    greatestAr: "يوم الحديبية. لمّا كُتب الصلح وأمر النبي ﷺ أصحابه أن ينحروا ويحلقوا لم يقم منهم رجل، لِما وجدوا في أنفسهم من الشرط. فدخل عليها مغمومًا، فقالت: اخرج ولا تكلّم أحدًا منهم كلمة حتى تنحر بُدنك وتدعو حالقك. ففعل — فلمّا رأوا ذلك قاموا فنحروا وحلق بعضهم بعضًا حتى كاد بعضهم يقتل بعضًا غمًّا. فكان رأيها فرَج ذلك اليوم.",
    death: "She was one of the last of the Mothers of the Believers to die, and lived long enough to hear of the killing of al-Husayn. Much hadith is narrated from her.",
    deathAr: "وكانت من آخر أمهات المؤمنين موتًا، وعاشت حتى بلغها مقتل الحسين. وروت عن النبي ﷺ حديثًا كثيرًا.",
    sources: [
      "Her separation from her husband and child at the hijrah: historical sira accounts (Ibn Ishaq, Ibn Kathir) — historical sira, not hadith",
      "The words at a calamity, and 'who is better than Abu Salamah': Sahih Muslim, Book of Funerals — Sahih",
      "Her advice at Hudaybiyyah: Sahih al-Bukhari, Book of Conditions, Hadith 2731-2732 — Sahih",
      "Her long life and narrations: historical accounts — historical sira, not hadith"
    ]
  },

  "zubayr": {
    before: "Az-Zubayr ibn al-Awwam, cousin of the Prophet ﷺ through his aunt Safiyyah, and nephew of Khadijah رضي الله عنها. He became Muslim at about fifteen, one of the very first.",
    beforeAr: "هو الزبير بن العوّام، ابن عمّة النبي ﷺ صفيّة، وابن أخي خديجة رضي الله عنها. أسلم وهو ابن خمس عشرة سنة تقريبًا، في أوائل من أسلم.",
    islam: "He was tortured for it by his own uncle, who would wrap him in a mat and smoke him under it, saying: return to disbelief. He said: I will never disbelieve.",
    islamAr: "فعُذّب على ذلك، وكان عمّه يلفّه في حصيرٍ ويُدخّن عليه ويقول: ارجع إلى الكفر. فيقول: لا أكفر أبدًا.",
    change: "He was the first man in Islam to draw a sword in the way of Allah — on a false rumour in Makkah that the Prophet ﷺ had been killed. He came out with the blade drawn, and when he found him alive the Prophet ﷺ asked what was wrong, and prayed for him.",
    changeAr: "وهو أول من سلّ سيفًا في سبيل الله؛ إذ شاعت بمكة إشاعةٌ أن النبي ﷺ قُتل، فخرج شاهرًا سيفه، فلمّا لقيه حيًّا سأله النبي ﷺ ما شأنه، ودعا له.",
    greatest: "At the Trench, when the Prophet ﷺ asked who would bring him news of Banu Qurayzah, az-Zubayr volunteered — three times, each time the call was repeated. The Prophet ﷺ said: every prophet has a disciple, and my disciple is az-Zubayr.",
    greatestAr: "يوم الخندق، لمّا قال النبي ﷺ: من يأتيني بخبر بني قريظة؟ قال الزبير: أنا — ثلاثًا، كلّما أعاد النداء. فقال النبي ﷺ: إن لكل نبيٍّ حواريًّا، وحواريّ الزبير.",
    death: "He was one of the ten given the news of Paradise. He was killed after the Battle of the Camel, having already withdrawn from the fighting, by a man who followed him — and the Prophet ﷺ had said of his killer that he would be in the Fire.",
    deathAr: "وهو أحد العشرة المبشّرين بالجنة. وقُتل بعد وقعة الجمل وقد اعتزل القتال، قتله رجلٌ تبعه — وقد قال النبي ﷺ في قاتله: بشّر قاتل ابن صفيّة بالنار.",
    sources: [
      "My disciple is az-Zubayr: Sahih al-Bukhari, Hadith 2846 and 3719 — Sahih, agreed upon",
      "One of the ten given the news of Paradise: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "Give the killer of the son of Safiyyah news of the Fire: Musnad Ahmad and others — outside the two Sahihs",
      "His torture by his uncle, and drawing his sword in Makkah: historical sira accounts — historical sira, not hadith"
    ]
  },

  "talha": {
    before: "Talha ibn Ubaydullah, a merchant of Quraysh who was away trading in Syria when Islam began. A monk there asked him about a prophet expected in Makkah — and he came home to find it had already happened.",
    beforeAr: "هو طلحة بن عبيد الله، تاجرٌ من قريش كان بالشام حين ابتدأ الإسلام. سأله راهبٌ هناك عن نبيٍّ يُنتظر خروجه بمكة — فقدِم فوجد الأمر قد وقع.",
    islam: "He became Muslim through Abu Bakr رضي الله عنه, and the two of them were tied together with one rope by a man of Quraysh to punish them for it. They were called the two who were tied.",
    islamAr: "أسلم على يد أبي بكرٍ رضي الله عنه، فقُرن بينهما في حبلٍ واحد رجلٌ من قريش عقوبةً لهما، فكانا يُسمّيان القرينين.",
    change: "At Uhud, when the line broke and the Prophet ﷺ was exposed, Talha put himself between him and the arrows. He was struck more than seventy times and his hand was left paralysed after he shielded the Prophet's ﷺ face with it.",
    changeAr: "ويوم أُحد لمّا انكشف الناس وبقي النبي ﷺ جعل طلحة نفسه دونه يقيه النبل، فأصابته بضعٌ وسبعون ضربة، وشُلّت يده حين وقى بها وجه النبي ﷺ.",
    greatest: "That day. Abu Bakr رضي الله عنه used to say: that whole day was Talha's. And the Prophet ﷺ said of him on it: whoever wants to look at a martyr walking on the earth, let him look at Talha ibn Ubaydullah.",
    greatestAr: "ذلك اليوم. كان أبو بكرٍ رضي الله عنه يقول: ذاك يومٌ كلّه لطلحة. وقال فيه النبي ﷺ: من سرّه أن ينظر إلى شهيدٍ يمشي على وجه الأرض فلينظر إلى طلحة بن عبيد الله.",
    death: "He was one of the ten given the news of Paradise, and called Talha the Generous for how much he gave away. He was killed at the Battle of the Camel.",
    deathAr: "وهو أحد العشرة المبشّرين بالجنة، ويُلقّب بطلحة الجواد لكثرة عطائه. وقُتل يوم الجمل.",
    sources: [
      "Shielding the Prophet ﷺ at Uhud and his paralysed hand: Sahih al-Bukhari, Hadith 4063 — Sahih",
      "A martyr walking on the earth: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "That day was all Talha's: historical accounts — historical sira, not hadith",
      "One of the ten given the news of Paradise: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani"
    ]
  },

  "saad-waqqas": {
    before: "Sa'd ibn Abi Waqqas became Muslim at seventeen, among the first handful. His mother, to break him, swore she would not eat or drink until he left Islam — and she began to starve in front of him.",
    beforeAr: "أسلم سعد بن أبي وقاص وهو ابن سبع عشرة سنة، في أوائل من أسلم. فحلفت أمّه لتردّه ألّا تأكل ولا تشرب حتى يترك دينه — وأخذت تجوع أمام عينيه.",
    islam: "He said to her: mother, if you had a hundred souls and they came out one by one, I would not leave this religion. Allah revealed about it: and if they strive to make you associate with Me, do not obey them — but accompany them in this world with kindness.",
    islamAr: "فقال لها: يا أمّه، لو كانت لكِ مئة نفسٍ فخرجت نفسًا نفسًا ما تركتُ ديني هذا. فأنزل الله فيه: وإن جاهداك على أن تُشرك بي ما ليس لك به علمٌ فلا تُطعهما، وصاحبهما في الدنيا معروفًا.",
    change: "He was the first man to shoot an arrow in the way of Allah, and at Uhud the Prophet ﷺ said to him the words he said to no one else: shoot, Sa'd — may my father and mother be your ransom.",
    changeAr: "وهو أول من رمى بسهمٍ في سبيل الله، وقال له النبي ﷺ يوم أُحد ما لم يقله لغيره: ارمِ سعد، فداك أبي وأمي.",
    greatest: "He led the army that conquered Persia at al-Qadisiyyah, and founded Kufa. And he was one of the few whose supplication was known to be answered, because the Prophet ﷺ had prayed: O Allah, answer Sa'd when he calls upon You.",
    greatestAr: "قاد الجيش الذي فتح فارس يوم القادسية، ومصّر الكوفة. وكان مُجاب الدعوة، فقد دعا له النبي ﷺ: اللهم استجب لسعدٍ إذا دعاك.",
    death: "He was one of the ten given the news of Paradise, one of the six Omar left the caliphate to decide among, and the last of them to die. He asked to be buried in a wool cloak he had kept from Badr.",
    deathAr: "وهو أحد العشرة المبشّرين بالجنة، وأحد الستة الذين جعل عمر الأمر شورى بينهم، وآخرهم موتًا. وأوصى أن يُكفَّن في جُبّةٍ من صوفٍ كان أبقاها من يوم بدر.",
    sources: [
      "His mother's hunger strike and the verse: Sahih Muslim, Book of the Merits of the Companions — Sahih; the verse is Surah Luqman (31:15)",
      "Shoot, Sa'd — may my father and mother be your ransom: Sahih al-Bukhari, Hadith 4055 — Sahih, agreed upon",
      "O Allah, answer Sa'd when he calls: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "Al-Qadisiyyah and the founding of Kufa: historical accounts — historical sira, not hadith",
      "The cloak from Badr: historical accounts — historical sira, not hadith"
    ]
  },

  "abu-ubaidah": {
    before: "Amir ibn Abdullah ibn al-Jarrah, of Quraysh, an early Muslim who emigrated to Abyssinia and then to Madinah.",
    beforeAr: "هو عامر بن عبد الله بن الجرّاح القرشي، أسلم قديمًا وهاجر إلى الحبشة ثم إلى المدينة.",
    islam: "At Badr his own father fought on the other side and kept seeking him out. He avoided him until he could not, and then he killed him. Allah revealed about men like him: you will not find a people who believe in Allah and the Last Day loving those who oppose Allah and His Messenger, even if they were their fathers.",
    islamAr: "ويوم بدرٍ كان أبوه في الصفّ الآخر وجعل يتصدّى له، فتحيّد عنه حتى لم يجد بُدًّا فقتله. فأنزل الله في أمثاله: لا تجد قومًا يؤمنون بالله واليوم الآخر يوادّون من حادّ الله ورسوله ولو كانوا آباءهم.",
    change: "At Uhud, when two rings of the Prophet's ﷺ helmet drove into his cheek, Abu Ubaidah pulled them out with his teeth — and lost two front teeth doing it. Abu Bakr رضي الله عنه, who was there, said no man's gap-toothed mouth was ever more beautiful.",
    changeAr: "ويوم أُحد لمّا دخلت حلقتان من المِغفر في وجنة النبي ﷺ نزعهما أبو عبيدة بأسنانه — فسقطت ثنيّتاه. قال أبو بكرٍ رضي الله عنه وكان حاضرًا: فما رأيتُ هَتْمًا قطّ أحسن منه.",
    greatest: "The Prophet ﷺ named him: every nation has a trustworthy one, and the trustworthy one of this nation is Abu Ubaidah ibn al-Jarrah. And when Omar رضي الله عنه was dying and was asked whom he would appoint, he said: if Abu Ubaidah were alive I would appoint him.",
    greatestAr: "سمّاه النبي ﷺ فقال: إن لكل أمّةٍ أمينًا، وأمين هذه الأمة أبو عبيدة بن الجرّاح. ولمّا حُضر عمر رضي الله عنه وسُئل عمّن يستخلف قال: لو كان أبو عبيدة حيًّا لاستخلفته.",
    death: "He commanded the armies in Syria, and when the plague of Amwas came he stayed with his men and refused to leave them. He died in it. He was one of the ten given the news of Paradise.",
    deathAr: "قاد جيوش الشام، ولمّا وقع طاعون عمواس أقام مع جنده وأبى أن يفارقهم، فمات فيه. وهو أحد العشرة المبشّرين بالجنة.",
    sources: [
      "The trustworthy one of this nation: Sahih al-Bukhari, Hadith 3744 — Sahih, agreed upon",
      "Pulling the rings from the Prophet's ﷺ cheek: Sahih al-Bukhari, Hadith 4075 — Sahih",
      "Killing his father at Badr and the verse: the verse is Surah Al-Mujadila (58:22) — Quran; the incident is from historical sira accounts, not hadith",
      "Omar's words about appointing him: historical accounts — historical sira, not hadith",
      "The plague of Amwas: historical accounts — historical sira, not hadith"
    ]
  },

  "abdur-rahman": {
    before: "Abdur-Rahman ibn Awf, one of the first eight to accept Islam, and one of the wealthiest men among the companions — but he arrived in Madinah with nothing at all.",
    beforeAr: "هو عبد الرحمن بن عوف، من الثمانية الأوائل في الإسلام، ومن أكثر الصحابة مالًا — وقد قدِم المدينة ولا شيء معه.",
    islam: "When the Prophet ﷺ paired the emigrants with the helpers, Sa'd ibn ar-Rabi' offered him half of everything he owned and to divorce one of his two wives so he could marry her. Abdur-Rahman's answer became famous: may Allah bless you in your family and your wealth — just show me the market.",
    islamAr: "لمّا آخى النبي ﷺ بين المهاجرين والأنصار عرض عليه سعد بن الربيع أن يُناصفه ماله وأن يُطلّق إحدى زوجتيه ليتزوّجها. فكان جوابه الذي سار به الركبان: بارك الله لك في أهلك ومالك، دُلّني على السوق.",
    change: "He went to the market and traded, and did not stop. Not long after, he came to the Prophet ﷺ with the trace of yellow perfume on him and said he had married a woman of the Ansar. The Prophet ﷺ said: hold a wedding feast, even with one sheep.",
    changeAr: "فذهب إلى السوق فاتّجر ولم يقف. فما لبث أن جاء النبي ﷺ وعليه أثر صُفرة فأخبره أنه تزوّج امرأةً من الأنصار، فقال النبي ﷺ: أولِم ولو بشاة.",
    greatest: "What he did with the money. He once sent a caravan of seven hundred camels loaded with goods into Madinah — the city shook with it — and gave the whole thing away. And he freed slaves in the hundreds. Aishah رضي الله عنها had heard the Prophet ﷺ say his household would be looked after by one of the trustworthy after him, and she named him.",
    greatestAr: "وما صنعه بالمال. أقبلت له عيرٌ سبعمائة راحلةٍ تحمل الطعام حتى ارتجّت المدينة، فتصدّق بها كلّها. وأعتق من الرقيق مئات. وقد سمعت عائشة رضي الله عنها من النبي ﷺ ما يدلّ على أمانته في أهله من بعده فسمّته.",
    death: "He was one of the ten given the news of Paradise, and one of the six of the council. He is remembered as the man who took himself out of the running for the caliphate and gave it to Osman.",
    deathAr: "وهو أحد العشرة المبشّرين بالجنة، وأحد أهل الشورى الستة. ويُذكر بأنه أخرج نفسه من الأمر وعقده لعثمان.",
    sources: [
      "Show me the market, and the wedding feast: Sahih al-Bukhari, Hadith 2048 and 3937 — Sahih, agreed upon",
      "One of the ten given the news of Paradise: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "The caravan and his giving: historical accounts — historical sira, not hadith",
      "Withdrawing from the caliphate in favour of Osman: historical accounts — historical sira, not hadith"
    ]
  },

  "said-ibn-zayd": {
    before: "Sa'id ibn Zayd was the son of a man who had rejected idols before Islam came — Zayd ibn Amr, who used to lean against the Kaaba and say: O Quraysh, by Allah, not one of you is on the religion of Ibrahim but me.",
    beforeAr: "هو سعيد بن زيد، ابن رجلٍ رفض الأصنام قبل مجيء الإسلام — زيد بن عمرو، الذي كان يُسند ظهره إلى الكعبة ويقول: يا معشر قريش، والله ما منكم على دين إبراهيم غيري.",
    islam: "Sa'id and his wife Fatimah bint al-Khattab — Omar's sister — became Muslim early and hid it. It was in their house that Omar رضي الله عنه came with his sword, heard the Quran being recited, and became Muslim.",
    islamAr: "أسلم سعيد وامرأته فاطمة بنت الخطاب — أخت عمر — قديمًا وكتما إسلامهما. وفي بيتهما دخل عمر رضي الله عنه بسيفه فسمع القرآن يُتلى فأسلم.",
    change: "He fought in all the battles except Badr — he had been sent out by the Prophet ﷺ on a scouting task and missed it, and the Prophet ﷺ gave him a share of the spoils anyway.",
    changeAr: "وشهد المشاهد كلّها إلا بدرًا؛ إذ كان قد بعثه النبي ﷺ في وجهٍ فلم يشهدها، وضرب له النبي ﷺ بسهمه معهم.",
    greatest: "A woman once accused him of taking part of her land. He said: how could I wrong her after what I heard from the Messenger of Allah ﷺ — whoever takes a handspan of land unjustly will have seven earths hung around his neck. Then he prayed: O Allah, if she is lying, blind her and kill her in her own land. She went blind, and later fell into a pit on that land and died.",
    greatestAr: "ادّعت عليه امرأةٌ أنه أخذ شيئًا من أرضها، فقال: كيف أظلمها وقد سمعتُ من رسول الله ﷺ: من أخذ شبرًا من الأرض ظلمًا طُوّقه من سبع أرضين. ثم دعا: اللهم إن كانت كاذبةً فأعمِ بصرها واقتلها في أرضها. فعميت، ثم وقعت في حفرةٍ في تلك الأرض فماتت.",
    death: "He was one of the ten given the news of Paradise, and among the last of them to die. He is buried in Madinah.",
    deathAr: "وهو أحد العشرة المبشّرين بالجنة، ومن آخرهم موتًا. ودُفن بالمدينة.",
    sources: [
      "Seven earths hung around his neck, and the woman's fate: Sahih al-Bukhari, Hadith 3198 and Sahih Muslim — Sahih, agreed upon",
      "His father Zayd ibn Amr at the Kaaba: Sahih al-Bukhari, Hadith 3826 — Sahih",
      "Omar's Islam in his house: historical sira accounts — historical sira, not hadith",
      "One of the ten given the news of Paradise: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani"
    ]
  },

  "ammar": {
    before: "Ammar ibn Yasir was the son of Yasir and Sumayyah, a family with no tribe to protect them — which is why they were tortured the way they were, in the open sand of Makkah at midday.",
    beforeAr: "هو عمّار بن ياسر، ابن ياسرٍ وسميّة، من أهل بيتٍ لا عشيرة تمنعهم — ولذلك عُذّبوا كما عُذّبوا، في رمضاء مكة في الظهيرة.",
    islam: "The Prophet ﷺ used to pass them while they were being tortured and could do nothing for them but say: patience, family of Yasir — your appointment is Paradise.",
    islamAr: "كان النبي ﷺ يمرّ بهم وهم يُعذَّبون فلا يملك لهم إلا أن يقول: صبرًا آل ياسر، فإن موعدكم الجنة.",
    change: "Under torture he said with his tongue what they wanted, and came to the Prophet ﷺ weeping. The Prophet ﷺ asked: how do you find your heart? He said: at rest with faith. He said: then if they do it again, do it again. And Allah revealed: except one who is compelled while his heart is content with faith.",
    changeAr: "وقد أُكره فقال بلسانه ما أرادوا، ثم جاء النبي ﷺ يبكي. فقال: كيف تجد قلبك؟ قال: مطمئنًّا بالإيمان. قال: فإن عادوا فعُد. وأنزل الله: إلا من أُكره وقلبه مطمئنٌّ بالإيمان.",
    greatest: "The Prophet ﷺ said, while they were carrying bricks to build the mosque and Ammar was carrying double: alas for Ammar — a transgressing party will kill him. He calls them to Paradise and they call him to the Fire. That sentence became a measure people used decades later to know which side was which.",
    greatestAr: "قال النبي ﷺ وهم ينقلون اللبن لبناء المسجد وعمّارٌ يحمل حِملين: ويح عمّار، تقتله الفئة الباغية، يدعوهم إلى الجنة ويدعونه إلى النار. فصارت هذه الجملة ميزانًا عرف به الناس بعد عقودٍ أيّ الفريقين على الحق.",
    death: "He was killed at Siffin, in his nineties, fighting on the side of Ali رضي الله عنه — and the hadith was remembered that day by everyone who heard it.",
    deathAr: "قُتل بصفّين وهو ابن أكثر من تسعين سنة، في صفّ عليٍّ رضي الله عنه — وذُكر الحديث يومئذٍ على كل لسان.",
    sources: [
      "Patience, family of Yasir: historical sira accounts — historical sira, not hadith",
      "How do you find your heart, and the verse: the verse is Surah An-Nahl (16:106) — Quran; the account is reported in tafsir and sira — outside the two Sahihs",
      "A transgressing party will kill him: Sahih al-Bukhari, Hadith 447 and Sahih Muslim — Sahih, agreed upon",
      "His death at Siffin: historical accounts — historical sira, not hadith"
    ]
  },

  "abu-dharr": {
    before: "Jundub ibn Junadah of the tribe of Ghifar — a tribe that lived by raiding caravans. He had already rejected idols on his own before he heard of the Prophet ﷺ.",
    beforeAr: "هو جندب بن جنادة من غِفار — وكانت قبيلةً تعيش على قطع الطريق. وقد ترك عبادة الأصنام من تلقاء نفسه قبل أن يسمع بالنبي ﷺ.",
    islam: "He sent his brother to Makkah to investigate, was not satisfied with the report, and went himself. He stayed a month in the sacred mosque with nothing to eat or drink but Zamzam water — and said he grew fat on it — until he found the Prophet ﷺ and became Muslim.",
    islamAr: "أرسل أخاه إلى مكة يتحسّس الخبر فلم يشفِه، فذهب بنفسه. فمكث بالمسجد شهرًا لا طعام له ولا شراب إلا ماء زمزم — قال: حتى تكسّرت عُكَن بطني — حتى لقي النبي ﷺ فأسلم.",
    change: "The Prophet ﷺ told him to keep it hidden. He went straight to the Kaaba and announced it at the top of his voice, and was beaten until he was left unconscious. He did it again the next day.",
    changeAr: "أمره النبي ﷺ أن يكتم إسلامه، فخرج إلى الكعبة فصرخ به بأعلى صوته، فضُرب حتى تُرك صريعًا. ثم عاد فعل ذلك من الغد.",
    greatest: "His refusal to keep anything. He held that gold and silver hoarded while people needed it was a sickness, and he lived it exactly — he owned almost nothing to the day he died. The Prophet ﷺ said of him: the earth does not carry, nor does the sky shade, a more truthful tongue than Abu Dharr.",
    greatestAr: "امتناعه عن أن يُبقي شيئًا. كان يرى كنز الذهب والفضة والناس محتاجون داءً، وعاش على ذلك بحذافيره — فما ملك شيئًا يُذكر إلى أن مات. وقال فيه النبي ﷺ: ما أقلّت الغبراء ولا أظلّت الخضراء أصدق لهجةً من أبي ذر.",
    death: "The Prophet ﷺ had told him he would live alone, die alone and be raised alone. He died at ar-Rabadhah in the desert with only his wife and a servant, and a passing caravan of Iraqis buried him — among them Abdullah ibn Mas'ud, who wept and said: the Messenger of Allah ﷺ spoke the truth.",
    deathAr: "وقد أخبره النبي ﷺ أنه يعيش وحده ويموت وحده ويُبعث وحده. فمات بالرَّبَذة في الصحراء وليس معه إلا امرأته وغلامه، فمرّ به ركبٌ من أهل العراق فدفنوه — وفيهم عبد الله بن مسعود، فبكى وقال: صدق رسول الله ﷺ.",
    sources: [
      "His month at the Kaaba on Zamzam, and announcing his Islam: Sahih Muslim, Book of the Merits of the Companions — Sahih",
      "The most truthful tongue: Jami' at-Tirmidhi and Sunan Ibn Majah — outside the two Sahihs, authenticated by al-Albani",
      "You will live alone and die alone: historical and hadith sources outside the two Sahihs",
      "His death at ar-Rabadhah: historical accounts — historical sira, not hadith"
    ]
  },

  "zaid": {
    before: "Zayd ibn Harithah was taken as a boy in a raid and sold as a slave. He ended up in the household of the Prophet ﷺ before prophethood, given to him by Khadijah رضي الله عنها.",
    beforeAr: "سُبي زيد بن حارثة غلامًا في غارةٍ فبِيع رقيقًا، فصار إلى بيت النبي ﷺ قبل البعثة، وهبته له خديجة رضي الله عنها.",
    islam: "His father and uncle found him and came with the ransom money. The Prophet ﷺ gave him the choice in front of them: go with them, or stay. He chose to stay — and said: I have seen from this man something that means I will never choose anyone over him. His father wept.",
    islamAr: "فجاء أبوه وعمّه بالفداء يطلبانه، فخيّره النبي ﷺ أمامهما: تذهب معهما أو تبقى. فاختار البقاء وقال: قد رأيتُ من هذا الرجل شيئًا ما أنا بالذي أختار عليه أحدًا. فبكى أبوه.",
    change: "He is the only companion named in the Quran by his own name — in the verse about his marriage and its ending. He was among the very first to become Muslim, and the Prophet ﷺ loved him openly.",
    changeAr: "وهو الصحابي الوحيد الذي ذُكر اسمه في القرآن — في آية زواجه وانتهائه. وكان من أول من أسلم، وكان النبي ﷺ يُظهر حبّه له.",
    greatest: "Being trusted with command. He led at Mu'tah against a far larger force, and the Prophet ﷺ had named the order of command in advance: Zayd, then Ja'far, then Abdullah ibn Rawahah. He was the first of the three to be killed.",
    greatestAr: "أن يُؤتمن على الإمارة. فقاد يوم مؤتة أمام جيشٍ يفوقه أضعافًا، وقد سمّى النبي ﷺ الأمراء قبل خروجهم: زيد، ثم جعفر، ثم عبد الله بن رواحة. وكان أولهم قتلًا.",
    death: "The Prophet ﷺ announced the deaths at Mu'tah to the people before any messenger arrived, and his eyes were overflowing as he named them one after the other.",
    deathAr: "ونعى النبي ﷺ قتلى مؤتة إلى الناس قبل أن يأتي خبرٌ من أحد، وعيناه تذرفان وهو يُسمّيهم واحدًا بعد واحد.",
    sources: [
      "Choosing the Prophet ﷺ over his father: historical sira accounts — historical sira, not hadith",
      "Named in the Quran: Surah Al-Ahzab (33:37) — Quran",
      "The command at Mu'tah, named in advance: Sahih al-Bukhari, Hadith 4261 — Sahih",
      "The Prophet ﷺ announcing their deaths with overflowing eyes: Sahih al-Bukhari, Hadith 1246 and 4262 — Sahih",
      "The Prophet's ﷺ love for him and his son Usama: Sahih al-Bukhari, Hadith 3730 — Sahih"
    ]
  },

  "jafar": {
    before: "Ja'far ibn Abi Talib, brother of Ali رضي الله عنه and cousin of the Prophet ﷺ — and the one people said resembled him most in appearance and in character.",
    beforeAr: "هو جعفر بن أبي طالب، أخو عليٍّ رضي الله عنه وابن عمّ النبي ﷺ — وكان أشبه الناس به خَلقًا وخُلقًا.",
    islam: "He led the emigrants to Abyssinia, and when Quraysh sent men to demand their return, it was Ja'far who stood before the Negus and spoke. He described what they had been and what the Prophet ﷺ had brought them, then recited the opening of Surah Maryam — and the Negus wept until his beard was wet, and refused to hand them over.",
    islamAr: "قاد المهاجرين إلى الحبشة، ولمّا أرسلت قريشٌ من يطلب ردّهم قام جعفرٌ بين يدي النجاشي فتكلّم، فوصف ما كانوا عليه وما جاءهم به النبي ﷺ، ثم قرأ صدر سورة مريم — فبكى النجاشي حتى اخضلّت لحيته، وأبى أن يُسلمهم.",
    change: "He came back years later, and he arrived on the very day Khaybar was opened. The Prophet ﷺ stood, embraced him, kissed him between the eyes and said: I do not know which of the two makes me happier — the opening of Khaybar or the coming of Ja'far.",
    changeAr: "ثم قدِم بعد سنين، ووافق قدومه يوم فتح خيبر. فقام النبي ﷺ فالتزمه وقبّل بين عينيه وقال: ما أدري بأيّهما أنا أُسرّ: بفتح خيبر أم بقدوم جعفر.",
    greatest: "Mu'tah. When Zayd was killed he took the banner and fought until his right hand was cut off, then took it in his left until that was cut off too, then held it between his upper arms until he was killed. More than ninety wounds were counted on him, all in his front.",
    greatestAr: "مؤتة. لمّا قُتل زيدٌ أخذ الراية فقاتل حتى قُطعت يمينه، فأخذها بشماله فقُطعت، فاحتضنها بعضُديه حتى قُتل. فعُدّ فيه بضعٌ وتسعون جراحة، كلّها في مُقبله.",
    death: "The Prophet ﷺ said Allah had given him two wings in place of his two arms, to fly with them in Paradise — and he is called Ja'far the Flyer, Dhul-Janahayn, ever since. He told the family of Ja'far to prepare food for themselves, because something had come to them that would occupy them.",
    deathAr: "فقال النبي ﷺ: إن الله أبدله بيديه جناحين يطير بهما في الجنة — فسُمّي جعفرًا الطيّار ذا الجناحين إلى اليوم. وأمر أن يُصنع لآل جعفر طعامٌ فقد أتاهم ما يشغلهم.",
    sources: [
      "Before the Negus and reciting Surah Maryam: historical sira accounts (Ibn Ishaq, Ibn Kathir) — historical sira, not hadith",
      "Khaybar or the coming of Ja'far: outside the two Sahihs, reported in the biographical works",
      "His wounds and holding the banner: Sahih al-Bukhari, Hadith 4261 and 4260 — Sahih",
      "Two wings in Paradise: Jami' at-Tirmidhi and al-Hakim — outside the two Sahihs, authenticated by al-Albani",
      "Prepare food for the family of Ja'far: Sunan Abu Dawud and at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani"
    ]
  },

  "muadh": {
    before: "Mu'adh ibn Jabal of the Khazraj, a young man of Madinah who became Muslim at about eighteen and was at the second pledge of al-Aqabah.",
    beforeAr: "هو معاذ بن جبل من الخزرج، فتًى من أهل المدينة أسلم وهو ابن ثماني عشرة سنة تقريبًا، وشهد بيعة العقبة الثانية.",
    islam: "The Prophet ﷺ said to him: Mu'adh, by Allah I love you. Then he told him never to leave saying at the end of every prayer: O Allah, help me to remember You, to thank You, and to worship You well.",
    islamAr: "قال له النبي ﷺ: يا معاذ، والله إني لأحبّك. ثم أوصاه ألّا يدع في دبر كل صلاةٍ أن يقول: اللهم أعنّي على ذكرك وشكرك وحُسن عبادتك.",
    change: "He was sent to Yemen as a teacher and a judge. The Prophet ﷺ asked him how he would judge; he said by the Book of Allah, then by the Sunnah, then he would exert his own judgement and not fall short — and the Prophet ﷺ struck his chest and praised Allah for it.",
    changeAr: "بُعث إلى اليمن معلّمًا وقاضيًا. فسأله النبي ﷺ بمَ يقضي؟ قال: بكتاب الله، ثم بسنّة رسوله، ثم أجتهد رأيي ولا آلو. فضرب النبي ﷺ صدره وحمد الله على ذلك.",
    greatest: "Riding behind the Prophet ﷺ on a donkey when he said: Mu'adh, do you know the right of Allah upon His servants, and the right of the servants upon Allah? Then he told him: the right of Allah is that they worship Him and associate nothing with Him; and their right upon Him is that He does not punish whoever associates nothing with Him. Mu'adh asked whether he should tell people, and was told not to, lest they rely on it.",
    greatestAr: "وهو رديف النبي ﷺ على حمار، قال له: يا معاذ، أتدري ما حقّ الله على عباده وما حقّ العباد على الله؟ ثم أخبره: حقّ الله أن يعبدوه ولا يُشركوا به شيئًا، وحقّهم عليه ألّا يُعذّب من لا يُشرك به شيئًا. فقال معاذ: أفلا أُبشّر الناس؟ قال: لا تُبشّرهم فيتّكلوا.",
    death: "The Prophet ﷺ said he would come on the Day of Resurrection ahead of the scholars by a stretch. He died in the plague of Amwas in Syria, still a young man.",
    deathAr: "وقال النبي ﷺ إنه يأتي يوم القيامة أمام العلماء برَتوة. ومات في طاعون عمواس بالشام وهو شابّ.",
    sources: [
      "Mu'adh, by Allah I love you, and the supplication: Sunan Abu Dawud and an-Nasa'i — outside the two Sahihs, authenticated by al-Albani",
      "How will you judge: Sunan Abu Dawud and at-Tirmidhi — outside the two Sahihs; scholars have discussed its chain",
      "The right of Allah upon His servants: Sahih al-Bukhari, Hadith 2856 and Sahih Muslim — Sahih, agreed upon",
      "Ahead of the scholars: reported outside the two Sahihs",
      "His death in the plague of Amwas: historical accounts — historical sira, not hadith"
    ]
  },

  "hafsa": {
    before: "Hafsa bint Omar ibn al-Khattab, raised in the house of the most forceful man among the companions, and like him in temperament.",
    beforeAr: "هي حفصة بنت عمر بن الخطاب، نشأت في بيت أشدّ الصحابة، وكانت على شيءٍ من طبعه.",
    islam: "Her husband died of wounds from Badr and she was widowed young. Omar offered her to Abu Bakr, who was silent, and to Osman, who declined — and Omar was hurt by it. Then the Prophet ﷺ married her, and Abu Bakr told Omar he had only been silent because he knew the Prophet ﷺ had mentioned her.",
    islamAr: "مات زوجها من جراحةٍ أصابته ببدر فتأيّمت شابّة. فعرضها عمر على أبي بكرٍ فصمت، وعلى عثمان فاعتذر، فوجد عمر في نفسه. ثم تزوّجها النبي ﷺ، فأخبره أبو بكرٍ أنه إنما صمت لأنه علم أن النبي ﷺ ذكرها.",
    change: "She was known for fasting and standing at night. When the Prophet ﷺ once separated from his wives, Jibril came to him and said: return Hafsa — she fasts much and stands in prayer much, and she is your wife in Paradise.",
    changeAr: "وكانت صوّامةً قوّامة. ولمّا اعتزل النبي ﷺ نساءه جاءه جبريل فقال: راجِع حفصة، فإنها صوّامةٌ قوّامة، وإنها زوجتك في الجنة.",
    greatest: "The Quran itself was entrusted to her. After Abu Bakr had it collected, the written pages were kept with Omar, and after him with Hafsa — and it was from her copy that Osman had the standard copies made and sent to the cities.",
    greatestAr: "أن المصحف أُودع عندها. فلمّا جُمع في عهد أبي بكرٍ كانت الصحف عند عمر، ثم عند حفصة — ومن مصحفها نسخ عثمان المصاحف وأرسلها إلى الأمصار.",
    death: "She died in Madinah. The safeguarding of the written Quran passed through her hands at the one moment it mattered most.",
    deathAr: "وماتت بالمدينة. وقد مرّ حفظ المصحف المكتوب بين يديها في اللحظة التي كان ذلك فيها أهمّ ما يكون.",
    sources: [
      "Omar offering her to Abu Bakr and Osman: Sahih al-Bukhari, Hadith 4005 and 5122 — Sahih",
      "Return Hafsa, she fasts and stands much: Sunan Abu Dawud, al-Hakim — outside the two Sahihs, authenticated by al-Albani",
      "The pages kept with her, and Osman copying from them: Sahih al-Bukhari, Hadith 4679 and 4987 — Sahih"
    ]
  },

  "sumayya": {
    before: "Sumayyah bint Khayyat was a slave woman in Makkah with no tribe and no protector — the lowest position a person could hold in that society.",
    beforeAr: "هي سميّة بنت خيّاط، أمَةٌ بمكة لا عشيرة لها ولا مانع — وهو أدنى ما يكون عليه إنسانٌ في ذلك المجتمع.",
    islam: "She was among the first seven to declare Islam openly. She, her husband Yasir and her son Ammar were taken out to the burning sand of Makkah at midday and tortured to make them recant.",
    islamAr: "كانت من أول سبعةٍ أظهروا الإسلام. فأُخرجت هي وزوجها ياسرٌ وابنها عمّار إلى رمضاء مكة في الظهيرة يُعذَّبون ليرجعوا.",
    change: "The Prophet ﷺ could give them nothing but the truth. He passed them and said: patience, family of Yasir — your appointment is Paradise.",
    changeAr: "ولم يكن النبي ﷺ يملك لهم إلا الحقّ، فكان يمرّ بهم فيقول: صبرًا آل ياسر، فإن موعدكم الجنة.",
    greatest: "She did not recant. Abu Jahl killed her with a spear — and she became the first person to be killed for Islam, before any battle, before any state, when there was nothing at all to gain by holding on.",
    greatestAr: "فلم ترجع. فطعنها أبو جهلٍ بحربةٍ فقتلها — فكانت أول شهيدةٍ في الإسلام، قبل أي غزوةٍ وقبل أي دولة، حين لم يكن في الثبات مطمعٌ بشيء.",
    death: "The first martyr in Islam was an elderly slave woman with nobody to defend her. Her son Ammar lived on, and the Prophet ﷺ foretold his killing too.",
    deathAr: "فأول شهيدٍ في الإسلام امرأةٌ مُسنّةٌ مملوكةٌ لا ناصر لها. وعاش ابنها عمّار، وأخبر النبي ﷺ بمقتله هو أيضًا.",
    sources: [
      "The torture of the family of Yasir and her killing: historical sira accounts (Ibn Ishaq, Ibn Sa'd, Ibn Kathir) — historical sira, NOT hadith",
      "Patience, family of Yasir: historical sira accounts — outside the two Sahihs",
      "Her son Ammar, and the transgressing party: Sahih al-Bukhari, Hadith 447 — Sahih, agreed upon"
    ]
  },

  "anas": {
    before: "Anas ibn Malik was ten years old when the Prophet ﷺ came to Madinah. His mother, Umm Sulaym, brought him and offered him as a servant — she had nothing else to give.",
    beforeAr: "كان أنس بن مالكٍ ابن عشر سنين حين قدِم النبي ﷺ المدينة. فجاءت به أمّه أمّ سليمٍ فأهدته خادمًا — ولم يكن عندها ما تُهدي غيره.",
    islam: "He served him for ten years. His testimony about those ten years is the most quoted description of the Prophet's ﷺ manners: he never once said uff to me, and never said of anything I did why did you do it, or of anything I did not do why did you not do it.",
    islamAr: "فخدمه عشر سنين. وشهادته عن تلك السنين أشهر ما وُصفت به أخلاق النبي ﷺ: ما قال لي أفٍّ قطّ، ولا قال لشيءٍ فعلته: لِمَ فعلتَ كذا؟ ولا لشيءٍ تركته: لِمَ تركتَ كذا؟",
    change: "His mother asked the Prophet ﷺ to pray for him, and he did: O Allah, increase his wealth and his children, and bless him in what You give him. Anas said afterwards that he was among the wealthiest of the Ansar and had buried more than a hundred of his descendants.",
    changeAr: "وسألت أمّه النبي ﷺ أن يدعو له فدعا: اللهم أكثر ماله وولده وبارك له فيما أعطيته. قال أنس بعدُ: فإني لمن أكثر الأنصار مالًا، ولقد دفنتُ من صُلبي أكثر من مئة.",
    greatest: "That he became the channel through which an enormous amount of the Sunnah reached the nation — because he was in the house, watching, for a decade. Much of what Muslims know about how the Prophet ﷺ prayed, ate and treated people comes through this boy.",
    greatestAr: "أنه صار طريقًا لنقل شيءٍ عظيمٍ من السنة إلى الأمّة — لأنه كان في البيت يرى عشر سنين. وكثيرٌ مما يعرفه المسلمون من صلاته وأكله ومعاملته ﷺ إنما جاء من هذا الغلام.",
    death: "He was one of the last companions to die in Basra, having lived more than a hundred years — the prayer answered in front of everyone.",
    deathAr: "وكان من آخر من مات من الصحابة بالبصرة، وقد جاوز المئة — والدعوة مستجابةٌ على أعين الناس.",
    sources: [
      "He never said uff to me: Sahih al-Bukhari, Hadith 6038 and Sahih Muslim — Sahih, agreed upon",
      "O Allah, increase his wealth and children: Sahih al-Bukhari, Hadith 1982 and 6334 — Sahih, agreed upon",
      "His long life and death in Basra: historical accounts — historical sira, not hadith"
    ]
  },

  "ubayy": {
    before: "Ubayy ibn Ka'b of the Khazraj was one of the few in Madinah who could write before Islam, and he was among those who pledged at al-Aqabah.",
    beforeAr: "هو أُبيّ بن كعبٍ من الخزرج، وكان ممن يكتب بالمدينة قبل الإسلام، وشهد بيعة العقبة.",
    islam: "He became one of the scribes of the revelation, and one of the very few the Prophet ﷺ named when he told the companions to take the Quran from four men.",
    islamAr: "فصار من كتّاب الوحي، ومن الأربعة الذين أمر النبي ﷺ أن يُؤخذ القرآن عنهم.",
    change: "The Prophet ﷺ said to him: Allah has commanded me to recite to you Surah Al-Bayyinah. Ubayy said: and He named me to you? He said: yes. And Ubayy wept.",
    changeAr: "قال له النبي ﷺ: إن الله أمرني أن أقرأ عليك سورة البيّنة. فقال أُبيّ: وسمّاني لك؟ قال: نعم. فبكى أُبيّ.",
    greatest: "The Prophet ﷺ asked him which verse of the Book of Allah was the greatest. He said: Allah — there is no god but He, the Ever-Living, the Sustainer. The Prophet ﷺ struck his chest and said: may the knowledge be easy for you, Abu al-Mundhir.",
    greatestAr: "سأله النبي ﷺ: أيّ آيةٍ في كتاب الله أعظم؟ قال: الله لا إله إلا هو الحيّ القيّوم. فضرب في صدره وقال: ليَهنِك العلم أبا المنذر.",
    death: "Omar رضي الله عنه called him the master of the Muslims. He died in Madinah, and the Quran the nation recites is transmitted in part through him.",
    deathAr: "وكان عمر رضي الله عنه يُسمّيه سيّد المسلمين. ومات بالمدينة، والقرآن الذي تقرؤه الأمّة مرويٌّ في بعض طرقه عنه.",
    sources: [
      "Take the Quran from four: Sahih al-Bukhari, Hadith 3808 — Sahih",
      "Allah commanded me to recite to you: Sahih al-Bukhari, Hadith 3809 and Sahih Muslim — Sahih, agreed upon",
      "The greatest verse, and may knowledge be easy for you: Sahih Muslim, Book of the Prayer of Travellers — Sahih",
      "Omar calling him the master of the Muslims: historical accounts — historical sira, not hadith"
    ]
  },

  "abu-musa": {
    before: "Abdullah ibn Qays al-Ash'ari came from Yemen to Makkah, became Muslim early, emigrated to Abyssinia, and reached Madinah on the day Khaybar was opened.",
    beforeAr: "هو عبد الله بن قيسٍ الأشعري، قدِم من اليمن إلى مكة فأسلم قديمًا، وهاجر إلى الحبشة، وقدِم المدينة يوم فُتحت خيبر.",
    islam: "He arrived with a group of his people, and the Prophet ﷺ said of them: they are of me and I am of them.",
    islamAr: "قدِم في جماعةٍ من قومه، فقال فيهم النبي ﷺ: هم منّي وأنا منهم.",
    change: "His voice. The Prophet ﷺ heard him reciting at night and told him in the morning: if you had seen me last night, listening to your recitation — you have been given one of the flutes of the family of Dawud. Abu Musa said: had I known you were listening, I would have made it more beautiful for you.",
    changeAr: "صوته. سمعه النبي ﷺ يقرأ من الليل فقال له في الصباح: لو رأيتني وأنا أستمع لقراءتك البارحة — لقد أُوتيتَ مزمارًا من مزامير آل داود. فقال أبو موسى: لو علمتُ أنك تستمع لحبّرته لك تحبيرًا.",
    greatest: "He was sent with Mu'adh to Yemen as a governor and teacher, and the instruction they were given is one of the shortest and most complete in the Sunnah: make things easy and do not make them hard, give good news and do not drive people away, and work together and do not differ.",
    greatestAr: "بُعث مع معاذٍ إلى اليمن أميرًا ومعلّمًا، وكانت وصيّتهما من أوجز ما في السنة وأجمعه: يسّرا ولا تُعسّرا، وبشّرا ولا تُنفّرا، وتطاوعا ولا تختلفا.",
    death: "He was a judge and a governor under Omar and Osman, known for his recitation and his fiqh. He died in Kufa.",
    deathAr: "وكان قاضيًا وأميرًا في عهد عمر وعثمان، مشهورًا بالقراءة والفقه. ومات بالكوفة.",
    sources: [
      "One of the flutes of the family of Dawud: Sahih al-Bukhari, Hadith 5048 and Sahih Muslim — Sahih, agreed upon",
      "Make things easy and do not make them hard: Sahih al-Bukhari, Hadith 3038 and Sahih Muslim — Sahih, agreed upon",
      "They are of me and I am of them: Sahih al-Bukhari, Hadith 4232 — Sahih",
      "His judgeship and death in Kufa: historical accounts — historical sira, not hadith"
    ]
  },

  "abu-said": {
    before: "Sa'd ibn Malik al-Khudri was a boy at Uhud — he presented himself to fight and was turned away for being too young. His father was killed in that battle.",
    beforeAr: "هو سعد بن مالكٍ الخدري، كان غلامًا يوم أُحد، عُرض ليقاتل فرُدّ لصغره. وقُتل أبوه في تلك الغزوة.",
    islam: "He grew up in Madinah in poverty after his father's death, and attached himself to the circle of the Prophet ﷺ. He was one of the People of the Bench — those who lived in the mosque with nothing.",
    islamAr: "فنشأ بالمدينة في فقرٍ بعد أبيه، ولزم مجلس النبي ﷺ. وكان من أهل الصُّفّة الذين كانوا في المسجد لا شيء لهم.",
    change: "He became one of the most prolific narrators among the companions, and one of the young men the older companions would sit and listen to.",
    changeAr: "فصار من أكثر الصحابة روايةً، ومن الشباب الذين كان كبار الصحابة يجلسون إليه ويسمعون منه.",
    greatest: "He narrated the hadith of changing what is wrong — whoever among you sees something wrong, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart — and that is the weakest of faith. It is one of the most quoted sentences in Islam, and it reached the nation through him.",
    greatestAr: "روى حديث تغيير المنكر: من رأى منكم منكرًا فليُغيّره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان. وهو من أكثر ما يُستشهد به في الإسلام، وقد بلغ الأمّة من طريقه.",
    death: "He lived long in Madinah, teaching. Much of what is known about the Day of Judgement, the intercession and the Fire is narrated from him.",
    deathAr: "وعاش بالمدينة طويلًا يُعلّم. وكثيرٌ مما يُعرف من أمر يوم القيامة والشفاعة والنار مرويٌّ عنه.",
    sources: [
      "Changing what is wrong: Sahih Muslim, Book of Faith — Sahih",
      "Turned away at Uhud for being young: Sahih al-Bukhari, Hadith 4097 — Sahih",
      "The People of the Bench: Sahih al-Bukhari, Book of Softening the Hearts — Sahih",
      "His narrations and teaching in Madinah: historical accounts — historical sira, not hadith"
    ]
  },

  "saad-ubadah": {
    before: "Sa'd ibn Ubadah was the chief of the Khazraj and one of the great hosts of the Arabs — his family kept a standing pot for anyone who came, and it was said that a caller used to announce it in Madinah every night.",
    beforeAr: "هو سعد بن عُبادة سيّد الخزرج، ومن أجواد العرب — كانت لأهله جفنةٌ تدور على من جاء، ويُذكر أن مناديًا كان ينادي بها بالمدينة كل ليلة.",
    islam: "He was one of the twelve chiefs chosen at the pledge of al-Aqabah, and carried the banner of the Ansar.",
    islamAr: "كان أحد النقباء الاثني عشر ليلة العقبة، وكان يحمل راية الأنصار.",
    change: "His jealousy for his household was so well known that the Prophet ﷺ commented on it. When the ruling on accusing a wife was discussed, Sa'd said he would strike with the sword first — and the Prophet ﷺ said to the people: are you astonished at Sa'd's jealousy? By Allah, I am more jealous than he is, and Allah is more jealous than I am.",
    changeAr: "واشتُهرت غيرته على أهله حتى تكلّم فيها النبي ﷺ. فلمّا ذُكر حكم من رمى امرأته قال سعد: بل أضربه بالسيف. فقال النبي ﷺ للناس: أتعجبون من غيرة سعد؟ والله لأنا أغير منه، والله أغير مني.",
    greatest: "The generosity that was not a story but a habit. The Prophet ﷺ prayed for his household: O Allah, place Your blessings and Your mercy upon the family of Sa'd ibn Ubadah.",
    greatestAr: "الجود الذي لم يكن حكايةً بل عادة. وقد دعا النبي ﷺ لأهل بيته: اللهم اجعل بركاتك ورحمتك على آل سعد بن عُبادة.",
    death: "He died in Syria during the caliphate of Omar رضي الله عنه. He had not given the pledge to Abu Bakr and withdrew from public affairs; the historians record the disagreement, and it is recorded here as history, not as a ruling on him.",
    deathAr: "مات بالشام في خلافة عمر رضي الله عنه. ولم يُبايع أبا بكرٍ واعتزل الأمر؛ وقد ذكر المؤرخون الخلاف في ذلك، ونذكره هنا تاريخًا لا حكمًا عليه.",
    sources: [
      "Are you astonished at Sa'd's jealousy: Sahih al-Bukhari, Hadith 7416 and Sahih Muslim — Sahih, agreed upon",
      "O Allah, place Your blessings upon the family of Sa'd: Sahih Muslim, Book of Drinks — Sahih",
      "Chief of the Khazraj and one of the twelve at al-Aqabah: historical sira accounts — historical sira, not hadith",
      "His withdrawal and death in Syria: historical accounts — historical sira, not hadith"
    ]
  },

  "abu-ayyub": {
    before: "Khalid ibn Zayd al-Ansari of the Khazraj, who was at the second pledge of al-Aqabah and at Badr and every battle after it.",
    beforeAr: "هو خالد بن زيدٍ الأنصاري من الخزرج، شهد بيعة العقبة الثانية وبدرًا وما بعدها من المشاهد.",
    islam: "When the Prophet ﷺ arrived in Madinah, every family wanted him in their home. He let his camel choose, and it knelt at the door of Abu Ayyub. He stayed in his house for about seven months while the mosque and his rooms were built.",
    islamAr: "لمّا قدِم النبي ﷺ المدينة تنازعه القوم كلٌّ يريده عنده، فقال: دعوها فإنها مأمورة. فبركت ناقته عند دار أبي أيوب. فأقام في بيته نحو سبعة أشهرٍ حتى بُني المسجد ومساكنه.",
    change: "Abu Ayyub gave him the lower floor and went upstairs, then could not bear to walk above the Prophet ﷺ and asked him to change — and he moved down.",
    changeAr: "فأنزله السُّفل وصعد هو العُلوّ، ثم لم تطب نفسه أن يمشي فوق النبي ﷺ فسأله أن ينتقل، فتحوّل النبي ﷺ إلى العُلوّ.",
    greatest: "He never stopped campaigning. As a very old man he joined the army that went to Constantinople, and when he was told he was too old he recited: go forth, light and heavy.",
    greatestAr: "لم ينقطع عن الجهاد. فخرج شيخًا كبيرًا مع الجيش إلى القسطنطينية، ولمّا قيل له: قد كبرتَ، قرأ: انفروا خفافًا وثقالًا.",
    death: "He died at the walls of Constantinople and asked to be buried as far forward as the army could reach. His grave is there.",
    deathAr: "فمات عند أسوار القسطنطينية، وأوصى أن يُدفن أبعد ما يبلغ به الجيش. وقبره هناك.",
    sources: [
      "The camel choosing his door, and the upper and lower floors: Sahih Muslim, Book of Drinks — Sahih; and historical sira accounts",
      "Go forth, light and heavy: Surah At-Tawbah (9:41) — Quran",
      "His death and burial at Constantinople: historical accounts — historical sira, not hadith"
    ]
  },

  "umm-ayman": {
    before: "Barakah, an Abyssinian woman who was a servant in the household of Abdullah, the Prophet's ﷺ father. She was there when the Prophet ﷺ was born, and she carried him as a child.",
    beforeAr: "هي بَركة، امرأةٌ حبشيّة كانت في بيت عبد الله والد النبي ﷺ. حضرت مولده وحضنته صغيرًا.",
    islam: "She was with his mother Aminah on the journey on which she died, and she brought the orphaned boy back to Makkah herself. The Prophet ﷺ used to call her my mother, and said: she is the remnant of my household.",
    islamAr: "وكانت مع أمّه آمنة في السفرة التي ماتت فيها، فرجعت باليتيم إلى مكة بنفسها. وكان النبي ﷺ يقول لها: يا أُمّه، ويقول: هي بقيّة أهل بيتي.",
    change: "She became Muslim early, emigrated to Abyssinia and then to Madinah, and was at Uhud and Khaybar giving water to the wounded.",
    changeAr: "أسلمت قديمًا وهاجرت إلى الحبشة ثم إلى المدينة، وشهدت أُحدًا وخيبر تسقي الجرحى وتُداويهم.",
    greatest: "After the Prophet ﷺ died, Abu Bakr and Omar went to visit her as he used to, and she wept. They said: what makes you weep? Is what is with Allah not better for His Messenger? She said: I am not weeping because I do not know that — I am weeping because the revelation from heaven has stopped. And she moved them to weeping with her.",
    greatestAr: "ولمّا توفي النبي ﷺ ذهب أبو بكرٍ وعمر يزورانها كما كان يزورها، فبكت. فقالا: ما يُبكيكِ؟ أما تعلمين أن ما عند الله خيرٌ لرسوله؟ قالت: ما أبكي أني لا أعلم ذلك — ولكن أبكي أن الوحي قد انقطع من السماء. فهيّجتهما على البكاء معها.",
    death: "She married Zayd ibn Harithah and their son was Usama, whom the Prophet ﷺ loved. She died shortly after the Prophet ﷺ.",
    deathAr: "تزوّجها زيد بن حارثة فولدت له أسامة حِبّ رسول الله ﷺ. وماتت بعده ﷺ بيسير.",
    sources: [
      "Abu Bakr and Omar visiting her, and her weeping: Sahih Muslim, Book of the Merits of the Companions — Sahih",
      "She is the remnant of my household; calling her mother: reported in the biographical works — outside the two Sahihs",
      "Giving water at Uhud: Sahih al-Bukhari, Hadith 2880-2881 mentions the women carrying water — Sahih",
      "Her care of him as a child and the journey with Aminah: historical sira accounts — historical sira, not hadith"
    ]
  },

  "abdullah-masud": {
    before: "Abdullah ibn Mas'ud was a young shepherd, small and thin, herding another man's sheep outside Makkah, with no family standing behind him.",
    beforeAr: "كان عبد الله بن مسعودٍ غلامًا يرعى غنمًا لغيره خارج مكة، دقيق الساقين نحيفًا، لا عشيرة تمنعه.",
    islam: "The Prophet ﷺ and Abu Bakr passed him and asked for milk. He said the sheep were not his to give from. The Prophet ﷺ asked for a young ewe that had never mated, wiped its udder, and it produced milk. Ibn Mas'ud said: teach me some of this speech.",
    islamAr: "مرّ به النبي ﷺ وأبو بكرٍ فاستسقياه لبنًا، فقال: إني مؤتمن. فطلب النبي ﷺ شاةً لم يَنزُ عليها الفحل، فمسح ضرعها فدرّت. فقال ابن مسعود: علّمني من هذا القول.",
    change: "He was the first man to recite the Quran aloud in Makkah after the Prophet ﷺ. The companions were afraid to; he said he would do it because he had no clan to be feared for. He recited Surah Ar-Rahman at the Kaaba and they beat his face bloody. He came back and said: shall I go again tomorrow?",
    changeAr: "وهو أول من جهر بالقرآن بمكة بعد النبي ﷺ. تهيّب الصحابة ذلك فقال: أنا أفعل، فإنه ليس لي عشيرةٌ يُخشى عليّ منها. فقرأ سورة الرحمن عند الكعبة، فضربوا وجهه حتى أدموه، فرجع وقال: أعود لهم غدًا؟",
    greatest: "The Prophet ﷺ said: whoever wants to recite the Quran fresh as it was revealed, let him recite it in the manner of Ibn Umm Abd. And once his thin legs showed while he was up a tree and men laughed — the Prophet ﷺ said: are you laughing at the thinness of his legs? By the One in whose hand is my soul, they are heavier in the Scale than Uhud.",
    greatestAr: "قال النبي ﷺ: من أحبّ أن يقرأ القرآن غضًّا كما أُنزل فليقرأه على قراءة ابن أمّ عبد. وانكشفت ساقاه يومًا وهو على شجرةٍ فضحك القوم من دقّتهما، فقال النبي ﷺ: أتضحكون من دقّة ساقيه؟ والذي نفسي بيده لهما أثقل في الميزان من أُحد.",
    death: "He became one of the great teachers of Kufa, and much of the fiqh of Iraq goes back to him. He died in Madinah.",
    deathAr: "فصار من كبار معلّمي الكوفة، وإليه يرجع كثيرٌ من فقه أهل العراق. ومات بالمدينة.",
    sources: [
      "Recite in the manner of Ibn Umm Abd: Musnad Ahmad and Ibn Majah — outside the two Sahihs, authenticated by al-Albani",
      "His legs heavier than Uhud: Musnad Ahmad — outside the two Sahihs, graded authentic by scholars of hadith",
      "The first to recite the Quran aloud in Makkah, and the sheep: historical sira accounts — historical sira, not hadith",
      "His teaching in Kufa: historical accounts — historical sira, not hadith"
    ]
  },

  "khabbab": {
    before: "Khabbab ibn al-Aratt was a slave, a blacksmith by trade, and among the first six or seven to declare Islam — with no protector at all.",
    beforeAr: "هو خبّاب بن الأرتّ، كان عبدًا حدّادًا، ومن أول ستةٍ أو سبعةٍ أظهروا الإسلام — ولا مانع له البتّة.",
    islam: "His owner used to heat iron in the fire and press it on his back until the fire was put out by the fat of his flesh. Years later, when Omar رضي الله عنه asked to see his back, he wept at the sight of it.",
    islamAr: "كانت مولاته تُحمي الحديد بالنار ثم تضعه على ظهره حتى يُطفئه ودَك ظهره. ولمّا سأله عمر رضي الله عنه أن يُريه ظهره بعد سنين بكى لمّا رآه.",
    change: "He came to the Prophet ﷺ while he was resting in the shade of the Kaaba and said: will you not ask Allah to help us? Will you not make supplication for us? The Prophet ﷺ sat up, his face red, and told him of those before them who were sawn in two and combed with iron combs down to the bone and did not leave their religion — then said: but you are people in a hurry.",
    changeAr: "أتى النبي ﷺ وهو متوسّدٌ بردةً في ظلّ الكعبة فقال: ألا تستنصر لنا؟ ألا تدعو لنا؟ فجلس محمرًّا وجهه وذكر من كان قبلهم يُنشر بالمنشار ويُمشَط بأمشاط الحديد دون لحمه وعظمه فما يصرفه ذلك عن دينه، ثم قال: ولكنكم تستعجلون.",
    greatest: "That he lived to see the promise come true, and it frightened him. When wealth came to the Muslims he wept and said: our companions went ahead of us and their reward was not diminished by anything of this world; but we have been given so much that we have nothing to put it in but the earth.",
    greatestAr: "أنه عاش حتى رأى الوعد يتحقّق فأفزعه. فلمّا فُتحت الدنيا بكى وقال: إن أصحابنا مضوا ولم تنقصهم الدنيا من أجورهم شيئًا، وإنّا أُعطينا من الدنيا ما لا نجد له موضعًا إلا التراب.",
    death: "He was the first man buried in the graveyard of Kufa, and Ali رضي الله عنه praised him at his grave.",
    deathAr: "وهو أول من دُفن بظهر الكوفة، وأثنى عليه عليٌّ رضي الله عنه عند قبره.",
    sources: [
      "Will you not ask Allah to help us; but you are people in a hurry: Sahih al-Bukhari, Hadith 3612 and 6943 — Sahih",
      "Our companions went ahead of us: Sahih al-Bukhari, Hadith 1276 and Sahih Muslim — Sahih, agreed upon",
      "The iron on his back and Omar weeping: historical sira accounts — historical sira, not hadith",
      "The first buried at Kufa: historical accounts — historical sira, not hadith"
    ]
  },

  "suhayb": {
    before: "Suhayb ar-Rumi was an Arab boy captured by the Byzantines as a child and raised among them, which is why he spoke with a foreign accent. He was bought and brought back to Makkah, where he became a successful trader.",
    beforeAr: "هو صُهيب الرومي، غلامٌ عربيّ سبته الروم صغيرًا فنشأ فيهم، ولذلك كانت في لسانه عُجمة. ثم اشتُري وقدِم مكة فصار تاجرًا موسرًا.",
    islam: "He and Ammar became Muslim on the same day, and both were tortured for it.",
    islamAr: "أسلم هو وعمّارٌ في يومٍ واحد، وعُذّبا جميعًا.",
    change: "When he set out to emigrate, Quraysh stopped him and said: you came to us poor and became rich among us — you will not leave with your wealth. He said: if I give you my wealth, will you let me go? They said yes. He gave them all of it and left with nothing.",
    changeAr: "فلمّا أراد الهجرة اعترضته قريشٌ وقالوا: أتيتنا صعلوكًا فكثُر مالك عندنا، لا تخرج به. فقال: أرأيتم إن دفعتُ إليكم مالي أتُخلّون سبيلي؟ قالوا: نعم. فدفعه كلّه وخرج لا شيء معه.",
    greatest: "When he reached the Prophet ﷺ, before he could say anything, the Prophet ﷺ said to him three times: the trade has profited, Abu Yahya — the trade has profited. And Allah revealed: and of the people is he who sells himself seeking the pleasure of Allah.",
    greatestAr: "فلمّا قدِم على النبي ﷺ قال له قبل أن يتكلّم ثلاثًا: ربِح البيع أبا يحيى، ربِح البيع. وأنزل الله: ومن الناس من يشري نفسه ابتغاء مرضاة الله.",
    death: "Omar رضي الله عنه, when he was stabbed, appointed Suhayb to lead the prayer for the people until a caliph was chosen. He died in Madinah.",
    deathAr: "ولمّا طُعن عمر رضي الله عنه أمر صُهيبًا أن يُصلّي بالناس حتى يُختار الخليفة. ومات بالمدينة.",
    sources: [
      "The trade has profited, and the verse: reported in tafsir and the biographical works — outside the two Sahihs; the verse is Surah Al-Baqarah (2:207) — Quran",
      "Giving up his wealth to emigrate: historical sira accounts — historical sira, not hadith",
      "Omar appointing him to lead the prayer: Sahih al-Bukhari, Hadith 3700 — Sahih",
      "His capture and upbringing among the Byzantines: historical accounts — historical sira, not hadith"
    ]
  },

  "zayd-thabit": {
    before: "Zayd ibn Thabit was eleven when the Prophet ﷺ came to Madinah. He presented himself to fight at Badr and was sent home for being too young — so he made himself useful another way.",
    beforeAr: "كان زيد بن ثابتٍ ابن إحدى عشرة سنة حين قدِم النبي ﷺ المدينة. عُرض ليقاتل ببدرٍ فرُدّ لصغره — فجعل نفسه نافعًا من وجهٍ آخر.",
    islam: "He had already memorised a number of surahs. The Prophet ﷺ told him to learn the writing of the Jews so that letters could be read and answered without depending on anyone; he learned it in a matter of weeks.",
    islamAr: "وكان قد حفظ سورًا من القرآن. فأمره النبي ﷺ أن يتعلّم كتاب اليهود ليقرأ ما يأتيه ويكتب إليهم بلا واسطة، فتعلّمه في نحو نصف شهر.",
    change: "He became the chief scribe of the revelation. When a verse came down, Zayd was called and he wrote it.",
    changeAr: "فصار كاتب الوحي الأول. فكان إذا نزل الوحي دُعي زيدٌ فكتب.",
    greatest: "After the deaths at Yamamah, Abu Bakr and Omar called him to gather the Quran into one collection. He said: by Allah, if they had ordered me to move a mountain it would not have been heavier on me than what they ordered me to do. He gathered it from the palm branches, the thin white stones and the chests of men — and that collection is the reason the Quran is one text today.",
    greatestAr: "وبعد قتلى اليمامة دعاه أبو بكرٍ وعمر ليجمع القرآن. فقال: والله لو كلّفوني نقل جبلٍ من الجبال ما كان أثقل عليّ مما أمروني به من جمع القرآن. فجمعه من العُسُب واللِّخاف وصدور الرجال — وبذلك الجمع صار القرآن نصًّا واحدًا إلى اليوم.",
    death: "He led the second collection under Osman as well, and was a leading judge and scholar of inheritance in Madinah. When he died Abu Hurairah رضي الله عنه said: today the scholar of this nation has died.",
    deathAr: "ثم قاد الجمع الثاني في عهد عثمان، وكان من كبار القضاة وأعلم الناس بالفرائض بالمدينة. ولمّا مات قال أبو هريرة رضي الله عنه: مات اليوم حَبر هذه الأمة.",
    sources: [
      "Learning the writing of the Jews: Sunan Abu Dawud and at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "The collection of the Quran and 'heavier than moving a mountain': Sahih al-Bukhari, Hadith 4986 — Sahih",
      "The copies made under Osman: Sahih al-Bukhari, Hadith 4987 — Sahih",
      "Turned away at Badr for being young: historical sira accounts — historical sira, not hadith"
    ]
  },

  "amr-ibn-alas": {
    before: "Amr ibn al-As was one of the sharpest minds in Quraysh and one of the Prophet's ﷺ most capable enemies. He was the man Quraysh sent to Abyssinia to bring the emigrants back — and he failed.",
    beforeAr: "كان عمرو بن العاص من أدهى قريشٍ وأشدّهم على النبي ﷺ. وهو الذي أرسلته قريشٌ إلى الحبشة ليردّ المهاجرين — فأخفق.",
    islam: "He became Muslim shortly before the conquest of Makkah, coming of his own accord with Khalid ibn al-Walid. He stipulated that his past be forgiven, and the Prophet ﷺ told him: Islam wipes out what came before it.",
    islamAr: "أسلم قُبيل فتح مكة، جاء طائعًا مع خالد بن الوليد. واشترط أن يُغفر له ما مضى، فقال له النبي ﷺ: إن الإسلام يجُبّ ما كان قبله.",
    change: "The Prophet ﷺ put him in command of an expedition that included Abu Bakr and Omar. Amr, uncertain of his own standing, asked the Prophet ﷺ: who is the most beloved of people to you? He said: Aishah. He said: from the men? He said: her father. Then who? Omar — and he named men until Amr stopped asking, in case he was not among them.",
    changeAr: "أمّره النبي ﷺ على سريّةٍ فيها أبو بكرٍ وعمر. فسأله عمرو وهو غير واثقٍ بمنزلته: أيّ الناس أحبّ إليك؟ قال: عائشة. قال: من الرجال؟ قال: أبوها. قال: ثم من؟ قال: عمر. فعدّ رجالًا، فسكت عمرٌو مخافة أن يجعله آخرهم.",
    greatest: "He conquered Egypt and governed it, and founded Fustat. The Prophet ﷺ had said: the two sons of al-As are believers — Amr and Hisham.",
    greatestAr: "فتح مصر ووَليها ومصّر الفسطاط. وقد قال النبي ﷺ: ابنا العاص مؤمنان، عمرو وهشام.",
    death: "At his death he wept a long time, and described his life in three stages: a time when no one hated the Prophet ﷺ more than he did, a time when no one was more beloved to him, and then everything after. He said: if you bury me, put no wailing woman and no fire with me, and pour the earth gently — then he said the words of a man with nothing to bargain with: O Allah, You commanded and I disobeyed, and You forbade and I did not stop. There is no god but Allah.",
    deathAr: "ولمّا حضره الموت بكى طويلًا، ووصف حياته ثلاثة أطوار: طورًا لم يكن أحدٌ أبغض إليه من النبي ﷺ، ثم طورًا لم يكن أحدٌ أحبّ إليه منه، ثم ما بعد ذلك. وقال: فإذا دفنتموني فلا تصحبني نائحةٌ ولا نار، وشُنّوا عليّ التراب شنًّا — ثم قال قول من لا حجّة له: اللهم أمرتَ فعصيتُ، ونهيتَ فلم أنتهِ، ولا إله إلا الله.",
    sources: [
      "Islam wipes out what came before it: Sahih Muslim, Book of Faith — Sahih",
      "Who is most beloved to you: Sahih al-Bukhari, Hadith 3662 and Sahih Muslim — Sahih, agreed upon",
      "The two sons of al-As are believers: Jami' at-Tirmidhi — outside the two Sahihs",
      "His words at death: Sahih Muslim, Book of Faith — Sahih",
      "The conquest of Egypt and Fustat: historical accounts — historical sira, not hadith"
    ]
  },

  "usama": {
    before: "Usama ibn Zayd was the son of Zayd ibn Harithah and Umm Ayman — the son of the man the Prophet ﷺ had raised. He is called the beloved, son of the beloved.",
    beforeAr: "هو أسامة بن زيد بن حارثة وأمّه أمّ أيمن — ابن الرجل الذي ربّاه النبي ﷺ. ويُقال له: الحِبّ ابن الحِبّ.",
    islam: "The Prophet ﷺ used to sit him on one knee and al-Hasan on the other and say: O Allah, love them, for I love them.",
    islamAr: "كان النبي ﷺ يُقعده على فخذه والحسن على الأخرى ويقول: اللهم أحبّهما فإني أُحبّهما.",
    change: "In a raid he caught a man who said la ilaha illa Allah as the spear came down, and Usama killed him anyway, believing he had said it only to escape. The Prophet ﷺ asked him again and again: did you kill him after he said it? Who will save you from la ilaha illa Allah on the Day of Resurrection? Usama said he wished he had not become Muslim until that day.",
    changeAr: "أدرك في سريّةٍ رجلًا فقال: لا إله إلا الله، فقتله ظانًّا أنه قالها تعوّذًا. فجعل النبي ﷺ يُعيد عليه: أقتلته بعد أن قال لا إله إلا الله؟ فمن لك بلا إله إلا الله يوم القيامة؟ حتى تمنّى أسامة أنه لم يكن أسلم إلا يومئذ.",
    greatest: "The Prophet ﷺ put him in command of an army against the Byzantines while he was about eighteen, with senior companions under him. People objected to his youth; the Prophet ﷺ went up the pulpit and defended him, and said: he is fit for command, and his father was fit for it before him.",
    greatestAr: "أمّره النبي ﷺ على جيشٍ إلى الروم وهو ابن ثمانية عشر عامًا تقريبًا، وفيه كبار الصحابة. فطعن الناس في إمارته لصغره، فصعد النبي ﷺ المنبر ودافع عنه وقال: إن كان لخليقًا للإمارة، وإن كان أبوه لخليقًا لها من قبله.",
    death: "The Prophet ﷺ died before the army left. Abu Bakr رضي الله عنه refused to hold it back, saying he would not undo something the Messenger of Allah ﷺ had set in motion — and sent it out under Usama.",
    deathAr: "ومات النبي ﷺ قبل أن يخرج الجيش. فأبى أبو بكرٍ رضي الله عنه أن يحبسه وقال: لا أحلّ لواءً عقده رسول الله ﷺ — فأنفذه بإمارة أسامة.",
    sources: [
      "O Allah, love them: Sahih al-Bukhari, Hadith 3735 — Sahih",
      "Who will save you from la ilaha illa Allah: Sahih al-Bukhari, Hadith 4269 and Sahih Muslim — Sahih, agreed upon",
      "He is fit for command: Sahih al-Bukhari, Hadith 4469 and 3730 — Sahih, agreed upon",
      "Abu Bakr sending out the army: historical accounts — historical sira, not hadith"
    ]
  },

  "hudhayfa": {
    before: "Hudhayfa ibn al-Yaman's father was killed at Uhud by the Muslims themselves, by mistake in the confusion. Hudhayfa was calling out that he was his father, and afterwards he gave his blood money away to the Muslims in charity.",
    beforeAr: "قُتل أبوه يوم أُحد خطأً بأيدي المسلمين في اختلاط الناس. وكان حذيفة يصيح: أبي أبي. ثم تصدّق بديته على المسلمين.",
    islam: "He is the keeper of the secret. The Prophet ﷺ told him the names of the hypocrites in Madinah, and told no one else. Omar رضي الله عنه, as caliph, used to watch him at funerals — if Hudhayfa prayed over a man, Omar prayed; if he held back, Omar held back.",
    islamAr: "هو صاحب السرّ. أخبره النبي ﷺ بأسماء المنافقين ولم يُخبر بها غيره. وكان عمر رضي الله عنه في خلافته يرقُبه في الجنائز: فإن صلّى حذيفة على رجلٍ صلّى، وإن تخلّف تخلّف.",
    change: "Omar even asked him directly whether he himself was among them. Hudhayfa said no, and would name no one else.",
    changeAr: "بل سأله عمر نفسه: هل أنا منهم؟ فقال: لا، ولم يُسمِّ له أحدًا سواه.",
    greatest: "The night of the Trench. The cold and fear were beyond bearing and the Prophet ﷺ asked for a man to go and bring news of the enemy — no one moved. He called Hudhayfa by name. He went into the camp of Quraysh, sat among them in the dark, and could have killed Abu Sufyan — but he had been told to bring news and not to start anything, so he did not.",
    greatestAr: "ليلة الخندق. اشتدّ البرد والخوف حتى لم يُطق، فطلب النبي ﷺ رجلًا يأتيه بخبر القوم فلم يقم أحد. فدعا حذيفة باسمه. فدخل عسكر قريشٍ وجلس بينهم في الظلمة، ولو شاء لقتل أبا سفيان — لكنه أُمر أن يأتي بالخبر ولا يُحدث شيئًا، فلم يفعل.",
    death: "He is the companion people went to about the trials to come, because he asked about evil while others asked about good — he said: people used to ask the Messenger of Allah ﷺ about good, and I used to ask him about evil, fearing that it would reach me. He died in Kufa.",
    deathAr: "وهو الذي كان الناس يسألونه عن الفتن، لأنه كان يسأل عن الشرّ والناس يسألون عن الخير — قال: كان الناس يسألون رسول الله ﷺ عن الخير، وكنتُ أسأله عن الشرّ مخافة أن يُدركني. ومات بالكوفة.",
    sources: [
      "The night of the Trench: Sahih Muslim, Book of Jihad — Sahih",
      "I used to ask him about evil: Sahih al-Bukhari, Hadith 3606 and Sahih Muslim — Sahih, agreed upon",
      "Keeper of the secret of the hypocrites, and Omar watching him at funerals: reported in the biographical works and tafsir — outside the two Sahihs",
      "His father killed at Uhud and the blood money: historical sira accounts — historical sira, not hadith"
    ]
  },

  "abu-darda": {
    before: "Uwaymir ibn Malik of the Khazraj was a merchant who became Muslim late among the Ansar, and when he did he left the trade almost entirely.",
    beforeAr: "هو عويمر بن مالكٍ من الخزرج، كان تاجرًا وأسلم متأخّرًا عن قومه، فلمّا أسلم ترك التجارة أو كاد.",
    islam: "He said: I became Muslim with the Messenger of Allah ﷺ and I was a merchant. I wanted to combine worship and trade and could not — so I left the trade and stayed with worship.",
    islamAr: "قال: أسلمتُ مع رسول الله ﷺ وأنا تاجر، فأردتُ أن يجتمع لي التجارة والعبادة فلم يجتمعا، فتركتُ التجارة وأقبلتُ على العبادة.",
    change: "The Prophet ﷺ made him and Salman al-Farisi brothers. Salman visited and found Abu ad-Darda fasting continuously and standing all night while neglecting his wife, and told him: your Lord has a right over you, your soul has a right over you, and your family has a right over you — so give everyone his right. The Prophet ﷺ said: Salman has spoken the truth.",
    changeAr: "وآخى النبي ﷺ بينه وبين سلمان الفارسي. فزاره سلمان فوجده يصوم الدهر ويقوم الليل ويُهمل أهله، فقال له: إن لربّك عليك حقًّا، ولنفسك عليك حقًّا، ولأهلك عليك حقًّا، فأعطِ كل ذي حقٍّ حقّه. فقال النبي ﷺ: صدق سلمان.",
    greatest: "That correction, which he accepted from his brother. It is one of the clearest statements in Islam that worship is not measured by how much a man wears himself out.",
    greatestAr: "قبوله ذلك التصويب من أخيه. وهو من أوضح ما في الإسلام في أن العبادة لا تُقاس بمقدار ما يُجهد المرء نفسه.",
    death: "He became a judge in Damascus and its teacher, and is remembered for the sentence: I fear that the first thing I will be asked on the Day of Resurrection is: you had knowledge — what did you do with it?",
    deathAr: "وصار قاضي دمشق ومعلّمها، ويُذكر عنه قوله: إني أخاف أن أُسأل يوم القيامة: علمتَ، فماذا عملت فيما علمت؟",
    sources: [
      "Salman and the rights: Sahih al-Bukhari, Hadith 1968 — Sahih",
      "Leaving the trade for worship: reported in the biographical works — outside the two Sahihs",
      "His judgeship in Damascus and his sayings: historical accounts — historical sira, not hadith"
    ]
  },

  "ubada": {
    before: "Ubada ibn as-Samit of the Khazraj was one of the twelve chiefs at the pledge of al-Aqabah — he was there at both pledges.",
    beforeAr: "هو عُبادة بن الصامت من الخزرج، أحد النقباء الاثني عشر ليلة العقبة، وشهد البيعتين.",
    islam: "He narrated the terms of the pledge itself: we pledged to hear and obey in what we liked and disliked, not to dispute the authority of its people, and to speak the truth wherever we were, fearing no blame from anyone for the sake of Allah.",
    islamAr: "وروى نصّ البيعة: بايعنا رسول الله ﷺ على السمع والطاعة في منشطنا ومكرهنا، وألّا نُنازع الأمر أهله، وأن نقول بالحق أينما كنّا، لا نخاف في الله لومة لائم.",
    change: "He was sent to Syria to teach the Quran, and taught it without payment. When a student gave him a bow as a gift he asked the Prophet ﷺ about it and was told: if you would like to be collared with a collar of fire, then accept it.",
    changeAr: "وأُرسل إلى الشام يُعلّم القرآن، فعلّمه بلا أجر. ولمّا أهدى إليه رجلٌ قوسًا سأل النبي ﷺ فقال: إن سرّك أن تُطوّق طوقًا من نار فاقبلها.",
    greatest: "He held to the last clause of his own pledge. In Syria he opposed the governor openly over a matter of ribawi exchange, saying he had heard the Prophet ﷺ forbid it, and refused to be silenced — and said he would speak the truth wherever he was, as he had pledged.",
    greatestAr: "وثبت على آخر شرطٍ في بيعته. فخالف الأمير بالشام جهارًا في مسألة الصرف الربوي وقال: سمعتُ رسول الله ﷺ ينهى عنه، وأبى أن يسكت — وقال: أقول بالحق أينما كنتُ، كما بايعت.",
    death: "He narrated the hadith of the exchange of gold for gold and silver for silver, hand to hand, which is the foundation of the fiqh of currency exchange. He died in Palestine.",
    deathAr: "وروى حديث الذهب بالذهب والفضة بالفضة يدًا بيد، وهو أصل فقه الصرف. ومات بفلسطين.",
    sources: [
      "The terms of the pledge: Sahih al-Bukhari, Hadith 7199-7200 and Sahih Muslim — Sahih, agreed upon",
      "A collar of fire for the bow: Sunan Abu Dawud and Ibn Majah — outside the two Sahihs, authenticated by al-Albani",
      "Gold for gold, hand to hand: Sahih Muslim, Book of Transactions — Sahih",
      "His stand against the governor in Syria: historical accounts — historical sira, not hadith"
    ]
  },

  "hassan-thabit": {
    before: "Hassan ibn Thabit was already a famous poet in Madinah before Islam, praising and satirising for the Arab courts.",
    beforeAr: "كان حسّان بن ثابتٍ شاعرًا مشهورًا بالمدينة قبل الإسلام، يمدح ويهجو في بلاط العرب.",
    islam: "When Quraysh attacked the Prophet ﷺ in verse — which in that society was a weapon — the Prophet ﷺ told Hassan to answer them, and said: Jibril is with you.",
    islamAr: "فلمّا هجت قريشٌ النبي ﷺ بالشعر — وكان في ذلك المجتمع سلاحًا — قال له النبي ﷺ: اهجُهم، وقال: إن جبريل معك.",
    change: "He was worried he would harm the Prophet's ﷺ own lineage, since Quraysh were his kin. The Prophet ﷺ told him: I will draw you out of them as a hair is drawn out of dough — and Abu Bakr, who knew the genealogies, briefed him.",
    changeAr: "فتخوّف أن يمسّ نسب النبي ﷺ وقريشٌ قومه، فقال له: لأُخلّصنّك منهم كما تُسلّ الشعرة من العجين — ووقفه أبو بكرٍ على الأنساب وهو أعلم الناس بها.",
    greatest: "The Prophet ﷺ set up a pulpit for him in the mosque, and he would stand on it and answer the enemies of Islam. Aishah رضي الله عنها said: the Messenger of Allah ﷺ used to set a pulpit in the mosque for Hassan to stand on and defend the Messenger of Allah ﷺ.",
    greatestAr: "ونصب له النبي ﷺ منبرًا في المسجد يقوم عليه فيُنافح عن الإسلام. قالت عائشة رضي الله عنها: كان رسول الله ﷺ يضع لحسّان منبرًا في المسجد يقوم عليه قائمًا يُفاخر عن رسول الله ﷺ.",
    death: "He lived a long life and went blind in old age. He was one of those slandered in the affair of the lie against Aishah رضي الله عنها, and she still spoke well of him afterwards for what he had done for the Prophet ﷺ.",
    deathAr: "وعاش طويلًا وكُفّ بصره في آخر عمره. وكان ممن خاض في حديث الإفك، ومع ذلك كانت عائشة رضي الله عنها تُحسن القول فيه لما كان يصنع عن رسول الله ﷺ.",
    sources: [
      "The pulpit in the mosque: Sunan Abu Dawud and at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani; the meaning is supported in Sahih al-Bukhari, Hadith 3212",
      "Jibril is with you: Sahih al-Bukhari, Hadith 3213 and Sahih Muslim — Sahih, agreed upon",
      "As a hair is drawn from dough: Sahih Muslim, Book of the Merits of the Companions — Sahih",
      "His part in the affair of the lie: Sahih al-Bukhari, Hadith 4141 — Sahih"
    ]
  },

  "ibn-rawaha": {
    before: "Abdullah ibn Rawahah of the Khazraj was a poet and one of the twelve chiefs at al-Aqabah, and one of the few in Madinah who could write before Islam.",
    beforeAr: "هو عبد الله بن رواحة من الخزرج، شاعرٌ وأحد النقباء الاثني عشر ليلة العقبة، وممن كان يكتب بالمدينة قبل الإسلام.",
    islam: "He was one of the three poets the Prophet ﷺ used to answer the attacks of Quraysh, along with Hassan and Ka'b ibn Malik.",
    islamAr: "وهو أحد الشعراء الثلاثة الذين كان النبي ﷺ يردّ بهم على قريش، مع حسّان وكعب بن مالك.",
    change: "He would take his companions by the hand and say: come, let us believe for an hour — meaning, let us sit and remember Allah. When the Prophet ﷺ heard of it he approved.",
    changeAr: "وكان يأخذ بيد الرجل من أصحابه فيقول: تعالَ نؤمن ساعة — يعني نجلس فنذكر الله. فلمّا بلغ ذلك النبي ﷺ أقرّه.",
    greatest: "Mu'tah. He was the third commander named. When Zayd and then Ja'far were killed, he hesitated for a moment — and rebuked his own soul out loud in verse, telling it that it would die whether it liked it or not, and that if it did not fight it would be forced to. Then he took the banner and fought until he was killed.",
    greatestAr: "مؤتة. كان الأمير الثالث. فلمّا قُتل زيدٌ ثم جعفرٌ تردّد لحظة — فعاتب نفسه جهارًا شعرًا، يقول لها إنها ستموت شاءت أم أبت، وإن لم تُقاتل تُكرَه. ثم أخذ الراية فقاتل حتى قُتل.",
    death: "The Prophet ﷺ announced the three deaths to the people in Madinah before any news arrived, with tears in his eyes.",
    deathAr: "ونعى النبي ﷺ الثلاثة إلى الناس بالمدينة قبل أن يأتي الخبر، وعيناه تذرفان.",
    sources: [
      "Come, let us believe for an hour: reported in the biographical works and in Musnad Ahmad — outside the two Sahihs",
      "The order of command at Mu'tah and their deaths: Sahih al-Bukhari, Hadith 4261-4262 — Sahih",
      "His verses at Mu'tah: historical sira accounts — historical sira, not hadith"
    ]
  },

  "kab-malik": {
    before: "Ka'b ibn Malik was a poet of the Ansar and had been at al-Aqabah, and had fought in every battle with the Prophet ﷺ except Badr and Tabuk.",
    beforeAr: "هو كعب بن مالكٍ شاعر الأنصار، شهد العقبة، وشهد المشاهد كلّها مع النبي ﷺ إلا بدرًا وتبوك.",
    islam: "He stayed behind from Tabuk with no excuse. He kept meaning to prepare and kept not doing it, until the army had gone.",
    islamAr: "تخلّف عن تبوك بغير عذر. كان يهمّ بالتجهّز فلا يفعل، حتى مضى الجيش.",
    change: "When the army returned, the men who had stayed behind came with excuses and were accepted at face value. Ka'b decided to tell the truth. He said: by Allah, I have no excuse — I was never stronger or better off than when I stayed behind. The Prophet ﷺ said: this one has told the truth. Get up until Allah decides about you.",
    changeAr: "فلمّا رجع الجيش جاء المتخلّفون يعتذرون فقُبلت عللهم في الظاهر. وأمّا كعبٌ فعزم على الصدق فقال: والله ما كان لي عذر، والله ما كنتُ قطّ أقوى ولا أيسر مني حين تخلّفت. فقال النبي ﷺ: أمّا هذا فقد صدق، قُم حتى يقضي الله فيك.",
    greatest: "Fifty nights of being cut off. Nobody in Madinah spoke to him or the two men with him. The earth became strange to him, his own cousin would not answer him, and when an offer of protection came from a foreign king he burned the letter. Then his wife was told to leave him. Then the mercy came, and a man shouted the news from the top of a mountain, and Ka'b gave away his whole wealth in thanks — until the Prophet ﷺ told him to keep some of it.",
    greatestAr: "خمسون ليلةً من الهجر. لا يُكلّمه أحدٌ بالمدينة هو وصاحباه. فضاقت عليه الأرض بما رحُبت، وردّ عليه ابن عمّه فلم يُكلّمه، ولمّا جاءه كتابٌ من ملكٍ يعرض عليه الحماية أحرقه. ثم أُمرت امرأته أن تعتزله. ثم جاء الفرج، وصرخ رجلٌ بالبشارة من ذروة جبل، فأراد كعبٌ أن يتصدّق بماله كلّه حتى قال له النبي ﷺ: أمسِك عليك بعض مالك.",
    death: "Allah revealed his story in the Quran: and upon the three who were left behind, until the earth became narrow for them despite its vastness. Ka'b said afterwards: Allah did not bless me with anything after guiding me to Islam greater than my truthfulness to the Messenger of Allah ﷺ that day.",
    deathAr: "وأنزل الله قصّته في القرآن: وعلى الثلاثة الذين خُلّفوا حتى إذا ضاقت عليهم الأرض بما رحُبت. وقال كعبٌ بعدها: ما أنعم الله عليّ نعمةً بعد إذ هداني للإسلام أعظم في نفسي من صدقي رسول الله ﷺ يومئذ.",
    sources: [
      "The whole account in his own words: Sahih al-Bukhari, Hadith 4418 and Sahih Muslim — Sahih, agreed upon",
      "And upon the three who were left behind: Surah At-Tawbah (9:118) — Quran"
    ]
  },

  "abu-talha": {
    before: "Zayd ibn Sahl al-Ansari was a strong archer of the Khazraj. He proposed to Umm Sulaym while he was still a disbeliever, and she told him she would take his Islam as her dowry.",
    beforeAr: "هو زيد بن سهلٍ الأنصاري، راميًا شديدًا من الخزرج. خطب أمّ سليمٍ وهو مشرك، فقالت له: إنّ إسلامك مهري لا أسألك غيره.",
    islam: "He became Muslim and married her, and it was said no dowry was ever nobler than hers.",
    islamAr: "فأسلم وتزوّجها، فقيل: ما سُمع بمهرٍ أكرم من مهر أمّ سليم.",
    change: "At Uhud he stood in front of the Prophet ﷺ, shielding him with his body and his bow, and would raise his chest to take the arrows and say: my chest before yours, Messenger of Allah. The Prophet ﷺ would raise his head to look at the enemy and Abu Talha would say: do not look, may my father and mother be your ransom — let an arrow of theirs not reach you.",
    changeAr: "ويوم أُحد وقف دون النبي ﷺ يقيه بجسده وقوسه، ويرفع صدره ويقول: نحري دون نحرك يا رسول الله. وكان النبي ﷺ يُشرف لينظر إلى القوم فيقول أبو طلحة: لا تُشرف، فداك أبي وأمي، لا يُصيبك سهمٌ من سهامهم.",
    greatest: "The night his son died. Umm Sulaym kept the news from him and served him dinner and adorned herself for him, and only afterwards asked him about people who lend something and then ask for it back. He said they should return it. She said: then be patient about your son. He went to the Prophet ﷺ, who said: may Allah bless you in your night. She bore a son.",
    greatestAr: "ليلة مات ابنه. كتمت عنه أمّ سليمٍ الخبر وقدّمت إليه العشاء وتصنّعت له، ثم سألته عن قومٍ أعاروا عاريةً ثم طلبوها. فقال: يردّونها. قالت: فاحتسِب ابنك. فأتى النبي ﷺ فقال: بارك الله لكما في ليلتكما. فحملت بغلام.",
    death: "When the verse came down — you will never attain righteousness until you spend from what you love — Abu Talha gave away Bayruha, the orchard he loved most, on the spot.",
    deathAr: "ولمّا نزلت: لن تنالوا البِرّ حتى تُنفقوا مما تُحبّون، تصدّق أبو طلحة ببَيرُحاء وكانت أحبّ أمواله إليه، من ساعته.",
    sources: [
      "Shielding the Prophet ﷺ at Uhud: Sahih al-Bukhari, Hadith 3811 and 4064 — Sahih, agreed upon",
      "The night his son died: Sahih al-Bukhari, Hadith 5470 and Sahih Muslim — Sahih, agreed upon",
      "Giving away Bayruha: Sahih al-Bukhari, Hadith 1461 — Sahih; the verse is Surah Al-Imran (3:92) — Quran",
      "Umm Sulaym's dowry: Sunan an-Nasa'i — outside the two Sahihs, authenticated by al-Albani"
    ]
  },

  "umm-sulaym": {
    before: "Umm Sulaym bint Milhan of the Khazraj became Muslim early. Her husband refused and left in anger, and she raised her son Anas alone on it.",
    beforeAr: "هي أمّ سليمٍ بنت مِلحان من الخزرج، أسلمت قديمًا. فأبى زوجها وغضب وخرج، فربّت ابنها أنسًا على الإسلام وحدها.",
    islam: "When Abu Talha proposed while still a disbeliever she refused wealth and said: your Islam is my dowry, I ask nothing else. He became Muslim and she married him.",
    islamAr: "ولمّا خطبها أبو طلحة وهو مشركٌ ردّت المال وقالت: إسلامك مهري لا أسألك غيره. فأسلم فتزوّجته.",
    change: "She gave her son Anas to the Prophet ﷺ as a servant when he was ten, and asked him to pray for him — the prayer that made Anas wealthy and long-lived.",
    changeAr: "وأهدت ابنها أنسًا خادمًا للنبي ﷺ وهو ابن عشر، وسألته أن يدعو له — فكانت الدعوة التي أكثرت ماله وولده وأطالت عمره.",
    greatest: "Her patience the night her son died: she prepared the meal, kept the news from her husband until morning, and only then told him — and the Prophet ﷺ blessed that night. And at Hunayn she was seen carrying a dagger; when the Prophet ﷺ asked, she said it was so that if a polytheist came near her she could open his stomach with it.",
    greatestAr: "صبرها ليلة مات ابنها: هيّأت الطعام وكتمت الخبر عن زوجها حتى أصبح ثم أخبرته — فبارك النبي ﷺ في تلك الليلة. ويوم حُنينٍ رُئي معها خنجر، فسألها النبي ﷺ فقالت: اتّخذتُه إن دنا مني أحدٌ من المشركين بقرتُ به بطنه.",
    death: "The Prophet ﷺ said he entered Paradise and heard footsteps ahead of him, and it was al-Ghumaysa — Umm Sulaym. She is one of the very few women narrated to have been given that in his lifetime.",
    deathAr: "وقال النبي ﷺ: دخلتُ الجنة فسمعتُ خَشفةً أمامي فإذا الغُمَيصاء — أمّ سليم. وهي من القليلات اللاتي جاء فيهنّ مثل هذا في حياته ﷺ.",
    sources: [
      "Her dowry: Sunan an-Nasa'i — outside the two Sahihs, authenticated by al-Albani",
      "The night her son died: Sahih al-Bukhari, Hadith 5470 and Sahih Muslim — Sahih, agreed upon",
      "The dagger at Hunayn: Sahih Muslim, Book of Jihad — Sahih",
      "Her footsteps in Paradise: Sahih Muslim, Book of the Merits of the Companions — Sahih",
      "The prayer for Anas: Sahih al-Bukhari, Hadith 1982 — Sahih, agreed upon"
    ]
  },

  "umm-ammara": {
    before: "Nusaybah bint Ka'b of the Khazraj, known as Umm Ammara, was one of only two women present at the second pledge of al-Aqabah — she pledged with the men.",
    beforeAr: "هي نُسيبة بنت كعبٍ من الخزرج، وتُكنى أمّ عُمارة، وكانت إحدى امرأتين حضرتا بيعة العقبة الثانية — بايعت مع الرجال.",
    islam: "She went out to Uhud carrying a water skin to tend the wounded, and ended the day carrying a sword.",
    islamAr: "خرجت يوم أُحدٍ ومعها قِربةٌ تسقي الجرحى، فانتهى بها اليوم وهي تحمل السيف.",
    change: "When the Muslim line broke and the Prophet ﷺ was exposed, she threw down the water and fought in front of him, shielding him with her body and her shield. She took thirteen wounds that day, and one deep cut in her shoulder that took a year to heal.",
    changeAr: "فلمّا انكشف المسلمون وبقي النبي ﷺ ألقت القِربة وقاتلت دونه، تقيه بجسدها وتُرسها. فأصابها يومئذٍ ثلاث عشرة جراحة، وجُرحٌ عميقٌ في عاتقها بقي سنةً يُعالج.",
    greatest: "The Prophet ﷺ said of that day: I did not turn right or left on the day of Uhud without seeing her fighting in front of me. And he prayed: O Allah, make them my companions in Paradise — so she said: I do not care what strikes me in this world.",
    greatestAr: "قال النبي ﷺ عن ذلك اليوم: ما التفتُّ يمينًا ولا شمالًا يوم أُحدٍ إلا وأراها تُقاتل دوني. ودعا: اللهم اجعلهم رفقائي في الجنة — فقالت: ما أُبالي ما أصابني من الدنيا.",
    death: "She was at Hudaybiyyah, at Khaybar and at Hunayn, and she went out to the wars of apostasy at al-Yamamah, where her hand was cut off and her son was killed. She lived on after it.",
    deathAr: "وشهدت الحديبية وخيبر وحُنينًا، وخرجت إلى حروب الردّة باليمامة، فقُطعت يدها وقُتل ابنها. وعاشت بعد ذلك.",
    sources: [
      "Fighting in front of him at Uhud, and his words about her: reported in the biographical works (Ibn Sa'd, Ibn Hisham) and in Musnad Ahmad — outside the two Sahihs",
      "Women at Uhud carrying water skins: Sahih al-Bukhari, Hadith 2880 and 4064 — Sahih",
      "Al-Yamamah and the loss of her hand: historical accounts — historical sira, not hadith"
    ]
  },

  "asma": {
    before: "Asma bint Abi Bakr was the older half-sister of Aishah رضي الله عنها and among the earliest Muslims — the eighteenth person to accept Islam.",
    beforeAr: "هي أسماء بنت أبي بكر، أخت عائشة رضي الله عنها لأبيها، ومن أوائل المسلمين — أسلمت الثامنة عشرة.",
    islam: "On the night of the hijrah she prepared the food for her father and the Prophet ﷺ, and had nothing to tie the bundle with — so she tore her waist-belt in two and used one half for the food and one for the water skin. The Prophet ﷺ said: Allah has given you two belts in Paradise instead of it. She has been called She of the Two Belts ever since.",
    islamAr: "ليلة الهجرة هيّأت الزاد لأبيها وللنبي ﷺ فلم تجد ما تشدّ به السُّفرة، فشقّت نطاقها نصفين، فشدّت بأحدهما الطعام وبالآخر السِّقاء. فقال النبي ﷺ: أبدلكِ الله بنطاقكِ هذا نطاقين في الجنة. فسُمّيت ذات النطاقين إلى اليوم.",
    change: "Abu Jahl came to the house looking for Abu Bakr and struck her across the face so hard that her earring flew off. She did not tell them anything. And when her blind grandfather came asking whether Abu Bakr had left them any money, she gathered stones, covered them with a cloth, and put his hand on it so he would think they were provided for.",
    changeAr: "وجاء أبو جهلٍ إلى الدار يطلب أبا بكر فلطم وجهها لطمةً طرح منها قُرطها، فما أخبرتهم بشيء. ولمّا جاء جدّها الأعمى يسأل: هل ترككم أبو بكرٍ بمالٍ؟ جمعت حجارةً وجعلت عليها ثوبًا ووضعت يده عليها ليطمئنّ أنهم في سَعة.",
    greatest: "Her last conversation with her son Abdullah ibn az-Zubayr, when he was besieged and about to be killed and came to say goodbye. She told him not to accept humiliation for fear of death, and said: if you are upon the truth and you die for it, then go — and how good a death it is. She was about a hundred years old and blind.",
    greatestAr: "آخر حديثٍ بينها وبين ابنها عبد الله بن الزبير، وقد حُوصر وأزمع القتل فجاء يودّعها. فنهته أن يقبل الدنيّة خوف الموت وقالت: إن كنتَ على حقٍّ وتموت عليه فامضِ، فنِعم الميتة. وكانت قد قاربت المئة وكُفّ بصرها.",
    death: "She died a few days after her son was killed. She had lived to see her father the first caliph, her son a claimant to the caliphate, and both of them buried.",
    deathAr: "وماتت بعد مقتله بأيام. وقد عاشت حتى رأت أباها أول الخلفاء، وابنها مُطالبًا بالخلافة، ثم دفنتهما جميعًا.",
    sources: [
      "The two belts on the night of the hijrah: Sahih al-Bukhari, Hadith 3907 — Sahih; and Sahih Muslim",
      "Abu Jahl striking her, and the stones for her grandfather: historical sira accounts (Ibn Hisham, Ibn Kathir) — historical sira, not hadith",
      "Her last words to her son: reported in the biographical and historical works — historical sira, not hadith",
      "Her age and blindness at the end: historical accounts — historical sira, not hadith"
    ]
  },

  "ibn-zubayr": {
    before: "Abdullah ibn az-Zubayr was the first child born to the emigrants in Madinah — and his birth was an answer to a rumour. The Jews of Madinah had said they had bewitched the Muslims so that no child would be born to them.",
    beforeAr: "هو عبد الله بن الزبير، أول مولودٍ للمهاجرين بالمدينة — وكان مولده ردًّا على إشاعة، إذ قالت يهود المدينة إنهم سحروا المسلمين فلا يُولد لهم.",
    islam: "When he was born the Muslims shouted the takbir so loudly that Madinah shook with it. The Prophet ﷺ chewed a date and put it in his mouth, so the first thing to enter his stomach was from the Prophet's ﷺ own mouth.",
    islamAr: "فلمّا وُلد كبّر المسلمون تكبيرةً ارتجّت لها المدينة. وحنّكه النبي ﷺ بتمرةٍ مضغها، فكان أول ما دخل جوفه من ريق النبي ﷺ.",
    change: "As a boy of about seven he came and gave the pledge to the Prophet ﷺ, and his father laughed at him. He was known afterwards for a courage and a devotion to prayer that people compared to nothing they had seen.",
    changeAr: "وجاء وهو ابن سبعٍ تقريبًا فبايع النبي ﷺ، فضحك أبوه منه. وعُرف بعدُ بشجاعةٍ وصلاةٍ لم يرَ الناس مثلهما.",
    greatest: "The siege. He held Makkah for years and was besieged, and when almost everyone had left him he went to his mother rather than to his allies — and she told him not to accept humiliation. He went out and fought until he was killed, in his seventies.",
    greatestAr: "الحصار. مَلَك مكة سنين ثم حوصر، فلمّا تخلّى عنه أكثر الناس ذهب إلى أمّه لا إلى أنصاره — فنهته عن الدنيّة. فخرج فقاتل حتى قُتل، وهو في السبعين.",
    death: "His body was hung up after his death, and his mother came and stood beneath it. Later the Umayyads relented. He is remembered for what his grandfather Abu Bakr and his father az-Zubayr were remembered for — that he would not bend.",
    deathAr: "وصُلب بعد قتله، فجاءت أمّه فوقفت تحته. ثم أُنزل بعد ذلك. ويُذكر بما ذُكر به جدّه أبو بكرٍ وأبوه الزبير: أنه لم يلِن.",
    sources: [
      "The first child of the emigrants and the takbir: Sahih al-Bukhari, Hadith 3909 and Sahih Muslim — Sahih, agreed upon",
      "The Prophet ﷺ chewing the date for him: Sahih al-Bukhari, Hadith 5469 — Sahih",
      "His pledge as a boy: Sahih al-Bukhari, Hadith 7210 — Sahih",
      "The siege and his death: historical accounts — historical sira, not hadith"
    ]
  },

  "ibn-mazun": {
    before: "Osman ibn Maz'un was among the first to become Muslim — about the fourteenth — and had already given up wine before Islam because he said it took a man's mind away.",
    beforeAr: "هو عثمان بن مظعون، من أوائل من أسلم — نحو الرابع عشر — وكان قد حرّم الخمر على نفسه في الجاهلية وقال: إنها تُذهب العقل.",
    islam: "He emigrated to Abyssinia, then returned to Makkah under the protection of a man of Quraysh. Then he found he could not bear having protection when other Muslims were being beaten — so he publicly gave the protection back, and was struck in the face and blinded in one eye. He said: by Allah, my other eye is in need of what befell its sister.",
    islamAr: "هاجر إلى الحبشة ثم رجع إلى مكة في جوار رجلٍ من قريش. ثم لم تطب نفسه أن يكون في جوارٍ والمسلمون يُضربون، فردّ الجوار علانيةً، فلُطم في وجهه ففُقئت عينه. فقال: والله إن عيني الأخرى لفقيرةٌ إلى ما أصاب أختها.",
    change: "He inclined towards renouncing the world entirely — he wanted to give up marriage and live as a monk. The Prophet ﷺ refused it and turned him back, and said that his sunnah includes marriage, and that he prays and sleeps, and fasts and breaks his fast.",
    changeAr: "ومال إلى الترهّب وأراد أن يترك النساء ويتبتّل، فردّه النبي ﷺ ونهاه، وأخبر أن من سنّته النكاح، وأنه يُصلّي وينام ويصوم ويُفطر.",
    greatest: "He was the first of the emigrants to die in Madinah, and the first to be buried in al-Baqi'. The Prophet ﷺ kissed him after his death while tears ran down his face.",
    greatestAr: "وهو أول من مات من المهاجرين بالمدينة، وأول من دُفن بالبقيع. وقبّله النبي ﷺ بعد موته ودموعه تسيل على وجهه.",
    death: "When his own daughter Ruqayyah died, the Prophet ﷺ said: join our righteous predecessor, Osman ibn Maz'un. And when a woman said at his death that Paradise was surely his, the Prophet ﷺ corrected her — by Allah, I am the Messenger of Allah and I do not know what will be done with me — teaching that nobody is declared into Paradise by name without a text.",
    deathAr: "ولمّا ماتت رقيّة بنت النبي ﷺ قال: الحقي بسلفنا الصالح عثمان بن مظعون. ولمّا قالت امرأةٌ عند موته: هنيئًا لك الجنة، ردّ عليها النبي ﷺ: والله إني لرسول الله وما أدري ما يُفعل بي — تعليمًا ألّا يُقطع لأحدٍ بعينه بالجنة بغير نصّ.",
    sources: [
      "Returning the protection and losing his eye: historical sira accounts (Ibn Hisham) — historical sira, not hadith",
      "Forbidding celibacy: Sahih al-Bukhari, Hadith 5073-5074 and Sahih Muslim — Sahih, agreed upon",
      "The Prophet ﷺ kissing him after death: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "I do not know what will be done with me: Sahih al-Bukhari, Hadith 1243 and 3929 — Sahih"
    ]
  },

  "abdullah-amr": {
    before: "Abdullah ibn Amr ibn al-As became Muslim before his father, and was known from the beginning for two things: worship, and writing everything down.",
    beforeAr: "هو عبد الله بن عمرو بن العاص، أسلم قبل أبيه، وعُرف من أول أمره بأمرين: العبادة، وكتابة كل ما يسمع.",
    islam: "He asked the Prophet ﷺ whether he should write down everything he heard from him, since he spoke both in anger and in contentment. The Prophet ﷺ said: write — by the One in whose hand is my soul, nothing comes out of it but the truth. He pointed to his own mouth as he said it.",
    islamAr: "استأذن النبي ﷺ في أن يكتب كل ما يسمع منه، وذكر أنه يتكلّم في الغضب والرضا. فقال ﷺ: اكتب، فوالذي نفسي بيده ما يخرج منه إلا حقّ. وأشار إلى فيه.",
    change: "So he wrote — and his collection, as-Sahifah as-Sadiqah, is one of the earliest written records of hadith there was, at a time when most were memorising rather than writing. Abu Hurairah رضي الله عنه said no one had more hadith than him except Abdullah, because he used to write and Abu Hurairah did not.",
    changeAr: "فكتب — وصحيفته الصادقة من أقدم ما دُوّن من الحديث، في زمنٍ كان أكثر الناس يحفظون ولا يكتبون. قال أبو هريرة رضي الله عنه: ما كان أحدٌ أكثر حديثًا عن رسول الله ﷺ مني إلا عبد الله، فإنه كان يكتب ولا أكتب.",
    greatest: "He was fasting every day and reciting the whole Quran every night. The Prophet ﷺ stopped him, and after negotiating him down step by step told him to fast three days a month, then a day on and a day off — the fast of Dawud — and to read the Quran in seven nights and no fewer. In old age Abdullah said: I wish I had accepted the lighter option the Prophet ﷺ offered me.",
    greatestAr: "كان يصوم الدهر ويقرأ القرآن في كل ليلة، فنهاه النبي ﷺ ونزل به درجةً درجة، حتى أمره بصيام ثلاثة أيامٍ من الشهر، ثم بصيام يومٍ وإفطار يوم — صيام داود — وأن يقرأ القرآن في سبعٍ لا أقلّ. فقال في كِبَره: ليتني قبلتُ رخصة رسول الله ﷺ.",
    death: "He died in Egypt or at at-Ta'if — the accounts differ. What he left behind is a great part of the written Sunnah.",
    deathAr: "ومات بمصر أو بالطائف — واختلفت الأخبار في ذلك. وما تركه جزءٌ كبيرٌ من السنة المكتوبة.",
    sources: [
      "Permission to write, and 'nothing comes out but the truth': Sunan Abu Dawud — outside the two Sahihs, authenticated by al-Albani",
      "Abu Hurairah on his writing: Sahih al-Bukhari, Hadith 113 — Sahih",
      "The fasting and the Quran in seven nights: Sahih al-Bukhari, Hadith 1975-1979 and 5052 — Sahih, agreed upon",
      "I wish I had accepted the lighter option: Sahih al-Bukhari, Hadith 1975 — Sahih",
      "The place of his death: historical accounts differ — historical sira, not hadith"
    ]
  },

  "thabit-qays": {
    before: "Thabit ibn Qays of the Khazraj was the orator of the Ansar, and the man who answered on their behalf when a delegation came to boast before the Prophet ﷺ.",
    beforeAr: "هو ثابت بن قيسٍ من الخزرج، خطيب الأنصار، وهو الذي أجاب عنهم لمّا قدِم وفدٌ يُفاخر بين يدي النبي ﷺ.",
    islam: "He had a very loud voice. When the verse came down — do not raise your voices above the voice of the Prophet — he shut himself in his house and wept, saying he was of the people of the Fire. The Prophet ﷺ sent for him and said: no — you are of the people of Paradise.",
    islamAr: "وكان جهير الصوت. فلمّا نزلت: لا ترفعوا أصواتكم فوق صوت النبي، أغلق عليه بابه وبكى وقال: أنا من أهل النار. فأرسل إليه النبي ﷺ وقال: بل أنت من أهل الجنة.",
    change: "His wife came to the Prophet ﷺ and said she found no fault in his religion or his character but could not bear to stay with him, and asked to be released. He asked whether she would return the orchard he had given her; she said yes — and he told Thabit to take it and let her go. It is the first khul' in Islam.",
    changeAr: "وجاءت امرأته النبي ﷺ فقالت: ما أعيب عليه في دينٍ ولا خُلق، ولكني أكره الكفر في الإسلام. وسألت الفراق. فسألها: أتردّين عليه حديقته؟ قالت: نعم. فأمر ثابتًا أن يأخذها ويُفارقها. وهو أول خُلعٍ في الإسلام.",
    greatest: "Al-Yamamah, against Musaylimah. When the Muslims wavered, Thabit put perfume on, wrapped his shroud around himself, dug his feet into the ground and refused to move — and fought until he was killed. He had said: this is not how we used to fight alongside the Messenger of Allah ﷺ.",
    greatestAr: "اليمامة، في قتال مسيلمة. لمّا تزعزع المسلمون تحنّط ثابتٌ وتكفّن، وحفر لقدميه في الأرض وأبى أن يبرح، فقاتل حتى قُتل. وكان قال: ما هكذا كنّا نُقاتل مع رسول الله ﷺ.",
    death: "He was killed there — one of the men the Prophet ﷺ had told, in his lifetime, that he was of the people of Paradise.",
    deathAr: "فقُتل هناك — وهو ممن أخبره النبي ﷺ في حياته أنه من أهل الجنة.",
    sources: [
      "Do not raise your voices, and 'you are of the people of Paradise': Sahih al-Bukhari, Hadith 3613 and 4846 and Sahih Muslim — Sahih, agreed upon; the verse is Surah Al-Hujurat (49:2)",
      "The first khul': Sahih al-Bukhari, Hadith 5273 — Sahih",
      "His death at al-Yamamah: historical accounts — historical sira, not hadith"
    ]
  },

  "salim-mawla": {
    before: "Salim was a freed slave, of no lineage that the Arabs counted — and he ended up leading the earliest emigrants in prayer, including Omar ibn al-Khattab رضي الله عنه, because he had memorised the most Quran.",
    beforeAr: "كان سالمٌ مولًى لا نسب له فيما تعدّه العرب — ثم صار يؤمّ أول المهاجرين ومنهم عمر بن الخطاب رضي الله عنه، لأنه كان أكثرهم قرآنًا.",
    islam: "That fact alone is the point of his life: the Prophet ﷺ made the imam the one who knows the most of the Book of Allah, and Salim is the proof of what that meant in practice.",
    islamAr: "وهذه الحقيقة وحدها هي معنى حياته: جعل النبي ﷺ الإمامة لأقرأ القوم لكتاب الله، وسالمٌ برهان ما عناه ذلك عمليًّا.",
    change: "The Prophet ﷺ named him among four men from whom the Quran should be taken: from Abdullah ibn Mas'ud, Salim the freed slave of Abu Hudhayfah, Ubayy ibn Ka'b and Mu'adh ibn Jabal. Two of the four were freed slaves.",
    changeAr: "وسمّاه النبي ﷺ في أربعةٍ يُؤخذ عنهم القرآن: من ابن مسعود، وسالمٍ مولى أبي حذيفة، وأُبيّ بن كعب، ومعاذ بن جبل. واثنان من الأربعة موالٍ.",
    greatest: "Al-Yamamah. He carried the banner of the emigrants. When his right hand was cut off he took it with his left; when that was cut he held the banner against his chest and recited: and how many a prophet fought, with him many devoted men. He was killed there.",
    greatestAr: "اليمامة. حمل راية المهاجرين، فلمّا قُطعت يمينه أخذها بشماله، فلمّا قُطعت احتضن الراية وقرأ: وكأيّن من نبيٍّ قاتل معه ربّيّون كثير. فقُتل هناك.",
    death: "Omar رضي الله عنه said as he was dying: if Salim the freed slave of Abu Hudhayfah were alive I would have appointed him — putting a freed slave forward for the caliphate over the nobility of Quraysh.",
    deathAr: "وقال عمر رضي الله عنه وهو يموت: لو كان سالمٌ مولى أبي حذيفة حيًّا لاستخلفته — يُقدّم مولًى على أشراف قريش.",
    sources: [
      "Take the Quran from four: Sahih al-Bukhari, Hadith 3808 and 4999 — Sahih",
      "Leading the emigrants in prayer: Sahih al-Bukhari, Hadith 692 — Sahih",
      "Omar's words about appointing him: historical accounts — historical sira, not hadith",
      "His death at al-Yamamah holding the banner: historical accounts — historical sira, not hadith; the verse is Surah Al-Imran (3:146)"
    ]
  },

  "zaynab-jahsh": {
    before: "Zaynab bint Jahsh was the Prophet's ﷺ cousin, of noble Quraysh birth, and had been married to Zayd ibn Harithah — the freed slave the Prophet ﷺ had raised.",
    beforeAr: "هي زينب بنت جحش، ابنة عمّة النبي ﷺ، شريفةٌ من قريش، وكانت تحت زيد بن حارثة — مولى النبي ﷺ الذي ربّاه.",
    islam: "That marriage was itself a lesson she accepted against her own inclination, because Allah and His Messenger had decided it. When it ended, her marriage to the Prophet ﷺ came down in the Quran itself.",
    islamAr: "وكان ذلك الزواج درسًا قبلته على خلاف هواها، لأن الله ورسوله قضيا به. فلمّا انتهى نزل زواجها من النبي ﷺ في القرآن نفسه.",
    change: "She used to say to the other wives, proudly: your families married you, and Allah married me from above the seven heavens.",
    changeAr: "وكانت تفخر على أزواج النبي ﷺ فتقول: زوّجكنّ أهاليكنّ، وزوّجني الله من فوق سبع سماوات.",
    greatest: "Her giving. The Prophet ﷺ told his wives that the first of them to follow him would be the one with the longest hand. They began measuring their hands against a wall — and it turned out to mean the one who gave the most in charity, which was Zaynab. She worked with her own hands, tanning and sewing, and gave away what she earned.",
    greatestAr: "عطاؤها. قال النبي ﷺ لأزواجه: أسرعكنّ لحاقًا بي أطولكنّ يدًا. فجعلن يتطاولن بأيديهنّ على الجدار — فإذا هي أكثرهنّ صدقة، وهي زينب. كانت تعمل بيدها وتدبغ وتخرز وتتصدّق بما تكسب.",
    death: "She was the first of the Mothers of the Believers to die after him, exactly as the hadith indicated. Aishah رضي الله عنها said of her: I never saw a woman better in religion, more fearing of Allah, more truthful in speech, more giving of kinship or more generous in charity than Zaynab.",
    deathAr: "وكانت أول أزواجه لحوقًا به كما دلّ الحديث. وقالت عائشة رضي الله عنها: ما رأيتُ امرأةً قطّ خيرًا في الدين من زينب، وأتقى لله، وأصدق حديثًا، وأوصل للرحم، وأعظم صدقة.",
    sources: [
      "Her marriage revealed in the Quran: Surah Al-Ahzab (33:37) — Quran",
      "Allah married me from above the seven heavens: Sahih al-Bukhari, Hadith 7420 — Sahih",
      "The longest hand and the charity: Sahih al-Bukhari, Hadith 1420 and Sahih Muslim — Sahih, agreed upon",
      "Aishah's praise of her: Sahih Muslim, Book of the Merits of the Companions — Sahih"
    ]
  },

  "safiyya": {
    before: "Safiyya bint Huyayy was the daughter of a chief of Banu an-Nadir, of the line of Harun عليه السلام. She was taken captive at Khaybar, in which her father and husband were killed.",
    beforeAr: "هي صفيّة بنت حُييّ، ابنة سيّد بني النضير، من نسل هارون عليه السلام. سُبيت يوم خيبر، وقُتل فيها أبوها وزوجها.",
    islam: "The Prophet ﷺ freed her and made her freedom her dowry, and married her. She said afterwards that no man had been better to her than him.",
    islamAr: "فأعتقها النبي ﷺ وجعل عتقها صداقها وتزوّجها. وقالت بعدُ: ما كان أحدٌ أحسن إليّ منه.",
    change: "When the other wives taunted her with being a Jewess, she went to the Prophet ﷺ weeping. He said: why did you not say — how can you be better than me, when my father is Harun, my uncle is Musa and my husband is Muhammad?",
    changeAr: "ولمّا عيّرتها بعض أزواجه بأنها يهوديّة جاءت النبي ﷺ تبكي، فقال: ألا قلتِ: كيف تكونين خيرًا مني وأبي هارون وعمّي موسى وزوجي محمد؟",
    greatest: "The night she came to visit him while he was in i'tikaf, and he walked her home. Two men of the Ansar passed and hurried away, embarrassed. He called them back and said: she is Safiyya bint Huyayy — Shaytan runs in a son of Adam like blood, and I feared he might cast something into your hearts. He protected two men from a suspicion they had not even voiced.",
    greatestAr: "الليلة التي زارته في اعتكافه فقام يقلبها إلى بيتها، فمرّ رجلان من الأنصار فأسرعا حياءً. فدعاهما وقال: إنها صفيّة بنت حُييّ، إن الشيطان يجري من ابن آدم مجرى الدم، وإني خشيتُ أن يقذف في قلوبكما شيئًا. فحمى رجلين من ظنٍّ لم ينطقا به.",
    death: "She was known for her forbearance and her charity. When Osman رضي الله عنه was besieged she stood by him and tried to get food and water through to him.",
    deathAr: "وعُرفت بالحلم والصدقة. ولمّا حُوصر عثمان رضي الله عنه وقفت معه وحاولت أن تُوصل إليه الطعام والماء.",
    sources: [
      "Her freedom as her dowry: Sahih al-Bukhari, Hadith 4200 and 5086 — Sahih, agreed upon",
      "My father is Harun, my uncle is Musa: Jami' at-Tirmidhi — outside the two Sahihs, authenticated by al-Albani",
      "Shaytan runs like blood: Sahih al-Bukhari, Hadith 2035 and Sahih Muslim — Sahih, agreed upon",
      "Standing by Osman in the siege: historical accounts — historical sira, not hadith"
    ]
  },

  "juwayriya": {
    before: "Juwayriya bint al-Harith was the daughter of the chief of Banu al-Mustaliq, taken captive when that tribe was defeated.",
    beforeAr: "هي جويرية بنت الحارث، ابنة سيّد بني المصطلق، سُبيت لمّا هُزمت القبيلة.",
    islam: "She came to the Prophet ﷺ asking for help with the payment for her freedom. He offered her better than that — that he would pay it and marry her. She accepted.",
    islamAr: "جاءت النبي ﷺ تستعينه في كتابتها، فعرض عليها ما هو خيرٌ من ذلك: أن يقضي عنها ويتزوّجها. فقبِلت.",
    change: "When the Muslims heard, they said: the in-laws of the Messenger of Allah ﷺ — and they freed every captive they held from that tribe. A hundred households were set free because of her marriage. Aishah رضي الله عنها said: I do not know a woman who was a greater blessing to her people than she was.",
    changeAr: "فلمّا بلغ المسلمين قالوا: أصهار رسول الله ﷺ — فأعتقوا ما بأيديهم من سبي تلك القبيلة. فأُعتق مئة أهل بيتٍ بسبب زواجها. قالت عائشة رضي الله عنها: فما أعلم امرأةً كانت أعظم بركةً على قومها منها.",
    greatest: "He came out to her one morning while she was in her place of prayer, and came back near midday to find her still there. He said: you are still as I left you? Then he taught her four phrases said three times each that would outweigh everything she had said since the morning: glory to Allah and praise be to Him, as many as the number of His creation, as pleases Him, as the weight of His Throne, and as much as the ink of His words.",
    greatestAr: "خرج من عندها بُكرةً وهي في مُصلّاها، ثم رجع قريبًا من الضحى وهي جالسة، فقال: ما زلتِ على الحال التي فارقتُكِ عليها؟ ثم علّمها أربع كلماتٍ ثلاث مراتٍ لو وُزنت بما قالته منذ اليوم لوزنتهنّ: سبحان الله وبحمده، عدد خلقه، ورضا نفسه، وزِنة عرشه، ومداد كلماته.",
    death: "She died in Madinah, remembered as the marriage that freed a hundred households.",
    deathAr: "وماتت بالمدينة، ويُذكر زواجها بأنه أعتق مئة أهل بيت.",
    sources: [
      "Her freedom, the marriage, and the freeing of her people: Sunan Abu Dawud — outside the two Sahihs, authenticated by al-Albani; and reported in the biographical works",
      "The four phrases: Sahih Muslim, Book of Remembrance and Supplication — Sahih",
      "Aishah's words about her blessing: reported with the account of her marriage — outside the two Sahihs"
    ]
  },

  "sawda": {
    before: "Sawda bint Zam'a had emigrated to Abyssinia with her husband for the sake of Islam, and he died there — leaving her a widow in a hostile city.",
    beforeAr: "هاجرت سودة بنت زمعة إلى الحبشة مع زوجها في سبيل الإسلام، فمات هناك — فبقيت أرملةً في بلدٍ معادٍ لها.",
    islam: "She was the first woman the Prophet ﷺ married after Khadijah رضي الله عنها died — at a time when he was grieving and had young daughters to raise, and she was neither young nor wealthy. It was a marriage of care, not of advantage.",
    islamAr: "وهي أول امرأةٍ تزوّجها النبي ﷺ بعد موت خديجة رضي الله عنها — في وقت حزنه وله بناتٌ صغارٌ يحتجن إلى من يقوم عليهنّ، وليست بشابّةٍ ولا ذات مال. فكان زواج رعايةٍ لا مصلحة.",
    change: "For years she was the only wife, and she raised his daughters. She was known for a generous, easy nature and for making people laugh.",
    changeAr: "وبقيت سنين وحدها زوجةً له، وقامت على بناته. وعُرفت بسَعة الخُلق والسخاء وبإضحاك من حولها.",
    greatest: "When she grew old and was afraid of being divorced, she gave her day and night to Aishah رضي الله عنها so that she could stay a wife of the Prophet ﷺ and be raised among his wives on the Day of Resurrection. He kept her. The Quran refers to a woman settling matters with her husband: and there is no blame upon them if they make terms of settlement between them — and settlement is best.",
    greatestAr: "فلمّا كبرت وخشيت الفراق وهبت يومها وليلتها لعائشة رضي الله عنها لتبقى زوجةً للنبي ﷺ وتُبعث في نسائه يوم القيامة. فأمسكها. وفي القرآن في المرأة تُصالح زوجها: فلا جُناح عليهما أن يُصلحا بينهما صلحًا، والصلح خير.",
    death: "She died in Madinah during the caliphate of Omar رضي الله عنه. Aishah رضي الله عنها said she never wished to be in the skin of any woman more than Sawda's.",
    deathAr: "وماتت بالمدينة في خلافة عمر رضي الله عنه. وقالت عائشة رضي الله عنها: ما من امرأةٍ أحبّ إليّ أن أكون في مِسلاخها من سودة.",
    sources: [
      "Giving her day to Aishah: Sahih al-Bukhari, Hadith 2593 and 5212 and Sahih Muslim — Sahih, agreed upon",
      "The verse on settlement: Surah An-Nisa (4:128) — Quran",
      "Aishah's words about her: Sahih Muslim, Book of Suckling — Sahih",
      "Her emigration to Abyssinia and her first husband: historical sira accounts — historical sira, not hadith"
    ]
  },

  "maymuna": {
    before: "Maymuna bint al-Harith was the last woman the Prophet ﷺ married, in the year of the fulfilled Umrah — and Makkah was still not his.",
    beforeAr: "هي ميمونة بنت الحارث، آخر من تزوّج النبي ﷺ، في عمرة القضاء — ومكة يومئذٍ ليست له.",
    islam: "She was the sister-in-law of al-Abbas and aunt of Khalid ibn al-Walid and Ibn Abbas رضي الله عنهم. Her marriage tied the Prophet ﷺ to several Makkan houses at once.",
    islamAr: "وهي أخت زوجة العباس، وخالة خالد بن الوليد وابن عباسٍ رضي الله عنهم. فوصل زواجها النبيَّ ﷺ ببيوتٍ من مكة في وقتٍ واحد.",
    change: "It was in her house that Ibn Abbas — a boy at the time and her nephew — stayed the night to watch how the Prophet ﷺ prayed at night. Much of what Muslims know about the night prayer comes from that one night in her house.",
    changeAr: "وفي بيتها بات ابن عباس — وهو غلامٌ يومئذٍ وابن أختها — لينظر كيف يُصلّي النبي ﷺ من الليل. وكثيرٌ مما يعرفه المسلمون عن قيام الليل جاء من تلك الليلة في بيتها.",
    greatest: "Aishah رضي الله عنها said of her: by Allah, she was the most fearing of Allah among us and the most giving of kinship.",
    greatestAr: "قالت عائشة رضي الله عنها فيها: أما إنها كانت من أتقانا لله وأوصلنا للرحم.",
    death: "She died at Sarif — the same place outside Makkah where the Prophet ﷺ had married her, years before. She had asked to be buried there.",
    deathAr: "وماتت بسَرِف — وهو الموضع نفسه خارج مكة الذي تزوّجها فيه قبل سنين. وكانت أوصت أن تُدفن هناك.",
    sources: [
      "Ibn Abbas spending the night in her house: Sahih al-Bukhari, Hadith 117 and 183 and Sahih Muslim — Sahih, agreed upon",
      "Aishah's words about her: reported in the biographical works — outside the two Sahihs",
      "Her marriage and death at Sarif: Sahih al-Bukhari mentions the marriage at Sarif, Hadith 1837 — Sahih; the burial there: historical accounts"
    ]
  },

  "abu-dujana": {
    before: "Simak ibn Kharashah of the Ansar was a fighter known for a red band he tied round his head — when Abu Dujana wore the red band, everyone knew there would be fighting.",
    beforeAr: "هو سِماك بن خرشة الأنصاري، مقاتلٌ عُرف بعصابةٍ حمراء يشدّها على رأسه — فإذا اعتصب أبو دُجانة بالحمراء علم الناس أنه القتال.",
    islam: "At Uhud the Prophet ﷺ took up a sword and said: who will take this sword with its right? Men reached for it and he withheld it. Abu Dujana asked: what is its right? He said: that you strike the enemy with it until it bends. He said: I will take it with its right — and he was given it.",
    islamAr: "يوم أُحدٍ أخذ النبي ﷺ سيفًا فقال: من يأخذ هذا السيف بحقّه؟ فبسط رجالٌ أيديهم فأمسكه عنهم. فقال أبو دُجانة: وما حقّه؟ قال: أن تضرب به العدوّ حتى ينحني. قال: أنا آخذه بحقّه — فأعطاه إياه.",
    change: "He went out strutting between the lines, and the Prophet ﷺ said: this is a walk Allah hates — except in a place like this.",
    changeAr: "فخرج يتبختر بين الصفّين، فقال النبي ﷺ: إنها لَمِشيةٌ يُبغضها الله إلا في مثل هذا الموطن.",
    greatest: "That day he was one of the small group who stayed with the Prophet ﷺ when the line broke. He made his own back a shield over him, and the arrows fell into it while he did not move.",
    greatestAr: "وثبت يومئذٍ مع النفر القليل حول النبي ﷺ لمّا انكشف الناس، وجعل ظهره جُنّةً فوقه، والنبل يقع فيه وهو لا يتحرّك.",
    death: "He was killed at al-Yamamah against Musaylimah — one of the men who went over the wall of the garden of death.",
    deathAr: "وقُتل باليمامة في قتال مسيلمة — وهو ممن اقتحم حديقة الموت.",
    sources: [
      "The sword and its right, and the strutting walk: Sahih Muslim, Book of the Merits of the Companions — Sahih",
      "Shielding the Prophet ﷺ with his back at Uhud: historical sira accounts (Ibn Hisham, Ibn Sa'd) — historical sira, not hadith",
      "His death at al-Yamamah: historical accounts — historical sira, not hadith"
    ]
  },

  "umm-habibah": {
    before: "Ramlah bint Abi Sufyan was the daughter of the man who led Quraysh against the Prophet ﷺ for years. She became Muslim while her father was still the chief enemy of Islam.",
    beforeAr: "هي رملة بنت أبي سفيان، ابنة الرجل الذي قاد قريشًا على النبي ﷺ سنين. أسلمت وأبوها بعدُ رأس أعداء الإسلام.",
    islam: "She emigrated to Abyssinia with her husband, and there he abandoned Islam and became Christian and died. She was left alone, a Muslim woman with a child in a foreign land, with her own father the enemy at home.",
    islamAr: "هاجرت إلى الحبشة مع زوجها، فتنصّر هناك وارتدّ ومات. فبقيت وحدها، امرأةً مسلمةً معها ابنتها في بلاد غربة، وأبوها العدوّ في بلدها.",
    change: "The Prophet ﷺ sent to the Negus to marry her on his behalf, while she was still in Abyssinia. The Negus performed the marriage and gave her a dowry from his own wealth. She had refused to go back to her father's religion, and she was not left to it.",
    changeAr: "فأرسل النبي ﷺ إلى النجاشي يخطبها وهي بالحبشة، فزوّجه إياها وأصدقها من عنده. فقد أبت أن ترجع إلى دين أبيها، فما تُركت لذلك.",
    greatest: "When Abu Sufyan came to Madinah before the conquest, still a disbeliever, trying to renew the treaty, he went to her house and moved to sit on the Prophet's ﷺ bedding. She folded it away from him. He said: daughter, do you think me too good for this bed, or it too good for me? She said: it is the bedding of the Messenger of Allah ﷺ, and you are an unclean idolater.",
    greatestAr: "ولمّا قدِم أبو سفيان المدينة قبل الفتح وهو مشرك يطلب تجديد العهد، دخل عليها فذهب ليجلس على فراش النبي ﷺ فطوته عنه. فقال: يا بنيّة، أرغبتِ بي عن هذا الفراش أم رغبتِ به عني؟ قالت: بل هو فراش رسول الله ﷺ، وأنت رجلٌ مشركٌ نجَس.",
    death: "Her father became Muslim at the conquest. She died in Madinah, and is remembered for choosing her religion over her father when the cost of it was everything she had.",
    deathAr: "وأسلم أبوها عام الفتح. وماتت بالمدينة، وتُذكر بأنها اختارت دينها على أبيها حين كان الثمن كل ما تملك.",
    sources: [
      "The Negus marrying her to the Prophet ﷺ: Sunan Abu Dawud and an-Nasa'i — outside the two Sahihs, authenticated by al-Albani; and reported in the biographical works",
      "Folding the bedding away from Abu Sufyan: historical sira accounts (Ibn Hisham, Ibn Kathir) — historical sira, not hadith",
      "Her husband's apostasy in Abyssinia: historical sira accounts — historical sira, not hadith"
    ]
  },

  "zaynab-khuzaymah": {
    before: "Zaynab bint Khuzaymah was called Umm al-Masakin — the mother of the poor — before Islam, because of how much she fed and gave to the destitute.",
    beforeAr: "هي زينب بنت خُزيمة، وكانت تُسمّى أمّ المساكين في الجاهلية، لكثرة ما كانت تُطعم المساكين وتُعطيهم.",
    islam: "The title was given to her by the people, not claimed by her, and it stayed with her after Islam because she did not stop.",
    islamAr: "واللقب سمّاها به الناس ولم تدّعِه هي، وبقي لها بعد الإسلام لأنها لم تتوقّف عن ذلك.",
    change: "Her husband was killed — the accounts say at Badr or at Uhud — and the Prophet ﷺ married her, as he did with other widows of the men who were killed.",
    changeAr: "قُتل زوجها — واختلفت الأخبار: ببدرٍ أو بأُحد — فتزوّجها النبي ﷺ، كما تزوّج غيرها من أرامل القتلى.",
    greatest: "That her whole remembered identity is a description of what she did for people who could do nothing for her in return. Almost nothing else about her is recorded — and that is, in a way, the point.",
    greatestAr: "أن هويّتها التي بقيت في الذاكرة كلّها وصفٌ لما كانت تصنعه بمن لا يستطيع أن يُكافئها. ولم يُحفظ عنها غير ذلك تقريبًا — وفي هذا نفسه معنًى.",
    death: "She stayed with the Prophet ﷺ only a short time — the reports say two or three months — and died in his lifetime. She and Khadijah رضي الله عنهما are the only two of his wives who died before him.",
    deathAr: "ولم تمكث عنده إلا يسيرًا — قيل شهرين أو ثلاثة — وماتت في حياته ﷺ. وهي وخديجة رضي الله عنهما الوحيدتان من أزواجه اللتان متن قبله.",
    sources: [
      "Her title Umm al-Masakin and her generosity: historical and biographical accounts (Ibn Sa'd, Ibn Kathir) — historical sira, not hadith",
      "Her marriage and her death in his lifetime: historical accounts — historical sira, not hadith",
      "NOTE: very little about her is established in the two Sahihs, and this entry does not pretend otherwise"
    ]
  }
};
