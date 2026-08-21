/* ============================================================
   WHY THIS TENSE — لِمَ جاء الفعل بهذه الصيغة
   ------------------------------------------------------------
   The owner asked for this by name, and gave the example himself:

     "Usually the Quran, when he mentions things, he uses the past
      phrase. So why is that? ... Joseph asked them to bring their
      brother ... and when they told their father, they said it in
      another phase. That type of connection between the past and
      the present and the future is very, very important in
      understanding the meanings of the Quran itself."

   He is describing Yusuf 12:60 against 12:63, and he is right:
   Yusuf sets a CONDITION about the future — "if you do not bring
   him to me, there will be no measure for you" — and the brothers
   report it to their father as a finished PAST fact in the
   PASSIVE: "the measure has been withheld from us." A condition
   they could still meet becomes a door already shut, and the
   passive removes the person who shut it. That is the entry at
   "12:60" and "12:63" below, and it is the model for all of them.

   THE SHAPE OF AN ENTRY, and the discipline behind it:

     head / headAr     the phenomenon, named
     form / formAr     what form the word is actually in
     why  / whyAr      why THAT form is the right one here
     ifOther/ifOtherAr WHAT WOULD CHANGE IF IT SAID THE OTHER —
                       this field is not optional. The owner asked
                       for it explicitly, and it is what turns a
                       grammar label into an insight: you only feel
                       the choice when you see the alternative.
     plain / plainAr   the same thing for someone who has never
                       opened a grammar book
     pair              the verse this one is answered by, when the
                       point IS the pair (12:60 ↔ 12:63)
     ref / refAr       where to check it
     strength          `sarf` for a fact about the form itself,
                       `tafsir` when a named scholar is being
                       followed, `quran` when the text says it

   FOUR RULES.

   1. NO ARABIC TYPED FROM MEMORY. Every quotation here was copied
      out of js/quran-text.js, the same Uthmani text the Quran page
      renders. If you add an entry, copy it the same way.

   2. THE CLAIM MUST BE ABOUT THE ARABIC, NOT THE TRANSLATION.
      English cannot carry most of these devices — Sahih
      International renders 16:1's past أَتَىٰ as "is coming",
      because a literal "has come" would read as an error. That
      smoothing is itself worth pointing at, and one entry does.

   3. SAY WHEN IT IS AN OPINION. A verb being past tense is a fact
      anyone can check. WHY it is past is often a reading, and
      where it is, the reading is attributed — az-Zamakhshari,
      ar-Razi, Ibn Ashur, as-Suyuti in al-Itqan.

   4. NOTHING HERE IS A RULING. This is about how the sentence is
      built. It never decides a question of law.
   ============================================================ */

const TADABBUR_TENSE = {

  /* ==========================================================
     THE OWNER'S OWN EXAMPLE — Yusuf, and the sentence that
     changed shape between the man who said it and the men who
     repeated it.
     ========================================================== */

  "12:60": {
    head: "A condition about the future — still open, still in their hands",
    headAr: "شرطٌ في المستقبل — ما زال مفتوحًا وبيدهم",
    form: "**فَإِن لَّمْ تَأْتُونِى بِهِۦ** — the conditional particle **إِنْ** with a jussive verb: **if** you do not bring him. Nothing has happened yet. The apodosis, **فَلَا كَيْلَ لَكُمْ عِندِى**, is a negation of something in the future, not a report of something past.",
    formAr: "﴿**فَإِن لَّمْ تَأْتُونِى بِهِۦ**﴾ — أداة الشرط **إنْ** مع الفعل المجزوم: **إنْ** لم تأتوني. فلم يقع شيءٌ بعد. وجوابُ الشرط ﴿**فَلَا كَيْلَ لَكُمْ عِندِى**﴾ نفيٌ لأمرٍ مستقبل، لا إخبارٌ عن ماضٍ وقع.",
    why: "Read what Yusuf عليه السلام actually put in front of them. He did not close the door; he told them where the handle is. The whole sentence is built on **إِنْ** — the particle of a condition that may or may not come about — and the outcome depends entirely on what they choose to do next.\n\nAnd the verse before it is generous: \"Do you not see that I give full measure and I am the best of hosts?\" He gives them the reason to come back before he gives them the condition.\n\nSo the state of affairs at the end of 12:60 is this: **the measure is available to them, on a condition they are able to meet.**",
    whyAr: "تأمّل ما وضعه يوسف عليه السلام بين أيديهم: لم يُغلق الباب، وإنما دلّهم على مقبضه. فالجملة كلّها مبنيّةٌ على **إنْ**، وهي أداةُ شرطٍ يجوز وقوعه وعدمُه، والنتيجةُ معلّقةٌ بما يختارون.\n\nوالآيةُ قبلها فيها إكرام: ﴿أَلَا تَرَوْنَ أَنِّىٓ أُوفِى ٱلْكَيْلَ وَأَنَا۠ خَيْرُ ٱلْمُنزِلِينَ﴾. فأعطاهم الباعثَ على العودة قبل أن يذكر الشرط.\n\nفحاصلُ الأمر عند ختام الآية: **الكيلُ متاحٌ لهم بشرطٍ يقدرون عليه.**",
    ifOther: "Suppose it had been put in the past: **\"I have withheld the measure from you.\"** Then there is nothing to do, nothing to bring, and no reason to return — and the entire rest of the surah does not happen. The brothers only come back because a condition was left open. **The whole plot turns on the verb being conditional and not past.**",
    ifOtherAr: "فلو قيل بلفظ الماضي: «قد منعتُ عنكم الكيل» لما بقي عملٌ يُعمل، ولا أخٌ يُؤتى به، ولا داعٍ إلى الرجوع — ولانقطعت السورةُ كلُّها عمّا بعد. وإنما رجع الإخوةُ لأنّ الشرط تُرك مفتوحًا. **فمدارُ القصّة كلّها على كون الفعل شرطًا لا ماضيًا.**",
    plain: "In plain words: Yusuf said \"IF you don't bring him, THEN there'll be no more grain.\" That is a door with a key in it. He is telling them exactly how to come back.",
    plainAr: "بعبارة أخرى: قال يوسف: «إنْ لم تأتوني به فلا كيل لكم». وهذا بابٌ في قفله مفتاحه، فهو يدلّهم على طريق الرجوع.",
    pair: {
      ref: "Surah Yusuf (12:63)", refAr: "سورة يوسف (١٢:٦٣)",
      ar: "فَلَمَّا رَجَعُوٓا۟ إِلَىٰٓ أَبِيهِمْ قَالُوا۟ يَٰٓأَبَانَا مُنِعَ مِنَّا ٱلْكَيْلُ فَأَرْسِلْ مَعَنَآ أَخَانَا نَكْتَلْ",
      en: "So when they returned to their father, they said: \"O our father, the measure has been denied to us, so send our brother with us that we may obtain the measure.\"",
      how: "**Now watch what happens to the sentence when they carry it home.** Yusuf's conditional becomes a completed past passive: مُنِعَ — **it has been withheld**. Follow the entry on 12:63.",
      howAr: "**وانظر ماذا يصير إلى الجملة حين يحملونها إلى أبيهم:** يصير شرطُ يوسفَ ماضيًا مبنيًّا للمجهول: ﴿مُنِعَ﴾. وانظر مدخل الآية (١٢:٦٣)."
    },
    ref: "Surah Yusuf (12:59-60); the pair is at 12:63",
    refAr: "سورة يوسف (١٢:٥٩-٦٠)؛ والمقابل في (١٢:٦٣)",
    strength: "quran"
  },

  "12:63": {
    head: "The same news, turned into the past — and into the passive",
    headAr: "الخبرُ نفسُه، وقد صار ماضيًا ومبنيًّا للمجهول",
    form: "**مُنِعَ مِنَّا ٱلْكَيْلُ** — a **perfect** verb (done, finished) in the **passive** voice (no doer named). Not **\"he will withhold\"**, not **\"he said he would withhold if…\"** — but the measure **has been** withheld.",
    formAr: "﴿**مُنِعَ مِنَّا ٱلْكَيْلُ**﴾ — فعلٌ **ماضٍ** (منقضٍ تامّ) **مبنيٌّ للمجهول** (لم يُسمَّ فاعله). لا «سيمنع»، ولا «قال إنه يمنع إنْ لم…»، وإنما **مُنِعَ** الكيلُ وانتهى.",
    why: "Two changes were made to Yusuf's sentence on the road home, and each one does a job.\n\n**The condition became a fact.** He said **if you do not bring him**; they said **it has been withheld**. A thing their father could still prevent is presented to him as a thing already done. You cannot argue with a completed event — you can only respond to it. And the response they want is in the very next clause: **فَأَرْسِلْ مَعَنَا أَخَانَا** — so send our brother with us.\n\n**The doer disappeared.** The passive names no one. Not \"the Aziz withheld it\", not \"we were told to bring Binyamin\". Say it in the active and the father asks the obvious question — **who withheld it, and on what condition?** — and the condition comes out, and with it the fact that this is a choice. The passive closes that question before it can be asked.\n\nAnd notice they never actually lie. Every word is defensible. What was altered was the **shape** of the sentence, not its content — which is exactly why this deserves study: **you can mislead a person without saying one false thing, purely by changing a tense and dropping a subject.**",
    whyAr: "تغيّر في جملة يوسف شيئان في طريق العودة، ولكلٍّ منهما عمل.\n\n**صار الشرطُ خبرًا واقعًا.** قال: «إن لم تأتوني به»، فقالوا: ﴿مُنِعَ﴾. فما كان أبوهم قادرًا على تلافيه عُرض عليه أمرًا قد فُرغ منه. والواقعُ المنقضي لا يُنازَع فيه، وإنما يُستجاب له. والاستجابةُ المطلوبة في الجملة التي تليه: ﴿**فَأَرْسِلْ مَعَنَآ أَخَانَا**﴾.\n\n**وغاب الفاعل.** فالمبنيُّ للمجهول لا يُسمّي أحدًا: لا «منعه العزيز»، ولا «أُمرنا أن نأتيَ ببنيامين». ولو قيل بالبناء للمعلوم لسأل الأبُ السؤال الظاهر: ومن منعه؟ وبأيّ شرط؟ فيظهر الشرطُ، ويظهر معه أنّ الأمر اختيار. فالبناءُ للمجهول يسدّ هذا السؤال قبل أن يُطرح.\n\nوتأمّل أنهم لم يكذبوا في لفظ، فكلُّ كلمةٍ لها وجهٌ يُحتمل. وإنما غُيّرت **صورةُ** الجملة لا مضمونُها — وهذا عينُ ما يستحقّ التأمّل: **قد يُوهَم المرءُ من غير كلمةٍ كاذبة، بتغيير زمنٍ وحذف فاعل لا غير.**",
    ifOther: "Say it back in Yusuf's own form — **\"the Aziz will give us no measure unless we bring Binyamin with us\"** — and the father is looking at a request, not a report. He can weigh it, refuse it, propose something else. He does none of those, because what he was handed was not a request.\n\nAnd he had refused this before. Compare 12:11-14: when they asked for Yusuf, they asked openly — **send him with us tomorrow** — and Ya'qub said plainly that he feared the wolf. **They had already learned that an open request from them gets refused.**",
    ifOtherAr: "ولو أُعيدت على صورة كلام يوسف: «لا يكيل لنا العزيز حتى نأتيَه ببنيامين» لكان الأبُ أمام طلبٍ لا أمام خبر، فيَزِنُه ويردُّه ويعرض غيره. ولم يفعل شيئًا من ذلك، لأنّ الذي عُرض عليه لم يكن طلبًا.\n\nوقد ردّ عليهم مثلها من قبل: انظر (١٢:١١-١٤)، إذ سألوا يوسفَ صراحةً: ﴿أَرْسِلْهُ مَعَنَا غَدًۭا﴾، فصرّح يعقوب بخوفه من الذئب. **فقد جرّبوا أنّ الطلب الصريح منهم يُردّ.**",
    plain: "In plain words: Yusuf said \"if you don't bring him, no more grain.\" The brothers told their father \"the grain has been stopped\" — past, finished, and with nobody named as having stopped it. They turned a condition their father could argue with into a fact he could only react to. Not one word of it is a lie. The tense did the work.",
    plainAr: "بعبارة أخرى: قال يوسف: «إنْ لم تأتوني به فلا كيل لكم». فقال الإخوةُ لأبيهم: «مُنِع منّا الكيل» — ماضيًا منقضيًا، ولم يُسمّوا من منعه. فحوّلوا شرطًا كان لأبيهم أن يُناقشه إلى واقعٍ لا يملك إلا أن يستجيب له. وليس في كلامهم كذبةٌ واحدة، وإنما فعل الزمنُ ذلك.",
    pair: {
      ref: "Surah Yusuf (12:60)", refAr: "سورة يوسف (١٢:٦٠)",
      ar: "فَإِن لَّمْ تَأْتُونِى بِهِۦ فَلَا كَيْلَ لَكُمْ عِندِى وَلَا تَقْرَبُونِ",
      en: "\"But if you do not bring him to me, there will be no measure for you from me, nor will you approach me.\"",
      how: "This is the sentence they were carrying. Set the two side by side and the alteration is visible in three words.",
      howAr: "هذه هي الجملةُ التي حملوها. فضَعِ الاثنتين متقابلتين يظهر التغييرُ في ثلاث كلمات."
    },
    ref: "Surah Yusuf (12:63), against (12:60); and see (12:11-14) for the refusal they had already met",
    refAr: "سورة يوسف (١٢:٦٣) في مقابلة (١٢:٦٠)؛ وانظر (١٢:١١-١٤) في الردّ الذي سبق أن لقُوه",
    strength: "quran"
  },

  /* ==========================================================
     THE PAST USED FOR WHAT HAS NOT HAPPENED YET
     ========================================================== */

  "16:1": {
    head: "Past tense for something that has not happened — and the same verse proves it",
    headAr: "الماضي فيما لم يقع — والآيةُ نفسُها تشهد بذلك",
    form: "**أَتَىٰٓ أَمْرُ ٱللَّهِ** — a **perfect** verb: the command of Allah **has come***. Followed immediately by **فَلَا تَسْتَعْجِلُوهُ** — **so do not be impatient for it**.",
    formAr: "﴿**أَتَىٰٓ أَمْرُ ٱللَّهِ**﴾ — فعلٌ **ماضٍ**: أي **أتى** أمرُ الله. ثم يليه بلا فاصل: ﴿**فَلَا تَسْتَعْجِلُوهُ**﴾.",
    why: "This is the clearest case in the Quran, because the proof is inside the verse itself. The first half says the command **has come**. The second half tells the reader not to be impatient for it — **and you cannot be impatient for something that has already arrived.** So the verse states, in the same breath, that it has come and that it has not yet come.\n\nThat is not a contradiction; it is a device, and Arabic uses it deliberately. A perfect verb reports a **completed** event. Using it for something still ahead says one thing about that event: **its arrival is as certain as if it were already behind you.** As-Suyuti gathers this under the perfect \"placed in the position of the future for certainty of occurrence\"; az-Zamakhshari and ar-Razi both read this verse that way.\n\nAnd notice which subject was chosen for it. Not a threat, not a battle — **the command of Allah.** The one thing in existence whose arrival cannot fail.",
    whyAr: "هذا أوضحُ مواضعه في القرآن، لأنّ الدليل في الآية نفسها: فصدرُها يخبر أنّ الأمر **أتى**، وعجزُها ينهى عن استعجاله — **ولا يُستعجَل ما قد أتى**. فالآيةُ تقرّر في نفَسٍ واحدٍ أنه أتى وأنه لم يأتِ بعد.\n\nوليس هذا تناقضًا، وإنما هو أسلوبٌ تقصده العربية. فالفعلُ الماضي إخبارٌ عن أمرٍ **تمّ**. فإذا أُطلق على مستقبَلٍ أفاد فيه معنًى واحدًا: **أنّ وقوعه في التحقّق كالذي مضى وفرغ.** وقد عقد السيوطيُّ لهذا في «الإتقان» بابَ وضع الماضي موضع المستقبل لتحقّق الوقوع، وعليه حمل الزمخشريُّ والرازيُّ هذه الآية.\n\nوتأمّل الفاعل المختار له: ليس وعيدًا ولا معركة، بل **أمرُ الله** — وهو الشيء الوحيد الذي لا يتخلّف مجيئه.",
    ifOther: "Put it in the imperfect — **سيأتي أمر الله**, \"the command of Allah **will** come\" — and the sentence becomes ordinary, and weaker in a way that matters. \"Will come\" leaves a gap between now and then, and a gap is where doubt lives; it is exactly the gap the people being addressed were standing in when they demanded that the punishment be hurried up. The perfect closes the gap. It tells them the thing they are daring to rush is already, in the reckoning that counts, finished.\n\n**And watch the translations.** Sahih International renders it \"the command of Allah **is coming**\" — the tense quietly moved, because a literal \"has come\" reads in English as a mistake. Nothing was done wrong there; English has no way to say a past-for-a-certain-future. It is simply a device that does not survive the crossing, which is why it has to be pointed at rather than translated.",
    ifOtherAr: "ولو جاء بالمضارع: «سيأتي أمرُ الله» لصارت الجملةُ عاديّةً، وضعُفت من وجهٍ معتبَر. فـ«سيأتي» تُبقي فسحةً بين الآن وبينه، والفسحةُ مقامُ الشكّ، وهي عينُ الفسحة التي كان المخاطَبون واقفين فيها حين استعجلوا العذاب. فجاء الماضي فطواها، وأخبرهم أنّ الذي يجترئون على استعجاله قد فُرغ منه في الميزان الذي يُعتدّ به.\n\n**وانظر إلى التراجم:** تنقلها الترجمة الإنجليزية المعتمدة «the command of Allah is coming» فتنقل الزمن، لأنّ «قد أتى» تُقرأ في الإنجليزية خطأً. وليس في ذلك تفريط، فليس في الإنجليزية وجهٌ للماضي الواقع موقع المستقبل المحقَّق. وإنما هو أسلوبٌ لا يعبُر، ولذلك يُشار إليه ولا يُترجَم.",
    plain: "In plain words: the verse says \"the command of Allah HAS come\" and then, in the same sentence, says \"don't rush it.\" You cannot rush something that already arrived. The past tense here is not a mistake — it is a way of saying: this is so certain you may as well treat it as already done.",
    plainAr: "بعبارة أخرى: تقول الآية «أتى أمر الله»، ثم تقول في الجملة نفسها «فلا تستعجلوه». ولا يُستعجَل ما قد وصل. فليس الماضي ههنا خطأً، وإنما هو طريقةٌ في القول معناها: هذا من التحقّق بحيث تعامله معاملة ما فُرغ منه.",
    ref: "Surah An-Nahl (16:1); as-Suyuti, Al-Itqan fi Ulum al-Quran, on the perfect placed for the future; az-Zamakhshari, Al-Kashshaf; ar-Razi, Mafatih al-Ghayb",
    refAr: "سورة النحل (١٦:١)؛ والسيوطي في «الإتقان» في وضع الماضي موضع المستقبل؛ والزمخشري في «الكشاف»؛ والرازي في «مفاتيح الغيب»",
    strength: "tafsir"
  },

  "54:1": {
    head: "Two past verbs, and only one of them has happened",
    headAr: "فعلان ماضيان، ولم يقع منهما إلا واحد",
    form: "**ٱقْتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلْقَمَرُ** — both **perfect**: the Hour **has** drawn near and the moon **has** split.",
    formAr: "﴿**ٱقْتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلْقَمَرُ**﴾ — كلاهما **ماضٍ**: اقتربت، وانشقّ.",
    why: "The second verb is a plain report of an event that happened in front of witnesses — the splitting of the moon is recorded in Sahih al-Bukhari and Sahih Muslim from Anas, Ibn Mas'ud and Ibn Abbas. Perfect tense, past event, nothing unusual.\n\nThe first verb is the interesting one. The Hour has not come. It is spoken of in the same perfect tense, and joined to the second by a simple **و** — so the sentence lines up something certain-but-future beside something already witnessed, and gives them the same grammatical footing. **The reader is being told to hold the two with equal confidence.**",
    whyAr: "أمّا الفعلُ الثاني فإخبارٌ عن واقعةٍ شهدها الناس: وانشقاقُ القمر ثابتٌ في صحيحي البخاري ومسلم عن أنس وابن مسعود وابن عباس. فماضٍ في ماضٍ، ولا غرابة.\n\nوإنما الشأنُ في الأوّل: فالساعةُ لم تأتِ، وقد أُخبر عنها بالماضي نفسِه، وعُطف الثاني عليها بواوٍ مجرّدة — فصفّت الجملةُ أمرًا محقَّقًا مستقبلًا إلى جانب أمرٍ قد رُئي، وسوّت بينهما في الصياغة. **فالقارئ مأمورٌ أن يحملهما على قدرٍ واحدٍ من اليقين.**",
    ifOther: "Written as **\"the Hour will draw near\"**, the two halves fall apart: one thing seen, one thing promised, and the reader files them differently — the first as history, the second as a claim. Keeping both in the perfect refuses that separation. It is a claim about certainty made with grammar rather than with an adjective.",
    ifOtherAr: "ولو قيل «ستقترب الساعة» لانفصل الشطران: مرئيٌّ وموعود، فيجعل القارئ الأوّل تاريخًا والثاني دعوى. وإبقاءُ الفعلين على الماضي رفضٌ لهذا الفصل، ودعوى يقينٍ أُدّيت بالنحو لا بالنعت.",
    plain: "In plain words: the verse says the Hour \"has drawn near\" and the moon \"has split\" — same past tense for both. One of them people watched happen. The grammar puts the other on the same footing.",
    plainAr: "بعبارة أخرى: تقول الآية إنّ الساعة «اقتربت» وإنّ القمر «انشقّ» — بالماضي فيهما. وأحدُهما رآه الناس. فجعل النحوُ الآخر في منزلته.",
    ref: "Surah Al-Qamar (54:1); the splitting of the moon: Sahih al-Bukhari, Book of the Merits of the Ansar, Hadith 3868 and 3869; Sahih Muslim, Book of the Description of the Day of Judgement",
    refAr: "سورة القمر (٥٤:١)؛ وانشقاق القمر: صحيح البخاري، كتاب مناقب الأنصار، حديث ٣٨٦٨ و٣٨٦٩؛ وصحيح مسلم، كتاب صفة القيامة",
    strength: "quran"
  },

  "39:71": {
    head: "The Day of Judgement told as history",
    headAr: "يومُ القيامة يُروى روايةَ التاريخ",
    form: "**وَسِيقَ ٱلَّذِينَ كَفَرُوٓا۟** and, two verses later, **وَسِيقَ ٱلَّذِينَ ٱتَّقَوْا۟ رَبَّهُمْ** — **perfect** and **passive** both times, with **فُتِحَتْ** (were opened) and **قِيلَ** (it was said) around them.",
    formAr: "﴿**وَسِيقَ ٱلَّذِينَ كَفَرُوٓا۟**﴾ ثم بعد آيتين ﴿**وَسِيقَ ٱلَّذِينَ ٱتَّقَوْا۟ رَبَّهُمْ**﴾ — **ماضٍ مبنيٌّ للمجهول** في الموضعين، وحولهما ﴿**فُتِحَتْ**﴾ و﴿**قِيلَ**﴾.",
    why: "The end of Surah Az-Zumar narrates the Last Day the way a chronicler narrates a war that finished a century ago. Every English translation supplies a future — \"will be driven\", \"will be opened\", \"it will be said\" — because it has no choice; the Arabic has no future in it at all.\n\nWhat the perfect does here is remove the reader's distance. A future-tense account is something you consider. A past-tense account is something you are being **told about**, and the mind receives it as settled. The scene is not being predicted; it is being reported.\n\n**And the passive is doing its own work.** سِيقَ — **they were driven**. No one is named as driving them. On a Day when every authority a person leaned on is gone, the grammar itself stops naming agents: things simply happen to people. Notice that both groups get the same verb — the people of the Fire and the people of the Garden are **both** driven. What differs is where.",
    whyAr: "خُتمت سورةُ الزمر بسَوْق يوم القيامة سَوْقَ المؤرّخ لحربٍ انقضت من قرن. وكلُّ ترجمةٍ إنجليزية تُقحم فيها المستقبل: «سيُساقون»، «ستُفتح»، «سيُقال» — ولا حيلة لها، فليس في العربية ههنا مستقبلٌ البتّة.\n\nوالذي يصنعه الماضي رفعُ المسافة بين القارئ والمشهد: فالخبرُ بالمستقبل شيءٌ يُنظر فيه، والخبرُ بالماضي شيءٌ **يُخبَر به**، فتتلقّاه النفسُ مفروغًا منه. فليس المشهدُ متنبَّأً به، وإنما هو مرويّ.\n\n**وللبناء للمجهول عملُه:** ﴿سِيقَ﴾، ولم يُسمَّ سائق. ففي يومٍ يذهب فيه كلُّ سندٍ اتّكأ عليه المرء، يكفّ النحوُ نفسُه عن تسمية الفاعلين، فتقع الأمورُ بالناس وقوعًا. وتأمّل أنّ الفريقين جاءا بالفعل نفسِه: أهلُ النار وأهلُ الجنّة **كلاهما** يُساق. وإنما اختلف المَساق إلى أين.",
    ifOther: "Rendered in the future — **سيُساق** — the passage becomes a warning about what is to come, and a warning can be postponed in the mind. In the perfect it is not a warning at all. It is an account of something that has happened, delivered to people who have not got there yet.",
    ifOtherAr: "ولو صيغ بالمستقبل «سيُساق» لصار الكلامُ إنذارًا بما هو آتٍ، والإنذارُ يُؤجَّل في النفس. وأمّا على الماضي فليس بإنذارٍ أصلًا، وإنما هو خبرٌ عن واقعةٍ وقعت، يُلقى على قومٍ لم يبلغوها بعد.",
    plain: "In plain words: the Quran describes the Day of Judgement using past-tense verbs — \"they were driven\", \"the gates were opened\", \"it was said\" — as if reporting something that already happened. English has to add \"will\" because it cannot do this. The effect in Arabic is that the Day stops feeling like a prediction and starts feeling like news.",
    plainAr: "بعبارة أخرى: يصف القرآنُ يومَ القيامة بأفعالٍ ماضية — «وسيق»، «وفُتحت أبوابها»، «وقيل» — كأنه يُخبر عن أمرٍ قد وقع. وتضطرّ الإنجليزيةُ إلى زيادة «سوف» لأنها لا تُحسن هذا. وأثرُه في العربية أن يخرج اليومُ من باب التنبّؤ إلى باب الخبر.",
    ref: "Surah Az-Zumar (39:71-73); as-Suyuti, Al-Itqan, on the perfect for the certain future",
    refAr: "سورة الزمر (٣٩:٧١-٧٣)؛ والسيوطي في «الإتقان» في الماضي الواقع موقع المستقبل المحقَّق",
    strength: "quran"
  },

  "48:1": {
    head: "\"We have granted you a clear victory\" — said before the victory",
    headAr: "﴿إِنَّا فَتَحْنَا لَكَ فَتْحًۭا مُّبِينًۭا﴾ — قيلت قبل الفتح",
    form: "**إِنَّا فَتَحْنَا لَكَ فَتْحًۭا مُّبِينًۭا** — **إِنَّ** for emphasis, then a **perfect** verb: We **have** granted**. Not **we will grant.",
    formAr: "﴿**إِنَّا فَتَحْنَا لَكَ فَتْحًۭا مُّبِينًۭا**﴾ — ﴿إنّ﴾ للتوكيد، ثم فعلٌ **ماضٍ**: ﴿فَتَحْنَا﴾، لا «سنفتح».",
    why: "Surah Al-Fath came down on the return from Hudaybiyyah. What had happened there did not look like a victory to the people who had lived it: they were turned back from the House without performing the umrah, and they signed terms that several of them found bitter — Umar رضي الله عنه went to the Prophet ﷺ and asked, \"Are we not upon the truth and they upon falsehood?\" (al-Bukhari 2731-2732).\n\nInto that, in the perfect tense: **We have granted you a clear victory.** The verb is a statement about how the thing is to be counted, made at the moment nobody could see it. The conquest of Makkah followed about two years later, and the historians note what those two years of peace did — more people entered Islam in them than in all the years of fighting before.\n\nThe perfect is therefore doing something a future could not: it is not promising a victory later, it is telling them **this, here, that you are calling a setback, is already the victory.**",
    whyAr: "نزلت سورةُ الفتح مرجِعَه ﷺ من الحديبية. والذي جرى هناك لم يكن في أعين من عاشه فتحًا: صُدّوا عن البيت فلم يعتمروا، وكُتبت شروطٌ وجد منها بعضُهم في نفسه، حتى أتى عمرُ رضي الله عنه النبيَّ ﷺ فقال: «أَلَسْنَا عَلَى الْحَقِّ وَهُمْ عَلَى الْبَاطِلِ؟» (البخاري ٢٧٣١-٢٧٣٢).\n\nفنزل في ذلك بلفظ الماضي: **﴿إِنَّا فَتَحْنَا لَكَ فَتْحًۭا مُّبِينًۭا﴾**. فالفعلُ حكمٌ على وجه احتساب الأمر، قيل في اللحظة التي لا يراه فيها أحد. ثم كان فتحُ مكّة بعد نحو سنتين، وقد ذكر أهل السير ما صنعته هاتان السنتان من السلم: دخل في الإسلام فيهما أكثرُ ممّا دخل في سنيّ القتال قبلهما.\n\nفالماضي يصنع ما لا يصنعه المستقبل: فليس وعدًا بفتحٍ يأتي، وإنما إخبارٌ بأنّ **هذا الذي تسمّونه ردًّا هو الفتحُ بعينه.**",
    ifOther: "**\"We will grant you a clear victory\"** consoles them about the future and concedes their reading of the present: today was a defeat, tomorrow will be better. The perfect refuses the concession. It corrects not their patience but their **arithmetic** — they have miscounted what just happened.",
    ifOtherAr: "ولو قيل «سنفتح لك فتحًا مبينًا» لكان تعزيةً بالمستقبل وتسليمًا بقراءتهم للحاضر: هُزمتم اليوم وستُنصرون غدًا. وأمّا الماضي فيأبى هذا التسليم، ولا يصحّح صبرهم وإنما يصحّح **حسابهم**: فقد أخطؤوا في تقدير ما وقع الساعة.",
    plain: "In plain words: this came down on the way back from Hudaybiyyah, which the companions experienced as a defeat — they had been turned away from Makkah. The verse says \"We HAVE given you a clear victory,\" past tense, about the thing they were upset about. It is not promising a victory later. It is telling them the setback they just lived through was the victory.",
    plainAr: "بعبارة أخرى: نزلت هذه في الرجوع من الحديبية، وقد وجدها الصحابةُ هزيمةً إذ صُدّوا عن مكّة. فقالت الآيةُ بالماضي: «إنّا فتحنا لك فتحًا مبينًا» في الأمر الذي اغتمّوا منه. فليست وعدًا بفتحٍ آتٍ، وإنما إخبارٌ بأنّ الذي عدّوه ردًّا هو الفتح.",
    ref: "Surah Al-Fath (48:1); Sahih al-Bukhari, Book of Conditions, Hadith 2731-2732 — the treaty of Hudaybiyyah and Umar's question; Ibn Kathir and az-Zamakhshari on 48:1",
    refAr: "سورة الفتح (٤٨:١)؛ صحيح البخاري، كتاب الشروط، حديث ٢٧٣١-٢٧٣٢ — صلح الحديبية وسؤال عمر؛ وابن كثير والزمخشري عند الآية",
    strength: "quran"
  },

  "81:1": {
    head: "A future opened by إِذَا, and every verb inside it in the past",
    headAr: "مستقبلٌ صُدّر بـ﴿إِذَا﴾، وكلُّ أفعاله ماضية",
    form: "**إِذَا ٱلشَّمْسُ كُوِّرَتْ** — **إِذَا** points forward, to something not yet; **كُوِّرَتْ** is **perfect** and **passive**. The same shape runs through twelve verses: **ٱنكَدَرَتْ، سُيِّرَتْ، عُطِّلَتْ، حُشِرَتْ، سُجِّرَتْ، زُوِّجَتْ، سُئِلَتْ، نُشِرَتْ، كُشِطَتْ، سُعِّرَتْ، أُزْلِفَتْ**.",
    formAr: "﴿**إِذَا ٱلشَّمْسُ كُوِّرَتْ**﴾ — و«إذا» ظرفٌ لما يُستقبل، و﴿كُوِّرَتْ﴾ **ماضٍ مبنيٌّ للمجهول**. والبناءُ نفسُه في اثنتي عشرة آية: ﴿**ٱنكَدَرَتْ، سُيِّرَتْ، عُطِّلَتْ، حُشِرَتْ، سُجِّرَتْ، زُوِّجَتْ، سُئِلَتْ، نُشِرَتْ، كُشِطَتْ، سُعِّرَتْ، أُزْلِفَتْ**﴾.",
    why: "**إِذَا** is a container for the future, and the twelve verbs poured into it are all perfect and all passive. The two together do something no single tense could.\n\nThe **إِذَا** keeps the scene ahead of you — this has not happened. The **perfect** makes each event, once it is inside that frame, finished the instant it is named: the sun is not **being** wrapped up, it **was** wrapped up. And the **passive** removes every actor, so that not one of the twelve has anyone visible doing it. The sun, the stars, the mountains, the seas — the largest things a person can point at — are handled, and the hand is not shown.\n\nThe rhythm is the point. Twelve short strikes, each one a completed act with no agent, and only then, in verse 14, the sentence lands: **عَلِمَتْ نَفْسٌۭ مَّآ أَحْضَرَتْ** — **a soul will know what it has brought.** Everything before it is scenery being cleared so that one thing can be seen.",
    whyAr: "«إذا» ظرفٌ للمستقبل، وقد صُبّت فيه اثنا عشر فعلًا كلُّها ماضيةٌ مبنيّةٌ للمجهول. واجتماعُهما يصنع ما لا يصنعه زمنٌ واحد.\n\nفـ«إذا» تُبقي المشهد أمامك ولمّا يقع. والماضي يجعل كلَّ حدثٍ فيه تامًّا في اللحظة التي يُذكر فيها: فليست الشمس تُكوَّر، بل **كُوِّرت**. والبناءُ للمجهول ينزع كلَّ فاعل، فلا يظهر في الاثني عشر فاعلٌ واحد. فالشمسُ والنجومُ والجبالُ والبحار — وهي أعظمُ ما يُشار إليه — تُصنع بها الأمور، ولا تُرى اليدُ الصانعة.\n\nوالإيقاعُ مقصود: اثنتا عشرة ضربةً قصيرة، كلٌّ منها فعلٌ تامٌّ بلا فاعلٍ مذكور، ثم لا يقع الجوابُ إلا في الرابعة عشرة: ﴿**عَلِمَتْ نَفْسٌۭ مَّآ أَحْضَرَتْ**﴾. وما قبله كلُّه إزاحةُ مشهدٍ ليُرى شيءٌ واحد.",
    ifOther: "Put the twelve in the imperfect — **تُكوَّر، تنكدر، تُسيَّر** — and the surah turns into a slow description of a process, something unfolding while you watch. The perfect will not let you watch. Each line is over before the next begins, and the speed is what makes the ending land.",
    ifOtherAr: "ولو جُعلت الاثنتا عشرة بالمضارع: «تُكوَّر، تنكدر، تُسيَّر» لصارت السورةُ وصفًا بطيئًا لأمرٍ يجري وأنت تنظر إليه. والماضي لا يدعك تنظر: تنقضي كلُّ جملةٍ قبل أن تبدأ التي بعدها، وبتلك السرعة تقع الخاتمةُ موقعها.",
    plain: "In plain words: the surah opens with \"WHEN the sun is wrapped up\" — pointing at the future — but every single verb after it is in the past, and none of them says who is doing it. Twelve enormous events, each one finished the moment it is mentioned, with no hand shown. Then verse 14 gives you the reason for all of it: a soul will know what it brought.",
    plainAr: "بعبارة أخرى: تُفتتح السورةُ بـ«إذا الشمس كُوّرت» — والإشارةُ إلى ما هو آتٍ — ثم كلُّ فعلٍ بعدها ماضٍ، وليس في واحدٍ منها ذكرُ من فعله. اثنتا عشرة واقعةً عظيمة، تنتهي كلُّ واحدةٍ في اللحظة التي تُذكر فيها، ولا تُرى يد. ثم تأتي الرابعة عشرة بعلّة ذلك كلّه: ﴿عَلِمَتْ نَفْسٌۭ مَّآ أَحْضَرَتْ﴾.",
    ref: "Surah At-Takwir (81:1-14); Ibn Ashur, At-Tahrir wat-Tanwir, on the surah's opening",
    refAr: "سورة التكوير (٨١:١-١٤)؛ وابن عاشور في «التحرير والتنوير» في مطلع السورة",
    strength: "quran"
  },

  /* ==========================================================
     THE IMPERFECT — FOR WHAT RENEWS ITSELF
     ========================================================== */

  "2:15": {
    head: "Their mockery is finished; the answer to it is not",
    headAr: "استهزاؤهم منقضٍ، وجوابُه غيرُ منقضٍ",
    form: "They say **إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ** — an active participle in a **nominal** sentence. The answer is **ٱللَّهُ يَسْتَهْزِئُ بِهِم** — a **verbal** sentence with an **imperfect** verb, and the divine name placed first.",
    formAr: "قالوا: ﴿**إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ**﴾ — اسمُ فاعلٍ في جملةٍ **اسميّة**. وجاء الجواب: ﴿**ٱللَّهُ يَسْتَهْزِئُ بِهِم**﴾ — جملةٌ **فعليّة** فعلُها **مضارع**، وقد قُدّم لفظُ الجلالة.",
    why: "Two sentences, two different shapes, and the difference is the point.\n\n**Theirs is nominal.** إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ — **we are only mockers**. A nominal sentence states a condition, and a participle describes what someone **is**. It is a boast about identity, said behind closed doors, and it goes no further than the room.\n\n**The reply is verbal, and imperfect.** يَسْتَهْزِئُ — an act, and an act in the form Arabic uses for what is **ongoing and renewed**. Not that Allah mocked them once; that the answer keeps coming. And the next clause says what form it takes: **وَيَمُدُّهُمْ فِى طُغْيَٰنِهِمْ يَعْمَهُونَ** — He extends them in their transgression, wandering. The requital is that they are left to go on. That is the imperfect being exact: this is not an event, it is a condition running through their days.\n\n**And the name is placed first.** ٱللَّهُ يَسْتَهْزِئُ, not يَسْتَهْزِئُ ٱللَّهُ. Fronting the subject in Arabic focuses it. They said **we**; the reply begins **Allah**.",
    whyAr: "جملتان، وبناءان مختلفان، وفي الفرق المقصود.\n\n**فجملتُهم اسميّة**: ﴿إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ﴾. والجملةُ الاسميّة تقرّر حالًا، واسمُ الفاعل وصفٌ لما **هو عليه** صاحبُه. فهو افتخارٌ بالهُويّة قيل خلف الأبواب، ولم يجاوز المجلس.\n\n**والجوابُ فعليٌّ بالمضارع**: ﴿يَسْتَهْزِئُ﴾ — فعلٌ، وعلى الصيغة التي تُفيد في العربية **التجدّد والاستمرار**. فليس أنه استهزأ بهم مرّةً، بل إنّ الجواب متّصل. وقد بيّنت الجملةُ التي تليه صورتَه: ﴿**وَيَمُدُّهُمْ فِى طُغْيَٰنِهِمْ يَعْمَهُونَ**﴾. فالجزاءُ أن يُتركوا يمضون. وهذا هو المضارعُ في دقّته: ليس حدثًا، وإنما حالٌ تجري في أيّامهم.\n\n**وقُدّم الاسم:** ﴿ٱللَّهُ يَسْتَهْزِئُ﴾ لا «يستهزئ الله». والتقديمُ في العربية للاختصاص والعناية. قالوا «نحن»، فابتُدئ الجوابُ بـ«الله».",
    ifOther: "In the perfect — **ٱللَّهُ ٱسْتَهْزَأَ بِهِم** — the reply becomes one act, done and over, and the reader looks for the moment it happened. There is no such moment; that is the whole warning. What is described is a state they are inside right now, which they experience as being left alone and getting away with it.",
    ifOtherAr: "ولو جاء بالماضي: «الله استهزأ بهم» لصار الجوابُ فعلةً واحدةً انقضت، فيلتمس القارئ وقتَها. ولا وقت لها، وهذا هو التحذيرُ كلُّه. فالموصوفُ حالٌ هم فيها الآن، يجدونها في أنفسهم تركًا وسلامةً وإمهالًا.",
    plain: "In plain words: they said \"we are only mocking\" — a statement about what they are. The reply uses a verb form that means something ongoing, not something that happened once: the answer to them is still running. And the next line says what it looks like — they are left to carry on. Being left alone is the reply.",
    plainAr: "بعبارة أخرى: قالوا «إنما نحن مستهزئون» — خبرًا عمّا هم عليه. وجاء الجوابُ بصيغةٍ تفيد الاستمرار لا المرّة الواحدة: فالجوابُ عليهم جارٍ. وبيّنت الجملةُ التي بعدها صورتَه: أن يُتركوا يمضون. فالتركُ هو الجواب.",
    ref: "Surah Al-Baqarah (2:14-15); az-Zamakhshari, Al-Kashshaf; Ibn Ashur, At-Tahrir wat-Tanwir",
    refAr: "سورة البقرة (٢:١٤-١٥)؛ والزمخشري في «الكشاف»؛ وابن عاشور في «التحرير والتنوير»",
    strength: "tafsir"
  },

  "22:63": {
    head: "Past for the sending, imperfect for the greening",
    headAr: "الماضي في الإنزال، والمضارع في الاخضرار",
    form: "**أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ** — **perfect**. Then, joined by a single **ف**: **فَتُصْبِحُ ٱلْأَرْضُ مُخْضَرَّةً** — **imperfect**. One sentence, two tenses.",
    formAr: "﴿**أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ**﴾ — **ماضٍ**. ثم بفاءٍ واحدة: ﴿**فَتُصْبِحُ ٱلْأَرْضُ مُخْضَرَّةً**﴾ — **مضارع**. جملةٌ واحدة، وزمنان.",
    why: "The tense changes exactly where the reality changes, and once you see it you will see it in a hundred places.\n\n**The rain fell.** A finite event with a start and an end — perfect tense, أَنزَلَ.\n\n**The earth turns green.** Not once. Every time it rains, everywhere it rains, for as long as there is earth and rain — so the verb moves to the imperfect, تُصْبِحُ, which in Arabic carries renewal and repetition. The greening is not the second half of one event; it is what always follows.\n\nSo the verse gives you a single downpour and then, in one letter, opens it out into every spring that has ever happened. **The grammar is the argument.** A person who has seen it once has seen the proof, because the verb tells him it is not a once.",
    whyAr: "يتغيّر الزمنُ في الموضع الذي تتغيّر فيه الحقيقة، ومن أبصر هذا أبصره في مئة موضع.\n\n**فالمطرُ نزل**: حدثٌ محدودٌ له ابتداءٌ وانتهاء، فجاء بالماضي ﴿أَنزَلَ﴾.\n\n**والأرضُ تُصبح مخضرّة**: لا مرّةً واحدة، بل كلّما نزل الغيث، وحيثما نزل، ما دامت أرضٌ ومطر — فانتقل الفعلُ إلى المضارع ﴿تُصْبِحُ﴾، وهو في العربية للتجدّد والتكرار. فليس الاخضرارُ شطرًا ثانيًا من حدثٍ واحد، وإنما هو ما يعقب أبدًا.\n\nفأعطتك الآيةُ غيثةً واحدة، ثم فتحتها بحرفٍ واحدٍ على كلّ ربيعٍ كان. **فالنحوُ هو الحجّة**: فمن رآها مرّةً فقد رأى الدليل، لأنّ الفعل أخبره أنها ليست مرّة.",
    ifOther: "Both in the perfect — **أنزل … فأصبحت الأرض مخضرة** — and it is a report: it rained once and the ground turned green once. True, and worth nothing as a sign. A sign has to be repeatable, and the imperfect is what makes it so.",
    ifOtherAr: "ولو جُعلا ماضيين: «أنزل... فأصبحت الأرضُ مخضرّة» لكان خبرًا: أمطرت مرّةً فاخضرّت مرّة. وهو صدقٌ لا يصلح آيةً. فالآيةُ لا بدّ أن تتكرّر، وبالمضارع صارت كذلك.",
    plain: "In plain words: \"He sent down water\" is past — it happened. \"The earth becomes green\" is a form that means it keeps happening, every time. In one sentence the Quran moves from a single rainfall to every spring there has ever been, and the change of tense is what does it.",
    plainAr: "بعبارة أخرى: «أنزل من السماء ماءً» ماضٍ، أي وقع. و«فتصبح الأرض مخضرّة» صيغةٌ معناها أنه يقع دائمًا في كلّ مرّة. فانتقل القرآنُ في جملةٍ واحدة من غيثةٍ واحدة إلى كلّ ربيعٍ كان، وإنما نقله تغييرُ الزمن.",
    ref: "Surah Al-Hajj (22:63); Ibn Ashur, At-Tahrir wat-Tanwir, on the shift of tense here",
    refAr: "سورة الحج (٢٢:٦٣)؛ وابن عاشور في «التحرير والتنوير» في نقلة الزمن ههنا",
    strength: "tafsir"
  },

  "14:25": {
    head: "The good word is a tree that keeps giving — so the verb keeps going",
    headAr: "الكلمةُ الطيّبة شجرةٌ لا ينقطع عطاؤها — فلا ينقطع فعلُها",
    form: "The tree is described with **nominal** clauses — **أَصْلُهَا ثَابِتٌۭ وَفَرْعُهَا فِى ٱلسَّمَآءِ** (no verb at all). Its fruit is described with an **imperfect** verb: **تُؤْتِىٓ أُكُلَهَا كُلَّ حِينٍۭ**.",
    formAr: "وُصفت الشجرةُ بجملٍ **اسميّة**: ﴿**أَصْلُهَا ثَابِتٌۭ وَفَرْعُهَا فِى ٱلسَّمَآءِ**﴾ — بلا فعل. ووُصف ثمرُها بفعلٍ **مضارع**: ﴿**تُؤْتِىٓ أُكُلَهَا كُلَّ حِينٍۭ**﴾.",
    why: "Look at which parts got verbs and which did not.\n\n**The root and the branch have none.** أَصْلُهَا ثَابِتٌ — **its root is firm**. A nominal sentence in Arabic states something settled, with no time in it. Roots do not do; they are. Firmness is not an activity, and the sentence refuses to make it one.\n\n**The fruit gets a verb, and an imperfect one.** تُؤْتِى — **it gives**, continuously, and كُلَّ حِينٍ removes any doubt about that: at every time. Giving is the one thing about a tree that is an activity, and it is the one thing described with a verb.\n\nSo the parable is built with grammar before it is built with words: **what is fixed is stated without a verb; what recurs is stated with the tense of recurrence.** That is a good word — settled at the root, and producing without a season.",
    whyAr: "انظر أيُّ أجزاءِ المَثَل أُعطي فعلًا وأيُّها لم يُعطَ.\n\n**فالأصلُ والفرعُ بلا فعل**: ﴿أَصْلُهَا ثَابِتٌ﴾. والجملةُ الاسميّة في العربية تقرّر أمرًا مستقرًّا لا زمانَ فيه. والأصولُ لا تفعل، وإنما تكون. فالثباتُ ليس عملًا، وقد أبت الجملةُ أن تجعله عملًا.\n\n**والثمرُ أُعطي فعلًا، ومضارعًا**: ﴿تُؤْتِى﴾ — إيتاءً مستمرًّا، ثم ﴿كُلَّ حِينٍ﴾ ترفع كلَّ احتمال. والإيتاءُ هو الشيء الوحيد في الشجرة الذي هو عمل، وهو الوحيد الذي وُصف بفعل.\n\nفالمَثَلُ مبنيٌّ بالنحو قبل أن يُبنى بالألفاظ: **ما ثبت قيل بلا فعل، وما تكرّر قيل بصيغة التكرار.** وتلك هي الكلمةُ الطيّبة: راسخةُ الأصل، معطيةٌ بلا موسم.",
    ifOther: "Give the root a verb — **أصلها يثبت**, \"its root becomes firm\" — and firmness turns into something being achieved, something that could still fail. And put the fruit in the perfect — **آتت أكلها**, \"it gave its fruit\" — and the tree bore once. Either change breaks the parable, and neither one changes a single noun.",
    ifOtherAr: "ولو أُعطي الأصلُ فعلًا: «أصلها يثبت» لصار الثباتُ أمرًا يُتحصَّل، ويجوز أن يتخلّف. ولو جُعل الثمرُ ماضيًا: «آتت أكلها» لأثمرت الشجرةُ مرّة. وكلا التغييرين يهدم المَثَل، وليس في واحدٍ منهما تغييرُ اسمٍ واحد.",
    plain: "In plain words: the root and the branch are described with no verb at all, because being firm is not something you do. The fruit gets a verb in the form that means \"keeps on doing it\", plus the words \"at every time\". A good word is like that: fixed underneath, producing constantly.",
    plainAr: "بعبارة أخرى: وُصف الأصلُ والفرعُ بلا فعلٍ البتّة، لأنّ الثبات ليس عملًا يُعمل. وأُعطي الثمرُ فعلًا بصيغة الاستمرار، ومعه «كلّ حين». وهكذا الكلمةُ الطيّبة: ثابتةٌ في أسفلها، معطيةٌ لا تنقطع.",
    ref: "Surah Ibrahim (14:24-25)",
    refAr: "سورة إبراهيم (١٤:٢٤-٢٥)",
    strength: "quran"
  },

  /* ==========================================================
     THE PASSIVE, AND THE MISSING WORD
     ========================================================== */

  "4:28": {
    head: "\"Man was created weak\" — and no creator is named in the clause",
    headAr: "﴿وَخُلِقَ ٱلْإِنسَٰنُ ضَعِيفًۭا﴾ — ولم يُذكر في الجملة خالق",
    form: "**يُرِيدُ ٱللَّهُ أَن يُخَفِّفَ عَنكُمْ** — **active**, with the subject named: **Allah wants**. Then, immediately: **وَخُلِقَ ٱلْإِنسَٰنُ ضَعِيفًۭا** — **passive**: and man **was created** weak.",
    formAr: "﴿**يُرِيدُ ٱللَّهُ أَن يُخَفِّفَ عَنكُمْ**﴾ — **مبنيٌّ للمعلوم**، والفاعلُ مسمًّى: ﴿ٱللَّهُ﴾. ثم بلا فاصل: ﴿**وَخُلِقَ ٱلْإِنسَٰنُ ضَعِيفًۭا**﴾ — **مبنيٌّ للمجهول**.",
    why: "Both halves are about the same Creator, and only one of them names Him. That is a choice, and it is made in the same verse so that the contrast cannot be missed.\n\n**The lightening is attributed.** **Allah** wants to lighten your burden. Mercy is signed.\n\n**The weakness is not.** **Man was created weak** — the verb is passive and no agent appears. The scholars of balaghah note this pattern across the Quran: what is favour and relief is named to Him directly, and what a person would experience as a deficiency in himself is stated without the attribution, even where the attribution is obviously true.\n\nAnd read what the weakness is doing in the sentence. It is not an accusation; it is **the reason for the mercy in the first half.** The verse says: He wants to make it lighter for you — and you were made weak. The second clause explains the first.",
    whyAr: "الشطران في الخالق نفسه، ولم يُسمَّ إلا في أحدهما. وهذا اختيار، وقد وقع في الآية الواحدة لئلّا يُغفل عن المقابلة.\n\n**فالتخفيفُ منسوب**: ﴿يُرِيدُ ٱللَّهُ أَن يُخَفِّفَ عَنكُمْ﴾، فالرحمةُ موقَّعة.\n\n**والضعفُ غيرُ منسوب**: ﴿وَخُلِقَ ٱلْإِنسَٰنُ ضَعِيفًۭا﴾، فالفعلُ مبنيٌّ للمجهول ولا فاعل ظاهر. وقد نبّه أهلُ البلاغة على اطّراد هذا في القرآن: فما كان نعمةً وتخفيفًا نُسب إليه سبحانه صراحةً، وما يجده الإنسان في نفسه نقصًا ذُكر غيرَ منسوب، وإن كانت النسبةُ ثابتةً بداهةً.\n\nوتأمّل موقعَ الضعف من الجملة: فليس تعييرًا، وإنما هو **علّةُ الرحمة في الشطر الأوّل**. تقول الآية: يريد أن يخفّف عنكم — وقد خُلقتم ضعافًا. فالثانيةُ تعليلٌ للأولى.",
    ifOther: "Say it in the active — **and Allah created man weak** — and every word is still true, but the sentence now points at the weakness and puts a name beside it. The passive keeps the reader's attention where the verse wants it: not on who made him weak, but on what is being done about it.",
    ifOtherAr: "ولو قيل بالبناء للمعلوم: «وخلق اللهُ الإنسانَ ضعيفًا» لكان كلُّ لفظٍ فيه صدقًا، غير أنّ الجملة تصير مشيرةً إلى الضعف قارنةً به اسمًا. والبناءُ للمجهول يُبقي نظرَ القارئ حيث تريده الآية: لا في مَن خلقه ضعيفًا، بل فيما يُصنع بضعفه.",
    plain: "In plain words: \"Allah wants to lighten things for you\" names Him. \"Man was created weak\" does not — the sentence has no doer in it, even though everyone knows who it is. Mercy is signed; the weakness is left unsigned. And the weakness is not a complaint about you — it is the reason the burden was lightened.",
    plainAr: "بعبارة أخرى: «يريد الله أن يخفّف عنكم» فيها اسمُه. و﴿خُلق الإنسان ضعيفًا﴾ ليس فيها فاعل، مع علم كلّ أحدٍ بمن هو. فوُقّعت الرحمةُ، وتُرك الضعفُ بلا توقيع. وليس الضعفُ عتبًا عليك، وإنما هو علّةُ التخفيف.",
    ref: "Surah An-Nisa (4:28); the pattern is discussed in the balaghah works and by Ibn Ashur in At-Tahrir wat-Tanwir",
    refAr: "سورة النساء (٤:٢٨)؛ وهذا الأسلوب مبحوثٌ في كتب البلاغة، وذكره ابن عاشور في «التحرير والتنوير»",
    strength: "tafsir"
  },

  "2:186": {
    head: "The one question in the Quran answered without \"Say\"",
    headAr: "السؤالُ الوحيد الذي أُجيب في القرآن بلا ﴿قُلْ﴾",
    form: "**وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ** — and there is **no قُلْ** between the question and the answer.",
    formAr: "﴿**وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ**﴾ — وليس بين السؤال والجواب ﴿**قُلْ**﴾.",
    why: "This is not about a tense; it is about a word that is **absent**, and the absence is only visible if you know the pattern it breaks.\n\nGo through the other places where people ask the Prophet ﷺ something. **يَسْـَٔلُونَكَ عَنِ ٱلْأَهِلَّةِ ۖ قُلْ** — they ask you about the crescent moons, **say**. **يَسْـَٔلُونَكَ عَنِ ٱلْخَمْرِ وَٱلْمَيْسِرِ ۖ قُلْ**. **وَيَسْـَٔلُونَكَ عَنِ ٱلرُّوحِ ۖ قُلِ**. **وَيَسْـَٔلُونَكَ عَنِ ٱلْجِبَالِ فَقُلْ**. Every time, an instruction to relay: a question comes in, Allah gives His Messenger the answer, and the Messenger passes it on.\n\nThen comes the question about **Him**, and the قُلْ is gone. **فَإِنِّى قَرِيبٌ** — **indeed I am near.** He answers directly, with no one standing in between.\n\nAnd the whole verse is built that way. Count the first-person pronouns: عِبَادِى، عَنِّى، فَإِنِّى، أُجِيبُ، دَعَانِ، لِى، بِى. Seven in one verse. **The subject is nearness, and the grammar is near.** Not \"tell them Allah is near\" — but **I am near**.",
    whyAr: "وليس هذا في زمنٍ، وإنما في لفظٍ **غائب**، ولا يُبصر غيابُه إلا لمن عرف النسق الذي خرق.\n\nتتبّع المواضع التي يُسأل فيها النبيُّ ﷺ: ﴿**يَسْـَٔلُونَكَ عَنِ ٱلْأَهِلَّةِ ۖ قُلْ**﴾، ﴿**يَسْـَٔلُونَكَ عَنِ ٱلْخَمْرِ وَٱلْمَيْسِرِ ۖ قُلْ**﴾، ﴿**وَيَسْـَٔلُونَكَ عَنِ ٱلرُّوحِ ۖ قُلِ**﴾، ﴿**وَيَسْـَٔلُونَكَ عَنِ ٱلْجِبَالِ فَقُلْ**﴾. في كلّ مرّةٍ أمرٌ بالتبليغ: يَرِد السؤال، فيُعطي اللهُ رسولَه الجواب، فيبلّغه الرسول.\n\nثم جاء السؤال **عنه سبحانه**، فسقطت ﴿قُلْ﴾: ﴿**فَإِنِّى قَرِيبٌ**﴾. أجاب بنفسه، ولا واسطة.\n\nوالآيةُ كلُّها على هذا البناء. عُدّ ضمائر المتكلّم فيها: ﴿عِبَادِى، عَنِّى، فَإِنِّى، أُجِيبُ، دَعَانِ، لِى، بِى﴾ — سبعةٌ في آية. **فالموضوعُ القربُ، والنحوُ قريب.** لا «قل لهم إنّ الله قريب»، بل «إنّي قريب».",
    ifOther: "Insert the missing word — when My servants ask you about Me, **say**: indeed He is near — and nothing in the meaning changes, and everything in the effect does. There is now a messenger in the sentence, and a man asking about his Lord is told the answer by somebody else. **The verse is about there being no distance, and it removes the one word that would have put a person in the gap.**",
    ifOtherAr: "فأدخِل اللفظ الساقط: «وإذا سألك عبادي عنّي **فقل** إنه قريب» — لا يتغيّر من المعنى شيء، ويتغيّر من الأثر كلُّ شيء. فقد صار في الجملة مبلِّغ، وصار الرجلُ يسأل عن ربّه فيُخبره بالجواب غيرُه. **والآيةُ في نفي المسافة، فأسقطت اللفظ الذي كان يُقيم في الفُرجة أحدًا.**",
    plain: "In plain words: everywhere else in the Quran, when people ask the Prophet ﷺ a question, Allah tells him \"SAY…\" and he relays the answer. In this one verse — where the question is about Allah Himself — the word \"say\" is missing. He answers the person directly: \"I am near.\" The verse is about closeness, and it removes the one word that would have put someone in between.",
    plainAr: "بعبارة أخرى: في سائر القرآن إذا سأل الناسُ النبيَّ ﷺ قال الله له: ﴿قُلْ﴾ فيبلّغ. وفي هذه الآية وحدها — والسؤالُ عن الله نفسه — سقطت «قل»، فأجاب السائلَ مباشرةً: «فإنّي قريب». فالآيةُ في القرب، وقد أسقطت اللفظ الذي كان يُدخل بينهما أحدًا.",
    ref: "Surah Al-Baqarah (2:186); compare 2:189, 2:215, 2:217, 2:219, 2:220, 2:222, 7:187, 17:85, 18:83, 20:105 — every one of them carries قُلْ",
    refAr: "سورة البقرة (٢:١٨٦)؛ وقابلها بـ(٢:١٨٩) و(٢:٢١٥) و(٢:٢١٧) و(٢:٢١٩) و(٢:٢٢٠) و(٢:٢٢٢) و(٧:١٨٧) و(١٧:٨٥) و(١٨:٨٣) و(٢٠:١٠٥) — وفي كلٍّ منها ﴿قُلْ﴾",
    strength: "quran"
  },

  /* ==========================================================
     THE SHIFT OF PERSON — الالتفات
     ========================================================== */

  "1:5": {
    head: "The moment the surah stops talking about Him and starts talking to Him",
    headAr: "الموضعُ الذي تركت فيه السورةُ الحديثَ عنه إلى الحديث إليه",
    form: "Verses 2-4 are **third person**: ٱلْحَمْدُ **لِلَّهِ** … ٱلرَّحْمَٰنِ ٱلرَّحِيمِ … مَٰلِكِ يَوْمِ ٱلدِّينِ. Verse 5 is **second person**: **إِيَّاكَ** نَعْبُدُ وَ**إِيَّاكَ** نَسْتَعِينُ. The rhetoricians call the turn **iltifat**.",
    formAr: "الآيات (٢-٤) على الغَيبة: ﴿ٱلْحَمْدُ **لِلَّهِ**... ٱلرَّحْمَٰنِ ٱلرَّحِيمِ... مَٰلِكِ يَوْمِ ٱلدِّينِ﴾. والآية (٥) على الخطاب: ﴿**إِيَّاكَ** نَعْبُدُ وَ**إِيَّاكَ** نَسْتَعِينُ﴾. ويسمّي البلاغيّون هذا النقل **الالتفات**.",
    why: "Three verses of praise are spoken **about** Him — the way you would describe someone to a third party. Then, without warning, the address turns and He is spoken **to**.\n\nThe placement is the meaning. The turn happens exactly after مَٰلِكِ يَوْمِ ٱلدِّينِ. The reader has just said: Lord of all the worlds, the Most Merciful, Owner of the Day of Judgement. Having said those three things, he is no longer describing a distant subject — **he has talked himself into the presence of the one he is describing**, and the next thing out of his mouth is **You**.\n\n**And the object is put before the verb.** إِيَّاكَ نَعْبُدُ, not نَعْبُدُكَ. Fronting in Arabic confines: not \"we worship You\" but \"**You** we worship\" — You and no one else. Then it is done a second time rather than joined: إِيَّاكَ نَسْتَعِينُ. Two separate exclusions, because worship and dependence are two things a person divides up without noticing.",
    whyAr: "ثلاثُ آياتٍ من الثناء قيلت **عنه** سبحانه، كما يوصف الغائب لثالث. ثم يُنقل الخطابُ فجأةً فيُكلَّم **هو**.\n\nوفي موضع النقلة المعنى: فقد وقعت بعد ﴿مَٰلِكِ يَوْمِ ٱلدِّينِ﴾ بعينه. وقد قال القارئُ لتوّه: ربُّ العالمين، الرحمنُ الرحيم، مالكُ يوم الدين. فمن قال هذه الثلاث لم يعد واصفًا غائبًا — **بل بلغ بثنائه حضرةَ من يصفه**، فكان أوّلَ ما ينطق به: ﴿إيّاك﴾.\n\n**وقُدّم المفعول على الفعل**: ﴿إِيَّاكَ نَعْبُدُ﴾ لا «نعبدك». والتقديمُ في العربية للحصر: لا «نعبدك» بل «**إيّاك** نعبد» — أنت لا سواك. ثم أُعيد ولم يُعطف: ﴿إِيَّاكَ نَسْتَعِينُ﴾ — حصران اثنان، لأنّ العبادة والاستعانة أمران يقسمهما المرءُ من حيث لا يشعر.",
    ifOther: "Keep it in the third person — **\"Him we worship and Him we ask for help\"** — and Al-Fatihah stays a description throughout, and the prayer becomes a statement about God rather than an audience with Him. And drop the fronting — **نعبدك ونستعينك** — and the exclusivity goes: it now says we worship You, without saying we worship nobody else. Two devices, and the surah's whole standing depends on both.",
    ifOtherAr: "ولو أُبقي على الغَيبة: «إيّاه نعبد وإيّاه نستعين» لبقيت الفاتحةُ وصفًا إلى آخرها، ولصارت الصلاةُ خبرًا عن الله لا وقوفًا بين يديه. ولو تُرك التقديم: «نعبدك ونستعينك» لذهب الحصر: فصار إثباتَ عبادتك من غير نفي عبادة غيرك. أسلوبان، وقيامُ السورة عليهما جميعًا.",
    plain: "In plain words: the first three verses talk ABOUT Allah — \"praise be to Him, the Most Merciful, Owner of the Day of Judgement.\" Then verse five turns and talks TO Him — \"You we worship.\" The praise brought the person close enough to speak directly. And the word order says \"You and nobody else\", which \"we worship You\" would not have said.",
    plainAr: "بعبارة أخرى: الآياتُ الثلاثُ الأولى حديثٌ **عن** الله: الحمد له، الرحمن الرحيم، مالك يوم الدين. ثم تلتفت الخامسةُ فتُكلّمه **هو**: «إيّاك نعبد». فقد قرّبه الثناءُ حتى خاطب. وترتيبُ الكلمات يفيد «أنت لا غيرك»، ولا تفيده «نعبدك».",
    ref: "Surah Al-Fatihah (1:2-5); as-Suyuti, Al-Itqan, the chapter on iltifat; az-Zamakhshari, Al-Kashshaf; Ibn al-Qayyim, Madarij as-Salikin, on إياك نعبد",
    refAr: "سورة الفاتحة (١:٢-٥)؛ والسيوطي في «الإتقان» في باب الالتفات؛ والزمخشري في «الكشاف»؛ وابن القيم في «مدارج السالكين» عند «إيّاك نعبد»",
    strength: "tafsir"
  },

  "10:22": {
    head: "\"You\" while the sea is calm, \"they\" when the storm hits",
    headAr: "الخطابُ ما دام البحرُ ساكنًا، والغَيبةُ حين تأتي العاصف",
    form: "**حَتَّىٰٓ إِذَا كُنتُمْ فِى ٱلْفُلْكِ** — when **you** are in the ships. Then, in the same sentence: **وَجَرَيْنَ بِهِم … وَفَرِحُوا۟ بِهَا … جَآءَتْهَا رِيحٌ عَاصِفٌۭ** — and they sailed with **them** … and **they** rejoiced. Second person becomes third, mid-sentence.",
    formAr: "﴿**حَتَّىٰٓ إِذَا كُنتُمْ فِى ٱلْفُلْكِ**﴾ — بخطاب المخاطب. ثم في الجملة نفسها: ﴿**وَجَرَيْنَ بِهِم... وَفَرِحُوا۟ بِهَا... جَآءَتْهَا رِيحٌ عَاصِفٌۭ**﴾ — بضمير الغائب. فانتقل من الخطاب إلى الغَيبة في وسط الجملة.",
    why: "The turn happens at a precise moment, and the moment is chosen.\n\nWhile the account is of Allah's favour — He it is who enables **you** to travel by land and sea — the reader is addressed directly. **You** are in the ship. The favour is put in your hands.\n\nThe instant the wind rises, the pronoun steps back: **they** rejoiced, the wave came upon **them**, **they** thought they were encircled, **they** called upon Allah with sincere devotion. **The reader is moved out of the boat and set on the shore, watching.**\n\nAnd there is a reason for that seat. From inside, a man in a storm making promises to God feels only like a man in a storm. From outside, you can see what he does — and you can see what he does afterwards, which the very next verse reports: **فَلَمَّآ أَنجَىٰهُمْ إِذَا هُمْ يَبْغُونَ فِى ٱلْأَرْضِ** — when He saved them, at once they were transgressing. The shift of pronoun hands you the vantage point from which the pattern is visible, and the pattern is the point of the passage.",
    whyAr: "وقعت النقلةُ في لحظةٍ بعينها، واللحظةُ مقصودة.\n\nفما دام الكلامُ في الامتنان — ﴿هُوَ ٱلَّذِى يُسَيِّرُكُمْ فِى ٱلْبَرِّ وَٱلْبَحْرِ﴾ — فالقارئُ مخاطَبٌ بنفسه: **أنت** في الفلك، والنعمةُ موضوعةٌ في يدك.\n\nفلمّا هبّت الريحُ تراجع الضمير: ﴿وَفَرِحُوا۟﴾، ﴿وَجَآءَهُمُ ٱلْمَوْجُ﴾، ﴿وَظَنُّوٓا۟ أَنَّهُمْ أُحِيطَ بِهِمْ﴾، ﴿دَعَوُا۟ ٱللَّهَ مُخْلِصِينَ﴾. **فأُخرج القارئُ من السفينة وأُقيم على الشاطئ ناظرًا.**\n\nوللمقعد علّة: فمن كان في العاصفة لم يرَ من نفسه إلا رجلًا في عاصفة يَعِد. وأمّا من خارجها فيرى ما يصنع، ويرى ما يصنع بعدها — وهو ما تخبر به الآيةُ التي تليها: ﴿**فَلَمَّآ أَنجَىٰهُمْ إِذَا هُمْ يَبْغُونَ فِى ٱلْأَرْضِ**﴾. فنقلةُ الضمير تُعطيك الموضعَ الذي يُبصَر منه النسق، والنسقُ هو مقصودُ السياق.",
    ifOther: "Keep it all in the second person — and the wave came upon **you**, and **you** called upon Allah — and the reader is accused. He gets defensive, and he stops reading the way you read about someone else. The third person is what makes the mirror bearable, and a mirror you can bear to look in is the only kind that works.",
    ifOtherAr: "ولو أُبقي على الخطاب: «وجاءكم الموجُ ودعوتم الله» لصار القارئُ متّهمًا، فيأخذه الدفعُ عن نفسه، ويقرأ غير قراءته لحال غيره. فالغَيبةُ هي التي تُحتمل بها المرآة، ولا تنفع من المرايا إلا ما احتُمل النظرُ فيه.",
    plain: "In plain words: while the verse is describing the blessing, it says \"you\" — you are on the ship. The second the storm arrives it switches to \"they\", and you find yourself watching from outside. That is deliberate: from outside you can see what those people do once they are safe, which the next verse tells you — they go straight back to wrongdoing. You would not have seen that from inside the boat.",
    plainAr: "بعبارة أخرى: ما دامت الآيةُ في ذكر النعمة قالت «أنتم» — فأنت في السفينة. فلمّا جاءت العاصفةُ تحوّلت إلى «هم»، فإذا أنت تنظر من خارج. وهذا مقصود: فمن خارجٍ ترى ما يصنع القومُ إذا نجَوا، وتخبرك به الآيةُ التي بعدها: يعودون إلى البغي. ولم تكن لترى ذلك وأنت في الفلك.",
    ref: "Surah Yunus (10:22-23); as-Suyuti, Al-Itqan, the chapter on iltifat; Ibn Ashur, At-Tahrir wat-Tanwir",
    refAr: "سورة يونس (١٠:٢٢-٢٣)؛ والسيوطي في «الإتقان» في باب الالتفات؛ وابن عاشور في «التحرير والتنوير»",
    strength: "tafsir"
  },

  /* ==========================================================
     THE PROMISE, AND ITS FULFILMENT DECADES LATER
     ========================================================== */

  "12:15": {
    head: "A promise made at the bottom of a well, in the most emphatic future Arabic has",
    headAr: "وعدٌ قيل في غيابة الجبّ بأوكد صيغة استقبالٍ في العربية",
    form: "**لَتُنَبِّئَنَّهُم بِأَمْرِهِمْ هَٰذَا وَهُمْ لَا يَشْعُرُونَ** — the **lam** of the oath plus the **heavy nun of emphasis** on an imperfect verb: the strongest way Arabic has of saying you **will** certainly tell them.",
    formAr: "﴿**لَتُنَبِّئَنَّهُم بِأَمْرِهِمْ هَٰذَا وَهُمْ لَا يَشْعُرُونَ**﴾ — لامُ القسم مع **نون التوكيد الثقيلة** على فعلٍ مضارع: وهي أوكدُ ما في العربية للاستقبال.",
    why: "Look at where this is said. He is a boy, he has been thrown into a well by his own brothers, and they are standing above him. At that moment he is told: **you will tell them about this deed of theirs — and they will not realise it is you.**\n\nThe grammar carries the certainty. لَ… نَّ is not \"you may\" or \"you will probably\"; it is the construction of an oath. Nothing in his circumstances supports it. Everything in the sentence insists on it.\n\nThen count the distance. He is sold, taken to Egypt, accused, imprisoned for years, forgotten by the man he helped — and only after all of it, in 12:89, does he look at them and say: **هَلْ عَلِمْتُم مَّا فَعَلْتُم بِيُوسُفَ وَأَخِيهِ إِذْ أَنتُمْ جَٰهِلُونَ** — **do you know what you did with Yusuf and his brother?** And they do not know him. They ask, in the next verse: **are you really Yusuf?**\n\nThe promise is kept to the letter, including the clause nobody would have thought to include: **and they will not perceive.**",
    whyAr: "انظر أين قيل هذا: غلامٌ ألقاه إخوتُه في جبّ، وهم فوقه. ففي تلك الحال يُقال له: **لتخبرنّهم بصنيعهم هذا وهم لا يشعرون**.\n\nوالنحوُ يحمل اليقين: فاللامُ والنونُ ليستا «قد تفعل» ولا «يغلب أن تفعل»، وإنما هما بناءُ القسم. وليس في حاله ما يعضده، وكلُّ ما في الجملة يُصرّ عليه.\n\nثم عُدّ المسافة: يُباع، ويُحمل إلى مصر، ويُتّهم، ويُسجن سنين، وينساه الذي ذكّره — ثم بعد ذلك كلّه، في (١٢:٨٩)، ينظر إليهم فيقول: ﴿**هَلْ عَلِمْتُم مَّا فَعَلْتُم بِيُوسُفَ وَأَخِيهِ إِذْ أَنتُمْ جَٰهِلُونَ**﴾. وهم لا يعرفونه، فيسألون في التي تليها: ﴿أَءِنَّكَ لَأَنتَ يُوسُفُ﴾.\n\nفوقع الوعدُ على حرفه، ومنه القيدُ الذي لا يخطر لأحدٍ أن يذكره: **﴿وَهُمْ لَا يَشْعُرُونَ﴾**.",
    ifOther: "Without the oath-lam and the emphatic nun — a plain **ستنبئهم**, \"you will tell them\" — it is a forecast, and a forecast made to a boy in a well is a consolation. With them it is a decree, and the surah then spends eighty verses showing that a decree does not need the circumstances to look promising.",
    ifOtherAr: "ولو جُرّد من لام القسم ونون التوكيد فقيل «ستنبّئهم» لكان إخبارًا بما سيكون، والإخبارُ لغلامٍ في جبٍّ تعزية. وأمّا بهما فحكمٌ مبرم، ثم تمضي السورةُ ثمانين آيةً تُري أنّ المبرَم لا يحتاج إلى أن تكون الأحوالُ مبشّرة.",
    plain: "In plain words: at the bottom of the well, Yusuf is told in the strongest possible Arabic — the grammar of an oath — that he WILL one day tell his brothers what they did, and that they will not recognise him when he does. Decades later, in verse 89, he says it, and in verse 90 they ask \"are you really Yusuf?\" Every part of the promise came true, including the part about them not knowing him.",
    plainAr: "بعبارة أخرى: في قعر الجبّ يُقال ليوسف بأشدّ ما في العربية توكيدًا — بناءِ القسم — إنه **سيخبر** إخوته بما صنعوا، وإنهم لا يعرفونه حين يخبرهم. وبعد عقود، في الآية (٨٩)، يقولها، وفي (٩٠) يسألون: «أإنك لأنت يوسف». فوقع الوعدُ بتمامه، ومنه أنهم لا يعرفونه.",
    pair: {
      ref: "Surah Yusuf (12:89-90)", refAr: "سورة يوسف (١٢:٨٩-٩٠)",
      ar: "قَالَ هَلْ عَلِمْتُم مَّا فَعَلْتُم بِيُوسُفَ وَأَخِيهِ إِذْ أَنتُمْ جَٰهِلُونَ ۝ قَالُوٓا۟ أَءِنَّكَ لَأَنتَ يُوسُفُ ۖ قَالَ أَنَا۠ يُوسُفُ",
      en: "He said: \"Do you know what you did with Yusuf and his brother when you were ignorant?\" They said: \"Are you indeed Yusuf?\" He said: \"I am Yusuf.\"",
      how: "This is the promise of 12:15 being kept, and the clause **وَهُمْ لَا يَشْعُرُونَ** is kept with it — they have to ask who he is.",
      howAr: "هذا وقوعُ وعد (١٢:١٥)، ومعه قيدُه ﴿**وَهُمْ لَا يَشْعُرُونَ**﴾ — إذ اضطرّوا أن يسألوا من هو."
    },
    ref: "Surah Yusuf (12:15), fulfilled at (12:89-90)",
    refAr: "سورة يوسف (١٢:١٥)، ووقوعُه في (١٢:٨٩-٩٠)",
    strength: "quran"
  },

  /* ==========================================================
     DEFINITE AND INDEFINITE — a form choice of a different kind
     ========================================================== */

  "94:6": {
    head: "The hardship is definite and one; the ease is indefinite and twice",
    headAr: "العسرُ معرفةٌ وواحد، واليسرُ نكرةٌ ومرّتان",
    form: "**فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ ٱلْعُسْرِ يُسْرًۭا** — **ٱلْعُسْرِ** carries the definite article both times; **يُسْرًۭا** is indefinite both times.",
    formAr: "﴿**فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ ٱلْعُسْرِ يُسْرًۭا**﴾ — ﴿ٱلْعُسْرِ﴾ معرفةٌ بالألف واللام في الموضعين، و﴿يُسْرًۭا﴾ نكرةٌ في الموضعين.",
    why: "Both lines are repeated word for word, and the two nouns in them are not the same kind of noun.\n\n**ٱلْعُسْرِ is definite.** In Arabic, when a definite noun is repeated, the second is understood as the same one — الْعُسْر in the second verse is the very hardship named in the first. One hardship, mentioned twice.\n\n**يُسْرًا is indefinite.** A repeated indefinite noun is understood as a second, different one. So: two eases.\n\nWhich is why the companions read it the way they did. Ibn Abbas رضي الله عنهما is reported to have said: **hardship will not overcome two eases** — and the same is reported from al-Hasan al-Basri and others, and Ibn Kathir carries it in his tafsir. The arithmetic is not devotional enthusiasm; it is what the definite article and its absence say.\n\nAnd note **مَعَ**, not بَعْدَ. Not **after** hardship there is ease — **with** it. The relief is not queued behind the difficulty waiting for it to finish; it is in the same place at the same time.",
    whyAr: "الجملتان مكرّرتان بلفظهما، والاسمان فيهما ليسا من نوعٍ واحد.\n\n**فـ﴿ٱلْعُسْرِ﴾ معرفة.** وقاعدةُ العربية أنّ المعرفة إذا أُعيدت كانت الثانيةُ عينَ الأولى، فالعسرُ في الآية الثانية هو العسرُ المذكور في الأولى بعينه: عسرٌ واحدٌ ذُكر مرّتين.\n\n**و﴿يُسْرًۭا﴾ نكرة.** والنكرةُ إذا أُعيدت كانت الثانيةُ غيرَ الأولى: فيُسران.\n\nولذلك قرأها الصحابةُ على هذا الوجه: فقد رُوي عن ابن عباس رضي الله عنهما قوله: «لن يغلبَ عسرٌ يُسرين»، ورُوي مثلُه عن الحسن البصري وغيره، وأورده ابنُ كثير في تفسيره. فليس هذا الحسابُ حماسةَ واعظ، وإنما هو ما تقوله أداةُ التعريف وغيابُها.\n\nوتأمّل ﴿**مَعَ**﴾ لا «بعد»: فليس بعد العسر يسرٌ، بل **معه**. فليس الفرَجُ واقفًا في الصفّ خلف الشدّة ينتظر انقضاءها، وإنما هو في موضعها في وقتها.",
    ifOther: "Make the ease definite — **مع العسر اليسر** — and the second ease is the first one again, and the whole reading collapses into a single promise said twice. Make the hardship indefinite — **مع عسر يسرا** — and now there are two hardships as well, and the balance the verse strikes is gone. Two articles, and the entire count depends on them.",
    ifOtherAr: "فلو عُرّف اليسرُ: «مع العسر اليسر» لكان اليسرُ الثاني هو الأوّل، فانهار الوجهُ كلُّه إلى وعدٍ واحدٍ قيل مرّتين. ولو نُكّر العسر: «مع عسرٍ يسرًا» لصارا عسرين أيضًا، فذهب التوازنُ الذي عقدته الآية. أداتا تعريف، وعليهما يقوم العددُ كلُّه.",
    plain: "In plain words: \"the hardship\" has \"the\" in front of it both times, which in Arabic means it is the same one hardship. \"Ease\" has no \"the\" either time, which means the second is a different one. So: one hardship, two eases. That is where the companions' saying comes from — \"one hardship will never defeat two eases.\" And the word is \"WITH the hardship\", not \"after\" it.",
    plainAr: "بعبارة أخرى: «العسر» فيها الألف واللام في الموضعين، ومعناه في العربية أنه العسرُ الواحد بعينه. و﴿يسرًا﴾ بلا ألفٍ ولام في الموضعين، ومعناه أنّ الثاني غيرُ الأوّل. فعسرٌ واحدٌ ويُسران. ومن هنا قولُ السلف: «لن يغلب عسرٌ يسرين». واللفظُ «**مع**» العسر لا «بعده».",
    ref: "Surah Ash-Sharh (94:5-6); the saying is reported from Ibn Abbas and al-Hasan al-Basri — see Ibn Kathir's tafsir on the surah. It is a statement of the companions and those after them, not a hadith of the Prophet ﷺ",
    refAr: "سورة الشرح (٩٤:٥-٦)؛ والأثرُ مرويٌّ عن ابن عباس والحسن البصري — انظر تفسير ابن كثير عند السورة. وهو قولُ صحابيٍّ ومن بعده، لا حديثٌ مرفوعٌ إلى النبيّ ﷺ",
    strength: "tafsir"
  },

  /* ==========================================================
     THE NOMINAL SENTENCE — no verb, and no time
     ========================================================== */

  "112:2": {
    head: "Four verses about Allah, and only one verb among them",
    headAr: "أربعُ آياتٍ في وصفه سبحانه، وليس فيها إلا فعلٌ واحد",
    form: "**قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ** — two **nominal** sentences, no verb in either. Then **لَمْ يَلِدْ وَلَمْ يُولَدْ** — verbs, and both **negated**. Then **وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ** — a negated verb of being.",
    formAr: "﴿**قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ**﴾ — جملتان **اسميّتان** لا فعل في واحدةٍ منهما. ثم ﴿**لَمْ يَلِدْ وَلَمْ يُولَدْ**﴾ — فعلان، وكلاهما **منفيّ**. ثم ﴿**وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ**﴾ — نفيُ الكون.",
    why: "A verb in Arabic carries time — it happened, it is happening, it will happen. A **nominal sentence has no verb and therefore no time in it at all.** It states what something simply is.\n\nSo when the surah that the Prophet ﷺ called equal to a third of the Quran comes to say what Allah is, it says it with no verbs: **هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ.** Nothing there began, and nothing there will end, because there is no verb in which a beginning or an ending could live.\n\nAnd when verbs finally appear, every one of them is **negated**. He did not beget. He was not begotten. There has not been for Him any equal. The affirmations are timeless and verbless; the verbs are used only to rule things out.\n\nThat is a whole doctrine of Allah delivered in fifteen words, and half of the work is done by which sentences were given verbs and which were not.",
    whyAr: "الفعلُ في العربية يحمل الزمان: وقع، أو يقع، أو سيقع. و**الجملةُ الاسميّة لا فعل فيها، فلا زمان فيها البتّة**، وإنما تقرّر ما الشيءُ عليه.\n\nفلمّا جاءت السورةُ التي جعلها النبي ﷺ تعدل ثلث القرآن تُخبر ما هو سبحانه، أخبرت بلا أفعال: ﴿**هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ**﴾. فلا شيء ههنا ابتدأ، ولا شيء ينتهي، إذ ليس ثمّ فعلٌ يسكنه ابتداءٌ أو انتهاء.\n\nفإذا ظهرت الأفعالُ أخيرًا فكلُّها **منفيّة**: ﴿لَمْ يَلِدْ﴾، ﴿وَلَمْ يُولَدْ﴾، ﴿وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ﴾. فالإثباتُ بلا زمانٍ ولا فعل، والأفعالُ لم تُستعمل إلا في النفي.\n\nفهذه عقيدةٌ تامّة في خمس عشرة كلمة، ونصفُ العمل فيها لاختيارِ أيّ الجمل أُعطي فعلًا وأيّها لم يُعطَ.",
    ifOther: "Give the first two a verb — **كان الله أحدًا**, \"Allah **was** One\" — and you have put Him inside time, and opened a question the surah exists to close: was, and then what? The verbless sentence does not admit the question. It is not that the answer is \"always\"; it is that the sentence has no place to put a \"when\".",
    ifOtherAr: "فلو أُعطيت الأوليان فعلًا: «كان اللهُ أحدًا» لأُدخل سبحانه في الزمان، وانفتح السؤالُ الذي جاءت السورةُ لتسدّه: كان، ثم ماذا؟ والجملةُ الخالية من الفعل لا تقبل السؤال، وليس الجوابُ أنه «دائمًا»، بل إنّ الجملة لا موضع فيها لـ«متى».",
    plain: "In plain words: an Arabic sentence with a verb has a time in it. The first two verses of Surah Al-Ikhlas have no verb at all, so there is no time in them — nothing that started, nothing that will stop. The only verbs in the surah are the negative ones: He did not beget, He was not begotten, there has never been anyone like Him.",
    plainAr: "بعبارة أخرى: الجملةُ العربية إذا كان فيها فعلٌ كان فيها زمان. وأوّلُ آيتين من سورة الإخلاص لا فعل فيهما، فلا زمان فيهما: لا شيء ابتدأ ولا شيء ينقطع. وليس في السورة من الأفعال إلا المنفيّ: لم يلد، ولم يولد، ولم يكن له كفوًا أحد.",
    ref: "Surah Al-Ikhlas (112:1-4); the Prophet ﷺ called it equal to a third of the Quran — Sahih al-Bukhari, Book of the Virtues of the Quran, Hadith 5013",
    refAr: "سورة الإخلاص (١١٢:١-٤)؛ وقد جعلها النبي ﷺ تعدل ثلث القرآن — صحيح البخاري، كتاب فضائل القرآن، حديث ٥٠١٣",
    strength: "quran"
  },

  "2:255": {
    head: "The greatest verse begins with no verb at all",
    headAr: "أعظمُ آيةٍ تُفتتح بلا فعل",
    form: "**ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ** — **nominal**, verbless. Then the verbs begin, and the first two are **negatives**: **لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ**.",
    formAr: "﴿**ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ**﴾ — جملةٌ **اسميّة** بلا فعل. ثم تبدأ الأفعالُ وأوّلها **نفيان**: ﴿**لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ**﴾.",
    why: "Ayat al-Kursi opens the same way Surah Al-Ikhlas does, and for the same reason: what is being stated is not an event.\n\n**ٱلْحَىُّ ٱلْقَيُّومُ** are two nouns of the intensive pattern, not verbs. Al-Hayy — the Living, life as an attribute rather than a state entered into. Al-Qayyum — the one who sustains everything else and is sustained by nothing, on a form the Arabs use for what is unceasing. No verb could carry either without giving it a start.\n\nThen the verbs arrive, and they arrive as denials: **drowsiness does not take Him, nor sleep.** And the order is exact — سِنَة before نَوْم. Drowsiness is the smaller of the two and it comes first, because a thing is denied comprehensively when even its least degree is denied. If sleep had been ruled out and drowsiness left unmentioned, a gap would remain.\n\n**And the pairing is the argument.** He is al-Qayyum, the one who holds everything up; if drowsiness could touch Him, everything held up would fall for that instant. The verse rules out the smallest lapse because of what it just claimed.",
    whyAr: "افتُتحت آيةُ الكرسيّ بما افتُتحت به سورةُ الإخلاص، وللعلّة نفسها: فالمُخبَر عنه ليس حدثًا.\n\n﴿**ٱلْحَىُّ ٱلْقَيُّومُ**﴾ اسمان على المبالغة لا فعلان. فالحيُّ: الحياةُ له وصفًا لا حالًا دخل فيها. والقيّومُ: القائمُ على كلّ شيءٍ وليس شيءٌ يُقيمه، على وزنٍ تستعمله العربُ لما لا ينقطع. ولا يحمل فعلٌ واحدًا منهما إلا جعل له ابتداء.\n\nثم جاءت الأفعالُ فجاءت نفيًا: ﴿**لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ**﴾. والترتيبُ محرَّر: السِّنةُ قبل النوم، وهي أصغرُهما، لأنّ الشيء إنما يُنفى نفيًا تامًّا إذا نُفي أدنى درجاته. ولو نُفي النومُ وسُكت عن السِّنة لبقيت فُرجة.\n\n**وفي الاقتران الحجّة**: فهو القيّوم الذي يُمسك كلَّ شيء، فلو مسّته سِنةٌ لسقط كلُّ ممسوكٍ تلك اللحظة. فنُفي أدنى الغفلة لأجل ما قُرّر قبله.",
    ifOther: "Open it with a verb — **الله يحيا ويقوم**, \"Allah lives and sustains\" — and living becomes something He does, which invites the question of when He began doing it. And reverse the two denials — sleep first, then drowsiness — and the sentence reads as an afterthought instead of a closing off. Neither change alters a single claim, and both weaken every one of them.",
    ifOtherAr: "فلو افتُتحت بفعل: «الله يحيا ويقوم» لصارت الحياةُ فعلًا يفعله، فانفتح السؤالُ متى ابتدأه. ولو عُكس النفيان فقُدّم النومُ على السِّنة لقُرئت الجملةُ استدراكًا لا إحكامًا. وليس في التغييرين مسٌّ لدعوى واحدة، وفيهما إضعافُ كلِّ دعوى.",
    plain: "In plain words: the greatest verse in the Quran starts with no verb — because \"the Living, the Sustainer\" are not things Allah does, they are what He is, and a verb would have put a starting point on them. Then the first verbs are denials, and they are in order: drowsiness before sleep, the smaller before the greater, because ruling out the smallest leaves no gap.",
    plainAr: "بعبارة أخرى: تُفتتح أعظمُ آيةٍ في القرآن بلا فعل، لأنّ «الحيّ القيّوم» ليسا شيئًا يفعله سبحانه بل هما ما هو عليه، ولو جاء فعلٌ لجعل لهما ابتداء. ثم كان أوّلُ الأفعال نفيًا، ورُتّب: السِّنة قبل النوم، والأصغرُ قبل الأكبر، لأنّ نفي الأدنى لا يدع فُرجة.",
    ref: "Surah Al-Baqarah (2:255); the Prophet ﷺ named it the greatest verse in the Quran — Sahih Muslim, Book of the Travellers' Prayer; ar-Razi and Ibn Kathir on the verse",
    refAr: "سورة البقرة (٢:٢٥٥)؛ وقد سمّاها النبي ﷺ أعظم آيةٍ في القرآن — صحيح مسلم، كتاب صلاة المسافرين؛ والرازي وابن كثير عند الآية",
    strength: "quran"
  },

  /* ==========================================================
     ONE MORE PAST-FOR-FUTURE, inside the Garden
     ========================================================== */

  "7:44": {
    head: "A conversation from the Hereafter, reported in the past",
    headAr: "حوارٌ من الآخرة يُروى بالماضي",
    form: "**وَنَادَىٰٓ أَصْحَٰبُ ٱلْجَنَّةِ أَصْحَٰبَ ٱلنَّارِ** — **perfect**: the people of the Garden **called out***. Then **قَالُوا۟ نَعَمْ** — perfect again. Then **فَأَذَّنَ مُؤَذِّنٌۢ** — perfect again.",
    formAr: "﴿**وَنَادَىٰٓ أَصْحَٰبُ ٱلْجَنَّةِ أَصْحَٰبَ ٱلنَّارِ**﴾ — **ماضٍ**. ثم ﴿**قَالُوا۟ نَعَمْ**﴾ — ماضٍ. ثم ﴿**فَأَذَّنَ مُؤَذِّنٌۢ**﴾ — ماضٍ.",
    why: "An entire exchange that has not taken place yet, set down in the tense of a thing remembered. The people of the Garden call across; the people of the Fire answer with a single word — **نَعَمْ**, yes; and an announcer announces between them.\n\nThe perfect does two things at once here. It makes the scene certain, as it does in every past-for-future. But it also makes it **overheard**. A future-tense prediction of a conversation is a description of a conversation. A past-tense report of one is a transcript, and the reader is in the position of somebody being told what was said.\n\nAnd the shortest word in it is the heaviest. They are asked whether they found what their Lord promised to be true, and the answer is one syllable: **نَعَمْ**. There is nothing to add. Everything either side spent a life arguing about is settled by that word, and the Quran gives it no elaboration at all.",
    whyAr: "حوارٌ تامٌّ لم يقع بعد، أُثبت بزمن ما يُتذكَّر: ينادي أهلُ الجنّة، فيُجيب أهلُ النار بكلمة ﴿**نَعَمْ**﴾، ثم يؤذّن مؤذّنٌ بينهم.\n\nوالماضي ههنا يصنع أمرين معًا: يُفيد التحقّق كشأنه في كلّ ماضٍ وقع موقع المستقبل، ويُفيد أيضًا أنّ الكلام **مسموع**. فالإخبارُ بالمستقبل عن حوارٍ وصفٌ لحوار، والإخبارُ بالماضي عنه نقلٌ لنصّه، فيصير القارئ في موضع من يُروى له ما قيل.\n\nوأقصرُ كلمةٍ فيه أثقلُها: سُئلوا أوجدوا ما وعد ربُّهم حقًّا، فكان الجوابُ حرفين: ﴿نَعَمْ﴾. ولا مزيد. فكلُّ ما أفنى الفريقان فيه أعمارهما جدلًا تحسمه هذه الكلمة، ولم يزد القرآنُ عليها شيئًا.",
    ifOther: "In the future — **وسينادي أصحاب الجنة** — it becomes a scene you are told will occur, and the mind puts it away with other things that will occur. In the perfect it is not filed; it is heard. And the single-word answer only lands as it does because it is quoted, not predicted.",
    ifOtherAr: "ولو جاء بالمستقبل: «وسينادي أصحابُ الجنّة» لصار مشهدًا يُخبَر أنه سيقع، فتضعه النفسُ مع ما سيقع. وأمّا بالماضي فلا يُوضع، وإنما يُسمع. وما وقعت كلمةُ الجواب موقعها إلا لأنها منقولةٌ لا متوقَّعة.",
    plain: "In plain words: a conversation that has not happened yet is written in the past tense, as if someone were repeating what was said. The people of Paradise call out to the people of the Fire, and the answer is one word: yes. Everything the two sides ever argued about ends in that word, and the Quran adds nothing to it.",
    plainAr: "بعبارة أخرى: حوارٌ لم يقع بعدُ كُتب بالماضي، كأنّ قائلًا يُعيد ما قيل. ينادي أهلُ الجنّة أهلَ النار، فيكون الجوابُ كلمةً: نعم. فينتهي عند هذه الكلمة كلُّ ما تنازع فيه الفريقان، ولا يزيد القرآنُ عليها شيئًا.",
    ref: "Surah Al-A'raf (7:44)",
    refAr: "سورة الأعراف (٧:٤٤)",
    strength: "quran"
  }
};

/* Look one up. Kept as a function because this file loads before the page
   script on some pages and after it on others — the same reason
   iitwTermIndex() is a function and not a constant. */
function iitwTenseFor(surahNum, ayahNum) {
  if (typeof TADABBUR_TENSE === "undefined") return null;
  return TADABBUR_TENSE[String(surahNum) + ":" + String(ayahNum)] || null;
}

/* How many verses carry a verb-form note, and which surahs. Used by the
   coverage line on the Quran page, and by check-counts.sh, so the number
   can never be typed and go stale the way the Golden Age count did. */
function iitwTenseCount() {
  return (typeof TADABBUR_TENSE === "undefined") ? 0 : Object.keys(TADABBUR_TENSE).length;
}
function iitwTenseSurahs() {
  if (typeof TADABBUR_TENSE === "undefined") return [];
  const set = {};
  Object.keys(TADABBUR_TENSE).forEach(function (k) { set[k.split(":")[0]] = 1; });
  return Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
}
