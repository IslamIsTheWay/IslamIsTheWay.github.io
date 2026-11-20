# -*- coding: utf-8 -*-
"""Which count requests does the site send, under its REAL address?

main.js counts visits only on islamistheway.github.io, so no local test ever
sees a count request. This opens that address:

    python tools/countcheck.py local    the repo's files, served under the real
                                        address (run BEFORE deploying)
    python tools/countcheck.py live     the live site itself (after deploying)

It opens the home page, clicks Quran in the navigation, and opens a verse
page, and expects five counts: total, page-index, nav-quran, page-quran,
page-verse — all to the service IITW_COUNTER (js/main.js) names. Every
request to a counting service is CAUGHT AND STOPPED before it leaves the
browser, so nothing is ever added to the owner's numbers. Exit 1 if the
counts are not exactly those five, or if a page error happens."""
import mimetypes, os, sys
from playwright.sync_api import sync_playwright

MODE = sys.argv[1] if len(sys.argv) > 1 else "local"
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://islamistheway.github.io/"
NEW = "https://countapi.mileshilliard.com/api/v1/hit/iitw-islamistheway-2026-"
COUNTERS = ("countapi.mileshilliard.com", "abacus.jasoncameron.dev")
EXPECTED = ["nav-quran", "page-index", "page-quran", "page-verse", "total"]
caught = []


def counter(route):
    caught.append(route.request.url)
    route.abort()


def local_files(route):
    path = route.request.url.split("?")[0].split("#")[0][len(SITE):] or "index.html"
    if path.endswith("/"):
        path += "index.html"
    f = os.path.join(REPO, *path.split("/"))
    if not os.path.isfile(f):
        return route.fulfill(status=404, body="not found")
    ctype = mimetypes.guess_type(f)[0] or "application/octet-stream"
    with open(f, "rb") as fh:
        route.fulfill(status=200, body=fh.read(), headers={"Content-Type": ctype})


with sync_playwright() as p:
    br = p.chromium.launch(channel="msedge", headless=True)
    ctx = br.new_context(service_workers="block", viewport={"width": 1280, "height": 900})
    if MODE == "local":
        ctx.route(SITE + "**", local_files)
    for host in COUNTERS:
        ctx.route("**" + host + "**", counter)
    ctx.route("**everyayah.com**", lambda r: r.abort())
    pg = ctx.new_page()
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)[:150]))
    pg.goto(SITE + "index.html", wait_until="load")
    pg.wait_for_timeout(1500)
    # a click on the navigation is counted as a section click, then the page it opens
    pg.click("nav.main-nav a[href='quran.html']")
    pg.wait_for_load_state("load")
    pg.wait_for_timeout(1500)
    pg.goto(SITE + "verse/2-255.html", wait_until="load")
    pg.wait_for_timeout(1500)
    br.close()

print("mode:", MODE)
for u in caught:
    print("  ", u)
new = [u for u in caught if u.startswith(NEW)]
keys = sorted(u[len(NEW):] for u in new)
print("to the service in main.js: %d of %d   keys: %s" % (len(new), len(caught), keys))
print("page errors:", errs)
ok = keys == EXPECTED and len(new) == len(caught) and not errs
print("OK" if ok else "PROBLEM")
sys.exit(0 if ok else 1)
