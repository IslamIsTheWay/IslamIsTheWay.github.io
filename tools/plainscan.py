# -*- coding: utf-8 -*-
"""Can a reader who is not a student of knowledge get the point of each page?

Vocabulary is only half of "understandable". The other half is shape: a long
explanation with no short version in front of it asks the reader to read all
of it before he knows whether it answers him. The Quran page gives every one
of its 430 entries a plain sentence first; this reports which other files do
and which do not, and where the longest sentences are.

    python tools/plainscan.py             the report
    python tools/plainscan.py --long FILE the long sentences in one file
"""
import io, json, os, re, sys, collections

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AR = re.compile(r"[ء-ي]")

# A real short version: a SENTENCE an ordinary reader can take away.
PLAIN_KEYS = ("plain", "plainAr", "simple", "simpleAr", "short", "shortAr",
              "summary", "summaryAr", "inShort", "inShortAr", "lead", "leadAr",
              "says", "saysAr", "headline", "headlineAr", "tldr")
# A LABEL is not a summary. A title tells a reader which block he is in; it
# does not tell him what the block says. Counted separately, because reading
# the two as the same thing made this tool report three files as having
# nothing for the ordinary reader when they do have labels, and made every
# other file look finished when its titles are all it has.
LABEL_KEYS = ("title", "titleAr", "question", "questionAr", "name", "nameAr",
              "heading", "headingAr", "h", "hAr")
# A field holding the long explanation
LONG_KEYS = ("why", "whyAr", "detail", "detailAr", "body", "bodyAr", "text",
             "explanation", "explanationAr", "answer", "answerAr", "note",
             "noteAr", "classical", "classicalAr", "science", "scienceAr",
             "story", "storyAr", "meaning", "meaningAr", "view", "viewAr")
MAXWORDS = 30
# Fields holding a VERSE or a hadith. The long-sentence count must skip them:
# the longest "sentence" in the file is 2:233, and shortening the Mushaf is
# not a readability improvement.
QUOTED = {"ar", "w", "arText", "arabic", "verse", "text", "hadithAr", "quoteAr",
          "dua", "duaAr", "dhikrAr", "matn", "matnAr", "arCut", "cutAr", "keys"}


def strings(path):
    s = io.open(path, encoding="utf-8").read()
    for m in re.finditer(r'([A-Za-z_][A-Za-z0-9_]*)(\s*:\s*)"((?:[^"\\]|\\.)*)"', s):
        try:
            yield m.group(1), json.loads('"' + m.group(3) + '"')
        except ValueError:
            continue


def main():
    d = os.path.join(REPO, "js")
    rows = []
    longs = collections.defaultdict(list)
    for f in sorted(os.listdir(d)):
        if not f.endswith(".js"):
            continue
        path = os.path.join(d, f)
        short = long_ = ar_words = label = 0
        longest = 0
        for key, val in strings(path):
            if key in PLAIN_KEYS and val.strip():
                short += 1
            if key in LABEL_KEYS and val.strip():
                label += 1
            if key in LONG_KEYS and len(val.split()) > 45:
                long_ += 1
            if AR.search(val) and key not in QUOTED:
                ar_words += len(val.split())
                bare = re.sub(r"﴿[^﴾]*﴾|«[^»]*»", " ", val)
                for sent in re.split(r"[.!?؟]|\n\n", bare):
                    n = len(sent.split())
                    if n > MAXWORDS and AR.search(sent):
                        longs[f].append((n, sent.strip()[:70]))
                        longest = max(longest, n)
        if long_ or short:
            rows.append((f, long_, short, label, len(longs[f]), longest))

    if "--long" in sys.argv:
        want = sys.argv[sys.argv.index("--long") + 1]
        for n, text in sorted(longs.get(want, []), reverse=True)[:25]:
            print("  %3d  %s…" % (n, text))
        return 0

    print("%-22s %6s %6s %6s %8s" % ("file", "long", "short", "label", "sent>30"))
    print("-" * 56)
    bare = []
    for f, long_, short, label, nlong, longest in sorted(rows, key=lambda r: -r[1]):
        flag = ""
        if long_ >= 5 and short == 0:
            flag = "  <-- labels only, no summary"
            bare.append(f)
        print("%-22s %6d %6d %6d %8d%s" % (f, long_, short, label, nlong, flag))
    print("\nFiles whose long blocks carry a label but no summary: %d" % len(bare))
    for f in bare:
        print("   " + f)
    tot = sum(len(v) for v in longs.values())
    print("\nArabic sentences over %d words, in all: %d" % (MAXWORDS, tot))
    for f, items in sorted(longs.items(), key=lambda kv: -len(kv[1]))[:8]:
        print("   %-24s %4d" % (f, len(items)))
    return 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
