"""Find rules that hard-code a PALE colour and have no dark override.

WHY. gen_dark.py rewrites a pale SINGLE colour into a dark tint, and the
browser audit (tools/darkaudit.py) reads an element's background-COLOR.
Neither can see a colour inside a gradient, a shadow ring or a keyframe - so
the numbers strip under the home page hero faded into a sheet of white, with
unreadable labels on it, in the dark theme, on the home page, for everyone,
and nothing said so.

  python tools/lightscan.py            list them
  python tools/lightscan.py --check    fail if there are any (used by CI)
"""
import io, re, os, sys
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS = os.path.join(HERE, "css", "style.css")
css = io.open(CSS, encoding="utf-8").read()
DARKSEL = "data-theme"
dark_lines = chr(10).join(l for l in css.splitlines() if DARKSEL in l)
g0 = css.index("/* ===== GENERATED: dark tints")
g1 = css.index("/* ===== END GENERATED ===== */")
body = css[:g0] + css[g1:]

def lum(hexs):
    h = hexs.lstrip("#")
    if len(h) == 3: h = "".join(c * 2 for c in h)
    if len(h) < 6: return 0
    r, g, b = (int(h[i:i+2], 16) / 255 for i in (0, 2, 4))
    f = lambda c: c / 12.92 if c <= .03928 else ((c + .055) / 1.055) ** 2.4
    return .2126 * f(r) + .7152 * f(g) + .0722 * f(b)

def rules(src):
    out, i, n, stack, start = [], 0, len(src), [], 0
    while i < n:
        ch = src[i]
        if ch == "{":
            head = src[start:i].strip()
            if head.startswith("@"):
                stack.append(head); start = i + 1; i += 1; continue
            j, d = i + 1, 1
            while j < n and d:
                if src[j] == "{": d += 1
                elif src[j] == "}": d -= 1
                j += 1
            out.append((head, src[i+1:j-1], list(stack)))
            i = j; start = i; continue
        if ch == "}":
            if stack: stack.pop()
            i += 1; start = i; continue
        i += 1
    return out

HEX = re.compile(r"#[0-9a-fA-F]{3,8}")
PALE_WORDS = re.compile(r"\b(white|ivory|snow|linen|beige|whitesmoke|floralwhite|ghostwhite)\b", re.I)

def strip_comments(s):
    while True:
        a = s.find("/*")
        if a < 0: return " ".join(s.split())
        b = s.find("*/", a + 2)
        s = s[:a] + " " + (s[b+2:] if b >= 0 else "")

miss = []
for sel, decls, inside in rules(body):
    if sel.startswith(":root") or DARKSEL in sel: continue
    s = strip_comments(sel)
    for line in decls.split(";"):
        l = strip_comments(line)
        if not l: continue
        prop = l.split(":")[0].strip().lower()
        if not (prop.startswith("background") or prop == "box-shadow"): continue
        pale = [h for h in HEX.findall(l) if lum(h) > 0.62] + PALE_WORDS.findall(l)
        if "var(--white)" in l: pale.append("var(--white)")
        if not pale: continue
        if any(part.strip() and part.strip() in dark_lines for part in s.split(",")):
            continue
        miss.append((s[:64], l[:96], " ".join(inside)[:26]))

for sel, decl, at in sorted(miss):
    print("%-64s %s %s" % (sel, decl, ("[" + at + "]") if at else ""))
print("%d pale declarations with no dark rule" % len(miss))
if "--check" in sys.argv and miss:
    sys.exit(1)
