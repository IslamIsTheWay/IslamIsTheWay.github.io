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
