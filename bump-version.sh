#!/bin/bash
# Re-stamp css/js links so browsers always pick up the latest files instead of
# serving a stale cached copy. Run this before committing front-end changes.
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M)
for f in *.html; do
  sed -i -E 's#(href="css/style\.css)(\?v=[0-9]+)?"#\1?v='"$V"'"#g' "$f"
  sed -i -E 's#(src="js/[a-z]+\.js)(\?v=[0-9]+)?"#\1?v='"$V"'"#g' "$f"
done
echo "assets stamped v=$V"
