> **⚠ This file is a SPLIT COPY and stops at 4 August 2026.**
> The 5–6 August sessions (the Golden Age page, both closing discussions,
> the terms and figures files, and seven live bugs that were fixed) are in
> **Part 8 of `ISLAM-IS-THE-WAY-HANDOFF.md`** in this folder. Read that file
> for the current state — it is the canonical one, and the one CLAUDE.md
> points at.

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
