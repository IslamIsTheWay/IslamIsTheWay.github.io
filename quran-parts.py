"""Cut js/quran-text.js into one file per surah, and check what came out.

WHY. The whole Quran — 6,236 verses with an English translation and the
Mushaf page of each — is 2.2MB of JavaScript. The reader page loaded all of
it before it could show a single surah, and every visit to the Quran page on
a phone paid for it. A reader opening al-Fatihah needs 2KB.

The text itself does not move: js/quran-text/<n>.js holds surah n and
nothing else, js/quran-text.js becomes the loader that fetches a surah when
it is opened, and the service worker still caches all of them so the Quran
still opens with no connection at all - which is why this file exists in the
first place (HANDOFF PART 20).

  python quran-parts.py --split <source.js>   cut a full QURAN_TEXT file up
  python quran-parts.py --check               the parts are all there and whole
"""
import io, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PARTS = os.path.join(HERE, "js", "quran-text")
VERSES = 6236


def load_source(path):
    t = io.open(path, encoding="utf-8").read()
    i = t.index("const QURAN_TEXT = ")
    return json.loads(t[i + 19: t.rindex("}") + 1])


def load_parts():
    """Every surah, read back from the parts — for check-quran.sh and for any
    tool that used to read the single file."""
    out = {}
    for n in range(1, 115):
        p = os.path.join(PARTS, "%d.js" % n)
        t = io.open(p, encoding="utf-8").read()
        i = t.index("QURAN_TEXT[")
        out[str(n)] = json.loads(t[t.index("=", i) + 1: t.rindex("}") + 1])
    return out


def split(source):
    qt = load_source(source)
    os.makedirs(PARTS, exist_ok=True)
    for n in range(1, 115):
        rec = qt[str(n)]
        body = json.dumps(rec, ensure_ascii=False, separators=(",", ":"))
        io.open(os.path.join(PARTS, "%d.js" % n), "w", encoding="utf-8", newline="").write(
            "/* Surah %d — %d verses. Written by quran-parts.py; the text is the\n"
            "   King Fahd Complex's Hafs (the Madinah Mushaf). Loaded on demand by\n"
            "   js/quran-text.js — never edit a verse here by hand. */\n"
            "QURAN_TEXT[\"%d\"]=%s;\n" % (n, len(rec["a"]), n, body))
    print("wrote 114 parts into js/quran-text/")


def check():
    bad = []
    if not os.path.isdir(PARTS):
        print("js/quran-text/ is missing — run quran-parts.py --split")
        return 1
    try:
        qt = load_parts()
    except Exception as e:
        print("a part will not parse:", e)
        return 1
    total = 0
    for n in range(1, 115):
        rec = qt[str(n)]
        a, e, p = rec.get("a", []), rec.get("e", []), rec.get("p", [])
        total += len(a)
        if not a:
            bad.append("surah %d has no Arabic" % n)
        if len(e) != len(a) or len(p) != len(a):
            bad.append("surah %d: %d verses, %d translations, %d pages"
                       % (n, len(a), len(e), len(p)))
    if total != VERSES:
        bad.append("%d verses in all, not %d" % (total, VERSES))
    # the reader asks for them by this exact path
    loader = io.open(os.path.join(HERE, "js", "quran-text.js"), encoding="utf-8").read()
    if "js/quran-text/" not in loader:
        bad.append("js/quran-text.js does not load the parts")
    for line in bad:
        print(line)
    print("Quran parts: %s (%d verses, %d files)"
          % ("FAILED" if bad else "all there", total, 114))
    return 1 if bad else 0


if "--split" in sys.argv:
    split(sys.argv[sys.argv.index("--split") + 1])
elif "--check" in sys.argv:
    sys.exit(check())
else:
    print(__doc__)
