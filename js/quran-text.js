/* ============================================================
   THE QURAN TEXT — THE LOADER
   ============================================================
   Every verse of the Quran with its English translation and its page in
   the Madani Mushaf lives in js/quran-text/<surah>.js, one file each.
   This file is what a page loads; it fetches a surah when that surah is
   opened, and all 114 in the background when something needs the whole
   text (the word search, the Verify page, the word panel).

   WHY IT IS SPLIT. The text is 2.2MB. It used to be one file, and the
   reader page downloaded and parsed all of it before it could show a
   single verse - on every visit, on a phone, on mobile data. Opening
   al-Fatihah needs 2KB of it.

   WHAT DID NOT CHANGE. The text is still on this site and still opens
   with no connection: the service worker caches all 114 parts, exactly
   as it cached the one big file (HANDOFF PART 20 - the owner reported
   twice that a surah would not open offline, because the words were
   being fetched from api.alquran.cloud on every open).

   Shape:  QURAN_TEXT["2"] = { a: [arabic...], e: [english...],
                               p: [mushaf page per ayah...] }

   THE ARABIC IS THE MADINAH MUSHAF'S OWN TEXT. `a` is the King Fahd
   Glorious Quran Printing Complex's Uthmanic Hafs text, version 18 -
   the text of the mushaf printed in Madinah, word for word and mark for
   mark. It MUST be displayed in the KFGQPC font
   (fonts/UthmanicHafs_V18.woff2): it encodes the open tanween with code
   points that any other font draws as the wrong mark. `e` is Saheeh
   International and `p` is the page in the printed Madinah Mushaf.

   Never type a verse. Cut it from these files.
   ============================================================ */
var QURAN_TEXT = {};

(function () {
  "use strict";

  /* The parts are asked for with the same ?v= stamp this file was asked
     for, so a reader never gets a new reader with an old surah out of the
     browser cache. bump-version.sh stamps the <script> tag; the query is
     read back off it here. */
  var STAMP = "";
  try {
    var me = (document.currentScript && document.currentScript.src) || "";
    var q = me.indexOf("?");
    if (q >= 0) STAMP = me.slice(q);
  } catch (e) {}

  var pending = {};
  var loaded = 0;

  function one(n) {
    n = String(n);
    if (QURAN_TEXT[n]) return Promise.resolve(QURAN_TEXT[n]);
    if (pending[n]) return pending[n];
    pending[n] = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "js/quran-text/" + n + ".js" + STAMP;
      s.async = true;
      s.onload = function () {
        if (QURAN_TEXT[n]) loaded++;
        resolve(QURAN_TEXT[n]);
      };
      s.onerror = function () {
        delete pending[n];               // let a later attempt try again
        reject(new Error("surah " + n + " did not load"));
      };
      (document.head || document.documentElement).appendChild(s);
    });
    return pending[n];
  }

  /* Six at a time. Not politeness: forty simultaneous requests are dropped
     by a modest server - the same thing that once left the service worker's
     cache empty while it reported itself installed (see sw.js). */
  function all() {
    if (loaded >= 114) return Promise.resolve(QURAN_TEXT);
    var order = [];
    for (var i = 1; i <= 114; i++) order.push(i);
    var at = 0;
    function step() {
      if (at >= order.length) return Promise.resolve(QURAN_TEXT);
      var batch = order.slice(at, at + 6);
      at += 6;
      return Promise.all(batch.map(function (n) {
        return one(n).catch(function () { return null; });
      })).then(step);
    }
    return step();
  }

  window.iitwQuranNeed = one;      // one surah, awaited before it is shown
  window.iitwQuranAll = all;       // the whole text, for searching it
  window.iitwQuranReady = function () { return loaded >= 114; };

  /* The rest of the Quran is fetched when something is about to need all of
     it — the reader touching the word search, or the Verify page's box —
     not on page load. A reader who opened one surah should pay for one
     surah; the service worker has the other 113 in its cache anyway, so
     this is usually instant and costs nothing on the wire. */
  function warmOn(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("focus", function () { all(); }, { once: true });
  }
  function warm() {
    warmOn("qWordSearch");    /* the Quran page's word search */
    warmOn("vfInput");        /* the Verify page */
  }
  if (document.readyState === "complete" || document.readyState === "interactive") warm();
  else document.addEventListener("DOMContentLoaded", warm);

})();
