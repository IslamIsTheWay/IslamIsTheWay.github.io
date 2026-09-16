#!/bin/bash
# Re-stamp css/js links so browsers always pick up the latest files instead of
# serving a stale cached copy. Run this before committing front-end changes.
cd "$(dirname "$0")"
# "Recently Added" is written from git, not typed: which cards appear, in
# what order, and the day each part of the site was last worked on. This runs
# BEFORE the stamping below, because the stamp touches every HTML file and
# the generator reads the working tree to date today's own work.
python build-recent.py || python3 build-recent.py || echo "build-recent.py did not run"

# The phone copies of the background photographs are served by a generated
# block in css/style.css. Regenerated here so a background added today is
# not still costing a phone 1500 pixels tomorrow. (The copies themselves are
# written by ./shrink-images.py, which is run by hand when a photo is added.)
python phone-photos.py || python3 phone-photos.py || echo "phone-photos.py did not run"

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
