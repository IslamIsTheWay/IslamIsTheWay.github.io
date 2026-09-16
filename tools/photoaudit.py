"""Text over a photograph: measured from the pixels, because styles cannot say.

contrastaudit.py skips any text whose ground is a photograph — the colour
under the words depends on the picture, the scrim over it, and where the
picture is cropped at this screen size. On the home page in the dark theme
that hid a real fault: a white marble mosque under a 62% dark scrim comes out
mid-grey, and the light-grey paragraph on it measured under 3:1.

HOW. Each piece of text over a photograph is made transparent (shadow and all),
its box is photographed, and the pixels under it are measured: the median for
the typical contrast, and the 90th percentile towards the ink for the worst
patch the words cross. The text is then put back.

    below 3:1 at the median      FAIL
    below 4.5:1 (small text)     weak

usage (a local server must be running):
    python tools/photoaudit.py                 every page, both themes, desktop and phone
"""
import io, os, sys
from playwright.sync_api import sync_playwright
from PIL import Image

BASE = os.environ.get("IITW_BASE", "http://localhost:8791/")
CHANNEL = None if os.environ.get("IITW_BROWSER") == "chromium" else "msedge"
PAGES = ["index.html", "quran.html", "hadith.html", "sunnah.html", "stories.html",
         "guidance.html", "companions.html", "prophets.html", "judgement.html",
         "golden.html", "verify.html", "courses.html", "search.html", "login.html"]

FIND = r"""() => {
  const parse = c => { const m = c && c.match(/[0-9.]+/g); return m && m.length >= 3 ? [+m[0], +m[1], +m[2], m.length > 3 ? +m[3] : 1] : null; };
  const onPhoto = el => {
    for (let e = el; e; e = e.parentElement) {
      const s = getComputedStyle(e);
      if (s.backgroundImage && s.backgroundImage.indexOf("url(") >= 0) return true;
      const bc = parse(s.backgroundColor);
      if (bc && bc[3] >= 0.95) return false;
    }
    return false;
  };
  const out = [];
  let n = 0;
  document.querySelectorAll("body *").forEach(el => {
    if (["SCRIPT", "STYLE", "IMG", "svg"].includes(el.tagName) || el.closest("svg")) return;
    let own = "";
    el.childNodes.forEach(c => { if (c.nodeType === 3) own += c.nodeValue; });
    own = own.trim();
    if (own.length < 2 || !el.getClientRects().length) return;
    const s = getComputedStyle(el);
    if (s.visibility === "hidden") return;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) return;
    if (!onPhoto(el)) return;
    el.setAttribute("data-iitw-probe", String(n));
    const cls = (typeof el.className === "string" ? el.className : "").trim().split(/[ ]+/).filter(Boolean).slice(0, 2).join(".");
    const par = el.parentElement, pc = par && typeof par.className === "string" ? par.className.trim().split(/[ ]+/)[0] : "";
    out.push({ n: n++, ink: parse(s.color), size: parseFloat(s.fontSize), bold: parseInt(s.fontWeight, 10) >= 600,
               sig: el.tagName.toLowerCase() + (cls ? "." + cls : "") + (pc ? " in ." + pc : ""), text: own.slice(0, 40) });
  });
  return out;
}"""

HIDE = """(n) => {
  if (!document.getElementById('iitw-probe-style')) {
    const st = document.createElement('style'); st.id = 'iitw-probe-style';
    st.textContent = '.iitw-probe, .iitw-probe * { color: transparent !important; -webkit-text-fill-color: transparent !important; text-shadow: none !important; }';
    document.head.appendChild(st);
  }
  document.querySelectorAll('.iitw-probe').forEach(e => e.classList.remove('iitw-probe'));
  const el = document.querySelector('[data-iitw-probe="' + n + '"]');
  if (!el) return null;
  el.scrollIntoView({block: 'center'});
  el.classList.add('iitw-probe');
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, w: r.width, h: r.height };
}"""

def lin(v):
    v = v / 255.0
    return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4

def lum(c):
    return 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2])

def ratio(a, b):
    x, y = lum(a), lum(b)
    return (max(x, y) + 0.05) / (min(x, y) + 0.05)

fails = 0
with sync_playwright() as p:
    b = p.chromium.launch(channel=CHANNEL, headless=True) if CHANNEL else p.chromium.launch(headless=True)
    for vw, vh, label in ((1280, 900, "desktop"), (390, 844, "phone")):
        for theme in ("dark", "light"):
            ctx = b.new_context(viewport={"width": vw, "height": vh}, service_workers="block",
                                reduced_motion="reduce")
            ctx.route("**abacus.jasoncameron.dev**", lambda r: r.abort())
            ctx.add_init_script("localStorage.setItem('iitw-theme','%s');localStorage.setItem('iitw-lang','ar');" % theme)
            for page in PAGES:
                pg = ctx.new_page()
                pg.goto(BASE + page, wait_until="networkidle", timeout=45000)
                pg.wait_for_timeout(900)
                pg.evaluate("() => document.querySelectorAll('.reveal').forEach(e => e.classList.add('in-view'))")
                items = pg.evaluate(FIND)
                seen = {}
                for it in items:
                    if it["sig"] in seen or not it["ink"]:
                        continue
                    box = pg.evaluate(HIDE, it["n"])
                    if not box:
                        continue
                    pg.wait_for_timeout(250)
                    x, y = max(0, box["x"]), max(0, box["y"])
                    w, h = min(box["w"], vw - x), min(box["h"], vh - y)
                    if w < 4 or h < 4:
                        continue
                    png = pg.screenshot(clip={"x": x, "y": y, "width": w, "height": h})
                    pg.evaluate("() => document.querySelectorAll('.iitw-probe').forEach(e => e.classList.remove('iitw-probe'))")
                    im = Image.open(io.BytesIO(png)).convert("RGB")
                    flat = im.get_flattened_data() if hasattr(im, "get_flattened_data") else im.getdata()
                    px = sorted(flat, key=lum)
                    if not px:
                        continue
                    ink = it["ink"]
                    median = px[len(px) // 2]
                    # the worst patch: the brightest for light ink, the darkest for dark ink
                    worst = px[int(len(px) * 0.9)] if lum(ink) > lum(median) else px[int(len(px) * 0.1)]
                    rm, rw = ratio(ink, median), ratio(ink, worst)
                    large = it["size"] >= 24 or (it["bold"] and it["size"] >= 18.6)
                    kind = "FAIL" if rm < 3 else ("weak" if (rm < 4.5 and not large) else "")
                    seen[it["sig"]] = 1
                    if kind:
                        if kind == "FAIL":
                            fails += 1
                        print("%-7s %-5s %-16s %s  median %.2f:1  worst %.2f:1  %s  «%s»" % (
                            label, theme, page, kind, rm, rw, it["sig"], it["text"]))
                pg.close()
            ctx.close()
    b.close()
print("\ntext over photographs below 3:1: %d" % fails)
sys.exit(1 if fails else 0)
