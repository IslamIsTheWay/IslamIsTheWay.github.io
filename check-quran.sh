#!/usr/bin/env bash
# ============================================================
#  check-quran.sh — the Quran on this site is the Madinah Mushaf's text
# ============================================================
#
#  Every verse on the site is the King Fahd Complex's Hafs text (the text of
#  the Mushaf printed in Madinah), drawn in the Complex's own font. The owner
#  asked for exactly this in September 2026: the earlier text (Tanzil's
#  Uthmani, from alquran.cloud) looked to him like "a different script".
#  See HANDOFF PART 28.
#
#  The old text creeps back the moment someone copies a verse from
#  alquran.cloud, tanzil.net or an old commit instead of from
#  js/quran-text.js. Its fingerprints cannot occur in the Madinah text:
#
#    ٱلْ      the definite article with the ROUND sukun (Madinah: ٱلۡ)
#    ًۭ ٌۭ ٍۭ    tanween followed by a small meem - Tanzil's way of marking
#    ًۢ ٌۢ ٍۢ    the open tanween (Madinah: ٗ ٞ ٖ, or a vowel + meem)
#    ۟        Tanzil's silent-letter circle (Madinah: ْ)
#
#  and the font files must be the unmodified KFGQPC release - the licence
#  forbids altering them (fonts/README.txt).
#
#  Run it with check-images.sh and check-counts.sh before every commit.
#  Usage:  ./check-quran.sh
# ------------------------------------------------------------

cd "$(dirname "$0")" || exit 2
fail=0

files=$(ls ./*.html js/*.js data/*.json 2>/dev/null | grep -v 'js/quran-text.js')

for pat in 'ٱلْ' 'ًۭ' 'ٌۭ' 'ٍۭ' 'ًۢ' 'ٌۢ' 'ٍۢ' '۟'; do
  hits=$(grep -nF -- "$pat" $files 2>/dev/null)
  if [ -n "$hits" ]; then
    echo "OLD (Tanzil) QURAN SPELLING found - replace it with the words from js/quran-text.js:"
    echo "$hits" | cut -c1-160 | head -8
    fail=1
  fi
done

# the reader's own text must be the Madinah text too
if grep -qF 'ٱلْ' js/quran-text/*.js; then
  echo "js/quran-text/ carries the old Tanzil text - it must be KFGQPC Hafs (PART 28)"
  fail=1
fi

# ...and no page may FETCH the old text to show it. The fingerprints above
# only see what is written in the files; the Guidance page fetched Tanzil's
# quran-uthmani from alquran.cloud at run time and printed it under every
# theme card until September 2026 (PART 30). Verse text for display comes
# from js/quran-text.js / js/theme-verses.js, or quran.com's qpc_hafs.
# (main.js fetches quran-simple only to MATCH a video title to a verse.)
hits=$(grep -nE "alquran\.cloud/v1/[^\"'\` ]*quran-(uthmani|simple)" ./*.html js/*.js 2>/dev/null | grep -v '^js/main.js:')
if [ -n "$hits" ]; then
  echo "A PAGE FETCHES NON-MADINAH QURAN TEXT - take it from js/quran-text.js or quran.com's qpc_hafs:"
  echo "$hits" | cut -c1-160 | head -8
  fail=1
fi

# the Guidance theme verses must be the reader's text, verse for verse
if [ -f js/theme-verses.js ] && command -v python >/dev/null 2>&1; then
  python - <<'PY' || fail=1
import json, re, sys
def read_parts():
    """The Quran is one file per surah since it was split for the reader
    (js/quran-text/<n>.js, loaded on demand). Read them back as one map."""
    out = {}
    for n in range(1, 115):
        t = open("js/quran-text/%d.js" % n, encoding="utf-8").read()
        i = t.index("QURAN_TEXT[")
        out[str(n)] = json.loads(t[t.index("=", i) + 1: t.rindex("}") + 1])
    return out

qt = read_parts()
tv = open("js/theme-verses.js", encoding="utf-8").read()
tv = json.loads(tv[tv.index("const THEME_VERSES = ") + 21: tv.rindex("}") + 1])
bad = [k for k, v in tv.items()
       if v["a"] != qt[k.split(":")[0]]["a"][int(k.split(":")[1]) - 1]]
if bad:
    print("js/theme-verses.js differs from js/quran-text.js at:", ", ".join(bad[:8]))
    sys.exit(1)
PY
fi

# Ar-Raghib's tafsir on the Quran page (js/raghib/, HANDOFF PART 31): every
# ﴿…﴾ in those files was cut from js/quran-text.js by the builders. Prove it
# stays so: each quotation, verse by verse (a quotation running over several
# verses is joined with " ۝ "), must be a run of whole words of one verse.
if [ -d js/raghib ] && command -v python >/dev/null 2>&1; then
  python - <<'PY' || fail=1
import json, re, os, sys
sys.stdout.reconfigure(encoding="utf-8")
def read_parts():
    """The Quran is one file per surah since it was split for the reader
    (js/quran-text/<n>.js, loaded on demand). Read them back as one map."""
    out = {}
    for n in range(1, 115):
        t = open("js/quran-text/%d.js" % n, encoding="utf-8").read()
        i = t.index("QURAN_TEXT[")
        out[str(n)] = json.loads(t[t.index("=", i) + 1: t.rindex("}") + 1])
    return out

qt = read_parts()
# (a verse opening with ۞ has a no-break space after it)
verses = [" " + a.replace(chr(160), " ") + " " for s in qt.values() for a in s["a"]]
by_word = {}
for i, v in enumerate(verses):
    for w in set(v.split()):
        by_word.setdefault(w, []).append(i)
bad, n = [], 0
for root, _, files in os.walk("js/raghib"):
    for f in files:
        t = open(os.path.join(root, f), encoding="utf-8").read()
        for q in re.findall("﴿([^﴾]*)﴾", t):
            for part in q.split(" ۝ "):
                part = part.strip()
                n += 1
                w0 = part.split()[0] if part.split() else ""
                if not any((" " + part + " ") in verses[i] for i in by_word.get(w0, [])):
                    bad.append("%s: %s" % (f, part[:60]))
if bad:
    print("A QUOTATION IN js/raghib IS NOT THE MUSHAF'S TEXT (%d of %d) - rebuild it, never type a verse:" % (len(bad), n))
    print("\n".join(bad[:8]))
    sys.exit(1)
print("  js/raghib: %d quotations, every one the Mushaf's words" % n)
PY
fi

check_hash() {   # file expected-sha256
  if [ ! -f "$1" ]; then echo "MISSING: $1"; fail=1; return; fi
  got=$(sha256sum "$1" | cut -d' ' -f1)
  if [ "$got" != "$2" ]; then echo "MODIFIED: $1 is not the KFGQPC release (sha256 $got)"; fail=1; fi
}
check_hash fonts/UthmanicHafs_V18.woff2 8c00e7a7d5f773bcfb1642fdcfba505dbd81975fef39f14718827a32d075020c
check_hash fonts/UthmanicHafs_V18.ttf   a0636e68e375af9552470d67773936f54d536e6586ce2608311b2fe7f9cbec3a

[ "$fail" = "0" ] && echo "✓ Quran text check passed" || echo "✗ Quran text check FAILED"
exit $fail
