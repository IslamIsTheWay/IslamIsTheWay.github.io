/* ============================================================
   MORALS — الأخلاق: أين ذهبت، ومن الذي أوصلها إلى هنا
   guidance.html#morals.  Rendered by renderMorals().

   WHY THIS SECTION EXISTS, AND WHY IT OPENS THE WAY IT DOES.
   The owner asked for a section on morals and their decline. The
   argument he gave for it is the reason it is worth writing, and
   it is not the usual one:

     "the generation you are mocking is actually a generation
      that came from under your hand. So that's a problem that
      you created."

   That is an accountability inversion, and it is what keeps this
   section from being one more complaint about the young. Every
   card here is addressed to somebody RESPONSIBLE — a parent, a
   man with eyes, a person in a house — and never to a victim of
   somebody else's choices.

   THE SPLIT WITH THE GOLDEN AGE PAGE. He asked explicitly not to
   write the same words twice. js/golden-mirror.js already carries
   the CIVILISATIONAL half: the West's own published figures on
   loneliness, family and drugs (gm-loneliness, gm-family,
   gm-drugs), the assumption of inferiority (gm-inferiority), and
   the word people think makes them a man (gm-grownup). None of
   that is repeated here. This file is the PERSONAL and FAMILY
   half: who formed the child, what a home does to one, and where
   the line sits between a man and a woman who are not related.
   Each page links to the other instead of restating it.

   ON THE HARDEST PART. He said a great deal about women, and he
   also said this: "both sides are responsible. No side is a
   hundred percent responsible, and no side is a hundred percent
   right." So the section on men and women OPENS WITH THE MEN,
   because that is the order the Quran itself uses — 24:30 is
   addressed to the believing men, and 24:31 to the believing
   women after it. A section that reversed that order would be
   both less true to the text and less true to what he asked for.

   ON WHAT IS TEXT AND WHAT IS APPLICATION. Being alone with a
   non-mahram is forbidden by an explicit hadith. "Keep the
   conversation inside its reason" is the scholars' APPLICATION of
   33:32 and of blocking the means, and the card says which is
   which. Presenting an application as though it were a text is
   the one thing this site does not do.

   Every proof was read out of the record before it was quoted:
   al-Bukhari 9, 893, 1385, 3484, 5233, 6117; and the verses from
   this site's own js/quran-text.js.
   ============================================================ */

const MORALS = {
  title: "Morals — where they went, and who took them there",
  titleAr: "الأخلاق — أين ذهبت، ومن الذي أوصلها إلى هنا",
  intro: "Every generation says the one after it is worse. This section takes that complaint seriously enough to ask the next question: where did that generation come from, and who formed it? The answer is uncomfortable, and it is the only answer that leaves anything in your hands.",
  introAr: "ما من جيلٍ إلا قال إنّ الذي بعده أسوأ منه. وهذا القسم يأخذ تلك الشكوى مأخذ الجدّ حتى يسأل ما بعدها: من أين جاء ذلك الجيل، ومن الذي صاغه؟ والجوابُ ثقيل، وهو الجوابُ الوحيد الذي يُبقي في يدك شيئًا.",

  groups: [
    {
      id: "mr-mirror", icon: "🪞",
      title: "The complaint, turned around",
      titleAr: "الشكوى، مقلوبةً",
      lead: "Start here, because nothing else in this section works until this is settled.",
      leadAr: "ابدأ من هنا، فليس في هذا القسم ما يستقيم قبل أن تستقرّ هذه.",
      items: [
        {
          id: "mo-shepherd", icon: "🐑",
          title: "The generation you are complaining about is the one you raised",
          titleAr: "الجيلُ الذي تشكو منه هو الجيلُ الذي ربّيتَه",
          plain: "Ask an older man what he thinks of this generation and you will hear that they are rude, that they waste their time, that they were never taught properly, that life was made too easy for them. Every word of it may be true. But turn it around and look at what has just been said: this generation did not arrive from another country. It came out of your houses. A complaint about how the young turned out is a report on the people who formed them.",
          plainAr: "اسأل شيخًا كبيرًا عن هذا الجيل تسمع أنهم قليلو أدب، مضيّعون لأوقاتهم، لم يُحسَن تأديبُهم، ويسّرت لهم الحياةُ أكثر ممّا ينبغي. وقد يكون ذلك كلُّه حقًّا. ولكن اقلب الكلام وانظر ما الذي قيل الآن: هذا الجيلُ لم يأتِ من بلدٍ آخر، وإنما خرج من بيوتكم. فالشكوى من حال الأبناء إخبارٌ عن حال من ربّاهم.",
          example: "This is not said to shame anyone. It is said because it is the only version of the complaint that comes with something to do. \"They are bad\" leaves you nothing. \"They became what we made them\" hands the next twenty years back to you — and hands the same responsibility to us, about the children in our houses right now.",
          exampleAr: "وليس هذا تعييرًا لأحد، وإنما هو الصورةُ الوحيدة من الشكوى التي يتعلّق بها عمل. فقولك «هم فاسدون» لا يترك بيدك شيئًا، وقولك «صاروا إلى ما صنعناه بهم» يردّ إليك العشرين سنةً القادمة — ويُلزمنا نحن بالمثل في أبنائنا الذين في بيوتنا الآن.",
          proof: "Every one of you is a shepherd, and every one of you is responsible for his flock. The leader is a shepherd and is responsible for his flock; a man is a shepherd over his household and is responsible for his flock; a woman is a shepherd over her husband's house and his children and is responsible for them.",
          proofAr: "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ، الْإِمَامُ رَاعٍ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ فِي أَهْلِهِ وَهُوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالْمَرْأَةُ رَاعِيَةٌ فِي بَيْتِ زَوْجِهَا وَوَلَدِهِ وَهِيَ مَسْئُولَةٌ عَنْهُمْ",
          ref: "Sahih al-Bukhari, Hadith 893",
          refAr: "صحيح البخاري، حديث ٨٩٣",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          keys: ["young people today", "this generation", "kids these days", "youth are bad", "generation gap", "no respect", "raised badly", "whose fault", "parents blame",
                 "جيل اليوم", "هذا الجيل", "الشباب اليوم", "قلة أدب", "من المسؤول", "التربية", "لوم الشباب", "الأجيال"]
        },
        {
          id: "mo-fitrah", icon: "🌱",
          title: "No child is born like this",
          titleAr: "ما من مولودٍ يُولد هكذا",
          plain: "Children are not born bad. They are born on the fitrah — clean, with nothing written on them yet — and then everything around them begins writing. What they hear at the table, what they see between their parents, what the street shows them, what the screen rewards. A child raised where coarse speech is normal will speak coarsely, and then go further than the adults did, because going further is how a young person gets noticed.",
          plainAr: "ليس الأبناءُ يولدون فاسدين، وإنما يولدون على الفطرة نقيّةً لم يُكتب عليها شيءٌ بعد، ثم يبدأ كلُّ ما حولهم في الكتابة عليها: ما يسمعونه على المائدة، وما يرونه بين أبويهم، وما يعرضه عليهم الشارع، وما تكافئهم عليه الشاشة. والولدُ ينشأ حيث يكون الكلامُ البذيء عاديًّا فيتكلّم به، ثم يزيد على من قبله، لأنّ الزيادةَ هي التي يُلتفت بها إلى الصغير.",
          example: "That last part is the mechanism, and it is worth naming: a young person who wants to be seen will go one step past whatever is normal around him. So whatever a society treats as normal is not where it stays — it is where the NEXT step starts from.",
          exampleAr: "وهذا الأخيرُ هو المِفصل وحقُّه أن يُسمّى: فالصغيرُ الذي يريد أن يُرى يتجاوز المألوفَ حوله بخطوة. فما تعدّه الجماعةُ عاديًّا ليس هو موضعَ الوقوف، بل هو الموضعُ الذي تبدأ منه الخطوةُ التالية.",
          proof: "No child is born except upon the fitrah, and it is his parents who make him a Jew, a Christian or a Magian.",
          proofAr: "مَا مِنْ مَوْلُودٍ إِلَّا يُولَدُ عَلَى الْفِطْرَةِ، فَأَبَوَاهُ يُهَوِّدَانِهِ أَوْ يُنَصِّرَانِهِ أَوْ يُمَجِّسَانِهِ",
          ref: "Sahih al-Bukhari, Hadith 1385",
          refAr: "صحيح البخاري، حديث ١٣٨٥",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          keys: ["children born", "fitrah", "born innocent", "nature or nurture", "environment", "bad influence", "peer pressure", "why are kids like this",
                 "الفطرة", "يولد على الفطرة", "البيئة", "التأثير", "رفقة السوء", "لماذا الأولاد هكذا", "النشأة"]
        },
        {
          id: "mo-loop", icon: "🔁",
          title: "And it compounds, which is why it feels faster every decade",
          titleAr: "وهي تتراكم، ولذلك تبدو أسرع في كلِّ عقد",
          plain: "A mother raising a daughter today was herself raised by a mother who had more of this than she does. So she passes on a little less than she received, and her daughter will pass on a little less again. Nobody in the chain intended it. Each link only ever gave what it had — and each link had slightly less to give.",
          plainAr: "الأمُّ التي تربّي ابنتَها اليومَ ربّتها أمٌّ كان عندها من هذا أكثرُ ممّا عندها هي، فتُورِث أقلَّ ممّا وَرِثت، وتُورِث ابنتُها أقلَّ من ذلك. ولم يقصد أحدٌ في السلسلة ذلك، وإنما أعطت كلُّ حلقةٍ ما عندها — وكان عند كلِّ حلقةٍ أقلُّ ممّا كان عند التي قبلها.",
          example: "Which is the real answer to \"why is it getting worse so quickly?\" It is not that people became worse. It is that a loss compounds: what one generation merely stops teaching, the next does not know exists. And it is also the good news, because a compounding chain can be interrupted at any single link — by one person deciding to hand on more than they were given.",
          exampleAr: "وهذا هو الجوابُ الحقيقيّ عن قولهم: «لِمَ يزداد الأمرُ سوءًا بهذه السرعة؟» فليس الناسُ ازدادوا سوءًا، وإنما النقصُ يتراكم: فما يكفّ جيلٌ عن تعليمه لا يعرف الذي بعده أنه كان موجودًا. وفي هذا بشارةٌ أيضًا، فالسلسلةُ المتراكمة تنقطع عند أيِّ حلقةٍ واحدة، بأن يعزم رجلٌ أو امرأةٌ على أن يُورِث أكثر ممّا وَرِث.",
          keys: ["getting worse", "every generation worse", "why so fast", "decline", "grandparents", "my mother", "passed down", "cycle", "break the cycle",
                 "يزداد سوءا", "كل جيل أسوأ", "الانحدار", "جدتي", "أمي", "التوريث", "الحلقة", "أكسر الحلقة"]
        }
      ]
    },

    {
      id: "mr-home", icon: "🏠",
      title: "What actually forms a person",
      titleAr: "ما الذي يصوغ الإنسان حقًّا",
      lead: "Long before school and long before the internet, there is a room with two adults in it.",
      leadAr: "قبل المدرسة بزمنٍ وقبل الشبكة بزمن، ثَمَّ غرفةٌ فيها بالغان.",
      items: [
        {
          id: "mo-house", icon: "🚪",
          title: "A child raised inside a fight does not come out neutral",
          titleAr: "الولدُ يُربَّى في خصامٍ لا يخرج منه سليمًا",
          plain: "The command is to guard your family from the Fire, and the house is where that starts or fails. A child who grows up watching his parents shout — or worse, watching hands raised — does not simply witness it and move on. It settles in as fear that does not switch off, and it teaches him what a marriage is before anyone gets to tell him otherwise. He will carry that picture into his own house.",
          plainAr: "الأمرُ أن تقيَ أهلك النار، والبيتُ هو موضعُ ابتداءِ ذلك أو فشلِه. والولدُ ينشأ يرى أبويه يتصايحان — أو ما هو أشدّ، يرى الأيدي تُرفع — فلا يمرّ ذلك به مرورًا، بل يستقرّ فيه خوفًا لا ينطفئ، ويعلّمه ما الزواجُ قبل أن يعلّمه أحدٌ غيرَ ذلك، ثم يحمل تلك الصورة إلى بيته هو.",
          example: "And the Quran describes the marriage it intends in one line — that He placed between you affection and mercy, and that you find rest in one another. Rest is the word. A house that is not restful is not merely an unhappy house; it is a house producing the next generation's idea of normal.",
          exampleAr: "وقد وصف القرآنُ الزواجَ المقصود في سطرٍ واحد: أن جعل بينكم مودّةً ورحمة، وأن تسكنوا إليها. والسكنُ هو اللفظ. فالبيتُ الذي لا سكنَ فيه ليس بيتًا شقيًّا فحسب، بل هو بيتٌ يصنع تصوّرَ الجيل القادم عن المألوف.",
          proof: "O you who have believed, protect yourselves and your families from a Fire whose fuel is people and stones.",
          proofAr: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ قُوٓا۟ أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًۭا وَقُودُهَا ٱلنَّاسُ وَٱلْحِجَارَةُ",
          ref: "Surah at-Tahrim (66:6)",
          refAr: "سورة التحريم (٦٦:٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy.",
          extraProofAr: "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً",
          extraRef: "Surah ar-Rum (30:21)",
          extraRefAr: "سورة الروم (٣٠:٢١)",
          keys: ["parents fighting", "arguing in front of children", "shouting at home", "domestic violence", "hitting", "anxiety", "broken home", "my parents fight", "scared at home",
                 "خصام الوالدين", "الشجار أمام الأولاد", "الصراخ في البيت", "الضرب", "القلق", "بيت مضطرب", "أبي وأمي يتشاجران"]
        },
        {
          id: "mo-luqman", icon: "👨‍👦",
          title: "What one father actually said to his son",
          titleAr: "ما قاله أبٌ واحدٌ لابنه",
          plain: "The Quran preserves a father teaching his son, and it is worth seeing what he chose to say. Not one word about status, money or what the neighbours think. He starts with what the boy must never do — give away what belongs to Allah alone. Then: keep the prayer. Stand for what is right and speak against what is wrong. Be patient with what comes to you. Do not turn your face from people in contempt, and do not swagger. Be moderate in how you walk, and lower your voice.",
          plainAr: "حفظ القرآنُ أبًا يعظ ابنه، وحقُّه أن يُنظر فيما اختار أن يقوله. ليس فيه حرفٌ عن جاهٍ ولا مالٍ ولا قول الناس. بدأ بما لا يجوز للغلام أن يفعله أبدًا: أن يصرف لغير الله ما هو له وحده. ثم: أقم الصلاة. وقُم بالمعروف وانهَ عن المنكر. واصبر على ما أصابك. ولا تُعرض بوجهك عن الناس تكبّرًا، ولا تمشِ مرحًا. واقصد في مشيك، واغضض من صوتك.",
          example: "Read that list again as a curriculum. Belief first, then worship, then courage, then patience — and then four lines on how to carry yourself among people: your face, your walk, your bearing, your voice. Manners were not an afterthought tacked on to the religion. They were half of what the man taught his child.",
          exampleAr: "أعِد النظر في هذه الجملة على أنها منهج: عقيدةٌ أوّلًا، ثم عبادة، ثم شجاعة، ثم صبر — ثم أربعُ كلماتٍ في هيئتك بين الناس: وجهك، ومشيك، وقوامك، وصوتك. فما كانت الأخلاقُ فضلةً أُلحقت بالدين، بل كانت نصفَ ما علّمه الرجلُ ولدَه.",
          proof: "O my son, establish prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you … And do not turn your cheek in contempt toward people and do not walk through the earth exultantly … And be moderate in your pace and lower your voice.",
          proofAr: "يَٰبُنَىَّ أَقِمِ ٱلصَّلَوٰةَ وَأْمُرْ بِٱلْمَعْرُوفِ وَٱنْهَ عَنِ ٱلْمُنكَرِ وَٱصْبِرْ عَلَىٰ مَآ أَصَابَكَ … وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِى ٱلْأَرْضِ مَرَحًا … وَٱقْصِدْ فِى مَشْيِكَ وَٱغْضُضْ مِن صَوْتِكَ",
          ref: "Surah Luqman (31:17-19)",
          refAr: "سورة لقمان (٣١:١٧-١٩)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["how to raise children", "raising kids", "teaching my son", "teaching my daughter", "luqman", "parenting", "what to teach", "manners for children",
                 "كيف أربي أولادي", "التربية", "أعلم ابني", "أعلم ابنتي", "لقمان", "تربية الأبناء", "الأدب للأطفال"]
        },
        {
          id: "mo-shame", icon: "🫣",
          title: "When shame goes, there is nothing left holding the rest",
          titleAr: "إذا ذهب الحياءُ لم يبقَ ما يمسك الباقي",
          plain: "Hayaa — the sense that stops you before you do something low — is not a small politeness. It is called a branch of faith, and it is the internal brake. The Prophet ﷺ put what happens when it is gone as plainly as it can be put: if you feel no shame, then do whatever you like. That is not permission. It is a description of what a person becomes when the brake is removed.",
          plainAr: "الحياءُ — وهو ما يمنعك قبل أن تأتي الدنيّة — ليس أدبًا صغيرًا، بل سُمّي شعبةً من الإيمان، وهو الزاجرُ الباطن. وقد بيّن النبيُّ ﷺ ما يكون عند فقده أبينَ ما يكون: «إذا لم تستحِ فاصنع ما شئت». وليست إذنًا، وإنما هي وصفٌ لما يصير إليه المرءُ إذا رُفع عنه الزاجر.",
          example: "And notice what happened to the word itself. Modesty used to describe someone worth trusting. Now it is used to mean backward — and its opposite is worn as proof that a person is grown, free and modern. When a society flips the meaning of a word, the behaviour follows the word.",
          exampleAr: "وتأمّل ما أصاب اللفظَ نفسه: كان الحياءُ يوصف به من يُؤتمن، فصار يُراد به التخلّف، وصار ضدُّه يُلبس دليلًا على أنّ صاحبه رجلٌ حرٌّ عصريّ. وإذا قلبت الجماعةُ معنى كلمةٍ تبع السلوكُ الكلمة.",
          proof: "Indeed, among what people have grasped from the words of earlier prophethood is: if you feel no shame, then do as you wish.",
          proofAr: "إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ: إِذَا لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْتَ",
          ref: "Sahih al-Bukhari, Hadith 3484",
          refAr: "صحيح البخاري، حديث ٣٤٨٤",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          extraProof: "Modesty brings nothing but good.",
          extraProofAr: "الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ",
          extraRef: "Sahih al-Bukhari, Hadith 6117",
          extraRefAr: "صحيح البخاري، حديث ٦١١٧",
          link: "golden.html#mirror",
          linkEn: "And what happened to the language itself — on the Golden Age page",
          linkAr: "وما أصاب اللسانَ نفسه — في صفحة العصر الذهبي",
          keys: ["shame", "hayaa", "modesty", "swearing", "bad language", "cursing", "shameless", "no respect", "vulgar", "why do people talk like that",
                 "الحياء", "قلة الحياء", "الشتم", "الألفاظ البذيئة", "السباب", "الوقاحة", "قلة الأدب"]
        }
      ]
    },

    {
      id: "mr-line", icon: "🚧",
      title: "Men and women — where the line actually is",
      titleAr: "الرجال والنساء — أين الحدُّ حقًّا",
      lead: "This part is written in the order the Quran uses, and that order is not an accident.",
      leadAr: "هذا البابُ مكتوبٌ على ترتيب القرآن، وليس ترتيبُه اتفاقًا.",
      items: [
        {
          id: "mo-gaze", icon: "👁️",
          title: "It begins with the men — and Allah says so first",
          titleAr: "يبدأ بالرجال — وقد بدأ اللهُ بهم",
          plain: "Two verses come one after the other. The first is addressed to the believing MEN: lower your gaze and guard yourselves. Only then comes the same instruction to the believing women. So before a single word is said about what anyone else is wearing, the man has already been given his own instruction, and it does not depend on her at all.",
          plainAr: "آيتان جاءت إحداهما إثر الأخرى: أولاهما خطابٌ للمؤمنين: أن يغضّوا من أبصارهم ويحفظوا فروجهم، ثم جاء الأمرُ نفسُه للمؤمنات بعدها. فقبل أن يُقال حرفٌ واحدٌ في لباس أحد، يكون الرجلُ قد أُخذ عليه أمرُه، وهو أمرٌ لا يتعلّق بها البتّة.",
          example: "Which settles the commonest argument on this subject before it starts. \"She was dressed like that\" is not an answer, because your instruction arrived first and was not conditional. Your eyes are yours. That is the part you will be asked about.",
          exampleAr: "وبهذا تنقطع أشهرُ المنازعات في هذا الباب قبل أن تبدأ. فقولك «هي التي لبست كذا» ليس جوابًا، لأنّ أمرك سبق ولم يكن معلَّقًا بها. بصرُك بصرُك، وهو الذي تُسأل عنه.",
          proof: "Tell the believing men to lower their gaze and guard their private parts. That is purer for them. Indeed, Allah is Acquainted with what they do. — And tell the believing women to lower their gaze and guard their private parts …",
          proofAr: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا۟ مِنْ أَبْصَٰرِهِمْ وَيَحْفَظُوا۟ فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ ۗ إِنَّ ٱللَّهَ خَبِيرٌۢ بِمَا يَصْنَعُونَ • وَقُل لِّلْمُؤْمِنَٰتِ يَغْضُضْنَ مِنْ أَبْصَٰرِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ",
          ref: "Surah an-Nur (24:30-31)",
          refAr: "سورة النور (٢٤:٣٠-٣١)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["lower the gaze", "looking at women", "eyes", "she was dressed", "her fault", "cant stop looking", "temptation", "whose responsibility",
                 "غض البصر", "النظر إلى النساء", "العين", "هي التي لبست", "لا أستطيع الغض", "الفتنة", "مسؤولية من"]
        },
        {
          id: "mo-near", icon: "🛑",
          title: "The verse forbids the road, not only the destination",
          titleAr: "الآيةُ تحرّم الطريق لا الغايةَ وحدها",
          plain: "The Quran does not say \"do not commit it.\" It says do not COME NEAR it. That is a different instruction, and it is the whole logic of this section: the thing is guarded by shutting the approaches to it, not by standing at the last step and relying on willpower.",
          plainAr: "لم يقل القرآن: «لا تفعلوه»، بل قال: «ولا تقربوا». وهذا أمرٌ آخر، وهو منطقُ هذا الباب كلِّه: يُحمى الشيءُ بسدّ طرقه، لا بالوقوف عند آخر خطوةٍ اتّكالًا على قوّة النفس.",
          example: "So the questions people find fussy — the messages, the being alone, the long private conversations — are not extra rules bolted on. They are the road the verse named. Nobody arrives anywhere in one step; they arrive after a hundred small ones that each looked harmless.",
          exampleAr: "فالمسائلُ التي يستثقلها الناسُ — المراسلة، والخلوة، وطولُ الحديث بين اثنين — ليست أحكامًا زائدةً أُلحقت، بل هي الطريقُ التي سمّتها الآية. وما وصل أحدٌ إلى شيءٍ بخطوةٍ واحدة، وإنما بعد مئةٍ صغيرةٍ بدت كلُّ واحدةٍ منها بلا أثر.",
          proof: "And do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way.",
          proofAr: "وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةًۭ وَسَآءَ سَبِيلًۭا",
          ref: "Surah al-Isra (17:32)",
          refAr: "سورة الإسراء (١٧:٣٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["do not approach", "why so strict", "its just talking", "nothing happened", "slippery slope", "small things", "where is the line",
                 "لا تقربوا", "لماذا التشديد", "مجرد كلام", "لم يحدث شيء", "الذرائع", "أين الحد"]
        },
        {
          id: "mo-context", icon: "💬",
          title: "Speech with someone you are not related to stays inside its reason",
          titleAr: "الكلامُ مع غير المحرم يبقى في سببه",
          plain: "Two things, and they are not the same in strength. The first is a text: a man and a woman who are not related do not sit alone together — the hadith is explicit. The second is the scholars' application of it to ordinary life: when there IS a reason to speak — work, study, a transaction — the conversation stays inside that reason. The task, the assignment, the matter at hand.",
          plainAr: "أمران، وليسا في القوّة سواء. الأوّل نصّ: لا يخلو رجلٌ بامرأةٍ ليست منه بمحرم، والحديثُ صريح. والثاني تطبيقُ أهل العلم له في المعاش: فإذا وُجد سببٌ للكلام — عملٌ أو دراسةٌ أو معاملة — بقي الكلامُ في ذلك السبب: في المسألة، وفي المهمّة، وفي الأمر الذي بينكما.",
          example: "What falls outside it is the part people find hard to hear, and it is small and specific: how was your day, what did you do at the weekend, your perfume is nice, that suits you. None of that is the work. And the Quran's own guidance on manner — do not be soft in speech, so that one in whose heart is a sickness should not be moved — is about HOW something is said, not only what. The safest position, and the one this site takes, is that where there is no reason, there is no conversation.",
          exampleAr: "والذي يخرج عن ذلك هو ما يثقل على الناس سماعُه، وهو يسيرٌ معيَّن: كيف كان يومك، وماذا صنعتَ في العطلة، وعطرك طيّب، وهذا يليق بك. وليس شيءٌ من ذلك من العمل. وتوجيهُ القرآن في الهيئة — «فلا تخضعن بالقول فيطمع الذي في قلبه مرض» — إنما هو في كيفيّة القول لا في مادّته وحدها. والأحوطُ، وهو الذي يقوله هذا الموقع: حيث لا سببَ فلا كلام.",
          proof: "No man is alone with a woman except that the third of them is Shaytan.",
          proofAr: "لَا يَخْلُوَنَّ رَجُلٌ بِامْرَأَةٍ إِلَّا كَانَ ثَالِثَهُمَا الشَّيْطَانُ",
          ref: "Jami at-Tirmidhi, Hadith 1171",
          refAr: "جامع الترمذي، حديث ١١٧١",
          strength: "Outside the two Sahihs in this wording — it is in the Sunan. The prohibition itself is in al-Bukhari 5233, in the wording \"no man is alone with a woman except with a mahram.\"",
          strengthAr: "هذا اللفظ خارج الصحيحين، وهو في السنن. وأصلُ النهي في صحيح البخاري (٥٢٣٣) بلفظ: «لا يخلونّ رجلٌ بامرأةٍ إلا مع ذي محرم».",
          note: "The being-alone prohibition is a text. \"Keep the conversation inside its reason\" is the scholars' application of it and of 33:32 — a strong and widely held position, and this page does not dress an application up as a verse.",
          noteAr: "فتحريمُ الخلوة نصّ. وأمّا «إبقاءُ الكلام في سببه» فتطبيقٌ لأهل العلم له ولآية الأحزاب (٣٣:٣٢)، وهو قولٌ قويٌّ عليه الجمهور، ولا تُلبِس هذه الصفحةُ التطبيقَ لَبوسَ النصّ.",
          keys: ["talking to girls", "talking to women", "talking to men", "opposite gender", "is it haram to talk", "female colleague", "classmate", "chatting", "texting", "dm", "friendship between man and woman", "male friend", "female friend", "mixing", "khulwa", "being alone",
                 "الكلام مع البنات", "الكلام مع النساء", "الكلام مع الرجال", "الجنس الآخر", "زميلة", "زميل", "المحادثة", "الرسائل", "صداقة بين رجل وامرأة", "صديقة", "الاختلاط", "الخلوة"]
        },
        {
          id: "mo-double", icon: "⚖️",
          title: "The double standard, and it runs both ways",
          titleAr: "الكيلُ بمكيالين، وهو جارٍ في الجهتين",
          plain: "A man who is known for talking to many women is called charming, experienced, a man. A woman known for talking to many men is called something no one would say to her face. It is the same act, judged by two rules — and the rule bends in favour of whoever is doing the judging.",
          plainAr: "الرجلُ يُعرف بكثرة كلامه مع النساء فيُقال: ظريفٌ مجرَّبٌ رجل. والمرأةُ تُعرف بكثرة كلامها مع الرجال فيُقال فيها ما لا يُقال في وجهها. والفعلُ واحد، والحكمُ بمكيالين — ويميل المكيالُ دائمًا إلى جهة الحاكم.",
          example: "The religion does not have two rules here. The instruction in 24:30 came to the men first, and the same instruction came to the women immediately after. Whoever is quickest to condemn the other side is usually the one who has not yet read their own line. And this is the answer to the whole quarrel: it is not a war between men and women. Both were addressed, both were addressed about themselves, and neither was told to police the other before doing their own part.",
          exampleAr: "وليس في الشرع في هذا حكمان. فأمرُ آية النور جاء الرجالَ أوّلًا، وجاء النساءَ إثره بعينه. وأسرعُ الفريقين إلى ذمّ الآخر هو في الغالب الذي لم يقرأ سطرَه بعد. وهذا هو الجوابُ عن الخصومة كلِّها: ليست حربًا بين الرجال والنساء، فقد خوطب الفريقان، وخوطب كلٌّ منهما في نفسه، ولم يُؤمر أحدُهما بمحاسبة الآخر قبل أن يقوم بما عليه.",
          keys: ["double standard", "unfair", "men can but women cant", "hypocrisy", "why is it different for women", "sexism", "war between men and women",
                 "ازدواجية المعايير", "الكيل بمكيالين", "ظلم", "يجوز للرجل ولا يجوز للمرأة", "لماذا الفرق", "حرب بين الرجال والنساء"]
        }
      ]
    },

    {
      id: "mr-where", icon: "🧭",
      title: "Where this ends, and where it stops",
      titleAr: "إلى أين ينتهي، وأين يقف",
      lead: "Two different questions, and the second is the one worth your time.",
      leadAr: "سؤالان مختلفان، والثاني هو الجديرُ بوقتك.",
      items: [
        {
          id: "mo-direction", icon: "📉",
          title: "A standard that moves every decade is not a standard",
          titleAr: "المعيارُ الذي يتحرّك كلَّ عقدٍ ليس معيارًا",
          plain: "Each generation is told that the previous line was old-fashioned, and that objecting to the new one makes you out of touch. But notice that the argument never runs the other way. The line only ever moves in one direction, and every time it moves, the same argument is used to move it again. Something that only travels one way is not being debated. It is being carried.",
          plainAr: "يُقال لكلّ جيلٍ إنّ الحدَّ الذي قبله قديم، وإنّ الاعتراض على الجديد دليلُ الانقطاع عن العصر. وتأمّل أنّ الحجّة لا تجري في الاتجاه الآخر قطُّ. فالحدُّ لا يتحرّك إلا في جهةٍ واحدة، وكلّما تحرّك استُعملت الحجّةُ نفسُها لتحريكه مرّةً أخرى. وما لا يسير إلا في جهةٍ واحدة ليس موضعَ نظر، وإنما هو مسوقٌ سوقًا.",
          example: "So the honest question is not whether this generation's line is acceptable. It is: what is the line for the one after it, and the one after that — given that each is told the same thing, by the same argument? Anyone can work out where a road goes by looking at which way it slopes. You do not need to reach the end of it to know.",
          exampleAr: "فالسؤالُ المنصف ليس: أمقبولٌ حدُّ هذا الجيل؟ وإنما: ما حدُّ الذي بعده، والذي بعده — ولكلٍّ يُقال ما قيل للأوّل بالحجّة نفسها؟ ويستطيع كلُّ أحدٍ أن يعرف إلى أين يفضي الطريقُ بالنظر إلى جهة انحداره، ولا يحتاج أن يبلغ آخره ليعلم.",
          keys: ["where does it end", "getting worse", "next generation", "standards", "old fashioned", "out of touch", "boomer", "slippery slope", "society changing",
                 "إلى أين", "الجيل القادم", "المعايير", "رجعي", "متخلف", "تغير المجتمع", "الانحدار"]
        },
        {
          id: "mo-stops", icon: "✋",
          title: "It stops in one house, and that is not a small thing",
          titleAr: "يقف في بيتٍ واحد، وليس ذلك بالقليل",
          plain: "Nobody reading this can fix a society. But the chain in the first card is made of houses, and a chain breaks at a link. One person who decides that in their house speech is clean, the prayer happens, the parents do not humiliate each other in front of the children, and what is taught is more than what was received — that person has broken it, for everyone who comes after them.",
          plainAr: "ليس في قرّاء هذا من يُصلح مجتمعًا. غير أنّ السلسلة التي في البطاقة الأولى مؤلَّفةٌ من بيوت، والسلسلةُ تنقطع عند حلقة. فمن عزم على أن يكون في بيته الكلامُ نظيفًا، والصلاةُ قائمة، والوالدان لا يُذلّ أحدُهما الآخر أمام الأولاد، وأن يُعلَّم فيه أكثرُ ممّا وُرِث — فقد قطعها هو، عمّن يجيء بعده.",
          example: "That is also the only place any of this was ever going to start. The first card said the generation came out of the houses. It follows that the next one will too.",
          exampleAr: "وهو أيضًا الموضعُ الوحيد الذي كان لهذا أن يبدأ منه. فقد قالت البطاقةُ الأولى إنّ الجيل خرج من البيوت، ويلزم من ذلك أنّ الذي بعده سيخرج منها كذلك.",
          proof: "And those who say: Our Lord, grant us from among our spouses and offspring comfort to our eyes, and make us an example for the righteous.",
          proofAr: "وَٱلَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَٰجِنَا وَذُرِّيَّٰتِنَا قُرَّةَ أَعْيُنٍۢ وَٱجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
          ref: "Surah al-Furqan (25:74)",
          refAr: "سورة الفرقان (٢٥:٧٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          link: "#revival",
          linkEn: "Why we fell and the way back — the same argument at the scale of a people",
          linkAr: "لماذا سقطنا وكيف نعود — الحجّةُ نفسُها على مستوى أمّة",
          keys: ["what can i do", "one person", "change society", "fix my family", "my house", "start somewhere", "too big to fix", "hopeless",
                 "ماذا أفعل", "شخص واحد", "إصلاح المجتمع", "أصلح أسرتي", "بيتي", "من أين أبدأ", "الأمر أكبر مني"]
        }
      ]
    }
  ],

  closing: "This section names a problem and puts it where something can be done about it. It is not a licence to look down on anybody — least of all the young, who did not choose the room they were raised in. If it reads as an accusation against someone else, it has been read backwards.",
  closingAr: "هذا القسم يسمّي داءً ويضعه حيث يمكن العملُ فيه، وليس إذنًا في احتقار أحد، ولا سيّما الصغار، فما اختاروا الغرفةَ التي نشأوا فيها. فإن قُرئ اتهامًا لغيرك فقد قُرئ مقلوبًا."
};
