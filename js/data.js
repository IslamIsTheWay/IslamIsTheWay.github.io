/* ============================================
   Islam Is The Way — Data
   Surahs of the Quran, Prophets, and Companions
   ============================================ */

// ---------- The 114 Surahs of the Quran ----------
const SURAHS = [
  { n: 1, name: "Al-Fatihah", arabic: "الفاتحة", meaning: "The Opening", verses: 7, place: "Meccan" },
  { n: 2, name: "Al-Baqarah", arabic: "البقرة", meaning: "The Cow", verses: 286, place: "Medinan" },
  { n: 3, name: "Ali 'Imran", arabic: "آل عمران", meaning: "The Family of Imran", verses: 200, place: "Medinan" },
  { n: 4, name: "An-Nisa", arabic: "النساء", meaning: "The Women", verses: 176, place: "Medinan" },
  { n: 5, name: "Al-Ma'idah", arabic: "المائدة", meaning: "The Table Spread", verses: 120, place: "Medinan" },
  { n: 6, name: "Al-An'am", arabic: "الأنعام", meaning: "The Cattle", verses: 165, place: "Meccan" },
  { n: 7, name: "Al-A'raf", arabic: "الأعراف", meaning: "The Heights", verses: 206, place: "Meccan" },
  { n: 8, name: "Al-Anfal", arabic: "الأنفال", meaning: "The Spoils of War", verses: 75, place: "Medinan" },
  { n: 9, name: "At-Tawbah", arabic: "التوبة", meaning: "The Repentance", verses: 129, place: "Medinan" },
  { n: 10, name: "Yunus", arabic: "يونس", meaning: "Jonah", verses: 109, place: "Meccan" },
  { n: 11, name: "Hud", arabic: "هود", meaning: "Hud", verses: 123, place: "Meccan" },
  { n: 12, name: "Yusuf", arabic: "يوسف", meaning: "Joseph", verses: 111, place: "Meccan" },
  { n: 13, name: "Ar-Ra'd", arabic: "الرعد", meaning: "The Thunder", verses: 43, place: "Medinan" },
  { n: 14, name: "Ibrahim", arabic: "ابراهيم", meaning: "Abraham", verses: 52, place: "Meccan" },
  { n: 15, name: "Al-Hijr", arabic: "الحجر", meaning: "The Rocky Tract", verses: 99, place: "Meccan" },
  { n: 16, name: "An-Nahl", arabic: "النحل", meaning: "The Bee", verses: 128, place: "Meccan" },
  { n: 17, name: "Al-Isra", arabic: "الإسراء", meaning: "The Night Journey", verses: 111, place: "Meccan" },
  { n: 18, name: "Al-Kahf", arabic: "الكهف", meaning: "The Cave", verses: 110, place: "Meccan" },
  { n: 19, name: "Maryam", arabic: "مريم", meaning: "Mary", verses: 98, place: "Meccan" },
  { n: 20, name: "Ta-Ha", arabic: "طه", meaning: "Ta-Ha", verses: 135, place: "Meccan" },
  { n: 21, name: "Al-Anbiya", arabic: "الأنبياء", meaning: "The Prophets", verses: 112, place: "Meccan" },
  { n: 22, name: "Al-Hajj", arabic: "الحج", meaning: "The Pilgrimage", verses: 78, place: "Medinan" },
  { n: 23, name: "Al-Mu'minun", arabic: "المؤمنون", meaning: "The Believers", verses: 118, place: "Meccan" },
  { n: 24, name: "An-Nur", arabic: "النور", meaning: "The Light", verses: 64, place: "Medinan" },
  { n: 25, name: "Al-Furqan", arabic: "الفرقان", meaning: "The Criterion", verses: 77, place: "Meccan" },
  { n: 26, name: "Ash-Shu'ara", arabic: "الشعراء", meaning: "The Poets", verses: 227, place: "Meccan" },
  { n: 27, name: "An-Naml", arabic: "النمل", meaning: "The Ants", verses: 93, place: "Meccan" },
  { n: 28, name: "Al-Qasas", arabic: "القصص", meaning: "The Narration", verses: 88, place: "Meccan" },
  { n: 29, name: "Al-Ankabut", arabic: "العنكبوت", meaning: "The Spider", verses: 69, place: "Meccan" },
  { n: 30, name: "Ar-Rum", arabic: "الروم", meaning: "The Romans", verses: 60, place: "Meccan" },
  { n: 31, name: "Luqman", arabic: "لقمان", meaning: "Luqman", verses: 34, place: "Meccan" },
  { n: 32, name: "As-Sajdah", arabic: "السجدة", meaning: "The Prostration", verses: 30, place: "Meccan" },
  { n: 33, name: "Al-Ahzab", arabic: "الأحزاب", meaning: "The Combined Forces", verses: 73, place: "Medinan" },
  { n: 34, name: "Saba", arabic: "سبأ", meaning: "Sheba", verses: 54, place: "Meccan" },
  { n: 35, name: "Fatir", arabic: "فاطر", meaning: "Originator", verses: 45, place: "Meccan" },
  { n: 36, name: "Ya-Sin", arabic: "يس", meaning: "Ya Sin", verses: 83, place: "Meccan" },
  { n: 37, name: "As-Saffat", arabic: "الصافات", meaning: "Those Ranged in Ranks", verses: 182, place: "Meccan" },
  { n: 38, name: "Sad", arabic: "ص", meaning: "The Letter Sad", verses: 88, place: "Meccan" },
  { n: 39, name: "Az-Zumar", arabic: "الزمر", meaning: "The Troops", verses: 75, place: "Meccan" },
  { n: 40, name: "Ghafir", arabic: "غافر", meaning: "The Forgiver", verses: 85, place: "Meccan" },
  { n: 41, name: "Fussilat", arabic: "فصلت", meaning: "Explained in Detail", verses: 54, place: "Meccan" },
  { n: 42, name: "Ash-Shuraa", arabic: "الشورى", meaning: "The Consultation", verses: 53, place: "Meccan" },
  { n: 43, name: "Az-Zukhruf", arabic: "الزخرف", meaning: "The Ornaments of Gold", verses: 89, place: "Meccan" },
  { n: 44, name: "Ad-Dukhan", arabic: "الدخان", meaning: "The Smoke", verses: 59, place: "Meccan" },
  { n: 45, name: "Al-Jathiyah", arabic: "الجاثية", meaning: "The Crouching", verses: 37, place: "Meccan" },
  { n: 46, name: "Al-Ahqaf", arabic: "الأحقاف", meaning: "The Wind-Curved Sandhills", verses: 35, place: "Meccan" },
  { n: 47, name: "Muhammad", arabic: "محمد", meaning: "Muhammad", verses: 38, place: "Medinan" },
  { n: 48, name: "Al-Fath", arabic: "الفتح", meaning: "The Victory", verses: 29, place: "Medinan" },
  { n: 49, name: "Al-Hujurat", arabic: "الحجرات", meaning: "The Rooms", verses: 18, place: "Medinan" },
  { n: 50, name: "Qaf", arabic: "ق", meaning: "The Letter Qaf", verses: 45, place: "Meccan" },
  { n: 51, name: "Adh-Dhariyat", arabic: "الذاريات", meaning: "The Winnowing Winds", verses: 60, place: "Meccan" },
  { n: 52, name: "At-Tur", arabic: "الطور", meaning: "The Mount", verses: 49, place: "Meccan" },
  { n: 53, name: "An-Najm", arabic: "النجم", meaning: "The Star", verses: 62, place: "Meccan" },
  { n: 54, name: "Al-Qamar", arabic: "القمر", meaning: "The Moon", verses: 55, place: "Meccan" },
  { n: 55, name: "Ar-Rahman", arabic: "الرحمن", meaning: "The Most Merciful", verses: 78, place: "Medinan" },
  { n: 56, name: "Al-Waqi'ah", arabic: "الواقعة", meaning: "The Inevitable", verses: 96, place: "Meccan" },
  { n: 57, name: "Al-Hadid", arabic: "الحديد", meaning: "The Iron", verses: 29, place: "Medinan" },
  { n: 58, name: "Al-Mujadila", arabic: "المجادلة", meaning: "The Pleading Woman", verses: 22, place: "Medinan" },
  { n: 59, name: "Al-Hashr", arabic: "الحشر", meaning: "The Exile", verses: 24, place: "Medinan" },
  { n: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", meaning: "The Woman to be Examined", verses: 13, place: "Medinan" },
  { n: 61, name: "As-Saff", arabic: "الصف", meaning: "The Ranks", verses: 14, place: "Medinan" },
  { n: 62, name: "Al-Jumu'ah", arabic: "الجمعة", meaning: "Friday", verses: 11, place: "Medinan" },
  { n: 63, name: "Al-Munafiqun", arabic: "المنافقون", meaning: "The Hypocrites", verses: 11, place: "Medinan" },
  { n: 64, name: "At-Taghabun", arabic: "التغابن", meaning: "The Mutual Disillusion", verses: 18, place: "Medinan" },
  { n: 65, name: "At-Talaq", arabic: "الطلاق", meaning: "The Divorce", verses: 12, place: "Medinan" },
  { n: 66, name: "At-Tahrim", arabic: "التحريم", meaning: "The Prohibition", verses: 12, place: "Medinan" },
  { n: 67, name: "Al-Mulk", arabic: "الملك", meaning: "The Sovereignty", verses: 30, place: "Meccan" },
  { n: 68, name: "Al-Qalam", arabic: "القلم", meaning: "The Pen", verses: 52, place: "Meccan" },
  { n: 69, name: "Al-Haqqah", arabic: "الحاقة", meaning: "The Reality", verses: 52, place: "Meccan" },
  { n: 70, name: "Al-Ma'arij", arabic: "المعارج", meaning: "The Ascending Stairways", verses: 44, place: "Meccan" },
  { n: 71, name: "Nuh", arabic: "نوح", meaning: "Noah", verses: 28, place: "Meccan" },
  { n: 72, name: "Al-Jinn", arabic: "الجن", meaning: "The Jinn", verses: 28, place: "Meccan" },
  { n: 73, name: "Al-Muzzammil", arabic: "المزمل", meaning: "The Enshrouded One", verses: 20, place: "Meccan" },
  { n: 74, name: "Al-Muddaththir", arabic: "المدثر", meaning: "The Cloaked One", verses: 56, place: "Meccan" },
  { n: 75, name: "Al-Qiyamah", arabic: "القيامة", meaning: "The Resurrection", verses: 40, place: "Meccan" },
  { n: 76, name: "Al-Insan", arabic: "الانسان", meaning: "Man", verses: 31, place: "Medinan" },
  { n: 77, name: "Al-Mursalat", arabic: "المرسلات", meaning: "The Emissaries", verses: 50, place: "Meccan" },
  { n: 78, name: "An-Naba", arabic: "النبأ", meaning: "The Tidings", verses: 40, place: "Meccan" },
  { n: 79, name: "An-Naziat", arabic: "النازعات", meaning: "Those who Drag Forth", verses: 46, place: "Meccan" },
  { n: 80, name: "Abasa", arabic: "عبس", meaning: "He Frowned", verses: 42, place: "Meccan" },
  { n: 81, name: "At-Takwir", arabic: "التكوير", meaning: "The Overthrowing", verses: 29, place: "Meccan" },
  { n: 82, name: "Al-Infitar", arabic: "الإنفطار", meaning: "The Cleaving", verses: 19, place: "Meccan" },
  { n: 83, name: "Al-Mutaffifin", arabic: "المطففين", meaning: "The Defrauding", verses: 36, place: "Meccan" },
  { n: 84, name: "Al-Inshiqaq", arabic: "الإنشقاق", meaning: "The Sundering", verses: 25, place: "Meccan" },
  { n: 85, name: "Al-Buruj", arabic: "البروج", meaning: "The Constellations", verses: 22, place: "Meccan" },
  { n: 86, name: "At-Tariq", arabic: "الطارق", meaning: "The Morning Star", verses: 17, place: "Meccan" },
  { n: 87, name: "Al-A'la", arabic: "الأعلى", meaning: "The Most High", verses: 19, place: "Meccan" },
  { n: 88, name: "Al-Ghashiyah", arabic: "الغاشية", meaning: "The Overwhelming", verses: 26, place: "Meccan" },
  { n: 89, name: "Al-Fajr", arabic: "الفجر", meaning: "The Dawn", verses: 30, place: "Meccan" },
  { n: 90, name: "Al-Balad", arabic: "البلد", meaning: "The City", verses: 20, place: "Meccan" },
  { n: 91, name: "Ash-Shams", arabic: "الشمس", meaning: "The Sun", verses: 15, place: "Meccan" },
  { n: 92, name: "Al-Layl", arabic: "الليل", meaning: "The Night", verses: 21, place: "Meccan" },
  { n: 93, name: "Ad-Duhaa", arabic: "الضحى", meaning: "The Morning Hours", verses: 11, place: "Meccan" },
  { n: 94, name: "Ash-Sharh", arabic: "الشرح", meaning: "The Relief", verses: 8, place: "Meccan" },
  { n: 95, name: "At-Tin", arabic: "التين", meaning: "The Fig", verses: 8, place: "Meccan" },
  { n: 96, name: "Al-Alaq", arabic: "العلق", meaning: "The Clot", verses: 19, place: "Meccan" },
  { n: 97, name: "Al-Qadr", arabic: "القدر", meaning: "The Power", verses: 5, place: "Meccan" },
  { n: 98, name: "Al-Bayyinah", arabic: "البينة", meaning: "The Clear Proof", verses: 8, place: "Medinan" },
  { n: 99, name: "Az-Zalzalah", arabic: "الزلزلة", meaning: "The Earthquake", verses: 8, place: "Medinan" },
  { n: 100, name: "Al-Adiyat", arabic: "العاديات", meaning: "The Courser", verses: 11, place: "Meccan" },
  { n: 101, name: "Al-Qari'ah", arabic: "القارعة", meaning: "The Calamity", verses: 11, place: "Meccan" },
  { n: 102, name: "At-Takathur", arabic: "التكاثر", meaning: "The Rivalry in World Increase", verses: 8, place: "Meccan" },
  { n: 103, name: "Al-Asr", arabic: "العصر", meaning: "The Declining Day", verses: 3, place: "Meccan" },
  { n: 104, name: "Al-Humazah", arabic: "الهمزة", meaning: "The Traducer", verses: 9, place: "Meccan" },
  { n: 105, name: "Al-Fil", arabic: "الفيل", meaning: "The Elephant", verses: 5, place: "Meccan" },
  { n: 106, name: "Quraysh", arabic: "قريش", meaning: "Quraysh", verses: 4, place: "Meccan" },
  { n: 107, name: "Al-Ma'un", arabic: "الماعون", meaning: "The Small Kindnesses", verses: 7, place: "Meccan" },
  { n: 108, name: "Al-Kawthar", arabic: "الكوثر", meaning: "The Abundance", verses: 3, place: "Meccan" },
  { n: 109, name: "Al-Kafirun", arabic: "الكافرون", meaning: "The Disbelievers", verses: 6, place: "Meccan" },
  { n: 110, name: "An-Nasr", arabic: "النصر", meaning: "The Divine Support", verses: 3, place: "Medinan" },
  { n: 111, name: "Al-Masad", arabic: "المسد", meaning: "The Palm Fiber", verses: 5, place: "Meccan" },
  { n: 112, name: "Al-Ikhlas", arabic: "الإخلاص", meaning: "The Sincerity", verses: 4, place: "Meccan" },
  { n: 113, name: "Al-Falaq", arabic: "الفلق", meaning: "The Daybreak", verses: 5, place: "Meccan" },
  { n: 114, name: "An-Nas", arabic: "الناس", meaning: "Mankind", verses: 6, place: "Meccan" }
];

// ---------- Prophets in Islam ----------
const PROPHETS = [
  {
    id: "adam",
    name: "Adam",
    arabic: "آدم",
    title: "Father of Mankind",
    category: "prophet",
    summary: "The first human being and the first prophet of Islam, created by Allah from clay and honored with the breath of life. He and his wife Hawwa (Eve) were placed in Paradise, then sent to Earth, where Adam became the first to receive revelation and divine guidance.",
    summaryAr: "أبو البشر وأول الأنبياء، خلقه الله من طين ونفخ فيه من روحه، وأسجد له الملائكة، ثم أُهبط إلى الأرض فتاب الله عليه وهداه.",
    refs: [
      "Surah Al-Baqarah (2:30-39) — the creation of Adam and the angels' prostration",
      "Surah Al-A'raf (7:11-25) — the story of Adam, Iblis, and the Garden",
      "Surah Ta-Ha (20:115-123) — Adam's repentance and Allah's forgiveness"
    ]
  },
  {
    id: "idris",
    name: "Idris",
    arabic: "إدريس",
    title: "The Truthful Prophet",
    category: "prophet",
    summary: "Often identified with the figure known as Enoch, Idris is described in the Quran as a man of truth and patience who was raised to a high station by Allah.",
    summaryAr: "نبي صدّيق صابر، أثنى الله عليه في القرآن ورفعه مكاناً عليّاً.",
    refs: [
      "Surah Maryam (19:56-57) — Idris was a man of truth, raised to a high station",
      "Surah Al-Anbiya (21:85) — mentioned among the patient ones"
    ]
  },
  {
    id: "nuh",
    name: "Nuh (Noah)",
    arabic: "نوح",
    title: "The Patient Caller",
    category: "prophet",
    summary: "Nuh called his people to worship Allah alone for nearly a thousand years, but most rejected him. Allah commanded him to build an ark, and a great flood destroyed the disbelievers while Nuh, his believing family, and pairs of animals were saved.",
    summaryAr: "دعا قومه إلى عبادة الله وحده قرابة ألف سنة، فلما كذبوه أمره الله ببناء السفينة، فأنجاه والمؤمنين وأغرق الكافرين بالطوفان.",
    refs: [
      "Surah Nuh (71) — an entire chapter devoted to his story and supplication",
      "Surah Hud (11:25-49) — the flood and the ark",
      "Surah Al-Ankabut (29:14) — he remained among his people 1,000 years less fifty"
    ]
  },
  {
    id: "hud",
    name: "Hud",
    arabic: "هود",
    title: "Prophet to the People of 'Ad",
    category: "prophet",
    summary: "Hud was sent to the ancient people of 'Ad, a powerful civilization in southern Arabia, who worshipped idols and were proud of their strength. When they rejected his call, Allah destroyed them with a furious wind that lasted for days.",
    summaryAr: "أُرسل إلى قوم عاد أصحاب القوة والبنيان، فلما كذبوه أهلكهم الله بريح صرصر عاتية.",
    refs: [
      "Surah Hud (11:50-60) — Hud's call and the fate of 'Ad",
      "Surah Al-A'raf (7:65-72) — his warning and their rejection",
      "Surah Al-Haqqah (69:6-8) — the howling wind that destroyed them"
    ]
  },
  {
    id: "salih",
    name: "Salih",
    arabic: "صالح",
    title: "Prophet to the People of Thamud",
    category: "prophet",
    summary: "Salih was sent to the people of Thamud, who carved magnificent homes into the mountains. Allah sent them a miraculous she-camel as a sign, but they defied the warning and hamstrung it, and were destroyed by a mighty blast.",
    summaryAr: "أُرسل إلى قوم ثمود الذين نحتوا الجبال بيوتاً، وجاءهم بآية الناقة، فعقروها فأخذتهم الصيحة.",
    refs: [
      "Surah Hud (11:61-68) — Salih and the she-camel",
      "Surah Ash-Shams (91:11-15) — the hamstringing and the punishment",
      "Surah Al-A'raf (7:73-79) — the sign of the she-camel"
    ]
  },
  {
    id: "ibrahim",
    name: "Ibrahim (Abraham)",
    arabic: "إبراهيم",
    title: "Khalil-Allah (Friend of Allah)",
    category: "prophet",
    summary: "Known as the father of the prophets, Ibrahim broke his people's idols, was thrown into a fire and saved by Allah, and was tested with the command to sacrifice his son Ismail. Together with Ismail, he rebuilt the Kaaba in Makkah as a house of worship for Allah alone.",
    summaryAr: "خليل الله وأبو الأنبياء، حطّم أصنام قومه ونجّاه الله من النار، وابتُلي بذبح ابنه فصدق، ورفع القواعد من البيت الحرام مع إسماعيل.",
    refs: [
      "Surah Al-Anbiya (21:51-73) — Ibrahim and the idols",
      "Surah As-Saffat (37:99-111) — the trial of sacrificing his son",
      "Surah Al-Baqarah (2:124-129) — raising the foundations of the Kaaba",
      "Surah Ibrahim (14) — named after him, containing his supplications"
    ]
  },
  {
    id: "lut",
    name: "Lut (Lot)",
    arabic: "لوط",
    title: "The Righteous Nephew of Ibrahim",
    category: "prophet",
    summary: "A nephew and follower of Ibrahim, Lut was sent to the people of Sodom, who committed grave sins. When they refused to repent, Allah sent angels to rescue Lut and his believing family, then destroyed the cities with a rain of stones.",
    summaryAr: "ابن أخي إبراهيم، أُرسل إلى قوم سدوم ينهاهم عن الفاحشة، فلما أبوا أنجاه الله وأهله وأمطر عليهم حجارة من سجيل.",
    refs: [
      "Surah Hud (11:77-83) — the angels' visit and the cities' destruction",
      "Surah Al-A'raf (7:80-84) — Lut's warning to his people",
      "Surah Ash-Shu'ara (26:160-175) — his mission and the punishment"
    ]
  },
  {
    id: "ismail",
    name: "Ismail (Ishmael)",
    arabic: "إسماعيل",
    title: "The Patient Son",
    category: "prophet",
    summary: "The eldest son of Ibrahim, Ismail submitted willingly when his father told him of the command to sacrifice him, and Allah ransomed him with a great sacrifice. He helped his father build the Kaaba and is honored for his truthfulness and patience.",
    summaryAr: "الابن الأكبر لإبراهيم، استسلم لأمر الله بالذبح ففداه الله بذبح عظيم، وساعد أباه في بناء الكعبة، ووُصف بأنه صادق الوعد.",
    refs: [
      "Surah As-Saffat (37:101-107) — Ismail's submission and the ransom",
      "Surah Al-Baqarah (2:127) — raising the foundations of the House",
      "Surah Maryam (19:54) — described as true to his promise"
    ]
  },
  {
    id: "ishaq",
    name: "Ishaq (Isaac)",
    arabic: "إسحاق",
    title: "Son of the Promise",
    category: "prophet",
    summary: "The second son of Ibrahim, born to Sarah in their old age as glad tidings from Allah. Ishaq was blessed with prophethood, and from his lineage came many later prophets, including Yaqub.",
    summaryAr: "ابن إبراهيم من سارة، بشّرت به الملائكة على الكبر، ومن ذريته جاء كثير من الأنبياء.",
    refs: [
      "Surah As-Saffat (37:112-113) — the glad tidings of Ishaq's birth",
      "Surah Hud (11:71-73) — the angels' announcement to Ibrahim and Sarah"
    ]
  },
  {
    id: "yaqub",
    name: "Yaqub (Jacob)",
    arabic: "يعقوب",
    title: "Israel",
    category: "prophet",
    summary: "The son of Ishaq and father of twelve sons including Yusuf, Yaqub (also called Israel) endured years of grief over the loss of his son Yusuf, yet never lost hope in Allah's mercy, and was eventually reunited with him in Egypt.",
    summaryAr: "ابن إسحاق وأبو الأسباط، ويسمى إسرائيل، صبر على فقد يوسف صبراً جميلاً حتى جمعهما الله في مصر.",
    refs: [
      "Surah Yusuf (12) — Yaqub's patience throughout his son's story",
      "Surah Al-Baqarah (2:132-133) — his advice to his sons before passing away"
    ]
  },
  {
    id: "yusuf",
    name: "Yusuf (Joseph)",
    arabic: "يوسف",
    title: "The Truthful, Trustworthy One",
    category: "prophet",
    summary: "Sold into slavery by his jealous brothers, Yusuf rose from a prison cell to become a trusted minister in Egypt. His story — described as 'the best of stories' — illustrates patience, forgiveness, and unwavering trust in Allah's plan.",
    summaryAr: "ألقاه إخوته في البئر ثم بيع عبداً في مصر، فرفعه الله من السجن إلى خزائن الأرض، وقصته أحسن القصص في الصبر والعفو.",
    refs: [
      "Surah Yusuf (12) — the complete narrative, called 'the best of stories' (12:3)",
      "Surah Yusuf (12:90) — forgiveness of his brothers"
    ]
  },
  {
    id: "ayyub",
    name: "Ayyub (Job)",
    arabic: "أيوب",
    title: "The Patient One",
    category: "prophet",
    summary: "Ayyub was afflicted with severe illness and loss of wealth and family, yet he never ceased to praise Allah. His patience became proverbial, and Allah ultimately restored his health, family, and fortune in reward for his steadfastness.",
    summaryAr: "ضُرب به المثل في الصبر، ابتُلي في جسده وماله وأهله فما زاد إلا حمداً، فكشف الله ضره وردّ عليه أهله وماله.",
    refs: [
      "Surah Al-Anbiya (21:83-84) — his supplication and Allah's healing",
      "Surah Sad (38:41-44) — his patience under affliction"
    ]
  },
  {
    id: "shuayb",
    name: "Shuayb",
    arabic: "شعيب",
    title: "The Eloquent Preacher",
    category: "prophet",
    summary: "Shuayb was sent to the people of Madyan, who were known for cheating in trade and weights and measures. He called them to honesty and the worship of Allah alone, but most rejected him and were destroyed.",
    summaryAr: "خطيب الأنبياء، أُرسل إلى أهل مدين ينهاهم عن بخس المكيال والميزان، فلما كذبوه أخذتهم الرجفة.",
    refs: [
      "Surah Al-A'raf (7:85-93) — Shuayb's call to the people of Madyan",
      "Surah Hud (11:84-95) — honesty in trade and measures"
    ]
  },
  {
    id: "musa",
    name: "Musa (Moses)",
    arabic: "موسى",
    title: "Kalim-Allah (One Who Spoke with Allah)",
    category: "prophet",
    summary: "Raised in Pharaoh's palace, Musa was sent back to confront Pharaoh and free the Children of Israel from oppression. He received the Torah, witnessed numerous miracles, and is the most frequently mentioned prophet in the Quran.",
    summaryAr: "كليم الله، نشأ في قصر فرعون ثم أُرسل إليه بالآيات، وأنجى الله به بني إسرائيل وأنزل عليه التوراة، وهو أكثر الأنبياء ذكراً في القرآن.",
    refs: [
      "Surah Al-Baqarah (2:49-57) — the Exodus and miracles",
      "Surah Ta-Ha (20:9-98) — his calling and confrontation with Pharaoh",
      "Surah Al-Qasas (28:1-43) — his early life and journey to Madyan"
    ]
  },
  {
    id: "harun",
    name: "Harun (Aaron)",
    arabic: "هارون",
    title: "The Eloquent Helper",
    category: "prophet",
    summary: "The brother of Musa, Harun was appointed by Allah as a helper and minister to support Musa in conveying the message to Pharaoh and guiding the Children of Israel.",
    summaryAr: "أخو موسى ووزيره، أرسله الله معه إلى فرعون فصيحاً معيناً على تبليغ الرسالة.",
    refs: [
      "Surah Ta-Ha (20:29-36) — Musa's request for Harun as a helper",
      "Surah Al-Anbiya (21:48) — Musa and Harun given the Scripture"
    ]
  },
  {
    id: "dawud",
    name: "Dawud (David)",
    arabic: "داود",
    title: "The Grateful King",
    category: "prophet",
    summary: "Dawud was given kingship, wisdom, and the ability to recite the Zabur (Psalms) with such beauty that even mountains and birds joined his praise. He was also granted skill in crafting iron armor.",
    summaryAr: "آتاه الله الملك والحكمة والزبور، وسخّر معه الجبال والطير يسبّحن، وألان له الحديد.",
    refs: [
      "Surah Al-Anbiya (21:78-80) — wisdom in judgment and armor-making",
      "Surah Saba (34:10-11) — softening of iron and praise alongside the birds",
      "Surah Al-Isra (17:55) — the giving of the Zabur"
    ]
  },
  {
    id: "sulaiman",
    name: "Sulaiman (Solomon)",
    arabic: "سليمان",
    title: "The Wise King",
    category: "prophet",
    summary: "Son of Dawud, Sulaiman inherited prophethood and a vast kingdom, and was given control over the wind, the jinn, and the ability to understand the language of birds and animals. His story with the Queen of Sheba (Bilqis) shows his wisdom and devotion to Allah.",
    summaryAr: "ابن داود، ورث النبوة والملك، وسخّر الله له الريح والجن ومنطق الطير، وقصته مع ملكة سبأ شاهدة على حكمته.",
    refs: [
      "Surah An-Naml (27:15-44) — Sulaiman, the hoopoe bird, and the Queen of Sheba",
      "Surah Saba (34:12-14) — dominion over the jinn and the wind",
      "Surah Sad (38:30-40) — his repentance and restored kingdom"
    ]
  },
  {
    id: "ilyas",
    name: "Ilyas (Elijah)",
    arabic: "إلياس",
    title: "The Devoted Caller",
    category: "prophet",
    summary: "Ilyas was sent to the people of Baal (an idol cult) to call them back to the worship of Allah alone. He is praised in the Quran as one of the righteous messengers.",
    summaryAr: "أُرسل إلى قوم يعبدون بعلاً فدعاهم إلى الله وحده، وأثنى الله عليه في المرسلين.",
    refs: [
      "Surah As-Saffat (37:123-132) — Ilyas and the worship of Baal",
      "Surah Al-An'am (6:85) — listed among the righteous"
    ]
  },
  {
    id: "al-yasa",
    name: "Al-Yasa (Elisha)",
    arabic: "اليسع",
    title: "The Favored Prophet",
    category: "prophet",
    summary: "Al-Yasa is mentioned in the Quran as a prophet favored by Allah and counted among the righteous and patient. He is believed to have succeeded Ilyas in guiding the Children of Israel.",
    summaryAr: "من الأنبياء الأخيار الذين فضّلهم الله على العالمين، خلف إلياس في هداية بني إسرائيل.",
    refs: [
      "Surah Sad (38:48) — mentioned alongside Ismail and Dhul-Kifl among the best",
      "Surah Al-An'am (6:86) — listed among those favored above all people"
    ]
  },
  {
    id: "dhul-kifl",
    name: "Dhul-Kifl",
    arabic: "ذو الكفل",
    title: "The One of the Pledge",
    category: "prophet",
    summary: "Dhul-Kifl is mentioned in the Quran among the patient and righteous. Scholars have different views on his identity, but he is honored as one who fulfilled his covenant and was counted among the good.",
    summaryAr: "ذكره الله مع الصابرين الأخيار، ووفى بما التزم به فكان من المحسنين.",
    refs: [
      "Surah Al-Anbiya (21:85-86) — mentioned alongside Ismail and Idris among the patient",
      "Surah Sad (38:48) — mentioned among the best and chosen"
    ]
  },
  {
    id: "yunus",
    name: "Yunus (Jonah)",
    arabic: "يونس",
    title: "Dhul-Nun (The One of the Whale)",
    category: "prophet",
    summary: "Yunus left his people in frustration before receiving Allah's permission and was swallowed by a great fish. In the darkness of the whale's belly, he called out in repentance, and Allah saved him, after which his people came to believe.",
    summaryAr: "صاحب الحوت، خرج من قومه مغاضباً فالتقمه الحوت، فنادى في الظلمات: لا إله إلا أنت سبحانك إني كنت من الظالمين، فنجّاه الله وآمن قومه.",
    refs: [
      "Surah As-Saffat (37:139-148) — Yunus and the great fish",
      "Surah Al-Anbiya (21:87-88) — his supplication 'La ilaha illa Anta...'",
      "Surah Al-Qalam (68:48-50) — lessons in patience"
    ]
  },
  {
    id: "zakariya",
    name: "Zakariya (Zechariah)",
    arabic: "زكريا",
    title: "The Devoted Guardian",
    category: "prophet",
    summary: "An elderly prophet and guardian of Maryam (Mary), Zakariya prayed earnestly for a son despite his old age and his wife's barrenness. Allah answered his prayer with the birth of Yahya (John).",
    summaryAr: "كفل مريم ودعا ربه على الكبر أن يهبه ولداً، فبشّره الله بيحيى.",
    refs: [
      "Surah Maryam (19:2-15) — Zakariya's prayer and the glad tidings of Yahya",
      "Surah Ali 'Imran (3:37-41) — his guardianship of Maryam"
    ]
  },
  {
    id: "yahya",
    name: "Yahya (John the Baptist)",
    arabic: "يحيى",
    title: "The Pure Youth",
    category: "prophet",
    summary: "The son of Zakariya, Yahya was given wisdom from a young age, was dutiful to his parents, and lived a life of purity and devotion to Allah.",
    summaryAr: "ابن زكريا، آتاه الله الحكم صبياً، وكان براً بوالديه تقياً نقياً.",
    refs: [
      "Surah Maryam (19:12-15) — Yahya's wisdom, mercy, and purity",
      "Surah Al-Anbiya (21:90) — mentioned alongside Zakariya"
    ]
  },
  {
    id: "isa",
    name: "Isa (Jesus)",
    arabic: "عيسى",
    title: "Al-Masih (The Messiah), son of Maryam",
    category: "prophet",
    summary: "Born miraculously to the virgin Maryam, Isa was granted the Gospel (Injil) and performed many miracles by Allah's permission, including healing the sick and speaking as an infant in defense of his mother's honor. Islam teaches that he was raised to Allah and was not crucified.",
    summaryAr: "المسيح ابن مريم، وُلد بمعجزة من غير أب، وتكلم في المهد، وأحيا الموتى وأبرأ المرضى بإذن الله، ورفعه الله إليه ولم يُصلب.",
    refs: [
      "Surah Maryam (19:16-34) — the miraculous birth of Isa",
      "Surah Al-Imran (3:45-49) — his miracles by Allah's leave",
      "Surah An-Nisa (4:157-158) — Allah raised him to Himself"
    ]
  },
  {
    id: "shith",
    name: "Shith (Seth)",
    arabic: "شيث",
    title: "Son of Adam",
    category: "prophet",
    summary: "Shith is identified in Islamic tradition as a son of Adam and a prophet who received scriptures from Allah. After the death of Adam, Shith continued to guide humanity according to the teachings of his father.",
    summaryAr: "ابن آدم عليه السلام، أنزل الله عليه صحفاً وواصل هداية الناس بعد أبيه.",
    refs: [
      "Ibn Kathir, Al-Bidaya wan-Nihaya — the story of Shith after Adam",
      "Mentioned in the hadith of the Night Journey (Isra and Mi'raj) — Sahih al-Bukhari"
    ]
  },
  {
    id: "yusha",
    name: "Yusha ibn Nun (Joshua)",
    arabic: "يوشع بن نون",
    title: "Successor of Musa",
    category: "prophet",
    summary: "Yusha ibn Nun was the young attendant of Musa mentioned in the Quran in the story of Al-Khidr. In hadith tradition, he succeeded Musa as leader and prophet of the Children of Israel and led them into the Holy Land.",
    summaryAr: "فتى موسى المذكور في سورة الكهف، خلفه في قيادة بني إسرائيل ودخل بهم الأرض المقدسة.",
    refs: [
      "Surah Al-Kahf (18:60-62) — 'his young attendant' (identified as Yusha in hadith)",
      "Sahih Muslim, Book of Jihad — the Prophet ﷺ identified the young man of Musa as Yusha ibn Nun"
    ]
  },
  {
    id: "samuel",
    name: "Shamwil (Samuel)",
    arabic: "شمويل",
    title: "The Prophet Who Appointed Talut (Saul)",
    category: "prophet",
    summary: "Shamwil is the prophet referenced in the Quran who was asked by the Children of Israel to appoint a king to lead them in battle. He appointed Talut (Saul) by Allah's command and foretold the Ark of the Covenant as a sign of his kingship.",
    summaryAr: "النبي الذي طلب منه بنو إسرائيل تعيين ملك يقاتلون معه، فعيّن لهم طالوت بأمر الله.",
    refs: [
      "Surah Al-Baqarah (2:246-251) — the prophet who appointed Talut as king",
      "Ibn Kathir, Stories of the Prophets — identified as Shamwil (Samuel)"
    ]
  },
  {
    id: "danyal",
    name: "Danyal (Daniel)",
    arabic: "دانيال",
    title: "The Prophet of Babylon",
    category: "prophet",
    summary: "Danyal is mentioned in Islamic tradition as a prophet among the Children of Israel who lived during the Babylonian exile. When his grave was discovered during the conquest of Tustar, the Caliph Umar ordered that he be reburied in a hidden location to prevent veneration.",
    summaryAr: "من أنبياء بني إسرائيل في زمن السبي البابلي، وُجد جسده في فتوح تستر فأمر عمر بدفنه سراً.",
    refs: [
      "Musannaf Ibn Abi Shaybah — account of the discovery of Danyal's body during Umar's caliphate",
      "Ibn Kathir, Al-Bidaya wan-Nihaya — his mention among the prophets of Israel"
    ]
  },
  {
    id: "muhammad",
    name: "Muhammad ﷺ",
    arabic: "محمد",
    title: "The Final Messenger, Seal of the Prophets",
    category: "prophet",
    summary: "Born in Makkah in the Year of the Elephant, Muhammad ﷺ received the first revelation of the Quran at age 40 through the angel Jibril in the cave of Hira. Over 23 years he conveyed the final message of Islam, established the first Muslim community in Madinah, and is described in the Quran as a mercy to all of creation and the seal of the prophets.",
    summaryAr: "خاتم النبيين ورحمة الله للعالمين ﷺ، نزل عليه القرآن في غار حراء، وبلّغ الرسالة ثلاثاً وعشرين سنة، وأقام أول مجتمع مسلم في المدينة.",
    refs: [
      "Surah Al-Ahzab (33:40) — the Seal of the Prophets",
      "Surah Al-Anbiya (21:107) — sent as a mercy to all worlds",
      "Surah Al-Alaq (96:1-5) — the first verses revealed in the cave of Hira",
      "Surah Al-Isra (17:1) — the Night Journey (Isra and Mi'raj)"
    ]
  }
];

// ---------- Companions (Sahaba) of Prophet Muhammad ﷺ ----------
const COMPANIONS = [
  {
    id: "abu-bakr",
    name: "Abu Bakr As-Siddiq",
    arabic: "أبو بكر الصديق",
    title: "First Caliph, As-Siddiq (The Truthful)",
    category: "companion",
    summary: "The closest friend of the Prophet ﷺ and the first adult male to accept Islam outside the Prophet's household. He earned the title 'As-Siddiq' for immediately believing the account of the Night Journey. He accompanied the Prophet ﷺ on the migration to Madinah and became the first Caliph after the Prophet's death.",
    summaryAr: "أقرب أصحاب النبي ﷺ وأول من آمن به من الرجال، لُقّب بالصدّيق لتصديقه حادثة الإسراء، ورافق النبي ﷺ في الهجرة وأصبح أول الخلفاء الراشدين.",
    refs: [
      "Surah At-Tawbah (9:40) — companionship in the cave during the migration",
      "Sahih al-Bukhari — narrations on his unwavering belief and leadership",
      "Historical sira accounts of the first Caliphate (632-634 CE)"
    ]
  },
  {
    id: "umar",
    name: "Umar ibn al-Khattab",
    arabic: "عمر بن الخطاب",
    title: "Second Caliph, Al-Farooq (The Distinguisher)",
    category: "companion",
    summary: "Once a fierce opponent of Islam, Umar's conversion strengthened the early Muslim community. As the second Caliph, he oversaw vast territorial expansion, established the Islamic calendar, and was renowned for his justice, humility, and strict accountability — even of himself.",
    summaryAr: "أسلم فقوّى الله به الإسلام، وكان ثاني الخلفاء الراشدين، اشتهر بعدله وزهده، وفي عهده اتسعت الفتوحات ووُضع التقويم الهجري.",
    refs: [
      "Sahih al-Bukhari & Sahih Muslim — numerous narrations on his justice and piety",
      "Historical accounts of the Caliphate (634-644 CE) and administrative reforms"
    ]
  },
  {
    id: "uthman",
    name: "Uthman ibn Affan",
    arabic: "عثمان بن عفان",
    title: "Third Caliph, Dhun-Nurayn (Possessor of Two Lights)",
    category: "companion",
    summary: "Known for his immense generosity, modesty, and his role in compiling the Quran into a single standardized text during his Caliphate. He married two of the Prophet's daughters, earning the title 'possessor of two lights'.",
    summaryAr: "ذو النورين، تزوج ابنتي النبي ﷺ، عُرف بحيائه وكرمه العظيم، وفي خلافته جُمع القرآن على مصحف واحد.",
    refs: [
      "Sahih al-Bukhari — narrations on the compilation of the Quran",
      "Historical accounts of the Caliphate (644-656 CE)"
    ]
  },
  {
    id: "ali",
    name: "Ali ibn Abi Talib",
    arabic: "علي بن أبي طالب",
    title: "Fourth Caliph, Cousin and Son-in-Law of the Prophet ﷺ",
    category: "companion",
    summary: "Raised in the Prophet's household and one of the first to embrace Islam, Ali was known for his courage in battle, deep knowledge, and eloquence. He married the Prophet's daughter Fatimah and became the fourth Caliph.",
    summaryAr: "ابن عم النبي ﷺ وزوج ابنته فاطمة، من أوائل من أسلم، اشتهر بشجاعته وعلمه وفصاحته، وهو رابع الخلفاء الراشدين.",
    refs: [
      "Sahih al-Bukhari & Sahih Muslim — narrations on his knowledge and courage",
      "Historical accounts of the Caliphate (656-661 CE)"
    ]
  },
  {
    id: "khadijah",
    name: "Khadijah bint Khuwaylid",
    arabic: "خديجة بنت خويلد",
    title: "Mother of the Believers, First Wife of the Prophet ﷺ",
    category: "companion",
    summary: "A successful and respected merchant of Makkah, Khadijah was the first person to believe in the Prophet's mission, comforting and supporting him after the first revelation. She remained his devoted wife until her death, and the Prophet ﷺ always remembered her with deep love and honor.",
    summaryAr: "أم المؤمنين وأول من آمن بالنبي ﷺ، ساندته بمالها ونفسها بعد نزول الوحي، وبقيت زوجته الوحيدة حتى وفاتها.",
    refs: [
      "Sahih al-Bukhari — the account of the first revelation and Khadijah's support",
      "Sira accounts describing her as one of the four greatest women in Islam"
    ]
  },
  {
    id: "aisha",
    name: "Aisha bint Abu Bakr",
    arabic: "عائشة بنت أبي بكر",
    title: "Mother of the Believers, Scholar of Islam",
    category: "companion",
    summary: "The daughter of Abu Bakr and wife of the Prophet ﷺ, Aisha became one of the most important sources of hadith and Islamic jurisprudence, narrating thousands of traditions and teaching both men and women after the Prophet's death.",
    summaryAr: "أم المؤمنين بنت أبي بكر، من أعلم الناس بالحديث والفقه، روت آلاف الأحاديث وعلّمت الرجال والنساء بعد وفاة النبي ﷺ.",
    refs: [
      "Sahih al-Bukhari & Sahih Muslim — thousands of hadith narrated through her",
      "Historical accounts of her role as a teacher and jurist in Madinah"
    ]
  },
  {
    id: "fatimah",
    name: "Fatimah bint Muhammad",
    arabic: "فاطمة بنت محمد",
    title: "Sayyidat Nisa al-Jannah (Leader of the Women of Paradise)",
    category: "companion",
    summary: "The youngest daughter of the Prophet ﷺ and wife of Ali ibn Abi Talib, Fatimah was known for her piety, patience, and closeness to her father. The Prophet ﷺ described her as one of the leading women of Paradise.",
    summaryAr: "ابنة النبي ﷺ الصغرى وزوجة علي بن أبي طالب، سيدة نساء أهل الجنة، عُرفت بتقواها وصبرها وقربها من أبيها.",
    refs: [
      "Sahih al-Bukhari — narrations describing her status and closeness to the Prophet ﷺ",
      "Sira accounts of her life in Madinah"
    ]
  },
  {
    id: "bilal",
    name: "Bilal ibn Rabah",
    arabic: "بلال بن رباح",
    title: "The First Muezzin of Islam",
    category: "companion",
    summary: "A formerly enslaved Abyssinian man, Bilal endured severe persecution for accepting Islam but never renounced his faith, repeating 'Ahad, Ahad' (One, One) under torture. He was freed and became the first person to call the adhan (call to prayer) in Islam.",
    summaryAr: "مؤذن الإسلام الأول، عُذّب في مكة ليترك دينه فثبت قائلاً: أحدٌ أحد، فأعتقه أبو بكر وأصبح مؤذن النبي ﷺ.",
    refs: [
      "Sira accounts of his persecution and steadfastness in early Makkah",
      "Sahih al-Bukhari — narrations on his role as the Prophet's muezzin"
    ]
  },
  {
    id: "khalid",
    name: "Khalid ibn al-Walid",
    arabic: "خالد بن الوليد",
    title: "Sayf-Allah (The Sword of Allah)",
    category: "companion",
    summary: "A brilliant military commander who, after embracing Islam, led Muslim armies to numerous victories without ever losing a battle. The Prophet ﷺ gave him the title 'Sword of Allah'.",
    summaryAr: "قائد عسكري فذّ لم يُهزم في معركة قط، لقّبه النبي ﷺ بسيف الله المسلول.",
    refs: [
      "Sahih al-Bukhari — the title 'Sword of Allah' given by the Prophet ﷺ",
      "Historical accounts of the Battles of Mu'tah, Yamamah, and the conquests of Syria and Iraq"
    ]
  },
  {
    id: "abu-hurairah",
    name: "Abu Hurairah",
    arabic: "أبو هريرة",
    title: "The Most Prolific Narrator of Hadith",
    category: "companion",
    summary: "Despite accepting Islam relatively late, Abu Hurairah devoted himself to staying close to the Prophet ﷺ to memorize his sayings, becoming the most prolific narrator of hadith in Islamic history.",
    summaryAr: "أكثر الصحابة رواية للحديث، لازم النبي ﷺ ليحفظ أقواله رغم إسلامه المتأخر.",
    refs: [
      "Sahih al-Bukhari & Sahih Muslim — thousands of hadith attributed to him",
      "Biographical accounts of his dedication to learning from the Prophet ﷺ"
    ]
  },
  {
    id: "salman",
    name: "Salman al-Farisi",
    arabic: "سلمان الفارسي",
    title: "Salman the Seeker of Truth",
    category: "companion",
    summary: "A Persian seeker of truth who traveled widely searching for the true religion before finding Islam. He suggested the strategy of digging a trench during the Battle of the Trench, a pivotal moment in early Islamic history.",
    summaryAr: "الباحث الفارسي عن الحق، سافر طويلاً حتى وجد الإسلام، وأشار بحفر الخندق في غزوة الأحزاب.",
    refs: [
      "Sira accounts of his long journey to find the truth before meeting the Prophet ﷺ",
      "Historical accounts of the Battle of the Trench (Khandaq), 5 AH"
    ]
  },
  {
    id: "ibn-abbas",
    name: "Abdullah ibn Abbas",
    arabic: "عبد الله بن عباس",
    title: "The Scholar of the Ummah",
    category: "companion",
    summary: "A cousin of the Prophet ﷺ, Ibn Abbas was known from a young age for his sharp intellect and deep knowledge of Quranic interpretation (tafsir), becoming one of the foremost scholars among the companions.",
    summaryAr: "حبر الأمة وترجمان القرآن، ابن عم النبي ﷺ، دعا له النبي بالفقه في الدين وعلم التأويل.",
    refs: [
      "Sahih al-Bukhari — narrations highlighting his closeness to the Prophet ﷺ and knowledge",
      "Classical tafsir literature, much of which traces back to his explanations"
    ]
  },
  {
    id: "umm-salamah",
    name: "Umm Salamah",
    arabic: "أم سلمة",
    title: "Mother of the Believers",
    category: "companion",
    summary: "Known for her wisdom and sound judgment, Umm Salamah was one of the wives of the Prophet ﷺ and offered valuable advice during difficult moments, including at the Treaty of Hudaybiyyah.",
    summaryAr: "أم المؤمنين، عُرفت برجاحة عقلها وحكمتها، وأشارت على النبي ﷺ برأي سديد يوم الحديبية.",
    refs: [
      "Sahih al-Bukhari — her advice during the events of Hudaybiyyah",
      "Sira accounts of her early migration to Abyssinia and later to Madinah"
    ]
  },
  {
    id: "hamza",
    name: "Hamza ibn Abdul-Muttalib",
    arabic: "حمزة بن عبد المطلب",
    title: "Asadullah (The Lion of Allah), Sayyid ash-Shuhada",
    category: "companion",
    summary: "The uncle of the Prophet ﷺ and a courageous defender of Islam in its early years, Hamza was martyred at the Battle of Uhud and is honored with the title 'Chief of the Martyrs'.",
    summaryAr: "عم النبي ﷺ وأسد الله، دافع عن الإسلام في مكة واستشهد يوم أحد، فسُمّي سيد الشهداء.",
    refs: [
      "Historical accounts of the Battle of Uhud (3 AH) and his martyrdom",
      "Sira accounts of his acceptance of Islam and defense of the Muslims in Makkah"
    ]
  },
  {
    id: "zubayr",
    name: "Az-Zubayr ibn al-Awwam",
    arabic: "الزبير بن العوام",
    title: "Disciple of the Prophet ﷺ, One of the Ten Promised Paradise",
    category: "companion",
    summary: "A cousin of the Prophet ﷺ and one of the first to embrace Islam, Az-Zubayr was known for his bravery and was one of the ten companions given glad tidings of Paradise during their lifetimes.",
    summaryAr: "حواريّ النبي ﷺ وابن عمته، من العشرة المبشرين بالجنة، عُرف بشجاعته في بدر وأحد وغيرهما.",
    refs: [
      "Sahih al-Bukhari — narrations on his courage and dedication",
      "Sira accounts of his role in the Battles of Badr, Uhud, and beyond"
    ]
  },
  {
    id: "talha",
    name: "Talha ibn Ubaydullah",
    arabic: "طلحة بن عبيد الله",
    title: "The Generous, One of the Ten Promised Paradise",
    category: "companion",
    summary: "Renowned for his generosity and bravery, Talha shielded the Prophet ﷺ with his own body during the Battle of Uhud, suffering numerous wounds. He is one of the ten promised Paradise.",
    summaryAr: "من العشرة المبشرين بالجنة، وقى النبيَّ ﷺ بجسده يوم أحد حتى شُلّت يده، واشتهر بجوده وكرمه.",
    refs: [
      "Sahih al-Bukhari — narrations on his sacrifices at Uhud",
      "Historical accounts of his generosity in spending for the sake of Islam"
    ]
  },
  {
    id: "saad-waqqas",
    name: "Sa'd ibn Abi Waqqas",
    arabic: "سعد بن أبي وقاص",
    title: "Conqueror of Persia, One of the Ten Promised Paradise",
    category: "companion",
    summary: "One of the earliest Muslims and one of the ten promised Paradise, Sa'd was the military commander who led the decisive Battle of Al-Qadisiyyah, opening Persia to Islam. The Prophet ﷺ prayed that his supplications would always be answered.",
    summaryAr: "من العشرة المبشرين بالجنة، مجاب الدعوة، قاد المسلمين في القادسية ففُتحت بلاد فارس.",
    refs: [
      "Sahih Muslim — the Prophet's prayer for Sa'd's supplication to be answered",
      "Historical accounts of the Battle of Al-Qadisiyyah (636 CE)"
    ]
  },
  {
    id: "abu-ubaidah",
    name: "Abu Ubaidah ibn al-Jarrah",
    arabic: "أبو عبيدة بن الجراح",
    title: "Amin al-Ummah (Trustee of the Nation), One of the Ten Promised Paradise",
    category: "companion",
    summary: "The Prophet ﷺ called him the most trustworthy person of this Ummah. Abu Ubaidah served as supreme commander of the Muslim armies in the Levant and was known for his humility despite holding great authority.",
    summaryAr: "أمين هذه الأمة، من العشرة المبشرين بالجنة، قاد جيوش المسلمين في الشام وعُرف بتواضعه.",
    refs: [
      "Sahih al-Bukhari — the title 'Trustee of the Nation'",
      "Historical accounts of the conquest of Syria and his governance"
    ]
  },
  {
    id: "abdur-rahman",
    name: "Abdur-Rahman ibn Awf",
    arabic: "عبد الرحمن بن عوف",
    title: "The Generous Trader, One of the Ten Promised Paradise",
    category: "companion",
    summary: "One of the wealthiest companions, Abdur-Rahman gave away vast amounts for the sake of Islam. After migrating to Madinah with nothing, he rebuilt his fortune through honest trade and remained one of the most generous supporters of the Muslim community.",
    summaryAr: "من العشرة المبشرين بالجنة، تاجر أمين هاجر بلا شيء ثم أنفق أمواله العظيمة في سبيل الله.",
    refs: [
      "Sahih al-Bukhari — his generosity and his brotherhood with Sa'd ibn ar-Rabi",
      "Sira accounts of his donations during the expedition of Tabuk"
    ]
  },
  {
    id: "said-ibn-zayd",
    name: "Sa'id ibn Zayd",
    arabic: "سعيد بن زيد",
    title: "One of the Ten Promised Paradise",
    category: "companion",
    summary: "Sa'id was among the earliest Muslims and one of the ten promised Paradise. His father Zayd ibn Amr was already a monotheist before Islam, and Sa'id embraced the Prophet's message without hesitation.",
    summaryAr: "من العشرة المبشرين بالجنة ومن السابقين إلى الإسلام، وكان أبوه موحّداً قبل البعثة.",
    refs: [
      "Jami at-Tirmidhi — the hadith listing the ten promised Paradise",
      "Sira accounts of his early acceptance of Islam"
    ]
  },
  {
    id: "musab",
    name: "Mus'ab ibn Umayr",
    arabic: "مصعب بن عمير",
    title: "The First Ambassador of Islam",
    category: "companion",
    summary: "Once the wealthiest and most stylish youth of Makkah, Mus'ab gave up his luxurious life for Islam. The Prophet ﷺ sent him to Madinah as the first teacher and ambassador, and he was martyred at Uhud so poor that his burial cloth was not long enough to cover him.",
    summaryAr: "أول سفير في الإسلام، ترك حياة الترف في مكة، وعلّم أهل المدينة القرآن، واستشهد يوم أحد.",
    refs: [
      "Sahih al-Bukhari — the account of his burial at Uhud",
      "Sira accounts of his role as the first envoy to Madinah"
    ]
  },
  {
    id: "ammar",
    name: "Ammar ibn Yasir",
    arabic: "عمار بن ياسر",
    title: "The Steadfast Martyr",
    category: "companion",
    summary: "Ammar and his parents Yasir and Sumayya were among the first to accept Islam and the first to endure persecution. His mother Sumayya was the first martyr in Islam. The Prophet ﷺ said that Paradise yearns for Ammar.",
    summaryAr: "من أوائل المسلمين، عُذّب هو وأبواه في مكة، وقال النبي ﷺ إن الجنة تشتاق إليه.",
    refs: [
      "Sahih al-Bukhari — 'Paradise yearns for three: Ali, Ammar, and Salman'",
      "Sira accounts of the persecution of the family of Yasir"
    ]
  },
  {
    id: "abu-dharr",
    name: "Abu Dharr al-Ghifari",
    arabic: "أبو ذر الغفاري",
    title: "The Truthful Ascetic",
    category: "companion",
    summary: "One of the earliest converts to Islam outside Makkah, Abu Dharr was known for his extreme truthfulness and ascetic lifestyle. The Prophet ﷺ compared his truthfulness to that of Isa ibn Maryam in his community.",
    summaryAr: "من أوائل المسلمين، اشتهر بصدقه وزهده حتى قال النبي ﷺ: ما أظلّت الخضراء ولا أقلّت الغبراء أصدق من أبي ذر.",
    refs: [
      "Sahih Muslim — 'The earth has not carried nor the sky covered a man more truthful than Abu Dharr'",
      "Sira accounts of his early conversion and asceticism"
    ]
  },
  {
    id: "zaid",
    name: "Zaid ibn Harithah",
    arabic: "زيد بن حارثة",
    title: "The Beloved of the Prophet ﷺ",
    category: "companion",
    summary: "A freed slave who was adopted by the Prophet ﷺ before Islam and loved like a son, Zaid is the only companion mentioned by name in the Quran. He was martyred leading the Muslim army at the Battle of Mu'tah.",
    summaryAr: "حِبّ رسول الله ﷺ، الصحابي الوحيد المذكور باسمه في القرآن، استشهد قائداً في غزوة مؤتة.",
    refs: [
      "Surah Al-Ahzab (33:37) — the only companion named in the Quran",
      "Historical accounts of the Battle of Mu'tah (629 CE) and his martyrdom"
    ]
  },
  {
    id: "jafar",
    name: "Ja'far ibn Abi Talib",
    arabic: "جعفر بن أبي طالب",
    title: "Ja'far the Flyer (Dhul-Janahayn)",
    category: "companion",
    summary: "The brother of Ali and cousin of the Prophet ﷺ, Ja'far led the first migration to Abyssinia and delivered a famous speech before the Negus. He was martyred at the Battle of Mu'tah, and the Prophet ﷺ said Allah replaced his arms with wings in Paradise.",
    summaryAr: "ابن عم النبي ﷺ، قائد الهجرة إلى الحبشة وخطيبها أمام النجاشي، استشهد في مؤتة فلُقّب بذي الجناحين.",
    refs: [
      "Sira accounts of his speech before the Negus of Abyssinia",
      "Sahih al-Bukhari — his martyrdom at Mu'tah and the title 'the Flyer'"
    ]
  },
  {
    id: "muadh",
    name: "Muadh ibn Jabal",
    arabic: "معاذ بن جبل",
    title: "The Most Knowledgeable of Halal and Haram",
    category: "companion",
    summary: "The Prophet ﷺ described Muadh as the most knowledgeable of the community in matters of what is lawful and unlawful. He was sent to Yemen as a judge and teacher, and the Prophet's farewell to him is one of the most moving scenes recorded in the sira.",
    summaryAr: "أعلم الأمة بالحلال والحرام، بعثه النبي ﷺ قاضياً ومعلماً إلى اليمن.",
    refs: [
      "Sahih al-Bukhari — his appointment as judge of Yemen",
      "Jami at-Tirmidhi — 'the most knowledgeable of halal and haram'"
    ]
  },
  {
    id: "hafsa",
    name: "Hafsa bint Umar",
    arabic: "حفصة بنت عمر",
    title: "Mother of the Believers, Guardian of the Quran",
    category: "companion",
    summary: "The daughter of Umar ibn al-Khattab and wife of the Prophet ﷺ, Hafsa was known for her knowledge and devotion to worship. After the compilation of the Quran under Abu Bakr, the manuscript was entrusted to her safekeeping.",
    summaryAr: "أم المؤمنين بنت عمر بن الخطاب، عُرفت بعبادتها وصيامها، وحُفظ عندها مصحف القرآن بعد جمعه.",
    refs: [
      "Sahih al-Bukhari — the Quran manuscript entrusted to Hafsa",
      "Sira accounts of her dedication to fasting and night prayer"
    ]
  },
  {
    id: "sumayya",
    name: "Sumayya bint Khayyat",
    arabic: "سمية بنت خياط",
    title: "The First Martyr of Islam",
    category: "companion",
    summary: "The mother of Ammar ibn Yasir, Sumayya was the first person to give her life for Islam. She refused to renounce her faith under severe torture and was killed by Abu Jahl, becoming the first shaheed (martyr) in Islamic history.",
    summaryAr: "أول شهيدة في الإسلام، ثبتت على دينها تحت التعذيب حتى قتلها أبو جهل.",
    refs: [
      "Sira accounts of the early persecution in Makkah",
      "The Prophet ﷺ passed by the family of Yasir and said 'Patience, O family of Yasir, for your appointment is Paradise'"
    ]
  },
  {
    id: "anas",
    name: "Anas ibn Malik",
    arabic: "أنس بن مالك",
    title: "The Servant of the Prophet ﷺ",
    category: "companion",
    summary: "Anas served the Prophet ﷺ from the age of ten for about ten years, and the Prophet ﷺ never once scolded him. He became one of the most prolific narrators of hadith and lived to be over one hundred years old.",
    summaryAr: "خادم النبي ﷺ عشر سنين، لم يعاتبه النبي قط، ومن أكثر الصحابة رواية للحديث.",
    refs: [
      "Sahih al-Bukhari — 'He never said to me \"why did you do this\" or \"why didn't you do that\"'",
      "Sahih Muslim — thousands of hadith narrated through him"
    ]
  },
  {
    id: "ubayy",
    name: "Ubayy ibn Ka'b",
    arabic: "أبي بن كعب",
    title: "Master of Quran Recitation",
    category: "companion",
    summary: "The Prophet ﷺ said that Ubayy was the best reciter of the Quran among the companions. He was one of the scribes of revelation and a leading scholar of the Quran in Madinah.",
    summaryAr: "سيد القراء ومن كتبة الوحي، أمره الله أن يُقرأ عليه القرآن كما أخبر النبي ﷺ.",
    refs: [
      "Sahih al-Bukhari, Book of Virtues of the Quran — 'The best reciter among you is Ubayy ibn Ka'b'",
      "Sahih Muslim — his status as a leading Quranic authority"
    ]
  },
  {
    id: "abu-musa",
    name: "Abu Musa al-Ash'ari",
    arabic: "أبو موسى الأشعري",
    title: "The Beautiful Voice",
    category: "companion",
    summary: "Known for his exceptionally beautiful Quran recitation, the Prophet ﷺ said he had been given a voice like the flutes of the family of Dawud. He served as governor of Basra and Kufa and was a respected judge.",
    summaryAr: "صاحب الصوت الجميل بالقرآن، قال عنه النبي ﷺ إنه أوتي مزماراً من مزامير آل داود.",
    refs: [
      "Sahih al-Bukhari, Book of Virtues of the Quran — 'given a flute from the flutes of Dawud'",
      "Sahih Muslim — his role as governor and judge"
    ]
  },
  {
    id: "abu-said",
    name: "Abu Sa'id al-Khudri",
    arabic: "أبو سعيد الخدري",
    title: "The Young Scholar of Madinah",
    category: "companion",
    summary: "One of the most prolific narrators of hadith from among the Ansar (helpers of Madinah), Abu Sa'id was known for his knowledge and his willingness to speak the truth and enjoin good even before rulers.",
    summaryAr: "من علماء الأنصار الشباب، ومن المكثرين في رواية الحديث عن النبي ﷺ.",
    refs: [
      "Sahih al-Bukhari — numerous hadith narrated through him",
      "Sahih Muslim — his narrations on prayer, charity, and the Day of Judgment"
    ]
  },
  {
    id: "saad-ubadah",
    name: "Sa'd ibn Ubadah",
    arabic: "سعد بن عبادة",
    title: "Chief of the Khazraj",
    category: "companion",
    summary: "The leader of the Khazraj tribe in Madinah and one of the chiefs of the Ansar who pledged allegiance to the Prophet ﷺ at Aqabah. He was known for his extraordinary generosity — his family would call out invitations to travelers every evening.",
    summaryAr: "سيد الخزرج وأحد نقباء الأنصار ليلة العقبة، اشتهر بكرمه العظيم.",
    refs: [
      "Sahih al-Bukhari — narrations on his generosity and leadership",
      "Sira accounts of the Pledge of Aqabah and his role among the Ansar"
    ]
  },
  {
    id: "abu-ayyub",
    name: "Abu Ayyub al-Ansari",
    arabic: "أبو أيوب الأنصاري",
    title: "Host of the Prophet ﷺ in Madinah",
    category: "companion",
    summary: "When the Prophet ﷺ arrived in Madinah during the Hijrah, his camel stopped at Abu Ayyub's house, and Abu Ayyub had the honor of hosting the Prophet ﷺ until the mosque and quarters were built. He continued fighting in the path of Allah until old age.",
    summaryAr: "مضيف النبي ﷺ عند قدومه المدينة، ظل مجاهداً حتى توفي عند أسوار القسطنطينية.",
    refs: [
      "Sahih al-Bukhari — the Prophet's arrival and stay at his home",
      "Historical accounts of his participation in battles until the siege of Constantinople"
    ]
  },
  {
    id: "umm-ayman",
    name: "Umm Ayman (Barakah)",
    arabic: "أم أيمن (بركة)",
    title: "The Prophet's Second Mother",
    category: "companion",
    summary: "Umm Ayman cared for the Prophet ﷺ from his childhood after the death of his mother Aminah. The Prophet ﷺ called her 'my mother after my mother' and said she was from the people of Paradise. She was among the earliest Muslims.",
    summaryAr: "حاضنة النبي ﷺ منذ صغره، قال عنها: أم أيمن أمي بعد أمي، وبشّرها بالجنة.",
    refs: [
      "Sahih Muslim — the Prophet's love and respect for Umm Ayman",
      "Sira accounts of her care for the Prophet ﷺ from childhood"
    ]
  },
  {
    id: "abdullah-masud",
    name: "Abdullah ibn Mas'ud",
    arabic: "عبد الله بن مسعود",
    title: "First to Recite Quran Publicly in Makkah",
    category: "companion",
    summary: "One of the earliest Muslims, Ibn Mas'ud was the first person to recite the Quran publicly in Makkah. The Prophet ﷺ told the companions to learn the Quran from four people, naming Ibn Mas'ud first. He became one of the greatest scholars of tafsir and fiqh.",
    summaryAr: "أول من جهر بالقرآن في مكة، ومن كبار علماء التفسير والفقه، أمر النبي ﷺ بأخذ القرآن عنه.",
    refs: [
      "Sahih al-Bukhari, Book of Virtues of the Companions — 'Learn the Quran from four: Abdullah ibn Mas'ud...'",
      "Sahih Muslim — his deep knowledge and early conversion"
    ]
  },
  {
    id: "khabbab",
    name: "Khabbab ibn al-Aratt",
    arabic: "خباب بن الأرت",
    title: "The Patient Endurer",
    category: "companion",
    summary: "A blacksmith and one of the earliest Muslims, Khabbab endured some of the worst torture in Makkah — his masters would press hot iron onto his back. He remained steadfast, and the Prophet ﷺ prayed for him.",
    summaryAr: "من السابقين إلى الإسلام، عُذّب في مكة بالحديد المحمّى فصبر واحتسب أجره عند الله.",
    refs: [
      "Sahih al-Bukhari, Book of Merits of the Companions — his complaint of suffering and the Prophet's response",
      "Sira accounts of the persecution of early Muslims in Makkah"
    ]
  },
  {
    id: "suhayb",
    name: "Suhayb ar-Rumi",
    arabic: "صهيب الرومي",
    title: "The Profit of the Trade",
    category: "companion",
    summary: "A Roman-raised Arab who gave up all his wealth to the Quraysh in exchange for being allowed to migrate to Madinah. When the Prophet ﷺ heard of this, he said 'Suhayb has profited! Suhayb has profited!' — and the verse 'And among people is he who sells himself seeking the pleasure of Allah' was revealed about him.",
    summaryAr: "ترك ماله كله لقريش ليهاجر إلى الله ورسوله، فقال النبي ﷺ: ربح صهيب، ربح صهيب.",
    refs: [
      "Sahih Muslim — the account of his migration and sacrifice",
      "Surah Al-Baqarah (2:207) — 'sells himself seeking the pleasure of Allah' (identified as referring to Suhayb in tafsir)"
    ]
  },
  {
    id: "zayd-thabit",
    name: "Zayd ibn Thabit",
    arabic: "زيد بن ثابت",
    title: "Scribe of Revelation, Compiler of the Quran",
    category: "companion",
    summary: "The Prophet's ﷺ chief scribe of revelation, who learned Hebrew and Syriac on his command. He led the compilation of the Quran under Abu Bakr and again under Uthman, and was a leading scholar of inheritance law.",
    summaryAr: "كاتب الوحي الأول للنبي ﷺ، تولى جمع القرآن في عهد أبي بكر ثم في عهد عثمان، وكان من أعلم الصحابة بالفرائض.",
    refs: [
      "Sahih al-Bukhari, Book of Virtues of the Quran — the compilation of the Quran",
      "Historical accounts of the standardization of the Mushaf under Uthman"
    ]
  },
  {
    id: "amr-ibn-alas",
    name: "Amr ibn al-As",
    arabic: "عمرو بن العاص",
    title: "Conqueror of Egypt",
    category: "companion",
    summary: "A shrewd statesman and commander who embraced Islam before the conquest of Makkah. He led the Muslim conquest of Egypt and founded the city of Fustat, and the Prophet ﷺ used him for important missions.",
    summaryAr: "داهية العرب وقائدها المحنّك، أسلم قبل فتح مكة، وقاد فتح مصر وأسّس مدينة الفسطاط.",
    refs: [
      "Sahih Muslim — narrations on his acceptance of Islam",
      "Historical accounts of the conquest of Egypt (640-642 CE)"
    ]
  },
  {
    id: "usama",
    name: "Usama ibn Zayd",
    arabic: "أسامة بن زيد",
    title: "The Beloved, Son of the Beloved",
    category: "companion",
    summary: "The son of Zayd ibn Harithah, deeply loved by the Prophet ﷺ, who appointed him commander of an army at about eighteen years old — the youngest commander over senior companions.",
    summaryAr: "الحِبّ ابن الحِبّ، ابن زيد بن حارثة، أمّره النبي ﷺ على جيش فيه كبار الصحابة وهو ابن ثماني عشرة سنة.",
    refs: [
      "Sahih al-Bukhari — the Prophet's love for Usama and his appointment as commander",
      "Sira accounts of the expedition of Usama"
    ]
  },
  {
    id: "hudhayfa",
    name: "Hudhayfa ibn al-Yaman",
    arabic: "حذيفة بن اليمان",
    title: "Keeper of the Prophet's Secret",
    category: "companion",
    summary: "The Prophet ﷺ entrusted him alone with the names of the hypocrites, so he was called the Keeper of the Secret. He asked the Prophet about evil and tribulations while others asked about good, to protect himself and the Ummah.",
    summaryAr: "صاحب سرّ النبي ﷺ، ائتمنه على أسماء المنافقين، وكان يسأل عن الشر مخافة أن يدركه.",
    refs: [
      "Sahih al-Bukhari, Book of Tribulations — his questions about evil and trials",
      "Sahih Muslim — his role as keeper of the secret"
    ]
  },
  {
    id: "saad-muadh",
    name: "Sa'd ibn Mu'adh",
    arabic: "سعد بن معاذ",
    title: "Chief of Aws — the Throne Shook for His Death",
    category: "companion",
    summary: "The chief of the Aws tribe whose acceptance of Islam brought his whole tribe to the faith. He was fatally wounded at the Battle of the Trench, and the Prophet ﷺ said the Throne of the Most Merciful shook at his death.",
    summaryAr: "سيد الأوس، أسلم فأسلم بإسلامه قومه، وقال النبي ﷺ: اهتز عرش الرحمن لموت سعد بن معاذ.",
    refs: [
      "Sahih al-Bukhari & Sahih Muslim — 'The Throne of the Most Merciful shook at the death of Sa'd'",
      "Sira accounts of the Battle of the Trench and his judgment on Banu Qurayza"
    ]
  },
  {
    id: "abu-darda",
    name: "Abu ad-Darda",
    arabic: "أبو الدرداء",
    title: "The Wise Worshipper",
    category: "companion",
    summary: "A companion known for wisdom, asceticism, and deep worship, who devoted himself to knowledge after embracing Islam. He became the judge of Damascus and a teacher of the Quran.",
    summaryAr: "حكيم هذه الأمة، عُرف بالزهد والعبادة، وتولى قضاء دمشق وتعليم الناس القرآن.",
    refs: [
      "Sahih al-Bukhari — his brotherhood with Salman al-Farisi and lessons in balance",
      "Sira accounts of his role as judge and teacher in Damascus"
    ]
  },
  {
    id: "ubada",
    name: "Ubada ibn as-Samit",
    arabic: "عبادة بن الصامت",
    title: "Teacher of the Quran, Witness of the Pledges",
    category: "companion",
    summary: "One of the leaders of the Ansar who witnessed all the pledges of Aqabah and Badr. He taught the Quran to the People of the Suffa and later spread Quranic learning in Syria.",
    summaryAr: "من نقباء الأنصار، شهد بيعتي العقبة وبدراً، وعلّم أهل الصُّفَّة القرآن ونشر علمه في الشام.",
    refs: [
      "Sahih al-Bukhari — his narrations of the pledge of Aqabah",
      "Sahih Muslim — his hadith on the virtue of teaching the Quran"
    ]
  },
  {
    id: "hassan-thabit",
    name: "Hassan ibn Thabit",
    arabic: "حسان بن ثابت",
    title: "Poet of the Prophet ﷺ",
    category: "companion",
    summary: "The official poet of Islam who defended the Prophet ﷺ with his poetry. The Prophet ﷺ prayed for him to be supported by the Holy Spirit (Jibril) as he responded to the poets of Quraysh.",
    summaryAr: "شاعر النبي ﷺ، دافع عن الإسلام بشعره، ودعا له النبي أن يؤيده روح القدس.",
    refs: [
      "Sahih al-Bukhari — 'O Allah, support him with the Holy Spirit'",
      "Sira accounts of his poetry in defense of Islam"
    ]
  },
  {
    id: "ibn-rawaha",
    name: "Abdullah ibn Rawaha",
    arabic: "عبد الله بن رواحة",
    title: "Poet and Martyr of Mu'tah",
    category: "companion",
    summary: "A poet of the Ansar and one of the three commanders appointed at Mu'tah, where he was martyred after Zayd and Ja'far. Known for his emotional recitation of poetry in the path of Allah.",
    summaryAr: "شاعر الأنصار وثالث الأمراء في غزوة مؤتة، استشهد فيها بعد زيد وجعفر.",
    refs: [
      "Sahih al-Bukhari — the account of the three commanders of Mu'tah",
      "Sira accounts of his poetry and martyrdom"
    ]
  },
  {
    id: "kab-malik",
    name: "Ka'b ibn Malik",
    arabic: "كعب بن مالك",
    title: "The Companion of the Accepted Repentance",
    category: "companion",
    summary: "One of the three companions who stayed behind from Tabuk without excuse and spoke the truth about it. After fifty days of boycott, Allah revealed verses accepting their repentance — one of the greatest lessons in honesty.",
    summaryAr: "أحد الثلاثة الذين خُلِّفوا في غزوة تبوك فصدقوا، فأنزل الله توبتهم في القرآن.",
    refs: [
      "Sahih al-Bukhari & Sahih Muslim — the full story of his repentance",
      "Surah At-Tawbah (9:118) — the acceptance of the repentance of the three"
    ]
  },
  {
    id: "abu-talha",
    name: "Abu Talha al-Ansari",
    arabic: "أبو طلحة الأنصاري",
    title: "The Generous Defender of Uhud",
    category: "companion",
    summary: "A skilled archer who shielded the Prophet ﷺ at Uhud, and one of the wealthiest of the Ansar. When the verse 'You will never attain righteousness until you spend from what you love' was revealed, he gave away his most beloved garden.",
    summaryAr: "رامي النبي ﷺ يوم أحد، تصدق بأحب أمواله بستان بيرحاء لما نزلت: لن تنالوا البر حتى تنفقوا مما تحبون.",
    refs: [
      "Sahih al-Bukhari — the story of the garden of Bayruha",
      "Sahih Muslim — his defense of the Prophet ﷺ at Uhud"
    ]
  },
  {
    id: "umm-sulaym",
    name: "Umm Sulaym",
    arabic: "أم سليم",
    title: "Mother of Anas, Woman of Paradise",
    category: "companion",
    summary: "The mother of Anas ibn Malik, who made her son's service to the Prophet ﷺ her gift, and whose dowry from Abu Talha was his acceptance of Islam. The Prophet ﷺ said he heard her footsteps in Paradise.",
    summaryAr: "أم أنس بن مالك، جعلت مهرها إسلام أبي طلحة، وقال النبي ﷺ إنه سمع خشف قدميها في الجنة.",
    refs: [
      "Sahih Muslim — the Prophet heard her footsteps in Paradise",
      "Sahih al-Bukhari — her patience at the death of her child"
    ]
  },
  {
    id: "umm-ammara",
    name: "Nusayba bint Ka'b (Umm Ammara)",
    arabic: "نسيبة بنت كعب (أم عمارة)",
    title: "The Warrior of Uhud",
    category: "companion",
    summary: "A woman of the Ansar who fought with sword and shield to defend the Prophet ﷺ at Uhud when others fled, suffering many wounds. The Prophet ﷺ said that wherever he turned that day, he saw her defending him.",
    summaryAr: "المجاهدة التي دافعت عن النبي ﷺ يوم أحد بالسيف والترس، فقال: ما التفتُّ يميناً ولا شمالاً إلا وأراها تقاتل دوني.",
    refs: [
      "Sira accounts of the Battle of Uhud and her defense of the Prophet ﷺ",
      "Historical accounts of her role at the Battle of Yamamah"
    ]
  },
  {
    id: "asma",
    name: "Asma bint Abu Bakr",
    arabic: "أسماء بنت أبي بكر",
    title: "Dhat an-Nitaqayn (She of the Two Belts)",
    category: "companion",
    summary: "The daughter of Abu Bakr who secretly carried food to the Prophet ﷺ and her father in the cave during the Hijrah, tearing her belt in two to tie the provisions — earning her famous title from the Prophet ﷺ.",
    summaryAr: "ذات النطاقين، حملت الطعام سراً إلى النبي ﷺ وأبيها في غار ثور، وشقّت نطاقها نصفين لتربط به الزاد.",
    refs: [
      "Sahih al-Bukhari — the story of the two belts during the Hijrah",
      "Sira accounts of her long life and firmness upon truth"
    ]
  },
  {
    id: "ibn-zubayr",
    name: "Abdullah ibn az-Zubayr",
    arabic: "عبد الله بن الزبير",
    title: "First Child Born to the Muhajirin in Madinah",
    category: "companion",
    summary: "The son of az-Zubayr and Asma bint Abu Bakr, and the first child born to the emigrants in Madinah, whose birth the Muslims celebrated. He grew to be a devoted worshipper and brave leader.",
    summaryAr: "أول مولود للمهاجرين في المدينة، فرح المسلمون بمولده، ونشأ عابداً شجاعاً فصيحاً.",
    refs: [
      "Sahih al-Bukhari — the joy of the Muslims at his birth",
      "Historical accounts of his worship and courage"
    ]
  },
  {
    id: "ibn-mazun",
    name: "Uthman ibn Maz'un",
    arabic: "عثمان بن مظعون",
    title: "The Early Ascetic",
    category: "companion",
    summary: "One of the earliest converts, known for his devotion and asceticism even before Islam — he had forbidden alcohol upon himself in Jahiliyyah. He was the first of the Muhajirin to die in Madinah.",
    summaryAr: "من السابقين إلى الإسلام، حرّم الخمر على نفسه في الجاهلية، وهو أول المهاجرين وفاة في المدينة.",
    refs: [
      "Sahih al-Bukhari — the Prophet's words at his death",
      "Sira accounts of his asceticism and early conversion"
    ]
  },
  {
    id: "abdullah-amr",
    name: "Abdullah ibn Amr ibn al-As",
    arabic: "عبد الله بن عمرو بن العاص",
    title: "The Scribe of Hadith",
    category: "companion",
    summary: "One of the few companions who wrote down hadith with the Prophet's permission in a collection he called 'As-Sahifa as-Sadiqa'. Known for his intense worship, fasting, and night prayer.",
    summaryAr: "من قلائل الصحابة الذين كتبوا الحديث بإذن النبي ﷺ في صحيفته الصادقة، وعُرف بكثرة العبادة والصيام.",
    refs: [
      "Sunan Abu Dawud — permission to write the hadith (As-Sahifa as-Sadiqa)",
      "Sahih al-Bukhari — the Prophet's guidance to him on moderation in worship"
    ]
  },
  {
    id: "thabit-qays",
    name: "Thabit ibn Qays",
    arabic: "ثابت بن قيس",
    title: "Orator of the Prophet ﷺ",
    category: "companion",
    summary: "The official speaker of the Prophet ﷺ who answered delegations on his behalf. He feared his loud voice had doomed him when verses against raising voices were revealed, but the Prophet ﷺ gave him glad tidings of Paradise.",
    summaryAr: "خطيب النبي ﷺ، خاف لما نزل النهي عن رفع الصوت، فبشّره النبي بالجنة، واستشهد يوم اليمامة.",
    refs: [
      "Sahih al-Bukhari — the glad tidings given to Thabit",
      "Sahih Muslim — 'He is from the people of Paradise'"
    ]
  },
  {
    id: "salim-mawla",
    name: "Salim, Mawla of Abu Hudhayfa",
    arabic: "سالم مولى أبي حذيفة",
    title: "Master Reciter of the Quran",
    category: "companion",
    summary: "A freed slave whom the Prophet ﷺ named among the four from whom the Quran should be learned. He led the emigrants in prayer before the Hijrah because he knew the most Quran, and was martyred at Yamamah.",
    summaryAr: "أحد الأربعة الذين أمر النبي ﷺ بأخذ القرآن عنهم، أمّ المهاجرين في الصلاة لكثرة حفظه، واستشهد يوم اليمامة.",
    refs: [
      "Sahih al-Bukhari — 'Take the Quran from four: ... and Salim'",
      "Sira accounts of his leading the prayer and martyrdom at Yamamah"
    ]
  },
  {
    id: "zaynab-jahsh",
    name: "Zaynab bint Jahsh",
    arabic: "زينب بنت جحش",
    title: "Mother of the Believers, the Charitable",
    category: "companion",
    summary: "A wife of the Prophet ﷺ whose marriage was decreed in the Quran itself. Known for her worship, honesty, and generosity — Aisha described her as the best of women in piety and charity.",
    summaryAr: "أم المؤمنين التي زوّجها الله لنبيه من فوق سبع سماوات، وكانت أطولهن يداً بالصدقة والعطاء.",
    refs: [
      "Surah Al-Ahzab (33:37) — her marriage decreed by Allah",
      "Sahih Muslim — Aisha's praise of her piety and charity"
    ]
  },
  {
    id: "safiyya",
    name: "Safiyya bint Huyayy",
    arabic: "صفية بنت حيي",
    title: "Mother of the Believers",
    category: "companion",
    summary: "A noblewoman descended from Harun (Aaron) who became a wife of the Prophet ﷺ after Khaybar. The Prophet ﷺ defended her honor and reminded her of her noble prophetic lineage.",
    summaryAr: "أم المؤمنين من نسل هارون عليه السلام، تزوجها النبي ﷺ بعد خيبر وأكرمها ودافع عنها.",
    refs: [
      "Sahih al-Bukhari — her marriage to the Prophet ﷺ after Khaybar",
      "Jami at-Tirmidhi — 'You are the daughter of a prophet, your uncle is a prophet...'"
    ]
  },
  {
    id: "juwayriya",
    name: "Juwayriya bint al-Harith",
    arabic: "جويرية بنت الحارث",
    title: "Mother of the Believers, Blessing to Her People",
    category: "companion",
    summary: "When the Prophet ﷺ married her, the Muslims freed a hundred families of her tribe out of respect, so Aisha said no woman brought more blessing to her people than Juwayriya.",
    summaryAr: "أم المؤمنين التي أُعتق بزواجها مئة بيت من قومها، فقالت عائشة: ما امرأة أعظم بركة على قومها منها.",
    refs: [
      "Sunan Abu Dawud — the freeing of her people upon her marriage",
      "Sahih Muslim — her long remembrance of Allah after Fajr"
    ]
  },
  {
    id: "sawda",
    name: "Sawda bint Zam'a",
    arabic: "سودة بنت زمعة",
    title: "Mother of the Believers",
    category: "companion",
    summary: "The first woman the Prophet ﷺ married after Khadijah's death, comforting his household in its hardest years. Known for her kindness, humor, and giving her allotted day to Aisha in her old age.",
    summaryAr: "أول من تزوجها النبي ﷺ بعد خديجة، فآنست بيته في أصعب سنواته، وعُرفت بطيب قلبها ودعابتها.",
    refs: [
      "Sahih al-Bukhari — her giving her day to Aisha",
      "Sira accounts of her early Islam and migration to Abyssinia"
    ]
  },
  {
    id: "maymuna",
    name: "Maymuna bint al-Harith",
    arabic: "ميمونة بنت الحارث",
    title: "Mother of the Believers",
    category: "companion",
    summary: "The last woman the Prophet ﷺ married. Aisha described her as among the most fearful of Allah and the most devoted to keeping ties of kinship.",
    summaryAr: "آخر أمهات المؤمنين زواجاً من النبي ﷺ، قالت عنها عائشة: كانت من أتقانا لله وأوصلنا للرحم.",
    refs: [
      "Sahih Muslim — narrations of her piety",
      "Sira accounts of her marriage in the year of Qada' Umrah"
    ]
  },
  {
    id: "abu-dujana",
    name: "Abu Dujana",
    arabic: "أبو دجانة",
    title: "The Warrior of the Red Band",
    category: "companion",
    summary: "The Ansari hero who took the Prophet's sword at Uhud when he asked who would take it with its right, wearing his famous red band of war and shielding the Prophet ﷺ with his own back from arrows.",
    summaryAr: "بطل الأنصار الذي أخذ سيف النبي ﷺ بحقه يوم أحد، وجعل ظهره درعاً للنبي من السهام.",
    refs: [
      "Sahih Muslim — taking the sword of the Prophet ﷺ with its right",
      "Sira accounts of his red band and bravery at Uhud"
    ]
  }
];

// Combine for global search
const ALL_PEOPLE = [...PROPHETS, ...COMPANIONS];

// ---------- Featured Quran Verses (for homepage rotating quotes) ----------
const QURAN_QUOTES = [
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    text: "So verily, with hardship comes ease.",
    ref: "Surah Ash-Sharh (94:6)"
  },
  {
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    text: "And whoever relies upon Allah — then He is sufficient for him.",
    ref: "Surah At-Talaq (65:3)"
  },
  {
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    text: "Verily, in the remembrance of Allah do hearts find rest.",
    ref: "Surah Ar-Ra'd (13:28)"
  },
  {
    arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    text: "And your Lord says: Call upon Me, I will respond to you.",
    ref: "Surah Ghafir (40:60)"
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    text: "So remember Me; I will remember you.",
    ref: "Surah Al-Baqarah (2:152)"
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    text: "Indeed, Allah is with the patient.",
    ref: "Surah Al-Baqarah (2:153)"
  },
  {
    arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
    text: "And your Lord is going to give you, and you will be satisfied.",
    ref: "Surah Ad-Duha (93:5)"
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    text: "Indeed, with hardship comes ease.",
    ref: "Surah Ash-Sharh (94:5)"
  },
  {
    arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
    text: "And We have not sent you except as a mercy to the worlds.",
    ref: "Surah Al-Anbiya (21:107)"
  },
  {
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    text: "My Lord, increase me in knowledge.",
    ref: "Surah Ta-Ha (20:114)"
  },
  {
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    text: "Allah does not burden a soul beyond that it can bear.",
    ref: "Surah Al-Baqarah (2:286)"
  },
  {
    arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
    text: "And We are closer to him than his jugular vein.",
    ref: "Surah Qaf (50:16)"
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ",
    text: "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
    ref: "Surah Ar-Ra'd (13:11)"
  }
];

// ---------- Hadith Collection (mainly Sahih al-Bukhari & Sahih Muslim) ----------
const HADITHS = [
  {
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    text: "Actions are judged by intentions, so each person will be rewarded according to what they intended.",
    narrator: "Umar ibn al-Khattab",
    ref: "Sahih al-Bukhari, Book of Revelation, Hadith 1",
    topic: "Sincerity",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    narrator: "Anas ibn Malik",
    ref: "Sahih al-Bukhari, Book of Faith; Sahih Muslim",
    topic: "Brotherhood",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلَاقًا",
    text: "The best among you are those who have the best manners and character.",
    narrator: "Abdullah ibn Amr",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab)",
    topic: "Character",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    text: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab); Sahih Muslim",
    topic: "Speech",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    text: "Smiling at your brother is an act of charity.",
    narrator: "Abu Dharr al-Ghifari",
    ref: "Sahih Muslim, Book of Zakat, Hadith 1009; also in Jami at-Tirmidhi",
    topic: "Kindness",
    strength: "Sahih — Narrated by Muslim; also at-Tirmidhi"
  },
  {
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    text: "The strong believer is not the one who overcomes people through strength, but the one who controls himself when angry.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab)",
    topic: "Self-Control",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِجَارِهِ مَا يُحِبُّ لِنَفْسِهِ",
    text: "None of you will believe until he loves for his neighbor what he loves for himself.",
    narrator: "Anas ibn Malik",
    ref: "Sahih al-Bukhari, Book of Faith; Sahih Muslim",
    topic: "Neighbors",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    text: "The most beloved deeds to Allah are those done consistently, even if they are small.",
    narrator: "Aisha bint Abu Bakr",
    ref: "Sahih al-Bukhari, Book of Faith; Sahih Muslim",
    topic: "Consistency",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "خَيْرُ النَّاسِ مَنْ أَطْعَمَ الطَّعَامَ",
    text: "He who eats and drinks moderately and shares with others is among the best of people.",
    narrator: "Abdullah ibn Umar",
    ref: "Sahih al-Bukhari, Book of Food and Drink",
    topic: "Generosity",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    text: "Seeking knowledge is an obligation upon every Muslim.",
    narrator: "Anas ibn Malik",
    ref: "Sunan Ibn Majah, Book of the Sunnah",
    topic: "Knowledge",
    strength: "Sahih — Narrated by Ibn Majah; authenticated by as-Suyuti and al-Albani"
  },
  {
    arabic: "الْمُؤْمِنُ الَّذِي يُخَالِطُ النَّاسَ وَيَصْبِرُ عَلَى أَذَاهُمْ خَيْرٌ مِنَ الَّذِي لَا يُخَالِطُ النَّاسَ وَلَا يَصْبِرُ عَلَى أَذَاهُمْ",
    text: "The believer who mixes with people and is patient with their faults is better than the one who avoids people and is impatient with them.",
    narrator: "Ibn Umar",
    ref: "Sunan Ibn Majah, Book of Asceticism; Musnad Ahmad",
    topic: "Patience",
    strength: "Sahih — Narrated by Ibn Majah and Ahmad; authenticated by al-Albani"
  },
  {
    arabic: "مَنْ يَضْمَنْ لِي مَا بَيْنَ لَحْيَيْهِ وَمَا بَيْنَ رِجْلَيْهِ أَضْمَنْ لَهُ الْجَنَّةَ",
    text: "Whoever guarantees me what is between his jaws and what is between his legs, I guarantee him Paradise.",
    narrator: "Sahl ibn Sa'd",
    ref: "Sahih al-Bukhari, Book of Limits and Punishments",
    topic: "Guarding the Tongue",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    text: "The best of people are those most beneficial to people.",
    narrator: "Jabir ibn Abdullah",
    ref: "Al-Mu'jam al-Awsat by at-Tabarani",
    topic: "Service",
    strength: "Strong — Narrated by at-Tabarani; graded Strong by al-Albani"
  },
  {
    arabic: "اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ، وَصِحَّتَكَ قَبْلَ سَقَمِكَ، وَغِنَاكَ قَبْلَ فَقْرِكَ، وَفَرَاغَكَ قَبْلَ شُغْلِكَ، وَحَيَاتَكَ قَبْلَ مَوْتِكَ",
    text: "Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busyness, and your life before your death.",
    narrator: "Ibn Abbas",
    ref: "Mustadrak al-Hakim",
    topic: "Time",
    strength: "Sahih — Narrated by al-Hakim; authenticated by al-Hakim and al-Albani"
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    text: "Verily, Allah does not look at your appearances or your wealth, but He looks at your hearts and your deeds.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Book of Righteousness",
    topic: "Sincerity",
    strength: "Sahih — Narrated by Muslim"
  },
  {
    arabic: "يَسِّرُوا وَلَا تُعَسِّرُوا وَبَشِّرُوا وَلَا تُنَفِّرُوا",
    text: "Make things easy and do not make them difficult, and give good tidings and do not drive people away.",
    narrator: "Anas ibn Malik",
    ref: "Sahih al-Bukhari, Book of Knowledge; Sahih Muslim",
    topic: "Ease",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    text: "Whoever treads a path seeking knowledge, Allah will make easy for him a path to Paradise.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Book of Remembrance, Hadith 2699",
    topic: "Knowledge",
    strength: "Sahih — Narrated by Muslim"
  },
  {
    arabic: "لَيْسَ الْمُؤْمِنُ بِالطَّعَّانِ وَلَا اللَّعَّانِ وَلَا الْفَاحِشِ وَلَا الْبَذِيءِ",
    text: "The Muslim does not slander, curse, speak obscenely, or speak rudely.",
    narrator: "Abdullah ibn Mas'ud",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab); Jami at-Tirmidhi",
    topic: "Speech",
    strength: "Sahih — Narrated by al-Bukhari and at-Tirmidhi"
  },
  {
    arabic: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
    text: "Be in this world as though you were a stranger or a traveler.",
    narrator: "Abdullah ibn Umar",
    ref: "Sahih al-Bukhari, Book of Heart Softeners",
    topic: "Worldliness",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    text: "The merciful are shown mercy by the Most Merciful. Show mercy to those on earth, and the One above the heavens will show mercy to you.",
    narrator: "Abdullah ibn Amr",
    ref: "Sunan Abu Dawud; Jami at-Tirmidhi",
    topic: "Mercy",
    strength: "Sahih — Narrated by Abu Dawud and at-Tirmidhi; authenticated by al-Albani"
  },
  {
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    text: "Whoever removes a hardship from a believer in this world, Allah will remove a hardship from him on the Day of Resurrection.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Book of Remembrance and Supplication, Hadith 2699",
    topic: "Helping Others",
    strength: "Sahih — Narrated by Muslim"
  },
  {
    arabic: "لَا يَرْحَمُ اللَّهُ مَنْ لَا يَرْحَمُ النَّاسَ",
    text: "Allah will not show mercy to the one who does not show mercy to people.",
    narrator: "Jarir ibn Abdullah",
    ref: "Sahih al-Bukhari, Book of Monotheism; Sahih Muslim, Book of Virtues",
    topic: "Mercy",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    text: "The best of you is the one who learns the Quran and teaches it.",
    narrator: "Uthman ibn Affan",
    ref: "Sahih al-Bukhari, Book of Virtues of the Quran, Hadith 5027",
    topic: "Quran",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "الرَّجُلُ عَلَى دِينِ خَلِيلِهِ فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ",
    text: "A man is upon the religion of his close friend, so let one of you look at whom he befriends.",
    narrator: "Abu Hurairah",
    ref: "Sunan Abu Dawud; Jami at-Tirmidhi",
    topic: "Friendship",
    strength: "Strong — Narrated by Abu Dawud and at-Tirmidhi; graded Strong by an-Nawawi"
  },
  {
    arabic: "لَا تَزُولُ قَدَمَا عَبْدٍ يَوْمَ الْقِيَامَةِ حَتَّى يُسْأَلَ عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ وَعَنْ عِلْمِهِ فِيمَا فَعَلَ وَعَنْ مَالِهِ مِنْ أَيْنَ اكْتَسَبَهُ وَفِيمَا أَنْفَقَهُ وَعَنْ جِسْمِهِ فِيمَا أَبْلَاهُ",
    text: "The two feet of the son of Adam will not move on the Day of Judgment until he is asked about his life and how he spent it, his knowledge and what he did with it, his wealth and how he earned it and spent it, and his body and how he used it.",
    narrator: "Abu Barzah al-Aslami",
    ref: "Jami at-Tirmidhi, Book of the Description of the Day of Judgment",
    topic: "Accountability",
    strength: "Sahih — Narrated by at-Tirmidhi; graded Sahih by at-Tirmidhi and al-Albani"
  },
  {
    arabic: "لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ",
    text: "Richness is not having many possessions, but richness is the richness of the soul.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Heart Softeners; Sahih Muslim, Book of Zakat",
    topic: "Contentment",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
    text: "Part of the perfection of a person's Islam is leaving that which does not concern him.",
    narrator: "Abu Hurairah",
    ref: "Jami at-Tirmidhi, Book of Asceticism; Muwatta Imam Malik",
    topic: "Discipline",
    strength: "Strong — Narrated by at-Tirmidhi and Malik; graded Strong by at-Tirmidhi and an-Nawawi"
  },
  {
    arabic: "لَا تَغْضَبْ، لَا تَغْضَبْ، لَا تَغْضَبْ",
    text: "Do not be angry, do not be angry, do not be angry.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab), Hadith 6116",
    topic: "Self-Control",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ",
    text: "Modesty brings nothing but goodness.",
    narrator: "Imran ibn Husayn",
    ref: "Sahih al-Bukhari, Book of Good Manners; Sahih Muslim, Book of Faith",
    topic: "Modesty",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  }
];

// ---------- Guidance: Deeds & Consequences according to the Quran ----------
// Presented for informational and reflective purposes. Readers are encouraged
// to study each verse in its full surah context, alongside trusted tafsir.
const PARADISE_THEMES = [
  {
    title: "Faith and Righteous Deeds",
    description: "Those who believe and do righteous deeds are promised gardens beneath which rivers flow, to dwell therein forever.",
    refs: ["Surah Al-Baqarah (2:25)", "Surah Al-Kahf (18:107-108)"]
  },
  {
    title: "Patience, Gratitude, and Trust in Allah",
    description: "Those who restrain anger, forgive others, and spend in charity in times of ease and hardship are described among the righteous prepared for Paradise.",
    refs: ["Surah Ali 'Imran (3:133-136)"]
  },
  {
    title: "Humility and Good Character",
    description: "The 'servants of the Most Merciful' are described as walking humbly, responding to ill-treatment with peace, spending the night in prayer, and avoiding excess — their reward is the highest chambers of Paradise.",
    refs: ["Surah Al-Furqan (25:63-76)"]
  },
  {
    title: "Honesty, Charity, and Kindness to Others",
    description: "Feeding the needy, freeing captives, and caring for orphans and the poor out of love for Allah are highlighted as paths that lead away from hardship and toward reward.",
    refs: ["Surah Al-Insan (76:8-12)", "Surah Al-Balad (90:11-18)"]
  },
  {
    title: "Repentance and Seeking Forgiveness",
    description: "Allah's door of repentance is always open. Those who repent sincerely and mend their ways are promised forgiveness and a transformed record of deeds.",
    refs: ["Surah Az-Zumar (39:53)", "Surah Al-Furqan (25:70)"]
  },
  {
    title: "Remembrance of Allah and Prayer",
    description: "Regular remembrance of Allah (dhikr) and establishing prayer are described as the means by which hearts find rest and souls find protection from indecency and wrongdoing.",
    refs: ["Surah Ar-Ra'd (13:28)", "Surah Al-Ankabut (29:45)"]
  },
  {
    title: "Justice and Fairness",
    description: "Standing firmly for justice, even against oneself or one's own family, is commanded as a fundamental duty of the believer.",
    refs: ["Surah An-Nisa (4:135)", "Surah Al-Ma'idah (5:8)"]
  }
];

const WARNING_THEMES = [
  {
    title: "Consuming Wealth Unjustly",
    description: "Those who wrongfully consume the property of orphans are warned of a severe consequence in the Hereafter.",
    refs: ["Surah An-Nisa (4:10)"]
  },
  {
    title: "Dealing in Riba (Usury/Interest)",
    description: "Those who persist in dealing with riba after guidance has come to them are given a strong warning in the Quran.",
    refs: ["Surah Al-Baqarah (2:275-276)"]
  },
  {
    title: "Neglecting Prayer and the Needy",
    description: "Denying the Day of Judgment is linked with mistreating orphans, failing to feed the poor, and being neglectful in prayer.",
    refs: ["Surah Al-Ma'un (107:1-7)"]
  },
  {
    title: "Suspicion, Backbiting, and Mockery",
    description: "Believers are instructed to avoid excessive suspicion, spying on one another, and backbiting — described as something one would find detestable if likened to its true nature.",
    refs: ["Surah Al-Hujurat (49:11-12)"]
  },
  {
    title: "Arrogance and Injustice",
    description: "Walking the earth with arrogance and dealing unjustly with others is repeatedly condemned, while humility before Allah and people is praised.",
    refs: ["Surah Al-Isra (17:37)", "Surah Luqman (31:18)"]
  },
  {
    title: "Lying and Breaking Oaths",
    description: "Hypocrisy, lying, and breaking promises are described as traits that lead to the lowest depths of the Fire, and believers are urged to be truthful in all matters.",
    refs: ["Surah An-Nisa (4:145)", "Surah As-Saff (61:2-3)"]
  },
  {
    title: "Hoarding and Withholding Charity",
    description: "Those who hoard gold and silver and do not spend in the path of Allah are warned of a painful punishment on the Day of Judgment.",
    refs: ["Surah At-Tawbah (9:34-35)"]
  }
];

// ---------- Courses (paid learning paths) ----------
const COURSES = [
  {
    id: "tafsir",
    title: "Tafsir — Verse-by-Verse Quran Explanation",
    level: "All Levels",
    price: "$45 / month",
    description: "Deep dive into the meaning of the Quran, verse by verse. Learn why each ayah was revealed (Asbab an-Nuzul), its historical context, the story behind it, and how scholars from Ibn Kathir to as-Sa'di explained its meaning. Choose between simplified or advanced explanation levels.",
    includes: [
      "Verse-by-verse explanation of each surah",
      "Asbab an-Nuzul — the occasions and stories behind each revelation",
      "Word-by-word meaning in context (without losing the broader meaning)",
      "Toggle between simplified and scholarly-level explanation",
      "References from Ibn Kathir, at-Tabari, al-Qurtubi, and as-Sa'di",
      "Weekly live sessions with a qualified teacher",
      "Downloadable study notes for each surah"
    ]
  },
  {
    id: "quran-recitation",
    title: "Quran Recitation — Learn to Read from A to Z",
    level: "Beginner → Advanced",
    price: "$35 / month",
    description: "Start from the Arabic alphabet and progress to fluent Quran recitation. A qualified teacher guides you through Nooraniyah rules, Tajweed, and proper pronunciation (Makharij al-Huruf) until you can recite any surah confidently.",
    includes: [
      "Arabic alphabet and letter connections",
      "Nooraniyyah foundation course",
      "Full Tajweed rules with practical application",
      "Makharij al-Huruf — correct pronunciation of each letter",
      "1-on-1 live sessions with a certified Quran teacher",
      "Practice recitation with teacher feedback",
      "Progress tracking and level assessments"
    ]
  },
  {
    id: "hifz",
    title: "Hifz — Quran Memorization & Testing",
    level: "All Levels",
    price: "$40 / month",
    description: "Memorize the Quran with a structured plan and a dedicated teacher who tests your memorization regularly. Includes revision schedules, memorization techniques, and certification upon completion of each Juz.",
    includes: [
      "Personalized memorization plan (daily/weekly targets)",
      "1-on-1 memorization sessions with a Hafiz teacher",
      "Regular testing and revision (Muraja'ah) sessions",
      "Memorization techniques and tips for long-term retention",
      "Juz-by-juz certification upon successful testing",
      "Support for both new memorization and revision of old portions",
      "Progress dashboard to track surahs memorized"
    ]
  },
  {
    id: "hadith-explanation",
    title: "Hadith Studies — Explanation, Context & Authentication",
    level: "Intermediate → Advanced",
    price: "$39 / month",
    description: "Study the major hadith collections — Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami at-Tirmidhi, Sunan an-Nasa'i, and Sunan Ibn Majah. Learn the story and context behind each hadith, when and why the Prophet ﷺ said it, and how scholars classify its authenticity.",
    includes: [
      "Book-by-book study of Sahih al-Bukhari and Sahih Muslim",
      "Context and story behind each hadith (Asbab al-Wurud)",
      "Hadith authentication methodology — Sahih, Hasan, Da'if explained",
      "Chains of narration (Isnad) and narrator criticism ('Ilm ar-Rijal)",
      "Explanation of hadith rulings and how scholars derive Fiqh from them",
      "Simplified vs. advanced explanation modes",
      "Live Q&A with hadith scholars"
    ]
  },
  {
    id: "qiraat",
    title: "Qira'at — The Ten Recitations of the Quran",
    level: "Advanced",
    price: "$45 / month",
    description: "Study the authentic Qira'at (canonical recitations) of the Quran — Hafs 'an 'Asim, Warsh 'an Nafi', and the rest of the ten — with their chains of transmission and the differences in pronunciation and rules between them.",
    includes: [
      "Introduction to the science of Qira'at and its history",
      "Hafs 'an 'Asim — the most widespread recitation",
      "Warsh, Qalun, and the other canonical readings",
      "Advanced Tajweed rules applied across recitations",
      "1-on-1 recitation practice with an Ijazah-certified teacher",
      "Path toward Ijazah (certified chain of transmission)"
    ]
  },
  {
    id: "nour-albayan",
    title: "Nour al-Bayan & Nooraniyah — Reading Foundations",
    level: "Children & Beginners",
    price: "$20 / month",
    description: "The famous Nour al-Bayan and Qaida Nooraniyah methods used across the Muslim world to teach children and new learners how to read Arabic and the Quran correctly from zero — letters, harakat, and joining, step by step.",
    includes: [
      "Arabic letters with correct pronunciation (Makharij)",
      "Harakat, tanween, madd, and sukoon step by step",
      "Qaida Nooraniyah lessons in order",
      "Nour al-Bayan method for young children",
      "Fun, patient 1-on-1 sessions designed for kids",
      "Progress certificate at the end of the program"
    ]
  },
  {
    id: "quranic-arabic",
    title: "Quranic Arabic — Understand the Language of the Quran",
    level: "Beginner → Intermediate",
    price: "$29 / month",
    description: "Learn the Arabic grammar (Nahw and Sarf) and vocabulary you need to understand the Quran directly, without relying on translation. Each lesson ties grammar to real Quranic verses so you see it in context.",
    includes: [
      "Arabic alphabet, script, and pronunciation",
      "Core grammar: Nahw (syntax) and Sarf (morphology)",
      "Quranic vocabulary — the 300 most frequent words in the Quran",
      "I'rab — grammatical analysis of Quranic verses",
      "Weekly live sessions with grammar exercises",
      "Quizzes and tests after each module"
    ]
  },
  {
    id: "islamic-studies",
    title: "Islamic Studies — History, Theology & Ethics",
    level: "All Levels",
    price: "$25 / month",
    description: "A comprehensive journey through Islamic history from the Prophets to the Sahaba, the foundations of Islamic belief ('Aqeedah), and the ethics and character that Islam teaches — designed for both new and lifelong learners.",
    includes: [
      "Seerah — the life of Prophet Muhammad ﷺ in detail",
      "Stories of the Prophets with Quranic and hadith references",
      "Lives of the Companions (Sahaba) and Tabi'in",
      "'Aqeedah — foundations of Islamic belief",
      "Islamic ethics, manners, and daily life guidance",
      "Q&A sessions with instructors"
    ]
  },
  {
    id: "fiqh",
    title: "Fiqh — Islamic Jurisprudence",
    level: "Intermediate",
    price: "$35 / month",
    description: "Learn the practical rulings of Islam — prayer, fasting, Zakat, Hajj, transactions, and family law — based on the Quran and Sunnah, with an overview of the four major schools of thought (Hanafi, Maliki, Shafi'i, Hanbali).",
    includes: [
      "Fiqh of worship: Salah, Sawm, Zakat, Hajj",
      "Fiqh of daily life: food, dress, transactions",
      "Comparative Fiqh across the four Madhahib",
      "Evidence-based approach (Quran, Sunnah, Ijma', Qiyas)",
      "Case studies and practical application",
      "Live sessions with a Fiqh instructor"
    ]
  },
  {
    id: "private-tutor",
    title: "Private 1-on-1 Tutor — Personalized Islamic Education",
    level: "All Levels",
    price: "$55 / month",
    description: "A personal tutor matched to your level and goals — whether you want to learn Quran from scratch, improve your recitation, deepen your understanding of hadith, prepare for an exam, or have any specific Islamic learning need. Sessions are fully customized to you.",
    includes: [
      "1-on-1 live sessions (2-4 per week, flexible scheduling)",
      "Custom curriculum tailored to your goals",
      "Quran, Hadith, Arabic, Fiqh, Tafsir — any subject",
      "Progress reports and personalized feedback",
      "Access to all course materials across the platform",
      "Priority support and scheduling"
    ]
  }
];
