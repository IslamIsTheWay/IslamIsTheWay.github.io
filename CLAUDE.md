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
./check-counts.sh       # home page numbers vs the data behind them
./bump-version.sh
git add -A && git commit -m "..." && git push origin main
```

**And once, in the browser, in Arabic mode** — the static greps above cannot
see any of these:

```js
// English left inside a citation. Should be 0 on every content page.
[...document.querySelectorAll('.tad-ref, .refs, .hadith-meta, .gold-ref, .rv-ev-ref')]
  .filter(e => /Sahih al-Bukhari|Sahih Muslim|Book of |— Sahih\b|agreed upon/i.test(e.textContent)).length

(document.body.innerText.match(/\*\*/g) || []).length   // literal bold markers
```

## Two typography rules that are not matters of taste

- **Never apply negative `letter-spacing` to Arabic.** The script joins, and
  tightening the tracking pulls the joins apart. Any rule of that kind must be
  scoped away from `html.lang-ar`, as the heading rules at the bottom of
  `style.css` are.
- **`*single asterisks*` are never converted.** Every paragraph helper here
  converts `**bold**` and nothing else, so `*word*` ships its asterisks to the
  reader. Use a real tag.

## When copying a page's `<head>` to a new page, fix the canonical

`stories.html` carried `sunnah.html`'s canonical URL. A canonical naming a
DIFFERENT page declares this one a duplicate of it, so the Stories page — 49
stories, each located in the two Sahihs before being written — was asking
every search engine to drop it and show the Sunnah page instead.
`./check-counts.sh` now verifies each canonical names its own file.
`angels.html` is exempt; it is a redirect and points at
`judgement.html#angels` deliberately.

## Adding hadith-backed content — the order that works

Load `ara-bukhari.json` and `eng-bukhari.json` from the jsdelivr edition and
**search them first**, then write the entry around a hadith whose text you
have already read at that number. Bukhari's numbering there matches the
standard numbering; **Muslim's is sequential and does not**, so never cite
Muslim by a number taken from it.

- **Check which hadith are already cited, not just how many entries a category
  has.** Doing the second and not the first put five duplicate Sunnah
  practices into the file in one batch, each repeating a hadith the site
  already taught under another title. `./check-counts.sh` now warns on this.
- **When comparing a quoted matn to the source, match from the MIDDLE.**
  Starting at the beginning compares across the salutation, where the entry
  writes ﷺ and the source spells out صلى الله عليه وسلم — that alone reported
  four false mismatches. Strip harakat and normalise to NFC first.

## Traps added 13 August 2026 — all three were found live

- **A backtick inside an HTML comment that sits inside a template literal ends
  the string.** A comment reading ``the `.tad-ref` class`` inside the
  `card.innerHTML = \`…\`` block took the whole prophets page down with
  "ref is not defined" — 0 of 29 cards rendered. Comments inside a template
  literal must never contain a backtick.
- **`IITW_REF_SELECTOR` went stale a second time**, and wider: `.life-sources`,
  `.rv-ev-ref` and `.gold-ref` were all missing, leaving 190 of 240 source
  lines on the companions page in English. But **do not simply add every new
  class to it** — if the field contains English PROSE as well as a citation,
  AR_PARTS mangles the prose word by word ("his trade and lineage" → "his
  trade و lineage"). Split the line and wrap only the citation, as
  `prophets.html` and `companions.html` now do.
- **AR_PARTS ordering broke three more times, silently.** `Book of Food`,
  `Book of Remembrance` and `Book of Dress` each sat ABOVE their own longer
  forms, so the prefix matched and left the tail in English. And 16 narrator
  names never matched at all because the data spells them **Omar** and
  **Osman** (rule 26) while AR_PARTS was keyed on `Umar` and `Uthman`.
  After touching that array, run the Arabic-mode check above.

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

## The Guidance box: intent first, then scoring

`findGuidance()` reads the whole sentence before scoring any word in it —
`iitwIntent()` returns whether this is a RULING question and which TOPIC it is
about. **A ruling question may only be answered by a ruling**; if nothing
authored matches, `iitwNoRulingHtml()` says so rather than reaching for the
nearest verse. That path exists because "حكم الاحتفال بالمولد النبوي؟" used to
return "Ease After Hardship".

- **Arabic is matched word by word, never as a substring** — `iitwWordSet()`
  and `iitwHasWord()`, which strip the attached prefixes (ال، بال، وال، لل، ب،
  ل، و، ف، ك). This is the third time the substring trap has been found live:
  ولي inside وليس, عينة inside بعينه, and now **ألم inside بالمولد**, which is
  what produced that wrong answer. Never reintroduce `.includes()` on Arabic.
- **When a topic matches, the ANSWER is rendered first** (`iitwDirectAnswerHtml`)
  and the evidence sits under it. The 15 entries in `FIQH_RULINGS` each carry an
  authored `answer` field — surface that, do not quote a hadith and leave the
  reader to work out what it meant.
- Adding a new answerable subject means adding an entry to `GUIDANCE_TOPICS`
  with `words` and a `need` count. Keep `need` at 2 for vague words so a single
  ordinary word can never decide the answer.

## The service worker — read this before touching sw.js

`sw.js` is **network-first, always**. The cache is an offline fallback and is
never preferred over the network.

**Never change it to cache-first.** A cache-first worker would bring back the
"reload and see no change" problem permanently and make `bump-version.sh`
stop working — the one failure this project has spent the most time on. The
behaviour was proven by fetching a file through the worker, changing it on
disk, and fetching again: the reader gets the new content.

- Bump `CACHE_VERSION` in `sw.js` whenever that file changes.
- Cross-origin requests are not intercepted at all — the Quran API, the
  per-ayah audio and the hadith API go straight to the network. Caching the
  audio would fill the reader's storage.
- `manifest.webmanifest` is linked from every public page (not staff, login,
  meeting or offline), so the app can be installed from wherever the reader is.

## الوِرْد اليومي — the daily commitment (`js/wird.js`, `quran.html#wird`)

Two rules from the owner govern it and should not be softened:

1. **The intention sits on the button, not in a footnote.** "You are not
   reading this to tick a box." A tracker that made the streak the point would
   be the opposite of what this is for. The streak exists but is deliberately
   not the largest thing on the card.
2. **It tracks the PLACE, not the calendar.** Miss a day and the reader
   carries on from where they stopped. Nothing scolds.

State is `localStorage` under `iitw-wird`, device-only, and the card says so.
`wirdTodaysPages()` wraps at page 604 so a finished khatmah rolls into the
next one instead of stopping dead.

## Offline — what broke and what the rules are now

The owner reported that the Quran did not work offline. Three separate causes,
all worth knowing:

1. **Only the precached files work offline.** Anything not in the list works
   only if it happens to have been visited. The list now covers every page and
   every content file.
2. **The Quran text is NOT on this site** — it comes from `api.alquran.cloud`,
   cross-origin. The worker must handle it explicitly or the reader opens
   empty offline. It is cached **cache-first**, which is safe only because the
   Quran does not change.
3. **The browser caches `sw.js` itself.** Registering `"sw.js"` can return the
   byte-identical old copy, so a rewritten worker never installs while
   reporting itself active. **Always register with
   `{ updateViaCache: "none" }`.** `bump-version.sh` cannot reach this.

And the one that wasted the most time:

- **A service worker's `install` is killed if it takes too long.** Precaching
  3.5MB inside `install` left eleven files cached and the worker reporting
  success — a reader would have gone offline believing the site was saved.
  Install takes `PRECACHE_SHELL` only; `iitwWarmOfflineCache()` in `main.js`
  pulls `PRECACHE_CONTENT` afterwards from the page, where nothing terminates
  it half done.
- **Never cache the recitation audio.** everyayah serves hundreds of megabytes.
- To test offline properly, **stop the dev server** and load a page. A resolved
  `fetch` is not proof the network is up — the worker returns a 504 Response
  rather than rejecting, so check the status.

## Arabic counts nouns by a rule English does not have

1 يوم · 2 يومان · 3–10 أيام · 11–99 يومًا · 100/101 يوم. `wirdArDays()` in
`quran.html` implements it. "١٨ أيام" is wrong and a native reader sees it
immediately.
