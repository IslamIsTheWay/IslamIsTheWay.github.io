/* ============================================================
   WHAT THE SCHOLARS EXPLAINED — شروح أهل العلم
   ============================================================
   The Quran gives the command and the Sunnah shows the practice.
   But someone asking "what actually counts as hijab?" needs the
   third thing: the explanation of the scholars who spent their
   lives on exactly that question.

   That is what this file is. It carries the settled, practical
   explanations of scholars known for precision — chiefly
   Ibn Baz, Ibn Uthaymeen, the Permanent Committee (al-Lajnah
   ad-Da'imah), and where relevant al-Albani, an-Nawawi and
   Ibn Taymiyyah.

   THREE RULES, kept strictly:

   1. Positions are attributed by NAME. No opinion is presented
      as "Islam says" when it is one scholar's reading.

   2. WHERE THEY DIFFER, THE ENTRY SAYS SO — who held what, and
      which way the weight of the scholars leaned. The owner asked
      for this specifically: "if something is not sure that it's
      right, say that this person said this but the other said the
      opposite, and most of the scholars said the first was right."

   3. NO INVENTED CITATIONS. Fatwas are cited by the WORK
      (Majmu' Fatawa Ibn Baz, Ash-Sharh al-Mumti', Fatawa Nur
      'ala ad-Darb, Fatawa al-Lajnah ad-Da'imah), never by a
      volume and page number typed from memory. Every entry
      carries `verify` — where to read the scholar's own words.

   This is a summary of what scholars said, for learning. It is
   NOT a fatwa for anyone's particular situation.
   ============================================================ */

const FIQH_CATEGORIES = [
  { id: "dress",    en: "Dress & covering",     ar: "اللباس والستر",        icon: "🧕" },
  { id: "prayer",   en: "Prayer",               ar: "الصلاة",               icon: "🕌" },
  { id: "purity",   en: "Purity & doubts",      ar: "الطهارة والوسواس",     icon: "💧" },
  { id: "money",    en: "Money & work",         ar: "المال والعمل",         icon: "💰" },
  { id: "family",   en: "Family & marriage",    ar: "الأسرة والزواج",       icon: "🏠" },
  { id: "conduct",  en: "Conduct & the tongue", ar: "السلوك واللسان",       icon: "🤝" },
  { id: "repent",   en: "Sin & repentance",     ar: "الذنب والتوبة",        icon: "🌱" }
];

const FIQH_RULINGS = [

  /* ================= DRESS ================= */
  {
    id: "fq-hijab-conditions",
    cat: "dress",
    title: "What actually counts as hijab — the conditions, not just the command",
    titleAr: "ما الحجاب الشرعي حقًّا — شروطه لا مجرّد الأمر به",
    question: "I know covering is commanded. But what makes a garment actually count as hijab, and what does not?",
    questionAr: "أعلم أن الستر مأمورٌ به، لكن ما الذي يجعل اللباس حجابًا شرعيًّا حقًّا، وما الذي يُخرجه عن ذلك؟",
    answer: "The scholars did not leave this to taste. They set out conditions a covering must meet, drawn from the verses of An-Nur and Al-Ahzab and from the Prophet's ﷺ own warning about women who are dressed and yet uncovered. A garment that fails any one of these is not doing the job the command was given for.",
    answerAr: "لم يترك أهل العلم هذا للذوق، بل ذكروا شروطًا لا بدّ من توفرها في اللباس، مأخوذة من آيات النور والأحزاب، ومن تحذير النبي ﷺ من «كاسياتٍ عاريات». وما اختلّ فيه شرطٌ منها لم يحقّق المقصود الذي شُرع الأمر لأجله.",
    points: [
      { en: "It covers everything that must be covered — it does not stop short at the wrists, ankles, neck or hair.",
        ar: "أن يستر جميع ما يجب ستره، فلا يقف عند الرسغين ولا الكعبين ولا العنق ولا الشعر." },
      { en: "It is not itself an adornment. A covering that is designed to draw the eye defeats the reason it was commanded.",
        ar: "ألّا يكون هو نفسه زينةً تُلفت النظر، فإن ذلك ينقض المقصود من الأمر به." },
      { en: "It is thick, not see-through. If the colour of the skin or what is beneath shows, it has not covered.",
        ar: "أن يكون صفيقًا غير شفّاف، فإن وصف لون البشرة أو ما تحته فلم يستر." },
      { en: "It is loose, not tight. If it covers the colour but still describes the shape of the body, it has not covered.",
        ar: "أن يكون فضفاضًا غير ضيّق، فإن ستر اللون ووصف حجم الجسد فلم يستر." },
      { en: "It is not perfumed when going out among people.",
        ar: "ألّا يكون مبخَّرًا بالطيب عند الخروج بين الناس." },
      { en: "It does not imitate the dress of men.",
        ar: "ألّا يكون فيه تشبّهٌ بلباس الرجال." },
      { en: "It is not a garment of fame — worn to be noticed, whether for being lavish or for being conspicuously shabby.",
        ar: "ألّا يكون لباس شهرة يُقصد به لفت الأنظار، سواء بالفخامة أو بالإغراب." }
    ],
    evidence: [
      { en: "And tell the believing women to lower their gaze and guard their chastity, and not to display their adornment except what appears of it, and to draw their head-coverings over their chests.",
        ar: "وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ",
        ref: "Surah An-Nur (24:31)" },
      { en: "O Prophet, tell your wives and your daughters and the women of the believers to draw their outer garments over themselves. That is more likely that they will be known and not be abused.",
        ar: "يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ ۚ ذَٰلِكَ أَدْنَىٰ أَن يُعْرَفْنَ فَلَا يُؤْذَيْنَ",
        ref: "Surah Al-Ahzab (33:59)" },
      { en: "Two kinds of the people of the Fire I have not seen… and women who are clothed yet naked, inclining and inclining others, their heads like the humps of camels — they will not enter Paradise nor find its fragrance.",
        ar: "صِنْفَانِ مِنْ أَهْلِ النَّارِ لَمْ أَرَهُمَا… وَنِسَاءٌ كَاسِيَاتٌ عَارِيَاتٌ مَائِلَاتٌ مُمِيلَاتٌ، رُءُوسُهُنَّ كَأَسْنِمَةِ الْبُخْتِ الْمَائِلَةِ، لَا يَدْخُلْنَ الْجَنَّةَ وَلَا يَجِدْنَ رِيحَهَا",
        ref: "Sahih Muslim, Book of Dress and Adornment — Sahih. This is the hadith the scholars point to for the transparent and the tight: 'clothed yet naked' describes exactly that." }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Repeatedly stated that a covering which is transparent, or tight enough to describe the body, does not fulfil the command at all — and that such a woman is included in the meaning of 'clothed yet naked'.",
        viewAr: "كرّر أن اللباس الشفّاف أو الضيّق الذي يصف الجسد لا يتحقق به المقصود من الأمر، وأن صاحبته داخلةٌ في معنى «كاسياتٍ عاريات».",
        work: "Majmu' Fatawa Ibn Baz; Fatawa Nur 'ala ad-Darb" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Set out the same conditions and stressed the two people miss most: thickness and looseness. He said plainly that clothing which covers the colour but shows the shape has not covered.",
        viewAr: "ذكر الشروط نفسها وشدّد على ما يغفل عنه الناس: الصفاقة والسعة. وقال صراحةً إن ما ستر اللون ووصف الحجم فلم يستر.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen; Ash-Sharh al-Mumti'" },
      { name: "The Permanent Committee", nameAr: "اللجنة الدائمة للإفتاء",
        view: "Issued the conditions as a list in substantially this form.",
        viewAr: "أصدرت هذه الشروط مسرودةً على هذا النحو.",
        work: "Fatawa al-Lajnah ad-Da'imah" }
    ],
    difference: "Scholars DO differ on the face and the hands, and the entry on that is separate. They do NOT differ on the conditions above — thickness, looseness and not being an adornment in itself are agreed upon across the schools.",
    differenceAr: "يختلف أهل العلم في الوجه والكفّين، وله مدخلٌ مستقل. وأما الشروط المتقدمة — الصفاقة والسعة وألّا يكون زينةً في نفسه — فمحلّ اتفاقٍ بين المذاهب.",
    verify: "Read the scholars' own wording at binbaz.org.sa and binothaimeen.net before relying on any of it.",
    verifyAr: "راجع كلام العلماء بنصّه في موقعي binbaz.org.sa و binothaimeen.net قبل الاعتماد على شيء منه.",
    keys: ["hijab", "veil", "cover", "covering", "women clothes", "womens clothing", "dress", "tight clothes", "transparent",
           "see through", "abaya", "khimar", "jilbab", "modest", "modesty", "what is hijab", "conditions of hijab",
           "حجاب", "الحجاب", "لباس المرأة", "ملابس النساء", "ستر", "ضيق", "شفاف", "عباءة", "خمار", "جلباب", "شروط الحجاب", "ما هو الحجاب"]
  },
  {
    id: "fq-niqab",
    cat: "dress",
    title: "The face and the hands — where the scholars genuinely differ",
    titleAr: "الوجه والكفّان — موضع الخلاف الحقيقي",
    question: "Must a woman cover her face? I hear one thing from one person and the opposite from another.",
    questionAr: "هل يجب على المرأة ستر وجهها؟ أسمع من هذا قولًا ومن ذاك خلافه.",
    answer: "This is a real difference between major scholars, and anyone who tells you there is only one view is not describing the situation accurately. Both positions are held by serious people with serious evidence. What follows is who held what.",
    answerAr: "هذا خلافٌ حقيقيٌّ بين كبار أهل العلم، ومن أخبرك أن فيه قولًا واحدًا فلم يصف المسألة على وجهها. فكلا القولين قال به أئمةٌ لهم أدلّتهم. وهذا بيان من قال بماذا.",
    points: [
      { en: "Everyone agrees the rest of the body is covered. The difference is only about the face and the hands.",
        ar: "الجميع متفقون على ستر سائر البدن، وإنما الخلاف في الوجه والكفّين." },
      { en: "Everyone agrees that covering the face is at the very least better and safer, and that it was the practice of the wives of the Prophet ﷺ.",
        ar: "والجميع متفقون على أن ستر الوجه أفضل وأحوط على أقل تقدير، وأنه كان هدي أزواج النبي ﷺ." },
      { en: "Both sides agree it becomes obligatory where uncovering leads to harm or temptation.",
        ar: "واتفق الفريقان على وجوبه إذا ترتّب على الكشف فتنةٌ أو أذى." }
    ],
    evidence: [
      { en: "And when you ask them for something, ask them from behind a screen. That is purer for your hearts and for theirs.",
        ar: "وَإِذَا سَأَلْتُمُوهُنَّ مَتَاعًا فَاسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ ۚ ذَٰلِكُمْ أَطْهَرُ لِقُلُوبِكُمْ وَقُلُوبِهِنَّ",
        ref: "Surah Al-Ahzab (33:53) — those who hold it obligatory argue from this and from 33:59" },
      { en: "…and not to display their adornment except what appears of it.",
        ar: "وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا",
        ref: "Surah An-Nur (24:31) — those who hold it not obligatory argue that Ibn Abbas رضي الله عنهما explained 'what appears of it' as the face and the hands" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Held covering the face OBLIGATORY.",
        viewAr: "ذهب إلى وجوب ستر الوجه.",
        work: "Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Held covering the face OBLIGATORY, and wrote a treatise on it.",
        viewAr: "ذهب إلى وجوب ستر الوجه، وأفرد المسألة برسالة.",
        work: "Risalah al-Hijab; Majmu' Fatawa wa Rasa'il" },
      { name: "Al-Albani", nameAr: "الشيخ محمد ناصر الدين الألباني",
        view: "Held it NOT obligatory but recommended and better, and wrote a book arguing that the face and hands may be uncovered.",
        viewAr: "ذهب إلى أنه ليس بواجب بل مستحبٌّ وأفضل، وصنّف في جواز كشف الوجه والكفّين.",
        work: "Jilbab al-Mar'ah al-Muslimah" }
    ],
    difference: "Honest summary: within the four schools, the position that the face is not part of what must be covered is the more widely reported one — it is the well-known view of the Hanafis, Malikis and Shafi'is in the absence of temptation, while the Hanbali school leans the other way. Among the prominent scholars of the last century, Ibn Baz and Ibn Uthaymeen held it obligatory and al-Albani did not. So: this is a case where you follow the scholar you trust and you do not condemn the woman who follows the other. What NOBODY held is that the hair, neck, arms or legs may be uncovered.",
    differenceAr: "وخلاصةٌ منصفة: القول بأن الوجه ليس من العورة الواجب سترها هو الأشهر نقلًا في المذاهب الأربعة — وهو المعروف عند الحنفية والمالكية والشافعية عند أمن الفتنة، والمذهب الحنبلي يميل إلى خلافه. وأما علماء العصر فابن باز وابن عثيمين على الوجوب، والألباني على خلافه. فالمسألة مما يُقلَّد فيه من تثق بعلمه، ولا تُنكَر فيها على من أخذ بالقول الآخر. والذي لم يقل به أحدٌ قط: كشف الشعر أو العنق أو الذراعين أو الساقين.",
    verify: "Read each scholar in his own words — binbaz.org.sa, binothaimeen.net, and al-Albani's Jilbab al-Mar'ah al-Muslimah — rather than relying on this summary.",
    verifyAr: "اقرأ كلام كل عالمٍ بنصّه — binbaz.org.sa و binothaimeen.net وكتاب «جلباب المرأة المسلمة» للألباني — ولا تكتفِ بهذا التلخيص.",
    keys: ["niqab", "face veil", "cover face", "face", "hands", "burqa", "must i cover my face",
           "نقاب", "ستر الوجه", "كشف الوجه", "الوجه والكفين", "الخلاف في النقاب"]
  },
  {
    id: "fq-men-awrah",
    cat: "dress",
    title: "What a man must cover — and the garment below the ankle",
    titleAr: "عورة الرجل — وإسبال الثوب",
    question: "What does a man have to cover, and is it true that trousers below the ankle are a sin?",
    questionAr: "ما الذي يجب على الرجل ستره؟ وهل يصحّ أن ما نزل عن الكعبين إثم؟",
    answer: "A man's covering is a real obligation and not only a women's subject. And the ankle question is one where the scholars agree on the ruling but differ on how severe it is when there is no arrogance.",
    answerAr: "ستر الرجل واجبٌ حقيقيّ، وليست المسألة خاصةً بالنساء. وأما مسألة الكعبين فقد اتفقوا في أصل الحكم واختلفوا في شدّته عند انتفاء الخيلاء.",
    points: [
      { en: "At minimum a man covers from the navel to the knee, and the scholars treat the thigh as part of what is covered.",
        ar: "أقلّ ما يستره الرجل ما بين السرّة والركبة، والفخذ عند أهل العلم من العورة." },
      { en: "In prayer, covering the shoulders is additionally required by the scholars where a garment is available.",
        ar: "ويُطلب في الصلاة زيادةً على ذلك ستر المنكبين إذا وجد ما يستر بهما." },
      { en: "Clothing that is tight enough to describe the body applies to men too — the scholars did not make this a women-only condition.",
        ar: "والثوب الضيّق الواصف للجسد يشمل الرجال أيضًا، ولم يجعل أهل العلم هذا الشرط خاصًّا بالنساء." }
    ],
    evidence: [
      { en: "What is below the ankles of the lower garment is in the Fire.",
        ar: "مَا أَسْفَلَ مِنَ الْكَعْبَيْنِ مِنَ الْإِزَارِ فَفِي النَّارِ",
        ref: "Sahih al-Bukhari, Book of Dress, Hadith 5787 — Sahih" },
      { en: "Allah will not look on the Day of Resurrection at one who drags his garment out of arrogance.",
        ar: "لَا يَنْظُرُ اللَّهُ يَوْمَ الْقِيَامَةِ إِلَىٰ مَنْ جَرَّ ثَوْبَهُ خُيَلَاءَ",
        ref: "Sahih al-Bukhari, Book of Dress, Hadith 5788 — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Held that letting the garment fall below the ankles is forbidden in both cases — with arrogance it is the graver threat, and without arrogance it remains forbidden, because the two hadiths name two separate punishments.",
        viewAr: "ذهب إلى تحريم الإسبال في الحالين — فمع الخيلاء الوعيد أشدّ، وبدونها يبقى محرَّمًا؛ لأن الحديثين ذكرا عقوبتين متغايرتين.",
        work: "Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Took the same position and explained the two hadiths as two different levels of warning rather than one qualifying the other.",
        viewAr: "قال بمثل قوله، وبيّن أن الحديثين درجتان من الوعيد لا أن أحدهما يقيّد الآخر.",
        work: "Ash-Sharh al-Mumti'" }
    ],
    difference: "Some scholars, including a number of the earlier jurists, read the second hadith as restricting the first — i.e. the prohibition applies where there is arrogance, and without it the matter is disliked rather than forbidden. Ibn Baz and Ibn Uthaymeen rejected that reading. Both views are held by real scholars; the stricter one is the position of the two scholars this page cites most.",
    differenceAr: "وذهب بعض أهل العلم، ومنهم جماعةٌ من المتقدمين، إلى أن الحديث الثاني يقيّد الأول — فالتحريم عند الخيلاء، وبدونها كراهة لا تحريم. وردّ ابن باز وابن عثيمين هذا الحمل. والقولان قال بهما أهل علم، والأشدّ هو قول الشيخين المذكورين هنا.",
    verify: "binbaz.org.sa and binothaimeen.net.",
    verifyAr: "binbaz.org.sa و binothaimeen.net.",
    keys: ["men clothing", "awrah", "isbal", "below ankle", "trousers", "thigh", "what men cover", "men dress",
           "عورة الرجل", "الإسبال", "أسفل الكعبين", "لباس الرجل", "الفخذ"]
  },

  /* ================= PRAYER ================= */
  {
    id: "fq-missed-prayers",
    cat: "prayer",
    title: "Years of missed prayers — what the scholars say to do now",
    titleAr: "من ترك الصلاة سنين — ماذا يصنع الآن",
    question: "I did not pray for years. Do I have to make all of them up?",
    questionAr: "تركتُ الصلاة سنين، فهل يلزمني قضاؤها كلها؟",
    answer: "This is one of the most common questions asked of both Ibn Baz and Ibn Uthaymeen, and their answer is not the one most people expect — and it is a merciful one.",
    answerAr: "هذا من أكثر ما سُئل عنه الشيخان ابن باز وابن عثيمين، وجوابهما ليس ما يتوقعه أكثر الناس — وفيه رحمةٌ وسَعة.",
    points: [
      { en: "One who abandoned prayer entirely, deliberately, for a long period is not required to count up the years and repeat them. What is required is sincere repentance, and to begin praying now and keep to it.",
        ar: "من ترك الصلاة بالكلية عمدًا مدةً طويلة فلا يُكلَّف بإحصاء السنين وقضائها، وإنما عليه التوبة الصادقة والبدء بالمحافظة عليها من الآن." },
      { en: "This is different from missing a prayer by sleeping or forgetting — that one IS made up as soon as you remember, and the Prophet ﷺ did exactly that.",
        ar: "ويختلف هذا عمّن فاتته صلاةٌ بنومٍ أو نسيان، فتلك تُقضى متى ذكرها، وقد فعله النبي ﷺ." },
      { en: "Increasing voluntary prayer afterwards is encouraged, to make up in worth what cannot be made up in count.",
        ar: "ويُستحبّ الإكثار من النوافل بعد ذلك، جبرًا للنقص الذي لا يمكن قضاؤه عددًا." }
    ],
    evidence: [
      { en: "Whoever sleeps through a prayer or forgets it, let him pray it when he remembers it — there is no expiation for it but that.",
        ar: "مَنْ نَامَ عَنْ صَلَاةٍ أَوْ نَسِيَهَا فَلْيُصَلِّهَا إِذَا ذَكَرَهَا، لَا كَفَّارَةَ لَهَا إِلَّا ذَٰلِكَ",
        ref: "Sahih al-Bukhari, Book of the Times of Prayer, Hadith 597 — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Answered that the one who left prayer for years repents and starts afresh; he is not asked to make up what he abandoned.",
        viewAr: "أجاب بأن من ترك الصلاة سنين يتوب ويستأنف، ولا يُطالَب بقضاء ما ترك.",
        work: "Fatawa Nur 'ala ad-Darb; Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Same conclusion, with the reasoning that a worship tied to its appointed time, abandoned deliberately, is not accepted outside that time — so what is left is repentance.",
        viewAr: "انتهى إلى مثله، معلِّلًا بأن العبادة المؤقتة إذا تُركت عمدًا لم تُقبل خارج وقتها، فلم يبقَ إلا التوبة.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen" }
    ],
    difference: "A number of scholars did hold that the missed prayers must be made up. But the position above is that of Ibn Taymiyyah, Ibn Baz and Ibn Uthaymeen, and it is the one usually given today to someone returning to prayer. Nobody, on either view, says the answer is to give up because the number is too large.",
    differenceAr: "وذهب جماعةٌ من أهل العلم إلى وجوب القضاء. لكن القول المتقدم هو قول ابن تيمية وابن باز وابن عثيمين، وهو الذي يُفتى به غالبًا لمن رجع إلى الصلاة. ولم يقل أحدٌ على القولين إن الحلّ ترك الأمر لكثرة العدد.",
    verify: "binbaz.org.sa and binothaimeen.net.",
    verifyAr: "binbaz.org.sa و binothaimeen.net.",
    keys: ["missed prayers", "left prayer", "didnt pray", "years without praying", "make up prayers", "qada", "returning to prayer",
           "قضاء الصلوات", "ترك الصلاة", "تارك الصلاة", "فاتتني الصلاة", "العودة إلى الصلاة"]
  },
  {
    id: "fq-waswas",
    cat: "purity",
    title: "Constant doubt in wudu and prayer — the scholars' actual instruction",
    titleAr: "الوسواس في الوضوء والصلاة — ما أمر به أهل العلم",
    question: "I keep doubting whether my wudu broke, or how many rak'ahs I prayed. I repeat things again and again.",
    questionAr: "أشكّ دائمًا: هل انتقض وضوئي؟ وكم ركعةً صلّيت؟ وأعيد العمل مرارًا.",
    answer: "The scholars treated this as a distinct problem with a specific instruction, and the instruction is the opposite of what the sufferer wants to do: do not obey the doubt.",
    answerAr: "عالج أهل العلم هذا بوصفه مشكلةً مستقلة لها أمرٌ خاص، وهو ضدّ ما تدفع إليه النفس: ألّا تُطيع الشكّ.",
    points: [
      { en: "Certainty is not removed by doubt. If you were certain you had wudu and now merely doubt, you still have wudu.",
        ar: "اليقين لا يزول بالشك. فإن تيقّنت الوضوء ثم شككت، فأنت على وضوئك." },
      { en: "Do not leave the prayer for a doubt unless you are certain something happened — the Prophet ﷺ said not to leave until you hear a sound or find a smell.",
        ar: "ولا تنصرف من الصلاة لأجل الشك حتى تتيقّن، فقد قال النبي ﷺ: لا ينصرف حتى يسمع صوتًا أو يجد ريحًا." },
      { en: "If you doubt the number of rak'ahs, build on what you are sure of — the lesser number — and make the two prostrations of forgetfulness.",
        ar: "وإن شككت في عدد الركعات فابنِ على اليقين وهو الأقل، واسجد سجدتي السهو." },
      { en: "Both scholars said explicitly: ignore it, do not repeat, and know that repeating is what feeds it.",
        ar: "وصرّح الشيخان: أعرِض عنه ولا تُعِد، واعلم أن الإعادة هي التي تُغذّيه." }
    ],
    evidence: [
      { en: "He should not leave until he hears a sound or finds a smell.",
        ar: "لَا يَنْصَرِفْ حَتَّىٰ يَسْمَعَ صَوْتًا أَوْ يَجِدَ رِيحًا",
        ref: "Sahih al-Bukhari, Book of Wudu, Hadith 137 — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Gave this repeatedly and firmly: the one afflicted with waswas must turn away from it entirely and must not act on it, because acting on it strengthens it. He described obeying it as opening a door that does not close.",
        viewAr: "كرّر هذا وشدّد فيه: على الموسوَس أن يُعرض عنه بالكلية ولا يعمل به، فإن العمل به يقوّيه. ووصف طاعته بأنها فتح بابٍ لا يُغلق.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen; Fatawa Nur 'ala ad-Darb" },
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Instructed the same, and added seeking refuge from Shaytan and not giving the thought attention.",
        viewAr: "أمر بمثله، وزاد الاستعاذة من الشيطان وعدم الالتفات إلى الخاطر.",
        work: "Majmu' Fatawa Ibn Baz" }
    ],
    difference: null,
    differenceAr: null,
    verify: "binothaimeen.net and binbaz.org.sa. If the doubt is severe and constant, both the scholars' advice and ordinary sense point to also seeking medical help — obsessive doubt is a recognised condition.",
    verifyAr: "binothaimeen.net و binbaz.org.sa. وإذا اشتدّ الوسواس ولازم صاحبه، فمقتضى كلام أهل العلم والعقل معًا أن يُستعان بالطبيب أيضًا، فالوسواس القهري مرضٌ معروف.",
    keys: ["waswas", "doubt", "obsessive", "repeat wudu", "did i break wudu", "how many rakah", "doubts in prayer", "ocd",
           "وسواس", "شك", "الوسواس القهري", "إعادة الوضوء", "الشك في الصلاة", "عدد الركعات"]
  },

  /* ================= MONEY ================= */
  {
    id: "fq-bank-interest",
    cat: "money",
    title: "Bank interest, loans and what to do with money already taken",
    titleAr: "فوائد البنوك والقروض وما يُصنع بالمال المقبوض",
    question: "Is bank interest riba? And what do I do with interest that is already sitting in my account?",
    questionAr: "هل فوائد البنوك ربا؟ وماذا أصنع بفوائد قد دخلت حسابي؟",
    answer: "On the ruling itself the scholars are agreed. On the practical question — what to do with money already received — there is a clear and useful instruction that many people have never been told.",
    answerAr: "أما الحكم فمتفقٌ عليه بين أهل العلم. وأما السؤال العملي — ماذا يصنع بما قُبض فعلًا — ففيه توجيهٌ واضح نافع يجهله كثيرٌ من الناس.",
    points: [
      { en: "Fixed interest on a loan or a deposit is riba, and riba is among the sins the Quran singles out with a declaration of war.",
        ar: "الفائدة المحدَّدة على القرض أو الوديعة ربًا، والربا من الذنوب التي أُعلنت فيها الحرب في القرآن." },
      { en: "Money already taken as interest is not kept and not simply left with the bank. The scholars direct that it be got rid of by spending it in the public benefit — the poor, the needy, general welfare — without intending reward for it, because it was not yours lawfully to give.",
        ar: "والمال المقبوض من الفوائد لا يُبقى ولا يُترك للبنك، بل أمر أهل العلم بالتخلص منه بصرفه في وجوه النفع العام — الفقراء والمحتاجين والمصالح — من غير احتساب أجرٍ فيه، لأنه لم يكن ملكًا طيبًا له." },
      { en: "Do not leave it with the bank on the reasoning that taking it is worse: the scholars said leaving it strengthens the very thing you object to.",
        ar: "ولا يتركه للبنك بحجة أن أخذه أشدّ، فقد قالوا: تركه له إعانةٌ على ما أنكرتَه." }
    ],
    evidence: [
      { en: "Those who consume interest will not stand except as one stands who is being beaten by Satan into insanity… Allah has permitted trade and forbidden interest.",
        ar: "الَّذِينَ يَأْكُلُونَ الرِّبَا لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ الَّذِي يَتَخَبَّطُهُ الشَّيْطَانُ مِنَ الْمَسِّ ۚ … وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا",
        ref: "Surah Al-Baqarah (2:275)" },
      { en: "The Messenger of Allah ﷺ cursed the one who consumes interest, the one who pays it, the one who writes it down, and its two witnesses — and said: they are all the same.",
        ar: "لَعَنَ رَسُولُ اللَّهِ ﷺ آكِلَ الرِّبَا وَمُوكِلَهُ وَكَاتِبَهُ وَشَاهِدَيْهِ، وَقَالَ: هُمْ سَوَاءٌ",
        ref: "Sahih Muslim, Book of Transactions (Kitab al-Musaqah) — Sahih" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Ruled the fixed bank return to be riba, and directed that money already received be disposed of in charitable and public benefit without seeking reward for it.",
        viewAr: "أفتى بأن العائد البنكي المحدَّد ربًا، وأمر بصرف ما قُبض منه في وجوه البر والنفع العام من غير احتساب الأجر.",
        work: "Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Same ruling, and explicitly said not to leave it with the bank.",
        viewAr: "أفتى بمثله، ونصّ على ألّا يُترك للبنك.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen" },
      { name: "The Permanent Committee", nameAr: "اللجنة الدائمة للإفتاء",
        view: "Issued the same in numerous rulings.",
        viewAr: "أصدرت مثله في فتاوى كثيرة.",
        work: "Fatawa al-Lajnah ad-Da'imah" }
    ],
    difference: "A small number of modern voices have argued that regulated bank interest is not the riba of the Quran. That view is rejected by the overwhelming weight of scholars and by the standing fiqh academies, and it is not the position of any of the scholars cited on this page.",
    differenceAr: "وذهب نفرٌ قليل من المعاصرين إلى أن فوائد البنوك المنظَّمة ليست ربا القرآن، وهو قولٌ ردّه جمهور أهل العلم والمجامع الفقهية، وليس قول أحدٍ من العلماء المذكورين هنا.",
    verify: "binbaz.org.sa, binothaimeen.net, and the published rulings of the Permanent Committee.",
    verifyAr: "binbaz.org.sa و binothaimeen.net وفتاوى اللجنة الدائمة المنشورة.",
    keys: ["riba", "interest", "bank", "loan", "mortgage", "usury", "investment", "savings account", "haram money",
           "ربا", "فوائد", "البنك", "قرض", "فائدة بنكية", "مال حرام", "التخلص من الفوائد"]
  },
  {
    id: "fq-haram-job",
    cat: "money",
    title: "Working somewhere that deals in what is forbidden",
    titleAr: "العمل في مكانٍ يتعامل بالمحرَّم",
    question: "My job involves something forbidden — or my workplace sells it. Must I leave?",
    questionAr: "عملي فيه شيءٌ محرَّم، أو مكان عملي يبيع المحرَّم. فهل يلزمني تركه؟",
    answer: "The scholars separated this into two very different cases, and the distinction is the whole answer.",
    answerAr: "فرّق أهل العلم بين حالتين مختلفتين تمامًا، وعلى هذا التفريق يدور الجواب كلّه.",
    points: [
      { en: "If the forbidden thing IS the work — writing the interest contract, serving the alcohol, selling it, guarding it — the work itself is the sin, and it is left.",
        ar: "إن كان المحرَّم هو نفس العمل — ككتابة عقد الربا، أو سقي الخمر وبيعه وحراسته — فالعمل نفسه هو المعصية، فيُترك." },
      { en: "If the work is lawful in itself and the forbidden thing is a separate part of the business you have no hand in — a cleaner, a driver, an engineer — the scholars generally permitted it, while saying that leaving for something wholly clean is better.",
        ar: "وإن كان العمل في نفسه مباحًا والمحرَّم قسمٌ آخر لا يدك فيه — كعاملِ نظافة أو سائقٍ أو مهندس — فالغالب أنهم أجازوه، مع قولهم إن الانتقال إلى ما هو أطيب أفضل." },
      { en: "Do not leave a job on a hasty reading and then be unable to feed your family. Both scholars told questioners to look for the replacement first where the case is the second kind.",
        ar: "ولا تترك عملك بفهمٍ عجول ثم تعجز عن نفقة أهلك، فقد أرشد الشيخان السائلين في الحالة الثانية إلى التماس البديل أولًا." }
    ],
    evidence: [
      { en: "And cooperate in righteousness and piety, but do not cooperate in sin and transgression.",
        ar: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
        ref: "Surah Al-Ma'idah (5:2)" },
      { en: "Whoever gives up something for the sake of Allah, Allah replaces it with something better.",
        ar: "إِنَّكَ لَنْ تَدَعَ شَيْئًا لِلَّهِ عَزَّ وَجَلَّ إِلَّا بَدَّلَكَ اللَّهُ بِهِ مَا هُوَ خَيْرٌ لَكَ مِنْهُ",
        ref: "Musnad Ahmad — outside the two Sahihs; graded authentic by al-Albani" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Made the distinction above and forbade direct participation in the forbidden transaction, including writing and witnessing it.",
        viewAr: "فرّق هذا التفريق، وحرّم المباشرة للمعاملة المحرَّمة بالكتابة والشهادة عليها.",
        work: "Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Same, and stressed that a general contract of employment is judged by what the employee actually does.",
        viewAr: "قال بمثله، وشدّد على أن العقد العام يُحكم عليه بما يباشره الموظف فعلًا.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen" }
    ],
    difference: null,
    differenceAr: null,
    verify: "binbaz.org.sa and binothaimeen.net — and put your own case to a scholar, because this one turns entirely on the details of the job.",
    verifyAr: "binbaz.org.sa و binothaimeen.net — واعرض حالتك بعينها على أهل العلم، فالمسألة تدور على تفاصيل العمل.",
    keys: ["job", "work", "haram job", "salary", "employment", "working in bank", "selling alcohol", "quit my job",
           "العمل", "الوظيفة", "راتب", "العمل في البنك", "بيع الخمر", "ترك العمل", "كسب حرام"]
  },

  /* ================= FAMILY ================= */
  {
    id: "fq-parents",
    cat: "family",
    title: "Parents who ask you to disobey Allah — and parents who are harsh",
    titleAr: "الوالدان إذا أمرا بمعصية — والوالد القاسي",
    question: "My parents order me to do something wrong, or treat me badly. Where is the line?",
    questionAr: "والداي يأمرانني بمعصية، أو يسيئان إليّ. فأين الحدّ؟",
    answer: "The Quran itself gives the case where a parent presses a child to disbelief — and even there it does not permit cutting them off. The scholars built the answer on that verse.",
    answerAr: "القرآن نفسه ذكر حال الوالد يُجاهد ولده على الشرك، ومع ذلك لم يأذن بقطعه. وعلى هذه الآية بنى أهل العلم الجواب.",
    points: [
      { en: "No obedience to any creature in disobedience to the Creator. If they command a sin, you do not obey in that thing.",
        ar: "لا طاعة لمخلوقٍ في معصية الخالق. فإن أمرا بمعصيةٍ فلا طاعة في ذلك الأمر." },
      { en: "Refusing the command does not permit rudeness, raising your voice, or cutting them off. The verse commands accompanying them in this world with kindness in the very same breath.",
        ar: "وامتناعك عن الأمر لا يبيح الجفاء ولا رفع الصوت ولا القطيعة، فالآية أمرت بمصاحبتهما في الدنيا معروفًا في السياق نفسه." },
      { en: "Ibn Uthaymeen was asked about a harsh father and answered that the son's duty of kindness is not cancelled by the father's failing — the two are separate accounts.",
        ar: "وسُئل ابن عثيمين عن الأب القاسي فأجاب بأن برّ الابن لا يسقط بتقصير الأب، فهما حسابان منفصلان." }
    ],
    evidence: [
      { en: "And if they strive to make you associate with Me that of which you have no knowledge, do not obey them — but accompany them in this world with kindness.",
        ar: "وَإِن جَاهَدَاكَ عَلَىٰ أَن تُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ فَلَا تُطِعْهُمَا ۖ وَصَاحِبْهُمَا فِي الدُّنْيَا مَعْرُوفًا",
        ref: "Surah Luqman (31:15)" },
      { en: "Obedience is only in what is right.",
        ar: "إِنَّمَا الطَّاعَةُ فِي الْمَعْرُوفِ",
        ref: "Sahih al-Bukhari, Book of Holding Fast to the Book, Hadith 7257 — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Answered many such questions with the same frame: refuse the sin, keep the kindness, and do not let the refusal become an excuse for harshness.",
        viewAr: "أجاب عن كثيرٍ من هذا بالقاعدة نفسها: امتنع عن المعصية، وأبقِ البرّ، ولا تجعل الامتناع ذريعةً للجفاء.",
        work: "Majmu' Fatawa Ibn Baz; Fatawa Nur 'ala ad-Darb" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Stressed that a parent's wrongdoing does not release the child from the command of kindness, and that this is one of the heaviest tests a person is given.",
        viewAr: "شدّد على أن إساءة الوالد لا تُسقط أمر الله بالبرّ، وأن هذا من أثقل ما يُبتلى به المرء.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen" }
    ],
    difference: null,
    differenceAr: null,
    verify: "binbaz.org.sa and binothaimeen.net. Where there is real abuse or danger, this is not a fatwa question alone — protect yourself and seek help.",
    verifyAr: "binbaz.org.sa و binothaimeen.net. وإذا كان هناك أذًى حقيقيّ أو خطر فليست المسألة فتوى فحسب — احفظ نفسك واطلب المعونة.",
    keys: ["parents", "mother", "father", "obey parents", "disobey", "harsh father", "family problem", "birr",
           "الوالدين", "الأم", "الأب", "طاعة الوالدين", "عقوق", "برّ الوالدين", "الأب القاسي"]
  },

  /* ================= CONDUCT ================= */
  {
    id: "fq-music",
    cat: "conduct",
    title: "Music — the ruling, and the honest state of the disagreement",
    titleAr: "الموسيقى — الحكم وبيان الخلاف على وجهه",
    question: "Is listening to music forbidden?",
    questionAr: "هل سماع الموسيقى حرام؟",
    answer: "This is a question where being honest matters more than being brief. The majority position among the scholars, and the position of both scholars this page relies on, is that instrumental music is forbidden — but a real minority of scholars disagreed, and pretending otherwise helps nobody.",
    answerAr: "هذه مسألةٌ الإنصاف فيها أولى من الاختصار. فقول الجمهور، وهو قول الشيخين المعتمدين في هذه الصفحة، تحريم المعازف — وخالف في ذلك جماعةٌ من أهل العلم، وإخفاء ذلك لا ينفع أحدًا.",
    points: [
      { en: "The duff (a simple frame drum) is excepted by agreement for weddings and Eid, on the strength of narrations in the two Sahihs.",
        ar: "الدفّ مستثنًى بالاتفاق في العرس والعيد، لما ثبت في الصحيحين." },
      { en: "Singing without instruments, in words that carry nothing forbidden, is a separate question from instrumental music and is treated far more leniently.",
        ar: "والغناء المجرَّد عن الآلات بكلامٍ لا محذور فيه مسألةٌ أخرى، والأمر فيها أوسع." },
      { en: "Neither scholar made this a matter for condemning other Muslims — it is a question of following the evidence you are convinced by.",
        ar: "ولم يجعل الشيخان هذا بابًا للتشنيع على المسلمين، وإنما هو اتّباعٌ للدليل الذي يطمئن إليه المرء." }
    ],
    evidence: [
      { en: "There will be among my nation people who regard as lawful fornication, silk, wine and musical instruments.",
        ar: "لَيَكُونَنَّ مِنْ أُمَّتِي أَقْوَامٌ يَسْتَحِلُّونَ الْحِرَ وَالْحَرِيرَ وَالْخَمْرَ وَالْمَعَازِفَ",
        ref: "Sahih al-Bukhari, Book of Drinks, Hadith 5590 — Sahih. This is the central proof of those who forbid it." },
      { en: "And of the people is he who buys the diversion of speech to mislead from the way of Allah.",
        ar: "وَمِنَ النَّاسِ مَن يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَن سَبِيلِ اللَّهِ",
        ref: "Surah Luqman (31:6) — Ibn Mas'ud رضي الله عنه explained 'the diversion of speech' as singing; that explanation is from a companion, not a text of the Quran itself" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Held instrumental music forbidden, citing the hadith of al-Bukhari above.",
        viewAr: "ذهب إلى تحريم المعازف مستدلًّا بحديث البخاري المتقدم.",
        work: "Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Held the same, and answered the objection that the hadith's chain is weak by pointing out that al-Bukhari included it in his Sahih.",
        viewAr: "قال بمثله، وأجاب عن دعوى الانقطاع في الحديث بأن البخاري أخرجه في صحيحه.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen" }
    ],
    difference: "The disagreement is real. Some scholars — Ibn Hazm most prominently, and a number of contemporaries — held instrumental music permissible, arguing over the chain of the Bukhari narration and over what the companion's explanation of Luqman 31:6 establishes. Weighing it honestly: the overwhelming majority of scholars across the four schools held it forbidden, and that is the stronger and better-supported position. But someone who follows the other view is following scholars, not following nothing.",
    differenceAr: "والخلاف حقيقيّ. فذهب بعض أهل العلم — وأشهرهم ابن حزم، وجماعةٌ من المعاصرين — إلى الإباحة، ونازعوا في إسناد حديث البخاري وفي دلالة تفسير الصحابي لآية لقمان. والإنصاف: أن جمهور أهل العلم في المذاهب الأربعة على التحريم، وهو الأقوى دليلًا. ومن أخذ بالقول الآخر فقد قلّد أهل علمٍ لا هوًى مجردًا.",
    verify: "binbaz.org.sa and binothaimeen.net for the majority position; read Ibn Hazm's own argument if you want the other side in its own words.",
    verifyAr: "binbaz.org.sa و binothaimeen.net لقول الجمهور؛ ومن أراد القول الآخر بنصّه فليقرأ كلام ابن حزم.",
    keys: ["music", "songs", "singing", "instruments", "listen to music", "duff", "nasheed",
           "موسيقى", "غناء", "أغاني", "المعازف", "الدف", "سماع الموسيقى"]
  },
  {
    id: "fq-backbiting",
    cat: "conduct",
    title: "Backbiting — including the cases where it is allowed",
    titleAr: "الغيبة — ومواضع الرخصة فيها",
    question: "What exactly counts as backbiting, and is it ever allowed to speak about someone?",
    questionAr: "ما الذي يُعدّ غيبةً بالضبط؟ وهل يجوز الكلام في أحدٍ أحيانًا؟",
    answer: "The Prophet ﷺ defined it himself in one sentence, and the scholars — an-Nawawi most usefully — listed the cases that fall outside it. Most people know the prohibition and not the exceptions, which leaves them either backbiting or unable to warn anyone about anything.",
    answerAr: "عرّفها النبي ﷺ بجملةٍ واحدة، وذكر أهل العلم — والنووي أنفعهم في ذلك — المواضع الخارجة عنها. وأكثر الناس يعرف التحريم ولا يعرف الاستثناءات، فيقع في الغيبة أو يعجز عن التحذير من شيء.",
    points: [
      { en: "The definition: mentioning your brother with what he dislikes. If it is true it is backbiting; if it is false it is slander, which is worse.",
        ar: "التعريف: ذكرك أخاك بما يكره. فإن كان فيه فقد اغتبته، وإن لم يكن فيه فقد بهتّه، وهو أشدّ." },
      { en: "Allowed: complaining of a wrong to someone able to remove it — to a judge, an authority, a parent, anyone who can actually stop it.",
        ar: "ويجوز: التظلّم إلى من يقدر على رفع الظلم — قاضٍ أو ذي سلطان أو والدٍ أو كل من يستطيع المنع." },
      { en: "Allowed: warning a Muslim of real harm — someone asking your advice about a business partner or a marriage proposal is owed the truth.",
        ar: "ويجوز: تحذير المسلم من ضررٍ حقيقي — فمن استشارك في شريكٍ أو خاطبٍ فله عليك النصح بالصدق." },
      { en: "Allowed: asking for a ruling, describing the situation as it is; and identifying someone by a description he is already known by, without intending to belittle him.",
        ar: "ويجوز: الاستفتاء بذكر الحال على وجهها؛ والتعريف بمن اشتُهر بوصفٍ من غير قصد التنقّص." }
    ],
    evidence: [
      { en: "And do not backbite one another. Would one of you like to eat the flesh of his dead brother? You would hate it.",
        ar: "وَلَا يَغْتَب بَّعْضُكُم بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ",
        ref: "Surah Al-Hujurat (49:12)" },
      { en: "Do you know what backbiting is? — Allah and His Messenger know best. — Your mentioning your brother with what he dislikes.",
        ar: "أَتَدْرُونَ مَا الْغِيبَةُ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ",
        ref: "Sahih Muslim, Book of Righteousness and Good Manners — Sahih" }
    ],
    scholars: [
      { name: "An-Nawawi", nameAr: "الإمام النووي",
        view: "Gathered the permitted cases into the list scholars have used ever since — redress of a wrong, seeking help to change a wrong, seeking a ruling, warning Muslims of harm, one open about his sin, and identification.",
        viewAr: "جمع مواضع الرخصة في السرد الذي تبعه عليه أهل العلم — التظلّم، والاستعانة على تغيير المنكر، والاستفتاء، وتحذير المسلمين، والمجاهر بفسقه، والتعريف.",
        work: "Riyad as-Salihin; Al-Adhkar" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Taught the same list in his commentary on Riyad as-Salihin and warned against using 'warning people' as a cover for enjoying the talk.",
        viewAr: "شرح هذا السرد في شرحه لرياض الصالحين، وحذّر من اتخاذ «التحذير» ذريعةً للتلذّذ بالكلام في الناس.",
        work: "Sharh Riyad as-Salihin" }
    ],
    difference: null,
    differenceAr: null,
    verify: "An-Nawawi's Riyad as-Salihin, the chapter on forbidden speech; and binothaimeen.net.",
    verifyAr: "رياض الصالحين للنووي، باب تحريم الغيبة؛ و binothaimeen.net.",
    keys: ["backbiting", "gheebah", "gossip", "talking about people", "slander", "warn someone", "is it backbiting",
           "غيبة", "نميمة", "الكلام في الناس", "بهتان", "تحذير", "هل هذه غيبة"]
  },

  /* ================= REPENTANCE ================= */
  {
    id: "fq-repentance",
    cat: "repent",
    title: "Repenting from a major sin — the conditions, and the sin repeated",
    titleAr: "التوبة من الكبيرة — شروطها وحال من عاد",
    question: "I committed a great sin. Is repentance accepted? And what if I fall into it again?",
    questionAr: "وقعتُ في كبيرة، فهل تُقبل التوبة؟ وماذا إن عدتُ إليها؟",
    answer: "The scholars set out the conditions plainly, and they answered the question people are actually afraid to ask — what happens when you repent and then do it again.",
    answerAr: "ذكر أهل العلم الشروط بوضوح، وأجابوا عن السؤال الذي يخاف الناس من طرحه — ماذا لو تاب ثم عاد.",
    points: [
      { en: "Stop the sin now. Repentance while continuing in it is not repentance.",
        ar: "الإقلاع عنها الآن، فالتوبة مع الإصرار ليست توبة." },
      { en: "Regret what happened. This is the part that cannot be faked.",
        ar: "الندم على ما مضى، وهو الذي لا يُتصنَّع." },
      { en: "Resolve not to return to it.",
        ar: "العزم على ألّا يعود إليها." },
      { en: "If it involved someone else's right — money, reputation, an injury — return it or seek their pardon. This condition is the one most often skipped.",
        ar: "وإن كانت في حقّ آدميّ — مالٍ أو عِرضٍ أو أذًى — فردّ الحقّ أو استحلال صاحبه. وهذا الشرط أكثر ما يُغفل." },
      { en: "And if you fall again: you repent again. Ibn Baz and Ibn Uthaymeen both answered that a repeated fall does not close the door, and that the one who repents sincerely each time is not among those who insist on sin.",
        ar: "فإن عدتَ فتُب ثانيةً. وقد أجاب ابن باز وابن عثيمين بأن العَوْد لا يُغلق الباب، وأن من تاب صادقًا كل مرّة ليس من المصرّين." }
    ],
    evidence: [
      { en: "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed Allah forgives all sins.",
        ar: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
        ref: "Surah Az-Zumar (39:53)" },
      { en: "A servant committed a sin and said: my Lord, forgive me my sin. His Lord said: My servant knew that he has a Lord who forgives sin and takes for it — I have forgiven My servant. (Repeated three times in the hadith.)",
        ar: "أَذْنَبَ عَبْدٌ ذَنْبًا فَقَالَ: رَبِّ اغْفِرْ لِي ذَنْبِي. فَقَالَ: عَلِمَ عَبْدِي أَنَّ لَهُ رَبًّا يَغْفِرُ الذَّنْبَ وَيَأْخُذُ بِهِ، غَفَرْتُ لِعَبْدِي",
        ref: "Sahih al-Bukhari, Book of Tawhid, Hadith 7507 — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Listed the conditions and repeatedly told questioners frightened by relapse that the door of repentance stays open as long as the soul has not reached the throat.",
        viewAr: "سرد الشروط، وكرّر لمن خاف من العَوْد أن باب التوبة مفتوحٌ ما لم تبلغ الروحُ الحلقوم.",
        work: "Majmu' Fatawa Ibn Baz; Fatawa Nur 'ala ad-Darb" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "Same, and added that the fourth condition — returning people's rights — is what many who consider themselves repentant have never done.",
        viewAr: "قال بمثله، وزاد أن الشرط الرابع — ردّ الحقوق — لم يفعله كثيرٌ ممن يحسب نفسه تائبًا.",
        work: "Majmu' Fatawa wa Rasa'il Ibn Uthaymeen" }
    ],
    difference: null,
    differenceAr: null,
    verify: "binbaz.org.sa and binothaimeen.net.",
    verifyAr: "binbaz.org.sa و binothaimeen.net.",
    keys: ["repentance", "tawbah", "major sin", "forgive", "i sinned", "keep sinning", "relapse", "despair",
           "توبة", "كبيرة", "ذنب", "أذنبت", "الإصرار", "القنوط", "المغفرة"]
  },

  /* ================= PRAYER ================= */
  {
    id: "fq-travel-prayer",
    cat: "prayer",
    title: "Shortening and combining the prayer when travelling",
    titleAr: "قصر الصلاة وجمعها في السفر",
    question: "I travel often for work. When may I shorten the prayer, when may I join two together, and for how long does that last?",
    questionAr: "أسافر كثيرًا لعملي. متى أقصر الصلاة؟ ومتى أجمع بين صلاتين؟ وإلى متى يبقى ذلك؟",
    answer: "Shortening the four-rak'ah prayers to two on a journey is established beyond dispute and is the practice the Prophet ﷺ kept to. Joining two prayers together is also established, but the scholars set narrower conditions for it than for shortening — the two are not the same question and should not be treated as one.",
    answerAr: "قصر الرباعية إلى ركعتين في السفر ثابتٌ لا نزاع فيه، وهو الذي لزمه النبي ﷺ. وأما الجمع بين الصلاتين فثابتٌ أيضًا، لكنّ أهل العلم ضيّقوا شرطه أكثر من القصر — وهما مسألتان لا مسألة واحدة، فلا يُخلط بينهما.",
    points: [
      { en: "Shortening applies only to the four-rak'ah prayers: Dhuhr, Asr and Isha. Maghrib stays three and Fajr stays two.",
        ar: "القصر إنما هو في الرباعية: الظهر والعصر والعشاء. وأما المغرب فثلاث والفجر ركعتان، لا تُقصران." },
      { en: "Shortening begins once you have left the built-up area of your town, not when you begin packing.",
        ar: "ويبدأ القصر إذا فارقتَ عمران بلدك، لا من حين تتجهّز للسفر." },
      { en: "Joining is a concession for need — travelling on, difficulty stopping, rain, illness. Shortening does not need a reason beyond the journey itself; joining does.",
        ar: "والجمع رخصةٌ للحاجة: كالسير ومشقّة النزول والمطر والمرض. فالقصر لا يحتاج إلى سببٍ زائدٍ على السفر، والجمع يحتاج." },
      { en: "You pray behind a resident imam in full — if you join a local congregation, you complete four with them.",
        ar: "وإذا ائتممتَ بمقيمٍ أتممتَ معه أربعًا." }
    ],
    evidence: [
      { en: "\"And when you travel throughout the land, there is no blame upon you for shortening the prayer.\"",
        ar: "﴿وَإِذَا ضَرَبْتُمْ فِي الْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا مِنَ الصَّلَاةِ﴾",
        ref: "Surah An-Nisa (4:101)" },
      { en: "Ibn Umar said: I accompanied the Prophet ﷺ and he did not pray more than two rak'ahs on a journey, and Abu Bakr, Umar and Uthman likewise.",
        ar: "قال ابن عمر: صحبتُ النبي ﷺ فكان لا يزيد في السفر على ركعتين، وأبو بكر وعمر وعثمان كذلك.",
        ref: "Sahih al-Bukhari, Book of Shortening the Prayer, Hadith 1102 — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Held that a traveller shortens as long as he does not intend to settle, and that joining is for need rather than as a routine — a man who has stopped and is comfortable should pray each prayer in its time.",
        viewAr: "يرى أنّ المسافر يقصر ما لم ينوِ الإقامة، وأنّ الجمع للحاجة لا على وجه الاعتياد، فمن نزل واستراح صلّى كلّ صلاةٍ في وقتها.",
        work: "Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "The same, and he stressed the distinction people most often miss: shortening is the stronger and easier of the two, joining is the narrower.",
        viewAr: "على مثل قوله، وشدّد على الفرق الذي يغفل عنه أكثر الناس: أنّ القصر أوسع وأيسر، والجمع أضيق.",
        work: "Ash-Sharh al-Mumti'" }
    ],
    difference: "How long the concession lasts is a genuine and old disagreement. Many scholars held that if you intend to stay more than four days you pray in full, and this is the position of the majority including Ibn Baz and Ibn Uthaymeen. Ibn Taymiyyah held that a traveller keeps shortening as long as he has not taken the place as a residence, even for a long stay — and a number of contemporary scholars followed him in that. The weight of the scholars is with the first, but the second is a serious position held by a major imam, and someone acting on it is not acting without evidence.",
    differenceAr: "ومدّة بقاء الرخصة خلافٌ حقيقيٌّ قديم. فذهب كثيرٌ من أهل العلم إلى أنّ من نوى إقامة أكثر من أربعة أيام أتمّ، وهو قول الجمهور، وعليه ابن باز وابن عثيمين. وذهب ابن تيمية إلى أنّ المسافر يقصر ما لم يتّخذ البلد وطنًا وإن طالت إقامته، وتبعه على ذلك عددٌ من المعاصرين. والأكثرون على الأول، والثاني قولٌ معتبرٌ لإمامٍ كبير، ومن عمل به لم يعمل بلا دليل.",
    verify: "Read the wording of each scholar at binbaz.org.sa and binothaimeen.net, and ask someone who knows your circumstances.",
    verifyAr: "راجع كلام كلّ عالمٍ بنصّه في binbaz.org.sa و binothaimeen.net، واسأل من يعرف حالك.",
    keys: ["travel", "travelling", "journey", "shorten", "qasr", "combine", "join prayers", "jam", "work trip", "flight", "abroad",
           "السفر", "المسافر", "القصر", "الجمع", "جمع الصلاتين", "قصر الصلاة", "الرحلة", "الطائرة"]
  },

  /* ================= PURITY ================= */
  {
    id: "fq-wiping-socks",
    cat: "purity",
    title: "Wiping over socks instead of washing the feet",
    titleAr: "المسح على الجوربين بدل غسل القدمين",
    question: "Can I wipe over my socks in wudu instead of taking them off? Does it have to be leather?",
    questionAr: "هل أمسح على جوربيّ في الوضوء بدل خلعهما؟ وهل يُشترط أن يكونا من جلد؟",
    answer: "Wiping over the khuff — a leather foot covering — is established by so many narrations that scholars have described it as effectively beyond dispute. The question people actually have is about ordinary cloth socks, and there the scholars differ.",
    answerAr: "المسح على الخفّ — وهو ما يُلبس في القدم من جلد — ثابتٌ بأحاديث كثيرةٍ حتى وصفه أهل العلم بأنه ممّا لا يكاد يُنازَع فيه. وإنما سؤال الناس عن الجورب المعتاد من القطن ونحوه، وفيه خلاف.",
    points: [
      { en: "You must have put them on while in a state of wudu — you cannot wipe over socks you pulled on without wudu.",
        ar: "يُشترط أن تكون لبستهما على طهارة، فلا يمسح من لبسهما على غير وضوء." },
      { en: "The time limit is one day and night for a resident, and three days and nights for a traveller, counted from the first wipe.",
        ar: "والمدّة يومٌ وليلةٌ للمقيم، وثلاثة أيامٍ بلياليهنّ للمسافر، تُحسب من أول مسحة." },
      { en: "You wipe the TOP of the foot, not the sole. Ali رضي الله عنه said that if the religion were by opinion, the underside would be more deserving of wiping — but he saw the Prophet ﷺ wipe the top.",
        ar: "ويُمسح ظاهر القدم لا أسفلها. قال عليٌّ رضي الله عنه: لو كان الدين بالرأي لكان أسفل الخفّ أولى بالمسح من أعلاه، ولكنه رأى النبي ﷺ يمسح ظاهرهما." },
      { en: "Wiping is broken by anything that breaks wudu in the normal way, and by taking the socks off.",
        ar: "وينتقض المسح بما ينقض الوضوء، وبخلع الجوربين." }
    ],
    evidence: [
      { en: "Al-Mughirah ibn Shu'bah said: I was with the Prophet ﷺ and I bent to remove his khuffs, and he said: \"Leave them — I put them on in a state of purity\" — and he wiped over them.",
        ar: "عن المغيرة بن شعبة قال: كنت مع النبي ﷺ فأهويتُ لأنزع خفّيه فقال: «دعهما فإني أدخلتهما طاهرتين» — فمسح عليهما.",
        ref: "Sahih al-Bukhari, Book of Wudu, Hadith 206; also Muslim — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Permitted wiping over ordinary socks provided they are thick enough to cover the foot and stay on it, and rejected the condition that they be leather.",
        viewAr: "أجاز المسح على الجورب المعتاد إذا كان صفيقًا يستر القدم ويثبت عليها، ولم يشترط أن يكون من جلد.",
        work: "Majmu' Fatawa Ibn Baz" },
      { name: "Ibn Uthaymeen", nameAr: "الشيخ محمد بن صالح العثيمين",
        view: "The same, and added that what matters is that the sock actually covers the part of the foot that must be washed and is not so thin that the skin shows through.",
        viewAr: "على مثل قوله، وزاد أنّ المعتبر أن يستر الجورب موضع الفرض حقيقةً وألّا يكون رقيقًا تُرى البشرة من ورائه.",
        work: "Ash-Sharh al-Mumti'" },
      { name: "Al-Albani", nameAr: "الشيخ محمد ناصر الدين الألباني",
        view: "Held the same permission and gathered the narrations reported from the companions who wiped over cloth socks.",
        viewAr: "قال بالجواز نفسه، وجمع ما ورد عن الصحابة من المسح على الجوارب.",
        work: "Silsilat al-Ahadith as-Sahihah" }
    ],
    difference: "Some earlier scholars restricted wiping to leather khuffs and required washing the feet with anything else, and that view is held by scholars within several of the schools. Against it, wiping over cloth socks is reported from a number of the companions, and the contemporary scholars named above permitted it. The weight is with permitting it on condition of thickness, but a person who chooses to wash the feet to be safe has done nothing wrong and has taken the more cautious road.",
    differenceAr: "وقصر بعض المتقدّمين المسح على الخفّ الجلديّ وأوجبوا الغسل فيما سواه، وبه قال جماعةٌ داخل عدّة مذاهب. ويقابله أنّ المسح على الجوارب مرويٌّ عن عددٍ من الصحابة، وأفتى بجوازه المعاصرون المذكورون. والأكثرون على الجواز بشرط الصفاقة، ومن اختار غسل القدمين احتياطًا فلم يأتِ منكرًا، وقد أخذ بالأحوط.",
    verify: "binbaz.org.sa and binothaimeen.net.",
    verifyAr: "binbaz.org.sa و binothaimeen.net.",
    keys: ["socks", "khuff", "wipe", "wiping", "feet", "wudu", "ablution", "leather", "masah",
           "الجوربين", "الخف", "المسح", "مسح على الجوارب", "القدمين", "الوضوء", "الطهارة"]
  },

  /* ================= FAMILY ================= */
  {
    id: "fq-wali-marriage",
    cat: "family",
    title: "Marriage without the woman's guardian — where the schools genuinely part",
    titleAr: "الزواج بغير وليّ — موضع افتراق المذاهب حقًّا",
    question: "Is a marriage valid if the woman arranges it herself, without her father or another guardian?",
    questionAr: "هل يصحّ النكاح إذا زوّجت المرأة نفسها بغير أبيها أو وليّها؟",
    answer: "This is one of the clearest and oldest differences in fiqh, and it should be described as what it is rather than presented as settled. Three of the four schools require a guardian for the marriage to be valid. The Hanafi school holds that an adult woman of sound mind may contract her own marriage. Both positions have been held by major scholars for over a thousand years.",
    answerAr: "هذه من أظهر مسائل الخلاف وأقدمها في الفقه، وحقُّها أن تُوصف على حقيقتها لا أن تُعرض مسألةً مجمَعًا عليها. فثلاثةٌ من المذاهب الأربعة تشترط الوليّ لصحّة العقد، والحنفيّة يرون أنّ البالغة العاقلة تعقد على نفسها. وكلا القولين قال به أئمّةٌ كبارٌ منذ أكثر من ألف سنة.",
    points: [
      { en: "Everyone agrees the woman's own consent is required. A marriage she was forced into is not valid by anyone's reckoning — the Prophet ﷺ annulled such a marriage when a woman came and complained.",
        ar: "والجميع متفقون على اشتراط رضاها. فالنكاح بالإكراه باطلٌ عند الجميع، وقد ردّ النبي ﷺ نكاح امرأةٍ جاءت تشكو أنّ أباها زوّجها كارهة." },
      { en: "Everyone agrees a guardian is better and safer, including the Hanafis — the dispute is about validity, not about what is preferable.",
        ar: "والجميع متفقون على أنّ الوليّ أفضل وأحوط، ومنهم الحنفيّة — وإنما الخلاف في الصحّة لا في الأولويّة." },
      { en: "Everyone agrees that if a guardian refuses without a valid reason, he loses that right and it passes to the next guardian or to the judge. A father cannot block his daughter's marriage out of preference.",
        ar: "والجميع متفقون على أنّ الوليّ إذا عضلها بغير سببٍ معتبرٍ سقطت ولايته وانتقلت إلى من يليه أو إلى القاضي. فليس للأب أن يمنع ابنتها لهوًى." },
      { en: "In practice, the law of the country you marry in also decides what is registered — and a marriage nobody can prove exposes the woman most.",
        ar: "وفي الواقع فإنّ قانون البلد الذي يقع فيه العقد يحكم في التوثيق، والنكاح الذي لا يُستطاع إثباته أكثر ما يضرّ المرأة." }
    ],
    evidence: [
      { en: "\"There is no marriage without a guardian.\"",
        ar: "«لَا نِكَاحَ إِلَّا بِوَلِيٍّ»",
        ref: "Sunan Abu Dawud, Book of Marriage, Hadith 2085 and elsewhere — OUTSIDE the two Sahihs; graded Sahih by al-Albani. This is the primary evidence of the majority." },
      { en: "\"Any woman who marries without the permission of her guardian, her marriage is void\" — repeated three times.",
        ar: "«أَيُّمَا امْرَأَةٍ نَكَحَتْ بِغَيْرِ إِذْنِ وَلِيِّهَا فَنِكَاحُهَا بَاطِلٌ» — قالها ثلاثًا",
        ref: "Sunan Abu Dawud, Book of Marriage, Hadith 2083; at-Tirmidhi — OUTSIDE the two Sahihs; graded Sahih by al-Albani" },
      { en: "\"A previously married woman has more right over herself than her guardian, and a virgin is asked permission for herself, and her permission is her silence.\"",
        ar: "«الثَّيِّبُ أَحَقُّ بِنَفْسِهَا مِنْ وَلِيِّهَا، وَالْبِكْرُ تُسْتَأْذَنُ فِي نَفْسِهَا، وَإِذْنُهَا صُمَاتُهَا»",
        ref: "Sahih Muslim, Book of Marriage — Sahih. This is among the evidences the Hanafis rely on." }
    ],
    scholars: [
      { name: "Ash-Shafi'i, Malik and Ahmad", nameAr: "الشافعي ومالك وأحمد",
        view: "A guardian is a condition of validity. Without him the contract does not stand, however willing the woman.",
        viewAr: "الوليّ شرطٌ في الصحّة، ولا ينعقد بدونه وإن رضيت المرأة.",
        work: "Al-Umm; Al-Mudawwanah; Masa'il Ahmad" },
      { name: "Abu Hanifah", nameAr: "الإمام أبو حنيفة",
        view: "An adult woman of sound mind may contract her own marriage to a suitable husband; the guardian's role is advisory and protective rather than a condition of validity.",
        viewAr: "للبالغة العاقلة أن تعقد على نفسها من كفء، وولاية الوليّ نظرٌ وصيانةٌ لا شرط صحّة.",
        work: "The Hanafi school, as recorded by his students" },
      { name: "Ibn Baz and Ibn Uthaymeen", nameAr: "ابن باز وابن عثيمين",
        view: "Both took the majority position that the guardian is a condition, and both stressed that a guardian who obstructs without a valid reason forfeits the right.",
        viewAr: "أخذا بقول الجمهور أنّ الوليّ شرط، وشدّدا على أنّ العاضل بغير حقٍّ تسقط ولايته.",
        work: "Majmu' Fatawa Ibn Baz; Ash-Sharh al-Mumti'" }
    ],
    difference: "The weight of the scholars is clearly with requiring a guardian — three of the four schools and the two contemporary scholars most cited on this site. The Hanafi position is not a fringe opinion and is followed by a very large number of Muslims. What must NOT be done is to tell someone their existing marriage is invalid: that is a judgement about a specific contract, and it belongs to a scholar or a court that knows the details, not to a website.",
    differenceAr: "الأكثرون على اشتراط الوليّ بوضوح: ثلاثةٌ من المذاهب الأربعة، والشيخان المعاصران الأكثر نقلًا في هذا الموقع. وقول الحنفيّة ليس قولًا شاذًّا، وعليه خلقٌ كثيرٌ من المسلمين. والذي لا يجوز أن يُصنع أن يُقال لأحدٍ إنّ نكاحه القائم باطل، فذلك حكمٌ على عقدٍ بعينه، وهو إلى عالمٍ أو قاضٍ يعرف التفاصيل، لا إلى موقعٍ على الشبكة.",
    verify: "This is a question for a scholar who knows your situation and your country's law — not for a summary. binbaz.org.sa and binothaimeen.net for the wording of the positions above.",
    verifyAr: "هذه مسألةٌ تُسأل عنها عالمًا يعرف حالك وقانون بلدك، لا يُكتفى فيها بملخّص. وراجع نصّ الأقوال المتقدّمة في binbaz.org.sa و binothaimeen.net.",
    keys: ["wali", "guardian", "marriage", "nikah", "father refuses", "marry without", "consent", "forced marriage", "revert",
           "الولي", "الزواج", "النكاح", "بغير ولي", "العضل", "الإكراه", "رضا المرأة", "زوجت نفسها"]
  },

  /* ================= REPENTANCE ================= */
  {
    id: "fq-despair",
    cat: "repent",
    title: "\"My sins are too big to be forgiven\" — the one thing the scholars answer with one voice",
    titleAr: "«ذنوبي أعظم من أن تُغفر» — وهذا ممّا يجيب عنه أهل العلم بقولٍ واحد",
    question: "I have done things I cannot say out loud. Is there any point in repenting? I feel it is too late for me.",
    questionAr: "فعلتُ ما لا أستطيع أن أذكره. فهل للتوبة معنى؟ أشعر أنّ الأوان قد فات عليّ.",
    answer: "On almost every page of this section the scholars are shown disagreeing. On this one they do not. Despairing of Allah's mercy is not humility and it is not the fear of a righteous person — the Quran names it as a characteristic of those who have gone astray, and the texts about the size of Allah's forgiveness are among the most emphatic in the entire religion.",
    answerAr: "في كلّ صفحةٍ من هذا الباب تقريبًا يُعرض اختلاف أهل العلم، وفي هذه لا يختلفون. فاليأس من رحمة الله ليس تواضعًا ولا هو خوف الصالحين، بل سمّاه القرآن من صفات الضالّين، ونصوص سَعة المغفرة من أشدّ ما في الدين توكيدًا.",
    points: [
      { en: "The verse is addressed to those who went furthest, and it uses the word ALL: \"Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed Allah forgives all sins.\"",
        ar: "والآية خطابٌ لمن بلغ أقصى ما يُبلغ، وفيها لفظ العموم: ﴿قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا﴾." },
      { en: "The repentance is between you and Allah. There is no requirement in Islam to confess a past sin to any human being, and the scholars are agreed that concealing what Allah concealed is what should be done.",
        ar: "والتوبة بينك وبين الله. وليس في الإسلام أن يُقرّ المرء بذنبٍ ماضٍ لبشر، واتفق أهل العلم على أنّ الستر بما ستر الله هو المطلوب." },
      { en: "It does not require a feeling. It requires stopping, regretting, and resolving not to return — and if a right of another person is involved, returning it or seeking their pardon.",
        ar: "وليست موقوفةً على وجدانٍ يُحسّ، بل على الإقلاع والندم والعزم على ألّا يعود — وإن كان فيها حقٌّ لآدميٍّ فردُّه أو استحلاله." },
      { en: "Relapsing does not close the door. If you repent and fall and repent again, you repent again. The scholars treat the return itself as the thing that is asked of you.",
        ar: "والعَوْد لا يغلق الباب. فإن تبتَ ثم وقعتَ ثم تبت، فتُبْ من جديد. وأهل العلم يجعلون الرجوع نفسه هو المطلوب منك." }
    ],
    evidence: [
      { en: "\"Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed Allah forgives all sins. Indeed it is He who is the Forgiving, the Merciful.\"",
        ar: "﴿قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ﴾",
        ref: "Surah Az-Zumar (39:53)" },
      { en: "\"And who despairs of the mercy of his Lord except those astray?\"",
        ar: "﴿وَمَن يَقْنَطُ مِن رَّحْمَةِ رَبِّهِ إِلَّا الضَّالُّونَ﴾",
        ref: "Surah Al-Hijr (15:56)" },
      { en: "The Prophet ﷺ said Allah says: \"O son of Adam, were your sins to reach the clouds of the sky, then you sought My forgiveness, I would forgive you and I would not mind.\"",
        ar: "قال ﷺ فيما يرويه عن ربه: «يَا ابْنَ آدَمَ، لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتَنِي غَفَرْتُ لَكَ وَلَا أُبَالِي»",
        ref: "Jami at-Tirmidhi, Book of Supplications — OUTSIDE the two Sahihs; graded Sahih by al-Albani" },
      { en: "And in the two Sahihs, the man who killed ninety-nine people and then one more, and was forgiven when he set out toward a land of righteous people and died on the road.",
        ar: "وفي الصحيحين قصّة الذي قتل تسعةً وتسعين نفسًا ثم أتمّ بها مئة، فغُفر له لمّا خرج قاصدًا أرض الصالحين فمات في الطريق.",
        ref: "Sahih al-Bukhari, Book of the Prophets, Hadith 3470; also Muslim — Sahih, agreed upon" }
    ],
    scholars: [
      { name: "Ibn al-Qayyim", nameAr: "ابن القيم",
        view: "Wrote at length that despair is one of Shaytan's most effective instruments precisely because it looks like piety — a person who thinks himself beyond forgiveness stops trying, and that is the whole aim.",
        viewAr: "أطال في أنّ القنوط من أنفذ حبائل الشيطان، لأنه يتزيّا بزيّ التقوى؛ فمن ظنّ نفسه خارجًا عن المغفرة كفّ عن العمل، وذلك هو المقصود.",
        work: "Madarij as-Salikin" },
      { name: "An-Nawawi", nameAr: "الإمام النووي",
        view: "Gathered the texts on hope and on the acceptance of repentance and held that the door remains open until the soul reaches the throat, and until the sun rises from the west.",
        viewAr: "جمع نصوص الرجاء وقبول التوبة، وقرّر أنّ الباب مفتوحٌ حتى تبلغ الروح الحلقوم، وحتى تطلع الشمس من مغربها.",
        work: "Riyad as-Salihin, the Book of Repentance" },
      { name: "Ibn Baz", nameAr: "الشيخ عبد العزيز بن باز",
        view: "Answered this question many times and never qualified it: sincere repentance wipes what came before it, whatever the sin was, and the one who repents from a sin is as one with no sin.",
        viewAr: "أجاب عن هذا مرارًا ولم يقيّده: التوبة الصادقة تمحو ما قبلها كائنًا ما كان الذنب، والتائب من الذنب كمن لا ذنب له.",
        work: "Fatawa Nur 'ala ad-Darb" }
    ],
    difference: "There is no disagreement here worth reporting, and it would be dishonest to manufacture one. What the scholars do add is a warning against the opposite error — treating forgiveness as a licence and delaying repentance on the assumption of time that nobody is guaranteed.",
    differenceAr: "لا خلاف ها هنا يستحقّ النقل، ولا يصحّ اختلاق خلافٍ لا وجود له. وإنما زاد أهل العلم التحذير من الطرف المقابل: أن تُتّخذ المغفرة ذريعةً فيُسوَّف بالتوبة اتّكالًا على أجلٍ لا يضمنه أحد.",
    verify: "If this is weighing on you, speak to a scholar or an imam you trust — and if you are having thoughts of harming yourself, tell someone today. binbaz.org.sa and binothaimeen.net.",
    verifyAr: "إن كان هذا يثقل عليك فكلّم عالمًا أو إمامًا تثق به — وإن كنت تحدّث نفسك بإيذائها فأخبر أحدًا اليوم. وراجع binbaz.org.sa و binothaimeen.net.",
    keys: ["despair", "hopeless", "too late", "unforgivable", "big sins", "guilt", "ashamed", "cant forgive myself", "qunut", "hope",
           "اليأس", "القنوط", "فات الأوان", "ذنوبي كثيرة", "لا تُغفر", "الندم", "الخجل", "الرجاء", "التوبة"]
  }
];
