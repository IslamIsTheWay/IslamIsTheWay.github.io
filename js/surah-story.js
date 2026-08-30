/* ============================================================
   THE STORY OF THE SURAH — قصّةُ السورة
   The "Full explanation" button on quran.html, beside Tadabbur.

   HIS IDEA, AND HIS CHOICE OF SAMPLE. He asked whether a second
   button could give the whole surah as one connected piece
   rather than scattered verse notes, and whether it would be any
   good. I measured before answering: js/tadabbur.js holds 380
   explained verses across all 114 surahs — a median of THREE per
   surah, with 38 surahs at two or fewer. Three word-notes
   stitched together is a lumpy list, not a story.

   So this is written the other way round. A surah's story does
   not come from its verse notes; it comes from the surah's own
   SHAPE — where it turns, what it does first and last, and the
   thread that runs the length of it. Written top-down, in
   MOVEMENTS, each naming the verses it covers. The tadabbur
   notes then hang inside the movement they belong to, as detail,
   which is what they were always for.

   HE CHOSE THE FIRST TEN, and that is the hardest sample he
   could have picked: al-Baqarah is 286 verses, al-A'raf 206,
   an-Nisa 176. If the format survives those it survives
   anything. It also forced the rule that a long surah gets a MAP
   and a short one gets four lines — al-Fatihah has four
   movements and al-Baqarah has seven, and neither is padded to
   match the other.

   WHAT A MOVEMENT IS NOT. It is not a summary of every verse in
   its range, and it does not pretend the surah is tidier than it
   is. Where a surah genuinely changes subject without a bridge,
   the movement says so.

   PLAIN WORDS, because he asked for that twice: "make sure that
   it's easy to understand." No technical vocabulary is used
   without being explained in the same sentence.

   ON SOURCING. This file makes no claim about a verse's meaning
   that is not either (a) the plain sense of the verse in its
   place, or (b) an occasion of revelation that is well known and
   named as such. It quotes no hadith. Where a surah's occasion
   is disputed or its ordering debated, the entry says so rather
   than choosing. Verse numbering follows the standard Kufan
   count used by this site's own js/quran-text.js.
   ============================================================ */

const SURAH_STORY = {

  1: {
    title: "A conversation, and He answers you line by line",
    titleAr: "محاورةٌ يُجيبك فيها سطرًا سطرًا",
    oneLine: "Seven lines that teach you how to ask — and the middle line is the hinge the whole surah turns on.",
    oneLineAr: "سبعُ آياتٍ تعلّمك كيف تسأل — والآيةُ الوسطى هي المِفصل الذي تدور عليه السورة كلُّها.",
    when: "Makkan. It is not the first thing revealed — that was the opening of Surah Al-'Alaq — but it is the first thing PLACED. Those are two different facts and the difference is the point.",
    whenAr: "مكّيّة. وليست أوّلَ ما نزل — فأوّلُ ما نزل مطلعُ سورة العلق — وإنما هي أوّلُ ما وُضع. وهما أمران، وفي الفرق بينهما المقصود.",
    movements: [
      { from: 1, to: 4,
        h: "First you say who He is — before you ask for anything",
        hAr: "أوّلًا تقول من هو — قبل أن تسأل شيئًا",
        en: "Four lines and not one of them is a request. Praise, then the two names of mercy, then that He owns the Day of Judgement.\n\nNotice the order. You establish who you are speaking to, and only then do you speak. A person who begins with his need has not yet worked out where he is standing.",
        ar: "أربعُ آياتٍ ليس فيها طلبٌ واحد: الحمد، ثم اسما الرحمة، ثم أنه مالكُ يوم الدين.\n\nوتأمّل الترتيب: تقرّر أوّلًا من الذي تخاطب، ثم تتكلّم. ومن بدأ بحاجته فلم يتبيّن بعدُ أين هو واقف." },
      { from: 5, to: 5,
        h: "The hinge — and the person changes",
        hAr: "المِفصل — ويتغيّر الضمير",
        en: "\"You alone we worship, and You alone we ask for help.\"\n\nUp to here He is spoken ABOUT — He is, He owns. From here He is spoken TO — You, You. The surah turns from description to address in the middle line, and everything after it is said face to face.\n\nAnd worship is placed before asking for help. In that order, deliberately.",
        ar: "﴿إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ﴾.\n\nإلى هنا الكلامُ عنه سبحانه — هو كذا، وهو مالك. ومن هنا الكلامُ إليه — إيّاك، إيّاك. فتنتقل السورةُ من الوصف إلى الخطاب في آيتها الوسطى، وما بعدها يُقال مواجهةً.\n\nوقُدّمت العبادةُ على الاستعانة. على هذا الترتيب قصدًا." },
      { from: 6, to: 6,
        h: "And then the one request in the whole surah",
        hAr: "ثم الطلبُ الوحيد في السورة كلِّها",
        en: "Out of seven lines, exactly one is a request — and it is not for health, or money, or safety, or for anything to be taken away.\n\nIt is: show us the straight path.\n\nA person recites this seventeen times a day at minimum, and every time, the one thing he asks for is direction.",
        ar: "من سبع آياتٍ آيةٌ واحدة فيها طلب — وليس في صحّةٍ ولا مالٍ ولا أمنٍ ولا في رفع شيء.\n\nوإنما هو: ﴿ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ﴾.\n\nويقرؤها المرءُ سبع عشرة مرّةً في اليوم على أقلّ تقدير، وفي كلِّ مرّةٍ يكون الذي يسأله شيئًا واحدًا: الدلالة." },
      { from: 7, to: 7,
        h: "The path defined by the people on it",
        hAr: "الطريقُ يُعرَّف بأهله",
        en: "The last line does not describe the path. It describes three groups: those He favoured, those who earned anger, and those who went astray.\n\nSo a path is defined by who walked it — which is why the rest of the Quran is largely people. You were not given a map; you were given a company to join and two to avoid.",
        ar: "الآيةُ الأخيرة لا تصف الطريق، وإنما تصف ثلاثة أصناف: المنعَم عليهم، والمغضوب عليهم، والضالّين.\n\nفالطريقُ يُعرَّف بمن سلكه — ولهذا كان أكثرُ القرآن بعدها في الناس. فلم تُعطَ خريطةً، وإنما أُعطيتَ رفقةً تلحق بها واثنتين تجتنبهما." }
    ],
    thread: "The surah teaches the shape of every request a person will ever make: know who you are asking, ask for guidance before anything else, and understand that guidance means ending up in a particular company. Everything from Al-Baqarah onwards is the long answer to the question asked in verse six.",
    threadAr: "تعلّمك السورةُ صورةَ كلِّ طلبٍ يطلبه العبد: أن تعرف من تسأل، وأن تسأل الهداية قبل كلِّ شيء، وأن تعلم أنّ الهداية أن تصير إلى رفقةٍ بعينها. وما بعدها من البقرة إلى آخر القرآن هو الجوابُ الطويل عن سؤال الآية السادسة."
  },

  2: {
    title: "A nation is handed the job, and shown who lost it before",
    titleAr: "أمّةٌ تُسلَّم الأمانة، وتُرى من أضاعها قبلها",
    oneLine: "The longest surah in the Quran, and it is doing one thing: forming a community, and warning it with the record of the community that held the same post before it.",
    oneLineAr: "أطولُ سور القرآن، وهي تصنع أمرًا واحدًا: تكوينَ أمّة، وتحذيرَها بسجلّ الأمّة التي شغلت الموضع نفسه قبلها.",
    when: "Madinan, and among the first long surahs revealed there — but not all at once. It came down in pieces over years, which is why it moves between belief, law and history: it was answering a community as its questions arrived.",
    whenAr: "مدنيّة، ومن أوائل الطوال نزولًا بالمدينة — ولكن لا جملةً واحدة. نزلت مفرَّقةً على سنين، ولهذا تنتقل بين العقيدة والتشريع والتاريخ: فقد كانت تجيب جماعةً على قدر ما ترد أسئلتُها.",
    movements: [
      { from: 1, to: 20,
        h: "Three kinds of people, and the third gets the most words",
        hAr: "ثلاثةُ أصناف، وأطولُها الثالث",
        en: "The surah opens by sorting everybody into three: those who believe (four verses), those who reject outright (two verses), and the hypocrites — thirteen verses, more than the other two together.\n\nThat imbalance is the first thing the surah tells you. The danger it is most concerned with is not the open enemy. It is the man inside the community whose position cannot be read from the outside.",
        ar: "تفتتح السورةُ بقسمة الناس ثلاثةً: المؤمنون في أربع آيات، والذين كفروا جهارًا في آيتين، والمنافقون في ثلاث عشرة آية — أكثرَ من الصنفين معًا.\n\nوهذا التفاوتُ أوّلُ ما تخبرك به السورة: أنّ الخطر الذي يعنيها ليس العدوَّ المعلن، وإنما الرجلَ داخل الجماعة الذي لا يُعرف موقعُه من ظاهره." },
      { from: 21, to: 39,
        h: "Then the whole of mankind is addressed, and Adam is told to go down",
        hAr: "ثم يُخاطب الناسُ جميعًا، ويُهبط آدم",
        en: "The address widens: O mankind, worship your Lord. Then the challenge — if you doubt this Book, produce one surah like it.\n\nAnd then the first story in the Quran's order: Adam is taught the names, the angels bow, Iblis refuses out of pride, and man is sent down with one condition attached — whoever follows My guidance, no fear will be upon them.\n\nThe entire human situation is set up in nineteen verses.",
        ar: "يتّسع الخطاب: ﴿يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ﴾. ثم التحدّي: إن كنتم في ريبٍ من هذا الكتاب فأتوا بسورةٍ من مثله.\n\nثم أوّلُ قصّةٍ في ترتيب المصحف: يُعلَّم آدمُ الأسماء، وتسجد الملائكة، ويأبى إبليسُ استكبارًا، ويُهبط الإنسانُ وقد عُلّق عليه شرطٌ واحد: ﴿فَمَن تَبِعَ هُدَاىَ فَلَا خَوْفٌ عَلَيْهِمْ﴾.\n\nفوُضع أمرُ الإنسان كلُّه في تسع عشرة آية." },
      { from: 40, to: 123,
        h: "Eighty verses on one nation — because they held this job first",
        hAr: "ثمانون آيةً في أمّةٍ واحدة — لأنهم شغلوا هذا الموضع أوّلًا",
        en: "This is the largest single block in the surah and readers often wonder why so much of it is about the Children of Israel.\n\nThe answer is in the framing. They were given the Book, the guidance and the position of witness over people — the exact post this new community is about to be handed twenty verses later. So the surah walks their record in detail: the covenant taken and broken, the calf, the cow they argued about until the ruling became heavy, the hearts described as harder than stone.\n\nIt is not a history lesson about somebody else. It is the job description, illustrated with the previous holder's file.",
        ar: "هذا أكبرُ مقطعٍ في السورة، وكثيرًا ما يسأل القارئ: لِمَ كلُّ هذا في بني إسرائيل؟\n\nوالجوابُ في السياق: فقد أُوتوا الكتاب والهدى ومنزلةَ الشهادة على الناس — وهو الموضعُ بعينه الذي ستُسلَّمه هذه الأمّةُ بعد عشرين آية. فتمشي السورةُ في سجلّهم مفصَّلًا: الميثاقُ أُخذ ونُقض، والعجل، والبقرةُ التي جادلوا فيها حتى ثقُل الحكم، والقلوبُ التي وُصفت بأنها أشدُّ قسوةً من الحجارة.\n\nفليس هذا درسَ تاريخٍ عن غيرك، وإنما هو وصفُ الوظيفة، مشروحًا بملفّ من شغلها قبلك." },
      { from: 124, to: 141,
        h: "Ibrahim, and the quiet transfer of the position",
        hAr: "إبراهيم، ونقلُ الموضع في هدوء",
        en: "Ibrahim is tested and passes, and is told: I am making you a leader for mankind. He asks: and from my offspring? The answer is the sentence the whole surah has been building to — MY COVENANT DOES NOT REACH THE WRONGDOERS.\n\nInheritance does not transfer the post. Conduct does.\n\nThen Ibrahim and Isma'il raise the foundations of the House and pray for a messenger from among their descendants — and the community reading this surah is the answer to that prayer.",
        ar: "يُبتلى إبراهيمُ فيُتمّ، فيُقال له: ﴿إِنِّى جَاعِلُكَ لِلنَّاسِ إِمَامًۭا﴾. فيسأل: ﴿وَمِن ذُرِّيَّتِى﴾؟ فيكون الجوابُ هو الجملةَ التي كانت السورةُ تبني إليها: ﴿لَا يَنَالُ عَهْدِى ٱلظَّٰلِمِينَ﴾.\n\nفليس الموضعُ ينتقل بالنسب، وإنما ينتقل بالعمل.\n\nثم يرفع إبراهيمُ وإسماعيلُ القواعدَ من البيت ويدعوان برسولٍ من ذرّيّتهما — والجماعةُ التي تقرأ هذه السورة هي جوابُ ذلك الدعاء." },
      { from: 142, to: 152,
        h: "The qiblah changes, and everybody is tested by a wall",
        hAr: "تتحوّل القبلة، فيُختبر الناسُ بجدار",
        en: "The direction of prayer moves from Jerusalem to Makkah, and the surah says outright why: to see who would follow the Messenger and who would turn on his heels.\n\nIt is a small physical instruction with no obvious reason attached, and that is exactly what makes it a test. A person who obeys only what he can see the logic of has not been tested yet.\n\nAnd here the post is handed over in one line: \"and thus We made you a middle nation, that you may be witnesses over the people.\" The job the eighty verses above described.",
        ar: "تنتقل القبلةُ من بيت المقدس إلى المسجد الحرام، وتصرّح السورةُ بالعلّة: ﴿لِنَعْلَمَ مَن يَتَّبِعُ ٱلرَّسُولَ مِمَّن يَنقَلِبُ عَلَىٰ عَقِبَيْهِ﴾.\n\nفهو أمرٌ حسّيٌّ يسيرٌ لا تظهر له علّة، وبهذا صار امتحانًا. ومن لا يطيع إلا ما ظهرت له حكمتُه فلم يُمتحن بعد.\n\nوهنا يُسلَّم الموضعُ في آية: ﴿وَكَذَٰلِكَ جَعَلْنَٰكُمْ أُمَّةًۭ وَسَطًۭا لِّتَكُونُوا۟ شُهَدَآءَ عَلَى ٱلنَّاسِ﴾. وهي الوظيفةُ التي وصفتها الثمانون آيةً المتقدّمة." },
      { from: 153, to: 242,
        h: "And now the actual law of a people who have to live together",
        hAr: "ثم شريعةُ قومٍ عليهم أن يعيشوا معًا",
        en: "Ninety verses of practical law, and the range of it is the point: patience and the ones killed in His path, fasting and its nights, the sacred month, hajj, wine and gambling, orphans, marriage, divorce, breastfeeding, the waiting period, widows.\n\nA reader looking for uplift finds the rules of maintenance payments. That is not the surah losing its way — it is the surah saying that a community is not built by its beliefs alone but by knowing exactly who owes what to whom.",
        ar: "تسعون آيةً في الأحكام العمليّة، وسَعَتُها هي المقصود: الصبرُ والقتلى في سبيله، والصيامُ ولياليه، والشهرُ الحرام، والحجّ، والخمرُ والميسر، واليتامى، والنكاحُ والطلاقُ والرضاعُ والعدّةُ والأرامل.\n\nفمن جاء يطلب الوعظ وجد أحكام النفقة. وليست السورةُ خرجت عن مقصدها، وإنما هي تقول إنّ الجماعة لا تُبنى بالاعتقاد وحده، بل بأن يُعرف بالتحديد مَن له ماذا على مَن." },
      { from: 243, to: 286,
        h: "Fighting, the Throne verse, interest, the longest verse — then a prayer",
        hAr: "القتالُ وآيةُ الكرسيّ والربا وأطولُ آية — ثم دعاء",
        en: "The last stretch gathers what looks unrelated and is not: permission to fight, Talut and Jalut, and then AYAT AL-KURSI — placed here, at the centre of a passage about power, to say who actually holds it.\n\nThen \"there is no compulsion in religion.\" Then Ibrahim's three questions about how the dead are raised. Then charity, at length. Then interest, in the harshest language in the Quran on any financial matter. Then 2:282, the longest verse in the Book — on writing a debt down.\n\nAnd it closes on two verses of pure supplication: do not burden us with what we cannot bear. After 286 verses of obligation, the last word the community is given is a request for mercy in carrying it.",
        ar: "يجمع الشوطُ الأخير ما يبدو متفرّقًا وليس كذلك: الإذنُ بالقتال، وطالوتُ وجالوت، ثم آيةُ الكرسيّ — وُضعت هنا في وسط سياق القوّة لتقول من الذي يملكها حقًّا.\n\nثم ﴿لَآ إِكْرَاهَ فِى ٱلدِّينِ﴾. ثم أسئلةُ إبراهيم الثلاثة في إحياء الموتى. ثم الإنفاقُ مطوَّلًا. ثم الربا، بأشدّ ما في القرآن من لفظٍ في بابٍ ماليّ. ثم آيةُ الدَّين، أطولُ آيةٍ في الكتاب — في كتابة الدَّين.\n\nوتُختم بآيتين خالصتين في الدعاء: ﴿رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ﴾. فبعد مئتين وستٍّ وثمانين آيةً من التكليف، آخرُ ما تُعطاه الجماعةُ سؤالُ العون على حمله." }
    ],
    thread: "One line runs the whole length of it: a position of responsibility is given, it can be lost, and it is lost by conduct rather than by lineage. That is why the surah spends eighty verses on the previous holders, hands the post over at verse 143, and then spends ninety verses on the rules that decide whether this community keeps it.",
    threadAr: "يجري في طولها خيطٌ واحد: أنّ موضعَ المسؤوليّة يُعطى، ويمكن أن يُفقد، وأنه يُفقد بالعمل لا بالنسب. ولهذا أنفقت ثمانين آيةً في أهله الأوّلين، ثم سلّمته في الآية الثالثة والأربعين بعد المئة، ثم أنفقت تسعين آيةً في الأحكام التي بها تُمسكه هذه الأمّةُ أو تضيّعه."
  },

  3: {
    title: "The Book is one thing; what people do with it is another",
    titleAr: "الكتابُ شيء، وما يصنعه الناسُ به شيءٌ آخر",
    oneLine: "It opens on how people misuse scripture, and closes on a battle they lost — and the connection between the two is the whole surah.",
    oneLineAr: "تفتتح بكيف يُساء استعمالُ الوحي، وتُختم بمعركةٍ خُسرت — والصلةُ بينهما هي السورةُ كلُّها.",
    when: "Madinan. Its first long section is closely tied to the delegation of Christians from Najran who came to debate the Prophet ﷺ about 'Isa; the later half is about Uhud, the year after Badr.",
    whenAr: "مدنيّة. وصدرُها الطويل وثيقُ الصلة بوفد نصارى نجران الذين قدموا يحاجّون النبيَّ ﷺ في عيسى؛ وأمّا آخرُها فأُحُدٌ في العام الذي بعد بدر.",
    movements: [
      { from: 1, to: 32,
        h: "Some verses are decisive and some are not — and it tells you which people go for which",
        hAr: "منه محكمٌ ومنه متشابه — وتخبرك بمن يقصد أيًّا منهما",
        en: "Verse 7 is one of the most important in the Quran about the Quran: some of its verses are clear and decisive, others bear more than one reading. And then it names the motive — those with crookedness in their hearts go after the unclear ones, seeking discord.\n\nSo the surah begins by describing a technique, not a doctrine: taking the ambiguous line and building on it while ignoring the plain one.",
        ar: "الآيةُ السابعة من أهمّ ما في القرآن عن القرآن: منه آياتٌ محكماتٌ بيّنات، وأُخَرُ متشابهاتٌ تحتمل أكثر من وجه. ثم سمّت الباعث: ﴿فَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِمْ زَيْغٌۭ فَيَتَّبِعُونَ مَا تَشَٰبَهَ مِنْهُ ٱبْتِغَآءَ ٱلْفِتْنَةِ﴾.\n\nفافتتحت السورةُ بوصف طريقةٍ لا بوصف مذهب: أن يُؤخذ المحتمِلُ فيُبنى عليه ويُترك البيّن." },
      { from: 33, to: 63,
        h: "Maryam, and then the argument about her son — settled by an offer, not a shout",
        hAr: "مريم، ثم الخصومةُ في ابنها — تُحسم بعرضٍ لا بصياح",
        en: "The family of 'Imran, Maryam's birth and her mother's vow, Zakariyya, Yahya, and then the annunciation and 'Isa.\n\nAnd the debate is closed with a comparison rather than an insult: the likeness of 'Isa with Allah is as the likeness of Adam — He created him from dust. If a man with no father is proof of divinity, then Adam, with no parents at all, has the stronger claim.\n\nThen the mubahalah: let us bring our families and invoke the curse of Allah on whoever is lying. They declined.",
        ar: "آلُ عمران، ومولدُ مريم ونذرُ أمّها، وزكريّا ويحيى، ثم البشارةُ وعيسى.\n\nوتُختم الخصومةُ بمقايسةٍ لا بسِباب: ﴿إِنَّ مَثَلَ عِيسَىٰ عِندَ ٱللَّهِ كَمَثَلِ ءَادَمَ ۖ خَلَقَهُۥ مِن تُرَابٍۢ﴾. فإن كان من لا أب له دليلَ الألوهيّة فآدمُ ولا أبوين له أولى بذلك.\n\nثم المباهلة: ندعُ أبناءنا وأبناءكم ثم نبتهل فنجعل لعنة الله على الكاذبين. فأبَوا." },
      { from: 64, to: 120,
        h: "Come to a word we both already hold — then: hold the rope together",
        hAr: "تعالوا إلى كلمةٍ نتفق عليها — ثم: اعتصموا بالحبل جميعًا",
        en: "The address to the People of the Book is not \"you are wrong.\" It is: come to a word that is EQUAL BETWEEN US — that we worship none but Allah. An invitation built on the ground already shared.\n\nThen the surah turns inward. Hold fast to the rope of Allah TOGETHER and do not separate — and it reminds them what they were: enemies, and He joined their hearts. The command against division is given to people who remember what division cost them.",
        ar: "ليس الخطابُ لأهل الكتاب: أنتم مخطئون، وإنما هو: ﴿تَعَالَوْا۟ إِلَىٰ كَلِمَةٍۢ سَوَآءٍۭ بَيْنَنَا وَبَيْنَكُمْ أَلَّا نَعْبُدَ إِلَّا ٱللَّهَ﴾. دعوةٌ مبنيّةٌ على المشترك.\n\nثم تلتفت السورةُ إلى الداخل: ﴿وَٱعْتَصِمُوا۟ بِحَبْلِ ٱللَّهِ جَمِيعًۭا وَلَا تَفَرَّقُوا۟﴾ — وتذكّرهم بما كانوا: أعداءً فألّف بين قلوبهم. فالنهيُ عن الفرقة جاء لقومٍ يذكرون ما كلّفتهم الفرقة." },
      { from: 121, to: 180,
        h: "Uhud, examined without excuses",
        hAr: "أُحُدٌ، تُدرس بلا أعذار",
        en: "Sixty verses on a defeat, and the honesty of them is the reason they are here. The archers left their post. \"Until you lost courage and disputed about the order and disobeyed, after He had shown you what you love.\"\n\nAnd then the question is answered plainly: when a disaster struck you, and you had struck twice as much at Badr, you said — where is this from? Say: IT IS FROM YOURSELVES.\n\nNo enemy is blamed. No fate is blamed. The surah tells a grieving community that the cause was internal, which is the only kind of cause anybody can do anything about.",
        ar: "ستّون آيةً في هزيمة، وصدقُها هو سببُ وجودها. ترك الرماةُ مواضعهم: ﴿حَتَّىٰٓ إِذَا فَشِلْتُمْ وَتَنَٰزَعْتُمْ فِى ٱلْأَمْرِ وَعَصَيْتُم مِّنۢ بَعْدِ مَآ أَرَىٰكُم مَّا تُحِبُّونَ﴾.\n\nثم يُجاب السؤالُ صراحةً: ﴿أَوَلَمَّآ أَصَٰبَتْكُم مُّصِيبَةٌۭ قَدْ أَصَبْتُم مِّثْلَيْهَا قُلْتُمْ أَنَّىٰ هَٰذَا ۖ قُلْ هُوَ مِنْ عِندِ أَنفُسِكُمْ﴾.\n\nفلم يُلَم عدوّ، ولم يُلَم قدر. تقول السورةُ لجماعةٍ مفجوعة إنّ العلّة من داخلها، وهي وحدها العلّةُ التي يمكن لأحدٍ أن يصنع فيها شيئًا." },
      { from: 181, to: 200,
        h: "And it ends with people who cannot sleep for thinking",
        hAr: "وتُختم بقومٍ لا ينامون من التفكّر",
        en: "The closing turns from the battlefield to the night: those who remember Allah standing, sitting and on their sides, and reflect on the creation of the heavens and the earth — and then say: our Lord, You did not create this without purpose.\n\nThose are ULU-L-ALBAB, the people of understanding. And the surah defines them not by what they know but by what keeps them awake.\n\nThe last verse is a command to three things and then one more: be patient, outlast others in patience, hold your posts — and fear Allah.",
        ar: "تنصرف الخاتمةُ من الميدان إلى الليل: ﴿ٱلَّذِينَ يَذْكُرُونَ ٱللَّهَ قِيَٰمًۭا وَقُعُودًۭا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ﴾ ثم يقولون: ﴿رَبَّنَا مَا خَلَقْتَ هَٰذَا بَٰطِلًۭا﴾.\n\nهؤلاء أولو الألباب. ولم تعرّفهم السورةُ بما يعلمون، وإنما بما يُسهرهم.\n\nوآخرُ آيةٍ أمرٌ بثلاثٍ ثم رابعة: ﴿ٱصْبِرُوا۟ وَصَابِرُوا۟ وَرَابِطُوا۟ وَٱتَّقُوا۟ ٱللَّهَ﴾." }
    ],
    thread: "The opening says people twist the unclear verses to cause discord; the middle shows a community torn by exactly that; the end shows a defeat caused by internal disagreement. Misusing the text, splitting, and losing — the surah lays them out in that order because that is the order they happen in.",
    threadAr: "يقول المطلعُ إنّ الناس يتّبعون المتشابه ابتغاء الفتنة؛ ويُري الوسطُ جماعةً مزّقها ذلك بعينه؛ ويُري الآخرُ هزيمةً سببُها التنازع. فإساءةُ استعمال النصّ، ثم الفرقة، ثم الخسارة — رتّبتها السورةُ هكذا لأنه ترتيبُ وقوعها."
  },

  4: {
    title: "The people nobody was speaking for",
    titleAr: "الذين لم يكن لهم من يتكلّم عنهم",
    oneLine: "A surah of law that keeps returning to one kind of person: the one with no power to enforce their own rights.",
    oneLineAr: "سورةُ أحكامٍ ترجع أبدًا إلى صنفٍ واحد: من لا قوّة له على أخذ حقّه.",
    when: "Madinan. Much of it follows Uhud, which left the community with a large number of widows and orphans at once — which is why the subject arrives with such urgency.",
    whenAr: "مدنيّة. وأكثرُها بعد أُحُدٍ التي خلّفت في الجماعة أراملَ وأيتامًا في وقتٍ واحد — ولهذا جاء البابُ بهذا الإلحاح.",
    movements: [
      { from: 1, to: 35,
        h: "Orphans, then women, then the shares — and the order is not accidental",
        hAr: "اليتامى، ثم النساء، ثم الأنصبة — والترتيب ليس اتفاقًا",
        en: "It opens on one soul from which all people came — establishing that everybody addressed is the same kind of thing — and goes straight to orphans' property: do not swallow it into your own.\n\nThen the mahr, said plainly to be hers. Then the inheritance shares in full detail, twice stated to come AFTER debts and bequests. Then \"men are qawwamun over women\" — placed after the financial obligations, not before them, which is how the verse reads in its own context.",
        ar: "تفتتح بالنفس الواحدة التي خُلق منها الناس — فتقرّر أنّ المخاطَبين جنسٌ واحد — ثم تمضي من فورها إلى مال اليتيم: ﴿وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَهُمْ إِلَىٰٓ أَمْوَٰلِكُمْ﴾.\n\nثم المهرُ، منصوصًا على أنه لها. ثم أنصبةُ الميراث مفصَّلة، مقيَّدةً مرّتين بأنها ﴿مِنۢ بَعْدِ وَصِيَّةٍۢ … أَوْ دَيْنٍ﴾. ثم ﴿ٱلرِّجَالُ قَوَّٰمُونَ عَلَى ٱلنِّسَآءِ﴾ — بعد التكاليف الماليّة لا قبلها، وهكذا تُقرأ الآيةُ في سياقها." },
      { from: 36, to: 70,
        h: "The circle widens to everyone within reach",
        hAr: "تتّسع الدائرةُ إلى كلِّ من يبلغك",
        en: "Verse 36 is a list and worth reading slowly: parents, relatives, orphans, the needy, the near neighbour, the FAR neighbour, the companion at your side, the traveller, and those your right hands possess.\n\nIt moves outward in rings from your own house to a stranger passing through. Nobody within reach is left off it.\n\nThen: render trusts to those they belong to, and judge with justice — and then the command to obey Allah, the Messenger, and those in authority, with the condition attached that disputes go back to Allah and the Messenger.",
        ar: "الآيةُ السادسة والثلاثون عدٌّ يحسن التمهّل فيه: الوالدان، وذو القربى، واليتامى، والمساكين، والجارُ ذو القربى، والجارُ الجُنُب، والصاحبُ بالجنب، وابنُ السبيل، وما ملكت أيمانكم.\n\nتخرج حلقةً بعد حلقةٍ من بيتك إلى غريبٍ عابر، ولا يسقط منها أحدٌ تبلغه.\n\nثم: ﴿أَن تُؤَدُّوا۟ ٱلْأَمَٰنَٰتِ إِلَىٰٓ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ ٱلنَّاسِ أَن تَحْكُمُوا۟ بِٱلْعَدْلِ﴾ — ثم الأمرُ بطاعة الله والرسول وأولي الأمر، مقيَّدًا بردّ التنازع إلى الله والرسول." },
      { from: 71, to: 104,
        h: "Fighting, and the people who were too weak to leave",
        hAr: "القتال، والمستضعفون الذين لم يقدروا على الخروج",
        en: "The section on fighting contains a question that stops the reader: what is wrong with you that you do not fight for the OPPRESSED among men, women and children who say — our Lord, take us out of this town whose people are oppressors?\n\nThe cause named is not territory or victory. It is people who cannot get themselves out.\n\nAnd within it, the ruling on killing a believer by mistake, and the warning against saying to someone who greets you with peace \"you are not a believer\" — because you want what he is carrying.",
        ar: "في مقطع القتال سؤالٌ يوقف القارئ: ﴿وَمَا لَكُمْ لَا تُقَٰتِلُونَ فِى سَبِيلِ ٱللَّهِ وَٱلْمُسْتَضْعَفِينَ مِنَ ٱلرِّجَالِ وَٱلنِّسَآءِ وَٱلْوِلْدَٰنِ ٱلَّذِينَ يَقُولُونَ رَبَّنَآ أَخْرِجْنَا مِنْ هَٰذِهِ ٱلْقَرْيَةِ ٱلظَّالِمِ أَهْلُهَا﴾.\n\nفالعلّةُ المذكورة ليست أرضًا ولا نصرًا، وإنما قومٌ لا يقدرون على الخروج بأنفسهم.\n\nوفيه حكمُ قتل المؤمن خطأً، والنهيُ عن أن تقول لمن ألقى إليك السلام: لستَ مؤمنًا — طلبًا لما معه." },
      { from: 105, to: 135,
        h: "A theft, a false accusation, and a Prophet corrected",
        hAr: "سرقةٌ وتهمةٌ باطلة، ونبيٌّ يُصوَّب له",
        en: "A man from among the Muslims stole, and his people tried to shift the blame onto a Jewish man. The verses come down defending the accused and rebuking those who would have used the Prophet ﷺ himself to launder it: \"do not be an advocate for the treacherous.\"\n\nThe community is corrected against its own member, in favour of an outsider. That is the standard the surah is setting.\n\nAnd then, later: BE PERSISTENTLY STANDING FIRM IN JUSTICE, witnesses for Allah, even against yourselves, or parents, or relatives.",
        ar: "سرق رجلٌ من المسلمين، فحاول قومُه أن يرموا بها رجلًا من اليهود. فنزلت الآياتُ تدفع عن المتَّهم وتعاتب من أراد أن يُتّخذ النبيُّ ﷺ نفسُه ستارًا لذلك: ﴿وَلَا تَكُن لِّلْخَآئِنِينَ خَصِيمًۭا﴾.\n\nفصُوّبت الجماعةُ على نفسها لصالح من هو خارجها. وهذا هو الميزانُ الذي تقيمه السورة.\n\nثم بعدُ: ﴿كُونُوا۟ قَوَّٰمِينَ بِٱلْقِسْطِ شُهَدَآءَ لِلَّهِ وَلَوْ عَلَىٰٓ أَنفُسِكُمْ أَوِ ٱلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ﴾." },
      { from: 136, to: 175,
        h: "The hypocrites, and then the argument about 'Isa again",
        hAr: "المنافقون، ثم العودُ إلى الخصومة في عيسى",
        en: "The hypocrites are described in their own words and their own habit: standing up for prayer lazily, to be seen, remembering Allah only a little — wavering between the two sides, belonging to neither.\n\nThen the surah returns to the People of the Book, and to 'Isa: they did not kill him and did not crucify him, but it was made to appear so to them. And the correction: do not go to excess in your religion, and do not say about Allah except the truth.",
        ar: "يُوصف المنافقون بألفاظهم وبعادتهم: ﴿وَإِذَا قَامُوٓا۟ إِلَى ٱلصَّلَوٰةِ قَامُوا۟ كُسَالَىٰ يُرَآءُونَ ٱلنَّاسَ وَلَا يَذْكُرُونَ ٱللَّهَ إِلَّا قَلِيلًۭا﴾ — مذبذبين بين ذلك، لا إلى هؤلاء ولا إلى هؤلاء.\n\nثم ترجع السورةُ إلى أهل الكتاب وإلى عيسى: ﴿وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ﴾. ثم التصويب: ﴿لَا تَغْلُوا۟ فِى دِينِكُمْ وَلَا تَقُولُوا۟ عَلَى ٱللَّهِ إِلَّا ٱلْحَقَّ﴾." },
      { from: 176, to: 176,
        h: "And it ends on an inheritance ruling — the same subject it began with",
        hAr: "وتُختم بحكمٍ في الميراث — وهو البابُ الذي بدأت به",
        en: "The last verse of the surah answers a question about kalalah — a man who dies leaving neither parents nor children, and what his sister takes.\n\nA surah that opened on orphans' property closes on a woman's share of an estate. Whatever else it covered in between, it began and ended in the same place: making sure the people who cannot claim for themselves are named in the text.",
        ar: "آخرُ آيةٍ في السورة جوابٌ عن الكلالة — رجلٍ يموت لا والد له ولا ولد، وما لأخته.\n\nفسورةٌ افتُتحت بمال اليتيم خُتمت بنصيب امرأةٍ من تركة. ومهما يكن ما بينهما، فقد بدأت وانتهت في الموضع نفسه: أن يُسمَّى في النصّ من لا يقدر أن يطالب لنفسه." }
    ],
    thread: "Read the list of who this surah legislates for and one thing is common to nearly all of them: orphans, widows, wives, the oppressed who cannot emigrate, a man accused because he was an outsider, a sister with no brother to inherit through. It is a body of law written from the position of whoever in the room has the least power to enforce their own claim.",
    threadAr: "اقرأ عدَّ من شرّعت لهم هذه السورة يجمعهم أمرٌ واحد في عامّتهم: اليتامى، والأرامل، والزوجات، والمستضعفون الذين لا يستطيعون هجرة، ورجلٌ اتُّهم لأنه غريب، وأختٌ لا أخ لها تَرِث به. فهي تشريعٌ كُتب من موضع أقلِّ من في المجلس قدرةً على أخذ حقّه."
  },

  5: {
    title: "Keep your word — the surah of contracts",
    titleAr: "أوفوا بالعقود — سورةُ العهود",
    oneLine: "It opens with \"fulfil your contracts\" and then walks through every covenant that has ever been broken, ending with a prophet asked whether he told people to worship him.",
    oneLineAr: "تفتتح بـ﴿أَوْفُوا۟ بِٱلْعُقُودِ﴾ ثم تمشي في كلِّ عهدٍ نُقض، وتُختم بنبيٍّ يُسأل: أأنت قلتَ للناس اتّخذوني إلهًا؟",
    when: "Madinan and among the last revealed. Verse 3 — \"today I have perfected your religion for you\" — is widely reported to have come down at the Farewell Pilgrimage, near the end of the Prophet's life.",
    whenAr: "مدنيّة ومن أواخر ما نزل. والآيةُ الثالثة ﴿ٱلْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ﴾ مشهورٌ أنها نزلت في حجّة الوداع، قُبيل انتهاء عمره ﷺ.",
    movements: [
      { from: 1, to: 11,
        h: "The first word is an instruction about keeping agreements",
        hAr: "أوّلُ كلمةٍ فيها أمرٌ بالوفاء",
        en: "\"O you who believe, fulfil the contracts.\" That is the opening, and it sets the subject of everything after it.\n\nThen food and hunting rules, then the sentence about the religion being completed — and immediately after it, the command that hatred of a people must not push you into injustice, and: COOPERATE IN RIGHTEOUSNESS AND PIETY, AND DO NOT COOPERATE IN SIN AND AGGRESSION.",
        ar: "﴿يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَوْفُوا۟ بِٱلْعُقُودِ﴾. هذا هو المطلع، وهو يعيّن موضوع ما بعده.\n\nثم أحكامُ الطعام والصيد، ثم جملةُ إكمال الدين — وبعدها من فورها: ألّا يحملكم بغضُ قومٍ على أن تعتدوا، و﴿تَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ وَلَا تَعَاوَنُوا۟ عَلَى ٱلْإِثْمِ وَٱلْعُدْوَٰنِ﴾." },
      { from: 12, to: 26,
        h: "Two covenants taken, and both broken",
        hAr: "ميثاقان أُخذا، ونُقضا",
        en: "Allah took a covenant from the Children of Israel and from the Christians, and both are described as having been broken — with the consequence stated: hearts hardened, and words moved from their places.\n\nThen the refusal to enter the land: \"go, you and your Lord, and fight — we are sitting here.\" Forty years of wandering follow.\n\nThe surah is building a pattern: an agreement is made, it is not kept, and the cost is paid by the people who did not keep it.",
        ar: "أخذ اللهُ ميثاقَ بني إسرائيل وميثاقَ النصارى، ووُصف الميثاقان بالنقض — وذُكر أثرُه: قسوةُ القلوب وتحريفُ الكلم عن مواضعه.\n\nثم الامتناعُ عن دخول الأرض: ﴿فَٱذْهَبْ أَنتَ وَرَبُّكَ فَقَٰتِلَآ إِنَّا هَٰهُنَا قَٰعِدُونَ﴾. فكانت أربعون سنةً من التيه.\n\nوالسورةُ تبني نسقًا: عهدٌ يُعقد، ولا يُوفى به، ويدفع الثمنَ من لم يفِ." },
      { from: 27, to: 50,
        h: "The first murder, and then the law that answers it",
        hAr: "أوّلُ قتيل، ثم الشريعةُ التي تجيبه",
        en: "The two sons of Adam. One's offering is accepted and the other's is not, and the rejected one says: I will kill you. The answer he gets is one of the finest lines in the Quran: if you extend your hand to kill me, I will not extend mine to kill you.\n\nThen the murder, and the crow that shows him how to bury a body — and immediately after it, 5:32: whoever kills one soul, it is as if he killed all mankind.\n\nThe law on killing is placed directly after the first killing. That is the surah's method throughout.",
        ar: "ابنا آدم: يُتقبّل من أحدهما ولا يُتقبّل من الآخر، فيقول المردودُ عليه: ﴿لَأَقْتُلَنَّكَ﴾. فيكون الجوابُ من أرفع ما في القرآن: ﴿لَئِنۢ بَسَطتَ إِلَىَّ يَدَكَ لِتَقْتُلَنِى مَآ أَنَا۠ بِبَاسِطٍۢ يَدِىَ إِلَيْكَ لِأَقْتُلَكَ﴾.\n\nثم القتل، والغرابُ يريه كيف يواري سوءة أخيه — ثم من فورها: ﴿مَن قَتَلَ نَفْسًۢا بِغَيْرِ نَفْسٍ … فَكَأَنَّمَا قَتَلَ ٱلنَّاسَ جَمِيعًۭا﴾.\n\nفوُضع حكمُ القتل عقب أوّل قتل. وهذه طريقةُ السورة في عامّتها." },
      { from: 51, to: 86,
        h: "Whose side are you on — and the command to deliver the message",
        hAr: "مع من أنت؟ — والأمرُ بالبلاغ",
        en: "The verses on alliances belong to a moment of war and are read badly when lifted out of it; the surah itself gives the limit a few lines later, and elsewhere permits kindness and justice toward those who did not fight you.\n\nThen verse 67, addressed to the Prophet ﷺ alone: deliver what has been revealed to you, and if you do not, you have not delivered His message. A command with no softening in it.\n\nAnd then the surah notes something surprising: among the People of the Book are those nearest in affection to the believers — priests and monks who are not arrogant, whose eyes overflow when they hear the truth.",
        ar: "آياتُ الموالاة نزلت في حال حربٍ وتُساء قراءتُها إذا نُزعت من موضعها؛ والسورةُ نفسُها تضع الحدَّ بعد أسطر، وفي غيرها الإذنُ بالبرّ والقسط لمن لم يقاتلوكم.\n\nثم الآيةُ السابعة والستون، خطابًا له ﷺ وحده: ﴿بَلِّغْ مَآ أُنزِلَ إِلَيْكَ مِن رَّبِّكَ ۖ وَإِن لَّمْ تَفْعَلْ فَمَا بَلَّغْتَ رِسَالَتَهُۥ﴾. أمرٌ لا لينَ فيه.\n\nثم تذكر السورةُ ما يفاجئ: أنّ من أهل الكتاب أقربَ الناس مودّةً للذين آمنوا — قسّيسين ورهبانًا لا يستكبرون، تفيض أعينُهم إذا سمعوا الحقّ." },
      { from: 87, to: 108,
        h: "Wine and gambling forbidden, and oaths taken seriously",
        hAr: "تحريمُ الخمر والميسر، والأيمانُ تُؤخذ مأخذها",
        en: "The final ruling on intoxicants and gambling comes here, with the reason attached: Shaytan wants only to cause enmity and hatred between you through wine and gambling, and to turn you away from the remembrance of Allah and from prayer.\n\nThen expiation for broken oaths — because a surah about keeping your word has to say what happens when you do not.\n\nAnd 5:101: do not ask about things which, if made clear to you, would trouble you. A warning against manufacturing difficulty in the religion.",
        ar: "يجيء الحكمُ النهائيّ في الخمر والميسر هنا، ومعه العلّة: ﴿إِنَّمَا يُرِيدُ ٱلشَّيْطَٰنُ أَن يُوقِعَ بَيْنَكُمُ ٱلْعَدَٰوَةَ وَٱلْبَغْضَآءَ فِى ٱلْخَمْرِ وَٱلْمَيْسِرِ وَيَصُدَّكُمْ عَن ذِكْرِ ٱللَّهِ وَعَنِ ٱلصَّلَوٰةِ﴾.\n\nثم كفّارةُ اليمين — فسورةٌ في الوفاء بالعهد لا بدّ أن تقول ما يكون إذا لم يُوفَ.\n\nوفيها: ﴿لَا تَسْـَٔلُوا۟ عَنْ أَشْيَآءَ إِن تُبْدَ لَكُمْ تَسُؤْكُمْ﴾ — تحذيرٌ من تكلّف المشقّة في الدين." },
      { from: 109, to: 120,
        h: "And it ends with a question put to 'Isa himself",
        hAr: "وتُختم بسؤالٍ يُوجَّه إلى عيسى نفسه",
        en: "The last scene: Allah asks 'Isa — did you say to the people, take me and my mother as two gods besides Allah?\n\nAnd his answer is the most careful sentence a person could give: glory be to You, it is not for me to say what I have no right to. If I had said it, You would have known it. You know what is in myself and I do not know what is in Yourself.\n\nThen: I said to them only what You commanded me — and I was a witness over them while I was among them, but when You took me, You were the Watcher over them.\n\nA surah that began by ordering people to keep their agreements ends with the man whose followers broke theirs, being asked in front of everyone whether he was the one who told them to.",
        ar: "المشهدُ الأخير: يسأل اللهُ عيسى: ﴿ءَأَنتَ قُلْتَ لِلنَّاسِ ٱتَّخِذُونِى وَأُمِّىَ إِلَٰهَيْنِ مِن دُونِ ٱللَّهِ﴾؟\n\nوجوابُه من أدقّ ما يقوله عبد: ﴿سُبْحَٰنَكَ مَا يَكُونُ لِىٓ أَنْ أَقُولَ مَا لَيْسَ لِى بِحَقٍّ ۚ إِن كُنتُ قُلْتُهُۥ فَقَدْ عَلِمْتَهُۥ ۚ تَعْلَمُ مَا فِى نَفْسِى وَلَآ أَعْلَمُ مَا فِى نَفْسِكَ﴾.\n\nثم: ﴿مَا قُلْتُ لَهُمْ إِلَّا مَآ أَمَرْتَنِى بِهِۦٓ … وَكُنتُ عَلَيْهِمْ شَهِيدًۭا مَّا دُمْتُ فِيهِمْ ۖ فَلَمَّا تَوَفَّيْتَنِى كُنتَ أَنتَ ٱلرَّقِيبَ عَلَيْهِمْ﴾.\n\nفسورةٌ بدأت بالأمر بالوفاء بالعقود تُختم بالرجل الذي نقض أتباعُه عهدهم، يُسأل على رؤوس الخلائق: أأنت أمرتهم بذلك؟" }
    ],
    thread: "Every section is an agreement: the covenants of the earlier nations, a brother's implicit trust, an alliance in war, an oath sworn, a prophet's commission to deliver. The surah opens by commanding that agreements be kept and then shows, case after case, what it costs when they are not — ending with the most consequential broken agreement of all.",
    threadAr: "كلُّ مقطعٍ فيها عهد: مواثيقُ الأمم قبلها، وأمانةُ أخٍ لأخيه، وحِلفٌ في حرب، ويمينٌ تُحلف، وتبليغٌ كُلّف به نبيّ. تفتتح بالأمر بالوفاء ثم تُري صورةً بعد صورةٍ ما يكلّف النقض — وتُختم بأعظم عهدٍ نُقض."
  },

  6: {
    title: "One long argument, delivered in one night",
    titleAr: "حجّةٌ واحدةٌ طويلة، نزلت جملةً",
    oneLine: "A Makkan surah that reasons rather than legislates — and its centre is a young man working his way to God by looking at the sky.",
    oneLineAr: "سورةٌ مكّيّةٌ تحاجّ ولا تشرّع — ومركزُها فتًى يهتدي إلى ربّه بالنظر في السماء.",
    when: "Makkan. It is widely reported to have been revealed all at once rather than in pieces, which fits how it reads: one sustained argument from beginning to end, without the interruptions a Madinan surah has.",
    whenAr: "مكّيّة. والمشهورُ أنها نزلت جملةً واحدةً لا مفرَّقة، وهو يوافق ما يُقرأ منها: حجّةٌ متّصلةٌ من أوّلها إلى آخرها، ليس فيها ما في المدنيّ من الاعتراض.",
    movements: [
      { from: 1, to: 32,
        h: "Praise, then the argument from what is in front of you",
        hAr: "الحمد، ثم الحجّةُ بما بين يديك",
        en: "It opens with praise for the One who created the heavens and the earth and made darkness and light — and then asks a question that runs through the whole surah: have they not travelled the earth and seen what happened to those before them?\n\nThen a scene from the Day: if you could see them stopped before the Fire saying \"if only we could be returned and not deny the signs of our Lord.\" And the verdict: no — what they used to conceal has become clear to them.",
        ar: "تفتتح بالحمد لمن خلق السماوات والأرض وجعل الظلمات والنور — ثم تسأل سؤالًا يجري في السورة كلِّها: ﴿أَلَمْ يَرَوْا۟ كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍۢ﴾.\n\nثم مشهدٌ من الآخرة: ﴿وَلَوْ تَرَىٰٓ إِذْ وُقِفُوا۟ عَلَى ٱلنَّارِ فَقَالُوا۟ يَٰلَيْتَنَا نُرَدُّ وَلَا نُكَذِّبَ بِـَٔايَٰتِ رَبِّنَا﴾. والحكم: ﴿بَلْ بَدَا لَهُم مَّا كَانُوا۟ يُخْفُونَ مِن قَبْلُ﴾." },
      { from: 33, to: 73,
        h: "A word to the Prophet ﷺ, and then the keys of the unseen",
        hAr: "كلمةٌ للنبيّ ﷺ، ثم مفاتحُ الغيب",
        en: "The surah turns to comfort him: We know that what they say grieves you — and they are not calling YOU a liar, but the wrongdoers reject the signs of Allah. The insult is not personal even when it sounds personal.\n\nThen one of the most expansive passages in the Quran: with Him are the keys of the unseen, none knows them but He. He knows what is on land and in the sea, and not a leaf falls but He knows it.\n\nAnd: He is the One who takes your souls by night and knows what you did by day, then raises you up in it — so that a fixed term may be fulfilled. Sleep described as a small death, every night.",
        ar: "تلتفت السورةُ إليه تسلّيه: ﴿قَدْ نَعْلَمُ إِنَّهُۥ لَيَحْزُنُكَ ٱلَّذِى يَقُولُونَ ۖ فَإِنَّهُمْ لَا يُكَذِّبُونَكَ وَلَٰكِنَّ ٱلظَّٰلِمِينَ بِـَٔايَٰتِ ٱللَّهِ يَجْحَدُونَ﴾. فليس الأذى شخصيًّا وإن بدا كذلك.\n\nثم من أوسع ما في القرآن: ﴿وَعِندَهُۥ مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ ۚ وَيَعْلَمُ مَا فِى ٱلْبَرِّ وَٱلْبَحْرِ ۚ وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا﴾.\n\nو: ﴿وَهُوَ ٱلَّذِى يَتَوَفَّىٰكُم بِٱلَّيْلِ وَيَعْلَمُ مَا جَرَحْتُم بِٱلنَّهَارِ ثُمَّ يَبْعَثُكُمْ فِيهِ لِيُقْضَىٰٓ أَجَلٌۭ مُّسَمًّۭى﴾. فالنومُ موتةٌ صغرى كلَّ ليلة." },
      { from: 74, to: 90,
        h: "Ibrahim, working it out for himself",
        hAr: "إبراهيمُ يستدلّ بنفسه",
        en: "This is the centre of the surah and the reason it is worth reading whole.\n\nIbrahim sees a star and says: this is my Lord. It sets, and he says: I do not love things that set. Then the moon, larger — this is my Lord. It sets. Then the sun, largest of all — this is my Lord, this is greater. It sets too.\n\nAnd then: I have turned my face to the One who created the heavens and the earth.\n\nHe is not told the answer. He is shown reasoning his way to it by ELIMINATION — everything that rises must set, so nothing that sets can be it. In a surah arguing with people who inherited their gods, the model given is a man who worked his out.",
        ar: "هذا مركزُ السورة، ولأجله تستحقّ أن تُقرأ كاملة.\n\nيرى إبراهيمُ كوكبًا فيقول: هذا ربّي. فيأفل، فيقول: ﴿لَآ أُحِبُّ ٱلْـَٔافِلِينَ﴾. ثم القمرَ وهو أكبر: هذا ربّي. فيأفل. ثم الشمسَ وهي أكبرُهنّ: ﴿هَٰذَا رَبِّى هَٰذَآ أَكْبَرُ﴾. فتأفل.\n\nثم: ﴿إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ﴾.\n\nلم يُلقَّن الجواب، وإنما أُري وهو يستدلّ بالسَّبر: كلُّ طالعٍ آفل، فلا يكون الآفلُ ربًّا. وفي سورةٍ تحاجّ قومًا ورثوا آلهتهم، جُعل المثالُ رجلًا استخرجها بنفسه." },
      { from: 91, to: 150,
        h: "The prohibitions they made up, and who gave them the right",
        hAr: "المحرّماتُ التي اخترعوها، ومن أذن لهم",
        en: "A long section on the food rules the Arabs had invented — this animal is forbidden, this one is for our idols, this is for the men and not the women — and the surah keeps asking one question: WHO TOLD YOU? Bring your knowledge. Were you witnesses when Allah enjoined this?\n\nIt is a sustained attack on inventing religion, and it lands on a rule that outlives the specific case: say — I do not find in what has been revealed to me anything forbidden except… and the list is short.\n\nThe burden of proof is on whoever declares a thing forbidden, not on whoever leaves it alone.",
        ar: "مقطعٌ طويلٌ في محرّمات الطعام التي ابتدعها العرب — هذه بَحيرة، وهذه لشركائنا، وهذه خالصةٌ لذكورنا ومحرّمةٌ على أزواجنا — والسورةُ تعيد سؤالًا واحدًا: ﴿قُلْ هَلُمَّ شُهَدَآءَكُمُ﴾، ﴿أَمْ كُنتُمْ شُهَدَآءَ إِذْ وَصَّىٰكُمُ ٱللَّهُ بِهَٰذَا﴾.\n\nوهي حملةٌ متّصلةٌ على الابتداع في الدين، تنتهي إلى قاعدةٍ تتجاوز الواقعة: ﴿قُل لَّآ أَجِدُ فِى مَآ أُوحِىَ إِلَىَّ مُحَرَّمًا﴾ — ثم عدٌّ قصير.\n\nفالبيّنةُ على من حرّم، لا على من ترك." },
      { from: 151, to: 165,
        h: "Ten commandments, and then the closing line",
        hAr: "الوصايا العشر، ثم الخاتمة",
        en: "Three verses list what He actually did enjoin: do not associate anything with Him; be good to parents; do not kill your children out of poverty — WE PROVIDE FOR YOU AND FOR THEM; do not approach immoralities; do not kill the soul He made sacred; do not approach the orphan's property except in the best way; give full measure; be just in what you say even against a relative; fulfil the covenant of Allah.\n\nAnd then the surah closes: no bearer of burdens bears the burden of another — and He is the One who made you successors on the earth and raised some of you above others in degrees, to test you in what He has given you.",
        ar: "ثلاثُ آياتٍ تعدّ ما أوصى به حقًّا: ألّا تشركوا به شيئًا، وبالوالدين إحسانًا، ولا تقتلوا أولادكم من إملاق — ﴿نَّحْنُ نَرْزُقُكُمْ وَإِيَّاهُمْ﴾، ولا تقربوا الفواحش، ولا تقتلوا النفس التي حرّم الله، ولا تقربوا مال اليتيم إلا بالتي هي أحسن، وأوفوا الكيل والميزان، وإذا قلتم فاعدلوا ولو كان ذا قربى، وبعهد الله أوفوا.\n\nثم تُختم: ﴿وَلَا تَزِرُ وَازِرَةٌۭ وِزْرَ أُخْرَىٰ﴾ — ﴿وَهُوَ ٱلَّذِى جَعَلَكُمْ خَلَٰٓئِفَ ٱلْأَرْضِ وَرَفَعَ بَعْضَكُمْ فَوْقَ بَعْضٍۢ دَرَجَٰتٍۢ لِّيَبْلُوَكُمْ فِى مَآ ءَاتَىٰكُمْ﴾." }
    ],
    thread: "The surah is one argument about authority: who is entitled to say what is true and what is forbidden. It answers by showing Ibrahim reasoning his way to God without being told, then by demolishing rules people invented and could not source, then by listing the ten things that actually were commanded. Inherited certainty is taken apart; examined certainty is put in its place.",
    threadAr: "السورةُ حجّةٌ واحدةٌ في مرجع الحكم: من الذي له أن يقول ما الحقّ وما الحرام. فأجابت بأن أرت إبراهيم يستدلّ إلى ربّه من غير تلقين، ثم بأن نقضت أحكامًا اخترعوها ولم يجدوا لها سندًا، ثم بأن عدّت العشر التي أُوصي بها حقًّا. فنُقض اليقينُ الموروث، وأُقيم مكانه اليقينُ المنظور فيه."
  },

  7: {
    title: "The same story, told seven times",
    titleAr: "القصّةُ نفسُها، سبعَ مرّات",
    oneLine: "A messenger comes, his people call him a liar, they are destroyed — repeated until the pattern is impossible to miss, and then applied to the reader.",
    oneLineAr: "رسولٌ يأتي، فيكذّبه قومُه، فيُهلَكون — تتكرّر حتى لا يمكن أن يُخطئ القارئ النسق، ثم يُطبَّق عليه.",
    when: "Makkan, and one of the longest Makkan surahs. It was revealed to a Prophet whose own people were doing exactly what every people in it does.",
    whenAr: "مكّيّة، ومن أطول المكّيّ. نزلت على نبيٍّ كان قومُه يصنعون به عين ما يصنعه كلُّ قومٍ فيها.",
    movements: [
      { from: 1, to: 25,
        h: "Adam, Iblis, and the first thing that was taken away",
        hAr: "آدمُ وإبليس، وأوّلُ ما نُزع",
        en: "Iblis refuses to bow, and the reason he gives is a comparison: I am better than him, You created me from fire and him from clay. Pride expressed as a ranking.\n\nThen he asks for time, and states his plan openly: I will come at them from before them and behind them, from their right and their left.\n\nAnd the first thing that happens to Adam and his wife when they eat is that their private parts become apparent to them. The surah's very next subject is clothing — because it starts the theme there.",
        ar: "يأبى إبليسُ السجود، وعلّتُه مقايسة: ﴿أَنَا۠ خَيْرٌۭ مِّنْهُ خَلَقْتَنِى مِن نَّارٍۢ وَخَلَقْتَهُۥ مِن طِينٍۢ﴾. كِبرٌ في صورة ترتيب.\n\nثم يستمهل، ويعلن خطّته: ﴿ثُمَّ لَـَٔاتِيَنَّهُم مِّنۢ بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ وَعَنْ أَيْمَٰنِهِمْ وَعَن شَمَآئِلِهِمْ﴾.\n\nوأوّلُ ما وقع لآدم وزوجه حين أكلا أن بدت لهما سوآتُهما. وموضوعُ السورة الذي يليه مباشرةً اللباس — لأنها من هنا تبدأ الخيط." },
      { from: 26, to: 58,
        h: "Clothing, adornment, and the mosque",
        hAr: "اللباسُ والزينةُ والمسجد",
        en: "\"O children of Adam, We have sent down to you clothing to cover you, and as adornment — and the clothing of taqwa, that is best.\"\n\nThen: take your adornment at every mosque, and eat and drink but do not be excessive. The surah is unusually direct that beauty is not the problem; excess is.\n\nAnd then the scene between the people of Paradise and the people of the Fire calling to each other, with the heights between them.",
        ar: "﴿يَٰبَنِىٓ ءَادَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًۭا يُوَٰرِى سَوْءَٰتِكُمْ وَرِيشًۭا ۖ وَلِبَاسُ ٱلتَّقْوَىٰ ذَٰلِكَ خَيْرٌۭ﴾.\n\nثم: ﴿خُذُوا۟ زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍۢ وَكُلُوا۟ وَٱشْرَبُوا۟ وَلَا تُسْرِفُوٓا۟﴾. والسورةُ صريحةٌ على غير المعتاد في أنّ الجمال ليس هو العلّة، وإنما الإسراف.\n\nثم مشهدُ التنادي بين أهل الجنّة وأهل النار، وبينهما الأعراف." },
      { from: 59, to: 102,
        h: "Five messengers, and the same sentence each time",
        hAr: "خمسةُ رسل، وفي كلِّ مرّةٍ الجملةُ نفسها",
        en: "Nuh, Hud, Salih, Lut, Shu'ayb — one after another, and each section is built the same way. \"O my people, worship Allah; you have no god but Him.\" Then the leaders of his people answer. Then the destruction.\n\nRead them in sequence and the repetition stops feeling like repetition and starts feeling like evidence. The objection is always from the ELITE — al-mala', the chiefs — and it is always about position rather than proof: you want to be greater than us; we found our fathers on this.\n\nBy the fifth telling the reader can predict what will be said before it is said. That is the point of telling it five times.",
        ar: "نوحٌ وهودٌ وصالحٌ ولوطٌ وشعيب — واحدًا بعد واحد، وكلُّ مقطعٍ مبنيٌّ على صورةٍ واحدة: ﴿يَٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُۥٓ﴾. ثم يجيب الملأُ من قومه. ثم الهلاك.\n\nاقرأها متتابعةً يتحوّل التكرارُ عندك من تكرارٍ إلى بيّنة. فالاعتراضُ أبدًا من الملأ — الأشراف — وهو أبدًا في المنزلة لا في الدليل: تريد أن تعلو علينا، وقد وجدنا آباءنا على هذا.\n\nوعند الخامسة يصير القارئُ يعرف ما سيُقال قبل أن يُقال. وهذا هو المقصود من روايتها خمسًا." },
      { from: 103, to: 171,
        h: "Musa — the longest telling, because the opponent was the strongest",
        hAr: "موسى — أطولُها، لأنّ الخصم كان أقوى",
        en: "Fir'awn is given far more room than the others, and the sequence is complete: the staff, the magicians who prostrate the moment they see it and are threatened with crucifixion and answer that they do not care, the plagues sent one after another, the sea, and then — while Musa is away — the calf.\n\nThe most painful part is not Fir'awn. It is that the people who were just rescued through a parted sea asked, within days, for a god they could see.\n\nAnd within this: the appointment on the mountain, the request to see Him, the mountain crumbling, and the Torah's tablets.",
        ar: "أُفرد لفرعون ما لم يُفرد لغيره، والقصّةُ تامّة: العصا، والسحرةُ يخرّون سجّدًا من فورهم فيُتوعَّدون بالصلب فلا يبالون، والآياتُ ترسَل تباعًا، والبحر، ثم — وموسى غائب — العجل.\n\nوأشدُّ ما فيها ليس فرعون، وإنما أنّ الذين نجوا من بحرٍ انفلق سألوا بعد أيّامٍ إلهًا يرونه.\n\nوفيها: الميقاتُ على الجبل، وسؤالُ الرؤية، ودكُّ الجبل، وألواحُ التوراة." },
      { from: 172, to: 206,
        h: "The covenant taken from every human being, and then: turn away from the ignorant",
        hAr: "الميثاقُ المأخوذ على كلِّ إنسان، ثم: ﴿وَأَعْرِضْ عَنِ ٱلْجَٰهِلِينَ﴾",
        en: "One of the strangest and most quoted passages: He brought forth from the loins of the children of Adam their descendants and made them testify against themselves — AM I NOT YOUR LORD? They said: yes, we bear witness. So that you could not say on the Day of Resurrection: we were unaware of this.\n\nThen the man who was given Our signs and shed them like a skin, and the surah's closing instruction to the Prophet ﷺ, which is startlingly practical after 200 verses of destruction: take what is easily given, command what is right, and TURN AWAY FROM THE IGNORANT.\n\nThe last verse is a prostration.",
        ar: "من أغرب ما فيها وأكثره نقلًا: ﴿وَإِذْ أَخَذَ رَبُّكَ مِنۢ بَنِىٓ ءَادَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰٓ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا۟ بَلَىٰ شَهِدْنَآ﴾ — ﴿أَن تَقُولُوا۟ يَوْمَ ٱلْقِيَٰمَةِ إِنَّا كُنَّا عَنْ هَٰذَا غَٰفِلِينَ﴾.\n\nثم الذي آتيناه آياتنا فانسلخ منها، ثم وصيّةُ السورة له ﷺ، وهي عمليّةٌ على نحوٍ يلفت بعد مئتي آيةٍ من الإهلاك: ﴿خُذِ ٱلْعَفْوَ وَأْمُرْ بِٱلْعُرْفِ وَأَعْرِضْ عَنِ ٱلْجَٰهِلِينَ﴾.\n\nوآخرُها سجدة." }
    ],
    thread: "The surah repeats one structure until it becomes visible as a structure. Every rejection in it is made by the powerful, and every one is argued from position and inheritance rather than from evidence. Then, at the end, the reader is placed inside it: the covenant was taken from YOU too, before you were born.",
    threadAr: "تكرّر السورةُ بناءً واحدًا حتى يصير البناءُ نفسُه مرئيًّا. وكلُّ ردٍّ فيها من أهل القوّة، وكلُّه محتجٌّ بالمنزلة والموروث لا بالبيّنة. ثم يُوضع القارئُ في آخرها داخلها: فالميثاقُ أُخذ عليك أنت أيضًا، قبل أن تُولد."
  },

  8: {
    title: "They won — and the first thing revealed was a correction",
    titleAr: "انتصروا — فكان أوّلُ ما نزل تصويبًا",
    oneLine: "The surah of Badr, and it opens not with celebration but with an argument about who owns the spoils.",
    oneLineAr: "سورةُ بدر، وتفتتح لا بالتهنئة، بل بخصومةٍ في الغنائم.",
    when: "Madinan, immediately after Badr — the first major battle, and a decisive victory against far greater numbers.",
    whenAr: "مدنيّة، عقب بدرٍ مباشرة — أوّلِ وقعةٍ كبرى، ونصرٍ حاسمٍ على عددٍ أكثر بكثير.",
    movements: [
      { from: 1, to: 19,
        h: "The question they asked, and the question they should have asked",
        hAr: "السؤالُ الذي سألوه، والسؤالُ الذي كان ينبغي",
        en: "They ask about the spoils. The answer does not divide them — it moves the subject: the spoils belong to Allah and the Messenger, SO FEAR ALLAH AND SET RIGHT WHAT IS BETWEEN YOU.\n\nA dispute about property is answered with an instruction about relationships. Then the believers are described — those whose hearts tremble at the mention of Allah — as if to say: this is what you should be measuring.\n\nThen the battle is retold with the credit placed elsewhere: you did not kill them, but Allah killed them; and you did not throw when you threw, but Allah threw.",
        ar: "يسألون عن الأنفال، فلا يقسمها الجوابُ وإنما ينقل الموضوع: ﴿قُلِ ٱلْأَنفَالُ لِلَّهِ وَٱلرَّسُولِ ۖ فَٱتَّقُوا۟ ٱللَّهَ وَأَصْلِحُوا۟ ذَاتَ بَيْنِكُمْ﴾.\n\nفخصومةٌ في المال يُجاب عنها بأمرٍ في الصلات. ثم يُوصف المؤمنون — ﴿ٱلَّذِينَ إِذَا ذُكِرَ ٱللَّهُ وَجِلَتْ قُلُوبُهُمْ﴾ — كأنه يقال: هذا هو الذي تقيسون به.\n\nثم تُعاد الوقعةُ ويُوضع الفضلُ في غير موضعه المتوقَّع: ﴿فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ ٱللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ ٱللَّهَ رَمَىٰ﴾." },
      { from: 20, to: 40,
        h: "Do not be like people who heard and did nothing",
        hAr: "لا تكونوا كمن سمع ولم يفعل",
        en: "\"Do not be like those who say we have heard, while they do not hear.\" And then the verse that gives the surah its weight: respond to Allah and the Messenger when He calls you TO WHAT GIVES YOU LIFE.\n\nThen a warning about a trial that will not strike only the wrongdoers among you — division has collateral.\n\nAnd a memory: remember when you were few and weak in the land, fearing that people would snatch you away, and He sheltered you. Said to men who have just won, so that they remember what they were eleven years earlier.",
        ar: "﴿وَلَا تَكُونُوا۟ كَٱلَّذِينَ قَالُوا۟ سَمِعْنَا وَهُمْ لَا يَسْمَعُونَ﴾. ثم الآيةُ التي تعطي السورة ثِقلها: ﴿ٱسْتَجِيبُوا۟ لِلَّهِ وَلِلرَّسُولِ إِذَا دَعَاكُمْ لِمَا يُحْيِيكُمْ﴾.\n\nثم تحذيرٌ من فتنةٍ ﴿لَّا تُصِيبَنَّ ٱلَّذِينَ ظَلَمُوا۟ مِنكُمْ خَآصَّةًۭ﴾ — فللفرقة ما يتعدّى أهلها.\n\nوتذكيرٌ: ﴿وَٱذْكُرُوٓا۟ إِذْ أَنتُمْ قَلِيلٌۭ مُّسْتَضْعَفُونَ فِى ٱلْأَرْضِ تَخَافُونَ أَن يَتَخَطَّفَكُمُ ٱلنَّاسُ فَـَٔاوَىٰكُمْ﴾. قيل لقومٍ انتصروا للتوّ، ليذكروا ما كانوا عليه قبل إحدى عشرة سنة." },
      { from: 41, to: 66,
        h: "The day of the criterion, and then: if they incline to peace, incline to it",
        hAr: "يومُ الفرقان، ثم: ﴿وَإِن جَنَحُوا۟ لِلسَّلْمِ فَٱجْنَحْ لَهَا﴾",
        en: "Badr is named \"the day of the criterion\" — the day the difference between truth and falsehood was made visible.\n\nThen the psychology of it: He showed them to you as few in your eyes and made you few in theirs, so that a matter already decided would be carried out. And the instruction for any confrontation: when you meet a group, stand firm and remember Allah much — and DO NOT DISPUTE, or you will lose heart and your strength will depart.\n\nAnd then, in a surah about a battle: if they incline to peace, incline to it and rely on Allah.",
        ar: "سُمّيت بدرٌ ﴿يَوْمَ ٱلْفُرْقَانِ﴾ — اليومَ الذي ظهر فيه الفرقُ بين الحقّ والباطل.\n\nثم ما جرى في النفوس: ﴿وَإِذْ يُرِيكُمُوهُمْ إِذِ ٱلْتَقَيْتُمْ فِىٓ أَعْيُنِكُمْ قَلِيلًۭا وَيُقَلِّلُكُمْ فِىٓ أَعْيُنِهِمْ لِيَقْضِىَ ٱللَّهُ أَمْرًۭا كَانَ مَفْعُولًۭا﴾. ووصيّةُ كلِّ لقاء: ﴿إِذَا لَقِيتُمْ فِئَةًۭ فَٱثْبُتُوا۟ وَٱذْكُرُوا۟ ٱللَّهَ كَثِيرًۭا﴾ — ﴿وَلَا تَنَٰزَعُوا۟ فَتَفْشَلُوا۟ وَتَذْهَبَ رِيحُكُمْ﴾.\n\nثم، في سورةِ معركة: ﴿وَإِن جَنَحُوا۟ لِلسَّلْمِ فَٱجْنَحْ لَهَا وَتَوَكَّلْ عَلَى ٱللَّهِ﴾." },
      { from: 67, to: 75,
        h: "The prisoners, and a correction that was not softened",
        hAr: "الأسرى، وعتابٌ لم يُلطَّف",
        en: "They took captives for ransom, and the verses came down against it in language nobody would have chosen to record about themselves: it is not for a prophet to have captives until he has thoroughly subdued the land — you want the goods of this world, and Allah wants the Hereafter.\n\nThat this is preserved in the Book is itself an argument. A man inventing a scripture does not put his own rebuke into it.\n\nThe surah ends on loyalty: those who believed and emigrated and fought, and those who gave them shelter and aid — they are allies of one another.",
        ar: "أخذوا الأسرى للفداء، فنزلت الآياتُ في ذلك بلفظٍ ما كان أحدٌ ليختار أن يُسجَّل عنه: ﴿مَا كَانَ لِنَبِىٍّ أَن يَكُونَ لَهُۥٓ أَسْرَىٰ حَتَّىٰ يُثْخِنَ فِى ٱلْأَرْضِ ۚ تُرِيدُونَ عَرَضَ ٱلدُّنْيَا وَٱللَّهُ يُرِيدُ ٱلْـَٔاخِرَةَ﴾.\n\nوبقاءُ هذا في الكتاب حجّةٌ في نفسه؛ فمن يفتري كتابًا لا يُدخل فيه عتاب نفسه.\n\nوتُختم السورةُ بالولاء: ﴿إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَهَاجَرُوا۟ وَجَٰهَدُوا۟ … وَٱلَّذِينَ ءَاوَوا۟ وَّنَصَرُوٓا۟ أُو۟لَٰٓئِكَ بَعْضُهُمْ أَوْلِيَآءُ بَعْضٍۢ﴾." }
    ],
    thread: "A community wins its first battle and the revelation that follows spends more time correcting it than congratulating it — over the spoils, over the captives, over disputing among themselves. The lesson the surah is teaching is that victory is the most dangerous moment for a group, because it is when they start crediting themselves.",
    threadAr: "تنتصر جماعةٌ في أوّل وقعةٍ لها، فيُنفق الوحيُ بعدها في تصويبها أكثر ممّا يُنفق في تهنئتها — في الغنائم، وفي الأسرى، وفي التنازع بينهم. والذي تعلّمه السورةُ أنّ النصر أخطرُ ما يمرّ بجماعة، لأنه الموضعُ الذي تبدأ فيه أن تنسب الفضل إلى نفسها."
  },

  9: {
    title: "The surah with no basmalah",
    titleAr: "السورةُ التي لا بسملة لها",
    oneLine: "The only surah in the Quran that does not open with \"In the name of Allah, the Most Merciful\" — and its subject is the ending of treaties with people who kept breaking them.",
    oneLineAr: "السورةُ الوحيدة في القرآن التي لا تُفتتح بالبسملة — وموضوعُها نبذُ عهودٍ إلى قومٍ لم يزالوا ينقضونها.",
    when: "Madinan, and among the very last revealed. Its long middle section belongs to Tabuk, the expedition made in extreme heat and hardship, which is what exposes the hypocrites so completely.",
    whenAr: "مدنيّة، ومن آخر ما نزل. ومقطعُها الأوسط الطويل في تبوك، الغزوةِ التي كانت في حرٍّ وعسرةٍ شديدين، وبها انكشف المنافقون على التمام.",
    movements: [
      { from: 1, to: 29,
        h: "A notice of termination — with four months' warning",
        hAr: "إعلانُ نبذٍ — بمهلة أربعة أشهر",
        en: "It opens as a formal declaration to those with whom a treaty existed and who had broken it. And even here the terms are stated: travel the land for four months. Those who kept their treaty in full have theirs honoured to its term.\n\nAnd then, in the middle of the harshest passage in the Quran on war: if any one of the idolaters seeks your protection, GRANT HIM PROTECTION so that he may hear the word of Allah, then deliver him to his place of safety.\n\nA verse of safe conduct, inside a declaration of war, for the express purpose of letting him listen.",
        ar: "تفتتح إعلانًا رسميًّا إلى من كان بينهم عهدٌ فنقضوه. وحتى ههنا تُذكر الشروط: ﴿فَسِيحُوا۟ فِى ٱلْأَرْضِ أَرْبَعَةَ أَشْهُرٍۢ﴾. ومن أتمّ عهده فعهدُه إلى مدّته.\n\nثم في وسط أشدّ ما في القرآن في القتال: ﴿وَإِنْ أَحَدٌۭ مِّنَ ٱلْمُشْرِكِينَ ٱسْتَجَارَكَ فَأَجِرْهُ حَتَّىٰ يَسْمَعَ كَلَٰمَ ٱللَّهِ ثُمَّ أَبْلِغْهُ مَأْمَنَهُۥ﴾.\n\nآيةُ أمانٍ داخل إعلان حرب، عِلّتُها المنصوصة أن يسمع." },
      { from: 30, to: 48,
        h: "Tabuk, and the cave — the hardest march and the oldest memory",
        hAr: "تبوك، والغار — أشقُّ مسيرٍ وأقدمُ ذكرى",
        en: "The call to go out is met with excuses, and the rebuke is direct: what is the matter with you that when you are told to go forth in the way of Allah, you cling heavily to the earth?\n\nAnd then the verse that answers every fear at once, by reaching back thirteen years: if you do not help him, Allah has already helped him — when the two of them were in the cave, and he said to his companion: DO NOT GRIEVE, ALLAH IS WITH US.\n\nHe was two men in a cave then. He is not short of help now.",
        ar: "يُقابَل النفيرُ بالأعذار، فيأتي العتابُ صريحًا: ﴿مَا لَكُمْ إِذَا قِيلَ لَكُمُ ٱنفِرُوا۟ فِى سَبِيلِ ٱللَّهِ ٱثَّاقَلْتُمْ إِلَى ٱلْأَرْضِ﴾.\n\nثم الآيةُ التي تجيب عن كلِّ خوفٍ دفعةً واحدة، بالرجوع ثلاث عشرة سنة: ﴿إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ ٱللَّهُ إِذْ أَخْرَجَهُ ٱلَّذِينَ كَفَرُوا۟ ثَانِىَ ٱثْنَيْنِ إِذْ هُمَا فِى ٱلْغَارِ إِذْ يَقُولُ لِصَٰحِبِهِۦ لَا تَحْزَنْ إِنَّ ٱللَّهَ مَعَنَا﴾.\n\nكان يومئذٍ رجلين في غار. وليس اليوم بمحتاجٍ إلى ناصر." },
      { from: 49, to: 99,
        h: "The hypocrites, named by what they did rather than who they were",
        hAr: "المنافقون، يُعرَّفون بأفعالهم لا بأسمائهم",
        en: "Fifty verses, and the method is worth noticing: they are not named. They are described by behaviour so exactly that everyone present would have known, and everyone reading afterwards can check themselves against it.\n\nThey swear by Allah to please you. They find fault with the distribution of charity — pleased if given, angry if not. They build a mosque to cause harm and division. They ask permission to stay behind while the wealthy among them could easily have gone.\n\nAnd the sharpest line: they were pleased to be with those who stay behind, and a seal was set on their hearts, SO THEY DO NOT UNDERSTAND.",
        ar: "خمسون آية، وطريقتُها تستحقّ الانتباه: لم يُسمَّوا، وإنما وُصفوا بالفعل وصفًا يعرفهم به كلُّ حاضر، ويقيس عليه نفسَه كلُّ قارئٍ بعدهم.\n\nيحلفون بالله ليُرضوكم. ويلمزون في الصدقات — إن أُعطوا رضوا وإن لم يُعطوا إذا هم يسخطون. ويتّخذون مسجدًا ضرارًا وتفريقًا. ويستأذنون في القعود وهم أولو الطَّول.\n\nوأشدّها: ﴿رَضُوا۟ بِأَن يَكُونُوا۟ مَعَ ٱلْخَوَالِفِ وَطُبِعَ عَلَىٰ قُلُوبِهِمْ فَهُمْ لَا يَفْقَهُونَ﴾." },
      { from: 100, to: 118,
        h: "And the three who told the truth and were left alone for fifty nights",
        hAr: "والثلاثةُ الذين صدقوا فخُلّفوا خمسين ليلة",
        en: "This is the passage that saves the surah from being only severe.\n\nThree men stayed behind from Tabuk with no excuse — and unlike the hypocrites, they did not invent one. They told the truth and were boycotted: nobody spoke to them, for fifty nights, until \"the earth became narrow for them despite its vastness, and their own selves became narrow for them.\"\n\nAnd then: He turned to them in mercy so that they might repent.\n\nThe men who lied were left alone. The men who told the truth were put through fifty nights and then forgiven by name. The surah is saying which of the two outcomes is the mercy.",
        ar: "هذا المقطعُ هو الذي ينجّي السورةَ من أن تكون شدّةً خالصة.\n\nثلاثةٌ تخلّفوا عن تبوك بلا عذر — وخلافًا للمنافقين لم يختلقوا عذرًا، بل صدقوا، فقُوطعوا: لا يكلّمهم أحد، خمسين ليلة، حتى ﴿ضَاقَتْ عَلَيْهِمُ ٱلْأَرْضُ بِمَا رَحُبَتْ وَضَاقَتْ عَلَيْهِمْ أَنفُسُهُمْ﴾.\n\nثم: ﴿ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوٓا۟﴾.\n\nفالذين كذبوا تُركوا، والذين صدقوا مُحّصوا خمسين ليلةً ثم تِيب عليهم بأسمائهم. والسورةُ تقول أيُّ العاقبتين هي الرحمة." },
      { from: 119, to: 129,
        h: "Be with the truthful — and the last two verses of the Quran to be revealed",
        hAr: "﴿وَكُونُوا۟ مَعَ ٱلصَّٰدِقِينَ﴾ — وآخرُ ما نزل",
        en: "Straight after the story of the three: O you who believe, fear Allah and BE WITH THE TRUTHFUL. Placed there because of what has just been shown about what truthfulness costs and what it earns.\n\nThen an instruction that reads oddly in a surah about war: not all of the believers should go out; a group from every party should stay to gain understanding in religion and warn their people when they return.\n\nAnd the last two verses — reported to be among the final revelation — describe the Prophet ﷺ: a messenger has come to you from among yourselves, to whom your suffering is grievous, concerned over you, and to the believers kind and merciful.\n\nThe surah with no basmalah ends on two of the names of mercy.",
        ar: "عقب قصّة الثلاثة مباشرةً: ﴿يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَكُونُوا۟ مَعَ ٱلصَّٰدِقِينَ﴾. وُضعت هناك لِما تبيّن للتوّ من ثمن الصدق وعائده.\n\nثم أمرٌ يبدو غريبًا في سورة قتال: ﴿وَمَا كَانَ ٱلْمُؤْمِنُونَ لِيَنفِرُوا۟ كَآفَّةًۭ ۚ فَلَوْلَا نَفَرَ مِن كُلِّ فِرْقَةٍۢ مِّنْهُمْ طَآئِفَةٌۭ لِّيَتَفَقَّهُوا۟ فِى ٱلدِّينِ وَلِيُنذِرُوا۟ قَوْمَهُمْ إِذَا رَجَعُوٓا۟ إِلَيْهِمْ﴾.\n\nوالآيتان الأخيرتان — ويُروى أنهما من آخر ما نزل — في وصفه ﷺ: ﴿لَقَدْ جَآءَكُمْ رَسُولٌۭ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِٱلْمُؤْمِنِينَ رَءُوفٌۭ رَّحِيمٌۭ﴾.\n\nفالسورةُ التي لا بسملة لها تُختم باسمين من أسماء الرحمة." }
    ],
    thread: "It is a surah about who is actually with you when it costs something. Treaties are ended with people who never meant them; hypocrites are exposed by one hard march; and three men who told an inconvenient truth are boycotted and then forgiven by name. \"Be with the truthful\" is the instruction the whole surah has been earning.",
    threadAr: "سورةٌ في: من معك حقًّا إذا كلّف الأمرُ شيئًا. فتُنبذ عهودٌ إلى من لم يُردها قطّ، ويُكشف المنافقون بمسيرٍ واحدٍ شاقّ، ويُقاطَع ثلاثةٌ صدقوا صدقًا ثقيلًا ثم يُتاب عليهم بأسمائهم. و﴿كُونُوا۟ مَعَ ٱلصَّٰدِقِينَ﴾ هي الوصيّةُ التي كانت السورةُ كلُّها تكسبها."
  },

  10: {
    title: "The town that believed in time",
    titleAr: "القريةُ التي آمنت قبل فوات الوقت",
    oneLine: "A surah about people who wait for the punishment before they will believe — and it ends by naming the one nation in history that did not.",
    oneLineAr: "سورةٌ في قومٍ لا يؤمنون حتى يروا العذاب — وتُختم بذكر الأمّة الوحيدة في التاريخ التي لم تفعل.",
    when: "Makkan. It belongs to the long period in Makkah when the message was being called magic and poetry, and the demand for a different Quran was being made openly.",
    whenAr: "مكّيّة. من الطور الطويل بمكّة حين كانت الدعوةُ تُسمّى سحرًا وشعرًا، ويُطالَب بقرآنٍ غيره جهارًا.",
    movements: [
      { from: 1, to: 20,
        h: "\"Bring a different Quran\" — and the answer",
        hAr: "﴿ٱئْتِ بِقُرْءَانٍ غَيْرِ هَٰذَآ﴾ — والجواب",
        en: "They ask for a different Quran, or for this one to be changed. The answer is not an argument about the text; it is about the messenger: say — it is not for me to change it of my own accord. I follow only what is revealed to me. I have lived a lifetime among you before it. Will you not use reason?\n\nForty years of a known character, offered as evidence. They had never caught him in a lie about anything smaller.",
        ar: "يطلبون قرآنًا غيره أو تبديله. فلا يكون الجوابُ حِجاجًا في النصّ، وإنما في الرسول: ﴿قُلْ مَا يَكُونُ لِىٓ أَنْ أُبَدِّلَهُۥ مِن تِلْقَآئِ نَفْسِىٓ ۖ إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰٓ إِلَىَّ … فَقَدْ لَبِثْتُ فِيكُمْ عُمُرًۭا مِّن قَبْلِهِۦٓ ۚ أَفَلَا تَعْقِلُونَ﴾.\n\nأربعون سنةً من خُلقٍ معروفٍ تُقدَّم بيّنةً. ولم يكونوا أخذوا عليه كذبةً فيما هو أصغر." },
      { from: 21, to: 33,
        h: "The storm at sea — the argument everyone can check",
        hAr: "العاصفةُ في البحر — الحجّةُ التي يعرفها كلُّ أحد",
        en: "This is the surah's sharpest observation about human beings, and it needs no scholarship to verify.\n\nWhen they are on a ship and a good wind comes, they are delighted. Then a violent wind comes and the waves come at them from every side and they think they are surrounded — THEY CALL UPON ALLAH, sincerely, promising: if You save us from this we will be among the grateful.\n\nThen He saves them, and immediately they are transgressing again.\n\nThe surah is not arguing that God exists. It is pointing out that they already know, and only forget when it is safe to.",
        ar: "هذه أدقُّ ما في السورة من ملاحظةٍ في الإنسان، ولا تحتاج إلى علمٍ ليُتحقّق منها.\n\nإذا كانوا في الفلك وجرت بهم ريحٌ طيّبةٌ فرحوا بها. فإذا جاءتها ريحٌ عاصفٌ وجاءهم الموجُ من كلِّ مكانٍ وظنّوا أنهم أُحيط بهم — ﴿دَعَوُا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ لَئِنْ أَنجَيْتَنَا مِنْ هَٰذِهِۦ لَنَكُونَنَّ مِنَ ٱلشَّٰكِرِينَ﴾.\n\nفلمّا أنجاهم إذا هم يبغون.\n\nفليست السورةُ تحاجّ في وجوده سبحانه، وإنما تبيّن أنهم يعلمون، وإنما ينسون حين يأمنون." },
      { from: 34, to: 70,
        h: "Who guides to the truth — and the invented halal and haram",
        hAr: "من يهدي إلى الحقّ — والحلالُ والحرامُ المخترَع",
        en: "A run of questions with no possible second answer: who provides for you from the sky and the earth? Who owns hearing and sight? Who brings the living from the dead? They will say: Allah. So say: will you not then fear Him?\n\nAnd then: is He who guides to the truth more worthy to be followed, or he who does not guide unless he is himself guided?\n\nThen the same charge Al-An'am made: look at what Allah has sent down to you of provision, and you have made some of it forbidden and some lawful. Say: did Allah permit you, or do you invent about Allah?",
        ar: "سلسلةُ أسئلةٍ لا جوابَ لها ثانٍ: ﴿قُلْ مَن يَرْزُقُكُم مِّنَ ٱلسَّمَآءِ وَٱلْأَرْضِ أَمَّن يَمْلِكُ ٱلسَّمْعَ وَٱلْأَبْصَٰرَ وَمَن يُخْرِجُ ٱلْحَىَّ مِنَ ٱلْمَيِّتِ … فَسَيَقُولُونَ ٱللَّهُ ۚ فَقُلْ أَفَلَا تَتَّقُونَ﴾.\n\nثم: ﴿أَفَمَن يَهْدِىٓ إِلَى ٱلْحَقِّ أَحَقُّ أَن يُتَّبَعَ أَمَّن لَّا يَهِدِّىٓ إِلَّآ أَن يُهْدَىٰ﴾.\n\nثم الدعوى التي جاءت في الأنعام: ﴿قُلْ أَرَءَيْتُم مَّآ أَنزَلَ ٱللَّهُ لَكُم مِّن رِّزْقٍۢ فَجَعَلْتُم مِّنْهُ حَرَامًۭا وَحَلَٰلًۭا قُلْ ءَآللَّهُ أَذِنَ لَكُمْ ۖ أَمْ عَلَى ٱللَّهِ تَفْتَرُونَ﴾." },
      { from: 71, to: 93,
        h: "Nuh, then Musa — and Fir'awn believing one sentence too late",
        hAr: "نوحٌ ثم موسى — وفرعونُ يؤمن بعد فوات جملة",
        en: "Nuh's confrontation is given in a few verses. Musa's is longer, and it ends at the water.\n\nFir'awn is drowning. And he says: I believe that there is no god except the One the Children of Israel believe in, and I am of the Muslims.\n\nThe answer: NOW? And you had disobeyed before, and were of the corrupters.\n\nHe said the right sentence. He said it while the water was closing. The surah puts it here to define exactly where the deadline is — and the next movement shows the one people who beat it.",
        ar: "تُذكر مواجهةُ نوحٍ في آياتٍ يسيرة، ومواجهةُ موسى أطول، وتنتهي عند الماء.\n\nيغرق فرعون، فيقول: ﴿ءَامَنتُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا ٱلَّذِىٓ ءَامَنَتْ بِهِۦ بَنُوٓا۟ إِسْرَٰٓءِيلَ وَأَنَا۠ مِنَ ٱلْمُسْلِمِينَ﴾.\n\nفيكون الجواب: ﴿ءَآلْـَٰٔنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنتَ مِنَ ٱلْمُفْسِدِينَ﴾.\n\nقال الجملةَ الصحيحة. وقالها والماءُ ينطبق. ووُضعت هنا ليُعرف أين الأجلُ بالضبط — ويُري المقطعُ الذي يليه القومَ الوحيدين الذين سبقوه." },
      { from: 94, to: 109,
        h: "And the one town in all of history whose faith arrived in time",
        hAr: "والقريةُ الوحيدة في التاريخ التي نفعها إيمانُها",
        en: "\"If only there had been a town that believed and its faith benefited it — EXCEPT THE PEOPLE OF YUNUS. When they believed, We removed from them the punishment of disgrace in the life of this world, and We gave them enjoyment for a time.\"\n\nOne exception, in the whole record. Every other nation in the Quran waited until the punishment was visible, and by then it was Fir'awn's sentence: now?\n\nYunus's people believed while there was still time to. That is the entire reason the surah carries his name — and the reason it is placed here, immediately after a drowning man saying the right words too late.",
        ar: "﴿فَلَوْلَا كَانَتْ قَرْيَةٌ ءَامَنَتْ فَنَفَعَهَآ إِيمَٰنُهَآ إِلَّا قَوْمَ يُونُسَ لَمَّآ ءَامَنُوا۟ كَشَفْنَا عَنْهُمْ عَذَابَ ٱلْخِزْىِ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَمَتَّعْنَٰهُمْ إِلَىٰ حِينٍۢ﴾.\n\nاستثناءٌ واحد في السجلّ كلِّه. فكلُّ أمّةٍ سواهم في القرآن انتظرت حتى رأت العذاب، فكان جوابُها جوابَ فرعون: ﴿ءَآلْـَٰٔنَ﴾؟\n\nوقومُ يونس آمنوا والوقتُ باقٍ. ولهذا حملت السورةُ اسمَه — ولهذا وُضع هذا الموضعُ عقب غريقٍ قال الكلمة الصحيحة بعد فوات الأوان." }
    ],
    thread: "The surah is about the deadline. People know the truth in a storm and forget it on shore; Fir'awn says the right words with the water at his mouth and is refused; and one town, alone in the whole record, believed while believing still counted. The surah is named after them, which tells you what it wants from the reader.",
    threadAr: "السورةُ في الأجل. يعرف الناسُ الحقّ في العاصفة وينسونه على الشاطئ؛ ويقول فرعونُ الكلمةَ الصحيحة والماءُ في فيه فتُردّ عليه؛ وقريةٌ واحدة في السجلّ كلِّه آمنت والإيمانُ بعدُ ينفع. وسُمّيت السورةُ بهم، وفي ذلك بيانُ ما تريده من القارئ."
  }
};
