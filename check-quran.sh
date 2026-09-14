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
if grep -qF 'ٱلْ' js/quran-text.js; then
  echo "js/quran-text.js carries the old Tanzil text - it must be KFGQPC Hafs (PART 28)"
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
qt = open("js/quran-text.js", encoding="utf-8").read()
qt = json.loads(qt[qt.index("const QURAN_TEXT = ") + 19: qt.rindex("}") + 1])
tv = open("js/theme-verses.js", encoding="utf-8").read()
tv = json.loads(tv[tv.index("const THEME_VERSES = ") + 21: tv.rindex("}") + 1])
bad = [k for k, v in tv.items()
       if v["a"] != qt[k.split(":")[0]]["a"][int(k.split(":")[1]) - 1]]
if bad:
    print("js/theme-verses.js differs from js/quran-text.js at:", ", ".join(bad[:8]))
    sys.exit(1)
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
