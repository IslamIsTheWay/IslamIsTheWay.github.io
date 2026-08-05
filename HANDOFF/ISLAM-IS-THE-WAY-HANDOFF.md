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
> **Last updated: 4 August 2026.**

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

