/* ============================================================
   THE GRAVE — البرزخ: أوّلُ منزلٍ بعد الدنيا
   Rendered on BOTH pages from this one file:
     guidance.html#grave      renderGrouped("graveBox")
     judgement.html#grave     renderGrouped("jGraveBox")

   ONE FILE, TWO PAGES — AND THAT IS THE POINT. He asked for it
   on the Judgement page and on the Guidance page. His standing
   rule is not to write the same words twice, and the way to obey
   both is a shared dataset rendered in two places, not two
   copies that drift apart the first time one is corrected.

   WHAT HE ASKED FOR, and the shape follows it exactly:

     "two different sections... what will happen to you when you
      are put in your grave. If you were a believer, what will
      happen to your grave? It will widen up... it will open a
      door to see your place in heaven.

      Concentrate more in explaining and implanting fear inside
      those who didn't work and did not believe and did not pray.
      There are three questions... you will answer with I don't
      know. A bad looking creature with a bad smell, a door to
      hell that shows you where you're going to be. Explain if
      you'll be tortured, and how — the grave will get tight,
      your chest bones might get crushed.

      This is a beginner level, and the end level is in hell.
      ...mention the verses that explain what will happen and
      what will disbelievers say at that time."

   SO THE DISBELIEVER'S GROUP IS THE LONGEST ON PURPOSE. Four
   cards to the believer's three, and the language in it is
   deliberately plain and physical, because that is what he asked
   for and because the texts themselves are plain and physical.

   NOTHING IN IT IS INVENTED. Every image on these cards —
   the door opened to the Fire, the heat and the scorching wind,
   the grave closing until the ribs interlace, the blind and mute
   one with the iron mallet, the scream heard by everything but
   men and jinn, becoming dust and having the soul returned — is
   quoted from Abu Dawud 4753 and al-Bukhari 1338 and 1374. A
   page written to frighten must be more careful with its sources
   than one written to comfort, not less.

   THE ONE THING DELIBERATELY NOT QUOTED. The detail he named —
   that a man's deeds come to him in the grave in human form,
   beautiful or hideous — is in the LONGER narration of al-Bara'
   in Musnad Ahmad. This site does not hold a copy of Ahmad that
   could be searched by wording, and the rule here is that
   nothing is quoted from memory. So gr-widen and gr-door say it
   is reported in the longer narration, name where, and quote no
   Arabic for it. Everything else on the cards is verified.

   THE `simple` FIELD IS NEW AND IT IS HIS REQUEST TOO:
     "add a simple box... because some as you have are somehow
      complicated and not easy to understand."
   So every card opens with two or three very short sentences in
   the plainest words available, before anything else. Rendered
   by plCard as .pl-simple.

   Proofs: al-Bukhari 1338, 1361, 1374, 1377, 1378, 1379; Abu
   Dawud 4753; at-Tirmidhi 1071, 1376, 2460 with their statuses
   stated. Verses from this site's own js/quran-text.js.
   ============================================================ */

const GRAVE = {
  title: "The grave — the first stop, and it starts the moment they walk away",
  titleAr: "القبر — أوّلُ منزل، ويبدأ ساعةَ ينصرفون عنك",
  intro: "Between dying and the Day of Judgement there is a place the Quran gives a name: al-barzakh, the barrier. It is not sleep and it is not storage. Two things happen there — a questioning, and then either an ease or a punishment — and both begin before the mourners have reached their cars. This section sets out both, from the texts, without softening either one.",
  introAr: "بين الموت ويوم القيامة موضعٌ سمّاه القرآنُ باسمه: البرزخ. وليس نومًا ولا مستودعًا. يقع فيه أمران: سؤال، ثم نعيمٌ أو عذاب. وكلاهما يبدأ قبل أن يبلغ المشيّعون سيّاراتِهم. وهذا القسم يبسط الأمرين من النصوص، لا يُهوّن واحدًا منهما.",

  groups: [
    {
      id: "gg-what", icon: "🚪",
      title: "First — what this place is",
      titleAr: "أوّلًا — ما هذا الموضع؟",
      lead: "Two cards, and they apply to everybody. What follows them divides in two.",
      leadAr: "بطاقتان تعمّان كلَّ أحد، ثم ينقسم ما بعدهما قسمين.",
      items: [
        {
          id: "gr-what", icon: "⏸️",
          title: "Al-Barzakh — the Quran names it, and it has already begun",
          titleAr: "البرزخ — سمّاه القرآنُ باسمه، وقد بدأ",
          simple: "When you die you do not sleep until the Day. You go somewhere in between. The Quran calls it the barzakh — a barrier. And there is no coming back from it.",
          simpleAr: "إذا متَّ لا تنام إلى يوم القيامة، بل تنتقل إلى موضعٍ بين الاثنين. سمّاه القرآنُ البرزخ، أي الحاجز. ولا رجوع منه.",
          plain: "The verse is one of the most frightening in the Quran, and most people have read it without noticing what it is describing.\n\nA man is dying. He sees what is in front of him. And he asks for one thing — send me back, so I can do something good with what I left behind. The answer is a single word: NO.\n\nThen: \"it is only a word he is saying\" — meaning he does not mean it as a real intention, he means it as panic. And behind them is a BARZAKH, a barrier, until the Day they are raised.",
          plainAr: "الآيةُ من أشدّ ما في القرآن، ويقرؤها أكثرُ الناس ولا ينتبهون إلى ما تصف.\n\nرجلٌ يموت، فيرى ما بين يديه، فيسأل شيئًا واحدًا: أن يُردّ ليعمل صالحًا فيما ترك. فيكون الجوابُ كلمةً واحدة: ﴿كَلَّا﴾.\n\nثم: ﴿إِنَّهَا كَلِمَةٌ هُوَ قَآئِلُهَا﴾ — أي ليست عزمًا صادقًا، وإنما هي فزع. ﴿وَمِن وَرَآئِهِم بَرْزَخٌ إِلَىٰ يَوْمِ يُبْعَثُونَ﴾.",
          example: "So the request everybody assumes they will get to make has already been made, and answered, and the answer is recorded so that we would read it BEFORE we are in the position to make it.\n\nAnd note who is speaking. Not a criminal. Not somebody who denied Allah out loud. Just a man who reached the end and realised he had left things undone.",
          exampleAr: "فالطلبُ الذي يظنّ كلُّ أحدٍ أنه سيتاح له قد طُلب، وأُجيب عنه، وسُجّل الجوابُ لنقرأه قبل أن نبلغ الموضع الذي يُطلب فيه.\n\nوانظر إلى القائل: ليس مجرمًا، ولا جاحدًا صرّح بجحوده، وإنما رجلٌ بلغ النهاية فتبيّن له أنه ترك أمورًا لم يعملها.",
          proof: "Until, when death comes to one of them, he says: My Lord, send me back, that I might do righteousness in that which I left behind. No! It is only a word he is saying; and behind them is a barrier until the Day they are resurrected.",
          proofAr: "حَتَّىٰٓ إِذَا جَآءَ أَحَدَهُمُ ٱلْمَوْتُ قَالَ رَبِّ ٱرْجِعُونِ ۝ لَعَلِّىٓ أَعْمَلُ صَٰلِحًۭا فِيمَا تَرَكْتُ ۚ كَلَّآ ۚ إِنَّهَا كَلِمَةٌ هُوَ قَآئِلُهَا ۖ وَمِن وَرَآئِهِم بَرْزَخٌ إِلَىٰ يَوْمِ يُبْعَثُونَ",
          ref: "Surah Al-Mu'minun (23:99-100)",
          refAr: "سورة المؤمنون (٢٣:٩٩-١٠٠)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "The grave is either a garden from the gardens of Paradise, or a pit from the pits of the Fire.",
          extraProofAr: "الْقَبْرُ رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ، أَوْ حُفْرَةٌ مِنْ حُفَرِ النَّارِ",
          extraRef: "Jami' at-Tirmidhi, Hadith 2460",
          extraRefAr: "جامع الترمذي، حديث ٢٤٦٠",
          note: "The wording \"a garden or a pit\" is outside the two Sahihs — at-Tirmidhi narrated it and graded it gharib. The MEANING of it, that the grave already goes one of two ways, is established in al-Bukhari and Muslim and is what the rest of this section quotes.",
          noteAr: "ولفظُ «روضةٌ أو حفرة» خارج الصحيحين، رواه الترمذي وقال: غريب. وأمّا معناه — أنّ القبر يصير إلى إحدى حالين — فثابتٌ في البخاري ومسلم، وهو الذي يُنقل في بقيّة هذا القسم.",
          keys: ["barzakh", "what happens after death", "between death and judgement", "life in the grave", "send me back", "rabbi irjioon", "is death the end", "what happens when you die",
                 "البرزخ", "ماذا بعد الموت", "بين الموت والقيامة", "الحياة في القبر", "رب ارجعون", "هل الموت نهاية", "ماذا يحدث بعد الموت"]
        },
        {
          id: "gr-questions", icon: "❓",
          title: "The three questions — and nobody can revise for them",
          titleAr: "الأسئلة الثلاثة — ولا يستطيع أحدٌ أن يستعدّ لها بالحفظ",
          simple: "Two angels sit you up in the grave and ask three questions: Who is your Lord? What is your religion? Who is this man who was sent to you? You cannot memorise the answers. They come out of how you actually lived.",
          simpleAr: "يأتيك ملكان فيُجلسانك في قبرك ويسألانك ثلاثًا: من ربّك؟ وما دينك؟ ومن هذا الرجل الذي بُعث فيكم؟ ولا تُحفظ هذه الأجوبة، وإنما تخرج من طريقة عيشك.",
          plain: "The detail that stops people is the timing. He ﷺ said the dead man HEARS THE FOOTSTEPS of the people who buried him as they walk away. That is when it starts — not in a thousand years, not at the Trumpet. While the family is still at the graveside.\n\nThen two angels come, sit him up, and ask.\n\nAnd this is the part nobody can prepare for by learning the words. Two men can say the identical sentence, and only one of them will be able to say it there.",
          plainAr: "والذي يوقف الناسَ في هذا هو الوقت: قال ﷺ إنّ الميّت ليسمع قرعَ نعال الذين دفنوه وهم منصرفون. فهناك يبدأ الأمر — لا بعد ألف سنة، ولا عند النفخ في الصور، بل والأهلُ ما زالوا عند القبر.\n\nثم يأتيه ملكان فيُقعدانه فيسألانه.\n\nوهذا هو الذي لا يُستعدّ له بحفظ الألفاظ: فقد يقول رجلان الجملةَ نفسها، ولا يقدر على قولها هناك إلا واحد.",
          example: "Why can he not just say it? Because the answer is not being tested — the man is. He is being asked to state, with no help, no crowd and nothing left to gain, what he actually built his life on. A man who never once in sixty years stood up for a prayer is being asked what his religion is.\n\nThe Prophet ﷺ said the verse \"Allah keeps firm those who believe with the firm word\" was revealed about exactly this moment. Being kept firm is something done TO you there, on the strength of what you did here.",
          exampleAr: "ولمَ لا يقولها؟ لأنّ المُختبَر ليس الجواب، وإنما الرجلُ نفسه. يُطلب منه أن يقرّر — بلا معين ولا جمعٍ ولا شيءٍ يُرجى — على أيِّ شيءٍ بنى عمره. فيُسأل عن دينه رجلٌ لم يقم إلى صلاةٍ مرّةً واحدةً في ستّين سنة.\n\nوقد أخبر ﷺ أنّ قوله تعالى ﴿يُثَبِّتُ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ بِٱلْقَوْلِ ٱلثَّابِتِ﴾ نزلت في هذا الموضع بعينه. فالتثبيتُ شيءٌ يُفعل بك هناك، بما فعلتَه هنا.",
          proof: "When the servant is placed in his grave and his companions turn away — and he hears the striking of their sandals — two angels come to him and sit him up and say to him: what did you use to say about this man, Muhammad ﷺ?",
          proofAr: "إِنَّ الْعَبْدَ إِذَا وُضِعَ فِي قَبْرِهِ وَتَوَلَّى عَنْهُ أَصْحَابُهُ — وَإِنَّهُ لَيَسْمَعُ قَرْعَ نِعَالِهِمْ — أَتَاهُ مَلَكَانِ فَيُقْعِدَانِهِ فَيَقُولَانِ: مَا كُنْتَ تَقُولُ فِي هَذَا الرَّجُلِ مُحَمَّدٍ ﷺ؟",
          ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1338 and 1374",
          refAr: "صحيح البخاري، كتاب الجنائز، حديث ١٣٣٨ و١٣٧٤",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "Two angels come to him and sit him up and say: who is your Lord? He says: my Lord is Allah. They say: what is your religion? He says: my religion is Islam. They say: who is this man who was sent among you? He says: he is the Messenger of Allah ﷺ. They say: and how did you know? He says: I read the Book of Allah, and I believed in it and affirmed it.",
          extraProofAr: "وَيَأْتِيهِ مَلَكَانِ فَيُجْلِسَانِهِ فَيَقُولَانِ لَهُ: مَنْ رَبُّكَ؟ فَيَقُولُ: رَبِّيَ اللَّهُ. فَيَقُولَانِ لَهُ: مَا دِينُكَ؟ فَيَقُولُ: دِينِيَ الْإِسْلَامُ. فَيَقُولَانِ لَهُ: مَا هَذَا الرَّجُلُ الَّذِي بُعِثَ فِيكُمْ؟ فَيَقُولُ: هُوَ رَسُولُ اللَّهِ ﷺ. فَيَقُولَانِ: وَمَا يُدْرِيكَ؟ فَيَقُولُ: قَرَأْتُ كِتَابَ اللَّهِ فَآمَنْتُ بِهِ وَصَدَّقْتُ",
          extraRef: "Sunan Abu Dawud, Hadith 4753",
          extraRefAr: "سنن أبي داود، حديث ٤٧٥٣",
          note: "The names Munkar and Nakir come from a narration of at-Tirmidhi, not from al-Bukhari or Muslim. The questioning itself is in both Sahihs. Both facts are stated here as they are.",
          noteAr: "وتسميةُ المَلَكين «منكرًا ونكيرًا» من رواية الترمذي لا من البخاري ومسلم، والسؤالُ نفسه في الصحيحين. ويُذكر الأمران كما هما.",
          keys: ["three questions in the grave", "munkar and nakir", "questions of the grave", "who is your lord", "what is your religion", "two angels", "will i be able to answer",
                 "اسئلة القبر", "الاسئلة الثلاثة", "منكر ونكير", "من ربك", "ما دينك", "الملكان", "هل اقدر اجاوب", "سؤال القبر"]
        }
      ]
    },

    {
      id: "gg-believer", icon: "🌿",
      title: "If you were a believer — what happens then",
      titleAr: "إن كنتَ مؤمنًا — فماذا يكون؟",
      lead: "Three cards. Read them, and then read the group after them, because the two were narrated together in the same breath and are meant to be read that way.",
      leadAr: "ثلاثُ بطاقات. اقرأها ثم اقرأ ما بعدها، فقد رُويا معًا في نفَسٍ واحد، وحقُّهما أن يُقرآ كذلك.",
      items: [
        {
          id: "gr-answer", icon: "💬",
          title: "He answers — and is told to sleep",
          titleAr: "فيُجيب — ثم يُقال له: نَمْ",
          simple: "The believer answers the three questions. A voice from the sky says: my servant has told the truth. Then he is told to sleep, the way a bridegroom sleeps — the deepest, safest sleep there is.",
          simpleAr: "يُجيب المؤمنُ عن الثلاث، فينادي منادٍ من السماء: صدق عبدي. ثم يُقال له: نَمْ كنومة العروس — وهو أعمقُ نومٍ وأأمنُه.",
          plain: "He is asked, and he answers, and then something happens that is easy to miss: a caller from the SKY confirms it. \"My servant has told the truth. Spread out for him from Paradise, clothe him from Paradise, and open for him a door to Paradise.\"\n\nHe is not judged by the two angels in front of him. The verdict comes from above them, and it comes immediately.",
          plainAr: "يُسأل فيُجيب، ثم يقع ما يسهل أن يُغفل: ينادي منادٍ من السماء بالتصديق: «أن قد صدق عبدي، فأفرِشوه من الجنّة، وألبِسوه من الجنّة، وافتحوا له بابًا إلى الجنّة».\n\nفلم يحكم عليه المَلَكان اللذان بين يديه، وإنما جاء الحكمُ من فوقهما، وجاء من فوره.",
          example: "And then the instruction that people who love this hadith always remember: SLEEP — the sleep of a bridegroom, whom nobody wakes but the person dearest to him.\n\nSit with what that means for the fear people carry about the grave. For the one who arrives with something, it is not a prison and not a wait. It is described as the best night's sleep a human being ever gets.",
          exampleAr: "ثم الأمرُ الذي يحفظه كلُّ من أحبّ هذا الحديث: «نَمْ» — نومةَ العروس الذي لا يوقظه إلا أحبُّ أهله إليه.\n\nوتأمّل ما يصنعه هذا بالخوف الذي يحمله الناسُ من القبر: فهو لمن جاء بشيءٍ ليس سجنًا ولا انتظارًا، وإنما وُصف بأنه أحسنُ نومةٍ ينامها إنسان.",
          proof: "A caller calls from the sky: my servant has spoken the truth — so spread out for him from Paradise, and clothe him from Paradise, and open for him a door to Paradise.",
          proofAr: "فَيُنَادِي مُنَادٍ مِنَ السَّمَاءِ: أَنْ قَدْ صَدَقَ عَبْدِي، فَأَفْرِشُوهُ مِنَ الْجَنَّةِ، وَأَلْبِسُوهُ مِنَ الْجَنَّةِ، وَافْتَحُوا لَهُ بَابًا إِلَى الْجَنَّةِ",
          ref: "Sunan Abu Dawud, Hadith 4753",
          refAr: "سنن أبي داود، حديث ٤٧٥٣",
          strength: "Outside the two Sahihs — narrated by Abu Dawud and Ahmad through several routes; graded Sahih by al-Albani",
          strengthAr: "خارج الصحيحين — رواه أبو داود وأحمد من طرق، وصحّحه الألباني",
          extraProof: "Sleep as a bridegroom sleeps, whom none awakens but the dearest of his family to him.",
          extraProofAr: "نَمْ كَنَوْمَةِ الْعَرُوسِ الَّذِي لَا يُوقِظُهُ إِلَّا أَحَبُّ أَهْلِهِ إِلَيْهِ",
          extraRef: "Jami' at-Tirmidhi, Book of Funerals, Hadith 1071",
          extraRefAr: "جامع الترمذي، كتاب الجنائز، حديث ١٠٧١",
          keys: ["believer in the grave", "what happens to a believer", "sleep of the bridegroom", "my servant told the truth", "good grave", "grave of a believer",
                 "المؤمن في قبره", "نومة العروس", "صدق عبدي", "قبر المؤمن", "ماذا يحدث للمؤمن"]
        },
        {
          id: "gr-widen", icon: "🌅",
          title: "The grave widens, and a door opens onto Paradise",
          titleAr: "فيُفسح له قبرُه، ويُفتح له بابٌ إلى الجنّة",
          simple: "His grave is made wide. A door is opened onto Paradise, and its air and its scent come in through it. He can see into it as far as his eyes reach.",
          simpleAr: "يُوسَّع عليه قبرُه، ويُفتح له بابٌ إلى الجنّة، فيأتيه من رَوحها وطِيبها، ويُفتح له فيها مدَّ بصره.",
          plain: "Three things, all in the narration, and each one is physical:\n\nTHE DOOR. Opened onto Paradise, so that what comes through it is its fragrance and its cool air. Not a description read to him — a smell in the place where he is.\n\nTHE VIEW. \"And it is opened for him as far as his sight reaches.\" He can see where he is going, from where he is.\n\nAND THE SPACE. Qatadah, who narrates from Anas in al-Bukhari, adds: \"and it was mentioned to us that his grave is made spacious for him.\"",
          plainAr: "ثلاثةُ أمور، كلُّها في الرواية، وكلُّها حسّيّة:\n\nالباب: يُفتح إلى الجنّة، فيأتيه منها رَوحُها وطِيبها. ليس وصفًا يُتلى عليه، بل رائحةٌ في الموضع الذي هو فيه.\n\nوالمنظر: «ويُفتح له فيها مدَّ بصره». فيرى إلى أين هو صائر، وهو في موضعه.\n\nوالسَّعة: زاد قتادةُ راويًا عن أنسٍ في البخاري: «وذُكر لنا أنه يُفسح له في قبره».",
          example: "And there is a second thing, from a separate hadith in al-Bukhari, that is not once but twice a day, every day, for however long the barzakh lasts: his seat is shown to him MORNING AND EVENING. \"If he is of the people of Paradise, then from the people of Paradise... and it is said: this is your seat until Allah raises you on the Day of Resurrection.\"\n\nSo it is not one glimpse. It is a view he is given every single morning and every single evening, of a place already assigned to him, that he cannot lose.",
          exampleAr: "وثَمَّ أمرٌ ثانٍ من حديثٍ آخر في البخاري، وهو لا مرّةً واحدةً بل مرّتين في كلِّ يوم ما بقي البرزخ: يُعرض عليه مقعدُه بالغداة والعشيّ. «إن كان من أهل الجنّة فمن أهل الجنّة... ويُقال: هذا مقعدُك حتى يبعثك الله يوم القيامة».\n\nفليست نظرةً واحدة، وإنما هو منظرٌ يُعطاه كلَّ صباحٍ وكلَّ مساء، لموضعٍ قد كُتب له لا يفوته.",
          proof: "So there comes to him of its fragrance and its sweet air, and it is opened for him as far as his sight can reach.",
          proofAr: "فَيَأْتِيهِ مِنْ رَوْحِهَا وَطِيبِهَا، وَيُفْتَحُ لَهُ فِيهَا مَدَّ بَصَرِهِ",
          ref: "Sunan Abu Dawud, Hadith 4753",
          refAr: "سنن أبي داود، حديث ٤٧٥٣",
          strength: "Outside the two Sahihs — narrated by Abu Dawud and Ahmad; graded Sahih by al-Albani",
          strengthAr: "خارج الصحيحين — رواه أبو داود وأحمد، وصحّحه الألباني",
          extraProof: "When one of you dies, his seat is shown to him morning and evening. If he is of the people of Paradise then of the people of Paradise, and if he is of the people of the Fire then of the people of the Fire. It is said: this is your seat until Allah raises you on the Day of Resurrection.",
          extraProofAr: "إِنَّ أَحَدَكُمْ إِذَا مَاتَ عُرِضَ عَلَيْهِ مَقْعَدُهُ بِالْغَدَاةِ وَالْعَشِيِّ، إِنْ كَانَ مِنْ أَهْلِ الْجَنَّةِ فَمِنْ أَهْلِ الْجَنَّةِ، وَإِنْ كَانَ مِنْ أَهْلِ النَّارِ فَمِنْ أَهْلِ النَّارِ، فَيُقَالُ: هَذَا مَقْعَدُكَ حَتَّى يَبْعَثَكَ اللَّهُ يَوْمَ الْقِيَامَةِ",
          extraRef: "Sahih al-Bukhari, Book of Funerals, Hadith 1379",
          extraRefAr: "صحيح البخاري، كتاب الجنائز، حديث ١٣٧٩",
          note: "You will also hear that a man's deeds come to him there in the form of a person — beautiful of face and clothing and scent — who says: I am your righteous deeds. That detail is in the LONGER narration of al-Bara' recorded in Musnad Ahmad. It is not in al-Bukhari, Muslim or the wording of Abu Dawud quoted above, and this site does not hold a copy of Ahmad it could check word by word — so it is named here and no Arabic is quoted for it. Everything else on this card is verified.",
          noteAr: "وستسمع أيضًا أنّ عملَ الرجل يأتيه هناك في صورة إنسانٍ حسنِ الوجه والثياب والريح فيقول: أنا عملُك الصالح. وهذه الزيادة في الرواية الطويلة لحديث البراء عند الإمام أحمد في المسند. وليست في البخاري ولا مسلم ولا في لفظ أبي داود المتقدّم، وليس عند هذا الموقع نسخةٌ من المسند يقابل عليها اللفظ — فذُكرت ولم يُنقل لها لفظٌ عربيّ. وسائرُ ما في هذه البطاقة موثَّق.",
          keys: ["grave widens", "door to paradise", "grave of the believer", "smell of paradise", "seat shown morning and evening", "he sees his place", "good news in the grave",
                 "يوسع قبره", "باب الى الجنة", "قبر المؤمن", "ريح الجنة", "يعرض عليه مقعده", "يرى مكانه", "بشرى في القبر"]
        },
        {
          id: "gr-taken", icon: "🕊️",
          title: "And how the soul is taken from him in the first place",
          titleAr: "وكيف تُقبض روحُه ابتداءً",
          simple: "The angels who come for a believer greet him with peace. The Quran says they tell him: peace be upon you — enter Paradise for what you used to do.",
          simpleAr: "الملائكةُ الذين يأتون المؤمنَ يُسلّمون عليه. قال تعالى إنهم يقولون له: ﴿سَلَٰمٌ عَلَيْكُمُ ٱدْخُلُوا۟ ٱلْجَنَّةَ بِمَا كُنتُمْ تَعْمَلُونَ﴾.",
          plain: "Everything above begins before the burial. The Quran describes the moment of death twice — once for each kind of person — and the difference is not in the pain. It is in who arrives.\n\nFor the believer: the angels take him TAYYIBIN — in a good and pure state — and they SAY SALAM to him. The first words he hears in the next world are a greeting.\n\nAnd elsewhere: those who said \"our Lord is Allah\" and then stood firm, the angels descend on them saying: do not fear, and do not grieve, and receive good news of the Paradise you were promised.",
          plainAr: "وكلُّ ما تقدّم يبدأ قبل الدفن. وقد وصف القرآنُ لحظة الموت مرّتين — لكلِّ صنفٍ مرّة — والفرقُ ليس في الألم، وإنما فيمن يحضر.\n\nفالمؤمن تتوفّاه الملائكةُ ﴿طَيِّبِينَ﴾، ويقولون له: ﴿سَلَٰمٌ عَلَيْكُمُ﴾. فأوّلُ ما يسمعه في الدار الآخرة سلام.\n\nوفي موضعٍ آخر: الذين قالوا ربُّنا اللهُ ثم استقاموا تتنزّل عليهم الملائكةُ ﴿أَلَّا تَخَافُوا۟ وَلَا تَحْزَنُوا۟ وَأَبْشِرُوا۟ بِٱلْجَنَّةِ ٱلَّتِى كُنتُمْ تُوعَدُونَ﴾.",
          example: "And the most-quoted of all of them, which is read at funerals for a reason: \"O soul at rest, return to your Lord, well-pleased and pleasing to Him. So enter among My servants, and enter My Paradise.\"\n\nRead the order in that verse. Well-pleased comes first — she is content — and then pleasing. The state she is in when called is the state she built.",
          exampleAr: "وأشهرُها جميعًا، والذي يُقرأ في الجنائز لعلّة: ﴿يَٰٓأَيَّتُهَا ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ ٱرْجِعِىٓ إِلَىٰ رَبِّكِ رَاضِيَةًۭ مَّرْضِيَّةًۭ فَٱدْخُلِى فِى عِبَٰدِى وَٱدْخُلِى جَنَّتِى﴾.\n\nوتأمّل الترتيب: ﴿رَاضِيَةً﴾ أوّلًا — فهي راضية — ثم ﴿مَّرْضِيَّةً﴾. فالحالُ التي تُنادى عليها هي الحالُ التي بَنَتها.",
          proof: "The ones whom the angels take in death, being good and pure — they say: peace be upon you. Enter Paradise for what you used to do.",
          proofAr: "ٱلَّذِينَ تَتَوَفَّىٰهُمُ ٱلْمَلَٰٓئِكَةُ طَيِّبِينَ ۙ يَقُولُونَ سَلَٰمٌ عَلَيْكُمُ ٱدْخُلُوا۟ ٱلْجَنَّةَ بِمَا كُنتُمْ تَعْمَلُونَ",
          ref: "Surah An-Nahl (16:32)",
          refAr: "سورة النحل (١٦:٣٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "O soul at rest, return to your Lord, well-pleased and pleasing to Him. So enter among My servants, and enter My Paradise.",
          extraProofAr: "يَٰٓأَيَّتُهَا ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ ۝ ٱرْجِعِىٓ إِلَىٰ رَبِّكِ رَاضِيَةًۭ مَّرْضِيَّةًۭ ۝ فَٱدْخُلِى فِى عِبَٰدِى ۝ وَٱدْخُلِى جَنَّتِى",
          extraRef: "Surah Al-Fajr (89:27-30)",
          extraRefAr: "سورة الفجر (٨٩:٢٧-٣٠)",
          keys: ["angel of death believer", "how the soul is taken", "soul at rest", "nafs mutmainnah", "angels greet him", "dying as a believer", "peace be upon you",
                 "قبض روح المؤمن", "النفس المطمئنة", "ملك الموت", "الملائكة تسلم عليه", "موت المؤمن", "سلام عليكم"]
        }
      ]
    },

    {
      id: "gg-other", icon: "🔥",
      title: "And if you were not — read this one slowly",
      titleAr: "وإن لم تكن — فاقرأ هذا على مهل",
      lead: "Four cards, and they are longer than the three above them on purpose. Everything in them is quoted; nothing is added for effect.",
      leadAr: "أربعُ بطاقات، وهي أطولُ من الثلاث التي قبلها قصدًا. وكلُّ ما فيها منقول، ولم يُزد فيها شيءٌ للتهويل.",
      items: [
        {
          id: "gr-idontknow", icon: "😶",
          title: "\"Haah… haah… I don't know\"",
          titleAr: "«هاهْ… هاهْ… لا أدري»",
          simple: "He is asked the same three questions. He cannot answer any of them. He says: haah, haah, I do not know. Then a voice from the sky says: he has lied.",
          simpleAr: "يُسأل الأسئلةَ الثلاثة نفسَها فلا يستطيع جوابًا، فيقول: هاهْ هاهْ لا أدري. فينادي منادٍ من السماء: أنْ كذب.",
          plain: "The sound in the narration is not a word. It is the noise a person makes when he is trying to produce an answer and nothing comes. HAAH. HAAH. Three times for the first question, then twice for the second, then twice for the third.\n\nAnd in al-Bukhari's wording the hypocrite says something even worse, because it is so recognisable: I DO NOT KNOW — I USED TO SAY WHAT THE PEOPLE SAID.\n\nHe is told: \"You did not know, and you did not follow those who knew.\"",
          plainAr: "الصوتُ في الرواية ليس كلمة، وإنما هو ما يُخرجه الإنسانُ وهو يحاول أن يأتي بجوابٍ فلا يأتيه شيء: هاهْ. هاهْ. ثلاثًا في الأولى، ثم مرّتين في الثانية، ثم مرّتين في الثالثة.\n\nوفي لفظ البخاري يقول المنافقُ ما هو أشدّ، لأنه أشدُّ شبهًا بحالنا: «لا أدري، كنتُ أقول ما يقول الناس».\n\nفيُقال له: «لا دَرَيْتَ وَلَا تَلَيْتَ».",
          example: "Stop on that sentence, because it is the most frightening one on this page and it is not about an atheist. \"I used to say what the people said.\"\n\nThat is a man who prayed when everyone prayed. Who fasted because the family fasted. Who said the right words at funerals. Who never denied anything out loud and never chose anything either. He has a Muslim name and a Muslim funeral, and when the question comes there is nothing behind the name to answer with.\n\nHe is not asked to recite. He is asked what he KNEW — and repeating a room is not knowing.",
          exampleAr: "قِف عند هذه الجملة، فهي أشدُّ ما في هذه الصفحة، وليست في ملحد: «كنتُ أقول ما يقول الناس».\n\nهذا رجلٌ صلّى حين صلّى الناس، وصام لأنّ الأهل صاموا، وقال الكلام المناسب في العزاء، ولم يجحد شيئًا قطُّ ولم يختر شيئًا قطّ. له اسمٌ مسلمٌ وجنازةٌ مسلمة، فإذا جاء السؤالُ لم يكن وراء الاسم ما يُجاب به.\n\nولم يُطلب منه أن يستظهر، وإنما سُئل عمّا كان يعلم — وترديدُ ما في المجلس ليس علمًا.",
          proof: "As for the hypocrite and the disbeliever, it is said to him: what did you use to say about this man? He says: I do not know, I used to say what the people said. So it is said to him: you did not know, and you did not follow those who knew.",
          proofAr: "وَأَمَّا الْمُنَافِقُ وَالْكَافِرُ فَيُقَالُ لَهُ: مَا كُنْتَ تَقُولُ فِي هَذَا الرَّجُلِ؟ فَيَقُولُ: لَا أَدْرِي، كُنْتُ أَقُولُ مَا يَقُولُ النَّاسُ. فَيُقَالُ: لَا دَرَيْتَ وَلَا تَلَيْتَ",
          ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1374",
          refAr: "صحيح البخاري، كتاب الجنائز، حديث ١٣٧٤",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "They say to him: who is your Lord? He says: haah, haah, haah — I do not know. They say to him: what is your religion? He says: haah, haah — I do not know. They say: who is this man who was sent among you? He says: haah, haah — I do not know. Then a caller calls from the sky: he has lied.",
          extraProofAr: "فَيَقُولَانِ: مَنْ رَبُّكَ؟ فَيَقُولُ: هَاهْ هَاهْ هَاهْ لَا أَدْرِي. فَيَقُولَانِ لَهُ: مَا دِينُكَ؟ فَيَقُولُ: هَاهْ هَاهْ لَا أَدْرِي. فَيَقُولَانِ: مَا هَذَا الرَّجُلُ الَّذِي بُعِثَ فِيكُمْ؟ فَيَقُولُ: هَاهْ هَاهْ لَا أَدْرِي. فَيُنَادِي مُنَادٍ مِنَ السَّمَاءِ: أَنْ كَذَبَ",
          extraRef: "Sunan Abu Dawud, Hadith 4753",
          extraRefAr: "سنن أبي داود، حديث ٤٧٥٣",
          keys: ["i dont know in the grave", "cant answer the questions", "hypocrite in the grave", "i said what people said", "failed the questions", "what if i cant answer",
                 "لا ادري في القبر", "لا استطيع الجواب", "المنافق في القبر", "كنت اقول ما يقول الناس", "لا دريت ولا تليت", "ماذا لو لم اجب"]
        },
        {
          id: "gr-door", icon: "🚨",
          title: "A door is opened — onto the Fire",
          titleAr: "ويُفتح له بابٌ — إلى النار",
          simple: "The same door, opening the other way. It is opened onto the Fire, and its heat and its burning wind come in through it. He is given a bed from the Fire and clothing from the Fire.",
          simpleAr: "البابُ نفسه، ولكن إلى الجهة الأخرى: يُفتح إلى النار، فيأتيه من حَرّها وسَمومها. ويُفرَش له من النار ويُلبَس من النار.",
          plain: "\"He has lied. So spread out for him from the Fire, and clothe him from the Fire, and open for him a door to the Fire.\"\n\nRead it beside the believer's version and it is word for word the same sentence with one noun changed. The bed, the clothing, the door — the same three things, from the other place.\n\nAnd then: \"there comes to him of its heat and its samum.\" Samum is the scorching wind — the word the Quran uses for the wind of Hell.",
          plainAr: "«أنْ كذب، فأفرِشوه من النار، وألبِسوه من النار، وافتحوا له بابًا إلى النار».\n\nاقرأها إلى جانب رواية المؤمن تجدها الجملة نفسها حرفًا بحرف، لم يتغيّر فيها إلا اسمٌ واحد: الفراش واللباس والباب — الثلاثةُ أنفسُها، من الموضع الآخر.\n\nثم: «فيأتيه من حَرّها وسَمومها». والسَّمومُ الريحُ الحارّة، وهو اللفظُ الذي وصف به القرآنُ ريحَ جهنّم.",
          example: "And this door is not a threat about later. The Quran states plainly that a punishment is happening in the barzakh, and it does it by putting a BEFORE and an AFTER in the same verse.\n\nOf Pharaoh's people: \"The Fire — they are exposed to it morning and evening. AND ON THE DAY THE HOUR APPEARS: make the people of Pharaoh enter the severest punishment.\"\n\nSo they are being shown the Fire morning and evening — and the Hour has not come yet. The severest punishment is a separate thing, on a later day. What is happening now is the smaller one.",
          exampleAr: "وليس هذا البابُ وعيدًا بما سيأتي، فقد نصّ القرآنُ على وقوع العذاب في البرزخ، ونصّ عليه بأن جعل «قبلَ» و«بعدَ» في آيةٍ واحدة.\n\nقال في آل فرعون: ﴿ٱلنَّارُ يُعْرَضُونَ عَلَيْهَا غُدُوًّۭا وَعَشِيًّۭا ۖ وَيَوْمَ تَقُومُ ٱلسَّاعَةُ أَدْخِلُوٓا۟ ءَالَ فِرْعَوْنَ أَشَدَّ ٱلْعَذَابِ﴾.\n\nفهم يُعرضون على النار غدوًّا وعشيًّا — والساعةُ لم تقم بعد. وأشدُّ العذاب أمرٌ آخر في يومٍ آخر. والذي يجري الآن هو الأصغر.",
          proof: "He has lied. So spread out for him from the Fire, and clothe him from the Fire, and open for him a door to the Fire. So there comes to him of its heat and its scorching wind.",
          proofAr: "أَنْ كَذَبَ، فَأَفْرِشُوهُ مِنَ النَّارِ، وَأَلْبِسُوهُ مِنَ النَّارِ، وَافْتَحُوا لَهُ بَابًا إِلَى النَّارِ. فَيَأْتِيهِ مِنْ حَرِّهَا وَسَمُومِهَا",
          ref: "Sunan Abu Dawud, Hadith 4753",
          refAr: "سنن أبي داود، حديث ٤٧٥٣",
          strength: "Outside the two Sahihs — narrated by Abu Dawud and Ahmad; graded Sahih by al-Albani",
          strengthAr: "خارج الصحيحين — رواه أبو داود وأحمد، وصحّحه الألباني",
          extraProof: "The Fire — they are exposed to it morning and evening. And the Day the Hour appears: make the people of Pharaoh enter the severest punishment.",
          extraProofAr: "ٱلنَّارُ يُعْرَضُونَ عَلَيْهَا غُدُوًّۭا وَعَشِيًّۭا ۖ وَيَوْمَ تَقُومُ ٱلسَّاعَةُ أَدْخِلُوٓا۟ ءَالَ فِرْعَوْنَ أَشَدَّ ٱلْعَذَابِ",
          extraRef: "Surah Ghafir (40:46)",
          extraRefAr: "سورة غافر (٤٠:٤٦)",
          note: "The same longer narration in Musnad Ahmad describes his deeds coming to him in the form of a man, hideous of face and clothing and foul of smell, who tells him that what is coming is bad. As on the believer's card, that detail is named here and no Arabic is quoted for it, because this site cannot check the wording of Ahmad against a copy.",
          noteAr: "وفي الرواية الطويلة نفسِها عند أحمد أنّ عملَه يأتيه في صورة رجلٍ قبيح الوجه والثياب منتنِ الريح يبشّره بالذي يسوءه. وكما في بطاقة المؤمن: تُذكر ولا يُنقل لها لفظٌ عربيّ، لأنّ الموقع لا يستطيع مقابلة لفظ المسند على نسخة.",
          keys: ["door to hell in the grave", "punishment of the grave", "adhab al qabr", "fire in the grave", "heat of hell", "exposed morning and evening", "is grave punishment real",
                 "باب الى النار", "عذاب القبر", "النار في القبر", "حر جهنم", "يعرضون عليها غدوا وعشيا", "هل عذاب القبر حق"]
        },
        {
          id: "gr-squeeze", icon: "🧱",
          title: "The grave closes on him until his ribs interlace",
          titleAr: "ويُضيَّق عليه قبرُه حتى تختلف فيه أضلاعُه",
          simple: "The believer's grave is made wide. His is made narrow. It presses in on him until the ribs of one side pass through the ribs of the other.",
          simpleAr: "قبرُ المؤمن يُوسَّع، وقبرُ هذا يُضيَّق. يضغط عليه حتى تدخل أضلاعُ أحد جانبيه في أضلاع الآخر.",
          plain: "The wording is nine words in Arabic and it does not need explaining: \"and his grave is constricted upon him until his ribs interlace.\"\n\nTAKHTALIF means to cross over one another — to be pushed past each other out of place. Put your hands flat and interlock the fingers. That is what the word describes, and it is describing a ribcage.",
          plainAr: "اللفظُ كلماتٌ يسيرة ولا يحتاج إلى شرح: «ويُضيَّق عليه قبرُه حتى تختلف فيه أضلاعُه».\n\nومعنى «تختلف» أن يدخل بعضُها في بعض ويزول كلٌّ عن موضعه. ضُمّ كفّيك وشبّك أصابعك: هذا هو الذي يصفه اللفظ، وهو يصف قفصًا صدريًّا.",
          example: "And this is the point at which to say the thing this whole section is for.\n\nEverything on this card is happening to a body that is already dead. It cannot faint. It cannot pass out from the pain. It cannot bleed to death and be finished. Death was the exit in this world; there, it has already been used.\n\nThat is the difference between any suffering you have ever heard of and this one. Every pain here ends, one way or another. This one was designed not to.",
          exampleAr: "وههنا موضعُ قول الذي وُضع له هذا القسم كلُّه:\n\nكلُّ ما في هذه البطاقة يقع على بدنٍ ميّتٍ أصلًا. لا يُغشى عليه، ولا يفقد وعيه من الألم، ولا ينزف حتى ينتهي. فالموتُ كان مخرجَ الدنيا، وقد استُعمل.\n\nوهذا هو الفرق بين كلِّ ألمٍ سمعتَ به وبين هذا: فكلُّ ألمٍ ههنا ينتهي على وجهٍ من الوجوه، وهذا وُضع على ألّا ينتهي.",
          proof: "And his grave is constricted upon him until his ribs interlace within it.",
          proofAr: "وَيُضَيَّقُ عَلَيْهِ قَبْرُهُ حَتَّى تَخْتَلِفَ فِيهِ أَضْلَاعُهُ",
          ref: "Sunan Abu Dawud, Hadith 4753",
          refAr: "سنن أبي داود، حديث ٤٧٥٣",
          strength: "Outside the two Sahihs — narrated by Abu Dawud and Ahmad; graded Sahih by al-Albani",
          strengthAr: "خارج الصحيحين — رواه أبو داود وأحمد، وصحّحه الألباني",
          extraProof: "And whoever turns away from My remembrance — indeed, he will have a constricted life, and We will raise him blind on the Day of Resurrection.",
          extraProofAr: "وَمَنْ أَعْرَضَ عَن ذِكْرِى فَإِنَّ لَهُۥ مَعِيشَةًۭ ضَنكًۭا وَنَحْشُرُهُۥ يَوْمَ ٱلْقِيَٰمَةِ أَعْمَىٰ",
          extraRef: "Surah Ta-Ha (20:124)",
          extraRefAr: "سورة طه (٢٠:١٢٤)",
          note: "A number of the early scholars, among them Ibn Mas'ud and Abu Hurayrah, read \"a constricted life\" in 20:124 as the punishment of the grave specifically — because the verse then moves on to the Day of Resurrection as a separate thing after it. Others read it as a narrowed life in this world. Both readings are held; this is a tafsir difference and not a text, and it is marked as one.",
          noteAr: "وذهب جماعةٌ من السلف، منهم ابنُ مسعود وأبو هريرة، إلى أنّ ﴿مَعِيشَةً ضَنكًا﴾ في آية طه هي عذابُ القبر بعينه — لأنّ الآية انتقلت بعدها إلى يوم القيامة أمرًا آخر. وحملها آخرون على ضِيق العيش في الدنيا. والقولان محفوظان، وهذا خلافٌ في التفسير لا نصّ، وقد بُيِّن أنه كذلك.",
          keys: ["grave squeezing", "grave gets tight", "ribs crushed", "pressure of the grave", "narrow grave", "constricted life", "does the grave squeeze you",
                 "ضمة القبر", "ضيق القبر", "تختلف اضلاعه", "يضيق عليه قبره", "معيشة ضنكا", "هل يضيق القبر"]
        },
        {
          id: "gr-hammer", icon: "🔨",
          title: "The one with the iron mallet — and it does not happen once",
          titleAr: "الأعمى الأبكم ومعه المِرزبّة — وليست مرّةً واحدة",
          simple: "One is appointed for him, blind and mute, holding an iron mallet. If a mountain were struck with it, it would turn to dust. He is struck once. He becomes dust. Then his soul is returned to him — and it begins again.",
          simpleAr: "يُقيَّض له أعمى أبكم معه مِرزبّةٌ من حديد، لو ضُرب بها جبلٌ لصار ترابًا. فيضربه ضربةً فيصير ترابًا. ثم تُعاد فيه الروح — ويبدأ الأمرُ من جديد.",
          plain: "Read the narration's own words for the size of it: \"if a mountain were struck with it, it would become dust.\"\n\nHe is struck one blow. He screams — and the scream is heard by everything between the east and the west, EXCEPT men and jinn. Every animal, every bird, everything that hears, hears it. The two kinds who could still act on the warning are the only two who are not allowed to hear it.\n\nHe becomes dust. And then: THEN THE SOUL IS RETURNED TO HIM.",
          plainAr: "اقرأ لفظ الرواية في مقدارها: «لو ضُرب بها جبلٌ لصار ترابًا».\n\nفيضربه ضربةً واحدة، فيصيح صيحةً يسمعها ما بين المشرق والمغرب إلا الثقلين. فكلُّ دابّةٍ وكلُّ طائرٍ وكلُّ ما يسمع يسمعها؛ والصنفان اللذان يمكن أن يعملا بالنذير هما وحدهما اللذان مُنعا من سماعها.\n\nفيصير ترابًا. ثم: «ثم تُعاد فيه الروح».",
          example: "That last line is the whole card, and it is why this is worse than any death.\n\nHe was reduced to dust. That should be the end. It is not the end — the soul is put back, and the body is restored, so that it can be done again. And again. For however long the barzakh lasts, which for some people will be thousands of years.\n\nAnd he is deliberately blind and mute. There is nobody to look at, and nobody to be answered by, and no possibility of being reasoned with.\n\nHe ﷺ chose to warn about all of this while sitting at an open grave, and the Companions were so still, al-Bara' said, that it was \"as though birds were on our heads.\"",
          exampleAr: "والسطرُ الأخير هو البطاقةُ كلُّها، وبه صار هذا أشدَّ من كلِّ موت:\n\nصار ترابًا، وحقُّ ذلك أن يكون النهاية. وليس هو النهاية — فتُعاد الروح، ويُردّ البدن، ليقع الأمرُ مرّةً أخرى. ثم أخرى. ما بقي البرزخ، وهو لبعض الناس ألوفُ السنين.\n\nوجُعل أعمى أبكم قصدًا: فلا أحدَ يُنظر إليه، ولا أحدَ يُجيب، ولا سبيل إلى مراجعة.\n\nوقد اختار ﷺ أن يحذّر من هذا كلِّه وهو جالسٌ عند قبرٍ مفتوح، وسكن الصحابةُ حتى قال البراء: «كأنّما على رؤوسنا الطير».",
          proof: "Then there is appointed for him one blind and mute, with him an iron mallet — if a mountain were struck with it, it would become dust. He strikes him with it a blow that everything between the east and the west hears, except men and jinn, and he becomes dust. Then the soul is returned to him.",
          proofAr: "ثُمَّ يُقَيَّضُ لَهُ أَعْمَى أَبْكَمُ مَعَهُ مِرْزَبَّةٌ مِنْ حَدِيدٍ، لَوْ ضُرِبَ بِهَا جَبَلٌ لَصَارَ تُرَابًا. فَيَضْرِبُهُ بِهَا ضَرْبَةً يَسْمَعُهَا مَا بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ إِلَّا الثَّقَلَيْنِ فَيَصِيرُ تُرَابًا. ثُمَّ تُعَادُ فِيهِ الرُّوحُ",
          ref: "Sunan Abu Dawud, Hadith 4753",
          refAr: "سنن أبي داود، حديث ٤٧٥٣",
          strength: "Outside the two Sahihs — narrated by Abu Dawud and Ahmad; graded Sahih by al-Albani",
          strengthAr: "خارج الصحيحين — رواه أبو داود وأحمد، وصحّحه الألباني",
          extraProof: "Then he is struck a blow with an iron hammer between his ears, and he screams a scream heard by everything near him except men and jinn.",
          extraProofAr: "ثُمَّ يُضْرَبُ بِمِطْرَقَةٍ مِنْ حَدِيدٍ ضَرْبَةً بَيْنَ أُذُنَيْهِ، فَيَصِيحُ صَيْحَةً يَسْمَعُهَا مَنْ يَلِيهِ إِلَّا الثَّقَلَيْنِ",
          extraRef: "Sahih al-Bukhari, Book of Funerals, Hadith 1338",
          extraRefAr: "صحيح البخاري، كتاب الجنائز، حديث ١٣٣٨",
          keys: ["torture in the grave", "iron hammer", "beaten in the grave", "scream in the grave", "how are you tortured in the grave", "punishment forever", "does it repeat",
                 "تعذيب في القبر", "مرزبة من حديد", "مطرقة", "يضرب في قبره", "صيحة", "كيف يعذب في القبر", "هل يتكرر العذاب"]
        },
        {
          id: "gr-said", icon: "🗣️",
          title: "And what he says at that point — the Quran records it four times",
          titleAr: "وماذا يقول حينئذٍ — سجّله القرآنُ أربع مرّات",
          simple: "He asks to be sent back. He asks for a short delay. He wishes he had never been anything at all — he wishes he were dust. Every one of these is a sentence the Quran puts in his mouth, in advance.",
          simpleAr: "يسأل أن يُردّ. ويسأل تأخيرًا يسيرًا. ويتمنّى ألّا يكون شيئًا أصلًا — يتمنّى أن يكون ترابًا. وكلُّ هذه جملٌ وضعها القرآنُ في فمه سلفًا.",
          plain: "1. \"MY LORD, SEND ME BACK, that I might do righteousness in that which I left behind.\" Answered: no. (23:99-100)\n\n2. \"MY LORD, IF ONLY YOU WOULD DELAY ME for a brief term, so I could give charity and be among the righteous.\" And the verse after it says: Allah will never delay a soul when its time has come. (63:10-11)\n\n3. \"OH, I WISH THAT I WERE DUST.\" Said by the disbeliever when he sees what his hands sent ahead. (78:40)\n\n4. And when the angels come at the very start, striking their faces and their backs: \"TASTE THE PUNISHMENT OF THE BURNING.\" (8:50)",
          plainAr: "١. ﴿رَبِّ ٱرْجِعُونِ لَعَلِّىٓ أَعْمَلُ صَٰلِحًۭا فِيمَا تَرَكْتُ﴾. والجواب: ﴿كَلَّا﴾. [المؤمنون ٩٩-١٠٠]\n\n٢. ﴿رَبِّ لَوْلَآ أَخَّرْتَنِىٓ إِلَىٰٓ أَجَلٍۢ قَرِيبٍۢ فَأَصَّدَّقَ وَأَكُن مِّنَ ٱلصَّٰلِحِينَ﴾. ثم الآيةُ بعدها: ﴿وَلَن يُؤَخِّرَ ٱللَّهُ نَفْسًا إِذَا جَآءَ أَجَلُهَا﴾. [المنافقون ١٠-١١]\n\n٣. ﴿وَيَقُولُ ٱلْكَافِرُ يَٰلَيْتَنِى كُنتُ تُرَٰبًۢا﴾ — يقولها حين ينظر ما قدّمت يداه. [النبأ ٤٠]\n\n٤. وحين تأتيه الملائكةُ في أوّل الأمر يضربون وجهه وظهره: ﴿وَذُوقُوا۟ عَذَابَ ٱلْحَرِيقِ﴾. [الأنفال ٥٠]",
          example: "Take the third one on its own, because it is the strangest wish in the Quran.\n\nHE WANTS TO BE DUST. Not to be forgiven — he is past asking for that. Not to be given another life. He wants never to have been given a soul at all; he wants to be the same as the ground he was buried in, so that there would be nothing there to punish.\n\nThat is the wish. And it is refused too, because he is not dust — he was made a person, and a person is answerable.\n\nEvery one of these four sentences was written down before you were born so that you would read them while you are still in a position to make them unnecessary.",
          exampleAr: "خذ الثالثة وحدها، فهي أغربُ أمنيّةٍ في القرآن:\n\nيريد أن يكون ترابًا. لا أن يُغفر له — فقد جاوز طلب ذلك. ولا أن يُعطى عمرًا آخر. وإنما يريد ألّا يكون قد أُعطي روحًا أصلًا؛ يريد أن يكون كالأرض التي دُفن فيها، حتى لا يكون هناك ما يُعذَّب.\n\nهذه هي الأمنيّة، وهي مردودةٌ أيضًا؛ لأنه ليس ترابًا — بل جُعل إنسانًا، والإنسانُ مسؤول.\n\nوهذه الجملُ الأربع كُتبت كلُّها قبل أن تُولد لتقرأها وأنت بعدُ في موضعٍ تستطيع فيه أن تجعلها غيرَ لازمة.",
          proof: "And the disbeliever will say: oh, I wish that I were dust.",
          proofAr: "وَيَقُولُ ٱلْكَافِرُ يَٰلَيْتَنِى كُنتُ تُرَٰبًۢا",
          ref: "Surah An-Naba (78:40)",
          refAr: "سورة النبأ (٧٨:٤٠)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "My Lord, if only You would delay me for a brief term so I would give charity and be among the righteous. But Allah will never delay a soul when its time has come.",
          extraProofAr: "رَبِّ لَوْلَآ أَخَّرْتَنِىٓ إِلَىٰٓ أَجَلٍۢ قَرِيبٍۢ فَأَصَّدَّقَ وَأَكُن مِّنَ ٱلصَّٰلِحِينَ ۝ وَلَن يُؤَخِّرَ ٱللَّهُ نَفْسًا إِذَا جَآءَ أَجَلُهَا",
          extraRef: "Surah Al-Munafiqun (63:10-11)",
          extraRefAr: "سورة المنافقون (٦٣:١٠-١١)",
          keys: ["what will the disbeliever say", "send me back", "i wish i was dust", "give me more time", "regret after death", "too late to repent", "what do they say when they die",
                 "ماذا يقول الكافر", "رب ارجعون", "يا ليتني كنت ترابا", "رب لولا اخرتني", "الندم بعد الموت", "فات الاوان"]
        }
      ]
    },

    {
      id: "gg-scale", icon: "📏",
      title: "Two things to be clear about before you close this",
      titleAr: "أمران يجب أن يُحرَّرا قبل أن تُغلق هذا",
      lead: "One about size, and one about who this actually happens to.",
      leadAr: "أحدُهما في المقدار، والآخر فيمن يقع به هذا حقًّا.",
      items: [
        {
          id: "gr-levels", icon: "🪜",
          title: "This is the first level. It is not the last one.",
          titleAr: "هذا هو المستوى الأوّل، وليس الأخير",
          simple: "Everything on this page happens before the Day of Judgement has even started. It is the smaller punishment. The Fire itself comes afterwards, and the Quran calls that one the severest.",
          simpleAr: "كلُّ ما في هذه الصفحة يقع قبل أن يبدأ يومُ القيامة أصلًا، وهو العذابُ الأدنى. وأمّا النارُ نفسُها فبعده، وسمّاها القرآنُ ﴿أَشَدَّ ٱلْعَذَابِ﴾.",
          plain: "Go back to 40:46 and read the two halves in order. Exposed to the Fire morning and evening — that is now, in the barzakh. And on the Day the Hour appears: make them enter THE SEVEREST PUNISHMENT.\n\nSo the grave is not the sentence. It is the holding. The sentence comes after the Day, after the questioning, after the scales and the records and the bridge.\n\nEverything described on the cards above — the narrowing, the mallet, the heat through the door — is the LESSER of the two.",
          plainAr: "ارجع إلى آية غافر واقرأ شطريها على ترتيبهما: ﴿ٱلنَّارُ يُعْرَضُونَ عَلَيْهَا غُدُوًّۭا وَعَشِيًّۭا﴾ — وهذا الآن في البرزخ. ﴿وَيَوْمَ تَقُومُ ٱلسَّاعَةُ أَدْخِلُوٓا۟ ءَالَ فِرْعَوْنَ أَشَدَّ ٱلْعَذَابِ﴾.\n\nفليس القبرُ هو الحكم، وإنما هو الحبسُ الاحتياطيّ. وأمّا الحكمُ فبعد اليوم، وبعد السؤال، وبعد الموازين والصحف والصراط.\n\nوكلُّ ما وُصف في البطاقات المتقدّمة — الضيقُ والمِرزبّة والحرُّ من الباب — هو الأصغرُ من الاثنين.",
          example: "That is the sentence this whole section was written to make land, and there is no way to soften it: what you have just read is the part that comes BEFORE the punishment.\n\nSo whoever reads this page and thinks he can bear it has misunderstood the arithmetic. He has been shown the corridor, not the room.\n\nAnd the door out of both of them is the same door, it is open right now, and it takes a decision this evening rather than a plan.",
          exampleAr: "وهذه هي الجملةُ التي كُتب لأجلها هذا القسمُ كلُّه، ولا سبيل إلى تهوينها: أنّ الذي قرأتَه الآن هو ما قبل العذاب.\n\nفمن قرأ هذه الصفحة فظنّ أنه يحتملها فقد أخطأ الحساب؛ إنما عُرض عليه الممرّ لا الغرفة.\n\nوالبابُ الخارجُ منهما جميعًا بابٌ واحد، وهو مفتوحٌ الآن، ويحتاج إلى قرارٍ هذا المساء لا إلى خطّة.",
          proof: "The Fire — they are exposed to it morning and evening. And the Day the Hour appears: make the people of Pharaoh enter the severest punishment.",
          proofAr: "ٱلنَّارُ يُعْرَضُونَ عَلَيْهَا غُدُوًّۭا وَعَشِيًّۭا ۖ وَيَوْمَ تَقُومُ ٱلسَّاعَةُ أَدْخِلُوٓا۟ ءَالَ فِرْعَوْنَ أَشَدَّ ٱلْعَذَابِ",
          ref: "Surah Ghafir (40:46)",
          refAr: "سورة غافر (٤٠:٤٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          link: "judgement.html#stages",
          linkEn: "What comes after it, stage by stage →",
          linkAr: "وما بعده، منزلةً منزلة ←",
          keys: ["is the grave worse than hell", "levels of punishment", "before the day of judgement", "lesser punishment", "what comes after the grave", "adhab al adna",
                 "هل عذاب القبر اشد", "مراتب العذاب", "قبل يوم القيامة", "العذاب الادنى", "ماذا بعد القبر", "اشد العذاب"]
        },
        {
          id: "gr-small", icon: "💧",
          title: "And it is not only for the great sins",
          titleAr: "وليس للكبائر وحدها",
          simple: "He passed two graves and said both were being punished — and not for something they thought was big. One did not shield himself from his urine. The other carried people's words between them.",
          simpleAr: "مرّ ﷺ بقبرين فقال: إنهما ليُعذَّبان، وما يُعذَّبان في كبير. أمّا أحدُهما فكان لا يستتر من بوله، وأمّا الآخر فكان يمشي بالنميمة.",
          plain: "This hadith is in al-Bukhari and it is the one that removes every excuse.\n\nNeither man was an idolater. Neither had killed anyone. One was careless about splashes of urine on his clothes — a matter of purity, the kind of thing a person shrugs at. The other repeated to one person what another had said about him.\n\n\"And they are not being punished for something great\" — meaning, in their own estimation. It was great enough.",
          plainAr: "هذا الحديثُ في البخاري، وهو الذي يرفع كلَّ عذر.\n\nلم يكن واحدٌ منهما مشركًا، ولا قاتلًا. وإنما كان أحدُهما يتساهل في إصابة البول ثوبَه — وهو بابُ طهارة، ممّا يتهاون فيه الناس. وكان الآخرُ ينقل إلى الرجل ما قيل فيه.\n\nوقوله «وما يُعذَّبان في كبير» أي في كبيرٍ عندهما. وقد كان كبيرًا بما يكفي.",
          example: "Now put that beside the section above. The narrowing, the door, the mallet — those were described for the one who could not answer at all. And here are two men who presumably could answer, being punished for two habits that would not make anybody's list.\n\nWhich means the question this page leaves you with is not \"am I a disbeliever?\" Almost nobody reading this is asking that. It is: what am I doing every single day that I have decided is not big?",
          exampleAr: "ثم ضَعْ هذا إلى جانب القسم المتقدّم: فالضيقُ والبابُ والمِرزبّة إنما وُصفت لمن لم يستطع جوابًا. وهذان رجلان يُفترض أنهما يُجيبان، ويُعذَّبان بخصلتين لا تردان في عدِّ أحد.\n\nومعنى ذلك أنّ السؤال الذي تتركك به هذه الصفحة ليس: أكافرٌ أنا؟ فلا يكاد يسأل هذا أحدٌ ممّن يقرأ. وإنما هو: ما الذي أفعله كلَّ يومٍ وقد قرّرتُ أنه ليس بكبير؟",
          proof: "He passed by two graves and said: they are both being punished, and they are not being punished for something great. Then he said: rather — one of them used to go about with tale-carrying, and the other did not shield himself from his urine.",
          proofAr: "مَرَّ ﷺ عَلَى قَبْرَيْنِ فَقَالَ: إِنَّهُمَا لَيُعَذَّبَانِ، وَمَا يُعَذَّبَانِ مِنْ كَبِيرٍ. ثُمَّ قَالَ: بَلَى، أَمَّا أَحَدُهُمَا فَكَانَ يَسْعَى بِالنَّمِيمَةِ، وَأَمَّا أَحَدُهُمَا فَكَانَ لَا يَسْتَتِرُ مِنْ بَوْلِهِ",
          ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1378",
          refAr: "صحيح البخاري، كتاب الجنائز، حديث ١٣٧٨",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["punished for small things", "two graves", "urine and gossip", "small sins punished", "is it only for kafir", "am i safe", "minor sins grave",
                 "قبران يعذبان", "النميمة والبول", "الذنوب الصغيرة", "هل العذاب للكافر فقط", "وما يعذبان في كبير"]
        }
      ]
    },

    {
      id: "gg-today", icon: "🕯️",
      title: "So what do you do today",
      titleAr: "فماذا تصنع اليوم؟",
      lead: "Fear that produces nothing is wasted. Two cards, and both of them are things you can start before you sleep.",
      leadAr: "خوفٌ لا يُنتج شيئًا خوفٌ ضائع. بطاقتان، وكلتاهما ممّا يمكن أن تبدأه قبل أن تنام.",
      items: [
        {
          id: "gr-protect", icon: "🛡️",
          title: "What he ﷺ actually told us to do about it",
          titleAr: "بمَ أمرنا ﷺ في هذا",
          simple: "He asked for protection from the punishment of the grave inside every prayer, and told the Companions to do the same. Say it. And leave behind something that keeps working after you.",
          simpleAr: "كان يستعيذ من عذاب القبر في كلِّ صلاة، وأمر أصحابه بذلك. فقلها. واترك خلفك ما يبقى عملُه بعدك.",
          plain: "FIRST: the dua, inside the prayer, before the salam. He ﷺ said it himself and taught it — \"O Allah, I seek refuge in You from the punishment of the grave.\" A man who says that in five prayers a day says it thirty-five times a week without adding a minute to anything.\n\nSECOND: the deeds that do not stop when you do. He ﷺ said that when a person dies his deeds are cut off except from three — an ongoing charity, knowledge that people benefit from, and a righteous child who prays for him.\n\nThose three keep depositing into the account of a man who can no longer earn anything.",
          plainAr: "الأوّل: الدعاء في الصلاة قبل السلام. قاله ﷺ وعلّمه: «اللهمّ إني أعوذ بك من عذاب القبر». ومن قالها في خمس صلواتٍ قالها خمسًا وثلاثين مرّةً في الأسبوع من غير أن يزيد على وقته دقيقة.\n\nوالثاني: الأعمالُ التي لا تنقطع بانقطاعك. قال ﷺ إنّ الإنسان إذا مات انقطع عمله إلا من ثلاث: صدقةٍ جارية، أو علمٍ يُنتفع به، أو ولدٍ صالحٍ يدعو له.\n\nفهذه الثلاثُ تظلّ تُودِع في حساب رجلٍ لم يعد يقدر أن يكسب شيئًا.",
          example: "And a third thing, which is the one this whole page has been arguing for: the two graves were punished for urine and for gossip. So the protection is not only a dua and an endowment. It is the two habits.\n\nWash properly. Stop carrying what one person said about another. Those are not small acts of piety — those are the two that were named.",
          exampleAr: "وأمرٌ ثالث، وهو الذي يحاجّ له هذا القسمُ كلُّه: أنّ القبرين إنما عُذّبا في البول والنميمة. فليست الوقايةُ دعاءً ووقفًا فحسب، وإنما هي الخصلتان.\n\nفأحسِن الطهارة، وكُفَّ عن نقل كلام الناس بعضهم إلى بعض. وليستا نافلتين صغيرتين، وإنما هما الاثنتان اللتان سُمّيتا.",
          proof: "O Allah, I seek refuge in You from the punishment of the grave.",
          proofAr: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
          ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1377",
          refAr: "صحيح البخاري، كتاب الجنائز، حديث ١٣٧٧",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "When a person dies, his deeds are cut off from him except three: an ongoing charity, knowledge that is benefited from, and a righteous child who supplicates for him.",
          extraProofAr: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
          extraRef: "Jami' at-Tirmidhi, Hadith 1376",
          extraRefAr: "جامع الترمذي، حديث ١٣٧٦",
          keys: ["protection from grave punishment", "dua for the grave", "how to avoid punishment of the grave", "sadaqah jariyah", "ongoing charity", "what saves you in the grave", "dua before salam",
                 "الحماية من عذاب القبر", "دعاء عذاب القبر", "كيف انجو من عذاب القبر", "صدقة جارية", "علم ينتفع به", "ولد صالح", "ما ينجيك في القبر"]
        },
        {
          id: "gr-choice", icon: "🪞",
          title: "Which of the two do you want to be lying there?",
          titleAr: "فأيَّ الرجلين تريد أن تكون؟",
          simple: "Both men in this section are in a hole in the ground. Both were washed and carried and buried by people who loved them. From the outside there is no difference at all. The difference is entirely what they did before they got there.",
          simpleAr: "كلا الرجلين في هذا القسم في حفرةٍ في الأرض. وكلاهما غُسّل وحُمل ودُفن بأيدي من أحبّوه. ولا فرق بينهما من الخارج البتّة. وإنما الفرقُ كلُّه فيما عملاه قبل أن يبلغا ذلك.",
          plain: "Two graves. Same soil, same shroud, same prayer said over both. One is widened and one is narrowed, and nobody standing at the surface could tell you which is which.\n\nThat is the honest end of this section. Not a threat — a description of where a life is settled, and of the fact that it is settled by then.\n\nYou are, right now, in the only part of this that you control.",
          plainAr: "قبران: التربةُ واحدة، والكفنُ واحد، والصلاةُ التي صُلّيت عليهما واحدة. يُوسَّع أحدُهما ويُضيَّق الآخر، ولا يستطيع واقفٌ على وجه الأرض أن يخبرك أيُّهما أيّ.\n\nوهذه خاتمةُ القسم بصدق: ليست تهديدًا، وإنما هي وصفٌ للموضع الذي يُحسم فيه أمرُ العمر، وأنه يكون قد حُسم عنده.\n\nوأنت الآن في الجزء الوحيد من هذا الذي تملكه.",
          example: "So the question is not theoretical and it is not for later. If you were buried this Friday, which of the two cards above describes what happens at the graveside?\n\nAnd whatever the answer is, it is not fixed yet. That is the entire reason this was told to us in advance and in this much detail — a man who is already in the grave does not need to be warned about the grave. You do.",
          exampleAr: "فالسؤال ليس نظريًّا ولا هو لغدٍ: لو دُفنتَ الجمعةَ القادمة، فأيُّ البطاقتين المتقدّمتين يصف ما يجري عند قبرك؟\n\nومهما يكن الجواب فإنه لم يُقفل بعد. وهذا هو سببُ إخبارنا بهذا سلفًا وبهذا التفصيل كلِّه: فالذي صار في قبره لا يحتاج أن يُنذَر بالقبر. وإنما تحتاجه أنت.",
          proof: "Allah keeps firm those who believe with the firm word, in the life of this world and in the Hereafter.",
          proofAr: "يُثَبِّتُ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ بِٱلْقَوْلِ ٱلثَّابِتِ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَفِى ٱلْءَاخِرَةِ",
          ref: "Surah Ibrahim (14:27) — and he ﷺ said this was revealed about the questioning in the grave: Sahih al-Bukhari, Hadith 1369",
          refAr: "سورة إبراهيم (١٤:٢٧) — وقال ﷺ إنها نزلت في سؤال القبر: صحيح البخاري، حديث ١٣٦٩",
          strength: "The Quran, and a Sahih hadith for the occasion of its revelation",
          strengthAr: "القرآن الكريم، وحديثٌ صحيح في سبب نزولها",
          note: "Read the verse once more. Being kept firm THERE is described as something Allah does — and the same verse says He does it for \"those who believe\", in the life of this world FIRST and in the Hereafter after it. The firmness you are given at the questioning is the firmness you practised here. That is the whole answer to \"what do I do today.\"",
          noteAr: "أعد قراءة الآية: فالتثبيتُ هناك فعلُ الله — والآيةُ نفسُها تجعله للذين آمنوا ﴿فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا﴾ أوّلًا ثم ﴿وَفِى ٱلْءَاخِرَةِ﴾. فالثباتُ الذي تُعطاه عند السؤال هو الثباتُ الذي تمرّنتَ عليه ههنا. وهذا هو جوابُ «ماذا أصنع اليوم» كلُّه.",
          keys: ["which one will i be", "am i ready to die", "what if i died today", "how do i prepare for death", "i am scared of the grave", "i want to change", "where do i start",
                 "اي الرجلين اكون", "هل انا مستعد للموت", "لو مت اليوم", "كيف استعد للموت", "اخاف من القبر", "اريد ان اتغير", "من اين ابدا"]
        }
      ]
    }
  ],

  closing: "Nothing in this section was written to frighten you for its own sake, and nothing in it was added for effect — every image on the hard cards is quoted from al-Bukhari or from Abu Dawud's narration of al-Bara', and where a famous detail could not be verified it was named and left unquoted. The reason to read it is the one the Prophet ﷺ gave when he sat at an open grave and told his Companions this: it is being described in advance because in advance is the only time the description is any use.",
  closingAr: "لم يُكتب شيءٌ في هذا القسم للتخويف لذاته، ولم يُزد فيه شيءٌ للتهويل — فكلُّ صورةٍ في البطاقات الشديدة منقولةٌ من البخاري أو من رواية أبي داود لحديث البراء، وما لم يمكن توثيقُه من المشهور سُمّي ولم يُنقل بلفظه. وإنما عِلّةُ قراءته هي التي ذكرها النبيُّ ﷺ حين جلس عند قبرٍ مفتوحٍ فحدّث أصحابه بهذا: أنه يُوصف سلفًا، لأنّ السلف هو الوقتُ الوحيد الذي ينفع فيه الوصف."
};
