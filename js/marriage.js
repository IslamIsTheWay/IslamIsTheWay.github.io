/* ============================================================
   MARRIAGE, AND WHAT YOU AGREE TO — النكاح وما يُشترط فيه
   guidance.html#marriage.  Rendered by renderGrouped("marriageBox").

   WHY THIS EXISTS. The owner asked for "the marriage things and
   agreements and some other things." The handoff had already
   recorded marriage and family rights as the largest gap on the
   Guidance page: the site could explain wudu, zakat and tawheed
   and had nothing at all on the contract most people's whole
   adult life turns on.

   THE SHAPE FOLLOWS WHAT PEOPLE ACTUALLY GET WRONG, not the
   order of a fiqh manual. Five groups: choosing, the contract
   itself, living inside it, what to do when it breaks, and then
   agreements in general — because the marriage contract IS a
   contract, and the Quran's rules about writing things down and
   keeping your word are the same rules.

   THREE THINGS THIS FILE IS CAREFUL ABOUT.

   1. THE MAHR IS HERS. Not her father's, not the family's, and
      not a price paid for her. 4:4 is explicit and the practice
      in several of our countries contradicts it outright. The
      card says so.

   2. CONSENT IS A CONDITION, NOT A COURTESY. al-Bukhari 5136 and
      the case of Khansa bint Khidham at al-Bukhari 5138, where a
      father married his daughter off, she disliked it, she went
      to the Prophet ﷺ and he ANNULLED the marriage. That case is
      quoted because a rule with a precedent attached is much
      harder to talk your way around.

   3. WHERE SCHOLARS DIFFER, THE PAGE SAYS SO. The guardian
      (wali) is a condition of validity to the majority and not
      to the Hanafis for an adult woman. Presenting one madhhab's
      position as though it were the only one is not honesty, and
      the site does not do it anywhere else.

   ON GRADINGS, AND ONE CORRECTION WORTH RECORDING. The famous
   "if one whose religion and character please you proposes,
   marry him" is usually quoted as at-Tirmidhi 1084 — but
   at-Tirmidhi himself records that its narrator was contradicted,
   that al-Layth's mursal version is more likely, and that
   al-Bukhari did not consider that wording preserved. So this
   file cites 1085 instead, the Abu Hatim al-Muzani wording that
   at-Tirmidhi graded hasan gharib, and says which is which.

   Likewise "the most hated permitted thing to Allah is divorce"
   is outside the two Sahihs, its chain is criticised, and the
   card says so — and then makes the same point from 2:229,
   which needs no defending.

   Every proof was read out of the record before it was quoted:
   al-Bukhari 2721, 5065, 5090, 5136, 5138, 5186; Muslim's Books
   of Marriage and of Suckling (cited BY BOOK, never by number);
   at-Tirmidhi 1085, 1352, 3895; Abu Dawud 2085 and 3594; Ibn
   Majah 2018 with its status stated. Verses from this site's own
   js/quran-text.js.
   ============================================================ */

const MARRIAGE = {
  title: "Marriage, and what you are actually agreeing to",
  titleAr: "النكاح، وما الذي تلتزمه حقًّا",
  intro: "Most people enter the largest contract of their lives knowing the wedding customs of their country and almost nothing about the contract. This section separates the two. What follows is what makes a marriage valid, what each side is owed inside it, what to do when it is going wrong, and what the Quran says about agreements in general — because a marriage is one, and the rules that govern a written loan govern this too.",
  introAr: "يدخل أكثرُ الناس أعظمَ عقودِ أعمارهم وهم يعرفون عاداتِ الزفاف في بلادهم ولا يكادون يعرفون من العقد شيئًا. وهذا القسمُ يفرّق بين الأمرين: فيه ما ينعقد به النكاح، وما لكلِّ طرفٍ فيه، وما يُصنع إذا اعتلّ، ثم ما جاء في القرآن في العهود عامّةً — فإنّ النكاح منها، والأحكامُ التي تضبط دَينًا مكتوبًا تضبط هذا أيضًا.",

  groups: [
    {
      id: "mg-before", icon: "🔎",
      title: "Before it — choosing, and being chosen",
      titleAr: "قبله — أن تختار وأن تُختار",
      lead: "Two cards, and both of them are about a decision people make on the wrong information.",
      leadAr: "بطاقتان، وكلتاهما في قرارٍ يتّخذه الناسُ على غير بيّنة.",
      items: [
        {
          id: "mg-choose", icon: "🧭",
          title: "Four things people marry for, and which one to hold on to",
          titleAr: "أربعٌ يُنكح لها، وأيُّها يُظفر به",
          plain: "He ﷺ did not pretend people marry for one reason. He listed the four honestly — wealth, family standing, beauty, religion — and then said which one to secure.\n\nThat is not a command to marry someone you find unattractive or to ignore whether a family is sane. It is a ranking. The other three are real and they are allowed to matter; they are simply the three that can change. Money goes. Standing goes. Beauty goes, on a schedule everybody knows about. Character is the one you will still be living with in thirty years.",
          plainAr: "لم يزعم ﷺ أنّ الناس ينكحون لمعنًى واحد، وإنما عدّ الأربعةَ صادقًا — المال والحسب والجمال والدين — ثم قال بأيِّها يُظفر.\n\nوليس هذا أمرًا بأن تنكح من لا يقع في نفسك، ولا بأن تُغفل حالَ الأهل. وإنما هو ترتيب: فالثلاثةُ الأخرى حقٌّ ويجوز أن تُعتبر، غير أنها هي الثلاثةُ التي تتغيّر. يذهب المال، ويذهب الحسب، ويذهب الجمالُ في أجلٍ يعرفه الناسُ كلُّهم. وأمّا الخُلق فهو الذي تعيش معه بعد ثلاثين سنة.",
          proof: "A woman is married for four things: for her wealth, for her lineage, for her beauty and for her religion. So secure the one of religion — may your hands be dusty.",
          proofAr: "تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا، وَلِحَسَبِهَا، وَجَمَالِهَا، وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ",
          ref: "Sahih al-Bukhari, Book of Marriage, Hadith 5090",
          refAr: "صحيح البخاري، كتاب النكاح، حديث ٥٠٩٠",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          example: "And the instruction runs the other way too, at the family receiving a proposal: if someone whose religion and character you are pleased with comes to you, marry him. Not: wait for a better salary. Not: he is from the wrong town. The warning attached is that refusing on those grounds produces widespread corruption in the land — which is exactly what a generation of people who cannot afford to marry produces.",
          exampleAr: "والخطابُ متوجّهٌ إلى الجهة الأخرى كذلك، إلى الأهل يُخطب إليهم: إذا جاءكم من ترضون دينه وخلقه فأنكحوه. لا: انتظروا راتبًا أعلى، ولا: هو من غير بلدنا. وقُرن به وعيدٌ: أنّ تركَ ذلك تكون به فتنةٌ في الأرض وفسادٌ عريض — وهو عينُ ما يُنتجه جيلٌ لا يستطيع أن يتزوّج.",
          extraProof: "If one whose religion and character please you comes to you, marry him. If you do not, there will be tribulation in the land and widespread corruption.",
          extraProofAr: "إِذَا جَاءَكُمْ مَنْ تَرْضَوْنَ دِينَهُ وَخُلُقَهُ فَأَنْكِحُوهُ، إِلَّا تَفْعَلُوا تَكُنْ فِتْنَةٌ فِي الْأَرْضِ وَفَسَادٌ",
          extraRef: "Jami' at-Tirmidhi, Book of Marriage, Hadith 1085",
          extraRefAr: "جامع الترمذي، كتاب النكاح، حديث ١٠٨٥",
          note: "A note on that second hadith, because it is nearly always quoted from the wrong place. The familiar wording is at-Tirmidhi 1084 — and at-Tirmidhi himself records that its narrator was contradicted, that al-Layth's mursal version is the more likely one, and that al-Bukhari did not consider that wording preserved. The wording quoted here is 1085, from Abu Hatim al-Muzani, which at-Tirmidhi graded hasan gharib.",
          noteAr: "تنبيهٌ في الحديث الثاني، فإنه يكاد لا يُنقل إلا من الموضع الخطأ: فاللفظُ المشهور هو عند الترمذي (١٠٨٤)، وقد ذكر الترمذيُّ نفسُه أنّ راويه خُولف، وأنّ رواية الليث المرسلة أشبه، وأنّ البخاريّ لم يعدّ ذلك اللفظ محفوظًا. واللفظُ المذكور هنا هو (١٠٨٥) من حديث أبي حاتم المزنيّ، وقال فيه الترمذي: حسنٌ غريب.",
          keys: ["how to choose a wife", "how to choose a husband", "marriage criteria", "what to look for in a spouse", "should i marry him", "proposal", "khitbah", "family said no", "he is poor",
                 "كيف أختار زوجة", "كيف أختار زوجا", "معايير الزواج", "صفات الزوج", "أتزوجه", "الخطبة", "أهلي رفضوا", "هو فقير"]
        },
        {
          id: "mg-means", icon: "🪙",
          title: "\"I cannot afford to marry\" — and who made it expensive",
          titleAr: "«لا أستطيع الزواج» — ومن الذي جعله باهظًا؟",
          plain: "The instruction to the young is plain: whoever among you is able to marry, let him marry; whoever is not, let him fast, for it is a shield for him.\n\nBut look at what \"able\" has been made to mean. In much of the Muslim world a young man now needs a flat, a car, gold, a hall, several hundred guests and a mahr set by competition between families — none of which is in the hadith, and none of which is in the Quran. We built that ourselves, and then we complain about what young people do instead.",
          plainAr: "الخطابُ للشباب بيّن: من استطاع منكم الباءةَ فليتزوّج، ومن لم يستطع فعليه بالصوم فإنه له وِجاء.\n\nولكن انظر إلى ما صيّرنا «الاستطاعة» تعنيه: صار الشابُّ في كثيرٍ من بلاد المسلمين يحتاج إلى شقّةٍ وسيّارةٍ وذهبٍ وقاعةٍ ومئاتٍ من المدعوّين ومهرٍ تتنافس فيه الأُسر — وليس شيءٌ من ذلك في الحديث ولا في القرآن. نحن بنيناه بأيدينا، ثم نشكو ممّا يصنعه الشبابُ بدلًا منه.",
          proof: "O young men, whoever among you is able to marry, let him marry, for it lowers the gaze and guards the private parts. And whoever is not able, let him fast, for it is a shield for him.",
          proofAr: "يَا مَعْشَرَ الشَّبَابِ، مَنِ اسْتَطَاعَ مِنْكُمُ الْبَاءَةَ فَلْيَتَزَوَّجْ، فَإِنَّهُ أَغَضُّ لِلْبَصَرِ وَأَحْصَنُ لِلْفَرْجِ، وَمَنْ لَمْ يَسْتَطِعْ فَعَلَيْهِ بِالصَّوْمِ فَإِنَّهُ لَهُ وِجَاءٌ",
          ref: "Sahih al-Bukhari, Book of Marriage, Hadith 5065",
          refAr: "صحيح البخاري، كتاب النكاح، حديث ٥٠٦٥",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          note: "This is a custom problem wearing religious clothes, and the Standard section above is the test for it: a demand that changes from one decade and one town to the next is culture, not revelation. A family is free to want security for a daughter. It is not free to call its price list a condition of the religion.",
          noteAr: "هذه عادةٌ لبست ثوبَ الدين، وميزانُها هو القسمُ المتقدّم في هذه الصفحة: فما تغيّر من عقدٍ إلى عقدٍ ومن بلدٍ إلى بلدٍ فهو عُرفٌ لا وحي. وللأهل أن يطلبوا لابنتهم أمانًا، وليس لهم أن يجعلوا قائمةَ أثمانهم شرطًا في الدين.",
          keys: ["cant afford marriage", "marriage is expensive", "too expensive to marry", "mahr too high", "wedding costs", "fasting instead", "cant get married",
                 "ما أقدر أتزوج", "الزواج غالي", "تكاليف الزواج", "المهر غالي", "غلاء المهور", "الصوم", "مش قادر أتجوز"]
        }
      ]
    },

    {
      id: "mg-aqd", icon: "📜",
      title: "The contract — what actually makes it a marriage",
      titleAr: "العقد — ما الذي ينعقد به النكاح",
      lead: "This is the part almost nobody reads, and it is where most of the injustice in our marriages gets in.",
      leadAr: "وهذا هو الموضعُ الذي لا يكاد أحدٌ يقرؤه، وفيه يدخل أكثرُ الظلم في أنكحتنا.",
      items: [
        {
          id: "mg-consent", icon: "✋",
          title: "Her consent is a condition — and there is a case where the marriage was cancelled",
          titleAr: "رضاها شرط — وثَمَّ واقعةٌ رُدّ فيها النكاح",
          plain: "A woman is not married off. She marries. The previously married woman has more right over herself than her guardian does, and the virgin must be asked for permission — and her silence counts as her permission, because she may be too shy to say it out loud.\n\nAnd this is not theory. Khansa bint Khidham's father married her to someone. She disliked it. She went to the Prophet ﷺ, and he cancelled the marriage.",
          plainAr: "ليست المرأة تُزوَّج، وإنما هي تَنكِح. فالثيّب أحقُّ بنفسها من وليّها، والبكرُ تُستأذن في نفسها، وإذنُها صُماتُها، لأنها قد تستحيي أن تُفصح.\n\nوليس هذا تنظيرًا: فقد زوّج خنساءُ بنتَ خِذامٍ أبوها، فكرهت ذلك، فأتت رسول الله ﷺ، فردّ نكاحه.",
          proof: "The previously married woman has more right over herself than her guardian, and the virgin is asked permission concerning herself, and her permission is her silence.",
          proofAr: "الْأَيِّمُ أَحَقُّ بِنَفْسِهَا مِنْ وَلِيِّهَا، وَالْبِكْرُ تُسْتَأْذَنُ فِي نَفْسِهَا، وَإِذْنُهَا صُمَاتُهَا",
          ref: "Sahih Muslim, Book of Marriage",
          refAr: "صحيح مسلم، كتاب النكاح",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "Khansa bint Khidham al-Ansariyyah reported that her father married her off while she was previously married, and she disliked that. So she came to the Messenger of Allah ﷺ and he annulled the marriage.",
          extraProofAr: "عَنْ خَنْسَاءَ بِنْتِ خِذَامٍ الْأَنْصَارِيَّةِ: أَنَّ أَبَاهَا زَوَّجَهَا وَهْيَ ثَيِّبٌ، فَكَرِهَتْ ذَلِكَ، فَأَتَتْ رَسُولَ اللَّهِ ﷺ فَرَدَّ نِكَاحَهُ",
          extraRef: "Sahih al-Bukhari, Book of Marriage, Hadith 5138",
          extraRefAr: "صحيح البخاري، كتاب النكاح، حديث ٥١٣٨",
          note: "So a forced marriage is not a bad marriage. It is not a marriage. Anyone in a family who says otherwise is contradicting a ruling the Prophet ﷺ issued on a specific woman by name, and al-Bukhari recorded it twice — once in the Book of Marriage and again in the Book of Coercion.",
          noteAr: "فالنكاحُ بالإكراه ليس نكاحًا سيّئًا، وإنما ليس نكاحًا. ومن قال في الأهل بخلاف ذلك فقد خالف حكمًا أصدره النبيُّ ﷺ في امرأةٍ بعينها مسمّاة، وقد أخرجه البخاريُّ مرّتين: في كتاب النكاح، وفي كتاب الإكراه.",
          keys: ["forced marriage", "my family is forcing me", "arranged marriage", "she said no", "consent", "against her will", "i dont want to marry him", "my father chose",
                 "الزواج بالإكراه", "أهلي يجبروني", "زواج مرتب", "رفضت", "الرضا", "بدون موافقتها", "ما أبغى أتزوجه", "أبي اختار لي"]
        },
        {
          id: "mg-mahr", icon: "💍",
          title: "The mahr is hers. Not her father's, and not a price.",
          titleAr: "المهر لها — لا لأبيها، وليس ثمنًا",
          plain: "The Quran says give the women their bridal gifts as a free gift — and then adds a line that settles who owns it: if she willingly gives back any of it to you, take it in ease. It could not say she may return part of it unless it was hers to return.\n\nSo: the mahr is her property. She decides what it is spent on. If her family takes it, that is taking her money, and the ruling on taking someone's money is not different because they are related to you.",
          plainAr: "قال تعالى: ﴿وَءَاتُوا۟ ٱلنِّسَآءَ صَدُقَٰتِهِنَّ نِحْلَةًۭ﴾، ثم أتبعه بما يفصل في الملك: ﴿فَإِن طِبْنَ لَكُمْ عَن شَىْءٍۢ مِّنْهُ نَفْسًۭا فَكُلُوهُ هَنِيٓـًۭٔا مَّرِيٓـًۭٔا﴾. ولا يصحّ أن يقال لها أن تردَّ منه شيئًا إلا وهو مِلكُها تردُّه.\n\nفالمهرُ مالُها، وهي التي تقرّر فيمَ يُنفق. فإن أخذه أهلُها فقد أخذوا مالها، وحكمُ أخذ مال الغير لا يتغيّر لأنّ الآخذ قريب.",
          proof: "And give the women their bridal gifts graciously. But if they give up willingly to you anything of it, then take it in satisfaction and ease.",
          proofAr: "وَءَاتُوا۟ ٱلنِّسَآءَ صَدُقَٰتِهِنَّ نِحْلَةًۭ ۚ فَإِن طِبْنَ لَكُمْ عَن شَىْءٍۢ مِّنْهُ نَفْسًۭا فَكُلُوهُ هَنِيٓـًۭٔا مَّرِيٓـًۭٔا",
          ref: "Surah An-Nisa (4:4)",
          refAr: "سورة النساء (٤:٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          note: "Two things that follow and are worth saying out loud. It is not a purchase price — a purchase transfers ownership of a thing, and no one owns her. And \"willingly\" means willingly: a wife pressured into giving it back, or told the family needs it, has not given anything up.",
          noteAr: "ويلزم من هذا أمران يحسن التصريحُ بهما: أنه ليس ثمنًا، فالثمنُ ينقل مِلكَ شيء، وليست هي مملوكةً لأحد. وأنّ قوله ﴿طِبْنَ﴾ يعني الطِّيبَ حقيقةً: فالزوجةُ التي تُضغط لتردَّه، أو يقال لها إنّ الأهل محتاجون، لم تتنازل عن شيء.",
          keys: ["mahr", "dowry", "who owns the mahr", "my father took my mahr", "bride price", "mehr is mine", "family took the money",
                 "المهر", "الصداق", "لمن المهر", "أبي أخذ مهري", "المهر حقي", "الأهل أخذوا المهر"]
        },
        {
          id: "mg-wali", icon: "👨‍⚖️",
          title: "The guardian — and where the scholars genuinely differ",
          titleAr: "الوليّ — وموضعُ الخلاف المعتبَر",
          plain: "The majority of scholars — Maliki, Shafi'i and Hanbali — hold that a marriage contracted without the woman's guardian is not valid, on the hadith \"there is no marriage without a guardian.\"\n\nThe Hanafis hold that an adult woman of sound mind may contract her own marriage, and that the guardian's role is to object to an unsuitable match rather than to be the one who consents.\n\nThis site's job is not to close a difference the scholars kept open for twelve centuries. It is to tell you it exists, so that nobody presents one position to you as though it were the religion itself.",
          plainAr: "ذهب الجمهور — المالكيّة والشافعيّة والحنابلة — إلى أنّ النكاح بغير وليٍّ لا يصحّ، لحديث: «لا نكاح إلا بوليّ».\n\nوذهب الحنفيّة إلى أنّ البالغة العاقلة تلي عقد نكاحها، وأنّ شأن الوليّ الاعتراضُ على غير الكفء لا أن يكون هو الراضي.\n\nوليس من شأن هذا الموقع أن يُغلق خلافًا أبقاه أهلُ العلم مفتوحًا اثني عشر قرنًا، وإنما شأنُه أن يخبرك بوجوده، لئلّا يعرض عليك أحدٌ قولًا واحدًا على أنه الدينُ نفسه.",
          proof: "There is no marriage without a guardian.",
          proofAr: "لَا نِكَاحَ إِلَّا بِوَلِيٍّ",
          ref: "Sunan Abu Dawud, Book of Marriage, Hadith 2085; Jami' at-Tirmidhi 1101",
          refAr: "سنن أبي داود، كتاب النكاح، حديث ٢٠٨٥؛ وجامع الترمذي ١١٠١",
          strength: "Outside the two Sahihs — narrated by Abu Dawud and at-Tirmidhi; authenticated by al-Albani. It is the majority's proof; the Hanafis answer it differently",
          strengthAr: "خارج الصحيحين — رواه أبو داود والترمذي، وصحّحه الألباني. وهو دليلُ الجمهور، وللحنفيّة عنه جواب",
          note: "What is NOT disputed, in any school, is the previous card: her consent. A guardian is there to protect her interest, never to override it — which is exactly why the Prophet ﷺ cancelled a marriage a father had made.",
          noteAr: "والذي لا خلاف فيه في مذهبٍ من المذاهب هو ما في البطاقة قبلها: رضاها. فإنما جُعل الوليُّ حفظًا لمصلحتها لا إلغاءً لها — ولهذا بعينه ردَّ النبيُّ ﷺ نكاحًا عقده أب.",
          keys: ["wali", "guardian", "marriage without wali", "do i need my father", "hanafi wali", "who signs the marriage", "no guardian",
                 "الولي", "النكاح بلا ولي", "هل أحتاج وليا", "ولي الأمر", "من يعقد النكاح", "لا ولي لي"]
        },
        {
          id: "mg-shurut", icon: "✍️",
          title: "What you write into the contract is binding — this is the part nobody uses",
          titleAr: "وما تشترطه في العقد لازم — وهذا ما لا يستعمله أحد",
          plain: "This is the most useful ruling in the section and the least known. Conditions written into a marriage contract must be kept, and he ﷺ said the conditions most deserving to be fulfilled are the ones by which marriage was made lawful.\n\nSo the things people argue about for twenty years can simply be agreed in advance, in writing, before anyone signs: that she will not be moved to another city, that she may finish her studies or keep her job, where the couple will live, that he will not take another wife, and so on. A condition that makes the forbidden lawful or the lawful forbidden is void — but within that, what is agreed is owed.",
          plainAr: "هذا أنفعُ ما في القسم وأقلُّه معرفةً عند الناس: أنّ الشروط في عقد النكاح يجب الوفاءُ بها، وقال ﷺ إنّ أحقّ الشروط أن يُوفى به ما استُحلّت به الفروج.\n\nفالذي يتنازع فيه الناسُ عشرين سنةً يمكن أن يُتّفق عليه سلفًا مكتوبًا قبل أن يوقّع أحد: ألّا تُنقل إلى بلدٍ آخر، وأن تُتمّ دراستها أو تبقى في عملها، وأين يسكنان، وألّا يتزوّج عليها، وما أشبه ذلك. وكلُّ شرطٍ أحلّ حرامًا أو حرّم حلالًا فباطل، وما دون ذلك فهو لازم.",
          proof: "The conditions most deserving to be fulfilled are those by which you have made intimacy lawful.",
          proofAr: "أَحَقُّ الشُّرُوطِ أَنْ تُوفُوا بِهِ مَا اسْتَحْلَلْتُمْ بِهِ الْفُرُوجَ",
          ref: "Sahih al-Bukhari, Book of Conditions, Hadith 2721",
          refAr: "صحيح البخاري، كتاب الشروط، حديث ٢٧٢١",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          extraProof: "Reconciliation is permissible between Muslims, except a reconciliation that makes the forbidden lawful or the lawful forbidden. And the Muslims are bound by their conditions, except a condition that makes the forbidden lawful or the lawful forbidden.",
          extraProofAr: "الصُّلْحُ جَائِزٌ بَيْنَ الْمُسْلِمِينَ إِلَّا صُلْحًا حَرَّمَ حَلَالًا أَوْ أَحَلَّ حَرَامًا، وَالْمُسْلِمُونَ عَلَى شُرُوطِهِمْ إِلَّا شَرْطًا حَرَّمَ حَلَالًا أَوْ أَحَلَّ حَرَامًا",
          extraRef: "Jami' at-Tirmidhi, Book of Judgements, Hadith 1352 — graded hasan sahih by at-Tirmidhi",
          extraRefAr: "جامع الترمذي، كتاب الأحكام، حديث ١٣٥٢ — قال الترمذي: حسنٌ صحيح",
          note: "Two practical notes. Say it before the contract, not after — afterwards it is a request, not a condition. And write it down: 2:282 orders a debt of any size to be written, and a marriage is a heavier undertaking than a debt.",
          noteAr: "وتنبيهان عمليّان: أن يُقال قبل العقد لا بعده، فإنه بعده طلبٌ لا شرط. وأن يُكتب: فقد أمر الله بكتابة الدَّين على قلّته وكثرته [البقرة ٢:٢٨٢]، والنكاحُ أثقل من الدَّين.",
          keys: ["conditions in marriage contract", "marriage contract terms", "can i put conditions", "prenup", "she wants to work", "no second wife condition", "agreement before marriage", "sharia contract",
                 "الشروط في عقد الزواج", "شروط العقد", "أشترط في الزواج", "الاتفاق قبل الزواج", "شرط عدم الزواج علي", "أكمل دراستي", "عقد الزواج"]
        }
      ]
    },

    {
      id: "mg-inside", icon: "🏡",
      title: "Inside it — what it is for, and what is owed",
      titleAr: "داخله — لأيِّ شيءٍ هو، وما الحقوق فيه",
      lead: "Three cards, and each of them describes a marriage most people have never actually been shown.",
      leadAr: "ثلاثُ بطاقات، تصف كلٌّ منها نكاحًا لم يُعرض على أكثر الناس قطّ.",
      items: [
        {
          id: "mg-sakan", icon: "🌙",
          title: "The purpose is stated, and it is not what people assume",
          titleAr: "المقصد مصرَّحٌ به، وليس هو ما يُظنّ",
          plain: "The Quran gives the reason directly: He created for you mates so that you may find rest in them, and He placed between you affection and mercy.\n\nRest first. Then affection. Then mercy. Notice mercy is on the list — because affection alone does not carry a household through illness, debt or a difficult decade, and the One who wrote the verse knew that.",
          plainAr: "صرّح القرآنُ بالعلّة: أنه خلق لكم من أنفسكم أزواجًا لتسكنوا إليها، وجعل بينكم مودّةً ورحمة.\n\nفالسكنُ أوّلًا، ثم المودّة، ثم الرحمة. وتأمّل ذكرَ الرحمة، فإنّ المودّة وحدها لا تحمل بيتًا في مرضٍ أو دَينٍ أو عَقدٍ ثقيل، وقد علم ذلك مَن أنزل الآية.",
          proof: "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
          proofAr: "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ",
          ref: "Surah Ar-Rum (30:21)",
          refAr: "سورة الروم (٣٠:٢١)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          example: "And there is a description of the two of them elsewhere that is worth sitting with: \"They are clothing for you and you are clothing for them\" (2:187). Clothing is what is closest to you, what covers what you would not want seen, and what keeps you warm. It is also the thing whose faults you notice before anybody else does — and do not announce.",
          exampleAr: "وثَمَّ وصفٌ لهما في موضعٍ آخر يحسن الوقوفُ عنده: ﴿هُنَّ لِبَاسٌۭ لَّكُمْ وَأَنتُمْ لِبَاسٌۭ لَّهُنَّ﴾ [البقرة ٢:١٨٧]. واللباسُ أقربُ ما إليك، وهو الذي يستر ما تكره أن يُرى، وهو الذي يقيك البرد. وهو أيضًا الذي ترى عيبَه قبل أن يراه أحد — ولا تُعلنه.",
          keys: ["purpose of marriage", "why marry", "love in islam", "sakinah", "mawadda", "what is marriage for", "romance in islam",
                 "الغاية من الزواج", "لماذا الزواج", "الحب في الإسلام", "السكن", "المودة والرحمة", "الزواج في الإسلام"]
        },
        {
          id: "mg-maruf", icon: "🤲",
          title: "\"Live with them in kindness\" — and the sentence about not writing her off",
          titleAr: "﴿وَعَاشِرُوهُنَّ بِٱلْمَعْرُوفِ﴾ — والجملة في ألّا تُلغيها",
          plain: "The command is not \"do not oppress them.\" It is higher than that: live with them in kindness — in the ordinary daily texture of a house, not only in the emergencies.\n\nAnd the verse continues into something remarkably realistic: if you dislike them, perhaps you dislike a thing and Allah places much good in it. That is addressed to a man who is not currently happy, which is the only person who needs to hear it.",
          plainAr: "ليس الأمرُ «لا تظلموهنّ»، بل هو أعلى من ذلك: ﴿وَعَاشِرُوهُنَّ بِٱلْمَعْرُوفِ﴾ — في نسيج البيت اليوميّ العاديّ لا في الشدائد وحدها.\n\nثم تمضي الآيةُ إلى ما هو غايةٌ في الواقعيّة: ﴿فَإِن كَرِهْتُمُوهُنَّ فَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَيَجْعَلَ ٱللَّهُ فِيهِ خَيْرًۭا كَثِيرًۭا﴾. والخطابُ لرجلٍ ليس راضيًا الآن، وهو وحده الذي يحتاج أن يسمعها.",
          proof: "And live with them in kindness. For if you dislike them - perhaps you dislike a thing and Allah makes therein much good.",
          proofAr: "وَعَاشِرُوهُنَّ بِٱلْمَعْرُوفِ ۚ فَإِن كَرِهْتُمُوهُنَّ فَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَيَجْعَلَ ٱللَّهُ فِيهِ خَيْرًۭا كَثِيرًۭا",
          ref: "Surah An-Nisa (4:19)",
          refAr: "سورة النساء (٤:١٩)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "A believing man must not hate a believing woman: if he dislikes one characteristic of hers, he will be pleased with another.",
          extraProofAr: "لَا يَفْرَكْ مُؤْمِنٌ مُؤْمِنَةً، إِنْ كَرِهَ مِنْهَا خُلُقًا رَضِيَ مِنْهَا آخَرَ",
          extraRef: "Sahih Muslim, Book of Suckling (Kitab ar-Rida')",
          extraRefAr: "صحيح مسلم، كتاب الرضاع",
          note: "That hadith is doing something precise. It does not say the disliked trait is imaginary. It says the mistake is letting one trait become the whole person — and that mistake is how most marriages actually end: not in one event, but in a slow re-description of someone until nothing good is left in the description.",
          noteAr: "وهذا الحديث يصنع شيئًا دقيقًا: فهو لا يقول إنّ الخُلق المكروه متوهَّم، وإنما يقول إنّ الخطأ أن تُجعل خصلةٌ واحدةٌ هي الإنسانَ كلَّه. وبهذا الخطأ تنتهي أكثرُ الأنكحة على الحقيقة: لا بحادثةٍ واحدة، وإنما بإعادة وصفٍ بطيئةٍ للإنسان حتى لا يبقى في الوصف خير.",
          keys: ["husband wife rights", "how to treat your wife", "how to treat your husband", "he ignores me", "she nags", "unhappy marriage", "i dont love her anymore", "marriage problems",
                 "حقوق الزوجة", "حقوق الزوج", "كيف أعامل زوجتي", "معاملة الزوج", "يهملني", "زواج تعيس", "ما عدت أحبها", "مشاكل الزواج"]
        },
        {
          id: "mg-best", icon: "⭐",
          title: "The measure of a man, stated in one line",
          titleAr: "ميزانُ الرجل في جملةٍ واحدة",
          plain: "There is a single sentence that settles the argument about what a good Muslim man looks like, and it does not mention the mosque, the beard, or how much he knows.\n\nThe best of you is the best to his family — and he ﷺ added: and I am the best of you to my family. He put himself inside the measurement.",
          plainAr: "ثَمَّ جملةٌ واحدة تفصل في حدّ الرجل المسلم الصالح، وليس فيها ذكرُ مسجدٍ ولا لحيةٍ ولا مقدارِ ما يحفظ.\n\n«خيرُكم خيرُكم لأهله» — وزاد ﷺ: «وأنا خيرُكم لأهلي». فأدخل نفسه في الميزان.",
          proof: "The best of you is the best of you to his family, and I am the best of you to my family.",
          proofAr: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي",
          ref: "Jami' at-Tirmidhi, Chapters on Virtues, Hadith 3895",
          refAr: "جامع الترمذي، أبواب المناقب، حديث ٣٨٩٥",
          strength: "Outside the two Sahihs — narrated by at-Tirmidhi; graded Sahih by al-Albani",
          strengthAr: "خارج الصحيحين — رواه الترمذي، وصحّحه الألباني",
          extraProof: "Treat women well.",
          extraProofAr: "اسْتَوْصُوا بِالنِّسَاءِ خَيْرًا",
          extraRef: "Sahih al-Bukhari, Book of Marriage, Hadith 5186",
          extraRefAr: "صحيح البخاري، كتاب النكاح، حديث ٥١٨٦",
          note: "Which is a hard measurement, because it is taken where nobody is watching. A man's mosque behaviour is public and can be performed. How he speaks to his wife when he is tired and nobody else is in the room cannot.",
          noteAr: "وهو ميزانٌ شديد، لأنه يُؤخذ حيث لا يراه أحد. فهيئةُ الرجل في المسجد علانيةٌ يمكن أن تُصطنع، وأمّا كيف يكلّم امرأته وهو متعبٌ وليس في الغرفة أحدٌ غيرهما فلا يمكن.",
          keys: ["best of you to his family", "good husband", "good muslim man", "how should a husband be", "prophet with his wives", "kind to family",
                 "خيركم لأهله", "الزوج الصالح", "الرجل المسلم", "كيف يكون الزوج", "النبي مع أزواجه", "حسن العشرة"]
        }
      ]
    },

    {
      id: "mg-broken", icon: "🩺",
      title: "When it is going wrong",
      titleAr: "إذا اعتلّ",
      lead: "The Quran gives a sequence here, and the sequence matters as much as the rulings in it.",
      leadAr: "رتّب القرآنُ في هذا ترتيبًا، والترتيبُ فيه مقصودٌ كالأحكام.",
      items: [
        {
          id: "mg-repair", icon: "🧵",
          title: "Settlement first, then two arbiters — one from each family",
          titleAr: "الصلحُ أوّلًا، ثم حَكَمان — من كلِّ أهلٍ حَكَم",
          plain: "Before anything is ended, two things are ordered. First, that the couple settle it between themselves: \"there is no sin upon them if they make terms of settlement between them — and settlement is best.\" And the same verse names the obstacle honestly: souls are made prone to stinginess. Not cruelty. Stinginess — the refusal to give the last inch.\n\nThen, if that fails, arbitration: one arbiter from his family and one from hers. Note the design. Not one wise elder. One from each side, so neither party is being judged by the other's people.",
          plainAr: "قبل أن يُنهى شيء أُمر بأمرين: أوّلهما أن يُصلحا بينهما: ﴿فَلَا جُنَاحَ عَلَيْهِمَآ أَن يُصْلِحَا بَيْنَهُمَا صُلْحًۭا ۚ وَٱلصُّلْحُ خَيْرٌۭ﴾. وسمّت الآيةُ نفسها العائقَ بصدق: ﴿وَأُحْضِرَتِ ٱلْأَنفُسُ ٱلشُّحَّ﴾. لم تقل القسوة، وإنما قالت الشحّ — وهو الامتناعُ عن آخر شبر.\n\nثم إن لم يقع ذلك فالتحكيم: حكمٌ من أهله وحكمٌ من أهلها. وتأمّل البناء: ليس شيخًا واحدًا حكيمًا، وإنما واحدٌ من كلِّ جهة، لئلّا يُحاكَم طرفٌ إلى أهل الطرف الآخر.",
          proof: "And if you fear dissension between the two, send an arbitrator from his people and an arbitrator from her people. If they both desire reconciliation, Allah will cause it between them.",
          proofAr: "وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَٱبْعَثُوا۟ حَكَمًۭا مِّنْ أَهْلِهِۦ وَحَكَمًۭا مِّنْ أَهْلِهَآ إِن يُرِيدَآ إِصْلَٰحًۭا يُوَفِّقِ ٱللَّهُ بَيْنَهُمَآ",
          ref: "Surah An-Nisa (4:35)",
          refAr: "سورة النساء (٤:٣٥)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          note: "And read the condition in the last clause: if they both desire reconciliation. Arbitration is not a court that can impose an outcome on two people who have already decided. It is help for two people who want to stop.",
          noteAr: "واقرأ الشرطَ في آخرها: ﴿إِن يُرِيدَآ إِصْلَٰحًۭا﴾. فليس التحكيمُ محكمةً تفرض حكمًا على اثنين قد عزما، وإنما هو عونٌ لاثنين يريدان أن يقفا.",
          keys: ["marriage problems", "we fight all the time", "should i divorce", "fix my marriage", "counselling", "family intervention", "arbitration", "reconcile",
                 "مشاكل زوجية", "نتشاجر دائما", "هل أطلق", "إصلاح الزواج", "الصلح", "تدخل الأهل", "التحكيم", "خلاف زوجي"]
        },
        {
          id: "mg-divorce", icon: "🚪",
          title: "And if it must end, there is a way it is done",
          titleAr: "وإن لزم الانتهاء فله وجهٌ يُصنع به",
          plain: "Divorce is permitted, and it is not a moral failure to reach it — some marriages should end, and a woman trapped in a cruel house is not being told by her religion to stay.\n\nBut the way is prescribed, and almost none of it is the way it is done in practice. Divorce at the start of the waiting period, and count the period. Do not turn her out of her house, and she should not leave. Then either keep her in an acceptable manner or part with her in an acceptable manner — and bring two just witnesses. And you may not take back what you gave her.",
          plainAr: "الطلاقُ مباح، وليس بلوغُه سقوطًا في الأخلاق؛ فمن الأنكحة ما ينبغي أن ينتهي، وليس دينُ المرأة يقول لها ابقي في بيتٍ يُؤذيها.\n\nولكن للوجه صفةٌ منصوصة، ولا يكاد شيءٌ منها يُصنع في الواقع: أن يُطلَّق لأوّل العدّة، وأن تُحصى العدّة، وألّا تُخرج من بيتها ولا تخرج، ثم إمساكٌ بمعروفٍ أو تسريحٌ بإحسان، وأن يُشهد ذوا عدل. ولا يحلّ أن يُؤخذ ممّا أُعطيت شيء.",
          proof: "Divorce is twice. Then either keep them in an acceptable manner or release them with good treatment. And it is not lawful for you to take anything of what you have given them.",
          proofAr: "ٱلطَّلَٰقُ مَرَّتَانِ ۖ فَإِمْسَاكٌۢ بِمَعْرُوفٍ أَوْ تَسْرِيحٌۢ بِإِحْسَٰنٍۢ ۗ وَلَا يَحِلُّ لَكُمْ أَن تَأْخُذُوا۟ مِمَّآ ءَاتَيْتُمُوهُنَّ شَيْـًٔا",
          ref: "Surah Al-Baqarah (2:229)",
          refAr: "سورة البقرة (٢:٢٢٩)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "O Prophet, when you divorce women, divorce them for the commencement of their waiting period and keep count of the waiting period... Do not turn them out of their houses, nor should they leave... You know not; perhaps Allah will bring about after that a new matter.",
          extraProofAr: "يَٰٓأَيُّهَا ٱلنَّبِىُّ إِذَا طَلَّقْتُمُ ٱلنِّسَآءَ فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ وَأَحْصُوا۟ ٱلْعِدَّةَ ... لَا تُخْرِجُوهُنَّ مِنۢ بُيُوتِهِنَّ وَلَا يَخْرُجْنَ ... لَا تَدْرِى لَعَلَّ ٱللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًۭا",
          extraRef: "Surah At-Talaq (65:1)",
          extraRefAr: "سورة الطلاق (٦٥:١)",
          note: "A note on the line everybody quotes — \"the most hated permitted thing to Allah is divorce.\" It is outside the two Sahihs, narrated by Ibn Majah (2018) and Abu Dawud, its chain is criticised and many hadith scholars grade it weak or consider it mursal. The point does not need it. 65:1 orders a waiting period during which she stays in the house, and then says: perhaps Allah will bring about a new matter. The entire procedure is built to make stopping possible — that is the argument, and it is in the Quran.",
          noteAr: "تنبيهٌ في الجملة التي ينقلها الناسُ جميعًا: «أبغضُ الحلال إلى الله الطلاق». هي خارج الصحيحين، رواها ابن ماجه (٢٠١٨) وأبو داود، وفي إسنادها مقال، وضعّفها كثيرٌ من أهل الحديث أو أعلّوها بالإرسال. ولا حاجة إليها؛ فإنّ سورة الطلاق أوجبت عدّةً تمكث فيها في البيت، ثم قالت: ﴿لَعَلَّ ٱللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًۭا﴾. فالإجراءُ كلُّه مبنيٌّ على تمكين الرجوع، وهذه هي الحجّة، وهي في القرآن.",
          keys: ["divorce", "talaq", "how to divorce", "iddah", "waiting period", "khula", "i want a divorce", "can i leave him", "divorce rules",
                 "الطلاق", "كيف يقع الطلاق", "العدة", "الخلع", "أريد الطلاق", "أتركه", "أحكام الطلاق", "طلقني"]
        }
      ]
    },

    {
      id: "mg-ahd", icon: "🤝",
      title: "And agreements in general — because this was one",
      titleAr: "والعهودُ عامّةً — فإنّ هذا منها",
      lead: "Two cards. The first is a fact about the Quran that surprises most people.",
      leadAr: "بطاقتان، في أولاهما خبرٌ عن القرآن يُدهش أكثرَ الناس.",
      items: [
        {
          id: "mg-write", icon: "🖋️",
          title: "The longest verse in the Quran is about writing a contract down",
          titleAr: "أطولُ آيةٍ في القرآن في كتابة العقد",
          plain: "Not about prayer, not about paradise. The longest single verse in the Quran, 2:282, is a detailed procedure for recording a debt: write it down, have a scribe write it justly, let the one who owes dictate, bring two witnesses, do not be too weary to write it whether it is small or large.\n\nAnd it gives the reason plainly: that is more just with Allah, stronger as evidence, and more likely to prevent doubt between you. Islam does not treat a written agreement as a sign that you distrust your brother. It treats it as how you protect him and yourself from a memory that will not agree in three years.",
          plainAr: "ليست في صلاةٍ ولا في جنّة. أطولُ آيةٍ في القرآن — البقرة ٢:٢٨٢ — إجراءٌ مفصَّلٌ لتوثيق دَين: أن يُكتب، وأن يكتب بينهم كاتبٌ بالعدل، وأن يُملي الذي عليه الحقّ، وأن يُستشهد شهيدان، وألّا يُسأم من كتابته صغيرًا أو كبيرًا إلى أجله.\n\nوصرّحت بالعلّة: ﴿ذَٰلِكُمْ أَقْسَطُ عِندَ ٱللَّهِ وَأَقْوَمُ لِلشَّهَٰدَةِ وَأَدْنَىٰٓ أَلَّا تَرْتَابُوٓا۟﴾. فليس الإسلامُ يجعل الكتابةَ علامةً على أنك تتّهم أخاك، وإنما يجعلها حفظًا له ولك من ذاكرةٍ لن تتّفق بعد ثلاث سنين.",
          proof: "O you who have believed, when you contract a debt for a specified term, write it down... And do not be too weary to write it, whether it is small or large, for its specified term. That is more just in the sight of Allah and stronger as evidence and more likely to prevent doubt between you.",
          proofAr: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰٓ أَجَلٍۢ مُّسَمًّۭى فَٱكْتُبُوهُ ... وَلَا تَسْـَٔمُوٓا۟ أَن تَكْتُبُوهُ صَغِيرًا أَوْ كَبِيرًا إِلَىٰٓ أَجَلِهِۦ ۚ ذَٰلِكُمْ أَقْسَطُ عِندَ ٱللَّهِ وَأَقْوَمُ لِلشَّهَٰدَةِ وَأَدْنَىٰٓ أَلَّا تَرْتَابُوٓا۟",
          ref: "Surah Al-Baqarah (2:282)",
          refAr: "سورة البقرة (٢:٢٨٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          note: "Which is why the marriage-conditions card above is not a modern innovation and not a Western import. It is the same instruction applied to a heavier contract: agree it, and write it.",
          noteAr: "ولهذا لم تكن بطاقةُ الشروط المتقدّمة بدعًا محدَثًا ولا مستوردًا من الغرب، وإنما هي هذا الأمرُ بعينه مطبَّقًا على عقدٍ أثقل: أن يُتّفق ويُكتب.",
          keys: ["contracts", "write it down", "loan agreement", "debt", "business agreement", "witnesses", "verbal agreement", "he denied the loan",
                 "العقود", "كتابة الدين", "اتفاق", "قرض", "الدين", "الشهود", "اتفاق شفهي", "أنكر الدين"]
        },
        {
          id: "mg-keep", icon: "🔐",
          title: "And then keep it — including the parts that became inconvenient",
          titleAr: "ثم أوفِ به — بما فيه ما ثقُل عليك بعدُ",
          plain: "Writing it is half. The other half is that a commitment is a thing you will be asked about: \"And fulfil every commitment. Indeed, the commitment is ever that about which one will be questioned.\"\n\nAnd trusts are to be returned to their owners — a rule that covers a deposit, an inheritance held for a child, a job you were paid for, a promise made to a wife before the contract was signed. Notice the same verse then orders you to judge justly between people. The two sit together because they fail together.",
          plainAr: "الكتابةُ نصفُ الأمر، ونصفُه الآخر أنّ العهد شيءٌ تُسأل عنه: ﴿وَأَوْفُوا۟ بِٱلْعَهْدِ ۖ إِنَّ ٱلْعَهْدَ كَانَ مَسْـُٔولًۭا﴾.\n\nوالأماناتُ تُؤدّى إلى أهلها — وهو حكمٌ يشمل الوديعةَ، والميراثَ محفوظًا لصغير، وعملًا قُبض أجرُه، ووعدًا قُطع لزوجةٍ قبل أن يُوقَّع العقد. وتأمّل أنّ الآية نفسها تأمر بعدها بالحكم بالعدل بين الناس؛ فقُرنتا لأنهما تسقطان معًا.",
          proof: "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice.",
          proofAr: "إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا۟ ٱلْأَمَٰنَٰتِ إِلَىٰٓ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ ٱلنَّاسِ أَن تَحْكُمُوا۟ بِٱلْعَدْلِ",
          ref: "Surah An-Nisa (4:58)",
          refAr: "سورة النساء (٤:٥٨)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "And fulfil every commitment. Indeed, the commitment is ever that about which one will be questioned.",
          extraProofAr: "وَأَوْفُوا۟ بِٱلْعَهْدِ ۖ إِنَّ ٱلْعَهْدَ كَانَ مَسْـُٔولًۭا",
          extraRef: "Surah Al-Isra (17:34)",
          extraRefAr: "سورة الإسراء (١٧:٣٤)",
          note: "And there is one word the Quran uses for the marriage bond that is worth ending on. Speaking of what a wife has taken from her husband, it says: \"and they have taken from you a solemn covenant\" — mithaqan ghaliza (4:21). The same phrase is used in the Quran of the covenant taken from the prophets. That is the weight class this contract is in.",
          noteAr: "وثَمَّ كلمةٌ وصف بها القرآنُ عَقدَ النكاح يحسن الختمُ بها: قال في الذي أخذته الزوجةُ من زوجها: ﴿وَأَخَذْنَ مِنكُم مِّيثَٰقًا غَلِيظًۭا﴾ [النساء ٤:٢١]. وبهذا اللفظ نفسه وُصف الميثاقُ المأخوذ على النبيّين. فهذه طبقةُ هذا العقد في الثقل.",
          keys: ["keeping promises", "broke his promise", "trust", "amanah", "he lied to me", "agreement broken", "covenant", "mithaq",
                 "الوفاء بالعهد", "أخلف وعده", "الأمانة", "كذب علي", "نقض الاتفاق", "الميثاق", "العهد"]
        }
      ]
    }
  ],

  closing: "One thing this section deliberately does not do: tell you the ruling for your own situation. Marriage and divorce are where the details decide the answer — what was said, when, in front of whom, and under which school your country's courts operate. What is here is the frame every school agrees on and the questions worth asking. For your own case, ask someone qualified who can hear the details, and take the answer from a person rather than from a page.",
  closingAr: "وثَمَّ أمرٌ يتركه هذا القسم قصدًا: ألّا يفتيك في واقعتك أنت. فالنكاحُ والطلاقُ ممّا تُغيّر تفاصيلُه الحكمَ: ما الذي قيل، ومتى، وبحضرة من، وعلى أيِّ مذهبٍ تجري محاكمُ بلدك. وإنما في هذه الصفحة الإطارُ الذي تتفق عليه المذاهب، والأسئلةُ التي يحسن أن تُسأل. وأمّا واقعتُك فاسأل فيها أهلَ العلم ممّن يسمع التفصيل، وخذ الجواب من إنسانٍ لا من صفحة."
};
