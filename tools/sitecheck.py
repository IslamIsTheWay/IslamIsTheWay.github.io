"""The whole site, loaded the way readers load it, looking for anything broken.

For every page, in Arabic and English, on a desktop and on a phone, it
scrolls the page from top to bottom (so everything drawn on arrival is drawn)
and reports:

  * JavaScript errors, console errors, requests that failed or came back 4xx/5xx
  * images that did not load
  * ids used twice (getElementById then finds the wrong one)
  * text that leaked out of a template: undefined, NaN, null, [object Object]
  * a page wider than the screen
  * links and buttons with no name a screen reader could read
  * links to a page or file that does not exist, and #anchors with no target

The analytics counter (abacus.jasoncameron.dev) is blocked, as in every test
here, so testing never inflates the owner's visitor numbers.

usage (a local server must be running):
    python tools/sitecheck.py                    every page
    python tools/sitecheck.py quran.html         just these
"""
import os, sys, json
from urllib.parse import urlparse, unquote
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = os.environ.get("IITW_BASE", "http://localhost:8791/")
CHANNEL = None if os.environ.get("IITW_BROWSER") == "chromium" else "msedge"
PAGES = ["index.html", "quran.html", "hadith.html", "sunnah.html", "stories.html",
         "guidance.html", "companions.html", "prophets.html", "judgement.html",
         "golden.html", "verify.html", "courses.html", "search.html", "login.html",
         "meeting.html", "offline.html", "staff.html", "angels.html"]
BLOCKED = "abacus.jasoncameron.dev"

# Answers that are expected and handled, not faults. GitHub allows 60 anonymous
# API calls an hour; a test run loads the staff dashboard many times and runs
# into that limit. The dashboard then reads the site's own copy of the settings
# (and, since September 2026, refuses to publish if neither could be read —
# functest.py's staff scenario covers that).
EXPECTED = ("api.github.com/repos/IslamIsTheWay/IslamIsTheWay.github.io/contents/data/site-config.json",)


def expected(msg):
    return any(e in msg for e in EXPECTED) or ("status of 403" in msg and "staff" in msg)
DOM = open(os.path.join(HERE, "tools", "sitecheck_dom.js"), encoding="utf-8").read()


def local_target_exists(href):
    """A same-site link: does the file it names exist in the repo?"""
    if not href or href.startswith(("#", "mailto:", "tel:", "javascript:", "data:", "whatsapp:", "sms:")):
        return True
    u = urlparse(href)
    if u.scheme in ("http", "https"):
        if "islamistheway.github.io" not in u.netloc:
            return True
        path = u.path.lstrip("/")
    elif u.scheme:
        return True
    else:
        path = u.path
    path = unquote(path.split("?")[0])
    if not path:
        return True
    return os.path.exists(os.path.join(HERE, path))


def scroll_through(pg):
    """Down the page in screen-sized steps. INSTANT, not smooth: the site sets
    scroll-behavior: smooth, and every scripted step then waited for its own
    animation — the Golden Age page alone took a minute and a half."""
    h = pg.evaluate("document.documentElement.scrollHeight")
    y = 0
    while y < h and y < 160000:
        y += 1100
        pg.evaluate("y => window.scrollTo({top: y, behavior: 'instant'})", y)
        pg.wait_for_timeout(60)
        h = pg.evaluate("document.documentElement.scrollHeight")


pages = [a for a in sys.argv[1:] if not a.startswith("--")] or PAGES
problems = 0
external = set()
with sync_playwright() as p:
    b = p.chromium.launch(channel=CHANNEL, headless=True) if CHANNEL else p.chromium.launch(headless=True)
    for vp_name, vp, mobile in (("desktop", {"width": 1280, "height": 900}, False),
                                ("phone", {"width": 390, "height": 844}, True)):
        for lang in ("ar", "en"):
            ctx = b.new_context(viewport=vp, is_mobile=mobile, has_touch=mobile, service_workers="block")
            ctx.route("**" + BLOCKED + "**", lambda r: r.abort())
            ctx.add_init_script(
                "localStorage.setItem('iitw-lang','%s');"
                "localStorage.setItem('iitw-staff-session', JSON.stringify({user:'Islam.younis.2026', at:Date.now()}));" % lang)
            for page in pages:
                pg = ctx.new_page()
                errs = []
                pg.on("pageerror", lambda e: errs.append("JS error: " + str(e)[:170]))
                pg.on("console", lambda m: errs.append("console: " + m.text[:170])
                      if m.type == "error" and BLOCKED not in m.text and "ERR_FAILED" not in m.text else None)
                pg.on("requestfailed", lambda r: errs.append("request failed: " + r.url[:120] + " " + str(r.failure or ""))
                      if BLOCKED not in r.url else None)
                pg.on("response", lambda r: errs.append("HTTP %d %s" % (r.status, r.url[:120])) if r.status >= 400 else None)
                d = None
                try:
                    pg.goto(BASE + page, wait_until="networkidle", timeout=60000)
                    pg.wait_for_timeout(700)
                    scroll_through(pg)
                    pg.wait_for_timeout(900)
                    d = pg.evaluate(DOM)
                except Exception as e:
                    errs.append("could not check: " + str(e)[:170])
                found = [e for e in errs if not expected(e) and not (page == "staff.html" and "status of 403" in e)]
                if d:
                    found += ["template text: " + x for x in sorted(set(d["badText"]))[:6]]
                    found += ["broken image: " + x for x in sorted(set(d["brokenImg"]))]
                    found += ["duplicate id: " + x for x in d["dupIds"]]
                    found += ["no name: " + x for x in sorted(set(d["unnamed"]))[:8]]
                    found += ["missing anchor: " + x for x in sorted(set(d["anchorsMissing"]))]
                    if d["overflow"] > 2:
                        found.append("wider than the screen by %dpx" % d["overflow"])
                    for href in set(d["links"]):
                        if not local_target_exists(href):
                            found.append("link to a missing file: " + href)
                        elif href.startswith("http") and "islamistheway.github.io" not in href:
                            external.add(href)
                if found:
                    problems += len(found)
                    print("== %s  [%s, %s]" % (page, vp_name, lang))
                    for f in found:
                        print("   " + f)
                    sys.stdout.flush()
                pg.close()
            ctx.close()
    b.close()

with open(os.path.join(HERE, "tools", ".external-links.json"), "w", encoding="utf-8") as f:
    json.dump(sorted(external), f, ensure_ascii=False, indent=1)
print("\nproblems: %d   (external links seen: %d, in tools/.external-links.json)" % (problems, len(external)))
sys.exit(1 if problems else 0)
