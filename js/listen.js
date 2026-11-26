/* ============================================
   IslamBasics — hear the verse, on a verse page and on the home page
   ============================================
   Most readers now arrive on a verse page from a search — 53 of the first
   76 visits counted by the new counter (20-25 November 2026) — and the page
   gave them the verse, the plain sentence and the explanation, but no way to
   HEAR it. This plays it from everyayah.com, in the reciter the reader chose:
   the same setting as the Quran reader (RECITER_KEY, js/reciters.js), so a
   choice made in one place holds in the other.

   The markup (written by tools/build-verse-pages.py; by hand on index.html):
     <div class="vp-listen" data-surah="2" data-ayah="255" [data-to="256"]>
       <button type="button" class="vp-listen-btn">…</button>
       <label class="vp-reciter">… <select class="vp-reciter-pick"></select></label>
       <p class="vp-listen-msg" role="status"></p>
     </div>
   data-to plays a run of verses one after another (the home page's 59:19–20).

   Two rules from the reader, kept here:
     * ONE audio element, reused. iOS Safari starts sound only from a tap; a
       new element started from the previous verse's "ended" is not a tap,
       and the second verse would never play. Changing the src of an element
       the reader already started is allowed.
     * A recitation that cannot play SAYS so — offline, or everyayah.com
       down — instead of a button that does nothing.
   And nothing is downloaded until the button is pressed. */
(function () {
  if (typeof RECITERS === "undefined" || typeof ayahAudioUrl !== "function") return;

  const boxes = document.querySelectorAll(".vp-listen");
  if (!boxes.length) return;

  function arabic() {
    try { return localStorage.getItem("iitw-lang") === "ar"; } catch (e) { return false; }
  }

  // the button's words, in both languages; CSS shows the reader's
  function label(btn, playing) {
    btn.innerHTML = playing
      ? '<span aria-hidden="true">■</span> <span class="en-only">Stop</span><span class="ar-only" dir="rtl">إيقاف</span>'
      : '<span aria-hidden="true">▶</span> <span class="en-only">Listen</span><span class="ar-only" dir="rtl">استمع</span>';
    btn.setAttribute("aria-pressed", playing ? "true" : "false");
  }

  function say(box, en, ar) {
    const msg = box.querySelector(".vp-listen-msg");
    if (!msg) return;
    if (!en) { msg.textContent = ""; msg.hidden = true; return; }
    if (typeof iitwSay === "function") iitwSay(msg, en, ar);
    else msg.textContent = arabic() ? ar : en;
    msg.hidden = false;
  }

  /* The reciter list, in the reader's language. An <option> cannot hold two
     spans, so it is rebuilt when the language changes ("iitw-lang"). */
  function fillPick(sel) {
    const now = getReciter();
    const ar = arabic();
    sel.innerHTML = "";
    RECITERS.forEach(r => {
      const o = document.createElement("option");
      o.value = r.id;
      o.textContent = ar ? r.ar : r.name;
      if (r.id === now) o.selected = true;
      sel.appendChild(o);
    });
    sel.setAttribute("aria-label", ar ? "القارئ" : "Reciter");
  }

  let el = null;          // the one audio element
  let playing = null;     // { box, verses, i }

  function audio() {
    if (!el) {
      el = new Audio();
      el.preload = "none";
      el.addEventListener("error", () => {
        if (playing && el.getAttribute("src")) failed(playing.box);
      });
    }
    return el;
  }

  function stop() {
    if (el) {
      el.onended = null;          // a stopped run must not carry on to the next verse
      el.pause();
      try { el.currentTime = 0; } catch (e) {}
    }
    if (playing) label(playing.box.querySelector(".vp-listen-btn"), false);
    playing = null;
  }

  function failed(box) {
    stop();
    say(box, "The recitation could not be played. It needs an internet connection — the text of the Quran works without one, the audio does not.",
             "تعذّر تشغيل التلاوة. الصوت يحتاج إلى اتّصالٍ بالإنترنت — أمّا نصّ القرآن فيعمل بدونه.");
  }

  function playVerse() {
    const a = audio();
    const [s, v] = playing.verses[playing.i];
    a.onended = () => {
      if (!playing) return;
      playing.i++;
      if (playing.i < playing.verses.length) playVerse(); else stop();
    };
    a.src = ayahAudioUrl(s, v);
    let p;
    try { p = a.play(); } catch (e) { failed(playing.box); return; }
    if (p && typeof p.catch === "function") {
      const box = playing.box;
      p.catch(err => {
        if (err && err.name === "AbortError") return;   // a newer play() replaced this one
        failed(box);
      });
    }
  }

  boxes.forEach(box => {
    const btn = box.querySelector(".vp-listen-btn");
    const sel = box.querySelector(".vp-reciter-pick");
    const s = parseInt(box.dataset.surah, 10);
    const from = parseInt(box.dataset.ayah, 10);
    const to = parseInt(box.dataset.to || box.dataset.ayah, 10);
    if (!btn || !(s >= 1 && s <= 114) || !(from >= 1) || !(to >= from)) return;
    const verses = [];
    for (let v = from; v <= to; v++) verses.push([s, v]);

    label(btn, false);
    box.classList.add("ready");          // CSS shows it only now that it works
    if (sel) {
      fillPick(sel);
      sel.addEventListener("change", () => {
        setReciter(sel.value);
        // every other picker on the page shows the same choice
        document.querySelectorAll(".vp-reciter-pick").forEach(o => { if (o !== sel) o.value = sel.value; });
        if (playing && playing.box === box) { playing.i = 0; say(box, ""); playVerse(); }
      });
    }

    btn.addEventListener("click", () => {
      if (playing && playing.box === box) { stop(); return; }
      stop();
      say(box, "");
      playing = { box, verses, i: 0 };
      label(btn, true);
      playVerse();
    });
  });

  document.addEventListener("iitw-lang", () => {
    document.querySelectorAll(".vp-reciter-pick").forEach(fillPick);
  });
})();
