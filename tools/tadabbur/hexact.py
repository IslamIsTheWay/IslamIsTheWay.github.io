# -*- coding: utf-8 -*-
"""hexact.py <book> <hadithnumber> <bare start words> ... <bare end words>
Print the hadith's own diacritised wording from the first bare phrase to the
end of the second, so a «» quotation is the source's exact text."""
import io, json, os, sys, unicodedata
sys.stdout.reconfigure(encoding="utf-8")
D = os.path.join(os.environ["TEMP"], "iitw-hadith")


def exact(book, n, start, end):
    j = json.load(io.open(os.path.join(D, "ara-%s.json" % book), encoding="utf-8"))
    h = [x for x in j["hadiths"] if x["hadithnumber"] == n][0]["text"]
    keep, idx = [], []
    for i, c in enumerate(unicodedata.normalize("NFC", h)):
        for d in unicodedata.normalize("NFD", c):
            if not unicodedata.combining(d):
                keep.append(d); idx.append(i)
    norm = "".join(keep).replace("أ", "ا").replace("إ", "ا").replace("آ", "ا")
    src = unicodedata.normalize("NFC", h)
    a = norm.find(start)
    b = norm.find(end, a)
    if a < 0 or b < 0:
        raise SystemExit("not found: %r … %r" % (start, end))
    stop = idx[b + len(end) - 1] + 1
    while stop < len(src) and unicodedata.combining(src[stop]):
        stop += 1                       # keep the last letter's own marks
    return src[idx[a]: stop]


if __name__ == "__main__":
    print(exact(sys.argv[1], int(sys.argv[2]), sys.argv[3], sys.argv[4]))
