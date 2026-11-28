# -*- coding: utf-8 -*-
"""wv.py s:a [s:a …] — each verse's words with their positions (for part(),
which is inclusive of both ends), then its English."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tad_lib import qc
for q in sys.argv[1:]:
    s, a = map(int, q.split(":"))
    ws = qc.V(s, a).split()
    print("== %d:%d  (%d words)" % (s, a, len(ws)))
    print("   " + "  ".join("%d:%s" % (i, w) for i, w in enumerate(ws)))
    print("   EN:", (qc.en_verse(s, a) or "").strip())
