"""Cut the Mushaf's own words — for js/tadabbur.js and js/miracles.js.

RULE ONE OF THAT FILE: no Arabic of the Quran is typed. `V(s, a)` cuts the
verse out of js/quran-text/<s>.js, and `part(s, a, first, last)` cuts a run of
whole words out of it, so every quotation is the Mushaf's own text.
"""
import io, json, os, re, unicodedata

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_cache = {}

def surah(n):
    if n not in _cache:
        t = io.open(os.path.join(REPO, "js", "quran-text", "%d.js" % n), encoding="utf-8").read()
        i = t.index("QURAN_TEXT[")
        _cache[n] = json.loads(t[t.index("=", i) + 1: t.rindex("}") + 1])
    return _cache[n]

def V(s, a):
    """The whole verse, exactly as the Madinah Mushaf has it."""
    return surah(s)["a"][a - 1].replace(chr(160), " ").strip()

def words(s, a):
    """The verse's words with their positions — choose a run by number, never
    by typing Arabic (a typed word differs from the Mushaf's in a mark and the
    cut silently fails)."""
    for i, w in enumerate(V(s, a).split()):
        print("%3d %s" % (i, w))

def part(s, a, i, j=None):
    """Words i..j of the verse, inclusive — the Mushaf's own letters."""
    ws = V(s, a).split()
    return " ".join(ws[i:(i if j is None else j) + 1])

def en_verse(s, a):
    """Only for checking myself while writing — never written into the file."""
    return surah(s).get("e", [None] * 300)[a - 1] if "e" in surah(s) else None

# ---------------------------------------------------------------- serialising
def _s(v):
    """A JS string in the file's style: double quotes, real newlines escaped."""
    out = json.dumps(v, ensure_ascii=False)
    return out

def ser(o, indent=8):
    """Serialise a dict/list the way js/tadabbur.js is written: unquoted keys."""
    pad = " " * indent
    if isinstance(o, dict):
        rows = []
        for k, v in o.items():
            if v is None or v == [] or v == "":
                continue
            rows.append("%s  %s: %s" % (pad, k, ser(v, indent + 2)))
        return "{\n" + ",\n".join(rows) + "\n" + pad + "}"
    if isinstance(o, list):
        return "[\n" + ",\n".join(pad + "  " + ser(x, indent + 2) for x in o) + "\n" + pad + "]"
    if isinstance(o, bool):
        return "true" if o else "false"
    if isinstance(o, (int, float)):
        return str(o)
    return _s(o)

def add_verses(surah_num, entries, path=None):
    """Append verse entries to that surah's `ayat` array in js/tadabbur.js."""
    p = path or os.path.join(REPO, "js", "tadabbur.js")
    s = io.open(p, encoding="utf-8").read()
    start = s.index("\n  %d: {" % surah_num)
    end = s.index("\n  },", start)
    seg = s[start:end]
    close = seg.rindex("\n    ]")          # the end of `ayat: [ … ]`
    body = ",\n" + ",\n".join("      " + ser(e, 6) for e in entries)
    s = s[:start] + seg[:close] + body + seg[close:] + s[end:]
    io.open(p, "w", encoding="utf-8", newline="").write(s)
    print("surah %d: +%d verses" % (surah_num, len(entries)))

def check_written(surah_num, numbers):
    """Every `ar` of the new entries must be the Mushaf's text, word for word."""
    p = os.path.join(REPO, "js", "tadabbur.js")
    s = io.open(p, encoding="utf-8").read()
    start = s.index("\n  %d: {" % surah_num)
    end = s.index("\n  },", start)
    seg = s[start:end]
    bad = 0
    for n in numbers:
        m = re.search(r"\n        n: %d,\n        ar: \"([^\"]+)\"" % n, seg)
        if not m:
            print("  %d:%d NOT FOUND" % (surah_num, n)); bad += 1; continue
        if (" " + m.group(1) + " ") not in (" " + V(surah_num, n) + " "):
            print("  %d:%d ar is NOT a run of the Mushaf's words" % (surah_num, n)); bad += 1
    print("checked %d verses, %d bad" % (len(numbers), bad))
    return bad == 0
