#!/bin/bash
# Guard: any image used as a full-width CSS background must be large enough
# not to look pixelated. Small gallery photos belong in <img> cards only.
cd "$(dirname "$0")"
fail=0
for i in $(grep -ohE 'url\("?\.\./(img/[A-Za-z0-9._-]+\.(jpg|png))"?\)' css/style.css | grep -oE 'img/[A-Za-z0-9._-]+\.(jpg|png)' | sort -u); do
  [ -f "$i" ] || { echo "MISSING FILE: $i"; fail=1; continue; }
  w=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$i")
  # A "-sm" file is the phone copy of a background, written by shrink-images.py
  # and served only under @media (max-width: 820px) — it is SUPPOSED to be
  # small. It still has to be wide enough for a 390pt phone at 2x.
  case "$i" in
    *-sm.jpg)
      if [ "$w" -lt 700 ]; then echo "PHONE COPY TOO SMALL (${w}px): $i"; fail=1; fi
      continue;;
  esac
  if [ "$w" -lt 1000 ]; then echo "TOO SMALL for a full-width background (${w}px): $i"; fail=1; fi
done
# every referenced image must exist
for i in $(grep -ohE 'img/[A-Za-z0-9._-]+\.(jpg|png)' ./*.html css/*.css js/*.js 2>/dev/null | sort -u); do
  [ -f "$i" ] || { echo "MISSING FILE: $i"; fail=1; }
done
[ "$fail" = "0" ] && echo "✓ image check passed" || echo "✗ image check FAILED"
exit $fail
