# -*- coding: utf-8 -*-
"""Is the Arabic on this site readable by an ordinary reader?

The English here was kept plain from the first day. The Arabic drifted into
the register of the old commentaries — ههنا, البتّة, فحسب, وتأمّل — which reads
like a printed tafsir and shuts out exactly the reader the page was written
for: someone who may never have opened one.

WHAT IS NEVER TOUCHED. Quran is quoted between ﴿ ﴾ and hadith between « »,
and fields that hold a verse or a hadith by themselves are listed in QUOTED.
The rewriter skips all of it. The words of the Revelation are not simplified;
only the site's own sentences about them are.

    python tools/arabicease.py             the report
    python tools/arabicease.py --fix       rewrite the safe ones
    python tools/arabicease.py --check     exit 1 if a safe one is left
    python tools/arabicease.py --list WORD where a word is used
"""
import io, json, os, re, sys, collections

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AR = re.compile(r"[ؠ-ي]")

# Fields that hold QUOTED text — a verse, a hadith, a word of the Mushaf.
QUOTED = {"ar", "w", "arText", "arabic", "verse", "text", "hadithAr", "quoteAr",
          "dua", "duaAr", "dhikrAr", "matn", "matnAr", "arCut", "cutAr", "keys"}

# `ar` IS NOT ALWAYS A QUOTATION. On golden.js, journey.js, judgement.js,
# signs.js, rise.js and others it is the site's own Arabic sentence (the
# Arabic of an English point) — and skipping every `ar` field hid البتّة,
# فحسب, ههنا and يومئذٍ in those sentences from this tool for months (found
# by hand on 25 November 2026). A quotation is written fully vowelled, the
# site's own sentence is not: measured that day over 1,688 `ar` fields, the
# site's sentences sat under 0.4 vowel marks per letter (most under 0.2) and
# the quotations over 0.7, with three fields between. So an `ar` field is a
# quotation when 0.6 or more of its letters (outside ﴿ ﴾ and « ») carry a
# mark. A vowelled hadith inside a sentence stays safe either way: a word
# written with its vowels never equals the bare word in SAFE.
MARKS = re.compile(r"[ً-ْٰۖ-ۭ]")


def quoted(key, val):
    if key not in QUOTED:
        return False
    if key != "ar":
        return True
    bare = PROTECT.sub(" ", val)
    letters = len(AR.findall(bare))
    return letters == 0 or len(MARKS.findall(bare)) / letters >= 0.6

# Replaced automatically: the meaning is the same in every context on this
# site, and the second word is the one an ordinary reader uses.
SAFE = {
    "ههنا": "هنا",
    "هٰهنا": "هنا",
    "البتّة": "أبدًا",
    "البتة": "أبدًا",
    "فحسب": "فقط",
    "حينئذٍ": "عندها",
    "حينئذ": "عندها",
    "ثمّة": "هناك",
    "ثمة": "هناك",
    "لئلّا": "حتى لا",
    "لئلا": "حتى لا",
    "غير أنّ": "لكن",
    # NOT "غير أن" (no shadda): «من غير أن» is "WITHOUT", and replacing it
    # wrote «من لكن» — nonsense — into 19 sentences of the live site
    # (tadabbur, golden-mirror, grave, hearts, prayer…), found and undone on
    # 25 November 2026. It is in WATCH now; see GUARD below for غير أنّ.
    "وتأمّل": "وانظر",
    "فتأمّل": "وانظر",
    "تأمّل": "انظر",
    # NOT "قطّ": it sits inside quoted words more than anywhere — «فما قال
    # لي أفٍّ قطّ», «ما ضرب … شيئًا قطّ», «ما أكل أحدٌ طعامًا قطّ» — and the
    # automatic run turned seven quotations of the Prophet ﷺ and his
    # companions into «أبدًا». A quotation is never plained. In WATCH now.
    "إذًا": "إذن",
    "إذاً": "إذن",
    "آنفًا": "قبل قليل",
    "آنفا": "قبل قليل",
    "قِوام": "أساس",
    "والحاصل": "والخلاصة",
    "عندئذٍ": "عندها",
    "عندئذ": "عندها",
    "آنذاك": "وقتها",
    "برمّته": "كلّه",
    "برمته": "كلّه",
    "قاطبة": "جميعًا",
    "لا ريب": "لا شكّ",
    "عوضًا عن": "بدل",
    "ناهيك عن": "ولا تنسَ",
    "لا سيّما": "وخاصّة",
    "لاسيما": "وخاصّة",
    "سِيّان": "سواء",
    "سيّان": "سواء",
    "من ثمّ": "ولذلك",
    "بيد أنّ": "لكن",
    "بيد أن": "لكن",
    "لا جرم": "لا شكّ",
    # the same words carrying the و of connection, which the word-boundary
    # rule correctly refuses to cut into
    "وغير أنّ": "ولكن",
    "وههنا": "وهنا",
    "فههنا": "فهنا",
    "وثمّة": "وهناك",
    "وبيد أنّ": "ولكن",
    "ولئلّا": "وحتى لا",
    "وحينئذٍ": "وعندها",
    "وحينئذ": "وعندها",
}

# Never replaced when the word just before is one of these: «من غير أنّ» and
# «على غير أنّ» are not "however".
GUARD = {"غير أنّ": ("من", "على", "بلا"), "وغير أنّ": ()}

# THE WORD'S EDGES INCLUDE ITS VOWEL MARKS. The edges were letters only, so a
# word whose prefix carried a vowel was cut in half: «يُتأمّل» — the ُ is not
# a letter — matched تأمّل and became «يُانظر», in four tadabbur sentences.
# And a SAFE word with a mark after it (تأمّلٌ) is a different word.
EDGE_BEFORE = r"(?<![ؠ-ْٰ])"
EDGE_AFTER = r"(?![ؠ-ْٰ])"


def guarded(text, start, word):
    """True if the word before `start` is one that changes this word's meaning."""
    words = GUARD.get(word)
    if not words:
        return False
    before = text[:start].rstrip().split()
    return bool(before) and before[-1] in words


def word_rx(word):
    return re.compile(EDGE_BEFORE + re.escape(word) + EDGE_AFTER)

# Reported, never replaced: each one needs a human, because the short word is
# right in one place and wrong in another.
#   إذ      - "when", "because", "since" - the replacement changes with the clause
#   لمّا    - "when", but also لِمَ "why"
#   أجل     - "yes" in old prose, but أجل is also the appointed TERM (الأجل)
#   زعم     - "claimed", which is not the same as "said"
#   نحو     - "about" before a number, "like" before a noun
#   شطر     - "half", and also "towards" (شطر المسجد الحرام)
#   بات     - "became", and also "spent the night"
#   أنّى   - "how" or "whence", and on this site it is usually echoing
#             the Quran's own question (3:165), so plaining it loses the echo
#   يومئذ   - "on that Day" in the pages about the Judgement, but "at that
#             time" in a historical sentence; and the reader knows the word
#             from the Quran, so it is not the barrier the others are.
#             BUT on a site full of the Day of Judgement it was ambiguous:
#             «والأسيرُ يومئذٍ لم يكن مسلمًا» reads as "on the Day". On 25
#             November 2026, at the owner's request ("find hard Arabic words
#             and fix them"), every one in the site's own sentences became
#             يوم القيامة / في ذلك اليوم / في ذلك الوقت by its meaning. The
#             ones left are inside a hadith or a companion's own words.
#   شطر     - the same day, every شطر meaning "half" became نصف (same
#             pattern, so vowels and case endings carry over), and those
#             meaning "a part" became جزء — written out by hand. None meant
#             "towards". Only vowelled ones, in quotations, are left.
#   أنّى    - plained in two places that day; where the Quran's question was
#             not quoted near it, it now IS quoted (cut from 3:165), with
#             the plain meaning beside it, so the echo is kept.
WATCH = ["أنّى", "يومئذ", "إذ", "لمّا", "أجل", "زعم", "نحو", "شطر", "بات", "أمسى", "غدا",
         "يوشك", "استوى على", "دَرَج", "قِبَل", "مَرَدّ", "ديدن", "دأب", "قطّ", "غير أن"]

MAXWORDS = 30          # a sentence longer than this is hard to follow aloud

# ﴿ ﴾ Quran, « » hadith, ( ) a reference. Protected from every rewrite.
PROTECT = re.compile(r"﴿[^﴾]*﴾|«[^»]*»")


LIFE = os.path.join(REPO, "js", "life")
FIELD = re.compile(r'([A-Za-z_][A-Za-z0-9_]*)(\s*:\s*)"((?:[^"\\]|\\.)*)"')
LIST = re.compile(r'([A-Za-z_][A-Za-z0-9_]*)\s*:\s*\[((?:\s*"(?:[^"\\]|\\.)*"\s*,?)+)\s*\]')
STR = re.compile(r'"((?:[^"\\]|\\.)*)"')


def fields(s, path):
    """(key, raw value, start, end) for every "key": "string" in a JS data
    file — and, in js/life/, for every string of a "key": ["…", "…"] list as
    well: the examples there (exAr) are lists, and they held hundreds of the
    guide's Arabic sentences out of this tool's sight. Only there, because
    elsewhere a list is usually `keys`, the search index, which has its own
    rules (CLAUDE.md) and must never be rewritten for style."""
    for m in FIELD.finditer(s):
        yield m.group(1), m.group(3), m.start(3), m.end(3)
    if os.path.dirname(os.path.abspath(path)) == os.path.abspath(LIFE):
        for m in LIST.finditer(s):
            for x in STR.finditer(m.group(2)):
                a = m.start(2) + x.start(1)
                yield m.group(1), x.group(1), a, a + len(x.group(1))


def js_strings(path):
    """(key, value, start, end, text) for every string fields() finds."""
    s = io.open(path, encoding="utf-8").read()
    for key, body, a, b in fields(s, path):
        yield key, body, a, b, s


def unescape(raw):
    try:
        return json.loads('"' + raw + '"')
    except ValueError:
        return None


def spans_to_skip(text):
    return [(m.start(), m.end()) for m in PROTECT.finditer(text)]


def replace_outside(text, pairs):
    """Apply word replacements outside every quoted span. Returns (new, n)."""
    skip = spans_to_skip(text)
    def protected(i):
        return any(a <= i < b for a, b in skip)
    out, n = text, 0
    for word, better in pairs:
        pat = word_rx(word)
        pieces, last, changed = [], 0, 0
        for m in pat.finditer(out):
            if protected(m.start()) or guarded(out, m.start(), word):
                continue
            pieces.append(out[last:m.start()]); pieces.append(better)
            last = m.end(); changed += 1
        if changed:
            pieces.append(out[last:])
            out = "".join(pieces)
            n += changed
            skip = spans_to_skip(out)
    return out, n


def files():
    d = os.path.join(REPO, "js")
    out = [os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".js")]
    # The Quran in Your Life keeps its 26 sections in js/life/ — the site's
    # own Arabic, most of it written in one day (HANDOFF PART 46).
    if os.path.isdir(LIFE):
        out += [os.path.join(LIFE, f) for f in sorted(os.listdir(LIFE)) if f.endswith(".js")]
    return out


def html_files():
    """The pages themselves. 12,000 Arabic words live in the HTML rather than
    in js/ - guidance.html alone holds 6,900 - and this tool could not see a
    single one of them until it was pointed here as well."""
    return [os.path.join(REPO, f) for f in sorted(os.listdir(REPO)) if f.endswith(".html")]


# An element whose class says it holds the Mushaf's words, a hadith or a dua.
# Everything from its opening tag to the next closing tag is left alone, on top
# of the ﴿ ﴾ and « » protection, because Quran inside the page is not always
# bracketed.
HTML_QURAN = re.compile(
    r"<([a-z]+)[^>]*class=\"[^\"]*(?:verse-ar|tad-verse|quran|ayah|dhikr|dua-ar"
    r"|arabic-name|matn|hadith-ar|arabic-text|gc-dua)[^\"]*\"[^>]*>.*?</>",
    re.S)


def html_protected_spans(text):
    spans = [(m.start(), m.end()) for m in PROTECT.finditer(text)]
    spans += [(m.start(), m.end()) for m in HTML_QURAN.finditer(text)]
    return spans


def scan_html(fix, hits, watch, longs, pairs):
    """Report, and optionally rewrite, the Arabic written straight into a page."""
    changed = 0
    for path in html_files():
        raw = io.open(path, encoding="utf-8").read()
        skip = html_protected_spans(raw)
        def protected(i):
            return any(a <= i < b for a, b in skip)
        name = os.path.basename(path)
        for w in SAFE:
            for m in word_rx(w).finditer(raw):
                if not protected(m.start()) and not guarded(raw, m.start(), w):
                    hits[w] += 1
        for w in WATCH:
            for m in word_rx(w).finditer(raw):
                if not protected(m.start()):
                    watch[w] += 1
        if fix:
            out, n = [], 0
            last = 0
            for word, better in pairs:
                pat = word_rx(word)
                pieces, last, changed_here = [], 0, 0
                for m in pat.finditer(raw):
                    if protected(m.start()) or guarded(raw, m.start(), word):
                        continue
                    pieces.append(raw[last:m.start()]); pieces.append(better)
                    last = m.end(); changed_here += 1
                if changed_here:
                    pieces.append(raw[last:])
                    raw = "".join(pieces)
                    n += changed_here
                    skip = html_protected_spans(raw)
            if n:
                io.open(path, "w", encoding="utf-8", newline="").write(raw)
                changed += 1
    return changed


def report(fix=False):
    hits = collections.Counter()
    watch = collections.Counter()
    longs = []
    changed_files = 0
    pairs = sorted(SAFE.items(), key=lambda kv: -len(kv[0]))

    for path in files():
        raw = io.open(path, encoding="utf-8").read()
        edits = []           # (start, end, new_raw)
        for key, body, a, b in fields(raw, path):
            val = unescape(body)
            if val is None or not AR.search(val) or quoted(key, val):
                continue
            bare = PROTECT.sub(" ", val)
            for w in SAFE:
                for hit in word_rx(w).finditer(bare):      # not `m`: m is the field
                    if not guarded(bare, hit.start(), w):
                        hits[w] += 1
            for w in WATCH:
                watch[w] += len(word_rx(w).findall(bare))
            for sent in re.split(r"[.!?؟]|\\n\\n", bare):
                k = len(sent.split())
                if k > MAXWORDS and AR.search(sent):
                    longs.append((os.path.basename(path), key, k, sent.strip()[:60]))
            if fix:
                new, n = replace_outside(val, pairs)
                if n:
                    enc = json.dumps(new, ensure_ascii=False)[1:-1]
                    edits.append((a, b, enc))
        if fix and edits:
            # last first, so the earlier offsets stay true; fields() yields a
            # file's lists after its plain fields, so sort rather than reverse
            for a, b, new in sorted(edits, reverse=True):
                raw = raw[:a] + new + raw[b:]
            io.open(path, "w", encoding="utf-8", newline="").write(raw)
            changed_files += 1

    html_changed = scan_html(fix, hits, watch, longs, pairs)
    changed_files += html_changed

    total = sum(hits.values())
    if fix:
        print("rewritten: %d words of the old register, in %d files"
              % (total, changed_files))
        return 0

    print("Words of the commentaries, and what an ordinary reader says:")
    for w, n in hits.most_common():
        print("  %5d  %-16s -> %s" % (n, w, SAFE[w]))
    print("  %d to replace (python tools/arabicease.py --fix)" % total)
    print("\nFor a human to judge, one place at a time:")
    for w, n in watch.most_common():
        if n:
            print("  %5d  %s" % (n, w))
    print("\nSentences over %d words: %d" % (MAXWORDS, len(longs)))
    for f, key, n, head in sorted(longs, key=lambda x: -x[2])[:12]:
        print("  %3d  %-20s %-12s %s…" % (n, f, key, head))
    return total


def main():
    if "--fix" in sys.argv:
        return report(fix=True)
    if "--list" in sys.argv:
        want = sys.argv[sys.argv.index("--list") + 1]
        for path in files():
            for key, body, a, b, _ in js_strings(path):
                val = unescape(body)
                if not val or quoted(key, val):
                    continue
                if want in PROTECT.sub(" ", val):
                    i = val.index(want)
                    print("  %-20s %-12s …%s…" % (os.path.basename(path), key,
                          val[max(0, i - 45):i + 45].replace("\n", " ")))
        return 0
    if "--selftest" in sys.argv:
        return 1 if selftest() else 0
    bad = selftest() if "--check" in sys.argv else 0
    n = report()
    if "--check" in sys.argv:
        return 1 if (n or bad) else 0
    return 0


# Sentences the rewriter has broken before, or could. Each must come out
# exactly as written here. Run by --check and --selftest, and every week on
# GitHub (weekly-check.yml), so no change to SAFE or to the word edges can
# break them again without saying so.
SELFTEST = [
    # «من غير أن» is "without": the run of November 2026 made it «من لكن» in 19 sentences
    ("وما يُصنع في كلٍّ منها من غير أن تستأنف كلَّ شيء.", None),
    ("من غير أنّ ذلك يعني شيئًا", None),
    # a vowel on the prefix is part of the word: «يُتأمّل» became «يُانظر»
    ("وفي الصياغة ما يُتأمّل: كذا", None),
    ("له تأمّلٌ طويل", None),
    # «فحسبها» is "he counted it", not «فحسب»
    ("لكنّ الفرغاني قاسها بالميل العربي فحسبها كولمبس بالميل الروماني", None),
    # quoted words are never plained — قطّ is not replaced at all any more
    ("شهادته: ما قال لي أفٍّ قطّ، ولا قال", None),
    ("«ما ضرب رسول الله ﷺ شيئًا قطّ بيده»", None),
    ("قال الله ﴿لَا رَيۡبَۛ فِيهِۛ﴾", None),
    # and what it IS for
    ("وتأمّل الفرق بين الآيتين", "وانظر الفرق بين الآيتين"),
    ("هو كذلك، غير أنّ الأمر أوسع", "هو كذلك، لكن الأمر أوسع"),
    ("ليس هذا فحسب، بل", "ليس هذا فقط، بل"),
    ("ولا يُعدّ في موضعٍ البتّة.", "ولا يُعدّ في موضعٍ أبدًا."),
    ("فهذا لا ريب فيه", "فهذا لا شكّ فيه"),
]


def selftest():
    pairs = sorted(SAFE.items(), key=lambda kv: -len(kv[0]))
    bad = 0
    for text, want in SELFTEST:
        want = text if want is None else want
        got, _ = replace_outside(text, pairs)
        if got != want:
            bad += 1
            print("SELFTEST FAILED\n  in:   %s\n  want: %s\n  got:  %s" % (text, want, got))
    print("selftest: %d of %d sentences come out as they must" % (len(SELFTEST) - bad, len(SELFTEST)))
    return bad


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
