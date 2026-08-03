/* ============================================================
   THE SCHOLARS AND THEIR BOOKS — العلماء وكتبهم
   ------------------------------------------------------------
   Which scholar wrote what, what each book is actually for, and
   where to read it — so a reader who wants to go past a summary
   knows which volume to open.

   Ordered by when they lived, not by fame.
   ============================================================ */

const SCHOLARS = [
  {
    id: "sch-shafii",
    name: "Al-Imam ash-Shafi'i",
    nameAr: "الإمام الشافعي",
    years: "150–204 AH",
    yearsAr: "١٥٠–٢٠٤ هـ",
    known: "The founder of usul al-fiqh — the study of how a ruling is derived in the first place.",
    knownAr: "واضع علم أصول الفقه — وهو النظر في كيفية استنباط الحكم أصلًا.",
    books: [
      { t: "Ar-Risalah", tAr: "الرسالة",
        d: "The first book written on how rulings are derived: the Quran, the Sunnah, consensus, analogy.",
        dAr: "أول ما صُنّف في أصول الاستنباط: الكتاب والسنة والإجماع والقياس." },
      { t: "Al-Umm", tAr: "الأمّ",
        d: "His fiqh in his own words, with the reasoning shown rather than only the conclusion.",
        dAr: "فقهه بلفظه، يذكر الدليل والتعليل لا الحكم وحده." }
    ]
  },
  {
    id: "sch-nawawi",
    name: "Al-Imam an-Nawawi",
    nameAr: "الإمام النووي",
    years: "631–676 AH",
    yearsAr: "٦٣١–٦٧٦ هـ",
    known: "The most widely read of them all — few Muslim households have never had one of his books in them.",
    knownAr: "أكثرهم انتشارًا في الناس، حتى قلّ بيتٌ خلا من كتابٍ من كتبه.",
    books: [
      { t: "Riyad as-Salihin", tAr: "رياض الصالحين",
        d: "Hadith arranged by subject — the book to open for manners, the tongue, patience and dealing with people. The chapters on backbiting cited in the Guidance section are from it.",
        dAr: "أحاديث مرتبة على الأبواب — يُفتح للأخلاق واللسان والصبر ومعاملة الناس. ومنه أبواب الغيبة المذكورة في قسم التوجيه." },
      { t: "Al-Adhkar", tAr: "الأذكار",
        d: "What is said and when — the classical source behind most collections of adhkar since.",
        dAr: "ما يُقال ومتى — وهو الأصل الذي بُنيت عليه أكثر كتب الأذكار بعده." },
      { t: "Sharh Sahih Muslim", tAr: "شرح صحيح مسلم",
        d: "His commentary on Muslim, still the first place looked to for the meaning of a hadith in it.",
        dAr: "شرحه لصحيح مسلم، ولا يزال أول ما يُرجع إليه في معاني أحاديثه." },
      { t: "Al-Arba'in an-Nawawiyyah", tAr: "الأربعون النووية",
        d: "Forty-two hadith that between them carry the foundations of the religion.",
        dAr: "اثنان وأربعون حديثًا تجتمع فيها قواعد الدين." }
    ]
  },
  {
    id: "sch-ibn-taymiyyah",
    name: "Shaykh al-Islam Ibn Taymiyyah",
    nameAr: "شيخ الإسلام ابن تيمية",
    years: "661–728 AH",
    yearsAr: "٦٦١–٧٢٨ هـ",
    known: "The one later scholars quote most when a question is hard. He wrote in prison, and much of what survives he wrote from memory with no library in front of him.",
    knownAr: "أكثر من يُنقل عنه عند اشتداد المسألة. كتب في السجن، وكثيرٌ مما بقي من كلامه كتبه من حفظه بغير كتابٍ بين يديه.",
    books: [
      { t: "Majmu' al-Fatawa", tAr: "مجموع الفتاوى",
        d: "Thirty-seven volumes gathering his answers across creed, worship, transactions and conduct. This is the work meant wherever this site says Ibn Taymiyyah held something.",
        dAr: "سبعة وثلاثون مجلدًا تجمع أجوبته في العقيدة والعبادات والمعاملات والسلوك. وهو المراد كلما قيل في هذا الموقع: ذهب ابن تيمية إلى كذا." },
      { t: "Al-Aqidah al-Wasitiyyah", tAr: "العقيدة الواسطية",
        d: "A short, precise statement of belief, written in one sitting when he was asked for it. Ibn Uthaymeen's commentary on it is the usual way in.",
        dAr: "رسالة وجيزة محرَّرة في الاعتقاد، كتبها في مجلسٍ واحد حين سُئلها. وشرح ابن عثيمين لها هو المدخل المعتاد إليها." },
      { t: "Iqtida' as-Sirat al-Mustaqim", tAr: "اقتضاء الصراط المستقيم",
        d: "On telling the practice of Islam apart from what was absorbed into it from elsewhere.",
        dAr: "في تمييز هدي الإسلام عمّا دخل عليه من غيره." },
      { t: "Al-Ubudiyyah", tAr: "العبودية",
        d: "Short, and about the one thing everything else rests on: what it means to be a servant.",
        dAr: "رسالة صغيرة في الأصل الذي يقوم عليه كل شيء: معنى العبودية." },
      { t: "Al-Kalim at-Tayyib", tAr: "الكلم الطيب",
        d: "The adhkar of the day, gathered by him — and later checked hadith by hadith by al-Albani.",
        dAr: "أذكار اليوم جمعها، وخرّج أحاديثها بعده الألباني حديثًا حديثًا." }
    ]
  },
  {
    id: "sch-ibn-qayyim",
    name: "Ibn al-Qayyim",
    nameAr: "ابن القيّم الجوزية",
    years: "691–751 AH",
    yearsAr: "٦٩١–٧٥١ هـ",
    known: "Ibn Taymiyyah's student, and the one who wrote the heart into the fiqh. If the question is about the state of your soul rather than the ruling, he is the one to read.",
    knownAr: "تلميذ ابن تيمية، والذي كتب أحوال القلوب مع الفقه. فإذا كان السؤال عن حال النفس لا عن الحكم فهو الذي يُقرأ.",
    books: [
      { t: "Madarij as-Salikin", tAr: "مدارج السالكين",
        d: "The stations of the road to Allah, one by one — repentance, patience, gratitude, reliance, love.",
        dAr: "منازل الطريق إلى الله منزلةً منزلة — التوبة والصبر والشكر والتوكل والمحبة." },
      { t: "Zad al-Ma'ad", tAr: "زاد المعاد",
        d: "The guidance of the Prophet ﷺ in everything: worship, medicine, dealings, travel, family.",
        dAr: "هدي النبي ﷺ في كل شيء: العبادة والطب والمعاملة والسفر والأهل." },
      { t: "Ad-Da' wad-Dawa'", tAr: "الداء والدواء",
        d: "Written for someone trapped in a sin he cannot leave. Also called Al-Jawab al-Kafi.",
        dAr: "كُتب لمن ابتُلي بذنبٍ لا يستطيع تركه. ويُسمّى أيضًا: الجواب الكافي." },
      { t: "Ighathat al-Lahfan", tAr: "إغاثة اللهفان",
        d: "On the traps of Shaytan, and how each one is actually escaped.",
        dAr: "في مكايد الشيطان وكيف الخلاص منها عمليًّا." }
    ]
  },
  {
    id: "sch-ibn-kathir",
    name: "Ibn Kathir",
    nameAr: "الحافظ ابن كثير",
    years: "701–774 AH",
    yearsAr: "٧٠١–٧٧٤ هـ",
    known: "The tafsir people are pointed to first, because it explains the Quran with the Quran, then with the hadith, before anything else.",
    knownAr: "أشهر تفسيرٍ يُدلّ عليه المبتدئ، لأنه يفسّر القرآن بالقرآن ثم بالسنة قبل كل شيء.",
    books: [
      { t: "Tafsir al-Qur'an al-Azim", tAr: "تفسير القرآن العظيم",
        d: "Verse by verse, explained first by other verses, then by hadith, then by the companions.",
        dAr: "آيةً آية، يفسّرها بالآيات ثم بالأحاديث ثم بأقوال الصحابة." },
      { t: "Al-Bidaya wan-Nihaya", tAr: "البداية والنهاية",
        d: "History from the beginning of creation onwards. This site cites it for the prophets, and always labels it historical sira rather than hadith.",
        dAr: "التاريخ من بدء الخلق. ويستشهد به هذا الموقع في الأنبياء، ويصفه دائمًا بأنه سيرة تاريخية لا حديث." }
    ]
  },
  {
    id: "sch-ibn-hajar",
    name: "Al-Hafiz Ibn Hajar al-Asqalani",
    nameAr: "الحافظ ابن حجر العسقلاني",
    years: "773–852 AH",
    yearsAr: "٧٧٣–٨٥٢ هـ",
    known: "The one who explained al-Bukhari, and whose verdict on a narrator is still quoted as decisive.",
    knownAr: "شارح البخاري، ولا يزال حكمه على الراوي يُنقل فاصلًا.",
    books: [
      { t: "Fath al-Bari", tAr: "فتح الباري",
        d: "The commentary on Sahih al-Bukhari. When the meaning of a hadith on this site needs settling, this is where it is settled.",
        dAr: "شرح صحيح البخاري. وإذا احتيج إلى تحرير معنى حديثٍ في هذا الموقع فمن هنا يُحرَّر." },
      { t: "Bulugh al-Maram", tAr: "بلوغ المرام",
        d: "The hadith of the rulings, gathered short, with the grading given for each one.",
        dAr: "أحاديث الأحكام مجموعةً موجزة، مع بيان درجة كل حديث." },
      { t: "Al-Isabah fi Tamyiz as-Sahabah", tAr: "الإصابة في تمييز الصحابة",
        d: "The companions one by one — a reference behind much of the Companions section here.",
        dAr: "الصحابة واحدًا واحدًا — وهو مرجعٌ خلف كثيرٍ من قسم الصحابة هنا." }
    ]
  },
  {
    id: "sch-sadi",
    name: "Shaykh Abdur-Rahman as-Sa'di",
    nameAr: "الشيخ عبد الرحمن السعدي",
    years: "1307–1376 AH",
    yearsAr: "١٣٠٧–١٣٧٦ هـ",
    known: "Ibn Uthaymeen's own teacher, and the author of the clearest short tafsir there is.",
    knownAr: "شيخ ابن عثيمين، وصاحب أوضح تفسيرٍ مختصر.",
    books: [
      { t: "Taysir al-Karim ar-Rahman", tAr: "تيسير الكريم الرحمن",
        d: "Known simply as Tafsir as-Sa'di. Plain language, one volume, no chains to wade through — the tafsir to start with.",
        dAr: "المعروف بتفسير السعدي. عبارة سهلة، ومجلد واحد، بلا أسانيد تُثقل القارئ — وهو أول ما يُبدأ به في التفسير." },
      { t: "Al-Qawa'id al-Hisan", tAr: "القواعد الحسان",
        d: "Rules for understanding the Quran as a whole, rather than the meaning of a single verse.",
        dAr: "قواعد في فهم القرآن جملةً، لا في معنى آيةٍ بعينها." }
    ]
  },
  {
    id: "sch-ibn-baz",
    name: "Shaykh Abdul-Aziz ibn Baz",
    nameAr: "الشيخ عبد العزيز بن باز",
    years: "1330–1420 AH",
    yearsAr: "١٣٣٠–١٤٢٠ هـ",
    known: "Blind from his youth, and asked more questions by more ordinary people than almost any scholar of his century. A great deal of his fiqh exists because someone telephoned a radio programme.",
    knownAr: "كُفّ بصره في شبابه، وسُئل من عامة الناس ما لم يُسأله كثيرٌ من علماء قرنه. وكثيرٌ من فقهه محفوظٌ لأن سائلًا اتصل ببرنامجٍ في الإذاعة.",
    books: [
      { t: "Majmu' Fatawa wa Maqalat Mutanawwi'ah", tAr: "مجموع فتاوى ومقالات متنوعة",
        d: "His collected fatwas and articles, over thirty volumes. This is the work meant wherever this site says Ibn Baz answered something.",
        dAr: "مجموع فتاواه ومقالاته في أكثر من ثلاثين مجلدًا. وهو المراد كلما قيل هنا: أجاب ابن باز." },
      { t: "Fatawa Nur 'ala ad-Darb", tAr: "فتاوى نور على الدرب",
        d: "The radio answers — spoken to ordinary people about ordinary problems, which is exactly why they are the clearest thing he left.",
        dAr: "أجوبة البرنامج الإذاعي — خاطب بها عامة الناس في مسائلهم، ولذلك كانت أوضح ما ترك." },
      { t: "At-Tahqiq wal-Idah", tAr: "التحقيق والإيضاح",
        d: "Hajj, Umrah and the visit to the Prophet's mosque, written to be carried and used.",
        dAr: "في الحج والعمرة والزيارة، كُتب ليُحمل ويُعمل به." },
      { t: "Al-Aqidah as-Sahihah wa ma Yudadduha", tAr: "العقيدة الصحيحة وما يضادها",
        d: "A short statement of correct belief and what contradicts it.",
        dAr: "رسالة وجيزة في صحيح الاعتقاد وما ينقضه." },
      { t: "binbaz.org.sa", tAr: "binbaz.org.sa",
        d: "The official archive — every fatwa searchable, in his own wording, in text and audio.",
        dAr: "الموقع الرسمي — كل فتوى بنصّها وصوتها مع إمكان البحث." }
    ]
  },
  {
    id: "sch-albani",
    name: "Shaykh Muhammad Nasir ad-Din al-Albani",
    nameAr: "الشيخ محمد ناصر الدين الألباني",
    years: "1332–1420 AH",
    yearsAr: "١٣٣٢–١٤٢٠ هـ",
    known: "A watch repairer by trade who spent his life on the chains of hadith. Wherever this site says a hadith outside the two Sahihs was authenticated by al-Albani, this is the man and these are the books.",
    knownAr: "كان مُصلِّح ساعات، وأفنى عمره في أسانيد الحديث. وإذا قيل هنا إن حديثًا خارج الصحيحين صحّحه الألباني فهو هذا، وهذه كتبه.",
    books: [
      { t: "Silsilat al-Ahadith as-Sahihah", tAr: "سلسلة الأحاديث الصحيحة",
        d: "Authentic hadith outside the two Sahihs, with the reason for each grading given.",
        dAr: "الأحاديث الصحيحة خارج الصحيحين، مع بيان علة الحكم في كل حديث." },
      { t: "Silsilat al-Ahadith ad-Da'ifah", tAr: "سلسلة الأحاديث الضعيفة",
        d: "The companion volume: what is weak or fabricated — including a great many things people repeat as hadith.",
        dAr: "قرينتها: الضعيف والموضوع، وفيه كثيرٌ مما يتداوله الناس على أنه حديث." },
      { t: "Sahih al-Jami' as-Saghir", tAr: "صحيح الجامع الصغير",
        d: "A quick way to check whether a short hadith you have heard is authentic.",
        dAr: "طريق سريع لمعرفة صحة الحديث القصير الذي تسمعه." },
      { t: "Jilbab al-Mar'ah al-Muslimah", tAr: "جلباب المرأة المسلمة",
        d: "His argument that the face and hands need not be covered — the other side of the disagreement set out in the Guidance section.",
        dAr: "بيان قوله بجواز كشف الوجه والكفّين — وهو القول الآخر في الخلاف المذكور في قسم التوجيه." }
    ]
  },
  {
    id: "sch-ibn-uthaymeen",
    name: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    nameAr: "الشيخ محمد بن صالح العثيمين",
    years: "1347–1421 AH",
    yearsAr: "١٣٤٧–١٤٢١ هـ",
    known: "A teacher above everything else. He explains why a ruling is what it is, which is why his books are the ones put into a beginner's hands.",
    knownAr: "معلّمٌ قبل كل شيء. يبيّن لِمَ كان الحكم كذلك، ولذلك كانت كتبه أول ما يوضع في يد المبتدئ.",
    books: [
      { t: "Ash-Sharh al-Mumti'", tAr: "الشرح الممتع",
        d: "Fifteen volumes of fiqh explained from Zad al-Mustaqni', with the evidence and the disagreement laid out every time.",
        dAr: "خمسة عشر مجلدًا في الفقه شرحًا لزاد المستقنع، مع بسط الدليل والخلاف في كل مسألة." },
      { t: "Majmu' Fatawa wa Rasa'il", tAr: "مجموع فتاوى ورسائل",
        d: "His collected fatwas and treatises — the source of most of what this site attributes to him.",
        dAr: "مجموع فتاواه ورسائله — ومنه أكثر ما يُنسب إليه في هذا الموقع." },
      { t: "Sharh Riyad as-Salihin", tAr: "شرح رياض الصالحين",
        d: "His commentary on an-Nawawi's book, and the easiest of all of this to begin with.",
        dAr: "شرحه لكتاب النووي، وهو أيسر ما يُبدأ به من هذا كلّه." },
      { t: "Sharh al-Aqidah al-Wasitiyyah", tAr: "شرح العقيدة الواسطية",
        d: "His explanation of Ibn Taymiyyah's creed — the usual way that book is read today.",
        dAr: "شرحه لعقيدة ابن تيمية — وهو الطريق المعتاد لقراءتها اليوم." },
      { t: "binothaimeen.net", tAr: "binothaimeen.net",
        d: "The official archive of his lessons, fatwas and books.",
        dAr: "الموقع الرسمي لدروسه وفتاواه وكتبه." }
    ]
  }
];
