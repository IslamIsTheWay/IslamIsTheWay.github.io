# ISLAM IS THE WAY — COMPLETE PROJECT HANDOFF

> **For a new Claude chat / Project.** This single file contains everything
> needed to continue building this website. Read it top to bottom once, then
> use it as a reference.
>
> - **Live site:** https://islamistheway.github.io/
> - **Local folder:** `C:\Users\User\islam-is-the-way-site`
> - **GitHub repo:** `IslamIsTheWay/IslamIsTheWay.github.io`
> - **Deployment:** push to `main` → live in 1–2 minutes (GitHub Pages, no build)

## Contents

1. **Start Here** — overview, the one critical rule, current state
2. **Architecture** — every file, data shapes, external services, CSS conventions
3. **Features** — everything built and how it works
4. **Owner's Rules** — preferences and corrections (**read before changing anything**)
5. **Open Work & Limitations** — unfinished items, honest constraints, fixed bugs
6. **Credentials & Access** — logins, GitHub tokens, SEO
7. **Content Guide** — templates for adding content + validation commands

---
---


<!-- ============================================================ -->
# PART 1 — from `00-START-HERE.md`
<!-- ============================================================ -->

#### Islam Is The Way — Project Handoff

**Read this file first.** It tells a new assistant everything needed to continue
building this website without repeating work or breaking what already exists.

---

#### What this project is

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

#### The single most important rule

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

#### Files in this handoff folder

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

#### Current state (as of this handoff)

**Content**
- 29 Prophets — English + Arabic summaries
- 65 Companions — including all 11 Mothers of the Believers
- 43 curated hadith with grading, plus full Sahih al-Bukhari + Muslim (~15,000) via API
- 133 Sunnah practices across 18 areas of daily life
- 20 Quran guidance themes (Paradise / warnings)
- 114 surahs with 16 reciters

**Pages**: index, quran, prophets, companions, hadith, sunnah, guidance, courses,
search, login, staff, meeting

**Working**: bilingual switch with RTL, situational search, Quran audio, hadith
search, staff dashboard with publishing, live meetings with recording and
translated captions, analytics (admin only), SEO/Bing indexing.

**In progress / not finished** — see `04-known-issues.md`. Briefly:
1. Staff dashboard was just split into tabs — **needs testing**
2. "Start Meeting Now" button just added — **needs testing**
3. Quran "save my place" — **requested, not built**
4. Google/Gmail login — **requested, needs the owner's OAuth Client ID**
5. Arabic text-to-speech quality — **fundamental platform limit, see notes**

---

#### How to work with this owner

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

<!-- ============================================================ -->
# PART 2 — from `01-architecture.md`
<!-- ============================================================ -->

#### Architecture

Plain static site. No framework, no bundler, no server. Every page is a
standalone `.html` file that loads shared CSS and JS.

#### File map

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
├── search.html         Person search (prophets + companions)
├── login.html          Staff login (password) / visitor entry
├── staff.html          Staff dashboard — tabbed sections, publishes to GitHub
├── meeting.html        Live class room (Jitsi) + recording + translated captions
│
├── css/style.css       ALL styling for the whole site (one file, ~2000 lines)
├── js/
│   ├── data.js         Prophets, Companions, Surahs, Hadith, Guidance themes, Courses
│   ├── sunnah.js       SUNNAH_CATEGORIES + SUNNAH (133 entries)
│   ├── main.js         Nav, scroll reveal, analytics, text-to-speech, person search
│   ├── quran.js        Surah grid, reciter list, audio playback, reader modal
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

#### Load order on a page

```html
<script src="js/data.js?v=..."></script>     <!-- data first -->
<script src="js/quran.js?v=..."></script>    <!-- page-specific, if needed -->
<script> ...page logic... </script>
<script src="js/main.js?v=..."></script>     <!-- shared behaviour -->
<script src="js/i18n.js?v=..."></script>     <!-- language switch LAST -->
```

`i18n.js` must load last because it walks the DOM to translate it.

#### Data shapes

#### PROPHETS / COMPANIONS (`js/data.js`)
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

#### HADITHS (`js/data.js`)
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

#### SUNNAH (`js/sunnah.js`)
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

#### PARADISE_THEMES / WARNING_THEMES (`js/data.js`)
```js
{ title, titleAr, description, descriptionAr, keys: [...], refs: [...] }
```

#### site-config.json (staff-editable, published from the dashboard)
```json
{
  "payment":  { "account": "", "instructions": "", "qrUrl": "" },
  "contact":  { "phone": "", "whatsapp": "", "demoUrl": "" },
  "videos":   [ { "title","description","price","url","code" } ],
  "meetings": [ { "title","course","time","code" } ],
  "extraCourses": [ { "id","title","level","price","description","includes":[],"videoUrl" } ]
}
```

#### External services (all free, no keys needed)

| Service | Used for | Notes |
|---|---|---|
| `api.alquran.cloud` | Quran Arabic text + English translation | reliable |
| `everyayah.com` | Per-ayah recitation audio (16 reciters) | URL pattern `data/{reciter}/{surah3}{ayah3}.mp3` |
| `cdn.jsdelivr.net/gh/fawazahmed0/hadith-api` | Full Bukhari + Muslim | multi-MB, lazy-loaded |
| `abacus.jasoncameron.dev` | Anonymous visit counters | analytics panel |
| `api.mymemory.translated.net` | Live caption translation | meeting page |
| `meet.jit.si` | Video meetings | free, no account |
| `api.github.com` | Staff dashboard publishing | needs owner's token |

#### CSS conventions

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

---

<!-- ============================================================ -->
# PART 3 — from `02-features.md`
<!-- ============================================================ -->

#### Features — what exists and how it works

#### Bilingual switch (Arabic / English)

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

#### Quran page

- 114 surahs from `SURAHS` in data.js; search by name, Arabic name, meaning, number
- **16 reciters** (`RECITERS` in `js/quran.js`), stored in `localStorage`
  (`iitw-reciter`). Includes Yasser Al-Dossary, Alafasy, Sudais, Maher Al-Muaiqly,
  Abdul Basit, Al-Husary, Al-Minshawi, Ash-Shuraim, Al-Ghamdi, Al-Hudhaify,
  Al-Juhany, Al-Qatami, Al-Budair, Muhammad Ayyoub, Ali Jaber, Fares Abbad.
  **Al-Luhaidan is not available** on the free per-ayah archive (checked).
- Audio URL is built directly: `everyayah.com/data/{reciter}/{surah3}{ayah3}.mp3`
- Per-verse 🔊 plus "Play Full Surah" (plays sequentially) and Stop

#### Hadith page

- Three tabs: Highlights (43 curated), Sahih al-Bukhari, Sahih Muslim
- Full collections lazy-load from the jsdelivr hadith API (multi-MB)
- **Curated results render instantly**, then full-collection results append —
  important, because waiting for the download made search look broken
- Search works in Arabic and English, uses the `keys` field, stems words, and
  has a synonym map
- Every hadith shows grading with the authenticating scholar named

#### Sunnah page (133 practices)

- Categories as chips (18 areas), quick-example buttons, mic input
- Search understands natural questions: "what did the prophet do before
  sleeping", "I want to pray", "my child", "ماذا أقول عند العطاس"
- Scoring: keyword hits > category-name match > word/stem overlap.
  Filler words inside phrase keywords are ignored, and irregular plurals are
  handled by a `SYN` map (child/children, wife/wives, foot/feet…)

#### Guidance page

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

#### Staff area

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

#### Meetings (`meeting.html`)

- Students enter a code; validated against published meetings
- Host mode via `?code=XXX&host=1` — shows the code, copy button, recorder
- Jitsi room `IslamIsTheWay-<CODE>` with a camera/mic prejoin screen
- **In-browser recording** (screen + mic) that downloads a `.webm` when stopped
- **Live translated captions** — speech recognition + MyMemory translation,
  Arabic/English → English, Arabic, Urdu, Indonesian, Bengali

#### Text-to-speech

`speakText(text, lang)` in `js/main.js`, wired to every `.speak-btn` by a single
delegated listener.

- Strips emoji so the 🔊 icon is never read aloud
- **Keeps the tashkeel** for Arabic — removing it made pronunciation worse
- Prefers Google/network voices (best quality), then male voices
- Arabic rate 0.7 (slow, so heavy letters articulate)
- **Refuses to read Arabic with an English voice** — shows install instructions
  instead of producing gibberish
- Arabic voice picker (`#arVoiceBar`) on hadith, sunnah and guidance pages

#### Other

- **Scroll reveal** photo bands with parallax, fail-safe so text can never be
  invisible if JS fails
- **Mosque gallery** on the home page — 8 photos shown at 278px against a 504px
  source, so they stay sharp
- **SEO** — robots.txt, sitemap.xml, meta/Open Graph, verified in Bing Webmaster
  Tools (BingSiteAuth.xml). Google Search Console **not yet set up**.
</content>

---

<!-- ============================================================ -->
# PART 4 — from `03-owner-preferences.md`
<!-- ============================================================ -->

#### Owner's rules and corrections

These are things the owner has explicitly asked for, or corrected. Following them
avoids repeating mistakes that have already been made once.

---

#### Religious accuracy — highest priority

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

#### Language

5. **Everything must exist in both Arabic and English.** Every prophet,
   companion, hadith, sunnah entry and guidance theme has an Arabic field.
   When adding content, the Arabic is not optional.

6. **Keep the tashkeel (harakat)** in Arabic text. It is needed for correct
   pronunciation and for the speech feature. Removing it was a mistake that was
   corrected.

7. The owner reads Arabic natively and **will notice** machine-translated or
   awkward Arabic. Write it properly.

---

#### Voice / audio

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

#### Design

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

#### Working style

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

<!-- ============================================================ -->
# PART 5 — from `04-known-issues.md`
<!-- ============================================================ -->

#### Open work, and honest limitations

#### Verified working (tested live at the end of the last session)

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

#### Needs a device with an Arabic voice to judge

3. **Arabic voice quality** — now prefers Google/network voices, rate 0.7, and
   **keeps the tashkeel** (removing it was the original mistake). Cannot be
   judged on a machine with no Arabic voice installed.

#### Requested but not built

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

#### Honest limitations — explain rather than attempt

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

#### Bugs already fixed — do not reintroduce

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

<!-- ============================================================ -->
# PART 6 — from `05-credentials.md`
<!-- ============================================================ -->

#### Access, publishing and credentials

#### Staff logins (in `login.html`, `STAFF_ACCOUNTS`)

| Username | Password | Notes |
|---|---|---|
| `Islam.younis.2026` | `NoorAmmarTamimA'sem` | **Main admin.** Only this account sees Analytics. |
| `Teacher.IITW.2026` | `Bayan#Huda_2026!Teach` | Teacher account, no analytics. |

The owner wants the first account kept as the main one. More accounts can be
added to the same array.

**Security note:** this is a front-end check. The passwords are readable in the
page source by anyone who opens developer tools. This is disclosed on the login
page. It keeps casual visitors out but is not real protection.

#### GitHub

- Organisation: **IslamIsTheWay**
- Repo: **IslamIsTheWay/IslamIsTheWay.github.io**
- Owner's personal account: **Ammar-052** (admin of the org)
- Publishing = `git push origin main`. GitHub Pages serves `main` directly.

#### Tokens — important

The staff dashboard's "Publish Changes" needs a GitHub token pasted into the bar
at the bottom each time. It is never stored.

**Only classic tokens work.** Fine-grained tokens (`github_pat_…`) were tried
twice and both were rejected with 403 for the organisation repo. Use:

- github.com/settings/tokens/new → **Tokens (classic)** → scope **`repo`**
- The token starts with **`ghp_`**

Several tokens were pasted into the chat during development and **should all be
revoked**. The owner should generate a fresh classic token and keep it private.

#### SEO / indexing

- **Bing** — verified and indexed. `BingSiteAuth.xml` must stay at the site root.
  Verification code: `A0F73C20D285C96BE80BF6533C2B936C`.
- **Google Search Console** — **not set up yet.** To do it: add the property
  `https://islamistheway.github.io/`, choose the HTML-tag method, and add the
  `google-site-verification` meta tag to `index.html`.
- `sitemap.xml` — add every new page here.

#### Contact

- Site email shown publicly: `contact@islamistheway.com`
- Owner's real email (receives feedback form + trial requests):
  `ammarwalidyounis@gmail.com`

#### Third-party accounts

None required. Every external service in use is free and unauthenticated
(Quran API, everyayah audio, hadith API, Jitsi, MyMemory, abacus counters).

The only thing needing the owner's credentials is **Google Sign-In**, which
requires an OAuth Client ID from their own Google Cloud Console — see
`04-known-issues.md`.
</content>

---

<!-- ============================================================ -->
# PART 7 — from `06-content-guide.md`
<!-- ============================================================ -->

#### How to add content correctly

Always add the Arabic. Always add the reference. Then run the checks at the
bottom of this file.

---

#### Add a Sunnah practice (`js/sunnah.js`)

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

#### Add a hadith (`js/data.js` → `HADITHS`)

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

#### Add a prophet or companion (`js/data.js`)

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

#### Add a Quran guidance theme (`js/data.js`)

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

#### Add a new page

1. Copy an existing page (e.g. `sunnah.html`) for the header/footer structure
2. Add the nav link to **all** pages, and the footer Explore list
3. Add it to `sitemap.xml`
4. Add a `.page-hero.ph-<name>` rule in `css/style.css` with a **large** photo
5. Add UI strings to the `AR` dictionary in `js/i18n.js`
6. Load scripts in the right order, `i18n.js` last

---

#### Checks to run before every commit

```bash
#### 1. missing commas between objects (silently breaks the whole page)
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js

#### 2. brackets balanced
grep -c '{' js/data.js; grep -c '}' js/data.js
grep -c '\[' js/data.js; grep -c '\]' js/data.js

#### 3. every Sunnah entry complete
grep -c '^    cat: "' js/sunnah.js      # should equal each of the next four
grep -c 'titleAr:' js/sunnah.js
grep -c 'detailAr:' js/sunnah.js
grep -c '^    ref:' js/sunnah.js
grep -c '^    keys:' js/sunnah.js

#### 4. images valid
./check-images.sh

#### 5. list markup balance after any bulk sed edit
for f in *.html; do
  o=$(grep -o '<li>' "$f" | wc -l); c=$(grep -o '</li>' "$f" | wc -l)
  [ "$o" = "$c" ] || echo "MISMATCH $f"
done

#### 6. THEN, always:
./bump-version.sh
git add -A && git commit -m "..." && git push origin main
```

#### Verifying live

GitHub Pages takes 1–2 minutes. Wait for the change to actually appear:

```bash
until curl -s "https://islamistheway.github.io/js/sunnah.js" | grep -q "your new text"; do sleep 5; done; echo live
```

When testing in a browser, append a throwaway query string (`?t=123`) to bypass
the CDN cache — otherwise you will be looking at the old page and think the
change failed.
</content>

---
