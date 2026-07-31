# Islam Is The Way — read this before making changes

Bilingual (Arabic/English) Islamic education website. Plain static HTML/CSS/JS —
no build step, no framework, no server. Pushing to `main` publishes it.

- **Live:** https://islamistheway.github.io/
- **Repo:** `IslamIsTheWay/IslamIsTheWay.github.io`

## Full documentation

**`HANDOFF/ISLAM-IS-THE-WAY-HANDOFF.md`** contains everything: architecture,
every feature, the owner's rules, open work, credentials, and content templates.
Read it before starting non-trivial work. (The same content is also split into
seven numbered files in `HANDOFF/`.)

## The rules that matter most

1. **Run `./bump-version.sh` before every commit.** It cache-busts the CSS/JS
   links. Without it the owner reloads and sees no change — this has wasted
   hours before.

2. **Run `./check-images.sh`** — it blocks images under 1000px being used as
   full-width backgrounds (this caused a visibly pixelated header once).

3. **Religious accuracy over volume.** Never invent a hadith number — cite the
   collection and book if unsure. Never attribute a hadith to the Quran.
   Grading must name the authenticating scholar, e.g.
   `Sahih — Agreed upon (al-Bukhari and Muslim)`. **Do not use the term "Hasan"**
   on its own — the owner asked for `Sahih` / `Strong`.

4. **Everything needs Arabic.** Every prophet, companion, hadith, sunnah entry
   and guidance theme has an Arabic field. Keep the tashkeel — it is needed for
   correct pronunciation and for the speech feature.

5. **Verify on the live site**, not just locally. Wait for the deploy, and use a
   throwaway query string (`?t=123`) to bypass the CDN cache when testing.

6. **Be honest about limits.** Browser speech cannot recite Arabic properly; the
   staff login is a front-end check, not real security. Say so plainly rather
   than over-promising.

## Before committing

```bash
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js
./check-images.sh
./bump-version.sh
git add -A && git commit -m "..." && git push origin main
```

## Current state

29 prophets · 65 companions · 43 curated hadith (+~15,000 via API) ·
133 sunnah practices · 20 guidance themes · 114 surahs with 16 reciters.

Open work is listed in Part 5 of the handoff — chiefly: save-your-place in the
Quran, and Gmail sign-in (needs an OAuth Client ID from the owner).
