/* ============================================================
   الرحلة — FROM YOUR DEATH TO YOUR FINAL HOME, STEP BY STEP
   ============================================================
   The owner's instruction, and it sets the standard for this file:

     "I want the extreme extreme details... don't forget the simple box for
      each and every one so it's easier for the simple person to understand.
      I don't want that page to be hard, like scholars to actually open to
      search for information. I want normal people to open the page and
      understand what will happen, based on the references."

   So every stage here has TWO layers:
     1. the detail, with the verse or the hadith and its grading, and
     2. a plain-words box that says the same thing in short lines, listed,
        with no term left unexplained.

   THREE RULES THIS FILE KEEPS, because the subject makes them non-negotiable:

   1. NOTHING IS HERE WITHOUT A SOURCE. Every block names the Quran verse or
      the hadith and where it is. Where a report is outside the two Sahihs,
      the scholar who authenticated it is named.

   2. WEAK IS LABELLED WEAK, beside the strong, never blended into it. A
      da'if report about the Hereafter is not a small matter: people build
      their picture of the next life out of these pieces.

   3. SPECULATION IS NOT SCRIPTURE. The lecture this was built from explains
      some events with modern physics and chemistry — separating water into
      hydrogen and oxygen, and so on. That is a speaker's own reasoning. It
      is NOT in the Quran or the Sunnah and it is not repeated here as though
      it were. Where the texts describe something without explaining the
      mechanism, this file describes it and stops there.

   ORDER: the sequence follows the texts — death, the grave, the end of the
   world, the raising, the standing, the reckoning, the Bridge, and the two
   destinations.
   ============================================================ */

const JOURNEY_PHASES = [
  { id: "death",   icon: "🕯️", en: "Death and the grave",
    ar: "الموت والبرزخ",
    leadEn: "From the moment the soul is taken to the last night before the world ends.",
    leadAr: "من ساعة قبض الروح إلى آخر ليلةٍ قبل أن تنتهي الدنيا." },
  { id: "end",     icon: "🌑", en: "The end of the world",
    ar: "نهاية الدنيا",
    leadEn: "The Trumpet, and everything that is alive dying at once.",
    leadAr: "الصور، وموت كلِّ حيٍّ في وقتٍ واحد." },
  { id: "rising",  icon: "🌱", en: "The raising and the standing",
    ar: "البعث والموقف",
    leadEn: "Coming out of the ground, and waiting — for some like fifty thousand years.",
    leadAr: "الخروج من الأرض، والانتظار — يكون على بعضهم كخمسين ألف سنة." },
  { id: "account", icon: "⚖️", en: "The reckoning",
    ar: "الحساب",
    leadEn: "The prayer first, then the book, then the scales, then a conversation with no interpreter.",
    leadAr: "الصلاة أوّلًا، ثمّ الكتاب، ثمّ الميزان، ثمّ كلامٌ بلا ترجمان." },
  { id: "end2",    icon: "🌉", en: "The Bridge and after it",
    ar: "الصراط وما بعده",
    leadEn: "Crossing over the Fire, the settling of debts, and the gate.",
    leadAr: "العبور فوق النار، وقضاء المظالم، ثمّ الباب." }
];

const JOURNEY = [

/* ============================================================
   PHASE 1 — DEATH AND THE GRAVE
   ============================================================ */
{
  id: "j-soul-taken",
  phase: "death",
  icon: "🕯️",
  title: "The soul is taken — and the angels who come depend on who you were",
  titleAr: "قبض الروح — والملائكة الذين يحضرون على قدر مَن كنت",
  lead: "Two completely different arrivals, described in one long hadith. Same event, opposite experience.",
  leadAr: "حضوران مختلفان تمامًا، جاءا في حديثٍ واحدٍ طويل. الحدث واحد، والتجربة على النقيض.",
  body: [
    { h: "The believer: angels with white faces, and a shroud from Paradise",
      hAr: "المؤمن: ملائكةٌ بيض الوجوه، وكفنٌ من الجنّة",
      en: "Al-Bara ibn Azib رضي الله عنه said they went out with the Prophet ﷺ to a funeral, and he sat and spoke. He said that when the believing servant is leaving this world and going to the next, angels come down to him from the sky <strong>with white faces, as if their faces were the sun</strong>. They have with them a shroud from Paradise and perfume from Paradise, and they sit from him as far as the eye can see.\n\nThen the Angel of Death comes and sits at his head and says: <em>“O good soul, come out to forgiveness from Allah and His pleasure.”</em> And the soul <strong>flows out as a drop flows from the mouth of a waterskin</strong>.",
      ar: "عن البراء بن عازب رضي الله عنه قال: خرجنا مع النبيّ ﷺ في جنازة، فجلس وجلسنا حوله، فقال: إنّ العبد المؤمن إذا كان في انقطاعٍ من الدنيا وإقبالٍ من الآخرة نزل إليه ملائكةٌ من السماء <strong>بيض الوجوه، كأنّ وجوههم الشمس</strong>، معهم كفنٌ من أكفان الجنّة وحَنوطٌ من حَنوط الجنّة، حتى يجلسوا منه مدَّ البصر.\n\nثمّ يجيء ملك الموت عليه السلام حتى يجلس عند رأسه فيقول: أيّتها النفس الطيّبة، اخرجي إلى مغفرةٍ من الله ورضوان. فتخرج <strong>تسيل كما تسيل القطرة من فِي السقاء</strong>.",
      ref: "Musnad Ahmad 18534, and Sunan Abu Dawud 4753 — the long hadith of al-Bara ibn Azib",
      strength: "Sahih — authenticated by al-Albani; al-Hakim graded it sahih on the conditions of the two Shaykhs" },
    { h: "The smell — and this is the part people remember",
      hAr: "الرائحة — وهذا أكثر ما يعلق في النفوس",
      en: "When the angels take that soul, they do not leave it in the Angel of Death's hand for an instant before they take it and put it in that shroud and that perfume — and <strong>there comes out of it a scent like the best musk found on the face of the earth</strong>.\n\nThey carry it up, and they do not pass a gathering of angels without their asking: <em>“What is this good soul?”</em> And they say: <em>“So-and-so, son of so-and-so”</em> — calling him by the best of the names he was called by in the world.\n\nFor the wicked soul the same sequence runs in reverse: the angels come <strong>black-faced</strong>, with sackcloth; the soul is torn out <em>“as a skewer with many prongs is pulled out of wet wool”</em>; and when it is taken, <strong>there comes out of it a stench like the foulest smell of a corpse on the face of the earth</strong>. The angels they pass ask: “What is this wicked soul?” and they name him by the worst of his names.",
      ar: "فإذا أخذها لم يدعوها في يده طرفة عينٍ حتى يأخذوها فيجعلوها في ذلك الكفن وذلك الحَنوط، <strong>ويخرج منها كأطيب نفحة مِسكٍ وُجدت على وجه الأرض</strong>.\n\nفيصعدون بها، فلا يمرّون على ملأٍ من الملائكة إلا قالوا: ما هذه الروح الطيّبة؟ فيقولون: فلان ابن فلان — بأحسن أسمائه التي كان يُسمّى بها في الدنيا.\n\nوأمّا الروح الخبيثة فالترتيب نفسه معكوسًا: تنزل إليه ملائكةٌ <strong>سود الوجوه</strong> معهم المُسوح، وتُنتزع روحه <em>كما يُنتزع السَّفُّود الكثير الشُّعَب من الصوف المبلول</em>، فإذا أُخذت <strong>خرج منها كأنتن ريح جيفةٍ وُجدت على وجه الأرض</strong>، فلا يمرّون بها على ملأٍ من الملائكة إلا قالوا: ما هذه الروح الخبيثة؟ فيقولون: فلان ابن فلان، بأقبح أسمائه التي كان يُسمّى بها في الدنيا.",
      ref: "The same hadith of al-Bara ibn Azib — Musnad Ahmad 18534, Sunan Abu Dawud 4753",
      strength: "Sahih — authenticated by al-Albani" }
  ],
  plain: {
    lead: "This is the first thing that happens, and it has already been decided by how you lived. Nothing new is being judged yet — <strong>what arrives simply matches what you were</strong>.",
    leadAr: "هذا أوّل ما يقع، وقد استقرّ أمره بما عشتَ عليه. فليس ثمّة حكمٌ جديدٌ بعدُ، <strong>وإنّما جاء ما يوافق ما كنتَ عليه</strong>.",
    groups: [
      { head: "If you were a believer",
        headAr: "إن كنتَ مؤمنًا",
        points: [
          { en: "Angels come down <strong>with faces like the sun</strong>, carrying a shroud and perfume from Paradise.",
            ar: "تنزل ملائكةٌ <strong>وجوههم كالشمس</strong>، معهم كفنٌ وطِيبٌ من الجنّة." },
          { en: "The Angel of Death speaks to you <strong>gently</strong>: come out to forgiveness and pleasure.",
            ar: "ويخاطبك ملك الموت <strong>برفق</strong>: اخرجي إلى مغفرةٍ ورضوان." },
          { en: "The soul <strong>flows out easily</strong> — like a drop running from a waterskin.",
            ar: "فتخرج الروح <strong>سهلةً</strong> كما تسيل القطرة من فم السقاء." },
          { en: "And it <strong>smells of musk</strong> — the best scent on earth.",
            ar: "و<strong>لها ريح المسك</strong>، أطيب ما يوجد على الأرض." }
        ] },
      { head: "If you were not",
        headAr: "وإن كنتَ على غير ذلك",
        points: [
          { en: "The angels who come are <strong>black-faced</strong>, and they bring sackcloth.",
            ar: "تنزل ملائكةٌ <strong>سود الوجوه</strong>، ومعهم المُسوح." },
          { en: "The soul is <strong>dragged out</strong> — the hadith compares it to a many-pronged skewer pulled through wet wool.",
            ar: "وتُنتزع الروح <strong>انتزاعًا</strong>؛ شبّهه الحديث بالسَّفُّود الكثير الشُّعَب يُنزع من الصوف المبلول." },
          { en: "And it <strong>stinks</strong> — the hadith says like the foulest corpse on the earth.",
            ar: "و<strong>لها نتنٌ</strong>؛ قال الحديث: كأنتن جيفةٍ على وجه الأرض." }
        ] },
      { head: "The detail worth stopping at",
        headAr: "التفصيل الذي يستوقف",
        points: [
          { en: "The angels <strong>call you by name</strong> as the soul is carried up — the believer by the best name he was known by, the other by the worst.",
            ar: "الملائكة <strong>تناديك باسمك</strong> وهي تصعد بالروح: المؤمن بأحسن أسمائه، والآخر بأقبحها." },
          { en: "So <strong>your reputation among the angels is already settled</strong> before you have been asked a single question.",
            ar: "فـ<strong>اسمك عند الملائكة قد استقرّ</strong> قبل أن تُسأل سؤالًا واحدًا." }
        ] }
    ]
  }
},
{
  id: "j-ascent",
  phase: "death",
  icon: "🪜",
  title: "The soul is carried up through the seven heavens — and a gate is either opened or refused",
  titleAr: "يُعرَج بالروح إلى السماوات السبع — فيُفتح لها أو يُغلق دونها",
  lead: "What happens above the sky, and the one sentence that decides whether the gates open.",
  leadAr: "ما يقع فوق السماء، والكلمة التي بها يُفتح الباب أو يُردّ.",
  body: [
    { h: "For the believer: “Write the book of My servant in Illiyyun”",
      hAr: "في المؤمن: اكتبوا كتاب عبدي في عِلّيّين",
      en: "The angels carry the soul up, and <strong>ask for it to be opened</strong> at each heaven. It is opened for them, and the close angels of every heaven see it off to the next, until they reach the seventh.\n\nThen Allah عز وجل says: <em>“Write the book of My servant in Illiyyun, and return him to the earth — for from it I created them, to it I return them, and from it I bring them out a second time.”</em>",
      ar: "فيصعدون بها، فلا يمرّون على سماءٍ إلا <strong>استفتحوا</strong> لها، فيُفتح لهم، فيشيّعها من كلّ سماءٍ مقرّبوها إلى السماء التي تليها، حتى يُنتهى بها إلى السماء السابعة.\n\nفيقول الله عزّ وجلّ: اكتبوا كتاب عبدي في عِلّيّين، وأعيدوه إلى الأرض؛ فإنّي منها خلقتهم، وفيها أعيدهم، ومنها أُخرجهم تارةً أخرى.",
      ref: "The hadith of al-Bara ibn Azib — Musnad Ahmad 18534, Sunan Abu Dawud 4753",
      strength: "Sahih — authenticated by al-Albani" },
    { h: "For the other: the gates of the sky are not opened at all",
      hAr: "وفي الآخر: لا تُفتح له أبواب السماء",
      en: "The wicked soul is carried up, and <strong>they ask for it to be opened and it is not opened for it</strong>. Then the Prophet ﷺ recited: <em>“The gates of the heaven will not be opened for them, nor will they enter Paradise until a camel passes through the eye of a needle”</em> (Surah Al-A'raf 7:40).\n\nAllah عز وجل says: <em>“Write his book in Sijjin, in the lowest earth”</em> — and his soul is <strong>flung down</strong>. Then the Prophet ﷺ recited: <em>“And whoever associates partners with Allah, it is as though he fell from the sky and the birds snatched him, or the wind blew him to a far-off place”</em> (Surah Al-Hajj 22:31).",
      ar: "ويُصعَد بالروح الخبيثة، <strong>فيُستفتح لها فلا يُفتح لها</strong>. ثمّ قرأ النبيُّ ﷺ: ﴿لَا تُفَتَّحُ لَهُمْ أَبْوَابُ السَّمَاءِ وَلَا يَدْخُلُونَ ٱلْجَنَّةَ حَتَّىٰ يَلِجَ ٱلْجَمَلُ فِى سَمِّ ٱلْخِيَاطِ﴾ [الأعراف: ٤٠].\n\nفيقول الله عزّ وجلّ: اكتبوا كتابه في سِجِّينٍ في الأرض السفلى، <strong>فتُطرح روحه طرحًا</strong>. ثمّ قرأ: ﴿وَمَن يُشْرِكْ بِٱللَّهِ فَكَأَنَّمَا خَرَّ مِنَ ٱلسَّمَآءِ فَتَخْطَفُهُ ٱلطَّيْرُ أَوْ تَهْوِى بِهِ ٱلرِّيحُ فِى مَكَانٍ سَحِيقٍ﴾ [الحج: ٣١].",
      ref: "The same hadith; the verses are Surah Al-A'raf 7:40 and Surah Al-Hajj 22:31",
      strength: "Sahih — authenticated by al-Albani; the two verses are Quran" }
  ],
  plain: {
    lead: "Two words are worth learning here, because the rest of this makes more sense once you have them.",
    leadAr: "كلمتان تُتعلَّمان هنا، وبهما يتّضح ما بعدهما.",
    groups: [
      { head: "The two words",
        headAr: "الكلمتان",
        points: [
          { en: "<strong>عِلِّيُّون (Illiyyun)</strong> — the register of the righteous, kept <strong>high up</strong>. Mentioned in Surah Al-Mutaffifin (83:18–19).",
            ar: "<strong>عِلِّيُّون</strong> — ديوان الأبرار، وهو في <strong>الأعلى</strong>. وذُكر في سورة المطفّفين (٨٣:١٨–١٩)." },
          { en: "<strong>سِجِّين (Sijjin)</strong> — the register of the wicked, kept <strong>in the lowest earth</strong>. Surah Al-Mutaffifin (83:7–8).",
            ar: "<strong>سِجِّين</strong> — ديوان الفجّار، وهو <strong>في الأرض السفلى</strong>. سورة المطفّفين (٨٣:٧–٨)." }
        ] },
      { head: "What happens, in order",
        headAr: "ما يقع مرتَّبًا",
        points: [
          { en: "The angels carry the soul up and <strong>knock at each heaven</strong> in turn.",
            ar: "تصعد الملائكة بالروح <strong>فتستفتح كلَّ سماء</strong> سماءً بعد سماء." },
          { en: "For the believer: <strong>it opens every time</strong>, and the angels of each heaven escort it to the next — all the way to the seventh.",
            ar: "فأمّا المؤمن <strong>فيُفتح له في كلّ مرّة</strong>، ويشيّعه من كلّ سماءٍ مقرّبوها إلى التي تليها، حتى السابعة." },
          { en: "For the other: <strong>it does not open at all.</strong> The verse the Prophet ﷺ recited says the gates of the sky are not opened for them.",
            ar: "وأمّا الآخر <strong>فلا يُفتح له</strong>؛ والآية التي تلاها النبيُّ ﷺ: لا تُفتَّح لهم أبواب السماء." },
          { en: "The believer's record is written in Illiyyun. The other's is written in Sijjin, and <strong>his soul is thrown back down</strong> — the Quran compares it to falling from the sky and being snatched by birds.",
            ar: "فيُكتب كتاب المؤمن في عِلِّيّين، ويُكتب كتاب الآخر في سِجِّين، <strong>وتُطرح روحه</strong> — وشبّه القرآن ذلك بمن خرّ من السماء فتخطفه الطير." },
          { en: "Then <strong>both are returned to the body in the grave.</strong> This is the point most people do not realise: the soul goes up and <strong>comes back</strong>.",
            ar: "ثمّ <strong>تُعاد كلتاهما إلى الجسد في القبر</strong>. وهذا ما يغيب عن أكثر الناس: تصعد الروح <strong>ثمّ ترجع</strong>." }
        ] }
    ]
  }
},
{
  id: "j-washing",
  phase: "death",
  icon: "🤲",
  title: "Meanwhile, on this side: how your body is washed, wrapped and carried",
  titleAr: "وفي هذه الجهة: كيف يُغسَّل بدنك ويُكفَّن ويُحمَل",
  lead: "What the people you leave behind are obliged to do — and every part of it is a sunnah with a text.",
  leadAr: "ما يجب على من تتركهم خلفك — وكلُّ جزءٍ منه سنّةٌ عليها دليل.",
  body: [
    { h: "The washing",
      hAr: "الغُسل",
      en: "Umm Atiyyah رضي الله عنها said the Prophet ﷺ came to them when his daughter died and said: <em>“Wash her three times, or five, or more than that if you see fit, with water and lotus leaves, and put camphor — or something of camphor — in the last one.”</em>\n\nThe washing begins with <strong>the right side and the places of wudu</strong>. He ﷺ said: <em>“Begin with the right side and the places of wudu of her.”</em>",
      ar: "عن أمّ عطيّة رضي الله عنها قالت: دخل علينا النبيُّ ﷺ حين تُوفّيت ابنته فقال: «اغسلنها ثلاثًا أو خمسًا أو أكثر من ذلك إن رأيتنّ ذلك، بماءٍ وسِدر، واجعلن في الآخرة كافورًا أو شيئًا من كافور».\n\nويُبدأ في الغسل بـ<strong>الميامن ومواضع الوضوء</strong>؛ قال ﷺ: «ابدأن بميامنها ومواضع الوضوء منها».",
      ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1253 and 1254; also narrated by Muslim",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" },
    { h: "The shroud, and the one exception",
      hAr: "الكفن، والاستثناء الوحيد",
      en: "Aishah رضي الله عنها said the Prophet ﷺ was shrouded in <strong>three white Yemeni cloths of cotton</strong>, among which there was neither a shirt nor a turban.\n\nThere is one case where the ordinary washing and shrouding is <strong>forbidden</strong>: the one who dies in ihram. Of a man who fell from his mount and died, the Prophet ﷺ said: <em>“Wash him with water and lotus leaves, and shroud him in his two garments. Do not perfume him and do not cover his head — for he will be raised on the Day of Resurrection saying the talbiyah.”</em>",
      ar: "عن عائشة رضي الله عنها أنّ النبيّ ﷺ كُفِّن في <strong>ثلاثة أثوابٍ بيضٍ سَحُوليّة</strong> من كُرسُف، ليس فيها قميصٌ ولا عمامة.\n\nوثمّة حالةٌ واحدةٌ يُمنع فيها ذلك: المُحرِم؛ قال ﷺ في الذي وقصته راحلته: «اغسلوه بماءٍ وسِدر، وكفّنوه في ثوبيه، ولا تُحنّطوه ولا تُخمّروا رأسه؛ فإنّه يُبعث يوم القيامة مُلبّيًا».",
      ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1264 (the shroud) and Hadith 1265–1266 (the one in ihram); also narrated by Muslim",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" },
    { h: "Carried quickly, and the reward for those who stay",
      hAr: "الإسراع بها، وأجر من يبقى",
      en: "He ﷺ said: <em>“Hurry with the funeral. If it was righteous, it is good that you are advancing it towards. And if it was otherwise, it is an evil you are putting off your necks.”</em>\n\nAnd: <em>“Whoever attends the funeral until it is prayed over has a qirat, and whoever attends it until it is buried has two qirats.”</em> He was asked what the two qirats were, and said: <em>“Like two enormous mountains.”</em>",
      ar: "قال ﷺ: «أسرعوا بالجنازة؛ فإن تكُ صالحةً فخيرٌ تُقدّمونها إليه، وإن تكُ سوى ذلك فشرٌّ تضعونه عن رقابكم».\n\nوقال ﷺ: «من شهد الجنازة حتى يُصلّى عليها فله قيراط، ومن شهدها حتى تُدفن فله قيراطان». قيل: وما القيراطان؟ قال: «مثل الجبلين العظيمين».",
      ref: "Sahih al-Bukhari, Book of Funerals, Hadith 1315 (hurry with it) and Hadith 1325 (the two qirats); both also narrated by Muslim",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" }
  ],
  plain: {
    lead: "This part is often skipped, but it is the one part of the whole journey that <strong>other people do for you</strong> — and it is the last service anyone can render you.",
    leadAr: "كثيرًا ما يُتجاوَز هذا الموضع، وهو الوحيد في الرحلة كلّها الذي <strong>يفعله غيرُك عنك</strong>، وهو آخر ما يُسدى إليك.",
    groups: [
      { head: "What is done to the body",
        headAr: "ما يُصنع بالبدن",
        points: [
          { en: "<strong>Washed an odd number of times</strong> — three, five, or more — with water and <em>sidr</em> (lotus leaves, used as a cleanser).",
            ar: "<strong>يُغسَّل وترًا</strong> — ثلاثًا أو خمسًا أو أكثر — بماءٍ و<em>سِدر</em> (ورق النبق يُستعمل للتنظيف)." },
          { en: "<strong>Camphor in the last washing</strong> — a white substance with a strong clean scent.",
            ar: "<strong>ويُجعل الكافور في الغسلة الأخيرة</strong>، وهو مادّةٌ بيضاء طيّبة الرائحة." },
          { en: "Begin with <strong>the right side and the parts washed in wudu</strong>.",
            ar: "ويُبدأ بـ<strong>الميامن ومواضع الوضوء</strong>." },
          { en: "Wrapped in <strong>three plain white cloths</strong> — no shirt, no turban. This is how the Prophet ﷺ himself was shrouded.",
            ar: "ويُكفَّن في <strong>ثلاثة أثوابٍ بيضٍ</strong>، لا قميص ولا عمامة، وهكذا كُفِّن النبيُّ ﷺ." },
          { en: "<strong>One exception:</strong> someone who dies in ihram is not perfumed and his head is not covered — because he is raised on the Day of Resurrection still saying <em>labbayk</em>.",
            ar: "<strong>واستثناءٌ واحد:</strong> من مات مُحرِمًا لا يُطيَّب ولا يُغطّى رأسه، فإنّه يُبعث يوم القيامة مُلبّيًا." }
        ] },
      { head: "And what the living get out of it",
        headAr: "وما ينال الأحياءَ من ذلك",
        points: [
          { en: "The funeral is <strong>carried quickly</strong>, not delayed.",
            ar: "<strong>ويُسرَع بالجنازة</strong> ولا تُؤخَّر." },
          { en: "Whoever prays over it earns <strong>one qirat</strong>; whoever stays until burial earns <strong>two</strong> — and he ﷺ said each is <strong>like an enormous mountain</strong> of reward.",
            ar: "من صلّى عليها فله <strong>قيراط</strong>، ومن بقي حتى تُدفن فله <strong>قيراطان</strong>، وقال ﷺ إنّ كلّ واحدٍ منهما <strong>مثل الجبل العظيم</strong> أجرًا." }
        ] }
    ]
  }
},
{
  id: "j-two-angels",
  phase: "death",
  icon: "❓",
  title: "The two angels, and the three questions",
  titleAr: "الملكان، والأسئلة الثلاثة",
  lead: "Everyone is asked. The questions are the same for everybody — and it is not a memory test.",
  leadAr: "كلٌّ يُسأل، والأسئلة واحدةٌ على الجميع — وليست امتحان حفظ.",
  body: [
    { h: "The questioning",
      hAr: "السؤال",
      en: "The soul is returned to the body, and <strong>two angels come and sit him up</strong>. They ask him: <em>“Who is your Lord?”</em> He says: <em>“My Lord is Allah.”</em> They ask: <em>“What is your religion?”</em> He says: <em>“My religion is Islam.”</em> They ask: <em>“Who is this man who was sent among you?”</em> He says: <em>“He is the Messenger of Allah ﷺ.”</em> They ask how he knew, and he says: <em>“I read the Book of Allah, believed in it and accepted it as true.”</em>\n\nThen a caller calls from the sky: <em>“My servant has spoken the truth. So spread out for him from Paradise, clothe him from Paradise, and open a door for him to Paradise.”</em>\n\nThe other man, asked the same three questions, says to each one: <strong>“Hāh, hāh, I do not know.”</strong>",
      ar: "فتُعاد روحه في جسده، <strong>فيأتيه ملكان فيُجلسانه</strong>، فيقولان له: مَن ربّك؟ فيقول: ربّي الله. فيقولان: ما دينك؟ فيقول: ديني الإسلام. فيقولان: ما هذا الرجل الذي بُعث فيكم؟ فيقول: هو رسول الله ﷺ. فيقولان: وما عِلمك؟ فيقول: قرأتُ كتاب الله فآمنتُ به وصدّقت.\n\nفينادي منادٍ من السماء: أن صدق عبدي، فأفرشوه من الجنّة، وألبسوه من الجنّة، وافتحوا له بابًا إلى الجنّة.\n\nوأمّا الآخر فيُسأل الثلاثة فيقول في كلٍّ منها: <strong>هاهْ هاهْ، لا أدري</strong>.",
      ref: "The hadith of al-Bara ibn Azib — Musnad Ahmad 18534, Sunan Abu Dawud 4753; the questioning is also in Sahih al-Bukhari, Book of Funerals, Hadith 1338",
      strength: "Sahih — authenticated by al-Albani; the questioning in the grave is agreed upon" },
    { h: "Then the window is opened — and this is where the two roads separate completely",
      hAr: "ثمّ يُفتح له الباب — وهنا يفترق الطريقان تمامًا",
      en: "For the believer, a door is opened to Paradise, <strong>and its scent and its air come to him</strong>, and his grave is widened for him as far as he can see. He says: <em>“My Lord, bring the Hour, so that I may return to my family and my wealth.”</em>\n\nFor the other, a door is opened <strong>to the Fire</strong>, and its heat and its scorching air come to him, and his grave is <strong>narrowed upon him until his ribs interlock</strong>. He says: <em>“My Lord, do not bring the Hour.”</em>",
      ar: "فأمّا المؤمن فيُفتح له بابٌ إلى الجنّة، <strong>فيأتيه من رَوحها وطِيبها</strong>، ويُفسح له في قبره مدَّ بصره، فيقول: ربِّ أقِمِ الساعة حتى أرجع إلى أهلي ومالي.\n\nوأمّا الآخر فيُفتح له بابٌ <strong>إلى النار</strong>، فيأتيه من حرّها وسَمومها، <strong>ويُضيَّق عليه قبره حتى تختلف أضلاعه</strong>، فيقول: ربِّ لا تُقِم الساعة.",
      ref: "The same hadith of al-Bara ibn Azib",
      strength: "Sahih — authenticated by al-Albani" }
  ],
  plain: {
    lead: "Three questions, and everyone gets the same three. <strong>But you cannot revise for them</strong> — and the hadith says why.",
    leadAr: "ثلاثة أسئلة، وهي هي للجميع. <strong>ولكن لا سبيل إلى الاستعداد لها بالحفظ</strong>، والحديث يبيّن السبب.",
    groups: [
      { head: "The three questions",
        headAr: "الأسئلة الثلاثة",
        points: [
          { en: "<strong>Who is your Lord?</strong>",
            ar: "<strong>مَن ربّك؟</strong>" },
          { en: "<strong>What is your religion?</strong>",
            ar: "<strong>ما دينك؟</strong>" },
          { en: "<strong>Who is this man who was sent among you?</strong>",
            ar: "<strong>ما هذا الرجل الذي بُعث فيكم؟</strong>" }
        ] },
      { head: "Why memorising the answers will not save anybody",
        headAr: "لِمَ لا ينفع حفظُ الأجوبة",
        points: [
          { en: "The answers are three short sentences that <strong>any child could repeat</strong>. That is exactly the point.",
            ar: "الأجوبة ثلاث كلماتٍ قصيرة <strong>يحفظها الصبيّ</strong>، وهذا هو المقصود بعينه." },
          { en: "The one who fails does not give a wrong answer — he says <strong>“I do not know”</strong>. Not because he forgot, but because he never truly held it.",
            ar: "والذي يخيب لا يأتي بجوابٍ خطأ، وإنّما يقول: <strong>لا أدري</strong> — لا لأنّه نسي، بل لأنّه لم يكن عنده أصلًا." },
          { en: "So it is <strong>not a test of memory. It is a test of what you actually were</strong> — and it is answered by the life, not by the tongue.",
            ar: "فليست <strong>امتحان حفظ، وإنّما امتحان حقيقةٍ كنتَ عليها</strong>، يُجاب عنها بالعمل لا باللسان." }
        ] },
      { head: "Then you are shown your seat — and that is what decides the answer to “when?”",
        headAr: "ثمّ تُرى مقعدك — وبه يُعلَم جواب «متى؟»",
        points: [
          { en: "A door is opened to your place. The believer gets <strong>the scent and the breeze of Paradise</strong>, and the grave is widened as far as he can see.",
            ar: "يُفتح بابٌ إلى مقعدك؛ فالمؤمن يأتيه <strong>رَوح الجنّة وطِيبها</strong>، ويُفسح له في قبره مدَّ بصره." },
          { en: "The other gets <strong>the heat and the scorching wind of the Fire</strong>, and the grave <strong>squeezes him until his ribs interlock</strong>.",
            ar: "والآخر يأتيه <strong>حرّ النار وسَمومها</strong>، <strong>ويُضيَّق عليه القبر حتى تختلف أضلاعه</strong>." },
          { en: "And then each says the opposite thing. The first: <strong>“My Lord, bring the Hour.”</strong> The second: <strong>“My Lord, do not bring the Hour.”</strong>",
            ar: "ثمّ يقول كلٌّ منهما ضدّ ما يقوله الآخر؛ فالأوّل: <strong>ربِّ أقِمِ الساعة</strong>، والثاني: <strong>ربِّ لا تُقِم الساعة</strong>." },
          { en: "So <strong>whether you want that Day to hurry up is itself the result.</strong> You will already know which one you are.",
            ar: "فـ<strong>تعجّلك لذلك اليوم أو كراهتك له هو النتيجة نفسها</strong>؛ إذ تكون قد علمتَ أيّهما أنت." }
        ] }
    ]
  }
}
,
{
  id: "j-trumpet",
  phase: "end",
  icon: "📯",
  title: "Israfil and the Trumpet — the angel who has not blinked since the day he was given it",
  titleAr: "إسرافيل والصور — الملك الذي ما طرف منذ وُكِّل به",
  lead: "One angel, one horn, and the end of everything that lives.",
  leadAr: "ملكٌ واحد، وقرنٌ واحد، ونهاية كلّ حيّ.",
  body: [
    { h: "The angel, waiting",
      hAr: "الملك المنتظِر",
      en: "The Prophet ﷺ said: <em>“How can I be at ease when the one with the Horn has put the Horn to his mouth, inclined his forehead and is listening, waiting to be commanded to blow?”</em> The Companions said: what shall we say? He said: <em>“Say: Allah is sufficient for us, and the best Disposer of affairs. Upon Allah we rely.”</em>",
      ar: "قال النبيُّ ﷺ: «كيف أنعم وصاحب القرن قد التقم القرن وحنى جبهته وأصغى سمعه ينتظر أن يُؤمر فينفخ؟» قالوا: كيف نقول؟ قال: «قولوا: حسبنا الله ونعم الوكيل، على الله توكّلنا».",
      ref: "Jami at-Tirmidhi, Hadith 2431 — from Abu Sa'id al-Khudri",
      strength: "Hasan — graded hasan by at-Tirmidhi and authenticated by al-Albani" },
    { h: "The Horn itself",
      hAr: "الصور نفسه",
      en: "The Prophet ﷺ was asked what the Sur is, and said: <em>“A horn that is blown into.”</em> In another report, describing its size: <em>“By the One in whose hand is my soul, the circumference of its opening is like the breadth of the heavens and the earth.”</em>",
      ar: "سُئل النبيُّ ﷺ عن الصور فقال: «قرنٌ يُنفخ فيه». وفي وصف عِظَمه: «والذي نفسي بيده، إنّ عِظَم دارته لكعَرض السماوات والأرض».",
      ref: "Sunan Abu Dawud 4742 and Jami at-Tirmidhi 2430 (\"a horn that is blown into\"); the description of its size is in the sunan collections",
      strength: "The first is hasan/sahih — authenticated by al-Albani. The wording about its size is a supporting narration, weaker than the first" }
  ],
  plain: {
    lead: "Three plain facts, before anything dramatic happens.",
    leadAr: "ثلاث حقائق بيّنة قبل أن يقع شيء من الأهوال.",
    groups: [
      { points: [
          { en: "<strong>الصُّور (the Sur)</strong> is a <strong>horn</strong> — the Prophet ﷺ was asked directly and answered in three words: a horn that is blown into.",
            ar: "<strong>الصُّور</strong> هو <strong>قرن</strong>؛ سُئل النبيُّ ﷺ عنه فأجاب بثلاث كلمات: قرنٌ يُنفخ فيه." },
          { en: "<strong>إسرافيل (Israfil)</strong> is the angel who holds it. He has it <strong>at his mouth already</strong>, head bent, listening — waiting only for the command.",
            ar: "<strong>إسرافيل</strong> عليه السلام هو الموكَّل به، وقد <strong>التقمه</strong> وحنى جبهته وأصغى سمعه، لا ينتظر إلا الأمر." },
          { en: "The Prophet ﷺ said this to explain <strong>why he could not be at ease</strong>. And when the Companions asked what to do about it, he did not give them a long programme — he gave them one sentence to say: <strong>حسبنا الله ونعم الوكيل</strong>.",
            ar: "وإنّما قاله النبيُّ ﷺ بيانًا لِـ<strong>لِمَ لا يَنعَم</strong>. ولمّا سأله الصحابة ماذا يصنعون لم يأمرهم ببرنامجٍ طويل، بل بكلمةٍ واحدة: <strong>حسبنا الله ونعم الوكيل</strong>." }
        ] }
    ]
  }
},
{
  id: "j-blast-death",
  phase: "end",
  icon: "🌑",
  title: "The blast — and everything that is alive dies at once",
  titleAr: "النفخة — فيموت كلُّ حيٍّ في وقتٍ واحد",
  lead: "The world does not wind down. It is stopped, in the middle of an ordinary afternoon.",
  leadAr: "لا تنطفئ الدنيا شيئًا فشيئًا، وإنّما تُوقَف في وسط يومٍ عاديّ.",
  body: [
    { h: "It comes while people are in the middle of their business",
      hAr: "تأتي والناس في شؤونهم",
      en: "The Prophet ﷺ said: <em>“The Hour will come while two men have spread out a garment between them and they will neither complete the transaction nor fold it up. The Hour will come while a man is lifting the milk of his she-camel to his mouth and he will not drink it. The Hour will come while a man is plastering his water-trough and he will not water his animals from it. The Hour will come while one of you has lifted his morsel to his mouth and he will not eat it.”</em>",
      ar: "قال النبيُّ ﷺ: «لتقومنّ الساعة وقد نشر الرجلان ثوبهما بينهما فلا يتبايعانه ولا يطويانه، ولتقومنّ الساعة وقد انصرف الرجل بلبن لِقحته فلا يطعمه، ولتقومنّ الساعة وهو يليط حوضه فلا يسقي فيه، ولتقومنّ الساعة وقد رفع أُكلته إلى فيه فلا يطعمها».",
      ref: "Sahih al-Bukhari, Book of Afflictions, Hadith 7121; also narrated by Muslim",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" },
    { h: "What the Quran says happens to the world",
      hAr: "ما ذكره القرآن ممّا يقع للكون",
      en: "The Quran describes it in short, hammering verses. <strong>The mountains</strong> become <em>“like carded wool”</em> (101:5) and are <em>“set moving, so they become a mirage”</em> (78:20). <strong>The seas</strong> are <em>“made to burst forth”</em> (82:3) and <em>“set on fire”</em> (81:6). <strong>The sky</strong> is <em>“split apart, and becomes rose-coloured like oil”</em> (55:37), and <strong>the stars</strong> are <em>“scattered”</em> (82:2). <strong>The sun and the moon</strong>: the sun is <em>“wrapped up”</em> and the moon <em>“eclipsed”</em>, and the two are <em>“joined together”</em> (75:8–9).\n\nAnd the earth: <em>“When the earth is shaken with its earthquake, and the earth throws out its burdens, and man says: what is wrong with it?”</em> (99:1–3).",
      ar: "وصفه القرآن بآياتٍ قصارٍ متتابعة. فـ<strong>الجبال</strong> ﴿كَٱلْعِهْنِ ٱلْمَنفُوشِ﴾ [القارعة: ٥]، و﴿وَسُيِّرَتِ ٱلْجِبَالُ فَكَانَتْ سَرَابًا﴾ [النبأ: ٢٠]. و<strong>البحار</strong> ﴿وَإِذَا ٱلْبِحَارُ فُجِّرَتْ﴾ [الانفطار: ٣]، ﴿وَإِذَا ٱلْبِحَارُ سُجِّرَتْ﴾ [التكوير: ٦]. و<strong>السماء</strong> ﴿فَإِذَا ٱنشَقَّتِ ٱلسَّمَآءُ فَكَانَتْ وَرْدَةً كَٱلدِّهَانِ﴾ [الرحمن: ٣٧]، و<strong>النجوم</strong> ﴿وَإِذَا ٱلنُّجُومُ ٱنكَدَرَتْ﴾ [التكوير: ٢]. و<strong>الشمس والقمر</strong>: ﴿وَخَسَفَ ٱلْقَمَرُ • وَجُمِعَ ٱلشَّمْسُ وَٱلْقَمَرُ﴾ [القيامة: ٨–٩].\n\nوأمّا الأرض: ﴿إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا • وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا • وَقَالَ ٱلْإِنسَٰنُ مَا لَهَا﴾ [الزلزلة: ١–٣].",
      ref: "Surah Al-Qari'ah 101:5; An-Naba 78:20; Al-Infitar 82:2–3; At-Takwir 81:6; Ar-Rahman 55:37; Al-Qiyamah 75:8–9; Az-Zalzalah 99:1–3",
      strength: "Quran" },
    { h: "And then no one is left",
      hAr: "ثمّ لا يبقى أحد",
      en: "<em>“And the Trumpet will be blown, and whoever is in the heavens and whoever is on the earth will fall dead — except whom Allah wills.”</em> (39:68)\n\nThen: <em>“To whom belongs the sovereignty this Day?”</em> — and there is no one left to answer, so the answer is given: <em>“To Allah, the One, the Subduer.”</em> (40:16)",
      ar: "﴿وَنُفِخَ فِى ٱلصُّورِ فَصَعِقَ مَن فِى ٱلسَّمَٰوَٰتِ وَمَن فِى ٱلْأَرْضِ إِلَّا مَن شَآءَ ٱللَّهُ﴾ [الزمر: ٦٨].\n\nثمّ ﴿لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ﴾ فلا يبقى مجيب، فيأتي الجواب: ﴿لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ﴾ [غافر: ١٦].",
      ref: "Surah Az-Zumar 39:68; Surah Ghafir 40:16",
      strength: "Quran" }
  ],
  plain: {
    lead: "The most frightening detail is not the mountains or the seas. It is <strong>how ordinary the moment is when it starts</strong>.",
    leadAr: "ليس أفزعَ ما فيه الجبالُ ولا البحار، وإنّما <strong>كم هي عاديّةٌ تلك اللحظة التي يبدأ فيها</strong>.",
    groups: [
      { head: "How it begins",
        headAr: "كيف يبدأ",
        points: [
          { en: "Two men are haggling over a cloth — <strong>they never finish the sale</strong>.",
            ar: "رجلان ينشران ثوبًا للبيع، <strong>فلا يتمّ البيع</strong>." },
          { en: "A man is carrying milk to his mouth — <strong>he never drinks it</strong>.",
            ar: "ورجلٌ يرفع لبنه إلى فيه، <strong>فلا يشربه</strong>." },
          { en: "A man has lifted food to his mouth — <strong>he never eats it</strong>.",
            ar: "ورجلٌ رفع لقمته إلى فيه، <strong>فلا يأكلها</strong>." },
          { en: "So there is <strong>no warning at the end</strong>. The warnings all came earlier.",
            ar: "فليس ثمّة <strong>إنذارٌ في آخر لحظة</strong>؛ فقد مضت النُّذُر كلّها قبل ذلك." }
        ] },
      { head: "What happens to the world (all of this is Quran)",
        headAr: "ما يقع للكون (وكلّه قرآن)",
        points: [
          { en: "<strong>The mountains</strong> become like <em>carded wool</em> — fluffed-up wool that the wind carries — and move until they are a <em>mirage</em>.",
            ar: "<strong>الجبال</strong> تصير <em>كالعِهن المنفوش</em> — أي الصوف المندوف تحمله الريح — وتُسيَّر حتى تكون <em>سرابًا</em>." },
          { en: "<strong>The seas</strong> burst open, and are set on fire.",
            ar: "و<strong>البحار</strong> تُفجَّر وتُسجَّر — أي تُوقَد نارًا." },
          { en: "<strong>The sky</strong> splits and turns rose-red like molten oil; <strong>the stars</strong> scatter.",
            ar: "و<strong>السماء</strong> تنشقّ فتكون وردةً كالدِّهان، و<strong>النجوم</strong> تنكدر." },
          { en: "<strong>The sun is wrapped up, the moon eclipsed</strong>, and the two are joined together.",
            ar: "و<strong>الشمس تُكوَّر، والقمر يُخسف</strong>، ويُجمعان." },
          { en: "<strong>The earth</strong> is shaken and <strong>throws out everything inside it</strong> — and man asks: what is wrong with it?",
            ar: "و<strong>الأرض</strong> تُزلزل و<strong>تُخرج ما في بطنها</strong>، فيقول الإنسان: ما لها؟" }
        ] },
      { head: "And then the sentence with no one left to answer it",
        headAr: "ثمّ السؤال الذي لا مجيب له",
        points: [
          { en: "Everyone in the heavens and the earth <strong>falls dead</strong> — except whom Allah wills.",
            ar: "يصعق <strong>من في السماوات ومن في الأرض</strong> إلا من شاء الله." },
          { en: "Then the question is asked: <strong>“To whom belongs the sovereignty this Day?”</strong> — and <strong>nobody is alive to reply</strong>. So Allah answers Himself: <strong>“To Allah, the One, the Subduer.”</strong>",
            ar: "ثمّ يُنادى: <strong>﴿لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ﴾</strong> <strong>فلا يبقى حيٌّ يجيب</strong>، فيجيب سبحانه: <strong>﴿لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ﴾</strong>." }
        ] }
    ]
  }
},
{
  id: "j-tailbone",
  phase: "rising",
  icon: "🦴",
  title: "The one bone that does not rot — and you are grown back from it",
  titleAr: "العظم الذي لا يبلى — ومنه تُركَّب من جديد",
  lead: "Everything of a body decays except one small bone at the base of the spine.",
  leadAr: "يبلى كلُّ شيءٍ من البدن إلا عظمًا صغيرًا في أسفل الظهر.",
  body: [
    { h: "The bone",
      hAr: "العظم",
      en: "The Prophet ﷺ said: <em>“There is nothing of a human being that does not decay, except one bone — the tailbone (عَجْب الذَّنَب). From it the creation is assembled on the Day of Resurrection.”</em>",
      ar: "قال النبيُّ ﷺ: «ليس من الإنسان شيءٌ إلا يبلى، إلا عظمًا واحدًا وهو عَجْب الذَّنَب، ومنه يُركَّب الخلق يوم القيامة».",
      ref: "Sahih al-Bukhari, Book of Tafsir, Hadith 4935; also Sahih Muslim, Book of Tribulations, Hadith 2955 — from Abu Hurayrah",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" },
    { h: "Forty — and Abu Hurayrah refused to guess what kind",
      hAr: "أربعون — وأبى أبو هريرة أن يظنّ",
      en: "In the same hadith: <em>“Between the two blasts is forty.”</em> They said: <em>“Abu Hurayrah, forty days?”</em> He said: <em>“I refuse.”</em> <em>“Forty months?”</em> He said: <em>“I refuse.”</em> <em>“Forty years?”</em> He said: <em>“I refuse.”</em>\n\nThen Allah sends down water, <strong>and they grow as a plant grows</strong>.",
      ar: "وفي الحديث نفسه: «ما بين النفختين أربعون». قالوا: يا أبا هريرة، أربعون يومًا؟ قال: أبيت. قالوا: أربعون شهرًا؟ قال: أبيت. قالوا: أربعون سنة؟ قال: أبيت.\n\nثمّ يُنزل الله من السماء ماءً <strong>فينبتون كما ينبت البقل</strong>.",
      ref: "Sahih al-Bukhari, Hadith 4935; Sahih Muslim, Hadith 2955",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" }
  ],
  plain: {
    lead: "This is the answer to the oldest objection there is: <em>a body rots — so how is it brought back?</em>",
    leadAr: "هذا جواب أقدم اعتراضٍ يُقال: <em>البدن يبلى، فكيف يُعاد؟</em>",
    groups: [
      { head: "The bone",
        headAr: "العظم",
        points: [
          { en: "<strong>عَجْب الذَّنَب</strong> is the <strong>tailbone</strong> — the small bone at the very base of the spine, at the bottom of the back.",
            ar: "<strong>عَجْب الذَّنَب</strong> هو <strong>العُصعُص</strong>، العظم الصغير في أسفل العمود الفقريّ في آخر الظهر." },
          { en: "<strong>Everything else of the body decays.</strong> This one does not.",
            ar: "<strong>ويبلى كلُّ ما سواه من البدن</strong>، وأمّا هو فلا يبلى." },
          { en: "<strong>You are re-assembled from it</strong> — the way a whole plant comes out of one seed.",
            ar: "و<strong>منه تُركَّب من جديد</strong>، كما يخرج النبات كلّه من بذرةٍ واحدة." }
        ] },
      { head: "The gap in between",
        headAr: "المدّة بين النفختين",
        points: [
          { en: "Between the blast that kills and the blast that raises is <strong>“forty”</strong> — and the hadith <strong>does not say forty what</strong>.",
            ar: "بين نفخة الصعق ونفخة البعث <strong>«أربعون»</strong>، و<strong>لم يبيّن الحديث أربعون ماذا</strong>." },
          { en: "Abu Hurayrah رضي الله عنه was asked three times — days? months? years? — and <strong>said “I refuse” each time.</strong> He would not guess about something he had not been told.",
            ar: "وسُئل أبو هريرة رضي الله عنه ثلاثًا: أيّامًا؟ شهورًا؟ سنين؟ <strong>فقال في كلّ مرّة: أبيت</strong>؛ أبى أن يظنّ فيما لم يُخبَر به." },
          { en: "That refusal is worth copying. <strong>Where the text stops, we stop.</strong>",
            ar: "وهذا الإباء يُقتدى به: <strong>حيث وقف النصّ نقف</strong>." }
        ] },
      { head: "Then the rain",
        headAr: "ثمّ المطر",
        points: [
          { en: "Water is sent down, and people <strong>grow out of the ground like plants</strong> — the hadith's own comparison, not an image someone added.",
            ar: "يُنزَّل الماء <strong>فينبت الناس من الأرض كما ينبت النبات</strong> — وهو تشبيه الحديث نفسه لا تشبيهٌ أُضيف." }
        ] }
    ]
  }
},
{
  id: "j-sun-sweat",
  phase: "rising",
  icon: "☀️",
  title: "The standing — the sun brought near, and sweat to the measure of your deeds",
  titleAr: "الموقف — تدنو الشمس، ويكون العرق على قدر العمل",
  lead: "How long it lasts, why it feels different to different people, and the sweat.",
  leadAr: "كم يطول، ولِمَ يختلف إحساس الناس به، والعَرَق.",
  body: [
    { h: "The sun, and the sweat",
      hAr: "الشمس والعرق",
      en: "The Prophet ﷺ said: <em>“The sun will be brought near to the creation on the Day of Resurrection until it is about a mile from them.”</em> Sulaym ibn Amir said: by Allah, I do not know whether he meant the distance or the instrument used to apply kohl.\n\n<em>“And people will be in sweat according to their deeds. Among them will be one who is in it up to his ankles, one up to his knees, one up to his waist, and one whom the sweat will bridle completely”</em> — and he ﷺ pointed to his mouth.",
      ar: "قال النبيُّ ﷺ: «تُدنى الشمس يوم القيامة من الخلق حتى تكون منهم كمقدار ميل». قال سُليم بن عامر: فوالله ما أدري ما يعني بالميل، أمسافة الأرض أم الميل الذي تُكتحل به العين.\n\n«فيكون الناس على قدر أعمالهم في العرق؛ فمنهم من يكون إلى كعبيه، ومنهم من يكون إلى ركبتيه، ومنهم من يكون إلى حَقْويه، ومنهم من يُلجمه العرق إلجامًا» — وأشار ﷺ بيده إلى فيه.",
      ref: "Sahih Muslim, Book of Paradise, Hadith 2864 — from al-Miqdad ibn al-Aswad",
      strength: "Sahih — Narrated by Muslim" },
    { h: "Fifty thousand years — and how long it feels",
      hAr: "خمسون ألف سنة — وكيف يُحسّ بها",
      en: "Allah describes that Day as <em>“a Day the measure of which is fifty thousand years”</em> (70:4).\n\nAnd about how it is experienced, the Prophet ﷺ said of one who withheld the zakat of his wealth that he will be dealt with <em>“on a Day the measure of which is fifty thousand years, until it is judged between the servants.”</em>\n\nIn a hadith about that Day being <strong>made light for the believer</strong>: <em>“It will be made light for the believer, until it will be lighter upon him than an obligatory prayer that he used to pray in the world.”</em>",
      ar: "وصف الله ذلك اليوم بأنّه ﴿فِى يَوْمٍ كَانَ مِقْدَارُهُۥ خَمْسِينَ أَلْفَ سَنَةٍ﴾ [المعارج: ٤].\n\nوقال النبيُّ ﷺ في مانع زكاة ماله إنّه يُقضى بينه وبين الخلق «في يومٍ كان مقداره خمسين ألف سنة، حتى يُقضى بين العباد».\n\nوجاء في تخفيفه على المؤمن: «إنّها لتُخفَّف على المؤمن حتى تكون أخفَّ عليه من صلاةٍ مكتوبةٍ يصلّيها في الدنيا».",
      ref: "Surah Al-Ma'arij 70:4; Sahih Muslim, Book of Zakat, Hadith 987 (the fifty thousand years); the lightening upon the believer: Musnad Ahmad 11114 — from Abu Sa'id al-Khudri",
      strength: "The verse is Quran; the Muslim hadith is Sahih. The report about it being made light is authenticated by al-Albani, and is outside the two Sahihs" }
  ],
  plain: {
    lead: "The question everyone asks is <em>how long is it?</em> The texts answer that — and then answer a better question: <strong>how long will it feel?</strong>",
    leadAr: "يسأل الناس: كم يطول؟ فتجيب النصوص، ثمّ تجيب عمّا هو أهمّ: <strong>كم يُحسّ بطوله؟</strong>",
    groups: [
      { head: "The conditions",
        headAr: "حال الموقف",
        points: [
          { en: "The sun is brought <strong>about a mile away</strong>. The narrator himself said he did not know whether the Prophet ﷺ meant the distance or the small rod used to apply kohl to the eye — <strong>and he said so rather than guess</strong>.",
            ar: "تدنو الشمس حتى تكون <strong>كمقدار ميل</strong>. وقال الراوي نفسه إنّه لا يدري أراد المسافة أم الميل الذي يُكتحل به، <strong>فصرّح بذلك ولم يظنّ</strong>." },
          { en: "People sweat <strong>in proportion to their deeds</strong> — to the ankles, to the knees, to the waist, or until the sweat <strong>reaches the mouth like a bridle</strong>.",
            ar: "ويعرق الناس <strong>على قدر أعمالهم</strong>: إلى الكعبين، أو الركبتين، أو الحَقْوين، أو <strong>يُلجمهم العرق إلى الفم</strong>." }
        ] },
      { head: "How long",
        headAr: "كم يطول",
        points: [
          { en: "The Quran calls it <strong>a Day whose measure is fifty thousand years</strong>.",
            ar: "سمّاه القرآن <strong>يومًا مقداره خمسين ألف سنة</strong>." },
          { en: "But it is <strong>not the same length for everybody's experience of it</strong>. For the believer it is made light — one narration says lighter than a single obligatory prayer he used to pray in this world.",
            ar: "ولكنّه <strong>ليس سواءً في إحساس الناس به</strong>؛ فيُخفَّف على المؤمن حتى يكون — كما في روايةٍ — أخفَّ من صلاةٍ مكتوبةٍ كان يصلّيها في الدنيا." },
          { en: "So <strong>the same Day is a lifetime to one person and a short wait to another</strong> — and what makes the difference is what he brought with him.",
            ar: "فـ<strong>اليومُ الواحد يكون على أحدهم عمرًا وعلى الآخر انتظارًا يسيرًا</strong>، والفارق ما قدّمه." }
        ] }
    ]
  }
},
{
  id: "j-prayer-first",
  phase: "account",
  icon: "🕌",
  title: "The prayer is looked at first — and if it fails, nothing after it is examined",
  titleAr: "أوّل ما يُنظر فيه الصلاة — فإن فسدت لم يُنظر فيما بعدها",
  lead: "The single most practical thing on this whole page.",
  leadAr: "أنفع ما في هذه الصفحة كلّها عملًا.",
  body: [
    { h: "The order of the reckoning",
      hAr: "ترتيب الحساب",
      en: "The Prophet ﷺ said: <em>“The first thing the servant will be held to account for on the Day of Resurrection is his prayer. If it is sound, he has succeeded and prospered. And if it is corrupt, he has failed and lost.</em>\n\n<em>“And if anything of his obligatory prayer is deficient, the Lord عز وجل says: look — does My servant have any voluntary prayers? — and the deficiency in the obligatory is completed from them. Then the rest of his deeds are dealt with in that way.”</em>",
      ar: "قال النبيُّ ﷺ: «إنّ أوّل ما يُحاسب به العبد يوم القيامة من عمله صلاتُه؛ فإن صلَحت فقد أفلح وأنجح، وإن فسدت فقد خاب وخسر.\n\nفإن انتقص من فريضته شيء قال الربّ عزّ وجلّ: انظروا هل لعبدي من تطوّع؟ فيُكمَّل بها ما انتقص من الفريضة. ثمّ يكون سائر عمله على ذلك».",
      ref: "Jami at-Tirmidhi, Hadith 413; Sunan Abu Dawud 864; Sunan an-Nasa'i 465 — from Abu Hurayrah",
      strength: "Sahih — authenticated by al-Albani; at-Tirmidhi graded it hasan" }
  ],
  plain: {
    lead: "If you take one thing away from this page, take this one — because it is the thing you can act on <strong>tonight</strong>.",
    leadAr: "إن لم تأخذ من هذه الصفحة إلا شيئًا واحدًا فخذ هذا، فإنّه ما تستطيع العمل به <strong>الليلة</strong>.",
    groups: [
      { points: [
          { en: "<strong>The prayer is looked at before anything else.</strong>",
            ar: "<strong>يُنظر في الصلاة قبل كلّ شيء</strong>." },
          { en: "If it is <strong>sound</strong> — he has succeeded, and the rest of the deeds are then looked at.",
            ar: "فإن <strong>صلَحت</strong> فقد أفلح، ثمّ يُنظر في سائر العمل." },
          { en: "If it is <strong>corrupt</strong> — the hadith's words are <em>“he has failed and lost”</em>.",
            ar: "وإن <strong>فسدت</strong> فلفظ الحديث: <em>«فقد خاب وخسر»</em>." },
          { en: "<strong>And here is the mercy in it:</strong> if the obligatory prayers are found lacking, Allah says <em>look — does My servant have any voluntary prayers?</em> — and <strong>the shortfall is topped up from them</strong>.",
            ar: "<strong>وهنا الرحمة فيه:</strong> إذا نقصت الفريضة قال الله: <em>انظروا هل لعبدي من تطوّع؟</em> <strong>فيُكمَّل النقص منها</strong>." },
          { en: "Which means the two rak'ahs you pray before Dhuhr, or the sunnah after Maghrib, or the two on entering the mosque, are <strong>not extras</strong>. They are the <strong>repair fund for your obligatory prayers</strong>.",
            ar: "ومعناه أنّ الركعتين قبل الظهر، وسنّة المغرب، وتحيّة المسجد، <strong>ليست فضولًا</strong>، وإنّما هي <strong>ما يُرمَّم به نقص فرائضك</strong>." },
          { en: "And the hadith ends by saying <strong>the rest of the deeds are handled the same way</strong> — the same repair applies to zakat, to fasting, and to the others.",
            ar: "وختم الحديث بأنّ <strong>سائر العمل على ذلك</strong>؛ فالترميم نفسه يجري في الزكاة والصيام وغيرهما." }
        ] }
    ]
  }
},
{
  id: "j-najwa",
  phase: "account",
  icon: "🤫",
  title: "Alone with Allah, behind a screen — and the sins are covered before they are forgiven",
  titleAr: "النجوى — ويُستَر عليه ثمّ يُغفَر له",
  lead: "The believer's reckoning is private. The other is announced in front of everyone.",
  leadAr: "حسابُ المؤمن سِرٌّ، والآخر يُنادى به على رؤوس الخلائق.",
  body: [
    { h: "The private conversation",
      hAr: "النجوى",
      en: "Ibn Umar رضي الله عنهما said he heard the Prophet ﷺ say: <em>“Allah will bring the believer near and place His screen over him and cover him. He will say: do you know such a sin? Do you know such a sin? He says: yes, my Lord — until he has made him admit his sins and he sees within himself that he is ruined.</em>\n\n<em>“Allah says: I covered them for you in the world, and I forgive them for you today. Then he is given the book of his good deeds.</em>\n\n<em>“But as for the disbelievers and the hypocrites, the witnesses will say: these are the ones who lied against their Lord. Indeed, the curse of Allah is upon the wrongdoers.”</em>",
      ar: "عن ابن عمر رضي الله عنهما قال: سمعتُ النبيّ ﷺ يقول: «إنّ الله يُدني المؤمن فيضع عليه كنفه ويستره، فيقول: أتعرف ذنب كذا؟ أتعرف ذنب كذا؟ فيقول: نعم أي ربّ، حتى إذا قرّره بذنوبه ورأى في نفسه أنّه هلك، قال: سترتُها عليك في الدنيا، وأنا أغفرها لك اليوم. فيُعطى كتاب حسناته.\n\nوأمّا الكفّار والمنافقون فيقول الأشهاد: ﴿هَٰٓؤُلَآءِ ٱلَّذِينَ كَذَبُوا۟ عَلَىٰ رَبِّهِمْ ۚ أَلَا لَعْنَةُ ٱللَّهِ عَلَى ٱلظَّٰلِمِينَ﴾».",
      ref: "Sahih al-Bukhari, Book of Oppressions, Hadith 2441; also narrated by Muslim in the Book of Repentance — the verse is Surah Hud 11:18",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" },
    { h: "And He speaks to each one with no interpreter",
      hAr: "ويكلّمه ربُّه ليس بينهما ترجمان",
      en: "The Prophet ﷺ said: <em>“There is not one of you but his Lord will speak to him, with no interpreter between them. He will look to his right and see nothing but what he sent ahead. He will look to his left and see nothing but what he sent ahead. He will look in front of him and see nothing but the Fire facing him. So protect yourselves from the Fire, even with half a date.”</em>",
      ar: "قال النبيُّ ﷺ: «ما منكم من أحدٍ إلا سيُكلّمه ربُّه ليس بينه وبينه ترجمان، فينظر أيمن منه فلا يرى إلا ما قدّم، وينظر أشأم منه فلا يرى إلا ما قدّم، وينظر بين يديه فلا يرى إلا النار تلقاء وجهه؛ فاتّقوا النار ولو بشقّ تمرة».",
      ref: "Sahih al-Bukhari, Book of Zakat, Hadith 1413; also narrated by Muslim — from Adiy ibn Hatim",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" }
  ],
  plain: {
    lead: "This is one of the most merciful scenes in the whole subject, and it is often told badly. <strong>The believer is not exposed. He is screened.</strong>",
    leadAr: "هذا من أرحم ما في الباب، وكثيرًا ما يُساء نقله. <strong>فالمؤمن لا يُفضح، بل يُستر</strong>.",
    groups: [
      { head: "What happens to the believer",
        headAr: "ما يقع للمؤمن",
        points: [
          { en: "He is brought <strong>near</strong>, and Allah <strong>puts His screen over him</strong> so that nobody else sees or hears.",
            ar: "يُدنى، و<strong>يضع الله عليه كنفه</strong> فلا يرى ولا يسمع أحدٌ سواه." },
          { en: "He is asked, sin by sin: <strong>do you know this one?</strong> And he admits each one.",
            ar: "ويُسأل ذنبًا ذنبًا: <strong>أتعرف ذنب كذا؟</strong> فيُقرّ بكلّ واحد." },
          { en: "He reaches the point where <strong>he is certain he is finished</strong>.",
            ar: "حتى يبلغ الموضع الذي <strong>يوقن فيه أنّه هلك</strong>." },
          { en: "And then: <strong>“I covered them for you in the world, and I forgive them for you today.”</strong>",
            ar: "ثمّ يقال له: <strong>«سترتُها عليك في الدنيا، وأنا أغفرها لك اليوم»</strong>." }
        ] },
      { head: "And to the other",
        headAr: "وما يقع للآخر",
        points: [
          { en: "There is <strong>no screen</strong>. The witnesses announce it <strong>in front of everyone</strong>: these are the ones who lied against their Lord.",
            ar: "<strong>لا سِتر</strong>؛ ويقول الأشهاد <strong>على رؤوس الخلائق</strong>: هؤلاء الذين كذبوا على ربّهم." }
        ] },
      { head: "And this happens to every single person",
        headAr: "وهذا واقعٌ بكلّ أحد",
        points: [
          { en: "<strong>“There is not one of you but his Lord will speak to him, with no interpreter between them.”</strong> Not a select few. Everyone.",
            ar: "<strong>«ما منكم من أحدٍ إلا سيُكلّمه ربُّه ليس بينه وبينه ترجمان»</strong> — لا لطائفةٍ مخصوصة، بل للجميع." },
          { en: "He looks right: <strong>only what he sent ahead</strong>. Left: <strong>only what he sent ahead</strong>. In front: <strong>the Fire</strong>.",
            ar: "ينظر عن يمينه <strong>فلا يرى إلا ما قدّم</strong>، وعن شماله <strong>فلا يرى إلا ما قدّم</strong>، وبين يديه <strong>النار</strong>." },
          { en: "And the Prophet ﷺ ended it with the smallest possible instruction: <strong>“protect yourselves from the Fire, even with half a date.”</strong>",
            ar: "وختمه ﷺ بأيسر ما يكون من الأمر: <strong>«فاتّقوا النار ولو بشقّ تمرة»</strong>." }
        ] }
    ]
  }
},
{
  id: "j-sirat",
  phase: "end2",
  icon: "🌉",
  title: "The Bridge over Hell — and the speeds people cross at",
  titleAr: "الصراط على متن جهنّم — وسرعات الناس عليه",
  lead: "Everyone crosses. Nobody goes around it. The difference is only how fast.",
  leadAr: "يمرّ الجميع، ولا مَعدِل عنه. وإنّما الفرق في السرعة.",
  body: [
    { h: "The bridge, the hooks, and the speeds",
      hAr: "الجسر والكلاليب والسرعات",
      en: "The Prophet ﷺ said: <em>“The bridge will be set over Hell… and I will be the first of the messengers to cross with his nation. None will speak that Day but the messengers, and the messengers' words that Day will be: O Allah, save, save (اللهم سلّم سلّم).</em>\n\n<em>“In Hell there are hooks like the thorns of the Sa'dan. Have you seen the thorns of the Sa'dan?”</em> They said yes. He said: <em>“They are like the thorns of the Sa'dan, except that none knows their size but Allah. They snatch people according to their deeds.</em>\n\n<em>“Among them is the believer who remains because of his deeds, and among them is the one who is dealt a heavy blow and then delivered.”</em>\n\nAnd of the speeds: they pass <em>“like the blink of an eye, like lightning, like the wind, like birds, like the finest horses and riding-camels. So one is delivered safe and sound, one is scratched and let go, and one is dumped into the Fire of Hell.”</em>",
      ar: "قال النبيُّ ﷺ: «ويُضرب الجسر على جهنّم… وأكون أوّل من يجوز من الرسل بأمّته، ولا يتكلّم يومئذٍ أحدٌ إلا الرسل، ودعوى الرسل يومئذٍ: اللهمّ سلّم سلّم.\n\nوفي جهنّم كلاليب مثل شوك السَّعدان، هل رأيتم شوك السعدان؟» قالوا: نعم. قال: «فإنّها مثل شوك السعدان، غير أنّه لا يعلم قدر عِظَمها إلا الله، تخطف الناس بأعمالهم.\n\nفمنهم المؤمن بقي بعمله، ومنهم المُجازى حتى يُنجّى».\n\nوفي السرعات: يمرّون «كطرف العين، وكالبرق، وكالريح، وكالطير، وكأجاويد الخيل والركاب؛ فناجٍ مُسلَّم، ومخدوشٌ مُرسَل، ومَكْدوسٌ في نار جهنّم».",
      ref: "Sahih al-Bukhari, Book of Adhan, Hadith 806; and Sahih Muslim, Book of Faith, Hadith 182 and 183 — from Abu Hurayrah and Abu Sa'id al-Khudri",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" }
  ],
  plain: {
    lead: "Two things people get wrong about the Bridge. First, <strong>everybody goes over it</strong>. Second, <strong>the Prophet ﷺ crosses first and then stands there praying for the rest</strong>.",
    leadAr: "أمران يُخطئ فيهما الناس في الصراط: أوّلهما أنّ <strong>الجميع يمرّون عليه</strong>، والثاني أنّ <strong>النبيّ ﷺ يجوز أوّلًا ثمّ يقف يدعو لمن بعده</strong>.",
    groups: [
      { head: "What is under it and on it",
        headAr: "ما تحته وما عليه",
        points: [
          { en: "It is laid <strong>over Hell</strong>. There is no other route.",
            ar: "يُضرب <strong>على متن جهنّم</strong>، ولا طريق سواه." },
          { en: "On it are <strong>hooks like the thorns of the Sa'dan</strong> — a desert plant with hard curved thorns — <strong>except that nobody knows their size but Allah</strong>.",
            ar: "وعليه <strong>كلاليب مثل شوك السَّعدان</strong> — نبتٌ صحراويٌّ شوكه صُلبٌ مُعقَّف — <strong>غير أنّه لا يعلم قدر عِظَمها إلا الله</strong>." },
          { en: "They <strong>snatch people according to their deeds</strong>. Not at random.",
            ar: "و<strong>تخطف الناس بأعمالهم</strong> لا اعتباطًا." }
        ] },
      { head: "The speeds — and they are the deeds, not luck",
        headAr: "السرعات — وهي الأعمال لا الحظّ",
        points: [
          { en: "Like <strong>the blink of an eye</strong>.",
            ar: "<strong>كطرف العين</strong>." },
          { en: "Like <strong>lightning</strong>.",
            ar: "و<strong>كالبرق</strong>." },
          { en: "Like <strong>the wind</strong>.",
            ar: "و<strong>كالريح</strong>." },
          { en: "Like <strong>birds</strong>.",
            ar: "و<strong>كالطير</strong>." },
          { en: "Like <strong>the finest horses and camels</strong>.",
            ar: "و<strong>كأجاويد الخيل والركاب</strong>." },
          { en: "And then the three outcomes in the hadith's own words: <strong>one delivered safe, one scratched and let go, and one dumped into the Fire</strong>.",
            ar: "ثمّ الأحوال الثلاثة بلفظ الحديث: <strong>ناجٍ مُسلَّم، ومخدوشٌ مُرسَل، ومَكْدوسٌ في النار</strong>." }
        ] },
      { head: "And what he ﷺ is doing the whole time",
        headAr: "وما يصنعه ﷺ في ذلك كلّه",
        points: [
          { en: "He crosses <strong>first, with his nation</strong>.",
            ar: "يجوز <strong>أوّلًا بأمّته</strong>." },
          { en: "<strong>Nobody speaks that Day except the messengers</strong> — and what they say is two words, repeated: <strong>اللهم سلّم سلّم</strong> — “O Allah, save them, save them.”",
            ar: "و<strong>لا يتكلّم يومئذٍ إلا الرسل</strong>، وكلمتهم مكرّرة: <strong>اللهمّ سلّم سلّم</strong>." },
          { en: "So he is <strong>already across</strong>, and he is still asking for you.",
            ar: "فهو <strong>قد جاز</strong>، ولا يزال يسأل لك." }
        ] }
    ]
  }
},
{
  id: "j-qantarah",
  phase: "end2",
  icon: "⚖️",
  title: "The Qantarah — where debts between people are settled, after you thought you were safe",
  titleAr: "القنطرة — حيث تُقتصّ المظالم بعد أن ظننتَ أنّك نجوت",
  lead: "You have crossed the Bridge. Paradise is in sight. And there is one more stop.",
  leadAr: "قد جاوزتَ الصراط، والجنّة تُرى. وبقي موقفٌ واحد.",
  body: [
    { h: "The bridge after the Bridge",
      hAr: "القنطرة بعد الصراط",
      en: "The Prophet ﷺ said: <em>“The believers will be delivered from the Fire, and they will be detained on a bridge between Paradise and the Fire. There they will settle with one another the wrongs done between them in the world, until when they are cleaned and purified they will be permitted to enter Paradise.”</em>",
      ar: "قال النبيُّ ﷺ: «يخلص المؤمنون من النار، فيُحبَسون على قنطرةٍ بين الجنّة والنار، فيُقتصّ لبعضهم من بعضٍ مظالم كانت بينهم في الدنيا، حتى إذا هُذّبوا ونُقّوا أُذن لهم بدخول الجنّة».",
      ref: "Sahih al-Bukhari, Book of Oppressions, Hadith 6535 — from Abu Sa'id al-Khudri",
      strength: "Sahih — Narrated by al-Bukhari" },
    { h: "The one who is bankrupt",
      hAr: "المُفلِس",
      en: "The Prophet ﷺ asked: <em>“Do you know who the bankrupt one is?”</em> They said: the one among us with no money and no property. He said:\n\n<em>“The bankrupt of my nation is the one who comes on the Day of Resurrection with prayer, fasting and zakat — and comes having insulted this one, slandered that one, consumed the wealth of this one, spilled the blood of that one and struck this one. So this one is given from his good deeds and that one is given from his good deeds. And if his good deeds run out before what he owes is settled, their sins are taken and thrown upon him, and then he is thrown into the Fire.”</em>",
      ar: "قال النبيُّ ﷺ: «أتدرون ما المُفلِس؟» قالوا: المُفلِس فينا من لا درهم له ولا متاع. فقال:\n\n«إنّ المُفلِس من أمّتي من يأتي يوم القيامة بصلاةٍ وصيامٍ وزكاة، ويأتي وقد شتم هذا، وقذف هذا، وأكل مال هذا، وسفك دم هذا، وضرب هذا؛ فيُعطى هذا من حسناته وهذا من حسناته. فإن فنيت حسناته قبل أن يُقضى ما عليه أُخذ من خطاياهم فطُرحت عليه، ثمّ طُرح في النار».",
      ref: "Sahih Muslim, Book of Virtue and Good Manners, Hadith 2581 — from Abu Hurayrah",
      strength: "Sahih — Narrated by Muslim" }
  ],
  plain: {
    lead: "This is the part that should change how you treat people <strong>this week</strong>, and it is the one most people have never heard.",
    leadAr: "هذا الموضع هو الذي ينبغي أن يغيّر معاملتك للناس <strong>هذا الأسبوع</strong>، وهو أقلّ ما سمع الناس به.",
    groups: [
      { head: "What the Qantarah is",
        headAr: "ما القنطرة",
        points: [
          { en: "A <strong>bridge between Paradise and the Fire</strong>, after the Sirat has already been crossed.",
            ar: "<strong>قنطرةٌ بين الجنّة والنار</strong>، بعد مجاوزة الصراط." },
          { en: "The believers are <strong>held there</strong> — not thrown back, but <strong>not let in yet either</strong>.",
            ar: "<strong>يُحبَس عليها المؤمنون</strong> — لا يُردّون، و<strong>لا يُؤذن لهم بعدُ</strong>." },
          { en: "There, <strong>the wrongs people did to each other are settled</strong> between them.",
            ar: "وفيها <strong>يُقتصّ بعضهم من بعضٍ في المظالم</strong>." },
          { en: "Only <strong>when they are cleaned and purified</strong> are they permitted to enter.",
            ar: "ولا يُؤذن لهم <strong>حتى يُهذَّبوا ويُنقَّوا</strong>." }
        ] },
      { head: "And what it means to be bankrupt there",
        headAr: "ومعنى الإفلاس هناك",
        points: [
          { en: "The Companions thought <em>bankrupt</em> meant having no money. He ﷺ told them it means something else entirely.",
            ar: "ظنّ الصحابة أنّ <em>المُفلِس</em> من لا مال له، فبيّن ﷺ أنّه شيءٌ آخر بالكلّيّة." },
          { en: "A man arrives <strong>with prayer, fasting and zakat</strong> — a genuinely religious man.",
            ar: "يأتي الرجل <strong>بصلاةٍ وصيامٍ وزكاة</strong>، وهو رجلٌ ذو دين." },
          { en: "But he also <strong>insulted someone, slandered someone, took someone's money, hit someone, spilled someone's blood</strong>.",
            ar: "لكنّه أيضًا <strong>شتم فلانًا، وقذف فلانًا، وأكل مال فلان، وضرب فلانًا، وسفك دم فلان</strong>." },
          { en: "So <strong>his good deeds are handed over to them</strong>, one claimant at a time.",
            ar: "فـ<strong>تُدفع حسناته إليهم</strong> واحدًا بعد واحد." },
          { en: "And if the good deeds <strong>run out before the debts do</strong>, <strong>their sins are taken and put on him</strong> — and then he is thrown into the Fire.",
            ar: "فإن <strong>فنيت حسناته قبل أن تُقضى الديون</strong> <strong>أُخذ من خطاياهم فطُرحت عليه</strong>، ثمّ طُرح في النار." },
          { en: "<strong>The lesson is immediate:</strong> worship does not cancel what you owe people. Forgive what is owed to you, and settle what you owe — while it still costs you nothing but an apology.",
            ar: "<strong>والعبرة عاجلة:</strong> العبادة لا تُسقِط حقوق الناس. فسامِح فيما لك، وأدِّ ما عليك، ما دام الأمر لا يكلّفك إلا اعتذارًا." }
        ] }
    ]
  }
},
{
  id: "j-paradise-entry",
  phase: "end2",
  icon: "🚪",
  title: "The gate is knocked on — and the first meal",
  titleAr: "يُقرَع الباب — وأوّل الطعام",
  lead: "Eight gates, who opens the first one, and what is served.",
  leadAr: "ثمانية أبواب، ومن يُفتح له أوّلًا، وما يُقدَّم.",
  body: [
    { h: "The first to knock",
      hAr: "أوّل من يقرع الباب",
      en: "The Prophet ﷺ said: <em>“I will come to the gate of Paradise on the Day of Resurrection and ask for it to be opened. The keeper will say: who are you? I will say: Muhammad. He will say: I was commanded concerning you — not to open for anyone before you.”</em>",
      ar: "قال النبيُّ ﷺ: «آتي باب الجنّة يوم القيامة فأستفتح، فيقول الخازن: من أنت؟ فأقول: محمّد. فيقول: بك أُمرت، لا أفتح لأحدٍ قبلك».",
      ref: "Sahih Muslim, Book of Faith, Hadith 197 — from Anas ibn Malik",
      strength: "Sahih — Narrated by Muslim" },
    { h: "Eight gates — and some are called from more than one",
      hAr: "ثمانية أبواب — ومنهم من يُدعى من أكثر من باب",
      en: "The Prophet ﷺ said: <em>“Whoever spends a pair of anything in the way of Allah will be called from the gates of Paradise: O servant of Allah, this is good. So whoever was of the people of prayer will be called from the gate of prayer; whoever was of the people of jihad, from the gate of jihad; whoever was of the people of fasting, from the gate of Ar-Rayyan; whoever was of the people of charity, from the gate of charity.”</em>\n\nAbu Bakr رضي الله عنه asked whether anyone would be called from all of them, and he ﷺ said yes — and that he hoped Abu Bakr would be one of them.\n\nAnd he ﷺ said: <em>“In Paradise there are eight gates, among them a gate called Ar-Rayyan, which none enters but those who fast.”</em>",
      ar: "قال النبيُّ ﷺ: «من أنفق زوجين في سبيل الله نُودي من أبواب الجنّة: يا عبد الله، هذا خير. فمن كان من أهل الصلاة دُعي من باب الصلاة، ومن كان من أهل الجهاد دُعي من باب الجهاد، ومن كان من أهل الصيام دُعي من باب الريّان، ومن كان من أهل الصدقة دُعي من باب الصدقة».\n\nفسأل أبو بكر رضي الله عنه: هل يُدعى أحدٌ من تلك الأبواب كلّها؟ قال: «نعم، وأرجو أن تكون منهم».\n\nوقال ﷺ: «في الجنّة ثمانية أبواب، فيها بابٌ يُسمّى الريّان لا يدخله إلا الصائمون».",
      ref: "Sahih al-Bukhari, Book of Jihad, Hadith 3666 and Book of Fasting, Hadith 1896–1897; also narrated by Muslim",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" },
    { h: "The first thing eaten",
      hAr: "أوّل ما يُؤكَل",
      en: "In the long hadith of Abdullah ibn Salam, the Prophet ﷺ was asked what the first thing the people of Paradise eat is, and said: <em>“The extra lobe of the fish's liver (زيادة كبد الحوت).”</em>\n\nAnd of what it is eaten with: the Prophet ﷺ said that on the Day of Resurrection <em>“the earth will be one loaf of bread, which the Almighty will turn over in His hand as one of you turns over his loaf when travelling — a hospitality-gift for the people of Paradise.”</em>",
      ar: "في حديث عبد الله بن سلام الطويل سُئل النبيُّ ﷺ عن أوّل ما يأكل أهل الجنّة فقال: «<strong>زيادة كبد الحوت</strong>».\n\nوقال ﷺ: «تكون الأرض يوم القيامة خُبزةً واحدة، يتكفّؤها الجبّار بيده كما يتكفّأ أحدكم خُبزته في السفر — نُزُلًا لأهل الجنّة».",
      ref: "Sahih al-Bukhari, Book of the Stories of the Prophets, Hadith 3329 (the liver); Sahih al-Bukhari, Book of Softening the Hearts, Hadith 6520 (the earth as a loaf); both also in Sahih Muslim",
      strength: "Sahih — Agreed upon (al-Bukhari and Muslim)" }
  ],
  plain: {
    lead: "Three details here that are often told wrongly — including a number.",
    leadAr: "ثلاثة تفاصيل يُخطئ الناس في نقلها، ومنها عدد.",
    groups: [
      { head: "The number of gates",
        headAr: "عدد الأبواب",
        points: [
          { en: "<strong>Paradise has EIGHT gates.</strong> Not seven. The hadith says eight explicitly.",
            ar: "<strong>للجنّة ثمانية أبواب</strong>، لا سبعة؛ والحديث نصٌّ في الثمانية." },
          { en: "It is <strong>Hell</strong> that has <strong>seven</strong> gates — <em>“It has seven gates”</em> (Surah Al-Hijr 15:44). The two numbers get swapped constantly.",
            ar: "وإنّما <strong>لجهنّم سبعة أبواب</strong> — ﴿لَهَا سَبْعَةُ أَبْوَٰبٍ﴾ [الحجر: ٤٤]. وكثيرًا ما يقع الخلط بين العددين." },
          { en: "The gates are named for <strong>the deeds</strong>: a gate of prayer, a gate of jihad, a gate of charity, and <strong>Ar-Rayyan</strong> — which <strong>only those who fasted</strong> enter.",
            ar: "والأبواب مسمّاةٌ بـ<strong>الأعمال</strong>: باب الصلاة، وباب الجهاد، وباب الصدقة، و<strong>الريّان</strong> الذي <strong>لا يدخله إلا الصائمون</strong>." },
          { en: "And some people are <strong>called from all of them</strong> — the Prophet ﷺ said he hoped Abu Bakr would be one of them.",
            ar: "ومنهم من <strong>يُدعى من الأبواب كلّها</strong>؛ ورجا النبيُّ ﷺ أن يكون أبو بكر منهم." }
        ] },
      { head: "Who goes in first",
        headAr: "من يدخل أوّلًا",
        points: [
          { en: "The Prophet ﷺ knocks, and the gatekeeper asks who it is. He says: <strong>Muhammad</strong>.",
            ar: "يستفتح النبيُّ ﷺ، فيقول الخازن: من أنت؟ فيقول: <strong>محمّد</strong>." },
          { en: "The keeper answers: <strong>“I was commanded concerning you — not to open for anyone before you.”</strong>",
            ar: "فيقول: <strong>«بك أُمرت، لا أفتح لأحدٍ قبلك»</strong>." }
        ] },
      { head: "The first meal",
        headAr: "أوّل الطعام",
        points: [
          { en: "The first food is <strong>زيادة كبد الحوت</strong> — the <strong>extra lobe of the fish's liver</strong>, the choicest part of it.",
            ar: "أوّل الطعام <strong>زيادة كبد الحوت</strong>، وهي أطيب ما فيه." },
          { en: "And the bread: the Prophet ﷺ said <strong>the earth itself becomes one loaf</strong> on that Day — a welcome-gift for the people of Paradise.",
            ar: "وأمّا الخبز فقال ﷺ إنّ <strong>الأرض تكون خُبزةً واحدة</strong> يومئذٍ، نُزُلًا لأهل الجنّة." }
        ] }
    ]
  }
}


];
