# -*- coding: utf-8 -*-
"""Helpers for writing NEW explained verses into js/tadabbur.js: the verse
itself is cut from the Mushaf (qc.V), quotations through Q/QF, and the home
page count is moved with the data."""
import io, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tad_lib import Q, QF, L, qc, apply, REPO, TAD, _skel, FOUND


def W(s, a, phrase):
    """A word (or words) of the verse as the Mushaf writes them, no brackets."""
    return QF(s, a, phrase)[1:-1]


def NEW(s, n, why, whyAr, plain, plainAr, ref, refAr, strength, links=(), words=()):
    e = {"n": n, "ar": qc.V(s, n), "why": why, "whyAr": whyAr, "plain": plain, "plainAr": plainAr}
    if words:
        e["words"] = list(words)
    if links:
        e["links"] = list(links)
    e["ref"] = ref
    e["refAr"] = refAr
    e["strength"] = strength
    return e


def existing():
    s = io.open(TAD, encoding="utf-8").read()
    have = set()
    cur = None
    for ln in s.split("\n"):
        m = re.match(r"^  (\d+): \{", ln)
        if m:
            cur = int(m.group(1)); continue
        m = re.match(r"^        n: (\d+),", ln)
        if m and cur:
            have.add((cur, int(m.group(1))))
    return have


ONES = {1: "إحدى", 2: "اثنتان", 3: "ثلاث", 4: "أربع", 5: "خمس", 6: "ستّ", 7: "سبع", 8: "ثمانٍ", 9: "تسع"}
TENS = {2: "عشرون", 3: "ثلاثون", 4: "أربعون", 5: "خمسون", 6: "ستّون", 7: "سبعون", 8: "ثمانون", 9: "تسعون"}
TEENS = {10: "عشر", 11: "إحدى عشرة", 12: "اثنتا عشرة", 13: "ثلاث عشرة", 14: "أربع عشرة", 15: "خمس عشرة",
         16: "ستّ عشرة", 17: "سبع عشرة", 18: "ثماني عشرة", 19: "تسع عشرة"}
HUND = {5: "خمسمئة", 6: "ستّمئة", 7: "سبعمئة", 8: "ثمانمئة", 9: "تسعمئة"}


def ar_count(n):
    """n verses (آية is feminine, so 3-9 take the masculine form) — 510..999."""
    h, r = divmod(n, 100)
    parts = [HUND[h]]
    if r:
        if r < 10:
            parts.append(ONES[r])
        elif r < 20:
            parts.append(TEENS[r])
        else:
            t, o = divmod(r, 10)
            parts.append((ONES[o] + " و" + TENS[t]) if o else TENS[t])
    return " و".join(parts)


def ar_phrase(n):
    """The number with its noun, as Arabic agrees it: 600 آية, 601 وآية,
    602 وآيتان, 603-610 + آيات (plural), 611 and up + آية (singular)."""
    h, r = divmod(n, 100)
    base = HUND[h]
    if r == 0:
        return base + " آية"
    if r == 1:
        return base + " وآية"
    if r == 2:
        return base + " وآيتان"
    if r <= 10:
        unit = {8: "ثماني", 10: "عشر"}.get(r, ONES.get(r))
        return base + " و" + unit + " آيات"
    return ar_count(n) + " آية"


def count_verses():
    """The home page number: every verse an entry covers (runs counted in full)."""
    s = io.open(TAD, encoding="utf-8").read().split("\n")
    total = 0
    for i, ln in enumerate(s):
        if re.match(r"^        n: \d+,", ln):
            ar = s[i + 1] if i + 1 < len(s) else ""
            total += ar.count(" • ") + 1 if ar.strip().startswith("ar:") else 1
    return total


def set_home_count():
    n = count_verses()
    idx = os.path.join(REPO, "index.html"); i18 = os.path.join(REPO, "js", "i18n.js")
    a = io.open(idx, encoding="utf-8").read(); b = io.open(i18, encoding="utf-8").read()
    old = int(re.search(r"Madani Mushaf, and (\d+) verses", a).group(1))
    if old == n:
        print("home count already", n); return
    a = a.replace("Madani Mushaf, and %d verses" % old, "Madani Mushaf, and %d verses" % n)
    a = a.replace("{ n: %d, fixed: true," % old, "{ n: %d, fixed: true," % n)
    b = b.replace("Madani Mushaf, and %d verses" % old, "Madani Mushaf, and %d verses" % n)
    fix_arabic_count(b, n, idx, a, i18)
    print("home count %d -> %d (%s)" % (old, n, ar_phrase(n)))


def fix_arabic_count(b=None, n=None, idx=None, a=None, i18=None):
    """Write the Arabic number phrase (number + noun) for n into js/i18n.js."""
    i18 = i18 or os.path.join(REPO, "js", "i18n.js")
    b = b if b is not None else io.open(i18, encoding="utf-8").read()
    n = n or count_verses()
    oa = re.search(r"صفحة، و(.+?) — في كلّ سورةٍ", b).group(1)
    b = b.replace("صفحة، و%s — في كلّ سورةٍ" % oa, "صفحة، و%s — في كلّ سورةٍ" % ar_phrase(n))
    if idx and a is not None:
        io.open(idx, "w", encoding="utf-8", newline="").write(a)
    io.open(i18, "w", encoding="utf-8", newline="").write(b)


def add_new(ENTRIES, RETURNS):
    have = existing()
    for s, e in ENTRIES:
        if (s, e["n"]) in have:
            raise SystemExit("%d:%d is already explained" % (s, e["n"]))
    for (fs, fa, ph, i, j, r) in FOUND:
        if r < 0.97:
            print("  QF check %d:%d %r -> %s (%.2f)" % (fs, fa, ph, qc.part(fs, fa, i, j), r))
    if "--dry" in sys.argv:
        print("dry run:", len(ENTRIES), "new entries,", sum(len(v) for v in RETURNS.values()), "return links")
        return
    by = {}
    for s, e in ENTRIES:
        by.setdefault(s, []).append(e)
    for s, es in by.items():
        qc.add_verses(s, es)
        qc.check_written(s, [e["n"] for e in es])
    apply(RETURNS)
    set_home_count()
