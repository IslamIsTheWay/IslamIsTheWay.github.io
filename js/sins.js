/* ============================================================
   THE MAJOR SINS, NAMED — الكبائر، مسمّاةً بأسمائها
   guidance.html#sins.  Rendered by renderGrouped("sinsBox").

   WHY THIS EXISTS, AND IT IS THE SHARPEST GAP HE HAS FOUND.

   He searched this site for a ruling on TATTOOS and got nothing.
   Not a weak answer — nothing. Measured across 68 questions the
   day he said it: 21 returned nothing at all, 27 returned the
   generic scored fallback, and several of the "answers" were
   wrong in a way that matters:

     شهادة الزور  (false testimony)  -> the SHAHADA, the pillar
     نصيب البنت من الميراث           -> the section on QADAR
     is a tattoo haram               -> the misconceptions page

   His instruction, and it is the rule this file is built on:

     "not just for this situation... I want you to put other
      situations and make sure that other situations don't come
      out in the same output. Make sure that such critical points
      and such important sins that we should avoid are mentioned
      BY NAME."

   So every sin here has its OWN card, its OWN answer and its OWN
   search route. Nothing falls through to a generic page.

   AND EVERY CARD EXPLAINS, because he asked for that too:

     "some hadiths are hard to understand based on just the words
      because it is using old Arabic words... make sure that
      there's at least a short explanation. And an example."

   So `plain` says what the hadith MEANS in ordinary words, and
   `example` gives a concrete case — the wet grain under the dry,
   the man who sits up to repeat himself, the nice shoes that are
   not arrogance. A hadith quoted without either is a hadith most
   readers cannot use.

   THE SECTION MUST NOT END IN FEAR. A list of sins with no door
   at the end produces despair, and a person in despair reforms
   nothing. So it closes on 39:53 and on what a major sin is NOT
   — this is not a complete list, and a list is not a court.

   WHAT IS DELIBERATELY NOT REPEATED HERE. Shirk is at
   #bw-shirk, riba at #bh-earning, the orphan's wealth at
   #sd-self, alcohol and drugs at #bh-drink, envy at #hs-near,
   the gaze at #mo-gaze. Each is named in sn-mubiqat and linked,
   never rewritten.

   Every proof was read out of the record before it was quoted:
   al-Bukhari 2654, 2766, 4550, 5885, 5933, 5948, 5976, 5984,
   6094; Muslim's Books of Faith, Virtue, Musaqah and Greetings
   (cited BY BOOK, never by number — the machine editions number
   Muslim sequentially); at-Tirmidhi 1337 with his own grading.
   Verses from this site's own js/quran-text.js.
   ============================================================ */

const SINS = {
  title: "The major sins, named one by one",
  titleAr: "الكبائر، مسمّاةً واحدةً واحدة",
  intro: "Most people know the word kabirah and could not list five of them. This section names them — each with what it actually means in ordinary words, a concrete example, and the text it comes from. Nothing here is meant to frighten anybody: the last two cards are the door out, and they are the point of the rest.",
  introAr: "أكثرُ الناس يعرفون لفظ «الكبيرة» ولا يُحصون منها خمسًا. وهذا القسمُ يسمّيها: لكلِّ واحدةٍ معناها بكلامٍ عاديّ، ومثالٌ واقع، والنصُّ الذي جاءت منه. وليس في هذا تخويفٌ لأحد؛ فالبطاقتان الأخيرتان هما الباب، وهما المقصودُ ممّا قبلهما.",

  groups: [
    {
      id: "sg-seven", icon: "⛔",
      title: "The seven he ﷺ named together",
      titleAr: "السبعُ التي جمعها ﷺ",
      lead: "One hadith lists seven and calls them the destroyers. Three of the seven already have their own sections on this page and are linked rather than repeated.",
      leadAr: "حديثٌ واحد يعدّ سبعًا ويسمّيها المُوبقات. وثلاثٌ منها لها أقسامُها في هذه الصفحة، فأُحيل إليها ولم تُعَد.",
      items: [
        {
          id: "sn-mubiqat", icon: "7️⃣",
          title: "The seven destroyers — the list, in his own words",
          titleAr: "الموبقاتُ السبع — العدُّ بلفظه ﷺ",
          plain: "\"Mubiqat\" means the things that destroy a man — the word comes from ruin, not from disapproval. He ﷺ named seven and the Companions asked him to list them, so the list is his, not a scholar's summary.\n\nThey are: associating anything with Allah; magic; killing a soul Allah forbade except by right; consuming interest; consuming an orphan's property; running away on the day of battle; and accusing chaste, believing, unaware women of adultery.",
          plainAr: "«الموبقات» هي المُهلكات — واللفظ من الهلاك لا من مجرّد الكراهة. عدّ ﷺ سبعًا، وسأله الصحابةُ أن يسمّيها، فالعدُّ عدُّه هو لا تلخيصُ عالم.\n\nوهي: الشركُ بالله، والسحر، وقتلُ النفس التي حرّم الله إلا بالحقّ، وأكلُ الربا، وأكلُ مال اليتيم، والتولّي يوم الزحف، وقذفُ المحصنات المؤمنات الغافلات.",
          example: "Notice what is in the list and what is not. Two of the seven are about MONEY — interest, and an orphan's inheritance. One is about a WORD — accusing a woman with no proof. People expect a list of major sins to be about wine and adultery; this one is mostly about what you take from other people and what you say about them.",
          exampleAr: "وتأمّل ما في العدّ وما ليس فيه: فاثنتان من السبع في المال — الربا وميراثُ اليتيم — وواحدةٌ في الكلمة: رميُ امرأةٍ بغير بيّنة. ويتوقّع الناسُ أن يكون عدُّ الكبائر في الخمر والزنا، وهذا أكثرُه فيما تأخذه من الناس وما تقوله فيهم.",
          proof: "Avoid the seven destroyers. They said: O Messenger of Allah, what are they? He said: associating others with Allah, magic, killing a soul which Allah has forbidden except by right, consuming interest, consuming the property of an orphan, fleeing on the day of battle, and slandering chaste, believing, unaware women.",
          proofAr: "اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ. قَالُوا: يَا رَسُولَ اللَّهِ وَمَا هُنَّ؟ قَالَ: الشِّرْكُ بِاللَّهِ، وَالسِّحْرُ، وَقَتْلُ النَّفْسِ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ، وَأَكْلُ الرِّبَا، وَأَكْلُ مَالِ الْيَتِيمِ، وَالتَّوَلِّي يَوْمَ الزَّحْفِ، وَقَذْفُ الْمُحْصَنَاتِ الْمُؤْمِنَاتِ الْغَافِلَاتِ",
          ref: "Sahih al-Bukhari, Book of Wills, Hadith 2766",
          refAr: "صحيح البخاري، كتاب الوصايا، حديث ٢٧٦٦",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          note: "Three of the seven are already set out in full elsewhere on this page and are not rewritten here: shirk under The basics, interest under Halal and haram, and an orphan's property under \"Give me an argument that isn't religious\" — where it is the worked example. The other four are the cards that follow.",
          noteAr: "وثلاثٌ من السبع مبسوطةٌ في هذه الصفحة ولم تُعَد هنا: الشركُ في قسم الأساسيات، والربا في الحلال والحرام، ومالُ اليتيم في قسم «هاتِ لي دليلًا من غير الدين» وهو المثالُ المحلول فيه. والأربعُ الباقية هي البطاقاتُ التالية.",
          keys: ["major sins", "biggest sins", "seven deadly sins", "seven destructive sins", "list of major sins", "kabair", "what are the major sins", "worst sins in islam",
                 "الكبائر", "اكبر الكبائر", "الموبقات", "السبع الموبقات", "اعظم الذنوب", "ما هي الكبائر", "اكبر الذنوب", "الذنوب الكبيرة"]
        },
        {
          id: "sn-sihr", icon: "🔮",
          title: "Magic — and the fortune teller you only went to \"for fun\"",
          titleAr: "السحر — والعرّاف الذي ذهبتَ إليه «مزحًا»",
          plain: "Magic is second on the list, straight after shirk, and the reason is that it is a form of it: it asks power from something other than Allah.\n\nBut the card most people need is the smaller one beside it. You do not have to practise anything. Simply GOING to a fortune teller — a card reader, a coffee-cup reader, a phone app that claims to know — and asking, has a stated cost: forty nights of prayer not accepted. And if you BELIEVE what he tells you, the wording elsewhere is heavier still.",
          plainAr: "السحرُ ثانيةُ المذكورات بعد الشرك، وعلّةُ ذلك أنه من جنسه: طلبُ القدرة من غير الله.\n\nولكنّ الذي يحتاجه أكثرُ الناس هو ما دونه. فلستَ محتاجًا إلى أن تعمل شيئًا، وإنما مجرّدُ إتيان العرّاف — قارئِ الورق، وقارئِ الفنجان، وتطبيقٍ في الهاتف يدّعي العلم — وسؤالِه، له ثمنٌ منصوص: أربعون ليلةً لا تُقبل فيها صلاة. فإن صدّقتَه فاللفظُ في موضعٍ آخر أثقل.",
          example: "So the horoscope at the end of a magazine, the app that tells you what your week holds, the woman the family visits when someone is ill — these are not a separate, lighter category. The hadith says \"whoever comes to a fortune teller AND ASKS HIM about anything.\" Reading and asking is the whole action.",
          exampleAr: "فالحظُّ في آخر المجلّة، والتطبيقُ الذي يخبرك بما في أسبوعك، والمرأةُ التي يقصدها الأهلُ إذا مرض أحد — ليست بابًا آخر أخفّ. فاللفظ: «من أتى عرّافًا فسأله عن شيء». والإتيانُ والسؤالُ هو الفعلُ كلُّه.",
          proof: "Whoever comes to a fortune teller and asks him about anything, his prayer will not be accepted for forty nights.",
          proofAr: "مَنْ أَتَى عَرَّافًا فَسَأَلَهُ عَنْ شَيْءٍ لَمْ تُقْبَلْ لَهُ صَلَاةٌ أَرْبَعِينَ لَيْلَةً",
          ref: "Sahih Muslim, Book of Greetings (Kitab as-Salam)",
          refAr: "صحيح مسلم، كتاب السلام",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          note: "\"Not accepted\" here does not mean you stop praying, and it does not mean the prayer must be made up. The scholars explain it as the reward being withheld while the obligation is still discharged — which is a warning about what the visit costs you, not a permission to skip the forty days.",
          noteAr: "وقولُه «لم تُقبل» ليس معناه أن تدع الصلاة، ولا أنها تُقضى. وإنما فسّره أهلُ العلم بحرمان الثواب مع سقوط الفرض — فهو تحذيرٌ ممّا تكلّفه تلك الزيارة، لا إذنٌ في ترك الأربعين.",
          keys: ["magic", "black magic", "sihr", "witchcraft", "fortune teller", "fortune telling", "horoscope", "astrology", "psychic", "tarot", "coffee cup reading", "is magic haram", "spell",
                 "السحر", "سحر", "الشعوذة", "العراف", "عراف", "الكهانة", "قراءة الفنجان", "قراءة الكف", "الابراج", "برجي", "حظي اليوم", "المشعوذ", "حكم السحر",
                 "read my horoscope", "check my star sign", "the app told me", "she reads the cup", "اقرا برجي", "شفت الابراج", "التطبيق قال لي", "تقرا الفنجان"]
        },
        {
          id: "sn-qatl", icon: "🩸",
          title: "Killing a soul — and how wide the Quran draws the circle",
          titleAr: "قتلُ النفس — وسَعَةُ الدائرة في القرآن",
          plain: "Third on the list, and the Quran states the weight of it in a way no other scripture does: whoever kills one soul, unless for a soul or for corruption in the land, it is as though he killed all of mankind.\n\nOne life is placed on the scale against every life there is. Which is also why the second half of the verse is there — and whoever saves one life, it is as though he saved all of mankind.",
          plainAr: "الثالثةُ في العدّ، وقد قرّر القرآنُ ثِقَلها تقريرًا لا نظير له: أنّ من قتل نفسًا بغير نفسٍ أو فسادٍ في الأرض فكأنما قتل الناس جميعًا.\n\nفوُضعت نفسٌ واحدة في الميزان بإزاء الأنفس كلِّها. ولذلك جاء شطرُ الآية الآخر: ﴿وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا ٱلنَّاسَ جَمِيعًۭا﴾.",
          example: "And the circle includes yourself. Taking your own life is inside this ruling, not outside it — 4:29 forbids consuming wealth unjustly and then adds, in the same breath, \"and do not kill yourselves; indeed Allah is Merciful to you.\" The verse ends on His mercy, which is not an accident. If that is where you are right now, the section at the top of this page is written for you and it asks you to tell a person today.",
          exampleAr: "والدائرةُ تشملك أنت: فقتلُ المرء نفسَه داخلٌ في هذا لا خارجٌ عنه — نهت آيةُ النساء عن أكل المال بالباطل ثم أتبعت في نفس النَّفَس: ﴿وَلَا تَقْتُلُوٓا۟ أَنفُسَكُمْ ۚ إِنَّ ٱللَّهَ كَانَ بِكُمْ رَحِيمًۭا﴾. وخُتمت برحمته، وليس ذلك اتفاقًا. فإن كنتَ في هذا الموضع الآن فالقسمُ في أعلى الصفحة مكتوبٌ لك، وهو يسألك أن تخبر إنسانًا اليوم.",
          proof: "Whoever kills a soul unless for a soul or for corruption in the land - it is as if he had slain mankind entirely. And whoever saves one - it is as if he had saved mankind entirely.",
          proofAr: "مَن قَتَلَ نَفْسًۢا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍۢ فِى ٱلْأَرْضِ فَكَأَنَّمَا قَتَلَ ٱلنَّاسَ جَمِيعًۭا وَمَنْ أَحْيَاهَا فَكَأَنَّمَآ أَحْيَا ٱلنَّاسَ جَمِيعًۭا",
          ref: "Surah Al-Ma'idah (5:32)",
          refAr: "سورة المائدة (٥:٣٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["killing", "murder", "taking a life", "is killing haram", "suicide", "kill myself", "end my life", "manslaughter", "abortion",
                 "القتل", "قتل النفس", "جريمة قتل", "الانتحار", "انهي حياتي", "اقتل نفسي", "حكم القتل"]
        },
        {
          id: "sn-qadhf", icon: "🗯️",
          title: "Accusing a woman of adultery without four witnesses",
          titleAr: "قذفُ المحصنة بغير أربعة شهداء",
          plain: "The seventh destroyer, and the one people commit most casually. It is not only a formal accusation in a court — it is the sentence said in a sitting room about a woman who is not there.\n\nAnd the Quran attaches a penalty that is almost unheard of: eighty lashes, and your testimony is never accepted again, for life. The accuser is punished, not investigated. Because a reputation, once taken from a woman, cannot be given back.",
          plainAr: "السابعةُ من المُوبقات، وهي أكثرُها وقوعًا على وجه الاستخفاف. وليست هي الدعوى في محكمةٍ فحسب، وإنما هي الجملةُ تُقال في مجلسٍ عن امرأةٍ ليست حاضرة.\n\nوقد علّق القرآنُ بها عقوبةً لا نظير لها: ثمانون جلدة، ثم لا تُقبل له شهادةٌ أبدًا ما بقي. فيُعاقَب القاذفُ ولا يُحقَّق معه؛ لأنّ العِرض إذا سُلب من امرأةٍ لم يُردّ.",
          example: "Four witnesses to the act itself is a bar so high that it is, in practice, unreachable — and that is the design. The ruling is not built to convict women. It is built to make the accusation almost impossible to make, and expensive for whoever makes it anyway.",
          exampleAr: "وأربعةُ شهودٍ على نفس الفعل حدٌّ من العلوّ بحيث لا يكاد يُبلغ عمليًّا — وذلك هو المقصود. فليس الحكمُ مبنيًّا على إدانة النساء، وإنما هو مبنيٌّ على أن تكون التهمةُ متعذّرةً، وباهظةً على من تجرّأ عليها.",
          proof: "And those who accuse chaste women and then do not produce four witnesses - lash them with eighty lashes and do not accept from them testimony ever after. And those are the defiantly disobedient.",
          proofAr: "وَٱلَّذِينَ يَرْمُونَ ٱلْمُحْصَنَٰتِ ثُمَّ لَمْ يَأْتُوا۟ بِأَرْبَعَةِ شُهَدَآءَ فَٱجْلِدُوهُمْ ثَمَٰنِينَ جَلْدَةًۭ وَلَا تَقْبَلُوا۟ لَهُمْ شَهَٰدَةً أَبَدًۭا ۚ وَأُو۟لَٰٓئِكَ هُمُ ٱلْفَٰسِقُونَ",
          ref: "Surah An-Nur (24:4)",
          refAr: "سورة النور (٢٤:٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "Indeed, those who like that immorality should be spread among those who have believed will have a painful punishment in this world and the Hereafter.",
          extraProofAr: "إِنَّ ٱلَّذِينَ يُحِبُّونَ أَن تَشِيعَ ٱلْفَٰحِشَةُ فِى ٱلَّذِينَ ءَامَنُوا۟ لَهُمْ عَذَابٌ أَلِيمٌۭ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ",
          extraRef: "Surah An-Nur (24:19)",
          extraRefAr: "سورة النور (٢٤:١٩)",
          note: "24:19 widens it past the person who invented the story to everyone who enjoyed passing it on. \"Those who LIKE that it should spread\" — not those who started it. Forwarding a message counts.",
          noteAr: "وآيةُ ﴿يُحِبُّونَ أَن تَشِيعَ﴾ توسّع الأمر من المخترع للخبر إلى كلِّ من طاب له نقلُه. فهي في «الذين يحبّون أن تشيع» لا في الذين ابتدأوها. وإعادةُ إرسال الرسالة داخلةٌ في هذا.",
          keys: ["accusing a woman", "slander", "qadhf", "false accusation", "reputation", "spreading rumours", "rumors about her", "four witnesses", "defamation",
                 "القذف", "قذف المحصنات", "اتهام امراه", "الافتراء", "السمعة", "نشر الاشاعات", "اربعة شهود", "التشهير"]
        }
      ]
    },

    {
      id: "sg-tongue", icon: "👅",
      title: "The tongue — where most people's record is actually made",
      titleAr: "اللسان — وفيه تُكتب صحيفةُ أكثر الناس",
      lead: "Five sins that cost nothing to commit, leave no evidence, and are done in company.",
      leadAr: "خمسُ خصالٍ لا تكلّف شيئًا، ولا تترك أثرًا، وتُقترف في مجلس.",
      items: [
        {
          id: "sn-gheebah", icon: "🗣️",
          title: "Backbiting — and the answer to \"but it's true\"",
          titleAr: "الغيبة — وجوابُ «لكنّه صِدق»",
          plain: "He ﷺ defined it himself rather than leaving it to be argued over: \"Do you know what backbiting is? Mentioning your brother with what he dislikes.\"\n\nThen somebody asked the question everyone asks: what if it is true? And the answer closes the door completely — if it is in him you have backbitten him, and if it is not in him you have slandered him. There is no third option where you are safe.",
          plainAr: "حدّها ﷺ بنفسه ولم يدعها للنزاع: «أتدرون ما الغيبة؟ ذكرُك أخاك بما يكره».\n\nثم سأل سائلٌ ما يسأله كلُّ أحد: فإن كان فيه ما أقول؟ فأغلق الجوابُ الباب: «إن كان فيه ما تقول فقد اغتبتَه، وإن لم يكن فيه فقد بهتَّه». وليس ثَمَّ وجهٌ ثالث تسلم فيه.",
          example: "Which means the usual defence is the definition of the sin, not an escape from it. \"I'm not lying, he really does do that\" is precisely the case the hadith calls backbiting. The lie is a different and worse charge.\n\nAnd the Quran's image is deliberately physical: would one of you like to eat the flesh of his dead brother? You would hate it. Said about a sentence in a conversation.",
          exampleAr: "فالعذرُ المعتاد هو حدُّ الذنب لا المخرجُ منه: فقولك «لستُ كاذبًا، هو يفعل ذلك حقًّا» هو بعينه ما سمّاه الحديثُ غيبة. وأمّا الكذبُ فتهمةٌ أخرى أثقل.\n\nومَثَلُ القرآن مقصودٌ في حسّيّته: ﴿أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ﴾. قيل هذا في جملةٍ تُقال في حديث.",
          proof: "Do you know what backbiting is? They said: Allah and His Messenger know best. He said: mentioning your brother with what he dislikes. It was said: and if what I say of him is true? He said: if what you say is in him you have backbitten him, and if it is not in him you have slandered him.",
          proofAr: "أَتَدْرُونَ مَا الْغِيبَةُ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ. قِيلَ: أَفَرَأَيْتَ إِنْ كَانَ فِي أَخِي مَا أَقُولُ؟ قَالَ: إِنْ كَانَ فِيهِ مَا تَقُولُ فَقَدِ اغْتَبْتَهُ، وَإِنْ لَمْ يَكُنْ فِيهِ فَقَدْ بَهَتَّهُ",
          ref: "Sahih Muslim, Book of Virtue (Kitab al-Birr)",
          refAr: "صحيح مسلم، كتاب البرّ والصلة والآداب",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          extraProof: "And do not spy or backbite each other. Would one of you like to eat the flesh of his brother when dead? You would detest it.",
          extraProofAr: "وَلَا تَجَسَّسُوا۟ وَلَا يَغْتَب بَّعْضُكُم بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًۭا فَكَرِهْتُمُوهُ",
          extraRef: "Surah Al-Hujurat (49:12)",
          extraRefAr: "سورة الحجرات (٤٩:١٢)",
          note: "The scholars do allow it in narrow cases where there is a real need and no other way: warning someone about a business partner or a proposal, seeking a ruling, reporting a wrong to someone who can stop it. Those are exceptions with a purpose attached — not a licence, and not what happens in most sittings.",
          noteAr: "وقد استثنى أهلُ العلم مواضعَ ضيّقةً للحاجة إذا لم يكن عنها بدّ: كتحذير من شريكٍ أو خاطب، والاستفتاء، ورفعِ الظلامة إلى من يقدر على تغييرها. وهذه استثناءاتٌ معلّقةٌ بمقصد، لا إذنٌ عامّ، وليست هي الذي يجري في أكثر المجالس.",
          keys: ["backbiting", "gheebah", "ghibah", "talking behind his back", "talking about people", "is it haram to talk about someone", "but its true", "gossip about someone",
                 "الغيبة", "غيبة", "الكلام عن الناس", "وراء ظهره", "اغتاب", "نتكلم عن الناس", "لكنه صحيح", "الاغتياب",
                 "talking about him", "talk about people", "we were talking about", "everyone talks about", "said something about her", "spoke about him", "بنحكي عنه", "نحكي على الناس", "تكلمنا عنه", "اغتبت", "اغتبته", "حكيت عنه", "قلت عنه"]
        },
        {
          id: "sn-nameemah", icon: "📩",
          title: "Carrying tales between people",
          titleAr: "النميمة — نقلُ الكلام بين الناس",
          plain: "Nameemah is not backbiting. Backbiting is speaking ill of someone absent; nameemah is taking what one person said and carrying it to another in order to set them against each other.\n\nThe wording is short and it is severe: no tale-carrier will enter Paradise.",
          plainAr: "النميمةُ غيرُ الغيبة: فالغيبةُ ذكرُ الغائب بما يكره، والنميمةُ نقلُ كلام أحدهم إلى الآخر لِيُفسد ما بينهما.\n\nواللفظُ قصيرٌ شديد: «لا يدخل الجنّةَ نمّام».",
          example: "The concrete case is a phone call that begins \"I don't want to cause problems, but you should know what he said about you.\" Nothing in it is invented. Nothing in it is even exaggerated. And a friendship of fifteen years ends that evening.\n\nThat is the whole sin: the words were true, and moving them was the crime.",
          exampleAr: "والصورةُ الواقعة اتّصالٌ يبدأ بـ«ما أريد أن أفسد شيئًا، ولكن ينبغي أن تعرف ما قاله فيك». وليس فيه شيءٌ مخترع، ولا فيه مبالغة. وتنتهي صحبةُ خمس عشرة سنةً تلك الليلة.\n\nوهذا هو الذنبُ كلُّه: كان الكلامُ صدقًا، وكان نقلُه هو الجناية.",
          proof: "No tale-carrier will enter Paradise.",
          proofAr: "لَا يَدْخُلُ الْجَنَّةَ نَمَّامٌ",
          ref: "Sahih Muslim, Book of Faith (Kitab al-Iman)",
          refAr: "صحيح مسلم، كتاب الإيمان",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "And do not obey every worthless habitual swearer, scorner, going about with malicious gossip.",
          extraProofAr: "وَلَا تُطِعْ كُلَّ حَلَّافٍۢ مَّهِينٍ ۝ هَمَّازٍۢ مَّشَّآءٍۭ بِنَمِيمٍۢ",
          extraRef: "Surah Al-Qalam (68:10-11)",
          extraRefAr: "سورة القلم (٦٨:١٠-١١)",
          keys: ["nameemah", "namima", "tale carrying", "stirring trouble", "he told me what you said", "spreading gossip", "causing problems between people", "two faced",
                 "النميمة", "نميمة", "نقل الكلام", "يفسد بين الناس", "قال لي عنك", "الوشاية", "ذو الوجهين"]
        },
        {
          id: "sn-kadhib", icon: "🎭",
          title: "Lying — and the point at which it stops being a decision",
          titleAr: "الكذب — والحدُّ الذي يزول عنده الاختيار",
          plain: "The hadith does not describe lying as a sin you commit and then stop. It describes it as a road with a destination, and it uses the same shape twice, once for each direction.\n\nTruthfulness leads to righteousness, righteousness leads to Paradise, and a man keeps telling the truth until he is written down with Allah as truthful. Lying leads to wickedness, wickedness leads to the Fire, and a man keeps lying until he is written down as a liar.",
          plainAr: "لم يصف الحديثُ الكذب بأنه ذنبٌ يُفعل ثم يُترك، وإنما وصفه طريقًا له غاية، وأعاد الصورة مرّتين، لكلِّ وجهةٍ مرّة.\n\nفالصدقُ يهدي إلى البرّ، والبرُّ يهدي إلى الجنّة، ولا يزال الرجل يصدُق حتى يُكتب عند الله صدّيقًا. والكذبُ يهدي إلى الفجور، والفجورُ يهدي إلى النار، ولا يزال الرجلُ يكذب حتى يُكتب كذّابًا.",
          example: "The phrase to sit with is \"until he is WRITTEN DOWN as a liar.\" It stops being something he does and becomes something he is. Nobody chooses that day; it arrives after enough small ones — the excuse to a boss, the price inflated a little, the story improved because it was flat.\n\nWhich is also the good news in the first half. The road runs both ways, and it is built out of the same size of step.",
          exampleAr: "والموضعُ الذي يُوقف عنده: «حتى يُكتب عند الله كذّابًا». فينتقل الأمرُ من شيءٍ يفعله إلى شيءٍ هو إيّاه. ولا يختار أحدٌ ذلك اليوم، وإنما يأتي بعد صغائرَ كثيرة: عذرٌ لصاحب العمل، وثمنٌ يُزاد قليلًا، وحكايةٌ تُحسَّن لأنها جاءت باردة.\n\nوفي الشطر الأوّل البشارة: فالطريقُ يجري في الوجهتين، وهو مبنيٌّ من خطوةٍ بهذا الحجم نفسه.",
          proof: "Truthfulness leads to righteousness, and righteousness leads to Paradise. A man keeps telling the truth until he is written with Allah as a truthful one. And lying leads to wickedness, and wickedness leads to the Fire. A man keeps lying until he is written with Allah as a liar.",
          proofAr: "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ، وَإِنَّ الرَّجُلَ لَيَصْدُقُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ صِدِّيقًا. وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ، وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ، وَإِنَّ الرَّجُلَ لَيَكْذِبُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا",
          ref: "Sahih al-Bukhari, Book of Good Manners, Hadith 6094",
          refAr: "صحيح البخاري، كتاب الأدب، حديث ٦٠٩٤",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["lying", "lies", "is lying haram", "white lie", "telling lies", "liar", "dishonest", "small lie", "can i lie",
                 "الكذب", "كذب", "الكذبة البيضاء", "حكم الكذب", "كذاب", "اكذب", "الصدق"]
        },
        {
          id: "sn-zoor", icon: "⚖️",
          title: "False testimony — and the only time he ﷺ sat up to say something",
          titleAr: "شهادةُ الزور — والموضعُ الذي جلس فيه ﷺ ليقولها",
          plain: "He ﷺ asked three times: shall I not tell you the greatest of the major sins? They said yes. He said: associating others with Allah, and disobedience to parents.\n\nAnd then — and this is the part narrators kept in — he had been reclining, and he SAT UP, and said: and false speech, and false testimony. And he repeated it until they wished he would stop.",
          plainAr: "قال ﷺ ثلاثًا: «ألا أنبّئكم بأكبر الكبائر؟» قالوا: بلى يا رسول الله. قال: «الإشراكُ بالله، وعقوقُ الوالدين».\n\nثم — وهذا الذي حفظه الرواة — كان متّكئًا فجلس، فقال: «ألا وقولُ الزور وشهادةُ الزور»، فما زال يكرّرها حتى قالوا: ليته سكت.",
          example: "That detail is the explanation, and it is why the card exists. A man reclining who sits upright before speaking is doing what any of us does when the next sentence matters more than the last one. The Companions recorded his POSTURE because it told them how heavily he meant it.\n\nAnd notice how ordinary the sin is. Not perjury in a courtroom — \"false speech\" covers signing what you did not check, backing a relative's version because he is a relative, and letting a lie stand in a dispute because correcting it is awkward.",
          exampleAr: "وهذه القرينةُ هي البيان، ولأجلها كُتبت هذه البطاقة. فالمتّكئُ إذا استوى جالسًا قبل أن يتكلّم فإنما يصنع ما يصنعه أحدُنا إذا كانت الجملةُ التالية أثقل ممّا قبلها. وقد نقل الصحابةُ هيئتَه لأنها دلّتهم على مقدار ما أراد.\n\nوتأمّل كم هو عاديّ: فليس هو الشهادةَ الكاذبة أمام قاضٍ فحسب — بل «قولُ الزور» يشمل أن توقّع على ما لم تتحقّق منه، وأن تؤيّد رواية قريبك لأنه قريبك، وأن تدع الكذبةَ قائمةً في خصومةٍ لأنّ تصحيحها ثقيل.",
          proof: "Shall I not inform you of the greatest of the major sins? They said: yes, O Messenger of Allah. He said: associating others with Allah, and disobedience to parents. And he had been reclining, so he sat up and said: and false speech and false testimony — and he kept repeating it until we wished he would be silent.",
          proofAr: "أَلَا أُنَبِّئُكُمْ بِأَكْبَرِ الْكَبَائِرِ؟ قُلْنَا: بَلَى يَا رَسُولَ اللَّهِ. قَالَ: الْإِشْرَاكُ بِاللَّهِ، وَعُقُوقُ الْوَالِدَيْنِ. وَكَانَ مُتَّكِئًا فَجَلَسَ فَقَالَ: أَلَا وَقَوْلُ الزُّورِ وَشَهَادَةُ الزُّورِ — فَمَا زَالَ يَقُولُهَا حَتَّى قُلْتُ: لَا يَسْكُتُ",
          ref: "Sahih al-Bukhari, Book of Witnesses, Hadith 2654; and Book of Good Manners, Hadith 5976",
          refAr: "صحيح البخاري، كتاب الشهادات، حديث ٢٦٥٤؛ وكتاب الأدب، حديث ٥٩٧٦",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["false testimony", "false witness", "perjury", "lying in court", "shahadat al zour", "bearing false witness", "signing something untrue", "backing a lie",
                 "شهادة الزور", "قول الزور", "الشهادة الكاذبة", "اشهد زورا", "الكذب في المحكمة", "التوقيع على باطل"]
        },
        {
          id: "sn-sukhriyah", icon: "😏",
          title: "Mockery and nicknames — the sin of the funny man in the group",
          titleAr: "السخرية والألقاب — ذنبُ الظريف في المجلس",
          plain: "The Quran forbids four things in one verse and they are all done in company, for laughs: ridiculing people, ridiculing women, insulting one another, and calling each other by nicknames.\n\nAnd it gives a reason that stops the argument: \"perhaps they are better than them.\" You are not in a position to know where the person you are laughing at stands with Allah.",
          plainAr: "نهت الآيةُ عن أربعٍ في موضعٍ واحد، وكلُّها تُصنع في مجلسٍ على وجه المزاح: السخريةُ من القوم، وسخريةُ النساء من النساء، واللمزُ، والتنابزُ بالألقاب.\n\nوعلّلت بما يقطع النزاع: ﴿عَسَىٰٓ أَن يَكُونُوا۟ خَيْرًۭا مِّنْهُمْ﴾. فلستَ في موضعٍ تعلم منه منزلةَ من تضحك منه عند الله.",
          example: "The nickname clause is the one to notice, because it is the one every group has. A name given about a stammer, a weight, a village, a father's job — and then used for twenty years, long after anybody remembers it was meant to sting. The man answers to it. That is not consent; that is what he had to do to stay in the room.",
          exampleAr: "وأحقُّ ما يُنتبه له لفظُ الألقاب، لأنه في كلِّ جماعة: لقبٌ يُطلق على لُثغةٍ أو سِمَنٍ أو قريةٍ أو حرفةِ أب، ثم يُستعمل عشرين سنةً بعد أن ينسى الناسُ أنه أُريد به الأذى. ويجيب الرجلُ إذا نودي به — وليس ذلك رضًا، وإنما هو ما اضطُرّ إليه ليبقى في المجلس.",
          proof: "O you who have believed, let not a people ridicule another people; perhaps they may be better than them; nor let women ridicule other women; perhaps they may be better than them. And do not insult one another and do not call each other by offensive nicknames.",
          proofAr: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا يَسْخَرْ قَوْمٌۭ مِّن قَوْمٍ عَسَىٰٓ أَن يَكُونُوا۟ خَيْرًۭا مِّنْهُمْ وَلَا نِسَآءٌۭ مِّن نِّسَآءٍ عَسَىٰٓ أَن يَكُنَّ خَيْرًۭا مِّنْهُنَّ ۖ وَلَا تَلْمِزُوٓا۟ أَنفُسَكُمْ وَلَا تَنَابَزُوا۟ بِٱلْأَلْقَٰبِ",
          ref: "Surah Al-Hujurat (49:11)",
          refAr: "سورة الحجرات (٤٩:١١)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["mocking", "making fun of people", "nicknames", "insulting", "jokes at someone", "bullying", "teasing", "laughing at people", "banter",
                 "السخرية", "الاستهزاء", "الالقاب", "التنابز", "الضحك على الناس", "المزاح الجارح", "التنمر", "اللمز"]
        }
      ]
    },

    {
      id: "sg-body", icon: "🖋️",
      title: "Changing what Allah made — tattoos and the rest",
      titleAr: "تغييرُ خلق الله — الوشمُ وما معه",
      lead: "This is the group he searched for and found nothing. One hadith covers most of it, and it gives the reason as well as the ruling.",
      leadAr: "هذا هو البابُ الذي بحث عنه فلم يجد شيئًا. ويجمع أكثرَه حديثٌ واحد، وفيه العلّةُ مع الحكم.",
      items: [
        {
          id: "sn-washm", icon: "💉",
          title: "Tattoos — the ruling, and the reason attached to it",
          titleAr: "الوشم — الحكمُ والعلّةُ معه",
          plain: "The hadith names four things in one breath and then gives the reason for all four: those who tattoo and those who have themselves tattooed, those who pluck the eyebrows, those who file their teeth for beauty — THOSE WHO CHANGE THE CREATION OF ALLAH.\n\nThat last phrase is the ruling's engine. The objection is not to ink, or to wanting to look well. It is to permanently altering the body as though what you were given were a first draft.",
          plainAr: "يعدّ الحديثُ أربعًا في نَفَسٍ واحد ثم يذكر علّةَ الأربع جميعًا: الواشماتُ والمستوشمات، والمتنمّصات، والمتفلّجاتُ للحسن — «المغيّراتِ خلقَ الله».\n\nوهذه الجملةُ الأخيرة هي محرّكُ الحكم. فليس الإنكارُ على الحبر، ولا على إرادة الحُسن، وإنما على تغييرِ البدن تغييرًا لازمًا كأنّ الذي أُعطيتَه مسوّدةٌ أولى.",
          example: "A worked case, because this is where people get stuck. Someone becomes Muslim, or returns, and already has a tattoo. Nothing is owed for what was done before — Islam cuts off what came before it. And removing it is not required if that would mean real harm, pain, cost or scarring; the scholars are broadly agreed on that. What is asked is that it not be added to. A body you cannot undo is not a debt you carry.",
          exampleAr: "وصورةٌ محلولة، فهنا يقف الناسُ: يُسلم رجلٌ أو يتوب وعليه وشمٌ قديم. فليس عليه فيما مضى شيء — والإسلامُ يَجُبّ ما قبله. ولا يلزمه إزالتُه إن كان في ذلك ضررٌ حقيقيّ أو ألمٌ أو كلفةٌ أو تشويه، وعلى هذا عامّةُ أهل العلم. وإنما المطلوبُ ألّا يُزاد عليه. فبدنٌ لا يمكن ردُّه ليس دَينًا تحمله.",
          proof: "Allah has cursed those who tattoo and those who have themselves tattooed, those who pluck eyebrows and those who file their teeth for beauty — those who alter the creation of Allah. [Ibn Mas'ud then said:] Why should I not curse those whom the Messenger of Allah ﷺ cursed, and it is in the Book of Allah?",
          proofAr: "لَعَنَ اللَّهُ الْوَاشِمَاتِ وَالْمُسْتَوْشِمَاتِ، وَالْمُتَنَمِّصَاتِ وَالْمُتَفَلِّجَاتِ لِلْحُسْنِ، الْمُغَيِّرَاتِ خَلْقَ اللَّهِ. مَا لِي لَا أَلْعَنُ مَنْ لَعَنَ رَسُولُ اللَّهِ ﷺ وَهُوَ فِي كِتَابِ اللَّهِ",
          ref: "Sahih al-Bukhari, Book of Dress, Hadith 5948",
          refAr: "صحيح البخاري، كتاب اللباس، حديث ٥٩٤٨",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          note: "Two things the wording settles. It curses the one who DOES it and the one who ASKS for it — the tattooist and the customer both. And Ibn Mas'ud's closing line answers anyone who says this is only a hadith: he says it is in the Book of Allah, pointing to 4:119, where Shaytan's promise is \"and I will command them so they will change the creation of Allah.\"",
          noteAr: "وفي اللفظ أمران: أنه لعن الفاعلةَ والطالبةَ جميعًا — الواشمَ والمستوشم. وأنّ خاتمة كلام ابن مسعود جوابٌ لمن قال إنّ هذا حديثٌ فحسب: فقد قال إنه في كتاب الله، يشير إلى آية النساء ﴿وَلَآمُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ ٱللَّهِ﴾ [٤:١١٩].",
          keys: ["tattoo", "tattoos", "tatoo", "tatoos", "tato", "tatto", "tattos", "tattooing", "is a tattoo haram", "getting a tattoo", "i have a tattoo", "remove my tattoo", "ink", "permanent makeup", "microblading",
                 "الوشم", "وشم", "الوشوم", "وشوم", "حكم الوشم", "التاتو", "تاتو", "الرسم على الجسم", "عندي وشم", "ازالة الوشم", "الوشم حرام", "المستوشمة", "الواشمة",
                 "thinking of getting one", "my son came home with", "on my arm", "cover it up", "بدي اسوي وشم", "ابغى اسوي تاتو", "على ذراعي", "اغطيه"]
        },
        {
          id: "sn-nams", icon: "✂️",
          title: "Eyebrows, hair extensions, and where the line actually falls",
          titleAr: "النمصُ والوصل، وأين يقع الحدُّ حقًّا",
          plain: "The same hadith covers plucking the eyebrows (namas), and a second one covers joining hair — Allah cursed the woman who joins hair and the woman who asks for it. Both are permanent-looking alterations presented as the body's own.\n\nBut the line is not \"any grooming is forbidden.\" That is where people either give up or go too far, so it is worth stating carefully.",
          plainAr: "الحديثُ نفسه يتناول النمص، ويتناول الوصلَ حديثٌ ثانٍ: «لعن الله الواصلة والمستوصلة». وكلاهما تغييرٌ يبدو ثابتًا ويُعرض على أنه من البدن نفسه.\n\nولكنّ الحدَّ ليس «كلُّ تزيّنٍ حرام»، وعند هذا يقع الناسُ بين تركِ الأمر كلِّه وبين التوسّع فيه، فحقُّه أن يُحرَّر.",
          example: "What is agreed: removing hair that is not part of the natural shape — the moustache line on a woman, hair between the brows, hair on the arms and legs — is not namas and nobody has forbidden it. What the hadith addresses is reshaping the brow itself, and joining false hair to your own.\n\nAnd there is a real difference among scholars about a wife doing this for her husband, and about non-permanent things like a wig or a headband that nobody is being deceived by. Where they differ, this page says they differ.",
          exampleAr: "والمتفقُ عليه: أنّ إزالة ما ليس من هيئة الوجه الأصليّة — كشعر الشارب في المرأة، وما بين الحاجبين، وشعرِ الذراعين والساقين — ليس نمصًا ولم يحرّمه أحد. وإنما الحديثُ في تغيير هيئة الحاجب نفسه، وفي وصلِ شعرٍ مستعارٍ بشعرك.\n\nوثَمَّ خلافٌ معتبرٌ في فعل المرأة ذلك لزوجها، وفي غير الثابت كالباروكة والعصابة ممّا لا يقع به تدليس. وحيث اختلفوا قالت هذه الصفحةُ إنهم اختلفوا.",
          proof: "Allah has cursed the woman who joins hair and the woman who asks for it to be joined.",
          proofAr: "لَعَنَ اللَّهُ الْوَاصِلَةَ وَالْمُسْتَوْصِلَةَ",
          ref: "Sahih al-Bukhari, Book of Dress, Hadith 5933 and 5934",
          refAr: "صحيح البخاري، كتاب اللباس، حديث ٥٩٣٣ و٥٩٣٤",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["plucking eyebrows", "eyebrows", "threading", "namas", "shaping my eyebrows", "hair extensions", "wig", "false hair", "is threading haram", "eyebrow tint", "lash extensions",
                 "النمص", "نمص", "الحواجب", "نتف الحاجب", "تنظيف الحواجب", "الوصل", "وصل الشعر", "الباروكة", "الشعر المستعار", "رموش", "حكم النمص"]
        },
        {
          id: "sn-tashabbuh", icon: "👥",
          title: "A man imitating a woman, and a woman imitating a man",
          titleAr: "تشبّهُ الرجال بالنساء والنساء بالرجال",
          plain: "One short narration, and it names both directions, which is the part usually left out when people quote it.\n\nHe ﷺ cursed men who imitate women and women who imitate men. Not one side being warned about the other — the same ruling, stated twice, once in each direction.",
          plainAr: "روايةٌ قصيرة، وفيها الوجهان جميعًا، وهذا هو الذي يُسقط غالبًا عند نقلها.\n\nلعن ﷺ المتشبّهين من الرجال بالنساء، والمتشبّهاتِ من النساء بالرجال. وليس تحذيرًا لطرفٍ من الآخر، وإنما هو حكمٌ واحدٌ قيل مرّتين، لكلِّ جهةٍ مرّة.",
          example: "And the scholars read it as being about deliberate imitation of the other sex in the things a society actually uses to tell them apart — dress, gait, voice, manner — not about every overlap. A colour is not a sex. A woman wearing trousers her culture regards as women's clothing is not what this addresses, and a man in a garment that looks like a robe in one country and a dress in another is not either.\n\nThe question the ruling asks is whether you are trying to be taken for the other, not whether an item is on some list.",
          exampleAr: "وحمله أهلُ العلم على قصد التشبّه بالجنس الآخر فيما تُميَّز به الأجناسُ في عُرف الناس: اللباسِ والمشيةِ والصوتِ والهيئة، لا على كلِّ اشتراك. فاللونُ ليس جنسًا، وامرأةٌ تلبس ما يعدّه عُرفُها لباسَ النساء ليست داخلةً في هذا، ولا رجلٌ في ثوبٍ يُعدّ في بلدٍ رداءً وفي آخرَ فستانًا.\n\nوالسؤالُ الذي يسأله الحكم: أتقصد أن تُحسب من الآخر؟ لا: أهذه القطعةُ في قائمةٍ ما؟",
          proof: "The Messenger of Allah ﷺ cursed men who imitate women and women who imitate men.",
          proofAr: "لَعَنَ رَسُولُ اللَّهِ ﷺ الْمُتَشَبِّهِينَ مِنَ الرِّجَالِ بِالنِّسَاءِ، وَالْمُتَشَبِّهَاتِ مِنَ النِّسَاءِ بِالرِّجَالِ",
          ref: "Sahih al-Bukhari, Book of Dress, Hadith 5885",
          refAr: "صحيح البخاري، كتاب اللباس، حديث ٥٨٨٥",
          strength: "Sahih — narrated by al-Bukhari",
          strengthAr: "صحيح — رواه البخاري",
          keys: ["imitating women", "imitating men", "tashabbuh", "men wearing", "women wearing mens clothes", "effeminate", "cross dressing", "is it haram for a man to wear",
                 "التشبه", "تشبه الرجال بالنساء", "تشبه النساء بالرجال", "لبس الرجال", "لبس النساء", "المتشبهين", "حكم التشبه"]
        }
      ]
    },

    {
      id: "sg-money", icon: "💰",
      title: "Money — where the sin is invisible and the gain is small",
      titleAr: "المال — حيث يخفى الذنب ويقلّ الكسب",
      lead: "Four that a working person meets in an ordinary week.",
      leadAr: "أربعٌ يلقاها العاملُ في أسبوعٍ عاديّ.",
      items: [
        {
          id: "sn-rishwah", icon: "🤝",
          title: "Bribery — and both hands are named",
          titleAr: "الرشوة — وقد سُمّيت اليدان",
          plain: "The narration curses two people, not one: the one who gives and the one who takes. Which answers the excuse everybody in our countries has ready — \"I didn't want to, that is just how things work here.\"\n\nAnd the Quran gets there first, and describes the mechanism exactly: do not consume one another's wealth unjustly, or send it to the authorities so that you may consume a portion of people's wealth in sin, while you know.",
          plainAr: "لعنت الروايةُ اثنين لا واحدًا: الراشيَ والمرتشي. وفي هذا جوابُ العذر المُعدّ في بلادنا: «لم أرد ذلك، ولكن هكذا تجري الأمور عندنا».\n\nوقد سبق القرآنُ إلى ذلك ووصف الآلة وصفًا دقيقًا: ﴿وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَٰطِلِ وَتُدْلُوا۟ بِهَآ إِلَى ٱلْحُكَّامِ لِتَأْكُلُوا۟ فَرِيقًۭا مِّنْ أَمْوَٰلِ ٱلنَّاسِ بِٱلْإِثْمِ وَأَنتُمْ تَعْلَمُونَ﴾.",
          example: "Notice the last three words of the verse: WHILE YOU KNOW. It is not addressed to somebody confused about the ruling. It is addressed to a man who knows exactly what he is doing and has a reason ready.\n\nThe scholars do discuss the case of a man who can obtain a right that is genuinely HIS by no other means, and many hold the sin then falls on the taker alone. That is a narrow exception for a right you already own — not for jumping a queue, winning a contract, or getting a grade.",
          exampleAr: "وتأمّل خاتمة الآية: ﴿وَأَنتُمْ تَعْلَمُونَ﴾. فليس الخطابُ لمن اشتبه عليه الحكم، وإنما هو لرجلٍ يعلم ما يصنع وقد أعدّ له عذرًا.\n\nوقد بحث أهلُ العلم حال من لا يصل إلى حقٍّ هو حقُّه إلا بذلك، وذهب كثيرون إلى أنّ الإثم حينئذٍ على الآخذ وحده. وهذا استثناءٌ ضيّقٌ في حقٍّ تملكه أصلًا — لا في تقدّمٍ على الصفّ، ولا في ظفرٍ بعقد، ولا في درجةٍ في امتحان.",
          proof: "The Messenger of Allah ﷺ cursed the one who gives a bribe and the one who takes it.",
          proofAr: "لَعَنَ رَسُولُ اللَّهِ ﷺ الرَّاشِيَ وَالْمُرْتَشِيَ",
          ref: "Jami' at-Tirmidhi, Chapters on Judgements, Hadith 1337",
          refAr: "جامع الترمذي، أبواب الأحكام، حديث ١٣٣٧",
          strength: "Outside the two Sahihs — narrated by at-Tirmidhi, Abu Dawud and Ibn Majah; at-Tirmidhi graded it hasan sahih",
          strengthAr: "خارج الصحيحين — رواه الترمذي وأبو داود وابن ماجه، وقال الترمذي: حسنٌ صحيح",
          extraProof: "And do not consume one another's wealth unjustly or send it in bribery to the rulers in order that they might aid you to consume a portion of the wealth of the people in sin, while you know.",
          extraProofAr: "وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَٰطِلِ وَتُدْلُوا۟ بِهَآ إِلَى ٱلْحُكَّامِ لِتَأْكُلُوا۟ فَرِيقًۭا مِّنْ أَمْوَٰلِ ٱلنَّاسِ بِٱلْإِثْمِ وَأَنتُمْ تَعْلَمُونَ",
          extraRef: "Surah Al-Baqarah (2:188)",
          extraRefAr: "سورة البقرة (٢:١٨٨)",
          keys: ["bribery", "bribe", "baksheesh", "paying someone under the table", "is a bribe haram", "backhander", "kickback", "wasta", "paying to get it done",
                 "الرشوة", "رشوة", "رشوه", "الراشي", "المرتشي", "اكرامية", "دفعت له", "الواسطة", "حكم الرشوة", "بخشيش",
                 "pay someone to get", "paid to get it done", "papers done", "to speed it up", "had to pay extra", "envelope", "that is how it works here", "المعاملة", "يخلصولي", "دفعت عشان", "اعطيته مبلغ", "تحت الطاولة", "هيك بتمشي الامور"]
        },
        {
          id: "sn-ghish", icon: "🌾",
          title: "Cheating — the wet grain under the dry",
          titleAr: "الغش — والبللُ تحت الطعام",
          plain: "He ﷺ passed a heap of grain in the market and pushed his hand INTO it. His fingers came out wet. He said: what is this, owner of the food? The man said rain caught it. He said: then why did you not put it on TOP of the food so that people could see it? Whoever cheats is not of me.\n\nThat is the whole hadith, and it is a story rather than a rule, which is why it is remembered.",
          plainAr: "مرّ ﷺ على صُبرة طعامٍ في السوق فأدخل يده فيها، فنالت أصابعُه بللًا. فقال: «ما هذا يا صاحب الطعام؟» قال: أصابته السماءُ يا رسول الله. قال: «أفلا جعلتَه فوق الطعام كي يراه الناس؟ من غشّ فليس منّي».\n\nهذا هو الحديثُ كلُّه، وهو حكايةٌ لا قاعدة، ولذلك حُفظ.",
          example: "Three things it establishes at once. That the wet grain was real — the man was not lying, he was arranging. That an omission is a lie: nothing false was said, the bad simply went where it would not be seen. And that the price of it is being told \"not of me\" by the one you follow.\n\nThe modern shapes are the same shape: the fault the seller does not mention, the mileage, the photograph taken from the good angle, the term buried on page nine.",
          exampleAr: "وفيه ثلاثةٌ في وقتٍ واحد: أنّ البلل كان حقًّا — فالرجلُ لم يكذب وإنما رتّب. وأنّ الكتمان كذب: فلم يُقل باطل، وإنما وُضع الرديءُ حيث لا يُرى. وأنّ ثمن ذلك أن يقول لك من تتبعه: «فليس منّي».\n\nوصورُه اليوم هي هذه الصورةُ بعينها: عيبٌ لا يذكره البائع، وعدّادُ سيّارة، وصورةٌ من الزاوية الحسنة، وشرطٌ مدفونٌ في الصفحة التاسعة.",
          proof: "He ﷺ passed by a heap of food and put his hand into it, and his fingers met wetness. He said: what is this, owner of the food? He said: rain fell on it, O Messenger of Allah. He said: then why did you not put it above the food so that people could see it? Whoever cheats is not of me.",
          proofAr: "مَرَّ ﷺ عَلَى صُبْرَةِ طَعَامٍ فَأَدْخَلَ يَدَهُ فِيهَا فَنَالَتْ أَصَابِعُهُ بَلَلًا، فَقَالَ: مَا هَذَا يَا صَاحِبَ الطَّعَامِ؟ قَالَ: أَصَابَتْهُ السَّمَاءُ يَا رَسُولَ اللَّهِ. قَالَ: أَفَلَا جَعَلْتَهُ فَوْقَ الطَّعَامِ كَيْ يَرَاهُ النَّاسُ؟ مَنْ غَشَّ فَلَيْسَ مِنِّي",
          ref: "Sahih Muslim, Book of Faith (Kitab al-Iman)",
          refAr: "صحيح مسلم، كتاب الإيمان",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          keys: ["cheating", "cheating in business", "cheating customers", "hiding a fault", "selling a faulty car", "dishonest trade", "ghish", "scam", "cheating in exams", "exam cheating",
                 "الغش", "غش", "غش في البيع", "كتم العيب", "بيع سيارة معيبة", "الغش في الامتحان", "التدليس", "خداع الزبون",
                 "copied in my exam", "copied in the exam", "cheated in the test", "looked at his paper", "selling a car with a problem", "not telling the buyer", "hiding the damage", "غشيت", "نقلت بالامتحان", "ما قلت للمشتري", "اخفيت العيب", "سيارة فيها عطل"]
        },
        {
          id: "sn-sariqah", icon: "🔓",
          title: "Theft — and the day he ﷺ named his own daughter",
          titleAr: "السرقة — واليومُ الذي سمّى فيه ﷺ ابنتَه",
          plain: "A woman of a noble Makkan family stole. Her people were appalled — not at the theft, at the prospect of the punishment falling on one of THEIRS — so they looked for someone who could ask him ﷺ to let it go. They chose Usama ibn Zayd, whom he loved.\n\nUsama spoke. His face changed colour, and he said: are you interceding in one of the limits set by Allah? Then he stood and addressed the people.",
          plainAr: "سرقت امرأةٌ من بيتٍ شريفٍ بمكّة، فأفزع ذلك قومَها — لا لأجل السرقة، بل لأن يقع الحدُّ على واحدةٍ منهم — فالتمسوا من يكلّم النبيَّ ﷺ في تركها، فاختاروا أسامة بن زيدٍ حِبَّه.\n\nفكلّمه أسامة، فتلوّن وجهُه ﷺ وقال: «أتشفع في حدٍّ من حدود الله؟» ثم قام فخطب الناس.",
          example: "And what he said in that address is the reason this card exists, because it is not really about theft at all.\n\nHe said the nations before them were destroyed by ONE habit: when a noble among them stole they let him go, and when a weak one stole they carried out the punishment on him. Then he swore: by Allah, if Fatimah bint Muhammad stole, I would cut off her hand.\n\nHe named his own daughter. In public. To a crowd that had just watched a powerful family try to buy an exemption. That is the standard, and no verse could have made it as clear as that sentence did.",
          exampleAr: "والذي قاله في تلك الخطبة هو سببُ هذه البطاقة، فإنه ليس في السرقة على الحقيقة.\n\nقال إنّ الذين قبلهم إنما أهلكتهم خصلةٌ واحدة: أنهم كانوا إذا سرق فيهم الشريفُ تركوه، وإذا سرق فيهم الضعيفُ أقاموا عليه الحدّ. ثم أقسم: «وايمُ الله، لو أنّ فاطمة بنت محمدٍ سرقت لقطعتُ يدها».\n\nسمّى ابنته. على المنبر. أمام قومٍ رأوا لتوّهم بيتًا ذا شرفٍ يحاول أن يشتري استثناءً. فهذا هو الميزان، وما كانت آيةٌ لتُبيّنه كما بيّنته تلك الجملة.",
          proof: "O people, those before you were destroyed only because when a noble person among them stole, they left him; and when a weak person among them stole, they carried out the punishment on him. By Allah, if Fatimah the daughter of Muhammad were to steal, I would cut off her hand.",
          proofAr: "أَيُّهَا النَّاسُ، إِنَّمَا أَهْلَكَ الَّذِينَ قَبْلَكُمْ أَنَّهُمْ كَانُوا إِذَا سَرَقَ فِيهِمُ الشَّرِيفُ تَرَكُوهُ، وَإِذَا سَرَقَ فِيهِمُ الضَّعِيفُ أَقَامُوا عَلَيْهِ الْحَدَّ. وَايْمُ اللَّهِ، لَوْ أَنَّ فَاطِمَةَ بِنْتَ مُحَمَّدٍ سَرَقَتْ لَقَطَعْتُ يَدَهَا",
          ref: "Sahih al-Bukhari, Book of Maghazi, Hadith 4304; Sahih Muslim, Book of Legal Punishments",
          refAr: "صحيح البخاري، كتاب المغازي، حديث ٤٣٠٤؛ وصحيح مسلم، كتاب الحدود",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "But whoever repents after his wrongdoing and reforms, indeed Allah will turn to him in forgiveness. Indeed, Allah is Forgiving and Merciful.",
          extraProofAr: "فَمَن تَابَ مِنۢ بَعْدِ ظُلْمِهِۦ وَأَصْلَحَ فَإِنَّ ٱللَّهَ يَتُوبُ عَلَيْهِ ۗ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌ",
          extraRef: "Surah Al-Ma'idah (5:39)",
          extraRefAr: "سورة المائدة (٥:٣٩)",
          note: "Two things people are not told. The hadd has conditions so tight that it was applied rarely — a minimum value, taken from a secured place, no doubt in the evidence, and not in a year of famine, which is why Umar suspended it in one. And 5:39, the verse straight after the penalty, is about repentance: the door is opened in the same passage that closes it. What repentance requires here is what it always requires plus one thing — give the property back.",
          noteAr: "وأمران لا يُذكران للناس: أنّ للحدّ شروطًا من الضيق بحيث قلّ أن يُقام — نصابٌ معلوم، وأخذٌ من حِرز، وانتفاءُ الشبهة، وألّا يكون عام مجاعة، ولذلك أوقفه عمر في عامٍ منها. وأنّ الآية التي تلي العقوبة مباشرةً في التوبة: فالبابُ يُفتح في السياق الذي أُغلق فيه. والتوبةُ هنا هي التوبةُ المعروفة وزيادةٌ واحدة: ردُّ المال.",
          keys: ["stealing", "theft", "stole", "i stole something", "is stealing haram", "shoplifting", "taking without permission", "cutting the hand", "hadd for theft", "embezzlement", "took money from work",
                 "السرقة", "سرقة", "سرقت", "حكم السرقة", "قطع اليد", "حد السرقة", "اخذت بغير اذن", "الاختلاس", "سرقت من الشركة",
                 "took money from work", "took from the till", "took from the cash", "borrowed without asking", "took it from the company", "padding the invoice", "اخذت فلوس من الشغل", "من الصندوق", "من الشركة", "بدون ما اقول", "زودت الفاتورة"]
        },
        {
          id: "sn-ihtikar", icon: "📦",
          title: "Hoarding — holding goods back to make the price rise",
          titleAr: "الاحتكار — حبسُ السلعة حتى يرتفع السعر",
          plain: "Six words: no one hoards except a sinner. The Arabic word for sinner here — khati' — is stronger than \"mistaken\"; it is the word for one who is deliberately at fault.\n\nIhtikar is not owning stock or keeping a warehouse. It is buying up what people need and withholding it from the market so that scarcity lifts the price.",
          plainAr: "أربعُ كلمات: «لا يحتكر إلا خاطئ». و«الخاطئ» في العربية أشدُّ من المخطئ؛ فهو المتعمّد للإثم.\n\nوليس الاحتكارُ أن تملك بضاعةً أو تحفظ مخزنًا، وإنما هو أن تشتريَ ما يحتاجه الناسُ فتحبسَه عن السوق حتى يرفع الشحُّ السعر.",
          example: "Which makes it one of the few sins the Quran and Sunnah treat as a crime against a whole population rather than against one person. The victim is not named because there isn't one — there are thousands, each paying a little more, and none of them able to point at what happened.\n\nMost scholars restrict the ruling to necessities in a market that is actually short, which is the sensible reading: storing your own harvest for winter is not this.",
          exampleAr: "ولذلك كان من قليلٍ من الذنوب التي يعاملها الشرعُ جنايةً على جماعةٍ لا على شخص. ولم يُسمَّ المجنيُّ عليه لأنه ليس واحدًا، وإنما هم ألوف، يدفع كلٌّ منهم زيادةً يسيرة، ولا يستطيع أحدُهم أن يشير إلى ما جرى.\n\nوقصره أكثرُ أهل العلم على أقوات الناس في سوقٍ فيها ضِيقٌ حقيقيّ، وهو الفهمُ المستقيم: فادّخارُ الرجل غلّتَه لشتائه ليس من هذا.",
          proof: "No one hoards except a sinner.",
          proofAr: "لَا يَحْتَكِرُ إِلَّا خَاطِئٌ",
          ref: "Sahih Muslim, Book of Musaqah",
          refAr: "صحيح مسلم، كتاب المساقاة",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          keys: ["hoarding", "monopoly", "ihtikar", "raising prices", "price gouging", "holding back stock", "market manipulation", "crisis profiteering",
                 "الاحتكار", "احتكار", "رفع الاسعار", "حبس البضاعة", "استغلال الازمة", "التلاعب بالسوق", "الغلاء"]
        },
        {
          id: "sn-ghamoos", icon: "🤞",
          title: "The oath sworn to take a man's property",
          titleAr: "اليمين الغموس — الحلفُ لاقتطاع مال امرئ",
          plain: "Swearing by Allah is how a dispute gets settled when there is no other proof — so a false oath is not one sin, it is the destruction of the instrument.\n\nHe ﷺ said: whoever swears an oath in order to take by it the property of a Muslim man, and he is lying in it, will meet Allah while He is angry with him.",
          plainAr: "الحلفُ بالله هو الذي تُقطع به الخصومةُ إذا لم تكن بيّنة — فاليمينُ الكاذبة ليست ذنبًا واحدًا، وإنما هي إتلافُ الآلة.\n\nقال ﷺ: «من حلف على يمين صبرٍ يقتطع بها مال امرئٍ مسلم، هو فيها فاجر، لقي الله وهو عليه غضبان».",
          example: "It is called ghamoos — the submerger — because the scholars say it plunges the one who swears it into sin, and then into the Fire. And it has a feature almost nothing else has: several of them held that it is too great to be expiated by the ordinary expiation for a broken oath. What it needs is repentance and giving the property back.\n\nThe everyday shape is a family dispute over land or an inheritance where one side swears and the other has no papers.",
          exampleAr: "وسمّيت الغموس لأنها — كما قال أهلُ العلم — تغمس صاحبها في الإثم ثم في النار. وفيها ما لا يكاد يكون في غيرها: فذهب جماعةٌ منهم إلى أنها أعظمُ من أن تُكفَّر بكفّارة اليمين المعتادة، وإنما يلزم فيها التوبةُ وردُّ المال.\n\nوصورتُها المعتادة نزاعٌ بين أهلٍ على أرضٍ أو ميراثٍ يحلف فيه أحدُ الطرفين ولا بيّنة للآخر.",
          proof: "Whoever swears an oath in order to seize by it the property of a Muslim man, while he is lying in it, will meet Allah while He is angry with him.",
          proofAr: "مَنْ حَلَفَ عَلَى يَمِينِ صَبْرٍ يَقْتَطِعُ بِهَا مَالَ امْرِئٍ مُسْلِمٍ هُوَ فِيهَا فَاجِرٌ، لَقِيَ اللَّهَ وَهُوَ عَلَيْهِ غَضْبَانُ",
          ref: "Sahih al-Bukhari, Book of Tafsir, Hadith 4550",
          refAr: "صحيح البخاري، كتاب التفسير، حديث ٤٥٥٠",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["false oath", "swearing falsely", "swore by allah", "lying under oath", "ghamoos", "wallahi lie", "land dispute", "inheritance dispute oath",
                 "اليمين الغموس", "الحلف كذبا", "حلفت بالله", "يمين كاذبة", "والله ما اخذت", "نزاع على ارض", "خصومة ميراث"]
        }
      ]
    },

    {
      id: "sg-quiet", icon: "🤐",
      title: "The ones almost nobody counts as sins",
      titleAr: "التي لا يكاد أحدٌ يعدّها ذنوبًا",
      lead: "Every one of these carries a text as heavy as anything above it, and every one of them is normal.",
      leadAr: "لكلِّ واحدةٍ من هذه نصٌّ في ثِقَل ما تقدّم، وكلُّها عاديّة.",
      items: [
        {
          id: "sn-uquq", icon: "👴",
          title: "Disobedience to parents — second on the list, after shirk",
          titleAr: "عقوقُ الوالدين — الثانيةُ بعد الشرك",
          plain: "In the hadith on the greatest major sins it comes SECOND, immediately after associating partners with Allah and before false testimony. Nothing else is placed there.\n\nAnd uquq is not hitting or cursing. The word covers anything that causes them harm or grief — including the things that look like nothing.",
          plainAr: "جاء في حديث أكبر الكبائر ثانيًا، بعد الإشراك بالله مباشرةً وقبل قول الزور. ولم يُوضع في هذا الموضع شيءٌ سواه.\n\nوليس العقوقُ ضربًا ولا سبًّا، وإنما يشمل اللفظُ كلَّ ما يُدخل عليهما أذًى أو حزنًا — وفيه ما يبدو أنه لا شيء.",
          example: "The Quran draws the line at a syllable. It does not say do not shout at them; it says do not say to them \"uff\" — the sound a person makes when they are tired of someone. And it puts that immediately after the command to worship Allah alone, twice, in two different surahs.\n\nThe practical shape is not dramatic: the call not returned, the visit postponed for the third week, the sigh when the same question is asked again, the tone you would never use with a colleague.",
          exampleAr: "وقد وضع القرآنُ الحدَّ عند مقطعٍ واحد: فلم يقل لا تصرخ فيهما، وإنما قال ﴿فَلَا تَقُل لَّهُمَآ أُفٍّۢ﴾ — وهي الكلمةُ التي تُقال عند الضجر من الإنسان. وجعل ذلك بعد الأمر بعبادته وحده مباشرةً، في موضعين من القرآن.\n\nوصورتُها العمليّة ليست شديدة: مكالمةٌ لا تُردّ، وزيارةٌ تُؤجَّل للأسبوع الثالث، وتنهيدةٌ عند إعادة السؤال نفسه، ونبرةٌ لا تستعملها مع زميلٍ في العمل.",
          proof: "Shall I not inform you of the greatest of the major sins? Associating others with Allah, and disobedience to parents...",
          proofAr: "أَلَا أُنَبِّئُكُمْ بِأَكْبَرِ الْكَبَائِرِ؟ الْإِشْرَاكُ بِاللَّهِ، وَعُقُوقُ الْوَالِدَيْنِ...",
          ref: "Sahih al-Bukhari, Book of Witnesses, Hadith 2654",
          refAr: "صحيح البخاري، كتاب الشهادات، حديث ٢٦٥٤",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          note: "And the one limit, because it is asked constantly: obedience is not owed in disobedience to Allah — 31:15 orders a son whose parents push him to shirk to refuse, and in the same breath to accompany them in this world with kindness. Refusing the instruction and keeping the kindness are both commanded, in one verse.",
          noteAr: "وثَمَّ حدٌّ واحدٌ يُسأل عنه كثيرًا: فلا طاعة في معصية الخالق — أمرت آيةُ لقمان الابنَ الذي يُجاهده أبواه على الشرك ألّا يطيعهما، وأمرته في النَّفَس نفسه: ﴿وَصَاحِبْهُمَا فِى ٱلدُّنْيَا مَعْرُوفًۭا﴾. فرَدُّ الأمر وحفظُ الصحبة مأمورٌ بهما جميعًا، في آيةٍ واحدة.",
          keys: ["disobeying parents", "uquq", "my parents", "rude to my mother", "not speaking to my father", "parents rights", "is it a sin to argue with my mother", "my mother is difficult",
                 "عقوق الوالدين", "العقوق", "بر الوالدين", "امي", "ابي", "قاطع اهلي", "اسات لامي", "حق الوالدين", "اعق والدي",
                 "shouted at my mum", "shouted at my mother", "screamed at my dad", "raised my voice at my", "slammed the door on", "ignored my mother", "hung up on my dad", "زعقت على امي", "صرخت على ابوي", "رفعت صوتي على", "سكرت بوجه امي", "ما رديت على ابوي"]
        },
        {
          id: "sn-qatia", icon: "✂️",
          title: "Cutting off a relative",
          titleAr: "قطيعةُ الرحم",
          plain: "Short and absolute: no one who severs ties will enter Paradise. The word in the narration — qati' — means the one who cuts, and the scholars explain it as cutting the ties of kinship.\n\nAnd the definition of joining them is not what people assume. He ﷺ said the one who joins is not the one who returns the same treatment; the one who joins is the one who, when his ties are cut, joins them anyway.",
          plainAr: "قصيرٌ قاطع: «لا يدخل الجنّةَ قاطع». و«القاطع» في الرواية هو القاطعُ للرحم كما فسّره أهلُ العلم.\n\nوحدُّ الوصل ليس ما يظنّه الناس: فقد قال ﷺ إنّ الواصل ليس بالمكافئ، وإنما الواصلُ الذي إذا قُطعت رحمُه وصلها.",
          example: "Which removes the excuse that carries almost every family estrangement: \"I would call, but he never calls me.\" By that definition you are not joining, you are trading — and trading was explicitly excluded.\n\nThis matters most because a cut relationship is normally the SECOND sin. The first was usually the envy or the inheritance or the sentence said at a wedding, and the silence that followed is what gets recorded here.",
          exampleAr: "وبهذا يسقط العذرُ الذي تقوم عليه عامّةُ القطيعة في الأسر: «كنتُ سأتّصل، ولكنه لا يتّصل بي». فأنت على هذا الحدّ لستَ واصلًا وإنما أنت مكافئ — والمكافأةُ مستثناةٌ بالنصّ.\n\nوأهمُّ ما في هذا أنّ القطيعة في الغالب هي الذنبُ الثاني: فالأوّلُ حسدٌ أو ميراثٌ أو جملةٌ قيلت في عُرس، والصمتُ الذي تلاه هو الذي يُكتب هنا.",
          proof: "No one who severs ties of kinship will enter Paradise.",
          proofAr: "لَا يَدْخُلُ الْجَنَّةَ قَاطِعٌ",
          ref: "Sahih al-Bukhari, Book of Good Manners, Hadith 5984",
          refAr: "صحيح البخاري، كتاب الأدب، حديث ٥٩٨٤",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["cutting family ties", "not speaking to my brother", "estranged", "family fallout", "silat al rahim", "qati", "my sister doesnt speak to me", "should i call him first",
                 "قطيعة الرحم", "صلة الرحم", "مقاطع اخي", "خصام العائلة", "لا اكلم اهلي", "الواصل", "هجر الاقارب",
                 "havent spoken to my brother", "haven't spoken to my sister", "not talking to my family", "two years without speaking", "we dont speak anymore", "blocked my brother", "مقاطع اخوي", "ما بحكي مع اختي", "من سنتين ما تكلمنا", "حاظر اخوي", "هاجرت اهلي"]
        },
        {
          id: "sn-kibr", icon: "🪞",
          title: "Arrogance — and it is not liking good shoes",
          titleAr: "الكبر — وليس هو حبَّ النعل الحسنة",
          plain: "He ﷺ said no one with an atom's weight of arrogance in his heart will enter Paradise. A man immediately objected — but a man likes his clothes to be good and his shoes to be good.\n\nAnd the answer is the definition, which is why this hadith is one of the most useful on the page: Allah is beautiful and loves beauty. Arrogance is rejecting the truth and looking down on people.",
          plainAr: "قال ﷺ: «لا يدخل الجنّة من كان في قلبه مثقالُ ذرّةٍ من كِبر». فاعترض رجلٌ من فوره: إنّ الرجل يحبّ أن يكون ثوبُه حسنًا ونعلُه حسنة.\n\nوالجوابُ هو الحدّ، ولذلك كان هذا الحديثُ من أنفع ما في الصفحة: «إنّ الله جميلٌ يحبّ الجمال. الكِبرُ بطرُ الحقّ وغَمْطُ الناس».",
          example: "Two tests, and they are behavioural rather than a feeling.\n\nBatar al-haqq — rejecting the truth: you were shown you were wrong and did not accept it. Not because the evidence was weak, but because accepting it would have cost you something in front of people.\n\nGhamt an-nas — belittling people: the reflex that decides a person's worth from his job, his accent, his clothes, his village.\n\nSo the man with the good shoes is not being warned. The man who cannot say \"you were right\" is.",
          exampleAr: "وفيه اختباران، وهما عملٌ لا وِجدان.\n\nبَطَرُ الحقّ: أن يُبيَّن لك أنك مخطئ فلا تقبل. لا لضعف الدليل، ولكن لأنّ القبول كان سيكلّفك شيئًا أمام الناس.\n\nوغَمْطُ الناس: الردُّ الذي يقدّر قيمة الإنسان من عمله ولهجته ولباسه وقريته.\n\nفصاحبُ النعل الحسنة ليس هو المُحذَّر، وإنما المحذَّرُ من لا يستطيع أن يقول: «كنتَ على حقّ».",
          proof: "No one who has an atom's weight of arrogance in his heart will enter Paradise. A man said: a man likes his clothing to be good and his shoes to be good. He said: Allah is beautiful and loves beauty. Arrogance is rejecting the truth and belittling people.",
          proofAr: "لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ. قَالَ رَجُلٌ: إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنَةً. قَالَ: إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ، الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ",
          ref: "Sahih Muslim, Book of Faith (Kitab al-Iman)",
          refAr: "صحيح مسلم، كتاب الإيمان",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          extraProof: "And do not turn your cheek in contempt toward people and do not walk through the earth exultantly. Indeed, Allah does not like everyone self-deluded and boastful.",
          extraProofAr: "وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِى ٱلْأَرْضِ مَرَحًا ۖ إِنَّ ٱللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍۢ فَخُورٍۢ",
          extraRef: "Surah Luqman (31:18)",
          extraRefAr: "سورة لقمان (٣١:١٨)",
          keys: ["arrogance", "pride", "kibr", "looking down on people", "i cant admit im wrong", "showing off", "proud", "condescending", "class snobbery",
                 "الكبر", "الكبرياء", "التكبر", "احتقار الناس", "لا اعترف بخطئي", "الغرور", "استعلاء", "بطر الحق",
                 "cant say sorry", "cant admit", "admit im wrong", "never apologises", "never apologizes", "looks down on", "thinks hes better than", "too proud to", "wont back down", "ما اقدر اعتذر", "ما اعترف بغلطي", "غلطان", "يتعالى", "يحتقر", "يشوف نفسه", "ما بيتراجع"]
        },
        {
          id: "sn-salah", icon: "🕌",
          title: "Leaving the prayer — the heaviest wording in this whole section",
          titleAr: "تركُ الصلاة — أثقلُ لفظٍ في هذا القسم كلِّه",
          plain: "Between a man and shirk and kufr is the abandonment of prayer. That is the wording, and it is in Muslim.\n\nIt is the heaviest thing said about any omission in this section, and it is worth being exact about what the scholars did and did not conclude from it.",
          plainAr: "«بين الرجل وبين الشرك والكفر تركُ الصلاة». هذا هو اللفظ، وهو في صحيح مسلم.\n\nوهو أثقلُ ما قيل في تركٍ في هذا القسم، وحقُّه أن يُحرَّر ما استنبطه منه أهلُ العلم وما لم يستنبطوه.",
          example: "They differed, and the difference is old and real. Some held that abandoning prayer entirely, out of denial or rejection, takes a person out of Islam. Others held that the one who leaves it out of laziness while still believing it is obligatory has committed a grave major sin but remains a Muslim.\n\nThis site does not settle that, and it does not need to — because both positions produce the same instruction for the person actually asking. Pray. Start with the next one, not with the years behind you.\n\nAnd if there are years behind you, the answer is not to calculate them into paralysis. Ask someone qualified what your case requires, and begin praying today while you ask.",
          exampleAr: "وقد اختلفوا، والخلافُ قديمٌ معتبر: فذهب قومٌ إلى أنّ تركها بالكلّيّة جحودًا أو استكبارًا مُخرجٌ من الملّة، وذهب آخرون إلى أنّ تاركها تكاسلًا مع إقراره بوجوبها مرتكبٌ لكبيرةٍ عظيمة وهو مسلم.\n\nولا يفصل هذا الموقعُ في ذلك، ولا يحتاج إليه — فإنّ القولين يُنتجان للسائل أمرًا واحدًا: صلِّ. ابدأ بالتي تليك، لا بالسنين التي خلفك.\n\nفإن كانت خلفك سنون فليس الجوابُ أن تحسبها حتى تُقعدك. اسأل أهل العلم عمّا يلزم في حالك، وابدأ الصلاة اليوم وأنت تسأل.",
          proof: "Between a man and shirk and kufr is the abandonment of prayer.",
          proofAr: "بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلَاةِ",
          ref: "Sahih Muslim, Book of Faith (Kitab al-Iman)",
          refAr: "صحيح مسلم، كتاب الإيمان",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          link: "#pr-years",
          linkEn: "And what to do about the years behind you →",
          linkAr: "وما يُصنع في السنين التي خلفك ←",
          keys: ["missing prayer", "not praying", "i dont pray", "left the prayer", "abandoning salah", "is not praying kufr",
                 "ترك الصلاة", "لا اصلي", "تارك الصلاة", "حكم تارك الصلاة",
                 "havent prayed", "haven't prayed in", "stopped praying", "gave up praying", "dont pray anymore", "came back to prayer", "start praying again", "ما اصلي", "صار لي سنين", "تركت الصلاة من", "بطلت اصلي", "ارجع للصلاة", "ابدا اصلي"]
        },
        {
          id: "sn-zina", icon: "🚫",
          title: "Zina — and why the Quran forbids the road and not just the destination",
          titleAr: "الزنا — ولماذا حرّم القرآنُ الطريقَ لا الغايةَ وحدها",
          plain: "The verse is three words long in Arabic and it does not say \"do not commit zina.\" It says DO NOT APPROACH it.\n\nThat difference is the entire fiqh of this subject. A prohibition on the act would leave everything before it permitted. A prohibition on approaching it closes the road: the private conversation, the meeting nobody knows about, the screen at two in the morning.",
          plainAr: "الآيةُ ثلاثُ كلماتٍ في العربية، وليس فيها «لا تزنوا»، وإنما فيها ﴿وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ﴾.\n\nوفي هذا الفرق فقهُ الباب كلِّه: فتحريمُ الفعل يترك ما قبله مباحًا، وتحريمُ القُربان يقطع الطريق: المحادثةَ الخاصّة، واللقاءَ الذي لا يعلمه أحد، والشاشةَ في الثانية بعد منتصف الليل.",
          example: "Which is where pornography sits, and it is worth saying plainly because people look for it and find nothing. It is not a separate modern question. It is inside \"do not approach\" — and it is inside the command to lower the gaze that 24:30 addresses to the men first, before the women.\n\nAnd the honest thing to add: this is the sin people are loneliest in. It is done alone, confessed to nobody, and repented from and returned to for years. That cycle is not proof the repentance was false. 3:135 describes the believer as one who sins, remembers Allah, seeks forgiveness, and does not persist knowingly — and \"does not persist\" is not the same as \"never falls again.\"",
          exampleAr: "وهنا موضعُ الإباحيّة، وحقُّها أن تُسمّى صراحةً لأنّ الناس يبحثون عنها فلا يجدون. وليست مسألةً حديثةً مستقلّة، وإنما هي داخلةٌ في ﴿لَا تَقْرَبُوا۟﴾، وداخلةٌ في أمر غضِّ البصر الذي وجّهته آيةُ النور إلى الرجال أوّلًا قبل النساء.\n\nويحسن أن يُزاد بإنصاف: أنّ هذا أوحشُ الذنوب على صاحبه؛ يُفعل وحده، ولا يُقرَّ به لأحد، ويُتاب منه ويُعاد إليه سنين. وليس ذلك التكرارُ دليلًا على أنّ التوبة كانت كاذبة. فقد وصف الله المؤمن بأنه إذا فعل فاحشةً ذكر الله فاستغفر ﴿وَلَمْ يُصِرُّوا۟ عَلَىٰ مَا فَعَلُوا۟ وَهُمْ يَعْلَمُونَ﴾ — وليس نفيُ الإصرار هو نفيَ العودة.",
          proof: "And do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way.",
          proofAr: "وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةًۭ وَسَآءَ سَبِيلًۭا",
          ref: "Surah Al-Isra (17:32)",
          refAr: "سورة الإسراء (١٧:٣٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          keys: ["zina", "adultery", "fornication", "sex before marriage", "pornography", "porn", "watching porn", "i cant stop", "masturbation", "haram relationship", "girlfriend boyfriend",
                 "الزنا", "زنا", "الفاحشة", "علاقة محرمة", "الاباحية", "افلام اباحية", "بورن", "لا استطيع التوقف", "العادة السرية", "صديقة", "قبل الزواج",
                 "cant stop watching", "keep watching those", "late at night on my phone", "relapse", "ما اقدر اوقف", "اشاهد افلام", "ارجع للعادة", "بالليل على الجوال", "انتكست"]
        }
      ]
    },

    {
      id: "sg-door", icon: "🚪",
      title: "And the door, which is the point of all of it",
      titleAr: "والباب، وهو المقصودُ من هذا كلِّه",
      lead: "Two cards. If you have read this far and feel crushed, these are the two that were written for you.",
      leadAr: "بطاقتان. فإن بلغتَ هذا الموضع وقد ضاق صدرُك فهاتان كُتبتا لك.",
      items: [
        {
          id: "sn-tawbah", icon: "🌅",
          title: "\"Do not despair\" — and notice who is being addressed",
          titleAr: "﴿لَا تَقْنَطُوا۟﴾ — وانظر إلى من وُجّه الخطاب",
          plain: "The verse is not addressed to the righteous. It is addressed to \"My servants who have transgressed against themselves\" — and He still calls them MY SERVANTS while saying it.\n\nThen: Allah forgives ALL sins. Not most. Not the small ones. All of them.",
          plainAr: "ليست الآيةُ خطابًا للصالحين، وإنما هي خطابٌ ﴿لِعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ﴾ — وهو سبحانه يقول لهم «عبادي» وهو يقولها.\n\nثم: ﴿إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا﴾. لا أكثرَها، ولا صغائرَها. جميعًا.",
          example: "Nothing in the section above is on a list of things that cannot be forgiven. Not one card. The only thing outside forgiveness is dying while still associating partners with Allah — and even that is forgiven the moment a person stops, at any age, in any condition, on the last day of a life spent otherwise.\n\nWhat repentance requires is stated plainly and it is short: stop, regret it, resolve not to return — and where you took something from a person, give it back. That last part is the one people skip, and it is why the Judgement page says most people are ruined there rather than at the prayer mat.",
          exampleAr: "وليس في القسم المتقدّم شيءٌ في قائمة ما لا يُغفر. ولا بطاقةٌ واحدة. وإنما الذي خرج عن المغفرة أن يموت الرجلُ مشركًا — وحتى ذلك يُغفر ساعةَ يكفّ عنه، في أيِّ سنٍّ وعلى أيِّ حال، في آخر يومٍ من عمرٍ أُنفق في غيره.\n\nوشرطُ التوبة مبيَّنٌ وجيز: أن تُقلع، وتندم، وتعزم ألّا تعود — فإن كان الحقُّ لآدميّ فردُّه إليه. وهذا الأخيرُ هو الذي يُتجاوز عنه، ولذلك قالت صفحةُ يوم القيامة إنّ أكثر الناس يُفلسون هناك لا عند المصلّى.",
          proof: "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.",
          proofAr: "قُلْ يَٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا ۚ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ",
          ref: "Surah Az-Zumar (39:53)",
          refAr: "سورة الزمر (٣٩:٥٣)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          link: "#b-tawbah",
          linkEn: "How to actually repent — the steps, in plain words →",
          linkAr: "كيف تتوب عمليًّا — الخطوات بكلامٍ بسيط ←",
          keys: ["repentance", "tawbah", "can allah forgive me", "my sins are too many", "i keep going back", "despair", "hopeless", "forgiveness", "i did something terrible",
                 "التوبة", "هل يغفر الله لي", "ذنوبي كثيرة", "ارجع للذنب", "اليأس", "القنوط", "المغفرة", "فعلت شيئا فظيعا"]
        },
        {
          id: "sn-notlist", icon: "📋",
          title: "What this list is not",
          titleAr: "ما ليس هذا العدُّ",
          plain: "Three honest limits, because a page like this can be misused faster than it can be read.\n\nFIRST, it is not complete. The scholars differ on how many major sins there are — some counted seven, some seventy, adh-Dhahabi wrote a whole book and reached seventy-six. What they agree on is the definition: a sin with a fixed penalty, a curse, a threat of the Fire, or a stated exclusion attached to it in the text.\n\nSECOND, it is not a court. It tells you what a thing is; it does not tell you what any particular person is. A man who commits a major sin is a Muslim who committed a major sin, and the Companions' position — which became the position of Ahl as-Sunnah — was precisely to refuse to expel him from Islam for it.\n\nTHIRD, it is not a reason to look at anybody but yourself. If you have finished reading this and the first face that came to mind was somebody else's, the section has done the opposite of its job.",
          plainAr: "ثلاثةُ قيودٍ من الإنصاف، فإنّ صفحةً كهذه يُساء استعمالها أسرعَ ممّا تُقرأ.\n\nالأوّل: أنها ليست مستوعبة. وقد اختلف أهلُ العلم في عدد الكبائر: فمنهم من عدّها سبعًا، ومنهم من بلغ بها سبعين، وأفرد الذهبيُّ فيها كتابًا بلغ ستًّا وسبعين. والذي اتفقوا عليه هو الحدّ: أنّ الكبيرة ما جاء فيه حدٌّ أو لعنٌ أو وعيدٌ بالنار أو نفيٌ منصوصٌ في الكتاب أو السنّة.\n\nالثاني: أنها ليست محكمة. تخبرك ما هو الشيء، ولا تخبرك ما هو فلان. ومرتكبُ الكبيرة مسلمٌ ارتكب كبيرة، ومذهبُ الصحابة الذي صار مذهبَ أهل السنّة هو الامتناعُ عن إخراجه من الإسلام بها.\n\nالثالث: أنها ليست سببًا للنظر في أحدٍ غير نفسك. فإن فرغتَ من هذا وكان أوّلُ وجهٍ خطر لك وجهَ غيرك، فقد صنع القسمُ عكسَ ما وُضع له.",
          example: "One more thing, said once and not repeated: none of this is a fatwa on your situation. A ruling changes with what you did, what you knew, what you intended and what you were compelled to. This page gives you the text and the meaning. For your own case, ask a person.",
          exampleAr: "وأمرٌ أخير يُقال مرّةً ولا يُعاد: ليس في هذا فتوى في واقعتك. فالحكمُ يتغيّر بما فعلتَ وما علمتَ وما قصدتَ وما أُكرهتَ عليه. وإنما تعطيك هذه الصفحةُ النصَّ والمعنى، وأمّا حالُك أنت فاسأل عنها إنسانًا.",
          keys: ["how many major sins", "is he a kafir", "does a major sin make you a disbeliever", "list of sins", "am i still muslim", "committed a major sin",
                 "عدد الكبائر", "هل يكفر", "مرتكب الكبيرة", "قائمة الذنوب", "هل انا مسلم", "ارتكبت كبيرة"]
        }
      ]
    }
  ],

  closing: "The reason to name a sin rather than gesture at it is that a thing with a name can be dealt with. \"I should be a better person\" has produced very little in the history of the world; \"I will stop carrying what one cousin said to another\" is small enough to actually do, and it is on this list. Take one card. Not the section.",
  closingAr: "وإنما تُسمّى الخصلةُ باسمها ولا يُشار إليها إشارةً لأنّ ما له اسمٌ يمكن أن يُعالَج. فقولُك «ينبغي أن أكون أحسن» لم يُنتج في تاريخ الناس شيئًا يُذكر، وقولُك «سأكفّ عن نقل كلام ابن عمّي إلى الآخر» صغيرٌ بحيث يمكن فعلُه، وهو في هذا العدّ. فخذ بطاقةً واحدة، لا القسمَ كلَّه."
};
