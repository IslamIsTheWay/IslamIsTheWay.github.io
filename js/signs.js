/* ============================================================
   THE SIGNS OF THE HOUR — أشراط الساعة
   ------------------------------------------------------------
   The end of the world, which the Judgement page did not cover.
   Its fifteen stages begin at "when you die" — so the site had
   the whole of what happens AFTER a person dies, and nothing at
   all on how the world itself ends. This fills that.

   WHY THIS TOPIC NEEDS THE STRICTEST SOURCING ON THE SITE.
   No subject in Islam attracts more weak, fabricated and
   invented material than this one. Dates get predicted, the
   Dajjal gets a biography, current events get matched to
   narrations, and every generation is told it is the last one.
   Almost none of it is established.

   So the rule here is tighter than elsewhere:
     - the list of ten is the Prophet's ﷺ own list, in Sahih
       Muslim, and nothing is added to it
     - each sign carries the Quran verse and/or the hadith with
       its number where the number is verified
     - Muslim is cited BY BOOK NAME, never by number: the free
       hadith collection this site uses numbers Muslim
       sequentially and that numbering does not match the
       standard one, so a number would be a guess
     - `notEstablished` on an entry says plainly what is famous
       about it and NOT authentic

   Above all: nobody knows when. That is in the Quran twice, and
   it is the first thing on the page, before any sign is listed —
   because the single most common misuse of this subject is
   someone claiming to know the date.
   ============================================================ */

const SIGNS_INTRO = {
  title: "Before the Day begins — how the world ends",
  titleAr: "قبل أن يبدأ اليوم — كيف ينتهي العالم",

  lead: "Everything on the rest of this page happens after you die. This section is about what happens before any of it — to the world itself.",
  leadAr: "كلُّ ما في بقيّة هذه الصفحة يقع بعد موتك. وهذا القسم فيما يقع قبل ذلك كلّه: ما يجري للعالم نفسه.",

  /* Deliberately first. The commonest abuse of this subject is a
     date, and the Quran closes that door in two separate places. */
  nobodyKnows: {
    title: "Nobody knows when — and anyone who tells you a date is wrong",
    titleAr: "لا أحد يعلم متى — ومن حدّد لك موعدًا فقد أخطأ",
    en: "Start here, because this is where most of what people say about the end of the world goes wrong.\n\nThe Quran was asked this question directly and answered it directly: they ask you about the Hour, when will it arrive — say, its knowledge is only with my Lord. And in Surah Luqman it is placed in a list of five things whose knowledge belongs to Allah alone.\n\nSo when someone announces a year, matches a war to a narration, or tells you we are certainly the last generation — they are contradicting an explicit verse. That is worth knowing before you read a single sign below, because it is the difference between learning what was actually said and being frightened by what was not.\n\nThe Prophet ﷺ himself was asked when it would be. He did not answer with a date. He answered with a question back — what have you prepared for it.",
    ar: "ابدأ من هنا، فمن هذا الباب يدخل أكثرُ الخطأ فيما يُقال عن نهاية العالم.\n\nسُئل القرآنُ هذا السؤال صريحًا فأجاب صريحًا: ﴿يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى﴾. وجُعلت في سورة لقمان في جملة خمسٍ لا يعلمها إلا الله.\n\nفمن أعلن سنةً، أو نزّل حربًا على حديث، أو أخبرك أنّا آخر جيلٍ يقينًا، فقد عارض آيةً محكمة. ويحسن علم هذا قبل قراءة علامةٍ واحدةٍ ممّا يأتي، فإنه الفرق بين أن تتعلّم ما قيل وأن تُروَّع بما لم يُقل.\n\nوقد سُئل النبيُّ ﷺ عن الساعة متى هي، فلم يُجب بموعد، وإنما ردّ السؤال: ماذا أعددتَ لها؟",
    verses: [
      {
        ar: "يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى ۖ لَا يُجَلِّيهَا لِوَقْتِهَآ إِلَّا هُوَ ۚ ثَقُلَتْ فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا بَغْتَةًۭ",
        en: "“They ask you about the Hour: when is its arrival? Say: its knowledge is only with my Lord. None will reveal its time except Him. It lies heavy upon the heavens and the earth. It will not come upon you except suddenly.”",
        ref: "Surah Al-A'raf (7:187)"
      },
      {
        ar: "إِنَّ ٱللَّهَ عِندَهُۥ عِلْمُ ٱلسَّاعَةِ",
        en: "“Indeed, Allah — with Him is knowledge of the Hour.”",
        ref: "Surah Luqman (31:34)"
      }
    ],
    strength: "quran"
  },

  ordering: {
    en: "One more thing before the list. The ten below are the Prophet's ﷺ own list, given in one hadith, and he did not present them as a fixed running order — the narration groups them rather than numbering them one to ten. Some are clearly linked to each other, and the fire from Yemen is stated as the last. Beyond that, the sequence is not something to be dogmatic about, and this page does not invent one.",
    ar: "وكلمةٌ أخرى قبل السرد: العشرُ الآتية هي التي عدّها النبيُّ ﷺ في حديثٍ واحد، ولم يسُقها مساقَ ترتيبٍ لازم، فالرواية تجمعها ولا ترقّمها من واحدٍ إلى عشرة. وبعضها ظاهرُ الارتباط ببعض، وقد نُصّ على أنّ نار اليمن آخرها. وما وراء ذلك فليس ممّا يُقطع فيه بترتيب، ولا تخترع هذه الصفحة ترتيبًا."
  },

  hadith: {
    ar: "لَا تَقُومُ السَّاعَةُ حَتَّى تَرَوْا عَشْرَ آيَاتٍ",
    en: "“It will not come until you see ten signs” — then he mentioned the smoke, the Dajjal, the Beast, the rising of the sun from the west, the descent of Isa son of Maryam, Gog and Magog, and landslides in three places: one in the east, one in the west, and one in Arabia — at the end of which a fire would come out of Yemen and drive the people to their place of gathering.",
    ref: "Sahih Muslim, Book of Fitan and the Portents of the Last Hour — narrated by Hudhayfah ibn Usayd al-Ghifari. Cited by book rather than number: the numbering of Muslim in the free hadith collection this site uses is sequential and does not match the standard numbering, so a number here would be a guess.",
    strength: "hadith"
  },

  notice: "Everything below is what the Quran and the two Sahihs actually say. Where something famous is not established, the entry says so. Nothing here is a prediction, and no date is given, because no date was given.",
  noticeAr: "كلُّ ما يأتي ممّا نطق به القرآن والصحيحان. وحيث كان المشهور غير ثابتٍ نُصّ على ذلك. وليس فيه تنبّؤ، ولا تحديد وقت، لأنه لم يُحدَّد."
};

const MAJOR_SIGNS = [
  {
    id: "sg-dajjal",
    order: 1,
    name: "The Dajjal",
    nameAr: "المسيح الدجّال",
    lead: "The greatest trial ever put before human beings — and the Prophet ﷺ warned of him more than of anything else.",
    leadAr: "أعظم فتنةٍ عُرضت على بني آدم، وقد حذّر منه النبيُّ ﷺ أكثر من تحذيره من غيره.",
    points: [
      { en: "He is blind in the right eye, and his eye is like a bulging grape. The Prophet ﷺ said plainly: Allah is not one-eyed — meaning the defect itself is the proof against his claim.",
        ar: "أعورُ العين اليمنى، عينه كأنها عِنبةٌ طافية. وقال النبيُّ ﷺ صريحًا: إنّ الله ليس بأعور — فالعيبُ نفسه هو الحجّة على بطلان دعواه.",
        ref: "Sahih al-Bukhari 3439" },
      { en: "Between his eyes is written kafir — disbeliever — and the narrations say every believer reads it, lettered or not.",
        ar: "مكتوبٌ بين عينيه «كافر»، وفي الروايات أنّ كلّ مؤمنٍ يقرؤها، كاتبًا كان أو غير كاتب.",
        ref: "Sahih Muslim, Book of Fitan" },
      { en: "He is named in the list of ten in Sahih Muslim, and he is the sign the Prophet ﷺ taught his ummah to seek refuge from in every prayer.",
        ar: "وهو معدودٌ في العشر في صحيح مسلم، وهو الذي علّم النبيُّ ﷺ أمّته أن تستعيذ منه في كلّ صلاة.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "An enormous amount is said about him that is not in the two Sahihs — where exactly he is now, what year he appears, which modern figure or system he is. The site's five linked Dajjal stories keep to what is established. Matching him to a living person or a current government is not knowledge; it has been done in every century and has been wrong in every century.",
    notEstablishedAr: "ويُقال فيه كثيرٌ ليس في الصحيحين: أين هو الآن على التعيين، وفي أيّ سنةٍ يخرج، ومن يكون من المعاصرين أو الأنظمة. وقصص الدجّال الخمس المتسلسلة في هذا الموقع تلتزم الثابت. وتنزيلُه على شخصٍ حيٍّ أو دولةٍ قائمة ليس علمًا، وقد صُنع في كلّ قرنٍ فأخطأ أهلُه في كلّ قرن.",
    strength: "hadith"
  },
  {
    id: "sg-isa",
    order: 2,
    name: "The descent of Isa, son of Maryam",
    nameAr: "نزول عيسى ابن مريم",
    lead: "He descends as a just ruler — and he comes as a follower of this religion, not with a new one.",
    leadAr: "ينزل حَكَمًا عدلًا، ويأتي متّبعًا لهذا الدين لا بدينٍ جديد.",
    points: [
      { en: "“By Him in Whose Hand is my soul, the son of Maryam will soon descend among you as a just ruler.” He breaks the cross and abolishes the jizyah — that is, the situation that made it apply ends, because there is one community left.",
        ar: "«والذي نفسي بيده ليوشِكنّ أن ينزل فيكم ابنُ مريم حَكَمًا عدلًا». فيكسر الصليب ويضع الجزية — أي يرتفع الحال الذي شُرعت له، إذ لم تبقَ إلا مِلّةٌ واحدة.",
        ref: "Sahih al-Bukhari 2222" },
      { en: "He is one of the ten named in the hadith of Hudhayfah ibn Usayd.",
        ar: "وهو أحد العشر المعدودة في حديث حذيفة بن أسيد.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "That he descends is established. Detailed timelines of exactly how long he stays, what he does year by year, and precisely where events fall, go well beyond what the two Sahihs give.",
    notEstablishedAr: "أمّا نزوله فثابت. وأمّا التفاصيل في مدّة مكثه سنةً سنة، وما يصنع في كلّ عام، وتعيين مواضع الأحداث على الدقّة، فوراء ما في الصحيحين.",
    strength: "hadith"
  },
  {
    id: "sg-yajuj",
    order: 3,
    name: "Gog and Magog — Yajuj and Majuj",
    nameAr: "يأجوج ومأجوج",
    lead: "Named in the Quran twice, and released when the barrier that held them is levelled.",
    leadAr: "سُمّيا في القرآن مرّتين، ويُطلقان حين يُجعل السدُّ الذي حبسهما دكّاء.",
    points: [
      { en: "“Until, when Gog and Magog are let loose, and they descend rapidly from every height.”",
        ar: "﴿حَتَّىٰٓ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ وَهُم مِّن كُلِّ حَدَبٍۢ يَنسِلُونَ﴾",
        ref: "Surah Al-Anbiya (21:96)" },
      { en: "Dhul-Qarnayn, having built the barrier, said: this is a mercy from my Lord — and when the promise of my Lord comes, He will level it. So the barrier's end is itself part of the appointed promise.",
        ar: "قال ذو القرنين لَمّا بنى السدّ: ﴿هَٰذَا رَحْمَةٌۭ مِّن رَّبِّى ۖ فَإِذَا جَآءَ وَعْدُ رَبِّى جَعَلَهُۥ دَكَّآءَ﴾. فزوالُ السدّ نفسه من الوعد المضروب.",
        ref: "Surah Al-Kahf (18:98)" }
    ],
    strength: "quran"
  },
  {
    id: "sg-sun",
    order: 4,
    name: "The sun rising from the west",
    nameAr: "طلوع الشمس من مغربها",
    lead: "The sign after which the door of repentance closes — and this is the one with the sharpest consequence for a living person.",
    leadAr: "العلامة التي يُغلق بعدها باب التوبة، وهي أشدّها أثرًا في حقّ الحيّ.",
    points: [
      { en: "“The Hour will not be established until the sun rises from the west. When the people see it, all who are on it will believe — and that is when no soul's faith will benefit it, if it had not believed before.”",
        ar: "«لا تقوم الساعة حتى تطلع الشمس من مغربها، فإذا طلعت ورآها الناس آمنوا أجمعون، وذلك حين لا ينفع نفسًا إيمانها لم تكن آمنت من قبل».",
        ref: "Sahih al-Bukhari 4635" },
      { en: "The Quran states the same rule: on the day some of the signs of your Lord arrive, no soul will benefit from its faith if it had not believed before.",
        ar: "وقرّر القرآن الحكم نفسه: ﴿يَوْمَ يَأْتِى بَعْضُ ءَايَٰتِ رَبِّكَ لَا يَنفَعُ نَفْسًا إِيمَٰنُهَا لَمْ تَكُنْ ءَامَنَتْ مِن قَبْلُ﴾.",
        ref: "Surah Al-An'am (6:158)" },
      { en: "Until then the door is open. Allah stretches out His Hand by night so the one who sinned by day may repent, and by day for the one who sinned by night — until the sun rises from the west.",
        ar: "وقبل ذلك البابُ مفتوح: يبسط اللهُ يده بالليل ليتوب مسيءُ النهار، وبالنهار ليتوب مسيءُ الليل، حتى تطلع الشمس من مغربها.",
        ref: "Sahih Muslim, Book of Repentance" }
    ],
    strength: "hadith"
  },
  {
    id: "sg-dabbah",
    order: 5,
    name: "The Beast of the earth",
    nameAr: "دابّة الأرض",
    lead: "A creature brought out of the earth that speaks to people. The Quran states it; the details are not given.",
    leadAr: "دابّةٌ تُخرَج من الأرض تُكلّم الناس. نصّ عليها القرآن، ولم تُفصَّل.",
    points: [
      { en: "“And when the word befalls them, We will bring forth for them a beast from the earth speaking to them, that the people were not certain of Our signs.”",
        ar: "﴿وَإِذَا وَقَعَ ٱلْقَوْلُ عَلَيْهِمْ أَخْرَجْنَا لَهُمْ دَآبَّةًۭ مِّنَ ٱلْأَرْضِ تُكَلِّمُهُمْ أَنَّ ٱلنَّاسَ كَانُوا۟ بِـَٔايَٰتِنَا لَا يُوقِنُونَ﴾",
        ref: "Surah An-Naml (27:82)" },
      { en: "It is one of the three the Prophet ﷺ named as the point after which faith no longer benefits one who had not believed: the sun from its setting place, the Dajjal, and the Beast.",
        ar: "وهي إحدى الثلاث التي عدّها النبيُّ ﷺ ممّا لا ينفع بعده إيمانُ من لم يكن آمن: طلوعُ الشمس من مغربها، والدجّال، ودابّة الأرض.",
        ref: "Sahih Muslim, Book of Faith" }
    ],
    notEstablished: "What it looks like, its size, where exactly it emerges, and what it says word for word — none of that is established in the Quran or the two Sahihs. A great deal has been written describing it. The honest position is that the Quran named it and left it undescribed.",
    notEstablishedAr: "أمّا هيئتها وقدرها وموضع خروجها على التعيين ونصُّ ما تقوله، فليس شيءٌ من ذلك ثابتًا في القرآن ولا في الصحيحين. وقد كُتب في وصفها كثير. والإنصاف أنّ القرآن سمّاها ولم يصفها.",
    strength: "quran"
  },
  {
    id: "sg-dukhan",
    order: 6,
    name: "The Smoke",
    nameAr: "الدخان",
    lead: "A visible smoke covering the people, named in Surah Ad-Dukhan and listed among the ten.",
    leadAr: "دخانٌ مبينٌ يغشى الناس، سُمّي في سورة الدخان وعُدّ في العشر.",
    points: [
      { en: "“So watch for the Day when the sky will bring a visible smoke, covering the people. This is a painful punishment.”",
        ar: "﴿فَٱرْتَقِبْ يَوْمَ تَأْتِى ٱلسَّمَآءُ بِدُخَانٍۢ مُّبِينٍۢ • يَغْشَى ٱلنَّاسَ ۖ هَٰذَا عَذَابٌ أَلِيمٌۭ﴾",
        ref: "Surah Ad-Dukhan (44:10-11)" },
      { en: "It is the first named in the hadith of the ten.",
        ar: "وهو أوّل ما ذُكر في حديث العشر.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "The scholars differed on whether this verse refers to a smoke already past — a famine in the time of the Prophet ﷺ in which people saw a haze from hunger, which is the reading reported from Ibn Mas'ud — or to a smoke still to come, which is the reading of those who place it among the ten. Both are held by serious scholars, and this is stated rather than resolved here.",
    notEstablishedAr: "واختلف أهل العلم: أهذه الآية في دخانٍ قد مضى — وهو الجدب في زمن النبيّ ﷺ حتى كان الرجل يرى كهيئة الدخان من الجوع، وهو المرويّ عن ابن مسعود — أم في دخانٍ آتٍ، وهو قول من عدّه في العشر. والقولان لأئمّة، ويُذكر الخلاف هنا ولا يُقطع فيه.",
    strength: "quran"
  },
  {
    id: "sg-khusuf",
    order: 7,
    name: "The three landslides",
    nameAr: "الخسوفات الثلاثة",
    lead: "One in the east, one in the west, and one in the Arabian peninsula.",
    leadAr: "خسفٌ بالمشرق، وخسفٌ بالمغرب، وخسفٌ بجزيرة العرب.",
    points: [
      { en: "Named in the hadith of the ten, in that order, with no further description given.",
        ar: "ذُكرت في حديث العشر على هذا الترتيب، ولم يُزد عليها وصف.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    notEstablished: "Nothing beyond this is established — not when, not exactly where, and not which recorded earthquake in history was or was not one of them. Attaching them to particular modern events is guesswork.",
    notEstablishedAr: "ولا يثبت وراء هذا شيء: لا الزمان، ولا الموضع على التعيين، ولا أنّ زلزالًا بعينه في التاريخ منها أو ليس منها. وتنزيلُها على وقائع معاصرة ظنٌّ لا علم.",
    strength: "hadith"
  },
  {
    id: "sg-nar",
    order: 8,
    name: "The fire from Yemen — the last of them",
    nameAr: "نار اليمن — آخرها",
    lead: "The hadith names this one explicitly as the last: a fire that drives the people to their place of gathering.",
    leadAr: "نصّ الحديث على أنّ هذه آخرها: نارٌ تطرد الناس إلى محشرهم.",
    points: [
      { en: "“…at the end of which a fire would come out of Yemen and drive the people to their place of assembly.” It is the one sign in the list whose position is stated.",
        ar: "«…وآخر ذلك نارٌ تخرج من اليمن تطرد الناس إلى محشرهم». وهي العلامة الوحيدة في السرد التي نُصّ على موضعها.",
        ref: "Sahih Muslim, Book of Fitan" }
    ],
    strength: "hadith"
  },
  {
    id: "sg-sur",
    order: 9,
    name: "The Trumpet — and here the rest of this page begins",
    nameAr: "الصُّور — ومن هنا يبدأ سائر هذه الصفحة",
    lead: "The signs end and the Hour arrives. Everything after this is on the rest of this page.",
    leadAr: "تنتهي العلامات وتقوم الساعة. وكلُّ ما بعد هذا في بقيّة هذه الصفحة.",
    points: [
      { en: "“And the Trumpet will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills. Then it will be blown again, and at once they will be standing, looking on.” One blast ends everything; the second raises it.",
        ar: "﴿وَنُفِخَ فِى ٱلصُّورِ فَصَعِقَ مَن فِى ٱلسَّمَٰوَٰتِ وَمَن فِى ٱلْأَرْضِ إِلَّا مَن شَآءَ ٱللَّهُ ۖ ثُمَّ نُفِخَ فِيهِ أُخْرَىٰ فَإِذَا هُمْ قِيَامٌۭ يَنظُرُونَ﴾. نفخةٌ تُنهي كلّ شيء، وأخرى تُقيمه.",
        ref: "Surah Az-Zumar (39:68)" },
      { en: "“The day people will be like scattered moths, and the mountains like carded wool.”",
        ar: "﴿يَوْمَ يَكُونُ ٱلنَّاسُ كَٱلْفَرَاشِ ٱلْمَبْثُوثِ • وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ﴾",
        ref: "Surah Al-Qari'ah (101:4-5)" }
    ],
    strength: "quran"
  }
];

/* ------------------------------------------------------------
   THE MOMENT OF MEETING ALLAH — لحظة لقاء الله
   Rendered on guidance.html, because it is not information about
   the future so much as a question about this week. The Judgement
   page tells you what happens; this asks what you do now.
   ------------------------------------------------------------ */
const MEETING_ALLAH = {
  title: "The moment of meeting Allah",
  titleAr: "لحظة لقاء الله",
  lead: "Every account of the end arrives at one moment, and the Quran describes it in two directions — the faces that see, and the ones held back.",
  leadAr: "كلُّ خبرٍ عن النهاية ينتهي إلى لحظةٍ واحدة، وصفها القرآن من جهتين: وجوهٌ تنظر، ووجوهٌ تُحجَب.",

  sections: [
    {
      h: "The seeing — the highest thing given in Paradise",
      hAr: "النظر — أعلى ما يُعطاه أهل الجنّة",
      en: "“Faces, that Day, will be radiant, looking at their Lord.” Two verses, seven words in Arabic, and the scholars of the sunnah took them as they are: the believers will see their Lord.\n\nAnd Surah Yunus adds the word the scholars connected to it: for those who did good is the best, and MORE. Al-husna wa ziyadah — the best reward, and something extra beyond it. The extra was explained by the Prophet ﷺ as looking at the Face of Allah, in Sahih Muslim.\n\nWhich reframes the whole subject. Paradise is not the end of the account. The seeing is.",
      ar: "﴿وُجُوهٌۭ يَوْمَئِذٍۢ نَّاضِرَةٌ • إِلَىٰ رَبِّهَا نَاظِرَةٌۭ﴾. آيتان في سبع كلمات، أخذها أهل السنّة على ظاهرها: أنّ المؤمنين يرون ربّهم.\n\nوزادت سورة يونس اللفظ الذي وصله أهل العلم بها: ﴿لِّلَّذِينَ أَحْسَنُوا۟ ٱلْحُسْنَىٰ وَزِيَادَةٌۭ﴾ — الحسنى وشيءٌ فوقها. وفسّر النبيُّ ﷺ الزيادة بالنظر إلى وجه الله، في صحيح مسلم.\n\nوهذا يقلب النظر في الباب كلّه: فليست الجنّة خاتمة الحساب، وإنما النظر.",
      ref: "Surah Al-Qiyamah (75:22-23) · Surah Yunus (10:26) · Sahih Muslim, Book of Faith",
      strength: "quran"
    },
    {
      h: "And the other direction, stated just as plainly",
      hAr: "والجهة الأخرى، مذكورةٌ بمثل ذلك الوضوح",
      en: "“No! Indeed, from their Lord, that Day, they will be veiled.” Ash-Shafi'i took this verse as the proof of the first: that being veiled is named as a punishment shows the seeing is a reward — otherwise there would be nothing in being kept from it.\n\nThat is a scholar's inference from two verses, attributed to him by name, and it is worth knowing as his reasoning rather than as a verse in itself.",
      ar: "﴿كَلَّآ إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍۢ لَّمَحْجُوبُونَ﴾. واستدلّ الشافعيّ بهذه الآية على الأولى: أنّ الحجاب لَمّا جُعل عقوبةً دلّ على أنّ النظر ثواب، وإلا لم يكن في المنع منه شيء.\n\nوهذا استنباطُ عالمٍ من آيتين، منسوبٌ إليه باسمه، ويحسن أن يُعلم أنه استدلاله لا أنه نصُّ آية.",
      ref: "Surah Al-Mutaffifin (83:15); the inference is Imam ash-Shafi'i's, reported in the tafsir works — a scholar's reasoning, not a hadith",
      strength: "tafsir"
    },
    {
      h: "The one request nobody is granted",
      hAr: "السؤال الوحيد الذي لا يُجاب إليه أحد",
      en: "“Until, when death comes to one of them, he says: My Lord, send me back — that I might do righteousness in what I left behind.” And the answer is one word: kalla. No.\n\nRead what is being asked for. Not wealth, not more years in general — to be sent back to do something right. It is the most reasonable request a person could make, and it is refused, and the refusal is the shortest word in the verse.\n\nThat is the practical weight of this whole subject. Everything above is a description of a day nobody can prepare for on the day itself. What can be done can only be done now — and “now” is the thing being described as “what I left behind”.",
      ar: "﴿حَتَّىٰٓ إِذَا جَآءَ أَحَدَهُمُ ٱلْمَوْتُ قَالَ رَبِّ ٱرْجِعُونِ • لَعَلِّىٓ أَعْمَلُ صَٰلِحًۭا فِيمَا تَرَكْتُ﴾. والجواب كلمةٌ واحدة: ﴿كَلَّآ﴾.\n\nوتأمّل المسؤول: ليس مالًا، ولا عمرًا مطلقًا، بل أن يُردَّ ليعمل صالحًا. وهو أوجهُ ما يسأله سائل، ورُدّ، والردُّ أقصرُ كلمةٍ في الآية.\n\nوهذا هو الأثر العمليّ للباب كلّه: فما تقدّم وصفُ يومٍ لا يستطيع أحدٌ أن يستعدّ له فيه. وإنما يُعمل الآن، و«الآن» هو الذي يُسمّى هناك ﴿فِيمَا تَرَكْتُ﴾.",
      ref: "Surah Al-Mu'minun (23:99-100)",
      strength: "quran"
    },
    {
      h: "So what is actually asked of you this week",
      hAr: "فما المطلوب منك في هذا الأسبوع",
      en: "The Prophet ﷺ was asked when the Hour would be. He did not give a date. He asked the man back: what have you prepared for it? The man said he had not prepared much — but that he loved Allah and His Messenger. And he was told: you are with the one you love.\n\nThat exchange is the whole subject reduced to something a person can act on tonight. Not a calendar. Not a prediction. A question about what you have made ready, and an answer that turns on attachment rather than on quantity.",
      ar: "سُئل النبيُّ ﷺ عن الساعة متى هي، فلم يُحدّد وقتًا، وإنما ردّ على السائل: «وماذا أعددتَ لها؟» فقال الرجل إنه لم يُعِدّ لها كثير عملٍ، غير أنه يحبّ الله ورسوله. فقيل له: «أنت مع من أحببت».\n\nوهذا الخبر يردّ الباب كلّه إلى ما يعمله المرء الليلة: لا تقويمًا، ولا تنبّؤًا، بل سؤالًا عمّا أعددتَ، وجوابًا مداره على التعلّق لا على الكثرة.",
      ref: "Sahih al-Bukhari 3688 — narrated by Anas ibn Malik",
      strength: "hadith"
    }
  ],

  notice: "This section explains what the Quran and the two Sahihs say. It is not a fatwa and it is not a prediction. No date is given here because none was given in the revelation.",
  noticeAr: "هذا القسم في بيان ما جاء في القرآن والصحيحين، وليس فتوى ولا تنبّؤًا. ولم يُذكر فيه وقتٌ لأنه لم يُذكر في الوحي."
};


/* ------------------------------------------------------------
   THE END ITSELF — the blasts, the collapse, and the re-creation
   ------------------------------------------------------------
   The Judgement page had the Trumpet as a single stage. This is
   what the Quran describes happening between the last sign and
   the standing: the blast, the sky and seas and mountains coming
   apart, everything dying, the earth left flat and empty, and
   then the raising.

   A WARNING THAT BELONGS ON THIS SECTION SPECIFICALLY.
   This is where scientific-sounding explanation gets attached to
   verses — the seas burning explained by splitting water into
   hydrogen and oxygen, time contracting explained by relativity.
   None of that is tafsir, and no early scholar read them so. It
   is also a bad trade: a verse tied to a scientific claim rises
   and falls with that claim, and the Quran is not in need of the
   support. The verses are given here as they are, and
   `notEstablished` says where the popular version runs past the
   text.
   ------------------------------------------------------------ */

const THE_END = {
  title: "The end itself — from the last sign to the raising",
  titleAr: "النهاية نفسها — من آخر علامةٍ إلى البعث",
  lead: "What the Quran describes happening between the final sign and the moment everyone stands up again.",
  leadAr: "ما يصفه القرآن ممّا يقع بين آخر العلامات وبين قيام الناس من جديد.",

  stages: [
    {
      h: "The blast — and everything alive dies",
      hAr: "النفخة — فيموت كلُّ حيّ",
      en: "The Trumpet is blown and whoever is in the heavens and the earth falls dead, except whom Allah wills. Not destroyed slowly, not across generations — at a sound.\n\nThe Quran does not name who the exceptions are. Several answers have been suggested. The verse says “except whom Allah wills” and stops, and so does this page.",
      ar: "يُنفخ في الصور فيصعق من في السماوات ومن في الأرض إلا من شاء الله. لا هلاكًا على مهل، ولا عبر أجيال، بل عند صوت.\n\nولم يُسمّ القرآن المستثنَين، وقد ذُكرت في تعيينهم أقوال. والآية قالت ﴿إِلَّا مَن شَآءَ ٱللَّهُ﴾ ووقفت، وكذلك تقف هذه الصفحة.",
      verse: { ar: "وَنُفِخَ فِى ٱلصُّورِ فَصَعِقَ مَن فِى ٱلسَّمَٰوَٰتِ وَمَن فِى ٱلْأَرْضِ إِلَّا مَن شَآءَ ٱللَّهُ", en: "“And the Trumpet will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills.”", ref: "Surah Az-Zumar (39:68)" },
      strength: "quran"
    },
    {
      h: "The mountains, the seas, the sky",
      hAr: "الجبال والبحار والسماء",
      en: "The Quran describes the world coming apart in short, hard images, and they are worth reading rather than summarised.\n\nThe mountains are set moving and become a mirage. Then they become like carded wool — the lightest thing there is, blown about.\n\nThe seas are set boiling. The sky becomes like molten metal, then splits open, and the stars scatter.\n\nEvery one of these is a verse. What none of them is, is an explanation. The Quran gives the scene, not the mechanism.",
      ar: "يصف القرآن انفراط العالم بصورٍ قصيرةٍ شديدة، وقراءتها خيرٌ من تلخيصها.\n\nتُسيَّر الجبال فتكون سرابًا، ثم تصير كالعهن المنفوش — أخفّ ما يكون، تذروه الريح.\n\nوتُسجَّر البحار. وتكون السماء كالمُهل، ثم تنشقّ، وتنكدر النجوم.\n\nوكلُّ واحدةٍ من هذه آية. وليست واحدةٌ منها تفسيرًا للكيفيّة: فالقرآن أعطى المشهد ولم يُعطِ الآليّة.",
      verses: [
        { ar: "وَسُيِّرَتِ ٱلْجِبَالُ فَكَانَتْ سَرَابًۭا", en: "“And the mountains are set in motion and become a mirage.”", ref: "Surah An-Naba (78:20)" },
        { ar: "وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ", en: "“And the mountains will be like carded wool.”", ref: "Surah Al-Qari'ah (101:5)" },
        { ar: "وَإِذَا ٱلْبِحَارُ سُجِّرَتْ", en: "“And when the seas are set boiling.”", ref: "Surah At-Takwir (81:6)" },
        { ar: "يَوْمَ تَكُونُ ٱلسَّمَآءُ كَٱلْمُهْلِ", en: "“The Day the sky will be like molten metal.”", ref: "Surah Al-Ma'arij (70:8)" },
        { ar: "فَإِذَا ٱنشَقَّتِ ٱلسَّمَآءُ فَكَانَتْ وَرْدَةًۭ كَٱلدِّهَانِ", en: "“And when the heaven splits open and becomes rose-coloured like oil.”", ref: "Surah Ar-Rahman (55:37)" }
      ],
      notEstablished: "A common modern habit is to explain these verses with chemistry or physics — the seas burning explained by separating water into hydrogen and oxygen, or the contraction of time explained by relativity. That is not tafsir, and no early scholar read them that way. It is also a bad trade: a verse tied to a scientific claim rises and falls with that claim. The verses are given here as they are.",
      notEstablishedAr: "وقد شاع حديثًا تفسير هذه الآيات بالكيمياء أو الفيزياء: كتعليل اشتعال البحار بفصل الماء إلى هيدروجين وأكسجين، أو تعليل تقارب الزمان بالنسبيّة. وليس هذا تفسيرًا، ولا قرأها به أحدٌ من المتقدّمين. وهو صفقةٌ خاسرة: فالآية إذا عُلّقت بدعوى علميّةٍ سقطت بسقوطها. فسِيقت الآيات هنا كما هي.",
      strength: "quran"
    },
    {
      h: "The earth left flat and empty — and the question nobody answers",
      hAr: "الأرض تُترك ممدودةً خالية — والسؤال الذي لا يُجيبه أحد",
      en: "The earth is stretched out, throws up what is inside it, and empties. No mountain, no landmark, nothing to hide behind.\n\nThen the Quran records a question asked into a world with nobody left in it: “To whom belongs the sovereignty this Day?” There is no one to answer, so the answer comes from the One who asked: “To Allah, the One, the Prevailing.”",
      ar: "تُمدّ الأرض وتُلقي ما في جوفها وتتخلّى: لا جبل، ولا معلَم، ولا ما يُستتر به.\n\nثم يحكي القرآن سؤالًا يُلقى في عالمٍ لم يبقَ فيه أحد: ﴿لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ﴾. فلا مُجيب، فيأتي الجواب من السائل سبحانه: ﴿لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ﴾.",
      verses: [
        { ar: "وَإِذَا ٱلْأَرْضُ مُدَّتْ • وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ", en: "“And when the earth is spread out, and casts out what is within it and becomes empty.”", ref: "Surah Al-Inshiqaq (84:3-4)" },
        { ar: "لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ ۖ لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ", en: "“To whom belongs the sovereignty this Day? To Allah, the One, the Prevailing.”", ref: "Surah Ghafir (40:16)" }
      ],
      strength: "quran"
    },
    {
      h: "Forty — and the one bone that does not decay",
      hAr: "أربعون — والعظم الذي لا يبلى",
      en: "Between the two blasts there is a gap, and the hadith gives its length as a number with no unit. Abu Hurairah was asked: forty days? He refused to say. Forty months? He refused. Forty years? He refused.\n\nThat refusal is itself worth noticing. The companion who narrated it would not fill in what he had not been told, and neither should anyone else.\n\nIn the same narration: everything of a human being decays except one bone — the coccyx, the very base of the spine — and from it the person is put together again.",
      ar: "بين النفختين مدّة، وجاء في الحديث عددُها بلا وحدة. سُئل أبو هريرة: أربعون يومًا؟ فأبى. أربعون شهرًا؟ فأبى. أربعون سنة؟ فأبى.\n\nوهذا الإباء نفسه ممّا يُتأمَّل: فالصحابيُّ الراوي امتنع أن يملأ ما لم يُخبَر به، وكذلك ينبغي لغيره.\n\nوفي الحديث نفسه: يبلى كلُّ شيءٍ من الإنسان إلا عظمًا واحدًا، وهو عَجْبُ الذَّنَب، أسفلُ الصلب، ومنه يُركَّب الخلق.",
      verse: { ar: "", en: "“Between the two blowings of the trumpet there will be forty.” … “Everything of the human body will decay except the coccyx bone, and from it the creation will be put together again.”", ref: "Sahih al-Bukhari 4814 — narrated by Abu Hurairah; the same “forty” also at al-Bukhari 4935" },
      strength: "hadith"
    },
    {
      h: "The raising — rain, and people coming up like plants",
      hAr: "البعث — مطرٌ، وخروجُ الناس كما ينبت النبات",
      en: "Then rain comes down and human beings grow out of the earth the way vegetation grows. The image in the narrations is agricultural, not mechanical: something is planted, something rains, something comes up.\n\nAnd the ground they are gathered on is described in Sahih al-Bukhari as reddish-white land like a pure loaf of bread — with, the narrator adds, no landmark on it for anybody. Nowhere to go, and nothing to recognise.",
      ar: "ثم يُنزل الله مطرًا، فينبت الناس من الأرض كما ينبت النبات. والصورة في الأخبار زراعيّةٌ لا آليّة: بذرٌ يُوضع، ومطرٌ ينزل، وخَلقٌ يخرج.\n\nوالأرض التي يُجمعون عليها موصوفةٌ في صحيح البخاري بأنها أرضٌ بيضاء يعلوها حمرة كقُرصة النقيّ — قال الراوي: ليس فيها معلمٌ لأحد. فلا موضعَ يُقصد، ولا شيءَ يُعرَف.",
      verse: { ar: "", en: "“The people will be gathered on the Day of Resurrection on reddish-white land like a pure loaf of bread.” Sahl added: that land will have no landmark for anybody.", ref: "Sahih al-Bukhari 6521 — narrated by Sahl ibn Sa'd" },
      strength: "hadith"
    },
    {
      h: "And from here, the rest of this page",
      hAr: "ومن هنا يبدأ سائر هذه الصفحة",
      en: "Everyone is standing. What happens next — the sun drawing near, the sweat, the intercession, the records, the Scales, the Bridge, the settling of rights — is the fifteen stages above.",
      ar: "وقد قام الناس. وأمّا ما بعد ذلك — دنوّ الشمس، والعرق، والشفاعة، والصحف، والميزان، والصراط، واقتصاص الحقوق — فهو المراحل الخمس عشرة المتقدّمة.",
      strength: "note"
    }
  ]
};

/* Minor signs. A short, strictly-sourced set — not an attempt at a
   complete list, and it says so. The long popular lists mix authentic
   narrations with weak ones freely, which is what this site does not do. */
const MINOR_SIGNS = {
  title: "The smaller signs — some already past",
  titleAr: "العلامات الصغرى — وبعضها قد مضى",
  lead: "Not all of it is in the future. Some of these the Prophet ﷺ named as already happening in his own lifetime.",
  leadAr: "ليس كلُّ ذلك في المستقبل، فبعضها سمّاه النبيُّ ﷺ واقعًا في زمانه.",
  items: [
    { en: "His own being sent. He said: “I have been sent, and the Hour, like these two” — showing his two fingers.",
      ar: "بعثته نفسها. قال ﷺ: «بُعثتُ أنا والساعة كهاتين» وأشار بإصبعيه.",
      ref: "Sahih al-Bukhari 6503 — narrated by Sahl", strength: "hadith" },
    { en: "The splitting of the moon, which Surah Al-Qamar opens with: “The Hour has drawn near, and the moon has split.”",
      ar: "انشقاق القمر، وقد افتُتحت به سورة القمر: ﴿ٱقْتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلْقَمَرُ﴾.",
      ref: "Surah Al-Qamar (54:1); the event itself is in al-Bukhari and Muslim", strength: "quran" },
    { en: "The contraction of time — that a period passes faster than it used to. It is in the narrations, and it is better kept as it was said than explained with physics.",
      ar: "تقارب الزمان، وأنّ المدّة تمرّ أسرع ممّا كانت. وهو في الأخبار، وإبقاؤه على ما قيل أولى من تفسيره بالفيزياء.",
      ref: "Sahih al-Bukhari, Book of Fitan", strength: "hadith" }
  ],
  notEstablished: "The popular lists of minor signs run to a hundred items or more and mix authentic narrations with weak and fabricated ones without distinguishing them. Only a few are given here, and only where the source is solid. A short honest list is worth more than a long one you cannot rely on.",
  notEstablishedAr: "وتبلغ قوائم العلامات الصغرى المشهورة مئةً فأكثر، ويُخلط فيها الصحيح بالضعيف والموضوع بلا تمييز. فلم يُذكر هنا إلا القليل، وحيث كان المصدر متينًا. وقائمةٌ قصيرةٌ صادقة خيرٌ من طويلةٍ لا يُوثق بها."
};
