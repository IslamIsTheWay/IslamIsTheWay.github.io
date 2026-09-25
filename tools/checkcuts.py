# -*- coding: utf-8 -*-
"""Every Arabic quotation in the tadabbur entries I added must be (1) a run of
whole words of some verse in js/quran-text, and (2) not left dangling on a
conjunction or preposition. usage: python checkcuts.py 2 11 22 26 …"""
import io, os, re, sys, unicodedata
import importlib.util
_here = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location('quran_cut', os.path.join(_here, 'quran-cut.py'))
tad = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(tad)

DANGLING = {"و", "وَ", "مِن", "مِنَ", "مِّن", "إِلَى", "إِلَىٰ", "عَلَى", "عَلَىٰ", "فِي", "فِى",
            "أَن", "أَنَّ", "إِنَّ", "ثُمَّ", "بِ", "لِ", "كَ", "أَوۡ", "وَٱللَّهُ", "وَمِن", "وَمِنَ",
            "بِمَا", "لَهُ", "لَهُمۡ", "هُوَ", "مَا", "لَا", "يَا", "قَالَ"}

def bare(x):
    return "".join(c for c in unicodedata.normalize("NFD", x) if not unicodedata.combining(c))

ALL = None
def is_run(text):
    global ALL
    if ALL is None:
        ALL = []
        for s in range(1, 115):
            for i, v in enumerate(tad.surah(s)["a"], 1):
                ALL.append((s, i, " " + v.replace(chr(160), " ").strip() + " "))
    t = " " + text.strip() + " "
    return [(s, i) for s, i, v in ALL if t in v]

def main():
    surah_num = int(sys.argv[1])
    nums = [int(x) for x in sys.argv[2:]]
    s = io.open(os.path.join(os.path.dirname(_here), "js", "tadabbur.js"), encoding="utf-8").read()
    start = s.index("\n  %d: {" % surah_num); end = s.index("\n  },", start)
    seg = s[start:end]
    bad = 0
    for n in nums:
        i = seg.index('\n        n: %d,' % n)
        j = seg.find('\n        n: ', i + 5)
        block = seg[i:j if j > 0 else len(seg)]
        quotes = re.findall(r"\ufd3f([^\ufd3e]+)\ufd3e", block)          # ﴿…﴾ inside prose
        quotes += re.findall(r'\n            ar: "([^"]+)"', block)      # the links' verses
        quotes += re.findall(r'\n        ar: "([^"]+)"', block)          # the verse itself
        quotes += re.findall(r'\n            w: "([^"]+)"', block)       # the words
        for whole in quotes:
          for qt in whole.split(" ۝ "):   # a quotation may span verses
            where = is_run(qt)
            last = qt.split()[-1]
            if not where:
                print("  %d:%d  NOT A MUSHAF RUN: %s" % (surah_num, n, qt[:60])); bad += 1
            elif bare(last) in {bare(d) for d in DANGLING}:
                print("  %d:%d  ends on a joining word (%s): …%s" % (surah_num, n, last, qt[-45:])); bad += 1
    print("surah %d: %d quotations checked in %d verses, %d to look at"
          % (surah_num, len(nums), len(nums), bad))

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
