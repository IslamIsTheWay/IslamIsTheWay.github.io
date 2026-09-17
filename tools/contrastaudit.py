"""Text a reader cannot read: every visible piece of text, measured against
the surface it actually sits on, in both themes.

WHY THIS EXISTS. The footer's links were dark green on dark green in the dark
theme — readable in light mode, invisible in dark — and darkaudit.py said the
page was clean. It compared an element's ink with that element's OWN
background, and a footer link has none: its background belongs to <footer>,
three levels up. Most text on a page is like that.

WHAT IT MEASURES. For each element that holds text, the background is found
by walking up to the first ancestor that paints something: a solid colour,
or every stop of a gradient (the worst stop is used), with translucent
layers composited on the way. Over a PHOTOGRAPH the result cannot be known
from styles, so those are skipped and must be looked at. The ink is
composited too (rgba ink on its ground), and the WCAG contrast ratio is
computed.

    below 3:1    FAIL  — unreadable for many people, at any size
    3 to 4.5:1   weak  — acceptable only for large or bold text

usage (a local server must be running):
    python tools/contrastaudit.py                         every page, both themes
    python tools/contrastaudit.py index.html staff.html   just these
    python tools/contrastaudit.py --weak                  show the 3-4.5 band too
"""
import os, sys
from playwright.sync_api import sync_playwright

BASE = os.environ.get("IITW_BASE", "http://localhost:8791/")
# Edge on the owner's machine; the bundled Chromium on the weekly runner.
CHANNEL = None if os.environ.get("IITW_BROWSER") == "chromium" else "msedge"
PAGES = ["index.html", "quran.html", "hadith.html", "sunnah.html", "stories.html",
         "guidance.html", "companions.html", "prophets.html", "judgement.html",
         "golden.html", "verify.html", "courses.html", "search.html", "login.html",
         "meeting.html", "offline.html", "staff.html"]

# A page is not only what it shows on load. The Quran reader, its three
# panels, the navigation's "More" menu and the header search are all drawn
# on demand — and a colour mistake inside them is invisible to a load-time
# audit. Each state below is opened and audited on its own.
STATES = {
    "quran.html": [
        ("reader: al-Fatihah", "openSurah(SURAHS[0])"),
        ("reader: tadabbur panel", "if (window.iitwToggleTadabbur) iitwToggleTadabbur()"),
        ("reader: ar-Raghib panel", "if (window.iitwToggleRaghib) iitwToggleRaghib()"),
        ("reader: al-Baqarah", "openSurah(SURAHS[1])"),
        ("reader: miracles panel", "if (window.iitwToggleMiracle) iitwToggleMiracle()"),
    ],
    "hadith.html": [
        # the chapter view drew white cards from the page's own style block
        ("al-Bukhari: the books", "document.querySelector(\"#collectionTabs button[data-col='bukhari']\").click()"),
        ("al-Bukhari: Book 1", "var c = document.querySelector('.chapter-btn'); if (c) c.click()"),
    ],
    "guidance.html": [
        ("an answer to a situation", "document.getElementById('situationInput').value = 'I feel anxious'; findGuidance()"),
    ],
    "verify.html": [
        ("a checked claim", "document.getElementById('vfInput').value = 'إنما الأعمال بالنيات'; document.getElementById('vfGo').click()"),
    ],
    "index.html": [
        ("the More menu", "var b = document.querySelector('.nav-more-btn'); if (b) b.click()"),
        ("the header search", "var s = document.querySelector('.nav-search-btn'); if (s) s.click()"),
    ],
}

JS = r"""(showWeak) => {
  const parse = c => {
    if (!c) return null;
    const m = c.match(/[0-9.]+/g);
    if (!m || m.length < 3) return null;
    return [+m[0], +m[1], +m[2], m.length > 3 ? +m[3] : 1];
  };
  const lin = v => { v = v / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  const lum = c => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
  const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  const over = (top, under) => {
    const a = top[3];
    return [top[0] * a + under[0] * (1 - a), top[1] * a + under[1] * (1 - a), top[2] * a + under[2] * (1 - a), 1];
  };

  /* The ground an element's text is painted on. */
  const ground = el => {
    const layers = [];
    for (let e = el; e; e = e.parentElement) {
      const s = getComputedStyle(e);
      const img = s.backgroundImage;
      if (img && img !== "none") {
        if (img.indexOf("url(") >= 0) return { photo: true };
        const stops = (img.match(/rgba?[(][^)]*[)]/g) || []).map(parse).filter(Boolean);
        if (stops.length && stops.every(c => c[3] >= 0.5)) {
          return { cols: stops.map(st => layers.reduceRight((acc, l) => over(l, acc), [st[0], st[1], st[2], 1])) };
        }
        stops.filter(c => c[3] > 0.05).forEach(c => layers.push(c));
      }
      const bc = parse(s.backgroundColor);
      if (bc && bc[3] >= 0.95) {
        return { cols: [layers.reduceRight((acc, l) => over(l, acc), [bc[0], bc[1], bc[2], 1])] };
      }
      if (bc && bc[3] > 0.05) layers.push(bc);
    }
    return { cols: [layers.reduceRight((acc, l) => over(l, acc), [255, 255, 255, 1])] };
  };

  const hex = c => "#" + c.slice(0, 3).map(v => Math.round(v).toString(16).padStart(2, "0")).join("");
  const out = {};
  document.querySelectorAll("body *").forEach(el => {
    if (["SCRIPT", "STYLE", "NOSCRIPT", "OPTION"].includes(el.tagName)) return;
    if (el.closest("svg")) return;          // SVG text is painted by fill, not color
    let own = "";
    el.childNodes.forEach(n => { if (n.nodeType === 3) own += n.nodeValue; });
    own = own.trim();
    if (own.length < 2) return;
    if (!el.getClientRects().length) return;
    const s = getComputedStyle(el);
    if (s.visibility === "hidden") return;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    const g = ground(el);
    if (g.photo) return;
    const ink = parse(s.color);
    if (!ink) return;
    let worst = 99, worstBg = null;
    g.cols.forEach(bg => {
      const k = over(ink, bg);
      const q = ratio(k, bg);
      if (q < worst) { worst = q; worstBg = bg; }
    });
    const size = parseFloat(s.fontSize), bold = parseInt(s.fontWeight, 10) >= 600;
    const large = size >= 24 || (bold && size >= 18.6);
    const fail = worst < 3;
    const weak = !fail && worst < 4.5 && !large;
    if (!fail && !(showWeak && weak)) return;
    const cls = (typeof el.className === "string" ? el.className : "").trim().split(/[ ]+/).filter(Boolean).slice(0, 2).join(".");
    const par = el.parentElement;
    const pcls = par && typeof par.className === "string" ? par.className.trim().split(/[ ]+/)[0] || "" : "";
    const key = (fail ? "FAIL" : "weak") + "  " + el.tagName.toLowerCase() + (cls ? "." + cls : "") +
      (pcls ? "  in ." + pcls : "") + "  ink " + hex(ink) + (ink[3] < 1 ? "@" + ink[3] : "") + " on " + hex(worstBg);
    if (!out[key]) out[key] = { n: 0, ratio: worst, text: own.slice(0, 50) };
    out[key].n++;
  });
  return Object.entries(out).sort((a, b) => a[1].ratio - b[1].ratio);
}"""

args = [a for a in sys.argv[1:] if not a.startswith("--")]
pages = args or PAGES
show_weak = "--weak" in sys.argv
total_fail = 0
with sync_playwright() as p:
    b = p.chromium.launch(channel=CHANNEL, headless=True) if CHANNEL else p.chromium.launch(headless=True)
    for theme in ("dark", "light"):
        for lang in ("ar", "en"):
            ctx = b.new_context(viewport={"width": 1280, "height": 900}, service_workers="block")
            ctx.route("**abacus.jasoncameron.dev**", lambda r: r.abort())
            ctx.add_init_script(
                "localStorage.setItem('iitw-theme','%s');localStorage.setItem('iitw-lang','%s');"
                "localStorage.setItem('iitw-staff-session', JSON.stringify({user:'Islam.younis.2026', at:Date.now()}));"
                % (theme, lang))
            for page in pages:
                pg = ctx.new_page()
                states = [("on load", None)] + STATES.get(page, [])
                for label, action in states:
                    try:
                        if action is None:
                            pg.goto(BASE + page, wait_until="networkidle", timeout=45000)
                            pg.wait_for_timeout(700)
                        else:
                            pg.evaluate("() => { " + action + " }")
                            pg.wait_for_timeout(4500 if "Bukhari" in label or "claim" in label else 1800)
                        rows = pg.evaluate(JS, show_weak)
                    except Exception as e:
                        # A page that did not load was not audited — that is a
                        # failure, never a clean result.
                        rows = [["FAIL  could not audit: " + str(e)[:80], {"n": 1, "ratio": 0, "text": ""}]]
                    fails = [r for r in rows if r[0].startswith("FAIL")]
                    total_fail += sum(r[1]["n"] for r in fails)
                    if rows:
                        print("== %s  [%s, %s]  %s" % (page, theme, lang, label))
                        for key, v in rows[:25]:
                            print("   %4.2f:1  x%-3d %s   «%s»" % (v["ratio"], v["n"], key, v["text"]))
                pg.close()
            ctx.close()
    b.close()
print("\ntext below 3:1 contrast: %d elements" % total_fail)
sys.exit(1 if total_fail else 0)
