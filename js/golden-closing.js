/* ============================================================
   THE CLOSING DISCUSSION — لماذا سقطنا، وكيف نعود
   ============================================================
   The long discussion at the end of the Golden Age page: why we
   fell, what is pulling people down NOW, and how a person
   actually turns around.

   THE TONE IS THE POINT. Someone reading this is far more likely
   to be a young Muslim who already feels behind and ashamed than
   someone who needs telling off. Every section is written to be
   honest without contempt — the diagnosis includes the writer,
   and it always ends with the door open. Shame closes people; it
   does not reform them.

   WHERE IT IS SHARP, IT IS SHARP WITH OUR OWN TEXTS.
   The section on blind imitation does not insult anybody. It
   quotes al-Bukhari 7320 and the Quran's own words about people
   who follow without understanding. The criticism lands on US —
   on what WE chose to copy — and never on other peoples as
   peoples. That is both the honest reading and the useful one:
   a critique you can act on beats a grievance you cannot.

   `quote` renders as a pulled-out verse or hadith.
   `dua` renders as a highlighted card — the owner asked that the
   Prophet's ﷺ own words for protection and steadfastness be made
   to stand out rather than buried inside a paragraph.
   ============================================================ */

const GOLDEN_CLOSING = {
  title: "So why did we fall — and how do we come back?",
  titleAr: "فلماذا سقطنا — وكيف نعود؟",

  lead: "If you have read this far, you have just seen what this ummah built. And the obvious, painful question is the one everybody asks quietly: what happened to us?\n\nBefore the answer, one thing needs saying, because it changes how the rest of this reads. This is not written to make anybody feel ashamed. If you are young, if you feel behind, if you look at other nations and feel small — that feeling is not a sin and it is not a verdict on you. It is information. And almost everything below is fixable by ordinary people doing ordinary things, which is exactly how it was built the first time.",
  leadAr: "إن كنتَ قرأتَ إلى هنا فقد رأيتَ ما بنته هذه الأمّة. ويبقى السؤال الظاهر المؤلم الذي يسأله كلُّ أحدٍ في نفسه: ماذا جرى لنا؟\n\nوقبل الجواب كلمةٌ لا بدّ منها، فإنها تغيّر قراءة ما بعدها: لم يُكتب هذا ليُخجل أحدًا. فإن كنتَ شابًّا، وإن شعرتَ أنك متأخّر، وإن نظرتَ إلى الأمم فرأيتَ نفسك صغيرًا — فليس هذا الشعور ذنبًا ولا حكمًا عليك، وإنما هو خبر. وأكثر ما دُوّن أدناه ممّا يقدر عليه آحاد الناس بأعمالٍ عادية، وهكذا بُني أولَ مرّة.",

  sections: [
    {
      id: "gc-why",
      icon: "🔍",
      title: "Why it fell — the short, honest answer",
      titleAr: "لماذا سقط — الجواب القصير المنصف",
      body: "It is tempting to answer with the Mongols, or the colonisers, or a conspiracy. Those are real events and they did real damage. But they are not the answer, and treating them as the answer is itself part of the problem — because if the cause is entirely outside us, then the cure is outside us too, and there is nothing left to do but wait and complain.\n\nThe Quran refuses that. When the best generation this ummah ever had was defeated at Uhud — with the Prophet ﷺ among them — and they asked how it could have happened, the answer came down, and it did not blame Quraish. It said: it is from yourselves.\n\nSo here is the honest chain. The peak came from taking the Book seriously: read, look, measure, be exact, be honest in your work, do not waste, take knowledge wherever it is. When that seriousness went, everything built on it went with it — slowly, across centuries, long before any foreign army arrived. Baghdad was sacked in 1258, and yet the science carried on for three hundred more years in Damascus, Samarkand and Istanbul. It did not die when they burned the libraries. It died when we stopped filling them.",
      bodyAr: "من اليسير أن يُجاب بالمغول، أو بالاستعمار، أو بمؤامرة. وهذه وقائع حقيقيّةٌ أحدثت ضررًا حقيقيًّا. لكنها ليست الجواب، وجعلُها الجواب جزءٌ من الداء نفسه — لأنّ السبب إذا كان كلّه خارجًا عنّا كان الدواء خارجًا عنّا كذلك، فلا يبقى إلا الانتظار والشكوى.\n\nوالقرآن يأبى هذا. فلمّا هُزم خيرُ جيلٍ في هذه الأمّة يوم أُحُد — والنبيُّ ﷺ بين أظهرهم — وسألوا: أنّى هذا؟ نزل الجواب فلم يَلُم قريشًا، بل قال: ﴿قُلْ هُوَ مِنْ عِندِ أَنفُسِكُمْ﴾.\n\nوهذا هو التسلسل المنصف: إنما جاء العلوّ من أخذ الكتاب مأخذ الجدّ: اقرأ، وانظر، وقِسْ، ودقِّق، واصدق في عملك، ولا تُسرف، وخذ العلم حيث كان. فلمّا ذهب ذلك الجدّ ذهب معه كلُّ ما بُني عليه — على مهلٍ، عبر قرون، قبل وصول أيّ جيشٍ أجنبيٍّ بزمنٍ طويل. سقطت بغداد سنة ٦٥٦هـ، ومع ذلك استمرّ العلم ثلاثمئة سنةٍ أخرى في دمشق وسمرقند وإسطنبول. فلم يمت حين أحرقوا الخزائن، وإنما مات حين كففنا عن ملئها.",
      quote: {
        ar: "قُلْ هُوَ مِنْ عِندِ أَنفُسِكُمْ",
        en: "“Say: it is from yourselves.”",
        ref: "Surah Aal-Imran (3:165) — said to the companions themselves, after Uhud",
        strength: "The Quran"
      }
    },
    {
      id: "gc-imitation",
      icon: "🕳️",
      title: "The trap we are in now: following without thinking",
      titleAr: "الفخّ الذي نحن فيه الآن: الاتّباع بلا عقل",
      body: "The Prophet ﷺ described our situation fourteen hundred years ago, with an image nobody who hears it forgets.\n\nHe said we would follow the ways of the nations before us step by step, arm's length by arm's length, until if they went down the hole of a lizard, we would go down it after them. The companions asked: do you mean the Jews and the Christians? He said: “Who else?”\n\nRead the image carefully, because it is not about hating anyone. A lizard's hole is not a palace. He did not say we would follow them into their strength. He said we would follow them into a hole — into the thing that is beneath us, the thing no thinking person would choose, the thing you only enter because you watched someone else enter it.\n\nAnd the Quran names the sickness underneath it. It is following without understanding: “We follow what we found our fathers upon” — and the answer comes: “even though their fathers understood nothing and were not guided?”\n\nThat verse was revealed about people copying their ancestors. It applies, letter for letter, to people copying a screen.",
      bodyAr: "وصف النبيُّ ﷺ حالنا قبل أربعة عشر قرنًا بصورةٍ لا ينساها من سمعها.\n\nقال: لتتّبعنّ سنن من كان قبلكم شبرًا بشبرٍ وذراعًا بذراع، حتى لو دخلوا جُحر ضبٍّ تبعتموهم. قالوا: يا رسول الله، اليهود والنصارى؟ قال: «فمَن؟»\n\nوتأمَّل الصورة، فليست في بغض أحد. فجُحر الضبّ ليس قصرًا. ولم يقل إننا نتبعهم إلى قوّتهم، بل قال نتبعهم إلى جُحر — إلى ما هو دوننا، وإلى ما لا يختاره عاقل، وإلى ما لا تدخله إلا لأنك رأيتَ غيرك دخله.\n\nوسمّى القرآن الداء الذي تحته، وهو الاتّباع بغير فهم: ﴿بَلْ نَتَّبِعُ مَا أَلْفَيْنَا عَلَيْهِ آبَاءَنَا﴾ — فجاء الجواب: ﴿أَوَلَوْ كَانَ آبَاؤُهُمْ لَا يَعْقِلُونَ شَيْئًا وَلَا يَهْتَدُونَ﴾.\n\nنزلت هذه الآية في قومٍ يقلّدون آباءهم، وهي تنطبق حرفًا بحرفٍ على قومٍ يقلّدون شاشة.",
      quote: {
        ar: "لَتَتْبَعُنَّ سَنَنَ مَنْ كَانَ قَبْلَكُمْ شِبْرًا شِبْرًا وَذِرَاعًا بِذِرَاعٍ، حَتَّى لَوْ دَخَلُوا جُحْرَ ضَبٍّ تَبِعْتُمُوهُمْ. قُلْنَا: يَا رَسُولَ اللَّهِ، الْيَهُودُ وَالنَّصَارَى؟ قَالَ: فَمَنْ؟",
        en: "“You will follow the ways of those before you span by span and cubit by cubit, so much so that if they entered the hole of a lizard, you would follow them.” We said: “O Messenger of Allah — the Jews and the Christians?” He said: “Who else?”",
        ref: "Sahih al-Bukhari, Book of Holding Fast to the Book and the Sunnah, Hadith 7320 — narrated from Abu Sa'id al-Khudri; also Sahih Muslim",
        strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
      }
    },
    {
      id: "gc-what-we-copy",
      icon: "⚖️",
      title: "And look at WHAT we chose to copy",
      titleAr: "وانظر ماذا اخترنا أن ننقل",
      body: "This is where it becomes painful, and it has to be said plainly.\n\nThe West has real strengths, and any honest person can list them. They show up on time. They read. They maintain what they build instead of letting it rot the year after the opening ceremony. They save and invest rather than spending everything on an appearance. They build institutions that outlive the man who founded them. They keep records. They finish what they start.\n\nNone of that is what we copied.\n\nWhat crossed over was the drinking. The nightlife. The dress. The way of speaking, the way of looking, the mockery of anyone who prays. The idea that modesty is old-fashioned and shame is a defect. The appetite for being seen. We took the entertainment and left the engineering. We took the appetite and left the discipline.\n\nAnd here is the part that should stop us cold. The generation that built the Golden Age did the exact opposite. They took Greek geometry, Indian numerals, Persian administration and Chinese paper — and left the idolatry, the drinking and the immorality entirely alone. They imported the knowledge and refused the sin. We have managed to import the sin and refuse the knowledge.\n\nThat is not a difference of degree. It is the whole method, reversed.",
      bodyAr: "وهنا يصير الأمر مؤلمًا، ولا بدّ من قوله صريحًا.\n\nللغرب مواطن قوّةٍ حقيقيّة يعدّها كلُّ منصف: يحضرون في الوقت. ويقرؤون. ويصونون ما يبنون بدل أن يتركوه يتهالك بعد سنةٍ من حفل الافتتاح. ويدّخرون ويستثمرون بدل أن يُنفقوا كلّ شيءٍ على المظهر. ويبنون مؤسّساتٍ تبقى بعد مؤسّسها. ويقيّدون ويوثّقون. ويُتمّون ما بدؤوا.\n\nولم ننقل من ذلك شيئًا.\n\nوإنما عبر إلينا الخمر. والسهر. واللباس. وطريقة الكلام، وهيئة المظهر، والسخرية ممّن يصلّي. وأنّ الحياء شيءٌ قديم وأنّ الاستحياء نقص. وشهوة أن يراك الناس. أخذنا اللهو وتركنا الهندسة، وأخذنا الشهوة وتركنا الانضباط.\n\nوهذا هو الذي ينبغي أن يوقفنا: فإنّ الجيل الذي بنى العصر الذهبي صنع عكس ذلك تمامًا. أخذ هندسة اليونان وأرقام الهند وإدارة فارس وورق الصين — وترك عبادة الأوثان والخمر والفجور تركًا تامًّا. استورد العلم وردَّ المعصية. أما نحن فقد استوردنا المعصية ورددنا العلم.\n\nوليس هذا فرقًا في المقدار، بل هو المنهج كلّه مقلوبًا.",
      quote: {
        ar: "بَلْ نَتَّبِعُ مَا أَلْفَيْنَا عَلَيْهِ آبَاءَنَا ۗ أَوَلَوْ كَانَ آبَاؤُهُمْ لَا يَعْقِلُونَ شَيْئًا وَلَا يَهْتَدُونَ",
        en: "“We follow what we found our fathers upon.” — Even though their fathers understood nothing and were not guided?",
        ref: "Surah Al-Baqarah (2:170)",
        strength: "The Quran"
      }
    },
    {
      id: "gc-thinking",
      icon: "🧠",
      title: "Take the good, refuse the rest — and be someone who can tell the difference",
      titleAr: "خُذِ الحسن وردَّ ما سواه — وكن ممّن يفرّق بينهما",
      body: "Let nobody misread the section above as a call to shut the door and sit in the dark. That is not what the scholars said, and it is not what our own history did. Ibn Sina read the Greeks. Al-Biruni learned Sanskrit so that he could read the Hindus in their own language and describe them fairly. The House of Wisdom paid Christians, Jews and Sabians to translate, honoured them, and put their names on their work. That is a civilisation with a spine: confident enough to take what is true from anywhere, and to refuse what is corrupt from anywhere.\n\nThe rule was never “reject everything they have.” The rule is: you must be a person who chooses.\n\nAnd here the Quran uses language sharper than any preacher would dare. It describes people who have hearts they do not understand with, eyes they do not see with, ears they do not hear with — and then says of them: those are like cattle; no, they are further astray.\n\nThat is the question this page is really asking you. When you copy something — a way of dressing, a way of speaking, a way of spending your night — did you weigh it and choose it? Or did you simply see it and move toward it, the way an animal in a herd moves because the herd is moving?\n\nSomeone who chose is a human being. Someone who only followed is doing precisely what the verse describes. And that is not an insult — it is a standard, and it is one you can meet starting today, with a single question in front of the next thing you are about to imitate: is this good, and what is it doing to me?",
      bodyAr: "ولا يُفهمنّ ما تقدّم دعوةً إلى إغلاق الباب والقعود في الظلام. فليس هذا قول أهل العلم، ولا هو صنيع تاريخنا. فقد قرأ ابن سينا اليونان، وتعلّم البيروني السنسكريتية ليقرأ الهنود بلغتهم ويصفهم بإنصاف، وأجرى بيتُ الحكمة الأرزاق على النصارى واليهود والصابئة ليترجموا، وأكرمهم، وقيّد أسماءهم على أعمالهم. تلك حضارةٌ لها ظهر: من الثقة بحيث تأخذ الحقّ من أيّ مكان وتردّ الفساد من أيّ مكان.\n\nفما كانت القاعدة قطّ «ارفض كلّ ما عندهم»، بل القاعدة: أن تكون إنسانًا يختار.\n\nوهنا يستعمل القرآن لفظًا أشدّ ممّا يجرؤ عليه واعظ. يصف قومًا لهم قلوبٌ لا يفقهون بها، ولهم أعينٌ لا يبصرون بها، ولهم آذانٌ لا يسمعون بها، ثم يقول فيهم: ﴿أُولَٰئِكَ كَالْأَنْعَامِ بَلْ هُمْ أَضَلُّ﴾.\n\nوهذا هو السؤال الذي تسألك إيّاه هذه الصفحة. حين تنقل شيئًا — هيئةَ لباسٍ أو طريقةَ كلامٍ أو كيفيّةَ قضاءِ ليلك — أوزنتَه فاخترتَه؟ أم رأيتَه فمِلتَ إليه، كما تميل الدابّة في القطيع لأنّ القطيع مال؟\n\nفمن اختار فهو إنسان، ومن اتّبع فحسب فقد وقع فيما وصفته الآية بعينه. وليس هذا سبًّا، بل هو معيار، وهو معيارٌ تبلغه من اليوم بسؤالٍ واحدٍ أمام أوّل ما تهمّ بتقليده: أهذا حسن؟ وما الذي يصنعه بي؟",
      quote: {
        ar: "لَهُمْ قُلُوبٌ لَّا يَفْقَهُونَ بِهَا وَلَهُمْ أَعْيُنٌ لَّا يُبْصِرُونَ بِهَا وَلَهُمْ آذَانٌ لَّا يَسْمَعُونَ بِهَا ۚ أُولَٰئِكَ كَالْأَنْعَامِ بَلْ هُمْ أَضَلُّ",
        en: "“They have hearts with which they do not understand, eyes with which they do not see, and ears with which they do not hear. Those are like cattle — no, they are further astray.”",
        ref: "Surah Al-A'raf (7:179); the same image again at Al-Furqan (25:44)",
        strength: "The Quran"
      }
    },
    {
      id: "gc-influencers",
      icon: "📱",
      title: "The inversion: who we decided to make rich",
      titleAr: "الانقلاب: مَن الذي قرّرنا أن نُغنيه",
      body: "Here is the clearest single measure of what a people actually values. Not what they say. What they pay for.\n\nA singer can earn in one night what a surgeon earns in a year. A footballer's weekly wage would run a hospital ward. An actor is known in every house on earth; the woman who developed the treatment keeping someone's mother alive is known in none of them. A young man can name forty influencers and not one living scholar, not one Muslim scientist, not one person who built anything.\n\nThat is an inversion, and it did not happen to us. We built it. Every hour of attention is a vote, and we cast billions of them.\n\nAnd now the part nobody says to the young, so it will be said here plainly.\n\nThe influencer is not above you. The influencer is not richer than you because he is better than you, or smarter, or more beloved to Allah. He is richer than you because YOU GAVE HIM YOUR HOURS. That is the entire mechanism. You are not his audience — you are his product. He sells your attention to an advertiser and keeps the money. Every minute you spend watching is a minute deposited into his account and withdrawn from yours, and you cannot earn more minutes at any price.\n\nSo when you sit at two in the morning watching a man you will never meet enjoy a life you will never have, understand the transaction exactly: he is being paid for your time. You are paying, in the only currency Allah will ask you about — “his life, and how he spent it.”\n\nAnd then the loop. You compare your ordinary Tuesday against thirty seconds that were filmed on the tenth take, filtered, edited, and posted from a life you cannot see the inside of. You lose that comparison every time, because it was built so that you would. You feel small. You reach for the phone again to stop feeling small. That is the loop, and it is not an accident — it is the product working correctly.\n\nThere is one more thing, and it is not a small one. Mixed into all of this is the steady drip of contempt: a line in a film, a joke in a show, a comment thread under anything Islamic, a character written to be laughed at for praying. And we absorb it, and laugh along, and say it is only a movie. Allah described this posture in words that reciters can barely get through in one pass.",
      bodyAr: "وهذا أوضح ميزانٍ لما يُقدّره قومٌ حقًّا: لا ما يقولونه، بل ما يدفعون فيه.\n\nقد يكسب مغنٍّ في ليلةٍ ما يكسبه جرّاحٌ في سنة. وأجر لاعبٍ في أسبوعٍ يُدير جناحًا في مستشفى. ويُعرف ممثّلٌ في كلّ بيتٍ على وجه الأرض، ولا تُعرف في بيتٍ واحدٍ من طوّرت الدواء الذي تحيا به أمُّ أحدهم. وقد يُسمّي شابٌّ أربعين من المشاهير ولا يُسمّي عالمًا حيًّا واحدًا، ولا عالمًا مسلمًا في العلوم، ولا رجلًا بنى شيئًا.\n\nوهذا انقلاب، ولم يقع علينا، بل نحن بنيناه. فكلُّ ساعةِ انتباهٍ صوت، وقد أدلينا بمليارات الأصوات.\n\nوهذا ما لا يُقال للشباب، فليُقَل هنا صريحًا:\n\nليس المؤثِّر فوقك. وليس أغنى منك لأنه خيرٌ منك أو أذكى أو أحبّ إلى الله، وإنما هو أغنى منك لأنك أنت أعطيتَه ساعاتك. هذه هي الآلية كلّها. ولستَ جمهوره، بل أنت سلعته: يبيع انتباهك للمعلن ويأخذ المال. وكلُّ دقيقةٍ تنفقها في المشاهدة دقيقةٌ تُودَع في حسابه وتُسحب من حسابك، ولا تستطيع شراء دقيقةٍ واحدةٍ بأيّ ثمن.\n\nفإذا جلستَ في الثانية بعد منتصف الليل تشاهد رجلًا لن تلقاه يتنعّم بعيشٍ لن تناله، فافهم الصفقة على وجهها: هو يُدفع له مقابل وقتك أنت. وأنت الذي يدفع، بالعملة الوحيدة التي ستُسأل عنها: «عن عمره فيمَ أفناه».\n\nثم تأتي الحلقة المفرغة. تقارن ثلاثاءك العاديّ بثلاثين ثانيةً صُوّرت في المحاولة العاشرة، ونُقّحت ورُشّحت ونُشرت من حياةٍ لا ترى باطنها. وتخسر هذه المقارنة في كلّ مرّة، لأنها صُنعت لتخسرها. فتشعر بالصغار، فتمدّ يدك إلى الهاتف من جديدٍ لتدفع عنك الصغار. هذه هي الحلقة، وليست مصادفة، بل هي المنتَج يعمل على وجهه الصحيح.\n\nوثمّة أمرٌ آخر ليس بالهيّن: يتخلّل ذلك كلَّه استخفافٌ متقاطر: جملةٌ في فيلم، ونكتةٌ في مسلسل، وتعليقٌ تحت كلّ ما هو إسلاميّ، وشخصيّةٌ كُتبت ليُضحَك عليها لأنها تصلّي. فنتشرّبه ونضحك معه ونقول: إنما هو فيلم. وقد وصف الله هذا الموقف بكلماتٍ يكاد القارئ لا يُتمّها في نفَسٍ واحد.",
      quote: {
        ar: "يَا حَسْرَةً عَلَى الْعِبَادِ ۚ مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ",
        en: "“Oh, the regret upon the servants! There never came to them a messenger except that they used to mock him.”",
        ref: "Surah Ya-Sin (36:30)",
        strength: "The Quran",
        audio: {
          url: "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/036030.mp3",
          reciter: "Yasser Al-Dossary",
          reciterAr: "ياسر الدوسري",
          /* The player repeats by default. Reciters return to the opening
             phrase and say it again before completing the verse, and hearing
             it once flattens the whole thing — the repetition IS the meaning
             here. Two passes is the site's default; the listener can stop it. */
          repeatTimes: 2,
          /* Shown UNDER the verse and clearly labelled as the reciter's
             repetition. The verse itself is printed above exactly as it is in
             the mushaf, once — the doubling is a practice of recitation
             (tardid), never a change to the text, and this site does not
             blur that line even to make a point land harder. */
          repeatPhrase: "يَا حَسْرَةً عَلَى الْعِبَادِ … يَا حَسْرَةً عَلَى الْعِبَادِ …",
          repeatLabel: "How it is usually recited — the opening returned to before the verse is completed. The text above is the verse as it is written; this is the reciter repeating, not an extra word in the Quran.",
          repeatLabelAr: "كما تُتلى عادةً — يُعاد صدرها قبل إتمام الآية. والنصّ أعلاه هو الآية كما هي مكتوبة، وهذا ترديدُ القارئ لا زيادةَ حرفٍ في القرآن.",
          link: {
            url: "https://www.youtube.com/shorts/KtDXEUjxqCE",
            label: "The recitation this section was written around — Sharif Mustafa",
            labelAr: "التلاوة التي كُتب حولها هذا القسم — شريف مصطفى"
          },
          note: "Reciters often return to this verse and repeat its opening, and it is worth understanding why. “Ya hasratan” is not a warning of punishment — it is grief. The word is the sound a person makes over something already lost, over a chance that will not come again. And the thing being grieved is not disbelief in the abstract; it is mockery. The specific, casual, comfortable act of making a joke of what was sent to save you. Listen to it more than once. That is what this age sounds like from above.",
          noteAr: "كثيرًا ما يرجع القرّاء إلى هذه الآية فيعيدون صدرها، ويحسن أن يُعلم لِمَ. فقوله «يا حسرة» ليس وعيدًا بعذاب، وإنما هو أسًى. واللفظ صوتُ من فات عليه ما لا يُستدرك، وضاعت عليه فرصةٌ لا تعود. والمأسوف عليه ليس الكفر مجرّدًا، بل الاستهزاء: ذلك الفعل المعيَّن اليسير المستطاب — أن تُتّخذ سخريةً ممّا أُرسل لنجاتك. فاستمع إليها أكثر من مرّة، فهكذا يبدو هذا الزمان من فوق."
        }
      }
    },
    {
      id: "gc-honour",
      icon: "🎖️",
      title: "Who Baghdad made famous — and what that tells you",
      titleAr: "مَن الذي شهّرته بغداد — وماذا يدلّ ذلك",
      body: "Ask the same question of the Golden Age and the answer is a different civilisation.\n\nWho was known in Baghdad in the year 850? Al-Khwarizmi. Who did the caliph al-Ma'mun spend the treasury on? Translators, astronomers and the House of Wisdom. It is reported in the histories that he paid Hunayn ibn Ishaq the weight of his translated books in gold — and whether that particular figure is exact or a historian's flourish, the direction of it is not in doubt: the money went to the people who produced knowledge.\n\nThat is the whole difference, and it is measurable. A civilisation reveals what it worships by looking at who it makes rich and who it makes famous. Theirs made the mathematician famous. Ours makes the entertainer famous and then wonders why the young grow up wanting to be entertained rather than to be useful.\n\nAnd notice: nobody had to ban anything to get that result. Baghdad had poets and singers too — this is not a claim that they lived without art. The difference is which one sat at the top. They put the man who measured the earth above the man who amused them. We reversed it, and then we called the reversal freedom.",
      bodyAr: "واسأل السؤال نفسه عن العصر الذهبي يكن الجواب حضارةً أخرى.\n\nمن كان معروفًا في بغداد سنة ٢٣٥هـ؟ الخوارزمي. وعلى من أنفق المأمون بيت المال؟ على المترجمين والفلكيّين وبيت الحكمة. ويُروى في كتب التاريخ أنه أعطى حُنين بن إسحاق زِنة ما نقله من الكتب ذهبًا — وسواء أكان هذا الرقم بعينه محفوظًا أم فيه مبالغةٌ من مؤرّخ، فالجهة التي يدلّ عليها ليست موضع شكّ: المال ذهب إلى من يُنتج العلم.\n\nوهذا هو الفرق كلّه، وهو فرقٌ يُقاس. فالحضارة تكشف عمّا تعبده بالنظر في: من الذي تُغنيه، ومن الذي تُشهِره. فحضارتهم شهّرت الرياضيّ، وحضارتنا تُشهِر المُطرِب ثم تعجب كيف نشأ الشباب يريدون أن يُسلَّوا لا أن يَنفعوا.\n\nوتأمّل: لم يُحتَج إلى منع شيء لبلوغ تلك النتيجة. فقد كان في بغداد شعراء ومغنّون أيضًا، وليست الدعوى أنهم عاشوا بلا فنّ. وإنما الفرق: أيُّهما في القمّة. جعلوا مَن قاس الأرض فوق مَن أضحكهم، فعكسناها نحن، ثم سمّينا العكس حرّية.",
      quote: {
        ar: "وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ • وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ",
        en: "“And that man will have nothing except what he strove for, and that his striving is going to be seen.”",
        ref: "Surah An-Najm (53:39-40)",
        strength: "The Quran"
      }
    },
    {
      id: "gc-phone",
      icon: "🔌",
      title: "How to get out of the loop — concretely",
      titleAr: "كيف تخرج من الحلقة — عملًا لا كلامًا",
      body: "Nothing above is any use as a feeling. So here it is as things you can do this week, in the order that actually works.\n\n1. Look at the number. Open your screen-time report and read the weekly total out loud. Multiply it by fifty-two. That is the bill, in years of your life, and it is the answer to the question you will be asked about how you spent it. Most people have never once looked. Look.\n\n2. Unfollow every account that makes you feel small. Not “use less” — unfollow. You are not obliged to keep a door open in your own house for something that walks in and tells you that you are nothing. This takes four minutes and it is the highest-return four minutes in this whole section.\n\n3. Replace, do not just remove. An empty hour will pull you straight back. Decide in advance what fills it: a book, a skill, the gym, a page of Quran, a trade you are learning. Deletion without replacement fails, every time.\n\n4. Put the phone outside the bedroom. The two-in-the-morning scroll is not a decision you are making; it is a decision the room is making for you. Charge it in another room and buy a clock.\n\n5. Before you follow anyone, ask one question: is this person making me want to BUILD something, or making me want to BE them? Follow the first kind. There are Muslims teaching medicine, engineering, Arabic, Quran and trades for free — the same platform that hollows you out will teach you a skill if you point it there.\n\n6. Ask the honest question about envy: would you take their entire life — including the part you cannot see, the emptiness, the debt, whatever they carry at three in the morning, and their standing before Allah — in exchange for yours, whole and unseen? Almost nobody says yes. The envy usually cannot survive being asked properly.\n\n7. Name who you want to be at forty. Not what you want to have. Who you want to BE. Then spend the hour on that instead. That is the entire strategy of the men on this page: every one of them chose a thing to become and then gave it their hours.",
      bodyAr: "ولا ينفع ما تقدّم إن بقي شعورًا. فهذا هو عملًا يُصنع في هذا الأسبوع، على الترتيب الذي يُجدي.\n\n١. انظر إلى الرقم. افتح تقرير مدّة استعمال الشاشة واقرأ مجموع الأسبوع بصوتٍ مسموع، ثم اضربه في اثنتين وخمسين. تلك هي الفاتورة، بالسنين من عمرك، وهي جواب السؤال الذي ستُسأله: «عن عمره فيمَ أفناه». وأكثر الناس لم ينظر إليه مرّةً واحدة. فانظر.\n\n٢. ألغِ متابعة كلّ حسابٍ يُشعرك بالصغار. لا «قلِّل منه»، بل ألغِ متابعته. فلستَ ملزَمًا أن تُبقي في بيتك بابًا مفتوحًا لمن يدخل عليك ليقول لك إنك لا شيء. وهذا يستغرق أربع دقائق، وهي أعظم أربع دقائق عائدًا في هذا الباب كلّه.\n\n٣. استبدِل، ولا تكتفِ بالحذف. فالساعة الفارغة تجرّك إليه من جديد. فاقضِ من قبلُ بما يملؤها: كتابٌ أو مهارةٌ أو رياضةٌ أو وِردٌ من القرآن أو صنعةٌ تتعلّمها. والحذف بلا بديلٍ يفشل في كلّ مرّة.\n\n٤. اجعل الهاتف خارج غرفة النوم. فتصفّح الثانية بعد منتصف الليل ليس قرارًا تتّخذه أنت، بل قرارٌ تتّخذه الغرفة عنك. اشحنه في غرفةٍ أخرى واشترِ ساعة.\n\n٥. وقبل أن تتابع أحدًا فاسأل سؤالًا واحدًا: أهذا يجعلني أشتهي أن أبنيَ شيئًا، أم يجعلني أشتهي أن أكونه؟ فتابِع الأول. وثمّة مسلمون يعلّمون الطبّ والهندسة والعربية والقرآن والصنائع مجّانًا — والمنصّة نفسها التي تُفرغك ستعلّمك حرفةً إن وجّهتها.\n\n٦. واسأل سؤال الحسد بصدق: أتأخذ حياته كلَّها — بما لا تراه منها، والخواء، والدَّين، وما يحمله في الثالثة فجرًا، وموقفه بين يدي الله — بدلًا من حياتك كلِّها بما فيها؟ وقلَّ من يقول: نعم. فالحسد لا يكاد يبقى إذا سُئل على وجهه.\n\n٧. وسمِّ مَن تريد أن تكونه في الأربعين. لا ما تريد أن تملكه، بل مَن تريد أن تكون. ثم أنفق تلك الساعة عليه. وهذه هي خطّة كلّ رجلٍ في هذه الصفحة: اختار شيئًا يصير إليه ثم أعطاه ساعاته.",
      dua: {
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا",
        en: "“O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not humble itself, from a soul that is never satisfied, and from a supplication that is not answered.”",
        when: "Say it when you catch yourself scrolling. Look at the third one especially — a soul that is never satisfied. That is the exact condition the feed is engineered to produce in you, and he ﷺ was asking refuge from it fourteen hundred years before anyone built the machine.",
        whenAr: "قُلْه إذا وجدتَ نفسك في التصفّح. وتأمّل الثالثة خاصّة: «ونفسٍ لا تشبع». فهذه بعينها الحال التي صُنع «التمرير» ليُوقعك فيها، وقد استعاذ منها ﷺ قبل أن يُصنع هذا الجهاز بأربعة عشر قرنًا.",
        ref: "Sahih Muslim, Book of Dhikr and Supplication, Hadith 2722 — narrated from Zayd ibn Arqam",
        strength: "Sahih — Narrated by Muslim"
      }
    },
    {
      id: "gc-modesty",
      icon: "🫥",
      title: "Modesty — and who the Quran addresses FIRST",
      titleAr: "الحياء — ومن خاطبه القرآن أولًا",
      body: "Of everything that crossed over from outside, the loss of haya — modesty, the sense of shame that protects a person — has done the most damage, because it is upstream of the rest. When shame goes, everything downstream of it becomes negotiable.\n\nHe ﷺ said modesty is a branch of faith, and he said that among the words people inherited from the first prophethood is: if you feel no shame, do as you wish. That is not permission. It is a diagnosis — that shame is the last thing standing between a person and whatever they feel like doing.\n\nAnd now the part that is usually left out, and that no honest treatment of this can leave out.\n\nIn Surah An-Nur the command comes in two verses. Verse 30 is to the believing MEN: tell them to lower their gaze and guard their chastity. Verse 31 is to the believing women. The men are addressed FIRST.\n\nThat order is not decoration. A great deal of talk about modesty in our communities is aimed entirely at women, as though a woman's dress were the whole subject and a man's eyes and behaviour were somebody else's problem. That is not how the Quran ordered it. A man who stares, who cannot be trusted, who consumes filth on his phone in private and then lectures his sister in public, has skipped his own verse and gone straight to hers.\n\nSo say it in the order it was revealed. Men: lower your gaze, and guard yourself, and stop pretending that is a woman's job. Women: the covering is commanded, and its conditions are set out with the scholars' evidence on the Guidance page of this site — not as a cultural preference but as an instruction with a reason. And to both: this is a matter of dignity, not of suspicion. Modesty was never meant to be a cage for one half of the ummah and a free pass for the other.",
      bodyAr: "من كلّ ما عبر إلينا من خارج، كان ذهاب الحياء أشدَّها ضررًا، لأنه فوق غيره في السلسلة. فإذا ذهب الحياء صار ما دونه محلَّ مساومة.\n\nقال ﷺ: «الحياء شعبةٌ من الإيمان»، وقال: «إنّ ممّا أدرك الناس من كلام النبوّة الأولى: إذا لم تستحِ فاصنع ما شئت». وليست هذه إباحة، بل هي تشخيص: أنّ الحياء آخر ما يقف بين المرء وبين ما تشتهيه نفسه.\n\nوهنا الشقّ الذي يُترك عادةً، ولا يصحّ لمعالجةٍ منصفةٍ أن تتركه.\n\nفي سورة النور جاء الأمر في آيتين. الآية الثلاثون خطابٌ للمؤمنين الرجال: ﴿قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ﴾. والآية الحادية والثلاثون للمؤمنات. فالرجال خوطبوا أولًا.\n\nوهذا الترتيب ليس زينةً في الكلام. فكثيرٌ من الحديث عن الحياء في مجتمعاتنا مصوَّبٌ إلى النساء وحدهنّ، كأنّ لباس المرأة هو المسألة كلّها، وكأنّ عين الرجل وسلوكه شأن غيره. وليس هكذا رتّبه القرآن. فالرجل الذي يُطيل النظر، ولا يُؤمن جانبه، ويُدمن الخبيث في هاتفه سرًّا ثم يعظ أخته جهرًا — قد تخطّى آيته هو ومضى إلى آيتها.\n\nفلْيُقَل الأمر على ترتيب نزوله. أيها الرجال: غُضّوا أبصاركم واحفظوا فروجكم، وكفّوا عن ادّعاء أنّ هذا شأن النساء. وأيتها النساء: الستر مأمورٌ به، وشروطه مبسوطةٌ بأدلّة أهل العلم في صفحة التوجيه من هذا الموقع — لا عُرفًا اجتماعيًّا بل أمرًا له علّته. وإلى الفريقين جميعًا: هذا بابُ كرامةٍ لا بابُ تهمة. وما شُرع الحياء ليكون قفصًا على نصف الأمّة وإطلاقًا للنصف الآخر.",
      quote: {
        ar: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ ۗ إِنَّ اللَّهَ خَبِيرٌ بِمَا يَصْنَعُونَ",
        en: "“Tell the believing men to lower their gaze and guard their chastity. That is purer for them. Indeed Allah is aware of what they do.” — verse 30, to the men, BEFORE verse 31 to the women.",
        ref: "Surah An-Nur (24:30), and then (24:31); “Modesty is a branch of faith” — Sahih al-Bukhari, Hadith 9, and Muslim",
        strength: "The Quran; and the hadith on modesty is Sahih — agreed upon"
      }
    },
    {
      id: "gc-youth",
      icon: "💔",
      title: "What is actually happening to our young people",
      titleAr: "ما الذي يجري لشبابنا حقًّا",
      body: "This part is written gently on purpose, because the people it describes are usually not rebels. They are tired.\n\nA young Muslim today often carries this: a phone that shows him, every hour, other people's edited lives, so that his own real life feels like a failure. Comparison with no end to it. A degree that led nowhere. Work that does not pay enough to marry, and marriage delayed for years while everything around him is engineered to inflame desire. Prayer that slipped first to sometimes, then to Fridays, then to nothing — not out of disbelief, but out of exhaustion and shame at coming back. Nights that end at four in the morning in front of a screen. And underneath all of it, a quiet, constant sense of having no purpose larger than getting through the week.\n\nAnd then, on top of that, being told that he is the problem.\n\nHe is not the problem. He is what happens when a generation is handed no purpose, no path to a household of its own, and nobody who trained it.\n\nThe young people in this page's history were not made of different material. Ali believed at about ten. Mus'ab was sent to teach an entire city as a young man. Usamah commanded an army in his teens. Ibn Sina had finished the medicine of his age at sixteen. Muhammad al-Fatih took Constantinople at twenty-one.\n\nThey were not stronger than our young people. They were TRUSTED, and they were given something enormous to do. That is the difference — and it is a difference the older generation controls, not the younger one.",
      bodyAr: "كُتب هذا القسم برفقٍ مقصود، لأنّ من يصفهم ليسوا متمرّدين في الغالب، وإنما هم مُتعَبون.\n\nيحمل الشابّ المسلم اليوم غالبًا هذا: هاتفًا يعرض عليه في كلّ ساعةٍ حيوات الناس منتقاةً محرَّرة، فتبدو حياته هو فشلًا. ومقارنةً لا تنتهي. وشهادةً لم تُفضِ إلى شيء. وعملًا لا يكفي للزواج، وزواجًا يتأخّر سنين وكلُّ ما حوله مصنوعٌ لإثارة الشهوة. وصلاةً تراجعت أولًا إلى «أحيانًا»، ثم إلى الجمعة، ثم إلى لا شيء — لا كفرًا، بل إعياءً وحياءً من العودة. وليالي تنتهي عند الرابعة فجرًا أمام شاشة. وتحت ذلك كلِّه إحساسٌ خافتٌ مستمرٌّ بأن لا غاية له أكبر من أن يجتاز الأسبوع.\n\nثم يُقال له بعد ذلك: أنت المشكلة.\n\nوليس هو المشكلة. وإنما هو ما يقع حين يُسلَّم جيلٌ بلا غايةٍ ولا طريقٍ إلى بيتٍ يملكه ولا أحدٍ درّبه.\n\nوشباب هذه الصفحة من التاريخ لم يُخلقوا من طينةٍ أخرى: آمن عليٌّ وهو ابن نحو عشر، وأُرسل مصعبٌ ليعلّم مدينةً بأسرها وهو شاب، وأُمِّر أسامة على جيشٍ في مطلع شبابه، وأنهى ابن سينا طبّ زمانه وهو ابن ستّ عشرة، وفتح محمد الفاتح القسطنطينية وهو ابن إحدى وعشرين.\n\nلم يكونوا أقوى من شبابنا، ولكنهم أُوتُمنوا، وحُمِّلوا أمرًا عظيمًا. هذا هو الفرق، وهو بيد الكبار لا بيد الصغار."
    },
    {
      id: "gc-behind",
      icon: "📉",
      title: "Why we are behind — the uncomfortable list",
      titleAr: "لماذا نحن متأخّرون — القائمة الثقيلة",
      body: "Not one of these needs a government to fix. Every one is a personal decision, repeated by enough people until it becomes a country.\n\n• We do not respect time, and time is the one thing that cannot be replaced. An appointment at nine means nine.\n\n• We do not finish. The project is announced, celebrated, and abandoned at seventy percent.\n\n• We do not maintain. We build something beautiful and let it fall apart, because maintenance is nobody's moment of glory.\n\n• We do not read. The Book we were given opens with “Read”, and reading is now something children are made to do and adults have quietly stopped.\n\n• We tolerate dishonesty in small things — the shortcut, the bribe, the exaggeration in a sale — and then wonder why nothing large can be trusted.\n\n• We do work badly and call it fate. He ﷺ made doing it well a matter of what Allah loves.\n\n• We spend on appearance what should be saved and invested, until a wedding costs what a home should cost.\n\n• We waste our best people, who then leave — and go on to do first-rate work in someone else's country, with someone else's name on the building.\n\nRead that list again and notice something. Not one item on it is a matter of belief. Every single one is a matter of character. That is why it is fixable — and it is why it is on us.",
      bodyAr: "ليس في هذه القائمة ما يحتاج إلى حكومةٍ لإصلاحه، بل كلُّ بندٍ فيها قرارٌ شخصيٌّ يتكرّر من عددٍ كافٍ من الناس حتى يصير بلدًا.\n\n• لا نحترم الوقت، وهو الشيء الوحيد الذي لا يُعوَّض. والموعد في التاسعة معناه التاسعة.\n\n• ولا نُتمّ. يُعلَن المشروع ويُحتفل به ثم يُترك عند سبعين في المئة.\n\n• ولا نصون. نبني الجميل ثم ندعه يتهالك، لأنّ الصيانة ليست موضع فخرٍ لأحد.\n\n• ولا نقرأ. والكتاب الذي أُوتيناه يُفتتح بـ«اقرأ»، والقراءة اليوم شيءٌ يُلزَم به الصبيان وقد تركه الكبار في صمت.\n\n• ونتساهل في صغار الكذب — المخالفة اليسيرة والرشوة والمبالغة في البيع — ثم نعجب كيف لا يُوثق بكبيرٍ من الأمور.\n\n• ونُسيء العمل ونسمّيه قدرًا، وقد جعل ﷺ إتقانه ممّا يحبّه الله.\n\n• وننفق على المظهر ما حقُّه أن يُدَّخر ويُستثمر، حتى صار العرس يكلّف ثمن بيت.\n\n• ونُضيّع خيار أهلنا فيخرجون، فيعملون العمل الرفيع في بلد غيرنا، وعلى المبنى اسم غيرنا.\n\nثم أعِد قراءة القائمة وتأمّل: ليس فيها بندٌ واحدٌ من باب الاعتقاد، بل كلّها من باب الأخلاق. ولذلك هي قابلةٌ للإصلاح، ولذلك هي علينا نحن.",
      quote: {
        ar: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ",
        en: "“Allah loves that when one of you does a work, he does it well.”",
        ref: "Narrated by al-Bayhaqi in Shu'ab al-Iman and by Abu Ya'la",
        strength: "Outside the two Sahihs — graded Sahih by al-Albani in Sahih al-Jami'; some scholars considered its chain weak. Its meaning is supported by the Quran's command to give full measure."
      }
    },
    {
      id: "gc-return",
      icon: "🌅",
      title: "How a person actually comes back",
      titleAr: "كيف يعود المرء حقًّا",
      body: "Not a movement. Not a slogan. Not waiting for a leader. The verse puts the change inside people, so that is where it starts — with you, this week.\n\n1. Fix the prayer first. Everything else is built on it, and it is the thing Allah named when He described the generations that lost their way: they neglected the prayer and followed desires. Five prayers, in their time. If you have not prayed in years, pray one tonight. Nobody has to know.\n\n2. Cut the one thing you already know is destroying your week. You know what it is. You do not need a scholar to name it for you.\n\n3. Learn something properly. Your religion first, then your field, to a level nobody can dismiss. A Muslim who is the best engineer in the room serves this ummah in a way that a Muslim who is merely loud about it does not.\n\n4. Do your work well, keep your word, be exact. This is worship, and it is what a civilisation is actually made of.\n\n5. Choose before you copy. One question in front of anything you are about to imitate: is this good, and what is it doing to me?\n\n6. If you are older: trust a young person with something real, and teach them. If you are young: do not wait to be handed it.\n\nAnd know that coming back is not one dramatic moment. It is a return you will have to make more than once. Falling again does not close the door. The door is only closed by deciding not to walk back through it.",
      bodyAr: "ليست حركةً، ولا شعارًا، ولا انتظارَ زعيم. فالآية تجعل التغيير في الأنفس، فمن هناك يبدأ — منك، في هذا الأسبوع.\n\n١. أصلِح الصلاة أولًا. فعليها يقوم كلّ ما سواها، وهي التي سمّاها الله حين وصف الأجيال التي ضلّت: ﴿أَضَاعُوا الصَّلَاةَ وَاتَّبَعُوا الشَّهَوَاتِ﴾. خمس صلواتٍ في أوقاتها. وإن كنت لم تصلِّ سنين فصلِّ واحدةً الليلة، ولا يلزم أن يعلم بها أحد.\n\n٢. اقطع الشيء الواحد الذي تعلم أنه يُفسد أسبوعك. أنت تعرفه، ولا تحتاج إلى عالمٍ يسمّيه لك.\n\n٣. تعلَّم شيئًا على وجهه. دينك أولًا، ثم فنّك، إلى درجةٍ لا يستطيع أحدٌ أن يزدريها. فالمسلم الذي هو أمهر مهندسٍ في المجلس يخدم هذه الأمّة بما لا يخدمها به من يُحسن الكلام عنها فقط.\n\n٤. أتقِن عملك، واحفظ وعدك، ودقِّق. فهذه عبادة، ومنها تُبنى الحضارة حقًّا.\n\n٥. اختَرْ قبل أن تنقل. سؤالٌ واحدٌ أمام كلّ ما تهمّ بتقليده: أهذا حسن؟ وما الذي يصنعه بي؟\n\n٦. إن كنت كبيرًا فائتمن شابًّا على أمرٍ حقيقيٍّ وعلّمه. وإن كنت شابًّا فلا تنتظر أن تُعطاه.\n\nواعلم أنّ العودة ليست لحظةً واحدةً فاصلة، بل رجوعٌ ستضطرّ إليه أكثر من مرّة. والسقوط ثانيةً لا يُغلق الباب؛ وإنما يُغلقه أن تعزم ألّا ترجع منه.",
      dua: {
        ar: "يَا مُقَلِّبَ الْقُلُوبِ، ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
        en: "“O Turner of the hearts, make my heart firm upon Your religion.”",
        when: "Say it when you are afraid of slipping back. He ﷺ said it often, and when Aishah رضي الله عنها asked him why he repeated it so much, he said: “There is no heart that is not between two of the fingers of the Most Merciful. If He wills, He keeps it straight; if He wills, He turns it away.”",
        whenAr: "قُلْه إذا خفتَ الانتكاس. كان ﷺ يُكثر منه، فسألته عائشة رضي الله عنها عن كثرة قوله فقال: «ما من قلبٍ إلا وهو بين إصبعين من أصابع الرحمن، إن شاء أقامه وإن شاء أزاغه».",
        ref: "Jami at-Tirmidhi, Book of Qadar, Hadith 2140; also narrated by Ahmad and Ibn Majah",
        strength: "Outside the two Sahihs — narrated by at-Tirmidhi; graded Sahih by al-Albani"
      }
    },
    {
      id: "gc-win",
      icon: "🏆",
      title: "And how it ends",
      titleAr: "وكيف تكون العاقبة",
      body: "The promise was made, and it was made with a condition attached — and the condition is not military and it is not economic. It is that they worship Him, associating nothing with Him.\n\nThat is worth sitting with, because it means the road back is not blocked by anything outside us. No nation is holding the door shut. The condition is one a person can begin to meet tonight, alone, with nobody watching.\n\nAnd notice how the first time happened. It was not a plan drawn up by a committee. It was a small number of people who took the Book seriously, and who were told to read, and to look, and to be exact, and to be honest — and within a hundred years the centre of the world's learning had moved to their cities, and stayed there for seven hundred.\n\nThey were not given anything we have not been given. The same Book is on the shelf. It has not changed a letter.\n\nSo the question at the end of this page is not whether it can be done again. It has already been done once, by people who started with less than we have. The question is only whether we will do the ordinary, unglamorous, entirely possible things it was built out of the first time: the prayer kept, the word honoured, the work finished properly, the young trusted — and the refusal to follow anyone down a hole simply because we watched them go in.",
      bodyAr: "قد وُعِد الوعد، وقُيّد بشرط، وليس الشرط عسكريًّا ولا اقتصاديًّا، بل هو: ﴿يَعْبُدُونَنِي لَا يُشْرِكُونَ بِي شَيْئًا﴾.\n\nوهذا موضع تأمّل، فإنه يعني أنّ طريق الرجوع ليس مسدودًا بشيءٍ خارجٍ عنّا. فما من أمّةٍ تُمسك الباب. والشرط ممّا يبدأ المرء في تحقيقه هذه الليلة، وحده، لا يراه أحد.\n\nوتأمّل كيف كانت المرّة الأولى: لم تكن خطّةً وضعتها لجنة، بل نفرًا قليلًا أخذوا الكتاب مأخذ الجدّ، وقيل لهم: اقرؤوا، وانظروا، ودقّقوا، واصدقوا — فما مضت مئة سنةٍ حتى انتقل مركز العلم في الدنيا إلى مدنهم، فأقام فيها سبعمئة.\n\nولم يُؤتَوا شيئًا لم نُؤتَه. فالكتاب نفسه على الرفّ، لم يتغيّر منه حرف.\n\nفالسؤال في آخر هذه الصفحة ليس: أيمكن أن يُعاد؟ فقد أُعيد مرّةً على يد من بدأ بأقلّ ممّا بأيدينا. وإنما السؤال: أنفعل تلك الأمور العاديّة غير البرّاقة الممكنة تمامًا التي بُني منها أولَ مرّة — صلاةٌ تُحفظ، وكلمةٌ تُوفى، وعملٌ يُتمّ على وجهه، وشابٌّ يُؤتمن، وإباءٌ أن نتبع أحدًا إلى جُحرٍ لمجرّد أننا رأيناه يدخله؟",
      quote: {
        ar: "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَعَمِلُوا الصَّالِحَاتِ لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ … وَلَيُبَدِّلَنَّهُم مِّن بَعْدِ خَوْفِهِمْ أَمْنًا ۚ يَعْبُدُونَنِي لَا يُشْرِكُونَ بِي شَيْئًا",
        en: "“Allah has promised those among you who believe and do righteous deeds that He will surely make them successors in the land… and that He will surely exchange their fear for security — they worship Me, associating nothing with Me.”",
        ref: "Surah An-Nur (24:55) — the promise, and its condition in the final clause",
        strength: "The Quran"
      },
      dua: {
        ar: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        en: "“O Allah, help me to remember You, to thank You, and to worship You well.”",
        when: "Say it at the end of every prayer. He ﷺ took Mu'adh by the hand, told him twice that he loved him, and then told him never to leave this off after any prayer. Notice the third request: not merely to worship, but to worship WELL — the same word as doing your work well.",
        whenAr: "قُلْه في دُبُر كلّ صلاة. أخذ ﷺ بيد معاذٍ وأخبره مرّتين أنه يحبّه، ثم أوصاه ألّا يدعه في دُبُر كلّ صلاة. وتأمّل الطلب الثالث: ليس أن يعبد فحسب، بل أن يُحسن العبادة — وهو المعنى نفسه في إتقان العمل.",
        ref: "Sunan Abu Dawud, Book of Prayer, Hadith 1522 — narrated from Mu'adh ibn Jabal",
        strength: "Outside the two Sahihs — narrated by Abu Dawud; graded Sahih by al-Albani and by Shu'ayb al-Arna'ut"
      }
    }
  ],

  close: "May Allah return this ummah to the best of its conditions, and make us of those who did the work rather than only mourned it.",
  closeAr: "اللهمّ ردّ هذه الأمّة إلى أحسن أحوالها، واجعلنا ممّن عمل لا ممّن بكى عليها فحسب.",

  note: "This section is a reminder built on the Quran and on narrations whose grading is stated with each one. It is not a fatwa, and it is not a judgement on any person, nation or people. The criticism in it is aimed at our own choices — at what we decided to copy — and at nobody else.",
  noteAr: "هذا القسم تذكيرٌ مبنيٌّ على القرآن وعلى مرويّاتٍ مبيَّنةٍ درجتُها مع كلٍّ منها. وليس فتوى، ولا حكمًا على شخصٍ أو أمّةٍ أو شعب. والنقد فيه موجَّهٌ إلى اختياراتنا نحن — إلى ما ارتضينا نقله — لا إلى أحدٍ سوانا."
};
