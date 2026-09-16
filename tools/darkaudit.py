"""Find what is still LIGHT while the dark theme is on.

Walks every visible element of a page with the dark theme forced on, and
reports any near-white surface, any pale stop inside a gradient, and any
dark ink sitting on a dark ground. Needs a local server and Playwright, so
it is run by hand: python tools/darkaudit.py index.html quran.html …
(The colours it cannot see from the browser are caught by lightscan.py.)"""
import sys
from playwright.sync_api import sync_playwright

PAGES = sys.argv[1:] or ["index.html", "quran.html", "stories.html", "hadith.html", "guidance.html"]
B = "http://localhost:8791/"
AUDIT = r"""() => {
  const lum = c => { const m = c.match(/[0-9.]+/g); if (!m) return null;
    const a = m.length > 3 ? parseFloat(m[3]) : 1; if (a < 0.25) return null;
    return (0.2126*m[0] + 0.7152*m[1] + 0.0722*m[2]) / 255; };
  const out = {};
  document.querySelectorAll("body *").forEach(el => {
    if (!el.offsetParent && el.tagName !== "BODY") return;
    const s = getComputedStyle(el);
    const bg = lum(s.backgroundColor), fg = lum(s.color);
    let why = null;
    if (bg !== null && bg > 0.82) why = "light surface " + s.backgroundColor;
    else if (s.backgroundImage && s.backgroundImage.indexOf("gradient") >= 0) {
      const stops = s.backgroundImage.match(/rgba?\([^)]*\)/g) || [];
      const pale = stops.filter(c => { const l = lum(c); return l !== null && l > 0.82; });
      if (pale.length) why = "pale gradient stop " + pale[0];
    }
    else if (bg !== null && bg < 0.25 && fg !== null && fg < 0.35) why = "dark ink on dark " + s.color;
    if (!why) return;
    const key = el.tagName.toLowerCase() + (el.className && typeof el.className === "string"
      ? "." + el.className.trim().split(/\s+/).slice(0,2).join(".") : "") + " :: " + why;
    out[key] = (out[key] || 0) + 1;
  });
  return Object.entries(out).sort((a,b) => b[1]-a[1]).slice(0, 14);
}"""
with sync_playwright() as p:
    b = p.chromium.launch(channel="msedge", headless=True)
    pg = b.new_page(viewport={"width": 390, "height": 900}, is_mobile=True, has_touch=True)
    pg.route("**abacus.jasoncameron.dev**", lambda r: r.abort())
    pg.goto(B + "index.html", wait_until="load")
    pg.evaluate("try{localStorage.setItem('iitw-theme','dark')}catch(e){}")
    for page in PAGES:
        pg.goto(B + page, wait_until="load")
        pg.wait_for_timeout(1800)
        print("=== " + page)
        for k, n in pg.evaluate(AUDIT):
            print("   %3d  %s" % (n, k))
    b.close()
