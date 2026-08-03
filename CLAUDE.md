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

7. **Say how strong every source is — every time.** Bukhari/Muslim with a
   number. Anything from at-Tirmidhi, an-Nasa'i, Abu Dawud or Ahmad must be
   labelled as **outside the two Sahihs**. Anything from Ibn Ishaq, Ibn Sa'd or
   the histories must be labelled **historical sira, not hadith**. And when
   something famous is *not* authentic, say so on the entry — the site already
   does this for the 70,000 angels at Sa'd ibn Mu'adh's funeral, the names
   Azrail and Ridwan, Munkar and Nakir, and Ayat al-Kursi after every prayer.

8. **Deploy — do not park finished work.** The owner judges by opening the live
   site. Push as part of finishing, poll until GitHub Pages serves it, then
   verify on the real URL. Ending a turn with "not pushed yet, say the word"
   has repeatedly made completed work look undone.

9. **Never overwrite `data/site-config.json`.** It holds the recitations the
   owner published. Run `git checkout origin/main -- data/site-config.json`
   before committing unless you are deliberately changing it.

## Before committing

```bash
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js
git fetch -q origin && git checkout origin/main -- data/site-config.json
./check-images.sh
./bump-version.sh
git add -A && git commit -m "..." && git push origin main
```

## Two traps worth knowing now

- **Muslim's numbering in the jsdelivr hadith API is sequential (1–7563) and
  does NOT match the standard numbering.** Bukhari's does. Cite Muslim by book
  name unless you have verified the number.
- **`staff.html` and `companions.html` load `main.js` early on purpose**,
  before their inline script, because that script calls its helpers at parse
  time. Do not "tidy" this back to the normal order.

## Current state (3 August 2026)

29 prophets (4 with full lives) · 66 companions (12 with full lives) ·
43 curated hadith (+~15,000 via API) · 166 sunnah practices ·
23 guidance themes + 16 worship steps · 28 stories of the Prophet ﷺ ·
the Day of Judgement in 14 stages · 114 surahs with 16 reciters and
Mushaf page numbers.

Pages: index, quran, prophets, companions, hadith, sunnah, **stories**,
**judgement**, guidance, courses, search, login, staff, meeting.

Open work is listed in Part 5 of the handoff — chiefly: the remaining 54
companion lives and 25 prophet lives, Arabic pausal rules for speech,
save-your-place in the Quran, and Gmail sign-in (needs an OAuth Client ID
from the owner).
