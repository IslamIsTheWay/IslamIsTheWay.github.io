/* ============================================================
   THE GOLDEN AGE OF ISLAM — العصر الذهبي للإسلام
   ============================================================
   What Muslims built, who built it, what Europe did with it,
   and whose name ended up on it.

   THE SAME RULE AS THE REST OF THE SITE APPLIES HERE:
   say how strong the source is, every time. In hadith that
   means Bukhari and Muslim first. In history it means this:

     "his own surviving work"  — we still have the book. The
                                 strongest kind of claim there is.
     "his work and its Latin translation" — we have both ends of
                                 the chain: what he wrote, and the
                                 European copy made from it.
     "reported in the histories" — the historians report it; it is
                                 not in his own hand. Weaker.
     "popular but not established" — it is repeated everywhere and
                                 the evidence for it is thin or
                                 absent. Said plainly, on the entry.

   WHY THAT MATTERS MORE HERE THAN ANYWHERE:
   the achievement is so large that it does not need helping. Every
   exaggerated claim that circulates gives someone a reason to wave
   away the twenty true ones standing beside it. The case below is
   built only out of what can be checked — and it is devastating
   without a single embellishment.
   ============================================================ */

const GOLDEN_FIELDS = [
  { id: "math",         en: "Mathematics",              ar: "الرياضيات",              icon: "🔢" },
  { id: "astronomy",    en: "Astronomy",                ar: "الفلك",                  icon: "🔭" },
  { id: "medicine",     en: "Medicine & surgery",       ar: "الطب والجراحة",          icon: "⚕️" },
  { id: "optics",       en: "Optics & physics",         ar: "البصريات والفيزياء",     icon: "💡" },
  { id: "chemistry",    en: "Chemistry",                ar: "الكيمياء",               icon: "⚗️" },
  { id: "engineering",  en: "Engineering & machines",   ar: "الهندسة والآلات",        icon: "⚙️" },
  { id: "earth",        en: "The earth, maps & travel", ar: "الأرض والخرائط والرحلة", icon: "🧭" },
  { id: "society",      en: "History & society",        ar: "التاريخ والعمران",       icon: "🏛️" },
  { id: "institutions", en: "What was built, not only written", ar: "ما بُني لا ما كُتب فحسب", icon: "🏥" }
];

/* ============================================================
   WHAT THIS ACTUALLY WAS — الملخّص
   ------------------------------------------------------------
   Rendered FIRST, above everything else, because most people
   who open this page have never been told that this period
   existed at all. Before any names or any argument about who
   took the credit, the reader needs four plain answers:

       what was it · when exactly · where · what came out of it

   Only then do the detailed cards make sense. Everything below
   is a summary of what the rest of the page proves in detail.
   ============================================================ */

const GOLDEN_OVERVIEW = {
  title: "First — what was the Golden Age of Islam?",
  titleAr: "أولًا — ما العصر الذهبي للإسلام؟",

  what: "For roughly seven hundred years, the centre of the world's learning was not in Europe. It was in Baghdad, Cordoba, Cairo, Damascus and Samarkand.\n\nIn that period Muslims did not simply preserve what the Greeks and Indians had written — although they did that too, and Europe got much of its own Greek inheritance back through Arabic. They corrected it, tested it, and built new sciences that had not existed before: algebra, the study of light, laboratory chemistry, clinical medicine, the science of society. They built the first hospitals that treated anyone free of charge, and the first university still teaching today.\n\nIf you have never heard this, that is the normal experience — including for most Muslims. It is not a small footnote to European history. For several centuries it WAS the history.",
  whatAr: "نحو سبعمئة سنة، لم يكن مركز العلم في الدنيا بأوروبا، بل كان في بغداد وقرطبة والقاهرة ودمشق وسمرقند.\n\nولم يكن المسلمون في تلك المدّة حافظين لما كتبه اليونان والهند فحسب — وإن فعلوا ذلك أيضًا، حتى استردّت أوروبا أكثر ميراثها اليوناني من العربية — بل صحّحوه واختبروه، وأنشأوا علومًا لم تكن قبلهم: الجبر، وعلم الضوء، والكيمياء المعملية، والطبّ السريري، وعلم العمران. وبنوا أول المستشفيات التي تعالج كلَّ قادمٍ بلا أجر، وأول جامعةٍ ما زالت تُدرّس إلى اليوم.\n\nفإن كنت لم تسمع بهذا من قبل فتلك هي الحال المعتادة — حتى عند أكثر المسلمين. وليس هذا هامشًا صغيرًا في تاريخ أوروبا؛ بل كان هو التاريخ نفسه قرونًا.",

  when: "The usual dates given are 750–1258 CE (132–656 AH) — from the rise of the Abbasid caliphate and the founding of Baghdad, to the Mongol destruction of that city.\n\nBut that is a Baghdad-shaped answer, and it is too neat. Muslim Spain ran on its own clock from 756 until 1492. And the science did not stop in 1258: the observatory at Maragha was founded the year AFTER Baghdad fell, Ibn ash-Shatir was rebuilding planetary astronomy in Damascus in the 1300s, Ibn Khaldun wrote the Muqaddimah in 1377, Ulugh Beg's observatory at Samarkand was catalouging stars in the 1420s, and Taqi ad-Din was describing a steam turbine in Istanbul in the 1550s.\n\nSo the honest answer: the peak was roughly the 8th to the 13th century, the decline was gradual rather than a single catastrophe, and first-rate work continued in places for another three hundred years.",
  whenAr: "التاريخ الذي يُذكر عادةً هو من سنة ١٣٢هـ إلى ٦٥٦هـ (٧٥٠–١٢٥٨م) — من قيام الدولة العباسية وبناء بغداد، إلى إسقاط المغول لها.\n\nلكنّ هذا جوابٌ مقيسٌ على بغداد وحدها، وهو أنعم ممّا ينبغي. فالأندلس جرت على ساعتها من سنة ١٣٨هـ إلى ٨٩٧هـ. ولم يقف العلم سنة ٦٥٦هـ: فمرصد مراغة أُنشئ في السنة التالية لسقوط بغداد، وابن الشاطر يعيد بناء علم الهيئة بدمشق في القرن الثامن الهجري، وابن خلدون يكتب المقدّمة سنة ٧٧٩هـ، ومرصد أُلُغ بك بسمرقند يفهرس النجوم في العشرينيات من القرن التاسع الهجري، وتقيّ الدين يصف العنفة البخارية بإسطنبول في القرن العاشر.\n\nفالجواب المنصف: أنّ الذروة كانت من القرن الثاني إلى السابع الهجري تقريبًا، وأنّ الانحدار كان تدرّجًا لا كارثةً واحدة، وأنّ العمل الرفيع استمرّ في مواضع ثلاثمئة سنةٍ أخرى.",

  where: "Baghdad — the House of Wisdom, founded with the city in 762. Cordoba — whose library under al-Hakam II held hundreds of thousands of volumes when the largest in Christian Europe held a few hundred. Cairo — al-Azhar from 970. Damascus. Fez — al-Qarawiyyin from 859. And later Maragha, Samarkand and Istanbul.",
  whereAr: "بغداد — وبيت الحكمة قام مع المدينة سنة ١٤٥هـ. وقرطبة — التي ضمّت خزانتها في عهد الحكم المستنصر مئات الآلاف من المجلّدات، وأكبر خزائن أوروبا النصرانية يومئذٍ بضع مئات. والقاهرة — والأزهر من سنة ٣٥٩هـ. ودمشق. وفاس — والقرويّون من سنة ٢٤٥هـ. ثم مراغة وسمرقند وإسطنبول.",

  /* ---------- The one-line summary of what came out of it ----------
     Everything here is proved in detail further down the page. This is
     the version someone can read in ninety seconds and walk away with. */
  harvestTitle: "What came out of it — the short version",
  harvestTitleAr: "ماذا خرج منه — باختصار",
  harvest: [
    { icon: "🔢", en: "Algebra — invented as a subject, in a book written to divide inheritance correctly.", ar: "الجبر — أُنشئ علمًا مستقلًّا، في كتابٍ صُنّف ليُقسم الميراث على وجهه." },
    { icon: "⚙️", en: "The word algorithm — it is al-Khwarizmi's name, worn down by eight centuries of use.", ar: "لفظة «الخوارزمية» — وهي اسم الخوارزمي، أبلته ثمانية قرونٍ من الاستعمال." },
    { icon: "0️⃣", en: "The decimal numbers and the zero, carried into Europe — which is why you are not doing arithmetic in Roman numerals.", ar: "الأرقام العشرية والصفر، نُقلت إلى أوروبا — ولذلك لا تحسب اليوم بالأرقام الرومانية." },
    { icon: "💡", en: "How sight works — light enters the eye, it does not leave it — and with it the experimental method itself, written down around 1020.", ar: "كيف يقع الإبصار — بدخول الضوء إلى العين لا بخروجه منها — ومعه المنهج التجريبي نفسه، مكتوبًا نحو سنة ٤١٠هـ." },
    { icon: "📷", en: "The camera obscura, from which the camera descends.", ar: "الغرفة المظلمة، ومنها انحدرت الكاميرا." },
    { icon: "⚕️", en: "A medical encyclopaedia taught in European universities for six hundred years.", ar: "موسوعةٌ طبيةٌ دُرّست في جامعات أوروبا ستّمئة سنة." },
    { icon: "🔪", en: "Illustrated surgery — about two hundred instruments drawn, many still recognisable today — and catgut for internal stitching.", ar: "الجراحة المصوَّرة — نحو مئتَي آلةٍ مرسومة، كثيرٌ منها يُعرف اليوم — وخيوط الأمعاء للخياطة الباطنة." },
    { icon: "🫀", en: "The pulmonary circulation of the blood, three hundred years before Europe described it.", ar: "الدورة الدموية الصغرى، قبل أن تصفها أوروبا بثلاثمئة سنة." },
    { icon: "⚗️", en: "Chemistry as laboratory work — distillation, the alembic, and the words alkali, alcohol and chemistry itself.", ar: "الكيمياء عملًا معمليًّا — التقطير والإنبيق، وألفاظ القِلْي والكُحْل والكيمياء نفسها." },
    { icon: "🏥", en: "The hospital as we know it: wards by illness, case records, teaching at the bedside, free treatment for anyone — and a licensing exam for physicians in the year 931.", ar: "المستشفى كما نعرفه: أقسامٌ بحسب العلل، وسجلّات، وتعليمٌ عند سرير المريض، وعلاجٌ مجّانيٌّ لكلّ أحد — وامتحان ترخيصٍ للأطبّاء سنة ٣١٩هـ." },
    { icon: "🎓", en: "The university — al-Qarawiyyin in Fez, founded by a woman in 859 and still teaching.", ar: "الجامعة — القرويّون بفاس، أسّستها امرأةٌ سنة ٢٤٥هـ وما زالت تُدرّس." },
    { icon: "🌍", en: "The radius of the earth measured from one mountain, to within about half a percent.", ar: "نصف قطر الأرض مقيسًا من جبلٍ واحد، في حدود نصف بالمئة." },
    { icon: "🧭", en: "The most accurate map of the world for the next three hundred years.", ar: "أدقّ خريطةٍ للعالم في الثلاثمئة سنة التالية." },
    { icon: "🔭", en: "Star catalogues so good that European astronomers kept the Arabic names — and still use about two hundred of them today.", ar: "فهارس نجومٍ بلغت من الجودة أن أبقى فلكيّو أوروبا أسماءها العربية — وما زالوا يستعملون نحو مئتين منها اليوم." },
    { icon: "🏛️", en: "The science of society, and a theory of why civilisations rise and fall — written six centuries before sociology had a name.", ar: "علم العمران، ونظريّةٌ في قيام الحضارات وسقوطها — كُتبت قبل أن يكون لعلم الاجتماع اسمٌ بستّة قرون." },
    { icon: "📄", en: "Cheap paper, industrialised and passed to Europe — without which none of the rest of it survives or spreads.", ar: "الورق الرخيص، صُنّع على نطاقٍ واسعٍ ثم انتقل إلى أوروبا — ولولاه ما بقي شيءٌ من هذا كلّه ولا انتشر." }
  ],

  /* ---------- The timeline ----------
     Dated so the reader can place it against something they already know.
     `era` groups the entries; `note` is used where the usual telling is
     misleading and needs a word of correction. */
  timelineTitle: "When it happened — the dates",
  timelineTitleAr: "متى كان — التواريخ",
  timeline: [
    { year: "610 CE", yearAr: "قبل الهجرة بـ ١٣ سنة", era: "before",
      en: "The first revelation to the Prophet ﷺ. The first word is “Read.”",
      ar: "أول ما نزل على النبي ﷺ، وأول كلمةٍ فيه: ﴿اقْرَأْ﴾." },
    { year: "622 CE / 1 AH", yearAr: "١ هـ", era: "before",
      en: "The Hijra to Madinah — the start of the Islamic calendar and of the Muslim state.",
      ar: "الهجرة إلى المدينة — ومنها بدء التقويم الهجري وقيام الدولة." },
    { year: "661–750 CE", yearAr: "٤١–١٣٢ هـ", era: "rise",
      en: "The Umayyad period, centred on Damascus. Expansion, and the first translations.",
      ar: "الدولة الأموية ومركزها دمشق. التوسّع، وأوائل الترجمة." },
    { year: "751 CE", yearAr: "١٣٣ هـ", era: "rise",
      en: "Papermaking reaches the Muslim world after the battle of Talas — the single most important thing on this list, because nothing else survives without it.",
      ar: "وصول صناعة الورق إلى بلاد المسلمين بعد وقعة نهر طلاس — وهو أهمّ ما في هذه القائمة، إذ لا يبقى شيءٌ سواه بغيره." },
    { year: "762 CE", yearAr: "١٤٥ هـ", era: "peak",
      en: "Baghdad is founded by al-Mansur as a planned round city, and becomes the centre of the world's learning.",
      ar: "بناء المنصور بغدادَ مدينةً مدوّرةً مخطَّطة، فصارت مركز العلم في الدنيا." },
    { year: "c. 794 CE", yearAr: "نحو ١٧٨ هـ", era: "peak",
      en: "The first paper mill in Baghdad. Books stop being a luxury.",
      ar: "أول مطحنة ورقٍ ببغداد، فخرج الكتاب من باب الترف." },
    { year: "813–833 CE", yearAr: "١٩٨–٢١٨ هـ", era: "peak",
      en: "Al-Ma'mun. The House of Wisdom at its height and the great translation movement — Greek, Persian and Indian works rendered into Arabic and then corrected.",
      ar: "خلافة المأمون. بيت الحكمة في ذروته، وحركة الترجمة الكبرى — نُقلت كتب اليونان وفارس والهند إلى العربية ثم صُحّحت." },
    { year: "c. 820 CE", yearAr: "نحو ٢٠٥ هـ", era: "peak",
      en: "Al-Khwarizmi writes the book that founds algebra.",
      ar: "الخوارزمي يصنّف الكتاب الذي تأسّس به الجبر." },
    { year: "859 CE", yearAr: "٢٤٥ هـ", era: "peak",
      en: "Fatima al-Fihri founds al-Qarawiyyin in Fez — recognised as the oldest existing degree-granting university in the world.",
      ar: "فاطمة الفهرية تؤسّس القرويّين بفاس — ويُقرّ بأنها أقدم جامعةٍ قائمةٍ في العالم تمنح الإجازة." },
    { year: "929–1031 CE", yearAr: "٣١٦–٤٢٢ هـ", era: "peak",
      en: "The caliphate of Cordoba. Al-Andalus at its height, and the library of al-Hakam II.",
      ar: "خلافة قرطبة. الأندلس في ذروتها، وخزانة الحكم المستنصر." },
    { year: "931 CE", yearAr: "٣١٩ هـ", era: "peak",
      en: "After a patient dies of a doctor's error, the caliph orders every practising physician in Baghdad to be examined — a medical licensing board in the tenth century.",
      ar: "بعد موت مريضٍ بخطأ طبيب، يأمر الخليفة بامتحان كلّ من يزاول الطبّ ببغداد — هيئة ترخيصٍ طبيٍّ في القرن الرابع." },
    { year: "970 CE", yearAr: "٣٥٩ هـ", era: "peak",
      en: "Al-Azhar is founded in Cairo.",
      ar: "تأسيس الأزهر بالقاهرة." },
    { year: "c. 1020 CE", yearAr: "نحو ٤١٠ هـ", era: "peak",
      en: "Ibn al-Haytham completes the Book of Optics in Cairo — and with it the experimental method, six hundred years before it was named in Europe.",
      ar: "ابن الهيثم يُتمّ كتاب المناظر بالقاهرة — ومعه المنهج التجريبي، قبل أن يُسمّى في أوروبا بستّمئة سنة." },
    { year: "1025 CE", yearAr: "٤١٦ هـ", era: "peak",
      en: "Ibn Sina completes the Canon of Medicine.",
      ar: "ابن سينا يُتمّ القانون في الطب." },
    { year: "1085 CE", yearAr: "٤٧٨ هـ", era: "transfer",
      en: "Toledo falls, and its libraries with it. For the next century Europeans come to translate Arabic into Latin — this is the doorway most of it went through.",
      ar: "سقوط طليطلة وخزائن كتبها معها. فيقبل الأوروبيون قرنًا يترجمون من العربية إلى اللاتينية — وهذا هو الباب الذي عبر منه أكثره." },
    { year: "1258 CE", yearAr: "٦٥٦ هـ", era: "break",
      en: "The Mongols destroy Baghdad. This is the date usually given for the end — and it is where the usual telling stops being accurate.",
      ar: "المغول يدمّرون بغداد. وهذا هو التاريخ الذي يُجعل نهايةً عادةً — وعنده تكفّ الرواية المعتادة عن الدقّة.",
      note: "The science did not stop here. Everything below happened after Baghdad fell." },
    { year: "1259 CE", yearAr: "٦٥٧ هـ", era: "after",
      en: "The observatory at Maragha is founded — the year AFTER Baghdad falls. At-Tusi's work there produces the geometry Copernicus would use.",
      ar: "إنشاء مرصد مراغة — في السنة التالية لسقوط بغداد. ومن عمل الطوسي فيه خرجت الهندسة التي استعملها كوبرنيكوس." },
    { year: "c. 1242 CE", yearAr: "نحو ٦٤٠ هـ", era: "after",
      en: "Ibn an-Nafis describes the pulmonary circulation in Damascus.",
      ar: "ابن النفيس يصف الدورة الدموية الصغرى بدمشق." },
    { year: "1377 CE", yearAr: "٧٧٩ هـ", era: "after",
      en: "Ibn Khaldun writes the Muqaddimah — and in it, the explanation of how civilisations decline.",
      ar: "ابن خلدون يكتب المقدّمة — وفيها تفسير كيف تنحدر الحضارات." },
    { year: "1420s CE", yearAr: "العشرينيات من القرن ٩ هـ", era: "after",
      en: "Ulugh Beg's observatory at Samarkand produces the first substantially new star catalogue since antiquity.",
      ar: "مرصد أُلُغ بك بسمرقند يخرج أول فهرسٍ نجميٍّ جديدٍ في جوهره منذ القدم." },
    { year: "1492 CE", yearAr: "٨٩٧ هـ", era: "after",
      en: "Granada falls. Eight centuries of al-Andalus end.",
      ar: "سقوط غرناطة، وانتهاء ثمانية قرونٍ من الأندلس." },
    { year: "1577 CE", yearAr: "٩٨٥ هـ", era: "after",
      en: "Taqi ad-Din builds the Istanbul observatory, and describes a working steam turbine. It is demolished three years later — not by an enemy, but from within.",
      ar: "تقيّ الدين يبني مرصد إسطنبول، ويصف عنفةً بخاريةً عاملة. ثم يُهدم بعد ثلاث سنين — لا بيد عدوٍّ، بل من الداخل." }
  ],

  eras: [
    { id: "before",   en: "Before it began",            ar: "ما قبله" },
    { id: "rise",     en: "The ground being laid",      ar: "تمهيد الأرض" },
    { id: "peak",     en: "The peak",                   ar: "الذروة" },
    { id: "transfer", en: "The crossing into Europe",   ar: "العبور إلى أوروبا" },
    { id: "break",    en: "The blow",                   ar: "الضربة" },
    { id: "after",    en: "After the date they give you", ar: "بعد التاريخ الذي يُقال لك" }
  ],

  close: "That is the summary. Everything in it is set out in detail below, name by name, with the strength of the evidence stated on every card.",
  closeAr: "هذا هو الملخّص. وكلّ ما فيه مفصَّلٌ أدناه اسمًا اسمًا، مع بيان درجة الدليل في كلّ بطاقة."
};

/* ============================================================
   WHY IT HAPPENED
   ------------------------------------------------------------
   This is the part usually left out, and it is the part that
   matters most — because if the peak came from the religion, then
   the way back is not a mystery.

   Every one of these men was a Muslim scholar before he was
   anything a modern university would recognise. The sciences they
   founded were not a distraction from the religion. Several of
   them exist BECAUSE of it: the prayer needs a direction and a
   time, so trigonometry and astronomy; the inheritance shares in
   Surah An-Nisa need exact arithmetic, so algebra — al-Khwarizmi
   says so himself in his own preface.
   ============================================================ */

const GOLDEN_ROOT = {
  title: "Why the peak happened at all",
  titleAr: "لماذا كان هذا العلوّ أصلًا",
  intro: "It is often told as though Muslims produced this in spite of their religion, or in some accidental golden window that happened to open. The men themselves said the opposite. The first word revealed to the Prophet ﷺ was a command to read. The Quran repeatedly orders people to look at the sky, the earth, the mountains and their own bodies and to reason from what they see. And several of these sciences were born directly out of an act of worship that demanded precision.",
  introAr: "كثيرًا ما يُروى الأمر كأنّ المسلمين أنتجوا هذا رغم دينهم، أو في نافذةٍ ذهبيةٍ انفتحت مصادفةً. وقد قال هؤلاء الرجال أنفسهم عكس ذلك. فأول كلمةٍ نزلت على النبي ﷺ أمرٌ بالقراءة، والقرآن يأمر مرارًا بالنظر في السماء والأرض والجبال وفي أنفس الناس والاستدلال بما يُرى. بل وُلدت عدّةٌ من هذه العلوم مباشرةً من عبادةٍ اقتضت الدقّة.",
  points: [
    { en: "The first revelation was not a law or a threat. It was: “Read, in the name of your Lord who created — created man from a clinging clot. Read, and your Lord is the most Generous, who taught by the pen, taught man what he did not know.”",
      ar: "لم يكن أول ما نزل حكمًا ولا وعيدًا، بل كان: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ • خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ • اقْرَأْ وَرَبُّكَ الْأَكْرَمُ • الَّذِي عَلَّمَ بِالْقَلَمِ • عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ﴾.",
      ref: "Surah Al-Alaq (96:1-5)" },
    { en: "The Quran sends the reader outward to look, and treats what is seen as evidence: “Do they not look at the camels — how they are created? And at the sky — how it is raised? And at the mountains — how they are fixed? And at the earth — how it is spread out?”",
      ar: "ويوجّه القرآن القارئ إلى النظر، ويجعل المرئيّ دليلًا: ﴿أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ • وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ • وَإِلَى الْجِبَالِ كَيْفَ نُصِبَتْ • وَإِلَى الْأَرْضِ كَيْفَ سُطِحَتْ﴾.",
      ref: "Surah Al-Ghashiyah (88:17-20)" },
    { en: "And it makes reflection on the creation the mark of the people of understanding: “Indeed in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding — those who remember Allah standing, sitting and on their sides, and reflect on the creation of the heavens and the earth.”",
      ar: "ويجعل التفكّر في الخلق علامةَ أولي الألباب: ﴿إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ • الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ﴾.",
      ref: "Surah Aal-Imran (3:190-191)" },
    { en: "And it asks the question flatly: “Say: are those who know equal to those who do not know?”",
      ar: "ويسأل صراحةً: ﴿قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ﴾.",
      ref: "Surah Az-Zumar (39:9)" },
    { en: "The Prophet ﷺ said: “Whoever travels a path seeking knowledge, Allah makes easy for him by it a path to Paradise.”",
      ar: "وقال النبي ﷺ: «مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ».",
      ref: "Sahih Muslim, Book of Dhikr and Supplication, Hadith 2699 — Sahih" },
    { en: "And he ﷺ said: “Allah has not sent down a disease without sending down a cure for it.” Medicine was pursued as something commanded, not merely permitted.",
      ar: "وقال ﷺ: «مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ شِفَاءً». فطُلب الطبّ باعتباره مأمورًا به لا مباحًا فحسب.",
      ref: "Sahih al-Bukhari, Book of Medicine, Hadith 5678 — Sahih" },
    { en: "The prayer must face one point on the earth, five times a day, from wherever a Muslim happens to be. Working out that direction from any city on a sphere is a problem in spherical trigonometry — so Muslims solved spherical trigonometry.",
      ar: "والصلاة تستقبل نقطةً واحدةً من الأرض، خمس مراتٍ في اليوم، من أيّ موضعٍ كان المسلم فيه. واستخراج هذا الاتجاه من أيّ مدينةٍ على كرةٍ مسألةٌ في حساب المثلثات الكرويّة — فحلّ المسلمون حساب المثلثات الكرويّة.",
      ref: "The qibla — Surah Al-Baqarah (2:144)" },
    { en: "The prayer times, Ramadan and the Hajj all run on precise observation of the sun and the moon: “It is He who made the sun a shining light and the moon a derived light, and determined for it phases, that you may know the number of years and the reckoning.”",
      ar: "ومواقيت الصلاة ورمضان والحجّ كلّها قائمةٌ على رصدٍ دقيقٍ للشمس والقمر: ﴿هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ﴾.",
      ref: "Surah Yunus (10:5)" },
    { en: "And the fixed inheritance shares of Surah An-Nisa cannot be settled by guesswork — halves, quarters, eighths, sixths and thirds of one estate among named heirs. Al-Khwarizmi states in the preface of the book that founded algebra that he wrote it for exactly this: what people need in inheritance, legacies, partition, lawsuits and trade. Algebra was written to divide an estate correctly.",
      ar: "وفرائض المواريث في سورة النساء لا تُضبط بالتخمين: نصفٌ وربعٌ وثمنٌ وسدسٌ وثلثٌ من تركةٍ واحدةٍ بين ورثةٍ مسمّين. وقد نصّ الخوارزمي في مقدّمة الكتاب الذي تأسّس به علم الجبر أنه صنّفه لهذا بعينه: ما يحتاجه الناس في المواريث والوصايا والقسمة والمعاملات والتجارة. فالجبر إنما كُتب ليُقسم الميراث على وجهه.",
      ref: "Surah An-Nisa (4:11-12); al-Khwarizmi, Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala — his own preface" }
  ],
  close: "So the question “how did they achieve that?” has a plain answer: they were told to read, told to look, and given acts of worship that would not work without mathematics. The peak was not an accident, and it was not in spite of the religion. It grew out of it.",
  closeAr: "فسؤال «كيف بلغوا ذلك؟» جوابه ظاهر: أُمروا بالقراءة، وأُمروا بالنظر، وكُلّفوا عباداتٍ لا تستقيم إلا بالحساب. فلم يكن العلوّ مصادفةً، ولا كان رغم الدين، بل نبت منه."
};

/* ============================================================
   THE FIGURES
   ------------------------------------------------------------
   `latin` is the name Europe gave him. It is on every card on
   purpose: a student can study optics, medicine or algebra for
   years under these Latin names and never once be told that the
   man was a Muslim.
   ============================================================ */

const GOLDEN_FIGURES = [

  /* ================= MATHEMATICS ================= */
  {
    id: "g-khwarizmi",
    cat: "math",
    name: "Muhammad ibn Musa al-Khwarizmi",
    nameAr: "محمد بن موسى الخوارزمي",
    latin: "Algoritmi / Algorismus",
    years: "c. 780–850 CE",
    yearsAr: "نحو ١٦٤–٢٣٥ هـ",
    place: "Baghdad — the House of Wisdom",
    placeAr: "بغداد — بيت الحكمة",
    headline: "He founded algebra, and his own name became the word “algorithm”.",
    headlineAr: "أسّس علم الجبر، وصار اسمه هو نفسه كلمة «الخوارزمية».",
    detail: "He wrote Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala — “the compendium on calculation by restoration and balancing”. Al-jabr, the restoring of a subtracted quantity to the other side of an equation, is the word that entered every European language as algebra. He treated the equation as an object to be manipulated by rules rather than a puzzle to be seen through, which is the whole method still taught in schools. In his preface he says he wrote it for what people actually need: inheritance, legacies, partition, lawsuits and trade.\n\nHis second book explained the Indian decimal place-value numerals with their zero. It was translated into Latin in the twelfth century as Algoritmi de numero Indorum — “al-Khwarizmi on the Indian numbers”. Europeans took the first word to mean the method itself. That is where “algorithm” comes from: it is a man's name, worn down by eight centuries of use.",
    detailAr: "صنّف «الكتاب المختصر في حساب الجبر والمقابلة». و«الجبر» — وهو ردّ المقدار المطروح إلى الطرف الآخر من المعادلة — هو اللفظ الذي دخل اللغات الأوروبية كلها باسم algebra. وقد عامل المعادلة على أنها شيءٌ يُتصرّف فيه بقواعد مطّردة، لا لغزًا يُستبصر حلّه، وهذا هو المنهج الذي ما زال يُدرّس في المدارس. وقال في مقدّمته إنه ألّفه لما يحتاجه الناس فعلًا: المواريث والوصايا والقسمة والمعاملات والتجارة.\n\nوشرح في كتابه الثاني الأرقام الهندية العشرية ذات المنازل والصفر، فتُرجم إلى اللاتينية في القرن الثاني عشر بعنوان Algoritmi de numero Indorum أي «الخوارزمي في العدد الهندي». فظنّ الأوروبيون أنّ الكلمة الأولى اسمٌ للطريقة نفسها. ومن هنا جاءت كلمة algorithm: إنها اسم رجل، أبلته ثمانية قرونٍ من الاستعمال.",
    works: [
      { t: "Al-Jabr wal-Muqabala", tAr: "الجبر والمقابلة", d: "The book that founded algebra as a subject.", dAr: "الكتاب الذي تأسّس به الجبر علمًا مستقلًّا." },
      { t: "On Calculation with Hindu Numerals", tAr: "الجمع والتفريق بحساب الهند", d: "Carried the decimal system and the zero into Europe.", dAr: "نقل النظام العشري والصفر إلى أوروبا." },
      { t: "Kitab Surat al-Ard", tAr: "كتاب صورة الأرض", d: "Corrected coordinates for over 2,000 places.", dAr: "تصحيح إحداثيات ما يزيد على ألفَي موضع." }
    ],
    after: "Every time anyone in the world says “algorithm” they are saying his name. Every school algebra class is his book. Neither is usually mentioned.",
    afterAr: "كلّما نطق أحدٌ في الدنيا بكلمة «خوارزمية» فإنما ينطق باسمه، وكلّ درس جبرٍ في مدرسةٍ هو كتابه. ولا يكاد يُذكر واحدٌ من الأمرين.",
    strength: "Documented — his own surviving work, and the Latin translation made from it",
    strengthAr: "موثّق — من كتابه الباقي بنصّه، ومن الترجمة اللاتينية المنقولة عنه",
    keys: ["algebra","algorithm","khwarizmi","mathematics","zero","numerals","equation","inheritance","الجبر","الخوارزمي","الرياضيات","الصفر","المعادلة","الفرائض","خوارزمية"]
  },
  {
    id: "g-kindi",
    cat: "math",
    name: "Abu Yusuf Yaqub al-Kindi",
    nameAr: "أبو يوسف يعقوب الكندي",
    latin: "Alkindus",
    years: "c. 801–873 CE",
    yearsAr: "نحو ١٨٥–٢٦٠ هـ",
    place: "Basra and Baghdad",
    placeAr: "البصرة وبغداد",
    headline: "He wrote the first known work on breaking a cipher — the birth of cryptanalysis.",
    headlineAr: "كتب أقدم ما يُعرف في كسر الشيفرة — وبه وُلد علم تحليل التعمية.",
    detail: "In his Manuscript on Deciphering Cryptographic Messages, al-Kindi set out frequency analysis: in any language some letters appear far more often than others, so count the symbols in the enciphered text, count the letters in ordinary text of the same language, and match them. Every substitution cipher in history falls to this. It is the foundation of codebreaking and it was not improved on in Europe for six hundred years.\n\nHe wrote on some two hundred and sixty subjects — optics, medicine dosage, music, metallurgy — and it is worth knowing why he was thinking about letter frequencies at all: Muslim scholars were counting and analysing the letters of the Quran, and the tools built for that turned out to break codes.",
    detailAr: "بيّن الكندي في «رسالة في استخراج المعمّى» طريقة التحليل بالتكرار: في كل لغةٍ حروفٌ تتردّد أكثر من غيرها، فتُحصى رموز النصّ المعمّى، وتُحصى حروف كلامٍ عاديٍّ من اللغة نفسها، ثم يُقابَل بينهما. وكلّ شيفرة استبدالٍ في التاريخ تنكسر بهذا. وهو أصل علم كسر الشيفرات، ولم يُزَد عليه في أوروبا ستّة قرون.\n\nوقد صنّف في نحو مئتين وستّين موضوعًا: البصريات ومقادير الأدوية والموسيقى والمعادن. ويحسن أن يُعلم لِمَ كان ينظر في تكرار الحروف أصلًا: فقد كان علماء المسلمين يُحصون حروف القرآن ويحلّلونها، فإذا الأدوات التي بُنيت لذلك تكسر المعمّى.",
    works: [
      { t: "Risalah fi Istikhraj al-Mu'amma", tAr: "رسالة في استخراج المعمّى", d: "Frequency analysis — the first codebreaking method known anywhere.", dAr: "التحليل بالتكرار — أقدم طريقةٍ معروفةٍ لكسر الشيفرة." },
      { t: "On First Philosophy", tAr: "في الفلسفة الأولى", d: "The work that opened philosophy in Arabic.", dAr: "الكتاب الذي فُتح به باب الفلسفة بالعربية." }
    ],
    after: "The manuscript sat unread in the Ottoman archive in Istanbul until 1987. Until it was rediscovered, frequency analysis was credited to Europeans of the fifteenth and sixteenth centuries.",
    afterAr: "بقيت الرسالة مطويّةً في الأرشيف العثماني بإسطنبول إلى سنة ١٩٨٧م، وكان التحليل بالتكرار قبل اكتشافها يُنسب إلى أوروبيّين من القرنين الخامس عشر والسادس عشر.",
    strength: "Documented — the surviving manuscript, rediscovered in Istanbul in 1987",
    strengthAr: "موثّق — بالمخطوط الباقي الذي أُعيد اكتشافه في إسطنبول سنة ١٩٨٧م",
    keys: ["kindi","cryptography","code","cipher","frequency analysis","philosophy","الكندي","التعمية","الشيفرة","تحليل التكرار","الفلسفة"]
  },
  {
    id: "g-khayyam",
    cat: "math",
    name: "Umar al-Khayyam",
    nameAr: "عمر الخيّام",
    latin: "Omar Khayyam",
    years: "1048–1131 CE",
    yearsAr: "٤٤٠–٥٢٦ هـ",
    place: "Nishapur and Isfahan",
    placeAr: "نيسابور وأصفهان",
    headline: "He solved cubic equations geometrically, and built a calendar more accurate than the one the world uses now.",
    headlineAr: "حلّ المعادلات التكعيبية هندسيًّا، ووضع تقويمًا أدقّ من التقويم الذي يستعمله العالم اليوم.",
    detail: "In his Treatise on Demonstration of Problems of Algebra he classified cubic equations and solved them by intersecting conic sections — a general geometric solution centuries before anyone in Europe had one. He also worked on the parallel postulate, and that line of work fed into non-Euclidean geometry much later.\n\nCommissioned by the Seljuk state, he led the reform that produced the Jalali calendar. Its year is accurate to about one day in five thousand. The Gregorian calendar, introduced five centuries later and used by the world today, drifts about one day in three thousand three hundred.",
    detailAr: "صنّف «رسالة في براهين مسائل الجبر والمقابلة» فصنّف فيها المعادلات التكعيبية وحلّها بتقاطع القطوع المخروطية — حلًّا هندسيًّا عامًّا قبل أن يكون لأحدٍ في أوروبا مثله بقرون. ونظر أيضًا في مسلّمة التوازي، وأفضى ذلك المسلك بعد زمنٍ طويلٍ إلى الهندسة اللاإقليدية.\n\nوكلّفته الدولة السلجوقية بإصلاح التقويم فوضع التقويم الجلالي، وسنته دقيقةٌ بمقدار يومٍ في نحو خمسة آلاف سنة. أما التقويم الميلادي الغريغوري الذي وُضع بعده بخمسة قرونٍ ويستعمله العالم اليوم فينحرف نحو يومٍ في ثلاثة آلافٍ وثلاثمئة سنة.",
    works: [
      { t: "Treatise on Demonstration of Problems of Algebra", tAr: "رسالة في براهين مسائل الجبر والمقابلة", d: "Cubic equations classified and solved by conic sections.", dAr: "تصنيف المعادلات التكعيبية وحلّها بالقطوع المخروطية." },
      { t: "The Jalali calendar", tAr: "التقويم الجلالي", d: "A solar calendar more accurate than the Gregorian.", dAr: "تقويمٌ شمسيٌّ أدقّ من الغريغوري." }
    ],
    after: "In the English-speaking world he is known almost entirely as a poet, through a loose Victorian translation of quatrains attributed to him. The mathematician is the part that got left behind.",
    afterAr: "يكاد لا يُعرف في العالم الناطق بالإنجليزية إلا شاعرًا، من خلال ترجمةٍ فيكتوريّةٍ متحرّرة لرباعيّاتٍ منسوبةٍ إليه. أما الرياضيّ فهو الجانب الذي تُرك خلفه.",
    strength: "Documented — his own surviving treatise; the calendar is recorded in the state chronicles of the period",
    strengthAr: "موثّق — برسالته الباقية، والتقويم مسجَّلٌ في تواريخ الدولة في عصره",
    keys: ["khayyam","cubic","equation","calendar","geometry","conic","الخيام","المعادلة التكعيبية","التقويم","الهندسة","القطوع المخروطية"]
  },
  {
    id: "g-kashi",
    cat: "math",
    name: "Jamshid al-Kashi",
    nameAr: "غياث الدين جمشيد الكاشي",
    latin: "—",
    years: "c. 1380–1429 CE",
    yearsAr: "نحو ٧٨٢–٨٣٢ هـ",
    place: "Samarkand — the observatory of Ulugh Beg",
    placeAr: "سمرقند — مرصد أُلُغ بك",
    headline: "He computed π to sixteen decimal places, and held the record for a hundred and eighty years.",
    headlineAr: "حسب النسبة التقريبية إلى ستّ عشرة منزلةً عشرية، وبقي رقمه قياسًا مئةً وثمانين سنة.",
    detail: "In his Treatise on the Circumference he calculated 2π to sixteen correct decimal places using a polygon of more than eight hundred million sides. He did it to a stated purpose: enough precision that a circle the size of the known universe could be computed to within the width of a hair. Nobody anywhere improved on it until the late sixteenth century.\n\nHe also gave the law of cosines in a general form — which is why in French it is still called le théorème d'Al-Kashi — worked in decimal fractions fluently, and designed instruments for computing planetary positions mechanically.",
    detailAr: "حسب في «الرسالة المحيطية» ضعف النسبة التقريبية إلى ستّ عشرة منزلةً عشريةً صحيحة، مستعملًا مضلَّعًا يزيد على ثمانمئة مليون ضلع. وصرّح بغرضه من ذلك: بلوغ دقّةٍ تُحسب بها دائرةٌ بسعة العالم المعلوم في حدود عرض شعرة. ولم يتجاوزه أحدٌ في الدنيا إلى أواخر القرن السادس عشر.\n\nوذكر أيضًا قانون جيب التمام في صورةٍ عامّة — ولذلك ما زال يُسمّى بالفرنسية «مبرهنة الكاشي» — وتصرّف في الكسور العشرية تصرّف المتمكّن، وصنع آلاتٍ تُحسب بها مواضع الكواكب حسابًا آليًّا.",
    works: [
      { t: "Ar-Risalah al-Muhitiyyah", tAr: "الرسالة المحيطية", d: "π to sixteen decimal places.", dAr: "النسبة التقريبية إلى ستّ عشرة منزلة عشرية." },
      { t: "Miftah al-Hisab", tAr: "مفتاح الحساب", d: "A complete course of arithmetic, decimal fractions and measurement.", dAr: "دورةٌ كاملةٌ في الحساب والكسور العشرية والمساحة." }
    ],
    after: "The law of cosines still carries his name in French. In English it carries nobody's.",
    afterAr: "ما زال قانون جيب التمام يحمل اسمه بالفرنسية، ولا يحمل بالإنجليزية اسم أحد.",
    strength: "Documented — his own surviving treatises",
    strengthAr: "موثّق — برسائله الباقية",
    keys: ["kashi","pi","decimal","cosine","samarkand","الكاشي","النسبة التقريبية","الكسور العشرية","جيب التمام","سمرقند"]
  },

  /* ================= ASTRONOMY ================= */
  {
    id: "g-battani",
    cat: "astronomy",
    name: "Muhammad ibn Jabir al-Battani",
    nameAr: "محمد بن جابر البتّاني",
    latin: "Albategnius",
    years: "c. 858–929 CE",
    yearsAr: "نحو ٢٤٤–٣١٧ هـ",
    place: "Harran and Raqqa",
    placeAr: "حرّان والرقّة",
    headline: "He measured the solar year to within about two minutes of the true value — in the ninth century.",
    headlineAr: "قاس السنة الشمسية فأصاب في حدود دقيقتين من قيمتها الحقيقية — في القرن التاسع الميلادي.",
    detail: "Al-Battani observed for decades and produced Az-Zij as-Sabi', a set of astronomical tables that corrected Ptolemy on several points, including the movement of the sun's apogee, which Ptolemy had taken to be fixed. His value for the length of the solar year was 365 days, 5 hours, 46 minutes and 24 seconds — about two minutes off. He replaced the Greek chords with sines and tangents, which is why trigonometry looks the way it does now rather than the way it looked in Greek.",
    detailAr: "رصد البتّاني عقودًا وأخرج «الزيج الصابئ»، وهي جداولٌ فلكيةٌ صحّح فيها بطليموس في مواضع، منها حركة أوج الشمس التي ظنّها بطليموس ثابتة. وكانت قيمته لطول السنة الشمسية ٣٦٥ يومًا و٥ ساعاتٍ و٤٦ دقيقةً و٢٤ ثانية — بفارق نحو دقيقتين. واستبدل بأوتار اليونان الجيوبَ والظلال، ولذلك صار حساب المثلثات على صورته اليوم لا على صورته عند اليونان.",
    works: [
      { t: "Az-Zij as-Sabi'", tAr: "الزيج الصابئ", d: "Astronomical tables that corrected Ptolemy and were used in Europe for centuries.", dAr: "زيجٌ صحّح بطليموس واستُعمل في أوروبا قرونًا." }
    ],
    after: "Copernicus cites him by name in De Revolutionibus. Tycho Brahe and Kepler used his observations. A crater on the moon is called Albategnius — the Latin name, not his own.",
    afterAr: "ذكره كوبرنيكوس باسمه في كتابه «في دورات الأجرام السماوية»، واستعمل تيخو براهي وكبلر أرصادَه. وسُمّيت فُوَّهةٌ على القمر باسم Albategnius — بالاسم اللاتيني لا باسمه هو.",
    strength: "Documented — his Zij survives, and Copernicus names him in his own book",
    strengthAr: "موثّق — زيجه باقٍ، وكوبرنيكوس يسمّيه في كتابه نفسه",
    keys: ["battani","astronomy","solar year","trigonometry","copernicus","البتاني","الفلك","السنة الشمسية","حساب المثلثات","كوبرنيكوس"]
  },
  {
    id: "g-biruni",
    cat: "astronomy",
    name: "Abu ar-Rayhan al-Biruni",
    nameAr: "أبو الريحان البيروني",
    latin: "Alberonius",
    years: "973–1048 CE",
    yearsAr: "٣٦٢–٤٤٠ هـ",
    place: "Khwarezm and Ghazni",
    placeAr: "خوارزم وغزنة",
    headline: "He measured the radius of the earth from the top of one mountain, and came within about half a percent.",
    headlineAr: "قاس نصف قطر الأرض من قمّة جبلٍ واحد، فأصاب في حدود نصف بالمئة.",
    detail: "Earlier measurements needed a team walking a long baseline between two cities. Al-Biruni found a better way: measure the height of a mountain, climb it, measure the angle of dip to the horizon, and derive the radius trigonometrically from one location. In India he did exactly that and obtained a figure very close to the modern value of 6,371 km. He also determined specific gravities of eighteen substances with precision not matched for centuries, argued that the earth rotates on its axis, and wrote Kitab al-Hind — a study of Indian religion, science and custom composed by learning Sanskrit and reading the sources, and still cited as a model of how to describe a people you disagree with fairly.",
    detailAr: "كانت القياسات قبله تحتاج إلى فريقٍ يمشي خطًّا طويلًا بين مدينتين، فاهتدى البيروني إلى ما هو أضبط: يُقاس ارتفاع جبل، ثم يُصعد إليه، وتُقاس زاوية انحدار الأفق، فيُستخرج نصف القطر بحساب المثلثات من موضعٍ واحد. وفعل ذلك في الهند فبلغ رقمًا قريبًا جدًّا من القيمة الحديثة ٦٣٧١ كم. وحدّد أيضًا الأوزان النوعية لثمانية عشر جسمًا بدقّةٍ لم تُبلَغ قرونًا، وقال بدوران الأرض حول محورها، وصنّف «تحقيق ما للهند من مقولة» بعد أن تعلّم السنسكريتية وقرأ مصادرهم، وما زال يُذكر مثالًا في وصف قومٍ تخالفهم وصفًا منصفًا.",
    works: [
      { t: "Al-Qanun al-Mas'udi", tAr: "القانون المسعودي", d: "His great work of astronomy and mathematical geography.", dAr: "كتابه الكبير في الفلك والجغرافيا الرياضية." },
      { t: "Kitab al-Hind", tAr: "تحقيق ما للهند من مقولة", d: "A study of India from its own sources, in its own language.", dAr: "دراسةٌ للهند من مصادرها وبلغتها." },
      { t: "Al-Athar al-Baqiyah", tAr: "الآثار الباقية عن القرون الخالية", d: "The calendars and eras of many nations, compared.", dAr: "تقاويم الأمم وتواريخها مقارنةً." }
    ],
    after: "He is routinely described in Western surveys as “one of the greatest scientists of the Middle Ages” and then left out of the story of how the earth came to be measured.",
    afterAr: "يُوصف عادةً في الكتب الغربية بأنه «من أعظم علماء العصور الوسطى»، ثم يُترك خارج قصّة كيف قِيست الأرض.",
    strength: "Documented — his own surviving works",
    strengthAr: "موثّق — بكتبه الباقية",
    keys: ["biruni","earth radius","geodesy","india","specific gravity","rotation","البيروني","نصف قطر الأرض","الجغرافيا","الوزن النوعي","دوران الأرض","الهند"]
  },
  {
    id: "g-zarqali",
    cat: "astronomy",
    name: "Abu Ishaq az-Zarqali",
    nameAr: "أبو إسحاق الزرقالي",
    latin: "Arzachel",
    years: "1029–1087 CE",
    yearsAr: "٤٢٠–٤٨٠ هـ",
    place: "Toledo and Cordoba, al-Andalus",
    placeAr: "طليطلة وقرطبة بالأندلس",
    headline: "His tables were the working astronomy of Europe for four hundred years.",
    headlineAr: "كانت جداوله هي الفلك العملي في أوروبا أربعمئة سنة.",
    detail: "Az-Zarqali led the astronomers of Toledo in producing the Toledan Tables. When Toledo fell in 1085 the tables passed straight into Christian Europe, were adapted into the Alfonsine Tables, and remained the standard European reference into the sixteenth century. He also built the saphea — a universal astrolabe that works at any latitude instead of needing a separate plate for every city — and corrected the length of the Mediterranean on the maps from Ptolemy's inflated 62 degrees to about 42, close to the true 41.",
    detailAr: "قاد الزرقالي فلكيّي طليطلة في وضع «الجداول الطليطلية». فلمّا سقطت طليطلة سنة ٤٧٨هـ انتقلت الجداول رأسًا إلى أوروبا النصرانية، وصيغت منها «الجداول الألفونسية»، وبقيت المرجع الأوروبي المعتمد إلى القرن السادس عشر. وصنع أيضًا «الصفيحة الزرقالية» — أُسطرلابًا جامعًا يعمل في كلّ عرضٍ بدل صفيحةٍ لكلّ بلد — وصحّح طول البحر المتوسط في الخرائط من ٦٢ درجةً عند بطليموس إلى نحو ٤٢، وهو قريبٌ من الحقيقة وهي ٤١.",
    works: [
      { t: "The Toledan Tables", tAr: "الجداول الطليطلية", d: "Europe's working astronomical tables for four centuries.", dAr: "جداول أوروبا الفلكية العملية أربعة قرون." },
      { t: "The saphea (as-safihah)", tAr: "الصفيحة الزرقالية", d: "A universal astrolabe, good at any latitude.", dAr: "أُسطرلابٌ جامعٌ يصلح لكلّ عرض." }
    ],
    after: "Chaucer describes the saphea in English. A lunar crater is named Arzachel. The tables were renamed after a Castilian king.",
    afterAr: "وصف تشوسر الصفيحة بالإنجليزية، وسُمّيت فُوَّهةٌ قمريةٌ باسم Arzachel، وأُعيدت تسمية الجداول باسم ملكٍ قشتالي.",
    strength: "Documented — the tables and the instrument both survive, and their transmission through Toledo is recorded",
    strengthAr: "موثّق — الجداول والآلة كلاهما باقٍ، وانتقالهما عبر طليطلة مسجَّل",
    keys: ["zarqali","arzachel","toledo","tables","astrolabe","andalus","الزرقالي","طليطلة","الجداول","الأسطرلاب","الأندلس"]
  },
  {
    id: "g-tusi",
    cat: "astronomy",
    name: "Nasir ad-Din at-Tusi",
    nameAr: "نصير الدين الطوسي",
    latin: "Nasireddin",
    years: "1201–1274 CE",
    yearsAr: "٥٩٧–٦٧٢ هـ",
    place: "Maragha",
    placeAr: "مراغة",
    headline: "He invented the geometric device that Copernicus used three hundred years later — the “Tusi couple”.",
    headlineAr: "ابتكر الأداة الهندسية التي استعملها كوبرنيكوس بعده بثلاثمئة سنة — «مزدوجة الطوسي».",
    detail: "At the observatory of Maragha, at-Tusi tackled a flaw in Ptolemy's system: it saved the appearances only by means of a device that violated its own principles. His solution was a construction of one circle rolling inside another twice its size, which converts circular motion into straight-line motion. It is still called the Tusi couple.\n\nHe also made trigonometry an independent discipline rather than a servant of astronomy, in his Treatise on the Complete Quadrilateral — the first work to treat it as a subject in its own right.",
    detailAr: "عالج الطوسي في مرصد مراغة خللًا في نظام بطليموس: فقد كان يحفظ الظواهر بأداةٍ تنقض أصوله نفسها. فكان حلّه تركيبًا من دائرةٍ تدور داخل أخرى ضِعفَ قطرها، فتُحيل الحركة الدائرية إلى حركةٍ مستقيمة. وما زالت تُسمّى «مزدوجة الطوسي».\n\nوجعل حساب المثلثات علمًا مستقلًّا لا خادمًا للفلك، في «كتاب الشكل القطّاع» — وهو أول ما أُفرد فيه هذا العلم بالتصنيف.",
    works: [
      { t: "At-Tadhkirah fi Ilm al-Hay'ah", tAr: "التذكرة في علم الهيئة", d: "Where the Tusi couple is set out.", dAr: "وفيه بيان المزدوجة." },
      { t: "Kitab ash-Shakl al-Qatta'", tAr: "كتاب الشكل القطّاع", d: "Trigonometry as a subject of its own.", dAr: "حساب المثلثات علمًا قائمًا بذاته." },
      { t: "Zij-i Ilkhani", tAr: "الزيج الإيلخاني", d: "The tables produced from the Maragha observations.", dAr: "الزيج المستخرج من أرصاد مراغة." }
    ],
    after: "The same construction appears in Copernicus's De Revolutionibus in 1543, with the same lettering on the diagram. See “What was taken” below.",
    afterAr: "ويظهر التركيب نفسه في كتاب كوبرنيكوس سنة ١٥٤٣م، وعلى الشكل الحروف نفسها. وانظر «ما الذي أُخذ» أدناه.",
    strength: "Documented — his own surviving work, and Copernicus's printed book to compare it with",
    strengthAr: "موثّق — بكتابه الباقي، وبكتاب كوبرنيكوس المطبوع للمقابلة",
    keys: ["tusi","maragha","copernicus","trigonometry","tusi couple","astronomy","الطوسي","مراغة","كوبرنيكوس","حساب المثلثات","مزدوجة الطوسي"]
  },
  {
    id: "g-ibn-ash-shatir",
    cat: "astronomy",
    name: "Ibn ash-Shatir",
    nameAr: "ابن الشاطر",
    latin: "—",
    years: "1304–1375 CE",
    yearsAr: "٧٠٤–٧٧٧ هـ",
    place: "Damascus — timekeeper of the Umayyad Mosque",
    placeAr: "دمشق — موقّت الجامع الأموي",
    headline: "His model of the moon is mathematically identical to the one Copernicus published a hundred and fifty years later.",
    headlineAr: "نموذجه للقمر مطابقٌ رياضيًّا للنموذج الذي نشره كوبرنيكوس بعده بمئةٍ وخمسين سنة.",
    detail: "Ibn ash-Shatir was the muwaqqit of the Umayyad Mosque — the man responsible for the prayer times. That job is the reason for the work: he needed the positions of the sun and moon to be right. In Nihayat as-Sul he rebuilt planetary astronomy from the ground up, removing Ptolemy's equant entirely and using combinations of uniform circular motions instead.\n\nHis lunar model fixed a known scandal in Ptolemy's version, which required the moon to nearly double in apparent size across a month — something anyone can see does not happen. He also built the sundial that stood on the minaret of the Umayyad Mosque, accurate to the minute.",
    detailAr: "كان ابن الشاطر موقّت الجامع الأموي، وهو المسؤول عن مواقيت الصلاة، ومن هنا كان عمله: احتاج أن تكون مواضع الشمس والقمر على الصواب. فأعاد في «نهاية السؤل في تصحيح الأصول» بناء علم الهيئة من أساسه، فأسقط «المعدِّل» البطليموسي بالكلّية، واستعمل بدله تركيباتٍ من حركاتٍ دائريةٍ منتظمة.\n\nوأصلح نموذجه القمريّ فضيحةً معروفةً في نموذج بطليموس، إذ كان يقتضي أن يتضاعف قرص القمر في الرؤية خلال الشهر تقريبًا — وهو ما يرى كلُّ أحدٍ أنه لا يقع. وصنع أيضًا المِزْولة التي كانت على مئذنة الجامع الأموي، وضبطها بالدقيقة.",
    works: [
      { t: "Nihayat as-Sul fi Tashih al-Usul", tAr: "نهاية السؤل في تصحيح الأصول", d: "Planetary astronomy rebuilt without Ptolemy's equant.", dAr: "إعادة بناء علم الهيئة بإسقاط معدِّل بطليموس." }
    ],
    after: "In 1957 the historian of science E. S. Kennedy compared his models with those in Copernicus's De Revolutionibus and found them mathematically the same. Copernicus never mentions him. See “What was taken” below.",
    afterAr: "قارن مؤرّخ العلوم إ. س. كينيدي سنة ١٩٥٧م بين نماذجه ونماذج كوبرنيكوس فوجدها متطابقةً رياضيًّا. ولم يذكره كوبرنيكوس قطّ. وانظر «ما الذي أُخذ» أدناه.",
    strength: "Documented — his manuscript survives and the comparison with Copernicus is published, checkable work",
    strengthAr: "موثّق — مخطوطه باقٍ، والمقارنة بكوبرنيكوس منشورةٌ يمكن التحقّق منها",
    keys: ["ibn ash-shatir","damascus","copernicus","moon","planetary","muwaqqit","ابن الشاطر","دمشق","كوبرنيكوس","القمر","الهيئة","الموقّت"]
  },
  {
    id: "g-ulugh-beg",
    cat: "astronomy",
    name: "Ulugh Beg",
    nameAr: "أُلُغ بك",
    latin: "Ulugh Beg",
    years: "1394–1449 CE",
    yearsAr: "٧٩٦–٨٥٣ هـ",
    place: "Samarkand",
    placeAr: "سمرقند",
    headline: "A ruler who built an observatory and catalogued the stars himself — to an accuracy not beaten for two centuries.",
    headlineAr: "حاكمٌ بنى مرصدًا وفهرس النجوم بنفسه — بدقّةٍ لم تُتجاوز قرنين.",
    detail: "Ulugh Beg governed Samarkand and used the position to build one of the great observatories of history, with a sextant of about forty metres' radius sunk into a trench in the rock so that it could not shift. From it he produced the Zij-i Sultani, a catalogue of 1,018 stars observed afresh rather than copied from Ptolemy — the first substantially new star catalogue since antiquity. His value for the sidereal year is within about twenty-five seconds of the modern figure.",
    detailAr: "حكم أُلُغ بك سمرقند فاتّخذ من ذلك سبيلًا إلى بناء واحدٍ من أعظم المراصد في التاريخ، فيه سُدسٌ نصف قطره نحو أربعين مترًا، غُرِس في خندقٍ في الصخر لئلّا يتزحزح. وأخرج منه «الزيج السلطاني»، وهو فهرسٌ لألفٍ وثمانية عشر نجمًا رُصدت رصدًا جديدًا لا نقلًا عن بطليموس — وهو أول فهرسٍ نجميٍّ جديدٍ في جوهره منذ العصور القديمة. وقيمته للسنة النجمية في حدود خمسٍ وعشرين ثانيةً من القيمة الحديثة.",
    works: [
      { t: "Zij-i Sultani", tAr: "الزيج السلطاني", d: "1,018 stars, newly observed.", dAr: "ألفٌ وثمانية عشر نجمًا برصدٍ جديد." }
    ],
    after: "The catalogue was printed at Oxford in 1665 and used across Europe. The observatory was destroyed by men who thought its work was against religion — a warning from our own history about what ends a golden age.",
    afterAr: "طُبع الفهرس في أكسفورد سنة ١٦٦٥م واستُعمل في أوروبا كلّها. وهُدم المرصد على يد من ظنّوا عمله مناقضًا للدين — وهو تحذيرٌ من تاريخنا نحن عمّا يُنهي عصرًا ذهبيًّا.",
    strength: "Documented — the catalogue survives and the observatory's foundations were excavated in 1908",
    strengthAr: "موثّق — الفهرس باقٍ، وأُسس المرصد نُقّب عنها سنة ١٩٠٨م",
    keys: ["ulugh beg","samarkand","observatory","star catalogue","sextant","ألغ بك","سمرقند","المرصد","فهرس النجوم","السدس"]
  },

  /* ================= MEDICINE ================= */
  {
    id: "g-razi",
    cat: "medicine",
    name: "Abu Bakr ar-Razi",
    nameAr: "أبو بكر الرازي",
    latin: "Rhazes",
    years: "c. 865–925 CE",
    yearsAr: "نحو ٢٥١–٣١٣ هـ",
    place: "Rayy and Baghdad",
    placeAr: "الرَّيّ وبغداد",
    headline: "He was the first to tell smallpox and measles apart in writing — and the first to insist a doctor record what he actually observed.",
    headlineAr: "أول من فرّق بين الجدري والحصبة كتابةً — وأول من ألزم الطبيب أن يسجّل ما رآه فعلًا.",
    detail: "His treatise On Smallpox and Measles separates two diseases that had been confused, by their symptoms and their course, and it does so from bedside observation rather than from authority. It was printed in Europe some forty times between the fifteenth and nineteenth centuries.\n\nAl-Hawi, his enormous case-book, records what he saw in patients including cases where his treatment failed — which is a scientific virtue rarely found in medical writing before or long after him. He also organised hospitals seriously: the account that he chose the site of a Baghdad hospital by hanging pieces of meat around the city and building where the meat spoiled slowest is often repeated, and it comes from later biographers rather than from him, so it is given here as reported, not established.",
    detailAr: "فرّق في «كتاب الجدري والحصبة» بين مرضين كانا يُخلط بينهما، بأعراضهما ومساريهما، وفعل ذلك بالمشاهدة عند سرير المريض لا بالنقل عن الأقدمين. وطُبع في أوروبا نحو أربعين مرّةً بين القرنين الخامس عشر والتاسع عشر.\n\nوسجّل في «الحاوي» — وهو كنّاشه الضخم — ما شاهده في المرضى، حتى الحالات التي أخفق فيها علاجه، وتلك فضيلةٌ علميةٌ قلّ أن تُوجد في كتب الطبّ قبله وبعده بزمنٍ طويل. ونظّم المستشفيات تنظيمًا جادًّا. وأما ما يُروى من أنه اختار موضع مستشفى بغداد بتعليق قطع اللحم في نواحي المدينة ثم البناء حيث أبطأ اللحم فسادًا، فهو ممّا يذكره المترجمون له بعده لا هو عن نفسه، فيُذكر هنا على أنه مرويٌّ لا ثابت.",
    works: [
      { t: "Al-Judari wal-Hasbah", tAr: "الجدري والحصبة", d: "The first clinical separation of smallpox from measles.", dAr: "أول تفريقٍ سريريٍّ بين الجدري والحصبة." },
      { t: "Al-Hawi", tAr: "الحاوي في الطب", d: "A vast case-book, translated into Latin as Continens.", dAr: "كنّاشٌ ضخم، تُرجم إلى اللاتينية باسم Continens." },
      { t: "Kitab al-Asrar", tAr: "كتاب الأسرار", d: "Chemistry: substances classified, apparatus described.", dAr: "الكيمياء: تصنيف المواد ووصف الآلات." }
    ],
    after: "Al-Hawi was one of nine books that made up the entire library of the medical faculty of Paris in 1395.",
    afterAr: "كان «الحاوي» واحدًا من تسعة كتبٍ هي كلّ مكتبة كلّية الطبّ بباريس سنة ١٣٩٥م.",
    strength: "Documented — his own surviving works and the Latin printings; the hanging-meat account is reported in the histories, not established",
    strengthAr: "موثّق — بكتبه الباقية وطبعاتها اللاتينية؛ وخبر تعليق اللحم مرويٌّ في كتب التراجم لا ثابت",
    keys: ["razi","rhazes","smallpox","measles","hospital","clinical","medicine","الرازي","الجدري","الحصبة","المستشفى","الطب","الحاوي"]
  },
  {
    id: "g-ibn-sina",
    cat: "medicine",
    name: "Ibn Sina",
    nameAr: "ابن سينا",
    latin: "Avicenna",
    years: "980–1037 CE",
    yearsAr: "٣٧٠–٤٢٨ هـ",
    place: "Bukhara, Rayy, Hamadan",
    placeAr: "بخارى والرَّيّ وهمذان",
    headline: "His medical textbook was taught in European universities for six hundred years.",
    headlineAr: "ظلّ كتابه في الطبّ يُدرّس في جامعات أوروبا ستّمئة سنة.",
    detail: "Al-Qanun fi at-Tibb — the Canon of Medicine — organised all of medicine into a single ordered system: anatomy, causes, symptoms, treatment, and a materia medica of some eight hundred drugs. It was translated into Latin in the twelfth century and became the standard text at Montpellier, Bologna, Padua and Paris. It was still on the syllabus at Montpellier into the seventeenth century.\n\nIt contains things not commonplace until much later: that tuberculosis is contagious, that disease can spread through water and soil, that a drug must be tested on one condition at a time and its results reproduced before it is accepted, and rules for clinical trials that read like a modern protocol. He memorised the Quran by the age of ten and had read through the medicine of his day by sixteen.",
    detailAr: "نظّم «القانون في الطبّ» الطبَّ كلَّه في نسقٍ واحدٍ مرتَّب: التشريح والأسباب والعلامات والمعالجة، ومفرداتٌ دوائيةٌ تناهز ثمانمئة دواء. وتُرجم إلى اللاتينية في القرن الثاني عشر فصار المقرّر المعتمد في مونبلييه وبولونيا وبادوفا وباريس، وبقي في مقرّر مونبلييه إلى القرن السابع عشر.\n\nوفيه ما لم يشع إلا بعده بزمنٍ طويل: أنّ السلّ مُعدٍ، وأنّ المرض ينتقل بالماء والتراب، وأنّ الدواء يُجرَّب على علّةٍ واحدةٍ في المرّة وتُعاد نتيجته قبل قبوله، وقواعدُ للتجربة السريرية تُقرأ كأنها بروتوكولٌ حديث. وقد حفظ القرآن وهو ابن عشر، وأتى على طبّ زمانه وهو ابن ستّ عشرة.",
    works: [
      { t: "Al-Qanun fi at-Tibb", tAr: "القانون في الطب", d: "The medical encyclopaedia Europe taught from for six centuries.", dAr: "موسوعة الطبّ التي درّست منها أوروبا ستّة قرون." },
      { t: "Kitab ash-Shifa", tAr: "كتاب الشفاء", d: "Logic, natural science, mathematics and metaphysics in one work.", dAr: "المنطق والطبيعيات والرياضيات والإلهيات في كتابٍ واحد." }
    ],
    after: "He is on the wall of the great hall of the medical faculty in Paris. Under the name Avicenna. Many who pass it do not know he was a Muslim who had memorised the Quran as a child.",
    afterAr: "صورته على جدار القاعة الكبرى في كلّية الطبّ بباريس، باسم Avicenna. وكثيرٌ ممّن يمرّ بها لا يعلم أنه مسلمٌ حفظ القرآن صغيرًا.",
    strength: "Documented — his own surviving work, the Latin translations, and the university records that show it on the syllabus",
    strengthAr: "موثّق — بكتابه الباقي، وبالترجمات اللاتينية، وبسجلّات الجامعات التي تُظهره في المقرّر",
    keys: ["ibn sina","avicenna","canon","medicine","contagion","tuberculosis","clinical trial","ابن سينا","القانون","الطب","العدوى","السل","التجربة السريرية"]
  },
  {
    id: "g-zahrawi",
    cat: "medicine",
    name: "Abu al-Qasim az-Zahrawi",
    nameAr: "أبو القاسم الزهراوي",
    latin: "Abulcasis",
    years: "936–1013 CE",
    yearsAr: "٣٢٤–٤٠٤ هـ",
    place: "Madinat az-Zahra, near Cordoba",
    placeAr: "مدينة الزهراء قرب قرطبة",
    headline: "He drew about two hundred surgical instruments — and surgeons were still using his designs eight hundred years later.",
    headlineAr: "رسم نحو مئتَي آلةٍ جراحية — وظلّ الجرّاحون يستعملون تصاميمه بعده بثمانمئة سنة.",
    detail: "The thirtieth volume of his Kitab at-Tasrif is the first illustrated surgical treatise known. He did not only describe operations; he drew the instrument for each one, so that the knowledge could travel without him. Forceps, the scalpel, surgical hooks, specula, bone saws, the lithotomy scoop — many are recognisably the instruments in use today.\n\nHe introduced catgut for internal stitching, having noticed that it is absorbed by the body; described the ligature of arteries to stop bleeding; used cotton wool in dressings; described the tracheotomy and the extraction of bladder stones; and wrote about caring for a patient's fear as part of the work. He also insisted repeatedly that a surgeon who does not know anatomy will kill.",
    detailAr: "المقالة الثلاثون من «التصريف لمن عجز عن التأليف» هي أقدم رسالةٍ جراحيةٍ مصوّرةٍ معروفة. ولم يكتفِ بوصف العمليات، بل رسم آلة كلِّ عمليةٍ حتى ينتقل العلم من غير حاجةٍ إليه. فالملاقط والمشرط والصنانير والمناظير ومناشير العظم وملعقة إخراج الحصاة — كثيرٌ منها يُعرف اليوم في آلات الجرّاحين.\n\nوأدخل أوتار الأمعاء في الخياطة الباطنة لمّا لاحظ أنّ البدن يمتصّها، ووصف ربط الشرايين لقطع النزف، واستعمل القطن في الضمادات، ووصف شقّ الحنجرة وإخراج حصى المثانة، وكتب عن مراعاة خوف المريض من تمام العمل. وشدّد مرارًا على أنّ الجرّاح الذي لا يعرف التشريح قاتل.",
    works: [
      { t: "Kitab at-Tasrif", tAr: "التصريف لمن عجز عن التأليف", d: "Thirty volumes; the surgical volume was Europe's standard text for five centuries.", dAr: "ثلاثون مقالة، وكانت المقالة الجراحية مرجع أوروبا المعتمد خمسة قرون." }
    ],
    after: "Translated at Toledo by Gerard of Cremona, the surgical volume became the surgical authority of Europe. Guy de Chauliac's fourteenth-century French surgery cites “Albucasis” more than two hundred times.",
    afterAr: "تُرجمت المقالة الجراحية في طليطلة على يد جيرارد الكريموني، فصارت مرجع الجراحة في أوروبا. وذكره غي دي شولياك في جراحته الفرنسية في القرن الرابع عشر باسم Albucasis أكثر من مئتَي مرّة.",
    strength: "Documented — his own surviving illustrated work and the Latin translation made from it",
    strengthAr: "موثّق — بكتابه المصوَّر الباقي، وبالترجمة اللاتينية المنقولة عنه",
    keys: ["zahrawi","abulcasis","surgery","instruments","catgut","cordoba","الزهراوي","الجراحة","الآلات","التصريف","قرطبة"]
  },
  {
    id: "g-ibn-an-nafis",
    cat: "medicine",
    name: "Ibn an-Nafis",
    nameAr: "ابن النفيس",
    latin: "—",
    years: "1213–1288 CE",
    yearsAr: "٦١٠–٦٨٧ هـ",
    place: "Damascus and Cairo",
    placeAr: "دمشق والقاهرة",
    headline: "He described the pulmonary circulation of the blood about three hundred years before Europe did.",
    headlineAr: "وصف الدورة الدموية الصغرى قبل أوروبا بنحو ثلاثمئة سنة.",
    detail: "Galen had taught that blood passes from the right side of the heart to the left through invisible pores in the wall between them. Ibn an-Nafis, in his commentary on the anatomy of Ibn Sina's Canon, stated flatly that there are no such pores, that the wall between the chambers is solid, and that the blood must instead go from the right chamber to the lung, mix there with air, and return to the left. That is the pulmonary circulation.\n\nHe was a scholar of Shafi'i fiqh as well as a physician, and he wrote what he wrote by contradicting the two greatest authorities of his field — Galen and Ibn Sina — on the grounds of what dissection and reason showed.",
    detailAr: "كان جالينوس يعلّم أنّ الدم ينفذ من الجانب الأيمن للقلب إلى الأيسر عبر مسامّ خفيّةٍ في الحاجز بينهما. فنصّ ابن النفيس في «شرح تشريح القانون» على أنه لا مسامّ هناك، وأنّ الحاجز بين التجويفين مصمت، وأنّ الدم لا بدّ أن يذهب من التجويف الأيمن إلى الرئة فيخالط الهواء ثم يعود إلى الأيسر. وهذه هي الدورة الدموية الصغرى.\n\nوكان فقيهًا شافعيًّا مع كونه طبيبًا، وكتب ما كتب مخالفًا أكبر إمامين في فنّه — جالينوس وابن سينا — بناءً على ما دلّ عليه التشريح والنظر.",
    works: [
      { t: "Sharh Tashrih al-Qanun", tAr: "شرح تشريح القانون", d: "Where the pulmonary circulation is set out.", dAr: "وفيه بيان الدورة الدموية الصغرى." },
      { t: "Ash-Shamil fi at-Tibb", tAr: "الشامل في الصناعة الطبية", d: "A medical encyclopaedia he planned in three hundred volumes.", dAr: "موسوعةٌ طبيةٌ خطّط لها في ثلاثمئة مجلَّد." }
    ],
    after: "Credit went to Michael Servetus (1553) and William Harvey (1628). Ibn an-Nafis's manuscript was found in the Prussian State Library in Berlin in 1924 by the Egyptian physician Muhyi ad-Din at-Tatawi, who wrote his doctoral thesis on it. Textbooks have been slow to change.",
    afterAr: "ونُسب الفضل إلى ميغيل سرفيتوس سنة ١٥٥٣م ووليم هارفي سنة ١٦٢٨م. ثم وُجد مخطوط ابن النفيس في المكتبة البروسية ببرلين سنة ١٩٢٤م على يد الطبيب المصري محيي الدين التطاوي، وكتب فيه أطروحته. وما زالت الكتب المدرسية بطيئةً في التصحيح.",
    strength: "Documented — the manuscript survives in Berlin and the 1924 rediscovery is a matter of record",
    strengthAr: "موثّق — المخطوط باقٍ في برلين، واكتشافه سنة ١٩٢٤م أمرٌ مسجَّل",
    keys: ["ibn nafis","pulmonary","circulation","blood","heart","lung","harvey","servetus","ابن النفيس","الدورة الدموية","القلب","الرئة","الدم","التشريح"]
  },
  {
    id: "g-ibn-zuhr",
    cat: "medicine",
    name: "Abu Marwan ibn Zuhr",
    nameAr: "أبو مروان ابن زُهر",
    latin: "Avenzoar",
    years: "1094–1162 CE",
    yearsAr: "٤٨٧–٥٥٧ هـ",
    place: "Seville, al-Andalus",
    placeAr: "إشبيلية بالأندلس",
    headline: "He tested surgery on animals before performing it on people, and identified the parasite that causes scabies.",
    headlineAr: "جرّب الجراحة على الحيوان قبل إجرائها على الإنسان، وعيّن الطفيليّ الذي يسبّب الجَرَب.",
    detail: "Ibn Zuhr is one of the first physicians known to have tested a surgical procedure on an animal before using it on a patient — he practised the tracheotomy on a goat. He described direct feeding through the throat and through the rectum for patients who could not swallow, gave a clear description of pericarditis and of mediastinal tumours, and identified the itch mite as the cause of scabies, which is a specific parasite causing a specific disease — a germ theory of one illness, six hundred years early.",
    detailAr: "ابن زهر من أوائل من عُرف عنه تجريب العمل الجراحيّ على حيوانٍ قبل إجرائه على المريض، فقد أجرى شقّ الحنجرة على عنز. ووصف التغذية المباشرة عن طريق الحلق وعن طريق المقعدة لمن لا يقدر على البلع، ووصف التهاب غشاء القلب وأورام المنصف وصفًا بيّنًا، وعيّن دُوَيْبّة الجَرَب سببًا للجَرَب — أي طفيليٌّ معيّنٌ يُحدث مرضًا معيّنًا، وهو قولٌ بجرثومية مرضٍ بعينه قبل ذلك بستّمئة سنة.",
    works: [
      { t: "Kitab at-Taysir", tAr: "التيسير في المداواة والتدبير", d: "Written as a companion to Ibn Rushd's general medicine.", dAr: "كُتب رفيقًا لكتاب ابن رشد في الكلّيات." }
    ],
    after: "At-Taysir was translated into Latin and printed repeatedly in Venice. The scabies mite was “discovered” again in Europe in 1687.",
    afterAr: "تُرجم «التيسير» إلى اللاتينية وطُبع مرارًا في البندقية. و«اكتُشفت» دُوَيْبّة الجرب من جديدٍ في أوروبا سنة ١٦٨٧م.",
    strength: "Documented — his own surviving work and its Latin printings",
    strengthAr: "موثّق — بكتابه الباقي وطبعاته اللاتينية",
    keys: ["ibn zuhr","avenzoar","surgery","scabies","tracheotomy","seville","ابن زهر","الجراحة","الجرب","شق الحنجرة","إشبيلية"]
  },

  /* ================= OPTICS & PHYSICS ================= */
  {
    id: "g-ibn-al-haytham",
    cat: "optics",
    name: "Ibn al-Haytham",
    nameAr: "الحسن بن الهيثم",
    latin: "Alhazen",
    years: "965–1040 CE",
    yearsAr: "٣٥٤–٤٣٠ هـ",
    place: "Basra and Cairo",
    placeAr: "البصرة والقاهرة",
    headline: "He proved how sight actually works — and in doing so wrote down the scientific method itself.",
    headlineAr: "أثبت كيف يقع الإبصار حقيقةً — وكتب في أثناء ذلك المنهج العلميّ نفسه.",
    detail: "For a thousand years the Greeks had held that the eye sees by sending something out toward the object. Ibn al-Haytham dismantled this with experiments: looking at the sun hurts, and afterimages persist, which makes no sense if nothing is entering the eye. He established that light travels from the object into the eye — the basis of all optics since.\n\nHis Kitab al-Manazir is more important still for how it argues. He states the principle that the seeker of truth must not trust the writings of his predecessors but must attack them from every side, suspecting even himself, because the person who studies the works of scientists must make himself the enemy of everything he reads. He then demonstrates each claim by an experiment the reader can repeat. That is the experimental method, written down in Cairo around 1020, six hundred years before it was named in Europe. He also gave the first clear account of the camera obscura — the pinhole image — from which the camera descends.",
    detailAr: "ظلّ اليونان ألف سنةٍ يقولون إنّ العين تُبصر بإرسال شيءٍ منها إلى المرئي. فنقض ابن الهيثم ذلك بالتجارب: فالنظر إلى الشمس يؤلم، وأثر الضوء يبقى في العين بعده، ولا معنى لهذا إن لم يكن شيءٌ داخلًا إليها. فأثبت أنّ الضوء ينتقل من المرئيّ إلى العين — وهو أساس علم البصريات كلّه بعده.\n\nو«كتاب المناظر» أعظم شأنًا في طريقة استدلاله. فقد قرّر أنّ طالب الحقّ ليس هو الذي يثق بكتب من سبقه، بل عليه أن يهاجمها من كلّ جهةٍ ويتّهم نفسه أيضًا، فإنّ الناظر في كتب العلماء ينبغي أن يجعل نفسه خصمًا لكلّ ما يقرأ. ثم يُثبت كلّ دعوى بتجربةٍ يقدر القارئ على إعادتها. وهذا هو المنهج التجريبي، كُتب بالقاهرة نحو سنة ٤١٠هـ، قبل أن يُسمّى في أوروبا بستّمئة سنة. وأعطى كذلك أول وصفٍ واضحٍ للغرفة المظلمة وصورة الثقب، ومنها انحدرت الكاميرا.",
    works: [
      { t: "Kitab al-Manazir", tAr: "كتاب المناظر", d: "Seven books on light, vision, reflection and refraction — and on how to test a claim.", dAr: "سبع مقالاتٍ في الضوء والإبصار والانعكاس والانكسار — وفي كيف تُختبر الدعوى." },
      { t: "On the Configuration of the World", tAr: "في هيئة العالم", d: "A physical, not merely mathematical, account of the heavens.", dAr: "وصفٌ طبيعيٌّ للسماوات لا رياضيٌّ فحسب." }
    ],
    after: "Translated into Latin as De Aspectibus, it shaped Roger Bacon, Witelo, Leonardo and Kepler — Kepler's work on the eye begins where his ends. The English word “camera” traces to his camera obscura. UNESCO named 2015 the International Year of Light on the thousandth anniversary of the Kitab al-Manazir.",
    afterAr: "تُرجم إلى اللاتينية باسم De Aspectibus فأثّر في روجر بيكون وفيتيلو وليوناردو وكبلر، بل يبدأ عمل كبلر في العين من حيث انتهى. وكلمة camera الإنجليزية ترجع إلى غرفته المظلمة. وسمّت اليونسكو سنة ٢٠١٥م السنة الدولية للضوء في الذكرى الألفية لكتاب المناظر.",
    strength: "Documented — his own surviving work, the Latin translation, and the European authors who cite it",
    strengthAr: "موثّق — بكتابه الباقي، وبالترجمة اللاتينية، وبمن نقل عنه من الأوروبيين",
    keys: ["ibn al-haytham","alhazen","optics","light","vision","camera","scientific method","experiment","ابن الهيثم","المناظر","البصريات","الضوء","الإبصار","الكاميرا","المنهج التجريبي","التجربة"]
  },
  {
    id: "g-khazini",
    cat: "optics",
    name: "Abd ar-Rahman al-Khazini",
    nameAr: "عبد الرحمن الخازني",
    latin: "—",
    years: "fl. c. 1115–1130 CE",
    yearsAr: "ازدهر نحو ٥١٠–٥٢٥ هـ",
    place: "Merv",
    placeAr: "مرو",
    headline: "He measured the density of fifty substances so precisely that the modern figures barely correct him.",
    headlineAr: "قاس كثافة خمسين مادةً بدقّةٍ تكاد القيم الحديثة لا تصحّح فيها شيئًا.",
    detail: "The Book of the Balance of Wisdom describes a hydrostatic balance of his own design and reports specific gravities for metals, stones and liquids. Several of his values agree with modern measurement to within a fraction of a percent. He also wrote that weight acts toward the centre of the earth and varies with distance from it, and that air has weight and exerts an upward force on a body immersed in it — statements about gravity and buoyancy centuries before Newton.\n\nThe practical purpose is worth noting: an accurate balance let you detect an adulterated coin or a fraudulent gemstone. This was measurement in the service of honest dealing, which the Quran commands directly: “Give full measure and do not be of those who cause loss.”",
    detailAr: "وصف في «كتاب ميزان الحكمة» ميزانًا مائيًّا من صنعه، وأورد الأوزان النوعية للمعادن والأحجار والسوائل. وتوافق عدّةٌ من قيمه القياسَ الحديث في حدود جزءٍ من المئة. وقرّر أيضًا أنّ الثقل يعمل نحو مركز الأرض ويختلف باختلاف البعد عنه، وأنّ للهواء ثقلًا وأنه يدفع الجسم المغمور فيه إلى أعلى — وهي أقوالٌ في الجاذبية والطفو قبل نيوتن بقرون.\n\nويحسن التنبّه إلى الغرض العملي: فالميزان الدقيق يكشف الدرهم المغشوش والحجر المزيَّف. فهذا قياسٌ في خدمة صدق المعاملة، وقد أمر القرآن به صريحًا: ﴿أَوْفُوا الْكَيْلَ وَلَا تَكُونُوا مِنَ الْمُخْسِرِينَ﴾.",
    works: [
      { t: "Kitab Mizan al-Hikmah", tAr: "كتاب ميزان الحكمة", d: "Densities, the hydrostatic balance, weight and buoyancy.", dAr: "الأوزان النوعية والميزان المائي والثقل والطفو." }
    ],
    after: "The work was barely known in the West until the nineteenth century, by which time everything in it had been discovered again by other people.",
    afterAr: "لم يكد الكتاب يُعرف في الغرب إلى القرن التاسع عشر، وكان كلّ ما فيه قد اكتُشف من جديدٍ على أيدي غيره.",
    strength: "Documented — his own surviving work",
    strengthAr: "موثّق — بكتابه الباقي",
    keys: ["khazini","density","specific gravity","balance","gravity","buoyancy","الخازني","الكثافة","الوزن النوعي","الميزان","الجاذبية","الطفو"]
  },

  /* ================= CHEMISTRY ================= */
  {
    id: "g-jabir",
    cat: "chemistry",
    name: "Jabir ibn Hayyan",
    nameAr: "جابر بن حيّان",
    latin: "Geber",
    years: "c. 721–815 CE",
    yearsAr: "نحو ١٠٣–٢٠٠ هـ",
    place: "Kufa",
    placeAr: "الكوفة",
    headline: "He turned alchemy into laboratory work — apparatus, procedure, and writing down what happened.",
    headlineAr: "حوّل الكيمياء إلى عملٍ في المعمل — آلاتٌ وإجراءٌ وتدوينٌ لما وقع.",
    detail: "The corpus under his name describes distillation, sublimation, crystallisation, filtration and evaporation as controlled operations with named apparatus — including the alembic, al-anbiq, which is where the word comes from. It describes preparing acids, and classifies substances into a working scheme rather than a mystical one.\n\nWhat matters most is the insistence on doing it: the corpus repeatedly tells the reader that whoever is not able to perform the operation with his hands and his eyes will never attain the least degree of it. That is a laboratory instruction, and it is why the chemical trade in English still speaks Arabic: alkali from al-qali, alcohol from al-kuhl, alembic from al-anbiq, and the word chemistry itself through al-kimiya.",
    detailAr: "تصف المجموعة المنسوبة إليه التقطير والتصعيد والتبلور والترشيح والتبخير عملياتٍ منضبطةً بآلاتٍ مسمّاة، منها «الإنبيق» ومنه جاءت اللفظة الأوروبية. وتصف تحضير الأحماض، وتصنّف المواد تصنيفًا عمليًّا لا رمزيًّا.\n\nوأهمّ ما فيها الإلحاح على المزاولة: فهي تُكرّر أنّ من لم يقدر على العمل بيده وعينه لم ينل من هذا الفنّ أدنى درجة. وهذا أمرٌ معمليّ، ولذلك ما زالت صنعة الكيمياء في لغات أوروبا تنطق بالعربية: alkali من القِلْي، وalcohol من الكُحْل، وalembic من الإنبيق، وكلمة chemistry نفسها عن الكيمياء.",
    works: [
      { t: "Kitab al-Kimiya", tAr: "كتاب الكيمياء", d: "Translated into Latin in the twelfth century.", dAr: "تُرجم إلى اللاتينية في القرن الثاني عشر." },
      { t: "Kitab as-Sab'een", tAr: "كتاب السبعين", d: "Seventy treatises on substances and operations.", dAr: "سبعون رسالةً في المواد والعمليات." }
    ],
    after: "Honest note: a large body of Latin works was later written by Europeans and published under the name “Geber” to borrow his authority. Historians call the author of these “pseudo-Geber”. So some of what circulates under his name is not his — which is worth saying plainly, because it is exactly the kind of thing that gets used to dismiss the whole record.",
    afterAr: "تنبيهٌ للأمانة: كُتبت بعده مجموعةٌ كبيرةٌ من المصنّفات اللاتينية على أيدي أوروبيّين ونُشرت باسم Geber استعارةً لسلطانه، ويسمّي المؤرّخون صاحبها «جابر المنتحَل». فبعض ما يدور باسمه ليس له، ويجب أن يُقال هذا صراحةً، لأنه بعينه ما يُتّخذ ذريعةً لردّ السجلّ كلّه.",
    strength: "Documented for the Arabic corpus and the apparatus; the attribution of individual treatises to the man himself is debated by historians, and the Latin “Geber” works are known forgeries",
    strengthAr: "موثّقٌ في المجموعة العربية والآلات؛ وأما نسبة آحاد الرسائل إليه بعينه فمختلَفٌ فيها عند المؤرّخين، ومصنّفات Geber اللاتينية منتحَلةٌ معروفة",
    keys: ["jabir","geber","chemistry","alchemy","distillation","alembic","alkali","alcohol","جابر بن حيان","الكيمياء","التقطير","الإنبيق","القلي","الكحل"]
  },

  /* ================= ENGINEERING ================= */
  {
    id: "g-jazari",
    cat: "engineering",
    name: "Badi az-Zaman al-Jazari",
    nameAr: "بديع الزمان الجزري",
    latin: "—",
    years: "1136–1206 CE",
    yearsAr: "٥٣٠–٦٠٢ هـ",
    place: "Diyarbakir",
    placeAr: "ديار بكر",
    headline: "He described the crankshaft and the camshaft — the two parts that make an engine possible.",
    headlineAr: "وصف عمود المرفق وعمود الحدبات — وهما القطعتان اللتان يقوم عليهما المحرّك.",
    detail: "Al-Jazari's Book of Knowledge of Ingenious Mechanical Devices describes fifty machines with the drawings and the assembly instructions needed to build them — he wrote it, he says, so that a craftsman could make the thing without him. In it are the crankshaft, which converts rotary motion into reciprocating motion, and the camshaft; the double-acting suction pump with true valves; segmental gears; escapements; and a series of water clocks and automata driven by programmable pegged drums.\n\nThe crank-connecting-rod system is the mechanism at the heart of every piston engine built since. It is described and drawn here, in Arabic, in 1206.",
    detailAr: "يصف الجزري في «الجامع بين العلم والعمل النافع في صناعة الحيل» خمسين آلةً برسومها وتفصيل تركيبها بما يكفي لصنعها، وقال إنه إنما كتبه ليصنع الصانع الشيء من غير حاجةٍ إليه. وفيه عمود المرفق الذي يُحيل الحركة الدورانية إلى ترددية، وعمود الحدبات، والمضخّة الماصّة المزدوجة بصمّاماتٍ حقيقية، والتروس القطاعية، والمُفلِتات، وسلسلةٌ من الساعات المائية والآلات ذاتية الحركة تُدار بأسطواناتٍ ذات أوتادٍ تُبرمَج.\n\nومنظومة المرفق وذراع التوصيل هي الآلية التي في قلب كلّ محرّكٍ مكبسيٍّ صُنع بعد ذلك. وهي موصوفةٌ مرسومةٌ هنا، بالعربية، سنة ٦٠٢ هـ.",
    works: [
      { t: "Al-Jami' bayn al-Ilm wal-Amal", tAr: "الجامع بين العلم والعمل النافع في صناعة الحيل", d: "Fifty machines with buildable drawings.", dAr: "خمسون آلةً برسومٍ تكفي لصنعها." }
    ],
    after: "Working reconstructions from his drawings stand in museums today, because the drawings are complete enough to build from. He is not in most engineering histories.",
    afterAr: "تقوم اليوم في المتاحف نماذج عاملةٌ مصنوعةٌ من رسومه، لأنّ الرسوم تامّةٌ تكفي للصنع منها. وهو غير مذكورٍ في أكثر تواريخ الهندسة.",
    strength: "Documented — his own illustrated manuscript survives in several copies",
    strengthAr: "موثّق — مخطوطه المصوَّر باقٍ في نسخٍ عدّة",
    keys: ["jazari","crankshaft","camshaft","pump","machine","robot","clock","engineering","الجزري","عمود المرفق","الحدبات","المضخة","الآلات","الحيل","الساعة","الهندسة"]
  },
  {
    id: "g-banu-musa",
    cat: "engineering",
    name: "The Banu Musa brothers",
    nameAr: "بنو موسى بن شاكر",
    latin: "—",
    years: "9th century CE",
    yearsAr: "القرن الثالث الهجري",
    place: "Baghdad — the House of Wisdom",
    placeAr: "بغداد — بيت الحكمة",
    headline: "Three brothers who wrote a book of a hundred machines — including devices with automatic control.",
    headlineAr: "ثلاثة إخوةٍ صنّفوا كتابًا في مئة آلة — فيها ما يعمل بالتحكّم الذاتي.",
    detail: "Muhammad, Ahmad and al-Hasan, sons of Musa ibn Shakir, wrote Kitab al-Hiyal, describing about a hundred devices: fountains that change their pattern, vessels that refill themselves to a set level, a self-trimming lamp, and valves that switch flow automatically. Several work by feedback — the machine responds to its own state, which is the principle of automatic control.\n\nThey also worked in mathematics, on the measurement of the sphere and the trisection of angles, and they funded translators out of their own wealth, paying for Greek manuscripts to be sought out and brought to Baghdad.",
    detailAr: "صنّف محمد وأحمد والحسن بنو موسى بن شاكر «كتاب الحيل» فوصفوا نحو مئة آلة: نوافير تتبدّل أشكالها، وأوانٍ تملأ نفسها إلى حدٍّ مضبوط، وسراجٌ يُخرج فتيله من نفسه، وصمّاماتٌ تُحوّل المجرى تلقائيًّا. وعدّةٌ منها تعمل بالتغذية الراجعة — أي أنّ الآلة تستجيب لحالها هي، وذلك أصل التحكّم الآلي.\n\nوعملوا في الرياضيات أيضًا في مساحة الكرة وتثليث الزاوية، وأنفقوا من مالهم على المترجمين، وبذلوا في طلب المخطوطات اليونانية وحملها إلى بغداد.",
    works: [
      { t: "Kitab al-Hiyal", tAr: "كتاب الحيل", d: "About a hundred mechanical devices.", dAr: "نحو مئة آلةٍ ميكانيكية." }
    ],
    after: "Their book was one of the sources al-Jazari built on. Feedback control was reinvented in Europe in the industrial revolution.",
    afterAr: "وكان كتابهم من مصادر الجزري. وأُعيد ابتكار التحكّم بالتغذية الراجعة في أوروبا زمن الثورة الصناعية.",
    strength: "Documented — their own surviving work",
    strengthAr: "موثّق — بكتابهم الباقي",
    keys: ["banu musa","hiyal","machines","automatic","control","baghdad","بنو موسى","الحيل","الآلات","التحكم","بغداد","بيت الحكمة"]
  },
  {
    id: "g-ibn-firnas",
    cat: "engineering",
    name: "Abbas ibn Firnas",
    nameAr: "عبّاس بن فرناس",
    latin: "—",
    years: "810–887 CE",
    yearsAr: "١٩٤–٢٧٤ هـ",
    place: "Cordoba, al-Andalus",
    placeAr: "قرطبة بالأندلس",
    headline: "He attempted winged flight in Cordoba — and this one needs its evidence stated carefully.",
    headlineAr: "حاول الطيران بجناحين في قرطبة — وهذا الخبر يحتاج بيان دليله بدقّة.",
    detail: "Ibn Firnas was a poet, astronomer and maker of instruments who is credibly recorded as having devised a planetarium-like room, worked on cutting rock crystal, and made a water clock.\n\nThe famous story is the flight: that he covered himself with feathers, fixed two wings, launched from a height, glided some distance and was injured on landing because he had not accounted for a tail. What must be said plainly is where this comes from. The account is preserved by al-Maqqari, a historian of the seventeenth century, quoting earlier writers, and it is not in a contemporary source we still have. So it is reported in the histories, not documented from his own time. It may well be true. But the honest label belongs on it, and the record of this civilisation is strong enough that nothing is lost by saying so.",
    detailAr: "كان ابن فرناس شاعرًا وفلكيًّا وصانع آلات، وقد صحّ عنه أنه اتّخذ في بيته ما يشبه قبّة فلكٍ تُحاكي السماء، وعمل في قطع البلّور، وصنع ساعةً مائية.\n\nوأما القصّة المشهورة فهي الطيران: أنه كسا نفسه بالريش وركّب جناحين وطار من موضعٍ عالٍ فانساب مسافةً ثم أصابه أذًى عند النزول لأنه لم يجعل لنفسه ذَنَبًا. والذي يجب أن يُقال صراحةً هو من أين جاء الخبر. فهو محفوظٌ عند المقّري، وهو مؤرّخٌ من القرن الحادي عشر الهجري، ينقل عمّن قبله، وليس في مصدرٍ معاصرٍ له بقي بين أيدينا. فهو إذًا مرويٌّ في كتب التاريخ لا موثَّقٌ من زمنه. وقد يكون صحيحًا. لكنّ الوصف الأمين حقُّه أن يُثبت عليه، وسجلّ هذه الحضارة من القوّة بحيث لا يضيع بذلك شيء.",
    works: [
      { t: "—", tAr: "—", d: "No book of his survives; he is known through what others recorded.", dAr: "لم يبقَ له كتاب، وإنما يُعرف بما سجّله غيره." }
    ],
    after: "Baghdad International Airport's original name and a bridge in Cordoba carry his name, and a lunar crater too.",
    afterAr: "حمل اسمه مطار بغداد الدولي في تسميته الأولى، وجسرٌ في قرطبة، وفُوَّهةٌ على القمر.",
    strength: "Reported in the histories — the flight account comes from al-Maqqari in the 17th century quoting earlier writers, not from a surviving contemporary source",
    strengthAr: "مرويٌّ في كتب التاريخ — خبر الطيران عند المقّري في القرن الحادي عشر الهجري نقلًا عمّن قبله، لا من مصدرٍ معاصرٍ باقٍ",
    keys: ["ibn firnas","flight","flying","cordoba","glider","wings","ابن فرناس","الطيران","قرطبة","الجناحان","الأندلس"]
  },
  {
    id: "g-taqi-ad-din",
    cat: "engineering",
    name: "Taqi ad-Din Muhammad ibn Ma'ruf",
    nameAr: "تقيّ الدين محمد بن معروف",
    latin: "—",
    years: "1526–1585 CE",
    yearsAr: "٩٣٢–٩٩٣ هـ",
    place: "Damascus, Cairo and Istanbul",
    placeAr: "دمشق والقاهرة وإسطنبول",
    headline: "He described a steam turbine turning a spit, and a six-cylinder pump, in the sixteenth century.",
    headlineAr: "وصف عنفةً بخاريةً تُدير سفّودًا، ومضخّةً بستّة مكابس، في القرن السادس عشر.",
    detail: "In At-Turuq as-Saniyyah fi al-Alat ar-Ruhaniyyah, Taqi ad-Din describes a device in which steam from a vessel strikes the vanes of a wheel and drives it round, using it to turn a roasting spit — a working steam turbine as a practical machine. The same book describes a six-cylinder monobloc pump driven by a camshaft from a waterwheel.\n\nHe also built the Istanbul observatory in 1577 and wrote on optics and on mechanical clocks. The observatory was demolished in 1580, a few years after it opened, in a dispute over astrology. The loss is worth sitting with: this was not an outside enemy.",
    detailAr: "وصف تقيّ الدين في «الطرق السنيّة في الآلات الروحانية» آلةً يصطدم فيها بخار الماء الخارج من وعاءٍ بريش دولابٍ فيديره، واستعمله في إدارة سفّود الشواء — وهي عنفةٌ بخاريةٌ عاملةٌ في صورة آلةٍ نافعة. ووصف في الكتاب نفسه مضخّةً بستّة مكابس في كتلةٍ واحدةٍ يُديرها عمود حدباتٍ من ناعورة.\n\nوبنى أيضًا مرصد إسطنبول سنة ٩٨٥هـ، وكتب في البصريات والساعات الميكانيكية. وهُدم المرصد سنة ٩٨٨هـ بعد سنواتٍ من افتتاحه في نزاعٍ حول التنجيم. وحقُّ هذه الخسارة أن يُتأمَّل فيها: فلم يكن الهادم عدوًّا من خارج.",
    works: [
      { t: "At-Turuq as-Saniyyah", tAr: "الطرق السنيّة في الآلات الروحانية", d: "The steam turbine and the six-cylinder pump.", dAr: "العنفة البخارية والمضخّة ذات المكابس الستّة." },
      { t: "Sidrat Muntaha al-Afkar", tAr: "سدرة منتهى الأفكار", d: "The astronomy of the Istanbul observatory.", dAr: "فلك مرصد إسطنبول." }
    ],
    after: "Steam power is dated in most histories from Savery and Newcomen, a hundred and twenty years later.",
    afterAr: "ويُؤرَّخ لقوّة البخار في أكثر الكتب من سافري ونيوكومن بعده بمئةٍ وعشرين سنة.",
    strength: "Documented — his own surviving works",
    strengthAr: "موثّق — بكتبه الباقية",
    keys: ["taqi ad-din","steam","turbine","pump","istanbul","observatory","clock","تقي الدين","البخار","العنفة","المضخة","إسطنبول","المرصد","الساعة"]
  },

  /* ================= THE EARTH, MAPS & TRAVEL ================= */
  {
    id: "g-idrisi",
    cat: "earth",
    name: "Muhammad al-Idrisi",
    nameAr: "محمد الإدريسي",
    latin: "Dreses",
    years: "1100–1165 CE",
    yearsAr: "٤٩٣–٥٦٠ هـ",
    place: "Ceuta, Cordoba and Palermo",
    placeAr: "سبتة وقرطبة وبلرم",
    headline: "He made the most accurate map of the world for the next three hundred years.",
    headlineAr: "رسم أدقّ خريطةٍ للعالم في الثلاثمئة سنة التالية.",
    detail: "Working for Roger II of Sicily, al-Idrisi spent fifteen years gathering reports, cross-examining travellers and sending men out to check what could not be confirmed. The result was Nuzhat al-Mushtaq — known in Europe as the Tabula Rogeriana — a world map with seventy sectional maps and a written geography to accompany it, engraved on a disc of silver weighing some hundreds of pounds.\n\nIt shows the sources of the Nile long before Europeans reached them, and it is more accurate on the shape of Europe itself than anything Europe had. Like most Muslim maps of the period it is drawn with south at the top; turn it over and the coastlines are startling.",
    detailAr: "عمل الإدريسي لروجر الثاني ملك صقلّية، فأنفق خمس عشرة سنةً في جمع الأخبار ومساءلة الرحّالة وإرسال من يتحقّق ممّا لا يُتيقَّن منه. فكان «نزهة المشتاق في اختراق الآفاق» — ويُعرف في أوروبا بـ«الخريطة الروجرية» — خريطةً للعالم معها سبعون خريطةً قطاعيةً وكتابٌ في الجغرافيا، ونُقشت على قرصٍ من الفضّة يزن مئاتٍ من الأرطال.\n\nوفيها منابع النيل قبل أن يبلغها الأوروبيون بزمنٍ طويل، وهي أدقّ في شكل أوروبا نفسها من كلّ ما كان عند أوروبا. وهي مرسومةٌ — كأكثر خرائط المسلمين حينئذٍ — والجنوبُ أعلاها؛ فإذا قلبتها أدهشتك سواحلها.",
    works: [
      { t: "Nuzhat al-Mushtaq", tAr: "نزهة المشتاق في اختراق الآفاق", d: "The world map and its geography.", dAr: "خريطة العالم وجغرافيتها." }
    ],
    after: "European navigators used it for centuries. The silver disc was destroyed in a riot. The book survives.",
    afterAr: "استعملها ملّاحو أوروبا قرونًا. وأُتلف القرص الفضّي في فتنة، وبقي الكتاب.",
    strength: "Documented — the book and its maps survive",
    strengthAr: "موثّق — الكتاب وخرائطه باقية",
    keys: ["idrisi","map","geography","world map","sicily","nile","الإدريسي","الخريطة","الجغرافيا","نزهة المشتاق","صقلية","النيل"]
  },
  {
    id: "g-ibn-battuta",
    cat: "earth",
    name: "Ibn Battuta",
    nameAr: "ابن بطّوطة",
    latin: "—",
    years: "1304–1369 CE",
    yearsAr: "٧٠٣–٧٧٠ هـ",
    place: "Tangier — and about forty countries",
    placeAr: "طنجة — ونحو أربعين بلدًا",
    headline: "He travelled roughly 117,000 km in twenty-nine years — three times the distance Marco Polo covered.",
    headlineAr: "طاف نحو ١١٧ ألف كيلومترٍ في تسعٍ وعشرين سنة — ثلاثة أضعاف ما قطعه ماركو بولو.",
    detail: "He set out from Tangier at twenty-one intending Hajj, and did not settle again for nearly thirty years. He reached Egypt, Syria, Arabia, East Africa, Anatolia, the Golden Horde, Central Asia, India — where he served as a judge for years — the Maldives, Sri Lanka, Bengal, Sumatra and China, then the Sahara and the empire of Mali. He dictated the Rihla on his return.\n\nWhat makes it valuable is that he was a jurist, so he records what people ate, how they married, how markets and courts and hospitals ran. Much of what is known about fourteenth-century Mali comes from him.",
    detailAr: "خرج من طنجة وهو ابن إحدى وعشرين سنةً يريد الحجّ، فلم يستقرّ بعدها نحو ثلاثين سنة. فبلغ مصر والشام والحجاز وشرق إفريقية والأناضول وبلاد القِفجاق وما وراء النهر والهند — وولي بها القضاء سنين — وجزر المالديف وسرنديب والبنغال وسومطرة والصين، ثم الصحراء ومملكة مالي. وأملى «الرحلة» عند عودته.\n\nوإنما عظمت فائدتها لأنه كان فقيهًا، فسجّل ما يأكل الناس وكيف يتزوّجون وكيف تجري الأسواق والمحاكم والبيمارستانات. وأكثر ما يُعرف عن مالي في القرن الثامن الهجري مأخوذٌ منه.",
    works: [
      { t: "Tuhfat an-Nuzzar (the Rihla)", tAr: "تحفة النظّار في غرائب الأمصار — الرحلة", d: "The record of twenty-nine years of travel.", dAr: "سجلّ تسعٍ وعشرين سنةً من السفر." }
    ],
    after: "Marco Polo is a household name in the West. Ibn Battuta, who travelled three times as far and recorded far more, is usually not.",
    afterAr: "ماركو بولو اسمٌ يعرفه كلُّ بيتٍ في الغرب، وابن بطّوطة — وقد طاف ثلاثة أضعافه وسجّل أضعاف ما سجّل — لا يكاد يُعرف.",
    strength: "Documented — the Rihla survives; some individual episodes are questioned by historians and that is normal for any travel account",
    strengthAr: "موثّق — «الرحلة» باقية؛ وبعض أخبارها المفردة موضع نظرٍ عند المؤرّخين، وهذا معتادٌ في كتب الرحلات",
    keys: ["ibn battuta","travel","rihla","mali","china","india","marco polo","ابن بطوطة","الرحلة","السفر","مالي","الصين","الهند"]
  },

  /* ================= HISTORY & SOCIETY ================= */
  {
    id: "g-ibn-khaldun",
    cat: "society",
    name: "Ibn Khaldun",
    nameAr: "ابن خلدون",
    latin: "—",
    years: "1332–1406 CE",
    yearsAr: "٧٣٢–٨٠٨ هـ",
    place: "Tunis, Fez, Granada, Cairo",
    placeAr: "تونس وفاس وغرناطة والقاهرة",
    headline: "He founded the study of society itself — and wrote the explanation of how a civilisation falls.",
    headlineAr: "أسّس علم العمران البشري — وكتب تفسير كيف تسقط الحضارة.",
    detail: "The Muqaddimah opens by saying that history had been written as a list of events, and that what was missing was the science of the society underneath them: why states rise, why they harden, why they fall. He called it ilm al-umran, the science of civilisation, and said plainly that he was founding something new. He was.\n\nHis central idea is asabiyyah — the binding solidarity of a group. A people with strong asabiyyah and hard living take power. Power brings comfort; comfort brings luxury; luxury dissolves the solidarity that won the power; the state then hires others to fight for it, taxes its people harder to pay them, and falls to the next group with the solidarity it has lost. He put the cycle at three or four generations.\n\nRead that with our own history in view and it is uncomfortable, because it describes something we have lived through. He also wrote that heavy taxation kills production while light taxation raises revenue — the argument rediscovered in the twentieth century and named after somebody else.",
    detailAr: "افتتح «المقدّمة» بأنّ التاريخ إنما كُتب سردًا للوقائع، وأنّ الناقص هو علم الاجتماع الذي تحتها: لِمَ تقوم الدول، ولِمَ تتحجّر، ولِمَ تسقط. وسمّاه «علم العمران البشري»، وصرّح بأنه يستحدث علمًا لم يُسبق إليه. وقد صدق.\n\nوأصل نظره «العصبيّة» — وهي التلاحم الجامع للقوم. فالقوم ذوو العصبيّة القويّة وخشونة العيش يغلبون فيملكون، فيجرّ المُلك الدَّعَة، وتجرّ الدَّعَة الترف، ويُذيب الترف العصبيّة التي بها نالوا المُلك، فتستأجر الدولة من يقاتل عنها، وتُثقل رعيّتها بالجباية لتدفع لهم، فتسقط بيد القوم الذين فيهم ما فقدَتْه. وجعل الدورة في ثلاثة أجيالٍ أو أربعة.\n\nواقرأ ذلك وتاريخنا بين عينيك تجده مُقلقًا، لأنه يصف شيئًا عشناه. وكتب أيضًا أنّ إثقال الجباية يقتل الإنتاج وأنّ تخفيفها يزيد الحاصل — وهي الحجّة التي أُعيد اكتشافها في القرن العشرين وسُمّيت باسم غيره.",
    works: [
      { t: "Al-Muqaddimah", tAr: "المقدّمة", d: "The science of society, and the theory of how states rise and fall.", dAr: "علم العمران، ونظريّة قيام الدول وسقوطها." },
      { t: "Kitab al-Ibar", tAr: "كتاب العبر", d: "The universal history the Muqaddimah introduces.", dAr: "التاريخ العامّ الذي كانت المقدّمة مقدّمةً له." }
    ],
    after: "Arnold Toynbee called the Muqaddimah the greatest work of its kind ever created by any mind in any time or place. He is now taught as a founder of sociology and economics — six centuries after he wrote, and mostly outside the Muslim world.",
    afterAr: "وصف أرنولد توينبي «المقدّمة» بأنها أعظم ما أُنشئ في بابها في أيّ زمانٍ ومكان. وهو اليوم يُدرَّس مؤسِّسًا لعلم الاجتماع والاقتصاد — بعد ستّة قرونٍ من تصنيفه، وفي غير بلاد المسلمين غالبًا.",
    strength: "Documented — his own surviving work",
    strengthAr: "موثّق — بكتابه الباقي",
    keys: ["ibn khaldun","muqaddimah","sociology","asabiyyah","civilisation","decline","economics","tax","ابن خلدون","المقدمة","علم الاجتماع","العصبية","العمران","سقوط الحضارة","الاقتصاد","الجباية"]
  },

  /* ================= WHAT WAS BUILT ================= */
  {
    id: "g-qarawiyyin",
    cat: "institutions",
    name: "Fatima al-Fihri and al-Qarawiyyin",
    nameAr: "فاطمة الفهرية وجامع القرويين",
    latin: "—",
    years: "founded 245 AH / 859 CE",
    yearsAr: "أُسّس سنة ٢٤٥ هـ",
    place: "Fez, Morocco",
    placeAr: "فاس بالمغرب",
    headline: "A Muslim woman founded what is recognised as the oldest existing degree-granting university in the world.",
    headlineAr: "امرأةٌ مسلمةٌ أسّست ما يُعدّ أقدم جامعةٍ قائمةٍ في العالم تمنح الإجازة العلمية.",
    detail: "Fatima al-Fihri inherited wealth from her father and spent it on a mosque and teaching institution in Fez in 859 CE. It has taught continuously ever since. UNESCO and the Guinness Book of Records both recognise al-Qarawiyyin as the oldest existing, continually operating degree-granting educational institution in the world.\n\nHer sister Maryam founded the al-Andalus mosque in the same city. It is worth stating for its own sake: the oldest university on earth was founded by a woman, in a Muslim city, two hundred years before Bologna and Oxford. Ibn Khaldun studied there, and so did the Andalusian scholars whose books later crossed into Europe.",
    detailAr: "ورثت فاطمة الفهرية مالًا من أبيها فأنفقته على جامعٍ ودارِ علمٍ بفاس سنة ٢٤٥هـ، وما زال التدريس فيها متّصلًا إلى اليوم. وتُقرّ اليونسكو وموسوعة غينيس بأنّ القرويين أقدم مؤسسةٍ تعليميةٍ قائمةٍ عاملةٍ بلا انقطاعٍ تمنح الإجازة العلمية في العالم.\n\nوأسّست أختها مريم جامع الأندلس في المدينة نفسها. ويحسن أن يُقال هذا لذاته: أقدم جامعةٍ في الأرض أسّستها امرأة، في مدينةٍ مسلمة، قبل بولونيا وأكسفورد بمئتَي سنة. وقد درس فيها ابن خلدون، ودرس فيها من علماء الأندلس من عبرت كتبهم بعدُ إلى أوروبا.",
    works: [
      { t: "Al-Qarawiyyin", tAr: "جامع القرويين", d: "Founded 859 CE, teaching without interruption since.", dAr: "أُسّس سنة ٢٤٥هـ، والتدريس فيه متّصلٌ منذئذ." }
    ],
    after: "Histories of “the university” usually begin at Bologna in 1088.",
    afterAr: "وتبدأ كتب تاريخ «الجامعة» عادةً من بولونيا سنة ١٠٨٨م.",
    strength: "Documented — the institution stands and teaches; the UNESCO and Guinness recognitions are on record",
    strengthAr: "موثّق — المؤسسة قائمةٌ يُدرَّس فيها، وإقرار اليونسكو وغينيس مسجَّل",
    keys: ["qarawiyyin","fatima al-fihri","university","fez","women","education","القرويين","فاطمة الفهرية","الجامعة","فاس","المرأة","التعليم"]
  },
  {
    id: "g-bimaristan",
    cat: "institutions",
    name: "The bimaristan — the hospital as we know it",
    nameAr: "البيمارستان — المستشفى كما نعرفه",
    latin: "—",
    years: "from the 8th century CE onward",
    yearsAr: "من القرن الثاني الهجري فصاعدًا",
    place: "Baghdad, Damascus, Cairo, Cordoba",
    placeAr: "بغداد ودمشق والقاهرة وقرطبة",
    headline: "Free treatment for anyone, separate wards, records, teaching, and an examination before a man could practise.",
    headlineAr: "علاجٌ مجّانيٌّ لكلّ أحد، وأقسامٌ منفصلة، وسجلّات، وتعليم، وامتحانٌ قبل أن يُؤذن لأحدٍ بالمزاولة.",
    detail: "The bimaristan was not a hospice where the sick were kept until they died. It was an institution with wards separated by illness, a pharmacy, physicians on rota, students taught at the bedside, written case records, and — most strikingly — treatment given free, to Muslim and non-Muslim, rich and poor alike, funded by waqf endowments. Ahmad ibn Tulun's hospital in Cairo, built in 872 CE, treated without charge and took the patient's own clothes and valuables into safekeeping on admission.\n\nLicensing appears too. In Baghdad in 931 CE, after a patient died of a physician's error, the caliph al-Muqtadir ordered that all who practised medicine be examined, and the chief physician Sinan ibn Thabit examined some 860 of them. That is a medical licensing board in the tenth century.\n\nThis is where the Islamic root shows most clearly. Free treatment for all comers, paid for by endowment, is not a scientific idea. It is a religious one.",
    detailAr: "لم يكن البيمارستان دارًا يُحبس فيها المريض حتى يموت، بل مؤسسةً فيها أقسامٌ مفرَّقةٌ بحسب العلل، وصيدليّة، وأطبّاء بالنوبة، وطلبةٌ يُعلَّمون عند سرير المريض، وسجلّاتٌ مكتوبة، والأعجب من ذلك كلّه: علاجٌ يُبذل مجّانًا للمسلم وغير المسلم، والغنيّ والفقير سواء، من أوقافٍ موقوفةٍ عليه. وكان بيمارستان أحمد بن طولون بالقاهرة، المبنيّ سنة ٢٥٩هـ، يعالج بلا أجرٍ ويأخذ ثياب المريض ومتاعه في حفظٍ عند دخوله.\n\nوظهر الترخيص أيضًا. ففي بغداد سنة ٣١٩هـ، بعد أن مات مريضٌ بخطأ طبيب، أمر الخليفة المقتدر بامتحان كلّ من يزاول الطبّ، فامتحن رئيس الأطبّاء سنان بن ثابت نحو ثمانمئةٍ وستّين منهم. فتلك هيئةُ ترخيصٍ طبيٍّ في القرن الرابع الهجري.\n\nوهنا يظهر الأصل الإسلاميّ أوضح ما يكون. فالعلاج المجّاني لكلّ قادمٍ من وقفٍ محبَّسٍ ليس فكرةً علمية، بل فكرةٌ دينية.",
    works: [
      { t: "The waqf system", tAr: "نظام الوقف", d: "The endowment that paid for it, generation after generation.", dAr: "الوقف الذي أنفق عليه جيلًا بعد جيل." }
    ],
    after: "Europe's first hospitals in this sense appear after contact with the Muslim world through Sicily, Spain and the Levant.",
    afterAr: "وأول ما ظهر في أوروبا من المستشفيات بهذا المعنى كان بعد الاتّصال ببلاد المسلمين عبر صقلّية والأندلس والشام.",
    strength: "Documented — the buildings survive in Damascus and Cairo, along with their endowment deeds and the chronicles recording the 931 examination",
    strengthAr: "موثّق — الأبنية قائمةٌ في دمشق والقاهرة، ومعها وثائق أوقافها، والتواريخ المسجِّلة لامتحان سنة ٣١٩هـ",
    keys: ["hospital","bimaristan","waqf","free treatment","licensing","pharmacy","medicine","البيمارستان","المستشفى","الوقف","العلاج المجاني","الترخيص","الصيدلة","الطب"]
  },
  {
    id: "g-paper",
    cat: "institutions",
    name: "Paper — and what it did",
    nameAr: "الورق — وما صنعه",
    latin: "—",
    years: "from 134 AH / 751 CE",
    yearsAr: "من سنة ١٣٤ هـ",
    place: "Samarkand, then Baghdad, then Cordoba",
    placeAr: "سمرقند ثم بغداد ثم قرطبة",
    headline: "Muslims took paper from China, industrialised it, and gave the world cheap books.",
    headlineAr: "أخذ المسلمون الورق عن الصين فصنّعوه على نطاقٍ واسع، فأعطوا العالم الكتاب الرخيص.",
    detail: "Papermaking reached the Muslim world after the battle of Talas in 751 CE. Within decades there was a paper mill in Baghdad — around 794 CE — and the technique had been re-engineered to use linen and hemp rather than mulberry bark, which made it cheap and scalable. Paper then moved west with the Muslims: Damascus, Cairo, Fez, and Xativa in Muslim Spain, from where it entered Europe.\n\nThe consequence is easy to miss and hard to overstate. Parchment meant a herd of animals per book. Paper meant a bookseller's street. Baghdad had one; so did Cordoba, whose library under al-Hakam II is reported to have held hundreds of thousands of volumes at a time when the largest libraries in Christian Europe held a few hundred. Everything else in this page rests on that: none of it survives, spreads or gets translated without cheap paper.",
    detailAr: "بلغت صناعة الورق بلاد المسلمين بعد وقعة نهر طلاس سنة ١٣٣هـ. فما مضت عقودٌ حتى قامت مطحنة ورقٍ ببغداد نحو سنة ١٧٨هـ، وأُعيدت هندسة الصنعة لتقوم على الكتّان والقنّب بدل لحاء التوت، فرخُصت وأمكن التوسّع فيها. ثم سار الورق غربًا مع المسلمين: دمشق والقاهرة وفاس وشاطبة بالأندلس، ومنها دخل أوروبا.\n\nوأثر ذلك يسهل إغفاله ويصعب المبالغة فيه. فالرقّ يعني قطيعًا من الدوابّ لكلّ كتاب، والورق يعني سوقًا للورّاقين. وكانت لبغداد سوق، ولقرطبة مثلها، ويُذكر أنّ مكتبتها في عهد الحكم المستنصر ضمّت مئات الآلاف من المجلّدات في زمنٍ كانت أكبر مكتبات أوروبا النصرانية فيه تضمّ بضع مئات. وكلّ ما في هذه الصفحة قائمٌ على ذلك: فلا شيء منه يبقى ولا ينتشر ولا يُترجم بغير ورقٍ رخيص.",
    works: [
      { t: "The paper mills", tAr: "مطاحن الورق", d: "Baghdad c. 794, then across the Muslim world and into Europe through Spain.", dAr: "بغداد نحو ١٧٨هـ، ثم في بلاد المسلمين، ثم إلى أوروبا عبر الأندلس." }
    ],
    after: "European printing four centuries later needed cheap paper to be worth doing. It had it, by this route.",
    afterAr: "واحتاجت الطباعة الأوروبية بعد أربعة قرونٍ إلى ورقٍ رخيصٍ ليكون لها معنى، وقد وجدته، من هذا الطريق.",
    strength: "Documented — the mills, the trade and the transmission route are recorded in both Muslim and European sources; the exact size of the Cordoba library is reported in the histories and the figure varies between them",
    strengthAr: "موثّق — المطاحن والتجارة وطريق الانتقال مسجَّلةٌ في مصادر المسلمين وأوروبا؛ وأما عدد مكتبة قرطبة فمرويٌّ في كتب التاريخ ويختلف الرقم بينها",
    keys: ["paper","books","library","cordoba","baghdad","printing","talas","الورق","الكتب","المكتبة","قرطبة","بغداد","الطباعة","الورّاقين"]
  }
];

/* ============================================================
   WHAT WAS TAKEN, AND WHOSE NAME ENDED UP ON IT
   ------------------------------------------------------------
   This is the part the owner of this site asked for, and it is
   given here the way it deserves to be given: with the receipts.

   A percentage is easy to say and easy to wave away. What cannot
   be waved away is a specific manuscript, a specific date, a
   specific Latin translation, and a specific European book that
   contains the same diagram. That is what is below. Every case
   here can be checked by anyone who wants to check it — which is
   exactly why it lands.
   ============================================================ */

const GOLDEN_TAKEN = {
  title: "What was taken — and whose name ended up on it",
  titleAr: "ما الذي أُخذ — وباسم مَن قُيِّد",
  intro: "Nothing on this page needs exaggerating. The strongest form of this argument is not a number — it is the receipts. A manuscript with a date. A Latin translation made from it. A European book printed later containing the same diagram, the same model, the same conclusion, with no mention of where it came from. Below are the cases where all of that survives and can be checked.",
  introAr: "ليس في هذه الصفحة شيءٌ يحتاج إلى مبالغة. وأقوى صورةٍ لهذه الحجّة ليست رقمًا، بل هي الوثائق: مخطوطٌ عليه تاريخ، وترجمةٌ لاتينيةٌ منقولةٌ عنه، وكتابٌ أوروبيٌّ طُبع بعده فيه الشكل نفسه والنموذج نفسه والنتيجة نفسها، وليس فيه ذكرٌ لمن أخذ عنه. وفيما يلي المواضع التي بقي فيها ذلك كلّه ويمكن التحقّق منه.",
  cases: [
    {
      id: "tk-names",
      title: "The names were changed, and the man disappeared behind them",
      titleAr: "غُيّرت الأسماء، فاختفى الرجل خلفها",
      what: "Ibn Sina became Avicenna. Ibn Rushd became Averroes. Ibn al-Haytham became Alhazen. Al-Khwarizmi became Algoritmi. Az-Zahrawi became Abulcasis. Ar-Razi became Rhazes. Ibn Zuhr became Avenzoar. Az-Zarqali became Arzachel. Jabir ibn Hayyan became Geber.\n\nA student can study optics under Alhazen, medicine under Avicenna, surgery under Abulcasis and algebra under Algorismus for years and never once be told that these were Muslims, that they wrote in Arabic, or that several of them were scholars of the religion first. The knowledge was kept. The identity was filed off.",
      whatAr: "صار ابن سينا Avicenna، وابن رشد Averroes، وابن الهيثم Alhazen، والخوارزمي Algoritmi، والزهراوي Abulcasis، والرازي Rhazes، وابن زهر Avenzoar، والزرقالي Arzachel، وجابر بن حيّان Geber.\n\nفقد يدرس الطالب البصريات عند Alhazen، والطبّ عند Avicenna، والجراحة عند Abulcasis، والجبر عند Algorismus سنين، ولا يُقال له مرّةً واحدةً إنّ هؤلاء مسلمون، وإنهم كتبوا بالعربية، وإنّ منهم من كان عالمًا بالدين قبل ذلك. فالعلم حُفظ، والهُويّة بُرِدت وأُزيلت.",
      strength: "Documented — this is simply what the Latin manuscripts and printed books say",
      strengthAr: "موثّق — وهذا هو نصّ ما في المخطوطات والمطبوعات اللاتينية"
    },
    {
      id: "tk-copernicus",
      title: "Copernicus and the astronomers of Damascus and Maragha",
      titleAr: "كوبرنيكوس وفلكيّو دمشق ومراغة",
      what: "This is the strongest case there is, and it does not rest on a Muslim source claiming it — it rests on Western historians of science establishing it and publishing it.\n\nAt-Tusi devised the Tusi couple at Maragha in the thirteenth century. Ibn ash-Shatir, timekeeper of the Umayyad Mosque in Damascus, used it and related devices in the fourteenth century to rebuild the models of the sun, the moon and the planets without Ptolemy's equant.\n\nIn 1543 Copernicus published De Revolutionibus. It contains the Tusi couple — with the same lettering on the diagram. His lunar model is mathematically identical to Ibn ash-Shatir's. His model for Mercury is the same too. Copernicus cites no Muslim source for any of it.\n\nThis was not alleged by a partisan. It was established by the historians of science Otto Neugebauer, E. S. Kennedy, Noel Swerdlow and George Saliba, working from the manuscripts, and it is now standard in the field. What is still not standard is that anyone learning about Copernicus at school is told it.",
      whatAr: "هذا أقوى ما في الباب، وهو لا يقوم على دعوى مصدرٍ مسلمٍ، بل على تحقيق مؤرّخي العلم في الغرب ونشرهم له.\n\nابتكر الطوسي «المزدوجة» بمراغة في القرن السابع الهجري. واستعملها ابن الشاطر — موقّت الجامع الأموي بدمشق — هي وما يشبهها في القرن الثامن، فأعاد بها بناء نماذج الشمس والقمر والكواكب من غير معدِّل بطليموس.\n\nوفي سنة ١٥٤٣م نشر كوبرنيكوس كتابه، وفيه «مزدوجة الطوسي» وعلى الشكل الحروف نفسها. ونموذجه للقمر مطابقٌ رياضيًّا لنموذج ابن الشاطر، ونموذجه لعُطارد كذلك. ولم يذكر كوبرنيكوس مصدرًا مسلمًا لشيءٍ من ذلك.\n\nولم يدّعِ هذا متعصّب، بل حقّقه مؤرّخو العلم أوتو نويغباور وإ. س. كينيدي ونويل سويردلو وجورج صليبا من المخطوطات، وهو اليوم مقرَّرٌ في الاختصاص. والذي لم يصر مقرَّرًا بعدُ أن يُقال لمن يدرس كوبرنيكوس في المدرسة.",
      strength: "Documented — the manuscripts and the printed book both survive, and the comparison is published work anyone can check",
      strengthAr: "موثّق — المخطوطات والكتاب المطبوع كلاهما باقٍ، والمقارنة منشورةٌ يقدر كلُّ أحدٍ على مراجعتها"
    },
    {
      id: "tk-nafis",
      title: "Three hundred years of credit for a discovery already made",
      titleAr: "ثلاثمئة سنةٍ من نسبة كشفٍ قد سُبق إليه",
      what: "Ibn an-Nafis described the pulmonary circulation of the blood in Damascus in the thirteenth century. Michael Servetus published it in 1553, and William Harvey's work followed in 1628, and the credit went to them.\n\nIbn an-Nafis's manuscript was found in the Prussian State Library in Berlin in 1924 by an Egyptian doctor, Muhyi ad-Din at-Tatawi, who made it the subject of his thesis. So this is not an old grievance about a lost golden age — the evidence surfaced a century ago and is not disputed. Many textbooks still begin the story at Servetus.",
      whatAr: "وصف ابن النفيس الدورة الدموية الصغرى بدمشق في القرن السابع الهجري. ثم نشرها ميغيل سرفيتوس سنة ١٥٥٣م، وتلاه عمل وليم هارفي سنة ١٦٢٨م، فنُسب الفضل إليهما.\n\nووُجد مخطوط ابن النفيس في المكتبة البروسية ببرلين سنة ١٩٢٤م على يد طبيبٍ مصريٍّ هو محيي الدين التطاوي، فجعله موضوع أطروحته. فليست هذه شكوى قديمةً عن عصرٍ ذهبيٍّ ضاع — بل ظهر الدليل قبل قرنٍ من الزمان وليس محلّ نزاع. ومع ذلك ما زالت كتبٌ كثيرةٌ تبدأ القصّة من سرفيتوس.",
      strength: "Documented — the Berlin manuscript and the 1924 thesis",
      strengthAr: "موثّق — بمخطوط برلين وأطروحة سنة ١٩٢٤م"
    },
    {
      id: "tk-toledo",
      title: "Toledo: the doorway, and what went through it",
      titleAr: "طليطلة: الباب، وما عبر منه",
      what: "When Toledo fell in 1085 its libraries fell with it, and for the next century Europeans came to translate. Gerard of Cremona alone rendered some eighty-seven works from Arabic into Latin, including Ibn Sina's Canon, az-Zahrawi's surgery, ar-Razi, al-Khwarizmi, and Ptolemy's Almagest.\n\nThat last one is worth pausing on. Europe did not have the Almagest. It got it back from Arabic — which is why it is called the Almagest at all: al-majisti is an Arabic word. Europe recovered a large part of its own Greek inheritance through Muslim hands, translated, corrected and expanded, and the standard telling of the Renaissance moves straight from the Greeks to Italy as though the intervening five hundred years and the language they happened in were a corridor rather than a workshop.",
      whatAr: "لمّا سقطت طليطلة سنة ٤٧٨هـ سقطت خزائن كتبها معها، فأقبل الأوروبيون قرنًا كاملًا يترجمون. وقد نقل جيرارد الكريموني وحده نحو سبعةٍ وثمانين كتابًا من العربية إلى اللاتينية، منها «القانون» لابن سينا، وجراحة الزهراوي، وكتب الرازي، والخوارزمي، و«المجسطي» لبطليموس.\n\nوهذا الأخير موضع وقوف. فلم يكن «المجسطي» عند أوروبا، وإنما استردّته من العربية — ولذلك سُمّي «المجسطي» أصلًا، فهي لفظةٌ عربية. فقد استعادت أوروبا شطرًا كبيرًا من ميراثها اليوناني نفسه على أيدي المسلمين، مترجَمًا مصحَّحًا مَزيدًا فيه. ثم إنّ الرواية المعتادة لعصر النهضة تنتقل من اليونان إلى إيطاليا رأسًا، كأنّ الخمسمئة سنةٍ الواقعة بينهما واللغة التي جرت بها ممرٌّ لا مَشْغَل.",
      strength: "Documented — the translations survive with their translators named on them",
      strengthAr: "موثّق — الترجمات باقيةٌ وعليها أسماء ناقليها"
    },
    {
      id: "tk-words",
      title: "The words are still in their mouths",
      titleAr: "الألفاظ ما زالت في أفواههم",
      what: "Some things could not be renamed, because they had entered the language before anyone thought to.\n\nAlgebra, algorithm, alchemy and chemistry, alkali, alcohol, alembic, elixir, cipher and zero (from sifr), almanac, nadir, zenith and azimuth (from as-samt), average, admiral, arsenal, tariff, cotton, sugar, syrup, sofa, magazine, monsoon, lemon, orange, coffee.\n\nAnd the sky above Europe is still named in Arabic: Aldebaran, Betelgeuse, Rigel, Altair, Vega, Deneb, Fomalhaut, Algol, Mizar — a couple of hundred star names in normal astronomical use are Arabic, because when Europeans got their star catalogues they got them from Muslims and kept the labels. Every professional astronomer alive uses those names daily.",
      whatAr: "وثمّة ما لم يمكن تغيير اسمه، لأنه دخل اللغة قبل أن يخطر لأحدٍ أن يغيّره.\n\nفـ algebra من الجبر، وalgorithm من الخوارزمي، وalchemy وchemistry من الكيمياء، وalkali من القِلْي، وalcohol من الكُحْل، وalembic من الإنبيق، وelixir من الإكسير، وcipher وzero من الصفر، وalmanac من المناخ، وnadir من النظير، وzenith وazimuth من السَّمْت، وadmiral من أمير البحر، وarsenal من دار الصناعة، وtariff من التعريفة، وcotton من القطن، وsugar من السكّر، وsyrup من الشراب، وsofa من الصُّفّة، وmagazine من المخزن، وmonsoon من الموسم، وlemon من الليمون، وcoffee من القهوة.\n\nوسماء أوروبا نفسها ما زالت مسمّاةً بالعربية: الدَّبَران، ويد الجوزاء (Betelgeuse)، ورِجْل الجوزاء (Rigel)، والطائر (Altair)، والواقع (Vega)، وذَنَب الدجاجة (Deneb)، وفم الحوت (Fomalhaut)، والغول (Algol)، والمِئْزَر (Mizar) — نحو مئتَي اسم نجمٍ ممّا يجري على ألسنة الفلكيّين اليوم عربيّةُ الأصل، لأنّ الأوروبيين لمّا أخذوا فهارس النجوم أخذوها عن المسلمين فأبقوا الأسماء. فكلّ فلكيٍّ محترفٍ على وجه الأرض ينطق بها كلّ يوم.",
      strength: "Documented — this is settled etymology, in any dictionary",
      strengthAr: "موثّق — وهذا اشتقاقٌ مقرَّرٌ في كلّ معجم"
    },
    {
      id: "tk-honest",
      title: "And here is what is NOT true — said on purpose",
      titleAr: "وهذا ما ليس بصحيحٍ — يُقال عمدًا",
      what: "This site states the strength of every hadith, including when a famous one is not authentic. The same honesty is owed here, and it is not a weakness in the argument. It is what makes the argument unanswerable.\n\nSo: not everything circulating on social media about Muslim inventions is true. Some claims are inflated, some rest on a single late source, some are simply wrong. The flight of Ibn Firnas is reported by a historian six centuries after the event, and it is labelled that way on his card above. Ar-Razi's hanging meat is from his biographers, not from him. A large body of Latin alchemical writing published under the name “Geber” was written by Europeans and is not Jabir's at all. The size of the Cordoba library varies wildly between the chronicles.\n\nWhy insist on this? Because the moment one inflated claim is knocked down, everything standing beside it is dismissed with it — and there is no need to take that risk. Al-Khwarizmi's book exists. Ibn al-Haytham's experiments are on the page. Ibn ash-Shatir's model is in the manuscript and Copernicus's is in print and anyone can lay them side by side. That record does not need help. Tell it exactly, and it cannot be answered.",
      whatAr: "هذا الموقع يذكر درجة كلّ حديث، حتى إذا كان المشهور غير ثابتٍ قال ذلك. والأمانة نفسها واجبةٌ ها هنا، وليست ضعفًا في الحجّة، بل هي التي تجعل الحجّة لا تُدفَع.\n\nفليس كلّ ما يدور في وسائل التواصل عن اختراعات المسلمين صحيحًا. فمنه المبالَغ فيه، ومنه ما يقوم على مصدرٍ واحدٍ متأخّر، ومنه ما هو خطأٌ محض. وطيران ابن فرناس يرويه مؤرّخٌ بعد الحادثة بستّة قرون، وقد نُصّ على ذلك في بطاقته أعلاه. وخبر تعليق الرازي اللحمَ من كلام مترجميه لا من كلامه. ومجموعةٌ كبيرةٌ من الكتابات الكيميائية اللاتينية نُشرت باسم Geber كتبها أوروبيّون وليست لجابر في شيء. وعدد كتب مكتبة قرطبة يختلف اختلافًا شديدًا بين التواريخ.\n\nولِمَ الإصرار على هذا؟ لأنّ دعوى واحدةً مبالَغًا فيها إذا سقطت أسقطت معها كلَّ ما كان إلى جانبها — ولا حاجة إلى ركوب هذا الخطر. فكتاب الخوارزمي موجود، وتجارب ابن الهيثم مسطورةٌ في صفحاتها، ونموذج ابن الشاطر في المخطوط ونموذج كوبرنيكوس في المطبوع، ويستطيع كلُّ أحدٍ أن يضعهما جنبًا إلى جنب. فهذا السجلّ لا يحتاج إلى عون. قُلْه على وجهه، يعجز عنه الردّ.",
      strength: "This is the site's own rule, applied to history the same way it is applied to hadith",
      strengthAr: "وهذه قاعدة الموقع نفسها، طُبّقت على التاريخ كما تُطبَّق على الحديث"
    },
    {
      id: "tk-fair",
      title: "And one thing said in our own favour, fairly",
      titleAr: "وأمرٌ يُقال لنا نحن، بإنصاف",
      what: "The House of Wisdom in Baghdad employed Christians, Jews and Sabians. Hunayn ibn Ishaq, the greatest of the translators, was a Christian. Thabit ibn Qurra, the mathematician, was a Sabian. They were paid, honoured and given their names on their work.\n\nThis is not a mark against the civilisation. It is one of the highest things that can be said about it: it was confident enough to seek knowledge wherever it was and to name the man who brought it. “Wisdom is the lost property of the believer; wherever he finds it he has the best right to it” is a well-known saying reported from the Prophet ﷺ through at-Tirmidhi and Ibn Majah — and it must be said that its chain is weak, though its meaning is sound and agreed upon by the scholars.\n\nThat confidence is worth noticing now. A civilisation at its peak took knowledge from Greece, India, Persia and China without feeling diminished, and put its own name next to theirs honestly. What replaced that confidence is part of the answer to why the peak ended.",
      whatAr: "كان في بيت الحكمة ببغداد نصارى ويهودٌ وصابئة. وكان حُنين بن إسحاق — أعظم المترجمين — نصرانيًّا، وكان ثابت بن قرّة الرياضيّ صابئًا. وقد أُجروا عليهم الأرزاق وأُكرموا وقُيّدت أسماؤهم على أعمالهم.\n\nوليس هذا مأخذًا على الحضارة، بل هو من أعلى ما يُقال فيها: أنها كانت من الثقة بحيث تطلب العلم حيث كان وتُسمّي من جاء به. و«الحكمة ضالّة المؤمن، حيث وجدها فهو أحقّ بها» كلمةٌ مشهورةٌ تُروى مرفوعةً عند الترمذي وابن ماجه — ويجب أن يُقال إنّ إسنادها ضعيف، وإن كان معناها صحيحًا متّفقًا عليه عند أهل العلم.\n\nوتلك الثقة جديرةٌ بالتأمّل اليوم. فحضارةٌ في ذروتها أخذت العلم عن اليونان والهند وفارس والصين ولم تشعر بنقص، ووضعت اسمها إلى جانب أسمائهم بصدق. والذي حلّ محلّ تلك الثقة جزءٌ من جواب: لماذا انتهت الذروة.",
      strength: "Documented for the translators; the saying about wisdom is weak in its chain — said plainly, as this site says it everywhere else",
      strengthAr: "موثّقٌ في شأن المترجمين؛ وأما كلمة «الحكمة ضالّة المؤمن» فإسنادها ضعيف — يُقال ذلك صراحةً كما يُقال في هذا الموقع في كلّ موضع"
    }
  ],
  close: "So what is the honest summary? Not a percentage. This: for roughly seven hundred years the centre of gravity of human knowledge sat in Muslim cities; Europe recovered its own Greek inheritance through Arabic and built its sciences on foundations laid in Baghdad, Cordoba, Cairo, Damascus, Maragha and Samarkand; and in the telling of that story afterwards the names were Latinised, the sources went uncited, and the five centuries in between were called dark. The knowledge was received. The debt was not recorded.",
  closeAr: "فما الخلاصة المنصفة؟ ليست نسبةً مئوية، بل هذا: أنّ مركز ثقل المعرفة الإنسانية أقام نحو سبعمئة سنةٍ في مدن المسلمين؛ وأنّ أوروبا استردّت ميراثها اليونانيّ نفسه من العربية وبنت علومها على أسسٍ وُضعت في بغداد وقرطبة والقاهرة ودمشق ومراغة وسمرقند؛ وأنّ الرواية بعد ذلك لتَّنت الأسماء باللاتينية، وأغفلت ذكر المصادر، وسمّت القرون الخمسة الواقعة بينهما ظلامًا. فالعلم قُبض، والدَّين لم يُقيَّد."
};
