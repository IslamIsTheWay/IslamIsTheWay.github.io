/* ============================================================
   SHARE A VERSE AS AN IMAGE — شارك الآية صورة
   ============================================================
   One tap turns a verse, its reference and its plain sentence into a picture
   sized for WhatsApp and Instagram (1080 x 1350), and hands it to the phone's
   own share sheet. Where a browser cannot share files it is downloaded.

   Religious content travels by being forwarded, and the plain sentences on
   this site are short enough to be read on a phone screen in one look. The
   picture carries the address of the verse's own page, so whoever receives it
   can read the whole explanation and check the reference.

   THREE RULES.
   1. THE VERSE IS NEVER CUT SHORT. If it does not fit at the smallest size
      the card allows, the card carries the reference and the plain sentence
      and says where to read the verse — it never prints part of a verse as if
      it were the whole.
   2. The verse is drawn in the Mushaf's own font (KFGQPC Hafs), and the card
      waits for the font to load: drawn in a fallback face for even one frame
      it would carry the wrong marks.
   3. The sentence is in the reader's language — Arabic on the Arabic site,
      English on the English one.

   Used by: the verses at the top of index.html, every verse page
   (verse/*.html), and the explanations in the Quran reader. Any element with
   class "share-verse" and the data attributes below gets the behaviour:
     data-surah, data-ayah      which verse (for the file name and the link)
     data-ref, data-ref-ar      the reference, in each language
     data-plain, data-plain-ar  the plain sentence, in each language
   and the verse itself is read from data-verse, or from the element named by
   data-verse-from (a CSS selector), so the Arabic is never retyped here.
------------------------------------------------------------- */
(function () {
  "use strict";

  var W = 1080, H = 1350;
  var SITE = "islamistheway.github.io";

  function isArabicUI() {
    try { return localStorage.getItem("iitw-lang") === "ar"; }
    catch (e) { return document.documentElement.classList.contains("lang-ar"); }
  }

  /* Break text into lines that fit `max` pixels at the context's current
     font. Words are never split. */
  function wrap(ctx, text, max) {
    var words = String(text || "").split(/\s+/).filter(Boolean);
    var lines = [], line = "";
    for (var i = 0; i < words.length; i++) {
      var test = line ? line + " " + words[i] : words[i];
      if (ctx.measureText(test).width <= max || !line) { line = test; }
      else { lines.push(line); line = words[i]; }
    }
    if (line) lines.push(line);
    return lines;
  }

  function fontsReady() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all([
      document.fonts.load('60px "KFGQPC Hafs"'),
      document.fonts.load("40px Amiri"),
      document.fonts.load("600 34px Poppins")
    ]).catch(function () {});
  }

  /* Draw the card. Returns a Promise of a PNG Blob. */
  function draw(d) {
    return fontsReady().then(function () {
      var c = document.createElement("canvas");
      c.width = W; c.height = H;
      var ctx = c.getContext("2d");
      var ar = d.lang === "ar";

      // background and frame
      ctx.fillStyle = "#fbf8ef";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#1e5e3a";
      ctx.fillRect(0, 0, W, 150);
      ctx.strokeStyle = "#c9a227";
      ctx.lineWidth = 6;
      ctx.strokeRect(36, 186, W - 72, H - 186 - 150);

      // site name in the band
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.direction = "ltr";
      ctx.font = "600 44px Poppins, Arial, sans-serif";
      ctx.fillText("IslamBasics", W / 2, 75);

      var maxW = W - 180;
      var FRAME_TOP = 226, FRAME_BOTTOM = H - 150 - 40;     // inside the gold frame
      var DIV = 56;                                         // room the divider takes

      /* ---- 1. MEASURE everything first, so the block can be centred in the
         frame instead of hanging from the top with empty space below. */
      var blocks = [];
      function height(b) { return b.lines.length * b.lh + b.gap + (b.divider ? DIV : 0); }

      // the verse — whole, or not at all (rule 1)
      if (d.verse) {
        var vb = null;
        for (var size = 66; size >= 38; size -= 4) {
          ctx.font = size + 'px "KFGQPC Hafs", serif';
          ctx.direction = "rtl";
          var lines = wrap(ctx, "﴿" + d.verse + "﴾", maxW);
          var lh = Math.round(size * 1.95);
          if (lines.length * lh <= 610) {
            vb = { font: ctx.font, color: "#123d27", dir: "rtl", lines: lines, lh: lh, gap: 18 };
            break;
          }
        }
        if (!vb) {
          ctx.font = "42px Amiri, serif";
          ctx.direction = ar ? "rtl" : "ltr";
          var note = ar ? "الآية أطول من أن تُكتب هنا كاملة — اقرأها وشرحها على الرابط في الأسفل"
                        : "This verse is too long to print here in full — read it and its explanation at the link below";
          vb = { font: ctx.font, color: "#5b6b62", dir: ctx.direction, lines: wrap(ctx, note, maxW), lh: 64, gap: 18 };
        }
        blocks.push(vb);
      }

      // the reference, with the divider under it
      blocks.push({ font: ar ? "bold 38px Amiri, serif" : "600 32px Poppins, Arial, sans-serif",
                    color: "#8a6d1d", dir: ar ? "rtl" : "ltr",
                    lines: [ar ? d.refAr : d.ref], lh: 56, gap: 6, divider: true });

      // the plain sentence (rule 3), shrunk to fit what is left. It is the
      // site's own sentence, so at the smallest size it may be shortened with
      // an ellipsis — the one thing on the card that may be.
      var room = FRAME_BOTTOM - FRAME_TOP - blocks.reduce(function (t, b) { return t + height(b); }, 0);
      var plain = ar ? d.plainAr : d.plain;
      if (plain) {
        for (var ps = ar ? 46 : 38; ps >= 26; ps -= 2) {
          ctx.font = ar ? ps + "px Amiri, serif" : ps + "px Poppins, Arial, sans-serif";
          ctx.direction = ar ? "rtl" : "ltr";
          var pl = wrap(ctx, plain, maxW);
          var plh = Math.round(ps * (ar ? 1.9 : 1.6));
          var fits = Math.floor(room / plh);
          if (pl.length <= fits || ps === 26) {
            if (pl.length > fits && fits > 0) {
              pl = pl.slice(0, fits);
              pl[fits - 1] = pl[fits - 1].replace(/\s*\S+$/, "") + " …";
            }
            blocks.push({ font: ctx.font, color: "#24332b", dir: ctx.direction, lines: pl, lh: plh, gap: 0 });
            break;
          }
        }
      }

      // ---- 2. CENTRE the whole block inside the frame, and draw it
      var total = blocks.reduce(function (t, b) { return t + height(b); }, 0);
      var y = FRAME_TOP + Math.max(0, Math.round((FRAME_BOTTOM - FRAME_TOP - total) / 2));
      blocks.forEach(function (b) {
        ctx.font = b.font; ctx.fillStyle = b.color; ctx.direction = b.dir;
        b.lines.forEach(function (l) { ctx.fillText(l, W / 2, y + b.lh / 2); y += b.lh; });
        y += b.gap;
        if (b.divider) {
          ctx.strokeStyle = "#d8cfb4"; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(W / 2 - 120, y + DIV / 2); ctx.lineTo(W / 2 + 120, y + DIV / 2); ctx.stroke();
          y += DIV;
        }
      });

      // the address of the full explanation
      ctx.direction = "ltr";
      ctx.fillStyle = "#1e5e3a";
      ctx.fillRect(0, H - 150, W, 150);
      ctx.fillStyle = "#ffffff";
      ctx.font = "500 34px Poppins, Arial, sans-serif";
      ctx.fillText(SITE + "/verse/" + d.surah + "-" + d.ayah + ".html", W / 2, H - 75);

      return new Promise(function (res) { c.toBlob(res, "image/png"); });
    });
  }

  function verseText(el) {
    if (el.getAttribute("data-verse")) return el.getAttribute("data-verse");
    var sel = el.getAttribute("data-verse-from");
    if (!sel) return "";
    var src = document.querySelector(sel);
    // the text of the verse only: the ornamental brackets are drawn by the card
    return src ? src.textContent.replace(/[﴾﴿]/g, "").trim() : "";
  }

  function dataOf(el) {
    return {
      surah: el.getAttribute("data-surah"),
      ayah: el.getAttribute("data-ayah"),
      verse: verseText(el),
      ref: el.getAttribute("data-ref") || "",
      refAr: el.getAttribute("data-ref-ar") || "",
      plain: el.getAttribute("data-plain") || "",
      plainAr: el.getAttribute("data-plain-ar") || "",
      lang: isArabicUI() ? "ar" : "en"
    };
  }

  function download(blob, name) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  /* Hand the picture to the phone's share sheet, or save it. A browser that
     REFUSES to share (iPhone Safari does when too long has passed since the
     tap) gets the file saved instead; a reader who closes the sheet gets
     nothing, which is what closing it means. */
  function deliver(blob, d) {
    var name = "verse-" + d.surah + "-" + d.ayah + ".png";
    var url = "https://" + SITE + "/verse/" + d.surah + "-" + d.ayah + ".html";
    var file = null;
    try { file = new File([blob], name, { type: "image/png" }); } catch (e) {}
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      return navigator.share({ files: [file], text: url }).catch(function (err) {
        if (err && err.name === "AbortError") return;
        download(blob, name);
      });
    }
    download(blob, name);
  }

  /* THE CARD IS DRAWN BEFORE THE TAP. iPhone Safari only lets a page open the
     share sheet for about a second after the tap; drawing a 1080 x 1350 card
     and waiting for its fonts can take longer than that on a phone, and the
     sheet would then be refused. So each button's card is drawn while the
     page is idle, once the button is on screen, and the tap only hands it
     over. A tap that arrives first still works: it waits for the drawing. */
  var ready = new WeakMap();
  function prepare(el) {
    var lang = isArabicUI() ? "ar" : "en";
    var r = ready.get(el);
    if (r && r.lang === lang) return r;
    r = { lang: lang, blob: null };
    r.promise = draw(dataOf(el)).then(function (b) { r.blob = b; return b; });
    ready.set(el, r);
    return r;
  }
  function later(fn) {
    if (window.requestIdleCallback) requestIdleCallback(fn, { timeout: 3000 });
    else setTimeout(fn, 1500);
  }
  function watch() {
    var buttons = document.querySelectorAll(".share-verse");
    if (!buttons.length) return;
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        later(function () { prepare(e.target); });
      });
    });
    buttons.forEach(function (b) { io.observe(b); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", watch);
  else watch();
  // the reader switched language: the cards already drawn are in the other one
  document.addEventListener("iitw-lang", function () { ready = new WeakMap(); });
  document.addEventListener("pointerdown", function (e) {
    var el = e.target.closest && e.target.closest(".share-verse");
    if (el) prepare(el);
  }, { passive: true });

  function share(el) {
    var d = dataOf(el);
    var r = prepare(el);
    if (r.blob) { deliver(r.blob, d); return; }        // inside the tap, as Safari requires
    el.setAttribute("aria-busy", "true");
    r.promise.then(function (blob) {
      el.removeAttribute("aria-busy");
      if (blob) deliver(blob, d);
    }).catch(function () { el.removeAttribute("aria-busy"); });
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest(".share-verse");
    if (!el) return;
    e.preventDefault();
    share(el);
  });

  // for the tests, and for a page that builds its own button
  window.iitwShareCard = draw;
})();
