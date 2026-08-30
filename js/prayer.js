/* ============================================================
   THE PRAYER, IN PRACTICE — الصلاة عملًا
   guidance.html#prayer.  Rendered by renderGrouped("prayerBox").

   WHY THIS EXISTS. It was the largest gap left after PART 24, and
   he asked for it by name. The site could already say that prayer
   is the second pillar (#pi-salah), what to SAY inside it
   (#worship), how to wash before it (#bt-how), and what leaving
   it altogether means (#sn-salah). What it could not answer was
   any of the questions a person actually has once they are
   praying:

     when does each prayer's time end
     what actually invalidates it
     I lost count of the rak'ahs
     I think my wudu broke — do I start again
     I slept through Fajr
     I have years of missed prayers
     I am travelling
     can I join two prayers
     I pray and feel nothing

   None of those had an answer. Audited before writing: سجود
   السهو, مبطلات الصلاة and صلاة الجماعة appeared nowhere in any
   file on the site.

   THE HARD ONE IS pr-years, AND IT IS HANDLED HONESTLY. Whether
   a person who abandoned prayer for years must make them all up
   is a genuine, old disagreement — the majority say yes, and
   Ibn Taymiyyah and Ibn Hazm held there is no qada for deliberate
   abandonment and the way back is repentance and voluntary
   prayer. This site does not settle it. It states both, and then
   gives the instruction both positions produce, which is the same
   instruction: start tonight, and ask someone qualified about the
   years while you are already praying.

   ON WHAT IS TEXT AND WHAT IS FIQH. The times, the sleeper, the
   doubt, the traveller's shortening and the congregation are all
   narrations, and they are quoted. The list of what invalidates a
   prayer is the scholars' collation from many texts, and the card
   says so. That distinction is the rule this repo records most
   often, and a page about practice is where it matters most.

   Every proof was read out of the record before it was quoted:
   al-Bukhari 137, 631, 645, 900; Muslim's Book of Mosques (the
   times, the sleeper, the doubt) and Book of the Traveller's
   Prayer (shortening, joining) — cited BY BOOK, never by number;
   at-Tirmidhi 413 with its status stated; Abu Dawud 4985.
   Verses from this site's own js/quran-text.js.
   ============================================================ */

const PRAYER = {
  title: "The prayer, in practice — the questions that come up once you are praying",
  titleAr: "الصلاة عملًا — المسائلُ التي تعرض لك وأنت تصلّي",
  intro: "Nothing here is about whether to pray. It is for the person who already does, and who has hit one of the things nobody explained: the time nearly gone, a lost count, a doubt about wudu, a missed Fajr, a journey, or a prayer that felt like nothing. Every answer names its source, and says where the scholars differ.",
  introAr: "ليس في هذا القسم شيءٌ في وجوب الصلاة، وإنما هو لمن يصلّي بالفعل ثم عرض له ما لم يبيّنه له أحد: وقتٌ كاد يخرج، وعددٌ ضاع عليه، وشكٌّ في الوضوء، وفجرٌ فات، وسفر، وصلاةٌ لم يجد لها أثرًا. ولكلِّ جوابٍ مصدرُه، وفيه بيانُ ما اختلف فيه أهلُ العلم.",

  groups: [
    {
      id: "pg-time", icon: "🕰️",
      title: "The times — and what \"a decree of specified times\" means",
      titleAr: "المواقيت — ومعنى ﴿كِتَٰبًۭا مَّوْقُوتًۭا﴾",
      lead: "Two cards. The first is the timetable in his own words; the second is the question everybody has about being late.",
      leadAr: "بطاقتان: الأولى في المواقيت بلفظه ﷺ، والثانية في السؤال الذي عند كلِّ أحد عن التأخير.",
      items: [
        {
          id: "pr-times", icon: "🌅",
          title: "When each prayer begins and when it runs out",
          titleAr: "متى يدخل كلُّ وقتٍ ومتى يخرج",
          plain: "DHUHR begins when the sun passes its highest point, and lasts until a thing's shadow equals its own length — that is, until Asr comes in.\n\nASR lasts until the sun turns yellow. (It remains valid in an emergency until sunset, but delaying it to that point without an excuse is what the texts warn about.)\n\nMAGHRIB lasts until the red glow on the horizon disappears.\n\nISHA lasts until the middle of the night.\n\nFAJR begins at the true dawn and lasts until the sun rises — and once the edge of the sun appears, stop.",
          plainAr: "الظهرُ يدخل إذا زالت الشمسُ عن كبد السماء، ويمتدّ حتى يصير ظلُّ الشيء مثلَه — أي حتى يحضر العصر.\n\nوالعصرُ إلى أن تصفَرّ الشمس. (ويبقى في الضرورة إلى الغروب، وتأخيرُه إلى ذلك من غير عذرٍ هو الذي جاء فيه الوعيد.)\n\nوالمغربُ إلى أن يغيب الشفق.\n\nوالعشاءُ إلى نصف الليل.\n\nوالفجرُ من طلوع الفجر الصادق إلى أن تطلع الشمس — فإذا طلع حاجبُها فأمسِك.",
          example: "The practical point people miss is that ISHA'S TIME IS NOT ALL NIGHT. The wording is \"until the middle of the night\" — so a person who prays Isha at two in the morning as a habit has been praying it outside its time, not late within it.\n\nAnd the reason for the last clause is stated: the sun rises between the two horns of Shaytan. Which is why there is a short window after sunrise in which no prayer is offered.",
          exampleAr: "والذي يُغفل عمليًّا أنّ وقت العشاء ليس الليلَ كلَّه: فاللفظ «إلى نصف الليل» — فمن اعتاد أن يصلّي العشاء في الثانية بعد منتصف الليل فقد صلّاها خارج وقتها، لا متأخّرًا في وقتها.\n\nوعلّةُ آخره منصوصة: أنّ الشمس تطلع بين قرنَي شيطان، ولذلك كانت بعد الطلوع لحظةٌ لا يُصلَّى فيها.",
          proof: "The time of Dhuhr is when the sun has passed the meridian and a man's shadow is as his height, so long as Asr has not come. The time of Asr is so long as the sun has not turned yellow. The time of Maghrib is so long as the twilight has not vanished. The time of Isha is until the middle of the night. And the time of the dawn prayer is from the break of dawn so long as the sun has not risen — and when the sun rises, hold back from prayer.",
          proofAr: "وَقْتُ الظُّهْرِ إِذَا زَالَتِ الشَّمْسُ وَكَانَ ظِلُّ الرَّجُلِ كَطُولِهِ مَا لَمْ يَحْضُرِ الْعَصْرُ، وَوَقْتُ الْعَصْرِ مَا لَمْ تَصْفَرَّ الشَّمْسُ، وَوَقْتُ صَلَاةِ الْمَغْرِبِ مَا لَمْ يَغِبِ الشَّفَقُ، وَوَقْتُ صَلَاةِ الْعِشَاءِ إِلَى نِصْفِ اللَّيْلِ، وَوَقْتُ صَلَاةِ الصُّبْحِ مِنْ طُلُوعِ الْفَجْرِ مَا لَمْ تَطْلُعِ الشَّمْسُ، فَإِذَا طَلَعَتِ الشَّمْسُ فَأَمْسِكْ عَنِ الصَّلَاةِ",
          ref: "Sahih Muslim, Book of Mosques and Places of Prayer",
          refAr: "صحيح مسلم، كتاب المساجد ومواضع الصلاة",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          extraProof: "Indeed, prayer has been decreed upon the believers a decree of specified times.",
          extraProofAr: "إِنَّ ٱلصَّلَوٰةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَٰبًۭا مَّوْقُوتًۭا",
          extraRef: "Surah An-Nisa (4:103)",
          extraRefAr: "سورة النساء (٤:١٠٣)",
          note: "Local prayer timetables and phone apps calculate these same limits for your latitude and the day of the year, which is why they differ between cities and shift through the year. They are not opinions — they are this hadith, applied with astronomy.",
          noteAr: "وتقاويمُ الصلاة وتطبيقاتُ الهاتف إنما تحسب هذه الحدود بعينها لخطِّ عرضك وليوم السنة، ولهذا اختلفت بين المدن وتحرّكت على مدار العام. وليست آراءً، وإنما هي هذا الحديثُ مطبَّقًا بالحساب الفلكيّ.",
          keys: ["prayer times", "when does dhuhr end", "when does asr end", "how late can i pray isha", "isha time", "fajr time", "asr time", "maghrib time", "did i miss the time", "praying late", "is it too late to pray",
                 "مواقيت الصلاة", "وقت الظهر", "وقت العصر", "وقت المغرب", "وقت العشاء", "وقت الفجر", "متى يخرج الوقت", "فات الوقت", "اصلي متاخر", "الى متى العشاء"]
        },
        {
          id: "pr-late", icon: "⏳",
          title: "Praying at the last minute, every day",
          titleAr: "الصلاةُ في آخر الوقت كلَّ يوم",
          plain: "A prayer offered in the last few minutes of its time is valid. That has to be said first, because a person who thinks it is not will often decide there is no point and skip it.\n\nBut valid is not the same as safe. The Quran's warning is not aimed at people who do not pray — it is aimed at people who DO: \"So woe to those who pray, who are heedless of their prayer.\" The word for heedless is about neglect of the prayer's time and its due, not about a wandering thought inside it.",
          plainAr: "الصلاةُ في آخر دقائق وقتها صحيحة، وحقُّ هذا أن يُقدَّم؛ فإنّ من ظنّ أنها لا تصحّ ربّما رأى ألّا فائدة فتركها.\n\nولكنّ الصحّة غيرُ السلامة. فالوعيدُ في القرآن ليس في تاركي الصلاة، وإنما هو في المصلّين: ﴿فَوَيْلٌۭ لِّلْمُصَلِّينَ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ﴾. والسهوُ ههنا في تضييع وقتها وحقِّها، لا في خاطرٍ يعرض داخلها.",
          example: "A concrete way to test yourself, and it takes a week: write down the time you actually prayed each one. Most people discover it is not the prayer they think it is. Fajr is usually fine because it is tied to waking. Asr is where the pattern shows, because it lands in the middle of a working afternoon and there is always a reason to finish one more thing.\n\nThe fix is almost never willpower. It is moving the decision earlier — praying at the beginning of a time you can control rather than at the end of one you cannot.",
          exampleAr: "واختبارٌ عمليٌّ لنفسك يكفي فيه أسبوع: أن تكتب الوقت الذي صلّيتَ فيه كلَّ صلاة. فيتبيّن لأكثر الناس أنها ليست الصلاةَ التي كانوا يظنّون. والفجرُ في الغالب سليمٌ لأنه معلَّقٌ بالاستيقاظ، وإنما ينكشف الأمرُ في العصر، فإنه يقع في وسط نهار العمل، ولا يزال ثَمَّ سببٌ لإتمام شيءٍ آخر.\n\nوالعلاجُ قلّ أن يكون بالعزيمة، وإنما هو بتقديم القرار: أن تصلّي في أوّل وقتٍ تملكه، لا في آخر وقتٍ لا تملكه.",
          proof: "So woe to those who pray — those who are heedless of their prayer.",
          proofAr: "فَوَيْلٌۭ لِّلْمُصَلِّينَ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
          ref: "Surah Al-Ma'un (107:4-5)",
          refAr: "سورة الماعون (١٠٧:٤-٥)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "Maintain with care the obligatory prayers and the middle prayer, and stand before Allah devoutly obedient.",
          extraProofAr: "حَٰفِظُوا۟ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ وَقُومُوا۟ لِلَّهِ قَٰنِتِينَ",
          extraRef: "Surah Al-Baqarah (2:238)",
          extraRefAr: "سورة البقرة (٢:٢٣٨)",
          keys: ["always pray last minute", "i pray late every day", "rushing my prayer", "praying just before the time ends", "i keep delaying prayer", "asr always late",
                 "اصلي في اخر الوقت", "اؤخر الصلاة", "اتاخر في الصلاة", "استعجل في صلاتي", "العصر دائما متاخر", "ادرك الوقت"]
        }
      ]
    },

    {
      id: "pg-inside", icon: "🧎",
      title: "Inside the prayer — when something goes wrong",
      titleAr: "داخل الصلاة — إذا عرض ما يفسدها أو يشكّك",
      lead: "The three things that actually happen to people, and what to do about each without starting your life again.",
      leadAr: "ثلاثةٌ تقع للناس حقًّا، وما يُصنع في كلٍّ منها من غير أن تستأنف كلَّ شيء.",
      items: [
        {
          id: "pr-breaks", icon: "🚫",
          title: "What actually invalidates a prayer",
          titleAr: "ما الذي يبطل الصلاة حقًّا",
          plain: "Deliberately speaking to someone. Eating or drinking. Losing your wudu. Turning away from the qiblah without excuse. Deliberately leaving out one of the prayer's pillars — the standing, the recitation of al-Fatihah, the bowing, the prostration, the sitting at the end. Laughing out loud. Deliberately adding a rak'ah. And a great deal of continuous movement unrelated to the prayer.\n\nThat is the list. Notice what is NOT on it.",
          plainAr: "الكلامُ عمدًا مخاطبةً لأحد. والأكلُ والشرب. وانتقاضُ الوضوء. والانحرافُ عن القبلة بلا عذر. وتركُ ركنٍ من أركانها عمدًا: القيام، وقراءة الفاتحة، والركوع، والسجود، والقعود الأخير. والقهقهة. وزيادةُ ركعةٍ عمدًا. والحركةُ الكثيرة المتوالية من غير جنس الصلاة.\n\nهذا هو العدّ. وتأمّل ما ليس فيه.",
          example: "NOT on the list: a thought wandering off, and coming back. Forgetting where you were. A phone ringing. Someone walking past. A child climbing on you — he ﷺ prayed while carrying his granddaughter Umamah, putting her down when he prostrated and picking her up when he stood (al-Bukhari 516). Scratching an itch, adjusting your clothes, taking one step. Saying \"subhan Allah\" to alert someone. Crying.\n\nMost of what makes people restart their prayer is on the second list, not the first.",
          exampleAr: "وليس منه: خاطرٌ يشرد ثم يعود. ولا نسيانُ موضعك. ولا هاتفٌ يرنّ. ولا مارٌّ يمرّ. ولا طفلٌ يعلوك — فقد صلّى ﷺ حاملًا أمامةَ ابنة ابنته، يضعها إذا سجد ويحملها إذا قام [البخاري ٥١٦]. ولا حكُّ موضعٍ من بدنك، ولا تسويةُ ثوبك، ولا خطوةٌ واحدة. ولا قولُ «سبحان الله» تنبيهًا. ولا البكاء.\n\nوأكثرُ ما يستأنف الناسُ الصلاةَ لأجله فهو في العدّ الثاني لا الأوّل.",
          note: "SAY WHICH PART IS WHICH. There is no single narration listing these. The list is the scholars' collation from many texts — the hadith on speaking in prayer, on the pillars, on wudu — and the schools differ at the edges over how much movement is \"a great deal\" and over laughing versus smiling. What is above is what they agree on. For an edge case in your own prayer, ask.",
          noteAr: "وبيِّن أيَّ الأمرين هو الأمر: فليس ثَمَّ حديثٌ واحد يعدّ هذه. وإنما العدُّ جمعُ أهل العلم من نصوصٍ متفرّقة — أحاديثِ الكلام في الصلاة، والأركان، والوضوء — واختلفت المذاهب في الأطراف: في حدّ الحركة الكثيرة، وفي القهقهة والتبسّم. وما تقدّم هو موضعُ اتفاقهم. وأمّا الطرَفُ في صلاتك أنت فاسأل عنه.",
          keys: ["what breaks prayer", "does it break my prayer", "invalidate prayer", "did my prayer count", "i spoke in prayer", "i laughed in prayer", "phone rang", "my child climbed on me", "i moved in prayer", "scratching in prayer", "crying in prayer",
                 "مبطلات الصلاة", "ما يبطل الصلاة", "هل بطلت صلاتي", "تكلمت في الصلاة", "ضحكت في الصلاة", "تحركت في الصلاة", "رن الهاتف", "طفلي صعد علي", "الحركة في الصلاة"]
        },
        {
          id: "pr-sahw", icon: "🔢",
          title: "You lost count — build on what you are sure of",
          titleAr: "ضاع عليك العدد — فابنِ على اليقين",
          plain: "This is the commonest problem in prayer and it has an explicit answer, so it should never be guessed at.\n\nIf you do not know whether you have prayed three or four: discard the doubt and BUILD ON WHAT YOU ARE CERTAIN OF — which is the lower number, three. Complete the fourth. Then make two prostrations before saying the salam.\n\nAnd the reason given for those two prostrations is worth knowing: if you had in fact prayed five, they make your prayer even; and if you had completed four exactly, they are a humiliation for Shaytan.",
          plainAr: "هذا أكثرُ ما يعرض في الصلاة، وله جوابٌ منصوص، فلا ينبغي أن يُظنّ فيه.\n\nإذا لم تدرِ أثلاثًا صلّيتَ أم أربعًا: فاطرح الشكّ وابنِ على ما استيقنتَ — وهو الأقلّ: ثلاث. ثم أتمّ الرابعة. ثم اسجد سجدتين قبل أن تسلّم.\n\nوعلّةُ السجدتين مذكورة: فإن كنتَ صلّيتَ خمسًا شفعتا لك صلاتك، وإن كنتَ أتممتَ أربعًا كانتا إرغامًا للشيطان.",
          example: "So the rule is always: take the LOWER number and add the two prostrations. Not the higher, and not a guess about which felt more likely.\n\nWorked: you are standing and cannot tell if this is the third rak'ah or the fourth. Treat it as the third. Pray one more. Sit for the tashahhud, and before the salam make two prostrations as you do in the prayer, with the takbir for each. Then say the salam. The prayer is complete and does not need repeating.",
          exampleAr: "فالقاعدةُ أبدًا: خذ بالأقلّ واسجد سجدتين. لا بالأكثر، ولا بما يغلب على ظنّك أنه أشبه.\n\nومثالٌ محلول: أنت قائمٌ ولا تدري أهذه الثالثة أم الرابعة، فاجعلها الثالثة، وصلِّ ركعةً أخرى، ثم اجلس للتشهّد، وقبل السلام اسجد سجدتين كسجودك في الصلاة، تكبّر لكلٍّ منهما، ثم سلّم. وقد تمّت الصلاةُ ولا تُعاد.",
          proof: "If one of you doubts in his prayer and does not know how much he has prayed, three or four, let him discard the doubt and build on what he is certain of, then prostrate twice before he says the salam. If he had prayed five, they make his prayer even for him; and if he had prayed exactly four, they are a humiliation for Shaytan.",
          proofAr: "إِذَا شَكَّ أَحَدُكُمْ فِي صَلَاتِهِ فَلَمْ يَدْرِ كَمْ صَلَّى، ثَلَاثًا أَمْ أَرْبَعًا، فَلْيَطْرَحِ الشَّكَّ وَلْيَبْنِ عَلَى مَا اسْتَيْقَنَ، ثُمَّ يَسْجُدُ سَجْدَتَيْنِ قَبْلَ أَنْ يُسَلِّمَ؛ فَإِنْ كَانَ صَلَّى خَمْسًا شَفَعْنَ لَهُ صَلَاتَهُ، وَإِنْ كَانَ صَلَّى إِتْمَامًا لِأَرْبَعٍ كَانَتَا تَرْغِيمًا لِلشَّيْطَانِ",
          ref: "Sahih Muslim, Book of Mosques and Places of Prayer",
          refAr: "صحيح مسلم، كتاب المساجد ومواضع الصلاة",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          note: "The schools differ on whether the two prostrations come before or after the salam, and on which case takes which — the narrations support both, and each school built a system out of them. Whichever you were taught, the prayer stands. Nobody's prayer is invalid for putting them on the other side of the salam.",
          noteAr: "واختلفت المذاهبُ في السجدتين: أقبل السلام أم بعده، وفي أيِّ الصور يكون كلٌّ منهما — والأحاديثُ جاءت بالوجهين، وبنى كلُّ مذهبٍ منها نظامًا. فعلى أيِّ ذلك عُلِّمتَ فصلاتُك صحيحة، ولا تبطل صلاةُ أحدٍ لأنه جعلهما في الجهة الأخرى من السلام.",
          keys: ["lost count in prayer", "how many rakats did i pray", "forgot how many rakahs", "sujud sahw", "prostration of forgetfulness", "did i pray three or four", "i made a mistake in prayer", "forgot the tashahhud", "extra rakah",
                 "سجود السهو", "نسيت كم صليت", "شككت في الصلاة", "ثلاث ام اربع", "اخطأت في الصلاة", "نسيت التشهد", "زدت ركعة", "الشك في عدد الركعات"]
        },
        {
          id: "pr-waswas", icon: "💨",
          title: "\"I think my wudu broke\" — the rule that ends the doubt",
          titleAr: "«أظنّ وضوئي انتقض» — والقاعدةُ التي تقطع الوسواس",
          plain: "A man complained to him ﷺ that he imagines something happening during his prayer. The answer is a rule, and it is one of the most freeing sentences in the whole of fiqh:\n\nDo not leave until you HEAR A SOUND or FIND A SMELL.\n\nCertainty is not removed by doubt. You were certain you had wudu; you are only doubting that it broke. The certainty stands.",
          plainAr: "شكا رجلٌ إليه ﷺ أنه يُخيَّل إليه أنه يجد الشيء في الصلاة، فكان الجوابُ قاعدةً هي من أطلق ما في الفقه من عبارة:\n\n«لا ينصرف حتى يسمع صوتًا أو يجد ريحًا».\n\nفاليقينُ لا يزول بالشكّ: أنت متيقّنٌ من الوضوء، وإنما تشكّ في انتقاضه، فيبقى اليقين.",
          example: "This is the single most useful ruling for anyone suffering from waswas — obsessive doubt — about purity, and it is deliberately physical: not \"if you feel unsure\", but a SOUND or a SMELL. Anything less is a whisper and is to be ignored, and continuing the prayer is not a risk you are taking. It is the ruling.\n\nThe same principle runs everywhere: someone who cannot remember whether he washed his arm twice or three times has certainly washed it twice, so he builds on two. Someone unsure whether a drop landed on his clothes is certain they were clean.",
          exampleAr: "وهذه أنفعُ مسألةٍ لمن ابتُلي بالوسواس في الطهارة، وهي حسّيّةٌ قصدًا: فلم يقل «إن شككتَ»، وإنما قال صوتًا أو ريحًا. وما دون ذلك وسوسةٌ تُطرح، وليس المضيُّ في الصلاة مخاطرةً منك، وإنما هو الحكم.\n\nوالقاعدةُ تجري في كلِّ باب: فمن لم يذكر أغسل ذراعه مرّتين أم ثلاثًا فقد تيقّن مرّتين فيبني عليهما، ومن شكّ أوقعت قطرةٌ على ثوبه فهو متيقّنٌ من طهارته.",
          proof: "He complained to the Prophet ﷺ of a man who imagines that he feels something during the prayer. He said: let him not leave until he hears a sound or finds a smell.",
          proofAr: "شُكِيَ إِلَى النَّبِيِّ ﷺ الرَّجُلُ يُخَيَّلُ إِلَيْهِ أَنَّهُ يَجِدُ الشَّيْءَ فِي الصَّلَاةِ، فَقَالَ: لَا يَنْفَتِلْ — أَوْ لَا يَنْصَرِفْ — حَتَّى يَسْمَعَ صَوْتًا أَوْ يَجِدَ رِيحًا",
          ref: "Sahih al-Bukhari, Book of Ablutions, Hadith 137",
          refAr: "صحيح البخاري، كتاب الوضوء، حديث ١٣٧",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          note: "And if the doubt is constant rather than occasional — repeating wudu many times, restarting prayers, unable to finish one — that is waswas as an affliction rather than a fiqh question, and the treatment for it is to act against it deliberately: do not repeat, do not check, and do not argue with it. Scholars have written on this specifically, and it is worth asking someone rather than fighting it alone.",
          noteAr: "فإن كان الشكُّ لازمًا لا عارضًا — يُعيد الوضوء مرارًا، ويستأنف الصلوات، ولا يقدر أن يتمّ واحدة — فذلك وسواسٌ ابتلاءً لا مسألةَ فقه، وعلاجُه مخالفتُه قصدًا: ألّا يُعيد ولا يتفقّد ولا يجادله. وقد أفرد أهلُ العلم فيه الكلام، وحقُّه أن يُسأل عنه لا أن يُقاوَم وحده.",
          keys: ["did my wudu break", "i think i passed wind", "waswas", "obsessive doubt", "i keep repeating wudu", "i restart my prayer", "not sure if im clean", "doubt about wudu", "i feel something in prayer",
                 "انتقض وضوئي", "اشك في وضوئي", "الوسواس", "اعيد الوضوء كثيرا", "اعيد الصلاة", "اشك في الطهارة", "احس بشيء في الصلاة", "وسواس الطهارة"]
        }
      ]
    },

    {
      id: "pg-missed", icon: "⏰",
      title: "Prayers you missed",
      titleAr: "الصلواتُ الفائتة",
      lead: "One card for the ordinary case, and one for the case people are most afraid to ask about.",
      leadAr: "بطاقةٌ للحال المعتادة، وبطاقةٌ للحال التي يخاف الناسُ أن يسألوا عنها.",
      items: [
        {
          id: "pr-qada", icon: "😴",
          title: "You slept through it, or forgot",
          titleAr: "نمتَ عنها أو نسيتَها",
          plain: "Pray it as soon as you remember. That is the whole ruling, and there is no expiation, no penalty and no sin attached to it.\n\nHis words: whoever forgets a prayer or sleeps through it, its expiation is that he prays it when he remembers. And when it happened to the Companions on a journey — the whole army slept past Fajr, including him ﷺ — he said: THERE IS NO NEGLIGENCE IN SLEEP.",
          plainAr: "صلِّها متى ذكرتَها. هذا هو الحكمُ كلُّه، ولا كفّارة فيه ولا عقوبة ولا إثم.\n\nقال ﷺ: «من نسي صلاةً أو نام عنها فكفّارتُها أن يصلّيها إذا ذكرها». ولمّا وقع ذلك للصحابة في سفر — فنام الجيشُ كلُّه عن الفجر وفيهم ﷺ — قال: «ليس في النوم تفريط».",
          example: "Read that second sentence again, because most people carry guilt the texts never put on them. The Prophet ﷺ himself slept past a prayer, with his Companions, and the ruling he gave was that sleep is not negligence.\n\nNegligence is what happens while awake. So: an alarm not set at all, night after night, is a different question from an alarm that did not wake you. The first is the thing to fix; the second is what this hadith was said about.",
          exampleAr: "وأعد النظر في الجملة الثانية، فإنّ أكثر الناس يحملون من الحرج ما لم تحمّلهم النصوصُ إيّاه: فقد نام النبيُّ ﷺ نفسُه عن صلاةٍ ومعه أصحابُه، وكان الحكمُ الذي أصدره أنّ النوم ليس تفريطًا.\n\nوإنما التفريطُ ما كان في اليقظة. فترْكُ ضبط المنبّه أصلًا، ليلةً بعد ليلة، مسألةٌ غيرُ منبّهٍ لم يوقظك. فالأولى هي التي تُعالَج، والثانية هي التي قيل فيها هذا الحديث.",
          proof: "Whoever forgets a prayer or sleeps through it, its expiation is that he prays it when he remembers it.",
          proofAr: "مَنْ نَسِيَ صَلَاةً أَوْ نَامَ عَنْهَا فَكَفَّارَتُهَا أَنْ يُصَلِّيَهَا إِذَا ذَكَرَهَا",
          ref: "Sahih Muslim, Book of Mosques and Places of Prayer",
          refAr: "صحيح مسلم، كتاب المساجد ومواضع الصلاة",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          extraProof: "There is no negligence in sleep. Negligence is only in wakefulness — that a man delays a prayer until the time of the next one comes in.",
          extraProofAr: "لَيْسَ فِي النَّوْمِ تَفْرِيطٌ، إِنَّمَا التَّفْرِيطُ فِي الْيَقَظَةِ: أَنْ يُؤَخِّرَ الرَّجُلُ صَلَاةً حَتَّى يَدْخُلَ وَقْتُ الصَّلَاةِ الْأُخْرَى",
          extraRef: "Sahih Muslim, Book of Mosques and Places of Prayer",
          extraRefAr: "صحيح مسلم، كتاب المساجد ومواضع الصلاة",
          keys: ["slept through fajr", "missed fajr", "woke up late", "i forgot to pray", "missed a prayer", "pray it later", "make up a missed prayer", "alarm didnt wake me",
                 "نمت عن الفجر", "فاتني الفجر", "استيقظت متاخرا", "نسيت الصلاة", "فاتتني صلاة", "اقضيها متى", "قضاء الفائتة", "المنبه ما صحاني"]
        },
        {
          id: "pr-years", icon: "📆",
          title: "Years of missed prayers — and the difference the scholars keep",
          titleAr: "سنواتٌ من الفوائت — والخلافُ الذي أبقاه أهلُ العلم",
          plain: "This is the question people are most ashamed to ask, so it gets the clearest answer this page can give — including the part where scholars disagree.\n\nTHE MAJORITY hold that missed obligatory prayers are made up, however many, gradually alongside the current ones, without a fixed rate.\n\nIBN TAYMIYYAH AND IBN HAZM, among others, held that a prayer abandoned DELIBERATELY has no qada that can restore it — the time was a condition of the act — and that the way back is sincere repentance and an increase in voluntary prayer.",
          plainAr: "هذه أكثرُ مسألةٍ يستحيي الناسُ من السؤال عنها، فلها أوضحُ ما تقدر عليه هذه الصفحة، وفيه موضعُ خلاف أهل العلم.\n\nفالجمهور على أنّ الفرائض الفائتة تُقضى، بلغت ما بلغت، على التدريج مع الحاضرة، من غير مقدارٍ لازم.\n\nوذهب شيخُ الإسلام ابن تيميّة وابنُ حزمٍ وغيرُهما إلى أنّ الصلاة المتروكة عمدًا لا يُجزئ فيها قضاء — لأنّ الوقت شرطٌ في العبادة — وأنّ السبيل توبةٌ صادقة وإكثارٌ من النافلة.",
          example: "AND NOTICE THAT BOTH POSITIONS PRODUCE THE SAME INSTRUCTION FOR YOU TONIGHT. Pray the next prayer. Neither school tells you to calculate first, and neither tells you to wait until you have a plan.\n\nWhat you must not do is what most people in this position actually do: try to compute nine years of prayers, arrive at a number in the thousands, conclude it is impossible, and pray nothing at all. The arithmetic is what stops people, and neither position requires it up front.\n\nSo: start with the next one. Then ask someone qualified what your case requires — while you are already praying, not before you start.",
          exampleAr: "وتأمّل أنّ القولين يُنتجان لك الليلةَ أمرًا واحدًا: أن تصلّي التي تليك. فليس في واحدٍ منهما أن تحسب أوّلًا، ولا أن تنتظر حتى يستقيم لك تدبير.\n\nوإنما الذي يجب ألّا تصنعه هو الذي يصنعه أكثرُ من كان في هذا الموضع: أن يحاول إحصاء تسع سنين من الصلوات، فيبلغ عددًا بالآلاف، فيقطع بأنه محال، فلا يصلّي شيئًا. فالحسابُ هو الذي يوقف الناس، وليس مطلوبًا في القولين ابتداءً.\n\nفابدأ بالتي تليك، ثم اسأل أهل العلم عمّا يلزم في حالك — وأنت تصلّي، لا قبل أن تبدأ.",
          proof: "And establish prayer for My remembrance.",
          proofAr: "وَأَقِمِ ٱلصَّلَوٰةَ لِذِكْرِىٓ",
          ref: "Surah Ta-Ha (20:14)",
          refAr: "سورة طه (٢٠:١٤)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          note: "The site does not pick a side here, and that is deliberate — this is one of the recognised differences, both positions are held by major scholars, and a page cannot know whether your years were abandonment or ignorance or something else. What it can do is stop the arithmetic from becoming the reason you never start.",
          noteAr: "ولا يرجّح هذا الموقعُ ههنا، وذلك قصدٌ: فالمسألةُ من الخلاف المعتبر، وللقولين قائلون من كبار أهل العلم، ولا تعلم صفحةٌ أكانت سنوك تركًا أم جهلًا أم غير ذلك. وإنما الذي تقدر عليه أن تحول بين الحساب وبين أن يصير هو سببَ ألّا تبدأ.",
          link: "#sn-salah",
          linkEn: "What leaving the prayer means, and the difference there →",
          linkAr: "ما معنى ترك الصلاة، والخلافُ فيه ←",
          keys: ["years of missed prayers", "i didnt pray for years", "how do i make up all my prayers", "qada prayers", "thousands of prayers", "i stopped praying for years", "can i ever make them up", "too many missed prayers",
                 "سنوات من الفوائت", "ما صليت سنين", "كيف اقضي كل الصلوات", "قضاء الفوائت", "الاف الصلوات", "تركت الصلاة سنين", "هل اقدر اقضيها", "فوائت كثيرة"]
        }
      ]
    },

    {
      id: "pg-travel", icon: "🧳",
      title: "Travelling",
      titleAr: "في السفر",
      lead: "Two rulings that people either do not know exist, or refuse to use because they feel like cutting corners.",
      leadAr: "حكمان: إمّا أن يُجهل وجودُهما، وإمّا أن يُترَكا لأنهما يُشعران بالتقصير.",
      items: [
        {
          id: "pr-qasr", icon: "✈️",
          title: "Shortening — and Umar's answer when he was asked why",
          titleAr: "القصر — وجوابُ عمر حين سُئل عن علّته",
          plain: "On a journey, the four-rak'ah prayers — Dhuhr, Asr and Isha — are prayed as TWO. Maghrib and Fajr are not shortened.\n\nThe verse ties it to fear of attack, and Ya'la ibn Umayyah asked Umar about that: people are safe now, so why do we still shorten? Umar said he had wondered the same and asked the Prophet ﷺ, who said: IT IS A CHARITY THAT ALLAH HAS GIVEN YOU — SO ACCEPT HIS CHARITY.",
          plainAr: "في السفر تُصلّى الرباعيّةُ — الظهرُ والعصرُ والعشاء — ركعتين. ولا يُقصر المغربُ ولا الفجر.\n\nوقد علّقت الآيةُ ذلك بخوف فتنة الكفّار، فسأل يعلى بنُ أميّة عمرَ عن هذا: قد أمن الناسُ، فلمَ نقصر؟ فقال عمر: عجبتُ ممّا عجبتَ منه، فسألتُ رسول الله ﷺ فقال: «صدقةٌ تصدّق اللهُ بها عليكم، فاقبلوا صدقته».",
          example: "That answer is the reason this card exists. A great many people travel and pray the full four out of caution, feeling that shortening is a concession they have not earned.\n\nHe ﷺ called it a gift, and told them to accept it. Refusing a gift is not piety. And Umar, who asked the question, is not a man anybody would accuse of looking for the easier option.",
          exampleAr: "وهذا الجوابُ هو سببُ هذه البطاقة: فكثيرٌ من الناس يسافرون فيتمّون احتياطًا، ويجدون في أنفسهم أنّ القصر رخصةٌ لم يستحقّوها.\n\nوقد سمّاها ﷺ صدقةً وأمر بقبولها. وليس ردُّ العطيّة تقوى. وعمرُ الذي سأل ليس ممّن يُتّهم بطلب الأيسر.",
          proof: "I said to Umar ibn al-Khattab: \"there is no blame upon you for shortening the prayer if you fear...\" — but the people are safe now. He said: I wondered at the same thing you wonder at, so I asked the Messenger of Allah ﷺ about it, and he said: it is a charity that Allah has given you, so accept His charity.",
          proofAr: "قُلْتُ لِعُمَرَ بْنِ الْخَطَّابِ: ﴿لَيْسَ عَلَيْكُمْ جُنَاحٌ أَنْ تَقْصُرُوا مِنَ الصَّلَاةِ إِنْ خِفْتُمْ﴾ وَقَدْ أَمِنَ النَّاسُ! فَقَالَ: عَجِبْتُ مِمَّا عَجِبْتَ مِنْهُ، فَسَأَلْتُ رَسُولَ اللَّهِ ﷺ عَنْ ذَلِكَ فَقَالَ: صَدَقَةٌ تَصَدَّقَ اللَّهُ بِهَا عَلَيْكُمْ، فَاقْبَلُوا صَدَقَتَهُ",
          ref: "Sahih Muslim, Book of the Traveller's Prayer",
          refAr: "صحيح مسلم، كتاب صلاة المسافرين",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          note: "The schools differ on the distance that makes a person a traveller and on how long he may keep shortening once he has arrived somewhere — the figures you will hear (around 80km, and four days) are the majority's, derived from practice rather than stated in a text. If your journey is near the edge of any of that, ask; if it is plainly a journey, this is the ruling.",
          noteAr: "واختلفت المذاهبُ في المسافة التي يصير بها المرءُ مسافرًا، وفي المدّة التي يقصر فيها إذا نزل ببلد — والمقاديرُ التي تسمعها (نحو ثمانين كيلًا، وأربعةُ أيّام) قولُ الجمهور، مأخوذٌ من العمل لا منصوصٌ في حديث. فإن كان سفرُك قريبًا من الحدّ فاسأل، وإن كان سفرًا بيّنًا فهذا هو الحكم.",
          keys: ["shorten prayer travelling", "qasr", "praying while travelling", "two rakats instead of four", "prayer on a plane", "do i shorten", "travelling prayer", "how far to shorten",
                 "قصر الصلاة", "الصلاة في السفر", "ركعتين بدل اربع", "صلاة المسافر", "الصلاة في الطائرة", "هل اقصر", "مسافة القصر"]
        },
        {
          id: "pr-jam", icon: "🔗",
          title: "Joining two prayers",
          titleAr: "الجمع بين الصلاتين",
          plain: "Dhuhr and Asr may be joined together, and Maghrib and Isha may be joined together — either at the time of the first (jam' taqdim) or at the time of the second (jam' ta'khir). Fajr is never joined to anything.\n\nIbn Abbas reported that the Prophet ﷺ joined Dhuhr with Asr and Maghrib with Isha, and it is recorded in Muslim's Book of the Traveller's Prayer.",
          plainAr: "يُجمع بين الظهر والعصر، وبين المغرب والعشاء — إمّا في وقت الأولى (جمع تقديم) أو في وقت الثانية (جمع تأخير). ولا يُجمع الفجرُ إلى شيء.\n\nروى ابنُ عبّاسٍ أنّ النبيَّ ﷺ جمع بين الظهر والعصر وبين المغرب والعشاء، وهو في صحيح مسلم في كتاب صلاة المسافرين.",
          example: "Two things worth knowing, because they are the practical questions.\n\nJOINING IS NOT SHORTENING. They are separate rulings and a traveller usually does both, but a person who is not travelling may sometimes have a reason to join without shortening.\n\nAND THE SCOPE IS DISPUTED. All agree a traveller may join. Beyond that, the narrations include joining in Madinah without travel or fear, and the schools read that very differently — some restrict it tightly, others allow it for genuine hardship such as illness, heavy rain, or a shift a person cannot leave. This is a real difference; your situation decides which ruling applies to you, so ask rather than assume either way.",
          exampleAr: "وأمران يحسن علمُهما، فهما موضعُ السؤال عمليًّا.\n\nالأوّل: أنّ الجمع غيرُ القصر؛ فهما حكمان، والمسافرُ يفعلهما معًا غالبًا، وقد يعرض لغير المسافر ما يجمع له من غير قصر.\n\nوالثاني: أنّ سعة الحكم موضعُ خلاف. فالاتفاقُ على جمع المسافر. وأمّا ما وراء ذلك فقد جاء في الحديث الجمعُ بالمدينة من غير سفرٍ ولا خوف، واختلف فهمُ المذاهب له اختلافًا بيّنًا: فمنهم من ضيّقه جدًّا، ومنهم من أجازه للمشقّة الحقيقيّة كالمرض والمطر الشديد والعمل الذي لا يستطيع تركه. وهذا خلافٌ معتبر، وحالُك هي التي تعيّن ما يلزمك، فاسأل ولا تقطع بأحد الوجهين.",
          proof: "The Messenger of Allah ﷺ joined Dhuhr and Asr, and Maghrib and Isha.",
          proofAr: "جَمَعَ رَسُولُ اللَّهِ ﷺ بَيْنَ الظُّهْرِ وَالْعَصْرِ، وَبَيْنَ الْمَغْرِبِ وَالْعِشَاءِ",
          ref: "Sahih Muslim, Book of the Traveller's Prayer",
          refAr: "صحيح مسلم، كتاب صلاة المسافرين",
          strength: "Sahih — narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          keys: ["joining prayers", "jam", "combine prayers", "pray dhuhr and asr together", "maghrib and isha together", "can i combine at work", "joining because of rain", "joining when sick",
                 "الجمع بين الصلاتين", "جمع تقديم", "جمع تاخير", "اصلي الظهر والعصر مع بعض", "المغرب والعشاء", "الجمع في العمل", "الجمع للمطر", "الجمع للمرض"]
        }
      ]
    },

    {
      id: "pg-heart", icon: "💚",
      title: "And the part that decides whether any of it did anything",
      titleAr: "وما به يُعلم أنّ لهذا كلِّه أثرًا",
      lead: "Two cards for the person who prays five times and feels nothing.",
      leadAr: "بطاقتان لمن يصلّي الخمس ولا يجد أثرًا.",
      items: [
        {
          id: "pr-khushu", icon: "🫀",
          title: "\"I pray and feel nothing\" — and the four things that change it",
          titleAr: "«أصلّي ولا أجد شيئًا» — وأربعةٌ تغيّر ذلك",
          plain: "The Quran opens the description of the successful with it: they are those who are humbly submissive IN THEIR PRAYER — and it puts that first, before charity, before guarding themselves, before keeping trusts.\n\nAnd it admits the difficulty rather than pretending it away: prayer is heavy, EXCEPT upon the humbly submissive. So finding it heavy is not a sign that something is wrong with you. It is the verse's own starting assumption.",
          plainAr: "افتتح القرآنُ وصفَ المفلحين به: ﴿ٱلَّذِينَ هُمْ فِى صَلَاتِهِمْ خَٰشِعُونَ﴾ — وقدّمه على الزكاة وعلى حفظ الفرج وعلى رعاية الأمانات.\n\nوأقرّ بثقله ولم يتجاهله: ﴿وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَٰشِعِينَ﴾. فوجودُك إيّاها ثقيلةً ليس علامةً على خللٍ فيك، وإنما هو ما بدأت منه الآية.",
          example: "Four things the scholars name, and they are practical rather than spiritual advice:\n\n1. ARRIVE EARLY. Khushu' does not start at the takbir. Rushing in and starting immediately is asking your attention to change direction in one second.\n\n2. KNOW WHAT YOU ARE SAYING. Most people who feel nothing are reciting sounds. Learn the meaning of al-Fatihah first — it is seven lines, and it is a conversation in which He answers each one.\n\n3. SLOW DOWN. The rulings on stillness (tuma'ninah) are not decoration; a prayer performed at speed cannot be attended to at all.\n\n4. REMOVE WHAT IS IN FRONT OF YOU. Phone face down and out of reach. Not because it will ring — because you know it might.",
          exampleAr: "وأربعةٌ يذكرها أهلُ العلم، وهي عمليّةٌ لا وعظيّة:\n\n١. أن تحضر مبكّرًا. فالخشوعُ لا يبدأ عند التكبير، ومن دخل مسرعًا فكبّر من فوره فقد كلّف انتباهه أن ينقلب في ثانية.\n\n٢. أن تعلم ما تقول. فأكثرُ من لا يجد شيئًا إنما يردّد أصواتًا. فابدأ بمعنى الفاتحة، فهي سبعُ آياتٍ وهي محاورةٌ يجيبك فيها سبحانه عن كلِّ آية.\n\n٣. أن تتمهّل. فأحكامُ الطمأنينة ليست زينة؛ وصلاةٌ تُؤدّى على عجلٍ لا يمكن أن تُشهد أصلًا.\n\n٤. أن تُبعد ما بين يديك: الهاتفُ مقلوبٌ وبعيد. لا لأنه سيرنّ، بل لأنك تعلم أنه قد يرنّ.",
          proof: "Certainly will the believers have succeeded: they who are during their prayer humbly submissive.",
          proofAr: "قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ ٱلَّذِينَ هُمْ فِى صَلَاتِهِمْ خَٰشِعُونَ",
          ref: "Surah Al-Mu'minun (23:1-2)",
          refAr: "سورة المؤمنون (٢٣:١-٢)",
          strength: "The Quran",
          strengthAr: "القرآن الكريم",
          extraProof: "And seek help through patience and prayer, and indeed it is heavy except upon the humbly submissive.",
          extraProofAr: "وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَٰشِعِينَ",
          extraRef: "Surah Al-Baqarah (2:45)",
          extraRefAr: "سورة البقرة (٢:٤٥)",
          note: "And he ﷺ did not describe prayer as a duty discharged. When it was time he would say to Bilal: \"give us rest with it, Bilal\" — rest WITH it, not rest from it. (Sunan Abu Dawud 4985, Book of General Behaviour.)",
          noteAr: "ولم يصفها ﷺ بأنها كلفةٌ تُؤدّى: بل كان يقول لبلالٍ إذا حان الوقت: «أرِحْنا بها يا بلال» — الراحةُ بها لا منها. [سنن أبي داود ٤٩٨٥، كتاب الأدب]",
          keys: ["i feel nothing when i pray", "khushu", "concentration in prayer", "my mind wanders", "prayer feels empty", "how to focus in prayer", "distracted in salah", "praying like a robot", "no connection",
                 "لا اخشع في الصلاة", "الخشوع", "شرود في الصلاة", "لا احس بشيء", "التركيز في الصلاة", "صلاتي بلا روح", "اصلي بسرعة", "الوسواس في الصلاة"]
        },
        {
          id: "pr-first", icon: "⚖️",
          title: "The first thing that will be looked at",
          titleAr: "أوّلُ ما يُنظر فيه",
          plain: "The first thing a servant is called to account for on the Day of Resurrection is his prayer. If it is sound he has succeeded; if it is corrupt he has failed and lost.\n\nAnd the narration continues with something merciful that is usually left off when it is quoted: if anything is missing from his obligatory prayers, the Lord says — look, does My servant have any voluntary prayers? — and what is missing from the obligation is completed from them.",
          plainAr: "أوّلُ ما يُحاسب به العبدُ يوم القيامة صلاتُه؛ فإن صلحت فقد أفلح وأنجح، وإن فسدت فقد خاب وخسر.\n\nويتمّ الحديثُ بما فيه رحمةٌ يُسقطها الناسُ عند نقله: فإن انتقص من فريضته شيء قال الربُّ: انظروا هل لعبدي من تطوّع؟ فيُكمَّل بها ما انتقص من الفريضة.",
          example: "That is the reason the sunnah prayers matter, and it is a far better reason than habit. They are not extra credit — they are the repair fund for a lifetime of prayers that were rushed, distracted or short of what they should have been. Which is all of ours.\n\nSo the person who reads this section, sees how much he has been getting wrong, and feels the weight of it — the answer is not to despair over the past record. It is to add two rak'ahs.",
          exampleAr: "وهذا هو سببُ أهمّيّة النوافل، وهو سببٌ أحسنُ من العادة بكثير: فليست زيادةً في الرصيد، وإنما هي جبرٌ لعمرٍ من صلواتٍ عُجّل فيها أو شُغل عنها أو نقصت عمّا ينبغي. وتلك صلواتُنا جميعًا.\n\nفمن قرأ هذا القسم فرأى كم أخطأ ووجد ثقلَ ذلك، فليس الجوابُ أن يقنط من الصحيفة الماضية، وإنما أن يزيد ركعتين.",
          proof: "The first thing a servant will be called to account for on the Day of Resurrection is his prayer. If it is sound, he has succeeded and prospered; and if it is corrupt, he has failed and lost. And if anything is lacking from his obligatory prayers, the Lord says: look, does My servant have any voluntary prayers? — and what was lacking from the obligation is completed from them.",
          proofAr: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ؛ فَإِنْ صَلَحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ، وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ. فَإِنِ انْتَقَصَ مِنْ فَرِيضَتِهِ شَيْءٌ قَالَ الرَّبُّ: انْظُرُوا هَلْ لِعَبْدِي مِنْ تَطَوُّعٍ؟ فَيُكَمَّلَ بِهَا مَا انْتَقَصَ مِنَ الْفَرِيضَةِ",
          ref: "Jami' at-Tirmidhi, Book of Salat, Hadith 413; also an-Nasa'i and Ibn Majah",
          refAr: "جامع الترمذي، كتاب الصلاة، حديث ٤١٣؛ ورواه النسائي وابن ماجه",
          strength: "Outside the two Sahihs — narrated by at-Tirmidhi, an-Nasa'i and Ibn Majah through several routes; graded Sahih by al-Albani",
          strengthAr: "خارج الصحيحين — رواه الترمذي والنسائي وابن ماجه من طرق، وصحّحه الألباني",
          keys: ["first thing judged", "first thing accounted for", "prayer on the day of judgement", "will my prayers count", "sunnah prayers", "nafl prayers", "voluntary prayer", "why pray sunnah",
                 "اول ما يحاسب عليه العبد", "الصلاة يوم القيامة", "هل تقبل صلاتي", "السنن الرواتب", "النوافل", "صلاة التطوع", "لماذا اصلي النافلة"]
        }
      ]
    }
  ],

  closing: "One thing to take from the whole section: almost every question here had an answer that was easier than the reader feared. Sleep is not negligence. Doubt does not undo certainty. A lost count is repaired with two prostrations. Shortening on a journey is a gift you were told to accept. The pattern is not an accident — it is what \"Allah intends for you ease and does not intend for you hardship\" looks like when it reaches the details.",
  closingAr: "وشيءٌ واحد يُؤخذ من القسم كلِّه: أنّ أكثر ما ههنا كان جوابُه أيسرَ ممّا خافه القارئ. فالنومُ ليس تفريطًا، والشكُّ لا يرفع اليقين، وضياعُ العدد يُجبر بسجدتين، والقصرُ في السفر عطيّةٌ أُمرتَ بقبولها. وليس هذا الاطّرادُ اتفاقًا، وإنما هو صورةُ ﴿يُرِيدُ ٱللَّهُ بِكُمُ ٱلْيُسْرَ وَلَا يُرِيدُ بِكُمُ ٱلْعُسْرَ﴾ إذا نزلت إلى التفاصيل."
};
