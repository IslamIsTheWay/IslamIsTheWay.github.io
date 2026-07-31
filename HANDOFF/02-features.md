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
