# -*- coding: utf-8 -*-
"""hq.py <book> <number> [<number> …] — print a hadith (Arabic + English +
grades) from the cached fawazahmed0 editions, to check a citation before
writing it.   hq.py <book> find <arabic-or-english words>  — search."""
import io, json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
D = os.path.join(os.environ.get("TEMP", ""), "iitw-hadith")
book = sys.argv[1]
_c = {}


def load(lang):
    if lang not in _c:
        j = json.load(io.open(os.path.join(D, "%s-%s.json" % (lang, book)), encoding="utf-8"))
        _c[lang] = {str(h["hadithnumber"]).split(".")[0] if False else str(h["hadithnumber"]): h for h in j["hadiths"]}
    return _c[lang]


def fmt(num, cut=700):
    ar, en = load("ara").get(num), load("eng").get(num)
    print("=== %s %s" % (book, num))
    if ar: print("AR:", ar["text"][:cut])
    if en: print("EN:", en["text"][:cut])
    g = (ar or en or {}).get("grades") or []
    if g: print("GRADES:", "; ".join("%s: %s" % (x.get("name"), x.get("grade")) for x in g))


import unicodedata


def bare(x):
    x = "".join(c for c in unicodedata.normalize("NFD", x) if not unicodedata.combining(c))
    return x.replace("ـ", "").replace("أ", "ا").replace("إ", "ا").replace("آ", "ا").replace("ٱ", "ا").lower()


if sys.argv[2] == "find":
    words = [bare(w) for w in sys.argv[3:]]
    lang = "ara" if any("؀" <= ch <= "ۿ" for w in words for ch in w) else "eng"
    hits = [k for k, h in load(lang).items() if all(w in bare(h["text"]) for w in words)]
    print("hits:", hits[:40])
else:
    for n in sys.argv[2:]:
        fmt(n)
