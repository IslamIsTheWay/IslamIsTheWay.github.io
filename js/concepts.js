/* ============================================================
   SURAH_CONCEPTS — الفكرة الأساسية لكلّ سورة
   ------------------------------------------------------------
   Every surah is driving at something. Not a list of topics — the
   ONE thing it wants you to walk away understanding.

   The owner's own example is the model: Surah Al-Ahzab is about
   how people separate out under pressure. The siege of the Trench
   is the setting, but the point is what the pressure revealed —
   who held and who broke, and that the sorting is the subject.

   Each entry gives the idea, why it is the idea, and one anchor
   verse where the surah says it most plainly. Short on purpose:
   this is what shows the moment you press Tadabbur, before any
   verse-by-verse detail, so it has to be readable in one breath.

   Where a surah is commonly MISREAD, `careful` says so — that was
   asked for directly, and it is the same discipline the rest of
   the site uses for weak narrations.
   ============================================================ */

const SURAH_CONCEPTS = {

  1: { c: "You ask; the rest of the Book answers",
       cAr: "أنت تسأل، وسائرُ الكتاب يُجيب",
       w: "The only surah that is entirely the servant speaking upward — praise, then a pledge, then one request: guide us. The 113 surahs after it are the answer to that request.",
       wAr: "السورة الوحيدة التي هي كلّها كلامُ العبد صاعدًا: ثناءٌ ثم عهدٌ ثم سؤالٌ واحد: اهدنا. والسور الثلاث عشرة بعد المئة جوابُ ذلك السؤال.",
       a: "1:6" },

  2: { c: "Guidance is offered to everyone; what differs is the answer to it",
       cAr: "الهدى معروضٌ على الجميع، وإنما يختلف الجواب عنه",
       w: "It opens with three responses to the same Book — those who accept it, those who reject it, and those who pretend. Everything after, including the law, is what a community looks like once it has answered.",
       wAr: "افتُتحت بثلاثة مواقف من كتابٍ واحد: مؤمنٍ به، ورادٍّ له، ومُظهرٍ خلاف ما يُبطن. وما بعد ذلك — ومنه التشريع — صورةُ أمّةٍ بعد أن أجابت.",
       a: "2:2" },

  3: { c: "How you stand up after you have been beaten",
       cAr: "كيف تنهض بعد أن تُهزم",
       w: "Revealed around Uhud. It does not soften the defeat — it says plainly it came from yourselves, and then teaches what to do the morning after a loss.",
       wAr: "نزلت حول أُحُد، ولم تُلطّف الهزيمة، بل قالت صريحًا ﴿قُلْ هُوَ مِنْ عِندِ أَنفُسِكُمْ﴾، ثم علّمت ما يُصنع في صباح الخسارة.",
       a: "3:165" },

  4: { c: "Justice is measured by how you treat whoever cannot force you",
       cAr: "العدل يُقاس بمعاملتك لمن لا يقدر على إلزامك",
       w: "Women, orphans, inheritance, the weak. The surah keeps returning to people who have no power to make you fair — which is exactly where fairness is tested.",
       wAr: "النساء واليتامى والمواريث والضعفاء. تعود السورة أبدًا إلى من لا يملك أن يُلزمك بالإنصاف، وهناك بعينه يُمتحن الإنصاف.",
       a: "4:135" },

  5: { c: "Keep what you agreed to",
       cAr: "أوفوا بما عاقدتم عليه",
       w: "It opens with “fulfil the contracts” and works through covenants — with Allah, and with people. The nations before are shown failing at exactly this.",
       wAr: "افتُتحت بـ﴿أَوْفُوا۟ بِٱلْعُقُودِ﴾، ومضت في العهود: مع الله ومع الناس. وعُرضت الأمم قبلُ وقد نقضت هذا بعينه.",
       a: "5:1" },

  6: { c: "One God, argued rather than asserted",
       cAr: "توحيدٌ بالحجّة لا بالدعوى",
       w: "A Makkan surah that reasons with people who already believed in Allah but attached others to Him. It answers by argument — Ibrahim looking at the star, the moon, the sun.",
       wAr: "سورةٌ مكّيّة تُحاجّ قومًا يؤمنون بالله ويُشركون به. فجاء الجواب بالحجّة: إبراهيم ينظر إلى الكوكب والقمر والشمس.",
       a: "6:76" },

  7: { c: "The same story, every time, with the same ending",
       cAr: "القصّة نفسها في كلّ مرّة، وبالخاتمة نفسها",
       w: "Nuh, Hud, Salih, Lut, Shu'ayb, Musa — one pattern repeated: a messenger, a refusal, an end. Repetition is the argument.",
       wAr: "نوحٌ وهودٌ وصالحٌ ولوطٌ وشعيبٌ وموسى — نسقٌ واحد يتكرّر: رسولٌ، فردٌّ، فنهاية. والتكرار هو الحجّة.",
       a: "7:96" },

  8: { c: "You were not the reason you won",
       cAr: "لم تكونوا أنتم سببَ النصر",
       w: "After Badr, when the temptation is to credit yourself. The surah takes the victory back from the fighters and gives it to Allah, then teaches how to behave with what was won.",
       wAr: "بعد بدر، حين يُغري النصرُ صاحبَه بنسبته إلى نفسه. فنزعت السورة النصر من المقاتلين ونسبته إلى الله، ثم علّمت كيف يُتصرّف فيما غُنم.",
       a: "8:17" },

  9: { c: "Hardship sorts people, and the sorting is public",
       cAr: "الشدّة تفرز الناس، والفرز ظاهر",
       w: "The Tabuk expedition in the heat. Who went, who stayed, who made an excuse — the surah names the categories rather than the individuals, so the reader can find himself in one.",
       wAr: "غزوة تبوك في الحرّ: من خرج، ومن قعد، ومن اعتذر. وسمّت السورة الأصناف دون الأعيان، ليجد القارئ نفسه في أحدها.",
       a: "9:42" },

  10: { c: "The door stays open until it closes",
        cAr: "البابُ مفتوحٌ حتى يُغلق",
        w: "Named after the one people whose repentance was accepted after the punishment appeared. The surah is about the window before it shuts — and Pharaoh, who reached for it one moment too late.",
        wAr: "سُمّيت بالقوم الوحيدين الذين قُبلت توبتهم بعد أن ظهر العذاب. والسورة في المهلة قبل انقضائها، وفيها فرعون مدّ يده إليها بعد فواتها بلحظة.",
        a: "10:98" },

  11: { c: "Holding on when nothing is changing",
        cAr: "الثبات حين لا يتغيّر شيء",
        w: "Nuh preached 950 years to almost no one. This is the surah of the long haul — which is why the Prophet ﷺ said Hud and its sisters turned his hair grey.",
        wAr: "لبث نوحٌ ألف سنةٍ إلا خمسين عامًا ولم يؤمن معه إلا قليل. فهي سورة الطريق الطويل، ولذلك قال ﷺ: «شيّبتني هودٌ وأخواتها».",
        a: "11:112" },

  12: { c: "What looks like the disaster is the road",
        cAr: "الذي يبدو مصيبةً هو الطريق",
        w: "The well, the sale, the prison — each one looks like the end of Yusuf's story and each is the step that made the next possible. Told once, whole, unlike any other account in the Quran.",
        wAr: "الجبّ، والبيع، والسجن — كلٌّ منها يبدو خاتمة قصّة يوسف، وكلٌّ منها الدرجةُ التي بها صحّ ما بعدها. وسِيقت مرّةً واحدةً تامّةً، ولا نظير لذلك في القرآن.",
        a: "12:100" },

  13: { c: "The signs are already in front of you",
        cAr: "الآياتُ بين يديك أصلًا",
        w: "They asked for a miracle. The surah answers with the thunder, the rain, the two gardens watered by one water and bearing differently — evidence nobody bothers to look at.",
        wAr: "سألوا آيةً، فأجابت السورة بالرعد والمطر، وجنّتين يُسقيان بماءٍ واحدٍ ويختلف أُكلهما — أدلّةٌ لا يتكلّف أحدٌ النظر فيها.",
        a: "13:4" },

  14: { c: "Thanking, and what happens when you stop",
        cAr: "الشكر، وما يقع إذا انقطع",
        w: "“If you are grateful I will surely increase you” — and the town that was secure and safe until it denied the favours of Allah.",
        wAr: "﴿لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ﴾ — والقريةُ كانت آمنةً مطمئنّةً حتى كفرت بأنعم الله.",
        a: "14:7" },

  15: { c: "This Book will not be lost",
        cAr: "هذا الكتاب لا يضيع",
        w: "Allah takes responsibility for preserving it Himself. Every other scripture was handed to its people to keep; this one was not.",
        wAr: "تكفّل الله بحفظه بنفسه. وكلُّ كتابٍ قبله استُحفظ عليه أهلُه، وهذا لم يُوكل إليهم.",
        a: "15:9" },

  16: { c: "Count what you never notice",
        cAr: "عُدّ ما لا تنتبه له",
        w: "The bee, the cattle, the milk, the shade, the ships, the stars for direction. Ordinary things, listed until the reader realises he has never once thanked for any of them.",
        wAr: "النحل والأنعام واللبن والظلال والفُلك والنجوم للاهتداء. أشياء عاديّة تُعدّ حتى يفطن القارئ أنه ما شكر على واحدةٍ منها قطّ.",
        a: "16:18" },

  17: { c: "A human being has a weight, so behave like it",
        cAr: "لابن آدم قدرٌ، فليكن سلوكه على قدره",
        w: "“We have certainly honoured the children of Adam.” Around that sits a moral code: parents, the orphan, measure, speech, walking on the earth.",
        wAr: "﴿وَلَقَدْ كَرَّمْنَا بَنِىٓ ءَادَمَ﴾، وحولها تشريعٌ في الخُلق: الوالدان واليتيم والكيل والقول والمشي في الأرض.",
        a: "17:70" },

  18: { c: "Four things test a person: faith, wealth, knowledge, power",
        cAr: "أربعةٌ يُمتحن بها المرء: الدين والمال والعلم والسلطان",
        w: "The sleepers, the two gardens, Musa with al-Khidr, Dhul-Qarnayn. Four trials, four stories — and the Dajjal, the greatest trial, is why it is read every Friday.",
        wAr: "أهل الكهف، وصاحب الجنّتين، وموسى مع الخضر، وذو القرنين. أربع فتنٍ في أربع قصص — والدجّالُ أعظمها، ولذلك تُقرأ كلّ جمعة.",
        a: "18:46" },

  19: { c: "Nothing is out of reach for Him",
        cAr: "لا يُعجزه شيء",
        w: "A barren old couple given a son; a virgin given a son. The surah is named mercy's clearest case and repeats the name ar-Rahman more than almost any other.",
        wAr: "شيخانِ عاقران يُرزقان ولدًا، وعذراءُ تُرزق ولدًا. وتكرّر فيها اسم الرحمن تكرارًا لا يكاد يوجد في غيرها.",
        a: "19:9" },

  20: { c: "It was not sent to make you miserable",
        cAr: "ما أُنزل ليُشقيك",
        w: "The second verse says it outright. Then the longest telling of Musa — a man who was afraid, made mistakes, and was carried anyway.",
        wAr: "قالته الآية الثانية صريحًا: ﴿مَآ أَنزَلْنَا عَلَيْكَ ٱلْقُرْءَانَ لِتَشْقَىٰٓ﴾. ثم أطولُ سياقٍ لموسى: رجلٌ خاف وأخطأ وحُمل مع ذلك.",
        a: "20:2" },

  21: { c: "Every prophet brought the same message",
        cAr: "كلُّ نبيٍّ جاء بالرسالة نفسها",
        w: "Sixteen prophets in one surah, and one sentence tying them: We sent no messenger before you except that We revealed to him that there is no god but Me.",
        wAr: "ستّة عشر نبيًّا في سورةٍ واحدة، وجملةٌ تجمعهم: ﴿وَمَآ أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِىٓ إِلَيْهِ أَنَّهُۥ لَآ إِلَٰهَ إِلَّآ أَنَا۠﴾.",
        a: "21:25" },

  22: { c: "Worship costs something",
        cAr: "للعبادة كُلفة",
        w: "The hajj: travel, crowds, sacrifice, expense. And the line that explains all of it — it is not the meat or the blood that reaches Allah, but the taqwa from you.",
        wAr: "الحجّ: سفرٌ وزحامٌ وذبحٌ ونفقة. والجملةُ التي تُفسّر ذلك كلّه: ﴿لَن يَنَالَ ٱللَّهَ لُحُومُهَا وَلَا دِمَآؤُهَا وَلَٰكِن يَنَالُهُ ٱلتَّقْوَىٰ مِنكُمْ﴾.",
        a: "22:37" },

  23: { c: "What a successful believer actually does",
        cAr: "ما يفعله المؤمن المفلح فعلًا",
        w: "It opens with a checklist — prayer, avoiding idle talk, zakat, chastity, trusts, keeping the prayer — and closes on the man who asks to be sent back.",
        wAr: "افتُتحت بتعداد: الخشوع، والإعراض عن اللغو، والزكاة، والحفظ، والأمانة، والمحافظة على الصلوات. وخُتمت بالذي يسأل الرجعة.",
        a: "23:1" },

  24: { c: "A community's honour is everyone's business",
        cAr: "عِرض الجماعة أمرُ الجميع",
        w: "Revealed after a rumour nearly tore Madinah apart. It legislates the eyes, the tongue, entering homes — the small habits that keep a society from turning on itself.",
        wAr: "نزلت بعد إفكٍ كاد يمزّق المدينة. فشرّعت في البصر واللسان والاستئذان — العادات الصغيرة التي تمنع المجتمع أن ينقلب على نفسه.",
        a: "24:15" },

  25: { c: "There is a line between right and wrong, and it is drawn",
        cAr: "ثمّ فُرقانٌ بين الحقّ والباطل، وقد خُطّ",
        w: "Al-Furqan means the thing that separates. It ends with a portrait of the servants of the Most Merciful — how they walk, sleep, spend, and answer the ignorant.",
        wAr: "الفرقان: الفاصل. وخُتمت بوصف عباد الرحمن: كيف يمشون، وكيف يبيتون، وكيف يُنفقون، وبمَ يُجيبون الجاهلين.",
        a: "25:63" },

  26: { c: "Rejection is normal; it is not a sign you are wrong",
        cAr: "الردُّ معتاد، وليس دليلًا على أنك مخطئ",
        w: "Written for a Prophet ﷺ grieving that people would not believe. Seven messengers, all rejected — the surah's comfort is that this always happens.",
        wAr: "سِيقت لنبيٍّ ﷺ يحزن أن لا يؤمنوا. سبعةُ رسلٍ كلُّهم رُدّوا، وعزاءُ السورة أنّ هذا هو الجاري دائمًا.",
        a: "26:3" },

  27: { c: "Power is a test, not a reward",
        cAr: "المُلك ابتلاءٌ لا جزاء",
        w: "Sulayman had wind, jinn and the speech of birds — and said: this is from the favour of my Lord, to test whether I am grateful or ungrateful.",
        wAr: "أُوتي سليمان الريح والجنّ ومنطق الطير، فقال: ﴿هَٰذَا مِن فَضْلِ رَبِّى لِيَبْلُوَنِىٓ ءَأَشْكُرُ أَمْ أَكْفُرُ﴾.",
        a: "27:40" },

  28: { c: "The ones with nothing are the ones He raises",
        cAr: "المستضعفون هم الذين يُمكَّنون",
        w: "A baby in a basket ends up facing the man who was killing babies. And Qarun, who had the treasure, ends underground.",
        wAr: "رضيعٌ في تابوتٍ يصير في وجه الذي كان يُذبّح الأبناء. وقارونُ صاحبُ الكنز يُخسف به وبداره الأرض.",
        a: "28:5" },

  29: { c: "Saying you believe is not the test; being squeezed is",
        cAr: "ليست الدعوى اختبارًا، وإنما الضغط",
        w: "“Do people think they will be left to say ‘we believe’ and not be tested?” The spider's house — looking like shelter, holding nothing — is the image for everything relied on besides Allah.",
        wAr: "﴿أَحَسِبَ ٱلنَّاسُ أَن يُتْرَكُوٓا۟ أَن يَقُولُوٓا۟ ءَامَنَّا وَهُمْ لَا يُفْتَنُونَ﴾. وبيتُ العنكبوت — يُرى مأوًى ولا يُغني — مثلٌ لكلّ ما يُتّكل عليه دون الله.",
        a: "29:2" },

  30: { c: "History is not running itself",
        cAr: "التاريخ لا يجري من تلقاء نفسه",
        w: "It predicted Rome's defeat would reverse within a few years, when that looked impossible. Empires rise and fall on a schedule that is not theirs.",
        wAr: "أخبرت أنّ هزيمة الروم ستنقلب في بضع سنين، وذلك حين كان الأمر يبدو مستحيلًا. فالدول تعلو وتسقط على موعدٍ ليس بيدها.",
        a: "30:4" },

  31: { c: "What a father owes his son",
        cAr: "ما يجب على الأبِ لابنه",
        w: "Luqman is not a prophet and this is not a sermon — it is a man teaching his own child, starting with tawhid and ending with how to walk and how loud to speak.",
        wAr: "لقمان ليس نبيًّا، وليست موعظةً عامّة، وإنما رجلٌ يُعلّم ولده: بدأ بالتوحيد وختم بالمشي وخفض الصوت.",
        a: "31:13" },

  32: { c: "The ones who leave their beds",
        cAr: "الذين تتجافى جنوبهم عن المضاجع",
        w: "A short surah about who actually gets up at night, and the reward nobody has been told the size of — no soul knows what is hidden for them.",
        wAr: "سورةٌ قصيرةٌ فيمن يقوم بالليل حقًّا، وفي أجرٍ لم يُطلع أحدٌ على قدره: ﴿فَلَا تَعْلَمُ نَفْسٌۭ مَّآ أُخْفِىَ لَهُم مِّن قُرَّةِ أَعْيُنٍۢ﴾.",
        a: "32:17" },

  33: { c: "Pressure separates people — and shows who was who all along",
        cAr: "الضغطُ يفرز الناس، ويكشف من كان كلٌّ منهم من البداية",
        w: "This is the clearest case of it in the Quran. Madinah is besieged at the Trench: armies from above and below, eyes turning aside, hearts reaching the throats. In that exact moment two sentences are recorded — the believers saying “this is what Allah and His Messenger promised us”, and the others saying “Allah and His Messenger promised us nothing but delusion.”\n\nSame siege, same trench, same hunger. The pressure did not create the difference; it made an existing one visible. That is the surah's subject — everything else in it, the Confederates, the household, the adoption ruling, sits around that discovery.",
        wAr: "وهذا أظهر مواضعه في القرآن. حوصرت المدينة يوم الخندق: جاؤوهم من فوقهم ومن أسفل منهم، وزاغت الأبصار، وبلغت القلوبُ الحناجر. وفي تلك اللحظة بعينها سُجّلت جملتان: قولُ المؤمنين ﴿هَٰذَا مَا وَعَدَنَا ٱللَّهُ وَرَسُولُهُۥ﴾، وقولُ الآخرين ﴿مَّا وَعَدَنَا ٱللَّهُ وَرَسُولُهُۥٓ إِلَّا غُرُورًۭا﴾.\n\nالحصار واحد، والخندق واحد، والجوع واحد. فما أنشأ الضغطُ الفرق، وإنما أظهر فرقًا كان قائمًا. وهذا موضوع السورة، وسائرُ ما فيها — الأحزاب، وبيت النبوّة، وحكم التبنّي — قائمٌ حول هذا الكشف.",
        a: "33:10",
        careful: "It is read as a war chapter. The battle is the setting, not the subject: the surah is interested in what the siege revealed about people, which is why it moves straight from the trench to how a household and a community should conduct themselves.",
        carefulAr: "تُقرأ على أنها سورةُ غزوة. والغزوةُ ظرفٌ لا موضوع: فالسورة معنيّةٌ بما كشفه الحصار عن الناس، ولذلك انتقلت من الخندق إلى آداب البيت والجماعة." },

  34: { c: "Comfort is not proof He is pleased with you",
        cAr: "الرخاء ليس دليلَ الرضا",
        w: "Saba had two gardens and security, and the surah shows what they became. Wealth is repeatedly offered as evidence of favour and repeatedly refused as evidence.",
        wAr: "كانت لسبأٍ جنّتان وأمن، وأرت السورة ما صاروا إليه. ويُقدَّم المال مرارًا دليلًا على الرضا، وتردّه السورة مرارًا.",
        a: "34:37" },

  35: { c: "You are the one in need",
        cAr: "أنتم الفقراء",
        w: "“O mankind, you are those in need of Allah, and Allah is the Free of need.” The whole surah is creation displayed against that one asymmetry.",
        wAr: "﴿يَٰٓأَيُّهَا ٱلنَّاسُ أَنتُمُ ٱلْفُقَرَآءُ إِلَى ٱللَّهِ ۖ وَٱللَّهُ هُوَ ٱلْغَنِىُّ﴾. والسورة كلّها عرضٌ للخلق على هذا التفاوت.",
        a: "35:15" },

  36: { c: "The One who made it the first time can do it again",
        cAr: "الذي أنشأها أوّل مرّة يُعيدها",
        w: "A man brings a crumbling bone and asks who will revive it. The answer is not an argument about bones — it is: the One who produced it the first time.",
        wAr: "جاء رجلٌ بعظمٍ رميمٍ يفتّه ويسأل: من يُحييه؟ فلم يكن الجواب في العظم، بل: ﴿يُحْيِيهَا ٱلَّذِىٓ أَنشَأَهَآ أَوَّلَ مَرَّةٍۢ﴾.",
        a: "36:79" },

  39: { c: "Do it for Him, or do not bother",
        cAr: "أخلِصْه له، وإلا فلا",
        w: "Az-Zumar returns again and again to sincerity — worship Allah, making the religion purely for Him. And it holds the verse that forbids anyone to despair of His mercy.",
        wAr: "تعود الزمر أبدًا إلى الإخلاص: ﴿فَٱعْبُدِ ٱللَّهَ مُخْلِصًۭا لَّهُ ٱلدِّينَ﴾. وفيها الآية التي تمنع القنوط من رحمته.",
        a: "39:53" },

  40: { c: "One person can be right while everyone is wrong",
        cAr: "قد يكون الواحد على الحقّ والناس كلّهم على خلافه",
        w: "A believer in Pharaoh's own court, hiding his faith, who stood up and argued. The surah is named Ghafir but is known by him.",
        wAr: "مؤمنٌ من آل فرعون يكتم إيمانه، ثم قام يُحاجّ. وتُسمّى السورة غافر، وتُعرف به.",
        a: "40:28" },

  41: { c: "Your own body will testify",
        cAr: "جوارحك تشهد عليك",
        w: "Hearing, sight and skin speak on that Day, and the person asks his own skin why it testified against him. Nothing is more private than what you did alone — and that is exactly what speaks.",
        wAr: "يشهد السمع والبصر والجلود يومئذٍ، فيقول المرء لجلده: لِمَ شهدتَ عليّ؟ ولا شيء أخفى ممّا صنعتَه وحدك، وهو الذي ينطق.",
        a: "41:21" },

  42: { c: "Decide together",
        cAr: "وأمرهم شورى بينهم",
        w: "Consultation is listed among prayer and spending, as a mark of the believers — not a political technique but a description of how they live.",
        wAr: "ذُكرت الشورى بين الصلاة والإنفاق، علامةً على المؤمنين — لا أسلوبًا في السياسة، بل وصفًا لطريقة عيشهم.",
        a: "42:38" },

  43: { c: "If wealth meant anything, He would have given it to the wrong people in bulk",
        cAr: "لو كان للمال قدرٌ لأعطاه الكافرين جُملةً",
        w: "The surah says it almost shockingly: were it not that mankind would become one nation of disbelievers, He would have given the deniers houses with silver roofs.",
        wAr: "قالته السورة على وجهٍ يكاد يُدهش: ﴿وَلَوْلَآ أَن يَكُونَ ٱلنَّاسُ أُمَّةًۭ وَٰحِدَةًۭ لَّجَعَلْنَا لِمَن يَكْفُرُ بِٱلرَّحْمَٰنِ لِبُيُوتِهِمْ سُقُفًۭا مِّن فِضَّةٍۢ﴾.",
        a: "43:33" },

  47: { c: "Two roads, and the difference is whether you thought about it",
        cAr: "طريقان، والفرقُ بينهما التدبّر",
        w: "It sets the two groups against each other the whole way through, and in the middle asks the question this site's Quran page opens with: do they not ponder the Quran, or are there locks upon hearts?",
        wAr: "تُقابل بين الفريقين من أوّلها إلى آخرها، وفي وسطها السؤال الذي تُفتتح به صفحة القرآن في هذا الموقع: ﴿أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَآ﴾.",
        a: "47:24" },

  48: { c: "The thing that looked like a loss was the win",
        cAr: "الذي بدا خسارةً كان هو الفتح",
        w: "Hudaybiyyah felt like a humiliating treaty to the companions. The surah opens by calling it a clear victory — before anyone could see how.",
        wAr: "كان صلح الحديبية عند الصحابة كالدَّنيّة، فافتُتحت السورة بتسميته ﴿فَتْحًۭا مُّبِينًۭا﴾ قبل أن يتبيّن لأحدٍ وجهُ ذلك.",
        a: "48:1" },

  49: { c: "How to behave with each other",
        cAr: "كيف يعامل بعضكم بعضًا",
        w: "Verify news before repeating it, do not mock, do not use nicknames, do not spy, do not backbite — and the line that ends every claim to superiority: the noblest of you is the most God-conscious.",
        wAr: "تبيّنوا الخبر قبل نقله، ولا تسخروا، ولا تنابزوا، ولا تجسّسوا، ولا يغتب بعضكم بعضًا — والجملةُ التي تُنهي كلّ دعوى تفاضل: ﴿إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ﴾.",
        a: "49:13" },

  50: { c: "He is closer than the person beside you",
        cAr: "هو أقرب إليك ممّن بجانبك",
        w: "Nearer than the jugular vein, with two recorders writing. The surah puts God's closeness and death's closeness side by side.",
        wAr: "أقربُ من حبل الوريد، وعن اليمين وعن الشمال قعيد. فقرنت السورة بين قرب الله وقرب الموت.",
        a: "50:16" },

  55: { c: "Which of them will you deny?",
        cAr: "فبأيّ آلاء ربّكما تكذّبان",
        w: "Asked thirty-one times. A favour is named, then the question. By the end the reader has been made to answer it himself, over and over.",
        wAr: "سُئل إحدى وثلاثين مرّة: تُذكر النعمة ثم يأتي السؤال. حتى يجد القارئ نفسه في آخرها قد أجاب مرّةً بعد مرّة.",
        a: "55:13" },

  56: { c: "Three groups, and no fourth",
        cAr: "ثلاثة أصناف، ولا رابع",
        w: "The foremost, the companions of the right, the companions of the left. Everyone who has ever lived is placed in one of three, and rank is not by wealth or lineage.",
        wAr: "السابقون، وأصحاب اليمين، وأصحاب الشمال. فكلُّ من عاش موضوعٌ في أحد ثلاثة، وليست المنزلة بمالٍ ولا نسب.",
        a: "56:7" },

  57: { c: "Hearts go hard, and it happens quietly",
        cAr: "القلوب تقسو، ويقع ذلك في صمت",
        w: "“Has the time not come for the hearts of the believers to become humbly submissive?” — addressed to believers, about a slow hardening they did not notice.",
        wAr: "﴿أَلَمْ يَأْنِ لِلَّذِينَ ءَامَنُوٓا۟ أَن تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ ٱللَّهِ﴾ — خطابٌ للمؤمنين عن قسوةٍ بطيئةٍ لم يشعروا بها.",
        a: "57:16" },

  59: { c: "Look at what you leave behind",
        cAr: "انظر ما تُخلّفه وراءك",
        w: "A people who fortified themselves and left it all. Then: let every soul look at what it has sent ahead for tomorrow. It closes with the names of Allah.",
        wAr: "قومٌ تحصّنوا فتركوا ذلك كلّه. ثم: ﴿وَلْتَنظُرْ نَفْسٌۭ مَّا قَدَّمَتْ لِغَدٍۢ﴾. وخُتمت بأسماء الله.",
        a: "59:18" },

  63: { c: "The danger inside, not outside",
        cAr: "الخطر من الداخل لا من الخارج",
        w: "A whole surah on the hypocrite — impressive to look at, pleasant to listen to, and hollow. “They are the enemy, so beware of them.”",
        wAr: "سورةٌ كاملةٌ في المنافق: تُعجبك أجسامهم، وإن يقولوا تسمع لقولهم، وهم خُشُبٌ مسنّدة. ﴿هُمُ ٱلْعَدُوُّ فَٱحْذَرْهُمْ﴾.",
        a: "63:4" },

  65: { c: "The way out comes from where you did not expect",
        cAr: "المخرج من حيث لا تحتسب",
        w: "Placed inside the rulings of divorce — the hardest, most bitter administrative moment in a life — is the promise of a way out and provision from where you did not reckon.",
        wAr: "في وسط أحكام الطلاق — أشقّ ما يمرّ بالمرء وأمرّه — وُضع وعدُ المخرج والرزق ﴿مِنْ حَيْثُ لَا يَحْتَسِبُ﴾.",
        a: "65:2" },

  67: { c: "Living and dying are the exam, not the accident",
        cAr: "الحياة والموت امتحانٌ لا مصادفة",
        w: "He created death and life to test which of you is best in deed. Death is named first — it was created, it is not an absence.",
        wAr: "﴿خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا﴾. وقُدّم الموت، فهو مخلوقٌ لا عدم.",
        a: "67:2" },

  71: { c: "Ask forgiveness and watch what follows",
        cAr: "استغفروا وانظروا ما يعقب",
        w: "Nuh's argument is not a threat. Seek your Lord's forgiveness — He will send rain, increase your wealth and children, and give you gardens and rivers.",
        wAr: "لم تكن حجّة نوحٍ وعيدًا: ﴿ٱسْتَغْفِرُوا۟ رَبَّكُمْ إِنَّهُۥ كَانَ غَفَّارًۭا • يُرْسِلِ ٱلسَّمَآءَ عَلَيْكُم مِّدْرَارًۭا • وَيُمْدِدْكُم بِأَمْوَٰلٍۢ وَبَنِينَ﴾.",
        a: "71:10" },

  75: { c: "Even your fingertips will be put back",
        cAr: "حتى بنانك يُعاد",
        w: "They doubted the bones could be gathered. The answer goes further than asked: yes, and We are able to restore his very fingertips.",
        wAr: "ظنّوا أن لن تُجمع العظام، فجاء الجواب فوق السؤال: ﴿بَلَىٰ قَٰدِرِينَ عَلَىٰٓ أَن نُّسَوِّىَ بَنَانَهُۥ﴾.",
        a: "75:4" },

  90: { c: "The uphill road is the one nobody takes",
        cAr: "العقبةُ هي التي لا يقتحمها أحد",
        w: "Freeing a neck, feeding on a day of hunger, an orphan or a poor person in the dust. The surah calls it the steep path — and says he did not attempt it.",
        wAr: "فكُّ رقبة، أو إطعامٌ في يوم مسغبة، يتيمًا ذا مقربةٍ أو مسكينًا ذا متربة. سمّتها السورة العقبة، وقالت: ﴿فَلَا ٱقْتَحَمَ ٱلْعَقَبَةَ﴾.",
        a: "90:11" },

  93: { c: "The silence was not abandonment",
        cAr: "الاحتباس لم يكن قِلًى",
        w: "Revelation paused and people said he had been left. The surah answers by listing what had already been done for him — orphan, sheltered; lost, guided; poor, enriched.",
        wAr: "احتُبس الوحي فقالوا: ودّعه ربّه. فأجابت السورة بتعداد ما صُنع به قبلُ: يتيمًا فآوى، وضالًّا فهدى، وعائلًا فأغنى.",
        a: "93:3" },

  94: { c: "The ease is inside the hardship, not after it",
        cAr: "اليُسر مع العسر لا بعده",
        w: "The word is “with”, not “after”, and it is said twice. The relief is not waiting at the far end; it is packed in alongside.",
        wAr: "الحرف ﴿مَعَ﴾ لا «بعد»، وقيلت مرّتين. فليس الفرج منتظرًا في آخر الطريق، بل هو مصاحبٌ في أثنائه.",
        a: "94:5" },

  96: { c: "Read — and the thing that ruins a man is thinking he needs nothing",
        cAr: "اقرأ — والذي يُطغي المرءَ ظنُّه أنه مستغنٍ",
        w: "The first revelation is a command to read. The same surah then names the disease: man transgresses when he sees himself self-sufficient.",
        wAr: "أوّل ما نزل أمرٌ بالقراءة. ثم سمّت السورةُ نفسها الداء: ﴿إِنَّ ٱلْإِنسَٰنَ لَيَطْغَىٰٓ • أَن رَّءَاهُ ٱسْتَغْنَىٰٓ﴾.",
        a: "96:6" },

  99: { c: "Nothing is too small to count",
        cAr: "لا شيء أصغر من أن يُحسب",
        w: "An atom's weight of good, an atom's weight of evil — both seen. The surah exists to remove the idea of a deed too small to matter.",
        wAr: "مثقالُ ذرّةٍ خيرًا ومثقالُ ذرّةٍ شرًّا، كلاهما يُرى. وجاءت السورة لترفع توهّم أنّ ثمّ عملًا أصغر من أن يُعتدّ به.",
        a: "99:7" },

  102: { c: "Piling things up distracts you until the graves",
        cAr: "التكاثر يُلهي حتى المقابر",
        w: "The competition to have more occupies a person right up to the point where he is visiting cemeteries — and only then does he see.",
        wAr: "﴿أَلْهَىٰكُمُ ٱلتَّكَاثُرُ • حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ﴾. يشغله التنافس في الجمع إلى أن يبلغ زيارة القبور، وعندها يرى.",
        a: "102:1" },

  109: { c: "There is a line, and it is not rudeness to keep it",
        cAr: "ثمّ حدٌّ، وليس حفظه جفاءً",
        w: "It is the shortest possible statement of a boundary — said calmly, with no insult in it, and no negotiation either.",
        wAr: "أوجزُ ما يُقال في تقرير حدٍّ: قيلت في هدوء، ليس فيها شتمٌ ولا مساومة.",
        a: "109:6" },

  110: { c: "When it finally goes right, ask forgiveness",
        cAr: "إذا تمّ لك الأمر فاستغفر",
        w: "Victory arrives, people enter in crowds — and the instruction is not to celebrate but to glorify and seek forgiveness. The companions understood it as a farewell.",
        wAr: "جاء النصر ودخل الناس أفواجًا، فكان الأمر لا بالفرح بل: ﴿فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ﴾. وفهم الصحابة أنها نَعْيٌ.",
        a: "110:3" }
};

/* The surah's anchor verse reference, for display. */
function iitwConceptFor(n) {
  return (typeof SURAH_CONCEPTS !== "undefined" && SURAH_CONCEPTS[n]) ? SURAH_CONCEPTS[n] : null;
}
function iitwConceptCount() {
  return (typeof SURAH_CONCEPTS !== "undefined") ? Object.keys(SURAH_CONCEPTS).length : 0;
}
