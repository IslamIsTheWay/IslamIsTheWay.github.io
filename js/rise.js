/* ============================================================
   THE_RISE — أنعود؟
   ------------------------------------------------------------
   Will this ummah rise again after the state it is in?

   This exists because the owner asked for it in almost these
   words: people have lost hope after everything that has
   happened, and they half-remember a hadith about the ummah
   coming back — and about rising, then falling again, and then
   the end. He is remembering real narrations, and the answer is
   yes, but the evidence has to be sorted carefully.

   WHY THIS SUBJECT NEEDS MORE DISCIPLINE THAN ANY OTHER ON THE
   SITE. Nothing attracts fabricated material like prophecy about
   the future of the ummah, because it is where hope and politics
   meet. So the arc below is built, deliberately, on what is
   AGREED UPON wherever such a text exists:

     the diagnosis        Abu Dawud — outside the two Sahihs
     the standing promise al-Bukhari 3116 — agreed upon
     the group that holds Sahih Muslim — Jabir
     the shape of history al-Bukhari 3606 — agreed upon
     what to do in it     the same hadith, same breath
     the promised return  Musnad Ahmad — outside the two Sahihs
     the peak, then down  al-Bukhari 2222 + Sahih Muslim

   Only ONE link in the chain rests on a narration outside the
   two Sahihs and that link is the one people most want to hear,
   so it is marked hardest of all. The hope on this page does not
   depend on it: blocks 2, 3 and 4 are agreed upon on their own.

   ON THE MAHDI. Deliberately not built into the argument. The
   narrations are outside the two Sahihs, the field is full of
   forgery and of people who have claimed the title, and the
   owner's readers do not need another thing to wait for. It is
   mentioned once, honestly, in the notEstablished block.

   RENDERED ON TWO PAGES — golden.html (after the mirror, because
   that page is about a rise that already happened) and
   judgement.html (before the signs, because that page is about
   how it ends). Same data, one file, so they cannot drift.
   ============================================================ */

const THE_RISE = {
  title: "Will we rise again? — what was actually promised",
  titleAr: "هل نعود؟ — ما الذي وُعدنا به حقًّا",

  lead: "People have lost hope, and they half-remember a hadith about the ummah coming back. The narrations are real. Here is the whole arc, graded honestly: where we are, what was promised, what comes after the return — and what a person does tonight.",
  leadAr: "فقد الناسُ الرجاء، وفي أذهانهم شيءٌ من حديثٍ في عودة هذه الأمّة. والأخبار ثابتة. وهذا هو السياق كلُّه مُرتَّبًا بدرجاته: أين نحن، وبماذا وُعدنا، وماذا بعد العودة — وماذا يصنع المرء الليلة.",

  /* Hard words, explained plainly. Asked for directly: a reader in
     Arabic may not know أعور or غثاء any more than an English reader
     knows what "froth of a torrent" is doing in a hadith. */
  words: [
    { w: "غُثَاء", t: "ghutha'", en: "The scum and rubbish a flood carries on its surface — leaves, twigs, foam. It moves fast, it covers a lot of ground, and it weighs nothing. That is the whole image: not few, not small — WEIGHTLESS.", ar: "ما يحمله السيل على وجهه من الزَّبَد والعيدان والورق. يمضي سريعًا ويغطّي مساحةً واسعة ولا وزن له. وهذه هي الصورة كلُّها: لا قلّةٌ ولا صِغَر، وإنما **انعدامُ الوزن**." },
    { w: "الوَهَن", t: "al-wahn", en: "Weakness — but the Prophet ﷺ did not leave it to be guessed at. He was asked directly and defined it himself in four words: love of this world, and hatred of death.", ar: "الضعف — ولم يترك النبيُّ ﷺ اللفظ للظنّ، بل سُئل عنه فحدَّه بنفسه: **حبُّ الدنيا وكراهيةُ الموت**." },
    { w: "دَخَن", t: "dakhan", en: "Smoke, or the smokiness in a fire that will not burn clean. Used for good that has something impure mixed into it — it works, but it does not run clear.", ar: "الدخان، وكدورةُ النار التي لا تصفو. يُستعمل للخير يخالطه ما ليس منه: يعمل ولا يصفو." },
    { w: "الطَّائِفَة", t: "at-ta'ifah", en: "A group, a portion — not the whole ummah. The promise is deliberately about a PART of it that never lets go, not about everyone being upon the truth at once.", ar: "القطعةُ من الشيء والجماعةُ منه — لا الأمّةُ كلُّها. والوعدُ مقصودٌ في **بعضها** الذي لا يترك الحقّ، لا في أن يكون الجميع عليه في وقتٍ واحد." },
    { w: "مُلْكًا عَاضًّا", t: "mulkan 'addan", en: "Literally “biting kingship” — rule that clamps down and holds on, the way a jaw bites. Kingship that is inherited and gripped rather than consulted over.", ar: "من العَضّ، أي مُلكٌ يُعَضّ عليه ويُمسَك كما يُمسك الفكُّ، يُتوارَث ويُقبَض عليه لا يُشاوَر فيه." },
    { w: "مُلْكًا جَبْرِيَّة", t: "mulkan jabriyyah", en: "Rule by compulsion — from jabr, forcing. Government that no longer even claims consent.", ar: "من الجَبْر، وهو الإكراه. مُلكٌ لم يعد يدّعي رضًا أصلًا." },
    { w: "أَعْوَر", t: "a'war", en: "Blind in ONE eye — not blind altogether. It is the word for a person who has lost the sight of one eye while the other still sees. This is why the Dajjal's defect is itself the argument against him: he claims to be your Lord, and cannot repair his own eye.", ar: "الذي ذهب بصرُ إحدى عينيه والأخرى تُبصر — لا الأعمى المطلق. ولهذا كان عيبُه هو الحجّةَ عليه: يدّعي أنه ربُّك وهو لا يقدر أن يُصلح عينَه." }
  ],

  blocks: [
    {
      id: "rise-where",
      h: "1 · First, where we actually are — and he named it exactly",
      hAr: "١ · أوّلًا: أين نحن فعلًا — وقد سمّاه بدقّة",
      en: "Start with the diagnosis, because hope built on pretending is not hope.\n\nThawban narrated that he ﷺ said the nations would soon call one another against this ummah as diners call each other to a dish. Someone asked: will that be because we are few that day? He said no — you will be MANY that day, but you will be froth, like the froth of a torrent.\n\nStop at that. He removed the excuse before anyone could use it. The problem was never going to be the numbers. There are almost two billion Muslims. The hadith says that is not the missing thing.\n\nThen he said Allah will take the awe of you out of your enemy's chest and cast WAHN into your hearts. They asked what wahn is. He did not leave it vague: love of this world, and hatred of death.\n\nThat is the diagnosis, and it is internal. Not a conspiracy, not the weapons, not the borders — two things inside a chest.",
      ar: "ابدأ بالتشخيص، فإنّ رجاءً مبنيًّا على المُداراة ليس رجاءً.\n\nروى ثوبان رضي الله عنه أنه ﷺ قال: **يُوشِكُ الْأُمَمُ أَنْ تَدَاعَى عَلَيْكُمْ كَمَا تَدَاعَى الْأَكَلَةُ إِلَى قَصْعَتِهَا**. فقال قائل: أومِن قلّةٍ نحن يومئذٍ؟ قال: **بَلْ أَنْتُمْ يَوْمَئِذٍ كَثِيرٌ، وَلَكِنَّكُمْ غُثَاءٌ كَغُثَاءِ السَّيْلِ**.\n\nقف هنا. فقد رفع العذر قبل أن يتعلّق به أحد: ما كانت المشكلةُ في العدد يومًا. فالمسلمون قرابةُ ملياري نفس، والحديثُ يقول إنّ هذا ليس هو الناقص.\n\nثم قال: **وَلَيَنْزِعَنَّ اللَّهُ مِنْ صُدُورِ عَدُوِّكُمُ الْمَهَابَةَ مِنْكُمْ، وَلَيَقْذِفَنَّ اللَّهُ فِي قُلُوبِكُمُ الْوَهَنَ**. فسألوه: وما الوهن؟ فلم يُبهم: **حُبُّ الدُّنْيَا وَكَرَاهِيَةُ الْمَوْتِ**.\n\nفهذا هو التشخيص، وهو **داخليّ**: لا مؤامرةً ولا سلاحًا ولا حدودًا، وإنما شيئان في صدر.",
      quote: "بَلْ أَنْتُمْ يَوْمَئِذٍ كَثِيرٌ، وَلَكِنَّكُمْ غُثَاءٌ كَغُثَاءِ السَّيْلِ",
      ref: "Sunan Abi Dawud 4297 — Thawban. OUTSIDE the two Sahihs; widely accepted and graded Sahih by al-Albani",
      strength: "hadith",
      plain: "In plain words: he said a day would come when everyone piles on this ummah, and someone asked if that was because we would be few.\n\nHe said no — you will be MANY. But you will be like the foam on top of a flood: covers a lot, weighs nothing.\n\nThen he said the fear of you leaves your enemy, and something called wahn gets put in your hearts. They asked what that is. He answered in four words: loving this world, and hating death.\n\nSo the problem is not that we are outnumbered. He said so directly.",
      plainAr: "بكلامٍ بسيط: أخبر أنّ زمانًا يأتي تتداعى فيه الأمم على هذه الأمّة، فسأله سائل: أمِن قلّةٍ نحن؟\n\nفقال: لا، بل أنتم **كثير**. ولكنكم كزَبَد السيل: يغطّي كثيرًا ولا يزن شيئًا.\n\nثم قال إنّ هيبتكم تُنزع من صدر عدوّكم، ويُقذف في قلوبكم شيءٌ اسمه الوهن. فسألوه ما هو؟ فأجاب بأربع كلمات: **حبّ الدنيا وكراهية الموت**.\n\nفليست المشكلة أنّا أقلُّ عددًا. قال ذلك صريحًا."
    },
    {
      id: "rise-promise",
      h: "2 · The promise that has never once lapsed — and this one is agreed upon",
      hAr: "٢ · الوعدُ الذي لم ينقطع قطّ — وهذا متّفقٌ عليه",
      en: "Now the other side, and notice its grade: this is in Sahih al-Bukhari and Sahih Muslim both.\n\nHe ﷺ said: this ummah will not cease being victorious over those who oppose them, until the command of Allah comes — AND THEY ARE STILL VICTORIOUS.\n\nRead the last clause again. The promise is not that we win eventually. It is that the ummah is still standing at the end. There is no verse and no hadith anywhere that says this ummah is wiped out, absorbed, or ended before the Hour. Every other nation in the Quran that rejected its prophet was finished off. This one was told the opposite, and told it in the two most rigorously checked books we have.\n\nSo the honest position is not optimism. It is that despair about the SURVIVAL of this ummah is a position with no text behind it, and against an agreed-upon one.",
      ar: "ثم الجهةُ الأخرى، وانظر درجتها: هذا في صحيح البخاريّ وصحيح مسلم جميعًا.\n\nقال ﷺ: **وَلَا تَزَالُ هَذِهِ الْأُمَّةُ ظَاهِرِينَ عَلَى مَنْ خَالَفَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ وَهُمْ ظَاهِرُونَ**.\n\nأعِد قراءة آخر الجملة. فليس الوعدُ أنّا نغلب في النهاية، وإنما أنّ الأمّة **قائمةٌ حين يأتي الأمر**. وليس في الكتاب ولا في السنّة نصٌّ واحدٌ يقول إنّ هذه الأمّة تُستأصل أو تُمحى أو تنتهي قبل الساعة. وكلُّ أمّةٍ في القرآن كذّبت نبيَّها أُهلكت، وهذه قيل لها ضدُّ ذلك، وقيل لها في أدقّ كتابين عندنا.\n\nفالموقف المنصف ليس تفاؤلًا، وإنما أنّ اليأس من **بقاء** هذه الأمّة قولٌ لا نصّ له، وفي مقابله نصٌّ متّفقٌ عليه.",
      quote: "وَلَا تَزَالُ هَذِهِ الْأُمَّةُ ظَاهِرِينَ عَلَى مَنْ خَالَفَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ وَهُمْ ظَاهِرُونَ",
      ref: "Sahih al-Bukhari 3116 — Mu'awiyah ibn Abi Sufyan; also Sahih Muslim — SAHIH, AGREED UPON",
      strength: "hadith",
      plain: "In plain words: this is in Bukhari AND Muslim, which is the highest grade there is.\n\nHe said this ummah keeps prevailing over those who oppose it until Allah's command comes — and they are STILL prevailing when it does.\n\nThe important bit is the ending. It does not say we win one day. It says we are still here at the end.\n\nEvery nation in the Quran that rejected its prophet was destroyed. This one was told it will not be. So thinking the ummah is finished is not pessimism — it is a claim with nothing behind it, against a hadith of the highest grade.",
      plainAr: "بكلامٍ بسيط: هذا في البخاريّ **ومسلم** معًا، وهي أعلى درجة.\n\nقال: لا تزال هذه الأمّة ظاهرين على من خالفهم حتى يأتي أمر الله **وهم ظاهرون**.\n\nوالمهمّ هو الخاتمة: لم يقل إنّا ننتصر يومًا ما، بل قال إنّا **باقون حين يأتي الأمر**.\n\nوكلُّ أمّةٍ في القرآن كذّبت نبيَّها أُهلكت، وهذه قيل لها إنها لا تُهلك. فالقولُ بأنّ الأمّة انتهت ليس تشاؤمًا، وإنما دعوى لا سند لها في مقابل حديثٍ في أعلى الدرجات."
    },
    {
      id: "rise-group",
      h: "3 · A group holds on right up to the end — and look what happens when Isa arrives",
      hAr: "٣ · وطائفةٌ تثبت إلى آخر الأمر — وانظر ما يقع حين ينزل عيسى",
      en: "Jabir ibn Abdullah heard him ﷺ say: a group of my ummah will not cease fighting upon the truth, victorious, until the Day of Resurrection.\n\nNotice the word: a GROUP — ta'ifah, a portion. Not the whole ummah at once. The promise was never that everyone would be upon it; it is that the line is never entirely broken. In the worst century there has always been a part of it holding.\n\nAnd then the same hadith continues into something worth sitting with. Isa son of Maryam descends. Their commander — an ordinary man from this ummah — says to him: come forward, lead us in prayer.\n\nAnd Isa عليه السلام says NO. He says: some of you are commanders over others. And the narration gives the reason in three words: TAKRIMATA-LLAHI HADHIHI-L-UMMAH — as an honouring by Allah of this ummah.\n\nRead that again if you are someone who has lost hope. At the highest moment in the history of this world, a prophet of Allah steps back and lets a man from this ummah lead the prayer, and the text says out loud that Allah did it to honour us. That is what is waiting at the end of the line you are currently standing in.",
      ar: "سمع جابر بن عبد الله رضي الله عنهما النبيَّ ﷺ يقول: **لَا تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي يُقَاتِلُونَ عَلَى الْحَقِّ ظَاهِرِينَ إِلَى يَوْمِ الْقِيَامَةِ**.\n\nوانظر اللفظ: **طائفة**، أي قطعةٌ منها لا الأمّةُ كلُّها في وقتٍ واحد. فما كان الوعد أن يكون الجميع عليه، وإنما ألّا ينقطع الخيط البتّة. ففي أسوأ القرون كان منها دائمًا من يُمسك.\n\nثم يمضي الحديثُ نفسه إلى ما يستحقّ الوقوف: ينزل عيسى ابن مريم عليه السلام، فيقول له أميرُهم — رجلٌ من هذه الأمّة —: **تَعَالَ صَلِّ لَنَا**.\n\nفيقول عيسى: **لَا**. ويقول: **إِنَّ بَعْضَكُمْ عَلَى بَعْضٍ أُمَرَاءُ**. وتذكر الروايةُ العلّة في كلمتين: **تَكْرِمَةَ اللَّهِ هَذِهِ الْأُمَّةَ**.\n\nأعِد القراءة إن كنتَ ممّن فقد الرجاء: ففي أعظم لحظةٍ في تاريخ هذه الدنيا يتأخّر نبيٌّ من أنبياء الله ويُقدّم رجلًا من هذه الأمّة يؤمّ الناس، ويُصرّح النصُّ بأنّ الله فعل ذلك **إكرامًا لها**. هذا هو الذي ينتظر في آخر الصفّ الذي تقف فيه الآن.",
      quote: "لَا. إِنَّ بَعْضَكُمْ عَلَى بَعْضٍ أُمَرَاءُ — تَكْرِمَةَ اللَّهِ هَذِهِ الْأُمَّةَ",
      ref: "Sahih Muslim, Book of Faith — Jabir ibn Abdullah",
      strength: "hadith",
      plain: "In plain words: he said a GROUP from this ummah keeps holding to the truth and stays victorious until the Day of Resurrection. A group — not everybody. So the line never fully breaks, even when most people let go.\n\nThen the same hadith says something you should not skip. Isa عليه السلام comes down. The Muslims' leader — a normal man from this ummah — tells him: you lead the prayer.\n\nAnd Isa refuses. He says: no, some of you are leaders over others. And the hadith tells you exactly why: because Allah is honouring this ummah.\n\nIf you feel like this ummah is finished, sit with that. A prophet of Allah steps back so that one of us can lead, and the reason given is that Allah wanted to honour us.",
      plainAr: "بكلامٍ بسيط: قال إنّ **طائفة** من هذه الأمّة تبقى على الحقّ ظاهرةً إلى يوم القيامة. طائفةً لا الجميع. فالخيط لا ينقطع كلَّه ولو تخلّى أكثر الناس.\n\nثم يقول الحديثُ نفسه ما لا ينبغي تخطّيه: ينزل عيسى عليه السلام، فيقول له أميرُ المسلمين — رجلٌ عاديّ من هذه الأمّة —: تقدَّم فصلِّ بنا.\n\nفيأبى عيسى ويقول: لا، إنّ بعضكم على بعضٍ أمراء. ويذكر الحديثُ السبب صريحًا: **تكرمةَ الله هذه الأمّة**.\n\nفإن كنت تشعر أنّ هذه الأمّة انتهت فقف عند هذا: نبيٌّ من أنبياء الله يتأخّر ليتقدّم واحدٌ منّا، والعلّةُ المذكورة أنّ الله أراد أن يُكرمنا."
    },
    {
      id: "rise-shape",
      h: "4 · The shape he gave history — good, then evil, then good with smoke in it",
      hAr: "٤ · الصورةُ التي رسمها للتاريخ: خيرٌ ثم شرّ ثم خيرٌ فيه دَخَن",
      en: "This is the part the owner was remembering, and it is agreed upon — al-Bukhari and Muslim.\n\nHudhayfah ibn al-Yaman said: people used to ask the Messenger of Allah ﷺ about the good, and I used to ask him about the evil, out of fear that it would reach me. Then he asked, and the answers came in a chain:\n\n· We were in ignorance and evil, then Allah brought us this good. Is there evil after this good? — YES.\n· Is there good after that evil? — YES, AND IN IT IS DAKHAN. Smoke. What is its smoke? — “A people guiding by other than my guidance; you will recognise some of it and reject some.”\n· Is there evil after that good? — YES. Callers at the gates of Hell; whoever answers them, they throw him in.\n· Describe them for us. — “They are from our own skin, and they speak our tongue.”\n\nSo the shape is not a straight line down and it is not a straight line up. It is good, then a fall, then a partial recovery that is not clean, then a worse danger — and the worst danger is described as coming from INSIDE, speaking Arabic, looking like us.\n\nThis is exactly the pattern he asked about: it comes back, and then there is more after it. History in this religion is not a decline chart and it is not progress. It is waves, and the instruction is about what you hold on to in each one.",
      ar: "هذا هو الموضع الذي كان في ذهن صاحب الموقع، وهو متّفقٌ عليه: البخاريّ ومسلم.\n\nقال حذيفة بن اليمان رضي الله عنه: كان الناس يسألون رسول الله ﷺ عن الخير، وكنتُ أسأله عن الشرّ مخافةَ أن يُدركني. ثم سأل، فجاء الجواب سلسلةً:\n\n· كنّا في جاهليّةٍ وشرّ فجاءنا الله بهذا الخير، فهل بعد هذا الخير من شرّ؟ — **نَعَمْ**.\n· وهل بعد ذلك الشرّ من خير؟ — **نَعَمْ، وَفِيهِ دَخَنٌ**. وما دخنُه؟ — **قَوْمٌ يَهْدُونَ بِغَيْرِ هَدْيِي، تَعْرِفُ مِنْهُمْ وَتُنْكِرُ**.\n· فهل بعد ذلك الخير من شرّ؟ — **نَعَمْ، دُعَاةٌ إِلَى أَبْوَابِ جَهَنَّمَ، مَنْ أَجَابَهُمْ إِلَيْهَا قَذَفُوهُ فِيهَا**.\n· صِفهم لنا. — **هُمْ مِنْ جِلْدَتِنَا، وَيَتَكَلَّمُونَ بِأَلْسِنَتِنَا**.\n\nفالصورة ليست خطًّا نازلًا ولا خطًّا صاعدًا، وإنما: خيرٌ، ثم سقوط، ثم نهوضٌ فيه كدَر، ثم خطرٌ أشدّ — وأشدُّ الخطر موصوفٌ بأنه من **الداخل**، يتكلّم بلساننا ويُشبهنا.\n\nوهذا بعينه ما سأل عنه: تعود، ثم يكون بعدها شيء. فالتاريخُ في هذا الدين ليس منحنى انحدارٍ ولا تقدّمًا مطّردًا، وإنما هو موجات، والأمرُ فيها عمّا تُمسكه في كلّ موجة.",
      quote: "نَعَمْ، وَفِيهِ دَخَنٌ ... هُمْ مِنْ جِلْدَتِنَا وَيَتَكَلَّمُونَ بِأَلْسِنَتِنَا",
      ref: "Sahih al-Bukhari 3606 — Hudhayfah ibn al-Yaman; also Sahih Muslim — SAHIH, AGREED UPON",
      strength: "hadith",
      plain: "In plain words: Hudhayfah said everyone else asked about the good; he asked about the bad, because he was afraid of living through it.\n\nThe answers went like this: after this good there IS evil. After that evil there IS good again — but with smoke in it, meaning people leading in a way that is partly right and partly not. And after that good there is worse evil: people calling to the gates of Hell.\n\nThen he asked what those people look like. The answer: they are from us, and they speak our language.\n\nSo it goes up and down in waves. That is your answer about rising and falling again — it is right there in Bukhari and Muslim.",
      plainAr: "بكلامٍ بسيط: قال حذيفة إنّ الناس كانوا يسألون عن الخير، وكان هو يسأل عن الشرّ خوفًا أن يُدركه.\n\nوكان الجواب هكذا: بعد هذا الخير **شرّ**. وبعد ذلك الشرّ **خيرٌ** لكن فيه دَخَن، أي قومٌ يقودون على وجهٍ بعضُه صواب وبعضه لا. وبعد ذلك الخير شرٌّ أشدّ: دعاةٌ على أبواب جهنّم.\n\nثم سأل: صِفهم. فقال: **هم من جلدتنا ويتكلّمون بألسنتنا**.\n\nفهي صعودٌ وهبوطٌ موجاتٍ. وهذا هو جوابُك عن النهوض ثم السقوط، وهو في البخاريّ ومسلم."
    },
    {
      id: "rise-what-to-do",
      h: "5 · And in the same breath, he was told what to DO in it",
      hAr: "٥ · وفي النَّفَس نفسه، قيل له ماذا يصنع فيها",
      en: "This is the half that usually gets left off, and it is the half that is actually addressed to you.\n\nHudhayfah did not stop at the map. He asked: what do you order me to do if that reaches me?\n\nThe answer: “Stick to the group of the Muslims and their leader.”\n\nThen he pushed, and this is why the hadith is so valuable, because he asked the question a person in our situation actually has: what if they have no group and no leader?\n\nThe answer: “Then withdraw from all of those sects, even if you have to bite onto the root of a tree until death reaches you while you are in that state.”\n\nRead what that instruction is not. It is not: find the right faction. It is not: wait for a leader to appear. It is: hold on to what you know is true, alone if necessary, in a state of hardship, until you die — and that counts as success.\n\nSo the answer to “what do I do while the ummah is like this” was given fourteen centuries ago to a man asking on behalf of exactly this situation. Hold on. Alone if you have to. That is the instruction.",
      ar: "هذا هو الشطر الذي يُحذف غالبًا، وهو الشطر الموجَّه إليك أنت.\n\nلم يقف حذيفة عند الخريطة، بل قال: **فَمَا تَأْمُرُنِي إِنْ أَدْرَكَنِي ذَلِكَ؟**\n\nفكان الجواب: **تَلْزَمُ جَمَاعَةَ الْمُسْلِمِينَ وَإِمَامَهُمْ**.\n\nثم ألحّ، ولهذا عظُم نفعُ الحديث، فقد سأل السؤال الذي يسأله من هو في حالنا: **فَإِنْ لَمْ يَكُنْ لَهُمْ جَمَاعَةٌ وَلَا إِمَامٌ؟**\n\nفكان الجواب: **فَاعْتَزِلْ تِلْكَ الْفِرَقَ كُلَّهَا، وَلَوْ أَنْ تَعَضَّ بِأَصْلِ شَجَرَةٍ حَتَّى يُدْرِكَكَ الْمَوْتُ وَأَنْتَ عَلَى ذَلِكَ**.\n\nوتأمّل ما ليس هو الأمر: ليس «التمس الفرقة المُحقّة»، ولا «انتظر إمامًا يظهر»، وإنما: تمسّك بما تعلم أنه الحقّ، ولو وحدك، ولو في شدّة، حتى تموت — ويُعدّ ذلك نجاحًا.\n\nفجوابُ «ماذا أصنع والأمّة على هذا الحال» أُعطي قبل أربعة عشر قرنًا لرجلٍ سأل عن هذه الحال بعينها. تمسّك. ولو وحدك. هذا هو الأمر.",
      quote: "فَاعْتَزِلْ تِلْكَ الْفِرَقَ كُلَّهَا، وَلَوْ أَنْ تَعَضَّ بِأَصْلِ شَجَرَةٍ حَتَّى يُدْرِكَكَ الْمَوْتُ وَأَنْتَ عَلَى ذَلِكَ",
      ref: "Sahih al-Bukhari 3606 — the same hadith, continued — SAHIH, AGREED UPON",
      strength: "hadith",
      plain: "In plain words: Hudhayfah did not just ask what would happen. He asked what he should DO about it.\n\nHe was told: stay with the main body of Muslims and their leader.\n\nThen he asked the question we would ask: what if there is no such group and no such leader?\n\nAnswer: then keep away from all those factions — even if you have to bite onto the root of a tree until you die in that state.\n\nThat means: hold on to what you know is right, on your own if you have to, even if it is hard, until the end. It does not say find the correct group. It does not say wait for a leader. It says hold on.",
      plainAr: "بكلامٍ بسيط: لم يسأل حذيفة عمّا سيقع فقط، بل سأل عمّا **يصنع**.\n\nفقيل له: الزم جماعة المسلمين وإمامهم.\n\nثم سأل ما نسأله نحن: فإن لم تكن جماعةٌ ولا إمام؟\n\nفقيل: اعتزل تلك الفرق كلَّها، ولو أن تعضّ بأصل شجرةٍ حتى يُدركك الموت وأنت على ذلك.\n\nومعناه: تمسّك بما تعلم أنه الحقّ، ولو وحدك، ولو شقّ عليك، إلى النهاية. لم يقل: ابحث عن الفرقة الصحيحة. ولم يقل: انتظر قائدًا. قال: **تمسّك**."
    },
    {
      id: "rise-return",
      h: "6 · The promised return — and the one link that is NOT in the two Sahihs",
      hAr: "٦ · العودةُ الموعودة — والحلقةُ الوحيدة التي ليست في الصحيحين",
      en: "This is the narration people usually mean when they ask “will Islam rise again”, and it must be graded honestly, because it is the one everybody wants to be true.\n\nIn Musnad Ahmad, from Hudhayfah, the Prophet ﷺ described five phases: prophethood among you for as long as Allah wills, then He raises it; then a caliphate upon the way of prophethood, for as long as Allah wills, then He raises it; then a biting kingship; then a kingship of compulsion; then A CALIPHATE UPON THE WAY OF PROPHETHOOD AGAIN. Then he fell silent.\n\nHOW STRONG IS IT. Outside the two Sahihs. It is in Musnad Ahmad and was graded Sahih by al-Albani in as-Silsilah as-Sahihah, and scholars have accepted it widely. This site's rule is to say when something is not in al-Bukhari or Muslim, and this is not.\n\nAND HERE IS THE HONEST PART, which matters more than the grading. The hope on this page does not stand on this narration. Blocks 2, 3 and 4 above are all agreed upon on their own — the ummah still standing at the end, a group holding until the descent of Isa, and good returning after evil. If someone rejected this sixth block entirely, every one of those would still be there.\n\nSo take it as what it is: a strong narration outside the two Sahihs that fits a picture the two Sahihs had already drawn.",
      ar: "هذه هي الرواية التي يقصدها الناس غالبًا إذا سألوا: أيعود الإسلام؟ ويجب ضبطُ درجتها بإنصاف، فهي التي يودّ الجميع أن تكون ثابتة.\n\nفي مسند أحمد، عن حذيفة رضي الله عنه، أنّ النبيّ ﷺ ذكر خمسة أطوار: تكون النبوّة فيكم ما شاء الله أن تكون ثم يرفعها؛ ثم تكون **خلافةٌ على منهاج النبوّة** ما شاء الله ثم يرفعها؛ ثم يكون **مُلكًا عاضًّا**؛ ثم يكون **مُلكًا جبريّة**؛ ثم تكون **خلافةٌ على منهاج النبوّة**. ثم سكت.\n\n**ودرجتها**: خارج الصحيحين. هي في مسند أحمد، وصحّحها الألبانيّ في «السلسلة الصحيحة»، وتلقّاها أهل العلم بالقبول في الجملة. وقاعدةُ هذا الموقع أن يُصرّح بما ليس في البخاريّ ومسلم، وهذا ليس فيهما.\n\n**وهنا الموضع المنصف**، وهو أهمّ من التخريج: أنّ الرجاء في هذه الصفحة **لا يقوم على هذه الرواية**. فالفقرات الثانية والثالثة والرابعة متّفقٌ عليها استقلالًا: بقاءُ الأمّة إلى أن يأتي أمر الله، وثباتُ طائفةٍ إلى نزول عيسى، وعودةُ الخير بعد الشرّ. فلو ردّ رادٌّ هذه الفقرة السادسة بجملتها لبقيت تلك كلُّها.\n\nفخُذها على ما هي: روايةٌ قويّةٌ خارج الصحيحين، توافق صورةً كان الصحيحان قد رسماها من قبل.",
      ref: "Musnad Ahmad — Hudhayfah ibn al-Yaman. OUTSIDE THE TWO SAHIHS; graded Sahih by al-Albani (as-Silsilah as-Sahihah). NOTE: unlike every al-Bukhari and Muslim citation on this site, the wording here could not be checked against a primary text file, so it is given as the widely transmitted wording and is cited by collection rather than by a number",
      strength: "hadith",
      plain: "In plain words: this is the famous one. In Musnad Ahmad he described five stages — prophethood, then a caliphate on the way of prophethood, then a harsh kingship, then a forced kingship, then A CALIPHATE ON THE WAY OF PROPHETHOOD AGAIN. Then he went quiet.\n\nSo yes, a return is promised in it.\n\nBut be straight about the grade: this one is NOT in Bukhari or Muslim. It is in Musnad Ahmad and al-Albani graded it Sahih.\n\nAnd here is the thing worth knowing: the hope on this page does not depend on it. The three points before it are all in Bukhari and Muslim on their own. Even if someone threw this one out completely, you would still have: the ummah is standing at the end, a group holds until Isa comes down, and good comes back after evil.",
      plainAr: "بكلامٍ بسيط: هذه هي المشهورة. في مسند أحمد ذكر خمسة أطوار: نبوّة، ثم خلافةٌ على منهاج النبوّة، ثم مُلكٌ عاضّ، ثم مُلكٌ جبريّ، ثم **خلافةٌ على منهاج النبوّة** مرّةً أخرى. ثم سكت.\n\nفنعم، فيها وعدٌ بالعودة.\n\nولكن كن صريحًا في الدرجة: هذه **ليست** في البخاريّ ولا مسلم، وإنما في مسند أحمد، وصحّحها الألبانيّ.\n\nوالذي يستحقّ أن يُعلم: أنّ الرجاء في هذه الصفحة لا يتوقّف عليها. فالثلاثة التي قبلها في الصحيحين استقلالًا. فلو طُرحت هذه بالكلّيّة لبقي عندك: أنّ الأمّة قائمةٌ في الآخر، وأنّ طائفةً تثبت إلى نزول عيسى، وأنّ الخير يعود بعد الشرّ."
    },
    {
      id: "rise-peak",
      h: "7 · The peak — and then, yes, the last decline before the Hour",
      hAr: "٧ · الذروة — ثم نعم، الانحدارُ الأخير قبل الساعة",
      en: "The owner asked this exactly: we rise, and then we fall again, and then the end comes. That is right, and it is in the two Sahihs.\n\nTHE PEAK. Isa عليه السلام descends as a just ruler. He breaks the cross, kills the swine and abolishes the jizyah — the scholars explain the last one as meaning there is nobody left to take it from, because the earth has one religion. Wealth becomes so abundant that nobody accepts charity. That is the highest point this world reaches.\n\nTHEN IT COMES DOWN AGAIN. Isa dies and is buried, as a human being. Time passes. And the narrations describe a wind that takes the souls of the believers, so that the ones who remain are the worst.\n\nAND THE HOUR COMES ON THEM. He ﷺ said: the Hour will not be established except upon the worst of people. Sahih Muslim.\n\nSo the end of the world does not arrive on a religious civilisation at its height. It arrives after that civilisation has gone, on people who are not carrying anything. That is a hard thing to read, and it is what the texts say.\n\nBUT NOTICE WHAT THAT DOES NOT MEAN. It does not mean the rise is pointless because a fall follows it. Every single person in the good period lived, and died, inside the good period. Nobody is judged on which phase of history they were born into. They are judged on what they did in the one they got — which is the only part of this whole page that is about you.",
      ar: "سأل صاحبُ الموقع عن هذا بعينه: ننهض، ثم نسقط ثانيةً، ثم تأتي النهاية. وهو صحيح، وهو في الصحيحين.\n\n**الذروة**: ينزل عيسى عليه السلام حَكَمًا عدلًا، فيكسر الصليب ويقتل الخنزير ويضع الجزية — وفسّرها أهل العلم بأنه لا يبقى من تُؤخذ منه، إذ صارت الأرض على دينٍ واحد. ويفيض المال حتى لا يقبله أحد. وهذه أعلى نقطةٍ تبلغها هذه الدنيا.\n\n**ثم ينحدر ثانية**: يموت عيسى ويُدفن، وهو بشر. ويمضي الزمان. وتذكر الأخبار ريحًا تقبض أرواح المؤمنين، فلا يبقى إلا شرارُ الناس.\n\n**وعليهم تقوم الساعة**: قال ﷺ: **لَا تَقُومُ السَّاعَةُ إِلَّا عَلَى شِرَارِ النَّاسِ**. رواه مسلم.\n\nفنهايةُ العالم لا تجيء على حضارةٍ متديّنةٍ في أوجها، وإنما تجيء بعد أن تذهب تلك الحضارة، على قومٍ لا يحملون شيئًا. وهذا ثقيلٌ على القارئ، وهو ما تقوله النصوص.\n\n**ولكن انتبه لما لا يعنيه ذلك**: لا يعني أنّ النهوض عبثٌ لأنّ بعده سقوطًا. فكلُّ من عاش في زمن الخير عاش ومات **داخله**. ولا يُحاسَب أحدٌ على الطور الذي وُلد فيه، وإنما على ما صنع في طوره الذي أُعطيه — وهو وحده الموضع الذي يخصّك من هذه الصفحة كلِّها.",
      quote: "لَا تَقُومُ السَّاعَةُ إِلَّا عَلَى شِرَارِ النَّاسِ",
      ref: "Isa's rule: Sahih al-Bukhari 2222 and Sahih Muslim — Abu Hurairah · The Hour upon the worst: Sahih Muslim, Book of Tribulations — Abdullah ibn Mas'ud",
      strength: "hadith",
      plain: "In plain words: yes — it rises, then it falls again, then the end comes. You remembered that correctly.\n\nThe peak: Isa عليه السلام comes down and rules justly. There is one religion on the earth, and so much wealth that nobody will take charity.\n\nThen it declines. Isa dies and is buried like any human being. Later, a wind takes the souls of the believers, and the people left are the worst ones. He said the Hour only comes upon the worst of people.\n\nSo the world does not end on a great Muslim civilisation. It ends after that has gone.\n\nBut do not read that as: the rise is pointless. Everyone who lived in the good time lived and died in the good time. Nobody is judged for which century they were born in — only for what they did in the one they got.",
      plainAr: "بكلامٍ بسيط: نعم — تنهض، ثم تسقط، ثم تأتي النهاية. وقد تذكّرتَ ذلك على وجهه.\n\nالذروة: ينزل عيسى عليه السلام فيحكم بالعدل، فتصير الأرض على دينٍ واحد، ويكثر المال حتى لا يقبله أحد.\n\nثم ينحدر: يموت عيسى ويُدفن كسائر البشر. ثم تأتي ريحٌ تقبض أرواح المؤمنين، فلا يبقى إلا الشرار. وقال: لا تقوم الساعة إلا على شرار الناس.\n\nفالدنيا لا تنتهي على حضارةٍ إسلاميّةٍ عظيمة، وإنما بعد أن تذهب.\n\nولا تقرأ هذا: إذن النهوضُ عبث. فكلُّ من عاش زمن الخير عاش فيه ومات فيه. ولا يُحاسَب أحدٌ على القرن الذي وُلد فيه، وإنما على ما عمل في قرنه."
    },
    {
      id: "rise-you",
      h: "8 · So what does this mean for you, tonight",
      hAr: "٨ · فماذا يعني هذا لك، الليلة",
      en: "Put the whole arc together and see what it asks of a person.\n\nThe ummah is not finished — that is agreed upon. A group is always holding — that is Sahih Muslim. Good returns after evil — that is agreed upon. A full return is promised in a strong narration outside the two Sahihs. And after the peak there is a decline, and then the Hour.\n\nNow notice what is NOT in any of it: not one text tells you to wait. Not one gives a date. Not one says the return arrives by itself, or that your generation is the one that receives it, or that your job is to watch for it.\n\nWhat the texts actually hand you is much smaller and much harder. Hold on. Keep the two things out of your heart that he named — love of this world and hatred of death. Be part of the group that does not let go, in whatever century you were put in.\n\nAnd the last thing, which is the point of putting this section on a page about a civilisation that already rose once: the Golden Age was not built by people who were waiting for a promised era. It was built by people who did the work in front of them, in a century they did not choose, most of whom did not live to see what it became.\n\nThat is the only role anyone is offered here. Not to see the return. To be part of what makes one possible.",
      ar: "اجمع السياق كلَّه وانظر ماذا يطلب من الإنسان.\n\nالأمّةُ لم تنتهِ — متّفقٌ عليه. وطائفةٌ ممسكةٌ دائمًا — في صحيح مسلم. والخيرُ يعود بعد الشرّ — متّفقٌ عليه. والعودةُ التامّة موعودةٌ في روايةٍ قويّةٍ خارج الصحيحين. وبعد الذروة انحدار، ثم الساعة.\n\nوانظر الآن ما ليس في ذلك كلِّه: ليس فيه نصٌّ واحدٌ يأمرك بالانتظار. ولا فيه موعد. ولا فيه أنّ العودة تجيء وحدها، ولا أنّ جيلك هو الذي يُدركها، ولا أنّ عملك أن تترقّبها.\n\nوالذي تُسلّمه إليك النصوصُ فعلًا أصغرُ من ذلك وأشقّ: **تمسّك**. وأخرِج من قلبك الاثنين اللذين سمّاهما: حبَّ الدنيا وكراهيةَ الموت. وكن من الطائفة التي لا تُرخي يدها، في أيّ قرنٍ وُضعتَ فيه.\n\nوآخر شيء، وهو سببُ وضع هذا القسم في صفحةٍ عن حضارةٍ قد نهضت مرّةً بالفعل: أنّ العصر الذهبيّ لم يبنِه قومٌ ينتظرون زمنًا موعودًا، وإنما بناه قومٌ عملوا ما بين أيديهم، في قرنٍ لم يختاروه، وأكثرُهم لم يعش ليرى ما صار إليه.\n\nوهذا هو الدور الوحيد المعروض على أحد ها هنا: لا أن ترى العودة، بل أن تكون من الذي يجعلها ممكنة."
    }
  ],

  notEstablished: "TWO CAUTIONS, because this subject attracts more invented material than any other.\n\nTHE MAHDI. The narrations about him are outside the two Sahihs — in Abu Dawud, at-Tirmidhi and others — and scholars accepted a number of them. But this section does not build its argument on him, for a plain reason: it is the single most abused subject in this field. Men have claimed the title in almost every century, movements have been built on it, and people have died following them. Nothing above depends on it.\n\nAND NO DATE, AND NO MATCHING. Nobody can tell you which of the five phases we are in, which war is which sign, or how long is left. Anyone who does is going past the text — and the same page that promises the return also records that he ﷺ refused to give the Hour a date at all.",
  notEstablishedAr: "تحذيران، فإنّ هذا الباب أكثرُ الأبواب اجتذابًا للموضوعات.\n\n**المهديّ**: أخبارُه خارج الصحيحين — في أبي داود والترمذيّ وغيرهما — وقد قبِل أهلُ العلم عددًا منها. غير أنّ هذا القسم لا يبني حجّته عليه، لسببٍ ظاهر: أنه أكثرُ ما استُغلّ في هذا الباب. فقد ادّعاه رجالٌ في كلّ قرنٍ تقريبًا، وقامت عليه حركات، ومات أناسٌ في اتّباعهم. وليس فيما تقدّم شيءٌ يتوقّف عليه.\n\n**ولا تاريخ ولا تنزيل**: لا يستطيع أحدٌ أن يُخبرك في أيّ الأطوار الخمسة نحن، ولا أيُّ حربٍ هي أيُّ علامة، ولا كم بقي. ومن فعل فقد تجاوز النصّ — والصفحةُ التي فيها وعدُ العودة هي نفسها التي تُقيّد أنه ﷺ أبى أن يُوقّت الساعة أصلًا."
};

/* ------------------------------------------------------------
   The renderer lives HERE rather than in each page's inline
   script, because this section appears on two pages. Duplicating
   the markup would guarantee the two copies drift the first time
   one of them is edited — which is the same reason js/angels.js
   is the single source for the angels on two pages.

   Self-contained on purpose: its own paragraph splitter, its own
   bold handling and its own badge, so it does not depend on
   whichever helpers happen to exist on the host page.
   ------------------------------------------------------------ */
/* NOTE: headings (h / hAr) are inserted raw and are NOT run through
   iitwRiseParas, so a **bold** marker in a heading would render as two
   literal asterisks. One did. Headings are already bold by styling, so
   they must not carry markers — checked for on every edit to this file. */
function iitwRiseParas(t) {
  return String(t || "").split(/\n\s*\n/)
    .map(function (p) {
      return "<p>" + p.replace(/\n/g, " ")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") + "</p>";
    }).join("");
}

function iitwRenderRise(hostId) {
  const box = document.getElementById(hostId);
  if (!box || typeof THE_RISE === "undefined") return;
  const d = THE_RISE;

  let h = '<h2 class="section-title">🌅 <span class="en-only">' + d.title + '</span>' +
          '<span class="ar-only" dir="rtl">' + d.titleAr + '</span></h2>' +
          '<p class="section-sub"><span class="en-only">' + d.lead + '</span>' +
          '<span class="ar-only" dir="rtl">' + d.leadAr + '</span></p>';

  /* Words explained, FIRST — asked for directly, because a reader in
     Arabic may not know ghutha' or a'war any more than an English
     reader does, and the blocks below lean on those words. */
  h += '<div class="tad-surah rise-words"><div class="tad-surah-head">📖 ' +
       '<span class="en-only">Words in this section, explained</span>' +
       '<span class="ar-only" dir="rtl">ألفاظٌ في هذا القسم، مشروحة</span></div>' +
       d.words.map(function (w) {
         return '<div class="rise-word"><div class="rise-word-w" dir="rtl">' + w.w +
                '<span class="rise-word-t en-only"> — ' + w.t + '</span></div>' +
                '<div class="en-only">' + iitwRiseParas(w.en) + '</div>' +
                '<div class="ar-only" dir="rtl">' + iitwRiseParas(w.ar) + '</div></div>';
       }).join("") + '</div>';

  d.blocks.forEach(function (b) {
    h += '<div class="tad-ayah" style="display:block;" id="' + b.id + '">' +
      '<div class="tad-ayah-head"><span class="en-only">' + b.h + '</span>' +
        '<span class="ar-only" dir="rtl">' + b.hAr + '</span></div>' +
      '<div class="en-only">' + iitwRiseParas(b.en) + '</div>' +
      '<div class="ar-only" dir="rtl">' + iitwRiseParas(b.ar) + '</div>' +
      (b.quote ? '<div class="tad-verse-ar" dir="rtl" data-speak>' + b.quote +
        ' <button class="speak-btn" data-lang="ar" title="Listen">&#128266;</button></div>' : "") +
      (b.ref ? '<div class="tad-ref" dir="auto">' + b.ref + '</div>' : "") +
      (b.plain ? '<div class="tad-plain"><div class="tad-plain-label">💬 ' +
        '<span class="en-only">In plain words</span>' +
        '<span class="ar-only" dir="rtl">بكلامٍ بسيط</span></div>' +
        '<div class="en-only">' + iitwRiseParas(b.plain) + '</div>' +
        '<div class="ar-only" dir="rtl">' + iitwRiseParas(b.plainAr) + '</div></div>' : "") +
      '</div>';
  });

  h += '<div class="tad-differ"><div class="tad-differ-head">⚠️ ' +
       '<span class="en-only">What is NOT established — read this before you repeat any of it</span>' +
       '<span class="ar-only" dir="rtl">ما ليس بثابت — اقرأ هذا قبل أن تنقل شيئًا منه</span></div>' +
       '<div class="en-only">' + iitwRiseParas(d.notEstablished) + '</div>' +
       '<div class="ar-only" dir="rtl">' + iitwRiseParas(d.notEstablishedAr) + '</div></div>';

  box.innerHTML = h;
  if (window.applyI18n) window.applyI18n();
}
