# -*- coding: utf-8 -*-
"""Helpers for adding verse-to-verse links to js/tadabbur.js — every Arabic
quotation cut from js/quran-text by word position (tools/quran-cut.py)."""
import importlib.util, io, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
REPO = r"C:\Users\User\islam-is-the-way-site"
spec = importlib.util.spec_from_file_location("qc", os.path.join(REPO, "tools", "quran-cut.py"))
qc = importlib.util.module_from_spec(spec); spec.loader.exec_module(qc)
spec = importlib.util.spec_from_file_location("bvp", os.path.join(REPO, "tools", "build-verse-pages.py"))
bvp = importlib.util.module_from_spec(spec); spec.loader.exec_module(bvp)
NAME = {s["n"]: s["name"] for s in bvp.load_const(os.path.join(REPO, "js", "data.js"), "SURAHS")}
TAD = os.path.join(REPO, "js", "tadabbur.js")


def Q(s, a, i=None, j=None):
    return "﴿" + (qc.V(s, a) if i is None else qc.part(s, a, i, j)) + "﴾"


import difflib, unicodedata
_DROP = set("اأإآٱءٰـۥۦ")
_MAP = {"ى": "ي", "ة": "ه", "ؤ": "و", "ئ": "ي"}


def _skel(w):
    w = "".join(c for c in unicodedata.normalize("NFD", w) if not unicodedata.combining(c))
    return "".join(_MAP.get(c, c) for c in w if c not in _DROP and not ("ۖ" <= c <= "ۭ"))


FOUND = []


def QF(s, a, phrase):
    """Locate `phrase` (a rough, undotted spelling — only a locator) among the
    verse's words and return the Mushaf's OWN words at that position, in ﴿﴾.
    Fails loudly when nothing in the verse is close enough."""
    ws = qc.V(s, a).split()
    want = phrase.split()
    tgt = " ".join(_skel(w) for w in want)
    best = (0, None)
    for n in (len(want), len(want) - 1, len(want) + 1):
        if n < 1:
            continue
        for i in range(0, len(ws) - n + 1):
            cand = " ".join(_skel(w) for w in ws[i:i + n])
            r = difflib.SequenceMatcher(None, cand, tgt).ratio()
            if r > best[0]:
                best = (r, (i, i + n - 1))
    if best[0] < 0.8:
        raise SystemExit("QF %d:%d no match for %r (best %.2f at %s: %s)" % (
            s, a, phrase, best[0], best[1], " ".join(ws[best[1][0]:best[1][1] + 1]) if best[1] else ""))
    i, j = best[1]
    FOUND.append((s, a, phrase, i, j, round(best[0], 2)))
    return Q(s, a, i, j)


def L(s, a, how, howAr, a2=None):
    """A link to verse s:a (or the run s:a-a2): its own text and English, and how the two meet."""
    a2 = a2 or a
    ref = "Surah %s (%d:%d%s)" % (NAME[s], s, a, ("-%d" % a2) if a2 > a else "")
    ar = " ۝ ".join(qc.V(s, x) for x in range(a, a2 + 1))
    en = " ".join((qc.en_verse(s, x) or "").strip() for x in range(a, a2 + 1))
    return {"ref": ref, "ar": ar, "en": en, "how": how, "howAr": howAr}


def _string_end(s, i):
    i += 1
    while True:
        c = s[i]
        if c == "\\":
            i += 2; continue
        if c == '"':
            return i + 1
        i += 1


def entry_span(s, surah, n):
    start = s.index("\n  %d: {" % surah)
    nxt = re.compile(r"\n  \d+: \{").search(s, start + 5)
    end = nxt.start() if nxt else len(s)
    k = s.find("\n        n: %d,\n" % n, start, end)
    if k < 0:
        raise SystemExit("no entry %d:%d" % (surah, n))
    o = s.rindex("\n      {", start, k) + 7
    depth, i = 0, o
    while True:
        c = s[i]
        if c == '"':
            i = _string_end(s, i); continue
        if c in "{[":
            depth += 1
        elif c in "}]":
            depth -= 1
            if depth == 0:
                return o, i
        i += 1


def add_links(s, surah, n, links):
    o, c = entry_span(s, surah, n)
    ent = s[o:c + 1]
    have = set(re.findall(r'\n {12}ref: "Surah [^"]*\((\d+:\d+)', ent))
    links = [l for l in links if re.search(r"\((\d+:\d+)", l["ref"]).group(1) not in have]
    if not links:
        return s
    if "\n        links: [" in ent:
        a = o + ent.index("\n        links: [")
        b = s.index("\n        ]", a)
        return s[:b] + "".join(",\n          " + qc.ser(l, 10) for l in links) + s[b:]
    if "\n        ref: " in ent:
        b = o + ent.index("\n        ref: ")
        return s[:b] + "\n        links: " + qc.ser(links, 8) + "," + s[b:]
    b = c - len("\n      ")
    assert s[b:c] == "\n      ", repr(s[b - 5:c + 1])
    return s[:b] + ",\n        links: " + qc.ser(links, 8) + s[b:]


def apply(LINKS):
    for (fs, fa, ph, i, j, r) in FOUND:
        if r < 0.97:
            print("  QF check %d:%d %r -> %s (%.2f)" % (fs, fa, ph, qc.part(fs, fa, i, j), r))
    if "--dry" in sys.argv:
        print("dry run:", sum(len(v) for v in LINKS.values()), "links to", len(LINKS), "entries")
        return
    s = io.open(TAD, encoding="utf-8").read()
    for (surah, n), links in LINKS.items():
        s = add_links(s, surah, n, links)
    io.open(TAD, "w", encoding="utf-8", newline="").write(s)
    print("links added:", sum(len(v) for v in LINKS.values()), "to", len(LINKS), "entries")
