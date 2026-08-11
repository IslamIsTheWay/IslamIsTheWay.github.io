/* ============================================================
   GOLDEN_MIRROR — قبل أن تنبهر
   ------------------------------------------------------------
   What is actually happening in the societies that are held up
   to us as the destination — and, in the same section and at the
   same volume, what is wrong with us.

   THE RULE THIS SECTION IS WRITTEN UNDER, and it comes from the
   owner himself: we judge ourselves before we judge others, we
   take the good and leave the bad, and we are able to hear the
   other opinion instead of assuming everything we say is right
   and everything they say is wrong.

   So this is NOT a section about how bad Western people are. It
   is about a set of CHOICES and what those choices produced,
   measured on the West's own published statistics — and then the
   same knife turned on ourselves. A section that only cut one
   way would be exactly the blind following it is warning about,
   just pointed in the opposite direction.

   ON NUMBERS. Every figure here is from a named public source
   and the direction of the trend is not disputed. Precise
   figures move year to year, so the entries name the source and
   the direction rather than quoting a decimal that will be stale
   in eighteen months. Anyone can check them, and should.

   ON TONE. The Golden Age closing already establishes it: the
   reader is far more likely to be a young Muslim who feels
   behind than someone who needs telling off, and the criticism
   lands on OUR choices, never on other peoples as peoples.
   Nothing here mocks anybody. A society in difficulty is not a
   thing to gloat over — the Quran's own response to the ruins of
   earlier peoples is "have they not travelled and SEEN", not
   laughter.
   ============================================================ */

const GOLDEN_MIRROR = {
  title: "Before you are dazzled — look at both, honestly",
  titleAr: "قبل أن تنبهر — انظر إلى الاثنين بإنصاف",
  lead: "What the societies held up as the destination are actually reporting about themselves — and then the same question asked of us.",
  leadAr: "ما تُخبر به عن نفسها المجتمعاتُ التي تُرفع لنا غايةً — ثم السؤال نفسه يُوجَّه إلينا.",

  /* The six parts. The sections were previously one long undifferentiated
     run of cards and it was genuinely hard to follow — a reader could not
     tell where the argument about THEM ended and the argument about US
     began. They are now grouped, and each group is announced. */
  parts: [
    { id: "them-say",  h: "1 · What they say about us",            hAr: "١ · ما يقولونه عنّا" },
    { id: "them-live", h: "2 · What is actually happening there",  hAr: "٢ · وما يجري عندهم فعلًا" },
    { id: "us-copy",   h: "3 · So why do we still copy them?",     hAr: "٣ · فلماذا نُقلّدهم بعدُ؟" },
    { id: "answer",    h: "4 · The honest answer about who is ahead", hAr: "٤ · الجواب المنصف: من المتقدّم؟" },
    { id: "us-first",  h: "5 · And now ourselves — the important part", hAr: "٥ · والآن نحن — وهو المهمّ" },
    { id: "do",        h: "6 · What to actually do",               hAr: "٦ · فماذا نصنع" }
  ],

  sections: [
    {
      id: "gm-onething",
      part: "them-say",
      h: "The one thing most of them know about Islam",
      hAr: "الشيء الوحيد الذي يعرفه أكثرهم عن الإسلام",
      en: "Ask an ordinary person in London or Chicago what they know about the Prophet ﷺ. Very often you will get one thing, and only one: that he married Aishah when she was young.\n\nNot that he forbade killing women, children, old people and even trees in war. Not that he freed slaves and made freeing them an expiation for sin. Not that his farewell sermon abolished racial precedence. Not the debts he cancelled or the blood-feuds he ended. One item, repeated until it is the whole file.\n\nSO LET US ANSWER IT PROPERLY, because a thing you refuse to discuss looks like a thing you cannot answer.\n\nThe age is in our own books — Aishah narrates it herself, in al-Bukhari and Muslim. Nobody is hiding it.\n\nWhat gets left out is everything around it:\n\n· NOT ONE PERSON AT THE TIME OBJECTED. Not the Quraysh, who attacked him for everything they could find — that he was a poet, a magician, a madman, a man who split families. They never once raised this, because in that society it was unremarkable. An objection that occurs to nobody in the entire generation is not an objection they suppressed; it is an anachronism we are importing.\n· THE SAME WAS TRUE IN EUROPE, for far longer than people realise. The age of consent in English law was TWELVE until 1875, when it became thirteen, and only in 1885 did it become sixteen. Marriage ages in nineteenth-century America were comparable in many states. The people whose great-grandparents legislated that are the ones now using it as the single fact they know.\n· AND LOOK AT WHAT SHE BECAME. Aishah is one of the most consequential scholars in the history of this religion. She narrated over two thousand hadith. Senior companions — grown men, leaders — came to HER to settle questions of law. She corrected them publicly and they accepted it. That is not the biography of someone who was harmed and diminished; it is the biography of someone who was educated and empowered in a society that then deferred to her.\n\nNone of that requires us to be defensive. It requires us to know the file better than the person holding one page of it.",
      ar: "اسأل رجلًا عاديًّا في لندن أو شيكاغو: ماذا تعرف عن النبيّ ﷺ؟ فكثيرًا ما يأتيك شيءٌ واحدٌ لا غير: أنه تزوّج عائشة وهي صغيرة.\n\nلا أنه نهى في الحرب عن قتل النساء والصبيان والشيوخ، بل وعن قطع الشجر. ولا أنه أعتق الرقاب وجعل عتقها كفّارةً للذنب. ولا أنّ خطبة الوداع أبطلت التفاضل بالأنساب. ولا الدماء التي أبطلها ولا الرِّبا الذي وضعه. بندٌ واحد، يُكرَّر حتى يصير هو الملفّ كلّه.\n\n**فلنُجب عنه على وجهه**، فإنّ ما تأبى الكلام فيه يبدو كأنّك لا تملك عنه جوابًا.\n\nالسنّ في كتبنا نحن — تروي عائشة ذلك عن نفسها، في البخاري ومسلم. ولا أحد يُخفيه.\n\nوالذي يُحذف هو كلُّ ما حوله:\n\n· **لم يعترض أحدٌ في ذلك الزمان**. لا قريشٌ التي رمته بكلّ ما وجدت: شاعر، ساحر، مجنون، مفرِّقٌ بين المرء وأهله. ولم يذكروا هذا قطّ، لأنه في ذلك المجتمع غير مستنكَر. والاعتراض الذي لا يخطر لأحدٍ في جيلٍ كامل ليس اعتراضًا كُتم، وإنما هو إسقاطٌ لزماننا على زمانهم.\n· **وكذلك كان في أوروبا**، ومدّةً أطول ممّا يظنّ الناس: فسنّ الرضا في القانون الإنجليزيّ كان **اثنتي عشرة** سنة حتى سنة ١٨٧٥م، فصار ثلاث عشرة، ولم يصر ستّ عشرة إلا سنة ١٨٨٥م. وأسنان الزواج في أمريكا القرن التاسع عشر مقاربةٌ لذلك في ولاياتٍ كثيرة. والذين شرّع أجدادُهم ذلك هم الذين يجعلونه اليوم الحقيقة الوحيدة التي يعرفونها.\n· **وانظر إلى ما صارت إليه**: عائشة من أعظم من أثّر في هذا الدين علمًا. روت أكثر من ألفي حديث. وكان كبار الصحابة — رجالٌ وقادة — يرجعون **إليها** في المسائل. تستدرك عليهم علانيةً فيقبلون. وليست هذه سيرة من أُضيرت وصُغّرت، وإنما سيرة من عُلّمت ومُكّنت في مجتمعٍ ثم رجع إليها.\n\nولا يقتضي هذا كلّه أن نعتذر، وإنما يقتضي أن نعرف الملفّ أحسن ممّن يحمل ورقةً واحدةً منه.",
      plain: "In plain words: most people over there know one fact about our Prophet ﷺ and nothing else — the age of Aishah. Not the war ethics, not the freeing of slaves, not the farewell sermon ending racial superiority. One fact.\n\nWe should answer it, not avoid it. It is in our own books; Aishah tells it herself.\n\nThree things get left out. Nobody at the time objected — not even the enemies who called him a magician and a madman and looked for anything to attack. In England the legal age of consent was TWELVE until 1875. And Aishah became one of the greatest scholars this religion has had, with senior companions coming to her for rulings.\n\nSo the answer is not to get angry. It is to know the whole story better than someone holding one page of it.",
      plainAr: "بكلامٍ بسيط: أكثر الناس هناك يعرفون عن نبيّنا ﷺ حقيقةً واحدة لا غير: سنّ عائشة. لا أخلاق الحرب، ولا عتق الرقاب، ولا خطبة الوداع التي أنهت التفاضل بالألوان. حقيقةٌ واحدة.\n\nوينبغي أن نُجيب لا أن نتهرّب. فالخبر في كتبنا، وعائشة ترويه عن نفسها.\n\nوثلاثة أمورٍ تُحذف: لم يعترض أحدٌ في زمانه — ولا الأعداء الذين سمّوه ساحرًا ومجنونًا وتلمّسوا كلّ مطعن. وسنّ الرضا في إنجلترا كان **اثنتي عشرة** سنة حتى ١٨٧٥م. وعائشة صارت من أعظم علماء هذا الدين، يرجع إليها كبار الصحابة في الفتوى.\n\nفالجواب ليس الغضب، وإنما أن تعرف القصّة كلّها أحسن ممّن يحمل ورقةً واحدة.",
      src: "The narration: Sahih al-Bukhari and Sahih Muslim, from Aishah · English age of consent: Offences Against the Person Act 1875, Criminal Law Amendment Act 1885",
      srcAr: "الرواية: البخاري ومسلم عن عائشة · وسنّ الرضا في إنجلترا: قانون ١٨٧٥م، ثم قانون ١٨٨٥م",
      rank: "documented"
    },
    {
      id: "gm-propaganda",
      part: "them-say",
      h: "How the picture is kept in place",
      hAr: "وكيف تُثبَّت الصورة",
      en: "It is not that people over there are told lies about us every day. It is quieter than that, and more effective.\n\nCOVERAGE IS SELECTED. A Muslim who commits violence is reported with his religion in the headline. A Muslim who runs a hospital is reported as a doctor. Over years, one category accumulates a label and the other does not.\n\nTHE VILLAIN IS CAST. This is the Shaheen finding above: for decades, if a film needed someone menacing and foreign, the accent was ours. A person absorbs that without ever forming an opinion, which is exactly why it works.\n\nAND ONE-SIXTH OF HUMANITY IS DISCUSSED WITHOUT BEING PRESENT. Panels about Islam frequently contain nobody who practises it. Imagine a discussion of Christianity with no Christian on it and you can see how strange that is.\n\nBut here is the part that should sober us, and it is ours: much of what they see, we supplied. When someone claims our religion while doing something monstrous, they have handed the caricature a documentary. We cannot control a headline. We are entirely responsible for the material.",
      ar: "ليست القضيّة أنّ الناس هناك يُكذَب عليهم فينا كلّ يوم. الأمر أهدأ من ذلك وأشدّ أثرًا.\n\n**التغطية تُنتقى.** فالمسلم إذا اعتدى ذُكر دينه في العنوان، وإذا أدار مستشفًى ذُكر أنه طبيب. وعلى السنين يتراكم الوسم على صنفٍ دون صنف.\n\n**والشرّير يُصنَّف.** وهذا ما وجده شاهين آنفًا: عقودًا، إذا احتاج الفيلم وجهًا مخيفًا غريبًا كانت اللكنة لكنتنا. ويتشرّب المرء ذلك من غير أن يُكوّن رأيًا، ولهذا بعينه يعمل.\n\n**ويُتكلَّم عن سُدس البشر وهم غائبون.** فكثيرًا ما تُعقد ندوةٌ عن الإسلام ليس فيها من يدين به. تخيّل ندوةً عن النصرانيّة بلا نصرانيّ، يظهر لك وجه الغرابة.\n\nوهنا ما ينبغي أن يُهدّئ من غضبنا، وهو منّا: فكثيرٌ ممّا يرونه نحن الذين قدّمناه. فمن ادّعى ديننا وهو يصنع منكرًا فقد ناول تلك الصورةَ الساخرة **فِلمًا وثائقيًّا**. ولا نملك عنوان صحيفة، ونملك المادّة كلَّها.",
      plain: "In plain words: nobody sits there being lied to about us every morning. It works more quietly.\n\nWhen a Muslim does something violent, his religion is in the headline. When a Muslim saves lives, he is just a doctor. Do that for twenty years and one word picks up a meaning.\n\nAnd panels about Islam often have no Muslim on them. Picture a TV discussion about Christianity with no Christian invited, and you can see it.\n\nBut the honest half: a lot of what they see, we gave them. Someone who claims our religion while doing something horrible has handed them the evidence for free. We do not control their headlines. We completely control the material.",
      plainAr: "بكلامٍ بسيط: لا أحد هناك يُكذَب عليه فينا كلّ صباح. الأمر يعمل بهدوءٍ أكثر.\n\nإذا اعتدى مسلمٌ وُضع دينه في العنوان، وإذا أنقذ مسلمٌ الأرواح فهو «طبيب» فقط. افعل ذلك عشرين سنة تكتسب كلمةٌ معنًى.\n\nوكثيرٌ من الندوات عن الإسلام ليس فيها مسلم. تخيّل برنامجًا عن النصرانيّة لم يُدعَ إليه نصرانيّ، يتبيّن لك الأمر.\n\nوأمّا النصف الصادق: فكثيرٌ ممّا يرونه نحن أعطيناهم إيّاه. فمن ادّعى ديننا وهو يصنع فظيعةً فقد ناولهم الدليل مجّانًا. لا نملك عناوينهم، ونملك المادّة كلّها.",
      rank: "reasoning"
    },
    {
      id: "gm-alcohol",
      part: "them-live",
      h: "The two things nobody counts as a cost",
      hAr: "أمران لا يُحسبان في التكلفة",
      en: "ALCOHOL. The World Health Organization attributes around 2.6 million deaths a year worldwide to alcohol — roughly one in twenty of all deaths. It is a leading factor in road deaths, liver disease, several cancers, and a very large share of domestic violence cases in countries that record the cause.\n\nIt is not treated as a problem to be solved. It is the default social act — the thing you are odd for declining.\n\nPORNOGRAPHY. The scale is not disputed by anyone: the largest sites report tens of billions of visits a year, and access now begins in childhood. Several Western governments have legislated age verification precisely because their own reviews found children encountering it routinely, and clinicians in those countries increasingly report its effects in young men.\n\nWHY THIS BELONGS ON THIS PAGE. Both are freely available, socially normal, and — this is the point — NOT counted when that society measures how advanced it is. GDP is counted. Nobel prizes are counted. These are treated as private matters with no total.\n\nAnd our own tradition treats the second one exactly the way the verse we quoted earlier does: “do not COME NEAR” — forbidding the road rather than only the destination. That looked restrictive for a long time. It is beginning to look like engineering.",
      ar: "**الخمر.** تنسب منظّمة الصحّة العالميّة نحو **٢٫٦ مليون** وفاةٍ سنويًّا في العالم إلى الكحول — قرابة وفاةٍ من كلّ عشرين. وهي من أكبر أسباب حوادث الطرق، وأمراض الكبد، وعددٍ من السرطانات، ونسبةٍ كبيرة من العنف الأسريّ في البلاد التي تُسجّل السبب.\n\nولا تُعامَل معاملة مشكلةٍ تُحلّ، وإنما هي الفعل الاجتماعيّ الأصل — الذي تُستغرب إن امتنعتَ عنه.\n\n**والإباحيّة.** لا ينازع أحدٌ في حجمها: أكبر المواقع تُعلن عشرات المليارات من الزيارات سنويًّا، وصار الوصول إليها يبدأ في الطفولة. وقد شرّعت حكوماتٌ غربيّةٌ عدّة التحقّق من العمر لهذا بعينه، لأنّ مراجعاتها هي وجدت الأطفال يصلون إليها عادةً، ويُبلّغ الأطبّاء هناك عن آثارها في الشبّان بازدياد.\n\n**ولماذا هذا في هذه الصفحة؟** لأنّ الاثنين متاحان، ومقبولان اجتماعيًّا، و — وهذا هو المقصود — **لا يُحسبان** حين يقيس ذلك المجتمع تقدّمه. يُحسب الناتج المحلّيّ، وتُحسب جوائز نوبل، وأمّا هذان فيُعدّان شأنًا خاصًّا بلا مجموع.\n\nوتراثنا يعامل الثاني بالوجه نفسه الذي في الآية التي نقلناها: ﴿**وَلَا تَقْرَبُوا۟**﴾ — نهيٌ عن الطريق لا عن الغاية وحدها. وقد بدا ذلك تضييقًا زمنًا طويلًا، وقد صار يبدو **هندسة**.",
      plain: "In plain words: two things are everywhere there, and neither is counted when they measure how advanced they are.\n\nAlcohol kills around 2.6 million people a year worldwide — that is the WHO's own figure, about one death in twenty. And it is not treated as a problem; it is the normal thing to do, and you are the strange one for saying no.\n\nPornography now reaches children routinely — which is why several of their own governments have started legislating age checks.\n\nNeither shows up in GDP. Neither shows up in a ranking of advanced countries. They are counted as private.\n\nAnd our rule on the second one was “do not come NEAR it” — ban the road, not just the destination. For a long time that looked strict. It is starting to look like good engineering.",
      plainAr: "بكلامٍ بسيط: أمران منتشران هناك، ولا يُحسب واحدٌ منهما حين يقيسون تقدّمهم.\n\nالخمر تقتل نحو **٢٫٦ مليون** إنسانٍ سنويًّا في العالم — رقم منظّمة الصحّة العالميّة نفسها، أي نحو وفاةٍ من كلّ عشرين. ولا تُعدّ مشكلة، بل هي المعتاد، وأنت الغريب إن قلتَ لا.\n\nوالإباحيّة صار الأطفال يصلون إليها عادةً — ولهذا بدأت حكوماتهم تُشرّع التحقّق من العمر.\n\nولا يظهر أيٌّ منهما في الناتج المحلّيّ، ولا في ترتيب الدول المتقدّمة. يُعدّان شأنًا خاصًّا.\n\nوقاعدتنا في الثاني كانت ﴿وَلَا تَقْرَبُوا﴾ — امنع الطريق لا الغاية وحدها. وقد بدا هذا تشدّدًا زمنًا، وصار يبدو **هندسةً محكمة**.",
      src: "World Health Organization, Global status report on alcohol and health · UK Online Safety Act 2023 age-verification provisions",
      srcAr: "منظّمة الصحّة العالميّة، التقرير العالميّ عن الكحول والصحّة · وأحكام التحقّق من العمر في قانون السلامة على الإنترنت البريطانيّ ٢٠٢٣م",
      rank: "documented"
    },
    {
      id: "gm-loneliness",
      part: "them-live",
      h: "The thing they are calling an epidemic themselves",
      hAr: "الأمر الذي يُسمّونه هم وباءً",
      en: "In 2023 the Surgeon General of the United States issued a formal public health advisory titled “Our Epidemic of Loneliness and Isolation.” Not an opinion column — the same instrument used for smoking and for opioids.\n\nIt reported that a large share of adults were experiencing measurable loneliness, and set out the physical consequences: raised risk of heart disease, stroke, dementia and early death, with the mortality effect compared to smoking.\n\nThe United Kingdom appointed a Minister for Loneliness in 2018. Japan appointed one in 2021.\n\nWhat is worth pausing on is not the numbers. It is that a society reached the point of needing a GOVERNMENT MINISTER for the absence of people in your life — something that, for most of human history, the family simply did.",
      ar: "أصدر الطبيب العامّ للولايات المتّحدة سنة ٢٠٢٣م تحذيرًا صحّيًّا رسميًّا عنوانه: «وباء الوحدة والعزلة عندنا». وليس مقال رأي، بل هو الأداة نفسها التي استُعملت للتدخين وللمسكّنات الأفيونيّة.\n\nوذكر أنّ نسبةً كبيرة من البالغين يعانون وحدةً تُقاس، وعدّد آثارها البدنيّة: ارتفاع خطر أمراض القلب والسكتة والخَرَف والوفاة المبكّرة، وقارن أثرها في الوفيّات بالتدخين.\n\nوعيّنت المملكة المتّحدة وزيرةً للوحدة سنة ٢٠١٨م، وعيّنت اليابان وزيرًا لها سنة ٢٠٢١م.\n\nوالذي يستحقّ الوقوف ليس الأرقام، وإنما أنّ مجتمعًا بلغ أن يحتاج إلى **وزيرٍ في الحكومة** لغياب الناس من حياتك — وهو ما كانت الأسرة تكفيه في عامّة تاريخ البشر.",
      src: "US Surgeon General's Advisory, “Our Epidemic of Loneliness and Isolation” (2023) · UK Minister for Loneliness (2018) · Japan (2021)",
      srcAr: "تحذير الطبيب العامّ للولايات المتّحدة (٢٠٢٣م): «Our Epidemic of Loneliness and Isolation» · وزيرة الوحدة في بريطانيا (٢٠١٨م) · واليابان (٢٠٢١م)",
      rank: "documented"
    },
    {
      id: "gm-family",
      part: "them-live",
      h: "Marriage, children, and the house at eighteen",
      hAr: "الزواج والولد، والخروج من البيت في الثامنة عشرة",
      en: "The direction is not disputed and the statistics offices publish it themselves.\n\nMarriage rates across the United States and Western Europe have fallen substantially since the 1970s, and the age of first marriage has risen by roughly a decade. Fertility is below the replacement rate of 2.1 across the whole of the European Union, the United States, and most of East Asia — meaning these populations do not replace themselves without migration.\n\nSingle-person households are now the most common household type in several European countries. In the United Kingdom the Office for National Statistics reports millions living alone, with the sharpest rise among older people.\n\nAnd the custom of a child leaving at eighteen — which in much of the world would be read as a family failing — is treated there as the normal and healthy outcome. A parent who houses a grown child is often the one who has to explain himself.",
      ar: "الاتّجاه غير متنازَعٍ فيه، ودوائر الإحصاء تنشره بنفسها.\n\nانخفضت معدّلات الزواج في الولايات المتّحدة وغرب أوروبا انخفاضًا كبيرًا منذ السبعينيّات، وارتفع سنّ الزواج الأوّل نحو عقدٍ كامل. وصار الإنجاب دون معدّل الإحلال (٢٫١) في الاتّحاد الأوروبيّ كلّه، وفي الولايات المتّحدة، وفي أكثر شرق آسيا — أي أنّ هذه المجتمعات لا تُعوّض نفسها إلا بالهجرة.\n\nوصارت الأُسر المكوّنة من فردٍ واحد أكثر أنواع الأُسر شيوعًا في عددٍ من دول أوروبا. ويذكر مكتب الإحصاء الوطنيّ البريطانيّ ملايين يعيشون وحدهم، وأشدّ الارتفاع بين كبار السنّ.\n\nوأمّا عادة خروج الولد في الثامنة عشرة — وهي في كثيرٍ من الدنيا تُقرأ تقصيرًا من الأسرة — فتُعدّ هناك المآل الطبيعيّ السليم. حتى إنّ الوالد الذي يُؤوي ولدًا بالغًا هو الذي يُطالَب بالتفسير في الغالب.",
      src: "OECD Family Database · Eurostat fertility statistics · UK Office for National Statistics · US Census Bureau",
      srcAr: "قاعدة بيانات الأسرة في منظّمة التعاون الاقتصادي (OECD) · إحصاءات الخصوبة في يوروستات · مكتب الإحصاء الوطنيّ البريطانيّ · مكتب التعداد الأمريكيّ",
      rank: "documented"
    },
    {
      id: "gm-drugs",
      part: "them-live",
      h: "What is being reached for instead",
      hAr: "وما الذي يُمَدّ إليه بدلًا من ذلك",
      en: "Drug overdose deaths in the United States have run at around a hundred thousand a year in recent years — a figure the CDC publishes, and which exceeds American deaths in most of its wars.\n\nAlongside it: rising rates of recorded anxiety and depression among the young, and an antidepressant prescription rate that has climbed steadily for two decades in both the US and the UK.\n\nThe honest reading is not that these people are worse than us. It is that a person who is alone reaches for something, and a society that dismantled the structures a person leans on will find the reaching turns into something else.",
      ar: "بلغت وفيّات الجرعات المفرطة من المخدّرات في الولايات المتّحدة نحو مئة ألفٍ في السنة في السنوات الأخيرة — رقمٌ ينشره مركز مكافحة الأمراض، وهو يتجاوز قتلى أمريكا في أكثر حروبها.\n\nويصحبه ارتفاع القلق والاكتئاب المسجّلَين بين الشباب، وارتفاعٌ مطّردٌ في صرف مضادّات الاكتئاب طوال عقدين في أمريكا وبريطانيا.\n\nوالقراءة المنصفة ليست أنّ هؤلاء أسوأ منّا، وإنما أنّ الوحيد يمدّ يده إلى شيء، وأنّ مجتمعًا فكّك ما يستند إليه المرء سيجد ذلك المدّ قد صار إلى غيره.",
      src: "US Centers for Disease Control and Prevention, overdose mortality data · NHS Digital prescribing statistics",
      srcAr: "بيانات وفيّات الجرعات في مركز مكافحة الأمراض الأمريكيّ (CDC) · وإحصاءات الوصفات في هيئة الصحّة البريطانيّة (NHS Digital)",
      rank: "documented"
    },
    {
      id: "gm-irony",
      part: "us-copy",
      h: "And this is the civilisation calling us backward",
      hAr: "وهذه هي الحضارة التي تصفنا بالتخلّف",
      en: "It is a strange thing to be told that our way of living is oppressive by a society that has appointed a minister for loneliness.\n\nBut notice the temptation here, and refuse it. The answer to being looked down on is not to look down back. The Quran's response to the ruins of stronger peoples is not laughter — it is “have they not travelled through the earth and SEEN.” Look, and learn, and be warned.\n\nA society in difficulty is not a joke. There are people inside those statistics — old men dying alone, young people medicated into being able to get through a Tuesday. If our reaction to that is amusement, we have learned nothing from our own texts, and we are simply doing the same contempt in the opposite direction.\n\nWhat the comparison IS good for is one thing only: it should end the assumption that they are the destination and we are behind.",
      ar: "من العجيب أن يُقال لنا إنّ طريقتنا في العيش قهرٌ، ومن يقوله مجتمعٌ عيّن وزيرًا للوحدة.\n\nولكن انتبه للإغراء هنا وارفضه: فليس جوابُ الاستعلاء استعلاءً مقابلًا. ولم يكن جواب القرآن عن أطلال من هم أشدّ منّا ضحكًا، وإنما ﴿أَوَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ **فَيَنظُرُوا۟**﴾. انظر، واعتبر، واحذر.\n\nومجتمعٌ في بلاءٍ ليس مَهزلة. فوراء تلك الأرقام بشر: شيوخٌ يموتون وحدهم، وشبابٌ يتداوَون ليقدروا على احتمال يومٍ عاديّ. فإن كان ردّنا على هذا تسلية، فما تعلّمنا من نصوصنا شيئًا، وإنما صنعنا الاحتقار نفسه في الجهة المقابلة.\n\nوالذي تصلح له المقارنة أمرٌ واحد: أن تُنهي التسليم بأنهم الغاية وأنّا متأخّرون.",
      rank: "reasoning"
    },
    {
      id: "gm-ourselves",
      part: "us-first",
      h: "Now the same knife, turned on us — and this is the important half",
      hAr: "والآن السكّين نفسها تُوجَّه إلينا — وهذا هو النصف المهمّ",
      en: "If this section stopped at the paragraph above it would be worthless, and worse than worthless: it would be exactly the blind copying it is warning against, pointed the other way.\n\nSo, plainly:\n\nDivorce is rising across Muslim countries too, and in several of them it is rising faster than in Europe. Our marriages are not automatically healthy because they are ours.\n\nWe have racism, and we lie about it. Tribalism, colourism, contempt for the poorer Muslim country, and the treatment of migrant workers in some of the wealthiest Muslim states is a scandal that would be called by its name instantly if a Western country did it. The Prophet ﷺ said in his final sermon that no Arab has superiority over a non-Arab, nor a white over a black, except by taqwa. We recite that and then behave otherwise.\n\nWe have family cruelty dressed as family values — forced marriage, which the religion voids; sons who never see their parents; parents who never once said a kind word.\n\nWe have drugs. Captagon is manufactured and trafficked in our region at industrial scale.\n\nAnd we are, on the record, far behind in the very thing this page celebrates: research output, patents, universities. Al-Khwarizmi's descendants publish a fraction of what a single mid-sized European country publishes.\n\nEvery one of those is ours. None of it is caused by the West, and none of it is fixed by talking about the West.",
      ar: "لو وقف هذا القسم عند الفقرة التي قبله لكان عديم النفع، بل أسوأ: لكان عين التقليد الأعمى الذي يُحذّر منه، مقلوبَ الجهة.\n\nفصريحًا:\n\nالطلاق يرتفع في بلاد المسلمين أيضًا، وفي عددٍ منها يرتفع أسرع ممّا في أوروبا. فليست زيجاتنا سليمةً لمجرّد أنها لنا.\n\nوفينا عنصريّة، ونكذب في شأنها: عصبيّةٌ قبليّة، وتفاضلٌ بالألوان، واحتقارٌ للبلد المسلم الأفقر، ومعاملةُ العمّال الوافدين في بعض أغنى دول المسلمين فضيحةٌ لو صنعتها دولةٌ غربيّة لسُمّيت باسمها في الحال. وقد قال النبيّ ﷺ في خطبة الوداع: لا فضل لعربيٍّ على أعجميّ، ولا لأبيض على أسود، إلا بالتقوى. نتلوها ثم نصنع خلافها.\n\nوفينا قسوةٌ أسريّة تلبس ثوب «قيم الأسرة»: إكراهٌ على النكاح والدين يُبطله، وأبناءٌ لا يرون آباءهم، وآباءٌ ما قالوا لأبنائهم كلمةً طيّبة قطّ.\n\nوفينا مخدّرات، والكبتاغون يُصنّع ويُهرَّب في منطقتنا على مستوًى صناعيّ.\n\nونحن — بالأرقام — متأخّرون جدًّا في عين ما تحتفي به هذه الصفحة: البحث العلميّ وبراءات الاختراع والجامعات. فأحفاد الخوارزميّ يُنتجون كسرًا ممّا تُنتجه دولةٌ أوروبيّةٌ متوسّطة واحدة.\n\nوكلُّ واحدةٍ من هذه لنا. لم يصنعها الغرب، ولا تُصلَح بالكلام عن الغرب.",
      src: "The farewell sermon: Musnad Ahmad — outside the two Sahihs",
      srcAr: "خطبة الوداع: مسند أحمد — خارج الصحيحين، وعليه عمل الناس",
      rank: "reasoning"
    },
    {
      id: "gm-inferiority",
      part: "us-copy",
      h: "The real problem is not out there — it is the assumption",
      hAr: "والمشكلة الحقيقيّة ليست هناك — وإنما في المُسلَّمة",
      en: "The deepest damage is not any policy. It is a sentence that a lot of young Muslims now carry without ever having examined it: that their own tradition is old, and that “advanced” is a direction, and that direction points away from it.\n\nYou hear it as: “we're in 2026.” As though a date were an argument. Every generation in history has been in its own current year, and every one of them was certain that being recent made it right. The people the Quran describes were also, in their own moment, the most modern people alive.\n\nAnd it produces something absurd: a young person who has never read fifty pages of his own tradition, comparing it unfavourably with a tradition he has also never read, on the strength of what he absorbed from a screen. That is not a judgement. He has not judged anything. He has been placed.",
      ar: "أعمق الضرر ليس في سياسةٍ ولا نظام، وإنما في جملةٍ صار كثيرٌ من شبابنا يحملها ولم يفحصها قطّ: أنّ تراثه قديم، وأنّ «التقدّم» جهة، وأنّ تلك الجهة تبتعد عنه.\n\nوتسمعها هكذا: «إحنا في ٢٠٢٦». كأنّ التاريخ حجّة! وكلُّ جيلٍ في التاريخ كان في سَنَته هو، وكلُّهم أيقن أنّ حداثته تجعله على الصواب. والأقوام الذين وصفهم القرآن كانوا في لحظتهم أحدثَ من على الأرض.\n\nويُنتج ذلك أمرًا سخيفًا: شابٌّ لم يقرأ خمسين صفحةً من تراثه، يُفاضل بينه وبين تراثٍ آخر لم يقرأه أيضًا، بناءً على ما تشرّبه من شاشة. وليس هذا حُكمًا، فهو لم يحكم في شيء، وإنما وُضع حيث وُضع.",
      rank: "reasoning"
    },
    {
      id: "gm-how",
      part: "do",
      h: "So how do you keep what is yours — without shutting the door",
      hAr: "فكيف تحفظ ما هو لك — من غير أن تُغلق الباب",
      en: "Not by closing. That was never our method and it is not what built anything.\n\nIbn Sina read the Greeks. Al-Biruni learned Sanskrit so he could read the Hindus in their own language. The House of Wisdom paid Christians, Jews and Sabians to translate, honoured them, and put their names on the work. That is a civilisation with a spine — confident enough to take what is true from anywhere and refuse what is corrupt from anywhere.\n\nSo the method is judgement, not walls:\n\n1. TAKE THE GOOD, and name it honestly. Their universities, their laboratories, their traffic systems, their record-keeping, their institutions that outlive the man who founded them. Wanting those is not westernisation; refusing them out of pride is not religion.\n\n2. LEAVE WHAT IS ROTTEN, and be able to say which part and why — not a vague suspicion of everything foreign.\n\n3. KNOW YOUR OWN THING BEFORE YOU RANK IT. You cannot honestly compare two things when you have read neither. Read fifty pages of your own tradition before you accept anyone's verdict on it, including a verdict from a Muslim.\n\n4. HEAR THE OTHER SIDE PROPERLY. Not so you can rehearse a rebuttal — so you can find out whether they are right. If you cannot state their strongest argument in a way they would accept, you have not understood it, and you are not qualified to refuse it.\n\n5. JUDGE YOURSELF BEFORE YOU JUDGE THEM. Umar is reported to have said: take account of yourselves before you are taken to account. A person who criticises a whole civilisation and has not looked at his own week is doing something other than thinking.",
      ar: "لا بالإغلاق. فما كان ذلك منهجنا قطّ، ولا بُني به شيء.\n\nقرأ ابن سينا اليونان، وتعلّم البيرونيّ السنسكريتيّة ليقرأ الهنود بلغتهم، وأجرى بيتُ الحكمة الأرزاق على النصارى واليهود والصابئة ليترجموا، وأكرمهم، وقيّد أسماءهم على أعمالهم. تلك حضارةٌ لها ظهر: من الثقة بحيث تأخذ الحقّ من أيّ مكان وتردّ الفساد من أيّ مكان.\n\nفالمنهج إذن حُكمٌ وتمييز، لا جُدُر:\n\n١. **خُذ الحسن** وسمِّه باسمه: جامعاتهم، ومختبراتهم، ونظام مرورهم، وضبط سجلّاتهم، ومؤسّساتهم التي تبقى بعد مؤسّسها. فطلبُ هذا ليس تغريبًا، وردُّه أنَفةً ليس دينًا.\n\n٢. **ودَعِ الفاسد**، وكن قادرًا على تسمية أيّ جزءٍ ولماذا — لا ريبةً مبهمةً في كلّ ما هو أجنبيّ.\n\n٣. **اعرف ما عندك قبل أن تُرتّبه**. لا يصحّ أن تُقارن بين شيئين لم تقرأ واحدًا منهما. فاقرأ خمسين صفحةً من تراثك قبل أن تقبل حكم أحدٍ عليه، ولو كان الحاكم مسلمًا.\n\n٤. **واسمع الطرف الآخر على وجهه**: لا لتُحضّر ردًّا، بل لتعرف: أهو على حقّ؟ فإن لم تستطع أن تعرض أقوى حجّته عرضًا يرضاه هو، فما فهمتها، ولستَ أهلًا لردّها.\n\n٥. **وحاسِب نفسك قبل أن تُحاسبهم**. ورُوي عن عمر: حاسبوا أنفسكم قبل أن تُحاسبوا. فمن ينقد حضارةً بأسرها ولم ينظر في أسبوعه هو، فإنه يصنع شيئًا آخر غير التفكير.",
      rank: "reasoning"
    },
    {
      id: "gm-picture",
      part: "them-say",
      h: "Where the picture of us comes from — it was manufactured, and it is documented",
      hAr: "من أين جاءت صورتنا عندهم — صُنعت صناعةً، وهي موثّقة",
      en: "This is not a feeling. It has been studied, and by their own academics.\n\nEdward Said's Orientalism (1978) traced how a body of European scholarship built the “Oriental” as a fixed type: irrational, sensual, despotic, childlike, incapable of governing himself — and how that portrait was produced alongside, and useful to, the empires that ruled those lands. It is now a standard text in Western universities, which is worth noting: the criticism is coming from inside.\n\nJack Shaheen's Reel Bad Arabs (2001) is the harder evidence, because it counts. He examined over nine hundred films with Arab characters. In the overwhelming majority the Arab was a villain, a fool, a fanatic or a brute. He identified only around a dozen that portrayed Arabs in a normal, human way.\n\nThat is not an impression. That is a survey with a number attached. And a child who has seen four hundred films has been taught something four hundred times.",
      ar: "وليس هذا شعورًا، بل هو أمرٌ دُرس، وبأقلام أكاديميّيهم أنفسهم.\n\nتتبّع إدوارد سعيد في «الاستشراق» (١٩٧٨م) كيف بنى تراثٌ من الدراسات الأوروبيّة صورةَ «الشرقيّ» نمطًا ثابتًا: غير عاقل، شهوانيّ، مستبدّ، طفوليّ، عاجزٌ عن حكم نفسه — وكيف أُنتجت هذه الصورة بمحاذاة الإمبراطوريّات التي حكمت تلك البلاد، ونافعةً لها. وهو اليوم كتابٌ مقرَّرٌ في جامعات الغرب، وهذا ممّا يُذكر: فالنقد صادرٌ من الداخل.\n\nوكتاب جاك شاهين «Reel Bad Arabs» (٢٠٠١م) أقوى دلالةً لأنه **يَعُدّ**: فحص أكثر من تسعمئة فيلمٍ فيها شخصيّات عربيّة، فكان العربيّ في أكثرها الساحق شرّيرًا أو أحمق أو متعصّبًا أو غليظًا. ولم يجد إلا نحو اثني عشر فيلمًا صوّرت العربيّ إنسانًا عاديًّا.\n\nوليس هذا انطباعًا، بل مسحٌ برقم. والطفل الذي شاهد أربعمئة فيلمٍ قد لُقِّن شيئًا أربعمئة مرّة.",
      src: "Edward Said, Orientalism (1978) · Jack Shaheen, Reel Bad Arabs: How Hollywood Vilifies a People (2001)",
      srcAr: "إدوارد سعيد، «الاستشراق» (١٩٧٨م) · جاك شاهين، «Reel Bad Arabs» (٢٠٠١م)",
      rank: "documented"
    },
    {
      id: "gm-erasure",
      part: "them-say",
      h: "And the same classroom teaches his work without his name",
      hAr: "والصفُّ نفسه يُدرّس عملَه بلا اسمه",
      en: "A student can study optics for years under “Alhazen” and never be told the man was Muslim, or that his name was al-Hasan ibn al-Haytham. He can use the word ALGORITHM every day of a computing degree and never learn it is a man's name — al-Khwarizmi's. He can sit an ALGEBRA exam without being told the word is al-jabr, out of that man's book title.\n\nThis is the quieter half, and it does more damage than the film. A caricature can be argued with. An absence cannot — you cannot object to a name you were never given.\n\nSo the picture is produced twice: once by showing us as fools, and once by removing us from the story of what we actually did.",
      ar: "قد يدرس الطالب البصريّات سنين باسم «Alhazen» ولا يُخبَر قطّ أنّ الرجل مسلم، ولا أنّ اسمه الحسن بن الهيثم. ويستعمل كلمة ALGORITHM كلَّ يومٍ في دراسته الحاسوبيّة ولا يعلم أنها **اسم رجل**: الخوارزميّ. ويجلس لامتحان ALGEBRA ولا يُقال له إنّ اللفظ «الجبر» من عنوان كتاب ذلك الرجل.\n\nوهذا هو الشطر الأهدأ، وضررُه أكبر من الفيلم: فالصورة الساخرة تُردّ، وأمّا الغياب فلا يُردّ — إذ لا تعترض على اسمٍ لم يُذكر لك أصلًا.\n\nفالصورة تُصنع مرّتين: مرّةً بإظهارنا حمقى، ومرّةً بمحونا من قصّة ما صنعناه بأيدينا.",
      rank: "reasoning"
    },
    {
      id: "gm-output",
      part: "answer",
      h: "Now the honest part — and this is what actually settles it",
      hAr: "والآن الجزء المنصف — وهو الذي يحسم المسألة",
      en: "Here the page has to be careful, because the easy answer is false and the true answer is stronger.\n\nTHE EASY ANSWER would be: they only think they are ahead, and if you look at the output we are ahead. That is not true today and saying it would discredit everything else on this page. The research output, the patents, the laboratories and the universities are overwhelmingly not ours right now. This site said so in the section above, about ourselves.\n\nSO WHAT DOES THE OUTPUT ACTUALLY SHOW? It shows the gap is in CONDITIONS, not in capacity — and there is a clean experiment that proves it.\n\nTake the same people out of our institutions and put them into theirs, and the output changes immediately.\n\n· Ahmed Zewail, born in Damanhur, Egypt — Nobel Prize in Chemistry 1999, for femtosecond spectroscopy. His schooling was Egyptian; his laboratory was at Caltech.\n· Aziz Sancar, born in Savur, Turkey, the seventh of eight children of parents who could not read — Nobel Prize in Chemistry 2015, for mapping DNA repair. Medical school in Istanbul; laboratory in North Carolina.\n· Omar Yaghi, born in Amman to a Palestinian refugee family in a house with no reliable electricity — now one of the most cited chemists alive, the founder of reticular chemistry, and a Wolf Prize laureate.\n\nSame minds. Same schools, in the early years. Different laboratories, different funding, different institutions that outlive the man who founded them — and a different result.\n\nThat is the whole finding, and it cuts against both sides of the argument at once. It destroys the claim that we lack the capacity. And it destroys the comfort of blaming everything outward, because what those men needed was not Western DNA. It was a functioning institution — which is a thing we built before, and a thing we can build again.",
      ar: "وهنا يجب على الصفحة أن تحتاط، لأنّ الجواب السهل باطل، والجواب الصادق أقوى منه.\n\n**الجواب السهل** أن يُقال: إنما يظنّون أنفسهم متقدّمين، وإذا نظرتَ في الإنتاج وجدتنا نحن المتقدّمين. وهذا غير صحيحٍ اليوم، وقولُه يُسقط سائر ما في هذه الصفحة. فالبحث العلميّ وبراءات الاختراع والمختبرات والجامعات ليست لنا في الغالب الأعمّ الآن. وقد قال هذا الموقع ذلك في القسم الذي قبله عن أنفسنا.\n\n**فماذا يُظهر الإنتاج إذن؟** يُظهر أنّ الفجوة في **الظروف** لا في **القدرة** — وثمّ تجربةٌ نظيفةٌ تُثبت ذلك:\n\nانقُل الأشخاص أنفسهم من مؤسّساتنا إلى مؤسّساتهم يتغيّر الإنتاج في الحال.\n\n· **أحمد زويل**، وُلد بدمنهور بمصر — نوبل في الكيمياء ١٩٩٩م، في تصوير التفاعلات بالفمتوثانية. تعليمه مصريّ، ومختبره في «كالتك».\n· **عزيز سنجار**، وُلد بصَوُر بتركيا، سابعَ ثمانية أبناءٍ لأبوين لا يقرآن — نوبل في الكيمياء ٢٠١٥م، في رسم آليّات إصلاح الحمض النوويّ. كلّيّة الطبّ بإسطنبول، والمختبر بكارولاينا الشماليّة.\n· **عمر ياغي**، وُلد بعمّان لأسرةٍ فلسطينيّةٍ لاجئة في بيتٍ لا كهرباء ثابتة فيه — وهو اليوم من أكثر الكيميائيّين استشهادًا بأبحاثهم، ومؤسّس «الكيمياء الشبكيّة»، وحائز جائزة وولف.\n\nالعقول نفسها. والمدارس نفسها في السنوات الأولى. ومختبراتٌ أخرى، وتمويلٌ آخر، ومؤسّساتٌ تبقى بعد مؤسّسها — فنتيجةٌ أخرى.\n\nوهذا هو المستفاد كلُّه، وهو يقطع في الجهتين معًا: يُبطل دعوى أنّنا نقصنا قدرةً، ويُبطل راحةَ إحالة كلّ شيءٍ إلى الخارج — فما احتاج أولئك الرجال إلى جيناتٍ غربيّة، وإنما احتاجوا إلى **مؤسّسةٍ تعمل**. وتلك شيءٌ بنيناه من قبل، ونقدر أن نبنيه من جديد.",
      src: "Nobel Prize in Chemistry: Ahmed Zewail (1999), Aziz Sancar (2015) · Omar Yaghi, Wolf Prize in Chemistry (2018)",
      srcAr: "نوبل في الكيمياء: أحمد زويل (١٩٩٩م)، وعزيز سنجار (٢٠١٥م) · وعمر ياغي، جائزة وولف في الكيمياء (٢٠١٨م)",
      rank: "documented"
    },
    {
      id: "gm-notallofthem",
      part: "answer",
      h: "And the correction we owe them, if we mean what we said about judging fairly",
      hAr: "والإنصاف الذي ندين لهم به، إن كنّا نعني ما قلناه في العدل",
      en: "“The West thinks we are idiots” is the same sentence, in the same shape, as “Muslims are all fanatics.” If the second is a lie because it collapses a billion people into one type, the first is a lie for exactly the same reason.\n\nAnd the record does not support it.\n\nGeorge Sarton, the American historian who effectively founded the modern history of science, divided his great survey into periods and named them after Muslims — the Time of al-Biruni, the Time of Ibn Rushd — and wrote that the main task of the ninth to twelfth centuries was carried out by Muslims. Donald Routledge Hill and Aydin Sayili spent careers documenting Muslim engineering and astronomy. The manuscripts we quote from are catalogued and preserved in Leiden, Berlin, Paris and Oxford, and much of what we know about our own scientists we know because Western scholars indexed them.\n\nSo the picture is real and the erasure is real — AND there are people inside that same civilisation who spent their lives fighting it.\n\nWhich brings this section back to the rule it opened with, and to what you said yourself: judge yourself before you judge others, take the good and leave the bad, and be able to hear the other side. That rule does not have an exception for the people who were unfair to us. If it did, it would not be a rule — it would just be our turn.",
      ar: "قولُ «الغرب يرانا حمقى» هو الجملة نفسها بالبناء نفسه من قول «المسلمون كلّهم متعصّبون». فإن كانت الثانية كذبًا لأنها تختصر مليارًا في نمطٍ واحد، فالأولى كذبٌ للسبب عينه.\n\nوالسجلّ لا يشهد لها.\n\nفجورج سارتون، المؤرّخ الأمريكيّ الذي أسّس تاريخ العلوم الحديث، قسّم مسحه الكبير عصورًا وسمّاها بأسماء مسلمين — «عصر البيرونيّ»، «عصر ابن رشد» — وكتب أنّ العمل الأعظم في القرون من التاسع إلى الثاني عشر إنما نهض به المسلمون. وأفنى دونالد رَوتلِدج هِل وأيدين صاييلي أعمارهما في توثيق الهندسة والفلك عند المسلمين. والمخطوطات التي ننقل منها مفهرسةٌ محفوظةٌ في لايدن وبرلين وباريس وأكسفورد، وكثيرٌ ممّا نعرفه عن علمائنا نعرفه لأنّ باحثين غربيّين فهرسوهم.\n\nفالصورة حقيقيّة، والمحو حقيقيّ — **و**في تلك الحضارة نفسها من أفنى عمره في مقاومتهما.\n\nوبهذا يعود القسم إلى القاعدة التي افتُتح بها، وإلى ما قلتَه أنت: حاسِب نفسك قبل غيرك، وخُذ الحسن ودَعِ السيّئ، واقدِر على سماع الطرف الآخر. وهذه القاعدة ليس فيها استثناءٌ لمن ظلمنا؛ ولو كان فيها ذلك لما كانت قاعدة، وإنما كانت **دورَنا** في الظلم.",
      src: "George Sarton, Introduction to the History of Science (1927–1948) · Donald R. Hill on Islamic engineering · Aydin Sayili on the observatory in Islam",
      srcAr: "جورج سارتون، «مقدّمة في تاريخ العلم» (١٩٢٧–١٩٤٨م) · دونالد ر. هِل في الهندسة الإسلاميّة · أيدين صاييلي في المرصد في الإسلام",
      rank: "documented"
    },
    {
      id: "gm-week",
      part: "do",
      h: "What a young person actually does about it this week",
      hAr: "وماذا يصنع الشابّ في هذا الأسبوع",
      en: "Nothing on this page is worth reading if it ends in an opinion. So:\n\n· Read fifty pages of your own tradition. Not a clip, not a thread — a book, and finish it.\n· Learn one real skill properly this year, to the standard where somebody would pay for it. That is what the men on this page did.\n· Call the relative you have not called. The family being described in those statistics is not automatically safe here.\n· Take one thing from them and use it — a system, a habit of exactness, a way of keeping records — and say openly where you got it.\n· And before you post a criticism of anyone, ask whether you have applied it to yourself first this week.\n\nThat is the whole method: take the good, leave the bad, know your own, hear the other side, and start with yourself.",
      ar: "لا قيمة لصفحةٍ تنتهي إلى رأي. فإليك ما يُعمل:\n\n· اقرأ خمسين صفحةً من تراثك. لا مقطعًا ولا سلسلة تغريدات — بل كتابًا، وأتمّه.\n· وأتقِن مهارةً واحدةً هذا العام إتقانًا يُدفع فيه المال. وهذا الذي صنعه رجال هذه الصفحة.\n· واتّصل بالقريب الذي لم تتّصل به. فالأسرة التي وصفتها تلك الأرقام ليست عندنا في مأمنٍ تلقائيّ.\n· وخُذ منهم شيئًا واستعمله — نظامًا، أو عادةَ ضبطٍ، أو طريقةَ حفظِ سجلّات — وقُل من أين أخذتَه.\n· وقبل أن تنشر نقدًا لأحد، اسأل: هل طبّقتَه على نفسك هذا الأسبوع؟\n\nوهذا هو المنهج كلّه: خُذ الحسن، ودَعِ السيّئ، واعرف ما عندك، واسمع الطرف الآخر، وابدأ بنفسك.",
      rank: "reasoning"
    }
  ],

  notice: "Every figure above is from a named public source, and the direction of each trend is not in dispute. Exact numbers move year to year, so the source is named rather than a decimal quoted — check them. And nothing here is a claim that Muslim societies are free of these problems: the section on ourselves is there precisely because we are not.",
  noticeAr: "كلُّ رقمٍ أعلاه من مصدرٍ عامٍّ مُسمًّى، واتّجاه كلّ ظاهرةٍ غير متنازَعٍ فيه. والأرقام الدقيقة تتغيّر من سنةٍ إلى سنة، فسُمّي المصدر ولم يُنقل الكسر العشريّ — فراجِعها. وليس فيما تقدّم دعوى أنّ مجتمعات المسلمين خاليةٌ من هذه الآفات: وإنما وُضع القسم الذي عن أنفسنا لأنّها ليست خالية."
};
