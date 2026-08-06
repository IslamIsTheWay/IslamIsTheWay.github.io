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
  **13 links plus the language button that `i18n.js` injects need 1474px, so the
  hamburger takes over below 1480px**, and `.nav-wrap` has `max-width: 1560px` —
  that cap is a real constraint, because when the bar needs more than it the nav
  overflows at EVERY width however wide the screen. This has now been wrong four
  times; most recently the breakpoint sat at 1200px while twelve links already
  needed 1467px, which put Login off the right edge of a 1366px laptop, live.
  Measure with the desktop layout actually applied
  (`brand.getBoundingClientRect().width + nav.scrollWidth` + the wrap padding and
  gap), then check `documentElement.scrollWidth > clientWidth` at 1280 / 1366 /
  1440 / 1500 / 1920.
- **In RTL, `element.right > clientWidth` is not an overflow test** — the
  scrollbar moves to the left. Use `documentElement.scrollWidth > clientWidth`.

## Added 5 August 2026 — second pass

- **Golden Age now opens with a summary.** `GOLDEN_OVERVIEW` in `js/golden.js`:
  what the period was in plain words, exactly WHEN (with the honest caveat that
  the usual 750–1258 is Baghdad-shaped — Maragha, Ibn Khaldun, Ulugh Beg and
  Taqi ad-Din all came after), where, a 16-item summary of what came out of it,
  and a 22-entry dated timeline. Most readers have never heard the period
  existed, so this comes before any name or any argument.
- **`js/terms.js`** — 48 technical words explained in plain English and Arabic
  (awrah, mahram, khimar, 'inah, waswas, khuff, hudud, ijma'…), shown as a
  "Words explained" box under every ruling and every revival card, listing only
  the words that actually appear in that card.
- **`js/figures.js`** — four labelled figures for four rulings (hijab conditions,
  which part of the sock is wiped, rak'ah on a journey, ghibah vs slander).
  **Authored here, not fetched from the web**: no copyright risk, nothing to go
  dead, no photograph of a real person, and a figure shows the RULE where a photo
  shows one outfit. They were drawn as inline SVG first and **rewritten as HTML
  tables and comparison lists** — see the SVG trap below. Keep them HTML.
- **Photo bands on Stories and Guidance**, and a softer scroll arrival —
  gentler curve, slight scale, and a stagger so the Arabic line, the heading
  and the paragraph arrive in sequence.

### Traps hit in this pass

- **Arabic substring matching is never safe.** ولي (wali) sits inside وليس,
  وهن (wahn) inside وهنّ, and عينة ('inah) matched بعينه. Match Arabic WORD BY
  WORD after stripping harakat and the attached prefixes, and anchor a term to
  its definite form (الوهن، الجمع) when the bare form is also a common word.
  This is the same trap the Stories glossary hit with كلّ / الكَلّ.
- **Never put label text inside an SVG.** Text in an SVG is not a node
  `i18n.js` can walk, so it **never translates**, and a horizontal scroll wrapper
  clips it in RTL where scrolling starts from the right — "Hair, neck and ears"
  rendered as "irs / tly" on the live site. Every figure on this site is HTML for
  that reason. Related: the first hijab figure was an outline of a garment that
  read as a winter hat — **a diagram the reader has to decode teaches less than a
  sentence.** Prefer a labelled comparison in words.
- **An SVG with a `min-width` widens its card instead of scrolling.** A grid
  item defaults to `min-width: auto`, so it grows to fit and pushes the whole
  page sideways on a phone. The scroll wrapper needs `min-width: 0`.
- **`innerText` returns the text of `display:none` elements**, and a CSS
  transition does not advance while the browser pane is not compositing — both
  produced false bug reports. Use `getComputedStyle(el).display`, and read
  resting values with transitions disabled.

## Added 5 August 2026

- **`golden.html` + `js/golden.js`** — the Golden Age of Islam. 28 figures, each
  with the Latinised name Europe used, plus `GOLDEN_ROOT` (why the peak grew out
  of the religion) and `GOLDEN_TAKEN` (7 documented cases of the credit going
  elsewhere). History is graded the same way hadith is: *his own surviving work*
  · *his work plus the Latin translation* · *reported in the histories* ·
  *popular but not established*. The "99% / 1%" framing was built as documented
  receipts — Ibn ash-Shatir against Copernicus, Ibn an-Nafis, Toledo, the
  Latinised names — rather than as a percentage, and one card states plainly
  what is NOT true (Ibn Firnas's flight, ar-Razi's hanging meat, pseudo-Geber).
- **`js/revival.js`** — why the ummah fell and the way back, rendered on
  `guidance.html#revival`. Both key hadith are labelled outside the two Sahihs;
  the 'inah hadith carries its real disagreement (al-Albani Sahih, Zubair Ali
  Zai weak); Imam Malik's sentence is marked as HIS, not a hadith.
- **Stories sectioned** — `STORY_SECTIONS` in `data.js`, 10 sections by what the
  story teaches. 38 → **45 stories**.
- **Guidance** — 11 → **15 rulings**, 10 → **19 scholars** (the four imams,
  al-Bukhari, Muslim, at-Tabari, Ibn Abd al-Barr, ash-Shatibi, Ibn Rajab added).

### Bugs fixed on 5 August that had reached the live site

- **`bump-version.sh` never stamped hyphenated filenames.** The regex was
  `js/[a-z0-9]+\.js`, so `js/scholars-books.js` had been serving a cached copy
  since the day it was added. Now `[a-z0-9-]+`.
- **The nav overflowed at every width between 1200px and ~1467px.** The
  hamburger breakpoint was 1200px while twelve links plus the injected language
  button needed 1467px, so Login sat off the right edge on a 1366px laptop.
  Re-measured: 13 links need **1474px**, breakpoint is now **1480px**, and
  `.nav-wrap` `max-width` was raised to 1560px — that cap is a real constraint,
  because when the bar needs more than it, the nav overflows at EVERY width.
  Verified clean at 390 / 768 / 1024 / 1280 / 1366 / 1440 / 1500 / 1600 / 1920.
- **Guidance led with an irrelevant ruling.** Rulings render first by design
  (correctly — "what counts as hijab" must be answered by the scholars). But
  "first" was unconditional, so "I lose my temper" led with the ruling on
  backbiting. Two guards now: a hadith that beats the best ruling by 35% takes
  the lead, and a ruling set whose top two scores are within 20% of each other
  is treated as a filler-word match and dropped. Verified on 11 queries in both
  languages.

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
