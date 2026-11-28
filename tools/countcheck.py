# -*- coding: utf-8 -*-
"""Which count requests does the site send, under its REAL address?

main.js counts visits only on islamistheway.github.io, so no local test ever
sees a count request. This opens that address:

    python tools/countcheck.py local    the repo's files, served under the real
                                        address (run BEFORE deploying)
    python tools/countcheck.py live     the live site itself (after deploying)

As a person: it opens the home page, clicks Quran in the navigation, opens
Al-Fatihah in the reader, opens a verse page and a Quran-in-your-life page,
then opens the verse page again, and expects exactly six counts — total,
page-index, page-quran, surah-1, page-verse, page-faith — all to the service
IITW_COUNTER (js/main.js) names. The menu click is NOT counted (it was the
same visit as the page it opened — 28 November 2026), and opening a page
again adds nothing.
As a search engine (Googlebot's name), and as a person signed in to the staff
dashboard: no count at all.

Every request to a counting service is CAUGHT AND STOPPED before it leaves
the browser, so nothing is ever added to the owner's numbers. A driven
browser says so (navigator.webdriver), and main.js does not count one; this
tool hides that, and gives the browser an ordinary Edge name, to be counted
as a person would be. Exit 1 if any of the three is wrong, or a page error
happens."""
import mimetypes, os, sys
from playwright.sync_api import sync_playwright

MODE = sys.argv[1] if len(sys.argv) > 1 else "local"
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://islamistheway.github.io/"
NEW = "https://countapi.mileshilliard.com/api/v1/hit/iitw-islamistheway-2026-"
COUNTERS = ("countapi.mileshilliard.com", "abacus.jasoncameron.dev")
EXPECTED = ["page-faith", "page-index", "page-quran", "page-verse", "surah-1", "total"]
PERSON = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
          "Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0")
GOOGLEBOT = ("Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) "
             "Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
NOT_DRIVEN = "Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false });"
STAFF = "try{localStorage.setItem('iitw-staff-session', JSON.stringify({user:'someone', at:Date.now()}));}catch(e){}"


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


def visit(br, ua, extra=""):
    """One visitor's walk through the site; returns (count URLs caught, page errors)."""
    caught, errs = [], []

    def counter(route):
        caught.append(route.request.url)
        route.abort()

    ctx = br.new_context(service_workers="block", viewport={"width": 1280, "height": 900}, user_agent=ua)
    ctx.add_init_script(NOT_DRIVEN + extra)
    if MODE == "local":
        ctx.route(SITE + "**", local_files)
    for host in COUNTERS:
        ctx.route("**" + host + "**", counter)
    ctx.route("**everyayah.com**", lambda r: r.abort())
    pg = ctx.new_page()
    pg.on("pageerror", lambda e: errs.append(str(e)[:150]))
    pg.goto(SITE + "index.html", wait_until="load")
    pg.wait_for_timeout(1500)
    # a click on the menu opens the Quran page; the click itself is not counted
    pg.click("nav.main-nav a[href='quran.html']")
    pg.wait_for_load_state("load")
    pg.wait_for_timeout(1500)
    # a surah opened in the reader
    pg.click(".surah-card")
    pg.wait_for_selector("#ayah-1", timeout=20000)
    pg.wait_for_timeout(800)
    pg.goto(SITE + "verse/2-255.html", wait_until="load")
    pg.wait_for_timeout(1500)
    pg.goto(SITE + "life/faith.html", wait_until="load")
    pg.wait_for_timeout(1500)
    # the same verse page again, in the same visit: nothing more
    pg.goto(SITE + "verse/2-255.html", wait_until="load")
    pg.wait_for_timeout(1500)
    ctx.close()
    return caught, errs


with sync_playwright() as p:
    br = p.chromium.launch(channel="msedge", headless=True)
    person, errs = visit(br, PERSON)
    robot, errs2 = visit(br, GOOGLEBOT)
    staff, errs3 = visit(br, PERSON, STAFF)
    br.close()

print("mode:", MODE)
for u in person:
    print("  ", u)
new = [u for u in person if u.startswith(NEW)]
keys = sorted(u[len(NEW):] for u in new)
print("a person - to the service in main.js: %d of %d   keys: %s" % (len(new), len(person), keys))
print("Googlebot - counts sent: %d %s" % (len(robot), robot[:3]))
print("signed-in staff - counts sent: %d %s" % (len(staff), staff[:3]))
print("page errors:", errs + errs2 + errs3)
ok = keys == EXPECTED and len(new) == len(person) and not robot and not staff and not (errs + errs2 + errs3)
print("OK" if ok else "PROBLEM")
sys.exit(0 if ok else 1)
