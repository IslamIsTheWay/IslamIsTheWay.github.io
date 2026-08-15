/* ============================================
   Islam Is The Way — Data
   Surahs of the Quran, Prophets, and Companions
   ============================================ */

// ---------- The 114 Surahs of the Quran ----------
const SURAHS = [
  { n: 1, name: "Al-Fatihah", arabic: "الفاتحة", meaning: "The Opening", verses: 7, place: "Meccan", pageFrom: 1, pageTo: 1, pages: 1 },
  { n: 2, name: "Al-Baqarah", arabic: "البقرة", meaning: "The Cow", verses: 286, place: "Medinan", pageFrom: 2, pageTo: 49, pages: 48 },
  { n: 3, name: "Ali 'Imran", arabic: "آل عمران", meaning: "The Family of Imran", verses: 200, place: "Medinan", pageFrom: 50, pageTo: 76, pages: 27 },
  { n: 4, name: "An-Nisa", arabic: "النساء", meaning: "The Women", verses: 176, place: "Medinan", pageFrom: 77, pageTo: 106, pages: 30 },
  { n: 5, name: "Al-Ma'idah", arabic: "المائدة", meaning: "The Table Spread", verses: 120, place: "Medinan", pageFrom: 106, pageTo: 127, pages: 22 },
  { n: 6, name: "Al-An'am", arabic: "الأنعام", meaning: "The Cattle", verses: 165, place: "Meccan", pageFrom: 128, pageTo: 150, pages: 23 },
  { n: 7, name: "Al-A'raf", arabic: "الأعراف", meaning: "The Heights", verses: 206, place: "Meccan", pageFrom: 151, pageTo: 176, pages: 26 },
  { n: 8, name: "Al-Anfal", arabic: "الأنفال", meaning: "The Spoils of War", verses: 75, place: "Medinan", pageFrom: 177, pageTo: 186, pages: 10 },
  { n: 9, name: "At-Tawbah", arabic: "التوبة", meaning: "The Repentance", verses: 129, place: "Medinan", pageFrom: 187, pageTo: 207, pages: 21 },
  { n: 10, name: "Yunus", arabic: "يونس", meaning: "Jonah", verses: 109, place: "Meccan", pageFrom: 208, pageTo: 221, pages: 14 },
  { n: 11, name: "Hud", arabic: "هود", meaning: "Hud", verses: 123, place: "Meccan", pageFrom: 221, pageTo: 235, pages: 15 },
  { n: 12, name: "Yusuf", arabic: "يوسف", meaning: "Joseph", verses: 111, place: "Meccan", pageFrom: 235, pageTo: 248, pages: 14 },
  { n: 13, name: "Ar-Ra'd", arabic: "الرعد", meaning: "The Thunder", verses: 43, place: "Medinan", pageFrom: 249, pageTo: 255, pages: 7 },
  { n: 14, name: "Ibrahim", arabic: "ابراهيم", meaning: "Abraham", verses: 52, place: "Meccan", pageFrom: 255, pageTo: 261, pages: 7 },
  { n: 15, name: "Al-Hijr", arabic: "الحجر", meaning: "The Rocky Tract", verses: 99, place: "Meccan", pageFrom: 262, pageTo: 267, pages: 6 },
  { n: 16, name: "An-Nahl", arabic: "النحل", meaning: "The Bee", verses: 128, place: "Meccan", pageFrom: 267, pageTo: 281, pages: 15 },
  { n: 17, name: "Al-Isra", arabic: "الإسراء", meaning: "The Night Journey", verses: 111, place: "Meccan", pageFrom: 282, pageTo: 293, pages: 12 },
  { n: 18, name: "Al-Kahf", arabic: "الكهف", meaning: "The Cave", verses: 110, place: "Meccan", pageFrom: 293, pageTo: 304, pages: 12 },
  { n: 19, name: "Maryam", arabic: "مريم", meaning: "Mary", verses: 98, place: "Meccan", pageFrom: 305, pageTo: 312, pages: 8 },
  { n: 20, name: "Ta-Ha", arabic: "طه", meaning: "Ta-Ha", verses: 135, place: "Meccan", pageFrom: 312, pageTo: 321, pages: 10 },
  { n: 21, name: "Al-Anbiya", arabic: "الأنبياء", meaning: "The Prophets", verses: 112, place: "Meccan", pageFrom: 322, pageTo: 331, pages: 10 },
  { n: 22, name: "Al-Hajj", arabic: "الحج", meaning: "The Pilgrimage", verses: 78, place: "Medinan", pageFrom: 332, pageTo: 341, pages: 10 },
  { n: 23, name: "Al-Mu'minun", arabic: "المؤمنون", meaning: "The Believers", verses: 118, place: "Meccan", pageFrom: 342, pageTo: 349, pages: 8 },
  { n: 24, name: "An-Nur", arabic: "النور", meaning: "The Light", verses: 64, place: "Medinan", pageFrom: 350, pageTo: 359, pages: 10 },
  { n: 25, name: "Al-Furqan", arabic: "الفرقان", meaning: "The Criterion", verses: 77, place: "Meccan", pageFrom: 359, pageTo: 366, pages: 8 },
  { n: 26, name: "Ash-Shu'ara", arabic: "الشعراء", meaning: "The Poets", verses: 227, place: "Meccan", pageFrom: 367, pageTo: 376, pages: 10 },
  { n: 27, name: "An-Naml", arabic: "النمل", meaning: "The Ants", verses: 93, place: "Meccan", pageFrom: 377, pageTo: 385, pages: 9 },
  { n: 28, name: "Al-Qasas", arabic: "القصص", meaning: "The Narration", verses: 88, place: "Meccan", pageFrom: 385, pageTo: 396, pages: 12 },
  { n: 29, name: "Al-Ankabut", arabic: "العنكبوت", meaning: "The Spider", verses: 69, place: "Meccan", pageFrom: 396, pageTo: 404, pages: 9 },
  { n: 30, name: "Ar-Rum", arabic: "الروم", meaning: "The Romans", verses: 60, place: "Meccan", pageFrom: 404, pageTo: 410, pages: 7 },
  { n: 31, name: "Luqman", arabic: "لقمان", meaning: "Luqman", verses: 34, place: "Meccan", pageFrom: 411, pageTo: 414, pages: 4 },
  { n: 32, name: "As-Sajdah", arabic: "السجدة", meaning: "The Prostration", verses: 30, place: "Meccan", pageFrom: 415, pageTo: 417, pages: 3 },
  { n: 33, name: "Al-Ahzab", arabic: "الأحزاب", meaning: "The Combined Forces", verses: 73, place: "Medinan", pageFrom: 418, pageTo: 427, pages: 10 },
  { n: 34, name: "Saba", arabic: "سبأ", meaning: "Sheba", verses: 54, place: "Meccan", pageFrom: 428, pageTo: 434, pages: 7 },
  { n: 35, name: "Fatir", arabic: "فاطر", meaning: "Originator", verses: 45, place: "Meccan", pageFrom: 434, pageTo: 440, pages: 7 },
  { n: 36, name: "Ya-Sin", arabic: "يس", meaning: "Ya Sin", verses: 83, place: "Meccan", pageFrom: 440, pageTo: 445, pages: 6 },
  { n: 37, name: "As-Saffat", arabic: "الصافات", meaning: "Those Ranged in Ranks", verses: 182, place: "Meccan", pageFrom: 446, pageTo: 452, pages: 7 },
  { n: 38, name: "Sad", arabic: "ص", meaning: "The Letter Sad", verses: 88, place: "Meccan", pageFrom: 453, pageTo: 458, pages: 6 },
  { n: 39, name: "Az-Zumar", arabic: "الزمر", meaning: "The Troops", verses: 75, place: "Meccan", pageFrom: 458, pageTo: 467, pages: 10 },
  { n: 40, name: "Ghafir", arabic: "غافر", meaning: "The Forgiver", verses: 85, place: "Meccan", pageFrom: 467, pageTo: 476, pages: 10 },
  { n: 41, name: "Fussilat", arabic: "فصلت", meaning: "Explained in Detail", verses: 54, place: "Meccan", pageFrom: 477, pageTo: 482, pages: 6 },
  { n: 42, name: "Ash-Shuraa", arabic: "الشورى", meaning: "The Consultation", verses: 53, place: "Meccan", pageFrom: 483, pageTo: 489, pages: 7 },
  { n: 43, name: "Az-Zukhruf", arabic: "الزخرف", meaning: "The Ornaments of Gold", verses: 89, place: "Meccan", pageFrom: 489, pageTo: 495, pages: 7 },
  { n: 44, name: "Ad-Dukhan", arabic: "الدخان", meaning: "The Smoke", verses: 59, place: "Meccan", pageFrom: 496, pageTo: 498, pages: 3 },
  { n: 45, name: "Al-Jathiyah", arabic: "الجاثية", meaning: "The Crouching", verses: 37, place: "Meccan", pageFrom: 499, pageTo: 502, pages: 4 },
  { n: 46, name: "Al-Ahqaf", arabic: "الأحقاف", meaning: "The Wind-Curved Sandhills", verses: 35, place: "Meccan", pageFrom: 502, pageTo: 506, pages: 5 },
  { n: 47, name: "Muhammad", arabic: "محمد", meaning: "Muhammad", verses: 38, place: "Medinan", pageFrom: 507, pageTo: 510, pages: 4 },
  { n: 48, name: "Al-Fath", arabic: "الفتح", meaning: "The Victory", verses: 29, place: "Medinan", pageFrom: 511, pageTo: 515, pages: 5 },
  { n: 49, name: "Al-Hujurat", arabic: "الحجرات", meaning: "The Rooms", verses: 18, place: "Medinan", pageFrom: 515, pageTo: 517, pages: 3 },
  { n: 50, name: "Qaf", arabic: "ق", meaning: "The Letter Qaf", verses: 45, place: "Meccan", pageFrom: 518, pageTo: 520, pages: 3 },
  { n: 51, name: "Adh-Dhariyat", arabic: "الذاريات", meaning: "The Winnowing Winds", verses: 60, place: "Meccan", pageFrom: 520, pageTo: 523, pages: 4 },
  { n: 52, name: "At-Tur", arabic: "الطور", meaning: "The Mount", verses: 49, place: "Meccan", pageFrom: 523, pageTo: 525, pages: 3 },
  { n: 53, name: "An-Najm", arabic: "النجم", meaning: "The Star", verses: 62, place: "Meccan", pageFrom: 526, pageTo: 528, pages: 3 },
  { n: 54, name: "Al-Qamar", arabic: "القمر", meaning: "The Moon", verses: 55, place: "Meccan", pageFrom: 528, pageTo: 531, pages: 4 },
  { n: 55, name: "Ar-Rahman", arabic: "الرحمن", meaning: "The Most Merciful", verses: 78, place: "Medinan", pageFrom: 531, pageTo: 534, pages: 4 },
  { n: 56, name: "Al-Waqi'ah", arabic: "الواقعة", meaning: "The Inevitable", verses: 96, place: "Meccan", pageFrom: 534, pageTo: 537, pages: 4 },
  { n: 57, name: "Al-Hadid", arabic: "الحديد", meaning: "The Iron", verses: 29, place: "Medinan", pageFrom: 537, pageTo: 541, pages: 5 },
  { n: 58, name: "Al-Mujadila", arabic: "المجادلة", meaning: "The Pleading Woman", verses: 22, place: "Medinan", pageFrom: 542, pageTo: 545, pages: 4 },
  { n: 59, name: "Al-Hashr", arabic: "الحشر", meaning: "The Exile", verses: 24, place: "Medinan", pageFrom: 545, pageTo: 548, pages: 4 },
  { n: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", meaning: "The Woman to be Examined", verses: 13, place: "Medinan", pageFrom: 549, pageTo: 551, pages: 3 },
  { n: 61, name: "As-Saff", arabic: "الصف", meaning: "The Ranks", verses: 14, place: "Medinan", pageFrom: 551, pageTo: 552, pages: 2 },
  { n: 62, name: "Al-Jumu'ah", arabic: "الجمعة", meaning: "Friday", verses: 11, place: "Medinan", pageFrom: 553, pageTo: 554, pages: 2 },
  { n: 63, name: "Al-Munafiqun", arabic: "المنافقون", meaning: "The Hypocrites", verses: 11, place: "Medinan", pageFrom: 554, pageTo: 555, pages: 2 },
  { n: 64, name: "At-Taghabun", arabic: "التغابن", meaning: "The Mutual Disillusion", verses: 18, place: "Medinan", pageFrom: 556, pageTo: 557, pages: 2 },
  { n: 65, name: "At-Talaq", arabic: "الطلاق", meaning: "The Divorce", verses: 12, place: "Medinan", pageFrom: 558, pageTo: 559, pages: 2 },
  { n: 66, name: "At-Tahrim", arabic: "التحريم", meaning: "The Prohibition", verses: 12, place: "Medinan", pageFrom: 560, pageTo: 561, pages: 2 },
  { n: 67, name: "Al-Mulk", arabic: "الملك", meaning: "The Sovereignty", verses: 30, place: "Meccan", pageFrom: 562, pageTo: 564, pages: 3 },
  { n: 68, name: "Al-Qalam", arabic: "القلم", meaning: "The Pen", verses: 52, place: "Meccan", pageFrom: 564, pageTo: 566, pages: 3 },
  { n: 69, name: "Al-Haqqah", arabic: "الحاقة", meaning: "The Reality", verses: 52, place: "Meccan", pageFrom: 566, pageTo: 568, pages: 3 },
  { n: 70, name: "Al-Ma'arij", arabic: "المعارج", meaning: "The Ascending Stairways", verses: 44, place: "Meccan", pageFrom: 568, pageTo: 570, pages: 3 },
  { n: 71, name: "Nuh", arabic: "نوح", meaning: "Noah", verses: 28, place: "Meccan", pageFrom: 570, pageTo: 571, pages: 2 },
  { n: 72, name: "Al-Jinn", arabic: "الجن", meaning: "The Jinn", verses: 28, place: "Meccan", pageFrom: 572, pageTo: 573, pages: 2 },
  { n: 73, name: "Al-Muzzammil", arabic: "المزمل", meaning: "The Enshrouded One", verses: 20, place: "Meccan", pageFrom: 574, pageTo: 575, pages: 2 },
  { n: 74, name: "Al-Muddaththir", arabic: "المدثر", meaning: "The Cloaked One", verses: 56, place: "Meccan", pageFrom: 575, pageTo: 577, pages: 3 },
  { n: 75, name: "Al-Qiyamah", arabic: "القيامة", meaning: "The Resurrection", verses: 40, place: "Meccan", pageFrom: 577, pageTo: 578, pages: 2 },
  { n: 76, name: "Al-Insan", arabic: "الانسان", meaning: "Man", verses: 31, place: "Medinan", pageFrom: 578, pageTo: 580, pages: 3 },
  { n: 77, name: "Al-Mursalat", arabic: "المرسلات", meaning: "The Emissaries", verses: 50, place: "Meccan", pageFrom: 580, pageTo: 581, pages: 2 },
  { n: 78, name: "An-Naba", arabic: "النبأ", meaning: "The Tidings", verses: 40, place: "Meccan", pageFrom: 582, pageTo: 583, pages: 2 },
  { n: 79, name: "An-Naziat", arabic: "النازعات", meaning: "Those who Drag Forth", verses: 46, place: "Meccan", pageFrom: 583, pageTo: 584, pages: 2 },
  { n: 80, name: "Abasa", arabic: "عبس", meaning: "He Frowned", verses: 42, place: "Meccan", pageFrom: 585, pageTo: 585, pages: 1 },
  { n: 81, name: "At-Takwir", arabic: "التكوير", meaning: "The Overthrowing", verses: 29, place: "Meccan", pageFrom: 586, pageTo: 586, pages: 1 },
  { n: 82, name: "Al-Infitar", arabic: "الإنفطار", meaning: "The Cleaving", verses: 19, place: "Meccan", pageFrom: 587, pageTo: 587, pages: 1 },
  { n: 83, name: "Al-Mutaffifin", arabic: "المطففين", meaning: "The Defrauding", verses: 36, place: "Meccan", pageFrom: 587, pageTo: 589, pages: 3 },
  { n: 84, name: "Al-Inshiqaq", arabic: "الإنشقاق", meaning: "The Sundering", verses: 25, place: "Meccan", pageFrom: 589, pageTo: 589, pages: 1 },
  { n: 85, name: "Al-Buruj", arabic: "البروج", meaning: "The Constellations", verses: 22, place: "Meccan", pageFrom: 590, pageTo: 590, pages: 1 },
  { n: 86, name: "At-Tariq", arabic: "الطارق", meaning: "The Morning Star", verses: 17, place: "Meccan", pageFrom: 591, pageTo: 591, pages: 1 },
  { n: 87, name: "Al-A'la", arabic: "الأعلى", meaning: "The Most High", verses: 19, place: "Meccan", pageFrom: 591, pageTo: 592, pages: 2 },
  { n: 88, name: "Al-Ghashiyah", arabic: "الغاشية", meaning: "The Overwhelming", verses: 26, place: "Meccan", pageFrom: 592, pageTo: 592, pages: 1 },
  { n: 89, name: "Al-Fajr", arabic: "الفجر", meaning: "The Dawn", verses: 30, place: "Meccan", pageFrom: 593, pageTo: 594, pages: 2 },
  { n: 90, name: "Al-Balad", arabic: "البلد", meaning: "The City", verses: 20, place: "Meccan", pageFrom: 594, pageTo: 594, pages: 1 },
  { n: 91, name: "Ash-Shams", arabic: "الشمس", meaning: "The Sun", verses: 15, place: "Meccan", pageFrom: 595, pageTo: 595, pages: 1 },
  { n: 92, name: "Al-Layl", arabic: "الليل", meaning: "The Night", verses: 21, place: "Meccan", pageFrom: 595, pageTo: 596, pages: 2 },
  { n: 93, name: "Ad-Duhaa", arabic: "الضحى", meaning: "The Morning Hours", verses: 11, place: "Meccan", pageFrom: 596, pageTo: 596, pages: 1 },
  { n: 94, name: "Ash-Sharh", arabic: "الشرح", meaning: "The Relief", verses: 8, place: "Meccan", pageFrom: 596, pageTo: 596, pages: 1 },
  { n: 95, name: "At-Tin", arabic: "التين", meaning: "The Fig", verses: 8, place: "Meccan", pageFrom: 597, pageTo: 597, pages: 1 },
  { n: 96, name: "Al-Alaq", arabic: "العلق", meaning: "The Clot", verses: 19, place: "Meccan", pageFrom: 597, pageTo: 597, pages: 1 },
  { n: 97, name: "Al-Qadr", arabic: "القدر", meaning: "The Power", verses: 5, place: "Meccan", pageFrom: 598, pageTo: 598, pages: 1 },
  { n: 98, name: "Al-Bayyinah", arabic: "البينة", meaning: "The Clear Proof", verses: 8, place: "Medinan", pageFrom: 598, pageTo: 599, pages: 2 },
  { n: 99, name: "Az-Zalzalah", arabic: "الزلزلة", meaning: "The Earthquake", verses: 8, place: "Medinan", pageFrom: 599, pageTo: 599, pages: 1 },
  { n: 100, name: "Al-Adiyat", arabic: "العاديات", meaning: "The Courser", verses: 11, place: "Meccan", pageFrom: 599, pageTo: 600, pages: 2 },
  { n: 101, name: "Al-Qari'ah", arabic: "القارعة", meaning: "The Calamity", verses: 11, place: "Meccan", pageFrom: 600, pageTo: 600, pages: 1 },
  { n: 102, name: "At-Takathur", arabic: "التكاثر", meaning: "The Rivalry in World Increase", verses: 8, place: "Meccan", pageFrom: 600, pageTo: 600, pages: 1 },
  { n: 103, name: "Al-Asr", arabic: "العصر", meaning: "The Declining Day", verses: 3, place: "Meccan", pageFrom: 601, pageTo: 601, pages: 1 },
  { n: 104, name: "Al-Humazah", arabic: "الهمزة", meaning: "The Traducer", verses: 9, place: "Meccan", pageFrom: 601, pageTo: 601, pages: 1 },
  { n: 105, name: "Al-Fil", arabic: "الفيل", meaning: "The Elephant", verses: 5, place: "Meccan", pageFrom: 601, pageTo: 601, pages: 1 },
  { n: 106, name: "Quraysh", arabic: "قريش", meaning: "Quraysh", verses: 4, place: "Meccan", pageFrom: 602, pageTo: 602, pages: 1 },
  { n: 107, name: "Al-Ma'un", arabic: "الماعون", meaning: "The Small Kindnesses", verses: 7, place: "Meccan", pageFrom: 602, pageTo: 602, pages: 1 },
  { n: 108, name: "Al-Kawthar", arabic: "الكوثر", meaning: "The Abundance", verses: 3, place: "Meccan", pageFrom: 602, pageTo: 602, pages: 1 },
  { n: 109, name: "Al-Kafirun", arabic: "الكافرون", meaning: "The Disbelievers", verses: 6, place: "Meccan", pageFrom: 603, pageTo: 603, pages: 1 },
  { n: 110, name: "An-Nasr", arabic: "النصر", meaning: "The Divine Support", verses: 3, place: "Medinan", pageFrom: 603, pageTo: 603, pages: 1 },
  { n: 111, name: "Al-Masad", arabic: "المسد", meaning: "The Palm Fiber", verses: 5, place: "Meccan", pageFrom: 603, pageTo: 603, pages: 1 },
  { n: 112, name: "Al-Ikhlas", arabic: "الإخلاص", meaning: "The Sincerity", verses: 4, place: "Meccan", pageFrom: 604, pageTo: 604, pages: 1 },
  { n: 113, name: "Al-Falaq", arabic: "الفلق", meaning: "The Daybreak", verses: 5, place: "Meccan", pageFrom: 604, pageTo: 604, pages: 1 },
  { n: 114, name: "An-Nas", arabic: "الناس", meaning: "Mankind", verses: 6, place: "Meccan", pageFrom: 604, pageTo: 604, pages: 1 }
];

// ---------- Prophets in Islam ----------
const PROPHETS = [
  {
    id: "adam",
    name: "Adam",
    arabic: "آدم",
    title: "Father of Mankind",
    titleAr: "أبو البشر",
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
    titleAr: "النبيّ الصدّيق",
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
    titleAr: "الداعية الصابر",
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
    titleAr: "نبيّ قوم عاد",
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
    titleAr: "نبيّ قوم ثمود",
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
    titleAr: "خليل الله",
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
    titleAr: "ابن أخي إبراهيم الصالح",
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
    titleAr: "الابن الصابر",
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
    titleAr: "ابن البشارة",
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
    titleAr: "إسرائيل",
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
    titleAr: "الصدّيق الأمين",
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
    titleAr: "الصابر",
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
    titleAr: "خطيب الأنبياء",
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
    titleAr: "كليم الله",
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
    titleAr: "الأخ الفصيح المُعين",
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
    titleAr: "الملك الشكور",
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
    titleAr: "الملك الحكيم",
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
    titleAr: "الداعية المخلص",
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
    titleAr: "النبيّ المصطفى",
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
    titleAr: "صاحب الكِفل",
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
    titleAr: "ذو النُّون",
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
    titleAr: "الكفيل العابد",
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
    titleAr: "الفتى الطاهر",
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
    titleAr: "المسيح ابن مريم",
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
    titleAr: "ابن آدم",
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
    titleAr: "خليفة موسى عليه السلام",
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
    titleAr: "النبيّ الذي ملَّك طالوت",
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
    titleAr: "نبيّ بابل",
    category: "prophet",
    summary: "Danyal is mentioned in Islamic tradition as a prophet among the Children of Israel who lived during the Babylonian exile. When his grave was discovered during the conquest of Tustar, the Caliph Omar ordered that he be reburied in a hidden location to prevent veneration.",
    summaryAr: "من أنبياء بني إسرائيل في زمن السبي البابلي، وُجد جسده في فتوح تستر فأمر عمر بدفنه سراً.",
    refs: [
      "Musannaf Ibn Abi Shaybah — account of the discovery of Danyal's body during Omar's caliphate",
      "Ibn Kathir, Al-Bidaya wan-Nihaya — his mention among the prophets of Israel"
    ]
  },
  {
    id: "muhammad",
    name: "Muhammad ﷺ",
    arabic: "محمد",
    title: "The Final Messenger, Seal of the Prophets",
    titleAr: "خاتم النبيّين وسيّد المرسلين",
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
    titleAr: "الخليفة الأول، الصدّيق",
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
    name: "Omar ibn al-Khattab",
    arabic: "عمر بن الخطاب",
    title: "Second Caliph, Al-Farooq (The Distinguisher)",
    titleAr: "الخليفة الثاني، الفاروق",
    category: "companion",
    summary: "Once a fierce opponent of Islam, Omar's conversion strengthened the early Muslim community. As the second Caliph, he oversaw vast territorial expansion, established the Islamic calendar, and was renowned for his justice, humility, and strict accountability — even of himself.",
    summaryAr: "أسلم فقوّى الله به الإسلام، وكان ثاني الخلفاء الراشدين، اشتهر بعدله وزهده، وفي عهده اتسعت الفتوحات ووُضع التقويم الهجري.",
    refs: [
      "Sahih al-Bukhari & Sahih Muslim — numerous narrations on his justice and piety",
      "Historical accounts of the Caliphate (634-644 CE) and administrative reforms"
    ]
  },
  {
    id: "uthman",
    name: "Osman ibn Affan",
    arabic: "عثمان بن عفان",
    title: "Third Caliph, Dhun-Nurayn (Possessor of Two Lights)",
    titleAr: "الخليفة الثالث، ذو النورين",
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
    titleAr: "الخليفة الرابع، ابن عمّ النبيّ ﷺ وصهره",
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
    titleAr: "أمّ المؤمنين، أولى زوجات النبيّ ﷺ",
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
    titleAr: "أمّ المؤمنين، فقيهة الأمة",
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
    titleAr: "سيّدة نساء أهل الجنة",
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
    titleAr: "أوّل مؤذّن في الإسلام",
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
    titleAr: "سيف الله المسلول",
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
    titleAr: "أكثر الصحابة روايةً للحديث",
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
    titleAr: "سلمان الباحث عن الحق",
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
    titleAr: "حَبر الأمة وترجمان القرآن",
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
    titleAr: "أمّ المؤمنين",
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
    titleAr: "أسد الله وسيّد الشهداء",
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
    titleAr: "حواريّ النبيّ ﷺ، وأحد العشرة المبشّرين بالجنة",
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
    titleAr: "الجواد، وأحد العشرة المبشّرين بالجنة",
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
    titleAr: "فاتح فارس، وأحد العشرة المبشّرين بالجنة",
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
    titleAr: "أمين هذه الأمة، وأحد العشرة المبشّرين بالجنة",
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
    titleAr: "التاجر الكريم، وأحد العشرة المبشّرين بالجنة",
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
    titleAr: "أحد العشرة المبشّرين بالجنة",
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
    titleAr: "أوّل سفير في الإسلام",
    category: "companion",
    summary: "Once the wealthiest and most stylish youth of Makkah, Mus'ab gave up his luxurious life for Islam. The Prophet ﷺ sent him to Madinah as the first teacher and ambassador, and he was martyred at Uhud so poor that his burial cloth was not long enough to cover him.",
    summaryAr: "أول سفير في الإسلام، ترك حياة الترف في مكة، وعلّم أهل المدينة القرآن، واستشهد يوم أحد.",
    refs: [
      "Sahih al-Bukhari — the account of his burial at Uhud",
      "Sira accounts of his role as the first envoy to Madinah"
    ]
  },
  {
    id: "saad-ibn-muadh",
    name: "Sa'd ibn Mu'adh",
    arabic: "سعد بن معاذ",
    title: "Chief of the Aws — the one for whom the Throne shook",
    titleAr: "سيّد الأوس، الذي اهتزّ لموته عرش الرحمن",
    category: "companion",
    summary: "The chief of the Aws in Madinah, who accepted Islam at thirty-one through Mus'ab ibn Umayr and brought his entire tribe with him in a single day. He lived only about six years as a Muslim, spoke for the Ansar at Badr, and was wounded at the Trench. The Prophet ﷺ said that the Throne of the Most Merciful shook at his death.",
    summaryAr: "سيّد الأوس بالمدينة، أسلم وهو ابن إحدى وثلاثين سنة على يد مصعب بن عمير، فأسلمت قبيلته كلّها في يومٍ واحد. لم يعش مسلمًا إلا نحو ست سنين، وتكلّم عن الأنصار يوم بدر، وأُصيب يوم الخندق. وقال النبي ﷺ: اهتزّ عرش الرحمن لموت سعد بن معاذ.",
    refs: [
      "Sahih al-Bukhari, Book of the Merits of the Ansar, Hadith 3803 — the Throne shaking at his death",
      "Ibn Ishaq and Ibn Sa'd — his acceptance of Islam through Mus'ab and his words at Badr"
    ]
  },
  {
    id: "ammar",
    name: "Ammar ibn Yasir",
    arabic: "عمار بن ياسر",
    title: "The Steadfast Martyr",
    titleAr: "الشهيد الثابت",
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
    titleAr: "الزاهد الصادق",
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
    titleAr: "حِبّ رسول الله ﷺ",
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
    titleAr: "جعفر الطيّار ذو الجناحين",
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
    titleAr: "أعلم الأمة بالحلال والحرام",
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
    name: "Hafsa bint Omar",
    arabic: "حفصة بنت عمر",
    title: "Mother of the Believers, Guardian of the Quran",
    titleAr: "أمّ المؤمنين، حافظة المصحف",
    category: "companion",
    summary: "The daughter of Omar ibn al-Khattab and wife of the Prophet ﷺ, Hafsa was known for her knowledge and devotion to worship. After the compilation of the Quran under Abu Bakr, the manuscript was entrusted to her safekeeping.",
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
    titleAr: "أوّل شهيدة في الإسلام",
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
    titleAr: "خادم رسول الله ﷺ",
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
    titleAr: "سيّد القرّاء",
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
    titleAr: "صاحب الصوت الجميل",
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
    titleAr: "عالم المدينة الشاب",
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
    titleAr: "سيّد الخزرج",
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
    titleAr: "مُضيف النبيّ ﷺ في المدينة",
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
    titleAr: "أمّ النبيّ ﷺ بعد أمّه",
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
    titleAr: "أوّل من جهر بالقرآن بمكة",
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
    titleAr: "الصابر على الأذى",
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
    titleAr: "الرابح في تجارته",
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
    titleAr: "كاتب الوحي وجامع القرآن",
    category: "companion",
    summary: "The Prophet's ﷺ chief scribe of revelation, who learned Hebrew and Syriac on his command. He led the compilation of the Quran under Abu Bakr and again under Osman, and was a leading scholar of inheritance law.",
    summaryAr: "كاتب الوحي الأول للنبي ﷺ، تولى جمع القرآن في عهد أبي بكر ثم في عهد عثمان، وكان من أعلم الصحابة بالفرائض.",
    refs: [
      "Sahih al-Bukhari, Book of Virtues of the Quran — the compilation of the Quran",
      "Historical accounts of the standardization of the Mushaf under Osman"
    ]
  },
  {
    id: "amr-ibn-alas",
    name: "Amr ibn al-As",
    arabic: "عمرو بن العاص",
    title: "Conqueror of Egypt",
    titleAr: "فاتح مصر",
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
    titleAr: "الحِبّ ابن الحِبّ",
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
    titleAr: "صاحب سرّ رسول الله ﷺ",
    category: "companion",
    summary: "The Prophet ﷺ entrusted him alone with the names of the hypocrites, so he was called the Keeper of the Secret. He asked the Prophet about evil and tribulations while others asked about good, to protect himself and the Ummah.",
    summaryAr: "صاحب سرّ النبي ﷺ، ائتمنه على أسماء المنافقين، وكان يسأل عن الشر مخافة أن يدركه.",
    refs: [
      "Sahih al-Bukhari, Book of Tribulations — his questions about evil and trials",
      "Sahih Muslim — his role as keeper of the secret"
    ]
  },

  {
    id: "abu-darda",
    name: "Abu ad-Darda",
    arabic: "أبو الدرداء",
    title: "The Wise Worshipper",
    titleAr: "الحكيم العابد",
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
    titleAr: "معلّم القرآن وشاهد البيعتين",
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
    titleAr: "شاعر رسول الله ﷺ",
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
    titleAr: "الشاعر وشهيد مؤتة",
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
    titleAr: "صاحب التوبة المقبولة",
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
    titleAr: "الجواد المدافع يوم أُحُد",
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
    titleAr: "أمّ أنس، من نساء أهل الجنة",
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
    titleAr: "نسيبة، مجاهدة أُحُد",
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
    titleAr: "ذات النطاقين",
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
    titleAr: "أوّل مولود للمهاجرين بالمدينة",
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
    name: "Osman ibn Maz'un",
    arabic: "عثمان بن مظعون",
    title: "The Early Ascetic",
    titleAr: "الزاهد الأول",
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
    titleAr: "كاتب الحديث",
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
    titleAr: "خطيب رسول الله ﷺ",
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
    titleAr: "من سادة القرّاء",
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
    titleAr: "أمّ المؤمنين، الكثيرة الصدقة",
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
    titleAr: "أمّ المؤمنين",
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
    titleAr: "أمّ المؤمنين، بركةٌ على قومها",
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
    titleAr: "أمّ المؤمنين",
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
    titleAr: "أمّ المؤمنين",
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
    titleAr: "صاحب العصابة الحمراء",
    category: "companion",
    summary: "The Ansari hero who took the Prophet's sword at Uhud when he asked who would take it with its right, wearing his famous red band of war and shielding the Prophet ﷺ with his own back from arrows.",
    summaryAr: "بطل الأنصار الذي أخذ سيف النبي ﷺ بحقه يوم أحد، وجعل ظهره درعاً للنبي من السهام.",
    refs: [
      "Sahih Muslim — taking the sword of the Prophet ﷺ with its right",
      "Sira accounts of his red band and bravery at Uhud"
    ]
  },
  {
    id: "umm-habibah",
    name: "Umm Habibah (Ramlah bint Abi Sufyan)",
    arabic: "أم حبيبة (رملة بنت أبي سفيان)",
    title: "Mother of the Believers",
    titleAr: "أمّ المؤمنين",
    category: "companion",
    summary: "The daughter of Abu Sufyan, who accepted Islam early while her father was still its fiercest opponent. She migrated to Abyssinia, lost her husband there, and was later married to the Prophet ﷺ. She is remembered for holding to her faith against her own family's opposition.",
    summaryAr: "أم المؤمنين بنت أبي سفيان، أسلمت مبكراً وأبوها بعد على كفره، وهاجرت إلى الحبشة وفقدت زوجها هناك، ثم تزوجها النبي ﷺ. وتُذكر بثباتها على دينها في مواجهة قومها.",
    refs: [
      "Sahih Muslim — narrations transmitted through her",
      "Sira accounts of the migration to Abyssinia and her marriage to the Prophet ﷺ"
    ]
  },
  {
    id: "zaynab-khuzaymah",
    name: "Zaynab bint Khuzaymah",
    arabic: "زينب بنت خزيمة",
    title: "Umm al-Masakin — Mother of the Poor",
    titleAr: "أمّ المساكين",
    category: "companion",
    summary: "Known as 'Mother of the Poor' for her constant feeding of the needy even before Islam. She was a wife of the Prophet ﷺ and passed away only a few months after their marriage — one of only two wives to die during his lifetime.",
    summaryAr: "لُقّبت بأم المساكين لكثرة إطعامها الفقراء حتى قبل الإسلام. تزوجها النبي ﷺ وتوفيت بعد أشهر قليلة من زواجها، وهي إحدى زوجتين توفيتا في حياته ﷺ.",
    refs: [
      "Sira accounts of her generosity and title 'Umm al-Masakin'",
      "Historical accounts of the Mothers of the Believers"
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
    narrator: "Omar ibn al-Khattab",
    ref: "Sahih al-Bukhari, Book of Revelation, Hadith 1",
    topic: "Sincerity",
    title: "Every deed depends on its intention (Niyyah)",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    narrator: "Anas ibn Malik",
    ref: "Sahih al-Bukhari, Book of Faith; Sahih Muslim",
    topic: "Brotherhood",
    title: "Loving for your brother what you love for yourself",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلَاقًا",
    text: "The best among you are those who have the best manners and character.",
    narrator: "Abdullah ibn Amr",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab)",
    topic: "Character",
    title: "The best people are those with the best manners",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    text: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab); Sahih Muslim",
    topic: "Speech",
    title: "Say something good or stay silent",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    text: "Smiling at your brother is an act of charity.",
    narrator: "Abu Dharr al-Ghifari",
    ref: "Sahih Muslim, Book of Zakat, Hadith 1009; also in Jami at-Tirmidhi",
    topic: "Kindness",
    title: "Smiling at others is an act of charity",
    strength: "Sahih — Narrated by Muslim; also at-Tirmidhi"
  },
  {
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    text: "The strong believer is not the one who overcomes people through strength, but the one who controls himself when angry.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab)",
    topic: "Self-Control",
    title: "True strength is controlling yourself when angry",
    strength: "Sahih — Narrated by al-Bukhari",
    /* Added because "أنا كثير الغضب" was returning the ruling on backbiting
       instead of this. With no keys, an Arabic question could only reach this
       entry through the hadith wording itself, which carries harakat and is
       phrased nothing like the way a person actually asks. */
    keys: ["anger", "angry", "temper", "rage", "self control", "control myself", "lose my temper", "patience", "restraint",
           "الغضب", "غاضب", "كثير الغضب", "أغضب", "الحلم", "ملك النفس", "ضبط النفس", "العصبية", "أعصابي", "الصبر"]
  },
  {
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِجَارِهِ مَا يُحِبُّ لِنَفْسِهِ",
    text: "None of you will believe until he loves for his neighbor what he loves for himself.",
    narrator: "Anas ibn Malik",
    ref: "Sahih al-Bukhari, Book of Faith; Sahih Muslim",
    topic: "Neighbors",
    title: "Wanting good for your neighbour",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    text: "The most beloved deeds to Allah are those done consistently, even if they are small.",
    narrator: "Aisha bint Abu Bakr",
    ref: "Sahih al-Bukhari, Book of Faith; Sahih Muslim",
    topic: "Consistency",
    title: "Small, consistent deeds are the most beloved to Allah",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "خَيْرُ النَّاسِ مَنْ أَطْعَمَ الطَّعَامَ",
    text: "He who eats and drinks moderately and shares with others is among the best of people.",
    narrator: "Abdullah ibn Omar",
    ref: "Sahih al-Bukhari, Book of Food and Drink",
    topic: "Generosity",
    title: "Sharing food, eating in moderation",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    text: "Seeking knowledge is an obligation upon every Muslim.",
    narrator: "Anas ibn Malik",
    ref: "Sunan Ibn Majah, Book of the Sunnah",
    topic: "Knowledge",
    title: "Seeking knowledge is a duty on every Muslim",
    strength: "Sahih — Narrated by Ibn Majah; authenticated by as-Suyuti and al-Albani"
  },
  {
    arabic: "الْمُؤْمِنُ الَّذِي يُخَالِطُ النَّاسَ وَيَصْبِرُ عَلَى أَذَاهُمْ خَيْرٌ مِنَ الَّذِي لَا يُخَالِطُ النَّاسَ وَلَا يَصْبِرُ عَلَى أَذَاهُمْ",
    text: "The believer who mixes with people and is patient with their faults is better than the one who avoids people and is impatient with them.",
    narrator: "Ibn Omar",
    ref: "Sunan Ibn Majah, Book of Asceticism; Musnad Ahmad",
    topic: "Patience",
    title: "Mixing with people and bearing their harm with patience",
    strength: "Sahih — Narrated by Ibn Majah and Ahmad; authenticated by al-Albani"
  },
  {
    arabic: "مَنْ يَضْمَنْ لِي مَا بَيْنَ لَحْيَيْهِ وَمَا بَيْنَ رِجْلَيْهِ أَضْمَنْ لَهُ الْجَنَّةَ",
    text: "Whoever guarantees me what is between his jaws and what is between his legs, I guarantee him Paradise.",
    narrator: "Sahl ibn Sa'd",
    ref: "Sahih al-Bukhari, Book of Limits and Punishments",
    topic: "Guarding the Tongue",
    title: "Guard your tongue and chastity, and earn Paradise",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    text: "The best of people are those most beneficial to people.",
    narrator: "Jabir ibn Abdullah",
    ref: "Al-Mu'jam al-Awsat by at-Tabarani",
    topic: "Service",
    title: "The best people are those who benefit others most",
    strength: "Strong — Narrated by at-Tabarani; graded Strong by al-Albani"
  },
  {
    arabic: "اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ، وَصِحَّتَكَ قَبْلَ سَقَمِكَ، وَغِنَاكَ قَبْلَ فَقْرِكَ، وَفَرَاغَكَ قَبْلَ شُغْلِكَ، وَحَيَاتَكَ قَبْلَ مَوْتِكَ",
    text: "Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busyness, and your life before your death.",
    narrator: "Ibn Abbas",
    ref: "Mustadrak al-Hakim",
    topic: "Time",
    title: "Use five before five: youth, health, wealth, free time, life",
    strength: "Sahih — Narrated by al-Hakim; authenticated by al-Hakim and al-Albani"
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    text: "Verily, Allah does not look at your appearances or your wealth, but He looks at your hearts and your deeds.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Book of Righteousness",
    topic: "Sincerity",
    title: "Allah looks at your heart and deeds, not your looks or wealth",
    strength: "Sahih — Narrated by Muslim"
  },
  {
    arabic: "يَسِّرُوا وَلَا تُعَسِّرُوا وَبَشِّرُوا وَلَا تُنَفِّرُوا",
    text: "Make things easy and do not make them difficult, and give good tidings and do not drive people away.",
    narrator: "Anas ibn Malik",
    ref: "Sahih al-Bukhari, Book of Knowledge; Sahih Muslim",
    topic: "Ease",
    title: "Make matters easy, do not make them hard",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    text: "Whoever treads a path seeking knowledge, Allah will make easy for him a path to Paradise.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Book of Remembrance, Hadith 2699",
    topic: "Knowledge",
    title: "Seeking knowledge is a path to Paradise",
    strength: "Sahih — Narrated by Muslim"
  },
  {
    arabic: "لَيْسَ الْمُؤْمِنُ بِالطَّعَّانِ وَلَا اللَّعَّانِ وَلَا الْفَاحِشِ وَلَا الْبَذِيءِ",
    text: "The Muslim does not slander, curse, speak obscenely, or speak rudely.",
    narrator: "Abdullah ibn Mas'ud",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab); Jami at-Tirmidhi",
    topic: "Speech",
    title: "A believer does not slander, curse, or speak obscenely",
    strength: "Sahih — Narrated by al-Bukhari and at-Tirmidhi"
  },
  {
    arabic: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
    text: "Be in this world as though you were a stranger or a traveler.",
    narrator: "Abdullah ibn Omar",
    ref: "Sahih al-Bukhari, Book of Heart Softeners",
    topic: "Worldliness",
    title: "Live in this world like a stranger or a traveller",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    text: "The merciful are shown mercy by the Most Merciful. Show mercy to those on earth, and the One above the heavens will show mercy to you.",
    narrator: "Abdullah ibn Amr",
    ref: "Sunan Abu Dawud; Jami at-Tirmidhi",
    topic: "Mercy",
    title: "Show mercy to those on earth and you will be shown mercy",
    strength: "Sahih — Narrated by Abu Dawud and at-Tirmidhi; authenticated by al-Albani"
  },
  {
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    text: "Whoever removes a hardship from a believer in this world, Allah will remove a hardship from him on the Day of Resurrection.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Book of Remembrance and Supplication, Hadith 2699",
    topic: "Helping Others",
    title: "Relieving a fellow believer's hardship",
    strength: "Sahih — Narrated by Muslim"
  },
  {
    arabic: "لَا يَرْحَمُ اللَّهُ مَنْ لَا يَرْحَمُ النَّاسَ",
    text: "Allah will not show mercy to the one who does not show mercy to people.",
    narrator: "Jarir ibn Abdullah",
    ref: "Sahih al-Bukhari, Book of Monotheism; Sahih Muslim, Book of Virtues",
    topic: "Mercy",
    title: "Allah does not show mercy to those who show no mercy",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    text: "The best of you is the one who learns the Quran and teaches it.",
    narrator: "Osman ibn Affan",
    ref: "Sahih al-Bukhari, Book of Virtues of the Quran, Hadith 5027",
    topic: "Quran",
    title: "The best of you learns the Quran and teaches it",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "الرَّجُلُ عَلَى دِينِ خَلِيلِهِ فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ",
    text: "A man is upon the religion of his close friend, so let one of you look at whom he befriends.",
    narrator: "Abu Hurairah",
    ref: "Sunan Abu Dawud; Jami at-Tirmidhi",
    topic: "Friendship",
    title: "Choose your friends carefully — you follow their way",
    strength: "Strong — Narrated by Abu Dawud and at-Tirmidhi; graded Strong by an-Nawawi"
  },
  {
    arabic: "لَا تَزُولُ قَدَمَا عَبْدٍ يَوْمَ الْقِيَامَةِ حَتَّى يُسْأَلَ عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ وَعَنْ عِلْمِهِ فِيمَا فَعَلَ وَعَنْ مَالِهِ مِنْ أَيْنَ اكْتَسَبَهُ وَفِيمَا أَنْفَقَهُ وَعَنْ جِسْمِهِ فِيمَا أَبْلَاهُ",
    text: "The two feet of the son of Adam will not move on the Day of Judgment until he is asked about his life and how he spent it, his knowledge and what he did with it, his wealth and how he earned it and spent it, and his body and how he used it.",
    narrator: "Abu Barzah al-Aslami",
    ref: "Jami at-Tirmidhi, Book of the Description of the Day of Judgment",
    topic: "Accountability",
    title: "You will be questioned about your life, knowledge, wealth and body",
    strength: "Sahih — Narrated by at-Tirmidhi; graded Sahih by at-Tirmidhi and al-Albani"
  },
  {
    arabic: "لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ",
    text: "Richness is not having many possessions, but richness is the richness of the soul.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Heart Softeners; Sahih Muslim, Book of Zakat",
    topic: "Contentment",
    title: "True richness is the contentment of the heart",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
    text: "Part of the perfection of a person's Islam is leaving that which does not concern him.",
    narrator: "Abu Hurairah",
    ref: "Jami at-Tirmidhi, Book of Asceticism; Muwatta Imam Malik",
    topic: "Discipline",
    title: "Part of good Islam is leaving what does not concern you",
    strength: "Strong — Narrated by at-Tirmidhi and Malik; graded Strong by at-Tirmidhi and an-Nawawi"
  },
  {
    arabic: "لَا تَغْضَبْ، لَا تَغْضَبْ، لَا تَغْضَبْ",
    text: "Do not be angry, do not be angry, do not be angry.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Book of Good Manners (Al-Adab), Hadith 6116",
    topic: "Self-Control",
    title: "Do not become angry",
    strength: "Sahih — Narrated by al-Bukhari"
  },
  {
    arabic: "الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ",
    text: "Modesty brings nothing but goodness.",
    narrator: "Imran ibn Husayn",
    ref: "Sahih al-Bukhari, Book of Good Manners; Sahih Muslim, Book of Faith",
    topic: "Modesty",
    title: "Modesty brings nothing but good",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)"
  },
  {
    arabic: "لَعَنَ رَسُولُ اللَّهِ ﷺ الْمُتَشَبِّهِينَ مِنَ الرِّجَالِ بِالنِّسَاءِ وَالْمُتَشَبِّهَاتِ مِنَ النِّسَاءِ بِالرِّجَالِ",
    text: "The Messenger of Allah ﷺ cursed the men who imitate women and the women who imitate men.",
    narrator: "Abdullah ibn Abbas",
    ref: "Sahih al-Bukhari, Book of Dress (Al-Libas), Hadith 5885",
    topic: "Dress & Imitation",
    title: "Men imitating women, and women imitating men",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["imitate","imitating","imitation","resemble","men wearing women","woman clothes","women's clothes","man wearing","dress like","clothing","clothes","dress","attire","garment","cross dress","تشبه","المتشبهين","لبس","ملابس","ثياب","زي","رجل يلبس","تشبه بالنساء"]
  },
  {
    arabic: "جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ ﷺ فَقَالَ: مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أَبُوكَ",
    text: "A man asked the Messenger of Allah ﷺ: 'Who is most deserving of my good company?' He said: 'Your mother.' He asked: 'Then who?' He said: 'Your mother.' He asked again: 'Then who?' He said: 'Your mother.' He asked: 'Then who?' He said: 'Then your father.'",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Hadith 5971; Sahih Muslim, Hadith 2548",
    topic: "Parents",
    title: "Your mother, then your mother, then your mother, then your father",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["mother","father","parents","parent","family","mom","dad","dutiful","obey parents","أم","أمي","أب","والدين","بر الوالدين","عقوق","أهل"]
  },
  {
    arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
    text: "Whoever cheats us is not one of us.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Book of Faith, Hadith 102",
    topic: "Honesty in Trade",
    title: "Cheating in business or selling",
    strength: "Sahih — Narrated by Muslim",
    /* "work", "job", "exam" and "copy" used to sit here as bare words, so
       "I lost my job and cannot pay the rent" matched this hadith and told a
       worried person that whoever cheats us is not one of us. They are phrases
       now, so they need the actual sense of cheating to be present. */
    keys: ["cheat","cheating","fraud","deceive","scam","business","trade","sell","selling","buy","customer","cheat at work","cheating at work","cheat in exam","cheating in exam","copy in exam","غش","خداع","تدليس","تجارة","بيع","غش في العمل","الغش في الامتحان","نصب"]
  },
  {
    arabic: "لَا يَدْخُلُ الْجَنَّةَ قَاطِعُ رَحِمٍ",
    text: "The one who severs the ties of kinship will not enter Paradise.",
    narrator: "Jubayr ibn Mut'im",
    ref: "Sahih al-Bukhari, Hadith 5984; Sahih Muslim, Hadith 2556",
    topic: "Family Ties",
    title: "Cutting off relatives and family ties",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["family","relative","relatives","kinship","brother","sister","uncle","aunt","cousin","cut off","not speaking","estranged","quarrel","قطيعة","رحم","صلة الرحم","أقارب","أخي","أختي","خصام","هجر"]
  },
  {
    arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي",
    text: "The best of you is the one who is best to his family, and I am the best of you to my family.",
    narrator: "Aisha bint Abu Bakr",
    ref: "Jami at-Tirmidhi, Hadith 3895; Sunan Ibn Majah",
    topic: "Marriage & Family",
    title: "Treating your wife and family well",
    strength: "Sahih — Narrated by at-Tirmidhi; authenticated by al-Albani",
    keys: ["wife","husband","marriage","married","spouse","family","home","argue with wife","divorce","زوجة","زوج","زواج","أهلي","بيت","طلاق","خلاف"]
  },
  {
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    text: "The Muslim is the one from whose tongue and hand other Muslims are safe.",
    narrator: "Abdullah ibn Amr",
    ref: "Sahih al-Bukhari, Hadith 10; Sahih Muslim, Hadith 40",
    topic: "Harming Others",
    title: "Not harming people with your tongue or hand",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["harm","hurt","hit","fight","fighting","bully","abuse","insult","violence","shout","swear","لسان","أذى","ضرب","شتم","سب","عنف","إيذاء","خصام"]
  },
  {
    arabic: "كُلُّ مُسْكِرٍ خَمْرٌ وَكُلُّ خَمْرٍ حَرَامٌ",
    text: "Every intoxicant is khamr, and every khamr is forbidden.",
    narrator: "Abdullah ibn Omar",
    ref: "Sahih Muslim, Book of Drinks, Hadith 2003",
    topic: "Intoxicants",
    title: "Alcohol, drugs and every intoxicant",
    strength: "Sahih — Narrated by Muslim",
    keys: ["alcohol","drink","drinking","drunk","wine","beer","drug","drugs","weed","smoking","intoxicant","addiction","خمر","مسكر","شرب","مخدرات","إدمان","تدخين"]
  },
  {
    arabic: "الظُّلْمُ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ",
    text: "Oppression will be darkness upon darkness on the Day of Resurrection.",
    narrator: "Abdullah ibn Omar",
    ref: "Sahih al-Bukhari, Hadith 2447; Sahih Muslim, Hadith 2579",
    topic: "Oppression",
    title: "Wronging or oppressing another person",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["oppress","oppression","wrong someone","unfair","injustice","abuse","tyrant","took my right","ظلم","اعتداء","حق","جور","استبداد"]
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ",
    text: "Whoever believes in Allah and the Last Day, let him be generous to his neighbour.",
    narrator: "Abu Hurairah",
    ref: "Sahih al-Bukhari, Hadith 6018; Sahih Muslim, Hadith 47",
    topic: "Neighbors",
    title: "How to treat your neighbour",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["neighbour","neighbor","neighbours","next door","building","jar","جار","جيران","سكن","بيت الجيران"]
  },
  {
    arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ",
    text: "Whoever conceals the faults of a Muslim, Allah will conceal his faults in this world and the next.",
    narrator: "Abu Hurairah",
    ref: "Sahih Muslim, Hadith 2699",
    topic: "Concealing Faults",
    title: "Covering someone's fault instead of exposing it",
    strength: "Sahih — Narrated by Muslim",
    keys: ["expose","exposing","secret","scandal","shame someone","spread","reveal","conceal","cover fault","ستر","فضح","سر","عيب","نشر","تشهير"]
  },
  {
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    text: "Fear Allah wherever you are, follow a bad deed with a good deed and it will erase it, and treat people with good character.",
    narrator: "Abu Dharr al-Ghifari",
    ref: "Jami at-Tirmidhi, Hadith 1987",
    topic: "Repentance & Character",
    title: "Erasing a bad deed with a good deed",
    strength: "Strong — Narrated by at-Tirmidhi; graded Strong by at-Tirmidhi",
    keys: ["bad deed","mistake","sin","fix","make up","redeem","erase","guilt","character","سيئة","حسنة","ذنب","تكفير","إصلاح","خلق"]
  },
  {
    arabic: "لَا ضَرَرَ وَلَا ضِرَارَ",
    text: "There should be neither harming nor reciprocating harm.",
    narrator: "Abu Sa'id al-Khudri",
    ref: "Sunan Ibn Majah, Hadith 2341; Muwatta Imam Malik",
    topic: "Harming Others",
    title: "No harming, and no answering harm with harm",
    strength: "Strong — Narrated by Ibn Majah and Malik; authenticated by al-Albani",
    keys: ["revenge","payback","harm","damage","retaliate","get back at","dispute","ضرر","انتقام","إضرار","خصومة","ثأر"]
  },
  {
    arabic: "الدِّينُ النَّصِيحَةُ",
    text: "The religion is sincere good counsel.",
    narrator: "Tamim ad-Dari",
    ref: "Sahih Muslim, Book of Faith, Hadith 55",
    topic: "Sincere Advice",
    title: "Advising others sincerely, not exposing them",
    strength: "Sahih — Narrated by Muslim",
    keys: ["advice","advise","counsel","correct someone","friend doing wrong","help friend","نصيحة","نصح","إرشاد","توجيه","صديق"]
  },
  {
    arabic: "نَفْسُ الْمُؤْمِنِ مُعَلَّقَةٌ بِدَيْنِهِ حَتَّى يُقْضَى عَنْهُ",
    text: "The soul of the believer remains attached to his debt until it is settled for him.",
    narrator: "Abu Hurairah",
    ref: "Jami at-Tirmidhi, Hadith 1078",
    topic: "Debt",
    title: "Owing money and repaying debts",
    strength: "Strong — Narrated by at-Tirmidhi; graded Strong by al-Albani",
    keys: ["debt","owe","owed","borrow","borrowed","loan","money i owe","repay","pay back","دين","ديون","اقتراض","سداد","استدانة"]
  }
];

// ---------- Guidance: Deeds & Consequences according to the Quran ----------
// Presented for informational and reflective purposes. Readers are encouraged
// to study each verse in its full surah context, alongside trusted tafsir.
const PARADISE_THEMES = [
  {
    title: "Faith and Righteous Deeds",
    titleAr: "الإيمان والعمل الصالح",
    description: "Those who believe and do righteous deeds are promised gardens beneath which rivers flow, to dwell therein forever.",
    descriptionAr: "الذين آمنوا وعملوا الصالحات وُعدوا بجنات تجري من تحتها الأنهار خالدين فيها أبداً.",
    keys: ["faith","belief","iman","good deeds","righteous","paradise","jannah","reward","إيمان","عمل صالح","الصالحات","الجنة","أجر","ثواب"],
    refs: ["Surah Al-Baqarah (2:25)", "Surah Al-Kahf (18:107-108)"]
  },
  {
    title: "Patience, Gratitude, and Trust in Allah",
    titleAr: "الصبر والشكر والتوكل على الله",
    description: "Those who restrain anger, forgive others, and spend in charity in times of ease and hardship are described among the righteous prepared for Paradise.",
    descriptionAr: "الذين يكظمون الغيظ ويعفون عن الناس وينفقون في السراء والضراء وُصفوا بالمحسنين الذين أُعدت لهم الجنة.",
    keys: ["patience","patient","anger","angry","forgive","forgiveness","gratitude","trust","hardship","difficulty","stress","struggle","test","calm","صبر","غضب","كظم الغيظ","عفو","شكر","توكل","شدة","ضيق","ابتلاء","مصيبة","تعب"],
    refs: ["Surah Ali 'Imran (3:133-136)"]
  },
  {
    title: "Humility and Good Character",
    titleAr: "التواضع وحسن الخلق",
    description: "The 'servants of the Most Merciful' are described as walking humbly, responding to ill-treatment with peace, spending the night in prayer, and avoiding excess — their reward is the highest chambers of Paradise.",
    descriptionAr: "عباد الرحمن يمشون على الأرض هوناً، وإذا خاطبهم الجاهلون قالوا سلاماً، ويقومون الليل، ولا يسرفون — وجزاؤهم الغرف العالية في الجنة.",
    keys: ["humility","humble","character","manners","akhlaq","gentle","insult","ill-treatment","argue","moderation","تواضع","أخلاق","حسن الخلق","لين","سفه","جدال","اعتدال","إسراف"],
    refs: ["Surah Al-Furqan (25:63-76)"]
  },
  {
    title: "Honesty, Charity, and Kindness to Others",
    titleAr: "الصدق والصدقة والإحسان إلى الناس",
    description: "Feeding the needy, freeing captives, and caring for orphans and the poor out of love for Allah are highlighted as paths that lead away from hardship and toward reward.",
    descriptionAr: "إطعام المسكين وفكّ الرقاب ورعاية اليتيم والفقير حباً في الله من أعظم ما يُنجي ويقرّب إلى الأجر.",
    keys: ["charity","sadaqah","kindness","poor","needy","orphan","hungry","feed","help","give","honesty","صدقة","إحسان","فقير","مسكين","يتيم","جائع","إطعام","مساعدة","عطاء","صدق"],
    refs: ["Surah Al-Insan (76:8-12)", "Surah Al-Balad (90:11-18)"]
  },
  {
    title: "Repentance and Seeking Forgiveness",
    titleAr: "التوبة والاستغفار",
    description: "Allah's door of repentance is always open. Those who repent sincerely and mend their ways are promised forgiveness and a transformed record of deeds.",
    descriptionAr: "باب التوبة مفتوح دائماً، ومن تاب صادقاً وأصلح عمله وُعد بالمغفرة وتبديل سيئاته حسنات.",
    keys: ["sin","sins","repent","repentance","tawbah","forgiveness","guilt","regret","mistake","shame","despair","hopeless","relapse","ذنب","ذنوب","توبة","استغفار","معصية","ندم","خطأ","يأس","قنوط","تقصير"],
    refs: ["Surah Az-Zumar (39:53)", "Surah Al-Furqan (25:70)"]
  },
  {
    title: "Remembrance of Allah and Prayer",
    titleAr: "ذكر الله والصلاة",
    description: "Regular remembrance of Allah (dhikr) and establishing prayer are described as the means by which hearts find rest and souls find protection from indecency and wrongdoing.",
    descriptionAr: "بذكر الله تطمئن القلوب، وإقامة الصلاة تنهى عن الفحشاء والمنكر وتحفظ النفس.",
    keys: ["prayer","salah","salat","dhikr","remembrance","anxious","anxiety","worried","worry","sad","sadness","depressed","depression","fear","lonely","peace","heart","صلاة","ذكر","قلق","خوف","حزن","اكتئاب","وحدة","طمأنينة","قلب","راحة"],
    refs: ["Surah Ar-Ra'd (13:28)", "Surah Al-Ankabut (29:45)"]
  },
  {
    title: "Justice and Fairness",
    titleAr: "العدل والإنصاف",
    description: "Standing firmly for justice, even against oneself or one's own family, is commanded as a fundamental duty of the believer.",
    descriptionAr: "القيام بالقسط شهادةً لله ولو على النفس أو الوالدين والأقربين، واجب أصيل على المؤمن.",
    keys: ["justice","just","fair","fairness","testimony","witness","dispute","conflict","court","rights","bias","عدل","إنصاف","قسط","شهادة","خصومة","نزاع","حق","حقوق","محاباة","ظلم"],
    refs: ["Surah An-Nisa (4:135)", "Surah Al-Ma'idah (5:8)"]
  },
  {
    title: "Modesty, Dress and Lowering the Gaze",
    titleAr: "الحياء واللباس وغض البصر",
    description: "Believing men and women are told to lower their gaze and guard their modesty. The Quran describes clothing as both a covering and an adornment — and says the garment of righteousness (taqwa) is the best garment of all.",
    descriptionAr: "أُمر المؤمنون والمؤمنات بغض البصر وحفظ الفروج، ووصف القرآن اللباس بأنه ستر وزينة، وبيّن أن لباس التقوى هو خير لباس.",
    keys: ["modesty","modest","dress","clothes","clothing","garment","wear","wearing","cover","hijab","veil","awrah","gaze","look","lower gaze","imitate","imitating","appearance","adornment","حياء","لباس","ملابس","ثياب","ستر","حجاب","عورة","غض البصر","نظر","زينة","تشبه","مظهر"],
    refs: ["Surah An-Nur (24:30-31)", "Surah Al-A'raf (7:26)", "Surah Al-Ahzab (33:59)"]
  },
  {
    title: "Kindness to Parents",
    titleAr: "الإحسان إلى الوالدين",
    description: "Allah joins worship of Him with kindness to parents — commanding that they never be spoken to harshly, and that one lower the wing of humility and mercy to them in their old age.",
    descriptionAr: "قرن الله عبادته بالإحسان إلى الوالدين، ونهى عن التأفف منهما، وأمر بخفض جناح الذل من الرحمة لهما عند الكبر.",
    keys: ["parents","parent","mother","father","mom","dad","family","old age","elderly","obey","disobey","ungrateful","والدين","أم","أب","بر","عقوق","كبر","أهل"],
    refs: ["Surah Al-Isra (17:23-24)", "Surah Luqman (31:14)"]
  },
  {
    title: "Love and Mercy Between Spouses",
    titleAr: "المودة والرحمة بين الزوجين",
    description: "Among Allah's signs is that He created spouses for one another and placed love and mercy between them; believers are commanded to live with their spouses in kindness.",
    descriptionAr: "من آيات الله أن خلق للناس أزواجاً وجعل بينهم مودة ورحمة، وأمر المؤمنين أن يعاشروا أزواجهم بالمعروف.",
    keys: ["marriage","married","wife","husband","spouse","divorce","argue","fight with wife","love","relationship","زواج","زوجة","زوج","طلاق","مودة","رحمة","خلاف","معاشرة"],
    refs: ["Surah Ar-Rum (30:21)", "Surah An-Nisa (4:19)"]
  },
  {
    title: "Keeping Trusts and Promises",
    titleAr: "أداء الأمانات والوفاء بالعهد",
    description: "Allah commands that trusts be returned to their rightful owners and that promises be fulfilled — for every covenant will be asked about.",
    descriptionAr: "أمر الله بأداء الأمانات إلى أهلها والوفاء بالعهد، فإن العهد كان مسؤولاً.",
    keys: ["trust","amanah","promise","covenant","oath","borrowed","responsibility","duty","secret","أمانة","عهد","وعد","مسؤولية","حفظ السر"],
    refs: ["Surah An-Nisa (4:58)", "Surah Al-Isra (17:34)"]
  },
  {
    title: "Provision Is From Allah — Rizq and Reliance",
    titleAr: "الرزق بيد الله والتوكل عليه",
    description: "There is no creature on the earth but that its provision is upon Allah. Whoever is mindful of Allah, He makes a way out for him and provides for him from where he never expected — and whoever relies upon Allah, He is sufficient for him.",
    descriptionAr: "ما من دابّة في الأرض إلا على الله رزقها. ومن يتّقِ الله يجعل له مخرجاً ويرزقه من حيث لا يحتسب، ومن يتوكّل على الله فهو حسبه.",
    keys: ["money","provision","rizq","sustenance","income","salary","wage","job","work","unemployed","bills","rent","expenses","afford","poverty","poor","need","worried about money","financial","reliance","tawakkul","depend","sufficient","رزق","مال","معيشة","راتب","وظيفة","عمل","فقر","فقير","حاجة","ضيق","مصاريف","إيجار","توكل","كفاية","قلق من المال","ضيق مالي"],
    refs: ["Surah Hud (11:6)", "Surah At-Talaq (65:2-3)", "Surah Al-Ankabut (29:60)"]
  },
  {
    title: "Ease After Hardship",
    titleAr: "إنّ مع العسر يسراً",
    description: "Allah does not burden a soul beyond what it can bear. With hardship comes ease — stated twice — and Allah will bring about ease after difficulty.",
    descriptionAr: "لا يكلّف الله نفساً إلا وسعها. وإنّ مع العسر يسراً، وقد تكرّرت البشرى مرتين، وسيجعل الله بعد عسرٍ يسراً.",
    keys: ["hardship","difficulty","difficult","struggle","struggling","suffering","distress","crisis","stuck","trapped","overwhelmed","cannot cope","exhausted","tired","burden","too much","relief","ease","hope","hopeless","give up","way out","worried","worry","anxious","scared","afraid","fear","sick","illness","pain","problem","problems","عسر","يسر","شدة","ضيق","كرب","مصيبة","تعب","إرهاق","فرج","مخرج","أمل","يأس","صعوبة","قلق","خوف","مرض","ألم","مشكلة"],
    refs: ["Surah Ash-Sharh (94:5-6)", "Surah Al-Baqarah (2:286)", "Surah At-Talaq (65:7)"]
  },
  {
    title: "Contentment, and Not Envying What Others Have",
    titleAr: "القناعة وعدم النظر إلى ما مُتِّع به الآخرون",
    description: "Do not strain your eyes toward the enjoyment We have given to some of them — the provision of your Lord is better and more lasting. Let neither wealth nor children distract you from the remembrance of Allah.",
    descriptionAr: "لا تمدّنّ عينيك إلى ما متّعنا به أزواجاً منهم، ورزقُ ربك خيرٌ وأبقى. ولا تُلهِكم أموالكم ولا أولادكم عن ذكر الله.",
    keys: ["envy","jealous","jealousy","compare","comparing","rich","richer","wealthy","show off","social media","content","contentment","satisfied","enough","greed","want more","ungrateful","حسد","غيرة","مقارنة","قناعة","رضا","غنى","ثراء","طمع","كفاف","تباهي"],
    refs: ["Surah Ta-Ha (20:131)", "Surah Al-Munafiqun (63:9)", "Surah At-Takathur (102:1-2)"]
  }
];

const WARNING_THEMES = [
  {
    title: "Consuming Wealth Unjustly",
    titleAr: "أكل الأموال بالباطل",
    description: "Those who wrongfully consume the property of orphans are warned of a severe consequence in the Hereafter.",
    descriptionAr: "الذين يأكلون أموال اليتامى ظلماً حُذّروا من عاقبة شديدة في الآخرة.",
    keys: ["orphan","orphans","wealth","money","property","inheritance","steal","unjust","cheat","يتيم","يتامى","مال","أموال","ميراث","سرقة","ظلم","غش","باطل"],
    refs: ["Surah An-Nisa (4:10)"]
  },
  {
    title: "Dealing in Riba (Usury/Interest)",
    titleAr: "التعامل بالربا",
    description: "Those who persist in dealing with riba after guidance has come to them are given a strong warning in the Quran.",
    descriptionAr: "من أصرّ على التعامل بالربا بعد أن جاءه البيان، جاء في حقه وعيد شديد في القرآن.",
    keys: ["riba","interest","usury","loan","bank","mortgage","credit","debt","ربا","فائدة","قرض","بنك","دين","قرض ربوي","تمويل"],
    refs: ["Surah Al-Baqarah (2:275-276)"]
  },
  {
    title: "Neglecting Prayer and the Needy",
    titleAr: "التهاون في الصلاة وإهمال المحتاج",
    description: "Denying the Day of Judgment is linked with mistreating orphans, failing to feed the poor, and being neglectful in prayer.",
    descriptionAr: "التكذيب بيوم الدين قُرن بدفع اليتيم وعدم الحضّ على طعام المسكين والسهو عن الصلاة.",
    keys: ["miss prayer","missing prayer","lazy","neglect","ignore poor","showing off","riya","تهاون","ترك الصلاة","سهو","إهمال","رياء","دفع اليتيم","منع الماعون"],
    refs: ["Surah Al-Ma'un (107:1-7)"]
  },
  {
    title: "Suspicion, Backbiting, and Mockery",
    titleAr: "الظن والغيبة والسخرية",
    description: "Believers are instructed to avoid excessive suspicion, spying on one another, and backbiting — described as something one would find detestable if likened to its true nature.",
    descriptionAr: "نُهي المؤمنون عن كثير من الظن والتجسس والغيبة، وشُبّهت الغيبة بما تكرهه النفس أشد الكراهية.",
    keys: ["backbite","backbiting","gossip","rumor","mock","mockery","insult","suspicion","spy","nickname","bully","غيبة","نميمة","سخرية","استهزاء","ظن","تجسس","تنابز","ألقاب","إهانة"],
    refs: ["Surah Al-Hujurat (49:11-12)"]
  },
  {
    title: "Arrogance and Injustice",
    titleAr: "الكِبر والظلم",
    description: "Walking the earth with arrogance and dealing unjustly with others is repeatedly condemned, while humility before Allah and people is praised.",
    descriptionAr: "المشي في الأرض مرحاً والتعالي على الناس وظلمهم مذموم في القرآن، والتواضع ممدوح.",
    keys: ["arrogance","arrogant","pride","proud","boast","oppress","oppression","injustice","look down","كبر","تكبر","غرور","خيلاء","تفاخر","ظلم","استعلاء","احتقار"],
    refs: ["Surah Al-Isra (17:37)", "Surah Luqman (31:18)"]
  },
  {
    title: "Lying and Breaking Oaths",
    titleAr: "الكذب ونقض العهود",
    description: "Hypocrisy, lying, and breaking promises are described as traits that lead to the lowest depths of the Fire, and believers are urged to be truthful in all matters.",
    descriptionAr: "النفاق والكذب وإخلاف الوعد من صفات المنافقين الذين توعّدهم الله بالدرك الأسفل من النار، والمؤمن مأمور بالصدق.",
    keys: ["lie","lying","liar","dishonest","promise","oath","betray","hypocrisy","hypocrite","cheat","broken word","كذب","نفاق","منافق","وعد","عهد","خيانة","إخلاف","غدر"],
    refs: ["Surah An-Nisa (4:145)", "Surah As-Saff (61:2-3)"]
  },
  {
    title: "Hoarding and Withholding Charity",
    titleAr: "كنز المال ومنع الزكاة",
    description: "Those who hoard gold and silver and do not spend in the path of Allah are warned of a painful punishment on the Day of Judgment.",
    descriptionAr: "الذين يكنزون الذهب والفضة ولا ينفقونها في سبيل الله تُوعّدوا بعذاب أليم يوم القيامة.",
    keys: ["hoard","hoarding","stingy","greed","greedy","miser","zakat","withhold","selfish","كنز","بخل","شح","طمع","زكاة","منع","أنانية"],
    refs: ["Surah At-Tawbah (9:34-35)"]
  },
  {
    title: "Intoxicants and Gambling",
    titleAr: "الخمر والميسر",
    description: "Intoxicants and gambling are described as defilement from the work of Satan, which sow enmity and hatred and turn people away from the remembrance of Allah and from prayer.",
    descriptionAr: "الخمر والميسر رجس من عمل الشيطان، يوقعان العداوة والبغضاء ويصدّان عن ذكر الله وعن الصلاة.",
    keys: ["alcohol","drink","drunk","wine","beer","drug","drugs","gambling","bet","betting","lottery","casino","addiction","smoking","خمر","مسكر","شرب","ميسر","قمار","مراهنة","مخدرات","إدمان"],
    refs: ["Surah Al-Ma'idah (5:90-91)"]
  },
  {
    title: "Cheating in Weights and Measures",
    titleAr: "التطفيف في الكيل والميزان",
    description: "Woe is declared to those who take full measure from people but give less when they measure or weigh for them — a warning against every form of cheating in dealings.",
    descriptionAr: "ويلٌ للمطففين الذين يستوفون حقهم من الناس ويبخسونهم إذا كالوهم أو وزنوهم — تحذير من كل صور الغش في المعاملات.",
    keys: ["cheat","cheating","fraud","scam","short change","weigh","measure","business","trade","customer","deceive","exam","copy","تطفيف","غش","كيل","ميزان","خداع","تجارة","بخس","نصب"],
    refs: ["Surah Al-Mutaffifin (83:1-3)", "Surah Ar-Rahman (55:9)"]
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

/* ============================================================
   STORIES OF THE PROPHET MUHAMMAD ﷺ
   The Dajjal story is placed first deliberately: it is the one warning
   every prophet before him gave his people, and the Prophet ﷺ gathered
   the companions in the mosque specifically to tell it.
   Each one was located in the text of Sahih al-Bukhari or Sahih Muslim
   before being written here — none is from memory. The Bukhari numbers
   match the standard numbering; Muslim is cited by book, because its
   numbering differs between printings and a guessed number is worse
   than none. The "lesson" is what the situation itself teaches.
   ============================================================ */
/* ============================================================
   WHAT TO SAY, AND WHEN — the worship reference
   Not "which verse suits my mood" but the plain question a person
   actually has: what do I say at this point in the prayer, what do I
   say after it, how many times, and what makes a prayer invalid.
   Every wording below was located in Sahih al-Bukhari or Sahih Muslim
   before being written, and carries its reference and grading. Where
   something is well known but NOT in the two Sahihs, that is said
   openly rather than dressed up.
   ============================================================ */
const WORSHIP_STEPS = [
  /* ---------------- BEFORE THE PRAYER ---------------- */
  {
    id: "w-purity",
    stage: "before", stageEn: "Before you pray", stageAr: "قبل الصلاة",
    title: "No prayer is accepted without wudu",
    titleAr: "لا تُقبل صلاة بغير وضوء",
    when: "Before standing to pray, and after anything that breaks your wudu.",
    whenAr: "قبل القيام إلى الصلاة، وبعد كل ما ينقض الوضوء.",
    arabic: "لَا تُقْبَلُ صَلَاةُ مَنْ أَحْدَثَ حَتَّى يَتَوَضَّأَ",
    meaning: "The prayer of one who has broken his wudu is not accepted until he performs wudu again. Abu Hurairah رضي الله عنه was asked what \"hadath\" means, and answered: passing wind, with or without sound.",
    meaningAr: "لا تُقبل صلاة من أحدث حتى يتوضّأ. وسُئل أبو هريرة رضي الله عنه: ما الحدث؟ قال: فُساءٌ أو ضُراط.",
    ref: "Sahih al-Bukhari, Book of Wudu, Hadith 135",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["wudu","ablution","invalid","not accepted","broken","purity","clean","before prayer","وضوء","الحدث","نقض","لا تقبل","الطهارة","قبل الصلاة","بطلان"]
  },
  {
    id: "w-doubt-wudu",
    stage: "before", stageEn: "Before you pray", stageAr: "قبل الصلاة",
    title: "If you doubt whether your wudu broke, do not leave the prayer",
    titleAr: "الشك في انتقاض الوضوء لا يُخرجك من الصلاة",
    when: "When you are praying and are not sure whether you broke your wudu.",
    whenAr: "إذا كنت في الصلاة وشككت هل انتقض وضوءك.",
    arabic: "لَا يَنْصَرِفْ حَتَّى يَسْمَعَ صَوْتًا أَوْ يَجِدَ رِيحًا",
    meaning: "A man complained of imagining something during the prayer. The Prophet ﷺ said he should not leave until he hears a sound or finds a smell — that is, certainty is not undone by doubt.",
    meaningAr: "شكا رجلٌ أنه يُخيَّل إليه الشيء في الصلاة، فقال النبي ﷺ: لا ينصرف حتى يسمع صوتًا أو يجد ريحًا — فاليقين لا يزول بالشك.",
    ref: "Sahih al-Bukhari, Book of Wudu, Hadith 137 and 177",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["doubt","waswas","unsure","broke wudu","leave prayer","certainty","شك","وسواس","انتقاض","اليقين","قطع الصلاة"]
  },

  /* ---------------- INSIDE THE PRAYER ---------------- */
  {
    id: "w-opening",
    stage: "in", stageEn: "After the opening takbir", stageAr: "بعد تكبيرة الإحرام",
    title: "The opening supplication, said quietly before al-Fatihah",
    titleAr: "دعاء الاستفتاح قبل الفاتحة",
    when: "Straight after saying Allahu Akbar, before you begin reciting.",
    whenAr: "بعد تكبيرة الإحرام مباشرةً وقبل الشروع في القراءة.",
    arabic: "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
    meaning: "O Allah, put distance between me and my sins as You have put distance between the east and the west. O Allah, cleanse me of my sins as a white garment is cleansed of dirt. O Allah, wash away my sins with water and snow and hail.",
    meaningAr: "يسأل العبد ربّه أن يُباعد بينه وبين خطاياه، وأن يُنقّيه منها كما يُنقّى الثوب الأبيض من الوسخ، وأن يغسلها بالماء والثلج والبرد.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 744",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["opening","istiftah","start prayer","takbir","before fatiha","dua","الاستفتاح","تكبيرة الإحرام","بداية الصلاة","قبل الفاتحة","دعاء"]
  },
  {
    id: "w-ruku",
    stage: "in", stageEn: "In bowing (ruku')", stageAr: "في الركوع",
    title: "What he ﷺ said while bowing",
    titleAr: "ما كان يقوله ﷺ في ركوعه",
    when: "While your back is bent in ruku'.",
    whenAr: "وأنت راكعٌ منحني الظهر.",
    arabic: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي",
    meaning: "Glory be to You, O Allah our Lord, and with Your praise. O Allah, forgive me. Aishah رضي الله عنها reported he said this in both his bowing and his prostration.",
    meaningAr: "روت عائشة رضي الله عنها أن النبي ﷺ كان يقول في ركوعه وسجوده: سبحانك اللهم ربنا وبحمدك، اللهم اغفر لي.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 794",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["ruku","bowing","bow","what to say","tasbih","الركوع","التسبيح","ماذا أقول","سبحانك"]
  },
  {
    id: "w-rising",
    stage: "in", stageEn: "Rising from bowing", stageAr: "عند الرفع من الركوع",
    title: "Sami' Allahu liman hamidah — and the answer to it",
    titleAr: "سمع الله لمن حمده — وما يُقال بعدها",
    when: "As you straighten up from ruku'.",
    whenAr: "عند رفع رأسك من الركوع.",
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ — اللَّهُمَّ رَبَّنَا وَلَكَ الْحَمْدُ",
    meaning: "Allah hears the one who praises Him — O Allah our Lord, to You belongs all praise. The imam says the first; those behind him answer with the second.",
    meaningAr: "يقول الإمام: سمع الله لمن حمده، ويقول من خلفه: اللهم ربنا ولك الحمد. وكان النبي ﷺ يُكبِّر عند الركوع وعند الرفع.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 795",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["rising","stand up","after ruku","sami allah","rabbana lakal hamd","imam","الرفع","سمع الله لمن حمده","ربنا ولك الحمد","الإمام"]
  },
  {
    id: "w-sujud",
    stage: "in", stageEn: "In prostration (sujud)", stageAr: "في السجود",
    title: "What he ﷺ said while prostrating",
    titleAr: "ما كان يقوله ﷺ في سجوده",
    when: "While your forehead is on the ground.",
    whenAr: "وأنت ساجدٌ وجبهتك على الأرض.",
    arabic: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي",
    meaning: "The same words he said in ruku'. Prostration is also the position in which the Prophet ﷺ said a servant is nearest to his Lord, so make much supplication there.",
    meaningAr: "هي نفس الكلمات التي كان يقولها في الركوع. والسجود أقرب ما يكون العبد من ربه، فأكثِر فيه من الدعاء.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 794",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["sujud","prostration","forehead","ground","what to say","dua","السجود","التسبيح","الدعاء","ماذا أقول","أقرب"]
  },
  {
    id: "w-sujud-posture",
    stage: "in", stageEn: "In prostration (sujud)", stageAr: "في السجود",
    title: "Prostrate on seven bones, and do not spread your forearms",
    titleAr: "السجود على سبعة أعظم وعدم بسط الذراعين",
    when: "The correct posture of prostration.",
    whenAr: "هيئة السجود الصحيحة.",
    arabic: "أُمِرْتُ أَنْ أَسْجُدَ عَلَى سَبْعَةٍ — وَلَا يَبْسُطْ أَحَدُكُمْ ذِرَاعَيْهِ انْبِسَاطَ الْكَلْبِ",
    meaning: "The seven are the forehead with the nose, the two hands, the two knees and the toes of both feet. And the forearms are kept off the ground.",
    meaningAr: "السبعة هي: الجبهة ومعها الأنف، واليدان، والركبتان، وأطراف القدمين. ولا يبسط ذراعيه على الأرض.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 816 and 822",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["sujud","seven bones","posture","how to prostrate","forearms","nose","السجود","سبعة أعظم","الهيئة","الذراعين","الأنف","كيف أسجد"]
  },
  {
    id: "w-tashahhud",
    stage: "in", stageEn: "Sitting for the tashahhud", stageAr: "في التشهد",
    title: "The tashahhud, taught word for word",
    titleAr: "التشهد كما علَّمه ﷺ",
    when: "Sitting after the second rak'ah, and in the final sitting.",
    whenAr: "في الجلوس بعد الركعة الثانية، وفي التشهد الأخير.",
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    meaning: "The companions used to name individuals in their greeting until the Prophet ﷺ turned to them and taught them these exact words, saying that when you say \"peace be upon us and upon the righteous servants of Allah\", it reaches every righteous servant in the heavens and the earth.",
    meaningAr: "كان الصحابة يقولون: السلام على جبريل وميكائيل، على فلانٍ وفلان، فالتفت إليهم النبي ﷺ وعلَّمهم هذه الكلمات، وقال: إنكم إذا قلتموها أصابت كل عبدٍ صالحٍ في السماء والأرض.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 831",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["tashahhud","attahiyat","sitting","second rakah","what to say","التشهد","التحيات","الجلوس","الركعة الثانية"]
  },
  {
    id: "w-salat-ibrahimiyyah",
    stage: "in", stageEn: "After the tashahhud", stageAr: "بعد التشهد",
    title: "How to send prayers upon the Prophet ﷺ",
    titleAr: "الصلاة الإبراهيمية",
    when: "In the final sitting, after the tashahhud, before the salam.",
    whenAr: "في التشهد الأخير بعد التحيات وقبل السلام.",
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
    meaning: "The companions asked him directly: we know how to greet you, but how do we send prayers upon you? These are the words he gave them in answer.",
    meaningAr: "سأله الصحابة: قد علمنا كيف نُسلِّم عليك، فكيف نُصلِّي عليك؟ فعلَّمهم هذه الصيغة.",
    ref: "Sahih al-Bukhari, Book of the Prophets, Hadith 3370",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["salawat","durood","send prayers","ibrahimiyyah","after tashahhud","الصلاة على النبي","الإبراهيمية","بعد التشهد","الدرود"]
  },
  {
    id: "w-before-salam",
    stage: "in", stageEn: "Before the salam", stageAr: "قبل السلام",
    title: "The refuge he ﷺ sought inside every prayer",
    titleAr: "الاستعاذة التي كان يقولها ﷺ في الصلاة",
    when: "In the last sitting, just before turning to give salam.",
    whenAr: "في آخر التشهد قبل أن تُسلِّم.",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَفِتْنَةِ الْمَمَاتِ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ",
    meaning: "Refuge from the punishment of the grave, from the trial of the Masih ad-Dajjal, from the trial of life and of death, and from sin and from debt.",
    meaningAr: "استعاذةٌ من عذاب القبر، ومن فتنة المسيح الدجّال، ومن فتنة المحيا والممات، ومن المأثم والمغرم.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 832",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["before salam","refuge","grave","dajjal","debt","protection","قبل السلام","الاستعاذة","عذاب القبر","الدجال","المغرم","الدين"]
  },

  /* ---------------- AFTER THE PRAYER ---------------- */
  {
    id: "w-after-tasbih",
    stage: "after", stageEn: "After every prayer", stageAr: "بعد كل صلاة",
    title: "The tasbih after every prayer — 33, 33, 33",
    titleAr: "التسبيح بعد كل صلاة: ثلاثًا وثلاثين",
    when: "Immediately after finishing any obligatory prayer.",
    whenAr: "عقب كل صلاة مفروضة.",
    arabic: "سُبْحَانَ اللَّهِ — وَالْحَمْدُ لِلَّهِ — وَاللَّهُ أَكْبَرُ",
    count: "33 each",
    countAr: "ثلاثًا وثلاثين لكلٍّ منها",
    meaning: "The poor companions came saying the wealthy had outstripped them in reward. He taught them this. In this narration he said: say Subhan Allah, al-hamdu lillah and Allahu akbar until each of them reaches thirty-three.",
    meaningAr: "جاء فقراء الصحابة يشكون أن أهل الأموال سبقوهم بالأجر، فعلَّمهم هذا وقال: تقول سبحان الله والحمد لله والله أكبر حتى يكون منهنّ كلهنّ ثلاثًا وثلاثين.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 843",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["after prayer","tasbih","33","subhanallah","alhamdulillah","allahu akbar","count","dhikr","بعد الصلاة","التسبيح","ثلاث وثلاثين","سبحان الله","الحمد لله","الله أكبر","أذكار"]
  },
  {
    id: "w-ayat-kursi",
    stage: "after", stageEn: "After every prayer", stageAr: "بعد كل صلاة",
    title: "Ayat al-Kursi after every prayer",
    titleAr: "آية الكرسي بعد كل صلاة",
    when: "After the obligatory prayer, and before sleeping.",
    whenAr: "عقب الصلاة المكتوبة، وعند النوم.",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
    meaning: "The reading of Ayat al-Kursi (Surah Al-Baqarah 2:255) after every obligatory prayer is widely practised on the strength of a narration of an-Nasa'i, graded authentic by al-Albani. It is NOT in al-Bukhari or Muslim, and this site says so rather than implying otherwise. What IS in al-Bukhari is that reciting it before sleeping brings a guard from Allah and no devil comes near until morning.",
    meaningAr: "قراءة آية الكرسي عقب كل صلاة مكتوبة مشهورةٌ عند الناس، ومستندها حديثٌ عند النسائي صحّحه الألباني، وليست في الصحيحين — ونُبيِّن ذلك ولا نوهم خلافه. وأما الثابت في البخاري فهو قراءتها عند النوم، وأن من قرأها لم يزل عليه من الله حافظ ولا يقربه شيطان حتى يصبح.",
    ref: "Before sleeping: Sahih al-Bukhari, Book of the Virtues of the Quran, Hadith 5010. After the prayer: Sunan an-Nasa'i, authenticated by al-Albani — not in the two Sahihs",
    strength: "Sahih — Narrated by al-Bukhari (for reciting it before sleep); the practice after each prayer is Strong — Narrated by an-Nasa'i, authenticated by al-Albani",
    keys: ["ayat al kursi","kursi","after prayer","chair verse","2:255","protection","sleep","آية الكرسي","بعد الصلاة","الحفظ","النوم","الحماية"]
  },
  {
    id: "w-tahlil-100",
    stage: "daily", stageEn: "Every day", stageAr: "كل يوم",
    title: "A hundred times a day — la ilaha illa Allah, alone",
    titleAr: "مئة مرة في اليوم: لا إله إلا الله وحده لا شريك له",
    when: "Any time in the day; many say it in the morning.",
    whenAr: "في أي وقتٍ من اليوم، وكثيرٌ يقولها في الصباح.",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: "100 times a day",
    countAr: "مئة مرة في اليوم",
    meaning: "Whoever says it a hundred times in a day has the reward of freeing ten slaves, a hundred good deeds are written for him, a hundred bad deeds are erased, and it is a protection from Shaytan for that day until evening.",
    meaningAr: "من قالها مئة مرة في يومٍ كانت له عَدْلَ عشر رقاب، وكُتبت له مئة حسنة، ومُحيت عنه مئة سيئة، وكانت له حِرزًا من الشيطان يومه ذلك حتى يُمسي.",
    ref: "Sahih al-Bukhari, Book of Invocations, Hadith 6403",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["100 times","hundred","daily","dhikr","tahlil","protection","shaytan","reward","مئة مرة","ذكر يومي","لا إله إلا الله","حرز","الشيطان","الأجر"]
  },
  {
    id: "w-tasbih-100",
    stage: "daily", stageEn: "Every day", stageAr: "كل يوم",
    title: "A hundred times a day — Subhan Allah wa bihamdih",
    titleAr: "مئة مرة في اليوم: سبحان الله وبحمده",
    when: "Any time in the day — short enough to say while walking or working.",
    whenAr: "في أي وقت — قصيرةٌ تُقال في المشي والعمل.",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    count: "100 times a day",
    countAr: "مئة مرة في اليوم",
    meaning: "Whoever says it a hundred times in a day has his sins wiped away, even if they were like the foam of the sea.",
    meaningAr: "من قال سبحان الله وبحمده في يومٍ مئة مرة حُطَّت خطاياه وإن كانت مثل زَبَد البحر.",
    ref: "Sahih al-Bukhari, Book of Invocations, Hadith 6405",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["100 times","hundred","subhanallah","sins","forgiven","easy","short","daily","مئة مرة","سبحان الله وبحمده","الذنوب","زبد البحر","ذكر يسير"]
  },

  /* ---------------- ASKING FOR MERCY AND FORGIVENESS ---------------- */
  {
    id: "w-sayyid-istighfar",
    stage: "mercy", stageEn: "Asking forgiveness", stageAr: "طلب المغفرة",
    title: "Sayyid al-Istighfar — the best way to ask forgiveness",
    titleAr: "سيّد الاستغفار",
    when: "Morning and evening. Whoever says it in the day with certainty and dies before evening, or says it at night and dies before morning, is of the people of Paradise.",
    whenAr: "في الصباح والمساء. من قالها من النهار موقنًا بها فمات من يومه قبل أن يُمسي فهو من أهل الجنة، ومن قالها من الليل وهو موقنٌ بها فمات قبل أن يُصبح فهو من أهل الجنة.",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    meaning: "The Prophet ﷺ called this the master of seeking forgiveness. It admits the favour and admits the sin in the same breath, and asks from the only One who can forgive.",
    meaningAr: "سمّاه النبي ﷺ سيّد الاستغفار؛ يُقرّ فيه العبد بالنعمة ويُقرّ بالذنب في نَفَسٍ واحد، ويسأل من لا يغفر الذنوب سواه.",
    ref: "Sahih al-Bukhari, Book of Invocations, Hadith 6306",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["istighfar","forgiveness","sin","repent","mercy","morning","evening","best","الاستغفار","سيد الاستغفار","الذنب","التوبة","الرحمة","الصباح","المساء"]
  },
  {
    id: "w-istighfar-70",
    stage: "mercy", stageEn: "Asking forgiveness", stageAr: "طلب المغفرة",
    title: "He ﷺ sought forgiveness more than seventy times a day",
    titleAr: "استغفاره ﷺ أكثر من سبعين مرة في اليوم",
    when: "Throughout the day, in ordinary moments.",
    whenAr: "في عموم اليوم وفي أوقات العادة.",
    arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    count: "more than 70 times a day",
    countAr: "أكثر من سبعين مرة في اليوم",
    meaning: "Abu Hurairah رضي الله عنه heard him swear by Allah that he asked forgiveness and turned to Him in repentance more than seventy times a day — and his past and future faults were already forgiven.",
    meaningAr: "سمع أبو هريرة رضي الله عنه النبي ﷺ يُقسم بالله أنه يستغفر الله ويتوب إليه في اليوم أكثر من سبعين مرة، وقد غُفر له ما تقدّم وما تأخّر.",
    ref: "Sahih al-Bukhari, Book of Invocations, Hadith 6307",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["istighfar","seventy","70","daily","repent","forgiveness","habit","الاستغفار","سبعين","التوبة","المغفرة","عادة يومية"]
  },

  /* ---- More of his wording: the call, the opening, and after the prayer ----
     Added because the reference was thin on the moments AROUND the prayer —
     the adhan, the silence before al-Fatihah, and the sitting after the
     salam, which is where most of what he ﷺ said every day actually sits. */
  {
    id: "w-adhan-repeat",
    stage: "before", stageEn: "Before you pray", stageAr: "قبل الصلاة",
    title: "Repeat after the muadhdhin, word for word",
    titleAr: "ردِّد مع المؤذّن كلمةً كلمة",
    when: "The moment you hear the adhan, wherever you are — you do not have to be in the mosque.",
    whenAr: "حين تسمع الأذان حيث كنت، ولا يُشترط أن تكون في المسجد.",
    arabic: "إِذَا سَمِعْتُمُ النِّدَاءَ فَقُولُوا مِثْلَ مَا يَقُولُ الْمُؤَذِّنُ",
    meaning: "Say what he says, phrase by phrase. Most people let the adhan pass as background noise; he ﷺ made it something you answer. It costs about ninety seconds and it turns a sound you were ignoring into an act of worship five times a day.",
    meaningAr: "قُل مثل ما يقول، جملةً جملة. وأكثر الناس يدع الأذان يمرّ صوتًا في الخلفية، وقد جعله ﷺ شيئًا تُجيبه. ولا يكلّف إلا نحو تسعين ثانية، فيحيل صوتًا كنت تُهمله إلى عبادةٍ خمس مرّاتٍ في اليوم.",
    ref: "Sahih al-Bukhari, Book of the Call to Prayer, Hadith 611 — narrated from Abu Sa'id al-Khudri; also Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["adhan","call to prayer","muadhdhin","repeat","answer","الأذان","المؤذن","الترديد","إجابة المؤذن"]
  },
  {
    id: "w-adhan-dua",
    stage: "before", stageEn: "Before you pray", stageAr: "قبل الصلاة",
    title: "The words after the adhan that he promised his intercession for",
    titleAr: "دعاء ما بعد الأذان الذي وعد عليه بشفاعته",
    when: "Straight after the adhan finishes, once you have repeated it.",
    whenAr: "عقب فراغ المؤذّن، بعد أن تردّد معه.",
    arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    meaning: "O Allah, Lord of this perfect call and the prayer about to be established — grant Muhammad the wasilah and the excellence, and raise him to the praised station You promised him. He ﷺ said whoever says this on hearing the call, his intercession becomes due for him on the Day of Resurrection. Note what it asks for: it asks nothing for yourself. You ask for HIM — and the reward is his intercession for you.",
    meaningAr: "وقال ﷺ: مَن قالها حين يسمع النداء حلّت له شفاعته يوم القيامة. وتأمّل ما فيها: لا تسأل لنفسك شيئًا، وإنما تسأل له ﷺ — فيكون الجزاء شفاعته لك.",
    ref: "Sahih al-Bukhari, Book of the Call to Prayer, Hadith 614 — narrated from Jabir ibn Abdullah",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["adhan","after adhan","wasilah","intercession","shafaah","الأذان","دعاء الأذان","الوسيلة","الشفاعة","المقام المحمود"]
  },
  {
    id: "w-opening-dua",
    stage: "in", stageEn: "Inside the prayer", stageAr: "داخل الصلاة",
    title: "What he said in the silence before al-Fatihah",
    titleAr: "ما كان يقوله في السكتة قبل الفاتحة",
    when: "After the opening takbir, in the short pause before you recite al-Fatihah.",
    whenAr: "بعد تكبيرة الإحرام، في السكتة اليسيرة قبل قراءة الفاتحة.",
    arabic: "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
    meaning: "O Allah, put between me and my sins the distance You put between the east and the west. O Allah, cleanse me of my sins as a white garment is cleansed of dirt. O Allah, wash away my sins with water and snow and hail. Abu Hurairah رضي الله عنه noticed the silence and asked him what he said in it — which is how we have it at all.",
    meaningAr: "لاحظ أبو هريرة رضي الله عنه تلك السكتة فسأله: ما تقول فيها؟ فأخبره — وبذلك وصلتنا أصلًا.",
    ref: "Sahih al-Bukhari, Book of the Call to Prayer, Hadith 744; also Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["opening","istiftah","takbir","before fatihah","start of prayer","دعاء الاستفتاح","تكبيرة الإحرام","قبل الفاتحة","بداية الصلاة"]
  },
  {
    id: "w-after-salam",
    stage: "after", stageEn: "After the prayer", stageAr: "بعد الصلاة",
    title: "The first thing he said after the salam",
    titleAr: "أول ما كان يقوله بعد السلام",
    when: "Immediately after the salam, before you stand up or speak.",
    whenAr: "عقب السلام مباشرةً، قبل أن تقوم أو تتكلّم.",
    arabic: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    count: "the istighfar three times",
    countAr: "الاستغفار ثلاثًا",
    meaning: "I seek Allah's forgiveness — three times — then: O Allah, You are Peace and from You is peace; blessed are You, Owner of Majesty and Honour. Sit with the order of it: he finishes the prayer and the first thing he does is ask forgiveness. If he ﷺ ended a prayer by seeking forgiveness for it, nobody else should walk away from theirs feeling it was owed.",
    meaningAr: "وتأمّل ترتيبها: يفرغ من الصلاة فيكون أول ما يصنع الاستغفار. فإذا كان ﷺ يختم صلاته بالاستغفار منها، فليس لأحدٍ أن ينصرف من صلاته وهو يرى له بها فضلًا.",
    ref: "Sahih Muslim, Book of Mosques and Places of Prayer — narrated from Thawban",
    strength: "Sahih — Narrated by Muslim",
    keys: ["after prayer","salam","istighfar","as-salam","بعد الصلاة","السلام","الاستغفار","اللهم أنت السلام","أذكار بعد الصلاة"]
  },
  {
    id: "w-tasbih-after",
    stage: "after", stageEn: "After the prayer", stageAr: "بعد الصلاة",
    title: "Thirty-three, thirty-three, thirty-four",
    titleAr: "ثلاثٌ وثلاثون، وثلاثٌ وثلاثون، وأربعٌ وثلاثون",
    when: "After every obligatory prayer, sitting where you prayed.",
    whenAr: "بعد كلّ صلاةٍ مكتوبة، وأنت في مصلّاك.",
    arabic: "سُبْحَانَ اللَّهِ (٣٣) — الْحَمْدُ لِلَّهِ (٣٣) — اللَّهُ أَكْبَرُ (٣٣) — لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: "33 · 33 · 33, then the tahlil to complete one hundred",
    countAr: "٣٣ · ٣٣ · ٣٣ ثم التهليل تمام المئة",
    meaning: "He ﷺ said whoever glorifies Allah thirty-three times, praises Him thirty-three times and magnifies Him thirty-three times after every prayer — that is ninety-nine — and completes the hundred with the words of tahlil, his sins are forgiven even if they were like the foam of the sea. The poor companions complained that the wealthy had outstripped them in reward; this was part of what he gave them, and it costs nothing.",
    meaningAr: "قال ﷺ: مَن سبّح دبر كلّ صلاةٍ ثلاثًا وثلاثين، وحمد ثلاثًا وثلاثين، وكبّر ثلاثًا وثلاثين — فتلك تسعٌ وتسعون — وقال تمام المئة كلمة التهليل، غُفرت خطاياه وإن كانت مثل زبد البحر. وقد شكا فقراء الصحابة أنّ أهل الأموال سبقوهم بالأجر، فكان هذا من جملة ما دلّهم عليه، ولا يكلّف شيئًا.",
    ref: "Sahih Muslim, Book of Mosques and Places of Prayer — narrated from Abu Hurairah",
    strength: "Sahih — Narrated by Muslim",
    keys: ["tasbih","33","after prayer","subhanallah","alhamdulillah","allahu akbar","hundred","التسبيح","ثلاث وثلاثون","بعد الصلاة","سبحان الله","الحمد لله","الله أكبر","المئة"]
  },
  {
    id: "w-muadh-dua",
    stage: "after", stageEn: "After the prayer", stageAr: "بعد الصلاة",
    title: "The one he told Mu'adh never to leave off",
    titleAr: "الذي أوصى معاذًا ألّا يدعه",
    when: "At the end of every prayer.",
    whenAr: "في دُبُر كلّ صلاة.",
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    meaning: "O Allah, help me to remember You, to thank You, and to worship You well. He ﷺ took Mu'adh ibn Jabal by the hand, told him twice that he loved him, and then gave him this. Notice the third request — not merely to worship, but to worship WELL. And notice that all three are requests for HELP: even remembering Him is something you ask His help to do.",
    meaningAr: "أخذ ﷺ بيد معاذ بن جبل وأخبره مرّتين أنه يحبّه ثم أوصاه بهذا. وتأمّل الطلب الثالث: ليس أن يعبد فحسب بل أن يُحسن العبادة. وتأمّل أنّ الثلاثة كلَّها سؤالُ عون: حتى ذكرُه سبحانه تسأله العون عليه.",
    ref: "Sunan Abu Dawud, Book of Prayer, Hadith 1522 — narrated from Mu'adh ibn Jabal",
    strength: "Outside the two Sahihs — narrated by Abu Dawud; graded Sahih by al-Albani and by Shu'ayb al-Arna'ut",
    keys: ["muadh","after prayer","help me","dhikr","gratitude","worship well","معاذ","دبر كل صلاة","أعني على ذكرك","الشكر","حسن العبادة"]
  },
  {
    id: "w-sayyid-istighfar",
    stage: "daily", stageEn: "Through the day", stageAr: "في عموم اليوم",
    title: "The master of seeking forgiveness",
    titleAr: "سيّد الاستغفار",
    when: "Once in the morning and once in the evening.",
    whenAr: "مرّةً في الصباح ومرّةً في المساء.",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    count: "morning and evening",
    countAr: "صباحًا ومساءً",
    meaning: "He ﷺ said whoever says it during the day with certainty in it and dies before evening is of the people of Paradise, and whoever says it at night with certainty and dies before morning is of the people of Paradise. Look at how it is built: it makes no excuse. It admits the favour AND admits the sin in the same breath — I acknowledge Your favour upon me, and I acknowledge my sin — and only then asks.",
    meaningAr: "قال ﷺ: مَن قالها من النهار موقنًا بها فمات من يومه قبل أن يُمسي فهو من أهل الجنة، ومَن قالها من الليل وهو موقنٌ بها فمات قبل أن يُصبح فهو من أهل الجنة. وانظر بناءها: ليس فيها اعتذار، بل تُقرّ بالنعمة وتُقرّ بالذنب في نفَسٍ واحد — «أبوء لك بنعمتك عليّ وأبوء لك بذنبي» — ثم تسأل بعد ذلك.",
    ref: "Sahih al-Bukhari, Book of Invocations, Hadith 6306 — narrated from Shaddad ibn Aws",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["sayyid al-istighfar","forgiveness","morning","evening","master","سيد الاستغفار","الاستغفار","الصباح","المساء","أذكار الصباح والمساء"]
  },
  {
    id: "w-karb",
    stage: "mercy", stageEn: "When you are asking for mercy", stageAr: "حين تسأل الرحمة",
    title: "What he said when something was crushing him",
    titleAr: "ما كان يقوله عند الكرب",
    when: "At a moment of real distress — the news you were dreading, the thing you cannot fix.",
    whenAr: "عند الكرب الحقيقي: الخبر الذي كنت تخشاه، والأمر الذي لا تملك له حيلة.",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
    meaning: "There is no god but Allah, the Magnificent, the Forbearing. There is no god but Allah, Lord of the Mighty Throne. There is no god but Allah, Lord of the heavens and Lord of the earth and Lord of the Noble Throne. Notice that it contains no request at all. It is pure declaration of who He is — and that is the point: at the moment you are smallest, you are reminded of the size of the One you are speaking to.",
    meaningAr: "وتأمّل أنه ليس فيه سؤالٌ البتّة، وإنما هو تعظيمٌ محضٌ لمن تدعوه — وهذا هو المقصود: في أضعف ما تكون، تُذكَّر بعظمة من تخاطبه.",
    ref: "Sahih al-Bukhari, Book of Invocations, Hadith 6346 — narrated from Ibn Abbas; also Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["distress","karb","anxiety","panic","crisis","hardship","worry","الكرب","الهمّ","الضيق","الشدة","القلق","دعاء الكرب"]
  }
];

/* ============================================================
   CLASSICAL WORDS EXPLAINED
   The hadith wording is seventh-century Arabic. A native speaker today
   reads "قَطَط" or "مُمْحِلين" or "يعاسيب" and stops — these words are
   simply not in use any more. Each entry gives the meaning in ordinary
   modern Arabic, and in English for readers using that side of the site.
   The key is written WITHOUT harakat; matching strips them from the text.
   ============================================================ */
const AR_GLOSSARY = {
  // — the hadith of the Dajjal —
  "قطط":        { ar: "شديد جُعودة الشعر", en: "with tightly curled hair" },
  "طافئة":      { ar: "ذاهبة الضوء، أي عوراء", en: "sightless — a blind eye" },
  "خلة":        { ar: "الطريق أو الثغرة بين موضعين", en: "the gap or road between two places" },
  "عاث":        { ar: "أفسد وأكثر من الفساد", en: "spread ruin" },
  "اقدروا":     { ar: "احسِبوا مقداره بالتقدير", en: "work out its measure" },
  "الغيث":      { ar: "المطر", en: "rain" },
  "استدبرته":   { ar: "دفعته من خلفه", en: "driving it from behind" },
  "سارحتهم":    { ar: "ماشيتهم التي تخرج للرعي", en: "their grazing animals" },
  "ذرى":        { ar: "أعالي الأسنمة", en: "the tops of the camels' humps" },
  "ضروعا":      { ar: "جمع ضَرْع، موضع اللبن", en: "udders" },
  "خواصر":      { ar: "جوانب البطن", en: "flanks" },
  "ممحلين":     { ar: "أصابهم الجدب والقحط", en: "struck by drought" },
  "الخربة":     { ar: "المكان المهجور الخالي", en: "a ruined, deserted place" },
  "كيعاسيب":    { ar: "كأسراب النحل خلف ذكورها", en: "like a swarm of bees" },
  "جزلتين":     { ar: "قطعتين", en: "two pieces" },
  "الغرض":      { ar: "الهدف الذي يُرمى إليه", en: "the archer's target" },
  "يتهلل":      { ar: "يستنير ويُشرق", en: "shining, lit up" },
  "مهرودتين":   { ar: "ثوبين مصبوغين صبغًا خفيفًا", en: "two lightly dyed garments" },
  "جمان":       { ar: "حبّ اللؤلؤ", en: "pearl-like beads" },
  "الطيالسة":   { ar: "أكسية تُلبس على الكتفين", en: "shawls worn over the shoulders" },
  "حجيج":       { ar: "المُخاصِم بالحُجّة", en: "the one who argues the case" },
  "خفض":        { ar: "هوّن من أمره", en: "made it sound small" },
  "رفع":        { ar: "عظّم من أمره", en: "made it sound great" },
  "الجساسة":    { ar: "دابّة سُمّيت بذلك لتجسُّسها الأخبار", en: "the beast — named for spying out news" },
  "الدير":      { ar: "صومعة النصارى", en: "a monastery" },
  "أهلب":       { ar: "كثير الشعر غليظه", en: "thickly haired" },
  "طيبة":       { ar: "اسم من أسماء المدينة النبوية", en: "one of the names of Madinah" },
  "نقب":        { ar: "الطريق في الجبل، والمدخل", en: "a mountain pass, an entry road" },
  "مخصرته":     { ar: "عصا صغيرة كان يمسكها بيده", en: "the small staff he held" },
  "زغر":        { ar: "عين ماء بالشام", en: "a spring in Syria" },
  "بيسان":      { ar: "موضع بالشام فيه نخل", en: "a place in Syria known for its palms" },
  "لد":         { ar: "بلدة بفلسطين", en: "a town in Palestine" },
  "أصبهان":     { ar: "مدينة بفارس", en: "a city in Persia" },
  "المنارة":    { ar: "المئذنة", en: "the minaret" },

  // — the other stories —
  "تزرموه":     { ar: "لا تقطعوا عليه بوله", en: "do not cut him off" },
  "خشاش":       { ar: "صغار هوامّ الأرض وحشراتها", en: "the small creatures of the earth" },
  "الكل":       { ar: "الثقل، ومن لا يستقلّ بأمر نفسه", en: "the burden — those who cannot manage alone" },
  "تكسب":       { ar: "تُعطي وتُنفق على", en: "you give to" },
  "المعدوم":    { ar: "الفقير الذي لا يملك شيئًا", en: "the destitute" },
  "تقري":       { ar: "تُحسن ضيافته", en: "you honour (the guest)" },
  "نوائب":      { ar: "ما ينزل بالناس من الشدائد", en: "the calamities that strike people" },
  "أهب":        { ar: "جلود لم تُدبغ بعد", en: "untanned hides" },
  "قرظا":       { ar: "ورق شجر يُدبغ به الجلد", en: "leaves used for tanning" },
  "عرق":        { ar: "مِكتل أو زنبيل من خوص", en: "a large basket" },
  "لابتيها":    { ar: "حرّتا المدينة، أرضها ذات الحجارة السود", en: "the two lava fields of Madinah" },
  "دف":         { ar: "صوت حركة النعلين", en: "the sound of footsteps" },
  "تقم":        { ar: "تكنس وتنظّف", en: "used to sweep" },
  "يشوص":       { ar: "يدلك فمه وينقّيه", en: "scrubs his mouth" },
  "خمصا":       { ar: "ضمور البطن من الجوع", en: "the hollowness of hunger" },
  "صلتا":       { ar: "مسلولًا من غمده", en: "drawn from its sheath" },
  "اخترط":      { ar: "سلّ السيف من غمده", en: "drew (the sword)" },
  "الروع":      { ar: "الفزع والخوف", en: "the fright" },
  "زملوني":     { ar: "لفّوني بالثياب", en: "wrap me in a cloak" },
  "الناموس":    { ar: "صاحب السرّ، والمقصود جبريل عليه السلام", en: "the keeper of the secret — Jibril" },
  "طأطأ":       { ar: "خفض رأسه", en: "lowered (his head)" },
  "الدباء":     { ar: "القَرْع", en: "gourd" },
  "القصعة":     { ar: "إناء كبير يُؤكل فيه", en: "a large serving dish" },
  "التلبينة":   { ar: "حساء يُصنع من دقيق الشعير", en: "a broth made from barley flour" },
  "مجمة":       { ar: "تُريح القلب وتُذهب بعض الغمّ", en: "it rests the heart" },
  "هرة":        { ar: "قطّة", en: "a cat" },
  "أف":         { ar: "كلمة تضجُّر وتبرُّم", en: "a word of irritation" },
  "الأعور":     { ar: "من ذهبت إحدى عينيه", en: "blind in one eye" },
  "رقبة":       { ar: "المملوك، والمراد عتقه", en: "a slave — meaning to free one" },
  "مصلاه":      { ar: "الموضع الذي صلّى فيه", en: "the spot where he prayed" },
  "الوحي":      { ar: "ما يُنزله الله على أنبيائه", en: "revelation" }
};

/* ============================================================
   THE SECTIONS OF THE STORIES — أقسام القصص
   ------------------------------------------------------------
   The stories are grouped by WHAT THE STORY TEACHES, not by when
   it happened or where it was narrated. Someone who comes here
   after losing their temper, or after being wronged and having
   the power to answer it, should be able to find the section
   that speaks to that and read the four or five stories in it
   together — which is a different thing from scrolling forty
   cards in the order they were written.

   `order` fixes the sequence on the page. A story's `section`
   must be one of these ids or it will not appear.
   ============================================================ */
const STORY_SECTIONS = [
  { id: "mercy",       order: 1, icon: "🤲",
    en: "Mercy and gentleness",              ar: "الرحمة واللين",
    leadEn: "What he was like with the weak, the small and the ones who could do nothing for him.",
    leadAr: "كيف كان مع الضعيف والصغير ومن لا يملك أن ينفعه بشيء." },
  { id: "forgiveness", order: 2, icon: "🕊️",
    en: "Forgiveness when he had the power", ar: "العفو عند المقدرة",
    leadEn: "Every one of these is a moment when he could have taken revenge and did not — which is the only time forgiveness means anything.",
    leadAr: "كلُّ موقفٍ منها ساعةٌ كان يقدر فيها على الانتقام فلم ينتقم — وحينئذٍ فقط يكون للعفو معنى." },
  { id: "justice",     order: 3, icon: "🛡️",
    en: "Justice, anger and ruling yourself", ar: "العدل والغضب وملك النفس",
    leadEn: "What he did when the guilty person was well-connected, and what he told a man who asked for one piece of advice.",
    leadAr: "ما صنع حين كان المذنب ذا جاه، وما قاله لرجلٍ سأله وصيّةً واحدة." },
  { id: "people",      order: 4, icon: "🤝",
    en: "How he treated people",             ar: "كيف عامل الناس",
    leadEn: "Servants, neighbours, the poor, and people who were not Muslims at all.",
    leadAr: "الخدم والجيران والفقراء ومن لم يكن مسلمًا أصلًا." },
  { id: "dunya",       order: 5, icon: "⚖️",
    en: "What this world is worth",          ar: "قدر الدنيا",
    leadEn: "He ruled Arabia and slept on a mat that marked his side.",
    leadAr: "ملك جزيرة العرب ونام على حصيرٍ أثّر في جنبه." },
  { id: "trials",      order: 6, icon: "🌧️",
    en: "Fear, grief and hardship",          ar: "الخوف والحزن والشدّة",
    leadEn: "For anyone reading this in the middle of something hard: he was afraid, and he wept, and he was told what to do about both.",
    leadAr: "لمن يقرأ هذا وهو في شدّة: قد خاف، وقد بكى، وقد بُيِّن له ما يصنع في الحالين." },
  { id: "worship",     order: 7, icon: "🕌",
    en: "Worship, sincerity and the small deed", ar: "العبادة والإخلاص والعمل اليسير",
    leadEn: "How little a deed can be and still be the reason someone is forgiven.",
    leadAr: "كم يصغر العمل ويبقى مع ذلك سبب مغفرة صاحبه." },
  { id: "knowledge",   order: 8, icon: "📖",
    en: "Knowing your religion",             ar: "معرفة الدين",
    leadEn: "The religion set out plainly, in front of the companions, so that nobody would have to guess at it afterwards.",
    leadAr: "الدين مبيَّنًا بين يدي الصحابة، حتى لا يبقى بعده تخمين." },
  { id: "signs",       order: 9, icon: "✨",
    en: "The signs he was given",            ar: "الآيات التي أُيِّد بها",
    leadEn: "What was shown, who saw it, and what those who saw it did next.",
    leadAr: "ما أُرِي، ومن رآه، وماذا صنع من رآه بعد ذلك." },
  { id: "endtimes",    order: 10, icon: "⏳",
    en: "The end of time",                   ar: "آخر الزمان",
    leadEn: "The trial he warned about more than any other, and the two things he told everyone to do about it.",
    leadAr: "الفتنة التي حذّر منها أكثر من غيرها، والأمران اللذان أمر كلَّ أحدٍ أن يصنعهما لها." }
];

const PROPHET_STORIES = [
  {
    id: "dajjal-tamim-jassasah",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "Tamim ad-Dari and the chained man on the island — the Dajjal",
    titleAr: "تميم الداري والجسّاسة والرجل المُوثَق في الجزيرة — المسيح الدجّال",
    theme: "The warning every prophet gave",
    themeAr: "التحذير الذي حذَّره كلُّ نبيّ",
    story: "Fatimah bint Qays رضي الله عنها said the Prophet ﷺ called the people to the mosque, sat on the pulpit smiling, and said: \"By Allah, I have not gathered you for exhortation or a warning, but because Tamim ad-Dari — a Christian who came and accepted Islam — told me something that agrees with what I have been telling you about the Dajjal.\"\n\nTamim said he sailed with thirty men of Lakhm and Judham and the waves tossed them for a month, until they landed at sunset on an island in the sea. There a beast met them, so thickly haired they could not tell its face from its back. They said: what are you? It said: \"I am al-Jassasah. Go to that man in the monastery — he is desperate for news of you.\"\n\nThey hurried to the monastery and found a huge man, his hands bound to his neck and iron shackles from his knees to his ankles. He asked them about three things: the date-palms of Baysan — do they still bear fruit? The lake of Tiberias — is there still water in it? The spring of Zughar — does it still water the land? To each they answered yes, and to each he said it would soon fail.\n\nThen he asked about the unlettered Prophet: what has he done? They said he has left Makkah and settled in Yathrib. He asked: do the Arabs fight him? They said yes. He asked how he dealt with them, and they told him he had overcome those around him and they had submitted. He said: \"That is better for them, that they obey him.\"\n\nThen he said: \"I will tell you about myself. I am the Dajjal. I shall soon be permitted to come out, and I will travel the earth and leave no town where I do not stay forty nights — except Makkah and Taybah. Both are forbidden to me. Every time I try to enter one of them an angel meets me with a drawn sword and turns me back, and there are angels guarding every road into them.\"\n\nThe Prophet ﷺ struck the pulpit with his staff and said: \"This is Taybah — this is Madinah.\" Then: \"Did I not tell you this before?\" The people said yes. He said Tamim's account pleased him because it matched what he had told them about the Dajjal, and about Makkah and Madinah. Then he pointed east and said three times: \"He is in the east — he is in the east — he is in the east.\"",
    storyAr: "قالت فاطمة بنت قيس رضي الله عنها: نادى النبيُّ ﷺ الناس إلى المسجد، فجلس على المنبر وهو يضحك فقال: «والله ما جمعتكم لرغبةٍ ولا لرهبة، ولكن جمعتكم لأنّ تميمًا الداريَّ — رجلًا نصرانيًّا فجاء فأسلم — حدَّثني حديثًا وافق الذي كنت أحدِّثكم عن المسيح الدجّال».\n\nحدَّث تميمٌ أنه ركب في سفينةٍ مع ثلاثين رجلًا من لَخْمٍ وجُذام، فلعب بهم الموج شهرًا، حتى أَرْفَؤوا عند غروب الشمس إلى جزيرةٍ في البحر. فلقيتهم دابّةٌ أهلبُ كثيرُ الشعر لا يُدرى ما قُبُله من دُبُره، فقالوا: ما أنتِ؟ قالت: «أنا الجسّاسة، انطلقوا إلى هذا الرجل في الدَّير فإنه إلى خبركم بالأشواق».\n\nفانطلقوا سراعًا حتى دخلوا الدَّير، فإذا فيه أعظمُ إنسانٍ رأوه، يداه مجموعتان إلى عنقه، وما بين ركبتيه إلى كعبيه بالحديد. فسألهم عن ثلاث: نخل بَيْسان، هل يُثمر؟ وبُحيرة الطبرية، هل فيها ماء؟ وعين زُغَر، هل فيها ماء وهل يزرع أهلها بمائها؟ فأجابوه بنعم في كلٍّ، فقال في كلٍّ إنها تُوشك أن تذهب.\n\nثم سأل عن النبيِّ الأمّيِّ: ما فعل؟ قالوا: قد خرج من مكة ونزل يثرب. قال: أقاتله العرب؟ قالوا: نعم. قال: كيف صنع بهم؟ فأخبروه أنه قد ظهر على من يليه من العرب وأطاعوه. قال: «قد كان ذلك؟ فإن ذاك خيرٌ لهم أن يُطيعوه».\n\nثم قال: «إني مُخبركم عني: أنا المسيح الدجّال، وإني أوشك أن يُؤذَن لي في الخروج، فأخرج فأسير في الأرض فلا أدع قريةً إلا هبطتها في أربعين ليلة، غير مكة وطَيْبة، فهما محرَّمتان عليّ كلتاهما، كلما أردت أن أدخل واحدةً منهما استقبلني ملَكٌ بيده السيف صَلْتًا يصدُّني عنها، وإنّ على كلِّ نَقْبٍ منها ملائكةً يحرسونها».\n\nفطعن النبيُّ ﷺ بمِخصرته في المنبر وقال: «هذه طَيْبة، هذه طَيْبة، هذه طَيْبة — يعني المدينة». ثم قال: «ألا هل كنت حدَّثتكم ذلك؟» فقال الناس: نعم. وأخبر أن حديث تميمٍ أعجبه لأنه وافق ما كان يحدِّثهم عن الدجّال وعن المدينة ومكة. ثم أشار بيده إلى المشرق وقال: «ألا إنه في بحر الشام أو بحر اليمن، لا بل من قِبَل المشرق، ما هو من قِبَل المشرق، ما هو من قِبَل المشرق».",
    arabic: "أَنَا الْمَسِيحُ الدَّجَّالُ، وَإِنِّي أُوشِكُ أَنْ يُؤْذَنَ لِي فِي الْخُرُوجِ",
    lesson: "The Prophet ﷺ described the Dajjal in ways that can be checked: he is blind in one eye — \"and your Lord is not one-eyed\" — and between his eyes is written kafir, which every believer will read. No prophet was sent who did not warn his people about him, and the Prophet ﷺ said he would say about him what no prophet had said before: that plain fact about his eye. That is the point of the warning. He will come with wonders, and the test is not whether the wonders are impressive but whether you are willing to see the defect the wonders are meant to distract you from. Madinah and Makkah are closed to him, guarded at every road. Notice also what the Prophet ﷺ did with Tamim's account: he did not hide that it came from a man who had been a Christian, nor claim it as revelation. He weighed it against what he already knew and told the people plainly where it came from.",
    lessonAr: "وصف النبيُّ ﷺ الدجّال بما يمكن التحقّق منه: إنه أعورُ العين، «وإنّ ربَّكم ليس بأعور»، وبين عينيه مكتوبٌ كافر يقرؤه كلُّ مؤمن. وما بُعث نبيٌّ إلا أنذر أمّته إياه، وقال ﷺ إنه سيقول فيه قولًا لم يقله نبيٌّ لقومه: تلك الحقيقة الظاهرة في عينه. وهذا هو مقصود التحذير؛ فإنه سيأتي بالعجائب، والامتحان ليس في عظمة العجائب بل في استعدادك أن ترى النقص الذي سِيقت العجائب لتصرفك عنه. والمدينة ومكة محرَّمتان عليه، على كلِّ نَقْبٍ منهما ملائكة. وتأمَّل ما صنعه ﷺ بخبر تميم: لم يُخفِ أنه من رجلٍ كان نصرانيًّا، ولم يجعله وحيًا، بل وزنه بما عنده وأخبر الناس بمصدره صريحًا.",
    plain: {
      lead: "The short version: the Prophet ﷺ called everyone to the mosque to tell them that a man who had just become Muslim came back from a sea voyage with a story that matched — detail for detail — what he had already been telling them about the Dajjal.",
      leadAr: "باختصار: جمع النبيُّ ﷺ الناس في المسجد ليخبرهم أنّ رجلًا أسلم حديثًا رجع من رحلةٍ في البحر بخبرٍ يطابق ما كان يحدّثهم به عن الدجّال، تفصيلًا بتفصيل.",
      groups: [
        { head: "What happens, step by step",
          headAr: "ما جرى، خطوةً خطوة",
          points: [
            { en: "Thirty men are blown off course at sea for a month and land on an island at sunset.",
              ar: "ثلاثون رجلًا لعبت بهم الريح في البحر شهرًا، فنزلوا جزيرةً عند مغيب الشمس." },
            { en: "A beast covered in thick hair meets them — they cannot tell its front from its back. It calls itself <strong>al-Jassasah</strong>, and sends them to a man waiting in a monastery.",
              ar: "لقيتهم دابّةٌ كثيرة الشعر لا يُدرى قُبُلها من دُبُرها، قالت: أنا <strong>الجسّاسة</strong>، ودلّتهم على رجلٍ في الدير ينتظر خبرهم." },
            { en: "They find a huge man in chains — hands bound to his neck, irons from his knees to his ankles.",
              ar: "فوجدوا رجلًا عظيم الخِلقة موثَقًا، يداه إلى عنقه، وما بين ركبتيه إلى كعبيه بالحديد." },
            { en: "He asks about three places: the palms of Baysan, the lake of Tiberias, and the spring of Zughar — and says each will soon fail.",
              ar: "فسألهم عن ثلاثة مواضع: نخل بَيْسان، وبحيرة الطبريّة، وعين زُغَر — وأخبر أنّ كلًّا منها يوشك أن ينقطع." },
            { en: "He asks whether the unlettered Prophet has appeared, and how the Arabs answered him.",
              ar: "وسألهم عن النبيّ الأمّيّ: هل خرج؟ وكيف صنع العرب معه؟" },
            { en: "Then he says it outright: <strong>“I am the Dajjal”</strong> — and that he will be allowed out, and will enter every town on earth except two.",
              ar: "ثمّ صرّح: <strong>«إنّي أنا المسيح الدجّال»</strong>، وأنّه يوشك أن يُؤذن له بالخروج، فيطأ الأرض كلّها إلا بلدتين." },
            { en: "The Prophet ﷺ struck the pulpit and said: <strong>this is Taybah</strong> — this is Madinah. Makkah and Madinah are closed to him; an angel with a drawn sword turns him back at every road in.",
              ar: "فطعن النبيُّ ﷺ بمِخصرته المنبر وقال: <strong>هذه طَيْبة</strong> — يعني المدينة. فمكّة والمدينة محرّمتان عليه، على كلّ نَقْبٍ منهما ملائكةٌ تحرسها." }
          ] },
        { head: "Why this story was told at all",
          headAr: "لماذا حُدِّث بهذا الخبر أصلًا",
          points: [
            { en: "It is a <strong>confirmation</strong>, not new information — he ﷺ said plainly that it pleased him because it agreed with what he had already taught them.",
              ar: "هو <strong>تصديقٌ</strong> لا خبرٌ جديد — قال ﷺ صراحةً إنّه أعجبه لأنّه وافق ما كان يحدّثهم به." },
            { en: "He named his source: a man who had been a Christian. He did not present it as revelation, and he did not hide where it came from.",
              ar: "وسمّى مصدره: رجلٌ كان نصرانيًّا. فلم يجعله وحيًا، ولم يكتم من أين جاء." }
          ] }
      ]
    },
    ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour (Kitab al-Fitan wa Ashrat as-Sa'ah) — narrated by Fatimah bint Qays; the description of his eye is in Sahih al-Bukhari, Book of Afflictions, Hadith 7131, and the angels guarding Madinah in Hadith 1879",
    strength: "Sahih — Narrated by Muslim; the description of the Dajjal is agreed upon (al-Bukhari and Muslim)",
    keys: ["dajjal","antichrist","masih","jassasah","tamim","end of time","last hour","fitna","trial","signs","madinah","makkah","one-eyed","kafir","الدجال","المسيح الدجال","الجساسة","تميم الداري","آخر الزمان","الساعة","الفتنة","علامات","المدينة","مكة","أعور","كافر","الملاحم"]
  },
  {
    id: "dajjal-description-nawwas",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "What he looks like, how long he stays, and what he can do",
    titleAr: "صفته ومدَّة مكثه وما يستطيع أن يفعله",
    theme: "The Dajjal described in detail",
    themeAr: "وصف الدجّال بالتفصيل",
    story: "An-Nawwas ibn Sam'an رضي الله عنه said the Prophet ﷺ spoke of the Dajjal one morning, lowering his voice and raising it, until the companions thought he was in the palm grove nearby. When they came in the evening he saw it in their faces and said: \"What is the matter with you?\" They told him. He said: \"There are things I fear for you more than the Dajjal. If he comes out while I am among you, I will contend with him for you. If he comes out when I am gone, each man contends for himself, and Allah is my successor over every Muslim.\"\n\nThen he described him: a young man, with thickly curled hair, and one eye blind — he compared him to a man they knew, Abd al-Uzza ibn Qatan. \"Whoever among you meets him, let him recite over him the opening verses of Surah al-Kahf. He will come out on the road between Syria and Iraq, and will spread ruin right and left. Servants of Allah, hold firm.\"\n\nThey asked how long he would stay. He said: \"Forty days. One day like a year, one day like a month, one day like a week, and the rest of his days like your days.\" They asked whether one day's prayers would be enough for the day that is like a year. He said: \"No — work out its measure.\" They asked how fast he travels. He said: \"Like rain driven by the wind.\"\n\nHe comes to a people and calls them, and they believe him: he commands the sky and it rains, he commands the earth and it grows, and their cattle come back that evening with humps high and udders full. He comes to another people and calls them, and they refuse him — so their wealth is stripped away and drought follows. He passes through a wasteland and says: bring out your treasures, and its treasures follow him like a swarm of bees. He calls a young man in the prime of his strength, strikes him with a sword and cuts him in two, then calls him — and the young man comes back walking, his face shining, laughing.",
    storyAr: "قال النوّاس بن سمعان رضي الله عنه: ذكر رسول الله ﷺ الدجّال ذات غداةٍ، فخفَّض فيه ورفَّع، حتى ظننَّاه في طائفة النخل. فلمّا رُحنا إليه عرف ذلك فينا فقال: «ما شأنكم؟» فأخبرناه. فقال: «غير الدجّال أخوفني عليكم؛ إن يخرج وأنا فيكم فأنا حجيجه دونكم، وإن يخرج ولستُ فيكم فامرؤٌ حجيج نفسه، والله خليفتي على كلِّ مسلم».\n\nثم وصفه: «إنه شابٌّ قططٌ، عينه طافئة» وشبَّهه برجلٍ يعرفونه هو عبد العُزَّى بن قَطَن. «فمن أدركه منكم فليقرأ عليه فواتح سورة الكهف. إنه خارجٌ خَلَّةً بين الشام والعراق، فعاث يمينًا وعاث شمالًا، يا عباد الله فاثبتوا».\n\nقالوا: وما لبثه في الأرض؟ قال: «أربعون يومًا: يومٌ كسنة، ويومٌ كشهر، ويومٌ كجمعة، وسائر أيامه كأيامكم». قالوا: أفتكفينا فيه صلاة يومٍ؟ قال: «لا، اقدُروا له قدره». قالوا: وما إسراعه في الأرض؟ قال: «كالغيث استدبرته الريح».\n\nيأتي القوم فيدعوهم فيؤمنون به ويستجيبون له، فيأمر السماء فتمطر والأرض فتُنبت، فتروح عليهم سارحتهم أطولَ ما كانت ذُرًى وأسبغَه ضروعًا وأمدَّه خواصر. ويأتي القوم فيدعوهم فيردُّون عليه قوله، فينصرف عنهم فيُصبحون مُمحِلين ليس بأيديهم شيءٌ من أموالهم. ويمرُّ بالخَرِبة فيقول لها: أخرجي كنوزك، فتتبعه كنوزها كيعاسيب النحل. ثم يدعو رجلًا ممتلئًا شبابًا فيضربه بالسيف فيقطعه جَزْلَتين رمية الغرض، ثم يدعوه فيُقبل ويتهلَّل وجهه يضحك.",
    arabic: "إِنَّهُ شَابٌّ قَطَطٌ، عَيْنُهُ طَافِئَةٌ — فَمَنْ أَدْرَكَهُ مِنْكُمْ فَلْيَقْرَأْ عَلَيْهِ فَوَاتِحَ سُورَةِ الْكَهْفِ",
    lesson: "Notice what he said before any of the description: \"There are things I fear for you more than the Dajjal.\" The everyday things that quietly ruin a person worried him more than the great trial at the end. And notice what he gave them to hold onto — not a weapon, but verses to recite and one instruction: hold firm. He also told them plainly he could be cut down and raised again, so that nobody meeting him would think the wonder itself is proof.",
    lessonAr: "تأمَّل ما قاله قبل الوصف كلِّه: «غير الدجّال أخوفني عليكم»؛ فالأمور اليومية التي تُهلك المرء في صمتٍ كانت أخوف عنده من الفتنة الكبرى في آخر الزمان. وتأمَّل ما أعطاهم ليتمسَّكوا به: لم يكن سلاحًا بل آياتٍ تُقرأ وأمرًا واحدًا: فاثبتوا. وأخبرهم صراحةً أنه يَقتل ويُحيي، حتى لا يظنَّ من لقيه أنّ العجيبة نفسها دليل.",
    plain: {
      lead: "This is the card to read slowly. The Prophet ﷺ described the Dajjal in a way anybody could check — not vague warnings, but a face, a body, a written word, a timetable, and a list of what he is able to do. Below is that description, set out plainly.",
      leadAr: "هذه البطاقة تُقرأ على مهل. فقد وصف النبيُّ ﷺ الدجّالَ وصفًا يستطيع كلُّ أحدٍ أن يتحقّق منه: خِلقةٌ، وعينٌ، وكلمةٌ مكتوبة، ومدّةٌ معلومة، وقائمةٌ بما يقدر عليه. وهذا الوصف مبسوطًا:",
      groups: [
        { head: "How he will LOOK",
          headAr: "كيف يكون شكلُه",
          points: [
            { en: "<strong>A young man</strong> — not an old one.",
              ar: "<strong>شابٌّ</strong> لا شيخ." },
            { en: "<strong>Thickset and stocky</strong>, broad in the upper body.",
              ar: "<strong>جَعْدٌ قَطَط</strong>، عريض أعلى البدن." },
            { en: "<strong>Very curly hair</strong>.",
              ar: "<strong>شديد جُعودة الشعر</strong>." },
            { en: "<strong>Reddish in complexion</strong>.",
              ar: "<strong>أحمر اللون</strong>." },
            { en: "<strong>Blind in one eye.</strong> His eye is defective — described as raised and floating like a grape, not sunken and not protruding. This is the single clearest mark: <strong>“your Lord is not one-eyed.”</strong>",
              ar: "<strong>أعورُ العين</strong>، عينُه طافيةٌ كأنّها عنبةٌ طافية، ليست بناتئةٍ ولا حَجْراء. وهذه أظهر علامةٍ فيه: <strong>«وإنّ ربَّكم ليس بأعور»</strong>." },
            { en: "<strong>Between his eyes is written ك ف ر — “disbeliever.”</strong> Every believer reads it, whether or not he can read at all.",
              ar: "<strong>ومكتوبٌ بين عينيه: ك ف ر</strong>، يقرؤه كلُّ مؤمنٍ، كاتبًا كان أو غير كاتب." },
            { en: "<strong>He has no children.</strong>",
              ar: "<strong>ولا يُولد له</strong>." }
          ] },
        { head: "What he will be ABLE TO DO",
          headAr: "ما الذي يقدر عليه",
          points: [
            { en: "<strong>He brings something that looks like Paradise and something that looks like Fire</strong> — and they are the opposite of what they appear. His “Paradise” is the Fire and his “Fire” is Paradise.",
              ar: "<strong>يأتي ومعه ما يُشبه الجنّة وما يُشبه النار</strong>، وهما على عكس ما تُبصر: فجنّته نارٌ، وناره جنّة." },
            { en: "<strong>He commands the sky and it rains; he commands the earth and it grows</strong> — for the people who accept him. Their cattle come back fatter and heavier than ever.",
              ar: "<strong>يأمر السماء فتُمطر، والأرض فتُنبت</strong> لمن استجاب له، فتروح عليهم ماشيتُهم أطول ما كانت وأعظمها ضروعًا." },
            { en: "<strong>He withholds it from those who refuse him</strong> — their wealth is struck, the sky holds back, the land gives nothing.",
              ar: "<strong>ويمنعه عمّن ردّه</strong>، فتُصبح أموالهم مُمحِلة، وتُمسك السماء، ولا تُنبت الأرض شيئًا." },
            { en: "<strong>He calls the treasures of the earth and they follow him</strong> like a swarm of bees.",
              ar: "<strong>ويدعو كنوز الأرض فتتبعه</strong> كيعاسيب النحل." },
            { en: "<strong>He kills a man and brings him back to life in front of the crowd</strong> — and even that man tells him to his face that he is the Dajjal.",
              ar: "<strong>ويقتل رجلًا ثمّ يحييه على أعين الناس</strong>، فيقول له ذلك الرجل في وجهه: أنت الدجّال." },
            { en: "<strong>He moves across the earth extremely fast</strong> — like rain driven by the wind.",
              ar: "<strong>ويسير في الأرض سيرًا سريعًا</strong> كالغيث استدبرته الريح." },
            { en: "<strong>He cannot enter Makkah or Madinah.</strong> Angels stand at every road into them.",
              ar: "<strong>ولا يدخل مكّة ولا المدينة</strong>، على كلّ نَقْبٍ منهما ملائكة." }
          ] },
        { head: "How long he stays",
          headAr: "كم يمكث",
          points: [
            { en: "<strong>Forty days in total.</strong>",
              ar: "<strong>أربعون يومًا جملةً</strong>." },
            { en: "The <strong>first day is as long as a year</strong>.",
              ar: "<strong>يومٌ كسنة</strong>." },
            { en: "The <strong>second is as long as a month</strong>.",
              ar: "<strong>ويومٌ كشهر</strong>." },
            { en: "The <strong>third is as long as a week</strong>.",
              ar: "<strong>ويومٌ كجمعة</strong>." },
            { en: "<strong>The rest are ordinary days.</strong> The Companions asked the practical question — in the day that lasts a year, is one day's prayers enough? He ﷺ said no: <strong>measure it out</strong>.",
              ar: "<strong>وسائر أيّامه كأيّامكم</strong>. وسأل الصحابةُ السؤال العمليّ: ذلك اليوم الذي كسنة، أتكفينا فيه صلاةُ يوم؟ قال ﷺ: لا، <strong>اقدروا له قدره</strong>." }
          ] },
        { head: "The point of the whole warning",
          headAr: "مقصود التحذير كلّه",
          points: [
            { en: "Every prophet warned his people about him. But he ﷺ said he would tell them <strong>something no prophet had told his people</strong>: he is one-eyed, and Allah is not.",
              ar: "ما من نبيٍّ إلا أنذر أمّته الدجّال. لكنّه ﷺ قال إنّه سيقول فيه <strong>قولًا لم يقله نبيٌّ لقومه</strong>: إنّه أعور، وإنّ الله ليس بأعور." },
            { en: "So the test was never whether the wonders are impressive. <strong>The test is whether you will still see the defect the wonders are there to distract you from.</strong>",
              ar: "فما كان الامتحان قطُّ في عِظَم العجائب، <strong>وإنّما في أن تبقى ترى النقص الذي سِيقت العجائب لتصرفك عنه</strong>." }
          ] }
      ]
    },
    ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour (Kitab al-Fitan) — narrated by an-Nawwas ibn Sam'an",
    strength: "Sahih — Narrated by Muslim",
    keys: ["dajjal","antichrist","description","forty days","kahf","syria","iraq","miracle","wonder","treasure","young man","الدجال","صفة الدجال","أربعون يومًا","الكهف","الشام","العراق","معجزة","كنوز","النواس بن سمعان","آخر الزمان"]
  },
  {
    id: "dajjal-fire-and-water",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "His fire is cool water, and his water is fire",
    titleAr: "ناره ماءٌ بارد، وماؤه نار",
    theme: "When your own eyes are the trap",
    themeAr: "حين تكون عيناك هي الفخّ",
    story: "Hudhayfah رضي الله عنه reported the Prophet ﷺ saying that the Dajjal will come with fire and water. What people see as cool water is a burning fire, and what they see as fire is cool sweet water. \"So whoever among you lives to see it, let him fall into the one he sees as fire — for it is sweet, cool water.\"",
    storyAr: "روى حذيفة رضي الله عنه عن النبي ﷺ أن الدجّال يخرج ومعه ماءٌ ونار: فالذي يراه الناس ماءً باردًا فهو نارٌ تُحرق، والذي يرونه نارًا فهو ماءٌ عذبٌ بارد. «فمن أدرك منكم فليقع في الذي يرى أنها نار، فإنه عذبٌ بارد».",
    arabic: "فَمَنْ أَدْرَكَ مِنْكُمْ فَلْيَقَعْ فِي الَّذِي يَرَى أَنَّهَا نَارٌ، فَإِنَّهُ عَذْبٌ بَارِدٌ",
    lesson: "The whole trial in one image: what looks safe will burn you, and what looks like ruin is where safety is. He is not asking anyone to reason it out in the moment — by then the eyes are already lying. He is asking them to decide now, in advance, that they will trust what they were told over what they will see.",
    lessonAr: "الفتنة كلّها في صورةٍ واحدة: ما يبدو أمانًا يُحرق، وما يبدو هلاكًا فيه النجاة. وهو لا يطلب منك أن تستنتج ذلك في لحظته، فالعين حينها كاذبة، بل يطلب أن تعزم الآن مقدَّمًا أن تُصدِّق ما أُخبِرتَ به لا ما ستراه.",
    plain: {
      lead: "One instruction, and it is the practical heart of the whole subject: <strong>what you see with your eyes is the thing being used against you.</strong>",
      leadAr: "أمرٌ واحد، وهو لبُّ الباب كلّه من جهة العمل: <strong>إنّ الذي تراه بعينك هو نفسه ما يُخدَع به عليك</strong>.",
      groups: [
        { points: [
            { en: "He arrives with two things: one that looks like <strong>a garden of water</strong>, and one that looks like <strong>burning fire</strong>.",
              ar: "يأتي ومعه شيئان: ما يُرى <strong>جنّةً وماءً</strong>، وما يُرى <strong>نارًا تحرق</strong>." },
            { en: "They are <strong>swapped</strong>. His fire is cool water. His water is fire.",
              ar: "وهما <strong>مقلوبان</strong>: فناره ماءٌ باردٌ عذب، وماؤه نار." },
            { en: "The Prophet's ﷺ instruction to anyone who reaches that day: <strong>go into the one that looks like fire</strong>, because it is water.",
              ar: "ووصيّة النبيّ ﷺ لمن أدرك ذلك: <strong>فليقع في الذي يراها نارًا</strong>، فإنّها ماءٌ عذبٌ بارد." },
            { en: "Which means the safe choice will <strong>look</strong> like the ruinous one, and the ruinous one will look like rescue.",
              ar: "ومعناه أنّ النجاة يومئذٍ <strong>تبدو</strong> هلاكًا، وأنّ الهلاك يبدو نجاةً." }
          ] }
      ]
    },
    ref: "Sahih al-Bukhari, Book of the Virtues of the Prophet ﷺ, Hadith 3450",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["dajjal","fire","water","illusion","deception","trap","appearance","trust","الدجال","نار","ماء","خداع","الظاهر","الفتنة","الثبات"]
  },
  {
    id: "dajjal-protection",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "The protection he gave: ten verses, and a supplication in every prayer",
    titleAr: "الحماية التي دلَّ عليها: عشر آيات ودعاءٌ في كلِّ صلاة",
    theme: "What you are told to do about it",
    themeAr: "ما أُمِرتَ أن تفعله",
    story: "Abu ad-Darda رضي الله عنه reported the Prophet ﷺ saying: \"Whoever memorises ten verses from the beginning of Surah al-Kahf is protected from the Dajjal.\"\n\nAnd Aishah رضي الله عنها said the Prophet ﷺ used to make this supplication inside the prayer itself: \"O Allah, I seek refuge in You from the punishment of the grave, and I seek refuge in You from the trial of the Masih ad-Dajjal, and I seek refuge in You from the trial of life and the trial of death. O Allah, I seek refuge in You from sin and from debt.\"",
    storyAr: "روى أبو الدرداء رضي الله عنه عن النبي ﷺ: «من حفظ عشر آياتٍ من أول سورة الكهف عُصِم من الدجّال».\n\nوقالت عائشة رضي الله عنها: كان رسول الله ﷺ يدعو في الصلاة: «اللهم إني أعوذ بك من عذاب القبر، وأعوذ بك من فتنة المسيح الدجّال، وأعوذ بك من فتنة المحيا وفتنة الممات. اللهم إني أعوذ بك من المأثم والمغرم».",
    arabic: "مَنْ حَفِظَ عَشْرَ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ عُصِمَ مِنَ الدَّجَّالِ",
    lesson: "He did not leave it as a story to be frightened by. He gave two things anyone can do today: ten verses to commit to memory, and a supplication he himself said in every prayer. A trial you cannot outrun is met by preparation made long before it arrives.",
    lessonAr: "لم يتركه خبرًا يُفزَع منه، بل أعطى أمرين يقدر عليهما كلُّ أحدٍ اليوم: عشر آياتٍ تُحفَظ، ودعاءٌ كان هو ﷺ يقوله في كلِّ صلاة. فالفتنة التي لا تُسبَق تُواجَه باستعدادٍ سابقٍ لمجيئها.",
    plain: {
      lead: "Two things to actually do — both small enough that anyone can start today.",
      leadAr: "أمران يُعمَلان بالفعل، وكلاهما يسيرٌ يستطيع كلُّ أحدٍ أن يبدأ به اليوم.",
      groups: [
        { head: "What to do",
          headAr: "ما الذي تفعله",
          points: [
            { en: "<strong>Memorise the first ten verses of Surah Al-Kahf.</strong> Whoever does is protected from him.",
              ar: "<strong>احفظ عشر آياتٍ من أوّل سورة الكهف</strong>، فمن حفظها عُصم منه." },
            { en: "<strong>Seek refuge from his trial in every prayer</strong>, in the sitting before the tasleem — he ﷺ taught it as part of the prayer itself.",
              ar: "<strong>واستعذ من فتنته في كلّ صلاة</strong> في التشهّد قبل السلام، فقد علّمه ﷺ في الصلاة نفسها." },
            { en: "<strong>Keep away from him.</strong> Whoever hears of him should stay far — a man may come to him certain of himself and be taken in by what he is shown.",
              ar: "<strong>وابتعد عنه</strong>؛ فمن سمع به فلينأَ عنه، فإنّ الرجل يأتيه وهو يحسب أنّه مؤمنٌ فيتّبعه ممّا يُرى." }
          ] },
        { head: "Why the protection is Quran and prayer, not a weapon",
          headAr: "لِمَ كانت العصمة قرآنًا وصلاةً لا سلاحًا",
          points: [
            { en: "Because the danger is <strong>to what you believe</strong>, not to your body. He is not defeated by strength; he is survived by knowing the truth well enough not to be moved off it.",
              ar: "لأنّ الخطر على <strong>ما تعتقده</strong> لا على بدنك. فلا يُغلَب بالقوّة، وإنّما يَسلم منه من عرف الحقّ معرفةً لا يُزحزَح عنها." }
          ] }
      ]
    },
    ref: "Sahih Muslim, Book of Prayer of Travellers (the ten verses); Sahih al-Bukhari, Book of Adhan, Hadith 832 (the supplication in prayer)",
    strength: "Sahih — Narrated by Muslim; the supplication is agreed upon (al-Bukhari and Muslim)",
    keys: ["dajjal","protection","kahf","memorise","dua","refuge","prayer","friday","حماية","الكهف","حفظ","دعاء","الاستعاذة","الصلاة","الجمعة","عذاب القبر"]
  },
  {
    id: "dajjal-young-man",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "The young man he kills in front of everyone — and who says it to his face",
    titleAr: "الشابّ الذي يقتله على أعين الناس، ثمّ يقوله في وجهه",
    theme: "The greatest miracle he is given, and the man it fails on",
    themeAr: "أعظم ما يُعطاه من الخوارق، والرجل الذي لا تنفع فيه",
    story: "Abu Sa'id al-Khudri رضي الله عنه said the Prophet ﷺ told them that the Dajjal will come, and it will be forbidden to him to enter the passes of Madinah. He will camp in some of the salt ground outside it.\n\nOn that day a man will go out to him — the best of people, or one of the best — and will say to him: \"I bear witness that you are the Dajjal whom the Messenger of Allah ﷺ told us about.\"\n\nThe Dajjal will say to those with him: \"What do you think — if I kill this man and then bring him back to life, will you have any doubt about the matter?\" They will say: no.\n\nSo he kills him, and then brings him back to life.\n\nAnd when he raises him, the man says: \"By Allah, I have never had more insight into you than I have today.\" In another wording: \"O people, this is the Dajjal whom the Messenger of Allah ﷺ told us about.\"\n\nThe Dajjal then wants to kill him a second time, and is not given power over him.",
    storyAr: "عن أبي سعيدٍ الخدريّ رضي الله عنه أنّ النبيّ ﷺ حدّثهم أنّ الدجّال يأتي وهو محرَّمٌ عليه أن يدخل نِقاب المدينة، فينزل بعض السِّباخ التي بالمدينة.\n\nفيخرج إليه يومئذٍ رجلٌ هو خير الناس أو من خيرهم، فيقول له: أشهد أنّك الدجّال الذي حدّثنا عنه رسول الله ﷺ حديثه.\n\nفيقول الدجّال لمن معه: أرأيتم إن قتلتُ هذا ثمّ أحييتُه، أتشكّون في الأمر؟ فيقولون: لا.\n\nفيقتله ثمّ يحييه.\n\nفيقول الرجل حين يُحييه: والله ما كنتُ فيك قطُّ أشدَّ بصيرةً منّي اليوم. وفي روايةٍ: يا أيّها الناس، هذا الدجّال الذي حدّثنا عنه رسول الله ﷺ.\n\nفيريد الدجّال أن يقتله الثانية فلا يُسلَّط عليه.",
    arabic: "وَاللَّهِ مَا كُنْتُ فِيكَ قَطُّ أَشَدَّ بَصِيرَةً مِنِّي الْيَوْمَ",
    plain: {
      lead: "This is the card that answers the question everybody actually has: <strong>if he can raise the dead, how is anyone supposed to resist him?</strong>",
      leadAr: "هذه البطاقة تجيب عن السؤال الذي يدور في نفس كلِّ أحد: <strong>إذا كان يُحيي الموتى، فكيف يُصمد له؟</strong>",
      groups: [
        { points: [
            { en: "The Dajjal camps outside Madinah — he <strong>cannot get in</strong>.",
              ar: "ينزل الدجّال خارج المدينة، فهو <strong>لا يقدر على دخولها</strong>." },
            { en: "One man walks out to him and says openly: <strong>you are the Dajjal the Messenger of Allah ﷺ warned us about</strong>.",
              ar: "فيخرج إليه رجلٌ واحد فيصارحه: <strong>أنت الدجّال الذي حذّرنا منه رسول الله ﷺ</strong>." },
            { en: "The Dajjal makes it a public test: <strong>if I kill him and raise him, will you doubt?</strong> They say no.",
              ar: "فيجعلها الدجّال امتحانًا على رؤوس الناس: <strong>إن قتلتُه ثمّ أحييتُه أتشكّون؟</strong> فيقولون: لا." },
            { en: "<strong>He kills him. He raises him.</strong> The crowd sees it happen.",
              ar: "<strong>فيقتله ثمّ يحييه</strong>، والناس ينظرون." },
            { en: "And the man's first words are the opposite of what the miracle was meant to produce: <strong>“I have never seen you more clearly than today.”</strong>",
              ar: "فيكون أوّل ما ينطق به الرجل ضدَّ ما أُريد بالخارقة: <strong>«ما كنتُ فيك قطُّ أشدَّ بصيرةً منّي اليوم»</strong>." },
            { en: "He tries to kill him again — and <strong>is not able to</strong>.",
              ar: "ثمّ يريد قتله ثانيةً <strong>فلا يُسلَّط عليه</strong>." },
            { en: "So the answer is: <strong>a wonder only convinces someone who was deciding by wonders.</strong> The man had already settled the matter on evidence, and no display could unsettle it.",
              ar: "فالجواب: <strong>إنّما تغلب الخارقةُ من كان يزن الأمر بالخوارق</strong>. وأمّا هذا فقد استقرّ عنده الأمر بالدليل، فلم تُزحزحه العجائب." }
          ] }
      ]
    },
    lesson: "The Dajjal is given the most frightening thing on the list — killing and restoring a life in public — and it fails on the one man who already knew what he was. That is the whole logic of the warning. He ﷺ did not tell his people that the wonders would be small or fake-looking; he told them what the man's defect is, and that Allah has no such defect. The believer is not asked to out-argue the display. He is asked to have learnt the description beforehand. Notice too where it happens: outside Madinah, because he cannot enter it — the man walks out to him. He is not tricked into it, and he is not hiding from it.",
    lessonAr: "يُعطى الدجّال أفظع ما في الباب — أن يقتل نفسًا ثمّ يردّها على أعين الناس — فتخيب هذه في الرجل الذي كان يعرف قبل ذلك من هو. وهذا هو منطق التحذير كلّه: فما أخبر ﷺ أمّته أنّ خوارقه ستكون صغيرةً أو ظاهرةَ الزيف، وإنّما أخبرهم بنقصه، وأنّ الله منزّهٌ عن ذلك النقص. فليس المطلوب من المؤمن أن يغلب العجيبة بالحجّة، بل أن يكون قد تعلّم الوصف قبل أن يراها. وتأمّل مكان الحادثة: خارج المدينة، لأنّه لا يدخلها؛ فالرجل هو الذي خرج إليه، ما خُدع إليه ولا اختبأ منه.",
    ref: "Sahih al-Bukhari, Book of Afflictions (Kitab al-Fitan), Hadith 7132; also narrated by Muslim in the Book of Tribulations and the Portents of the Last Hour — from Abu Sa'id al-Khudri",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["dajjal","antichrist","young man","kills","raises","resurrect","miracle","madinah","insight","martyr","الدجال","المسيح الدجال","الشاب","يقتله","يحييه","بصيرة","المدينة","خوارق","آخر الزمان"]
  },
  {
    id: "dajjal-forty-days",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "Forty days — and the day that lasts a year",
    titleAr: "أربعون يومًا — واليوم الذي كسنة",
    theme: "How long it lasts, and the question the Companions asked about prayer",
    themeAr: "كم تدوم، والسؤال الذي سأله الصحابة عن الصلاة",
    story: "An-Nawwas ibn Sam'an رضي الله عنه said the Prophet ﷺ spoke about the Dajjal one morning, lowering his voice and raising it, until they thought he was in a cluster of palm trees.\n\nThey asked: how long will he stay on the earth? He ﷺ said: \"Forty days — a day like a year, a day like a month, a day like a week, and the rest of his days like your days.\"\n\nThey said: \"O Messenger of Allah, that day which is like a year — will the prayers of one day be enough for us in it?\"\n\nHe said: \"No. Measure it out.\"\n\nThey said: and how fast is he on the earth? He said: \"Like rain driven by the wind.\"",
    storyAr: "عن النوّاس بن سمعان رضي الله عنه قال: ذكر رسول الله ﷺ الدجّال ذات غداةٍ، فخفّض فيه ورفّع حتى ظنّوه في طائفة النخل.\n\nقالوا: يا رسول الله، وما لبثه في الأرض؟ قال: «أربعون يومًا: يومٌ كسنة، ويومٌ كشهر، ويومٌ كجمعة، وسائر أيّامه كأيّامكم».\n\nقالوا: يا رسول الله، فذلك اليوم الذي كسنة، أتكفينا فيه صلاةُ يوم؟\n\nقال: «لا، اقدروا له قدره».\n\nقالوا: يا رسول الله، وما إسراعه في الأرض؟ قال: «كالغيث استدبرته الريح».",
    arabic: "لَا، اقْدُرُوا لَهُ قَدْرَهُ",
    plain: {
      lead: "Two things worth noticing here, and the second one is easy to miss.",
      leadAr: "أمران في هذا الحديث، والثاني يكاد يُغفَل.",
      groups: [
        { head: "The timetable",
          headAr: "المدّة",
          points: [
            { en: "<strong>Forty days altogether.</strong>",
              ar: "<strong>أربعون يومًا جملةً</strong>." },
            { en: "Day one is <strong>as long as a whole year</strong>.",
              ar: "اليوم الأوّل <strong>كسنةٍ كاملة</strong>." },
            { en: "Day two is <strong>as long as a month</strong>.",
              ar: "والثاني <strong>كشهر</strong>." },
            { en: "Day three is <strong>as long as a week</strong>.",
              ar: "والثالث <strong>كجمعة</strong>." },
            { en: "The remaining thirty-seven are <strong>normal days</strong>.",
              ar: "والباقي — سبعةٌ وثلاثون — <strong>كأيّامكم المعتادة</strong>." },
            { en: "He crosses the earth <strong>like rain driven by the wind</strong>.",
              ar: "ويسير في الأرض <strong>كالغيث استدبرته الريح</strong>." }
          ] },
        { head: "And the question they actually asked",
          headAr: "والسؤال الذي سألوه فعلًا",
          points: [
            { en: "In the middle of the most frightening description any of them had heard, the Companions asked: <strong>how do we pray in a day that long?</strong>",
              ar: "في وسط أفظع وصفٍ سمعوه، كان سؤال الصحابة: <strong>كيف نصلّي في يومٍ بهذا الطول؟</strong>" },
            { en: "He ﷺ did not tell them the prayer is suspended. He said: <strong>work out the timings</strong> — estimate the hours and keep the five prayers to that measure.",
              ar: "فما أخبرهم ﷺ بسقوط الصلاة، بل قال: <strong>اقدروا له قدره</strong> — أي قدّروا الأوقات واحفظوا الصلوات الخمس على ذلك التقدير." },
            { en: "So even in that year-long day, <strong>the ordinary duty continues</strong>. That is the answer to how anyone survives it.",
              ar: "فحتى في ذلك اليوم الذي كسنة، <strong>يبقى الواجب المعتاد قائمًا</strong>. وهذا هو الجواب عن كيفيّة النجاة." }
          ] }
      ]
    },
    lesson: "The Companions heard a description terrifying enough that they thought he ﷺ was pointing at something among the palm trees, and their question was about the prayer timetable. That is the response the hadith preserves — not panic, and not a plan to fight him, but how do we keep the obligation. And the answer keeps the obligation on them: measure the hours out and pray. The trial does not cancel the ordinary duty; it is survived by it.",
    lessonAr: "سمع الصحابة وصفًا مُفزِعًا حتى ظنّوا أنّه ﷺ يشير إلى شيءٍ في النخل، فكان سؤالهم عن أوقات الصلاة. هذا هو الأثر الذي حفظه الحديث: لا جزعًا، ولا تدبيرًا لقتاله، بل كيف نحفظ الفريضة. وجاء الجواب مُبقيًا الفريضة عليهم: قدّروا الأوقات وصلّوا. فالفتنة لا تُسقط الواجب المعتاد، وإنّما يُنجى منها به.",
    ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour (Kitab al-Fitan wa Ashrat as-Sa'ah) — the long hadith of an-Nawwas ibn Sam'an",
    strength: "Sahih — Narrated by Muslim",
    keys: ["dajjal","antichrist","forty days","how long","time","prayer","salah","measure","nawwas","الدجال","أربعون يومًا","اقدروا له قدره","الصلاة","النواس بن سمعان","المدة","آخر الزمان"]
  },
  {
    id: "dajjal-followers-and-land",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "What he offers, what he withholds, and who goes after him",
    titleAr: "ما يبذله وما يمنعه، ومن يتبعه",
    theme: "The trial is prosperity, not only terror",
    themeAr: "الفتنة رخاءٌ لا ترهيبٌ فقط",
    story: "In the hadith of an-Nawwas ibn Sam'an رضي الله عنه, the Prophet ﷺ described what the Dajjal does when he reaches a people.\n\nHe comes to a people and calls them, and they believe in him and respond. So he commands the sky and it rains, and he commands the earth and it brings forth its plants. Their grazing animals return to them in the evening with their humps at their tallest, their udders at their fullest and their flanks stretched.\n\nThen he comes to a people and calls them, and they reject what he says. So he turns away from them, and they are left in drought, with none of their wealth in their hands.\n\nHe passes by the wasteland and says to it: \"Bring out your treasures\" — and its treasures follow him like a swarm of bees.\n\nAnd the Prophet ﷺ said, in the narration of Anas ibn Malik رضي الله عنه, that the Dajjal will be followed by seventy thousand of the Jews of Isfahan, wearing Persian shawls.",
    storyAr: "في حديث النوّاس بن سمعان رضي الله عنه وصف النبيُّ ﷺ ما يصنع الدجّال إذا أتى قومًا.\n\nيأتي القوم فيدعوهم فيؤمنون به ويستجيبون له، فيأمر السماء فتُمطر، ويأمر الأرض فتُنبت، فتروح عليهم سارحتهم أطول ما كانت ذُرًى، وأسبغه ضروعًا، وأمدّه خواصر.\n\nثمّ يأتي القوم فيدعوهم فيردّون عليه قوله، فينصرف عنهم، فيُصبحون مُمحِلين ليس بأيديهم شيءٌ من أموالهم.\n\nويمرّ بالخَرِبة فيقول لها: أخرجي كنوزك، فتتبعه كنوزها كيعاسيب النحل.\n\nوقال ﷺ في حديث أنس بن مالك رضي الله عنه: يتبع الدجّالَ من يهود أصبهان سبعون ألفًا عليهم الطيالسة.",
    arabic: "فَيَأْمُرُ السَّمَاءَ فَتُمْطِرُ، وَيَأْمُرُ الأَرْضَ فَتُنْبِتُ",
    plain: {
      lead: "Most people picture the Dajjal as a tyrant who forces belief. The hadith describes something harder to resist than force: <strong>he pays.</strong>",
      leadAr: "يتصوّر أكثر الناس الدجّال جبّارًا يُكره على الإيمان به. والحديث يصف ما هو أشدّ من القهر: <strong>إنّه يُعطي</strong>.",
      groups: [
        { head: "To those who accept him",
          headAr: "لمن استجاب له",
          points: [
            { en: "He <strong>orders the sky and it rains</strong>.",
              ar: "<strong>يأمر السماء فتُمطر</strong>." },
            { en: "He <strong>orders the earth and the crops come up</strong>.",
              ar: "<strong>ويأمر الأرض فتُنبت</strong>." },
            { en: "Their livestock come home <strong>taller, fuller and heavier than they have ever been</strong>.",
              ar: "وتروح عليهم مواشيهم <strong>أطول ما كانت وأسبغها ضروعًا وأمدّها خواصر</strong>." }
          ] },
        { head: "To those who refuse him",
          headAr: "لمن ردّ عليه",
          points: [
            { en: "He simply <strong>turns away</strong>.",
              ar: "<strong>ينصرف عنهم</strong> لا أكثر." },
            { en: "They are left in <strong>drought, with nothing of their wealth in their hands</strong>.",
              ar: "فيُصبحون <strong>مُمحِلين ليس بأيديهم شيءٌ من أموالهم</strong>." }
          ] },
        { head: "And what he can summon",
          headAr: "وما يستدعيه",
          points: [
            { en: "He tells the ruined ground to <strong>give up its treasure, and it follows him like bees</strong>.",
              ar: "يقول للخَرِبة: <strong>أخرجي كنوزك، فتتبعه كيعاسيب النحل</strong>." },
            { en: "<strong>Seventy thousand</strong> of the Jews of Isfahan, in Persian shawls, go out with him.",
              ar: "ويخرج معه <strong>سبعون ألفًا</strong> من يهود أصبهان عليهم الطيالسة." }
          ] },
        { head: "So what is the test?",
          headAr: "فما الامتحان إذًا؟",
          points: [
            { en: "Not <strong>“will you be brave enough”</strong> — but <strong>“will you refuse the one who is feeding you”</strong>, while the neighbours who accepted him watch their fields grow.",
              ar: "ليس <strong>«أتصبر على البأس»</strong>، بل <strong>«أتردّ على من يطعمك»</strong> وجيرانك الذين استجابوا له ينظرون إلى زروعهم تنبت." }
          ] }
      ]
    },
    lesson: "This is the part of the description that is least talked about and hardest to face. The Dajjal does not only frighten people into following him — he rewards them, visibly and immediately, in the one currency everyone understands: rain, crops, fat livestock, treasure out of the ground. And those who refuse are not martyred dramatically; they are simply left poor while their neighbours prosper. That is the shape of the trial. It is not asking whether you can endure torture. It is asking whether you can watch someone else be paid for the thing you refused, and still refuse it.",
    lessonAr: "هذا أقلُّ ما يُتحدَّث عنه من الوصف، وأشقُّه على النفس. فالدجّال لا يُخوّف الناس ليتبعوه فحسب، بل يعطيهم عطاءً ظاهرًا عاجلًا بالعملة التي يفهمها كلُّ أحد: مطرٌ وزرعٌ وماشيةٌ سِمانٌ وكنوزٌ تخرج من الأرض. وأمّا من ردّه فلا يُقتلون قتلةً ظاهرة، وإنّما يُتركون في جدبٍ وجيرانهم في رخاء. فهذه صورة الفتنة: ليست سؤالًا عن احتمال العذاب، بل عن أن ترى غيرك يُعطى ثمن ما رفضتَه ثمّ تثبت على رفضه.",
    ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour — the hadith of an-Nawwas ibn Sam'an; the seventy thousand of Isfahan is in Sahih Muslim, the same book, from Anas ibn Malik",
    strength: "Sahih — Narrated by Muslim",
    keys: ["dajjal","antichrist","rain","crops","wealth","treasure","followers","isfahan","seventy thousand","drought","trial","الدجال","المطر","الزرع","الكنوز","أصبهان","سبعون ألفًا","الفتنة","الرخاء","آخر الزمان"]
  },
  {
    id: "dajjal-end",
    section: "endtimes",
    group: "dajjal",
    groupTitle: "The Dajjal — the trial at the end of time",
    groupTitleAr: "المسيح الدجّال — فتنة آخر الزمان",
    title: "Who follows him, and who ends him",
    titleAr: "من يتبعه ومن يقتله",
    theme: "How it finishes",
    themeAr: "كيف تنتهي",
    story: "Anas ibn Malik رضي الله عنه reported the Prophet ﷺ saying that seventy thousand Jews of Isfahan, wearing Persian shawls, would follow the Dajjal.\n\nAnd in the hadith of an-Nawwas: while the Dajjal is doing all this, Allah sends Isa ibn Maryam عليه السلام. He descends by the white minaret east of Damascus, in two lightly dyed garments, his hands on the wings of two angels. When he lowers his head, drops fall from it; when he raises it, beads like pearls scatter. No disbeliever who smells the scent of him can live, and his breath reaches as far as his sight. Isa pursues the Dajjal and catches him at the gate of Ludd, and kills him there.",
    storyAr: "روى أنس بن مالك رضي الله عنه عن النبي ﷺ: «يتبع الدجّالَ من يهود أصبهان سبعون ألفًا عليهم الطَّيالسة».\n\nوفي حديث النوّاس: فبينما هو كذلك إذ بعث الله عيسى ابن مريم عليه السلام، فينزل عند المنارة البيضاء شرقيَّ دمشق بين مَهرودتين واضعًا كفَّيه على أجنحة مَلَكين، إذا طأطأ رأسه قَطَر، وإذا رفعه تحدَّر منه جُمانٌ كاللؤلؤ. ولا يجد ريحَ نفَسِه كافرٌ إلا مات، ونفَسُه ينتهي حيث ينتهي طرفه. فيطلبه حتى يُدركه بباب لُدٍّ فيقتله.",
    arabic: "فَيَنْزِلُ عِنْدَ الْمَنَارَةِ الْبَيْضَاءِ شَرْقِيَّ دِمَشْقَ",
    lesson: "For all the terror of the description, the Dajjal is killed by one man at one gate, and the whole thing lasts forty days. He is not an equal to be defeated by an army; he is a trial permitted for a fixed time and then ended. Knowing how it finishes is part of why you were told about it.",
    lessonAr: "مع كلِّ ما في الوصف من هول، فإن الدجّال يقتله رجلٌ واحدٌ عند بابٍ واحد، ولا تزيد مدَّته على أربعين يومًا. فليس نِدًّا يُهزم بجيش، بل فتنةٌ أُذِن لها إلى أجلٍ ثم تنتهي. ومعرفتك كيف تنتهي بعضُ ما أُخبِرتَ به لأجله.",
    plain: {
      lead: "How it finishes — and it does finish.",
      leadAr: "كيف ينتهي الأمر — وهو منتهٍ لا محالة.",
      groups: [
        { points: [
            { en: "<strong>Isa (Jesus) the son of Maryam descends</strong> — at the white minaret to the east of Damascus, his hands on the wings of two angels.",
              ar: "<strong>ينزل عيسى ابن مريم عليه السلام</strong> عند المنارة البيضاء شرقيّ دمشق، واضعًا كفّيه على أجنحة مَلَكين." },
            { en: "<strong>The Dajjal dissolves at the sight of him</strong>, the way salt dissolves in water — and Isa catches and kills him <strong>at the gate of Ludd</strong>.",
              ar: "<strong>فيذوب الدجّال لرؤيته</strong> كما يذوب الملح في الماء، فيدركه عيسى فيقتله <strong>عند باب لُدّ</strong>." },
            { en: "So the trial that no army could beat is ended by <strong>one man sent by Allah</strong>. The believers' job in it was never to defeat him — it was to not be taken in by him.",
              ar: "فالفتنة التي لا تردّها الجيوش يُنهيها <strong>رجلٌ واحدٌ يبعثه الله</strong>. وما كان على المؤمنين أن يغلبوه، وإنّما ألّا ينخدعوا به." }
          ] }
      ]
    },
    ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour — the followers of Isfahan, and the descent of Isa and Ludd in the hadith of an-Nawwas ibn Sam'an",
    strength: "Sahih — Narrated by Muslim",
    keys: ["dajjal","isa","jesus","damascus","ludd","end","killed","isfahan","followers","gog","magog","الدجال","عيسى","دمشق","لد","النهاية","أصبهان","أتباع","يأجوج","مأجوج","المنارة البيضاء"]
  },
  {
    id: "bedouin-mosque",
    section: "mercy",
    title: "The bedouin who urinated in the mosque",
    titleAr: "الأعرابي الذي بال في المسجد",
    theme: "Gentleness in correcting people",
    themeAr: "الرفق في الإنكار",
    story: "A bedouin urinated inside the mosque. The companions leapt up to stop him. The Prophet ﷺ told them: \"Do not interrupt him.\" He let the man finish, then called for a bucket of water and had it poured over the place.",
    storyAr: "بال أعرابيٌّ في المسجد، فقام الناس إليه ليقعوا به، فقال رسول الله ﷺ: «لا تُزرِموه»، فتركه حتى فرغ، ثم دعا بدلوٍ من ماءٍ فصُبَّ على المكان.",
    arabic: "لَا تُزْرِمُوهُ",
    lesson: "He stopped the correction from becoming a humiliation. The mess was cleaned in a moment; a man shamed in public may never come back. When you correct someone, ask first what will actually bring them closer.",
    lessonAr: "منع أن يتحول الإنكار إلى إهانة؛ فالأذى يُغسل في لحظة، أما من يُفضح أمام الناس فقد لا يعود. فإذا أنكرتَ على أحدٍ فانظر أولاً ما الذي يقرّبه لا ما يطرده.",
    ref: "Sahih al-Bukhari, Book of Good Manners, Hadith 6025",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["gentle","gentleness","correct","mistake","anger","patience","mosque","bedouin","رفق","إنكار","خطأ","غضب","صبر","المسجد","الأعرابي"]
  },
  {
    id: "jewish-boy-ill",
    section: "people",
    title: "He visited the Jewish boy who served him",
    titleAr: "عيادته ﷺ للغلام اليهودي الذي كان يخدمه",
    theme: "Kindness beyond your own people",
    themeAr: "الإحسان إلى غير المسلم",
    story: "A Jewish boy used to serve the Prophet ﷺ. The boy fell ill, and the Prophet ﷺ went to visit him at his sickbed and invited him gently to Islam.",
    storyAr: "كان غلامٌ يهوديٌّ يخدم النبيَّ ﷺ، فمرض، فأتاه النبيُّ ﷺ يعوده في مرضه وعرض عليه الإسلام برفق.",
    lesson: "He did not wait for the boy to share his religion before showing him care. Visiting the sick, and simple human kindness, are not owed only to those who agree with you.",
    lessonAr: "لم ينتظر أن يوافقه الغلام في الدين ليُحسن إليه. فعيادة المريض والرفق بالناس ليست حقًّا لمن يوافقك وحده.",
    ref: "Sahih al-Bukhari, Book of Patients, Hadith 5657",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["kindness","non-muslim","jewish","sick","visit","neighbour","service","إحسان","يهودي","مريض","عيادة","الجار","خدمة"]
  },
  {
    id: "standing-funeral",
    section: "people",
    title: "He stood for a funeral, and it was a Jew's",
    titleAr: "قيامه ﷺ لجنازة يهودي",
    theme: "The dignity of every human being",
    themeAr: "كرامة الإنسان",
    story: "A funeral procession passed by, and the Prophet ﷺ stood up, so the companions stood with him. They said: \"Messenger of Allah, it is the funeral of a Jew.\" He answered: \"When you see a funeral procession, stand up.\"",
    storyAr: "مرَّت بهم جنازةٌ فقام لها النبيُّ ﷺ فقاموا معه، فقالوا: يا رسول الله، إنها جنازة يهودي، فقال: «إذا رأيتم الجنازة فقوموا».",
    arabic: "إِذَا رَأَيْتُمُ الْجَنَازَةَ فَقُومُوا",
    lesson: "Death is the one appointment nobody misses, and he taught respect for it without asking whose body it was. A person's worth as a human being does not depend on agreeing with you.",
    lessonAr: "الموت موعدٌ لا يتخلف عنه أحد، وقد علّمنا احترامه دون أن يسأل عن صاحب الجنازة. فكرامة الإنسان لا تتوقف على موافقته لك.",
    ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1311",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["funeral","death","respect","dignity","non-muslim","jewish","stand","جنازة","الموت","احترام","كرامة","يهودي","القيام"]
  },
  {
    id: "sword-forgiven",
    section: "forgiveness",
    title: "The man who stood over him with a drawn sword",
    titleAr: "الرجل الذي اخترط سيفه على النبي ﷺ",
    theme: "Forgiveness when you have the upper hand",
    themeAr: "العفو عند المقدرة",
    story: "On the return from an expedition the Prophet ﷺ slept under a tree with his sword hanging on it. He woke to find a man standing over him holding the drawn sword, who said: \"Who will protect you from me?\" The Prophet ﷺ answered: \"Allah\" — three times. The man lowered the sword. The Prophet ﷺ did not punish him, and sat down.",
    storyAr: "في منصرفه ﷺ من غزوةٍ نام تحت شجرةٍ وعلّق سيفه بها، فاستيقظ ورجلٌ قائمٌ على رأسه والسيف مسلولٌ بيده يقول: من يمنعك مني؟ فقال ﷺ: «الله» ثلاثًا، فأغمد الرجل سيفه، ولم يعاقبه النبيُّ ﷺ وجلس.",
    arabic: "اللَّهُ",
    lesson: "One word, said with certainty, and the danger passed. Then came the harder part: he had the man completely in his power and let him go. Strength is not in taking revenge you are able to take.",
    lessonAr: "كلمةٌ واحدةٌ قيلت بيقينٍ فزال الخطر، ثم كان الأصعب: تمكّن منه فعفا عنه. فليست القوة في أن تنتقم وأنت قادر.",
    ref: "Sahih al-Bukhari, Book of Jihad, Hadith 2910",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["forgive","forgiveness","revenge","enemy","fear","trust","tawakkul","danger","عفو","انتقام","عدو","خوف","توكل","المقدرة"]
  },
  {
    id: "never-said-uff",
    section: "people",
    title: "Ten years of service, and never one harsh word",
    titleAr: "عشر سنين من الخدمة بلا كلمة أذى",
    theme: "How you treat those who work for you",
    themeAr: "معاملة الخادم",
    story: "Anas ibn Malik رضي الله عنه said: \"I served the Prophet ﷺ for ten years, and he never once said to me 'Uff', nor asked me 'Why did you do that?' or 'Why did you not do that?'\"",
    storyAr: "قال أنس بن مالك رضي الله عنه: خدمتُ النبيَّ ﷺ عشر سنين، فما قال لي أُفٍّ قط، ولا: لِمَ صنعتَ؟ ولا: ألَّا صنعتَ؟",
    arabic: "خَدَمْتُ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ عَشْرَ سِنِينَ، فَمَا قَالَ لِي أُفٍّ",
    lesson: "Ten years is long enough for anyone's temper to show. A boy served him through all of it and could not recall a single sharp word. Character is what people who work under you would say about you.",
    lessonAr: "عشر سنين تكفي لينكشف خُلق أيِّ إنسان، خدمه غلامٌ فيها كلَّها فما وجد كلمةً جافيةً واحدة. وإنما يُعرف خُلق المرء بما يقوله عنه من هم تحت يده.",
    ref: "Sahih al-Bukhari, Book of Good Manners, Hadith 6038",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["servant","worker","employee","staff","patience","anger","manners","character","خادم","عامل","موظف","صبر","غضب","أخلاق","معاملة"]
  },
  {
    id: "kissing-grandson",
    section: "mercy",
    title: "\"Whoever shows no mercy will be shown none\"",
    titleAr: "«من لا يَرحم لا يُرحم»",
    theme: "Mercy to children",
    themeAr: "الرحمة بالأطفال",
    story: "The Prophet ﷺ kissed his grandson al-Hasan ibn Ali while al-Aqra' ibn Habis was sitting with him. Al-Aqra' said: \"I have ten children and I have never kissed one of them.\" The Prophet ﷺ looked at him and said: \"Whoever shows no mercy will be shown no mercy.\"",
    storyAr: "قبَّل النبيُّ ﷺ الحسن بن علي وعنده الأقرع بن حابس التميمي جالسًا، فقال الأقرع: إن لي عشرةً من الولد ما قبَّلتُ منهم أحدًا، فنظر إليه رسول الله ﷺ ثم قال: «من لا يَرحم لا يُرحم».",
    arabic: "مَنْ لَا يَرْحَمُ لَا يُرْحَمُ",
    lesson: "A man boasted about withholding affection as though it were strength. The answer was not a lecture but a warning: mercy is not softness you can afford to skip — it is the measure by which you will be treated.",
    lessonAr: "افتخر رجلٌ بمنع الحنان كأنه قوة، فلم يكن الجواب موعظةً طويلةً بل تحذيرًا: الرحمة ليست ليونةً يُستغنى عنها، بل هي الميزان الذي تُعامَل به.",
    ref: "Sahih al-Bukhari, Book of Good Manners, Hadith 5997",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["children","child","mercy","father","kiss","affection","harsh","أطفال","ولد","رحمة","الأب","قسوة","حنان","تقبيل"]
  },
  {
    id: "cave-of-thawr",
    section: "trials",
    title: "In the cave, with the search party overhead",
    titleAr: "في الغار والطلب فوق رؤوسهما",
    theme: "Fear, and what answers it",
    themeAr: "الخوف وما يسكّنه",
    story: "Hiding in the cave during the hijrah, Abu Bakr رضي الله عنه whispered: \"If any one of them were to look down at his feet, he would see us.\" The Prophet ﷺ answered: \"What do you think of two, when Allah is the third of them?\"",
    storyAr: "لمّا كانا في الغار في الهجرة قال أبو بكر رضي الله عنه: لو أنّ أحدهم نظر تحت قدميه لأبصرنا. فقال النبي ﷺ: «ما ظنُّك يا أبا بكر باثنين اللهُ ثالثهما؟».",
    arabic: "مَا ظَنُّكَ يَا أَبَا بَكْرٍ بِاثْنَيْنِ اللَّهُ ثَالِثُهُمَا",
    lesson: "The danger was real and he did not pretend otherwise. He answered the fear by naming who was with them. When you are afraid, the question is not whether the threat is real — it is who you have counted in the room.",
    lessonAr: "كان الخطر حقيقيًّا ولم ينكره، لكنه ردَّ الخوف بذكر من هو معهما. فإذا خفتَ فليس السؤال أحقيقيٌّ الخطر أم لا، بل مَن الذي حسبتَ حسابه معك.",
    ref: "Sahih al-Bukhari, Book of the Companions of the Prophet, Hadith 3653",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["fear","afraid","danger","hiding","trust","tawakkul","alone","hijrah","abu bakr","خوف","خائف","خطر","الغار","الهجرة","توكل","أبو بكر","وحدة"]
  },
  {
    id: "splitting-moon",
    section: "signs",
    title: "The moon split in two",
    titleAr: "انشقاق القمر",
    theme: "A sign given, and refused",
    themeAr: "آية أُعطيت فرُدَّت",
    story: "Ibn Mas'ud رضي الله عنه said the moon split into two parts in the lifetime of the Prophet ﷺ, and he said only: \"Bear witness.\"",
    storyAr: "قال ابن مسعود رضي الله عنه: انشقّ القمر على عهد رسول الله ﷺ شِقَّتين، فقال النبي ﷺ: «اشهدوا».",
    arabic: "اشْهَدُوا",
    lesson: "One word, and no argument after it. Those who wanted to believe believed; those who did not called it magic. A sign convinces nobody who has already decided.",
    lessonAr: "كلمةٌ واحدة ولم يُتبعها جدال. فمن أراد الإيمان آمن، ومن أبى قال سِحر. والآية لا تُقنع من عقد قلبه على الرفض.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Prophet ﷺ, Hadith 3636",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["moon","miracle","sign","proof","doubt","believe","witness","القمر","انشقاق","معجزة","آية","دليل","شك","إيمان"]
  },
  {
    id: "water-from-fingers",
    section: "signs",
    title: "Water flowed from between his fingers",
    titleAr: "نبع الماء من بين أصابعه",
    theme: "Enough, made from not enough",
    themeAr: "البركة في القليل",
    story: "A bowl of water was brought to the Prophet ﷺ at Az-Zawra. He put his hand in it, and the water began to flow out from between his fingers until the whole company made wudu from it. Anas رضي الله عنه was asked how many they were; he said about three hundred.",
    storyAr: "أُتِيَ النبيُّ ﷺ بإناءٍ من ماءٍ وهو بالزَّوراء، فوضع يده فيه، فجعل الماء ينبع من بين أصابعه، فتوضّأ القوم. قيل لأنسٍ رضي الله عنه: كم كنتم؟ قال: ثلاثمائة أو زهاء ثلاثمائة.",
    arabic: "فَجَعَلَ الْمَاءُ يَنْبُعُ مِنْ بَيْنِ أَصَابِعِهِ",
    lesson: "Three hundred men and one bowl. The lesson the companions drew was not to stop working, but to stop measuring what they had before they had done what they could with it.",
    lessonAr: "ثلاثمائة رجلٍ وإناءٌ واحد. والذي فهمه الصحابة ليس ترك العمل، بل ترك تعجُّل الحساب قبل بذل ما في اليد.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Prophet ﷺ, Hadith 3572",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["water","miracle","barakah","blessing","little","enough","provision","ماء","معجزة","بركة","قليل","كفاية","رزق"]
  },
  {
    id: "death-of-ibrahim",
    section: "trials",
    title: "He wept when his son died",
    titleAr: "بكاؤه ﷺ عند موت ابنه إبراهيم",
    theme: "Grief that does not complain",
    themeAr: "حزنٌ بلا اعتراض",
    story: "His infant son Ibrahim was dying. The Prophet ﷺ took him, kissed him, and his eyes filled with tears. Abdur-Rahman ibn Awf said: \"Even you, Messenger of Allah?\" He replied that this is mercy, and then said: \"The eye weeps and the heart grieves, and we say only what pleases our Lord. And we are grieved to part from you, Ibrahim.\"",
    storyAr: "لمّا كان ابنه إبراهيم في النَّزع أخذه النبيُّ ﷺ فقبّله وشمّه، وذرفت عيناه. فقال عبد الرحمن بن عوف: وأنت يا رسول الله؟ فأخبره أنها رحمة، ثم قال: «إن العين تدمع والقلب يحزن، ولا نقول إلا ما يرضى ربنا، وإنا بفراقك يا إبراهيم لمحزونون».",
    arabic: "إِنَّ الْعَيْنَ تَدْمَعُ، وَالْقَلْبَ يَحْزَنُ، وَلَا نَقُولُ إِلَّا مَا يَرْضَى رَبُّنَا",
    lesson: "He drew the line exactly: tears are not weakness and grief is not complaint. What is asked of you is not to feel less, but to say nothing your Lord would dislike while you feel it.",
    lessonAr: "وضع الحدَّ بدقّة: الدمع ليس ضعفًا والحزن ليس اعتراضًا. والمطلوب منك ليس أن تشعر أقلَّ، بل ألا تقول وأنت في حزنك ما يسخط ربك.",
    ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1303",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["grief","death","son","child","cry","tears","loss","bereaved","patience","حزن","موت","ابن","بكاء","دموع","فقد","صبر","عزاء"]
  },
  {
    id: "mat-on-his-side",
    section: "dunya",
    title: "Omar wept at the marks of the mat on his side",
    titleAr: "بكاء عمر لأثر الحصير في جنبه",
    theme: "What this world is worth",
    themeAr: "قدر الدنيا",
    story: "Omar رضي الله عنه entered on the Prophet ﷺ and looked around the room: a few handfuls of barley, a hide hanging, nothing more. He saw the marks the reed mat had pressed into the Prophet's side, and wept. \"Why are you weeping?\" — \"Messenger of Allah, Khosrau and Caesar live as they live, and you are the Messenger of Allah.\" He answered: \"Are you not pleased that they should have this world, and we the Hereafter?\"",
    storyAr: "دخل عمر رضي الله عنه على النبي ﷺ فنظر في البيت فلم يرَ إلا قبضةً من شعيرٍ وأُهُبًا معلَّقة، ورأى أثر الحصير في جنبه ﷺ فبكى. فقال: «ما يبكيك؟» قال: يا رسول الله، إن كسرى وقيصر فيما هما فيه وأنت رسول الله! فقال: «أما ترضى أن تكون لهم الدنيا ولنا الآخرة؟».",
    arabic: "أَمَا تَرْضَى أَنْ تَكُونَ لَهُمُ الدُّنْيَا وَلَنَا الْآخِرَةُ",
    lesson: "The man with the most authority among them slept on a mat that left marks. He was not deprived — he had chosen. Before envying what someone else has, ask what they gave up for it, and what you would be giving up.",
    lessonAr: "أعظمهم قدرًا ينام على حصيرٍ يترك أثره في جنبه، لم يكن محرومًا بل كان مختارًا. فقبل أن تحسد ما عند غيرك، انظر ما الذي دفعه ثمنًا، وما الذي ستدفعه أنت.",
    ref: "Sahih al-Bukhari, Book of Tafsir, Hadith 4913",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["dunya","world","wealth","rich","poor","envy","simple","zuhd","content","الدنيا","المال","الغنى","الفقر","حسد","الزهد","القناعة","الآخرة"]
  },
  {
    id: "guest-in-the-dark",
    section: "dunya",
    title: "They fed the guest in the dark and went hungry",
    titleAr: "أطعموا الضيف في الظلام وباتوا جياعًا",
    theme: "Preferring someone else over yourself",
    themeAr: "الإيثار",
    story: "A hungry man came to the Prophet ﷺ, who found nothing in his own houses to give him and asked who would host him. A man of the Ansar took him home. He had only his children's food, so he told his wife to put the children to sleep, bring the food, and put out the lamp — so the guest would not see that his hosts were not eating. In the morning the Prophet ﷺ told him Allah had marvelled at what they did, and the verse was revealed: \"they give preference over themselves, even though they are in need.\"",
    storyAr: "جاء رجلٌ جائعٌ إلى النبي ﷺ فلم يجد في بيوته ما يُطعمه، فقال: من يُضيف هذا؟ فانطلق به رجلٌ من الأنصار، وليس عنده إلا قوت صبيانه، فقال لامرأته: نوِّمي الصبيان، وقرِّبي الطعام، وأطفئي السراج — لئلا يرى الضيف أنهما لا يأكلان. فلما أصبح أخبره النبي ﷺ أن الله عجب من صنيعهما، ونزلت: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾.",
    arabic: "وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
    lesson: "They put the lamp out so the guest would not feel the weight of what it cost them. Real generosity hides its own price — the moment the receiver feels indebted, something in the gift is spoiled.",
    lessonAr: "أطفآ السراج لئلا يشعر الضيف بثقل ما بذلاه. والكرم الحقّ يخفي ثمنه؛ فإذا أحسّ الآخذ بالمِنّة فسد شيءٌ من العطاء.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Ansar, Hadith 3798",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["generous","generosity","guest","hospitality","hungry","give","sacrifice","poor","كرم","إيثار","ضيف","ضيافة","جوع","عطاء","إنفاق","فقر"]
  },
  {
    id: "woman-who-swept",
    section: "people",
    title: "He asked after the woman who swept the mosque",
    titleAr: "سؤاله ﷺ عن المرأة التي كانت تقُمّ المسجد",
    theme: "Nobody's work is beneath notice",
    themeAr: "لا عمل يُستصغَر",
    story: "A woman used to sweep the mosque. She died, and the Prophet ﷺ was not told. When he asked about her and learned she had died and been buried at night, he went to her grave and prayed over it.",
    storyAr: "كانت امرأةٌ تقُمّ المسجد، فماتت ولم يُعلِموا النبيَّ ﷺ. فلمّا سأل عنها وأُخبر أنها ماتت ودُفنت ليلاً، أتى قبرها فصلّى عليه.",
    lesson: "She swept floors, and the leader of the community noticed she was missing and walked to her grave. Ask yourself whose work in your life you have never once thanked, and whether you would notice if they stopped.",
    lessonAr: "كانت تكنس المسجد، فافتقدها سيّد القوم ومشى إلى قبرها. فاسأل نفسك: من الذي يخدمك ولم تشكره مرّة، وهل كنتَ ستنتبه لو توقّف؟",
    ref: "Sahih al-Bukhari, Book of Salat, Hadith 460",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["work","cleaner","servant","small","humble","notice","thanks","funeral","عمل","خادم","كنس","تواضع","شكر","افتقاد","جنازة"]
  },
  {
    id: "gentleness-with-aisha",
    section: "mercy",
    title: "\"Allah loves gentleness in all things\"",
    titleAr: "«إنّ الله يحبّ الرفق في الأمر كلّه»",
    theme: "Answering an insult",
    themeAr: "الردّ على الإساءة",
    story: "Some Jews greeted the Prophet ﷺ with a twisted greeting — as-samu 'alayk, death be upon you. Aishah رضي الله عنها caught it and answered them with death and a curse. He said: \"Gently, Aishah — Allah loves gentleness in all things.\" She said: Did you not hear what they said? He replied: \"Did you not hear that I answered them — and upon you.\"",
    storyAr: "كان اليهود يقولون للنبي ﷺ: السَّامُ عليك. ففطنت عائشة رضي الله عنها فقالت: عليكم السَّام واللعنة. فقال النبي ﷺ: «مهلاً يا عائشة، إن الله يحبّ الرفق في الأمر كلّه». قالت: يا نبيّ الله، أوَلم تسمع ما يقولون؟ قال: «أوَلم تسمعي أني أردّ ذلك عليهم فأقول: وعليكم».",
    arabic: "مَهْلًا يَا عَائِشَةُ، إِنَّ اللَّهَ يُحِبُّ الرِّفْقَ فِي الْأَمْرِ كُلِّهِ",
    lesson: "He had heard the insult perfectly well and had already answered it — in two words, without raising his voice. Being wronged does not license you to lose your manners; it is precisely where they are tested.",
    lessonAr: "قد سمع الإساءة وردّها بكلمتين دون أن يرفع صوته. فكونك مظلومًا لا يبيح لك أن تفقد أدبك، بل هناك تحديدًا يُمتحن.",
    ref: "Sahih al-Bukhari, Book of Invocations, Hadith 6395",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["insult","rude","gentle","gentleness","anger","reply","patience","argue","إساءة","شتم","رفق","غضب","ردّ","صبر","جدال","أدب"]
  },
  {
    id: "never-struck-anyone",
    section: "mercy",
    title: "He never struck anyone with his hand",
    titleAr: "ما ضرب بيده شيئًا قطّ",
    theme: "Power that is never used on the weak",
    themeAr: "قوّةٌ لا تُستعمل على الضعيف",
    story: "Aishah رضي الله عنها reported that the Messenger of Allah ﷺ never struck anyone with his hand — not a woman, not a servant — except when fighting in the cause of Allah. And he never took revenge for anything done to him personally; only if a sacred limit of Allah was violated did he act, and then for Allah's sake.",
    storyAr: "قالت عائشة رضي الله عنها: ما ضرب رسول الله ﷺ شيئًا قطّ بيده، ولا امرأةً ولا خادمًا، إلا أن يجاهد في سبيل الله. وما نِيل منه شيءٌ قطّ فينتقم من صاحبه، إلا أن يُنتهك شيءٌ من محارم الله فينتقم لله عزّ وجلّ.",
    lesson: "He had every kind of power over the people around him and never once used it on someone who could not answer back. Anger about your own dignity, and anger about what is sacred, are not the same thing — he acted on the second and let the first go.",
    lessonAr: "كانت له كلُّ سلطةٍ على من حوله فما استعملها مرّةً على من لا يستطيع ردًّا. والغضب لنفسك غير الغضب لحرمات الله؛ فأمضى الثاني وترك الأول.",
    ref: "Sahih Muslim, Book of Virtues (Kitab al-Fada'il)",
    strength: "Sahih — Narrated by Muslim",
    keys: ["anger","hit","beat","violence","wife","servant","revenge","power","temper","غضب","ضرب","عنف","الزوجة","الخادم","انتقام","سلطة"]
  },
  {
    id: "trench-food",
    section: "dunya",
    title: "The food of one small meal fed a thousand",
    titleAr: "طعام قليلٌ أشبع ألفًا",
    theme: "Bringing what little you have",
    themeAr: "أن تأتي بما تملك على قلّته",
    story: "During the digging of the trench, Jabir رضي الله عنه saw the hunger on the Prophet ﷺ and went home. He had a small sheep and a measure of barley, and invited him quietly with a few others. The Prophet ﷺ came with all the people — about a thousand — and told Jabir's wife to keep ladling and not lift the pot from the fire. Everyone ate until they were full, and food was still left.",
    storyAr: "لمّا كانوا يحفرون الخندق رأى جابرٌ رضي الله عنه بالنبيّ ﷺ خَمَصًا، فانطلق إلى بيته وعنده بُهيمةٌ وصاعٌ من شعير، فدعاه سرًّا في نفرٍ قليل. فجاء النبي ﷺ بالناس جميعًا وهم ألف، وقال لامرأته: اغرفي ولا تُنزلي القِدر عن النار. فأكلوا حتى شبعوا وبقي منه بقيّة.",
    lesson: "Jabir brought what he had while being certain it was not enough, and was almost embarrassed by how little it was. He was not asked to bring enough — only to bring what he had.",
    lessonAr: "جاء جابرٌ بما عنده وهو موقنٌ أنه لا يكفي، حتى كاد يستحيي من قلّته. ولم يُطلب منه أن يأتي بالكافي، بل أن يأتي بما يملك.",
    ref: "Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4101",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["little","not enough","provision","food","barakah","give","effort","try","قليل","لا يكفي","رزق","طعام","بركة","بذل","محاولة","الخندق"]
  },
  {
    id: "tailors-dish",
    section: "people",
    title: "He ate beside a tailor and picked out the gourd",
    titleAr: "أكله ﷺ عند الخيّاط وتتبُّعه الدُّبّاء",
    theme: "Accepting an ordinary person's invitation",
    themeAr: "إجابة دعوة البسطاء",
    story: "Anas رضي الله عنه, still a boy, was walking with the Prophet ﷺ when they entered the house of his tailor, who set before him a dish of barley bread and broth with gourd in it. Anas saw the Prophet ﷺ following the pieces of gourd around the dish. Anas said: \"I have loved gourd ever since I saw the Messenger of Allah ﷺ do that.\"",
    storyAr: "قال أنسٌ رضي الله عنه وكان غلامًا: كنت أمشي مع رسول الله ﷺ فدخل بيت خيّاطٍ له، فقرّب إليه خبز شعيرٍ ومرقًا فيه دُبّاء، فرأيت النبيَّ ﷺ يتتبّع الدُّبّاء حول القصعة. قال أنس: فلا أزال أحبّ الدُّبّاء بعد ما رأيت رسول الله ﷺ صنع ما صنع.",
    lesson: "He went to a working man's house and ate a simple dish with visible enjoyment. A boy watching learned to love that food for life. People remember how you received what they gave you far longer than what you said.",
    lessonAr: "دخل بيت رجلٍ يعمل بيده وأكل طعامًا بسيطًا وأظهر حبَّه له، فتعلّم غلامٌ يراقبه أن يحبّ ذلك الطعام عمره كلّه. والناس يذكرون كيف قبلتَ عطاءهم أطول ممّا يذكرون كلامك.",
    ref: "Sahih al-Bukhari, Book of Food, Hadith 5435",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["invitation","food","poor","simple","humble","worker","tailor","child","دعوة","طعام","بسيط","تواضع","الخيّاط","العامل","غلام"]
  },
  {
    id: "first-revelation",
    section: "trials",
    title: "The first revelation, and what Khadijah said",
    titleAr: "بدء الوحي وما قالته خديجة",
    theme: "Being believed when you are terrified",
    themeAr: "أن تُصدَّق وأنت مرعوب",
    story: "Alone in the cave of Hira, the angel came and told him: Read. He said: \"I do not know how to read.\" He came home shaking and said: \"Cover me, cover me.\" Khadijah رضي الله عنها covered him, and when the fear left him he told her what had happened and said he feared for himself. She answered: \"Never. By Allah, Allah will never disgrace you. You keep good relations with your kin, you carry the burden of the weak, you give to the destitute, you honour the guest, and you help those struck by calamity.\" Then she took him to her cousin Waraqah, who told him this was the same one who came to Musa.",
    storyAr: "بينما هو وحده في غار حِراء جاءه المَلَك فقال: اقرأ. فقال: «ما أنا بقارئ». فرجع يرجُف فؤاده وقال: «زمِّلوني زمِّلوني». فزمَّلته خديجة رضي الله عنها حتى ذهب عنه الرَّوع، فأخبرها الخبر وقال: «لقد خشيتُ على نفسي». فقالت: كلَّا واللهِ، ما يُخزيك اللهُ أبدًا؛ إنك لتصِل الرَّحم، وتحمل الكَلَّ، وتُكسِب المعدوم، وتقري الضيف، وتُعين على نوائب الحق. ثم انطلقت به إلى ابن عمِّها ورقة، فأخبره أنه النَّاموس الذي نزل على موسى.",
    arabic: "كَلَّا وَاللَّهِ مَا يُخْزِيكَ اللَّهُ أَبَدًا",
    lesson: "He was frightened and doubted himself. She did not argue about the vision — she listed what he had actually done with his life, and let that answer the fear. When someone you love is shaken, evidence of who they have been is worth more than reassurance.",
    lessonAr: "كان خائفًا يشكُّ في نفسه، فلم تُجادله في الرؤيا، بل عدَّدت له ما صنعه في حياته فأجابت الخوف بذلك. فإذا اهتزَّ من تُحبّ، فذِكر ما كان عليه أنفع من مجرَّد التطمين.",
    ref: "Sahih al-Bukhari, Book of Revelation, Hadith 3",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["revelation","hira","khadijah","fear","doubt","support","wife","comfort","الوحي","حراء","خديجة","خوف","شك","تطمين","الزوجة","المؤازرة"]
  },
  {
    id: "feet-swollen",
    section: "worship",
    title: "He prayed until his feet swelled",
    titleAr: "قيامه ﷺ حتى تورَّمت قدماه",
    theme: "Worship as gratitude, not as payment",
    themeAr: "العبادة شكرًا لا مقابلًا",
    story: "The Prophet ﷺ used to stand in prayer at night until his feet became swollen. He was asked: has Allah not forgiven you what came before and what came after? He answered: \"Should I not then be a grateful servant?\"",
    storyAr: "كان النبيُّ ﷺ يقوم من الليل حتى تتورَّم قدماه، فقيل له: أليس قد غفر الله لك ما تقدَّم من ذنبك وما تأخَّر؟ فقال: «أفلا أكون عبدًا شكورًا».",
    arabic: "أَفَلَا أَكُونُ عَبْدًا شَكُورًا",
    lesson: "He had nothing left to earn and stood anyway. If worship is only a payment against sins, it stops the moment you feel safe. He worshipped out of gratitude, and gratitude has no ceiling.",
    lessonAr: "لم يبقَ له ما يُحصِّله ومع ذلك قام. فالعبادة إن كانت مجرَّد سدادٍ للذنوب توقَّفت حين تشعر بالأمان، أما هو فعبَد شكرًا، والشكر لا سقف له.",
    ref: "Sahih al-Bukhari, Book of Tafsir, Hadith 4836",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["worship","prayer","night","tahajjud","gratitude","thankful","lazy","effort","عبادة","صلاة","قيام الليل","الشكر","الكسل","الاجتهاد"]
  },
  {
    id: "thumamah",
    section: "forgiveness",
    title: "\"Release Thumamah\"",
    titleAr: "«أطلقوا ثُمامة»",
    theme: "Winning someone by letting them go",
    themeAr: "أن تكسب الرجل بإطلاقه",
    story: "Horsemen brought back a captured chief of Bani Hanifah, Thumamah ibn Uthal, and tied him to one of the pillars of the mosque. The Prophet ﷺ came out and said: \"Release Thumamah.\" He went to a grove near the mosque, washed himself, came back into the mosque and said: I bear witness that there is no god but Allah, and that Muhammad is the Messenger of Allah.",
    storyAr: "أُسِر ثُمامة بن أُثال سيِّد بني حنيفة، فرُبِط بساريةٍ من سواري المسجد. فخرج إليه النبي ﷺ فقال: «أطلقوا ثُمامة». فانطلق إلى نخلٍ قريبٍ من المسجد فاغتسل، ثم دخل المسجد فقال: أشهد أن لا إله إلا الله وأن محمدًا رسول الله.",
    arabic: "أَطْلِقُوا ثُمَامَةَ",
    lesson: "He was tied in the mosque and could see for himself how these people prayed and how they treated a man in their power. Then he was let go — and chose to come back. Nobody is argued into a change of heart; they are shown one.",
    lessonAr: "رُبِط في المسجد فرأى بعينه كيف يصلُّون وكيف يعاملون رجلًا وقع في أيديهم، ثم أُطلق فعاد باختياره. فما أحدٌ يُجادَل حتى يتغيَّر قلبه، وإنما يُرى ما يغيِّره.",
    ref: "Sahih al-Bukhari, Book of Salat, Hadith 462",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["enemy","captive","prisoner","forgive","release","dawah","invite","change","عدو","أسير","عفو","إطلاق","الدعوة","التغيير","هداية"]
  },
  {
    id: "poisoned-sheep",
    section: "forgiveness",
    title: "The poisoned sheep at Khaybar",
    titleAr: "الشاة المسمومة بخيبر",
    theme: "Facing someone who tried to kill you",
    themeAr: "مواجهة من أراد قتلك",
    story: "After Khaybar a roasted sheep was given to the Prophet ﷺ as a gift, with poison in it. He gathered them and asked: \"Will you be truthful with me if I ask you something?\" They said yes. He asked: \"Did you put poison in this sheep?\" They said yes. He asked: \"What made you do that?\" They answered: \"We thought if you were a liar we would be rid of you, and if you were a prophet it would not harm you.\"",
    storyAr: "لمّا فُتحت خيبر أُهديت للنبي ﷺ شاةٌ مشويّةٌ فيها سُمّ. فجمعهم وقال: «هل أنتم صادِقيَّ عن شيءٍ إن سألتكم عنه؟» قالوا: نعم يا أبا القاسم. قال: «هل جعلتم في هذه الشاة سُمًّا؟» قالوا: نعم. قال: «ما حملكم على ذلك؟» قالوا: أردنا إن كنتَ كاذبًا نستريح منك، وإن كنتَ نبيًّا لم يضرّك.",
    arabic: "مَا حَمَلَكُمْ عَلَى ذَلِكَ",
    lesson: "They admitted it to his face. His question was not a threat but a question — what made you do that. Even with people who had just tried to kill him, he asked before he judged.",
    lessonAr: "أقرُّوا في وجهه، ولم يكن سؤاله تهديدًا بل سؤالًا حقيقيًّا: ما الذي حملكم؟ فحتى مع من حاولوا قتله سأل قبل أن يحكم.",
    ref: "Sahih al-Bukhari, Book of Jizyah, Hadith 3169",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["betrayal","enemy","poison","harm","forgive","question","judge","خيانة","عدو","سُمّ","أذى","عفو","سؤال","حكم"]
  },
  {
    id: "bilal-footsteps",
    section: "worship",
    title: "He heard Bilal's footsteps ahead of him in Paradise",
    titleAr: "سماعه ﷺ دفَّ نعلي بلال في الجنة",
    theme: "The small thing you never stop doing",
    themeAr: "العمل القليل الدائم",
    story: "At Fajr the Prophet ﷺ said to Bilal رضي الله عنه: \"Tell me the deed you did with most hope after entering Islam, for I heard the sound of your sandals ahead of me in Paradise.\" Bilal said he knew of nothing except that whenever he made wudu, by day or night, he prayed with that wudu whatever was written for him to pray.",
    storyAr: "قال النبي ﷺ لبلالٍ رضي الله عنه عند الفجر: «حدِّثني بأرجى عملٍ عملته في الإسلام، فإني سمعتُ دفَّ نعليك بين يديَّ في الجنة». فقال بلال: ما عملتُ عملًا أرجى عندي من أني لم أتطهَّر طُهورًا في ساعةٍ من ليلٍ أو نهارٍ إلا صلَّيتُ بذلك الطُّهور ما كُتب لي أن أصلِّي.",
    arabic: "سَمِعْتُ دَفَّ نَعْلَيْكَ بَيْنَ يَدَيَّ فِي الْجَنَّةِ",
    lesson: "Bilal could not think of anything impressive. It was two rak'ahs after wudu, done every single time for years. What gets you there may not be the large thing you did once, but the small thing you never dropped.",
    lessonAr: "لم يجد بلالٌ عملًا عظيمًا يذكره، إنما ركعتان بعد الوضوء داوم عليهما سنين. فلعلَّ الذي يبلغ بك ليس العمل الكبير مرَّةً، بل الصغير الذي لم تتركه قط.",
    ref: "Sahih al-Bukhari, Book of Tahajjud, Hadith 1149",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["small deeds","consistent","habit","wudu","prayer","paradise","bilal","little","العمل القليل","المداومة","الوضوء","صلاة","الجنة","بلال","الاستمرار"]
  },
  {
    id: "man-who-was-ruined",
    section: "worship",
    title: "The man who came saying \"I am ruined\"",
    titleAr: "الرجل الذي جاء يقول: هلكتُ",
    theme: "Coming to be judged, and being fed",
    themeAr: "جاء ليُحاسَب فخرج مُعانًا",
    story: "A man came to the Prophet ﷺ and said: \"I am ruined.\" He had broken his fast in Ramadan with his wife. Could he free a slave? No. Fast two months? No. Feed sixty poor people? No. The Prophet ﷺ fell silent, and then a basket of dates was brought and he told the man to give it away as charity. The man said: \"To someone poorer than us? By Allah, there is no household between the two lava plains of Madinah poorer than mine.\" The Prophet ﷺ laughed until his back teeth showed, and said: \"Feed it to your family.\"",
    storyAr: "جاء رجلٌ إلى النبي ﷺ فقال: هلكتُ! وكان قد واقع أهله في نهار رمضان. فقال: «هل تجد رقبةً تعتقها؟» قال: لا. «فهل تستطيع صيام شهرين متتابعين؟» قال: لا. «فهل تجد إطعام ستِّين مسكينًا؟» قال: لا. فسكت النبيُّ ﷺ، فأُتي بعَرَقٍ فيه تمرٌ فقال: «تصدَّق بهذا». فقال: أعلى أفقر منَّا؟! فوالله ما بين لابتيها أهلُ بيتٍ أفقر من أهل بيتي. فضحك النبيُّ ﷺ حتى بدت أنيابه ثم قال: «أطعِمه أهلك».",
    arabic: "أَطْعِمْهُ أَهْلَكَ",
    lesson: "He arrived expecting punishment and left with food for his children. The Prophet ﷺ did not excuse the sin — he asked for the expiation first. But when the man genuinely could not, the answer was not humiliation; it was laughter and a basket of dates.",
    lessonAr: "جاء ينتظر العقوبة فخرج ومعه طعام عياله. لم يُهوِّن النبيُّ ﷺ من الذنب، بل سأله عن الكفَّارة أوّلًا، فلمّا عجز حقًّا لم يكن الجواب إذلالًا، بل ضحكًا وعَرَقًا من تمر.",
    ref: "Sahih al-Bukhari, Book of Fasting, Hadith 1936",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["sin","guilt","ashamed","repent","mistake","ramadan","poor","mercy","forgive","ذنب","معصية","خجل","توبة","رمضان","فقر","رحمة","كفارة"]
  },
  {
    id: "three-in-the-cave",
    section: "trials",
    title: "Three men trapped by a rock, and the deeds that moved it",
    titleAr: "ثلاثةٌ أطبقت عليهم صخرة، والأعمال التي فرّجت عنهم",
    theme: "What a private deed is worth when nothing else is left",
    themeAr: "قيمة العمل الخفيّ حين لا يبقى غيره",
    story: "Three men from those before you set out and took shelter in a cave for the night, and a rock fell from the mountain and shut them in. They said to one another: nothing will save you from this rock except that you ask Allah by the most sincere deed you have done.\n\nThe first said: I had aged parents, and I never gave milk to anyone before them, not to family and not to property. One day the search for something took me far, and I came back to find them asleep. I milked their evening drink and found them sleeping. I hated to give it to anyone before them, and I hated to wake them — so I stood there with the cup in my hand, waiting for them to wake, until the dawn broke. And the children were crying at my feet from hunger. Then they woke and drank. O Allah, if I did that seeking Your face, relieve us of what we are in. And the rock moved a little.\n\nThe second said: I had a cousin, the most beloved of people to me, and I wanted her. She refused me until a hard year came upon her and she came to me. I gave her a hundred and twenty dinars on the condition that she leave me alone with her. When I was between her legs she said: fear Allah, and do not break the seal except by its right. So I turned away from her, and she was the most beloved of people to me, and I left the gold I had given her. O Allah, if I did that seeking Your face, relieve us. And it moved further.\n\nThe third said: I hired workers and gave every one of them his wage, except one man who left his and went. I invested his wage until it grew into wealth. After a long time he came and said: servant of Allah, give me my wage. I said: everything you see is from your wage — the camels, the cattle, the sheep and the servants. He said: servant of Allah, do not mock me. I said: I am not mocking you. So he took all of it and drove it away and left nothing. O Allah, if I did that seeking Your face, relieve us of what we are in. And the rock opened, and they walked out.",
    storyAr: "انطلق ثلاثة نفرٍ ممن كان قبلكم حتى آواهم المبيت إلى غارٍ فدخلوه، فانحدرت صخرةٌ من الجبل فسدّت عليهم الغار. فقالوا: إنه لا يُنجيكم من هذه الصخرة إلا أن تدعوا الله بصالح أعمالكم.\n\nقال أحدهم: كان لي أبوان شيخان كبيران، وكنت لا أغبق قبلهما أهلًا ولا مالًا. فنأى بي طلب الشجر يومًا فلم أُرِح عليهما حتى ناما، فحلبتُ لهما غَبوقهما فوجدتهما نائمين، فكرهت أن أغبق قبلهما أهلًا أو مالًا، وكرهت أن أوقظهما، فلبثتُ والقدح على يديّ أنتظر استيقاظهما حتى برق الفجر، والصبية يتضاغون عند قدميّ من الجوع. فاستيقظا فشربا غَبوقهما. اللهم إن كنت فعلتُ ذلك ابتغاء وجهك ففرّج عنا ما نحن فيه. فانفرجت شيئًا.\n\nوقال الثاني: كانت لي ابنة عمٍّ هي أحبّ الناس إليّ، فأردتها عن نفسها فامتنعت، حتى ألمّت بها سنةٌ من السنين فجاءتني، فأعطيتها عشرين ومئة دينارٍ على أن تُخلّي بيني وبين نفسها. فلما قعدتُ بين رجليها قالت: اتّقِ الله، ولا تفضّ الخاتم إلا بحقّه. فانصرفتُ عنها وهي أحبّ الناس إليّ، وتركتُ الذهب الذي أعطيتها. اللهم إن كنت فعلتُ ذلك ابتغاء وجهك ففرّج عنا. فانفرجت أكثر.\n\nوقال الثالث: استأجرتُ أُجَراء فأعطيتُ كلّ واحدٍ أجره، غير رجلٍ واحدٍ ترك الذي له وذهب. فثمّرتُ أجره حتى كثرت منه الأموال. فجاءني بعد حينٍ فقال: يا عبد الله، أدِّ إليّ أجري. فقلت: كلّ ما ترى من أجرك، من الإبل والبقر والغنم والرقيق. فقال: يا عبد الله لا تستهزئ بي. فقلت: إني لا أستهزئ بك. فأخذه كلّه فاستاقه فلم يترك منه شيئًا. اللهم إن كنت فعلتُ ذلك ابتغاء وجهك ففرّج عنا ما نحن فيه. فانفرجت الصخرة فخرجوا يمشون.",
    arabic: "اللَّهُمَّ إِنْ كُنْتُ فَعَلْتُ ذَلِكَ ابْتِغَاءَ وَجْهِكَ فَافْرُجْ عَنَّا مَا نَحْنُ فِيهِ",
    lesson: "Not one of the three named a public deed. A cup of milk held all night, a temptation refused when nobody would have known, and a wage returned in full to a man who had given up on it. On the day the rock came down, those were the only things any of them had that were worth mentioning.",
    lessonAr: "لم يذكر أحدٌ من الثلاثة عملًا ظاهرًا. قدحُ لبنٍ حُمل ليلةً كاملة، ومعصيةٌ تُركت حين لا يعلم بها أحد، وأجرٌ رُدّ كاملًا إلى رجلٍ يئس منه. ويوم أطبقت الصخرة لم يكن عند أحدهم ما يستحقّ الذكر سوى ذلك.",
    ref: "Sahih al-Bukhari, Book of Cultivation and Sharecropping, Hadith 2272; also Hadith 2215 and 5974 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["cave", "rock", "three men", "sincerity", "parents", "wage", "temptation", "trapped", "dua",
           "الغار", "الصخرة", "الثلاثة", "الإخلاص", "بر الوالدين", "الأجرة", "الفرج"]
  },
  {
    id: "angel-tested-three",
    section: "dunya",
    title: "The leper, the bald man and the blind man",
    titleAr: "الأبرص والأقرع والأعمى",
    theme: "What wealth does to a person who forgets where it came from",
    themeAr: "ما يصنعه الغنى بمن نسي من أين جاءه",
    story: "Three men of the Children of Israel — a leper, a bald man and a blind man. Allah wished to test them, so He sent an angel to them.\n\nHe came to the leper and asked what he loved most. He said: good colour, good skin, and for what people find repulsive to leave me. He was wiped, and it left him, and he was given good colour and good skin. And he was asked what property he loved most: camels. So he was given a pregnant she-camel, and told: may Allah bless you in it. The bald man asked for good hair, and was given cattle. The blind man asked that Allah return his sight, and was given sheep. And each of the three flocks bred until the first had a valley of camels, the second a valley of cattle, the third a valley of sheep.\n\nThen the angel came back — to the first two in the same form they themselves had once been in, poor and stranded on a journey, asking in the name of the One who gave them their colour and their skin and their wealth for a single animal to get home on. The leper said: the claims on me are many. The angel said: it is as though I know you — were you not a leper whom people found repulsive, poor, and Allah gave you? He said: I inherited this wealth from generations. The angel said: if you are lying, may Allah return you to what you were. And the bald man answered the same, and was answered the same.\n\nThen he came to the blind man in the same form, and asked him by the One who returned his sight for one sheep to get home with. And he said: I was blind and Allah returned my sight, and I was poor and He made me rich — take what you wish. By Allah, I will not make it hard for you today over anything you take for the sake of Allah. The angel said: keep your property. You were only being tested. Allah is pleased with you and angry with your two companions.",
    storyAr: "ثلاثةٌ من بني إسرائيل: أبرصُ وأقرعُ وأعمى. أراد الله أن يبتليهم فبعث إليهم ملَكًا.\n\nفأتى الأبرص فسأله: أيّ شيءٍ أحبّ إليك؟ قال: لونٌ حسن، وجلدٌ حسن، ويذهب عني الذي قد قذرني الناس به. فمسحه فذهب عنه، وأُعطي لونًا حسنًا وجلدًا حسنًا. ثم سُئل: أيّ المال أحبّ إليك؟ قال: الإبل. فأُعطي ناقةً عُشراء وقيل: بارك الله لك فيها. وسأل الأقرع شعرًا حسنًا فأُعطي بقرة، وسأل الأعمى أن يردّ الله إليه بصره فأُعطي شاة. فأُنتج هؤلاء ووُلّد هذا، حتى كان لهذا وادٍ من الإبل، ولهذا وادٍ من البقر، ولهذا وادٍ من الغنم.\n\nثم رجع الملَك إلى الأولَين في صورة ما كانا عليه: مسكينٌ وابن سبيلٍ انقطعت به الحبال، يسأل بالذي أعطاه اللون الحسن والجلد الحسن والمال بعيرًا يتبلّغ به. فقال الأبرص: الحقوق كثيرة. فقال: كأني أعرفك، ألم تكن أبرص يقذرك الناس، فقيرًا فأعطاك الله؟ فقال: إنما ورثتُ هذا المال كابرًا عن كابر. فقال: إن كنت كاذبًا فصيّرك الله إلى ما كنت. وقال الأقرع مثل ذلك فرُدّ عليه مثله.\n\nثم أتى الأعمى في صورته فسأله بالذي ردّ عليه بصره شاةً يتبلّغ بها. فقال: قد كنتُ أعمى فردّ الله بصري، وفقيرًا فقد أغناني، فخُذ ما شئت، فوالله لا أجهدك اليوم بشيءٍ أخذته لله. فقال: أمسِك مالك، فإنما ابتُليتم، فقد رضي الله عنك وسخط على صاحبيك.",
    arabic: "أَمْسِكْ مَالَكَ، فَإِنَّمَا ابْتُلِيتُمْ، فَقَدْ رَضِيَ اللَّهُ عَنْكَ وَسَخِطَ عَلَىٰ صَاحِبَيْكَ",
    lesson: "All three were given the same thing. The difference showed up only when someone came asking, in the state they had each been in themselves. Two of them had forgotten they were ever that person. One had not.",
    lessonAr: "أُعطي الثلاثة الشيء نفسه، ولم يظهر الفرق إلا حين جاءهم سائلٌ على الحال التي كانوا عليها. فنسي اثنان أنهما كانا ذلك الرجل، ولم ينسَ الثالث.",
    ref: "Sahih al-Bukhari, Book of the Stories of the Prophets, Hadith 3464 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["leper", "bald", "blind", "test", "wealth", "gratitude", "ingratitude", "angel", "israel",
           "الأبرص", "الأقرع", "الأعمى", "الابتلاء", "الغنى", "الشكر", "بنو إسرائيل"]
  },
  {
    id: "dog-at-the-well",
    section: "mercy",
    title: "The woman who was forgiven because of a thirsty dog",
    titleAr: "المرأة التي غُفر لها بسبب كلبٍ عطشان",
    theme: "One act of mercy, from someone with nothing else to show",
    themeAr: "رحمةٌ واحدة ممن لا شيء له سواها",
    story: "A woman of ill repute passed a dog at the mouth of a well, panting — thirst had almost killed it. She took off her shoe, tied it to her head-covering, and drew water up for it. And she was forgiven because of that.\n\nThe Prophet ﷺ told this and the companions asked: Messenger of Allah, do we have reward in animals? He said: in every living thing that has a moist liver there is reward.",
    storyAr: "مرّت امرأةٌ مومسة بكلبٍ على رأس رَكِيّ يلهث، قد كاد يقتله العطش، فنزعت خُفّها فأوثقته بخمارها ونزعت له من الماء، فغُفر لها بذلك.\n\nوذكر النبي ﷺ ذلك فقالوا: يا رسول الله، وإنّ لنا في البهائم أجرًا؟ فقال: في كلّ كبدٍ رطبةٍ أجر.",
    arabic: "غُفِرَ لِامْرَأَةٍ مُومِسَةٍ مَرَّتْ بِكَلْبٍ عَلَى رَأْسِ رَكِيٍّ يَلْهَثُ، قَالَ: كَادَ يَقْتُلُهُ الْعَطَشُ، فَنَزَعَتْ خُفَّهَا فَأَوْثَقَتْهُ بِخِمَارِهَا، فَنَزَعَتْ لَهُ مِنَ الْمَاءِ، فَغُفِرَ لَهَا بِذَلِكَ",
    lesson: "Nobody was watching. The one she helped could not thank her, could not tell anyone, and was not even a person. And it was enough.",
    lessonAr: "لم يرها أحد. والذي أعانته لا يشكرها ولا يُخبر عنها، وليس من الناس أصلًا. وكان ذلك كافيًا.",
    ref: "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3321; the reward in every living thing: Hadith 2363 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["dog", "thirst", "mercy", "animals", "forgiven", "well", "kindness",
           "الكلب", "العطش", "الرحمة", "الحيوان", "المغفرة", "البئر"]
  },
  {
    id: "the-cat",
    section: "mercy",
    title: "And the woman who entered the Fire over a cat",
    titleAr: "والمرأة التي دخلت النار في هرّة",
    theme: "The same door, opening the other way",
    themeAr: "البابُ نفسه يُفتح في الجهة الأخرى",
    story: "A woman entered the Fire because of a cat she tied up: she did not feed it, and she did not let it go so that it could eat from the creatures of the earth.\n\nIt is placed beside the story of the dog on purpose. The same small creature, the same moment of choice, and the opposite ending.",
    storyAr: "دخلت امرأةٌ النار في هرّةٍ ربطتها، فلم تُطعمها، ولم تدعها تأكل من خَشاش الأرض.\n\nوهو مذكورٌ إلى جانب حديث الكلب قصدًا: المخلوق الصغير نفسه، ولحظة الاختيار نفسها، والنهاية على العكس.",
    arabic: "دَخَلَتِ امْرَأَةٌ النَّارَ فِي هِرَّةٍ رَبَطَتْهَا، فَلَمْ تُطْعِمْهَا، وَلَمْ تَدَعْهَا تَأْكُلُ مِنْ خَشَاشِ الْأَرْضِ",
    lesson: "She did not kill it. She only kept it and gave it nothing, and would not release it either. The wrong here is doing nothing while something in your care starves.",
    lessonAr: "لم تقتلها، وإنما حبستها ولم تُطعمها ولم تُطلقها. فالذنب هنا في القعود عن الفعل بينما يهلك ما هو تحت يدك.",
    ref: "Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3318 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["cat", "cruelty", "animals", "fire", "neglect",
           "الهرة", "القطة", "النار", "الحيوان", "الحبس"]
  },
  {
    id: "abu-umayr-bird",
    section: "mercy",
    title: "Abu Umayr, and what happened to the little bird",
    titleAr: "أبو عُمير وما فعل النُّغَير",
    theme: "He made time for a child's grief over a pet",
    themeAr: "وسِعَ حزنَ طفلٍ على طائرٍ صغير",
    story: "Anas ibn Malik رضي الله عنه said: the Prophet ﷺ used to mix with us so freely that he would say to a small brother of mine — O Abu Umayr, what happened to the little bird?\n\nThe child had a small bird he used to play with, and it died. So the Prophet ﷺ, in the middle of everything else he was carrying, would ask the boy about it — and he gave the child a nickname while he did it.",
    storyAr: "قال أنس بن مالك رضي الله عنه: إن كان النبي ﷺ ليُخالطنا حتى يقول لأخٍ لي صغير: يا أبا عُمير، ما فعل النُّغَير؟\n\nوكان للصبيّ طائرٌ صغير يلعب به فمات، فكان النبي ﷺ — مع كلّ ما يحمله — يسأل الصبيّ عنه، ويُكنّيه وهو يسأله.",
    arabic: "يَا أَبَا عُمَيْرٍ، مَا فَعَلَ النُّغَيْرُ",
    lesson: "Scholars drew a remarkable amount from this one line: that you may joke, that you may address a child by a title of respect, and that a small person's small sorrow is worth the time of the greatest of people.",
    lessonAr: "استنبط أهل العلم من هذا السطر الواحد شيئًا كثيرًا: جواز المزاح، وتكنية الصغير إكرامًا له، وأن حزن الصغير الصغير يستحقّ وقت أعظم الناس.",
    ref: "Sahih al-Bukhari, Book of Good Manners, Hadith 6129 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["child", "children", "bird", "kindness", "joke", "abu umayr", "play",
           "الطفل", "الأطفال", "النغير", "المزاح", "أبو عمير", "الرفق"]
  },
  {
    id: "with-whom-you-love",
    section: "worship",
    title: "A man asked when the Hour is — and the answer changed everything",
    titleAr: "رجلٌ سأل عن الساعة، فكان الجواب غير ما انتظر",
    theme: "You are with the one you love",
    themeAr: "المرء مع من أحبّ",
    story: "A man came to the Prophet ﷺ and asked: when is the Hour? He said: and what have you prepared for it? The man said: nothing — except that I love Allah and His Messenger. He said: you are with the one you love.\n\nAnas رضي الله عنه said: we were never as happy at anything as we were at the saying of the Prophet ﷺ, you are with the one you love. And he added: so I love the Prophet ﷺ, and Abu Bakr, and Omar — and I hope to be with them because of my love for them, even if I have not done the like of their deeds.",
    storyAr: "جاء رجلٌ إلى النبي ﷺ فقال: متى الساعة؟ قال: وماذا أعددتَ لها؟ قال: لا شيء، إلا أني أحبّ الله ورسوله. قال: أنت مع من أحببت.\n\nقال أنس رضي الله عنه: فما فرحنا بشيءٍ فرحنا بقول النبي ﷺ: أنت مع من أحببت. قال: فأنا أحبّ النبي ﷺ وأبا بكر وعمر، وأرجو أن أكون معهم بحبّي إياهم، وإن لم أعمل بمثل أعمالهم.",
    arabic: "أَنْتَ مَعَ مَنْ أَحْبَبْتَ",
    lesson: "The man asked about the timing and was turned to the preparation. And when he had nothing to offer but love, that was not dismissed — it was answered with the thing the companions said made them happier than anything they ever heard.",
    lessonAr: "سأل عن الوقت فصُرف إلى الاستعداد. ولما لم يكن عنده إلا المحبة لم تُردّ عليه، بل أُجيب بما قال الصحابة إنهم ما فرحوا بشيءٍ فرحهم به.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Companions, Hadith 3688 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["love", "hour", "with whom you love", "hope", "deeds", "anas",
           "المحبة", "الساعة", "المرء مع من أحب", "الرجاء", "العمل"]
  },
  {
    id: "ansar-hunayn",
    section: "people",
    title: "He gave the wealth to others, and told the Ansar what they were getting",
    titleAr: "أعطى المالَ غيرَهم، وبيّن للأنصار ما لهم",
    theme: "When the people who gave everything got nothing",
    themeAr: "حين لم يأخذ الذين بذلوا كلَّ شيء",
    story: "After Hunayn he divided the spoils, giving generously to men whose hearts were being won to Islam, and gave the Ansar nothing. It reached him that some of them had found this hard. So he gathered them, and after praising Allah he said: had you wished, you could have said — you came to us in such and such a state.\n\nThen he said: are you not content that the people go away with the sheep and the camels, and you go back to your homes with the Messenger of Allah ﷺ? Were it not for the migration, I would be a man of the Ansar. If the people took one valley and the Ansar took another, I would take the valley of the Ansar. The Ansar are the inner garment, and the people are the outer. You will meet after me others being preferred over you — so be patient until you meet me at the Basin.",
    storyAr: "لمّا قسّم غنائم حُنين أعطى رجالًا يتألّفهم على الإسلام عطاءً واسعًا، ولم يُعطِ الأنصار شيئًا، فبلغه أن في نفوس بعضهم من ذلك. فجمعهم، فحمد الله وأثنى عليه ثم قال: لو شئتم قلتم: جئتنا كذا وكذا.\n\nثم قال: أترضون أن يذهب الناس بالشاة والبعير، وترجعون برسول الله ﷺ إلى رحالكم؟ لولا الهجرة لكنتُ امرأً من الأنصار، ولو سلك الناس واديًا وشِعبًا لسلكتُ وادي الأنصار وشِعبها. الأنصار شِعار والناس دِثار. إنكم ستلقون بعدي أثَرة فاصبروا حتى تلقوني على الحوض.",
    arabic: "أَتَرْضَوْنَ أَنْ يَذْهَبَ النَّاسُ بِالشَّاةِ وَالْبَعِيرِ، وَتَرْجِعُونَ بِرَسُولِ اللَّهِ ﷺ إِلَىٰ رِحَالِكُمْ",
    lesson: "He did not deny that they had been passed over. He told them plainly that they would be passed over again after him, and told them to be patient — and then named what they had instead, which was him.",
    lessonAr: "لم يُنكر أنهم لم يُعطَوا، بل أخبرهم صراحةً أنهم سيلقون أثَرةً بعده وأمرهم بالصبر — ثم بيّن لهم ما عندهم بدل ذلك، وهو هو ﷺ.",
    ref: "Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4330 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["ansar", "hunayn", "spoils", "unfair", "patience", "overlooked", "jealousy",
           "الأنصار", "حنين", "الغنائم", "الأثرة", "الصبر", "القسمة"]
  },
  {
    id: "tahnik-abdullah",
    section: "mercy",
    title: "He chewed the dates himself, for a newborn",
    titleAr: "مضغ التمر بنفسه لمولودٍ صغير",
    theme: "What he did with his own hands for other people's children",
    themeAr: "ما كان يصنعه بيده لأبناء الناس",
    story: "Anas رضي الله عنه said: Abu Talha had a son who died. He said to his wife Umm Sulaym — keep it from him until I tell him myself. And she did, and that night was as it was, and afterwards she told him. He mentioned it to the Prophet ﷺ, and he said: may Allah bless the two of you.\n\nShe gave birth to a boy. Abu Talha said to me: guard him until you bring him to the Prophet ﷺ. So he brought him, and she sent some dates with him. The Prophet ﷺ took him and said: is there anything with him? They said: yes, dates. So he took them and chewed them, then took some from his own mouth and put it into the child's mouth, and rubbed his palate with it — and named him Abdullah.",
    storyAr: "قال أنس رضي الله عنه: مات ابنٌ لأبي طلحة، فقال لأمّ سُليم: لا تُخبريه حتى أكون أنا أُخبره. فكان ما كان تلك الليلة، ثم أخبرته. فذكر ذلك للنبي ﷺ فقال: اللهم بارك لهما.\n\nفولدت غلامًا. فقال لي أبو طلحة: احفظه حتى تأتي به النبي ﷺ. فأتى به وأرسلت معه بتمرات. فأخذه النبي ﷺ فقال: أمعه شيء؟ قالوا: نعم، تمرات. فأخذها النبي ﷺ فمضغها، ثم أخذ من فيه فجعلها في في الصبيّ وحنّكه به، وسمّاه عبد الله.",
    arabic: "فَأَخَذَهَا النَّبِيُّ ﷺ فَمَضَغَهَا، ثُمَّ أَخَذَ مِنْ فِيهِ فَجَعَلَهَا فِي فِي الصَّبِيِّ، وَحَنَّكَهُ بِهِ، وَسَمَّاهُ عَبْدَ اللَّهِ",
    lesson: "A family had buried a child, and the first thing done for the next one was done by his own hand and out of his own mouth. He did not send instructions. He did it himself.",
    lessonAr: "أسرةٌ دفنت ولدًا، فكان أول ما صُنع للمولود بعده بيده ﷺ ومن فيه. لم يُرسل بأمرٍ يُفعل، بل فعله بنفسه.",
    ref: "Sahih al-Bukhari, Book of Marriage, Hadith 5470 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["newborn", "baby", "tahnik", "dates", "umm sulaym", "abu talha", "grief", "child died",
           "المولود", "التحنيك", "التمر", "أم سليم", "أبو طلحة", "موت الولد"]
  },
  {
    id: "umamah-in-prayer",
    section: "mercy",
    title: "He led the prayer carrying his granddaughter",
    titleAr: "صلّى بالناس وهو حاملٌ حفيدته",
    theme: "He did not put the child down to pray",
    themeAr: "لم يضع الطفلة ليصلّي",
    story: "Abu Qatadah al-Ansari رضي الله عنه narrated that the Messenger of Allah ﷺ used to pray while carrying Umamah, the daughter of Zaynab the daughter of the Messenger of Allah ﷺ — so when he prostrated he put her down, and when he stood he carried her.",
    storyAr: "روى أبو قتادة الأنصاري رضي الله عنه أن رسول الله ﷺ كان يصلّي وهو حاملٌ أُمامة بنت زينب بنت رسول الله ﷺ، فإذا سجد وضعها، وإذا قام حملها.",
    arabic: "كَانَ يُصَلِّي وَهُوَ حَامِلٌ أُمَامَةَ … فَإِذَا سَجَدَ وَضَعَهَا، وَإِذَا قَامَ حَمَلَهَا",
    lesson: "This was not a private prayer at home. He was leading people. The child was not an interruption to be removed — she was carried through it.",
    lessonAr: "ولم تكن صلاة نافلةٍ في بيته، بل كان إمامًا بالناس. ولم تكن الطفلة قاطعًا يُبعَد، بل حُملت في الصلاة نفسها.",
    ref: "Sahih al-Bukhari, Book of Prayer, Hadith 516 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["umamah", "granddaughter", "prayer", "children", "carrying", "imam",
           "أمامة", "الحفيدة", "الصلاة", "الأطفال", "الحمل في الصلاة"]
  },
  {
    id: "thorn-on-the-road",
    section: "worship",
    title: "A branch of thorns, moved off the road",
    titleAr: "غصن شوكٍ أُزيح عن الطريق",
    theme: "The smallest possible deed, and what came of it",
    themeAr: "أصغر عملٍ يمكن، وما ترتّب عليه",
    story: "While a man was walking along a road he found a branch of thorns on it, so he moved it aside. Allah thanked him for it, and forgave him.",
    storyAr: "بينما رجلٌ يمشي بطريقٍ وجد غصن شوكٍ على الطريق فأخّره، فشكر الله له فغفر له.",
    arabic: "بَيْنَمَا رَجُلٌ يَمْشِي بِطَرِيقٍ وَجَدَ غُصْنَ شَوْكٍ عَلَى الطَّرِيقِ فَأَخَّرَهُ، فَشَكَرَ اللَّهُ لَهُ فَغَفَرَ لَهُ",
    lesson: "He was not on his way to do anything religious. He saw something that would hurt a stranger he would never meet, and moved it. The wording is worth stopping at: Allah thanked HIM.",
    lessonAr: "لم يكن خارجًا لعبادة، وإنما رأى ما يؤذي عابر سبيلٍ لا يعرفه فأزاحه. وتأمّل اللفظ: فشكر اللهُ له.",
    ref: "Sahih al-Bukhari, Book of Adhan, Hadith 652 — and Sahih Muslim",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["thorn", "road", "small deed", "charity", "forgiven", "removing harm",
           "الشوك", "الطريق", "إماطة الأذى", "العمل الصغير", "المغفرة"]
  },
  {
    id: "makhzumi-woman",
    section: "justice",
    title: "\"Even if Fatimah bint Muhammad stole, I would cut off her hand\"",
    titleAr: "«وايمُ الله لو أنّ فاطمة بنت محمد سرقت لقطعتُ يدها»",
    theme: "When the guilty person is well-connected",
    themeAr: "حين يكون المذنب ذا جاهٍ ونسب",
    story: "A woman of the clan of Makhzum — one of the noble houses of Quraish — was caught stealing. Quraish were distressed at the thought of the punishment falling on one of their own, and they began looking for someone who could talk the Prophet ﷺ out of it. They said: who would dare speak to him about this? And they answered themselves: nobody but Usamah ibn Zayd, the beloved of Allah's Messenger ﷺ.\n\nSo Usamah spoke to him. And the Prophet ﷺ said: \"Do you intercede concerning one of the punishments prescribed by Allah?\"\n\nThen he stood up and addressed the people, and said: \"What destroyed the nations before you was that when a noble among them stole they left him, and when a weak one among them stole they carried out the punishment on him. By Allah, if Fatimah the daughter of Muhammad were to steal, I would cut off her hand.\"",
    storyAr: "سرقت امرأةٌ من بني مخزوم — وهم من بيوتات قريش الشريفة — فأهمّ قريشًا شأنها أن يقع الحدّ على واحدةٍ منهم، فأخذوا يلتمسون من يكلّم النبيَّ ﷺ في أمرها. فقالوا: ومن يجترئ عليه؟ فقالوا: ما من أحدٍ إلا أسامة بن زيد، حِبُّ رسول الله ﷺ.\n\nفكلّمه أسامة، فقال رسول الله ﷺ: «أتشفع في حدٍّ من حدود الله؟»\n\nثم قام فاختطب في الناس فقال: «إنما أهلك الذين قبلكم أنهم كانوا إذا سرق فيهم الشريف تركوه، وإذا سرق فيهم الضعيف أقاموا عليه الحدّ. وايمُ الله، لو أنّ فاطمة ابنة محمدٍ سرقت لقطعتُ يدها».",
    arabic: "إِنَّمَا أَهْلَكَ الَّذِينَ قَبْلَكُمْ أَنَّهُمْ كَانُوا إِذَا سَرَقَ فِيهِمُ الشَّرِيفُ تَرَكُوهُ، وَإِذَا سَرَقَ فِيهِمُ الضَّعِيفُ أَقَامُوا عَلَيْهِ الْحَدَّ",
    lesson: "He named the exact mechanism by which a society rots, and it is not the theft. It is one law for the connected and another for the weak. Notice also who he refused: Usamah was not a stranger, he was the person most beloved to him, and he was told plainly that closeness to the Prophet ﷺ buys nothing here. And notice the example he chose to make the point unanswerable — not a distant relative, but his own daughter, by name.\n\nThis is worth reading beside the Golden Age of this ummah and beside its decline. A civilisation is not destroyed from outside first. It is destroyed when its own people stop believing the law applies upward as well as downward.",
    lessonAr: "سمّى ﷺ العلّة التي تتعفّن بها المجتمعات على وجه التحديد، وليست هي السرقة، بل أن يكون للشريف حكمٌ وللضعيف حكمٌ آخر. وتأمّل من ردّه: فأسامة ليس غريبًا، بل هو أحبّ الناس إليه، وقيل له صريحًا إنّ القرب من رسول الله ﷺ لا يشتري في هذا الباب شيئًا. وتأمّل المثال الذي ضربه ليقطع كلّ جواب: لم يذكر قريبًا بعيدًا، بل ذكر ابنته باسمها.\n\nويحسن أن يُقرأ هذا مع العصر الذهبي لهذه الأمّة ومع انحدارها. فالحضارة لا تُهدم من خارجٍ أولًا، وإنما تُهدم حين يكفّ أهلها عن الإيمان بأنّ الحكم يجري على من فوق كما يجري على من دون.",
    ref: "Sahih al-Bukhari, Book of the Virtues of the Companions, Hadith 3475; also narrated by Muslim in the Book of Prescribed Punishments",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["justice", "law", "theft", "stealing", "makhzum", "usamah", "fatimah", "corruption", "favouritism", "equal before the law", "wasta",
           "العدل", "الحدود", "السرقة", "المخزومية", "أسامة", "فاطمة", "المحسوبية", "الواسطة", "الشريف والضعيف"]
  },
  {
    id: "do-not-become-angry",
    section: "justice",
    title: "A man asked for one piece of advice, and got the same answer every time",
    titleAr: "رجلٌ طلب وصيّةً واحدة، فكان الجواب واحدًا في كلّ مرّة",
    theme: "The advice he would not add to",
    themeAr: "الوصيّة التي لم يزد عليها",
    story: "A man came to the Prophet ﷺ and said: \"Advise me.\" He said: \"Do not become angry.\"\n\nThe man repeated the request several times — asking again, as though waiting for something longer, or something else. Each time the Prophet ﷺ gave him the same three words: \"Do not become angry.\"",
    storyAr: "جاء رجلٌ إلى النبيّ ﷺ فقال: أوصني. قال: «لا تغضب».\n\nفردّد الرجل السؤال مرارًا — يسأل ثانيةً وثالثة، كأنه ينتظر جوابًا أطول أو جوابًا آخر. فكان ﷺ يعيد عليه في كلّ مرّة الكلمتين أنفسهما: «لا تغضب».",
    arabic: "أَوْصِنِي‏.‏ قَالَ: لاَ تَغْضَبْ‏.‏ فَرَدَّدَ مِرَارًا، قَالَ: لاَ تَغْضَبْ",
    lesson: "The man kept asking because the answer seemed too small for the question. That is the point of the repetition: the Prophet ﷺ did not soften it, lengthen it, or offer an alternative. Most of what a person destroys in their life — a marriage, a friendship, a reputation, sometimes a life — is destroyed inside the few minutes when they were angry and did not have to act. He gave the man the one instruction that would have prevented the most damage, and then refused to let him trade it for a longer one.",
    lessonAr: "إنما أعاد الرجل السؤال لأنّ الجواب بدا له أصغر من المسألة. وهذا هو مقصود التكرار: فلم يليّنه النبيُّ ﷺ ولم يُطِله ولم يعرض عليه بديلًا. وأكثر ما يُهلكه المرء في حياته — من زوجةٍ وصديقٍ وسمعةٍ وربما نفسٍ — إنما يهلك في تلك الدقائق اليسيرة التي غضب فيها ولم يكن مضطرًّا أن يفعل شيئًا. فأعطاه الوصيّة الواحدة التي تدفع أكثر الضرر، ثم أبى أن يبدّلها له بأطول منها.",
    ref: "Sahih al-Bukhari, Book of Manners (al-Adab), Hadith 6116",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["anger", "advice", "temper", "self control", "patience", "restraint",
           "الغضب", "الوصية", "لا تغضب", "ملك النفس", "الحلم", "الصبر"]
  },
  {
    id: "the-strong-one",
    section: "justice",
    title: "\"The strong one is not the wrestler\"",
    titleAr: "«ليس الشديد بالصُّرَعة»",
    theme: "What strength actually is",
    themeAr: "ما القوّة حقيقةً",
    story: "The Prophet ﷺ said: \"The strong one is not the one who overcomes people by his strength. The strong one is the one who controls himself when he is angry.\"",
    storyAr: "قال رسول الله ﷺ: «ليس الشديد بالصُّرَعة، إنما الشديد الذي يملك نفسه عند الغضب».",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    lesson: "He took a word the Arabs used with admiration — the champion wrestler, the man nobody could throw — and moved it. The one everybody calls strong is not strong. The strong one is the man who is being insulted, who has the answer ready in his mouth and the ability to say it, and who holds it. It is a redefinition, and he stated it as a fact rather than as encouragement.",
    lessonAr: "أخذ ﷺ لفظًا كانت العرب تقوله إعجابًا — وهو الصُّرَعة الذي يصرع الرجال ولا يُصرع — فنقله عن موضعه. فالذي يسمّيه الناس قويًّا ليس بقويّ. وإنما القويّ الرجل يُشتم وقد حضره الجواب في فيه وقدر أن يقوله، فيمسكه. وهو تعريفٌ جديد، قرّره تقريرَ الحقائق لا تقريرَ الترغيب.",
    ref: "Sahih al-Bukhari, Book of Manners (al-Adab), Hadith 6114; also narrated by Muslim in the Book of Virtue and Good Manners",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["strength", "strong", "anger", "wrestler", "self control", "restraint", "power",
           "القوة", "الشديد", "الصرعة", "الغضب", "ملك النفس", "الحلم"]
  },
  {
    id: "abu-dharr-slave",
    section: "people",
    title: "Abu Dharr insulted a man's mother, and was still wearing the answer years later",
    titleAr: "عيّر أبو ذرٍّ رجلًا بأمّه، فظلّ يلبس الجواب سنين بعدها",
    theme: "\"They are your brothers\"",
    themeAr: "«إخوانكم خَوَلُكم»",
    story: "Al-Ma'rur said: I met Abu Dharr رضي الله عنه at ar-Rabadhah, and he was wearing a fine garment, and his servant was wearing one exactly like it. I asked him about that.\n\nHe said: I insulted a man by speaking badly of his mother. So the Prophet ﷺ said to me: \"Abu Dharr — did you insult him about his mother? You are a man in whom there is still something of the days of ignorance. They are your brothers; Allah has put them under your hand. So whoever has his brother under his hand, let him feed him from what he eats and clothe him from what he wears. And do not burden them with what overwhelms them — and if you do burden them, then help them.\"",
    storyAr: "قال المعرور: لقيتُ أبا ذرٍّ رضي الله عنه بالرَّبَذة وعليه حُلّة وعلى غلامه حُلّةٌ مثلها، فسألته عن ذلك.\n\nفقال: إني ساببتُ رجلًا فعيّرتُه بأمّه. فقال لي النبيُّ ﷺ: «يا أبا ذرٍّ، أعيّرتَه بأمّه؟ إنك امرؤٌ فيك جاهليّة. إخوانكم خَوَلُكم، جعلهم الله تحت أيديكم، فمن كان أخوه تحت يده فليُطعمه ممّا يأكل، وليُلبسه ممّا يلبس، ولا تُكلّفوهم ما يغلبهم، فإن كلّفتموهم فأعينوهم».",
    arabic: "إِخْوَانُكُمْ خَوَلُكُمْ، جَعَلَهُمُ اللَّهُ تَحْتَ أَيْدِيكُمْ، فَمَنْ كَانَ أَخُوهُ تَحْتَ يَدِهِ فَلْيُطْعِمْهُ مِمَّا يَأْكُلُ، وَلْيُلْبِسْهُ مِمَّا يَلْبَسُ",
    lesson: "The best part of this story is not the instruction. It is the garment. Al-Ma'rur met Abu Dharr years later, in a different town, and the first thing he noticed was that the servant was dressed exactly as well as the master — so he asked. That is what it looks like when a correction is actually accepted: not an apology, but a habit visible to a stranger long afterwards.\n\nAnd note what the Prophet ﷺ called the fault. Not rudeness — jahiliyyah, the thing Islam came to end, still sitting inside one of his own companions. He named it in one sentence and then gave the practical remedy in the next: your food, your clothing, and do not load them beyond what they can carry.",
    lessonAr: "وأحسن ما في هذا الخبر ليس الوصيّة، بل الحُلّة. فقد لقي المعرورُ أبا ذرٍّ بعد سنين في بلدٍ آخر، فكان أول ما لفته أنّ الغلام يلبس مثل ما يلبس سيّده سواءً بسواء، فسأله. وهكذا تكون التوبة من الخطأ حقًّا: ليست اعتذارًا يُقال، بل عادةً يراها الغريب بعد حين.\n\nوتأمّل بمَ سمّى النبيُّ ﷺ الخطأ: لم يسمّه سوء أدب، بل سمّاه جاهليّةً — وهي التي جاء الإسلام ليمحوها — باقيةً في رجلٍ من أصحابه. سمّاها في جملة، ثم أعطى الدواء العمليّ في التي تليها: من طعامك، ومن لباسك، ولا تحمّلهم فوق طاقتهم.",
    ref: "Sahih al-Bukhari, Book of Belief (Kitab al-Iman), Hadith 30; also narrated by Muslim in the Book of Oaths",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["servant", "worker", "employee", "slave", "abu dharr", "insult", "racism", "dignity", "staff", "boss",
           "الخادم", "العامل", "الموظف", "المملوك", "أبو ذر", "السباب", "العنصرية", "الكرامة", "جاهلية", "إخوانكم خولكم"]
  },
  {
    id: "patience-first-stroke",
    section: "trials",
    title: "\"Go away from me\" — she said it to the Prophet ﷺ, and did not know who he was",
    titleAr: "«إليك عنّي» — قالتها للنبيّ ﷺ وهي لا تعرفه",
    theme: "Grief, and the moment patience counts",
    themeAr: "الحزن، واللحظة التي يُحسب فيها الصبر",
    story: "Anas ibn Malik رضي الله عنه said: The Prophet ﷺ passed by a woman who was weeping at a grave. He said to her: \"Fear Allah, and be patient.\"\n\nShe said: \"Go away from me — you have not been struck by the affliction I have been struck by.\" And she did not recognise him.\n\nThen she was told: that was the Prophet ﷺ. So she came to his door, and found no doorkeepers there, and said: \"I did not know you.\" He said: \"Patience is only at the first stroke.\"",
    storyAr: "قال أنس بن مالك رضي الله عنه: مرّ النبيُّ ﷺ بامرأةٍ تبكي عند قبر، فقال: «اتّقي الله واصبري».\n\nفقالت: إليك عنّي، فإنك لم تُصَب بمصيبتي. ولم تعرفه.\n\nفقيل لها: إنه النبيُّ ﷺ. فأتت باب النبيّ ﷺ فلم تجد عنده بوّابين، فقالت: لم أعرفك. فقال: «إنما الصبر عند الصدمة الأولى».",
    arabic: "إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الأُولَى",
    lesson: "Three things are in this and each is worth taking on its own.\n\nShe told the Prophet ﷺ to go away, in her grief, and he did not rebuke her for it. He let her say it.\n\nWhen she came to his house there were no doorkeepers — that detail is in the hadith deliberately. The head of the state had no one at his door to keep a grieving woman out.\n\nAnd then the answer: patience is at the first stroke. Anyone can be calm a month later when the shock has worn off; that is not patience, it is time doing the work. What is counted is the first moment, before you have adjusted to it, when the news has just landed. If you are in that moment now, this hadith was recorded for you.",
    lessonAr: "في هذا الخبر ثلاثة أمور، كلٌّ منها يستحقّ أن يُفرد.\n\nقالت للنبيّ ﷺ في حال حزنها: إليك عنّي، فلم يزجرها على ذلك، بل تركها تقولها.\n\nولمّا أتت بيته لم تجد عنده بوّابين، وهذه اللفظة في الحديث مقصودة: رئيس الدولة ليس على بابه من يردّ امرأةً مفجوعة.\n\nثم الجواب: «إنما الصبر عند الصدمة الأولى». فكلُّ أحدٍ يهدأ بعد شهرٍ حين يخفّ وقع المصيبة، وليس ذلك صبرًا، وإنما هو فعل الزمان. وإنما يُحسب لك الموضع الأول، قبل أن تتعوّد، وقد جاءك الخبر توًّا. فإن كنت في تلك اللحظة الآن، فإنّ هذا الحديث إنما دُوّن لك.",
    ref: "Sahih al-Bukhari, Book of Funerals (al-Jana'iz), Hadith 1283; the wording alone also at Hadith 1302, and narrated by Muslim in the Book of Funerals",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["grief", "patience", "death", "loss", "grave", "mourning", "sabr", "calamity", "bereaved",
           "الحزن", "الصبر", "الموت", "الفقد", "القبر", "المصيبة", "الصدمة الأولى", "العزاء"]
  },
  {
    id: "body-has-a-right",
    section: "worship",
    title: "He told a man who fasted every day and prayed every night to stop",
    titleAr: "أمر رجلًا يصوم النهار ويقوم الليل أن يكفّ",
    theme: "Worship that does not consume the rest of your life",
    themeAr: "عبادةٌ لا تأكل بقيّة حياتك",
    story: "Abdullah ibn Amr ibn al-As رضي الله عنهما said: Allah's Messenger ﷺ said to me: \"Abdullah — have I not been told that you fast all day and stand in prayer all night?\" I said: \"Yes, O Messenger of Allah.\"\n\nHe said: \"Do not do that. Fast and break your fast; stand in prayer and sleep. For your body has a right over you, and your eye has a right over you, and your wife has a right over you.\"",
    storyAr: "قال عبد الله بن عمرو بن العاص رضي الله عنهما: قال لي رسول الله ﷺ: «يا عبد الله، ألم أُخبَر أنك تصوم النهار وتقوم الليل؟» قلت: بلى يا رسول الله.\n\nقال: «فلا تفعل. صُمْ وأفطِر، وقُمْ ونَمْ، فإنّ لجسدك عليك حقًّا، وإنّ لعينك عليك حقًّا، وإنّ لزوجك عليك حقًّا».",
    arabic: "فَإِنَّ لِجَسَدِكَ عَلَيْكَ حَقًّا، وَإِنَّ لِعَيْنِكَ عَلَيْكَ حَقًّا، وَإِنَّ لِزَوْجِكَ عَلَيْكَ حَقًّا",
    lesson: "The man was not doing anything forbidden. He was fasting and praying — and he was told to stop. That is worth sitting with, because it cuts against the instinct that more is always better.\n\nAnd notice the word he used: haqq, a right. Not a concession, not a permission, not \"it is alright to rest sometimes\". Your body has a claim on you that you owe, your eyes have a claim on you, and the person you married has a claim on you. Neglecting them is not extra piety; it is a debt going unpaid. A religion that produced the hospitals, the observatories and the libraries of the Golden Age was never going to be a religion that told a man to ruin his body.",
    lessonAr: "لم يكن الرجل يصنع محرَّمًا، وإنما كان يصوم ويصلّي، ومع ذلك قيل له: لا تفعل. وهذا موضع تأمّل، فإنه يخالف ما تنزع إليه النفوس من أنّ الزيادة خيرٌ أبدًا.\n\nوتأمّل اللفظ الذي استعمله: «حقًّا». لا رخصةً ولا إذنًا ولا أنه «لا بأس أن تستريح أحيانًا»، بل لبدنك عليك حقٌّ تؤدّيه، ولعينك عليك حقٌّ، ولمن تزوّجتَ عليك حقّ. فإضاعتها ليست زيادةً في التقوى، بل هي دَينٌ لم يُقضَ. ودينٌ أنشأ بيمارستانات العصر الذهبي ومراصده وخزائن كتبه ما كان ليأمر رجلًا أن يُتلف بدنه.",
    ref: "Sahih al-Bukhari, Book of Marriage (an-Nikah), Hadith 5199; also narrated by Muslim in the Book of Fasting",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["balance", "moderation", "overdoing", "burnout", "rest", "sleep", "body", "wife", "fasting", "night prayer", "health",
           "التوازن", "الاعتدال", "الغلو", "الراحة", "النوم", "الجسد", "الزوجة", "الصيام", "قيام الليل", "الصحة", "حق البدن"]
  },
  {
    id: "jibril-teaching",
    section: "knowledge",
    title: "A stranger sat down and questioned him in front of everyone — and it was Jibril",
    titleAr: "جلس رجلٌ غريبٌ يسأله على رؤوس الناس — فإذا هو جبريل",
    theme: "The whole religion laid out in one sitting",
    themeAr: "الدين كلّه مبيَّنًا في مجلسٍ واحد",
    story: "Abu Hurairah رضي الله عنه said: One day the Prophet ﷺ was sitting out among the people, and Jibril came to him and asked: \"What is faith?\"\n\nHe said: \"Faith is that you believe in Allah, and His angels, and in meeting Him, and in His messengers, and that you believe in the Resurrection.\"\n\nHe asked: \"What is Islam?\" He said: \"Islam is that you worship Allah and associate nothing with Him, and establish the prayer, and pay the obligatory zakah, and fast Ramadan.\"\n\nHe asked: \"What is ihsan?\" He said: \"That you worship Allah as though you see Him — and if you do not see Him, then He sees you.\"\n\nHe asked: \"When is the Hour?\" He said: \"The one asked about it knows no more than the one asking. But I will tell you of its signs…\" Then the man turned to leave, and the Prophet ﷺ said: \"Bring him back.\" But they saw nothing. So he said: \"That was Jibril — he came to teach the people their religion.\"",
    storyAr: "قال أبو هريرة رضي الله عنه: كان النبيُّ ﷺ بارزًا يومًا للناس، فأتاه جبريل فقال: ما الإيمان؟\n\nقال: «الإيمان أن تؤمن بالله وملائكته وبلقائه ورسله، وتؤمن بالبعث».\n\nقال: ما الإسلام؟ قال: «الإسلام أن تعبد الله ولا تشرك به، وتقيم الصلاة، وتؤدّي الزكاة المفروضة، وتصوم رمضان».\n\nقال: ما الإحسان؟ قال: «أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك».\n\nقال: متى الساعة؟ قال: «ما المسؤول عنها بأعلمَ من السائل، وسأخبرك عن أشراطها…». ثم أدبر الرجل، فقال ﷺ: «ردّوه». فلم يروا شيئًا. فقال: «هذا جبريل جاء يُعلّم الناس دينهم».",
    arabic: "هَذَا جِبْرِيلُ جَاءَ يُعَلِّمُ النَّاسَ دِينَهُمْ",
    lesson: "Look at the method, not only the content. The religion was not left to be pieced together from scattered remarks. It was set out in public, in front of witnesses, as answers to plain questions, and then explicitly labelled at the end so that nobody would be in any doubt about what had just happened: this was Jibril, and he came so that the religion would be taught.\n\nThat is where the whole scholarly tradition of this ummah begins — the isnad, the collections, the checking of one narration against another, and eventually the men who measured the earth and mapped the sky. A religion that opens with \"Read\" and whose foundational lesson is a public question-and-answer session was always going to produce people who ask questions and write down the answers.",
    lessonAr: "انظر إلى الطريقة لا إلى المضمون وحده. فلم يُترك الدين ليُجمع من كلامٍ متفرّق، بل بُيِّن على رؤوس الناس، بحضرة شهود، جوابًا عن أسئلةٍ ظاهرة، ثم صُرّح في آخره بما جرى حتى لا يبقى في الأمر شكّ: هذا جبريل، وإنما جاء ليُعلَّم الدين.\n\nومن هنا ابتدأ صرح العلم في هذه الأمّة كلّه: الإسناد، والدواوين، وعرض الرواية على الرواية، وانتهى الأمر إلى رجالٍ قاسوا الأرض ورسموا السماء. فدينٌ أوّل ما نزل فيه «اقرأ»، ودرسه التأسيسيّ سؤالٌ وجوابٌ بين الناس، كان لا بدّ أن يُخرج قومًا يسألون ويُقيّدون الجواب.",
    ref: "Sahih al-Bukhari, Book of Belief (Kitab al-Iman), Hadith 50; also narrated by Muslim in the Book of Faith, from Umar ibn al-Khattab with additional wording",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["jibril", "gabriel", "iman", "islam", "ihsan", "faith", "religion", "teaching", "knowledge", "hour",
           "جبريل", "الإيمان", "الإسلام", "الإحسان", "الدين", "التعليم", "العلم", "الساعة", "حديث جبريل"]
  }
,

  /* ================= ADDED AUGUST 2026 =================
     Each of these was located in the text of Sahih al-Bukhari and the number
     verified against it before the story was written. */

  {
    id: "debt-demanded-rudely",
    section: "justice",
    title: "The man who demanded his debt rudely — and was given better than he asked",
    titleAr: "الرجل الذي أغلظ في طلب دَينه فأُعطي خيرًا ممّا طلب",
    theme: "The one with a right has something to say",
    themeAr: "إنّ لصاحب الحقّ مقالًا",
    story: "Abu Hurairah رضي الله عنه said a man came demanding a debt from the Messenger of Allah ﷺ, and he was harsh about it — harsh enough that the companions moved towards him.\n\nThe Prophet ﷺ stopped them. He said: \"Leave him — the one who has a right has something to say.\"\n\nThen he told them: \"Buy him a camel and give it to him.\" They looked and came back and said they could not find one except one better than his, older and worth more. He said: \"Buy it and give it to him. The best of you are the best in repaying what they owe.\"",
    storyAr: "عن أبي هريرة رضي الله عنه أنّ رجلًا تقاضى رسول الله ﷺ دَينًا له فأغلظ له، حتى همّ به أصحابه.\n\nفمنعهم النبي ﷺ وقال: «دعوه، فإنّ لصاحب الحقّ مقالًا».\n\nثم قال: «اشتروا له بعيرًا فأعطوه إياه». فطلبوا فلم يجدوا إلا بعيرًا أفضل من سنّه، فقالوا: لا نجد إلا أفضل من سنّه. قال: «اشتروه فأعطوه إياه، فإنّ خيركم أحسنكم قضاءً».",
    arabic: "دَعُوهُ، فَإِنَّ لِصَاحِبِ الْحَقِّ مَقَالًا … فَإِنَّ خَيْرَكُمْ أَحْسَنُكُمْ قَضَاءً",
    lesson: "Two things are settled here at once. First, a man who is owed something is allowed to speak, and being rude while asking for what is yours does not cancel that you are owed it — the Prophet ﷺ defended the creditor's right to complain against his own companions, while the creditor was in the middle of being rude to him. Second, the debt was not simply repaid: it was repaid with something better, and the reason given was that the best of people are the best at settling what they owe. The rudeness was answered with a better camel. Notice also what is NOT here: he did not lecture the man on his manners first, and he did not make the repayment conditional on an apology.",
    lessonAr: "قُضي هنا في أمرين معًا. الأوّل: أنّ لصاحب الحقّ أن يتكلّم، وأنّ إغلاظه في طلب حقّه لا يُسقط أنّ الحقّ له — فقد دفع النبي ﷺ عن حقّ الغريم في الشكوى أمام أصحابه، والغريم يُغلظ عليه في تلك الساعة. والثاني: أنّ الدَّين لم يُقضَ بمثله، بل بخيرٍ منه، والعلّة المذكورة أنّ خير الناس أحسنهم قضاءً. فأُجيبت الغِلظة ببعيرٍ أفضل. وتأمّل ما ليس في الخبر: لم يبدأ بتعليمه الأدب، ولم يعلّق القضاء على اعتذار.",
    ref: "Sahih al-Bukhari, Book of Loans and Settling Debts, Hadith 2390",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["debt","loan","money","owed","creditor","rudeness","anger","justice","repay","الدين","القرض","المال","الغريم","الإغلاظ","العدل","القضاء","حسن القضاء"]
  },
  {
    id: "religion-is-easy",
    section: "worship",
    title: "The religion is ease — and whoever fights it is beaten by it",
    titleAr: "إنّ الدين يسر، ومن شادّ الدين غلبه",
    theme: "A pace you can keep",
    themeAr: "وتيرةٌ تُطيق الدوام عليها",
    story: "Abu Hurairah رضي الله عنه reported the Prophet ﷺ saying: \"The religion is ease, and no one makes the religion hard upon himself except that it overcomes him. So aim straight, come near, and receive good news — and take help from the morning journey, the evening journey, and something of the last part of the night.\"",
    storyAr: "عن أبي هريرة رضي الله عنه عن النبي ﷺ قال: «إنّ الدين يسر، ولن يُشادّ الدين أحدٌ إلا غلبه، فسدِّدوا وقارِبوا وأبشِروا، واستعينوا بالغدوة والرَّوحة وشيءٍ من الدُّلجة».",
    arabic: "إِنَّ الدِّينَ يُسْرٌ، وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ، فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا",
    lesson: "The image at the end is of travel. A traveller who rides at the cool of the morning, the cool of the evening and a stretch of the night arrives; one who rides through the heat of the day exhausts his mount and does not. That is the whole counsel: the distance is covered by keeping a pace, not by a burst.\n\nAnd read the three commands in the middle carefully, because they are in order. SADDIDU — aim exactly right, which is the target. QARIBU — and if you cannot, come close to it, which is the concession. ABSHIRU — and expect good, which is what stops the concession from becoming despair. The person who cannot hit the mark exactly is not told to give up and not told to pretend. He is told to get near and to be glad.\n\nThis is not permission to do little. `Yushadd` is to strain against, to contend with — the warning is against treating the religion as an opponent to be wrestled, because the wrestler always loses that match eventually. The Prophet ﷺ himself stood at night until his feet swelled. What he forbade was the pace nobody can hold.",
    lessonAr: "الصورة في آخره صورة سفر: فالمسافر الذي يسير في الغدوة والرَّوحة وشيءٍ من آخر الليل يبلغ، والذي يسير في هجير النهار يُنضي دابّته ولا يبلغ. وهذا تمام الوصيّة: تُقطع المسافة بالمداومة لا بالوثبة.\n\nوتأمّل الأوامر الثلاثة في وسطه، فهي على ترتيب: «سدِّدوا» أي أصيبوا الحقّ، وهو المطلوب. «وقارِبوا» فإن لم تُصيبوه فادنوا منه، وهي الرخصة. «وأبشِروا» وهو ما يمنع الرخصة أن تصير قنوطًا. فمن لم يبلغ الإصابة لم يُؤمر بالترك ولا بالتكلّف، بل بالمقاربة والبشرى.\n\nوليس هذا إذنًا في التقصير، فالمشادّة المغالبة والمعاندة، والتحذير من أن يُتّخذ الدين خصمًا يُصارَع، لأنّ المصارع مغلوبٌ في آخر الأمر. وقد قام النبي ﷺ حتى تورّمت قدماه، وإنما نهى عن وتيرةٍ لا يقوى عليها أحد.",
    ref: "Sahih al-Bukhari, Book of Faith, Hadith 39",
    strength: "Sahih — Narrated by al-Bukhari",
    keys: ["easy","ease","moderation","burnout","extreme","overburden","consistency","balance","worship","اليسر","الدين يسر","المشادة","الغلو","الاعتدال","المداومة","العبادة","الفتور"]
  },
  {
    id: "understanding-the-religion",
    section: "knowledge",
    title: "Whoever Allah wants good for, He gives understanding of the religion",
    titleAr: "من يُرد الله به خيرًا يُفقّهه في الدين",
    theme: "The sign of good intended for you",
    themeAr: "علامة إرادة الخير بالعبد",
    story: "Mu'awiyah رضي الله عنه said, while giving a sermon: I heard the Prophet ﷺ say: \"Whoever Allah wants good for, He gives him understanding in the religion. I am only one who distributes, and Allah is the One who gives.\"",
    storyAr: "قال معاوية رضي الله عنه وهو يخطب: سمعت النبي ﷺ يقول: «من يُرد الله به خيرًا يُفقّهه في الدين، وإنما أنا قاسمٌ والله يُعطي».",
    arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ، وَإِنَّمَا أَنَا قَاسِمٌ وَاللَّهُ يُعْطِي",
    lesson: "The word is FIQH, not 'ilm. In Arabic they are not the same: 'ilm is to know a thing, and fiqh is to understand it — to see why it is so, and what follows from it. The sign named here is comprehension, not the quantity of what someone has memorised.\n\nAnd the second half is the part usually left off, though it changes the first. \"I am only one who distributes, and Allah is the One who gives.\" The Prophet ﷺ says of himself that he hands out; the giving is not his. So a student who sits with a teacher has come to the distributor — and must ask the Giver.\n\nThere is also a plain consequence in it that is easy to miss: if being given understanding is the sign that good is intended for someone, then the effort to understand is not a career and not a hobby. It is being reached for.",
    lessonAr: "اللفظ «يُفقّهه» لا «يُعلّمه»، وليسا في العربية سواءً: فالعلم إدراك الشيء، والفقه فهمه — أن تعرف لِمَ كان كذلك وما يترتّب عليه. فالعلامة المذكورة هي الفهم، لا مقدار المحفوظ.\n\nوالشطر الثاني هو الذي يُترك عادةً، وهو يغيّر الأوّل: «وإنما أنا قاسمٌ والله يُعطي». فأخبر ﷺ عن نفسه أنه يقسم، وأنّ العطاء ليس إليه. فمن جلس إلى معلّمٍ فقد أتى القاسم، وعليه أن يسأل المعطي.\n\nوفيه لازمٌ ظاهر يفوت كثيرًا: إذا كان رزقُ الفهم علامةَ إرادة الخير بالعبد، فليس طلبُ الفهم حرفةً ولا هواية، وإنما هو طلبٌ لأن تُنال.",
    ref: "Sahih al-Bukhari, Book of Knowledge, Hadith 71",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["knowledge","learning","study","understanding","fiqh","student","teacher","scholar","العلم","التعلم","الفقه","الفهم","طلب العلم","المعلم","العالم"]
  },
  {
    id: "two-angels-every-morning",
    section: "dunya",
    title: "Two angels every morning — one asking for replacement, one for ruin",
    titleAr: "ملَكان كلّ صباح: أحدهما يسأل الخلف والآخر التلف",
    theme: "What is said over you before you wake",
    themeAr: "ما يُقال فوقك قبل أن تستيقظ",
    story: "Abu Hurairah رضي الله عنه reported the Prophet ﷺ saying: \"There is no morning the servants wake into except that two angels come down. One of them says: O Allah, give the one who spends a replacement. And the other says: O Allah, give the one who withholds ruin.\"",
    storyAr: "عن أبي هريرة رضي الله عنه أنّ النبي ﷺ قال: «ما من يومٍ يُصبح العباد فيه إلا ملَكان ينزلان، فيقول أحدهما: اللهم أعطِ منفقًا خلفًا، ويقول الآخر: اللهم أعطِ ممسكًا تلفًا».",
    arabic: "مَا مِنْ يَوْمٍ يُصْبِحُ الْعِبَادُ فِيهِ إِلَّا مَلَكَانِ يَنْزِلَانِ، فَيَقُولُ أَحَدُهُمَا: اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا، وَيَقُولُ الْآخَرُ: اللَّهُمَّ أَعْطِ مُمْسِكًا تَلَفًا",
    lesson: "Both angels are asking for the same thing to happen to the money — for it to leave. The difference is only in how. KHALAF is what replaces a thing that has gone; TALAF is a thing going with nothing put in its place. So the one who gives and the one who holds on will both see wealth leave their hands. One of them gets it back.\n\nThat reframes the ordinary fear. A man withholds because he is afraid of losing what he has; the hadith says the withholding is itself the losing, and that it is being prayed for over his head every single morning while he sleeps.\n\nIt is worth noticing how routine this is. Not on a special night, not in Ramadan — every morning the servants wake into. And note the wording carefully: `munfiqan` and `mumsikan` are indefinite. It is not two named men. It is whoever is doing the spending and whoever is doing the withholding on that particular morning, which means the same person can be under either prayer depending on the day.",
    lessonAr: "الملَكان كلاهما يسأل للمال شيئًا واحدًا: أن يذهب. وإنما الفرق في الكيفيّة. فالخلَف ما يعقُب الذاهب عوضًا عنه، والتلَف ذهابٌ لا عوض معه. فالمنفق والممسك كلاهما يرى المال يخرج من يده، غير أنّ أحدهما يعود إليه.\n\nوهذا يقلب الخوف المعتاد: فالرجل يُمسك خشية أن يفقد ما عنده، والحديث يخبر أنّ الإمساك نفسه هو الفقد، وأنه يُدعى به فوق رأسه كلّ صباحٍ وهو نائم.\n\nوتأمّل أنّ هذا في المعتاد لا في المخصوص: ليس في ليلةٍ بعينها ولا في رمضان، وإنما في كلّ يومٍ يُصبح العباد فيه. وتأمّل التنكير في «منفقًا» و«ممسكًا»: فليسا رجلين معيّنين، وإنما مَن كان في ذلك الصباح منفقًا ومن كان ممسكًا — فقد يكون الرجل الواحد تحت هذا الدعاء يومًا وتحت الآخر يومًا.",
    ref: "Sahih al-Bukhari, Book of Zakat, Hadith 1442",
    strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
    keys: ["charity","spending","money","wealth","stingy","withhold","angels","morning","provision","الصدقة","الإنفاق","المال","البخل","الإمساك","الملائكة","الصباح","الخلف","التلف","الرزق"]
  }

];
