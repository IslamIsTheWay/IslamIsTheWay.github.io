"""Find text that was mangled by being read in the wrong encoding.

WHAT IT CATCHES. A UTF-8 file read as Latin-1 and written back turns every
non-ASCII character into two or three others: an em dash becomes "â" plus
two control characters, a middle dot becomes "Â·", a curly quote becomes
"â€œ". It is invisible in a diff that is itself mis-decoded, and it sat in
the staff dashboard reading "No courses yet â the Courses page..." for
who knows how long. U+FFFD, the replacement character, means the same thing
happened and the original is already lost.

  python tools/textscan.py            list what is mangled
  python tools/textscan.py --check    fail if anything is (used by CI)
"""
import io, os, sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXT = (".html", ".js", ".json", ".css", ".md", ".webmanifest")
SKIP = (".git", "node_modules", "HANDOFF", ".claude")

# The tell-tales: the Latin-1 reading of a UTF-8 lead byte, and the
# replacement character.
BAD = [
    (chr(0x00C3), "Ã - a UTF-8 two-byte character read as Latin-1"),
    (chr(0x00C2), "Â - a UTF-8 two-byte character read as Latin-1"),
    (chr(0x00E2) + chr(0x0080), "â€ - a UTF-8 three-byte character read as Latin-1"),
    (chr(0x00D8) + chr(0x008C), "Ø - Arabic read as Latin-1"),
    (chr(0xFFFD), "U+FFFD - the text was decoded wrongly and is already lost"),
]

hits = []
for root, dirs, files in os.walk(HERE):
    dirs[:] = [d for d in dirs if d not in SKIP and not d.startswith(".")]
    for f in files:
        if not f.endswith(EXT):
            continue
        path = os.path.join(root, f)
        try:
            text = io.open(path, encoding="utf-8").read()
        except Exception:
            continue
        for n, line in enumerate(text.splitlines(), 1):
            for mark, why in BAD:
                if mark in line:
                    rel = os.path.relpath(path, HERE).replace(os.sep, "/")
                    hits.append((rel, n, why, line.strip()[:90]))
                    break

for rel, n, why, line in hits:
    print("%s:%d  %s\n    %s" % (rel, n, why, line))
print("mangled lines: %d" % len(hits))
if "--check" in sys.argv and hits:
    sys.exit(1)
