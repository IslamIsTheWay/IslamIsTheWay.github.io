# -*- coding: utf-8 -*-
"""The site on a phone: does anything run off the side, and can a thumb hit it?

Most of the site is read on a phone, and the two faults that spoil it there do
not show on a laptop: a block wider than the screen (which makes the whole page
slide sideways) and a control too small to tap. Both are checked in English and
in Arabic, because the Arabic line is longer and breaks differently.

    python tools/phonecheck.py            the report
    python tools/phonecheck.py --check    exit 1 if anything is wrong
"""
import os, sys
from playwright.sync_api import sync_playwright

BASE = os.environ.get("IITW_BASE", "http://localhost:8791/")
CHANNEL = None if os.environ.get("IITW_BROWSER") == "chromium" else "msedge"
BLOCK = ("abacus.jasoncameron.dev", "everyayah.com", "cdn.islamic.network")
PAGES = ["index.html", "quran.html", "guidance.html", "judgement.html", "golden.html",
         "sunnah.html", "hadith.html", "stories.html", "prophets.html", "companions.html",
         "search.html", "courses.html", "verify.html", "angels.html"]
WIDTH = 375
MIN_TAP = 36          # CSS px of hit area. Apple asks 44 and the stylesheet
                      # gives 44 to every control it can; 36 is the floor a
                      # text link in a list has to clear.

FIND = """() => {
  const vw = document.documentElement.clientWidth;
  const wide = [];
  document.querySelectorAll('body *').forEach(el => {
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || !el.offsetParent) return;
    if (s.position === 'fixed') return;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return;
    if (r.right > vw + 2 || r.left < -2) {
      if (el.scrollWidth > el.clientWidth + 2 && s.overflowX !== 'visible') return; // a deliberate scroller
      wide.push({ tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 40),
                  left: Math.round(r.left), right: Math.round(r.right),
                  text: (el.innerText || '').trim().slice(0, 40) });
    }
  });
  const small = [];
  /* What a thumb can actually hit is the control's own box OR the invisible
     layer the THUMB SIZE block of the stylesheet puts inside it. Measured
     from the computed style rather than by hit-testing a point, because
     elementFromPoint only sees the part of the page currently on screen and
     would call every control below the fold unreachable. */
  const hitArea = (el, r) => {
    const a = getComputedStyle(el, '::after');
    let w = r.width, h = r.height;
    if (a && a.content && a.content !== 'none' && a.position === 'absolute') {
      w = Math.max(w, parseFloat(a.minWidth) || 0);
      h = Math.max(h, parseFloat(a.minHeight) || 0);
    }
    return [Math.round(w), Math.round(h)];
  };
  document.querySelectorAll('a, button, select, input, [role=button], summary').forEach(el => {
    const s = getComputedStyle(el);
    if (s.display === 'none' || !el.offsetParent) return;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return;
    const [hw, hh] = hitArea(el, r);
    /* A link in a list is aimed at by its row, so its width is the width of
       its word and nothing is gained by padding it sideways. Width is only
       asked of controls you aim at as a shape - a button, a box, an icon. */
    const inList = el.tagName === 'A' && el.closest('li');
    if (hh < %d || (!inList && hw < 28)) {
      small.push({ tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 36),
                   w: hw, h: hh,
                   text: (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 30) });
    }
  });
  return { slides: document.documentElement.scrollWidth > vw + 2,
           scrollW: document.documentElement.scrollWidth, vw: vw,
           wide: wide.slice(0, 12), small: small.slice(0, 12) };
}""" % MIN_TAP


def main():
    problems = 0
    with sync_playwright() as p:
        br = p.chromium.launch(channel=CHANNEL, headless=True)
        # A real phone, not a narrow laptop: has_touch makes `pointer: coarse`
        # match, which is what the stylesheet's thumb-size rules are gated on.
        ctx = br.new_context(viewport={"width": WIDTH, "height": 812},
                             device_scale_factor=2, service_workers="block",
                             has_touch=True, is_mobile=True)
        ctx.route("**/*", lambda route: route.abort()
                  if any(b in route.request.url for b in BLOCK) else route.continue_())
        page = ctx.new_page()
        for lang in ("en", "ar"):
            print("\n===== %s =====" % ("Arabic" if lang == "ar" else "English"))
            for name in PAGES:
                page.goto(BASE + name, wait_until="domcontentloaded")
                page.evaluate("l => localStorage.setItem('iitw-lang', l)", lang)
                page.reload(wait_until="domcontentloaded")
                page.wait_for_timeout(700)
                r = page.evaluate(FIND)
                bad = []
                if r["slides"]:
                    bad.append("page slides sideways (%dpx wide on a %dpx screen)" % (r["scrollW"], r["vw"]))
                for w in r["wide"]:
                    bad.append("off the edge: <%s class=%r> %d..%d %r"
                               % (w["tag"], w["cls"], w["left"], w["right"], w["text"]))
                for s in r["small"]:
                    bad.append("too small to tap (%dx%d): <%s class=%r> %r"
                               % (s["w"], s["h"], s["tag"], s["cls"], s["text"]))
                if bad:
                    problems += len(bad)
                    print("  %s" % name)
                    for b in bad[:8]:
                        print("      " + b)
                else:
                    print("  %-18s ok" % name)
        br.close()
    print("\n%d problems on a %dpx screen" % (problems, WIDTH))
    return 1 if (problems and "--check" in sys.argv) else 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
