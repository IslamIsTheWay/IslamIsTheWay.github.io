/* ============================================================
   FULL LIVES — the whole story, not a summary
   ============================================================
   For each person: who they were before Islam, how they entered it,
   what changed in them, the single thing they are most remembered
   for, and how they died.

   On sources. Where something is in Sahih al-Bukhari or Sahih Muslim
   it is cited with its number and that is the strongest there is.
   Much of a companion's life, however, is recorded in the sira and
   tabaqat literature — Ibn Ishaq as preserved by Ibn Hisham, Ibn Sa'd's
   Tabaqat, adh-Dhahabi's Siyar A'lam an-Nubala — which are historical
   works, not hadith collections held to the same standard. Where a
   detail comes from those, it says so on the entry itself rather than
   being blurred into the rest. A reader is entitled to know exactly how
   firm each thing is.

   `key` matches the id in COMPANIONS or PROPHETS in data.js.
   ============================================================ */
const FULL_LIVES = {

  "abu-bakr": {
    before: "A cloth merchant of Makkah, wealthy and widely liked. He was a genealogist of the Arabs — he knew the lineages of the tribes better than almost anyone — which made him a man whose word carried weight in a society built on lineage. He never drank alcohol in the days of ignorance, and never worshipped an idol.",
    beforeAr: "كان تاجر بَزٍّ من تجّار مكة، ذا مالٍ ومحبّةٍ في قومه، وكان أعلم الناس بأنساب العرب، وذلك مما رفع قدره في مجتمعٍ يقوم على النسب. ولم يشرب خمرًا في الجاهلية قط، ولم يسجد لصنم.",
    islam: "He believed the moment he was asked, without argument. When the Prophet ﷺ told the people of the Night Journey and Makkah mocked it, they came to Abu Bakr expecting him to break. He said: if he said it, he told the truth — and from that came his name, As-Siddiq.",
    islamAr: "آمن حين دُعي دون جدال. ولما أخبر النبي ﷺ بالإسراء وكذّبته قريش جاؤوا إلى أبي بكر يظنون أنه سيرتاب، فقال: إن كان قال ذلك فقد صدق. ومن هنا كان لقبه: الصدّيق.",
    change: "He spent his wealth buying and freeing tortured slaves — Bilal among them — until the money that had made him a notable in Makkah was gone. His father said he was freeing the weak; better to free strong men who would defend him. He answered that he wanted only what is with Allah.",
    changeAr: "أنفق ماله في عتق المستضعفين المعذَّبين، ومنهم بلال، حتى ذهب المال الذي كان به وجيهًا في مكة. فقال له أبوه: لو أعتقتَ رجالًا أشدّاء يمنعونك! فقال: إنما أريد ما عند الله.",
    greatest: "The cave. On the migration, hidden in Thawr with the search party overhead, he whispered that if one of them looked down he would see them — and the Prophet ﷺ answered: \"What do you think of two, when Allah is the third of them?\" Later, when the Prophet ﷺ died and even Umar could not accept it, it was Abu Bakr who stood before the people and said: whoever worshipped Muhammad, Muhammad has died; whoever worships Allah, Allah is alive and never dies.",
    greatestAr: "الغار. في الهجرة، وهما مختبئان في ثَور والطلب فوق رؤوسهما، قال: لو أن أحدهم نظر تحت قدميه لأبصرنا، فقال النبي ﷺ: «ما ظنُّك باثنين اللهُ ثالثهما؟». ثم لمّا تُوفي النبي ﷺ ولم يحتمل عمر الخبر، قام أبو بكر في الناس فقال: من كان يعبد محمدًا فإن محمدًا قد مات، ومن كان يعبد الله فإن الله حيٌّ لا يموت.",
    death: "He was caliph for about two years and three months. He died in Madinah and was buried beside the Prophet ﷺ. He left instructions that what he had taken from the public treasury be returned from his own property.",
    deathAr: "وَلِيَ الخلافة نحو سنتين وثلاثة أشهر، ثم تُوفي بالمدينة ودُفن إلى جوار النبي ﷺ. وأوصى أن يُردَّ ما أخذه من بيت المال من خاصّ ماله.",
    sources: [
      "The cave: Sahih al-Bukhari, Book of the Companions, Hadith 3653 — Sahih",
      "His speech at the Prophet's death: Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4454 — Sahih",
      "Freeing Bilal and the details of his trade and lineage: Ibn Ishaq (in Ibn Hisham's Sira) and Ibn Sa'd, Tabaqat — historical sira, not hadith"
    ]
  },

  "umar": {
    before: "A powerful, hot-tempered young man of Banu Adi, known for physical strength and for representing Quraysh as an envoy. He was among the fiercest enemies of the Muslims and beat those who accepted Islam, including a slave girl he owned.",
    beforeAr: "شابٌّ قويٌّ شديدٌ من بني عديّ، عُرف بالقوة وبأنه كان سفير قريش. وكان من أشدّ الناس على المسلمين، يضرب من أسلم، حتى جاريةً كانت له.",
    islam: "He set out with his sword to kill the Prophet ﷺ. On the way he was told his own sister had accepted Islam. He went to her house, struck her, and then saw blood on her face and fell silent. He asked for the page she was reading — it was Surah Ta-Ha — and after reading it he went straight to the Prophet ﷺ and accepted Islam. The Muslims prayed openly at the Kaaba for the first time after that.",
    islamAr: "خرج متقلّدًا سيفه يريد قتل النبي ﷺ، فقيل له: إن أختك قد أسلمت. فأتى بيتها فضربها، فلما رأى الدم على وجهها سكت، وطلب الصحيفة التي كانت تقرؤها — وكانت سورة طه — فلما قرأها انطلق إلى النبي ﷺ فأسلم. وصلّى المسلمون عند الكعبة ظاهرين بعد إسلامه.",
    change: "The same hardness became a shield for the weak. As caliph he walked the streets of Madinah at night, and the accounts of him carrying flour on his own back to a hungry family are among the most repeated things told of him.",
    changeAr: "تحوّلت تلك الشدّة نفسها حمايةً للضعفاء. فلما وَلِيَ الخلافة كان يعُسّ بالمدينة ليلًا، وأخباره في حمل الدقيق على ظهره إلى أهل بيتٍ جياع من أشهر ما رُوي عنه.",
    greatest: "The Prophet ﷺ said of him something said of no other companion: Sa'd ibn Abi Waqqas reported him saying, when Umar sought permission to enter and the women hurried to cover themselves — \"By Him in whose hand is my soul, Shaytan never meets you on a path but that he takes a path other than yours.\" His caliphate saw the conquests of Persia, Syria and Egypt, and the establishment of the Hijri calendar and the office of the judge.",
    greatestAr: "قال فيه النبي ﷺ ما لم يقله في غيره؛ روى سعد بن أبي وقّاص أنه لمّا استأذن عمر وبادر النساء إلى الحجاب قال ﷺ: «والذي نفسي بيده ما لَقِيَكَ الشيطان سالكًا فجًّا قطُّ إلا سلك فجًّا غير فجّك». وفي خلافته فُتحت فارس والشام ومصر، ووُضع التاريخ الهجري ونُظِّم القضاء.",
    death: "He was stabbed while leading the Fajr prayer by Abu Lu'lu'ah, a Persian slave, and died of the wounds. He asked Aishah رضي الله عنها for permission to be buried beside the Prophet ﷺ and Abu Bakr, and she gave it.",
    deathAr: "طُعن وهو يصلي الفجر إمامًا على يد أبي لؤلؤة المجوسي، فمات من جراحه. وكان قد استأذن عائشة رضي الله عنها أن يُدفن إلى جوار النبي ﷺ وأبي بكر فأذنت له.",
    sources: [
      "Shaytan taking another path: Sahih al-Bukhari, Book of the Beginning of Creation, Hadith 3294 — Sahih, agreed upon",
      "His acceptance of Islam and the account of his sister: Ibn Ishaq (in Ibn Hisham) and Ibn Sa'd, Tabaqat — historical sira",
      "His assassination and burial request: Sahih al-Bukhari, Book of the Companions, Hadith 3700 — Sahih"
    ]
  },

  "khadijah": {
    before: "A merchant of Makkah in her own right, of noble descent, who hired men to trade her caravans and was known as at-Tahirah, the pure one. She was twice widowed and had refused proposals from the leading men of Quraysh.",
    beforeAr: "كانت تاجرةً في مكة بمالها، شريفة النسب، تستأجر الرجال في تجارتها، وكانت تُدعى الطاهرة. تزوّجت قبله مرّتين ورُدَّ عنها أشراف قريش.",
    islam: "She employed Muhammad ﷺ before prophethood for his honesty, and it was she who proposed marriage. She was the first human being to believe in him — before any man, woman or child.",
    islamAr: "استأجرت محمدًا ﷺ قبل البعثة لأمانته، وهي التي عرضت عليه الزواج. وكانت أول من آمن به من الخلق جميعًا، قبل رجلٍ أو امرأةٍ أو صبيّ.",
    change: "She spent her entire fortune supporting him and the Muslims, and died with almost nothing after the boycott of Banu Hashim in the valley.",
    changeAr: "أنفقت مالها كلّه في نصرته ونصرة المسلمين، وماتت ولم يبقَ لها شيءٌ يُذكر بعد حصار بني هاشم في الشِّعب.",
    greatest: "When he came down from Hira shaking and said \"cover me\", and said he feared for himself, she did not doubt him for a moment. She answered: \"Never. By Allah, Allah will never disgrace you. You keep good relations with your kin, you carry the burden of the weak, you give to the destitute, you honour the guest, and you help those struck by calamity.\" The Prophet ﷺ later said Khadijah is the best of the women of this nation.",
    greatestAr: "لمّا نزل من حراء يرجُف فؤاده يقول: «زمِّلوني»، وقال: «لقد خشيتُ على نفسي»، لم تشكّ فيه لحظة، بل قالت: كلَّا واللهِ ما يُخزيك اللهُ أبدًا؛ إنك لتصِل الرحم، وتحمل الكَلّ، وتُكسِب المعدوم، وتقري الضيف، وتُعين على نوائب الحقّ. وقال ﷺ بعدُ: خديجة خير نساء هذه الأمة.",
    death: "She died in Makkah three years before the migration, in the year the Prophet ﷺ also lost his uncle Abu Talib — the year remembered as the Year of Sorrow. He continued to speak of her and to send gifts to her friends for the rest of his life, and Aishah رضي الله عنها said she was never jealous of any woman as she was of Khadijah, though she never met her.",
    deathAr: "تُوفيت بمكة قبل الهجرة بثلاث سنين، في العام الذي فقد فيه النبي ﷺ عمّه أبا طالب، وهو العام الذي سُمّي عام الحزن. وظلّ يذكرها ويصل صواحبها بقيّة عمره، وقالت عائشة رضي الله عنها: ما غِرتُ على امرأةٍ ما غِرتُ على خديجة، وما رأيتها قط.",
    sources: [
      "The first revelation and her answer: Sahih al-Bukhari, Book of Revelation, Hadith 3 — Sahih",
      "Best of the women of this nation: Sahih al-Bukhari, Book of the Prophets, Hadith 3432 — Sahih",
      "Aishah's words about her: Sahih al-Bukhari, Book of the Companions, Hadith 3816 — Sahih",
      "Her trade, her titles and the Year of Sorrow: Ibn Ishaq and Ibn Sa'd — historical sira"
    ]
  },

  "bilal": {
    before: "An Abyssinian slave in Makkah, owned by Umayyah ibn Khalaf. He had no protection of tribe or wealth — the two things that kept a man safe in that society.",
    beforeAr: "عبدٌ حبشيٌّ بمكة، مملوكٌ لأميّة بن خلف، لا عشيرة تحميه ولا مالٌ يمنعه، وهما ما كان يُعتصم بهما في ذلك المجتمع.",
    islam: "He accepted Islam early, and was dragged out into the heat of the desert with a rock on his chest to make him renounce it. He answered with one word, repeated: ahad, ahad — One, One.",
    islamAr: "أسلم مبكرًا، فكان يُخرَج إلى رمضاء مكة وتُوضع الصخرة على صدره ليرجع عن دينه، فما يزيد على كلمةٍ واحدة يردّدها: أحدٌ أحد.",
    change: "Abu Bakr bought him and set him free. From a man whose life was worth nothing he became the one whose voice called the whole city to prayer.",
    changeAr: "اشتراه أبو بكر فأعتقه، فصار من رجلٍ لا تُساوي حياته شيئًا إلى صاحب الصوت الذي يدعو المدينة كلّها إلى الصلاة.",
    greatest: "At Fajr the Prophet ﷺ said to him: \"Tell me the deed you did with most hope after entering Islam, for I heard the sound of your sandals ahead of me in Paradise.\" Bilal could think of nothing except that he never made wudu, by day or night, without praying with it whatever was written for him.",
    greatestAr: "قال له النبي ﷺ عند الفجر: «حدِّثني بأرجى عملٍ عملته في الإسلام، فإني سمعتُ دفَّ نعليك بين يديَّ في الجنة». فما وجد بلالٌ عملًا يذكره إلا أنه لم يتطهَّر طُهورًا في ساعةٍ من ليلٍ أو نهارٍ إلا صلّى بذلك الطُّهور ما كُتب له.",
    death: "He is reported to have left Madinah after the Prophet's death, unable to give the adhan there without him, and to have died in Syria.",
    deathAr: "ذُكر أنه خرج من المدينة بعد وفاة النبي ﷺ إذ لم يُطق الأذان بها بعده، وأنه تُوفي بالشام.",
    sources: [
      "His footsteps in Paradise: Sahih al-Bukhari, Book of Tahajjud, Hadith 1149 — Sahih",
      "His torture and 'ahad, ahad', and his death in Syria: Ibn Ishaq and Ibn Sa'd — historical sira, not in the two Sahihs"
    ]
  },

  "saad-ibn-muadh": {
    before: "A chief of the Aws in Yathrib, obeyed by his tribe, and thirty-one years old when he first heard of Islam.",
    beforeAr: "سيّد الأوس بيثرب، مُطاعٌ في قومه، وكان ابن إحدى وثلاثين سنة حين سمع بالإسلام.",
    islam: "Mus'ab ibn Umayr had been sent to Yathrib to teach. Sa'd came to him angry, spear in hand, to drive him out. Mus'ab said: sit and listen; if you like it, accept it, and if you hate it, we will leave you alone. He sat, listened, and accepted Islam — then went to his own people and said: your speech with your men and your women is forbidden to me until you believe. By evening there was not a household of Banu Abd al-Ashhal without a Muslim man and woman in it.",
    islamAr: "كان مصعب بن عمير قد بُعث إلى يثرب معلِّمًا، فأتاه سعدٌ مغضبًا شاهرًا رمحه ليُخرجه، فقال مصعب: اجلس فاسمع، فإن رضيتَ أمرًا قبلتَه، وإن كرهتَه كُفَّ عنك ما تكره. فجلس وسمع فأسلم، ثم أتى قومه فقال: كلام رجالكم ونسائكم عليَّ حرامٌ حتى تؤمنوا. فما أمسى في بني عبد الأشهل رجلٌ ولا امرأة إلا مسلمًا.",
    change: "He entered Islam at thirty-one and lived about six years after it. In that short time his tribe followed him into Islam entirely, and he became one of the chiefs of the Ansar at Badr and Uhud and the Trench.",
    changeAr: "أسلم وهو ابن إحدى وثلاثين، وعاش بعد إسلامه نحو ست سنين، أسلمت في تلك المدّة القصيرة قبيلته كلّها على يديه، وصار من سادات الأنصار في بدرٍ وأحدٍ والخندق.",
    greatest: "At Badr, when the Prophet ﷺ consulted the people before the fighting, Sa'd spoke for the Ansar and told him that if he crossed the sea they would cross it with him. He was struck in the arm by an arrow at the Trench and the wound did not heal.",
    greatestAr: "في بدرٍ لمّا استشار النبيُّ ﷺ الناس قبل القتال تكلّم سعدٌ عن الأنصار وقال له: لو خُضتَ بنا هذا البحر لخُضناه معك. وأُصيب في أكحله بسهمٍ يوم الخندق فلم يبرأ الجرح.",
    death: "He died of that wound. Jabir رضي الله عنه heard the Prophet ﷺ say: \"The Throne of the Most Merciful shook at the death of Sa'd ibn Mu'adh.\" That is in al-Bukhari. The often-repeated detail that seventy thousand angels attended his funeral is NOT in al-Bukhari or Muslim — it appears in other collections, and this site will not present it as though it were.",
    deathAr: "مات من ذلك الجرح، وسمع جابرٌ رضي الله عنه النبي ﷺ يقول: «اهتزّ عرش الرحمن لموت سعد بن معاذ»، وهذا في البخاري. وأما ما يُتداول من أن سبعين ألفًا من الملائكة شهدوا جنازته فليس في البخاري ولا مسلم، وإنما جاء في غيرهما، ولا نُقدّمه هنا على أنه منهما.",
    sources: [
      "The Throne shaking at his death: Sahih al-Bukhari, Book of the Merits of the Ansar, Hadith 3803 — Sahih, and also in Muslim",
      "His acceptance of Islam through Mus'ab, his words at Badr, his age: Ibn Ishaq (in Ibn Hisham) and Ibn Sa'd, Tabaqat — historical sira",
      "The seventy thousand angels: reported outside the two Sahihs; stated here as such and not relied upon"
    ]
  },

  "musab": {
    before: "The most pampered young man in Makkah. His mother was wealthy and dressed him in the finest clothes; it was said the scent of his perfume stayed in a street after he had walked down it.",
    beforeAr: "كان أنعم فتى بمكة، أمّه ذات مال، تكسوه أحسن الثياب، حتى قيل إن أثر طيبه يبقى في الطريق بعد مروره.",
    islam: "He accepted Islam secretly and prayed in hiding. When his mother learned of it she confined him, and he eventually left with the migration to Abyssinia. He came back in a coarse patched garment, and those who saw him wept at the change.",
    islamAr: "أسلم سرًّا وكان يصلي مستخفيًا، فلما علمت أمّه حبسته، ثم خرج في هجرة الحبشة. وعاد وعليه بُردةٌ مرقّعة، فبكى من رآه لِما صار إليه.",
    change: "From the best-dressed man in Makkah to a man in patched cloth. The Prophet ﷺ sent him to Yathrib as the first teacher of Islam there, and through him the chiefs of the Aws and Khazraj entered Islam before the migration.",
    changeAr: "من أحسن أهل مكة لباسًا إلى رجلٍ في ثوبٍ مرقّع. وبعثه النبي ﷺ إلى يثرب أوّل معلِّمٍ للإسلام بها، فأسلم على يديه سادات الأوس والخزرج قبل الهجرة.",
    greatest: "He was the first ambassador of Islam. Sa'd ibn Mu'adh and Usayd ibn Hudayr — and with them their whole tribes — entered Islam through his teaching, which is why Madinah was ready to receive the Prophet ﷺ when he arrived.",
    greatestAr: "كان أوّل سفيرٍ في الإسلام؛ أسلم على يديه سعد بن معاذ وأُسيد بن حُضير ومعهما قبائلهما، ولذلك كانت المدينة مهيّأةً لاستقبال النبي ﷺ حين قدمها.",
    death: "He was martyred at Uhud carrying the banner. Khabbab رضي الله عنه said: we migrated with the Messenger of Allah ﷺ seeking Allah's countenance; some of us died without having taken any of their reward in this world — among them Mus'ab ibn Umayr, killed at Uhud, and he left nothing but a cloak. When they covered his head with it his feet showed, and when they covered his feet his head showed, so the Prophet ﷺ told them to cover his head with it and put grass over his feet.",
    deathAr: "استُشهد يوم أُحد وهو يحمل اللواء. قال خبّاب رضي الله عنه: هاجرنا مع رسول الله ﷺ نبتغي وجه الله، فمنّا من مضى لم يأكل من أجره شيئًا، منهم مصعب بن عمير قُتل يوم أُحد، ولم يترك إلا نَمِرة، فكنّا إذا غطّينا بها رأسه بدت رجلاه، وإذا غطّينا رجليه بدا رأسه، فأمرنا النبي ﷺ أن نُغطّي رأسه ونجعل على رجليه من الإذخر.",
    sources: [
      "His death and the cloak: Sahih al-Bukhari, Book of the Merits of the Ansar, Hadith 3914 — Sahih",
      "His life in Makkah, his mother, and his mission to Yathrib: Ibn Ishaq (in Ibn Hisham) and Ibn Sa'd — historical sira"
    ]
  },

  "ali": {
    before: "A boy in the household of the Prophet ﷺ. Abu Talib, his father, had many dependents and a hard year, so the Prophet ﷺ took Ali into his own home and raised him.",
    beforeAr: "غلامٌ في بيت النبي ﷺ؛ كان أبوه أبو طالب كثير العيال أصابته سنةٌ شديدة، فضمّه النبي ﷺ إلى بيته وربّاه.",
    islam: "He was the first child to accept Islam, at around ten years of age.",
    islamAr: "كان أوّل من أسلم من الصبيان، وهو ابن نحو عشر سنين.",
    change: "On the night of the migration he slept in the Prophet's bed while the assassins waited outside, so that they would think the Prophet ﷺ was still in the house — and stayed behind to return the trusts people had left with the Prophet ﷺ to their owners.",
    changeAr: "نام ليلة الهجرة في فراش النبي ﷺ والقوم يرصدون البيت، ليظنّوا أنه فيه، ثم تخلَّف بعده ليؤدّي الأمانات التي كانت عند النبي ﷺ إلى أهلها.",
    greatest: "At Khaybar the Prophet ﷺ said he would give the banner tomorrow to a man who loves Allah and His Messenger and whom Allah and His Messenger love. The people spent the night wondering which of them it would be. In the morning he called for Ali, who was suffering from an eye complaint; he applied his saliva to his eyes and the pain went, and gave him the banner.",
    greatestAr: "يوم خيبر قال النبي ﷺ: لأُعطينّ الراية غدًا رجلًا يحبّ الله ورسوله ويحبّه الله ورسوله. فبات الناس يدوكون أيّهم يُعطاها، فلمّا أصبح دعا عليًّا وكان يشتكي عينيه، فبصق في عينيه فبرأ، ودفع إليه الراية.",
    death: "He was struck while going out to the Fajr prayer in Kufa and died of the wound, in the fortieth year after the migration.",
    deathAr: "ضُرب وهو خارجٌ إلى صلاة الفجر بالكوفة فمات من ضربته، سنة أربعين للهجرة.",
    sources: [
      "The banner at Khaybar: Sahih al-Bukhari, Book of Jihad, Hadith 2975 — Sahih, agreed upon",
      "Sleeping in the Prophet's bed and returning the trusts: Ibn Ishaq (in Ibn Hisham) — historical sira",
      "His assassination in Kufa: recorded in the histories of at-Tabari and Ibn Sa'd — historical"
    ]
  },

  "aisha": {
    before: "The daughter of Abu Bakr, born into Islam — she said she never knew her parents except practising the religion.",
    beforeAr: "ابنة أبي بكر، وُلدت في الإسلام، وقالت: لم أعقِل أبويَّ قطُّ إلا وهما يدينان الدين.",
    islam: "She was raised in it from the beginning, in the household closest to the Prophet ﷺ.",
    islamAr: "نشأت عليه منذ صغرها، في البيت الأقرب إلى النبي ﷺ.",
    change: "She became the most learned of the women of this nation, and one of the most relied upon narrators of hadith. The companions came to her with questions after the Prophet's death, and much of what is known about his private life, his worship at home and his manner with his family comes through her.",
    changeAr: "صارت أعلم نساء هذه الأمة، ومن أكثر من رُوي عنه الحديث، وكان الصحابة يسألونها بعد وفاة النبي ﷺ، وأكثر ما يُعرف من سيرته في بيته وعبادته وخلقه مع أهله إنما جاء من طريقها.",
    greatest: "The Prophet ﷺ said that many men reached perfection but among women only Asiyah the wife of Pharaoh and Maryam the daughter of Imran — and that the superiority of Aishah over other women is like the superiority of tharid over other food. When she was slandered, her innocence was declared in the Quran itself, in Surah An-Nur.",
    greatestAr: "قال النبي ﷺ: كمَل من الرجال كثير، ولم يكمُل من النساء إلا آسية امرأة فرعون ومريم ابنة عمران، وإن فضل عائشة على النساء كفضل الثريد على سائر الطعام. ولمّا رُميت بالإفك نزلت براءتها في القرآن في سورة النور.",
    death: "She died in Madinah and was buried in al-Baqi'.",
    deathAr: "تُوفيت بالمدينة ودُفنت بالبقيع.",
    sources: [
      "The superiority of tharid: Sahih al-Bukhari, Book of the Prophets, Hadith 3411 — Sahih, agreed upon",
      "The declaration of her innocence: Surah An-Nur (24:11-20), and Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4141 — Sahih",
      "Her death and burial: Ibn Sa'd, Tabaqat — historical"
    ]
  },

  "hamza": {
    before: "The uncle of the Prophet ﷺ and close to him in age, known in Makkah as a hunter and a man of great physical strength.",
    beforeAr: "عمّ النبي ﷺ وقريبٌ منه في السنّ، عُرف بمكة بالصيد وبشدّة البأس.",
    islam: "He came back from hunting to be told that Abu Jahl had insulted his nephew. He went to the Kaaba, struck Abu Jahl with his bow, and declared himself a Muslim — at first out of tribal anger, and then, as he said, the matter settled in his heart.",
    islamAr: "رجع من صيده فأُخبر أن أبا جهلٍ نال من ابن أخيه، فأتى الكعبة فضرب أبا جهلٍ بقوسه وأعلن إسلامه — بدأها حميّةً، ثم وقر الإيمان في قلبه كما قال.",
    change: "His acceptance of Islam gave the Muslims of Makkah a protection they had not had, because Quraysh knew what it meant to have Hamza against them.",
    changeAr: "كان إسلامه عزًّا للمسلمين بمكة، إذ عرفت قريش ما يعني أن يكون حمزة في صفّ من تُؤذيهم.",
    greatest: "He fought at Badr and at Uhud, and the Prophet ﷺ called him the lion of Allah and of His Messenger.",
    greatestAr: "شهد بدرًا وأُحدًا، وسمّاه النبي ﷺ أسد الله وأسد رسوله.",
    death: "He was killed at Uhud by Wahshi, who was promised his freedom for it. The Prophet ﷺ was deeply grieved at the sight of him. Later Wahshi accepted Islam and the Prophet ﷺ accepted him, but asked him to keep his face away, because he could not look at him without remembering Hamza.",
    deathAr: "قُتل يوم أُحد على يد وحشيّ الذي وُعد بالعتق على قتله، فحزن النبي ﷺ عليه حزنًا شديدًا حين رآه. ثم أسلم وحشيّ فقبل النبي ﷺ إسلامه، وقال له: غيِّب عني وجهك، لأنه كان لا يراه إلا ذكر حمزة.",
    sources: [
      "The killing of Hamza and Wahshi's account and later Islam: Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4072 — Sahih",
      "His acceptance of Islam after Abu Jahl's insult, and the title 'lion of Allah': Ibn Ishaq (in Ibn Hisham) — historical sira"
    ]
  },

  "abu-hurairah": {
    before: "A poor man of the tribe of Daws in Yemen, who came to Madinah with nothing. He was called Abu Hurairah — father of the kitten — because of a small cat he used to carry.",
    beforeAr: "رجلٌ فقيرٌ من دوسٍ باليمن، قدم المدينة ولا شيء معه، وكُنّي أبا هريرة لهرّةٍ صغيرة كان يحملها.",
    islam: "He accepted Islam around the year of Khaybar, in the last years of the Prophet's life — which makes what he preserved all the more remarkable.",
    islamAr: "أسلم عام خيبر في أواخر حياة النبي ﷺ، وهو ما يجعل ما حفظه أعجب.",
    change: "He attached himself to the Prophet ﷺ, living in the Suffah — the shelter at the mosque for those with no home — accepting hunger in order to be present for everything the Prophet ﷺ said. He said plainly that the Muhajirun were busy with their trade and the Ansar with their land, and he stayed on an empty stomach and was present.",
    changeAr: "لزم النبي ﷺ وسكن الصُّفَّة — مأوى من لا مسكن له في المسجد — وصبر على الجوع ليشهد كل ما يقوله النبي ﷺ. وقال صريحًا: إن إخواني من المهاجرين كان يشغلهم الصفق بالأسواق، والأنصار يشغلهم عملُ أموالهم، وكنتُ ألزم رسول الله ﷺ على مِلءِ بطني.",
    greatest: "He narrated more hadith than any other companion. He said he had complained to the Prophet ﷺ of forgetting, and was told to spread out his cloak; the Prophet ﷺ made a gesture into it and told him to gather it to his chest — and he said he never forgot anything after that.",
    greatestAr: "روى من الحديث أكثر من أيّ صحابي. وذكر أنه شكا إلى النبي ﷺ النسيان، فأمره أن يبسط رداءه، فغرف بيديه فيه ثم قال: ضُمَّه، فضمّه إلى صدره، قال: فما نسيتُ شيئًا بعده.",
    death: "He died in Madinah in the later years of the first century and was buried in al-Baqi'.",
    deathAr: "تُوفي بالمدينة في أواخر القرن الأول ودُفن بالبقيع.",
    sources: [
      "Staying with the Prophet on an empty stomach, and the cloak and forgetting: Sahih al-Bukhari, Book of Knowledge, Hadith 118 and 119 — Sahih",
      "His name, his tribe and his death: Ibn Sa'd, Tabaqat — historical"
    ]
  },

  "salman": {
    before: "A Persian from a village near Isfahan, the son of a Zoroastrian landowner who kept him at home tending the sacred fire. He left it for Christianity, served a succession of monks, and the last of them told him a prophet was about to be sent in a land of palm trees between two lava fields.",
    beforeAr: "فارسيٌّ من قريةٍ قرب أصبهان، ابن دهقانٍ مجوسيّ كان يحبسه في البيت على النار يوقدها. فترك ذلك إلى النصرانية وخدم عالمًا بعد عالم، وأخبره آخرهم بأن نبيًّا قد أظلّ زمانه يُبعث في أرضٍ ذات نخلٍ بين حَرَّتين.",
    islam: "He set out to find him and was betrayed on the way and sold as a slave, ending up in Yathrib. When the Prophet ﷺ arrived there Salman tested him against the signs he had been told: he would accept a gift but not charity, and between his shoulders was the seal of prophethood. He found all of it and accepted Islam.",
    islamAr: "خرج يطلبه فغُدر به في الطريق وبِيع رقيقًا حتى وقع بيثرب. فلما قدم النبي ﷺ اختبره سلمان بما وُصف له: أنه يأكل الهديّة ولا يأكل الصدقة، وأن بين كتفيه خاتم النبوة، فوجد ذلك كلّه فأسلم.",
    change: "He was still a slave when the Muslims were fighting at Badr and Uhud — his enslavement kept him from both. The Prophet ﷺ told him to make a contract for his freedom, and the Muslims helped him pay it.",
    changeAr: "كان لا يزال رقيقًا حين كان المسلمون في بدرٍ وأُحد، فحال رقّه بينه وبينهما، فأمره النبي ﷺ أن يكاتب سيّده على حرّيته، وأعانه المسلمون على أدائها.",
    greatest: "At the Trench, when Madinah was about to be besieged by a force it could not meet in open battle, it was Salman who proposed digging a trench across the exposed side — a Persian tactic the Arabs did not use. The city held.",
    greatestAr: "يوم الخندق، لمّا أحاطت بالمدينة قوّةٌ لا تُواجَه في العراء، أشار سلمان بحفر خندقٍ في الجهة المكشوفة، وهي حيلةٌ فارسية لم تكن العرب تصنعها، فامتنعت المدينة.",
    death: "He died in al-Mada'in in Iraq during the caliphate of Uthman رضي الله عنه.",
    deathAr: "تُوفي بالمدائن بالعراق في خلافة عثمان رضي الله عنه.",
    sources: [
      "His long account of his own search, in his own words: Musnad Ahmad, and Ibn Ishaq (in Ibn Hisham) — historical sira, reported at length from Salman himself",
      "The digging of the Trench: Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4101 — Sahih for the events of the Trench; the attribution of the idea to Salman is from the sira"
    ]
  },

  "khalid": {
    before: "One of the finest cavalry commanders of Quraysh. It was Khalid who led the horsemen that turned the battle of Uhud against the Muslims, when the archers left their position.",
    beforeAr: "من أمهر فرسان قريش وقادتها. وهو الذي قاد الخيل التي حوّلت أُحدًا على المسلمين حين ترك الرُّماة مواقعهم.",
    islam: "He accepted Islam before the conquest of Makkah, coming to Madinah of his own accord. The Prophet ﷺ received him and said he had known that a man of his intelligence would not remain outside it.",
    islamAr: "أسلم قبل فتح مكة وقدم المدينة من تلقاء نفسه، فاستقبله النبي ﷺ وقال: قد كنتُ أرى لك عقلًا رجوتُ ألّا يُسلمك إلا إلى خير.",
    change: "The same skill that had almost destroyed the Muslims at Uhud was now on their side.",
    changeAr: "فصارت البراعة نفسها التي كادت تُهلك المسلمين في أُحد في صفّهم.",
    greatest: "At Mu'tah, after three commanders were killed in turn, Khalid took the banner and brought the army out. The Prophet ﷺ announced the deaths of the three from Madinah on the day it happened, and said the banner was then taken by a sword from among the swords of Allah, and Allah gave them victory. He was later given command in the conquests of Iraq and Syria.",
    greatestAr: "في مؤتة، بعد أن قُتل الأمراء الثلاثة واحدًا بعد واحد، أخذ خالدٌ الراية فانحاز بالجيش. وقد نعى النبي ﷺ الثلاثة بالمدينة يوم قُتلوا وقال: ثم أخذ الراية سيفٌ من سيوف الله ففتح الله عليهم. ثم كانت له القيادة في فتوح العراق والشام.",
    death: "He died in his bed, and it is reported that he said there was not a hand's span on his body without a wound from a sword or an arrow, and yet he died on his bed as a camel dies.",
    deathAr: "مات على فراشه، ورُوي أنه قال: ما في جسدي موضع شبرٍ إلا وفيه ضربةٌ بسيفٍ أو رميةٌ بسهم، وها أنا أموت على فراشي كما يموت البعير.",
    sources: [
      "Mu'tah and 'a sword from among the swords of Allah': Sahih al-Bukhari, Book of the Military Expeditions, Hadith 4262 — Sahih",
      "His command at Uhud: Sahih al-Bukhari, Book of the Military Expeditions — Sahih",
      "His acceptance of Islam, and his words at his death: Ibn Ishaq and Ibn Sa'd — historical sira"
    ]
  }
};
