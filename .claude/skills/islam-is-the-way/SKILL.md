---
name: islam-is-the-way
description: Build, fix or add content to the Islam Is The Way website (islamistheway.github.io) — a bilingual Arabic/English Islamic education site with Quran, Hadith, Sunnah, Prophets, Companions, courses and live classes. Use whenever working in the islam-is-the-way-site folder, or when the request involves this site's pages, its Arabic/English content, hadith gradings, the staff dashboard, meetings, or deploying it.
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
- **Never attribute a hadith to the Quran**, or vice versa. This mistake was
  made once and had to be corrected.
- **Grading must name the authenticating scholar:**
  `Sahih — Narrated by al-Bukhari` ·
  `Sahih — Agreed upon (al-Bukhari and Muslim)` ·
  `Strong — Narrated by at-Tirmidhi; authenticated by al-Albani`
- **Do not use the bare term "Hasan"** — the owner rejected it. Use
  `Sahih` or `Strong`.
- Guidance features must always show the full reference plus a bilingual notice
  that it is **not a fatwa** and a scholar should be consulted.

### 3. Everything is bilingual
Every prophet, companion, hadith, sunnah entry and guidance theme carries an
Arabic field (`summaryAr`, `titleAr`, `detailAr`, `descriptionAr`). Adding
content without Arabic is incomplete. **Keep the tashkeel** — it is required for
correct pronunciation and for the speech feature.

### 4. Verify on the live site
The owner finds bugs by using the deployed page. After pushing, wait for the
deploy and test the real URL:

```bash
until curl -s "https://islamistheway.github.io/js/sunnah.js" | grep -q "new text"; do sleep 5; done; echo live
```

### 5. Be honest about limits
Browser speech cannot recite Arabic properly. The staff login is a front-end
check, not real security. Say so plainly instead of over-promising — the owner
responds well to a clear explanation plus the nearest workable alternative.

---

## Where things are

```
index quran prophets companions hadith sunnah guidance courses search login staff meeting  (.html)
css/style.css              all styling, one file
js/data.js                 prophets, companions, surahs, hadith, guidance themes, courses
js/sunnah.js               SUNNAH_CATEGORIES + SUNNAH (133 entries)
js/main.js                 nav, scroll reveal, analytics, text-to-speech, person search
js/quran.js                surah grid, 16 reciters, audio, reader modal
js/i18n.js                 Arabic/English switch, RTL, reference translation
data/site-config.json      staff-editable (courses, videos, meetings, payment)
HANDOFF/                   full documentation — see below
```

Script load order matters: `data.js` → page script → `main.js` → **`i18n.js` last**.

---

## Full documentation

For architecture, every feature, data shapes, credentials, open work and content
templates, read:

**`HANDOFF/ISLAM-IS-THE-WAY-HANDOFF.md`** (single file, 7 parts)

Read it before non-trivial work. Part 4 (owner's rules) and Part 5 (open work
and limitations) are the most important.

---

## Adding content

Templates and validation commands are in Part 7 of the handoff. Quick reference:

**Sunnah entry** (`js/sunnah.js`) — needs `cat, title, titleAr, detail,
detailAr, ref, strength, keys` (and optional `arabic` with tashkeel). All 133
entries have every field; keep it that way.

**Hadith** (`js/data.js`) — needs `arabic, text, narrator, ref, topic, title,
strength` (+ optional `keys`). The `title` should describe the *situation*, as
that is what situational search matches.

**Person** (`js/data.js`) — needs `id, name, arabic, title, category, summary,
summaryAr, refs`.

Always validate before committing:

```bash
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js
```

A missing comma between objects silently breaks every page that loads the file.

---

## Keeping this skill current

**This skill does not update itself.** When a work session finishes something
significant, update it deliberately:

1. Update `HANDOFF/ISLAM-IS-THE-WAY-HANDOFF.md` (and the numbered files in
   `HANDOFF/` if the change belongs in one of them).
2. Update the "Current state" numbers below.
3. Update `CLAUDE.md` at the repo root if a critical rule changed.
4. Commit and push — the skill lives in the repo, so it travels with the project.

Ask the owner at the end of a session: *"Shall I update the handoff and skill
with what we changed today?"*

---

## Current state

_Last updated: 31 July 2026_

- 29 prophets · 65 companions (all 11 Mothers of the Believers)
- 43 curated hadith, plus full Sahih al-Bukhari + Muslim (~15,000) via API
- 133 sunnah practices across 18 areas
- 20 Quran guidance themes · 114 surahs · 16 reciters
- Bilingual switch with RTL, situational search, staff dashboard with tabbed
  sections and one-click meeting start, live classes with recording and
  translated captions, admin-only analytics, Bing-indexed

**Open work:** save-your-place in the Quran; Gmail sign-in (blocked — needs an
OAuth Client ID from the owner's own Google Cloud Console); Arabic speech
quality is limited by the voices installed on the reader's device.
