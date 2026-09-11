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

  "6": [{
    id: "mi-6-125",
    ayah: 125,
    title: "The chest tightens as you climb",
    titleAr: "الصدرُ يضيق كلّما ارتفعتَ",
    verse: "وَمَن يُرِدۡ أَن يُضِلَّهُۥ يَجۡعَلۡ صَدۡرَهُۥ ضَيِّقًا حَرَجٗا كَأَنَّمَا يَصَّعَّدُ فِي ٱلسَّمَآءِۚ",
    verseEn: "And whoever He wants to misguide - He makes his breast tight and constricted as though he were climbing into the sky.",
    says: "The verse is about guidance, and it reaches for a comparison to make the feeling concrete: a chest so tight it is like the chest of a man climbing upward into the sky. The simile is doing physical work. It only lands if going up actually does that to a chest.",
    saysAr: "الآيةُ في الهداية، وضربت مثلًا يُقرّب الإحساس: صدرٌ ضيّقٌ حرِج كصدر رجلٍ يصعد في السماء. والتشبيهُ ههنا يحمل معنًى محسوسًا، ولا يستقيم إلا إذا كان الصعودُ يفعل هذا بالصدر حقًّا.",
    classical: "The mufassirun took it as a picture of extreme constriction and difficulty, and several noted the comparison to ascending because a man rising into the air finds it hard. They were reading it as a vivid image of hardship, not as a statement about air pressure — and nothing in their reading depends on one.",
    classicalAr: "حمَله المفسّرون على تصوير شدّة الضيق والحرج، وذكر بعضُهم أنّ المشبَّه به الصعودُ لأنّ الصاعدَ في الهواء يجد المشقّة. فكانوا يقرؤونها صورةً بليغةً للشدّة، لا خبرًا عن ضغط الهواء، وليس في قراءتهم شيءٌ متوقّفٌ على ذلك.",
    science: "Air pressure falls with altitude, and with it the partial pressure of oxygen. Above roughly 2,500 metres the body begins to struggle; at the height of the great peaks a person cannot survive long without supplementary oxygen. The subjective symptom is exactly the one the verse names: breathlessness and a tight chest.",
    scienceAr: "ضغطُ الهواء ينقص كلّما ارتفعت، وينقص معه الضغطُ الجزئيّ للأكسجين. فمن نحو ألفين وخمسمئة مترٍ يبدأ الجسدُ يعاني، وعلى القمم العالية لا يبقى الإنسانُ طويلًا بغير أكسجينٍ إضافيّ. والعَرَضُ الذي يُحسُّ به هو عينُ ما سمّته الآية: ضيقُ النفَس والصدر.",
    when: "Evangelista Torricelli built the barometer in 1643. In 1648 Blaise Pascal had the experiment carried up the Puy de Dôme and the mercury column fell with height — the first demonstration that air presses less the higher you go. Before that, nobody had been high enough, or instrumented enough, to know it.",
    whenAr: "صنع إيفانجليستا توريتشيلّي البارومتر سنة ١٦٤٣م. وفي سنة ١٦٤٨م أمر بليز باسكال بحمل التجربة إلى قمّة «بوي دو دوم»، فنقص عمودُ الزئبق بالارتفاع — وكان ذلك أوّلَ برهانٍ على أنّ الهواء يخفّ ضغطُه كلّما علوت. وقبل ذلك لم يكن أحدٌ قد بلغ ارتفاعًا كافيًا ولا ملَك آلةً كافية ليعلمه.",
    grade: "strong",
    caution: "The strength here is in the simile being specific and correct, not in the verse teaching physics. Its subject is the heart, and it stays the subject.",
    cautionAr: "وقوّةُ الأمر ههنا في أنّ التشبيه دقيقٌ مطابق، لا في أنّ الآية تُعلّم الفيزياء. فموضوعُها القلب، وهو موضوعُها إلى آخرها.",
    keys: ["altitude","oxygen","pressure","mountain","breathing","chest","climb",
           "الارتفاع","الأكسجين","الضغط","الجبل","التنفس","الصدر","الصعود"]
  }],

  "16": [{
    id: "mi-16-15",
    ayah: 15,
    title: "Mountains cast in, so the earth does not sway",
    titleAr: "جبالٌ أُلقيت لئلّا تميد الأرض",
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
  }],

  "21": [{
    id: "mi-21-30",
    ayah: 30,
    title: "Joined, then split apart — and every living thing from water",
    titleAr: "كانتا رتقًا ففتقناهما — وكلُّ حيٍّ من الماء",
    verse: "أَوَلَمۡ يَرَ ٱلَّذِينَ كَفَرُوٓاْ أَنَّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ كَانَتَا رَتۡقٗا فَفَتَقۡنَٰهُمَاۖ وَجَعَلۡنَا مِنَ ٱلۡمَآءِ كُلَّ شَيۡءٍ حَيٍّۚ",
    verseEn: "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them and made from water every living thing?",
    says: "Two separate statements. The heavens and the earth were رَتْق — sewn shut, one closed mass — and were then فَتْق, torn open. And: every living thing was made from water.",
    saysAr: "خبران منفصلان. الأول: أنّ السماوات والأرض كانتا **رَتْقًا** — أي ملتحمتين مسدودتين شيئًا واحدًا — ثم **فُتِقتا** أي شُقّتا. والثاني: أنّ كلَّ شيءٍ حيٍّ جُعل من الماء.",
    classical: "This is where honesty matters most on this page. The classical mufassirun overwhelmingly read the first half as RAIN AND PLANTS: the sky was closed and gave no rain, so it was opened; the earth was closed and gave no growth, so it was split. That reading is old, it is well attested, and it requires no cosmology whatever. Anyone presenting the Big Bang reading as the only possible one is not telling you the whole picture.",
    classicalAr: "وههنا موضعُ الأمانة في هذه الصفحة. فجمهورُ المفسّرين حملوا النصفَ الأوّل على **المطر والنبات**: كانت السماءُ رتقًا لا تُمطر ففُتقت بالمطر، وكانت الأرضُ رتقًا لا تُنبت ففُتقت بالنبات. وهذه قراءةٌ قديمةٌ ثابتةٌ لا تحتاج إلى علم فلكٍ ألبتّة. ومن قدّم قراءةَ الانفجار العظيم على أنها الوجهُ الوحيد فلم يُطلعك على الصورة كاملة.",
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
    saysAr: "الصورةُ مبنيّةٌ طبقاتٍ مرتّبةً من أسفلَ إلى أعلى: بحرٌ **لُجِّيّ** أي عميقٌ كثيرُ الماء؛ يغشاه موج؛ ومن فوق ذلك الموجِ **موجٌ آخر**؛ ومن فوقهما سحاب. ثم النتيجة: ظلماتٌ بعضها فوق بعض، ورجلٌ يُخرج يدَه فلا يكاد يراها. وهو وصفُ موضعٍ ممّن يصف حالَ من هو فيه.",
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
    titleAr: "والشمسُ تجري لمستقرٍّ لها",
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
    classicalAr: "وههنا المثالُ المعارض الذي لا بدّ من ذكره، لأنه في القرآن نفسه. ففي سورة الزمر: **﴿وَأَنزَلَ لَكُم مِّنَ ٱلۡأَنۡعَٰمِ ثَمَٰنِيَةَ أَزۡوَٰجٖۚ﴾**. والإبلُ والغنمُ لم تنزل من السماء. فـ**أنزل** يأتي كثيرًا بمعنى الإعطاء والتسخير، وعلى هذا حمل المفسّرون آيةَ الحديد. ومن احتجّ بآية الحديد في علم الفلك ولم يذكر آيةَ الزمر فقد احتجّ بنصف الأدلّة.",
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
    saysAr: "تأمّل الألفاظ. **الطَّارِق** هو الآتي ليلًا — من الطَّرْق وهو الضرب، لأنّ آتيَ الليل يطرق الباب. و**الثَّاقِب** هو النافذ، النجمُ الذي يخرق ضوءُه الظلام. وهذا كلُّ ما تقوله الآياتُ الثلاث.",
    classical: "The mufassirun were unanimous on the sense: a star that appears at night, whose light pierces. Some named a particular star, some left it general. Not one of them read a sound into it, because there is no sound in it.",
    classicalAr: "أجمع المفسّرون على المعنى: نجمٌ يبدو ليلًا يثقُب ضوءُه الظلام. وعيّن بعضُهم نجمًا بعينه، وأبقاه بعضُهم عامًّا. ولم يقرأ واحدٌ منهم فيه صوتًا، إذ ليس فيه صوت.",
    science: "The claim in circulation is this: pulsars are collapsed stars that emit radio pulses at an extremely regular rate, and when those pulses are fed through a loudspeaker they sound like knocking or a drumbeat — so الطارق, the knocker, is a pulsar. Pulsars are real: Jocelyn Bell Burnell detected the first in 1967. But the knocking is not a sound the star makes. It is a radio signal, and the drum is what a human being hears after converting that signal into audio. Space carries no sound. And the verse does not say the star makes a noise; it says it comes at night and it pierces.",
    scienceAr: "والدعوى المتداولةُ هي: أنّ النجومَ النابضة نجومٌ منهارةٌ تُصدر نبضاتٍ راديويّةً بالغةَ الانتظام، وإذا مُرِّرت تلك النبضاتُ في مكبّر صوتٍ سُمعت كالطَّرق أو ضربِ الطبل — فالطارقُ إذن نجمٌ نابض. والنجومُ النابضةُ حقيقةٌ ثابتة، رصدت جوسلين بِل بَرنيل أوّلَها سنة ١٩٦٧م. غير أنّ ذلك الطَّرق ليس صوتًا يُصدره النجم، وإنما هو إشارةٌ راديويّة، والطبلُ هو ما يسمعه الإنسانُ بعد تحويل تلك الإشارة إلى صوت. والفضاءُ لا ينقل الصوت. والآيةُ لم تقل إنّ النجم يُصوّت، وإنما قالت إنه يأتي ليلًا وإنه ثاقب.",
    when: "The first pulsar was detected in 1967 by Jocelyn Bell Burnell at Cambridge.",
    whenAr: "رُصد أوّلُ نجمٍ نابضٍ سنة ١٩٦٧م على يد جوسلين بِل بَرنيل في كامبردج.",
    grade: "not-established",
    caution: "This card exists because the claim is everywhere and a reader will meet it. Say the true thing instead: الطارق is a magnificent word — the visitor who arrives in the dark and knocks — and the Quran uses it of a star and then asks you what you think you know about it. That is worth more than a borrowed pulsar.\n\nAnd notice the cost of the weak version. A listener who checks it finds that space is silent, and then doubts the deep-sea verse he heard from you an hour earlier. That is the whole reason this page grades.",
    cautionAr: "وإنما وُضعت هذه البطاقةُ لأنّ الدعوى منتشرةٌ وسيلقاها القارئ. فقُل الصادقَ بدلها: أنّ **الطارق** لفظٌ عظيم — الزائرُ يأتي في الظلمة فيطرق — استعمله القرآنُ للنجم ثم سألك: وما أدراك ما هو؟ وهذا خيرٌ من نجمٍ نابضٍ مستعار.\n\nوتأمّل ثمنَ الرواية الضعيفة: سامعٌ يتحقّق فيجد أنّ الفضاء لا صوت فيه، فيرتاب فيما سمعه منك قبل ساعةٍ عن ظلمات البحر. وهذا وحده هو سببُ التدريج في هذه الصفحة.",
    keys: ["tariq","pulsar","star","sound","drum","knocking","bell burnell",
           "الطارق","النجم النابض","النجم","الصوت","الطبل","الثاقب","دعوى"]
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
  }]
};
