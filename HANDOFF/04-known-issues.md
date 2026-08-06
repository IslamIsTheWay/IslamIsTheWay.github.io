> **⚠ This file is a SPLIT COPY and stops at 4 August 2026.**
> The 5–6 August sessions (the Golden Age page, both closing discussions,
> the terms and figures files, and seven live bugs that were fixed) are in
> **Part 8 of `ISLAM-IS-THE-WAY-HANDOFF.md`** in this folder. Read that file
> for the current state — it is the canonical one, and the one CLAUDE.md
> points at.

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
