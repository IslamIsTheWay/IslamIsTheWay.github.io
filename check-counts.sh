#!/usr/bin/env bash
# ============================================================
#  check-counts.sh — stop the home page claiming a stale number
# ============================================================
#
#  The owner reads the numbers, and hand-typed ones have gone stale more than
#  once on the live site:
#
#    * the Golden Age card said 28 figures when there were 41
#    * the worship reference said "Sixteen steps" when there were 24
#    * the Judgement cards said "52 passages of the Quran" when there were 54
#
#  index.html now COUNTS everything it can from data.js at render time, so
#  those can no longer drift. Four figures cannot be counted there, because
#  their data files are too heavy to load on the home page. This script is the
#  guard for those four, plus the numbers written into the card paragraphs.
#
#  It counts the real thing in the real file and compares. Run it with
#  check-images.sh before every commit; a non-zero exit means a number on the
#  home page no longer matches the data behind it.
#
#  Usage:  ./check-counts.sh
# ------------------------------------------------------------

cd "$(dirname "$0")" || exit 2
fail=0

# count_entries <file> <js-array-or-object-name>
# Counts top-level entries by counting the lines that open one. Every data file
# on this site is written one entry per line-block with a consistent indent,
# which is what makes this safe; it is checked against a known-good value below.
count_lives()    { grep -cE '^\s{2}"[a-z0-9-]+":\s*\{' js/lives.js; }
count_golden()   { grep -cE '^\s{2}\{\s*$' js/golden.js; }

# js/sunnah.js holds SUNNAH_CATEGORIES first and SUNNAH after it, both at the
# same indent. Counting the whole file returns 184 — the 166 practices plus the
# 18 categories. So start counting at the line SUNNAH itself opens.
count_sunnah() {
  local start
  start=$(grep -nE '^const SUNNAH = \[' js/sunnah.js | cut -d: -f1)
  tail -n +"${start:-1}" js/sunnah.js | grep -cE '^\s{2}\{'
}

# Tadabbur is nested: TADABBUR[surah].ayat is an array of verse objects, and
# each one opens with its verse number on its own line.
# Counts VERSES, not blocks. One block may explain a run of ayat - 26:78-82 is
# a single entry covering five - and the home page claims "verses explained",
# so counting blocks understated it. The run length is read from the bullet the
# file uses to join a span in the `ar` field.
count_tadabbur() {
  python - <<'PY'
import io, re
s = io.open("js/tadabbur.js", encoding="utf-8").read()
lines = s.split("\n")
total = 0
for i, ln in enumerate(lines):
    if re.match(r'^        n: \d+,', ln):
        ar = lines[i + 1] if i + 1 < len(lines) else ""
        total += ar.count(" \u2022 ") + 1 if ar.strip().startswith("ar:") else 1
print(total)
PY
}

check() {                       # check <label> <actual> <expected-in-index>
  local label="$1" actual="$2" expected="$3"
  if [ "$actual" != "$expected" ]; then
    echo "MISMATCH  $label: index.html says $expected, the data has $actual"
    fail=1
  else
    echo "ok        $label = $actual"
  fi
}

# What index.html currently claims, read out of the file itself.
# Matched on the LABEL, never on the number: keying this on the digits would
# mean the script stopped finding the line the moment the number changed,
# which is precisely the case it exists to catch.
claim() { grep -F "$1" index.html | grep -oE 'n:[[:space:]]*[0-9]+' | grep -oE '[0-9]+' | head -1; }

claim_tadabbur=$(claim 'verses explained in depth')
claim_lives=$(claim 'lives told in full')
claim_sunnah=$(claim 'sunnah practices')
claim_golden=$(claim 'of the Golden Age')

echo "Checking the home page numbers against the data files…"
check "tadabbur verses" "$(count_tadabbur)" "${claim_tadabbur:-MISSING}"
check "full lives"      "$(count_lives)"    "${claim_lives:-MISSING}"
check "sunnah entries"  "$(count_sunnah)"   "${claim_sunnah:-MISSING}"
check "golden figures"  "$(count_golden)"   "${claim_golden:-MISSING}"

# ---- The same hadith taught twice -------------------------------------
# Adding a batch of Sunnah practices, I checked how many entries each CATEGORY
# had and never checked which hadith were already cited — so five of the
# sixteen repeated a hadith the site already had, in a different category
# under a different title. Bukhari 879, 1923, 1957, 3088 and 5376.
#
# This lists any Bukhari number cited by more than one SUNNAH entry. It WARNS
# rather than fails: two entries may legitimately draw different practices out
# of one long hadith, which is why 1162 and 5641 are long-standing pairs. Read
# the titles and decide.
echo
echo "Sunnah entries sharing a hadith number (check these are deliberate):"
# The character class excludes ";" and "S" so the match cannot run on from
# "Sahih al-Bukhari, Hadith 12; Sahih Muslim, Hadith 39" and pick up Muslim's
# number as though it were Bukhari's — which it did on the first attempt.
dupes=$(grep -oE 'Sahih al-Bukhari[^";S]*Hadith [0-9]+' js/sunnah.js \
        | grep -oE '[0-9]+$' | sort -n | uniq -d)
if [ -z "$dupes" ]; then
  echo "  none"
else
  for n in $dupes; do
    echo "  Bukhari $n:"
    grep -B 20 "Hadith $n\"" js/sunnah.js | grep -oE 'title: "[^"]*"' \
      | tail -1 | sed 's/^/     /'
  done
fi
echo

# ---- Every canonical must name its own file ---------------------------
# stories.html carried sunnah.html's canonical, copy-pasted from that page's
# head. A canonical pointing at a DIFFERENT page tells a search engine this
# one is a duplicate of it — the Stories page was asking to be dropped from
# results. angels.html is exempt: it is a redirect to judgement.html#angels
# and points there on purpose.
echo "Checking each canonical points at its own page…"
for h in *.html; do
  [ "$h" = "angels.html" ] && continue
  c=$(grep -oE 'rel="canonical" href="[^"]*"' "$h" | sed 's/.*href="//;s/"//')
  [ -z "$c" ] && continue
  base="${c##*/}"
  if [ "$h" = "index.html" ]; then
    [ -z "$base" ] || [ "$base" = "index.html" ] || {
      echo "  WRONG CANONICAL $h -> $c"; fail=1; }
  elif [ "$base" != "$h" ]; then
    echo "  WRONG CANONICAL $h -> $c"; fail=1
  fi
done
[ "$fail" -eq 0 ] && echo "  all canonicals correct"
echo

# ---- the same verse explained twice in one surah -------------------------
# `iitwTadabburAyahHtml` picks with `.filter(x => x.n === n)[0]`, so a second
# block for a verse never renders, and the coverage line prints its number
# twice. Fourteen of these were found on 18 August 2026; nothing had been
# looking for them.
echo "Checking for a verse explained twice in the same surah…"
dup=$(python - <<'PY'
import io, re
from collections import Counter
s = io.open("js/tadabbur.js", encoding="utf-8").read()
cur, cov = None, {}
for ln in s.split("\n"):
    m = re.match(r'^  (\d+): \{', ln)
    if m:
        cur = int(m.group(1)); cov.setdefault(cur, []); continue
    m = re.match(r'^        n: (\d+),', ln)
    if m and cur is not None:
        cov[cur].append(int(m.group(1)))
bad = []
for k, v in cov.items():
    for n, c in Counter(v).items():
        if c > 1:
            bad.append("surah %d verse %d appears %d times" % (k, n, c))
print("\n".join(bad))
PY
)
if [ -n "$dup" ]; then
  echo "$dup" | sed 's/^/  DUPLICATE  /'
  fail=1
else
  echo "  no verse is explained twice"
fi
echo

if [ "$fail" -ne 0 ]; then
  echo
  echo "A number on the home page no longer matches its data file."
  echo "Fix index.html AND the matching Arabic string in js/i18n.js —"
  echo "the AR dictionary is keyed on the exact English sentence, so"
  echo "changing one without the other makes that card render in English."
  exit 1
fi

echo "All home page numbers match the data."
