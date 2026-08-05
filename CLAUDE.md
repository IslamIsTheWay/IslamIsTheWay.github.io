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
   full-width backgrounds.

3. **Religious accuracy over volume.** Never invent a hadith number — cite the
   collection and book if unsure. Never attribute a hadith to the Quran.
   Grading must name the authenticating scholar, e.g.
   `Sahih — Agreed upon (al-Bukhari and Muslim)`. **Do not use the term "Hasan"**
   on its own — the owner asked for `Sahih` / `Strong`.

4. **Everything needs Arabic.** Every prophet, companion, hadith, sunnah entry,
   story, angel, dhikr and ruling has an Arabic field. Keep the tashkeel.
   **If you change an English string that has an `AR` dictionary entry, change
   the Arabic in the same commit** — they match by exact string, so changing one
   silently breaks the other.

5. **Verify on the live site**, not just locally. Wait for the deploy, and use a
   throwaway query string (`?t=123`) to bypass the CDN cache when testing.

6. **Be honest about limits.** Browser speech cannot recite Arabic properly; the
   staff login and the reader sign-in are front-end only; a serverless site
   cannot collect visitors' feedback centrally. Say so plainly.

7. **Say how strong every source is — every time.** Bukhari/Muslim with a
   number. Anything from at-Tirmidhi, an-Nasa'i, Abu Dawud or Ahmad must be
   labelled **outside the two Sahihs**. Anything from Ibn Ishaq, Ibn Sa'd,
   Ibn Kathir or the histories must be labelled **historical sira, not hadith**.
   And when something famous is *not* authentic, say so on the entry — the site
   already does this for the 70,000 angels at Sa'd ibn Mu'adh's funeral, the
   names Azrail and Ridwan, Munkar and Nakir, Ayat al-Kursi after every prayer,
   Israfil's eyes, Mika'il and the rain, and the forty-year gate of Paradise.

8. **Deploy — do not park finished work.** The owner judges by opening the live
   site. Push as part of finishing, poll until GitHub Pages serves it, then
   verify on the real URL.

9. **Never overwrite `data/site-config.json`.** It holds the recitations the
   owner published. Run `git checkout origin/main -- data/site-config.json`
   before committing unless you are deliberately changing it.

10. **Never run generated code or content through Python's `unicode_escape`.**
    It reads UTF-8 as Latin-1 and turns Arabic into mojibake, and turns `\n`
    inside JS string literals into real newlines. It has broken the entire staff
    dashboard once and shipped ruined Arabic to the live site once. Write files
    as plain unicode with `encoding="utf-8"`.

## Before committing

```bash
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js
grep -l 'Ø§\|ÙÙ\|â€' *.html js/*.js css/*.css        # mojibake check
grep -oE '^  "([^"]+)":' js/i18n.js | sort | uniq -d   # duplicate AR keys
git fetch -q origin && git checkout origin/main -- data/site-config.json
./check-images.sh
./bump-version.sh
git add -A && git commit -m "..." && git push origin main
```

## Traps worth knowing now

- **Muslim's numbering in the jsdelivr hadith API is sequential (1–7563) and
  does NOT match** the standard numbering. Bukhari's does. Cite Muslim by book
  name unless you have verified the number.
- **`staff.html` and `companions.html` load `main.js` early on purpose**, before
  their inline script, because that script calls its helpers at parse time. Do
  not "tidy" this back. `quran.html` loads `account.js` before `quran.js`.
- **`.en-only` / `.ar-only` need `!important`** — layout rules that also set
  `display` will out-specify them.
- **Re-measure the nav breakpoint whenever a nav link is added or removed.**
  12 links need ~1145px, so the hamburger takes over below 1200px. This has been
  wrong three times.
- **In RTL, `element.right > clientWidth` is not an overflow test** — the
  scrollbar moves to the left. Use `documentElement.scrollWidth > clientWidth`.

## Current state (4 August 2026)

29 prophets and 65 companions — **all 94 with a full life**, and every prophet
with the message he was sent with · 43 curated hadith (+~15,000 via API) ·
166 sunnah practices · 38 stories of the Prophet ﷺ · the Day of Judgement in
**15 stages** including the Great Intercession · **33 angels** (rendered inside
the Judgement page) · **19 adhkar** with a tap counter · **11 scholars' rulings**
and **10 scholars with their books** on Guidance · 23 guidance themes and 16
worship steps · 114 surahs with 16 reciters and Mushaf page numbers ·
**reader sign-in on the Quran page that saves the exact verse you stopped at** ·
feedback form on every page.

Pages: index, quran, prophets, companions, hadith, sunnah, stories, judgement,
guidance, courses, search, login, staff, meeting. `angels.html` is a redirect to
`judgement.html#angels`.

Open work is listed in Part 5 of the handoff — chiefly: Arabic for the hadith
page titles and the courses page, cross-device saved place (needs a backend),
and Gmail sign-in (needs an OAuth Client ID from the owner).
