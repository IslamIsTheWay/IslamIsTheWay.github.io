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

## Current state (as of this handoff)

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
