# -*- coding: utf-8 -*-
"""runcuts.py [--ref <file>] <surah> [<surah> …] — run tools/checkcuts.py over
every entry of each surah and print only the flags. With --ref, a flag whose
text also appears when the same check runs on <file> (the HEAD copy of
js/tadabbur.js) is marked OLD, so only new problems stand out."""
import io, os, re, subprocess, sys, shutil, tempfile
sys.stdout.reconfigure(encoding="utf-8")
REPO = r"C:\Users\User\islam-is-the-way-site"
args = sys.argv[1:]
ref = None
if args and args[0] == "--ref":
    ref, args = args[1], args[2:]


def entries(text, s):
    start = text.index("\n  %d: {" % s)
    m = re.compile(r"\n  \},?\n").search(text, start)
    seg = text[start:m.start() if m else len(text)]
    return [int(x) for x in re.findall(r"\n        n: (\d+),", seg)]


_roots = {}


def flags(tadfile, s):
    text = io.open(tadfile, encoding="utf-8").read()
    ns = entries(text, s)
    # checkcuts reads <repo>/js/tadabbur.js — point it at a temp repo copy when needed
    if os.path.abspath(tadfile) == os.path.join(REPO, "js", "tadabbur.js"):
        root = REPO
    elif tadfile in _roots:
        root = _roots[tadfile]
    else:
        root = _roots[tadfile] = tempfile.mkdtemp()
        os.makedirs(os.path.join(root, "js"))
        os.makedirs(os.path.join(root, "tools"))
        shutil.copy(tadfile, os.path.join(root, "js", "tadabbur.js"))
        for f in ("checkcuts.py", "quran-cut.py"):
            shutil.copy(os.path.join(REPO, "tools", f), os.path.join(root, "tools", f))
        shutil.copytree(os.path.join(REPO, "js", "quran-text"), os.path.join(root, "js", "quran-text"))
    out = subprocess.run([sys.executable, os.path.join(root, "tools", "checkcuts.py"), str(s)] + [str(n) for n in ns],
                         capture_output=True, text=True, encoding="utf-8").stdout
    return [l for l in out.splitlines() if l.startswith("  ")]


for s in [int(x) for x in args]:
    now = flags(os.path.join(REPO, "js", "tadabbur.js"), s)
    old = set(flags(ref, s)) if ref else set()
    for l in now:
        print(("OLD " if l in old else "NEW ") + l)
print("done")
