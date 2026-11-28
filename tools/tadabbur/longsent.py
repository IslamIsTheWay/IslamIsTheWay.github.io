# -*- coding: utf-8 -*-
"""longsent.py <batch module> — Arabic sentences over arabicease's limit in a batch."""
import importlib, importlib.util, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8")
sys.argv.append("--dry")
spec = importlib.util.spec_from_file_location("ae", r"C:\Users\User\islam-is-the-way-site\tools\arabicease.py")
ae = importlib.util.module_from_spec(spec); spec.loader.exec_module(ae)
mod = importlib.import_module(sys.argv[1].replace(".py", ""))
def chk(label, val):
    bare = ae.PROTECT.sub(" ", val)
    for sent in re.split(r"[.!?؟]", bare):
        k = len(sent.split())
        if k > ae.MAXWORDS and ae.AR.search(sent):
            print("  %s (%d words): %s" % (label, k, sent.strip()[:110]))
for name in ("ENTRIES", "RETURNS", "LINKS"):
    obj = getattr(mod, name, None)
    if not obj: continue
    items = obj if isinstance(obj, list) else [(k, l) for k, v in obj.items() for l in v]
    for key, e in items:
        if "whyAr" in e:
            for f in ("whyAr", "plainAr", "refAr"): chk("%s %s" % (e["n"], f), e.get(f, ""))
            for wd in e.get("words", []): chk("%s word" % e["n"], wd.get("meaningAr", ""))
            for l in e.get("links", []): chk("%s link %s" % (e["n"], l["ref"][-9:]), l["howAr"])
        else:
            chk("%s -> %s" % (key, e["ref"][-9:]), e["howAr"])
print("long scan done")
