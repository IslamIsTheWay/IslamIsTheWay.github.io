/* ============================================================
   WHO IS ALLAH — من هو الله؟ وما الذي يقدر عليه؟
   guidance.html#who.  Rendered by renderGrouped("whoBox").

   HIS REQUEST, and the shape follows it exactly. He asked for a
   section that explains in detail who Allah is and what He is
   capable of, and gave the reason himself — which is the reason
   this file is arranged the way it is:

     "Why were the prophets so faithful after all that happened
      to them, from torturing and getting out of their houses and
      leaving their money? The main reason is because they
      understood who is Allah and what He's capable of."

   So this is NOT a theology lesson. It is an answer to a
   practical question: what did the people who held on under
   torture know that we do not? The section is built to hand the
   reader that knowledge in the order they got it.

   FIVE THINGS HE ASKED FOR BY NAME AND ALL FIVE ARE HERE:
     · the 99 names, and why knowing them matters
     · what He promises believers and what He promises deniers
     · that an easy life may be the worst sign of all
     · who He loves and who He does not — so a reader can check
       which list he is on
     · that INTENTION alone earns reward: studying so that you
       can teach, working so that you can keep a family

   AND THE CLOSING IMAGE IS HIS, NOT MINE. A man is offered a
   wooden hut that will collapse in the first strong wind, or a
   palace with no limit on the stay. He wrote it; wh-choice keeps
   his framing and his words for it, because it is the sharpest
   thing in the section.

   ONE CORRECTION MADE INSIDE THE SECTION, and he asked for it
   himself: "we all go to heaven by the mercy of God, of course.
   But you need to do good deeds to reach the level to be able to
   get the mercy." That is exactly right and it is exactly what
   Muslim 7122 says — no one's deeds admit him, and the Prophet ﷺ
   included himself. wh-mercy states both halves so neither can
   be used to cancel the other.

   PLAIN WORDS THROUGHOUT — he asked for that twice. Every card
   opens with a `simple` box before anything else.

   Every proof read out of the record first: al-Bukhari 2736,
   5641, 6943; Muslim's Books of Faith, Zakat and Dhikr (cited by
   book, never by number); at-Tirmidhi 2396 with its status.
   Verses from this site's own js/quran-text.js.
   ============================================================ */

const WHO = {
  title: "Who Allah is, and what He is able to do",
  titleAr: "من هو الله؟ وما الذي يقدر عليه؟",
  intro: "The Companions were dragged over hot sand, sawn in half, driven out of their houses and stripped of everything they owned, and they did not move. That is not explained by willpower. They knew something, and it was not a secret — it is written down, and it is what this section sets out. Then, at the end, one comparison that decides everything.",
  introAr: "سُحب الصحابةُ على الرمضاء، ونُشر من قبلهم بالمنشار، وأُخرجوا من ديارهم، وسُلبوا ما يملكون، فما تزحزحوا. وليس هذا تفسيرُه قوّةَ عزيمة. وإنما علموا شيئًا، ولم يكن سرًّا — بل هو مكتوب، وهو الذي يبسطه هذا القسم. ثم في آخره مقارنةٌ واحدة يُحسم بها كلُّ شيء.",

  groups: [
    {
      id: "wg-who", icon: "☀️",
      title: "First — who He actually is",
      titleAr: "أوّلًا — من هو على الحقيقة",
      lead: "Four cards, and all four are the Quran answering the question directly rather than anybody's description of it.",
      leadAr: "أربعُ بطاقات، وكلُّها جوابُ القرآن عن السؤال مباشرةً، لا وصفُ أحدٍ له.",
      items: [
        {
          id: "wh-ahad", icon: "1️⃣",
          title: "Four short lines that answer it completely",
          titleAr: "أربعُ آياتٍ قصيرةٍ تجيب عن السؤال تمامًا",
          simple: "Somebody asked the Prophet ﷺ to describe his Lord. The answer was Surah al-Ikhlas — four lines. He is One. He is the One everything turns to and who needs nothing. He had no child and no parent. And there is nothing like Him at all.",
          simpleAr: "سُئل النبيُّ ﷺ أن ينسب لهم ربَّه، فكان الجوابُ سورة الإخلاص — أربعَ آيات: هو واحد. وهو الصمدُ الذي يُقصد ولا يحتاج. ولم يلد ولم يُولد. وليس له نظيرٌ البتّة.",
          plain: "Notice the method. Three of the four lines say what He is NOT — not more than one, not a father, not a son, not comparable to anything.\n\nThat is deliberate. Anything you can picture, you have pictured out of things you have seen. So the surah works by removing every wrong picture rather than giving you a new one to hold.\n\nAnd the one positive word in it is AS-SAMAD: the one everybody turns to in need, who Himself needs nothing and no one. Everything in existence leans on Him and He leans on nothing.",
          plainAr: "تأمّل الطريقة: ثلاثٌ من الأربع تقول ما ليس هو — ليس متعدّدًا، ولا والدًا، ولا مولودًا، ولا يشبهه شيء.\n\nوهذا قصد؛ فإنّ كلَّ ما تستطيع تصوّره فإنما صوّرته ممّا رأيت. فالسورةُ تعمل بنزع كلِّ صورةٍ خاطئة، لا بإعطائك صورةً جديدةً تمسكها.\n\nواللفظُ المُثبَت الوحيد فيها: ﴿ٱلصَّمَدُ﴾ — الذي تُقصد إليه الحوائجُ كلُّها وهو لا يحتاج إلى أحد. فكلُّ موجودٍ متّكئٌ عليه، وهو لا يتّكئ على شيء.",
          example: "And 42:11 states the rule in five words: THERE IS NOTHING LIKE HIM. Which means every comparison you have ever made — He is like a king, like a father, like a judge — is a comparison you are using to think with, not a description of Him.\n\nThat is also why the Quran spends far more time telling you what He DOES than what He is. You are not able to grasp Him. You are able to see what He does.",
          exampleAr: "وآيةُ الشورى تقرّر القاعدة في كلمات: ﴿لَيْسَ كَمِثْلِهِۦ شَىْءٌۭ﴾. ومعنى ذلك أنّ كلَّ تشبيهٍ خطر لك — كملكٍ أو كوالدٍ أو كقاضٍ — فهو تشبيهٌ تستعين به على التفكير، لا وصفٌ له سبحانه.\n\nولهذا أيضًا أنفق القرآنُ في بيان ما يفعل أضعافَ ما أنفق في بيان ما هو. فأنت لا تُطيق إدراكه، وإنما تُطيق أن ترى فعله.",
          proof: "Say: He is Allah, One. Allah, the One all turn to and who needs none. He neither begets nor is born. And there is none comparable to Him.",
          proofAr: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
          ref: "Surah Al-Ikhlas (112:1-4)",
          refAr: "سورة الإخلاص (١١٢:١-٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["who is allah", "who is god", "describe god", "what is allah like", "al ikhlas", "does god have a son", "is god one", "tawheed",
                 "من هو الله", "من ربك", "صفة الله", "الاخلاص", "هل لله ولد", "الله واحد", "التوحيد", "قل هو الله احد"]
        },
        {
          id: "wh-kursi", icon: "👑",
          title: "What He is capable of — read the greatest verse one line at a time",
          titleAr: "ما الذي يقدر عليه — اقرأ أعظمَ آيةٍ سطرًا سطرًا",
          simple: "Ayat al-Kursi is not a charm to hang on a wall. It is a list of what He is able to do, and every line takes something away from you and gives it to Him.",
          simpleAr: "آيةُ الكرسيّ ليست تميمةً تُعلَّق على جدار، وإنما هي عدٌّ لما يقدر عليه، وكلُّ جملةٍ فيها تنزع شيئًا منك وتضعه له.",
          plain: "AL-HAYY AL-QAYYUM — the Living, who holds everything else up. Every other living thing is being kept alive by something. He is not.\n\nNEITHER DROWSINESS NOR SLEEP TAKES HIM. The universe is not running on autopilot while He rests. Nothing is unattended for a second.\n\nTO HIM BELONGS WHAT IS IN THE HEAVENS AND THE EARTH. Including the thing you think you own.\n\nWHO CAN INTERCEDE WITH HIM EXCEPT BY HIS PERMISSION? Nobody has leverage over Him. There is no one to go through.\n\nHE KNOWS WHAT IS BEFORE THEM AND BEHIND THEM. Your past and your future, both, at once.\n\nAND THEY GRASP NOTHING OF HIS KNOWLEDGE EXCEPT WHAT HE WILLS. Every piece of knowledge any human has ever had was issued.\n\nHIS KURSI EXTENDS OVER THE HEAVENS AND THE EARTH, AND GUARDING THEM DOES NOT TIRE HIM. He is not straining.",
          plainAr: "﴿ٱلْحَىُّ ٱلْقَيُّومُ﴾ — الحيُّ الذي يقوم به كلُّ ما سواه. فكلُّ حيٍّ غيره يُمسكه شيء، وهو لا يُمسكه شيء.\n\n﴿لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ﴾ — فليس الكونُ يمضي بنفسه وهو ساكن. ولا يُترك شيءٌ لحظةً بلا رعاية.\n\n﴿لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ﴾ — ومنه الذي تحسب أنك تملكه.\n\n﴿مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ﴾ — فليس لأحدٍ عليه سلطان، ولا وسيطَ يُتوسّل به.\n\n﴿يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ﴾ — ماضيك ومستقبلك معًا في آن.\n\n﴿وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ﴾ — فكلُّ علمٍ ناله بشريٌّ قطُّ فقد أُعطيه.\n\n﴿وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا﴾ — لا يشقّ عليه.",
          example: "Now read the whole verse again with one question in your head: if this is true, what exactly are you afraid of?\n\nEvery fear a person carries is a fear of some other power — a boss, a government, an illness, a person with money, a future that might go wrong. This verse says all of it is inside something that does not sleep, is not tired, owns everything and knows the whole timeline.\n\nThat is what the Companions had that we do not. Not more courage. A more accurate map.",
          exampleAr: "ثم أعد قراءة الآية كلِّها وفي ذهنك سؤالٌ واحد: إن كان هذا حقًّا، فممّ أنت خائف بالضبط؟\n\nفكلُّ خوفٍ يحمله الإنسان خوفٌ من قدرةٍ أخرى: من رئيسٍ أو سلطانٍ أو مرضٍ أو صاحب مالٍ أو مستقبلٍ قد يسوء. وهذه الآيةُ تقول إنّ ذلك كلَّه داخلٌ في قبضةِ من لا ينام ولا يتعب ويملك كلَّ شيءٍ ويعلم الشريط كلَّه.\n\nوهذا هو الذي كان عند الصحابة وليس عندنا. لا شجاعةً أكثر، وإنما خريطةً أصحّ.",
          proof: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
          proofAr: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
          ref: "Surah Al-Baqarah (2:255)",
          refAr: "سورة البقرة (٢:٢٥٥)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["what is allah capable of", "power of god", "ayat al kursi", "the throne verse", "does god sleep", "is god in control", "gods power", "who controls everything",
                 "قدرة الله", "ماذا يقدر الله", "اية الكرسي", "الحي القيوم", "هل ينام الله", "من يدبر الكون", "بيده كل شيء"]
        },
        {
          id: "wh-names", icon: "📜",
          title: "The names — and what \"counting\" them actually means",
          titleAr: "الأسماء — وما معنى «إحصائها» حقًّا",
          simple: "Allah has ninety-nine names, and whoever ahsaha enters Paradise. Ahsa does not mean recite them from a list. It means know what each one means, and then live as though it is true.",
          simpleAr: "لله تسعةٌ وتسعون اسمًا، من أحصاها دخل الجنّة. و«الإحصاء» ليس سردَها من قائمة، وإنما أن تعرف معنى كلِّ اسمٍ ثم تعيش على أنه حقّ.",
          plain: "Read three verses at the end of Surah al-Hashr and you have a large share of them in one place: He is the Sovereign, the Pure, the Perfection, the Giver of security, the Overseer, the Mighty, the Compeller, the Supremely Great — then: the Creator, the Originator, the Fashioner.\n\nAnd the instruction attached to the names is not to memorise them but to USE them: \"And to Allah belong the best names, so call upon Him by them\" (7:180).\n\nCall on the Provider when you are short. Call on the Healer when you are ill. Call on the Forgiver when you have done something you cannot say out loud. The name you need tells you which one to reach for.",
          plainAr: "اقرأ ثلاث آياتٍ في آخر سورة الحشر تجد جملةً كبيرةً منها في موضعٍ واحد: ﴿ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَٰمُ ٱلْمُؤْمِنُ ٱلْمُهَيْمِنُ ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ﴾، ثم ﴿ٱلْخَٰلِقُ ٱلْبَارِئُ ٱلْمُصَوِّرُ﴾.\n\nوالأمرُ المقرون بالأسماء ليس حفظَها بل استعمالَها: ﴿وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا﴾ [الأعراف ١٨٠].\n\nفادعُ الرزّاق إذا ضاق بك المال، والشافي إذا مرضت، والغفّار إذا فعلتَ ما لا تستطيع أن تقوله بصوتٍ عالٍ. فالاسمُ الذي تحتاجه يدلّك على أيّها تقصد.",
          example: "And this is the answer to his question about why knowing the names matters.\n\nA man who knows only that Allah is powerful will fear Him. A man who knows He is AL-WADUD — the Loving — and AL-HALIM — the Forbearing, who does not rush to punish — and AT-TAWWAB — the One who keeps turning back to whoever turns back to Him — will approach Him after a sin instead of hiding.\n\nMost people's relationship with Allah is limited by how few of His names they actually know. They are relating to a fraction of Him, and usually the frightening fraction.",
          exampleAr: "وهذا هو جوابُ سؤاله: لِمَ كانت معرفةُ الأسماء مهمّة؟\n\nفمن لم يعلم إلا أنّ الله قويٌّ خافه. ومن علم أنه الودود، وأنه الحليمُ الذي لا يعاجل بالعقوبة، وأنه التوّابُ الذي لا يزال يتوب على من تاب إليه — أقبل عليه بعد الذنب ولم يختبئ.\n\nوعلاقةُ أكثر الناس بربّهم محدودةٌ بقلّة ما يعرفون من أسمائه؛ فهم يتعاملون مع جزءٍ منه، وهو في الغالب الجزءُ المخيف.",
          proof: "Allah has ninety-nine names — one hundred less one — whoever counts them will enter Paradise.",
          proofAr: "إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ",
          ref: "Sahih al-Bukhari, Book of Conditions, Hadith 2736",
          refAr: "صحيح البخاري، كتاب الشروط، حديث ٢٧٣٦",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of security, the Overseer, the Exalted in Might, the Compeller, the Supreme. Exalted is Allah above whatever they associate with Him.",
          extraProofAr: "هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَٰهَ إِلَّا هُوَ ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَٰمُ ٱلْمُؤْمِنُ ٱلْمُهَيْمِنُ ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ ۚ سُبْحَٰنَ ٱللَّهِ عَمَّا يُشْرِكُونَ",
          extraRef: "Surah Al-Hashr (59:23)",
          extraRefAr: "سورة الحشر (٥٩:٢٣)",
          note: "One honest point about the lists. The hadith says there are ninety-nine; it does NOT itself name them. The familiar list of ninety-nine comes from a narration of at-Tirmidhi whose chain scholars have discussed at length, and the names in it differ between versions. So: the number is established, and the instruction to call on Him by His names is Quran. Any particular printed list is a scholar's compilation, and treating it as though the wording were revealed is a step further than the evidence goes.",
          noteAr: "وتنبيهٌ منصف في القوائم: الحديثُ يقول إنها تسعةٌ وتسعون، وليس فيه تسميتُها. وإنما القائمةُ المشهورة من رواية الترمذي، وقد تكلّم أهلُ العلم في إسنادها طويلًا، وتختلف الأسماءُ فيها بين النسخ. فالعددُ ثابت، والأمرُ بدعائه بأسمائه قرآن. وأمّا قائمةٌ مطبوعةٌ بعينها فهي جمعُ عالم، ومعاملتُها كأنّ ألفاظها وحيٌ زيادةٌ على ما دلّ عليه الدليل.",
          keys: ["99 names of allah", "names of allah", "asma ul husna", "what do the names mean", "why learn the names", "al wadud", "call on allah by his names",
                 "اسماء الله الحسنى", "التسعة والتسعون", "من احصاها", "معاني الاسماء", "لماذا اتعلم الاسماء", "ادعوه بها"]
        },
        {
          id: "wh-limit", icon: "🌌",
          title: "And the limit of what you can know",
          titleAr: "وحدُّ ما تستطيع معرفته",
          simple: "You will never grasp Him. The Quran says so plainly. Knowing that is part of knowing Him — and it is not a loss, it is the point.",
          simpleAr: "لن تُحيط به علمًا، ونصَّ القرآنُ على ذلك. ومعرفةُ هذا من معرفته — وليست نقصًا، بل هي المقصود.",
          plain: "\"They do not encompass Him in knowledge\" (20:110). Your mind was made to handle created things. Every tool you think with — time, place, size, before and after — is a created thing, and He made all of them.\n\nSo a person who says \"I cannot picture God\" has not found a problem. He has found the correct answer.",
          plainAr: "﴿وَلَا يُحِيطُونَ بِهِۦ عِلْمًۭا﴾ [طه ١١٠]. فعقلُك إنما جُعل لتناول المخلوقات. وكلُّ آلةٍ تفكّر بها — الزمانُ والمكانُ والحجمُ والقبلُ والبعد — مخلوقة، وهو خالقُها جميعًا.\n\nفمن قال «لا أستطيع أن أتصوّر الله» فلم يقع على إشكال، وإنما وقع على الجواب الصحيح.",
          example: "But notice what the Quran does NOT do. It does not leave you with an unknowable blank. It gives you His names, His actions, and His book — three things you can genuinely work with.\n\nYou cannot see the sun directly. You can see everything it lights, and know it is there and what it does, precisely. That is the kind of knowledge on offer, and it is enough to build a life on. It was enough for them.",
          exampleAr: "ولكن انظر ما لا يصنعه القرآن: فهو لا يدعك أمام فراغٍ لا يُعلم. وإنما يعطيك أسماءه وأفعاله وكتابه — وهي ثلاثةٌ تستطيع أن تعمل بها حقًّا.\n\nولستَ تستطيع النظر إلى الشمس مباشرة، وتستطيع أن ترى كلَّ ما أضاءته، وأن تعلم أنها ثَمَّ وما تفعل، على وجه الدقّة. وهذا هو جنسُ العلم المبذول، وهو يكفي لبناء عمرٍ عليه. وقد كفاهم.",
          proof: "He knows what is before them and what will be behind them, but they do not encompass Him in knowledge.",
          proofAr: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِهِۦ عِلْمًۭا",
          ref: "Surah Ta-Ha (20:110)",
          refAr: "سورة طه (٢٠:١١٠)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["can i understand god", "i cant picture god", "what does allah look like", "is god unknowable", "limits of knowing god", "how can i know god",
                 "هل نفهم الله", "لا اتصور الله", "كيف اعرف الله", "لا يحيطون به علما", "حد المعرفة"]
        }
      ]
    },

    {
      id: "wg-why", icon: "🪨",
      title: "Why they held on — the question this section exists for",
      titleAr: "لماذا صبروا — وهو السؤالُ الذي كُتب لأجله هذا القسم",
      lead: "They were not made of different material. They were working from different information.",
      leadAr: "لم يكونوا من طينةٍ أخرى، وإنما كانوا يعملون على معلوماتٍ أخرى.",
      items: [
        {
          id: "wh-khabbab", icon: "🪚",
          title: "The saw, the iron combs, and \"you are being hasty\"",
          titleAr: "المنشارُ وأمشاطُ الحديد، و«ولكنّكم تستعجلون»",
          simple: "The Companions were being tortured. They came and asked him ﷺ to pray for them. He did not comfort them. He told them what happened to people before them — and that it did not turn a single one of them from his religion.",
          simpleAr: "كان الصحابةُ يُعذَّبون، فجاؤوا يسألونه ﷺ أن يدعو لهم. فلم يُسلّهم، وإنما أخبرهم بما كان يُصنع بمن قبلهم — وأنّ ذلك ما صدّ واحدًا منهم عن دينه.",
          plain: "Khabbab ibn al-Aratt said: we complained to the Messenger of Allah ﷺ while he was lying in the shade of the Ka'bah with his cloak under his head. We said: will you not ask for help for us? Will you not make dua for us?\n\nHe sat up, and his face changed, and he said: among those before you, a man would be taken and a pit dug for him and he would be put in it. Then a SAW would be brought and placed on his head and he would be made into two halves. And he would be COMBED WITH IRON COMBS, the flesh taken off from the bone — and that did not turn him from his religion.\n\nThen: by Allah, this matter will be completed, until a rider travels from San'a to Hadramawt fearing nothing but Allah, and the wolf for his sheep. BUT YOU ARE BEING HASTY.",
          plainAr: "قال خبّابُ بنُ الأرتّ: شكونا إلى رسول الله ﷺ وهو متوسّدٌ بردةً له في ظلّ الكعبة، فقلنا: ألا تستنصر لنا؟ ألا تدعو لنا؟\n\nفقال: «قد كان من قبلكم يُؤخذ الرجلُ فيُحفر له في الأرض فيُجعل فيها، فيُجاء بالمنشار فيوضع على رأسه فيُجعل نصفين، ويُمشَّط بأمشاط الحديد ما دون لحمه وعظمه، فما يصدُّه ذلك عن دينه.\n\nواللهِ ليتمنَّ هذا الأمر، حتى يسير الراكبُ من صنعاء إلى حضرموت لا يخاف إلا الله والذئبَ على غنمه، ولكنّكم تستعجلون».",
          example: "Sit with what that answer is doing, because it is not what any of us would have said.\n\nThey asked for relief. He gave them TWO things instead: a picture of worse suffering borne by people who did not break, and a promise about an outcome none of them would live to see. And then a rebuke — you are rushing.\n\nHe did not tell them the pain would stop. He told them where it sat in a much larger picture, and that the picture ends the way he said it does. And it did: a man riding alone from San'a to Hadramawt afraid of nothing but a wolf — that happened, within their lifetimes.\n\nThat is the whole answer to his question. They endured because they had been shown the scale of the thing, and their own suffering was a small part of something already decided.",
          exampleAr: "وتأمّل ما يصنعه هذا الجواب، فليس هو الذي كان أحدُنا سيقوله.\n\nسألوا التخفيف، فأعطاهم اثنين غيره: صورةَ عذابٍ أشدّ احتمله قومٌ فما انكسروا، ووعدًا بعاقبةٍ لن يدركها أكثرُهم. ثم عتابًا: «تستعجلون».\n\nلم يقل لهم إنّ الألم سيتوقّف، وإنما قال لهم أين موضعُه من صورةٍ أكبر بكثير، وأنّ الصورة تنتهي كما قال. وقد انتهت: راكبٌ وحده من صنعاء إلى حضرموت لا يخاف إلا ذئبًا — وقع هذا في أعمارهم.\n\nوهذا هو جوابُ سؤاله كلُّه: صبروا لأنهم أُروا مقدارَ الأمر، وأنّ ما بهم جزءٌ صغيرٌ من شيءٍ قد قُضي.",
          proof: "We complained to the Messenger of Allah ﷺ while he was reclining on his cloak in the shade of the Ka'bah. We said: will you not seek help for us? Will you not supplicate for us? He said: among those before you a man would be taken and a pit dug for him and he would be placed in it, then a saw would be brought and put on his head and he would be made two halves; and he would be combed with combs of iron, flesh from bone — and that did not turn him from his religion. By Allah, this matter will be completed, until a rider travels from San'a to Hadramawt fearing none but Allah, and the wolf for his sheep — but you are being hasty.",
          proofAr: "شَكَوْنَا إِلَى رَسُولِ اللَّهِ ﷺ وَهُوَ مُتَوَسِّدٌ بُرْدَةً لَهُ فِي ظِلِّ الْكَعْبَةِ، فَقُلْنَا: أَلَا تَسْتَنْصِرُ لَنَا؟ أَلَا تَدْعُو لَنَا؟ فَقَالَ: قَدْ كَانَ مَنْ قَبْلَكُمْ يُؤْخَذُ الرَّجُلُ فَيُحْفَرُ لَهُ فِي الْأَرْضِ فَيُجْعَلُ فِيهَا، فَيُجَاءُ بِالْمِنْشَارِ فَيُوضَعُ عَلَى رَأْسِهِ فَيُجْعَلُ نِصْفَيْنِ، وَيُمَشَّطُ بِأَمْشَاطِ الْحَدِيدِ مَا دُونَ لَحْمِهِ وَعَظْمِهِ، فَمَا يَصُدُّهُ ذَلِكَ عَنْ دِينِهِ. وَاللَّهِ لَيَتِمَّنَّ هَذَا الْأَمْرُ حَتَّى يَسِيرَ الرَّاكِبُ مِنْ صَنْعَاءَ إِلَى حَضْرَمَوْتَ لَا يَخَافُ إِلَّا اللَّهَ وَالذِّئْبَ عَلَى غَنَمِهِ، وَلَكِنَّكُمْ تَسْتَعْجِلُونَ",
          ref: "Sahih al-Bukhari, Book of Coercion, Hadith 6943",
          refAr: "صحيح البخاري، كتاب الإكراه، حديث ٦٩٤٣",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          keys: ["why did the companions endure", "torture of the companions", "khabbab", "how did they stay firm", "saw and iron combs", "why didnt they give up", "persecution in makkah", "you are being hasty",
                 "لماذا صبر الصحابة", "تعذيب الصحابة", "خباب بن الارت", "كيف ثبتوا", "المنشار", "امشاط الحديد", "تستعجلون", "الاضطهاد في مكة"]
        },
        {
          id: "wh-late", icon: "⏳",
          title: "And the help comes late on purpose",
          titleAr: "والنصرُ يتأخّر قصدًا",
          simple: "The Quran describes prophets who were shaken so hard they said out loud: WHEN is the help of Allah? It does not treat that as weakness. It treats it as the normal route.",
          simpleAr: "وصف القرآنُ أنبياءَ زُلزلوا حتى قالوا جهرًا: ﴿مَتَىٰ نَصْرُ ٱللَّهِ﴾. ولم يجعل ذلك ضعفًا، وإنما جعله الطريقَ المعتاد.",
          plain: "2:214 is one of the most under-read verses in the Quran. Do you think you will enter Paradise while what came to those before you has not come to you? Poverty and hardship touched them, and they were SHAKEN — until the Messenger and those with him said: when is the help of Allah?\n\nThe messenger says it. Not a weak follower — the messenger.\n\nAnd the answer comes in the same breath, not as a rebuke but as an answer: unquestionably, the help of Allah is near.",
          plainAr: "آيةُ البقرة من أقلّ ما يُقرأ في القرآن على قدره: ﴿أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِكُم ۖ مَّسَّتْهُمُ ٱلْبَأْسَآءُ وَٱلضَّرَّآءُ وَزُلْزِلُوا۟ حَتَّىٰ يَقُولَ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ مَتَىٰ نَصْرُ ٱللَّهِ﴾.\n\nفالرسولُ هو الذي قالها. لا تابعٌ ضعيف، بل الرسول.\n\nويأتي الجوابُ في النَّفَس نفسه، لا عتابًا بل جوابًا: ﴿أَلَآ إِنَّ نَصْرَ ٱللَّهِ قَرِيبٌۭ﴾.",
          example: "And 12:110 goes further: until, when the messengers DESPAIRED, and thought they had been denied — then Our help came to them.\n\nThe help arrives at the point where hope has run out. Every time.\n\nWhich means that if you are measuring whether Allah is with you by whether things have improved yet, you are using a broken instrument. The prophets would have failed that test too, on the day before the help arrived.",
          exampleAr: "وآيةُ يوسف تزيد: ﴿حَتَّىٰٓ إِذَا ٱسْتَيْـَٔسَ ٱلرُّسُلُ وَظَنُّوٓا۟ أَنَّهُمْ قَدْ كُذِبُوا۟ جَآءَهُمْ نَصْرُنَا﴾.\n\nفالنصرُ يجيء عند انقطاع الرجاء. في كلِّ مرّة.\n\nومعنى ذلك أنك إن كنتَ تقيس معيّة الله لك بأنّ الأمور تحسّنت أم لا فأنت تقيس بآلةٍ فاسدة. فقد كان الأنبياءُ يسقطون في هذا الاختبار أيضًا، في اليوم الذي قبل النصر.",
          proof: "Or do you think that you will enter Paradise while such trial has not yet come to you as came to those who passed on before you? They were touched by poverty and hardship and were shaken until the Messenger and those who believed with him said: when is the help of Allah? Unquestionably, the help of Allah is near.",
          proofAr: "أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِكُم ۖ مَّسَّتْهُمُ ٱلْبَأْسَآءُ وَٱلضَّرَّآءُ وَزُلْزِلُوا۟ حَتَّىٰ يَقُولَ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ مَتَىٰ نَصْرُ ٱللَّهِ ۗ أَلَآ إِنَّ نَصْرَ ٱللَّهِ قَرِيبٌۭ",
          ref: "Surah Al-Baqarah (2:214)",
          refAr: "سورة البقرة (٢:٢١٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["why doesnt allah help me", "when is the help of allah", "allah is not answering", "how long do i wait", "prophets despaired", "nothing is changing", "i have been praying for years",
                 "متى نصر الله", "لماذا لا ينصرني الله", "لا يستجيب لي", "الى متى انتظر", "استيأس الرسل", "ادعو منذ سنين"]
        }
      ]
    },

    {
      id: "wg-where", icon: "🧭",
      title: "So where do you stand with Him right now?",
      titleAr: "فأين موقعك منه الآن؟",
      lead: "Three cards that let a person read his own situation instead of guessing at it.",
      leadAr: "ثلاثُ بطاقاتٍ يقرأ بها المرءُ حاله بدل أن يظنّ.",
      items: [
        {
          id: "wh-easy", icon: "🎁",
          title: "If everything is going easily for you — that is not automatically good news",
          titleAr: "إذا كان كلُّ شيءٍ يسيرًا عليك — فليس ذلك بشرى بالضرورة",
          simple: "The Quran describes people who forgot Him, and says: so We opened to them the doors of everything — until they were delighted with what they were given, and then We seized them suddenly. Ease can be a gift. It can also be a rope being let out.",
          simpleAr: "وصف القرآنُ قومًا نسوه فقال: ﴿فَتَحْنَا عَلَيْهِمْ أَبْوَٰبَ كُلِّ شَىْءٍ حَتَّىٰٓ إِذَا فَرِحُوا۟ بِمَآ أُوتُوٓا۟ أَخَذْنَٰهُم بَغْتَةًۭ﴾. فاليُسرُ قد يكون عطاءً، وقد يكون حبلًا يُرخى.",
          plain: "This is what the scholars call ISTIDRAJ — being drawn in by stages.\n\nThe verse is precise about the sequence. First they FORGOT what they had been reminded of. Then the doors of everything opened. Then they were pleased with it. Then it ended, suddenly.\n\nAnd 23:55-56 asks it as a question: do they think that what We extend to them of wealth and children is Us hurrying good to them? No — they do not perceive.\n\nAnd 3:178: let not those who disbelieve think that Our extending their time is better for them; We only extend it so they may increase in sin.",
          plainAr: "وهذا الذي يسمّيه أهلُ العلم الاستدراج.\n\nوالآيةُ دقيقةٌ في الترتيب: أوّلًا ﴿نَسُوا۟ مَا ذُكِّرُوا۟ بِهِۦ﴾. ثم فُتحت أبوابُ كلِّ شيء. ثم فرحوا بها. ثم انتهى الأمرُ بغتة.\n\nوآيةُ المؤمنون تسألها سؤالًا: ﴿أَيَحْسَبُونَ أَنَّمَا نُمِدُّهُم بِهِۦ مِن مَّالٍۢ وَبَنِينَ ۝ نُسَارِعُ لَهُمْ فِى ٱلْخَيْرَٰتِ ۚ بَل لَّا يَشْعُرُونَ﴾.\n\nوآيةُ آل عمران: ﴿وَلَا يَحْسَبَنَّ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّمَا نُمْلِى لَهُمْ خَيْرٌۭ لِّأَنفُسِهِمْ ۚ إِنَّمَا نُمْلِى لَهُمْ لِيَزْدَادُوٓا۟ إِثْمًۭا﴾.",
          example: "So how do you tell which one you are in? The verse gives you the test, and it is not about the money.\n\nAsk what your ease is producing IN YOU. If your provision is increasing and your prayer is improving, your temper is better, you give more, and you fear Him more — that is a gift. If your provision is increasing and your prayer is thinning, you are harder with people, and you have stopped feeling anything when you disobey — the ease is not the reward. It is the anaesthetic.\n\nThe first group is being given. The second is being left alone, and being left alone is the worst thing that can happen to a person.",
          exampleAr: "فكيف تعرف في أيِّهما أنت؟ الآيةُ تعطيك الميزان، وليس في المال.\n\nانظر ماذا يُنتج يسرُك فيك أنت: فإن كان رزقُك يزداد وصلاتُك تتحسّن، وخُلقك ألين، وعطاؤك أكثر، وخشيتُك أعظم — فتلك نعمة. وإن كان رزقُك يزداد وصلاتُك ترقّ، وأنت أقسى على الناس، ولم تعد تجد شيئًا حين تعصي — فليس اليسرُ جزاءً، وإنما هو بَنجٌ مخدّر.\n\nفالأوّلون يُعطَون، والآخرون يُتركون. والتركُ أسوأُ ما يقع بإنسان.",
          proof: "So when they forgot that by which they had been reminded, We opened to them the doors of every thing — until, when they rejoiced in what they were given, We seized them suddenly, and they were in despair.",
          proofAr: "فَلَمَّا نَسُوا۟ مَا ذُكِّرُوا۟ بِهِۦ فَتَحْنَا عَلَيْهِمْ أَبْوَٰبَ كُلِّ شَىْءٍ حَتَّىٰٓ إِذَا فَرِحُوا۟ بِمَآ أُوتُوٓا۟ أَخَذْنَٰهُم بَغْتَةًۭ فَإِذَا هُم مُّبْلِسُونَ",
          ref: "Surah Al-An'am (6:44)",
          refAr: "سورة الأنعام (٦:٤٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "And let not those who disbelieve ever think that Our extending their time is better for them. We only extend it for them so that they may increase in sin, and for them is a humiliating punishment.",
          extraProofAr: "وَلَا يَحْسَبَنَّ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّمَا نُمْلِى لَهُمْ خَيْرٌۭ لِّأَنفُسِهِمْ ۚ إِنَّمَا نُمْلِى لَهُمْ لِيَزْدَادُوٓا۟ إِثْمًۭا ۚ وَلَهُمْ عَذَابٌۭ مُّهِينٌۭ",
          extraRef: "Surah Aal-Imran (3:178)",
          extraRefAr: "سورة آل عمران (٣:١٧٨)",
          keys: ["everything is going well", "life is easy", "istidraj", "am i being tested or rewarded", "why do sinners prosper", "he has everything and doesnt pray", "good things happening to bad people",
                 "الاستدراج", "حياتي سهلة", "كل شيء يسير", "لماذا ينعم العصاة", "الفاسق ينجح", "نعمة ام استدراج", "يعطيه ولا يصلي"]
        },
        {
          id: "wh-hard", icon: "🩹",
          title: "And if life is hard — what that is buying",
          titleAr: "وإن كانت الحياةُ شاقّة — فماذا تشتري بها؟",
          simple: "Nothing hurts a Muslim — not tiredness, not illness, not worry, not even a thorn that pricks him — except that Allah wipes away some of his sins by it.",
          simpleAr: "ما يصيب المسلمَ من نَصَبٍ ولا وَصَبٍ ولا همٍّ ولا حَزَنٍ ولا أذًى، حتى الشوكةِ يُشاكها، إلا كفّر الله بها من خطاياه.",
          plain: "Read the list in the hadith, because it is deliberately complete: fatigue, illness, worry, grief, harm, distress — and then \"even the thorn that pricks him.\"\n\nA thorn. Something so small you would not tell anybody about it. It is on the list.\n\nWhich means there is no such thing as suffering that is going nowhere. Every discomfort a believer has is being converted into something, whether he notices it or not.",
          plainAr: "اقرأ العدَّ في الحديث فإنه مقصودُ الاستيعاب: نصبٌ ووصبٌ وهمٌّ وحزنٌ وأذًى وغمّ — ثم «حتى الشوكةِ يُشاكها».\n\nشوكة. شيءٌ من الصغر بحيث لا تُخبر به أحدًا. وهو في العدّ.\n\nومعنى ذلك أنه ليس ثَمَّ ألمٌ يذهب سُدًى. فكلُّ ما يمسّ المؤمن من ضِيقٍ يُصرف إلى شيء، انتبه له أو لم ينتبه.",
          example: "And the other half of it, which people find harder to accept: the greater the trial, the greater the reward — and when Allah loves a people, He tests them.\n\nSo the two cards you have just read together answer his question. Ease is not proof of approval, and hardship is not proof of anger. Both can be either. The only reliable reading is what the situation is doing to your relationship with Him.\n\nThat is the instrument the Companions used, and it is why torture did not shake them: they did not believe suffering meant abandonment.",
          exampleAr: "وشطرُه الآخر، وهو أثقلُ على النفوس: أنّ عِظَم الجزاء مع عِظَم البلاء، وأنّ الله إذا أحبّ قومًا ابتلاهم.\n\nفالبطاقتان اللتان قرأتَهما الآن تجيبان سؤاله: فليس اليسرُ دليلَ رضًا، ولا الشدّةُ دليلَ غضب. وكلاهما يحتمل الأمرين. والقراءةُ الوحيدة الموثوقة: ما الذي تصنعه حالُك بعلاقتك به.\n\nوهذه هي الآلةُ التي استعملها الصحابة، وبها لم يزعزعهم العذاب: فلم يكونوا يعتقدون أنّ الألم معناه الخذلان.",
          proof: "No fatigue, illness, anxiety, grief, harm or distress befalls a Muslim — even a thorn that pricks him — but that Allah expiates by it some of his sins.",
          proofAr: "مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ، حَتَّى الشَّوْكَةِ يُشَاكُهَا، إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ",
          ref: "Sahih al-Bukhari, Book of the Sick, Hadith 5641",
          refAr: "صحيح البخاري، كتاب المرضى، حديث ٥٦٤١",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "Greatness of reward is with greatness of trial. And when Allah loves a people He tests them; so whoever is content, for him is contentment, and whoever is displeased, for him is displeasure.",
          extraProofAr: "إِنَّ عِظَمَ الْجَزَاءِ مَعَ عِظَمِ الْبَلَاءِ، وَإِنَّ اللَّهَ إِذَا أَحَبَّ قَوْمًا ابْتَلَاهُمْ، فَمَنْ رَضِيَ فَلَهُ الرِّضَا، وَمَنْ سَخِطَ فَلَهُ السَّخَطُ",
          extraRef: "Jami' at-Tirmidhi, Chapters on Zuhd, Hadith 2396",
          extraRefAr: "جامع الترمذي، أبواب الزهد، حديث ٢٣٩٦",
          note: "That second narration is outside the two Sahihs — at-Tirmidhi graded it hasan gharib, and it is graded hasan by later scholars. The first, in al-Bukhari and Muslim, carries the ruling on its own and needs no support.",
          noteAr: "والحديثُ الثاني خارج الصحيحين — قال فيه الترمذي: حسنٌ غريب، وحسّنه من بعده. والأوّلُ في الصحيحين، وهو قائمٌ بنفسه لا يحتاج إلى عاضد.",
          keys: ["why is my life so hard", "why is allah testing me", "i am suffering", "what do i get for this pain", "reward for hardship", "does allah still love me", "illness reward", "sabr",
                 "لماذا حياتي صعبة", "لماذا يبتليني الله", "انا متعب", "اجر البلاء", "هل الله يحبني", "المرض والاجر", "الصبر"]
        },
        {
          id: "wh-loves", icon: "❤️",
          title: "Who He says He loves — and who He says He does not",
          titleAr: "من قال إنه يحبّهم — ومن قال إنه لا يحبّهم",
          simple: "The Quran states both lists directly. You do not have to guess which one you are on — you can read it and check.",
          simpleAr: "نصَّ القرآنُ على القائمتين. فلستَ محتاجًا أن تظنّ في أيّهما أنت — بل تقرأ وتقيس.",
          plain: "HE LOVES: those who do good (2:195) · those who keep turning back to Him and those who keep themselves clean (2:222) · those who fear Him (3:76) · those who are patient (3:146) · those who rely on Him (3:159) · those who are just (5:42) · those who fight in His way in ranks, as though a solid structure (61:4).\n\nHE DOES NOT LOVE: those who transgress limits (2:190) · the wrongdoers (3:57) · the corrupters (5:64) · the arrogant (16:23) · the treacherous (8:58) · the wasteful (6:141) · the self-deluded and boastful (31:18) · every ungrateful sinner (2:276).",
          plainAr: "يحبّ: المحسنين [البقرة ١٩٥] · التوّابين والمتطهّرين [البقرة ٢٢٢] · المتّقين [آل عمران ٧٦] · الصابرين [آل عمران ١٤٦] · المتوكّلين [آل عمران ١٥٩] · المقسطين [المائدة ٤٢] · الذين يقاتلون في سبيله صفًّا كأنهم بنيانٌ مرصوص [الصفّ ٤].\n\nولا يحبّ: المعتدين [البقرة ١٩٠] · الظالمين [آل عمران ٥٧] · المفسدين [المائدة ٦٤] · المستكبرين [النحل ٢٣] · الخائنين [الأنفال ٥٨] · المسرفين [الأنعام ١٤١] · كلَّ مختالٍ فخور [لقمان ١٨] · كلَّ كفّارٍ أثيم [البقرة ٢٧٦].",
          example: "Two things worth noticing about those lists.\n\nFIRST, almost every item is a HABIT, not a single act. Tawwabin does not mean somebody who repented once; the form means one who repeats it. Sabirin, muhsinin, muqsitin — all of them describe a pattern. Which is good news: one bad day does not move you between lists.\n\nSECOND, look at the second list again. Transgressing limits, wronging others, arrogance, treachery, waste, boasting. Almost every entry is something you do TO OTHER PEOPLE. Very little of it is about ritual.\n\nA man can be praying five times a day and be on the second list. That is worth sitting with.",
          exampleAr: "وأمران في العدّين يستحقّان الانتباه.\n\nالأوّل: أنّ عامّتها أوصافُ عادةٍ لا أفعالٍ مفردة. فـ«التوّابين» ليس من تاب مرّة، وإنما الصيغةُ للتكرار. وكذلك الصابرون والمحسنون والمقسطون، كلُّها تصف نسقًا. وفي هذا بشارة: فيومٌ سيّئ لا ينقلك من قائمةٍ إلى قائمة.\n\nوالثاني: أعد النظر في القائمة الثانية: الاعتداءُ والظلمُ والاستكبارُ والخيانةُ والإسرافُ والفخر. عامّتُها ممّا تفعله بالناس، وقليلٌ منها في العبادة.\n\nفقد يصلّي الرجلُ الخمسَ وهو في القائمة الثانية. وهذا حقُّه أن يُوقف عنده.",
          proof: "Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.",
          proofAr: "إِنَّ ٱللَّهَ يُحِبُّ ٱلتَّوَّٰبِينَ وَيُحِبُّ ٱلْمُتَطَهِّرِينَ",
          ref: "Surah Al-Baqarah (2:222)",
          refAr: "سورة البقرة (٢:٢٢٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "Indeed, He does not like the arrogant.",
          extraProofAr: "إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْتَكْبِرِينَ",
          extraRef: "Surah An-Nahl (16:23)",
          extraRefAr: "سورة النحل (١٦:٢٣)",
          keys: ["who does allah love", "does allah love me", "who does allah hate", "how to be loved by allah", "allah loves", "allah does not love", "am i on the right side",
                 "من يحب الله", "هل يحبني الله", "من لا يحبه الله", "كيف احبب الله لي", "ان الله يحب", "لا يحب الله"]
        }
      ]
    },

    {
      id: "wg-easy", icon: "🎯",
      title: "How generous He actually is — the part people miss",
      titleAr: "كم هو كريم — وهو الذي يفوت الناس",
      lead: "Two cards, and they change how ordinary days look.",
      leadAr: "بطاقتان، تغيّران النظر إلى الأيّام العاديّة.",
      items: [
        {
          id: "wh-niyyah", icon: "💭",
          title: "You are paid for the intention — before you have done anything",
          titleAr: "تُؤجر على النيّة — قبل أن تفعل شيئًا",
          simple: "Actions are counted by intentions. So the same day at work or at your desk can be worth nothing, or can be worth a great deal, and the difference is a sentence you say to yourself before you start.",
          simpleAr: "إنما الأعمالُ بالنيّات. فاليومُ نفسه في العمل أو على مكتبك قد لا يساوي شيئًا، وقد يساوي كثيرًا — والفرقُ جملةٌ تقولها لنفسك قبل أن تبدأ.",
          plain: "He ﷺ told Sa'd: you will not spend anything seeking the face of Allah except that you are rewarded for it — EVEN WHAT YOU PUT IN YOUR WIFE'S MOUTH.\n\nA spoonful of food to your own wife. Rewarded, because of why you did it.\n\nAnd when the Companions were told that even intimacy with your wife is charity, they were startled: does one of us satisfy his desire and get reward for it? He said: if he had done it unlawfully, would there be sin on him? So likewise, if he does it lawfully, he has reward.",
          plainAr: "قال ﷺ لسعد: «وإنك لن تنفق نفقةً تبتغي بها وجه الله إلا أُجرتَ عليها، حتى ما تجعل في فِي امرأتك».\n\nلقمةٌ تضعها في فم زوجتك. مأجورٌ عليها، لأجل قصدك بها.\n\nولمّا قيل للصحابة إنّ في بُضع أحدكم صدقة، عجبوا: أيأتي أحدُنا شهوته ويكون له فيها أجر؟ قال: «أرأيتم لو وضعها في حرامٍ أكان عليه وزر؟ فكذلك إذا وضعها في الحلال كان له أجر».",
          example: "So make the sentence explicit, and say it before you start:\n\nI am studying SO THAT I can teach what I learn to people who do not have it.\nI am going to work SO THAT my family does not need anybody.\nI am sleeping now SO THAT I can get up for Fajr.\nI am eating SO THAT I have the strength to obey Him.\n\nNothing about the day changes. Nothing extra is added to your schedule. The identical hours are now being recorded differently, because of six words said at the start.\n\nAnd this is his own point, and it is worth quoting as he put it: look at how beautifully He is dealing with us — and we leave all of it and go to what the devil whispers.",
          exampleAr: "فصرّح بالجملة، وقلها قبل أن تبدأ:\n\nأدرس لأعلّم ما أتعلّمه من لا يجده.\nوأذهب إلى العمل لئلّا يحتاج أهلي إلى أحد.\nوأنام الآن لأقوم للفجر.\nوآكل لأقوى على طاعته.\n\nولا يتغيّر في اليوم شيء، ولا يُزاد في جدولك شيء. وإنما تُكتب الساعاتُ نفسُها كتابةً أخرى، لأجل كلماتٍ قيلت في أوّله.\n\nوهذا معناه هو، وحقُّه أن يُنقل بلفظه: انظر كم يعاملنا بجمال — ثم ندع ذلك كلَّه ونمضي إلى ما يوسوس به الشيطان.",
          proof: "You will not spend anything seeking thereby the face of Allah except that you are rewarded for it — even what you place in your wife's mouth.",
          proofAr: "وَإِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلَّا أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فِي امْرَأَتِكَ",
          ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1295",
          refAr: "صحيح البخاري، كتاب الجنائز، حديث ١٢٩٥",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "And in the intimacy of one of you there is charity. They said: O Messenger of Allah, does one of us satisfy his desire and have reward in it? He said: do you not see that if he were to put it unlawfully there would be sin on him? So likewise, if he puts it lawfully, he has reward.",
          extraProofAr: "وَفِي بُضْعِ أَحَدِكُمْ صَدَقَةٌ. قَالُوا: يَا رَسُولَ اللَّهِ، أَيَأْتِي أَحَدُنَا شَهْوَتَهُ وَيَكُونُ لَهُ فِيهَا أَجْرٌ؟ قَالَ: أَرَأَيْتُمْ لَوْ وَضَعَهَا فِي حَرَامٍ أَكَانَ عَلَيْهِ وِزْرٌ؟ فَكَذَلِكَ إِذَا وَضَعَهَا فِي الْحَلَالِ كَانَ لَهُ أَجْرٌ",
          extraRef: "Sahih Muslim, Book of Zakat",
          extraRefAr: "صحيح مسلم، كتاب الزكاة",
          link: "#pi-shahada",
          linkEn: "The hadith on intentions itself, in the pillars →",
          linkAr: "حديثُ النيّات نفسه، في قسم الأركان ←",
          keys: ["intention", "niyyah", "reward for intention", "does studying count as worship", "working for my family reward", "how to turn daily life into worship", "get reward for normal things", "sleeping with intention",
                 "النية", "الاعمال بالنيات", "اجر النية", "الدراسة عبادة", "العمل لاهلي اجر", "كيف اجعل يومي عبادة", "اؤجر على العادات"]
        },
        {
          id: "wh-mercy", icon: "🤲",
          title: "Mercy gets you in — and deeds are how you get to the mercy",
          titleAr: "بالرحمة تدخل — وبالعمل تبلغ الرحمة",
          simple: "Nobody's deeds put him in Paradise, not even the Prophet ﷺ. It is Allah's mercy. But the mercy is not handed out at random — the deeds are how you get into the position to receive it.",
          simpleAr: "لا يُدخل أحدًا عملُه الجنّة، ولا النبيَّ ﷺ. وإنما هي رحمةُ الله. ولكنّ الرحمة لا تُبذل جزافًا — وإنما بالعمل تصير في الموضع الذي تُنالُ فيه.",
          plain: "He ﷺ said: no one's deeds will admit him to Paradise. They said: not even you, O Messenger of Allah? He said: NOT EVEN ME, unless Allah covers me with mercy from Him.\n\nRead that carefully, because it is the sentence people use to justify doing nothing, and it does not say that.\n\nIt says deeds are not the PRICE. Paradise is not for sale and no amount of praying buys it. But the same Quran says: enter Paradise BY WHAT YOU USED TO DO (16:32) and \"that is the Paradise you were made to inherit for what you used to do\" (43:72).",
          plainAr: "قال ﷺ: «لن يُدخل الجنّة أحدًا عملُه». قالوا: ولا أنت يا رسول الله؟ قال: «ولا أنا، إلا أن يتغمّدني الله برحمةٍ منه».\n\nاقرأها متمهّلًا، فإنها الجملةُ التي يُحتجّ بها على ترك العمل، وليس فيها ذلك.\n\nإنما فيها أنّ العمل ليس ثمنًا. فالجنّةُ لا تُشترى، ولا يبتاعها مقدارٌ من صلاة. والقرآنُ نفسُه يقول: ﴿ٱدْخُلُوا۟ ٱلْجَنَّةَ بِمَا كُنتُمْ تَعْمَلُونَ﴾ [النحل ٣٢]، و﴿وَتِلْكَ ٱلْجَنَّةُ ٱلَّتِىٓ أُورِثْتُمُوهَا بِمَا كُنتُمْ تَعْمَلُونَ﴾ [الزخرف ٧٢].",
          example: "The two fit together exactly, and his own way of putting it is the clearest I have seen: you get in by mercy, and the deeds are how you reach the level where the mercy meets you.\n\nA comparison. A man is not admitted to a hospital because he paid the exact cost of the treatment — the treatment is worth far more than he could ever pay. But he still had to get himself to the door. His journey did not buy the treatment; it put him where the treatment was being given.\n\nSo a person who says \"Allah is merciful\" and does nothing has understood half a sentence. And a person who counts his prayers as if invoicing has understood the other half and missed the first. Both halves are in the same hadith.",
          exampleAr: "والأمران يلتئمان تمامًا، وعبارتُه هو أوضحُ ما رأيت في ذلك: تدخل بالرحمة، وبالعمل تبلغ المرتبة التي تلقاك عندها الرحمة.\n\nومثالٌ يقرّبه: لا يُعالَج الرجلُ في مستشفًى لأنه دفع ثمن العلاج بالضبط — فالعلاجُ أغلى ممّا يقدر عليه. ولكنه مع ذلك كان لا بدّ أن يبلغ الباب. فرحلتُه لم تشترِ العلاج، وإنما أوصلته إلى حيث يُبذل.\n\nفمن قال «الله رحيم» وقعد فقد فهم نصف جملة. ومن أحصى صلواته كمن يحرّر فاتورةً فقد فهم النصف الآخر وأسقط الأوّل. والنصفان في حديثٍ واحد.",
          proof: "No one's deeds will admit him to Paradise. They said: not even you, O Messenger of Allah? He said: not even me, unless Allah should cover me with mercy from Him.",
          proofAr: "لَنْ يُدْخِلَ الْجَنَّةَ أَحَدًا عَمَلُهُ. قَالُوا: وَلَا أَنْتَ يَا رَسُولَ اللَّهِ؟ قَالَ: وَلَا أَنَا، إِلَّا أَنْ يَتَغَمَّدَنِيَ اللَّهُ بِرَحْمَةٍ مِنْهُ",
          ref: "Sahih Muslim, Book of the Description of the Day of Judgement, Paradise and Hell",
          refAr: "صحيح مسلم، كتاب صفة القيامة والجنّة والنار",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "The ones whom the angels take in death, being good and pure — they say: peace be upon you. ENTER PARADISE FOR WHAT YOU USED TO DO.",
          extraProofAr: "ٱلَّذِينَ تَتَوَفَّىٰهُمُ ٱلْمَلَٰٓئِكَةُ طَيِّبِينَ ۙ يَقُولُونَ سَلَٰمٌ عَلَيْكُمُ ٱدْخُلُوا۟ ٱلْجَنَّةَ بِمَا كُنتُمْ تَعْمَلُونَ",
          extraRef: "Surah An-Nahl (16:32)",
          extraRefAr: "سورة النحل (١٦:٣٢)",
          keys: ["do i get to paradise by deeds", "allah is merciful anyway", "do good deeds matter", "will mercy save me", "not even you o messenger", "is it enough to believe", "deeds or mercy",
                 "بالرحمة ام بالعمل", "الله غفور رحيم", "هل العمل ينفع", "ولا انت يا رسول الله", "يكفي الايمان", "لن يدخل احدا عمله"]
        }
      ]
    },

    {
      id: "wg-choice", icon: "🏛️",
      title: "And then the only question left",
      titleAr: "ثم السؤالُ الوحيد الباقي",
      lead: "One card. He wrote it himself, and it is the sharpest thing in this section.",
      leadAr: "بطاقةٌ واحدة، كتبها هو، وهي أمضى ما في هذا القسم.",
      items: [
        {
          id: "wh-choice", icon: "🪵",
          title: "The wooden hut, or the palace",
          titleAr: "الكوخُ الخشبيّ، أم القصر",
          simple: "You are offered two places. A hut of wood that will collapse in the first strong wind — you may have it for a day. Or a palace you have never seen the like of, with no limit on how long you stay. Which do you take?",
          simpleAr: "عُرض عليك موضعان: كوخٌ من خشبٍ يسقط في أوّل ريحٍ شديدة — تسكنه يومًا. أو قصرٌ لم ترَ مثله قطّ، لا حدَّ لمدّة إقامتك فيه. فأيَّهما تأخذ؟",
          plain: "Put like that, nobody would hesitate. And yet almost everybody chooses the hut.\n\nWhy? There are only two possible reasons, and it is worth knowing which one is yours.\n\nEITHER he does not really believe the palace exists. Not out loud — he would say he does — but not with the part of him that makes decisions.\n\nOR he believes it and has decided he will get it anyway, without doing anything, because Allah is merciful. Which is the card above this one, read backwards.\n\nThere is no third reason. A man who genuinely believed both — that it exists, and that arriving there requires something of him — could not keep choosing the hut.",
          plainAr: "إذا وُضع الأمرُ هكذا لم يتردّد أحد. ومع ذلك يختار الكوخَ عامّةُ الناس.\n\nولماذا؟ ليس ثَمَّ إلا سببان، وحقُّك أن تعرف أيُّهما سببُك.\n\nإمّا أنه لا يصدّق حقًّا أنّ القصر موجود. لا بلسانه — فهو يقول إنه يصدّق — وإنما بالجزء الذي يتّخذ به القرارات.\n\nوإمّا أنه يصدّق ثم قرّر أنه سيناله على كلِّ حال بلا عمل، لأنّ الله رحيم. وهي البطاقةُ التي قبل هذه مقروءةً مقلوبة.\n\nوليس ثَمَّ سببٌ ثالث. فمن صدّق الأمرين معًا — أنه موجود، وأنّ الوصول إليه يقتضي منه شيئًا — لم يستطع أن يواصل اختيار الكوخ.",
          example: "And the Quran makes the comparison itself, without the hut: \"Every soul will taste death, and you will only be paid your wages in full on the Day of Resurrection. So whoever is drawn away from the Fire and admitted to Paradise has won. AND WHAT IS THE LIFE OF THIS WORLD EXCEPT THE ENJOYMENT OF DELUSION?\" (3:185)\n\nNot \"the world is bad.\" Not \"do not enjoy anything.\" It says: the enjoyment is real, and it is DECEIVING — because it presents itself as the whole thing when it is a few decades inside something with no end.\n\nHis other image is worth keeping too: you are picking up a grain of sand and leaving a thousand kilos of gold. Except, as he said himself, that comparison is far too generous — a thousand kilos of gold is a finite quantity, and what is being left is not.",
          exampleAr: "والقرآنُ يعقد المقارنة بنفسه من غير كوخ: ﴿كُلُّ نَفْسٍۢ ذَآئِقَةُ ٱلْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ ٱلْقِيَٰمَةِ ۖ فَمَن زُحْزِحَ عَنِ ٱلنَّارِ وَأُدْخِلَ ٱلْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا مَتَٰعُ ٱلْغُرُورِ﴾ [آل عمران ١٨٥].\n\nلم يقل: الدنيا شرّ. ولا: لا تتمتّع بشيء. وإنما قال: المتاعُ حقّ، وهو **غارّ** — لأنه يعرض نفسه على أنه الكلّ، وهو عقودٌ معدودةٌ داخل ما لا آخر له.\n\nوصورتُه الأخرى تستحقّ الحفظ: أنك تأخذ حبّةَ رملٍ وتدع ألفَ كيلوغرامٍ من الذهب. غير أنّ التشبيه — كما قال هو — أكرمُ من الحقيقة بكثير؛ فألفُ كيلوغرامٍ عددٌ منتهٍ، والمتروكُ ليس بمنتهٍ.",
          proof: "Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection. So he who is drawn away from the Fire and admitted to Paradise has attained his desire. And what is the life of this world except the enjoyment of delusion.",
          proofAr: "كُلُّ نَفْسٍۢ ذَآئِقَةُ ٱلْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ ٱلْقِيَٰمَةِ ۖ فَمَن زُحْزِحَ عَنِ ٱلنَّارِ وَأُدْخِلَ ٱلْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا مَتَٰعُ ٱلْغُرُورِ",
          ref: "Surah Aal-Imran (3:185)",
          refAr: "سورة آل عمران (٣:١٨٥)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          link: "#destination",
          linkEn: "What is actually in each of the two places →",
          linkAr: "وما الذي في كلٍّ من الموضعين ←",
          keys: ["dunya vs akhirah", "why choose the world", "is this life worth it", "what am i working for", "wooden house or palace", "temporary life", "why do people choose wrong", "matau al ghurur",
                 "الدنيا والاخرة", "لماذا نختار الدنيا", "متاع الغرور", "الحياة الدنيا", "لماذا يختار الناس الخطأ", "الكوخ والقصر"]
        }
      ]
    }
  ],

  closing: "This section had one job: to answer why people who had less than you endured more than you. The answer is not that they were stronger. It is that they knew who they were dealing with, they knew what He had promised, they knew that delay is part of the design, and they knew that a man who loses everything here loses a hut. Everything above is available to you in exactly the same words they had it in.",
  closingAr: "لهذا القسم مقصدٌ واحد: أن يجيب لماذا احتمل من هم أقلُّ منك ما هو أشدُّ ممّا احتملتَ. والجوابُ ليس أنهم كانوا أقوى، وإنما أنهم علموا مع من يتعاملون، وعلموا بما وعد، وعلموا أنّ التأخير من التدبير، وعلموا أنّ من فقد كلَّ شيءٍ ههنا إنما فقد كوخًا. وكلُّ ما تقدّم متاحٌ لك بالألفاظ التي كان عندهم بها سواءً بسواء."
};
