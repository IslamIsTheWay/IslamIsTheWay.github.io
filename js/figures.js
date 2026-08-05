/* ============================================================
   DIAGRAMS FOR THE RULINGS — رسوم توضيحية
   ============================================================
   WHY THESE ARE HTML AND NOT SVG DRAWINGS ANY MORE

   The first version of this file drew shapes in SVG with the
   labels as <text> inside the drawing. Two things were wrong
   with that, and both were reported from the live site:

     1. IT NEVER TRANSLATED. Text inside an SVG is not a text
        node i18n.js can walk, so switching the site to Arabic
        left every label in English. Half the readers of this
        site read Arabic first; a diagram that only speaks
        English explains nothing to them.

     2. IT WAS CLIPPED IN RTL. The drawing sat in a horizontal
        scroll wrapper. In RTL the scroll starts at the right,
        so the left-hand labels were cut off mid-word — "Hair,
        neck and ears" rendered as "irs / tly".

   And a third thing was wrong that no amount of code fixes: an
   outline of a garment drawn in flat shapes does not read as a
   person wearing a covering. It read as a winter hat. A bad
   drawing is worse than no drawing, because the reader now has
   to work out what they are looking at before they can learn
   anything from it.

   So there are no drawings here. Every figure is now structured
   DATA rendered as ordinary HTML — tables and comparison lists
   whose labels are real text nodes in both languages. That
   translates, wraps, reads right-to-left correctly, needs no
   horizontal scrolling, and cannot be mistaken for a hat.

   TWO SHAPES:
     compare — two columns, usually right against wrong
     rows    — a table with a row per case

   A figure is NEVER the ruling. It lays out what the card above
   it already says, with its evidence and its attributions.
   ============================================================ */

const RULING_FIGURES = {

  /* ---------- What makes a covering fall short ---------- */
  "fq-hijab-conditions": {
    title: "What falls short, and what meets it",
    titleAr: "ما الذي لا يكفي، وما الذي يستوفي",
    caption: "This lays out the conditions the scholars set, side by side. It describes the RULE, not one particular outfit — many different styles of dress meet all of it, and a garment can be black and still fail two of these.",
    captionAr: "هذا بيانٌ لشروط أهل العلم مقابلةً. وهو وصفٌ للقاعدة لا لزيٍّ بعينه، فأنماطٌ كثيرةٌ من اللباس تستوفيها جميعًا، وقد يكون الثوب أسود ويُخلّ باثنين منها.",
    compare: {
      bad: {
        label: "Does not meet the conditions",
        labelAr: "لا يستوفي الشروط",
        items: [
          { en: "The scarf is placed on the head but the front of the hair is left showing. This is the most common case, and it fails the first condition — the covering is for the hair, so hair that is deliberately left out is the thing itself being uncovered.",
            ar: "يُوضع الغطاء على الرأس ويُترك مقدَّم الشعر ظاهرًا. وهذه أكثر الصور وقوعًا، وهي مخلّةٌ بالشرط الأول: فالخمار للشعر، وما تُرك منه قصدًا فهو المقصود بالستر نفسه." },
          { en: "It stops at the neck instead of being drawn down over the chest — the verse in An-Nur names the chest specifically.",
            ar: "يقف عند العنق ولا يُضرب على الجيب — وقد نصّت آية النور على الجيب بعينه." },
          { en: "It is thin enough that the hair or the skin shows through it. Covering the colour is not the same as covering.",
            ar: "يكون رقيقًا تُرى من ورائه البشرة أو الشعر. وستر اللون ليس هو الستر." },
          { en: "It is tight enough to describe the shape of what is underneath. This is what the scholars point to in the hadith of women who are “clothed yet naked”.",
            ar: "يكون ضيّقًا يصف حجم ما تحته. وهذا ما يشير إليه أهل العلم في حديث «كاسياتٍ عاريات»." },
          { en: "It is itself the ornament — chosen to draw the eye. A covering designed to attract attention defeats the reason it was commanded.",
            ar: "يكون هو نفسه الزينة، يُختار ليلفت النظر. واللباس المقصود به لفت الأنظار ينقض العلّة التي شُرع لها." },
          { en: "It is worn with perfume when going out among people, or it imitates the dress of men, or it is a garment of fame — conspicuous either by lavishness or by studied shabbiness.",
            ar: "يُلبس مع الطيب عند الخروج بين الناس، أو فيه تشبّهٌ بلباس الرجال، أو يكون لباس شهرةٍ يُعرف بالفخامة أو بالإغراب." }
        ]
      },
      good: {
        label: "Meets the conditions",
        labelAr: "يستوفي الشروط",
        items: [
          { en: "Covers the hair completely — including the front, the sides and what is at the back of the neck.",
            ar: "يستر الشعر كلَّه، ومنه المقدَّم والجانبان وما وراء العنق." },
          { en: "Drawn down over the chest, as An-Nur (24:31) states.",
            ar: "مضروبٌ على الجيب كما في آية النور (٢٤:٣١)." },
          { en: "Thick — nothing beneath it shows through.",
            ar: "صفيقٌ لا يُرى من ورائه ما تحته." },
          { en: "Loose — it does not describe the shape of the body.",
            ar: "فضفاضٌ لا يصف حجم الجسد." },
          { en: "Plain enough that it is not itself the thing being looked at.",
            ar: "غير لافتٍ في نفسه حتى لا يكون هو المنظور إليه." },
          { en: "Not perfumed for going out, no imitation of men's dress, and not a garment of fame.",
            ar: "غير مطيَّبٍ للخروج، ولا فيه تشبّهٌ بلباس الرجال، وليس لباس شهرة." }
        ]
      }
    },
    footnote: "The face and the hands are a separate question, and the scholars genuinely differ on them — that is the next card, not this one.",
    footnoteAr: "وأما الوجه والكفّان فمسألةٌ أخرى، والخلاف فيها بين أهل العلم خلافٌ حقيقيّ — وهي البطاقة التالية لا هذه."
  },

  /* ---------- Which part of the sock is wiped ---------- */
  "fq-wiping-socks": {
    title: "Where you wipe, and for how long",
    titleAr: "أين تمسح، وإلى متى",
    caption: "Ali رضي الله عنه said that if the religion were decided by opinion, the underside of the sock would have more right to be wiped than the top — but he saw the Prophet ﷺ wipe the top.",
    captionAr: "قال عليٌّ رضي الله عنه: لو كان الدين بالرأي لكان أسفل الخفّ أولى بالمسح من أعلاه، ولكنه رأى النبي ﷺ يمسح ظاهرهما.",
    compare: {
      good: {
        label: "Wipe here",
        labelAr: "امسح هنا",
        items: [
          { en: "The TOP of the foot — the upper surface, from the toes toward the ankle.",
            ar: "ظاهر القدم — أعلاها من الأصابع نحو الساق." },
          { en: "Once, with wet hands. It is a wipe, not a wash.",
            ar: "مرّةً واحدةً باليدين مبلولتين. وهو مسحٌ لا غسل." }
        ]
      },
      bad: {
        label: "Not here",
        labelAr: "لا تمسح هنا",
        items: [
          { en: "The sole. Wiping the underside is not what was done, however sensible it seems.",
            ar: "أسفل الخفّ. فالمسح على الباطن ليس هو الوارد وإن بدا أوجه في النظر." },
          { en: "Not socks you pulled on WITHOUT wudu — that is the condition people forget.",
            ar: "ولا جوربان لُبسا على غير وضوء — وهذا هو الشرط الذي يُغفل." }
        ]
      }
    },
    rows: {
      headers: ["", "How long it lasts"],
      headersAr: ["", "مدّة المسح"],
      items: [
        { label: "If you are at home", labelAr: "للمقيم", value: "One day and one night", valueAr: "يومٌ وليلة" },
        { label: "If you are travelling", labelAr: "للمسافر", value: "Three days and three nights", valueAr: "ثلاثة أيامٍ بلياليهنّ" },
        { label: "Counted from", labelAr: "تُحسب من", value: "The first time you wipe — not from when you put them on", valueAr: "أول مسحةٍ لا من وقت اللبس" },
        { label: "It ends if", labelAr: "وينتهي بـ", value: "You take them off, or anything happens that breaks wudu in the usual way", valueAr: "خلعهما، أو ما ينقض الوضوء" }
      ]
    }
  },

  /* ---------- How many rak'ah on a journey ---------- */
  "fq-travel-prayer": {
    title: "How many rak'ah when travelling",
    titleAr: "كم ركعةً في السفر",
    caption: "Maghrib and Fajr are never shortened. That is the part most often got wrong — and it is worth memorising as a rule rather than working out each time.",
    captionAr: "المغرب والفجر لا تُقصران أبدًا. وهذا أكثر ما يقع فيه الغلط، وحقُّه أن يُحفظ قاعدةً لا أن يُستأنف النظر فيه كلَّ مرّة.",
    rows: {
      headers: ["Prayer", "At home", "Travelling"],
      headersAr: ["الصلاة", "في الإقامة", "في السفر"],
      items: [
        { label: "Fajr",    labelAr: "الفجر",   home: "2", away: "2", note: "unchanged",       noteAr: "لا تتغيّر" },
        { label: "Dhuhr",   labelAr: "الظهر",   home: "4", away: "2", note: "shortened",       noteAr: "تُقصر" },
        { label: "Asr",     labelAr: "العصر",   home: "4", away: "2", note: "shortened",       noteAr: "تُقصر" },
        { label: "Maghrib", labelAr: "المغرب",  home: "3", away: "3", note: "never shortened", noteAr: "لا تُقصر أبدًا" },
        { label: "Isha",    labelAr: "العشاء",  home: "4", away: "2", note: "shortened",       noteAr: "تُقصر" }
      ]
    },
    footnote: "Shortening and joining are two different questions. Shortening needs nothing beyond the journey itself; joining two prayers together is a concession for a need — travelling on, difficulty stopping, rain or illness.",
    footnoteAr: "والقصر والجمع مسألتان لا مسألة واحدة. فالقصر لا يحتاج إلى سببٍ زائدٍ على السفر، وأما الجمع فرخصةٌ لحاجة: كالسير ومشقّة النزول والمطر والمرض."
  },

  /* ---------- Ghibah against slander ---------- */
  "fq-backbiting": {
    title: "Where the line falls",
    titleAr: "أين يقع الحدّ",
    caption: "What decides it is not whether what you said is true. It is whether the person would dislike it being said about them.",
    captionAr: "وليس الفيصل صدق ما قلتَ، بل كون صاحبه يكره أن يُقال عنه.",
    compare: {
      bad: {
        label: "Ghibah — backbiting",
        labelAr: "الغيبة",
        items: [
          { en: "You said something TRUE about someone who was not there.",
            ar: "ذكرتَ أخاك بما فيه وهو غائب." },
          { en: "They would dislike it being said. That is the whole test.",
            ar: "وهو يكره أن يُقال. وهذا هو المناط كلّه." },
          { en: "Forbidden — unless it falls under one of the cases the scholars listed.",
            ar: "وهي محرَّمة — إلا أن تدخل في المواضع التي عدّها أهل العلم." }
        ]
      },
      good: {
        label: "Buhtan — slander, and it is worse",
        labelAr: "البهتان، وهو أشدّ",
        items: [
          { en: "You said something UNTRUE about someone who was not there.",
            ar: "ذكرتَه بما ليس فيه وهو غائب." },
          { en: "The Prophet ﷺ named this himself when he was asked what happens if the fault is not in him: “then you have slandered him.”",
            ar: "وقد سمّاها النبي ﷺ حين سُئل: فإن لم يكن فيه ما أقول؟ قال: «فقد بهتَّه»." },
          { en: "Worse than backbiting, because now it is a lie as well as an injury.",
            ar: "وهي أشدّ من الغيبة، لأنها كذبٌ مع الأذى." }
        ]
      },
      swapColours: true
    },
    footnote: "The scholars list specific cases where mentioning a fault is allowed — warning someone about to be harmed, seeking a ruling, complaining of a wrong to someone who can remove it, and identifying a person by a description they are already known by. The card above sets those out.",
    footnoteAr: "وقد عدّ أهل العلم مواضع يجوز فيها ذكر العيب: كتحذير من يُخشى عليه الضرر، والاستفتاء، والتظلّم إلى من يقدر على رفع الظلم، والتعريف بمن اشتُهر بوصفه. وقد فُصّلت في البطاقة أعلاه."
  }
};
