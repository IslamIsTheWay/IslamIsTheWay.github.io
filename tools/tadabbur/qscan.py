# -*- coding: utf-8 -*-
"""qscan.py <batch module> — flag any run of 3+ consecutive Quran words typed
in my own Arabic (outside ﴿…﴾) in a batch's ENTRIES / RETURNS / LINKS."""
import importlib, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8")
sys.argv.append("--dry")
from tad_lib import qc, _skel

GRAMS = set()
for s in range(1, 115):
    for v in qc.surah(s)["a"]:
        w = [_skel(x) for x in v.split()]
        w = [x for x in w if x]
        for i in range(len(w) - 2):
            GRAMS.add(tuple(w[i:i + 3]))

COMMON = {("في", "سبيل", "لله"), ("صلي", "لله", "عليه")}


def scan(label, text):
    text = re.sub("﴿[^﴾]*﴾", " | ", text)   # quotations are cut, not typed
    text = re.sub("«[^»]*»", " | ", text)                  # hadith wording
    for chunk in re.split(r"[|.،؛:؟!()\-—–\n\"]", text):
        w = [_skel(x) for x in re.findall(r"[؀-ۿ]+", chunk)]
        w = [x for x in w if x]
        for i in range(len(w) - 2):
            g = tuple(w[i:i + 3])
            if g in GRAMS and g not in COMMON:
                print("  %s: …%s…" % (label, " ".join(w[max(0, i - 1):i + 4])))


mod = importlib.import_module(sys.argv[1].replace(".py", ""))
for name in ("ENTRIES", "RETURNS", "LINKS"):
    obj = getattr(mod, name, None)
    if not obj:
        continue
    items = obj if isinstance(obj, list) else [(k, l) for k, v in obj.items() for l in v]
    for key, e in items:
        if isinstance(e, dict) and "whyAr" in e:
            for f in ("whyAr", "plainAr"):
                scan("%s %s" % (e["n"], f), e[f])
            for wd in e.get("words", []):
                scan("%s word" % e["n"], wd.get("meaningAr", ""))
            for l in e.get("links", []):
                scan("%s link %s" % (e["n"], l["ref"][-9:]), l["howAr"])
        elif isinstance(e, dict):
            scan("%s -> %s" % (key, e["ref"][-9:]), e["howAr"])
print("scan done")
