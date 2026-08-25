/* ============================================================
   THE MAP OF THE END OF TIME — خريطة آخر الزمان
   ============================================================
   One ordered chain instead of a pile of signs. The owner asked
   for a map a person can hold in his head: this happens, then
   this follows, then this — and WHERE WE ARE ON IT.

   FOUR RULES AT THE TOP OF THIS FILE. Keep them.

   1. ORDER IS CLAIMED ONLY WHERE A TEXT ORDERS IT. Phase 1 is
      ordered because al-Bukhari 7121 lists it in order, in one
      hadith, from his own mouth — and that same hadith runs on
      into Phase 4 and ends with the sun rising from the west.
      Everything else is grouped and its ordering is LABELLED:
      fixed by text, strongly indicated, or unknown. A map that
      invents a sequence is worse than no map: it gets believed.

   2. NO DATE, EVER. Not a year, not a decade, not a generation.
      7:187 and 31:34. Every century has produced people certain
      it was theirs, and every one of them was wrong.

   3. THE POINT IS NOT PREDICTION, IT IS PREPARATION. Every box
      carries what it MEANS for a person alive in it, and every
      box carries a plain-words box. The owner asked for that
      twice: a normal reader must not have to stop, think for an
      hour, or look a word up.

   4. GLOSS THE OLD WORDS ON THE SPOT. A classical word may be
      used — it is the word in the hadith — but it is followed
      immediately by (أي …) in ordinary modern Arabic. His
      example was جُمعة meaning A WEEK and not Friday; the same
      applies to الهَرْج, يُوسَّد, يَحسِر, لِقْحة, أُكْلة and
      the rest. This rule is in CLAUDE.md and it is not optional.

   Sources verified against the collections before writing:
   al-Bukhari 59, 85, 100, 1036, 1412, 1591, 2849, 3601, 4636,
   7061, 7115, 7119, 7121; Sunan Ibn Majah 4076; Sunan Abu Dawud
   4282/4285/4286. Sahih Muslim is cited by BOOK, never by a
   number — its numbering in the machine editions is sequential
   and does not match the standard.
   ============================================================ */

const END_MAP = {
  title: "The map of the end of time — where we are on it",
  titleAr: "خريطة آخر الزمان — وأين نحن منها",

  lead: "The signs are usually taught as a list, and a list is the one shape that hides what matters. A person who has memorised ten signs still does not know what comes first, what he is standing in, or what to do about any of it.\n\nSo this is the same material as a **chain**. Four phases, in the order the texts put them, with the ordering **labelled** at every step — because some of it is fixed by a text, some is only indicated, and some nobody knows. Where nobody knows, this page says so instead of inventing a sequence.\n\nAnd at every step, the part that is usually missing: **what it means for someone alive in it**, in plain words.",
  leadAr: "تُعلَّم العلاماتُ عادةً قائمةً، والقائمةُ هي الشكلُ الوحيد الذي يُخفي المهمّ. فمن حفظ عشرَ علاماتٍ لا يزال لا يدري ما الأوّل، ولا في أيّها هو قائم، ولا ما يصنع.\n\nفهذه هي المادّةُ نفسُها **سلسلةً**: أربعُ مراحلَ على الترتيب الذي وضعتها فيه النصوص، و**التصريحُ بدرجة الترتيب** في كلّ خطوة — فمنه ما ثبّته نصّ، ومنه ما دلّ عليه دليل، ومنه ما لا يعلمه أحد. وحيث لا يعلمه أحدٌ تقول هذه الصفحةُ ذلك ولا تخترع ترتيبًا.\n\nوفي كلّ خطوةٍ ما يُغفَل عادةً: **ماذا تعني لمن يعيش فيها**، بكلامٍ بسيط.",

  legendTitle: "How to read the ordering",
  legendTitleAr: "كيف تُقرأ درجةُ الترتيب",
  legend: [
    { k: "fixed", en: "Fixed by a text — a narration states this order outright",
      ar: "ثابتٌ بالنصّ — صرّحت الرواية بهذا الترتيب" },
    { k: "indicated", en: "Strongly indicated — the narrations sit inside each other's stories",
      ar: "دلالةٌ قويّة — تتداخل الرواياتُ بعضها في قصّة بعض" },
    { k: "unknown", en: "Order unknown — grouped here, and nobody can place it",
      ar: "الترتيبُ مجهول — جُمع هنا، ولا يستطيع أحدٌ تحديد موضعه" }
  ],

  phases: [
    /** ---------------------------------------------------- 1 **/
    {
      id: "em-p1",
      num: 1,
      badge: "now",
      title: "The conditions — and this is the one we are standing in",
      titleAr: "الأحوال — وهذه هي التي نحن قائمون فيها",
      order: "fixed",
      plain: "In plain words: this box is one long hadith broken into its parts. In it the Prophet ﷺ listed, in order, the things that come before the Hour — knowledge disappearing, big wars between people who are all calling to the same thing, liars claiming to be prophets, earthquakes, time feeling shorter, troubles everywhere, killing for no reason, money everywhere, tall buildings, and people so tired of life they envy the dead.\n\n**These are conditions, not events.** There is no date on any of them and no moment when one is finished. That is why you cannot tick them off.\n\n**What it means for you:** this is the phase we are living in. It is not a reason to panic and it is not a reason to sit still. It tells you what kind of time you are in, so the next boxes can tell you what to do in it.",
      plainAr: "بكلامٍ بسيط: هذا الصندوقُ حديثٌ واحدٌ طويل، فُصّل إلى أجزائه. عدّ فيه النبيُّ ﷺ بالترتيب ما يقع قبل الساعة: ذهابُ العلم، وحروبٌ كبيرة بين أناسٍ كلُّهم يدعون دعوةً واحدة، وكذّابون يدّعون النبوّة، وزلازل، وشعورٌ بأنّ الوقت يمرّ أسرع، وفتنٌ في كلّ مكان، وقتلٌ بلا سبب، ومالٌ كثير، وأبنيةٌ عالية، وناسٌ سئموا الحياة حتى يحسدوا الموتى.\n\n**وهذه أحوالٌ لا وقائع.** لا تاريخَ لواحدةٍ منها، ولا لحظةَ تنتهي عندها. ولهذا لا تُعَدُّ عدًّا.\n\n**وماذا يعني لك:** هذه هي المرحلةُ التي نعيش فيها. وليست سببًا للفزع، ولا سببًا للقعود. وإنما تخبرك في أيّ زمانٍ أنت، لتخبرك الصناديقُ التالية بما تصنع فيه.",
      orderNote: "This phase is ordered because he ﷺ ordered it — in one hadith, al-Bukhari 7121, which lists these things in sequence and then runs on into Phase 4 and ends at the sun rising from the west. It is the only sequence on this map that comes straight from his own mouth.",
      orderNoteAr: "رُتّبت هذه المرحلةُ لأنه ﷺ رتّبها، في حديثٍ واحد: البخاريّ ٧١٢١، يعدّها على التوالي ثم يمضي إلى المرحلة الرابعة وينتهي بطلوع الشمس من مغربها. وهو الترتيبُ الوحيد في هذه الخريطة الآتي من فيه الشريف مباشرةً.",
      lead: "Almost everyone knows a few of these separately. Very few know they are **one hadith**, in order, in al-Bukhari 7121 — and that the same hadith carries on past this phase and finishes at the sun rising from the west.\n\nThat is what makes it a chain rather than a list. Read the parts in the order he gave them.",
      leadAr: "يعرف أكثرُ الناس بعضَ هذه متفرّقةً، ويعرف القليلُ أنها **حديثٌ واحد** مرتَّب عند البخاريّ برقم ٧١٢١ — وأنّ الحديث نفسَه يتجاوز هذه المرحلة وينتهي بطلوع الشمس من مغربها.\n\nوبهذا صارت سلسلةً لا قائمة. فاقرأ أجزاءها على الترتيب الذي ذكرها به.",
      nodes: [
        { t: "Two great groups fight — and both are calling to the same thing",
          tAr: "تقتتل فئتان عظيمتان — ودعوتُهما واحدة",
          detail: "**لَا تَقُومُ السَّاعَةُ حَتَّى تَقْتَتِلَ فِئَتَانِ عَظِيمَتَانِ، يَكُونُ بَيْنَهُمَا مَقْتَلَةٌ عَظِيمَةٌ، دَعْوَتُهُمَا وَاحِدَةٌ.**\n\nThe last three words are the whole point and they are the ones left out when this is quoted. **Da'watuhuma wahidah** — **their call is one.** Both sides are claiming the same thing. This is not a war between a Muslim army and somebody else. It is Muslims against Muslims, both sure they are the ones in the right.",
          detailAr: "**لَا تَقُومُ السَّاعَةُ حَتَّى تَقْتَتِلَ فِئَتَانِ عَظِيمَتَانِ، يَكُونُ بَيْنَهُمَا مَقْتَلَةٌ عَظِيمَةٌ، دَعْوَتُهُمَا وَاحِدَةٌ.**\n\nوآخرُ الحديث هو مقصودُه، وهو الذي يُحذف عند النقل: **دعوتُهما واحدة** (أي أنّ الطائفتين تدعوان إلى الشيء نفسه). فليست حربًا بين جيشٍ مسلمٍ وغيره، وإنما هي مسلمون في وجه مسلمين، وكلٌّ موقنٌ أنه على الحقّ.",
          means: "For you: when both sides are certain, certainty stops being evidence. That is the practical lesson, and it applies long before any end-times reading of it.",
          meansAr: "لك أنت: إذا أيقن الطرفان جميعًا لم يعد اليقينُ دليلًا. وهذه هي الفائدةُ العمليّة، وهي نافعةٌ قبل أيّ تنزيلٍ على آخر الزمان.",
          ref: "Sahih al-Bukhari 7121 — Abu Hurairah",
          refAr: "صحيح البخاري ٧١٢١ — عن أبي هريرة",
          strength: "Sahih — Narrated by al-Bukhari",
          strengthAr: "صحيح — أخرجه البخاري" },

        { t: "About thirty liars, each claiming to be a messenger of Allah",
          tAr: "قريبٌ من ثلاثين كذّابًا، كلٌّ يزعم أنه رسول الله",
          detail: "**وَحَتَّى يُبْعَثَ دَجَّالُونَ كَذَّابُونَ، قَرِيبٌ مِنْ ثَلَاثِينَ، كُلُّهُمْ يَزْعُمُ أَنَّهُ رَسُولُ اللَّهِ.**\n\nNote the word **dajjalun** here is a plural and an ordinary noun — a **deceiver**. It is not the Dajjal of the ten major signs. These are thirty separate liars spread across the ummah's history, and several are already known by name.",
          detailAr: "**وَحَتَّى يُبْعَثَ دَجَّالُونَ كَذَّابُونَ، قَرِيبٌ مِنْ ثَلَاثِينَ، كُلُّهُمْ يَزْعُمُ أَنَّهُ رَسُولُ اللَّهِ.**\n\nوتأمّل لفظ **دجّالون** هنا؛ فهو جمعٌ واسمٌ عامّ، ومعناه: الكذّابون المموِّهون (أي الذين يُلبِسون الحقَّ بالباطل). وليس هو المسيحَ الدجّال الذي في العلامات العشر الكبرى. وإنما هؤلاء ثلاثون كذّابًا متفرّقين في تاريخ الأمّة، وقد عُرف منهم جماعةٌ بأسمائهم.",
          means: "For you: the answer to a claimant is not argument, it is the ruling itself — prophethood is finished. Anyone claiming it has answered the question about himself before you say a word.",
          meansAr: "لك أنت: ليس جوابُ المدّعي مناظرةً، وإنما هو الحكمُ نفسه: النبوّةُ خُتمت. فمن ادّعاها فقد أجاب عن نفسه قبل أن تتكلّم.",
          ref: "Sahih al-Bukhari 7121 and 3609 — Abu Hurairah",
          refAr: "صحيح البخاري ٧١٢١ و٣٦٠٩ — عن أبي هريرة",
          strength: "Sahih — Narrated by al-Bukhari",
          strengthAr: "صحيح — أخرجه البخاري" },

        { t: "Knowledge is taken away — and not off the shelves",
          tAr: "يُقبض العلم — ولا يُنزع من الرفوف",
          detail: "He ﷺ explained the mechanism himself, and it is not that books vanish. Allah does not seize knowledge by snatching it out of people; He seizes it **by the death of the scholars**, until no scholar is left and people take ignorant men as leaders, who are asked and answer without knowledge, and so are misled and mislead others.\n\nThis is why the chain puts it here. Every other item gets easier once this one has happened.",
          detailAr: "بيّن ﷺ الكيفيّة بنفسه، وليست هي أن تختفي الكتب. فإنّ الله لا **يقبض** العلم (أي لا يرفعه) انتزاعًا ينتزعه من الناس، ولكن **يقبضه بقبض العلماء** (أي بموتهم)، حتى إذا لم يُبقِ عالمًا اتّخذ الناسُ رؤوسًا جهّالًا، فسُئلوا فأفتوا بغير علمٍ فضلّوا وأضلّوا.\n\nولهذا وُضع في هذا الموضع من السلسلة. فكلُّ ما بعده أهونُ وقوعًا متى وقع هذا.",
          means: "For you: the defence is not to stockpile opinions, it is to know **who** you take your religion from, and to tell a scholar from a confident voice. That is a skill, and it is learnable.",
          meansAr: "لك أنت: ليست العصمةُ في جمع الأقوال، وإنما في أن تعرف **عمّن** تأخذ دينك، وأن تفرّق بين عالمٍ وصوتٍ واثق. وتلك مهارةٌ تُكتسب.",
          ref: "Sahih al-Bukhari 100, 1036 and 7121 — Abu Hurairah and Abdullah ibn Amr",
          refAr: "صحيح البخاري ١٠٠ و١٠٣٦ و٧١٢١ — عن أبي هريرة وعبد الله بن عمرو",
          strength: "Sahih — Narrated by al-Bukhari",
          strengthAr: "صحيح — أخرجه البخاري" },

        { t: "The trust is lost, and matters are handed to men unfit for them",
          tAr: "تُضيَّع الأمانة، ويُوسَّد الأمرُ إلى غير أهله",
          detail: "A bedouin asked when the Hour was. He ﷺ finished what he was saying, then asked where the questioner was, and answered: **إِذَا ضُيِّعَتِ الْأَمَانَةُ فَانْتَظِرِ السَّاعَةَ.** The man asked how it is lost. He said: **إِذَا وُسِّدَ الْأَمْرُ إِلَى غَيْرِ أَهْلِهِ فَانْتَظِرِ السَّاعَةَ.**\n\nNotice he did not answer with a date at all. He answered with a **condition you can check**, which is what makes this hadith useful rather than frightening.",
          detailAr: "سأله أعرابيٌّ متى الساعة، فمضى ﷺ في حديثه، ثم سأل عن السائل فقال: **إِذَا ضُيِّعَتِ الْأَمَانَةُ فَانْتَظِرِ السَّاعَةَ.** قال: كيف إضاعتُها؟ قال: **إِذَا وُسِّدَ الْأَمْرُ إِلَى غَيْرِ أَهْلِهِ فَانْتَظِرِ السَّاعَةَ** (ووُسِّد الأمرُ أي أُسنِد وسُلِّم، من الوسادة؛ والمعنى: أن يُولَّى العملَ من ليس أهلًا له).\n\nوتأمّل أنه لم يُجب بتاريخٍ البتّة، وإنما أجاب بـ**حالٍ يمكنك أن تفحصها**، وبهذا صار الحديثُ نافعًا لا مخيفًا.",
          means: "For you: this one is answerable at your own scale. Be the man who IS fit for what he is given — at work, in your house, over money that is not yours. The complaint is about a whole society, and a society is people.",
          meansAr: "لك أنت: وهذا يُعالَج على قدرك أنت. فكن الرجلَ **الأهلَ** لما وُسِّد إليه: في عملك، وفي بيتك، وفي مالٍ ليس لك. فالشكوى عن مجتمعٍ كامل، والمجتمعُ أناس.",
          ref: "Sahih al-Bukhari 59 and 6496 — Abu Hurairah",
          refAr: "صحيح البخاري ٥٩ و٦٤٩٦ — عن أبي هريرة",
          strength: "Sahih — Narrated by al-Bukhari",
          strengthAr: "صحيح — أخرجه البخاري" },

        { t: "Time contracts — a year like a month, a month like a week",
          tAr: "يتقارب الزمان — السنةُ كالشهر والشهرُ كالجمعة",
          detail: "The narrations say the years draw close together, until a year is like a month, a month like a week, a week like a day, and a day like the burning of a palm frond.\n\n**A note on one word, because it is misread constantly.** **Jumu'ah** in these narrations means **a week**, not Friday. Arabic uses the same word for both, and the order settles which is meant: year, then month, then week, then day — each shorter than the last. The same word causes the same confusion in the hadith of the Dajjal, where a day like a **jumu'ah** means a day as long as a week.\n\nThe scholars differ on what the contraction means: literal shortening, or the loss of barakah in time, or the speed of travel and news. This page does not settle it, and it is better kept as it was said than explained with physics.",
          detailAr: "في الأخبار أنّ الزمانَ **يتقارب** (أي يمضي أسرع ويقلّ خيرُه) حتى تكون السنةُ كالشهر، والشهرُ **كالجمعة**، والجمعةُ كاليوم، واليومُ كاحتراق السَّعفة (أي الغصن الجافّ من النخل، يشتعل فيذهب سريعًا).\n\n**وتنبيهٌ على لفظٍ يُخطئ فيه الناسُ كثيرًا:** فـ**الجُمعة** ههنا معناها **الأسبوع**، لا يومُ الجمعة. والعربيّة تستعمل اللفظ للأمرين، والترتيبُ يفصل: سنةٌ، فشهر، فأسبوع، فيوم — كلٌّ أقصرُ ممّا قبله. وهذا اللفظُ نفسُه يُلبِس في حديث الدجّال، حيث «يومٌ كجمعة» أي يومٌ طولُه أسبوع.\n\nواختلف أهلُ العلم في معنى التقارب: أهو قِصَرُ الزمان حقيقةً، أم نزعُ البركة منه، أم سرعةُ الأسفار والأخبار؟ ولا تقطع هذه الصفحةُ فيه، وإبقاؤه على ما قيل أولى من تفسيره بالفيزياء.",
          means: "For you: whatever it means, the answer is the same — the day is shorter than you think it is. That is an argument for finishing things, not for hurrying through them.",
          meansAr: "لك أنت: أيًّا كان معناه فالجوابُ واحد: اليومُ أقصرُ ممّا تحسب. وذلك حجّةٌ على **إتمام** العمل لا على العَجَلة فيه.",
          ref: "Sahih al-Bukhari 1036, 7061 and 7121 — Abu Hurairah",
          refAr: "صحيح البخاري ١٠٣٦ و٧٠٦١ و٧١٢١ — عن أبي هريرة",
          strength: "Sahih — Narrated by al-Bukhari",
          strengthAr: "صحيح — أخرجه البخاري" },

        { t: "Tribulations appear, and sitting becomes better than standing",
          tAr: "تظهر الفتن، ويصير القاعدُ خيرًا من القائم",
          detail: "**سَتَكُونُ فِتَنٌ، الْقَاعِدُ فِيهَا خَيْرٌ مِنَ الْقَائِمِ، وَالْقَائِمُ فِيهَا خَيْرٌ مِنَ الْمَاشِي، وَالْمَاشِي فِيهَا خَيْرٌ مِنَ السَّاعِي. وَمَنْ يُشْرِفْ لَهَا تَسْتَشْرِفْهُ، وَمَنْ وَجَدَ مَلْجَأً أَوْ مَعَاذًا فَلْيَعُذْ بِهِ.**\n\nThis is the hadith behind everything people half-remember about staying in your house. It is real, it is in al-Bukhari, and read it exactly: the more you move toward a fitnah, the worse your position — and **whoever cranes his neck at it, it will catch him.**",
          detailAr: "**سَتَكُونُ فِتَنٌ، الْقَاعِدُ فِيهَا خَيْرٌ مِنَ الْقَائِمِ، وَالْقَائِمُ فِيهَا خَيْرٌ مِنَ الْمَاشِي، وَالْمَاشِي فِيهَا خَيْرٌ مِنَ السَّاعِي. وَمَنْ **يُشْرِفْ** لَهَا **تَسْتَشْرِفْهُ**، وَمَنْ وَجَدَ **مَلْجَأً** أَوْ **مَعَاذًا** فَلْيَعُذْ بِهِ.**\n\nومعاني الألفاظ: **الفتنة** الاختبارُ والاضطرابُ الذي تختلط فيه الأمور؛ و**يُشرِف لها** أي يتطلّع إليها ويمدّ عنقه نحوها، و**تستشرفه** أي تأخذه وتصرعه؛ و**الملجأ والمعاذ** الموضعُ الذي تحتمي به.\n\nوهذا هو الحديثُ الذي وراء ما يحفظه الناسُ نصفَ حفظٍ عن لزوم البيوت. وهو ثابتٌ في البخاريّ، فاقرأه على وجهه: كلّما تحرّكتَ نحو الفتنة ساءت منزلتُك.",
          means: "For you: this is the sentence to keep for the day it is needed. It does not mean abandon your duties; it means when the killing is blind, distance is not cowardice, it is the instruction. And it answers the fear of leaving the house — that fear is not weakness, it is being told to you in advance.",
          meansAr: "لك أنت: هذه هي الجملةُ التي تُحفظ ليوم الحاجة. وليست تعني تركَ الواجبات، وإنما تعني أنّ القتلَ إذا عَمِيَ فالبُعدُ ليس جُبنًا بل هو الأمر. وهي جوابُ الخوفِ من الخروج: فالخوفُ ليس ضعفًا، وإنما قيل لك من قبلُ إنه سيكون.",
          ref: "Sahih al-Bukhari 3601 — Abu Hurairah; also Sahih Muslim, Book of Tribulations",
          refAr: "صحيح البخاري ٣٦٠١ — عن أبي هريرة؛ وهو عند مسلم، كتاب الفتن",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متّفقٌ عليه (البخاري ومسلم)" },

        { t: "Al-harj — killing in which nobody knows why",
          tAr: "الهَرْج — قتلٌ لا يدري فيه أحدٌ لِمَ",
          detail: "He ﷺ named it and then defined it in the same breath: **وَيَكْثُرَ الْهَرْجُ — وَهُوَ الْقَتْلُ.** And in Sahih Muslim: a time will come when **the killer does not know why he killed, and the one killed does not know why he was killed.**\n\nWhen he was asked what al-harj was, he answered by **turning his hand over** — not with a word. The gesture is the definition: things turned upside down.\n\nThis is a **condition, not an event**, which is why it carries no date. You cannot date the year a purpose went missing from violence.",
          detailAr: "سمّاه ﷺ ثم فسّره في الحديث نفسه: **وَيَكْثُرَ الْهَرْجُ — وَهُوَ الْقَتْلُ** (و**الهَرْج** في اللغة الاختلاطُ والاضطراب، وفسّره هو ﷺ بالقتل). وفي صحيح مسلم: يأتي زمانٌ **لا يدري القاتلُ فيمَ قَتَل، ولا المقتولُ فيمَ قُتِل.**\n\nولمّا سُئل: ما الهَرْج؟ أجاب بأن **قلَب يدَه** — لا بكلمة. والإشارةُ هي الحدُّ نفسُه: أمرٌ انقلب.\n\nوهذه **حالٌ لا واقعة**، ولذلك لا تاريخَ لها. فلا تُؤرَّخ السنةُ التي ضاع فيها من العنف معناه.",
          means: "For you: this is the one to look at honestly, because the resemblance to now is the strongest on the page — killing over a phone, over a queue, over nothing. But resemblance is not fulfilment, and every century has thought it was theirs. Hold both.",
          meansAr: "لك أنت: وهذه التي يُنظر فيها بإنصاف، فشبهُها بالواقع أقوى ما في الصفحة: قتلٌ على هاتفٍ، وعلى دور، وعلى لا شيء. غير أنّ الشبَهَ ليس وقوعًا، وما من قرنٍ إلا ظنّ أنه قرنُه. فأمسِك الأمرين معًا.",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour — Abu Hurairah; Sahih al-Bukhari 85, 7061 and 7121",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة — عن أبي هريرة؛ وصحيح البخاري ٨٥ و٧٠٦١ و٧١٢١",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متّفقٌ عليه (البخاري ومسلم)" },

        { t: "Wealth overflows until a man cannot find anyone to take his charity",
          tAr: "يفيض المال حتى لا يجد الرجلُ من يقبل صدقته",
          detail: "**حَتَّى يَكْثُرَ فِيكُمُ الْمَالُ فَيَفِيضَ، حَتَّى يُهِمَّ رَبَّ الْمَالِ مَنْ يَقْبَلُ صَدَقَتَهُ، وَحَتَّى يَعْرِضَهُ فَيَقُولَ الَّذِي يَعْرِضُهُ عَلَيْهِ: لَا أَرَبَ لِي بِهِ.**\n\nPeople expect the end of the world to look like poverty. The hadith says the opposite about this stage — and it is the item most often left out when the chain is retold.",
          detailAr: "**حَتَّى يَكْثُرَ فِيكُمُ الْمَالُ فَيَفِيضَ** (أي يزيد حتى يفيض عن الحاجة)، **حَتَّى يُهِمَّ رَبَّ الْمَالِ مَنْ يَقْبَلُ صَدَقَتَهُ** (أي يُهمّه ويشغله: من عساه يقبلها؟)، **وَحَتَّى يَعْرِضَهُ فَيَقُولَ الَّذِي يَعْرِضُهُ عَلَيْهِ: لَا أَرَبَ لِي بِهِ** (و**الأَرَب** الحاجة؛ أي لا حاجةَ لي فيه).\n\nيتوقّع الناسُ أن تكون نهايةُ الدنيا فقرًا، والحديثُ يقول في هذه المرحلة خلافَ ذلك — وهو أكثرُ بنودها سقوطًا حين تُروى السلسلة.",
          means: "For you: wealth arriving is not by itself a sign that things are well. On this chain it sits between blind killing and people envying the dead.",
          meansAr: "لك أنت: ليس بلوغُ المال وحدَه دليلًا على أنّ الأمر بخير. فهو في هذه السلسلة بين القتل الأعمى وبين من يحسدون الموتى.",
          ref: "Sahih al-Bukhari 1412, 1036 and 7121 — Abu Hurairah",
          refAr: "صحيح البخاري ١٤١٢ و١٠٣٦ و٧١٢١ — عن أبي هريرة",
          strength: "Sahih — Narrated by al-Bukhari",
          strengthAr: "صحيح — أخرجه البخاري" },

        { t: "A man passes a grave and says: I wish I were in his place",
          tAr: "يمرّ الرجلُ بقبر الرجل فيقول: يا ليتني مكانه",
          detail: "**وَحَتَّى يَمُرَّ الرَّجُلُ بِقَبْرِ الرَّجُلِ فَيَقُولُ: يَا لَيْتَنِي مَكَانَهُ.**\n\nThis is the last of the conditions and it is the heaviest, because it is not about the world outside. It is about what living in that world does to a person. Not a man who wants to die from illness or grief — an ordinary man, walking past an ordinary grave, who looks at the dead and envies them.\n\nIn another narration the reason is given plainly: **not out of longing for Allah, but out of the severity of what he is living through.**",
          detailAr: "**وَحَتَّى يَمُرَّ الرَّجُلُ بِقَبْرِ الرَّجُلِ فَيَقُولُ: يَا لَيْتَنِي مَكَانَهُ.**\n\nوهذا آخرُ الأحوال وأثقلُها، لأنه ليس في الدنيا من حوله، وإنما فيما تصنعه تلك الدنيا بالإنسان. وليس رجلًا يتمنّى الموتَ من مرضٍ أو حزن، بل رجلٌ عاديّ يمرّ بقبرٍ عاديّ، فينظر إلى الميّت فيحسده.\n\nوفي روايةٍ أخرى بيانُ السبب صريحًا: **لا شوقًا إلى الله، وإنما من شدّة ما هو فيه.**",
          means: "For you: this is the thing to prepare for, and preparing for it is not physical. A person who knows in advance that the weight is coming does not conclude, when it arrives, that he alone is broken. That is the whole reason the next two boxes exist.",
          meansAr: "لك أنت: وهذا هو الذي يُستعدّ له، والاستعدادُ له ليس بدنيًّا. فمن علم من قبلُ أنّ الثِّقَل آتٍ لم ينتهِ عند وقوعه إلى أنه هو وحده المنكسر. وهذا هو سببُ وجود الصندوقين التاليين.",
          ref: "Sahih al-Bukhari 7115 and 7121 — Abu Hurairah; also Sahih Muslim, Book of Tribulations",
          refAr: "صحيح البخاري ٧١١٥ و٧١٢١ — عن أبي هريرة؛ وهو عند مسلم، كتاب الفتن",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متّفقٌ عليه (البخاري ومسلم)" }
      ],
      here: {
        t: "This is where we are — said carefully",
        tAr: "هاهنا نحن — بتحفّظ",
        body: "Every item above is visible somewhere right now, and it would be dishonest to pretend otherwise. It would be equally dishonest to declare the phase complete.\n\n**Two things are true at once.** These are conditions with no finish line, so a person can always point at some of them — and people have, in every century, with real resemblances in front of them, and they were wrong about what came next. And: the Prophet ﷺ described a direction of travel, and a reader is allowed to notice which way things are travelling.\n\n**So the honest statement is: we are inside this phase, we cannot know how far inside, and nothing here licenses a date.** That is not a hedge. It is the whole discipline of the subject, and the people who ignored it are the ones who did the damage.",
        bodyAr: "كلُّ بندٍ ممّا سبق مرئيٌّ في مكانٍ ما اليوم، ومن الكذب أن يُنكَر. ومن الكذب مثلِه أن يُقال إنّ المرحلة قد تمّت.\n\n**وأمران صادقان معًا.** فهذه أحوالٌ لا نهايةَ لها، فيستطيع المرءُ دائمًا أن يشير إلى بعضها — وقد فعلوا في كلّ قرنٍ ومشابهُ حقيقيّةٌ بين أيديهم، ثم أخطؤوا فيما بعدُ. وفي الوقت نفسه: وصف النبيُّ ﷺ **جهةَ سيرٍ**، وللقارئ أن يرى إلى أين تسير الأمور.\n\n**فالقولُ الصادق: نحن داخلَ هذه المرحلة، ولا نعلم كم قطعنا منها، وليس فيها ما يُبيح تاريخًا.** وليس هذا تهرّبًا، بل هو ضبطُ البابِ كلِّه، والذين أهملوه هم الذين أفسدوا."
      }
    },

    /** ---------------------------------------------------- 2 **/
    {
      id: "em-p2",
      num: 2,
      badge: "named",
      title: "The named markers — specific, checkable, and not yet",
      titleAr: "العلاماتُ المسمّاة — معيّنةٌ تُعرف، ولم تقع بعدُ",
      order: "unknown",
      plain: "In plain words: phase 1 was made of conditions that have no finishing line. **These three are different — they are actual events**, described so clearly that when one happens nobody will need to be told: a mountain of gold appearing in the Euphrates, the man called the Mahdi, and a huge battle with the Romans.\n\n**Nobody knows their order.** No hadith puts them in a sequence against each other, so this page groups them and says so. Anyone who tells you the order is guessing.\n\n**What it means for you:** two of these come with an instruction, and the instructions are the useful part — do not take any of the gold, and do not treat any living man's claim to be the Mahdi as anything but a claim.",
      plainAr: "بكلامٍ بسيط: المرحلةُ الأولى كانت أحوالًا لا نهايةَ لها. **وهذه الثلاثةُ مختلفة، فهي وقائعُ حقيقيّة**، موصوفةٌ وصفًا إذا وقع واحدٌ منها لم يحتج أحدٌ إلى من يخبره: جبلٌ من ذهبٍ يظهر في الفرات، والرجلُ الذي يُسمّى المهديّ، ومعركةٌ كبيرةٌ مع الروم.\n\n**ولا يعلم أحدٌ ترتيبَها.** فليس حديثٌ يرتّبها بعضها مع بعض، فتجمعها هذه الصفحةُ وتقول ذلك. ومن رتّبها لك فإنما يحزر.\n\n**وماذا يعني لك:** اثنتان منها معهما أمرٌ عمليّ، والأمرُ هو موضعُ النفع: ألّا تأخذ من الذهب شيئًا، وألّا تعامل دعوى رجلٍ حيٍّ أنه المهديّ إلا على أنها دعوى.",
      orderNote: "These are grouped, not sequenced. Each is named in a sound narration, and no text puts them in an order relative to each other. Anyone who gives you their order is reconciling, not reporting.",
      orderNoteAr: "هذه مجموعةٌ لا مرتّبة. فكلُّ واحدةٍ مسمّاةٌ في خبرٍ ثابت، وليس نصٌّ يرتّبها بعضها مع بعض. ومن رتّبها لك فإنما يوفّق بين الأخبار لا ينقل.",
      lead: "Phase 1 has no finish line. **These do.** Each is a specific, describable event that has not happened, and when one happens nobody will need to be told.",
      leadAr: "المرحلةُ الأولى لا حدَّ لآخرها. **وهذه لها حدّ.** فكلُّ واحدةٍ واقعةٌ معيّنةٌ توصف، لم تقع بعدُ، وإذا وقعت لم يحتج أحدٌ إلى من يخبره.",
      nodes: [
        { t: "The Euphrates uncovers a mountain of gold",
          tAr: "يحسر الفراتُ عن جبلٍ من ذهب",
          detail: "**لَا تَقُومُ السَّاعَةُ حَتَّى يَحْسِرَ الْفُرَاتُ عَنْ جَبَلٍ مِنْ ذَهَبٍ، يَقْتَتِلُ النَّاسُ عَلَيْهِ، فَيُقْتَلُ مِنْ كُلِّ مِائَةٍ تِسْعَةٌ وَتِسْعُونَ، وَيَقُولُ كُلُّ رَجُلٍ مِنْهُمْ: لَعَلِّي أَكُونُ أَنَا الَّذِي أَنْجُو.**\n\nRead the last clause again, because it is the most frightening sentence in the whole subject and it is not about gold. **Every single man knows the odds are ninety-nine in a hundred — and every single one of them thinks he is the exception.** That is not a prophecy about a river. It is a description of how a human being reasons when he wants something badly.\n\nAnd there is an instruction attached, in al-Bukhari: **فَمَنْ حَضَرَهُ فَلَا يَأْخُذْ مِنْهُ شَيْئًا** — whoever is present at it, let him take nothing from it.",
          detailAr: "**لَا تَقُومُ السَّاعَةُ حَتَّى **يَحْسِرَ** الْفُرَاتُ عَنْ جَبَلٍ مِنْ ذَهَبٍ، يَقْتَتِلُ النَّاسُ عَلَيْهِ، فَيُقْتَلُ مِنْ كُلِّ مِائَةٍ تِسْعَةٌ وَتِسْعُونَ، وَيَقُولُ كُلُّ رَجُلٍ مِنْهُمْ: لَعَلِّي أَكُونُ أَنَا الَّذِي أَنْجُو.**\n\nو**يحسِر** أي ينكشف ويتراجع ماؤه فيظهر ما تحته.\n\nوأعِد الجملةَ الأخيرة، فإنّها أفزعُ ما في الباب كلِّه وليست في الذهب. **فكلُّ رجلٍ منهم يعلم أنّ الهلاك تسعةٌ وتسعون من مئة — وكلُّ واحدٍ منهم يحسب أنه هو المستثنى.** وليست هذه نبوءةً عن نهر، وإنما وصفٌ لكيف يفكّر الإنسانُ إذا اشتدّت شهوتُه.\n\nوفي البخاريّ أمرٌ ملحق بها: **فَمَنْ حَضَرَهُ فَلَا يَأْخُذْ مِنْهُ شَيْئًا.**",
          means: "For you: the instruction is the useful part, and it is one sentence long — **do not take any of it.** Learn it now, because the whole point of the narration is that at the time, your own reasoning will be against you.",
          meansAr: "لك أنت: الأمرُ هو موضعُ النفع، وهو جملةٌ واحدة: **فلا يأخذ منه شيئًا.** فاحفظها الآن، فإنّ مقصود الخبر أنّ عقلك يومئذٍ سيكون عليك لا لك.",
          ref: "Sahih al-Bukhari 7119 — Abu Hurairah; Sahih Muslim, Book of Tribulations and the Portents of the Last Hour",
          refAr: "صحيح البخاري ٧١١٩ — عن أبي هريرة؛ وصحيح مسلم، كتاب الفتن وأشراط الساعة",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متّفقٌ عليه (البخاري ومسلم)" },

        { t: "The Mahdi — and the honest state of the evidence",
          tAr: "المهديّ — وتحريرُ درجة الأدلّة",
          detail: "He belongs on this map, and he belongs on it **with his grading attached**, because that is where most of the damage in this subject has been done.\n\nOnly one piece is in the two Sahihs: an army sent against a man who took refuge at the Kaaba is swallowed at al-Bayda'. That text gives no number, names no country, and **does not name the Mahdi at all.** Everything that names him is in Abu Dawud, at-Tirmidhi and Ibn Majah, accepted collectively by Ibn Taymiyyah, Ibn Kathir, as-Suyuti and al-Albani, and graded weak chain by chain by Ibn Khaldun.\n\nHe is **not** among the ten major signs, and this page will not move him into a list the text did not put him in.",
          detailAr: "هو من هذه الخريطة، وهو منها **بدرجته مقرونةً به**، فإنّ أكثر ما فسد في هذا الباب فسد من هنا.\n\nوليس في الصحيحين إلا موضعٌ واحد: جيشٌ يُبعث إلى رجلٍ عاذ بالبيت فيُخسف به بـ**البيداء** (أي الأرض المستوية الواسعة بين مكّة والمدينة). وليس في ذلك النصّ عددٌ ولا بلدٌ **ولا ذكرٌ للمهديّ أصلًا.** وكلُّ ما سمّاه ففي أبي داود والترمذيّ وابن ماجه، قبِلها بمجموعها ابنُ تيمية وابنُ كثير والسيوطيّ والألبانيّ، وضعّف ابنُ خلدون أسانيدها حديثًا حديثًا.\n\nوليس هو **من العشر الكبرى**، ولن تُدخله هذه الصفحةُ في قائمةٍ لم يضعه فيها النصّ.",
          means: "For you: whatever grading you settle on, the narrations describe people going to him **while he is unwilling** — so a community was already standing before he appeared. He is given to people who are doing something. And anyone alive today who claims it has answered the question about himself.",
          meansAr: "لك أنت: على أيّ درجةٍ استقرّ بك النظر، فالأخبارُ تصف قومًا يأتونه **وهو كاره** — فجماعةٌ كانت قائمةً قبل ظهوره. فهو يُساق إلى قومٍ يعملون. ومن ادّعاها اليوم فقد أجاب عن نفسه.",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour; Sunan Abu Dawud 4282, 4285 and 4286; Ibn Khaldun, Al-Muqaddimah",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة؛ وسنن أبي داود ٤٢٨٢ و٤٢٨٥ و٤٢٨٦؛ وابن خلدون في «المقدّمة»",
          strength: "Sahih for the swallowed army; the Mahdi narrations are outside the two Sahihs and the scholars differ",
          strengthAr: "صحيحٌ في الجيش المخسوف به؛ وأخبارُ المهديّ خارج الصحيحين واختلف فيها أهلُ العلم" },

        { t: "The great battle, and the conquest that follows it",
          tAr: "الملحمة الكبرى وما يتبعها من الفتح",
          detail: "In Sahih Muslim: the Romans descend at al-A'maq or Dabiq, and an army goes out to them from Madinah of the best people of the earth at that time. When they draw up in ranks, **a third flees and Allah never forgives them; a third is killed and they are the best of martyrs with Allah; and a third is victorious and is never tried afterwards** — and they conquer Constantinople.\n\nThe thirds are the part to keep. It is not a story of a clean victory. Two thirds of that army does not come home.",
          detailAr: "في صحيح مسلم: ينزل الرومُ بـ**الأعماق** أو بـ**دابق** (وهما موضعان في شمال الشام)، فيخرج إليهم جيشٌ من المدينة من خيار أهل الأرض يومئذ. فإذا تصافّوا (أي اصطفّوا للقتال) **انهزم ثلثٌ لا يتوب الله عليهم أبدًا، وقُتل ثلثٌ هم أفضل الشهداء عند الله، وانتصر ثلثٌ لا يُفتنون أبدًا** — ثم يفتحون القسطنطينيّة.\n\nو**الملحمة** معناها المعركةُ العظيمة التي يكثر فيها القتل. والأثلاثُ هي موضعُ الحفظ: فليست قصّةَ نصرٍ سهل، إذ ثلثا ذلك الجيش لا يرجعان.",
          means: "For you: nothing here is a call for an individual to go and fight anything. It describes a state's army in a named place at a time nobody can date. Reading it as a personal instruction is the exact mistake the Guidance page answers under the fighting verses.",
          meansAr: "لك أنت: ليس في هذا دعوةٌ لأحدٍ أن يخرج مقاتلًا. وإنما هو وصفُ جيشِ دولةٍ في موضعٍ مسمًّى في زمانٍ لا يؤرّخه أحد. وحملُه على أنه أمرٌ لك خطأٌ بعينه، وقد أُجيب عنه في صفحة التوجيه في آيات القتال.",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour — Abu Hurairah",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة — عن أبي هريرة",
          strength: "Sahih — Narrated by Muslim",
          strengthAr: "صحيح — أخرجه مسلم" }
      ]
    },

    /** ---------------------------------------------------- 3 **/
    {
      id: "em-p3",
      num: 3,
      badge: "major",
      title: "The ten major signs — the point after which nothing is ordinary",
      titleAr: "العلاماتُ العشر الكبرى — وبعدها لا يبقى شيءٌ على عادته",
      order: "indicated",
      plain: "In plain words: these are the **ten big signs** the Prophet ﷺ listed in one hadith. Everything before this could still look like ordinary bad times. From here it cannot.\n\n**How much do we know about their order? Three different amounts, and mixing them up is where people go wrong:**\n\n• **We know one thing for certain** — the fire is last, because the hadith says so in words.\n• **We are fairly confident about three** — the Dajjal, then Isa, then Ya'juj and Ma'juj, because their stories are told inside one another.\n• **We do not know about the rest at all** — the smoke, the Beast and the three landslides. Nobody can place them, and this page says nobody can.\n\n**What it means for you:** the only one you were told to prepare for by name is the Dajjal — the first ten verses of Surah Al-Kahf, and asking Allah for protection from him in every prayer. So do that, and do not worry about the running order.",
      plainAr: "بكلامٍ بسيط: هذه هي **العلاماتُ العشر الكبرى** التي عدّها النبيُّ ﷺ في حديثٍ واحد. وكلُّ ما قبلها قد يبدو زمانًا سيّئًا عاديًّا، وأمّا من هنا فلا.\n\n**وكم نعلم من ترتيبها؟ ثلاثةُ مقادير، والخلطُ بينها هو موضعُ الخطأ:**\n\n• **نعلم واحدةً يقينًا** — النارُ آخرُها، لأنّ الحديث نصّ على ذلك بلفظه.\n• **ونرجّح ثلاثةً** — الدجّال، ثم عيسى، ثم يأجوج ومأجوج، لأنّ قصصهم مرويّةٌ بعضُها داخل بعض.\n• **ولا نعلم عن الباقي شيئًا** — الدخان والدابّة والخسوفات الثلاثة. لا يستطيع أحدٌ تحديد موضعها، وهذه الصفحةُ تقول ذلك.\n\n**وماذا يعني لك:** الوحيدُ الذي أُمرتَ بالاستعداد له باسمه هو الدجّال — عشرُ آياتٍ من أوّل سورة الكهف، والاستعاذةُ منه في كلّ صلاة. فافعل ذلك، ولا يشغلك الترتيب.",
      orderNote: "Three levels here, and they must not be blurred: the fire is LAST by an explicit text; the Dajjal, then Isa, then Ya'juj and Ma'juj are strongly indicated because the narrations sit inside each other's stories; and where the smoke, the Beast and the three landslides fall, nobody knows.",
      orderNoteAr: "وهاهنا ثلاثُ درجاتٍ لا تُخلط: النارُ **آخرُها** بنصٍّ صريح؛ والدجّالُ ثم عيسى ثم يأجوجُ ومأجوجُ **دلالتُهم قويّة** لتداخل الرواياتِ بعضِها في قصّة بعض؛ وأمّا الدخانُ والدابّةُ والخسوفُ الثلاثة فلا يعلم أحدٌ أين موضعها.",
      lead: "These are the ten he ﷺ named in **one hadith** in Sahih Muslim, and this page keeps that list exactly as he gave it — nothing added, nothing promoted into it.\n\nThe full treatment of each one, with its own sources, is in the signs section below. What the map adds is the **ordering**, and the honest admission of where the ordering runs out.",
      leadAr: "هذه هي العشرُ التي سمّاها ﷺ في **حديثٍ واحد** عند مسلم، وتُبقيها هذه الصفحةُ كما قالها: لا زيادةَ ولا إدخالَ أحدٍ فيها.\n\nوتفصيلُ كلِّ واحدةٍ بأدلّتها في قسم العلامات أدناه. وإنما تزيد الخريطةُ **الترتيبَ**، والتصريحَ بحيث ينقطع الترتيب.",
      nodes: [
        { t: "What is fixed: the fire is last",
          tAr: "الثابت: النارُ آخرُها",
          detail: "The hadith of the ten ends with **وَآخِرُ ذَلِكَ نَارٌ تَخْرُجُ مِنَ الْيَمَنِ تَطْرُدُ النَّاسَ إِلَى مَحْشَرِهِمْ** — and the last of that is a fire that comes out of Yemen and drives people to their gathering place.\n\nThat clause, **وَآخِرُ ذَلِكَ**, is the only ordering statement in the entire hadith. Everything else people arrange, they arrange themselves.",
          detailAr: "ينتهي حديثُ العشر بقوله: **وَآخِرُ ذَلِكَ نَارٌ تَخْرُجُ مِنَ الْيَمَنِ تَطْرُدُ النَّاسَ إِلَى مَحْشَرِهِمْ** (والمحشر: الموضعُ الذي يُجمع الناسُ إليه).\n\nوهذه اللفظةُ — **وَآخِرُ ذَلِكَ** — هي جملةُ الترتيب الوحيدة في الحديث كلِّه. وما سواها فإنّ الناس هم الذين يرتّبونه.",
          means: "For you: when someone tells you the order of the ten with confidence, this is the test. Ask which text puts them in that order. There is one, and it fixes only the last.",
          meansAr: "لك أنت: إذا رتّبها لك أحدٌ بثقةٍ فهذا هو المحكّ: سَلْه أيُّ نصٍّ رتّبها هكذا؟ فالنصُّ واحدٌ، ولا يثبّت إلا الأخيرة.",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour — Hudhayfah ibn Usayd",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة — عن حذيفة بن أسيد",
          strength: "Sahih — Narrated by Muslim",
          strengthAr: "صحيح — أخرجه مسلم" },

        { t: "What is strongly indicated: the Dajjal, then Isa, then Ya'juj and Ma'juj",
          tAr: "وما دلالتُه قويّة: الدجّالُ ثم عيسى ثم يأجوج ومأجوج",
          detail: "This run is not fixed by a sentence, but it is close, because the narrations are **nested**: Isa descends and kills the Dajjal, so Isa is after him. And Ya'juj and Ma'juj are released during Isa's time, and he takes the believers to the high ground until it passes — so they are after him again.\n\nYou are not reading three separate reports and guessing. You are reading one continuous story in which each is inside the next.",
          detailAr: "ليس هذا الترتيبُ بجملةٍ صريحة، ولكنه قريبٌ منها، لأنّ الأخبارَ **متداخلة**: فعيسى ينزل فيقتل الدجّال، فهو بعده. ويأجوجُ ومأجوجُ يُبعثون في زمانه، فيأوي بالمؤمنين إلى الجبال حتى ينقضي أمرُهم، فهم بعده أيضًا.\n\nفلستَ تقرأ ثلاثةَ أخبارٍ متفرّقةٍ فتحزر، وإنما تقرأ قصّةً واحدةً متّصلةً كلٌّ منها في جوف الأخرى.",
          means: "For you: the Dajjal is the one you are told to prepare for by name — the ten verses of Al-Kahf, and seeking refuge from him in every prayer. Prepare for the one you were told to prepare for.",
          meansAr: "لك أنت: الدجّالُ هو الذي أُمرتَ بالاستعداد له بعينه: عشرُ آياتٍ من الكهف، والاستعاذةُ منه في كلّ صلاة. فاستعِدّ لمن أُمرتَ بالاستعداد له.",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour — an-Nawwas ibn Sam'an",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة — عن النوّاس بن سمعان",
          strength: "Sahih — Narrated by Muslim",
          strengthAr: "صحيح — أخرجه مسلم" },

        { t: "What nobody knows: the smoke, the Beast, and the three landslides",
          tAr: "وما لا يعلمه أحد: الدخانُ والدابّةُ والخسوفُ الثلاثة",
          detail: "The hadith names them. No text places them. The scholars even differ on whether the smoke has already happened — Ibn Mas'ud read it as the famine over Quraysh, Ibn Abbas as still to come, and both readings are old and serious.\n\nThis page prints them as a group, unordered, and says so. **A gap in the evidence is reported as a gap.**",
          detailAr: "سمّاها الحديث، ولم يضعها نصٌّ في موضع. (و**الخَسْف** أن تنهار الأرضُ بمن عليها فتبتلعهم.) بل اختلف أهلُ العلم في الدخان: أوقع أم لم يقع؟ فحمله ابنُ مسعود على الجوع الذي أصاب قريشًا، وحمله ابنُ عباس على ما هو آتٍ، والقولان قديمان معتبَران.\n\nفتطبعها هذه الصفحةُ مجموعةً غيرَ مرتّبة، وتقول ذلك. **فالفراغُ في الدليل يُنقل فراغًا.**",
          means: "For you: nothing to do here except notice how the page behaves. A source that tells you where its knowledge stops is the kind you can trust on the parts where it does not stop.",
          meansAr: "لك أنت: ليس هاهنا عملٌ إلا أن تنظر كيف تصنع الصفحة. فالذي يُخبرك أين ينتهي علمُه هو الذي يُوثق به فيما لم ينتهِ فيه.",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour; Surah Ad-Dukhan (44:10-16); Surah An-Naml (27:82)",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة؛ وسورة الدخان (٤٤:١٠-١٦)؛ وسورة النمل (٢٧:٨٢)",
          strength: "Sahih for the list; the placement is disputed among the scholars",
          strengthAr: "صحيحٌ في أصل العدّ؛ والترتيبُ مختلَفٌ فيه بين أهل العلم" }
      ]
    },

    /** ---------------------------------------------------- 4 **/
    {
      id: "em-p4",
      num: 4,
      badge: "closing",
      title: "The closing — after which nothing can be repaired",
      titleAr: "الخِتام — وبعده لا يُستدرك شيء",
      order: "fixed",
      plain: "In plain words: everything before this could still be fixed by a person changing. **This is where that stops.**\n\nThe sun rises from the west, and the door of repentance shuts — after that, someone who was not already a believer cannot become one. Then a gentle wind takes the soul of every believer, so **the believers are removed before the very worst of it**, which is a mercy worth knowing. Only the worst of people are left, and the Hour comes upon them.\n\n**What it means for you, and it is the whole point of the map:** everything you are planning to fix later can only be fixed now. The last hadith in this box makes it vivid — the Hour arrives while a man is in the middle of an ordinary act: two men in the middle of a sale, a man lifting food to his mouth. **Nobody gets a warning bell.**",
      plainAr: "بكلامٍ بسيط: كلُّ ما قبل هذا كان يمكن أن يُتدارك بأن يتغيّر الإنسان. **وهاهنا ينقطع ذلك.**\n\nتطلع الشمسُ من مغربها فيُغلق بابُ التوبة — فلا ينفع بعدها إيمانُ من لم يكن مؤمنًا. ثم تُرسَل ريحٌ طيّبةٌ تقبض روحَ كلّ مؤمن، فـ**يُرفَع المؤمنون قبل أشدّ ما يكون**، وهذه رحمةٌ يحسن أن تُعلم. ولا يبقى إلا شرارُ الناس، وعليهم تقوم الساعة.\n\n**وماذا يعني لك، وهو مقصودُ الخريطة كلِّها:** كلُّ ما تنوي إصلاحه فيما بعدُ لا يُصلَح إلا الآن. وآخرُ حديثٍ في هذا الصندوق يجعلها محسوسة: تقوم الساعةُ والرجلُ في وسط عملٍ عاديّ — رجلان في وسط بيعٍ، ورجلٌ رفع اللقمة إلى فمه. **ولا يُقرع لأحدٍ جرس.**",
      orderNote: "This phase IS ordered, and by texts rather than by reconciliation. Each item names what comes after it — and al-Bukhari 7121, the hadith that gave Phase 1 its order, runs on and reaches the sun rising from the west itself.",
      orderNoteAr: "هذه المرحلةُ **مرتّبة**، وبالنصوص لا بالتوفيق. فكلُّ بندٍ منها يذكر ما بعده — وحديثُ البخاريّ ٧١٢١ الذي رتّب المرحلةَ الأولى يمضي حتى يبلغ طلوعَ الشمس من مغربها نفسَه.",
      lead: "Everything before this could still be answered by a person changing. **This is where that stops being true**, and it is the reason the whole map exists — not to predict, but to make the door visible while it is still open.",
      leadAr: "كلُّ ما قبل هذا يمكن أن يُتدارك بأن يتغيّر الإنسان. **وهاهنا ينقطع ذلك**، وهو سببُ وجود هذه الخريطة كلِّها: لا لتتنبّأ، بل ليُرى البابُ ما دام مفتوحًا.",
      nodes: [
        { t: "The sun rises from the west, and repentance closes",
          tAr: "تطلع الشمسُ من مغربها، فيُغلق بابُ التوبة",
          detail: "When it rises from the west, **faith no longer benefits a soul that did not believe before** — and the door that has been open since the beginning is shut. This is the one event on the map with a consequence that cannot be undone by anything a person does afterwards.\n\nThis is also the point that settles a common confusion: repentance is still accepted while Isa عليه السلام is on the earth, and people do believe in him — so the sun rising from the west cannot come before that.",
          detailAr: "إذا طلعت من مغربها **لم ينفع نفسًا إيمانُها لم تكن آمنت من قبل** — ويُغلق البابُ الذي لم يزل مفتوحًا منذ البدء. وهذه هي الواقعةُ الوحيدة في الخريطة التي لا يُستدرك أثرُها بعمل.\n\nوبها يُفصل التباسٌ شائع: فالتوبةُ مقبولةٌ وعيسى عليه السلام في الأرض، والناسُ يؤمنون به — فلا يكون طلوعُ الشمس من مغربها قبل ذلك.",
          means: "For you: this is the entire practical weight of the subject, and it is one line. **Everything you intend to fix later is only fixable now.** That is not a scare; it is the same instruction the sapling hadith gives from the other direction.",
          meansAr: "لك أنت: وهذا هو ثِقَلُ الباب العمليُّ كلُّه في سطر: **كلُّ ما تنوي إصلاحه فيما بعدُ لا يُصلَح إلا الآن.** وليس هذا تخويفًا، بل هو أمرُ حديث الفَسِيلة نفسِه من الجهة الأخرى.",
          ref: "Surah Al-An'am (6:158); Sahih al-Bukhari 4636 and 7121; Sahih Muslim, Book of Faith",
          refAr: "سورة الأنعام (٦:١٥٨)؛ وصحيح البخاري ٤٦٣٦ و٧١٢١؛ وصحيح مسلم، كتاب الإيمان",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim), and the Quran",
          strengthAr: "صحيح — متّفقٌ عليه (البخاري ومسلم)، والقرآن" },

        { t: "A wind takes the soul of every believer",
          tAr: "ريحٌ تقبض روحَ كلّ مؤمن",
          detail: "Then Allah sends a good wind that takes the soul of every believer, and **the worst of people remain**, and upon them the Hour is established.\n\nOne consequence of this is worth stating because people find it shocking: an Abyssinian called Dhu as-Suwayqatayn will pull the Kaaba down stone by stone and nobody will stop him — because by then there are no believers left to stop him.",
          detailAr: "ثم يبعث اللهُ ريحًا طيّبةً فتقبض روحَ كلّ مؤمن، **ويبقى شرارُ الناس**، وعليهم تقوم الساعة.\n\nومن لوازم ذلك ما يستغربه الناس: أنّ **ذا السُّويقتين** من الحبشة (أي صاحبَ الساقين الدقيقتين، وهو وصفٌ لا اسم) يهدم الكعبة حجرًا حجرًا ولا يمنعه أحد — إذ لم يبقَ حينئذٍ مؤمنٌ يمنعه.",
          means: "For you: the believers are taken away BEFORE the worst of it. That is a mercy, and it is worth knowing when the subject starts to feel unbearable.",
          meansAr: "لك أنت: المؤمنون يُقبضون **قبل** أشدّه. وتلك رحمةٌ يحسن أن تُعلم إذا ثقُل البابُ على النفس.",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour; Sahih al-Bukhari 1591 — Abu Hurairah, on Dhu as-Suwayqatayn",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة؛ وصحيح البخاري ١٥٩١ — عن أبي هريرة في ذي السويقتين",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متّفقٌ عليه (البخاري ومسلم)" },

        { t: "And it arrives in the middle of an ordinary act",
          tAr: "وتقوم وهو في وسط عملٍ عاديّ",
          detail: "The same long hadith closes with a run of pictures, and they are the most useful thing in it, because none of them is dramatic:\n\n**وَلَتَقُومَنَّ السَّاعَةُ وَقَدْ نَشَرَ الرَّجُلَانِ ثَوْبَهُمَا فَلَا يَتَبَايَعَانِهِ وَلَا يَطْوِيَانِهِ، وَلَتَقُومَنَّ السَّاعَةُ وَقَدِ انْصَرَفَ الرَّجُلُ بِلَبَنِ لِقْحَتِهِ فَلَا يَطْعَمُهُ، وَلَتَقُومَنَّ السَّاعَةُ وَهْوَ يُلِيطُ حَوْضَهُ فَلَا يَسْقِي فِيهِ، وَلَتَقُومَنَّ السَّاعَةُ وَقَدْ رَفَعَ أُكْلَتَهُ إِلَى فِيهِ فَلَا يَطْعَمُهَا.**\n\nTwo men holding a cloth open between them, mid-sale. A man walking home with the milk he has just drawn. A man patching his water trough. A man with food already lifted to his mouth. **Not one of them was expecting it, and not one of them finished what he was doing.**",
          detailAr: "يُختم الحديثُ الطويل نفسُه بجملةٍ من الصور، وهي أنفعُ ما فيه، لأنّ ليس فيها مشهدٌ مهيب:\n\n**وَلَتَقُومَنَّ السَّاعَةُ وَقَدْ نَشَرَ الرَّجُلَانِ ثَوْبَهُمَا فَلَا يَتَبَايَعَانِهِ وَلَا يَطْوِيَانِهِ، وَلَتَقُومَنَّ السَّاعَةُ وَقَدِ انْصَرَفَ الرَّجُلُ بِلَبَنِ **لِقْحَتِهِ** فَلَا يَطْعَمُهُ، وَلَتَقُومَنَّ السَّاعَةُ وَهْوَ **يُلِيطُ** حَوْضَهُ فَلَا يَسْقِي فِيهِ، وَلَتَقُومَنَّ السَّاعَةُ وَقَدْ رَفَعَ **أُكْلَتَهُ** إِلَى فِيهِ فَلَا يَطْعَمُهَا.**\n\nومعاني الألفاظ: **اللِّقحة** الناقةُ ذاتُ اللبن؛ و**يُليط حوضه** أي يُصلحه ويسدّ شقوقه بالطين؛ و**الأُكلة** اللقمة.\n\nرجلان يبسطان ثوبًا بينهما في وسط بيع. ورجلٌ راجعٌ باللبن الذي حلبه لتوّه. ورجلٌ يُصلح حوضَ مائه. ورجلٌ رفع اللقمة إلى فمه. **ولم يكن واحدٌ منهم ينتظرها، ولم يُتمّ واحدٌ منهم ما كان فيه.**",
          means: "For you: this is why the map refuses to give a date, and why it keeps telling you to act now. The instruction is not **watch for the signs**. It is **be found doing something good in the middle of an ordinary Tuesday**, because that is exactly when it comes.",
          meansAr: "لك أنت: ولهذا تأبى الخريطةُ أن تُعطي تاريخًا، ولهذا تكرّر عليك أن تعمل الآن. فليس الأمرُ: **راقِب العلامات**، وإنما هو: **أن تُوجَد على عملٍ صالحٍ في وسط يومٍ عاديّ**، فإنّها في مثله تجيء.",
          ref: "Sahih al-Bukhari 7121 — Abu Hurairah",
          refAr: "صحيح البخاري ٧١٢١ — عن أبي هريرة",
          strength: "Sahih — Narrated by al-Bukhari",
          strengthAr: "صحيح — أخرجه البخاري" },

        { t: "The Trumpet — and this is not a sign, it is the Hour",
          tAr: "الصُّور — وليس علامةً، بل هو الساعة",
          detail: "The ten are signs **before** the Hour. The Trumpet **is** the Hour beginning, which is why it is placed here for reading and is not counted among them.\n\nOne blast and everything in the heavens and the earth falls dead except whom Allah wills; then another, and they are standing, looking on.",
          detailAr: "العشرُ علاماتٌ **قبل** الساعة. وأمّا **الصُّور** (وهو القرنُ الذي يُنفخ فيه) فهو **ابتداءُ** الساعة، ولذلك وُضع ههنا للقراءة ولم يُعَدّ منها.\n\nنفخةٌ فيُصعق من في السماوات ومن في الأرض إلا من شاء الله، ثم أخرى فإذا هم قيامٌ ينظرون.",
          means: "For you: this is where the map ends and the fifteen stages on this page begin. Everything after the Trumpet is no longer about preparing — it is about what you arrived holding.",
          meansAr: "لك أنت: وهاهنا تنتهي الخريطةُ وتبتدئ المراحلُ الخمس عشرة في هذه الصفحة. فما بعد الصُّور ليس في الاستعداد، وإنما فيما وصلتَ به.",
          ref: "Surah Az-Zumar (39:68); Surah Ya-Sin (36:51)",
          refAr: "سورة الزمر (٣٩:٦٨)؛ وسورة يس (٣٦:٥١)",
          strength: "quran",
          strengthAr: "قرآن" }
      ]
    }
  ],

  /** --------------------------------------------------- life **/
  life: {
    title: "How life will actually feel — because knowing it in advance is half of surviving it",
    titleAr: "كيف يكون العيشُ حقًّا — فمعرفتُه مقدَّمًا نصفُ احتماله",
    plain: "In plain words: this box is not about events. It is about **what an ordinary day feels like** in that time — because a person does not live through a sign, he lives through a Tuesday, with a family to feed and a door he is afraid to open.\n\nFive things the narrations say about it: violence with no reason behind it, the law getting weaker long before it disappears, normal people doing terrible things over very small gains, being afraid to go outside, and — the one that surprises everybody — **money everywhere, not famine.**\n\n**What it means for you:** none of this is here to frighten you. It is here so that if it comes in your lifetime you recognise it instead of thinking the world has gone mad and you with it. Recognising something is the difference between fear and panic.",
    plainAr: "بكلامٍ بسيط: هذا الصندوقُ ليس في الوقائع، وإنما في **كيف يكون اليومُ العاديّ** في ذلك الزمان — فالإنسانُ لا يعيش علامة، وإنما يعيش يومًا عاديًّا، وله أهلٌ يُطعمهم وبابٌ يخاف أن يفتحه.\n\nخمسةُ أمورٍ تقولها الأخبار: عنفٌ بلا سببٍ وراءه، وقانونٌ يضعف قبل أن يزول بزمان، وناسٌ عاديّون يصنعون الفظائع في مقابل شيءٍ يسير، وخوفٌ من الخروج، والذي يفاجئ الجميع: **مالٌ في كلّ مكان لا مجاعة.**\n\n**وماذا يعني لك:** ليس شيءٌ من هذا للتخويف. وإنما هو لتعرفه إن أدركتَه فلا تظنّ أنّ الدنيا جُنّت وأنك جُننتَ معها. والمعرفةُ هي الفرقُ بين الخوف والهلع.",
    lead: "This is the part that is almost never taught, and the owner of this site asked for it by name. The signs are usually presented as events on a calendar. But a person does not live through an event — he lives through **a Tuesday**, with a family to feed and a door he is afraid to open.\n\nSo: what the narrations actually say it will be like.",
    leadAr: "وهذا ما لا يكاد يُعلَّم، وقد طُلب بعينه. فالعلاماتُ تُعرض عادةً وقائعَ في تقويم. والإنسانُ لا يعيش واقعةً، وإنما يعيش **يومًا عاديًّا** وله أهلٌ يُطعمهم وبابٌ يخاف أن يفتحه.\n\nفهذا ما تقوله الأخبارُ عن حاله.",
    points: [
      { en: "**Violence without a reason attached to it.** Not war between two sides with a cause you can name — killing where the killer himself could not tell you why. That is the definition he ﷺ gave, and it is what makes it unbearable in a way ordinary danger is not: there is nothing to reason with and no side to be on.",
        ar: "**عنفٌ لا سببَ معه.** لا حربَ بين طرفين لها علّةٌ تُسمّى، وإنما قتلٌ لا يستطيع القاتلُ نفسُه أن يخبرك لِمَ. وهذا حدُّه الذي حدّه ﷺ، وبه صار لا يُطاق على وجهٍ لا يبلغه الخطرُ المعتاد: فليس ثمّ من يُحاجّ، ولا جهةٌ تكون معها." },
      { en: "**The law thinning out before it disappears.** The narrations describe authority handed to men unfit for it long before they describe lawlessness. Things do not collapse in a day; they are administered badly for a long time first.",
        ar: "**ترقُّقُ القانون قبل زواله.** فالأخبارُ تصف توسيدَ الأمر إلى غير أهله قبل أن تصف انعدامَ الحكم بزمان. فالأمورُ لا تسقط في يوم، وإنما تُساس سياسةً سيّئةً دهرًا أوّلًا." },
      { en: "**Ordinary people doing things they would once have found unthinkable — over very little.** The gold on the riverbed is the clearest case: men who know the odds are ninety-nine in a hundred, going in anyway, each certain he is the exception.",
        ar: "**عامّةُ الناس يصنعون ما كانوا يستفظعونه — في الشيء اليسير.** وذهبُ النهر أبينُ مثال: رجالٌ يعلمون أنّ الهلاك تسعةٌ وتسعون من مئة ويُقدمون، كلُّ واحدٍ موقنٌ أنه المستثنى." },
      { en: "**Fear of the door.** This is real and it is in the texts, not in people's imagination — sitting better than standing, walking better than running, and whoever finds a refuge should take it. Being afraid to go out is not, at that time, a failure of nerve. It is the position you were told to take.",
        ar: "**الخوفُ من الباب.** وهذا ثابتٌ في النصوص لا في أوهام الناس: القاعدُ خيرٌ من القائم، والماشي خيرٌ من الساعي، ومن وجد ملجأً فليعذ به. فالخوفُ من الخروج يومئذٍ ليس ضعفَ نفس، وإنما هو الموضعُ الذي أُمرتَ أن تكون فيه." },
      { en: "**A weight on the soul heavy enough that people envy the dead.** A man passes a grave and says: I wish I were in his place — and the narration is explicit that it is not out of longing for Allah, but out of the sheer severity of living. This is the one to know about in advance, because it is the one that will feel like a personal failure and is not.",
        ar: "**ثِقَلٌ على النفس حتى يُحسَد الموتى.** يمرّ الرجلُ بالقبر فيقول: يا ليتني مكانه — والرواية صريحةٌ أنّه ليس شوقًا إلى الله، بل من شدّة ما هو فيه. وهذا أولى ما يُعلم مقدَّمًا، لأنه الذي سيُشعر صاحبَه أنه عجزٌ منه وليس كذلك." },
      { en: "**And wealth in the middle of it, not poverty.** This is the detail that breaks most people's picture. The chain ends with wealth overflowing until nobody will accept charity. Whatever else is failing, it will not look like a famine on a screen.",
        ar: "**والمالُ في خلال ذلك لا الفقر.** وهذه اللفتةُ تنقض صورةَ أكثر الناس. فالسلسلةُ تنتهي بفيض المال حتى لا يقبل أحدٌ صدقة. فمهما فسد سواه، فلن يكون المشهدُ مجاعةً على شاشة." }
    ]
  },

  /** ------------------------------------------------- hold **/
  hold: {
    title: "How to hold yourself — the mental part, which is the part that breaks first",
    titleAr: "كيف تثبت — والأمرُ النفسيُّ هو أوّلُ ما ينكسر",
    plain: "In plain words: this is the **what to do** box, and it is about your mind, not your body. Six things, and every single one is an instruction that came attached to one of the hadith above — none of it is advice somebody made up.\n\n**1.** Know it in advance, so you recognise it instead of panicking. **2.** Take a refuge and stay out of it — that is a command, not an excuse. **3.** Do not reach for the gold. **4.** Keep working even if it is the last hour. **5.** Be capable and do not be helpless. **6.** Prepare for the Dajjal specifically — Surah Al-Kahf and the refuge in every prayer.\n\n**What it means for you:** you can do all six starting today, and five of the six help you in an ordinary life too. That is the test of whether advice about the end of time is real.",
    plainAr: "بكلامٍ بسيط: هذا هو صندوقُ **ماذا تفعل**، وهو في عقلك لا في بدنك. ستّةُ أمور، وكلُّ واحدٍ منها أمرٌ جاء ملحقًا بحديثٍ ممّا سبق — ليس فيه رأيٌ اخترعه أحد.\n\n**١.** اعلمه مقدَّمًا لتعرفه فلا تُهلَع. **٢.** خذ الملجأ والزمه — وهو أمرٌ لا عذر. **٣.** لا تمدّ يدك إلى الذهب. **٤.** امضِ في العمل ولو كانت الساعة. **٥.** كن قادرًا ولا تعجِز. **٦.** استعِدّ للدجّال بعينه: سورةُ الكهف والاستعاذةُ في كلّ صلاة.\n\n**وماذا يعني لك:** تستطيع الستّةَ جميعًا من اليوم، وخمسةٌ منها تنفعك في حياةٍ عاديّةٍ أيضًا. وهذا هو المحكُّ في صدق أيّ نصيحةٍ عن آخر الزمان.",
    lead: "Not physical strength. The owner asked for this precisely: **strong mentally, so you do not have a breakdown.** Nothing below is invented advice; each line is the instruction attached to one of the narrations above.",
    leadAr: "ليست القوّةَ البدنيّة. وإنما المطلوب: **ثباتُ النفس حتى لا تنهار.** وليس فيما يلي رأيٌ مخترع، بل كلُّ سطرٍ منه هو الأمرُ الملحق بخبرٍ ممّا سبق.",
    points: [
      { en: "**Know it in advance, and half of the shock is gone.** This is the whole reason he ﷺ described any of it. A person who is told beforehand that the killing will be senseless does not conclude, when it comes, that the world has stopped making sense or that he has lost his mind. He recognises it. Recognition is the difference between fear and panic.",
        ar: "**اعلمه مقدَّمًا يذهب نصفُ الفَزَع.** وهذا هو سببُ وصفه ﷺ لشيءٍ منه أصلًا. فمن قيل له من قبلُ إنّ القتلَ سيكون بلا معنى لم ينتهِ عند وقوعه إلى أنّ الدنيا فقدت معناها أو أنه فقد عقله، بل يعرفه. والمعرفةُ هي الفرقُ بين الخوف والهلع." },
      { en: "**Take the refuge — it is a command, not a concession.** «وَمَنْ وَجَدَ مَلْجَأً أَوْ مَعَاذًا فَلْيَعُذْ بِهِ». Protecting your household by staying out of it is not cowardice and needs no apology. Note also the warning in the same hadith: whoever cranes his neck toward a fitnah, it catches him. That includes watching it all day on a screen.",
        ar: "**خذ الملجأ — فهو أمرٌ لا رخصة.** «وَمَنْ وَجَدَ مَلْجَأً أَوْ مَعَاذًا فَلْيَعُذْ بِهِ». فحفظُ أهلك بالبعد ليس جُبنًا ولا يُعتذر منه. وتأمّل التحذيرَ في الحديث نفسه: من يُشرِف لها تستشرِفه. ومنه إدمانُ النظر إليها على الشاشة." },
      { en: "**Do not reach for the gold.** «فَمَنْ حَضَرَهُ فَلَا يَأْخُذْ مِنْهُ شَيْئًا». Learn this now, while it costs nothing, because the narration's own point is that at the time your reasoning will argue against it — every one of the ninety-nine thought he was the one.",
        ar: "**ولا تمدّ يدك إلى الذهب.** «فَمَنْ حَضَرَهُ فَلَا يَأْخُذْ مِنْهُ شَيْئًا». احفظها الآن وهي لا تكلّفك شيئًا، فإنّ مقصود الخبر أنّ عقلك يومئذٍ يخاصمها — وكلُّ واحدٍ من التسعة والتسعين حسب أنه هو." },
      { en: "**Keep working, even if it is the last hour.** «إِنْ قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ فَسِيلَةٌ فَإِنِ اسْتَطَاعَ أَنْ لَا تَقُومَ حَتَّى يَغْرِسَهَا فَلْيَغْرِسْهَا» — and a **fasilah** is a young palm shoot, the slowest-growing thing a man could be holding. There is no reading of that under which despair is the correct response.",
        ar: "**وامضِ في العمل ولو كانت الساعة.** «إِنْ قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ **فَسِيلَةٌ** فَإِنِ اسْتَطَاعَ أَنْ لَا تَقُومَ حَتَّى يَغْرِسَهَا فَلْيَغْرِسْهَا» — و**الفَسِيلة** النخلةُ الصغيرة تُقتلع من أمّها فتُغرس، وهي أبطأُ ما يُثمر ممّا قد يكون في يده. وليس للحديث وجهٌ يكون فيه اليأسُ هو الجواب." },
      { en: "**Be capable, and do not be helpless.** «احْرِصْ عَلَى مَا يَنْفَعُكَ، وَاسْتَعِنْ بِاللَّهِ، وَلَا تَعْجِزْ» — and the first half of that same hadith is that the strong believer is better and more beloved to Allah than the weak believer. Strength here is competence: a trade, a skill, a household that can function.",
        ar: "**وكن قادرًا ولا تعجِز.** «احْرِصْ عَلَى مَا يَنْفَعُكَ، وَاسْتَعِنْ بِاللَّهِ، وَلَا تَعْجِزْ» — وأوّلُ الحديث نفسِه أنّ المؤمن القويّ خيرٌ وأحبُّ إلى الله من المؤمن الضعيف. والقوّةُ هنا الكفاية: صنعةٌ ومهارةٌ وبيتٌ يقوم بأمره." },
      { en: "**And the one thing you were told to prepare for by name is the Dajjal** — the ten verses of Al-Kahf, and the refuge sought from him in every single prayer. Out of everything on this map, that is the item with an actual assignment attached.",
        ar: "**والذي أُمرتَ بالاستعداد له بعينه هو الدجّال** — عشرُ آياتٍ من الكهف، والاستعاذةُ منه في كلّ صلاة. فمن جميع ما في هذه الخريطة، هذا هو البندُ الذي عليه عملٌ مسمّى." }
    ],
    ref: "Sahih al-Bukhari 3601; Sahih al-Bukhari 7119; Sahih Muslim, Hadith 2664, Book of Qadar; Sahih Muslim, Book of Travellers' Prayer, on Al-Kahf; Musnad Ahmad and al-Bukhari's Al-Adab al-Mufrad for the sapling",
    refAr: "صحيح البخاري ٣٦٠١؛ وصحيح البخاري ٧١١٩؛ وصحيح مسلم، حديث ٢٦٦٤، كتاب القدر؛ وصحيح مسلم، كتاب صلاة المسافرين، في الكهف؛ ومسند أحمد و«الأدب المفرد» للبخاري في الفَسِيلة",
    strength: "Sahih throughout, except the sapling hadith which is outside the two Sahihs and authenticated by al-Albani",
    strengthAr: "صحيحٌ كلُّه، إلا حديثَ الفَسِيلة فخارج الصحيحين وصحّحه الألباني"
  },

  /** ------------------------------------------------ closing **/
  closing: {
    title: "So should we start training with swords and arrows?",
    titleAr: "أفنبدأ التدرّبَ على السيف والسهم؟",
    plain: "In plain words: **yes, train — but not for the reason people give.**\n\nThe reason people give is that the end-times hadith mention swords and horses, so the machines must be about to disappear. **No text says that.** The hadith people quote for it is about Ya'juj and Ma'juj's own bows being burned as firewood, which is a completely different claim.\n\nThe real reason is much simpler: **archery and horsemanship were commanded outright, with no mention of the end of time at all.** He ﷺ said good is in the forelocks of horses **until the Day of Resurrection** — so the value of the skill was never tied to whether it is still the winning weapon.\n\n**And the half people drop:** the verse says prepare **whatever you are able**, and when he named the decisive weapon he named the one that won battles in **his** century. He did not give a permanent list.\n\n**What it means for you:** learn to shoot, learn to ride, keep your body strong — it is a sunnah with its own reward. And separately, be good at what actually decides things today. Neither one replaces the other. **And none of this is permission for anyone to arm himself against anybody.**",
    plainAr: "بكلامٍ بسيط: **نعم تدرَّب — ولكن لا للسبب الذي يُقال.**\n\nالسببُ الذي يُقال أنّ أحاديث آخر الزمان تذكر السيوفَ والخيل، فلا بدّ أنّ الآلات ستزول. **وليس في نصٍّ ذلك.** والحديثُ الذي يُستشهد به إنما هو في قِسيّ يأجوجَ ومأجوجَ أنفسِهم تُوقَد حطبًا، وهي دعوى أخرى بالكلّيّة.\n\nوالسببُ الحقيقيُّ أبسطُ من ذلك: **أنّ الرميَ والفروسيّة أُمر بهما ابتداءً، من غير ذكرٍ لآخر الزمان أصلًا.** قال ﷺ إنّ الخير في نواصي الخيل **إلى يوم القيامة** — فلم تُعلَّق قيمةُ المهارة يومًا ببقائها السلاحَ الغالب.\n\n**والشطرُ الذي يسقط:** الآيةُ تقول أعِدّوا **ما استطعتم**، وحين سمّى السلاحَ الحاسم سمّى ما كان يكسب المعارك في **قرنه هو**، ولم يُعطِ قائمةً دائمة.\n\n**وماذا يعني لك:** تعلَّم الرميَ، وتعلَّم الركوب، وأبقِ بدنك قويًّا — سنّةٌ لها أجرُها. وأتقِن — على حِدَة — ما يحسم الأمور اليوم. ولا يُغني أحدُهما عن الآخر. **وليس في هذا كلِّه إذنٌ لأحدٍ أن يتسلّح على أحد.**",
    body: "The owner asked this directly, and it deserves a direct answer rather than a pious one.\n\n**The short answer is: train, yes — but not for the reason people give.**\n\nThe reason usually given is that the end-times narrations mention swords and horses, so the machines must be going away. **No text says that.** Not in the Quran, not in the two Sahihs, not in the four Sunan. The narration people cite for it is about the bows and shields of Ya'juj and Ma'juj being burned as **firewood** for seven years — which is not the same claim at all. The idea that technology is destroyed is an inference somebody drew from the vocabulary, and an inference is not a text.\n\n**The real reason to train is that it was commanded outright, with no reference to the end of time.** He ﷺ climbed the minbar, recited **and prepare against them whatever you are able of power**, and said three times: **أَلَا إِنَّ الْقُوَّةَ الرَّمْيُ.** He said whoever learns archery and then abandons it is not of us. And of horses: **الْخَيْلُ فِي نَوَاصِيهَا الْخَيْرُ إِلَى يَوْمِ الْقِيَامَةِ** — good is in their forelocks **until the Day of Resurrection**. He did not tie the value of the skill to whether it was still the decisive weapon.\n\nSo: learn to shoot, learn to ride, keep your body strong. It is a sunnah with its own reward and it needs no prophecy to justify it.\n\n**And the other half, which is the half that gets dropped.** The same verse says **whatever you are able**, and when he named the decisive capability he named the one that decided battles in **his** century. He did not hand down a permanent list. A community that reads **the power is shooting** as **arrows only** has kept the word and lost the instruction. The fuller argument is on the Golden Age page.\n\n**One caution, and it is not optional.** None of this is a licence for an individual to arm himself against anybody. 8:61 commands peace the moment it is offered; the preparation addressed is a **state's** capacity to protect its people. The Guidance page answers the misuse of these verses in full.",
    bodyAr: "سُئل هذا صراحةً، ويستحقّ جوابًا صريحًا لا جوابًا متورّعًا.\n\n**والجوابُ المختصر: نعم تدرَّب — ولكن لا للعلّة التي تُذكر.**\n\nفالعلّةُ التي تُذكر أنّ أخبار آخر الزمان تذكر السيوفَ والخيل، فلا بدّ أن تزول الآلات. **وليس في نصٍّ ذلك.** لا في القرآن، ولا في الصحيحين، ولا في السنن الأربعة. والخبرُ الذي يُستشهد به إنما هو في قِسيّ يأجوجَ ومأجوجَ وأترستهم تُوقَد **حطبًا** سبع سنين — وليست تلك الدعوى. وكونُ التقنية تُتلف استنباطٌ استنبطه أحدٌ من الألفاظ، **والاستنباطُ ليس نصًّا.**\n\n**وإنما العلّةُ الصحيحة أنه أُمر به ابتداءً، من غير ذكرٍ لآخر الزمان.** صعد ﷺ المنبر فقرأ ﴿وَأَعِدُّوا۟ لَهُم مَّا ٱسْتَطَعْتُم مِّن قُوَّةٍۢ﴾ ثم قال ثلاثًا: **أَلَا إِنَّ الْقُوَّةَ الرَّمْيُ.** وقال: من علم الرمي ثم تركه فليس منّا. وقال في الخيل: **الْخَيْلُ فِي نَوَاصِيهَا الْخَيْرُ إِلَى يَوْمِ الْقِيَامَةِ** — إلى **يوم القيامة**. فلم يعلّق قيمةَ المهارة ببقائها السلاحَ الحاسم.\n\nفتعلَّم الرميَ، وتعلَّم الركوب، وأبقِ بدنك قويًّا. سنّةٌ لها أجرُها ولا تحتاج إلى نبوءةٍ تسوّغها.\n\n**والشطرُ الآخر، وهو الذي يسقط.** فالآيةُ نفسُها ﴿مَّا ٱسْتَطَعْتُم﴾، وحين سمّى القوّةَ الحاسمة سمّى ما كان يحسم المعارك في **قرنه هو**، ولم يُنزِل قائمةً دائمة. والأمّةُ التي تقرأ «إنّ القوّة الرمي» أي السهامَ وحدها قد حفظت اللفظَ وأضاعت الأمر. وتفصيلُ ذلك في صفحة العصر الذهبيّ.\n\n**وتحذيرٌ واحدٌ ليس اختياريًّا.** ليس في هذا كلِّه إذنٌ لأحدٍ أن يتسلّح على أحد. فالآيةُ ﴿وَإِن جَنَحُوا۟ لِلسَّلْمِ فَٱجْنَحْ لَهَا﴾ تأمر بالسلم متى بُذل، والإعدادُ المخاطَبُ به قدرةُ **الدولة** على حماية أهلها. وفي صفحة التوجيه جوابُ ما أُسيء فهمُه من هذه الآيات كاملًا.",
    ref: "Sahih Muslim, Book of Government — Uqbah ibn Amir; Sahih al-Bukhari 2849 — Abdullah ibn Omar; Sunan Ibn Majah 4076 — an-Nawwas ibn Sam'an; Surah Al-Anfal (8:60-61)",
    refAr: "صحيح مسلم، كتاب الإمارة — عن عقبة بن عامر؛ وصحيح البخاري ٢٨٤٩ — عن عبد الله بن عمر؛ وسنن ابن ماجه ٤٠٧٦ — عن النوّاس بن سمعان؛ وسورة الأنفال (٨:٦٠-٦١)",
    strength: "Sahih — Agreed upon and the Quran; Ibn Majah is outside the two Sahihs, authenticated by al-Albani",
    strengthAr: "صحيح — متّفقٌ عليه والقرآن؛ وابنُ ماجه خارج الصحيحين وصحّحه الألباني"
  }
};
