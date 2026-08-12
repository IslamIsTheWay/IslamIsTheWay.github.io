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
    ref: "Sahih Muslim, Book of Fitan — Hudhayfah ibn Usayd al-Ghifari",
    strength: "hadith"
  },

  notice: "Everything below is what the Quran and the two Sahihs actually say. Where something famous is not established, the entry says so. Nothing here is a prediction, and no date is given, because no date was given.",
  noticeAr: "كلُّ ما يأتي ممّا نطق به القرآن والصحيحان. وحيث كان المشهور غير ثابتٍ نُصّ على ذلك. وليس فيه تنبّؤ، ولا تحديد وقت، لأنه لم يُحدَّد."
};

const MAJOR_SIGNS = [
  {
    id: "sg-dajjal",
    plain: "In plain words: a man will come claiming to be God, and he will be able to do things that look impossible. The Prophet ﷺ warned about him more than about anything else.\n\nThe simplest thing to hold on to: he is blind in one eye. The Prophet ﷺ said Allah is not one-eyed — meaning the man's own defect is the proof he is lying. Whatever he shows you, that stays true.",
    plainAr: "بكلامٍ بسيط: سيخرج رجلٌ يدّعي أنه ربّ، ويستطيع أن يفعل أشياء تبدو مستحيلة. وقد حذّر منه النبيّ ﷺ أكثر من تحذيره من أيّ شيءٍ آخر.\n\nوأبسط ما تُمسك به: أنه أعورُ العين. قال النبيّ ﷺ: إنّ الله ليس بأعور — أي أنّ عيبه هو نفسه الدليل على كذبه. ومهما أراك، يبقى هذا صحيحًا.",
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
    plain: "In plain words: Isa عليه السلام comes back. Not as a new prophet with a new law — he comes following this one, and the two Sahihs say he breaks the cross, kills the swine and puts an end to war.\n\nHe is the one who kills the Dajjal. And he prays behind the imam of the Muslims — which is the detail that settles what his return actually means.",
    plainAr: "بكلامٍ بسيط: ينزل عيسى عليه السلام. لا نبيًّا بشريعةٍ جديدة، وإنما متّبعًا لهذه الشريعة، وفي الصحيحين أنه يكسر الصليب ويقتل الخنزير ويضع الحرب.\n\nوهو الذي يقتل الدجّال. ويصلّي خلف إمام المسلمين — وهذه هي اللفتة التي تحسم معنى نزوله.",
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
    plain: "In plain words: an enormous number of people are released and spread across the earth, and no army can stand against them. The Quran says they come down from every height.\n\nThey are not defeated in battle. They are ended by something small — the supplication of Isa عليه السلام, after which they die. The pattern is deliberate: what no force could stop is removed without a fight.",
    plainAr: "بكلامٍ بسيط: يُفتح عن قومٍ لا قِبَل لأحدٍ بقتالهم، فينتشرون في الأرض، وفي القرآن ﴿وَهُم مِّن كُلِّ حَدَبٍۢ يَنسِلُونَ﴾.\n\nولا يُهزمون في معركة، وإنما يُنهيهم أمرٌ يسير: دعوةُ عيسى عليه السلام، فيموتون. والنسقُ مقصود: فالذي عجزت عنه القوّةُ رُفع بغير قتال.",
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
    plain: "In plain words: one morning the sun comes up from the wrong side. Everyone sees it, and at that moment everybody believes — and it is too late for it to help anyone who did not believe before.\n\nWhy it matters to you today: until that happens, the door is open. Allah stretches out His hand at night for whoever sinned in the day, and in the day for whoever sinned at night. The point of this sign is not the sun; it is that the door has a closing time.",
    plainAr: "بكلامٍ بسيط: في صباحٍ من الصباحات تطلع الشمس من الجهة الخطأ. يراها الناس جميعًا، فيؤمن الجميع في تلك اللحظة — وقد فات الأوان، فلا ينفع إيمانُ من لم يكن آمن قبلها.\n\nولماذا يعنيك هذا اليوم: لأنّ الباب مفتوحٌ إلى أن يقع ذلك. يبسط الله يده بالليل ليتوب مسيء النهار، وبالنهار ليتوب مسيء الليل. فليست العبرة في الشمس، وإنما في أنّ للباب وقتَ إغلاق.",
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
    plain: "In plain words: a creature is brought out of the earth and speaks to people. That much is stated in the Quran.\n\nWhat it looks like and where exactly it appears is not established. A great deal is said about it with no sound chain behind it, so this card gives what the verse gives and then stops — which is the honest place to stop.",
    plainAr: "بكلامٍ بسيط: تخرج دابّةٌ من الأرض تكلّم الناس. وهذا القدرُ منصوصٌ في القرآن.\n\nوأمّا صفتُها وموضعُ خروجها بعينه فغير ثابت. وقد قيل فيها كثيرٌ لا يصحّ إسنادُه، فاقتصرت البطاقةُ على ما في الآية ووقفت — وهذا هو الموقف المنصف.",
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
    plain: "In plain words: a smoke covers the people, and the Quran calls it a painful punishment.\n\nThe scholars genuinely differed here: some held it already happened in the Prophet's ﷺ lifetime, in the famine that struck Quraysh, and others that it is still to come. Both positions are held by major scholars, so the card gives both rather than picking one and presenting it as settled.",
    plainAr: "بكلامٍ بسيط: يغشى الناسَ دخان، وسمّاه القرآن ﴿عَذَابٌ أَلِيمٌۭ﴾.\n\nوقد اختلف العلماء هنا اختلافًا حقيقيًّا: فمنهم من قال إنه وقع في زمنه ﷺ في سِنِي القحط التي أصابت قريشًا، ومنهم من قال إنه ممّا لم يأتِ بعد. والقولان لأئمّة، فذكرت البطاقةُ القولين ولم تُقدّم أحدهما على أنه المقطوع به.",
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
    plain: "In plain words: the earth swallows people in three places — one in the east, one in the west, and one in the Arabian peninsula.\n\nThat is what the hadith says, and it says nothing more. Anyone who tells you which modern city each one is has gone past the text and is guessing.",
    plainAr: "بكلامٍ بسيط: يُخسف بالناس في ثلاثة مواضع: خسفٌ بالمشرق، وخسفٌ بالمغرب، وخسفٌ بجزيرة العرب.\n\nهذا نصُّ الحديث، ولم يزد عليه. ومن عيّن لك مدينةً بعينها لكلّ خسفٍ فقد تجاوز النصّ وإنما يظنّ.",
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
    plain: "In plain words: the last of the signs is a fire that comes out and drives the people in front of it to the place where they will be gathered.\n\nIt is named as the last one in the Prophet's ﷺ own list — so once it appears, there is nothing further left to wait for.",
    plainAr: "بكلامٍ بسيط: آخرُ الآيات نارٌ تخرج تسوق الناس أمامها إلى محشرهم.\n\nوقد جُعلت آخرَ ما عدّه ﷺ — فإذا ظهرت فليس بعدها شيءٌ يُنتظر.",
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
    plain: "In plain words: the signs run out here and the Hour itself begins. Everything from this point on is what the rest of this page describes — the blast, the raising, the standing, and what follows.\n\nWhich is the reason the signs were placed above the fifteen stages rather than below them: this is the order it actually happens in.",
    plainAr: "بكلامٍ بسيط: تنتهي الأشراط ها هنا وتبدأ الساعة نفسها. وكلُّ ما بعد هذا الموضع هو الذي تصفه بقيّةُ هذه الصفحة: النفخُ والبعثُ والموقفُ وما يتبعه.\n\nولهذا وُضعت الأشراطُ فوق المراحل الخمس عشرة لا تحتها: فهذا هو ترتيبُ وقوعها.",
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
      ref: "Surah Al-Mutaffifin (83:15)",
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
      ref: "Sahih al-Bukhari 3688 — Anas ibn Malik",
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
      plain: "In plain words: the horn is blown once and every living thing dies at the same moment. Not gradually, and not in order — at once.\n\nThe Quran makes one exception: except whom Allah wills. That exception is not explained further, and this page does not fill it in.",
      plainAr: "بكلامٍ بسيط: يُنفخ في الصور نفخةً واحدةً فيموت كلُّ حيٍّ في اللحظة نفسها. لا تدريجًا ولا على ترتيب، بل دفعةً واحدة.\n\nواستثنى القرآن: ﴿إِلَّا مَن شَآءَ ٱللَّهُ﴾. ولم يُفسَّر هذا الاستثناء، ولا تملؤه هذه الصفحة من عندها.",
      en: "The Trumpet is blown and whoever is in the heavens and the earth falls dead, except whom Allah wills. Not destroyed slowly, not across generations — at a sound.\n\nThe Quran does not name who the exceptions are. Several answers have been suggested. The verse says “except whom Allah wills” and stops, and so does this page.",
      ar: "يُنفخ في الصور فيصعق من في السماوات ومن في الأرض إلا من شاء الله. لا هلاكًا على مهل، ولا عبر أجيال، بل عند صوت.\n\nولم يُسمّ القرآن المستثنَين، وقد ذُكرت في تعيينهم أقوال. والآية قالت ﴿إِلَّا مَن شَآءَ ٱللَّهُ﴾ ووقفت، وكذلك تقف هذه الصفحة.",
      verse: { ar: "وَنُفِخَ فِى ٱلصُّورِ فَصَعِقَ مَن فِى ٱلسَّمَٰوَٰتِ وَمَن فِى ٱلْأَرْضِ إِلَّا مَن شَآءَ ٱللَّهُ", en: "“And the Trumpet will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills.”", ref: "Surah Az-Zumar (39:68)" },
      strength: "quran"
    },
    {
      h: "The mountains, the seas, the sky",
      hAr: "الجبال والبحار والسماء",
      plain: "In plain words: the things people treat as the definition of permanence are the first to go. Mountains are moved and become like carded wool, the seas are set on fire, the sky is rolled up.\n\nThe Quran keeps choosing exactly the objects a person would point at to say: that will always be there.",
      plainAr: "بكلامٍ بسيط: أوّلُ ما يزول هو ما يجعله الناس مثَلًا في الثبات. تُسيَّر الجبال فتكون ﴿كَٱلْعِهْنِ ٱلْمَنفُوشِ﴾، وتُسجَّر البحار، وتُطوى السماء.\n\nوالقرآن يختار في كلّ مرّةٍ الأشياء التي يُشير إليها المرء فيقول: هذه لا تزول.",
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
      plain: "In plain words: the earth is left completely level and bare — no buildings, no landmarks, nothing anyone built.\n\nThen a question is asked out loud with nobody left to answer it: to whom belongs the sovereignty today? And it is answered by the One who asked.",
      plainAr: "بكلامٍ بسيط: تُترك الأرض قاعًا صفصفًا مستويةً عاريةً: لا بناءَ ولا معلَمَ ولا أثرَ لشيءٍ صنعه أحد.\n\nثم يُنادى بسؤالٍ ولا أحد يُجيب: ﴿لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ﴾. فيُجيب عنه السائلُ سبحانه.",
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
      plain: "In plain words: there is a gap of forty between the two blasts. Abu Hurairah was asked forty what — forty days, months, years? — and he said: I refuse to answer. That is in al-Bukhari, and it is a companion declining to guess.\n\nAnd one part of the body does not decay: the tailbone. From it the person is put together again — which is why what comes back is you, not a copy of you.",
      plainAr: "بكلامٍ بسيط: بين النفختين أربعون. وسُئل أبو هريرة: أربعون ماذا؟ أربعون يومًا؟ شهرًا؟ سنة؟ فقال: أبيت. والخبرُ في البخاريّ، وهو صحابيٌّ يمتنع عن الظنّ.\n\nوشيءٌ واحدٌ من البدن لا يبلى: عَجْبُ الذَّنَب. ومنه يُركَّب الخلقُ ثانيةً — ولهذا كان العائدُ **أنت**، لا نسخةً منك.",
      en: "Between the two blasts there is a gap, and the hadith gives its length as a number with no unit. Abu Hurairah was asked: forty days? He refused to say. Forty months? He refused. Forty years? He refused.\n\nThat refusal is itself worth noticing. The companion who narrated it would not fill in what he had not been told, and neither should anyone else.\n\nIn the same narration: everything of a human being decays except one bone — the coccyx, the very base of the spine — and from it the person is put together again.",
      ar: "بين النفختين مدّة، وجاء في الحديث عددُها بلا وحدة. سُئل أبو هريرة: أربعون يومًا؟ فأبى. أربعون شهرًا؟ فأبى. أربعون سنة؟ فأبى.\n\nوهذا الإباء نفسه ممّا يُتأمَّل: فالصحابيُّ الراوي امتنع أن يملأ ما لم يُخبَر به، وكذلك ينبغي لغيره.\n\nوفي الحديث نفسه: يبلى كلُّ شيءٍ من الإنسان إلا عظمًا واحدًا، وهو عَجْبُ الذَّنَب، أسفلُ الصلب، ومنه يُركَّب الخلق.",
      verse: { ar: "", en: "“Between the two blowings of the trumpet there will be forty.” … “Everything of the human body will decay except the coccyx bone, and from it the creation will be put together again.”", ref: "Sahih al-Bukhari 4814 and 4935 — Abu Hurairah" },
      strength: "hadith"
    },
    {
      h: "The raising — rain, and people coming up like plants",
      hAr: "البعث — مطرٌ، وخروجُ الناس كما ينبت النبات",
      plain: "In plain words: water is sent down and people grow out of the earth the way plants do after rain.\n\nThe image is chosen on purpose. Reviving dead ground is something everyone has already watched happen — so the argument is not asking you to imagine something new, it is pointing at something you see every year.",
      plainAr: "بكلامٍ بسيط: يُنزَّل ماءٌ فينبت الناس من الأرض كما ينبت الزرعُ بعد المطر.\n\nوالتشبيهُ مقصود: فإحياءُ الأرض بعد موتها أمرٌ رآه كلُّ أحد. فليست الحجّةُ تطلب منك أن تتخيّل شيئًا جديدًا، وإنما تُشير إلى ما تراه كلّ سنة.",
      en: "Then rain comes down and human beings grow out of the earth the way vegetation grows. The image in the narrations is agricultural, not mechanical: something is planted, something rains, something comes up.\n\nAnd the ground they are gathered on is described in Sahih al-Bukhari as reddish-white land like a pure loaf of bread — with, the narrator adds, no landmark on it for anybody. Nowhere to go, and nothing to recognise.",
      ar: "ثم يُنزل الله مطرًا، فينبت الناس من الأرض كما ينبت النبات. والصورة في الأخبار زراعيّةٌ لا آليّة: بذرٌ يُوضع، ومطرٌ ينزل، وخَلقٌ يخرج.\n\nوالأرض التي يُجمعون عليها موصوفةٌ في صحيح البخاري بأنها أرضٌ بيضاء يعلوها حمرة كقُرصة النقيّ — قال الراوي: ليس فيها معلمٌ لأحد. فلا موضعَ يُقصد، ولا شيءَ يُعرَف.",
      verse: { ar: "", en: "“The people will be gathered on the Day of Resurrection on reddish-white land like a pure loaf of bread.” Sahl added: that land will have no landmark for anybody.", ref: "Sahih al-Bukhari 6521 — Sahl ibn Sa'd" },
      strength: "hadith"
    },
    {
      h: "And from here, the rest of this page",
      hAr: "ومن هنا يبدأ سائر هذه الصفحة",
      plain: "In plain words: the world has ended and the people are standing. From this point the rest of the page takes over — the standing, the intercession, the settling of rights, the Scales, the Bridge.\n\nSo this section is not a separate topic. It is the first chapter, and everything below it is what happens next.",
      plainAr: "بكلامٍ بسيط: انتهت الدنيا وقام الناس. ومن هذا الموضع تبدأ بقيّةُ الصفحة: الموقفُ والشفاعةُ والقصاصُ والموازينُ والصراط.\n\nفليس هذا القسمُ موضوعًا مستقلًّا، وإنما هو الفصل الأوّل، وما تحته هو ما يجري بعده.",
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
    { en: "His own being sent. He said: “I have been sent, and the Hour, like these two” — and here he did something with his hands, which the narration records and which is the whole point of the statement.\n\nWHAT HE ACTUALLY DID: he held up his index finger and the middle finger beside it, joined together. Two fingers side by side, touching.\n\nAnd that is the meaning. He was not saying the Hour is far. He was saying that between his being sent and the Hour there is only the gap between these two fingers — and the only gap between them is that one is slightly longer than the other. In another wording he said exactly that: they are like these two, and one has almost nothing on the other.\n\nSo the sign is not something still to come. It happened. He himself, standing there, was the sign — and he was showing his companions with his hand how little was left.",
      ar: "بعثته نفسها. قال ﷺ: «بُعثتُ أنا والساعة كهاتين»، وصنع بيده شيئًا نقلته الرواية، وفيه مقصود الحديث كلّه.\n\nوالذي صنعه: أنه رفع السبّابة والوسطى التي تليها مقرونتين، إصبعين متلاصقتين.\n\nوهذا هو المعنى. فلم يُرد أنّ الساعة بعيدة، وإنما أراد أنّ بين بعثته وبين الساعة قدرَ ما بين هاتين الإصبعين، وليس بينهما إلا فضلُ إحداهما على الأخرى في الطول. وجاء في لفظٍ آخر التصريح بذلك: كهاتين، وما كادت إحداهما تفضل الأخرى.\n\nفالعلامة إذن ليست منتظَرة، بل قد وقعت. وهو ﷺ قائمٌ بينهم كان هو العلامة، وكان يُري أصحابه بيده كم بقي.",
      ref: "Sahih al-Bukhari 6503 and 4936 — Sahl ibn Sa'd", strength: "hadith" },
    { en: "The splitting of the moon, which Surah Al-Qamar opens with: “The Hour has drawn near, and the moon has split.”",
      ar: "انشقاق القمر، وقد افتُتحت به سورة القمر: ﴿ٱقْتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلْقَمَرُ﴾.",
      ref: "Surah Al-Qamar (54:1); also al-Bukhari and Muslim", strength: "quran" },
    { en: "The contraction of time — that a period passes faster than it used to. It is in the narrations, and it is better kept as it was said than explained with physics.",
      ar: "تقارب الزمان، وأنّ المدّة تمرّ أسرع ممّا كانت. وهو في الأخبار، وإبقاؤه على ما قيل أولى من تفسيره بالفيزياء.",
      ref: "Sahih al-Bukhari, Book of Fitan", strength: "hadith" }
  ],
  notEstablished: "The popular lists of minor signs run to a hundred items or more and mix authentic narrations with weak and fabricated ones without distinguishing them. Only a few are given here, and only where the source is solid. A short honest list is worth more than a long one you cannot rely on.",
  notEstablishedAr: "وتبلغ قوائم العلامات الصغرى المشهورة مئةً فأكثر، ويُخلط فيها الصحيح بالضعيف والموضوع بلا تمييز. فلم يُذكر هنا إلا القليل، وحيث كان المصدر متينًا. وقائمةٌ قصيرةٌ صادقة خيرٌ من طويلةٍ لا يُوثق بها."
};


/* ------------------------------------------------------------
   JUDGEMENT_DETAIL — the questions the page did not answer
   ------------------------------------------------------------
   How long the Day is · what you are asked FIRST (and the two
   different "firsts", which is the thing most people have never
   been told apart) · the sun and the sweat · the Bridge, what is
   under it, what tries to pull you off it, and how fast people
   cross · who goes first · how people are brought back out of
   the Fire · and what happens the moment Paradise is entered.

   Everything here was read out of the source text before it was
   written. The long Bridge material is one hadith — al-Bukhari
   806 and 6573, both from Abu Hurairah — and the speeds come
   from Sahih Muslim's Book of Faith. Nothing is filled in from
   memory between them.
   ------------------------------------------------------------ */

const JUDGEMENT_DETAIL = {
  title: "The details — how long, what is asked first, and the crossing",
  titleAr: "التفاصيل — كم تطول، وعمَّ تُسأل أوّلًا، والعبور",
  lead: "The questions people actually have about that Day, answered from the Quran and the two Sahihs.",
  leadAr: "الأسئلة التي تدور في نفوس الناس عن ذلك اليوم، مُجابةً من القرآن والصحيحين.",

  sections: [
    {
      id: "jd-length",
      plain: "In plain words: the Day is long. Fifty thousand years is the figure the Quran gives.\n\nBut do not get stuck on the arithmetic — that is not what the number is for. It is there so you understand that this is not a quick hearing you stand through. And the same reports say it is made light for the believer, short as the gap between two prayers. So the length is not fixed for everyone: what you carry decides how long it feels.",
      plainAr: "بكلامٍ بسيط: اليوم طويل، والرقم الذي ذكره القرآن خمسون ألف سنة.\n\nولا تقف عند الحساب، فليس هذا هو المقصود من الرقم. المقصود أن تعرف أنّ الأمر ليس جلسةً قصيرةً تنتهي بسرعة. وفي الأخبار نفسها أنه يُخفَّف على المؤمن حتى يصير كالوقت بين صلاتين. فالطول إذن ليس واحدًا على الجميع: ما تحمله أنت هو الذي يُحدّد كم يطول عليك.",
      h: "How long is the Day — fifty thousand years",
      hAr: "كم يطول اليوم — خمسون ألف سنة",
      en: "The Quran gives the figure directly: a Day whose measure is fifty thousand years. And the Prophet ﷺ used the same number when describing the man who withheld the zakat of his wealth — he is dealt with “during a day the extent of which is fifty thousand years”, and only then is his path shown to him.\n\nThere is a second figure in the Quran — a day whose measure is a thousand years, in Surah As-Sajdah 32:5 — and the scholars discussed the two. The most careful position is that they are not in conflict: they describe different matters, or the same Day measured from different angles. Ibn Abbas was asked about exactly this pairing and is reported to have said they are two different days. What is agreed is that the length is not our length, and that arguing the arithmetic is not the point of either verse.\n\nAnd there is a mercy inside the number that is worth knowing. It is narrated that for the believer that Day will be made light — as short as the time between one prayer and the next. That narration is in the Musnad of Ahmad and is OUTSIDE the two Sahihs, so it is given here as that and not more.",
      ar: "جاء العدد في القرآن صريحًا: ﴿فِى يَوْمٍۢ كَانَ مِقْدَارُهُۥ خَمْسِينَ أَلْفَ سَنَةٍۢ﴾. واستعمل النبيُّ ﷺ العدد نفسه في وصف مانع زكاة ماله: يُقضى فيه ﴿فِى يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ﴾، ثم يُرى سبيله بعد ذلك.\n\nوفي القرآن عددٌ آخر: يومٌ مقداره ألف سنة، في السجدة ٣٢:٥، وقد تكلّم أهل العلم في الجمع بينهما. وأحوطُ الأقوال أنهما لا يتعارضان: فهما في أمرين مختلفين، أو في اليوم نفسه من جهتين. وقد سُئل ابن عباس عن هذا التقابل بعينه فرُوي عنه أنهما يومان مختلفان. والمتّفق عليه أنّ الطول ليس بطولنا، وأنّ المماحكة في الحساب ليست مقصود الآيتين.\n\nوفي العدد رحمةٌ يحسن علمها: فقد رُوي أنّ ذلك اليوم يُخفَّف على المؤمن حتى يكون كقدر ما بين صلاتين. وهذا في مسند أحمد، وهو خارج الصحيحين، فيُذكر على أنه كذلك لا أكثر.",
      refs: ["Surah Al-Ma'arij (70:4)", "Surah As-Sajdah (32:5)", "Sahih Muslim, Book of Zakat — Abu Hurairah", "Musnad Ahmad — outside the two Sahihs"],
      strength: "quran"
    },
    {
      id: "jd-first",
      plain: "In plain words: the very first case opened between people is not money, not property, not who insulted whom. It is who took a life.\n\nAnd it is wider than murder. Scholars include everyone who had a hand in it — the one who ordered it, the one who helped, the one who stayed silent when a word from him would have stopped it.\n\nWhat to take from it: the things we treat as small — a fight that got out of hand, a rumour that got someone hurt, a road you drove badly on — sit at the FRONT of the queue, not the back. And the other half is the easy half: your own prayer is the first thing looked at, and if it is short, your voluntary prayers are used to fill the gap. That is not a threat. It is being told which two things to fix first.",
      plainAr: "بكلامٍ بسيط: أوّل قضيّةٍ تُفتح بين الناس ليست مالًا، ولا أرضًا، ولا من شتم من. أوّل شيء: من أزهق روحًا.\n\nوالأمر أوسع من القتل المباشر. أهل العلم يُدخلون فيه كلّ من كان له يد: من أمر، ومن أعان، ومن سكت وكلمةٌ منه كانت تكفي.\n\nوالذي تأخذه من هذا: الأشياء التي نعدّها صغيرة — خصامٌ خرج عن حدّه، وكلامٌ تسبّب في أذى أحد، وقيادةُ سيّارةٍ بغير مبالاة — هذه في **أوّل** الدور لا في آخره. والنصف الثاني سهل: صلاتُك أوّل ما يُنظر فيه، وإن كان فيها نقص أُكمل من النوافل. وليس هذا تخويفًا، وإنما هو إخبارٌ لك بأيّ شيئين تبدأ.",
      h: "What you are asked FIRST — and there are two different firsts",
      hAr: "عمَّ تُسأل أوّلًا — وهما أوّلان لا أوّلٌ واحد",
      en: "This is one of the most useful things on this page, because two authentic reports both say “the first”, and they are not describing the same thing at all.\n\nTHE FIRST OF YOUR OWN DEEDS TO BE RECKONED IS THE PRAYER. If it is sound, the rest of the deeds go well; if it is ruined, the rest are ruined. The narration adds that when a shortfall is found in the obligatory prayers, Allah says: look whether My servant has any voluntary prayers — and the shortfall in the fard is completed from the nawafil. This is narrated by at-Tirmidhi, an-Nasa'i and Abu Dawud, and is OUTSIDE the two Sahihs. It is widely relied on and it is stated here as what it is.\n\nTHE FIRST MATTER JUDGED BETWEEN PEOPLE IS BLOODSHED. That one is in Sahih Muslim, from Ibn Mas'ud: the first thing decided among people on the Day of Judgment will pertain to blood.\n\nPut them side by side and the picture is exact. Between you and Allah, the first thing opened is your prayer. Between you and other people, the first thing opened is what you did to their lives. Neither report contradicts the other, and hearing only one of them leaves a person with half the answer.",
      ar: "وهذه من أنفع ما في هذه الصفحة، لأنّ خبرين ثابتين كلاهما يقول «أوّل»، وليسا في شيءٍ واحد أصلًا.\n\nأوّلُ ما يُحاسَب به العبد من عمله: الصلاة. فإن صلَحت صلَح سائر عمله، وإن فسَدت فسَد سائره. وفي الخبر أنه إذا انتقص من الفريضة شيء قال الله: انظروا هل لعبدي من تطوّع؟ فيُكمَّل بها ما نقص من الفريضة. أخرجه الترمذي والنسائي وأبو داود، وهو خارج الصحيحين، وعليه عملُ الناس، ويُذكر هنا على حقيقته.\n\nوأوّلُ ما يُقضى بين الناس: الدماء. وهذا في صحيح مسلم عن ابن مسعود: «أوّل ما يُقضى بين الناس يوم القيامة في الدماء».\n\nفإذا قُرن الخبران استبان الأمر على وجهه: فبينك وبين الله يُفتح أوّلًا بابُ صلاتك، وبينك وبين الناس يُفتح أوّلًا ما صنعتَ بأرواحهم. ولا تعارض بينهما، ومن سمع أحدهما وحده فقد بقي معه نصف الجواب.",
      refs: ["at-Tirmidhi, an-Nasa'i, Abu Dawud — outside the two Sahihs", "Sahih Muslim, Book of Qasamah — Ibn Mas'ud"],
      strength: "hadith"
    },
    {
      id: "jd-sun",
      plain: "In plain words: it is hot, everyone is standing, and everyone is sweating — but not the same amount. Some are sweating to the ankles, some to the knees, some are drowning in it.\n\nThe difference is not body size or where you are standing. It is what you did. Picture a crowded place on the hottest day you have known, with no shade and no water, and you will have the idea.",
      plainAr: "بكلامٍ بسيط: الحرّ شديد، والناس واقفون، وكلّهم يعرقون — لكن ليس بالقدر نفسه. منهم من يبلغ العرقُ كعبيه، ومنهم ركبتيه، ومنهم من يغرق فيه.\n\nوالفرق ليس في حجم الجسم ولا في موضع وقوفك، وإنما في عملك. تخيّل مكانًا مزدحمًا في أشدّ يومٍ حرًّا مرّ بك، بلا ظلٍّ ولا ماء، تقترب من الصورة.",
      h: "The sun brought near, and the sweat",
      hAr: "دنوّ الشمس، والعرق",
      en: "The sun is brought near on that Day, and people sweat. The Prophet ﷺ said the sweat will reach up to the middle of the ears.\n\nAnd it is not the same for everyone. The narrations describe people differing in it according to their deeds — some to the ankles, some to the knees, some to the waist, and some whom the sweat bridles at the mouth. The same standing, and people are not in it equally.\n\nIt is at that point, in the same hadith, that people begin going from prophet to prophet asking for the standing to begin — which is the Great Intercession, stage 5 above.",
      ar: "تُدنى الشمس في ذلك اليوم فيعرق الناس. قال النبيُّ ﷺ إنّ العرق يبلغ أنصاف الآذان.\n\nوليسوا فيه سواء. ففي الأخبار أنّ الناس يتفاوتون فيه بأعمالهم: فمنهم من يبلغ كعبيه، ومنهم من يبلغ ركبتيه، ومنهم من يبلغ حَقْوَيه، ومنهم من يُلجمه العرق إلجامًا. موقفٌ واحد، والناس فيه غير متساوين.\n\nوعند ذلك — في الحديث نفسه — يأخذ الناس يذهبون من نبيٍّ إلى نبيّ يسألون أن يُقضى بينهم، وهي الشفاعة العظمى، وهي المرحلة الخامسة المتقدّمة.",
      refs: ["Sahih al-Bukhari 1474 and 1475 — Abdullah ibn Umar", "Sahih Muslim, Book of Paradise"],
      strength: "hadith"
    },
    {
      id: "jd-bridge",
      plain: "In plain words: there is a crossing, and underneath it is the Fire itself — not a drop, not darkness, the Fire.\n\nThe surface is slippery. And there are hooks along it that reach out and catch people. The Prophet ﷺ compared them to the thorns of a desert tree his companions knew by sight, then said their real size is known only to Allah.\n\nThe part that matters: the hooks catch people ACCORDING TO WHAT THEY DID. They are not random and they do not catch everyone. Three things happen — some cross safely, some get scratched and are let through, some do not get across.",
      plainAr: "بكلامٍ بسيط: هناك جسرٌ يُعبَر، وتحته النار نفسها — لا هُوّة ولا ظلام، بل النار.\n\nوسطحه زلق. وعليه كلاليب تمتدّ فتخطف الناس. شبّهها النبيّ ﷺ بشوك شجرةٍ صحراويّةٍ كان أصحابه يعرفونها بأعينهم، ثم قال إنّ حجمها الحقيقيّ لا يعلمه إلا الله.\n\nوالمهمّ في الأمر: أنّ هذه الكلاليب تخطف الناس **بحسب أعمالهم**. فهي لا تُصيب اعتباطًا ولا تُصيب الجميع. والذي يقع ثلاثة: ناجٍ يعبر سالمًا، ومخدوشٌ يُترك فيمرّ، ومن لا يعبر.",
      h: "The Bridge — what is under it, and what reaches up for you",
      hAr: "الصراط — ما تحته، وما يمتدّ إليك منه",
      en: "The Bridge is laid across Hell. That is what is underneath: not a valley, not darkness — the Fire itself.\n\nThe Prophet ﷺ described the surface of it in one phrase: a place where feet slip. It is not level ground.\n\nAnd this answers the question directly — what reaches up to pull people off it. There are HOOKS on it, and he compared them to the thorns of the sa'dan, a thorny tree of Najd his companions knew by sight. He asked them: have you seen the thorns of the sa'dan? They said yes. He said: they are like them, except that how great they are in size is known to nobody but Allah. Another wording adds tongs and spits.\n\nThen the sentence that decides everything: these hooks snatch people ACCORDING TO THEIR DEEDS. They are not random and they are not indiscriminate. What a person carries across is what determines whether anything reaches him.\n\nAnd the outcomes are three, stated plainly: some pass and are saved, some are lacerated and then let go, and some are pushed into the Fire.",
      ar: "يُضرب الصراط على جهنّم. فهذا ما تحته: ليس واديًا ولا ظلمة، بل النار نفسها.\n\nووصف النبيُّ ﷺ متنه بكلمة: «مَدْحَضةٌ مَزِلّة»، أي موضعٌ تزلّ فيه الأقدام. فليس بأرضٍ مستوية.\n\nوهذا جوابُ السؤال على وجهه: ما الذي يمتدّ إلى الناس فيخطفهم؟ عليه كلاليبُ شبّهها بشوك السَّعْدان، وهي شجرةٌ ذات شوكٍ بنجدٍ يعرفها أصحابه بأعينهم. فقال لهم: هل رأيتم شوك السعدان؟ قالوا: نعم. قال: فإنها مثلها، غير أنه لا يعلم قدرَ عِظَمها إلا الله. وفي لفظٍ آخر: خطاطيفُ وكلاليبُ وحسَكة.\n\nثم الجملة التي يدور عليها الأمر: أنّ هذه الكلاليب تخطف الناس **بأعمالهم**. فليست عشوائيّةً ولا تُصيب من غير تمييز، وإنما الذي يحمله المرء في عبوره هو الذي يُحدّد أيناله شيءٌ منها أم لا.\n\nوالمآلات ثلاثةٌ مذكورةٌ صريحًا: ناجٍ مُسلَّم، ومخدوشٌ مُرسَل، ومكدوسٌ في النار.",
      refs: ["Sahih al-Bukhari 806 and 6573 — Abu Hurairah", "Sahih Muslim, Book of Faith"],
      strength: "hadith"
    },
    {
      id: "jd-speeds",
      plain: "In plain words: everyone crosses the same bridge, but not at the same speed — and the speed comes from what you brought with you.\n\nThe fastest cross before you finish blinking. Then like lightning, then like wind, then like a bird, then like a good horse at full run. Then walking. Then some crawl.\n\nSo it is one road and one distance, and the difference is entirely in the person. Think of the same street with one man on a motorbike and another dragging himself along it.",
      plainAr: "بكلامٍ بسيط: الجميع يعبرون الجسر نفسه، لكن ليس بالسرعة نفسها — والسرعة من الذي حملتَه معك.\n\nأسرعهم يعبر قبل أن تُتمّ رمشة عينك. ثم كالبرق، ثم كالريح، ثم كالطير، ثم كالفرس الجواد في أشدّ جريه. ثم مشيًا. ثم منهم من يزحف.\n\nفالطريق واحد والمسافة واحدة، والفرق كلّه في الشخص نفسه. تخيّل شارعًا واحدًا، فيه رجلٌ على درّاجةٍ ناريّة وآخر يجرّ نفسه فيه جرًّا.",
      h: "How fast you cross — and it is by what you carried",
      hAr: "سرعة العبور — وهي على قدر ما حملتَ",
      en: "This is answered in Sahih Muslim in a single line, and the order is a descending scale:\n\n· in the twinkling of an eye\n· like lightning\n· like the wind\n· like a bird\n· like the finest horses and camels\n\nAnd then the ones who are not carried at all: those who go across scratched and released, and those who do not get across.\n\nThe scale is not arbitrary. The believers pass at the speed their deeds carry them, and the fastest of them cross before a person has finished blinking. In the same passage the Prophet ﷺ says that no one will plead more fiercely for anything than the believers will plead for their brothers left in the Fire, saying: our Lord, they used to fast with us, and pray, and make hajj.",
      ar: "جاء جوابه في صحيح مسلم في سطرٍ واحد، والترتيب نازلٌ من الأعلى:\n\n· كطرْف العين\n· كالبرق\n· كالريح\n· كالطير\n· كأجاويد الخيل والرِّكاب\n\nثم الذين لا تحملهم أعمالهم: فناجٍ مخدوشٌ مُرسَل، ومكدوسٌ لا يعبر.\n\nوليس هذا التفاوت اعتباطًا: فالمؤمنون يمرّون على قدر ما تحملهم أعمالهم، وأسرعهم يقطعه قبل أن يُتمّ المرء طرفة عينه. وفي السياق نفسه يقول النبيُّ ﷺ إنه ليس أحدٌ أشدّ مناشدةً في الحقّ من المؤمنين لإخوانهم الذين بقوا في النار، يقولون: ربَّنا، كانوا يصومون معنا ويصلّون ويحجّون.",
      refs: ["Sahih Muslim, Book of Faith"],
      strength: "hadith"
    },
    {
      id: "jd-first-across",
      plain: "In plain words: our Prophet ﷺ goes first, and this ummah goes behind him.\n\nAnd on that bridge nobody is talking. Not one person — except the prophets, and all they are saying is two words, over and over: O Allah, keep them safe. That is what your prophet is doing while you cross.",
      plainAr: "بكلامٍ بسيط: نبيّنا ﷺ يعبر أوّلًا، وهذه الأمّة خلفه.\n\nولا أحد يتكلّم على ذلك الجسر. ولا واحد — إلا الأنبياء، وكلُّ ما يقولونه كلمتان تتكرّران: اللهمّ سلِّم سلِّم. هذا ما يصنعه نبيُّك وأنت تعبر.",
      h: "Who crosses first — and the only words spoken",
      hAr: "من يعبر أوّلًا — والكلمة الوحيدة التي تُقال",
      en: "He said it about himself plainly: “I shall be the first among the Messengers to cross it, with my followers.”\n\nSo this ummah goes first, behind him.\n\nAnd then a detail that says more than a page of description could. On that Bridge nobody speaks — nobody at all — except the Messengers. And what the Messengers say is not a sermon. It is two words, repeated: Allahumma sallim, sallim. O Allah, keep them safe, keep them safe.\n\nThat is what the prophets are doing while their nations cross.",
      ar: "قاله عن نفسه صريحًا: «وأكون أوّل من يجوز من الرسل بأمّته».\n\nفهذه الأمّة تعبر أوّلًا، خلفه ﷺ.\n\nثم تفصيلٌ يقول ما لا تقوله صفحةٌ من الوصف: أنه لا يتكلّم على الصراط أحدٌ البتّة إلا الرسل. وليس الذي يقولونه خطبةً، وإنما كلمتان تتردّدان: «اللهمّ سلِّم سلِّم».\n\nهذا هو صنيع الأنبياء وأممُهم تعبر.",
      refs: ["Sahih al-Bukhari 806 — Abu Hurairah"],
      strength: "hadith"
    },
    {
      id: "jd-out",
      plain: "In plain words: not everyone who falls stays there. People who believed in Allah alone are brought back out.\n\nAnd the way the angels recognise them is the mark of sujud — the place on the forehead that touched the ground. The Fire is not permitted to eat that one spot. Everything else of them burns; that mark stays, and it is what identifies them.\n\nThen water is poured over them and they grow back the way a seed grows after rain.",
      plainAr: "بكلامٍ بسيط: ليس كلُّ من سقط يبقى هناك. فالذين كانوا يعبدون الله وحده يُخرجون.\n\nوالذي تعرفهم به الملائكة أثرُ السجود — الموضع من الجبهة الذي لامس الأرض. فالنار لا يُؤذن لها في هذا الموضع وحده. يحترق منهم كلُّ شيءٍ سواه، ويبقى ذلك الأثر، وبه يُعرفون.\n\nثم يُصبّ عليهم ماء فينبتون كما تنبت الحبّة بعد المطر.",
      h: "Brought back out of the Fire — recognised by one mark",
      hAr: "الإخراج من النار — ويُعرَفون بعلامةٍ واحدة",
      en: "Some of those who fall are not left there. When Allah intends mercy on whom He wills among the people of the Fire who worshipped none but Him, the angels are ordered to bring them out.\n\nAnd here is how the angels know them: by the traces of prostration. Allah has forbidden the Fire to consume the marks of sujud on the body of the son of Adam. The Fire eats everything else; that one place it is not permitted to touch. They come out as skeletons, and it is the mark on the forehead that identified them.\n\nThen the Water of Life is poured over them, and they grow the way a seed grows on the bank of a stream — the same agricultural image as the raising.",
      ar: "وليس كلُّ من سقط يُترك. فإذا أراد الله رحمة من شاء من أهل النار ممّن كان لا يعبد إلا إيّاه، أمر الملائكة أن يُخرجوهم.\n\nوهذا وجهُ معرفة الملائكة إيّاهم: آثارُ السجود. فقد حرّم الله على النار أن تأكل أثر السجود من ابن آدم. فالنار تأكل كلّ شيءٍ منه، وذلك الموضع وحده لا يُؤذن لها فيه. فيخرجون وقد صاروا حُمَمًا، وإنما دلّ عليهم الأثرُ في الجبهة.\n\nثم يُصبّ عليهم ماء الحياة، فينبتون كما تنبت الحبّة في حَمِيل السيل — وهي صورةُ البعث نفسها.",
      refs: ["Sahih al-Bukhari 806 and 6573 — Abu Hurairah"],
      strength: "hadith"
    },
    {
      id: "jd-last-man",
      plain: "In plain words: this is the story of the very last person to get into Paradise — the one at the absolute bottom.\n\nHe keeps asking for one small thing, promising not to ask again, then asking again. Anyone would expect him to be refused.\n\nInstead he keeps going until Allah SMILES at him — and then he is let in and told: wish for what you want. He wishes until he runs out of things to wish for, and is told: you get all of that, and the same again on top.\n\nThat is the LAST one in. Read it when you think you are too far gone.",
      plainAr: "بكلامٍ بسيط: هذه قصّة آخر واحدٍ يدخل الجنّة — الذي في أسفل القائمة تمامًا.\n\nيسأل شيئًا صغيرًا ويعاهد ألّا يسأل غيره، ثم يسأل من جديد. وكلُّ أحدٍ يتوقّع أن يُردّ.\n\nفإذا به يمضي في السؤال حتى **يضحك الله** منه، فيُؤذن له بالدخول ويُقال له: تمنَّ. فيتمنّى حتى تنقطع أمانيه، فيُقال له: لك هذا ومثله معه.\n\nوهذا **آخرهم** دخولًا. اقرأها إذا ظننتَ أنّ أمرك قد فات.",
      h: "The last man to enter Paradise",
      hAr: "آخر أهل الجنّة دخولًا",
      en: "The hadith ends with one man left between Paradise and the Fire, and the exchange is worth reading in full because of how it ends.\n\nHe asks only to have his face turned away from the Fire. Allah says: if I do, will you ask for something else? He swears he will not. His face is turned away.\n\nThen he asks to be brought near the gate of Paradise. Allah says: did you not promise? Woe to you, son of Adam, how treacherous you are. He swears again. He is brought near.\n\nThen he sees what is inside, and stays silent as long as Allah wills — and then asks to enter. And he is reminded of his promise again.\n\nAnd then the line the whole hadith was built for: he keeps asking until ALLAH SMILES because of him, and when Allah smiles at him, He permits him to enter. And he is told: wish. And he wishes until he runs out of wishes — and is told: all of that, and the same again with it, is yours.\n\nThat is the LAST man in. The one at the very bottom of the list.",
      ar: "يختم الحديث برجلٍ يبقى بين الجنّة والنار، وحقُّ محاورته أن تُقرأ بتمامها لأجل خاتمتها.\n\nيسأل أن يُصرَف وجهه عن النار لا غير. فيقول الله: إن فعلتُ فلعلّك تسأل غير ذلك؟ فيُعطي العهد ألّا يسأل. فيُصرَف وجهه.\n\nثم يسأل أن يُدنى من باب الجنّة. فيقول الله: أليس قد أعطيتَ العهد؟ ويحك يا ابن آدم ما أغدرك! فيعاهد ثانيةً. فيُدنى.\n\nثم يرى ما فيها فيسكت ما شاء الله أن يسكت، ثم يسأل الدخول. فيُذكَّر بعهده مرّةً أخرى.\n\nثم الجملة التي سيق الحديث لأجلها: لا يزال يسأل حتى **يضحك الله** منه، فإذا ضحك منه أذن له بالدخول. ثم يُقال له: تمنَّ. فيتمنّى حتى تنقطع به الأماني، فيُقال: لك ذلك ومثله معه.\n\nوهذا **آخرُ** من يدخل، الذي في أسفل القائمة.",
      refs: ["Sahih al-Bukhari 6573 — Abu Hurairah"],
      strength: "hadith"
    },
    {
      id: "jd-paradise",
      plain: "In plain words: the first thing served in Paradise is a specific dish — the extra lobe of a fish's liver. Not a general description of a feast; a named thing.\n\nAnd what it is eaten with is the strange, beautiful part: the earth itself becomes one loaf of bread. The same ground everybody stood on all through that terrifying Day turns into the bread of the welcome meal.",
      plainAr: "بكلامٍ بسيط: أوّل طعامٍ يُقدَّم في الجنّة شيءٌ معيَّن: زيادةُ كبد الحوت. ليس وصفًا عامًّا لمأدبة، بل شيءٌ مُسمًّى.\n\nوالعجيب الجميل هو ما يُؤكل به: الأرض نفسها تصير رغيفًا واحدًا. الأرض التي وقف عليها الناس ذلك اليوم المُخيف كلَّه تتحوّل إلى خبز طعام الاستقبال.",
      h: "The moment you enter — what is served first",
      hAr: "لحظة الدخول — وأوّل ما يُقدَّم",
      en: "Abdullah ibn Salam, a scholar of the Jews of Madinah, came to the Prophet ﷺ when he arrived and put three questions to him that he said only a prophet could answer. One of them was: what is the first meal the people of Paradise will eat?\n\nThe answer: the extra lobe of the fish liver. Not a description of a banquet — a specific thing, named.\n\nAnd in another hadith, what it is eaten with: the earth itself, on that Day, becomes a single loaf, turned over in the Hand of the Most Merciful the way one of you turns his loaf over when travelling — as the welcome-meal for the people of Paradise.\n\nSo the ground everyone was standing on through the whole of that Day becomes the bread of the first meal. Nothing on this page connects more tightly than that: the place of terror becomes the food of arrival.",
      ar: "جاء عبد الله بن سلام، وكان حَبرًا من أحبار يهود المدينة، إلى النبيّ ﷺ حين قدم، فسأله ثلاثًا قال لا يعلمهنّ إلا نبيّ. إحداهنّ: ما أوّل طعامٍ يأكله أهل الجنّة؟\n\nفكان الجواب: **زيادةُ كبد الحوت**. ليس وصفًا لمأدبة، بل شيءٌ معيَّنٌ مُسمًّى.\n\nوفي حديثٍ آخر بيانُ ما يُؤكل به: أنّ الأرض تكون يوم القيامة **خُبزةً واحدة**، يتكفّؤها الجبّار بيده كما يتكفّأ أحدكم خبزته في السفر، نُزُلًا لأهل الجنّة.\n\nفالأرض التي وقف عليها الناس ذلك اليوم كلَّه تصير خبز أوّل طعام. وليس في هذه الصفحة وصلٌ أشدّ من هذا: موضعُ الهول يصير طعامَ القدوم.",
      refs: ["Sahih al-Bukhari 3329 — Anas", "Sahih al-Bukhari 6520 — Abu Sa'id al-Khudri"],
      strength: "hadith"
    },
    {
      id: "jd-first-sign",
      plain: "In plain words: you asked which one comes first, and there is an honest answer and an honest complication.\n\nThe answer: a fire that drives people from east to west. The complication: another authentic report calls a fire from Yemen the LAST of the ten. Scholars said they may be the same fire, counted first in one sense and last in another.\n\nWhat you should take away: nobody can hand you a numbered timetable, and anybody who does is adding to what was said.",
      plainAr: "بكلامٍ بسيط: سألتَ أيّها أوّلًا، وفي المسألة جوابٌ صريح وإشكالٌ صريح.\n\nالجواب: نارٌ تحشر الناس من المشرق إلى المغرب. والإشكال: أنّ حديثًا آخر صحيحًا يجعل نار اليمن **آخر** العشر. وقال أهل العلم قد تكونان نارًا واحدة، عُدّت أوّلًا باعتبارٍ وآخرًا باعتبار.\n\nوالذي تخرج به: أنّ أحدًا لا يستطيع أن يُعطيك جدولًا مرقّمًا، ومن فعل فقد زاد على ما قيل.",
      h: "Which sign comes first",
      hAr: "أيُّ العلامات أوّلًا",
      en: "You asked which of them happens first, and there is an authentic answer — in the same hadith of Abdullah ibn Salam's three questions.\n\nHis first question was: what is the first portent of the Hour? The Prophet ﷺ answered: a fire that will gather the people from the east to the west.\n\nNow the honest part. Compare that with the list of ten, where a fire coming out of Yemen driving people to their place of gathering is named as the LAST of them. The scholars discussed this, and the readings are: that they are the same fire, described as first of one series and last of another; or that “first portent” here means the first of the great signs in one respect while the Yemen fire is the last of them in another.\n\nWhat is certain is the text of both narrations. What is not settled is how exactly they line up, and this page does not pretend it is settled.",
      ar: "سألتَ أيُّها يقع أوّلًا، وفي المسألة جوابٌ ثابت، وهو في حديث عبد الله بن سلام نفسه.\n\nفكان سؤاله الأوّل: ما أوّل أشراط الساعة؟ فأجابه النبيُّ ﷺ: **نارٌ تحشر الناس من المشرق إلى المغرب**.\n\nوهذا موضع الإنصاف: قابِل ذلك بحديث العشر، وفيه أنّ نارًا تخرج من اليمن تطرد الناس إلى محشرهم هي **آخرها**. وقد تكلّم أهل العلم في ذلك، والأقوال: أنهما نارٌ واحدة وُصفت بأنها أوّل باعتبارٍ وآخر باعتبار؛ أو أنّ «أوّل الأشراط» هنا بمعنًى، ونار اليمن آخر الكبرى بمعنًى آخر.\n\nفالثابت نصُّ الحديثين، وأمّا وجه انتظامهما على التعيين فليس بمحسوم، ولا تدّعي هذه الصفحة حسمه.",
      refs: ["Sahih al-Bukhari 3329", "Sahih Muslim, Book of Fitan"],
      strength: "hadith"
    }
  ]
};
