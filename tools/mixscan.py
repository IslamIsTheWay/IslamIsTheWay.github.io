"""Text written for a reader in BOTH languages at once.

The site shows one language at a time: English inside .en-only, Arabic inside
.ar-only, and i18n.js hides the other. A string that carries both — "Listening
— click the mic again to stop · أستمع — اضغط الميكروفون ثانيةً للإيقاف" — and
is written with textContent (or alert, or into a title) has no span to hide,
so an Arabic reader sees the English half and an English reader the Arabic.
The owner's screenshot of the Guidance microphone, 22 September 2026, is how
this was found; leakaudit.py could not see it, because it only appears while
the microphone is listening.

This reads the SOURCE, so it sees every state a page can reach:
  1. a string literal holding English words and Arabic words, on a line that
     writes it somewhere a reader sees it as plain text (textContent,
     innerText, alert/confirm/prompt, a placeholder, the toast);
  2. a title / aria-label / placeholder / optgroup label attribute, or the
     literal text of an <option>, holding both — attributes go through
     i18n.js as English with the Arabic in its dictionary, and a select that
     is built from data is built in the reader's language (leakaudit.py, which
     reads the rendered page, catches the ones built from data).
Not counted: markup that already splits the two into en-only / ar-only
spans, a brand name inside Arabic ("متصفح Chrome"), and single Arabic letters
named in an English sentence ("ق, ج and ظ").

usage:  python tools/mixscan.py            list them
        python tools/mixscan.py --check    exit 1 if any are found
"""
import io, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SINKS = re.compile(r"\.textContent\s*=|\.innerText\s*=|\balert\s*\(|\bconfirm\s*\(|\bprompt\s*\("
                   r"|\.placeholder\s*=|\b_iitwToast\s*\(")
STR = re.compile(r'"((?:[^"\\\n]|\\.)*)"|' + r"'((?:[^'\\\n]|\\.)*)'")
ATTR = re.compile(r'(?:\b(?:title|aria-label|placeholder|label)\s*=\s*|setAttribute\(\s*"(?:title|aria-label|placeholder)"\s*,\s*)"([^"\n]*)"')
# an <option> cannot hold two spans either: its literal text must be one language
OPTION = re.compile(r'<option[^>]*>([^<]*)</option>')
LATIN = re.compile(r"[A-Za-z]{3,}")
ARABIC_WORD = re.compile(r"[ء-ي][ء-يً-ْ]+")
BRANDS = {"chrome", "edge", "safari", "firefox", "github", "gmail", "whatsapp", "youtube", "windows",
          "microsoft", "google", "iphone", "android", "zoom", "jitsi", "email", "http", "https", "www",
          "com", "org", "net", "html", "pdf", "sms", "shorts", "instagram", "telegram", "facebook"}

def mixed(s):
    if "en-only" in s or "ar-only" in s or "ar('" in s:
        return False
    words = [w for w in LATIN.findall(s) if w.lower() not in BRANDS]
    return bool(words) and bool(ARABIC_WORD.search(s))

def scan(path):
    out = []
    lines = io.open(path, encoding="utf-8").read().split("\n")
    for i, line in enumerate(lines):
        # the sink may sit on this line or open a ternary one or two lines up
        window = line + " " + (lines[i - 1] if i else "") + " " + (lines[i - 2] if i > 1 else "")
        seen = set()
        if SINKS.search(window):
            for m in STR.finditer(line):
                s = m.group(1) if m.group(1) is not None else m.group(2)
                if s and mixed(s):
                    seen.add(s)
        for m in ATTR.finditer(line):
            if mixed(m.group(1)):
                seen.add(m.group(1))
        for m in OPTION.finditer(line):
            if mixed(m.group(1)):
                seen.add(m.group(1))
        out += [(i + 1, s) for s in sorted(seen)]
    return out

def main():
    files = [f for f in os.listdir(ROOT) if f.endswith(".html")]
    files += [os.path.join("js", f) for f in os.listdir(os.path.join(ROOT, "js")) if f.endswith(".js")]
    found = 0
    for f in sorted(files):
        for n, s in scan(os.path.join(ROOT, f)):
            found += 1
            print("%s:%d  %s" % (f, n, s[:110]))
    print("strings written in both languages at once: %d" % found)
    if "--check" in sys.argv and found:
        sys.exit(1)

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
