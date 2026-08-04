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
  }
};
