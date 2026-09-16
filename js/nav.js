/* ============================================================
   THE NAVIGATION, AND ONE SEARCH FOR THE WHOLE SITE
   ============================================================
   TWO PROBLEMS THIS FIXES.

   1. FOURTEEN LINKS IN A ROW. Every page carried the whole site in its
      header. A reader scanning fourteen names chooses none of them. The
      five that people actually arrive for stay in the row; the rest move
      behind "More", grouped the way the material is grouped. Nothing is
      removed — every link is still in the HTML, so search engines and
      readers without JavaScript see the site exactly as before.

   2. THE SEARCH WAS ONE PAGE. The site has a real search — people, stories,
      hadith, the Sunnah, adhkar, the surahs (js/sitesearch.js) — but you
      had to be ON search.html to use it. It is now a button in the header of
      every page (and the / key, and Ctrl-K): type, press Enter, and the
      query is handed to search.html, which already knows how to answer ?q=.
      Nothing heavy is loaded on any other page to make that work.
   ============================================================ */

(function () {
  "use strict";

  /* The five doors people arrive for. Everything else goes behind "More",
     in the order it is listed here, under the two headings. */
  var PRIMARY = ["quran.html", "hadith.html", "sunnah.html", "stories.html", "guidance.html"];
  var GROUPS = [
    { en: "Read and learn", ar: "اقرأ وتعلّم",
      pages: ["prophets.html", "companions.html", "judgement.html", "golden.html", "courses.html"] },
    { en: "Check and find", ar: "تحقّق وابحث",
      pages: ["verify.html", "search.html", "index.html"] }
  ];

  function fileOf(a) {
    var h = (a.getAttribute("href") || "").split("#")[0].split("?")[0];
    return h.split("/").pop() || "index.html";
  }

  function buildMore(nav) {
    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    var rest = links.filter(function (a) {
      return !a.classList.contains("nav-login") && PRIMARY.indexOf(fileOf(a)) < 0;
    });
    if (rest.length < 3) return;

    var wrap = document.createElement("div");
    wrap.className = "nav-more";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-more-btn";
    btn.setAttribute("aria-expanded", "false");
    /* The word itself is left to i18n.js, which already carries "More". */
    btn.innerHTML = '<span class="en-only">More</span><span class="ar-only" dir="rtl">المزيد</span> <span aria-hidden="true">▾</span>';
    var panel = document.createElement("div");
    panel.className = "nav-more-panel";
    panel.hidden = true;

    GROUPS.forEach(function (g) {
      var mine = rest.filter(function (a) { return g.pages.indexOf(fileOf(a)) >= 0; });
      if (!mine.length) return;
      var h = document.createElement("div");
      h.className = "nav-more-head";
      h.innerHTML = '<span class="en-only">' + g.en + '</span><span class="ar-only" dir="rtl">' + g.ar + '</span>';
      panel.appendChild(h);
      mine.sort(function (a, b) { return g.pages.indexOf(fileOf(a)) - g.pages.indexOf(fileOf(b)); });
      mine.forEach(function (a) { panel.appendChild(a); });
    });
    /* anything the groups did not name still has to go somewhere */
    rest.forEach(function (a) { if (a.parentNode === nav) panel.appendChild(a); });

    wrap.appendChild(btn);
    wrap.appendChild(panel);
    var login = nav.querySelector(".nav-login");
    if (login) nav.insertBefore(wrap, login); else nav.appendChild(wrap);

    function close() { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = panel.hidden;
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- one search, reachable from every page ---------- */

  function openSearch() {
    var box = document.getElementById("siteSearchOverlay");
    if (!box) return;
    box.hidden = false;
    document.body.classList.add("search-open");
    var i = document.getElementById("siteSearchInput");
    if (i) { i.value = ""; i.focus(); }
  }
  function closeSearch() {
    var box = document.getElementById("siteSearchOverlay");
    if (!box) return;
    box.hidden = true;
    document.body.classList.remove("search-open");
  }
  function go() {
    var i = document.getElementById("siteSearchInput");
    var q = i ? i.value.trim() : "";
    if (q.length < 2) return;
    /* search.html does the work; it has the data and the matching rules. */
    location.href = "search.html?q=" + encodeURIComponent(q);
  }

  function buildSearch(bar) {
    if (document.getElementById("siteSearchBtn")) return;
    var btn = document.createElement("button");
    btn.id = "siteSearchBtn";
    btn.type = "button";
    btn.className = "reading-btn nav-search-btn";
    btn.textContent = "🔎";
    btn.setAttribute("title", "Search the site — ابحث في الموقع");
    btn.setAttribute("aria-label", "Search the site");
    btn.addEventListener("click", openSearch);

    var tools = bar.querySelector(".reading-tools");
    if (tools) tools.insertBefore(btn, tools.firstChild);
    else {
      var burger = bar.querySelector(".nav-toggle");
      if (burger) bar.insertBefore(btn, burger); else bar.appendChild(btn);
    }

    var ov = document.createElement("div");
    ov.id = "siteSearchOverlay";
    ov.className = "site-search-overlay";
    ov.hidden = true;
    ov.innerHTML =
      '<div class="site-search-card" role="dialog" aria-modal="true" aria-label="Search the site">' +
      '<div class="site-search-row">' +
      '<input type="text" id="siteSearchInput" dir="auto" autocomplete="off" ' +
      'placeholder="يوسف · الزكاة · patience · Khalid" />' +
      '<button type="button" id="siteSearchGo" class="qsearch-btn">' +
      '<span class="en-only">Search</span><span class="ar-only" dir="rtl">ابحث</span></button>' +
      '</div>' +
      '<p class="site-search-hint"><span class="en-only">People, stories, hadith, the Sunnah, adhkar and the surahs — in Arabic or English.</span>' +
      '<span class="ar-only" dir="rtl">الأشخاص والقصص والأحاديث والسنن والأذكار والسور — بالعربية أو الإنجليزية.</span></p>' +
      '</div>';
    document.body.appendChild(ov);
    ov.addEventListener("click", function (e) { if (e.target === ov) closeSearch(); });
    document.getElementById("siteSearchGo").addEventListener("click", go);
    document.getElementById("siteSearchInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); go(); }
      if (e.key === "Escape") closeSearch();
    });
  }

  /* "/" and Ctrl-K, the two keys people already try — but never while they
     are typing into something else. */
  document.addEventListener("keydown", function (e) {
    var el = document.activeElement, tag = el ? el.tagName : "";
    var typing = tag === "INPUT" || tag === "TEXTAREA" || (el && el.isContentEditable);
    if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K"))) {
      e.preventDefault();
      openSearch();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var bar = document.querySelector("header .nav-wrap");
    var nav = document.querySelector("nav.main-nav");
    if (bar) buildSearch(bar);
    if (nav) buildMore(nav);
    if (window.applyI18n) window.applyI18n();
  });
})();
