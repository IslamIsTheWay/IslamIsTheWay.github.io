/* ============================================================
   THE BASICS, IN TWO LEVELS — الأساسيات على مستويين
   guidance.html#basics.  Rendered by renderBasics().

   WHY THIS EXISTS. Measured on 20 questions typed the way people
   actually type them, the Guidance page answered 5. Four found
   nothing at all — "ازاي اتوضأ", "هل الخمر حرام", "اكل لحم
   الخنزير حرام", "how do i say sorry to god" — and the reason was
   not the matcher. The site had NO purification, NO halal and
   haram, NO tawheed and no plain-words repentance. There was
   nothing to find.

   HIS INSTRUCTION, and the shape of the file follows it: "the
   basics should be added, and the medium level also should be
   added, and divided. So it's easier to find if I need it."

   So every section carries a `level`:
     start — what a person needs in the first weeks
     next  — what they need once those are steady

   Each item keeps the shape js/pillars.js uses, so the same card
   renderer draws both: plain / example / proof / keys.

   EVERY PROOF WAS READ OUT OF THE RECORD. al-Bukhari 71, 2856,
   4497, 6306, 6954; Muslim's Books of Purification, Drinks and
   Zakat; Ibn Majah 4250 and 4251; at-Tirmidhi 2499 — each was
   fetched and searched by wording. Verses come from this site's
   own js/quran-text.js. Muslim is cited BY BOOK and never by
   number, because the machine editions number it sequentially.
   ============================================================ */

const BASICS = {
  title: "The basics, step by step",
  titleAr: "الأساسيات خطوةً خطوة",
  intro: "The pillars above are the frame. This is what fills it in — starting with what a person needs in the first weeks, then what they need once those are steady. Nothing here assumes you already know the words.",
  introAr: "الأركانُ فيما تقدّم هي البناء، وهذا ما يملؤه: يبدأ بما يحتاجه المرءُ في أوّل أسابيعه، ثم بما يحتاجه إذا استقرّ له ذلك. وليس في هذا القسم ما يفترض أنك تعرف المصطلحات.",

  levels: [
    { id: "start", label: "Start here", labelAr: "ابدأ من هنا",
      note: "The first things. If you only read one part of this page, read this one.",
      noteAr: "أوّلُ ما يُبدأ به. فإن لم تقرأ من هذه الصفحة إلا قسمًا واحدًا فليكن هذا." },
    { id: "next", label: "When you're ready for more", labelAr: "إذا أردتَ المزيد",
      note: "Not harder, just later. These answer the questions the first part tends to raise.",
      noteAr: "ليست أصعب، وإنما هي بعدُ في الترتيب. وهي تجيب عمّا يثيره القسمُ الأوّل من أسئلة." }
  ],

  sections: [
    /* ================= LEVEL 1 ================= */
    {
      id: "b-tahara", level: "start", icon: "💧",
      title: "Washing before you pray",
      titleAr: "الطهارة قبل الصلاة",
      lead: "Prayer does not start with the prayer. It starts with water.",
      leadAr: "الصلاةُ لا تبدأ بالصلاة، وإنما تبدأ بالماء.",
      items: [
        {
          id: "bt-why", num: "", icon: "🚿",
          title: "Why you wash first",
          titleAr: "لماذا تتوضّأ أوّلًا",
          plain: "A prayer offered without wudu is not accepted. It is not a recommendation or a nicety — it is the door into the prayer, and the prayer does not open without it.",
          plainAr: "الصلاةُ بغير وضوءٍ لا تُقبل. وليس هذا استحبابًا ولا تحسينًا، بل هو بابُ الصلاة، ولا تُفتح الصلاةُ إلا به.",
          example: "So if your wudu breaks in the middle of praying, you stop, go and wash, and begin the prayer again. You do not carry on and hope.",
          exampleAr: "فإن انتقض وضوؤك في أثناء الصلاة قطعتَها وتوضّأتَ واستأنفتَ، ولا تمضي راجيًا.",
          proof: "Allah does not accept the prayer of any one of you when he has broken his wudu, until he performs wudu.",
          proofAr: "لَا يَقْبَلُ اللَّهُ صَلَاةَ أَحَدِكُمْ إِذَا أَحْدَثَ حَتَّى يَتَوَضَّأَ",
          ref: "Sahih al-Bukhari, Hadith 6954",
          refAr: "صحيح البخاري، حديث ٦٩٥٤",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          keys: ["why wudu", "do i have to wash", "wash before praying", "ablution needed", "clean before prayer", "wudu required", "can i pray without wudu",
                 "لماذا الوضوء", "هل لازم اتوضأ", "الوضوء قبل الصلاة", "أصلي بدون وضوء", "الطهارة للصلاة"]
        },
        {
          id: "bt-how", num: "", icon: "🤲",
          title: "How to do it — the steps",
          titleAr: "كيف تتوضّأ — الخطوات",
          plain: "Allah lists it Himself, in order: wash your face; wash your arms up to the elbows; wipe your head; wash your feet up to the ankles. That is the whole obligation. Rinsing the mouth and nose, and doing each part three times, are from the Sunnah on top of it.",
          plainAr: "ذكره اللهُ بنفسه مرتَّبًا: اغسل وجهك، واغسل يديك إلى المرفقين، وامسح رأسك، واغسل رجليك إلى الكعبين. هذا هو الواجب كلُّه. وأمّا المضمضةُ والاستنشاقُ والتثليثُ فسنّةٌ زائدةٌ عليه.",
          example: "Start by saying Bismillah, and wash the right before the left. If you are wearing socks you put on while in wudu, you may wipe over them instead of washing the feet — there is a whole ruling on that on this page.",
          exampleAr: "تبدأ بالتسمية، وتقدّم اليمنى على اليسرى. وإن كنتَ لابسًا خفَّين أو جوربين لبستهما على طهارة، مسحتَ عليهما بدل غسل الرجلين — وفي هذه الصفحة فتوى كاملةٌ في ذلك.",
          proof: "O you who have believed, when you rise to [perform] prayer, wash your faces and your forearms to the elbows and wipe over your heads and wash your feet to the ankles.",
          proofAr: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا قُمْتُمْ إِلَى ٱلصَّلَوٰةِ فَٱغْسِلُوا۟ وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى ٱلْمَرَافِقِ وَٱمْسَحُوا۟ بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى ٱلْكَعْبَيْنِ",
          ref: "Surah al-Maidah (5:6)",
          refAr: "سورة المائدة (٥:٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          link: "#rulings",
          linkEn: "Wiping over socks — the ruling",
          linkAr: "المسح على الجوربين — الفتوى",
          keys: ["how to do wudu", "how do i wash before praying", "steps of wudu", "wudu steps", "ablution how", "make wudu", "washing for prayer", "order of wudu",
                 "كيف أتوضأ", "ازاي اتوضأ", "خطوات الوضوء", "طريقة الوضوء", "أتوضأ ازاي", "كيفية الوضوء", "صفة الوضوء"]
        },
        {
          id: "bt-breaks", num: "", icon: "❗",
          title: "What breaks it — and what does not",
          titleAr: "ما ينقض الوضوء وما لا ينقضه",
          plain: "It breaks with using the toilet, passing wind, and deep sleep that takes your awareness away. It does NOT break because you doubted it. If you are sure you had wudu and unsure whether it broke, you still have it.",
          plainAr: "ينتقض بالبول والغائط وخروج الريح، وبالنوم المستغرق الذي يذهب معه الشعور. ولا ينتقض بمجرّد الشكّ. فإذا تيقّنتَ الطهارةَ وشككتَ في الحدث فأنت على طهارتك.",
          example: "This one matters more than it looks. People who doubt constantly end up washing five and six times and dreading the prayer. The rule is built to stop exactly that: certainty is not removed by doubt.",
          exampleAr: "وهذه المسألةُ أهمُّ ممّا تبدو، فإنّ صاحب الوسواس يتوضّأ خمسًا وستًّا ويكره الصلاة. والقاعدةُ موضوعةٌ لدفع هذا بعينه: اليقينُ لا يزول بالشكّ.",
          link: "#rulings",
          linkEn: "Constant doubt in wudu — what the scholars actually instruct",
          linkAr: "الوسواس في الوضوء — ما يأمر به أهل العلم",
          keys: ["what breaks wudu", "does it break my wudu", "passing wind", "toilet", "sleeping breaks wudu", "do i need to redo wudu", "doubt wudu", "waswas",
                 "ما ينقض الوضوء", "هل ينتقض وضوئي", "الريح", "النوم ينقض", "أعيد الوضوء", "الشك في الوضوء", "الوسواس"]
        },
        {
          id: "bt-ghusl", num: "", icon: "🛁",
          title: "When a full wash is needed",
          titleAr: "متى يجب الغسل",
          plain: "After intimacy, and after a wet dream, a full wash of the whole body is required before praying — this is ghusl, not just wudu. A woman does the same at the end of her period and after childbirth bleeding stops.",
          plainAr: "بعد الجماع وبعد الاحتلام يجب غسلُ البدن كلِّه قبل الصلاة، وهو الغسل لا الوضوء. وكذلك المرأةُ إذا انقطع حيضُها وإذا طهُرت من نفاسها.",
          example: "It is one wash, not a ritual with many parts: intend it, then let water reach all of you, hair and skin. Many people also do wudu first, which is from the Sunnah.",
          exampleAr: "وهو غسلٌ واحد لا هيئةٌ ذاتُ أجزاء: تنوي، ثم تُعمّ بدنك بالماء، شعرَك وبشرتك. ويتوضّأ كثيرٌ من الناس أوّلًا، وهو من السنّة.",
          proof: "And if you are in a state of janabah, then purify yourselves.",
          proofAr: "وَإِن كُنتُمْ جُنُبًۭا فَٱطَّهَّرُوا۟",
          ref: "Surah al-Maidah (5:6)",
          refAr: "سورة المائدة (٥:٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["ghusl", "full wash", "shower before prayer", "after sex", "wet dream", "janabah", "period finished", "when do i need a shower islamically", "menstruation",
                 "الغسل", "غسل الجنابة", "الجنابة", "الاحتلام", "بعد الجماع", "انتهى الحيض", "متى أغتسل", "النفاس"]
        },
        {
          id: "bt-tayammum", num: "", icon: "🏜️",
          title: "When there is no water",
          titleAr: "إذا لم تجد ماء",
          plain: "If there is no water, or using it would harm you because you are ill, you use clean earth instead: strike your hands on it, wipe your face, wipe your hands. Then you pray. The prayer is not dropped because the water was.",
          plainAr: "إن لم تجد ماءً، أو كان استعمالُه يضرّك لمرض، فالصعيدُ الطيّب يقوم مقامه: تضرب بيديك عليه، فتمسح وجهك ويديك، ثم تصلّي. فالصلاةُ لا تسقط لسقوط الماء.",
          example: "This is the answer for someone on a long journey, someone in hospital with a cannula or a cast, and someone whose water is genuinely out. It is not a loophole for a cold morning.",
          exampleAr: "وهذا جوابُ المسافر سفرًا طويلًا، والمريض في المستشفى بجبيرةٍ أو قسطرة، ومن انقطع عنه الماءُ حقًّا. وليس رخصةً لبردِ الصباح.",
          proof: "But if you are ill or on a journey … and do not find water, then seek clean earth and wipe over your faces and your hands.",
          proofAr: "وَإِن كُنتُم مَّرْضَىٰٓ أَوْ عَلَىٰ سَفَرٍ … فَلَمْ تَجِدُوا۟ مَآءًۭ فَتَيَمَّمُوا۟ صَعِيدًۭا طَيِّبًۭا فَٱمْسَحُوا۟ بِوُجُوهِكُمْ وَأَيْدِيكُم مِّنْهُ",
          ref: "Surah al-Maidah (5:6)",
          refAr: "سورة المائدة (٥:٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["no water", "tayammum", "cant use water", "sick and cant wash", "dry ablution", "how to pray without water", "travelling no water",
                 "التيمم", "لا يوجد ماء", "لا أستطيع الوضوء", "مريض ولا أغتسل", "الصعيد", "أصلي بدون ماء"]
        }
      ]
    },

    {
      id: "b-halal", level: "start", icon: "🍽️",
      title: "Halal and haram — food, drink and money",
      titleAr: "الحلال والحرام — الطعام والشراب والمال",
      lead: "The list of what is forbidden is short. Everything not on it is open to you.",
      leadAr: "قائمةُ المحرَّمات قصيرة، وما سواها فمباحٌ لك.",
      items: [
        {
          id: "bh-food", num: "", icon: "🥩",
          title: "The food that is forbidden",
          titleAr: "المحرَّم من الطعام",
          plain: "Allah names them: an animal that died by itself, blood, the flesh of swine, and anything slaughtered in a name other than Allah's. That is the list. Everything else — every vegetable, every fish, every properly slaughtered animal — is yours.",
          plainAr: "سمّاها اللهُ بنفسه: الميتةُ، والدمُ، ولحمُ الخنزير، وما أُهلّ لغير الله به. هذه هي القائمة. وما عداها — من كلّ نباتٍ وكلّ سمكٍ وكلّ ذبيحةٍ ذُكّيت — فهو لك.",
          example: "So pork is out, and so is anything made from it — gelatine from pork, lard, and bacon under any other name. And if you are genuinely starving with nothing else, the same verse says you are not sinning by eating to survive.",
          exampleAr: "فالخنزيرُ محرَّمٌ وما اتُّخذ منه: الجيلاتينُ الخنزيريّ، والشحمُ، والمقدَّدُ بأيِّ اسمٍ سُمِّي. وإن اضطُررتَ اضطرارًا حقيقيًّا ولم تجد سواه، فالآيةُ نفسها ترفع عنك الإثم في أكلِ ما تُبقي به نفسك.",
          proof: "Prohibited to you are dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah … But whoever is forced by severe hunger with no inclination to sin — then indeed, Allah is Forgiving and Merciful.",
          proofAr: "حُرِّمَتْ عَلَيْكُمُ ٱلْمَيْتَةُ وَٱلدَّمُ وَلَحْمُ ٱلْخِنزِيرِ وَمَآ أُهِلَّ لِغَيْرِ ٱللَّهِ بِهِۦ … فَمَنِ ٱضْطُرَّ فِى مَخْمَصَةٍ غَيْرَ مُتَجَانِفٍۢ لِّإِثْمٍۢ فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
          ref: "Surah al-Maidah (5:3)",
          refAr: "سورة المائدة (٥:٣)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["pork", "can i eat pork", "bacon", "ham", "pig", "haram food", "is it halal", "gelatine", "what food is forbidden", "meat", "halal meat", "eat",
                 "لحم الخنزير", "أكل الخنزير", "الخنزير حرام", "الطعام الحرام", "حلال ولا حرام", "الجيلاتين", "اللحم", "الذبح", "الميتة"]
        },
        {
          id: "bh-drink", num: "", icon: "🚫",
          title: "Alcohol, and anything that intoxicates",
          titleAr: "الخمر وكلُّ مُسكِر",
          plain: "Alcohol is forbidden, and so is anything that does what alcohol does. The Prophet ﷺ closed the argument before it started: whatever intoxicates is khamr, and all khamr is forbidden — whatever it is made from and whatever it is called.",
          plainAr: "الخمرُ حرام، وكذلك كلُّ ما فعل فِعلها. وقد سدَّ النبيُّ ﷺ باب الجدل قبل أن يُفتح: كلُّ مسكرٍ خمر، وكلُّ خمرٍ حرام، من أيِّ شيءٍ اتُّخذ وبأيِّ اسمٍ سُمِّي.",
          example: "So it covers spirits, wine and beer, and it covers recreational drugs by the same reasoning — the ruling followed the effect, not the ingredient. And a small amount is not a way around it: what intoxicates in quantity is forbidden in a mouthful.",
          exampleAr: "فيدخل فيه المسكراتُ والنبيذُ والجعة، وتدخل فيه المخدّراتُ بالعلّة نفسها، فالحكمُ دار مع الأثر لا مع المادّة. وليس القليلُ مخرجًا: ما أسكر كثيرُه فقليلُه حرام.",
          proof: "Every intoxicant is khamr, and every khamr is forbidden.",
          proofAr: "كُلُّ مُسْكِرٍ خَمْرٌ وَكُلُّ خَمْرٍ حَرَامٌ",
          ref: "Sahih Muslim, Book of Drinks",
          refAr: "صحيح مسلم، كتاب الأشربة",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          extraProof: "O you who have believed, indeed intoxicants, gambling, [sacrificing on] stone altars and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful.",
          extraProofAr: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِنَّمَا ٱلْخَمْرُ وَٱلْمَيْسِرُ وَٱلْأَنصَابُ وَٱلْأَزْلَٰمُ رِجْسٌۭ مِّنْ عَمَلِ ٱلشَّيْطَٰنِ فَٱجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ",
          extraRef: "Surah al-Maidah (5:90)",
          extraRefAr: "سورة المائدة (٥:٩٠)",
          keys: ["alcohol", "drinking", "is alcohol haram", "beer", "wine", "drunk", "drugs", "weed", "cannabis", "smoking", "gambling", "betting", "casino", "lottery",
                 "الخمر", "الكحول", "الشرب", "المسكر", "المخدرات", "الحشيش", "التدخين", "القمار", "الميسر", "الرهان", "اليانصيب", "هل الخمر حرام",
                 "smoke weed", "smoking weed", "smoke a joint", "smoke hash", "smoking cannabis", "ادخن حشيش", "تدخين الحشيش", "المخدرات"]
        },
        {
          id: "bh-smoking", num: "", icon: "🚬",
          title: "Smoking — and being honest about how the ruling is reached",
          titleAr: "التدخين — والصدقُ في بيان كيف استُنبط الحكم",
          plain: "No verse and no hadith mentions tobacco. It reached the Muslim world around a thousand years after the revelation, so nothing in the texts names it, and anybody who tells you a hadith forbids smoking by name is mistaken.\n\nWhat the scholars did instead was apply general principles to it. And on that basis the great majority of contemporary scholars and fatwa bodies — al-Azhar, the Permanent Committee in Saudi Arabia, and others — hold that it is forbidden.",
          plainAr: "ليس في القرآن ولا في السنّة ذكرٌ للتبغ. فقد وصل بلاد المسلمين بعد الوحي بنحو ألف سنة، فلا يسمّيه نصّ، ومن أخبرك أنّ حديثًا يحرّم التدخين باسمه فقد وهم.\n\nوإنما صنع أهلُ العلم أن طبّقوا عليه القواعد العامّة. وعلى هذا ذهب جمهورُ المعاصرين وهيئاتُ الفتوى — كالأزهر واللجنة الدائمة وغيرهما — إلى تحريمه.",
          example: "The principles they applied, so you can weigh the reasoning yourself rather than take the conclusion on trust:\n\n1. Do not throw yourselves into destruction with your own hands (2:195), and do not kill yourselves (4:29). Smoking's harm is no longer disputed by anybody, including the companies that sell it.\n\n2. He makes lawful for them the good things and forbids them the foul (7:157) — and the scholars class it with the khaba'ith on the strength of what it does to the body.\n\n3. \"No harm and no reciprocating harm\" — and the harm reaches other people in the room, which was not even known when the earlier scholars first discussed it.\n\n4. Wasting wealth on something with no benefit.",
          exampleAr: "والقواعدُ التي طبّقوها، لتزن أنت الاستدلال ولا تأخذ النتيجة تقليدًا:\n\n١. ﴿وَلَا تُلْقُوا۟ بِأَيْدِيكُمْ إِلَى ٱلتَّهْلُكَةِ﴾ [البقرة ١٩٥]، و﴿وَلَا تَقْتُلُوٓا۟ أَنفُسَكُمْ﴾ [النساء ٢٩]. وضررُه اليوم لا ينازع فيه أحد، ولا الشركاتُ التي تبيعه.\n\n٢. ﴿وَيُحِلُّ لَهُمُ ٱلطَّيِّبَٰتِ وَيُحَرِّمُ عَلَيْهِمُ ٱلْخَبَٰٓئِثَ﴾ [الأعراف ١٥٧] — وألحقوه بالخبائث لما يصنعه بالبدن.\n\n٣. «لا ضرر ولا ضرار» — وضررُه يتعدّى إلى من في الغرفة، وهذا لم يكن معلومًا حين تكلّم فيه المتقدّمون.\n\n٤. إضاعةُ المال فيما لا نفع فيه.",
          proof: "And do not throw yourselves with your own hands into destruction. And do good; indeed, Allah loves the doers of good.",
          proofAr: "وَلَا تُلْقُوا۟ بِأَيْدِيكُمْ إِلَى ٱلتَّهْلُكَةِ ۛ وَأَحْسِنُوٓا۟ ۛ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُحْسِنِينَ",
          ref: "Surah Al-Baqarah (2:195)",
          refAr: "سورة البقرة (٢:١٩٥)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "There should be no causing of harm, nor reciprocating harm.",
          extraProofAr: "لَا ضَرَرَ وَلَا ضِرَارَ",
          extraRef: "Sunan Ibn Majah, Chapters on Rulings, Hadith 2340",
          extraRefAr: "سنن ابن ماجه، كتاب الأحكام، حديث ٢٣٤٠",
          note: "SAY WHICH PART IS WHICH, because that is what makes the ruling usable. The verses and the hadith above are TEXT. \"Therefore smoking is forbidden\" is the scholars' APPLICATION of them to a substance the texts never mention. That application is held by the overwhelming majority today — and some earlier scholars, writing when the harm was genuinely unknown, said only that it was disliked. Knowing that is not a loophole; it is the difference between following a ruling and understanding it.",
          noteAr: "وبيِّن أيُّ الأمرين هو الأمر، فبه يصير الحكمُ نافعًا: فالآياتُ والحديثُ المتقدّمة نصّ. وأمّا قولُهم «فالتدخينُ حرام» فهو تطبيقُ أهل العلم لها على شيءٍ لم تسمّه النصوص. وعلى هذا التطبيق جمهورُ المعاصرين الساحق — وقال بعضُ المتقدّمين ممّن كتبوا والضررُ يومئذٍ مجهول: إنه مكروه. ومعرفةُ هذا ليست مخرجًا، وإنما هي الفرقُ بين أن تتّبع حكمًا وأن تفهمه.",
          keys: ["smoking", "cigarettes", "is smoking haram", "tobacco", "shisha", "hookah", "vape", "vaping", "nicotine", "quit smoking", "smoke", "cigar",
                 "التدخين", "الدخان", "السجائر", "سيجارة", "حكم التدخين", "الشيشة", "النرجيلة", "المعسل", "الفيب", "التبغ", "اقلع عن التدخين",
                 "i smoke cigarettes", "i smoke every day", "i want to quit", "quit the cigarettes", "trying to stop smoking", "a pack a day", "vaping instead", "بدخن", "بدي اترك التدخين", "احاول اوقف", "علبة باليوم", "الفيب بدل السجاير"]
        },
        {
          id: "bh-earning", num: "", icon: "💵",
          title: "Where your money comes from",
          titleAr: "من أين يأتي مالك",
          plain: "What you earn is part of what is halal and haram, not separate from it. Allah is pure and accepts only what is pure — and money taken wrongly does not stop being wrong because it was spent on something good.",
          plainAr: "كسبُك من الحلال والحرام لا خارجٌ عنه. واللهُ طيّبٌ لا يقبل إلا طيّبًا، والمالُ المأخوذ بغير حقٍّ لا يصير حلالًا لأنه أُنفق في خير.",
          example: "The Prophet ﷺ then described a man on a long journey, dishevelled and dusty, raising his hands to the sky — \"My Lord, my Lord\" — while his food, his drink and his clothing were all from what is forbidden. \"So how is he to be answered?\" It is the sharpest thing said about earning in the whole Sunnah.",
          exampleAr: "ثم ذكر ﷺ الرجلَ يُطيل السفر أشعثَ أغبرَ يمدّ يديه إلى السماء: «يا ربِّ، يا ربِّ»، ومطعمُه حرامٌ ومشربُه حرامٌ وملبسُه حرام. «فأنّى يُستجاب لذلك؟» وهو أشدُّ ما قيل في الكسب في السنّة كلِّها.",
          proof: "O people, Allah is pure and accepts only what is pure.",
          proofAr: "أَيُّهَا النَّاسُ، إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا",
          ref: "Sahih Muslim, Book of Zakat",
          refAr: "صحيح مسلم، كتاب الزكاة",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          link: "#rulings",
          linkEn: "Interest, and working somewhere that deals in what is forbidden",
          linkAr: "الربا، والعمل فيما يتعامل بالحرام",
          keys: ["haram money", "haram income", "my job", "work", "salary", "is my job halal", "earning", "stealing", "cheating at work", "bribe", "interest", "riba",
                 "المال الحرام", "الكسب الحرام", "عملي", "وظيفتي", "راتبي", "هل عملي حلال", "السرقة", "الرشوة", "الربا", "الغش في العمل"]
        }
      ]
    },

    {
      id: "b-tawheed", level: "start", icon: "☀️",
      title: "Who Allah is, and why you are here",
      titleAr: "من هو الله، ولماذا أنت هنا",
      lead: "Everything else in the religion rests on this one, so it is worth being exact about it.",
      leadAr: "كلُّ ما في الدِّين راجعٌ إلى هذا، فحقُّه أن يُحرَّر.",
      items: [
        {
          id: "bw-why", num: "", icon: "❓",
          title: "Why you are here at all",
          titleAr: "لماذا أنت هنا أصلًا",
          plain: "Allah gives the reason in six words: He created us to worship Him. Not to be useful to Him — He needs nothing — but because knowing and worshipping the One who made you is what a human being is for.",
          plainAr: "ذكر اللهُ العلّة في كلماتٍ يسيرة: خلقنا لعبادته. لا لينتفع بنا — فهو الغنيّ — ولكن لأنّ معرفةَ من خلقك وعبادتَه هي التي خُلق لها الإنسان.",
          example: "And worship is not only the prayer. Feeding your family from honest money is worship. Being fair when nobody would know is worship. The word is much wider than the mosque.",
          exampleAr: "والعبادةُ ليست الصلاةَ وحدها. فإطعامُ أهلك من كسبٍ حلالٍ عبادة، والعدلُ حيث لا يعلم بك أحدٌ عبادة. والكلمةُ أوسعُ من المسجد بكثير.",
          proof: "And I did not create the jinn and mankind except to worship Me.",
          proofAr: "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
          ref: "Surah adh-Dhariyat (51:56)",
          refAr: "سورة الذاريات (٥١:٥٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["why am i here", "purpose of life", "why did god create us", "meaning of life", "what is worship", "why do we exist", "point of living",
                 "لماذا خلقنا", "الهدف من الحياة", "معنى الحياة", "ما العبادة", "لماذا أنا هنا", "الغاية من الخلق"]
        },
        {
          id: "bw-who", num: "", icon: "1️⃣",
          title: "Who He is, in His own words",
          titleAr: "من هو، بكلامه هو",
          plain: "When He was asked to describe Himself, the answer was four short lines: He is One; He is the One everything turns to and who needs nothing; He did not father and was not fathered; and there is nothing at all like Him.",
          plainAr: "لمّا سُئل أن يصف نفسه كان الجوابُ أربعَ آياتٍ قصار: هو أحد، وهو الصمدُ الذي تصمد إليه الخلائقُ ولا يحتاج، ولم يلد ولم يولد، وليس له نظيرٌ البتّة.",
          example: "That last line does the most work. Whatever picture forms in your head when you think of Him, it is not Him — because nothing you have ever seen resembles Him.",
          exampleAr: "وآخرُ آيةٍ منها أعظمُها أثرًا: فمهما تصوَّرتَ في ذهنك عند ذكره فليس هو، إذ ليس شيءٌ ممّا رأيتَ يشبهه.",
          proof: "Say, He is Allah, One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.",
          proofAr: "قُلْ هُوَ ٱللَّهُ أَحَدٌ • ٱللَّهُ ٱلصَّمَدُ • لَمْ يَلِدْ وَلَمْ يُولَدْ • وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
          ref: "Surah al-Ikhlas (112:1-4)",
          refAr: "سورة الإخلاص (١١٢:١-٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["who is allah", "what is god like", "describe god", "does god have a son", "is allah the same as god", "trinity", "al ikhlas", "oneness",
                 "من هو الله", "صفة الله", "هل لله ولد", "الإخلاص", "التوحيد", "من ربي", "الله أحد"]
        },
        {
          id: "bw-shirk", num: "", icon: "⚠️",
          title: "The one thing not forgiven",
          titleAr: "الذنبُ الوحيد الذي لا يُغفر",
          plain: "Every sin can be forgiven — every single one — except dying while giving to something else the worship that belongs to Allah alone. Not because His mercy runs out, but because that particular sin is a refusal of the One who would forgive it.",
          plainAr: "كلُّ ذنبٍ يُغفر — كلُّه — إلا أن يموت العبدُ وقد صرف لغير الله ما لا يكون إلا لله. لا لأنّ رحمته تنفد، بل لأنّ هذا الذنب بعينه ردٌّ على من يغفر.",
          example: "In practice it means: ask Allah directly. Not through a dead saint, not through a grave, not through a charm on your wrist, not through a number or a star. He said He is near and answers — there is no queue and no middleman.",
          exampleAr: "وأثرُ ذلك عمليًّا: أن تسأل اللهَ مباشرة. لا بميّتٍ صالح، ولا بقبر، ولا بتميمةٍ في معصمك، ولا برقمٍ ولا نجم. وقد أخبر أنه قريبٌ يجيب، فلا صفَّ ولا واسطة.",
          proof: "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills.",
          proofAr: "إِنَّ ٱللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِۦ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَآءُ",
          ref: "Surah an-Nisa (4:48)",
          refAr: "سورة النساء (٤:٤٨)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "Whoever dies calling upon a rival besides Allah enters the Fire.",
          extraProofAr: "مَنْ مَاتَ وَهْوَ يَدْعُو مِنْ دُونِ اللَّهِ نِدًّا دَخَلَ النَّارَ",
          extraRef: "Sahih al-Bukhari, Hadith 4497",
          extraRefAr: "صحيح البخاري، حديث ٤٤٩٧",
          keys: ["shirk", "biggest sin", "unforgivable", "worst sin", "amulet", "charm", "grave", "saints", "asking the dead", "superstition", "evil eye", "magic",
                 "الشرك", "أكبر الكبائر", "الذنب الذي لا يغفر", "التميمة", "الحجاب", "القبور", "الأولياء", "دعاء الأموات", "السحر", "الحسد"]
        },
        {
          id: "bw-near", num: "", icon: "📿",
          title: "He is near, and He answers",
          titleAr: "قريبٌ مجيب",
          plain: "You do not need Arabic, a special time, a clean record, or anyone's permission to speak to Him. He answers the one who calls — that is His own description of Himself, given in reply to people asking where He is.",
          plainAr: "لا تحتاج إلى العربية، ولا إلى وقتٍ مخصوص، ولا إلى صحيفةٍ نظيفة، ولا إلى إذنِ أحدٍ لتكلّمه. يجيب دعوةَ الداعي إذا دعاه — هكذا وصف نفسه، جوابًا لمن سأل عنه.",
          example: "So ask in whatever language you think in, in the car, in bed, in the middle of the worst week of your life. That counts. That is the thing itself.",
          exampleAr: "فاسأله باللغة التي تفكّر بها، في سيّارتك، وعلى فراشك، وفي أسوأ أسابيع عمرك. فذاك محسوب، بل هو المقصود نفسه.",
          proof: "And when My servants ask you concerning Me — indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
          proofAr: "وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ",
          ref: "Surah al-Baqarah (2:186)",
          refAr: "سورة البقرة (٢:١٨٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          link: "#adhkar",
          linkEn: "What he ﷺ actually said, with a counter for each",
          linkAr: "ما كان يقوله ﷺ، مع عدّادٍ لكلّ ذكر",
          keys: ["dua", "how to pray to god", "does god hear me", "ask god", "supplication", "can i pray in english", "god feels far", "no one listens",
                 "الدعاء", "كيف أدعو", "هل يسمعني الله", "أدعو بالعربي", "الله بعيد", "لا أحد يسمعني", "أسأل الله"]
        }
      ]
    },

    {
      id: "b-tawbah", level: "start", icon: "🔄",
      title: "Turning back after you have got it wrong",
      titleAr: "التوبة بعد الخطأ",
      lead: "The most common reason people stay away is the belief that it is too late. It is not, and this is the part of the religion that says so most loudly.",
      leadAr: "أكثرُ ما يُقعد الناسَ ظنُّهم أنّ الأوان قد فات. ولم يفُت، وهذا أشدُّ أبواب الدِّين تصريحًا بذلك.",
      items: [
        {
          id: "bb-despair", num: "", icon: "🌅",
          title: "However bad it was",
          titleAr: "مهما كان",
          plain: "The verse is addressed to the people who went furthest — those who wasted themselves — and it tells them not to give up hope, because Allah forgives sins, all of them. Not most of them. All.",
          plainAr: "الآيةُ خطابٌ لأبعد الناس ذهابًا — الذين أسرفوا على أنفسهم — تنهاهم عن القنوط، لأنّ اللهَ يغفر الذنوب جميعًا. لا أكثرَها، بل جميعَها.",
          example: "Read who it is addressed to before you decide it is not for you. It is not addressed to the nearly-good. It is addressed to the person who thinks he has ruined it.",
          exampleAr: "فانظر إلى من وُجّه الخطاب قبل أن تحكم أنه ليس لك. فليس خطابًا لمن كاد يُحسن، وإنما هو خطابٌ لمن يظنّ أنه أفسد كلَّ شيء.",
          proof: "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.",
          proofAr: "قُلْ يَٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا ۚ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ",
          ref: "Surah az-Zumar (39:53)",
          refAr: "سورة الزمر (٣٩:٥٣)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["too late", "god wont forgive me", "i did something terrible", "unforgivable", "given up", "no hope", "ruined my life", "ashamed", "cant come back",
                 "فات الأوان", "لن يغفر لي", "فعلت شيئا فظيعا", "لا أمل", "يئست", "أفسدت حياتي", "أستحي من الله", "لا أستطيع الرجوع"]
        },
        {
          id: "bb-how", num: "", icon: "✅",
          title: "What turning back actually requires",
          titleAr: "ما تقتضيه التوبة حقًّا",
          plain: "Three things, and a fourth when a person was harmed. Stop doing it. Regret having done it. Decide not to go back to it. And if you took something from someone or hurt them, return it or put it right — that part is not between you and Allah alone.",
          plainAr: "ثلاثةٌ، ورابعٌ إن تعلّق بها حقُّ آدميّ. أن تُقلع عنه، وأن تندم عليه، وأن تعزم ألّا تعود إليه. فإن كنتَ أخذتَ من أحدٍ شيئًا أو آذيته فردَّ إليه حقَّه أو استَحِلَّه، فهذا ليس بينك وبين الله وحده.",
          example: "Notice what is not on the list: a fee, a person to confess to, a ceremony, or a waiting period. You can do all of it, right now, where you are sitting.",
          exampleAr: "وتأمّل ما ليس في القائمة: لا أجرة، ولا معترَفٌ عنده، ولا طقس، ولا مدّةُ انتظار. تستطيع ذلك كلَّه الآن، في مجلسك هذا.",
          link: "#rulings",
          linkEn: "Repenting from a major sin — including the sin you keep repeating",
          linkAr: "التوبة من الكبيرة — ومنها الذنبُ الذي تعود إليه",
          keys: ["how to repent", "how do i say sorry to god", "tawbah", "repentance", "ask forgiveness", "make it right", "confess", "stop sinning", "keep sinning",
                 "كيف أتوب", "التوبة", "أستغفر", "أعتذر لله", "أطلب المغفرة", "أرد الحقوق", "أكرر الذنب", "عايز اتوب"]
        },
        {
          id: "bb-changed", num: "", icon: "♻️",
          title: "Not wiped — exchanged",
          titleAr: "لا تُمحى فحسب، بل تُبدَّل",
          plain: "The promise goes further than erasure. For the one who turns back, believes and acts on it, Allah replaces the bad deeds with good ones. The record is not blanked; it is rewritten in your favour.",
          plainAr: "الوعدُ أبعدُ من المحو. فمن تاب وآمن وعمل صالحًا بدّل اللهُ سيّئاته حسنات. فليست الصحيفةُ تُمحى، وإنما تُكتب لك.",
          example: "Which is why the people who came back hardest are so often the ones who go furthest afterwards. The past is not a weight they carry; it is the reason they run.",
          exampleAr: "ولذلك كان أشدُّ الناس رجوعًا أبعدَهم بعد ذلك مضيًّا. فالماضي عندهم ليس حِملًا يحملونه، بل هو الذي يستحثّهم.",
          proof: "Except for those who repent, believe and do righteous work. For them Allah will replace their evil deeds with good.",
          proofAr: "إِلَّا مَن تَابَ وَءَامَنَ وَعَمِلَ عَمَلًۭا صَٰلِحًۭا فَأُو۟لَٰٓئِكَ يُبَدِّلُ ٱللَّهُ سَيِّـَٔاتِهِمْ حَسَنَٰتٍۢ",
          ref: "Surah al-Furqan (25:70)",
          refAr: "سورة الفرقان (٢٥:٧٠)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["past sins", "my record", "bad deeds erased", "start again", "second chance", "clean slate", "fresh start",
                 "الذنوب السابقة", "صحيفتي", "تبديل السيئات", "أبدأ من جديد", "فرصة أخرى", "أمحو ماضيي"]
        },
        {
          id: "bb-erring", num: "", icon: "🧍",
          title: "Everybody gets it wrong — the question is what comes next",
          titleAr: "كلُّ الناس يخطئون — والشأنُ فيما بعد",
          plain: "Being someone who sins is not the failure; it is the human condition, and it is stated as such. The best of those who err are the ones who keep coming back.",
          plainAr: "ليست الخطيئةُ هي السقوط، بل هي حالُ الإنسان، وقد قيلت هكذا صراحةً. وخيرُ الخطّائين التوّابون.",
          example: "And the way Allah receives it is described with the picture of a man who lost his camel in open desert with all his food and water on it, gave it up for dead, and then looked up and there it was. That is the joy — His, at your return.",
          exampleAr: "وقد وُصف تلقّي الله لها بمثَل رجلٍ أضلَّ راحلته في فلاةٍ وعليها طعامُه وشرابُه، فأيس منها، ثم رفع رأسه فإذا هي عنده. فتلك الفرحة — فرحُه سبحانه برجوعك.",
          proof: "Every son of Adam errs, and the best of those who err are those who turn back.",
          proofAr: "كُلُّ بَنِي آدَمَ خَطَّاءٌ، وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
          ref: "Sunan Ibn Majah, Hadith 4251; Jami at-Tirmidhi, Hadith 2499",
          refAr: "سنن ابن ماجه، حديث ٤٢٥١؛ وجامع الترمذي، حديث ٢٤٩٩",
          strength: "Outside the two Sahihs. at-Tirmidhi himself called it gharib — known only through a single chain — so being in these books does not by itself establish it. The meaning, however, is carried by the Quran and by what is in Muslim below.",
          strengthAr: "خارج الصحيحين. وقد قال الترمذيُّ نفسه: غريبٌ لا نعرفه إلا من هذا الوجه، فوجودُه في هذين الكتابين لا يُثبته بنفسه. غير أنّ معناه ثابتٌ بالقرآن وبما في مسلمٍ أدناه.",
          extraProof: "Allah is more joyful at the repentance of His servant than one of you who finds his lost camel in the open desert.",
          extraProofAr: "لَلَّهُ أَفْرَحُ بِتَوْبَةِ عَبْدِهِ مِنْ أَحَدِكُمْ يَجِدُ ضَالَّتَهُ بِالْفَلَاةِ",
          extraRef: "Sahih Muslim, Book of Repentance",
          extraRefAr: "صحيح مسلم، كتاب التوبة",
          keys: ["i keep sinning", "i always fail", "i cant stop", "relapse", "again and again", "weak", "everyone sins", "nobody is perfect",
                 "أكرر الذنب", "أفشل دائما", "لا أستطيع التوقف", "أعود للذنب", "ضعيف", "كل الناس تخطئ"]
        },
        {
          id: "bb-istighfar", num: "", icon: "🗝️",
          title: "The best wording to ask with",
          titleAr: "سيّد الاستغفار",
          plain: "He ﷺ called one particular wording the master of asking forgiveness, and said that whoever says it with certainty in the day and dies before evening, or says it at night and dies before morning, is of the people of Paradise.",
          plainAr: "سمّى ﷺ لفظًا بعينه سيّدَ الاستغفار، وأخبر أنّ من قاله موقنًا به من نهاره فمات قبل أن يُمسي، أو قاله من ليله فمات قبل أن يُصبح، فهو من أهل الجنّة.",
          example: "Say it once in the morning and once at night. It takes about fifteen seconds, and there is nothing else in the day with that promise attached to it for that price.",
          exampleAr: "قُله مرّةً في صباحك ومرّةً في مسائك، فهو نحوُ خمس عشرة ثانية، وليس في يومك شيءٌ آخرُ عُلِّق به هذا الوعدُ بهذا الثمن.",
          proof: "O Allah, You are my Lord; there is no god but You. You created me and I am Your servant, and I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin — so forgive me, for none forgives sins but You.",
          proofAr: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
          ref: "Sahih al-Bukhari, Hadith 6306",
          refAr: "صحيح البخاري، حديث ٦٣٠٦",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          link: "#adhkar",
          linkEn: "This one, with a counter, beside the rest of the adhkar",
          linkAr: "هذا الذكرُ بعدّادٍ مع بقيّة الأذكار",
          keys: ["sayyid al istighfar", "best dua for forgiveness", "morning dua", "evening dua", "istighfar", "what to say to be forgiven",
                 "سيد الاستغفار", "أفضل دعاء للمغفرة", "أذكار الصباح", "أذكار المساء", "الاستغفار", "ماذا أقول لأُغفر لي"]
        }
      ]
    },

    /* ================= LEVEL 2 ================= */
    {
      id: "b-sources", level: "next", icon: "🔍",
      title: "How anyone knows any of this",
      titleAr: "كيف عُرف هذا كلُّه",
      lead: "Once the basics are steady, the next question is usually \"says who?\" — and it deserves a straight answer.",
      leadAr: "إذا استقرّت الأساسياتُ كان السؤالُ التالي عادةً: «ومن قال هذا؟» — وهو سؤالٌ يستحقّ جوابًا صريحًا.",
      items: [
        {
          id: "bs-two", num: "", icon: "📚",
          title: "Two sources, and they are not equal",
          titleAr: "مصدران، وليسا سواء",
          plain: "The Quran is the speech of Allah, preserved word for word, and every copy on earth is the same. The Sunnah is what the Prophet ﷺ said, did and approved, transmitted by people — which is why it has to be graded, and the Quran does not.",
          plainAr: "القرآنُ كلامُ الله محفوظًا بلفظه، ونسخُه في الأرض كلِّها واحدة. والسنّةُ ما قاله النبيُّ ﷺ وفعله وأقرّه، نقلها الرجال — ولذلك احتاجت إلى تمييزٍ بين صحيحها وضعيفها، ولم يحتج القرآنُ إلى ذلك.",
          example: "This is why this site prints a grading beside every hadith and never beside a verse. Confusing the two is the mistake it was built to stop.",
          exampleAr: "ولهذا يطبع هذا الموقعُ درجةً بجانب كلِّ حديث، ولا يطبعها بجانب آية. والخلطُ بينهما هو الخطأُ الذي بُني الموقعُ لدفعه.",
          link: "verify.html",
          linkEn: "Check any text you were sent",
          linkAr: "تحقَّق من أيِّ نصٍّ وصلك",
          keys: ["quran and sunnah", "where does this come from", "sources of islam", "who says", "is this in the quran", "difference between quran and hadith",
                 "القرآن والسنة", "من أين جاء هذا", "مصادر الإسلام", "من قال", "هل هذا في القرآن", "الفرق بين القرآن والحديث"]
        },
        {
          id: "bs-grading", num: "", icon: "🏷️",
          title: "What \"sahih\" and \"da'if\" actually mean",
          titleAr: "ما معنى «صحيح» و«ضعيف»",
          plain: "Every hadith comes with a chain: this person heard it from that person, who heard it from that one, back to the Prophet ﷺ. Scholars examined every name — was he honest, was his memory sound, did he actually meet the one above him. A chain of reliable people with no break is sahih. A break, or a weak memory, makes it da'if.",
          plainAr: "لكلِّ حديثٍ إسناد: فلانٌ سمعه من فلان، عن فلان، حتى ينتهي إلى النبيّ ﷺ. وقد فحص العلماءُ كلَّ اسمٍ فيه: أصدوقٌ هو، أضابطٌ حفظُه، أَلَقِيَ من روى عنه. فإذا اتّصل الإسنادُ بالثقات فهو صحيح، وإذا انقطع أو ضعُف الحفظُ فهو ضعيف.",
          example: "\"Da'if\" does not mean somebody made it up — that word is mawdu', fabricated, and it is a much heavier charge. Da'if means the chain is not strong enough to be sure. That is why the honest answer to an unfamiliar text is \"we did not find it\", not \"it is false\".",
          exampleAr: "و«ضعيف» لا تعني أنّ أحدًا اختلقه، فتلك كلمةُ «موضوع»، وهي تهمةٌ أثقلُ بكثير. وإنما تعني أنّ الإسناد لا يبلغ حدَّ الجزم. ولهذا كان الجوابُ الأمينُ عن نصٍّ لا يُعرف: «لم نجده»، لا «هو باطل».",
          link: "verify.html",
          linkEn: "The page that applies this to a message you were sent",
          linkAr: "الصفحةُ التي تُطبّق هذا على رسالةٍ وصلتك",
          keys: ["sahih", "daif", "weak hadith", "authentic", "fabricated", "mawdu", "isnad", "chain of narration", "how do we know hadith is true", "grading",
                 "صحيح", "ضعيف", "حديث ضعيف", "موضوع", "الإسناد", "السند", "كيف نعرف صحة الحديث", "درجة الحديث"]
        },
        {
          id: "bs-differ", num: "", icon: "🌿",
          title: "Why scholars disagree — and what you do about it",
          titleAr: "لماذا يختلف العلماء — وماذا تصنع أنت",
          plain: "Most disagreement is not about whether a text is true. It is about which text applies here, or what a word covered in the seventh century, or how two texts fit together. The four schools are four careful, honest ways of working that out — not four religions.",
          plainAr: "أكثرُ الخلاف ليس في ثبوت النصّ، وإنما في أيِّ نصٍّ ينطبق على هذه الصورة، أو في معنى لفظٍ في القرن الأوّل، أو في الجمع بين نصّين. والمذاهبُ الأربعة أربعُ طرائقَ أمينةٍ دقيقةٍ في ذلك — لا أربعةُ أديان.",
          example: "So when you find two answers, you are usually not choosing between right and wrong. Take the one from someone who knows and whom you trust, act on it, and do not make a party out of it. Understanding of the religion is described as a gift Allah gives to those He wants good for — which is not the tone of people who make it a fight.",
          exampleAr: "فإذا وجدتَ قولين فلستَ في الغالب بين صوابٍ وخطأ. خذ بقول من تثق بعلمه واعمل به، ولا تجعل منه حزبًا. وقد وُصف الفقهُ في الدِّين بأنه عطيّةٌ يمنحها اللهُ من أراد به خيرًا — وليست تلك لهجةَ من يجعله خصومة.",
          proof: "Whoever Allah wants good for, He gives him understanding of the religion.",
          proofAr: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
          ref: "Sahih al-Bukhari, Hadith 71",
          refAr: "صحيح البخاري، حديث ٧١",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          link: "#rulings",
          linkEn: "Rulings where the scholars genuinely part, said honestly",
          linkAr: "مسائلُ اختلف فيها أهلُ العلم حقًّا، مبيَّنةً على وجهها",
          keys: ["why do scholars disagree", "madhhab", "hanafi", "maliki", "shafi", "hanbali", "four schools", "which opinion", "who do i follow", "different answers",
                 "لماذا يختلف العلماء", "المذاهب", "حنفي", "مالكي", "شافعي", "حنبلي", "المذاهب الأربعة", "أي قول أتبع", "اختلاف الفتاوى"]
        }
      ]
    },

    {
      id: "b-heart", level: "next", icon: "❤️",
      title: "The part nobody sees",
      titleAr: "العملُ الذي لا يراه أحد",
      lead: "Once the outward things are steady, this is what decides what they are worth.",
      leadAr: "إذا استقام الظاهرُ فهذا هو الذي يحدّد قيمته.",
      items: [
        {
          id: "bh-ikhlas", num: "", icon: "🎯",
          title: "Doing it for Him, not for the room",
          titleAr: "أن تعمله له لا للناس",
          plain: "The first hadith in al-Bukhari sets the rule for everything after it: deeds are by intentions, and each person gets what he intended. The same act, done for two different reasons, is two different things.",
          plainAr: "أوّلُ حديثٍ في صحيح البخاري يضع القاعدةَ لما بعده: إنما الأعمال بالنيات، وإنما لكلّ امرئٍ ما نوى. فالعملُ الواحد بنيّتين عملان.",
          example: "The practical test is small and merciless: would you still do it if nobody ever found out? And if the answer is no, the fix is not to stop doing it — it is to keep doing it and quietly correct why.",
          exampleAr: "والامتحانُ العمليُّ يسيرٌ لا يُحابي: أكنتَ تفعله لو لم يعلم به أحدٌ أبدًا؟ فإن كان الجوابُ لا، فليس العلاجُ أن تدَعه، بل أن تمضي فيه وتُصحّح الباعثَ في سرّك.",
          link: "#pillars",
          linkEn: "This is ihsan — the third level in the hadith of Jibril",
          linkAr: "وهذا هو الإحسان — المرتبةُ الثالثة في حديث جبريل",
          keys: ["sincerity", "ikhlas", "showing off", "riya", "doing it for people", "attention", "am i doing this for god", "hypocrisy", "fake",
                 "الإخلاص", "الرياء", "أعمل للناس", "السمعة", "هل أعمل لله", "النفاق", "التصنع"]
        },
        {
          id: "bh-taqwa", num: "", icon: "🛡️",
          title: "What taqwa actually is",
          titleAr: "ما هي التقوى حقًّا",
          plain: "It is not fear in the sense of dread. It is the care you take when you know you are being watched by someone whose opinion actually matters — so you put something between yourself and what would harm you.",
          plainAr: "ليست خوفًا بمعنى الرعب، وإنما هي احترازُ من يعلم أنه بمرأى ممّن يعنيه رأيُه، فيجعل بينه وبين ما يضرّه وقاية.",
          example: "And it is the only measure of rank there is. Not lineage, not country, not language, not wealth — Allah says plainly that the most honoured among you is the one with the most taqwa. Everything people usually rank each other by is ruled out in the same verse.",
          exampleAr: "وهي الميزانُ الوحيد للتفاضل: لا نسبٌ ولا بلدٌ ولا لسانٌ ولا مال — قال اللهُ صريحًا إنّ أكرمكم عنده أتقاكم. وكلُّ ما يتفاضل به الناسُ عادةً مردودٌ في الآية نفسها.",
          proof: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.",
          proofAr: "يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَٰكُم مِّن ذَكَرٍۢ وَأُنثَىٰ وَجَعَلْنَٰكُمْ شُعُوبًۭا وَقَبَآئِلَ لِتَعَارَفُوٓا۟ ۚ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ",
          ref: "Surah al-Hujurat (49:13)",
          refAr: "سورة الحجرات (٤٩:١٣)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["taqwa", "god consciousness", "fear of god", "racism", "who is better", "arab non arab", "nationality", "piety", "best person",
                 "التقوى", "خوف الله", "مراقبة الله", "العنصرية", "من أفضل", "عربي وأعجمي", "الجنسية", "أكرمكم"]
        },
        {
          id: "bh-life", num: "", icon: "🌱",
          title: "The promise attached to it, in this life",
          titleAr: "الوعدُ المقرون به في الدنيا",
          plain: "Whoever acts rightly, man or woman, while believing — Allah promises them a good life. Not necessarily an easy one or a rich one. A good one: settled, with something solid under it.",
          plainAr: "من عمل صالحًا من ذكرٍ أو أنثى وهو مؤمن، وعده اللهُ حياةً طيّبة. لا يسيرةً بالضرورة ولا غنيّة، بل طيّبةً: مستقرّةً لها أرضٌ تقف عليها.",
          example: "And the verse says \"male or female\" explicitly — the promise is not addressed to half the people. It is worth noticing where the Quran goes out of its way to say that.",
          exampleAr: "وقالت الآيةُ «من ذكرٍ أو أنثى» تصريحًا، فليس الوعدُ لنصف الناس. ومواضعُ تنصيص القرآن على ذلك جديرةٌ بالتأمّل.",
          proof: "Whoever does righteousness, whether male or female, while he is a believer — We will surely cause him to live a good life.",
          proofAr: "مَنْ عَمِلَ صَٰلِحًۭا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌۭ فَلَنُحْيِيَنَّهُۥ حَيَوٰةًۭ طَيِّبَةًۭ",
          ref: "Surah an-Nahl (16:97)",
          refAr: "سورة النحل (١٦:٩٧)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["good life", "will it get better", "happiness", "is it worth it", "what do i get", "peace", "contentment", "why bother being good",
                 "الحياة الطيبة", "هل تتحسن حياتي", "السعادة", "الراحة", "ما الفائدة", "الطمأنينة"]
        }
      ]
    }
  ],

  closing: "This section says what the texts say, in the plainest words they can be said in. It does not replace asking someone who knows — especially where your own case has something unusual in it.",
  closingAr: "هذا القسم يذكر ما دلَّت عليه النصوص بأبسط ما تُقال به، ولا يُغني عن سؤال أهل العلم، ولا سيّما إذا كان في حالك ما ليس في غيرها."
};
