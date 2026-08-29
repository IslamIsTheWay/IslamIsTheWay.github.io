/* ============================================================
   BY WHAT, THEN? — فبأيِّ شيءٍ نحكم؟
   guidance.html#standard.  Rendered by renderGrouped("standardBox").

   WHY THIS SECTION EXISTS. The owner described a conversation
   every one of us has had. You advise someone to come back, and
   he answers: "give me an argument that isn't religious."

   His reply is the whole section, and it is not a defence — it
   is a return question:

     "If I give you an argument away from religion, what are we
      going to give our judgements from?"

   That turns the exchange around. The person asking assumes
   there is a neutral place to stand and that religion is the
   optional extra. So this section does not argue FOR religion
   first. It walks the alternatives one at a time — culture,
   tradition, majority opinion, personal conscience, humanity's
   own record, the kindness of people's hearts, your own heart,
   and desire — and asks of each: does it hold still long enough
   to be measured against?

   THE ORPHAN EXAMPLE IS HIS, AND IT CARRIES THE SECTION. A man's
   father dies; his sister is under ten. He reasons that she is
   too young for the money, so he will keep it. Nothing in that
   thought announces itself as evil — it arrives dressed as
   prudence. That is precisely why "my heart will tell me" fails
   as a standard, and the Quran answers the case directly and by
   name in 4:6.

   ON TONE. This section must never read as contempt for the
   person asking the question. He is not being stupid; he is
   assuming something almost everyone assumes. So every card
   takes the alternative seriously and gives it its strongest
   form before showing where it moves.

   THE HONEST QUALIFICATION IS NOT OPTIONAL. Islam does not
   say the conscience is worthless — there is an explicit hadith
   in Muslim making the heart's unease a sign of sin. So the
   section ends by saying what the heart IS for: it is the
   instrument, not the standard. Leaving that out would win the
   argument by hiding evidence, which is the one thing this site
   does not do.

   THE SPLIT WITH THE OTHER PAGES. golden.html carries the
   CIVILISATIONAL form of this same question — a society that
   removed the standard and what its own figures then showed.
   It is not repeated here, and this is not repeated there.
   Each links to the other.

   Every proof was read out of the record before it was quoted:
   al-Bukhari 2227; Muslim's Book of Virtue (cited BY BOOK, never
   by number — the machine editions number Muslim sequentially).
   Verses come from this site's own js/quran-text.js.
   ============================================================ */

const STANDARD = {
  title: "\"Give me an argument that isn't religious\"",
  titleAr: "«هاتِ لي دليلًا من غير الدين»",
  intro: "This is the sentence that ends most of these conversations, and it sounds fair. But look at what it quietly assumes: that there is a neutral place to stand, and that religion is the thing added on top of it. So before answering it, the question worth asking back is the simplest one there is — if we set religion aside, what exactly are we judging by instead? This section takes every candidate seriously, one at a time.",
  introAr: "هذه هي الجملةُ التي تنتهي عندها أكثرُ هذه المحاورات، وظاهرُها الإنصاف. ولكن انظر إلى ما تفترضه في صمت: أنّ ثَمَّ موضعًا محايدًا يُوقف عليه، وأنّ الدين هو الزائدُ فوقه. فقبل الجواب عنها يحسن أن يُردّ أبسطُ سؤال: إن نحّينا الدين، فبأيِّ شيءٍ نحكم إذًا؟ وهذا القسمُ يأخذ كلَّ مُرشَّحٍ مأخذ الجدّ، واحدًا واحدًا.",

  groups: [
    {
      id: "sd-ask", icon: "❓",
      title: "First, what is actually being asked",
      titleAr: "أوّلًا: ما الذي طُلب حقًّا؟",
      lead: "One card, because the whole section turns on getting this straight.",
      leadAr: "بطاقةٌ واحدة، فإنّ القسم كلَّه يدور على تحرير هذا.",
      items: [
        {
          id: "sd-request", icon: "🔄",
          title: "The question, turned around",
          titleAr: "السؤال، مقلوبًا",
          plain: "When someone says \"argue without religion,\" he is not asking you to be quiet. He is asking you to move to a different standard and argue from there. So the fair thing is to ask which standard he has in mind — because the moment you say \"this is wrong,\" you are measuring against something, and so is he.\n\nThere is no view from nowhere. Everybody judges by something. The only real question is what.",
          plainAr: "إذا قال لك قائل: «حاجِجْني من غير دين» فليس يطلب منك السكوت، وإنما يطلب أن تنتقل إلى ميزانٍ آخر فتحاجّه منه. فالعدلُ أن تسأله: وأيُّ ميزانٍ تعني؟ فإنك حين تقول «هذا خطأ» فأنت تزن بشيء، وهو كذلك يزن بشيء.\n\nوليس ثَمَّ نظرٌ من لا موضع. كلُّ أحدٍ يحكم بشيء، وإنما السؤالُ الحقيقيّ: بأيِّ شيء؟",
          example: "And notice this is not a trick to avoid answering. It is the only way the conversation can continue at all. If we never name the ruler, we are two people arguing about the length of a table with no tape measure between us — and the loudest one wins, which is not the same as the right one winning.",
          exampleAr: "ولاحظ أنّ هذا ليس حيلةً للهروب من الجواب، وإنما هو الوجهُ الوحيد الذي يمكن أن تستمرّ به المحاورة. فإن لم نُسمِّ المسطرة كنّا رجلين يتنازعان في طول مائدةٍ وليس بينهما ذراعٌ يُقاس بها — فيغلب أرفعُهما صوتًا، وليس ذلك هو غلبةَ المحقّ.",
          keys: ["argument without religion", "prove it without religion", "secular argument", "why do i need religion", "non religious reason", "logic not religion", "convince me without quran",
                 "دليل من غير الدين", "برهان بلا دين", "لماذا الدين", "اقنعني بالعقل", "بدون قرآن", "حجة عقلية"]
        }
      ]
    },

    {
      id: "sd-cand", icon: "⚖️",
      title: "The candidates, one at a time",
      titleAr: "المرشَّحون، واحدًا واحدًا",
      lead: "Each of these is a real answer that real people give. Each gets its strongest form here before we ask the one question that matters: does it hold still?",
      leadAr: "كلُّ واحدٍ ممّا يأتي جوابٌ حقيقيٌّ يقوله أناسٌ حقيقيّون، وكلُّه يُعرض هنا في أقوى صوره قبل أن نسأله السؤالَ الذي يعنينا: هل يثبت؟",
      items: [
        {
          id: "sd-culture", icon: "🎭",
          title: "Culture — which was different when your grandfather was your age",
          titleAr: "الثقافة — وقد كانت غير هذه حين كان جدُّك في سنّك",
          plain: "Culture is the first answer most people reach for, and it is the easiest to test. Take anything your society is certain about today and ask what it said about the same thing fifty years ago, and what it will say in fifty more. The answers are not the same, and everyone knows they are not.\n\nSo judging by culture means your right and wrong were set by the year you happened to be born in. Move the birth certificate and the verdict moves with it.",
          plainAr: "الثقافةُ أوّلُ ما يفزع إليه أكثرُ الناس، وهي أيسرُها اختبارًا. خذ ما تجزم به جماعتُك اليوم واسأل: ماذا كانت تقول فيه قبل خمسين سنة؟ وماذا ستقول فيه بعد خمسين؟ ليس الجوابُ واحدًا، والناس يعلمون أنه ليس واحدًا.\n\nفالحكمُ بالثقافة معناه أنّ حقَّك وباطلك قرّرتهما السنةُ التي وُلدت فيها اتفاقًا؛ فإن حرّكتَ تاريخ الميلاد تحرّك الحكمُ معه.",
          example: "This is not an argument that culture is worthless. Culture carries language, food, dress, hospitality, poetry — an enormous amount that is good and that Islam left completely alone. It is an argument that culture is not a RULER. You cannot measure a thing with an instrument that changes length while you are holding it.",
          exampleAr: "وليس هذا قدحًا في الثقافة، فإنّ الثقافة تحمل اللسان والطعام واللباس والضيافة والشعر — وشيئًا كثيرًا جدًّا من الخير تركه الإسلامُ على حاله. وإنما هو قولٌ بأنّ الثقافة ليست مِسطرة؛ فإنك لا تقيس شيئًا بآلةٍ يتغيّر طولُها وهي في يدك.",
          keys: ["culture", "cultural values", "society decides", "times change", "modern values", "old fashioned", "different era",
                 "الثقافة", "العادات", "المجتمع يقرر", "تغير الزمن", "قيم عصرية", "كل زمن"]
        },
        {
          id: "sd-tradition", icon: "🏚️",
          title: "Tradition — and the Quran attacks this one harder than you do",
          titleAr: "التقاليد — والقرآن ينكرها أشدَّ من إنكارك",
          plain: "The second answer is: our traditions, what we inherited, what has always been done. And this one changes too — slower, which makes it feel solid, but it changes. Every tradition being defended today replaced one that was defended just as fiercely before it.\n\nWorth knowing: the Quran is not the friend of \"we inherited it.\" It attacks that reasoning by name, in the mouths of people refusing revelation on exactly that basis.",
          plainAr: "والجوابُ الثاني: تقاليدُنا، وما ورثناه، وما جرى عليه العملُ دائمًا. وهذه أيضًا تتغيّر — ولكن على مهل، فيُخيَّل إليك أنها ثابتة، وهي تتغيّر. فما من تقليدٍ يُدافع عنه اليوم إلا وقد حلّ محلَّ تقليدٍ كان يُدافَع عنه بمثل هذه الحميّة قبله.\n\nومما ينبغي أن يُعلم: أنّ القرآن ليس نصيرًا لقولهم «هكذا ورثنا»، بل هو ينكر هذه الحجّة باسمها، ويحكيها على ألسنة قومٍ ردّوا الوحيَ بها بعينها.",
          proof: "And when it is said to them, \"Follow what Allah has revealed,\" they say, \"Rather, we will follow that which we found our fathers doing.\" Even though their fathers understood nothing, nor were they guided?",
          proofAr: "وَإِذَا قِيلَ لَهُمُ ٱتَّبِعُوا۟ مَآ أَنزَلَ ٱللَّهُ قَالُوا۟ بَلْ نَتَّبِعُ مَآ أَلْفَيْنَا عَلَيْهِ ءَابَآءَنَآ ۗ أَوَلَوْ كَانَ ءَابَآؤُهُمْ لَا يَعْقِلُونَ شَيْـًۭٔا وَلَا يَهْتَدُونَ",
          ref: "Surah Al-Baqarah (2:170)",
          refAr: "سورة البقرة (٢:١٧٠)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          example: "So a Muslim is in the odd position of agreeing with the critic here, and going further than him. Islam does not ask you to obey your grandfather. It asks you to obey Allah — and when a tradition contradicts that, the tradition goes, however old and however ours.",
          exampleAr: "فالمسلم في هذا الموضع يوافق المعترض بل يزيد عليه؛ فالإسلامُ لا يأمرك بطاعة جدّك، وإنما يأمرك بطاعة الله. فإذا خالف العُرفُ ذلك طُرح العُرف، وإن قدُم وإن كان لنا.",
          keys: ["tradition", "traditions", "inherited", "our fathers", "this is how we do it", "customs", "heritage",
                 "التقاليد", "الموروث", "آباؤنا", "هكذا وجدنا", "العرف", "التراث"]
        },
        {
          id: "sd-most", icon: "🗳️",
          title: "What most people think — which is a headcount, not a proof",
          titleAr: "ما عليه الأكثر — وهو عَدٌّ للرؤوس لا برهان",
          plain: "The third answer is the majority. If most people agree something is fine, it is fine. This one feels the most reasonable of all, and it is the easiest to break, because history is a list of things the majority was certain about and wrong about.\n\nAnd notice the shape of the failure: the majority is not a fixed thing either. It is a count that moves every year — so it is the same problem as culture, wearing a more official coat.",
          plainAr: "والجوابُ الثالث: الأكثريّة؛ فإن اتفق أكثرُ الناس على أنّ شيئًا لا بأس به فلا بأس به. وهذا أحسنُها في الظاهر وأسهلُها انتقاضًا، فإنّ التاريخ سجلٌّ لأشياء جزم بها الأكثرُ وكانوا فيها مخطئين.\n\nوتأمّل صورة الخلل: فالأكثريّة أيضًا ليست ثابتة، وإنما هي عَدٌّ يتحرّك في كلِّ عام — فهي عِلّةُ الثقافة نفسها في ثوبٍ أرسم.",
          proof: "And if you obey most of those upon the earth, they will mislead you from the way of Allah. They follow not except assumption, and they are not but falsifying.",
          proofAr: "وَإِن تُطِعْ أَكْثَرَ مَن فِى ٱلْأَرْضِ يُضِلُّوكَ عَن سَبِيلِ ٱللَّهِ ۚ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنْ هُمْ إِلَّا يَخْرُصُونَ",
          ref: "Surah Al-An'am (6:116)",
          refAr: "سورة الأنعام (٦:١١٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["most people", "majority", "everyone does it", "society agrees", "public opinion", "normal now", "everybody thinks",
                 "أكثر الناس", "الأغلبية", "الكل يفعله", "الرأي العام", "صار عاديا", "الناس كلها"]
        },
        {
          id: "sd-morals", icon: "🧭",
          title: "\"Morals\" — the worst of them, because yours are not his",
          titleAr: "«الأخلاق» — وهي أسوأُها، لأنّ أخلاقك ليست أخلاقه",
          plain: "The fourth answer is the one people are proudest of: I do not need a book, I have morals. And this is the weakest of all of them, for a reason that is easy to miss — morals differ from one person to the next, and each person experiences his own as obvious.\n\nAsk ten people whether lying to protect a friend is wrong, whether a debt to a rich man must be repaid as carefully as a debt to a poor one, whether it is acceptable to abandon a parent who was cruel. You will not get ten matching answers. You will get ten people, each certain, each with a different line.",
          plainAr: "والجوابُ الرابع هو الذي يفخر به الناس أكثر: «لا أحتاج كتابًا، عندي أخلاق». وهذا أضعفُها جميعًا لعلّةٍ يسهل أن تُغفل: أنّ الأخلاق تختلف من إنسانٍ إلى إنسان، وكلُّ امرئٍ يجد أخلاقه هو بديهيّة.\n\nسل عشرةً: أيحلّ الكذبُ لحماية صديق؟ أيلزمك دينُ الغنيّ كما يلزمك دينُ الفقير سواءً بسواء؟ أيسوغ هجرُ والدٍ أساء إليك؟ لن تظفر بعشرة أجوبةٍ متفقة، وإنما بعشرة رجالٍ كلُّهم موقن، ولكلٍّ حدٌّ غير حدّ صاحبه.",
          example: "And that is with ten people from one street. Widen it to a country and the disagreement is not a rounding error — it is total. A standard that gives a different verdict depending on whose chest it is sitting in is not a standard. It is a preference with a serious face on.",
          exampleAr: "وهذا في عشرةٍ من شارعٍ واحد؛ فإن وسّعتَ الدائرة إلى بلدٍ لم يكن الخلافُ حاشيةً، بل كان الخلافَ كلَّه. وميزانٌ يختلف حكمُه باختلاف الصدر الذي هو فيه ليس ميزانًا، وإنما هو هوًى لبس وجهًا جادًّا.",
          keys: ["i have morals", "moral compass", "my values", "good person without religion", "atheist morals", "be a good person", "my own principles",
                 "عندي أخلاق", "أخلاقي", "إنسان طيب", "أخلاق بلا دين", "مبادئي", "ضميري كافي"]
        },
        {
          id: "sd-record", icon: "⛓️",
          title: "Humanity itself — look at the record before you trust it",
          titleAr: "الإنسانيّة نفسها — فانظر في سجلّها قبل أن تأمنها",
          plain: "The fifth answer is the biggest: humanity. Human dignity, human rights, our shared sense of what a person is owed. And the answer to this one is not an argument. It is a record.\n\nHumanity owned humanity. For most of recorded history, in nearly every civilisation, the buying and selling of people was normal, legal, respectable and defended by the educated. It was not a fringe crime. It was the system, and the people inside it had morals, culture, tradition and majority opinion — all four of the standards above — and all four told them it was fine.",
          plainAr: "والجوابُ الخامس أكبرُها: الإنسانيّة؛ كرامةُ الإنسان وحقوقُه وما نتواطأ عليه ممّا يستحقّه الإنسان. والجوابُ عن هذا ليس حِجاجًا، وإنما هو سجلّ.\n\nفقد ملكت الإنسانيّةُ الإنسانيّة. ففي عامّة التاريخ المدوّن، وفي كلِّ حضارةٍ تقريبًا، كان بيعُ الناس وشراؤهم أمرًا عاديًّا مشروعًا وجيهًا يدافع عنه أهلُ العلم. ولم يكن جريمةً على الهامش، بل كان هو النظام؛ وكان مَن فيه أصحابَ أخلاقٍ وثقافةٍ وتقاليدَ ورأيِ أكثريّة — وهي المعايير الأربعة المتقدّمة كلُّها — وأربعتُها كانت تقول لهم: لا بأس.",
          example: "And it is not finished. Britain's Slavery Abolition Act was 1833; the American Thirteenth Amendment 1865 — and Mauritania, the last country to make slavery a crime rather than merely to abolish it, did so in 2007, within the lifetime of most people reading this. The ILO, Walk Free and the IOM estimate in their Global Estimates of Modern Slavery (2022) that 49.6 million people were living in modern slavery on any given day in 2021 — 27.6 million of them in forced labour. It did not end. It moved out of sight.",
          exampleAr: "وهي لم تنتهِ بعد. فقانونُ إلغاء الرقّ في بريطانيا كان سنة ١٨٣٣، والتعديلُ الثالث عشر في أمريكا سنة ١٨٦٥ — وموريتانيا، وهي آخرُ دولةٍ جعلت الاسترقاق جريمةً لا مجرّد ملغيّ، فعلت ذلك سنة ٢٠٠٧، في عُمر أكثر من يقرأ هذا. وتقدّر منظّمةُ العمل الدوليّة و«ووك فري» والمنظّمةُ الدوليّة للهجرة في تقريرها «التقديرات العالميّة للرقّ المعاصر» (٢٠٢٢) أنّ ٤٩٫٦ مليون إنسانٍ كانوا في رقٍّ معاصرٍ في أيِّ يومٍ من سنة ٢٠٢١، منهم ٢٧٫٦ مليونًا في عملٍ قسريّ. فما انتهى الأمر، وإنما انتقل عن الأنظار.",
          proof: "Allah said: three I will be the adversary of on the Day of Resurrection — a man who gave his word by Me then broke it; a man who sold a free person and consumed his price; and a man who hired a labourer, took full work from him, and did not give him his wage.",
          proofAr: "قَالَ اللَّهُ: ثَلَاثَةٌ أَنَا خَصْمُهُمْ يَوْمَ الْقِيَامَةِ: رَجُلٌ أَعْطَى بِي ثُمَّ غَدَرَ، وَرَجُلٌ بَاعَ حُرًّا فَأَكَلَ ثَمَنَهُ، وَرَجُلٌ اسْتَأْجَرَ أَجِيرًا فَاسْتَوْفَى مِنْهُ وَلَمْ يُعْطِ أَجْرَهُ",
          ref: "Sahih al-Bukhari, Book of Sales and Trade, Hadith 2227",
          refAr: "صحيح البخاري، كتاب البيوع، حديث ٢٢٢٧",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          note: "Read what that middle line is doing. Selling a free human being is placed beside breaking an oath sworn by Allah and beside cheating a workman of his wage — and the One speaking says He personally takes the other side. That was said in a world where the slave market was the ordinary furniture of every city on earth.",
          noteAr: "وتأمّل ما تصنعه الجملةُ الوسطى: فقد جُعل بيعُ الحرِّ إلى جانب الغدر بعهدٍ أُعطي بالله، وإلى جانب بخسِ الأجير أجرَه — والقائلُ سبحانه يقول إنه هو خصمُه. قيل هذا في دنيا كانت فيها سوقُ الرقيق أثاثًا عاديًّا لكلِّ مدينةٍ على وجه الأرض.",
          keys: ["humanity", "human rights", "slavery", "modern slavery", "human dignity", "we evolved past", "people are basically good", "human values",
                 "الإنسانية", "حقوق الإنسان", "العبودية", "الرق", "الاتجار بالبشر", "كرامة الإنسان", "الناس طيبون"]
        },
        {
          id: "sd-kindness", icon: "💔",
          title: "The kindness in people's hearts — and what people have been killed over",
          titleAr: "ما في قلوب الناس من رحمة — وفيمَ قُتل الناس",
          plain: "The sixth answer is the softest: people are basically kind, and kindness is enough. Then look at what human beings have decided is a sufficient reason to hurt somebody. The colour of a skin. The shape of a body. Which village a family came from. Which way a name is pronounced.\n\nNone of these are ancient. All of them are current. And every one of them was arrived at by ordinary people consulting exactly the kindness that was supposed to be the standard.",
          plainAr: "والجوابُ السادس ألطفُها: أنّ في الناس رحمةً في الأصل، وأنّ الرحمةَ تكفي. ثم انظر فيمَ رأى بنو آدم أنه سببٌ كافٍ لأذى الإنسان: في لون الجلد، وهيئة الجسد، ومن أيِّ قريةٍ جاء أهلُ الرجل، وكيف تُنطق كنيتُه.\n\nوليس شيءٌ من هذا قديمًا، بل كلُّه قائمٌ اليوم. وكلُّه إنما انتهى إليه أناسٌ عاديّون استفتوا تلك الرحمةَ بعينها التي زُعم أنها الميزان.",
          example: "And there is a colder version. Organs are removed from people who never agreed to sell them and are moved through a market that exists because there are buyers — buyers who are not monsters in a story but people with families, who worked out, privately, that their own life was worth more than a stranger's kidney. Not one of them had to abandon kindness to get there. They just applied it to a smaller circle.",
          exampleAr: "وثَمَّ صورةٌ أقسى: تُنتزع الأعضاءُ من أناسٍ ما رضُوا ببيعها، فتجري في سوقٍ إنما قامت لأنّ ثَمَّ مشترين — ومشتروها ليسوا وحوشًا في حكاية، وإنما هم أناسٌ لهم أهلٌ وبيوت، قرّروا في أنفسهم أنّ حياتهم أثمنُ من كُلية غريب. وما احتاج واحدٌ منهم إلى أن يخلع الرحمة ليبلغ ذلك، وإنما ضيّق دائرتها فحسب.",
          proof: "Indeed Allah does not look at your forms or your wealth, but He looks at your hearts and your deeds.",
          proofAr: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
          ref: "Sahih Muslim, Book of Virtue (Kitab al-Birr)",
          refAr: "صحيح مسلم، كتاب البرّ والصلة والآداب",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          extraProof: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.",
          extraProofAr: "يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَٰكُم مِّن ذَكَرٍۢ وَأُنثَىٰ وَجَعَلْنَٰكُمْ شُعُوبًۭا وَقَبَآئِلَ لِتَعَارَفُوٓا۟ ۚ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ",
          extraRef: "Surah Al-Hujurat (49:13)",
          extraRefAr: "سورة الحجرات (٤٩:١٣)",
          keys: ["people are kind", "human kindness", "racism", "skin colour", "body shaming", "organ trafficking", "we are all human", "basic decency",
                 "الناس رحماء", "العنصرية", "لون البشرة", "شكل الجسم", "بيع الأعضاء", "كلنا بشر", "الرحمة كافية"]
        },
        {
          id: "sd-self", icon: "🫥",
          title: "Your own heart — and the thought that arrives dressed as prudence",
          titleAr: "قلبُك أنت — والخاطرُ يأتيك في ثوب الحكمة",
          plain: "The seventh answer is the most personal: I will know. I will feel it. My heart will tell me.\n\nThen take a real case. A man's father dies. He has a sister under ten. The inheritance is divided and her share is set aside — and he thinks: she is a child. She cannot manage money. She will lose it, or someone will take it from her. It is safer with me. I am not stealing it; I am holding it.\n\nRead that thought again. There is nothing in it that announces itself as evil. It arrives sounding like responsibility. That is the whole danger — the worst decisions of most people's lives did not feel wrong at the time. They felt sensible.",
          plainAr: "والجوابُ السابع أشدُّها خصوصيّة: «أنا أعرف، وأنا أُحسّ، وقلبي يدلّني».\n\nفخذ صورةً واقعة: مات أبو رجلٍ وله أختٌ دون العاشرة، فقُسم الميراثُ وأُفرز نصيبُها — فقال في نفسه: هي طفلة، لا تُحسن تدبير المال، ستضيّعه أو يأخذه منها آخذ، فهو عندي أحفظ. ولستُ آكله، وإنما أمسكه.\n\nفأعد النظر في هذا الخاطر: ليس فيه ما يُعلن أنه شرّ، وإنما يأتيك بصوت المسؤوليّة. وهذا هو الخطرُ كلُّه — فإنّ أسوأ ما قرّره أكثرُ الناس في أعمارهم لم يكن يبدو خطأً حين قرّروه، وإنما كان يبدو حصافةً.",
          example: "The Quran answers this exact case, by name, and it does not leave it to anybody's judgement. Test the orphan until she reaches marriageable age. If you see sound judgement in her, hand over her property. Do not eat it hastily before she grows up. And when you hand it over, bring witnesses.\n\nSo the ruling is: keep it safe — a bank, a locked place, whatever is genuinely secure — record it as hers, and give it to her when she can manage it. If she is already mature enough, give it to her now. And do it in front of witnesses, so that the transfer is not one day her word against yours.",
          exampleAr: "وقد أجاب القرآنُ عن هذه المسألة بعينها وباسمها، ولم يكلها إلى رأي أحد: أن ابتَلِ اليتيمةَ حتى تبلغ النكاح، فإذا آنستَ منها رشدًا فادفع إليها مالها، ولا تأكله بِدارًا أن تكبر، وإذا دفعتَه إليها فأشهِد.\n\nفالحكم: احفظه — في مصرفٍ أو موضعٍ مأمونٍ أو ما كان حرزًا حقيقةً — واكتبه باسمها، وادفعه إليها إذا أحسنت تدبيره. فإن كانت قد رشدت الآن فادفعه الآن. وليكن ذلك بشهود، لئلّا يصير الدفعُ يومًا قولَها في مقابل قولك.",
          proof: "And test the orphans until they reach marriageable age. Then if you perceive in them sound judgement, release their property to them. And do not consume it excessively and quickly, anticipating that they will grow up... Then when you release their property to them, bring witnesses upon them. And sufficient is Allah as Accountant.",
          proofAr: "وَٱبْتَلُوا۟ ٱلْيَتَٰمَىٰ حَتَّىٰٓ إِذَا بَلَغُوا۟ ٱلنِّكَاحَ فَإِنْ ءَانَسْتُم مِّنْهُمْ رُشْدًۭا فَٱدْفَعُوٓا۟ إِلَيْهِمْ أَمْوَٰلَهُمْ ۖ وَلَا تَأْكُلُوهَآ إِسْرَافًۭا وَبِدَارًا أَن يَكْبَرُوا۟ ۚ ... فَإِذَا دَفَعْتُمْ إِلَيْهِمْ أَمْوَٰلَهُمْ فَأَشْهِدُوا۟ عَلَيْهِمْ ۚ وَكَفَىٰ بِٱللَّهِ حَسِيبًۭا",
          ref: "Surah An-Nisa (4:6)",
          refAr: "سورة النساء (٤:٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "Indeed, those who devour the property of orphans unjustly are only consuming into their bellies fire. And they will be burned in a Blaze.",
          extraProofAr: "إِنَّ ٱلَّذِينَ يَأْكُلُونَ أَمْوَٰلَ ٱلْيَتَٰمَىٰ ظُلْمًا إِنَّمَا يَأْكُلُونَ فِى بُطُونِهِمْ نَارًۭا ۖ وَسَيَصْلَوْنَ سَعِيرًۭا",
          extraRef: "Surah An-Nisa (4:10)",
          extraRefAr: "سورة النساء (٤:١٠)",
          note: "And the mechanism has a name. Shaytan does not usually suggest a sin; he suggests a fear, and lets you reach the sin yourself. \"Satan threatens you with poverty and orders you to immorality, while Allah promises you forgiveness from Him and bounty\" (2:268). The whisper in the story above is not \"steal from your sister.\" It is \"you will not have enough.\"",
          noteAr: "وللآلة اسم: فإنّ الشيطان لا يعرض عليك الذنب في الغالب، وإنما يعرض عليك خوفًا ويدعك تبلغ الذنبَ بنفسك. ﴿ٱلشَّيْطَٰنُ يَعِدُكُمُ ٱلْفَقْرَ وَيَأْمُرُكُم بِٱلْفَحْشَآءِ وَٱللَّهُ يَعِدُكُم مَّغْفِرَةًۭ مِّنْهُ وَفَضْلًۭا﴾ [البقرة ٢:٢٦٨]. فالوسوسةُ في الحكاية المتقدّمة ليست «اسرق مال أختك»، وإنما هي «لن يكفيك».",
          keys: ["my heart will tell me", "i know right from wrong", "conscience", "gut feeling", "orphan money", "my sister inheritance", "keeping her money", "whisper", "waswas",
                 "قلبي يدلني", "أعرف الصواب", "الضمير", "مال اليتيم", "ميراث أختي", "أحفظ مالها", "الوسواس", "وسوسة الشيطان"]
        },
        {
          id: "sd-desire", icon: "🔥",
          title: "Desire — and the Quran already named this one a god",
          titleAr: "الهوى — وقد سمّاه القرآنُ إلهًا",
          plain: "The last candidate is the honest one that nobody says out loud: what I want. Most people do not choose this deliberately. They arrive at it by elimination — culture moved, tradition moved, everyone disagrees, so in the end I do what seems right to me, which usually means what I already wanted.\n\nThe Quran does not describe this as weakness. It describes it as worship, and gives the object of that worship a name.",
          plainAr: "والمرشَّح الأخير هو الصادقُ الذي لا يُصرَّح به: ما أشتهيه أنا. وأكثرُ الناس لا يختارونه قصدًا، وإنما ينتهون إليه بالإقصاء: تحرّكت الثقافةُ، وتحرّكت التقاليد، واختلف الناسُ جميعًا؛ فآخرُ الأمر أفعل ما يظهر لي، وهو في الغالب ما كنتُ أريده أصلًا.\n\nوالقرآنُ لا يصف هذا بالضعف، وإنما يصفه بالعبادة، ويسمّي المعبود.",
          proof: "Have you seen he who has taken as his god his own desire, and Allah has sent him astray due to knowledge and has set a seal upon his hearing and his heart and put over his vision a veil? So who will guide him after Allah?",
          proofAr: "أَفَرَءَيْتَ مَنِ ٱتَّخَذَ إِلَٰهَهُۥ هَوَىٰهُ وَأَضَلَّهُ ٱللَّهُ عَلَىٰ عِلْمٍۢ وَخَتَمَ عَلَىٰ سَمْعِهِۦ وَقَلْبِهِۦ وَجَعَلَ عَلَىٰ بَصَرِهِۦ غِشَٰوَةًۭ فَمَن يَهْدِيهِ مِنۢ بَعْدِ ٱللَّهِ",
          ref: "Surah Al-Jathiyah (45:23)",
          refAr: "سورة الجاثية (٤٥:٢٣)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          example: "And there is a verse that answers the whole section in one line — what would actually happen if the truth were set by what people wanted: \"But if the Truth had followed their inclinations, the heavens and the earth and whoever is in them would have been ruined\" (23:71). Not \"would have been slightly worse.\" Ruined. Because desires do not agree with each other, and a universe run on them is a universe with no fixed anything.",
          exampleAr: "وفي آيةٍ واحدةٍ جوابُ القسم كلِّه، وهي فيما لو كان الحقُّ تابعًا لما يشتهي الناس: ﴿وَلَوِ ٱتَّبَعَ ٱلْحَقُّ أَهْوَآءَهُمْ لَفَسَدَتِ ٱلسَّمَٰوَٰتُ وَٱلْأَرْضُ وَمَن فِيهِنَّ﴾ [المؤمنون ٢٣:٧١]. ولم يقل: لاعتراها بعضُ النقص، بل قال: لفسدت. لأنّ الأهواء لا تتفق، ودنيا تجري على الأهواء دنيا لا ثابت فيها البتّة.",
          keys: ["desire", "what i want", "do what feels right", "follow your heart", "my truth", "whatever makes me happy", "hawa",
                 "الهوى", "ما أريده", "افعل ما تشعر به", "اتبع قلبك", "حقيقتي", "ما يسعدني"]
        }
      ]
    },

    {
      id: "sd-left", icon: "🪨",
      title: "So what is left standing",
      titleAr: "فماذا بقي قائمًا؟",
      lead: "Every candidate above failed the same test, and it was always the same test: it moved.",
      leadAr: "سقط كلُّ مرشَّحٍ فيما تقدّم في اختبارٍ واحد، وهو الاختبارُ نفسه في كلِّ مرّة: أنه تحرّك.",
      items: [
        {
          id: "sd-stable", icon: "📏",
          title: "The one thing that does not move while you are measuring with it",
          titleAr: "الشيءُ الوحيد الذي لا يتحرّك وأنت تقيس به",
          plain: "That is the entire claim of this section, and it is a modest one. Not that Muslims are better people — the pages on this site say plainly and often that we are not, and that our own record has periods in it we cannot defend. The claim is narrower and harder to answer: revelation does not revise itself to match the year.\n\nThe verse forbidding a man to consume his sister's inheritance read the same in the eighth century as it does tonight. It did not soften when it became inconvenient, and it will not soften next year. Whatever else you say about a fixed standard, it can be argued with — and a standard you can argue with is a standard that exists.",
          plainAr: "وهذه هي دعوى القسم كلُّها، وهي دعوى متواضعة. ليست أنّ المسلمين خيرٌ من غيرهم — فصفحاتُ هذا الموقع تقول صراحةً وتكرارًا إنّا لسنا كذلك، وإنّ في سجلّنا نحن فتراتٍ لا نملك الدفاع عنها. وإنما الدعوى أضيق وأعسرُ ردًّا: أنّ الوحي لا يُنقّح نفسه ليوافق السنة التي أنت فيها.\n\nفالآيةُ التي تحرّم على الرجل أكلَ ميراث أخته كانت في القرن الثاني كما هي الليلة. لم تلِن حين ثقُلت، ولن تلين في العام القادم. ومهما قلتَ في الميزان الثابت فإنه ميزانٌ يمكن أن تخاصمه — والميزانُ الذي يمكن أن تخاصمه ميزانٌ موجود.",
          example: "Compare: try to argue with \"society has moved on.\" There is nothing there to take hold of. It is not a claim you can be shown to be wrong about, because it makes no claim — it reports a temperature.",
          exampleAr: "وقابِل بينه وبين قولهم: «تجاوز المجتمعُ ذلك». فليس ثَمَّ ما تُمسك به؛ وليست دعوى يمكن أن تُبيَّن مخالفتُها، لأنها لا تدّعي شيئًا، وإنما تُخبر عن درجة حرارة.",
          keys: ["religion doesnt change", "stable standard", "objective morality", "fixed rules", "why islam", "unchanging", "absolute right and wrong",
                 "الدين لا يتغير", "ميزان ثابت", "الحق المطلق", "أحكام ثابتة", "لماذا الإسلام", "لا يتبدل"]
        },
        {
          id: "sd-honest", icon: "🤍",
          title: "And the honest part: what your heart IS for",
          titleAr: "وأمّا الإنصاف: فما وظيفةُ قلبك؟",
          plain: "It would be easy to end here having argued that the conscience is worthless. That is not what Islam says, and pretending otherwise would win this argument by hiding evidence.\n\nThe Prophet ﷺ made the heart's unease a sign of sin — what unsettles your chest and what you would not want people to see. So the heart is genuinely a detector. It is simply not the standard. It is the instrument that reads the standard, and like every instrument it needs calibrating, which is exactly what a fixed reference is for.",
          plainAr: "كان يسهل أن ينتهي هذا القسم إلى أنّ الضمير لا قيمة له. وليس هذا قولَ الإسلام، وادّعاؤه ربحٌ للحجّة بإخفاء الدليل.\n\nفقد جعل النبيُّ ﷺ حَكَّ الصدر علامةً على الإثم: ما حاك في نفسك وكرهتَ أن يطّلع عليه الناس. فالقلبُ آلةُ كشفٍ حقيقيّة، وإنما ليس هو الميزان. هو الآلةُ التي تقرأ الميزان، وهو كسائر الآلات يحتاج إلى معايرة — وهذه هي وظيفةُ المرجع الثابت بعينها.",
          proof: "Righteousness is good character, and sin is what unsettles your chest and which you would dislike that people came to know of.",
          proofAr: "الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي صَدْرِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
          ref: "Sahih Muslim, Book of Virtue (Kitab al-Birr)",
          refAr: "صحيح مسلم، كتاب البرّ والصلة والآداب",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          example: "Which is why the orphan story matters so much. The brother's heart told him to keep the money and it told him kindly. A calibrated heart would have felt the same pull and known what to do with it.",
          exampleAr: "ولهذا كانت حكايةُ اليتيمة بهذا القدر من الأهمّيّة؛ فقد أفتاه قلبُه بإمساك المال، وأفتاه برفق. والقلبُ المعايَر كان سيجد الجاذبَ نفسه ويعرف ما يصنع به.",
          keys: ["conscience is enough", "listen to your heart", "istifta al qalb", "gut instinct", "feel bad about it", "guilt",
                 "الضمير يكفي", "استفت قلبك", "حاك في صدرك", "الإحساس بالذنب", "أشعر بالسوء"]
        }
      ]
    }
  ],

  closing: "None of this proves Islam by itself — that is a different argument, and the Quran page and the Verify page on this site are where it belongs. What this section establishes is narrower: that \"argue without religion\" is not a neutral request. It is a request to swap a fixed reference for a moving one, and every moving one on offer has already been shown, by our own history, to move in whichever direction the people holding it were already leaning.",
  closingAr: "وليس في هذا وحده إثباتٌ للإسلام؛ فتلك حجّةٌ أخرى موضعُها صفحةُ القرآن وصفحةُ التوثيق في هذا الموقع. وإنما الذي يقرّره هذا القسم أضيقُ من ذلك: أنّ قولهم «حاجِجْ بلا دين» ليس طلبًا محايدًا، وإنما هو طلبُ استبدال مرجعٍ ثابتٍ بمرجعٍ متحرّك؛ وكلُّ متحرّكٍ عُرض علينا فقد أثبت تاريخُنا نحن أنه يتحرّك في الوجهة التي كان أهلُه مائلين إليها أصلًا."
};
