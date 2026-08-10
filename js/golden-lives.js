/* ============================================================
   GOLDEN_LIVES — the full life of each mind
   ------------------------------------------------------------
   The same shape the prophets and companions use in js/lives.js:
   where he came from, the life he actually lived, the one thing
   he is most known for, what happened to the work afterwards,
   and when he died.

   HOW DATES ARE GIVEN. Where a birth year is not certain the
   entry says "c." and means it. Several of these men have birth
   years that are reconstructed from a single line in a later
   biographer, and pretending to precision we do not have is the
   same fault as inventing a hadith number.

   THE RANK OF EACH CLAIM, as everywhere on this site:
     work    — it is in his own surviving book, and you can open it
     latin   — his book plus the Latin translation made from it,
               so the transmission itself is documented
     history — reported by later historians, not by his own hand
     popular — widely repeated and NOT established

   The Golden Age page already refuses to inflate: it says plainly
   that Ibn Firnas's flight is a 17th-century report and that the
   Latin "Geber" works are forgeries. These entries hold the same
   line. A life that is impressive on the record does not need
   help, and helping it is what gets the true parts dismissed.
   ============================================================ */

const GOLDEN_LIVES = {

  "al-khwarizmi": {
    name: "Muhammad ibn Musa al-Khwarizmi",
    nameAr: "محمد بن موسى الخوارزمي",
    latin: "Algoritmi",
    born: "c. 780 CE, in or near Khwarazm (modern Uzbekistan / Turkmenistan)",
    bornAr: "نحو ١٦٤هـ / ٧٨٠م، بخوارزم أو قريبًا منها (أوزبكستان وتركمانستان اليوم)",
    died: "c. 850 CE, Baghdad",
    diedAr: "نحو ٢٣٥هـ / ٨٥٠م، ببغداد",
    life: "He worked in Baghdad at the House of Wisdom under the caliph al-Ma'mun, in a period when the state was paying men to translate, measure and calculate. He was not a lone genius in a cell; he was a salaried scholar in a funded institution, which is itself the point the Golden Age page keeps making.\n\nHe was also given practical work. He was part of the project to measure the length of a degree of the earth's meridian, and he produced geographical tables correcting Ptolemy.",
    lifeAr: "عمل ببغداد في بيت الحكمة أيّام المأمون، في زمنٍ كانت الدولة تُجري فيه الأرزاق على من يترجم ويقيس ويحسب. فلم يكن عبقريًّا منفردًا في خلوة، وإنما عالمًا في مؤسّسةٍ مُموَّلة، وهذا نفسه ما تُلحّ عليه صفحة العصر الذهبيّ.\n\nوكُلّف بعملٍ تطبيقيّ أيضًا: فكان في مشروع قياس طول درجة من محيط الأرض، وأخرج جداول جغرافيّة صحّح بها بطليموس.",
    discovery: "Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa-l-Muqabala — “the compendium on calculation by restoration and balancing”. Al-jabr, the restoring, is the word that became ALGEBRA.\n\nWhat made it new was not solving equations; people had solved particular problems for centuries. It was treating the equation itself as an object with general rules — a method that works on any problem of that form, rather than a clever trick for one.\n\nHis book on Indian numerals is the second half of it. Translated into Latin as Algoritmi de numero Indorum, his Latinised name became the word ALGORITHM.",
    discoveryAr: "«الكتاب المختصر في حساب الجبر والمقابلة». و«الجبر» هو اللفظ الذي صار ALGEBRA.\n\nوليست الجِدّة في حلّ المعادلات، فقد حُلّت مسائل بعينها قرونًا قبله. وإنما في جعل المعادلة نفسها موضوعًا له قواعد عامّة — طريقةٌ تعمل على كلّ مسألةٍ من ذلك الباب، لا حيلةٌ ذكيّةٌ لمسألةٍ واحدة.\n\nوكتابه في الأرقام الهنديّة هو الشطر الثاني. تُرجم إلى اللاتينيّة باسم Algoritmi de numero Indorum، فصار اسمُه مُلَتَّنًا كلمةَ ALGORITHM.",
    after: "Both words are still in every mathematics classroom on earth, and almost nobody using them is told whose name they are saying. The Latin translation of his arithmetic is how the Indian-Arabic numerals reached Europe and displaced Roman numerals.",
    afterAr: "والكلمتان إلى اليوم في كلّ صفّ رياضيّات على الأرض، ولا يكاد يُخبَر مستعملُهما باسم من ينطق. وبترجمة حسابه إلى اللاتينيّة وصلت الأرقام الهنديّة العربيّة إلى أوروبا فأزاحت الأرقام الرومانيّة.",
    rank: "work",
    sources: ["His own Al-Jabr wa-l-Muqabala survives", "The Latin Algoritmi de numero Indorum documents the transmission"],
    sourcesAr: ["كتابه «الجبر والمقابلة» باقٍ", "والترجمة اللاتينية Algoritmi de numero Indorum توثّق انتقاله"]
  },

  "ibn-al-haytham": {
    name: "Al-Hasan ibn al-Haytham",
    nameAr: "الحسن بن الهيثم",
    latin: "Alhazen",
    born: "965 CE, Basra",
    bornAr: "٣٥٤هـ / ٩٦٥م، بالبصرة",
    died: "c. 1040 CE, Cairo",
    diedAr: "نحو ٤٣٢هـ / ١٠٤٠م، بالقاهرة",
    life: "He went to Egypt having claimed he could regulate the Nile flood. When he saw the river he understood the project was beyond what could be built, and that the caliph al-Hakim was not a man who accepted failure.\n\nWhat is reported is that he spent years confined — by some accounts feigning madness to survive — and that he wrote the Kitab al-Manazir in that confinement. The detail of the feigned madness is from later biographers, not from his own hand, so it is given here as history and not as fact from him.",
    lifeAr: "قدِم مصر وقد زعم أنه يقدر على ضبط فيضان النيل. فلمّا عاين النهر علم أنّ الأمر فوق ما يُبنى، وأنّ الحاكم ليس ممّن يقبل العجز.\n\nوالمرويّ أنه لبث سنين محبوسًا — وفي بعض الأخبار أنه تظاهر بالجنون ليسلم — وأنه ألّف «كتاب المناظر» في ذلك الحبس. وخبرُ التظاهر بالجنون من المتأخّرين من أصحاب التراجم لا من خطّه، فيُذكر هنا خبرًا تاريخيًّا لا نصًّا عنه.",
    discovery: "Kitab al-Manazir — the Book of Optics. Two things in it changed the world.\n\nThe first: he proved that we see because light travels FROM the object INTO the eye. Every Greek authority before him — Euclid, Ptolemy — had it the other way round, with rays going out of the eye. He did not argue it philosophically; he demonstrated it, including with the camera obscura.\n\nThe second is larger than optics. He laid out a method: state the hypothesis, build the apparatus, run the experiment, and let the result overrule the authority — including the authority of Aristotle, whom he criticised by name. That is the experimental method, six centuries before it is usually credited.",
    discoveryAr: "«كتاب المناظر». وفيه أمران غيّرا العالم.\n\nالأوّل: أنه أثبت أنّ الإبصار يقع بانتقال الضوء **من** المُبصَر **إلى** العين. وكلُّ من تقدّمه من اليونان — إقليدس وبطليموس — على العكس: أشعّةٌ تخرج من العين. ولم يُحاجّ في ذلك فلسفةً، بل برهن عليه بالتجربة، ومنها القُمرة المظلمة.\n\nوالثاني أوسع من البصريّات: أنه قرّر منهجًا: تُوضع الفرضيّة، ويُبنى الجهاز، وتُجرى التجربة، ويُقدَّم حكمُها على قول الأئمّة — ومنهم أرسطو الذي نقده باسمه. وهذا هو المنهج التجريبيّ، قبل ستّة قرونٍ ممّن يُنسب إليهم عادةً.",
    after: "Kitab al-Manazir was translated into Latin as De Aspectibus and read by Roger Bacon, Witelo and Kepler. Optics in Europe begins from his book. He is on the UNESCO record as the reason 2015 was the International Year of Light.",
    afterAr: "تُرجم «كتاب المناظر» إلى اللاتينيّة باسم De Aspectibus فقرأه روجر بيكون وفيتيلو وكِبلر. فالبصريّات في أوروبا تبدأ من كتابه. وهو السبب الذي جُعلت لأجله سنة ٢٠١٥ سنةً دوليّةً للضوء عند اليونسكو.",
    rank: "latin",
    sources: ["Kitab al-Manazir survives", "The Latin De Aspectibus documents the transmission"],
    sourcesAr: ["«كتاب المناظر» باقٍ", "والترجمة اللاتينية De Aspectibus توثّق انتقاله", "وأمّا الحبس والتظاهر بالجنون فمن المتأخّرين — خبرٌ تاريخيّ"]
  },

  "al-zahrawi": {
    name: "Abu al-Qasim al-Zahrawi",
    nameAr: "أبو القاسم الزهراوي",
    latin: "Abulcasis",
    born: "936 CE, Madinat al-Zahra near Cordoba",
    bornAr: "٣٢٤هـ / ٩٣٦م، بمدينة الزهراء قرب قرطبة",
    died: "1013 CE, Cordoba",
    diedAr: "٤٠٤هـ / ١٠١٣م، بقرطبة",
    life: "Court physician in Cordoba, and a surgeon in an age when surgery was widely regarded as beneath a physician — barbers did it. He spent about fifty years practising before he wrote the book that made him.",
    lifeAr: "طبيب البلاط بقرطبة، وجرّاحٌ في زمنٍ كانت الجراحة فيه تُعدّ دون مرتبة الطبيب، إنما يتولّاها الحلّاقون. ومارس نحو خمسين سنة قبل أن يضع الكتاب الذي عُرف به.",
    discovery: "Al-Tasrif li-man 'Ajiza 'an al-Ta'lif — thirty volumes, of which the thirtieth is on surgery and is the one that travelled.\n\nWhat makes it different from everything before it: he DREW the instruments. About two hundred of them, illustrated, so that a surgeon who never met him could have them made. He describes ligature of arteries, the use of catgut for internal stitching, the removal of bladder stones, and the management of difficult births.",
    discoveryAr: "«التصريف لمن عجز عن التأليف»، ثلاثون مجلّدًا، الثلاثون منها في الجراحة، وهي التي سارت.\n\nوالذي يُفارق به ما قبله أنه **رسم** الآلات: نحو مئتين منها مصوّرة، ليتمكّن جرّاحٌ لم يلقه قطّ من صنعها. ووصف ربط الشرايين، واستعمال أمعاء الحيوان في الخياطة الباطنة، وإخراج حصى المثانة، وتدبير الولادة المتعسّرة.",
    after: "Al-Tasrif was translated into Latin by Gerard of Cremona at Toledo and remained a standard surgical text in European universities for roughly five hundred years. Some of his instruments are recognisable in a modern theatre.",
    afterAr: "تُرجم «التصريف» إلى اللاتينيّة على يد جيرارد الكريموني بطليطلة، وبقي مرجعًا في الجراحة بجامعات أوروبا نحو خمسمئة سنة. وبعض آلاته يُعرف اليوم في غرفة العمليّات.",
    rank: "latin",
    sources: ["Al-Tasrif survives with its illustrations", "The Latin translation out of Toledo documents the transmission"],
    sourcesAr: ["«التصريف» باقٍ برسومه", "والترجمة اللاتينية من طليطلة توثّق انتقاله"]
  },

  "ibn-al-nafis": {
    name: "Ibn al-Nafis",
    nameAr: "ابن النفيس",
    latin: "—",
    born: "1213 CE, near Damascus",
    bornAr: "٦١٠هـ / ١٢١٣م، قرب دمشق",
    died: "1288 CE, Cairo",
    diedAr: "٦٨٧هـ / ١٢٨٨م، بالقاهرة",
    life: "A physician and a jurist of the Shafi'i school — he wrote on fiqh as well as on medicine, which is normal for the period and strange only to a modern reader who expects a scientist to be nothing else. He headed the Mansuri hospital in Cairo.",
    lifeAr: "طبيبٌ وفقيهٌ شافعيّ — كتب في الفقه كما كتب في الطبّ، وهذا معتادٌ في زمانه، ولا يستغربه إلا قارئٌ معاصرٌ يظنّ العالِم لا يكون إلا شيئًا واحدًا. وتولّى رئاسة البيمارستان المنصوريّ بالقاهرة.",
    discovery: "The pulmonary circulation of the blood — that blood does not pass through a wall between the two sides of the heart, as Galen had taught for a thousand years, but goes from the right side to the LUNGS, is aerated there, and returns to the left.\n\nHe states it in his commentary on the anatomy of Ibn Sina's Canon. And he says outright that he is contradicting Galen and Ibn Sina both, which is the part worth noticing: the authority being overruled was the greatest name in his own tradition.",
    discoveryAr: "الدورة الدمويّة الصغرى — أنّ الدم لا يَنفُذ من ثقبٍ في الحاجز بين بطينَي القلب كما علّم جالينوس ألف سنة، وإنما يخرج من الأيمن إلى **الرئة**، فيتهوّى فيها، ثم يعود إلى الأيسر.\n\nنصّ على ذلك في «شرح تشريح القانون». وصرّح بأنه يُخالف جالينوس وابن سينا جميعًا، وهذا موضع الوقوف: فالسلطة التي رُدّت أعظم اسمٍ في تقليده هو.",
    after: "Michael Servetus published the same finding in 1553 and William Harvey completed the circulation in 1628 — three and a half centuries later. Ibn al-Nafis's manuscript was rediscovered in Berlin in 1924, by which time the credit had long settled elsewhere.\n\nWhether Servetus knew of it is genuinely disputed and this page does not claim he did. What is not disputed is the date on the manuscript.",
    afterAr: "نشر ميخائيل سيرفيتوس الكشف نفسه سنة ١٥٥٣م، وأتمّ ويليام هارفي الدورة سنة ١٦٢٨م — بعده بثلاثة قرونٍ ونصف. وأُعيد اكتشاف مخطوط ابن النفيس ببرلين سنة ١٩٢٤م، وقد استقرّ الفضل عند غيره من زمن.\n\nوهل اطّلع سيرفيتوس عليه؟ الأمر موضع نزاعٍ حقيقيّ، ولا تدّعي هذه الصفحة أنه اطّلع. وأمّا تاريخ المخطوط فليس موضع نزاع.",
    rank: "work",
    sources: ["Sharh Tashrih al-Qanun survives — the passage is in it"],
    sourcesAr: ["«شرح تشريح القانون» باقٍ، والنصّ فيه", "وهل اطّلع سيرفيتوس عليه؟ موضع نزاع، ولا يُدّعى هنا"]
  },

  "al-biruni": {
    name: "Abu Rayhan al-Biruni",
    nameAr: "أبو الريحان البيروني",
    latin: "—",
    born: "973 CE, Kath, Khwarazm",
    bornAr: "٣٦٢هـ / ٩٧٣م، بكاث من خوارزم",
    died: "1048 CE, Ghazni",
    diedAr: "٤٤٠هـ / ١٠٤٨م، بغزنة",
    life: "He learned Sanskrit in order to read the Hindus in their own books rather than in someone's summary of them, then wrote Tahqiq ma li-l-Hind describing their beliefs and sciences — including where he thought them wrong — without caricature. It is one of the earliest works of comparative religion written to a standard a modern reader recognises.",
    lifeAr: "تعلّم السنسكريتيّة ليقرأ الهنود في كتبهم لا في تلخيص غيرهم لهم، ثم كتب «تحقيق ما للهند» واصفًا معتقداتهم وعلومهم — وفيها ما خطّأهم فيه — من غير تشويه. وهو من أقدم ما كُتب في مقارنة الأديان على وجهٍ يعرفه القارئ المعاصر.",
    discovery: "He measured the radius of the earth from a single mountain, using the angle of the horizon's dip, and got a figure remarkably close to the modern one. He also worked on specific gravity, measuring the densities of metals and stones with an accuracy that is hard to explain with the apparatus available.",
    discoveryAr: "قاس نصف قطر الأرض من جبلٍ واحد بزاوية انخفاض الأفق، فبلغ رقمًا قريبًا من المعروف اليوم قربًا لافتًا. وعمل في الأوزان النوعيّة، فقاس كثافات المعادن والأحجار بدقّةٍ يصعب تفسيرها بالآلات المتاحة حينئذٍ.",
    after: "The Hind is still read by historians of India as a source. His method — go and learn the language, then judge — is the part worth carrying, and it is the opposite of how most people argue about a religion they have never read in the original.",
    afterAr: "و«الهند» إلى اليوم مصدرٌ يقرؤه مؤرّخو الهند. وطريقتُه — تعلّم اللسان ثم احكم — هي التي يحسن حملها، وهي عكس ما عليه أكثر الناس فيما يجادلون فيه من دينٍ لم يقرؤوه بلغته.",
    rank: "work",
    sources: ["Tahqiq ma li-l-Hind survives", "Al-Qanun al-Mas'udi survives"],
    sourcesAr: ["«تحقيق ما للهند» باقٍ", "و«القانون المسعودي» باقٍ"]
  },

  "fatima-al-fihri": {
    name: "Fatima al-Fihri",
    nameAr: "فاطمة الفهريّة",
    latin: "—",
    born: "early 9th century CE, Qayrawan; her family moved to Fez",
    bornAr: "مطلع القرن الثالث الهجريّ، بالقيروان، ثم انتقلت أسرتها إلى فاس",
    died: "c. 880 CE, Fez",
    diedAr: "نحو ٢٦٥هـ / ٨٨٠م، بفاس",
    life: "She inherited money from her father and spent it on something permanent. In 859 CE she founded the mosque and teaching institution of al-Qarawiyyin in Fez.\n\nIt is worth stating what that means in the century it happened. A woman inherited wealth in her own name, controlled it, and disposed of it in her own decision — none of which required anyone's permission, because the property was hers.",
    lifeAr: "ورثت مالًا عن أبيها فأنفقته فيما يبقى: أسّست سنة ٢٤٥هـ / ٨٥٩م جامع القرويّين ومدرسته بفاس.\n\nويحسن بيان معنى ذلك في القرن الذي وقع فيه: امرأةٌ ورثت مالًا باسمها، وتصرّفت فيه، وأنفقته بقرارها هي — ولم يكن شيءٌ من ذلك موقوفًا على إذن أحد، لأنّ المال مالُها.",
    discovery: "Al-Qarawiyyin. UNESCO and the Guinness Book of Records both list it as the oldest existing, continually operating degree-granting educational institution in the world.",
    discoveryAr: "القرويّون. وتُدرجها اليونسكو وموسوعة غينيس أقدمَ مؤسّسةٍ تعليميّةٍ قائمةٍ تمنح الدرجات العلميّة ولم تنقطع.",
    after: "It is still open. Ibn Khaldun studied there; so, by many accounts, did others who carried its learning north.",
    afterAr: "ولا تزال قائمة. درس بها ابن خلدون، وفي أخبارٍ كثيرة غيرُه ممّن حمل علمها شمالًا.",
    rank: "history",
    sources: ["The foundation is recorded in the histories of Fez", "UNESCO and Guinness both list al-Qarawiyyin as the oldest continually operating degree-granting institution"],
    sourcesAr: ["تأسيسها مسجّلٌ في تواريخ فاس", "وتُدرجها اليونسكو وغينيس أقدمَ مؤسّسةٍ تمنح الدرجات ولم تنقطع"]
  },

  "ibn-khaldun": {
    name: "Abd al-Rahman ibn Khaldun",
    nameAr: "عبد الرحمن ابن خلدون",
    latin: "—",
    born: "1332 CE, Tunis",
    bornAr: "٧٣٢هـ / ١٣٣٢م، بتونس",
    died: "1406 CE, Cairo",
    diedAr: "٨٠٨هـ / ١٤٠٦م، بالقاهرة",
    life: "He lost both parents to the Black Death as a teenager, then spent his adult life in and out of the service of North African rulers, more than once imprisoned. He wrote the Muqaddimah in a few months while sheltering in a castle in Algeria, away from politics for the first time in decades.",
    lifeAr: "فقد أبويه في الطاعون الأسود وهو غلام، ثم قضى عمره في خدمة ملوك المغرب ومفارقتهم، وسُجن غير مرّة. وكتب «المقدّمة» في أشهرٍ قليلة وهو مُنقطعٌ في قلعةٍ بالجزائر، بعيدًا عن السياسة لأوّل مرّةٍ منذ عقود.",
    discovery: "The Muqaddimah. He set out to write a history and stopped to ask a prior question: what makes a historical report true or false, and what governs the rise and fall of societies?\n\nHe named 'asabiyyah — group solidarity — as the engine, described how it builds a state, how prosperity then dissolves it, and how the cycle runs across roughly four generations. He treated society as something with laws that can be studied, which is why he is repeatedly called the first sociologist.",
    discoveryAr: "«المقدّمة». قصد أن يكتب تاريخًا، فوقف عند سؤالٍ قبله: بمَ يُعرف صدق الخبر التاريخيّ من كذبه، وما الذي يحكم قيام العمران وسقوطه؟\n\nفسمّى **العصبيّة** محرّكًا، وبيّن كيف تبني الدولة، وكيف يُذيبها الترفُ بعد ذلك، وكيف تدور الدورة في نحو أربعة أجيال. وعامل الاجتماع البشريّ على أنّ له قوانين تُدرَس، ولهذا يُسمّى مرارًا أوّل عالم اجتماع.",
    after: "Arnold Toynbee called the Muqaddimah the greatest work of its kind ever created by any mind in any time or place. It is on university syllabuses in history, economics and sociology.",
    afterAr: "وصف أرنولد توينبي «المقدّمة» بأنها أعظم عملٍ من نوعه أنشأه عقلٌ في أيّ زمانٍ أو مكان. وهي في مقرّرات الجامعات في التاريخ والاقتصاد وعلم الاجتماع.",
    rank: "work",
    sources: ["The Muqaddimah survives and is widely translated"],
    sourcesAr: ["«المقدّمة» باقيةٌ ومترجمةٌ إلى لغاتٍ كثيرة"]
  }
};

/* ------------------------------------------------------------
   HOW WOMEN WERE TREATED — a comparison, with dates
   ------------------------------------------------------------
   This is the part of the subject most likely to be argued with,
   so it is built the way the rest of the page is built: legal
   instruments, dates and named statutes on both sides, and a
   block saying plainly what is NOT true.

   The famous claim that a church council at Mâcon in 585 debated
   whether women have souls is FALSE, and it is refuted here
   rather than repeated. It circulates widely and it is the single
   easiest thing for an opponent to knock down — and when it
   falls, the true and documented points beside it fall with it.
   That is the same reason the Golden Age page refuses the
   "99 per cent" framing and states plainly that Ibn Firnas's
   flight is a late report.
   ------------------------------------------------------------ */
const GOLDEN_WOMEN = {
  title: "How women were treated — and what the law actually said, on both sides",
  titleAr: "كيف عُوملت المرأة — وماذا قال القانون فعلًا، في الجهتين",
  lead: "Dated, and by legal instrument, because this is the claim people argue with most.",
  leadAr: "بالتواريخ وبالنصوص، لأنّ هذه أكثر الدعاوى مجادلةً.",

  points: [
    {
      h: "Property: hers, and it stayed hers",
      hAr: "المال: مالُها، ويبقى مالَها",
      en: "In Islamic law a woman's property and earnings remained her own on marriage. Her husband acquired no title to them. She could trade, own, sue and give away in her own name.\n\nIn English common law the doctrine of coverture did the opposite. Blackstone's Commentaries (1765) states it without embarrassment: the very being and legal existence of the woman is suspended during the marriage, or at least incorporated into that of the husband.\n\nThe remedy in England was statute, and it is late: the Married Women's Property Act 1870, extended in 1882. In the United States it went state by state, beginning with Mississippi in 1839 and New York in 1848.",
      ar: "في الشريعة يبقى مال المرأة وكسبها لها بعد الزواج، ولا يملك الزوج منه شيئًا. فلها أن تتّجر وتملك وتُخاصم وتهب باسمها.\n\nوفي القانون الإنجليزيّ العامّ كان مذهب «التغطية» على العكس. ونصّ عليه بلاكستون في «تعليقاته» سنة ١٧٦٥م بلا حرج: أنّ كيان المرأة ووجودها القانونيّ يتعطّل مدّة الزواج، أو يُدمج في كيان الزوج.\n\nوكان العلاج في إنجلترا بالتشريع، وهو متأخّر: قانون أملاك المرأة المتزوّجة سنة ١٨٧٠م، ووُسّع سنة ١٨٨٢م. وفي الولايات المتّحدة كان ولايةً ولاية، ابتداءً من مسيسيبي سنة ١٨٣٩م ونيويورك سنة ١٨٤٨م.",
      rank: "documented"
    },
    {
      h: "Inheritance: a fixed share, named in the text",
      hAr: "الميراث: نصيبٌ مفروضٌ منصوصٌ عليه",
      en: "Surah An-Nisa fixes shares for daughters, wives, mothers and sisters — “for men a share of what the parents and near relatives leave, and for women a share” (4:7).\n\nThe significance is not the size of any particular share; it is that it is a legal entitlement she does not have to be granted. And it arrives alongside the rule above: what she inherits stays hers, and her maintenance remains her husband's obligation, not a charge on her property.",
      ar: "فرضت سورة النساء أنصبةً للبنات والزوجات والأمّهات والأخوات: ﴿لِّلرِّجَالِ نَصِيبٌۭ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ وَلِلنِّسَآءِ نَصِيبٌۭ﴾ (٤:٧).\n\nوليست العبرة في مقدار نصيبٍ بعينه، وإنما في أنه حقٌّ لازمٌ لا مِنّةَ فيه. وجاء مقترنًا بالقاعدة قبله: فما ورثته يبقى لها، ونفقتُها على زوجها لا في مالها.",
      rank: "quran"
    },
    {
      h: "Consent to marriage, and a marriage annulled for the lack of it",
      hAr: "الرضا بالنكاح، ونكاحٌ رُدّ لفقده",
      en: "Khansa bint Khidham was married off by her father against her will. She came to the Prophet ﷺ and he revoked the marriage.\n\nThat is a recorded case, not a principle in the abstract: a father's arrangement overturned on the woman's objection, in Sahih al-Bukhari.",
      ar: "زوّج خنساء بنت خِذام أبوها وهي كارهة، فأتت النبيّ ﷺ فردّ نكاحها.\n\nوهذه واقعةٌ مسجّلة لا قاعدةٌ مجرّدة: عقدُ أبٍ يُنقض لاعتراض المرأة، في صحيح البخاري.",
      ref: "Sahih al-Bukhari 5138",
      rank: "hadith"
    },
    {
      h: "Women who taught the men whose books we still read",
      hAr: "نساءٌ علّمن الرجال الذين نقرأ كتبهم",
      en: "Aishah was a source of law that the senior companions returned to. Later, Karima al-Marwaziyya (d. 1070) was a recognised transmitter of Sahih al-Bukhari, and scholars travelled to hear it from her. Ibn Hajar al-Asqalani — the great commentator on al-Bukhari — lists a large number of women among his own teachers.\n\nThis is not a modern reinterpretation. It is in the chains of transmission, which are the most heavily documented records the tradition has.",
      ar: "كانت عائشة مرجعًا في الفقه يرجع إليها كبار الصحابة. ثم كانت كريمة المروزيّة (ت ٤٦٣هـ) من رواة صحيح البخاري المعتبرين، يرحل إليها العلماء ليسمعوه منها. وابن حجر العسقلانيّ — شارح البخاري — يعدّ في شيوخه عددًا كبيرًا من النساء.\n\nوليس هذا تأويلًا حديثًا، بل هو في الأسانيد، وهي أوثق ما دوّنه هذا التقليد.",
      rank: "documented"
    },
    {
      h: "The vote, for scale",
      hAr: "حقّ التصويت، للمقارنة",
      en: "For a sense of the timeline on the other side: women in the United Kingdom received the vote on equal terms with men in 1928, and in the United States in 1920. Those are within living memory of people's grandparents.",
      ar: "ولتقدير الزمن في الجهة الأخرى: نالت المرأة في المملكة المتّحدة حقّ التصويت مساواةً بالرجل سنة ١٩٢٨م، وفي الولايات المتّحدة سنة ١٩٢٠م. وهذا في حياة أجداد الناس اليوم.",
      rank: "documented"
    }
  ],

  notTrue: {
    h: "What is NOT true, and should stop being repeated",
    hAr: "ما ليس صحيحًا، وينبغي الكفّ عن ترديده",
    en: "The claim that a church council at Mâcon in 585 CE voted on whether women have souls is FALSE. It is repeated constantly in this argument and it is the weakest thing in it.\n\nWhat actually happened, from Gregory of Tours who was present: one bishop raised a question about whether the Latin word homo could be applied to a woman — a question about a word, not about souls — and he was answered from Scripture and accepted the correction. No vote, no doctrine, and no council decision that women lack souls.\n\nIt is removed here for the same reason this site says plainly that Ibn Firnas's flight is a 17th-century report and that the Latin Geber works are forgeries. The documented points above are strong. Attaching a false one to them hands an opponent the whole argument for free.",
    ar: "الدعوى أنّ مجمعًا كنسيًّا بماكون سنة ٥٨٥م صوّت على هل للمرأة روح **غير صحيحة**. وتُردَّد كثيرًا في هذا الباب، وهي أوهن ما فيه.\n\nوالذي وقع، بنقل غريغوريوس التوري وقد حضره: أنّ أسقفًا أثار سؤالًا هل يُطلق اللفظ اللاتينيّ homo على المرأة — وهو سؤالٌ في لفظ، لا في الأرواح — فأُجيب من الكتاب فرجع. فلا تصويت، ولا عقيدة، ولا قرار مجمعٍ بأنّ المرأة بلا روح.\n\nوحُذفت هنا للسبب الذي يقول به هذا الموقع صراحةً إنّ طيران ابن فرناس خبرٌ من القرن السابع عشر، وإنّ كتب «جابر» اللاتينيّة منحولة. فالنقاط الموثّقة أعلاه قويّة، وإلحاق باطلٍ بها يُسلّم الخصمَ الحجّةَ كلّها مجّانًا.",
    rank: "notestablished"
  }
};

function iitwGoldenLifeFor(id) {
  return (typeof GOLDEN_LIVES !== "undefined" && GOLDEN_LIVES[id]) ? GOLDEN_LIVES[id] : null;
}
function iitwGoldenLifeCount() {
  return (typeof GOLDEN_LIVES !== "undefined") ? Object.keys(GOLDEN_LIVES).length : 0;
}
