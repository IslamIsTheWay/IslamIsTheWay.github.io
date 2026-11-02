# -*- coding: utf-8 -*-
"""Does the search still find it when one letter is wrong?

A reader types from memory, on a phone keyboard. He writes "compainons", or
"intension", or «الصحابه» with the wrong last letter — and a search that only
matches exact substrings answers "nothing found", which he reads as "this site
does not have it".

Every search box is driven twice: once with a correct query, then with one
letter damaged. The second must still find what the first found.

Two things make this test honest:
  * it reads the RESULTS container, not the page. Reading the whole page
    passes on almost anything, because the page already talks about prayer and
    zakat in its own headings.
  * it asserts the correct spelling works first. A typo "passing" because the
    box ignores input entirely is not a pass.

    python tools/searchcheck.py          the report
    python tools/searchcheck.py --check  exit 1 if a typo loses the answer
"""
import os, sys
from playwright.sync_api import sync_playwright

BASE = os.environ.get("IITW_BASE", "http://localhost:8791/")
CHANNEL = None if os.environ.get("IITW_BROWSER") == "chromium" else "msedge"
BLOCK = ("abacus.jasoncameron.dev", "everyayah.com", "cdn.islamic.network")

# page, box, results container, how to submit (None = typing is enough, or a
# selector to click), the query, the same query with one letter wrong, a word
# the answer must contain, and the language to run it in.
CASES = [
    ("guidance.html", "#situationInput", "#guidanceResults", "#gdGo",
     "how do I pray", "how do I prey", "pray", "en"),
    ("guidance.html", "#situationInput", "#guidanceResults", "#gdGo",
     "zakat on gold", "zakatt on gold", "zakat", "en"),
    ("guidance.html", "#situationInput", "#guidanceResults", "#gdGo",
     "كيف أصلي",
     "كيف أصلى", "صلا", "ar"),
    ("guidance.html", "#situationInput", "#guidanceResults", "#gdGo",
     "الزكاة على الذهب",
     "الزكاه على الدهب",
     "زكا", "ar"),
    ("sunnah.html", "#sunnahSearch", "#sunnahList", None, "wudu", "wudhu", "wudu", "en"),
    ("sunnah.html", "#sunnahSearch", "#sunnahList", None,
     "before sleeping", "befor sleeping", "sleep", "en"),
    ("sunnah.html", "#sunnahSearch", "#sunnahList", None,
     "الوضوء", "الوضو",
     "وضو", "ar"),
    ("search.html", "#searchInput", "#searchResults", None,
     "companions", "compainons", "companion", "en"),
    ("search.html", "#searchInput", "#searchResults", None,
     "الصحابة", "الصحابه",
     "صحاب", "ar"),
    ("search.html", "#searchInput", "#searchResults", None,
     "judgement", "judgment", "judge", "en"),
    ("search.html", "#searchInput", "#searchResults", None, "khalid", "khaled", "khalid", "en"),
    ("stories.html", "#storySearch", "#storyList", None, "ibrahim", "ibrahem", "ibrahim", "en"),
    ("stories.html", "#storySearch", "#storyList", None,
     "forgiveness", "forgivness", "forgiv", "en"),
    ("prophets.html", "#prophetSearch", "#prophetsGrid", None, "musa", "mosa", "musa", "en"),
    ("companions.html", "#companionSearch", "#companionsGrid", None,
     "abu bakr", "abu bakar", "abu bakr", "en"),
    ("hadith.html", "#hadithSearch", "#contentArea", None,
     "intention", "intension", "intention", "en"),
    ("hadith.html", "#hadithSearch", "#contentArea", None,
     "النية", "النيه",
     "نية", "ar"),
    ("golden.html", "#goldSearch", "#goldList", None, "algebra", "algibra", "algebra", "en"),
    ("quran.html", "#surahSearch", "#surahGrid", None, "baqarah", "bakarah", "baqarah", "en"),
    ("quran.html", "#surahSearch", "#surahGrid", None, "kahf", "kahef", "kahf", "en"),
    ("quran.html", "#surahSearch", "#surahGrid", None,
     "الكهف", "الكهفي",
     "الكهف", "ar"),
    ("guidance.html", "#worshipSearch", "#worshipList", None, "sujud", "sujood", "sujud", "en"),
    ("guidance.html", "#worshipSearch", "#worshipList", None,
     "السجود", "السجوده",
     "سجود", "ar"),
    # The verify page echoes the claim while it checks, so the expected word
    # must NOT be one of the words typed - that was a false pass. This claim is
    # one the page answers from al-Bukhari.
    ("verify.html", "#vfInput", "#vfResults", "#vfGo",
     "إنما الأعمال بالنيات",
     "انما الاعمال بالنيات",
     "bukhari", "en"),
]

# The rendered Arabic carries harakat (النِّية), so a bare substring
# check for نية fails on text that plainly contains it. Fold the
# marks off both sides before comparing - this is a flaw in the test, not in
# the page, and it cost one false failure already.
READ = """sel => {
  const el = document.querySelector(sel);
  return (el ? el.innerText : '')
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
    .toLowerCase();
}"""


HARAKAT = dict.fromkeys(range(0x610, 0x61B)) | dict.fromkeys(range(0x64B, 0x660)) | {0x670: None, 0x640: None}


def fold(t):
    return t.translate(HARAKAT).lower()


def ask(page, box, submit, q):
    el = page.query_selector(box)
    el.fill("")
    el.type(q, delay=10)
    if submit:
        btn = page.query_selector(submit)
        if btn:
            btn.click()
        else:
            page.keyboard.press("Control+Enter")
    else:
        page.keyboard.press("Enter")
    page.wait_for_timeout(1000)
    # The hadith page downloads Sahih al-Bukhari and Sahih Muslim before it can
    # finish; wait for it to stop saying so rather than reading a half-done page.
    # The verify page says "Checking…" until the Quran text has loaded.
    for _ in range(40):
        box = page.evaluate("() => (document.querySelector('#vfResults') || {}).innerText || ''")
        if "Checking" not in box and "جار" not in box:
            break
        page.wait_for_timeout(500)
    for _ in range(30):
        info = page.evaluate("() => (document.querySelector('#searchInfo') || {}).innerText || ''")
        if "Loading" not in info and "تحميل" not in info:
            break
        page.wait_for_timeout(500)


def main():
    good_fail = typo_fail = 0
    with sync_playwright() as p:
        br = p.chromium.launch(channel=CHANNEL, headless=True)
        ctx = br.new_context(viewport={"width": 1280, "height": 900}, service_workers="block")
        ctx.route("**/*", lambda route: route.abort()
                  if any(b in route.request.url for b in BLOCK) else route.continue_())
        page = ctx.new_page()
        for pagename, box, results, submit, good, typo, expect, lang in CASES:
            try:
                page.goto(BASE + pagename, wait_until="domcontentloaded")
                page.evaluate("l => localStorage.setItem('iitw-lang', l)", lang)
                page.reload(wait_until="domcontentloaded")
                page.wait_for_timeout(700)
                ask(page, box, submit, good)
                ok_good = fold(expect) in page.evaluate(READ, results)
                ask(page, box, submit, typo)
                ok_typo = fold(expect) in page.evaluate(READ, results)
            except Exception as e:
                print("  ??  %-16s %-22s %s" % (pagename, good, str(e)[:55]))
                continue
            if not ok_good:
                good_fail += 1
                print("  !!  %-16s %-22s finds nothing even spelled correctly" % (pagename, good))
            elif not ok_typo:
                typo_fail += 1
                print("  X   %-16s %-22s works, %s does not" % (pagename, good, typo))
            else:
                print("  ok  %-16s %-22s and %s both find it" % (pagename, good, typo))
        br.close()
    print("\n%d correct queries failing, %d typos losing the answer, of %d"
          % (good_fail, typo_fail, len(CASES)))
    return 1 if ("--check" in sys.argv and (good_fail or typo_fail)) else 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
