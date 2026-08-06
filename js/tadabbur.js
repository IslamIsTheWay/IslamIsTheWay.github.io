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
        ref: "Sahih al-Bukhari 4956 — the beginning of the revelation, narrated by Aishah",
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
        ref: "Sahih al-Bukhari 4704, narrated by Abu Hurairah",
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
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ح م د (Shamela ed., p. 238) — quoted above in his own words",
            strength: "lugha"
          },
          {
            w: "ٱلْ (in ٱلْحَمْد)",
            t: "the definite article",
            meaning: "Not “praise” in general — the alif-lam here is for taking in the whole category. Every kind of praise there is, from anyone, for anything, belongs to Allah.",
            meaningAr: "ليست «حمدًا» مطلقًا، فالألف واللام لاستغراق الجنس: كلّ حمدٍ يقع من أيّ حامدٍ على أيّ شيء فهو لله.",
            source: "Standard grammatical reading of the verse, in the tafsirs of at-Tabari and others",
            strength: "tafsir"
          },
          {
            w: "The sentence has no verb",
            t: "jumlah ismiyyah",
            meaning: "It does not say “we praise Allah”, which would tie the praise to us and to the moment we said it. It is a nominal sentence, which in Arabic states something standing and permanent: praise belongs to Allah — whether or not anyone is currently praising.",
            meaningAr: "لم يقل «نحمد الله» فيَعلَق الحمدُ بنا وبوقت نطقنا به. وإنما هي جملة اسميّة، وهي في العربية للثبوت والدوام: فالحمد لله حَمِدَ الحامدون أو لم يحمدوا.",
            source: "Standard grammatical reading; see at-Tabari's tafsir on this verse",
            strength: "tafsir"
          },
          {
            w: "رَبّ",
            t: "rabb",
            meaning: "Ar-Raghib: the root meaning is tarbiyah — bringing a thing into being state after state until it is complete. So it is not only “Lord” or “master”; it is the one who raises and carries a thing all the way to what it was meant to become.",
            meaningAr: "قال الراغب: الربّ في الأصل التربية، وهو إنشاء الشيء حالًا فحالًا إلى حدّ التمام. فليس المعنى «السيّد» فحسب، بل الذي يُنشئ الشيء ويبلغ به تمامه.",
            instead: "Which is why “rabb al-'alamin” is a heavier claim than “malik al-'alamin” would have been. A king rules what already exists. A rabb is bringing it, continuously, to completion.",
            insteadAr: "ولهذا كان ﴿رَبِّ ٱلْعَٰلَمِينَ﴾ أثقل من «ملك العالمين» لو قيلت. فالملك يحكم ما هو كائن، والربّ يبلغ بالشيء تمامه شيئًا فشيئًا.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ر ب ب (Shamela ed., p. 318): «الرَّبُّ في الأصل: التربية، وهو إنشاء الشيء حالا فحالا إلى حدّ التمام»",
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
            source: "Standard balaghah reading; stated in at-Tabari and in the works on the language of the Quran",
            strength: "tafsir"
          },
          {
            w: "The turn from “He” to “You”",
            t: "iltifat",
            meaning: "Verses 1 to 4 speak ABOUT Allah in the third person — praise belongs to Him, He is the Lord, He is the Merciful. Verse 5 turns and speaks TO Him: You. Arabic calls this shift iltifat.",
            meaningAr: "الآيات من الأولى إلى الرابعة في الغَيبة: الحمد له، وهو الربّ، وهو الرحمن. ثم التفتت الخامسة إلى الخطاب: ﴿إِيَّاكَ﴾. وهذا الذي تسمّيه العربية الالتفات.",
            instead: "And notice where the turn falls: exactly when the servant stops describing and starts committing. You may speak about someone from a distance; a pledge has to be made to their face. The grammar moves the speaker from describing God to standing in front of Him, and it happens in the middle of the surah without a word of narration to announce it.",
            insteadAr: "وتأمّل موضع الالتفات: عند انتقال العبد من الوصف إلى العهد. فقد يُتكلَّم عن الغائب من بُعد، وأمّا العهد فلا يكون إلا مواجهةً. فنقل النظمُ المتكلّمَ من وصف الله إلى الوقوف بين يديه، ووقع ذلك في وسط السورة بغير خبرٍ يُنبّه عليه.",
            source: "Standard balaghah reading of the surah",
            strength: "tafsir"
          },
          {
            w: "نَعْبُدُ",
            t: "we, not I",
            meaning: "The verb is plural although a person may be entirely alone when saying it — in an empty room, in the middle of the night.",
            meaningAr: "الفعل بصيغة الجمع وإن كان قائله وحده — في بيتٍ خالٍ، في جوف الليل.",
            instead: "Not a'budu, “I worship”. Said alone, you are still saying it as one of a body. The individual is not the unit of this religion at the very moment he is most alone with his Lord.",
            insteadAr: "لا «أعبد». فأنت وإن انفردتَ قائلٌ بلسان جماعة. فليس الفرد وحدَه هو الأصل في هذا الدين في أشدّ أحوال انفراده بربّه.",
            source: "Standard reading of the plural in the surah",
            strength: "tafsir"
          },
          {
            w: "نَعْبُدُ before نَسْتَعِينُ",
            t: "worship, then help",
            meaning: "Worship is named first and help second, though a person needs the help in order to worship.",
            meaningAr: "قُدّمت العبادة على الاستعانة، مع أنّ العبد إنما يعبد بمعونته.",
            instead: "The order teaches what is owed before what is wanted. His right comes first; my need comes second. Reverse the two and the verse becomes a transaction.",
            insteadAr: "ففي الترتيب تقديمُ ما يجب على ما يُطلب: حقُّه أوّلًا وحاجتي ثانيًا. ولو عُكسا لصارت الآية معاوضة.",
            source: "Standard reading; noted by the mufassirun on this verse",
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
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ص ر ط (Shamela ed., p. 465) — quoted in full above; the entry is that short",
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
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ق و م; compare Surah Al-Ma'un (107:4-5)",
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
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entries أ م ن and ي ق ن",
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
        n: 255,
        ar: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ",
        arNote: "The opening of the verse. The full verse continues to “and He is the Most High, the Most Great”.",
        arNoteAr: "مطلع الآية، وتمامها إلى قوله ﴿وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ﴾.",
        why: "The Prophet ﷺ asked Ubayy ibn Ka'b which verse of the Book with him was greatest, and when Ubayy answered with this one, he struck his chest and said “May knowledge be pleasant for you, Abu al-Mundhir.” The verse contains no ruling and no story. It is description only — which is worth pausing on, because it means the greatest verse in the Book is the one that tells you most about who He is.",
        whyAr: "سأل النبيُّ ﷺ أُبيَّ بن كعب: أيّ آيةٍ من كتاب الله معك أعظم؟ فلمّا أجابه بها ضرب في صدره وقال: «ليَهْنِكَ العلمُ أبا المنذر». وليس في الآية حكمٌ ولا قصّة، وإنما هي وصفٌ محض. وهذا ممّا يُوقف عنده: فأعظم آيةٍ في الكتاب هي أكثرها تعريفًا به سبحانه.",
        ref: "Sahih Muslim, Book of the Travellers' Prayer — narrated by Ubayy ibn Ka'b. Cited by book rather than number: the numbering of Muslim in the free hadith API this site uses is sequential and does not match the standard numbering, so a number would be a guess.",
        strength: "hadith",
        words: [
          {
            w: "ٱلْقَيُّوم",
            t: "al-Qayyum",
            meaning: "On the form fay'ul, one of the most intensive patterns in Arabic. From q-w-m: to stand, and to make stand. It carries both at once — the One who stands by Himself, needing nothing to hold Him up, and the One by whom everything else is held up.",
            meaningAr: "على وزن فَيْعُول، وهو من أبلغ أبنية المبالغة في العربية. من مادّة (ق و م): القيام والإقامة. فحمل المعنيين معًا: القائم بنفسه الذي لا يحتاج إلى ما يُقيمه، والمقيم لكلّ ما سواه.",
            instead: "Which is why it comes straight after al-Hayy, the Living. Life first, then the standing that follows from it: He lives without being given life, and holds up everything that was given life.",
            insteadAr: "ولهذا جاء عقب ﴿ٱلْحَىُّ﴾: الحياة أوّلًا ثم القيّوميّة المترتّبة عليها. فهو حيٌّ لم يُحْيَ، مقيمٌ لكلّ من أُحيي.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ق و م (Shamela ed., p. 672), where he lists among the senses of qiyam «المراعاة للشيء والحفظ له» — maintaining a thing and preserving it",
            strength: "lugha"
          },
          {
            w: "سِنَةٌۭ before نَوْمٌ",
            t: "drowsiness, then sleep",
            meaning: "Sinah is the heaviness that comes over the eyes before sleep — the drifting, not the sleep itself. It is named first, and sleep second.",
            meaningAr: "السِّنَة النعاس الذي يتقدّم النوم، وهو فتور العين لا النوم نفسه. فذُكرت أوّلًا وذُكر النوم بعدها.",
            instead: "The order is an argument. Deny the small thing first and the large one follows by itself: if the faintest drowsiness never touches Him, sleep certainly does not. Say it the other way round — no sleep takes Him, nor drowsiness — and the sentence loses its force, because denying sleep leaves drowsiness standing. Two words, and their sequence is doing the reasoning.",
            insteadAr: "وفي الترتيب حجّة: إذا نُفي الأدنى أوّلًا لزم انتفاء الأعلى من بابٍ أولى. فإذا كان أدنى النعاس لا يأخذه فالنوم أبعد. ولو عُكس — لا يأخذه نومٌ ولا سِنة — لضعف النظم، لأنّ نفي النوم لا يرفع النعاس. كلمتان، وترتيبهما هو الذي يستدلّ.",
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry و س ن; and the point on the ordering is standard in the tafsirs",
            strength: "lugha"
          }
        ]
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
            source: "Standard reading of the preposition; noted by the mufassirun on this verse",
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
            source: "Standard morphological reading of the form",
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
            source: "Established by counting its occurrences in the Uthmani text",
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
            source: "The wording of the verse; the two caravans are well known in the accounts of Makkah before Islam",
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
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry د ي ن; and compare Surah Al-Fatihah (1:4)",
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
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry د ع ع; compare Surah Ad-Duha (93:9)",
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
            source: "Reported from Ibn Abbas; the standard reading in the tafsir works",
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
            source: "The wording of the verse; compare Surah Al-Ma'un (107:6)",
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
        ref: "Sahih al-Bukhari 5015, narrated by Abu Sa'id al-Khudri",
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
            source: "Ar-Raghib al-Isfahani, Al-Mufradat, entry ص م د (Shamela ed., p. 474): «الصَّمَدُ: السَّيِّدُ الذي يُصْمَدُ إليه في الأمر… وقيل: الصَّمَدُ الذي ليس بأجوف» — both senses are his",
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
