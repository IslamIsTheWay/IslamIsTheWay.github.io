# ISLAM IS THE WAY - COMPLETE PROJECT HANDOFF

> **For a new Claude chat / Project.** This single file contains everything
> needed to continue building this website. Read it top to bottom once, then
> use it as a reference.
>
> - **Live site:** https://islamistheway.github.io/
> - **Local folder:** `C:\Users\User\islam-is-the-way-site`
> - **GitHub repo:** `IslamIsTheWay/IslamIsTheWay.github.io`
> - **Deployment:** push to `main` -> live in 1-2 minutes (GitHub Pages, no build)
>
> **Last updated: 13 August 2026.**

## The four rules that matter most

1. **Run `./bump-version.sh` before every commit.** Without it the owner
   reloads and sees no change. This has cost hours.
2. **Deploy - do not leave finished work local.** He judges by the live site.
   Push, wait for GitHub Pages, and verify on the real URL.
3. **State how strong every source is.** Bukhari/Muslim with a number;
   at-Tirmidhi and the rest labelled as outside the two Sahihs; Ibn Ishaq and
   Ibn Sa'd labelled historical sira. When something famous is not authentic,
   say so on the entry.
4. **Never run generated content through Python's `unicode_escape`.** It reads
   UTF-8 as Latin-1 and turns Arabic into mojibake, and turns `\n` inside JS
   strings into real newlines. It has broken the staff dashboard once and
   shipped ruined Arabic to the live site once. Write files as plain unicode
   with `encoding="utf-8"`, then grep for `Ø` and `Ù` before committing.

## Where the project stands - 4 August 2026

| Content | Count |
|---|---|
| Prophets | 29 - all with a full life and message |
| Companions | 65 - all with a full life |
| Full lives (`js/lives.js`) | **94** |
| Stories of the Prophet | 38 |
| Curated hadith | 43 (+ ~15,000 via API) |
| Sunnah practices | 166 |
| Day of Judgement stages | 15 |
| Angels | 33 |
| Adhkar | 19 |
| Scholars' rulings / scholars with books | 11 / 10 |
| Surahs | 114, 16 reciters, Mushaf pages |

## Contents

1. **Start Here** - overview, current state
2. **Architecture** - every file, data shapes, load order, external services
3. **Features** - everything built and how it works
4. **Owner's Rules** - preferences and corrections (**read before changing anything**)
5. **Open Work & Limitations** - unfinished items, traps found the hard way
6. **Credentials & Access** - logins, GitHub tokens, SEO
7. **Content Guide** - how to add content correctly + validation commands

---
---


<!-- ============================================================ -->
# PART 1 - from `00-START-HERE.md`
<!-- ============================================================ -->

# Islam Is The Way — Project Handoff

**Read this file first.** It tells a new assistant everything needed to continue
building this website without repeating work or breaking what already exists.

---

## What this project is

A bilingual (Arabic/English) Islamic education website, built as **plain static
HTML/CSS/JS — no build step, no framework, no server**.

- **Live site:** https://islamistheway.github.io/
- **Local folder:** `C:\Users\User\islam-is-the-way-site`
- **GitHub repo:** `IslamIsTheWay/IslamIsTheWay.github.io` (organisation-owned)
- **Owner's GitHub user:** `Ammar-052`
- **Owner's email:** ammarwalidyounis@gmail.com

Deployment is GitHub Pages: **committing to `main` publishes the site.** There is
no CI, no build. Changes appear live in 1–2 minutes.

---

## The single most important rule

**After ANY change to a `.html`, `.css` or `.js` file, run `./bump-version.sh`
before committing.**

```bash
./bump-version.sh      # stamps ?v=<timestamp> on every css/js link
./check-images.sh      # fails if an image is missing or too small for a background
git add -A && git commit -m "..." && git push origin main
```

Why: browsers and the GitHub CDN cache aggressively. Without the version stamp,
the owner reloads the page and sees **no change** — this wasted a lot of time
before the script existed. `bump-version.sh` prevents it.

---

## Files in this handoff folder

| File | What it contains |
|---|---|
| `00-START-HERE.md` | This file |
| `01-architecture.md` | Every file, what it does, how the data is shaped |
| `02-features.md` | Every feature built, and exactly how it works |
| `03-owner-preferences.md` | The owner's stated rules and corrections — **important** |
| `04-known-issues.md` | Open problems, half-finished work, and honest limitations |
| `05-credentials.md` | Logins, tokens, and how publishing works |
| `06-content-guide.md` | How to add prophets, companions, hadith, sunnah correctly |

---

## Current state (3 August 2026)

**Content**
- 29 Prophets — English + Arabic summaries, 4 with full life stories
- 66 Companions — including all 11 Mothers of the Believers and Sa'd ibn
  Mu'adh; 12 with full life stories
- 43 curated hadith with grading, plus full Sahih al-Bukhari + Muslim
  (~15,000) via API
- 166 Sunnah practices across 18 areas of daily life
- 23 Quran guidance themes, plus 16 worship steps (what to say, and when)
- 28 Stories of the Prophet, 5 of them a linked series on the Dajjal
- The Day of Judgement — 14 stages, 58 referenced points, 52 Quranic passages
- 114 surahs with 16 reciters, and Mushaf page numbers on every one
- A 65-word classical Arabic glossary (AR_GLOSSARY)

**Pages**: index, quran, prophets, companions, hadith, sunnah, **stories**,
**judgement**, guidance, courses, search, login, staff, meeting

**Working**: bilingual switch with RTL; situational search across Quran +
hadith + Sunnah + the full collections; Quran audio with Mushaf page markers;
hadith search; staff dashboard with publishing, a remembered token and saved
drafts; live meetings with recording and translated captions; analytics
(admin only); recommended recitations on the home page; SEO/Bing indexing.

**In progress** — see `04-known-issues.md`. Briefly:
1. Companion full lives — 12 of 66 written
2. Prophet full lives — 4 of 29 written
3. Quran "save my place" — requested, not built
4. Google/Gmail login — needs the owner's own OAuth Client ID
5. Arabic text-to-speech quality — a device limit, see the notes

## How to work with this owner

Read `03-owner-preferences.md` before making changes. Key points:

- **Verify on the live site, don't assume.** The owner finds bugs by using the
  site, so test the deployed page, not just the code.
- **Be honest about limits.** If something cannot work (e.g. browser speech
  cannot recite Quran properly), say so plainly instead of over-promising.
- **Religious accuracy matters more than volume.** Never invent a hadith
  reference or number. Cite the collection and book if unsure of the number.
  Never attribute a hadith to the Quran.
- The owner communicates by voice, so requests arrive as long paragraphs with
  several asks bundled together. Break them into a task list and do all of them.
</content>


---

## Current state — 4 August 2026

**Content**
- 29 Prophets — **every one with a full life and the message he was sent with**
- 65 Companions — **every one with a full life** (all 11 Mothers of the
  Believers). 94 full lives in total in `js/lives.js`
- 43 curated hadith with grading, plus full Sahih al-Bukhari + Muslim
  (~15,000) via API
- 166 Sunnah practices across 18 areas of daily life
- 23 Quran guidance themes, 16 worship steps, **19 adhkar**, **11 scholars'
  rulings**, **10 scholars with their books**
- **38 Stories of the Prophet ﷺ**, 5 of them a linked series on the Dajjal
- The Day of Judgement — **15 stages** including the Great Intercession
- **33 angels**, rendered inside the Day of Judgement page
- 114 surahs with 16 reciters and Mushaf page numbers
- A 65-word classical Arabic glossary (AR_GLOSSARY)

**Pages**: index, quran, prophets, companions, hadith, sunnah, stories,
judgement (which now contains the angels), guidance, courses, search, login,
staff, meeting. `angels.html` is a redirect to `judgement.html#angels`.

**Working**: bilingual switch with RTL; situational search that shows the
scholars' explanation first; Quran audio with Mushaf page markers and a
**reader sign-in that saves the exact verse you stopped at**; hadith search;
**feedback form on every page**; staff dashboard with publishing, a remembered
token, saved drafts and a **simple course editor**; live meetings; analytics.

**Note on the counts**: the companion total is **65**, not 66. Sa'd ibn Mu'adh
was in the data twice — added again when his full life was written — and the
duplicate was removed.


---


<!-- ============================================================ -->
# PART 2 - from `01-architecture.md`
<!-- ============================================================ -->

# Architecture

Plain static site. No framework, no bundler, no server. Every page is a
standalone `.html` file that loads shared CSS and JS.

## File map

```
islam-is-the-way-site/
├── index.html          Home — hero photo, quick access, photo bands, gallery, contact band
├── quran.html          114 surahs, reciter picker, surah reader modal
├── prophets.html       29 prophets (bilingual cards)
├── companions.html     65 companions (bilingual cards)
├── hadith.html         Curated hadith + full Bukhari/Muslim via API, bilingual search
├── sunnah.html         133 daily-life practices, category chips, bilingual search + mic
├── guidance.html       Quran themes + "describe your situation" finder with mic
├── courses.html        Course list, premium videos, join-a-class, feedback form
├── stories.html        28 stories of the Prophet, glossary box, series links
├── judgement.html      The Day of Judgement — 14 stages, from death to the end
├── search.html         Person search (prophets + companions)
├── login.html          Staff login (password) / visitor entry
├── staff.html          Staff dashboard — tabbed sections, publishes to GitHub
├── meeting.html        Live class room (Jitsi) + recording + translated captions
│
├── css/style.css       ALL styling for the whole site (one file, ~2000 lines)
├── js/
│   ├── data.js         Prophets, Companions, Surahs (with Mushaf pages),
│   │                   Hadith, Guidance themes, Courses, PROPHET_STORIES,
│   │                   WORSHIP_STEPS, AR_GLOSSARY
│   ├── sunnah.js       SUNNAH_CATEGORIES + SUNNAH (166 entries)
│   ├── main.js         Nav, scroll reveal, analytics, text-to-speech, person search
│   ├── lives.js        FULL_LIVES (companions + prophets), ONE_RELIGION
│   ├── judgement.js    JUDGEMENT_STAGES — the 14 stages of the Day
│   ├── quran.js        Surah grid, reciters, audio, reader, Mushaf page marks
│   └── i18n.js         Arabic/English switch, RTL, reference translation
├── img/                23 optimised images (logo, mosque photos, gallery, favicon)
├── data/site-config.json   Staff-editable content (courses, videos, meetings, payment)
│
├── bump-version.sh     Cache-busting — RUN BEFORE EVERY COMMIT
├── check-images.sh     Guard against missing/low-res background images
├── robots.txt          SEO
├── sitemap.xml         SEO — add new pages here
└── BingSiteAuth.xml    Bing verification (do not delete)
```

## Load order on a page

```html
<script src="js/data.js?v=..."></script>     <!-- data first -->
<script src="js/quran.js?v=..."></script>    <!-- page-specific, if needed -->
<script> ...page logic... </script>
<script src="js/main.js?v=..."></script>     <!-- shared behaviour -->
<script src="js/i18n.js?v=..."></script>     <!-- language switch LAST -->
```

`i18n.js` must load last because it walks the DOM to translate it.

## Data shapes

### PROPHETS / COMPANIONS (`js/data.js`)
```js
{
  id: "abu-bakr",
  name: "Abu Bakr As-Siddiq",
  arabic: "أبو بكر الصديق",
  title: "First Caliph, As-Siddiq (The Truthful)",
  category: "companion",              // "prophet" | "companion"
  summary: "English summary…",
  summaryAr: "الملخص بالعربية…",       // REQUIRED — every entry has one
  refs: ["Sahih al-Bukhari — …", "…"]
}
```

### HADITHS (`js/data.js`)
```js
{
  arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",   // with tashkeel
  text: "English translation",
  narrator: "Umar ibn al-Khattab",
  ref: "Sahih al-Bukhari, Book of Revelation, Hadith 1",
  topic: "Sincerity",
  title: "Every deed depends on its intention (Niyyah)",
  strength: "Sahih — Narrated by al-Bukhari",   // see 03-owner-preferences
  keys: ["intention","niyyah","نية"]            // optional search keywords
}
```

### SUNNAH (`js/sunnah.js`)
```js
{
  cat: "sleep",                    // must match a SUNNAH_CATEGORIES id
  title: "Perform wudu before going to sleep",
  titleAr: "الوضوء قبل النوم",
  detail: "English explanation…",
  detailAr: "الشرح بالعربية…",
  arabic: "…hadith wording…",      // optional
  ref: "Sahih al-Bukhari, Book of Wudu, Hadith 247",
  strength: "Sahih — Agreed upon (al-Bukhari and Muslim)",
  keys: ["sleep","bed","نوم","فراش"]
}
```
All five of `titleAr`, `detailAr`, `ref`, `strength`, `keys` are present on all
133 entries. Keep it that way.

### PARADISE_THEMES / WARNING_THEMES (`js/data.js`)
```js
{ title, titleAr, description, descriptionAr, keys: [...], refs: [...] }
```

### site-config.json (staff-editable, published from the dashboard)
```json
{
  "payment":  { "account": "", "instructions": "", "qrUrl": "" },
  "contact":  { "phone": "", "whatsapp": "", "demoUrl": "" },
  "videos":   [ { "title","description","price","url","code" } ],
  "meetings": [ { "title","course","time","code" } ],
  "extraCourses": [ { "id","title","level","price","description","includes":[],"videoUrl" } ]
}
```

## External services (all free, no keys needed)

| Service | Used for | Notes |
|---|---|---|
| `api.alquran.cloud` | Quran Arabic text + English translation | reliable |
| `everyayah.com` | Per-ayah recitation audio (16 reciters) | URL pattern `data/{reciter}/{surah3}{ayah3}.mp3` |
| `cdn.jsdelivr.net/gh/fawazahmed0/hadith-api` | Full Bukhari + Muslim | multi-MB, lazy-loaded |
| `abacus.jasoncameron.dev` | Anonymous visit counters | analytics panel |
| `api.mymemory.translated.net` | Live caption translation | meeting page |
| `meet.jit.si` | Video meetings | free, no account |
| `api.github.com` | Staff dashboard publishing | needs owner's token |

## CSS conventions

- One file: `css/style.css`. Uses CSS variables at `:root` (`--green`, `--gold`…).
- `.en-only` — hidden when Arabic is active
- `.ar-only` — hidden when English is active
- `html.lang-ar` — set by i18n.js for Arabic; RTL overrides hang off this
- `.reveal` + `html.js-reveal` — scroll animation, **fail-safe**: content is
  visible by default and only hidden once JS confirms the animation works
- `.page-hero.ph-photo.ph-<page>` — photo header per page
- **Never use an image under 1000px wide as a full-width background.**
  `check-images.sh` enforces this.
</content>


#### Data shapes added since the first handoff

```js
// js/data.js
PROPHET_STORIES  { id, group?, groupTitle?, title, titleAr, theme, themeAr,
                   story, storyAr, arabic?, lesson, lessonAr, ref, strength, keys }
WORSHIP_STEPS    { id, stage, stageEn, stageAr, title, titleAr, when, whenAr,
                   arabic, count?, countAr?, meaning, meaningAr, ref, strength, keys }
AR_GLOSSARY      { "<word without harakat>": { ar, en } }
SURAHS           … + pageFrom, pageTo, pages   (Madani Mushaf, 604 pages)

// js/lives.js
FULL_LIVES       { "<id matching COMPANIONS/PROPHETS>": {
                     before, beforeAr, islam, islamAr, change, changeAr,
                     greatest, greatestAr, death, deathAr,
                     message?, messageAr?,        // prophets only
                     sources: [ "... — Sahih | historical sira" ] } }
ONE_RELIGION     { title, titleAr, intro, introAr, points[], declarations[] }

// js/judgement.js
JUDGEMENT_STAGES { id, order, title, titleAr, lead, leadAr,
                   points: [ { en, ar, quran, ref } ],
                   note, noteAr }              // note = how strong the source is

// data/site-config.json
recitations      [ { id, url, title, titleAr, reciter, reciterAr, surah,
                     surahAr, surahNum, ayahFrom, ayahTo, note, noteAr,
                     vertical? } ]
```

#### Script load order — two deliberate exceptions

The normal order is `data.js` → data files → page script → `main.js` →
`i18n.js` last. But **`staff.html` and `companions.html` load `main.js`
early**, before their inline script, because that script calls
`iitwParseVideo` / `iitwEsc` / `iitwStaffUser` while parsing. `main.js` has no
top-level DOM access, so loading it early is safe. Do not "tidy" this back.


---

## Files added in the August 2026 sessions

```
js/angels.js           ANGEL_GROUPS + ANGELS (33) — rendered on judgement.html
js/adhkar.js           ADHKAR_CATEGORIES + ADHKAR (19) — guidance.html
js/scholars.js         FIQH_CATEGORIES + FIQH_RULINGS (11) — guidance.html
js/scholars-books.js   SCHOLARS (10) — who wrote what — guidance.html
js/account.js          reader sign-in and the saved verse — quran.html
angels.html            now only a redirect to judgement.html#angels
```

### New data shapes

```js
// js/angels.js
ANGELS       { id, group, order, name, nameAr, role, roleAr, detail, detailAr,
               arabic, points: [ { en, ar, ref } ], ref, strength, keys }
             group: miraj | named | quran | sahih | notest

// js/adhkar.js
ADHKAR       { id, cat, title, titleAr, arabic, en, count, countEn, countAr,
               virtue, virtueAr, ref, strength, keys }

// js/scholars.js
FIQH_RULINGS { id, cat, title, titleAr, question, questionAr, answer, answerAr,
               points: [{en,ar}], evidence: [{en,ar,ref}],
               scholars: [{name,nameAr,view,viewAr,work}],
               difference, differenceAr, verify, verifyAr, keys }

// js/scholars-books.js
SCHOLARS     { id, name, nameAr, years, yearsAr, known, knownAr,
               books: [ { t, tAr, d, dAr } ] }

// js/account.js  (localStorage only — no server)
iitw-readers        { "<lowercased username>": { display, salt, hash, place } }
iitw-reader-session "<lowercased username>"
place               { surah, surahName, surahArabic, ayah, at }

// js/judgement.js — a point may now carry a numbered list
points[]     { en, ar, quran, ref, items?: [ { en, ar } ] }

// data/site-config.json — a course may now belong to a series
extraCourses [ { id, title, level, price, description, includes[], videoUrl,
                 series, order } ]
```

### Load order additions
`quran.html` loads `account.js` BEFORE `quran.js`. `judgement.html` loads
`angels.js` before `judgement.js`. `guidance.html` loads `adhkar.js`,
`scholars.js` and `scholars-books.js` after `sunnah.js`.


---


<!-- ============================================================ -->
# PART 3 - from `02-features.md`
<!-- ============================================================ -->

# Features — what exists and how it works

## Bilingual switch (Arabic / English)

- Button injected into the nav of every page by `js/i18n.js`
- Stored in `localStorage` as `iitw-lang`, persists across pages
- Arabic mode: sets `<html lang="ar" dir="rtl">`, adds `html.lang-ar`, swaps to
  the Amiri font, mirrors bullets/quotes/mic-button
- Translates by walking text nodes and matching against the `AR` dictionary
  (exact English string → Arabic). Original English is cached on each node so
  switching back never loses or double-translates anything.
- **Also translates references** via `AR_PARTS` regex list: collection names
  ("Sahih al-Bukhari" → "صحيح البخاري") and ~35 book titles ("Book of Wudu" →
  "كتاب الوضوء").
- After any dynamic render, call `window.applyI18n()`.

**To add a translation:** add the exact English string as a key in `AR` in
`js/i18n.js`.

## Quran page

- 114 surahs from `SURAHS` in data.js; search by name, Arabic name, meaning, number
- **16 reciters** (`RECITERS` in `js/quran.js`), stored in `localStorage`
  (`iitw-reciter`). Includes Yasser Al-Dossary, Alafasy, Sudais, Maher Al-Muaiqly,
  Abdul Basit, Al-Husary, Al-Minshawi, Ash-Shuraim, Al-Ghamdi, Al-Hudhaify,
  Al-Juhany, Al-Qatami, Al-Budair, Muhammad Ayyoub, Ali Jaber, Fares Abbad.
  **Al-Luhaidan is not available** on the free per-ayah archive (checked).
- Audio URL is built directly: `everyayah.com/data/{reciter}/{surah3}{ayah3}.mp3`
- Per-verse 🔊 plus "Play Full Surah" (plays sequentially) and Stop

## Hadith page

- Three tabs: Highlights (43 curated), Sahih al-Bukhari, Sahih Muslim
- Full collections lazy-load from the jsdelivr hadith API (multi-MB)
- **Curated results render instantly**, then full-collection results append —
  important, because waiting for the download made search look broken
- Search works in Arabic and English, uses the `keys` field, stems words, and
  has a synonym map
- Every hadith shows grading with the authenticating scholar named

## Sunnah page (133 practices)

- Categories as chips (18 areas), quick-example buttons, mic input
- Search understands natural questions: "what did the prophet do before
  sleeping", "I want to pray", "my child", "ماذا أقول عند العطاس"
- Scoring: keyword hits > category-name match > word/stem overlap.
  Filler words inside phrase keywords are ignored, and irregular plurals are
  handled by a `SYN` map (child/children, wife/wives, foot/feet…)

## Guidance page

- 20 Quran themes (Paradise / warnings), bilingual
- **"Ask About Your Situation"** — describe a situation by typing or 🎤 speaking,
  and it returns, in priority order:
  1. The Prophet's ﷺ words (hadith)
  2. Quran themes
  3. Prophets (Muhammad ﷺ boosted)
  4. Companions
  plus an optional deep search across all ~15,000 hadith
- **Relevance uses IDF (word rarity)** so common words score near zero. There is
  also a `GENERIC` stoplist for words that are semantically generic even when
  statistically rare ("man", "woman", "prophet", "Allah"). A biography must match
  **two distinctive words** to appear. This exists because searching "a man
  wearing women's clothes" was returning any companion whose story mentioned a
  woman.
- Always shows a bilingual notice: **not a fatwa**, read verses in full context,
  consult a scholar.

## Staff area

**Login** (`login.html`) — `STAFF_ACCOUNTS` array, two accounts. This is a
front-end check only; credentials are visible in the page source. This is
disclosed to the user on the page. Real security needs a backend.

**Dashboard** (`staff.html`) — tabbed sections (just added, needs testing):
Meetings · Courses · Videos · Payment · Contact · Feedback · Analytics(admin only)

- **Start a Meeting Right Now** — one click: makes a code, publishes it so
  students can join, opens the host room. *(just added, needs testing)*
- **Courses** — title, level, price, description, includes, optional intro video
- **Videos** — paid video with price, hidden URL, access code; can upload a file
  from the laptop (≤45 MB) straight to the repo, or paste a YouTube link
- **Payment** — account/IBAN, instructions, QR image URL
- **Contact** — phone, WhatsApp, demo video link (drives the Courses page buttons)
- **Analytics** — visible **only** to `Islam.younis.2026`. Total visits, pages
  opened, nav sections clicked, via the free abacus counter service.
- **Publish Changes** — writes `data/site-config.json` through the GitHub API
  using a token pasted at the time. Token is never stored.
- Loads its config **from the GitHub API**, not the public file, so a recent
  publish is never overwritten by a stale cached copy.

## Meetings (`meeting.html`)

- Students enter a code; validated against published meetings
- Host mode via `?code=XXX&host=1` — shows the code, copy button, recorder
- Jitsi room `IslamIsTheWay-<CODE>` with a camera/mic prejoin screen
- **In-browser recording** (screen + mic) that downloads a `.webm` when stopped
- **Live translated captions** — speech recognition + MyMemory translation,
  Arabic/English → English, Arabic, Urdu, Indonesian, Bengali

## Text-to-speech

`speakText(text, lang)` in `js/main.js`, wired to every `.speak-btn` by a single
delegated listener.

- Strips emoji so the 🔊 icon is never read aloud
- **Keeps the tashkeel** for Arabic — removing it made pronunciation worse
- Prefers Google/network voices (best quality), then male voices
- Arabic rate 0.7 (slow, so heavy letters articulate)
- **Refuses to read Arabic with an English voice** — shows install instructions
  instead of producing gibberish
- Arabic voice picker (`#arVoiceBar`) on hadith, sunnah and guidance pages

## Other

- **Scroll reveal** photo bands with parallax, fail-safe so text can never be
  invisible if JS fails
- **Mosque gallery** on the home page — 8 photos shown at 278px against a 504px
  source, so they stay sharp
- **SEO** — robots.txt, sitemap.xml, meta/Open Graph, verified in Bing Webmaster
  Tools (BingSiteAuth.xml). Google Search Console **not yet set up**.
</content>


---

## Added 1–3 August 2026

### Stories of the Prophet (`stories.html`)
28 stories, every one located in the text of al-Bukhari or Muslim **before**
being written — none from memory. Each carries the Arabic where he spoke, the
reference, the grading, and what the situation teaches, in both languages.

- **Words explained** — a box above the lesson listing the classical words in
  that story, in plain modern Arabic and English (`AR_GLOSSARY`, 65 words).
  Matching is word-by-word, not regex, because the text carries harakat.
  Do NOT add "ال" to words under 3 letters when matching: that made the
  ordinary كلّ match الكَلّ.
- **Series linking** — stories sharing a `group` show "Part 2 of 5" with the
  others linked. The 5 Dajjal stories are one series.

### The Day of Judgement (`judgement.html`)
14 stages in the order they happen, 58 points, 52 Quranic passages: death and
the soul · the grave and the three questions · the Trumpet · the standing ·
**the angels by name** · what you are asked · **the seven under the shade** ·
**the two faces** · the settling of rights (al-Muflis) · the records · the
Scales · the Bridge and Basin · **the gates** · standing alone.

Seven stages carry a `note` saying which parts are NOT in the two Sahihs.

### Worship reference in Guidance
16 steps — before the prayer, inside it, after it, daily, and asking
forgiveness — browsable by stage, searchable, and fed into the situation box
(shown first when it matches, because it answers the question directly).

### Guidance search — how it works now
Searches Quran themes **+ all Sunnah + the full Bukhari & Muslim (automatic,
no button) + worship steps + prophets + companions**, and fetches the actual
ayah text for every theme reference. Key mechanics:
- Concept groups bridge everyday words to Quranic vocabulary.
- Expansion can only *refine* a match, never create one — otherwise "money"
  expanded to "job" and matched the hadith about cheating at work.
- Distress vs wrongdoing: someone describing suffering is not shown warnings.

### Quran — Mushaf pages
Every ayah carries its page from the Madani 604-page Mushaf, so the reader
sees "End of page 2 — 1 of 48" between verses, plus the page count per surah
on every card. Verified against the printed Mushaf.

### Recommended recitations (home page, admin only)
Paste a link → the video's own title is read via YouTube oEmbed → **the whole
Quran is searched for the words in that title**, which gives the surah AND the
exact ayah, because clips are usually titled with the verse rather than the
surah. Fills surah, verse, an English title from the verse translation, the
Arabic title, and the reciter (from after the "|", not the channel).
One button adds AND publishes; publishing is blocked if a video sits unadded.

### Staff dashboard
Sign-in lasts 12 hours in localStorage and survives leaving the page; every
change is saved as a draft and restored; a banner warns when something is not
published; the GitHub token is remembered after the first successful publish.


---

## Added 3–4 August 2026

### The angels (inside `judgement.html`)
33 entries in five groups: the named angels, the night of the Mi'raj, those
named in the Quran, those around you every day, and **what is famous but not
established**. Israfil is given in eight points — his name IS established
(Sahih Muslim), the first blast kills everything and the second raises it
(39:68), it is one shout (36:49-53), forty between them (al-Bukhari 4935), the
tailbone, the horn and its already-waiting bearer (at-Tirmidhi, outside the two
Sahihs) — and then, explicitly, that his eyes, his size and his never blinking
are NOT established.

### The Great Intercession (Judgement stage 5)
People go from Adam to Nuh to Ibrahim to Musa to Isa, each saying "myself,
myself", until they come to Muhammad ﷺ. al-Bukhari 4712 and Muslim. All 15
stages renumbered.

### The adhkar (Guidance)
19 entries in 6 groups with a **tap counter** stored per day in localStorage,
Arabic-Indic numerals in Arabic mode, and a card that turns green when finished.

### What the scholars explained (Guidance)
11 rulings across dress, prayer, purity, money, family, conduct and repentance.
**Searched and rendered FIRST**, because "what actually counts as hijab" is
answered by the scholars' conditions, not by a hadith of warning — which was the
specific complaint that prompted it. Every position attributed by name;
disagreements stated with which way the weight of scholars leaned; fatwas cited
by work, never by an invented volume and page. Plus the scholars and their books.

### Reader sign-in and save-your-place (Quran)
Username (not an email, 3–20 chars, starts with a letter), password ≥6, stored
as a SHA-256 hash of a random salt. The **Save button sits beside Stop** and
arms only when a verse's audio finishes. Signing back in shows one button:
"Continue where you stopped — Surah X, verse N", which reopens and scrolls to it.
**Device-local**, and the panel says so plainly.

### Feedback on every page
Injected above the footer by `iitwInjectFeedback()` in `main.js` — one copy to
maintain. Saves to the device and opens the mail client. The staff Feedback
panel lists the device-local copies with an honest note that a serverless site
cannot collect other people's messages.

### Guidance mic
Click on, click off. `continuous` plus a restart in `onend` unless the user
actually stopped it, so a pause no longer closes the mic. Only NEW final text is
appended, so a pause cannot paste the same sentence twice.

### Courses
The page advertises nothing until the staff adds a course. Staff editor does
add / edit / delete, and each course can be standalone or part of a **named
series with an order**, grouped under one heading on the page.


---


<!-- ============================================================ -->
# PART 4 - from `03-owner-preferences.md`
<!-- ============================================================ -->

# Owner's rules and corrections

These are things the owner has explicitly asked for, or corrected. Following them
avoids repeating mistakes that have already been made once.

---

## Religious accuracy — highest priority

1. **Never attribute a hadith to the Quran.** The owner once believed the hadith
   about men imitating women was a Quranic verse. It is **Sahih al-Bukhari 5885**.
   It was corrected respectfully, and the Quran verses on the same subject
   (An-Nur 24:30-31, Al-A'raf 7:26, Al-Ahzab 33:59) were added separately.
   Getting this wrong is serious — always keep the Quran and Sunnah distinct.

2. **Never invent a hadith number.** If unsure, cite the collection and book
   ("Sahih Muslim, Book of Faith") rather than guessing a number.

3. **Grading terms — the owner rejected the word "Hasan".** Use:
   - `Sahih — Narrated by al-Bukhari`
   - `Sahih — Agreed upon (al-Bukhari and Muslim)`
   - `Sahih — Narrated by at-Tirmidhi; authenticated by al-Albani`
   - `Strong — Narrated by …; graded Strong by …`

   **Always name the scholar who authenticated it.** The owner asked for this
   specifically: "when it is authentic by who, mention the names". Prioritise
   al-Bukhari and Muslim as the most authentic.

4. **No verses out of context.** Every guidance feature must show the full
   reference and a notice that it is **not a fatwa**, that verses must be read
   in their full surah, and that a scholar should be consulted.

---

## Language

5. **Everything must exist in both Arabic and English.** Every prophet,
   companion, hadith, sunnah entry and guidance theme has an Arabic field.
   When adding content, the Arabic is not optional.

6. **Keep the tashkeel (harakat)** in Arabic text. It is needed for correct
   pronunciation and for the speech feature. Removing it was a mistake that was
   corrected.

7. The owner reads Arabic natively and **will notice** machine-translated or
   awkward Arabic. Write it properly.

---

## Voice / audio

8. **Arabic speech must be a man's voice.** The owner asked repeatedly.
   Reality: the browser can only use voices installed on the device. On the
   owner's PC there was **no Arabic voice at all**, so an English female voice
   was reading Arabic letters — that was the real cause of the bad pronunciation.
   The code now refuses to read Arabic without an Arabic voice, prefers
   Google/network voices, prefers male, and offers a voice picker.
   The owner suggested copying Google Translate's voice — the honest answer is
   that Chrome exposes Google's Arabic voice to the page, so **recommend Chrome**.
   Do not scrape Google Translate's private endpoint (unreliable + against ToS).

9. For the **Quran, always use real human reciters**, never synthetic speech.

---

## Design

10. **Mosque photos must be clearly visible** — the owner complained overlays
    were too heavy. Current scrims: home hero 66%/50%, page headers ~56%/48%,
    photo bands 56%/42%, verse banner 62%. Do not darken them again.

11. **Never stretch a small image across the full width.** A 504px gallery image
    used as a page header looked pixelated. `check-images.sh` now blocks this.

12. **The site name must never wrap** into one word per line. It is
    `white-space: nowrap; flex-shrink: 0`, and the nav collapses to a hamburger
    below 1150px.

13. Logo: the owner's own **main logo** (crescent + mosque emblem), cropped to
    `img/logo-emblem.png`. Logo 2 (`img/logo-alt.png`) may be used sparingly.

14. Priority photos: **night mosque**, **morning mosque** (home hero),
    **beach mosque**, **night main mosque** (used in the contact band).

---

## Working style

15. **Verify on the live site.** The owner finds bugs by using the deployed page.
    Test the real URL after deploying, not just the local code.

16. **The cache trap.** The owner repeatedly saw "nothing changed" because of
    caching. Always run `./bump-version.sh` before committing. When testing,
    add a throwaway query string (`?t=123`) to bypass the CDN.

17. **Be honest about limitations.** The owner responds well to a plain
    explanation of what is not possible and why, plus the nearest workable
    alternative. Do not over-promise.

18. Requests arrive by voice as long paragraphs containing several separate asks.
    Split them into a task list and complete all of them, then report what was
    done and what was not.

19. The owner asks for things to be **"extremely detailed"** and "as much as
    possible" — err on the side of more content, provided accuracy holds.
</content>


---

## Learned 1–3 August 2026 — read these before starting

20. **Deploy. Do not park finished work.** He judges everything by opening the
    live site. Three rounds of changes were completed locally and never pushed,
    each ending with "not pushed yet, say the word" — he kept refreshing, saw
    nothing, and reasonably concluded nothing had been done. Push as part of
    finishing, then poll until GitHub Pages actually serves it and verify on
    the real URL.

21. **Say how strong every source is — every time.** This is his highest
    priority after accuracy itself. Bukhari/Muslim with a number; anything from
    at-Tirmidhi, an-Nasa'i, Abu Dawud or Ahmad labelled as outside the two
    Sahihs; anything from Ibn Ishaq, Ibn Sa'd or the histories labelled
    **historical sira, not hadith**. And when something famous is NOT
    authentic, say so on the entry. He asked for "the strongest reference you
    can get and say which reference did you get their story from" — that
    includes telling him when a well-known detail is not in the two Sahihs.

22. **Do not do a small batch and ask permission to continue.** When he says
    "as much as you can", queueing a task and reporting back reads as stalling
    and wastes his usage. Do the work. If the honest limit is quality per
    entry, say that in one line and keep going in the same turn.

23. **Verify, do not guess, when he reports a bug.** He is usually right and
    the cause is usually not what it looks like. His video "not publishing"
    was three successful commits that saved an empty list. The surah detector
    being "absolutely wrong" was substring matching. Look at the evidence —
    git history, the actual API response, the real config — before theorising.

24. **He works by voice** and sends several asks in one long message, often
    mid-turn. Split them into a list and do all of them; he will notice
    precisely which one you skipped.

25. **Never overwrite `data/site-config.json`.** It holds the recitations he
    published. Always `git checkout origin/main -- data/site-config.json`
    before committing unless you are deliberately changing it.


---

## Learned 3–4 August 2026

26. **Omar and Osman are spelled with an O.** Not Umar, not Uthman. The internal
    ids stay `umar`/`uthman` so search still finds them.

27. **When the record is short, say so — do not pad it.** For Idris, Dhul-Kifl,
    Al-Yasa, Shith, Yusha, Shamwil and Danyal the entry states plainly what is
    NOT established instead of filling the space with Israiliyyat. He asked for
    a decision to be made rather than another question, and this was it.

28. **Guidance must EXPLAIN, not just quote.** Searching for the hijab returned
    the hadith of the curse, and that was wrong — he wanted the conditions:
    covers everything, not an adornment in itself, thick, loose, not perfumed,
    no imitation of men, not a garment of fame. Texts answer "is it commanded";
    only the scholars answer "what counts".

29. **Where scholars differ, say who said what AND which way the weight leaned.**
    His words: "say that this person said this, but the other said the opposite,
    and most of the scholars said the first was right."

30. **He notices numbers.** Counts on the home page must be corrected in English
    AND Arabic together whenever content is added.

31. **He asks for one thing at a time when it matters.** "I only want you to
    concentrate on one thing" — when he says that, do not spread effort.


---


<!-- ============================================================ -->
# PART 5 - from `04-known-issues.md`
<!-- ============================================================ -->

# Open work, and honest limitations

## Verified working (tested live at the end of the last session)

1. **Staff dashboard tabs** — 7 tabs, each showing only its own panels.
   Meetings shows both "Start a Meeting Right Now" and "Live Meetings & Class
   Recording". Analytics tab appears only for `Islam.younis.2026`. No console
   errors. Selected tab is remembered in `localStorage` (`iitw-staff-tab`).

2. **"Start Meeting Now"** — verified: generates a valid code
   (`IITW-XXXXXX`), adds it to the config, shows the code panel, and opens
   `meeting.html?code=…&host=1`. Without a token it correctly warns that the code
   still needs publishing before students can join.
   *Not yet tested with a real token* — i.e. the auto-publish path
   (`publishChanges(true)`) has not been exercised end-to-end. Worth confirming
   once with a real `ghp_` token.

## Needs a device with an Arabic voice to judge

3. **Arabic voice quality** — now prefers Google/network voices, rate 0.7, and
   **keeps the tashkeel** (removing it was the original mistake). Cannot be
   judged on a machine with no Arabic voice installed.

## Requested but not built

4. **Save the reader's place in the Quran.** The owner wants to return to exactly
   where they stopped reading.
   *Recommended approach:* store `{surah, ayah}` in `localStorage` when a surah
   modal is scrolled/closed, and show a "Continue reading" card at the top of
   `quran.html`. This works with no login and no server — build this first.

5. **Google / Gmail sign-in.** The owner wants users to log in with Gmail so
   their place is saved, and wants 2–3 more staff Gmail addresses allowed.
   *Honest blocker:* Google Sign-In needs an **OAuth Client ID** created in the
   owner's own Google Cloud Console — it cannot be created for them. Ask the
   owner to produce one (Google Cloud Console → APIs & Services → Credentials →
   OAuth client ID → Web application → authorised origin
   `https://islamistheway.github.io`), then wire up Google Identity Services and
   keep a staff email allowlist. Until then, the localStorage version above
   delivers most of the value.

6. **Courses page sectioning.** The owner asked for the "course part" to be
   divided into sections. This was interpreted as the **staff dashboard** (done).
   Confirm whether they also want the public `courses.html` reorganised.

## Honest limitations — explain rather than attempt

7. **Browser speech cannot recite Arabic properly.** It is a reading voice, not
   a reciter, and quality depends entirely on voices installed on the device.
   Do not promise Quranic-quality Arabic speech. The Quran page uses real
   reciters for this reason.

8. **Staff login is not secure.** Credentials live in the page source. It keeps
   casual visitors out; it is not real protection. Same for video access codes
   and meeting codes. Real security requires a backend — the owner has been told.

9. **Video uploads are capped at ~45 MB** (GitHub API limit for direct file
   writes). Larger videos must go to YouTube as unlisted.

10. **Source photos are 1008–1600px.** On a 4K monitor the largest backgrounds
    are slightly soft. Only higher-resolution originals would fix this.

11. **Jitsi is a free public service.** Occasional quirks are expected; hosting
    first (via Start & Host) avoids most of them.

12. **Analytics depends on a free counter service** (abacus.jasoncameron.dev).
    If it goes down, the numbers pause — the site is unaffected.

13. **Al-Luhaidan** is not available on the free per-ayah recitation archive.
    16 reciters are, including Yasser Al-Dossary. Verified by request.

## Bugs already fixed — do not reintroduce

- Speaker buttons broken by embedding text in `onclick` (quotes ended the
  attribute). Use the delegated `.speak-btn` + `data-lang` pattern.
- `loadCollection` wiping search results on the hadith page. Data loading and
  rendering are now separate (`ensureCollection` vs `loadCollection`).
- Scroll-reveal hiding text permanently when JS failed. Content is visible by
  default; only hidden once `html.js-reveal` is added.
- Missing commas between objects in `data.js` — silently broke every page.
  Check with:
  `awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js`
- `bump-version.sh` regex `[a-z]+` skipped `i18n.js` (digits in the name).
  It is now `[a-z0-9]+`.
- Nav insertion via sed also matching footer `<li>` items and breaking markup.
  Always check `<li>`/`<ul>` balance after bulk edits.
</content>


---

## Open work as of 3 August 2026

1. **Companion full lives — 12 of 66.** Written: Abu Bakr, Umar, Ali,
   Khadijah, Aishah, Bilal, Hamza, Khalid, Abu Hurairah, Salman, Mus'ab,
   Sa'd ibn Mu'adh. The other 54 still have only a summary. Structure is in
   `js/lives.js`; the page renders any id that exists there.
2. **Prophet full lives — 4 of 29.** Written: Nuh, Ibrahim, Musa, Isa.
3. **Arabic pausal (waqf) rules for speech** — final short vowels should drop
   at a stop, ta marbuta become ha. Designed, not built.
4. **Show which Arabic voice is in use** — the owner has never confirmed what
   his machine has, which is why the voice complaint is still unresolved. If
   his dropdown says "Egyptian dialect", that is the whole cause and no code
   fixes it.
5. Quran "save my place"; Gmail sign-in (needs his own OAuth Client ID).

## Traps found the hard way — do not reintroduce

- **Muslim's numbering in the jsdelivr hadith API is sequential (1–7563) and
  does NOT match the standard numbering.** API #2194 is a funeral hadith, not
  the ruqyah. Bukhari's numbering in that API **does** match. Cite Muslim by
  book name unless the number is verified.
- **`sessionStorage` for the staff login** dies with the tab. It is
  localStorage now, with a 12-hour expiry.
- **Add and Publish were two steps** and the add could fail in a small grey
  line — so Publish then saved an empty list and reported success. One button
  does both now, and publishing is blocked while a video sits unadded.
- **Surah detection by substring** matched "Sad recitation" to Surah Sad.
  Whole words only; short and personal names require the word "Surah" first.
- **Query expansion creating matches** — "money" expanded to "job" and hit the
  cheating-at-work hadith. Expansion may only refine an existing match.
- **Regex look-behind** breaks older Safari at parse time and would kill the
  whole file. Avoided in guidance.html and stories.html.
- **A stale local `data/site-config.json`** will delete the owner's published
  recitations on commit.


---

## Open work as of 4 August 2026

**Done since the last handoff** — full lives (all 94), the angels, the Great
Intercession, the adhkar, the scholars' rulings and books, reader sign-in with
save-your-place, feedback on every page, the mic toggle, the courses rework.

**Still open**
1. **Hadith page in Arabic** — the 43 curated hadith have English `title` and
   `topic` with no Arabic twin, so ~100 English strings remain in Arabic mode.
2. **Courses page in Arabic** — ~108 UI strings with no `AR` entries.
3. **Companion `refs` lines** — ~27 English descriptions.
4. **Gmail sign-in** — still blocked on an OAuth Client ID from his own Google
   Cloud Console.
5. **Cross-device saved place** — needs a real backend.
6. **Arabic speech quality** — device-dependent, not fixable in code.
7. **Google Search Console** — still not set up.

## Traps added in these sessions — do not reintroduce

- **Never run generated code through Python's `unicode_escape`.** It reads UTF-8
  as Latin-1 and destroys Arabic (`الدورات` → `Ø§ÙØ¯ÙØ±Ø§Øª`), and it turns
  `\n` inside JS string literals into REAL newlines, which split the literals
  and broke the entire staff dashboard. Both of these actually happened and both
  reached or nearly reached the live site.
- **After a bulk edit, grep every HTML/JS/CSS file for mojibake** (`Ø` `Ù` `â€`).
  Element counts and console checks pass while the Arabic is ruined.
- **Duplicate keys in the `AR` dictionary silently overwrite.** Adding `"Quran"`
  as a grading overwrote the navigation label.
- **`.en-only` / `.ar-only` need `!important`** or layout rules out-specify them.
- **Re-measure the nav breakpoint on every link change.** Wrong three times.
- **In RTL, `element.right > clientWidth` is NOT an overflow test** — the
  scrollbar moves left and shifts the origin. Use
  `documentElement.scrollWidth > clientWidth`.
- **One wrong hadith number was found and fixed**: entering the mosque cited
  al-Bukhari 1163, which is the two rak'ahs of Fajr; it is **1167**. All 78
  Bukhari-numbered citations were then checked mechanically against the source
  text — the rest were correct.


---


<!-- ============================================================ -->
# PART 6 - from `05-credentials.md`
<!-- ============================================================ -->

# Access, publishing and credentials

## Staff logins (in `login.html`, `STAFF_ACCOUNTS`)

| Username | Password | Notes |
|---|---|---|
| `Islam.younis.2026` | `NoorAmmarTamimA'sem` | **Main admin.** Only this account sees Analytics. |
| `Teacher.IITW.2026` | `Bayan#Huda_2026!Teach` | Teacher account, no analytics. |

The owner wants the first account kept as the main one. More accounts can be
added to the same array.

**Security note:** this is a front-end check. The passwords are readable in the
page source by anyone who opens developer tools. This is disclosed on the login
page. It keeps casual visitors out but is not real protection.

## GitHub

- Organisation: **IslamIsTheWay**
- Repo: **IslamIsTheWay/IslamIsTheWay.github.io**
- Owner's personal account: **Ammar-052** (admin of the org)
- Publishing = `git push origin main`. GitHub Pages serves `main` directly.

### Tokens — important

The staff dashboard's "Publish Changes" needs a GitHub token pasted into the bar
at the bottom each time. It is never stored.

**Only classic tokens work.** Fine-grained tokens (`github_pat_…`) were tried
twice and both were rejected with 403 for the organisation repo. Use:

- github.com/settings/tokens/new → **Tokens (classic)** → scope **`repo`**
- The token starts with **`ghp_`**

Several tokens were pasted into the chat during development and **should all be
revoked**. The owner should generate a fresh classic token and keep it private.

## SEO / indexing

- **Bing** — verified and indexed. `BingSiteAuth.xml` must stay at the site root.
  Verification code: `A0F73C20D285C96BE80BF6533C2B936C`.
- **Google Search Console** — **not set up yet.** To do it: add the property
  `https://islamistheway.github.io/`, choose the HTML-tag method, and add the
  `google-site-verification` meta tag to `index.html`.
- `sitemap.xml` — add every new page here.

## Contact

- Site email shown publicly: `contact@islamistheway.com`
- Owner's real email (receives feedback form + trial requests):
  `ammarwalidyounis@gmail.com`

## Third-party accounts

None required. Every external service in use is free and unauthenticated
(Quran API, everyayah audio, hadith API, Jitsi, MyMemory, abacus counters).

The only thing needing the owner's credentials is **Google Sign-In**, which
requires an OAuth Client ID from their own Google Cloud Console — see
`04-known-issues.md`.
</content>


---


<!-- ============================================================ -->
# PART 7 - from `06-content-guide.md`
<!-- ============================================================ -->

# How to add content correctly

Always add the Arabic. Always add the reference. Then run the checks at the
bottom of this file.

---

## Add a Sunnah practice (`js/sunnah.js`)

Append inside the `SUNNAH` array:

```js
{
  cat: "sleep",                                  // must be an existing SUNNAH_CATEGORIES id
  title: "English title",
  titleAr: "العنوان بالعربية",
  detail: "English explanation, 1–3 sentences.",
  detailAr: "الشرح بالعربية، جملة إلى ثلاث.",
  arabic: "نص الحديث بالتشكيل",                   // optional, keep the harakat
  ref: "Sahih al-Bukhari, Book of Wudu, Hadith 247",
  strength: "Sahih — Narrated by al-Bukhari",
  keys: ["sleep","bed","before sleep","نوم","فراش","قبل النوم"]
}
```

Existing category ids: `prayer purity sleep food mosque dhikr manners dress home
travel fasting friday quran health hardship character animals death`

To add a new category, add it to `SUNNAH_CATEGORIES` with `{ id, en, ar }`.

**Keys matter.** They are how a natural question finds the entry. Include the
everyday words a person would actually type, in both languages.

---

## Add a hadith (`js/data.js` → `HADITHS`)

```js
{
  arabic: "نص الحديث بالتشكيل",
  text: "English translation",
  narrator: "Abu Hurairah",
  ref: "Sahih Muslim, Book of Faith, Hadith 102",
  topic: "Honesty in Trade",
  title: "Short descriptive title of the situation",
  strength: "Sahih — Narrated by Muslim",
  keys: ["cheat","business","غش","تجارة"]
}
```

The `title` is what makes situational search work — describe the *situation*, not
just the theme.

---

## Add a prophet or companion (`js/data.js`)

```js
{
  id: "kebab-case-id",
  name: "English name",
  arabic: "الاسم بالعربية",
  title: "Short epithet",
  category: "companion",              // or "prophet"
  summary: "English summary.",
  summaryAr: "الملخص بالعربية.",
  refs: ["Sahih al-Bukhari — …", "Sira accounts of …"]
}
```

Counts to keep accurate: **29 prophets**, **65 companions** (all 11 Mothers of
the Believers included).

---

## Add a Quran guidance theme (`js/data.js`)

Into `PARADISE_THEMES` (good paths) or `WARNING_THEMES` (things warned against):

```js
{
  title: "English theme",
  titleAr: "المعنى بالعربية",
  description: "English description.",
  descriptionAr: "الوصف بالعربية.",
  keys: ["keyword","كلمة"],
  refs: ["Surah An-Nur (24:30-31)"]
}
```

---

## Add a new page

1. Copy an existing page (e.g. `sunnah.html`) for the header/footer structure
2. Add the nav link to **all** pages, and the footer Explore list
3. Add it to `sitemap.xml`
4. Add a `.page-hero.ph-<name>` rule in `css/style.css` with a **large** photo
5. Add UI strings to the `AR` dictionary in `js/i18n.js`
6. Load scripts in the right order, `i18n.js` last

---

## Checks to run before every commit

```bash
# 1. missing commas between objects (silently breaks the whole page)
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js

# 2. brackets balanced
grep -c '{' js/data.js; grep -c '}' js/data.js
grep -c '\[' js/data.js; grep -c '\]' js/data.js

# 3. every Sunnah entry complete
grep -c '^    cat: "' js/sunnah.js      # should equal each of the next four
grep -c 'titleAr:' js/sunnah.js
grep -c 'detailAr:' js/sunnah.js
grep -c '^    ref:' js/sunnah.js
grep -c '^    keys:' js/sunnah.js

# 4. images valid
./check-images.sh

# 5. list markup balance after any bulk sed edit
for f in *.html; do
  o=$(grep -o '<li>' "$f" | wc -l); c=$(grep -o '</li>' "$f" | wc -l)
  [ "$o" = "$c" ] || echo "MISMATCH $f"
done

# 6. THEN, always:
./bump-version.sh
git add -A && git commit -m "..." && git push origin main
```

## Verifying live

GitHub Pages takes 1–2 minutes. Wait for the change to actually appear:

```bash
until curl -s "https://islamistheway.github.io/js/sunnah.js" | grep -q "your new text"; do sleep 5; done; echo live
```

When testing in a browser, append a throwaway query string (`?t=123`) to bypass
the CDN cache — otherwise you will be looking at the old page and think the
change failed.
</content>


---

## Adding a story, a life, a worship step or a Judgement stage

The working method that produced all of this — use it, do not write from
memory:

```bash
# 1. Get the sources once (they are multi-MB)
for e in ara-bukhari ara-muslim eng-bukhari eng-muslim; do
  curl -s -o "$e.json"     "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/$e.json"
done

# 2. Search the ENGLISH for the story, then copy the ARABIC from the same
#    record. Never type the Arabic from memory.

# 3. For Quranic material, fetch the whole Quran once and search it:
curl -s -o quran-uthmani.json "https://api.alquran.cloud/v1/quran/quran-uthmani"
```

**Story** (`PROPHET_STORIES` in data.js) — `id, title, titleAr, theme, themeAr,
story, storyAr, arabic?, lesson, lessonAr, ref, strength, keys`.
Add `group`, `groupTitle`, `groupTitleAr` to link it into a series.
Blank lines in `story`/`storyAr` become real paragraphs.

**Full life** (`FULL_LIVES` in lives.js) — key must match the `id` in
COMPANIONS or PROPHETS. Fields: `before, islam, change, greatest, death` each
with an `Ar` twin, plus `sources: []`. Prophets also take `message`/`messageAr`.
**Every entry in `sources` must say its rank** — "Sahih al-Bukhari … — Sahih",
or "Ibn Sa'd, Tabaqat — historical sira, not hadith".

**Worship step** (`WORSHIP_STEPS` in data.js) — `stage` must be one of
`before | in | after | daily | mercy`.

**Judgement stage** (`JUDGEMENT_STAGES` in judgement.js) — `order` must be
sequential; renumber the whole array if you insert one. `note`/`noteAr` is
where you say what is not in the two Sahihs.

**Glossary word** (`AR_GLOSSARY` in data.js) — key written WITHOUT harakat.
Do not add words under 3 letters.

## Checks for the new files

```bash
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA "l}' js/sunnah.js

# every FULL_LIVES key must exist as a person, or the story is unreachable
# (check in the browser console on companions.html / prophets.html):
#   Object.keys(FULL_LIVES).filter(k => !COMPANIONS.some(c => c.id === k))

# judgement stage order must be 1..n with no gaps
grep -o 'order: [0-9]*' js/judgement.js
```


---

## Adding a full life, an angel, a dhikr or a ruling

**Full life** (`js/lives.js`) — key must equal the person's `id` in
COMPANIONS/PROPHETS. `before, islam, change, greatest, death` each with an `Ar`
twin, plus `sources: []`. Prophets also take `message`/`messageAr`. For a
companion, `greatest` should be **the one situation they are most known for** —
that is what the owner asked for. Every source must state its rank.

**Angel** (`js/angels.js`) — `id, group, order, name, nameAr, role, roleAr,
detail, detailAr, arabic, points: [{en, ar, ref}], ref, strength, keys`.
Each point carries its OWN reference, because a single angel's entry mixes
Quran, the two Sahihs and unestablished material.

**Dhikr** (`js/adhkar.js`) — `id, cat, title, titleAr, arabic, en, count,
countEn, countAr, virtue, virtueAr, ref, strength, keys`. `count` drives the tap
counter.

**Ruling** (`js/scholars.js`) — attribute BY NAME, state the disagreement and
which way the weight leaned, and cite fatwas by WORK (Majmu' Fatawa Ibn Baz,
Ash-Sharh al-Mumti', Fatawa Nur 'ala ad-Darb) — never an invented volume/page.
Every entry ends with `verify` pointing at binbaz.org.sa / binothaimeen.net.

### The working method for sourcing — use it, do not write from memory
```bash
for e in ara-bukhari ara-muslim eng-bukhari eng-muslim; do
  curl -s -o "$e.json" "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/$e.json"
done
# search the ENGLISH for the story, then copy the ARABIC from the same record
```

### Extra checks now worth running
```bash
# mojibake anywhere (Arabic destroyed by a bad encode/decode)
grep -l 'Ø§\|ÙÙ\|â€' *.html js/*.js css/*.css

# duplicate keys in the AR dictionary
grep -oE '^  "([^"]+)":' js/i18n.js | sort | uniq -d

# every FULL_LIVES key must be a real person
#   Object.keys(FULL_LIVES).filter(k => ![...COMPANIONS,...PROPHETS].some(p=>p.id===k))
```


---

<!-- ============================================================ -->
# PART 8 — the 5–6 August 2026 sessions
<!-- ============================================================ -->

## What was built

### The Golden Age of Islam — a new page

`golden.html`, `js/golden.js`, `js/golden-closing.js`. The largest addition
the site has had. Four movements, in this order on purpose:

1. **The summary** (`GOLDEN_OVERVIEW`) — what the period was in plain words,
   exactly WHEN, where, a 16-line list of what came out of it, and a 22-entry
   dated timeline in six eras. This comes FIRST because most people who open
   the page have never been told the period existed, and the names mean
   nothing until that is fixed.
2. **41 figures** (`GOLDEN_FIGURES`) — each with the **Latinised name Europe
   used**, because a student can study optics under "Alhazen" for years and
   never learn the man was a Muslim.
3. **What was taken** (`GOLDEN_TAKEN`) — 7 documented cases.
4. **The closing discussion** (`GOLDEN_CLOSING`) — 12 sections on why we fell
   and how a person comes back.

### The Judgement Day closing — `js/judgement-closing.js`

6 sections on standing alone: three follow you to the grave and two come back,
you arrive as you were created, what you will actually be asked, what to do if
you know you are on the wrong path, what to do if you are on the right one and
afraid of slipping, and what to do tonight.

### Guidance — three new files

- `js/revival.js` → `guidance.html#revival` — why the ummah fell and the way
  back, in 10 steps.
- `js/terms.js` — **48 technical terms** explained in plain English and Arabic
  (awrah, mahram, khimar, 'inah, waswas, khuff, hudud, ijma'…). Rendered as a
  "Words explained" box under every ruling, listing only the words that
  actually appear in that card.
- `js/figures.js` — 4 labelled figures as **HTML tables and comparison lists**,
  not drawings. See the trap about SVG below.

### Counts as of 6 August 2026

| Content | Count |
|---|---|
| Golden Age figures | **41** |
| Golden Age closing sections | **12** |
| Judgement Day closing sections | **6** |
| Stories of the Prophet ﷺ | **45**, in **10 sections** by what the story teaches |
| Scholars' rulings | **15** |
| Scholars with their books | **19** (the four imams, al-Bukhari, Muslim, at-Tabari, Ibn Abd al-Barr, ash-Shatibi, Ibn Rajab added) |
| Worship steps | **24** |
| Terms explained | **48** |
| Ruling figures | **4** |
| Nav links | **13** — the bar needs 1474px, hamburger below 1480px |

---

## Bugs found that were ALREADY LIVE

These had all reached the public site. They are listed because each one is a
class of mistake, not a one-off.

### 1. The nav ran off the screen between 1200px and ~1467px
The hamburger breakpoint was 1200px while twelve links plus the language button
already needed 1467px, so **Login sat off the right edge on a 1366px laptop and
could not be reached**. Re-measured properly (the old figure had forgotten the
language button that `i18n.js` injects): 13 links need **1474px**, breakpoint is
now **1480px**, `.nav-wrap` max-width raised to 1560px. Verified clean at 390 /
768 / 1024 / 1280 / 1366 / 1440 / 1500 / 1600 / 1920.

### 2. `bump-version.sh` never stamped hyphenated filenames
The regex was `js/[a-z0-9]+\.js`, so `js/scholars-books.js` had been serving a
cached copy since the day it was added. Now `[a-z0-9-]+`.

### 3. The person search was unusable
`search.html` matched with a bare `includes()` on every field:
- **"Ali" returned 17 people**, because a-l-i sits inside S**ali**h, Kh**ali**d,
  M**ali**k, S**ali**m and Ja'far ibn Abi T**ali**b.
- **"Yusuf" put Yaqub level with Yusuf**, because Yusuf is named in his father's
  summary, with nothing saying so.

Now: Latin on word boundaries, Arabic word-by-word after stripping harakat,
every hit scored with a reason, and a cross-reference card says *"Not a name
match — this appears in this person's story"*. Ali → 3, Khalid → 1.

`search.html` also never loaded `lives.js`, so a result showed three lines about
a person the site has a full biography for. All 94 full lives are now reachable
from the search page.

### 4. The hadith search could not handle the Arabic definite article
**"النية" returned nothing while "intention" found the hadith.** Two causes at
once: the wording carries harakat (بِالنِّيَّاتِ) so a substring test never
matched, and the query carried "ال" while the keyword is "نية" without it.
Arabic is now normalised on both sides and retried with prefixes peeled off.

### 5. Analytics silently ignored four pages
`js/main.js` had been counting golden, judgement, stories and sunnah all along —
it derives the counter key from the filename. They were simply absent from the
hand-written `TRACKED_PAGES` list in `staff.html`, so the panel never read them
back and they showed nothing.

**The list is no longer hand-written.** It is derived from the page's own nav,
so adding a nav link is now enough to get a page into analytics. Labels come
from the link text, which gives "Judgement Day" and "Golden Age" rather than
"Judgement"/"Golden".

### 6. Guidance led with an irrelevant ruling
Rulings render first by design — correctly, because "what counts as hijab" must
be answered by the scholars' conditions, not a hadith of warning. But "first"
was unconditional, so **"I lose my temper" was answered with the ruling on
backbiting**. Two guards now: a hadith that beats the best ruling by 35% takes
the lead, and a ruling set whose top two scores are within 20% of each other is
treated as a filler-word match and dropped.

### 7. Half-translated references on every page that cites a verse
Surah names rendered as **"سورة Aal-Imran"** — 83 such lines on companions.html
alone. `i18n.js` now builds surah translations from `SURAHS` in `data.js`, keyed
on a **normalised** name so the three spellings that drift from the data
("Aal-Imran", "Ash-Shura", "An-Nazi'at") all resolve. 39 more book titles added.
`golden.html` and `sunnah.html` now load `data.js`, which they needed for this.

Verified: **zero half-translated references across all 12 pages in both
languages.**

---

## New traps — do not reintroduce

- **Never put label text inside an SVG.** Text in an SVG is not a node
  `i18n.js` can walk, so it NEVER translates; and a horizontal scroll wrapper
  clips it in RTL, where scrolling starts from the right — "Hair, neck and ears"
  rendered as "irs / tly" on the live site. All figures are now HTML.
- **A drawing that has to be decoded teaches nothing.** The first hijab figure
  was an outline of a garment that read as a winter hat. A bad diagram is worse
  than no diagram. Prefer a labelled comparison in words.
- **Arabic substring matching is never safe.** ولي (wali) sits inside وليس,
  وهن (wahn) inside وهنّ, and عينة ('inah) matched بعينه. Match Arabic WORD BY
  WORD after stripping harakat and peeling the attached prefixes, and anchor a
  term to its definite form (الوهن، الجمع) when the bare form is a common word.
  Same trap the Stories glossary hit with كلّ / الكَلّ.
- **An SVG with a `min-width` widens its card instead of scrolling** — a grid
  item defaults to `min-width: auto`, so it grows to fit and pushes the page
  sideways on a phone. The scroll wrapper needs `min-width: 0`.
- **A guarded render fails INVISIBLY.** `renderScholars()` begins
  `if (typeof SCHOLARS === "undefined") return;`, so a syntax error in
  `scholars-books.js` produced an empty section and nothing in the console.
  After editing a data file, check the array actually loaded (`typeof SCHOLARS`,
  `FIQH_RULINGS.length`) — a balanced-brace count does not prove it parses.
- **`innerText` returns the text of `display:none` elements**, and a CSS
  transition does not advance while the browser pane is not compositing. Both
  produced false bug reports in these sessions. Use
  `getComputedStyle(el).display` or `el.getClientRects().length`, and read
  resting values with transitions disabled.
- **`getComputedStyle` on a CHILD of a `display:none` parent still reports the
  child's own display.** Checking a leaf node is not enough — use
  `getClientRects().length > 0` to know whether something is really rendered.

---

## Editorial decisions worth keeping

- **The "99% / 1%" framing was built as documented receipts, not a percentage.**
  A number nobody can source is the one thing an opponent can knock down, and if
  it falls the true claims beside it fall with it. Instead: Ibn ash-Shatir's
  model against Copernicus's printed diagram, Ibn an-Nafis three centuries
  before Servetus, the 87 works out of Toledo, the Latinised names, and the
  Arabic still inside "algebra" and 200 star names.
- **One card states plainly what is NOT true** — Ibn Firnas's flight is a
  17th-century report, ar-Razi's hanging meat is from his biographers, the Latin
  "Geber" works are forgeries, the Cordoba library figure varies. This is the
  site's hadith-grading rule applied to history, and it makes the rest
  unanswerable.
- **Thabit ibn Qurra is included WITH the note that he was a Sabian, not a
  Muslim.** He is there as evidence of what the civilisation was like to work
  in, not counted among Muslim scientists.
- **The closing discussions are compassionate on purpose.** Whoever reads them
  is far more likely to be a young Muslim who already feels behind than someone
  who needs telling off. Shame closes people; it does not reform them. Where the
  Golden Age closing is sharp, it is sharp with our own texts (al-Bukhari 7320,
  Quran 2:170, 7:179) and the criticism lands on **our** choices, never on other
  peoples as peoples.
- **Modesty is presented in the order it was revealed** — An-Nur 24:30 is to the
  MEN, before 24:31 to the women.
- **The mushaf text is never altered to make a point land.** Ya-Sin 30 is
  printed once, exactly. The reciter's repetition of the opening is shown in a
  separate, labelled block.
- **Diagrams and audio are never the ruling.** Audio is only ever a human
  reciter from everyayah — never speech synthesis, and never re-hosted from
  YouTube.

---

## Open work as of 6 August 2026

1. **Hijab illustration** — the owner asked for a photograph showing incorrect
   hijab. A pasted chat image cannot be written to the repo. If he drops a file
   into `img/`, wire it into the `fq-hijab-conditions` figure. **Do not
   reference a filename before the file exists** — `check-images.sh` fails the
   build on any missing image reference.
2. **Courses page in Arabic** — ~108 UI strings with no `AR` entries.
3. **Hadith page Arabic titles** — the 43 curated hadith still have English
   `title` and `topic` with no Arabic twin.
4. **Gmail sign-in** — still blocked on an OAuth Client ID from the owner's own
   Google Cloud Console.
5. **Cross-device saved place** — needs a real backend.
6. **Arabic speech quality** — device-dependent, not fixable in code.
7. **Google Search Console** — still not set up (Bing is verified).
8. **320px viewport** — `theme-card` on guidance still overflows very slightly
   at 320px. Pre-existing, cosmetic, and not introduced by these sessions.


---

<!-- ============================================================ -->
# PART 9 — the 6–11 August 2026 sessions
<!-- ============================================================ -->

## What was built

### Tadabbur — `js/tadabbur.js`, `js/concepts.js` → the Quran page

A **🧠 Tadabbur button beside Stop** in the surah reader. It opens, per verse:
why the verse sits where it does, why THIS word and not its near-synonym,
where else the Quran uses it, and the verse in another surah that finishes
the thought this one leaves open.

- **`SURAH_CONCEPTS` (62 surahs)** — the ONE thing each surah is driving at,
  why it is that, and the verse where the surah says it most plainly. Shown
  at the TOP of the panel, and on surahs with no verse detail as well, so the
  button always answers with something real.
- **49 verses across 14 surahs** — Al-Fatihah complete (7/7), Al-Baqarah
  1–5 + 31, 186, 216, 255, 286, plus Al-Asr, Al-Fil, Quraysh, Al-Ma'un,
  Al-Kawthar and Al-Ikhlas complete, and single verses at 9:5, 13:11, 17:32,
  30:9, 51:56, 70:19.
- **7 "What people get wrong here" boxes** — the correction box, styled
  louder than the rest because it is the reason the section exists.
- **10 "In plain words" boxes** — ordinary language, both languages.

**Sourced from Ar-Raghib al-Isfahani's Al-Mufradat**, pulled off Shamela and
read: hamd (p.238), rabb (p.318), sirat (p.465), samad (p.474), qawm (p.672),
rayb (p.350), waqa (p.863), ghayb (p.598), falah. Every citation carries its
page.

**A finding that constrains the project:** Ar-Raghib's *tafsir* survives only
for **surahs 1–5** (the manuscript ends at Al-Ma'idah). For 6–10 there is no
Raghib tafsir at all — only Al-Mufradat, which is a root dictionary covering
the whole Quran. The owner chose Mufradat as the throughline for all ten.

### The signs of the Hour — `js/signs.js` → Judgement Day and Guidance

The Judgement page began at "when you die" and had nothing on how the world
itself ends. Now, rendered ABOVE the fifteen stages because that is the order
it happens in:

- **"Nobody knows when" first**, before any sign — 7:187 and 31:34.
- **The ten major signs** — the Prophet's ﷺ own list from Hudhayfah ibn Usayd
  in Sahih Muslim. Nothing added to it.
- **`THE_END`, 6 stages** — the blast, the mountains and seas and sky, the
  earth left flat with "to whom belongs the sovereignty this Day", the forty
  and the coccyx, the raising, and the handover to the fifteen stages.
- **`JUDGEMENT_DETAIL`, 10 sections** — how long the Day is, what you are
  asked FIRST (two different firsts), the sun and the sweat, the Bridge and
  what reaches up from it, the speeds, who crosses first, coming back out by
  the mark of sujud, the last man into Paradise, the first meal, which sign
  is first.
- **`MEETING_ALLAH`** on Guidance — the seeing, the veil, "send me back".
- **12 "In plain words" boxes.**

### Golden Age — `js/golden-lives.js`, `js/golden-mirror.js`

- **`GOLDEN_LIVES` (7)** — full lives in the same shape as the prophets':
  al-Khwarizmi, Ibn al-Haytham, al-Zahrawi, Ibn al-Nafis, al-Biruni, Fatima
  al-Fihri, Ibn Khaldun. Born, died, the life lived, what he found, what
  happened to the work.
- **`GOLDEN_WOMEN`** — comparison by legal instrument and date on BOTH sides:
  her property stayed hers against English coverture (Blackstone 1765,
  remedied only by the Married Women's Property Acts 1870/1882, and in the US
  from Mississippi 1839); fixed inheritance shares; Khansa bint Khidham's
  marriage annulled on her objection (al-Bukhari 5138); women in the chains
  of transmission; the vote (UK 1928, US 1920).
- **`GOLDEN_MIRROR` (15 sections in 6 named parts)** — what they say about
  us, what is actually happening there, why we still copy them, the honest
  answer about who is ahead, ourselves, and what to do.

### Course enrolment — `js/enrol.js` → the Courses page

Account with name, email and a **self-created password** (SHA-256 + random
salt, device-local), plus a request per course. The account is convenience;
the REQUEST is what reaches the staff, by opening the student's own mail app
or WhatsApp with the course, name, email, times and note already written in.

---

## Bugs found that were ALREADY LIVE

### 1. The GitHub Pages DEPLOY step was failing — nothing was reaching the site
The Jekyll **build succeeded every time**; the separate **"Deploy to GitHub
Pages" step failed**, so two commits of finished work never reached the live
site while the repo looked perfectly healthy. Diagnosed through the Actions
API — `runs/<id>/jobs` shows `build: success` and `deploy: failure`.

**If work is pushed and the site does not change, check the DEPLOY step, not
the content.** An empty commit re-queues it.

### 2. "Start a Meeting Right Now" never opened the room
`window.open(roomUrl)` sat at the END of `startInstantMeeting()`, after
`await publishChanges(true)`. A popup is only allowed while the browser still
considers the click in progress; the await ends that window and the popup is
**blocked**. It also explains why it passed testing: the no-token path has no
await and worked, and the token path — the only real one — was the one that
broke.

### 3. Every nav click by an Arabic-mode reader was silently discarded
The analytics key was built from the link TEXT with `/[^a-z]/g` stripped.
`i18n.js` translates the nav, so in Arabic the key came out as an empty
string and `if (label)` was false. **Proven in the browser: 13 of 13 nav
links produced an EMPTY key in Arabic mode.** Now keyed on the href, which
does not change with language, with the old text-derived keys preserved as
aliases so existing counts are not orphaned. `staff.html` derived them the
same wrong way and was fixed with it.

### 4. English was leaking into Arabic mode across every new section
Three separate causes stacked on one card:
- `.tad-verse-en` / `.tad-link-en` hold the ENGLISH translation and never
  carried `.en-only`, so the CSS that hides English never applied.
- **`i18n.js` only translates a reference when its parent matches a
  hand-written selector** — `.refs, .hadith-meta, .ayah-ref, .sunnah-card
  .refs`. Every newer section uses `.tad-ref`, which was never added, so 16
  references on the Judgement page alone stayed in English. It is now the
  named constant `IITW_REF_SELECTOR` with a comment.
- English PARAGRAPHS inside `ref` fields. A citation is not a paragraph, and
  prose in a citation is untranslatable by design. ~45 reference lines cut
  back to actual citations.

### 5. "Enroll Now" on the Courses page pointed at the STAFF login
A student pressing it landed on `login.html`, the staff password page.

### 6. The Ya-Sin 30 recitation was a murattal clip looped by the player
The section is about reciters *returning* to a phrase, but it carried an
11-second murattal reading with `repeatTimes: 2`. A player looping a file is
not a reciter returning to a phrase. Now Abdul Basit's mujawwad reading
(29.5s), which carries the returning inside the recitation.

### 7. `CLAUDE.md` still carried two rules that were already known-wrong
The nav breakpoint figure that had put Login off the right edge of a 1366px
laptop, and `js/figures.js` described as inline SVG after it had been
rewritten as HTML.

---

## New traps — do not reintroduce

- **A `\n` written into a JS string by a generator script becomes a REAL
  newline and splits the literal.** This happened TWICE this session and both
  times the file failed to parse and the section rendered as *nothing* with
  the page otherwise fine. Write generator scripts with **raw strings**
  (a Python raw string), and check `typeof MY_CONST` in the console rather than
  trusting that the page looks right. This is the same class as the
  documented `unicode_escape` disaster.
- **Order matters in `AR_PARTS`, and getting it wrong is silent.** The short
  patterns are substrings of the long ones: putting `al-Bukhari` before
  `Sahih al-Bukhari` makes the latter render as "Sahih البخاري". Bare
  collection names and narrator short forms belong at the END; the full name
  must always precede the short one (`Anas ibn Malik` before `Anas`).
- **Never put explanatory prose inside a `ref` / `source` field.** It cannot
  be translated, so it sits in English on an Arabic page. Put it in the body
  or in a code comment.
- **A transliteration is for a reader who cannot read the Arabic word**, so
  `.tad-translit` is `.en-only`. In Arabic the word itself is beside it.
- **Any new section that prints a source line must add its class to
  `IITW_REF_SELECTOR`** in `i18n.js`, or its references silently stay
  English.
- **`git checkout origin/main -- data/site-config.json` uses whatever
  `origin/main` you last fetched.** Fetch FIRST. A stale restore staged a
  revert of the owner's staff-dashboard publish, caught only because the push
  was rejected as non-fast-forward.

---

## Editorial decisions worth keeping

- **Ar-Raghib's `sirat` entry was misattributed and the page now says so.**
  It says only "the straight road" and cites 6:153; the wider "broad made
  road" description is from other lexicons. Correcting it in public is part
  of the method.
- **Contested artefacts were refused.** The owner asked for ancient
  batteries, a carving read as a lamp, and "engineers cannot explain the
  pyramids" as evidence for 30:9. They were left out, and the entry says why:
  hanging a verse on a contested object puts it at the mercy of the next
  archaeology paper. The verse states outright that earlier peoples surpassed
  the ones addressed and were destroyed anyway — that cannot be taken away.
- **The Council of Mâcon 585 claim is FALSE and is refuted on the page**
  rather than repeated. Gregory of Tours, who was present, records a question
  about whether the Latin *homo* applied to women — a question about a word —
  answered from Scripture and accepted. Same discipline as Ibn Firnas's
  flight and pseudo-Geber.
- **"We are ahead in output" was refused as false.** The research, patents
  and laboratories are overwhelmingly not ours today. The honest and stronger
  answer is that the gap is in CONDITIONS not capacity — Zewail, Sancar and
  Yaghi are the clean experiment: same minds, same early schooling, different
  institutions, different result. It cuts both ways, which is why it holds.
- **9:5 is corrected in BOTH directions** — hostile critics and extremists
  quote the identical fragment identically. Verse 6 settles it.
- **The mirror section criticises us at the same volume as it criticises
  them**, and is styled in the warning box to make that unmissable. A section
  that only cut outward would be the blind following it warns against.

---

## Open work as of 11 August 2026

1. **The ten surahs, verse by verse** — the owner chose full depth across
   surahs 1–10 with Al-Mufradat throughout, delivered over time. 49 verses
   done; Al-Baqarah alone is 286.
2. **More `SURAH_CONCEPTS`** — 62 of 114.
3. **More Golden Age lives** — 7 done; Ibn Sina, ar-Razi, Ibn Battuta, Ibn
   Rushd, al-Idrisi and Jabir ibn Hayyan are the obvious next.
4. **A "how we treated each other" section** — bimaristans, awqaf, ahl
   adh-dhimmah — was offered and not yet built.
5. `.modal-overlay { position: fixed; inset: 0 }` spans the scrollbar, giving
   an 11px horizontal overflow at 375px. **Pre-existing**, cosmetic.
6. Everything still open from Part 8: the hijab photo, the hadith page
   Arabic, the courses page Arabic, Gmail sign-in, cross-device saved place,
   Google Search Console.

---

<!-- ============================================================ -->
# PART 10 — the 12–13 August 2026 sessions
<!-- ============================================================ -->

## What was built

### The Golden Age mirror — three sections on the moral collapse

`GOLDEN_MIRROR` went from 15 sections to 18. The owner asked for the drop in
what a society permits itself to say, using films as his example.

His memory was right, and the honest version turned out stronger than a
number would have been — because the threshold he remembered is not a memory
at all, it is the rating board's own published rule.

- **`gm-language`** — the MPA/CARA written guideline that **one** use of that
  word pushes a film to PG-13 and a second requires an R; Thompson & Yokota at
  Harvard finding profanity rising *inside a fixed rating label* across 1,906
  films 1992–2003, which is where "ratings creep" got its name; Bushman et al.
  in *Pediatrics* finding gun violence in PG-13 tripled since 1985 and passing
  R; and Guinness logging 506 uses in one 2013 film — nominated for Best
  Picture, which is the part that matters.
  **It says out loud that no year-by-year average exists rather than inventing
  one.** Same discipline as the 99%/1% decision: a number nobody can source is
  the one an opponent knocks down, and the true claims beside it fall with it.
- **`gm-grownup`** — the belief that swearing makes a boy a man. Answered with
  al-Bukhari 6031 (he was never foul, and he was stoned at Ta'if and buried
  six children), 5973 on where the insult actually travels, 48 (it is *fusuq*,
  not banter), 6478, 6474 putting the tongue and the private parts together,
  at-Tirmidhi 1977 labelled outside the two Sahihs, and 49:11, 50:18, 17:23-24.
  Turns the knife on ourselves at the end, per this file's governing rule.
- **`gm-ledger`** — they lead on laboratories, we lead on manners, and the
  young man copies only what is free to copy.

### Tadabbur — from 14 surahs to all 114

`TADABBUR` went from **49 verses across 14 surahs** to **167 across all 114**.
Every surah now has at least one explained verse. `SURAH_CONCEPTS` went from
62 to **114 of 114**, so the 🧠 button always answers.

Verses were chosen for being the one people argue about or quote wrongly:
3:7, 4:34, 5:32, 8:60, 24:30, 28:77, 37:96, 42:11, 48:29, 56:79, 60:8, 94:5,
109:6, 111:1 among them.

**And the actual answer to "how did you not explain Ayat al-Kursi":** 2:255
*had* a full entry all along — the hadith of Ubayy ibn Ka'b and al-Qayyum from
Al-Mufradat. But it sat 255 verses into a surah of 286 and the coverage line
only *named* the covered verses as plain text, so the only way to reach it was
to scroll past everything. Concluding it did not exist was the correct
conclusion from what the page showed. **The numbers are now buttons** that
open the tadabbur blocks and jump to the verse.

### The Day of Judgement — the ten signs, and the order

- `SIGNS_INTRO.hadith` carried an *abbreviation* with the rest paraphrased in
  English only. It now carries the real wording from Sahih Muslim, including
  **وَآخِرُ ذَلِكَ نَارٌ** — the only ordering statement in the whole hadith.
- **`theTen`** — counted out as ten, because the hadith names six things, then
  **three** landslides, then the fire. A reader counting clauses gets eight.
- **`orderDetail`** — 7 blocks on which comes first and last, each graded
  separately: what a text nails down, what a chain inside one narration
  establishes, and what is a scholar's reconciliation.
- **`MINOR_SIGNS`** — 7 entries, each with a status badge (already happened /
  not yet / partly / scholars differ) and a dated `when` box.

### Will we rise again — `js/rise.js`, on BOTH long pages

The owner asked whether the hadith about the ummah coming back is real, and
about rising then falling again before the end. It is real. The arc is built
deliberately on what is **agreed upon** wherever such a text exists, because
nothing attracts fabrication like prophecy about the ummah's future:

1. Thawban — many, but froth; *wahn* defined by him ﷺ as love of this world
   and hatred of death. Abu Dawud 4297, outside the two Sahihs.
2. **al-Bukhari 3116 + Muslim, agreed upon** — this ummah stays prevailing
   until Allah's command comes *and they are still prevailing*.
3. **Sahih Muslim, Jabir** — a group holds until the Day of Resurrection; and
   when Isa descends the Muslims' leader asks him to lead the prayer and he
   **refuses**, "some of you are commanders over others" — **تَكْرِمَةَ اللَّهِ
   هَذِهِ الْأُمَّةَ**, an honouring by Allah of this ummah.
4. **al-Bukhari 3606, agreed upon** — good, then evil, then good *with smoke
   in it*, then callers at the gates of Hell "from our own skin".
5. The same hadith, same breath — what to DO: stick to the jama'ah; and if
   there is none, hold on alone, even biting the root of a tree.
6. Musnad Ahmad, the five phases. **Flagged hardest of all** — see the trap
   below. The section states plainly that the hope does not rest on it.
7. The peak under Isa, then the Hour only upon the worst of people.

Plus a **words-explained box**: ghutha', wahn, dakhan, ta'ifah, mulkan 'addan,
mulkan jabriyyah, and **a'war — blind in ONE eye**, which is why the Dajjal's
defect is itself the argument against him.

### Plain-words boxes and page navigation

- Judgement page: **12 → 56** plain boxes. `stageHtml`, `renderAlone` and
  `renderAngels` had no plain-box support at all and were wired first.
- `.page-toc` — a sticky bilingual jump bar on `judgement.html` (6 sections)
  and `golden.html` (10). Four Golden Age sections had no `id` and now do.

---

## Bugs found that were ALREADY LIVE

### 1. `**bold**` was never converted — Arabic readers saw raw asterisks
Only `golden.html` converted. Measured in Arabic mode: **judgement.html was
showing 128 literal markers**, `quran.html` was showing them from the 486
markers in `js/tadabbur.js`, and `guidance.html` from `MEETING_ALLAH`.

English was never affected because the English text uses CAPITALS for
emphasis — which is exactly why it survived so long unnoticed. Fixed in all
four remaining helpers. **Two heading fields also carried markers**, and
headings are inserted raw, so those can never convert — see the trap.

### 2. The home page said 28 Golden Age figures; there are 41
Fixed in `index.html` **and** in the `AR` dictionary — both the English key
and the Arabic value, because the dictionary is keyed on the exact English
string and changing one alone makes that card render in English on an Arabic
page.

### 3. The ordering presentation was misleading — caught by the owner
He objected that repentance is still accepted when Isa descends, so Isa cannot
come after the sun rises from the west. **He was right.** The doctrine on the
page was not wrong — Ibn Hajar's reconciliation already put the Dajjal, Isa
and Gog and Magog earlier — but the block headed "THE FIRST is named too"
stated the sun and Beast are first and the qualification only arrived two
blocks later. A reader who stopped there would reach exactly his conclusion.

Fixed by rewording the heading, refusing the wrong reading on the spot, and
adding a block that makes his argument as a **proof**: once the sun rises from
the west faith is no longer accepted (Sahih Muslim), but when Isa descends
people *do* believe (An-Nisa 4:159; al-Bukhari 2222). Two established texts
that only fit one way round — stronger than a harmonisation because it does
not depend on anyone's opinion.

### 4. Smaller ones
- `iitwTadabburFor` returned verse numbers in array order, so appending to a
  surah printed them out of sequence. Now sorted.
- 13 new tadabbur entries quoted part of a long verse without `arNote`.
- A comment in `judgement.html` claimed the signs section sits *above* the
  fifteen stages. It does not and never did.

---

## Traps added in these sessions — do not reintroduce

- **Every paragraph helper must convert `**bold**`, and heading fields must
  never contain markers**, because headings are inserted raw and can never
  convert. Found live twice. See the SKILL.md entry for the grep.
- **Musnad Ahmad is NOT in the jsdelivr hadith API.** It carries only
  abudawud, bukhari, ibnmajah, malik, muslim, nasai, tirmidhi, nawawi, qudsi,
  dehlawi. `ara-ahmad.json` returns an 84-byte error that looks like a file.
  Anything from Ahmad must be cited by collection and grader, never by a
  number, with the entry saying the wording was not machine-verified.
- **Normalise Arabic to NFC before comparing.** The JSON editions and the repo
  files use different normalisation forms; without this a verification pass
  "fails" 14 of 18 correct quotations.
- **Python printing Arabic to the Windows console crashes on cp1252 — and if
  the crash lands between a replace and the write, the file is silently left
  unmodified.** This actually produced a half-applied edit across
  `index.html` and `js/i18n.js`. Write first, print nothing but ASCII.
- **`grep -o '<li[ >]'` misses `<li${...}` in template literals** and reports a
  false imbalance. Check list balance in the parsed DOM.

---

## Verified working at the end of these sessions

- All 13 pages return 200, every referenced script resolves, no mojibake,
  section tags balanced.
- **Search**: "Ali" returns **3** (not 17), "Khalid" 1, Arabic عمر finds Omar,
  cross-references labelled, empty query handled.
- **Guidance**: returns results in English and Arabic with the not-a-fatwa
  notice present.
- **Citation audit of the Judgement page's four data files**: all 17
  al-Bukhari numbers exist *and match the claim made on them*; every Quran
  reference in range. The 30 apparent name mismatches were transliteration
  variants (Qaf/Qaaf, Ya-Sin/Yaseen), not errors.
- Zero literal `**` markers in Arabic mode on judgement, quran, golden and
  guidance; 120 / 305 / — / — proper `<strong>` tags respectively.

## Open work as of 13 August 2026

1. **THE HOME PAGE DOES NOT MENTION TADABBUR AT ALL** — 167 explained verses
   across all 114 surahs, the site's biggest feature, and `index.html` never
   names it. Largest known gap; raised with the owner rather than fixed.
2. **"Improve the interface"** — an open request, deliberately not guessed at
   beyond the `.page-toc` bars. He was asked to say what feels wrong.
3. **The citation audit covered the Judgement page's files only.** The other
   pages have not had that sweep.
4. **Tadabbur depth, not coverage.** Coverage is finished. Al-Baqarah is 286
   verses and has 14. The standing instruction is "more and more and more".
5. Everything still open from Part 8: the hijab photo, the hadith page Arabic,
   the courses page Arabic, Gmail sign-in, cross-device saved place, Google
   Search Console.

---

<!-- ============================================================ -->
# PART 11 — the 13 August 2026 session
<!-- ============================================================ -->

The ask arrived in his usual form: find mistakes anywhere, add content, more
explanation in the Quran section, improve the home page, make sure the search
works, and "enhance the user interface by any kind of way".

## What was built

### Tadabbur finally appears on the home page
Open work item 1 of Part 10 — "THE HOME PAGE DOES NOT MENTION TADABBUR AT ALL"
— is closed. `index.html` now carries a `.tadabbur-feature` section with a
**worked example rather than a description of one**: Al-Fatihah 1:5, why
*iyyaka* is placed before the verb, and what fronting a word does to the
meaning in Arabic. The Quran quick-access card names the feature too.

### The numbers are counted now, not typed
A `.stats-strip` under the hero renders six figures **computed from data.js at
load**. It exists because hand-typed counts on that page have gone stale three
times, and he reads the numbers. Found stale this session and fixed in English
AND in the `AR` dictionary together:

- "**Sixteen** steps of worship" — there are **24** (`WORSHIP_STEPS`)
- "**52** passages of the Quran", on two separate cards — there are **54**
  distinct (55 points carry one; 54 are unique)

Four figures cannot be counted on the home page, because their data files are
too heavy to load there. **`./check-counts.sh`** is the guard for those four:
it counts the real thing in `js/tadabbur.js`, `js/lives.js`, `js/sunnah.js`
and `js/golden.js` and fails if `index.html` disagrees. It is keyed on the
LABEL, never on the digits — keying it on the number would make it stop
finding the line at exactly the moment the number went wrong. It is in the
pre-commit list in `CLAUDE.md`, and its negative test was run.

### Search now tolerates the spelling the reader actually types
**Fifteen of fifty-one** spellings a reader is likely to type returned nothing:
Aishah, Ayesha, Hamzah, Othman, Talhah, Muaz, Zubair, AbuBakr, Yousef,
Ibraheem, Dawood, Ismael, Zachariah — and **both `Sulayman` and `Suleiman`**,
because the data spells him `Sulaiman`, which left that prophet reachable only
by typing `Solomon`.

`iitwTranslitWords()` in `main.js` reduces query and name to one skeleton:
`th to s`, `dh to z`, `ch to k`, `ay/ey/ei to ai`, `oo/ou to u`, `ee to i`,
doubled letters collapsed, a trailing `h` dropped. `kh` is deliberately left
alone — folding it into `k` would start merging names that genuinely differ.
A short alias map covers what the rules cannot reach (`yousef`, `mohammed`,
`enoch`, `jethro`).

All 51 now resolve, **all 94 people find themselves**, and the counts the
previous session recorded as correct still hold: Ali 3, Khalid 1, junk 0,
empty 0. The only query returning more than 8 is "Abu" at 19, which is
correct — 19 people share it. The same skeleton is applied to the surah
search, so `Yaseen`, `Noor` and `Ikhlaas` now find 36, 24 and 112.

### 7 more Al-Baqarah verses
14 to **21** (site total 167 to **174**): 2:30 (the angels' objection, and
what *khalifah* does and does not mean), 2:62 (the condition in the middle
that both misreadings drop), 2:115, 2:143 (*wasat* is `'adl`, not "moderate"
in the modern sense), 2:153, 2:156, 2:190 (the limit sits in the same sentence
as the command). Where a hadith number could not be verified against the
source text it is cited by collection and book instead — the Umm Salamah
hadith on 2:156 is given as "Sahih Muslim, Book of Funerals" for exactly the
reason Part 9 documents about Muslim's numbering.

### Reading aids on the long pages
`iitwInjectReadingAids()` in `main.js` — a progress bar and a back-to-top
button, injected on any page taller than 2.5 viewports, one copy for all
thirteen pages. RTL-safe: the bar fills from the right in Arabic via
`transform-origin`, and the button is placed with `inset-inline-end`.

## Bugs found that were ALREADY LIVE

### 1. Arabic readers were seeing English citations across three sections
`IITW_REF_SELECTOR` had gone stale a **second** time, and wider than the
first. `.life-sources`, `.rv-ev-ref` and `.gold-ref` were all missing from it.
Measured in Arabic mode: **190 of 240** source lines on the companions page
were still English.

The fix is not simply "add the class". The full lives' sources read
`"<what it supports>: <citation>"`, and handing a line containing English
prose to AR_PARTS mangles the prose — "his trade **and** lineage" came out as
"his trade **و** lineage". So `prophets.html` and `companions.html` now split
each line and wrap **only the citation half** in `.tad-ref`, and
`.life-sources` is deliberately NOT in the selector.

The grading vocabulary itself was also missing, which is the worst part of it,
because how strong a source is is what this site promises to state every time:
**Sahih x116, agreed upon x41, historical accounts x36, Quran x10**. Citation
English on that page went from ~370 runs to **53**, and all 53 are prose
sitting inside a `ref` field — which this handoff already says not to do.

### 2. Three more AR_PARTS ordering bugs, silent as always
`Book of Food`, `Book of Remembrance` and `Book of Dress` each sat **above**
their own longer forms, so the prefix matched first and left the tail in
English: "كتاب الأطعمة و Drink", "كتاب الذكر والدعاء Supplication",
"كتاب اللباس (Al-Libas)".

### 3. Sixteen narrator names never matched, because of rule 26
The data spells them **Omar** and **Osman** by his own instruction, while
AR_PARTS was keyed on `Umar` and `Uthman`. So the hadith page rendered
"رواه Omar ibn al-Khattab" in Arabic mode. English in that page's citations
went from 24 runs to **2**.

### 4. "Get Started" sent people to the wrong page
Under "Community Reflections", which invites the reader to share stories,
questions and reflections, the button pointed at **`search.html` — the person
search**. It now points at the feedback form `main.js` injects on every page.

## Traps added this session — do not reintroduce

- **A backtick inside an HTML comment that sits inside a template literal ends
  the string.** A comment naming the `.tad-ref` class in backticks, inside the
  `card.innerHTML` template, took `prophets.html` down completely —
  "ref is not defined", 0 of 29 cards rendered. It was caught only by the
  post-change sweep, which is the argument for always doing the sweep.
- **`requestAnimationFrame` never fires while the browser pane is not
  compositing**, so anything rAF-throttled looks dead in testing and is fine
  in a real browser. Same family as the documented CSS-transition trap. Keep
  the update logic in a named function (`iitwUpdateReadingAids`) so it can be
  called directly, rather than contorting the code to be testable.
- **`textContent` includes `display:none` nodes**, so it reports both the
  `.en-only` and the `.ar-only` twin. Use `getComputedStyle(el).display` —
  this produced a false "both numerals are rendering" report on the stats
  strip. Same family as the documented `innerText` trap.
- **The Bash tool is not PowerShell.** `git commit -m @'...'@` put a literal
  `@` in the commit subject. Use a heredoc.

## Verified on the live site at the end of this session

- All 16 pages return 200; no missing script, page or image reference.
- No mojibake, no duplicate `AR` keys, no missing commas, no literal `**`.
- Arabic mode, live: **0** English citations on prophets (148 citations),
  companions (240), golden (9) and guidance (16); 0 mangled labels.
- Search, live: 51/51 spellings resolve, 94/94 people find themselves, Arabic
  queries unaffected, empty and junk queries return nothing.
- Sunnah, hadith, guidance and surah search all still return correctly in
  both languages.
- Home page, live: no horizontal overflow at 375px or 1280px; the stats strip
  falls 6 to 3 to 2 columns; Arabic-Indic numerals in Arabic mode.

## Open work as of 13 August 2026

1. **The 377 English labels on the full-life sources.** The citations are now
   Arabic; the `"<what it supports>:"` half in front of them is still English
   in Arabic mode. 388 source lines, 377 distinct labels — authorable in one
   focused session, and the right fix rather than leaving a half-English line.
2. **~53 prose fragments still sitting inside `ref` fields** on the lives, and
   2 on the hadith page ("also in", "of the"). They cannot be translated where
   they are; they belong in the body.
3. **Tadabbur depth.** Al-Baqarah is 21 of 286. Still "more and more and more".
4. **The citation audit has still only covered the Judgement page's files.**
   The other pages have not had that sweep.
5. Everything still open from Part 8: the hijab photo, the hadith page Arabic
   titles, the courses page Arabic, Gmail sign-in, cross-device saved place,
   Google Search Console.
