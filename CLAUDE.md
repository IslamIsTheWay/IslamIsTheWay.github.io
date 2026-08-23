# IslamBasics — read this before making changes

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

## The Mahdi — where each half of it lives, and why

Added 23 August 2026, split across three pages so nothing is stated twice.
If you are adding to any of it, add to the right one:

* **`js/signs.js` → Judgement Day** — the FACTUAL entry. What is in the two
  Sahihs, what is only in Abu Dawud/at-Tirmidhi/Ibn Majah, and where Ibn
  Khaldun disagreed with Ibn Taymiyyah, Ibn Kathir, as-Suyuti and al-Albani.
* **`js/misunderstood.js` → Guidance** — the MINDSET. Why waiting is not in
  any narration, and what it costs.
* **`js/golden-closing.js` → Golden Age** — the CONSEQUENCES: consumers not
  makers, the data-sovereignty decision, and the disunity comparison.

**He is deliberately NOT in `MAJOR_SIGNS`.** The ten major signs are the ten
named in ONE hadith in Sahih Muslim, and he is not among them. Putting him in
that list would make the page claim something the text does not. He is a
`MINOR_SIGNS` item with `status: "disputed"`.

**Only ONE piece of it is in the two Sahihs**, and it is the piece people
attach to him without realising it is the only strong part: an army sent
against a man who took refuge at the Kaaba is swallowed at al-Bayda' — Sahih
Muslim, from Umm Salamah and from Hafsah. **That text gives no number, names
no country, and does not name the Mahdi at all.** "Forty thousand", "from
Iran", any date, and any living person are all listed under `notEstablished`.
Do not let any of them creep into the body text.

**The detail worth keeping in every version of this:** the narrations describe
people going to him and pledging to him **while he is unwilling** — so a
community was already standing before he appeared. And in Sahih Muslim, Isa
descends to find the imam of the Muslims **already leading the prayer** and
refuses to take his place. Both say the same thing: a community that is
already working is given someone to lead it. That is the whole argument
against waiting, and it is made from the narrations themselves rather than
against them.

**A `MINOR_SIGNS` item can now carry its own `notEstablished` and `refAr`.**
Both were added for this entry — the per-item not-established list, and the
source line, which `iitwTranslateReference` half-translates because it names
works and a scholar. Same for `closingQuote` on golden.html, which now prefers
`q.refAr` / `q.strengthAr` when the entry supplies them.

## Traps added 21 August 2026 — round two: the Arabic sweep, and the tense

### The Arabic-mode sweep was 94, not 23
The task chip said 23 leaks in the rulings section. Walking **every text node
of the rendered page** in Arabic mode found 94 across guidance.html, and in
places the Arabic was printing **twice** — the AR dictionary translated the
English text node while a hard-coded Arabic span sat beside it.

Two different faults, two different fixes:

* **Markup pairs** — `English <span dir="rtl">Arabic</span>` with no
  `.ar-only`. Split both halves. This is the same shape as the 82 Golden Age
  heading leaks in PART 16 and it is by far the most common bug on this site.
  **`grep -c '<span dir="rtl"' file.html` with no `ar-only` on the line is a
  one-line audit for it, and it should be run on every page.**
* **Source lines and gradings** — `iitwTranslateReference` reaches canonical
  citations only. Anything with a narrator, a named work or grading prose gets
  half-translated into things like `سورة مريم (19:59) — the قرآن` and
  `those who hold it obligatory argue عن this و from 33:59`. Those entries now
  carry their own `refAr` / `strengthAr` / `workAr` in js/scholars.js,
  js/revival.js, js/bidah.js, js/adhkar.js and WORSHIP_STEPS, and the
  renderers prefer them when present. **Do not convert the rest** — canonical
  citations still go through the translator, which handles them and keeps new
  entries working with no extra effort.

**binbaz.org.sa and binothaimeen.net inside Arabic sentences are deliberate.**
A sweep that reports them is wrong, like the Latin names on the Golden Age
cards.

### `${…}` cannot be nested inside `${…}`
A scripted edit produced `${c.ref ? ${c.refAr ? \`…\` : \`…\`} : ""}`, which is
a syntax error and killed the whole bid'ah section. Use
`${!c.ref ? "" : (c.refAr ? \`…\` : \`…\`)}`. Check the browser console after
any scripted change to a template literal — the page renders blank, not broken.

### `js/tadabbur-tense.js` — why it is in this tense
The owner asked for it by name, with his own example: Yusuf sets a **condition**
about the future in 12:60, and the brothers report it to their father as a
**completed past passive** in 12:63. Nothing false is said; the tense does it.

* Keyed `"surah:ayah"` and merged into the tadabbur panel at render time, so a
  verse can carry a verb-form note **without** having a tadabbur block of its
  own — `iitwTadabburAyahHtml` falls through to `iitwTenseOnlyHtml`.
* **`ifOther` is not optional.** "What would change if it said the other" is
  the half he asked for, and it is what turns a grammar label into an insight.
  It has its own box and its own colour.
* **Verify every quotation against `js/quran-text.js`.** The file makes claims
  ABOUT the wording, so an approximate quotation is not a typo, it is a false
  claim. The scratchpad checker walks every `﴿…﴾` and requires it to be a
  substring of the real text. It caught eight wrong small marks.
* **`﴿ ﴾` is the mushaf bracket only.** Unvocalised paraphrases in the
  plain-words boxes use `« »`. A checker that treats every `﴿…﴾` as a
  quotation is right to, which is why the distinction has to be kept.
* **`***` survives an asterisk cleanup.** `(?<!\*)\*(?!\*)` matches none of
  the three, so `**you***` renders as bold plus a literal asterisk.

## Traps added 21 August 2026 — the misunderstood section

`js/misunderstood.js` → `guidance.html#misunderstood`. Six subjects — the
fighting verses, jihad, compulsion, the hijab, women, and the Khawarij — each
with the claim as people say it, the texts with the verse on either side, and
a plain-words box on every card. Every Quranic quotation was copied out of
`js/quran-text.js`; every hadith number was checked against the collection.

- **A section arguing "they cut the sentence" cannot itself print a cut
  sentence.** Seven quotations were shortened for length while writing. Six
  were restored in full; the rest carry a visible `…`. There is a checker for
  this in the scratchpad approach: parse each `context[]` row, read surah:ayah
  off its `ref`, and require the Arabic to be a substring of the real verse.
  Re-run something like it after touching this file.
- **Never key a rewrite on the first literal `"(9:5)"` in the file.** Card
  BODIES mention verse numbers in prose, so a script anchored that way found a
  mention in `ms-next` and rewrote the 22:39 row with 9:5's text. It looked
  completely plausible in the browser. Anchor on `refAr`, which is unique per
  row, and diff the Arabic against `js/quran-text.js` afterwards — that is the
  only reason it was caught.
- **`ref` and `strength` here carry their own `refAr` / `strengthAr`.**
  `iitwTranslateReference` reaches canonical citations only; these lines name
  works, gradings and two French statutes, and 73 of them rendered as English
  on the Arabic page. Both halves are now `.en-only` / `.ar-only`, which is
  also why `.mis-ctx-ref` is NOT in `IITW_REF_SELECTOR` — it does not need to
  be. **The Arabic-mode sweep of this section is now 0.**
- **`misParas` is `bidahParas` plus numbered lists.** The bid'ah helper
  flattens `1. … 2. … 3. …` into one run-on line, and three of these cards are
  built on numbered lists. If you render this data with the bid'ah helper you
  will silently lose the structure.
- **The "greater jihad" narration is labelled WEAK on its own card**, with
  al-Bayhaqi and Ibn Taymiyyah named, and the four authentic hadith that carry
  the same meaning given in its place. It is the most useful sentence in the
  whole subject and the site refuses it. Do not quietly promote it.
- **`.terms-head` leaked on all 8 term boxes** — "💬 Words explained" was bare
  text with only the Arabic in a span, so the English showed in Arabic mode.
  Same shape as the 82 Golden Age heading leaks. Fixed in both `termsBox` and
  `misTermsBox`.
- **`js/golden.js` → `tk-clean`** answers the hygiene claim, and says plainly
  that "Europeans invented perfume to cover the smell" is FALSE — perfume is
  millennia older, medieval European towns had bathhouses, and the decline in
  public bathing is 16th–18th century. Same rule as the Council of Macon in
  `GOLDEN_WOMEN`: attaching a false claim to true ones hands the argument away.

**Known and NOT fixed:** the rulings section still leaks 23 English strings in
Arabic mode — `ruling-sub` headings, `rs-work` book titles, and grading prose
inside `ref`. That is the documented `ref`/`strength` trap, it predates this
round, and it is a separate job.

## Traps added 19-20 August 2026 — the tadabbur and Golden Age rounds

- **A duplicate tadabbur block is invisible in the browser.** The renderer picks
  a verse with `.filter(x => x.n === n)[0]`, so a second block for the same
  verse renders nowhere and looks like work that was done. Three shipped into
  the file this way because `covered=` in the generator was read as a TO-DO list
  when it is a DONE list. `./check-counts.sh` is the only thing that catches
  it — **do not remove that check.**
- **A hamza is two different things to a string comparison.** Standalone `ء`
  is a letter and survives mark-stripping; the hamza on a seat (`أ` = ا +
  U+0654) is a combining mark and does not. So `لَءَايَٰتٍۢ` and `لَـَٔايَٰتٍۢ`
  reduce to different skeletons and never match. The quote healer's LOCATOR
  ignores the hamza; the VERIFIER stays strict. That is safe only because the
  healer substitutes the real text from `js/quran-text.js` and never keeps what
  it matched. **Then carry the dropped hamza back on BOTH edges when
  extracting** — trailing gave `شَىْءٍۢ` → `شَىْ`, leading gave `ءَامَنَّا` →
  `امَنَّا`, and each was a separate fix.
- **`ref` and `strength` are translated by exact-string lookup in `js/i18n.js`.**
  Extra English prose inside them has no Arabic key and leaks onto Arabic pages.
  Grading nuance goes in `detail` / `detailAr`.
- **The Sunnah renderer does not convert `**bold**`.** Tadabbur does. One entry
  shipped with the asterisks visible on the live site.
- **A checker keyed to an exact indent will rot.** The verse-link checker matched
  `ref:` at exactly ten spaces; older links sit at twelve, so it reported 38
  links in a file that had 52 and let a duplicate through. Match ten-**or-more**.
- **A `dir="rtl"` span with no `.ar-only` class means the English beside it is
  never hidden.** `gold-works-head` and `gold-after-head` were built that way and
  printed "🏛️ What she built — ما بَنَت" on every card in Arabic mode: 41 cards
  × 2 headings = 82 leaks. Both halves must carry `.en-only` / `.ar-only`.
  **The 38 the leak sweep still reports on `golden.html` are deliberate** — 20
  Latin names ("Known in Europe as: Algoritmi") and 18 Arabic sentences quoting
  a European word on purpose. Do not "fix" those.
- **`angels.html` has no `?v=` stamps and that is correct.** It is an 18-line
  redirect stub kept so old bookmarks reach `judgement.html#angels`.
- **`grep -r` for the dead `contact@islamistheway.com` still returns 13 hits.**
  Every one is inside `.claude/worktrees/heuristic-wright-a77f44/`, a stale
  detached worktree in `.git/info/exclude` that has never deployed. The live
  pages were cleaned in `f396f26`. Exclude `worktrees` before believing a hit.

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
- **`must` is a second gate, and it is what makes an ordinary word safe.** A
  topic that carries one is only scored at all when one of its `must` words is
  present. Without it, `mis-sword` — built on "kill" — answered *"I want to
  kill myself"* with the section on the fighting verses. On this page that
  class of mistake is not a relevance bug, it is a harm.
- **Hits count DISTINCT SUBJECTS, not distinct list entries** (`canonWord`).
  `iitwHasWord` matches through `stem()` and `iitwArStrip()`, so a list holding
  kill / kills / killing / killed scored FOUR on the single word "kill", and
  قتل / القتل / بقتل scored three on one Arabic word. `need` is supposed to mean
  "this sentence is about two different things"; the inflation made one word
  look like several. If you add morphological variants to a `words` list they
  now cost nothing and gain nothing — which is correct.
- **The sort is stable, so ORDER IN THE ARRAY BREAKS TIES.** The
  `mis-` entries sit AFTER the `fq-` entries deliberately: "what counts as
  hijab" scores 1 on each and must reach the scholars' ruling, while "why do
  Muslim women wear hijab" scores 5 on `mis-hijab` and must reach the
  misunderstood section. Moving them above the `fq-` block takes every hijab
  question away from the ruling.
- **`js/misunderstood.js` is NOT in `buildIdf()`, and that is deliberate.**
  Those entries are reached only through the intent layer and are never scored
  by `scoreContent`, so the corpus rule — index everything that is SEARCHED —
  is already satisfied. Adding them would shift the df of every word and
  re-tune every existing score on the page. If you ever make that content
  scorable, you MUST index it at the same time.

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

## The Quran text ships with the site

`js/quran-text.js` (2.2MB) holds all 114 surahs, all 6,236 verses, the English
translation and the Mushaf page of every ayah. `openSurah()` reads it; the API
is only a fallback if that file fails to parse.

**Do not put the reader back on api.alquran.cloud.** The owner reported twice
that a surah would not open without a connection, and no amount of
service-worker tuning fixes a dependency on someone else's server — caching
API replies only ever helps for surahs already read once, which is useless to
someone who installs the app and then goes offline.

**And never pass `cache: "no-store"` to a fetch whose response you want
cached.** A response fetched with no-store cannot be written to the Cache API.
The background warm-up did exactly that: 35 downloads, all returning 200, all
storing nothing, and the "offline ready" flag set before the loop even ran.
Measured live from a clean state: five files cached, zero pages, after 45
seconds. That was the whole reason his pages did not work.

## ورد اليوم — the daily box (`js/daily.js`, on `index.html`)

Four things a day: the Quran page from the commitment, a story, a sunnah to act
on, and revision of something memorised. Ticked off, with the run of days.

- What appears rotates by the **day of the year**, not at random, so it changes
  daily, is the same for everyone, and does not reshuffle on refresh.
- `wirdArDays()` lives in `js/wird.js` and is shared with the Quran page.
  Arabic adjectives must agree with the count — "٧ أيام متتابعة" is wrong;
  "على التوالي" is invariant and correct at every number, and one day takes no
  adjective at all.
- **A home-screen widget is not possible from a web app.** That needs a native
  app. Do not promise it.
