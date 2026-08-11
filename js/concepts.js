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

  37: { c: "Every one of them was mocked, and every one of them was vindicated",
        cAr: "كلُّهم سُخر منه، وكلُّهم نُصر في العاقبة",
        w: "Nuh, Ibrahim, Musa and Harun, Ilyas, Lut, Yunus — one after another, and each account closes with the same refrain: peace be upon him, and We left this for him among later generations. The repetition is not filler. It is the argument: this is how it ends, every time, for the one who held on while he was being laughed at.",
        wAr: "نوح، وإبراهيم، وموسى وهارون، وإلياس، ولوط، ويونس — واحدًا بعد واحد، ويُختم كلُّ خبرٍ باللازمة نفسها: ﴿سَلَٰمٌ عَلَىٰ...﴾ و﴿وَتَرَكْنَا عَلَيْهِ فِى ٱلْـَٔاخِرِينَ﴾. وليس التكرار حشوًا، وإنما هو الحجّة: هكذا تنتهي القصّة في كلّ مرّة لمن ثبت وهو يُستهزأ به.",
        a: "37:181" },

  38: { c: "Power is a test in exactly the way loss is",
        cAr: "التمكينُ ابتلاءٌ كما أنّ الفقد ابتلاء",
        w: "Dawud with a kingdom, Sulayman with the wind and the horses, Ayyub with everything taken away. The surah files all three under one heading, and uses the same word for each of them — awwab, the one who keeps returning. What is asked of the man given much and the man left with nothing turns out to be identical.",
        wAr: "داودُ وله المُلك، وسليمانُ وله الريح والصافنات، وأيّوبُ وقد سُلب كلَّ شيء. جمعت السورة الثلاثة في بابٍ واحد، ووصفت كلَّ واحدٍ منهم بالوصف نفسه: ﴿أَوَّابٌ﴾، أي الرجّاع إلى ربّه. فإذا المطلوب من المُعطى ومن المسلوب واحد.",
        a: "38:44" },

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

  44: { c: "Nothing here was made for amusement",
        cAr: "ما خُلق شيءٌ من هذا لعبًا",
        w: "It moves from the blessed night the Quran came down, to Pharaoh's ending, to the Day itself — and then states the reason outright: We did not create the heavens and the earth and what is between them playing. The seriousness of the scenes is the point being made about the universe.",
        wAr: "تنتقل من الليلة المباركة التي نزل فيها القرآن، إلى عاقبة فرعون، إلى اليوم الآخر — ثم تُصرّح بالعلّة: ﴿وَمَا خَلَقْنَا ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا لَٰعِبِينَ﴾. فجِدّيّةُ المشاهد هي نفسها الدعوى المقصودة في شأن هذا الكون.",
        a: "44:38" },

  45: { c: "The evidence was never the part that was missing",
        cAr: "لم يكن الدليل هو الناقص قطّ",
        w: "Sign after sign is listed — the heavens, your own creation, the animals spread out, the rain that revives dead ground, the ships. Then every nation is shown kneeling, and its record read back to it. The surah is not answering a shortage of proof.",
        wAr: "تُعدّ الآياتُ واحدةً بعد واحدة: السماوات، وخلقُكم أنفسكم، والدوابُّ المبثوثة، والمطرُ يُحيي الأرض بعد موتها، والفُلك. ثم تُرى كلُّ أمّةٍ جاثية، ويُقرأ عليها كتابها. فليست السورةُ جوابًا عن قلّة دليل.",
        a: "45:23",
        careful: "It is easy to read this as a complaint that people did not think hard enough. The surah names the cause itself, and it is not the intellect: a man who takes his own desire as his god, and whom Allah then leaves astray upon knowledge — he had the knowledge and it stopped helping him.",
        carefulAr: "يسهل أن تُقرأ شكوى من قلّة النظر. والسورة تُسمّي السبب بنفسها، وليس هو العقل: ﴿أَفَرَءَيْتَ مَنِ ٱتَّخَذَ إِلَٰهَهُۥ هَوَىٰهُ وَأَضَلَّهُ ٱللَّهُ عَلَىٰ عِلْمٍ﴾ — فالعلم كان عنده، ثم لم يعد ينفعه." },

  46: { c: "A stronger civilisation than yours was already wiped out",
        cAr: "حضارةٌ أقوى منكم أُبيدت من قبل",
        w: "'Ad were given a strength the Quraysh were never given, and their ruins sat on a trade road the Quraysh themselves passed. Beside that, the surah places the gentlest passage in the Book about a mother's carrying and a man reaching forty — the ruin of nations and the honouring of two parents in one surah.",
        wAr: "أُوتيت عادٌ من القوّة ما لم تُؤتَ قريش، وديارُهم على طريق تجارتهم يمرّون بها. ووضعت السورة بجانب ذلك ألينَ ما في الكتاب في حمل الأمّ وبلوغ الأربعين — فهلاكُ الأمم وبِرُّ الوالدين في سورةٍ واحدة.",
        a: "46:15" },

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

  51: { c: "You were made for one thing, and it is stated outright",
        cAr: "خُلقتَ لأمرٍ واحد، وقد صُرّح به",
        w: "It opens on oaths sworn by the scattering winds and closes on the plainest statement of purpose anywhere in the Book: I did not create the jinn and mankind except to worship Me. Everything between — the guests of Ibrahim, Thamud, the people of Nuh — is provision on one side and warning on the other.",
        wAr: "افتُتحت بالقسم بالذاريات، وخُتمت بأصرح تعليلٍ للخلق في الكتاب كلّه: ﴿وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ﴾. وما بينهما — ضيفُ إبراهيم، وثمود، وقومُ نوح — رزقٌ من جهة ونذارةٌ من جهة.",
        a: "51:56",
        careful: "Worship here is not read by the scholars as prayer alone. Ibn Abbas is reported to have explained it as knowing Him, and the classical position is that it covers whatever a person does in obedience — the work, the marriage, the honesty in a sale — once it is done for Him.",
        carefulAr: "ليست العبادة هنا عند العلماء الصلاةَ وحدها. ورُوي عن ابن عبّاسٍ تفسيرُها بالمعرفة، وعليه فالمعنى عند المتقدّمين يشمل كلَّ ما يفعله العبد على وجه الطاعة: العملَ، والنكاحَ، والصدقَ في البيع، إذا أُريد به وجهه." },

  52: { c: "The run of questions they could not answer",
        cAr: "سلسلةُ الأسئلة التي عجزوا عنها",
        w: "After the Garden is described, the surah turns to a sequence of questions and closes a door with each one — were they created out of nothing? did they create themselves? do they own the treasuries of your Lord? is there a ladder on which they listen? By the end there is nowhere left to stand.",
        wAr: "بعد وصف الجنّة تنتقل السورة إلى أسئلةٍ متتابعة، يُغلق بكلّ سؤالٍ منها باب: ﴿أَمْ خُلِقُوا۟ مِنْ غَيْرِ شَىْءٍ أَمْ هُمُ ٱلْخَٰلِقُونَ﴾، ﴿أَمْ عِندَهُمْ خَزَآئِنُ رَبِّكَ﴾، ﴿أَمْ لَهُمْ سُلَّمٌۭ يَسْتَمِعُونَ فِيهِ﴾. فلا يبقى في الآخر موضعُ قدم.",
        a: "52:35" },

  53: { c: "He was not speaking from himself",
        cAr: "ما كان ينطق عن نفسه",
        w: "The surah that settles where the message came from — he does not speak from desire, it is only revelation revealed. And then, in the same surah, the rule that no bearer of burdens carries another's, and that man gets only what he worked for.",
        wAr: "السورة التي تحسم من أين جاء الوحي: ﴿وَمَا يَنطِقُ عَنِ ٱلْهَوَىٰٓ ۝ إِنْ هُوَ إِلَّا وَحْىٌۭ يُوحَىٰ﴾. ثم في السورة نفسها: ﴿أَلَّا تَزِرُ وَازِرَةٌۭ وِزْرَ أُخْرَىٰ ۝ وَأَن لَّيْسَ لِلْإِنسَٰنِ إِلَّا مَا سَعَىٰ﴾.",
        a: "53:3" },

  54: { c: "The offer is repeated after every ruin",
        cAr: "يُعاد العرضُ بعد كلّ هلاك",
        w: "Nuh's people, 'Ad, Thamud, Lut's people, Pharaoh's — and after each one the same sentence returns: We have certainly made the Quran easy for remembrance, so is there any who will remember? Four times the door is reopened immediately after it is shown being shut.",
        wAr: "قومُ نوح، وعاد، وثمود، وقومُ لوط، وآلُ فرعون — ويعود بعد كلّ واحدةٍ القولُ نفسه: ﴿وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍۢ﴾. أربعَ مرّاتٍ يُفتح الباب عقب عرضِ إغلاقه.",
        a: "54:17" },

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

  58: { c: "He hears the one nobody else is listening to",
        cAr: "يسمع مَن لا يسمعه أحد",
        w: "A woman came arguing about her husband, and the answer came down from above the seven heavens with her case in it. Aishah said she could not catch every word of the conversation in the corner of the same room — and Allah heard all of it.",
        wAr: "جاءت امرأةٌ تُجادل في زوجها، فنزل الجوابُ من فوق سبع سماوات وفيه قضيّتها. قالت عائشة: إنه ليخفى عليّ بعضُ كلامها وهي في ناحية البيت — وقد سمعه الله كلَّه.",
        a: "58:1" },

  59: { c: "Look at what you leave behind",
        cAr: "انظر ما تُخلّفه وراءك",
        w: "A people who fortified themselves and left it all. Then: let every soul look at what it has sent ahead for tomorrow. It closes with the names of Allah.",
        wAr: "قومٌ تحصّنوا فتركوا ذلك كلّه. ثم: ﴿وَلْتَنظُرْ نَفْسٌۭ مَّا قَدَّمَتْ لِغَدٍۢ﴾. وخُتمت بأسماء الله.",
        a: "59:18" },

  60: { c: "Loyalty to your faith is not hostility to people",
        cAr: "الولاءُ لدينك ليس عداوةً للناس",
        w: "Revealed in the hardest possible circumstance — open war, and a companion who had leaked information to the enemy. And in that setting the line is still drawn: Allah does not forbid you from dealing kindly and justly with those who did not fight you over religion and did not drive you out.",
        wAr: "نزلت في أشدّ حالٍ يمكن: حربٌ قائمة، وصحابيٌّ أفشى خبرًا إلى العدوّ. وفي هذا السياق بعينه يُوضع الحدّ: ﴿لَّا يَنْهَىٰكُمُ ٱللَّهُ عَنِ ٱلَّذِينَ لَمْ يُقَٰتِلُوكُمْ فِى ٱلدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَٰرِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوٓا۟ إِلَيْهِمْ﴾.",
        a: "60:8",
        careful: "This is the verse both sides leave out — the one who wants Islam to look hostile, and the Muslim who wants a licence to be. It is not abrogated, and the scholars applied it to non-Muslim parents, neighbours, colleagues and business partners. The condition attached is fighting and expulsion, not disbelief.",
        carefulAr: "هذه الآية يُسقطها الفريقان: من يريد أن يُظهر الإسلام عدوانيًّا، ومن يريد رخصةً في العدوان. وليست منسوخة، وقد أعملها العلماء في الوالدين غير المسلمَين والجار والزميل والشريك. والشرط المذكور هو القتال والإخراج، لا الكفر." },

  61: { c: "Say it, then do it — or do not say it",
        cAr: "قُلْ ثم افعل، وإلا فلا تقل",
        w: "It opens on the gap between a man's words and his actions and calls it hateful in the sight of Allah. Then it puts the believers in a rank like a solid welded structure. A row only holds if every man in it does the thing he said he would.",
        wAr: "افتُتحت بالفجوة بين قول الرجل وفعله، وسمّتها ﴿كَبُرَ مَقْتًا عِندَ ٱللَّهِ﴾. ثم صفّت المؤمنين ﴿صَفًّۭا كَأَنَّهُم بُنْيَٰنٌۭ مَّرْصُوصٌۭ﴾. ولا يثبت الصفُّ إلا إذا فعل كلُّ واحدٍ فيه ما قال.",
        a: "61:2" },

  62: { c: "Carrying knowledge is not the same as having it",
        cAr: "حَمْلُ العلم ليس هو العلم",
        w: "The image is deliberately humiliating: those who were given the Torah and then did not carry it are like a donkey carrying volumes. Then Friday — leave the trade, come to the reminder, and afterwards go back out and seek His bounty. Neither half is dropped.",
        wAr: "الصورةُ مقصودةُ الإخجال: ﴿مَثَلُ ٱلَّذِينَ حُمِّلُوا۟ ٱلتَّوْرَىٰةَ ثُمَّ لَمْ يَحْمِلُوهَا كَمَثَلِ ٱلْحِمَارِ يَحْمِلُ أَسْفَارًۢا﴾. ثم الجمعة: ذَرِ البيع واحضُر الذكر، فإذا قُضيت فانتشر وابتغِ من فضل الله. ولم يُسقَط أحدُ الشطرين.",
        a: "62:5" },

  63: { c: "The danger inside, not outside",
        cAr: "الخطر من الداخل لا من الخارج",
        w: "A whole surah on the hypocrite — impressive to look at, pleasant to listen to, and hollow. “They are the enemy, so beware of them.”",
        wAr: "سورةٌ كاملةٌ في المنافق: تُعجبك أجسامهم، وإن يقولوا تسمع لقولهم، وهم خُشُبٌ مسنّدة. ﴿هُمُ ٱلْعَدُوُّ فَٱحْذَرْهُمْ﴾.",
        a: "63:4" },

  64: { c: "The day everyone finds out what the trade was worth",
        cAr: "يومَ يعلم كلُّ أحدٍ ما الذي رَبِحه",
        w: "At-Taghabun is a merchant's word — the moment the buyer and the seller discover which of them was cheated. The surah applies it to a whole life, and then says something people do not expect: your wealth and your children can be the test itself, not the reward for passing it.",
        wAr: "﴿ٱلتَّغَابُنِ﴾ لفظٌ من ألفاظ السوق: ساعةَ يتبيّن أيُّ المتبايعَين غُبن. أنزلته السورة على العمر كلّه، ثم قالت ما لا يتوقّعه الناس: ﴿إِنَّمَآ أَمْوَٰلُكُمْ وَأَوْلَٰدُكُمْ فِتْنَةٌۭ﴾ — فهي الابتلاء نفسه، لا جائزةَ النجاح فيه.",
        a: "64:15" },

  65: { c: "The way out comes from where you did not expect",
        cAr: "المخرج من حيث لا تحتسب",
        w: "Placed inside the rulings of divorce — the hardest, most bitter administrative moment in a life — is the promise of a way out and provision from where you did not reckon.",
        wAr: "في وسط أحكام الطلاق — أشقّ ما يمرّ بالمرء وأمرّه — وُضع وعدُ المخرج والرزق ﴿مِنْ حَيْثُ لَا يَحْتَسِبُ﴾.",
        a: "65:2" },

  66: { c: "Nobody is carried by who they are married to",
        cAr: "لا يُحمَل أحدٌ بمن هو تحته أو فوقه",
        w: "It corrects the Prophet's own household in public, and then closes with four women: the wife of Nuh and the wife of Lut, both lost while married to prophets, and Asiyah the wife of Pharaoh and Maryam, both saved. Two were as close to a prophet as a person can be. It did not carry them.",
        wAr: "عاتبت بيت النبوّة نفسه على رؤوس الناس، ثم خُتمت بأربع نسوة: امرأةِ نوحٍ وامرأةِ لوطٍ وقد هلكتا وهما تحت نبيَّين، وآسيةَ امرأةِ فرعون ومريمَ وقد نجتا. وكانت اثنتان أقربَ ما يكون من نبيّ، فما أغنى ذلك عنهما.",
        a: "66:6" },

  67: { c: "Living and dying are the exam, not the accident",
        cAr: "الحياة والموت امتحانٌ لا مصادفة",
        w: "He created death and life to test which of you is best in deed. Death is named first — it was created, it is not an absence.",
        wAr: "﴿خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا﴾. وقُدّم الموت، فهو مخلوقٌ لا عدم.",
        a: "67:2" },

  68: { c: "They called him mad; he was the measure",
        cAr: "رمَوه بالجنون، وهو الميزان",
        w: "The answer to the accusation is not a defence or an argument. It is a description, and it is enormous: you are upon a great moral character. Then a story about landowners who set out at dawn to harvest so that no poor person would see them and ask.",
        wAr: "لم يكن جوابُ التهمة دفاعًا ولا حجاجًا، وإنما وصفٌ عظيم: ﴿وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍۢ﴾. ثم قصّةُ أصحاب الجنّة، غدَوا مبكّرين ليجُدّوها ﴿وَلَا يَسْتَثْنُونَ﴾ لئلّا يراهم مسكينٌ فيسأل.",
        a: "68:4" },

  69: { c: "If he had made any of it up",
        cAr: "لو تقوّل شيئًا منه",
        w: "The surah describes the Hour, then turns on the messenger himself with the sharpest test in the Book: had he invented sayings against Us, We would have seized him by the right hand, then cut from him the aorta. A forger does not write that about himself and then recite it in public for twenty-three years.",
        wAr: "تصف السورةُ الساعة، ثم تلتفت إلى الرسول نفسه بأشدّ ما في الكتاب من امتحان: ﴿وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ ٱلْأَقَاوِيلِ ۝ لَأَخَذْنَا مِنْهُ بِٱلْيَمِينِ ۝ ثُمَّ لَقَطَعْنَا مِنْهُ ٱلْوَتِينَ﴾. والمفترِي لا يكتب هذا في نفسه ثم يتلوه على الناس ثلاثًا وعشرين سنة.",
        a: "69:44" },

  70: { c: "Man was made anxious — and one exception is carved out",
        cAr: "خُلق الإنسان هَلوعًا، واستُثني صنفٌ واحد",
        w: "Created restless: panicking when hardship touches him, withholding when good does. That is stated as a description of the species, not an accusation against individuals. Then the exception — except those who pray, and who stay on it.",
        wAr: "﴿إِنَّ ٱلْإِنسَٰنَ خُلِقَ هَلُوعًا ۝ إِذَا مَسَّهُ ٱلشَّرُّ جَزُوعًۭا ۝ وَإِذَا مَسَّهُ ٱلْخَيْرُ مَنُوعًا﴾ — وصفٌ للجنس لا تهمةٌ لأفراد. ثم الاستثناء: ﴿إِلَّا ٱلْمُصَلِّينَ ۝ ٱلَّذِينَ هُمْ عَلَىٰ صَلَاتِهِمْ دَآئِمُونَ﴾.",
        a: "70:19" },

  71: { c: "Ask forgiveness and watch what follows",
        cAr: "استغفروا وانظروا ما يعقب",
        w: "Nuh's argument is not a threat. Seek your Lord's forgiveness — He will send rain, increase your wealth and children, and give you gardens and rivers.",
        wAr: "لم تكن حجّة نوحٍ وعيدًا: ﴿ٱسْتَغْفِرُوا۟ رَبَّكُمْ إِنَّهُۥ كَانَ غَفَّارًۭا • يُرْسِلِ ٱلسَّمَآءَ عَلَيْكُم مِّدْرَارًۭا • وَيُمْدِدْكُم بِأَمْوَٰلٍۢ وَبَنِينَ﴾.",
        a: "71:10" },

  72: { c: "Another creation heard it and knew at once",
        cAr: "سمعه خلقٌ آخر فعرفه من فوره",
        w: "A group of jinn passed while it was being recited and said: we have heard a wondrous Quran, guiding to right conduct, so we believed in it. No miracle was shown to them and no argument was made. They heard it, and that was enough — which is itself a statement about the recitation.",
        wAr: "مرّ نفرٌ من الجنّ وهو يُتلى فقالوا: ﴿إِنَّا سَمِعْنَا قُرْءَانًا عَجَبًۭا ۝ يَهْدِىٓ إِلَى ٱلرُّشْدِ فَـَٔامَنَّا بِهِۦ﴾. لم تُعرض عليهم آيةٌ ولا حُوجّوا، وإنما سمعوه فكفى — وهذا في نفسه قولٌ في شأن هذا المتلوّ.",
        a: "72:1" },

  73: { c: "Before the message went out, the night was built",
        cAr: "قبل أن يخرج البلاغ، بُني الليل",
        w: "The first thing said to a man about to carry the heaviest weight ever placed on a human being was not a plan and not a strategy. It was: stand at night, nearly all of it, or half, and recite deliberately. The private half was constructed before the public half.",
        wAr: "أوّلُ ما قيل لرجلٍ سيحمل أثقل ما حُمِّله بشرٌ لم يكن خطّةً ولا تدبيرًا، وإنما: ﴿قُمِ ٱلَّيْلَ إِلَّا قَلِيلًۭا ۝ نِّصْفَهُۥٓ﴾ و﴿رَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا﴾. فبُني الشطر الخفيّ قبل الشطر الظاهر.",
        a: "73:20" },

  74: { c: "Now get up, and warn",
        cAr: "قُمْ فأنذِر",
        w: "The second command, and the private phase ends: rise, warn, magnify your Lord, purify your garments. And then the surah does something unusual — it walks you through the mind of the man who called it magic, thought and measured and frowned and turned away, step by deliberate step.",
        wAr: "الأمرُ الثاني، وبه ينتهي الطورُ الخاصّ: ﴿قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ ۝ وَثِيَابَكَ فَطَهِّرْ﴾. ثم تصنع السورةُ أمرًا لافتًا: تمشي بك في عقل الذي قال إنه سحر، ﴿إِنَّهُۥ فَكَّرَ وَقَدَّرَ﴾ ثم ﴿عَبَسَ وَبَسَرَ﴾، خطوةً خطوة.",
        a: "74:1" },

  75: { c: "Even your fingertips will be put back",
        cAr: "حتى بنانك يُعاد",
        w: "They doubted the bones could be gathered. The answer goes further than asked: yes, and We are able to restore his very fingertips.",
        wAr: "ظنّوا أن لن تُجمع العظام، فجاء الجواب فوق السؤال: ﴿بَلَىٰ قَٰدِرِينَ عَلَىٰٓ أَن نُّسَوِّىَ بَنَانَهُۥ﴾.",
        a: "75:4" },

  76: { c: "They gave away the food they wanted for themselves",
        cAr: "أطعموا الطعام وهم يشتهونه",
        w: "The people of the Garden are identified by one act, and the wording is exact: they give food, despite loving it, to the needy, the orphan and the captive. Not surplus. The thing they wanted. And the captive at that time was not a Muslim.",
        wAr: "عُرّف أهلُ الجنّة بفعلٍ واحد، واللفظ دقيق: ﴿وَيُطْعِمُونَ ٱلطَّعَامَ عَلَىٰ حُبِّهِۦ مِسْكِينًۭا وَيَتِيمًۭا وَأَسِيرًا﴾. لا من الفضل، بل ممّا يشتهون. والأسيرُ يومئذٍ لم يكن مسلمًا.",
        a: "76:8" },

  77: { c: "The same sentence, ten times, after ten different proofs",
        cAr: "الجملةُ نفسها عشرَ مرّاتٍ بعد عشرة أدلّة",
        w: "Woe that day to the deniers — repeated after each scene, and each repetition lands on a different piece of evidence: your own creation from a despised fluid, the earth made to hold the living and the dead, the mountains, the water you drink. The refrain never argues twice from the same thing.",
        wAr: "﴿وَيْلٌۭ يَوْمَئِذٍۢ لِّلْمُكَذِّبِينَ﴾ تتكرّر بعد كلّ مشهد، وكلُّ تكرارٍ يقع على دليلٍ آخر: خلقُكم من ماءٍ مهين، والأرض كِفاتًا للأحياء والأموات، والرواسي الشامخات، والماء الفرات. فلا تُعيد اللازمةُ الاحتجاج بشيءٍ مرّتين.",
        a: "77:20" },

  78: { c: "The thing they were arguing about is not actually in question",
        cAr: "الذي يتساءلون عنه ليس موضعَ شكّ",
        w: "It opens on a dispute and then answers it with the ordinary world: the earth spread as a bed, mountains as pegs, sleep made a rest, night a covering, seven strong ones above. And it ends on a sentence nobody forgets — the disbeliever saying: I wish I were dust.",
        wAr: "افتُتحت بخلافٍ ثم أجابت عنه بالدنيا المألوفة: ﴿ٱلْأَرْضَ مِهَٰدًۭا﴾، ﴿وَٱلْجِبَالَ أَوْتَادًۭا﴾، ﴿وَجَعَلْنَا نَوْمَكُمْ سُبَاتًۭا﴾، ﴿وَٱلَّيْلَ لِبَاسًۭا﴾، ﴿سَبْعًۭا شِدَادًۭا﴾. وخُتمت بجملةٍ لا تُنسى: ﴿يَٰلَيْتَنِى كُنتُ تُرَٰبًۢا﴾.",
        a: "78:40" },

  79: { c: "Two men, and one fear between them",
        cAr: "رجلان، والفرق بينهما خوفٌ واحد",
        w: "Pharaoh said I am your lord, the most high, and was seized. The other feared standing before his Lord and held his own soul back from what it wanted — and the Garden is his refuge. The surah sets them one after the other so the difference cannot be missed.",
        wAr: "قال فرعون: ﴿أَنَا۠ رَبُّكُمُ ٱلْأَعْلَىٰ﴾ فأُخذ. والآخر ﴿خَافَ مَقَامَ رَبِّهِۦ وَنَهَى ٱلنَّفْسَ عَنِ ٱلْهَوَىٰ﴾ فـ﴿ٱلْجَنَّةَ هِىَ ٱلْمَأْوَىٰ﴾. وقد قُرن بينهما ليظهر الفرق فلا يُخطأ.",
        a: "79:40" },

  80: { c: "The blind man was worth more than the chiefs",
        cAr: "الأعمى كان أولى من الأشراف",
        w: "He ﷺ turned from a poor blind man who came seeking to be taught, towards the leaders of Quraysh he was hoping would accept. Heaven corrected him about it — and did not correct him privately.",
        wAr: "أعرض ﷺ عن رجلٍ أعمى فقيرٍ جاء يتعلّم، وأقبل على صناديد قريشٍ يرجو إسلامهم. فعاتبته السماء في ذلك، ولم تعاتبه سرًّا.",
        a: "80:1",
        careful: "This is not a stain on him, and reading it as one misses the point. The correction was preserved and is recited until the end of time — which is itself proof that he concealed nothing of what was sent down, including the part that was against himself. A man inventing a religion does not publish his own reprimand.",
        carefulAr: "ليس هذا نقصًا فيه، ومن قرأه كذلك فقد أخطأ المقصود. فقد حُفظ العتاب ويُتلى إلى قيام الساعة — وهذا في نفسه دليلٌ أنه ما كتم شيئًا ممّا أُنزل، ولو كان عليه. والمفترِي لا يَنشر عتابَ نفسه." },

  81: { c: "The buried girl is the one who gets asked",
        cAr: "الموءودةُ هي التي تُسأل",
        w: "Among the signs of the end: when the infant girl buried alive is asked for what sin she was killed. The question is put to her, not to the men who did it — and that is far more terrible for them than an accusation would have been.",
        wAr: "من أشراط الآخرة: ﴿وَإِذَا ٱلْمَوْءُۥدَةُ سُئِلَتْ ۝ بِأَىِّ ذَنۢبٍۢ قُتِلَتْ﴾. وُجّه السؤال إليها لا إلى قاتليها — وهو عليهم أشدّ من التهمة لو وُجّهت.",
        a: "81:8" },

  82: { c: "What made you bold with Him?",
        cAr: "ما الذي جرّأك عليه؟",
        w: "The question is asked with His generosity attached to it: what deceived you concerning your Lord, the Generous? It is the generosity itself that people misread — the delay in punishment, the cover kept over their faults, taken as evidence that nobody was watching.",
        wAr: "جاء السؤال ومعه وصفُ الكرم: ﴿يَٰٓأَيُّهَا ٱلْإِنسَٰنُ مَا غَرَّكَ بِرَبِّكَ ٱلْكَرِيمِ﴾. فالكرمُ نفسه هو ما أساء الناس قراءته: إمهالٌ في العقوبة، وسترٌ على العيب، حُسبا دليلًا على أن لا رقيب.",
        a: "82:6" },

  83: { c: "It begins with two grams, and ends at a rusted heart",
        cAr: "يبدأ بمثقالٍ ينقص، وينتهي إلى قلبٍ صدئ",
        w: "It opens on a trader who takes full measure and gives short — a theft too small to prosecute. Then it traces the same man forward to a covering laid over the heart by what he kept earning. Small dishonesty is not small; it is the first coat.",
        wAr: "افتُتحت بتاجرٍ ﴿إِذَا ٱكْتَالُوا۟ عَلَى ٱلنَّاسِ يَسْتَوْفُونَ ۝ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ﴾ — سرقةٌ أصغر من أن يُقام بها حدّ. ثم تتبّعت الرجلَ نفسه إلى ﴿رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا۟ يَكْسِبُونَ﴾. فالخيانةُ الصغيرة ليست صغيرة، وإنما هي الطبقةُ الأولى.",
        a: "83:14" },

  84: { c: "You are already walking towards Him",
        cAr: "أنت ماضٍ إليه على كلّ حال",
        w: "Labouring towards your Lord laboriously, and you will meet Him. It is not phrased as a threat or a warning. It is a description of the direction every life is travelling in already, whether the person meant to set out or not.",
        wAr: "﴿يَٰٓأَيُّهَا ٱلْإِنسَٰنُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًۭا فَمُلَٰقِيهِ﴾. لم تُصَغ تهديدًا ولا نذارة، وإنما هي وصفُ الجهة التي يسير إليها كلُّ عمرٍ أصلًا، قصد صاحبُه أم لم يقصد.",
        a: "84:6" },

  85: { c: "They lost everything and the surah calls it the great triumph",
        cAr: "خسروا كلَّ شيء، وسمّته السورة الفوز الكبير",
        w: "A whole community was burned alive in a trench for one sentence — we believe in Allah. They were not rescued. And the surah names their outcome the great triumph, which quietly rewrites what winning means.",
        wAr: "أُحرقت جماعةٌ بأسرها في أخدودٍ من أجل كلمةٍ واحدة: ﴿أَن يُؤْمِنُوا۟ بِٱللَّهِ ٱلْعَزِيزِ ٱلْحَمِيدِ﴾. ولم يُنقذوا. وسمّت السورةُ عاقبتهم ﴿ٱلْفَوْزُ ٱلْكَبِيرُ﴾، فأعادت في هدوءٍ تعريفَ الفوز.",
        a: "85:14" },

  86: { c: "There is a keeper over every soul",
        cAr: "على كلّ نفسٍ حافظ",
        w: "Over every soul is a guardian. The surah then sends you back to look at where you came from — a fluid emerging from between the backbone and the ribs — and draws the conclusion: the One who did that is able to return you.",
        wAr: "﴿إِن كُلُّ نَفْسٍۢ لَّمَّا عَلَيْهَا حَافِظٌۭ﴾. ثم تردّك السورة إلى أصلك: ﴿مَّآءٍۢ دَافِقٍۢ ۝ يَخْرُجُ مِنۢ بَيْنِ ٱلصُّلْبِ وَٱلتَّرَآئِبِ﴾، وتُخرج النتيجة: ﴿إِنَّهُۥ عَلَىٰ رَجْعِهِۦ لَقَادِرٌۭ﴾.",
        a: "86:9" },

  87: { c: "You know the right answer and pick the other one",
        cAr: "تعرف الجوابَ الصحيح ثم تختار غيره",
        w: "The surah ends by naming the actual problem, and it is not ignorance and not confusion: rather, you prefer the worldly life, while the Hereafter is better and more lasting. The comparison is granted. The choice is made against it anyway.",
        wAr: "خُتمت السورةُ بتسمية الداء، وليس جهلًا ولا التباسًا: ﴿بَلْ تُؤْثِرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا ۝ وَٱلْـَٔاخِرَةُ خَيْرٌۭ وَأَبْقَىٰ﴾. فالمفاضلةُ مسلَّمة، والاختيارُ يقع على خلافها.",
        a: "87:16" },

  88: { c: "Look at the camel",
        cAr: "انظر إلى الإبل",
        w: "After the two faces on that Day — one downcast and toiling, one content — the argument turns to what is standing right in front of them: the camel, the sky, the mountains, the earth. The evidence offered is deliberately ordinary.",
        wAr: "بعد الوجهين يومئذٍ — ﴿خَٰشِعَةٌ عَّامِلَةٌۭ نَّاصِبَةٌۭ﴾ و﴿نَّاعِمَةٌۭ﴾ — تنصرف الحجّة إلى ما هو قائمٌ أمامهم: ﴿أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ﴾، والسماء، والجبال، والأرض. والدليلُ المعروض مألوفٌ عن قصد.",
        a: "88:17" },

  89: { c: "Wealth was never the sign that He was pleased",
        cAr: "ما كان الغنى قطُّ علامةَ الرضا",
        w: "'Ad, Thamud and Pharaoh are listed — each given more than the people around them, each taken. Then the assumption itself is corrected: when He tests a man with ease the man says my Lord has honoured me, and when He restricts his provision he says my Lord has humiliated me. Both readings are called wrong. Both were tests.",
        wAr: "عادٌ وثمودُ وفرعون: كلٌّ أُوتي ما لم يُؤتَ من حوله، وكلٌّ أُخذ. ثم صُحّحت المُسلَّمة نفسها: ﴿فَأَمَّا ٱلْإِنسَٰنُ إِذَا مَا ٱبْتَلَىٰهُ رَبُّهُۥ فَأَكْرَمَهُۥ وَنَعَّمَهُۥ فَيَقُولُ رَبِّىٓ أَكْرَمَنِ ۝ وَأَمَّآ إِذَا مَا ٱبْتَلَىٰهُ فَقَدَرَ عَلَيْهِ رِزْقَهُۥ فَيَقُولُ رَبِّىٓ أَهَٰنَنِ﴾ — والقراءتان مردودتان، وكلتا الحالين ابتلاء.",
        a: "89:15" },

  90: { c: "The uphill road is the one nobody takes",
        cAr: "العقبةُ هي التي لا يقتحمها أحد",
        w: "Freeing a neck, feeding on a day of hunger, an orphan or a poor person in the dust. The surah calls it the steep path — and says he did not attempt it.",
        wAr: "فكُّ رقبة، أو إطعامٌ في يوم مسغبة، يتيمًا ذا مقربةٍ أو مسكينًا ذا متربة. سمّتها السورة العقبة، وقالت: ﴿فَلَا ٱقْتَحَمَ ٱلْعَقَبَةَ﴾.",
        a: "90:11" },

  91: { c: "The soul was shown both roads, then handed to you",
        cAr: "أُلهمت النفسُ الطريقين، ثم سُلّمت إليك",
        w: "Eleven consecutive oaths — the longest run in the Quran — the sun, the moon, the day, the night, the sky, the earth, and then the soul itself. All of it to carry one sentence: He inspired it with its wickedness and its righteousness. Both were placed in you, and the outcome turns on which you grow.",
        wAr: "أحدَ عشرَ قسمًا متتابعة، وهي أطولُ سلسلةٍ في القرآن: الشمس والقمر والنهار والليل والسماء والأرض، ثم النفس نفسها. وكلُّ ذلك ليحمل جملةً واحدة: ﴿فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَىٰهَا﴾. فالأمران مُودَعان فيك، والعاقبةُ على أيّهما تُنمّي.",
        a: "91:9" },

  92: { c: "The fork in the road begins at the hand",
        cAr: "مفترقُ الطريق يبدأ من اليد",
        w: "One gives, fears Allah and confirms the best — he is eased towards ease. One withholds, thinks himself beyond need and denies the best — he is eased towards hardship. Two men, two directions, and what separates them is stated first as an act of the hand before it is an act of the heart.",
        wAr: "﴿فَأَمَّا مَنْ أَعْطَىٰ وَٱتَّقَىٰ ۝ وَصَدَّقَ بِٱلْحُسْنَىٰ ۝ فَسَنُيَسِّرُهُۥ لِلْيُسْرَىٰ﴾، ﴿وَأَمَّا مَنۢ بَخِلَ وَٱسْتَغْنَىٰ ۝ وَكَذَّبَ بِٱلْحُسْنَىٰ ۝ فَسَنُيَسِّرُهُۥ لِلْعُسْرَىٰ﴾. رجلان وطريقان، وأوّلُ ما فُرّق بينهما به فعلُ اليد قبل عمل القلب.",
        a: "92:5" },

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

  95: { c: "Made at the highest, and able to fall the furthest",
        cAr: "خُلق في أعلى تقويم، وقادرٌ على أسفل سفول",
        w: "We created man in the best of moulds, then returned him to the lowest of the low — except those who believed and did righteous deeds. The height is not decoration; it is the reason the fall is so far. Nothing else in creation was given that range.",
        wAr: "﴿لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍۢ ۝ ثُمَّ رَدَدْنَٰهُ أَسْفَلَ سَٰفِلِينَ ۝ إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ﴾. وليس العلوُّ زينة، وإنما هو سببُ بُعد المهوى. ولم يُعطَ هذا المدى شيءٌ سواه.",
        a: "95:4" },

  96: { c: "Read — and the thing that ruins a man is thinking he needs nothing",
        cAr: "اقرأ — والذي يُطغي المرءَ ظنُّه أنه مستغنٍ",
        w: "The first revelation is a command to read. The same surah then names the disease: man transgresses when he sees himself self-sufficient.",
        wAr: "أوّل ما نزل أمرٌ بالقراءة. ثم سمّت السورةُ نفسها الداء: ﴿إِنَّ ٱلْإِنسَٰنَ لَيَطْغَىٰٓ • أَن رَّءَاهُ ٱسْتَغْنَىٰٓ﴾.",
        a: "96:6" },

  97: { c: "One night worth more than a lifetime",
        cAr: "ليلةٌ خيرٌ من عمر",
        w: "Better than a thousand months — longer than most people live. And the surah never names the date. That silence is not an omission; it is the instruction, because a night that was fixed on the calendar would be worshipped once and the rest of the ten abandoned.",
        wAr: "﴿خَيْرٌۭ مِّنْ أَلْفِ شَهْرٍۢ﴾ — وهي أطولُ من أعمار أكثر الناس. ولم تُسمّ السورةُ ليلتَها. وليس السكوتُ إغفالًا، وإنما هو الأمر نفسه: فليلةٌ تُثبَّت في التقويم يُقام ليلُها وتُترك بقيّةُ العشر.",
        a: "97:3" },

  98: { c: "The whole religion, in one sentence",
        cAr: "الدينُ كلُّه في جملةٍ واحدة",
        w: "They were commanded only to worship Allah, sincere to Him in religion, upright, and to establish the prayer and give the zakah — and that is the upright religion. Everything else in the Book is the working out of that sentence.",
        wAr: "﴿وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ وَيُقِيمُوا۟ ٱلصَّلَوٰةَ وَيُؤْتُوا۟ ٱلزَّكَوٰةَ ۚ وَذَٰلِكَ دِينُ ٱلْقَيِّمَةِ﴾. وسائرُ ما في الكتاب تفصيلٌ لهذه الجملة.",
        a: "98:5" },

  99: { c: "Nothing is too small to count",
        cAr: "لا شيء أصغر من أن يُحسب",
        w: "An atom's weight of good, an atom's weight of evil — both seen. The surah exists to remove the idea of a deed too small to matter.",
        wAr: "مثقالُ ذرّةٍ خيرًا ومثقالُ ذرّةٍ شرًّا، كلاهما يُرى. وجاءت السورة لترفع توهّم أنّ ثمّ عملًا أصغر من أن يُعتدّ به.",
        a: "99:7" },

  100: { c: "He knows he is ungrateful, and that is the case against him",
         cAr: "يعلم أنه كنود، وتلك هي الحجّة عليه",
         w: "Man is ungrateful to his Lord — and then the surah adds something that closes the matter: and indeed, to that he is a witness. No outside accuser is required. The man's own knowledge of himself is entered as evidence.",
         wAr: "﴿إِنَّ ٱلْإِنسَٰنَ لِرَبِّهِۦ لَكَنُودٌۭ﴾ — ثم تزيد السورةُ ما يُغلق الباب: ﴿وَإِنَّهُۥ عَلَىٰ ذَٰلِكَ لَشَهِيدٌۭ﴾. فلا يُحتاج إلى شاهدٍ من خارج، وإنما يُقدَّم علمُ الرجل بنفسه دليلًا.",
         a: "100:6" },

  101: { c: "It comes down to a weight",
         cAr: "يرجع الأمرُ إلى وزن",
         w: "Whose scales are heavy is in a pleasant life; whose scales are light — his mother is an abyss. Not how much was done, and not how it looked to anyone: what it weighed. The surah gives no other measure.",
         wAr: "﴿فَأَمَّا مَن ثَقُلَتْ مَوَٰزِينُهُۥ ۝ فَهُوَ فِى عِيشَةٍۢ رَّاضِيَةٍۢ ۝ وَأَمَّا مَنْ خَفَّتْ مَوَٰزِينُهُۥ ۝ فَأُمُّهُۥ هَاوِيَةٌۭ﴾. لا كثرةَ العمل ولا صورتَه عند الناس، وإنما ثِقلَه. ولم تذكر السورةُ ميزانًا سواه.",
         a: "101:6" },

  102: { c: "Piling things up distracts you until the graves",
        cAr: "التكاثر يُلهي حتى المقابر",
        w: "The competition to have more occupies a person right up to the point where he is visiting cemeteries — and only then does he see.",
        wAr: "﴿أَلْهَىٰكُمُ ٱلتَّكَاثُرُ • حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ﴾. يشغله التنافس في الجمع إلى أن يبلغ زيارة القبور، وعندها يرى.",
        a: "102:1" },

  103: { c: "Everyone is losing, except four",
         cAr: "الناسُ كلُّهم في خُسر، إلا أربعة",
         w: "Ash-Shafi'i said that if people considered only this surah, it would be enough for them. Loss is set as the default state of the species; the exception has four conditions — and two of them cannot be done alone, because they involve telling other people the truth and telling them to hold on.",
         wAr: "قال الشافعيّ: لو تدبّر الناسُ هذه السورة لكفتهم. جُعل الخُسرُ هو الأصل في الجنس، والاستثناءُ بأربعة شروط — واثنان منها لا يُفعلان وحدك، لأنهما ﴿وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ﴾.",
         a: "103:3" },

  104: { c: "The mockery and the money are the same illness",
         cAr: "السخريةُ والمالُ داءٌ واحد",
         w: "The one who scorns and slanders is described, in the very next breath, as gathering wealth and counting it. The surah joins the two deliberately: contempt for people and confidence in money are not two faults but one, and the second is what funds the first.",
         wAr: "الذي يهمز ويلمز يُوصف في النفَس التالي بأنه ﴿جَمَعَ مَالًۭا وَعَدَّدَهُۥ﴾. وقد قُرن بينهما عمدًا: فاحتقارُ الناس والثقةُ بالمال ليسا عيبين، وإنما هما عيبٌ واحد، والثاني هو الذي يُموّل الأوّل.",
         a: "104:1" },

  105: { c: "The House has an Owner, and He defended it Himself",
         cAr: "للبيت ربٌّ، وقد تولّى حمايته بنفسه",
         w: "An army with elephants came to pull the Ka'bah down, and Abd al-Muttalib did not raise a force. He said the House has a Lord who will protect it — and then the birds came. The surah is that sentence, confirmed.",
         wAr: "جاء جيشٌ بالفيل ليهدم الكعبة، فلم يجمع عبد المطّلب جندًا، وقال: للبيت ربٌّ يحميه. ثم جاء الطيرُ الأبابيل. فالسورةُ هي تلك الجملة وقد تحقّقت.",
         a: "105:1" },

  106: { c: "You were fed and made safe — by whom?",
         cAr: "أُطعمتم وأُومنتم، فمِمَّن؟",
         w: "It is joined to the elephant on purpose. The winter and summer caravans that fed Quraysh were only safe because the House they lived beside had been defended. So the conclusion is drawn for them: let them worship the Lord of this House.",
         wAr: "وُصلت بالفيل عن قصد: فرحلتا الشتاء والصيف اللتان أطعمتا قريشًا إنما أمِنتا لأنّ البيت الذي جاوروه قد مُنع. فأُخرجت لهم النتيجة: ﴿فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ﴾.",
         a: "106:3" },

  107: { c: "A man can pray and still be called a denier",
         cAr: "قد يُصلّي الرجلُ وهو مكذّب",
         w: "The one who denies the religion is identified not by a creed he holds but by what he does: he pushes the orphan away and does not urge feeding the poor. Then, in the same short surah, woe to those who pray — and are heedless of it.",
         wAr: "لم يُعرَّف المكذّبُ بالدين بعقيدةٍ يعتقدها، وإنما بفعلٍ يفعله: ﴿فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ ۝ وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ﴾. ثم في السورة القصيرة نفسها: ﴿فَوَيْلٌۭ لِّلْمُصَلِّينَ ۝ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ﴾.",
         a: "107:4",
         careful: "It is not saying prayer is worthless, and it is not licence to abandon it. The complaint is against a prayer that leaves the man who performs it willing to shove an orphan and unwilling to lend out a household bowl. The surah measures the prayer by what it did to him.",
         carefulAr: "ليس فيها أنّ الصلاة لا قيمة لها، ولا رخصةٌ في تركها. وإنما العيبُ على صلاةٍ تترك صاحبَها يدُعّ اليتيم ويمنع ﴿ٱلْمَاعُونَ﴾. فقاست السورةُ الصلاةَ بأثرها فيه." },

  108: { c: "They said he was cut off; he was given a river",
         cAr: "قالوا أبتر، فأُعطي نهرًا",
         w: "Three verses — the shortest surah in the Book — answering a man who mocked him for having no surviving son and said his line would end with him. The answer was abundance, and a command to pray and sacrifice. And the man who mocked cannot now be named by anyone except through this surah.",
         wAr: "ثلاثُ آيات، وهي أقصر سورةٍ في الكتاب، جوابًا لمن عيّره بموت بنيه وقال إنه أبتر ينقطع ذكره. فكان الجوابُ الكوثرَ، والأمرَ بالصلاة والنحر. وأمّا الشانئُ فلا يعرفه أحدٌ اليوم إلا من هذه السورة.",
         a: "108:3" },

  109: { c: "There is a line, and it is not rudeness to keep it",
        cAr: "ثمّ حدٌّ، وليس حفظه جفاءً",
        w: "It is the shortest possible statement of a boundary — said calmly, with no insult in it, and no negotiation either.",
        wAr: "أوجزُ ما يُقال في تقرير حدٍّ: قيلت في هدوء، ليس فيها شتمٌ ولا مساومة.",
        a: "109:6" },

  110: { c: "When it finally goes right, ask forgiveness",
        cAr: "إذا تمّ لك الأمر فاستغفر",
        w: "Victory arrives, people enter in crowds — and the instruction is not to celebrate but to glorify and seek forgiveness. The companions understood it as a farewell.",
        wAr: "جاء النصر ودخل الناس أفواجًا، فكان الأمر لا بالفرح بل: ﴿فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ﴾. وفهم الصحابة أنها نَعْيٌ.",
        a: "110:3" },

  111: { c: "A prophecy his enemy could have destroyed by pretending",
         cAr: "نبوءةٌ كان عدوُّه يستطيع نقضها بالتظاهر",
         w: "It declares that Abu Lahab will enter a blazing fire — and it was recited while the man was alive, free, wealthy and looking for any way to discredit it. For roughly ten years all he had to do was say the words I accept, truthfully or not, and the Quran would have been broken in public. He never did.",
         wAr: "أعلنت أنّ أبا لهبٍ سيصلى نارًا ذات لهب — وتُليت والرجلُ حيٌّ طليقٌ موسرٌ يتلمّس أيَّ سبيلٍ لإبطالها. وكان يكفيه نحوَ عشر سنين أن يقول: أسلمتُ، صادقًا أو كاذبًا، فيُنقض القرآن على رؤوس الناس. فما فعل.",
         a: "111:1" },

  112: { c: "Who He is, with every comparison taken away",
         cAr: "من هو، وقد نُزع عنه كلُّ شبيه",
         w: "They asked him to describe his Lord to them, and this came down: One; the One everything turns to and who needs nothing; who did not father and was not fathered; and to whom nothing at all is equal. Four lines, and each removes a way people had gone wrong before.",
         wAr: "سألوه أن ينسب لهم ربَّه فنزلت: ﴿أَحَدٌ﴾، ﴿ٱلصَّمَدُ﴾، ﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾، ﴿وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ﴾. أربعةُ أسطر، كلُّ سطرٍ منها يقطع بابًا ضلّ الناسُ منه قبلُ.",
         a: "112:1" },

  113: { c: "Refuge from what is outside you",
         cAr: "استعاذةٌ ممّا هو خارجك",
         w: "The harms are named one by one rather than left as a general fear: the evil of what He created, of darkness when it settles, of those who blow on knots, and of an envier when he envies. A named harm can be faced; a vague dread cannot.",
         wAr: "سُمّيت الشرورُ واحدًا واحدًا ولم تُترك خوفًا مبهمًا: ﴿مِن شَرِّ مَا خَلَقَ﴾، ﴿وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ﴾، ﴿وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ﴾، ﴿وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾. والشرُّ المسمّى يُواجَه، وأمّا الوجَلُ المبهم فلا.",
         a: "113:1" },

  114: { c: "Refuge from what gets inside you",
         cAr: "استعاذةٌ ممّا يدخل فيك",
         w: "Three names are used where the previous surah used one — Lord, King, God — and all of it against a single enemy who whispers and then withdraws. The last words of the Book are about a thought you never noticed arriving.",
         wAr: "استُعملت ثلاثةُ أسماء حيث اكتفت السورةُ قبلها بواحد: ﴿رَبِّ ٱلنَّاسِ ۝ مَلِكِ ٱلنَّاسِ ۝ إِلَٰهِ ٱلنَّاسِ﴾، وذلك كلُّه في عدوٍّ واحد ﴿ٱلْوَسْوَاسِ ٱلْخَنَّاسِ﴾. فآخرُ ما في الكتاب خاطرٌ لم تشعر بدخوله.",
         a: "114:4" }
};

/* The surah's anchor verse reference, for display. */
function iitwConceptFor(n) {
  return (typeof SURAH_CONCEPTS !== "undefined" && SURAH_CONCEPTS[n]) ? SURAH_CONCEPTS[n] : null;
}
function iitwConceptCount() {
  return (typeof SURAH_CONCEPTS !== "undefined") ? Object.keys(SURAH_CONCEPTS).length : 0;
}
