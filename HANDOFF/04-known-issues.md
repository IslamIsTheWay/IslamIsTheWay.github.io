# Open work, and honest limitations

## Needs testing (changed but not yet verified live)

These were edited at the very end of the last session. **Test them first.**

1. **Staff dashboard tabs** — `staff.html` was split into `.staff-section`
   blocks with a `.staff-tabs` nav. Div balance was checked (47 open / 47 close)
   but the tabs were **never opened in a browser**. Verify:
   - every tab shows its panel and only its panel
   - the Meetings tab contains both "Start a Meeting Right Now" and the older
     "Live Meetings & Class Recording" panel (there are two sections with
     `data-sec="meetings"` — confirm both display)
   - the Analytics tab only appears for `Islam.younis.2026`
     (note: `#tabAnalytics` is hidden by default and must be un-hidden in the
     admin check — **confirm this wiring exists**, it may be missing)

2. **"Start Meeting Now"** — `startInstantMeeting()` in `staff.html`. It creates
   a code, calls `publishChanges(true)`, and opens the host room. Verify the code
   actually reaches `site-config.json` so a student can join.

3. **Arabic voice quality changes** — now prefers Google/network voices, rate
   0.7, keeps tashkeel. Needs a device with an Arabic voice to judge.

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
