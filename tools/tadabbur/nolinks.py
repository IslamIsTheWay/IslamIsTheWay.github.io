# -*- coding: utf-8 -*-
"""List the explained verses that have no verse-to-verse links yet, with a
short English gist, so they can be paired."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tad_lib import bvp, REPO, NAME
T = bvp.load_const(os.path.join(REPO, "js", "tadabbur.js"), "TADABBUR")
allk = []
nol = []
for s in sorted(T, key=int):
    for e in T[s]["ayat"]:
        allk.append((int(s), e["n"]))
        if not e.get("links"):
            nol.append((int(s), e))
print("entries", len(allk), "without links", len(nol))
full = "--full" in sys.argv
for s, e in nol:
    plain = (e.get("plain") or "")
    why = (e.get("why") or "")
    print("%d:%s  [%s]  %s" % (s, e["n"], NAME[s], (plain if full else plain[:150]).replace("\n", " ")))
    if full:
        print("     why:", why[:300])
