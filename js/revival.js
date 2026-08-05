/* ============================================================
   WHY WE FELL, AND THE WAY BACK — لماذا سقطنا وكيف نعود
   ============================================================
   The Golden Age page ends with a question: what happened to us?
   This file answers it, and it answers it from the sources rather
   than from feeling.

   THE RULES THAT GOVERN THIS FILE — they matter more here than
   almost anywhere else on the site, because this is the subject
   where people most often reach for a weak hadith or an invented
   quotation to make a point they already believe:

   1. EVERY grading is stated. The two hadith that speak most
      directly to this — the hadith of wahn and the hadith of
      'inah — are BOTH outside the two Sahihs, and both say so on
      the card. On one of them the scholars actually disagree, and
      that is stated too, with the names.

   2. Imam Malik's famous sentence about the last of this ummah is
      NOT a hadith. It is his own statement. It is labelled.

   3. Not a word of blame is aimed outward. That is not softness —
      it is what the texts themselves say. The hadith of 'inah
      names the cure inside the disease: "until you return to your
      religion." And Allah said of the defeat at Uhud, to the
      companions themselves: "Say: it is from yourselves."

   4. No political programme, no takfir, no naming of countries or
      groups. What is here is what a person can do on Monday
      morning. That is deliberate: 13:11 puts the change inside
      people, so that is where the answer is put.
   ============================================================ */

const REVIVAL = {
  id: "revival",
  title: "Why we fell, and the way back",
  titleAr: "لماذا سقطنا، وكيف نعود",

  intro: "The page on the Golden Age shows what this ummah built when it was awake. The obvious question is what happened afterwards — and it deserves a better answer than either despair or a list of other people's crimes.\n\nThe answer below is taken from the Quran, from the Sunnah with its grading stated, and from what the scholars said. It has one shape throughout: what happened to us was described in advance, the cause was named, and the cure was named in the same breath. Nothing here is aimed at anyone outside. That is not politeness — it is what the texts actually say.",
  introAr: "صفحة العصر الذهبي تُري ما بنته هذه الأمّة حين كانت يقظى. والسؤال الظاهر: ماذا جرى بعد ذلك؟ وهو سؤالٌ يستحقّ جوابًا أحسن من اليأس، وأحسن من تعداد جرائم الآخرين.\n\nوالجواب الآتي مأخوذ من القرآن، ومن السنّة مع بيان درجتها، ومن كلام أهل العلم. وهو على نسقٍ واحد: أنّ الذي أصابنا قد وُصف قبل وقوعه، وسُمّي سببه، وسُمّي دواؤه في النفس الواحد. وليس فيه شيءٌ مُوجَّهٌ إلى أحدٍ من خارج. وليس ذلك مجاملة، بل هو ما تقوله النصوص نفسها.",

  /* ---------- What was foretold ---------- */
  diagnosisTitle: "What he ﷺ said would happen — and it did",
  diagnosisTitleAr: "ما أخبر ﷺ أنه سيقع — فوقع",
  diagnosis: [
    {
      id: "rv-wahn",
      title: "Many, and weightless",
      titleAr: "كثرةٌ لا وزن لها",
      body: "Thawban رضي الله عنه reported that the Prophet ﷺ said: \"The nations are about to call one another against you, as diners call one another to their dish.\"\n\nSomeone asked: will that be because we are few that day? He said: \"No — you will be many that day. But you will be froth, like the froth of a torrent. And Allah will take the awe of you out of the breasts of your enemy, and cast wahn into your hearts.\"\n\nSomeone asked: what is wahn, Messenger of Allah? He said: \"Love of this world, and hatred of death.\"",
      bodyAr: "روى ثوبان رضي الله عنه أنّ رسول الله ﷺ قال: «يوشك الأمم أن تداعى عليكم كما تداعى الأَكَلة إلى قصعتها».\n\nفقال قائل: أوَمِن قلّةٍ نحن يومئذ؟ قال: «بل أنتم يومئذٍ كثير، ولكنكم غثاءٌ كغثاء السيل، ولينزعنّ الله من صدور عدوّكم المهابة منكم، وليقذفنّ الله في قلوبكم الوَهَن».\n\nفقال قائل: يا رسول الله وما الوهن؟ قال: «حبّ الدنيا وكراهية الموت».",
      arabic: "بَلْ أَنْتُمْ يَوْمَئِذٍ كَثِيرٌ، وَلَكِنَّكُمْ غُثَاءٌ كَغُثَاءِ السَّيْلِ",
      note: "Read the numbers plainly: this ummah is not small. He said the weakness would come while we were many — so being many was never the measure, and never will be. And notice that he did not describe an enemy who became stronger. He described hearts that changed.",
      noteAr: "واقرأ الأرقام كما هي: فهذه الأمّة ليست قليلة. وقد أخبر ﷺ أنّ الضعف يأتي ونحن كثير — فلم تكن الكثرة قطّ هي الميزان، ولن تكون. وتأمّل أنه لم يصف عدوًّا قوي، وإنما وصف قلوبًا تغيّرت.",
      ref: "Sunan Abu Dawud, Book of Battles (al-Malahim), Hadith 4297 — narrated from Thawban",
      strength: "Outside the two Sahihs — narrated by Abu Dawud; graded Sahih by al-Albani",
      strengthAr: "خارج الصحيحين — رواه أبو داود، وصحّحه الألباني"
    },
    {
      id: "rv-inah",
      title: "The humiliation that lifts on one condition",
      titleAr: "ذلٌّ لا يُرفع إلا بشرط",
      body: "Ibn Umar رضي الله عنهما said: I heard the Messenger of Allah ﷺ say: \"When you deal in 'inah, and take hold of the tails of oxen, and are content with agriculture, and abandon striving in the way of Allah — Allah will fasten upon you a humiliation that He will not remove from you until you return to your religion.\"\n\n('Inah is a sale arranged so that what is really a loan at interest can be dressed up as a trade — selling a thing on credit and buying it straight back for less in cash. The point is not the crop or the cattle in themselves; it is a people who have turned entirely inward to their own comfort and quietly found ways around what they were told.)",
      bodyAr: "قال ابن عمر رضي الله عنهما: سمعت رسول الله ﷺ يقول: «إذا تبايعتم بالعِينة، وأخذتم أذناب البقر، ورضيتم بالزرع، وتركتم الجهاد، سلّط الله عليكم ذلًّا لا ينزعه حتى ترجعوا إلى دينكم».\n\n(والعِينة بيعٌ يُحتال به على الربا، فيبيع السلعة بثمنٍ مؤجَّل ثم يشتريها نقدًا بأقلّ منه. وليس المقصود الزرع ولا البقر في أنفسهما، وإنما قومٌ انصرفوا بالكلّية إلى دَعَتهم، والتمسوا في صمتٍ المخارج ممّا أُمروا به.)",
      arabic: "سَلَّطَ اللَّهُ عَلَيْكُمْ ذُلًّا لَا يَنْزِعُهُ حَتَّى تَرْجِعُوا إِلَى دِينِكُمْ",
      note: "The whole answer to \"how do we get out of this?\" is inside the hadith that describes the problem. He did not say the humiliation lifts when the enemy weakens, or when we are richer, or when someone else stops doing something to us. He said it lifts when we return to our religion — and not before.\n\nHonesty about the grading: al-Albani graded this Sahih, and so did Muhammad Muhyi ad-Din Abdul Hamid. Zubair Ali Zai graded it weak. So the scholars genuinely differ on this chain, and anyone quoting it should say so. Its meaning, however, is confirmed by verses whose authority nobody disputes — 13:11 and 8:53 below say exactly the same thing.",
      noteAr: "وجواب سؤال «كيف نخرج من هذا؟» كلُّه داخل الحديث الذي وصف الداء. فلم يقل ﷺ إنّ الذلّ يُرفع إذا ضعف العدوّ، ولا إذا كثر المال، ولا إذا كفّ غيرنا عمّا يصنعه بنا. بل قال: «حتى ترجعوا إلى دينكم» — ولا قبل ذلك.\n\nوأمانةٌ في الدرجة: صحّحه الألباني، وصحّحه محمد محيي الدين عبد الحميد، وضعّفه زبير علي زئي. فالخلاف في هذا الإسناد خلافٌ حقيقيّ بين أهل العلم، ومن نقله فحقُّه أن يبيّن ذلك. وأما معناه فتشهد له آياتٌ لا ينازع أحدٌ في حجّيتها، وهما آيتا الرعد والأنفال الآتيتان، تقولان الشيء نفسه بعينه.",
      ref: "Sunan Abu Dawud, Book of Transactions (al-Buyu'), Hadith 3462 — narrated from Ibn Umar",
      strength: "Outside the two Sahihs — narrated by Abu Dawud; graded Sahih by al-Albani and by Muhammad Muhyi ad-Din Abdul Hamid, and graded weak by Zubair Ali Zai. The scholars differ.",
      strengthAr: "خارج الصحيحين — رواه أبو داود، وصحّحه الألباني ومحمد محيي الدين عبد الحميد، وضعّفه زبير علي زئي. والخلاف فيه ثابت."
    },
    {
      id: "rv-uhud",
      title: "At Uhud, He told them whose fault it was",
      titleAr: "في أُحُد، بيَّن لهم ممّن أُتوا",
      body: "The generation that fought at Uhud was the best generation this ummah has had, led by the Prophet ﷺ himself. They were defeated. And when they asked how that could have happened, the answer came down in the Quran — and it did not blame Quraish.\n\n\"And when a disaster struck you, although you had struck them with one twice as great, you said: from where is this? Say: it is from yourselves.\"\n\nIf that is what was said to the companions, on the battlefield, with the Messenger of Allah ﷺ among them, then it settles the method for everyone after them. When something goes wrong with this ummah, the first place to look is inward.",
      bodyAr: "الجيل الذي قاتل يوم أُحُد خيرُ جيلٍ في هذه الأمّة، وعلى رأسه رسول الله ﷺ نفسه. ثم هُزموا. فلمّا سألوا: أنّى هذا؟ نزل الجواب في القرآن، ولم يكن فيه لومٌ لقريش.\n\n﴿أَوَلَمَّا أَصَابَتْكُم مُّصِيبَةٌ قَدْ أَصَبْتُم مِّثْلَيْهَا قُلْتُمْ أَنَّىٰ هَٰذَا ۖ قُلْ هُوَ مِنْ عِندِ أَنفُسِكُمْ﴾.\n\nفإذا كان هذا ما قيل للصحابة، في ساحة المعركة، ورسول الله ﷺ بين أظهرهم، فقد استقرّت الطريقة لمن بعدهم: إذا أصاب هذه الأمّة شيء، فأول ما يُنظر فيه هو الداخل.",
      arabic: "قُلْ هُوَ مِنْ عِندِ أَنفُسِكُمْ",
      note: "And at Hunayn the lesson was the reverse of Uhud and pointed the same way: \"and on the day of Hunayn, when your great numbers pleased you but availed you nothing.\" Defeat when they were few, and defeat when they were many — so that nobody could conclude the issue was ever the numbers.",
      noteAr: "وكان الدرس يوم حنين عكس أُحُد ويدلّ على المعنى نفسه: ﴿وَيَوْمَ حُنَيْنٍ إِذْ أَعْجَبَتْكُمْ كَثْرَتُكُمْ فَلَمْ تُغْنِ عَنكُمْ شَيْئًا﴾. هُزموا وهم قِلّة، وابتُلوا وهم كثرة، حتى لا يظنّ أحدٌ أنّ المسألة كانت في العدد قطّ.",
      ref: "Surah Aal-Imran (3:165); Surah At-Tawbah (9:25)",
      strength: "The Quran",
      strengthAr: "القرآن الكريم"
    },
    {
      id: "rv-dispute",
      title: "And the one He named as the cause of losing your strength",
      titleAr: "والذي سمّاه سببًا لذهاب قوّتكم",
      body: "\"And obey Allah and His Messenger, and do not dispute with one another, or you will fail and your strength will depart. And be patient — indeed Allah is with the patient.\"\n\nThe word used is rih — literally the wind: the force that carries a ship, the momentum of a people. Allah did not say disputing is unpleasant, or that it slows you down. He said your strength goes.\n\nAnyone who has watched Muslims argue with each other over the last century, while the things that were built in Baghdad and Cordoba stand in other people's museums, has watched this verse being demonstrated.",
      bodyAr: "﴿وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ ۖ وَاصْبِرُوا ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ﴾.\n\nواللفظ «ريحكم»، وهي القوّة التي تجري بها السفينة، ودولة القوم ونفاذ أمرهم. ولم يقل سبحانه إنّ التنازع مكروهٌ أو مُبطئ، بل قال: تذهب ريحكم.\n\nومن رأى تنازع المسلمين في القرن الأخير، وما بُني في بغداد وقرطبة قائمٌ في متاحف غيرهم، فقد رأى هذه الآية تُقام أمام عينيه.",
      arabic: "وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ",
      note: "And beside it: \"And hold firmly to the rope of Allah, all together, and do not become divided.\" The command is to hold to the rope — not to each other's opinions. Unity was ordered around a thing, and the thing was named.",
      noteAr: "وإلى جانبها: ﴿وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا﴾. فالأمر بالاعتصام بالحبل، لا بآراء بعضنا بعضًا. فقد أُمر بالاجتماع على شيء، وسُمّي ذلك الشيء.",
      ref: "Surah Al-Anfal (8:46); Surah Aal-Imran (3:103)",
      strength: "The Quran",
      strengthAr: "القرآن الكريم"
    }
  ],

  /* ---------- The law of how change happens ---------- */
  lawTitle: "The law that governs it — stated twice, in the same words",
  lawTitleAr: "السنّة التي تحكم ذلك — ذُكرت مرّتين باللفظ نفسه",
  lawIntro: "Two verses, in two different surahs, say the same thing from opposite directions — once about a condition being lifted, once about a blessing being withdrawn. Between them they close the question completely: nothing changes on the outside until something changes on the inside.",
  lawIntroAr: "آيتان في سورتين تقولان الشيء نفسه من جهتين متقابلتين: إحداهما في رفع الحال، والأخرى في زوال النعمة. وهما جميعًا تُغلقان المسألة إغلاقًا: لا يتغيّر شيءٌ في الخارج حتى يتغيّر شيءٌ في الداخل.",
  law: [
    { en: "\"Indeed, Allah will not change the condition of a people until they change what is in themselves.\"",
      ar: "﴿إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ﴾",
      ref: "Surah Ar-Ra'd (13:11)" },
    { en: "\"That is because Allah would not change a favour which He had bestowed upon a people until they change what is in themselves.\"",
      ar: "﴿ذَٰلِكَ بِأَنَّ اللَّهَ لَمْ يَكُ مُغَيِّرًا نِّعْمَةً أَنْعَمَهَا عَلَىٰ قَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ﴾",
      ref: "Surah Al-Anfal (8:53)" },
    { en: "\"O you who believe — if you support Allah, He will support you and plant your feet firmly.\"",
      ar: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ﴾",
      ref: "Surah Muhammad (47:7)" },
    { en: "\"Allah has promised those among you who believe and do righteous deeds that He will surely make them successors in the land, as He made successors those before them, and that He will surely establish for them their religion which He has approved for them, and that He will surely exchange their fear for security — they worship Me, associating nothing with Me.\" The promise is there. So is the condition, in the last clause.",
      ar: "﴿وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَعَمِلُوا الصَّالِحَاتِ لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ كَمَا اسْتَخْلَفَ الَّذِينَ مِن قَبْلِهِمْ وَلَيُمَكِّنَنَّ لَهُمْ دِينَهُمُ الَّذِي ارْتَضَىٰ لَهُمْ وَلَيُبَدِّلَنَّهُم مِّن بَعْدِ خَوْفِهِمْ أَمْنًا ۚ يَعْبُدُونَنِي لَا يُشْرِكُونَ بِي شَيْئًا﴾ — فالوعد ثابت، والشرط في آخرها.",
      ref: "Surah An-Nur (24:55)" },
    { en: "\"You are the best nation produced for mankind: you enjoin what is right, and forbid what is wrong, and believe in Allah.\" It is worth reading slowly. The description is not a title held regardless of conduct — the three verbs after it are what the description is FOR.",
      ar: "﴿كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ وَتُؤْمِنُونَ بِاللَّهِ﴾ — وحقُّها أن تُقرأ على مهل: فليست الخيريّة لقبًا يُحمل مع أيّ حال، وإنما الأفعال الثلاثة بعدها هي عِلّتها.",
      ref: "Surah Aal-Imran (3:110)" }
  ],
  malik: {
    text: "And this is where Imam Malik's famous sentence belongs: \"The last of this ummah will not be set right except by what set right its first.\"",
    textAr: "وهنا موضع كلمة الإمام مالك المشهورة: «لن يصلح آخر هذه الأمّة إلا بما صلح به أوّلها».",
    warning: "IMPORTANT: this is a statement of Imam Malik ibn Anas — it is NOT a hadith of the Prophet ﷺ, and it is very often quoted as though it were. It is quoted here for what it is: the judgement of one of the great imams of this religion, worth its weight as that, and not to be raised above its rank.",
    warningAr: "تنبيهٌ مهمّ: هذه كلمةٌ للإمام مالك بن أنس، وليست حديثًا عن النبي ﷺ، وكثيرًا ما تُنقل على أنها حديث. وإنما تُذكر هنا على حقيقتها: قولُ إمامٍ من أئمّة هذا الدين، له وزنه بهذا الاعتبار، ولا يُرفع فوق رتبته."
  },

  /* ---------- What to actually do ---------- */
  stepsTitle: "The way back — what one person can actually do",
  stepsTitleAr: "طريق الرجوع — ما يقدر عليه الواحد فعلًا",
  stepsIntro: "13:11 puts the change inside people. So the way back is not a plan for a government; it is a list of things a person can begin today, and none of them requires permission from anyone.",
  stepsIntroAr: "آية الرعد تجعل التغيير في الأنفس، فليس طريق الرجوع خطّةً لحكومة، وإنما هو أمورٌ يبدؤها المرء اليوم، وليس فيها شيءٌ يحتاج إلى إذنٍ من أحد.",
  steps: [
    {
      id: "rv-prayer",
      icon: "🕌",
      title: "The prayer, before anything else",
      titleAr: "الصلاة قبل كلّ شيء",
      body: "Nothing else on this list will hold without it. Allah described the generations that came after the prophets and lost their way with one clause: \"But there came after them successors who neglected the prayer and followed desires — so they are going to meet evil.\" The neglect of the prayer is named first, and everything else followed from it.\n\nThis is where a revival starts, and it is measurable tonight: five prayers, on time, in the mosque for the men who can reach it.",
      bodyAr: "لا يثبت شيءٌ ممّا في هذه القائمة بدونها. وقد وصف الله الأجيال التي جاءت بعد الأنبياء فضلّت بجملةٍ واحدة: ﴿فَخَلَفَ مِن بَعْدِهِمْ خَلْفٌ أَضَاعُوا الصَّلَاةَ وَاتَّبَعُوا الشَّهَوَاتِ ۖ فَسَوْفَ يَلْقَوْنَ غَيًّا﴾. فقُدِّم ذكر إضاعة الصلاة، وتبعها ما تبعها.\n\nومن هنا يبدأ الإصلاح، وهو ممّا يُقاس هذه الليلة: خمس صلواتٍ في وقتها، وفي المسجد لمن قدر عليه من الرجال.",
      evidence: [
        { en: "\"But there came after them successors who neglected the prayer and followed desires — so they are going to meet evil.\"",
          ar: "﴿فَخَلَفَ مِن بَعْدِهِمْ خَلْفٌ أَضَاعُوا الصَّلَاةَ وَاتَّبَعُوا الشَّهَوَاتِ فَسَوْفَ يَلْقَوْنَ غَيًّا﴾",
          ref: "Surah Maryam (19:59) — the Quran" }
      ]
    },
    {
      id: "rv-knowledge",
      icon: "📖",
      title: "Learn something, properly, and do not stop",
      titleAr: "تعلَّم شيئًا على وجهه ولا تقف",
      body: "The first word revealed was \"Read.\" The men on the Golden Age page were not scientists who happened to be Muslim; they were students of this religion who took its command to look at the creation seriously, and the sciences came out of that.\n\nSo the way back includes actually knowing something: your religion first, and then whatever field you are in, to a standard nobody can dismiss. A Muslim who is the best engineer in the room is doing something for this ummah that a Muslim who is merely loud about it is not.",
      bodyAr: "أول ما نزل: ﴿اقْرَأْ﴾. والرجال الذين في صفحة العصر الذهبي لم يكونوا علماء طبيعةٍ اتّفق أنهم مسلمون، بل كانوا طلبة هذا الدين، أخذوا أمره بالنظر في الخلق مأخذ الجدّ، فخرجت العلوم من ذلك.\n\nفمن طريق الرجوع أن تعلم شيئًا حقًّا: دينك أولًا، ثم فنّك الذي أنت فيه، على درجةٍ لا يستطيع أحدٌ أن يزدريها. فالمسلم الذي هو أمهر مهندسٍ في المجلس يصنع لهذه الأمّة ما لا يصنعه من يُحسن الكلام عنها فقط.",
      evidence: [
        { en: "\"Read, in the name of your Lord who created… who taught by the pen, taught man what he did not know.\"",
          ar: "﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ … الَّذِي عَلَّمَ بِالْقَلَمِ • عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ﴾",
          ref: "Surah Al-Alaq (96:1-5) — the Quran" },
        { en: "\"Whoever travels a path seeking knowledge, Allah makes easy for him by it a path to Paradise.\"",
          ar: "«مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ»",
          ref: "Sahih Muslim, Book of Dhikr and Supplication, Hadith 2699 — Sahih" }
      ]
    },
    {
      id: "rv-itqan",
      icon: "🛠️",
      title: "Do your work properly — this is worship",
      titleAr: "أتقن عملك — فهذه عبادة",
      body: "Half of the decline people complain about is not a matter of belief at all. It is work done badly: the job half finished, the promise not kept, the thing sold as what it is not.\n\nThe Prophet ﷺ set the standard the other way and made it a matter of what Allah loves: \"Allah loves that when one of you does a work, he does it well.\" A civilisation is the sum of a very large number of people doing ordinary work properly. That is how the hospitals and the observatories got built, and it is not out of reach of anyone reading this.",
      bodyAr: "ونصفُ ما يشكو الناس منه من الانحدار ليس مسألة اعتقادٍ أصلًا، وإنما هو عملٌ أُسيء: شغلٌ لم يُتمّ، ووعدٌ لم يُوفَ، وسلعةٌ بيعت على غير ما هي عليه.\n\nوقد قرّر النبيُّ ﷺ الأمر على خلاف ذلك وجعله ممّا يحبّه الله: «إنّ الله يحبّ إذا عمل أحدكم عملًا أن يُتقنه». وإنما الحضارة حاصل جمع عددٍ كبيرٍ جدًّا من الناس يُتقنون أعمالًا عاديّة. وهكذا بُنيت البيمارستانات والمراصد، وليس ذلك ببعيدٍ عن أحدٍ يقرأ هذا.",
      evidence: [
        { en: "\"Allah loves that when one of you does a work, he does it well.\"",
          ar: "«إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ»",
          ref: "Narrated by al-Bayhaqi in Shu'ab al-Iman and by Abu Ya'la — OUTSIDE the two Sahihs. Graded Sahih by al-Albani in Sahih al-Jami'; some scholars considered its chain weak. Its meaning is agreed upon and supported by the Quran's command to give full measure." },
        { en: "\"O you who believe, why do you say what you do not do? It is greatly hateful in the sight of Allah that you say what you do not do.\"",
          ar: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ • كَبُرَ مَقْتًا عِندَ اللَّهِ أَن تَقُولُوا مَا لَا تَفْعَلُونَ﴾",
          ref: "Surah As-Saff (61:2-3) — the Quran" }
      ]
    },
    {
      id: "rv-unity",
      icon: "🤝",
      title: "Stop tearing at each other",
      titleAr: "كُفّوا عن التمزّق",
      body: "8:46 said the strength goes when the disputing starts, and this is the one on the list that costs the most pride to act on.\n\nIt does not mean pretending there are no differences. This site has a whole section where scholars are shown disagreeing, by name, with the weight of the evidence stated on each side — because that is how the scholars themselves handled it. What it means is refusing to make every difference a war, and refusing to treat a Muslim who differs on a secondary matter as an enemy.",
      bodyAr: "قالت آية الأنفال إنّ القوّة تذهب إذا وقع التنازع، وهذه أثقلها على النفس وأشدّها على الكِبْر.\n\nوليس معناها التظاهر بأن لا خلاف. ففي هذا الموقع بابٌ كامل يُعرض فيه اختلاف العلماء بأسمائهم، مع بيان وجه الدليل عند كلّ فريق، لأنّ هذا صنيع أهل العلم أنفسهم. وإنما معناها ألّا يُجعل كلّ خلافٍ حربًا، وألّا يُعامَل المسلم المخالف في مسألةٍ فرعيّةٍ معاملة العدوّ.",
      evidence: [
        { en: "\"And hold firmly to the rope of Allah, all together, and do not become divided.\"",
          ar: "﴿وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا﴾",
          ref: "Surah Aal-Imran (3:103) — the Quran" },
        { en: "\"The believer to the believer is like a building, each part strengthening the other\" — and he interlocked his fingers.",
          ar: "«الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا» — وشبّك بين أصابعه",
          ref: "Sahih al-Bukhari, Book of Prayers, Hadith 481; also Muslim — Sahih, agreed upon" }
      ]
    },
    {
      id: "rv-youth",
      icon: "🌱",
      title: "The young are the whole of it",
      titleAr: "الشباب هم الأمر كلّه",
      body: "Look at the ages at the beginning. Ali was about ten when he believed. Mus'ab ibn Umayr, sent as the first teacher to Madinah, was a young man. Usamah ibn Zayd was put in command of an army in his teens. Ibn Sina had memorised the Quran by ten and finished the medicine of his day by sixteen. Muhammad al-Fatih was twenty-one at Constantinople.\n\nThis was never a religion carried by the old and merely tolerated by the young. Every revival in its history has run on people under thirty who were given something serious to do and were trusted with it. That is the practical instruction here: give the young responsibility, real knowledge and real expectations — and if you are young, do not wait to be handed them.",
      bodyAr: "انظر إلى الأعمار في البداية. عليٌّ آمن وهو ابن نحو عشر. ومصعب بن عمير — أول معلّمٍ أُرسل إلى المدينة — كان شابًّا. وأُسامة بن زيد أُمِّر على جيشٍ وهو في مطلع شبابه. وابن سينا حفظ القرآن وهو ابن عشر، وأتى على طبّ زمانه وهو ابن ستّ عشرة. ومحمد الفاتح كان ابن إحدى وعشرين عند القسطنطينية.\n\nفما كان هذا الدين قطّ دينًا يحمله الشيوخ ويُطيقه الشباب على مضض. وكلّ نهضةٍ في تاريخه إنما قامت على من دون الثلاثين، أُسند إليهم أمرٌ جادّ وأُوتمنوا عليه. وهذه هي الوصيّة العمليّة هنا: حمِّلوا الشباب المسؤوليّة والعلم الحقيقيّ والمطالبة الجادّة — وإن كنتَ شابًّا فلا تنتظر أن تُعطاها.",
      evidence: [
        { en: "\"They were young men who believed in their Lord, and We increased them in guidance.\"",
          ar: "﴿إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى﴾",
          ref: "Surah Al-Kahf (18:13) — the Quran" },
        { en: "Among the seven whom Allah shades on the Day when there is no shade but His: \"a young man who grew up in the worship of Allah.\"",
          ar: "من السبعة الذين يُظلّهم الله في ظلّه يوم لا ظلّ إلا ظلّه: «وَشَابٌّ نَشَأَ فِي عِبَادَةِ اللَّهِ»",
          ref: "Sahih al-Bukhari, Book of the Call to Prayer, Hadith 660; also Muslim — Sahih, agreed upon" }
      ]
    },
    {
      id: "rv-self",
      icon: "🪞",
      title: "Begin with the one person you actually control",
      titleAr: "ابدأ بالذي تملكه حقًّا",
      body: "The most common way this subject is wasted is that it stays a conversation about the ummah — a thing other people are failing at, discussed at length by someone who has not changed anything about their own week.\n\n\"Until they change what is in themselves\" is not addressed to a committee. Umar ibn al-Khattab رضي الله عنه wrote to Sa'd ibn Abi Waqqas as he sent him to Persia and told him that he feared the sins of the army more than he feared their enemy, and that if their sins became equal to their enemy's, the enemy would beat them by numbers. That is reported in the books of history rather than as a hadith — but it is exactly the reading of 13:11 that this whole page rests on.\n\nSo: one prayer you were missing. One habit you know is wrong. One skill learned properly. One person you were unjust to. Start there. That is what changing what is in ourselves actually looks like, and there is no other route — the verse leaves none.",
      bodyAr: "وأكثر ما يُهدَر به هذا الباب أن يبقى حديثًا عن «الأمّة» — شيءٌ يقصّر فيه غيرك، يُطيل الكلام فيه من لم يغيّر في أسبوعه شيئًا.\n\nوقوله: ﴿حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ﴾ ليس خطابًا للجان. وقد كتب عمر بن الخطاب رضي الله عنه إلى سعد بن أبي وقّاص وهو يوجّهه إلى فارس، فأخبره أنه يخاف على الجيش من ذنوبهم أكثر ممّا يخاف عليهم من عدوّهم، وأنهم إن استوَوا معهم في المعصية غلبوهم بالعدد. وهذا مرويٌّ في كتب التاريخ لا على أنه حديث — لكنه بعينه فهم آية الرعد التي تقوم عليها هذه الصفحة كلّها.\n\nفإذًا: صلاةٌ كنت تضيّعها. وعادةٌ تعلم أنها خطأ. وعلمٌ تُتقنه. وإنسانٌ ظلمتَه. ابدأ من هناك. فهذا هو تغيير ما بالأنفس على الحقيقة، وليس ثمّة طريقٌ آخر — فالآية لم تُبقِ طريقًا.",
      evidence: [
        { en: "\"Indeed, Allah will not change the condition of a people until they change what is in themselves.\"",
          ar: "﴿إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ﴾",
          ref: "Surah Ar-Ra'd (13:11) — the Quran" },
        { en: "Umar's letter to Sa'd ibn Abi Waqqas: \"I fear for you your sins more than I fear your enemy… if our sins equal theirs, they will overcome us by their numbers.\"",
          ar: "من كتاب عمر إلى سعد بن أبي وقّاص: «فإني أخاف عليكم من ذنوبكم أشدّ ممّا أخاف عليكم من عدوّكم… فإن استوينا في المعصية كان لهم الفضل علينا في القوّة»",
          ref: "Reported in the books of history (at-Tabari, and Ibn Kathir in al-Bidayah wan-Nihayah) — HISTORICAL, not a hadith" }
      ]
    }
  ],

  close: "So the answer to \"why are Muslims like this now?\" is not a conspiracy and not an accident, and the answer to \"how do we come back?\" is not a mystery. It was named in advance: hearts that loved this world too much and feared death too much, a people who turned inward to their comfort and found ways around what they were told, and a strength that left when the arguing began.\n\nAnd the way back was named in the same texts: return to your religion. Not as a slogan — as a prayer prayed on time, a thing learned properly, a job done well, a tongue held, a young person trusted with something real.\n\nThe generation that produced al-Khwarizmi, Ibn al-Haytham and az-Zahrawi was not given better material than us. They were given the same Book, and they took it seriously. The promise in Surah An-Nur has not been withdrawn.",
  closeAr: "فليس جواب «لماذا صار المسلمون هكذا؟» مؤامرةً ولا مصادفة، وليس جواب «كيف نعود؟» لغزًا. فقد سُمّي قبل وقوعه: قلوبٌ أحبّت الدنيا أكثر ممّا ينبغي وكرهت الموت أكثر ممّا ينبغي، وقومٌ انصرفوا إلى دَعَتهم والتمسوا المخارج ممّا أُمروا به، وقوّةٌ ذهبت حين ابتدأ التنازع.\n\nوسُمّي طريق الرجوع في تلك النصوص نفسها: «حتى ترجعوا إلى دينكم». لا شعارًا يُرفع، بل صلاةً في وقتها، وعلمًا يُتقن، وعملًا يُحسن، ولسانًا يُمسك، وشابًّا يُؤتمن على أمرٍ حقيقيّ.\n\nوالجيل الذي أخرج الخوارزمي وابن الهيثم والزهراوي لم يُؤتَ مادّةً خيرًا ممّا أُوتينا. أُوتي الكتاب نفسه فأخذه مأخذ الجدّ. ووعد سورة النور لم يُنسخ ولم يُرفع.",

  note: "This section is a reminder built from the Quran and from graded narrations. It is not a fatwa, not a political programme, and not a judgement on any person, country or group. Read every verse in its full surah, and take any ruling from a scholar.",
  noteAr: "هذا القسم تذكيرٌ مبنيٌّ على القرآن وعلى مرويّاتٍ مبيَّنة الدرجة. وليس فتوى، ولا برنامجًا سياسيًّا، ولا حكمًا على شخصٍ أو بلدٍ أو جماعة. واقرأ كلّ آيةٍ في سياق سورتها كاملة، وخذ الحكم عن أهل العلم."
};
