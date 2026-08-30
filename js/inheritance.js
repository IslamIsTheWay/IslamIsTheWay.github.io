/* ============================================================
   INHERITANCE, WITH THE SUMS DONE — المواريث، والحساب مفصَّلًا
   guidance.html#inheritance.  Rendered by renderGrouped("inheritanceBox").

   WHY THIS EXISTS. It was the largest gap left on the site and he
   asked for it by name — and he asked for one thing in
   particular:

     "give examples regarding the inheritance because examples
      make it easier for people to understand more."

   So the middle group of this section is FOUR WORKED CASES with
   the arithmetic done to the last note. A page that says "the
   daughter takes a half" and stops has not helped anybody divide
   an actual estate; a page that says "of 120,000 she takes
   60,000, and here is where the remaining 5,000 goes and why"
   has.

   THE FOURTH EXAMPLE IS HIS OWN. A father dies leaving a grown
   son and a daughter under ten. That is the case he described in
   the session on judging by revelation, and it is the case
   #sd-self answers from 4:6. Here it is answered with numbers.

   EVERY SUM WAS COMPUTED AND CHECKED TO TOTAL THE ESTATE. Any
   worked example whose parts do not add back up to the whole is
   worse than no example, so each one prints its own check line.

   THE TWO THINGS THIS FILE REFUSES TO DO.

   1. It does not pretend the subject is simple. Fara'id is a
      discipline with its own literature; blockers, exclusions
      (hajb), 'awl and radd are named and NOT worked through,
      because a half-taught rule is what produces a confident
      wrong division. Every group ends by pointing at a person.

   2. It does not dodge the 2:1 question. The answer given is
      factual and checkable: the ratio applies in specific
      configurations, the Quran itself assigns equal shares in
      others (mother and father at a sixth each; uterine siblings
      at a sixth each, male and female alike), and the larger
      share carries obligations the smaller one does not.

   Proofs: 4:7, 4:9, 4:11, 4:12, 4:13, 4:176, 2:180 from this
   site's own js/quran-text.js; al-Bukhari 5659 and 6732; and
   "no bequest to an heir" cited with its actual status.
   ============================================================ */

const INHERITANCE = {
  title: "Inheritance — the shares, and four estates divided step by step",
  titleAr: "المواريث — الأنصبةُ، وأربعُ تركاتٍ مقسومةً خطوةً خطوة",
  intro: "This is the one subject where families that survived everything else fall apart, and it is almost always because nobody knew the rules and somebody guessed. What follows is the order things are paid in, who takes what, and then four complete estates divided to the last note — because a fraction on its own has never helped anybody divide a real house.",
  introAr: "هذا هو البابُ الذي تتفكّك فيه الأُسرُ التي نجت من كلِّ ما سواه، وسببُ ذلك في الغالب أنّ أحدًا لم يعرف الحكم فاجتهد بظنّه. وفيما يلي ترتيبُ ما يُخرج من التركة، ومن يرث وكم، ثم أربعُ تركاتٍ كاملةٍ مقسومةً إلى آخر ريال — فإنّ الكسر وحده لم يُعِن أحدًا قطُّ على قسمة بيتٍ قائم.",

  groups: [
    {
      id: "ih-before", icon: "📜",
      title: "Before a single share is worked out",
      titleAr: "قبل أن يُحسب نصيبٌ واحد",
      lead: "Four things come out of the estate in a fixed order, and three of them come out before any heir sees anything.",
      leadAr: "أربعةٌ تخرج من التركة على ترتيبٍ لازم، ثلاثةٌ منها قبل أن يرى وارثٌ شيئًا.",
      items: [
        {
          id: "ih-order", icon: "1️⃣",
          title: "The order: burial, then debts, then the bequest, then the shares",
          titleAr: "الترتيب: التجهيز، ثم الدَّين، ثم الوصيّة، ثم الأنصبة",
          plain: "1. Burial costs — washing, shroud, grave, done without extravagance.\n\n2. DEBTS, all of them, and this comes before everything else the family wants to do. A debt owed to a bank, a neighbour, an employee, an unpaid mahr — every one of them is paid in full before an heir takes a single note.\n\n3. The bequest (wasiyyah), up to one third and no more.\n\n4. What remains is the estate that gets divided by the shares.",
          plainAr: "١. التجهيزُ والتكفين والدفن، من غير سرف.\n\n٢. الدُّيون كلُّها، وهي قبل كلِّ ما يريد الأهلُ صنعه. فدَينُ المصرف والجار والأجير والمهرُ الذي لم يُدفع — يُوفّى كلُّه قبل أن يأخذ وارثٌ ورقةً واحدة.\n\n٣. الوصيّة، في حدود الثلث لا أكثر.\n\n٤. وما بقي فهو التركةُ التي تُقسم بالأنصبة.",
          example: "The order is not a scholar's arrangement — the Quran states it twice inside the inheritance verses themselves. Both 4:11 and 4:12 give the shares and then add \"AFTER any bequest he made or debt.\" Allah stated the shares and, in the same sentence, put two things ahead of them.\n\nAnd the practical consequence is the one families get wrong most: a father's unpaid debt is not the heirs' private business to settle later or quietly write off. It is a charge on the estate, and dividing before paying it means every share is wrong.",
          exampleAr: "وليس الترتيبُ من ترتيب أهل العلم، بل نصّ عليه القرآنُ مرّتين داخل آيتي المواريث نفسِهما: ففي النساء ١١ و١٢ تُذكر الأنصبةُ ثم يُقال ﴿مِنۢ بَعْدِ وَصِيَّةٍۢ يُوصِى بِهَآ أَوْ دَيْنٍ﴾. فذكر سبحانه الأنصبة وقدّم عليها اثنين في الجملة نفسها.\n\nوأثرُ ذلك عمليًّا هو الذي تُخطئ فيه الأُسرُ أكثر: فدَينُ الأب ليس شأنًا خاصًّا بالورثة يقضونه لاحقًا أو يُسقطونه في صمت، وإنما هو حقٌّ في التركة؛ فمن قسم قبل قضائه فكلُّ نصيبٍ قسمه خطأ.",
          proof: "Allah instructs you concerning your children... after any bequest he may have made or debt. Your parents or your children - you know not which of them are nearest to you in benefit. These shares are an obligation imposed by Allah.",
          proofAr: "يُوصِيكُمُ ٱللَّهُ فِىٓ أَوْلَٰدِكُمْ ... مِنۢ بَعْدِ وَصِيَّةٍۢ يُوصِى بِهَآ أَوْ دَيْنٍ ۗ ءَابَآؤُكُمْ وَأَبْنَآؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًۭا ۚ فَرِيضَةًۭ مِّنَ ٱللَّهِ",
          ref: "Surah An-Nisa (4:11)",
          refAr: "سورة النساء (٤:١١)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["inheritance order", "what comes first inheritance", "debts of the deceased", "funeral costs", "before dividing the estate", "estate", "who pays the debt",
                 "ترتيب التركة", "ماذا يخرج اولا", "ديون الميت", "تجهيز الميت", "قبل القسمة", "التركة", "من يسدد الدين",
                 "dad died", "father died", "my father passed away", "he passed away and left", "dont know how to split", "how do we split the house", "what do we do with the house", "ابوي توفى", "ابي مات", "توفي والدي", "ما نعرف نقسم", "نقسم البيت", "شو نعمل بالبيت"]
        },
        {
          id: "ih-wasiyya", icon: "✍️",
          title: "The will — one third at most, and not to an heir",
          titleAr: "الوصيّة — الثلثُ فأقلّ، ولا لوارث",
          plain: "Two limits, and both come from the Prophet ﷺ rather than from later scholars.\n\nTHE CEILING is a third — and he did not merely permit a third, he called it a lot. Sa'd ibn Abi Waqqas was seriously ill in Makkah and offered two thirds. No. A half? No. A third? \"A third — and a third is a lot.\"\n\nTHE DIRECTION is the second limit: a bequest cannot be made to someone who is already an heir. You cannot use the will to top up one son.",
          plainAr: "حدّان، وكلاهما عن النبيّ ﷺ لا من كلام من بعده.\n\nالسقفُ الثلث — ولم يأذن في الثلث فحسب، بل وصفه بالكثرة. مرض سعدُ بنُ أبي وقّاصٍ بمكّة مرضًا شديدًا فعرض الثلثين، فقال: لا. فالنصف؟ قال: لا. فالثلث؟ قال: «الثلثُ، والثلثُ كثير».\n\nوالجهةُ هي الحدُّ الثاني: فلا وصيّة لوارث؛ ولا يجوز أن تُستعمل الوصيّةُ في تكميل نصيب ابنٍ دون إخوته.",
          example: "Sa'd's reason is worth knowing, because it is the reason for the whole rule. He said: \"I am leaving wealth, and I leave only ONE DAUGHTER.\" He wanted to give away most of it in charity. He ﷺ stopped him — and the wording that follows in the fuller narrations is that leaving your heirs wealthy is better than leaving them poor, begging from people.\n\nSo the third is not a limit on generosity. It is a protection of the family against it.",
          exampleAr: "وعلّةُ سعدٍ جديرةٌ بأن تُعرف، فهي علّةُ الحكم كلِّه: قال «إني أترك مالًا، وإني لم أترك إلا ابنةً واحدة». فأراد أن يُخرج أكثره صدقةً، فمنعه ﷺ. وفي تمام الرواية أنّ تركك ورثتك أغنياء خيرٌ من أن تدعهم عالةً يتكفّفون الناس.\n\nفليس الثلثُ حدًّا على الكرم، وإنما هو حمايةٌ للأهل منه.",
          proof: "I said: shall I bequeath a third and leave her two thirds? He said: a third — and a third is a lot.",
          proofAr: "قُلْتُ: فَأُوصِي بِالثُّلُثِ وَأَتْرُكُ لَهَا الثُّلُثَيْنِ؟ قَالَ: الثُّلُثُ وَالثُّلُثُ كَثِيرٌ",
          ref: "Sahih al-Bukhari, Book of Patients, Hadith 5659",
          refAr: "صحيح البخاري، كتاب المرضى، حديث ٥٦٥٩",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          note: "\"No bequest to an heir\" is narrated by at-Tirmidhi (2120), Abu Dawud, Ibn Majah and an-Nasa'i. Its chains have been discussed, but it is acted upon by the four schools and is treated as established because it was reported from him ﷺ in the Farewell Pilgrimage by several routes. The practical rule is unanimous: give to a non-heir if you wish, within the third — never to an heir.",
          noteAr: "وحديث «لا وصيّة لوارث» رواه الترمذي (٢١٢٠) وأبو داود وابن ماجه والنسائي. وقد تُكلّم في أسانيده، غير أنّ المذاهب الأربعة عاملةٌ به، وهو مقبولٌ عندهم لوروده عنه ﷺ في حجّة الوداع من طرق. والعملُ عليه بالاتفاق: أن تُوصي لغير وارثٍ في حدود الثلث، ولا تُوصي لوارثٍ أصلًا.",
          keys: ["will", "islamic will", "wasiyyah", "how much can i leave in my will", "one third", "leave money to my son", "bequest", "can i write a will", "leave everything to",
                 "الوصية", "الوصية الشرعية", "كم اوصي", "الثلث", "اوصي لابني", "لا وصية لوارث", "اكتب وصية", "اترك كل مالي",
                 "leave everything to one son", "leave it all to", "give the house to my son before i die", "write it in my name", "transfer it before", "اوصي لولدي", "اترك كل شي لابني", "اكتب البيت باسم ولدي", "انقله قبل ما اموت"]
        }
      ]
    },

    {
      id: "ih-shares", icon: "📐",
      title: "Who takes what",
      titleAr: "من يرث وكم",
      lead: "The fixed shares first, then whatever is left over. Both rules are short; it is combining them that people get wrong.",
      leadAr: "الفروضُ المقدَّرة أوّلًا، ثم ما بقي بعدها. والقاعدتان قصيرتان، وإنما يقع الخطأ في الجمع بينهما.",
      items: [
        {
          id: "ih-fixed", icon: "📊",
          title: "The fixed shares, as the Quran states them",
          titleAr: "الفروضُ المقدَّرة كما نصّ عليها القرآن",
          plain: "THE WIFE takes an eighth if there are children, a quarter if there are none. (Shared between wives if there is more than one.)\n\nTHE HUSBAND takes a quarter if there are children, a half if there are none.\n\nTHE MOTHER takes a sixth if there are children or two or more siblings; otherwise a third.\n\nTHE FATHER takes a sixth if there are children — and also whatever is left over after everyone else, if anything is.\n\nONE DAUGHTER with no son takes a half. TWO OR MORE daughters with no son share two thirds. If there is a son, the children divide together, the male taking the share of two females.\n\nA SISTER, where there are no children and no father, takes a half; two or more sisters share two thirds.",
          plainAr: "الزوجةُ لها الثمن إن كان ولد، والربع إن لم يكن. (ويُقسم بين الزوجات إن تعدّدن.)\n\nوالزوجُ له الربع إن كان ولد، والنصف إن لم يكن.\n\nوالأمُّ لها السدس إن كان ولدٌ أو اثنان من الإخوة فأكثر، وإلا فالثلث.\n\nوالأبُ له السدس إن كان ولد — وله مع ذلك ما فضل بعد أصحاب الفروض إن فضل شيء.\n\nوالبنتُ الواحدة إذا لم يكن معها ابنٌ لها النصف، والبنتان فأكثر لهنّ الثلثان. فإن كان ابنٌ اقتسم الأولادُ جميعًا ﴿لِلذَّكَرِ مِثْلُ حَظِّ ٱلْأُنثَيَيْنِ﴾.\n\nوالأختُ حيث لا ولد ولا أب لها النصف، والأختان فأكثر لهما الثلثان.",
          example: "Two things to notice before the worked cases.\n\nThe wife's share does not change with how much she brought or earned — it is fixed by whether there are children, and nothing else.\n\nAnd the father is the only one in the list who can hold BOTH a fixed share and the leftover. That is why example two below does not come out to a round number until the last step.",
          exampleAr: "وأمران يُنتبه لهما قبل الأمثلة.\n\nأنّ نصيب الزوجة لا يتغيّر بما جاءت به أو كسبته، وإنما يتقدّر بوجود الولد وعدمِه لا غير.\n\nوأنّ الأب وحده في هذا العدّ يجمع بين فرضٍ وبين ما بقي. ولهذا لا يستقيم المثالُ الثاني على عددٍ صحيحٍ إلا في خطوته الأخيرة.",
          proof: "And for you is half of what your wives leave if they have no child. But if they have a child, for you is one fourth... And for the wives is one fourth of what you leave if you leave no child. But if you leave a child, then for them is an eighth.",
          proofAr: "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَٰجُكُمْ إِن لَّمْ يَكُن لَّهُنَّ وَلَدٌۭ ۚ فَإِن كَانَ لَهُنَّ وَلَدٌۭ فَلَكُمُ ٱلرُّبُعُ ... وَلَهُنَّ ٱلرُّبُعُ مِمَّا تَرَكْتُمْ إِن لَّمْ يَكُن لَّكُمْ وَلَدٌۭ ۚ فَإِن كَانَ لَكُمْ وَلَدٌۭ فَلَهُنَّ ٱلثُّمُنُ مِمَّا تَرَكْتُم",
          ref: "Surah An-Nisa (4:12)",
          refAr: "سورة النساء (٤:١٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          note: "This is a summary of the commonest cases, not the whole science. Grandparents, grandchildren, half-siblings on either side, and the rules by which a nearer heir blocks a further one (hajb) are all real and all left out here. They are exactly why the last card of this section says what it says.",
          noteAr: "وهذا تلخيصٌ لأكثر الصور وقوعًا، وليس هو العلمَ كلَّه. فالأجدادُ وأولادُ الأولاد والإخوةُ لأبٍ ولأمّ، وأحكامُ الحجب التي يحجب بها الأقربُ من هو أبعد — كلُّها ثابتةٌ وكلُّها متروكةٌ هنا. وهي بعينها سببُ ما تقوله البطاقةُ الأخيرة من هذا القسم.",
          keys: ["inheritance shares", "how much does the wife get", "how much does the daughter get", "fixed shares", "faraid", "who inherits", "share of the mother", "share of the husband",
                 "انصبة الميراث", "نصيب الزوجة", "نصيب البنت", "الفروض", "الفرائض", "من يرث", "نصيب الام", "نصيب الزوج", "كم ترث",
                 "how much does my mother get", "what does my wife get", "what do i get from my father", "my share of the estate", "how much for each of us", "كم تاخذ امي", "شو بتاخذ زوجتي", "كم الي من ابوي", "نصيبي من التركة", "كم لكل واحد فينا", "تركة ابوي", "تركة والدي"]
        },
        {
          id: "ih-residue", icon: "➡️",
          title: "And whatever is left over after the fixed shares",
          titleAr: "وما بقي بعد أصحاب الفروض",
          plain: "The fixed shares almost never use up the whole estate. One line settles what happens to the rest: give the fixed shares to those entitled to them, and whatever remains goes to the nearest male relative on the father's side.\n\nThat is the 'asabah — the residuary heirs — and it is why a son, who has no fixed fraction anywhere in the Quran, ends up with the largest single share in most estates.",
          plainAr: "قلّ أن يستوعب أصحابُ الفروض التركةَ كلَّها، وقد فصل في الباقي سطرٌ واحد: «ألحقوا الفرائض بأهلها، فما بقي فهو لأولى رجلٍ ذكر».\n\nوهم العَصَبة، ولهذا صار الابنُ — وليس له في القرآن فرضٌ مقدَّرٌ في موضع — أكبرَ الآخذين في أكثر التركات.",
          example: "It also explains an outcome people find strange until it is spelled out: if a man dies leaving one daughter and a brother, the daughter takes her fixed half and the BROTHER takes the rest as the nearest male relative — the daughter does not automatically take everything.\n\nThat is not a rule against her. It is the same rule that made her brother's own share fall to his sons and not to his uncle. It runs on relationship, not on preference.",
          exampleAr: "وبه يُفهم ما يستغربه الناسُ حتى يُبيَّن لهم: فلو مات رجلٌ عن بنتٍ واحدةٍ وأخ، أخذت البنتُ فرضها النصف، وأخذ الأخُ الباقي لأنه أولى رجلٍ ذكر — ولا تستقلّ البنتُ بالجميع.\n\nوليس ذلك حكمًا عليها، وإنما هو الحكمُ نفسُه الذي جعل نصيب أخيها ينتقل إلى بنيه دون عمّه. فهو يجري على القرابة لا على التفضيل.",
          proof: "Give the fixed shares to those entitled to them, and whatever remains goes to the nearest male relative.",
          proofAr: "أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ",
          ref: "Sahih al-Bukhari, Book of Inheritance, Hadith 6732",
          refAr: "صحيح البخاري، كتاب الفرائض، حديث ٦٧٣٢",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["residue", "whats left over", "asabah", "nearest male relative", "who takes the rest", "uncle inherits", "brother inherits",
                 "العصبة", "الباقي", "ما بقي من التركة", "اولى رجل ذكر", "يرث العم", "يرث الاخ"]
        }
      ]
    },

    {
      id: "ih-worked", icon: "🧮",
      title: "Four estates, divided to the last note",
      titleAr: "أربعُ تركاتٍ مقسومةً إلى آخر ريال",
      lead: "Every case below uses an estate of 120,000 AFTER burial costs and debts, with no bequest — so the numbers can be compared. Each one checks its own total.",
      leadAr: "كلُّ صورةٍ فيما يأتي على تركةٍ مقدارها ١٢٠٬٠٠٠ بعد التجهيز والدَّين ومن غير وصيّة — لتصحّ المقارنة. وكلُّ واحدةٍ تراجع مجموعها بنفسها.",
      items: [
        {
          id: "ih-ex1", icon: "🅰️",
          title: "Case one — a wife, two sons and a daughter",
          titleAr: "الصورة الأولى — زوجة وابنان وبنت",
          plain: "STEP 1. The wife. There are children, so she takes an eighth.\n120,000 ÷ 8 = 15,000\n\nSTEP 2. What is left for the children.\n120,000 − 15,000 = 105,000\n\nSTEP 3. Divide it among the children, the male taking the share of two females. Count the parts: son 2 + son 2 + daughter 1 = 5 parts.\n105,000 ÷ 5 = 21,000 per part.\n\nEach son: 2 × 21,000 = 42,000\nThe daughter: 1 × 21,000 = 21,000\n\nCHECK: 15,000 + 42,000 + 42,000 + 21,000 = 120,000 ✔",
          plainAr: "الخطوة ١: الزوجة. ثَمَّ ولد، فلها الثمن.\n١٢٠٬٠٠٠ ÷ ٨ = ١٥٬٠٠٠\n\nالخطوة ٢: الباقي للأولاد.\n١٢٠٬٠٠٠ − ١٥٬٠٠٠ = ١٠٥٬٠٠٠\n\nالخطوة ٣: يُقسم بينهم ﴿لِلذَّكَرِ مِثْلُ حَظِّ ٱلْأُنثَيَيْنِ﴾. وعدُّ الأسهم: ابن ٢ + ابن ٢ + بنت ١ = ٥ أسهم.\n١٠٥٬٠٠٠ ÷ ٥ = ٢١٬٠٠٠ للسهم.\n\nلكلِّ ابن: ٢ × ٢١٬٠٠٠ = ٤٢٬٠٠٠\nوللبنت: ١ × ٢١٬٠٠٠ = ٢١٬٠٠٠\n\nالمراجعة: ١٥٬٠٠٠ + ٤٢٬٠٠٠ + ٤٢٬٠٠٠ + ٢١٬٠٠٠ = ١٢٠٬٠٠٠ ✔",
          example: "The step families skip is the second one. They take the estate, divide it among the children in the 2:1 ratio, and hand the mother something afterwards out of goodwill. That is not her share — hers came first and it is fixed. Working in the wrong order produces a number that looks generous and is short.",
          exampleAr: "والخطوةُ التي تُسقطها الأُسر هي الثانية: يأخذون التركة فيقسمونها على الأولاد للذكر مثل حظ الأنثيين، ثم يعطون الأمَّ شيئًا على وجه الإحسان. وليس ذلك نصيبها؛ فنصيبُها مقدَّمٌ ومقدَّر. والعملُ على غير الترتيب يُخرج عددًا يبدو كريمًا وهو ناقص.",
          keys: ["wife two sons one daughter", "example inheritance", "divide the estate example", "how to calculate inheritance", "inheritance calculation", "my father died what do we get",
                 "مثال ميراث", "زوجة وابنان وبنت", "كيف نقسم التركة", "حساب الميراث", "مات ابي كيف نقسم", "قسمة التركة مثال",
                 "show me an example", "work it out for me", "do the maths", "an actual example", "اعطني مثال", "احسبها لي", "مثال محلول", "كيف تطلع الحسبة"]
        },
        {
          id: "ih-ex2", icon: "🅱️",
          title: "Case two — a wife, one daughter, and both parents alive",
          titleAr: "الصورة الثانية — زوجة وبنتٌ واحدة وأبوان",
          plain: "STEP 1. The fixed shares.\nWife (there is a child): an eighth = 15,000\nDaughter (one, no son): a half = 60,000\nMother (there is a child): a sixth = 20,000\nFather (there is a child): a sixth = 20,000\n\nSTEP 2. Add them up.\n15,000 + 60,000 + 20,000 + 20,000 = 115,000\n\nSTEP 3. Something is left: 120,000 − 115,000 = 5,000.\nIt goes to the nearest male relative — here, the father.\n\nFATHER'S TOTAL: 20,000 + 5,000 = 25,000\n\nCHECK: 15,000 + 60,000 + 20,000 + 25,000 = 120,000 ✔",
          plainAr: "الخطوة ١: الفروض.\nالزوجة (وثَمَّ ولد): الثمن = ١٥٬٠٠٠\nالبنت (واحدةٌ ولا ابن معها): النصف = ٦٠٬٠٠٠\nالأم (وثَمَّ ولد): السدس = ٢٠٬٠٠٠\nالأب (وثَمَّ ولد): السدس = ٢٠٬٠٠٠\n\nالخطوة ٢: الجمع.\n١٥٬٠٠٠ + ٦٠٬٠٠٠ + ٢٠٬٠٠٠ + ٢٠٬٠٠٠ = ١١٥٬٠٠٠\n\nالخطوة ٣: بقي شيء: ١٢٠٬٠٠٠ − ١١٥٬٠٠٠ = ٥٬٠٠٠.\nفهو لأولى رجلٍ ذكر، وهو هنا الأب.\n\nمجموعُ الأب: ٢٠٬٠٠٠ + ٥٬٠٠٠ = ٢٥٬٠٠٠\n\nالمراجعة: ١٥٬٠٠٠ + ٦٠٬٠٠٠ + ٢٠٬٠٠٠ + ٢٥٬٠٠٠ = ١٢٠٬٠٠٠ ✔",
          example: "This case is here because it shows the daughter taking 60,000 — half the estate, and more than any other single heir including her grandfather. Anyone who believes the rules always halve a woman's share should work this one through slowly.\n\nIt also shows the father in his double role: a sixth as a fixed share, plus the remainder because there is no son.",
          exampleAr: "وأُدرجت هذه الصورةُ لأنّ البنت تأخذ فيها ٦٠٬٠٠٠ — نصفَ التركة، وأكثرَ من كلِّ وارثٍ منفردٍ فيها ومنهم جدُّها. فمن اعتقد أنّ الأحكام تنقص المرأة أبدًا فليعمل هذه الصورةَ على مهل.\n\nوفيها الأبُ في وصفيه: السدسُ فرضًا، والباقي تعصيبًا إذ لا ابن.",
          keys: ["daughter half the estate", "wife daughter parents", "grandfather inherits", "one daughter no son", "does the daughter get everything", "father of the deceased",
                 "بنت واحدة", "زوجة وبنت وابوان", "يرث الجد", "بنت بلا ابن", "هل تاخذ البنت كل شيء", "والد المتوفى"]
        },
        {
          id: "ih-ex3", icon: "🅾️",
          title: "Case three — a grown son and a young sister",
          titleAr: "الصورة الثالثة — ابنٌ بالغ وأختٌ صغيرة",
          plain: "The case from earlier on this page, now with numbers. A man dies leaving a wife, a son of twenty-five, and a daughter of eight. No parents living.\n\nSTEP 1. Wife: an eighth = 15,000\nSTEP 2. Left for the children: 105,000\nSTEP 3. Parts: son 2 + daughter 1 = 3 parts. 105,000 ÷ 3 = 35,000\n\nSON: 70,000\nDAUGHTER, aged eight: 35,000\n\nCHECK: 15,000 + 70,000 + 35,000 = 120,000 ✔",
          plainAr: "هي الصورةُ المتقدّمة في هذه الصفحة، وقد صارت أرقامًا. مات رجلٌ عن زوجةٍ وابنٍ في الخامسة والعشرين وبنتٍ في الثامنة، ولا أبوين له.\n\nالخطوة ١: الزوجة: الثمن = ١٥٬٠٠٠\nالخطوة ٢: الباقي للأولاد: ١٠٥٬٠٠٠\nالخطوة ٣: الأسهم: ابن ٢ + بنت ١ = ٣ أسهم. ١٠٥٬٠٠٠ ÷ ٣ = ٣٥٬٠٠٠\n\nللابن: ٧٠٬٠٠٠\nوللبنت ذات الثمانية أعوام: ٣٥٬٠٠٠\n\nالمراجعة: ١٥٬٠٠٠ + ٧٠٬٠٠٠ + ٣٥٬٠٠٠ = ١٢٠٬٠٠٠ ✔",
          example: "And now the part that is not arithmetic. That 35,000 became HERS the moment her father died — not when she turns eighteen, not when her brother judges her ready. Her age changes who HOLDS it. It does not change who OWNS it.\n\nSo the brother's job is: keep it separate, keep it safe, record it in her name, spend nothing of it on the household, and hand it over when she can manage it — with witnesses. If he is poor and acting as her guardian, 4:6 allows him to take from it what is reasonable for that work; if he is not in need, the same verse tells him to refrain entirely.",
          exampleAr: "وأمّا الذي ليس حسابًا فهو ما يلي: أنّ هذه الخمسة والثلاثين ألفًا صارت مِلكَها ساعةَ مات أبوها — لا حين تبلغ الثامنة عشرة، ولا حين يرى أخوها أنها رشدت. فسنُّها تغيّر من يُمسكه، ولا تغيّر من يملكه.\n\nفوظيفةُ الأخ: أن يفرزه، ويحفظه، ويكتبه باسمها، ولا يُنفق منه على البيت، ويدفعه إليها إذا أحسنت تدبيره — بشهود. فإن كان فقيرًا وهو وليّها فقد أذنت له آيةُ النساء أن يأكل بالمعروف قدر عمله؛ وإن كان غنيًّا فقد أمرته الآيةُ نفسها أن يستعفف.",
          proof: "And let those fear Allah who, if they themselves left behind weak offspring, would fear for them. So let them fear Allah and speak words of appropriate justice.",
          proofAr: "وَلْيَخْشَ ٱلَّذِينَ لَوْ تَرَكُوا۟ مِنْ خَلْفِهِمْ ذُرِّيَّةًۭ ضِعَٰفًا خَافُوا۟ عَلَيْهِمْ فَلْيَتَّقُوا۟ ٱللَّهَ وَلْيَقُولُوا۟ قَوْلًۭا سَدِيدًا",
          ref: "Surah An-Nisa (4:9)",
          refAr: "سورة النساء (٤:٩)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          note: "Read 4:9 again — it is placed among the inheritance verses on purpose. It does not say \"be fair to orphans.\" It says: imagine it was YOUR children left behind weak, and act from that. The rule is enforced by making you swap places with the person you might wrong.",
          noteAr: "وأعد النظر في آيةِ ﴿وَلْيَخْشَ﴾، فقد وُضعت بين آيات المواريث قصدًا: فليست تقول «أنصفوا اليتامى»، وإنما تقول: تصوّر أنهم أولادُك تركتهم ضعافًا، ثم اعمل من هذا الموضع. فالحكمُ يُلزمك بأن تبادل مكانك بمكان من قد تظلمه.",
          link: "#sd-self",
          linkEn: "The whisper that says it is safer with you →",
          linkAr: "الخاطرُ الذي يقول إنه عندك أحفظ ←",
          keys: ["my sister inheritance", "sisters share", "young daughter inheritance", "holding her money", "she is too young", "brother keeping the money", "orphan share", "when do i give it to her",
                 "ميراث اختي", "نصيب الاخت", "بنت صغيرة وميراث", "احفظ مالها", "هي صغيرة", "الاخ يمسك المال", "متى ادفع لها",
                 "she is still a child", "hold it until she grows", "when she turns eighteen", "لسا صغيرة", "لما تكبر", "اذا صارت بالثامنة عشرة"]
        },
        {
          id: "ih-ex4", icon: "🆎",
          title: "Case four — a woman dies with no children",
          titleAr: "الصورة الرابعة — تموت امرأةٌ ولا ولد لها",
          plain: "A woman dies leaving a husband, no children, no parents, one full brother and one full sister.\n\nSTEP 1. Husband. No children, so a half.\n120,000 ÷ 2 = 60,000\n\nSTEP 2. What remains: 60,000, for the siblings, the male taking the share of two females.\nParts: brother 2 + sister 1 = 3. 60,000 ÷ 3 = 20,000\n\nBROTHER: 40,000\nSISTER: 20,000\n\nCHECK: 60,000 + 40,000 + 20,000 = 120,000 ✔",
          plainAr: "تموت امرأةٌ عن زوجٍ ولا ولد لها ولا أبوين، ولها أخٌ شقيقٌ وأختٌ شقيقة.\n\nالخطوة ١: الزوج. لا ولد، فله النصف.\n١٢٠٬٠٠٠ ÷ ٢ = ٦٠٬٠٠٠\n\nالخطوة ٢: الباقي ٦٠٬٠٠٠ للإخوة ﴿لِلذَّكَرِ مِثْلُ حَظِّ ٱلْأُنثَيَيْنِ﴾.\nالأسهم: أخ ٢ + أخت ١ = ٣. ٦٠٬٠٠٠ ÷ ٣ = ٢٠٬٠٠٠\n\nللأخ: ٤٠٬٠٠٠\nوللأخت: ٢٠٬٠٠٠\n\nالمراجعة: ٦٠٬٠٠٠ + ٤٠٬٠٠٠ + ٢٠٬٠٠٠ = ١٢٠٬٠٠٠ ✔",
          example: "This case exists to make one thing visible: a woman's estate is divided by the same rules as a man's. Her wealth was hers, it did not merge with her husband's during the marriage, and on her death he takes a stated fraction of it exactly as she would have taken a stated fraction of his.\n\nThat is worth saying because in a good many of our countries the practice is that a wife's property quietly becomes the household's while she is alive, which makes this division impossible to carry out honestly when the day comes.",
          exampleAr: "وأُدرجت هذه الصورةُ لتبيين أمرٍ واحد: أنّ تركة المرأة تُقسم بالأحكام التي تُقسم بها تركةُ الرجل. فمالُها كان مالها، ولم يندمج في مال زوجها في أثناء النكاح، فإذا ماتت أخذ منه جزءًا مقدَّرًا كما كانت تأخذ من ماله جزءًا مقدَّرًا.\n\nوحقُّ هذا أن يُقال، فإنّ العمل في كثيرٍ من بلادنا أن يصير مالُ الزوجة مالَ البيت في صمتٍ وهي حيّة، فيتعذّر هذا القسمُ بصدقٍ إذا جاء اليوم.",
          proof: "If a man dies, leaving no child but only a sister, she will have half of what he left. And he inherits from her if she has no child... If there are both brothers and sisters, the male will have the share of two females. Allah makes clear to you His law, lest you go astray.",
          proofAr: "إِنِ ٱمْرُؤٌا۟ هَلَكَ لَيْسَ لَهُۥ وَلَدٌۭ وَلَهُۥٓ أُخْتٌۭ فَلَهَا نِصْفُ مَا تَرَكَ ۚ وَهُوَ يَرِثُهَآ إِن لَّمْ يَكُن لَّهَا وَلَدٌۭ ... وَإِن كَانُوٓا۟ إِخْوَةًۭ رِّجَالًۭا وَنِسَآءًۭ فَلِلذَّكَرِ مِثْلُ حَظِّ ٱلْأُنثَيَيْنِ ۗ يُبَيِّنُ ٱللَّهُ لَكُمْ أَن تَضِلُّوا۟",
          ref: "Surah An-Nisa (4:176)",
          refAr: "سورة النساء (٤:١٧٦)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["woman dies no children", "wifes inheritance", "husband inherits from wife", "kalalah", "no children inheritance", "sister inherits brother", "her own money",
                 "ماتت ولا ولد لها", "ميراث الزوجة", "يرث الزوج من زوجته", "الكلالة", "بلا اولاد", "ترث الاخت", "مالها الخاص"]
        }
      ]
    },

    {
      id: "ih-hard", icon: "❓",
      title: "The three questions this section always gets",
      titleAr: "ثلاثةُ أسئلةٍ لا يخلو منها هذا الباب",
      lead: "Asked honestly, and answered without pretending any of them is easy.",
      leadAr: "تُسأل بصدق، ويُجاب عنها من غير ادّعاء أنّ شيئًا منها هيّن.",
      items: [
        {
          id: "ih-twotoone", icon: "⚖️",
          title: "\"Why does the male take twice the female's share?\"",
          titleAr: "«ولماذا للذكر مثلُ حظّ الأنثيين؟»",
          plain: "Three things, and the first two are facts about the text that most people arguing about this have never checked.\n\nFIRST, the ratio is not universal. It applies where children inherit together, and where full or paternal siblings inherit together. It is not the rule of the whole system.\n\nSECOND, the Quran itself assigns EQUAL shares elsewhere. The mother and the father each take a sixth when there is a child — the same fraction, in the same verse. And in kalalah, a maternal brother and a maternal sister take a sixth EACH, explicitly, male and female alike: \"for each one of them is a sixth.\"\n\nTHIRD, where the ratio does apply, the larger share arrives attached to an obligation the smaller one does not carry: the mahr, the housing, the maintenance of a wife and children, and support of relatives in need. Her share is hers to keep; a portion of his is already committed before he receives it.",
          plainAr: "ثلاثةُ أمور، وأوّلان منها خبرٌ عن النصّ لم يتحقّق منه أكثرُ المتنازعين فيه.\n\nالأوّل: أنّ هذه النسبة ليست عامّة. وإنما هي حيث يرث الأولادُ معًا، وحيث يرث الإخوةُ الأشقّاء أو لأبٍ معًا. وليست هي قاعدةَ النظام كلِّه.\n\nالثاني: أنّ القرآن نفسه سوّى بينهما في مواضع. فالأمُّ والأبُ لكلٍّ منهما السدسُ إذا كان ولد — الكسرُ نفسه في الآية نفسها. وفي الكلالة: الأخُ لأمٍّ والأختُ لأمٍّ لكلِّ واحدٍ منهما السدس، بالنصّ، الذكرُ والأنثى سواء: ﴿فَلِكُلِّ وَٰحِدٍۢ مِّنْهُمَا ٱلسُّدُسُ﴾.\n\nالثالث: أنّ النصيب الأكبر حيث ثبتت النسبةُ يأتي معلَّقًا بتكليفٍ لا يحمله الأصغر: المهرُ والسكنى ونفقةُ الزوجة والولد والقرابةِ المحتاجة. فنصيبُها لها تُمسكه، وبعضُ نصيبه مصروفٌ عنه قبل أن يقبضه.",
          example: "And there is a fourth thing, which is not an argument but a check. The Quran opens this whole subject by establishing that women inherit AT ALL, and it does so in a society where they did not: \"For men is a share of what the parents and close relatives leave, and FOR WOMEN is a share of what the parents and close relatives leave, be it little or much — an obligatory share.\"\n\nRead that against what preceded it and the direction of travel is unmistakable. Which makes the honest complaint in most of our families not the ratio at all. It is that the daughters are given nothing, and the verse forbidding that is the same verse people quote the ratio from.",
          exampleAr: "وثَمَّ أمرٌ رابع، وليس حجاجًا وإنما هو مراجعة: أنّ القرآن افتتح البابَ كلَّه بتقرير أنّ النساء يرثن أصلًا، وقرّره في مجتمعٍ لم يكنّ يرثن فيه: ﴿لِّلرِّجَالِ نَصِيبٌۭ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ وَلِلنِّسَآءِ نَصِيبٌۭ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ مِمَّا قَلَّ مِنْهُ أَوْ كَثُرَ ۚ نَصِيبًۭا مَّفْرُوضًۭا﴾.\n\nفاقرأها في مقابل ما قبلها تتبيّن الوجهةُ بلا لبس. وبهذا يظهر أنّ الشكوى الصادقة في أكثر أُسرنا ليست في النسبة أصلًا، وإنما في أنّ البنات لا يُعطَين شيئًا — والآيةُ التي تحرّم ذلك هي الآيةُ التي يُنقل منها ذكرُ النسبة.",
          proof: "For men is a share of what the parents and close relatives leave, and for women is a share of what the parents and close relatives leave, be it little or much - an obligatory share.",
          proofAr: "لِّلرِّجَالِ نَصِيبٌۭ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ وَلِلنِّسَآءِ نَصِيبٌۭ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ مِمَّا قَلَّ مِنْهُ أَوْ كَثُرَ ۚ نَصِيبًۭا مَّفْرُوضًۭا",
          ref: "Surah An-Nisa (4:7)",
          refAr: "سورة النساء (٤:٧)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["why does the male get double", "two to one", "unfair to women inheritance", "womens share", "is inheritance sexist", "daughter gets half", "why less for women",
                 "لماذا للذكر مثل حظ الانثيين", "نصيب المراه من الميراث", "ظلم المراه في الميراث", "لماذا نصف", "حق البنت في الميراث",
                 "twice what i get", "double my share", "he gets two i get one", "my brother gets more", "ضعفي", "ضعف نصيبي", "اخوي ياخذ اكثر", "ليش هو اكثر مني"]
        },
        {
          id: "ih-denied", icon: "🚷",
          title: "\"We don't give the daughters here\" — what that actually is",
          titleAr: "«نحن لا نورّث البنات» — ما هذا على الحقيقة؟",
          plain: "In a great many of our families and villages, land or a business is passed to the sons and the daughters are given nothing, or given a token and asked to sign. It is called custom. It is called keeping the property in the family.\n\nName it accurately: it is taking property that belongs to somebody else. The share was hers the moment the person died, by an obligatory allocation stated in the Quran. Withholding it is not a family arrangement — it is holding another person's money, and the fact that she is your sister changes nothing about the ruling.",
          plainAr: "في كثيرٍ من أُسرنا وقُرانا تُنقل الأرضُ أو المتجر إلى الأبناء، ولا تُعطى البناتُ شيئًا، أو يُعطَين شيئًا يسيرًا ويُطلب منهنّ التوقيع. ويُسمّى ذلك عُرفًا، ويُسمّى حفظًا للمال في العائلة.\n\nوسمِّه باسمه: هو أخذُ مالٍ يملكه غيرُك. فالنصيبُ صار لها ساعةَ مات المورّث، بفرضٍ منصوصٍ في القرآن. ومنعُه ليس ترتيبًا عائليًّا، وإنما هو إمساكُ مال إنسانٍ آخر، وكونُها أختَك لا يغيّر من الحكم شيئًا.",
          example: "The Quran closes the inheritance verses with two sentences that are unlike anything around them. After the shares: \"These are the limits of Allah\" — and then Paradise for whoever keeps them, and the Fire for whoever transgresses them.\n\nThat pairing is not attached to the verses on fasting, or on dress, or on trade. It was attached to these. Somebody knew exactly what families would do about this subject.\n\nAnd a note on being asked to sign. A waiver given freely by an adult woman who genuinely wants to give her share to her brothers is valid — it is a gift, and gifts are permitted. A waiver signed at a gathering where refusing means being cut off is not consent, and taking property on the strength of it is taking it without consent.",
          exampleAr: "وقد ختم القرآنُ آيات المواريث بجملتين لا نظير لهما فيما حولهما: بعد الأنصبة ﴿تِلْكَ حُدُودُ ٱللَّهِ﴾ — ثم الجنّةُ لمن أطاع، والنارُ لمن تعدّى.\n\nولم يُقرن هذا بآيات الصيام ولا اللباس ولا البيوع، وإنما قُرن بهذه. وقد علم العليمُ ما تصنعه الأُسرُ في هذا الباب.\n\nوتنبيهٌ في مسألة التنازل: فتنازلُ المرأة البالغة الراشدة عن نصيبها لإخوتها عن طيب نفسٍ صحيحٌ؛ لأنه هبة، والهبةُ جائزة. وأمّا توقيعٌ يقع في مجلسٍ يكون الامتناعُ فيه قطيعةً فليس رضًا، وأخذُ المال به أخذٌ بغير رضا.",
          proof: "These are the limits set by Allah, and whoever obeys Allah and His Messenger will be admitted by Him to gardens under which rivers flow... And whoever disobeys Allah and His Messenger and transgresses His limits - He will put him into the Fire.",
          proofAr: "تِلْكَ حُدُودُ ٱللَّهِ ۚ وَمَن يُطِعِ ٱللَّهَ وَرَسُولَهُۥ يُدْخِلْهُ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ ... وَمَن يَعْصِ ٱللَّهَ وَرَسُولَهُۥ وَيَتَعَدَّ حُدُودَهُۥ يُدْخِلْهُ نَارًا",
          ref: "Surah An-Nisa (4:13-14)",
          refAr: "سورة النساء (٤:١٣-١٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["daughters not given inheritance", "they didnt give me my share", "custom not to give women", "sisters share denied", "made me sign", "waiver", "family took the land", "my brothers took everything",
                 "لم يعطوني نصيبي", "لا نورث البنات", "حرمان البنت من الميراث", "وقعت على تنازل", "التنازل عن الميراث", "اخذوا الارض", "اخوتي اخذوا كل شيء",
                 "wont give my sister", "refuse to give her", "they kept her share", "she got nothing", "cut my sister out", "only the sons got", "ما بدهم يعطوا اختي", "حرموا اختي", "ما اعطوها نصيبها", "الاولاد بس اخذوا", "ما طلعوا لها شي"]
        },
        {
          id: "ih-ask", icon: "🧑‍⚖️",
          title: "And then take it to somebody who does this properly",
          titleAr: "ثم ارفع الأمر إلى من يُحسن هذا",
          plain: "This section is a map, not a calculator. Real estates go wrong on things it has deliberately not taught you: which heir blocks which, grandparents and grandchildren, half-siblings on the father's side against full siblings, 'awl when the fractions overshoot the estate, radd when they fall short, a missing heir, a pregnant widow, a non-Muslim heir, property in a country whose courts apply their own code.\n\nAny one of those changes the answer completely, and a confident wrong division is worse than an admitted unknown, because it gets acted on.",
          plainAr: "هذا القسمُ خريطة، لا آلةَ حساب. وإنما تفسد التركاتُ الواقعة بما تركه هذا القسمُ قصدًا: الحجبُ ومن يحجب من، والأجدادُ وأولادُ الأولاد، والإخوةُ لأبٍ مع الأشقّاء، والعَوْلُ إذا زادت الفروضُ على التركة، والردُّ إذا نقصت، والحملُ والمفقودُ والوارثُ غيرُ المسلم، ومالٌ في بلدٍ تُطبّق محاكمُه قانونها.\n\nوكلُّ واحدةٍ من هذه تقلب الجوابَ قلبًا، وقسمةٌ خاطئةٌ واثقةٌ شرٌّ من جهلٍ معترَفٍ به، لأنها تُنفَّذ.",
          example: "What to do, concretely: write down every heir who is alive, every debt, and whether there is a will — then take that page to a scholar or a specialist in fara'id, or to a Sharia court where there is one. It takes an afternoon.\n\nAnd do it EARLY. The single most common cause of a family destroyed by an estate is not greed. It is delay: nobody wanted to raise it while the grief was fresh, three years passed, the property was used, and by the time it was divided nobody could agree on what there had been.",
          exampleAr: "والعملُ المحدَّد: أن تكتب كلَّ وارثٍ حيّ، وكلَّ دَين، وهل ثَمَّ وصيّة — ثم تحمل هذه الورقةَ إلى عالمٍ أو إلى متخصّصٍ في الفرائض، أو إلى محكمةٍ شرعيّةٍ حيث توجد. ولا يستغرق ذلك إلا بعد ظهر.\n\nوعجِّل به: فأكثرُ ما يهدم الأُسرَ في التركات ليس الطمع، وإنما التأخير: لم يشأ أحدٌ أن يُثيرها والحزنُ قريب، فمضت ثلاث سنين، واستُعمل المال، فلمّا جاءت القسمةُ لم يتفق أحدٌ على ما كان.",
          keys: ["inheritance lawyer", "who do i ask about inheritance", "sharia court", "faraid specialist", "complicated inheritance", "grandchildren inherit", "non muslim heir", "pregnant widow", "awl", "radd",
                 "من اسأل في الميراث", "المحكمة الشرعية", "متخصص فرائض", "ميراث معقد", "يرث الحفيد", "العول", "الرد", "وارث غير مسلم", "الحمل في الميراث"]
        }
      ]
    }
  ],

  closing: "One sentence to take from all of it: the shares were fixed by Allah and not by the family, which means the argument you are dreading is not actually available to have. Somebody has already decided. What is left to you is only whether you carry it out — and whether you do it this month or in three years, while everybody still remembers what there was.",
  closingAr: "وجملةٌ واحدةٌ تُؤخذ من هذا كلِّه: أنّ الأنصبة قدّرها اللهُ لا الأهل، ومعنى ذلك أنّ الخصومةَ التي تتوجّس منها ليست متاحةً أصلًا؛ فقد قضى القاضي. ولم يبقَ إليك إلا التنفيذ — وهل يكون هذا الشهر أم بعد ثلاث سنين، والناسُ بعدُ يذكرون ما كان."
};
