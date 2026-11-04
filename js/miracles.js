/* ============================================================
   WHAT THE VERSE SAID BEFORE ANYONE COULD CHECK IT
   ما قالته الآية قبل أن يستطيع أحدٌ التحقّق منه
   ============================================================
   The 🔬 button in the surah reader on quran.html, beside
   Tadabbur and Full explanation. Drawn ONLY on a surah that has
   an entry, for the same reason the story button is: a button
   that opens onto "nothing written yet" breaks its promise twice.

   SIX RULES AT THE TOP OF THIS FILE. They are the whole reason
   the section can be trusted, and they are not negotiable.

   1. EVERY CARD IS GRADED, the way this site grades a hadith.
      strong          the wording is plain and specific, the fact
                      is settled science, and it was genuinely
                      out of reach when the verse was recited
      partial         the verse fits, but the classical Arabic
                      also bears a reading that needs no science
                      at all -- so it is a fit, not a proof
      not-established the claim is popular and the verse does not
                      actually say it. It is ON the page, refuted,
                      because a reader who meets it elsewhere
                      should meet the answer here first.

   2. EVERY CARD CARRIES `classical` -- how the mufassirun read
      the verse BEFORE any of this was known. This is the field
      that stops the section reading the Quran backwards through
      a physics textbook. A card without it would be an argument
      with the evidence for the other side removed.

   3. NO VERSE IS TYPED. Every Arabic quotation is copied out of
      js/quran-text.js by (surah, ayah) -- the same rule that
      governs js/tadabbur.js. A miracle section that misquotes
      the Quran would be worse than no section.

   4. THE SCIENCE CARRIES ITS DATE AND ITS NAME. "Modern science
      has discovered" is not a source. Hubble 1929. Airy 1855.
      B2FH 1957. Nansen 1893. If a date cannot be given, the
      claim does not go in.

   5. NEVER SAY THE VERSE PREDICTED THE THEORY. The strongest
      honest claim is: here is what the words say, here is when
      anyone could first have checked it, and the gap is the
      thing worth looking at. Theories are revised; the verse is
      not hostage to the next paper. Same discipline that kept
      the ancient batteries and the Council of Macon off the
      Golden Age page.

   6. THE WEAK CASE IS STATED AS WEAK, LOUDLY. The section leads
      with its own limits. If a reader can knock down one card in
      a minute with a search, every card beside it falls with it.
      That is why at-Tariq is graded not-established here rather
      than quietly left out.
   ============================================================ */

const MIRACLES_INTRO = {
  title: "What the verse said before anyone could check it",
  titleAr: "ما قالته الآيةُ قبل أن يستطيع أحدٌ التحقّق منه",
  lead: "A small number of verses describe the physical world in a way nobody in the seventh century was in a position to confirm or deny. This section gives each one the same treatment: the verse, what it plainly says, how the classical commentators read it before any of this was known, what is now established, and the date it became checkable.",
  leadAr: "آياتٌ قليلةٌ تصف العالمَ المحسوس وصفًا لم يكن أحدٌ في القرن السابع الميلاديّ قادرًا على تصديقه ولا تكذيبه. وهذا القسم يعامل كلَّ واحدةٍ منها المعاملةَ نفسها: الآية، ثم ما تقوله بظاهرها، ثم كيف قرأها المفسّرون قبل أن يُعرف شيءٌ من هذا، ثم ما ثبت اليوم، ثم التاريخُ الذي صار فيه ممكنَ التحقّق.",
  notice: "Read the grading on each card before you quote it. Some of what circulates under this heading is strong; some of it is a verse being read backwards through a textbook; and one famous claim on this page is refuted on its own card. Quoting a weak one costs you the strong ones.",
  noticeAr: "اقرأ درجةَ كلِّ بطاقةٍ قبل أن تنقلها. فبعضُ ما يدور تحت هذا العنوان قويّ، وبعضُه آيةٌ تُقرأ بالمقلوب من كتابٍ علميّ، وفي هذه الصفحة دعوى مشهورةٌ مردودةٌ في بطاقتها. ونقلُ الضعيف يُسقط عنك القويّ.",
  grades: {
    "strong":          { en: "Strong",          ar: "قويّ" },
    "partial":         { en: "A fit, not a proof", ar: "موافقةٌ لا برهان" },
    "not-established": { en: "Not established",  ar: "لا يثبت" }
  }
};

/* Keyed by surah number as a STRING, so the reader can look up
   MIRACLES[String(surah.n)] with no arithmetic. */
const MIRACLES = {

  "2": [{
      id: "mi-2-22",
      ayah: 22,
      title: "The sky described as a building, and as a guarded roof",
      titleAr: "السماءُ موصوفةً بأنها بناء، وبأنها سقفٌ محفوظ",
      verse: "جَعَلَ لَكُمُ ٱلۡأَرۡضَ فِرَٰشٗا وَٱلسَّمَآءَ بِنَآءٗ",
      verseEn: "[He] who made for you the earth a bed and the sky a structure.",
      says: "Two words about what is over your head. Here the sky is a **bina'** — something built: raised, joined, holding together. Elsewhere the Quran calls it a **guarded roof** (21:32). Both words describe the sky as doing a job rather than as a view.",
      saysAr: "كلمتان فيما فوق رأسك: فالسماءُ هنا **بناء** — مرفوعٌ موصولٌ ممسَك. وسمّاها القرآنُ في موضعٍ آخر **سقفًا محفوظًا** (٢١:٣٢). والوصفان جميعًا يجعلان للسماء عملًا، لا منظرًا.",
      classical: "The mufassirun read bina' as the raised structure over the earth, and “guarded roof” as guarded — and the Quran itself says from what: it is guarded from every rebellious devil (15:17, 37:7). That reading is complete on its own and needs no physics whatsoever.",
      classicalAr: "حمل المفسّرون البناءَ على ما رُفع فوق الأرض، والسقفَ المحفوظ على الحفظ — وقد بيّن القرآنُ ممّ حُفظ: ﴿وَحَفِظۡنَٰهَا مِن كُلِّ شَيۡطَٰنٖ رَّجِيمٍ﴾ (١٥:١٧)، ونحوه في الصافّات (٣٧:٧). وهذه القراءةُ تامّةٌ بنفسها لا تحتاج إلى شيءٍ من علوم الطبيعة.",
      science: "What is above us does in fact hold things off. The atmosphere destroys nearly everything that enters it: tens of tonnes of meteoric material arrive daily and almost all of it is vaporised before reaching the ground. Ozone in the stratosphere absorbs the most damaging ultraviolet. And beyond the air, the Earth's magnetic field deflects the charged particles of the solar wind.",
      scienceAr: "وما فوقنا يردّ عنّا شيئًا كثيرًا في الواقع: فالغلافُ الجويّ يُحرق كلَّ ما يدخله تقريبًا — تدخله عشراتُ الأطنان من المادّة النيزكيّة كلَّ يوم، ويتبخّر جُلُّها قبل أن يبلغ الأرض. والأوزونُ في طبقة الستراتوسفير يمتصّ أشدَّ الأشعّة فوق البنفسجيّة ضررًا. وخلف الهواء يصرف المجالُ المغناطيسيُّ للأرض جسيماتِ الرياح الشمسيّة المشحونة.",
      when: "Walter Hartley showed in 1881 that ozone absorbs ultraviolet; Charles Fabry and Henri Buisson measured the ozone layer itself in 1913. The Earth's radiation belts were found by James Van Allen from the instruments on Explorer 1, in 1958. Before those dates nobody could have known that the air overhead was shielding anything.",
      whenAr: "أثبت والتر هارتلي سنة ١٨٨١م أنّ الأوزون يمتصّ فوق البنفسجيّة، وقاس شارل فابري وهنري بويسون طبقةَ الأوزون نفسها سنة ١٩١٣م. واكتُشفت أحزمةُ الإشعاع حول الأرض على يد جيمس فان ألن من أجهزة مركبة «إكسبلورر ١» سنة ١٩٥٨م. وقبل هذه التواريخ لم يكن لأحدٍ أن يعلم أنّ الهواء فوقه يردّ عنه شيئًا.",
      caution: "Graded a fit, not a proof, and for a plain reason: the Quran supplies its own explanation of what the roof is guarded from, and it is not meteors — it is the devils who try to listen. A reader who replaces the Book's stated reason with ozone has not strengthened the verse; he has swapped its meaning for one he finds more impressive. What can be said honestly is smaller and sturdier: the sky is described as built and as guarding, and it does both.",
      cautionAr: "دُرجت موافقةً لا برهانًا، والسببُ ظاهر: فالقرآنُ ذكر ممّ حُفظ السقف، وليس النيازك، وإنما الشياطينُ الذين يسترقون السمع. ومن أبدل علّةَ الكتاب المنصوصة بالأوزون لم يُقوِّ الآية، وإنما استبدل بمعناها معنًى يراه أوقع. والذي يُقال بصدقٍ أقلُّ من ذلك وأثبت: أنّ السماء وُصفت بأنها بناءٌ وأنها تحفظ، وهي كذلك.",
      grade: "partial",
      keys: ["sky", "atmosphere", "ozone", "magnetosphere", "meteors", "roof", "bina", "protected ceiling", "السماء", "بناء", "سقف محفوظ", "الأوزون", "الغلاف الجوي", "النيازك", "المجال المغناطيسي"]
    }, {
      id: "mi-2-26",
      ayah: 26,
      title: "“A mosquito, or what is above it” — and the reading that means smaller",
      titleAr: "﴿بَعُوضَةٗ فَمَا فَوۡقَهَاۚ﴾ — والقراءةُ التي تعني ما هو أصغر",
      verse: "إِنَّ ٱللَّهَ لَا يَسۡتَحۡيِۦٓ أَن يَضۡرِبَ مَثَلٗا مَّا بَعُوضَةٗ فَمَا فَوۡقَهَاۚ",
      verseEn: "Indeed, Allah is not timid to present an example — that of a mosquito or what is above it.",
      says: "The verse answers people who mocked the Quran for drawing a parable from an insect. What is argued over is the last phrase: **what is above it**. Above it in size — anything larger — or above it in smallness: beyond it, smaller still.",
      saysAr: "الآيةُ جوابٌ لمن عاب على القرآن ضربَ المثل بحشرة. وموضعُ النزاع آخرُها: **فما فوقها**. أفوقها في الكِبَر — أي ما هو أكبر — أم فوقها في الصِّغَر: أي ما جاوزها فكان أدقّ منها؟",
      classical: "Both readings are old and the classical tafsirs carry them side by side; neither was produced by a modern reader looking for a discovery. And on either reading the point of the verse is the same — no creature is too small to carry a proof.",
      classicalAr: "القراءتان قديمتان، وكتبُ التفسير تحملهما جميعًا، ولم تُولّد واحدةٌ منهما قراءةٌ حديثةٌ تطلب اكتشافًا. والمعنى على الوجهين واحد: أنه لا يصغر خلقٌ عن أن يُضرب به المثل.",
      science: "Under the second reading, the verse names a range that stayed invisible for a thousand years. Robert Hooke's *Micrographia* (1665) drew a flea and a louse at a magnification nobody had seen. Antonie van Leeuwenhoek described single-celled life in 1674 and bacteria in 1676. Beside what is now known to live on and inside a mosquito, the mosquito is enormous.",
      scienceAr: "وعلى القراءة الثانية تكون الآيةُ قد سمّت عالمًا ظلّ خفيًّا ألفَ سنة. فقد رسم روبرت هوك في كتابه «ميكروغرافيا» (١٦٦٥م) البرغوثَ والقملةَ بتكبيرٍ لم يره أحدٌ قبله. ووصف أنطوني فان ليفنهوك الكائناتِ وحيدةَ الخليّة سنة ١٦٧٤م، والبكتيريا سنة ١٦٧٦م. وإذا قيست البعوضةُ بما عُرف اليوم أنه يعيش عليها وفيها كانت البعوضةُ عظيمة.",
      when: "Hooke, *Micrographia*, 1665. Leeuwenhoek's letters to the Royal Society, 1674 and 1676. Before the compound microscope there was no way to see anything smaller than a mosquito, and no reason for a reader to expect that anything was there.",
      whenAr: "هوك، «ميكروغرافيا»، سنة ١٦٦٥م. ورسائلُ ليفنهوك إلى الجمعية الملكية سنتي ١٦٧٤م و١٦٧٦م. وقبل المجهر المركّب لم يكن إلى رؤية ما دون البعوضة سبيل، ولا كان للقارئ ما يحمله على توقّع شيءٍ هناك.",
      caution: "A fit, and deliberately not more. The verse is about parables, not about biology; the smaller reading is one of two; and the classical scholars who held it were not describing microbes — they were saying that smallness is no objection. Anyone who presents this as proof of a hidden fact should be asked why the same verse works equally well on the other reading.",
      cautionAr: "موافقةٌ لا تزيد على ذلك عمدًا. فالآيةُ في الأمثال لا في الأحياء؛ وقراءةُ الصِّغَر إحدى قراءتين؛ والذين قالوا بها من المتقدّمين لم يكونوا يصفون كائناتٍ دقيقة، وإنما يقولون إنّ الصغر ليس اعتراضًا. ومن جعلها برهانًا على خبرٍ مخبوءٍ فليُسأل: ولمَ استقامت الآيةُ على الوجه الآخر كما استقامت على هذا؟",
      grade: "partial",
      keys: ["mosquito", "microscope", "bacteria", "microbes", "smaller", "parable", "البعوضة", "المجهر", "البكتيريا", "الكائنات الدقيقة", "فما فوقها", "المثل"]
    }, {
      id: "mi-2-29",
      ayah: 29,
      title: "The claim that the seven heavens are the layers of the atmosphere",
      titleAr: "دعوى أنّ السماوات السبع هي طبقاتُ الغلاف الجويّ",
      verse: "ثُمَّ ٱسۡتَوَىٰٓ إِلَى ٱلسَّمَآءِ فَسَوَّىٰهُنَّ سَبۡعَ سَمَٰوَٰتٖۚ",
      verseEn: "Then He directed Himself to the heaven and made them seven heavens.",
      says: "The verse says seven heavens, and says nothing at all about air. The claim in circulation is that these are the layers meteorology names — troposphere, stratosphere, and the rest — and that the Quran counted them before anyone measured them.",
      saysAr: "الآيةُ تقول: سبعَ سماوات، ولا تقول عن الهواء شيئًا. والدعوى المنتشرة أنّ هذه هي الطبقاتُ التي يُسمّيها علمُ الأرصاد — التروبوسفير والستراتوسفير وما بعدهما — وأنّ القرآن عدّها قبل أن يقيسها أحد.",
      classical: "The mufassirun understood seven created heavens, one above another. And the Quran fixes where the lowest one is: it is the heaven **adorned with lamps** (41:12, 67:5) — that is, with the stars. Stars are not in the atmosphere, so the classical reading places the heavens far beyond the air, and does so on the Book's own wording.",
      classicalAr: "فهم المفسّرون سبعَ سماواتٍ مخلوقةً بعضُها فوق بعض. وقد بيّن القرآنُ موضعَ أدناها: فهي التي **زُيّنت بالمصابيح** (٤١:١٢، ٦٧:٥) — أي بالنجوم. والنجومُ ليست في الغلاف الجويّ، فالقراءةُ القديمة تجعل السماوات وراء الهواء بكثير، وتفعل ذلك بنصّ الكتاب نفسِه.",
      science: "The atmosphere is divided by temperature behaviour, and the usual division is five: troposphere, stratosphere, mesosphere, thermosphere, exosphere. Other schemes count differently, and layers such as the ionosphere and the ozone layer overlap these rather than stacking neatly beside them. To arrive at seven, the counting has to be chosen to reach seven.",
      scienceAr: "يُقسَّم الغلافُ الجويّ بحسب سلوك الحرارة، والقسمةُ المشهورة خمس: التروبوسفير، والستراتوسفير، والميزوسفير، والثيرموسفير، والإكسوسفير. ولغير هؤلاء قسمةٌ أخرى، وطبقاتٌ كالأيونوسفير وطبقةِ الأوزون متداخلةٌ مع تلك لا مرصوفةٌ إلى جانبها. فمن أراد سبعًا احتاج أن يختار العدّ الذي يبلغ به سبعًا.",
      when: "The layered picture begins with Léon Teisserenc de Bort's discovery of the stratosphere in 1902, and was filled in through the twentieth century. There has never been a settled count of seven.",
      whenAr: "ابتدأت صورةُ الطبقات باكتشاف ليون تيسران دي بور للستراتوسفير سنة ١٩٠٢م، ثم اكتملت خلال القرن العشرين. ولم يستقرّ العدُّ قطُّ على سبع.",
      caution: "This card is here refuted, not omitted, because a reader will meet the claim elsewhere and should meet the answer first. The honest position is stronger than the claim: the Quran says seven heavens and tells you the nearest of them holds the stars. Tying that to a five-layer classification of the air, which scientists revise as they please, hangs a verse of the Book on a textbook diagram — and the diagram does not even give you seven.",
      cautionAr: "وُضعت هذه البطاقةُ مردودةً لا محذوفة، لأنّ القارئ سيلقى الدعوى في غير هذا الموضع، فالأولى أن يلقى جوابها أوّلًا. والقولُ الصادقُ أقوى من الدعوى: فالقرآنُ يقول سبعَ سماوات، ويُخبرك أنّ أدناها فيها النجوم. وأمّا ربطُ ذلك بتقسيمٍ خماسيٍّ للهواء يُغيّره أهلُ الاختصاص متى شاؤوا فتعليقٌ لآيةٍ من الكتاب على رسمٍ في كتابٍ مدرسيّ — ورسمٌ لا يُعطيك سبعًا أصلًا.",
      grade: "not-established",
      keys: ["seven heavens", "atmosphere", "layers", "troposphere", "stratosphere", "السماوات السبع", "طبقات الغلاف الجوي", "التروبوسفير", "الستراتوسفير", "سبع سماوات"]
    }],

  "4": [{
      id: "mi-4-56",
      ayah: 56,
      title: "Skins replaced, so that the punishment is felt again",
      titleAr: "تبديلُ الجلود ليعود الذوق",
      verse: "كُلَّمَا نَضِجَتۡ جُلُودُهُم بَدَّلۡنَٰهُمۡ جُلُودًا غَيۡرَهَا لِيَذُوقُواْ ٱلۡعَذَابَۗ",
      verseEn: "Every time their skins are roasted through, We will replace them with other skins so they may taste the punishment.",
      says: "The verse does not say the skins are replaced because skin is what is being punished. It gives the purpose: **so that they may taste**. Renewing the skin is what keeps the sensation available — which rests on the skin being where the tasting happens.",
      saysAr: "لم تقل الآيةُ إنّ الجلود تُبدَّل لأنّ الجلدَ هو المعذَّب، وإنما ذكرت العلّة: **ليذوقوا**. فتجديدُ الجلد هو الذي يُبقي الإحساس ممكنًا — وهذا مبنيٌّ على أنّ الجلد موضعُ الذوق.",
      classical: "The mufassirun read it exactly this way long before anyone spoke of nerves: the skin is renewed so that the punishment continues to be felt, because a burned-away surface no longer feels. The classical explanation is the same explanation, in the language of its own time.",
      classicalAr: "قرأها المفسّرون على هذا الوجه بعينه قبل أن يُتكلَّم في الأعصاب بزمانٍ طويل: يُجدَّد الجلدُ ليبقى العذابُ محسوسًا، لأنّ ما احترق من الظاهر لا يُحسّ. فتفسيرُ المتقدّمين هو التفسيرُ نفسُه بلغة زمانهم.",
      science: "Pain is carried by nerve endings — nociceptors — and they are densest in the skin. The clinical consequence is well known to anyone who treats burns: a full-thickness burn, which destroys the nerve endings with the skin, is numb in its centre, while the shallower burn around it is severely painful. Feeling returns as the skin regenerates.",
      scienceAr: "الألمُ تحمله النهاياتُ العصبيّة — المستقبلاتُ الحسّيّة للألم — وأكثفُ ما تكون في الجلد. ويعرف ذلك كلُّ من عالج الحروق: فالحرقُ العميق الذي يُتلف النهايات العصبيّة مع الجلد يكون وسطُه خَدِرًا، وما حوله من الحرق الأسطح شديدَ الإيلام. ويعود الإحساسُ مع تجدّد الجلد.",
      when: "The mapping of distinct sensory spots in the skin was done by Magnus Blix (1882), Alfred Goldscheider (1884) and Max von Frey (1890s); the modern account of nociceptors followed. Nobody in the seventh century could have located pain in the skin as a matter of anatomy.",
      whenAr: "رسم مواضعَ الإحساس المتمايزة في الجلد ماغنوس بليكس (١٨٨٢م) وألفريد غولدشايدر (١٨٨٤م) وماكس فون فراي (في تسعينيّات القرن التاسع عشر)، ثم جاء وصفُ مستقبلات الألم الحديث. ولم يكن لأحدٍ في القرن السابع الميلاديّ أن يُحدّد موضع الألم في الجلد تحديدًا تشريحيًّا.",
      caution: "Graded a fit, and the reason is the classical reading itself: it already says renewed skin means renewed pain, and it needed no anatomy to say it. What is worth noticing is narrower — that the verse locates the tasting in the skin and ties its renewal to the sensation, which is what a burns unit sees. It is a verse about the Hereafter, and no laboratory can examine what it describes.",
      cautionAr: "دُرجت موافقةً، والعلّةُ قراءةُ المتقدّمين نفسُها: فقد قالوا إنّ تجديد الجلد تجديدٌ للألم، ولم يحتاجوا إلى تشريح. والذي يستحقّ الالتفات أضيقُ من ذلك: أنّ الآية جعلت الذوقَ في الجلد، وربطت تجديدَه بالإحساس، وهو ما يراه أهلُ الحروق. وهي آيةٌ في الآخرة، ولا مختبر يفحص ما تصفه.",
      grade: "partial",
      keys: ["skin", "pain", "nerves", "burns", "nociceptors", "hellfire", "الجلد", "الألم", "الأعصاب", "الحروق", "تبديل الجلود", "النار"]
    }],

  "7": [{
      id: "mi-7-54",
      ayah: 54,
      title: "The night pursuing the day, rapidly",
      titleAr: "الليلُ يطلب النهار حثيثًا",
      verse: "يُغۡشِي ٱلَّيۡلَ ٱلنَّهَارَ يَطۡلُبُهُۥ حَثِيثٗا",
      verseEn: "He covers the night with the day, pursuing it rapidly.",
      says: "The two are not described as taking turns. One **pursues** the other — talab, the verb for chasing something — and does so hathith: quickly, without slackening. A chase has a direction, a speed, and no arrival.",
      saysAr: "لم يُوصفا بالتعاقب، وإنما أحدُهما **يطلب** الآخر — والطلبُ فعلُ من يسعى وراء الشيء — ويطلبه حثيثًا: مُسرعًا لا يفتر. وللمطاردة جهةٌ وسرعةٌ ولا انتهاء.",
      classical: "The mufassirun read it as the swift succession of night and day, each following the other closely — a description of what anyone can watch at dusk. Nothing in their reading depends on the earth moving, and they did not claim it did.",
      classicalAr: "حمله المفسّرون على سرعة تعاقب الليل والنهار، يتبع كلٌّ منهما صاحبَه حثيثًا — وهو وصفُ ما يراه كلُّ أحدٍ عند الغروب. وليس في قراءتهم شيءٌ متوقّفٌ على حركة الأرض، ولم يدّعوا ذلك.",
      science: "On a rotating earth the boundary between night and day is a line — the terminator — and it is genuinely in motion: it sweeps westward at about 1,670 kilometres an hour at the equator, slowing towards the poles. Photographs from orbit show it as a moving edge crossing continents, exactly a pursuit that never catches up.",
      scienceAr: "وعلى أرضٍ تدور يكون الفاصلُ بين الليل والنهار خطًّا — يُسمّى خطَّ الشفق — وهو متحرّكٌ حقًّا: يجري غربًا بنحو ألفٍ وستّمئة وسبعين كيلومترًا في الساعة عند خطّ الاستواء، ويبطؤ كلّما اتّجهت إلى القطبين. وصورُ المدار تُريه حدًّا متحرّكًا يعبر القارّات، وهو المطاردةُ التي لا تُدرَك.",
      when: "The earth's rotation was argued from Copernicus (1543) onward and demonstrated directly by Foucault's pendulum in 1851; the terminator was first photographed from space in the twentieth century.",
      whenAr: "قِيل بدوران الأرض من كوبرنيكوس (١٥٤٣م) فمن بعده، وبُرهن عليه برهانًا مباشرًا ببندول فوكو سنة ١٨٥١م؛ وأمّا خطُّ الشفق فأوّلُ ما صُوّر من الفضاء في القرن العشرين.",
      caution: "A fit, not a proof, and the classical reading is the reason: “following closely and quickly” is a complete account of the words, and it is what the first listeners understood. What the verse does not contain is a claim about rotation, a speed, or a direction. The honest observation is that the Quran chose the language of a chase for something that turns out to be one.",
      cautionAr: "موافقةٌ لا برهان، والعلّةُ قراءةُ المتقدّمين: فإنّ «يتبعه سريعًا» بيانٌ تامٌّ للّفظ، وهو الذي فهمه أوّلُ السامعين. وليس في الآية دعوى دوران، ولا سرعةٌ، ولا جهة. والملحوظةُ الصادقة أنّ القرآن اختار لفظ المطاردة لأمرٍ تبيّن أنه مطاردة.",
      grade: "partial",
      keys: ["night", "day", "terminator", "rotation", "earth turns", "pursuit", "الليل", "النهار", "خط الشفق", "دوران الأرض", "يطلبه حثيثا"]
    }],

  "6": [{
    id: "mi-6-125",
    ayah: 125,
    title: "The chest tightens as you climb",
    titleAr: "الصدرُ يضيق كلّما ارتفعتَ",
    verse: "وَمَن يُرِدۡ أَن يُضِلَّهُۥ يَجۡعَلۡ صَدۡرَهُۥ ضَيِّقًا حَرَجٗا كَأَنَّمَا يَصَّعَّدُ فِي ٱلسَّمَآءِۚ",
    verseEn: "And whoever He wants to misguide - He makes his breast tight and constricted as though he were climbing into the sky.",
    says: "The verse is about guidance, and it reaches for a comparison to make the feeling concrete: a chest so tight it is like the chest of a man climbing upward into the sky. The simile is doing physical work. It only lands if going up actually does that to a chest.",
    saysAr: "الآيةُ في الهداية، وضربت مثلًا يُقرّب الإحساس: صدرٌ ضيّقٌ حرِج كصدر رجلٍ يصعد في السماء. والتشبيهُ هنا يحمل معنًى محسوسًا، ولا يستقيم إلا إذا كان الصعودُ يفعل هذا بالصدر حقًّا.",
    classical: "The mufassirun took it as a picture of extreme constriction and difficulty, and several noted the comparison to ascending because a man rising into the air finds it hard. They were reading it as a vivid image of hardship, not as a statement about air pressure — and nothing in their reading depends on one.",
    classicalAr: "حمَله المفسّرون على تصوير شدّة الضيق والحرج، وذكر بعضُهم أنّ المشبَّه به الصعودُ لأنّ الصاعدَ في الهواء يجد المشقّة. فكانوا يقرؤونها صورةً بليغةً للشدّة، لا خبرًا عن ضغط الهواء، وليس في قراءتهم شيءٌ متوقّفٌ على ذلك.",
    science: "Air pressure falls with altitude, and with it the partial pressure of oxygen. Above roughly 2,500 metres the body begins to struggle; at the height of the great peaks a person cannot survive long without supplementary oxygen. The subjective symptom is exactly the one the verse names: breathlessness and a tight chest.",
    scienceAr: "ضغطُ الهواء ينقص كلّما ارتفعت، وينقص معه الضغطُ الجزئيّ للأكسجين. فمن نحو ألفين وخمسمئة مترٍ يبدأ الجسدُ يعاني، وعلى القمم العالية لا يبقى الإنسانُ طويلًا بغير أكسجينٍ إضافيّ. والعَرَضُ الذي يُحسُّ به هو عينُ ما سمّته الآية: ضيقُ النفَس والصدر.",
    when: "Evangelista Torricelli built the barometer in 1643. In 1648 Blaise Pascal had the experiment carried up the Puy de Dôme and the mercury column fell with height — the first demonstration that air presses less the higher you go. Before that, nobody had been high enough, or instrumented enough, to know it.",
    whenAr: "صنع إيفانجليستا توريتشيلّي البارومتر سنة ١٦٤٣م. وفي سنة ١٦٤٨م أمر بليز باسكال بحمل التجربة إلى قمّة «بوي دو دوم»، فنقص عمودُ الزئبق بالارتفاع — وكان ذلك أوّلَ برهانٍ على أنّ الهواء يخفّ ضغطُه كلّما علوت. وقبل ذلك لم يكن أحدٌ قد بلغ ارتفاعًا كافيًا ولا ملَك آلةً كافية ليعلمه.",
    grade: "strong",
    caution: "The strength here is in the simile being specific and correct, not in the verse teaching physics. Its subject is the heart, and it stays the subject.",
    cautionAr: "وقوّةُ الأمر هنا في أنّ التشبيه دقيقٌ مطابق، لا في أنّ الآية تُعلّم الفيزياء. فموضوعُها القلب، وهو موضوعُها إلى آخرها.",
    keys: ["altitude","oxygen","pressure","mountain","breathing","chest","climb",
           "الارتفاع","الأكسجين","الضغط","الجبل","التنفس","الصدر","الصعود"]
  }],

  "16": [{
    id: "mi-16-15",
    ayah: 15,
    title: "Mountains cast in, so the earth does not sway",
    titleAr: "جبالٌ أُلقيت حتى لا تميد الأرض",
    verse: "وَأَلۡقَىٰ فِي ٱلۡأَرۡضِ رَوَٰسِيَ أَن تَمِيدَ بِكُمۡ",
    verseEn: "And He has cast into the earth firmly set mountains, lest it shift with you",
    says: "Two words are doing the work. أَلۡقَى — cast, thrown down INTO the earth, not set upon it. And رَوَٰسِيَ — anchors, the same root as a ship's mooring. Read plainly, a mountain here is something driven into the ground and holding, not a heap piled on the surface. Surah An-Naba adds the other half of the picture: أَوۡتَادٗا, stakes — and most of a stake is the part you cannot see.",
    saysAr: "كلمتان تحملان المعنى. **أَلْقَى** — أي طرح وألقى **في** الأرض لا **عليها**. و**رَوَاسِيَ** — أي مُرسِيات، من الرَّسْو الذي تُرسى به السفينة. فالجبلُ بظاهر اللفظ شيءٌ مغروزٌ ممسِك، لا كومةٌ مصبوبةٌ على السطح. وتزيد سورةُ النبأ النصفَ الآخر من الصورة: **أَوْتَادًا** — والوتدُ أكثرُه ما لا تراه.",
    classical: "The classical commentators read it as the earth being made steady for its people: without the mountains it would tilt and rock with them. That is a complete reading and needs no geology. What they did not have was any way to know whether a mountain extends downward.",
    classicalAr: "قرأها المفسّرون على أنّ الأرض ثُبِّتت لأهلها: لولا الجبالُ لمادت بهم واضطربت. وهي قراءةٌ تامّةٌ لا تحتاج إلى علم طبقات. غير أنه لم يكن عندهم سبيلٌ إلى معرفة هل للجبل امتدادٌ إلى أسفل أم لا.",
    science: "Mountains have roots. A range floats on the denser mantle like a block of wood on water, and the higher it stands the deeper it sits — under the Himalaya the crust reaches several tens of kilometres down, far more than the height above sea level. The buried part is the larger part, which is what a stake is.",
    scienceAr: "للجبال جذورٌ في الأرض. فالسلسلةُ الجبليّةُ طافيةٌ على الوشاح الأكثف كطفو الخشبة على الماء، وكلّما علت غاصت أعمق — فتحت الهيمالايا تمتدّ القشرةُ عشراتِ الكيلومترات، وهو أضعافُ ارتفاعها فوق سطح البحر. فالمدفونُ منها أكبرُ من الظاهر، وذلك هو الوتد.",
    when: "In the 1850s the survey of India kept getting the wrong answer: the Himalaya pulled on a plumb line far less than its bulk should. In 1855 George Airy and John Henry Pratt published the explanation within months of each other — Airy's being that mountains have deep low-density roots. The word for it, isostasy, was coined later.",
    whenAr: "في خمسينيّات القرن التاسع عشر ظلّ مسحُ الهند يخرج بنتيجةٍ خاطئة: فجذبُ الهيمالايا لخيط الشاقول أقلُّ بكثيرٍ ممّا يقتضيه حجمُها. وفي سنة ١٨٥٥م نشر جورج إيري وجون هنري برات تفسيرَ ذلك في شهورٍ متقاربة — وكان تفسيرُ إيري أنّ للجبال جذورًا عميقةً أخفَّ كثافة. ثم صيغ لهذا مصطلحُ «التوازن الأرضيّ» بعد ذلك.",
    grade: "strong",
    caution: "Be careful with the second half. أَن تَمِيدَ بِكُمۡ is about the earth being steady underfoot; it is NOT a claim that mountains prevent earthquakes, and the biggest earthquakes happen in exactly the mountain belts. Do not stretch it that way — the stake is the strong part of this card.",
    cautionAr: "واحذر النصفَ الثاني. فقولُه **أَن تَمِيدَ بِكُمْ** في استقرار الأرض تحت الأقدام، وليس دعوى أنّ الجبال تمنع الزلازل — بل أعظمُ الزلازل تقع في أحزمة الجبال نفسها. فلا تُحمَّل الآيةُ ذلك؛ فالوتدُ هو موضعُ القوّة في هذه البطاقة.",
    keys: ["mountains","roots","stakes","isostasy","crust","earthquake","awtad",
           "الجبال","الجذور","الأوتاد","الرواسي","القشرة","الزلازل","تميد"]
  },
  {
      id: "mi-16-69",
      ayah: 68,
      title: "The bee, and the healing in what comes out of it",
      titleAr: "النحل، والشفاء فيما يخرج منها",
      verse: "وَأَوۡحَىٰ رَبُّكَ إِلَى ٱلنَّحۡلِ أَنِ ٱتَّخِذِي مِنَ ٱلۡجِبَالِ بُيُوتٗا وَمِنَ ٱلشَّجَرِ وَمِمَّا يَعۡرِشُونَ ۝ ثُمَّ كُلِي مِن كُلِّ ٱلثَّمَرَٰتِ فَٱسۡلُكِي سُبُلَ رَبِّكِ ذُلُلٗاۚ يَخۡرُجُ مِنۢ بُطُونِهَا شَرَابٞ مُّخۡتَلِفٌ أَلۡوَٰنُهُۥ فِيهِ شِفَآءٞ لِّلنَّاسِۚ",
      verseEn: "And your Lord revealed to the bee: take houses in the mountains, and in the trees, and in what they build. Then eat of all the fruits and travel the paths of your Lord, made smooth. There comes out of their bellies a drink of varying colours, in which there is healing for people.",
      says: "Three things: the bee is told where to live, it is told to eat and to travel paths **made smooth** for it, and what comes out of it is a drink of different colours with **healing in it for people**.",
      saysAr: "ثلاثةُ أمور: أُمرت النحلُ أين تسكن، وأُمرت أن تأكل وأن تسلك سبلًا **ذُلّلت** لها، وما يخرج منها شرابٌ مختلفٌ ألوانُه **فيه شفاءٌ للناس**.",
      classical: "The healing is the CLASSICAL reading, not a modern one. At-Tabari records both views — that the healing is in the honey, and that it is in the Quran — and the great majority took it to be the honey, because that is what the sentence is about. Ibn Kathir reports the hadith of the man whose brother had a complaint of the stomach and was told three times to give him honey, and he recovered (al-Bukhari 5684).\n\nSo honey as a medicine is not something science told Muslims. It is what the commentators said, and what the physicians of every ancient people already practised.",
      classicalAr: "الشفاءُ هو القولُ **القديم** لا الحديث. فقد ذكر الطبريُّ الوجهين — أنّ الشفاء في العسل، وأنه في القرآن — وأخذ جمهورُ المفسّرين بالعسل لأنّ الكلام فيه. وروى ابنُ كثير حديثَ الرجل الذي اشتكى أخوه بطنَه فقيل له ثلاثًا: اسقه عسلًا، فبرأ (البخاري ٥٦٨٤).\n\nفليس العلمُ هو الذي أخبر المسلمين أنّ في العسل دواء، بل هو قولُ المفسّرين، وعملُ أطبّاء الأمم كلِّها قبلهم.",
      science: "What was added is WHY, and it is specific. Honey carries an enzyme the bee puts into it, glucose oxidase, which releases hydrogen peroxide slowly as the honey is diluted — isolated and named *inhibine* by Dold in 1937. Manuka honey carries a second agent as well, methylglyoxal, identified by Mavric and Henle in 2008. Honey also holds so little free water that bacteria cannot grow in it.\n\nThat is why medical-grade honey dressings are licensed and used on wounds today, rather than being folk practice: Peter Molan's laboratory work from 1988 onward put numbers on it.",
      scienceAr: "والذي أُضيف هو **لماذا**، وهو جوابٌ دقيق. ففي العسل إنزيمٌ تضعه فيه النحلة، أكسيداز الغلوكوز، يُطلق فوق أكسيد الهيدروجين ببطءٍ كلّما خُفّف العسل — عزله دولد وسمّاه «إنهيبين» سنة ١٩٣٧م. وفي عسل المانوكا مادّةٌ ثانيةٌ أيضًا، الميثيل غليوكسال، عرّفها مافريتش وهِنله سنة ٢٠٠٨م. وفي العسل كذلك من قلّة الماء الحرّ ما يمنع البكتيريا أن تنمو فيه.\n\nولهذا صارت ضماداتُ العسل الطبيّ مرخّصةً تُوضع على الجروح اليوم، لا عملًا شعبيًّا: فقد وضع بيتر مولان لذلك أرقامًا في مختبره من سنة ١٩٨٨م.",
      when: "Dold, 1937, for the peroxide; Molan from 1988 for the clinical work; Mavric and Henle, 2008, for methylglyoxal. Medical-grade honey was licensed for wound care in Australia and the United Kingdom in the 2000s.",
      whenAr: "دولد سنة ١٩٣٧م في فوق الأكسيد، ومولان من سنة ١٩٨٨م في العمل السريريّ، ومافريتش وهنله سنة ٢٠٠٨م في الميثيل غليوكسال. ورُخّص العسلُ الطبيُّ لعلاج الجروح في أستراليا وبريطانيا في العقد الأوّل من هذا القرن.",
      grade: "partial",
      caution: "Two warnings, and the second is the one that gets people caught.\n\nFirst: the verse says healing **in it**, not healing **of everything**. It is not a claim that honey cures every illness, and reading it that way has done real harm.\n\nSecond, and this is the argument to drop: people say the feminine verbs — eat, travel — prove the Quran knew the forager bees are female. They do not. نحل is a collective noun and Arabic treats it as feminine as a matter of ordinary grammar; the same feminine would be used whatever the bees' sex. Quoting that argument hands the other side an easy win, and takes the rest of the card down with it.",
      cautionAr: "تحذيران، والثاني هو الذي يُؤخذ به الناس.\n\nالأوّل: قالت الآيةُ شفاءٌ **فيه**، لا شفاءٌ **من كلّ داء**. فليست دعوى أنّ العسل يشفي كلّ مرض، وقد أضرّ هذا الفهمُ أناسًا.\n\nوالثاني، وهو الحجّةُ التي ينبغي تركُها: يقول بعضُهم إنّ تأنيث الأفعال — كُلي، فاسلكي — دليلٌ على أنّ القرآن علم أنّ النحل العامل إناث. وليس كذلك. فالنحلُ اسمُ جنسٍ جمعيّ تُعامله العربيةُ معاملةَ المؤنّث على القاعدة، ولو كانت ذكورًا لجاء التأنيثُ نفسُه. ومن احتجّ بهذا أعطى خصمَه نصرًا سهلًا، وأسقط معه سائرَ ما في البطاقة.",
      keys: ["bee","honey","healing","shifa","glucose oxidase","manuka","Molan","النحل","العسل","شفاء","دواء","الجروح","المانوكا"]
    }],

  "21": [{
    id: "mi-21-30",
    ayah: 30,
    title: "Joined, then split apart — and every living thing from water",
    titleAr: "كانتا رتقًا ففتقناهما — وكلُّ حيٍّ من الماء",
    verse: "أَوَلَمۡ يَرَ ٱلَّذِينَ كَفَرُوٓاْ أَنَّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ كَانَتَا رَتۡقٗا فَفَتَقۡنَٰهُمَاۖ وَجَعَلۡنَا مِنَ ٱلۡمَآءِ كُلَّ شَيۡءٍ حَيٍّۚ",
    verseEn: "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them and made from water every living thing?",
    says: "Two separate statements. The heavens and the earth were رَتْق — sewn shut, one closed mass — and were then فَتْق, torn open. And: every living thing was made from water.",
    saysAr: "خبران منفصلان. الأول: ﴿أَنَّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ كَانَتَا **رَتۡقٗا**﴾ — أي ملتحمتين مسدودتين شيئًا واحدًا — ثم **فُتِقتا** أي شُقّتا. والثاني: أنّ كلَّ شيءٍ حيٍّ جُعل من الماء.",
    classical: "This is where honesty matters most on this page. The classical mufassirun overwhelmingly read the first half as RAIN AND PLANTS: the sky was closed and gave no rain, so it was opened; the earth was closed and gave no growth, so it was split. That reading is old, it is well attested, and it requires no cosmology whatever. Anyone presenting the Big Bang reading as the only possible one is not telling you the whole picture.",
    classicalAr: "وهنا موضعُ الأمانة في هذه الصفحة. فجمهورُ المفسّرين حملوا النصفَ الأوّل على **المطر والنبات**: كانت السماءُ رتقًا لا تُمطر ففُتقت بالمطر، وكانت الأرضُ رتقًا لا تُنبت ففُتقت بالنبات. وهذه قراءةٌ قديمةٌ ثابتةٌ لا تحتاج إلى علم فلكٍ ألبتّة. ومن قدّم قراءةَ الانفجار العظيم على أنها الوجهُ الوحيد فلم يُطلعك على الصورة كاملة.",
    science: "The second half stands on its own and is not disputed: living cells are mostly water, water is the medium every known biochemical reaction runs in, and no life has ever been found without it. The first half fits the standard cosmological model, in which the observable universe expands from an extremely hot dense state — but it fits as a description, not as a derivation.",
    scienceAr: "أمّا النصفُ الثاني فقائمٌ بنفسه ولا نزاع فيه: فالخليّةُ الحيّةُ أكثرُها ماء، والماءُ هو الوسطُ الذي تجري فيه كلُّ تفاعلٍ حيويٍّ معروف، ولم يُعثر على حياةٍ قطُّ بغيره. وأمّا النصفُ الأوّل فيوافق النموذجَ الكونيَّ المعتمد الذي يتمدّد فيه الكونُ المرصود من حالٍ شديدةِ الحرارة والكثافة — لكنها موافقةُ وصفٍ لا استنباط.",
    when: "The expansion was measured by Edwin Hubble in 1929, on Georges Lemaitre's 1927 model. The hot dense beginning was confirmed for most physicists when Penzias and Wilson found the cosmic microwave background in 1964. That water is essential to life was settled far earlier and was never really in doubt.",
    whenAr: "قاس إدوين هابل التمدّد سنة ١٩٢٩م، على نموذج جورج لوميتر سنة ١٩٢٧م. وتأكّدت البدايةُ الحارّةُ الكثيفةُ عند أكثر الفيزيائيين حين اكتشف بنزياس وويلسون إشعاعَ الخلفيّة الكونيّ سنة ١٩٦٤م. وأمّا كونُ الماء أصلًا للحياة فقد استقرّ قبل ذلك بكثيرٍ ولم يكن موضعَ شكٍّ حقيقيّ.",
    grade: "partial",
    caution: "Graded a fit, not a proof — because the classical reading of the first half is complete without any of this. The water half is the stronger half, and it is the half people quote least.",
    cautionAr: "ودرجتُها موافقةٌ لا برهان — لأنّ قراءة المفسّرين للنصف الأوّل تامّةٌ من غير شيءٍ من هذا. والنصفُ الخاصُّ بالماء أقوى، وهو الذي يقلُّ نقلُ الناس له.",
    keys: ["big bang","universe","ratq","fatq","water","life","cosmology",
           "الانفجار العظيم","الكون","رتق","فتق","الماء","الحياة","الفلك"]
  }],

  "24": [{
    id: "mi-24-40",
    ayah: 40,
    title: "Waves above waves, and a hand you cannot see",
    titleAr: "موجٌ فوقه موج، ويدٌ لا تكاد تراها",
    verse: "أَوۡ كَظُلُمَٰتٖ فِي بَحۡرٖ لُّجِّيّٖ يَغۡشَىٰهُ مَوۡجٞ مِّن فَوۡقِهِۦ مَوۡجٞ مِّن فَوۡقِهِۦ سَحَابٞۚ ظُلُمَٰتُۢ بَعۡضُهَا فَوۡقَ بَعۡضٍ إِذَآ أَخۡرَجَ يَدَهُۥ لَمۡ يَكَدۡ يَرَىٰهَاۗ",
    verseEn: "Or [they are] like darknesses within an unfathomable sea which is covered by waves, upon which are waves, over which are clouds - darknesses, some of them upon others. When one puts out his hand [therein], he can hardly see it.",
    says: "The picture is built in exact layers, from the bottom up: a deep sea; a wave covering it; ANOTHER wave above that one; and cloud above them both. Then the consequence: darkness stacked on darkness, and a man who puts out his own hand can hardly see it. It is the description of a place, given by someone describing what it is like to be in it.",
    saysAr: "الصورةُ مبنيّةٌ طبقاتٍ مرتّبةً من أسفلَ إلى أعلى: بحرٌ **لُجِّيّ** أي عميقٌ كثيرُ الماء؛ يغشاه موج؛ ومن فوق ذلك الموجِ **موجٌ آخر**؛ ومن فوقهما سحاب. ثم النتيجة: ﴿ظُلُمَٰتُۢ بَعۡضُهَا فَوۡقَ بَعۡضٍ﴾، ورجلٌ يُخرج يدَه فلا يكاد يراها. وهو وصفُ موضعٍ ممّن يصف حالَ من هو فيه.",
    classical: "The mufassirun explained it as an image of piled-up darkness, and some noted that a sea has waves and that clouds hide the stars a sailor steers by. What they had no access to was the thing the verse puts in the middle: a second wave UNDER the first one. Nobody read it that way because nobody could have.",
    classicalAr: "فسّرها المفسّرون بأنها صورةٌ لتراكم الظلمات، ونبّه بعضُهم إلى أنّ للبحر موجًا وأنّ السحاب يحجب النجومَ التي يهتدي بها الملّاح. والذي لم يكن لهم إليه سبيلٌ هو ما وضعته الآيةُ في الوسط: **موجٌ تحت الموج**. فلم يقرأها أحدٌ كذلك لأنه لم يكن يستطيع.",
    science: "Two established facts. First, internal waves: at the boundary between water layers of different density there are waves that can be far larger than surface waves and are invisible from a ship — a wave beneath the wave, exactly stacked. Second, light: the sea absorbs it by depth, red first, then the rest. Below about 200 metres almost nothing is left; below about 1,000 metres there is no sunlight at all. A hand held out at depth genuinely cannot be seen.",
    scienceAr: "حقيقتان ثابتتان. الأولى **الموج الداخليّ**: فعند الحدّ الفاصل بين طبقتي ماءٍ مختلفتي الكثافة يتولّد موجٌ قد يكون أضخمَ من موج السطح بمراتٍ ولا يُرى من ظهر السفينة — موجٌ تحت الموج على الترتيب نفسه. والثانية **الضوء**: فالبحرُ يمتصّه بالعمق، الأحمرُ أوّلًا ثم سائرُ الألوان. فدون نحو مئتي مترٍ لا يكاد يبقى منه شيء، ودون نحو ألف مترٍ لا يصل ضوءُ الشمس ألبتّة. فاليدُ الممدودةُ في العمق لا تُرى حقًّا.",
    when: "Internal waves entered science through Fridtjof Nansen, whose ship was mysteriously slowed in Arctic water between 1893 and 1896 — the 'dead water' effect — and the mechanism was worked out afterwards; large ocean internal waves were first properly observed in the 1960s. The measurement of how light dies with depth belongs to the same modern period of oceanography. For most of human history the limit of an unaided diver was a few tens of metres, and every one of those metres was still lit.",
    whenAr: "دخل الموجُ الداخليّ في العلم عن طريق فريتيوف نانسن، إذ تباطأت سفينتُه على غير تفسيرٍ في ماء القطب بين سنتي ١٨٩٣م و١٨٩٦م — وهو ما سُمّي «الماء الميّت» — ثم فُسّرت الظاهرةُ بعده؛ ولم يُرصد الموجُ الداخليُّ المحيطيُّ الكبيرُ رصدًا محقّقًا إلا في ستّينيّات القرن العشرين. وقياسُ خُفوت الضوء بالعمق من الحقبة الحديثة نفسها في علم البحار. وقد كان أقصى ما يبلغه الغوّاصُ بلا آلةٍ طوالَ تاريخ البشر عشراتِ أمتارٍ معدودة، وكلُّ مترٍ منها ما يزال مضيئًا.",
    grade: "strong",
    caution: "The verse is a simile for a disbeliever's state, and it stays one. What is remarkable is not that it teaches oceanography — it does not — but that the picture it reaches for is accurate at a depth the people hearing it could not reach.",
    cautionAr: "والآيةُ مثَلٌ ضُرب لحال الكافر، وهي على ذلك إلى آخرها. وليس العجبُ أنها تُعلّم علمَ البحار — فليست تفعل — وإنما العجبُ أنّ الصورةَ التي ضربتها مطابقةٌ في عمقٍ لم يكن السامعون يبلغونه.",
    keys: ["sea","deep","waves","internal waves","darkness","light","diving","ocean",
           "البحر","العمق","الموج","الموج الداخلي","الظلمات","الضوء","الغوص","لجي"]
  },
  {
      id: "mi-24-43",
      ayah: 43,
      title: "The cloud driven, joined, heaped — and mountains of hail inside it",
      titleAr: "السحابُ يُزجى ثم يُؤلَّف ثم يُركَم — وفيه جبالٌ من بَرَد",
      verse: "أَلَمۡ تَرَ أَنَّ ٱللَّهَ يُزۡجِي سَحَابٗا ثُمَّ يُؤَلِّفُ بَيۡنَهُۥ ثُمَّ يَجۡعَلُهُۥ رُكَامٗا فَتَرَى ٱلۡوَدۡقَ يَخۡرُجُ مِنۡ خِلَٰلِهِۦ وَيُنَزِّلُ مِنَ ٱلسَّمَآءِ مِن جِبَالٖ فِيهَا مِنۢ بَرَدٖ",
      verseEn: "Do you not see that Allah drives clouds, then joins them together, then makes them a heap, and you see the rain come out from inside it — and He sends down from the sky, from mountains in it, of hail.",
      says: "Four steps in order: driven, joined, **heaped up**, and only then rain coming out from inside. Then hail, described as coming from **mountains** in the sky.",
      saysAr: "أربعُ خطواتٍ مرتّبة: يُزجى، ثم يُؤلَّف، ثم يُجعل **رُكامًا**، ثم عند ذلك يخرج الودقُ من خلاله. ثم البَرَد، موصوفًا بأنه ينزل من **جبالٍ** في السماء.",
      classical: "The mufassirun read رُكام as cloud piled on cloud, and the mountains as a likeness: masses so vast they are called mountains, as the Arabs called anything huge a mountain. That reading is complete in itself.",
      classicalAr: "فسّر المفسّرون الرُّكامَ بالسحاب يتراكم بعضُه فوق بعض، والجبالَ على التشبيه: قِطَعٌ عظيمةٌ سُمّيت جبالًا، كما تسمّي العربُ كلَّ عظيمٍ جبلًا. وهذا الفهمُ تامٌّ في نفسه.",
      science: "A hail storm needs exactly that order. Small clouds are driven together and merge; the merged cloud builds vertically into a tower that can stand ten to fifteen kilometres high — a cumulonimbus, which from the side genuinely is a mountain of cloud. Hail can only form in that tower, because only its updraught can hold a stone up long enough for it to grow in layers before it falls.",
      scienceAr: "وعاصفةُ البَرَد لا تكون إلّا بهذا الترتيب. فالسحبُ الصغيرة تُساق فتلتحم، ثم يرتفع المجموعُ برجًا يبلغ عشرة إلى خمسة عشر كيلومترًا — وهو المزنُ الركاميّ، وهو من جانبه جبلٌ من سحابٍ حقيقةً. ولا يتكوّن البَرَدُ إلّا في هذا البرج، لأنّ تيّاره الصاعد وحده يُمسك الحبّة في الجوّ حتى تكبر طبقةً فوق طبقةٍ قبل أن تسقط.",
      when: "The structure of the thunderstorm was mapped by the Thunderstorm Project in the United States, 1946-1949, under Horace Byers and Roscoe Braham.",
      whenAr: "رُسم بناءُ العاصفة الرعديّة في «مشروع العواصف الرعديّة» بالولايات المتحدة بين سنتي ١٩٤٦م و١٩٤٩م، بإشراف هوراس بايرز وروسكو براهام.",
      grade: "partial",
      caution: "A fit, not a proof: a mountain is an ordinary Arabic way of saying something enormous, and anyone who has watched a storm build has seen the piling with his own eyes. What is worth pointing at is the ORDER — driven, joined, heaped, then rain — which is the order a meteorologist gives, and not the order a person would guess.",
      cautionAr: "موافقةٌ لا برهان: فالجبلُ في العربية طريقةٌ معتادةٌ لوصف العظيم، ومن رأى عاصفةً تتكوّن فقد رأى التراكمَ بعينه. والذي يستحقّ الإشارة هو **الترتيب** — يُزجى، فيُؤلَّف، فيُركَم، ثم المطر — وهو ترتيبُ عالِم الأرصاد، لا الترتيبُ الذي يحدسه الناظر.",
      keys: ["cloud","hail","rukam","cumulonimbus","rain","thunderstorm","السحاب","البرد","ركام","المزن","المطر","العاصفة"]
    }],

  "25": [{
    id: "mi-25-53",
    ayah: 53,
    title: "Two seas that meet and do not mix",
    titleAr: "بحران يلتقيان ولا يبغيان",
    verse: "وَهُوَ ٱلَّذِي مَرَجَ ٱلۡبَحۡرَيۡنِ هَٰذَا عَذۡبٞ فُرَاتٞ وَهَٰذَا مِلۡحٌ أُجَاجٞ وَجَعَلَ بَيۡنَهُمَا بَرۡزَخٗا وَحِجۡرٗا مَّحۡجُورٗا",
    verseEn: "And it is He who has released [simultaneously] the two seas, one fresh and sweet and one salty and bitter, and He placed between them a barrier and prohibiting partition.",
    says: "مَرَجَ is to let loose side by side. The two bodies of water are released against each other and meet — and between them is a بَرْزَخ, a partition. Ar-Rahman 19-20 says the same and adds لَّا يَبۡغِيَانِ: neither overruns the other. So: they meet, and they keep their identity.",
    saysAr: "**مَرَجَ** أي أرسلهما وخلّى بينهما. فالماءان مُرسَلان أحدُهما تلقاء الآخر يلتقيان — وبينهما **بَرْزَخ** أي حاجز. وتقول الرحمن في الآيتين ١٩ و٢٠ مثلَ ذلك وتزيد **لَا يَبْغِيَانِ** أي لا يبغي أحدُهما على الآخر. فهما إذن يلتقيان ويبقى لكلٍّ منهما حالُه.",
    classical: "The mufassirun read this as the river meeting the sea, which is exactly what it says, and understood the barzakh as something Allah holds between them. A man standing at a river mouth can see the two waters meeting and can see the line where they meet. The classical reading is not weak, and it is not superseded — the modern point only adds WHY the line is there.",
    classicalAr: "قرأها المفسّرون على أنه لقاءُ النهر بالبحر، وهو نصُّ ما قالته الآية، وفسّروا البرزخ بحاجزٍ من قدرة الله بينهما. والواقفُ عند مصبّ نهرٍ يرى الماءين يلتقيان ويرى الخطَّ الذي يلتقيان عنده. فقراءةُ المفسّرين ليست ضعيفةً ولا منسوخة، وإنما تزيد الفائدةُ الحديثةُ **بيانَ سبب** ذلك الخط.",
    science: "Water masses of different salinity and temperature have different densities, and they do not simply blend on contact. A halocline is the sharp salinity boundary between them; a pycnocline the density boundary. At river mouths a salt wedge slides beneath the outflowing fresh water and the two keep their character over long distances. At Gibraltar, Atlantic and Mediterranean water exchange in two layers with a measurable boundary between them.",
    scienceAr: "الكتلُ المائيّةُ المختلفةُ في الملوحة والحرارة مختلفةٌ في الكثافة، ولا تمتزج بمجرّد التماسّ. فالـ«هالوكلاين» هو الحدُّ الحادُّ في الملوحة بينهما، والـ«بيكنوكلاين» هو الحدُّ في الكثافة. وعند مصابّ الأنهار ينزلق لسانٌ مِلحيٌّ تحت الماء العذب الخارج، ويحتفظ كلٌّ منهما بصفته مسافاتٍ طويلة. وفي مضيق جبل طارق يتبادل ماءُ الأطلسيّ والمتوسّط في طبقتين بينهما حدٌّ يمكن قياسه.",
    when: "Systematic measurement of salinity and density structure in the sea is the work of modern physical oceanography, from the Challenger expedition of 1872-76 onwards. The instruments that show a halocline as a sharp step on a trace are twentieth century.",
    whenAr: "قياسُ بنية الملوحة والكثافة في البحر قياسًا منهجيًّا من عمل علم البحار الفيزيائيّ الحديث، ابتداءً من رحلة «تشالنجر» بين سنتي ١٨٧٢م و١٨٧٦م. وأمّا الآلاتُ التي تُظهر حدَّ الملوحة درجةً حادّةً على المخطّط فمن القرن العشرين.",
    grade: "partial",
    caution: "Graded a fit, not a proof, for one reason: a person standing at a river mouth in the seventh century could see this happen. The verse describes something observable. What was not available was the explanation — so treat this as the Quran naming a real thing precisely, not as information nobody could have had.",
    cautionAr: "ودرجتُها موافقةٌ لا برهان لسببٍ واحد: أنّ الواقف عند مصبّ نهرٍ في القرن السابع كان يرى هذا بعينه. فالآيةُ تصف أمرًا مشاهَدًا. والذي لم يكن متاحًا هو **التفسير** — فاجعلها من بابِ تسمية القرآن للشيء على وجهه بدقّة، لا من باب خبرٍ لم يكن في وسع أحدٍ أن يعلمه.",
    keys: ["two seas","barzakh","salt","fresh","halocline","estuary","gibraltar","mixing",
           "البحرين","برزخ","الملح","العذب","الملوحة","المصب","لا يبغيان","مرج"]
  }],

  "36": [{
    id: "mi-36-38",
    ayah: 38,
    title: "The sun runs to an appointed place",
    titleAr: "﴿وَٱلشَّمۡسُ تَجۡرِي لِمُسۡتَقَرّٖ لَّهَاۚ﴾",
    verse: "وَٱلشَّمۡسُ تَجۡرِي لِمُسۡتَقَرّٖ لَّهَاۚ ذَٰلِكَ تَقۡدِيرُ ٱلۡعَزِيزِ ٱلۡعَلِيمِ",
    verseEn: "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing.",
    says: "The sun runs — تَجۡرِي, a continuous motion of its own — toward a مُسْتَقَرّ, a place or time of settling. Two verses later: each of them, in an orbit, is swimming. The sun is given its own travel, not merely a nightly circuit around the earth.",
    saysAr: "الشمسُ **تَجْرِي** — جريانٌ مستمرٌّ لها هي — إلى **مُسْتَقَرٍّ** أي موضعِ استقرارٍ أو وقتِه. وبعدها بآيتين: **﴿وَكُلّٞ فِي فَلَكٖ يَسۡبَحُونَ﴾**. فجُعل للشمس سيرُها الخاصُّ بها، لا مجرّدُ دورةٍ ليليّةٍ حول الأرض.",
    classical: "The mufassirun understood the running as the sun's daily course, and مستقر as either the end of the world or a fixed limit it does not pass; a well-known hadith relates the sun's مستقر to its prostration beneath the Throne. None of that is displaced by anything below.",
    classicalAr: "فهِم المفسّرون الجريَ على مسير الشمس اليوميّ، والمستقرَّ على منتهى الدنيا أو حدٍّ لا تتعدّاه؛ وفي حديثٍ مشهورٍ ربطُ مستقرِّ الشمس بسجودها تحت العرش. وليس شيءٌ ممّا يأتي بعدُ رافعًا لذلك.",
    science: "The sun is not stationary. It carries the whole solar system around the centre of the galaxy at roughly 220 kilometres per second, completing a circuit in something like 225 to 250 million years, while also moving relative to the neighbouring stars. Its life has a fixed end: it will exhaust its hydrogen, swell, and settle as a white dwarf.",
    scienceAr: "ليست الشمسُ ساكنة. فهي تحمل المجموعةَ الشمسيّةَ كلَّها حول مركز المجرّة بسرعةٍ نحو مئتين وعشرين كيلومترًا في الثانية، وتُتمّ دورتَها في نحو مئتين وخمسٍ وعشرين إلى مئتين وخمسين مليون سنة، مع حركتها بالنسبة إلى النجوم المجاورة. ولحياتها نهايةٌ مقدَّرة: سينفد هيدروجينُها فتنتفخ ثم تستقرّ قزمًا أبيض.",
    when: "That the sun moves among the stars was established in 1783 by William Herschel, who found the direction of its motion. That it orbits the centre of the galaxy came with Bertil Lindblad and Jan Oort in the 1920s. Its fate as a white dwarf belongs to twentieth-century stellar physics.",
    whenAr: "أثبت وليم هرشل سنة ١٧٨٣م أنّ الشمس تتحرّك بين النجوم، وحدّد اتّجاه حركتها. وأمّا دورانُها حول مركز المجرّة فمع برتيل لِندبلاد ويان أورت في عشرينيّات القرن العشرين. وأمّا مصيرُها قزمًا أبيض فمن فيزياء النجوم في القرن العشرين.",
    grade: "partial",
    caution: "A fit, not a proof. The verse says the sun runs; it does not say around what. The value is that it gives the sun a motion and an appointed end at a time when the sun was the fixed thing everything else moved around.",
    cautionAr: "موافقةٌ لا برهان. فالآيةُ تُثبت للشمس جريًا ولا تذكر حول ماذا. وفائدتُها أنها جعلت للشمس حركةً ونهايةً مؤقّتةً في زمنٍ كانت الشمسُ فيه هي الثابتَ الذي يدور حوله ما سواه.",
    keys: ["sun","orbit","motion","galaxy","white dwarf","mustaqarr","falak",
           "الشمس","المدار","الحركة","المجرة","مستقر","فلك","يسبحون"]
  },
  {
      id: "mi-36-36",
      ayah: 36,
      title: "Pairs — in what grows, in themselves, and in what they do not know",
      titleAr: "الأزواج — فيما تُنبت الأرض، وفي أنفسهم، وفيما لا يعلمون",
      verse: "سُبۡحَٰنَ ٱلَّذِي خَلَقَ ٱلۡأَزۡوَٰجَ كُلَّهَا مِمَّا تُنۢبِتُ ٱلۡأَرۡضُ وَمِنۡ أَنفُسِهِمۡ وَمِمَّا لَا يَعۡلَمُونَ",
      verseEn: "Glory be to the One who created all the pairs — of what the earth grows, and of themselves, and of what they do not know.",
      says: "Three categories of pairs, and the third is left open: **of what they do not know**.",
      saysAr: "ثلاثةُ أصنافٍ من الأزواج، والثالثُ متروكٌ مفتوحًا: ﴿وَمِمَّا لَا يَعۡلَمُونَ﴾.",
      classical: "زوج in Arabic is not only a mate. It is also a kind, a sort, one of a matched set — which is why the mufassirun listed night and day, sun and moon, sweet and bitter, land and sea. On that reading the verse needs no biology, and most of the classical commentary takes it that way.",
      classicalAr: "الزوجُ في العربية ليس القرينَ فقط، بل هو أيضًا الصنفُ والنوعُ وأحدُ المتقابلين — ولذلك عدّ المفسّرون الليلَ والنهار، والشمسَ والقمر، والحلوَ والمرّ، والبرَّ والبحر. وعلى هذا لا تحتاج الآيةُ إلى علمٍ طبيعيّ، وعليه أكثرُ كلام المفسّرين.",
      science: "Two things later filled the first and third categories in a way nobody could have meant at the time.\n\nPlants were not known to have male and female parts: Rudolf Camerarius demonstrated plant sexuality in 1694, and it was still being argued over for a century afterwards. And in 1928 Paul Dirac's equation implied that every particle has an opposite; Carl Anderson found the positron in 1932, and pairing turned out to run through matter itself.",
      scienceAr: "ثم جاء ما ملأ الصنفَ الأوّل والثالث على وجهٍ لم يكن في وُسع أحدٍ أن يقصده حينها.\n\nفلم يكن معلومًا أنّ للنبات ذكرًا وأنثى: أثبت رودولف كاميراريوس تزاوجَ النبات سنة ١٦٩٤م، وبقي الأمرُ موضعَ نزاعٍ قرنًا بعده. وفي سنة ١٩٢٨م اقتضت معادلةُ بول ديراك أنّ لكلّ جسيمٍ ضدًّا، فوجد كارل أندرسون البوزيترونَ سنة ١٩٣٢م، فإذا الازدواجُ سارٍ في المادّة نفسها.",
      when: "Camerarius, 1694, for plants. Dirac 1928 and Anderson 1932 for antimatter.",
      whenAr: "كاميراريوس سنة ١٦٩٤م في النبات، وديراك سنة ١٩٢٨م وأندرسون سنة ١٩٣٢م في المادّة المضادّة.",
      grade: "partial",
      caution: "The weakness is in the strength: **of what they do not know** can be filled by whatever the next century discovers, and a sentence that can never be wrong proves little by itself. Say what is actually striking — that the verse puts plants in the same sentence as people, at a time when nobody held that plants had sexes — and leave the open clause open.",
      cautionAr: "وضعفُها من حيث قوّتُها: فجملةُ ﴿وَمِمَّا لَا يَعۡلَمُونَ﴾ يملؤها كلُّ ما يُكتشف في القرن القادم، والقولُ الذي لا يمكن أن يُخطئ لا يُثبت وحده كثيرًا. فقل الذي يستحقّ أن يُقال حقًّا — أنّ الآية قرنت النباتَ بالناس في جملةٍ واحدة، في زمنٍ لا يقول أحدٌ فيه إنّ للنبات ذكرًا وأنثى — ودع المفتوحَ مفتوحًا.",
      keys: ["pairs","azwaj","plants","sexes","antimatter","Dirac","Camerarius","الأزواج","النبات","التزاوج","المادة المضادة","ديراك"]
    }],

  "51": [{
    id: "mi-51-47",
    ayah: 47,
    title: "And We are its expander",
    titleAr: "وإنّا لموسعون",
    verse: "وَٱلسَّمَآءَ بَنَيۡنَٰهَا بِأَيۡيْدٖ وَإِنَّا لَمُوسِعُونَ",
    verseEn: "And the heaven We constructed with strength, and indeed, We are [its] expander.",
    says: "The heaven was built with power — and the sentence does not stop at the building. لَمُوسِعُونَ is an active participle: not that it was made wide, but that the making-wide is ongoing.",
    saysAr: "بُنيت السماءُ بقوّة — ولم تقف الجملةُ عند البناء. و**لَمُوسِعُونَ** اسمُ فاعل: لا أنها وُسِّعت وانتهى الأمر، بل إنّ التوسيعَ قائمٌ مستمرّ.",
    classical: "This must be said plainly. مُوسِع in classical Arabic commonly means possessed of ample means, able, generous — as in 2:236, where the well-off man is الْمُوسِع. Many mufassirun read the verse as: We built the sky with power, and We are One of vast ability. That reading is sound Arabic and it is old. The expansion reading is available in the language too, but it is not the only one, and a person who says it is has not opened a dictionary.",
    classicalAr: "ولا بدّ من قول هذا صريحًا. فـ**مُوسِع** في العربية يكثر بمعنى ذي السَّعة والقدرة والجِدَة — كما في قوله تعالى في البقرة: **﴿عَلَى ٱلۡمُوسِعِ قَدَرُهُۥ﴾**. وقد قرأ كثيرٌ من المفسّرين الآية: بنينا السماء بقوّةٍ وإنّا لذَوو سَعةٍ وقدرة. وهي قراءةٌ عربيّةٌ صحيحةٌ قديمة. ومعنى التوسيع قائمٌ في اللغة أيضًا، غير أنه ليس الوجهَ الوحيد، ومن جزم بأنه الوحيدُ لم يفتح معجمًا.",
    science: "The universe is expanding. Distant galaxies recede from us, and the further away they are the faster they go — space itself is stretching, and the expansion is accelerating.",
    scienceAr: "الكونُ يتمدّد. فالمجرّاتُ البعيدةُ تبتعد عنّا، وكلّما ازدادت بعدًا ازدادت سرعةً — فالفضاءُ نفسُه يتمدّد، والتمدّدُ في تسارع.",
    when: "Vesto Slipher measured the redshifts between 1912 and 1917. Georges Lemaitre derived an expanding solution in 1927, and Edwin Hubble published the distance-velocity relation in 1929 that made it undeniable. Before the 1920s the settled scientific position was a static universe — Einstein himself had added a term to his equations to keep it still.",
    whenAr: "قاس فيستو سليفر الانزياحاتِ الحمراءَ بين سنتي ١٩١٢م و١٩١٧م. واستخرج جورج لوميتر حلًّا متمدّدًا سنة ١٩٢٧م، ثم نشر إدوين هابل سنة ١٩٢٩م العلاقةَ بين البُعد والسرعة التي لم يبقَ معها إنكار. وقبل عشرينيّات القرن العشرين كان المستقرُّ عند العلماء أنّ الكون ساكن — حتى إنّ أينشتاين أضاف حدًّا إلى معادلاته ليُبقيه ساكنًا.",
    grade: "strong",
    caution: "Strong, and its strength is in the honest version: the word bears BOTH readings, one of which happens to describe something no one knew until 1929. Present it that way and it cannot be taken from you. Present it as the only possible meaning and the first Arabic teacher who hears you will take it apart.",
    cautionAr: "قويّةٌ، وقوّتُها في روايتها على وجهها: أنّ اللفظ يحتمل **الوجهين**، وأحدُهما يصف أمرًا لم يعلمه أحدٌ قبل سنة ١٩٢٩م. فاعرِضها هكذا لا تُنتزع منك. واعرِضها على أنها المعنى الوحيدُ الممكن يُفكّكها أوّلُ مُعلّم عربيّةٍ يسمعك.",
    keys: ["expanding universe","hubble","cosmology","musioon","sky","space","redshift",
           "تمدد الكون","هابل","الفلك","موسعون","السماء","الفضاء","الانزياح"]
  }],

  "57": [{
    id: "mi-57-25",
    ayah: 25,
    title: "And We sent down iron",
    titleAr: "وأنزلنا الحديد",
    verse: "وَأَنزَلۡنَا ٱلۡحَدِيدَ فِيهِ بَأۡسٞ شَدِيدٞ وَمَنَٰفِعُ لِلنَّاسِ",
    verseEn: "And We sent down iron, wherein is great military might and benefits for the people.",
    says: "Iron is described as أُنزِل — sent down — and as carrying both great force and benefit for people.",
    saysAr: "وُصف الحديدُ بأنه **أُنزِل**، وبأنّ فيه بأسًا شديدًا ومنافعَ للناس.",
    classical: "And here is the counter-example that has to be given, because it is in the Quran itself. In 39:6, وَأَنزَلَ لَكُم مِّنَ ٱلۡأَنۡعَٰمِ ثَمَٰنِيَةَ أَزۡوَٰجٖۚ — He sent down for you eight pairs of livestock. Camels and sheep did not fall from the sky. أنزل is regularly used for bestowing and providing, and the mufassirun read the iron verse that way. Anyone who quotes 57:25 as astrophysics without mentioning 39:6 is arguing with half the evidence.",
    classicalAr: "وهنا المثالُ المعارض الذي لا بدّ من ذكره، لأنه في القرآن نفسه. ففي سورة الزمر: **﴿وَأَنزَلَ لَكُم مِّنَ ٱلۡأَنۡعَٰمِ ثَمَٰنِيَةَ أَزۡوَٰجٖۚ﴾**. والإبلُ والغنمُ لم تنزل من السماء. فـ**أنزل** يأتي كثيرًا بمعنى الإعطاء والتسخير، وعلى هذا حمل المفسّرون آيةَ الحديد. ومن احتجّ بآية الحديد في علم الفلك ولم يذكر آيةَ الزمر فقد احتجّ بنصف الأدلّة.",
    science: "The astrophysics itself is not in dispute. Fusion inside a star releases energy only up to iron; past iron it costs energy, so iron is where the chain stops. The iron in the earth's crust and in your blood was made inside massive stars and scattered when they died. The sun cannot make it. In that literal sense every atom of iron on this planet arrived from outside it.",
    scienceAr: "أمّا الفيزياءُ الفلكيّةُ نفسُها فلا نزاع فيها. فالاندماجُ في جوف النجم يُطلق طاقةً إلى الحديد، فإذا جاوزه استهلك الطاقةَ ولم يُطلقها، فعند الحديد تقف السلسلة. والحديدُ الذي في قشرة الأرض وفي دمك صُنع في أجواف النجوم الضخمة وتناثر عند موتها. والشمسُ لا تقدر على صنعه. فبهذا المعنى الحرفيّ كلُّ ذرّة حديدٍ على هذا الكوكب جاءته من خارجه.",
    when: "The nuclear pathway was set out in 1957 in the paper by Margaret Burbidge, Geoffrey Burbidge, William Fowler and Fred Hoyle, known ever since as B2FH.",
    whenAr: "بُيّن المسارُ النوويُّ سنة ١٩٥٧م في بحث مارغريت بربدج وجيفري بربدج ووليم فاولر وفريد هويل، المعروف منذ ذلك الحين بـ«بي تربيع إف إتش».",
    grade: "partial",
    caution: "A fit, not a proof — and the reason is 39:6, four words of the Quran that settle what أنزل can mean. The astrophysics is true and worth knowing. Building a proof on the verb is not safe.",
    cautionAr: "موافقةٌ لا برهان — والسببُ آيةُ الزمر، وهي كلماتٌ من القرآن تحسم ما يحتمله لفظُ **أنزل**. والفيزياءُ صحيحةٌ جديرةٌ بأن تُعلم. وأمّا بناءُ برهانٍ على الفعل نفسه فليس بمأمون.",
    keys: ["iron","stars","supernova","nucleosynthesis","anzalna","B2FH",
           "الحديد","النجوم","المستعر","أنزلنا","التخليق النووي","الفلك"]
  }],

  "86": [{
    id: "mi-86-3",
    ayah: 3,
    title: "At-Tariq — and the claim about a star that beats like a drum",
    titleAr: "الطارق — ودعوى النجم الذي يُصدر صوتَ الطبل",
    verse: "وَٱلسَّمَآءِ وَٱلطَّارِقِ ۝ وَمَآ أَدۡرَىٰكَ مَا ٱلطَّارِقُ ۝ ٱلنَّجۡمُ ٱلثَّاقِبُ",
    verseEn: "By the sky and the night comer - And what can make you know what is the night comer? It is the piercing star.",
    says: "Read the words. الطَّارِق is the one who comes by night — from طَرْق, striking, because the night visitor knocks at the door. And الثَّاقِب is the piercing one, the star whose light bores through the darkness. That is the whole of what the three verses say.",
    saysAr: "انظر الألفاظ. **الطَّارِق** هو الآتي ليلًا — من الطَّرْق وهو الضرب، لأنّ آتيَ الليل يطرق الباب. و**الثَّاقِب** هو النافذ، النجمُ الذي يخرق ضوءُه الظلام. وهذا كلُّ ما تقوله الآياتُ الثلاث.",
    classical: "The mufassirun were unanimous on the sense: a star that appears at night, whose light pierces. Some named a particular star, some left it general. Not one of them read a sound into it, because there is no sound in it.",
    classicalAr: "أجمع المفسّرون على المعنى: نجمٌ يبدو ليلًا يثقُب ضوءُه الظلام. وعيّن بعضُهم نجمًا بعينه، وأبقاه بعضُهم عامًّا. ولم يقرأ واحدٌ منهم فيه صوتًا، إذ ليس فيه صوت.",
    science: "The claim in circulation is this: pulsars are collapsed stars that emit radio pulses at an extremely regular rate, and when those pulses are fed through a loudspeaker they sound like knocking or a drumbeat — so الطارق, the knocker, is a pulsar. Pulsars are real: Jocelyn Bell Burnell detected the first in 1967. But the knocking is not a sound the star makes. It is a radio signal, and the drum is what a human being hears after converting that signal into audio. Space carries no sound. And the verse does not say the star makes a noise; it says it comes at night and it pierces.",
    scienceAr: "والدعوى المتداولةُ هي: أنّ النجومَ النابضة نجومٌ منهارةٌ تُصدر نبضاتٍ راديويّةً بالغةَ الانتظام، وإذا مُرِّرت تلك النبضاتُ في مكبّر صوتٍ سُمعت كالطَّرق أو ضربِ الطبل — فالطارقُ إذن نجمٌ نابض. والنجومُ النابضةُ حقيقةٌ ثابتة، رصدت جوسلين بِل بَرنيل أوّلَها سنة ١٩٦٧م. لكن ذلك الطَّرق ليس صوتًا يُصدره النجم، وإنما هو إشارةٌ راديويّة، والطبلُ هو ما يسمعه الإنسانُ بعد تحويل تلك الإشارة إلى صوت. والفضاءُ لا ينقل الصوت. والآيةُ لم تقل إنّ النجم يُصوّت، وإنما قالت إنه يأتي ليلًا وإنه ثاقب.",
    when: "The first pulsar was detected in 1967 by Jocelyn Bell Burnell at Cambridge.",
    whenAr: "رُصد أوّلُ نجمٍ نابضٍ سنة ١٩٦٧م على يد جوسلين بِل بَرنيل في كامبردج.",
    grade: "not-established",
    caution: "This card exists because the claim is everywhere and a reader will meet it. Say the true thing instead: الطارق is a magnificent word — the visitor who arrives in the dark and knocks — and the Quran uses it of a star and then asks you what you think you know about it. That is worth more than a borrowed pulsar.\n\nAnd notice the cost of the weak version. A listener who checks it finds that space is silent, and then doubts the deep-sea verse he heard from you an hour earlier. That is the whole reason this page grades.",
    cautionAr: "وإنما وُضعت هذه البطاقةُ لأنّ الدعوى منتشرةٌ وسيلقاها القارئ. فقُل الصادقَ بدلها: أنّ **الطارق** لفظٌ عظيم — الزائرُ يأتي في الظلمة فيطرق — استعمله القرآنُ للنجم ثم سألك: وما أدراك ما هو؟ وهذا خيرٌ من نجمٍ نابضٍ مستعار.\n\nوانظر ثمنَ الرواية الضعيفة: سامعٌ يتحقّق فيجد أنّ الفضاء لا صوت فيه، فيرتاب فيما سمعه منك قبل ساعةٍ عن ظلمات البحر. وهذا وحده هو سببُ التدريج في هذه الصفحة.",
    keys: ["tariq","pulsar","star","sound","drum","knocking","bell burnell",
           "الطارق","النجم النابض","النجم","الصوت","الطبل","الثاقب","دعوى"]
  },
  {
      id: "mi-86-11",
      ayah: 11,
      title: "“The sky of return” — and the claim that it means radio waves",
      titleAr: "«السماء ذات الرجع» — ودعوى أنها موجات الراديو",
      verse: "وَٱلسَّمَآءِ ذَاتِ ٱلرَّجۡعِ",
      verseEn: "By the sky of return.",
      says: "Three words. The sky is sworn by, and described by one quality: **الرجع**, returning.",
      saysAr: "ثلاثُ كلمات. أُقسم بالسماء، ووُصفت بصفةٍ واحدة: **الرجع**.",
      classical: "The commentators are nearly unanimous and they are specific: الرجع is the **rain**, because it comes back year after year. Ibn Abbas, Qatadah and Mujahid are all reported with it, and the next verse — the earth that splits open — is read with it as the pair: water comes down, the ground opens with growth. The two verses are a single image of a cycle.",
      classicalAr: "كلمةُ المفسّرين تكاد تكون واحدةً وهي معيّنة: الرجعُ هو **المطر**، لأنه يعود عامًا بعد عام. ورُوي ذلك عن ابن عباس وقتادة ومجاهد، وتُقرأ معها الآيةُ التي بعدها — والأرضِ ذاتِ الصَّدع — قرينةً لها: ماءٌ ينزل، وأرضٌ تنشقّ بالنبات. فالآيتان صورةٌ واحدةٌ لدورة.",
      science: "The claim that circulates is that this is the ionosphere returning radio waves to earth, discovered by Appleton and by Breit and Tuve in 1925 — or else that it is the water cycle, named as such by Perrault and Mariotte in the 1670s.\n\nThe water cycle reading and the classical reading are the same thing, so it adds nothing. The ionosphere reading adds something, and that is the problem with it.",
      scienceAr: "والدعوى التي تدور أنّ هذا هو الغلافُ المتأيّن يردّ موجاتِ الراديو إلى الأرض، واكتشفه أبلتون وبريت وتيوف سنة ١٩٢٥م — أو أنها دورةُ الماء، وقد سمّاها بيرّو وماريوت في سبعينيّات القرن السابع عشر.\n\nأمّا دورةُ الماء فهي قولُ المفسّرين نفسُه، فلا تزيد شيئًا. وأمّا الغلافُ المتأيّن فيزيد، وفي زيادته موضعُ الإشكال.",
      when: "The ionosphere: Breit and Tuve, and Appleton, 1925.",
      whenAr: "الغلافُ المتأيّن: بريت وتيوف، وأبلتون، سنة ١٩٢٥م.",
      grade: "not-established",
      caution: "**This one does not stand, and it is on this page so that you meet the answer before you meet the claim.** The word is general — anything that returns — and a general word can be filled with whatever the age has just discovered. That is not the verse telling you something; that is you telling the verse something. The context settles it in the other direction: the verse beside it is about the ground splitting with growth, which is rain, not radio. Quote this one and you lose the cards that are worth quoting.",
      cautionAr: "**هذه لا تثبت، وإنما وُضعت هنا لتلقى الجوابَ قبل أن تلقى الدعوى.** فاللفظُ عامّ — كلُّ ما يرجع — والعامُّ يُملأ بما اكتشفه العصرُ للتوّ. وليس هذا من الآية إليك، بل منك إلى الآية. والسياقُ يحسمه في الجهة الأخرى: فالآيةُ التي بجنبها في الأرض تنشقّ بالنبات، وذلك مطرٌ لا راديو. ومن نقل هذه أسقط عن نفسه ما يستحقّ النقل.",
      keys: ["raj","sky","return","ionosphere","radio","water cycle","rain","الرجع","السماء","الغلاف المتأين","الراديو","دورة الماء","المطر"]
    }],

  "96": [{
    id: "mi-96-16",
    ayah: 16,
    title: "A lying, sinning forelock",
    titleAr: "ناصيةٍ كاذبةٍ خاطئة",
    verse: "كـَلَّا لَئِن لَّمۡ يَنتَهِ لَنَسۡفَعَۢا بِٱلنَّاصِيَةِ ۝ نَاصِيَةٖ كَٰذِبَةٍ خَاطِئَةٖ",
    verseEn: "No! If he does not desist, We will surely drag him by the forelock - A lying, sinning forelock.",
    says: "Look at where the adjectives land. The man is the liar; the man is the sinner. But the verse does not say a lying, sinning MAN — it says a lying, sinning FORELOCK. The النَّاصِيَة is the front of the head, the hair above the brow and what is under it. The verse assigns the lying and the wrongdoing to that specific part of him.",
    saysAr: "انظر أين وقعت الصفتان. فالرجلُ هو الكاذب، والرجلُ هو الخاطئ. ولم تقل الآيةُ **رجلٍ** كاذبٍ خاطئ، بل قالت **نَاصِيَةٍ** كاذبةٍ خاطئة. و**الناصية** مقدَّمُ الرأس، الشعرُ فوق الجبهة وما تحته. فنُسب الكذبُ والخطأُ إلى ذلك الموضع بعينه.",
    classical: "The mufassirun explained the forelock as the way an Arab seizes a man he has overpowered, and read the attribution as Arabic idiom: her forelock is called lying because its owner is. That reading is completely sound, and it is the one they had.",
    classicalAr: "فسّر المفسّرون الناصيةَ بأنها موضعُ الأخذ الذي يُؤخذ به المقهور عند العرب، وحملوا الوصفَ على أسلوب العرب: وُصفت الناصيةُ بالكذب لأنّ صاحبها كاذب. وهي قراءةٌ صحيحةٌ تامّة، وهي التي كانت عندهم.",
    science: "Behind the forehead sits the prefrontal cortex. It is the region that plans, judges, restrains impulse and decides — and imaging studies of deception consistently light it up, because lying is a controlled act: it takes suppressing the true answer and constructing another. Damage there leaves memory and intelligence intact and wrecks judgement and restraint. If a part of the head were to be named for lying and for wrongdoing, that is the part.",
    scienceAr: "خلف الجبهة تقع **القشرةُ الجبهيّةُ الأماميّة**. وهي موضعُ التخطيط والحكم وكفِّ الاندفاع واتّخاذ القرار — وتُظهر دراساتُ التصوير عند الكذب نشاطَها باطّراد، لأنّ الكذب فعلٌ متحكَّمٌ فيه: يقتضي كبتَ الجواب الصادق ثم إنشاءَ غيره. وإصابتُها تُبقي الذاكرةَ والذكاءَ وتُفسد الحكمَ والانضباط. فلو سُمّي من الرأس موضعٌ بالكذب والخطأ لكان هو ذلك الموضع.",
    when: "Phineas Gage lost the front of his brain to an iron rod in 1848 and lost his judgement with it, which is where the localisation begins. Mapping prefrontal function is twentieth-century work, and the imaging studies that tie deception specifically to this region are from the 1990s onward.",
    whenAr: "فقَد فينياس غيج مقدّمةَ دماغه بقضيبٍ من حديدٍ سنة ١٨٤٨م، وفقَد معها رشدَه وحُسنَ تصرّفه، ومن هنا بدأ تحديدُ الوظائف بالمواضع. وأمّا رسمُ وظائف القشرة الجبهيّة فعملُ القرن العشرين، وأمّا دراساتُ التصوير التي تربط الكذبَ بهذا الموضع بعينه فمن تسعينيّات ذلك القرن فصاعدًا.",
    grade: "strong",
    caution: "Keep it at what it is: the verse names a part of the head for lying and for wrongdoing, and that part turned out to be the part responsible for both. It does not say cortex, and it is not a lesson in neuroanatomy.",
    cautionAr: "وأبقِها على حدّها: أنّ الآية سمّت موضعًا من الرأس بالكذب والخطأ، فإذا ذلك الموضعُ هو المسؤولُ عنهما. وليس فيها ذكرُ قشرةٍ ولا هي درسٌ في تشريح الأعصاب.",
    keys: ["forelock","nasiyah","prefrontal","brain","lying","decision","frontal lobe",
           "الناصية","القشرة الجبهية","الدماغ","الكذب","القرار","الفص الجبهي"]
  }],

  "23": [{
      id: "mi-23-14",
      ayah: 13,
      title: "The stages, and the order they are given in",
      titleAr: "الأطوار، والترتيب الذي جاءت به",
      verse: "ثُمَّ جَعَلۡنَٰهُ نُطۡفَةٗ فِي قَرَارٖ مَّكِينٖ ۝ ثُمَّ خَلَقۡنَا ٱلنُّطۡفَةَ عَلَقَةٗ فَخَلَقۡنَا ٱلۡعَلَقَةَ مُضۡغَةٗ فَخَلَقۡنَا ٱلۡمُضۡغَةَ عِظَٰمٗا فَكَسَوۡنَا ٱلۡعِظَٰمَ لَحۡمٗا ثُمَّ أَنشَأۡنَٰهُ خَلۡقًا ءَاخَرَۚ فَتَبَارَكَ ٱللَّهُ أَحۡسَنُ ٱلۡخَٰلِقِينَ",
      verseEn: "Then We made him a drop in a secure lodging. Then We made the drop a clinging form, and the clinging form a chewed lump, and the lump bones, and We clothed the bones in flesh; then We brought him forth as another creation.",
      says: "Five named stages in a fixed order — a drop, a clinging thing, a chewed lump, bones, then flesh **put on** the bones. Two details are worth holding on to, because they are the whole of what is being claimed: the third stage is named for looking chewed, and the bones come **before** the flesh, which is described as clothing them.",
      saysAr: "خمسةُ أطوارٍ مسمّاةٍ على ترتيبٍ ثابت: نطفة، ثم علقة، ثم مضغة، ثم عظام، ثم لحمٌ **يُكسى** به العظم. وتفصيلان يُمسَك بهما، وهما كلُّ ما يُدّعى هنا: أنّ الطور الثالث سُمّي بما يشبه الممضوغ، وأنّ العظام جاءت **قبل** اللحم، ووُصف اللحمُ بأنه كسوةٌ لها.",
      classical: "The mufassirun read 'alaqah as clotted blood — دم جامد — and mudghah as a piece of flesh the size of what is chewed. That is the reading in at-Tabari and in Ibn Kathir, and it needs no biology at all.\n\nAnd here is the counter-example that has to be given, because without it this card is an argument with one side removed. **Galen**, around 170 CE, already taught a staged account of the embryo: semen, then a stage filled with blood, then flesh, then the shaping of the organs. His work was known to the physicians of the region and was later translated into Arabic. Anyone who presents a staged description as something nobody could have said in the seventh century has to answer Galen first.",
      classicalAr: "فسّر المفسّرون العلقةَ بالدم الجامد، والمضغةَ بقطعةٍ من اللحم بقدر ما يُمضغ. وهذا ما في تفسير الطبريّ وابن كثير، ولا يحتاج إلى علم أجنّةٍ أبدًا.\n\nوهنا المثالُ المعارض الذي لا بدّ من ذكره، وإلّا كانت هذه البطاقةُ حجّةً حُذف منها أحدُ الطرفين. فقد قال **جالينوس** نحو سنة ١٧٠م بأطوارٍ للجنين: المنيّ، ثم طورٌ يمتلئ بالدم، ثم اللحم، ثم تخطيطُ الأعضاء. وكان كلامُه معروفًا عند أطبّاء تلك البلاد، ثم نُقل إلى العربية. فمن زعم أنّ ذكر الأطوار شيءٌ لم يكن أحدٌ يقوله في القرن السابع فعليه أن يُجيب عن جالينوس أوّلًا.",
      science: "What modern embryology added is not that there are stages — it is what each one looks like and when.\n\nFrom about day six the embryo **attaches itself** to the wall of the womb and is sustained through it: it is, in the plainest sense, clinging. Through the third and fourth weeks the back of the embryo carries a row of blocks (somites) that give the surface a notched, bitten appearance. Then the skeleton is laid down as a cartilage template **before** the muscle masses form around it and cover it — the order the verse gives, and the opposite of what you would guess from looking at a body.",
      scienceAr: "الذي أضافه علمُ الأجنّة الحديث ليس أنّ هناك أطوارًا، بل ما شكلُ كلِّ طورٍ ومتى يكون.\n\nفمن نحو اليوم السادس **يعلَق** الجنينُ بجدار الرحم ويُغذّى من خلاله: فهو عالقٌ بأوضح معنى للكلمة. وفي الأسبوعين الثالث والرابع يحمل ظهرُه صفًّا من الكتل (الجُسَيدات) تجعل سطحه كأنه مُنهَّشٌ بالأسنان. ثم يُوضع الهيكلُ غضروفًا **قبل** أن تتكوّن حوله الكتلُ العضليّةُ فتكسوه — وهو الترتيبُ الذي ذكرته الآية، وهو عكسُ ما يتوهّمه الناظرُ إلى جسدٍ تامّ.",
      when: "Wilhelm His laid the groundwork in the 1880s; George Streeter published the developmental horizons in 1942; the Carnegie stages in their present form are O'Rahilly and Müller, 1987. Nothing before the microscope could have described the clinging stage or the somite blocks, because nothing before the microscope could see them.",
      whenAr: "وضع فلهلم هِس الأساسَ في ثمانينيّات القرن التاسع عشر، ونشر جورج ستريتر أطوارَ النموّ سنة ١٩٤٢م، وصورةُ أطوار كارنيغي المعروفة اليوم لأورايلي وموللر سنة ١٩٨٧م. ولم يكن أحدٌ قبل المجهر يستطيع وصفَ طور العُلوق ولا كتلِ الظهر، لأنّ أحدًا قبل المجهر لم يكن يراها.",
      grade: "partial",
      caution: "A fit, not a proof, and the reason is Galen. Staged accounts of the embryo existed. What is NOT in Galen is the word for clinging, the chewed look of the fourth week, and bones being clothed in flesh in that order — and that is the size of the claim worth making. Keith Moore's involvement in the 1980s is often quoted as though it settled the matter; his stronger statements are disputed by other embryologists, and a card that leans on one man's endorsement is a card waiting to fall.",
      cautionAr: "موافقةٌ لا برهان، والسببُ جالينوس. فذكرُ الأطوار كان معروفًا. والذي ليس عند جالينوس لفظُ العُلوق، وهيئةُ الممضوغ في الأسبوع الرابع، وكسوةُ العظام باللحم على هذا الترتيب — وهذا قدرُ الدعوى التي تُحسن أن تقولها. وكثيرًا ما يُحتجّ بكلام كيث مور في الثمانينيّات كأنه حسم الأمر؛ وأقوالُه القويّة ينازعه فيها غيرُه من أهل الاختصاص، والبطاقةُ التي تقوم على تزكية رجلٍ واحد بطاقةٌ تنتظر السقوط.",
      keys: ["embryo","alaqah","mudghah","stages","bones","flesh","Galen","Carnegie","جنين","علقة","مضغة","أطوار","عظام","لحم","جالينوس","الأجنة"]
    }],

  "41": [{
      id: "mi-41-11",
      ayah: 11,
      title: "When the sky was smoke",
      titleAr: "حين كانت السماءُ دخانًا",
      verse: "ثُمَّ ٱسۡتَوَىٰٓ إِلَى ٱلسَّمَآءِ وَهِيَ دُخَانٞ",
      verseEn: "Then He turned to the sky while it was smoke.",
      says: "There was a stage at which what became the sky was **دخان** — smoke: not solid, not empty, something between the two that can be gathered.",
      saysAr: "كان ثَمَّ طورٌ كان فيه ما صار سماءً **دخانًا**: لا جامدًا ولا خاليًا، بل شيئًا بينهما يُمكن أن يُجمع.",
      classical: "Ibn Abbas is reported to have explained the smoke as **بخار الماء**, vapour, and that is the usual reading in the classical commentaries — a mist or steam rising. It is a plain Arabic sense of the word and it needs no astronomy.",
      classicalAr: "رُوي عن ابن عباس تفسيرُ الدخان بـ**بخار الماء**، وهو المعروف في كتب التفسير: ضبابٌ أو بخارٌ يرتفع. وهو معنًى عربيٌّ ظاهر، ولا يحتاج إلى علم فلك.",
      science: "Stars and their planets condense out of cold clouds of gas and dust — not fire, and not vacuum, but exactly the kind of thing an ordinary word for smoke would reach for. The idea goes back to Kant in 1755 and Laplace in 1796, and it stopped being a hypothesis when such discs were photographed around other stars: Beta Pictoris in 1984, and HL Tauri in detail by ALMA in 2014.",
      scienceAr: "تتكثّف النجومُ وكواكبُها من سُحبٍ باردةٍ من الغاز والغبار — لا نارٍ ولا خلاء، بل شيءٌ هو أقربُ ما يُسمّى في لغة الناس دخانًا. والقولُ به يرجع إلى كانط سنة ١٧٥٥م ولابلاس سنة ١٧٩٦م، وخرج من باب الفرض يوم صُوّرت هذه الأقراصُ حول نجومٍ أخرى: بيتا الرسّام سنة ١٩٨٤م، ثم إتش إل الثور بتفصيلٍ بمرصد ألما سنة ٢٠١٤م.",
      when: "Kant 1755, Laplace 1796; photographed around other stars from 1984, and in detail by ALMA in 2014.",
      whenAr: "كانط سنة ١٧٥٥م ولابلاس سنة ١٧٩٦م، ثم التصويرُ حول نجومٍ أخرى من سنة ١٩٨٤م، وبالتفصيل بمرصد ألما سنة ٢٠١٤م.",
      grade: "partial",
      caution: "A fit, not a proof. The classical reading — vapour — is a perfectly good sense of the word and requires nothing from physics. What is worth saying is narrower and still worth saying: the verse puts a stage BEFORE the sky, and describes it as neither solid nor empty.",
      cautionAr: "موافقةٌ لا برهان. فتفسيرُ الدخان بالبخار معنًى صحيحٌ للكلمة لا يحتاج إلى فيزياء. والذي يستحقّ أن يُقال أضيقُ من ذلك وهو يستحقّ: أنّ الآية أثبتت طورًا **قبل** السماء، ووصفته بأنه ليس جامدًا ولا خاليًا.",
      keys: ["smoke","dukhan","nebula","gas","dust","Laplace","ALMA","دخان","السديم","الغاز","الغبار","تكوّن النجوم"]
    }],

  "75": [{
      id: "mi-75-4",
      ayah: 3,
      title: "Not the bones — the fingertips",
      titleAr: "لا العظام، بل البنان",
      verse: "أَيَحۡسَبُ ٱلۡإِنسَٰنُ أَلَّن نَّجۡمَعَ عِظَامَهُۥ ۝ بَلَىٰ قَٰدِرِينَ عَلَىٰٓ أَن نُّسَوِّيَ بَنَانَهُۥ",
      verseEn: "Does man think that We will not assemble his bones? Yes — able to shape even his fingertips.",
      says: "The objection is about **bones**; the answer raises the standard rather than meeting it, and names the hardest thing to restore: the **fingertips**.",
      saysAr: "الاعتراضُ عن **العظام**، فجاء الجوابُ يرفع السقفَ ولا يكتفي بمقابلته، وسمّى أدقَّ ما يُعاد: **البنان**.",
      classical: "The mufassirun read it exactly as the reader would: We can restore him down to the smallest and most intricate bones — the fingers. Some of them add that Allah is able to make his hand a single piece, like a hoof, and that the shaping of separate fingers is itself the favour being pointed at. Nothing in that reading needs anything discovered later.",
      classicalAr: "فسّرها المفسّرون كما يفهمها القارئ: نقدر على إعادته حتى أدقّ عظامه وألطفها، وهي الأصابع. وزاد بعضُهم أنّ الله قادرٌ على أن يجعل يده قطعةً واحدةً كالحافر، وأنّ تفصيلَ الأصابع نفسه هو النعمةُ المُشار إليها. وليس في هذا الفهم شيءٌ يحتاج إلى علمٍ جاء بعدُ.",
      science: "The fingertip turned out to be the one patch of skin that identifies a person. The ridges form on the fetus in the womb, are fixed for life, and differ between identical twins. Purkinje classified the patterns in 1823, Henry Faulds proposed their use for identification in Nature in 1880, and Francis Galton put the odds on it in 1892.",
      scienceAr: "تبيّن أنّ طرف الإصبع هو الموضعُ الوحيد من الجلد الذي يُعرَف به صاحبُه. فالخطوطُ تتكوّن في الرحم، وتثبت مدى العمر، وتختلف بين التوأمين المتطابقين. صنّف بوركينيه أشكالَها سنة ١٨٢٣م، واقترح هنري فولدز استعمالَها في التعرّف في مجلّة «نيتشر» سنة ١٨٨٠م، ووضع فرنسيس غالتون حسابَ احتمالها سنة ١٨٩٢م.",
      when: "Purkinje 1823, Faulds in Nature 1880, Galton 1892.",
      whenAr: "بوركينيه سنة ١٨٢٣م، وفولدز في «نيتشر» سنة ١٨٨٠م، وغالتون سنة ١٨٩٢م.",
      grade: "partial",
      caution: "The verse does not say prints, and saying that it does is where this one is usually lost. It names the fingertip as the example of the finest restoration — and the fingertip later turned out to be the part that is unique to one person. State it in that order and it stands; state it as \"the Quran mentioned fingerprints\" and the first person who reads the Arabic will take it from you.",
      cautionAr: "ليس في الآية ذكرُ البصمة، ومن قال إنّ فيها ذلك فمن هنا يُؤتى. وإنما سمّت البنانَ مثالًا لأدقّ ما يُعاد — ثم تبيّن بعدُ أنّ البنان هو موضعُ ما ينفرد به الإنسانُ عن غيره. فقل هذا على هذا الترتيب يثبت لك؛ وقل «ذكر القرآنُ البصمات» ينتزعه منك أوّلُ من يقرأ العربية.",
      keys: ["fingertips","banan","fingerprint","resurrection","bones","Galton","Faulds","البنان","البصمة","الأصابع","البعث","العظام"]
    }],

  "15": [{
      id: "mi-15-22",
      ayah: 22,
      title: "Winds described as fertilising",
      titleAr: "الرياحُ موصوفةً بأنها لواقح",
      verse: "وَأَرۡسَلۡنَا ٱلرِّيَٰحَ لَوَٰقِحَ فَأَنزَلۡنَا مِنَ ٱلسَّمَآءِ مَآءٗ فَأَسۡقَيۡنَٰكُمُوهُ",
      verseEn: "And We sent the winds as fertilisers, and sent down water from the sky and gave it to you to drink.",
      says: "The winds are given a job and a name: **لواقح** — the ones that make things conceive. Then water comes down, as if the second follows from the first.",
      saysAr: "أُعطيت الرياحُ عملًا واسمًا: **لواقح** — أي تُلقِح. ثم ينزل الماءُ، كأنّ الثاني أثرٌ للأوّل.",
      classical: "The commentators were already divided between two readings, and both are old. Ibn Abbas and others read لواقح of the wind carrying water to the cloud so that it becomes heavy — the wind making the CLOUD conceive. Others read it of the wind carrying what makes PLANTS conceive. Al-Qurtubi reports both. So the pollination sense is in the classical books, not an import.",
      classicalAr: "اختلف المفسّرون على قولين، وكلاهما قديم. فقرأها ابنُ عباس وغيرُه في الريح تحمل الماء إلى السحاب فيثقل — فالريحُ تُلقِح **السحاب**. وحملها آخرون على أنّ الريح تحمل ما تُلقَح به **النبات**. وذكر القرطبيُّ الوجهين. فمعنى التلقيح في كتب المفسّرين، لا مستوردًا عليها.",
      science: "Both readings turned out to name a real mechanism.\n\nWind pollination is how grasses, date palms and most forest trees reproduce — and that plants reproduce sexually at all was only demonstrated by Camerarius in 1694. And a cloud does not rain without something for water to condense on: the condensation nuclei carried on the wind, which is why seeding a cloud with particles can make it rain (Bergeron 1935; Langmuir and Schaefer, 1946).",
      scienceAr: "وتبيّن أنّ كلا الوجهين يُسمّي أمرًا واقعًا.\n\nفتلقيحُ الريح هو طريقُ تكاثر النجيليّات والنخيل وأكثر شجر الغابات — ولم يُثبَت أنّ للنبات تكاثرًا جنسيًّا أصلًا إلّا على يد كاميراريوس سنة ١٦٩٤م. والسحابةُ لا تُمطر حتى يكون فيها ما يتكثّف عليه الماء: وهي نوى التكاثف التي تحملها الريح، ولذلك صار بذرُ السحاب بالجُسيمات يُنزل المطر (برجرون سنة ١٩٣٥م، ولانغموير وشيفر سنة ١٩٤٦م).",
      when: "Camerarius 1694 for plant sex; Bergeron 1935 and Langmuir and Schaefer 1946 for condensation nuclei and cloud seeding.",
      whenAr: "كاميراريوس سنة ١٦٩٤م في تكاثر النبات، وبرجرون سنة ١٩٣٥م ولانغموير وشيفر سنة ١٩٤٦م في نوى التكاثف وبذر السحاب.",
      grade: "partial",
      caution: "A fit, not a proof — and here the reason is unusual: the classical commentators had ALREADY said both things. The verse is remarkable for the word chosen, not for information nobody had. Anyone who says \"the Quran revealed wind pollination\" is also saying the mufassirun who wrote it down centuries before Camerarius did not exist.",
      cautionAr: "موافقةٌ لا برهان — والسببُ هنا غريب: أنّ المفسّرين قالوا الأمرين **قبلُ**. فالعجيبُ في الآية اللفظُ الذي اختير، لا خبرٌ لم يكن عند أحد. ومن قال «كشف القرآنُ تلقيح الرياح» فقد ألغى في الوقت نفسه المفسّرين الذين كتبوه قبل كاميراريوس بقرون.",
      keys: ["wind","pollination","lawaqih","clouds","rain","Camerarius","cloud seeding","الرياح","لواقح","التلقيح","السحاب","المطر","بذر السحاب"]
    }],

  "27": [{
      id: "mi-27-88",
      ayah: 88,
      title: "Mountains passing like clouds — and the claim that it means plate tectonics",
      titleAr: "الجبالُ تمرّ مرّ السحاب — ودعوى أنها زحزحةُ القارّات",
      verse: "وَتَرَى ٱلۡجِبَالَ تَحۡسَبُهَا جَامِدَةٗ وَهِيَ تَمُرُّ مَرَّ ٱلسَّحَابِۚ",
      verseEn: "And you see the mountains, thinking them firm, while they pass as the clouds pass.",
      says: "Mountains that look fixed are in motion — and the motion is likened to the drift of clouds.",
      saysAr: "جبالٌ تُرى ثابتةً وهي تسير — وشُبِّه سيرُها بمرور السحاب.",
      classical: "Read the verse before it and the verse after it. Before: the Trumpet is blown and everyone in the heavens and the earth is terrified. After: whoever comes with a good deed. The mufassirun therefore read this of the Day of Resurrection — the mountains moved and driven on that Day — and they are reading the passage, not avoiding a conclusion.",
      classicalAr: "اقرأ الآيةَ قبلها والآيةَ بعدها. فقبلها: يُنفخ في الصور ففزع من في السماوات والأرض. وبعدها: من جاء بالحسنة. فحمل المفسّرون هذه على يوم القيامة — الجبالُ تُسيَّر وتُسخَّر في ذلك اليوم — وهم يقرؤون السياق، لا يفرّون من نتيجة.",
      science: "Continents do move, about as fast as a fingernail grows, and the mechanism — sea-floor spreading and plate tectonics — was settled between Hess in 1962 and the Vine-Matthews-Morley result in 1963. The earth also turns, carrying every mountain on it at several hundred metres a second.\n\nBoth are true. Neither is what this verse is about.",
      scienceAr: "والقارّاتُ تتحرّك فعلًا، بسرعةٍ قريبةٍ من نموّ الظفر، واستقرّ تفسيرُ ذلك — اتّساعُ قاع المحيط وتكتونيّةُ الصفائح — بين بحث هِس سنة ١٩٦٢م ونتيجة فاين وماثيوز ومورلي سنة ١٩٦٣م. والأرضُ أيضًا تدور فتحمل كلَّ جبلٍ عليها مئاتِ الأمتار في الثانية.\n\nوكلاهما حقّ. وليس واحدٌ منهما هو موضوعَ هذه الآية.",
      when: "Hess 1962; Vine, Matthews and Morley, 1963.",
      whenAr: "هِس سنة ١٩٦٢م، وفاين وماثيوز ومورلي سنة ١٩٦٣م.",
      grade: "not-established",
      caution: "**Not established — and the reason is the one that should decide every card here: the passage.** A verse does not change subject because a later century found something that would fit. There is a real and separate discussion among the mufassirun about whether some of it also describes this world; take that up if you wish, with the tafsir in your hand. What you may not do is lift three words out of a passage about the Trumpet and present them as geology.",
      cautionAr: "**لا تثبت — والسببُ هو الذي ينبغي أن يحكم كلَّ بطاقةٍ هنا: السياق.** فالآيةُ لا يتغيّر موضوعُها لأنّ قرنًا متأخّرًا وجد ما يوافقها. وثَمَّ بحثٌ حقيقيٌّ منفصلٌ بين المفسّرين في أنّ بعضها قد يصف الدنيا أيضًا؛ فخُذ فيه إن شئتَ والتفسيرُ بيدك. وأمّا أن تُنتزع ثلاثُ كلماتٍ من سياق النفخ في الصور وتُقدَّم على أنها جيولوجيا فلا.",
      keys: ["mountains","move","tectonics","continents","resurrection","trumpet","الجبال","تمر","الصفائح","القارات","القيامة","الصور"]
    }],

  "10": [{
      id: "mi-10-5",
      ayah: 5,
      title: "The sun a ضياء and the moon a نور — and why this is not a discovery",
      titleAr: "الشمسُ ضياءً والقمرُ نورًا — ولماذا ليس هذا كشفًا",
      verse: "هُوَ ٱلَّذِي جَعَلَ ٱلشَّمۡسَ ضِيَآءٗ وَٱلۡقَمَرَ نُورٗا",
      verseEn: "It is He who made the sun a shining light and the moon a reflected light.",
      says: "Two different words for two lights: **ضياء** for the sun, **نور** for the moon. The lexicons do distinguish them — ضياء of light a thing gives off itself, نور of light more generally, including light that falls on a thing.",
      saysAr: "لفظان مختلفان لنورين: **ضياء** للشمس، و**نور** للقمر. وكتبُ اللغة تفرّق بينهما: فالضياءُ ما كان من الشيء نفسه، والنورُ أعمّ، ويدخل فيه ما وقع على الشيء.",
      classical: "The mufassirun did notice the difference in the two words, and some of them explained it exactly as a modern reader would like: the sun's light is its own, the moon's is borrowed. That is in the classical books. It is a point about Arabic, and it was available to anyone reading carefully.",
      classicalAr: "وقد تنبّه المفسّرون إلى الفرق بين اللفظين، وفسّره بعضُهم بما يودّه القارئُ اليوم: أنّ ضوء الشمس من ذاتها، ونورَ القمر مستعار. وهذا في كتب التفسير القديمة. وهو كلامٌ في العربية، كان في متناول كلّ قارئٍ متأمّل.",
      science: "And here is the part that decides the grade. That the moon shines by reflected sunlight was not discovered in the modern period at all. **Anaxagoras said it around 450 BCE.** Aristotle repeats it, Ptolemy works with it, and it was ordinary astronomy in the Greek and then the Arabic scientific tradition long before and long after the Quran was recited.",
      scienceAr: "وهنا ما يحسم الدرجة. فكونُ القمر يضيء بنور الشمس المنعكس لم يُكتشف في العصر الحديث أبدًا. **قاله أناكساغوراس نحو سنة ٤٥٠ قبل الميلاد.** وأعاده أرسطو، وبنى عليه بطليموس، وكان علمَ فلكٍ معتادًا في التراث اليونانيّ ثم العربيّ قبل نزول القرآن بقرون وبعده بقرون.",
      when: "Anaxagoras, about 450 BCE — a thousand years before the revelation, not after it.",
      whenAr: "أناكساغوراس نحو سنة ٤٥٠ قبل الميلاد — أي قبل الوحي بألف سنة، لا بعده.",
      grade: "not-established",
      caution: "**Not established as a miracle, and it is important to say why: the fact was not out of reach.** This page's whole test is the gap between what the verse says and when anyone could first have checked it. Here there is no gap — the Greeks had it, and so did the Arab astronomers. The choice of two different words is a real and beautiful feature of the Arabic, and it is worth teaching as that. Presenting it as information nobody had is simply false, and a reader who looks it up will stop believing the cards that are true.",
      cautionAr: "**لا تثبت ميزةً إعجازيّة، ويهمّ أن يُقال لماذا: لأنّ الخبر لم يكن بعيدَ المنال.** فميزانُ هذه الصفحة كلِّه الفجوةُ بين ما تقوله الآية ومتى صار التحقّقُ منه ممكنًا. ولا فجوةَ هنا: فقد عرفه اليونان، وعرفه فلكيّو العرب. وأمّا اختيارُ لفظين مختلفين فميزةٌ حقيقيّةٌ جميلةٌ في العربية، وتستحقّ أن تُعلَّم على أنها كذلك. وأمّا تقديمُها على أنها خبرٌ لم يكن عند أحدٍ فكذبٌ ظاهر، ومن راجعه سقطت عنده البطاقاتُ الصادقةُ معها.",
      keys: ["sun","moon","diya","nur","reflected","light","Anaxagoras","الشمس","القمر","ضياء","نور","الانعكاس","أناكساغوراس"]
    }]
};
