# -*- coding: utf-8 -*-
"""Every verse page, loaded as a reader on a phone loads it.

verse/*.html are generated (tools/build-verse-pages.py) and use <base href="../">
to reuse the site's header, styles and scripts from one folder down. If that
ever goes wrong it goes wrong for all 445 at once and quietly: a stylesheet or
font that 404s, a script error, a page that slides sideways. This loads every
one of them in Arabic at 375px and reports any of those.

    python tools/versecheck.py           every page
    python tools/versecheck.py 40        a sample of 40 (spread across the Quran)
    python tools/versecheck.py --check   exit 1 on any problem
"""
import os, sys
from playwright.sync_api import sync_playwright

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = os.environ.get("IITW_BASE", "http://localhost:8791/")
CHANNEL = None if os.environ.get("IITW_BROWSER") == "chromium" else "msedge"
BLOCK = ("abacus.jasoncameron.dev", "everyayah.com", "cdn.islamic.network")


def pages(limit=None):
    names = sorted((f for f in os.listdir(os.path.join(REPO, "verse")) if f.endswith(".html")),
                   key=lambda n: (n != "index.html",) + tuple(int(x) for x in n.replace(".html", "").split("-") if x.isdigit()))
    if limit and limit < len(names):
        step = len(names) / float(limit)
        names = [names[int(i * step)] for i in range(limit)]
    return names


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    limit = int(args[0]) if args else None
    todo = pages(limit)
    problems = []
    with sync_playwright() as p:
        br = p.chromium.launch(channel=CHANNEL, headless=True)
        ctx = br.new_context(viewport={"width": 375, "height": 812}, is_mobile=True,
                             has_touch=True, service_workers="block")
        ctx.route("**/*", lambda r: r.abort() if any(b in r.request.url for b in BLOCK) else r.continue_())
        ctx.add_init_script("try{localStorage.setItem('iitw-lang','ar')}catch(e){}")
        pg = ctx.new_page()
        errors, failed = [], []
        pg.on("pageerror", lambda e: errors.append(str(e)[:120]))
        pg.on("response", lambda r: failed.append("%d %s" % (r.status, r.url.split("/")[-1][:50]))
              if r.status >= 400 else None)
        for name in todo:
            errors.clear(); failed.clear()
            pg.goto(BASE + "verse/" + name, wait_until="load")
            pg.wait_for_timeout(250)
            r = pg.evaluate("""() => ({
              wide: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
              css: !!document.querySelector('header') && getComputedStyle(document.querySelector('header')).position !== 'static',
              font: document.fonts ? [...document.fonts].some(f => f.family.indexOf('KFGQPC') >= 0 && f.status !== 'error') : true,
              ar: document.documentElement.classList.contains('lang-ar') || document.documentElement.getAttribute('lang') === 'ar'
            })""")
            bad = []
            if errors: bad.append("script error: " + errors[0])
            if failed: bad.append("missing file: " + failed[0])
            if r["wide"]: bad.append("page slides sideways")
            if not r["css"]: bad.append("stylesheet did not apply")
            if not r["font"]: bad.append("Mushaf font did not load")
            if not r["ar"]: bad.append("Arabic mode did not switch on")
            if bad:
                problems.append((name, bad))
                print("  X  %-14s %s" % (name, "; ".join(bad)))
        br.close()
    print("%d verse pages loaded, %d with problems" % (len(todo), len(problems)))
    return 1 if (problems and "--check" in sys.argv) else 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
