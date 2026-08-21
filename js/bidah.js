/* ============================================================
   ADDING TO THE RELIGION — البدعة
   ============================================================
   Rendered on guidance.html, under #bidah.

   THE RULES THAT GOVERN THIS FILE. This is a subject where people
   argue, and where a page can do real harm by being careless in
   either direction — so:

   1. EVERY hadith number here was checked against the text of
      Sahih al-Bukhari before it was written: 631, 757, 2010, 2697.
      Anything from Muslim is cited BY BOOK and never by a number,
      because the machine-readable edition this site checks against
      numbers Muslim sequentially and that numbering does not match
      a printed copy.

   2. WHERE THE SCHOLARS DIFFER, BOTH SIDES ARE NAMED, and which
      way the weight leaned is stated. The Mawlid is the live
      example: most of those who wrote specifically on it treated it
      as an innovation, and a respected minority permitted it. Both
      are on the page, with names.

   3. THE STRONGEST OBJECTION IS ANSWERED, NOT HIDDEN. Umar's
      "what a good bid'ah this is" about the tarawih is the first
      thing anyone raises, so it has a section of its own — with
      its real wording from al-Bukhari 2010, which is
      نِعْمَ الْبِدْعَةُ and not the نعمت البدعة people usually quote.

   4. `notBidah` IS NOT OPTIONAL. Without it a reader walks away
      thinking microphones and printed Mushafs are innovations.
      The distinction between an act of worship and a means to one
      is the whole of the subject's usefulness, and leaving it out
      would make this page dangerous rather than merely incomplete.

   5. No takfir, no naming of groups, no calling anyone a deviant.
      The page argues about ACTS and never about people.
   ============================================================ */

const BIDAH = {
  id: "bidah",
  title: "Adding to the religion",
  titleAr: "الزيادة في الدين — البدعة",

  intro: "There are things people do as worship that the Prophet ﷺ never did and never asked for. Doing them is not a small matter, and the reason is not that they look wrong — some of them look beautiful. The reason is what adding anything at all implies about the religion that was left to us.\n\nThis section explains the idea, gives the clearest example of it, answers the strongest objection to it, and then — just as importantly — says what is NOT meant by it, because the word is misused as often as the thing it names.",
  introAr: "ثمّة أعمالٌ يتعبّد بها الناس لم يفعلها النبي ﷺ ولم يأمر بها. وليس فعلها بالأمر الهيّن، وليست العلّة أنها تبدو قبيحة — فبعضها يبدو حسنًا جميلًا. وإنما العلّة ما تقتضيه الزيادةُ نفسها في حقّ الدين الذي تُرك لنا.\n\nوهذا القسم يبيّن المعنى، ويضرب أوضح أمثلته، ويُجيب عن أقوى ما يُعترض به عليه، ثم — وهو لا يقلّ أهميّة — يبيّن ما ليس مقصودًا به، فإنّ اللفظ يُساء استعماله بقدر ما يُساء فعلُ ما يدلّ عليه.",

  /* ---------- 1. The foundation ---------- */
  baseTitle: "Why an addition is a problem at all",
  baseTitleAr: "لِمَ كانت الزيادة إشكالًا أصلًا",
  base: [
    {
      id: "bd-complete",
      title: "The religion was declared finished before he ﷺ died",
      titleAr: "أُعلن كمال الدين قبل وفاته ﷺ",
      body: "\"This day I have perfected for you your religion, and completed My favour upon you, and approved for you Islam as a religion.\"\n\nThis was revealed on the day of Arafah during the farewell pilgrimage, months before he ﷺ died. Read what it claims: not that the religion was going well, but that it was COMPLETE.\n\nAnd that single word settles the question before any argument about a particular practice begins. If a thing is complete, then whoever adds to it is saying — whether he means to or not — that something was missing. Imam Malik put it in one sentence: whoever innovates in Islam an innovation and considers it good has claimed that Muhammad ﷺ betrayed the message, because Allah said \"this day I have perfected for you your religion\", so whatever was not part of the religion that day is not part of the religion today.",
      bodyAr: "﴿ٱلْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِى وَرَضِيتُ لَكُمُ ٱلْإِسْلَٰمَ دِينًۭا﴾.\n\nنزلت يوم عرفة في حجّة الوداع، قبل وفاته ﷺ بأشهر. وتأمّل ما تقرّره: ليس أنّ الدين ماضٍ على خير، بل أنه كامل.\n\nوهذه الكلمة وحدها تحسم المسألة قبل أن يبدأ النزاع في عملٍ بعينه. فإذا كان الشيء كاملًا، فمن زاد فيه فقد قال — قصد أو لم يقصد — إنّ شيئًا كان ناقصًا. وقد جمعها الإمام مالك في جملة: «من ابتدع في الإسلام بدعةً يراها حسنة فقد زعم أنّ محمدًا ﷺ خان الرسالة، لأنّ الله يقول ﴿ٱلْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ﴾، فما لم يكن يومئذٍ دينًا فلا يكون اليوم دينًا».",
      plain: "In plain words: the religion was finished and signed off while he ﷺ was still alive. Adding to something finished is a way of saying it was not finished.",
      plainAr: "بعبارة أخرى: فُرغ من الدين وأُعلن تمامه وهو ﷺ حيّ. والزيادة على التامّ قولٌ بأنه لم يكن تامًّا.",
      ref: "Surah Al-Ma'idah (5:3); Ibn Hazm, Al-Ihkam; ash-Shatibi, Al-I'tisam", refAr: "سورة المائدة (٥:٣)؛ وابن حزم في «الإحكام»؛ والشاطبي في «الاعتصام»",
      strength: "quran", strengthAr: "قرآن"
    },
    {
      id: "bd-radd",
      title: "Two sentences that settle it",
      titleAr: "جملتان تحسمان الأمر",
      body: "Aishah رضي الله عنها reported the Prophet ﷺ saying: \"Whoever introduces into this affair of ours something that is not part of it, it is rejected.\"\n\nAnd in the wording Muslim narrates: \"Whoever does an act which our affair is not upon, it is rejected.\"\n\nThe second wording is the wider of the two, and the difference matters. The first covers the man who invents something new. The second covers the man who merely DOES something invented, whether he invented it or not — so it closes the escape of saying \"I did not start this, I only joined in.\"\n\nAnd note the word: RADD, rejected — sent back, returned unaccepted. It does not say the act is sinful and still counted. It says it is handed back.",
      bodyAr: "عن عائشة رضي الله عنها أنّ النبي ﷺ قال: «مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ فِيهِ فَهُوَ رَدٌّ».\n\nوفي لفظٍ عند مسلم: «مَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ».\n\nواللفظ الثاني أوسع، والفرق بينهما مقصود: فالأوّل في المُحدِث الذي ابتدع، والثاني في العامل بالمُحدَث وإن لم يبتدعه — فسدّ باب من يقول: لم أبتدئ هذا، وإنما تابعت.\n\nوتأمّل اللفظ: «ردٌّ»، أي مردود يُرَدّ على صاحبه. ولم يقل إنه يأثم ويُحتسب له، بل إنه يُرَدّ.",
      plain: "In plain words: an invented act of worship is not a smaller reward. It is returned to you — it does not count at all.",
      plainAr: "بعبارة أخرى: العمل المُحدَث ليس أجرًا أقلّ، وإنما يُرَدّ عليك، فلا يُحتسب لك أصلًا.",
      ref: "Sahih al-Bukhari, Book of Reconciliation, Hadith 2697 — Aishah; Sahih Muslim, Book of Judicial Decisions", refAr: "صحيح البخاري، كتاب الصلح، حديث ٢٦٩٧ — عن عائشة؛ وصحيح مسلم، كتاب الأقضية",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)", strengthAr: "صحيح — متفق عليه (البخاري ومسلم)"
    },
    {
      id: "bd-every",
      title: "\"And every innovation is misguidance\"",
      titleAr: "«وكلُّ بدعةٍ ضلالة»",
      body: "In the sermon he ﷺ used to give, Jabir رضي الله عنه reported him saying: \"The truest speech is the Book of Allah, and the best guidance is the guidance of Muhammad, and the worst of matters are the newly-invented ones, and every innovation is misguidance.\"\n\nThe force of it is in the word KULL — every. Arabic has a word for \"some\", and it was not used. The scholars of usul note that a general word like this is only narrowed by a text that narrows it, and no text narrows this one in matters of worship.",
      bodyAr: "كان ﷺ يقول في خطبته، فيما رواه جابر رضي الله عنه: «أَصْدَقُ الْحَدِيثِ كِتَابُ اللَّهِ، وَخَيْرُ الْهَدْيِ هَدْيُ مُحَمَّدٍ، وَشَرُّ الْأُمُورِ مُحْدَثَاتُهَا، وَكُلُّ بِدْعَةٍ ضَلَالَةٌ».\n\nوقوّته في لفظ «كلّ»، فإنّ في العربية لفظًا للبعض ولم يُستعمل. وقرّر الأصوليّون أنّ العامّ لا يُخصّص إلا بمخصِّص، ولا مخصِّص لهذا العموم في باب العبادات.",
      plain: "In plain words: he said EVERY innovation, not some of them. If some were fine, that is the place he would have said so.",
      plainAr: "بعبارة أخرى: قال «كلّ بدعة» لا «بعضها». ولو كان بعضها حسنًا لكان ذلك موضع بيانه.",
      ref: "Sahih Muslim, Book of Jumu'ah — narrated from Jabir ibn Abdullah", refAr: "صحيح مسلم، كتاب الجمعة — عن جابر بن عبد الله",
      strength: "Sahih — Narrated by Muslim", strengthAr: "صحيح — رواه مسلم"
    }
  ],

  /* ---------- 2. The prayer analogy ---------- */
  analogyTitle: "The clearest way to see it: add a rak'ah to Fajr",
  analogyTitleAr: "أوضح ما يُبيّنه: زِد ركعةً في الفجر",
  analogy: {
    body: "Fajr is two rak'ah. Suppose a man loves Allah so much that he prays three, meaning nothing but good by it. He has not stolen and he has not lied. He has added.\n\nAsk any Muslim what happens to that prayer and the answer comes instantly: it is invalid. Not \"worth more\", not \"worth a little less\" — INVALID. He must repeat it.\n\nNow notice that nobody needs a scholar to reach that answer, and nobody finds it harsh. Everyone already understands, in the case of the prayer, that an act of worship is measured by whether it matches what was taught and not by how sincere the person was or how much he added.\n\nThat is the entire principle. The prayer is only the place where we can all already see it. \"Pray as you have seen me pray\" — and a man who prayed badly in the mosque was told THREE TIMES: \"Go back and pray, for you have not prayed.\" He was praying. He was in the mosque. He was sincere. It did not count, because it was not as taught.",
    bodyAr: "الفجر ركعتان. فهَبْ رجلًا اشتدّ حبّه لله فصلّاها ثلاثًا، لا يريد إلا الخير. لم يسرق ولم يكذب، وإنما زاد.\n\nاسأل أيّ مسلمٍ عن هذه الصلاة يأتِك الجواب في الحال: باطلة. لا «أعظم أجرًا» ولا «أنقص قليلًا»، بل باطلة، وعليه إعادتها.\n\nوتأمّل أنّ أحدًا لا يحتاج إلى عالمٍ ليبلغ هذا الجواب، ولا يجده أحدٌ قاسيًا. فالناس جميعًا يفهمون في باب الصلاة أنّ العبادة تُوزن بموافقتها لما عُلِّم، لا بصدق نيّة صاحبها ولا بمقدار ما زاد.\n\nوهذا هو الأصل كلّه، وإنما الصلاة موضعٌ نراه فيه جميعًا. قال ﷺ: «صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي». ورجلٌ أساء صلاته في المسجد فقيل له ثلاثًا: «ارْجِعْ فَصَلِّ فَإِنَّكَ لَمْ تُصَلِّ». كان يصلّي، وكان في المسجد، وكان صادقًا. ولم تُحتسب له، لأنها لم تكن كما عُلِّم.",
    plain: "In plain words: everyone already agrees that adding a rak'ah ruins the prayer, and nobody calls that harsh. Adding to the religion works the same way — the prayer is just where we can all see it clearly.",
    plainAr: "بعبارة أخرى: الناس متّفقون أنّ زيادة ركعةٍ تُفسد الصلاة، ولا يرى أحدٌ في ذلك قسوة. والزيادة في الدين مثلها، وإنما الصلاة موضعٌ يظهر فيه الأمر للجميع.",
    ref: "Sahih al-Bukhari, Book of the Call to Prayer, Hadith 631 and Hadith 757", refAr: "صحيح البخاري، كتاب الأذان، حديث ٦٣١ و٧٥٧",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)", strengthAr: "صحيح — متفق عليه (البخاري ومسلم)"
  },

  /* ---------- 3. The worked case ---------- */
  caseTitle: "The clearest case: celebrating his ﷺ birthday",
  caseTitleAr: "أوضح المسائل: الاحتفال بمولده ﷺ",
  caseIntro: "This is taken as the example because it is the one people ask about most, and because everything in it can be checked rather than argued.",
  caseIntroAr: "جُعلت هذه مثالًا لأنها أكثر ما يُسأل عنه، ولأنّ كلّ ما فيها يمكن التحقّق منه بدل المنازعة فيه.",
  points: [
    {
      id: "bd-day-known",
      title: "The DAY of the week is established. The date is not.",
      titleAr: "يومُ الأسبوع ثابت، وأمّا اليوم من الشهر فلا",
      body: "He ﷺ was asked about fasting on Monday and said: \"That is a day I was born on, and a day on which it was revealed to me.\"\n\nSo Monday is established from his own mouth, in Sahih Muslim. The date of the month is a different matter entirely: the historians report the 2nd, the 8th, the 9th, the 10th, the 12th and the 17th of Rabi' al-Awwal. They are reports of historians, not hadith, and they contradict each other.\n\nWhich leaves a plain question for anyone keeping an annual date: which of them are you keeping, and on what evidence?",
      bodyAr: "سُئل ﷺ عن صوم يوم الاثنين فقال: «ذَاكَ يَوْمٌ وُلِدْتُ فِيهِ، وَيَوْمٌ بُعِثْتُ — أَوْ أُنْزِلَ عَلَيَّ — فِيهِ».\n\nفيوم الاثنين ثابتٌ من لفظه هو، في صحيح مسلم. وأمّا اليوم من الشهر فأمرٌ آخر: فقد ذكر المؤرّخون الثاني والثامن والتاسع والعاشر والثاني عشر والسابع عشر من ربيع الأوّل. وهي أقوال مؤرّخين لا أحاديث، وهي متعارضة.\n\nويبقى سؤالٌ ظاهر لمن يقيم موعدًا سنويًّا: أيّ هذه الأقوال تُقيم عليه، وبأيّ دليل؟",
      plain: "In plain words: he told us which DAY OF THE WEEK he was born on — Monday. Nobody knows the date. The historians give six different ones.",
      plainAr: "بعبارة أخرى: أخبرنا بيوم الأسبوع الذي وُلد فيه، وهو الاثنين. وأمّا التاريخ فلا يعلمه أحد، وقد ذكر المؤرّخون فيه ستّة أقوال.",
      ref: "Sahih Muslim, Book of Fasting — narrated from Abu Qatadah; Ibn Ishaq, Ibn Sa'd, at-Tabari", refAr: "صحيح مسلم، كتاب الصيام — عن أبي قتادة؛ وابن إسحاق وابن سعد والطبري",
      strength: "Sahih — Narrated by Muslim; the dates are historical sira, not hadith", strengthAr: "صحيح — رواه مسلم؛ وأمّا التواريخ فمن السيرة لا من الحديث"
    },
    {
      id: "bd-death-date",
      title: "The date usually celebrated is the date usually given for his death",
      titleAr: "اليوم الذي يُحتفل به هو اليوم الذي تُذكر فيه وفاته",
      body: "The 12th of Rabi' al-Awwal is the date most commonly kept for the Mawlid. It is also the date the majority of historians give for the day he ﷺ died.\n\nBoth are reports from the sira and not from hadith, and both are disputed — this is stated plainly rather than used as a knock-down argument. But the position it leaves a person in is worth sitting with: a date is being celebrated as a birth on the strength of the histories, while those same histories more consistently record it as the day he was taken from this ummah.",
      bodyAr: "الثاني عشر من ربيع الأوّل هو أشهر ما يُقام عليه المولد. وهو أيضًا اليوم الذي عليه أكثر المؤرّخين في وفاته ﷺ.\n\nوكلاهما من روايات السيرة لا من الحديث، وفي كليهما خلاف — يُقال هذا صراحةً ولا يُتّخذ حجّةً قاطعة. لكنّ الحال التي يقف فيها المرء جديرةٌ بالتأمّل: تاريخٌ يُحتفل به مولدًا اعتمادًا على كتب التاريخ، وتلك الكتب نفسها أثبتُ ما فيها أنه اليوم الذي فُقد فيه من هذه الأمّة.",
      plain: "In plain words: the day people celebrate as his birthday is the same day the history books more firmly record as the day he died.",
      plainAr: "بعبارة أخرى: اليوم الذي يحتفل الناس به مولدًا هو نفسه اليوم الذي تُثبته كتب التاريخ بأقوى من ذلك يومَ وفاته.",
      ref: "Ibn Ishaq (in Ibn Hisham's Sira); Ibn Sa'd, Tabaqat; at-Tabari", refAr: "ابن إسحاق (في سيرة ابن هشام)؛ وابن سعد في «الطبقات»؛ والطبري",
      strength: "historical sira, not hadith", strengthAr: "من السيرة التاريخية لا من الحديث"
    },
    {
      id: "bd-how-he-marked",
      title: "He DID mark his birth — and this is the part usually missed",
      titleAr: "وقد أحيا ﷺ ذكرى مولده — وهذا ما يُغفل عنه",
      body: "This is the strongest thing in the whole case, and it is not an argument against anyone. He ﷺ did commemorate the day he was born. He fasted it.\n\nAnd he did it every week, not once a year. The hadith above is his answer to being asked why he fasted Mondays: because it is the day I was born.\n\nSo there is a sunnah attached to his birth, it is established in Sahih Muslim, and it is available to every Muslim fifty-two times a year. The question this raises is not whether loving him is good — it plainly is. It is why a practice he chose and taught would be set aside in favour of one he did not.",
      bodyAr: "هذا أقوى ما في الباب، وليس حجّةً على أحد. فقد أحيا ﷺ ذكرى يوم مولده، أحياها بالصوم.\n\nوأحياها في كلّ أسبوع لا مرّةً في العام. والحديث المتقدّم إنما هو جوابه حين سُئل عن صومه الاثنين: «ذَاكَ يَوْمٌ وُلِدْتُ فِيهِ».\n\nفثمّ سنّةٌ متعلّقة بمولده، ثابتةٌ في صحيح مسلم، متاحةٌ لكلّ مسلمٍ اثنتين وخمسين مرّة في السنة. والسؤال ليس في حسن محبّته ﷺ، فهي حسنةٌ ظاهرة، وإنما: لِمَ يُترك ما اختاره هو وعلّمه إلى ما لم يفعله؟",
      plain: "In plain words: he marked his own birthday — by fasting, every Monday. That sunnah is still open to you every week of the year.",
      plainAr: "بعبارة أخرى: أحيا ﷺ ذكرى مولده بالصوم كلّ اثنين. وهذه السنّة ما زالت متاحةً لك كلّ أسبوع من العام.",
      ref: "Sahih Muslim, Book of Fasting — narrated from Abu Qatadah", refAr: "صحيح مسلم، كتاب الصيام — عن أبي قتادة",
      strength: "Sahih — Narrated by Muslim", strengthAr: "صحيح — رواه مسلم"
    },
    {
      id: "bd-when-began",
      title: "Nobody did it for the first three centuries",
      titleAr: "لم يفعله أحدٌ في القرون الثلاثة الأولى",
      body: "He ﷺ did not do it. The companions did not do it — and they loved him in a way nobody since has matched. Abu Bakr, Omar, Osman and Ali did not do it. The generation after them did not, nor the one after that. The four imams — Abu Hanifah, Malik, ash-Shafi'i and Ahmad — did not do it and did not mention it.\n\nThe recorded beginnings come centuries later: the Fatimid rulers in Egypt in the fourth century after the Hijrah, and then, in the form best known today, under Muzaffar ad-Din Kokburi of Irbil in the seventh century.\n\nThe argument here is not that anything new is forbidden. It is narrower and harder to answer: the people best placed to love him, and most careful about how, did not find this among the ways.",
      bodyAr: "لم يفعله ﷺ، ولم يفعله أصحابه — وهم أشدّ الناس محبّةً له، لم يبلغ أحدٌ بعدهم مبلغهم. ولم يفعله أبو بكر ولا عمر ولا عثمان ولا عليّ. ولا التابعون، ولا تابعوهم. ولا الأئمّة الأربعة — أبو حنيفة ومالك والشافعي وأحمد — لم يفعلوه ولم يذكروه.\n\nوأوّل ما يُذكر في ابتدائه بعد قرون: الدولة الفاطميّة بمصر في القرن الرابع الهجري، ثم على الصورة المعروفة اليوم في عهد المظفّر كوكبري صاحب إربل في القرن السابع.\n\nوليست الحجّة أنّ كلّ جديدٍ ممنوع، وإنما هي أضيق من ذلك وأعسر جوابًا: أنّ أقدر الناس على محبّته وأشدّهم تحرّيًا لطريقها لم يجدوا هذا من طرقها.",
      plain: "In plain words: not the Prophet ﷺ, not his companions, not the four imams. It starts centuries later. The people who loved him most did not do it.",
      plainAr: "بعبارة أخرى: لا النبي ﷺ، ولا أصحابه، ولا الأئمّة الأربعة. وإنما بدأ بعد قرون. فأشدّ الناس حبًّا له لم يفعلوه.",
      ref: "al-Maqrizi, Al-Khitat; Ibn Kathir, Al-Bidaya wan-Nihaya; Abu Shamah, Al-Ba'ith", refAr: "المقريزي في «الخطط»؛ وابن كثير في «البداية والنهاية»؛ وأبو شامة في «الباعث»",
      strength: "historical sira, not hadith", strengthAr: "من السيرة التاريخية لا من الحديث"
    }
  ],

  /* ---------- 4. Both scholarly positions ---------- */
  scholarsTitle: "What the scholars said — both sides, with names",
  scholarsTitleAr: "أقوال أهل العلم — القولان بأسماء أصحابهما",
  scholars: [
    {
      who: "Ibn Taymiyyah, ash-Shatibi, Ibn al-Hajj al-Abdari, al-Fakihani, and the standing fatwa bodies of the Arabian Peninsula",
      whoAr: "ابن تيمية، والشاطبي، وابن الحاجّ العبدري، والفاكهاني، وهيئات الفتوى المعتبرة في الجزيرة",
      view: "It is an innovation. Ash-Shatibi's al-I'tisam is the book-length case: an act of worship is restricted to what was revealed, an occasion repeated annually IS an act of worship, and one that was available to the first generations and left by them cannot be a good that they missed.",
      viewAr: "هي بدعة. وكتاب «الاعتصام» للشاطبي هو التحرير المطوَّل لهذا القول: أنّ العبادة موقوفةٌ على الشرع، وأنّ الموسم المتكرّر كلّ سنةٍ عبادة، وأنّ ما كان ممكنًا للقرون الأولى فتركوه لا يكون خيرًا فاتهم."
    },
    {
      who: "As-Suyuti, and a derivation offered by Ibn Hajar al-Asqalani",
      whoAr: "السيوطي، وتخريجٌ ذكره ابن حجر العسقلاني",
      view: "It is permitted if kept free of anything forbidden, on the basis that gratitude for a blessing on the day it came has a root — Ibn Hajar derived it from the Prophet ﷺ fasting Ashura in thanks for Musa's deliverance. Their position rests on the older division of bid'ah into praiseworthy and blameworthy that ash-Shafi'i and al-Izz ibn Abd as-Salam used.",
      viewAr: "تجوز إذا خلت من محرَّم، بناءً على أنّ شكر النعمة في يوم وقوعها له أصل — وخرّجه ابن حجر على صوم النبي ﷺ عاشوراء شكرًا لنجاة موسى. ومبنى قولهم على تقسيم البدعة إلى محمودة ومذمومة، وهو تقسيمٌ استعمله الشافعي والعزّ بن عبد السلام."
    }
  ],
  weight: "Both are positions of real scholars and neither side is dismissed here. But the weight among those who wrote specifically on the question falls on the first: it is the position of the majority of those who examined it, and the second is a minority view offered as a derivation rather than as evidence — Ibn Hajar presents it as a takhrij, a reasoning by analogy, not as a text. The reader should also notice that the two sides are not arguing about whether to love him ﷺ. They are arguing about one question only: whether an annual occasion is an act of worship, and therefore restricted to what was revealed.",
  weightAr: "والقولان لعلماء معتبرين، ولا يُهدر ههنا واحدٌ منهما. غير أنّ الترجيح عند من كتب في المسألة بخصوصها على الأوّل: فهو قول أكثر من نظر فيها، والثاني قول أقلّ، وقد سيق تخريجًا لا نصًّا — فابن حجر إنما ذكره تخريجًا بالقياس لا حديثًا. وينبغي أن ينتبه القارئ إلى أنّ الفريقين لا يتنازعان في محبّته ﷺ، وإنما في مسألةٍ واحدة: أهو موسمٌ متعبَّدٌ به فيُقصر على المنقول، أم لا؟",

  /* ---------- 5. The strongest objection ---------- */
  objectionTitle: "\"But Omar called the tarawih a good bid'ah\"",
  objectionTitleAr: "«لكنّ عمر سمّى التراويح بدعةً حسنة»",
  objection: {
    body: "This is the first thing raised, and it deserves a real answer rather than a brush-off.\n\nOmar رضي الله عنه came into the mosque in Ramadan, found people praying scattered — a man alone, a man with a few behind him — and gathered them behind one reciter. Then he said, on a later night: \"What a good bid'ah this is.\"\n\nThe answer is in what he actually did. He did not invent the night prayer in Ramadan. The Prophet ﷺ prayed it in the mosque and people prayed behind him — and then he stopped coming out, and said plainly why: he feared it would be made obligatory on them. So the prayer is his ﷺ sunnah, and the only thing Omar changed was that they prayed behind one imam instead of scattered.\n\nAnd the fear that had made him ﷺ stop had gone with him: revelation had ended, so nothing could be made obligatory any more. Omar was not adding to the religion; he was restoring something the Prophet ﷺ had done and had stopped for a reason that no longer existed.\n\nAs for his word \"bid'ah\": in Arabic the word simply means something newly arranged, and it is used that way of anything new at all. That is how the scholars read it here — the gathering was new, the prayer was not.",
    bodyAr: "هذا أوّل ما يُعترض به، وهو جديرٌ بجوابٍ محرَّر لا بدفعٍ سريع.\n\nخرج عمر رضي الله عنه إلى المسجد في رمضان فوجد الناس أوزاعًا — الرجل يصلّي لنفسه، والرجل يصلّي بصلاته الرهط — فجمعهم على قارئٍ واحد. ثم قال في ليلةٍ بعدها: «نِعْمَ الْبِدْعَةُ هَذِهِ».\n\nوالجواب في نفس ما صنع: فإنه لم يبتدع قيام رمضان. فقد صلّاه النبي ﷺ في المسجد وصلّى الناس بصلاته، ثم تركه وبيّن العلّة: خشية أن يُفرض عليهم. فالصلاة سنّته ﷺ، وإنما غيّر عمرُ أن صلّوا خلف إمامٍ واحد بدل أن يكونوا أوزاعًا.\n\nوالعلّة التي من أجلها تركها ﷺ قد زالت بوفاته: فقد انقطع الوحي فلم يبقَ افتراضٌ يُخشى. فلم يكن عمر زائدًا في الدين، وإنما أعاد ما فعله النبي ﷺ وتركه لعلّةٍ ارتفعت.\n\nوأمّا لفظ «البدعة» فهو في العربية ما أُحدث على غير مثال، ويُطلق على كلّ جديد. وعلى هذا حمله أهل العلم ههنا: فالاجتماع جديد، وأمّا الصلاة فليست جديدة.",
    plain: "In plain words: Omar did not invent the tarawih. The Prophet ﷺ prayed it and then stopped, saying he feared it would become obligatory. After he died that fear was gone, so Omar simply gathered people behind one imam. The prayer was already sunnah — only the gathering was new.",
    plainAr: "بعبارة أخرى: لم يبتدع عمرُ التراويح. فقد صلّاها النبي ﷺ ثم تركها وقال إنه يخشى أن تُفرض. فلمّا مات ﷺ زالت تلك الخشية، فجمع عمرُ الناس على إمامٍ واحد. فالصلاة سنّةٌ من قبل، وإنما الجديد الاجتماع.",
    ref: "Sahih al-Bukhari, Book of the Prayer at Night in Ramadan, Hadith 2010; Sahih al-Bukhari, Book of the Call to Prayer, Hadith 729; Sahih Muslim, Book of the Prayer of Travellers", refAr: "صحيح البخاري، كتاب صلاة التراويح، حديث ٢٠١٠؛ وكتاب الأذان، حديث ٧٢٩؛ وصحيح مسلم، كتاب صلاة المسافرين",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)", strengthAr: "صحيح — متفق عليه (البخاري ومسلم)"
  },

  /* ---------- 6. What is NOT meant ---------- */
  notTitle: "What this does NOT mean",
  notTitleAr: "ما لا يُقصد بهذا",
  notIntro: "The word is misused as often as the thing it names, and a reader who takes only the first half of this section away from it will do harm with it. So, plainly:",
  notIntroAr: "يُساء استعمال اللفظ بقدر ما يُساء الفعل الذي يدلّ عليه، ومن أخذ نصف هذا القسم الأوّل وحده أضرّ به. فيُقال صراحةً:",
  notBidah: [
    {
      title: "Not worldly things",
      titleAr: "ليس في أمور الدنيا",
      body: "Cars, electricity, microphones in the mosque, printed copies of the Mushaf, schools, the internet, this website. None of it is innovation in the religion, because none of it is an act of worship. The rule for worldly matters is the opposite of the rule for worship: worship is restricted to what was revealed, and worldly things are permitted unless something forbids them.",
      bodyAr: "السيارات، والكهرباء، ومكبّرات الصوت في المساجد، والمصاحف المطبوعة، والمدارس، والشبكة، وهذا الموقع. ليس شيءٌ من ذلك بدعةً في الدين، لأنّ شيئًا منه ليس عبادة. وقاعدة أمور الدنيا عكس قاعدة العبادات: فالعبادة موقوفةٌ على الشرع، وأمور الدنيا على الإباحة حتى يرد المنع.",
      plain: "In plain words: a microphone is not an innovation. It is not worship — it is a tool.",
      plainAr: "بعبارة أخرى: مكبّر الصوت ليس بدعة، فليس عبادةً وإنما آلة."
    },
    {
      title: "Not the means to something already commanded",
      titleAr: "ليس في وسائل ما أُمر به",
      body: "Memorising the Quran was commanded; the school that organises it, the timetable, the certificate — these are means, and they take the ruling of what they serve. Da'wah was commanded; a printing press and a satellite channel are means to it. The line is between an act done AS worship in itself and an arrangement that carries an act already established.",
      bodyAr: "حفظ القرآن مأمورٌ به، وأمّا المدرسة التي تنظّمه والجدول والإجازة فوسائل، تأخذ حكم مقاصدها. والدعوة مأمورٌ بها، والمطبعة والقناة وسيلتان إليها. والحدّ بين ما يُفعل تعبّدًا في نفسه وبين ترتيبٍ يحمل عملًا ثابتًا من قبل.",
      plain: "In plain words: organising something the religion told you to do is not adding to the religion.",
      plainAr: "بعبارة أخرى: تنظيم ما أمرك الدين به ليس زيادةً في الدين."
    },
    {
      title: "Not a licence to accuse people",
      titleAr: "ليس إذنًا في اتّهام الناس",
      body: "Knowing that an act is an innovation is not the same as knowing anything about the person doing it. Most people who keep such a day are doing it out of love for him ﷺ, having been raised to it, never having been shown the question. The scholars who ruled against the practice were careful about this, and the ruling is on the ACT. Nothing on this page permits calling a Muslim a deviant, and nothing here belongs in an argument with your family.",
      bodyAr: "العلمُ بأنّ العمل بدعةٌ ليس علمًا بشيءٍ عن فاعله. وأكثر من يقيم ذلك اليوم إنما يفعله محبّةً له ﷺ، نشأ عليه ولم تُعرض عليه المسألة قطّ. وقد تحرّى أهل العلم الذين منعوا الفعلَ هذا المعنى، والحكم على العمل لا على المعيَّن. وليس في هذه الصفحة ما يُبيح تضليل مسلم، ولا ما يصلح أن يُخاصَم به الأهل.",
      plain: "In plain words: this is about the act, not about the person. Most people doing it were simply raised to it and love him ﷺ.",
      plainAr: "بعبارة أخرى: الكلام في العمل لا في الشخص. وأكثر من يفعله نشأ عليه وهو يحبّه ﷺ."
    }
  ],

  /* ---------- 7. Where to put the love ---------- */
  insteadTitle: "Where that love actually goes",
  insteadTitleAr: "أين تُوضع تلك المحبّة",
  instead: "The impulse behind the Mawlid is a true one, and it should not be left with nowhere to go. Everything below is established, available all year, and was asked for by him ﷺ himself:\n\n• Fast Mondays — the day he named as the day he was born.\n• Send salah upon him. He said whoever sends one, Allah sends ten upon him.\n• Learn his sira and his sunnah, and act on one thing you learn.\n• Revive a sunnah people have left. He said whoever revives a sunnah of his has its reward and the reward of whoever acts on it.\n• Follow him. \"Say: if you love Allah, then follow me, and Allah will love you.\"\n\nThat last one is the measure the Quran itself sets for the claim of love, and it is not a feeling — it is a following.",
  insteadAr: "الباعث على المولد باعثٌ صادق، ولا ينبغي أن يُترك بلا مصرف. وكلّ ما يلي ثابت، متاحٌ في العام كلّه، وقد طلبه هو ﷺ:\n\n• صُم الاثنين — اليوم الذي سمّاه يوم مولده.\n• أكثِر من الصلاة عليه، فقد قال: من صلّى عليّ واحدةً صلّى الله عليه بها عشرًا.\n• تعلّم سيرته وسنّته، واعمل بواحدةٍ ممّا تعلّمت.\n• أحيِ سنّةً أماتها الناس، فقد قال: من أحيا سنّةً من سنّته فله أجرها وأجر من عمل بها.\n• اتّبعه. ﴿قُلْ إِن كُنتُمْ تُحِبُّونَ ٱللَّهَ فَٱتَّبِعُونِى يُحْبِبْكُمُ ٱللَّهُ﴾.\n\nوالأخيرة هي الميزان الذي وضعه القرآن نفسه لدعوى المحبّة، وليست وجدانًا، وإنما هي اتّباع.",
  insteadRef: "Sahih Muslim, Book of Fasting; Sahih Muslim, Book of Prayer; Jami at-Tirmidhi, Book of Knowledge — outside the two Sahihs, authenticated by al-Albani; Surah Aal-Imran (3:31)", insteadRefAr: "صحيح مسلم، كتاب الصيام؛ وصحيح مسلم، كتاب الصلاة؛ وجامع الترمذي، كتاب العلم — خارج الصحيحين، صحّحه الألباني؛ وسورة آل عمران (٣:٣١)",

  notice: "This section explains a question of worship; it is not a fatwa and does not judge any particular person. Where the scholars differ, both positions are named above with their people. If this touches something in your own family, take it to a scholar you trust and be gentle with people who are acting out of love for the Prophet ﷺ.",
  noticeAr: "هذا القسم في بيان مسألةٍ من مسائل العبادة، وليس فتوى، ولا حكمًا على معيَّن. وحيث اختلف أهل العلم ذُكر القولان بأصحابهما. فإن كان هذا يمسّ شيئًا في أهلك فاسأل عالمًا تثق به، وارفُق بمن يفعله محبّةً للنبي ﷺ."
};
