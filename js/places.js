/* ============================================================
   THE THREE PLACES HE ASKED ABOUT — المواضع الثلاثة التي سأل عنها
   ============================================================
   Rendered by renderGrouped (js/cards.js) on judgement.html,
   directly under the signs, and linked from the Tamim ad-Dari
   story on stories.html.

   THE HADITH IS ALREADY ON THE SITE, in full, in PROPHET_STORIES
   (js/data.js). It is NOT retold here — the owner's standing rule
   is that the same words are never written twice. This section
   answers a different question: WHERE are those three places, and
   what is measurably happening to them now.

   FIVE RULES AT THE TOP OF THIS FILE. Keep them.

   1. NO DATE. Not a year, not a decade, not "soon". SIGNS_INTRO
      on this same page already states the rule for the whole
      section — وليس فيه تنبّؤ، ولا تحديد وقت، لأنه لم يُحدَّد.
      A rate and a remaining margin are measurements; a date is a
      claim nobody can make. Give the first, never the second.

   2. THE TEXT WARNS ABOUT TWO, NOT THREE. Verified against Sahih
      Muslim, Kitab al-Fitan wa Ashrat as-Sa'ah: he warns about the
      palms of Baysan (يوشك أن لا تثمر) and the water of Tiberias
      (يوشك أن يذهب). About Zughar he asks, they answer, and he
      says NOTHING. Do not let the page tidy that into three.

   3. THE HADITH DOES NOT SAY "WHEN THESE FAIL, I COME OUT."
      He warns about them, and separately says he is about to be
      permitted to come out. Joining the two into a condition is a
      READING, not the text. The page says which is which.

   4. THE WEAKEST CASE IS STATED AS THE WEAKEST. Baysan's palms
      have not stopped bearing fruit, and the page says so plainly
      rather than stretching it. A section that overstated its
      easiest case would forfeit the two that are strong. Same
      discipline as Ibn Firnas's flight and the Council of Macon.

   5. MEASUREMENTS CARRY THEIR SOURCE AND THEIR DATE, and refs stay
      pure citations — no English prose inside a ref field, or it
      leaks untranslated onto the Arabic page.
   ============================================================ */

const PLACES = {
  title: "The three places he asked about",
  titleAr: "المواضع الثلاثة التي سأل عنها",

  intro: "In the hadith of Tamim ad-Dari, the man chained in the monastery asked the sailors about three ordinary places by name, and then told them who he was. The story itself is on the Stories page, in full. This section answers the question the story leaves open: where are those three places on a map today, what is actually happening to them, and — just as important — what the hadith does not say about them.",
  introAr: "في حديث تميمٍ الداريّ سأل الرجلُ المُوثَق في الدَّير البحّارةَ عن ثلاثة مواضعَ بأسمائها، ثم أخبرهم من هو. والقصّةُ بتمامها في صفحة القصص. وهذا القسم يجيب عمّا تركته القصّةُ مفتوحًا: أين هذه المواضع الثلاثة على الخريطة اليوم، وما الذي يجري لها فعلًا — والأهمُّ من ذلك: ما الذي لم يقله الحديث عنها.",

  groups: [
    {
      id: "pq-text",
      icon: "📜",
      title: "First: what the text says, and what it does not",
      titleAr: "أولًا: ما يقوله النصّ وما لا يقوله",
      lead: "Before any measurement, the wording — because almost everything said about these three places in conversation is said more confidently than the hadith says it.",
      leadAr: "قبل أيِّ قياس، يُحرَّر اللفظ — لأنّ أكثر ما يُقال في هذه المواضع الثلاثة يُقال بثقةٍ أعلى ممّا قاله الحديثُ نفسه.",
      items: [
        {
          id: "pq-two-not-three",
          icon: "⚠️",
          title: "He warned about two of them. About the third he said nothing.",
          titleAr: "حذّر من اثنين منها. وأمّا الثالث فلم يقل فيه شيئًا",
          simple: "He asked about three places. He gave a warning about two. About the third he asked, they answered, and he moved straight on to his next question.",
          simpleAr: "سأل عن ثلاثة مواضع. وحذّر في اثنين منها. وأمّا الثالث فسأل عنه، فأجابوه، فانتقل مباشرةً إلى سؤاله التالي.",
          plain: "Read from the collection itself, the three exchanges are not the same shape.\n\n**The palms of Baysan** — he asks whether they bear fruit. They say yes. He answers: **“they are about to bear no fruit.”**\n\n**The lake of Tiberias** — he asks whether there is water in it. They say it has much water. He answers: **“its water is about to go.”**\n\n**The spring of Zughar** — he asks whether there is water in it and whether its people farm with it. They say yes, it has much water and they farm with it. And then he says nothing at all about it. The next line is a different question altogether: what has the unlettered Prophet done?\n\nThe usual retelling flattens this into “he asked about three things and said all three would fail.” That is one sentence more than the hadith contains. This page keeps the three as they came.",
          plainAr: "بالرجوع إلى نصّ الكتاب نفسه، لا تأتي الأسئلة الثلاثة على صورةٍ واحدة.\n\n**نخل بيسان** — سأل: هل يُثمر؟ قالوا: نعم. فقال: **«أما إنه يوشك أن لا تُثمر».**\n\n**بحيرة الطبريّة** — سأل: هل فيها ماء؟ قالوا: هي كثيرة الماء. فقال: **«أما إنّ ماءها يوشك أن يذهب».**\n\n**عين زُغَر** — سأل: هل في العين ماء، وهل يزرع أهلها بمائها؟ قالوا: نعم، هي كثيرة الماء وأهلها يزرعون من مائها. **ثم لم يقل فيها شيئًا.** والسطر الذي يليه سؤالٌ آخر بالكلّيّة: ما فعل النبيُّ الأمّيّ؟\n\nوالروايةُ الدارجة على الألسنة تُسوّي هذا كلَّه فتقول: «سأل عن ثلاثة وأخبر أنّ الثلاثة ستذهب». وهذه جملةٌ زائدةٌ على ما في الحديث. وهذه الصفحةُ تُبقي الثلاثة كما جاءت.",
          proof: "“Tell me about the palms of Baysan — do they bear fruit?” We said yes. He said: “They are about to bear no fruit.” He said: “Tell me about the lake of Tiberias — is there water in it?” They said: it has much water. He said: “Its water is about to go.” He said: “Tell me about the spring of Zughar — is there water in it, and do its people farm with its water?” We said: yes, it has much water and its people farm from it.",
          proofAr: "«أَخْبِرُونِي عَنْ نَخْلِ بَيْسَانَ... أَسْأَلُكُمْ عَنْ نَخْلِهَا هَلْ يُثْمِرُ؟ قُلْنَا لَهُ: نَعَمْ. قَالَ: أَمَا إِنَّهُ يُوشِكُ أَنْ لَا تُثْمِرَ. قَالَ: أَخْبِرُونِي عَنْ بُحَيْرَةِ الطَّبَرِيَّةِ... هَلْ فِيهَا مَاءٌ؟ قَالُوا: هِيَ كَثِيرَةُ الْمَاءِ. قَالَ: أَمَا إِنَّ مَاءَهَا يُوشِكُ أَنْ يَذْهَبَ. قَالَ: أَخْبِرُونِي عَنْ عَيْنِ زُغَرَ... هَلْ فِي الْعَيْنِ مَاءٌ وَهَلْ يَزْرَعُ أَهْلُهَا بِمَاءِ الْعَيْنِ؟ قُلْنَا لَهُ: نَعَمْ هِيَ كَثِيرَةُ الْمَاءِ وَأَهْلُهَا يَزْرَعُونَ مِنْ مَائِهَا».",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة",
          strength: "Sahih — Narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          keys: ["baysan", "tiberias", "zughar", "jassasah", "tamim", "بيسان", "طبرية", "زغر", "الجساسة", "تميم الداري"]
        },
        {
          id: "pq-not-a-condition",
          icon: "🔗",
          title: "“When they dry up he comes out” is a reading, not a text",
          titleAr: "«إذا جفّت خرج» قراءةٌ لا نصّ",
          simple: "The hadith puts two things next to each other: a warning about the places, and that he is about to be allowed out. It does not join them with “when”.",
          simpleAr: "وضع الحديثُ أمرين متجاورين: تحذيرًا في المواضع، وأنه يوشك أن يُؤذَن له في الخروج. ولم يربط بينهما بـ«إذا».",
          plain: "A few lines after the three questions he says: **“I am the Masih ad-Dajjal, and I am about to be permitted to come out.”** Those two statements sit near each other in one conversation. Nothing in the wording makes the first the condition of the second.\n\nThe difference matters in practice. If the drying is a **condition**, then measuring a lake tells you where you are in the timetable. If it is not, then the measurements are exactly what they look like — a description of three places that has held up for fourteen centuries — and they tell you nothing about the hour.\n\nScholars have long read the questions as connected to his coming, and that reading is reasonable: he asked about them, and about nothing else in the earth, in the same breath as telling them who he was. But **a reasonable reading is not a text**, and this site does not print a scholar's inference in the same weight of type as a narration. So the page gives the warning as narration, the connection as a reading, and the date as unknown to everyone.",
          plainAr: "بعد الأسئلة الثلاثة بأسطرٍ يسيرة يقول: **«إِنِّي أَنَا الْمَسِيحُ الدَّجَّالُ، وَإِنِّي أُوشِكُ أَنْ يُؤْذَنَ لِي فِي الْخُرُوجِ».** فهاتان جملتان متجاورتان في مجلسٍ واحد. وليس في اللفظ ما يجعل الأولى شرطًا للثانية.\n\nوالفرقُ بينهما عمليٌّ لا لفظيّ. فإن كان الجفافُ **شرطًا** فقياسُ منسوب بحيرةٍ يدلّك أين أنت من الجدول. وإن لم يكن شرطًا فالقياساتُ هي ما تبدو عليه تمامًا — وصفٌ لثلاثة مواضعَ ثبت بعد أربعة عشر قرنًا — ولا تدلّك على الساعة في شيء.\n\nوقد قرأ أهلُ العلم قديمًا هذه الأسئلة على أنها متّصلةٌ بخروجه، وهي قراءةٌ لها وجهُها: فإنه سأل عنها هي دون سائر الأرض، في السياق الذي أخبرهم فيه من هو. غير أنّ **القراءة المعقولة ليست نصًّا**، وهذا الموقعُ لا يطبع استنباطَ عالمٍ بخطِّ الرواية نفسه. فالتحذيرُ في الصفحة روايةٌ، والربطُ قراءةٌ، والوقتُ لا يعلمه أحد.",
          proof: "“Indeed I am the Masih ad-Dajjal, and I am about to be permitted to come out.”",
          proofAr: "«وَإِنِّي أَنَا الْمَسِيحُ، وَإِنِّي أُوشِكُ أَنْ يُؤْذَنَ لِي فِي الْخُرُوجِ».",
          ref: "Sahih Muslim, Book of Tribulations and the Portents of the Last Hour",
          refAr: "صحيح مسلم، كتاب الفتن وأشراط الساعة",
          strength: "Sahih — Narrated by Muslim",
          strengthAr: "صحيح — رواه مسلم",
          note: "Nobody knows the time — not an angel and not a prophet. That is stated in the Quran twice over, and it is the frame this whole section sits inside.",
          noteAr: "ولا يعلم الوقتَ أحد — لا ملَكٌ ولا نبيّ. وقد نصّ القرآن على ذلك مرّتين، وهو الإطارُ الذي يقوم عليه هذا القسم كلُّه.",
          extraProof: "“They ask you about the Hour, when will it come to pass? Say: knowledge of it is only with my Lord.” — “Indeed, Allah has knowledge of the Hour.”",
          extraProofAr: "﴿يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى﴾ — ﴿إِنَّ ٱللَّهَ عِندَهُۥ عِلْمُ ٱلسَّاعَةِ﴾",
          extraRef: "Surah Al-A'raf (7:187); Surah Luqman (31:34)",
          extraRefAr: "سورة الأعراف (٧:١٨٧)؛ سورة لقمان (٣١:٣٤)",
          keys: ["condition", "when", "prediction", "hour", "شرط", "متى", "تنبؤ", "الساعة", "الدجال"]
        }
      ]
    },

    {
      id: "pq-where",
      icon: "🗺️",
      title: "Second: where they are, and what is measured there now",
      titleAr: "ثانيًا: أين هي، وما الذي يُقاس فيها الآن",
      lead: "All three lie within about a hundred kilometres of each other, in the great rift that runs from the Galilee down to the Dead Sea — two of them in present-day Palestine under Israeli control, one in Jordan. Each card gives the place, then the measurement, then what the measurement does and does not show.",
      leadAr: "المواضعُ الثلاثة تقع في حدود مئة كيلومترٍ بعضُها من بعض، في الأخدود العظيم الممتدّ من الجليل إلى البحر الميّت — اثنان منها في فلسطين تحت السيطرة الإسرائيلية اليوم، وواحدٌ في الأردن. وكلُّ بطاقةٍ تذكر الموضع، ثم القياس، ثم ما يدلّ عليه القياس وما لا يدلّ.",
      items: [
        {
          id: "pq-baysan",
          icon: "🌴",
          num: "1",
          title: "The palms of Baysan — and this is the weakest of the three",
          titleAr: "نخل بيسان — وهو أضعف الثلاثة",
          simple: "Baysan is a town in the Jordan valley, in present-day Palestine under Israeli control, about 25 km south of Lake Tiberias and very close to the Jordanian border. Its palms have not stopped bearing fruit.",
          simpleAr: "بيسان بلدةٌ في غور الأردن، في فلسطين تحت السيطرة الإسرائيلية اليوم، على نحو ٢٥ كيلومترًا جنوبَ بحيرة طبريّة، وقريبةٌ جدًّا من الحدود الأردنية. ونخلُها لم يكفَّ عن الإثمار.",
          plain: "**Where it is.** The Baysan valley (Beit She'an in Hebrew), on the western side of the Jordan valley where it opens out between the Galilee hills and the river. It sits in present-day Palestine under Israeli control, a few kilometres from the Jordanian border.\n\n**Why it was famous for palms.** The valley is fed by an unusual number of springs — so many that its local authority is named for them. Herodotus, writing five centuries before Islam, named it with Jericho as one of the few places in the land that produced dates of the first quality. When the Dajjal named it, he named the region's byword for palms.\n\n**What is true now, and the page will not pretend otherwise.** Dates are still grown in the Jordan valley, and grown commercially. What has gone is Baysan's *pre-eminence* — it is no longer the place a traveller would name for its palms, and the springs that fed those groves are under the same pressure as every other water source in the rift. But “the palms of Baysan bear no fruit” is **not a true statement today**, and anyone who tells you it is has not checked.\n\n**Why the page says this out loud.** This is the easiest of the three to overstate and the easiest to knock down. If the section claimed it and a reader checked, the two measurements that ARE strong would fall with it. Stating the weak case as weak is what makes the rest usable.",
          plainAr: "**أين هي.** سهلُ بيسان (بيت شآن بالعبرية)، في الجانب الغربيّ من غور الأردن حيث ينفتح الغورُ بين جبال الجليل والنهر. وهي في فلسطين تحت السيطرة الإسرائيلية اليوم، على بعد كيلومتراتٍ من الحدود الأردنية.\n\n**لماذا اشتُهرت بالنخل.** يُغذّي السهلَ عددٌ غير معتادٍ من العيون، حتى سُمّيت سلطتُه المحلّيّة باسمها. وقد ذكر هيرودوت — قبل الإسلام بخمسة قرون — بيسانَ مع أريحا في المواضع القليلة التي تُخرج من التمر أجودَه. فلمّا سمّاها الدجّالُ إنما سمّى مضربَ المثل في النخل بتلك البلاد.\n\n**وما هو الحقّ اليوم، ولن تتظاهر الصفحةُ بغيره.** التمرُ ما يزال يُزرع في غور الأردن، ويُزرع تجاريًّا. والذي ذهب هو **تقدُّمُ بيسان** — فلم تعد الموضعَ الذي يسمّيه المسافر لنخله، والعيونُ التي كانت تسقي تلك البساتين تحت الضغط نفسه الواقع على كلّ مورد ماءٍ في الأخدود. أمّا أنّ «نخل بيسان لا يُثمر» فليست **جملةً صادقةً اليوم**، ومن قالها لك فلم يتحقّق.\n\n**ولماذا تقولها الصفحةُ جهارًا.** هذا أسهلُ الثلاثة في المبالغة، وأسهلُها في الردّ. فلو ادّعاه القسمُ ثم تحقّق منه قارئٌ لسقط معه القياسان القويّان. وبيانُ الضعيف على ضعفه هو الذي يجعل ما بقي صالحًا للاحتجاج.",
          ref: "Herodotus, Histories; Beit She'an Valley — Valley of Springs Regional Council",
          refAr: "هيرودوت، تواريخ؛ سهل بيسان — مجلس «وادي العيون» الإقليمي",
          strength: "Historical and geographical record — not hadith",
          strengthAr: "تاريخٌ وجغرافيا — لا حديث",
          keys: ["baysan", "beit shean", "palms", "dates", "بيسان", "بيت شآن", "نخل", "تمر", "الغور"]
        },
        {
          id: "pq-tiberias",
          icon: "💧",
          num: "2",
          title: "The lake of Tiberias — it has not dried, but it no longer holds its own level",
          titleAr: "بحيرة طبريّة — لم تجفّ، لكنها لم تعد تحفظ منسوبها بنفسها",
          simple: "Lake Tiberias is in the Galilee, in present-day Palestine under Israeli control, with its north-eastern shore against the occupied Golan. It is the lowest freshwater lake on earth. It still has water — but since 2023 that water is partly pumped in from the sea.",
          simpleAr: "بحيرة طبريّة في الجليل، في فلسطين تحت السيطرة الإسرائيلية اليوم، وشاطئُها الشماليّ الشرقيّ ملاصقٌ للجولان المحتلّ. وهي أخفضُ بحيرةٍ عذبةٍ على وجه الأرض. وما يزال فيها ماء — غير أنّ بعض هذا الماء يُضَخّ إليها من البحر منذ سنة ٢٠٢٣م.",
          plain: "**Where it is.** In the north, where the Jordan enters and leaves it, about 210 metres below sea level — the lowest body of fresh water on the planet, and for most of the last century the main reservoir of the country around it.\n\n**What the record shows.** Its all-time low was reached in 2001, at about **−214.87 m**. In November 2025 it stood at about **−213.35 m** — below the lower “red line” that marks a critical shortage, and the lowest it had been since 1980. By late summer 2026 it was at about **−213.28 m**: still roughly a third of a metre below that red line, and within about **a metre and a half of the “black line”**, the level below which the ecological damage is considered irreversible.\n\n**And here is the fact worth stopping on.** Since 2023 the lake is topped up by **desalinated seawater pumped inland from the Mediterranean**, through a scheme built for exactly that purpose. The national carrier that once took water out of this lake now runs in reverse. Whatever else is true, a lake that must be fed from the sea to hold its line is not a lake in good health.\n\n**But it goes up as well as down, and the page says so.** It was near the record low in 2018 and refilled strongly over the following two wet years. A line that falls and rises is not a line anyone can date from. What can honestly be said is narrower and still striking: within living memory this lake has repeatedly crossed the level its own authorities call critical, and it is now held above that level by engineering rather than by rainfall.",
          plainAr: "**أين هي.** في الشمال، حيث يدخلها نهرُ الأردن ويخرج منها، على نحو مئتين وعشرة أمتارٍ تحت سطح البحر — أخفضُ تجمّعٍ للماء العذب على ظهر الأرض، وكانت طوالَ أكثر القرن الماضي الخزّانَ الرئيس للبلاد حولها.\n\n**ما يقوله السجلّ.** بلغت أدنى منسوبٍ في تاريخ رصدها سنة ٢٠٠١م عند نحو **−٢١٤٫٨٧ مترًا**. وفي تشرين الثاني/نوفمبر ٢٠٢٥م كانت عند نحو **−٢١٣٫٣٥ مترًا** — أي دون «الخطّ الأحمر» الأدنى الذي يُعلَّم به الشحُّ الحرج، وأخفضَ ما كانت عليه منذ سنة ١٩٨٠م. وفي أواخر صيف ٢٠٢٦م كانت عند نحو **−٢١٣٫٢٨ مترًا**: أي دون ذلك الخطّ الأحمر بنحو ثلث المتر، وعلى بُعد نحو **مترٍ ونصف من «الخطّ الأسود»** الذي يُعدُّ الضررُ تحته غيرَ قابلٍ للإصلاح.\n\n**وههنا الخبرُ الذي يستحقّ الوقوف.** منذ سنة ٢٠٢٣م تُغذَّى البحيرةُ بـ**ماءٍ مُحلًّى يُضَخّ إليها من البحر المتوسّط**، عبر مشروعٍ أُنشئ لهذا بعينه. فالناقلُ الوطنيُّ الذي كان يُخرج الماء من هذه البحيرة صار يجري في الاتجاه المعاكس. ومهما يكن من شيء، فبحيرةٌ لا تحفظ خطَّها إلا أن تُطعَم من البحر ليست بحيرةً في عافية.\n\n**غير أنها ترتفع كما تنخفض، والصفحةُ تقول ذلك.** فقد قاربت أدنى منسوبٍ لها سنة ٢٠١٨م ثم امتلأت امتلاءً قويًّا في العامين المطيرين بعدها. وخطٌّ يهبط ويصعد ليس خطًّا يؤرّخ منه أحد. والذي يصحّ أن يُقال أضيقُ من ذلك وهو مع ضيقه لافت: أنّ هذه البحيرة تجاوزت في جيلٍ واحدٍ مرارًا المنسوبَ الذي تسمّيه جهاتُ رصدها حرجًا، وأنها اليوم تُمسَك فوقه بالهندسة لا بالمطر.",
          ref: "Kinneret level monitoring record, November 2025 and August 2026; Mekorot / Israel Water Authority — Reverse Water Carrier scheme, 2023",
          refAr: "سجلّ رصد منسوب بحيرة طبريّة، تشرين الثاني ٢٠٢٥م وآب ٢٠٢٦م؛ مشروع «الناقل العكسيّ» — مكوروت وسلطة المياه الإسرائيلية، ٢٠٢٣م",
          strength: "Hydrological monitoring record — not hadith",
          strengthAr: "سجلٌّ هيدرولوجيّ للرصد — لا حديث",
          keys: ["tiberias", "kinneret", "galilee", "lake", "water level", "طبرية", "بحيرة", "الجليل", "منسوب", "ماء"]
        },
        {
          id: "pq-zughar",
          icon: "🏚️",
          num: "3",
          title: "The spring of Zughar — the strongest decline of the three, and the one he did not warn about",
          titleAr: "عين زُغَر — أقوى الثلاثة انحدارًا، وهو الذي لم يحذّر منه",
          simple: "Zughar is at the south-eastern corner of the Dead Sea, in Jordan — the area now called Ghor es-Safi. The sea it sits on has fallen about 22 metres since 2001.",
          simpleAr: "زُغَر في الركن الجنوبيّ الشرقيّ من البحر الميّت، في الأردنّ — وهي المنطقة التي تُسمّى اليوم غور الصافي. والبحرُ الذي تقوم عليه انخفض نحو اثنين وعشرين مترًا منذ سنة ٢٠٠١م.",
          plain: "**Where it is.** Ghor es-Safi, in Jordan, between the governorates of Karak and Tafilah, at the south-eastern end of the Dead Sea — the lowest dry land on earth. It is the Zoara of the older geographies, and in the Islamic centuries it was the commercial centre of the southern Levant for sugar and indigo: crops that need heavy, continuous irrigation. That is precisely the thing he asked about — not whether the spring existed, but **whether its people still farmed with its water.**\n\n**What the record shows.** The Dead Sea stood at roughly **−418 m** in 2001 and at roughly **−440 m** in 2025 — a fall of about **22 metres in 24 years**. And the fall is not steady, it is accelerating:\n\n• about 17 cm a year from 1930 to 1973\n• about 62 cm a year in the later 1970s\n• about 79 cm a year through the 1980s\n• about 1 metre a year by the turn of the century\n• about 1.1 to 1.2 metres a year since\n\nAs the water withdraws, the fresh groundwater behind it dissolves the salt left underneath, and the ground collapses: thousands of sinkholes have opened along these shores, swallowing farmland, roads and buildings. The farming the sailors described is the thing under most pressure.\n\n**And now the part that keeps this section honest.** Of the three, this is the one with the clearest, best-documented, steepest decline — and it is the one about which the man in the monastery **said nothing at all.** He asked, they answered, and he moved on. A page arranged to impress would have led with this measurement and quietly borrowed a warning for it. This one tells you the warning is not there.",
          plainAr: "**أين هي.** غور الصافي في الأردنّ، بين محافظتي الكرك والطفيلة، عند الطرف الجنوبيّ الشرقيّ من البحر الميّت — أخفضِ يابسةٍ على وجه الأرض. وهي «زُغَر» في كتب البلدان، وكانت في القرون الإسلامية مركزَ الشام الجنوبيّ التجاريَّ للسكّر والنيلة: وهما زرعان لا يقومان إلا بسقيٍ غزيرٍ متّصل. وهذا عينُ ما سأل عنه — لا عن وجود العين، بل **هل ما زال أهلُها يزرعون بمائها.**\n\n**ما يقوله السجلّ.** كان منسوب البحر الميّت نحو **−٤١٨ مترًا** سنة ٢٠٠١م، ونحو **−٤٤٠ مترًا** سنة ٢٠٢٥م — أي هبوطًا مقدارُه نحو **٢٢ مترًا في أربعٍ وعشرين سنة**. والهبوطُ ليس مطّردًا على وتيرةٍ واحدة، بل يتسارع:\n\n• نحو ١٧ سنتيمترًا في السنة من ١٩٣٠م إلى ١٩٧٣م\n• نحو ٦٢ سنتيمترًا في السنة في أواخر السبعينيّات\n• نحو ٧٩ سنتيمترًا في السنة خلال الثمانينيّات\n• نحو المتر في السنة مع مطلع القرن\n• نحو ١٫١ إلى ١٫٢ مترٍ في السنة منذ ذلك الحين\n\nوكلّما انحسر الماءُ أذابت المياهُ الجوفيّة العذبةُ خلفه ما تحته من ملح، فينهار السطح: فقد انفتحت آلافُ الحُفَر الابتلاعيّة على هذه الشواطئ، تبتلع الأرضَ الزراعيّة والطرقَ والمباني. فالزراعةُ التي وصفها البحّارةُ هي أكثرُ ما يقع عليه الضغطُ اليوم.\n\n**وههنا ما يحفظ على هذا القسم صدقَه.** هذا أوضحُ الثلاثة انحدارًا وأدقُّها توثيقًا وأشدُّها انحدارًا — وهو الذي **لم يقل فيه الرجلُ في الدَّير شيئًا البتّة.** سأل فأجابوه فمضى. ولو أُريد بالصفحة الإبهارُ لصُدِّرت بهذا القياس واستُعير له تحذيرٌ في هدوء. وهذه الصفحةُ تخبرك أنّ التحذير ليس فيه.",
          ref: "USGS Earthshots — Dead Sea rates of decline; Dead Sea level monitoring, 2001–2025",
          refAr: "هيئة المساحة الجيولوجية الأمريكية — معدّلات انحسار البحر الميّت؛ سجلّات منسوب البحر الميّت، ٢٠٠١–٢٠٢٥م",
          strength: "Geological and hydrological monitoring record — not hadith",
          strengthAr: "سجلٌّ جيولوجيٌّ وهيدرولوجيٌّ للرصد — لا حديث",
          keys: ["zughar", "zoar", "ghor safi", "dead sea", "jordan", "sinkholes", "زغر", "غور الصافي", "البحر الميت", "الأردن", "الحفر الابتلاعية"]
        }
      ]
    },

    {
      id: "pq-speed",
      icon: "⏳",
      title: "Third: how fast — and why this page gives no date",
      titleAr: "ثالثًا: ما سرعة ذلك — ولماذا لا تعطي هذه الصفحةُ تاريخًا",
      lead: "A rate is a measurement. A date is a claim. The first can be given honestly; the second cannot be given at all.",
      leadAr: "المعدَّلُ قياس، والتاريخُ دعوى. فالأوّل يمكن أن يُعطى بصدق، والثاني لا يُعطى ألبتّة.",
      items: [
        {
          id: "pq-rate",
          icon: "📉",
          title: "What can be said about the speed",
          titleAr: "ما الذي يصحّ أن يُقال في السرعة",
          simple: "Two honest sentences: the Dead Sea is falling by about a metre every year, and the lake is being held above its critical line by pumping rather than by rain.",
          simpleAr: "جملتان صادقتان: البحر الميّت يهبط نحو مترٍ كلَّ سنة، والبحيرة تُمسَك فوق خطّها الحرج بالضخّ لا بالمطر.",
          plain: "Speed can be described in two ways that do not require a prophecy.\n\n**By rate.** The Dead Sea has fallen about 22 metres in 24 years, and the yearly rate has climbed from about 17 cm in the mid-twentieth century to about 1.1 metres now. That is a number anyone can check and anyone can watch change.\n\n**By margin.** Lake Tiberias sits roughly a third of a metre below the line its own monitors call critical, and roughly a metre and a half above the line below which they call the damage irreversible. That is a distance, not a date.\n\nGive a reader a rate and a margin and he can see the direction of travel for himself. That is the whole of what measurement can honestly offer here, and it is more than enough.",
          plainAr: "يمكن وصفُ السرعة بوجهين لا يحتاج واحدٌ منهما إلى تنبّؤ.\n\n**بالمعدَّل.** هبط البحر الميّت نحو ٢٢ مترًا في أربعٍ وعشرين سنة، وارتفع معدَّلُ الهبوط السنويّ من نحو ١٧ سنتيمترًا في منتصف القرن الماضي إلى نحو ١٫١ مترٍ اليوم. وهذا رقمٌ يستطيع كلُّ أحدٍ أن يتحقّق منه وأن يراقب تغيُّره.\n\n**بالمسافة الباقية.** تقف بحيرة طبريّة على نحو ثلث المتر دون الخطّ الذي تسمّيه جهاتُ رصدها حرجًا، وعلى نحو مترٍ ونصفٍ فوق الخطّ الذي يُعدُّ الضررُ تحته غيرَ قابلٍ للإصلاح. وهذه مسافةٌ لا تاريخ.\n\nفإذا أعطيتَ القارئ معدَّلًا ومسافةً أبصر اتّجاهَ السير بنفسه. وهذا كلُّ ما يستطيع القياسُ أن يقدّمه ههنا بصدق، وهو أكثرُ من الكفاية.",
          keys: ["rate", "speed", "how fast", "margin", "معدل", "سرعة", "كم بقي", "مسافة"]
        },
        {
          id: "pq-nodate",
          icon: "🚫",
          title: "What cannot be said — and this page will not say it",
          titleAr: "ما لا يصحّ أن يُقال — ولن تقوله هذه الصفحة",
          simple: "No year. No decade. Not “soon”. The rate is not fixed, it has changed before, and the Hour was never given to anyone to date.",
          simpleAr: "لا سنةَ ولا عقد، ولا «قريبًا». فالمعدَّلُ غيرُ ثابت، وقد تغيّر قبل اليوم، والساعةُ لم تُعطَ لأحدٍ ليؤرّخها.",
          plain: "Take the rate, divide the margin by it, and you get a number of years. That arithmetic is easy, it looks rigorous, and it is worthless — for three separate reasons.\n\n**The rate is not a constant.** It is the sum of rainfall, of how much is pumped out upstream, of treaties, of desalination plants that did not exist twenty years ago. It has already changed several times in one lifetime, and it changed *upward* between 2018 and 2020 when the lake refilled.\n\n**A trend is not a schedule.** Even a decline that continues tells you when a lake reaches a level. It does not tell you when a man is permitted to come out, because the second thing was never tied to the first in any text.\n\n**And the third reason is the one that settles it.** The Hour is knowledge Allah kept to Himself. The Prophet ﷺ was asked directly and answered that the one asked knows no more than the one asking. If the man who received revelation did not date it, no one reading a water-level chart is going to.\n\nSo the honest position is the modest one: these are three named places, the warning about two of them is in the most authentic collection there is, and what is happening to them can be measured today by anyone who wants to look. **What that means for the timing is not ours to say, and the moment a page says it, the page has stopped being trustworthy about everything else.**",
          plainAr: "خُذ المعدَّل، واقسم عليه المسافةَ الباقية، يخرج لك عددٌ من السنين. وهذه قسمةٌ سهلةٌ تبدو محكمةً وهي لا تساوي شيئًا — لثلاثة أسبابٍ متفرّقة.\n\n**المعدَّل ليس ثابتًا.** فهو حاصلُ المطر، ومقدارِ ما يُسحب من أعلى المجرى، والمعاهداتِ، ومحطّاتِ التحلية التي لم تكن موجودةً قبل عشرين سنة. وقد تغيّر مرارًا في عمرٍ واحد، بل تغيّر **صعودًا** بين ٢٠١٨م و٢٠٢٠م حين امتلأت البحيرة.\n\n**والاتّجاهُ ليس جدولًا.** فحتى الانحدارُ المستمرّ إنما يخبرك متى تبلغ بحيرةٌ منسوبًا. ولا يخبرك متى يُؤذَن لرجلٍ في الخروج، لأنّ الثاني لم يُربط بالأوّل في نصٍّ قطّ.\n\n**والسببُ الثالث هو الفاصل.** فالساعةُ علمٌ استأثر الله به. وقد سُئل النبيُّ ﷺ عنها مباشرةً فأجاب أنّ المسؤول عنها ليس بأعلمَ من السائل. فإذا كان الذي يُوحى إليه لم يؤرّخها، فليس من يقرأ منحنى منسوبِ ماءٍ بمؤرّخها.\n\nفالموقفُ الصادق هو المتواضع: هذه ثلاثةُ مواضعَ مسمّاة، والتحذيرُ في اثنين منها في أصحّ كتابٍ بعد كتاب الله، والذي يجري لها اليوم يمكن أن يقيسه كلُّ من أراد أن ينظر. **أمّا ما يعنيه ذلك في الوقت فليس لنا أن نقوله، وفي اللحظة التي تقوله فيها صفحةٌ تكون قد كفّت عن أن تكون مأمونةً في كلِّ ما سواه.**",
          proof: "“The one asked about it knows no more than the one asking.”",
          proofAr: "«مَا الْمَسْؤُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ».",
          ref: "Sahih al-Bukhari, Book of Faith, Hadith 50; Sahih Muslim, Book of Faith",
          refAr: "صحيح البخاري، كتاب الإيمان، حديث ٥٠؛ صحيح مسلم، كتاب الإيمان",
          strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
          strengthAr: "صحيح — متفق عليه (البخاري ومسلم)",
          keys: ["date", "when", "prediction", "year", "timing", "تاريخ", "متى", "تنبؤ", "سنة", "توقيت"]
        }
      ]
    }
  ],

  closing: "One last thing, and it is the reason the section is here at all. A man chained on an island, fourteen centuries ago, asked sailors about a palm grove, a lake and a spring — three ordinary working places, not capitals or wonders. He asked whether the trees still fruited, whether the lake still held water, and whether the people still farmed. Today those same three sit in the most closely measured stretch of water-stressed land on earth, and two of them are in the monitoring reports every year. That is worth knowing. It is not worth dating.",
  closingAr: "وتبقى كلمةٌ أخيرة، وهي علّةُ وجود هذا القسم أصلًا. رجلٌ مُوثَقٌ في جزيرةٍ قبل أربعة عشر قرنًا يسأل بحّارةً عن بستان نخلٍ وبحيرةٍ وعين — ثلاثةِ مواضعَ عاديّةٍ عاملة، لا عواصمَ ولا عجائب. سألهم: أما زال الشجرُ يُثمر؟ أما زالت البحيرةُ تحمل ماءها؟ أما زال الناسُ يزرعون؟ واليوم تقع هذه الثلاثةُ بعينها في أكثر بقاعِ الأرض رصدًا وأشدِّها إجهادًا مائيًّا، واثنان منها في تقارير الرصد كلَّ سنة. وهذا ممّا يستحقّ أن يُعلَم. وليس ممّا يستحقّ أن يُؤرَّخ به."
};
