/* ============================================================
   WORDS EXPLAINED — معاني المصطلحات
   ============================================================
   The scholars' answers on the Guidance page are precise, and
   precision costs vocabulary: awrah, mahram, khimar, 'inah,
   waswas, hudud, ijma'. A reader who does not know those words
   reads the answer and takes nothing from it — which defeats the
   whole point of a page called Guidance.

   So every ruling shows a small box listing the technical words
   that ACTUALLY APPEAR in it, in plain English and plain modern
   Arabic. This is the same idea the Stories page already uses
   with AR_GLOSSARY, applied to terminology instead of classical
   Arabic wording.

   HOW MATCHING WORKS
   `en` is matched case-insensitively on a word boundary against
   the English of the entry; `ar` is matched against the Arabic
   after harakat are stripped. Either one hitting is enough, so a
   term is explained whichever language the reader is in.

   RULES FOR WRITING AN ENTRY
   1. Explain, do not translate. "Awrah — nakedness" helps nobody.
      Say what must be covered and note that it differs.
   2. Where scholars differ on the meaning itself, say so in the
      definition rather than picking a side quietly.
   3. Never let a definition become a ruling. These describe what
      a word means; the ruling is in the card above it, with its
      evidence and the names attached.
   ============================================================ */

const TERMS = [
  /* ---------- Dress and covering ---------- */
  { id: "awrah", en: "awrah", ar: "عورة", alt: ["awra", "'awrah"],
    def: "The part of the body that must be covered in front of others. It is not one fixed thing: what must be covered differs for a man and a woman, and differs again depending on who is present — a husband, a close relative, or a stranger.",
    defAr: "ما يجب ستره من البدن أمام الناس. وليست شيئًا واحدًا مطّردًا: فما يجب ستره يختلف بين الرجل والمرأة، ويختلف باختلاف من بحضرته: الزوج، أو المَحرَم، أو الأجنبي." },
  { id: "hijab", en: "hijab", ar: "حجاب",
    def: "The covering a Muslim woman wears in front of men she could in principle marry. In everyday speech it usually means the headscarf, but in the books of fiqh it means the whole covering and the conditions it has to meet.",
    defAr: "ستر المرأة المسلمة أمام من يجوز أن يتزوّجها. ويُطلق في كلام الناس على غطاء الرأس غالبًا، وأما في كتب الفقه فيُراد به الستر كلّه بشروطه." },
  { id: "khimar", en: "khimar", ar: "خمار",
    def: "The head covering named in Surah An-Nur, which the verse says is to be drawn down over the chest — so it covers the hair, the neck and the upper chest, not the hair alone.",
    defAr: "غطاء الرأس المذكور في سورة النور، وأُمرت المرأة أن تضربه على جيبها — فيستر الشعر والعنق وأعلى الصدر، لا الشعر وحده." },
  { id: "jilbab", en: "jilbab", ar: "جلباب",
    def: "The loose outer garment named in Surah Al-Ahzab, worn over the ordinary clothes when going out. It is the outer layer, not the headscarf.",
    defAr: "الثوب الواسع الذي يُلبس فوق الثياب عند الخروج، المذكور في سورة الأحزاب. وهو الرداء الظاهر لا غطاء الرأس." },
  { id: "niqab", en: "niqab", ar: "نقاب",
    def: "A face covering that leaves the eyes visible. Whether it is obligatory or recommended is a genuine and long-standing disagreement among scholars.",
    defAr: "ما يُستر به الوجه ويُبرز العينين. وحكمه — أواجبٌ هو أم مستحبّ — خلافٌ حقيقيٌّ قديمٌ بين أهل العلم." },

  /* ---------- Family ---------- */
  { id: "mahram", en: "mahram", ar: "محرم",
    def: "A relative a person can never marry — a father, son, brother, uncle, and so on. It matters because the rules of covering and of travelling are different in front of a mahram.",
    defAr: "من يحرم على الإنسان نكاحه على التأبيد: كالأب والابن والأخ والعمّ ونحوهم. وله أثرٌ في أحكام الستر والسفر." },
  { id: "wali", en: "wali", ar: "ولي",
    def: "The guardian who contracts a woman's marriage on her behalf — normally her father, then the nearest male relative. Three of the four schools hold his presence is a condition for the marriage to be valid; the Hanafi school does not.",
    defAr: "من يتولّى عقد نكاح المرأة، وهو أبوها ثم الأقرب فالأقرب من عصبتها. وثلاثةٌ من المذاهب الأربعة تشترطه لصحّة العقد، والحنفيّة لا يشترطونه." },
  { id: "nikah", en: "nikah", ar: "نكاح",
    def: "The marriage contract itself — the offer, the acceptance, the witnesses and the dowry — as distinct from the wedding celebration.",
    defAr: "عقد الزواج نفسه: الإيجاب والقبول والشهود والمهر، لا حفل العرس." },
  { id: "adl-witness", en: "'adl", ar: "عدل",
    def: "Of a person: someone whose uprightness makes their word acceptable as a witness. Of a ruling: giving each side exactly what is due to it.",
    defAr: "في الشخص: من استقامت حاله فقُبلت شهادته. وفي الحكم: إعطاء كلّ ذي حقٍّ حقّه." },

  /* ---------- Money ---------- */
  { id: "riba", en: "riba", ar: "ربا",
    def: "The increase taken for no exchange of value — most obviously the interest paid on a loan simply for the passage of time. It is forbidden in the Quran in unusually severe terms.",
    defAr: "الزيادة التي تُؤخذ بلا عوض، وأظهرها الفائدة على القرض لأجل الأجل وحده. وقد حُرّم في القرآن بأشدّ ما حُرّم به شيء." },
  { id: "inah", en: "'inah", ar: "عينة", alt: ["inah", "eenah"],
    def: "A sale arranged so that a loan at interest can be dressed up as a trade: a thing is sold on credit for a high price and immediately bought back for less in cash, so that money has really been lent at a profit. The Prophet ﷺ named it as one of the causes of humiliation coming upon this ummah.",
    defAr: "بيعٌ يُتوصّل به إلى الربا في صورة تجارة: تُباع السلعة بثمنٍ مؤجَّلٍ كثير، ثم تُشترى نقدًا بأقلّ منه، فيؤول الأمر إلى قرضٍ بفائدة. وقد جعله النبي ﷺ من أسباب الذلّ النازل بهذه الأمّة." },
  { id: "zakat", en: "zakat", ar: "زكاة",
    def: "The obligatory yearly payment from wealth that has reached a set minimum and been held for a lunar year. It is a duty, not charity — the poor have a right to it.",
    defAr: "الحقّ الواجب في المال إذا بلغ النصاب وحال عليه الحول. وهي فريضةٌ لا تفضّل، وللفقراء فيها حقٌّ معلوم." },
  { id: "waqf", en: "waqf", ar: "وقف",
    def: "Property given away permanently so that its income pays for something forever — a hospital, a school, a well. This is how the free hospitals of the Golden Age were funded.",
    defAr: "حبس الأصل وتسبيل منفعته على وجهٍ دائم: كمستشفًى أو مدرسةٍ أو بئر. وبه مُوِّلت بيمارستانات العصر الذهبي المجّانية." },

  /* ---------- Prayer and purity ---------- */
  { id: "wudu", en: "wudu", ar: "وضوء", alt: ["ablution"],
    def: "The washing done before prayer: the face, the arms to the elbows, wiping the head, and the feet to the ankles.",
    defAr: "الطهارة الصغرى قبل الصلاة: غسل الوجه واليدين إلى المرفقين، ومسح الرأس، وغسل الرجلين إلى الكعبين." },
  { id: "khuff", en: "khuff", ar: "خف",
    def: "A leather covering for the foot. Wiping over it in wudu instead of washing the feet is established by many narrations; whether ordinary cloth socks take the same ruling is where scholars differ.",
    defAr: "ما يُلبس في القدم من جلد. والمسح عليه في الوضوء بدل غسل القدمين ثابتٌ بأحاديث كثيرة، وإنما الخلاف في إلحاق الجورب المعتاد به." },
  { id: "waswas", en: "waswas", ar: "وسواس", alt: ["waswasah", "wasawis"],
    def: "The whispering that makes a person doubt what they have already done — whether the wudu broke, whether the prayer was three rak'ah or four. The scholars treat it as something to be ignored deliberately, not reasoned with.",
    defAr: "ما يُلقى في النفس من الشكّ فيما فرغ منه المرء: أانتقض وضوؤه؟ أصلّى ثلاثًا أم أربعًا؟ وقرّر أهل العلم أنه يُدفع بالإعراض عنه لا بمجاراته." },
  { id: "rakah", en: "rak'ah", ar: "ركعة", alt: ["rakah", "rakat", "rak'at"],
    def: "One complete unit of the prayer — the standing and recitation, the bowing, and the two prostrations. Dhuhr is four rak'ah, Maghrib three, Fajr two.",
    defAr: "الوحدة التامّة من الصلاة: القيام والقراءة، ثم الركوع، ثم السجدتان. فالظهر أربع ركعات، والمغرب ثلاث، والفجر ركعتان." },
  { id: "qasr", en: "qasr", ar: "قصر", alt: ["shortening"],
    def: "Shortening the four-rak'ah prayers to two while travelling. It applies to Dhuhr, Asr and Isha only — Maghrib and Fajr are never shortened.",
    defAr: "قصر الرباعية إلى ركعتين في السفر، وهو في الظهر والعصر والعشاء خاصّة، ولا تُقصر المغرب ولا الفجر." },
  /* Anchored to the definite form: جمع is also the ordinary verb "to gather",
     so the bare form fired wherever a scholar "gathered the narrations". */
  { id: "jam", en: "jam'", ar: "الجمع",
    def: "Praying two prayers together in the time of one of them — Dhuhr with Asr, or Maghrib with Isha. It is a concession for a need, and its conditions are narrower than those for shortening.",
    defAr: "أداء صلاتين في وقت إحداهما: الظهر مع العصر، أو المغرب مع العشاء. وهو رخصةٌ لحاجة، وشرطه أضيق من شرط القصر." },
  { id: "qibla", en: "qibla", ar: "قبلة",
    def: "The direction of the Kaaba in Makkah, which the prayer faces from anywhere on earth. Working it out from any city is what drove Muslims into spherical trigonometry.",
    defAr: "جهة الكعبة بمكة التي تُستقبل في الصلاة من كلّ موضع. واستخراجها من أيّ بلدٍ هو الذي دفع المسلمين إلى حساب المثلثات الكرويّة." },
  { id: "jamaah", en: "jama'ah", ar: "جماعة", alt: ["jamaah", "congregation"],
    def: "The prayer performed together behind an imam, as opposed to alone.",
    defAr: "الصلاة خلف إمامٍ مع غيرك، في مقابل صلاة المنفرد." },

  /* ---------- Conduct and the heart ---------- */
  { id: "ghibah", en: "ghibah", ar: "غيبة", alt: ["backbiting"],
    def: "Mentioning something true about an absent person that they would dislike being said. If it is untrue it is slander, which is worse. The scholars list specific cases where it is permitted — such as warning someone about to be harmed.",
    defAr: "ذكرك أخاك بما فيه ممّا يكره في غيبته. فإن كان بما ليس فيه فهو البهتان وهو أشدّ. وقد عدّ أهل العلم مواضع تُباح فيها، كتحذير من يُخشى عليه الضرر." },
  { id: "tawbah", en: "tawbah", ar: "توبة", alt: ["repentance"],
    def: "Turning back to Allah from a sin: stopping it, regretting it, resolving not to return — and where someone else's right is involved, returning it or seeking their pardon.",
    defAr: "الرجوع إلى الله من الذنب: الإقلاع عنه، والندم عليه، والعزم على ألّا يعود — فإن تعلّق به حقٌّ لآدميٍّ ردّه أو استحلّه." },
  { id: "taqwa", en: "taqwa", ar: "تقوى",
    def: "Keeping a guard between yourself and what Allah forbade — acting out of awareness that He sees, rather than out of fear of being caught by people.",
    defAr: "أن تجعل بينك وبين ما حرّم الله وقاية، فتعمل على مراقبته سبحانه لا على خوف اطّلاع الناس." },
  { id: "ikhlas", en: "ikhlas", ar: "إخلاص", alt: ["sincerity"],
    def: "Doing an act for Allah alone, with no eye on what people will think of it.",
    defAr: "إفراد الله بالقصد في العمل، لا يلتفت فيه إلى نظر الناس." },
  /* Anchored to the definite form on purpose. Once harakat are stripped,
     وَهَن (wahn) and وَهُنَّ ("and they", feminine) are the same three letters,
     so the bare form fired on the hijab hadith "كاسيات عاريات وهنّ مائلات".
     The word only ever appears as الوهن in the texts that discuss it. */
  { id: "wahn", en: "wahn", ar: "الوهن",
    def: "The weakness the Prophet ﷺ said would be cast into the hearts of this ummah while it was still numerous. He defined it himself in four words: love of this world, and hatred of death.",
    defAr: "الضعف الذي أخبر النبي ﷺ أنه يُقذف في قلوب هذه الأمّة وهي كثيرة. وقد فسّره هو ﷺ بقوله: «حبّ الدنيا وكراهية الموت»." },
  { id: "asabiyyah", en: "asabiyyah", ar: "عصبية",
    def: "Ibn Khaldun's term for the binding solidarity that holds a group together and lets it take and keep power. His argument is that comfort dissolves it, and that the state falls when it is gone.",
    defAr: "مصطلح ابن خلدون للتلاحم الجامع الذي يقوم به أمر القوم فيغلبون ويملكون. وحاصل قوله أنّ الترف يُذيبها، وأنّ الدولة تسقط بذهابها." },

  /* ---------- How rulings are made ---------- */
  { id: "fiqh", en: "fiqh", ar: "فقه",
    def: "The scholars' working-out of what the Quran and Sunnah require in a particular situation. It is human reasoning about revelation, which is why qualified scholars can reach different conclusions.",
    defAr: "استنباط أهل العلم لما يقتضيه الكتاب والسنة في المسألة المعيّنة. وهو نظرٌ بشريٌّ في الوحي، ولذلك اختلف فيه المجتهدون." },
  { id: "fatwa", en: "fatwa", ar: "فتوى",
    def: "A scholar's answer to a specific question from a specific person in specific circumstances. Change the circumstances and the answer can change — which is why a fatwa found online may not be your answer.",
    defAr: "جواب العالم عن مسألةٍ معيّنةٍ لسائلٍ معيّنٍ في حالٍ معيّنة. فإذا تغيّرت الحال تغيّر الجواب، ولذلك قد لا تكون الفتوى المنشورة جوابًا لك أنت." },
  { id: "madhhab", en: "madhhab", ar: "مذهب", alt: ["school"],
    def: "One of the established schools of fiqh — Hanafi, Maliki, Shafi'i, Hanbali — each a whole method of deriving rulings, not merely a list of opinions.",
    defAr: "أحد المذاهب الفقهية المتّبعة: الحنفي والمالكي والشافعي والحنبلي. وكلٌّ منها منهجٌ كاملٌ في الاستنباط لا مجرّد أقوال." },
  { id: "ijma", en: "ijma'", ar: "إجماع", alt: ["ijma", "consensus"],
    def: "Agreement of the qualified scholars of a period on a ruling. A genuine ijma' settles a question; the word is claimed far more often than it is true.",
    defAr: "اتفاق مجتهدي العصر على حكم. والإجماع الثابت يقطع النزاع، وكثيرًا ما يُدّعى ولا يصحّ." },
  { id: "ijtihad", en: "ijtihad", ar: "اجتهاد",
    def: "A qualified scholar exerting his full effort to reach a ruling from the evidence. It is not open to everyone, and it is not guessing.",
    defAr: "بذل المجتهد وسعه في استخراج الحكم من الدليل. وليس هو لكلّ أحد، وليس تخمينًا." },
  { id: "hadd", en: "hadd", ar: "حد", alt: ["hudud"],
    def: "A punishment fixed in the Quran or Sunnah, as opposed to one left to a judge's discretion. Because it is fixed, it is also hedged with strict conditions of proof.",
    defAr: "عقوبةٌ مقدَّرةٌ في الكتاب أو السنة، في مقابل ما فُوّض إلى نظر القاضي. ولأنها مقدَّرةٌ فقد شُدّد في شروط إثباتها." },
  { id: "maqasid", en: "maqasid", ar: "مقاصد",
    def: "The purposes the Sharia came to serve — protecting religion, life, intellect, lineage and wealth. Ash-Shatibi made this a discipline of its own.",
    defAr: "مقاصد الشريعة التي جاءت لحفظها: الدين والنفس والعقل والنسل والمال. وقد أفردها الشاطبي بالتصنيف." },
  { id: "bidah", en: "bid'ah", ar: "بدعة", alt: ["bidah", "innovation"],
    def: "Introducing into the religion a form of worship that has no basis in it. Scholars are careful with the word, because ordinary new things — a printing press, a website — are not what it refers to.",
    defAr: "إحداث ما لا أصل له في الدين على وجه التعبّد. وقد تحرّز أهل العلم في إطلاقه، فإنّ المستحدثات العادية — كالمطبعة والموقع — ليست مرادة به." },

  /* ---------- Sources and grading ---------- */
  { id: "sahih", en: "Sahih", ar: "صحيح",
    def: "Of a hadith: authentic — the chain is unbroken and every narrator is reliable and precise. The highest grade a report can carry.",
    defAr: "في الحديث: ما اتّصل سنده بنقل العدل الضابط عن مثله من غير شذوذٍ ولا علّة. وهي أعلى درجات القبول." },
  { id: "daif", en: "weak", ar: "ضعيف", alt: ["da'if", "daif"],
    def: "Of a hadith: it fails one of the conditions of authenticity — a break in the chain, or a narrator who was unreliable. A weak report is not used to establish a ruling.",
    defAr: "في الحديث: ما اختلّ فيه شرطٌ من شروط الصحّة، كانقطاعٍ في السند أو راوٍ لا يُحتجّ به. ولا يُثبت به حكم." },
  { id: "isnad", en: "isnad", ar: "إسناد", alt: ["chain"],
    def: "The chain of people who passed a report on, each named, back to the Prophet ﷺ. Checking these chains is the science that lets a hadith be graded at all.",
    defAr: "سلسلة من نقلوا الخبر مسمَّين إلى النبي ﷺ. وبفحص الأسانيد قام علمٌ به تُعرف درجة الحديث أصلًا." },
  { id: "sira", en: "sira", ar: "سيرة",
    def: "The written history of the Prophet's ﷺ life. It is history, collected more loosely than hadith — which is why this site labels anything taken from it as sira and not as hadith.",
    defAr: "ما دُوّن من أخبار حياة النبي ﷺ. وهي تاريخٌ جُمع بشرطٍ أوسع من شرط الحديث، ولذلك يصفها هذا الموقع بأنها سيرةٌ لا حديث." },
  { id: "israiliyyat", en: "Israiliyyat", ar: "إسرائيليات",
    def: "Reports that entered Muslim books from earlier Jewish and Christian sources. They are neither accepted nor rejected wholesale: what agrees with our texts is accepted, what contradicts them is rejected, and the rest is left alone.",
    defAr: "أخبارٌ دخلت كتب المسلمين من مصادر أهل الكتاب. ولا تُقبل جملةً ولا تُردّ جملة: فما وافق نصوصنا قُبل، وما خالفها رُدّ، وما سوى ذلك تُوُقّف فيه." },
  { id: "lajnah", en: "Permanent Committee", ar: "اللجنة الدائمة",
    def: "Al-Lajnah ad-Da'imah — a standing body of senior scholars in Saudi Arabia that issues collective fatwas, so its answers carry more than one scholar's view.",
    defAr: "اللجنة الدائمة للبحوث العلمية والإفتاء — هيئةٌ من كبار العلماء تصدر الفتوى مجتمعةً، فجوابها ليس رأي عالمٍ واحد." },
  { id: "ummah", en: "ummah", ar: "أمة",
    def: "The whole community of Muslims, everywhere, taken as one body.",
    defAr: "جماعة المسلمين في الأرض كلّها، تُؤخذ جسدًا واحدًا." },
  { id: "sunnah-term", en: "Sunnah", ar: "سنة",
    def: "The Prophet's ﷺ way — what he said, did and approved. As a legal grade the same word means an act that is rewarded but not obligatory.",
    defAr: "هدي النبي ﷺ: ما قاله وفعله وأقرّه. ويُطلق اللفظ نفسه في الأحكام على ما يُثاب فاعله ولا يُعاقب تاركه." },
  { id: "fard", en: "fard", ar: "فرض", alt: ["obligatory", "wajib"],
    def: "Required. Leaving it without an excuse is a sin.",
    defAr: "ما طُلب فعله طلبًا جازمًا، ويأثم تاركه بلا عذر." },
  { id: "haram", en: "haram", ar: "حرام", alt: ["forbidden"],
    def: "Forbidden. Doing it knowingly and without an excuse is a sin.",
    defAr: "ما طُلب تركه طلبًا جازمًا، ويأثم فاعله عالمًا بلا عذر." },
  { id: "makruh", en: "makruh", ar: "مكروه",
    def: "Disliked but not forbidden — better left, no sin in doing it.",
    defAr: "ما تركه أولى من فعله، ولا إثم على فاعله." },
  { id: "mustahabb", en: "mustahabb", ar: "مستحب", alt: ["recommended"],
    def: "Recommended — rewarded if done, no blame if left.",
    defAr: "ما يُثاب فاعله ولا يُلام تاركه." },
  { id: "mubah", en: "mubah", ar: "مباح", alt: ["permissible"],
    def: "Permitted — the religion neither asks for it nor objects to it.",
    defAr: "ما استوى فعله وتركه في نظر الشرع." }
];

/* Build the lookup once. Kept as a function rather than a top-level constant
   because this file is loaded before the page script on some pages and after
   it on others, and a stale cached copy of either must not break the render. */
function iitwTermIndex() {
  if (iitwTermIndex._cache) return iitwTermIndex._cache;
  const strip = s => String(s || "").replace(/[ً-ْٰـ]/g, "");
  const idx = TERMS.map(t => ({
    t,
    // Longest first, so "Permanent Committee" is matched before "Committee".
    words: [t.en, ...(t.alt || [])].filter(Boolean).sort((a, b) => b.length - a.length),
    arWord: strip(t.ar)
  }));
  iitwTermIndex._cache = idx;
  return idx;
}

/* Arabic is matched WORD BY WORD, never as a bare substring.
   A substring test looks fine and is badly wrong: ولي (wali) sits inside
   وليس (“and not”), and وهن (wahn) sits inside وهنّ (“and they”), so the
   hijab card was being told it needed the word “guardian” explained. This is
   the same trap the Stories page hit when كلّ matched الكَلّ.

   So the text is split into words, harakat stripped, and the common attached
   prefixes (و ف ب ك ل and the definite article) and a trailing ta marbuta are
   peeled off before comparing. */
function iitwArabicWords(text) {
  const stripped = String(text || "").replace(/[ً-ْٰـ]/g, "");
  const out = new Set();
  stripped.split(/[^ء-ي]+/).filter(Boolean).forEach(w => {
    out.add(w);
    const noPrefix = w.replace(/^(وال|فال|بال|كال|لل|ال|و|ف|ب|ك|ل)/, "");
    if (noPrefix.length >= 3) {
      out.add(noPrefix);
      out.add(noPrefix.replace(/[ةه]$/, ""));
    }
    out.add(w.replace(/[ةه]$/, ""));
  });
  return out;
}

/* Return the terms that actually appear in the given text. English is matched
   on a word boundary so "wali" cannot fire inside "Wallace". */
function iitwFindTerms(englishText, arabicText) {
  if (typeof TERMS === "undefined") return [];
  const en = String(englishText || "").toLowerCase();
  const arWords = iitwArabicWords(arabicText);
  const found = [];
  iitwTermIndex().forEach(({ t, words, arWord }) => {
    const hitEn = words.some(w => {
      const esc = w.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp("(^|[^a-z])" + esc + "([^a-z]|$)", "i").test(en);
    });
    /* Compare the term's EXACT form against the word set. The set already
       contains prefix-stripped and ta-marbuta-stripped variants of every word
       in the text, so stripping the term as well is one step too far: it let
       عينة ('inah) match بعينه ("itself"), which put the definition of a
       disguised interest sale on the ruling about marriage guardians. */
    const hitAr = arWord.length >= 3 && arWords.has(arWord);
    if (hitEn || hitAr) found.push(t);
  });
  return found;
}
