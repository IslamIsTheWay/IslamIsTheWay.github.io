/* ============================================================
   AR-RAGHIB AL-ISFAHANI ON THE QURAN PAGE — the 📜 button
   ============================================================
   Asked for by the owner more than once: the explanations of the first ten
   surahs "from the book of al-Raghib al-Isfahani — why the verses are there,
   how they are connected with other verses", "each and every verse
   possible". What the tadabbur panel had of him was a handful of quotations
   from his dictionary; his tafsir was cited nowhere. This is his tafsir.

   THE FILES (all generated; the builders are described in HANDOFF PART 31)
     js/raghib-index.js      always loaded: which surahs and verses have what,
                             and a content hash for every file below
     js/raghib/<n>.js        the notes for surah n: his own words (checked
                             against the book letter by letter), the point in
                             plain words (EN + AR), the verses he connects it
                             with (cut from the KFGQPC text), volume and page.
     js/raghib/<n>-<k>.js    …or, for a long surah, the same notes in PARTS
                             by verse range. Al-Baqarah alone runs to
                             megabytes, so a part is fetched only when its
                             verses come near the screen (rgWatchParts); until
                             then the verse shows a "loading" line.
     js/raghib/full/<n>-<k>.js  EVERYTHING he wrote on each verse, loaded
                             only when a reader asks for it
   Nothing is fetched until the button is pressed.

   RULES
   * `said` is his words. Never paraphrase inside it; the plain-language
     explanation is a separate, labelled box.
   * A verse is never typed: every ﴿…﴾ in these files was cut from the
     KFGQPC text by the builder.
   * Where nothing of his survives on a verse, the verse says so. */

function iitwRaghibFor(n) {
  if (typeof RAGHIB_INDEX === "undefined") return null;
  return RAGHIB_INDEX[String(n)] || null;
}

function rgDigits(n) {
  return (typeof toArabicDigits === "function") ? toArabicDigits(n) : String(n);
}

function rgSurah(n) {
  return (typeof SURAHS !== "undefined") ? SURAHS.filter(function (s) { return s.n === +n; })[0] : null;
}

function rgEsc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* A reference "31:14", "3:18-19" or "2:285–3:2", in both languages. */
function rgRefParts(ref) {
  var m = String(ref).match(/^(\d+):(\d+)(?:-(\d+))?(?:–(\d+):(\d+))?$/);
  if (!m) return { en: ref, ar: ref };
  var s1 = rgSurah(m[1]);
  if (m[4]) {
    var s2 = rgSurah(m[4]);
    return {
      en: (s1 ? s1.name + " " : "") + m[1] + ":" + m[2] + " – " + (s2 ? s2.name + " " : "") + m[4] + ":" + m[5],
      ar: (s1 ? s1.arabic : m[1]) + ": " + rgDigits(m[2]) + " – " + (s2 ? s2.arabic : m[4]) + ": " + rgDigits(m[5])
    };
  }
  var a = m[3] ? m[2] + "–" + m[3] : m[2];
  return {
    en: (s1 ? s1.name + " " : "") + m[1] + ":" + a,
    ar: (s1 ? s1.arabic : m[1]) + ": " + rgDigits(a)
  };
}

function rgRefHtml(ref) {
  var r = rgRefParts(ref);
  return '<span class="en-only">' + r.en + '</span><span class="ar-only" dir="rtl">' + r.ar + '</span>';
}

/* Lines of a note are paragraphs; a line may begin with a bullet or "1." */
function rgPara(text, rtl) {
  if (!text) return "";
  return String(text).split("\n").map(function (p) {
    return '<p' + (rtl ? ' dir="rtl"' : '') + '>' + p + '</p>';
  }).join("");
}

/* ---------- loading ---------- */
var _rgLoading = {};
function rgLoad(src) {
  if (_rgLoading[src]) return _rgLoading[src];
  _rgLoading[src] = new Promise(function (resolve, reject) {
    var el = document.createElement("script");
    el.src = src;
    el.onload = function () { resolve(); };
    el.onerror = function () { delete _rgLoading[src]; reject(new Error("could not load " + src)); };
    document.head.appendChild(el);
  });
  return _rgLoading[src];
}

/* ---------- the source line ---------- */
function rgSrcHtml(v, p, pe, sid) {
  var pages = (pe && pe !== p) ? p + "–" + pe : String(p);
  var pagesAr = (pe && pe !== p) ? rgDigits(p) + "–" + rgDigits(pe) : rgDigits(p);
  var link = sid ? ' <a href="https://shamela.ws/book/9231/' + sid + '" target="_blank" rel="noopener">' +
    '<span class="en-only">read the page ↗</span><span class="ar-only">اقرأ الصفحة ↗</span></a>' : "";
  return '<div class="rg-src">📚 ' +
    '<span class="en-only">Tafsir Ar-Raghib al-Isfahani, vol. ' + v + ', ' + (pe && pe !== p ? "pp. " : "p. ") + pages + ' (al-Maktaba al-Shamela)</span>' +
    '<span class="ar-only" dir="rtl">تفسير الراغب الأصفهاني، ج' + rgDigits(v) + ' ص' + pagesAr + ' (المكتبة الشاملة)</span>' +
    link + '</div>';
}

/* ---------- one note ---------- */
function rgNoteHtml(n) {
  var h = '<div class="rg-note">';
  h += '<h4 class="rg-h"><span class="en-only">' + n.h + '</span><span class="ar-only" dir="rtl">' + n.hAr + '</span></h4>';
  h += '<div class="rg-said" dir="rtl" lang="ar">' +
       '<div class="rg-label"><span class="en-only">In his own words (Arabic)</span><span class="ar-only">قال الراغب</span></div>' +
       '<p>' + String(n.said).replace(/ \.\.\. /g, ' … ') + '</p></div>';
  h += '<div class="rg-plain">' +
       '<div class="rg-label">💬 <span class="en-only">What he is saying, in plain words</span><span class="ar-only">المعنى بكلامٍ بسيط</span></div>' +
       '<div class="en-only">' + rgPara(n.en) + '</div>' +
       '<div class="ar-only" dir="rtl">' + rgPara(n.ar, true) + '</div></div>';
  if (n.links && n.links.length) {
    h += '<div class="rg-links"><div class="rg-label">🔗 <span class="en-only">The verses he connects it with</span>' +
         '<span class="ar-only">الآيات التي ربطها بها</span></div>';
    n.links.forEach(function (l) {
      h += '<div class="rg-link">' +
           '<div class="rg-link-q" dir="rtl" lang="ar">' + l.q + '</div>' +
           '<div class="rg-link-ref">' + rgRefHtml(l.ref) + '</div>' +
           (l.en ? '<div class="rg-link-why en-only">' + l.en + '</div>' : "") +
           (l.ar ? '<div class="rg-link-why ar-only" dir="rtl">' + l.ar + '</div>' : "") +
           '</div>';
    });
    h += '</div>';
  }
  h += n.book ? rgIntroSrcHtml(n) : rgSrcHtml(n.v, n.p, n.pe, n.sid);
  return h + '</div>';
}

/* ---------- how he teaches us to see the religion (js/raghib/intro.js) ----------
   The owner asked for "how we should view Islam" from this scholar's books,
   not only his tafsir: fifteen passages from al-Dhari'a ila Makarim
   al-Shari'a and Tafsil al-Nash'atayn — what a human being is for, reason and
   revelation, worship, a pure soul, work — each checked against the book like
   the notes (build_intro.py), with its page and a link to read it. */
var RG_BOOKS = {
  D: { en: "al-Dhari'a ila Makarim al-Shari'a", ar: "الذريعة إلى مكارم الشريعة", shamela: 1390 },
  T: { en: "Tafsil al-Nash'atayn wa-Tahsil al-Sa'adatayn", ar: "تفصيل النشأتين وتحصيل السعادتين", shamela: 21562 },
  /* The surahs his tafsir does not reach (6-10) are explained from his
     dictionary of the Quran; this digitisation carries no page ids, so the
     source line names the book and page with no link. */
  M: { en: "al-Mufradat fi Gharib al-Quran", ar: "المفردات في غريب القرآن", shamela: 0 }
};

function rgIntroSrcHtml(n) {
  var b = RG_BOOKS[n.book] || { en: n.book, ar: n.book, shamela: 0 };
  var two = n.pe && n.pe !== n.p;
  var link = (n.sid && b.shamela) ? ' <a href="https://shamela.ws/book/' + b.shamela + '/' + n.sid + '" target="_blank" rel="noopener">' +
    '<span class="en-only">read the page ↗</span><span class="ar-only">اقرأ الصفحة ↗</span></a>' : "";
  return '<div class="rg-src">📚 ' +
    '<span class="en-only">Ar-Raghib al-Isfahani, <em>' + b.en + '</em>, ' + (two ? "pp. " + n.p + "–" + n.pe : "p. " + n.p) + ' (al-Maktaba al-Shamela)</span>' +
    '<span class="ar-only" dir="rtl">الراغب الأصفهاني، «' + b.ar + '»، ص' + (two ? rgDigits(n.p) + "–" + rgDigits(n.pe) : rgDigits(n.p)) + ' (المكتبة الشاملة)</span>' +
    link + '</div>';
}

function rgIntroHtml(list) {
  var h = '<div class="rg-intro-lead">' +
    '<p class="en-only">Ar-Raghib did not only explain verses. In two short books — <em>al-Dhari\'a ila Makarim al-Shari\'a</em> ("The Way to the Noble Traits of the Law") and <em>Tafsil al-Nash\'atayn</em> ("The Two Lives Set Out") — he explains what a human being is for, how reason and revelation work together, what worship does to the soul, and why ordinary work matters. These are his own words from those books, checked against them, with the plain meaning and the verses he builds on.</p>' +
    '<p class="ar-only" dir="rtl">لم يقتصر الراغب على تفسير الآيات؛ ففي كتابيه «الذريعة إلى مكارم الشريعة» و«تفصيل النشأتين وتحصيل السعادتين» بيّن لماذا خُلق الإنسان، وكيف يتعاضد العقل والشرع، وما تفعله العبادة بالنفس، ولماذا للعمل في الدنيا شأن. وهذه كلماته بنصّها من الكتابين، مطابَقةً عليهما، مع معناها بكلامٍ بسيط والآيات التي بنى عليها.</p>' +
    '</div>';
  list.forEach(function (n) { h += rgNoteHtml(n); });
  return h;
}

function iitwRaghibIntro(btn) {
  var box = document.getElementById("rgIntro");
  if (!box) return;
  if (!box.hidden) { box.hidden = true; btn.classList.remove("armed"); return; }
  if (typeof RAGHIB_INTRO_HASH === "undefined" || !RAGHIB_INTRO_HASH) return;
  btn.classList.add("rg-busy");
  rgLoad("js/raghib/intro.js?h=" + RAGHIB_INTRO_HASH).then(function () {
    if (!box.firstChild) box.innerHTML = rgIntroHtml(window.RAGHIB_INTRO || []);
    box.hidden = false;
    btn.classList.add("armed");
    if (window.applyI18n) window.applyI18n();
  }).catch(function () {
    alert(document.documentElement.classList.contains("lang-ar")
      ? "تعذّر التحميل. تحقّق من الاتصال ثم أعد المحاولة."
      : "It could not be loaded. Check your connection and try again.");
  }).then(function () { btn.classList.remove("rg-busy"); });
}

/* ---------- the box under one verse ----------
   `notes` null = its part is not loaded yet: a "loading" line stands in, and
   the box carries data-rg-part so rgWatchParts can fetch it. */
function rgVerseHtml(s, a, notes, chunk, none, part) {
  var sm = rgSurah(s);
  var hasNotes = notes === null || notes.length > 0;     // a part still loading has notes
  var h = '<div class="rg-ayah" data-rg="' + a + '"' + (notes === null ? ' data-rg-part="' + part + '"' : '') + '>';
  h += '<div class="rg-ayah-head">📜 <span class="en-only">Ar-Raghib al-Isfahani on ' + (sm ? sm.name + " " : "") + s + ':' + a + '</span>' +
       '<span class="ar-only" dir="rtl">الراغب الأصفهاني على الآية ' + rgDigits(a) + (sm ? ' من سورة ' + sm.arabic : '') + '</span></div>';
  if (notes === null) {
    h += '<div class="rg-wait"><span class="en-only">Loading his notes on this verse…</span>' +
         '<span class="ar-only" dir="rtl">جارٍ تحميل شرحه لهذه الآية…</span></div>';
  } else {
    notes.forEach(function (n) { h += rgNoteHtml(n); });
  }
  if (chunk) {
    h += '<button type="button" class="rg-full-btn" onclick="iitwRaghibFull(this,' + s + ',' + a + ')">' +
         '📖 <span class="en-only">' + (hasNotes ? "Everything he wrote on this verse" : "Read what he wrote on this verse") + ' (Arabic)</span>' +
         '<span class="ar-only" dir="rtl">' + (hasNotes ? "كلّ ما كتبه على هذه الآية" : "اقرأ ما كتبه على هذه الآية") + '</span></button>' +
         '<div class="rg-full" hidden></div>';
  } else if (none) {
    h += '<div class="rg-none"><span class="en-only">Nothing of Ar-Raghib\'s commentary on this verse survives in the printed text of his tafsir.</span>' +
         '<span class="ar-only" dir="rtl">لم يصلنا من كلام الراغب على هذه الآية شيءٌ في النصّ المطبوع من تفسيره.</span></div>';
  }
  return h + '</div>';
}

/* ---------- the panel under the surah title ---------- */
function rgPanelHtml(s, idx) {
  var sm = rgSurah(s) || { name: String(s), arabic: String(s) };
  var noteVerses = (idx.notes && idx.notes.verses) || [];
  var h = '<div class="rg-panel" id="rgPanel" hidden>';
  h += '<div class="rg-panel-head">📜 <span class="en-only">Ar-Raghib al-Isfahani on Surah ' + sm.name + '</span>' +
       '<span class="ar-only" dir="rtl">الراغب الأصفهاني على سورة ' + sm.arabic + '</span></div>';
  h += '<div class="en-only">' +
    '<p>Abu al-Qasim al-Husayn ibn Muhammad, known as Ar-Raghib al-Isfahani, died in 502 AH (1108 CE). Scholars still turn to his <em>al-Mufradat</em>, the dictionary of the Quran\'s words, and he is known for how he connects verses: he takes a word back to its root meaning, then follows it through the Quran, so that one verse explains another.</p>' +
    (s <= 5
      ? '<p>His tafsir survives from the beginning of the Quran to the end of Surah al-Ma\'idah. Under each verse you will find his own words, copied from the book and checked against it letter by letter; the same point in plain words; the verses he connects it with, in the Mushaf\'s text; and the volume and page of the printed edition, with a link to read the page yourself. <strong>Everything he wrote on this verse</strong> opens his whole commentary on it.</p>'
      : '<p>His tafsir stops at the end of Surah al-Ma\'idah. What you see under the verses of this surah is from his <em>al-Mufradat</em>: where he explains a word of the Quran and cites this verse, and the other verses he explains it by.</p>') +
    '</div>';
  h += '<div class="ar-only" dir="rtl">' +
    '<p>أبو القاسم الحسين بن محمد، المعروف بالراغب الأصفهاني، توفّي سنة ٥٠٢هـ. وما زال أهل العلم يرجعون إلى كتابه «المفردات في غريب القرآن»، وعُرف بطريقته في ربط الآيات: يردّ اللفظ إلى أصل معناه، ثم يتتبّعه في القرآن، فتُفسَّر الآيةُ بالآية.</p>' +
    (s <= 5
      ? '<p>وقد وصلنا تفسيره من أول القرآن إلى آخر سورة المائدة. وتجد تحت كل آية: كلامه بنصّه منقولًا من كتابه ومطابَقًا عليه حرفًا حرفًا، ثم المعنى نفسه بكلامٍ بسيط، ثم الآيات التي ربطها بها بخطّ المصحف، ثم الجزء والصفحة من الطبعة مع رابطٍ تقرأ منه الصفحة بنفسك. وزرّ <strong>«كلّ ما كتبه على هذه الآية»</strong> يفتح كلامه عليها كاملًا.</p>'
      : '<p>وقد انتهى تفسيره عند آخر سورة المائدة، فما تجده تحت آيات هذه السورة من كتابه «المفردات»: حيث يشرح لفظًا من ألفاظ القرآن ويستشهد بهذه الآية، والآياتِ الأخرى التي يفسّره بها.</p>') +
    '</div>';
  if (typeof RAGHIB_INTRO_HASH !== "undefined" && RAGHIB_INTRO_HASH) {
    h += '<button type="button" class="rg-intro-btn" onclick="iitwRaghibIntro(this)">🧭 ' +
         '<span class="en-only">How he teaches us to see the religion</span>' +
         '<span class="ar-only" dir="rtl">كيف يعلّمنا أن ننظر إلى الدين</span></button>' +
         '<div class="rg-intro" id="rgIntro" hidden></div>';
  }
  if (noteVerses.length) {
    var jump = noteVerses.map(function (v) {
      return '<button type="button" class="tad-jump" onclick="iitwJumpToRaghibVerse(' + v + ')">' +
             '<span class="en-only">' + v + '</span><span class="ar-only" dir="rtl">' + rgDigits(v) + '</span></button>';
    }).join("");
    h += '<div class="rg-coverage"><span class="en-only">Explained in plain words so far: verses </span>' +
         '<span class="ar-only" dir="rtl">شُرح بكلامٍ بسيط إلى الآن: الآيات </span>' + jump + '</div>';
  }
  if (idx.none && idx.none.length) {
    h += '<div class="rg-coverage"><span class="en-only">Nothing of his commentary survives on verse' + (idx.none.length > 1 ? "s " : " ") + idx.none.join(", ") + '; the verse says so.</span>' +
         '<span class="ar-only" dir="rtl">لم يصلنا من كلامه شيءٌ على ' + (idx.none.length > 1 ? "الآيات " : "الآية ") + idx.none.map(rgDigits).join("، ") + '، ويُقال ذلك تحتها.</span></div>';
  }
  return h + '</div>';
}

/* ---------- the button ---------- */
function iitwToggleRaghib() {
  var s = window._openSurah && window._openSurah.n;
  var idx = iitwRaghibFor(s);
  if (!idx) return;
  var open = !window._rgOpen;
  window._rgOpen = open;
  var btn = document.getElementById("rqRgBtn");
  if (btn) {
    btn.classList.toggle("armed", open);
    btn.innerHTML = '<span class="en-only">📜 ' + (open ? "Hide Ar-Raghib" : "Ar-Raghib's explanation") + '</span>' +
      '<span class="ar-only" dir="rtl" style="font-family:\'Amiri\',serif;">📜 ' + (open ? "إخفاء تفسير الراغب" : "تفسير الراغب الأصفهاني") + '</span>';
  }
  if (!open) {
    document.querySelectorAll("#modalBody .rg-panel, #modalBody .rg-ayah").forEach(function (el) { el.hidden = true; });
    return;
  }
  var ready = document.getElementById("rgPanel");
  if (ready) {
    document.querySelectorAll("#modalBody .rg-panel, #modalBody .rg-ayah").forEach(function (el) { el.hidden = false; });
    if (window.applyI18n) window.applyI18n();
    iitwRevealPanel(ready);
    return;
  }
  rgRender(s, idx);
}

/* ---------- the notes, one part at a time ---------- */
function rgPartOf(idx, a) {
  var ps = (idx.notes && idx.notes.parts) || [];
  for (var i = 0; i < ps.length; i++) if (a >= ps[i][2] && a <= ps[i][3]) return ps[i];
  return null;
}

/* The notes on verse a — or null while its part has not arrived. */
function rgNotesFor(idx, a) {
  var p = rgPartOf(idx, a);
  var arr = p && window.RAGHIB && window.RAGHIB[p[0]];
  if (!arr) return null;
  return arr.filter(function (n) { return a >= n.a[0] && a <= n.a[1]; });
}

function rgRender(s, idx) {
  if (!window._openSurah || window._openSurah.n !== s || !window._rgOpen) return;
  var hasNotes = {};
  ((idx.notes && idx.notes.verses) || []).forEach(function (a) { hasNotes[a] = true; });
  var chunkOf = {};
  (idx.full || []).forEach(function (c) { c[2].forEach(function (a) { chunkOf[a] = c; }); });
  idx.chunkOf = chunkOf;
  var sm = rgSurah(s);
  var total = sm ? sm.verses : 0;
  var none = [];
  if (s <= 5) {
    for (var a = 1; a <= total; a++) if (!chunkOf[a] && !hasNotes[a]) none.push(a);
  }
  idx.none = none;

  var anchor = document.querySelector("#modalBody .mushaf-info");
  if (anchor) anchor.insertAdjacentHTML("afterend", rgPanelHtml(s, idx));
  for (var v = 1; v <= total; v++) {
    var block = document.getElementById("ayah-" + v);
    if (!block) continue;
    var isNone = none.indexOf(v) >= 0;
    if (!hasNotes[v] && !chunkOf[v] && !isNone) continue;
    var p = hasNotes[v] ? rgPartOf(idx, v) : null;
    block.insertAdjacentHTML("beforeend",
      rgVerseHtml(s, v, hasNotes[v] ? rgNotesFor(idx, v) : [], chunkOf[v], isNone, p && p[0]));
  }
  document.querySelectorAll("#modalBody .rg-panel, #modalBody .rg-ayah").forEach(function (el) { el.hidden = false; });
  if (window.applyI18n) window.applyI18n();
  iitwRevealPanel(document.getElementById("rgPanel"));
  rgWatchParts(s, idx);
}

/* Fetch a part when one of its verses comes within reach of the screen.
   The observer's root is the modal itself — it is the modal that scrolls —
   so the margin reaches ahead of what is on screen and a part is usually in
   before its verses are. */
var _rgObserver = null;
function rgWatchParts(s, idx) {
  if (_rgObserver) { _rgObserver.disconnect(); _rgObserver = null; }
  var waiting = document.querySelectorAll("#modalBody .rg-ayah[data-rg-part]");
  if (!waiting.length) return;
  if (!("IntersectionObserver" in window)) {         // old browsers: all of them, in order
    var names = [];
    waiting.forEach(function (el) {
      var n = el.getAttribute("data-rg-part");
      if (names.indexOf(n) < 0) names.push(n);
    });
    names.reduce(function (pr, n) {
      return pr.then(function () { return rgLoadPart(s, idx, n); });
    }, Promise.resolve());
    return;
  }
  var body = document.getElementById("modalBody");
  var scroller = (body && body.closest(".modal")) || null;
  _rgObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) rgLoadPart(s, idx, e.target.getAttribute("data-rg-part"));
    });
  }, { root: scroller, rootMargin: "2500px 0px" });
  waiting.forEach(function (el) { _rgObserver.observe(el); });
  /* …and the part the reader will reach first, now: the panel's own text
     stands between the top of the surah and verse 1, often further than the
     margin above reaches. */
  var edge = scroller ? scroller.getBoundingClientRect().top : 0;
  for (var i = 0; i < waiting.length; i++) {
    if (waiting[i].getBoundingClientRect().bottom > edge) {
      rgLoadPart(s, idx, waiting[i].getAttribute("data-rg-part"));
      break;
    }
  }
}

function rgLoadPart(s, idx, name) {
  var p = ((idx.notes && idx.notes.parts) || []).filter(function (x) { return x[0] === name; })[0];
  if (!p) return Promise.resolve();
  return rgLoad("js/raghib/" + name + ".js?h=" + p[1]).then(function () {
    rgFillPart(s, idx, name);
  }, function () {
    document.querySelectorAll('#modalBody .rg-ayah[data-rg-part="' + name + '"] .rg-wait').forEach(function (el) {
      el.innerHTML = '<button type="button" class="rg-retry" onclick="iitwRaghibRetry(\'' + name + '\')">' +
        '<span class="en-only">Could not load his notes — tap to try again</span>' +
        '<span class="ar-only" dir="rtl">تعذّر تحميل الشرح — اضغط لإعادة المحاولة</span></button>';
    });
    if (window.applyI18n) window.applyI18n();
  });
}

function iitwRaghibRetry(name) {
  var s = window._openSurah && window._openSurah.n;
  var idx = iitwRaghibFor(s);
  if (idx) rgLoadPart(s, idx, name);
}

/* Put a part's notes in place of its "loading" lines.
   A box that STARTS above the top of the modal would push everything the
   reader is looking at down by its growth — thousands of pixels, measured —
   so the modal is scrolled on by exactly that much: the box grows upward, out
   of sight. A box that starts on screen or below grows in place, so a verse
   jumped to shows its notes where its "loading" line was. The modal has
   `overflow-anchor: none` (style.css): with the browser's own anchoring on as
   well, Chrome would move it twice, and Safari has none, so this is the one
   mechanism, the same on every phone. */
function rgFillPart(s, idx, name) {
  if (!window._openSurah || window._openSurah.n !== s) return;
  var boxes = document.querySelectorAll('#modalBody .rg-ayah[data-rg-part="' + name + '"]');
  if (!boxes.length) return;
  var body = document.getElementById("modalBody");
  var scroller = body && body.closest(".modal");
  var edge = scroller ? scroller.getBoundingClientRect().top : 0;
  var was = [];
  boxes.forEach(function (el) {                    // measure all first: one layout
    var r = el.getBoundingClientRect();
    was.push({ el: el, above: !!scroller && r.top < edge, h: r.height });
  });
  /* Only the "loading" line is replaced — the box itself stays, so his full
     text, if the reader opened it while the notes were on their way, stays
     open (a box redrawn whole closed it under his eyes). */
  was.forEach(function (x) {
    var a = +x.el.getAttribute("data-rg");
    if (_rgObserver) _rgObserver.unobserve(x.el);
    x.el.removeAttribute("data-rg-part");
    var wait = x.el.querySelector(".rg-wait");
    if (wait) {
      wait.insertAdjacentHTML("afterend", (rgNotesFor(idx, a) || []).map(rgNoteHtml).join(""));
      wait.parentNode.removeChild(wait);
    }
    /* main.js puts every ﴿…﴾ into the Mushaf's font from a MutationObserver,
       i.e. AFTER this function — and the font changes the height. Do it now,
       so what is measured below is the final height (it was 20px out). */
    if (typeof iitwMarkQuran === "function") iitwMarkQuran(x.el);
  });
  if (window.applyI18n) window.applyI18n();
  var grew = 0;
  was.forEach(function (x) { if (x.above) grew += x.el.getBoundingClientRect().height - x.h; });
  if (grew) scroller.scrollTop += grew;
}

/* An instant jump, not a smooth one: on the way down a smooth scroll crosses
   parts that are still loading, and each one filled in behind it cut the
   scroll short (measured: the jump to 2:130 stopped 8,700px above it). */
function iitwJumpToRaghibVerse(n) {
  var el = document.getElementById("ayah-" + n);
  if (!el) return;
  var box = el.querySelector(".rg-ayah") || el;
  box.scrollIntoView({ behavior: "auto", block: "start" });
  el.classList.add("ayah-flash");
  setTimeout(function () { el.classList.remove("ayah-flash"); }, 2200);
}

/* ---------- everything he wrote on a verse ---------- */
function rgFullTextHtml(rec) {
  var t = rgEsc(rec.t);
  t = t.replace(/⟦(\d+):(\d+)⟧/g, function (_, v, p) {
    return '<span class="rg-pg" title="page ' + p + '">ج' + rgDigits(v) + ' ص' + rgDigits(p) + '</span>';
  });
  t = t.replace(/⟪([^⟫]+)⟫/g, function (_, r) {
    return '<span class="rg-qref">[' + rgRefParts(r).ar + ']</span>';
  });
  return t.split("\n").map(function (p) { return '<p dir="rtl">' + p + '</p>'; }).join("");
}

function iitwRaghibFull(btn, s, a) {
  var box = btn.nextElementSibling;
  if (!box) return;
  if (!box.hidden) {
    box.hidden = true;
    btn.classList.remove("armed");
    return;
  }
  var idx = iitwRaghibFor(s);
  var c = null;
  (idx && idx.full || []).forEach(function (x) { if (x[2].indexOf(a) >= 0) c = x; });
  if (!c) return;
  btn.classList.add("rg-busy");
  rgLoad("js/raghib/full/" + c[0] + ".js?h=" + c[1]).then(function () {
    var recs = (window.RAGHIB_FULL && window.RAGHIB_FULL[c[0]]) || [];
    var rec = recs.filter(function (r) { return r.a.indexOf(a) >= 0; })[0];
    if (!rec) return;
    var span = rec.a.length > 1
      ? '<span class="en-only"> — verses ' + rec.a[0] + '–' + rec.a[rec.a.length - 1] + ', which he explains together</span>' +
        '<span class="ar-only" dir="rtl"> — الآيات ' + rgDigits(rec.a[0]) + '–' + rgDigits(rec.a[rec.a.length - 1]) + '، شرحها معًا</span>'
      : "";
    var note = rec.note === "ar"
      ? '<p class="rg-full-note"><span class="en-only">He explains these two names under the Basmala, where they first come; this is that part of it.</span>' +
        '<span class="ar-only" dir="rtl">شرح هذين الاسمين في البسملة حيث وردا أول مرة، وهذا ذلك الموضع من كلامه.</span></p>'
      : "";
    box.innerHTML =
      '<div class="rg-full-head"><span class="en-only">Ar-Raghib\'s tafsir as the digitised edition has it (al-Maktaba al-Shamela, book 9231)' + span + '. Page tags mark where each printed page begins.</span>' +
      '<span class="ar-only" dir="rtl">نصّ تفسير الراغب كما في نسخته الرقمية على المكتبة الشاملة (الكتاب ٩٢٣١)' + span + '. وعلامات «ج… ص…» حيث تبدأ كل صفحة من الطبعة.</span></div>' +
      note +
      '<div class="rg-full-page"><span class="rg-pg">ج' + rgDigits(rec.v) + ' ص' + rgDigits(rec.p) + '</span>' +
        (rec.sid ? ' <a href="https://shamela.ws/book/9231/' + rec.sid + '" target="_blank" rel="noopener">' +
          '<span class="en-only">open this page in al-Maktaba al-Shamela ↗</span><span class="ar-only">افتح هذه الصفحة في المكتبة الشاملة ↗</span></a>' : "") +
      '</div>' +
      '<div class="rg-full-text" lang="ar">' + rgFullTextHtml(rec) + '</div>';
    box.hidden = false;
    btn.classList.add("armed");
    if (window.applyI18n) window.applyI18n();
  }).catch(function () {
    box.innerHTML = '<p><span class="en-only">Could not load the text. Check your connection and try again.</span>' +
      '<span class="ar-only" dir="rtl">تعذّر تحميل النصّ. تحقّق من الاتصال ثم أعد المحاولة.</span></p>';
    box.hidden = false;
    if (window.applyI18n) window.applyI18n();
  }).then(function () { btn.classList.remove("rg-busy"); });
}
