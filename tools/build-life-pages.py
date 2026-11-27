# -*- coding: utf-8 -*-
"""The Quran in Your Life — القرآن في حياتك.

The owner asked (26 November 2026) for a page that teaches how to LIVE by the
Quran: "Muslims nowadays are treating the Quran like a holy thing, not as a
holy thing that we need to understand and learn and think about to actually
implement it in our lives." Every verse here is laid out the way he asked:
the verse, what it says, how to live it, and simple everyday examples.

    js/life/_index.js     the hub's introduction, and the order of the parts
                          and sections
    js/life/<id>.js       one area of life each — its verses and their notes

From those this writes:

    life.html             the hub: why live by the Quran, and every section
    life/<id>.html        one page per area of life

THE VERSES ARE NEVER TYPED. Each card cuts its verse from js/quran-text (the
Madinah Mushaf's own text, KFGQPC Hafs, and its English) by surah and verse
number, exactly as the verse pages do — consecutive verses joined with " ۝ ".
A source file carries only the reference ("31:13", "2:262-264").

Where a verse has its own explanation page (verse/<s>-<a>.html, from
js/tadabbur.js), the card links to it instead of repeating it.

    python tools/build-life-pages.py            write the pages
    python tools/build-life-pages.py --check    exit 1 if a page is out of date
                                                or a source entry is broken
    python tools/build-life-pages.py --counts   exit 1 if the home card, the
                                                Recently Added blurb or their
                                                Arabic state the wrong number
                                                of verses or areas (run by
                                                check-counts.sh)
    python tools/build-life-pages.py --set-counts  write the real numbers into
                                                those six places (after adding
                                                verses or a section)

Run by bump-version.sh after build-verse-pages.py (it borrows that file's
shell, so a new nav link reaches these pages the same way).
"""
import html, importlib.util, io, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("bvp", os.path.join(HERE, "build-verse-pages.py"))
bvp = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(bvp)

REPO = bvp.REPO
SITE = bvp.SITE
# A companion's words (Ibn Mas'ud explaining a verse) are not a hadith of the
# Prophet ﷺ, and the badge must not say they are.
bvp.TAD_STRENGTH.setdefault("athar", ("A companion's words — see reference",
                                      "قولُ صحابيّ — انظر المرجع", "t-tafsir"))
DATA = os.path.join(REPO, "js", "life")
OUT = os.path.join(REPO, "life")
NL = "\n"

AR_DIGITS = bvp.ar_digits


# ---------------------------------------------------------------- loading
def load_entry(path, key):
    """The object assigned in  (window.LIFE = window.LIFE || {})["key"] = {...}"""
    s = io.open(path, encoding="utf-8").read()
    m = re.search(r'\[\s*"%s"\s*\]\s*=\s*' % re.escape(key), s)
    if not m:
        raise SystemExit('%s: no ["%s"] = {...} in it' % (path, key))
    return bvp.js_literal(s, m.end())


def load():
    index = load_entry(os.path.join(DATA, "_index.js"), "_index")
    sections = []
    for part in index["parts"]:
        # --draft builds what is written so far; without it a missing section
        # is an error, so a page can never go out with a hole in it
        if "--draft" in sys.argv:
            part["sections"] = [sid for sid in part["sections"]
                                if os.path.exists(os.path.join(DATA, sid + ".js"))]
        for sid in part["sections"]:
            sec = load_entry(os.path.join(DATA, sid + ".js"), sid)
            if sec.get("id") != sid:
                raise SystemExit("js/life/%s.js: its id says %r" % (sid, sec.get("id")))
            sec["_part"] = part
            sections.append(sec)
    index["parts"] = [p for p in index["parts"] if p["sections"]]
    return index, sections


# ---------------------------------------------------------------- verses
_text = {}


def surah(n):
    if n not in _text:
        _text[n] = bvp.surah_text(n)
    return _text[n]


def parse_ref(v):
    m = re.fullmatch(r"\s*(\d{1,3}):(\d{1,3})(?:\s*-\s*(\d{1,3}))?\s*", v)
    if not m:
        raise ValueError("not a verse reference: %r" % v)
    s, a1 = int(m.group(1)), int(m.group(2))
    a2 = int(m.group(3)) if m.group(3) else a1
    if not (1 <= s <= 114):
        raise ValueError("no surah %d" % s)
    n = len(surah(s)["a"])
    if not (1 <= a1 <= a2 <= n):
        raise ValueError("%s: surah %d has %d verses" % (v, s, n))
    return s, a1, a2


def verses_in(items):
    """How many VERSES the cards hold — not how many cards. A card can hold a
    run (59:22-24 is three verses), and the tiles said "17 verses" over cards
    that held 23."""
    return sum(a2 - a1 + 1 for _, a1, a2 in (parse_ref(it["v"]) for it in items))


def verse_ar(s, a1, a2):
    return " ۝ ".join(surah(s)["a"][a - 1].replace(" ", " ").strip() for a in range(a1, a2 + 1))


def verse_en(s, a1, a2):
    e = surah(s).get("e") or []
    parts = []
    for a in range(a1, a2 + 1):
        t = (e[a - 1] if a - 1 < len(e) else "") or ""
        parts.append(("(%d) " % a if a2 > a1 else "") + t.strip())
    return " ".join(parts)


def ref_en(meta, s, a1, a2):
    return "%s %d:%d%s" % (meta["name"], s, a1, ("–%d" % a2) if a2 > a1 else "")


def ref_ar(meta, s, a1, a2):
    if a2 == a1:
        return "سورة %s، الآية %s" % (meta["arabic"], AR_DIGITS(a1))
    if a2 == a1 + 1:
        return "سورة %s، الآيتان %s و%s" % (meta["arabic"], AR_DIGITS(a1), AR_DIGITS(a2))
    return "سورة %s، الآيات %s–%s" % (meta["arabic"], AR_DIGITS(a1), AR_DIGITS(a2))


# ---------------------------------------------------------------- quoting
# A verse quoted INSIDE a sentence is never typed either. The source writes
#   {q 3:134 5-9}   words 5..9 of 3:134 (numbered as tools/quran-cut.py's
#                   words() prints them, from 0)
#   {q 112:1}       the whole verse
# and the page gets ﴿…﴾ with the Mushaf's own letters.
#   {q 4:19 21-22 وعاشروهن}   a word range ALWAYS names its first word, in
#                   plain letters: a word number is easy to get wrong (15-16
#                   was written for this phrase first, and is a different
#                   phrase), and the build stops if the word does not match.
QMARK = re.compile(r"\{q (\d{1,3}):(\d{1,3})(?: (\d{1,3})-(\d{1,3}) ([^\s{}]+))?\}")
_MARKS = re.compile("[ؐ-ًؚ-ٰٟۖ-ۭـ]")


def plain_word(w):
    """The word's consonants, for comparing a hint with the Mushaf's word. The
    alefs go: the Mushaf writes many long a's as a small mark (ٱلۡكَٰظِمِينَ)
    where ordinary spelling writes an alef (الكاظمين) — the same word. A word
    number pointing at a DIFFERENT word still differs in its consonants."""
    w = _MARKS.sub("", w)
    w = re.sub("[ٱآأإا]", "", w)
    return w.replace("ى", "ي")
# The Madinah Mushaf's own marks (the small sukun ۡ, the wasla ٱ) never occur
# in ordinary Arabic — so a source field holding one, outside a {q} marker,
# holds typed Quran text. The build stops on it.
#   And the Quran brackets themselves: only the generator writes ﴿ ﴾, so a
#   source field holding one holds a typed quotation. (The small-sukun test
#   alone missed «وَكَانَ أَبُوهُمَا صَٰلِحٗا», which has none — its open
#   tanween ٗ is the Madinah mark there, so that is checked too.)
MADINAH = re.compile("[ۡٱٖٗٞۥۦ﴾﴿]")


def qwords(s, a):
    return surah(s)["a"][a - 1].replace(" ", " ").strip().split()


def qcut(m):
    s, a = int(m.group(1)), int(m.group(2))
    w = qwords(s, a)
    if m.group(3):
        w = w[int(m.group(3)): int(m.group(4)) + 1]
    return "﴿" + " ".join(w) + "﴾"


# Quran TYPED from memory, in ordinary spelling, has none of those marks — and
# the first nine sections of this page held about 190 such runs (Yusuf's
# «لا تثريب عليكم اليوم…», whole verses retold word for word in plain
# letters) before this test existed. So every field is also compared, word by
# word, with the whole Mushaf: four words in a row that stand in the Quran in
# that order are a quotation, and a quotation is cut ({q …}) or put in your
# own words. Both sides are reduced to bare letters first (no marks, no alefs
# or hamzas, ى = ي, ة = ه; the Mushaf's و and small ya that spell a long a and
# a ي read as such), so a difference of spelling cannot hide a quotation.
#   A hadith's own words may echo the Quran for a few words — the Prophet ﷺ
# spoke its language: «لا يكلّمهم الله يوم القيامة», and «من كان يؤمن بالله
# واليوم الآخر», six words that are also 65:2 — so in a hadith's text the run
# must reach eight words before it counts. (Where a hadith recites a verse,
# the card says so — «ثم تلا هذه الآية» — and does not type the verse.)
RUN, RUN_HADITH = 4, 8
_grams = {}
# The words of the shahada stand in the Quran (37:35, 47:19), but a sentence
# that says a man «يشهد أن لا إله إلا الله» states the creed; it does not
# quote a verse. Only formulas said as creed or dhikr belong in this list —
# each added by hand, never a phrase retold from a verse.
SAID_AS_CREED = ["أن لا إله إلا الله", "لا إله إلا الله",
                 # the words the Prophet ﷺ taught for anger (al-Bukhari 6115)
                 "أعوذ بالله من الشيطان الرجيم"]


def creed_spans(t):
    """(start, end) of every creed formula in the word list t. A run that lies
    wholly inside one is the creed; a run that reaches past it — «فاعلم أنه لا
    إله إلا الله واستغفر لذنبك», a verse — is still a quotation."""
    spans = []
    for c in (tuple(bare(c)) for c in SAID_AS_CREED):
        spans += [(i, i + len(c)) for i in range(len(t) - len(c) + 1) if tuple(t[i:i + len(c)]) == c]
    return spans


def bare(text, mushaf=False):
    if mushaf:
        text = text.replace("وٰ", "ا").replace("ۧ", "ي")
    text = _MARKS.sub("", text)
    # every seat of the hamza goes too: the Mushaf often writes it on a bare
    # stroke (سَيِّـَٔاتِ, رُءُوس) where ordinary spelling writes ئ or ؤ (سيّئات,
    # رؤوس), and «typed» words were slipping past on that difference alone
    text = re.sub("[ٱآأإاءؤئ]", "", text)
    text = text.replace("ى", "ي").replace("ة", "ه")
    return [w for w in re.split(r"[^ء-ي]+", text) if w]


def quran_grams(n):
    if n not in _grams:
        g = {}
        for s in range(1, 115):
            for a, v in enumerate(surah(s)["a"], 1):
                t = bare(v.replace(" ", " "), True)
                for i in range(len(t) - n + 1):
                    g.setdefault(tuple(t[i:i + n]), (s, a))
        _grams[n] = g
    return _grams[n]


def typed_runs(text, n=RUN):
    """(words, (surah, verse)) for each run of n or more words of `text`,
    outside {q} markers, that stands in the Mushaf in that order."""
    g = quran_grams(n)
    out = []
    for seg in QMARK.sub("\x00", text or "").split("\x00"):
        t = bare(seg)
        creed = creed_spans(t)
        i = 0
        while i <= len(t) - n:
            if tuple(t[i:i + n]) in g:
                j = i + n
                while j < len(t) and tuple(t[j - n + 1:j + 1]) in g:
                    j += 1
                if not any(a <= i and j <= b for a, b in creed):
                    out.append((" ".join(t[i:j]), g[tuple(t[i:i + n])]))
                i = j
            else:
                i += 1
    return out


# Short phrases of the Quran are too short for the 4-word test, and six of
# them sat in « » — the HADITH marks — in the site's own sentences: «سمعنا
# وأطعنا» (2:285), «ميثاقًا غليظًا» (4:21), «من قريب» (4:17)… So a «…» of two
# or three words that stand together in a verse is refused too, outside a
# hadith's own text. What people SAY is not a quotation of the verse it also
# stands in; those few are listed here, by hand.
SAID_IN_MARKS = ["الحمد لله", "سبحان الله", "إن شاء الله", "ما شاء الله", "الله أكبر",
                 "بسم الله", "أستغفر الله", "لا إله إلا الله"]


def marked_quran(text):
    said = {tuple(bare(x)) for x in SAID_IN_MARKS}
    out = []
    for q in re.findall(r"«([^«»]+)»", QMARK.sub(" ", text or "")):
        t = tuple(bare(q))
        if 2 <= len(t) < RUN and t not in said and t in quran_grams(len(t)):
            out.append((q, quran_grams(len(t))[t]))
    return out


def qmark_problems(text, where, run=RUN):
    out = []
    for words, (s, a) in typed_runs(text, run):
        out.append("%s: typed Quran «%s» (%d:%d) — say it in your own words, or cut it "
                   "with {q %d:%d first-last word}" % (where, words, s, a, s, a))
    if run == RUN:      # not inside a hadith's own words
        for q, (s, a) in marked_quran(text):
            out.append("%s: «%s» is the Quran (%d:%d) in hadith marks — cut it with "
                       "{q %d:%d first-last word}" % (where, q, s, a, s, a))
    for m in QMARK.finditer(text or ""):
        s, a = int(m.group(1)), int(m.group(2))
        try:
            n = len(qwords(s, a))
        except (IndexError, ValueError, OSError, KeyError):
            out.append("%s: %s is not a verse" % (where, m.group(0)))
            continue
        if m.group(3) and not (0 <= int(m.group(3)) <= int(m.group(4)) < n):
            out.append("%s: %s — that verse has words 0-%d" % (where, m.group(0), n - 1))
        elif m.group(3):
            first = plain_word(qwords(s, a)[int(m.group(3))])
            if plain_word(m.group(5)) != first:
                out.append("%s: %s — word %s of %d:%d is %s" % (where, m.group(0), m.group(3), s, a, first))
    if MADINAH.search(QMARK.sub("", text or "")):
        out.append("%s: typed Quran text — write {q surah:verse first-last} instead" % where)
    return out


# ---------------------------------------------------------------- checking
LATIN = re.compile(r"[A-Za-z]{2,}")
ARABIC = re.compile(r"[ء-ي]")


def check_section(sec):
    """Everything a reader would trip on, before a page is written."""
    bad = []
    sid = sec.get("id")
    for k in ("title", "titleAr", "lead", "leadAr", "icon", "tile", "tileAr"):
        if not sec.get(k):
            bad.append("%s: no %s" % (sid, k))
    for k in ("lead", "leadAr", "tile", "tileAr"):
        bad += qmark_problems(sec.get(k), "%s %s" % (sid, k))
    seen = set()
    for i, it in enumerate(sec.get("items", [])):
        where = "%s #%d (%s)" % (sid, i + 1, it.get("v"))
        texts = [(k, it.get(k)) for k in ("say", "sayAr", "live", "liveAr", "note", "noteAr")]
        texts += [("ex", x) for x in it.get("ex") or []] + [("exAr", x) for x in it.get("exAr") or []]
        for hd in it.get("hadith") or []:
            texts += [("hadith " + k, hd.get(k)) for k in ("en", "ar", "src", "srcAr")]
        for k, t in texts:
            bad += qmark_problems(t, "%s %s" % (where, k), RUN_HADITH if k == "hadith ar" else RUN)
        try:
            s, a1, a2 = parse_ref(it.get("v", ""))
        except ValueError as e:
            bad.append("%s: %s" % (where, e))
            continue
        if (s, a1) in seen:
            bad.append("%s: the same verse twice in this section" % where)
        seen.add((s, a1))
        for k in ("say", "sayAr", "live", "liveAr"):
            if not it.get(k):
                bad.append("%s: no %s" % (where, k))
        ex, exar = it.get("ex") or [], it.get("exAr") or []
        if not ex or len(ex) != len(exar):
            bad.append("%s: %d examples in English, %d in Arabic" % (where, len(ex), len(exar)))
        # the Arabic half must be Arabic (a quoted «title» may stay as written)
        for k in ("sayAr", "liveAr", "noteAr"):
            t = re.sub(r"«[^«»]*»", "", it.get(k) or "")
            if t and LATIN.search(t):
                bad.append("%s: English inside %s: %r" % (where, k, LATIN.search(t).group(0)))
        for t in exar:
            t2 = re.sub(r"«[^«»]*»", "", t)
            if LATIN.search(t2):
                bad.append("%s: English inside an Arabic example: %r" % (where, LATIN.search(t2).group(0)))
        for h in it.get("hadith") or []:
            for k in ("en", "ar", "src", "srcAr"):
                if not h.get(k):
                    bad.append("%s: a hadith with no %s" % (where, k))
            if h.get("srcAr") and LATIN.search(re.sub(r"«[^«»]*»", "", h["srcAr"])):
                bad.append("%s: English inside a hadith's Arabic source" % where)
    return bad


# ---------------------------------------------------------------- rendering
def esc(t):
    return html.escape(t or "", quote=False)


def two(en, ar, tag="span"):
    return ('<%s class="en-only">%s</%s><%s class="ar-only" dir="rtl">%s</%s>'
            % (tag, en, tag, tag, ar, tag))


def bold(t):
    return QMARK.sub(qcut, re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", esc(t)))


def paras(t, rtl=False):
    if not t:
        return ""
    return "".join('<p%s>%s</p>' % (' dir="rtl"' if rtl else "", bold(p).replace("\n", "<br>"))
                   for p in str(t).split("\n\n"))


LISTEN = ('<div class="vp-listen lq-listen" data-surah="%d" data-ayah="%d" data-to="%d">'
          '<button type="button" class="vp-listen-btn"><span aria-hidden="true">▶</span> '
          '<span class="en-only">Listen</span><span class="ar-only" dir="rtl">استمع</span></button>'
          '<p class="vp-listen-msg" role="status" hidden></p></div>')


def card(it, surahs, explained, sid):
    s, a1, a2 = parse_ref(it["v"])
    meta = surahs[s]
    anchor = "v-%d-%d" % (s, a1)
    h = ['<article class="lq-card" id="%s">' % anchor]
    h.append('<div class="tad-verse-ar lq-verse" dir="rtl" lang="ar"><span class="q-hafs">﴿%s﴾</span></div>'
             % verse_ar(s, a1, a2))
    h.append('<p class="lq-ref">%s</p>' % two(ref_en(meta, s, a1, a2), ref_ar(meta, s, a1, a2)))
    h.append(LISTEN % (s, a1, a2))
    en = verse_en(s, a1, a2)
    if en:
        h.append('<p class="lq-en en-only">“%s”</p>' % esc(en))
    h.append('<div class="lq-say"><div class="lq-label">💬 %s</div>%s%s</div>'
             % (two("What it says", "ماذا تقول"), '<div class="en-only">' + paras(it["say"]) + '</div>',
                '<div class="ar-only">' + paras(it["sayAr"], True) + '</div>'))
    h.append('<div class="lq-live"><div class="lq-label">🌱 %s</div>%s%s</div>'
             % (two("Live it", "كيف تعيشها"), '<div class="en-only">' + paras(it["live"]) + '</div>',
                '<div class="ar-only">' + paras(it["liveAr"], True) + '</div>'))
    lab = ("For example", "مثال من يومك") if len(it["ex"]) == 1 else ("For example", "أمثلة من يومك")
    h.append('<div class="lq-ex"><div class="lq-label">☕ %s</div>'
             '<ul class="en-only">%s</ul><ul class="ar-only" dir="rtl">%s</ul></div>'
             % (two(*lab), "".join("<li>%s</li>" % bold(x) for x in it["ex"]),
                "".join("<li>%s</li>" % bold(x) for x in it["exAr"])))
    for hd in it.get("hadith") or []:
        h.append('<div class="lq-hadith"><div class="lq-label">📜 %s</div>'
                 '<div class="en-only">%s</div><div class="ar-only" dir="rtl">%s</div>'
                 '<div class="tad-ref en-only">%s</div><div class="tad-ref ar-only" dir="rtl">%s</div>%s</div>'
                 % (two("From the Sunnah", "من السنّة"), paras(hd["en"]), paras(hd["ar"], True),
                    esc(hd["src"]), esc(hd["srcAr"]), bvp.badge(hd.get("s", "hadith"))))
    if it.get("note"):
        h.append('<div class="lq-note">%s%s</div>'
                 % ('<div class="en-only">' + paras(it["note"]) + '</div>',
                    '<div class="ar-only">' + paras(it.get("noteAr"), True) + '</div>'))
    links = []
    own = next(((s, a) for a in range(a1, a2 + 1) if (s, a) in explained), None)
    if own:
        links.append('<a href="verse/%d-%d.html">%s</a>'
                     % (own[0], own[1], two("Read the full explanation →", "اقرأ الشرح كاملًا ←")))
    links.append('<a href="quran.html#surah-%d-%d">%s</a>'
                 % (s, a1, two("Open in the Quran reader", "افتحها في المصحف")))
    h.append('<p class="lq-links">%s</p>' % " · ".join(links))
    h.append("</article>")
    return "".join(h)


def crumbs(sec=None):
    root = '<a href="life.html">%s</a>' % two("The Quran in your life", "القرآن في حياتك")
    if not sec:
        return ""
    return '<nav class="vp-crumbs">%s › %s</nav>' % (root, two(esc(sec["title"]), esc(sec["titleAr"])))


def section_body(sec, prev, nxt, surahs, explained):
    n = verses_in(sec["items"])
    h = ['<section class="lq-page"><div class="container">', crumbs(sec)]
    h.append('<h1 class="lq-title"><span aria-hidden="true">%s</span> %s</h1>'
             % (sec["icon"], two(esc(sec["title"]), esc(sec["titleAr"]))))
    h.append('<div class="lq-lead">%s%s</div>'
             % ('<div class="en-only">' + paras(sec["lead"]) + '</div>',
                '<div class="ar-only">' + paras(sec["leadAr"], True) + '</div>'))
    chips = "".join('<a href="life/%s.html#v-%d-%d">%s</a>'
                    % ((sec["id"],) + parse_ref(it["v"])[:2] + (two(it["v"], AR_DIGITS(it["v"])),))
                    for it in sec["items"])
    h.append('<nav class="lq-chips" aria-label="Verses in this section">'
             '<span class="lq-count">%s</span>%s</nav>'
             % (two("%d verses in this section:" % n if n != 1 else "1 verse:",
                    ("%s في هذا القسم:" % arabic_count(n))), chips))
    for it in sec["items"]:
        h.append(card(it, surahs, explained, sec["id"]))
    if sec.get("see"):
        h.append('<div class="lq-see"><div class="lq-label">🔗 %s</div><ul>%s</ul></div>'
                 % (two("More on this elsewhere on the site", "وفي الموقع أيضًا"),
                    "".join('<li><a href="%s">%s</a></li>' % (x["href"], two(esc(x["en"]), esc(x["ar"])))
                            for x in sec["see"])))
    pager = ['<nav class="vp-pager lq-pager">']
    if prev:
        pager.append('<a href="life/%s.html">%s</a>' % (prev["id"], two("← " + esc(prev["title"]), esc(prev["titleAr"]) + " →")))
    pager.append('<a href="life.html" class="vp-reader">%s</a>' % two("All areas of life", "كلّ أبواب الحياة"))
    if nxt:
        pager.append('<a href="life/%s.html">%s</a>' % (nxt["id"], two(esc(nxt["title"]) + " →", "← " + esc(nxt["titleAr"]))))
    pager.append("</nav>")
    h.append("".join(pager))
    h.append("</div></section>")
    return "\n".join(h)


def arabic_count(n):
    if n == 1:
        return "آية واحدة"
    if n == 2:
        return "آيتان"
    if 3 <= n <= 10:
        return "%s آيات" % AR_DIGITS(n)
    return "%s آية" % AR_DIGITS(n)


def hub_body(index, sections, surahs, explained):
    h = ['<section class="lq-page lq-hub"><div class="container">']
    h.append('<h1 class="lq-title">%s</h1>' % two(esc(index["title"]), esc(index["titleAr"])))
    h.append('<div class="lq-lead">%s%s</div>'
             % ('<div class="en-only">' + paras(index["lead"]) + '</div>',
                '<div class="ar-only">' + paras(index["leadAr"], True) + '</div>'))
    # the contents first, so a reader who came for one thing reaches it at once
    h.append('<nav class="lq-parts" aria-label="Areas of life">')
    for part in index["parts"]:
        h.append('<div class="lq-part"><h2>%s</h2><div class="lq-grid">' % two(esc(part["title"]), esc(part["titleAr"])))
        for sid in part["sections"]:
            sec = next(x for x in sections if x["id"] == sid)
            h.append('<a class="lq-tile" href="life/%s.html"><span class="lq-tile-icon" aria-hidden="true">%s</span>'
                     '<span class="lq-tile-title">%s</span><span class="lq-tile-lead">%s</span>'
                     '<span class="lq-tile-count">%s</span></a>'
                     % (sid, sec["icon"], two(esc(sec["title"]), esc(sec["titleAr"])),
                        two(esc(sec["tile"]), esc(sec["tileAr"])),
                        two("%d verses" % verses_in(sec["items"]), arabic_count(verses_in(sec["items"])))))
        h.append("</div></div>")
    h.append("</nav>")
    # why live by it: the introduction, in the Quran's own words
    h.append('<div class="lq-intro"><h2>%s</h2>' % two(esc(index["whyTitle"]), esc(index["whyTitleAr"])))
    for it in index["why"]:
        h.append(card(it, surahs, explained, "why"))
    h.append("</div>")
    h.append('<div class="lq-how"><h2>%s</h2>%s%s</div>'
             % (two(esc(index["howTitle"]), esc(index["howTitleAr"])),
                '<ol class="en-only">' + "".join("<li>%s</li>" % bold(x) for x in index["how"]) + "</ol>",
                '<ol class="ar-only" dir="rtl">' + "".join("<li>%s</li>" % bold(x) for x in index["howAr"]) + "</ol>"))
    if index.get("listen"):
        L = index["listen"]
        h.append('<div class="lq-podcast"><div class="lq-label">🎧 %s</div>'
                 '<p><a href="%s" target="_blank" rel="noopener" dir="rtl" lang="ar">%s</a></p>%s%s</div>'
                 % (two("Recommended listening", "استماعٌ نوصي به"), L["href"], esc(L["title"]),
                    '<div class="en-only">' + paras(L["note"]) + '</div>',
                    '<div class="ar-only">' + paras(L["noteAr"], True) + '</div>'))
    h.append("</div></section>")
    return "\n".join(h)


def build():
    index, sections = load()
    problems = []
    for sec in sections:
        problems += check_section(sec)
    intro = dict(id="introduction", title="-", titleAr="-", lead="-", leadAr="-", icon="-",
                 tile="-", tileAr="-", items=index["why"])
    problems += check_section(intro)
    # the hub's own words go through the same test as a card's
    hub = [("title", index.get("titleAr")), ("lead", index.get("leadAr")), ("lead", index.get("lead")),
           ("why title", index.get("whyTitleAr")), ("how title", index.get("howTitleAr")),
           ("listening note", (index.get("listen") or {}).get("noteAr"))]
    hub += [("how", x) for x in index.get("how", []) + index.get("howAr", [])]
    hub += [("part title", p.get("titleAr")) for p in index["parts"]]
    for sec in sections:
        hub += [("%s title" % sec["id"], sec.get("titleAr"))]
        hub += [("%s see" % sec["id"], x.get("ar")) for x in sec.get("see") or []]
    for k, t in hub:
        problems += qmark_problems(t, "hub " + k)
    if problems:
        raise SystemExit("js/life is not ready:\n  " + "\n  ".join(problems))
    surahs = {s["n"]: s for s in bvp.load_const(os.path.join(REPO, "js", "data.js"), "SURAHS")}
    tad = bvp.load_const(os.path.join(REPO, "js", "tadabbur.js"), "TADABBUR")
    explained = {(int(k), a["n"]) for k, v in tad.items() for a in v.get("ayat", [])}
    head, header, footer, stamp = bvp.shell()
    root_head = head.replace('\n  <base href="../" />', "", 1)

    def desc_of(entry):
        # What a search result or a shared link shows. Cut at a word, with
        # "…" — a raw slice stopped mid-word ("your chi", "وا") in both
        # languages. Same cut as the verse pages' (bvp.plain_text).
        return (bvp.plain_text(entry["lead"].split("\n")[0], 150) + " " +
                bvp.plain_text(entry["leadAr"].split("\n")[0], 140)).strip()

    files = {}
    for i, sec in enumerate(sections):
        prev = sections[i - 1] if i > 0 else None
        nxt = sections[i + 1] if i + 1 < len(sections) else None
        title = "%s — what the Quran says, and how to live it | %s" % (sec["title"], sec["titleAr"])
        files["life/%s.html" % sec["id"]] = bvp.page(
            title, desc_of(sec), SITE + "life/%s.html" % sec["id"], header, footer, head,
            section_body(sec, prev, nxt, surahs, explained), stamp, "life/%s.html" % sec["id"])
    files["life.html"] = bvp.page(
        "%s — living by the Quran, day by day | %s" % (index["title"], index["titleAr"]),
        desc_of(index),
        SITE + "life.html", header, footer, root_head,
        hub_body(index, sections, surahs, explained), stamp, "life.html")
    return files, sections


def sitemap_text(files):
    """The site's own rows, then these pages, then the verse pages' rows — the
    order build-verse-pages.py keeps too (it keeps every row that is not a
    verse page, then writes its own after them), so neither undoes the other."""
    sm = io.open(os.path.join(REPO, "sitemap.xml"), encoding="utf-8").read()
    lines = [l for l in sm.split(NL) if l.strip() and "</urlset>" not in l]
    mine = lambda l: ("/life/" in l) or ("/life.html<" in l)
    root = [l for l in lines if not mine(l) and "/verse/" not in l]
    verse = [l for l in lines if "/verse/" in l]
    rows = []
    for name in sorted(files, key=lambda n: (n != "life.html", n)):
        rows.append("  <url><loc>%s%s</loc><changefreq>monthly</changefreq><priority>%s</priority></url>"
                    % (SITE, name, "0.8" if name == "life.html" else "0.7"))
    return NL.join(root + rows + verse + ["</urlset>"]) + NL


SW_LIST = re.compile(r"const LIFE_SECTIONS = \[[^\]]*\];")


def sw_text(sections):
    """sw.js with its list of these pages brought up to date, so every section
    opens with no connection. Kept here for the same reason as the sitemap
    rows: a section added to js/life/ can then never be the one page missing
    from the offline cache."""
    sw = io.open(os.path.join(REPO, "sw.js"), encoding="utf-8").read()
    if not SW_LIST.search(sw):
        raise SystemExit("sw.js has no 'const LIFE_SECTIONS = [...];' — the life pages' offline list")
    ids = ['"%s"' % s["id"] for s in sections]
    rows = [", ".join(ids[i:i + 7]) for i in range(0, len(ids), 7)]
    block = "const LIFE_SECTIONS = [\n  " + ",\n  ".join(rows) + "\n];"
    return SW_LIST.sub(lambda m: block, sw, count=1)


def count_claims(sections, fix=False):
    """The home card, the Recently Added blurb and their Arabic in js/i18n.js
    say how many verses and areas of life this guide holds. Typed numbers have
    gone stale on this site before (see check-counts.sh), so each one is read
    out of its file and compared with the count: every verse once, however
    many sections it appears in."""
    seen = set()
    for sec in sections:
        for it in sec["items"]:
            s, a1, a2 = parse_ref(it["v"])
            seen.update((s, a) for a in range(a1, a2 + 1))
    want = (len(seen), len(sections))
    west = lambda t: int(t.translate(str.maketrans("٠١٢٣٤٥٦٧٨٩", "0123456789")))
    claims = [("index.html", r"(\d+) verses across (\d+) areas of life"),
              ("js/i18n.js", r"(\d+) verses across (\d+) areas of life"),
              ("js/i18n.js", r"([٠-٩]+) آيةً في ([٠-٩]+) بابًا"),
              ("build-recent.py", r"(\d+) verses in (\d+) sections"),
              ("js/i18n.js", r"(\d+) verses in (\d+) sections"),
              ("js/i18n.js", r"([٠-٩]+) آيةً في ([٠-٩]+) قسمًا")]
    if fix:
        # Rewrite each claim with the real numbers — in Arabic digits where
        # the claim is written in them. The English sentence is also the
        # i18n.js KEY of its Arabic, so key and translation change together.
        for path in sorted({p for p, _ in claims}):
            full = os.path.join(REPO, path)
            text = io.open(full, encoding="utf-8").read()
            for p, rx in claims:
                if p != path:
                    continue
                arabic = "٠-٩" in rx
                num = (lambda n: AR_DIGITS(n)) if arabic else str
                def put(m, num=num):
                    s = m.group(0)
                    s = s[:m.start(1) - m.start(0)] + num(want[0]) + s[m.end(1) - m.start(0):]
                    shift = len(num(want[0])) - (m.end(1) - m.start(1))
                    a, b = m.start(2) - m.start(0) + shift, m.end(2) - m.start(0) + shift
                    return s[:a] + num(want[1]) + s[b:]
                text = re.sub(rx, put, text)
            io.open(full, "w", encoding="utf-8", newline="").write(text)
    bad = 0
    for path, rx in claims:
        found = re.findall(rx, io.open(os.path.join(REPO, path), encoding="utf-8").read())
        if not found:
            print("MISSING   %s: nothing matches %s" % (path, rx))
            bad += 1
        for v, n in found:
            got = (west(v), west(n))
            ok = got == want
            bad += not ok
            print("%s %s: %d verses, %d areas%s" % ("ok       " if ok else "MISMATCH ", path, got[0], got[1],
                  "" if ok else " — the guide has %d verses in %d areas" % want))
    return 1 if bad else 0


def main():
    if "--counts" in sys.argv or "--set-counts" in sys.argv:
        return count_claims(load()[1], fix="--set-counts" in sys.argv)
    files, sections = build()
    sm = sitemap_text(files)
    sw = sw_text(sections)
    if "--check" in sys.argv:
        stale = [n for n, c in files.items()
                 if not os.path.exists(os.path.join(REPO, n)) or io.open(os.path.join(REPO, n), encoding="utf-8").read() != c]
        if io.open(os.path.join(REPO, "sitemap.xml"), encoding="utf-8").read() != sm:
            stale.append("sitemap.xml")
        if io.open(os.path.join(REPO, "sw.js"), encoding="utf-8").read() != sw:
            stale.append("sw.js")
        if stale:
            print("life pages out of date (%d): run python tools/build-life-pages.py" % len(stale))
            return 1
        print("life pages: up to date (%d)" % len(files))
        return 0
    os.makedirs(OUT, exist_ok=True)
    keep = {n.split("/")[-1] for n in files if n.startswith("life/")}
    for old in os.listdir(OUT):
        if old.endswith(".html") and old not in keep:
            os.remove(os.path.join(OUT, old))
    for name, content in files.items():
        io.open(os.path.join(REPO, name), "w", encoding="utf-8", newline="").write(content)
    io.open(os.path.join(REPO, "sitemap.xml"), "w", encoding="utf-8", newline="").write(sm)
    io.open(os.path.join(REPO, "sw.js"), "w", encoding="utf-8", newline="").write(sw)
    cards = sum(len(s["items"]) for s in sections)
    distinct = {(s, a) for sec in sections for s, a1, a2 in (parse_ref(it["v"]) for it in sec["items"])
                for a in range(a1, a2 + 1)}
    print("wrote life.html and %d section pages: %d cards, %d different verses"
          % (len(sections), cards, len(distinct)))
    return 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
