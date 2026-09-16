"""Text that stays English when the site is in Arabic.

Loads each page with the language set to Arabic, reveals what is hidden,
walks every text node and prints anything still carrying Latin letters that
is not inside an .en-only span. English in Arabic mode is this site's
commonest bug, and the pages behind the staff login had never been looked at
this way — the whole dashboard was English. Needs a local server and
Playwright: python tools/leakaudit.py http://localhost:8791 staff.html
A line that is Arabic but contains a brand name (GitHub, Gmail, Shorts) is
reported too; read the output, do not count it."""
import sys
from playwright.sync_api import sync_playwright
BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8791"
PAGES = sys.argv[2].split(",") if len(sys.argv) > 2 else ["index.html"]
JS = """() => {
  const out = [];
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walk.nextNode())) {
    const t = (n.textContent || "").trim();
    if (t.length < 3) continue;
    if (!/[A-Za-z]{3}/.test(t)) continue;
    let el = n.parentElement, hidden = false, enonly = false;
    while (el) {
      if (el.classList && el.classList.contains("en-only")) enonly = true;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") hidden = true;
      el = el.parentElement;
    }
    if (enonly) continue;
    const p = n.parentElement;
    const tag = p ? p.tagName.toLowerCase() : "?";
    if (["script", "style", "code", "pre"].includes(tag)) continue;
    out.push({t: t.slice(0, 70), tag: tag, cls: (p && p.className || "").toString().slice(0, 30), hidden: hidden});
  }
  return out;
}"""
with sync_playwright() as p:
    b = p.chromium.launch(channel="msedge", headless=True)
    ctx = b.new_context(viewport={"width": 900, "height": 900}, service_workers="block")
    ctx.route("**abacus.jasoncameron.dev**", lambda r: r.abort())
    for page in PAGES:
        pg = ctx.new_page()
        pg.add_init_script("localStorage.setItem('iitw-lang','ar');localStorage.setItem('iitw-staff-session', JSON.stringify({user:'Islam.younis.2026', at:Date.now()}))")
        pg.goto(BASE + "/" + page, wait_until="networkidle")
        pg.wait_for_timeout(700)
        pg.evaluate("""() => { document.querySelectorAll('[style*="display:none"],[style*="display: none"]').forEach(e => e.style.display = ''); }""")
        pg.wait_for_timeout(300)
        rows = pg.evaluate(JS)
        print("== %s: %d English strings" % (page, len(rows)))
        seen = set()
        for r in rows[:40]:
            k = r["t"][:40]
            if k in seen: continue
            seen.add(k)
            print("   %-8s %-22s %s" % (r["tag"], r["cls"], r["t"]))
        pg.close()
    ctx.close(); b.close()
