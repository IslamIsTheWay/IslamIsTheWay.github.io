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
index quran prophets companions hadith sunnah stories judgement guidance
courses search login staff meeting                                     (.html)
angels.html                → redirect to judgement.html#angels (kept for links)

css/style.css              all styling, one file
js/data.js                 PROPHETS, COMPANIONS, SURAHS (Mushaf pages), HADITHS,
                           PARADISE/WARNING_THEMES, PROPHET_STORIES,
                           WORSHIP_STEPS, AR_GLOSSARY
js/sunnah.js               SUNNAH_CATEGORIES + SUNNAH
js/lives.js                FULL_LIVES (all prophets + all companions), ONE_RELIGION
js/judgement.js            JUDGEMENT_STAGES
js/angels.js               ANGEL_GROUPS + ANGELS   (rendered on judgement.html)
js/adhkar.js               ADHKAR_CATEGORIES + ADHKAR   (guidance.html)
js/scholars.js             FIQH_CATEGORIES + FIQH_RULINGS   (guidance.html)
js/scholars-books.js       SCHOLARS — who wrote what   (guidance.html)
js/account.js              reader sign-in + saved verse   (quran.html)
js/main.js                 nav, scroll reveal, analytics, text-to-speech, staff
                           session, video parsing, site-wide feedback widget
js/quran.js                surah grid, 16 reciters, audio, reader modal, Mushaf
                           page markers, save-my-place
js/i18n.js                 Arabic/English switch, RTL, reference translation
data/site-config.json      staff-editable (courses, videos, meetings, payment,
                           recitations)
HANDOFF/                   full documentation
```

Script load order matters: `data.js` → data files → page script → `main.js` →
**`i18n.js` last**. Two exceptions where `main.js` loads EARLY on purpose,
because the page script calls its helpers at parse time: `staff.html` and
`companions.html`. On `quran.html`, `account.js` loads before `quran.js`.

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

_Last updated: 5 August 2026_

| Content | Count |
|---|---|
| Prophets | 29 — **all with a full life and message** |
| Companions | 65 — **all with a full life** |
| Full lives in `js/lives.js` | **94** |
| Stories of the Prophet ﷺ | **45**, in **10 sections** by what the story teaches |
| Golden Age figures (`js/golden.js`) | **28** + 7 documented cases of the credit going elsewhere |
| Curated hadith | 43 (+ ~15,000 Bukhari & Muslim via API) |
| Sunnah practices | 166 across 18 areas |
| Day of Judgement stages | **15** (incl. the Great Intercession) |
| Angels | **33** in 5 groups |
| Adhkar | **19** in 6 groups |
| Scholars' rulings | **15** in 7 areas |
| Scholars with their books | **19** (the four imams, al-Bukhari, Muslim, at-Tabari…) |
| Surahs | 114, 16 reciters, Mushaf page numbers |
| Guidance themes | 23 + 16 worship steps + the revival section |
| Nav links | **13** — the bar needs 1474px, hamburger below 1480px |

### Added 5 August 2026
- **`golden.html` / `js/golden.js`** — the Golden Age. Every figure carries the
  Latinised name Europe used. History is graded like hadith: *his own surviving
  work* · *his work plus its Latin translation* · *reported in the histories* ·
  *popular but not established*. The "they took it" argument is built from
  documented receipts (Ibn ash-Shatir vs Copernicus, Ibn an-Nafis, Toledo,
  the names) rather than a percentage, and one card says plainly what is NOT
  true — because one inflated claim discredits the twenty true ones beside it.
- **`js/revival.js`** → `guidance.html#revival` — why the ummah fell and the way
  back. Both central hadith labelled outside the two Sahihs, the 'inah hadith
  carrying its real disagreement, and Imam Malik's sentence marked as HIS.
- `STORY_SECTIONS` in `data.js`; 9 more scholars; 4 more rulings.

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

1. **Hadith page in Arabic** — the 43 curated hadith have English `title` and
   `topic` with no Arabic twin, so ~100 English strings remain in Arabic mode.
   Needs `titleAr` and `topicAr` written.
2. **Courses page in Arabic** — ~108 UI strings with no `AR` entries.
3. **Companion reference lines** — ~27 English descriptions in `refs` arrays
   ("Historical sira accounts of the first Caliphate").
4. **Gmail sign-in** — blocked: needs an OAuth Client ID from the owner's own
   Google Cloud Console. The device-local reader account now covers most of the
   value.
5. **Cross-device saved place** — would need a real backend.
6. **Arabic speech quality** — limited by the voices installed on the reader's
   device; nothing in the code can fix it.
7. **Google Search Console** — still not set up (Bing is verified and indexed).
