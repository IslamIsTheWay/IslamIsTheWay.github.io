/* ============================================================
   QURAN WORD SEARCH — البحث في كلمات القرآن
   ============================================================
   Type a word and get every verse it occurs in, in the Mushaf's
   own text, with a button that opens the surah at that verse.

   WHY IT IS HERE. The Quran page could already find a SURAH by
   name or number. But a reader almost always arrives with a word,
   not a number: "where does it say الصبر?", "which verse has
   orphans in it?" — and the whole text is already in the page
   (js/quran-text.js), so the answer needs no network call.

   THE RULES IT FOLLOWS, all of them learned from live bugs:

   1. NEVER A BARE SUBSTRING. Matching على inside فعلى, or ألم
      inside الألم, fills the list with verses that have nothing
      to do with the word. Every verse is split into words, and a
      word matches only as a whole word — after the attached
      prefixes (وبالـ, فالـ, كالـ …) and the attached pronouns
      (ـه, ـها, ـهم, ـكم, ـنا …) are allowed for.
   2. THE TEXT IS NEVER TYPED. Every verse shown is cut from
      QURAN_TEXT, the KFGQPC Hafs text the rest of the site uses.
   3. MARKS DO NOT COUNT. A reader types صبر, the Mushaf has
      ٱلصَّبۡرِ: both sides are stripped of every mark, and the
      spellings that differ only in a hamza or a final ya are
      folded together, before they are compared.
   4. ENGLISH TOO. A Latin query searches the translation instead,
      so "orphan" works as well as يتيم.
   ============================================================ */

(function () {
  "use strict";

  var MARKS = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g;
  var LIMIT = 120;                       // rows drawn; the count line says how many there are

  function norm(s) {
    return String(s)
      /* The dagger alef is an ALEF, not a mark: the Mushaf writes ٱلۡيَتَٰمَىٰ
         with it, and deleting it leaves اليتمى, which no reader would type. */
      .replace(/ٰ/g, "ا")
      .replace(MARKS, "")
      .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
      .replace(/ؤ/g, "و").replace(/ئ/g, "ي").replace(/ء/g, "")
      .replace(/[^ء-ي\s]/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  /* THE LAST RESORT, when nothing matches as written. The Mushaf's spelling
     is not the spelling people type: ٱلصَّلَوٰةَ is الصلواة once the marks are
     off, and nobody types that; ٱلرَّحۡمَٰنِ is الرحمان. Dropping the three
     weak letters ا و ي from both sides makes الصلاة and الصلواة, الرحمن and
     الرحمان, the same word — and it is used ONLY when the strict search has
     found nothing, and only for words of three letters or more, so it can
     never crowd out a real result. */
  function skel(w) { return w.replace(/[اوي]/g, ""); }

  /* The prefixes that stick to the front of an Arabic word, longest first,
     and the pronouns and endings that stick to the back. A word counts as
     the searched word if what is left after peeling these is exactly it. */
  var PRE = ["وبال", "فبال", "كال", "بال", "وال", "فال", "لل", "ال", "و", "ف", "ب", "ك", "ل", "س"];
  var SUF = ["هما", "كما", "هن", "هم", "ها", "كم", "نا", "ون", "ين", "ان", "ات", "تم", "ه", "ك", "ي", "ا", "ت", "ن"];

  function endMatch(w, q) {
    if (w === q) return true;
    if (w.indexOf(q) !== 0) return false;
    var rest = w.slice(q.length);
    if (!rest) return true;
    for (var i = 0; i < SUF.length; i++) if (rest === SUF[i]) return true;
    return false;
  }
  function wordMatches(w, q) {
    if (w === q) return true;
    for (var i = 0; i < PRE.length; i++) {
      if (w.length > PRE[i].length && w.indexOf(PRE[i]) === 0) {
        var base = w.slice(PRE[i].length);
        if (base === q || endMatch(base, q)) return true;
      }
    }
    return endMatch(w, q);
  }

  var IDX = null;
  function index() {
    if (IDX) return IDX;
    IDX = [];
    if (typeof QURAN_TEXT === "undefined") return IDX;
    for (var s = 1; s <= 114; s++) {
      var rec = QURAN_TEXT[String(s)];
      if (!rec || !rec.a) continue;
      for (var i = 0; i < rec.a.length; i++) {
        var ws = norm(rec.a[i]).split(" ");
        IDX.push({ s: s, a: i + 1, t: rec.a[i], w: ws, k: ws.map(skel),
                   e: (rec.e && rec.e[i]) || "" });
      }
    }
    return IDX;
  }

  function surahOf(n) {
    return (typeof SURAHS !== "undefined" && SURAHS[n - 1]) || { name: String(n), arabic: String(n) };
  }
  function digits(n) {
    return typeof toArabicDigits === "function" ? toArabicDigits(n) : String(n);
  }

  function rowHtml(v) {
    var sm = surahOf(v.s);
    return '<div class="qs-row">' +
      '<div class="qs-ref"><span class="en-only">' + sm.name + ' — <strong>' + v.s + ':' + v.a + '</strong></span>' +
      '<span class="ar-only" dir="rtl">سورة ' + (sm.arabic || sm.name) + ' — <strong>' + digits(v.s) + ':' + digits(v.a) + '</strong></span>' +
      '<button type="button" class="qs-open" onclick="iitwOpenAt(' + v.s + ',' + v.a + ')">' +
      '<span class="en-only">Open ↗</span><span class="ar-only" dir="rtl">افتح ↗</span></button></div>' +
      '<div class="qs-verse q-hafs" dir="rtl" lang="ar">' + v.t + '</div>' +
      '<div class="qs-en en-only">' + v.e + '</div>' +
      '</div>';
  }

  /* Open the surah in the reader and put the verse at the top of it. The
     reader draws asynchronously, so the verse is waited for rather than
     assumed; after four seconds the surah is simply left open at the top. */
  window.iitwOpenAt = function (s, a) {
    if (typeof openSurah !== "function" || typeof SURAHS === "undefined") return;
    openSurah(SURAHS[s - 1]);
    var tries = 0;
    var t = setInterval(function () {
      var el = document.getElementById("ayah-" + a);
      if (el) {
        clearInterval(t);
        el.scrollIntoView({ behavior: "auto", block: "start" });
        el.classList.add("qs-hit");
        setTimeout(function () { el.classList.remove("qs-hit"); }, 2500);
      } else if (++tries > 40) {
        clearInterval(t);
      }
    }, 100);
  };

  /* Words the digitised Mushaf spells short: searching for what a reader
     types would otherwise find nothing at all. Same list the notes builder
     keeps (scratchpad qquote.py), for the same reason. */
  var VARIANTS = [["براهيم", "براهم"], ["يحيي", "يحي"], ["داوود", "داود"],
                  ["الليل", "اليل"], ["يستحيي", "يستحي"], ["يين", "ين"]];

  function arabicHits(all, q, phrase) {
    var out = [];
    for (var i = 0; i < all.length; i++) {
      var v = all[i], ok = false;
      if (phrase) {
        ok = v.w.join(" ").indexOf(q) >= 0;          /* a phrase: as written, in order */
      } else {
        for (var k = 0; k < v.w.length; k++) if (wordMatches(v.w[k], q)) { ok = true; break; }
      }
      if (ok) out.push(v);
    }
    return out;
  }

  function looseHits(all, q) {
    var qk = skel(q), out = [];
    if (qk.length < 3) return out;
    for (var i = 0; i < all.length; i++) {
      var v = all[i];
      for (var k = 0; k < v.k.length; k++) {
        var w = v.k[k], full = v.w[k];
        /* The skeleton alone is too generous — الربا and لرب both come down
           to لرب. The two words must also START the same and be about as
           long, which is what keeps the last resort from inventing hits. */
        if (w === qk && full.slice(0, 2) === q.slice(0, 2) && Math.abs(full.length - q.length) <= 2) { out.push(v); break; }
        for (var j = 0; j < PRE.length; j++) {
          var pk = skel(PRE[j]), rest = full.slice(PRE[j].length);
          if (pk && w.length > pk.length && w.indexOf(pk) === 0 && w.slice(pk.length) === qk &&
              full.indexOf(PRE[j]) === 0 && rest.slice(0, 2) === q.slice(0, 2) && Math.abs(rest.length - q.length) <= 2) {
            out.push(v); k = v.k.length; break;
          }
        }
      }
    }
    return out;
  }

  window.iitwQuranWordSearch = function () {
    var box = document.getElementById("qWordResults");
    var inp = document.getElementById("qWordSearch");
    if (!box || !inp) return;
    var raw = inp.value.trim();
    if (raw.length < 2) {
      box.innerHTML = '<div class="qs-note"><span class="en-only">Type at least two letters.</span>' +
        '<span class="ar-only" dir="rtl">اكتب حرفين على الأقلّ.</span></div>';
      if (window.applyI18n) window.applyI18n();
      return;
    }
    var hits = [], all = index(), i;
    if (/[A-Za-z]/.test(raw)) {
      /* English: whole words of the translation, no regex built from what the
         reader typed — an unescaped bracket or star would throw. */
      var qw = raw.toLowerCase();
      for (i = 0; i < all.length; i++) {
        var ew = all[i].e.toLowerCase().split(/[^a-z0-9']+/);
        for (var m = 0; m < ew.length; m++) {
          if (ew[m] === qw || (ew[m].length > qw.length && ew[m].indexOf(qw) === 0)) { hits.push(all[i]); break; }
        }
      }
    } else {
      var q = norm(raw), qs = q.split(" ");
      hits = arabicHits(all, q, qs.length > 1);
      /* A few words the Mushaf writes shorter than anyone types them —
         إِبۡرَٰهِـۧمَ is ابراهم once the marks are off, not ابراهيم. The word is
         searched as typed first; the short spelling is tried only if that
         finds nothing, so it can never crowd out a real result. */
      if (!hits.length) {
        for (i = 0; i < VARIANTS.length && !hits.length; i++) {
          if (q.indexOf(VARIANTS[i][0]) < 0) continue;
          var q2 = q.split(VARIANTS[i][0]).join(VARIANTS[i][1]);
          hits = arabicHits(all, q2, qs.length > 1);
        }
      }
      if (!hits.length && qs.length === 1) hits = looseHits(all, q);
    }
    if (!hits.length) {
      box.innerHTML = '<div class="qs-note"><span class="en-only">No verse has that word. Try another spelling, or a shorter word.</span>' +
        '<span class="ar-only" dir="rtl">لا توجد آيةٌ فيها هذه الكلمة. جرّب صيغةً أخرى أو كلمةً أقصر.</span></div>';
      if (window.applyI18n) window.applyI18n();
      return;
    }
    var shown = hits.slice(0, LIMIT);
    var head = '<div class="qs-count"><span class="en-only"><strong>' + hits.length + '</strong> verse' + (hits.length === 1 ? "" : "s") +
      (hits.length > LIMIT ? " — the first " + LIMIT + " are shown" : "") + '</span>' +
      '<span class="ar-only" dir="rtl"><strong>' + digits(hits.length) + '</strong> آية' +
      (hits.length > LIMIT ? " — هذه أوّل " + digits(LIMIT) + " منها" : "") + '</span></div>';
    box.innerHTML = head + shown.map(rowHtml).join("");
    if (window.applyI18n) window.applyI18n();
    if (window.iitwMarkQuran) window.iitwMarkQuran(box);
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && document.activeElement && document.activeElement.id === "qWordSearch") {
      e.preventDefault();
      window.iitwQuranWordSearch();
    }
  });
})();
