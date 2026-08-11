/* ============================================================
   TADABBUR — التدبّر
   ------------------------------------------------------------
   Why is this verse here? Why THIS word and not the near-synonym
   beside it? Where else does the Quran use it — and which other
   verse finishes the thought this one leaves open?

   THREE RULES THIS FILE FOLLOWS, AND WHY.

   1. No Arabic of the Quran is typed from memory. Every verse in
      this file was copied out of the Uthmani text served by
      api.alquran.cloud, harakat and all. A tadabbur file that
      misquotes the thing it is pondering is worse than no file.

   2. Every claim says what KIND of claim it is, in `strength`:
        quran    — the Quran said it, and the reference is given
        lugha    — a language fact, from a named lexicon. Nearly
                   all of these are Ar-Raghib al-Isfahani's
                   Al-Mufradat fi Gharib al-Quran (d. 502 AH),
                   which is the book the owner asked for and the
                   standard classical work on Quranic vocabulary
        hadith   — graded, with the collection and number
        tafsir   — a scholar's reading, attributed by name. NOT
                   revelation, and labelled so
        qiraah   — a difference in the established recitations
        ikhtilaf — the scholars disagreed; both sides are given

      This is the site's hadith-grading rule applied to meaning.
      The point of tadabbur is to make a reader think, and a
      reader cannot think honestly if a lexicographer's opinion
      is dressed up as the word of Allah.

   3. Where scholars differ, BOTH readings are given with who held
      them, and the reader is told plainly that it is open. The
      owner asked for this directly: "if there's a part that isn't
      agreed on, add the other section as well to let the
      researcher actually think for his own."

   COVERAGE. The Quran is 6,236 verses and this is written verse
   by verse and word by word, so it grows over time rather than
   arriving finished. What is here now is complete for the surahs
   listed in TADABBUR — it is not a sample of each. The reader is
   told exactly which surahs are covered; nothing pretends to
   cover a surah it has not done. Add a surah by adding its number
   as a key, in the same shape. Nothing else needs changing.
   ============================================================ */

/* ------------------------------------------------------------
   The opening section — why ponder at all.
   Shown on the Quran page above the surah grid, so it is read
   before any surah is opened.
   ------------------------------------------------------------ */
const TADABBUR_INTRO = {
  title: "Why think about it at all?",
  titleAr: "لماذا نتدبّر أصلًا؟",

  lead: "Before any surah, one question. The Quran itself asks it — and the people it was asking were not the believers.",
  leadAr: "قبل أيّ سورة، سؤالٌ واحد. القرآن نفسه سأله — والذين سألهم لم يكونوا المؤمنين.",

  verse: {
    ar: "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَآ",
    en: "“Then do they not reflect upon the Quran, or are there locks upon their hearts?”",
    ref: "Surah Muhammad (47:24)",
    strength: "quran"
  },

  /* The owner's specific point, and it is a real one: read 47:23
     immediately before it and the address is unmistakable. */
  context: {
    title: "Who was being asked?",
    titleAr: "لِمَن وُجّه هذا السؤال؟",
    en: "Read the verse immediately before it. Verse 23 is speaking about those who turned away — “Those are the ones Allah has cursed, so He deafened them and blinded their vision.” The whole passage from verse 20 onwards is about the hypocrites and those with a disease in their hearts: people who heard the Quran recited, and passed over it.\n\nSo the charge in verse 24 was never “you did not read it.” They heard it constantly. The charge is that they went through it without their minds engaging — and Allah calls that a lock on the heart.\n\nAnd that is why this verse should stop a believer rather than reassure him. A person can recite daily for forty years, finish the Book many times over, and never once stop at a word and ask why that word is there and not the one beside it. The reciting is not in question. The stopping is. A rebuke aimed at people who rejected the Book describes, exactly, what someone who loves the Book can end up doing to it.",
    ar: "اقرأ الآية التي قبلها. فالآية الثالثة والعشرون في المُعرضين: ﴿أُولَٰئِكَ ٱلَّذِينَ لَعَنَهُمُ ٱللَّهُ فَأَصَمَّهُمْ وَأَعْمَىٰ أَبْصَٰرَهُمْ﴾. والسياق من الآية العشرين في المنافقين والذين في قلوبهم مرض: قومٌ سمعوا القرآن يُتلى فمرّوا عليه.\n\nفما كان العتاب في الآية الرابعة والعشرين: «أنكم لم تقرؤوه»، فقد كانوا يسمعونه دائمًا. وإنما العتاب أنهم مرّوا عليه بغير عقول، وسمّى الله ذلك أقفالًا على القلوب.\n\nولهذا ينبغي أن تُوقف هذه الآيةُ المؤمنَ لا أن تطمئنه. فقد يتلو الرجل أربعين سنة، ويختم الكتاب مرارًا، ولا يقف مرّة واحدة عند كلمة فيسأل: لِمَ هذه الكلمة دون التي بجانبها؟ فليست التلاوة موضع السؤال، وإنما الوقوف. وعتابٌ وُجّه إلى قومٍ ردّوا الكتاب يصف بدقّةٍ ما قد يصنعه بالكتاب من يحبّه."
  },

  more: [
    {
      ar: "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ ٱللَّهِ لَوَجَدُوا۟ فِيهِ ٱخْتِلَٰفًۭا كَثِيرًۭا",
      en: "“Then do they not reflect upon the Quran? If it had been from any other than Allah, they would have found in it much contradiction.”",
      ref: "Surah An-Nisa (4:82)",
      note: "Tadabbur is offered here as the test itself. Look closely enough and the Book holds together — that is the argument.",
      noteAr: "التدبّر هنا هو الدليل نفسه: أَنعِم النظر تجد الكتاب يتماسك، وهذه هي الحجّة."
    },
    {
      ar: "كِتَٰبٌ أَنزَلْنَٰهُ إِلَيْكَ مُبَٰرَكٌۭ لِّيَدَّبَّرُوٓا۟ ءَايَٰتِهِۦ وَلِيَتَذَكَّرَ أُو۟لُوا۟ ٱلْأَلْبَٰبِ",
      en: "“A blessed Book We have revealed to you, that they might reflect upon its verses and that those of understanding would be reminded.”",
      ref: "Surah Sad (38:29)",
      note: "The purpose of the revelation is stated as a purpose clause: it came down SO THAT its verses would be pondered.",
      noteAr: "عِلّة الإنزال مذكورة بلام التعليل: أُنزل ليُتدبَّر، فالتدبّر مقصودٌ من الإنزال لا فضلة."
    },
    {
      ar: "أَفَلَمْ يَدَّبَّرُوا۟ ٱلْقَوْلَ أَمْ جَآءَهُم مَّا لَمْ يَأْتِ ءَابَآءَهُمُ ٱلْأَوَّلِينَ",
      en: "“Then have they not reflected over the word, or has there come to them that which had not come to their forefathers?”",
      ref: "Surah Al-Mu'minun (23:68)",
      note: "The same rebuke a third time, and again to those refusing it.",
      noteAr: "العتاب نفسه ثالثة، ولمن ردّه أيضًا."
    }
  ],

  /* The method. Deliberately short and usable — five questions a
     reader can hold in their head while reading, not a lecture. */
  methodTitle: "The five questions",
  methodTitleAr: "الأسئلة الخمسة",
  methodLead: "Tadabbur is not a mood. It is a set of questions you put to the text, and “why” is the one that opens all the others.",
  methodLeadAr: "ليس التدبّر حالًا وجدانيًّا، وإنما هو أسئلةٌ تُوجَّه إلى النصّ، و«لماذا» هي التي تفتح سائرها.",
  method: [
    { q: "Why is this surah here?", qAr: "لِمَ جاءت هذه السورة هنا؟",
      d: "Not when it was revealed — where it was placed, and what sits before and after it.",
      dAr: "لا متى نزلت، بل أين وُضعت، وما الذي قبلها وما الذي بعدها." },
    { q: "Why this word and not its neighbour?", qAr: "لِمَ هذه الكلمة دون أختها؟",
      d: "Arabic has near-synonyms that are not equal. Praise is not thanks. One is not unique. Owner is not king.",
      dAr: "في العربية ألفاظٌ متقاربة غير متساوية: فالحمد ليس الشكر، والأحد ليس الواحد، والمالك ليس الملك." },
    { q: "Why this order?", qAr: "لِمَ هذا الترتيب؟",
      d: "Fronting a word gives it exclusivity. Naming the lesser thing first and then the greater is an argument, not decoration.",
      dAr: "تقديم الكلمة يفيد الحصر، وذكر الأدنى ثم الأعلى حجّةٌ لا زينة." },
    { q: "Where else does this word appear?", qAr: "أين وردت هذه الكلمة أيضًا؟",
      d: "A word carries its other places with it. The straight path is always singular; the ways off it are always plural.",
      dAr: "الكلمة تحمل مواضعها الأخرى معها: فالصراط مفردٌ أبدًا، والسبل جمعٌ أبدًا." },
    { q: "What does another verse add that this one leaves open?", qAr: "ما الذي تُتمّه آيةٌ أخرى ممّا تركته هذه؟",
      d: "This is the most striking one. A verse says Allah favoured them and does not say who they are — and a verse in another surah names them exactly.",
      dAr: "وهذا أعجبها: تقول الآية إنّ الله أنعم عليهم ولا تُسمّيهم، فتأتي آيةٌ في سورة أخرى فتُسمّيهم على التعيين." }
  ],

  notice: "This section explains language and meaning. It is not a fatwa, and it does not replace a scholar or a full tafsir. Where the scholars differed, both readings are given so you can weigh them yourself.",
  noticeAr: "هذا القسم في بيان اللغة والمعنى، وليس فتوى، ولا يُغني عن عالمٍ ولا عن تفسيرٍ مطوَّل. وحيث اختلف أهل العلم ذُكر القولان لتَزِنَ بنفسك."
};

/* ------------------------------------------------------------
   Per-surah tadabbur.
   Keyed by surah number. `ayat` may be sparse — a surah may carry
   only some of its verses (2:255 is the obvious case), and the
   panel says which verses it has rather than implying the rest.
   ------------------------------------------------------------ */
const TADABBUR = {

  /* ==========================================================
     1 — AL-FATIHAH
     The surah the owner asked about by name: why does the Book
     open here, why seven, and why al-hamd rather than ash-shukr.
     ========================================================== */
  1: {
    surahTitle: "Why does the Quran open with this surah?",
    surahTitleAr: "لِمَ افتُتح القرآن بهذه السورة؟",
    surahWhy: [
      {
        h: "It is not the first that was revealed — it is the first that was placed",
        hAr: "ليست أوّل ما نزل، وإنما أوّل ما وُضع",
        en: "The first revelation was “Read, in the name of your Lord who created” — the opening of Surah Al-'Alaq, surah 96. Al-Fatihah is placed first. Those are two different things, and the difference is the whole point: the order of the Book is not the order it came down in. Someone decided what stands at the door, and it was not chronology.",
        ar: "أوّل ما نزل ﴿ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ﴾ من سورة العلق، وهي السادسة والتسعون. وأمّا الفاتحة فقد وُضعت أوّلًا. وهذان أمران مختلفان، وفي الفرق بينهما المقصود كلّه: فترتيب المصحف ليس ترتيب النزول، وثمّة قصدٌ في الذي جُعل على الباب، وليس هو التاريخ.",
        ref: "Sahih al-Bukhari 4956 — Aishah",
        strength: "hadith"
      },
      {
        h: "The whole Quran is Allah speaking to you. This surah is you speaking to Allah.",
        hAr: "القرآن كلّه خطابٌ من الله إليك، وهذه السورة خطابٌ منك إلى الله",
        en: "Read the 113 surahs that follow and they address the reader: He tells, commands, warns, promises. Al-Fatihah runs the other way. It is praise, then a pledge, then a request — the servant speaking upward. The Book opens with the human being asking, and everything after it is the answer.\n\nThat is not a poetic way of putting it. It is structural, and the join is visible: the last thing Al-Fatihah asks for is guidance — “Guide us to the straight path.” Turn the page. The second surah opens: “This is the Book, no doubt in it, guidance for the God-conscious.” You asked for guidance and were handed the Book. The question is the end of surah one; the answer is the start of surah two.",
        ar: "اقرأ الثلاث عشرة بعد المئة التي تليها تجدها خطابًا للقارئ: يُخبر ويأمر ويُنذر ويَعِد. وأمّا الفاتحة فعلى العكس: ثناءٌ ثم عهدٌ ثم سؤال — عبدٌ يتكلّم صاعدًا. فافتُتح الكتاب بسؤال الإنسان، وما بعده جوابه.\n\nوليس هذا تحسينًا في العبارة، بل هو في بناء السورتين، والوصل ظاهر: فآخر ما سألته الفاتحة الهداية ﴿ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ﴾. ثم اقلب الصفحة تجد مطلع البقرة: ﴿ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ﴾. سألتَ الهدى فنُووِلتَ الكتاب. فالسؤال خاتمة الأولى، والجواب فاتحة الثانية.",
        ref: "Surah Al-Fatihah (1:6) and Surah Al-Baqarah (2:2)",
        strength: "quran"
      },
      {
        h: "Why only seven verses?",
        hAr: "ولِمَ كانت سبع آيات؟",
        en: "Because the Quran itself calls it the seven. “And We have certainly given you seven of the oft-repeated and the Grand Quran” — Surah Al-Hijr, verse 87. The number is not an accident of length that someone noticed afterwards; it is named in revelation, and named as a gift set beside the Quran itself.\n\nThe Prophet ﷺ then identified which seven. He told Abu Sa'id ibn al-Mu'alla he would teach him the greatest surah in the Quran, and said it was “Al-hamdu lillahi rabbi-l-'alamin — that is the seven oft-repeated and the Grand Quran which I have been given.”\n\nAnd “oft-repeated” is literal. It is the one surah without which the prayer is not valid, so a Muslim says it at least seventeen times a day.",
        ar: "لأنّ القرآن سمّاها السبع. قال تعالى: ﴿وَلَقَدْ ءَاتَيْنَٰكَ سَبْعًۭا مِّنَ ٱلْمَثَانِى وَٱلْقُرْءَانَ ٱلْعَظِيمَ﴾ الحجر: ٨٧. فالعدد ليس أمرًا عرَض من طول السورة فتنبّه له أحدٌ بعدُ، وإنما سُمّي في الوحي، وجُعل عطيّةً قُرنت بالقرآن نفسه.\n\nثم بيّن النبيّ ﷺ أيّ سبعٍ هي، إذ قال لأبي سعيد بن المعلّى إنه يعلّمه أعظم سورة في القرآن، فقال: «ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ هي السبع المثاني والقرآن العظيم الذي أوتيتُه».\n\nو«المثاني» على ظاهرها، فهي السورة التي لا تصحّ الصلاة إلا بها، فيقولها المسلم في يومه سبع عشرة مرّة على الأقلّ.",
        ref: "Surah Al-Hijr (15:87) · Sahih al-Bukhari 4474 · Sahih al-Bukhari 4704 · Sahih al-Bukhari 756",
        strength: "hadith"
      },
      {
        h: "It is called the Mother of the Book",
        hAr: "وسُمّيت أمّ الكتاب",
        en: "“The Umm — the substance — of the Quran is the seven oft-repeated verses and the Grand Quran.” Umm in Arabic is the origin a thing returns to. The name is a claim: everything the Book will say over 6,236 verses is present in these seven in summary — who is praised, who is worshipped, who is asked, and the two ways a person goes wrong.",
        ar: "«أمّ القرآن هي السبع المثاني والقرآن العظيم». والأمّ في العربية الأصل الذي يُرجع إليه. والتسمية دعوى: أنّ ما سيقوله الكتاب في ستّة آلاف ومئتين وستّ وثلاثين آية حاضرٌ في هذه السبع مجملًا — من المحمود، ومن المعبود، ومن المسؤول، والطريقان اللذان يزلّ فيهما الناس.",
        ref: "Sahih al-Bukhari 4704 — Abu Hurairah",
        strength: "hadith"
      }
    ],

    ayat: [
      {
        n: 1,
        ar: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
        why: "The Book opens by naming the one it comes from, before it says anything at all. Note what is NOT here: no author's name, no date, no place. The first thing named is Allah, and the two names chosen out of all His names are both mercy.",
        whyAr: "افتُتح الكتاب بتسمية الذي جاء منه قبل أن يقول شيئًا. وتأمّل ما ليس فيه: لا اسم مؤلّف، ولا تاريخ، ولا مكان. فأوّل مذكورٍ هو الله، والاسمان المختاران من بين أسمائه كلّها كلاهما في الرحمة.",
        words: [
          {
            w: "ٱسْم",
            t: "ism",
            meaning: "From the root s-m-w, to be elevated — a name is what raises a thing into being known. The phrase is “by the name of”, not “in the name of” as a title: it is seeking help and blessing by Him, not announcing an authority.",
            meaningAr: "من مادّة (س م و) وهو العلوّ، فالاسم ما يرتفع به المسمّى إلى أن يُعرف. والباء للاستعانة والتبرّك، لا لإعلان سلطان.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry س م و",
            strength: "lugha"
          },
          {
            w: "ٱلرَّحْمَٰن",
            t: "ar-Rahman",
            meaning: "On the form fa'lan, which in Arabic carries fullness and overflow — mercy at its widest, reaching everyone.",
            meaningAr: "على وزن فَعْلان، وهو في العربية للامتلاء والفيض — رحمةٌ في أوسع مدًى تعمّ الخلق.",
            instead: "Never used for anyone but Allah. You may call a man rahim; you may not call him rahman.",
            insteadAr: "ولا يُطلق على غير الله. فقد يُقال للرجل رحيم، ولا يُقال له رحمن.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ر ح م",
            strength: "lugha"
          },
          {
            w: "ٱلرَّحِيم",
            t: "ar-Rahim",
            meaning: "On the form fa'il, which in Arabic marks a settled, permanent attribute rather than an overflowing one.",
            meaningAr: "على وزن فَعِيل، وهو في العربية للصفة الثابتة اللازمة لا للفيض العارض.",
            instead: "This one the Quran does use for a human being — the Prophet ﷺ is called “to the believers kind and merciful”, ra'uf rahim, in Surah At-Tawbah 9:128. Which is itself the proof that the two words are not interchangeable: one of them was available to describe a man, and the other was not.",
            insteadAr: "وهذا اللفظ استعمله القرآن للبشر، فوُصف النبيّ ﷺ بأنه ﴿بِٱلْمُؤْمِنِينَ رَءُوفٌۭ رَّحِيمٌۭ﴾ التوبة: ١٢٨. وهذا نفسه برهانٌ على أنّ اللفظين غير مترادفين: فأحدهما صحّ وصف الرجل به، والآخر لم يصحّ.",
            source: "Surah At-Tawbah (9:128)",
            strength: "quran"
          }
        ],
        differ: {
          title: "Is the Basmalah itself a verse of Al-Fatihah?",
          titleAr: "هل البسملة آيةٌ من الفاتحة؟",
          views: [
            { who: "Ash-Shafi'i and those who followed him", whoAr: "الشافعي ومن تبعه",
              view: "Yes — it is the first verse of Al-Fatihah, counted in the seven, and recited aloud in the loud prayers.",
              viewAr: "نعم، هي الآية الأولى من الفاتحة، معدودةٌ في السبع، ويُجهر بها في الجهرية." },
            { who: "Abu Hanifah, Malik, Ahmad and those who followed them", whoAr: "أبو حنيفة ومالك وأحمد ومن تبعهم",
              view: "No — it is a verse of the Quran written to separate the surahs, and on this reading the seven are counted by splitting the last verse instead. Malik held it is not recited in the obligatory prayer at all.",
              viewAr: "لا، بل هي آيةٌ من القرآن كُتبت للفصل بين السور، وعلى هذا تُعدّ السبع بتجزئة الآية الأخيرة. وذهب مالك إلى أنها لا تُقرأ في المكتوبة." }
          ],
          weight: "Both are long-standing positions of major schools, and the disagreement is genuine and unresolved — it is not a case where the weight clearly falls one way. The counting used on this page follows the Kufan numbering, in which the Basmalah is verse 1, because that is the numbering of the printed Madani Mushaf the site follows throughout.",
          weightAr: "والقولان مذهبان معتبران قديمان، والخلاف حقيقيٌّ لم يُحسم، وليس ممّا يترجّح فيه أحد الطرفين ترجّحًا ظاهرًا. والعدّ في هذه الصفحة على الكوفيّ الذي تكون فيه البسملة الآية الأولى، لأنه عدّ المصحف المدنيّ المطبوع الذي يجري عليه الموقع كلّه.",
          strength: "ikhtilaf"
        }
      },

      {
        n: 2,
        ar: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
        why: "The first thing the servant says is not a request. It is praise — and the request does not come until verse 6. Four verses of who He is before one word of what I want. That order is itself an instruction about how to ask.",
        whyAr: "أوّل ما يقوله العبد ليس سؤالًا، وإنما ثناء، ولا يأتي السؤال إلا في الآية السادسة. أربع آياتٍ في مَن هو، قبل كلمةٍ واحدة فيما أريد. وهذا الترتيب نفسه تعليمٌ لكيفيّة السؤال.",
        words: [
          {
            w: "ٱلْحَمْد",
            t: "al-hamd",
            meaning: "Praise of someone for an excellence that is his — whether or not he has ever done anything for you.",
            meaningAr: "الثناء على المرء بفضيلةٍ هي فيه، أعطاك أو لم يُعطك.",
            instead: "This is the best door into the whole surah. Arabic had three words available and took this one.\n\nAL-MADH (المدح) is praise of anything at all — you can praise a stone for being beautiful, and you can praise what does not deserve it. Too wide.\n\nASH-SHUKR (الشكر) is thanks, and it only exists in response to a favour done TO YOU. It is reactive. It has to be triggered.\n\nAL-HAMD sits between them: praise for what someone IS, which does not wait on what you received.\n\nHere is Ar-Raghib in his own words, and it is worth reading twice: “Al-hamd of Allah is praising Him for excellence, and it is NARROWER than al-madh and WIDER than ash-shukr… every shukr is hamd, and not every hamd is shukr; and every hamd is madh, and not every madh is hamd.”\n\nHe also gives the test that separates madh from hamd: madh can be for what a person did not choose — you may praise a man for being tall, or for a handsome face. Hamd is for what he chose and did: his generosity, his knowledge. So madh will attach to anything; hamd attaches to what was willed.\n\nNow see what the choice does. Had the verse been “ash-shukru lillah”, the opening of the Book would have made Allah's worth depend on what He has handed you, and a person who had been given nothing would have had nothing to open with. “Al-hamdu lillah” says He is worthy of praise in Himself. That is precisely why someone who has just lost everything can still say it and not be lying.",
            insteadAr: "وهذا خير بابٍ إلى السورة كلّها. فقد كان في العربية ثلاثة ألفاظ فاختارت هذا.\n\nالمدح: ثناءٌ على كلّ شيء، فقد تمدح الحجر لحُسنه، وقد تمدح من لا يستحقّ. فهو أوسع من المراد.\n\nالشكر: لا يكون إلا في مقابلة نعمةٍ أُسديت إليك، فهو ردُّ فعلٍ لا يقع ابتداءً.\n\nوالحمد بينهما: ثناءٌ على ما هو عليه، لا يتوقّف على ما نِلتَ منه.\n\nوهذا نصّ الراغب بلفظه، وهو ممّا يُقرأ مرّتين: «الحَمْدُ لله تعالى: الثناء عليه بالفضيلة، وهو أخصّ من المدح وأعمّ من الشكر… فكلّ شكرٍ حمد، وليس كلّ حمدٍ شكرًا، وكلّ حمدٍ مدح، وليس كلّ مدحٍ حمدًا».\n\nوذكر أيضًا الفارق بين المدح والحمد: أنّ المدح يقع على ما ليس للمرء فيه اختيار، «فقد يُمدح الإنسان بطول قامته وصباحة وجهه»، وأمّا الحمد فعلى ما اختاره وفعله: بذلِ ماله وسخائه وعلمه. فالمدح يتعلّق بكلّ شيء، والحمد يتعلّق بما وقع عن إرادة.\n\nوانظر ماذا صنع هذا الاختيار: لو قيل «الشكر لله» لعُلّق مطلعُ الكتاب باستحقاقه على ما ساقه إليك، ولما وجد من لم يُعطَ شيئًا ما يفتتح به. فقولُه ﴿ٱلْحَمْدُ لِلَّهِ﴾ إثباتٌ أنه محمودٌ لذاته. ولهذا يقولها من فقد كلّ شيء آنفًا فلا يكون كاذبًا.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ح م د (Shamela ed., p. 238)",
            strength: "lugha"
          },
          {
            w: "ٱلْ (in ٱلْحَمْد)",
            t: "the definite article",
            meaning: "Not “praise” in general — the alif-lam here is for taking in the whole category. Every kind of praise there is, from anyone, for anything, belongs to Allah.",
            meaningAr: "ليست «حمدًا» مطلقًا، فالألف واللام لاستغراق الجنس: كلّ حمدٍ يقع من أيّ حامدٍ على أيّ شيء فهو لله.",
            source: "Tafsir at-Tabari",
            strength: "tafsir"
          },
          {
            w: "The sentence has no verb",
            t: "jumlah ismiyyah",
            meaning: "It does not say “we praise Allah”, which would tie the praise to us and to the moment we said it. It is a nominal sentence, which in Arabic states something standing and permanent: praise belongs to Allah — whether or not anyone is currently praising.",
            meaningAr: "لم يقل «نحمد الله» فيَعلَق الحمدُ بنا وبوقت نطقنا به. وإنما هي جملة اسميّة، وهي في العربية للثبوت والدوام: فالحمد لله حَمِدَ الحامدون أو لم يحمدوا.",
            source: "Tafsir at-Tabari",
            strength: "tafsir"
          },
          {
            w: "رَبّ",
            t: "rabb",
            meaning: "Ar-Raghib: the root meaning is tarbiyah — bringing a thing into being state after state until it is complete. So it is not only “Lord” or “master”; it is the one who raises and carries a thing all the way to what it was meant to become.",
            meaningAr: "قال الراغب: الربّ في الأصل التربية، وهو إنشاء الشيء حالًا فحالًا إلى حدّ التمام. فليس المعنى «السيّد» فحسب، بل الذي يُنشئ الشيء ويبلغ به تمامه.",
            instead: "Which is why “rabb al-'alamin” is a heavier claim than “malik al-'alamin” would have been. A king rules what already exists. A rabb is bringing it, continuously, to completion.",
            insteadAr: "ولهذا كان ﴿رَبِّ ٱلْعَٰلَمِينَ﴾ أثقل من «ملك العالمين» لو قيلت. فالملك يحكم ما هو كائن، والربّ يبلغ بالشيء تمامه شيئًا فشيئًا.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ر ب ب (Shamela ed., p. 318)",
            strength: "lugha"
          }
        ]
      },

      {
        n: 3,
        ar: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
        why: "The two names are said again, one verse after the Basmalah said them. Repetition in the Quran is never filler, so the question is what the second saying adds.\n\nIn the Basmalah they were the name under which you begin. Here they come immediately after “Lord of all the worlds” — and that placement is the answer. Having heard that He is Lord of everything that exists, a person could reasonably expect the next word to be about power. It is mercy instead. The attribute chosen to follow absolute lordship is the gentlest one He has, and it is said twice so it is not missed.",
        whyAr: "أُعيد الاسمان بعد آيةٍ من ذكرهما في البسملة. والتكرار في القرآن ليس حشوًا، فالسؤال: ما الذي زاده الذكر الثاني؟\n\nكانا في البسملة الاسم الذي تبدأ به. وأمّا هنا فجاءا عقب ﴿رَبِّ ٱلْعَٰلَمِينَ﴾، وفي هذا الموضع الجواب: فمن سمع أنه ربّ كلّ موجود، كان الظنّ أن يعقُب ذلك ذكر القدرة، فإذا الذي عقَبه الرحمة. فالصفة المختارة بعد الربوبيّة المطلقة ألطفُ صفاته، وكُرّرت لئلّا تُغفَل.",
        links: [
          {
            ref: "Surah Al-A'raf (7:156)",
            ar: "وَرَحْمَتِى وَسِعَتْ كُلَّ شَىْءٍۢ",
            en: "“And My mercy encompasses all things.”",
            how: "The same pairing again — the reach of the lordship and the reach of the mercy are stated in the same breath.",
            howAr: "والقِران نفسه: سَعة الربوبيّة وسَعة الرحمة مذكورتان معًا."
          }
        ],
        differ: {
          title: "What exactly separates ar-Rahman from ar-Rahim?",
          titleAr: "بِمَ يفترق الرحمن عن الرحيم؟",
          views: [
            { who: "Reported from Ibn Abbas and taken up by many of the mufassirun", whoAr: "مرويٌّ عن ابن عباس وأخذ به كثيرٌ من المفسّرين",
              view: "Ar-Rahman is His mercy to all creation in this world, believer and disbeliever alike; ar-Rahim is His mercy reserved for the believers in the Hereafter.",
              viewAr: "الرحمن برحمته العامّة لجميع الخلق في الدنيا مؤمنِهم وكافرِهم، والرحيم برحمته الخاصّة بالمؤمنين في الآخرة." },
            { who: "Others among the linguists", whoAr: "وذهب غيرهم من أهل اللغة",
              view: "The difference is one of form rather than of who receives it: fa'lan is the fuller and more overwhelming, fa'il the more settled and lasting — so the pair together give mercy that is both vast and permanent.",
              viewAr: "إلى أنّ الفرق في البناء لا في المرحوم: ففَعْلان أبلغ وأشدّ امتلاءً، وفَعِيل أثبت وأدوم، فاجتمع باللفظين اتّساع الرحمة ودوامها." }
          ],
          weight: "The first is the more widely transmitted among the tafsir works; the second is not opposed to it so much as describing the same pair from the side of the language. Neither is a matter of creed, and a reader may hold both.",
          weightAr: "والأوّل أشهر في كتب التفسير نقلًا، والثاني ليس مضادًّا له بل هو وصفٌ للأمر نفسه من جهة اللغة. وليس هذا من مسائل الاعتقاد، وللقارئ أن يأخذ بهما جميعًا.",
          strength: "ikhtilaf"
        }
      },

      {
        n: 4,
        ar: "مَٰلِكِ يَوْمِ ٱلدِّينِ",
        why: "After mercy, the Day of accounting. The surah has now placed the two things a heart needs held together — that He is merciful, and that there is a day of reckoning. Hope without the reckoning becomes carelessness; the reckoning without hope becomes despair. They are put one verse apart on purpose.",
        whyAr: "بعد الرحمة، يومُ الحساب. فقد جمعت السورة الآن ما يحتاج القلبُ إلى الجمع بينه: أنه رحيم، وأنّ ثمّ يومًا يُحاسَب فيه. فالرجاءُ بلا حسابٍ يصير إهمالًا، والحسابُ بلا رجاءٍ يصير قنوطًا، فجُعلا على آيةٍ واحدةٍ من التفاوت قصدًا.",
        words: [
          {
            w: "ٱلدِّين",
            t: "ad-din",
            meaning: "Here it does not mean “religion”. Ar-Raghib gives the sense of requital — al-jaza' — recompense for what was done. Yawm ad-din is the Day of Recompense.",
            meaningAr: "ليست هنا بمعنى المِلّة. قال الراغب في معناها الجزاء، أي المكافأة على العمل. فيوم الدين يوم الجزاء.",
            instead: "The same three letters carry both senses, and the overlap is itself the lesson: what you follow is what you are paid for.",
            insteadAr: "والحروف الثلاثة تحمل المعنيين، وفي اشتراكهما فائدة: فالذي تدين به هو الذي تُجزى عليه.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry د ي ن",
            strength: "lugha"
          }
        ],
        differ: {
          title: "مَٰلِكِ or مَلِكِ — Owner, or King?",
          titleAr: "﴿مَٰلِكِ﴾ أم ﴿مَلِكِ﴾؟",
          views: [
            { who: "'Asim and al-Kisa'i read مَٰلِك with the long alif", whoAr: "قرأ عاصم والكسائي ﴿مَٰلِكِ﴾ بالألف",
              view: "Malik — Owner. Ownership: the one to whom the Day belongs and who disposes of it as He wills.",
              viewAr: "مالك، من المِلك، أي صاحب ذلك اليوم المتصرّف فيه كيف شاء." },
            { who: "Nafi', Ibn Kathir, Abu 'Amr, Ibn 'Amir and Hamzah read مَلِك", whoAr: "وقرأ نافع وابن كثير وأبو عمرو وابن عامر وحمزة ﴿مَلِكِ﴾",
              view: "Malik — King. Sovereignty: the one who commands on that Day and whose word runs.",
              viewAr: "مَلِك، من المُلك، أي الذي له الأمر يومئذٍ ونفاذ الحكم." }
          ],
          weight: "This is not a disagreement to be settled — both are established, mutawatir recitations, and both are the Quran. What is worth noticing is what the pair gives together: an owner may do as he wishes with what is his, and a king commands those under him. Held together they say that on that Day both the property and the authority are His alone. The printed Madani Mushaf that this site follows prints مَٰلِك.",
          weightAr: "وليس هذا خلافًا يُرجَّح فيه، فكلتا القراءتين متواترةٌ ثابتة، وكلتاهما قرآن. وإنما الذي يُتأمَّل ما أفادتاه مجتمعتين: فالمالك يتصرّف فيما يملك كيف شاء، والملك ينفذ أمره فيمن تحته. فاجتمع أنّ المُلك والأمر يومئذٍ له وحده. والمصحف المدنيّ المطبوع الذي يجري عليه الموقع فيه ﴿مَٰلِكِ﴾.",
          strength: "qiraah"
        }
      },

      {
        n: 5,
        ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        why: "This is the hinge of the surah, and three separate things happen in six words.",
        whyAr: "هذه مِفصل السورة، وفيها ستّ كلماتٍ وقعت فيها ثلاثة أمور.",
        words: [
          {
            w: "إِيَّاكَ نَعْبُدُ",
            t: "the object comes first",
            meaning: "The ordinary way to say this in Arabic is na'buduka — “we worship You”, verb then object. The verse puts the object in front: You — we worship. Fronting a word in Arabic gives exclusivity.",
            meaningAr: "الأصل في العربية «نعبدك»: فعلٌ ثم مفعول. فقدّمت الآية المفعول: ﴿إِيَّاكَ نَعْبُدُ﴾. وتقديم ما حقّه التأخير يفيد الحصر.",
            instead: "So the meaning is not “we worship You” — which leaves open that we worship others too — but “You alone do we worship”. The exclusivity of tawhid is carried by the word order, before any word for “only” is used. Change the order back and the creed leaks out of the sentence.",
            insteadAr: "فليس المعنى «نعبدك» — وهو لا يمنع أن نعبد معك غيرك — بل «لا نعبد إلا إياك». فحصرُ التوحيد محمولٌ على الرتبة قبل أن يُؤتى بأداة حصر. ولو رُدّ الترتيب لخرج معنى العقيدة من الجملة.",
            source: "Tafsir at-Tabari",
            strength: "tafsir"
          },
          {
            w: "The turn from “He” to “You”",
            t: "iltifat",
            meaning: "Verses 1 to 4 speak ABOUT Allah in the third person — praise belongs to Him, He is the Lord, He is the Merciful. Verse 5 turns and speaks TO Him: You. Arabic calls this shift iltifat.",
            meaningAr: "الآيات من الأولى إلى الرابعة في الغَيبة: الحمد له، وهو الربّ، وهو الرحمن. ثم التفتت الخامسة إلى الخطاب: ﴿إِيَّاكَ﴾. وهذا الذي تسمّيه العربية الالتفات.",
            instead: "And notice where the turn falls: exactly when the servant stops describing and starts committing. You may speak about someone from a distance; a pledge has to be made to their face. The grammar moves the speaker from describing God to standing in front of Him, and it happens in the middle of the surah without a word of narration to announce it.",
            insteadAr: "وتأمّل موضع الالتفات: عند انتقال العبد من الوصف إلى العهد. فقد يُتكلَّم عن الغائب من بُعد، وأمّا العهد فلا يكون إلا مواجهةً. فنقل النظمُ المتكلّمَ من وصف الله إلى الوقوف بين يديه، ووقع ذلك في وسط السورة بغير خبرٍ يُنبّه عليه.",
            source: "Tafsir at-Tabari",
            strength: "tafsir"
          },
          {
            w: "نَعْبُدُ",
            t: "we, not I",
            meaning: "The verb is plural although a person may be entirely alone when saying it — in an empty room, in the middle of the night.",
            meaningAr: "الفعل بصيغة الجمع وإن كان قائله وحده — في بيتٍ خالٍ، في جوف الليل.",
            instead: "Not a'budu, “I worship”. Said alone, you are still saying it as one of a body. The individual is not the unit of this religion at the very moment he is most alone with his Lord.",
            insteadAr: "لا «أعبد». فأنت وإن انفردتَ قائلٌ بلسان جماعة. فليس الفرد وحدَه هو الأصل في هذا الدين في أشدّ أحوال انفراده بربّه.",
            source: "Tafsir at-Tabari",
            strength: "tafsir"
          },
          {
            w: "نَعْبُدُ before نَسْتَعِينُ",
            t: "worship, then help",
            meaning: "Worship is named first and help second, though a person needs the help in order to worship.",
            meaningAr: "قُدّمت العبادة على الاستعانة، مع أنّ العبد إنما يعبد بمعونته.",
            instead: "The order teaches what is owed before what is wanted. His right comes first; my need comes second. Reverse the two and the verse becomes a transaction.",
            insteadAr: "ففي الترتيب تقديمُ ما يجب على ما يُطلب: حقُّه أوّلًا وحاجتي ثانيًا. ولو عُكسا لصارت الآية معاوضة.",
            source: "Tafsir at-Tabari",
            strength: "tafsir"
          }
        ]
      },

      {
        n: 6,
        ar: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
        why: "The first and only request in the surah, and it is not for health, provision or safety. Out of everything a person could ask for at the opening of the Book, the one thing asked for is direction.\n\nAnd it is asked by people who are already Muslim, already praying, already saying this. Which tells you guidance is not a thing you are handed once and keep. It is asked for again in the next rak'ah.",
        whyAr: "هو السؤال الأوّل والوحيد في السورة، وليس في عافيةٍ ولا رزقٍ ولا أمن. فمن بين كلّ ما يسأله الإنسان في مفتتح الكتاب، كان المسؤول الهداية.\n\nويسألها من هو مسلمٌ أصلًا، يصلّي، ويقول هذا. وفي هذا أنّ الهداية ليست شيئًا يُعطاه المرء مرّةً فيبقى معه، فهو سائلها في الركعة التي تليها.",
        words: [
          {
            w: "ٱلصِّرَٰط",
            t: "as-sirat",
            meaning: "Ar-Raghib's entry is short and worth quoting exactly, because it does something the longer definitions do not: “As-Sirat: the straight road” — and then, to define it, he reaches straight for a verse: “And this is My path, straight.”\n\nHe defines the word by where the Quran uses it. That is the method this whole section is built on, and the lexicon itself is doing it.",
            meaningAr: "مادّة الراغب قصيرةٌ يحسن نقلها بنصّها، لأنّ فيها ما ليس في التعريفات المطوّلة: «الصِّرَاطُ: الطّريقُ المستقيمُ»، ثم استشهد لتعريفه بآية: ﴿وَأَنَّ هذا صِراطِي مُسْتَقِيماً﴾.\n\nفعرّف اللفظ بموضعه من القرآن، وهذا هو المنهج الذي بُني عليه هذا القسم كلّه، والمعجم نفسه يصنعه.",
            instead: "The wider description often attached to this word — a broad, made road that everyone can travel — is real, but it comes from the other lexicons and the tafsir works, NOT from Ar-Raghib, whose entry says only that it is the straight road. Kept separate here so the attribution stays honest.\n\nWhat can be said from the Quran's own usage is the next point below, and it is stronger.",
            insteadAr: "وأمّا الوصف الأوسع الذي يُقرن بهذا اللفظ كثيرًا — أنه الجادّة الواسعة الموطوءة التي يسلكها الناس — فهو ثابتٌ في كتب اللغة والتفسير، وليس من كلام الراغب، فإنّ مادّته لم تزد على أنه الطريق المستقيم. وفُصل هنا لتبقى النسبة على وجهها.\n\nوأمّا الذي يصحّ من استعمال القرآن نفسه فهو الوجه الذي يليه، وهو أقوى.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ص ر ط (Shamela ed., p. 465)",
            strength: "lugha"
          },
          {
            w: "Always singular",
            t: "sirat vs subul",
            meaning: "This is the fourth question — where else does the word appear — and it pays immediately. Look at how the Quran uses the two words and a pattern appears that is not an accident of style.",
            meaningAr: "وهذا هو السؤال الرابع — أين وردت الكلمة أيضًا — وثمرته ظاهرة. فانظر كيف استعمل القرآن اللفظين يبِن لك نظمٌ ليس من مصادفة الأسلوب.",
            instead: "The straight path is singular every time. The ways leading off it are plural every time. Surah Al-An'am states it outright: “And this is My path, straight, so follow it. And do not follow the [other] ways, for they will separate you from His way.” Sirati — singular, mine. As-subul — plural, and the verb that follows them is “they will scatter you”. The grammar carries the doctrine: one road, many exits.",
            insteadAr: "فالصراط المستقيم مفردٌ في كلّ موضع، والسبل المتفرّعة عنه جمعٌ في كلّ موضع. وقد صرّحت به سورة الأنعام: ﴿وَأَنَّ هَٰذَا صِرَٰطِى مُسْتَقِيمًۭا فَٱتَّبِعُوهُ ۖ وَلَا تَتَّبِعُوا۟ ٱلسُّبُلَ فَتَفَرَّقَ بِكُمْ عَن سَبِيلِهِۦ﴾. فـ«صراطي» مفردٌ مضاف، و«السبل» جمع، والفعل بعدها ﴿فَتَفَرَّقَ بِكُمْ﴾. فحمل النظمُ المعنى: طريقٌ واحد، ومخارجُ كثيرة.",
            source: "Surah Al-An'am (6:153)",
            strength: "quran"
          }
        ],
        links: [
          {
            ref: "Surah Al-Baqarah (2:2)",
            ar: "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ",
            en: "“This is the Book about which there is no doubt, a guidance for those conscious of Allah.”",
            how: "The request and its answer sit on either side of the page turn. Al-Fatihah ends asking to be guided; Al-Baqarah opens by handing over the guidance. Read the last verse of surah 1 and the second verse of surah 2 in sequence and the Book is answering the reader.",
            howAr: "السؤال وجوابه على طرفَي الصفحة: خُتمت الفاتحة بسؤال الهداية، وافتُتحت البقرة بتسليم الهدى. فاقرأ آخر الأولى ثم ثانية الثانية على الولاء يتبيّن لك أنّ الكتاب يجيب قارئه."
          }
        ]
      },

      {
        n: 7,
        ar: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
        why: "The path just asked for is now defined — not by describing the road, but by naming who is on it and who is off it. And the two ways of being off it are not the same failure. One knew and did not act. The other acted without knowing. Knowledge without action, and action without knowledge: between them they cover almost every way a sincere person goes wrong.",
        whyAr: "بُيّن الصراط المسؤول الآن، لا بوصف الطريق بل بذكر أهله ومن ليس منهم. والخروجان عنه ليسا خطأً واحدًا: فأحدهما عَلِم ولم يعمل، والآخر عَمِل بلا علم. عِلمٌ بلا عمل، وعملٌ بلا علم، وبينهما تكاد تنحصر وجوه زلل الصادق.",
        words: [
          {
            w: "أَنْعَمْتَ",
            t: "You favoured — said to Him directly",
            meaning: "The favour is a verb in the second person, attributed to Allah plainly: You favoured them.",
            meaningAr: "النعمة فعلٌ مسندٌ إلى الله بالخطاب صريحًا: ﴿أَنْعَمْتَ﴾.",
            source: "The wording of the verse",
            strength: "quran"
          },
          {
            w: "ٱلْمَغْضُوبِ عَلَيْهِمْ",
            t: "those upon whom anger has fallen",
            meaning: "Now watch the grammar change. It does not say “those You were angry with”, which is what the parallel would require. It switches to the passive and leaves the doer unnamed.",
            meaningAr: "ثم تأمّل تغيّر النظم: لم يقل «الذين غضبتَ عليهم» وهو مقتضى المقابلة، بل عدل إلى المبنيّ للمفعول وطوى الفاعل.",
            instead: "The favour is attributed to Him by name; the anger is not. This is adab — the manner of speaking to God — and the Quran does it elsewhere in the mouth of Ibrahim: “And when I fall ill, it is He who cures me.” He does not say “when He makes me ill”. The illness he takes on himself; the cure he gives to Allah. Same restraint, two different surahs, and once you have seen it in one you start seeing it everywhere.",
            insteadAr: "فالنعمة مسندةٌ إليه باسمه، والغضب غير مسند. وهذا من الأدب في الخطاب، وقد جاء نظيره في القرآن على لسان إبراهيم: ﴿وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ﴾، فلم يقل «وإذا أمرضني»، بل نسب المرض إلى نفسه والشفاء إلى ربّه. أدبٌ واحدٌ في سورتين، وإذا أبصرته في موضعٍ أبصرته في مواضع.",
            source: "Surah Ash-Shu'ara (26:80)",
            strength: "quran"
          }
        ],
        links: [
          {
            ref: "Surah An-Nisa (4:69)",
            ar: "وَمَن يُطِعِ ٱللَّهَ وَٱلرَّسُولَ فَأُو۟لَٰٓئِكَ مَعَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم مِّنَ ٱلنَّبِيِّۦنَ وَٱلصِّدِّيقِينَ وَٱلشُّهَدَآءِ وَٱلصَّٰلِحِينَ ۚ وَحَسُنَ أُو۟لَٰٓئِكَ رَفِيقًۭا",
            en: "“And whoever obeys Allah and the Messenger — those will be with the ones upon whom Allah has bestowed favour: of the prophets, the steadfastly truthful, the martyrs and the righteous. And excellent are those as companions.”",
            how: "THIS is the thing worth stopping for: one verse says Allah favoured them and does not say who; another surah names them.\n\nSeventeen times a day a Muslim asks for the path of “those You favoured” — and Al-Fatihah never says who they are. It leaves the phrase open. Then Surah An-Nisa uses the same phrase, alladhina an'ama Allahu 'alayhim, and lists them: the prophets, the truthful, the martyrs, the righteous.\n\nSo the request you have been making your whole life has a named answer sitting in another surah. Put the two together and the prayer becomes concrete: you are asking to be walked in with those four. Neither verse says this on its own. It only appears when you carry one to the other — which is what tadabbur is.",
            howAr: "وهذا موضع الوقوف: آيةٌ تقول أنعم الله عليهم ولا تُسمّيهم، وسورةٌ أخرى تُسمّيهم.\n\nيسأل المسلم في يومه سبع عشرة مرّة صراط ﴿ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ﴾، والفاتحة لا تُبيّن من هم، بل تدع اللفظ مُبهمًا. ثم تأتي سورة النساء باللفظ نفسه ﴿ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم﴾ فتعدّهم: النبيّين والصدّيقين والشهداء والصالحين.\n\nفالسؤال الذي تردّده عمرك كلّه له جوابٌ مُسمًّى في سورةٍ أخرى. فإذا ضممت إحداهما إلى الأخرى صار الدعاء معيَّنًا: إنك تسأل أن تُسلك مع هؤلاء الأربعة. ولا تقول هذا واحدةٌ منهما وحدها، وإنما يظهر بحمل إحداهما على الأخرى، وذلك هو التدبّر."
          }
        ],
        differ: {
          title: "Who are “those upon whom anger has fallen” and “those who went astray”?",
          titleAr: "من ﴿ٱلْمَغْضُوبِ عَلَيْهِمْ﴾ ومن ﴿ٱلضَّآلِّينَ﴾؟",
          views: [
            { who: "A report from the Prophet ﷺ narrated by Adi ibn Hatim", whoAr: "حديثٌ مرفوع من رواية عديّ بن حاتم",
              view: "Identifies al-maghdub 'alayhim with the Jews and ad-dallin with the Christians. It is narrated by at-Tirmidhi and others — OUTSIDE the two Sahihs — and was graded acceptable by a number of the scholars of hadith.",
              viewAr: "فيه تفسير المغضوب عليهم باليهود والضالّين بالنصارى. أخرجه الترمذي وغيره، وهو خارج الصحيحين، وحسّنه جماعةٌ من أهل الحديث." },
            { who: "How the mufassirun understood that report", whoAr: "وكيف فهم المفسّرون هذا الخبر",
              view: "That the verse describes two characteristics, and names the clearest historical example of each — knowledge that was not acted on, and worship that was not built on knowledge. The description travels: a Muslim who learns and does not act has stepped into the first, and one who worships out of invention has stepped into the second. That is precisely why the verse is put in the mouth of the believer as something to ask protection FROM, seventeen times a day, rather than as a verdict on other people.",
              viewAr: "أنّ الآية وصفت وصفين، وسمّى الحديث أظهرَ من وقع فيهما في التاريخ: علمٌ لم يُعمل به، وعبادةٌ لم تُبنَ على علم. والوصف ينتقل: فالمسلم الذي يعلم ولا يعمل قد دخل في الأوّل، والذي يتعبّد بابتداعٍ قد دخل في الثاني. ولهذا جُعلت الآية على لسان المؤمن يستعيذ منها سبع عشرة مرّة في يومه، لا حكمًا يُصدره على الناس." }
          ],
          weight: "The report is authentic enough to be relied on and is outside the two Sahihs, so it is cited here as such and not as Bukhari or Muslim. What the scholars did NOT do is turn it into a standing judgement on individuals: the verse is a prayer against two failures, and the believer saying it is asking to be kept from both.",
          weightAr: "والحديث ممّا يُعتمد عليه، وهو خارج الصحيحين، فنُقل هنا على أنه كذلك لا على أنه في البخاري أو مسلم. والذي لم يصنعه أهل العلم أن يجعلوه حكمًا لازمًا على الأعيان، فالآية دعاءٌ يُستعاذ فيه من خصلتين، وقائلها من المؤمنين إنما يسأل أن يُعصم منهما.",
          strength: "ikhtilaf"
        }
      }
    ]
  },

  /* ==========================================================
     2 — AL-BAQARAH (Ayat al-Kursi only, for now)
     ========================================================== */
  2: {
    surahTitle: "The longest surah — and the answer to what Al-Fatihah just asked",
    surahTitleAr: "أطول السور — وجوابُ ما سألته الفاتحة",
    partial: true,
    surahWhy: [
      {
        h: "It opens by answering the question Al-Fatihah ended on",
        hAr: "افتُتحت بجواب السؤال الذي خُتمت به الفاتحة",
        en: "Al-Fatihah closed with a request: guide us to the straight path. Turn the page and the second verse of this surah hands it over — this is the Book, no doubt in it, guidance.\n\nSo the join between the first two surahs is a question and its answer, and reading them in sequence is how you see it. Then verses 3 to 5 do something the request could not: they describe WHO the guidance actually reaches.",
        ar: "خُتمت الفاتحة بسؤال: ﴿ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ﴾. فاقلب الصفحة تجد ثانية هذه السورة تُسلّمه: ﴿ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ﴾.\n\nفالوصل بين السورتين سؤالٌ وجوابه، ولا يُرى ذلك إلا بقراءتهما على الولاء. ثم تصنع الآيات من الثالثة إلى الخامسة ما لم يصنعه السؤال: تصف **من** تبلغه الهداية.",
        ref: "Surah Al-Fatihah (1:6) and Surah Al-Baqarah (2:2)",
        strength: "quran"
      }
    ],
    ayat: [
      {
        n: 1,
        ar: "الٓمٓ",
        why: "Three letters, and the surah begins with them. Twenty-nine surahs open with disconnected letters like these, and the honest position on them is the one the early scholars took.\n\nSome of the companions and those after them said plainly: Allah knows best what is meant by them. Others offered readings — that they are names of the surahs, or an oath, or an opening that arrests attention. None of these is established from the Prophet ﷺ with a chain that settles the matter.\n\nSo this entry does what the page does everywhere else: it tells you the readings exist, and that none is proven, rather than picking one and dressing it as knowledge. What IS worth noticing is what comes immediately after them — a challenge, in this same surah, to produce a single surah like it. Letters the Arabs used every day, arranged into something they could not answer.",
        whyAr: "ثلاثة أحرفٍ افتُتحت بها السورة. وقد افتُتحت تسعٌ وعشرون سورةً بمثل هذه الحروف المقطّعة، والقول المنصف فيها ما قاله المتقدّمون.\n\nفمن السلف من قال صريحًا: الله أعلم بمراده بها. وذكر آخرون وجوهًا: أنها أسماءٌ للسور، أو قسم، أو افتتاحٌ يستدعي الإصغاء. وليس شيءٌ من ذلك ثابتًا عن النبيّ ﷺ بإسنادٍ يقطع النزاع.\n\nفصنعت هذه البطاقة ما تصنعه الصفحة في كلّ موضع: تُخبرك أنّ الأقوال موجودة وأنه لا شيء منها بثابت، ولا تختار قولًا فتُلبسه ثوب العلم. وأمّا الذي يُتأمَّل حقًّا فما جاء بعدها: التحدّي في هذه السورة نفسها أن يُؤتى بسورةٍ من مثله. حروفٌ كانت العرب تنطق بها كلَّ يوم، نُظمت فيما عجزوا عن معارضته.",
        links: [
          {
            ref: "Surah Al-Baqarah (2:23)",
            ar: "وَإِن كُنتُمْ فِى رَيْبٍۢ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ",
            en: "“And if you are in doubt about what We have sent down upon Our servant, then produce a surah the like of it.”",
            how: "Twenty-two verses after the letters, the challenge is issued — in the surah that opened with them. Read 2:1 and 2:23 together and the arrangement makes an argument the letters alone do not: here are your own letters; now do this with them.",
            howAr: "بعد الحروف باثنتين وعشرين آيةً يأتي التحدّي، في السورة التي افتُتحت بها. فاقرأ ﴿الٓمٓ﴾ مع ﴿فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ﴾ يظهر لك في الترتيب حجّةٌ لا تقولها الحروف وحدها: هذه حروفكم، فاصنعوا بها هذا."
          }
        ]
      },
      {
        n: 2,
        ar: "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ",
        why: "The answer to Al-Fatihah's request, and it arrives in the second verse. But look at the last two words, because they narrow it sharply: guidance — for the God-conscious. Not guidance for everyone who opens it.\n\nWhich raises the obvious question. If a person must already have taqwa to be guided by the Book, and the Book is what produces taqwa, where does anyone begin? The answer the verse itself gives is in the next three verses: it lists what these people do. They are not people who arrived complete. They are people who did something.",
        whyAr: "هو جواب سؤال الفاتحة، جاء في الآية الثانية. غير أنّ في آخره لفظين يُضيّقانه: ﴿هُدًى لِّلْمُتَّقِينَ﴾، لا هدًى لكلّ من فتحه.\n\nوهذا يُورد سؤالًا ظاهرًا: إذا كان لا يهتدي بالكتاب إلا من فيه تقوى، والكتابُ هو الذي تنشأ به التقوى، فمن أين يبدأ أحد؟ وجواب الآية في الثلاث التي بعدها: فإنها تعدّ ما يفعله هؤلاء. فليسوا قومًا جاؤوا تامّين، وإنما هم قومٌ صنعوا شيئًا.",
        words: [
          {
            w: "رَيْب", t: "rayb",
            meaning: "Ar-Raghib defines it precisely, and the precision is the point: “ar-rayb is that you suppose something about a thing, and then it is uncovered as other than what you supposed.” It is not simple doubt. It is a suspicion that turns out to be wrong.",
            meaningAr: "حدّه الراغب حدًّا دقيقًا، وفي الدقّة الفائدة: «فالرَّيْبُ: أن تتوهّم بالشيء أمرًا مّا، فينكشف عمّا تتوهّمه». فليس هو الشكّ المجرّد، وإنما ظنٌّ ينكشف بخلافه.",
            instead: "And he makes the distinction sharper with a second example that decides the meaning. Of “rayba al-manun” — the rayb of death — he says the word is used NOT because its happening is doubted, but because its TIME is. A person is always in rayb about death from the angle of when, never from the angle of whether.\n\nApply that back to this verse and it says more than “there is no doubt in it”. It says: there is nothing in this Book that you will suppose about it and then find to be otherwise. Nothing in it will turn out different from what it appeared to be. That is a claim about the whole Book, made in three words, at the start.",
            insteadAr: "ثم شدّد الفرق بمثالٍ ثانٍ يحسم المعنى: فقال في ﴿رَيْبَ ٱلْمَنُونِ﴾ إنّ اللفظ استُعمل لا لأنّ وقوعه مشكوكٌ فيه، بل لأنّ **وقته** كذلك. فالإنسان أبدًا في ريب المنون من جهة وقته، لا من جهة كونه.\n\nفاحمل ذلك على هذه الآية تجدها أبلغ من «لا شكّ فيه»: إنها تقول إنه ليس في هذا الكتاب شيءٌ تتوهّم فيه أمرًا ثم ينكشف لك بخلافه. لا يخرج شيءٌ منه على غير ما ظهر. دعوى على الكتاب كلّه، في ثلاث كلمات، في مفتتحه.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ر ي ب (Shamela ed., p. 350) — quoted in his own words",
            strength: "lugha"
          },
          {
            w: "ٱلْمُتَّقِين", t: "al-muttaqin",
            meaning: "From the root w-q-y, and Ar-Raghib gives the root sense first: “al-wiqayah is guarding a thing from what harms and injures it.” Then taqwa on top of it: “putting the self into a covering from what it fears — this is its exact sense.”",
            meaningAr: "من مادّة (و ق ي)، وبدأ الراغب بأصلها: «الوِقَايَةُ: حفظُ الشيءِ ممّا يؤذيه ويضرّه». ثم التقوى فوقها: «والتَّقْوَى جعل النّفس في وِقَايَةٍ ممّا يخاف، هذا تحقيقه».",
            instead: "So taqwa is not, at root, “fear of God” — Ar-Raghib says the naming of it as fear came afterwards, by calling a thing by what it leads to. At root it is a SHIELD. You put something between yourself and what would harm you.\n\nThat changes how the verse reads. The Book guides the people who have put something between themselves and harm — who are already taking cover. It is not asking for a feeling. It is asking for a posture, and the next three verses say what the posture consists of.",
            insteadAr: "فليست التقوى في أصلها «الخوف من الله» — قال الراغب إنّ تسميتها خوفًا جاءت بعدُ، من باب تسمية الشيء بما يقتضيه. وإنما أصلها **وِقَاية**: أن تجعل بينك وبين ما يضرّك حاجزًا.\n\nوهذا يغيّر قراءة الآية: فالكتاب يهدي قومًا جعلوا بينهم وبين الأذى وقاية، أي قومًا قد استتروا. فليس المطلوب شعورًا، وإنما هو حالٌ عمليّة، والثلاث الآتية تبيّن ممّ تتركّب.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry و ق ي (Shamela ed., p. 863)",
            strength: "lugha"
          }
        ]
      },
      {
        n: 3,
        ar: "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
        why: "Here is what the muttaqin actually do, and the order is not random. One thing inward, one thing bodily, one thing with your property. Belief, prayer, spending — the heart, the limbs, the wallet. Between them there is nowhere left for a person to claim the description while withholding a part of himself.",
        whyAr: "هذا ما يفعله المتّقون، والترتيب غير عشوائيّ: أمرٌ في الباطن، وأمرٌ بالبدن، وأمرٌ في المال. إيمانٌ وصلاةٌ وإنفاق: القلب والجوارح والمال. فلم يبقَ بينها موضعٌ يدّعي فيه المرء الوصف وهو مانعٌ شيئًا من نفسه.",
        words: [
          {
            w: "ٱلْغَيْب", t: "al-ghayb",
            meaning: "Ar-Raghib begins from the physical: “al-ghayb is the verbal noun of the sun setting and the like — when it is hidden from the eye.” Then it is used for everything absent from the senses, and for what is absent from a person's knowledge.",
            meaningAr: "بدأ الراغب من المحسوس: «الغَيْبُ: مصدر غَابَتِ الشّمسُ وغيرها إذا استترت عن العين». ثم استُعمل في كلّ غائبٍ عن الحاسّة، وفيما يغيب عن علم الإنسان.",
            instead: "And then the sentence that changes the verse. He says: a thing is called ghayb and ghaib WITH RESPECT TO PEOPLE, not with respect to Allah — for nothing is absent from Him.\n\nSo “those who believe in the ghayb” does not mean believing in something mysterious in itself. There is no category of the hidden from Allah's side; the hiddenness is entirely on ours. What is being asked of a person is that he accept there is real, definite, known-to-Allah reality that his senses do not reach — and that he not make his own eyes the measure of what exists.\n\nThat is why it is the FIRST thing listed. Everything after it depends on it.",
            insteadAr: "ثم الجملة التي تُغيّر الآية: قال إنّ الشيء يُقال له غَيْبٌ وغائبٌ **باعتباره بالناس لا بالله تعالى، فإنه لا يغيب عنه شيء**.\n\nفليس معنى ﴿يُؤْمِنُونَ بِٱلْغَيْبِ﴾ الإيمان بشيءٍ مبهمٍ في نفسه. إذ لا غيب من جهته سبحانه، وإنما الغَيبة كلّها من جهتنا نحن. والمطلوب من العبد أن يُقرّ بأنّ ثمّ حقائق ثابتةً معلومةً لله لا تبلغها حواسّه، وألّا يجعل بصره ميزانًا لما هو كائن.\n\nولهذا كان **أوّل** المذكورات، فإنّ ما بعده متفرّعٌ عليه.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry غ ي ب (Shamela ed., p. 598)",
            strength: "lugha"
          },
          {
            w: "يُقِيمُونَ", t: "they establish it — not merely perform it",
            meaning: "The verb is from q-w-m, to make a thing stand upright. It is not “they pray”; it is “they make the prayer stand”.",
            meaningAr: "الفعل من (ق و م): إقامةُ الشيء وجعلُه قائمًا. فليس «يُصلّون» بل ﴿يُقِيمُونَ ٱلصَّلَوٰةَ﴾: يجعلونها قائمة.",
            instead: "The Quran had a simpler verb available — yusallun, they pray — and never uses it for this. It says they make it stand: upright, on time, complete, not leaning. A thing that is standing can also be left to fall over, which is exactly what the surah Al-Ma'un describes later of people who pray and are heedless about it.",
            insteadAr: "وقد كان في العربية ما هو أيسر — «يُصلّون» — ولم يستعمله القرآن هنا. بل قال يُقيمونها: قائمةً في وقتها تامّةً غير مائلة. والقائم يجوز أن يُترك فيسقط، وهو عين ما وصفته سورة الماعون بعدُ في قومٍ يصلّون وهم عن صلاتهم ساهون.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ق و م",
            strength: "lugha"
          },
          {
            w: "مِمَّا رَزَقْنَٰهُمْ", t: "from what We provided them",
            meaning: "Not “from their wealth”. From what WE provided them — the ownership is named before the spending is asked for.",
            meaningAr: "لم يقل «من أموالهم»، بل ﴿مِمَّا رَزَقْنَٰهُمْ﴾: نُسبت الملكيّة قبل أن يُطلب الإنفاق.",
            instead: "And the min is partitive — FROM what We gave, not all of it. The verse asks for a portion and names the source in the same breath, so that giving is framed as passing on something that was handed to you rather than surrendering something that was yours.",
            insteadAr: "و«مِن» للتبعيض: من الذي أعطيناهم لا كلّه. فطلبت الآية بعضًا وسمّت المصدر في نفَسٍ واحد، ليكون البذل تمريرًا لما أُعطيتَه لا تنازلًا عمّا هو لك."
          }
        ]
      },
      {
        n: 4,
        ar: "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْءَاخِرَةِ هُمْ يُوقِنُونَ",
        why: "Belief in what came down to him AND in what came down before him. The verse makes accepting the earlier revelations part of the description of the people this Book guides — the religion is presented as one continuous thing, not as a replacement that begins in year one.\n\nThen the closing clause changes its verb, and that is the thing to stop at.",
        whyAr: "الإيمان بما أُنزل إليه **وبما أُنزل من قبله**. فجعلت الآية تصديق ما تقدّم من الوحي جزءًا من وصف من يهديهم هذا الكتاب: فالدين مسوقٌ على أنه شيءٌ واحدٌ متّصل، لا بديلٌ يبتدئ من عامٍ أوّل.\n\nثم غُيّر الفعل في آخرها، وهذا موضع الوقوف.",
        words: [
          {
            w: "يُوقِنُونَ", t: "yuqinun — not yu'minun",
            meaning: "The verse says they BELIEVE in what was revealed, and then, of the Hereafter, that they have YAQIN — certainty. It changes the word.",
            meaningAr: "قالت الآية ﴿يُؤْمِنُونَ﴾ فيما أُنزل، ثم قالت في الآخرة ﴿هُمْ يُوقِنُونَ﴾، فغيّرت اللفظ.",
            instead: "Iman can be held with the possibility of doubt somewhere behind it. Yaqin is the settling of knowledge so that nothing moves it. Of everything in the list, the one thing given the stronger word is the Hereafter.\n\nAnd the reason is in the structure: the Hereafter is the one item nobody can be shown. The Book you can read; the prayer you can perform; the spending you can see leave your hand. The Day you cannot check. So it is exactly there that the higher word is used — and the pronoun هم is added before it as well, which in Arabic fronts and strengthens: THEY, they are certain of it.",
            insteadAr: "الإيمان قد يُصحبه احتمالُ شكٍّ من ورائه، وأمّا اليقين فسكون العلم بحيث لا يتحرّك. فمن بين ما عُدّ، اللفظ الأقوى جُعل للآخرة وحدها.\n\nوالسبب في النظم: فالآخرة هي الوحيدة التي لا تُعرض على أحد. فالكتاب يُقرأ، والصلاة تُؤدّى، والنفقة تُرى خارجةً من يدك، وأمّا اليوم فلا يُتحقّق منه. فههنا بعينه جيء باللفظ الأعلى، وزيد قبله الضمير ﴿هُمْ﴾، وهو في العربية للتقوية والاختصاص: هم دون غيرهم موقنون به.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat",
            strength: "lugha"
          }
        ]
      },
      {
        n: 5,
        ar: "أُو۟لَٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
        why: "The verdict on the five verses, and every word in it is placed.\n\nعَلَىٰ — UPON guidance, not “with” it or “in” it. The preposition of being mounted on something and carried by it, the way you are upon a riding animal. They are not walking beside the guidance; it is under them, bearing them.\n\nمِّن رَّبِّهِمْ — and it is from their Lord. After four verses listing what THEY do, the guidance is still attributed to Him, not earned by the list. The deeds put them in the way of it; they did not manufacture it.",
        whyAr: "حكمُ الآيات الخمس، وكلُّ لفظٍ فيه موضوع في موضعه.\n\n﴿عَلَىٰ﴾ — على هدًى، لا «مع» هدًى ولا «في» هدًى. وهو حرف الاستعلاء والتمكّن، كما تكون على الدابّة تحملك. فليسوا ماشين إلى جانب الهدى، بل هو تحتهم يقلّهم.\n\n﴿مِّن رَّبِّهِمْ﴾ — وهو من ربّهم. فبعد أربع آياتٍ في تعداد ما صنعوا **هم**، بقيت الهداية منسوبةً إليه سبحانه لا مُستحقّةً بالتعداد. فالأعمال وضعتهم في طريقها، ولم تصنعها لهم.",
        words: [
          {
            w: "ٱلْمُفْلِحُون", t: "al-muflihun",
            meaning: "From f-l-h. The root sense in the language is splitting and cleaving open — and from it comes the word for the farmer, al-fallah, the one who splits the earth to put seed in it.",
            meaningAr: "من (ف ل ح)، وأصلها في اللغة الشقّ والفتح، ومنه سُمّي الفلّاح فلّاحًا: لأنه يشقّ الأرض ليضع فيها البذر.",
            instead: "So falah is not simply “success” as a mood or an outcome that lands on you. It is what a farmer gets: he split the ground, he buried something, he waited through a season in which nothing was visible above the soil — and then it came up.\n\nSaid at the end of a list of deeds, the word carries its own farming: these five verses named what was buried. The harvest is the verse you are reading.",
            insteadAr: "فليس الفلاح مجرّد «نجاح» يقع عليك حالًا أو مآلًا، وإنما هو ما يناله الفلّاح: شقّ الأرض، ودفن شيئًا، وصبر موسمًا لا يظهر فيه فوق التراب شيء، ثم خرج.\n\nفإذا قيل في خاتمة تعدادِ أعمالٍ حمل اللفظ زراعته معه: فهذه الآيات الخمس سمّت ما دُفن، والحصادُ هو الآية التي تقرؤها.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ف ل ح",
            strength: "lugha"
          }
        ]
      },
      {
        n: 31,
        ar: "وَعَلَّمَ ءَادَمَ ٱلْأَسْمَآءَ كُلَّهَا",
        why: "The first thing recorded about the first human being is that he was TAUGHT. Not that he discovered, not that he worked it out over generations — he was given it, complete, at the start.\n\nAnd the next verse is the angels' answer: glory be to You, we have no knowledge except what You taught us. So the creature made of clay was given something the angels did not have.",
        whyAr: "أوّل ما سُجّل عن أوّل إنسان أنه **عُلِّم**. لا أنه اكتشف، ولا أنه توصّل إليه على مرّ الأجيال، بل أُعطيه تامًّا من البداية.\n\nوالآية التي تليها جواب الملائكة: ﴿سُبْحَٰنَكَ لَا عِلْمَ لَنَآ إِلَّا مَا عَلَّمْتَنَآ﴾. فالمخلوق من طين أُعطي ما لم يكن عند الملائكة.",
        misunderstood: "THE WIDELY-HELD IDEA: that the first humans were primitive — grunting, dragging clubs, slowly working out fire and speech over tens of thousands of years, until civilisation finally began.\n\nWHAT THE VERSE SAYS: the first man had language before he had anything else. Al-asma' kullaha — ALL the names. Naming is not a small skill; it is the whole basis of language, categories and knowledge. He had it on day one, and he had it because he was taught it, not because he invented it.\n\nSo the Quran's first human is not a step up from an animal. He is a creature who could speak, name, and understand — and whom the angels were told to bow to for exactly that.\n\nWHERE TO BE CAREFUL: this settles what the Quran says about the FIRST human. It does not, on its own, settle every archaeological question about every later people, and it is not a claim that stone was never used as a material. Keep the two apart — the Quranic point is strong enough by itself, and it is weakened by being stretched.",
        misunderstoodAr: "الفكرة الشائعة: أنّ أوائل البشر كانوا بدائيّين — يُصدرون أصواتًا ويجرّون الهراوات، ويتوصّلون ببطءٍ إلى النار والكلام عبر عشرات الآلاف من السنين، حتى بدأت الحضارة أخيرًا.\n\nوالذي تقوله الآية: أنّ أوّل رجلٍ كان عنده اللسان قبل كلّ شيء. ﴿ٱلْأَسْمَآءَ كُلَّهَا﴾ — الأسماء **كلّها**. وليست التسمية مهارةً صغيرة، بل هي أساس اللغة والتصنيف والعلم كلّه. كانت عنده في اليوم الأوّل، وكانت عنده لأنه **عُلِّمها**، لا لأنه اخترعها.\n\nفأوّلُ إنسانٍ في القرآن ليس درجةً فوق الحيوان، وإنما خلقٌ يتكلّم ويُسمّي ويفهم، وأُمرت الملائكة بالسجود له لهذا بعينه.\n\nوموضع الاحتياط: هذا يحسم ما يقوله القرآن عن **أوّل** إنسان، ولا يحسم وحده كلّ مسألةٍ أثريّةٍ في كلّ قومٍ جاؤوا بعده، وليس فيه نفيٌ لأن يكون الحجر استُعمل مادّةً. فافصل بين الأمرين: فالمعنى القرآنيّ قويٌّ بنفسه، ويضعف إذا مُدّ إلى ما لا يحتمله.",
        plain: "In plain words: we are taught that people started stupid and got smarter. The Quran starts the story somewhere else — the first man knew the names of everything, and he knew them because Allah taught him.\n\nThe angels then said something worth sitting with: we know nothing except what You taught us. So knowledge, in the Quran, is never something a creature generates from nothing. It is handed down. Ours included.",
        plainAr: "بكلامٍ بسيط: عُلّمنا أنّ الناس بدأوا أغبياء ثم صاروا أذكى. والقرآن يبدأ القصّة من مكانٍ آخر: أوّل رجلٍ عرف أسماء كلّ شيء، وعرفها لأنّ الله علّمه.\n\nثم قالت الملائكة ما يستحقّ الوقوف: لا علم لنا إلا ما علّمتنا. فالعلم في القرآن ليس شيئًا يُولّده المخلوق من العدم أبدًا، وإنما هو شيءٌ يُعطى. وعِلمُنا نحن من ذلك."
      },
      {
        n: 186,
        ar: "وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ",
        why: "Look at what is missing. Everywhere else in the Quran, when people ask the Prophet ﷺ something, the answer begins “Say…” — say to them such and such. It happens more than a dozen times.\n\nHere alone, the “say” is dropped. They ask ABOUT Him, and He answers directly, without sending the reply through anyone: I am near.\n\nThe form matches the meaning. A question about closeness is answered by removing the middleman from the sentence.",
        whyAr: "تأمّل ما الذي حُذف. في كلّ موضعٍ آخر إذا سأل الناس النبيَّ ﷺ عن شيء جاء الجواب: ﴿قُلْ...﴾ — قل لهم كذا. وقع ذلك أكثر من عشر مرّات.\n\nوهنا وحده حُذفت «قل». سألوا **عنه**، فأجاب هو مباشرةً بلا واسطةٍ في الجملة: ﴿فَإِنِّى قَرِيبٌ﴾.\n\nفالصياغة على قدر المعنى: سؤالٌ عن القرب أُجيب بحذف الوسيط من الجملة نفسها.",
        plain: "In plain words: someone asked the Prophet ﷺ — is our Lord near, so we whisper, or far, so we call out? The verse answers before the question is finished.\n\nAnd notice it does not say “tell them I am near”. It skips the messenger entirely. That is the answer, in the shape of the sentence: there is nobody standing between you and Him, and there is no procedure. You ask; He hears.",
        plainAr: "بكلامٍ بسيط: سأل أحدهم النبيَّ ﷺ: أقريبٌ ربُّنا فنُناجيه، أم بعيدٌ فنُناديه؟ فجاءت الآية تُجيب قبل أن يتمّ السؤال.\n\nوتأمّل أنها لم تقل «قل لهم إنّي قريب»، بل تجاوزت الواسطة كلّها. وهذا هو الجواب في شكل الجملة: ليس بينك وبينه أحد، وليس ثمّ إجراءٌ تتّبعه. تسأل فيسمع."
      },
      {
        n: 216,
        ar: "وَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَهُوَ خَيْرٌۭ لَّكُمْ ۖ وَعَسَىٰٓ أَن تُحِبُّوا۟ شَيْـًۭٔا وَهُوَ شَرٌّۭ لَّكُمْ",
        why: "The verse does not say your dislike is wrong. It says it may be wrong — and that your liking may be wrong too, in the same breath.\n\nBoth directions are named. That matters: it would be easy to read this only as comfort when something bad happens. It is also a warning about the thing you are currently chasing.",
        whyAr: "لم تقل الآية إنّ كراهتك خطأ، بل قالت قد تكون خطأ — وقالت في النفَس نفسه إنّ محبّتك قد تكون خطأ.\n\nفذُكرت الجهتان. وهذا مهمّ: إذ يسهل أن تُقرأ تعزيةً عند وقوع المكروه فقط، وهي أيضًا تحذيرٌ من الذي تسعى إليه الآن.",
        plain: "In plain words: the thing you did not want may turn out to be the best thing that happened to you. And the thing you are chasing right now may be the one that harms you.\n\nThe verse gives the reason at the end, and it is not a mystery: Allah knows and you do not. That is the whole argument — not that pain is good, but that you are judging with part of the information.",
        plainAr: "بكلامٍ بسيط: الشيء الذي لم تُرِده قد يتبيّن أنه أفضل ما جرى لك. والشيء الذي تسعى إليه الآن قد يكون هو الذي يضرّك.\n\nوالآية تذكر السبب في آخرها، وليس سببًا غامضًا: ﴿وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ﴾. وهذه هي الحجّة كلّها: ليست أنّ الألم خير، بل أنّك تحكم وأنت لا تملك إلا بعض الخبر."
      },
      {
        n: 255,
        ar: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ",
        arNote: "The opening of the verse. The full verse continues to “and He is the Most High, the Most Great”.",
        arNoteAr: "مطلع الآية، وتمامها إلى قوله ﴿وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ﴾.",
        why: "The Prophet ﷺ asked Ubayy ibn Ka'b which verse of the Book with him was greatest, and when Ubayy answered with this one, he struck his chest and said “May knowledge be pleasant for you, Abu al-Mundhir.” The verse contains no ruling and no story. It is description only — which is worth pausing on, because it means the greatest verse in the Book is the one that tells you most about who He is.",
        whyAr: "سأل النبيُّ ﷺ أُبيَّ بن كعب: أيّ آيةٍ من كتاب الله معك أعظم؟ فلمّا أجابه بها ضرب في صدره وقال: «ليَهْنِكَ العلمُ أبا المنذر». وليس في الآية حكمٌ ولا قصّة، وإنما هي وصفٌ محض. وهذا ممّا يُوقف عنده: فأعظم آيةٍ في الكتاب هي أكثرها تعريفًا به سبحانه.",
        ref: "Sahih Muslim, Book of Prayer — Ubayy ibn Ka'b",
        strength: "hadith",
        words: [
          {
            w: "ٱلْقَيُّوم",
            t: "al-Qayyum",
            meaning: "On the form fay'ul, one of the most intensive patterns in Arabic. From q-w-m: to stand, and to make stand. It carries both at once — the One who stands by Himself, needing nothing to hold Him up, and the One by whom everything else is held up.",
            meaningAr: "على وزن فَيْعُول، وهو من أبلغ أبنية المبالغة في العربية. من مادّة (ق و م): القيام والإقامة. فحمل المعنيين معًا: القائم بنفسه الذي لا يحتاج إلى ما يُقيمه، والمقيم لكلّ ما سواه.",
            instead: "Which is why it comes straight after al-Hayy, the Living. Life first, then the standing that follows from it: He lives without being given life, and holds up everything that was given life.",
            insteadAr: "ولهذا جاء عقب ﴿ٱلْحَىُّ﴾: الحياة أوّلًا ثم القيّوميّة المترتّبة عليها. فهو حيٌّ لم يُحْيَ، مقيمٌ لكلّ من أُحيي.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ق و م (Shamela ed., p. 672)",
            strength: "lugha"
          },
          {
            w: "سِنَةٌۭ before نَوْمٌ",
            t: "drowsiness, then sleep",
            meaning: "Sinah is the heaviness that comes over the eyes before sleep — the drifting, not the sleep itself. It is named first, and sleep second.",
            meaningAr: "السِّنَة النعاس الذي يتقدّم النوم، وهو فتور العين لا النوم نفسه. فذُكرت أوّلًا وذُكر النوم بعدها.",
            instead: "The order is an argument. Deny the small thing first and the large one follows by itself: if the faintest drowsiness never touches Him, sleep certainly does not. Say it the other way round — no sleep takes Him, nor drowsiness — and the sentence loses its force, because denying sleep leaves drowsiness standing. Two words, and their sequence is doing the reasoning.",
            insteadAr: "وفي الترتيب حجّة: إذا نُفي الأدنى أوّلًا لزم انتفاء الأعلى من بابٍ أولى. فإذا كان أدنى النعاس لا يأخذه فالنوم أبعد. ولو عُكس — لا يأخذه نومٌ ولا سِنة — لضعف النظم، لأنّ نفي النوم لا يرفع النعاس. كلمتان، وترتيبهما هو الذي يستدلّ.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry و س ن",
            strength: "lugha"
          }
        ]
      },
      {
        n: 286,
        ar: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        why: "The last verse of the longest surah, and it closes the whole thing on a limit.\n\nAfter 285 verses of law, history, warning and command, the final word is that none of it is beyond you. Wus' is not your maximum effort — it is your capacity, what you can bear without breaking.\n\nThen the verse turns into a dua and the speaker changes: it stops describing and starts asking. Our Lord, do not take us to task if we forget or fall into error.",
        whyAr: "آخر آيةٍ في أطول سورة، وخُتم بها الأمر كلّه على حدٍّ لا يُتجاوز.\n\nفبعد خمسٍ وثمانين ومئتين آيةً من تشريعٍ وتاريخٍ وإنذارٍ وأمر، كانت الكلمة الأخيرة أنّ شيئًا من ذلك ليس فوق طاقتك. و«الوُسع» ليس أقصى جهدك، وإنما سَعتُك: ما تحتمله دون أن تنكسر.\n\nثم تتحوّل الآية إلى دعاء ويتغيّر المتكلّم: تكفّ عن الوصف وتبدأ السؤال: ﴿رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا﴾.",
        plain: "In plain words: whatever you have been given to carry, it was measured against what you can carry. Not against what someone else can carry, and not against what you wish you could.\n\nAnd the word is not “maximum effort” — it is capacity. Allah does not load a person past the point where they break.\n\nThe rest of the verse is the dua the companions were given to answer with, and it is worth memorising: do not hold us to account if we forget or make a mistake; do not put on us what we have no strength for; pardon us, forgive us, have mercy on us.",
        plainAr: "بكلامٍ بسيط: مهما حُمّلتَ، فقد قُدِّر على قدر ما تحتمل. لا على قدر ما يحتمله غيرك، ولا على قدر ما تتمنّى أنك تحتمله.\n\nواللفظ ليس «أقصى الجهد»، وإنما «الوُسع»: السَّعة. فالله لا يُحمّل النفس إلى حدّ انكسارها.\n\nوبقيّة الآية هي الدعاء الذي لُقِّنه الصحابة جوابًا، وحقُّه أن يُحفظ: ﴿رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا... وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ﴾."
      }
    ]
  },

  /* ==========================================================
     30 — AR-RUM  (verse 9: the peoples who built more than we did)
     ========================================================== */
  18: {
    surahTitle: "The last verse of the surah, and the two conditions in it",
    surahTitleAr: "آخرُ آيةٍ في السورة، وفيها شرطان",
    partial: true,
    ayat: [
      {
        n: 110,
        ar: "قُلْ إِنَّمَآ أَنَا۠ بَشَرٌۭ مِّثْلُكُمْ يُوحَىٰٓ إِلَىَّ أَنَّمَآ إِلَٰهُكُمْ إِلَٰهٌۭ وَٰحِدٌۭ ۖ فَمَن كَانَ يَرْجُوا۟ لِقَآءَ رَبِّهِۦ فَلْيَعْمَلْ عَمَلًۭا صَٰلِحًۭا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِۦٓ أَحَدًۢا",
        why: "The surah of the cave ends by cutting off the road every previous nation went down. He is a man. The line between the created and the Creator is drawn by the messenger himself, about himself, and it is placed at the end where it is remembered.\n\nThen the definition of an accepted deed, in two conditions that must both hold. Let him do a RIGHTEOUS deed — it must match what was legislated, not what he found moving. AND let him not associate anyone in the worship of his Lord — it must be for Allah alone.\n\nSo an act can fail in two directions. Sincere but invented, or correct in form but done to be seen. The verse closes both, and it does so in a single sentence, which is why the scholars took it as the summary of what makes an action count.",
        whyAr: "خُتمت سورةُ الكهف بقطع الطريق التي سلكتها الأمم قبلُ: ﴿إِنَّمَآ أَنَا۠ بَشَرٌۭ مِّثْلُكُمْ﴾. فالحدُّ بين المخلوق والخالق رسمه الرسولُ نفسه في نفسه، وجُعل في الخاتمة حيث يُحفظ.\n\nثم حدُّ العمل المقبول في شرطين لا بدّ منهما جميعًا: ﴿فَلْيَعْمَلْ عَمَلًۭا **صَٰلِحًۭا**﴾ — أي موافقًا لما شُرع لا لما استحسنه. ﴿**وَلَا يُشْرِكْ** بِعِبَادَةِ رَبِّهِۦٓ أَحَدًۢا﴾ — أي خالصًا له وحده.\n\nفالعمل يسقط من جهتين: أن يكون خالصًا مبتدَعًا، أو موافقًا مصنوعًا للناس. وقد سدّت الآيةُ البابين في جملةٍ واحدة، ولذلك جعلها أهل العلم جامعةً لشرطَي القبول.",
        ref: "Surah Al-Kahf (18:110)",
        strength: "quran"
      }
    ]
  },

  19: {
    surahTitle: "Something is given that nobody can arrange for himself",
    surahTitleAr: "عطاءٌ لا يقدر أحدٌ أن يصنعه لنفسه",
    partial: true,
    ayat: [
      {
        n: 96,
        ar: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ سَيَجْعَلُ لَهُمُ ٱلرَّحْمَٰنُ وُدًّۭا",
        why: "The promise is not reward in the next life. It is WUDD — love — placed in this world, in the hearts of other people, and the one placing it is Ar-Rahman.\n\nSee what that means practically. Reputation is the one thing a person cannot manufacture honestly. He can buy attention, he can be feared, he can be followed. He cannot make himself loved; the harder he works at it directly, the more visible the effort becomes. So the verse assigns it to Allah and attaches it to something else entirely — belief and righteous action, done for their own sake.\n\nAnd the name chosen is deliberate. Not Al-Aziz, not Al-Jabbar, but AR-RAHMAN — the affection is being described as an overflow of the same mercy the surah has been describing from its first line, where Zakariyya called on his Lord privately and was answered.",
        whyAr: "ليس الموعودُ ثوابَ الآخرة، وإنما ﴿وُدًّۭا﴾ في الدنيا، يُوضع في قلوب الناس، والواضعُ ﴿ٱلرَّحْمَٰنُ﴾.\n\nوانظر معناه في الواقع: فالمحبّةُ أعزُّ ما لا يستطيع المرء أن يصطنعه لنفسه بصدق. يقدر أن يشتري الأنظار، وأن يُهاب، وأن يُتبَع؛ ولا يقدر أن يُحبَّب — وكلّما اجتهد في طلبها قصدًا ظهر تكلّفه. فأسندتها الآيةُ إليه سبحانه، وعلّقتها بشيءٍ آخر بالكلّيّة: الإيمانِ والعمل الصالح يُصنعان لذاتهما.\n\nواختيارُ الاسم مقصود: لا العزيز ولا الجبّار، بل **الرحمن** — فجُعلت المودّةُ فيضًا من الرحمة نفسها التي تسير بها السورةُ من أوّل سطرٍ فيها، حيث نادى زكريّا ربَّه سرًّا فأُجيب.",
        ref: "Surah Maryam (19:96)",
        strength: "quran"
      }
    ]
  },

  20: {
    surahTitle: "What actually happens to a person who turns away",
    surahTitleAr: "ما الذي يقع بالمُعرض حقًّا",
    partial: true,
    ayat: [
      {
        n: 124,
        ar: "وَمَنْ أَعْرَضَ عَن ذِكْرِى فَإِنَّ لَهُۥ مَعِيشَةًۭ ضَنكًۭا وَنَحْشُرُهُۥ يَوْمَ ٱلْقِيَٰمَةِ أَعْمَىٰ",
        why: "The punishment named first is not in the next life. It is a MA'ISHA DANKA — a constricted living — right here.\n\nDANK in the language is narrowness and being pressed in. And notice what the verse does NOT say: it does not say he will be poor. That would have been easy to state and it is not what is stated. A man can have everything and still describe his life as closing in on him, and that is exactly the condition being named.\n\nThis is one of the places where a modern reader can check the claim against what is around him. The societies with the most available comfort in human history are the ones publishing advisories about loneliness and prescribing for anxiety at rising rates. The verse is not describing a shortage of things.\n\nThen the second half moves to the Day itself, and the blindness there is a continuation of a blindness that started here — which is what the man protests about two verses later, and what he is answered with.",
        whyAr: "أوّلُ عقوبةٍ ذُكرت ليست في الآخرة، وإنما ﴿مَعِيشَةًۭ ضَنكًۭا﴾ في الدنيا.\n\nو**الضَّنْك** في اللسان: الضيقُ والشدّة. وانظر ما لم تقله الآية: لم تقل إنه يفتقر. وكان ذلك أيسر أن يُقال، وليس هو المقول. فقد يكون عند الرجل كلُّ شيءٍ وهو يصف حياته بأنها تضيق عليه، وهذه هي الحال الموصوفة بعينها.\n\nوهذا من المواضع التي يقدر القارئ اليوم أن يمتحن فيها الخبر بما حوله: فالمجتمعات التي بلغت من الرفاهية ما لم يبلغه غيرها في التاريخ هي التي تُصدر التحذيرات في الوحدة وتتصاعد فيها وصفات القلق. فالآية لا تصف قلّة أشياء.\n\nثم ينتقل الشطر الثاني إلى يوم القيامة، والعمى هناك امتدادٌ لعمًى ابتدأ هنا — وهو الذي يحتجّ به الرجل بعد آيتين، ويُجاب.",
        ref: "Surah Ta-Ha (20:124), read with 20:125-126",
        strength: "quran"
      }
    ]
  },

  21: {
    surahTitle: "Four words that define the whole mission",
    surahTitleAr: "أربع كلماتٍ تحدّ الرسالة كلَّها",
    partial: true,
    ayat: [
      {
        n: 107,
        ar: "وَمَآ أَرْسَلْنَٰكَ إِلَّا رَحْمَةًۭ لِّلْعَٰلَمِينَ",
        why: "The sentence is built as a restriction — a negation followed by an exception — and that structure is what carries the weight. Not: We sent you, and mercy was among the results. Rather: We sent you for nothing except this.\n\nThen the scope. Not a mercy to the believers, and not a mercy to the Arabs. LIL-'ALAMIN — to all the worlds. The wording is wider than the people who accepted him, which is why the scholars noted that the mercy reached those who rejected him too: the nations before were destroyed outright when they refused, and this one was not.\n\nAnd the verse is a standard a Muslim can be measured against. Anyone who claims to follow a man sent as mercy, and whose following of him produces cruelty, has not misunderstood a detail. He has inverted the stated purpose of the whole thing.",
        whyAr: "بُنيت الجملةُ على القصر: نفيٌ ثم استثناء، وهذا البناءُ هو الحامل للمعنى. فليس المراد: أرسلناك وكانت الرحمة من آثار ذلك؛ وإنما: ما أرسلناك لشيءٍ إلا لهذا.\n\nثم السعة: لا رحمةً للمؤمنين، ولا للعرب، بل ﴿لِّلْعَٰلَمِينَ﴾. واللفظ أوسع ممّن آمن به، ولذلك نبّه أهل العلم على أنّ الرحمة بلغت من ردّه أيضًا: فالأمم قبله كانت تُستأصل إذا كذّبت، وهذه الأمّة لم تُستأصل.\n\nوفي الآية ميزانٌ يُوزن به المسلم: فمن ادّعى اتّباع رجلٍ أُرسل رحمةً ثم أثمر اتّباعُه قسوةً، فما أخطأ في فرع، وإنما قلب المقصد المنصوص للأمر كلّه.",
        ref: "Surah Al-Anbiya (21:107)",
        strength: "quran"
      }
    ]
  },

  22: {
    surahTitle: "Where blindness is actually located",
    surahTitleAr: "أين يقع العمى في الحقيقة",
    partial: true,
    ayat: [
      {
        n: 46,
        ar: "أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌۭ يَعْقِلُونَ بِهَآ أَوْ ءَاذَانٌۭ يَسْمَعُونَ بِهَا ۖ فَإِنَّهَا لَا تَعْمَى ٱلْأَبْصَٰرُ وَلَٰكِن تَعْمَى ٱلْقُلُوبُ ٱلَّتِى فِى ٱلصُّدُورِ",
        why: "Two things in this verse are worth stopping at.\n\nThe first is that the heart is given the job of reasoning — hearts BY WHICH THEY REASON. In the Quran the heart is not the seat of emotion as against the mind; it is where understanding happens, and where it fails. That is why a person can hold a fact and still not be moved by it: the information arrived, and the organ that was supposed to act on it did not.\n\nThe second is the phrase at the end — the hearts WHICH ARE IN THE BREASTS. A hearer would object that hearts are obviously in the breasts; why say it? Because the sentence has just used blindness for something that has no eyes, and the addition insists this is not a figure of speech being waved at. The blindness is being placed in an actual organ, in an actual chest, in the man being addressed.\n\nAnd the cure offered before the diagnosis is movement: have they not travelled the earth. Go and look at what happened to people who did this before you.",
        whyAr: "في الآية موضعان يُوقف عندهما.\n\nالأوّل: أنّ العقل أُسند إلى القلب: ﴿قُلُوبٌۭ **يَعْقِلُونَ** بِهَآ﴾. فالقلبُ في القرآن ليس محلَّ العاطفة في مقابل العقل، وإنما هو موضع الفهم، وموضع تخلّفه. ولذلك يحمل الرجل الخبر ولا يتحرّك به: بلغته المعلومة، وتعطّلت الآلةُ التي كان ينبغي أن تعمل بها.\n\nوالثاني: قوله في الآخر ﴿ٱلَّتِى فِى ٱلصُّدُورِ﴾. وللسامع أن يقول: ومن أين تكون القلوبُ إن لم تكن في الصدور؟ فلِمَ قيل؟ لأنّ الجملة أطلقت العمى على ما لا عين له، فجاءت الزيادةُ تُثبت أنّ هذا ليس مجازًا يُلوَّح به. فالعمى موضوعٌ في عضوٍ حقيقيّ، في صدرٍ حقيقيّ، في المخاطَب نفسه.\n\nوقد قُدّم الدواءُ على التشخيص، وهو الحركة: ﴿أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ﴾ — اذهبوا فانظروا ما صار إليه من فعل هذا قبلكم.",
        ref: "Surah Al-Hajj (22:46)",
        strength: "quran"
      }
    ]
  },

  23: {
    surahTitle: "The question the surah has been building towards",
    surahTitleAr: "السؤال الذي كانت السورة تسوق إليه",
    partial: true,
    ayat: [
      {
        n: 115,
        ar: "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَٰكُمْ عَبَثًۭا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ",
        why: "'ABATH is doing something with no purpose behind it — play without even the point that play has. The question is put to a person who has just been shown, in the same surah, his own formation stage by stage: a drop, then a clinging thing, then a lump, then bones, then flesh on the bones.\n\nThat sequence is the argument. Nobody builds like that for nothing. A process carried out in ordered stages is evidence of intent, and the verse simply asks the reader to finish the thought he has already started.\n\nAnd the second half is where it lands: AND THAT YOU WOULD NOT BE RETURNED TO US. Purpose and accountability are treated as the same claim. If there is no return, the creating was aimless — and if the creating was not aimless, there is a return. The verse gives you the two together and lets you choose which one you are actually denying.",
        whyAr: "**العبث** فعلٌ لا غاية من ورائه، وهو دون اللعب الذي له غرضٌ ما. ووُجّه السؤال إلى من عُرض عليه في السورة نفسها خلقُه طورًا بعد طور: نطفةً، ثم علقة، ثم مضغة، ثم عظامًا، ثم كسا العظامَ لحمًا.\n\nوهذا التدرّج هو الحجّة: فلا يُبنى على هذا النسق لغير شيء. والصنعةُ المرتّبةُ على أطوارٍ دليلُ قصد، والآيةُ إنما تطلب من القارئ أن يُتمّ فكرةً قد بدأها.\n\nوالشطر الثاني هو المستقرّ: ﴿وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ﴾. فجُعل القصدُ والحسابُ دعوى واحدة: إن لم يكن رجوعٌ فالخلقُ عبث، وإن لم يكن الخلقُ عبثًا فثمّ رجوع. عرضت الآيةُ الأمرين معًا وتركتك تختار أيّهما تُنكر.",
        ref: "Surah Al-Mu'minun (23:115), read with 23:12-14",
        strength: "quran"
      }
    ]
  },

  24: {
    surahTitle: "The parable that is the most detailed in the Quran",
    surahTitleAr: "المثل الذي هو أدقُّ ما في القرآن تفصيلًا",
    partial: true,
    ayat: [
      {
        n: 35,
        ar: "ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ مَثَلُ نُورِهِۦ كَمِشْكَوٰةٍۢ فِيهَا مِصْبَاحٌ ۖ ٱلْمِصْبَاحُ فِى زُجَاجَةٍ ۖ ٱلزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌۭ دُرِّىٌّۭ يُوقَدُ مِن شَجَرَةٍۢ مُّبَٰرَكَةٍۢ زَيْتُونَةٍۢ لَّا شَرْقِيَّةٍۢ وَلَا غَرْبِيَّةٍۢ يَكَادُ زَيْتُهَا يُضِىٓءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌۭ ۚ نُّورٌ عَلَىٰ نُورٍۢ",
        arNote: "The central portion of the verse. It closes: “Allah guides to His light whom He wills, and Allah presents examples for the people, and Allah is Knowing of all things.”",
        arNoteAr: "وسطُ الآية، وتُختم بقوله: ﴿يَهْدِى ٱللَّهُ لِنُورِهِۦ مَن يَشَآءُ ۚ وَيَضْرِبُ ٱللَّهُ ٱلْأَمْثَٰلَ لِلنَّاسِ ۗ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۭ﴾.",
        why: "Read carefully what is being compared. The verse says Allah is the Light of the heavens and the earth, and then says the parable is of HIS LIGHT — the likeness is drawn for the light He gives, not for Him. The distinction is made inside the verse itself, and it matters, because 42:11 has already ruled out anything being like Him.\n\nThen the image is built in stages, and each stage protects and concentrates the one before. A niche gathers the light instead of letting it scatter. A lamp inside it. Glass around the lamp, which shields the flame and makes it brighter. Oil from an olive tree standing where the sun reaches it all day — neither of the east nor of the west, so it is never in shadow — and the oil is so pure it is almost luminous before any fire touches it.\n\nLight upon light. Guidance is being described as something layered: a nature already inclined towards it, and then revelation arriving to set it alight. Which is why the verse ends by assigning the outcome to Him — the arrangement is His, and so is the guiding.",
        whyAr: "تأمّل ما الذي شُبّه. قالت الآية: ﴿ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ﴾، ثم قالت: ﴿مَثَلُ **نُورِهِ**﴾ — فالمثلُ مضروبٌ للنور الذي يهبه، لا له سبحانه. والفرقُ مذكورٌ في الآية نفسها، وهو مهمّ، لأنّ ﴿لَيْسَ كَمِثْلِهِۦ شَىْءٌۭ﴾ قد سبق فنفى المماثلة.\n\nثم بُنيت الصورة على مراتب، كلُّ مرتبةٍ تحفظ التي قبلها وتُركّزها: **المشكاة** تجمع الضوء فلا يتبدّد. و**المصباح** فيها. و**الزجاجة** حول المصباح تقي اللهب وتزيده صفاءً. والزيتُ من **زيتونةٍ** قائمةٍ حيث تصيبها الشمس النهار كلَّه — ﴿لَّا شَرْقِيَّةٍۢ وَلَا غَرْبِيَّةٍۢ﴾ فلا يقع عليها ظلّ — حتى صفا زيتُها فكاد يُضيء قبل أن تمسّه نار.\n\n﴿نُّورٌ عَلَىٰ نُورٍۢ﴾. فوُصفت الهداية بأنها طبقات: فطرةٌ مهيّأةٌ من قبل، ثم وحيٌ يأتي فيُوقدها. ولذلك خُتمت الآيةُ بردّ الأمر إليه: فالترتيبُ ترتيبُه، والهدايةُ هدايته.",
        ref: "Surah An-Nur (24:35), read with Ash-Shura (42:11)",
        strength: "quran"
      }
    ]
  },

  25: {
    surahTitle: "The list starts with how a man walks",
    surahTitleAr: "بدأت القائمةُ بمِشية الرجل",
    partial: true,
    ayat: [
      {
        n: 63,
        ar: "وَعِبَادُ ٱلرَّحْمَٰنِ ٱلَّذِينَ يَمْشُونَ عَلَى ٱلْأَرْضِ هَوْنًۭا وَإِذَا خَاطَبَهُمُ ٱلْجَٰهِلُونَ قَالُوا۟ سَلَٰمًۭا",
        why: "A long description of the best of people is about to begin, and the first thing named is their walk. Not their prayer, not their knowledge, not their charity — those come further down the passage. Their walk.\n\nHAWN is gentleness and ease. Not the walk of a man who is broken and not the walk of a man announcing himself. And the choice of trait is deliberate: how a person moves through a public space is the one thing he does not think about, which makes it the most honest evidence of what he actually thinks of himself.\n\nThen the second clause, which is the harder one. When the ignorant address them — and the address in question is abuse — they say SALAMA. The classical scholars are careful here: this is not the greeting of peace but a word of dismissal, a leaving-well-alone. It is not an argument won, and it is not submission. It is refusing the exchange.\n\nAnd note the word for the other party. Not the disbelievers — the IGNORANT. The response is calibrated to what the person actually is, not to which side he is on.",
        whyAr: "وصفٌ طويلٌ لخيار الناس يوشك أن يبتدئ، فكان أوّلَ ما ذُكر: مِشيتُهم. لا صلاتُهم ولا علمهم ولا نفقتهم، وكلُّ ذلك يأتي بعدُ في السياق. مِشيتُهم.\n\nو**الهَون** اللينُ والرِّفق. ليست مِشية المنكسر، ولا مِشية المُعلن عن نفسه. واختيار هذه الخصلة مقصود: فطريقةُ حركة المرء بين الناس هي الشيء الذي لا يتعمّده، ولذلك كانت أصدقَ دليلٍ على حقيقة ما يرى في نفسه.\n\nثم الجملة الثانية وهي أشقّ: ﴿وَإِذَا خَاطَبَهُمُ ٱلْجَٰهِلُونَ قَالُوا۟ سَلَٰمًۭا﴾، والخطابُ المقصود هو السَّفَه. ودقّق المتقدّمون هنا: ليس هذا سلامَ التحيّة، وإنما هي كلمةُ متاركةٍ وتخلٍّ. فلا هي حجّةٌ غُلب بها، ولا هي استسلام؛ وإنما هي **رفضُ الدخول في المجادلة**.\n\nوانظر وصف الطرف الآخر: لم يقل الكافرون، بل ﴿ٱلْجَٰهِلُونَ﴾. فالجوابُ مقدَّرٌ على حال الرجل نفسه لا على الجهة التي هو فيها.",
        ref: "Surah Al-Furqan (25:63) · Al-Mufradat, Ar-Raghib al-Isfahani, entry h-w-n",
        strength: "lugha"
      }
    ]
  },

  26: {
    surahTitle: "The one thing that will still be worth something",
    surahTitleAr: "الشيء الوحيد الذي يبقى له قيمة",
    partial: true,
    ayat: [
      {
        n: 89,
        ar: "إِلَّا مَنْ أَتَى ٱللَّهَ بِقَلْبٍۢ سَلِيمٍۢ",
        arNote: "The exception to the verse before it: “the Day when neither wealth nor children will benefit.”",
        arNoteAr: "استثناءٌ من الآية قبلها: ﴿يَوْمَ لَا يَنفَعُ مَالٌۭ وَلَا بَنُونَ﴾.",
        why: "Two things are named as useless on that Day, and they are not vices. Wealth and children — the two things almost every human life is actually organised around, and both of them lawful, and one of them a mercy a person prays for.\n\nThen the single exception, and it is not an amount of anything. It is a condition of an organ: a SOUND heart.\n\nSALIM is from s-l-m, the root of safety and wholeness — the same root as Islam and as salam. It is the word used of a limb that is free of injury. So the heart is being described the way a doctor describes a body part: not decorated, not impressive, not large. Undamaged.\n\nAnd the verb is ATA — one who COMES to Allah with it. It is presented, like something carried and handed over. Everything else in the man's life is left at the door; this is the one item admitted, and the question asked of it is only whether it is intact.",
        whyAr: "ذُكر شيئان لا ينفعان يومئذٍ، وليسا من الرذائل: ﴿مَالٌۭ وَلَا بَنُونَ﴾ — وهما اللذان تُنظَّم عليهما أعمارُ الناس، وكلاهما مباح، وأحدهما نعمةٌ تُسأل.\n\nثم الاستثناء الوحيد، وليس مقدارًا من شيء، وإنما هو حالُ عضو: ﴿بِقَلْبٍۢ سَلِيمٍۢ﴾.\n\nو**السليم** من (س ل م)، وهي مادّة السلامة والبراءة من الآفة، ومنها الإسلام والسلام. وهو اللفظ الذي يُوصف به العضوُ الذي لا جرح فيه. فوُصف القلبُ كما يصف الطبيبُ عضوًا: لا مزيّنًا ولا عظيمًا ولا كبيرًا، وإنما **سالمًا**.\n\nوالفعلُ ﴿أَتَى﴾: جاء به إلى الله. فهو معروضٌ محمولٌ يُسلَّم. ويُترك سائرُ ما في حياة الرجل عند الباب، ويُؤذن لهذا وحده، ولا يُسأل عنه إلا: أسليمٌ هو؟",
        ref: "Surah Ash-Shu'ara (26:88-89) · Al-Mufradat, Ar-Raghib al-Isfahani, entry s-l-m",
        strength: "lugha"
      }
    ]
  },

  27: {
    surahTitle: "Why the answer is guaranteed to this one",
    surahTitleAr: "لِمَ ضُمنت الإجابةُ لهذا بعينه",
    partial: true,
    ayat: [
      {
        n: 62,
        ar: "أَمَّن يُجِيبُ ٱلْمُضْطَرَّ إِذَا دَعَاهُ وَيَكْشِفُ ٱلسُّوٓءَ وَيَجْعَلُكُمْ خُلَفَآءَ ٱلْأَرْضِ ۗ أَءِلَٰهٌۭ مَّعَ ٱللَّهِ ۚ قَلِيلًۭا مَّا تَذَكَّرُونَ",
        why: "The verse does not say who answers the one who calls. It says who answers the MUDTARR — and that word is doing all the work.\n\nMUDTARR is a passive form: the one who has been forced, driven, pressed into a corner. Not the one who is asking, but the one who has run out of every other door. Ar-Raghib places darura in compulsion and necessity — the state where there is no remaining choice.\n\nSo the verse is not describing a level of eloquence in the dua. It is describing a level of NEED. And that explains something people notice and cannot account for: the prayers that get answered fastest are often the ones made worst — no arrangement of words, no composure, sometimes barely a sentence — because the condition being answered is not the phrasing. It is the cornering.\n\nWhich also reframes the hardship itself. The thing that stripped every other option away is what produced the state the answer is attached to.",
        whyAr: "لم تقل الآية: من يجيب الداعي، وإنما ﴿مَن يُجِيبُ **ٱلْمُضْطَرَّ**﴾ — وعلى هذا اللفظ مدارُ المعنى.\n\nو**المضطرّ** اسم مفعول: الذي أُلجئ وأُحرج وسُدّت عليه المذاهب. ليس السائل، بل من فنيت عنه كلُّ بابٍ سواه. وجعل الراغبُ الضرورةَ في معنى الإلجاء والحاجة التي لا مندوحة عنها.\n\nفليست الآية تصف بلاغةً في الدعاء، وإنما تصف **درجةً من الحاجة**. وبه يُفسَّر ما يراه الناس ولا يُحسنون تعليله: أنّ أسرع الدعاء إجابةً كثيرًا ما يكون أسوأه صياغة — لا ترتيبَ لفظٍ ولا تماسك، وربما لم يكن جملةً تامّة — لأنّ الذي أُجيب ليس النظم، وإنما **الاضطرار**.\n\nوفي هذا أيضًا قلبٌ للنظر في البلاء نفسه: فالذي سلبك كلَّ خيارٍ آخر هو الذي أنشأ فيك الحال التي عُلّقت بها الإجابة.",
        ref: "Surah An-Naml (27:62) · Al-Mufradat, Ar-Raghib al-Isfahani, entry d-r-r",
        strength: "lugha"
      }
    ]
  },

  28: {
    surahTitle: "The verse quoted in both directions, and what it actually says",
    surahTitleAr: "آيةٌ يُحتجّ بها في الجهتين، وما تقوله حقًّا",
    partial: true,
    ayat: [
      {
        n: 77,
        ar: "وَٱبْتَغِ فِيمَآ ءَاتَىٰكَ ٱللَّهُ ٱلدَّارَ ٱلْءَاخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ ٱلدُّنْيَا ۖ وَأَحْسِن كَمَآ أَحْسَنَ ٱللَّهُ إِلَيْكَ ۖ وَلَا تَبْغِ ٱلْفَسَادَ فِى ٱلْأَرْضِ ۖ إِنَّ ٱللَّهَ لَا يُحِبُّ ٱلْمُفْسِدِينَ",
        why: "This is said by Qarun's own people, advising him. Knowing who is speaking settles most of the disagreement about it.\n\nOne group quotes the middle clause on its own — do not forget your share of the world — as a licence for whatever they want. Another treats any attention to the world as a defect. Read the sentence in order and neither survives.\n\nThe main command comes first and it governs everything after: SEEK, THROUGH WHAT ALLAH HAS GIVEN YOU, THE HOME OF THE HEREAFTER. The wealth is not to be abandoned; it is the instrument. Then the middle clause is a limit on that, not a second goal — do not neglect your legitimate portion here.\n\nThe classical scholars read the share as what a man genuinely needs and what he sends ahead. And the verse itself closes the door on the greedy reading two clauses later: and do good as Allah has done good to you, and do not seek corruption. The man being advised ignored all four clauses, and the earth swallowed him.",
        whyAr: "هذا قولُ قوم قارون له، يعظونه. ومعرفةُ القائل تحسم أكثر النزاع فيه.\n\nففريقٌ ينقل الجملة الوسطى وحدها — ﴿وَلَا تَنسَ نَصِيبَكَ مِنَ ٱلدُّنْيَا﴾ — رخصةً في كلّ ما يشتهي. وفريقٌ يجعل كلَّ التفاتٍ إلى الدنيا نقصًا. واقرأ الجملة على ترتيبها لا يسلم واحدٌ منهما.\n\nفالأمرُ الأصليّ مقدَّم وهو الحاكم على ما بعده: ﴿وَٱبْتَغِ **فِيمَآ ءَاتَىٰكَ ٱللَّهُ** ٱلدَّارَ ٱلْءَاخِرَةَ﴾. فالمالُ لا يُترك، وإنما هو الآلة. ثم الجملةُ الوسطى قيدٌ على ذلك لا غايةٌ ثانية: لا تُهمل حظَّك المشروع هنا.\n\nوفسّر المتقدّمون النصيبَ بما يحتاجه الرجل حقًّا وبما يُقدّمه لنفسه. والآيةُ نفسها تسدّ باب القراءة النَّهِمة بعد جملتين: ﴿وَأَحْسِن كَمَآ أَحْسَنَ ٱللَّهُ إِلَيْكَ ۖ وَلَا تَبْغِ ٱلْفَسَادَ فِى ٱلْأَرْضِ﴾. وقد أعرض الموعوظُ عن الأربع جميعًا، فخُسف به.",
        ref: "Surah Al-Qasas (28:77), read with 28:76-81",
        strength: "quran"
      }
    ]
  },

  29: {
    surahTitle: "The question asked at the start, before anything else",
    surahTitleAr: "السؤال المفتَتَح به قبل كلّ شيء",
    partial: true,
    ayat: [
      {
        n: 2,
        ar: "أَحَسِبَ ٱلنَّاسُ أَن يُتْرَكُوٓا۟ أَن يَقُولُوٓا۟ ءَامَنَّا وَهُمْ لَا يُفْتَنُونَ",
        why: "It is the second verse of the surah. Before any story, any ruling, any argument — this.\n\nThe assumption being corrected is a specific one, and it is common: that the declaration is the end of the process. A man says I believe, and expects that the saying settles it. The verse treats the saying as the beginning.\n\nFITNAH in the language is the testing of gold in fire to separate it from what is mixed into it. The image is not damage; it is separation. Nothing is added by the fire and nothing good is destroyed by it — what it does is make visible what was already there.\n\nSo the trial in a believer's life is not evidence that something went wrong, and it is not a sign of being abandoned. It is the process by which a claim becomes a fact. And the surah then spends its length on people who went through exactly that: Nuh for nine hundred and fifty years, Ibrahim in the fire, Lut among his people.",
        whyAr: "هي الآية الثانية من السورة. قبل قصّةٍ وقبل حكمٍ وقبل حجاج: هذا.\n\nوالظنُّ المصحَّح ظنٌّ بعينه، وهو شائع: أن تكون الكلمةُ خاتمةَ الأمر. يقول الرجل: آمنت، ويحسب أنّ القول قد فصل. وتجعل الآيةُ القولَ **ابتداءً**.\n\nو**الفتنة** في اللسان: امتحان الذهب بالنار ليتميّز ممّا خالطه. فالصورةُ ليست إتلافًا، وإنما هي تمييز. فالنارُ لا تزيد فيه شيئًا ولا تُفسد منه جيّدًا، وإنما تُظهر ما كان فيه.\n\nفليس البلاءُ في حياة المؤمن دليلًا على خللٍ وقع، ولا علامةَ خِذلان، وإنما هو الطريق الذي تصير به الدعوى حقيقة. ثم أنفقت السورةُ طولَها فيمن جرى عليهم هذا بعينه: نوحٌ ألف سنةٍ إلا خمسين عامًا، وإبراهيمُ في النار، ولوطٌ في قومه.",
        ref: "Surah Al-'Ankabut (29:2) · Al-Mufradat, Ar-Raghib al-Isfahani, entry f-t-n",
        strength: "lugha"
      }
    ]
  },

  30: {
    surahTitle: "History is not running itself — and it did not start with us",
    surahTitleAr: "التاريخ لا يجري من تلقاء نفسه — ولم يبدأ بنا",
    partial: true,
    surahWhy: [
      {
        h: "The surah that predicted a reversal nobody could see coming",
        hAr: "السورة التي أخبرت بانقلابٍ لم يكن يُرى",
        en: "Ar-Rum opens by saying Rome's defeat would be reversed within a few years, at a moment when that looked impossible. The surah's subject is that nations rise and fall on a schedule that is not theirs — and verse 9 turns that on the reader.",
        ar: "افتُتحت الروم بأنّ هزيمة الروم ستنقلب في بضع سنين، في وقتٍ كان ذلك يبدو فيه مستحيلًا. وموضوع السورة أنّ الأمم تعلو وتسقط على موعدٍ ليس بيدها — والآية التاسعة تُوجّه ذلك إلى القارئ نفسه.",
        ref: "Surah Ar-Rum (30:2-4)",
        strength: "quran"
      }
    ],
    ayat: [
      {
        n: 9,
        ar: "أَوَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَيَنظُرُوا۟ كَيْفَ كَانَ عَٰقِبَةُ ٱلَّذِينَ مِن قَبْلِهِمْ ۚ كَانُوٓا۟ أَشَدَّ مِنْهُمْ قُوَّةًۭ وَأَثَارُوا۟ ٱلْأَرْضَ وَعَمَرُوهَآ أَكْثَرَ مِمَّا عَمَرُوهَا",
        why: "Read the middle of it slowly, because it is easy to skim past the strongest phrase in the verse.\n\n“They were stronger than them in power” — that alone is striking. But it does not stop there: “and they turned over the earth and BUILT IT UP MORE THAN THESE HAVE BUILT IT UP.”\n\nThe comparison is not vague admiration for the ancients. It is a direct measurement, and the earlier people win it. And the addressees were not primitive villagers — this was said to a people with cities, trade routes and empires around them.",
        whyAr: "اقرأ وسطها على مهل، فإنّ أقوى ما فيها يسهل أن يُمرّ عليه.\n\n﴿كَانُوٓا۟ أَشَدَّ مِنْهُمْ قُوَّةًۭ﴾ — وهذه وحدها لافتة. لكنها لم تقف: ﴿وَأَثَارُوا۟ ٱلْأَرْضَ **وَعَمَرُوهَآ أَكْثَرَ مِمَّا عَمَرُوهَا**﴾.\n\nفليست المقابلة إعجابًا مبهمًا بالأقدمين، وإنما هي قياسٌ صريح، والأوّلون هم الفائزون فيه. والمخاطَبون لم يكونوا أهل قرًى بدائيّة، فقد قيل هذا لقومٍ حولهم المدن وطرق التجارة والإمبراطوريّات.",
        misunderstood: "THE WIDELY-HELD IDEA: that history is a ladder. Cavemen at the bottom, then bronze, then iron, then steadily upward, with us standing on the top rung — the most advanced people who have ever lived.\n\nWHAT THE VERSE SAYS: earlier peoples were stronger than these, and built the earth up MORE than these did. Not equal. More. The verse is an instruction to go and look at what they left.\n\nAnd the Quran gives examples rather than leaving it general:\n· 'Ad, of Iram “the like of which was never created in the land” (89:6-8)\n· Thamud, who “carved houses out of the mountains” — and the word used is farihin, skilfully, with ease and delight, not out of desperation (26:149)\n· A people who “take for themselves masani'” — great works — “that perhaps you may live forever” (26:129)\n\nSo the Quran's shape of history is not a ladder. It is a cycle: a people is given strength, builds, becomes arrogant, and is removed. The verse names the ending too — Allah did not wrong them; they wronged themselves.\n\nWHERE TO BE CAREFUL, and this matters. The verse is strong enough on its own and does not need help. Arguments that hang it on contested objects — an ancient battery, a carving read as a lamp, a claim that no engineer can explain a particular monument — put the verse at the mercy of the next archaeology paper. This site does not do that with hadith and will not do it here. What is solid: the Quran states plainly that earlier peoples surpassed the people it was addressing, and that they were destroyed anyway. That is the point, and it cannot be taken away.",
        misunderstoodAr: "الفكرة الشائعة: أنّ التاريخ سُلَّم. في أسفله إنسان الكهف، ثم البرونز، ثم الحديد، ثم صعودٌ مطّرد، ونحن على أعلى درجةٍ فيه: أكثر من عاش تقدّمًا.\n\nوالذي تقوله الآية: أنّ الأوّلين كانوا أشدّ من هؤلاء قوّة، وعمروا الأرض **أكثر** ممّا عمرها هؤلاء. لا مثلهم، بل أكثر. والآية أمرٌ بأن يُسار في الأرض ويُنظر فيما تركوه.\n\nوضرب القرآن أمثلةً ولم يترك الأمر مُجملًا:\n· عادٌ، ﴿إِرَمَ ذَاتِ ٱلْعِمَادِ • ٱلَّتِى لَمْ يُخْلَقْ مِثْلُهَا فِى ٱلْبِلَٰدِ﴾ (٨٩:٦-٨)\n· وثمودُ ﴿وَتَنْحِتُونَ مِنَ ٱلْجِبَالِ بُيُوتًۭا فَٰرِهِينَ﴾ — واللفظ «فارهين»: بحذقٍ وبَطَرٍ ونعمة، لا عن اضطرار (٢٦:١٤٩)\n· وقومٌ ﴿وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ﴾ (٢٦:١٢٩)\n\nفصورة التاريخ في القرآن ليست سُلَّمًا، وإنما دورة: قومٌ يُمكَّنون فيبنون فيستكبرون فيُزالون. وذكرت الآية الخاتمة أيضًا: ﴿فَمَا كَانَ ٱللَّهُ لِيَظْلِمَهُمْ وَلَٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ﴾.\n\nوموضع الاحتياط، وهو مهمّ: الآية قويّةٌ بنفسها ولا تحتاج عونًا. والاستدلال الذي يُعلّقها بأشياء متنازَعٍ فيها — بطاريّةٍ قديمة، أو نقشٍ يُقرأ مصباحًا، أو دعوى أنّ المهندسين يعجزون عن تفسير بناءٍ بعينه — يجعل الآية رهينةَ أوّل بحثٍ أثريٍّ يصدر. وهذا الموقع لا يصنع ذلك في الحديث، ولن يصنعه هنا. والثابت: أنّ القرآن نصّ على أنّ أقوامًا سبقوا فاقوا من خُوطبوا بهم، وأنهم أُهلكوا مع ذلك. وهذا هو المقصود، ولا يُنتزع.",
        plain: "In plain words: we are taught that we are the peak — that everyone before us was more primitive, and the line only goes up. The verse says the opposite about the people it was addressing: those before you were stronger, and they built more than you have.\n\nAnd then it says go and look. Walk in the land and see what they left behind, and see how it ended for them.\n\nWhat to take from it: being advanced is not protection. Every one of those peoples was more capable than the ones being spoken to, and every one of them is gone. Strength was never the thing that kept a nation standing.",
        plainAr: "بكلامٍ بسيط: عُلّمنا أنّنا القمّة — وأنّ كلّ من قبلنا كان أبدأ منّا، وأنّ الخطّ صاعدٌ لا غير. والآية تقول عكس ذلك لمن خوطبوا بها: الذين قبلكم كانوا أشدّ قوّة، وعمروا الأرض أكثر ممّا عمرتم.\n\nثم تقول: سيروا فانظروا. امشوا في الأرض وانظروا ما الذي تركوه، وكيف كانت نهايتهم.\n\nوالذي تأخذه: أنّ التقدّم ليس حصانة. كلُّ أولئك كانوا أقدر ممّن خوطبوا بهم، وكلُّهم ذهب. فما كانت القوّة يومًا هي التي تُبقي أمّة قائمة."
      }
    ]
  },


  /* ==========================================================
     THE MOST MISREAD VERSES
     Chosen because a real, widespread misunderstanding exists —
     not manufactured to make a point. Where a verse is used as a
     weapon against Islam AND misused by extremists, both misuses
     are named, because correcting only one is not honesty.
     ========================================================== */

  3: {
    surahTitle: "How the Book itself says it must be read",
    surahTitleAr: "كيف أمر الكتابُ أن يُقرأ",
    partial: true,
    ayat: [
      {
        n: 7,
        ar: "هُوَ ٱلَّذِىٓ أَنزَلَ عَلَيْكَ ٱلْكِتَٰبَ مِنْهُ ءَايَٰتٌۭ مُّحْكَمَٰتٌ هُنَّ أُمُّ ٱلْكِتَٰبِ وَأُخَرُ مُتَشَٰبِهَٰتٌۭ ۖ فَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِمْ زَيْغٌۭ فَيَتَّبِعُونَ مَا تَشَٰبَهَ مِنْهُ ٱبْتِغَآءَ ٱلْفِتْنَةِ وَٱبْتِغَآءَ تَأْوِيلِهِۦ",
        arNote: "Part of the verse. It continues: “and none knows its interpretation except Allah — and those firm in knowledge say: we believe in it, all of it is from our Lord.”",
        arNoteAr: "بعضُ الآية، وتمامها: ﴿وَمَا يَعْلَمُ تَأْوِيلَهُۥٓ إِلَّا ٱللَّهُ ۗ وَٱلرَّٰسِخُونَ فِى ٱلْعِلْمِ يَقُولُونَ ءَامَنَّا بِهِۦ كُلٌّۭ مِّنْ عِندِ رَبِّنَا﴾.",
        why: "This is the verse that governs every other verse, which is why it belongs on a page about pondering. The Book is described as containing two kinds of material: muhkam — clear, decisive, and called the mother of the Book — and mutashabih, which can bear more than one sense.\n\nThen it names who goes wrong, and the fault is not intellectual. Those in whose hearts is a swerving pursue the ambiguous part, seeking discord and seeking an interpretation. They are not confused. They are shopping — going past the clear verses on purpose, to find something bendable.\n\nSo the rule for reading is set by the Book itself: the decisive verses are the reference point, and anything open is read back to them. A person who builds a position on one ambiguous phrase while walking past ten plain ones has been described here.",
        whyAr: "هذه الآية هي الحاكمة على سائر الآيات، ولذلك كانت أولى بصفحة التدبّر. وُصف الكتاب بأنّ فيه صنفين: **محكمًا** بيّنًا قاطعًا سُمّي ﴿أُمُّ ٱلْكِتَٰبِ﴾، و**متشابهًا** يحتمل أكثر من وجه.\n\nثم سُمّي مَن يزيغ، وليست العلّة في العقل: ﴿فَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِمْ زَيْغٌۭ فَيَتَّبِعُونَ مَا تَشَٰبَهَ مِنْهُ ٱبْتِغَآءَ ٱلْفِتْنَةِ﴾. فليسوا في حَيرة، وإنما هم في **انتقاء**: يتجاوزون المحكم قصدًا التماسًا لما يقبل الليّ.\n\nفقاعدة القراءة قرّرها الكتاب بنفسه: المحكم هو المرجع، وما احتمل يُردّ إليه. ومن بنى قولًا على لفظٍ محتملٍ وترك عشرة محكماتٍ فقد وُصف ها هنا.",
        ref: "Surah Aal-Imran (3:7)",
        strength: "quran"
      }
    ]
  },

  4: {
    surahTitle: "The verse argued over more than any other",
    surahTitleAr: "الآية التي كثُر فيها الجدال أكثر من غيرها",
    partial: true,
    ayat: [
      {
        n: 34,
        ar: "ٱلرِّجَالُ قَوَّٰمُونَ عَلَى ٱلنِّسَآءِ بِمَا فَضَّلَ ٱللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍۢ وَبِمَآ أَنفَقُوا۟ مِنْ أَمْوَٰلِهِمْ",
        arNote: "The opening of the verse. The passage continues through the steps for a marriage in breakdown and ends: “but if they obey you, seek no means against them.”",
        arNoteAr: "مطلع الآية، وتمامها في مراتب معالجة النشوز، وتُختم بقوله: ﴿فَإِنْ أَطَعْنَكُمْ فَلَا تَبْغُوا۟ عَلَيْهِنَّ سَبِيلًا﴾.",
        why: "Start with the word, because most of the argument is really about the word. QAWWAM is from q-w-m, to stand and to maintain. Ar-Raghib al-Isfahani puts qiyam over a thing in the sense of undertaking it and keeping it up — the same root behind qayyim, the one responsible for another's affairs. It is a word of duty and upkeep, not of ownership. The verse itself gives the two grounds immediately: what Allah has given, and WHAT THEY SPEND FROM THEIR WEALTH. A responsibility tied to expenditure is a burden being assigned, not a rank being awarded.\n\nThen the harder part, and this page will not skip it. The passage lists three steps for a marriage that is breaking down, and the third is wa-dribuhunna. Three things have to be said about it honestly.\n\nFIRST, WHAT HE ﷺ DID. Aishah said he never struck a servant, nor a woman, nor anything with his hand. That is the man the verse was revealed to, and he is the one who shows what it meant in practice.\n\nSECOND, WHAT HE SAID. In the farewell sermon, before the largest gathering he ever addressed, he instructed that women be treated well. And he said the best of you are the best to their wives.\n\nTHIRD, WHAT THE SCHOLARS ACTUALLY HELD. Ibn Abbas is reported to have explained the striking as with a siwak — a tooth-stick. Ash-Shafi'i held that leaving it is better. The scholars who permitted it stipulated that it must not injure, not break, not leave a mark and not touch the face. The classical position was never a licence; it was a narrowing, imposed on a practice that already existed everywhere and was unrestricted.\n\nAnd read the end of the passage, which is almost always cut off: if they obey you, seek no way against them. The aim stated in the verse is the marriage surviving, not a man winning.",
        whyAr: "ابدأ باللفظ، فإنّ أكثر النزاع إنما هو فيه. **قوّام** من مادّة (ق و م): القيام على الشيء والإقامة له. قال الراغب الأصفهانيّ في القيام على الشيء: تولّيه وحفظُه، ومنه **القيّم**: المتولّي لأمر غيره. فهو لفظُ كُلفةٍ ورعايةٍ لا لفظُ مِلك. والآية نفسها تذكر المناطَين في الحال: ﴿بِمَا فَضَّلَ ٱللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍۢ **وَبِمَآ أَنفَقُوا۟ مِنْ أَمْوَٰلِهِمْ**﴾. ومسؤوليّةٌ معلّقةٌ بالإنفاق تكليفٌ يُحمَّل، لا رتبةٌ تُمنَح.\n\nثم الموضع الأشدّ، ولن تتخطّاه هذه الصفحة. ذكر السياق ثلاث مراتب في النشوز، ثالثتها ﴿وَٱضْرِبُوهُنَّ﴾. وثلاثةُ أمورٍ يجب أن تُقال فيه بإنصاف:\n\n**الأوّل: ما فعله ﷺ.** قالت عائشة: ما ضرب رسول الله ﷺ خادمًا له ولا امرأةً ولا ضرب بيده شيئًا قطّ. وهو الرجل الذي نزلت عليه الآية، وهو بيانُها العمليّ.\n\n**الثاني: ما قاله.** أوصى في خطبة الوداع، في أعظم جمعٍ خاطبه، بالنساء خيرًا. وقال: خيركم خيركم لأهله.\n\n**الثالث: ما قرّره العلماء.** رُوي عن ابن عبّاسٍ تفسيرُه بالضرب بالسواك. وذهب الشافعيّ إلى أنّ تركه أولى. واشترط المجيزون ألّا يجرح ولا يكسر ولا يترك أثرًا ولا يقع على الوجه. فما كان قول المتقدّمين إطلاقًا قطّ، وإنما كان **تضييقًا** على عادةٍ كانت قائمةً في الأرض كلّها بلا قيد.\n\nواقرأ آخر السياق، وهو الذي يُقطع في الغالب: ﴿فَإِنْ أَطَعْنَكُمْ فَلَا تَبْغُوا۟ عَلَيْهِنَّ سَبِيلًا﴾. فالمقصد المنصوص بقاءُ النكاح، لا انتصارُ رجل.",
        plain: "In plain words: qawwam means the one who stands responsible and pays — the verse ties it to spending in the same sentence. It is a duty, not a rank.\n\nOn the third step, the honest answer is the Prophet's ﷺ own life: Aishah said he never once struck a woman, a servant, or anything with his hand. He said the best of you are the best to their wives.\n\nThe scholars who permitted it hedged it until almost nothing was left — Ibn Abbas said with a tooth-stick, ash-Shafi'i said leaving it is better, and all of them barred anything that injures, marks, or touches the face.\n\nAnd the sentence people stop before: if they obey you, seek no way against them. The verse is trying to save a marriage.",
        plainAr: "بكلامٍ بسيط: **قوّام** هو القائم بالأمر المنفق عليه — والآية تربطه بالإنفاق في الجملة نفسها. فهو تكليفٌ لا رتبة.\n\nوأمّا المرتبة الثالثة، فالجواب المنصف سيرتُه ﷺ: قالت عائشة ما ضرب امرأةً قطّ ولا خادمًا ولا شيئًا بيده. وقال: خيركم خيركم لأهله.\n\nوالذين أجازوه ضيّقوه حتى كاد لا يبقى منه شيء: قال ابن عبّاس بالسواك، وقال الشافعيّ تركُه أولى، ومنعوا جميعًا ما يجرح أو يؤثّر أو يقع على الوجه.\n\nوالجملة التي يقف الناس قبلها: ﴿فَإِنْ أَطَعْنَكُمْ فَلَا تَبْغُوا۟ عَلَيْهِنَّ سَبِيلًا﴾. فالآية تريد أن يبقى البيت.",
        ref: "Surah An-Nisa (4:34) · “He never struck a woman or a servant”: Sahih Muslim, Book of Virtues — Aishah · “The best of you are the best to their wives”: at-Tirmidhi 3895 — outside the two Sahihs, authenticated by al-Albani · Al-Mufradat, Ar-Raghib al-Isfahani, entry q-w-m",
        strength: "ikhtilaf"
      }
    ]
  },

  5: {
    surahTitle: "The verse everyone quotes, and the frame everyone drops",
    surahTitleAr: "الآية التي يَنقلها الجميع، والإطار الذي يُسقطه الجميع",
    partial: true,
    ayat: [
      {
        n: 32,
        ar: "مِنْ أَجْلِ ذَٰلِكَ كَتَبْنَا عَلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ أَنَّهُۥ مَن قَتَلَ نَفْسًۢا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍۢ فِى ٱلْأَرْضِ فَكَأَنَّمَا قَتَلَ ٱلنَّاسَ جَمِيعًۭا وَمَنْ أَحْيَاهَا فَكَأَنَّمَآ أَحْيَا ٱلنَّاسَ جَمِيعًۭا",
        why: "Read the words the quotation usually starts after: BECAUSE OF THAT. Because of what? The verse before it is the story of the two sons of Adam — one killed the other, and the killer then did not even know how to bury the body. This ruling is placed immediately after the first murder in human history, as the conclusion drawn from it.\n\nThat is why one soul equals all of mankind here. Cain did not kill a population; he killed one man, and with him he killed the whole of what that man would have become. The verse is generalising from a single grave.\n\nTwo things are worth being exact about. It says WE DECREED UPON THE CHILDREN OF ISRAEL — the wording is honest that this was a prior legislation, and the Quran is reporting it as binding testimony, not inventing it. And critics who quote only the killing clause always drop the second half, which is in the same breath and is the point being made: whoever saves one life, it is as if he saved all of mankind.",
        whyAr: "اقرأ الكلمات التي يبدأ النقلُ بعدها عادةً: ﴿**مِنْ أَجْلِ ذَٰلِكَ**﴾. من أجل ماذا؟ الآيةُ قبلها خبرُ ابنَي آدم: قتل أحدهما أخاه، ثم لم يُحسن مواراة جسده. فوُضع هذا الحكم عقب أوّل قتلٍ في تاريخ البشر، نتيجةً مستخرجةً منه.\n\nولهذا صارت النفس الواحدة هنا كالناس جميعًا: فما قتل قابيلُ أمّةً، وإنما قتل رجلًا واحدًا، وقتل معه كلَّ ما كان سيكون منه. فالآية تُعمّم من قبرٍ واحد.\n\nوأمران يُضبطان: قوله ﴿كَتَبْنَا عَلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ﴾ تصريحٌ بأنّ هذا تشريعٌ سابق، والقرآن يُخبر به شهادةً مُلزِمة لا يبتدعه. والذين ينقلون شطر القتل وحده يُسقطون دائمًا الشطر الثاني، وهو في النَّفَس نفسه وهو المقصود: ﴿وَمَنْ أَحْيَاهَا فَكَأَنَّمَآ أَحْيَا ٱلنَّاسَ جَمِيعًۭا﴾.",
        ref: "Surah Al-Ma'idah (5:32), read with 5:27-31",
        strength: "quran"
      }
    ]
  },

  6: {
    surahTitle: "What He knows, put in terms you can picture",
    surahTitleAr: "علمُه سبحانه مضروبًا لك في صورةٍ تُتخيَّل",
    partial: true,
    ayat: [
      {
        n: 59,
        ar: "وَعِندَهُۥ مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ ۚ وَيَعْلَمُ مَا فِى ٱلْبَرِّ وَٱلْبَحْرِ ۚ وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا وَلَا حَبَّةٍۢ فِى ظُلُمَٰتِ ٱلْأَرْضِ وَلَا رَطْبٍۢ وَلَا يَابِسٍ إِلَّا فِى كِتَٰبٍۢ مُّبِينٍۢ",
        why: "Notice the direction the verse travels. It opens at the largest possible scale — the keys of the unseen, which nobody holds but Him — and then descends, deliberately, to the smallest thing a person could imagine: a single leaf coming off a tree.\n\nThat is the argument. Anyone can say God knows everything; the sentence costs nothing. The verse makes it cost something by naming one leaf, then one seed buried in the layered darkness of the soil where no eye reaches, and then everything moist and everything dry.\n\nWhat it does to a reader is the point. A person who is certain that a falling leaf is known does not need to be told separately that his own situation is known. The verse proves the large by insisting on the small.",
        whyAr: "انظر إلى الجهة التي تسير فيها الآية: تفتتح بأوسع ما يكون — ﴿مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ﴾ — ثم تنزل عن قصدٍ إلى أصغر ما يخطر ببال إنسان: ورقةٌ واحدةٌ تسقط عن شجرة.\n\nوهذه هي الحجّة. فقولُ القائل: الله يعلم كلّ شيء، لا يكلّفه شيئًا. فجعلت الآيةُ له ثمنًا بتسمية **ورقةٍ** بعينها، ثم **حبّةٍ** مدفونةٍ في ظلمات الأرض حيث لا يبلغها بصر، ثم كلِّ رطبٍ ويابس.\n\nوالمقصود أثرُها في القارئ: فمن أيقن أنّ الورقة الساقطة معلومة لم يحتج أن يُقال له على حِدةٍ إنّ حاله معلوم. فأثبتت الآيةُ الكبيرَ بإلحاحها على الصغير.",
        ref: "Surah Al-An'am (6:59)",
        strength: "quran"
      }
    ]
  },

  7: {
    surahTitle: "The agreement you do not remember making",
    surahTitleAr: "العهدُ الذي لا تذكر أنك أعطيتَه",
    partial: true,
    ayat: [
      {
        n: 172,
        ar: "وَإِذْ أَخَذَ رَبُّكَ مِنۢ بَنِىٓ ءَادَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰٓ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا۟ بَلَىٰ ۛ شَهِدْنَآ ۛ أَن تَقُولُوا۟ يَوْمَ ٱلْقِيَٰمَةِ إِنَّا كُنَّا عَنْ هَٰذَا غَٰفِلِينَ",
        why: "The whole of humanity is brought out and asked one question — am I not your Lord? — and answers yes. Then the reason is given: so that you cannot say on the Day of Judgement that you had no idea.\n\nWhat makes this verse worth sitting with is that nobody remembers it. So what was left behind? The scholars connect it to the fitrah — the disposition a person is created on, mentioned in the hadith that every child is born upon the fitrah and it is his parents who make him something else. The testimony is not stored as a memory; it is built into the person as a leaning.\n\nWhich explains something ordinary and strange: a man who was raised on nothing, who was taught no religion at all, still turns upward when the aircraft drops. Nobody taught him that. The verse says it was already there, and that it was witnessed.",
        whyAr: "أُخرجت الذرّيّة كلُّها وسُئلت سؤالًا واحدًا: ﴿أَلَسْتُ بِرَبِّكُمْ﴾، فأجابت: ﴿بَلَىٰ شَهِدْنَآ﴾. ثم ذُكرت العلّة: ﴿أَن تَقُولُوا۟ يَوْمَ ٱلْقِيَٰمَةِ إِنَّا كُنَّا عَنْ هَٰذَا غَٰفِلِينَ﴾.\n\nوالذي يستحقّ الوقوف أنّ أحدًا لا يذكر ذلك. فما الذي بقي إذن؟ ربط أهل العلم هذا بالفطرة، وهي الجِبِلّة التي يُخلق عليها المرء، وفي الحديث: كلُّ مولودٍ يُولد على الفطرة، فأبواه يُهوّدانه أو يُنصّرانه أو يُمجّسانه. فالشهادة لم تُحفظ ذكرى، وإنما رُكّبت في الإنسان **ميلًا**.\n\nوبه يُفسَّر أمرٌ مألوفٌ عجيب: رجلٌ نشأ على غير دين، ولم يُلقَّن شيئًا، ثم تهبط به الطائرة فيرفع رأسه إلى فوق. ما علّمه ذلك أحد. تقول الآية: كان ذلك فيه من قبل، وقد أُشهد عليه.",
        ref: "Surah Al-A'raf (7:172) · The fitrah: Sahih al-Bukhari 1385 and Sahih Muslim — Abu Hurairah",
        strength: "quran"
      }
    ]
  },

  8: {
    surahTitle: "The verse quoted by the violent and by their critics, for the same reason",
    surahTitleAr: "آيةٌ يحتجّ بها أهلُ العنف ومن يُنكرون عليهم، لعلّةٍ واحدة",
    partial: true,
    ayat: [
      {
        n: 60,
        ar: "وَأَعِدُّوا۟ لَهُم مَّا ٱسْتَطَعْتُم مِّن قُوَّةٍۢ وَمِن رِّبَاطِ ٱلْخَيْلِ تُرْهِبُونَ بِهِۦ عَدُوَّ ٱللَّهِ وَعَدُوَّكُمْ",
        arNote: "The opening of the verse. It continues to “and others besides them whom you do not know; Allah knows them”, and then to spending in the cause of Allah.",
        arNoteAr: "مطلع الآية، وتمامها: ﴿وَءَاخَرِينَ مِن دُونِهِمْ لَا تَعْلَمُونَهُمُ ٱللَّهُ يَعْلَمُهُمْ﴾، ثم في الإنفاق في سبيل الله.",
        why: "The word people build on is TURHIBUN — from r-h-b, fear. It is the word an opponent points at to say the Book commands terrorising, and the word a militant points at to justify it. Both are reading it as a licence for an ACT. It is not describing an act at all; it is describing the effect of a state of readiness.\n\nRead what is actually commanded: prepare. The command is to be strong. What follows — that the enemy is deterred — is the result of the preparation, not a separate instruction to go and frighten people. A state that maintains a capable army deters attack by having it, and that is the plain sense here.\n\nAnd the passage does not stop where the quotation stops. The very next verse: and if they incline to peace, then incline to it, and rely upon Allah. Strength is commanded, and then peace is commanded the moment it is offered — which is the opposite of what both readings need the verse to say.",
        whyAr: "اللفظ الذي يُبنى عليه ﴿تُرْهِبُونَ﴾، من (ر ه ب) وهو الخوف. وهو اللفظ الذي يُشير إليه الخصم ليقول إنّ الكتاب يأمر بالإرهاب، وهو اللفظ نفسه الذي يتعلّق به من يستبيح الدماء. وكلاهما يقرؤه إذنًا في **فعل**. وليس فيه وصفُ فعلٍ أصلًا، وإنما وصفُ **أثرٍ** لحالٍ من الاستعداد.\n\nانظر إلى المأمور به: ﴿وَأَعِدُّوا۟﴾. فالأمر أن تكون قويًّا. وما بعده — ارتهابُ العدوّ — نتيجةُ الإعداد، لا أمرًا آخر بترويع الناس. والدولةُ التي تُقيم جيشًا قادرًا تمنع العدوان بوجوده، وهذا هو الظاهر هنا.\n\nولا يقف السياق حيث يقف النقل. فالآية التي تليها مباشرةً: ﴿وَإِن جَنَحُوا۟ لِلسَّلْمِ فَٱجْنَحْ لَهَا وَتَوَكَّلْ عَلَى ٱللَّهِ﴾. فأُمر بالقوّة، ثم أُمر بالسلم في اللحظة التي يُعرض فيها — وهو ضدّ ما تحتاجه القراءتان جميعًا.",
        ref: "Surah Al-Anfal (8:60), read with 8:61",
        strength: "quran"
      }
    ]
  },

  9: {
    surahTitle: "At-Tawbah — and the verse quoted more dishonestly than any other",
    surahTitleAr: "التوبة — والآية التي تُقتطع أكثر من كلّ آية",
    partial: true,
    surahWhy: [
      { h: "One verse of this surah is covered", hAr: "المُتناوَل من هذه السورة آيةٌ واحدة",
        en: "At-Tawbah is 129 verses. Verse 5 is here because it is the single most misquoted verse in the Quran, in two opposite directions at once.",
        ar: "التوبة تسعٌ وعشرون ومئة آية. وأُدرجت الخامسة لأنها أكثر آيةٍ في القرآن اقتطاعًا، وفي جهتين متضادّتين معًا.",
        ref: "", strength: "note" }
    ],
    ayat: [
      {
        n: 5,
        ar: "فَإِذَا ٱنسَلَخَ ٱلْأَشْهُرُ ٱلْحُرُمُ فَٱقْتُلُوا۟ ٱلْمُشْرِكِينَ حَيْثُ وَجَدتُّمُوهُمْ",
        why: "This is what gets quoted — and it is quoted with the first half of the sentence cut off and the second half cut off.\n\nWhat comes BEFORE: “when the sacred months have passed.” This is not a general instruction; it is the end of a stated notice period, given to specific tribes who had signed a treaty and broken it. The surah says so a few verses earlier.\n\nWhat comes in the SAME verse, after: “but if they repent, establish the prayer and give zakat, then let them go on their way.” The verse itself names the exit.",
        whyAr: "هذا هو المقتطَع — ويُقتطع وقد حُذف صدرُ الجملة وحُذف عجزُها.\n\nأمّا ما قبله: ﴿فَإِذَا ٱنسَلَخَ ٱلْأَشْهُرُ ٱلْحُرُمُ﴾. فليس أمرًا عامًّا، وإنما هو انقضاء مهلةٍ مضروبةٍ لقبائل بأعيانها عاهدت فنقضت، وقد نصّت السورة على ذلك قبله بآيات.\n\nوأمّا ما في الآية **نفسها** بعده: ﴿فَإِن تَابُوا۟ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَءَاتَوُا۟ ٱلزَّكَوٰةَ فَخَلُّوا۟ سَبِيلَهُمْ﴾. فالآية ذكرت المخرج بنفسها.",
        misunderstood: "MISUSED IN TWO OPPOSITE DIRECTIONS, and both need naming.\n\nThe first: people hostile to Islam quote the middle of the verse alone, as proof the Quran commands killing non-Muslims on sight.\n\nThe second, and this one is worse because it comes from inside: extremists quote exactly the same fragment, in exactly the same way, to authorise exactly what the first group accuses us of. They are reading it identically. The only difference is one is accusing and the other is agreeing.\n\nWHAT SETTLES IT is the verse immediately after, verse 6, and almost nobody who quotes verse 5 ever reads it: “And if any one of the polytheists seeks your protection, then grant him protection so that he may hear the words of Allah. Then deliver him to his place of safety.”\n\nRead them in order. Verse 5 ends a war with treaty-breakers. Verse 6 says that if one of those very people asks you for safety, you must protect him, let him hear the Quran, and then personally escort him somewhere safe. That is not a footnote — it is the next sentence.\n\nA rule you can carry: any verse about fighting in the Quran sits inside a passage that names who, why, and when it stops. If someone hands you the middle of one, they have removed the parts that answer those three questions.",
        misunderstoodAr: "تُساء في جهتين متضادّتين، ولا بدّ من تسميتهما معًا.\n\nالأولى: أن ينقل المناوئون للإسلام وسط الآية وحده، دليلًا على أنّ القرآن يأمر بقتل غير المسلمين حيثما وُجدوا.\n\nوالثانية، وهي أسوأ لأنها من الداخل: أن ينقل الغلاة **المقطع نفسه بعينه** وعلى الوجه نفسه، ليُبيحوا ما يتّهمنا به الأوّلون. فقراءتهم واحدة، وإنما الفرق أنّ أحدهما يتّهم والآخر يُوافق.\n\nوالذي يحسم الأمر هو الآية التي تليها مباشرة، ولا يكاد يقرؤها أحدٌ ممّن ينقل الخامسة: ﴿وَإِنْ أَحَدٌۭ مِّنَ ٱلْمُشْرِكِينَ ٱسْتَجَارَكَ فَأَجِرْهُ حَتَّىٰ يَسْمَعَ كَلَٰمَ ٱللَّهِ ثُمَّ أَبْلِغْهُ مَأْمَنَهُۥ﴾.\n\nاقرأهما على الترتيب: الخامسة تُنهي حربًا مع ناقضي عهد. والسادسة تقول إنّ واحدًا من أولئك أنفسهم إذا استجارك وجب أن تُجيره، وأن تُسمعه القرآن، ثم أن **تُبلغه مأمنه** بنفسك. وليس هذا هامشًا، بل هو الجملة التالية.\n\nوقاعدةٌ تحملها معك: كلُّ آية قتالٍ في القرآن واقعةٌ في سياقٍ يُسمّي مَن، ولماذا، ومتى يتوقّف. فمن ناولك وسطها فقد نزع الأجزاء التي تُجيب عن هذه الثلاثة.",
        plain: "In plain words: this verse is about the end of a specific war with specific tribes who signed a treaty and broke it, after a notice period ran out.\n\nAnd the very next sentence says: if one of those same people comes to you asking for safety, protect him, let him hear the Quran, and then walk him to somewhere safe yourself.\n\nWhoever hands you the middle of verse 5 and stops has hidden verse 6 from you. Ask them to read the next line.",
        plainAr: "بكلامٍ بسيط: هذه الآية في نهاية حربٍ معيّنة مع قبائل معيّنة عاهدت فنقضت، بعد انقضاء مهلةٍ مضروبة.\n\nوالجملة التي تليها مباشرة تقول: إذا جاءك واحدٌ من أولئك أنفسهم يطلب الأمان، فأجِره، وأسمِعه القرآن، ثم أوصِله بنفسك إلى مكانٍ آمن.\n\nفمن ناولك وسط الآية الخامسة ووقف، فقد أخفى عنك السادسة. اطلب منه أن يقرأ السطر التالي."
      }
    ]
  },

  70: {
    surahTitle: "Al-Ma'arij — and why the Quran keeps describing you badly",
    surahTitleAr: "المعارج — ولماذا يصف القرآن الإنسان بالسوء",
    partial: true,
    surahWhy: [
      { h: "One verse, because of the question it answers", hAr: "آيةٌ واحدة، لأجل السؤال الذي تُجيبه",
        en: "Verse 19 is here because of a question many readers have and few ask aloud: why does the Quran seem to speak about the human being so negatively?",
        ar: "أُدرجت التاسعة عشرة لأجل سؤالٍ يدور في نفوس كثيرٍ من القرّاء ولا يكاد يُنطق به: لِمَ يبدو القرآن قاسيًا في وصف الإنسان؟",
        ref: "", strength: "note" }
    ],
    ayat: [
      {
        n: 19,
        ar: "إِنَّ ٱلْإِنسَٰنَ خُلِقَ هَلُوعًا • إِذَا مَسَّهُ ٱلشَّرُّ جَزُوعًۭا • وَإِذَا مَسَّهُ ٱلْخَيْرُ مَنُوعًا",
        why: "Halu' is defined by the two verses after it, so the Quran does not leave you guessing: when bad touches him, he panics; when good touches him, he withholds it.\n\nThat is a precise description of a person, not an insult. Everyone has watched themselves do both.",
        whyAr: "فُسّر «الهلوع» بالآيتين بعده، فلم يترك القرآن الأمر للحدس: ﴿إِذَا مَسَّهُ ٱلشَّرُّ جَزُوعًۭا • وَإِذَا مَسَّهُ ٱلْخَيْرُ مَنُوعًا﴾.\n\nوهذا وصفٌ دقيقٌ لحال الإنسان لا شتيمةٌ له. وكلُّ أحدٍ قد رأى نفسه يصنع الأمرين.",
        misunderstood: "THE QUESTION PEOPLE ACTUALLY HAVE: why is the human being always described badly in the Quran — weak, panicking, withholding, unjust, ignorant? Where is the encouragement?\n\nTHE ANSWER IS IN THE STRUCTURE, and it is the same every single time.\n\nLook at what follows this one: “EXCEPT those who pray.” The description is not a verdict — it is a starting position, and the next word is the way out.\n\nIt happens everywhere:\n· “Man was created weak” (4:28) — and the sentence BEGINS “Allah wishes to lighten for you”\n· “Indeed he was unjust and ignorant” (33:72) — said of the one who accepted a trust the heavens and mountains refused\n· “Man is in loss” (103:2) — “EXCEPT those who believe and do righteous deeds”\n· “We created man in the best of forms, then reduced him to the lowest” (95:4-5) — “EXCEPT those who believe”\n\nSo the pattern is: here is what you are by default, and here is the exception — and you are being handed the exception.\n\nAND THE COUNTERWEIGHT IS NOT SMALL. The same Book says We honoured the children of Adam (17:70), taught Adam all the names while the angels had none (2:31), made him a khalifah, and had the angels prostrate to him. Nobody who reads only the harsh verses has read the Quran on the human being; nobody who reads only the honouring ones has either.\n\nWHY IT IS DONE THIS WAY: a description that flattered you would not move you. The verse names the exact fault you can feel in yourself — panic in hardship, tightness in ease — and then, in the next breath, tells you which door is open.",
        misunderstoodAr: "السؤال الذي يدور في النفوس: لِمَ يُوصَف الإنسان في القرآن بالسوء دائمًا — ضعيفًا، جزوعًا، منوعًا، ظلومًا، جهولًا؟ وأين التشجيع؟\n\nوالجواب في البناء نفسه، وهو مطّردٌ في كلّ موضع.\n\nانظر ما الذي أعقب هذه الآية: ﴿إِلَّا ٱلْمُصَلِّينَ﴾. فالوصف ليس حكمًا نهائيًّا، وإنما هو نقطة البداية، والكلمة التالية له هي المخرج.\n\nوهكذا في كلّ موضع:\n· ﴿وَخُلِقَ ٱلْإِنسَٰنُ ضَعِيفًۭا﴾ — والجملة **تبدأ** بـ﴿يُرِيدُ ٱللَّهُ أَن يُخَفِّفَ عَنكُمْ﴾\n· ﴿إِنَّهُۥ كَانَ ظَلُومًۭا جَهُولًۭا﴾ — قيلت في الذي حمل أمانةً أبتها السماوات والجبال\n· ﴿إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ﴾ — ﴿**إِلَّا** ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ﴾\n· ﴿لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍۢ • ثُمَّ رَدَدْنَٰهُ أَسْفَلَ سَٰفِلِينَ﴾ — ﴿**إِلَّا** ٱلَّذِينَ ءَامَنُوا۟﴾\n\nفالنسق: هذا حالك إن تُركت، وهذا الاستثناء — وأنت تُناوَل الاستثناء.\n\nوالكِفّة المقابلة ليست يسيرة: فالكتاب نفسه يقول ﴿وَلَقَدْ كَرَّمْنَا بَنِىٓ ءَادَمَ﴾، وعلّم آدم الأسماء كلّها ولا علم للملائكة، وجعله خليفة، وأمر الملائكة بالسجود له. فمن قرأ آيات الذمّ وحدها لم يقرأ القرآن في الإنسان، ومن قرأ آيات التكريم وحدها فكذلك.\n\nولِمَ جاء على هذا الوجه؟ لأنّ وصفًا يُطريك لا يُحرّكك. فتُسمّي الآيةُ العيب الذي تجده في نفسك بعينه — جزعٌ عند الشدّة وإمساكٌ عند السَّعة — ثم تدلّك في النفَس نفسه على الباب المفتوح.",
        plain: "In plain words: you have probably wondered why the Quran talks about people so harshly. Weak. Panicking. Stingy. Unjust.\n\nHere is the thing to notice, and once you see it you will see it everywhere: the harsh description is almost never the end of the sentence. Look at what comes right after this one — “EXCEPT those who pray.”\n\nIt is the same in Al-Asr: everyone is in loss — except. And in At-Tin: we made him in the best form, then brought him low — except.\n\nSo it is not an insult. It is a diagnosis followed immediately by the treatment. And the same Book says He honoured the children of Adam and taught the first man what the angels did not know. Both halves are there; most people have only been shown one.",
        plainAr: "بكلامٍ بسيط: لعلّك تساءلتَ لِمَ يتكلّم القرآن عن الناس بهذه الشدّة: ضعيف، جزوع، منوع، ظلوم.\n\nوهذا ما ينبغي أن تنتبه له، وإذا رأيتَه رأيتَه في كلّ مكان: الوصف الشديد لا يكاد يكون آخر الجملة. انظر ما الذي جاء بعد هذه مباشرة: ﴿**إِلَّا** ٱلْمُصَلِّينَ﴾.\n\nوكذلك في العصر: الناس كلّهم في خسر — **إلا**. وفي التين: خلقناه في أحسن تقويم ثم رددناه أسفل سافلين — **إلا**.\n\nفليس هذا سبًّا، وإنما هو تشخيصٌ يعقبه العلاج في الحال. والكتاب نفسه يقول إنه كرّم بني آدم، وعلّم أوّل إنسانٍ ما لم تعلمه الملائكة. فالكِفّتان موجودتان، وأكثر الناس لم يُعرض عليهم إلا واحدة."
      }
    ]
  },

  10: {
    surahTitle: "Who the friends of Allah actually are",
    surahTitleAr: "من هم أولياء الله حقًّا",
    partial: true,
    ayat: [
      {
        n: 62,
        ar: "أَلَآ إِنَّ أَوْلِيَآءَ ٱللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
        why: "Two different things are denied, and they point in opposite directions in time. KHAWF is about what has not happened yet — the tightening in the chest before an outcome. HUZN is about what has already happened and cannot be undone. Between them they cover a person's whole exposure: the future he cannot control and the past he cannot repair.\n\nBoth are lifted. Not lessened — denied outright.\n\nAnd then the next verse does something the reader should not walk past: it defines the term rather than leaving it to be claimed. Those who believed and were conscious of Allah. That is the whole definition. No lineage, no station, no tomb, no title conferred by other people. The Quran defines wali before anybody could turn it into a rank.",
        whyAr: "نُفي شيئان مختلفان، وهما في الزمن متقابلان: **الخوف** إنما يكون ممّا لم يقع بعد، وهو ضِيقُ الصدر قبل العاقبة. و**الحزن** إنما يكون على ما وقع فلا يُستدرك. وهما يستغرقان معًا كلَّ ما يَعرِض للإنسان: مستقبلٌ لا يملكه، وماضٍ لا يُصلحه.\n\nورُفعا جميعًا. لا خُفّفا، بل نُفيا نفيًا.\n\nثم تصنع الآيةُ التي بعدها ما لا ينبغي أن يمرّ عليه القارئ: تحدّ اللفظ ولا تدعه يُدّعى: ﴿ٱلَّذِينَ ءَامَنُوا۟ وَكَانُوا۟ يَتَّقُونَ﴾. هذا هو الحدّ كلّه. لا نسب، ولا مقام، ولا قبر، ولا لقبٌ يُخلعه الناس. حدّ القرآنُ **الوليّ** قبل أن يجعله أحدٌ رتبة.",
        ref: "Surah Yunus (10:62), read with 10:63",
        strength: "quran"
      }
    ]
  },

  11: {
    surahTitle: "The command that turned his hair white",
    surahTitleAr: "الأمر الذي شيّب رأسه ﷺ",
    partial: true,
    ayat: [
      {
        n: 112,
        ar: "فَٱسْتَقِمْ كَمَآ أُمِرْتَ وَمَن تَابَ مَعَكَ وَلَا تَطْغَوْا۟ ۚ إِنَّهُۥ بِمَا تَعْمَلُونَ بَصِيرٌۭ",
        why: "He ﷺ said Hud and its sisters had turned his hair white. And when a man is shown a surah full of destroyed nations, the assumption is that the weight came from the punishment scenes. Look at what the surah actually asks of him instead.\n\nISTIQAMAH is not an act you perform once. It is staying exactly on the line, continuously, without drifting. And the standard set is not your best effort — it is KAMA UMIRTA, as you were commanded. Measured against the instruction, not against your intention.\n\nThen it widens: and those who have turned back with you. He is made responsible for holding a line he also has to hold for other people.\n\nAnd then, immediately, the boundary on the other side — and do not transgress. Do not overshoot. A man straining to be exactly upright will be tempted to go past the mark to be safe, and that is closed off too. Straightness is a narrow thing with an edge on both sides, and that is a heavier burden than fear of punishment.",
        whyAr: "قال ﷺ: شيّبتني هودٌ وأخواتها. وإذا رأى الناسُ سورةً ملأى بالأمم المهلَكة ظنّوا الثِّقَل من مشاهد العذاب. فانظر إلى الذي طلبته السورةُ منه.\n\n**الاستقامة** ليست فعلةً تُفعل مرّة، وإنما هي لزومُ الجادّة على الدوام من غير مَيْل. والمعيارُ المضروب ليس جُهدك، وإنما ﴿**كَمَآ أُمِرْتَ**﴾: يُقاس بالأمر لا بالنيّة.\n\nثم اتّسع: ﴿وَمَن تَابَ مَعَكَ﴾، فحُمّل خطًّا يلزمه ويلزم به غيره.\n\nثم جاء في الحال الحدُّ من الجهة الأخرى: ﴿وَلَا تَطْغَوْا۟﴾، أي لا تُجاوزوا. فالمجتهد في الاستقامة يُغريه أن يتعدّى الحدّ احتياطًا، فسُدّ عليه هذا أيضًا. فالاستقامةُ مَسلكٌ ضيّقٌ له حافّتان، وهذا أثقل من الخوف من العذاب.",
        ref: "Surah Hud (11:112) · “Hud and its sisters turned my hair white”: at-Tirmidhi 3297 — outside the two Sahihs",
        strength: "quran"
      }
    ]
  },

  12: {
    surahTitle: "Said by a man who had been waiting for decades",
    surahTitleAr: "قالها رجلٌ انتظر عشرات السنين",
    partial: true,
    ayat: [
      {
        n: 87,
        ar: "يَٰبَنِىَّ ٱذْهَبُوا۟ فَتَحَسَّسُوا۟ مِن يُوسُفَ وَأَخِيهِ وَلَا تَا۟يْـَٔسُوا۟ مِن رَّوْحِ ٱللَّهِ ۖ إِنَّهُۥ لَا يَا۟يْـَٔسُ مِن رَّوْحِ ٱللَّهِ إِلَّا ٱلْقَوْمُ ٱلْكَٰفِرُونَ",
        why: "Who is saying this matters more than the sentence itself. Ya'qub has lost Yusuf for years, has now lost the second son as well, and has wept until his eyesight is gone. This is not encouragement offered by someone comfortable. It is a man at the bottom, instructing his sons not to give up.\n\nAnd look at the order of the two commands, because it is the whole lesson. GO AND SEARCH comes first; do not despair comes second. He does not tell them to sit and hope. He sends them out to look, and then tells them what to carry while they are looking. Trust is attached to effort here, not offered instead of it.\n\nThen the word: RAWH, not RUH. Ar-Raghib notes rawh as relief and ease — a breath of air after being closed in. He is not telling them to expect Yusuf back. He is telling them to expect relief from Allah, which is a wider thing and which arrived in a form none of them predicted.",
        whyAr: "القائلُ أهمّ من المقول. يعقوبُ فقد يوسفَ سنين، ثم فقد الثاني، وبكى حتى ذهب بصره. فليست هذه تسليةَ مرتاحٍ، وإنما رجلٌ في القاع يأمر بنيه ألّا يقطعوا الرجاء.\n\nوانظر ترتيب الأمرين، ففيه الدرس كلُّه: ﴿ٱذْهَبُوا۟ فَتَحَسَّسُوا۟﴾ أوّلًا، ثم ﴿وَلَا تَا۟يْـَٔسُوا۟﴾ ثانيًا. فلم يأمرهم أن يقعدوا راجين، وإنما أخرجهم للطلب ثم قال لهم ما يحملونه وهم يطلبون. فعُلّق الرجاءُ بالسعي، ولم يُجعل بدلًا منه.\n\nثم اللفظ: ﴿رَّوْحِ﴾ لا «رُوح». قال الراغب: الرَّوْح: الفرج وذهاب الغمّ، وهو من الرَّاحة ونسيم الريح. فما وعدهم برَدِّ يوسف، وإنما وعدهم **فرجًا** من الله، وهو أوسع، وقد جاء على وجهٍ لم يقدّره أحدٌ منهم.",
        ref: "Surah Yusuf (12:87) · Al-Mufradat, Ar-Raghib al-Isfahani, entry r-w-h",
        strength: "lugha"
      }
    ]
  },

  13: {
    surahTitle: "Ar-Ra'd — the verse everyone quotes and few finish",
    surahTitleAr: "الرعد — الآية التي يستشهد بها الجميع ويُتمّها القليل",
    partial: true,
    surahWhy: [
      { h: "One verse", hAr: "آيةٌ واحدة",
        en: "Verse 11 carries the sentence most quoted in speeches about change — and it is usually cut in half.",
        ar: "في الآية الحادية عشرة الجملةُ التي يُستشهد بها في كلّ حديثٍ عن التغيير، وهي تُقتطع عادةً من نصفها.",
        ref: "", strength: "note" }
    ],
    ayat: [
      {
        n: 11,
        ar: "إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا۟ مَا بِأَنفُسِهِمْ",
        why: "Note what the verse makes conditional. It does not say Allah will change your state IF you work hard. It says He does not change what is WITH a people until they change what is IN THEMSELVES — anfusihim, their own selves, not their circumstances.\n\nThe inner thing comes first. The outward change follows it.",
        whyAr: "تأمّل ما الذي عُلّق في الآية: لم تقل إنّ الله يُغيّر حالك إن اجتهدت، وإنما قالت إنه لا يُغيّر ما **بقوم** حتى يُغيّروا ما **بأنفسهم** — أنفسهم هم، لا ظروفهم.\n\nفالباطن أوّلًا، والتغيّر الظاهر تابعٌ له.",
        misunderstood: "HOW IT IS USUALLY USED: as a motivational line. Work harder and Allah will improve your situation. It appears on posters and in speeches, always as the first half only.\n\nWHAT IS MISSING: two things.\n\nFirst, the verse is about what is inside people — anfusihim — not their effort or their plans. The change being asked for is in what a people ARE: their honesty, their seriousness, what they tolerate among themselves. Not a productivity method.\n\nSecond, and this is the half almost never quoted: the verse continues, “and when Allah intends for a people a harm, there is no repelling it.” The same sentence that puts change in your hands also states plainly that the outcome is not in your hands. Both halves are one verse.\n\nSo it is not a formula where effort guarantees a result. It is: the inner change is your responsibility, and the outcome remains Allah's. Quoting only the first half turns a verse about accountability into a verse about self-help.",
        misunderstoodAr: "كيف تُستعمل عادةً: جملةً تحفيزيّة — اجتهد يُحسّن اللهُ حالك. تُكتب على اللافتات وتُقال في الخطب، ولا يُنقل منها إلا شطرها الأوّل.\n\nوالذي سقط أمران:\n\nالأوّل: أنّ الآية في **الأنفس** لا في الجهد ولا في الخطط. فالتغيير المطلوب في **ما هم عليه**: صدقهم، وجدّهم، وما يرضونه بينهم. لا في أسلوب إنتاج.\n\nوالثاني، وهو الشطر الذي لا يكاد يُنقل: أنّ الآية تُتِمّ ﴿وَإِذَآ أَرَادَ ٱللَّهُ بِقَوْمٍۢ سُوٓءًۭا فَلَا مَرَدَّ لَهُۥ﴾. فالجملة التي جعلت التغيير بيدك هي نفسها التي تنصّ على أنّ المآل ليس بيدك. والشطران آيةٌ واحدة.\n\nفليست معادلةً يضمن فيها الجهدُ النتيجة، وإنما هي: التغيير الباطن مسؤوليّتك، والمآل لله. ومن نقل الشطر الأوّل وحده حوّل آيةَ مسؤوليّةٍ إلى آيةِ تطوير ذات.",
        plain: "In plain words: this is the verse everyone quotes about change — and almost everyone stops halfway.\n\nWhat it actually says is that the change has to happen in what people ARE, not in what they are doing or planning. Their honesty, their seriousness, what they let pass among themselves.\n\nAnd the second half, which you rarely hear: when Allah intends harm for a people, nothing turns it back. So it is not a guarantee that effort produces results. It is: the inside is your job, the outcome is His.",
        plainAr: "بكلامٍ بسيط: هذه الآية التي يستشهد بها الجميع في التغيير — ويقف أكثرهم في منتصفها.\n\nوالذي تقوله حقًّا أنّ التغيير يقع فيما **هم عليه**، لا فيما يفعلون أو يُخطّطون: في صدقهم، وجدّهم، وما يسكتون عنه بينهم.\n\nوالشطر الثاني الذي قلّ أن تسمعه: إذا أراد الله بقومٍ سوءًا فلا رادّ له. فليست ضمانًا أنّ الجهد يُثمر، وإنما هي: الباطن عملك، والمآل إليه."
      }
    ]
  },

  31: {
    surahTitle: "A father's first sentence to his son",
    surahTitleAr: "أوّلُ ما قاله الأبُ لابنه",
    partial: true,
    ayat: [
      {
        n: 13,
        ar: "وَإِذْ قَالَ لُقْمَٰنُ لِٱبْنِهِۦ وَهُوَ يَعِظُهُۥ يَٰبُنَىَّ لَا تُشْرِكْ بِٱللَّهِ ۖ إِنَّ ٱلشِّرْكَ لَظُلْمٌ عَظِيمٌۭ",
        why: "A wise man is given space in the Quran to advise his son, and this is what he opens with — before prayer, before manners, before the advice about lowering the voice that comes later in the same passage.\n\nAnd notice the form of address: YA BUNAYYA, the diminutive, which in Arabic carries affection rather than belittling. The hardest instruction in the surah is delivered in the softest available word. A father correcting his son on the gravest matter there is does it tenderly, and that is being modelled deliberately.\n\nThen shirk is defined as ZULM — and zulm in the language is putting a thing somewhere it does not belong. Which is exactly what shirk is: worship, which belongs in one place, directed somewhere else. It is not called a crime here but a misplacement, and that is a more precise description of it.",
        whyAr: "أُفسح في القرآن لرجلٍ حكيمٍ أن يعظ ابنه، فكان هذا مفتَتحَه — قبل الصلاة، وقبل الأدب، وقبل الوصيّة بغضّ الصوت التي تأتي في السياق نفسه.\n\nوانظر النداء: ﴿يَٰبُنَىَّ﴾ بالتصغير، وهو في العربيّة تصغيرُ شفقةٍ لا تحقير. فأشدُّ ما في السورة من الأمر أُدّي بألين لفظٍ يُمكن. فالأبُ يُقوّم ابنه في أعظم المسائل فيرفق به، وهذا تعليمٌ مقصود.\n\nثم حُدّ الشركُ بأنه ﴿ظُلْمٌ عَظِيمٌۭ﴾، والظلمُ في اللسان وضعُ الشيء في غير موضعه. وهو الشركُ بعينه: عبادةٌ محلُّها واحد، صُرفت إلى غيره. فما سُمّي هنا جريمةً، وإنما سُمّي **وضعًا في غير موضع**، وهو أدقُّ في وصفه.",
        ref: "Surah Luqman (31:13)",
        strength: "quran"
      }
    ]
  },

  32: {
    surahTitle: "What was kept back on purpose",
    surahTitleAr: "ما أُخفي عن قصد",
    partial: true,
    ayat: [
      {
        n: 17,
        ar: "فَلَا تَعْلَمُ نَفْسٌۭ مَّآ أُخْفِىَ لَهُم مِّن قُرَّةِ أَعْيُنٍۢ جَزَآءًۢ بِمَا كَانُوا۟ يَعْمَلُونَ",
        why: "The Quran describes Paradise in detail in many places — rivers, gardens, shade, companions. Here it does the opposite and says a portion of it has been deliberately withheld from description, and that NO SOUL knows it.\n\nThe expression is QURRAT A'YUN — coolness of the eyes. The Arabs used it for the settling of the eye after it has been restless, and cool tears were the tears of joy as against the hot tears of grief. So the phrase is not brightness or dazzle; it is the eye finally coming to rest.\n\nAnd read the verse before it to see who it is being promised to: those whose sides part from their beds, calling on their Lord in fear and hope. What is hidden is matched to what was hidden — the reward kept out of sight is for the worship that was done out of sight, at night, with nobody watching.",
        whyAr: "وصف القرآنُ الجنّة في مواضع كثيرة: أنهارًا وجنّاتٍ وظلًّا وأزواجًا. وصنع ها هنا خلاف ذلك، فأخبر أنّ طائفةً منها أُخفيت عن الوصف قصدًا، وأنه ﴿فَلَا تَعْلَمُ **نَفْسٌۭ**﴾.\n\nوالتعبير ﴿قُرَّةِ أَعْيُنٍۢ﴾، وهو من قرار العين بعد اضطرابها، وكانت العربُ تجعل دمعَ الفرح باردًا ودمعَ الحزن حارًّا. فليست العبارةُ في البريق والبهر، وإنما في **سكون العين أخيرًا**.\n\nواقرأ الآية قبلها لتعرف لمن وُعد: ﴿تَتَجَافَىٰ جُنُوبُهُمْ عَنِ ٱلْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًۭا وَطَمَعًۭا﴾. فقُوبل المخفيُّ بالمخفيّ: جزاءٌ غُيّب عن العيون لعبادةٍ غُيّبت عن العيون، بالليل، حيث لا يراهم أحد.",
        ref: "Surah As-Sajdah (32:17), read with 32:16",
        strength: "quran"
      }
    ]
  },

  33: {
    surahTitle: "The example, and who it is actually available to",
    surahTitleAr: "الأسوةُ، ولمن هي في الحقيقة",
    partial: true,
    ayat: [
      {
        n: 21,
        ar: "لَّقَدْ كَانَ لَكُمْ فِى رَسُولِ ٱللَّهِ أُسْوَةٌ حَسَنَةٌۭ لِّمَن كَانَ يَرْجُوا۟ ٱللَّهَ وَٱلْيَوْمَ ٱلْءَاخِرَ وَذَكَرَ ٱللَّهَ كَثِيرًۭا",
        why: "Where this verse sits is half its meaning. It is not in a passage about worship or manners — it is in the middle of the siege of the Trench, at the point of maximum fear, when hearts had reached the throats. The example is offered exactly where following it is hardest.\n\nThen the sentence narrows in a way readers often miss. The example is there for you — FOR WHOEVER hopes in Allah and the Last Day and remembers Allah much. Three conditions. The example is available to everyone in principle, and actually usable only by someone with those three, because a man who is not expecting to meet Allah has no reason to imitate a life shaped entirely around that meeting.\n\nSo the verse quietly explains a thing people notice: why two men can study the same biography and only one of them changes.",
        whyAr: "موضعُ الآية نصفُ معناها. فليست في سياق عبادةٍ ولا أدب، وإنما هي في وسط حصار الخندق، عند منتهى الخوف، حين ﴿بَلَغَتِ ٱلْقُلُوبُ ٱلْحَنَاجِرَ﴾. فعُرضت الأسوةُ حيث يشقّ الاقتداءُ أشدَّ ما يشقّ.\n\nثم تضيق الجملةُ على وجهٍ يمرّ عليه القارئ كثيرًا: الأسوةُ لكم — ﴿**لِّمَن** كَانَ يَرْجُوا۟ ٱللَّهَ وَٱلْيَوْمَ ٱلْءَاخِرَ وَذَكَرَ ٱللَّهَ كَثِيرًۭا﴾. ثلاثةُ شروط. فهي متاحةٌ للجميع في الأصل، ولا يقدر على الانتفاع بها إلا من فيه هذه الثلاث، لأنّ من لا يترقّب لقاء الله لا داعي له أن يُقلّد حياةً بُنيت كلُّها على ذلك اللقاء.\n\nفالآيةُ تُفسّر في هدوءٍ أمرًا يراه الناس: لِمَ يقرأ رجلان السيرةَ نفسها فيتغيّر أحدهما وحده.",
        ref: "Surah Al-Ahzab (33:21), read with 33:10",
        strength: "quran"
      }
    ]
  },

  34: {
    surahTitle: "Gratitude described as work, not as a feeling",
    surahTitleAr: "الشكرُ موصوفًا عملًا لا شعورًا",
    partial: true,
    ayat: [
      {
        n: 13,
        ar: "ٱعْمَلُوٓا۟ ءَالَ دَاوُۥدَ شُكْرًۭا ۚ وَقَلِيلٌۭ مِّنْ عِبَادِىَ ٱلشَّكُورُ",
        arNote: "The closing clause of the verse, which begins by describing what the jinn built for Sulayman.",
        arNoteAr: "خاتمةُ الآية، وأوّلها في وصف ما كانت الجنُّ تعمل لسليمان.",
        why: "The command is I'MALU — WORK, gratitude. Not feel it, not say it. The verb chosen is the verb of labour, and gratitude is made its object: the working itself is the thanking.\n\nWhich fits where it is placed. This comes after a description of everything Sulayman was given — the wind, the jinn, structures, vast basins and fixed cauldrons. The response demanded from a family holding that much is not a sentence of praise; it is that the whole operation becomes an act of thanks.\n\nThen the closing count, and it is sobering: few of My servants are grateful. Not few are believers — few are SHAKUR, the intensive form. And the surah has just shown what the alternative looks like: Saba, given two gardens and a settled land, who said give us longer journeys, and were scattered until their name became a byword for dispersal.",
        whyAr: "الأمرُ ﴿ٱعْمَلُوٓا۟﴾ — والشكرُ مفعولُه. لا: اشعروا، ولا: قولوا. فاختير فعلُ الكدّ، وجُعل الشكرُ مفعولًا له: فالعملُ نفسه هو الشكر.\n\nوهذا يوافق موضعه: فقد جاء بعد تعداد ما أُوتيه سليمان — الريحَ والجنَّ والمحاريبَ والجفانَ كالجواب والقدورَ الراسيات. فالمطلوبُ من آلِ بيتٍ بين أيديهم هذا كلُّه ليس جملةَ ثناء، وإنما أن يصير العملُ كلُّه شكرًا.\n\nثم الإحصاءُ الخاتم، وفيه ما يُوقظ: ﴿وَقَلِيلٌۭ مِّنْ عِبَادِىَ ٱلشَّكُورُ﴾. لم يقل: وقليلٌ من عبادي المؤمن، بل **الشكور** على المبالغة. وقد عرضت السورةُ قبلُ صورةَ المقابل: سبأٌ أُعطوا جنّتين وبلدةً طيّبة، فقالوا: ﴿رَبَّنَا بَٰعِدْ بَيْنَ أَسْفَارِنَا﴾، فمُزّقوا حتى صار اسمُهم مثلًا في التفرّق.",
        ref: "Surah Saba (34:13), read with 34:15-19",
        strength: "quran"
      }
    ]
  },

  35: {
    surahTitle: "Which knowledge the verse is talking about",
    surahTitleAr: "أيُّ علمٍ تتكلّم عنه الآية",
    partial: true,
    ayat: [
      {
        n: 28,
        ar: "وَمِنَ ٱلنَّاسِ وَٱلدَّوَآبِّ وَٱلْأَنْعَٰمِ مُخْتَلِفٌ أَلْوَٰنُهُۥ كَذَٰلِكَ ۗ إِنَّمَا يَخْشَى ٱللَّهَ مِنْ عِبَادِهِ ٱلْعُلَمَٰٓؤُا۟",
        why: "Read what comes immediately before the famous clause, because it is almost always cut away. The subject is the variety of colours — in fruits, in mountain tracks, in people, in animals. The verse is looking at the natural world in detail. THEN it says only those with knowledge fear Allah.\n\nSo the knowledge in question is not narrowly the knowledge of law. It is arrived at through looking closely at what He made. A man who studies how a seed splits, or how a colour comes to be in a mountain, is on the road this verse is describing.\n\nAnd the relationship is the reverse of what people assume. The verse does not say the knowledgeable are the ones who fear; it uses INNAMA — a restriction — placing khashyah as the RESULT of knowing. Which gives a test that cuts both ways: knowledge that leaves a man arrogant has not produced the thing this verse says it produces, and fear without knowledge is not what is being praised either.",
        whyAr: "اقرأ ما قبل الجملة المشهورة، فإنه يُقطع في الغالب. فالكلامُ في اختلاف الألوان: في الثمرات، وفي الجبال ﴿جُدَدٌۢ بِيضٌۭ وَحُمْرٌۭ مُّخْتَلِفٌ أَلْوَٰنُهَا﴾، وفي الناس والدوابّ والأنعام. فالآيةُ تُنعم النظر في الخلق. **ثم** قالت: ﴿إِنَّمَا يَخْشَى ٱللَّهَ مِنْ عِبَادِهِ ٱلْعُلَمَٰٓؤُا۟﴾.\n\nفالعلمُ المراد ليس علمَ الأحكام وحده، وإنما يُنال بإدامة النظر فيما صنع. فمن نظر كيف تنشقّ الحبّة، أو كيف يقع اللون في الجبل، فهو على الطريق التي تصفها الآية.\n\nوالنسبةُ عكسُ ما يُظنّ: فلم تقل إنّ العلماء هم الذين يخشون، وإنما جاءت بـ﴿إِنَّمَا﴾ قصرًا، فجعلت الخشية **ثمرةَ** العلم. وفي هذا ميزانٌ يقطع في الجهتين: فعلمٌ يترك صاحبَه متكبّرًا لم يُثمر ما جعلته الآيةُ ثمرته، وخشيةٌ بلا علمٍ ليست هي الممدوحة أيضًا.",
        ref: "Surah Fatir (35:28), read with 35:27",
        strength: "quran"
      }
    ]
  },

  36: {
    surahTitle: "How things actually come into being",
    surahTitleAr: "كيف تقع الأشياء حقًّا",
    partial: true,
    ayat: [
      {
        n: 82,
        ar: "إِنَّمَآ أَمْرُهُۥٓ إِذَآ أَرَادَ شَيْـًٔا أَن يَقُولَ لَهُۥ كُن فَيَكُونُ",
        why: "This is the answer to the question asked four verses earlier, when a man crumbled an old bone in his hand and said: who will give life to bones when they have rotted away?\n\nThe reply does not argue about biology. It changes the frame: you are measuring against effort, and there is no effort involved. Between the intention and the thing existing there is nothing — no process, no materials, no interval that could fail.\n\nAnd the grammar is worth noticing. FA-YAKUN, and it is — not \"and it became\". The Arabic does not put it in the past tense, so the statement is not describing one historical moment of creation. It is describing how it works, continuously.\n\nWhich is why the verse is a comfort as much as a proof. Whatever a person is waiting for, the distance between his situation and its opposite is one word.",
        whyAr: "هذا جوابُ السؤال الذي سُئل قبل أربع آيات، حين فتّ رجلٌ عظمًا باليًا بيده وقال: ﴿مَن يُحْىِ ٱلْعِظَٰمَ وَهِىَ رَمِيمٌۭ﴾.\n\nولم يُجادل الجوابُ في أمرٍ طبيعيّ، وإنما نقل النظر: أنت تقيس بالجهد، ولا جهد ثمّ. فبين الإرادة ووجود الشيء لا شيء: لا طَورٌ ولا مادّةٌ ولا مُهلةٌ يُحتمل أن تتخلّف.\n\nوفي الصياغة ما يُتأمّل: ﴿فَيَكُونُ﴾ لا «فكان». فلم تجعله العربيّةُ ماضيًا، فليس الخبرُ عن لحظةٍ من لحظات الخلق مضت، وإنما هو وصفٌ للأمر كيف يجري، دائمًا.\n\nولذلك كانت الآيةُ تسليةً كما هي حجّة: فمهما يكن الذي ينتظره العبد، فالمسافةُ بين حاله وضدِّها **كلمة**.",
        ref: "Surah Ya-Sin (36:82), read with 36:78",
        strength: "quran"
      }
    ]
  },

  37: {
    surahTitle: "Four words that the scholars weighed for centuries",
    surahTitleAr: "أربع كلماتٍ وزنها العلماء قرونًا",
    partial: true,
    ayat: [
      {
        n: 96,
        ar: "وَٱللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ",
        why: "Said by Ibrahim to people worshipping statues they had carved themselves. The immediate sense is plain and is the one the context demands: Allah made you, and He made the things you are making — so how do you worship what your own hands shaped out of material He created?\n\nBut the wording opens onto the oldest question in this religion, and the honest thing is to say that the scholars differed on it. MA TA'MALUN can be read as what you MAKE — the objects — which is the reading the story supports. It can also be read as what you DO — your actions themselves.\n\nOn the second reading it became a key text in the discussion of qadar, cited by those who held that a servant's actions are created by Allah, against those who held the servant creates his own. The position that settled among the majority is that the action is created by Allah and earned by the servant — he genuinely chooses, and the choosing itself is not outside what Allah made.\n\nThis page will not pretend that is simple or that the debate is closed. What it will say is what the verse itself does not leave open: whichever reading you take, nothing exists that He did not create, and nobody is being wronged.",
        whyAr: "قالها إبراهيم لقومٍ يعبدون أصنامًا نحتوها بأيديهم. والمعنى القريب ظاهرٌ وهو الذي يقتضيه السياق: أنّ الله خلقكم وخلق ما تصنعون، فكيف تعبدون ما سوّته أيديكم من مادّةٍ خلقها هو؟\n\nولكنّ اللفظ يُفضي إلى أقدم مسألةٍ في هذا الباب، والإنصافُ أن يُقال إنّ العلماء اختلفوا فيه. فـ﴿مَا تَعْمَلُونَ﴾ تُقرأ على **ما تنحتون**، أي المصنوعات، وهو ما تشهد له القصّة. وتُقرأ على **أعمالكم** أنفسها.\n\nوعلى الثاني صارت من عُمَد أدلّة القدر، احتجّ بها من قال إنّ أفعال العباد مخلوقةٌ لله، على من قال إنّ العبد يخلق فعل نفسه. والذي استقرّ عليه جمهور أهل السنّة أنّ الفعل مخلوقٌ لله مكسوبٌ للعبد: يختار حقيقةً، واختيارُه نفسه ليس خارجًا عمّا خلق الله.\n\nولن تدّعي هذه الصفحة أنّ الأمر هيّن ولا أنّ النزاع قد انقطع. وإنما تقول ما لا تتركه الآيةُ محتملًا: أنه على القراءتين جميعًا لا يوجد شيءٌ لم يخلقه، ولا يُظلم أحد.",
        ref: "Surah As-Saffat (37:96), read with 37:95",
        strength: "ikhtilaf"
      }
    ]
  },

  38: {
    surahTitle: "The reason the Book was sent down, stated as a purpose",
    surahTitleAr: "عِلّةُ الإنزال مذكورةً تعليلًا",
    partial: true,
    ayat: [
      {
        n: 29,
        ar: "كِتَٰبٌ أَنزَلْنَٰهُ إِلَيْكَ مُبَٰرَكٌۭ لِّيَدَّبَّرُوٓا۟ ءَايَٰتِهِۦ وَلِيَتَذَكَّرَ أُو۟لُوا۟ ٱلْأَلْبَٰبِ",
        why: "The lam on LIYADDABBARU is the lam of purpose: We sent it down IN ORDER THAT its verses be pondered. Reflection is not presented as a virtue available to the specialist. It is the stated reason the Book was revealed at all.\n\nWhich means a relationship with the Quran that consists only of recitation, however beautiful and however constant, is missing the thing the Book says it came for. That is not a criticism of reciting — the reciting is commanded elsewhere and rewarded by the letter. It is a statement that reciting was never meant to be the end of it.\n\nAnd the second half names who benefits: ULU AL-ALBAB. LUBB in the language is the kernel of something, the core left after the shell is removed — the same word used for the heart of a nut. So the ones who are reminded are those who get past the surface of a thing to what is inside it. The word chosen describes exactly the act being asked for.",
        whyAr: "اللام في ﴿لِّيَدَّبَّرُوٓا۟﴾ لام التعليل: أنزلناه **لأجل** أن تُتدبّر آياته. فلم يُجعل التدبّر فضيلةً لأهل الاختصاص، وإنما هو العلّةُ المنصوصة لإنزال الكتاب أصلًا.\n\nومعنى ذلك أنّ صلةً بالقرآن ليس فيها إلا التلاوة، وإن حسُنت ودامت، قد فاتها الذي أخبر الكتابُ أنه جاء له. وليس هذا قدحًا في التلاوة، فهي مأمورٌ بها في مواضع ويُؤجر على الحرف منها؛ وإنما هو إخبارٌ بأنها لم تُجعل غايةً.\n\nوالشطر الثاني يُسمّي المنتفع: ﴿أُو۟لُوا۟ ٱلْأَلْبَٰبِ﴾. و**اللُّبّ** في اللسان خالصُ الشيء وما يبقى بعد إزالة القشر، ومنه لبُّ الثمرة. فالمتذكّرون هم الذين يجاوزون ظاهر الشيء إلى ما فيه. فاللفظُ المختار يصف الفعلَ المطلوب نفسه.",
        ref: "Surah Sad (38:29) · Al-Mufradat, Ar-Raghib al-Isfahani, entry l-b-b",
        strength: "lugha"
      }
    ]
  },

  39: {
    surahTitle: "The verse Ibn Abbas called the most hopeful in the Quran",
    surahTitleAr: "الآية التي سُمّيت أرجى ما في القرآن",
    partial: true,
    ayat: [
      {
        n: 53,
        ar: "قُلْ يَٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا ۚ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ",
        why: "Look at how the people being addressed are named. They are in the middle of the worst of it — they have exceeded all bounds against themselves — and He calls them YA 'IBADI, my servants. The relationship is stated before the sin is mentioned. Nobody has been struck off.\n\nThen the scope: ALL sins. Not most, not the lesser ones. The scholars note the generality is explicit here, and the condition is stated in the next verse — turn back to your Lord and submit to Him — so this is not a licence, it is an open door with a threshold.\n\nAnd the word is TAQNATU, not TAY'ASU. Qunut is the deeper despair, the kind that has settled and become a conviction. The thing being forbidden is not a moment of fear about one's state; it is the settled belief that one is finished.\n\nWhich is why this verse belongs to the person who thinks he has gone too far to come back. That belief is itself the thing the verse came to forbid.",
        whyAr: "انظر بمَ نُودي المخاطَبون. هم في أسوأ ما يكون — ﴿أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ﴾ — ويقول لهم: ﴿يَٰعِبَادِىَ﴾. فذُكرت النسبةُ قبل أن يُذكر الذنب. ولم يُشطب أحد.\n\nثم السعة: ﴿ٱلذُّنُوبَ **جَمِيعًا**﴾. لا أكثرَها ولا صغائرَها. ونبّه أهل العلم على أنّ العموم هنا منصوص، وأنّ الشرط مذكورٌ في الآية التي بعدها: ﴿وَأَنِيبُوٓا۟ إِلَىٰ رَبِّكُمْ وَأَسْلِمُوا۟ لَهُۥ﴾ — فليست رخصةً، وإنما هو بابٌ مفتوحٌ له عَتَبة.\n\nواللفظ ﴿لَا تَقْنَطُوا۟﴾ لا «لا تيأسوا». والقنوط أشدّ، وهو اليأسُ الذي رسخ فصار اعتقادًا. فالمنهيُّ عنه ليس خوفًا يعرِض للعبد من حاله، وإنما اعتقادُه أنه قد انتهى.\n\nولهذا كانت هذه الآيةُ لمن يظنّ أنه جاوز الحدَّ فلا رجعة له. فذلك الظنُّ نفسه هو الذي جاءت الآيةُ تحرّمه.",
        ref: "Surah Az-Zumar (39:53), read with 39:54",
        strength: "quran"
      }
    ]
  },

  40: {
    surahTitle: "Calling on Him is not optional",
    surahTitleAr: "الدعاءُ ليس بابًا اختياريًّا",
    partial: true,
    ayat: [
      {
        n: 60,
        ar: "وَقَالَ رَبُّكُمُ ٱدْعُونِىٓ أَسْتَجِبْ لَكُمْ ۚ إِنَّ ٱلَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِى سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ",
        why: "The first half is the promise everyone knows. The second half is the part that changes what the first half means, and it is usually left off.\n\nRead them together: call on Me and I will answer you — and those who are too proud FOR MY WORSHIP will enter Hell humiliated. Not calling is placed under the heading of arrogance, and the calling is placed under the heading of worship. So dua is not a service a person uses when he needs something. Declining to ask is described as a refusal to be a servant.\n\nThat also explains why the answer is guaranteed while the form of it is not specified. The point of the transaction is the asking — the standing there with a need, which is the acknowledgement that you are not self-sufficient. It is the one act of worship that cannot be performed without admitting what you are.\n\nAnd DAKHIRIN at the end is exact: the humiliated, brought low. The one who was too proud to lower himself once, voluntarily, is lowered anyway.",
        whyAr: "الشطرُ الأوّل هو الوعدُ الذي يعرفه الناس. والشطرُ الثاني هو الذي يُغيّر معنى الأوّل، وهو الذي يُحذف عادةً.\n\nاقرأهما معًا: ﴿ٱدْعُونِىٓ أَسْتَجِبْ لَكُمْ﴾ — ﴿إِنَّ ٱلَّذِينَ يَسْتَكْبِرُونَ **عَنْ عِبَادَتِى** سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ﴾. فجُعل تركُ الدعاء في باب الكِبر، وجُعل الدعاءُ في باب العبادة. فليس الدعاءُ خدمةً يستعملها المرء عند الحاجة، وإنما الامتناعُ عن السؤال وُصف بأنه إباءٌ أن يكون عبدًا.\n\nوبه يُفهم لِمَ ضُمنت الإجابة ولم تُعيَّن صورتُها: فالمقصود من الأمر **السؤالُ** نفسه، أي وقوفُك بحاجتك، وهو إقرارٌ بأنك لست غنيًّا. وهي العبادةُ الوحيدة التي لا تُؤدَّى إلا باعترافك بحقيقتك.\n\nو﴿دَاخِرِينَ﴾ في الآخر دقيق: أي صاغرين أذلّاء. فالذي أنِف أن يتذلّل مرّةً طائعًا، يُذَلّ على كلّ حال.",
        ref: "Surah Ghafir (40:60)",
        strength: "quran"
      }
    ]
  },

  51: {
    surahTitle: "Adh-Dhariyat — the verse that made people think life is only ritual",
    surahTitleAr: "الذاريات — الآية التي ظنّ الناس بها أنّ الحياة عبادةٌ فقط",
    partial: true,
    surahWhy: [
      { h: "One verse", hAr: "آيةٌ واحدة",
        en: "Verse 56 is one of the most quoted in the Quran, and one of the most narrowly understood.",
        ar: "الآية السادسة والخمسون من أكثر آي القرآن استشهادًا، ومن أضيقها فهمًا عند الناس.",
        ref: "", strength: "note" }
    ],
    ayat: [
      {
        n: 56,
        ar: "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
        why: "The word is 'ibadah, and its root in Arabic is submission — a path is called mu'abbad when it has been made smooth by being walked on. To worship is to make your whole way conform.\n\nSo it is not a statement about how many hours you should spend in the mosque. It is a statement about who you are aligned to, in everything.",
        whyAr: "اللفظ «العبادة»، وأصلها في العربية التذلّل والانقياد، ومنه قيل: طريقٌ مُعبَّد، أي ذُلّل بالوطء. فالعبادة أن يجري أمرك كلّه على مقتضى ذلك.\n\nفليست خبرًا عن عدد الساعات في المسجد، وإنما خبرٌ عمّن تنقاد له في كلّ شيء.",
        misunderstood: "HOW IT IS OFTEN READ: that we were created only to pray, fast and make dhikr — so work, study, family and everything else are a distraction from the real purpose, at best tolerated.\n\nThat reading produces two broken people. One feels permanently guilty that his day is full of work rather than worship. The other concludes that the religion is not liveable and quietly gives up.\n\nWHAT 'IBADAH ACTUALLY COVERS, from the Prophet ﷺ himself:\n· He said that what a man spends on his family is a sadaqah\n· He said removing something harmful from the road is a branch of faith\n· He said that in the intimacy a man has with his wife there is a sadaqah — and when the companions were astonished, he answered: if he had put it somewhere forbidden it would have been a sin, so it is a reward when he puts it lawfully\n\nSo the verse is not shrinking your life down to rituals. It is expanding worship out to cover your life — every ordinary act becomes worship the moment it is done for Him and within His limits.\n\nWhich makes the verse the opposite of a burden. Almost nothing you do in a day has to be wasted.",
        misunderstoodAr: "كيف تُقرأ كثيرًا: أنّنا لم نُخلق إلا للصلاة والصيام والذكر، فالعمل والدراسة والأهل وسائر ذلك صوارفُ عن المقصود، يُحتمل احتمالًا.\n\nوهذه القراءة تُخرج رجلين معطوبين: أحدهما في تأنيبٍ دائمٍ لأنّ نهاره عملٌ لا عبادة، والآخر ينتهي إلى أنّ الدين لا يُعاش فيترك في صمت.\n\nوما الذي تشمله العبادة، من قوله ﷺ نفسه:\n· أنّ ما يُنفقه الرجل على أهله صدقة\n· وأنّ إماطة الأذى عن الطريق شعبةٌ من الإيمان\n· وأنّ في بُضع أحدكم صدقة — فلمّا عجب الصحابة قال: أرأيتم لو وضعها في حرامٍ أكان عليه وزر؟ فكذلك إذا وضعها في الحلال كان له أجر\n\nفليست الآية تضييقًا لحياتك في شعائر، وإنما هي توسيعٌ للعبادة حتى تشمل حياتك: فيصير كلُّ عملٍ عاديٍّ عبادةً متى وقع له وفي حدوده.\n\nوبهذا تكون الآية عكس الكُلفة: إذ لا يكاد يضيع من يومك شيء.",
        plain: "In plain words: many people read this and think life is supposed to be prayer and fasting, and everything else — job, study, family — is time stolen from the real thing. That leaves a person either permanently guilty or quietly giving up.\n\nBut the Prophet ﷺ called what a man spends on his family a charity. He called moving something dangerous off the road part of faith. He even told the companions that a man being with his wife is rewarded — and when they were surprised, he asked: if he had done it unlawfully, would it be a sin? Then it is a reward done lawfully.\n\nSo the verse is not shrinking your life into the mosque. It is turning your ordinary day into worship — as long as it is done for Him and inside His limits.",
        plainAr: "بكلامٍ بسيط: يقرأ كثيرون هذه الآية فيظنّون أنّ الحياة صلاةٌ وصيام، وأنّ ما سواها — العمل والدراسة والأهل — وقتٌ مسروقٌ من المقصود. فيبقى المرء إمّا في تأنيبٍ دائم وإمّا تاركًا في صمت.\n\nوقد سمّى النبيّ ﷺ ما يُنفقه الرجل على أهله صدقة، وسمّى إماطة الأذى عن الطريق شعبةً من الإيمان، بل أخبر أنّ في بُضع أحدنا صدقة — فلمّا عجبوا سألهم: أرأيتم لو وضعها في حرامٍ أكان عليه وزر؟ فكذلك في الحلال له أجر.\n\nفالآية لا تُضيّق حياتك في المسجد، وإنما تُحوّل يومك العاديّ إلى عبادة، ما دام لله وفي حدوده."
      }
    ]
  },

  14: {
    surahTitle: "A promise stated with an oath, and its opposite left open",
    surahTitleAr: "وعدٌ مؤكَّدٌ بالقسم، ومقابلُه مُبهَم",
    partial: true,
    ayat: [
      {
        n: 7,
        ar: "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِى لَشَدِيدٌۭ",
        why: "The two halves are not built the same way, and the difference is the point.\n\nOn the side of gratitude: LA-AZIDANNAKUM — I will certainly increase you. The verb is emphatic, first person, and Allah says He will do it Himself. But notice what is left out: increase you in WHAT. No object is named. The scholars read that silence as deliberate breadth — more of whatever the increase should be, which may not be the thing the grateful person was counting.\n\nOn the other side, the sentence does not run parallel. It does not say I will punish you. It says my punishment is severe — a statement about the punishment, not a declaration that it is coming. The mercy is committed to in the first person; the threat is left one step back.\n\nAnd the verse opens with TA'ADHDHANA, which Ar-Raghib places in the family of i'lan, a public proclaiming. This was not mentioned in passing. It was announced.",
        whyAr: "لم يُبنَ الشطران على وجهٍ واحد، والفرق بينهما هو المقصود.\n\nففي جهة الشكر: ﴿لَأَزِيدَنَّكُمْ﴾، فعلٌ مؤكَّدٌ باللام والنون، مسندٌ إليه سبحانه. ثم انظر ما حُذف: الزيادةُ **في ماذا**؟ لم يُذكر متعلَّق. وقرأ أهل العلم هذا السكوت اتّساعًا مقصودًا: زيادةً بما ينبغي أن تكون، وقد لا تكون في الذي كان الشاكرُ يعدّه.\n\nوفي الجهة الأخرى لم تجرِ الجملة على النظير: فلم يقل «لأعذّبنّكم»، وإنما ﴿إِنَّ عَذَابِى لَشَدِيدٌۭ﴾ — خبرٌ عن العذاب، لا إخبارٌ بوقوعه. فالرحمةُ التزامٌ بضمير المتكلّم، والوعيدُ مُبقًى خطوةً إلى الوراء.\n\nوافتُتحت بـ﴿تَأَذَّنَ﴾، وجعله الراغب من باب الإعلان والإيذان. فما ذُكر هذا عَرَضًا، وإنما أُعلن إعلانًا.",
        ref: "Surah Ibrahim (14:7) · Al-Mufradat, Ar-Raghib al-Isfahani, entry a-dh-n",
        strength: "lugha"
      }
    ]
  },

  15: {
    surahTitle: "The guarantee, and who gave it",
    surahTitleAr: "الضمانُ، ومن تولّاه",
    partial: true,
    ayat: [
      {
        n: 9,
        ar: "إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ وَإِنَّا لَهُۥ لَحَٰفِظُونَ",
        why: "Count the emphasis in one short line: INNA, then NAHNU repeating the same subject, then INNA again, then the LAM on lahafizun. Four separate strengtheners in nine words. Arabic does not stack emphasis like that unless the claim is meant to be immovable.\n\nAnd then the substance of the claim, which is what makes it testable. He does not say the Book is true, or that it is beautiful. He says HE will guard it — the preservation is assigned to Allah, not to the community.\n\nThat is a claim other scriptures do not make in this form, and it is falsifiable in principle: it only had to fail once. Fourteen centuries later a child in Indonesia and a child in Morocco who share no language recite the same consonantal text, and the earliest manuscripts match what is recited today.\n\nWorth noticing too: the promise covers ADH-DHIKR, not the ability of the people carrying it. Muslims were defeated, scattered and ruled over repeatedly. The text was not what got lost.",
        whyAr: "عُدّ المؤكِّدات في سطرٍ واحدٍ قصير: ﴿إِنَّا﴾، ثم ﴿نَحْنُ﴾ إعادةً للمسند إليه، ثم ﴿وَإِنَّا﴾، ثم اللام في ﴿لَحَٰفِظُونَ﴾. أربعةُ مؤكِّداتٍ في تسع كلمات. والعربيّةُ لا تُراكم التوكيد هكذا إلا لأمرٍ يُراد أن لا يتزحزح.\n\nثم مضمون الدعوى، وهو الذي يجعلها قابلةً للامتحان: لم يقل إنّ الكتاب حقّ، ولا إنه بليغ، وإنما قال إنه **هو** يحفظه — فأُسند الحفظ إليه سبحانه لا إلى الأمّة.\n\nوهذه دعوى لا تُوجد بهذه الصيغة في غيره، وهي في أصلها قابلةٌ للنقض: يكفي أن تتخلّف مرّةً واحدة. وبعد أربعة عشر قرنًا يقرأ صبيٌّ في إندونيسيا وصبيٌّ في المغرب لا يجمعهما لسانٌ الرسمَ نفسه، وأقدمُ المصاحف تُطابق ما يُتلى اليوم.\n\nومما يُتأمّل: أنّ الوعد في ﴿ٱلذِّكْرَ﴾ لا في حال حامليه. فقد هُزم المسلمون وتفرّقوا وحُكموا مرارًا، ولم يكن النصُّ هو الذي ضاع.",
        ref: "Surah Al-Hijr (15:9)",
        strength: "quran"
      }
    ]
  },

  16: {
    surahTitle: "The verse closing every Friday sermon, and why these six",
    surahTitleAr: "الآية التي تُختم بها الخطبة، ولِمَ هذه الستّ",
    partial: true,
    ayat: [
      {
        n: 90,
        ar: "إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ وَٱلْإِحْسَٰنِ وَإِيتَآئِ ذِى ٱلْقُرْبَىٰ وَيَنْهَىٰ عَنِ ٱلْفَحْشَآءِ وَٱلْمُنكَرِ وَٱلْبَغْىِ ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ",
        why: "Ibn Mas'ud called this the most comprehensive verse in the Quran for good and evil. Three commanded, three forbidden, and each triplet is ordered.\n\nJUSTICE is giving exactly what is owed. IHSAN is giving more than is owed — so the second is above the first, and a society that only reaches justice has stopped halfway. Then GIVING TO RELATIVES, which is ihsan aimed at the specific people a man is most likely to neglect while being generous in public.\n\nThe prohibitions run outward the same way. FAHSHA is the gross indecency a person does with himself or with one other. MUNKAR is wider — everything the sound mind and the revelation reject. BAGHY is transgressing onto other people, and it is placed last because it is the point at which a private corruption becomes someone else's injury.\n\nSo the verse moves in both directions from the self outward, and it is recited at the end of the sermon every week because it is the whole of conduct compressed into one line.",
        whyAr: "قال ابن مسعود: إنّ أجمع آيةٍ في القرآن للخير والشرّ هذه الآية. ثلاثةٌ مأمورٌ بها، وثلاثةٌ منهيٌّ عنها، وكلُّ ثلاثةٍ مرتّبة.\n\nفـ**العدل** أداءُ ما عليك على وجهه. و**الإحسان** أن تزيد على ما عليك، فهو فوقه، والمجتمع الذي يبلغ العدل وحده قد وقف في نصف الطريق. ثم **إيتاء ذي القربى**، وهو إحسانٌ موجَّهٌ إلى من هم أحقّ الناس بأن يُنساهم الرجل وهو يجود على البعداء.\n\nوالمناهي تسير إلى الخارج كذلك: فـ**الفحشاء** ما عظُم قبحه في نفسه أو مع واحد. و**المنكر** أوسع، وهو ما أنكره الشرع والعقل السليم. و**البغي** تعدٍّ على الناس، وأُخّر لأنه الموضع الذي يصير فيه الفسادُ الخاصُّ أذًى لغيرك.\n\nفالآيةُ تسير في الجهتين من النفس إلى ما وراءها، ولذلك خُتمت بها الخطبةُ كلَّ جمعة: لأنها السلوكُ كلُّه في سطر.",
        ref: "Surah An-Nahl (16:90)",
        strength: "quran"
      }
    ]
  },

  17: {
    surahTitle: "Al-Isra — and a command about what leads there, not only what it is",
    surahTitleAr: "الإسراء — ونهيٌ عن الطريق لا عن الغاية وحدها",
    partial: true,
    surahWhy: [
      { h: "One verse", hAr: "آيةٌ واحدة",
        en: "Verse 32 is chosen for a single word that changes what is being forbidden.",
        ar: "أُدرجت الثانية والثلاثون لأجل كلمةٍ واحدةٍ تُغيّر المنهيَّ عنه.",
        ref: "", strength: "note" }
    ],
    ayat: [
      {
        n: 32,
        ar: "وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةًۭ وَسَآءَ سَبِيلًۭا",
        why: "It does not say “do not commit”. It says do not COME NEAR.\n\nAnd then it does not call it a sin only — it calls it sa'a sabila, an evil WAY. A way is something you travel along, with steps before the destination.",
        whyAr: "لم تقل «لا تفعلوا»، بل قالت **لا تقربوا**.\n\nثم لم تُسمّه ذنبًا فقط، بل قالت ﴿وَسَآءَ سَبِيلًۭا﴾، والسبيل طريقٌ يُسلَك، وله خطواتٌ قبل الغاية.",
        misunderstood: "THE COMMON READING: the verse forbids one act, so anything short of that act is fine.\n\nWHY THE WORDING REFUSES THAT: Arabic had a plain way to say do not do it. The Quran chose do not approach it — and the difference is the whole ruling. What is forbidden is the road, not only the arrival.\n\nAnd the end of the verse says the same thing again: it is an evil WAY. Nobody arrives anywhere without travelling; the verse forbids the travelling.\n\nWHERE THIS IS ALSO MISUSED, in the other direction: as licence to police and shame people, especially the young. The verse is addressed to YOU about YOUR steps. It is guidance for a person walking, not a warrant to inspect others — and the same surah that contains it is the one that says We honoured the children of Adam.\n\nThe practical reading, and the one the scholars draw: this is a mercy, not a tightening. Being told to stop early is easier than being told to stop at the edge. Anyone who has tried to stop at the edge knows why.",
        misunderstoodAr: "القراءة الشائعة: أنّ الآية تنهى عن فعلٍ واحد، فما دونه لا بأس به.\n\nولِمَ يأبى اللفظ ذلك: كان في العربية أن يُقال «لا تفعلوا»، فاختار القرآن **لا تقربوا** — وفي الفرق الحكم كلّه: فالمنهيّ عنه الطريق لا الوصول وحده.\n\nوخاتمة الآية تُعيد المعنى: ﴿وَسَآءَ سَبِيلًۭا﴾. ولا يصل أحدٌ إلى موضعٍ إلا بسير، والآية تنهى عن السير.\n\nوموضع إساءةٍ أخرى في الجهة المقابلة: أن تُتّخذ سوطًا لتتبّع الناس وفضحهم، ولا سيّما الشباب. والآية خطابٌ **لك** عن **خطواتك** أنت. فهي هدًى لسائرٍ لا إذنٌ بتفتيش الناس — والسورة التي فيها هي السورة التي فيها ﴿وَلَقَدْ كَرَّمْنَا بَنِىٓ ءَادَمَ﴾.\n\nوالقراءة العمليّة التي يستخرجها أهل العلم: أنّ هذا رحمةٌ لا تشديد. فأن يُقال لك قِف مبكّرًا أيسر من أن يُقال لك قِف على الحافّة. ومن حاول الوقوف على الحافّة يعرف لِمَ.",
        plain: "In plain words: the verse does not say do not do it. It says do not go near it — and then calls it a bad ROAD, not just a bad act.\n\nThat is deliberate. A road has steps on it long before the end, and those steps are what is being forbidden.\n\nAnd it is talking to you about your own feet. It is not a licence to chase other people, especially the young — the same surah says Allah honoured the children of Adam. Being told to stop early is a mercy: stopping at the edge is much harder, as anyone who has tried it knows.",
        plainAr: "بكلامٍ بسيط: لم تقل الآية «لا تفعلوه»، بل قالت **لا تقتربوا منه** — ثم سمّته **طريقًا** سيّئًا لا فعلًا سيّئًا فحسب.\n\nوهذا مقصود: فالطريق فيه خطواتٌ قبل نهايته بكثير، وتلك الخطوات هي المنهيّ عنها.\n\nوهي تخاطبك عن **قدميك أنت**، وليست إذنًا بملاحقة الناس ولا سيّما الشباب — والسورة نفسها فيها ﴿وَلَقَدْ كَرَّمْنَا بَنِىٓ ءَادَمَ﴾. وأن يُقال لك قِف مبكّرًا رحمة، فالوقوف على الحافّة أشقّ بكثير، ومن جرّبه عرف."
      }
    ]
  },

  /* ==========================================================
     103 — AL-ASR
     ========================================================== */
  103: {
    surahTitle: "Three verses that ash-Shafi'i said would have been enough",
    surahTitleAr: "ثلاث آياتٍ قال الشافعيّ لو ما أنزل الله غيرها لكفت",
    surahWhy: [
      {
        h: "What ash-Shafi'i said — and what it is not",
        hAr: "ما قاله الشافعيّ، وما ليس هو",
        en: "Imam ash-Shafi'i said that if people reflected on this surah, it would be enough for them. That sentence is HIS — a scholar's statement about the surah. It is not a hadith and must never be quoted as one. It is worth repeating because of who said it and what he noticed: three verses contain a complete account of who is saved and who is not.",
        ar: "قال الإمام الشافعيّ: لو تدبّر الناس هذه السورة لوسعتهم. وهذه الكلمة كلمتُه هو، قولُ عالمٍ في السورة، وليست حديثًا، ولا يجوز أن تُنقل على أنها حديث. وإنما تُذكر لمكان قائلها ولِما تنبّه له: أنّ ثلاث آياتٍ استوعبت من ينجو ومن لا ينجو.",
        ref: "A statement of Imam ash-Shafi'i, reported in the tafsir works — the words of a scholar, NOT a hadith",
        strength: "tafsir"
      }
    ],
    ayat: [
      {
        n: 1,
        ar: "وَٱلْعَصْرِ",
        why: "The surah opens with an oath, and Allah swears by what He wishes of His creation. Here He swears by time — and then immediately tells you that human beings are losing it.",
        whyAr: "افتُتحت السورة بقسم، والله يُقسم بما شاء من خلقه. وأقسم هنا بالعصر، ثم أخبر في الحال أنّ الإنسان خاسرٌ فيه.",
        differ: {
          title: "What is al-'asr?",
          titleAr: "ما العصر؟",
          views: [
            { who: "Many of the mufassirun", whoAr: "كثيرٌ من المفسّرين",
              view: "Time itself — the passing age, in which everything a person does is recorded and spent.",
              viewAr: "الدهر والزمان الذي تقع فيه أعمال الناس وتنقضي." },
            { who: "Others", whoAr: "وقال آخرون",
              view: "The late afternoon specifically — the hour of the 'Asr prayer, the end of the day, when the light is visibly running out.",
              viewAr: "آخر النهار، وقتُ صلاة العصر، حين يُرى الضوء يذهب." }
          ],
          weight: "The first is the more widely held. The second is not weak, and there is a case that both are meant: the surah is about a resource running out, and the hour when the day is visibly ending makes the point in miniature.",
          weightAr: "والأوّل أشهر. والثاني ليس بضعيف، وقد يُقال بإرادتهما جميعًا: فالسورة في رأس مالٍ ينفد، ووقتُ انصرام النهار مثالٌ مُصغَّرٌ لذلك.",
          strength: "ikhtilaf"
        }
      },
      {
        n: 2,
        ar: "إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ",
        why: "The verdict is stated with two separate emphasisers — inna and the lam — as if it were being insisted on against an objection. And the subject is al-insan with the definite article: the human being, as a kind. Not “some people”.",
        whyAr: "جاء الحكم بمؤكِّدين: ﴿إِنَّ﴾ واللام في ﴿لَفِى﴾، كأنه يُؤكَّد على مُنكِر. والمحكوم عليه ﴿ٱلْإِنسَٰنَ﴾ بأل الجنسيّة: الإنسان من حيث هو، لا «بعض الناس».",
        words: [
          {
            w: "لَفِى خُسْرٍ",
            t: "IN loss, not “has loss”",
            meaning: "The preposition is fi — in. Loss is not something he carries or suffers; it is the medium he is inside, the way a thing is inside water.",
            meaningAr: "الحرف ﴿فِى﴾ للظرفيّة. فالخسر ليس شيئًا يحمله أو يُصيبه، وإنما هو ظرفٌ هو فيه، كما يكون الشيء في الماء.",
            instead: "It does not say lahu khusr, “he has loss”, which would make it something he possesses and might put down. Fi khusr means submerged — the default state, unless something pulls him out. And the next verse is the only thing that does.",
            insteadAr: "ولم يقل «له خُسر» فيكون شيئًا يملكه وقد يضعه. بل ﴿لَفِى خُسْرٍ﴾ أي مغمورٌ فيه، وهذا هو الأصل فيه ما لم يُخرجه مُخرِج، وليس المُخرِج إلا ما في الآية التي بعدها.",
            source: "Tafsir at-Tabari",
            strength: "tafsir"
          }
        ]
      },
      {
        n: 3,
        ar: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ",
        why: "Four things, and the order climbs. Belief is inward. Righteous action makes it visible. Then twice the verb turns social — and that is the part people skip.",
        whyAr: "أربعة أمورٍ ترتقي: الإيمان في الباطن، ثم العمل الصالح يُظهره، ثم ينقلب الفعل مرّتين إلى ما بين الناس، وهذا هو الذي يُتجاوز عنه.",
        words: [
          {
            w: "تَوَاصَوْا۟",
            t: "tawasaw — mutual",
            meaning: "The form tafa'ala in Arabic is reciprocal: it takes two sides, each doing it to the other.",
            meaningAr: "وزن «تفاعل» في العربية للمشاركة: لا يكون إلا من طرفين، كلٌّ يفعله بالآخر.",
            instead: "It does not say awsaw, “they advised” — one person giving counsel to another. Tawasaw means they counselled ONE ANOTHER. So the fourth condition of not being in loss cannot be met alone. A person can believe alone and can act righteously alone, but the last two require someone else in the room. The surah quietly rules out the private religion.",
            insteadAr: "ولم يقل «أوصَوا» فيكون واحدٌ يُوصي آخر. بل ﴿تَوَاصَوْا۟﴾ أي أوصى بعضهم بعضًا. فالشرط الرابع للخروج من الخسر لا يتحقّق بالانفراد: فقد يؤمن المرء وحده ويعمل الصالحات وحده، وأمّا الأخيران فلا بدّ فيهما من غيره. فأخرجت السورة في هدوءٍ دينَ الانفراد.",
            source: "Tafsir at-Tabari",
            strength: "lugha"
          }
        ]
      }
    ]
  },

  /* ==========================================================
     105 + 106 — AL-FIL and QURAYSH
     The clearest case in the Quran of two surahs completing each
     other, which is the thing the owner described.
     ========================================================== */
  105: {
    surahTitle: "The surah that does not finish until the next one",
    surahTitleAr: "السورة التي لا تتمّ إلا بالتي بعدها",
    surahWhy: [
      {
        h: "Read it, then do not stop",
        hAr: "اقرأها ثم لا تقف",
        en: "Al-Fil tells what happened to the army that came to destroy the Kaaba: their plan was made to fail, birds were sent, and they were left like chewed straw. Then it ends. And a reader stops, because the story is over.\n\nBut the story is not what it was for. Turn to the next surah and the very first word is “Li-ilafi Quraysh” — “FOR the security of Quraysh”. That opening lam is the lam of purpose. It is not starting a new subject; it is finishing the sentence the previous surah left hanging. The elephant army was destroyed FOR this: so that Quraysh would keep their two trade caravans, winter and summer, in safety.\n\nAnd then the point of both: “So let them worship the Lord of this House.” The argument only completes across the two surahs. Read alone, Al-Fil is a rescue story. Read joined, it is a debt being called in.",
        ar: "أخبرت سورة الفيل بما وقع بالجيش الذي جاء لهدم الكعبة: جُعل كيدهم في تضليل، وأُرسل عليهم الطير، فصاروا كعصفٍ مأكول. ثم انتهت. فيقف القارئ لانتهاء القصّة.\n\nوليست القصّة هي المقصود. فانظر إلى مطلع التي بعدها: ﴿لِإِيلَٰفِ قُرَيْشٍ﴾، واللام لام التعليل. فليست ابتداء موضوعٍ جديد، وإنما هي تمام الجملة التي عُلّقت في السورة قبلها: أُهلك أصحاب الفيل لهذا — لتبقى لقريش رحلتاها في الشتاء والصيف آمنتين.\n\nثم مقصود السورتين: ﴿فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ﴾. فالحجّة لا تتمّ إلا بالسورتين معًا. فالفيل وحدها خبرُ نجاة، وهي موصولةً مطالبةٌ بحقّ.",
        ref: "Surah Al-Fil (105) with Surah Quraysh (106:1–3)",
        strength: "quran"
      },
      {
        h: "Some of the early scholars held they were one surah",
        hAr: "وذهب بعض المتقدّمين إلى أنهما سورةٌ واحدة",
        en: "The connection was noticed early. It is reported that in the mushaf of Ubayy ibn Ka'b the two were written together without a separating line, and a number of scholars discussed whether they are one surah or two.\n\nThis is reported in the works on the Quranic sciences and the qira'at, not in the two Sahihs, and the mushaf that the whole ummah settled on — the Uthmani — has them as two surahs with the Basmalah between them. So: two surahs, and that is what is recited. But the fact that anyone ever raised the question tells you the join is real and was felt from the beginning.",
        ar: "وقد تُنبّه لهذا الوصل قديمًا. فقد رُوي أنهما في مصحف أُبيّ بن كعب مكتوبتان بلا فصلٍ بينهما، وتكلّم جماعةٌ من أهل العلم: أهما سورةٌ واحدة أم سورتان؟\n\nوهذا في كتب علوم القرآن والقراءات، لا في الصحيحين، والمصحف الذي اجتمعت عليه الأمّة — العثمانيّ — فيه سورتان بينهما البسملة. فهما سورتان، وعلى هذا التلاوة. غير أنّ إثارة المسألة أصلًا تدلّ على أنّ الوصل حقيقيٌّ مُدرَكٌ من أوّل الأمر.",
        ref: "Reported in the works on the Quranic sciences — historical report, outside the two Sahihs",
        strength: "tafsir"
      }
    ],
    ayat: [
      {
        n: 1,
        ar: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ",
        why: "“Have you not seen” — addressed to the Prophet ﷺ, who was born in the year of that event and did not witness it. The Arabic ru'yah covers seeing with the eye and knowing with certainty: this is something so well attested among you that it is as good as seen. The event was within living memory of the first audience. They knew people who had been there.",
        whyAr: "﴿أَلَمْ تَرَ﴾ خطابٌ للنبيّ ﷺ، وقد وُلد عام ذلك الحدث ولم يشهده. والرؤية في العربية تكون بالعين وتكون بالعلم اليقينيّ: أي إنّ هذا من الاشتهار عندكم بحيث صار كالمرئيّ. وكان الحدث في متناول ذاكرة أوّل المخاطَبين، يعرفون من حضره."
      },
      {
        n: 2,
        ar: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍۢ",
        why: "Before a single bird is mentioned, the plan is already finished. And note HOW it was finished — not blocked, not defeated. Made to wander.",
        whyAr: "قبل أن يُذكر طائرٌ واحد كان الكيد قد انتهى. وتأمّل كيف انتهى: لا صدًّا ولا هزيمة، بل تضليلًا.",
        words: [
          {
            w: "كَيْدَهُمْ", t: "kayd — a scheme worked out in private",
            meaning: "Kayd is not an open attack. It is a plan laid quietly, worked out in advance, meant not to be seen coming. The word by itself tells you they thought about this for a long time.",
            meaningAr: "الكيد ليس مواجهةً ظاهرة، وإنما تدبيرٌ في خفاء، يُرتَّب قبل وقته، ويُراد ألّا يُفطَن له. فاللفظ وحده يخبرك أنهم أطالوا التفكير فيه.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ك ي د",
            strength: "lugha"
          },
          {
            w: "فِى تَضْلِيلٍۢ", t: "made to go astray",
            meaning: "Tadlil is from the root of dalal — going astray, losing the way. It does not say the plan was crushed. It says the plan itself was made to lose its way.",
            meaningAr: "التضليل من مادّة الضلال، وهو ذهاب الطريق. وليس معناه أنّ الكيد كُسر، وإنما أنّ الكيد نفسه أُضلّ فأخطأ طريقه.",
            instead: "The verse could have said He destroyed their plot, or stopped it, or turned it back. It says He put it INTO a going-astray — the same preposition of being inside a thing that Al-Asr uses for loss. The army arrived. It simply never got where it was going.\n\nWhich is a harder thing than defeat. A defeated plan was still a plan. A misled one was never going to work, and the men carrying it did not know that while they carried it.",
            insteadAr: "وقد كان يمكن أن يُقال أهلك كيدهم، أو ردّه، أو صرفه. فقيل ﴿فِى تَضْلِيلٍۢ﴾ بحرف الظرفيّة، وهو الحرف نفسه الذي في العصر ﴿لَفِى خُسْرٍ﴾. فقد وصل الجيش، غير أنه لم يبلغ ما خرج إليه قطّ.\n\nوهذا أشدّ من الهزيمة: فالمهزوم كان له تدبير، وأمّا المُضلَّل فما كان تدبيره ليتمّ، وحاملوه لا يشعرون بذلك وهم يحملونه.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ض ل ل",
            strength: "lugha"
          }
        ],
        links: [
          {
            ref: "Surah Al-Anfal (8:30)",
            ar: "وَيَمْكُرُونَ وَيَمْكُرُ ٱللَّهُ ۖ وَٱللَّهُ خَيْرُ ٱلْمَٰكِرِينَ",
            en: "“And they planned, and Allah planned. And Allah is the best of planners.”",
            how: "The same idea stated as a rule rather than as an event. Al-Fil is one instance; Al-Anfal is the principle it belongs under. Read together, the elephant army stops being an old story about birds and becomes an example of something the Quran says happens generally.",
            howAr: "المعنى نفسه مذكورًا قاعدةً لا واقعة. فالفيل مثالٌ واحد، والأنفال هي الأصل الذي يندرج تحته. فإذا قُرئتا معًا لم يبقَ خبرُ أصحاب الفيل قصّةً قديمةً عن طير، بل صار شاهدًا على سنّةٍ يذكر القرآن أنها تطّرد."
          }
        ]
      },
      {
        n: 3,
        ar: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
        why: "The largest army the Arabs had seen, and what was sent against it was birds. Not an angel, not an earthquake, not a human army. The disproportion is the argument: what came against them was so small that nobody could afterwards claim it had been a fair fight they happened to lose.",
        whyAr: "أعظم جيشٍ رأته العرب، والذي أُرسل عليه طير. لا مَلَك، ولا زلزلة، ولا جيشُ بشر. وفي التفاوت الحجّة: فقد كان الذي أتاهم من الصِّغر بحيث لا يستطيع أحدٌ بعدُ أن يقول إنها كانت معركةً متكافئةً خُذلوا فيها.",
        words: [
          {
            w: "طَيْرًا", t: "birds — left indefinite",
            meaning: "Indefinite and unnamed. Not falcons, not eagles — just birds. The Quran does not identify them.",
            meaningAr: "نكرةٌ غير مُسمّاة: لا صقورًا ولا عُقبانًا، بل طيرًا. فلم يُعيّنها القرآن.",
            instead: "A great deal has been written describing these birds — their colour, their size, what they carried, what they looked like. None of that is in the Quran, and none of it is in the two Sahihs. Where the revelation left a thing indefinite, the honest reading leaves it indefinite. Saying that plainly is part of tadabbur, not a gap in it.",
            insteadAr: "وقد كُتب في وصف هذه الطير كثير: في لونها وقدرها وما حملت وهيئتها. وليس شيءٌ من ذلك في القرآن، ولا في الصحيحين. وما أبهمه الوحي فالصواب إبقاؤه مُبهمًا، والتصريح بهذا من التدبّر لا نقصٌ فيه.",
            source: "The wording of the verse; nothing further on their description is established in the two Sahihs",
            strength: "quran"
          },
          {
            w: "أَبَابِيلَ", t: "ababil — flocks upon flocks",
            meaning: "Successive groups — one flock after another, rather than all at once.",
            meaningAr: "جماعاتٌ متتابعة، قطيعٌ في إثر قطيع، لا دفعةً واحدة.",
            instead: "And here is something worth knowing, because it changes how confident anyone should sound about it: this word occurs ONCE in the entire Quran. Nowhere else, in any form.\n\nThat matters for method. The fourth question — where else does this word appear — is what normally settles a meaning, and here there is nowhere else to look. Which is exactly why the early lexicographers had to work at it and why more than one explanation of it survives. A word used a single time cannot be checked against its other places, and the honest thing is to say so rather than pick one reading and present it as settled.",
            insteadAr: "وههنا ما يحسن علمه، فإنه يضبط مقدار الجزم في المسألة: هذا اللفظ لم يرد في القرآن كلّه إلا مرّةً واحدة، لا في هذه الصيغة ولا في غيرها.\n\nوهذا مؤثِّرٌ في المنهج: فالسؤال الرابع — أين وردت الكلمة أيضًا — هو الذي يُحرّر المعنى في العادة، ولا موضع هنا يُرجع إليه. ولهذا اجتهد المتقدّمون من أهل اللغة فيه، وبقي فيه أكثر من قول. واللفظ الذي لا يرد إلا مرّةً لا يُقابَل بمواضعه الأخرى، والإنصاف أن يُقال ذلك لا أن يُختار قولٌ فيُعرض على أنه المحسوم.",
            source: "The Uthmani text",
            strength: "quran"
          }
        ]
      },
      {
        n: 4,
        ar: "تَرْمِيهِم بِحِجَارَةٍۢ مِّن سِجِّيلٍۢ",
        why: "The tense changes here, and it is the only place in the surah where it does. Everything before is past — He did, He sent. This one verb is present: tarmihim, “pelting them”. The account stops reporting and starts showing, and it switches at exactly the moment of the blow.",
        whyAr: "تغيّر الزمن هنا، وهو الموضع الوحيد في السورة الذي تغيّر فيه. فما قبله ماضٍ: فعل، وأرسل. وهذا الفعل وحده مضارع: ﴿تَرْمِيهِم﴾. فانتقل الخبر من الحكاية إلى العرض، ووقع الانتقال في لحظة الضربة بعينها.",
        words: [
          {
            w: "سِجِّيلٍۢ", t: "sijjil — hardened, baked clay",
            meaning: "Stone of baked clay. Not a rock picked up off the ground — something fired hard.",
            meaningAr: "حجارةٌ من طينٍ متحجّر مطبوخ، لا حجرًا يُلتقط من الأرض، بل ما شُدّ وصُلّب.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry س ج ل",
            strength: "lugha"
          }
        ],
        links: [
          {
            ref: "Surah Hud (11:82) and Surah Al-Hijr (15:74)",
            ar: "وَأَمْطَرْنَا عَلَيْهَا حِجَارَةًۭ مِّن سِجِّيلٍۢ مَّنضُودٍۢ",
            en: "“And We rained upon them stones of hardened clay, layered.” — of the people of Lut.",
            how: "Here the fourth question pays. Sijjil appears in only three places in the whole Quran, and the other two are both the destruction of the people of Lut.\n\nSo one rare word was used for two events separated by centuries: a people destroyed for what they did among themselves, and an army destroyed for marching on the House. The vocabulary is quietly placing them in the same category of ending. Nothing in Al-Fil says that on its own. It appears only when you follow the word out of the surah — which is the whole method.",
            howAr: "وهنا تظهر ثمرة السؤال الرابع. فلفظ ﴿سِجِّيلٍۢ﴾ لم يقع في القرآن كلّه إلا في ثلاثة مواضع، والموضعان الآخران كلاهما في إهلاك قوم لوط.\n\nفاستُعمل لفظٌ نادرٌ لحادثتين بينهما قرون: قومٌ أُهلكوا بما صنعوا فيما بينهم، وجيشٌ أُهلك بمسيره إلى البيت. فالمفردة تجعل النهايتين من بابٍ واحد في هدوء. ولا تقول سورة الفيل هذا وحدها، وإنما يظهر إذا تتبّعتَ اللفظ خارجها، وهذا هو المنهج كلّه."
          }
        ]
      },
      {
        n: 5,
        ar: "فَجَعَلَهُمْ كَعَصْفٍۢ مَّأْكُولٍۭ",
        why: "The image is exact and worth slowing down on. 'Asf is the leaf and husk of a crop — the part left over after the grain is taken. Ma'kul is “eaten”. So: not merely destroyed, but reduced to chaff that has already been chewed. The greatest army the region had seen, ending as the least valuable part of a plant, after something had finished with it.",
        whyAr: "الصورة دقيقةٌ تستحقّ الوقوف. فالعصف ورق الزرع وقشره، وهو ما يبقى بعد أخذ الحبّ. و﴿مَّأْكُولٍۭ﴾ أي قد أُكل. فليسوا مُهلَكين فحسب، بل صاروا كالتِّبن الذي مُضغ. أعظمُ جيشٍ رأته تلك البلاد ينتهي إلى أهون ما في النبات، بعد أن فرغ منه آكلُه."
      }
    ]
  },

  106: {
    surahTitle: "The answer to the surah before it",
    surahTitleAr: "جواب السورة التي قبلها",
    surahWhy: [
      {
        h: "It opens with the reason, not the subject",
        hAr: "افتُتحت بالعِلّة لا بالموضوع",
        en: "No surah in the Quran opens the way this one does. “Li-ilafi Quraysh” — a preposition and a purpose, with the thing it explains sitting in the previous surah. If you have just read Al-Fil, this is a conclusion. If you have not, it is a fragment.\n\nThat is the design. The two surahs are an argument in two halves: We destroyed the army that came for the House — so that your caravans would be safe — so worship the Lord of that House. Protection, then benefit, then the obligation that follows.",
        ar: "ليس في القرآن سورةٌ افتُتحت بمثل هذا: ﴿لِإِيلَٰفِ قُرَيْشٍ﴾، جارٌّ ومجرورٌ للتعليل، ومتعلَّقُه في السورة قبلها. فإن كنتَ قرأتَ الفيل فهذه نتيجة، وإلّا فهي كلامٌ ناقص.\n\nوهذا هو البناء: السورتان حجّةٌ في شطرين — أهلكنا الجيش الذي جاء للبيت، لتأمن رحلاتكم، فاعبدوا ربّ هذا البيت. حمايةٌ، ثم منفعة، ثم الحقّ المترتّب عليهما."
      }
    ],
    ayat: [
      {
        n: 1,
        ar: "لِإِيلَٰفِ قُرَيْشٍ",
        why: "No other surah in the Quran opens like this. It begins with a preposition and a reason — “FOR the ilaf of Quraysh” — and the thing it gives the reason for is not in this surah at all. It is in the one before.\n\nRead Quraysh on its own and the first verse is a fragment hanging in the air. Read it straight after Al-Fil and it is the second half of a sentence: the elephant army was destroyed FOR this.",
        whyAr: "ليس في القرآن سورةٌ افتُتحت بمثل هذا: حرف جرٍّ وتعليل ﴿لِإِيلَٰفِ قُرَيْشٍ﴾، والمعلَّل ليس في هذه السورة أصلًا، وإنما في التي قبلها.\n\nفاقرأ قريشًا وحدها تجد الآية الأولى كلامًا معلَّقًا. واقرأها عقب الفيل تجدها شطر جملة: أُهلك أصحاب الفيل لهذا.",
        words: [
          {
            w: "إِيلَٰف", t: "ilaf",
            meaning: "From the root a-l-f, the root of ulfah — familiarity, being joined to something, being used to it. Not “security” exactly, and not “trade” exactly: the settled, habitual arrangement by which a thing has become normal and safe.",
            meaningAr: "من مادّة (أ ل ف) التي منها الأُلفة: الاعتياد والاجتماع على الشيء وسكونُ النفس إليه. فليست «الأمن» على التحديد، ولا «التجارة» على التحديد، وإنما العادة المستقرّة التي صار بها الأمر مألوفًا آمنًا.",
            instead: "The verse could have said “for the SAFETY of Quraysh” or “for the TRADE of Quraysh”. Ilaf says something more ordinary and, for that reason, heavier: their routine. The thing they had stopped noticing.\n\nThat is the argument the two surahs are making together. Allah did not only rescue them from a spectacular danger; He arranged the ordinary background of their lives, the part nobody thanks anyone for. And it is precisely the routine that people forget to be grateful for — which is why the next verse names it in detail before verse 3 asks for anything.",
            insteadAr: "وقد كان يمكن أن يُقال «لأمن قريش» أو «لتجارة قريش». فقوله ﴿إِيلَٰفِ﴾ أهدأ وأثقل لذلك: إنه عادتهم، وهو الذي كفّوا عن الالتفات إليه.\n\nوهذه هي حجّة السورتين مجتمعتين: لم يُنجِهم الله من خطرٍ عظيمٍ فحسب، بل هيّأ لهم عاديّ عيشهم الذي لا يُشكر عليه أحد. والمألوف هو الذي يُنسى شكره، ولهذا فُصّل في الآية التي بعدها قبل أن تطلب الثالثة شيئًا.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry أ ل ف",
            strength: "lugha"
          }
        ]
      },
      {
        n: 2,
        ar: "إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
        why: "The word ilaf is said again immediately, which in a four-verse surah is a large share of the words spent on repeating one term. Arabic calls this badal — a second mention that comes to specify the first. The first verse said “their ilaf”; this one says which ilaf.",
        whyAr: "أُعيد لفظ الإيلاف في الحال، وهذا في سورةٍ من أربع آياتٍ نصيبٌ كبيرٌ من كلماتها أُنفق في تكرار لفظٍ واحد. وهذا الذي تسمّيه العربية البدل: ذكرٌ ثانٍ يأتي ليُبيّن الأوّل. فالآية الأولى قالت إيلافهم، وهذه تقول أيّ إيلاف.",
        words: [
          {
            w: "رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ", t: "the winter and summer journey",
            meaning: "Two trading caravans a year: south to Yemen in the winter, north to Sham in the summer. Between them they were the entire economy of Makkah — a town in a valley with no crops, which lived by moving goods between two civilisations.",
            meaningAr: "رحلتان في السنة: إلى اليمن جنوبًا في الشتاء، وإلى الشام شمالًا في الصيف. وهما اقتصاد مكّة كلّه: بلدٌ في وادٍ غير ذي زرع، إنما عاش بنقل التجارة بين حضارتين.",
            instead: "Notice what is NOT said. It does not say “for their wealth” or “for their standing among the Arabs”. It names the two journeys — the actual, physical thing they did twice a year and could picture as they heard it.\n\nThe Quran is arguing here, not decorating. An abstraction can be waved away; a caravan you personally travelled with cannot. It points at the specific arrangement they lived inside and asks them to trace it back to somebody.",
            insteadAr: "وتأمّل ما لم يُقل: لم يقل «لمالهم» ولا «لمكانتهم في العرب»، وإنما سُمّيت الرحلتان: الأمر المحسوس الذي يصنعونه مرّتين في العام ويتصوّرونه وهم يسمعونه.\n\nوالقرآن هنا يحتجّ لا يُزيّن: فالمعنى المجرّد يُدفع، وأمّا قافلةٌ سافرتَ فيها بنفسك فلا تُدفع. فأشار إلى العيش المعيَّن الذي هم فيه، وطلب منهم أن يردّوه إلى صاحبه.",
            source: "The wording of the verse",
            strength: "quran"
          }
        ]
      },
      {
        n: 3,
        ar: "فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ",
        why: "The conclusion of both surahs, and note what it does NOT say. It does not say “let them worship this House.” The House was protected, but the House is not what is owed worship — its Lord is. In four words the surah gives the sanctuary its full honour and refuses it any share of what belongs to Allah.",
        whyAr: "خاتمة السورتين، وتأمّل ما لم تقله: لم تقل «فليعبدوا هذا البيت». فالبيت حُمي، وليس البيت هو المستحقّ للعبادة، وإنما ربّه. ففي أربع كلماتٍ أعطت السورة الحرمَ تمام حُرمته، ومنعته أن ينال شيئًا ممّا هو لله."
      },
      {
        n: 4,
        ar: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍۢ وَءَامَنَهُم مِّنْ خَوْفٍۢ",
        why: "Two favours named, food and safety, and in that order — and this is worth carrying elsewhere in the Quran, because those two keep appearing together as the pair that makes life possible at all.",
        whyAr: "نعمتان مذكورتان: الطعام والأمن، على هذا الترتيب. وهذا ممّا يُحمل على مواضع أخرى من القرآن، فإنّ هاتين تتكرّران مقترنتين بوصفهما ما به قِوام العيش.",
        links: [
          {
            ref: "Surah An-Nahl (16:112)",
            ar: "فَأَذَٰقَهَا ٱللَّهُ لِبَاسَ ٱلْجُوعِ وَٱلْخَوْفِ",
            en: "“So Allah made it taste the garment of hunger and fear.”",
            how: "The same two things, reversed. Quraysh were given food in place of hunger and safety in place of fear; the town in An-Nahl that denied Allah's favours was clothed in exactly those two. The pair works as reward in one place and as removal in the other — and you only see it by carrying the words from one surah to the other.",
            howAr: "الاثنان نفسهما مقلوبَين: أُطعمت قريشٌ من جوعٍ وأُومنت من خوف، والقريةُ في النحل التي كفرت بأنعم الله أُلبست هذين بعينهما. فالنعمتان جزاءٌ في موضعٍ وسلبٌ في موضع، ولا يُرى ذلك إلا بحمل اللفظ من سورةٍ إلى سورة."
          }
        ]
      }
    ]
  },

  /* ==========================================================
     107 — AL-MA'UN
     ========================================================== */
  107: {
    surahTitle: "The surah that says “woe to those who pray”",
    surahTitleAr: "السورة التي قالت ﴿فَوَيْلٌۭ لِّلْمُصَلِّينَ﴾",
    surahWhy: [
      {
        h: "Belief is tested against an orphan, not an argument",
        hAr: "اختُبر التصديق بيتيمٍ لا بحجّة",
        en: "The surah asks who denies the Recompense, and then does not answer with a creed. It answers with behaviour: the one who shoves the orphan away and does not urge feeding the poor. Whatever such a person says he believes, the surah has already classified him.",
        ar: "سألت السورة عمّن يُكذّب بالدين، ثم لم تُجب بعقيدةٍ تُقال، بل أجابت بعمل: الذي يدعّ اليتيم ولا يحضّ على طعام المسكين. فمهما قال إنه يعتقد، فقد صنّفته السورة."
      }
    ],
    ayat: [
      {
        n: 1,
        ar: "أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ",
        why: "The surah opens with a question put to you, not a statement made at you. “Have you seen…” — which is an invitation to look at somebody, and it makes the reader start searching for the person being described before he has been described.\n\nAnd then the surah answers its own question in a way nobody expects.",
        whyAr: "افتُتحت السورة بسؤالٍ يُوجَّه إليك لا بخبرٍ يُلقى عليك: ﴿أَرَءَيْتَ﴾، وهو دعوةٌ إلى النظر في أحد، فيأخذ القارئ في طلب الموصوف قبل أن يُوصَف.\n\nثم تُجيب السورة عن سؤالها بما لا يتوقّعه أحد.",
        words: [
          {
            w: "بِٱلدِّينِ", t: "ad-din — the Recompense",
            meaning: "The same word, in the same sense, as in Al-Fatihah: maliki yawm ad-din. Not “religion” here but the reckoning — being paid for what you did.",
            meaningAr: "اللفظ نفسه بالمعنى نفسه الذي في الفاتحة: ﴿مَٰلِكِ يَوْمِ ٱلدِّينِ﴾. فليس المراد المِلّة، وإنما الجزاء: أن تُوفّى بعملك.",
            instead: "So the man in question is not someone who denies God exists. He is someone who does not really believe there will be a bill. And the surah is about to prove that you can identify such a person without asking him a single question about what he believes.",
            insteadAr: "فليس المسؤول عنه من يُنكر وجود الله، وإنما من لا يستقرّ في نفسه أنّ ثمّ حسابًا. والسورة على وشك أن تُثبت أنك تعرف هذا الرجل من غير أن تسأله عن اعتقاده سؤالًا واحدًا.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry د ي ن",
            strength: "lugha"
          }
        ]
      },
      {
        n: 2,
        ar: "فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ",
        why: "Here is the answer, and it is the whole method of the surah. Asked who denies the Recompense, it does not describe a creed. It describes a hand pushing a child.\n\nBelief is being tested at the point where nobody is watching and nothing is owed — how a man behaves toward the one person in the town who cannot complain about him.",
        whyAr: "وهذا هو الجواب، وفيه منهج السورة كلّه. سُئلت: من المكذّب بالدين؟ فلم تصف عقيدة، وإنما وصفت يدًا تدفع صبيًّا.\n\nفالتصديق يُمتحن حيث لا رقيب ولا مطالِب: كيف يصنع الرجل مع الوحيد في البلد الذي لا يستطيع أن يشكوه.",
        words: [
          {
            w: "يَدُعُّ", t: "yadu''u — shoves, drives away roughly",
            meaning: "Not “turns away from” and not “neglects”. Da''  is to push hard, to shove — the verb carries physical force and contempt together.",
            meaningAr: "ليس معناه الإعراض ولا الإهمال. فالدعّ الدفع بعنف، واللفظ يحمل الشدّة والاحتقار معًا.",
            instead: "The Quran had gentler verbs available and did not use them. Compare Surah Ad-Duha, where the command is “as for the orphan, do not oppress him” — taqhar, a different word. Here the description is harsher, because it is describing what a person does, not commanding what he should not.\n\nAnd the force is the point. It is not that he failed to help. It is that the child came near and was pushed.",
            insteadAr: "وقد كان في القرآن أفعالٌ ألين فلم يُستعمل شيءٌ منها. قارِن بسورة الضحى: ﴿فَأَمَّا ٱلْيَتِيمَ فَلَا تَقْهَرْ﴾، وهو لفظٌ آخر. وأمّا هنا فالوصف أغلظ، لأنه وصفٌ لما يصنعه الرجل لا نهيٌ عمّا لا ينبغي له.\n\nوفي الشدّة المقصود: فليس أنه قصّر في العون، بل أنّ الصبيّ دنا منه فدُفع.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry د ع ع",
            strength: "lugha"
          }
        ],
        links: [
          {
            ref: "Surah Ad-Duha (93:6) and (93:9)",
            ar: "أَلَمْ يَجِدْكَ يَتِيمًۭا فَـَٔاوَىٰ … فَأَمَّا ٱلْيَتِيمَ فَلَا تَقْهَرْ",
            en: "“Did He not find you an orphan and give you shelter?… So as for the orphan, do not oppress him.”",
            how: "This is the pattern again, and it is one of the clearest cases of it in the whole Quran. Ad-Duha states the reason and then gives the command, three verses apart: you were an orphan and were sheltered — therefore do not crush an orphan.\n\nAl-Ma'un supplies what Ad-Duha leaves out: what it looks like when a man ignores that. Neither surah is incomplete on its own, but read together they give the full circuit — the mercy you were shown, the command that follows from it, and the portrait of the man who broke it.",
            howAr: "وهذا هو النظم نفسه، وهو من أظهر مواضعه في القرآن كلّه. فالضحى ذكرت العلّة ثم الأمر بينهما ثلاث آيات: كنتَ يتيمًا فآواك، فلا تقهر اليتيم.\n\nوجاءت الماعون بما تركته الضحى: صورةُ من أعرض عن ذلك. وليست إحداهما ناقصةً وحدها، غير أنهما إذا قُرئتا معًا تمّت الدائرة: الرحمة التي رُحمتَها، والأمر المتفرّع عليها، وصورة الذي نقضه."
          }
        ]
      },
      {
        n: 3,
        ar: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
        why: "And now the bar is lowered to a place almost nobody can claim to be under it.",
        whyAr: "ثم خُفض الحدّ إلى موضعٍ لا يكاد أحدٌ يدّعي أنه دونه.",
        words: [
          {
            w: "يَحُضُّ", t: "yahudd — urges others to it",
            meaning: "To urge, to press someone toward a thing. It is speech, not spending.",
            meaningAr: "الحضّ الحثّ والترغيب ودفع الغير إلى الأمر. وهو قولٌ لا إنفاق.",
            instead: "The verse does not say “he does not feed the poor”. That could be answered — a poor man cannot feed anyone. It says he does not URGE the feeding of the poor.\n\nSo the accusation survives poverty. You may have nothing at all and still speak, still push someone who does have something, still care out loud. What is being described is a man in whom the matter raises nothing — and the Quran counts that silence as evidence about what he believes will happen to him later.",
            insteadAr: "لم تقل الآية «لا يُطعم المسكين»، فذاك يُعتذر عنه: فالفقير لا يُطعم أحدًا. وإنما قالت لا يحضّ على طعامه.\n\nفالتهمة تبقى مع الفقر: قد لا تملك شيئًا وتقدر على القول، وعلى دفع من يملك، وعلى أن يظهر منك الاهتمام. والموصوف رجلٌ لا يُحرّك فيه الأمر شيئًا، وقد جعل القرآن هذا السكوت دليلًا على ما يعتقده فيما يصير إليه.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ح ض ض",
            strength: "lugha"
          }
        ],
        links: [
          {
            ref: "Surah Al-Haqqah (69:30-34)",
            ar: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
            en: "“…and did not urge the feeding of the poor.” — given as a reason for the Fire.",
            how: "The identical phrase, word for word, in a completely different surah — and there it appears in the list of what put a man in the Fire, beside not believing in Allah the Most Great.\n\nThat placement is the point. In Al-Ma'un it could be read as a character flaw. Al-Haqqah shows the Quran treating it as belonging beside disbelief itself. Carry the phrase from one surah to the other and its weight changes.",
            howAr: "العبارة بعينها حرفًا بحرفٍ في سورةٍ أخرى بالكلّيّة، وهي هناك في عِداد ما أوجب النار، إلى جنب أنه ﴿كَانَ لَا يُؤْمِنُ بِٱللَّهِ ٱلْعَظِيمِ﴾.\n\nوفي هذا الموضع المقصود: فقد تُقرأ في الماعون خَصلةً في الخُلق، فتُريك الحاقّة أنّ القرآن يجعلها إلى جانب الكفر نفسه. فاحمل العبارة من سورةٍ إلى سورةٍ يتغيّر وزنها."
          }
        ]
      },
      {
        n: 4,
        ar: "فَوَيْلٌۭ لِّلْمُصَلِّينَ",
        why: "Read that on its own and it should stop you. Woe — to those who PRAY. Not to those who abandon prayer. The threat is aimed at people already inside the mosque, and the surah is about to say which of them.",
        whyAr: "اقرأها وحدها تُوقفك: الويل ﴿لِّلْمُصَلِّينَ﴾، لا لتاركي الصلاة. فالوعيد مُوجَّهٌ إلى من هم في المسجد أصلًا، والسورة على وشك أن تُبيّن أيّهم."
      },
      {
        n: 5,
        ar: "ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
        why: "And here is the word the whole surah turns on.",
        whyAr: "وهنا الكلمة التي دارت عليها السورة كلّها.",
        words: [
          {
            w: "عَن صَلَاتِهِمْ",
            t: "'an — ABOUT their prayer",
            meaning: "The preposition is 'an, which points away from a thing. Heedless ABOUT their prayer: careless of it as a whole — delaying it past its time, treating it as something to be got out of the way.",
            meaningAr: "الحرف ﴿عَن﴾ وهو للمجاوزة. فهم ساهون عن الصلاة جملةً: يؤخّرونها عن وقتها، ويعدّونها كُلفةً تُقضى.",
            instead: "It does not say fi salatihim — “heedless IN their prayer”. That would mean the mind wandering during the prayer itself, which happens to everyone alive and is not what is being threatened here. One letter separates a universal human weakness from the thing the surah calls woe. Change 'an to fi and the verse condemns every person who has ever prayed.\n\nThis distinction is reported from Ibn Abbas and is the reading of the mufassirun generally.",
            insteadAr: "ولم يقل «في صلاتهم» فيكون سهوَ الخاطر داخل الصلاة، وذلك يعرض لكلّ أحد وليس هو المُتوعَّد عليه. فحرفٌ واحدٌ يفصل بين ضعفٍ بشريٍّ عامّ وبين ما سمّته السورة ويلًا. ولو أُبدلت ﴿عَن﴾ بـ«في» لتناول الوعيدُ كلَّ من صلّى.\n\nوهذا الفرق مرويٌّ عن ابن عباس، وعليه عامّة المفسّرين.",
            source: "Reported from Ibn Abbas",
            strength: "tafsir"
          }
        ]
      },
      {
        n: 6,
        ar: "ٱلَّذِينَ هُمْ يُرَآءُونَ",
        why: "The second charge against the same praying men, and it explains the first. Why is a man heedless ABOUT his prayer while still performing it? Because the prayer was never for Allah. It was for whoever was watching.\n\nPut verses 5 and 6 together and they describe one coherent person, not two faults: he does not care when it is prayed, because the only thing that mattered was that it was seen.",
        whyAr: "الوصف الثاني لهؤلاء المصلّين أنفسهم، وهو الذي يُفسّر الأوّل. فلِمَ يسهو الرجل عن صلاته وهو يؤدّيها؟ لأنّ الصلاة لم تكن لله قطّ، وإنما كانت لمن ينظر.\n\nفإذا ضممتَ الخامسة إلى السادسة وصفتا رجلًا واحدًا متّسقًا لا خصلتين متفرّقتين: لا يبالي متى صلّى، لأنّ الذي عناه أن تُرى.",
        words: [
          {
            w: "يُرَآءُونَ", t: "yura''un — doing so as to be seen",
            meaning: "From the root r-a-y, to see. The form is the one Arabic uses for an action done between two sides — so the meaning is not “they see” but “they make themselves seen”, performing toward an audience.",
            meaningAr: "من مادّة (ر أ ي) وهي الإبصار. والبناء من أبنية المفاعلة التي تكون بين اثنين، فليس المعنى «يرون» بل «يُرون الناس أعمالهم»، أداءً لمن ينظر.",
            instead: "This is the origin of the word riya, and it is worth seeing where the Quran chose to put it: not in a surah about hypocrites and not in a passage about enemies. It is here, inside a list that began with an orphan being shoved — among the ordinary failures of ordinary people, aimed at a man who is standing in the prayer row.",
            insteadAr: "ومن هذا اللفظ اشتُقّ «الرياء»، ويحسن النظر في الموضع الذي اختاره القرآن له: لا في سورةٍ في المنافقين، ولا في سياقٍ في الأعداء، وإنما ههنا، داخل تعدادٍ بدأ بيتيمٍ يُدفع — بين زلل عامّة الناس، مُوجَّهًا إلى رجلٍ قائمٍ في الصفّ.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ر أ ي",
            strength: "lugha"
          }
        ]
      },
      {
        n: 7,
        ar: "وَيَمْنَعُونَ ٱلْمَاعُونَ",
        why: "The surah is named after this word, and it is the smallest thing in it. Al-ma'un was understood by many of the early scholars as the small items neighbours lend each other — a pot, a bucket, a tool.\n\nSo the surah descends: denying the Judgement, shoving the orphan, showing off in prayer — and it ends at refusing to lend a bucket. That is the last step, and it is placed last because it is the smallest. A person whose religion has become display will still not part with a pot. The surah measures faith at the point where nothing is at stake.",
        whyAr: "سُمّيت السورة بهذه الكلمة، وهي أصغر ما فيها. والماعون فسّره كثيرٌ من السلف بما يتعاطاه الجيران من متاع البيت: القِدر والدلو والآلة.\n\nفالسورة نازلة: تكذيبٌ بالدين، ودعُّ اليتيم، ورياءٌ في الصلاة، ثم تنتهي إلى منع الدلو. وهذه آخر درجةٍ ووُضعت آخرًا لأنها أصغرها. فمن صار دينه رياءً لم يسمح بقِدر. فقاست السورة الإيمان في الموضع الذي لا يُبذل فيه شيء."
      }
    ]
  },

  /* ==========================================================
     108 — AL-KAWTHAR
     ========================================================== */
  108: {
    surahTitle: "The shortest surah, answering an insult",
    surahTitleAr: "أقصر سورة، جوابًا عن شتيمة",
    surahWhy: [
      {
        h: "What was said to him first",
        hAr: "ما قيل له أوّلًا",
        en: "The Prophet's ﷺ sons died in childhood, and one of the Quraysh called him abtar — “cut off”, a man with no male line, whose name ends with him. It was said as the worst thing available to say.\n\nThe surah answers, and the shape of the answer is the lesson: it does not argue, and it does not defend. It gives — “We have granted you al-Kawthar” — and then returns the word itself at the end, to the one who threw it.",
        ar: "مات أبناء النبيّ ﷺ صغارًا، فسمّاه بعض قريشٍ الأبتر، أي المقطوع الذي لا عقب له فينتهي ذكره به. قيلت على أنها أشدّ ما يُقال.\n\nفأجابت السورة، وفي هيئة الجواب الفائدة: لم تُحاجّ ولم تُدافع، وإنما أعطت ﴿إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ﴾، ثم ردّت اللفظ نفسه في آخرها على من رماه به."
      }
    ],
    ayat: [
      {
        n: 1,
        ar: "إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ",
        why: "Three verses, and the surah never says what al-Kawthar is. The word is left open — which is the pattern worth watching for, because the Quran does this deliberately and then completes it elsewhere.",
        whyAr: "ثلاث آيات، ولم تُبيّن السورة ما الكوثر. فتُرك اللفظ مُبهمًا، وهذا هو النظم الذي يُتَرقَّب، فإنّ القرآن يفعله قصدًا ثم يُتمّه في موضعٍ آخر.",
        words: [
          {
            w: "ٱلْكَوْثَر",
            t: "al-Kawthar",
            meaning: "From the root k-th-r, abundance, on a form that intensifies it: not much, but overwhelming much.",
            meaningAr: "من مادّة (ك ث ر)، على بناءٍ يُفيد المبالغة: لا الكثير، بل الكثير الغامر.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ك ث ر",
            strength: "lugha"
          }
        ],
        links: [
          {
            ref: "Sahih Muslim, Book of Prayer — narrated by Anas ibn Malik",
            ar: "",
            en: "The Prophet ﷺ said that al-Kawthar is a river his Lord has given him in Paradise. It is also described in Sahih al-Bukhari 1344 as his Fount, which he will reach before his ummah.",
            how: "The surah leaves the word undefined and the Sunnah defines it. This is the same completing pattern as Al-Fatihah and An-Nisa, except that here the second half is in the hadith rather than in another verse — which is one of the plainest demonstrations of why the Quran is not read without the Sunnah.\n\nCited by book name rather than a number for Muslim, because the numbering in the free hadith collection this site uses is sequential and does not match the standard numbering.",
            howAr: "أبهمت السورة اللفظ وبيّنته السنّة. وهذا هو نظم التتميم نفسه الذي في الفاتحة والنساء، إلا أنّ الشطر الثاني هنا في الحديث لا في آيةٍ أخرى، وهو من أظهر ما يُبيّن أنّ القرآن لا يُقرأ بمعزلٍ عن السنّة.\n\nوعُزي إلى مسلم بالكتاب لا بالرقم، لأنّ ترقيم النسخة المجّانيّة التي يعتمدها الموقع متسلسلٌ لا يوافق الترقيم المعروف."
          }
        ]
      },
      {
        n: 2,
        ar: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
        why: "The gift was given in verse 1; verse 2 says what to do about it. And the answer is not to celebrate it, defend it, or announce it — it is to pray and to sacrifice. Something was given, so give something.\n\nThe fa at the start is a fa of consequence: BECAUSE We gave you, therefore pray. The whole logic of gratitude in Islam is inside one letter.",
        whyAr: "أُعطيت العطيّة في الأولى، وبيّنت الثانية ما يُصنع بها. وليس الجواب فرحًا ولا دفاعًا ولا إعلانًا، وإنما صلاةٌ ونحر: أُعطيتَ فأعطِ.\n\nوالفاء في أوّلها فاء السببيّة: لَمّا أعطيناك فصلِّ. فمنطق الشكر في الإسلام كلّه في حرفٍ واحد.",
        words: [
          {
            w: "لِرَبِّكَ", t: "for YOUR Lord",
            meaning: "The prayer is given a direction, and the lam is the lam of belonging: pray FOR Him, to Him, on His account.",
            meaningAr: "جُعلت للصلاة جهة، واللام لام الاختصاص: صلِّ له وحده وعلى حسابه.",
            instead: "The word was not needed to make the sentence work. “So pray and sacrifice” would have been complete Arabic. Adding li-Rabbika puts the ownership of the act beyond argument — and it lands in a surah answering a man who mocked the Prophet ﷺ, i.e. exactly where a person is most tempted to act for the benefit of onlookers.\n\nWhich is the same disease Al-Ma'un named four surahs earlier. The two surahs sit close together in the mushaf and treat opposite sides of one thing: prayer performed to be seen, and prayer explicitly assigned to its Owner.",
            insteadAr: "ولم تكن الكلمة لازمةً لتمام الجملة، فلو قيل «فصلِّ وانحر» لاستقام الكلام. فزيادة ﴿لِرَبِّكَ﴾ تقطع النزاع في ملكيّة العمل، ووقع ذلك في سورةٍ جوابًا لمن استهزأ بالنبيّ ﷺ، أي في أشدّ المواضع إغراءً بالعمل لأجل الناظرين.\n\nوهو الداء نفسه الذي سمّته الماعون قبلها بأربع سور. والسورتان متجاورتان في المصحف تعالجان وجهي أمرٍ واحد: صلاةٌ تُؤدّى ليُرى صاحبها، وصلاةٌ تُنسب إلى مالكها صريحًا.",
            source: "The wording of the verse",
            strength: "quran"
          }
        ],
        links: [
          {
            ref: "Surah Al-An'am (6:162)",
            ar: "قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            en: "“Say: indeed my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.”",
            how: "Al-Kawthar pairs prayer with sacrifice and assigns them to “your Lord”. Al-An'am takes the identical pair — salah and nusuk, prayer and sacrifice, in that order — and extends the same assignment over a person's living and dying as well.\n\nSo the short surah gives you the two acts; the longer verse shows they were only the opening of a list that ends with your whole life. This is the completing pattern working in the other direction: not a vague word made specific, but a small instruction shown to be part of something total.",
            howAr: "قرنت الكوثر الصلاة بالنحر وجعلتهما لربّك. وأخذت الأنعام القرينين أنفسهما — الصلاة والنسك على هذا الترتيب — فمدّت النسبة نفسها إلى المحيا والممات.\n\nفالسورة القصيرة تعطيك العملين، وتُريك الآية الأطول أنهما كانا مطلع تعدادٍ ينتهي بحياتك كلّها. وهذا نظم التتميم في الجهة الأخرى: لا لفظٌ مُبهم بُيّن، بل أمرٌ يسيرٌ تبيّن أنه بعض أمرٍ شامل."
          }
        ]
      },
      {
        n: 3,
        ar: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
        why: "The insult is handed back, and with the definite article on it: not “is cut off” but “is THE cut-off one”. And then history did the rest — nobody remembers the man's descendants, and the Prophet ﷺ is named aloud in every mosque on earth five times a day. The surah made a claim about the future in three words and left it to be checked.",
        whyAr: "رُدّت الشتيمة معرّفةً بأل: لا «أبتر» بل ﴿ٱلْأَبْتَرُ﴾. ثم تولّى التاريخ سائرَه: فلا يُعرف لذلك الرجل عقب، واسمُ النبيّ ﷺ يُرفع في كلّ مسجدٍ على الأرض خمس مرّاتٍ في اليوم. فادّعت السورة دعوى في المستقبل بثلاث كلمات وتركتها للاختبار."
      }
    ]
  },

  /* ==========================================================
     112 — AL-IKHLAS
     ========================================================== */
  112: {
    surahTitle: "Four verses equal to a third of the Quran",
    surahTitleAr: "أربع آياتٍ تعدل ثلث القرآن",
    surahWhy: [
      {
        h: "Why a third?",
        hAr: "ولِمَ الثلث؟",
        en: "The Prophet ﷺ asked his companions whether any of them was unable to recite a third of the Quran in a night; they found that hard, and he said “Say: He is Allah, the One” equals a third of the Quran.\n\nThe scholars explained the reckoning: the Quran's subject matter comes down to belief, rulings, and accounts of what came before. This surah is belief in Allah alone, undiluted — so it is one of the three, and it is the one the other two rest on.",
        ar: "سأل النبيُّ ﷺ أصحابه: أيعجز أحدكم أن يقرأ ثلث القرآن في ليلة؟ فشقّ ذلك عليهم، فقال: ﴿قُلْ هُوَ ٱللَّهُ أَحَدٌ﴾ تعدل ثلث القرآن.\n\nوبيّن أهل العلم وجه العدّ: أنّ مقاصد القرآن ترجع إلى توحيدٍ وأحكامٍ وأخبارٍ عمّن مضى. وهذه السورة توحيدٌ خالصٌ محض، فهي أحد الثلاثة، وهي التي يقوم عليها الآخران.",
        ref: "Sahih al-Bukhari 5015 — Abu Sa'id al-Khudri",
        strength: "hadith"
      }
    ],
    ayat: [
      {
        n: 1,
        ar: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        why: "It begins with an order to speak. The answer is not left to be worked out — it is dictated, because the question that prompted it was about the nature of God, and that is the one subject where a person may not improvise.",
        whyAr: "ابتُدئت بالأمر بالقول. فلم يُترك الجواب لاستنباطٍ، وإنما أُملي، لأنّ السؤال الذي كان عنه في ذات الله، وهو الموضع الذي لا يجوز فيه لأحدٍ أن يقول من عنده.",
        words: [
          {
            w: "أَحَدٌ",
            t: "ahad",
            meaning: "Uniqueness that admits no second at all — a oneness that cannot be counted from.",
            meaningAr: "الوحدانيّة التي لا تقبل ثانيًا البتّة، وحدةٌ لا يُعدّ منها.",
            instead: "Arabic also has wahid, and the surah does not use it here. Wahid is one that a second and a third can follow — the first in a series, one of a kind. Ahad shuts that door: it is used where any second is being denied outright.\n\nSo the surah does not say Allah is “one” in the way a thing is the first of its type. It says He is the One of whom there is no second and no series. And it closes in verse 4 with the same word again — “and there is none comparable to Him, ahad” — so the surah opens and shuts on it.",
            insteadAr: "وفي العربية «واحد» أيضًا، ولم تستعمله السورة هنا. فالواحد يُتبع بثانٍ وثالث، وهو أوّل العدد وواحدُ جنسه. وأمّا «أحد» فيسدّ هذا الباب، ويُستعمل حيث يُنفى الثاني نفيًا مطلقًا.\n\nفلم تقل السورة إنه واحدٌ كما يكون الشيء أوّل نوعه، بل إنه الأحد الذي لا ثاني له ولا عدد بعده. ثم خُتمت في الرابعة باللفظ نفسه ﴿وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ﴾، فافتُتحت السورة به وخُتمت.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry أ ح د",
            strength: "lugha"
          }
        ]
      },
      {
        n: 2,
        ar: "ٱللَّهُ ٱلصَّمَدُ",
        why: "One word, and the mufassirun gave it two senses that fit together rather than compete.",
        whyAr: "كلمةٌ واحدة، ذكر فيها المفسّرون معنيين يجتمعان ولا يتدافعان.",
        words: [
          {
            w: "ٱلصَّمَد",
            t: "as-Samad",
            meaning: "First: the one turned to in need — from samada ilayhi, to head straight for someone because only he can settle the matter. The master to whom all requests finally go.\n\nSecond: the one who is solid, with no hollow inside — and therefore takes in nothing, needs nothing, does not eat or drink.",
            meaningAr: "الأوّل: المقصود في الحوائج، من صمد إليه إذا قصده لأنّ الأمر لا يُقضى إلا عنده. فهو السيّد الذي تنتهي إليه المسائل.\n\nوالثاني: المُصمَت الذي لا جوف له، فلا يدخله شيء، ولا يحتاج، ولا يطعم ولا يشرب.",
            instead: "Put the two together and the verse is doing something precise: everything turns to Him for need, and He has no need at all. He is the destination of all want and the subject of none. A word of five letters holding both halves of that.",
            insteadAr: "فإذا ضُمّ المعنيان تبيّن دقّة الآية: كلُّ شيءٍ يقصده لحاجته، وهو لا حاجة له. فهو منتهى كلّ فقرٍ وليس فيه فقر. كلمةٌ من أربعة أحرف تحمل الشطرين.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ص م د (Shamela ed., p. 474)",
            strength: "lugha"
          }
        ]
      },
      {
        n: 3,
        ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        why: "Two denials, and the order is not interchangeable. “He does not beget” comes before “nor was He begotten”.\n\nThe first answers what was being said around the Prophet ﷺ at the time — that the angels were daughters of Allah, that Uzayr was a son, that the Messiah was a son. That claim is struck first because it was the live one.\n\nThe second closes the door behind it: anything begotten had a beginning, and anything with a beginning is not the Eternal. Deal with the claim, then remove the possibility.",
        whyAr: "نفيان لا يُقدَّم أحدهما على الآخر اعتباطًا: ﴿لَمْ يَلِدْ﴾ قبل ﴿وَلَمْ يُولَدْ﴾.\n\nفالأوّل جوابٌ لِما كان يُقال حول النبيّ ﷺ حينئذٍ: أنّ الملائكة بناتُ الله، وأنّ عزيرًا ابن، وأنّ المسيح ابن. فبُدئ بإبطاله لأنه القول القائم.\n\nوالثاني يسدّ الباب من ورائه: فالمولود له ابتداء، وما له ابتداءٌ فليس بالأوّل الأزليّ. فأُبطلت الدعوى ثم رُفع الاحتمال."
      },
      {
        n: 4,
        ar: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        why: "The surah closes on the same word it opened with — ahad. Verse 1: “He is Allah, ahad.” Verse 4: “and there is not, for Him, an equal, ahad.” Four verses that begin and end on one word, with the whole description sitting between them.\n\nArabic calls a structure that returns to its opening a ring, and it does something a list cannot: it shuts. Nothing can be appended to this surah. The last word has already answered the first.",
        whyAr: "خُتمت السورة باللفظ الذي افتُتحت به: ﴿أَحَدٌ﴾. ففي الأولى ﴿قُلْ هُوَ ٱللَّهُ أَحَدٌ﴾، وفي الرابعة ﴿وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ﴾. أربع آياتٍ تبدأ وتنتهي على كلمة، والوصف كلّه بينهما.\n\nوهذا البناء الراجع إلى مطلعه يُحدث ما لا يُحدثه التعداد: أنه يُغلق. فلا يُزاد على هذه السورة شيء، لأنّ آخر لفظٍ فيها قد أجاب أوّلها.",
        words: [
          {
            w: "كُفُوًا", t: "kufuwan — an equal, a match",
            meaning: "A peer: something on the same level, of the same kind, that could stand opposite it as a counterpart.",
            meaningAr: "الكُفء: النظير المماثل في المرتبة والجنس، الذي يصلح أن يقابله ويُقاس به.",
            instead: "The word is placed before ahad rather than after it, which is not the ordinary order. Fronting it that way makes the denial land on the KIND of thing being denied: it is not that He happens to have no equal at the moment — no equal is possible at all.\n\nAnd note the surah never argues. It was asked what Allah is like and it answered by removing every category a comparison could be built from: no second, no origin, no offspring, no counterpart. What is left cannot be pictured, and that is the answer.",
            insteadAr: "قُدّم اللفظ على ﴿أَحَدٌ﴾ وليس هذا أصل الترتيب. وفي التقديم أن يقع النفي على جنس المنفيّ: فليس أنه لا كُفء له الآن، بل لا يُتصوّر له كُفء البتّة.\n\nوتأمّل أنّ السورة لم تُحاجّ قطّ: سُئلت عن الله فأجابت برفع كلّ بابٍ يُبنى منه تشبيه: لا ثاني، ولا أصل، ولا فرع، ولا نظير. فما بقي لا يُتخيّل، وذلك هو الجواب.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ك ف أ",
            strength: "lugha"
          }
        ],
        links: [
          {
            ref: "Surah Ash-Shura (42:11)",
            ar: "لَيْسَ كَمِثْلِهِۦ شَىْءٌۭ ۖ وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ",
            en: "“There is nothing like unto Him, and He is the Hearing, the Seeing.”",
            how: "The same denial made in another surah, and it does something Al-Ikhlas leaves undone. Al-Ikhlas removes every comparison and stops there. Ash-Shura removes the comparison and, in the same breath, affirms that He hears and sees.\n\nThat pairing is the guard against a wrong conclusion. Read Al-Ikhlas alone and a person could drift toward a God so unlike anything that He is remote from everything. The other verse closes that door in five words: nothing resembles Him — AND He is hearing you now.",
            howAr: "النفي نفسه في سورةٍ أخرى، وفيها ما لم تذكره الإخلاص. فالإخلاص ترفع كلّ تشبيهٍ وتقف. وأمّا الشورى فترفع التشبيه وتُثبت في النفَس نفسه أنه سميعٌ بصير.\n\nوفي هذا القِران عصمةٌ من لازمٍ فاسد: فقد يُفضي بالقارئ إفرادُ الإخلاص إلى إلهٍ بلغ من مخالفته كلَّ شيءٍ أن صار بعيدًا عن كلّ شيء. فسدّت الآية الأخرى هذا الباب في خمس كلمات: لا يُشبهه شيء — وهو سامعُك الآن."
          }
        ]
      }
    ]
  }
};

/* Which surahs have tadabbur, derived rather than typed — the site
   has been bitten before by a hand-written list going stale while
   the data moved on (the analytics TRACKED_PAGES). */
function iitwTadabburSurahs() {
  return Object.keys(TADABBUR).map(Number).sort(function (a, b) { return a - b; });
}

/* Does this surah have anything, and how much of it. Used by the
   Quran page to decide whether to offer the button at all, and to
   label honestly when only part of a surah is covered. */
function iitwTadabburFor(surahNum) {
  const t = TADABBUR[surahNum];
  if (!t) return null;
  return {
    data: t,
    verses: (t.ayat || []).map(function (a) { return a.n; }),
    partial: !!t.partial
  };
}
