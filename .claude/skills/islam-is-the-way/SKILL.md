---
name: islam-is-the-way
description: Build, fix or add content to the Islam Is The Way website (islamistheway.github.io) — a bilingual Arabic/English Islamic education site with Quran, Hadith, Sunnah, Prophets, Companions, the Day of Judgement, the angels, the adhkar, the scholars' explanations, courses and live classes. Use whenever working in the islam-is-the-way-site folder, or when the request involves this site's pages, its Arabic/English content, hadith gradings, the staff dashboard, meetings, or deploying it.
---

# Islam Is The Way — working on this website

Bilingual (Arabic/English) Islamic education website. Plain static HTML/CSS/JS —
**no build step, no framework, no server.** Pushing to `main` publishes it via
GitHub Pages (live in 1–2 minutes).

- **Live:** https://islamistheway.github.io/
- **Repo:** `IslamIsTheWay/IslamIsTheWay.github.io`
- **Folder:** `C:\Users\User\islam-is-the-way-site`

---

## Non-negotiable rules

### 1. Deployment hygiene
Always, before committing front-end changes:

```bash
git fetch -q origin && git checkout origin/main -- data/site-config.json
./check-images.sh        # blocks images <1000px used as full-width backgrounds
./bump-version.sh        # cache-busts every css/js link — MANDATORY
git add -A && git commit -m "..." && git push origin main
```

Skipping `bump-version.sh` means the owner reloads and sees **no change**. This
has repeatedly wasted time. When verifying in a browser, append a throwaway
query (`?t=123`) to bypass the CDN cache.

### 2. Religious accuracy outranks everything
- **Never invent a hadith number.** Cite collection + book if unsure
  ("Sahih Muslim, Book of Faith").
- **Never attribute a hadith to the Quran**, or vice versa.
- **Grading must name the authenticating scholar:**
  `Sahih — Narrated by al-Bukhari` ·
  `Sahih — Agreed upon (al-Bukhari and Muslim)` ·
  `Strong — Narrated by at-Tirmidhi; authenticated by al-Albani`
- **Do not use the bare term "Hasan"** — the owner rejected it. Use
  `Sahih` or `Strong`.
- Guidance features must always show the full reference plus a bilingual notice
  that it is **not a fatwa** and a scholar should be consulted.

### 3. Everything is bilingual
Every prophet, companion, hadith, sunnah entry, story, angel, dhikr, ruling and
guidance theme carries an Arabic field. Adding content without Arabic is
incomplete. **Keep the tashkeel** — required for pronunciation and the speech
feature.

**When you change a user-facing English string that has an entry in the `AR`
dictionary, change the Arabic value in the same commit.** They are matched by
exact string. Changing one silently breaks the other — this happened with the
home-page counts and had to be repaired.

### 4. Verify on the live site
The owner finds bugs by using the deployed page. After pushing, wait for the
deploy and test the real URL:

```bash
until curl -s "https://islamistheway.github.io/js/lives.js" | grep -q "new text"; do sleep 5; done; echo live
```

### 5. Be honest about limits
Browser speech cannot recite Arabic properly. The staff login and the reader
sign-in are front-end only, not real security. A static site cannot collect
visitors' feedback centrally. Say so plainly — the owner responds well to a
clear explanation plus the nearest workable alternative.

---

## Where things are

```
index quran prophets companions hadith sunnah stories judgement golden
guidance courses search login staff meeting                            (.html)
angels.html                → redirect to judgement.html#angels (kept for links)

css/style.css              all styling, one file
js/data.js                 PROPHETS, COMPANIONS, SURAHS (Mushaf pages), HADITHS,
                           PARADISE/WARNING_THEMES, PROPHET_STORIES,
                           STORY_SECTIONS, WORSHIP_STEPS, AR_GLOSSARY
js/sunnah.js               SUNNAH_CATEGORIES + SUNNAH
js/lives.js                FULL_LIVES (all prophets + all companions), ONE_RELIGION
js/judgement.js            JUDGEMENT_STAGES
js/judgement-closing.js    JUDGEMENT_CLOSING — standing alone   (judgement.html)
js/angels.js               ANGEL_GROUPS + ANGELS   (rendered on judgement.html)
js/golden.js               GOLDEN_OVERVIEW + GOLDEN_FIELDS + GOLDEN_ROOT +
                           GOLDEN_FIGURES + GOLDEN_TAKEN   (golden.html)
js/golden-closing.js       GOLDEN_CLOSING — why we fell, how we return
js/adhkar.js               ADHKAR_CATEGORIES + ADHKAR   (guidance.html)
js/scholars.js             FIQH_CATEGORIES + FIQH_RULINGS   (guidance.html)
js/scholars-books.js       SCHOLARS — who wrote what   (guidance.html)
js/revival.js              REVIVAL → guidance.html#revival
js/terms.js                TERMS + iitwFindTerms() — the "Words explained" box
js/figures.js              RULING_FIGURES — HTML figures, NOT drawings
js/tadabbur.js             TADABBUR_INTRO + TADABBUR — why this verse, why
                           this word, and the verse that completes it
                           (quran.html, the 🧠 Tadabbur button)
js/concepts.js             SURAH_CONCEPTS — the ONE idea of each surah,
                           shown at the top of the Tadabbur panel
js/signs.js                SIGNS_INTRO + MAJOR_SIGNS + MINOR_SIGNS + THE_END
                           + JUDGEMENT_DETAIL   (judgement.html)
                           + MEETING_ALLAH      (guidance.html)
js/golden-lives.js         GOLDEN_LIVES + GOLDEN_WOMEN   (golden.html)
js/golden-mirror.js        GOLDEN_MIRROR — 18 sections in 6 parts
js/rise.js                 THE_RISE — "will we rise again?" PLUS its own
                           renderer iitwRenderRise(hostId). Rendered on BOTH
                           golden.html and judgement.html from this one file,
                           so the two pages cannot drift
js/enrol.js                course sign-up + the request that reaches the
                           staff by mail/WhatsApp   (courses.html)
js/account.js              reader sign-in + saved verse   (quran.html)
js/main.js                 nav, scroll reveal, analytics, text-to-speech, staff
                           session, video parsing, feedback widget, PERSON SEARCH
js/quran.js                surah grid, 16 reciters, audio, reader modal, Mushaf
                           page markers, save-my-place
js/i18n.js                 Arabic/English switch, RTL, reference translation,
                           surah names generated from SURAHS
data/site-config.json      staff-editable (courses, videos, meetings, payment,
                           recitations)
HANDOFF/                   full documentation
```

Script load order matters: `data.js` → data files → page script → `main.js` →
**`i18n.js` last**. Two exceptions where `main.js` loads EARLY on purpose,
because the page script calls its helpers at parse time: `staff.html` and
`companions.html`. On `quran.html`, `account.js` loads before `quran.js`.

Pages that load `data.js` for a reason that is not obvious, so do not "tidy"
it away: **`golden.html` and `sunnah.html`** need `SURAHS` because `i18n.js`
builds its surah-name translations from it — without it every
"Surah Al-Baqarah (2:170)" on those pages renders half in Arabic and half in
English. **`search.html`** needs `lives.js`, because a search result offers the
person's full biography.

### Never destroy what the owner published
`data/site-config.json` holds his live recitations. Before committing, run
`git checkout origin/main -- data/site-config.json` unless you are
deliberately changing it — a stale local copy will delete them.

### The nav breakpoint must be RE-MEASURED whenever a link is added or removed
It is not a guess. Measure with the desktop layout actually applied, and
remember the language button that `i18n.js` injects — forgetting it is what
made the old figure wrong:

```js
brand.getBoundingClientRect().width + nav.scrollWidth
  + wrapPaddingLeft + wrapPaddingRight + wrapGap
```

**13 links plus the language button need 1474px, so the hamburger takes over
below 1480px.** `.nav-wrap` has `max-width: 1560px`, and that cap is a real
constraint, not decoration: when the bar needs more than it, the nav overflows
at EVERY viewport width however wide the screen.

This has now been wrong **four times**. Most recently it sat at 1200px while
twelve links already needed 1467px, which put Login off the right edge of any
screen between those numbers — a 1366px laptop could not reach it, and it was
live. After changing a link, check overflow at 1280 / 1366 / 1440 / 1500 / 1920:

```js
document.documentElement.scrollWidth > document.documentElement.clientWidth
```

---

## Full documentation

**`HANDOFF/ISLAM-IS-THE-WAY-HANDOFF.md`** (single file, 7 parts). Read it before
non-trivial work. Part 4 (owner's rules) and Part 5 (open work) matter most.

---

## Adding content

**Sunnah entry** (`js/sunnah.js`) — `cat, title, titleAr, detail, detailAr, ref,
strength, keys` (+ optional `arabic` with tashkeel).

**Hadith** (`js/data.js`) — `arabic, text, narrator, ref, topic, title, strength`
(+ optional `keys`). The `title` should describe the *situation* — that is what
situational search matches.

**Person** (`js/data.js`) — `id, name, arabic, title, titleAr, category, summary,
summaryAr, refs`.

**Full life** (`js/lives.js`) — key must match the person's `id`. Fields:
`before, islam, change, greatest, death` each with an `Ar` twin, plus
`sources: []`. Prophets also take `message`/`messageAr`. **Every source must
state its rank.**

**Angel** (`js/angels.js`) — `id, group, order, name, nameAr, role, roleAr,
detail, detailAr, arabic, points: [{en, ar, ref}], ref, strength`.

**Dhikr** (`js/adhkar.js`) — `id, cat, title, titleAr, arabic, en, count,
countEn, countAr, virtue, virtueAr, ref, strength, keys`.

**Ruling** (`js/scholars.js`) — `id, cat, title, titleAr, question, questionAr,
answer, answerAr, points, evidence, scholars, difference, verify, keys`.
Positions attributed BY NAME; disagreements stated with which way the weight of
scholars leaned; fatwas cited by WORK, never by an invented volume/page.

Always validate before committing:

```bash
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js
```

A missing comma between objects silently breaks every page that loads the file.

---

## Traps that have already cost time — do not repeat them

- **Muslim's numbering in the jsdelivr hadith API is sequential (1–7563) and
  does NOT match** the standard numbering. Bukhari's **does**. Cite Muslim by
  book name unless the number is verified.
- **Never run generated code through Python's `unicode_escape`.** It reads UTF-8
  as Latin-1 and turns Arabic into mojibake (`الدورات` → `Ø§ÙØ¯ÙØ±Ø§Øª`),
  and turns `\n` inside JS string literals into real newlines, which breaks the
  whole script. Both happened. Write files as plain unicode with
  `encoding="utf-8"`.
- **After any bulk edit, grep for mojibake** (`Ø` `Ù` `â€`) across every HTML,
  JS and CSS file. Structural checks pass while the Arabic is destroyed.
- **`.en-only` / `.ar-only` need `!important`** — layout rules that also set
  `display` will out-specify them.
- **Duplicate keys in the `AR` dictionary silently overwrite.** Adding `"Quran"`
  as a grading overwrote the navigation label. Check for duplicates after
  editing i18n.js.
- **Regex look-behind** breaks older Safari at parse time — avoided in
  guidance.html and stories.html.
- **A stale local `data/site-config.json`** deletes the owner's recitations.
- **`bump-version.sh` silently skipped hyphenated filenames** — the regex was
  `js/[a-z0-9]+\.js`, so `js/scholars-books.js` was never cache-busted from the
  day it was added. Fixed to `[a-z0-9-]+`. Any new pattern in that script must
  be checked against the filenames actually in `js/`.
- **A guarded render fails INVISIBLY.** `renderScholars()` begins
  `if (typeof SCHOLARS === "undefined") return;`, so a syntax error in
  `scholars-books.js` produced an empty section and no console error anyone
  noticed. After editing a data file, check the array actually loaded:
  `typeof SCHOLARS` / `FIQH_RULINGS.length` in the console — a balanced-brace
  count is not enough to prove it parses.
- **`innerText` returns the text of `display:none` elements**, so it is useless
  for checking whether `.en-only` / `.ar-only` are working. Use
  `getComputedStyle(el).display` instead. This produced two false bug reports.
- **`getComputedStyle` on a CHILD of a `display:none` parent still reports the
  child's OWN display**, so checking a leaf node proves nothing. Use
  `el.getClientRects().length > 0` to know whether something really renders.
  This produced a third false report — 43 "English leaks" that did not exist.
- **A CSS transition does not advance while the browser pane is not
  compositing**, so a mid-transition value read in an automated check is
  meaningless. Read resting values with transitions disabled.

### `**bold**` is NOT converted unless the renderer does it — and headings never are
This has now been found live **twice**, and it only ever hurts Arabic readers,
which is why it survives so long: the English text uses CAPITALS for emphasis,
so English looks fine while Arabic shows raw asterisks.

Measured before the fix in the 13 August session: `golden.html` was the only
page converting. `judgement.html` was showing **128 literal markers** in
Arabic mode, `quran.html` was showing them from the 486 markers in
`js/tadabbur.js`, and `guidance.html` from `MEETING_ALLAH`.

Every paragraph helper must carry:

```js
.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
```

Non-greedy, and **no look-behind** — a look-behind breaks older Safari at
parse time and would kill the whole file. The helpers that have it now:
`paras()` in golden.html, `closingParas()` and `sgParas()` in judgement.html,
`tadPara()` in js/quran.js, the local `para()` in the MEETING_ALLAH renderer
in guidance.html, and `iitwRiseParas()` in js/rise.js.

**AND THE PART THAT BIT TWICE: heading fields are inserted RAW.** `h`, `hAr`,
`title`, `titleAr`, `name`, `nameAr`, `w`, `surahTitle` never pass through a
paragraph helper, so a marker in a heading can never convert no matter how
many renderers you fix. Heading fields must not carry markers. Check with:

```bash
grep -nE '^\s*(h|hAr|title|titleAr|name|nameAr|w|surahTitle[A-Za-z]*):.*\*\*' js/*.js
```

### Musnad Ahmad is NOT in the hadith API — you cannot verify it mechanically
The jsdelivr collection carries only: `abudawud bukhari ibnmajah malik muslim
nasai tirmidhi nawawi qudsi dehlawi`. `ara-ahmad.json` returns an 84-byte
"couldn't find the requested file" — which is easy to mistake for a real file.

So anything from Musnad Ahmad — including the famous five-phases hadith of
Hudhayfah ending in a caliphate on the way of prophethood — cannot be checked
against a primary text the way Bukhari and Muslim can. Cite it **by collection
and grader, never by a number**, and say on the entry that the wording was not
machine-verified. `js/rise.js` does this and is the model.

### Comparing Arabic: normalise to NFC or you get false failures
The JSON editions and the repo files are stored in different Unicode
normalisation forms, so a raw byte compare reports mismatches that are not
real. Harakat ordering also differs harmlessly — `وَلاَ` in the collections vs
`وَلَا` if typed — same consonantal skeleton, different bytes.

```python
import unicodedata
N = lambda s: unicodedata.normalize("NFC", s)
```

Compare `N(mine) in N(source)`. Without this, a verification pass "fails" 14
of 18 correct quotations, which then wastes time chasing nothing.

### Python printing Arabic to the Windows console crashes — AND can leave the file unwritten
`UnicodeEncodeError: 'charmap' codec` on cp1252. Write to a UTF-8 file and
`Read` it back instead. **Never `unicode_escape`.**

The dangerous version, which actually happened: a script that does
`read → replace → print → write`, where the `print` contains Arabic. The print
raises, the write never runs, and the file is **silently left unmodified**
while the earlier files in the same loop were already saved. That produced a
half-applied edit across `index.html` and `js/i18n.js` — English changed in
one, key unchanged in the other, which is exactly the state that breaks the
AR dictionary. Do the writes first, or print nothing but ASCII.

### `grep -o '<li[ >]'` misses template literals
`<li${cond ? ' class="x"' : ""}>` is a real open tag that the grep does not
count, so the balance check reports a false mismatch. Verify list balance in
the **parsed DOM**, not by grepping source.

### A partial Quran quotation needs `arNote`
If a tadabbur entry quotes only part of a long verse, it must carry
`arNote` / `arNoteAr` naming what the verse goes on to say. Without it a
fragment reads as the whole verse. 13 entries had to be repaired for this.

### The citation audit worth re-running after any content push
Mechanical, and it has caught real problems:

```python
# every "al-Bukhari NNNN" across the data files -> does the number exist,
# and does the text actually say what the card claims?
# every "Surah X (N:M)" -> does the surah name match the number, and is the
# verse in range? (api.alquran.cloud/v1/surah gives names + ayah counts)
```

Note when reading its output: surah-name mismatches are almost always
transliteration variants (`Qaf`/`Qaaf`, `Ya-Sin`/`Yaseen`), not errors — check
the verse number is in range before treating a flag as a bug.

### A generator script's \n becomes a REAL newline in the JS string
This happened twice in the 6–11 August sessions. Writing a data file from a
Python/shell script with `\n` inside a normal (non-raw) string writes an
actual line break into the JS source, which splits the string literal, and
the file then **fails to parse and the section renders as nothing** while the
page otherwise looks perfectly fine. Use raw strings, and verify with
`typeof MY_CONST` in the console — never by looking at the page.

### AR_PARTS is ORDER-SENSITIVE and getting it wrong is silent
The short patterns are substrings of the long ones. `al-Bukhari` placed above
`Sahih al-Bukhari` makes the latter render "Sahih البخاري". Bare collection
names and short narrator forms go at the END of the array, and the full name
always precedes the short one (`Anas ibn Malik` before `Anas`).

### Reference lines must never contain explanatory prose
A `ref` / `source` field is passed through `iitwTranslateReference()`, which
translates named pieces. A paragraph in it cannot be translated and sits in
English on an Arabic page. Put the explanation in the body or a comment.

### Any new section printing a source line must be added to IITW_REF_SELECTOR
`i18n.js` only translates a reference whose parent matches that selector. It
is hand-written, it went stale the moment `.tad-ref` was introduced, and 16
references on the Judgement page stayed English because of it. Prefer
`.tad-ref` on new markup rather than inventing another class.

### Fetch BEFORE restoring data/site-config.json
`git checkout origin/main -- data/site-config.json` restores whatever
`origin/main` you last fetched. A stale restore staged a revert of the
owner's staff-dashboard publish; it was caught only because the push was
rejected as non-fast-forward. `git fetch -q origin` first, every time.

### If a push lands but the site does not change, check the DEPLOY step
GitHub Pages runs build and deploy as separate jobs. The Jekyll **build can
succeed while the deploy fails**, which leaves the repo healthy and the live
site frozen on an older commit. Check
`api.github.com/repos/<owner>/<repo>/actions/runs/<id>/jobs` — an empty
commit re-queues the deployment.

### Never put label text inside an SVG
Text in an SVG is not a node `i18n.js` can walk, so it **never translates**, and
a horizontal scroll wrapper clips it in RTL where scrolling starts from the
right — "Hair, neck and ears" rendered as "irs / tly" on the live site. Every
figure on this site is HTML for that reason. A related lesson: the first hijab
figure was an outline of a garment that read as a winter hat, and **a diagram
the reader has to decode teaches less than a sentence**.

Also: an SVG with a `min-width` **widens its card instead of scrolling**, because
a grid item defaults to `min-width: auto`. The scroll wrapper needs
`min-width: 0` or the whole page scrolls sideways on a phone.

### Arabic substring matching is NEVER safe
ولي (wali) sits inside وليس, وهن (wahn) inside وهنّ, and عينة ('inah) matched
بعينه. Match Arabic **word by word** after stripping harakat and peeling the
attached prefixes (و ف ب ك ل ال), and anchor a term to its definite form
(الوهن، الجمع) when the bare form is also a common word. Same trap the Stories
glossary hit with كلّ / الكَلّ.

The mirror of this bites in **English** too: `includes()` on a name made "Ali"
return seventeen people, because a-l-i sits inside Salih, Khalid, Malik and
Salim. Latin needs word boundaries; Arabic needs word-by-word. Neither is
served by a bare substring test.

### A hand-written list of pages will always go stale
`staff.html` had a hand-typed `TRACKED_PAGES`, so golden, judgement, stories and
sunnah recorded visits for weeks and showed **nothing** in analytics — `main.js`
had been counting them all along. It is now derived from the page's own nav.
Whenever something must enumerate the site's pages, derive it; do not type it.

---

## Keeping this skill current

**This skill does not update itself.** When a session finishes something
significant:

1. Update `HANDOFF/ISLAM-IS-THE-WAY-HANDOFF.md` (and the numbered files).
2. Update the "Current state" numbers below.
3. Update `CLAUDE.md` at the repo root if a critical rule changed.
4. Commit and push — the skill lives in the repo and travels with the project.

---

## Current state

_Last updated: 13 August 2026_

| Content | Count |
|---|---|
| Prophets | 29 — **all with a full life and message** |
| Companions | 65 — **all with a full life** |
| Full lives in `js/lives.js` | **94** |
| Stories of the Prophet ﷺ | **45**, in **10 sections** by what the story teaches |
| Golden Age figures (`js/golden.js`) | **41** + 7 documented cases of the credit going elsewhere |
| Golden Age closing sections | **12** — why we fell, the influencer inversion, how we return |
| Judgement Day closing sections | **6** — standing alone, and what to do about it |
| Terms explained (`js/terms.js`) | **48**, shown under every ruling |
| Ruling figures (`js/figures.js`) | **4** — HTML comparison tables, never drawings |
| Curated hadith | 43 (+ ~15,000 Bukhari & Muslim via API) |
| Sunnah practices | 166 across 18 areas |
| Day of Judgement stages | **15** (incl. the Great Intercession) |
| Angels | **33** in 5 groups |
| Adhkar | **19** in 6 groups |
| Scholars' rulings | **15** in 7 areas |
| Scholars with their books | **19** (the four imams, al-Bukhari, Muslim, at-Tabari…) |
| Surahs | 114, 16 reciters, Mushaf page numbers |
| Guidance themes | 23 + **24 worship steps** + the revival section |
| Nav links | **13** — the bar needs 1474px, hamburger below 1480px |
| Tadabbur verses (`js/tadabbur.js`) | **167** across **all 114 surahs** — every surah has at least one explained verse. Al-Fatihah and Al-Ikhlas complete; Al-Baqarah 14 verses; Aal-Imran 5. The coverage numbers in the panel are BUTTONS that jump to the verse |
| "What people get wrong here" boxes | **7** — 9:5, 13:11, 17:32, 30:9, 51:56, 70:19, 2:31 |
| Surah concepts (`js/concepts.js`) | **114 of 114** — complete |
| Major signs of the Hour (`js/signs.js`) | **9**, from the Prophet's ﷺ own list in Sahih Muslim |
| The end itself (`THE_END`) | **6 stages** — blast to raising |
| Judgement detail (`JUDGEMENT_DETAIL`) | **10 sections** — the two "firsts", the Bridge, the speeds, the last man in |
| "In plain words" boxes | **56 on the Judgement page alone** (all 15 stages, all 6 closing sections, 9 major signs, 6 THE_END stages, 10 detail sections, 11 hardest angels, 7 of the 8 rise blocks), plus Golden Age and the Quran |
| On-this-page nav | `.page-toc` — sticky bilingual jump bar on `judgement.html` (6 sections) and `golden.html` (10) |
| Will we rise again (`js/rise.js`) | **8 blocks + 7 words explained**, on BOTH long pages. Built so the hope rests on AGREED-UPON texts (al-Bukhari 3116, Sahih Muslim/Jabir, al-Bukhari 3606) and does NOT depend on the Musnad Ahmad five-phases narration, which is flagged hardest of all |
| The ten major signs | Counted out as **ten** (the three landslides are three of them), plus a 7-block section on which comes first and last |
| Minor signs (`MINOR_SIGNS`) | **7**, each with a status badge — already happened / not yet / partly / scholars differ — and a dated `when` box in which the DATING is graded separately from the hadith |
| Golden Age full lives (`js/golden-lives.js`) | **7** — al-Khwarizmi, Ibn al-Haytham, al-Zahrawi, Ibn al-Nafis, al-Biruni, Fatima al-Fihri, Ibn Khaldun |
| The mirror (`js/golden-mirror.js`) | **18 sections in 6 parts** — them, us, and what to do. Includes the moral-collapse trio: what happened to the language (measured from the MPA rating rule, the Harvard ratings-creep study and the Pediatrics gun-violence paper), the word a boy thinks makes him a man, and the trade that leaves you holding nothing |

### Added 6–11 August 2026

- **Tadabbur on the Quran page** — a 🧠 button beside Stop opening, per
  verse: why it sits there, why THIS word, where else the Quran uses it, and
  the verse elsewhere that completes it. Sourced from **Ar-Raghib
  al-Isfahani's Al-Mufradat**, read off Shamela, every citation with its page.
  **His *tafsir* survives only for surahs 1–5** — the manuscript ends at
  Al-Ma'idah — so Al-Mufradat is the throughline for the ten-surah project
  the owner chose.
- **`SURAH_CONCEPTS`** — the one idea of each surah, shown first, and on
  surahs with no verse detail too, so the button always answers.
- **The signs of the Hour and the end of the world** on the Judgement page,
  ABOVE the fifteen stages because that is the order it happens in. "Nobody
  knows when" is placed before any sign.
- **Golden Age full lives and the women comparison**, plus **the mirror** —
  15 sections in 6 parts, which criticises US at the same volume and in the
  warning box.
- **Course enrolment** — the Enroll button had pointed at the STAFF login.

### Bugs fixed in those sessions that were ALREADY LIVE
- **The Pages DEPLOY step was failing while the build succeeded** — two
  commits of work never reached the site while the repo looked healthy.
- **The meeting button never opened the room**: `window.open` after an
  `await`, so the popup was blocked. The no-token path had no await, which is
  why it passed testing.
- **Every nav click by an Arabic-mode reader was discarded** — 13 of 13 nav
  links produced an empty analytics key in Arabic.
- **English leaked into Arabic mode across every new section** — missing
  `.en-only`, `.tad-ref` absent from `IITW_REF_SELECTOR`, and prose inside
  citation fields.
- **Ya-Sin 30** was a murattal clip looped by the player rather than a
  mujawwad reading that carries the returning.

### Added 5–6 August 2026
- **`golden.html` / `js/golden.js`** — the Golden Age. Opens with a plain
  summary (what it was, exactly WHEN, where, what came out of it) and a
  22-entry timeline, because most readers have never been told the period
  existed. Then 41 figures, each carrying the Latinised name Europe used.
  History is graded like hadith: *his own surviving work* · *his work plus its
  Latin translation* · *reported in the histories* · *popular but not
  established*. The "they took it" argument is built from documented receipts
  (Ibn ash-Shatir vs Copernicus, Ibn an-Nafis, Toledo, the names) rather than a
  percentage, and one card says plainly what is NOT true — because one inflated
  claim discredits the twenty true ones beside it.
- **`js/golden-closing.js`** — 12 sections: why we fell, following without
  thinking (al-Bukhari 7320), what we chose to copy, **the influencer
  inversion** (you are not his audience, you are his product), who Baghdad made
  famous, how to get out of the loop, modesty in the order An-Nur revealed it
  (24:30 to the MEN first), what is happening to our young, why we are behind,
  how a person comes back, and how it ends. Ya-Sin 30 carries a real recitation
  and shows the reciter's repetition in a **separate labelled block** — the
  mushaf text is printed once, exactly, and that line is never blurred.
- **`js/judgement-closing.js`** → `judgement.html#alone` — 6 sections on
  standing alone, with every dua for steadfastness pulled into its own card.
- **`js/revival.js`** → `guidance.html#revival` — why the ummah fell and the way
  back. Both central hadith labelled outside the two Sahihs, the 'inah hadith
  carrying its real disagreement, and Imam Malik's sentence marked as HIS.
- **`js/terms.js`** — 48 terms explained under every ruling.
- **`js/figures.js`** — 4 figures, as HTML tables. Read the SVG trap above.
- `STORY_SECTIONS` in `data.js`; 9 more scholars; 4 more rulings; 8 more
  worship steps.

### Bugs fixed in those sessions that were ALREADY LIVE
- Nav ran off-screen between 1200px and ~1467px — **Login was unreachable on a
  1366px laptop.**
- `bump-version.sh` never stamped hyphenated filenames.
- Person search: "Ali" returned **17 people**; results now scored, ranked, and
  labelled when they are only a cross-reference. `search.html` also never
  loaded `lives.js`, so no result offered the full biography.
- Hadith search could not handle the Arabic definite article — **"النية"
  returned nothing** while "intention" worked.
- Analytics silently ignored golden, judgement, stories and sunnah.
- Guidance led with an irrelevant ruling — "I lose my temper" was answered with
  backbiting.
- Surah names rendered as "سورة Aal-Imran" site-wide — **83 such lines on
  companions.html alone.** `i18n.js` now generates them from `SURAHS`.

### Built in the 3–4 August 2026 sessions
- **All 94 full lives** written (was 16). Short-record prophets (Idris,
  Dhul-Kifl, Al-Yasa, Shith, Yusha, Shamwil, Danyal) get honest short entries
  that state what is NOT established rather than padding with Israiliyyat.
- **The angels** — `js/angels.js`, rendered inside `judgement.html`. Israfil in
  eight points (the two blasts, the forty between them, the tailbone, the horn
  and its waiting bearer); Jibril gathered; Mika'il honestly (rain/provision is
  NOT from the two Sahihs); the Mi'raj gatekeepers; and a group for what is
  famous but unestablished (Azrail, Ridwan, Israfil's eyes).
- **The Great Intercession** added as Judgement stage 5; all 15 renumbered.
- **The adhkar** on Guidance, with a tap counter kept per day.
- **The scholars' explanations** on Guidance — Ibn Baz, Ibn Uthaymeen, the
  Permanent Committee, an-Nawawi, al-Albani — searched and shown FIRST, because
  "what counts as hijab" is answered by scholars, not by a hadith of warning.
  Plus **the scholars and their books** (Ibn Taymiyyah, Ibn al-Qayyim, Ibn
  Kathir, Ibn Hajar, as-Sa'di, ash-Shafi'i…).
- **Reader sign-in on the Quran page** (`js/account.js`) — username (not an
  email), password ≥6, SHA-256 salted hash, saves the exact surah and verse.
  The Save button sits beside Stop and arms when a verse's audio finishes;
  "Continue where you stopped" reopens it. Device-local, and says so.
- **Feedback form on every page**, injected from `main.js`; staff panel reads
  the device-local copies with an honest note that the real inbox is email.
- **Guidance mic** is now a click-on/click-off toggle that survives pauses.
- **Courses page** advertises nothing — it says courses are on the way until the
  staff adds one. Staff editor does add/edit/delete and a connected-series option.
- Omar and Osman spelled with **O** (ids unchanged, so search still works).
- Arabic mode swept: prophets and Quran pages are clean; gradings, references,
  Mushaf pages and Arabic-Indic numerals all translate.

## The rule that matters most in this project

**Say how strong a source is, every time.**

- Bukhari/Muslim → cite the number. Top rank.
- at-Tirmidhi, an-Nasa'i, Abu Dawud, Ahmad → name the collection AND say it is
  outside the two Sahihs.
- Ibn Ishaq, Ibn Sa'd, at-Tabari, Ibn Kathir → label **historical sira, not
  hadith**.
- If something famous is NOT authentic, **say so on the entry**. Already on the
  site: the 70,000 angels at Sa'd ibn Mu'adh's funeral · Azrail · Ridwan ·
  Munkar and Nakir · Ayat al-Kursi after every prayer · Israfil's eyes ·
  Mika'il and the rain · the forty-year gate of Paradise (it is Utbah ibn
  Ghazwan's words, not the Prophet's ﷺ).

## Open work

_As of 13 August 2026._

0. **Tadabbur DEPTH, not coverage.** Coverage is done: every one of the 114
   surahs now has at least one explained verse, **167 entries in total**. The
   owner's standing instruction is "more and more and more", so the remaining
   work is depth — more verses inside the surahs people read most. Add one by
   appending to that surah's `ayat` array; the coverage line sorts itself, so
   insertion order does not matter.
   **Two rules when adding:** pull the verse text from `api.alquran.cloud`
   and never type it from memory, and if you quote only PART of a long verse
   add `arNote`/`arNoteAr` naming what the verse goes on to say — otherwise a
   fragment reads as the whole verse. 13 entries had to be repaired for this.
0b. **`SURAH_CONCEPTS` is complete at 114 of 114.**
0a1. **THE HOME PAGE DOES NOT MENTION TADABBUR AT ALL.** 167 explained verses
   across all 114 surahs — the site's biggest single feature — and
   `index.html` never names it. This is the largest known gap and it was
   raised with the owner rather than fixed. Any home-page count added must
   change the English in `index.html` AND the key AND the Arabic value in the
   `AR` dictionary in `js/i18n.js`, in the same commit.
0a2. **"Improve the interface" is an open request, deliberately not guessed
   at.** The owner asked to improve the interface of the long pages "not by
   changing the design much". The `.page-toc` jump bars were done; beyond
   that he was asked to say what feels wrong rather than have it guessed.
0a3. **Citation audit covers the Judgement page's files only** —
   `judgement.js`, `judgement-closing.js`, `angels.js`, `signs.js`. All 17
   al-Bukhari numbers there were verified against the collection and all
   Quran references against the API. The other pages have NOT had that sweep.
0c. **Golden Age lives: 7.** Ibn Sina, ar-Razi, Ibn Battuta, Ibn Rushd,
   al-Idrisi and Jabir ibn Hayyan are the obvious next. A "how we treated
   each other" section (bimaristans, awqaf, ahl adh-dhimmah) was offered and
   not built.

1. **The hijab illustration.** The owner asked for a photograph showing
   incorrect hijab and pasted one into chat. A chat image cannot be written to
   the repo — ask him to save the file into `img/`, then wire it into the
   `fq-hijab-conditions` figure in `js/figures.js`. **Do not reference a
   filename before the file exists**: `check-images.sh` fails the build on any
   missing image reference.
2. **Hadith page in Arabic** — the 43 curated hadith have English `title` and
   `topic` with no Arabic twin, so ~100 English strings remain in Arabic mode.
   Needs `titleAr` and `topicAr` written.
3. **Courses page in Arabic** — ~108 UI strings with no `AR` entries.
4. **Companion reference lines** — ~27 English descriptions in `refs` arrays
   ("Historical sira accounts of the first Caliphate").
5. **Gmail sign-in** — blocked: needs an OAuth Client ID from the owner's own
   Google Cloud Console. The device-local reader account now covers most of the
   value.
6. **Cross-device saved place** — would need a real backend.
7. **Arabic speech quality** — limited by the voices installed on the reader's
   device; nothing in the code can fix it.
8. **Google Search Console** — still not set up (Bing is verified and indexed).
9. **320px viewport** — `theme-card` on guidance overflows very slightly at
   320px. Pre-existing and cosmetic; every other width from 375px to 1920px is
   clean in both languages.
