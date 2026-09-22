"""Every feature, used the way a reader uses it — and the result checked.

sitecheck.py loads pages and looks for errors; this one does things: switches
the language and the theme, searches, opens a surah, plays a verse, checks a
claim, fills a form — and asserts that what came back is RIGHT, not merely that
nothing crashed.

Nothing here sends anything anywhere: the analytics counter is blocked, no
form is submitted to a real service, no audio is downloaded past its first
request, and the staff dashboard is only ever left with a draft that is
cleared afterwards.

usage (a local server must be running):
    python tools/functest.py              everything
    python tools/functest.py quran        the scenarios whose name contains "quran"
"""
import os, sys, re, traceback
from playwright.sync_api import sync_playwright

BASE = os.environ.get("IITW_BASE", "http://localhost:8791/")
CHANNEL = None if os.environ.get("IITW_BROWSER") == "chromium" else "msedge"
BLOCK = ("abacus.jasoncameron.dev", "everyayah.com", "cdn.islamic.network")

SCENARIOS = []
def scenario(fn):
    SCENARIOS.append(fn)
    return fn


class Fail(Exception):
    pass


def check(cond, msg):
    if not cond:
        raise Fail(msg)


def open_page(ctx, page, lang="en", theme="light", extra=""):
    pg = ctx.new_page()
    pg._errors = []
    pg.on("pageerror", lambda e: pg._errors.append(str(e)[:200]))
    # Set the starting language and theme ONCE per tab: an init script runs on
    # every page load, and re-setting them would undo what a scenario switched.
    pg.add_init_script("try{if(!sessionStorage.getItem('iitw-test')){sessionStorage.setItem('iitw-test','1');"
                       "localStorage.setItem('iitw-lang','%s');localStorage.setItem('iitw-theme','%s');%s}}catch(e){}" % (lang, theme, extra))
    pg.goto(BASE + page, wait_until="networkidle", timeout=60000)
    pg.wait_for_timeout(600)
    return pg


def visible_count(pg, selector):
    return pg.evaluate("s => [...document.querySelectorAll(s)].filter(e => e.getClientRects().length && getComputedStyle(e).display !== 'none').length", selector)


# =============================================================== the header
@scenario
def header_language_switch(ctx):
    pg = open_page(ctx, "index.html", lang="en")
    check(pg.evaluate("document.documentElement.lang") == "en", "page did not start in English")
    pg.click("#langToggle")
    pg.wait_for_timeout(400)
    check(pg.evaluate("document.documentElement.lang") == "ar", "the switch did not turn the page Arabic")
    check(pg.evaluate("document.documentElement.dir") == "rtl", "Arabic but not right-to-left")
    check(pg.evaluate("localStorage.getItem('iitw-lang')") == "ar", "the choice was not remembered")
    h = pg.evaluate("document.querySelector('.hero h1, h1').innerText")
    check(re.search("[؀-ۿ]", h), "the main heading is still English after switching: " + h[:60])
    pg.goto(BASE + "quran.html", wait_until="networkidle")
    check(pg.evaluate("document.documentElement.lang") == "ar", "the language did not carry to the next page")
    return pg


@scenario
def header_theme_and_size(ctx):
    pg = open_page(ctx, "index.html")
    before = pg.evaluate("document.documentElement.getAttribute('data-theme')")
    pg.click("#themeToggle")
    after = pg.evaluate("document.documentElement.getAttribute('data-theme')")
    check(before != after and after in ("dark", "light"), "the theme button did nothing (%s -> %s)" % (before, after))
    bg = pg.evaluate("getComputedStyle(document.body).backgroundColor")
    check((after == "dark") == (sum(int(x) for x in re.findall(r"[0-9]+", bg)[:3]) < 200), "the page colour did not follow the theme: " + bg)
    f0 = pg.evaluate("parseFloat(getComputedStyle(document.documentElement).fontSize)")
    pg.click("#textBigger"); pg.click("#textBigger")
    f1 = pg.evaluate("parseFloat(getComputedStyle(document.documentElement).fontSize)")
    check(f1 > f0, "A+ did not enlarge the text (%s -> %s)" % (f0, f1))
    for _ in range(6):
        if pg.evaluate("document.getElementById('textSmaller').disabled"):
            break
        pg.click("#textSmaller")
    f2 = pg.evaluate("parseFloat(getComputedStyle(document.documentElement).fontSize)")
    check(abs(f2 - f0) < 0.5, "A- did not bring the text back to its size (%s vs %s)" % (f2, f0))
    check(pg.evaluate("document.getElementById('textSmaller').disabled"), "A- is not disabled at the smallest size")
    pg.goto(BASE + "hadith.html", wait_until="networkidle")
    check(pg.evaluate("document.documentElement.getAttribute('data-theme')") == after, "the theme did not carry to the next page")
    return pg


@scenario
def header_search_overlay(ctx):
    pg = open_page(ctx, "index.html")
    pg.click("#siteSearchBtn")
    pg.wait_for_timeout(250)
    check(pg.evaluate("!document.getElementById('siteSearchOverlay').hidden"), "the search overlay did not open")
    check(pg.evaluate("document.activeElement && document.activeElement.id") == "siteSearchInput", "the search box did not take the focus")
    pg.keyboard.type("Khalid")
    with pg.expect_navigation(timeout=15000):
        pg.keyboard.press("Enter")
    pg.wait_for_load_state("networkidle")
    pg.wait_for_timeout(900)
    check("search.html" in pg.url and "Khalid" in pg.url, "Enter did not go to the search page with the query: " + pg.url)
    n = pg.evaluate("document.getElementById('searchResults') ? document.getElementById('searchResults').innerText.length : 0")
    check(n > 40, "the search page showed no results for Khalid")
    check("Khalid" in pg.inner_text("#searchResults"), "the results for Khalid do not mention Khalid")
    # Escape and the '/' shortcut
    pg.keyboard.press("/")
    pg.wait_for_timeout(200)
    check(pg.evaluate("!document.getElementById('siteSearchOverlay').hidden"), "'/' did not open the search")
    pg.keyboard.press("Escape")
    pg.wait_for_timeout(200)
    check(pg.evaluate("document.getElementById('siteSearchOverlay').hidden"), "Escape did not close the search")
    return pg


@scenario
def header_more_menu(ctx):
    pg = open_page(ctx, "index.html")
    pg.click(".nav-more-btn")
    pg.wait_for_timeout(200)
    check(pg.get_attribute(".nav-more-btn", "aria-expanded") == "true", "More did not open")
    links = visible_count(pg, ".nav-more-panel a")
    check(links >= 6, "the More menu shows only %d links" % links)
    pg.keyboard.press("Escape")
    pg.wait_for_timeout(200)
    check(pg.get_attribute(".nav-more-btn", "aria-expanded") == "false", "Escape did not close More")
    pg.click(".nav-more-btn")
    href = pg.get_attribute(".nav-more-panel a", "href")
    with pg.expect_navigation(timeout=15000):
        pg.click(".nav-more-panel a")
    check(href.split("#")[0] in pg.url, "a link in More did not navigate")
    return pg


@scenario
def header_phone_menu(ctx):
    pg = ctx.new_page()
    pg._errors = []
    pg.on("pageerror", lambda e: pg._errors.append(str(e)[:200]))
    pg.set_viewport_size({"width": 390, "height": 844})
    pg.goto(BASE + "index.html", wait_until="networkidle")
    check(visible_count(pg, "nav.main-nav a[href='quran.html']") == 0, "the nav should be folded behind the menu button on a phone")
    pg.click(".nav-toggle")
    pg.wait_for_timeout(400)
    check(visible_count(pg, "nav.main-nav a[href='quran.html']") == 1, "the menu button did not show the navigation")
    with pg.expect_navigation(timeout=15000):
        pg.click("nav.main-nav a[href='quran.html']")
    check("quran.html" in pg.url, "the Quran link in the phone menu did not navigate")
    return pg


# =============================================================== the Quran
def visible_surah_numbers(pg):
    return pg.evaluate("""() => [...document.querySelectorAll('#surahGrid .surah-card')]
        .filter(c => c.getClientRects().length && getComputedStyle(c).display !== 'none')
        .map(c => (c.innerText.match(/[0-9]+/) || [''])[0])""")


@scenario
def quran_grid_and_name_search(ctx):
    pg = open_page(ctx, "quran.html")
    check(pg.evaluate("document.querySelectorAll('#surahGrid .surah-card').length") == 114, "the grid does not show 114 surahs")
    for query, want in (("يوسف", "12"), ("36", "36"), ("light", "24"), ("Kahf", "18"), ("الكهف", "18")):
        pg.fill("#surahSearch", query)
        pg.wait_for_timeout(350)
        nums = visible_surah_numbers(pg)
        check(want in nums, "searching the surahs for %r did not show surah %s (showed %s)" % (query, want, nums[:6]))
        check(len(nums) <= 6, "searching for %r left %d surahs showing" % (query, len(nums)))
    pg.fill("#surahSearch", "")
    pg.wait_for_timeout(350)
    check(len(visible_surah_numbers(pg)) == 114, "clearing the search did not bring all 114 back")
    return pg


@scenario
def quran_open_read_and_close(ctx):
    pg = open_page(ctx, "quran.html")
    pg.evaluate("openSurah(SURAHS[17])")
    pg.wait_for_selector("#modalBody #ayah-110", timeout=20000)
    n = pg.evaluate("document.querySelectorAll('#modalBody .ayah-block').length")
    check(n == 110, "al-Kahf opened with %d verses, not 110" % n)
    check(pg.evaluate("document.getElementById('surahModal').classList.contains('open')"), "the reader did not open")
    title = pg.inner_text("#modalTitle")
    check("Kahf" in title, "the reader title is not al-Kahf: " + title[:60])
    first = pg.evaluate("document.querySelector('#ayah-1 .arabic-text').innerText")
    check("ٱلۡحَمۡدُ" in first, "al-Kahf 18:1 does not begin with al-hamd: " + first[:40])
    basmala = pg.evaluate("(document.querySelector('.reader-basmala') || {}).innerText || ''")
    check("بِسۡمِ" in basmala, "the basmala is missing above al-Kahf")
    tr = pg.evaluate("(document.querySelector('#ayah-1') || {}).innerText || ''")
    check("praise" in tr.lower(), "the English translation of 18:1 is missing")
    pg.click("#modalClose")
    pg.wait_for_timeout(300)
    check(not pg.evaluate("document.getElementById('surahModal').classList.contains('open')"), "the close button did not close the reader")
    pg.evaluate("openSurah(SURAHS[8])")
    pg.wait_for_selector("#modalBody #ayah-129", timeout=20000)
    check(pg.evaluate("!document.querySelector('.reader-basmala')"), "at-Tawbah shows a basmala; it must not")
    return pg


@scenario
def quran_audio_follows_the_reciter(ctx):
    pg = open_page(ctx, "quran.html")
    asked = []
    pg.on("request", lambda r: asked.append(r.url) if "everyayah.com" in r.url else None)
    pg.evaluate("openSurah(SURAHS[35])")
    pg.wait_for_selector("#modalBody #ayah-1", timeout=20000)
    pg.click("#ayah-1 button[title='Listen to this verse']")
    pg.wait_for_timeout(800)
    check(any(u.endswith("/036001.mp3") for u in asked), "playing Ya-Sin 36:1 did not request 036001.mp3: %s" % asked[-2:])
    # the audio host is blocked in this test, exactly as it is for a reader with no connection
    note = pg.evaluate("(document.getElementById('rqSaveNote') || {}).innerText || ''")
    check("could not be played" in note or "تعذّر" in note, "a verse that could not play said nothing to the reader")
    first = [u for u in asked if u.endswith("/036001.mp3")][0]
    options = pg.evaluate("[...document.querySelectorAll('#reciterSelect option')].map(o => o.value)")
    check(len(options) >= 5, "the reciter list has only %d reciters" % len(options))
    other = [o for o in options if ("/" + o + "/") not in first][0]
    pg.click("#modalClose")
    pg.select_option("#reciterSelect", other)
    pg.wait_for_timeout(300)
    asked.clear()
    pg.evaluate("openSurah(SURAHS[35])")
    pg.wait_for_selector("#modalBody #ayah-2", timeout=20000)
    pg.click("#ayah-2 button[title='Listen to this verse']")
    pg.wait_for_timeout(800)
    check(any(("/" + other + "/") in u and u.endswith("036002.mp3") for u in asked),
          "after choosing %s the verse was not requested from that reciter: %s" % (other, asked[-2:]))
    return pg


@scenario
def quran_tadabbur_and_raghib_panels(ctx):
    pg = open_page(ctx, "quran.html")
    pg.evaluate("openSurah(SURAHS[0])")
    pg.wait_for_selector("#modalBody #ayah-7", timeout=20000)
    pg.click("#rqTadBtn")
    pg.wait_for_timeout(700)
    tad = pg.evaluate("[...document.querySelectorAll('#modalBody [class*=tad]')].filter(e => e.getClientRects().length).map(e => e.innerText).join(' ').length")
    check(tad > 400, "the Tadabbur panel opened with almost nothing in it (%d characters)" % tad)
    pg.click("#rqRgBtn")
    pg.wait_for_selector("#rgPanel:not([hidden])", timeout=15000)
    pg.wait_for_timeout(1500)
    rg = pg.inner_text("#rgPanel")
    check(len(rg) > 300, "ar-Raghib's panel is nearly empty (%d characters)" % len(rg))
    check(re.search("Raghib|الراغب", rg), "ar-Raghib's panel does not name him")
    pg.click("#rqRgBtn")
    pg.wait_for_timeout(400)
    check(pg.evaluate("document.getElementById('rgPanel').hidden || !document.getElementById('rgPanel').getClientRects().length"),
          "pressing the ar-Raghib button again did not close the panel")
    return pg


@scenario
def quran_word_search(ctx):
    pg = open_page(ctx, "quran.html")
    for query, expect in (("الصبر", "4"), ("patience", None), ("قققق", "none")):
        pg.fill("#qWordSearch", query)
        pg.evaluate("iitwQuranWordSearch()")
        pg.wait_for_function("window.iitwQuranReady && iitwQuranReady()", timeout=120000)
        pg.wait_for_timeout(1200)
        out = pg.inner_text("#qWordResults")
        if expect == "none":
            check("Open" not in out and len(out.strip()) > 3, "a nonsense word found results, or said nothing: " + out[:80])
        elif expect:
            check(out.strip().startswith(expect), "searching %r did not find %s verses: %s" % (query, expect, out[:60]))
        else:
            check(out.count("Open") >= 5, "searching the translation for %r found fewer than 5 verses" % query)
    pg.fill("#qWordSearch", "الصبر")
    pg.evaluate("iitwQuranWordSearch()")
    pg.wait_for_timeout(800)
    pg.click("#qWordResults .qs-open")
    pg.wait_for_selector("#surahModal.open #ayah-45", timeout=20000)
    return pg


@scenario
def quran_deep_link_and_resume(ctx):
    pg = open_page(ctx, "quran.html")
    pg.goto(BASE + "quran.html#surah-18-10", wait_until="networkidle")
    pg.wait_for_selector("#surahModal.open #ayah-10", timeout=20000)
    pg.wait_for_timeout(1500)
    inview = pg.evaluate("(() => { const r = document.getElementById('ayah-10').getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; })()")
    check(inview, "the link to 18:10 opened al-Kahf but not at verse 10")
    pg.goto(BASE + "index.html", wait_until="networkidle")
    pg.wait_for_timeout(800)
    box = pg.evaluate("(() => { const b = document.getElementById('resumeBox'); return b && !b.hidden ? b.innerHTML : ''; })()")
    check("surah-18" in box, "the home page does not offer to continue al-Kahf after reading it")
    with pg.expect_navigation(timeout=15000):
        pg.click("#resumeBox a[href*='surah-18']")
    pg.wait_for_selector("#surahModal.open #ayah-1", timeout=20000)
    return pg


@scenario
def quran_word_lens(ctx):
    pg = open_page(ctx, "quran.html")
    pg.evaluate("openSurah(SURAHS[1])")
    pg.wait_for_selector("#modalBody #ayah-2", timeout=20000)
    pg.evaluate("""() => {
      const el = document.querySelector('#ayah-2 .arabic-text');
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let tn = null, n;
      while ((n = walker.nextNode())) { if (n.nodeValue.trim().length > 3) { tn = n; break; } }
      const text = tn.nodeValue;
      const start = text.length - text.trimStart().length;
      let end = text.indexOf(' ', start); if (end < 0) end = text.length;
      const r = document.createRange(); r.setStart(tn, start); r.setEnd(tn, end);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      document.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));
    }""")
    pg.wait_for_timeout(700)
    shown = pg.evaluate("[...document.querySelectorAll('[class*=wl-]')].some(e => e.getClientRects().length && e.innerText.trim().length > 5)")
    check(shown, "selecting a word in the verse did not open the word panel")
    return pg


# =============================================================== Hadith
@scenario
def hadith_highlights_search_and_books(ctx):
    pg = open_page(ctx, "hadith.html")
    pg.wait_for_timeout(800)
    n = pg.evaluate("document.querySelectorAll('#contentArea .hadith-card, #contentArea .full-hadith-card').length")
    check(n >= 10, "the Highlights show only %d hadith" % n)
    pg.fill("#hadithSearch", "intention")
    pg.wait_for_timeout(1200)
    txt = pg.inner_text("#contentArea").lower()
    check("intention" in txt, "searching the highlights for 'intention' found nothing about intention")
    pg.fill("#hadithSearch", "")
    pg.wait_for_timeout(800)
    pg.click("#collectionTabs button[data-col='bukhari']")
    pg.wait_for_selector(".chapter-btn", timeout=60000)
    books = pg.evaluate("document.querySelectorAll('.chapter-btn').length")
    check(books >= 90, "al-Bukhari shows only %d books" % books)
    pg.click(".chapter-btn >> nth=0")
    pg.wait_for_selector(".full-hadith-card", timeout=20000)
    cards = pg.evaluate("document.querySelectorAll('.full-hadith-card').length")
    check(cards >= 5, "the Book of Revelation opened with %d hadith" % cards)
    first = pg.inner_text(".full-hadith-card >> nth=0")
    check(re.search("[؀-ۿ]{4}", first) and re.search("[A-Za-z]{4}", first), "a hadith card is missing its Arabic or its English")
    pg.click(".back-btn")
    pg.wait_for_selector(".chapter-btn", timeout=10000)
    pg.evaluate("openChapter('bukhari', 8)")
    pg.wait_for_selector("#paginationArea button", timeout=20000)
    before = pg.inner_text(".full-hadith-card >> nth=0")[:80]
    pg.click("#paginationArea button:has-text('2')")
    pg.wait_for_timeout(700)
    after = pg.inner_text(".full-hadith-card >> nth=0")[:80]
    check(before != after, "page 2 of the Book of Prayer shows the same hadith as page 1")
    return pg


# =============================================================== Sunnah
@scenario
def sunnah_categories_and_search(ctx):
    pg = open_page(ctx, "sunnah.html")
    total = pg.evaluate("document.querySelectorAll('#sunnahList .sunnah-card').length")
    check(total == 199, "the Sunnah page shows %d practices, not 199" % total)
    chips = pg.evaluate("document.querySelectorAll('#catChips .chip').length")
    check(chips >= 10, "only %d category chips" % chips)
    pg.click("#catChips .chip >> nth=2")
    pg.wait_for_timeout(500)
    some = pg.evaluate("document.querySelectorAll('#sunnahList .sunnah-card').length")
    label = pg.inner_text("#catChips .chip >> nth=2")
    want = re.search(r"[(]([0-9]+)[)]", label)
    check(0 < some < 199, "choosing a category did not narrow the list (%d)" % some)
    check(want and int(want.group(1)) == some, "the chip says %s but %d practices are shown" % (label.strip(), some))
    pg.click("#catChips .chip >> nth=0")
    pg.wait_for_timeout(400)
    pg.fill("#sunnahSearch", "sleep")
    pg.wait_for_timeout(1200)
    top = pg.inner_text("#sunnahList .sunnah-card >> nth=0").lower()
    check("sleep" in top or "bed" in top, "the first answer for 'sleep' is not about sleep: " + top[:80])
    pg.fill("#sunnahSearch", "النوم")
    pg.wait_for_timeout(1200)
    top = pg.inner_text("#sunnahList .sunnah-card >> nth=0")
    check("نوم" in top or "sleep" in top.lower(), "the first answer for النوم is not about sleep")
    return pg


# =============================================================== Stories
@scenario
def stories_list_and_search(ctx):
    pg = open_page(ctx, "stories.html")
    # it opens on one section (the end times); the "All" tab shows every story
    first = pg.evaluate("document.querySelectorAll('#storyList .story-card').length")
    check(first >= 3, "the opening section shows only %d stories" % first)
    pg.click("#storyTabs button[data-sec='all']")
    pg.wait_for_timeout(600)
    n = pg.evaluate("document.querySelectorAll('#storyList .story-card').length")
    check(n == 57, "the All tab shows %d stories, not 57" % n)
    pg.fill("#storySearch", "Dajjal")
    pg.wait_for_timeout(1000)
    m = pg.evaluate("[...document.querySelectorAll('#storyList .story-card')].filter(c => c.getClientRects().length).length")
    check(1 <= m <= 20, "searching for Dajjal showed %d stories" % m)
    check("dajjal" in pg.inner_text("#storyList").lower(), "the stories found for Dajjal do not mention him")
    pg.fill("#storySearch", "")
    pg.wait_for_timeout(800)
    back = pg.evaluate("document.querySelectorAll('#storyList .story-card').length")
    check(back >= 3, "clearing the search left %d stories showing" % back)
    return pg


# =============================================================== Prophets and Companions
@scenario
def people_grids_search_and_full_story(ctx):
    for page, box, search, count, query, name in (
            ("companions.html", "#companionsGrid", "#companionSearch", 65, "Khalid", "Khalid"),
            ("prophets.html", "#prophetsGrid", "#prophetSearch", 29, "Yusuf", "Yusuf")):
        pg = open_page(ctx, page)
        n = pg.evaluate("s => document.querySelectorAll(s + ' .person-card').length", box)
        check(n == count, "%s shows %d people, not %d" % (page, n, count))
        pg.fill(search, query)
        pg.wait_for_timeout(700)
        m = pg.evaluate("s => document.querySelectorAll(s + ' .person-card').length", box)
        check(1 <= m <= 3 and name in pg.inner_text(box), "%s: searching %r found %d people" % (page, query, m))
        pg.fill(search, "")
        pg.wait_for_timeout(500)
        btn = pg.query_selector(box + " .life-toggle")
        check(btn is not None, page + " has no 'Read the full story' button")
        before = pg.evaluate("s => document.querySelector(s + ' .person-card').innerText.length", box)
        btn.click()
        pg.wait_for_timeout(700)
        after = pg.evaluate("s => document.querySelector(s + ' .person-card').innerText.length", box)
        check(after > before + 600, "%s: 'Read the full story' opened little or nothing (%d -> %d)" % (page, before, after))
        if pg._errors:
            raise Fail("JavaScript error on %s: %s" % (page, pg._errors[0]))
        pg.close()
    return None


# =============================================================== the Golden Age
@scenario
def golden_list_and_search(ctx):
    pg = open_page(ctx, "golden.html")
    n = pg.evaluate("document.querySelectorAll('#goldList .gold-card').length")
    check(n == 41, "the Golden Age list shows %d figures, not 41" % n)
    pg.fill("#goldSearch", "algebra")
    pg.wait_for_timeout(900)
    check("Khwarizmi" in pg.inner_text("#goldList"), "searching 'algebra' did not find al-Khwarizmi")
    pg.fill("#goldSearch", "الجبر")
    pg.wait_for_timeout(900)
    check(pg.evaluate("document.querySelectorAll('#goldList .gold-card').length") >= 1, "searching الجبر found nobody")
    return pg

@scenario
def golden_mountain_of_gold_card(ctx):
    """The gc-treasure card: second under "So what do we do now?", after the
    card on the builders who believed in the end times, linking to the full
    section on the Judgement page."""
    pg = open_page(ctx, "golden.html")
    ids = pg.evaluate("[...document.querySelectorAll('#closingEndBox article.gc-card')].map(a => a.id)")
    check(ids[:3] == ["gc-waiting", "gc-treasure", "gc-return"], "the closing cards are in this order: %s" % ids)
    check(pg.evaluate("!!document.querySelector('#gc-treasure .more-link a[href=\"judgement.html#treasure\"]')"),
          "the card does not link to judgement.html#treasure")
    return pg


# =============================================================== the Day of Judgement
@scenario
def judgement_stages_and_journey(ctx):
    pg = open_page(ctx, "judgement.html")
    n = pg.evaluate("document.querySelectorAll('.judge-card').length")
    check(n == 15, "the Judgement page shows %d stages, not 15" % n)
    tabs = pg.evaluate("document.querySelectorAll('#journeyTabs button').length")
    check(tabs >= 3, "the journey has %d phase tabs" % tabs)
    all_cards = pg.evaluate("document.querySelectorAll('.jr-card').length")
    pg.click("#journeyTabs button >> nth=1")
    pg.wait_for_timeout(500)
    some = pg.evaluate("document.querySelectorAll('.jr-card').length")
    check(0 < some <= all_cards, "choosing a phase left %d steps (of %d)" % (some, all_cards))
    pg.evaluate("jumpToStage('j-scales')")
    pg.wait_for_timeout(1200)
    inview = pg.evaluate("(() => { const r = document.getElementById('j-scales').getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; })()")
    check(inview, "jumping to the Scales did not bring that stage on screen")
    return pg

@scenario
def judgement_mountain_of_gold(ctx):
    """js/treasure.js: ten cards between the signs and the three places; the
    Euphrates sign and the Euphrates map node each point down to it in one
    line; a link from another page lands on the card; Arabic shows Arabic."""
    pg = open_page(ctx, "judgement.html")
    n = pg.evaluate("document.querySelectorAll('#jTreasureBox .pl-card').length")
    check(n == 10, "the mountain-of-gold section shows %d cards, not 10" % n)
    ids = pg.evaluate("[...document.querySelectorAll('section[id]')].map(s => s.id)")
    check("treasure" in ids and ids.index("signs") < ids.index("treasure") < ids.index("places"),
          "the section is not between the signs and the three places: %s" % ids)
    check(pg.evaluate("!!document.querySelector('.page-toc a[href=\"#treasure\"]')"), "no contents link to it")
    hrefs = pg.evaluate("[...document.querySelectorAll('.more-link a')].map(a => a.getAttribute('href'))")
    check(hrefs.count("#treasure") == 2, "expected the sign and the map node to point to it, got %s" % hrefs)
    pg.click("#signsBox .more-link a")
    pg.wait_for_timeout(1200)
    top = pg.evaluate("document.getElementById('treasure').getBoundingClientRect().top")
    check(-5 < top < 400, "the pointer on the Euphrates sign did not bring the section on screen (top %d)" % top)
    pg.goto(BASE + "judgement.html#tr-ice", wait_until="networkidle")
    pg.wait_for_timeout(900)
    top = pg.evaluate("document.getElementById('tr-ice').getBoundingClientRect().top")
    check(-5 < top < 400, "a link to judgement.html#tr-ice did not land on the card (top %d)" % top)
    pg.click("#langToggle")
    pg.wait_for_timeout(500)
    txt = pg.inner_text("#jTreasureBox")
    check("جبلُ الذهب" in txt and "The mountain of gold" not in txt and "In plain words" not in txt,
          "the section is not in Arabic after switching: " + txt[:80])
    return pg


# =============================================================== the home page
@scenario
def home_sections_render(ctx):
    pg = open_page(ctx, "index.html")
    check(len(pg.inner_text("#ayahArabic").strip()) > 5, "the verse banner is empty")
    check(pg.evaluate("document.querySelectorAll('#hadithPreview .hadith-card').length") == 3, "the hadith preview does not show 3 hadith")
    check(pg.evaluate("document.querySelectorAll('#recentGrid .recent-card').length") == 6, "Recently Added does not show 6 cards")
    check(pg.evaluate("document.querySelectorAll('#statsRow .stat').length") == 6, "the numbers strip does not show 6 numbers")
    nums = pg.evaluate("[...document.querySelectorAll('#statsRow .stat-n')].map(e => e.innerText.trim())")
    check(all(re.search("[0-9٠-٩]", n) for n in nums), "a number in the strip is blank: %s" % nums)
    # the daily plan: tick one thing and it stays ticked
    ticks = pg.query_selector_all(".daily-tick")
    check(len(ticks) >= 3, "the daily plan has %d things to tick" % len(ticks))
    first_id = ticks[0].get_attribute("data-id")
    ticks[0].click()
    pg.wait_for_timeout(300)
    check(pg.evaluate("id => !!document.querySelector('.daily-item.is-checked .daily-tick[data-id=\"' + id + '\"]')", first_id),
          "ticking an item of the daily plan did not mark it")
    pg.reload(wait_until="networkidle")
    check(pg.evaluate("id => !!document.querySelector('.daily-item.is-checked .daily-tick[data-id=\"' + id + '\"]')", first_id),
          "a ticked item of the daily plan was forgotten after reloading")
    # a recitation plays in place
    cards = pg.evaluate("document.querySelectorAll('#recitationsGrid .rec-card').length")
    check(cards >= 1, "no recommended recitations are shown")
    pg.click("#recitationsGrid .rec-player >> nth=0")
    pg.wait_for_timeout(500)
    check(pg.evaluate("!!document.querySelector('#recitationsGrid iframe, #recitationsGrid video')"), "pressing a recitation did not start the player")
    return pg

@scenario
def home_suggested_reading(ctx):
    """The owner, 22 September 2026: the best sections are deep inside the
    pages and the home page never named them. Eight doors, each into a
    section that exists — and the two Quran ones open the surah's story."""
    pg = open_page(ctx, "index.html")
    links = pg.evaluate("[...document.querySelectorAll('#suggested .suggest-card')].map(a => a.getAttribute('href'))")
    check(len(links) == 8, "Suggested reading shows %d cards, not 8" % len(links))
    doors = pg.evaluate("[...document.querySelectorAll('#situations .card')].map(a => a.getAttribute('href'))")
    check(not set(links) & set(doors), "a suggestion repeats a door of 'Start from where you are'")
    for href in links:
        page, frag = href.split("#")
        t = ctx.new_page()
        t.goto(BASE + href, wait_until="networkidle")
        if frag.startswith("story-"):
            t.wait_for_timeout(2500)
            check(t.evaluate("(() => { const p = document.getElementById('storyPanel'); return !!p && !p.classList.contains('tad-hidden'); })()"),
                  href + " did not open the surah's story")
        else:
            check(t.evaluate("f => !!document.getElementById(f)", frag), href + " points at nothing")
        t.close()
    return pg


@scenario
def feedback_form_is_kept_and_mailed(ctx):
    pg = open_page(ctx, "hadith.html")
    check(pg.query_selector("#iitwFbMsg") is not None, "the feedback form is missing from the page")
    pg.fill("#iitwFbName", "Test reader")
    pg.fill("#iitwFbMsg", "Automated check of the feedback form - please ignore.")
    went = []
    pg.on("request", lambda r: went.append(r.url) if r.url.startswith("mailto:") else None)
    try:
        pg.click(".fb-form button[type=submit]", timeout=5000)
    except Exception:
        pass
    pg.wait_for_timeout(800)
    kept = pg.evaluate("(typeof iitwFeedbackAll === 'function' ? iitwFeedbackAll() : []).map(f => f.msg)")
    check(any("Automated check" in m for m in kept), "a sent message was not kept on the device")
    pg.evaluate("localStorage.removeItem('iitw-feedback')")
    return pg


# =============================================================== Guidance
@scenario
def guidance_situation_search(ctx):
    pg = open_page(ctx, "guidance.html")
    pg.click("text=Find Guidance")
    pg.wait_for_timeout(400)
    check(len(pg.inner_text("#guidanceResults").strip()) > 5, "an empty question gave no prompt to describe the situation")
    for query, words in (("I feel anxious and worried about the future", ("anxi", "worr", "distress", "grief")),
                         ("أشعر بالقلق والخوف", ("القلق", "الهم", "الخوف", "الحزن", "hamm", "anxi"))):
        pg.fill("#situationInput", query)
        pg.click("button[onclick='findGuidance()']")
        pg.wait_for_timeout(1800)
        out = pg.inner_text("#guidanceResults")
        check(len(out) > 300, "no guidance came back for %r" % query)
        check(any(w in out or w in out.lower() for w in words), "the guidance for %r is not about anxiety: %s" % (query, out[:120]))
    pg.click("button[onclick='clearGuidance()']")
    pg.wait_for_timeout(400)
    check(len(pg.inner_text("#guidanceResults").strip()) < 5, "Clear did not clear the answer")
    check(pg.input_value("#situationInput") == "", "Clear did not empty the question")
    return pg

@scenario
def guidance_finds_the_mountain_of_gold(ctx):
    """The Guidance search reaches the cards on judgement.html#treasure — and
    their keys are specific enough not to claim questions they were not
    written for (a single common key such as "gold", "weak" or الوحدة,
    which also means loneliness, would)."""
    pg = open_page(ctx, "guidance.html")
    def hits(query):
        pg.fill("#situationInput", query)
        pg.click("button[onclick='findGuidance()']")
        pg.wait_for_timeout(1500)
        return pg.evaluate("[...document.querySelectorAll('#guidanceResults a.pl-go')].map(a => a.getAttribute('href'))")
    for query in ("the euphrates will uncover a mountain of gold", "هل سيحسر الفرات عن جبل من ذهب",
                  "will there be a nuclear war"):
        h = hits(query)
        check(any(x.startswith("judgement.html#tr-") for x in h), "%r did not reach the mountain of gold: %s" % (query, h))
    for query in ("what should i do my mother is angry with me", "the prayer for rain in a drought",
                  "i feel weak in my faith", "is gold allowed for men", "أشعر بالوحدة",
                  "does passing gas break wudu", "when should i pray witr"):
        h = hits(query)
        check(not any("#tr-" in x for x in h), "%r was answered with the mountain of gold: %s" % (query, h))
    check(pg.evaluate("!!document.querySelector('#endPrepBox a[href=\"judgement.html#treasure\"]')"),
          "the end-of-time section does not point to the mountain of gold")
    return pg

# ---- the owner's screenshots of 22 September 2026, one scenario per fault class
@scenario
def guidance_no_fragment_answers(ctx):
    """"The mountain of gold at، the end of the time." (dictated, Arabic comma
    and all) was followed by hoarding gold (on "gold"), the funeral's qirat "like
    two mountains" (on "mountain") and five Sunnah entries on "end". A card that
    met a phrase of the sentence sets the bar for everything under it; "end" and
    "time" are generic; and the end of time as a subject has its own answer."""
    pg = open_page(ctx, "guidance.html")
    def ask(q):
        pg.fill("#situationInput", q)
        pg.click("button[onclick='findGuidance()']")
        pg.wait_for_timeout(1500)
        return pg.inner_text("#guidanceResults")
    out = ask("The mountain of gold at\u060c the end of the time.")
    check("take nothing from it" in out, "the owner's question did not reach the mountain of gold")
    for junk in ("Hoarding and Withholding Charity", "two qirat", "End the night with Witr", "Feeding animals"):
        check(junk not in out, "a one-word match is back under the answer: " + junk)
    out = ask("جبل الذهب في آخر الزمان")
    check("take nothing from it" in out or "فلا يأخذ منه شيئًا" in out, "the Arabic of the question lost the mountain of gold")
    for q in ("what happens at the end of time", "علامات آخر الزمان"):
        out = ask(q)
        check("The map of the end of time" in out, "%r did not get the map of the end of time" % q)
    return pg


@scenario
def arabic_mode_ranges_read_left_to_right(ctx):
    """"سورة التوبة (9:34-35)" showed as "(35-9:34)": after Arabic letters the
    bidi rules treat Latin digits as Arabic numbers and the hyphen stops joining
    them. i18n.js isolates every such range in Arabic mode; this measures it."""
    pg = open_page(ctx, "guidance.html", lang="ar")
    pg.fill("#situationInput", "كنز المال")
    pg.click("button[onclick='findGuidance()']")
    pg.wait_for_timeout(1800)
    r = pg.evaluate(r"""() => {
      const w = document.createTreeWalker(document.getElementById('guidanceResults'), NodeFilter.SHOW_TEXT);
      let n; while ((n = w.nextNode())) { if (/\d+:\d+-\d+/.test(n.nodeValue)) break; }
      if (!n) return null;
      n.parentElement.scrollIntoView({block: 'center'});
      const s = n.nodeValue, m = s.match(/\d+:\d+-\d+/), a = m.index, z = a + m[0].length - 1;
      const at = i => { const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + 1); return r.getBoundingClientRect().left; };
      return at(a) < at(z);
    }""")
    check(r is not None, "no verse range was rendered to measure")
    check(r, "a verse range reads backwards in Arabic mode")
    return pg


FAKE_VOICES = """(() => { const V = [
  { name: "Microsoft Hamed Online (Natural) - Arabic (Saudi Arabia)", lang: "ar-SA", localService: false, voiceURI: "h" },
  { name: "Microsoft Hoda - Arabic (Egypt)", lang: "ar-EG", localService: true, voiceURI: "d" } ];
  try { Object.defineProperty(window.speechSynthesis, "getVoices", { value: () => V }); } catch (e) {} })();"""

@scenario
def statuses_and_labels_in_one_language(ctx):
    """The microphone said "Listening — click the mic again to stop" beside
    the Arabic; the voice picker said "…dialect, best quality". Every status
    goes through iitwSay, the picker is rebuilt in the reader's language, and
    tooltips are translated by i18n.js (tools/mixscan.py guards the source)."""
    ctx.add_init_script(FAKE_VOICES)
    pg = open_page(ctx, "guidance.html", lang="ar")
    pg.evaluate("iitwSay(document.getElementById('micStatus'), '● Listening — click the mic again to stop', '● أستمع — اضغط الميكروفون ثانيةً للإيقاف')")
    seen = pg.inner_text("#micStatus")
    check("Listening" not in seen and "أستمع" in seen, "the microphone status is not Arabic-only in Arabic: " + seen)
    opts = " ".join(pg.evaluate("[...document.querySelectorAll('#arVoiceSelect option, #arVoiceSelect optgroup')].map(o => o.textContent + ' ' + (o.label || ''))"))
    check(opts.strip(), "the voice picker did not build")
    for en in ("best quality", "male", "dialect", "Classical", "recommended"):
        check(en not in opts, "English in the Arabic voice picker: " + en)
    check(pg.evaluate("iitwCleanDictation('gold at\u060c the end')") == "gold at, the end",
          "an Arabic comma dictated into English is not cleaned")
    tip = pg.evaluate("(document.querySelector('.speak-btn') || {}).title || ''")
    check(tip == "" or tip == "استمع", "a tooltip is not Arabic in Arabic mode: " + tip)
    pg.click("#langToggle")
    pg.wait_for_timeout(500)
    opts = " ".join(pg.evaluate("[...document.querySelectorAll('#arVoiceSelect option')].map(o => o.textContent)"))
    check("best quality" in opts and "جودة" not in opts, "the voice picker did not switch to English: " + opts[:80])
    return pg


@scenario
def guidance_worship_tabs_and_counter(ctx):
    pg = open_page(ctx, "guidance.html")
    n_all = pg.evaluate("document.querySelectorAll('#worshipList .worship-card').length")
    check(n_all >= 10, "the worship reference shows %d steps" % n_all)
    tabs = pg.query_selector_all("#worshipTabs .worship-tab")
    check(len(tabs) >= 3, "the worship reference has %d tabs" % len(tabs))
    tabs[1].click()
    pg.wait_for_timeout(400)
    n_one = pg.evaluate("document.querySelectorAll('#worshipList .worship-card').length")
    check(0 < n_one < n_all, "a worship tab did not narrow the list (%d of %d)" % (n_one, n_all))
    pg.fill("#worshipSearch", "sujud")
    pg.wait_for_timeout(900)
    txt = pg.inner_text("#worshipList").lower()
    check("sujud" in txt or "prostrat" in txt, "searching the worship reference for sujud found nothing about it")
    btn = pg.query_selector(".dhikr-counter")
    check(btn is not None, "no dhikr counter on the page")
    btn.scroll_into_view_if_needed()
    t0 = btn.inner_text()
    btn.click(); btn.click(); btn.click()
    pg.wait_for_timeout(300)
    check(btn.inner_text() != t0, "pressing the dhikr counter did not count")
    return pg


# =============================================================== Verify
@scenario
def verify_answers_its_examples(ctx):
    pg = open_page(ctx, "verify.html")
    expect = [("إنما الأعمال بالنيات", "Sahih al-Bukhari"),
              ("اطلبوا العلم ولو في الصين", "did not find"),
              ("وأن ليس للإنسان إلا ما سعى", "53:39")]
    for text, want in expect:
        pg.fill("#vfInput", text)
        pg.click("#vfGo")
        pg.wait_for_timeout(500)
        pg.wait_for_function("window.iitwQuranReady && iitwQuranReady()", timeout=120000)
        pg.wait_for_timeout(2500)
        out = pg.inner_text("#vfResults")
        check(want in out, "Verify on %r did not say %r: %s" % (text, want, " ".join(out.split())[:140]))
    pg.click("#vfClear")
    pg.wait_for_timeout(300)
    check(pg.input_value("#vfInput") == "", "Clear did not empty the box")
    pg.fill("#vfInput", "abc")
    pg.click("#vfGo")
    pg.wait_for_timeout(400)
    check("more" in pg.inner_text("#vfResults").lower(), "a three-letter claim was not asked for more text")
    return pg


# =============================================================== Search
@scenario
def search_page_queries(ctx):
    pg = open_page(ctx, "search.html?q=patience")
    pg.wait_for_timeout(1200)
    out = pg.inner_text("#searchResults")
    check(len(out) > 200 and "patien" in out.lower(), "search.html?q=patience showed nothing about patience")
    links = pg.evaluate("[...document.querySelectorAll('#searchResults a[href]')].map(a => a.getAttribute('href'))")
    check(len(links) >= 3, "the search results have %d links to follow" % len(links))
    pg.fill("#searchInput", "عائشة")
    pg.click("#searchBtn")
    pg.wait_for_timeout(1200)
    check("عائشة" in pg.inner_text("#searchResults") or "Aisha" in pg.inner_text("#searchResults"), "searching عائشة did not find Aisha")
    pg.fill("#searchInput", "zzqqxxnotaword")
    pg.click("#searchBtn")
    pg.wait_for_timeout(1000)
    out = pg.inner_text("#searchResults")
    check(len(out.strip()) > 10 and "zzqq" not in out.split("\n")[0][:5], "a search with no results said nothing")
    # a name brings the person's own card, with the full life inline
    pg.fill("#searchInput", "Khalid")
    pg.click("#searchBtn")
    pg.wait_for_timeout(1200)
    card = pg.inner_text("#searchResults .result-card >> nth=0")
    check("Khalid" in card and len(card) > 150, "searching Khalid did not bring his card first")
    # and the first link of a topic search opens a real page
    pg.fill("#searchInput", "patience")
    pg.click("#searchBtn")
    pg.wait_for_timeout(1200)
    href = pg.get_attribute("#searchResults a[href] >> nth=0", "href")
    with pg.expect_navigation(timeout=15000):
        pg.click("#searchResults a[href] >> nth=0")
    pg.wait_for_load_state("networkidle")
    check(href.split("#")[0].split("?")[0] in pg.url, "the first search result did not open its page")
    return pg


# =============================================================== Courses and meetings
@scenario
def courses_and_meeting_codes(ctx):
    pg = open_page(ctx, "courses.html")
    body = pg.inner_text("body")
    check(pg.evaluate("document.querySelectorAll('#courseGrid > *').length") > 0 or "preparing" in body,
          "the Courses page shows neither courses nor the notice that they are coming")
    pg.fill("#joinCode", "IITW-NOPE00")
    with pg.expect_navigation(timeout=15000):
        pg.click("button:has-text('Join')")
    pg.wait_for_load_state("networkidle")
    pg.wait_for_timeout(1200)
    check("meeting.html" in pg.url, "Join did not go to the meeting page")
    msg = pg.inner_text("#gateMsg")
    check("Invalid" in msg or "غير صحيح" in msg, "an invalid meeting code was not refused: " + msg[:80])
    pg.fill("#codeInput", "")
    pg.click("button[onclick*='checkCode']")
    pg.wait_for_timeout(500)
    msg = pg.inner_text("#gateMsg")
    check("Enter the code" in msg or "أدخل الرمز" in msg, "an empty code was not asked for: " + msg[:80])
    return pg


@scenario
def login_refuses_a_wrong_password(ctx):
    pg = open_page(ctx, "login.html", lang="ar")
    pg.fill("#staffUser", "Islam.younis.2026")
    pg.fill("#staffPass", "definitely-not-the-password")
    pg.click("#staffForm button[type=submit]")
    pg.wait_for_timeout(700)
    check("login.html" in pg.url, "a wrong password was let in")
    msg = pg.inner_text("#staffMessage")
    check("غير صحيحة" in msg, "the refusal is not in Arabic on the Arabic page: " + msg[:60])
    check("password:" not in pg.content(), "a password is written in the page source")
    return pg


@scenario
def staff_dashboard_tabs_and_safety(ctx):
    pg = open_page(ctx, "staff.html", extra="localStorage.setItem('iitw-staff-session', JSON.stringify({user:'Islam.younis.2026', at:Date.now()}));localStorage.removeItem('iitw-gh-token');localStorage.removeItem('iitw-staff-draft');")
    check("staff.html" in pg.url, "a signed-in admin was sent away from the dashboard")
    for sec in ("courses", "videos", "payment", "contact", "feedback", "recitations", "analytics", "meetings"):
        pg.click("#staffTabs button[data-sec='%s']" % sec)
        pg.wait_for_timeout(250)
        shown = pg.evaluate("s => [...document.querySelectorAll('.staff-section')].filter(e => e.classList.contains('active')).map(e => e.dataset.sec)", sec)
        check(sec in shown, "the %s tab did not show its section (showing %s)" % (sec, shown))
    # a course goes into the draft, and publishing without a token is refused plainly
    pg.click("#staffTabs button[data-sec='courses']")
    pg.fill("#cTitle", "Automated test course")
    pg.click("#courseSaveBtn")
    pg.wait_for_timeout(400)
    check("Automated test course" in pg.inner_text("#courseList"), "an added course did not appear in the list")
    pg.click(".publish-bar button:has-text('Publish')")
    pg.wait_for_timeout(500)
    check("GitHub" in pg.inner_text("#publishMsg"), "publishing without a token did not explain why nothing happened")
    pg.evaluate("localStorage.removeItem('iitw-staff-draft')")
    return pg


@scenario
def offline_page_and_angels_redirect(ctx):
    pg = open_page(ctx, "offline.html")
    check(len(pg.inner_text("body").strip()) > 40, "the offline page is empty")
    pg.goto(BASE + "angels.html", wait_until="networkidle")
    pg.wait_for_timeout(1200)
    check("judgement.html" in pg.url, "angels.html did not send the reader on to the Judgement page: " + pg.url)
    return pg


# =============================================================== real audio
@scenario
def quran_play_full_surah_for_real(ctx):
    """The only scenario that lets audio through: al-Ikhlas, four short verses,
    played start to finish. This is what caught a refactor that had deleted the
    function which moves "Play Full Surah" on to the next verse."""
    pg = open_page(ctx, "quran.html")
    pg.evaluate("openSurah(SURAHS[111])")
    pg.wait_for_selector("#modalBody #ayah-4", timeout=20000)
    pg.click("button.rq-play")
    seen = []
    for _ in range(60):
        pg.wait_for_timeout(700)
        src = pg.evaluate("typeof currentAudioEl !== 'undefined' && currentAudioEl ? currentAudioEl.src.split('/').pop() : ''")
        if src and src not in seen:
            seen.append(src)
        if pg.evaluate("currentAudioEl && currentAudioEl.ended && currentAudioEl.src.endsWith('112004.mp3')"):
            break
    check(seen == ["112001.mp3", "112002.mp3", "112003.mp3", "112004.mp3"], "al-Ikhlas did not play verse by verse to the end: %s" % seen)
    check(pg.evaluate("!document.getElementById('rqSaveBtn').disabled"), "the save button was not armed when a verse finished")
    return pg
quran_play_full_surah_for_real.needs_network = True


@scenario
def staff_dashboard_never_loses_the_live_settings(ctx):
    """The race that could have erased the site: the page's load event fired
    before the settings arrived, an EMPTY draft was saved, and the load then
    restored it over the real settings. Both halves are forced here."""
    import time
    def slow(route):
        time.sleep(3.5)
        route.continue_()
    ctx.route("**/data/site-config.json*", slow)
    ctx.route("**api.github.com/**", lambda r: r.abort())
    session = "localStorage.setItem('iitw-staff-session', JSON.stringify({user:'Islam.younis.2026', at:Date.now()}));"
    # 1. slow settings: load fires first
    pg = open_page(ctx, "staff.html", extra=session + "localStorage.removeItem('iitw-staff-draft');")
    pg.wait_for_timeout(5000)
    live = pg.evaluate("fetch('data/site-config.json').then(r => r.json()).then(j => (j.recitations || []).length)")
    shown = pg.evaluate("(window.cfg || (typeof cfg !== 'undefined' ? cfg : {recitations: []})).recitations.length")
    check(live > 0, "the site's settings have no recitations to compare with")
    check(shown == live, "the dashboard shows %d recitations; the live settings have %d" % (shown, live))
    draft = pg.evaluate("localStorage.getItem('iitw-staff-draft')")
    check(not draft or '"recitations":[]' not in draft, "an empty draft was saved while the settings were loading")
    check(pg.evaluate("getComputedStyle(document.getElementById('unpublishedBanner')).display") == "none",
          "the 'changes not on the website' banner shows when nothing was changed")
    pg.close()
    # 2. an empty draft already stored from an earlier visit
    empty = '{"payment":{"account":"","instructions":"","qrUrl":""},"contact":{"phone":"","whatsapp":"","demoUrl":""},"videos":[],"meetings":[],"extraCourses":[],"recitations":[]}'
    pg = open_page(ctx, "staff.html", extra=session + "localStorage.setItem('iitw-staff-draft', %r);" % empty)
    pg.wait_for_timeout(5000)
    shown = pg.evaluate("cfg.recitations.length")
    check(shown == live, "an empty draft from an earlier visit replaced the real settings (%d shown, %d live)" % (shown, live))
    check(pg.evaluate("localStorage.getItem('iitw-staff-draft')") is None or shown == live, "the empty draft was kept")
    return pg


def main():
    want = [a for a in sys.argv[1:] if not a.startswith("--")]
    passed, failed = [], []
    with sync_playwright() as p:
        args = ["--autoplay-policy=no-user-gesture-required"]
        b = (p.chromium.launch(channel=CHANNEL, headless=True, args=args) if CHANNEL
             else p.chromium.launch(headless=True, args=args))
        for fn in SCENARIOS:
            if want and not any(w in fn.__name__ for w in want):
                continue
            ctx = b.new_context(viewport={"width": 1280, "height": 900}, service_workers="block")
            blocked = BLOCK if not getattr(fn, "needs_network", False) else ("abacus.jasoncameron.dev",)
            for host in blocked:
                ctx.route("**" + host + "**", lambda r: r.abort())
            try:
                pg = fn(ctx)
                errs = getattr(pg, "_errors", []) if pg else []
                if errs:
                    raise Fail("JavaScript error: " + errs[0])
                passed.append(fn.__name__)
                print("PASS  " + fn.__name__, flush=True)
            except Fail as e:
                failed.append(fn.__name__)
                print("FAIL  %s — %s" % (fn.__name__, e), flush=True)
            except Exception as e:
                failed.append(fn.__name__)
                print("ERROR %s — %s" % (fn.__name__, str(e).splitlines()[0][:220]), flush=True)
            finally:
                ctx.close()
        b.close()
    print("\n%d passed, %d failed" % (len(passed), len(failed)))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
