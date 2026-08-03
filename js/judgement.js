/* ============================================================
   THE DAY OF JUDGEMENT — from death to the final settlement
   ============================================================
   Ordered as it actually happens: dying, the grave, the Trumpet,
   the standing, the settling of debts between people, the Scales,
   the Records, the Bridge, and the gates.

   On sources — the same rule as everywhere on this site. A Quranic
   verse is given with its surah and number. A hadith in al-Bukhari or
   Muslim is given with its number. Where something is well known but
   sits OUTSIDE the two Sahihs — the names Munkar and Nakir, the number
   of the gates of Hell — it is labelled as such rather than presented
   as though it were agreed upon. Nobody is served by being told
   something is certain when it is not.
   ============================================================ */
const JUDGEMENT_STAGES = [

  {
    id: "j-death",
    order: 1,
    title: "When you die — the soul leaving",
    titleAr: "عند الموت — خروج الروح",
    lead: "Death is not the end of you. It is the moment the soul is taken out of the body, and the Quran describes angels appointed to that task.",
    leadAr: "الموت ليس نهايتك، بل هو اللحظة التي تُنتزع فيها الروح من الجسد، وقد ذكر القرآن ملائكةً موكَّلين بذلك.",
    points: [
      { en: "The Angel of Death is put in charge of taking the soul, and then you are returned to your Lord. The Quran does not give him the name 'Azrail' — that name is not in the Quran or in the two Sahihs.",
        ar: "مَلَك الموت مُوكَّلٌ بقبض الروح ثم تُردّون إلى ربكم. ولم يُسمَّ في القرآن ولا في الصحيحين باسم «عزرائيل»، وهذا الاسم ليس فيهما.",
        quran: "قُلْ يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ الَّذِي وُكِّلَ بِكُمْ ثُمَّ إِلَىٰ رَبِّكُمْ تُرْجَعُونَ",
        ref: "Surah As-Sajdah (32:11)" },
      { en: "For the one who denied, the moment of death is when he begs to be sent back — and is refused. The word barzakh is used: a barrier between them and the world, standing until the Day they are raised.",
        ar: "أما المكذِّب فعند الموت يسأل الرجعة فلا يُجاب، ويُذكر البرزخ: حاجزٌ بينه وبين الدنيا إلى يوم يُبعثون.",
        quran: "حَتَّىٰ إِذَا جَاءَ أَحَدَهُمُ الْمَوْتُ قَالَ رَبِّ ارْجِعُونِ ۝ لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ ۚ كَلَّا ۚ إِنَّهَا كَلِمَةٌ هُوَ قَائِلُهَا ۖ وَمِن وَرَائِهِم بَرْزَخٌ إِلَىٰ يَوْمِ يُبْعَثُونَ",
        ref: "Surah Al-Mu'minun (23:99-100)" },
      { en: "The one whose soul is taken in a good state is met with peace and told to enter Paradise for what he used to do.",
        ar: "ومن تُوفِّي طيّبًا تتلقّاه الملائكة بالسلام ويُقال له: ادخل الجنة بما كنت تعمل.",
        quran: "الَّذِينَ تَتَوَفَّاهُمُ الْمَلَائِكَةُ طَيِّبِينَ ۙ يَقُولُونَ سَلَامٌ عَلَيْكُمُ ادْخُلُوا الْجَنَّةَ بِمَا كُنتُمْ تَعْمَلُونَ",
        ref: "Surah An-Nahl (16:32)" }
    ],
    note: "The long, detailed narration of the soul being carried up through the heavens — the shroud from Paradise, the gates opening — is the hadith of al-Bara' ibn Azib. It is not in al-Bukhari or Muslim; it is reported by Ahmad and Abu Dawud and graded authentic by scholars including al-Albani. That is a strong report, but it is not of the rank of the two Sahihs, and this page will not blur the difference.",
    noteAr: "أما الحديث الطويل في صعود الروح بين السماوات وما فيه من الكفن والحنوط وفتح الأبواب فهو حديث البراء بن عازب، وليس في البخاري ولا مسلم، بل رواه أحمد وأبو داود وصحّحه جماعةٌ منهم الألباني. وهو قويٌّ لكنه ليس في رتبة الصحيحين، ولا نخلط بينهما هنا."
  },

  {
    id: "j-grave",
    order: 2,
    title: "In the grave — the two angels and the three questions",
    titleAr: "في القبر — المَلَكان والأسئلة الثلاثة",
    lead: "The grave is not simply storage until the Hour. The Prophet ﷺ described it as either a garden or a pit, and taught his companions to seek refuge from its punishment inside every prayer.",
    leadAr: "القبر ليس مجرّد مستودعٍ إلى قيام الساعة، بل وصفه النبي ﷺ بأنه روضةٌ أو حفرة، وعلَّم أصحابه أن يستعيذوا من عذابه في كل صلاة.",
    points: [
      { en: "Two angels come and sit the dead person up, and question him. The questions are: Who is your Lord? What is your religion? And who is this man who was sent among you? The believer answers and is told to sleep as a bridegroom sleeps.",
        ar: "يأتيه ملكان فيُجلسانه ويسألانه: من ربّك؟ وما دينك؟ ومن هذا الرجل الذي بُعث فيكم؟ فيُجيب المؤمن فيُقال له: نَمْ نومة العروس.",
        quran: "يُثَبِّتُ اللَّهُ الَّذِينَ آمَنُوا بِالْقَوْلِ الثَّابِتِ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ",
        ref: "Surah Ibrahim (14:27) — and the Prophet ﷺ said this verse was revealed about the questioning in the grave: Sahih al-Bukhari, Book of Funerals, Hadith 1369" },
      { en: "Punishment in the grave is real. The Prophet ﷺ passed two graves and said both were being punished, and not for something great in their own eyes: one did not shield himself from his urine, and the other used to walk about carrying tales between people.",
        ar: "وعذاب القبر حقّ؛ مرّ النبي ﷺ بقبرين فقال: إنهما ليُعذَّبان، وما يُعذَّبان في كبير — أما أحدهما فكان لا يستتر من بوله، وأما الآخر فكان يمشي بالنميمة.",
        quran: "",
        ref: "Sahih al-Bukhari, Book of Wudu, Hadith 216 and 218 — Sahih, agreed upon" },
      { en: "He sought refuge from it inside the prayer itself, and taught the companions to do the same.",
        ar: "وكان يستعيذ منه في الصلاة نفسها ويُعلِّم أصحابه ذلك.",
        quran: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
        ref: "Sahih al-Bukhari, Book of Adhan, Hadith 832 — Sahih, agreed upon" }
    ],
    note: "The names Munkar and Nakir for the two angels come from a narration of at-Tirmidhi, not from al-Bukhari or Muslim. The questioning itself is firmly established in the two Sahihs; the two names are not. Both facts are stated here as they are.",
    noteAr: "أما تسمية المَلَكين «منكرًا ونكيرًا» فمن رواية الترمذي لا من البخاري ومسلم. والسؤال نفسه ثابتٌ في الصحيحين، وأما الاسمان فلا. ونذكر الأمرين كما هما."
  },

  {
    id: "j-trumpet",
    order: 3,
    title: "The Trumpet — everything ends, then everything is raised",
    titleAr: "النفخ في الصور — فناءٌ ثم بعث",
    lead: "The Hour begins with a blast on the Trumpet. The Quran describes two blasts: at the first everything in the heavens and the earth falls dead except whom Allah wills; at the second they rise, looking on.",
    leadAr: "تبدأ الساعة بنفخةٍ في الصور. وذكر القرآن نفختين: تصعق الأولى من في السماوات والأرض إلا من شاء الله، ثم يُنفخ فيه أخرى فإذا هم قيامٌ ينظرون.",
    points: [
      { en: "Two blasts, and between them everything created dies.",
        ar: "نفختان، وبينهما يموت كل مخلوق.",
        quran: "وَنُفِخَ فِي الصُّورِ فَصَعِقَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ إِلَّا مَن شَاءَ اللَّهُ ۖ ثُمَّ نُفِخَ فِيهِ أُخْرَىٰ فَإِذَا هُمْ قِيَامٌ يَنظُرُونَ",
        ref: "Surah Az-Zumar (39:68)" },
      { en: "You are raised exactly as you were first created — with nothing. The Prophet ﷺ said: you will be gathered barefoot, naked and uncircumcised. Aishah رضي الله عنها asked whether men and women would look at one another; he said the matter is far too grave for that.",
        ar: "وتُبعث كما خُلقت أول مرة، لا شيء معك. قال النبي ﷺ: تُحشرون حفاةً عراةً غُرلًا. فقالت عائشة رضي الله عنها: الرجال والنساء ينظر بعضهم إلى بعض؟ فقال: الأمر أشدّ من أن يُهمّهم ذلك.",
        quran: "كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُّعِيدُهُ",
        ref: "Sahih al-Bukhari, Book of Ar-Riqaq, Hadith 6527 — Sahih; and Surah Al-Anbiya (21:104)" }
    ],
    note: "The angel who blows the Trumpet is named Israfil in narrations outside the two Sahihs. The Trumpet itself is Quranic and certain; the name is not of the same rank.",
    noteAr: "والملَك الموكَّل بالنفخ سُمّي إسرافيل في رواياتٍ خارج الصحيحين. والصور نفسه قرآنيٌّ قطعيّ، وأما الاسم فليس في رتبته."
  },

  {
    id: "j-standing",
    order: 4,
    title: "The standing — how long, and the sweat",
    titleAr: "الموقف — كم يطول والعرق",
    lead: "Then comes the standing before the Lord of the worlds, and the Quran gives it a measure that is not like our measure.",
    leadAr: "ثم يكون القيام لربّ العالمين، وقد ذكر القرآن مقدارًا ليس كمقاديرنا.",
    points: [
      { en: "A day whose measure is fifty thousand years.",
        ar: "يومٌ كان مقداره خمسين ألف سنة.",
        quran: "تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ إِلَيْهِ فِي يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ",
        ref: "Surah Al-Ma'arij (70:4)" },
      { en: "The sun is brought near and people sweat according to their deeds — some to the ankles, some to the knees, some to the waist, and some are bridled by it up to the mouth.",
        ar: "وتُدنى الشمس فيكون الناس في العرق على قدر أعمالهم: منهم من يبلغ كعبيه، ومنهم من يبلغ ركبتيه، ومنهم من يبلغ حَقْوَيه، ومنهم من يُلجِمه العرق إلجامًا.",
        quran: "",
        ref: "Sahih Muslim, Book of Paradise (Kitab al-Jannah) — Sahih" },
      { en: "Every human being will stand there, and the Quran says plainly that on that Day none will speak except by permission.",
        ar: "ويقف الخلق كلّهم، وقد قال الله إنه يومئذٍ لا تكلَّم نفسٌ إلا بإذنه.",
        quran: "يَوْمَ يَأْتِ لَا تَكَلَّمُ نَفْسٌ إِلَّا بِإِذْنِهِ",
        ref: "Surah Hud (11:105)" }
    ],
    note: "",
    noteAr: ""
  },

  {
    id: "j-rights",
    order: 5,
    title: "The settling of rights — this is where most people are ruined",
    titleAr: "القصاص بين الناس — وهنا يُفلس أكثر الناس",
    lead: "Before anything else is settled, what people took from one another is settled — and it is not settled with money, because there is no money there.",
    leadAr: "قبل كل شيء تُقتصّ الحقوق التي بين الناس، ولا تُقضى بالمال لأنه لا مال هناك.",
    points: [
      { en: "The Prophet ﷺ asked: do you know who the bankrupt one is? They said: the one among us with no money and no possessions. He said: the bankrupt of my nation is the one who comes on the Day of Resurrection with prayer and fasting and zakat — and comes having insulted this one, slandered that one, consumed the wealth of this one, spilt the blood of that one, and struck this one. So this one is given from his good deeds and that one from his good deeds. And if his good deeds run out before what he owes is paid, their sins are taken and thrown onto him, and then he is thrown into the Fire.",
        ar: "قال النبي ﷺ: أتدرون ما المفلس؟ قالوا: المفلس فينا من لا درهم له ولا متاع. فقال: إن المفلس من أمتي يأتي يوم القيامة بصلاةٍ وصيامٍ وزكاة، ويأتي قد شتم هذا، وقذف هذا، وأكل مال هذا، وسفك دم هذا، وضرب هذا؛ فيُعطى هذا من حسناته وهذا من حسناته، فإن فنيت حسناته قبل أن يُقضى ما عليه أُخذ من خطاياهم فطُرحت عليه، ثم طُرح في النار.",
        quran: "إِنَّ الْمُفْلِسَ مِنْ أُمَّتِي يَأْتِي يَوْمَ الْقِيَامَةِ بِصَلَاةٍ وَصِيَامٍ وَزَكَاةٍ",
        ref: "Sahih Muslim, Book of Virtue (Kitab al-Birr), Hadith 6579 — Sahih" },
      { en: "So a person can arrive with a mountain of worship and leave with nothing, because his prayer was never the problem — what he took from people was. Anything taken that is not yours is a debt: money, reputation, a right, an insult never put right.",
        ar: "فقد يأتي العبد بجبالٍ من العبادة ويخرج صِفر اليدين؛ لأن صلاته لم تكن هي المشكلة، وإنما ما أخذه من الناس. وكل ما أُخذ بغير حقّ فهو دَين: مالٌ أو عِرضٌ أو حقٌّ أو شتيمةٌ لم تُردّ.",
        quran: "",
        ref: "The meaning of the hadith above" },
      { en: "There is a private accounting too. Allah will bring the believer near and screen him and make him confess his sins, one by one, until he thinks he is ruined — and then says: I concealed them for you in the world, and I forgive them for you today.",
        ar: "وهناك نجوى خاصّة: يُدني الله المؤمن فيضع عليه كنَفه ويستره ويُقرّره بذنوبه حتى إذا رأى أنه قد هلك قال: سترتُها عليك في الدنيا وأنا أغفرها لك اليوم.",
        quran: "سَتَرْتُهَا عَلَيْكَ فِي الدُّنْيَا وَأَنَا أَغْفِرُهَا لَكَ الْيَوْمَ",
        ref: "Sahih al-Bukhari, Book of Oppressions, Hadith 2441 — Sahih, agreed upon" }
    ],
    note: "The practical conclusion the scholars draw from this is simple and urgent: settle what you owe people while you are still here, where it can still be paid with money and with an apology. After death the only currency is your good deeds.",
    noteAr: "والنتيجة العملية التي يقرّرها أهل العلم من هذا بيّنة وعاجلة: أنْ ترُدّ الحقوق إلى أهلها وأنت في الدنيا، حيث يمكن أن تُقضى بالمال والاعتذار. فبعد الموت لا عُملة إلا الحسنات."
  },

  {
    id: "j-records",
    order: 6,
    title: "The records — in the right hand or the left",
    titleAr: "الصحف — باليمين أو بالشمال",
    lead: "Everyone is given his record, and the Quran describes the two reactions in detail.",
    leadAr: "يُؤتى كلُّ إنسانٍ كتابه، وقد وصف القرآن الحالين وصفًا دقيقًا.",
    points: [
      { en: "The one given it in his right hand calls out to the people: here, read my record — I was certain I would meet my account.",
        ar: "فمن أُوتي كتابه بيمينه نادى الناس: هاؤم اقرؤوا كتابيه، إني ظننتُ أني ملاقٍ حسابيه.",
        quran: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ ۝ إِنِّي ظَنَنتُ أَنِّي مُلَاقٍ حِسَابِيَهْ",
        ref: "Surah Al-Haqqah (69:19-20)" },
      { en: "And the one given it in his left hand wishes he had never been given it, and that his death had been the end.",
        ar: "ومن أُوتي كتابه بشماله تمنّى ألّا يكون أُوتيه، وأن تكون موتته هي القاضية.",
        quran: "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِشِمَالِهِ فَيَقُولُ يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ ۝ وَلَمْ أَدْرِ مَا حِسَابِيَهْ ۝ يَا لَيْتَهَا كَانَتِ الْقَاضِيَةَ",
        ref: "Surah Al-Haqqah (69:25-27)" },
      { en: "Nothing is left out of it — small or large. They will say: what is with this book that it leaves nothing small or great except that it has counted it?",
        ar: "ولا يُغادر الكتاب صغيرةً ولا كبيرة، فيقولون: ما لهذا الكتاب لا يُغادر صغيرةً ولا كبيرةً إلا أحصاها.",
        quran: "وَيَقُولُونَ يَا وَيْلَتَنَا مَالِ هَٰذَا الْكِتَابِ لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا",
        ref: "Surah Al-Kahf (18:49)" }
    ],
    note: "", noteAr: ""
  },

  {
    id: "j-scales",
    order: 7,
    title: "The Scales — weighed to the atom",
    titleAr: "الميزان — وزنٌ بمثقال الذرّة",
    lead: "Scales of justice are set, and nothing is wronged in the slightest.",
    leadAr: "وتُوضع الموازين القسط فلا تُظلم نفسٌ شيئًا.",
    points: [
      { en: "Not the weight of a mustard seed is lost.",
        ar: "ولا يضيع مثقال حبةٍ من خردل.",
        quran: "وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ فَلَا تُظْلَمُ نَفْسٌ شَيْئًا ۖ وَإِن كَانَ مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ أَتَيْنَا بِهَا ۗ وَكَفَىٰ بِنَا حَاسِبِينَ",
        ref: "Surah Al-Anbiya (21:47)" },
      { en: "An atom's weight of good is seen, and an atom's weight of evil is seen.",
        ar: "ومن يعمل مثقال ذرّةٍ خيرًا يره، ومن يعمل مثقال ذرّةٍ شرًّا يره.",
        quran: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
        ref: "Surah Az-Zalzalah (99:7-8)" },
      { en: "Two words, light on the tongue, heavy on the Scale, beloved to the Most Merciful: Subhan Allah wa bihamdih, Subhan Allah al-Azim.",
        ar: "كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم.",
        quran: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَٰنِ",
        ref: "Sahih al-Bukhari, Book of Tawhid, Hadith 7563 — Sahih, agreed upon" }
    ],
    note: "", noteAr: ""
  },

  {
    id: "j-bridge",
    order: 8,
    title: "The Bridge over Hell, and the Basin",
    titleAr: "الصراط والحوض",
    lead: "The Bridge is set over Hell and people cross it at the speed of their deeds. Before it, the Prophet ﷺ waits at his Basin.",
    leadAr: "ويُضرب الصراط على متن جهنم فيمرّ الناس على قدر أعمالهم. وقبله يقف النبي ﷺ على حوضه.",
    points: [
      { en: "The Prophet ﷺ said his pulpit is upon his Basin, and described it as one from which whoever drinks will never thirst again. He said he would be at it before them, and would drive away those who changed after him.",
        ar: "قال النبي ﷺ: منبري على حوضي، ووصفه بأن من شرب منه لم يظمأ بعده أبدًا، وأنه فَرَطهم عليه، وأنه يُذاد عنه من بدّل بعده.",
        quran: "مِنْبَرِي عَلَى حَوْضِي",
        ref: "Sahih al-Bukhari, Book of the Virtues of Madinah, Hadith 1196 — Sahih; the Basin is described in many places in the two Sahihs" },
      { en: "Every one of you will pass over it. Allah says that not one of you is left out of it, then those who feared Him are saved and the wrongdoers are left in it on their knees.",
        ar: "وكلٌّ سيَرِدها؛ قال الله: وإن منكم إلا واردها، ثم يُنجّي الذين اتّقوا ويُترك الظالمون فيها جِثيًّا.",
        quran: "وَإِن مِّنكُمْ إِلَّا وَارِدُهَا ۚ كَانَ عَلَىٰ رَبِّكَ حَتْمًا مَّقْضِيًّا ۝ ثُمَّ نُنَجِّي الَّذِينَ اتَّقَوا وَّنَذَرُ الظَّالِمِينَ فِيهَا جِثِيًّا",
        ref: "Surah Maryam (19:71-72)" }
    ],
    note: "The vivid descriptions of the Bridge as thinner than a hair and sharper than a sword are widely quoted; that exact wording is from reports outside the two Sahihs. What is in the two Sahihs is that the Bridge is set over Hell and that people cross at differing speeds, some snatched and thrown in.",
    noteAr: "وأما ما يُتداول من وصف الصراط بأنه أدقّ من الشعرة وأحدّ من السيف فذلك من رواياتٍ خارج الصحيحين. والثابت في الصحيحين أن الصراط يُضرب على جهنم وأن الناس يمرّون عليه متفاوتين، ومنهم من يُخطف فيُلقى فيها."
  },

  {
    id: "j-gates",
    order: 9,
    title: "The gates — eight for Paradise, and who stands at them",
    titleAr: "الأبواب — ثمانية للجنة ومن عليها",
    lead: "Paradise has eight gates. The Prophet ﷺ named one of them and told Abu Bakr رضي الله عنه that whoever spends a pair of anything in the way of Allah is called from every gate.",
    leadAr: "للجنة ثمانية أبواب، سمّى النبي ﷺ أحدها، وأخبر أبا بكرٍ رضي الله عنه أن من أنفق زوجين في سبيل الله نُودي من الأبواب كلّها.",
    points: [
      { en: "Paradise has eight gates, and one of them is called Ar-Rayyan, through which none will enter but those who fast.",
        ar: "في الجنة ثمانية أبواب، منها بابٌ يُسمّى الرَّيّان لا يدخل منه إلا الصائمون.",
        quran: "فِي الْجَنَّةِ ثَمَانِيَةُ أَبْوَابٍ، فِيهَا بَابٌ يُسَمَّى الرَّيَّانَ لَا يَدْخُلُهُ إِلَّا الصَّائِمُونَ",
        ref: "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3257 — Sahih; and the gate of Ar-Rayyan also in Hadith 1896" },
      { en: "Whoever spends a pair of anything in the way of Allah is called from the gates of Paradise — and there are gates for prayer, for fighting in Allah's cause, for fasting, and for charity. Abu Bakr رضي الله عنه asked whether anyone would be called from all of them, and the Prophet ﷺ said yes, and he hoped Abu Bakr would be one of them.",
        ar: "من أنفق زوجين في سبيل الله نُودي من أبواب الجنة: فمن أهل الصلاة يُدعى من باب الصلاة، ومن أهل الجهاد من باب الجهاد، ومن أهل الصيام من باب الريّان، ومن أهل الصدقة من باب الصدقة. فقال أبو بكر: هل يُدعى أحدٌ من تلك الأبواب كلّها؟ قال: نعم، وأرجو أن تكون منهم.",
        quran: "",
        ref: "Sahih al-Bukhari, Book of Fasting, Hadith 1897 — Sahih, agreed upon" },
      { en: "Hell has seven gates, each with an assigned portion of those who follow Iblis.",
        ar: "ولجهنم سبعة أبواب، لكل بابٍ منهم جزءٌ مقسوم.",
        quran: "وَإِنَّ جَهَنَّمَ لَمَوْعِدُهُمْ أَجْمَعِينَ ۝ لَهَا سَبْعَةُ أَبْوَابٍ لِّكُلِّ بَابٍ مِّنْهُمْ جُزْءٌ مَّقْسُومٌ",
        ref: "Surah Al-Hijr (15:43-44)" },
      { en: "Over Hell are nineteen, and its keeper is called Malik — those who are in it call out to him asking that their Lord finish them, and he answers that they will remain.",
        ar: "وعليها تسعة عشر، وخازنها مالك؛ ينادونه أن يقضي عليهم ربّهم فيقول: إنكم ماكثون.",
        quran: "وَنَادَوْا يَا مَالِكُ لِيَقْضِ عَلَيْنَا رَبُّكَ ۖ قَالَ إِنَّكُم مَّاكِثُونَ",
        ref: "Surah Az-Zukhruf (43:77); and the nineteen in Surah Al-Muddaththir (74:30)" },
      { en: "The gatekeepers of Paradise are described in the Quran, and the believers are met with: peace be upon you, you have done well, so enter it to remain.",
        ar: "وخزنة الجنة مذكورون في القرآن، ويُستقبل المؤمنون بقول: سلامٌ عليكم طبتم فادخلوها خالدين.",
        quran: "وَسِيقَ الَّذِينَ اتَّقَوْا رَبَّهُمْ إِلَى الْجَنَّةِ زُمَرًا ۖ حَتَّىٰ إِذَا جَاءُوهَا وَفُتِحَتْ أَبْوَابُهَا وَقَالَ لَهُمْ خَزَنَتُهَا سَلَامٌ عَلَيْكُمْ طِبْتُمْ فَادْخُلُوهَا خَالِدِينَ",
        ref: "Surah Az-Zumar (39:73)" }
    ],
    note: "Names given in popular accounts for each individual gate of Paradise, and for the angel at each one, are mostly not found in al-Bukhari or Muslim. What IS established: eight gates; the gate of Ar-Rayyan for those who fast; gates named after deeds — prayer, jihad, fasting, charity; seven gates of Hell; nineteen over it; and its keeper Malik. Anything beyond that is not presented here as certain.",
    noteAr: "وأما ما يُذكر في بعض الكتب من أسماءٍ لكل بابٍ من أبواب الجنة ولملَكٍ على كل باب فأكثره ليس في البخاري ولا مسلم. والثابت: ثمانية أبواب، وباب الريّان للصائمين، وأبوابٌ باسم الأعمال: الصلاة والجهاد والصيام والصدقة، وسبعة أبوابٍ لجهنم، وتسعة عشر عليها، وخازنها مالك. وما وراء ذلك لا نُقدّمه هنا على أنه قطعيّ."
  },

  {
    id: "j-alone",
    order: 10,
    title: "In the end you stand alone — even your mother will want her right",
    titleAr: "وفي النهاية تقف وحدك — حتى أمّك تطلب حقّها",
    lead: "This is the part people find hardest, and the Quran states it without softening. On that Day the closest people to you will not be beside you — they will be occupied with themselves, and some of them will be asking for what you owe them.",
    leadAr: "وهذا أشقّ ما يقع في النفس، وقد قرّره القرآن دون تلطيف: يوم القيامة لا يقف معك أقرب الناس إليك، بل يشغلهم أمرهم، وبعضهم يطالبك بحقّه.",
    points: [
      { en: "A man will flee from his brother, and his mother and his father, and his wife and his children — because on that Day every man has a matter that is enough to occupy him entirely. Read the words: he flees from his own mother.",
        ar: "يفرّ المرء من أخيه، وأمّه وأبيه، وصاحبته وبنيه؛ لأن لكل امرئٍ منهم يومئذٍ شأنٌ يُغنيه. وتأمّل اللفظ: يفرّ من أمّه.",
        quran: "يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ ۝ وَأُمِّهِ وَأَبِيهِ ۝ وَصَاحِبَتِهِ وَبَنِيهِ ۝ لِكُلِّ امْرِئٍ مِّنْهُمْ يَوْمَئِذٍ شَأْنٌ يُغْنِيهِ",
        ref: "Surah 'Abasa (80:34-37)" },
      { en: "No one carries anyone else's burden. Even if a heavily laden soul calls another to carry some of it, nothing of it will be carried — not even by a close relative.",
        ar: "ولا تزر وازرةٌ وزر أخرى؛ وإن تدعُ مُثقَلةٌ إلى حِملها لا يُحمل منه شيءٌ ولو كان ذا قربى.",
        quran: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ ۚ وَإِن تَدْعُ مُثْقَلَةٌ إِلَىٰ حِمْلِهَا لَا يُحْمَلْ مِنْهُ شَيْءٌ وَلَوْ كَانَ ذَا قُرْبَىٰ",
        ref: "Surah Fatir (35:18)" },
      { en: "Fear a Day when no father will avail his son, and no son will avail his father in anything.",
        ar: "واخشوا يومًا لا يجزي والدٌ عن ولده، ولا مولودٌ هو جازٍ عن والده شيئًا.",
        quran: "وَاخْشَوْا يَوْمًا لَّا يَجْزِي وَالِدٌ عَن وَلَدِهِ وَلَا مَوْلُودٌ هُوَ جَازٍ عَن وَالِدِهِ شَيْئًا",
        ref: "Surah Luqman (31:33)" },
      { en: "The Prophet ﷺ made it personal to his own family so nobody could imagine lineage would save them. He called them by name — Fatimah, daughter of Muhammad — and said: ask me of my wealth what you wish, but I cannot avail you anything against Allah.",
        ar: "وقد خصّ النبي ﷺ أهله بالنداء لئلا يظنّ أحدٌ أن النسب يُغني، فنادى: يا فاطمة بنت محمد، سليني من مالي ما شئتِ، لا أُغني عنك من الله شيئًا.",
        quran: "يَا فَاطِمَةُ بِنْتَ مُحَمَّدٍ، سَلِينِي مِنْ مَالِي مَا شِئْتِ، لَا أُغْنِي عَنْكِ مِنَ اللَّهِ شَيْئًا",
        ref: "Sahih al-Bukhari, Book of Tafsir, Hadith 4771 — Sahih, agreed upon" },
      { en: "So what does remain with you? The one thing you brought — a sound heart. On the Day when neither wealth nor children benefit anyone, except one who comes to Allah with a sound heart.",
        ar: "فما الذي يبقى معك؟ الشيء الوحيد الذي جئتَ به: قلبٌ سليم. يوم لا ينفع مالٌ ولا بنون، إلا من أتى الله بقلبٍ سليم.",
        quran: "يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ ۝ إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ",
        ref: "Surah Ash-Shu'ara (26:88-89)" }
    ],
    note: "None of this means cutting off your parents or your family — the same Quran commands kindness to parents in the strongest terms, and the Prophet ﷺ said the greatest deed after the prayer is goodness to them. What it means is that nobody can stand in for you, and no relationship transfers your account to someone else. Give people their rights now, while a wrong can still be put right with an apology and a payment — and hold on to the only One who is still there when everyone else has their own matter to answer for.",
    noteAr: "وليس في هذا قطيعةٌ للوالدين ولا للأهل؛ فالقرآن نفسه يأمر بالإحسان إليهما بأبلغ العبارات، وقال النبي ﷺ إن أعظم العمل بعد الصلاة برّهما. وإنما معناه أن أحدًا لا ينوب عنك، وأن القرابة لا تنقل حسابك إلى غيرك. فأدِّ الحقوق الآن ما دامت المظلمة تُردّ باعتذارٍ وأداء، وتمسّك بالذي يبقى وحده حين يكون لكل أحدٍ شأنٌ يُغنيه."
  }
];
