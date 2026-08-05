#!/bin/bash
# Re-stamp css/js links so browsers always pick up the latest files instead of
# serving a stale cached copy. Run this before committing front-end changes.
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M)
for f in *.html; do
  sed -i -E 's#(href="css/style\.css)(\?v=[0-9]+)?"#\1?v='"$V"'"#g' "$f"
  # The character class MUST include the hyphen. It was [a-z0-9]+, which
  # silently skipped every hyphenated filename — js/scholars-books.js went
  # un-stamped from the day it was added, so the Guidance page kept serving a
  # cached copy of it while every other file updated. (The digits were added
  # for i18n.js for the same class of reason.)
  sed -i -E 's#(src="js/[a-z0-9-]+\.js)(\?v=[0-9]+)?"#\1?v='"$V"'"#g' "$f"
done
echo "assets stamped v=$V"
