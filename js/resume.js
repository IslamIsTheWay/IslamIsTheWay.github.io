/* ============================================================
   أكمل من حيث توقّفت — CONTINUE WHERE YOU LEFT OFF
   ============================================================
   WHY. Everything on this site is something you come back to: a surah you
   were halfway through, a story you were reading, a section you were working
   through. Until now the home page opened the same way for a first visitor
   and for someone who had been reading for a month — and the only place that
   was remembered at all (the verse under 💾 in the reader) needed an account,
   which most people never make.

   So this remembers WITHOUT asking for anything: the last surah opened, the
   last story on screen, and the last section visited, on this device only.

   WHAT IT DOES NOT DO. No server, no identity, nothing leaves the browser —
   the same promise the sign-in box makes. If localStorage is unavailable (a
   private window, cleared site data) every read and write here fails quietly
   and the home page simply shows nothing extra, never a broken shell.

   THE SAVED PLACE STILL WINS. A reader who signed in and pressed 💾 chose
   that verse deliberately; it is shown first, and labelled as the saved one.
   ============================================================ */

(function () {
  "use strict";

  var KEY = "iitw-resume";
  var KEEP = 1000 * 60 * 60 * 24 * 60;      /* forget after two months */

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function write(o) {
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
  }

  /* Remember one kind of place. Later calls merge into the earlier one, so
     recording a verse after the surah does not lose the surah's name. */
  window.iitwResumeRemember = function (kind, data) {
    var o = read();
    var cur = (o[kind] && o[kind].id === data.id) ? o[kind] : {};
    o[kind] = Object.assign({}, cur, data, { at: Date.now() });
    write(o);
  };

  window.iitwResumeForget = function () { write({}); };

  /* The page this file is on, by its own name in the site's navigation —
     which i18n.js already knows how to translate, so no second dictionary. */
  function thisPage() {
    var here = location.pathname.split("/").pop() || "index.html";
    if (/^(index|login|staff|offline)\.html$/.test(here)) return null;
    var link = document.querySelector('.main-nav a[href="' + here + '"]');
    if (!link) return null;
    return { id: here, href: here, label: link.textContent.trim() };
  }

  function recordPage() {
    var p = thisPage();
    if (p) window.iitwResumeRemember("page", p);
  }

  /* On stories.html, the story that is actually on screen — checked as the
     reader scrolls, not when a link is clicked, because most people scroll.
     The cards are drawn by the page's own script, which may run after this
     one, so the watch is tried again a moment later if none are there yet. */
  function watchStories(tries) {
    var cards = document.querySelectorAll(".story-card[id]");
    if (!("IntersectionObserver" in window)) return;
    if (!cards.length) {
      if ((tries || 0) < 6) setTimeout(function () { watchStories((tries || 0) + 1); }, 500);
      return;
    }
    var last = "", timer = null;
    /* A story is far taller than a phone screen, so "40% of it is visible"
       never becomes true. What is wanted is the story the reader is IN: the
       root is squeezed to a band across the middle of the screen, and the
       card crossing that band is the one being read. */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, id = el.id;
        if (id === last) return;
        last = id;
        clearTimeout(timer);
        /* a second on screen, so scrolling past a story does not record it */
        timer = setTimeout(function () {
          /* The card carries the two titles as separate elements — the
             English one and the Arabic one. Taking "the first heading" would
             put the English title into the Arabic card, which is the oldest
             bug on this site. */
          var enT = el.querySelector(".story-title, h2.en-only, h3.en-only");
          var arT = el.querySelector(".story-title-ar, h2.ar-only, h3.ar-only");
          var enTxt = enT ? enT.textContent.trim() : "";
          var arTxt = arT ? arT.textContent.trim() : "";
          if (!enTxt && !arTxt) return;
          window.iitwResumeRemember("story", {
            id: id, href: "stories.html#" + id,
            label: enTxt || arTxt, labelAr: arTxt || enTxt
          });
        }, 1000);
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    cards.forEach(function (c) { io.observe(c); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    recordPage();
    watchStories();
    if (document.getElementById("resumeBox")) renderResume();
  });

  /* ---------- the card on the home page ---------- */

  function digits(n) { return typeof toArabicDigits === "function" ? toArabicDigits(n) : String(n); }

  function chip(icon, href, enTitle, arTitle, enSub, arSub, mark) {
    return '<a class="resume-chip' + (mark ? " resume-chip-saved" : "") + '" href="' + href + '">' +
      '<span class="resume-ico" aria-hidden="true">' + icon + '</span>' +
      '<span class="resume-txt">' +
        '<span class="resume-kind"><span class="en-only">' + enTitle + '</span>' +
        '<span class="ar-only" dir="rtl">' + arTitle + '</span></span>' +
        '<span class="resume-what"><span class="en-only">' + enSub + '</span>' +
        '<span class="resume-what-ar ar-only" dir="rtl">' + arSub + '</span></span>' +
      '</span><span class="resume-go" aria-hidden="true">›</span></a>';
  }

  function renderResume() {
    var box = document.getElementById("resumeBox");
    if (!box) return;
    var o = read(), out = [], now = Date.now();

    /* 1. the verse a signed-in reader saved on purpose */
    var place = (typeof iitwGetPlace === "function") ? iitwGetPlace() : null;
    if (place && place.surah) {
      out.push(chip("💾", "quran.html#surah-" + place.surah + "-" + place.ayah,
        "Your saved place", "موضعك المحفوظ",
        "Surah " + place.surahName + " — verse " + place.ayah,
        "سورة " + (place.surahArabic || place.surahName) + " — الآية " + digits(place.ayah), true));
    }

    /* 2. the last surah opened, whether signed in or not */
    var q = o.quran;
    if (q && now - q.at < KEEP && (!place || place.surah !== q.s)) {
      out.push(chip("📖", "quran.html#surah-" + q.s + (q.a ? "-" + q.a : ""),
        "Carry on reading", "أكمل القراءة",
        "Surah " + q.name + (q.a ? " — verse " + q.a : ""),
        "سورة " + (q.arabic || q.name) + (q.a ? " — الآية " + digits(q.a) : "")));
    }

    /* 3. the story that was last on screen */
    var st = o.story;
    if (st && now - st.at < KEEP) {
      out.push(chip("📜", st.href, "Back to the story", "عُد إلى القصة",
        st.label || "Stories", st.labelAr || st.label || "القصص"));
    }

    /* 4. and the section that was last open, if it is not one of the above */
    var pg = o.page;
    if (pg && now - pg.at < KEEP && pg.href !== "quran.html" && pg.href !== "stories.html") {
      /* The label is the site's own navigation wording, so i18n.js translates
         it with everything else — one dictionary, not two. */
      out.push(chip("📂", pg.href, "Where you were", "حيث كنت", pg.label, pg.label));
    }

    if (!out.length) { box.innerHTML = ""; box.hidden = true; return; }
    box.hidden = false;
    box.innerHTML =
      '<div class="resume-head">↩️ <span class="en-only">Continue where you left off</span>' +
      '<span class="ar-only" dir="rtl">أكمل من حيث توقّفت</span></div>' +
      '<div class="resume-row">' + out.slice(0, 3).join("") + '</div>';
    if (window.applyI18n) window.applyI18n();
  }

  window.iitwRenderResume = renderResume;
})();
