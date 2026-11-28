# -*- coding: utf-8 -*-
"""Which entry covers each verse (runs included), and each entry's links —
read the same way check-counts.sh reads them."""
import io, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
TAD = r"C:\Users\User\islam-is-the-way-site\js\tadabbur.js"


def read():
    lines = io.open(TAD, encoding="utf-8").read().split("\n")
    entries, links, covers, runlen = [], {}, {}, {}
    cur = ent = None
    for i, ln in enumerate(lines):
        m = re.match(r'^  (\d+): \{', ln)
        if m:
            cur = int(m.group(1)); continue
        m = re.match(r'^        n: (\d+),', ln)
        if m and cur is not None:
            n = int(m.group(1)); ent = (cur, n)
            entries.append(ent); links.setdefault(ent, [])
            ar = lines[i + 1] if i + 1 < len(lines) else ""
            run = ar.count(" \u2022 ") + 1 if ar.strip().startswith("ar:") else 1
            runlen[ent] = run
            for k in range(run):
                covers[(cur, n + k)] = ent
            continue
        m = re.match(r'^ {10,}ref: "Surah [^"]*\((\d+):(\d+)', ln)
        if m and ent is not None:
            links[ent].append((int(m.group(1)), int(m.group(2))))
    return entries, links, covers, runlen


if __name__ == "__main__":
    entries, links, covers, runlen = read()
    by = {}
    for (s, n) in entries:
        r = runlen[(s, n)]
        by.setdefault(s, []).append(("%d" % n) + ("-%d" % (n + r - 1) if r > 1 else "") + ("" if links[(s, n)] else "*"))
    for s in sorted(by):
        print("%3d: %s" % (s, " ".join(by[s])))
    if len(sys.argv) > 1:
        for q in sys.argv[1:]:
            s, a = map(int, q.split(":"))
            e = covers.get((s, a))
            print(q, "->", e, "links:", links.get(e) if e else None)
