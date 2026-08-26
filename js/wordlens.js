/* ============================================================
   WORD LENS — معجم اللمس
   Select any Arabic word anywhere on the site and get its
   meaning in ordinary modern Arabic and in English.
   ============================================================
   WHY. The owner has raised the same complaint three times: a
   reader should not have to stop, think for an hour, or go and
   look a word up. The site already explains a great many words —
   AR_GLOSSARY (65), TERMS (59), and the per-verse `words` entries
   in the tadabbur with their Al-Mufradat citations — but each is
   explained ONLY inside the section that happens to gloss it. The
   same word is a mystery two pages away.

   So this gathers whatever word data the current page has loaded
   into one index and makes it reachable from anywhere.

   HOW IT IS TRIGGERED, and why not a click. Selecting a word is
   the one gesture that already means "this word" on both a
   desktop and a phone: double-click selects a word, and so does
   a long press. So the lens listens for a SELECTION rather than
   a click. Nothing in the DOM is modified, no word is wrapped in
   a span, and normal reading, copying and links are untouched —
   which also means i18n.js can still walk the text nodes it
   translates, and a wrapper would have broken that.

   FOUR RULES.

   1. WHOLE WORDS, AFTER STRIPPING THE ATTACHED PREFIXES. Never a
      substring. That trap has produced four separate live bugs on
      this site — ولي inside وليس, عينة inside بعينه, ألم inside
      بالمولد, and كلّ inside الكَلّ.

   2. NOTHING IS INVENTED. If a word is not in the data, the lens
      says it has no entry yet. It does not guess a meaning, and
      it does not machine-translate.

   3. THE SOURCE TRAVELS WITH THE MEANING. Where the data carries
      one — Al-Mufradat with its page, or the term's own section —
      it is shown, because that is this site's whole discipline.

   4. NO LOOK-BEHIND ANYWHERE. It breaks older Safari at parse
      time and would take the whole file down with it.
   ============================================================ */

(function () {
  "use strict";

  var HARAKAT = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g;
  var ARABIC = /[ء-ي]/;

  /* The prefixes Arabic glues to the front of a word. Longest first, so
     بال is tried before ب and the definite article is never half-stripped. */
  var PREFIXES = ["وبال", "فبال", "بال", "وال", "فال", "كال", "لل",
                  "ال", "و", "ف", "ب", "ل", "ك", "س"];

  /* The alef is written five ways and the site's own data uses several of
     them: the tadabbur word studies are copied out of the Uthmani text, so
     they open with alef wasla (ٱ), which sits OUTSIDE the plain letter range
     and was being deleted rather than folded — every one of those entries
     was unreachable. Fold every variant before filtering. */
  function bare(w) {
    return String(w || "")
      .normalize("NFC")
      .replace(HARAKAT, "")
      .replace(/[ٱآأإ]/g, "ا")   // ٱ آ أ إ  ->  ا
      .replace(/ى/g, "ي")                          // ى  ->  ي
      .replace(/ة/g, "ه")                          // ة  ->  ه
      .replace(/[^ء-ي]/g, "");
  }

  /* A LOOSER key, with the long vowels dropped as well. The Uthmani script
     writes the long a four different ways and the site's data mixes them:
     صِرَٰط carries a superscript alef, which is a MARK and is stripped, so
     its key is صرط while a reader types الصراط and asks for صراط. Folding
     the superscript alef to a letter instead is not the answer either — it
     would then break رَحْمَٰن, whose key matches today precisely because the
     mark is dropped on both sides. So the loose key drops every weak letter
     from BOTH sides and is used only as a fallback after the exact key. */
  function loose(w) {
    return bare(w).replace(/[اوي]/g, "");
  }

  /* Every reading of a word worth trying: as typed, and with each prefix
     removed. Returned longest-first so the most specific entry wins. */
  function forms(w) {
    var b = bare(w), out = [b], i, p;
    for (i = 0; i < PREFIXES.length; i++) {
      p = PREFIXES[i];
      if (b.length > p.length + 2 && b.indexOf(p) === 0) out.push(b.slice(p.length));
    }
    return out;
  }

  /* ---------------- the index, built from whatever is loaded -------------- */

  var INDEX = null;
  var LOOSE = null;

  function add(map, key, entry) {
    var k = bare(key);
    if (k.length < 2) return;
    if (!map[k]) map[k] = entry;
    /* Index the loose form of the word AND of each prefix-stripped reading,
       so الصراط and صراط both reach an entry stored as ٱلصِّرَٰط. */
    forms(key).forEach(function (f) {
      var l = f.replace(/[اوي]/g, "");
      if (l.length >= 3 && !LOOSE[l]) LOOSE[l] = entry;
    });
  }

  function buildIndex() {
    var map = {};
    LOOSE = {};
    /* The glossary of classical words used in the stories and the hadith. */
    if (typeof AR_GLOSSARY !== "undefined") {
      Object.keys(AR_GLOSSARY).forEach(function (k) {
        var g = AR_GLOSSARY[k];
        add(map, k, { ar: g.ar, en: g.en, from: "glossary" });
      });
    }
    /* The technical terms explained on the Guidance page. */
    if (typeof TERMS !== "undefined") {
      TERMS.forEach(function (t) {
        if (!t.ar) return;
        add(map, t.ar, { ar: t.defAr, en: t.def, term: t.en,
                         from: "terms", where: "guidance.html" });
      });
    }
    /* The per-verse word studies in the tadabbur, which carry a source —
       usually Ar-Raghib's Al-Mufradat, sometimes with its page. */
    if (typeof TADABBUR !== "undefined") {
      Object.keys(TADABBUR).forEach(function (s) {
        var sur = TADABBUR[s];
        if (!sur || !sur.ayat) return;
        sur.ayat.forEach(function (a) {
          (a.words || []).forEach(function (w) {
            if (!w.w) return;
            add(map, w.w, { ar: w.meaningAr, en: w.meaning, translit: w.t,
                            source: w.source, from: "tadabbur",
                            where: "quran.html" });
          });
        });
      });
    }
    return map;
  }

  function lookup(word) {
    if (!INDEX) INDEX = buildIndex();
    var f = forms(word), i, l;
    for (i = 0; i < f.length; i++) {
      if (INDEX[f[i]]) return { key: f[i], entry: INDEX[f[i]] };
    }
    /* fallback: the same word with the long vowels dropped on both sides */
    for (i = 0; i < f.length; i++) {
      l = f[i].replace(/[اوي]/g, "");
      if (l.length >= 3 && LOOSE[l]) return { key: f[i], entry: LOOSE[l] };
    }
    return null;
  }

  /* How often the word's exact form occurs in the Quran. Only offered where
     the whole text is on the page (the Quran page ships it); everywhere else
     the line is simply omitted rather than guessed at. */
  function quranCount(key) {
    if (typeof QURAN_TEXT === "undefined" || key.length < 3) return null;
    var n = 0, keys = Object.keys(QURAN_TEXT), i, j, arr;
    for (i = 0; i < keys.length; i++) {
      arr = QURAN_TEXT[keys[i]].a;
      for (j = 0; j < arr.length; j++) {
        if (bare(arr[j]).indexOf(key) >= 0) n++;
      }
    }
    return n;
  }

  /* ------------------------------- the panel ----------------------------- */

  var panel = null;

  function isAr() {
    return document.documentElement.classList.contains("lang-ar");
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function close() {
    if (panel) { panel.remove(); panel = null; }
  }

  function show(word, found, x, y) {
    close();
    panel = document.createElement("div");
    panel.className = "wl-pop";
    panel.setAttribute("dir", "rtl");

    var html = '<button class="wl-x" aria-label="close">×</button>' +
               '<div class="wl-word">' + esc(word) + "</div>";

    if (!found) {
      html += '<div class="wl-none">' +
        (isAr() ? "لا يوجد شرحٌ لهذه الكلمة بعدُ في الموقع."
                : "There is no entry for this word yet.") +
        "</div>";
    } else {
      var e = found.entry;
      if (e.translit) html += '<div class="wl-translit">' + esc(e.translit) + "</div>";
      if (e.ar) html += '<div class="wl-ar">' + esc(e.ar) + "</div>";
      if (e.en) html += '<div class="wl-en" dir="ltr">' + esc(e.en) + "</div>";
      if (e.source) html += '<div class="wl-src">' + esc(e.source) + "</div>";
      var qc = quranCount(found.key);
      if (qc !== null && qc > 0) {
        html += '<div class="wl-quran">' + (isAr()
          ? "ويردُ هذا اللفظ في القرآن في نحو " + qc + " موضعًا"
          : "This wording occurs in about " + qc + " places in the Quran") + "</div>";
      }
      if (e.where) {
        html += '<a class="wl-go" href="' + e.where + '">' +
          (isAr() ? "انظر موضعه" : "See it in context") + "</a>";
      }
    }
    panel.innerHTML = html;
    document.body.appendChild(panel);

    /* Keep it on screen: it is placed near the selection, then pulled back
       inside the viewport rather than being allowed to overflow, which in
       RTL would push the page sideways. */
    var r = panel.getBoundingClientRect();
    var left = Math.min(Math.max(8, x - r.width / 2),
                        document.documentElement.clientWidth - r.width - 8);
    var top = y + 14;
    if (top + r.height > window.innerHeight - 8) top = Math.max(8, y - r.height - 14);
    panel.style.left = left + "px";
    panel.style.top = (top + window.scrollY) + "px";

    panel.querySelector(".wl-x").addEventListener("click", close);
  }

  /* ------------------------------ the trigger ---------------------------- */

  function onSelect() {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    var raw = String(sel.toString() || "").trim();
    /* One word. A phrase is a normal copy action and must not be hijacked. */
    if (!raw || raw.split(/\s+/).length > 1) return;
    if (!ARABIC.test(raw)) return;
    if (bare(raw).length < 2) return;
    var rect;
    try { rect = sel.getRangeAt(0).getBoundingClientRect(); } catch (e) { return; }
    show(raw, lookup(raw), rect.left + rect.width / 2, rect.bottom);
  }

  document.addEventListener("mouseup", function () { setTimeout(onSelect, 10); });
  document.addEventListener("touchend", function () { setTimeout(onSelect, 60); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.addEventListener("mousedown", function (e) {
    if (panel && !panel.contains(e.target)) close();
  });

  window.iitwWordLens = { lookup: lookup, close: close };
})();
