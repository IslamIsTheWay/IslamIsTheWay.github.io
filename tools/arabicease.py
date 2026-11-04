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
    "غير أن": "لكن",
    "وتأمّل": "وانظر",
    "فتأمّل": "وانظر",
    "تأمّل": "انظر",
    "قطّ": "أبدًا",
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
    "وغير أن": "ولكن",
    "وههنا": "وهنا",
    "فههنا": "فهنا",
    "وثمّة": "وهناك",
    "وبيد أنّ": "ولكن",
    "ولئلّا": "وحتى لا",
    "وحينئذٍ": "وعندها",
    "وحينئذ": "وعندها",
}

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
#             from the Quran, so it is not the barrier the others are
WATCH = ["أنّى", "يومئذ", "إذ", "لمّا", "أجل", "زعم", "نحو", "شطر", "بات", "أمسى", "غدا",
         "يوشك", "استوى على", "دَرَج", "قِبَل", "مَرَدّ", "ديدن", "دأب"]

MAXWORDS = 30          # a sentence longer than this is hard to follow aloud

# ﴿ ﴾ Quran, « » hadith, ( ) a reference. Protected from every rewrite.
PROTECT = re.compile(r"﴿[^﴾]*﴾|«[^»]*»")


def js_strings(path):
    """(key, value, start, end) for every "key": "string" in a JS data file."""
    s = io.open(path, encoding="utf-8").read()
    for m in re.finditer(r'([A-Za-z_][A-Za-z0-9_]*)(\s*:\s*)"((?:[^"\\]|\\.)*)"', s):
        yield m.group(1), m.group(3), m.start(3), m.end(3), s


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
        pat = re.compile(r"(?<![ؠ-يّ])" + re.escape(word) + r"(?![ؠ-ي])")
        pieces, last, changed = [], 0, 0
        for m in pat.finditer(out):
            if protected(m.start()):
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
    return [os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".js")]


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
            for m in re.finditer(r"(?<![ؠ-يّ])" + re.escape(w) + r"(?![ؠ-ي])", raw):
                if not protected(m.start()):
                    hits[w] += 1
        for w in WATCH:
            for m in re.finditer(r"(?<![ؠ-ي])" + re.escape(w) + r"(?![ؠ-ي])", raw):
                if not protected(m.start()):
                    watch[w] += 1
        if fix:
            out, n = [], 0
            last = 0
            for word, better in pairs:
                pat = re.compile(r"(?<![ؠ-يّ])" + re.escape(word) + r"(?![ؠ-ي])")
                pieces, last, changed_here = [], 0, 0
                for m in pat.finditer(raw):
                    if protected(m.start()):
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
        for m in re.finditer(r'([A-Za-z_][A-Za-z0-9_]*)(\s*:\s*)"((?:[^"\\]|\\.)*)"', raw):
            key, body = m.group(1), m.group(3)
            if key in QUOTED:
                continue
            val = unescape(body)
            if val is None or not AR.search(val):
                continue
            bare = PROTECT.sub(" ", val)
            for w in SAFE:
                for _ in re.finditer(r"(?<![ؠ-يّ])" + re.escape(w) + r"(?![ؠ-ي])", bare):
                    hits[w] += 1
            for w in WATCH:
                watch[w] += len(re.findall(r"(?<![ؠ-ي])" + re.escape(w) + r"(?![ؠ-ي])", bare))
            for sent in re.split(r"[.!?؟]|\\n\\n", bare):
                k = len(sent.split())
                if k > MAXWORDS and AR.search(sent):
                    longs.append((os.path.basename(path), key, k, sent.strip()[:60]))
            if fix:
                new, n = replace_outside(val, pairs)
                if n:
                    enc = json.dumps(new, ensure_ascii=False)[1:-1]
                    edits.append((m.start(3), m.end(3), enc))
        if fix and edits:
            for a, b, new in reversed(edits):
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
                if key in QUOTED:
                    continue
                val = unescape(body)
                if val and want in PROTECT.sub(" ", val):
                    i = val.index(want)
                    print("  %-20s %-12s …%s…" % (os.path.basename(path), key,
                          val[max(0, i - 45):i + 45].replace("\n", " ")))
        return 0
    n = report()
    if "--check" in sys.argv:
        return 1 if n else 0
    return 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
