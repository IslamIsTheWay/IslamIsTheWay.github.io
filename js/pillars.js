/* ============================================================
   THE PILLARS — أركان الإسلام والإيمان
   The most basic thing a site called IslamBasics can carry, and
   it was missing entirely until 27 August 2026.

   WHY IT IS WRITTEN THE WAY IT IS. The owner asked for this in
   these words: "make sure that you deliver the explanations and
   the examples as simple as possible so everyone can understand
   … give certain conditions based on your explanation … I don't
   want for me to put one word and then it doesn't give me the
   answer that I want."

   So every card carries four things:
     plain   — the thing said in ordinary words, no jargon
     example — a concrete case with real numbers where money is
               involved, because "2.5% after a lunar year" means
               nothing until somebody shows you the sum
     proof   — the verse or the hadith, with its grading
     keys    — the everyday words a person types, in BOTH scripts

   EVERY ARABIC PROOF BELOW WAS COPIED OUT OF THE COLLECTION
   RECORD, not typed from memory. al-Bukhari 8, 38, 1395, 1405,
   1503, 1773, 5352 and Abu Dawud 1573 were each fetched and read
   before they were quoted here. The verses were taken from this
   site's own js/quran-text.js.

   TWO THINGS THE OWNER HAD WRONG, and correcting them is the
   whole reason the zakat section is this long:
     · the rate is 2.5%, not 2% — Abu Dawud 1573 gives five
       dirhams out of two hundred, and half a dinar out of twenty.
       Both are one fortieth.
     · it is YEARLY, not monthly — the same hadith: "وليس في مال
       زكاة حتى يحول عليه الحول". A salary is not zakated as it
       arrives; what is zakated is what you still hold when the
       year has turned.
   ============================================================ */

const PILLARS = {
  title: "The pillars — what Islam is actually built on",
  titleAr: "الأركان — ما بُني عليه الإسلام",
  intro: "Islam is built on five things, and belief on six. Almost everything else in the religion sits on top of these. This section says what each one is in ordinary words, what it asks of you in practice, and — where money is involved — shows the arithmetic.",
  introAr: "الإسلامُ مبنيٌّ على خمس، والإيمانُ على ستّ، وأكثرُ ما في الدِّين راجعٌ إليها. وهذا القسم يبيّن كلَّ ركنٍ بكلامٍ عاديّ، وما يطلبه منك عملًا، ويُريك الحسابَ بالأرقام حيث يكون المال.",

  groups: [
    /* ---------------- THE FIVE PILLARS OF ISLAM ---------------- */
    {
      id: "p-islam",
      title: "The five pillars of Islam",
      titleAr: "أركان الإسلام الخمسة",
      lead: "These five are the frame of the building. The Prophet ﷺ named them together in one sentence.",
      leadAr: "هذه الخمسُ هي بناءُ الدِّين، جمعها النبيُّ ﷺ في حديثٍ واحد.",
      proof: "Islam is built on five: the testimony that there is no god but Allah and that Muhammad is the Messenger of Allah; establishing the prayer; giving the zakat; the Hajj; and fasting Ramadan.",
      proofAr: "بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ",
      ref: "Sahih al-Bukhari, Hadith 8",
      refAr: "صحيح البخاري، حديث ٨",
      strength: "Sahih — narrated by al-Bukhari",
      strengthAr: "صحيح — رواه البخاري",
      items: [
        {
          id: "pi-shahada", num: "1", icon: "☝️",
          title: "The two testimonies — la ilaha illa Allah",
          titleAr: "الشهادتان — لا إله إلا الله",
          plain: "You say, and mean, that there is no god but Allah and that Muhammad ﷺ is His messenger. \"No god but Allah\" means nothing at all deserves worship except Allah — not a person, not a grave, not a saint, not luck, not money. \"Muhammad is His messenger\" means you take HOW to worship from him, and not from what people invented afterwards.",
          plainAr: "أن تقول وتعتقد أن لا معبود بحقٍّ إلا الله، وأن محمدًا ﷺ رسولُ الله. ومعنى «لا إله إلا الله» أنه لا يستحقُّ العبادةَ شيءٌ سوى الله: لا شخصٌ، ولا قبرٌ، ولا وليٌّ، ولا حظٌّ، ولا مال. ومعنى «محمد رسول الله» أنك تأخذ كيفيةَ العبادة عنه ﷺ لا عمّا أحدثه الناس بعده.",
          example: "This is how a person enters Islam — they say it and they mean it. But it is a promise, not a password. If a person says \"only Allah gives provision\" and then cheats at work because he is afraid of being poor, the tongue said one thing and the life said another. The words are meant to change what you do next.",
          exampleAr: "بهذه الكلمة يدخل المرءُ في الإسلام، يقولها ويعتقدها. لكنها عهدٌ لا كلمةُ مرور. فمن قال «لا رازقَ إلا الله» ثم غشَّ في عمله خوفًا من الفقر، فقد قال لسانُه شيئًا وقال حالُه غيرَه. وإنما تُقال لتغيّر ما تفعله بعدها.",
          keys: ["shahada", "shahadah", "testimony", "la ilaha illa allah", "how to become muslim", "convert", "revert", "become a muslim", "declaration of faith", "tawheed", "tawhid", "worship",
                 "الشهادة", "الشهادتان", "لا إله إلا الله", "كيف أدخل الإسلام", "أسلم", "الدخول في الإسلام", "التوحيد", "العبادة", "أشهد أن"]
        },
        {
          id: "pi-salah", num: "2", icon: "🕌",
          title: "The prayer — five times, every day and night",
          titleAr: "الصلاة — خمسٌ في اليوم والليلة",
          plain: "Five prayers every day and night: Fajr before sunrise, Dhuhr after the sun passes its highest point, Asr in the late afternoon, Maghrib just after sunset, and Isha at night. It is the first thing a person is asked about, and the one pillar that repeats every single day.",
          plainAr: "خمسُ صلواتٍ في اليوم والليلة: الفجرُ قبل شروق الشمس، والظهرُ بعد الزوال، والعصرُ في آخر النهار، والمغربُ بعد غروب الشمس، والعشاءُ في الليل. وهي أوّلُ ما يُسأل عنه العبد، والركنُ الوحيد الذي يتكرّر كلَّ يوم.",
          example: "It is not five hours — it is about five to ten minutes each. Five prayers is roughly half an hour out of twenty-four. And if you have missed years of them, that is a real question with a real answer: there is a ruling on this page written for exactly that, and you are not the first person to ask it.",
          exampleAr: "وليست خمسَ ساعات، بل نحو خمس إلى عشر دقائق للصلاة الواحدة، فالخمسُ جميعًا نحوُ نصف ساعة من أربعٍ وعشرين. وإن كنتَ قد تركتَها سنين، فذاك سؤالٌ حقيقيٌّ له جوابٌ حقيقيّ: في هذه الصفحة فتوى مكتوبة في هذا بعينه، ولستَ أوّلَ من سأل.",
          proof: "Allah has made obligatory upon them five prayers in every day and night.",
          proofAr: "أَنَّ اللَّهَ قَدِ افْتَرَضَ عَلَيْهِمْ خَمْسَ صَلَوَاتٍ فِي كُلِّ يَوْمٍ وَلَيْلَةٍ",
          ref: "Sahih al-Bukhari, Hadith 1395",
          refAr: "صحيح البخاري، حديث ١٣٩٥",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          link: "#rulings",
          linkEn: "Missed years of prayer? Read the ruling written for that",
          linkAr: "تركتَ الصلاةَ سنين؟ اقرأ الفتوى المكتوبة في ذلك",
          keys: ["prayer", "pray", "praying", "salah", "salat", "namaz", "five prayers", "how many prayers", "fajr", "dhuhr", "asr", "maghrib", "isha", "prayer times", "when to pray", "missed prayers",
                 "الصلاة", "الصلوات", "أصلي", "كم صلاة", "الصلوات الخمس", "الفجر", "الظهر", "العصر", "المغرب", "العشاء", "أوقات الصلاة", "متى أصلي", "تركت الصلاة"]
        },
        {
          id: "pi-zakat", num: "3", icon: "💰",
          title: "Zakat — 2.5% of your savings, once a lunar year",
          titleAr: "الزكاة — ربع العشر من مالك، مرّةً في السنة",
          plain: "Once a lunar year, if what you have saved has stayed above a certain level for that whole year, you give two and a half per cent of it to the poor. Two and a half — not two. Once a year — not every month, and not on your salary as it arrives.",
          plainAr: "مرّةً في السنة القمرية، إذا بقي ما ادّخرتَه فوق حدٍّ معيَّن طَوالَ الحول، تُخرج منه اثنين ونصفًا في المئة للفقراء. اثنان ونصف لا اثنان. ومرّةً في العام لا كلَّ شهر، ولا على الراتب كلَّما وصلك.",
          example: "The whole arithmetic, with worked examples, is in the box below — including what to do if you have never paid it.",
          exampleAr: "والحسابُ كلُّه بأمثلته في الصندوق أدناه، وفيه ما تصنع إن كنتَ لم تُخرجها قطُّ.",
          proof: "Allah has made obligatory upon them a charity in their wealth, taken from their rich and returned to their poor.",
          proofAr: "أَنَّ اللَّهَ افْتَرَضَ عَلَيْهِمْ صَدَقَةً فِي أَمْوَالِهِمْ، تُؤْخَذُ مِنْ أَغْنِيَائِهِمْ وَتُرَدُّ عَلَى فُقَرَائِهِمْ",
          ref: "Sahih al-Bukhari, Hadith 1395",
          refAr: "صحيح البخاري، حديث ١٣٩٥",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          link: "#zakat",
          linkEn: "The full arithmetic, the threshold, and worked examples",
          linkAr: "الحسابُ كاملًا، والنِّصاب، وأمثلةٌ محلولة",
          keys: ["zakat", "zakah", "zakaat", "charity obligation", "how much zakat", "2.5", "two and a half percent", "percentage", "give to the poor", "wealth tax", "savings",
                 "الزكاة", "زكاة", "كم الزكاة", "نسبة الزكاة", "ربع العشر", "زكاة المال", "أخرج الزكاة", "المدخرات", "الفقراء"]
        },
        {
          id: "pi-sawm", num: "4", icon: "🌙",
          title: "Fasting Ramadan — one month a year",
          titleAr: "صوم رمضان — شهرٌ في السنة",
          plain: "For one month a year you do not eat, do not drink, and do not have relations with your spouse, from the break of dawn until sunset. It is not only the stomach: the tongue fasts too — from lying, insulting and backbiting.",
          plainAr: "شهرًا في السنة تمتنع عن الطعام والشراب وإتيان الزوجة من طلوع الفجر إلى غروب الشمس. وليس الصومُ صومَ البطن وحده، بل يصوم اللسانُ أيضًا عن الكذب والسبِّ والغيبة.",
          example: "You do not fast, and you make the days up later, if you are ill, travelling, pregnant, nursing, or menstruating. If you cannot fast at all and never will — old age, a lasting illness — you feed a poor person for each day instead. Missing a day because it was hard is not the same as missing it because you were unable.",
          exampleAr: "ولا تصوم — وتقضي بعدُ — إن كنتَ مريضًا أو مسافرًا أو حاملًا أو مرضعًا أو حائضًا. فإن كنتَ لا تستطيع الصومَ أصلًا ولا يُرجى برؤك، ككبير السنّ وصاحب المرض المزمن، أطعمتَ عن كلِّ يومٍ مسكينًا. وليس تركُ الصوم لمشقّةٍ كتركه لعجز.",
          proof: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
          proofAr: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
          ref: "Surah al-Baqarah (2:183)",
          refAr: "سورة البقرة (٢:١٨٣)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "Whoever fasts Ramadan out of faith and seeking the reward, what came before of his sin is forgiven.",
          extraProofAr: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
          extraRef: "Sahih al-Bukhari, Hadith 38",
          extraRefAr: "صحيح البخاري، حديث ٣٨",
          keys: ["fasting", "fast", "sawm", "siyam", "ramadan", "ramadhan", "who does not fast", "sick", "travelling", "pregnant", "period", "make up fasts", "broke my fast", "fidya",
                 "الصيام", "الصوم", "أصوم", "رمضان", "من لا يصوم", "المريض", "المسافر", "الحامل", "الحيض", "القضاء", "أفطرت", "الفدية"]
        },
        {
          id: "pi-hajj", num: "5", icon: "🕋",
          title: "Hajj — once in a lifetime, if you are able",
          titleAr: "الحج — مرّةً في العمر لمن استطاع",
          plain: "Once in your life, if you are able, you travel to the Kaaba in Makkah for the Hajj. Once — not every year. And \"if you are able\" is part of the command itself, not an excuse people invented.",
          plainAr: "مرّةً واحدةً في العمر، إن استطعتَ، تحجُّ إلى بيت الله الحرام بمكة. مرّةً لا كلَّ عام. و«من استطاع إليه سبيلًا» جزءٌ من الأمر نفسه، لا عذرٌ اخترعه الناس.",
          example: "Being \"able\" is a real condition with a plain meaning: you have the money for the journey AND enough left for the people you support while you are away, after your debts are settled; you are physically able to make it; and the road is safe. If you are not able, Hajj is not owed by you and you are not sinning by not going. Save for it — do not borrow for it.",
          exampleAr: "والاستطاعةُ شرطٌ حقيقيٌّ ظاهرُ المعنى: أن تملك نفقةَ الطريق ونفقةَ من تعولهم في غيابك بعد قضاء دَينك، وأن تقدر ببدنك، وأن يكون الطريق آمنًا. فإن لم تستطع فليس الحجُّ واجبًا عليك ولا إثمَ عليك في تركه. وادَّخر له، ولا تستدِنْ من أجله.",
          proof: "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way.",
          proofAr: "وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلْبَيْتِ مَنِ ٱسْتَطَاعَ إِلَيْهِ سَبِيلًۭا",
          ref: "Surah Al Imran (3:97)",
          refAr: "سورة آل عمران (٣:٩٧)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "An accepted Hajj has no reward but Paradise.",
          extraProofAr: "وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ",
          extraRef: "Sahih al-Bukhari, Hadith 1773",
          extraRefAr: "صحيح البخاري، حديث ١٧٧٣",
          keys: ["hajj", "haj", "pilgrimage", "mecca", "makkah", "kaaba", "kabah", "umrah", "how many times hajj", "cannot afford hajj", "able", "istitaah",
                 "الحج", "أحج", "مكة", "الكعبة", "البيت الحرام", "العمرة", "كم مرة الحج", "لا أستطيع الحج", "الاستطاعة"]
        }
      ]
    },

    /* ---------------- THE SIX PILLARS OF FAITH ---------------- */
    {
      id: "p-iman",
      title: "The six pillars of faith (iman)",
      titleAr: "أركان الإيمان الستّة",
      lead: "The five above are what you DO. These six are what you BELIEVE. Jibril عليه السلام came to the Prophet ﷺ in the form of a man and asked him, in front of the companions, so that they would learn their religion — and this is the answer he was given.",
      leadAr: "الخمسُ التي قبلُ عملٌ، وهذه الستُّ اعتقاد. جاء جبريلُ عليه السلام إلى النبيِّ ﷺ في صورة رجل فسأله بحضرة الصحابة ليعلّمهم دينهم، فكان هذا جوابَه.",
      proof: "That you believe in Allah, His angels, His books, His messengers, the Last Day, and that you believe in the decree, its good and its bad.",
      proofAr: "أَنْ تُؤْمِنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ",
      ref: "Sahih Muslim, Book of Faith — the hadith of Jibril",
      refAr: "صحيح مسلم، كتاب الإيمان — حديث جبريل",
      strength: "Sahih — narrated by Muslim",
      strengthAr: "صحيح — رواه مسلم",
      note: "This is the six-item wording. The version in al-Bukhari 50 lists five and does not mention the books or the decree, which is why the six are cited from Muslim.",
      noteAr: "هذا لفظُ الستّ. ورواية البخاري (٥٠) فيها خمسٌ وليس فيها ذكرُ الكتب ولا القدر، ولذلك عُزيت الستُّ إلى مسلم.",
      items: [
        {
          id: "pm-allah", num: "1", icon: "☀️",
          title: "Belief in Allah",
          titleAr: "الإيمان بالله",
          plain: "That He is real; that He alone made and runs everything; that He alone is worshipped; and that His names and attributes are as He described them, without us twisting them or comparing Him to His creation.",
          plainAr: "أنه سبحانه موجودٌ حقًّا، وأنه وحده الخالقُ المدبِّر، وأنه وحده المعبود، وأن أسماءه وصفاته كما وصف بها نفسَه من غير تحريفٍ ولا تشبيهٍ بخلقه.",
          example: "In practice this is the difference between asking Allah directly and asking a dead saint to pass the message on. The first is belief in Allah; the second is the thing prophets were sent to stop.",
          exampleAr: "وأثرُ ذلك عمليًّا هو الفرقُ بين أن تسأل اللهَ مباشرةً وأن تسأل ميتًا أن يوصل حاجتك. الأوّلُ هو الإيمانُ بالله، والثاني هو ما بُعث الأنبياءُ لإبطاله.",
          keys: ["belief in allah", "believe in god", "does god exist", "who is allah", "god", "creator", "worship allah", "tawheed", "asking the dead", "shirk",
                 "الإيمان بالله", "من هو الله", "وجود الله", "الخالق", "عبادة الله", "التوحيد", "دعاء الأموات", "الشرك"]
        },
        {
          id: "pm-angels", num: "2", icon: "👼",
          title: "Belief in the angels",
          titleAr: "الإيمان بالملائكة",
          plain: "They are real creatures Allah made from light. They do not eat, do not sleep, do not have children, and never once disobey Him. Jibril brought the revelation; two angels write what you do; one is charged with the rain, one with the mountains, and one takes the soul at death.",
          plainAr: "خلقٌ حقيقيٌّ خلقهم الله من نور، لا يأكلون ولا ينامون ولا يتوالدون ولا يعصون اللهَ ما أمرهم. جبريلُ صاحبُ الوحي، وملكان يكتبان عملك، وملكٌ موكَّلٌ بالقَطر، وملكٌ بالجبال، وملكُ الموت يقبض الروح.",
          example: "The practical weight of this is simple: you are never alone in a room. Two are writing. That is meant to change what a person does when nobody human is watching.",
          exampleAr: "وأثرُ هذا بيّنٌ: ما أنتَ في غرفةٍ وحدك قطُّ، فثَمّ كاتبان. وهذا وحده يغيّر ما يصنعه المرءُ إذا خلا من أعين الناس.",
          keys: ["angels", "angel", "malaika", "jibril", "gabriel", "angel of death", "do angels exist", "recording angels", "two angels",
                 "الملائكة", "ملك", "جبريل", "ملك الموت", "الكرام الكاتبون", "هل الملائكة موجودة", "الحفظة"]
        },
        {
          id: "pm-books", num: "3", icon: "📖",
          title: "Belief in His books",
          titleAr: "الإيمان بالكتب",
          plain: "That Allah sent down books before this one — the Scrolls of Ibrahim, the Tawrah to Musa, the Zabur to Dawud, the Injil to Isa — and that the Quran is the last of them. You believe all of them came from Allah; you follow the Quran, because it is the one that came last and the only one kept word for word.",
          plainAr: "أن الله أنزل كتبًا قبل هذا الكتاب: صحفَ إبراهيم، والتوراةَ على موسى، والزبورَ على داود، والإنجيلَ على عيسى، وأن القرآن آخرُها. تؤمن أن جميعها من عند الله، وتتّبع القرآن لأنه الآخِر، ولأنه وحده المحفوظُ بلفظه.",
          example: "So a Muslim does not say the earlier books were nonsense. He says they came from Allah, and that what people hold today is not what was sent down unchanged — which is a different claim, and a fairer one.",
          exampleAr: "فالمسلمُ لا يقول إن الكتب السابقة باطلةٌ من أصلها، بل يقول إنها نزلت من عند الله، وإن الذي بأيدي الناس اليومَ ليس هو المنزَّلَ على وجهه — وهذه دعوى أخرى، وهي أعدل.",
          proof: "O you who have believed, believe in Allah and His Messenger and the Book that He sent down upon His Messenger and the Scripture which He sent down before.",
          proofAr: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ ءَامِنُوا۟ بِٱللَّهِ وَرَسُولِهِۦ وَٱلْكِتَٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ وَٱلْكِتَٰبِ ٱلَّذِىٓ أَنزَلَ مِن قَبْلُ",
          ref: "Surah an-Nisa (4:136)",
          refAr: "سورة النساء (٤:١٣٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["books", "scriptures", "torah", "tawrah", "injil", "gospel", "bible", "zabur", "psalms", "quran", "previous books", "believe in the bible",
                 "الكتب", "التوراة", "الإنجيل", "الزبور", "الصحف", "القرآن", "الكتب السابقة", "هل نؤمن بالإنجيل"]
        },
        {
          id: "pm-messengers", num: "4", icon: "📨",
          title: "Belief in His messengers",
          titleAr: "الإيمان بالرسل",
          plain: "That Allah sent messengers to every people, all of them with the same core message — worship Allah alone — and that Muhammad ﷺ is the last of them. You believe in every one of them. You do not pick some and reject others.",
          plainAr: "أن الله أرسل إلى كلِّ أمّةٍ رسولًا، ودعوتُهم واحدة: أن اعبدوا الله وحده، وأن محمدًا ﷺ خاتمُهم. تؤمن بهم جميعًا ولا تفرّق بين أحدٍ منهم.",
          example: "So a Muslim believes in Nuh, Ibrahim, Musa and Isa — peace be upon them — as prophets of Allah. Rejecting one of them is rejecting the One who sent them all.",
          exampleAr: "فالمسلمُ يؤمن بنوحٍ وإبراهيمَ وموسى وعيسى عليهم السلام أنبياءَ لله. وردُّ واحدٍ منهم ردٌّ على من أرسلهم جميعًا.",
          keys: ["messengers", "prophets", "rusul", "anbiya", "muhammad", "isa", "jesus", "musa", "moses", "ibrahim", "abraham", "nuh", "noah", "last prophet", "seal of the prophets",
                 "الرسل", "الأنبياء", "محمد", "عيسى", "موسى", "إبراهيم", "نوح", "خاتم الأنبياء", "آخر الرسل"]
        },
        {
          id: "pm-lastday", num: "5", icon: "⚖️",
          title: "Belief in the Last Day",
          titleAr: "الإيمان باليوم الآخر",
          plain: "That this life ends, that everyone is raised again, that every deed is brought out and weighed, and that there is Paradise and there is the Fire. It includes what happens in the grave, before all of that.",
          plainAr: "أن هذه الحياة تنتهي، وأن الناس يُبعثون، وأن كلَّ عملٍ يُخرَج ويُوزَن، وأن ثَمَّ جنّةً وثَمَّ نارًا. ويدخل فيه ما يكون في القبر قبل ذلك كلِّه.",
          example: "This is the belief that makes an unpunished wrong bearable. Someone who was robbed and never got justice is not told to forget it — he is told the court has not sat yet.",
          exampleAr: "وهذا هو الإيمانُ الذي يُحتمَل به الظلمُ الذي لم يُقتصّ منه. فالمظلومُ الذي لم يأخذ حقَّه لا يُقال له انسَ، بل يُقال له: لم تنعقد المحكمةُ بعد.",
          link: "judgement.html",
          linkEn: "The Day of Judgement, stage by stage",
          linkAr: "اليومُ الآخر، مرحلةً مرحلة",
          keys: ["last day", "day of judgement", "judgement day", "resurrection", "afterlife", "hereafter", "paradise", "jannah", "hell", "hellfire", "the grave", "what happens when you die", "akhirah",
                 "اليوم الآخر", "يوم القيامة", "البعث", "الآخرة", "الجنة", "النار", "القبر", "ماذا بعد الموت", "الحساب"]
        },
        {
          id: "pm-qadar", num: "6", icon: "🌾",
          title: "Belief in the decree — al-qadar, its good and its bad",
          titleAr: "الإيمان بالقدر خيره وشرّه",
          plain: "That Allah knew everything before it happened, wrote it, willed it, and created it — the parts you like and the parts you do not. Four things: He knew it, He wrote it, it happens by His will, and He created it.",
          plainAr: "أن الله علم كلَّ شيءٍ قبل وقوعه، وكتبه، وشاءه، وخلقه — ما يسرُّك منه وما يسوؤك. وهي أربع مراتب: علمٌ، وكتابةٌ، ومشيئةٌ، وخلق.",
          example: "THE COMMONEST MISUNDERSTANDING, and it is worth being clear about it: this does not mean your choices are fake or that trying is pointless. You still choose — you feel yourself choosing, and you are held responsible for it. Qadar is not an excuse used before you act (\"it was written, so I stole\"); it is a comfort after something has already happened and cannot be changed (\"I did everything I could, and this is what Allah decreed\"). Tie your camel first, then trust.",
          exampleAr: "وهذا أكثرُ ما يُساء فهمه، فليُحرَّر: ليس معناه أن اختيارك وهمٌ ولا أن السعيَ عبث. أنت تختار — وتجد من نفسك الاختيار — وتُحاسَب عليه. والقدرُ ليس حجّةً قبل الفعل: «قُدِّر عليَّ فسرقت»، وإنما هو سلوةٌ بعد وقوع ما لا يُردّ: «فعلتُ ما أستطيع، وهذا ما قدَّر الله». اعقلها أوّلًا ثم توكّل.",
          proof: "Indeed, all things We created with predestination.",
          proofAr: "إِنَّا كُلَّ شَىْءٍ خَلَقْنَٰهُ بِقَدَرٍۢ",
          ref: "Surah al-Qamar (54:49)",
          refAr: "سورة القمر (٥٤:٤٩)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["qadar", "qadr", "destiny", "fate", "predestination", "decree", "was it written", "free will", "do i have a choice", "why did this happen to me", "everything is written", "meant to be",
                 "القدر", "القضاء والقدر", "المكتوب", "النصيب", "الاختيار", "هل لي اختيار", "لماذا حدث لي هذا", "مكتوب عليّ", "الجبر"]
        }
      ]
    },

    /* ---------------- IHSAN ---------------- */
    {
      id: "p-ihsan",
      title: "And the level above both — ihsan",
      titleAr: "والمرتبة فوقهما — الإحسان",
      lead: "In the same hadith, Jibril asked a third question. Islam is what you do, iman is what you believe, and ihsan is how you do it.",
      leadAr: "وفي الحديث نفسه سأل جبريلُ سؤالًا ثالثًا. فالإسلامُ عمل، والإيمانُ اعتقاد، والإحسانُ هو كيف تعمل.",
      proof: "That you worship Allah as though you see Him; and if you do not see Him, then He surely sees you.",
      proofAr: "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
      ref: "Sahih Muslim, Book of Faith — the hadith of Jibril",
      refAr: "صحيح مسلم، كتاب الإيمان — حديث جبريل",
      strength: "Sahih — narrated by Muslim",
      strengthAr: "صحيح — رواه مسلم",
      items: [
        {
          id: "pn-ihsan", num: "", icon: "✨",
          title: "Doing it as though you can see Him",
          titleAr: "أن تعمل كأنك تراه",
          plain: "The difference between a prayer you rush through and a prayer you actually stand in. Same movements, same words — but one is done as though somebody is watching, and He is.",
          plainAr: "الفرقُ بين صلاةٍ تنقرها وصلاةٍ تقفها حقًّا. الحركاتُ واحدة والألفاظُ واحدة، لكن إحداهما تُؤدَّى وأنت تعلم أن ثَمَّ ناظرًا — وهو ناظرٌ فعلًا.",
          example: "It is also the answer to working honestly when no manager is in the building, and to how you speak to your family when no guest is in the house.",
          exampleAr: "وهو أيضًا جوابُ من يعمل بأمانةٍ وليس في المبنى مديرٌ يراه، وجوابُ كيف تكلّم أهلك وليس في البيت ضيف.",
          keys: ["ihsan", "excellence", "sincerity", "as though you see him", "khushu", "concentration in prayer", "watching me", "god sees me",
                 "الإحسان", "كأنك تراه", "الخشوع", "الإخلاص", "الله يراني", "المراقبة"]
        }
      ]
    }
  ],

  /* ================= ZAKAT, WITH THE ARITHMETIC ================= */
  zakat: {
    id: "zakat",
    title: "Zakat — the arithmetic, in full",
    titleAr: "الزكاة — الحسابُ كاملًا",
    intro: "Most of what people get wrong about zakat is the rate and the timing. Both are fixed by texts, and both are shown here with the sums worked out.",
    introAr: "أكثرُ ما يُخطئ فيه الناسُ في الزكاة النسبةُ والوقت، وكلاهما ثابتٌ بالنصّ، وهما مبيَّنان هنا بالحساب.",

    correction: {
      head: "Two things people commonly have wrong",
      headAr: "أمران يُخطئ فيهما كثيرٌ من الناس",
      points: [
        { en: "**The rate is 2.5%, not 2%.** The hadith gives five dirhams out of two hundred, and half a dinar out of twenty. Both come to exactly one fortieth — two and a half per cent. The scholars call it ربع العشر, a quarter of a tenth.",
          ar: "**النسبةُ اثنان ونصفٌ في المئة لا اثنان.** ففي الحديث: في مئتي درهمٍ خمسةُ دراهم، وفي عشرين دينارًا نصفُ دينار، وكلاهما جزءٌ من أربعين بالتمام، وهو ربعُ العشر." },
        { en: "**It is yearly, not monthly — and it is not a cut of your salary.** The same hadith says there is no zakat on wealth until a full year has turned over it. So you do not take a slice off each pay packet. You look at what you are STILL HOLDING when the year has come round, and you take 2.5% of that.",
          ar: "**وهي سنويّةٌ لا شهريّة، وليست اقتطاعًا من الراتب.** وفي الحديث نفسه: «وليس في مالٍ زكاةٌ حتى يحول عليه الحول». فلا تقتطع من كلِّ راتب، وإنما تنظر إلى ما بقي معك عند تمام الحول فتُخرج منه ربعَ العشر." }
      ],
      proof: "If you have two hundred dirhams and a year has turned over them, then in them are five dirhams. And you owe nothing — meaning in gold — until you have twenty dinars; if you have twenty dinars and a year has turned over them, then in them is half a dinar, and whatever is more is by that reckoning. … And there is no zakat on wealth until a year has turned over it.",
      proofAr: "فَإِذَا كَانَتْ لَكَ مِائَتَا دِرْهَمٍ وَحَالَ عَلَيْهَا الْحَوْلُ فَفِيهَا خَمْسَةُ دَرَاهِمَ، وَلَيْسَ عَلَيْكَ شَيْءٌ — يَعْنِي فِي الذَّهَبِ — حَتَّى يَكُونَ لَكَ عِشْرُونَ دِينَارًا، فَإِذَا كَانَ لَكَ عِشْرُونَ دِينَارًا وَحَالَ عَلَيْهَا الْحَوْلُ فَفِيهَا نِصْفُ دِينَارٍ، فَمَا زَادَ فَبِحِسَابِ ذَلِكَ … وَلَيْسَ فِي مَالٍ زَكَاةٌ حَتَّى يَحُولَ عَلَيْهِ الْحَوْلُ",
      ref: "Sunan Abu Dawud, Hadith 1573",
      refAr: "سنن أبي داود، حديث ١٥٧٣",
      strength: "Outside the two Sahihs — it is in the Sunan, and being in that book does not by itself make it authentic. The 2.5% rate itself, however, is agreed upon by the scholars, and the threshold is also established in al-Bukhari 1405.",
      strengthAr: "خارج الصحيحين — هو في السنن، ووجودُه فيها لا يجعله صحيحًا بنفسه. غير أن نسبة ربع العشر متّفقٌ عليها بين أهل العلم، والنِّصابُ ثابتٌ أيضًا في صحيح البخاري (١٤٠٥)."
    },

    threshold: {
      head: "The threshold (nisab) — below this, you owe nothing",
      headAr: "النِّصاب — وما دونه فلا زكاة فيه",
      body: "Zakat is not owed by someone who has little. There is a floor, and below it nothing is due. The floor is the value of 85 grams of gold, or 595 grams of silver — the modern weights of the twenty dinars and two hundred dirhams named in the texts. Look up today's price of a gram in your own currency and multiply. Many scholars, including the standing committees, tell you to use the SILVER figure when it is the lower of the two, because it brings more people into giving and so benefits the poor.",
      bodyAr: "لا زكاة على من ماله قليل، بل ثَمَّ حدٌّ لا شيء فيما دونه. وهو قيمةُ خمسةٍ وثمانين جرامًا من الذهب، أو خمسِ مئةٍ وخمسةٍ وتسعين جرامًا من الفضة، وهما وزنُ العشرين دينارًا والمئتي درهمٍ المذكورَين في النصوص بالمقاييس المعاصرة. فانظر سعرَ الجرام اليومَ بعملتك واضرب. وكثيرٌ من أهل العلم — ومنهم اللجان الدائمة — يأمرون باعتبار نصاب الفضّة إذا كان أقلَّ، لأنه أنفعُ للفقراء.",
      proof: "There is no charity due on less than five awaq [of silver].",
      proofAr: "لَيْسَ فِيمَا دُونَ خَمْسِ أَوَاقٍ صَدَقَةٌ",
      ref: "Sahih al-Bukhari, Hadith 1405",
      refAr: "صحيح البخاري، حديث ١٤٠٥",
      strength: "Sahih — narrated by al-Bukhari",
      strengthAr: "صحيح — رواه البخاري",
      note: "The gram figures are the scholars' conversion of the weights in the hadith, not words of the hadith itself. They shift slightly between sources, so check the current price before you calculate.",
      noteAr: "وأرقامُ الجرامات تحويلٌ من أهل العلم لأوزان الحديث لا لفظٌ في الحديث نفسه، وتختلف يسيرًا بين المصادر، فتحقَّق من السعر الحاليّ قبل الحساب."
    },

    examples: {
      head: "Worked examples — with the sums done",
      headAr: "أمثلةٌ محلولة — بالحساب",
      rows: [
        {
          q: "\"I earn 10,000 a month. Do I give 200 every month?\"",
          qAr: "«راتبي عشرة آلاف في الشهر، أفأُخرج مئتين كلَّ شهر؟»",
          a: "No — on both counts. Zakat is not taken from a salary as it arrives, and the rate is not 2%. Spend, give ordinary charity, live. Then pick one day in the year — many people use Ramadan because it is easy to remember — and look at what you are still holding.",
          aAr: "لا، في الأمرين جميعًا. فالزكاة لا تُؤخذ من الراتب كلَّما وصل، وليست النسبةُ اثنين في المئة. أنفِق وتصدَّق وعِش، ثم اجعل لك يومًا في السنة — وكثيرون يجعلونه في رمضان لأنه أيسرُ للتذكّر — فانظر ما بقي معك.",
          sum: "If on that day you are holding 30,000 in savings, and 30,000 is above the threshold, you give 2.5% of 30,000 = **750**, once, for that year.",
          sumAr: "فإن كان معك في ذلك اليوم ثلاثون ألفًا مدَّخرة، وهي فوق النصاب، أخرجتَ ربعَ عشرها: ٣٠٠٠٠ × ٢٫٥٪ = **٧٥٠**، مرّةً واحدةً عن تلك السنة."
        },
        {
          q: "\"I have had 100,000 sitting for a full year and never paid zakat on it.\"",
          qAr: "«عندي مئةُ ألفٍ مضى عليها حولٌ كامل ولم أُزكِّها قطُّ.»",
          a: "Then you owe it, and you pay it now. The sum is straightforward.",
          aAr: "فهي في ذمّتك وتُخرجها الآن، والحسابُ ظاهر.",
          sum: "100,000 × 2.5% = **2,500**. (Not 2,000 — that is the 2% figure, and the rate is 2.5%.)",
          sumAr: "١٠٠٠٠٠ × ٢٫٥٪ = **٢٥٠٠**. (لا ألفَين، فذاك حسابُ اثنين في المئة، والنسبةُ ربعُ العشر.)"
        },
        {
          q: "\"I never paid for three years.\"",
          qAr: "«لم أُزكِّ ثلاثَ سنين.»",
          a: "You owe a year for each year that passed, worked out on what you were holding at the end of each of them — and the balance goes down each year because the previous year's zakat came out of it.",
          aAr: "عليك عن كلِّ سنةٍ مضت، تُحسب على ما كان معك عند تمام كلِّ حول، والرصيدُ ينقص كلَّ عامٍ لأن زكاة العام الماضي خرجت منه.",
          sum: "On 100,000 held throughout: year 1 = 2,500 (leaving 97,500); year 2 = 2,437.50 (leaving 95,062.50); year 3 = 2,376.56. Total ≈ **7,314**. If working it out exactly is beyond you, estimate generously and ask a scholar — the debt is real and it does not lapse.",
          sumAr: "على مئة ألفٍ باقيةٍ: السنةُ الأولى ٢٥٠٠ (يبقى ٩٧٥٠٠)، والثانية ٢٤٣٧٫٥ (يبقى ٩٥٠٦٢٫٥)، والثالثة ٢٣٧٦٫٥٦. والمجموعُ نحوُ **٧٣١٤**. فإن أعياك التحريرُ فاحتَط وقدِّر بالأكثر واسأل أهلَ العلم، فالحقُّ ثابتٌ لا يسقط بالتقادم."
        },
        {
          q: "\"I have 1,000 saved. Do I owe anything?\"",
          qAr: "«معي ألفٌ مدَّخرة، أعليَّ شيء؟»",
          a: "Almost certainly not. If 85 grams of gold costs, say, 20,000 in your currency, then the threshold is 20,000 and 1,000 is far below it. No zakat is owed by you this year.",
          aAr: "الظاهرُ أنه لا شيء عليك. فإن كان ثمنُ خمسةٍ وثمانين جرامًا من الذهب — مثلًا — عشرين ألفًا بعملتك، فالنِّصابُ عشرون ألفًا، والألفُ دونه بكثير، فلا زكاة عليك هذا العام.",
          sum: "But ordinary charity (sadaqah) is never closed to you, at any amount, and the reward for a small amount given by someone who has little is not small."
          , sumAr: "غير أن بابَ الصدقة مفتوحٌ لك أبدًا بأيِّ قدر، وأجرُ القليل ممّن قلَّ مالُه ليس بقليل."
        },
        {
          q: "\"What exactly do I count?\"",
          qAr: "«ما الذي أحسبه؟»",
          a: "Cash in hand and in the bank, gold and silver, money you lent out and expect back, business stock at its selling value, and shares held to trade. You do NOT count the house you live in, the car you drive, your furniture, your clothes, or the tools you work with — those are in use, not stored wealth.",
          aAr: "النقدُ في يدك وفي البنك، والذهبُ والفضة، ودَينٌ لك على مليءٍ ترجو وفاءه، وعروضُ التجارة بقيمة بيعها، والأسهمُ المقتناة للتجارة. ولا تحسب بيتَك الذي تسكنه، ولا سيّارتَك التي تركبها، ولا أثاثَك ولا ثيابَك ولا آلةَ حرفتك، فهذه مستعمَلةٌ لا مُدَّخرة.",
          sum: "Gold jewellery a woman wears is a genuine disagreement among the scholars — some hold it is zakatable, some hold it is not. Ask someone you trust rather than assuming either way.",
          sumAr: "وحُليُّ المرأة الذي تلبَسه مسألةُ خلافٍ حقيقيٍّ بين أهل العلم: منهم من أوجب فيه الزكاة ومنهم من لم يوجبها. فاسأل من تثق بعلمه ولا تجزم بأحد القولين ابتداءً."
        }
      ]
    },

    recipients: {
      head: "Who it goes to — and who it does not",
      headAr: "لمن تُصرف — ولمن لا تُصرف",
      body: "Allah named the categories Himself, so they are not open to invention: the poor, the needy, those employed to collect it, those whose hearts are being reconciled, freeing captives, those in debt, the cause of Allah, and the stranded traveller.",
      bodyAr: "سمّى اللهُ المصارفَ بنفسه فليست موضعَ اجتهادٍ في أصلها: الفقراءُ، والمساكين، والعاملون عليها، والمؤلَّفةُ قلوبهم، وفي الرِّقاب، والغارمون، وفي سبيل الله، وابنُ السبيل.",
      proof: "Zakah expenditures are only for the poor and for the needy and for those employed to collect [zakah] and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveler - an obligation [imposed] by Allah.",
      proofAr: "إِنَّمَا ٱلصَّدَقَٰتُ لِلْفُقَرَآءِ وَٱلْمَسَٰكِينِ وَٱلْعَٰمِلِينَ عَلَيْهَا وَٱلْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِى ٱلرِّقَابِ وَٱلْغَٰرِمِينَ وَفِى سَبِيلِ ٱللَّهِ وَٱبْنِ ٱلسَّبِيلِ ۖ فَرِيضَةًۭ مِّنَ ٱللَّهِ",
      ref: "Surah at-Tawbah (9:60)",
      refAr: "سورة التوبة (٩:٦٠)",
      strength: "The Quran",
      strengthAr: "القرآن الكريم",
      notFor: [
        { en: "**Not to your own parents or your own children.** Supporting them is already a duty on you, so paying it out of zakat would be paying yourself. Give them from your ordinary money.",
          ar: "**لا لوالديك ولا لأولادك.** فنفقتُهم واجبةٌ عليك أصلًا، فإخراجُها من الزكاة إخراجٌ لها إلى نفسك. أعطِهم من مالك العاديّ." },
        { en: "**Not to someone rich, and not to build with.** Whether \"in the cause of Allah\" covers mosques and general projects is a real disagreement among scholars, and the majority read it narrowly. If you want to build, give sadaqah — that has no such restriction.",
          ar: "**ولا لغنيٍّ، ولا في البناء.** ودخولُ المساجد والمشاريع العامّة في «سبيل الله» خلافٌ حقيقيٌّ بين أهل العلم، وأكثرُهم على تضييقه. فإن أردتَ البناء فتصدَّق صدقةً عامّة، فليس فيها هذا القيد." },
        { en: "**Not as a favour you hold over someone.** A gift you follow with reminders of it is ruined; Allah says so of charity explicitly.",
          ar: "**ولا مِنّةً تُتبعها أذًى.** فالصدقةُ يُبطلها المنُّ والأذى، نصَّ اللهُ على ذلك في كتابه." }
      ]
    },

    virtues: {
      head: "What you are promised for giving it",
      headAr: "ما وُعِدتَ به على إخراجها",
      lead: "These are the texts as they stand. They are a promise from Allah, kept in the way He chooses — sometimes in this life, always in the next. They are not a scheme for getting rich.",
      leadAr: "هذه النصوصُ على وجهها، وهي وعدٌ من الله يُنجزه كيف شاء: في الدنيا أحيانًا، وفي الآخرة قطعًا. وليست بابًا لطلب الغنى.",
      points: [
        { en: "**It does not reduce your wealth.** \"No charity ever decreased wealth.\"",
          ar: "**لا تنقص مالك.** «ما نقصت صدقةٌ من مال».",
          ref: "Sahih Muslim, Book of Virtue and Good Manners", refAr: "صحيح مسلم، كتاب البرّ والصلة",
          strength: "Sahih — narrated by Muslim", strengthAr: "صحيح — رواه مسلم" },
        { en: "**Allah replaces what you spend.** \"Whatever thing you spend, He will replace it, and He is the best of providers.\"",
          ar: "**والله يُخلف ما أنفقت.** ﴿وَمَا أَنفَقْتُم مِّن شَىْءٍۢ فَهُوَ يُخْلِفُهُۥ وَهُوَ خَيْرُ ٱلرَّٰزِقِينَ﴾.",
          ref: "Surah Saba (34:39)", refAr: "سورة سبأ (٣٤:٣٩)",
          strength: "The Quran", strengthAr: "القرآن الكريم" },
        { en: "**Allah spends on the one who spends.** In a hadith qudsi: \"Spend, O son of Adam, and I will spend on you.\"",
          ar: "**والله يُنفق على من أنفق.** في الحديث القدسي: «أَنْفِقْ يَا ابْنَ آدَمَ أُنْفِقْ عَلَيْكَ».",
          ref: "Sahih al-Bukhari, Hadith 5352", refAr: "صحيح البخاري، حديث ٥٣٥٢",
          strength: "Sahih — narrated by al-Bukhari", strengthAr: "صحيح — رواه البخاري" },
        { en: "**He wipes out interest and grows charity.** \"Allah destroys interest and gives increase for charities.\"",
          ar: "**ويمحق الربا ويُنمي الصدقة.** ﴿يَمْحَقُ ٱللَّهُ ٱلرِّبَوٰا۟ وَيُرْبِى ٱلصَّدَقَٰتِ﴾.",
          ref: "Surah al-Baqarah (2:276)", refAr: "سورة البقرة (٢:٢٧٦)",
          strength: "The Quran", strengthAr: "القرآن الكريم" },
        { en: "**Multiplied like a seed.** One grain grows seven ears, each ear a hundred grains — \"and Allah multiplies for whom He wills.\"",
          ar: "**وتُضاعَف كالحبّة.** حبّةٌ أنبتت سبعَ سنابل في كلِّ سنبلةٍ مئةُ حبّة ﴿وَٱللَّهُ يُضَٰعِفُ لِمَن يَشَآءُ﴾.",
          ref: "Surah al-Baqarah (2:261)", refAr: "سورة البقرة (٢:٢٦١)",
          strength: "The Quran", strengthAr: "القرآن الكريم" },
        { en: "**The road is made easier for you.** \"As for he who gives and fears Allah and believes in the best reward — We will ease him toward ease.\"",
          ar: "**ويُيسَّر لك الطريق.** ﴿فَأَمَّا مَنْ أَعْطَىٰ وَٱتَّقَىٰ وَصَدَّقَ بِٱلْحُسْنَىٰ فَسَنُيَسِّرُهُۥ لِلْيُسْرَىٰ﴾.",
          ref: "Surah al-Layl (92:5-7)", refAr: "سورة الليل (٩٢:٥-٧)",
          strength: "The Quran", strengthAr: "القرآن الكريم" },
        { en: "**And the word itself tells you what it does.** \"Zakat\" means both *purification* and *growth* — it cleans the wealth of what is owed out of it, and it is called growth, not loss.",
          ar: "**والاسمُ نفسه يدلّ على معناه.** فالزكاةُ في اللغة الطهارةُ والنماء: تُطهِّر المالَ ممّا تعلَّق به من حقٍّ، وسُمِّيت نماءً لا نقصًا.",
          ref: "", refAr: "", strength: "", strengthAr: "" }
      ]
    },

    fitr: {
      head: "Zakat al-Fitr — a different thing, do not confuse them",
      headAr: "زكاة الفطر — غيرُ زكاة المال، فلا تخلط بينهما",
      body: "This one is not about savings and has no threshold. At the end of Ramadan, before the Eid prayer, one measure (a sa') of the staple food of the country is given for every person in the household — man and woman, adult and child, and the head of the house pays for those he supports. It is small, and it is owed by nearly everybody.",
      bodyAr: "هذه ليست في المدَّخرات ولا نصابَ لها. في آخر رمضان قبل صلاة العيد يُخرَج صاعٌ من غالب قوت البلد عن كلِّ نفسٍ في البيت: الذكرِ والأنثى، والصغيرِ والكبير، ويؤدّيها ربُّ البيت عمّن يعول. وهي يسيرةٌ وتلزم عامّةَ الناس.",
      proof: "The Messenger of Allah ﷺ made obligatory the zakat of al-fitr: a sa' of dates or a sa' of barley, upon the slave and the free, the male and the female, the young and the old among the Muslims.",
      proofAr: "فَرَضَ رَسُولُ اللَّهِ ﷺ زَكَاةَ الْفِطْرِ صَاعًا مِنْ تَمْرٍ، أَوْ صَاعًا مِنْ شَعِيرٍ، عَلَى الْعَبْدِ وَالْحُرِّ، وَالذَّكَرِ وَالْأُنْثَى، وَالصَّغِيرِ وَالْكَبِيرِ مِنَ الْمُسْلِمِينَ",
      ref: "Sahih al-Bukhari, Hadith 1503",
      refAr: "صحيح البخاري، حديث ١٥٠٣",
      strength: "Sahih — narrated by al-Bukhari",
      strengthAr: "صحيح — رواه البخاري",
      note: "A sa' is about 2.5 to 3 kilograms of the food itself. Whether the value may be given in money instead is a long-standing disagreement between the schools; the text names food.",
      noteAr: "والصاعُ نحوُ كيلوين ونصف إلى ثلاثة كيلوات من الطعام نفسه. وإخراجُ القيمة نقدًا مسألةُ خلافٍ قديمٍ بين المذاهب، والنصُّ إنما ذكر الطعام."
    }
  },

  /* The closing note: this page does not replace a scholar. */
  closing: "This section states what the texts say and shows the arithmetic. It does not replace asking someone who knows — especially where your own case has something unusual in it. binbaz.org.sa and binothaimeen.net answer these questions in detail.",
  closingAr: "هذا القسم يذكر ما دلَّت عليه النصوص ويُري الحساب، ولا يُغني عن سؤال أهل العلم، ولا سيّما إذا كان في حالك ما ليس في غيرها. وفي binbaz.org.sa و binothaimeen.net تفصيلُ هذه المسائل."
};
