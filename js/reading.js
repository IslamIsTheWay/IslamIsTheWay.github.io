/* ============================================================
   READING COMFORT — الوضع الليلي وحجم النصّ
   ============================================================
   Two controls, in the navigation of every page beside the language switch:

     🌙 / ☀️   the dark theme
     A− / A+   the size of the text, for the WHOLE site

   WHY BOTH ARE HERE AND NOT ONLY IN THE QURAN READER. Most of the reading on
   this site happens outside the reader — stories, the Sunnah in daily life,
   the Companions — and most of it happens at night. The reader's own A− / A+
   still sets the size of the Mushaf line; this one sets everything.

   THE THEME IS SET BEFORE THE PAGE IS PAINTED. A tiny script in every page's
   <head> reads the choice and stamps data-theme on <html>; without it the
   page flashes white and then turns dark, which looks broken. This file only
   draws the buttons and reacts to them.

   A READER WHO HAS NOT CHOSEN follows the phone's own setting, and keeps
   following it: the choice is only written down when a button is pressed.

   localStorage can be unavailable (a private window, cleared site data), so
   every read and write is guarded and the site simply stays as it is.
   ============================================================ */

(function () {
  "use strict";

  var THEME_KEY = "iitw-theme";
  var SIZE_KEY = "iitw-text-scale";
  var STEPS = [1, 1.1, 1.22, 1.35];

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function currentTheme() {
    var t = get(THEME_KEY);
    return (t === "dark" || t === "light") ? t : (systemDark() ? "dark" : "light");
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var b = document.getElementById("themeToggle");
    if (b) {
      b.textContent = t === "dark" ? "☀️" : "🌙";
      b.setAttribute("title", t === "dark" ? "Daylight — الوضع النهاري" : "Night reading — الوضع الليلي");
      b.setAttribute("aria-label", t === "dark" ? "Switch to the light theme" : "Switch to the dark theme");
      b.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
    }
  }

  function currentScale() {
    var v = parseFloat(get(SIZE_KEY));
    return STEPS.indexOf(v) >= 0 ? v : 1;
  }
  function applyScale(s) {
    /* One number on <html>: everything sized in rem or em follows it, and the
       layout's own breakpoints (which are in px) stay where they are. */
    document.documentElement.style.fontSize = s === 1 ? "" : (s * 100) + "%";
    var i = STEPS.indexOf(s);
    var out = document.getElementById("textSmaller"), inn = document.getElementById("textBigger");
    if (out) out.disabled = i <= 0;
    if (inn) inn.disabled = i >= STEPS.length - 1;
  }
  function stepSize(dir) {
    var i = STEPS.indexOf(currentScale()) + dir;
    if (i < 0 || i >= STEPS.length) return;
    set(SIZE_KEY, String(STEPS[i]));
    applyScale(STEPS[i]);
  }

  window.iitwToggleTheme = function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    set(THEME_KEY, next);
    applyTheme(next);
  };

  function button(id, text, title, onclick, cls) {
    var b = document.createElement("button");
    b.id = id;
    b.type = "button";
    b.className = cls;
    b.textContent = text;
    /* "A−" is Latin and a minus sign: in an Arabic page it would be laid out
       right to left and read "−A". The button keeps its own direction. */
    b.setAttribute("dir", "ltr");
    b.setAttribute("title", title);
    b.addEventListener("click", onclick);
    return b;
  }

  function draw() {
    /* In the HEADER BAR, not inside the navigation: on a phone the nav is
       folded behind the hamburger, and a reader whose eyes hurt should not
       have to open a menu to make the text bigger or turn the light off. */
    var bar = document.querySelector("header .nav-wrap");
    if (!bar || document.getElementById("themeToggle")) return;

    var wrap = document.createElement("span");
    wrap.className = "reading-tools";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Reading comfort — راحة القراءة");

    wrap.appendChild(button("textSmaller", "A−", "Smaller text — تصغير النصّ",
      function () { stepSize(-1); }, "reading-btn reading-size"));
    wrap.appendChild(button("textBigger", "A+", "Larger text — تكبير النصّ",
      function () { stepSize(1); }, "reading-btn reading-size"));
    wrap.appendChild(button("themeToggle", "🌙", "Night reading — الوضع الليلي",
      window.iitwToggleTheme, "reading-btn reading-theme"));

    var burger = bar.querySelector(".nav-toggle");
    if (burger) bar.insertBefore(wrap, burger); else bar.appendChild(wrap);
  }

  /* The phone's setting can change while the page is open (at sunset, on
     Android's schedule). Follow it — but only for a reader who never chose. */
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () { if (!get(THEME_KEY)) applyTheme(systemDark() ? "dark" : "light"); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  document.addEventListener("DOMContentLoaded", function () {
    draw();
    applyTheme(currentTheme());
    applyScale(currentScale());
  });
})();
