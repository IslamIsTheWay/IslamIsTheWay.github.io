# -*- coding: utf-8 -*-
"""Every hadith on the Quran in Your Life pages (js/life/), looked up at the
number it cites — and every «quotation» in its Arabic found word for word.

The references were checked this way when the pages were written (26 November
2026): 196 sources; one wrong number found (al-Bukhari 7150 for "dies while
deceiving them" — it is 7151) and 15 quotations brought back to the hadith's
own wording. Run it again whenever a hadith in js/life/ is added or changed.

THE DATA: fawazahmed0/hadith-api, served by jsDelivr — the four collections
the pages cite, in English and in Arabic. About 45MB, downloaded once into a
cache folder OUTSIDE the repo (the system temp folder, iitw-hadith/).

  al-Bukhari, Abu Dawud, at-Tirmidhi  by the standard number (hadithnumber)
  Muslim  by Abd al-Baqi's number, which these editions keep in arabicnumber.
          Its labels drift by one in places and a few are missing (3006, the
          hadith of Abu al-Yasar, has none: it sits between 3005 and 3007), so
          a Muslim number is looked for at its neighbours too, and an
          unlabelled entry counts for the numbers on either side of it.

TWO CHECKS
  1. QUOTATIONS — these fail the run. Every «…» in a hadith's Arabic must be
     found at the number cited, once both are reduced to bare letters (the
     build's own bare(): no vowel marks, no alef, no hamza seats). "..." in a
     quotation marks words left out; each part is looked for on its own. The
     two spellings in SPELLING are the same word written two ways.
  2. NUMBERS — printed for a person to read. The narrator named in the card
     should appear in the hadith at that number, and so should the card's
     English key words. Low scores are printed with both texts side by side.
     It is fuzzy by nature: read the flagged ones, do not count them. A
     number that is not in the collection at all fails the run.

    python tools/hadithcheck.py            both checks
    python tools/hadithcheck.py --quotes   the quotations only
"""
import importlib.util, json, os, re, sys, tempfile, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("blp", os.path.join(HERE, "build-life-pages.py"))
blp = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(blp)

CACHE = os.path.join(tempfile.gettempdir(), "iitw-hadith")
URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/%s.json"
COLLECTIONS = ("bukhari", "muslim", "abudawud", "tirmidhi")
PAT = [("bukhari", re.compile(r"Sahih al-Bukhari (\d+)(?:[–-](\d+))?")),
       ("muslim", re.compile(r"Sahih Muslim (\d+)")),
       ("abudawud", re.compile(r"Sunan Abi Dawud (\d+)")),
       ("tirmidhi", re.compile(r"Jami' at-Tirmidhi (\d+)"))]
# The same word, spelt two ways: the card's spelling, the edition's.
SPELLING = [("مؤكله", "موكله"),      # Muslim 1598, «آكل الربا ومؤكله»
            ("بوائقه", "بوايقه")]    # al-Bukhari 6016, «لا يأمن جاره بوائقه»


def edition(name):
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, name + ".json")
    if not os.path.exists(path):
        print("downloading %s …" % name, flush=True)
        req = urllib.request.Request(URL % name, headers={"User-Agent": "hadithcheck"})
        with urllib.request.urlopen(req, timeout=120) as r:
            data = r.read()
        with open(path, "wb") as f:
            f.write(data)
    with open(path, encoding="utf-8") as f:
        return json.load(f)["hadiths"]


def index(lang):
    """{collection: {number: [hadith, …]}} for one language."""
    out = {}
    for col in COLLECTIONS:
        d = {}
        hs = edition("%s-%s" % (lang, col))
        if col != "muslim":
            for h in hs:
                d.setdefault(int(h["hadithnumber"]), []).append(h)
        else:
            last = None
            for h in hs:
                try:
                    k = int(float(str(h.get("arabicnumber")).split()[0]))
                except (TypeError, ValueError, IndexError):
                    k = None
                if k is None:
                    # unlabelled: it belongs to the number before or after
                    if last is not None:
                        d.setdefault(last, []).append(h)
                        d.setdefault(last + 1, []).append(h)
                    continue
                d.setdefault(k, []).append(h)
                last = k
        out[col] = d
    return out


def cited(src):
    """[(collection, number), …] in a source line."""
    out = []
    for col, rx in PAT:
        for m in rx.finditer(src):
            a = int(m.group(1))
            b = int(m.group(2)) if m.lastindex and m.lastindex >= 2 and m.group(2) else a
            out += [(col, n) for n in range(a, b + 1)]
    return out


def hadith_rows():
    for f in sorted(os.listdir(blp.DATA)):
        if not f.endswith(".js"):
            continue
        sec = blp.load_entry(os.path.join(blp.DATA, f), f[:-3])
        for it in (sec.get("items") or sec.get("why")):
            for h in it.get("hadith") or []:
                yield f[:-3], it["v"], h


def bare(t):
    return " ".join(blp.bare(t))


def check_quotes(ar):
    bad = total = 0
    for sid, v, h in hadith_rows():
        quotes = re.findall(r"«([^«»]+)»", h["ar"])
        texts = []
        for col, n in cited(h["src"]):
            for k in ((n - 1, n, n + 1) if col == "muslim" else (n,)):
                texts += [x["text"] for x in ar[col].get(k, [])]
        if not quotes or not texts:
            continue
        hay = " " + bare(" ".join(texts)) + " "
        hay = hay.replace(" صلي لله عليه وسلم ", " ")     # the editions write ﷺ out
        for q in quotes:
            for old, new in SPELLING:
                q = q.replace(old, new)
            for part in re.split(r"\.\.\.|…", q):
                p = bare(part)
                if len(p.split()) < 2:
                    continue
                total += 1
                if " " + p + " " in hay:
                    continue
                w = p.split()
                best = 0
                for i in range(len(w)):
                    for j in range(len(w), i + best, -1):
                        if " " + " ".join(w[i:j]) + " " in hay:
                            best = max(best, j - i)
                            break
                bad += 1
                print("QUOTE NOT FOUND  %s %s [%s] — %d of %d words in a row"
                      % (sid, v, h["src"][:60], best, len(w)))
                print("    the card:  «%s»" % part.strip())
    print("quotations checked: %d, not found as written: %d" % (total, bad))
    return bad


STOP = set("that this with from they them their there have were what when will would your about which "
           "then than into upon said says also only even very more most other such been being because "
           "allah's prophet messenger allah".split())


def check_numbers(en):
    def words(t):
        return {w for w in re.findall(r"[a-z]{4,}", t.lower()) if w not in STOP}

    def norm(t):
        t = re.sub(r"[^a-z]", "", t.lower()).replace("ay", "ai").replace("dh", "z").replace("th", "t")
        return t.rstrip("h")

    missing = flagged = total = 0
    for sid, v, h in hadith_rows():
        m = re.search(r"— from ([^;,]+)", h["src"])
        names = []
        if m:
            nm = re.sub(r"\b(ibn|bint|al|an|as|ad|ar|at|ash|az|the|wife|of|and|abu|abd|umm)\b", " ",
                        m.group(1).lower().replace("-", " "))
            names = re.findall(r"[a-z']{3,}", nm)
        for col, n in cited(h["src"]):
            total += 1
            hs = en[col].get(n)
            if not hs:
                missing += 1
                print("NOT IN THE COLLECTION  %s %s: %s %d" % (sid, v, col, n))
                continue
            text = " ".join(x["text"] for x in hs)
            mine = words(h["en"])
            score = len(mine & words(text)) / max(1, len(mine))
            low = norm(text)
            nar_ok = (not names) or any(norm(t)[:5] in low for t in names if len(norm(t)) >= 3)
            if score < 0.30 or not nar_ok:
                flagged += 1
                print("READ THIS  %s %s: %s %d — key words %.2f%s"
                      % (sid, v, col, n, score, "" if nar_ok else ", narrator %s not found" % "/".join(names)))
                print("    the card:  " + h["en"][:240])
                print("    the book:  " + re.sub(r"\s+", " ", text)[:400])
    print("numbers checked: %d, not in the collection: %d, to read by hand: %d" % (total, missing, flagged))
    return missing


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    bad = check_quotes(index("ara"))
    if "--quotes" not in sys.argv:
        bad += check_numbers(index("eng"))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
