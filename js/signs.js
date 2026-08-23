/* ============================================================
   THE SIGNS OF THE HOUR — أشراط الساعة
   ------------------------------------------------------------
   The end of the world, which the Judgement page did not cover.
   Its fifteen stages begin at "when you die" — so the site had
   the whole of what happens AFTER a person dies, and nothing at
   all on how the world itself ends. This fills that.

   WHY THIS TOPIC NEEDS THE STRICTEST SOURCING ON THE SITE.
   No subject in Islam attracts more weak, fabricated and
   invented material than this one. Dates get predicted, the
   Dajjal gets a biography, current events get matched to
   narrations, and every generation is told it is the last one.
   Almost none of it is established.

   So the rule here is tighter than elsewhere:
     - the list of ten is the Prophet's ﷺ own list, in Sahih
       Muslim, and nothing is added to it
     - each sign carries the Quran verse and/or the hadith with
       its number where the number is verified
     - Muslim is cited BY BOOK NAME, never by number: the free
       hadith collection this site uses numbers Muslim
       sequentially and that numbering does not match the
       standard one, so a number would be a guess
     - `notEstablished` on an entry says plainly what is famous
       about it and NOT authentic

   Above all: nobody knows when. That is in the Quran twice, and
   it is the first thing on the page, before any sign is listed —
   because the single most common misuse of this subject is
   someone claiming to know the date.
   ============================================================ */

const SIGNS_INTRO = {
  title: "Before the Day begins — how the world ends",
  titleAr: "قبل أن يبدأ اليوم — كيف ينتهي العالم",

  lead: "Everything on the rest of this page happens after you die. This section is about what happens before any of it — to the world itself.",
  leadAr: "كلُّ ما في بقيّة هذه الصفحة يقع بعد موتك. وهذا القسم فيما يقع قبل ذلك كلّه: ما يجري للعالم نفسه.",

  /* Deliberately first. The commonest abuse of this subject is a
     date, and the Quran closes that door in two separate places. */
  nobodyKnows: {
    title: "Nobody knows when — and anyone who tells you a date is wrong",
    titleAr: "لا أحد يعلم متى — ومن حدّد لك موعدًا فقد أخطأ",
    en: "Start here, because this is where most of what people say about the end of the world goes wrong.\n\nThe Quran was asked this question directly and answered it directly: they ask you about the Hour, when will it arrive — say, its knowledge is only with my Lord. And in Surah Luqman it is placed in a list of five things whose knowledge belongs to Allah alone.\n\nSo when someone announces a year, matches a war to a narration, or tells you we are certainly the last generation — they are contradicting an explicit verse. That is worth knowing before you read a single sign below, because it is the difference between learning what was actually said and being frightened by what was not.\n\nThe Prophet ﷺ himself was asked when it would be. He did not answer with a date. He answered with a question back — what have you prepared for it.",
    ar: "ابدأ من هنا، فمن هذا الباب يدخل أكثرُ الخطأ فيما يُقال عن نهاية العالم.\n\nسُئل القرآنُ هذا السؤال صريحًا فأجاب صريحًا: ﴿يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى﴾. وجُعلت في سورة لقمان في جملة خمسٍ لا يعلمها إلا الله.\n\nفمن أعلن سنةً، أو نزّل حربًا على حديث، أو أخبرك أنّا آخر جيلٍ يقينًا، فقد عارض آيةً محكمة. ويحسن علم هذا قبل قراءة علامةٍ واحدةٍ ممّا يأتي، فإنه الفرق بين أن تتعلّم ما قيل وأن تُروَّع بما لم يُقل.\n\nوقد سُئل النبيُّ ﷺ عن الساعة متى هي، فلم يُجب بموعد، وإنما ردّ السؤال: ماذا أعددتَ لها؟",
    verses: [
      {
        ar: "يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى ۖ لَا يُجَلِّيهَا لِوَقْتِهَآ إِلَّا هُوَ ۚ ثَقُلَتْ فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا بَغْتَةًۭ",
        en: "“They ask you about the Hour: when is its arrival? Say: its knowledge is only with my Lord. None will reveal its time except Him. It lies heavy upon the heavens and the earth. It will not come upon you except suddenly.”",
        ref: "Surah Al-A'raf (7:187)"
      },
      {
        ar: "إِنَّ ٱللَّهَ عِندَهُۥ عِلْمُ ٱلسَّاعَةِ",
        en: "“Indeed, Allah — with Him is knowledge of the Hour.”",
        ref: "Surah Luqman (31:34)"
      }
    ],
    strength: "quran"
  },

  hadith: {
    ar: "إِنَّهَا لَنْ تَقُومَ حَتَّى تَرَوْنَ قَبْلَهَا عَشْرَ آيَاتٍ. فَذَكَرَ الدُّخَانَ وَالدَّجَّالَ وَالدَّابَّةَ وَطُلُوعَ الشَّمْسِ مِنْ مَغْرِبِهَا وَنُزُولَ عِيسَى ابْنِ مَرْيَمَ ﷺ وَيَأْجُوجَ وَمَأْجُوجَ وَثَلَاثَةَ خُسُوفٍ: خَسْفٌ بِالْمَشْرِقِ وَخَسْفٌ بِالْمَغْرِبِ وَخَسْفٌ بِجَزِيرَةِ الْعَرَبِ، وَآخِرُ ذَلِكَ نَارٌ تَخْرُجُ مِنَ الْيَمَنِ تَطْرُدُ النَّاسَ إِلَى مَحْشَرِهِمْ",
    en: "He came upon them while they were talking and asked what they were discussing. They said: the Hour. He said: “It will not come until you see ten signs before it” — then he mentioned the Smoke, the Dajjal, the Beast, the rising of the sun from its west, the descent of Isa son of Maryam, Gog and Magog, and three landslides: one in the east, one in the west and one in the Arabian peninsula — “and the last of that is a fire that comes out of Yemen and drives the people to their place of gathering.”",
    ref: "Sahih Muslim, Book of Tribulations and the Signs of the Hour — Hudhayfah ibn Usayd al-Ghifari",
    strength: "hadith",
    plain: "In plain words: the companions were sitting talking about the Hour. He came in, asked what they were discussing, and gave them a list of ten things that come before it.\n\nThis one hadith is where the phrase “the ten major signs” comes from. Everything in the cards below is an expansion of one item on this list — nothing has been added to it.\n\nAnd notice the last few words, because they are the only ordering statement in the whole hadith: “and THE LAST of that is a fire”. He named which one is last. He did not name which one is first.",
    plainAr: "بكلامٍ بسيط: كان الصحابة جلوسًا يتذاكرون الساعة، فاطّلع عليهم فسألهم فيمَ يتذاكرون، ثم عدّ لهم عشرًا تكون قبلها.\n\nومن هذا الحديث وحده جاءت عبارة «العلامات الكبرى العشر». وكلُّ ما في البطاقات الآتية شرحٌ لبندٍ من بنود هذه القائمة، ولم يُزَد عليها شيء.\n\nوانظر آخر كلماته، فهي الجملة الوحيدة في الحديث كلِّه التي تُرتّب: **﴿وَآخِرُ ذَلِكَ نَارٌ﴾**. فسمّى الآخِرة، ولم يُسمِّ الأولى."
  },

  /* The hadith names six things, then THREE landslides, then the fire.
     A reader who counts the clauses gets eight and wonders where the
     other two went, so the landslides are numbered separately here —
     that is how the list makes ten, and it is how the scholars counted
     it. */
  theTen: {
    title: "Counted out as ten — because the landslides are three of them",
    titleAr: "معدودةً عشرًا — فالخسوف ثلاثةٌ منها",
    lead: "Read the hadith again and count: six named things, then three landslides, then the fire. Three plus six plus one is ten. This is where people lose the count.",
    leadAr: "أعِد قراءة الحديث وعُدّ: ستّةٌ مسمّاة، ثم ثلاثةُ خسوف، ثم النار. ثلاثةٌ وستّةٌ وواحد: عشرة. وهنا يضيع العدُّ على الناس.",
    items: [
      { en: "The Smoke", ar: "١ · الدُّخَان" },
      { en: "The Dajjal", ar: "٢ · الدَّجَّال" },
      { en: "The Beast of the earth", ar: "٣ · دَابَّة الأرض" },
      { en: "The rising of the sun from its west", ar: "٤ · طلوع الشمس من مغربها" },
      { en: "The descent of Isa son of Maryam", ar: "٥ · نزول عيسى ابن مريم عليه السلام" },
      { en: "Gog and Magog — Yajuj and Majuj", ar: "٦ · يأجوج ومأجوج" },
      { en: "A landslide in the east", ar: "٧ · خَسْفٌ بالمشرق" },
      { en: "A landslide in the west", ar: "٨ · خَسْفٌ بالمغرب" },
      { en: "A landslide in the Arabian peninsula", ar: "٩ · خَسْفٌ بجزيرة العرب" },
      { en: "The fire that drives the people to the gathering — named in the hadith as THE LAST of them", ar: "١٠ · النار التي تطرد الناس إلى محشرهم — ونُصّ في الحديث على أنها آخرها", mark: true }
    ],
    plain: "In plain words: people often say “the ten signs” and then can only name seven or eight. That is because three of the ten are the same kind of event in three different places — the ground swallowing people in the east, in the west, and in Arabia.\n\nCount them as three, and the list comes to ten exactly.",
    plainAr: "بكلامٍ بسيط: كثيرًا ما يقول الناس «العلامات العشر» ثم لا يُحسنون عدّ أكثر من سبعٍ أو ثمان. وسببُ ذلك أنّ ثلاثًا من العشر حادثةٌ من جنسٍ واحدٍ في ثلاثة مواضع: خسفٌ بالمشرق، وخسفٌ بالمغرب، وخسفٌ بجزيرة العرب.\n\nفعُدَّها ثلاثًا يستقم لك العدد عشرًا تمامًا."
  },

  /* WHICH COMES FIRST AND WHICH COMES LAST.
     Built to separate three different grades of claim, because the
     popular treatments of this subject present one confident sequence
     with nothing marked. What a text NAILS DOWN, what a chain of events
     inside one narration establishes, and what is a scholar's
     reconciliation, are three different things. */
  orderDetail: {
    title: "So which comes first, and which comes last?",
    titleAr: "فأيّها أوّل، وأيّها آخر؟",
    lead: "This is the question everyone asks, and most answers give a confident running order with no evidence attached. Here is what is actually settled, what is likely, and what nobody can tell you.",
    leadAr: "هذا هو السؤال الذي يسأله كلُّ أحد، وأكثر الأجوبة يسوق ترتيبًا واثقًا بلا دليل. وهذا بيانُ ما ثبت، وما تُرجّحه القرائن، وما لا يستطيع أحدٌ أن يُخبرك به.",
    blocks: [
      {
        h: "THE LAST is settled by the text itself",
        hAr: "الآخِرةُ منصوصةٌ في الحديث نفسه",
        en: "There is no dispute about the end of the list, because the hadith says it outright: “and the last of that is a fire that comes out of Yemen and drives the people to their place of gathering.”\n\nSo whatever else is uncertain, the closing event is named. After the fire there is nothing further to wait for — the next thing is the Hour itself.",
        ar: "لا نزاع في آخر القائمة، لأنّ الحديث نصَّ عليه: **وَآخِرُ ذَلِكَ نَارٌ تَخْرُجُ مِنَ الْيَمَنِ تَطْرُدُ النَّاسَ إِلَى مَحْشَرِهِمْ**.\n\nفمهما يكن ما بقي مجهولًا، فالخاتمةُ مسمّاة. وليس بعد النار شيءٌ يُنتظر، وإنما تليها الساعة.",
        quote: "وَآخِرُ ذَلِكَ نَارٌ تَخْرُجُ مِنَ الْيَمَنِ تَطْرُدُ النَّاسَ إِلَى مَحْشَرِهِمْ",
        ref: "Sahih Muslim, Book of Tribulations — Hudhayfah ibn Usayd",
        strength: "hadith"
      },
      {
        h: "“THE FIRST” is named too — but read carefully WHICH first it means",
        hAr: "و«الأُولى» مسمّاةٌ أيضًا — ولكن تأمّل أيَّ أوّلٍ يُقصد",
        en: "This is the block that misleads people, so read it slowly.\n\nAbdullah ibn Amr said he memorised a hadith from the Messenger of Allah ﷺ and never forgot it: “the first of the signs to appear is the rising of the sun from its west, and the coming out of the Beast upon the people in the forenoon — and whichever of the two comes before the other, the second follows it closely.”\n\nTaken on its own, that sentence sounds as though the sun rising from the west is the first of all ten — which would put the Dajjal, Isa and Gog and Magog AFTER it. That reading is wrong, and the next two blocks show why. Isa عليه السلام descends while repentance is still being accepted, and the sun rising from the west is the moment repentance stops. They cannot be in that order.\n\nWhat the hadith establishes is narrower and still important: the sun and the Beast are the opening pair of the FINAL phase, they arrive almost together, and he did not say which of the two leads — he said explicitly that it does not matter, because the other is right behind it.",
        ar: "هذه هي البطاقة التي يقع فيها اللبس، فاقرأها على مهل.\n\nقال عبد الله بن عمرو: حفظتُ من رسول الله ﷺ حديثًا لم أنسه بعدُ: **إِنَّ أَوَّلَ الْآيَاتِ خُرُوجًا طُلُوعُ الشَّمْسِ مِنْ مَغْرِبِهَا، وَخُرُوجُ الدَّابَّةِ عَلَى النَّاسِ ضُحًى، وَأَيُّهُمَا مَا كَانَتْ قَبْلَ صَاحِبَتِهَا فَالْأُخْرَى عَلَى إِثْرِهَا قَرِيبًا**.\n\nوظاهرُ الجملة وحدها أنّ طلوع الشمس من مغربها أوّلُ العشر جميعًا، وهذا يقتضي أن يكون الدجّالُ ونزولُ عيسى ويأجوجُ ومأجوجُ **بعده**. وهذه القراءةُ خطأ، وبيانُه في البطاقتين التاليتين: فعيسى عليه السلام ينزل والتوبةُ لا تزال مقبولة، وطلوعُ الشمس من مغربها هو الحدُّ الذي تنقطع عنده التوبة. فلا يستقيم أن يكونا على هذا الترتيب.\n\nوالذي يُثبته الحديث أضيقُ من ذلك وهو مهمّ: أنّ الشمس والدابّة هما مفتتَحُ **الطور الأخير**، وأنهما متقاربان، وأنه لم يُعيّن أيَّهما يسبق، بل صرّح بأنّ ذلك لا يُهمّ لأنّ الأخرى على إثرها قريبًا.",
        quote: "إِنَّ أَوَّلَ الْآيَاتِ خُرُوجًا طُلُوعُ الشَّمْسِ مِنْ مَغْرِبِهَا وَخُرُوجُ الدَّابَّةِ عَلَى النَّاسِ ضُحًى",
        ref: "Sahih Muslim, Book of Tribulations — Abdullah ibn Amr ibn al-As",
        strength: "hadith"
      },
      {
        /* Added because a reader of this page raised exactly this objection:
           repentance is still open when Isa descends, so he cannot come after
           the sun has risen from the west. He is right, and the point is a
           proof rather than only a reconciliation — so it is given its own
           block instead of being buried in the scholars' note below. */
        h: "How we KNOW Isa descends before the sun rises — the door is still open in his time",
        hAr: "وكيف نعلم أنّ عيسى ينزل قبل طلوع الشمس — فالباب في زمانه مفتوح",
        en: "This settles the sequence by an argument anyone can follow, and it does not depend on any scholar's opinion.\n\nPut two established texts side by side. First: once the sun rises from its west, faith is no longer accepted from a soul that did not already have it — that is Sahih Muslim, and it is quoted further down this section. Second: when Isa son of Maryam descends, people believe. The Quran says of the People of the Scripture that there is none of them but will surely believe in him before his death, and he rules by this religion, breaks the cross and abolishes the jizyah because there is nobody left to take it from.\n\nSo in Isa's time belief is still being accepted and acted on. After the sun rises from the west it is not. Therefore the descent of Isa must come BEFORE the sun rises from the west — and with it the Dajjal, whom he kills, and Gog and Magog, who are released while he is still on the earth.\n\nThat is not a preference between two opinions. It is two texts that cannot both be true in the other order.",
        ar: "هذا يحسم الترتيب بحجّةٍ يفهمها كلُّ أحد، ولا تتوقّف على قول عالم.\n\nضَعْ نصّين ثابتين أحدهما إلى جانب الآخر. الأوّل: أنّ الشمس إذا طلعت من مغربها لم ينفع نفسًا إيمانُها لم تكن آمنت من قبل — وهو في صحيح مسلم، ومنقولٌ في آخر هذا القسم. والثاني: أنّ عيسى ابن مريم عليه السلام إذا نزل **آمن الناس**؛ قال الله في أهل الكتاب: ﴿وَإِن مِّنْ أَهْلِ ٱلْكِتَٰبِ إِلَّا لَيُؤْمِنَنَّ بِهِۦ قَبْلَ مَوْتِهِۦ﴾، وهو يحكم بهذا الدين ويكسر الصليب ويضع الجزية إذ لا يبقى من تُؤخذ منه.\n\nفالإيمانُ في زمن عيسى مقبولٌ معمولٌ به، وبعد طلوع الشمس من مغربها ليس كذلك. فلزم أن يكون نزولُ عيسى **قبل** طلوع الشمس من مغربها، ومعه الدجّالُ الذي يقتله، ويأجوجُ ومأجوجُ الذين يُفتح عنهم وهو في الأرض.\n\nوليس هذا ترجيحًا بين قولين، وإنما هما نصّان لا يمكن أن يصحّا معًا على الترتيب الآخر.",
        quote: "وَإِن مِّنْ أَهْلِ ٱلْكِتَٰبِ إِلَّا لَيُؤْمِنَنَّ بِهِۦ قَبْلَ مَوْتِهِۦ",
        ref: "Surah An-Nisa (4:159) · Isa as a sign of the Hour: Surah Az-Zukhruf (43:61) · The closing of repentance: Sahih Muslim, Book of Faith — Abu Hurairah · His rule: Sahih al-Bukhari 2222 and Sahih Muslim",
        strength: "quran"
      },
      {
        h: "The scholars' reconciliation — and it is theirs, not revelation",
        hAr: "وجهُ الجمع عند العلماء — وهو قولهم لا وحي",
        en: "The block above proves the ORDER. This one explains why the hadith called the sun “the first” at all, when three enormous events come before it.\n\nIbn Hajar's reconciliation in Fath al-Bari is the one most later scholars followed, and it is this: the signs are of two kinds. There are the great events that still happen within the ordinary running of the world — the Dajjal appears, Isa descends, Gog and Magog are released. And there are the signs that break the natural order itself — the sun reversing, the earth producing a speaking creature. Abdullah ibn Amr's hadith is naming the first of the SECOND kind.\n\nSo the ordinary-world signs come earlier, and the sun and the Beast open the final phase. This page marks that as a scholar's reading, because that is what it is. It resolves the texts well, and it is not itself a text.",
        ar: "البطاقةُ التي قبل هذه أثبتت **الترتيب**. وهذه تُبيّن لِمَ سُمّي طلوعُ الشمس «أوّل الآيات» أصلًا، وقبله ثلاثُ حوادث عظام.\n\nووجهُ الجمع الذي ذكره ابن حجر في «فتح الباري» هو الذي جرى عليه أكثر المتأخّرين: أنّ الآيات صنفان. صنفٌ عظيمٌ يقع مع بقاء نظام الدنيا على ما هو عليه: خروجُ الدجّال، ونزولُ عيسى، وخروجُ يأجوج ومأجوج. وصنفٌ يخرق نظام الكون نفسه: أن تعود الشمس من مغربها، وأن تُخرج الأرض دابّةً تكلّم الناس. وحديثُ عبد الله بن عمرو إنما يُسمّي أوّل **الصنف الثاني**.\n\nفآياتُ الدنيا المعتادة قبل، والشمسُ والدابّة تفتتحان الطور الأخير. وقد وُسم هذا في هذه الصفحة بأنه قولُ عالم، لأنه كذلك: يجمع بين النصوص جمعًا حسنًا، وليس هو نصًّا.",
        ref: "Ibn Hajar al-Asqalani, Fath al-Bari — a scholar's reading, not revelation",
        strength: "tafsir"
      },
      {
        h: "The chain in the middle IS established — Dajjal, then Isa, then Gog and Magog",
        hAr: "والسلسلةُ الوسطى ثابتة: الدجّال، ثم عيسى، ثم يأجوج ومأجوج",
        en: "Three of the ten are not loose items that could fall anywhere. They are one connected sequence, and they are narrated that way inside a single long hadith in Sahih Muslim — the hadith of an-Nawwas ibn Sam'an.\n\nThe Dajjal appears. Isa son of Maryam descends and it is he who kills him. And while Isa is still on the earth, Gog and Magog are released, and it is his supplication that ends them.\n\nSo you can say with confidence: the Dajjal comes before the descent of Isa, and the descent of Isa comes before Gog and Magog. That is not a guess about ordering — it is the order the events are narrated in, because each one causes the next.",
        ar: "ثلاثٌ من العشر ليست بنودًا مفكّكةً يجوز وقوعها حيث اتّفق، وإنما هي سلسلةٌ واحدةٌ متّصلة، وقد سِيقت كذلك في حديثٍ واحدٍ طويلٍ في صحيح مسلم: حديثِ النوّاس بن سمعان.\n\nيخرج الدجّال. فينزل عيسى ابن مريم عليه السلام وهو الذي يقتله. وبينما عيسى في الأرض يُفتح عن يأجوج ومأجوج، وبدعائه يُهلكهم الله.\n\nفيصحّ أن يُقال بثقة: الدجّالُ قبل نزول عيسى، ونزولُ عيسى قبل يأجوج ومأجوج. وليس هذا حدسًا في الترتيب، وإنما هو الترتيب الذي سِيقت به الحوادث، لأنّ كلَّ واحدةٍ سببٌ لما بعدها.",
        ref: "Sahih Muslim, Book of Tribulations — an-Nawwas ibn Sam'an",
        strength: "hadith"
      },
      {
        h: "And here is the proof the list itself is not an order",
        hAr: "وهذا هو الدليل على أنّ السرد نفسه ليس ترتيبًا",
        en: "This is worth seeing, because it settles the question from the text rather than from an opinion.\n\nThe same hadith, from the same companion — Hudhayfah ibn Usayd — is narrated twice in Sahih Muslim, one narration after the other. And the two list the ten in DIFFERENT orders. One begins with the Smoke, the Dajjal and the Beast. The other begins with the three landslides and puts the Smoke fourth.\n\nThe two narrations also differ on the tenth item: one narrator gave it as the descent of Isa, and another as a wind that casts the people into the sea.\n\nIf the listing were a timetable, the same companion could not have narrated it in two sequences. It is a list of what will happen, not a schedule of when — which is exactly why nobody should be given a confident running order for all ten.",
        ar: "وهذا ممّا ينبغي أن يُرى، لأنه يحسم المسألة من النصّ لا من الرأي.\n\nفالحديثُ نفسه، عن الصحابيّ نفسه — حذيفة بن أسيد — مرويٌّ مرّتين في صحيح مسلم، إحداهما تلو الأخرى. والروايتان تسردان العشر بترتيبين **مختلفين**: إحداهما تبدأ بالدخان والدجّال والدابّة، والأخرى تبدأ بالخسوف الثلاثة وتجعل الدخان رابعًا.\n\nواختلفت الروايتان أيضًا في العاشرة: فجعلها أحد الرواة نزولَ عيسى، وجعلها الآخر ريحًا تُلقي الناس في البحر.\n\nفلو كان السردُ جدولَ مواعيد لما رواه الصحابيُّ الواحد على وجهين. فهي قائمةُ **ما سيقع** لا جدولُ **متى يقع** — ولهذا بعينه لا ينبغي أن يُعطى أحدٌ ترتيبًا واثقًا للعشر جميعًا.",
        ref: "Sahih Muslim, Book of Tribulations — the two narrations of Hudhayfah ibn Usayd, one after the other",
        strength: "hadith"
      },
      {
        h: "One more thing that is fixed: after the sun rises from the west, the door shuts",
        hAr: "وأمرٌ آخر ثابت: إذا طلعت الشمسُ من مغربها أُغلق الباب",
        en: "This is not about sequence but it belongs here, because it is the reason the order matters at all.\n\nHe ﷺ said: three things, when they appear, a soul's faith will not benefit it if it had not believed before, or earned good in its faith — the rising of the sun from its west, the Dajjal, and the Beast of the earth.\n\nSo these signs are not a countdown to be watched. They mark the point where the offer closes. Everything the rest of this page describes is aimed at what a person does BEFORE that, which is the only part still in anyone's hands.",
        ar: "وليس هذا في الترتيب، ولكنه موضعه، لأنه سببُ أهمّيّة الترتيب أصلًا.\n\nقال ﷺ: **ثَلَاثٌ إِذَا خَرَجْنَ لَا يَنْفَعُ نَفْسًا إِيمَانُهَا لَمْ تَكُنْ آمَنَتْ مِنْ قَبْلُ أَوْ كَسَبَتْ فِي إِيمَانِهَا خَيْرًا: طُلُوعُ الشَّمْسِ مِنْ مَغْرِبِهَا، وَالدَّجَّالُ، وَدَابَّةُ الْأَرْضِ**.\n\nفليست هذه الآياتُ عدًّا تنازليًّا يُرقَب، وإنما هي حدُّ انغلاق باب القبول. وكلُّ ما تصفه بقيّةُ هذه الصفحة موجَّهٌ إلى ما يصنعه المرء **قبل ذلك**، وهو وحده الذي ما زال بيد أحد.",
        quote: "ثَلَاثٌ إِذَا خَرَجْنَ لَا يَنْفَعُ نَفْسًا إِيمَانُهَا لَمْ تَكُنْ آمَنَتْ مِنْ قَبْلُ: طُلُوعُ الشَّمْسِ مِنْ مَغْرِبِهَا، وَالدَّجَّالُ، وَدَابَّةُ الْأَرْضِ",
        ref: "Sahih Muslim, Book of Faith — Abu Hurairah",
        strength: "hadith"
      }
    ],
    notEstablished: "Where the Smoke falls, and where the three landslides fall, is not established by any text. Neither is a full running order for all ten. Anyone who hands you a numbered timetable from one to ten — or matches the signs to current events and tells you which one we are on — has gone past the evidence. The two narrations of the same hadith listing them differently is the clearest proof that no such timetable was given.",
    notEstablishedAr: "أمّا موضعُ الدخان، وموضعُ الخسوف الثلاثة، فلم يثبت فيه نصّ. وكذلك الترتيبُ الكامل للعشر جميعًا. فمن ناولك جدولًا مرقّمًا من واحدٍ إلى عشرة، أو نزّل الآيات على حوادث الزمان وأخبرك أين نحن منها، فقد تجاوز الدليل. وأصرحُ ما يدلّ على أنه لم يُعطَ جدولٌ أنّ روايتَي الحديث الواحد سردتاها على وجهين.",
    plain: "In plain words, here is the whole answer — and read the middle part carefully, because this is where people get it backwards.\n\nWHAT WE KNOW, IN ORDER:\n\n1. The Dajjal comes.\n2. Isa عليه السلام descends and kills him.\n3. Gog and Magog are released while Isa is still on the earth, and his supplication ends them.\n4. Then, later, the sun rises from its west and the Beast comes out — these two together open the final phase, and it does not matter which of the two is first, because the other follows immediately.\n5. The fire that drives people to the gathering is THE LAST. The hadith says so outright.\n\nHOW WE KNOW ISA COMES BEFORE THE SUN RISES, and this is the part that settles it: when the sun rises from the west, repentance and faith are no longer accepted. But when Isa descends, people DO believe — the Quran says the People of the Scripture will all believe in him, and he rules by this religion. Belief is still working in his time. So he cannot possibly come after the door has shut. The two texts only fit one way round.\n\nWHAT WE DO NOT KNOW: where the Smoke goes, where the three landslides go, and the exact order of all ten together. The same companion narrated the list in two different orders, which is how you can tell it was never a timetable.\n\nAND WHY IT MATTERS AT ALL: once the sun rises from the west, it is too late for anyone who had not believed. This is not a subject to track. It is a deadline.",
    plainAr: "بكلامٍ بسيط، هذا هو الجواب كلُّه — وتأمّل الوسط، فهنا يقع الناس في العكس.\n\n**ما نعلمه مرتّبًا:**\n\n١. يخرج الدجّال.\n٢. ينزل عيسى عليه السلام فيقتله.\n٣. يُفتح عن يأجوج ومأجوج وعيسى في الأرض، فيُهلكهم الله بدعائه.\n٤. ثم بعد ذلك تطلع الشمس من مغربها وتخرج الدابّة، وهما يفتتحان الطور الأخير معًا، ولا يُهمّ أيُّهما أوّل لأنّ الأخرى على إثرها.\n٥. والنارُ التي تطرد الناس إلى محشرهم هي **الآخِرة**، نصَّ الحديث على ذلك.\n\n**وكيف نعلم أنّ عيسى قبل طلوع الشمس؟** وهذا هو الفاصل: إذا طلعت الشمس من مغربها لم تُقبل توبةٌ ولا إيمان. وأمّا حين ينزل عيسى **فالناس يؤمنون**؛ قال الله إنّ أهل الكتاب لا يبقى منهم أحدٌ إلا آمن به، وهو يحكم بهذا الدين. فالإيمانُ في زمانه عاملٌ مقبول. فلا يمكن أن يكون نزولُه بعد انغلاق الباب. والنصّان لا يجتمعان إلا على وجهٍ واحد.\n\n**وما لا نعلمه**: أين يقع الدخان، وأين تقع الخسوف الثلاثة، وترتيبُ العشر جميعًا. وقد روى الصحابيُّ الواحد القائمةَ على وجهين مختلفين، وبهذا تعرف أنها لم تكن جدولَ مواعيد قطّ.\n\n**ولماذا يهمّ هذا كلُّه؟** لأنّ الشمس إذا طلعت من مغربها فقد فات الأمرُ على من لم يكن آمن. فليس هذا بابًا يُرقَب، وإنما هو **أجَل**."
  },

  notice: "Everything below is what the Quran and the two Sahihs actually say. Where something famous is not established, the entry says so. Nothing here is a prediction, and no date is given, because no date was given.",
  noticeAr: "كلُّ ما يأتي ممّا نطق به القرآن والصحيحان. وحيث كان المشهور غير ثابتٍ نُصّ على ذلك. وليس فيه تنبّؤ، ولا تحديد وقت، لأنه لم يُحدَّد."
};

const MAJOR_SIGNS = [
  {
    id: "sg-dajjal",
    plain: "In plain words: a man will come claiming to be God, and he will be able to do things that look impossible. The Prophet ﷺ warned about him more than about anything else.\n\nThe simplest thing to hold on to: he is blind in one eye. The Prophet ﷺ said Allah is not one-eyed — meaning the man's own defect is the proof he is lying. Whatever he shows you, that stays true.",
    plainAr: "بكلامٍ بسيط: سيخرج رجلٌ يدّعي أنه ربّ، ويستطيع أن يفعل أشياء تبدو مستحيلة. وقد حذّر منه النبيّ ﷺ أكثر من تحذيره من أيّ شيءٍ آخر.\n\nوأبسط ما تُمسك به: أنه أعورُ العين. قال النبيّ ﷺ: إنّ الله ليس بأعور — أي أنّ عيبه هو نفسه الدليل على كذبه. ومهما أراك، يبقى هذا صحيحًا.",
    order: 1,
    name: "The Dajjal",
    nameAr: "المسيح الدجّال",
    lead: "The greatest trial ever put before human beings — and the Prophet ﷺ warned of him more than of anything else.",
    leadAr: "أعظم فتنةٍ عُرضت على بني آدم، وقد حذّر منه النبيُّ ﷺ أكثر من تحذيره من غيره.",
    points: [
      { en: "He is blind in the right eye, and his eye is like a bulging grape. The Prophet ﷺ said plainly: Allah is not one-eyed — meaning the defect itself is the proof against his claim.",
        ar: "أعورُ العين اليمنى، عينه كأنها عِنبةٌ طافية. وقال النبيُّ ﷺ صريحًا: إنّ الله ليس بأعور — فالعيبُ نفسه هو الحجّة على بطلان دعواه.",
        ref: "Sahih al-Bukhari 3439" },
      { en: "Between his eyes is written kafir — disbeliever — and the narrations say every believer reads it, lettered or not.",
        ar: "مكتوبٌ بين عينيه «كافر»، وفي الروايات أنّ كلّ مؤمنٍ يقرؤها، كاتبًا كان أو غير كاتب.",
        ref: "Sahih Muslim, Book of Fitan" },
      { en: "He is named in the list of ten in Sahih Muslim, and he is the sign the Prophet ﷺ taught his ummah to seek refuge from in every prayer.",
        ar: "وهو معدودٌ في العشر في صحيح مسلم، وهو الذي علّم النبيُّ ﷺ أمّته أن تستعيذ منه في كلّ صلاة.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "An enormous amount is said about him that is not in the two Sahihs — where exactly he is now, what year he appears, which modern figure or system he is. The site's five linked Dajjal stories keep to what is established. Matching him to a living person or a current government is not knowledge; it has been done in every century and has been wrong in every century.",
    notEstablishedAr: "ويُقال فيه كثيرٌ ليس في الصحيحين: أين هو الآن على التعيين، وفي أيّ سنةٍ يخرج، ومن يكون من المعاصرين أو الأنظمة. وقصص الدجّال الخمس المتسلسلة في هذا الموقع تلتزم الثابت. وتنزيلُه على شخصٍ حيٍّ أو دولةٍ قائمة ليس علمًا، وقد صُنع في كلّ قرنٍ فأخطأ أهلُه في كلّ قرن.",
    strength: "hadith"
  },
  {
    id: "sg-isa",
    order: 2,
    name: "The descent of Isa, son of Maryam",
    nameAr: "نزول عيسى ابن مريم",
    plain: "In plain words: Isa عليه السلام comes back. Not as a new prophet with a new law — he comes following this one, and the two Sahihs say he breaks the cross, kills the swine and puts an end to war.\n\nHe is the one who kills the Dajjal. And he prays behind the imam of the Muslims — which is the detail that settles what his return actually means.",
    plainAr: "بكلامٍ بسيط: ينزل عيسى عليه السلام. لا نبيًّا بشريعةٍ جديدة، وإنما متّبعًا لهذه الشريعة، وفي الصحيحين أنه يكسر الصليب ويقتل الخنزير ويضع الحرب.\n\nوهو الذي يقتل الدجّال. ويصلّي خلف إمام المسلمين — وهذه هي اللفتة التي تحسم معنى نزوله.",
    lead: "He descends as a just ruler — and he comes as a follower of this religion, not with a new one.",
    leadAr: "ينزل حَكَمًا عدلًا، ويأتي متّبعًا لهذا الدين لا بدينٍ جديد.",
    points: [
      { en: "“By Him in Whose Hand is my soul, the son of Maryam will soon descend among you as a just ruler.” He breaks the cross and abolishes the jizyah — that is, the situation that made it apply ends, because there is one community left.",
        ar: "«والذي نفسي بيده ليوشِكنّ أن ينزل فيكم ابنُ مريم حَكَمًا عدلًا». فيكسر الصليب ويضع الجزية — أي يرتفع الحال الذي شُرعت له، إذ لم تبقَ إلا مِلّةٌ واحدة.",
        ref: "Sahih al-Bukhari 2222" },
      { en: "He is one of the ten named in the hadith of Hudhayfah ibn Usayd.",
        ar: "وهو أحد العشر المعدودة في حديث حذيفة بن أسيد.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "That he descends is established. Detailed timelines of exactly how long he stays, what he does year by year, and precisely where events fall, go well beyond what the two Sahihs give.",
    notEstablishedAr: "أمّا نزوله فثابت. وأمّا التفاصيل في مدّة مكثه سنةً سنة، وما يصنع في كلّ عام، وتعيين مواضع الأحداث على الدقّة، فوراء ما في الصحيحين.",
    strength: "hadith"
  },
  {
    id: "sg-yajuj",
    order: 3,
    name: "Gog and Magog — Yajuj and Majuj",
    nameAr: "يأجوج ومأجوج",
    plain: "In plain words: an enormous number of people are released and spread across the earth, and no army can stand against them. The Quran says they come down from every height.\n\nThey are not defeated in battle. They are ended by something small — the supplication of Isa عليه السلام, after which they die. The pattern is deliberate: what no force could stop is removed without a fight.",
    plainAr: "بكلامٍ بسيط: يُفتح عن قومٍ لا قِبَل لأحدٍ بقتالهم، فينتشرون في الأرض، وفي القرآن ﴿وَهُم مِّن كُلِّ حَدَبٍۢ يَنسِلُونَ﴾.\n\nولا يُهزمون في معركة، وإنما يُنهيهم أمرٌ يسير: دعوةُ عيسى عليه السلام، فيموتون. والنسقُ مقصود: فالذي عجزت عنه القوّةُ رُفع بغير قتال.",
    lead: "Named in the Quran twice, and released when the barrier that held them is levelled.",
    leadAr: "سُمّيا في القرآن مرّتين، ويُطلقان حين يُجعل السدُّ الذي حبسهما دكّاء.",
    points: [
      { en: "“Until, when Gog and Magog are let loose, and they descend rapidly from every height.”",
        ar: "﴿حَتَّىٰٓ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ وَهُم مِّن كُلِّ حَدَبٍۢ يَنسِلُونَ﴾",
        ref: "Surah Al-Anbiya (21:96)" },
      { en: "Dhul-Qarnayn, having built the barrier, said: this is a mercy from my Lord — and when the promise of my Lord comes, He will level it. So the barrier's end is itself part of the appointed promise.",
        ar: "قال ذو القرنين لَمّا بنى السدّ: ﴿هَٰذَا رَحْمَةٌۭ مِّن رَّبِّى ۖ فَإِذَا جَآءَ وَعْدُ رَبِّى جَعَلَهُۥ دَكَّآءَ﴾. فزوالُ السدّ نفسه من الوعد المضروب.",
        ref: "Surah Al-Kahf (18:98)" }
    ],
    strength: "quran"
  },
  {
    id: "sg-sun",
    plain: "In plain words: one morning the sun comes up from the wrong side. Everyone sees it, and at that moment everybody believes — and it is too late for it to help anyone who did not believe before.\n\nWhy it matters to you today: until that happens, the door is open. Allah stretches out His hand at night for whoever sinned in the day, and in the day for whoever sinned at night. The point of this sign is not the sun; it is that the door has a closing time.",
    plainAr: "بكلامٍ بسيط: في صباحٍ من الصباحات تطلع الشمس من الجهة الخطأ. يراها الناس جميعًا، فيؤمن الجميع في تلك اللحظة — وقد فات الأوان، فلا ينفع إيمانُ من لم يكن آمن قبلها.\n\nولماذا يعنيك هذا اليوم: لأنّ الباب مفتوحٌ إلى أن يقع ذلك. يبسط الله يده بالليل ليتوب مسيء النهار، وبالنهار ليتوب مسيء الليل. فليست العبرة في الشمس، وإنما في أنّ للباب وقتَ إغلاق.",
    order: 4,
    name: "The sun rising from the west",
    nameAr: "طلوع الشمس من مغربها",
    lead: "The sign after which the door of repentance closes — and this is the one with the sharpest consequence for a living person.",
    leadAr: "العلامة التي يُغلق بعدها باب التوبة، وهي أشدّها أثرًا في حقّ الحيّ.",
    points: [
      { en: "“The Hour will not be established until the sun rises from the west. When the people see it, all who are on it will believe — and that is when no soul's faith will benefit it, if it had not believed before.”",
        ar: "«لا تقوم الساعة حتى تطلع الشمس من مغربها، فإذا طلعت ورآها الناس آمنوا أجمعون، وذلك حين لا ينفع نفسًا إيمانها لم تكن آمنت من قبل».",
        ref: "Sahih al-Bukhari 4635" },
      { en: "The Quran states the same rule: on the day some of the signs of your Lord arrive, no soul will benefit from its faith if it had not believed before.",
        ar: "وقرّر القرآن الحكم نفسه: ﴿يَوْمَ يَأْتِى بَعْضُ ءَايَٰتِ رَبِّكَ لَا يَنفَعُ نَفْسًا إِيمَٰنُهَا لَمْ تَكُنْ ءَامَنَتْ مِن قَبْلُ﴾.",
        ref: "Surah Al-An'am (6:158)" },
      { en: "Until then the door is open. Allah stretches out His Hand by night so the one who sinned by day may repent, and by day for the one who sinned by night — until the sun rises from the west.",
        ar: "وقبل ذلك البابُ مفتوح: يبسط اللهُ يده بالليل ليتوب مسيءُ النهار، وبالنهار ليتوب مسيءُ الليل، حتى تطلع الشمس من مغربها.",
        ref: "Sahih Muslim, Book of Repentance" }
    ],
    strength: "hadith"
  },
  {
    id: "sg-dabbah",
    order: 5,
    name: "The Beast of the earth",
    nameAr: "دابّة الأرض",
    plain: "In plain words: a creature is brought out of the earth and speaks to people. That much is stated in the Quran.\n\nWhat it looks like and where exactly it appears is not established. A great deal is said about it with no sound chain behind it, so this card gives what the verse gives and then stops — which is the honest place to stop.",
    plainAr: "بكلامٍ بسيط: تخرج دابّةٌ من الأرض تكلّم الناس. وهذا القدرُ منصوصٌ في القرآن.\n\nوأمّا صفتُها وموضعُ خروجها بعينه فغير ثابت. وقد قيل فيها كثيرٌ لا يصحّ إسنادُه، فاقتصرت البطاقةُ على ما في الآية ووقفت — وهذا هو الموقف المنصف.",
    lead: "A creature brought out of the earth that speaks to people. The Quran states it; the details are not given.",
    leadAr: "دابّةٌ تُخرَج من الأرض تُكلّم الناس. نصّ عليها القرآن، ولم تُفصَّل.",
    points: [
      { en: "“And when the word befalls them, We will bring forth for them a beast from the earth speaking to them, that the people were not certain of Our signs.”",
        ar: "﴿وَإِذَا وَقَعَ ٱلْقَوْلُ عَلَيْهِمْ أَخْرَجْنَا لَهُمْ دَآبَّةًۭ مِّنَ ٱلْأَرْضِ تُكَلِّمُهُمْ أَنَّ ٱلنَّاسَ كَانُوا۟ بِـَٔايَٰتِنَا لَا يُوقِنُونَ﴾",
        ref: "Surah An-Naml (27:82)" },
      { en: "It is one of the three the Prophet ﷺ named as the point after which faith no longer benefits one who had not believed: the sun from its setting place, the Dajjal, and the Beast.",
        ar: "وهي إحدى الثلاث التي عدّها النبيُّ ﷺ ممّا لا ينفع بعده إيمانُ من لم يكن آمن: طلوعُ الشمس من مغربها، والدجّال، ودابّة الأرض.",
        ref: "Sahih Muslim, Book of Faith" }
    ],
    notEstablished: "What it looks like, its size, where exactly it emerges, and what it says word for word — none of that is established in the Quran or the two Sahihs. A great deal has been written describing it. The honest position is that the Quran named it and left it undescribed.",
    notEstablishedAr: "أمّا هيئتها وقدرها وموضع خروجها على التعيين ونصُّ ما تقوله، فليس شيءٌ من ذلك ثابتًا في القرآن ولا في الصحيحين. وقد كُتب في وصفها كثير. والإنصاف أنّ القرآن سمّاها ولم يصفها.",
    strength: "quran"
  },
  {
    id: "sg-dukhan",
    order: 6,
    name: "The Smoke",
    nameAr: "الدخان",
    plain: "In plain words: a smoke covers the people, and the Quran calls it a painful punishment.\n\nThe scholars genuinely differed here: some held it already happened in the Prophet's ﷺ lifetime, in the famine that struck Quraysh, and others that it is still to come. Both positions are held by major scholars, so the card gives both rather than picking one and presenting it as settled.",
    plainAr: "بكلامٍ بسيط: يغشى الناسَ دخان، وسمّاه القرآن ﴿عَذَابٌ أَلِيمٌۭ﴾.\n\nوقد اختلف العلماء هنا اختلافًا حقيقيًّا: فمنهم من قال إنه وقع في زمنه ﷺ في سِنِي القحط التي أصابت قريشًا، ومنهم من قال إنه ممّا لم يأتِ بعد. والقولان لأئمّة، فذكرت البطاقةُ القولين ولم تُقدّم أحدهما على أنه المقطوع به.",
    lead: "A visible smoke covering the people, named in Surah Ad-Dukhan and listed among the ten.",
    leadAr: "دخانٌ مبينٌ يغشى الناس، سُمّي في سورة الدخان وعُدّ في العشر.",
    points: [
      { en: "“So watch for the Day when the sky will bring a visible smoke, covering the people. This is a painful punishment.”",
        ar: "﴿فَٱرْتَقِبْ يَوْمَ تَأْتِى ٱلسَّمَآءُ بِدُخَانٍۢ مُّبِينٍۢ • يَغْشَى ٱلنَّاسَ ۖ هَٰذَا عَذَابٌ أَلِيمٌۭ﴾",
        ref: "Surah Ad-Dukhan (44:10-11)" },
      { en: "It is the first named in the hadith of the ten.",
        ar: "وهو أوّل ما ذُكر في حديث العشر.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "The scholars differed on whether this verse refers to a smoke already past — a famine in the time of the Prophet ﷺ in which people saw a haze from hunger, which is the reading reported from Ibn Mas'ud — or to a smoke still to come, which is the reading of those who place it among the ten. Both are held by serious scholars, and this is stated rather than resolved here.",
    notEstablishedAr: "واختلف أهل العلم: أهذه الآية في دخانٍ قد مضى — وهو الجدب في زمن النبيّ ﷺ حتى كان الرجل يرى كهيئة الدخان من الجوع، وهو المرويّ عن ابن مسعود — أم في دخانٍ آتٍ، وهو قول من عدّه في العشر. والقولان لأئمّة، ويُذكر الخلاف هنا ولا يُقطع فيه.",
    strength: "quran"
  },
  {
    id: "sg-khusuf",
    order: 7,
    name: "The three landslides",
    nameAr: "الخسوفات الثلاثة",
    plain: "In plain words: the earth swallows people in three places — one in the east, one in the west, and one in the Arabian peninsula.\n\nThat is what the hadith says, and it says nothing more. Anyone who tells you which modern city each one is has gone past the text and is guessing.",
    plainAr: "بكلامٍ بسيط: يُخسف بالناس في ثلاثة مواضع: خسفٌ بالمشرق، وخسفٌ بالمغرب، وخسفٌ بجزيرة العرب.\n\nهذا نصُّ الحديث، ولم يزد عليه. ومن عيّن لك مدينةً بعينها لكلّ خسفٍ فقد تجاوز النصّ وإنما يظنّ.",
    lead: "One in the east, one in the west, and one in the Arabian peninsula.",
    leadAr: "خسفٌ بالمشرق، وخسفٌ بالمغرب، وخسفٌ بجزيرة العرب.",
    points: [
      { en: "Named in the hadith of the ten, in that order, with no further description given.",
        ar: "ذُكرت في حديث العشر على هذا الترتيب، ولم يُزد عليها وصف.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "Nothing beyond this is established — not when, not exactly where, and not which recorded earthquake in history was or was not one of them. Attaching them to particular modern events is guesswork.",
    notEstablishedAr: "ولا يثبت وراء هذا شيء: لا الزمان، ولا الموضع على التعيين، ولا أنّ زلزالًا بعينه في التاريخ منها أو ليس منها. وتنزيلُها على وقائع معاصرة ظنٌّ لا علم.",
    strength: "hadith"
  },
  {
    id: "sg-nar",
    order: 8,
    name: "The fire from Yemen — the last of them",
    nameAr: "نار اليمن — آخرها",
    plain: "In plain words: the last of the signs is a fire that comes out and drives the people in front of it to the place where they will be gathered.\n\nIt is named as the last one in the Prophet's ﷺ own list — so once it appears, there is nothing further left to wait for.",
    plainAr: "بكلامٍ بسيط: آخرُ الآيات نارٌ تخرج تسوق الناس أمامها إلى محشرهم.\n\nوقد جُعلت آخرَ ما عدّه ﷺ — فإذا ظهرت فليس بعدها شيءٌ يُنتظر.",
    lead: "The hadith names this one explicitly as the last: a fire that drives the people to their place of gathering.",
    leadAr: "نصّ الحديث على أنّ هذه آخرها: نارٌ تطرد الناس إلى محشرهم.",
    points: [
      { en: "“…at the end of which a fire would come out of Yemen and drive the people to their place of assembly.” It is the one sign in the list whose position is stated.",
        ar: "«…وآخر ذلك نارٌ تخرج من اليمن تطرد الناس إلى محشرهم». وهي العلامة الوحيدة في السرد التي نُصّ على موضعها.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    strength: "hadith"
  },
  {
    id: "sg-sur",
    order: 9,
    name: "The Trumpet — and here the rest of this page begins",
    nameAr: "الصُّور — ومن هنا يبدأ سائر هذه الصفحة",
    plain: "In plain words: the signs run out here and the Hour itself begins. Everything from this point on is what the rest of this page describes — the blast, the raising, the standing, and what follows.\n\nWhich is the reason the signs were placed above the fifteen stages rather than below them: this is the order it actually happens in.",
    plainAr: "بكلامٍ بسيط: تنتهي الأشراط ها هنا وتبدأ الساعة نفسها. وكلُّ ما بعد هذا الموضع هو الذي تصفه بقيّةُ هذه الصفحة: النفخُ والبعثُ والموقفُ وما يتبعه.\n\nولهذا وُضعت الأشراطُ فوق المراحل الخمس عشرة لا تحتها: فهذا هو ترتيبُ وقوعها.",
    lead: "The signs end and the Hour arrives. Everything after this is on the rest of this page.",
    leadAr: "تنتهي العلامات وتقوم الساعة. وكلُّ ما بعد هذا في بقيّة هذه الصفحة.",
    points: [
      { en: "“And the Trumpet will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills. Then it will be blown again, and at once they will be standing, looking on.” One blast ends everything; the second raises it.",
        ar: "﴿وَنُفِخَ فِى ٱلصُّورِ فَصَعِقَ مَن فِى ٱلسَّمَٰوَٰتِ وَمَن فِى ٱلْأَرْضِ إِلَّا مَن شَآءَ ٱللَّهُ ۖ ثُمَّ نُفِخَ فِيهِ أُخْرَىٰ فَإِذَا هُمْ قِيَامٌۭ يَنظُرُونَ﴾. نفخةٌ تُنهي كلّ شيء، وأخرى تُقيمه.",
        ref: "Surah Az-Zumar (39:68)" },
      { en: "“The day people will be like scattered moths, and the mountains like carded wool.”",
        ar: "﴿يَوْمَ يَكُونُ ٱلنَّاسُ كَٱلْفَرَاشِ ٱلْمَبْثُوثِ • وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ﴾",
        ref: "Surah Al-Qari'ah (101:4-5)" }
    ],
    strength: "quran"
  }
];

/* ------------------------------------------------------------
   THE MOMENT OF MEETING ALLAH — لحظة لقاء الله
   Rendered on guidance.html, because it is not information about
   the future so much as a question about this week. The Judgement
   page tells you what happens; this asks what you do now.
   ------------------------------------------------------------ */
const MEETING_ALLAH = {
  title: "The moment of meeting Allah",
  titleAr: "لحظة لقاء الله",
  lead: "Every account of the end arrives at one moment, and the Quran describes it in two directions — the faces that see, and the ones held back.",
  leadAr: "كلُّ خبرٍ عن النهاية ينتهي إلى لحظةٍ واحدة، وصفها القرآن من جهتين: وجوهٌ تنظر، ووجوهٌ تُحجَب.",

  sections: [
    {
      h: "The seeing — the highest thing given in Paradise",
      hAr: "النظر — أعلى ما يُعطاه أهل الجنّة",
      en: "“Faces, that Day, will be radiant, looking at their Lord.” Two verses, seven words in Arabic, and the scholars of the sunnah took them as they are: the believers will see their Lord.\n\nAnd Surah Yunus adds the word the scholars connected to it: for those who did good is the best, and MORE. Al-husna wa ziyadah — the best reward, and something extra beyond it. The extra was explained by the Prophet ﷺ as looking at the Face of Allah, in Sahih Muslim.\n\nWhich reframes the whole subject. Paradise is not the end of the account. The seeing is.",
      ar: "﴿وُجُوهٌۭ يَوْمَئِذٍۢ نَّاضِرَةٌ • إِلَىٰ رَبِّهَا نَاظِرَةٌۭ﴾. آيتان في سبع كلمات، أخذها أهل السنّة على ظاهرها: أنّ المؤمنين يرون ربّهم.\n\nوزادت سورة يونس اللفظ الذي وصله أهل العلم بها: ﴿لِّلَّذِينَ أَحْسَنُوا۟ ٱلْحُسْنَىٰ وَزِيَادَةٌۭ﴾ — الحسنى وشيءٌ فوقها. وفسّر النبيُّ ﷺ الزيادة بالنظر إلى وجه الله، في صحيح مسلم.\n\nوهذا يقلب النظر في الباب كلّه: فليست الجنّة خاتمة الحساب، وإنما النظر.",
      ref: "Surah Al-Qiyamah (75:22-23) · Surah Yunus (10:26) · Sahih Muslim, Book of Faith",
      strength: "quran"
    },
    {
      h: "And the other direction, stated just as plainly",
      hAr: "والجهة الأخرى، مذكورةٌ بمثل ذلك الوضوح",
      en: "“No! Indeed, from their Lord, that Day, they will be veiled.” Ash-Shafi'i took this verse as the proof of the first: that being veiled is named as a punishment shows the seeing is a reward — otherwise there would be nothing in being kept from it.\n\nThat is a scholar's inference from two verses, attributed to him by name, and it is worth knowing as his reasoning rather than as a verse in itself.",
      ar: "﴿كَلَّآ إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍۢ لَّمَحْجُوبُونَ﴾. واستدلّ الشافعيّ بهذه الآية على الأولى: أنّ الحجاب لَمّا جُعل عقوبةً دلّ على أنّ النظر ثواب، وإلا لم يكن في المنع منه شيء.\n\nوهذا استنباطُ عالمٍ من آيتين، منسوبٌ إليه باسمه، ويحسن أن يُعلم أنه استدلاله لا أنه نصُّ آية.",
      ref: "Surah Al-Mutaffifin (83:15)",
      strength: "tafsir"
    },
    {
      h: "The one request nobody is granted",
      hAr: "السؤال الوحيد الذي لا يُجاب إليه أحد",
      en: "“Until, when death comes to one of them, he says: My Lord, send me back — that I might do righteousness in what I left behind.” And the answer is one word: kalla. No.\n\nRead what is being asked for. Not wealth, not more years in general — to be sent back to do something right. It is the most reasonable request a person could make, and it is refused, and the refusal is the shortest word in the verse.\n\nThat is the practical weight of this whole subject. Everything above is a description of a day nobody can prepare for on the day itself. What can be done can only be done now — and “now” is the thing being described as “what I left behind”.",
      ar: "﴿حَتَّىٰٓ إِذَا جَآءَ أَحَدَهُمُ ٱلْمَوْتُ قَالَ رَبِّ ٱرْجِعُونِ • لَعَلِّىٓ أَعْمَلُ صَٰلِحًۭا فِيمَا تَرَكْتُ﴾. والجواب كلمةٌ واحدة: ﴿كَلَّآ﴾.\n\nوتأمّل المسؤول: ليس مالًا، ولا عمرًا مطلقًا، بل أن يُردَّ ليعمل صالحًا. وهو أوجهُ ما يسأله سائل، ورُدّ، والردُّ أقصرُ كلمةٍ في الآية.\n\nوهذا هو الأثر العمليّ للباب كلّه: فما تقدّم وصفُ يومٍ لا يستطيع أحدٌ أن يستعدّ له فيه. وإنما يُعمل الآن، و«الآن» هو الذي يُسمّى هناك ﴿فِيمَا تَرَكْتُ﴾.",
      ref: "Surah Al-Mu'minun (23:99-100)",
      strength: "quran"
    },
    {
      h: "So what is actually asked of you this week",
      hAr: "فما المطلوب منك في هذا الأسبوع",
      en: "The Prophet ﷺ was asked when the Hour would be. He did not give a date. He asked the man back: what have you prepared for it? The man said he had not prepared much — but that he loved Allah and His Messenger. And he was told: you are with the one you love.\n\nThat exchange is the whole subject reduced to something a person can act on tonight. Not a calendar. Not a prediction. A question about what you have made ready, and an answer that turns on attachment rather than on quantity.",
      ar: "سُئل النبيُّ ﷺ عن الساعة متى هي، فلم يُحدّد وقتًا، وإنما ردّ على السائل: «وماذا أعددتَ لها؟» فقال الرجل إنه لم يُعِدّ لها كثير عملٍ، غير أنه يحبّ الله ورسوله. فقيل له: «أنت مع من أحببت».\n\nوهذا الخبر يردّ الباب كلّه إلى ما يعمله المرء الليلة: لا تقويمًا، ولا تنبّؤًا، بل سؤالًا عمّا أعددتَ، وجوابًا مداره على التعلّق لا على الكثرة.",
      ref: "Sahih al-Bukhari 3688 — Anas ibn Malik",
      strength: "hadith"
    }
  ],

  notice: "This section explains what the Quran and the two Sahihs say. It is not a fatwa and it is not a prediction. No date is given here because none was given in the revelation.",
  noticeAr: "هذا القسم في بيان ما جاء في القرآن والصحيحين، وليس فتوى ولا تنبّؤًا. ولم يُذكر فيه وقتٌ لأنه لم يُذكر في الوحي."
};


/* ------------------------------------------------------------
   THE END ITSELF — the blasts, the collapse, and the re-creation
   ------------------------------------------------------------
   The Judgement page had the Trumpet as a single stage. This is
   what the Quran describes happening between the last sign and
   the standing: the blast, the sky and seas and mountains coming
   apart, everything dying, the earth left flat and empty, and
   then the raising.

   A WARNING THAT BELONGS ON THIS SECTION SPECIFICALLY.
   This is where scientific-sounding explanation gets attached to
   verses — the seas burning explained by splitting water into
   hydrogen and oxygen, time contracting explained by relativity.
   None of that is tafsir, and no early scholar read them so. It
   is also a bad trade: a verse tied to a scientific claim rises
   and falls with that claim, and the Quran is not in need of the
   support. The verses are given here as they are, and
   `notEstablished` says where the popular version runs past the
   text.
   ------------------------------------------------------------ */

const THE_END = {
  title: "The end itself — from the last sign to the raising",
  titleAr: "النهاية نفسها — من آخر علامةٍ إلى البعث",
  lead: "What the Quran describes happening between the final sign and the moment everyone stands up again.",
  leadAr: "ما يصفه القرآن ممّا يقع بين آخر العلامات وبين قيام الناس من جديد.",

  stages: [
    {
      h: "The blast — and everything alive dies",
      hAr: "النفخة — فيموت كلُّ حيّ",
      plain: "In plain words: the horn is blown once and every living thing dies at the same moment. Not gradually, and not in order — at once.\n\nThe Quran makes one exception: except whom Allah wills. That exception is not explained further, and this page does not fill it in.",
      plainAr: "بكلامٍ بسيط: يُنفخ في الصور نفخةً واحدةً فيموت كلُّ حيٍّ في اللحظة نفسها. لا تدريجًا ولا على ترتيب، بل دفعةً واحدة.\n\nواستثنى القرآن: ﴿إِلَّا مَن شَآءَ ٱللَّهُ﴾. ولم يُفسَّر هذا الاستثناء، ولا تملؤه هذه الصفحة من عندها.",
      en: "The Trumpet is blown and whoever is in the heavens and the earth falls dead, except whom Allah wills. Not destroyed slowly, not across generations — at a sound.\n\nThe Quran does not name who the exceptions are. Several answers have been suggested. The verse says “except whom Allah wills” and stops, and so does this page.",
      ar: "يُنفخ في الصور فيصعق من في السماوات ومن في الأرض إلا من شاء الله. لا هلاكًا على مهل، ولا عبر أجيال، بل عند صوت.\n\nولم يُسمّ القرآن المستثنَين، وقد ذُكرت في تعيينهم أقوال. والآية قالت ﴿إِلَّا مَن شَآءَ ٱللَّهُ﴾ ووقفت، وكذلك تقف هذه الصفحة.",
      verse: { ar: "وَنُفِخَ فِى ٱلصُّورِ فَصَعِقَ مَن فِى ٱلسَّمَٰوَٰتِ وَمَن فِى ٱلْأَرْضِ إِلَّا مَن شَآءَ ٱللَّهُ", en: "“And the Trumpet will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills.”", ref: "Surah Az-Zumar (39:68)" },
      strength: "quran"
    },
    {
      h: "The mountains, the seas, the sky",
      hAr: "الجبال والبحار والسماء",
      plain: "In plain words: the things people treat as the definition of permanence are the first to go. Mountains are moved and become like carded wool, the seas are set on fire, the sky is rolled up.\n\nThe Quran keeps choosing exactly the objects a person would point at to say: that will always be there.",
      plainAr: "بكلامٍ بسيط: أوّلُ ما يزول هو ما يجعله الناس مثَلًا في الثبات. تُسيَّر الجبال فتكون ﴿كَٱلْعِهْنِ ٱلْمَنفُوشِ﴾، وتُسجَّر البحار، وتُطوى السماء.\n\nوالقرآن يختار في كلّ مرّةٍ الأشياء التي يُشير إليها المرء فيقول: هذه لا تزول.",
      en: "The Quran describes the world coming apart in short, hard images, and they are worth reading rather than summarised.\n\nThe mountains are set moving and become a mirage. Then they become like carded wool — the lightest thing there is, blown about.\n\nThe seas are set boiling. The sky becomes like molten metal, then splits open, and the stars scatter.\n\nEvery one of these is a verse. What none of them is, is an explanation. The Quran gives the scene, not the mechanism.",
      ar: "يصف القرآن انفراط العالم بصورٍ قصيرةٍ شديدة، وقراءتها خيرٌ من تلخيصها.\n\nتُسيَّر الجبال فتكون سرابًا، ثم تصير كالعهن المنفوش — أخفّ ما يكون، تذروه الريح.\n\nوتُسجَّر البحار. وتكون السماء كالمُهل، ثم تنشقّ، وتنكدر النجوم.\n\nوكلُّ واحدةٍ من هذه آية. وليست واحدةٌ منها تفسيرًا للكيفيّة: فالقرآن أعطى المشهد ولم يُعطِ الآليّة.",
      verses: [
        { ar: "وَسُيِّرَتِ ٱلْجِبَالُ فَكَانَتْ سَرَابًۭا", en: "“And the mountains are set in motion and become a mirage.”", ref: "Surah An-Naba (78:20)" },
        { ar: "وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ", en: "“And the mountains will be like carded wool.”", ref: "Surah Al-Qari'ah (101:5)" },
        { ar: "وَإِذَا ٱلْبِحَارُ سُجِّرَتْ", en: "“And when the seas are set boiling.”", ref: "Surah At-Takwir (81:6)" },
        { ar: "يَوْمَ تَكُونُ ٱلسَّمَآءُ كَٱلْمُهْلِ", en: "“The Day the sky will be like molten metal.”", ref: "Surah Al-Ma'arij (70:8)" },
        { ar: "فَإِذَا ٱنشَقَّتِ ٱلسَّمَآءُ فَكَانَتْ وَرْدَةًۭ كَٱلدِّهَانِ", en: "“And when the heaven splits open and becomes rose-coloured like oil.”", ref: "Surah Ar-Rahman (55:37)" }
      ],
      notEstablished: "A common modern habit is to explain these verses with chemistry or physics — the seas burning explained by separating water into hydrogen and oxygen, or the contraction of time explained by relativity. That is not tafsir, and no early scholar read them that way. It is also a bad trade: a verse tied to a scientific claim rises and falls with that claim. The verses are given here as they are.",
      notEstablishedAr: "وقد شاع حديثًا تفسير هذه الآيات بالكيمياء أو الفيزياء: كتعليل اشتعال البحار بفصل الماء إلى هيدروجين وأكسجين، أو تعليل تقارب الزمان بالنسبيّة. وليس هذا تفسيرًا، ولا قرأها به أحدٌ من المتقدّمين. وهو صفقةٌ خاسرة: فالآية إذا عُلّقت بدعوى علميّةٍ سقطت بسقوطها. فسِيقت الآيات هنا كما هي.",
      strength: "quran"
    },
    {
      h: "The earth left flat and empty — and the question nobody answers",
      hAr: "الأرض تُترك ممدودةً خالية — والسؤال الذي لا يُجيبه أحد",
      plain: "In plain words: the earth is left completely level and bare — no buildings, no landmarks, nothing anyone built.\n\nThen a question is asked out loud with nobody left to answer it: to whom belongs the sovereignty today? And it is answered by the One who asked.",
      plainAr: "بكلامٍ بسيط: تُترك الأرض قاعًا صفصفًا مستويةً عاريةً: لا بناءَ ولا معلَمَ ولا أثرَ لشيءٍ صنعه أحد.\n\nثم يُنادى بسؤالٍ ولا أحد يُجيب: ﴿لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ﴾. فيُجيب عنه السائلُ سبحانه.",
      en: "The earth is stretched out, throws up what is inside it, and empties. No mountain, no landmark, nothing to hide behind.\n\nThen the Quran records a question asked into a world with nobody left in it: “To whom belongs the sovereignty this Day?” There is no one to answer, so the answer comes from the One who asked: “To Allah, the One, the Prevailing.”",
      ar: "تُمدّ الأرض وتُلقي ما في جوفها وتتخلّى: لا جبل، ولا معلَم، ولا ما يُستتر به.\n\nثم يحكي القرآن سؤالًا يُلقى في عالمٍ لم يبقَ فيه أحد: ﴿لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ﴾. فلا مُجيب، فيأتي الجواب من السائل سبحانه: ﴿لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ﴾.",
      verses: [
        { ar: "وَإِذَا ٱلْأَرْضُ مُدَّتْ • وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ", en: "“And when the earth is spread out, and casts out what is within it and becomes empty.”", ref: "Surah Al-Inshiqaq (84:3-4)" },
        { ar: "لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ ۖ لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ", en: "“To whom belongs the sovereignty this Day? To Allah, the One, the Prevailing.”", ref: "Surah Ghafir (40:16)" }
      ],
      strength: "quran"
    },
    {
      h: "Forty — and the one bone that does not decay",
      hAr: "أربعون — والعظم الذي لا يبلى",
      plain: "In plain words: there is a gap of forty between the two blasts. Abu Hurairah was asked forty what — forty days, months, years? — and he said: I refuse to answer. That is in al-Bukhari, and it is a companion declining to guess.\n\nAnd one part of the body does not decay: the tailbone. From it the person is put together again — which is why what comes back is you, not a copy of you.",
      plainAr: "بكلامٍ بسيط: بين النفختين أربعون. وسُئل أبو هريرة: أربعون ماذا؟ أربعون يومًا؟ شهرًا؟ سنة؟ فقال: أبيت. والخبرُ في البخاريّ، وهو صحابيٌّ يمتنع عن الظنّ.\n\nوشيءٌ واحدٌ من البدن لا يبلى: عَجْبُ الذَّنَب. ومنه يُركَّب الخلقُ ثانيةً — ولهذا كان العائدُ **أنت**، لا نسخةً منك.",
      en: "Between the two blasts there is a gap, and the hadith gives its length as a number with no unit. Abu Hurairah was asked: forty days? He refused to say. Forty months? He refused. Forty years? He refused.\n\nThat refusal is itself worth noticing. The companion who narrated it would not fill in what he had not been told, and neither should anyone else.\n\nIn the same narration: everything of a human being decays except one bone — the coccyx, the very base of the spine — and from it the person is put together again.",
      ar: "بين النفختين مدّة، وجاء في الحديث عددُها بلا وحدة. سُئل أبو هريرة: أربعون يومًا؟ فأبى. أربعون شهرًا؟ فأبى. أربعون سنة؟ فأبى.\n\nوهذا الإباء نفسه ممّا يُتأمَّل: فالصحابيُّ الراوي امتنع أن يملأ ما لم يُخبَر به، وكذلك ينبغي لغيره.\n\nوفي الحديث نفسه: يبلى كلُّ شيءٍ من الإنسان إلا عظمًا واحدًا، وهو عَجْبُ الذَّنَب، أسفلُ الصلب، ومنه يُركَّب الخلق.",
      verse: { ar: "", en: "“Between the two blowings of the trumpet there will be forty.” … “Everything of the human body will decay except the coccyx bone, and from it the creation will be put together again.”", ref: "Sahih al-Bukhari 4814 and 4935 — Abu Hurairah" },
      strength: "hadith"
    },
    {
      h: "The raising — rain, and people coming up like plants",
      hAr: "البعث — مطرٌ، وخروجُ الناس كما ينبت النبات",
      plain: "In plain words: water is sent down and people grow out of the earth the way plants do after rain.\n\nThe image is chosen on purpose. Reviving dead ground is something everyone has already watched happen — so the argument is not asking you to imagine something new, it is pointing at something you see every year.",
      plainAr: "بكلامٍ بسيط: يُنزَّل ماءٌ فينبت الناس من الأرض كما ينبت الزرعُ بعد المطر.\n\nوالتشبيهُ مقصود: فإحياءُ الأرض بعد موتها أمرٌ رآه كلُّ أحد. فليست الحجّةُ تطلب منك أن تتخيّل شيئًا جديدًا، وإنما تُشير إلى ما تراه كلّ سنة.",
      en: "Then rain comes down and human beings grow out of the earth the way vegetation grows. The image in the narrations is agricultural, not mechanical: something is planted, something rains, something comes up.\n\nAnd the ground they are gathered on is described in Sahih al-Bukhari as reddish-white land like a pure loaf of bread — with, the narrator adds, no landmark on it for anybody. Nowhere to go, and nothing to recognise.",
      ar: "ثم يُنزل الله مطرًا، فينبت الناس من الأرض كما ينبت النبات. والصورة في الأخبار زراعيّةٌ لا آليّة: بذرٌ يُوضع، ومطرٌ ينزل، وخَلقٌ يخرج.\n\nوالأرض التي يُجمعون عليها موصوفةٌ في صحيح البخاري بأنها أرضٌ بيضاء يعلوها حمرة كقُرصة النقيّ — قال الراوي: ليس فيها معلمٌ لأحد. فلا موضعَ يُقصد، ولا شيءَ يُعرَف.",
      verse: { ar: "", en: "“The people will be gathered on the Day of Resurrection on reddish-white land like a pure loaf of bread.” Sahl added: that land will have no landmark for anybody.", ref: "Sahih al-Bukhari 6521 — Sahl ibn Sa'd" },
      strength: "hadith"
    },
    {
      h: "And from here, the rest of this page",
      hAr: "ومن هنا يبدأ سائر هذه الصفحة",
      plain: "In plain words: the world has ended and the people are standing. From this point the rest of the page takes over — the standing, the intercession, the settling of rights, the Scales, the Bridge.\n\nSo this section is not a separate topic. It is the first chapter, and everything below it is what happens next.",
      plainAr: "بكلامٍ بسيط: انتهت الدنيا وقام الناس. ومن هذا الموضع تبدأ بقيّةُ الصفحة: الموقفُ والشفاعةُ والقصاصُ والموازينُ والصراط.\n\nفليس هذا القسمُ موضوعًا مستقلًّا، وإنما هو الفصل الأوّل، وما تحته هو ما يجري بعده.",
      en: "Everyone is standing. What happens next — the sun drawing near, the sweat, the intercession, the records, the Scales, the Bridge, the settling of rights — is the fifteen stages above.",
      ar: "وقد قام الناس. وأمّا ما بعد ذلك — دنوّ الشمس، والعرق، والشفاعة، والصحف، والميزان، والصراط، واقتصاص الحقوق — فهو المراحل الخمس عشرة المتقدّمة.",
      strength: "note"
    }
  ]
};

/* Minor signs. A short, strictly-sourced set — not an attempt at a
   complete list, and it says so. The long popular lists mix authentic
   narrations with weak ones freely, which is what this site does not do. */
const MINOR_SIGNS = {
  title: "The smaller signs — some already past",
  titleAr: "العلامات الصغرى — وبعضها قد مضى",
  lead: "Not all of it is in the future. Some of these the Prophet ﷺ named as already happening in his own lifetime.",
  leadAr: "ليس كلُّ ذلك في المستقبل، فبعضها سمّاه النبيُّ ﷺ واقعًا في زمانه.",
  items: [
    { en: "His own being sent. He said: “I have been sent, and the Hour, like these two” — and here he did something with his hands, which the narration records and which is the whole point of the statement.\n\nWHAT HE ACTUALLY DID: he held up his index finger and the middle finger beside it, joined together. Two fingers side by side, touching.\n\nAnd that is the meaning. He was not saying the Hour is far. He was saying that between his being sent and the Hour there is only the gap between these two fingers — and the only gap between them is that one is slightly longer than the other. In another wording he said exactly that: they are like these two, and one has almost nothing on the other.\n\nSo the sign is not something still to come. It happened. He himself, standing there, was the sign — and he was showing his companions with his hand how little was left.",
      ar: "بعثته نفسها. قال ﷺ: «بُعثتُ أنا والساعة كهاتين»، وصنع بيده شيئًا نقلته الرواية، وفيه مقصود الحديث كلّه.\n\nوالذي صنعه: أنه رفع السبّابة والوسطى التي تليها مقرونتين، إصبعين متلاصقتين.\n\nوهذا هو المعنى. فلم يُرد أنّ الساعة بعيدة، وإنما أراد أنّ بين بعثته وبين الساعة قدرَ ما بين هاتين الإصبعين، وليس بينهما إلا فضلُ إحداهما على الأخرى في الطول. وجاء في لفظٍ آخر التصريح بذلك: كهاتين، وما كادت إحداهما تفضل الأخرى.\n\nفالعلامة إذن ليست منتظَرة، بل قد وقعت. وهو ﷺ قائمٌ بينهم كان هو العلامة، وكان يُري أصحابه بيده كم بقي.",
      status: "happened",
      when: "Around 610 CE, when revelation began — roughly thirteen years before the migration to Madinah.\n\nThis is the only sign on the whole page that was ALREADY COMPLETE while he was saying it. He was not predicting it; he was standing in it, holding up two fingers.",
      whenAr: "نحو سنة ٦١٠م، حين ابتدأ الوحي — قبل الهجرة بنحو ثلاث عشرة سنة.\n\nوهذه هي العلامة الوحيدة في الصفحة كلِّها التي كانت **قد تمّت** وهو يتكلّم بها. فما كان يُخبر عن غيب، وإنما كان قائمًا فيها رافعًا إصبعيه.",
      ref: "Sahih al-Bukhari 6503 and 4936 — Sahl ibn Sa'd", strength: "hadith" },
    { en: "The splitting of the moon, which Surah Al-Qamar opens with: “The Hour has drawn near, and the moon has split.”",
      ar: "انشقاق القمر، وقد افتُتحت به سورة القمر: ﴿ٱقْتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلْقَمَرُ﴾.",
      status: "happened",
      when: "In Makkah, before the migration to Madinah. It is narrated in both al-Bukhari and Muslim, from more than one companion, that the people of Makkah asked him for a sign and the moon split in two.\n\nA precise year is NOT given. Some historians place it around five years before the Hijrah, but that is their estimate and not something the narrations fix, so this page does not state a year as though it were established.",
      whenAr: "بمكّة، قبل الهجرة إلى المدينة. وهو في البخاريّ ومسلم جميعًا، من غير وجه، أنّ أهل مكّة سألوه آيةً فانشقّ القمر فِرقتين.\n\nولم تُحدَّد سنةٌ بعينها. وقدّره بعض المؤرّخين بنحو خمس سنين قبل الهجرة، وذلك تقديرُهم لا تنصّ عليه الرواية، فلا تُثبت هذه الصفحة سنةً كأنها ثابتة.",
      ref: "Surah Al-Qamar (54:1); also al-Bukhari and Muslim", strength: "quran" },
    { en: "The contraction of time — that a period passes faster than it used to. It is in the narrations, and it is better kept as it was said than explained with physics.",
      ar: "تقارب الزمان، وأنّ المدّة تمرّ أسرع ممّا كانت. وهو في الأخبار، وإبقاؤه على ما قيل أولى من تفسيره بالفيزياء.",
      status: "disputed",
      when: "No date can be given, because the scholars do not agree on what it means. Some read it as blessing being removed from time, so that a day passes with nothing achieved in it. Others read it as distances shrinking, which later scholars connected to travel and communication.\n\nThis page will not pick one and attach a century to it. A sign whose meaning is disputed cannot be dated, and claiming otherwise is how people end up announcing that we are certainly the last generation.",
      whenAr: "لا يُضبط له تاريخ، لأنّ العلماء لم يتّفقوا على معناه. فحمله بعضهم على نزع البركة من الوقت حتى تمضي المدّة ولا يُنجَز فيها شيء. وحمله آخرون على تقارب المسافات، وربطه المتأخّرون بالأسفار ووسائل الاتّصال.\n\nولن تختار هذه الصفحة قولًا ثم تُلحق به قرنًا. فما اختُلف في معناه لا يُؤرَّخ، ومن ادّعى غير ذلك فمن هذا الباب جاء من يُعلن أنّا آخر جيلٍ يقينًا.",
      ref: "Sahih al-Bukhari, Book of Fitan", strength: "hadith" },

    { h: "The awaited Mahdi — what is established, and what is not",
      hAr: "المهديّ المنتظَر — ما ثبت منه وما لم يثبت",
      en: "Almost everyone has heard of him, and almost nobody has been told which parts of what they heard have a chain behind them. So, in order.\n\n**WHAT IS IN THE TWO SAHIHS.** One piece, and it is the piece people usually attach to the Mahdi without realising it is the only strong part: **an army is sent against a man who has taken refuge at the Kaaba, and when they reach al-Bayda' — the open ground between Makkah and Madinah — the earth swallows them.** That is in Sahih Muslim, from Umm Salamah and from Hafsah رضي الله عنهما.\n\nNow read what that text does **not** say. It gives **no number**. It names **no country** they came from. And it does **not name the Mahdi at all** — it says *a man seeking refuge at the House*. Everything beyond that came later.\n\n**WHAT IS OUTSIDE THE TWO SAHIHS.** The narrations that name the Mahdi are in Sunan Abu Dawud, Jami at-Tirmidhi and Sunan Ibn Majah. They say he is from the family of the Prophet ﷺ, that his name matches his, and that he fills the earth with justice as it was filled with injustice (Abu Dawud 4282 and 4285). Umm Salamah's narration adds the detail that people come to a man **who does not want it**, and pledge allegiance to him between the Rukn and the Maqam (Abu Dawud 4286).\n\n**AND THE SCHOLARS DIFFER, GENUINELY.** Ibn Taymiyyah, Ibn Kathir, as-Suyuti and al-Albani held that the reports, taken together, reach a level that must be accepted. Ibn Khaldun examined the chains one by one in his Muqaddimah and found most of them weak. Both positions are real scholarship and neither is fringe. What is agreed is that **no single Mahdi narration is in al-Bukhari or Muslim.**\n\n**HE IS NOT ONE OF THE TEN.** The ten major signs on this page are the ten named in one hadith in Sahih Muslim. He is not among them, and this page will not add him to a list the text did not put him on.",
      ar: "قد سمع به كلُّ أحدٍ تقريبًا، ولم يُخبَر أحدٌ تقريبًا أيُّ ما سمعه له إسناد. فلنُرتّب.\n\n**ما في الصحيحين.** موضعٌ واحد، وهو الذي يُعلّقه الناس بالمهديّ ولا يدرون أنه القويُّ وحده: **أنّ جيشًا يُبعث إلى رجلٍ عاذ بالبيت، فإذا كانوا بالبيداء — وهي ما بين مكّة والمدينة — خُسف بهم.** وهو في صحيح مسلم عن أمّ سلمة وعن حفصة رضي الله عنهما.\n\nثم انظر ما **لا** يقوله النصّ: ليس فيه **عدد**، ولا **بلدٌ** خرجوا منه، **ولا ذِكرٌ للمهديّ أصلًا** — وإنما فيه: **يَعُوذُ عَائِذٌ بِالْبَيْتِ**. وما وراء ذلك متأخّر.\n\n**وما خارج الصحيحين.** الروايات التي تسمّي المهديّ في سنن أبي داود وجامع الترمذي وسنن ابن ماجه، وفيها أنه من أهل بيت النبيّ ﷺ، وأنّ اسمه يواطئ اسمه، وأنه يملأ الأرض قسطًا وعدلًا كما مُلئت جورًا وظلمًا (أبو داود ٤٢٨٢ و٤٢٨٥). وفي حديث أمّ سلمة زيادةٌ لطيفة: أنّ الناس يأتون رجلًا **وهو كاره**، فيبايعونه بين الركن والمقام (أبو داود ٤٢٨٦).\n\n**واختلف أهل العلم اختلافًا حقيقيًّا.** فذهب ابن تيمية وابن كثير والسيوطي والألباني إلى أنّ الأحاديث بمجموعها تبلغ حدًّا يجب قبوله. ونظر ابن خلدون في «المقدّمة» في أسانيدها حديثًا حديثًا فضعّف أكثرها. والقولان لأهل علمٍ معتبَرين، وليس أحدهما شاذًّا. والمتّفق عليه أنّه **ليس في البخاريّ ولا مسلمٍ حديثٌ واحدٌ يسمّي المهديّ.**\n\n**وليس هو من العشر.** فالعلاماتُ العشر الكبرى في هذه الصفحة هي العشر المسمّاة في حديثٍ واحدٍ عند مسلم، وليس هو فيها، ولن تُدخله هذه الصفحة في قائمةٍ لم يضعه فيها النصّ.",
      quote: "يَعُوذُ عَائِذٌ بِالْبَيْتِ فَيُبْعَثُ إِلَيْهِ بَعْثٌ فَإِذَا كَانُوا بِبَيْدَاءَ مِنَ الْأَرْضِ خُسِفَ بِهِمْ",
      status: "disputed",
      when: "No date, and nobody has one. What deserves more attention than the date is a detail inside the narrations that almost nobody repeats.\n\n**HE ARRIVES TO A COMMUNITY THAT IS ALREADY STANDING.** In Umm Salamah's narration, people go to him, take him out **while he is unwilling**, and pledge allegiance to him. He does not raise an army from nothing. He does not create the people who follow him. They are already there, already organised enough to find him, and already willing.\n\nAnd in Sahih Muslim, when Isa عليه السلام descends, **the imam of the Muslims is already leading the prayer** — Isa refuses to lead it and prays behind him. Which means that at the very end of this, there is still a functioning congregation with a leader in front of it, doing the ordinary work of Islam.\n\nSo whichever way the reports are graded, they describe the same thing: **a community that is already doing something, which is then given someone to lead it.** That is the opposite of a community waiting to be rescued — and it is why the Guidance page carries a whole section on what waiting for him has cost us.\n\nSee: **Waiting for the Mahdi**, on the Guidance page.",
      whenAr: "لا تاريخ، ولا يملكه أحد. والذي يستحقّ من الانتباه أكثر من التاريخ لفتةٌ في الأخبار لا يكاد يذكرها أحد.\n\n**إنه يأتي إلى جماعةٍ قائمةٍ من قبله.** ففي حديث أمّ سلمة أنّ الناس يأتونه فيُخرجونه **وهو كاره**، ثم يبايعونه. فليس ينشئ جيشًا من عدم، ولا يخلق من يتّبعه. بل هم قائمون من قبله، منتظمون بقدر ما يجدونه به، راضون به.\n\nوفي صحيح مسلم أنّ عيسى عليه السلام إذا نزل **وجد إمام المسلمين يصلّي بهم**، فيأبى أن يتقدّم ويصلّي خلفه. ومعنى ذلك أنّ في آخر الأمر جماعةً قائمةً لها إمامٌ بين يديها، تعمل عملَ الإسلام المعتاد.\n\nفعلى أيّ وجهٍ صُحّحت الأخبار أو ضُعّفت، فهي تصف شيئًا واحدًا: **جماعةً تعمل من قبلُ، ثم يُساق إليها من يقودها.** وذلك ضدُّ جماعةٍ تنتظر من يُنقذها — ولهذا في صفحة التوجيه قسمٌ كاملٌ فيما كلّفنا انتظارُه.\n\nانظر: **انتظار المهديّ**، في صفحة التوجيه.",
      ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour — Umm Salamah and Hafsah, on the army swallowed at al-Bayda'; Sunan Abu Dawud 4282, 4285 and 4286 for the Mahdi narrations; Ibn Khaldun, Al-Muqaddimah, on their chains",
      refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة — عن أمّ سلمة وحفصة، في الجيش المخسوف به بالبيداء؛ وسنن أبي داود ٤٢٨٢ و٤٢٨٥ و٤٢٨٦ في أخبار المهديّ؛ وابن خلدون في «المقدّمة» في أسانيدها",
      strength: "hadith",
      notEstablished: "Said constantly and established by nothing:\n\n• **A number for the army.** \"Forty thousand\" and other figures are not in the Sahih Muslim text, which gives no number at all.\n\n• **A country they come from.** The text says only that they reach al-Bayda'. Naming a modern state as their origin is an addition, and it is the kind of addition that gets people killed.\n\n• **A date, a year, or a generation.** Every century has produced people certain it was theirs, and every one of them was wrong.\n\n• **A named living person.** More than one man has been declared the Mahdi in history — including in the seizure of the Grand Mosque in 1979, which ended with hundreds dead inside the Haram itself. This is not a harmless guess.\n\n• **That believing in him replaces working.** Nothing in any of these narrations says that.",
      notEstablishedAr: "ممّا يُقال دائمًا ولا يقوم عليه دليل:\n\n• **عددٌ للجيش.** فـ«أربعون ألفًا» وغيرها ليست في نصّ مسلم، وليس فيه عددٌ البتّة.\n\n• **بلدٌ يخرجون منه.** والنصّ إنما فيه أنهم يبلغون البيداء. وتسميةُ دولةٍ قائمةٍ اليوم زيادةٌ، وهي من الزيادات التي تُسفك بها الدماء.\n\n• **تاريخٌ أو سنةٌ أو جيل.** فما من قرنٍ إلا وفيه من أيقن أنه قرنُه، وقد أخطؤوا جميعًا.\n\n• **شخصٌ حيٌّ بعينه.** فقد ادُّعيت هذه الدعوى لغير واحدٍ في التاريخ، ومنها واقعةُ الحرم سنة ١٣٩٩هـ التي انتهت بمئاتٍ من القتلى في المسجد الحرام نفسه. وليس هذا ظنًّا لا يضرّ.\n\n• **أنّ الإيمان به يُغني عن العمل.** وليس في شيءٍ من هذه الأخبار ذلك." },

    { h: "The barefoot shepherds competing in tall buildings",
      hAr: "الحُفاة العُراة رِعاءُ الشاء يتطاولون في البنيان",
      en: "In the hadith of Jibril — the one where he came in human form and asked about Islam, iman and ihsan — he also asked about the Hour. He ﷺ said the one asked knows no more than the one asking, then gave two of its marks: that the slave woman will give birth to her mistress, and that you will see the barefoot, naked, destitute shepherds of sheep competing in raising tall buildings.\n\nThis is one of the most commonly claimed as fulfilled, so it needs care. The second half is the one people point at, and the resemblance to certain places today is obvious enough that it does not need spelling out.",
      ar: "في حديث جبريل — الذي أتاه في صورة رجلٍ فسأله عن الإسلام والإيمان والإحسان — سأله عن الساعة أيضًا، فقال ﷺ: **مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ**، ثم ذكر من أماراتها: **أَنْ تَلِدَ الْأَمَةُ رَبَّتَهَا، وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ**.\n\nوهذا من أكثر ما يُدّعى وقوعُه، فيحتاج إلى تحرّز. والشطر الثاني هو الذي يُشار إليه، وشَبَهُه بأحوال بعض البلاد اليوم أظهرُ من أن يُشرح.",
      quote: "وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ",
      status: "disputed",
      when: "No date, and this page will not give one — for a reason worth stating.\n\nThe resemblance to the present is striking, and many contemporary scholars have said so. But the scholars also differ on what the first half means: “the slave woman gives birth to her mistress” has been read as the spread of slavery, as children treating their mothers as servants, and in other ways. When half of a sign is disputed, declaring the whole thing fulfilled is a step past the evidence.\n\nAnd there is a general caution that applies here more than anywhere: this hadith has been declared fulfilled in almost every century, by people who were sure. Some of them were looking at real resemblances too.",
      whenAr: "لا تاريخ، ولن تُعطيه هذه الصفحة، ولسببٍ يستحقّ أن يُقال.\n\nفالشَّبَهُ بالواقع اليوم قويّ، وقد قال بذلك جماعةٌ من أهل العلم المعاصرين. غير أنّ العلماء اختلفوا في معنى الشطر الأوّل: فـ«تلد الأمة ربّتها» حُملت على كثرة السبي، وعلى عقوق الأولاد لأمّهاتهم حتى تصير الأمُّ كالخادم، وعلى غير ذلك. وإذا اختُلف في نصف العلامة فالجزمُ بوقوعها كلِّها تجاوزٌ للدليل.\n\nوثمّ تحذيرٌ عامٌّ هو هنا أوكد: فهذا الحديث أُعلن وقوعُه في كلّ قرنٍ تقريبًا، وقاله واثقون. وقد كان بعضهم ينظر إلى مشابهَ حقيقيّةٍ أيضًا.",
      ref: "Sahih Muslim, Book of Faith — Umar ibn al-Khattab; also Sahih al-Bukhari 50",
      strength: "hadith",
      plain: "In plain words: he was asked when the Hour is, and said the one being asked knows no more than the one asking — then gave signs instead of a date.\n\nOne of them: people who were poor barefoot shepherds will end up competing over who builds the tallest building.\n\nMany people say this has clearly happened, and the resemblance is hard to miss. But the other half of the same hadith is disputed among scholars, so this page marks it as disputed rather than declaring it done. Every century has had confident people announcing this one.",
      plainAr: "بكلامٍ بسيط: سُئل متى الساعة، فقال: ما المسؤول عنها بأعلم من السائل — ثم أعطى علاماتٍ بدل الموعد.\n\nومنها: أنّ رعاة الغنم الفقراء الحُفاة يصيرون يتباهون في البنيان أيُّهم أعلى.\n\nويقول كثيرون إنّ هذا وقع ظاهرًا، والشَّبَهُ قريب. غير أنّ الشطر الآخر من الحديث نفسه مختلَفٌ فيه بين العلماء، فوسمته هذه الصفحة بالخلاف ولم تجزم بوقوعه. وفي كلّ قرنٍ من أعلن وقوع هذا وهو واثق." },

    { h: "Six, and these ARE given in order — count them",
      hAr: "وستٌّ سِيقت مرتَّبةً — فاعدُدها",
      en: "This one is worth putting beside the ten, because it is the opposite case. In the hadith of the ten there is no ordering word at all. Here every item is joined to the next with THUMMA — then, and then, and then. So this list IS a sequence, and he said so.\n\nHe said to Awf ibn Malik at Tabuk: count six before the Hour. My death. Then the conquest of Jerusalem. Then a plague that takes you as the murrain takes sheep. Then wealth so abundant that a man is given a hundred dinars and stays angry. Then a tribulation that leaves no Arab house it has not entered. Then a truce between you and the Romans, which they break and come at you under eighty banners, twelve thousand under each.\n\nRead the first two and notice what they are: his own death, and the conquest of Jerusalem. Both happened, and both happened in the order he gave. The list opens with two items his own companions lived to see.",
      ar: "هذا ممّا يُوضع بجانب العشر، لأنه العكس تمامًا: ففي حديث العشر لا توجد أداةُ ترتيبٍ البتّة، وها هنا كلُّ بندٍ معطوفٌ على ما قبله بـ**ثُمَّ**. فهذه القائمةُ سلسلةٌ مرتَّبة، وقد صرّح بذلك.\n\nقال لعوف بن مالك في تبوك: **اعْدُدْ سِتًّا بَيْنَ يَدَىِ السَّاعَةِ: مَوْتِي، ثُمَّ فَتْحُ بَيْتِ الْمَقْدِسِ، ثُمَّ مُوتَانٌ يَأْخُذُ فِيكُمْ كَقُعَاصِ الْغَنَمِ، ثُمَّ اسْتِفَاضَةُ الْمَالِ حَتَّى يُعْطَى الرَّجُلُ مِائَةَ دِينَارٍ فَيَظَلُّ سَاخِطًا، ثُمَّ فِتْنَةٌ لَا يَبْقَى بَيْتٌ مِنَ الْعَرَبِ إِلَّا دَخَلَتْهُ، ثُمَّ هُدْنَةٌ تَكُونُ بَيْنَكُمْ وَبَيْنَ بَنِي الْأَصْفَرِ**.\n\nواقرأ أوّل بندين وانظر ما هما: موتُه هو، وفتحُ بيت المقدس. وقد وقعا، ووقعا على الترتيب الذي ذكره. فافتُتحت القائمةُ ببندين أدركهما أصحابُه أنفسهم.",
      quote: "اعْدُدْ سِتًّا بَيْنَ يَدَىِ السَّاعَةِ: مَوْتِي، ثُمَّ فَتْحُ بَيْتِ الْمَقْدِسِ",
      status: "mixed",
      when: "This one has to be answered item by item, because some of it is long past and some has not come.\n\n1. HIS DEATH — happened. Rabi' al-Awwal, 11 AH / 632 CE.\n2. THE CONQUEST OF JERUSALEM — happened. 16 AH / 637 CE, in the caliphate of Umar ibn al-Khattab, who came to receive the city himself.\n3. THE PLAGUE — happened. The plague of Amwas in Syria, 18 AH / 639 CE. It killed a very large number, among them the companions Abu Ubaydah ibn al-Jarrah and Mu'adh ibn Jabal.\n4. WEALTH SO ABUNDANT A MAN IS GIVEN A HUNDRED DINARS AND STAYS ANGRY — the scholars differ. Some applied it to the expansions under Uthman and later under Umar ibn Abd al-Aziz, when the treasury could not find people poor enough to take the zakah. Others hold it is still to come.\n5. A TRIBULATION LEAVING NO ARAB HOUSE UNTOUCHED — many scholars applied this to the killing of Uthman in 35 AH / 656 CE and the civil strife that followed. That is a reading, not a text.\n6. THE TRUCE WITH THE ROMANS, THEN THE BETRAYAL UNDER EIGHTY BANNERS — most hold this has NOT happened. Attempts to fit it to the Crusades or to modern events are not established, and this page does not make one.\n\nA NOTE ON THE DATES THEMSELVES: the hadith is in al-Bukhari, but the dating of these events is HISTORY — at-Tabari, Ibn Kathir and the standard chronicles — not hadith. The first three are as firmly dated as anything in early Islamic history; items 4, 5 and 6 are scholars' applications, and are marked as such.",
      whenAr: "هذا يُجاب عنه بندًا بندًا، فبعضُه مضى من زمنٍ بعيد وبعضُه لم يأتِ.\n\n**١. موتُه ﷺ** — وقع. ربيع الأوّل سنة ١١هـ / ٦٣٢م.\n**٢. فتحُ بيت المقدس** — وقع. سنة ١٦هـ / ٦٣٧م، في خلافة عمر بن الخطّاب، وقدِم لتسلّمها بنفسه.\n**٣. الطاعون** — وقع. طاعونُ عَمَواس بالشام سنة ١٨هـ / ٦٣٩م، ومات فيه خلقٌ كثير، منهم أبو عبيدة بن الجرّاح ومعاذ بن جبل رضي الله عنهما.\n**٤. استفاضةُ المال حتى يُعطى الرجل مئة دينارٍ فيظلّ ساخطًا** — اختلف العلماء: فمنهم من حمله على اتّساع الفتوح في عهد عثمان ثم في عهد عمر بن عبد العزيز، حين لم يجد بيتُ المال من يأخذ الزكاة. ومنهم من قال إنه لم يقع بعد.\n**٥. فتنةٌ لا يبقى بيتٌ من العرب إلا دخلته** — حمله كثيرون على مقتل عثمان سنة ٣٥هـ / ٦٥٦م وما تلاه من الفتن. وهذا حملٌ لا نصّ.\n**٦. الهدنةُ مع الروم ثم الغدر تحت ثمانين راية** — أكثرُ أهل العلم على أنه **لم يقع**. ومحاولاتُ تنزيله على الحروب الصليبيّة أو على حوادث معاصرة غير ثابتة، ولا تصنع هذه الصفحة شيئًا من ذلك.\n\n**وتنبيهٌ على التواريخ نفسها**: الحديثُ في البخاريّ، وأمّا تأريخُ هذه الحوادث فهو **تاريخ** — الطبريّ وابن كثير وكتب الحوليّات — لا حديث. والثلاثةُ الأُوَل من أثبت ما في تاريخ الإسلام الأوّل ضبطًا؛ وأمّا الرابع والخامس والسادس فتنزيلاتُ علماء، وقد وُسمت بذلك.",
      ref: "Sahih al-Bukhari 3176 — Awf ibn Malik · The dating: at-Tabari and Ibn Kathir — historical chronicles, not hadith",
      strength: "hadith",
      plain: "In plain words: here is a list where he DID give the order, and you can tell because every item is joined with the word “then”.\n\nSix things: his death, the conquest of Jerusalem, a plague, wealth so common that a man given a hundred dinars is still annoyed, a trouble that reaches every home, and a broken treaty.\n\nThe first two already happened, in that order, and his companions were alive for them. Which is the point of putting this beside the ten: when he wanted to give an order, he gave one plainly. In the hadith of the ten he did not.",
      plainAr: "بكلامٍ بسيط: هذه قائمةٌ **رتّبها** ﷺ، وتعرف ذلك لأنّ كلّ بندٍ معطوفٌ بـ«ثُمَّ».\n\nستّة: موتُه، وفتحُ بيت المقدس، وطاعونٌ، ومالٌ يكثر حتى يُعطى الرجل مئة دينارٍ فيسخط، وفتنةٌ تدخل كلَّ بيت، وهدنةٌ تُنقض.\n\nوقد وقع الأوّلان على هذا الترتيب وأدركهما أصحابُه. وهذا هو المقصود من وضعه بجانب العشر: فإنه إذا أراد الترتيب رتّب صريحًا، ولم يفعل ذلك في حديث العشر." },

    { h: "The Euphrates uncovering a mountain of gold",
      hAr: "حَسْرُ الفرات عن جبلٍ من ذهب",
      en: "He ﷺ said the Hour will not come until the Euphrates uncovers a mountain of gold, over which people will fight — ninety-nine out of every hundred killed, and every man among them saying: perhaps I will be the one who survives.\n\nThe detail that makes this worth reading is not the gold. It is the sentence at the end. He described what every single person in that fight is thinking, and it is the same thought, and it is the thought that gets ninety-nine of them killed.",
      ar: "قال ﷺ: **لَا تَقُومُ السَّاعَةُ حَتَّى يَحْسِرَ الْفُرَاتُ عَنْ جَبَلٍ مِنْ ذَهَبٍ، يَقْتَتِلُ النَّاسُ عَلَيْهِ، فَيُقْتَلُ مِنْ كُلِّ مِائَةٍ تِسْعَةٌ وَتِسْعُونَ، وَيَقُولُ كُلُّ رَجُلٍ مِنْهُمْ: لَعَلِّي أَكُونُ أَنَا الَّذِي أَنْجُو**.\n\nوالذي يستحقّ التأمّل ليس الذهب، وإنما الجملةُ الأخيرة: فقد وصف ما يدور في نفس كلّ واحدٍ منهم، وهو خاطرٌ واحد، وهو الخاطرُ الذي يُقتل به تسعةٌ وتسعون.",
      quote: "وَيَقُولُ كُلُّ رَجُلٍ مِنْهُمْ: لَعَلِّي أَكُونُ أَنَا الَّذِي أَنْجُو",
      status: "notyet",
      when: "Not yet. The wording settles it: “the Hour will not come UNTIL the Euphrates uncovers a mountain of gold” — so it is still ahead.\n\nBe careful with this one. Every time the Euphrates drops in a drought, the claim circulates that it has begun. The hadith describes a mountain of gold uncovered and a fight over it in which ninety-nine of every hundred are killed. A low river is not that.",
      whenAr: "لم يقع بعد. واللفظ يحسم ذلك: **لَا تَقُومُ السَّاعَةُ حَتَّى يَحْسِرَ الْفُرَاتُ عَنْ جَبَلٍ مِنْ ذَهَبٍ** — فهو ممّا لم يأتِ.\n\nوتحرَّز في هذا خاصّة: فكلّما انحسر الفرات في سنة جفافٍ شاع أنّ الأمر قد ابتدأ. والحديثُ يصف جبلًا من ذهبٍ يظهر، واقتتالًا يُقتل فيه من كلّ مئةٍ تسعةٌ وتسعون. وانخفاضُ نهرٍ ليس هو ذاك.",
      ref: "Sahih Muslim, Book of Tribulations — Abu Hurairah",
      strength: "hadith",
      plain: "In plain words: the river dries back far enough to expose a mountain of gold, and people fight over it until ninety-nine out of a hundred are dead.\n\nAnd he told us what each of them is thinking while walking into it: maybe I'll be the one who makes it. Every one of them thinks that. That is why they go.",
      plainAr: "بكلامٍ بسيط: ينحسر النهر حتى يكشف جبلًا من ذهب، فيقتتل الناس عليه حتى يُقتل من كلّ مئةٍ تسعةٌ وتسعون.\n\nوأخبرنا بما يدور في نفس كلّ واحدٍ منهم وهو مقبِل: لعلّي أنا الناجي. وكلُّهم يظنّ ذلك، ولهذا يُقدِمون." },

    { h: "The fire out of the land of Hijaz — the one that can be dated to the year",
      hAr: "نارُ الحجاز — وهي التي يُمكن تأريخها بالسنة",
      en: "This is the clearest case on the page of a sign that was foretold, then happened, and was written down by scholars who were alive when it did.\n\nHe ﷺ said: “The Hour will not come until a fire comes out of the land of Hijaz that lights up the necks of the camels at Busra.” Busra is in southern Syria, hundreds of miles from Madinah.\n\nIn 654 AH a volcanic fissure opened east of Madinah and erupted for weeks. The lava flow is still on the ground there. And the detail that makes this one different from every other claimed fulfilment is that it was not identified centuries later by someone matching events to texts — it was recorded AS IT HAPPENED, by scholars who saw it or heard from those who did, and who said outright that this was the fire of the hadith.",
      ar: "هذا أوضحُ ما في الصفحة من علامةٍ أُخبر بها ثم وقعت ثم قيّدها علماءُ كانوا أحياءً حين وقعت.\n\nقال ﷺ: **لَا تَقُومُ السَّاعَةُ حَتَّى تَخْرُجَ نَارٌ مِنْ أَرْضِ الْحِجَازِ، تُضِيءُ أَعْنَاقَ الْإِبِلِ بِبُصْرَى**. وبُصرى في جنوب الشام، بينها وبين المدينة مسافاتٌ بعيدة.\n\nوفي سنة ٦٥٤هـ انفتح صَدْعٌ بركانيّ شرقيَّ المدينة فثار أسابيع، وحرّتُه باقيةٌ في الأرض إلى اليوم. والذي يُميّز هذه عن سائر ما يُدّعى وقوعُه أنها لم تُنزَّل على الحديث بعد قرون، وإنما **قُيّدت وهي تقع**، كتبها من رآها أو سمع ممّن رآها، وصرّحوا بأنها نارُ الحديث.",
      quote: "لَا تَقُومُ السَّاعَةُ حَتَّى تَخْرُجَ نَارٌ مِنْ أَرْضِ الْحِجَازِ، تُضِيءُ أَعْنَاقَ الْإِبِلِ بِبُصْرَى",
      status: "happened",
      when: "654 AH / 1256 CE, east of Madinah.\n\nWHO RECORDED IT, and this is the point: an-Nawawi was alive at the time and mentions it in his commentary on Sahih Muslim as an event of his own age. Ibn Kathir records it in al-Bidayah wa'n-Nihayah under the year 654. Al-Qurtubi covers it in at-Tadhkirah. Contemporary letters from Madinah described the light it threw.\n\nHOW STRONG IS EACH PART: the hadith is agreed upon — al-Bukhari 7118 and Sahih Muslim. The identification of the 654 AH eruption AS this fire is the judgement of those historians and scholars, which is history rather than revelation. It is unusually strong history — near-contemporary, multiply reported, and with the lava field still visible — but this page keeps the two grades apart, as it does everywhere else.",
      whenAr: "سنة ٦٥٤هـ / ١٢٥٦م، شرقيَّ المدينة.\n\n**ومن قيّدها؟** وهذا هو المهمّ: كان النوويُّ حيًّا حينئذٍ، وذكرها في «شرح صحيح مسلم» على أنها من حوادث عصره. وقيّدها ابن كثير في «البداية والنهاية» في حوادث سنة ٦٥٤. وذكرها القرطبيّ في «التذكرة». ووصفت رسائلُ أهل المدينة يومئذٍ الضوءَ الذي ألقته.\n\n**ودرجةُ كلّ شطر**: الحديثُ متّفقٌ عليه — البخاريّ ٧١١٨ ومسلم. وأمّا تعيينُ بركان سنة ٦٥٤هـ بأنه **هو** هذه النار فهو حكمُ أولئك المؤرّخين والعلماء، وهو تاريخٌ لا وحي. وهو تاريخٌ قويٌّ على غير العادة — قريبٌ من زمن الحادثة، متعدّدُ النقل، وحرّتُه ماثلةٌ للعيان — ومع ذلك تُبقي هذه الصفحة الدرجتين متمايزتين كما تصنع في كلّ موضع.",
      ref: "Sahih al-Bukhari 7118 and Sahih Muslim, Book of Tribulations — Abu Hurairah · The dating: an-Nawawi, Ibn Kathir (al-Bidayah wa'n-Nihayah, year 654) and al-Qurtubi — historical reports, not hadith",
      strength: "hadith",
      plain: "In plain words: he said a fire would come out of the land of Hijaz bright enough to light the necks of camels at Busra — a town in southern Syria, a very long way off.\n\nIn 654 AH (1256 CE) a volcano erupted just east of Madinah. The hardened lava is still there today.\n\nWhat makes this one different from the usual claims: scholars who were ALIVE at the time wrote it down and said this is the fire he meant. An-Nawawi was one of them. Nobody had to go looking for a match centuries later.\n\nStill, keep the two things separate — the hadith is in Bukhari and Muslim, and the identification of that particular eruption is the historians' judgement.",
      plainAr: "بكلامٍ بسيط: أخبر ﷺ أنّ نارًا تخرج من أرض الحجاز يبلغ ضوءُها أن تُضيء أعناق الإبل ببُصرى — وهي بلدةٌ في جنوب الشام على مسافةٍ بعيدة جدًّا.\n\nوفي سنة ٦٥٤هـ (١٢٥٦م) ثار بركانٌ شرقيَّ المدينة، وحرّتُه المتحجّرة باقيةٌ هناك إلى اليوم.\n\nوالذي يُميّزها عن الدعاوى المعتادة: أنّ علماء كانوا **أحياءً** حينئذٍ كتبوها وقالوا هذه هي النار التي أخبر عنها، ومنهم النوويّ. فلم يحتج أحدٌ أن يبحث عن مطابقةٍ بعد قرون.\n\nومع ذلك، أبقِ الأمرين متمايزين: الحديثُ في البخاريّ ومسلم، وتعيينُ ذلك البركان بعينه حكمُ المؤرّخين." }
  ],
  notEstablished: "The popular lists of minor signs run to a hundred items or more and mix authentic narrations with weak and fabricated ones without distinguishing them. Only a few are given here, and only where the source is solid. A short honest list is worth more than a long one you cannot rely on.",
  notEstablishedAr: "وتبلغ قوائم العلامات الصغرى المشهورة مئةً فأكثر، ويُخلط فيها الصحيح بالضعيف والموضوع بلا تمييز. فلم يُذكر هنا إلا القليل، وحيث كان المصدر متينًا. وقائمةٌ قصيرةٌ صادقة خيرٌ من طويلةٍ لا يُوثق بها."
};


/* ------------------------------------------------------------
   JUDGEMENT_DETAIL — the questions the page did not answer
   ------------------------------------------------------------
   How long the Day is · what you are asked FIRST (and the two
   different "firsts", which is the thing most people have never
   been told apart) · the sun and the sweat · the Bridge, what is
   under it, what tries to pull you off it, and how fast people
   cross · who goes first · how people are brought back out of
   the Fire · and what happens the moment Paradise is entered.

   Everything here was read out of the source text before it was
   written. The long Bridge material is one hadith — al-Bukhari
   806 and 6573, both from Abu Hurairah — and the speeds come
   from Sahih Muslim's Book of Faith. Nothing is filled in from
   memory between them.
   ------------------------------------------------------------ */

const JUDGEMENT_DETAIL = {
  title: "The details — how long, what is asked first, and the crossing",
  titleAr: "التفاصيل — كم تطول، وعمَّ تُسأل أوّلًا، والعبور",
  lead: "The questions people actually have about that Day, answered from the Quran and the two Sahihs.",
  leadAr: "الأسئلة التي تدور في نفوس الناس عن ذلك اليوم، مُجابةً من القرآن والصحيحين.",

  sections: [
    {
      id: "jd-length",
      plain: "In plain words: the Day is long. Fifty thousand years is the figure the Quran gives.\n\nBut do not get stuck on the arithmetic — that is not what the number is for. It is there so you understand that this is not a quick hearing you stand through. And the same reports say it is made light for the believer, short as the gap between two prayers. So the length is not fixed for everyone: what you carry decides how long it feels.",
      plainAr: "بكلامٍ بسيط: اليوم طويل، والرقم الذي ذكره القرآن خمسون ألف سنة.\n\nولا تقف عند الحساب، فليس هذا هو المقصود من الرقم. المقصود أن تعرف أنّ الأمر ليس جلسةً قصيرةً تنتهي بسرعة. وفي الأخبار نفسها أنه يُخفَّف على المؤمن حتى يصير كالوقت بين صلاتين. فالطول إذن ليس واحدًا على الجميع: ما تحمله أنت هو الذي يُحدّد كم يطول عليك.",
      h: "How long is the Day — fifty thousand years",
      hAr: "كم يطول اليوم — خمسون ألف سنة",
      en: "The Quran gives the figure directly: a Day whose measure is fifty thousand years. And the Prophet ﷺ used the same number when describing the man who withheld the zakat of his wealth — he is dealt with “during a day the extent of which is fifty thousand years”, and only then is his path shown to him.\n\nThere is a second figure in the Quran — a day whose measure is a thousand years, in Surah As-Sajdah 32:5 — and the scholars discussed the two. The most careful position is that they are not in conflict: they describe different matters, or the same Day measured from different angles. Ibn Abbas was asked about exactly this pairing and is reported to have said they are two different days. What is agreed is that the length is not our length, and that arguing the arithmetic is not the point of either verse.\n\nAnd there is a mercy inside the number that is worth knowing. It is narrated that for the believer that Day will be made light — as short as the time between one prayer and the next. That narration is in the Musnad of Ahmad and is OUTSIDE the two Sahihs, so it is given here as that and not more.",
      ar: "جاء العدد في القرآن صريحًا: ﴿فِى يَوْمٍۢ كَانَ مِقْدَارُهُۥ خَمْسِينَ أَلْفَ سَنَةٍۢ﴾. واستعمل النبيُّ ﷺ العدد نفسه في وصف مانع زكاة ماله: يُقضى فيه ﴿فِى يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ﴾، ثم يُرى سبيله بعد ذلك.\n\nوفي القرآن عددٌ آخر: يومٌ مقداره ألف سنة، في السجدة ٣٢:٥، وقد تكلّم أهل العلم في الجمع بينهما. وأحوطُ الأقوال أنهما لا يتعارضان: فهما في أمرين مختلفين، أو في اليوم نفسه من جهتين. وقد سُئل ابن عباس عن هذا التقابل بعينه فرُوي عنه أنهما يومان مختلفان. والمتّفق عليه أنّ الطول ليس بطولنا، وأنّ المماحكة في الحساب ليست مقصود الآيتين.\n\nوفي العدد رحمةٌ يحسن علمها: فقد رُوي أنّ ذلك اليوم يُخفَّف على المؤمن حتى يكون كقدر ما بين صلاتين. وهذا في مسند أحمد، وهو خارج الصحيحين، فيُذكر على أنه كذلك لا أكثر.",
      refs: ["Surah Al-Ma'arij (70:4)", "Surah As-Sajdah (32:5)", "Sahih Muslim, Book of Zakat — Abu Hurairah", "Musnad Ahmad — outside the two Sahihs"],
      strength: "quran"
    },
    {
      id: "jd-first",
      plain: "In plain words: the very first case opened between people is not money, not property, not who insulted whom. It is who took a life.\n\nAnd it is wider than murder. Scholars include everyone who had a hand in it — the one who ordered it, the one who helped, the one who stayed silent when a word from him would have stopped it.\n\nWhat to take from it: the things we treat as small — a fight that got out of hand, a rumour that got someone hurt, a road you drove badly on — sit at the FRONT of the queue, not the back. And the other half is the easy half: your own prayer is the first thing looked at, and if it is short, your voluntary prayers are used to fill the gap. That is not a threat. It is being told which two things to fix first.",
      plainAr: "بكلامٍ بسيط: أوّل قضيّةٍ تُفتح بين الناس ليست مالًا، ولا أرضًا، ولا من شتم من. أوّل شيء: من أزهق روحًا.\n\nوالأمر أوسع من القتل المباشر. أهل العلم يُدخلون فيه كلّ من كان له يد: من أمر، ومن أعان، ومن سكت وكلمةٌ منه كانت تكفي.\n\nوالذي تأخذه من هذا: الأشياء التي نعدّها صغيرة — خصامٌ خرج عن حدّه، وكلامٌ تسبّب في أذى أحد، وقيادةُ سيّارةٍ بغير مبالاة — هذه في **أوّل** الدور لا في آخره. والنصف الثاني سهل: صلاتُك أوّل ما يُنظر فيه، وإن كان فيها نقص أُكمل من النوافل. وليس هذا تخويفًا، وإنما هو إخبارٌ لك بأيّ شيئين تبدأ.",
      h: "What you are asked FIRST — and there are two different firsts",
      hAr: "عمَّ تُسأل أوّلًا — وهما أوّلان لا أوّلٌ واحد",
      en: "This is one of the most useful things on this page, because two authentic reports both say “the first”, and they are not describing the same thing at all.\n\nTHE FIRST OF YOUR OWN DEEDS TO BE RECKONED IS THE PRAYER. If it is sound, the rest of the deeds go well; if it is ruined, the rest are ruined. The narration adds that when a shortfall is found in the obligatory prayers, Allah says: look whether My servant has any voluntary prayers — and the shortfall in the fard is completed from the nawafil. This is narrated by at-Tirmidhi, an-Nasa'i and Abu Dawud, and is OUTSIDE the two Sahihs. It is widely relied on and it is stated here as what it is.\n\nTHE FIRST MATTER JUDGED BETWEEN PEOPLE IS BLOODSHED. That one is in Sahih Muslim, from Ibn Mas'ud: the first thing decided among people on the Day of Judgment will pertain to blood.\n\nPut them side by side and the picture is exact. Between you and Allah, the first thing opened is your prayer. Between you and other people, the first thing opened is what you did to their lives. Neither report contradicts the other, and hearing only one of them leaves a person with half the answer.",
      ar: "وهذه من أنفع ما في هذه الصفحة، لأنّ خبرين ثابتين كلاهما يقول «أوّل»، وليسا في شيءٍ واحد أصلًا.\n\nأوّلُ ما يُحاسَب به العبد من عمله: الصلاة. فإن صلَحت صلَح سائر عمله، وإن فسَدت فسَد سائره. وفي الخبر أنه إذا انتقص من الفريضة شيء قال الله: انظروا هل لعبدي من تطوّع؟ فيُكمَّل بها ما نقص من الفريضة. أخرجه الترمذي والنسائي وأبو داود، وهو خارج الصحيحين، وعليه عملُ الناس، ويُذكر هنا على حقيقته.\n\nوأوّلُ ما يُقضى بين الناس: الدماء. وهذا في صحيح مسلم عن ابن مسعود: «أوّل ما يُقضى بين الناس يوم القيامة في الدماء».\n\nفإذا قُرن الخبران استبان الأمر على وجهه: فبينك وبين الله يُفتح أوّلًا بابُ صلاتك، وبينك وبين الناس يُفتح أوّلًا ما صنعتَ بأرواحهم. ولا تعارض بينهما، ومن سمع أحدهما وحده فقد بقي معه نصف الجواب.",
      refs: ["at-Tirmidhi, an-Nasa'i, Abu Dawud — outside the two Sahihs", "Sahih Muslim, Book of Qasamah — Ibn Mas'ud"],
      strength: "hadith"
    },
    {
      id: "jd-sun",
      plain: "In plain words: it is hot, everyone is standing, and everyone is sweating — but not the same amount. Some are sweating to the ankles, some to the knees, some are drowning in it.\n\nThe difference is not body size or where you are standing. It is what you did. Picture a crowded place on the hottest day you have known, with no shade and no water, and you will have the idea.",
      plainAr: "بكلامٍ بسيط: الحرّ شديد، والناس واقفون، وكلّهم يعرقون — لكن ليس بالقدر نفسه. منهم من يبلغ العرقُ كعبيه، ومنهم ركبتيه، ومنهم من يغرق فيه.\n\nوالفرق ليس في حجم الجسم ولا في موضع وقوفك، وإنما في عملك. تخيّل مكانًا مزدحمًا في أشدّ يومٍ حرًّا مرّ بك، بلا ظلٍّ ولا ماء، تقترب من الصورة.",
      h: "The sun brought near, and the sweat",
      hAr: "دنوّ الشمس، والعرق",
      en: "The sun is brought near on that Day, and people sweat. The Prophet ﷺ said the sweat will reach up to the middle of the ears.\n\nAnd it is not the same for everyone. The narrations describe people differing in it according to their deeds — some to the ankles, some to the knees, some to the waist, and some whom the sweat bridles at the mouth. The same standing, and people are not in it equally.\n\nIt is at that point, in the same hadith, that people begin going from prophet to prophet asking for the standing to begin — which is the Great Intercession, stage 5 above.",
      ar: "تُدنى الشمس في ذلك اليوم فيعرق الناس. قال النبيُّ ﷺ إنّ العرق يبلغ أنصاف الآذان.\n\nوليسوا فيه سواء. ففي الأخبار أنّ الناس يتفاوتون فيه بأعمالهم: فمنهم من يبلغ كعبيه، ومنهم من يبلغ ركبتيه، ومنهم من يبلغ حَقْوَيه، ومنهم من يُلجمه العرق إلجامًا. موقفٌ واحد، والناس فيه غير متساوين.\n\nوعند ذلك — في الحديث نفسه — يأخذ الناس يذهبون من نبيٍّ إلى نبيّ يسألون أن يُقضى بينهم، وهي الشفاعة العظمى، وهي المرحلة الخامسة المتقدّمة.",
      refs: ["Sahih al-Bukhari 1474 and 1475 — Abdullah ibn Umar", "Sahih Muslim, Book of Paradise"],
      strength: "hadith"
    },
    {
      id: "jd-bridge",
      plain: "In plain words: there is a crossing, and underneath it is the Fire itself — not a drop, not darkness, the Fire.\n\nThe surface is slippery. And there are hooks along it that reach out and catch people. The Prophet ﷺ compared them to the thorns of a desert tree his companions knew by sight, then said their real size is known only to Allah.\n\nThe part that matters: the hooks catch people ACCORDING TO WHAT THEY DID. They are not random and they do not catch everyone. Three things happen — some cross safely, some get scratched and are let through, some do not get across.",
      plainAr: "بكلامٍ بسيط: هناك جسرٌ يُعبَر، وتحته النار نفسها — لا هُوّة ولا ظلام، بل النار.\n\nوسطحه زلق. وعليه كلاليب تمتدّ فتخطف الناس. شبّهها النبيّ ﷺ بشوك شجرةٍ صحراويّةٍ كان أصحابه يعرفونها بأعينهم، ثم قال إنّ حجمها الحقيقيّ لا يعلمه إلا الله.\n\nوالمهمّ في الأمر: أنّ هذه الكلاليب تخطف الناس **بحسب أعمالهم**. فهي لا تُصيب اعتباطًا ولا تُصيب الجميع. والذي يقع ثلاثة: ناجٍ يعبر سالمًا، ومخدوشٌ يُترك فيمرّ، ومن لا يعبر.",
      h: "The Bridge — what is under it, and what reaches up for you",
      hAr: "الصراط — ما تحته، وما يمتدّ إليك منه",
      en: "The Bridge is laid across Hell. That is what is underneath: not a valley, not darkness — the Fire itself.\n\nThe Prophet ﷺ described the surface of it in one phrase: a place where feet slip. It is not level ground.\n\nAnd this answers the question directly — what reaches up to pull people off it. There are HOOKS on it, and he compared them to the thorns of the sa'dan, a thorny tree of Najd his companions knew by sight. He asked them: have you seen the thorns of the sa'dan? They said yes. He said: they are like them, except that how great they are in size is known to nobody but Allah. Another wording adds tongs and spits.\n\nThen the sentence that decides everything: these hooks snatch people ACCORDING TO THEIR DEEDS. They are not random and they are not indiscriminate. What a person carries across is what determines whether anything reaches him.\n\nAnd the outcomes are three, stated plainly: some pass and are saved, some are lacerated and then let go, and some are pushed into the Fire.",
      ar: "يُضرب الصراط على جهنّم. فهذا ما تحته: ليس واديًا ولا ظلمة، بل النار نفسها.\n\nووصف النبيُّ ﷺ متنه بكلمة: «مَدْحَضةٌ مَزِلّة»، أي موضعٌ تزلّ فيه الأقدام. فليس بأرضٍ مستوية.\n\nوهذا جوابُ السؤال على وجهه: ما الذي يمتدّ إلى الناس فيخطفهم؟ عليه كلاليبُ شبّهها بشوك السَّعْدان، وهي شجرةٌ ذات شوكٍ بنجدٍ يعرفها أصحابه بأعينهم. فقال لهم: هل رأيتم شوك السعدان؟ قالوا: نعم. قال: فإنها مثلها، غير أنه لا يعلم قدرَ عِظَمها إلا الله. وفي لفظٍ آخر: خطاطيفُ وكلاليبُ وحسَكة.\n\nثم الجملة التي يدور عليها الأمر: أنّ هذه الكلاليب تخطف الناس **بأعمالهم**. فليست عشوائيّةً ولا تُصيب من غير تمييز، وإنما الذي يحمله المرء في عبوره هو الذي يُحدّد أيناله شيءٌ منها أم لا.\n\nوالمآلات ثلاثةٌ مذكورةٌ صريحًا: ناجٍ مُسلَّم، ومخدوشٌ مُرسَل، ومكدوسٌ في النار.",
      refs: ["Sahih al-Bukhari 806 and 6573 — Abu Hurairah", "Sahih Muslim, Book of Faith"],
      strength: "hadith"
    },
    {
      id: "jd-speeds",
      plain: "In plain words: everyone crosses the same bridge, but not at the same speed — and the speed comes from what you brought with you.\n\nThe fastest cross before you finish blinking. Then like lightning, then like wind, then like a bird, then like a good horse at full run. Then walking. Then some crawl.\n\nSo it is one road and one distance, and the difference is entirely in the person. Think of the same street with one man on a motorbike and another dragging himself along it.",
      plainAr: "بكلامٍ بسيط: الجميع يعبرون الجسر نفسه، لكن ليس بالسرعة نفسها — والسرعة من الذي حملتَه معك.\n\nأسرعهم يعبر قبل أن تُتمّ رمشة عينك. ثم كالبرق، ثم كالريح، ثم كالطير، ثم كالفرس الجواد في أشدّ جريه. ثم مشيًا. ثم منهم من يزحف.\n\nفالطريق واحد والمسافة واحدة، والفرق كلّه في الشخص نفسه. تخيّل شارعًا واحدًا، فيه رجلٌ على درّاجةٍ ناريّة وآخر يجرّ نفسه فيه جرًّا.",
      h: "How fast you cross — and it is by what you carried",
      hAr: "سرعة العبور — وهي على قدر ما حملتَ",
      en: "This is answered in Sahih Muslim in a single line, and the order is a descending scale:\n\n· in the twinkling of an eye\n· like lightning\n· like the wind\n· like a bird\n· like the finest horses and camels\n\nAnd then the ones who are not carried at all: those who go across scratched and released, and those who do not get across.\n\nThe scale is not arbitrary. The believers pass at the speed their deeds carry them, and the fastest of them cross before a person has finished blinking. In the same passage the Prophet ﷺ says that no one will plead more fiercely for anything than the believers will plead for their brothers left in the Fire, saying: our Lord, they used to fast with us, and pray, and make hajj.",
      ar: "جاء جوابه في صحيح مسلم في سطرٍ واحد، والترتيب نازلٌ من الأعلى:\n\n· كطرْف العين\n· كالبرق\n· كالريح\n· كالطير\n· كأجاويد الخيل والرِّكاب\n\nثم الذين لا تحملهم أعمالهم: فناجٍ مخدوشٌ مُرسَل، ومكدوسٌ لا يعبر.\n\nوليس هذا التفاوت اعتباطًا: فالمؤمنون يمرّون على قدر ما تحملهم أعمالهم، وأسرعهم يقطعه قبل أن يُتمّ المرء طرفة عينه. وفي السياق نفسه يقول النبيُّ ﷺ إنه ليس أحدٌ أشدّ مناشدةً في الحقّ من المؤمنين لإخوانهم الذين بقوا في النار، يقولون: ربَّنا، كانوا يصومون معنا ويصلّون ويحجّون.",
      refs: ["Sahih Muslim, Book of Faith"],
      strength: "hadith"
    },
    {
      id: "jd-first-across",
      plain: "In plain words: our Prophet ﷺ goes first, and this ummah goes behind him.\n\nAnd on that bridge nobody is talking. Not one person — except the prophets, and all they are saying is two words, over and over: O Allah, keep them safe. That is what your prophet is doing while you cross.",
      plainAr: "بكلامٍ بسيط: نبيّنا ﷺ يعبر أوّلًا، وهذه الأمّة خلفه.\n\nولا أحد يتكلّم على ذلك الجسر. ولا واحد — إلا الأنبياء، وكلُّ ما يقولونه كلمتان تتكرّران: اللهمّ سلِّم سلِّم. هذا ما يصنعه نبيُّك وأنت تعبر.",
      h: "Who crosses first — and the only words spoken",
      hAr: "من يعبر أوّلًا — والكلمة الوحيدة التي تُقال",
      en: "He said it about himself plainly: “I shall be the first among the Messengers to cross it, with my followers.”\n\nSo this ummah goes first, behind him.\n\nAnd then a detail that says more than a page of description could. On that Bridge nobody speaks — nobody at all — except the Messengers. And what the Messengers say is not a sermon. It is two words, repeated: Allahumma sallim, sallim. O Allah, keep them safe, keep them safe.\n\nThat is what the prophets are doing while their nations cross.",
      ar: "قاله عن نفسه صريحًا: «وأكون أوّل من يجوز من الرسل بأمّته».\n\nفهذه الأمّة تعبر أوّلًا، خلفه ﷺ.\n\nثم تفصيلٌ يقول ما لا تقوله صفحةٌ من الوصف: أنه لا يتكلّم على الصراط أحدٌ البتّة إلا الرسل. وليس الذي يقولونه خطبةً، وإنما كلمتان تتردّدان: «اللهمّ سلِّم سلِّم».\n\nهذا هو صنيع الأنبياء وأممُهم تعبر.",
      refs: ["Sahih al-Bukhari 806 — Abu Hurairah"],
      strength: "hadith"
    },
    {
      id: "jd-out",
      plain: "In plain words: not everyone who falls stays there. People who believed in Allah alone are brought back out.\n\nAnd the way the angels recognise them is the mark of sujud — the place on the forehead that touched the ground. The Fire is not permitted to eat that one spot. Everything else of them burns; that mark stays, and it is what identifies them.\n\nThen water is poured over them and they grow back the way a seed grows after rain.",
      plainAr: "بكلامٍ بسيط: ليس كلُّ من سقط يبقى هناك. فالذين كانوا يعبدون الله وحده يُخرجون.\n\nوالذي تعرفهم به الملائكة أثرُ السجود — الموضع من الجبهة الذي لامس الأرض. فالنار لا يُؤذن لها في هذا الموضع وحده. يحترق منهم كلُّ شيءٍ سواه، ويبقى ذلك الأثر، وبه يُعرفون.\n\nثم يُصبّ عليهم ماء فينبتون كما تنبت الحبّة بعد المطر.",
      h: "Brought back out of the Fire — recognised by one mark",
      hAr: "الإخراج من النار — ويُعرَفون بعلامةٍ واحدة",
      en: "Some of those who fall are not left there. When Allah intends mercy on whom He wills among the people of the Fire who worshipped none but Him, the angels are ordered to bring them out.\n\nAnd here is how the angels know them: by the traces of prostration. Allah has forbidden the Fire to consume the marks of sujud on the body of the son of Adam. The Fire eats everything else; that one place it is not permitted to touch. They come out as skeletons, and it is the mark on the forehead that identified them.\n\nThen the Water of Life is poured over them, and they grow the way a seed grows on the bank of a stream — the same agricultural image as the raising.",
      ar: "وليس كلُّ من سقط يُترك. فإذا أراد الله رحمة من شاء من أهل النار ممّن كان لا يعبد إلا إيّاه، أمر الملائكة أن يُخرجوهم.\n\nوهذا وجهُ معرفة الملائكة إيّاهم: آثارُ السجود. فقد حرّم الله على النار أن تأكل أثر السجود من ابن آدم. فالنار تأكل كلّ شيءٍ منه، وذلك الموضع وحده لا يُؤذن لها فيه. فيخرجون وقد صاروا حُمَمًا، وإنما دلّ عليهم الأثرُ في الجبهة.\n\nثم يُصبّ عليهم ماء الحياة، فينبتون كما تنبت الحبّة في حَمِيل السيل — وهي صورةُ البعث نفسها.",
      refs: ["Sahih al-Bukhari 806 and 6573 — Abu Hurairah"],
      strength: "hadith"
    },
    {
      id: "jd-last-man",
      plain: "In plain words: this is the story of the very last person to get into Paradise — the one at the absolute bottom.\n\nHe keeps asking for one small thing, promising not to ask again, then asking again. Anyone would expect him to be refused.\n\nInstead he keeps going until Allah SMILES at him — and then he is let in and told: wish for what you want. He wishes until he runs out of things to wish for, and is told: you get all of that, and the same again on top.\n\nThat is the LAST one in. Read it when you think you are too far gone.",
      plainAr: "بكلامٍ بسيط: هذه قصّة آخر واحدٍ يدخل الجنّة — الذي في أسفل القائمة تمامًا.\n\nيسأل شيئًا صغيرًا ويعاهد ألّا يسأل غيره، ثم يسأل من جديد. وكلُّ أحدٍ يتوقّع أن يُردّ.\n\nفإذا به يمضي في السؤال حتى **يضحك الله** منه، فيُؤذن له بالدخول ويُقال له: تمنَّ. فيتمنّى حتى تنقطع أمانيه، فيُقال له: لك هذا ومثله معه.\n\nوهذا **آخرهم** دخولًا. اقرأها إذا ظننتَ أنّ أمرك قد فات.",
      h: "The last man to enter Paradise",
      hAr: "آخر أهل الجنّة دخولًا",
      en: "The hadith ends with one man left between Paradise and the Fire, and the exchange is worth reading in full because of how it ends.\n\nHe asks only to have his face turned away from the Fire. Allah says: if I do, will you ask for something else? He swears he will not. His face is turned away.\n\nThen he asks to be brought near the gate of Paradise. Allah says: did you not promise? Woe to you, son of Adam, how treacherous you are. He swears again. He is brought near.\n\nThen he sees what is inside, and stays silent as long as Allah wills — and then asks to enter. And he is reminded of his promise again.\n\nAnd then the line the whole hadith was built for: he keeps asking until ALLAH SMILES because of him, and when Allah smiles at him, He permits him to enter. And he is told: wish. And he wishes until he runs out of wishes — and is told: all of that, and the same again with it, is yours.\n\nThat is the LAST man in. The one at the very bottom of the list.",
      ar: "يختم الحديث برجلٍ يبقى بين الجنّة والنار، وحقُّ محاورته أن تُقرأ بتمامها لأجل خاتمتها.\n\nيسأل أن يُصرَف وجهه عن النار لا غير. فيقول الله: إن فعلتُ فلعلّك تسأل غير ذلك؟ فيُعطي العهد ألّا يسأل. فيُصرَف وجهه.\n\nثم يسأل أن يُدنى من باب الجنّة. فيقول الله: أليس قد أعطيتَ العهد؟ ويحك يا ابن آدم ما أغدرك! فيعاهد ثانيةً. فيُدنى.\n\nثم يرى ما فيها فيسكت ما شاء الله أن يسكت، ثم يسأل الدخول. فيُذكَّر بعهده مرّةً أخرى.\n\nثم الجملة التي سيق الحديث لأجلها: لا يزال يسأل حتى **يضحك الله** منه، فإذا ضحك منه أذن له بالدخول. ثم يُقال له: تمنَّ. فيتمنّى حتى تنقطع به الأماني، فيُقال: لك ذلك ومثله معه.\n\nوهذا **آخرُ** من يدخل، الذي في أسفل القائمة.",
      refs: ["Sahih al-Bukhari 6573 — Abu Hurairah"],
      strength: "hadith"
    },
    {
      id: "jd-paradise",
      plain: "In plain words: the first thing served in Paradise is a specific dish — the extra lobe of a fish's liver. Not a general description of a feast; a named thing.\n\nAnd what it is eaten with is the strange, beautiful part: the earth itself becomes one loaf of bread. The same ground everybody stood on all through that terrifying Day turns into the bread of the welcome meal.",
      plainAr: "بكلامٍ بسيط: أوّل طعامٍ يُقدَّم في الجنّة شيءٌ معيَّن: زيادةُ كبد الحوت. ليس وصفًا عامًّا لمأدبة، بل شيءٌ مُسمًّى.\n\nوالعجيب الجميل هو ما يُؤكل به: الأرض نفسها تصير رغيفًا واحدًا. الأرض التي وقف عليها الناس ذلك اليوم المُخيف كلَّه تتحوّل إلى خبز طعام الاستقبال.",
      h: "The moment you enter — what is served first",
      hAr: "لحظة الدخول — وأوّل ما يُقدَّم",
      en: "Abdullah ibn Salam, a scholar of the Jews of Madinah, came to the Prophet ﷺ when he arrived and put three questions to him that he said only a prophet could answer. One of them was: what is the first meal the people of Paradise will eat?\n\nThe answer: the extra lobe of the fish liver. Not a description of a banquet — a specific thing, named.\n\nAnd in another hadith, what it is eaten with: the earth itself, on that Day, becomes a single loaf, turned over in the Hand of the Most Merciful the way one of you turns his loaf over when travelling — as the welcome-meal for the people of Paradise.\n\nSo the ground everyone was standing on through the whole of that Day becomes the bread of the first meal. Nothing on this page connects more tightly than that: the place of terror becomes the food of arrival.",
      ar: "جاء عبد الله بن سلام، وكان حَبرًا من أحبار يهود المدينة، إلى النبيّ ﷺ حين قدم، فسأله ثلاثًا قال لا يعلمهنّ إلا نبيّ. إحداهنّ: ما أوّل طعامٍ يأكله أهل الجنّة؟\n\nفكان الجواب: **زيادةُ كبد الحوت**. ليس وصفًا لمأدبة، بل شيءٌ معيَّنٌ مُسمًّى.\n\nوفي حديثٍ آخر بيانُ ما يُؤكل به: أنّ الأرض تكون يوم القيامة **خُبزةً واحدة**، يتكفّؤها الجبّار بيده كما يتكفّأ أحدكم خبزته في السفر، نُزُلًا لأهل الجنّة.\n\nفالأرض التي وقف عليها الناس ذلك اليوم كلَّه تصير خبز أوّل طعام. وليس في هذه الصفحة وصلٌ أشدّ من هذا: موضعُ الهول يصير طعامَ القدوم.",
      refs: ["Sahih al-Bukhari 3329 — Anas", "Sahih al-Bukhari 6520 — Abu Sa'id al-Khudri"],
      strength: "hadith"
    },
    {
      id: "jd-first-sign",
      plain: "In plain words: you asked which one comes first, and there is an honest answer and an honest complication.\n\nThe answer: a fire that drives people from east to west. The complication: another authentic report calls a fire from Yemen the LAST of the ten. Scholars said they may be the same fire, counted first in one sense and last in another.\n\nWhat you should take away: nobody can hand you a numbered timetable, and anybody who does is adding to what was said.",
      plainAr: "بكلامٍ بسيط: سألتَ أيّها أوّلًا، وفي المسألة جوابٌ صريح وإشكالٌ صريح.\n\nالجواب: نارٌ تحشر الناس من المشرق إلى المغرب. والإشكال: أنّ حديثًا آخر صحيحًا يجعل نار اليمن **آخر** العشر. وقال أهل العلم قد تكونان نارًا واحدة، عُدّت أوّلًا باعتبارٍ وآخرًا باعتبار.\n\nوالذي تخرج به: أنّ أحدًا لا يستطيع أن يُعطيك جدولًا مرقّمًا، ومن فعل فقد زاد على ما قيل.",
      h: "Which sign comes first",
      hAr: "أيُّ العلامات أوّلًا",
      en: "You asked which of them happens first, and there is an authentic answer — in the same hadith of Abdullah ibn Salam's three questions.\n\nHis first question was: what is the first portent of the Hour? The Prophet ﷺ answered: a fire that will gather the people from the east to the west.\n\nNow the honest part. Compare that with the list of ten, where a fire coming out of Yemen driving people to their place of gathering is named as the LAST of them. The scholars discussed this, and the readings are: that they are the same fire, described as first of one series and last of another; or that “first portent” here means the first of the great signs in one respect while the Yemen fire is the last of them in another.\n\nWhat is certain is the text of both narrations. What is not settled is how exactly they line up, and this page does not pretend it is settled.",
      ar: "سألتَ أيُّها يقع أوّلًا، وفي المسألة جوابٌ ثابت، وهو في حديث عبد الله بن سلام نفسه.\n\nفكان سؤاله الأوّل: ما أوّل أشراط الساعة؟ فأجابه النبيُّ ﷺ: **نارٌ تحشر الناس من المشرق إلى المغرب**.\n\nوهذا موضع الإنصاف: قابِل ذلك بحديث العشر، وفيه أنّ نارًا تخرج من اليمن تطرد الناس إلى محشرهم هي **آخرها**. وقد تكلّم أهل العلم في ذلك، والأقوال: أنهما نارٌ واحدة وُصفت بأنها أوّل باعتبارٍ وآخر باعتبار؛ أو أنّ «أوّل الأشراط» هنا بمعنًى، ونار اليمن آخر الكبرى بمعنًى آخر.\n\nفالثابت نصُّ الحديثين، وأمّا وجه انتظامهما على التعيين فليس بمحسوم، ولا تدّعي هذه الصفحة حسمه.",
      refs: ["Sahih al-Bukhari 3329", "Sahih Muslim, Book of Fitan"],
      strength: "hadith"
    }
  ]
};
