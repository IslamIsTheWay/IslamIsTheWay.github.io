# IslamBasics — read this before making changes

Bilingual (Arabic/English) Islamic education website. Plain static HTML/CSS/JS —
no build step, no framework, no server. Pushing to `main` publishes it.

- **Live:** https://islamistheway.github.io/
- **Repo:** `IslamIsTheWay/IslamIsTheWay.github.io`

## Full documentation

**`HANDOFF/ISLAM-IS-THE-WAY-HANDOFF.md`** contains everything: architecture,
every feature, the owner's rules, open work, credentials, and content templates.
Read it before starting non-trivial work. (The same content is also split into
seven numbered files in `HANDOFF/`.)

## FIX THE CLASS, NOT THE INSTANCE — he asked for this in these words

> "when I mention any problem I am not just asking to fix this one sentence,
> I meant to fix the entire problem from the root to make sure the answers
> come out correct — and that is what you didn't do at all."

He is right, and this is the rule he most wants kept. When he reports one
wrong answer, he is reporting a SAMPLE of a fault, not the fault. Find what
produced it, fix that, then test the whole class with a battery of cases he
did NOT mention. A patch that makes his example pass and leaves the rest
broken wastes his next hour finding the next one.

Three failures from 26 August that all came from ignoring this:

* He reported that the Verify page answered "اطلبوا العلم ولو في الصين" with
  the wrong hadith. I raised a threshold so that one case passed. The real
  cause was two levels down: **one normaliser was doing two incompatible
  jobs.** `vSkel` drops every weak letter, which is REQUIRED for the exact
  matcher because the Uthmani script spells the long a four ways — but the
  same function was feeding the word-level features, where it turned الوطن
  into لطن and الإيمان into لمن. Every rule about word length was measuring
  a crushed word. There are now two normalisers, `vSkel` for matching and
  `vSkelWord` for words, and the file says why in a header comment.

* The related-content search then fired but ranked by how MANY words were
  shared, so الجنة pulled in everything about Paradise. **Rank by rarity,
  and judge rarity RELATIVE TO THE CLAIM** — the Guidance page had already
  learned this exact lesson and written it down, and I did not apply it.

* The Verify hero was jammed against the edge of the screen because I
  invented `.hero-inner` instead of using `.page-hero > .container` like
  every other page. The class did not exist in style.css at all. **Follow
  the existing pattern; check how the site already does a thing before
  inventing a second way.**

And the testing rule that goes with it: **a battery that only checks whether
an answer appeared is not a test.** Check WHAT came back. I reported "Ibn
Majah 226" as a pass without reading hadith 226, which is a different hadith
entirely — he found that, not me.

**Later the same day, the same rule caught a worse one.** The bullet above
says the related search was fixed to rank by rarity relative to the claim,
and PART 18 records "الجنة تحت أقدام الأمهات" as fixed. **It was not.** The bar is
set only by words the corpus actually has — correctly, because absence is
not distinctiveness — and الأمهات occurs in no entry, so the bar fell back
to الجنة and every entry about Paradise cleared it again. Two correct
fixes cancelled each other and the case was never re-run. **Re-run the
original case after the fix, not just the new ones.**

## READ THE WHOLE SENTENCE, NOT THE ONE WORD IN IT THAT IS RARE

His words, 26 August:

> "make sure that when I am searching for something, it doesn't constitute
> only one word and then leave the whole sentence. Because if I say I love
> my mom, if it only concentrates on mom and leaves I love, the meaning can
> come out different or the opposite."

This is a rule about every matcher on the site, and it had been broken on
`verify.html` in four measured ways at once — see PART 19. Before changing
any matching code, know these:

* **A claim word the corpus has never seen must not be silently dropped.**
  It sets no bar, but it still counts toward how much of the sentence a
  match has to account for. Dropping it entirely is what let الجنة answer
  a claim about الأمهات and "love" answer one about "mom".
* **A generic word can never carry a match.** واجب, حرام, مسلم, "best",
  "way", "man" rank or classify a subject; they are never the subject.
  واجب is what answered بر الوالدين with ghusl on a Friday.
* **A single shared word is enough only when it is the claim's strongest AND
  the entry's own title or `keys` say the entry is about it.** Otherwise two
  are needed. Presence in a body is weak evidence — الإيمان sits inside the
  supplication for a new moon.
* **Stopwords, in both scripts, or a function word becomes the subject.**
  "even" answered a claim about seeking knowledge with "do not waste water,
  even in wudu"; ولو did the same in Arabic.
* **Concepts, in both scripts.** الأمهات and أمّك are one subject; so are
  "mom" and "mother". `guidance.html` has had this list for months and
  `verify.js` did not — **compare the two before writing a third.**

## A REFERENCE MUST CARRY THE WORDS PRINTED ABOVE IT

`verify.html` told a reader that "the best of you are those who are best to
their families" is **Sahih al-Bukhari 1129**, graded Sahih. It is not; 1129
is the night prayer. The wording is من خيركم خيركم لأهله — at-Tirmidhi
3895 and Ibn Majah 1977 — **and this site already carried it, cited
correctly.** The English side had matched a Sunnah entry's `detail`, which
is a summary written HERE that may quote a hadith in passing while its `ref`
covers the whole entry.

**So: an entry's own prose is not a source.** Never let a match inside
`detail`, `story`, or any summary this site wrote produce a verdict that
prints a `ref` and a grading. Flag it and say where the words were seen.

## `keys` ARE THE INDEX, AND THEY HAVE THEIR OWN RULES

The content guide says what they are for: *"the everyday words a person would
actually type, in both languages."* Every entry needs them — 28 of the 43
curated hadith had none, and an Arabic reader searching النية got nothing at
all while al-Bukhari 1 sat on the page. Four rules, each paid for:

* **A key must name what the entry is ABOUT, not what its sentence contains.**
  "faith" was keyed onto the hadith on brotherhood and on the neighbour
  because both open *"none of you truly believes until…"* — and every claim
  mentioning faith then reached them.
* **List the inflections; nothing here stems.** A probe of "jealous" missed a
  key of "jealousy", "studying" missed "study", أسكت missed السكوت. And
  غضبي missed الغضب because that is a SUFFIX — the matchers strip prefixes
  only. Include the possessives people write about themselves: لساني، وقتي،
  قلبي، مالي، أصدقائي.
* **Never put a multi-word phrase in a concept group beside its own words**
  ("صلة الرحم" among الرحم), and never mix a specific subject with a broad
  one (صلة الرحم with الأهل). The first collapses two concepts into one and
  disables the two-concept gate; the second lets the common word set the
  count and strips the specific one of its weight.
* **A test that searches an entry by its own keys is not a test.** It proves
  the field is wired and nothing else. Use natural sentences — 56 of them
  found five faults that 56 key-lookups reported as a clean pass.

## VERIFY THE FACT, NOT ONLY THE NUMBER

He asked what the zakat rate and period actually are, and had both wrong —
2% and monthly, where the texts give **2.5% and once a lunar year** (Abu
Dawud 1573: five dirhams out of two hundred, half a dinar out of twenty, and
"وليس في مالٍ زكاةٌ حتى يحول عليه الحول"). When he asks a factual question
about the religion, **go and read the source**; do not answer from memory and
do not repeat his figure back to him.

Searching the collections BY WORDING rather than by number also caught
something memory would have got wrong: the six pillars of faith are usually
cited to the hadith of Jibril, but **al-Bukhari 50's version lists five and
mentions neither the books nor al-qadar**. The six-item wording is Muslim's.

## SAY WHICH PART IS A TEXT AND WHICH IS AN APPLICATION

The morals section (js/morals.js) carries firm positions on how men and women
should speak to each other, and that is exactly where the temptation is worst.
So the card separates them out loud: being alone with a non-mahram is an
EXPLICIT hadith (al-Bukhari 5233); "keep the conversation inside its reason"
is the scholars' APPLICATION of it and of 33:32 — strong, widely held, and
not a verse. **Never let an application wear the clothes of a text.** The
stronger the opinion, the more this matters.

Related, and it governs that whole section: when he asks for something with
force in it, the force belongs in the ARGUMENT, not in contempt for anybody.
The morals section opens with the men because 24:30 does, and it closes by
saying that if it reads as an accusation against someone else it has been
read backwards. He asked for that balance himself — "no side is a hundred
percent right" — and it is what keeps the section persuasive.

## NOBODY TYPES فصحى INTO A SEARCH BOX

His instruction: "from the east to the west … some words are not
understandable in Iraq for Moroccan people, and the opposite's the same."
`IITW_DIALECT` in guidance.html folds dialect onto the standard word before
anything is scored — عراقي شنو شلون شكد · شامي شو بدي قديش · مصري ايه
ازاي عايز · خليجي وش أبغى · مغربي آش كيفاش بغيت شحال · تونسي شنوة قداش.

**Three homographs are deliberately NOT folded and must stay that way:**
مال (Iraqi "of", and the word for money — folding it breaks every zakat
question), حق (Gulf "of", and "right"), ماشي ("not" in Morocco, "walking"
further east). A wrong fold is worse than a missing one.

**And the self-harm branch carries the dialects too.** بدي موت حالي fell
straight through to the ordinary scorer. The word for oneself changes by
region: حالي Levant, راسي Morocco, نفسي and روحي elsewhere. Phrases
only — موت alone must never fire it.

## i18n.js KEYS ON THE EXACT ENGLISH STRING

Change a sentence in a page without changing its key in `js/i18n.js` and the
Arabic silently disappears. That is this site's commonest defect arriving by
a new door, and it makes every copy edit a TWO-FILE edit.

Related, and it cost a diagnostic round: **the language is remembered in
localStorage**, so a page may already be in Arabic when a test opens it, and
clicking the toggle then switches it to ENGLISH. Read
`document.documentElement.className` before sweeping for leaks. I read a
page-wide English fallback as "I have broken i18n.js" when I had simply
toggled Arabic off.

## QUOTE A PAGE HEIGHT WITH ITS VIEWPORT, OR NOT AT ALL

I told him the home page was 42,403px and fifty-three phone screens, and he
chose what to do partly on that number. It was measured at a **zero-width
viewport** and was an artifact. The true figures were 27,235px (34 screens)
at 375x812 and 14,606px (18) at 1280x800 — a factor of two apart, and they
pointed at a different fix. Assert `window.innerWidth` before quoting a
height, and quote phone and desktop both.

## THE PREVIEW PANE DOES NOT SCROLL — scrollY PROVES NOTHING THERE

`guidance.html#pm-qadar` was measured at `scrollY: 0` and reported as a
broken anchor. It was not. `window.scrollTo(0, 5000)` leaves scrollY at 0 in
that pane too, and so does a manual `scrollIntoView()`. **Anything to do with
scrolling, sticky positioning or viewport arithmetic has to be checked on a
real device** — and see [[claims-must-be-verified-on-his-device]]: his
experience beats your testing.

What CAN be measured there is logic: instrument the branch and assert it ran.

## SWEEP YOUR OWN NEW SECTION FOR ARABIC LEAKS

The pillars section shipped its list items as bare English beside an Arabic
span — **36 strings still showing in Arabic mode**, the exact markup pair
this file already documents. Writing the rule down does not exempt the next
thing you write from it. Walk the DOM of anything new before calling it
bilingual.

**And `?v=` does not cache-bust the HTML document.** The stamps cover CSS and
JS, so a new `<script>` tag will not appear locally until the document itself
is reloaded past the cache. Add a throwaway query string when testing.

## A RARE WORD IS NOT AUTOMATICALLY THE SUBJECT

The mirror image of the rule above, and it empties the page instead of
filling it with junk. `حق الجار عليك` returned NOTHING, because **عليك — a
pronoun — sits in two entries and الجار in seven**, so عليك weighed more, set
the bar, and the hadith on the neighbour was refused. Same on "relieves" for
"whoever relieves a believer of a hardship".

**A word that no entry anywhere names in its own title or `keys` is
vocabulary, not subject matter, however rare it is.** Only a concept some
entry DECLARES may set the bar (`vClaimTop`). And keep the function-word
lists complete in both scripts — the attached pronouns عليك، إليك، منك، بك،
عندك were simply missing.

## The rules that matter most

1. **Run `./bump-version.sh` before every commit.** It cache-busts the CSS/JS
   links. Without it the owner reloads and sees no change — this has wasted
   hours before.

2. **Run `./check-images.sh`** — it blocks images under 1000px being used as
   full-width backgrounds.

3. **Religious accuracy over volume.** Never invent a hadith number — cite the
   collection and book if unsure. Never attribute a hadith to the Quran.
   Grading must name the authenticating scholar, e.g.
   `Sahih — Agreed upon (al-Bukhari and Muslim)`. **Do not use the term "Hasan"**
   on its own — the owner asked for `Sahih` / `Strong`.

4. **Everything needs Arabic.** Every prophet, companion, hadith, sunnah entry,
   story, angel, dhikr and ruling has an Arabic field. Keep the tashkeel.
   **If you change an English string that has an `AR` dictionary entry, change
   the Arabic in the same commit** — they match by exact string, so changing one
   silently breaks the other.

5. **Verify on the live site**, not just locally. Wait for the deploy, and use a
   throwaway query string (`?t=123`) to bypass the CDN cache when testing.

6. **Be honest about limits.** Browser speech cannot recite Arabic properly; the
   staff login and the reader sign-in are front-end only; a serverless site
   cannot collect visitors' feedback centrally. Say so plainly.

7. **Say how strong every source is — every time.** Bukhari/Muslim with a
   number. Anything from at-Tirmidhi, an-Nasa'i, Abu Dawud or Ahmad must be
   labelled **outside the two Sahihs**. Anything from Ibn Ishaq, Ibn Sa'd,
   Ibn Kathir or the histories must be labelled **historical sira, not hadith**.
   And when something famous is *not* authentic, say so on the entry — the site
   already does this for the 70,000 angels at Sa'd ibn Mu'adh's funeral, the
   names Azrail and Ridwan, Munkar and Nakir, Ayat al-Kursi after every prayer,
   Israfil's eyes, Mika'il and the rain, and the forty-year gate of Paradise.

8. **Deploy — do not park finished work.** The owner judges by opening the live
   site. Push as part of finishing, poll until GitHub Pages serves it, then
   verify on the real URL.

9. **Never overwrite `data/site-config.json`.** It holds the recitations the
   owner published. Run `git checkout origin/main -- data/site-config.json`
   before committing unless you are deliberately changing it.

10. **Never run generated code or content through Python's `unicode_escape`.**
    It reads UTF-8 as Latin-1 and turns Arabic into mojibake, and turns `\n`
    inside JS string literals into real newlines. It has broken the entire staff
    dashboard once and shipped ruined Arabic to the live site once. Write files
    as plain unicode with `encoding="utf-8"`.

## Before committing

```bash
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/data.js
awk '/^  \}$/{l=NR} /^  \{/{if(NR==l+1) print "MISSING COMMA line "l}' js/sunnah.js
grep -l 'Ø§\|ÙÙ\|â€' *.html js/*.js css/*.css        # mojibake check
grep -oE '^  "([^"]+)":' js/i18n.js | sort | uniq -d   # duplicate AR keys
git fetch -q origin && git checkout origin/main -- data/site-config.json
./check-images.sh
./check-counts.sh       # home page numbers vs the data behind them
./bump-version.sh
git add -A && git commit -m "..." && git push origin main
```

**And once, in the browser, in Arabic mode** — the static greps above cannot
see any of these:

```js
// English left inside a citation. Should be 0 on every content page.
[...document.querySelectorAll('.tad-ref, .refs, .hadith-meta, .gold-ref, .rv-ev-ref')]
  .filter(e => /Sahih al-Bukhari|Sahih Muslim|Book of |— Sahih\b|agreed upon/i.test(e.textContent)).length

(document.body.innerText.match(/\*\*/g) || []).length   // literal bold markers
```

## Two typography rules that are not matters of taste

- **Never apply negative `letter-spacing` to Arabic.** The script joins, and
  tightening the tracking pulls the joins apart. Any rule of that kind must be
  scoped away from `html.lang-ar`, as the heading rules at the bottom of
  `style.css` are.
- **`*single asterisks*` are never converted.** Every paragraph helper here
  converts `**bold**` and nothing else, so `*word*` ships its asterisks to the
  reader. Use a real tag.

## When copying a page's `<head>` to a new page, fix the canonical

`stories.html` carried `sunnah.html`'s canonical URL. A canonical naming a
DIFFERENT page declares this one a duplicate of it, so the Stories page — 49
stories, each located in the two Sahihs before being written — was asking
every search engine to drop it and show the Sunnah page instead.
`./check-counts.sh` now verifies each canonical names its own file.
`angels.html` is exempt; it is a redirect and points at
`judgement.html#angels` deliberately.

## Adding hadith-backed content — the order that works

Load `ara-bukhari.json` and `eng-bukhari.json` from the jsdelivr edition and
**search them first**, then write the entry around a hadith whose text you
have already read at that number. Bukhari's numbering there matches the
standard numbering; **Muslim's is sequential and does not**, so never cite
Muslim by a number taken from it.

- **Check which hadith are already cited, not just how many entries a category
  has.** Doing the second and not the first put five duplicate Sunnah
  practices into the file in one batch, each repeating a hadith the site
  already taught under another title. `./check-counts.sh` now warns on this.
- **When comparing a quoted matn to the source, match from the MIDDLE.**
  Starting at the beginning compares across the salutation, where the entry
  writes ﷺ and the source spells out صلى الله عليه وسلم — that alone reported
  four false mismatches. Strip harakat and normalise to NFC first.

## `gc-whytech` — why the technology sections are on a religion site

Added 23 August 2026, and placed deliberately **before `gc-consumer`** so it
introduces the whole technology run (consumer → data → unity → waiting) rather
than interrupting it. The owner asked for the justification to be stated out
loud, because a reader is entitled to ask why a site about Islam discusses
processors and servers.

Its load-bearing argument is **fard kifayah** — the classical ruling that the
knowledge a community needs (medicine, agriculture, the crafts, calculation) is
a communal obligation, so that **if nobody carries it every capable person in
the ummah is sinning**, not merely falling behind. Al-Ghazali argues it in the
Ihya with medicine as the example. That word had never appeared anywhere on the
site before this section. **Do not water it down to "Islam encourages
knowledge"** — the whole force is that it is a ruling with a consequence.

Supporting it, in order: the religious/worldly split is inherited and not ours
(proved on this same page by Ibn ash-Shatir, muwaqqit of the Umayyad Mosque,
whose lunar model matches Copernicus — the prayer times were the *reason* for
the astronomy); worship itself has always leaned on this (qiblah is spherical
geometry, prayer times are astronomy, and al-Khwarizmi says in his own preface
that he wrote on algebra for inheritance, legacies, partition and trade); and
8:60 with Sahih Muslim 1917, where the Prophet ﷺ recited "prepare whatever you
are able of power" from the minbar and then said three times **"indeed, the
power is shooting"** — naming the decisive capability of that century, not a
permanent list.

**That hadith is the one thing here to handle carefully.** The section states
in its own body that 8:61 commands peace the moment it is offered, that this is
an instruction to a **state** to be capable of protecting its people, and that
it is not a permission for individuals to fight — and it points at the Quran
section and the misunderstood section. Never quote it on this site without that
frame. `js/tadabbur.js` uses 8:60 for a different purpose (answering the
"terrorism verse" claim via تُرهِبُون), and the two do not overlap.

It closes with the balance the section needs: technology is not the point, the
Hereafter is; competence is part of how the trust is carried here. Keep that
paragraph — without it the section reads as worldly-first.

## Two things the owner corrected in `gc-data` and `gc-united`

Both are easy to break on a later pass — the first by softening it, the
second by narrowing it back. Do not.

**`gc-data` is a SOVEREIGNTY argument, not an anti-surveillance argument.**
The owner was explicit: we are **not** against our own state collecting our
information — every state does that and has to. The objection is that the
data sits on **another country's ground**, where our courts do not reach, our
law does not bind the people reading it, and nothing can be audited, deleted
or switched off — so the day their interest and ours part, everything we told
them about ourselves is available to be used against us. **On our land and
under our courts is acceptable and the page says so plainly.** If you ever
find yourself editing this box into a general complaint about being watched,
you have lost the argument he actually wanted made.

**`gc-united` is about the whole ummah, not only the Arabs.** The twenty-two
Arab states stay the headline case — he confirmed that — because they share
the most and manage the least. But roughly **four in five Muslims are not
Arab**, the four largest Muslim populations (Indonesia, Pakistan, India,
Bangladesh) are all non-Arab, and the OIC's **fifty-seven** states across four
continents fail in exactly the same way. That widening makes the argument
**stronger**: if it were only the Arabs you could blame Arab politics, but one
result under fifty-seven governments and dozens of languages is not about
being Arab. The proof is on this very page — al-Bukhari from Bukhara,
al-Khwarizmi from Khwarazm, al-Farabi from Farab, and the foundational book of
Arabic grammar written by Sibawayh, a Persian. **The Golden Age was a Muslim
achievement, not an Arab one.** Never write the section as if Arab and Muslim
were the same word.

## The Mahdi — where each half of it lives, and why

Added 23 August 2026, split across three pages so nothing is stated twice.
If you are adding to any of it, add to the right one:

* **`js/signs.js` → Judgement Day** — the FACTUAL entry. What is in the two
  Sahihs, what is only in Abu Dawud/at-Tirmidhi/Ibn Majah, and where Ibn
  Khaldun disagreed with Ibn Taymiyyah, Ibn Kathir, as-Suyuti and al-Albani.
* **`js/misunderstood.js` → Guidance** — the MINDSET. Why waiting is not in
  any narration, and what it costs.
* **`js/golden-closing.js` → Golden Age** — the CONSEQUENCES: consumers not
  makers, the data-sovereignty decision, and the disunity comparison.
* **`js/golden-closing.js` → `gc-waiting`** — the HISTORY of the waiting,
  added 23 August 2026. Kept apart from the Guidance box on purpose: that one
  argues from the texts, this one argues from the record, and no point appears
  in both. Its four legs are (1) the House of Wisdom generation held the same
  belief — al-Bukhari died 870 and Muslim 875, so the end-times hadith were
  written down in the same century Baghdad was buying Greek manuscripts, which
  means the belief cannot be what caused the paralysis; (2) the real test is
  the length of project you will begin — al-Qarawiyyin 859, the waqf, Ulugh
  Beg's catalogue; (3) the claimants — Fatimid 909, Ibn Tumart c.1121,
  Muhammad Ahmad 1881, the Haram 1979 — stated WITH the honest counterweight
  that al-Azhar is Fatimid and still standing, so the argument is not that they
  built nothing but that **the ordinary work survived and the claim expired in
  every case**; (4) 5:23–26, which is used nowhere else on the site — the
  method is "enter by the gate AND rely on Allah", the refusal is "go, you and
  your Lord, and fight", and the sentence is forty years of wandering, a
  punishment that looks exactly like ordinary life.

  If you extend it, extend THIS box. Do not restate the Guidance six cards
  here, and do not move the grading here — that lives in `js/signs.js`.

**He is deliberately NOT in `MAJOR_SIGNS`.** The ten major signs are the ten
named in ONE hadith in Sahih Muslim, and he is not among them. Putting him in
that list would make the page claim something the text does not. He is a
`MINOR_SIGNS` item with `status: "disputed"`.

**Only ONE piece of it is in the two Sahihs**, and it is the piece people
attach to him without realising it is the only strong part: an army sent
against a man who took refuge at the Kaaba is swallowed at al-Bayda' — Sahih
Muslim, from Umm Salamah and from Hafsah. **That text gives no number, names
no country, and does not name the Mahdi at all.** "Forty thousand", "from
Iran", any date, and any living person are all listed under `notEstablished`.
Do not let any of them creep into the body text.

**The detail worth keeping in every version of this:** the narrations describe
people going to him and pledging to him **while he is unwilling** — so a
community was already standing before he appeared. And in Sahih Muslim, Isa
descends to find the imam of the Muslims **already leading the prayer** and
refuses to take his place. Both say the same thing: a community that is
already working is given someone to lead it. That is the whole argument
against waiting, and it is made from the narrations themselves rather than
against them.

**A `MINOR_SIGNS` item can now carry its own `notEstablished` and `refAr`.**
Both were added for this entry — the per-item not-established list, and the
source line, which `iitwTranslateReference` half-translates because it names
works and a scholar. Same for `closingQuote` on golden.html, which now prefers
`q.refAr` / `q.strengthAr` when the entry supplies them.

## Traps added 21 August 2026 — round two: the Arabic sweep, and the tense

### The Arabic-mode sweep was 94, not 23
The task chip said 23 leaks in the rulings section. Walking **every text node
of the rendered page** in Arabic mode found 94 across guidance.html, and in
places the Arabic was printing **twice** — the AR dictionary translated the
English text node while a hard-coded Arabic span sat beside it.

Two different faults, two different fixes:

* **Markup pairs** — `English <span dir="rtl">Arabic</span>` with no
  `.ar-only`. Split both halves. This is the same shape as the 82 Golden Age
  heading leaks in PART 16 and it is by far the most common bug on this site.
  **`grep -c '<span dir="rtl"' file.html` with no `ar-only` on the line is a
  one-line audit for it, and it should be run on every page.**
* **Source lines and gradings** — `iitwTranslateReference` reaches canonical
  citations only. Anything with a narrator, a named work or grading prose gets
  half-translated into things like `سورة مريم (19:59) — the قرآن` and
  `those who hold it obligatory argue عن this و from 33:59`. Those entries now
  carry their own `refAr` / `strengthAr` / `workAr` in js/scholars.js,
  js/revival.js, js/bidah.js, js/adhkar.js and WORSHIP_STEPS, and the
  renderers prefer them when present. **Do not convert the rest** — canonical
  citations still go through the translator, which handles them and keeps new
  entries working with no extra effort.

**binbaz.org.sa and binothaimeen.net inside Arabic sentences are deliberate.**
A sweep that reports them is wrong, like the Latin names on the Golden Age
cards.

### `${…}` cannot be nested inside `${…}`
A scripted edit produced `${c.ref ? ${c.refAr ? \`…\` : \`…\`} : ""}`, which is
a syntax error and killed the whole bid'ah section. Use
`${!c.ref ? "" : (c.refAr ? \`…\` : \`…\`)}`. Check the browser console after
any scripted change to a template literal — the page renders blank, not broken.

### `js/tadabbur-tense.js` — why it is in this tense
The owner asked for it by name, with his own example: Yusuf sets a **condition**
about the future in 12:60, and the brothers report it to their father as a
**completed past passive** in 12:63. Nothing false is said; the tense does it.

* Keyed `"surah:ayah"` and merged into the tadabbur panel at render time, so a
  verse can carry a verb-form note **without** having a tadabbur block of its
  own — `iitwTadabburAyahHtml` falls through to `iitwTenseOnlyHtml`.
* **`ifOther` is not optional.** "What would change if it said the other" is
  the half he asked for, and it is what turns a grammar label into an insight.
  It has its own box and its own colour.
* **Verify every quotation against `js/quran-text.js`.** The file makes claims
  ABOUT the wording, so an approximate quotation is not a typo, it is a false
  claim. The scratchpad checker walks every `﴿…﴾` and requires it to be a
  substring of the real text. It caught eight wrong small marks.
* **`﴿ ﴾` is the mushaf bracket only.** Unvocalised paraphrases in the
  plain-words boxes use `« »`. A checker that treats every `﴿…﴾` as a
  quotation is right to, which is why the distinction has to be kept.
* **`***` survives an asterisk cleanup.** `(?<!\*)\*(?!\*)` matches none of
  the three, so `**you***` renders as bold plus a literal asterisk.

## Traps added 21 August 2026 — the misunderstood section

`js/misunderstood.js` → `guidance.html#misunderstood`. Six subjects — the
fighting verses, jihad, compulsion, the hijab, women, and the Khawarij — each
with the claim as people say it, the texts with the verse on either side, and
a plain-words box on every card. Every Quranic quotation was copied out of
`js/quran-text.js`; every hadith number was checked against the collection.

- **A section arguing "they cut the sentence" cannot itself print a cut
  sentence.** Seven quotations were shortened for length while writing. Six
  were restored in full; the rest carry a visible `…`. There is a checker for
  this in the scratchpad approach: parse each `context[]` row, read surah:ayah
  off its `ref`, and require the Arabic to be a substring of the real verse.
  Re-run something like it after touching this file.
- **Never key a rewrite on the first literal `"(9:5)"` in the file.** Card
  BODIES mention verse numbers in prose, so a script anchored that way found a
  mention in `ms-next` and rewrote the 22:39 row with 9:5's text. It looked
  completely plausible in the browser. Anchor on `refAr`, which is unique per
  row, and diff the Arabic against `js/quran-text.js` afterwards — that is the
  only reason it was caught.
- **`ref` and `strength` here carry their own `refAr` / `strengthAr`.**
  `iitwTranslateReference` reaches canonical citations only; these lines name
  works, gradings and two French statutes, and 73 of them rendered as English
  on the Arabic page. Both halves are now `.en-only` / `.ar-only`, which is
  also why `.mis-ctx-ref` is NOT in `IITW_REF_SELECTOR` — it does not need to
  be. **The Arabic-mode sweep of this section is now 0.**
- **`misParas` is `bidahParas` plus numbered lists.** The bid'ah helper
  flattens `1. … 2. … 3. …` into one run-on line, and three of these cards are
  built on numbered lists. If you render this data with the bid'ah helper you
  will silently lose the structure.
- **The "greater jihad" narration is labelled WEAK on its own card**, with
  al-Bayhaqi and Ibn Taymiyyah named, and the four authentic hadith that carry
  the same meaning given in its place. It is the most useful sentence in the
  whole subject and the site refuses it. Do not quietly promote it.
- **`.terms-head` leaked on all 8 term boxes** — "💬 Words explained" was bare
  text with only the Arabic in a span, so the English showed in Arabic mode.
  Same shape as the 82 Golden Age heading leaks. Fixed in both `termsBox` and
  `misTermsBox`.
- **`js/golden.js` → `tk-clean`** answers the hygiene claim, and says plainly
  that "Europeans invented perfume to cover the smell" is FALSE — perfume is
  millennia older, medieval European towns had bathhouses, and the decline in
  public bathing is 16th–18th century. Same rule as the Council of Macon in
  `GOLDEN_WOMEN`: attaching a false claim to true ones hands the argument away.

**Known and NOT fixed:** the rulings section still leaks 23 English strings in
Arabic mode — `ruling-sub` headings, `rs-work` book titles, and grading prose
inside `ref`. That is the documented `ref`/`strength` trap, it predates this
round, and it is a separate job.

## Traps added 19-20 August 2026 — the tadabbur and Golden Age rounds

- **A duplicate tadabbur block is invisible in the browser.** The renderer picks
  a verse with `.filter(x => x.n === n)[0]`, so a second block for the same
  verse renders nowhere and looks like work that was done. Three shipped into
  the file this way because `covered=` in the generator was read as a TO-DO list
  when it is a DONE list. `./check-counts.sh` is the only thing that catches
  it — **do not remove that check.**
- **A hamza is two different things to a string comparison.** Standalone `ء`
  is a letter and survives mark-stripping; the hamza on a seat (`أ` = ا +
  U+0654) is a combining mark and does not. So `لَءَايَٰتٍۢ` and `لَـَٔايَٰتٍۢ`
  reduce to different skeletons and never match. The quote healer's LOCATOR
  ignores the hamza; the VERIFIER stays strict. That is safe only because the
  healer substitutes the real text from `js/quran-text.js` and never keeps what
  it matched. **Then carry the dropped hamza back on BOTH edges when
  extracting** — trailing gave `شَىْءٍۢ` → `شَىْ`, leading gave `ءَامَنَّا` →
  `امَنَّا`, and each was a separate fix.
- **`ref` and `strength` are translated by exact-string lookup in `js/i18n.js`.**
  Extra English prose inside them has no Arabic key and leaks onto Arabic pages.
  Grading nuance goes in `detail` / `detailAr`.
- **The Sunnah renderer does not convert `**bold**`.** Tadabbur does. One entry
  shipped with the asterisks visible on the live site.
- **A checker keyed to an exact indent will rot.** The verse-link checker matched
  `ref:` at exactly ten spaces; older links sit at twelve, so it reported 38
  links in a file that had 52 and let a duplicate through. Match ten-**or-more**.
- **A `dir="rtl"` span with no `.ar-only` class means the English beside it is
  never hidden.** `gold-works-head` and `gold-after-head` were built that way and
  printed "🏛️ What she built — ما بَنَت" on every card in Arabic mode: 41 cards
  × 2 headings = 82 leaks. Both halves must carry `.en-only` / `.ar-only`.
  **The 38 the leak sweep still reports on `golden.html` are deliberate** — 20
  Latin names ("Known in Europe as: Algoritmi") and 18 Arabic sentences quoting
  a European word on purpose. Do not "fix" those.
- **`angels.html` has no `?v=` stamps and that is correct.** It is an 18-line
  redirect stub kept so old bookmarks reach `judgement.html#angels`.
- **`grep -r` for the dead `contact@islamistheway.com` still returns 13 hits.**
  Every one is inside `.claude/worktrees/heuristic-wright-a77f44/`, a stale
  detached worktree in `.git/info/exclude` that has never deployed. The live
  pages were cleaned in `f396f26`. Exclude `worktrees` before believing a hit.

## Traps added 13 August 2026 — all three were found live

- **A backtick inside an HTML comment that sits inside a template literal ends
  the string.** A comment reading ``the `.tad-ref` class`` inside the
  `card.innerHTML = \`…\`` block took the whole prophets page down with
  "ref is not defined" — 0 of 29 cards rendered. Comments inside a template
  literal must never contain a backtick.
- **`IITW_REF_SELECTOR` went stale a second time**, and wider: `.life-sources`,
  `.rv-ev-ref` and `.gold-ref` were all missing, leaving 190 of 240 source
  lines on the companions page in English. But **do not simply add every new
  class to it** — if the field contains English PROSE as well as a citation,
  AR_PARTS mangles the prose word by word ("his trade and lineage" → "his
  trade و lineage"). Split the line and wrap only the citation, as
  `prophets.html` and `companions.html` now do.
- **AR_PARTS ordering broke three more times, silently.** `Book of Food`,
  `Book of Remembrance` and `Book of Dress` each sat ABOVE their own longer
  forms, so the prefix matched and left the tail in English. And 16 narrator
  names never matched at all because the data spells them **Omar** and
  **Osman** (rule 26) while AR_PARTS was keyed on `Umar` and `Uthman`.
  After touching that array, run the Arabic-mode check above.

## Traps worth knowing now

- **Muslim's numbering in the jsdelivr hadith API is sequential (1–7563) and
  does NOT match** the standard numbering. Bukhari's does. Cite Muslim by book
  name unless you have verified the number.
- **`staff.html` and `companions.html` load `main.js` early on purpose**, before
  their inline script, because that script calls its helpers at parse time. Do
  not "tidy" this back. `quran.html` loads `account.js` before `quran.js`.
- **`.en-only` / `.ar-only` need `!important`** — layout rules that also set
  `display` will out-specify them.
- **Re-measure the nav breakpoint whenever a nav link is added or removed.**
  **13 links plus the language button that `i18n.js` injects need 1474px, so the
  hamburger takes over below 1480px**, and `.nav-wrap` has `max-width: 1560px` —
  that cap is a real constraint, because when the bar needs more than it the nav
  overflows at EVERY width however wide the screen. This has now been wrong four
  times; most recently the breakpoint sat at 1200px while twelve links already
  needed 1467px, which put Login off the right edge of a 1366px laptop, live.
  Measure with the desktop layout actually applied
  (`brand.getBoundingClientRect().width + nav.scrollWidth` + the wrap padding and
  gap), then check `documentElement.scrollWidth > clientWidth` at 1280 / 1366 /
  1440 / 1500 / 1920.
- **In RTL, `element.right > clientWidth` is not an overflow test** — the
  scrollbar moves to the left. Use `documentElement.scrollWidth > clientWidth`.

## Added 5 August 2026 — second pass

- **Golden Age now opens with a summary.** `GOLDEN_OVERVIEW` in `js/golden.js`:
  what the period was in plain words, exactly WHEN (with the honest caveat that
  the usual 750–1258 is Baghdad-shaped — Maragha, Ibn Khaldun, Ulugh Beg and
  Taqi ad-Din all came after), where, a 16-item summary of what came out of it,
  and a 22-entry dated timeline. Most readers have never heard the period
  existed, so this comes before any name or any argument.
- **`js/terms.js`** — 48 technical words explained in plain English and Arabic
  (awrah, mahram, khimar, 'inah, waswas, khuff, hudud, ijma'…), shown as a
  "Words explained" box under every ruling and every revival card, listing only
  the words that actually appear in that card.
- **`js/figures.js`** — four labelled figures for four rulings (hijab conditions,
  which part of the sock is wiped, rak'ah on a journey, ghibah vs slander).
  **Authored here, not fetched from the web**: no copyright risk, nothing to go
  dead, no photograph of a real person, and a figure shows the RULE where a photo
  shows one outfit. They were drawn as inline SVG first and **rewritten as HTML
  tables and comparison lists** — see the SVG trap below. Keep them HTML.
- **Photo bands on Stories and Guidance**, and a softer scroll arrival —
  gentler curve, slight scale, and a stagger so the Arabic line, the heading
  and the paragraph arrive in sequence.

### Traps hit in this pass

- **Arabic substring matching is never safe.** ولي (wali) sits inside وليس,
  وهن (wahn) inside وهنّ, and عينة ('inah) matched بعينه. Match Arabic WORD BY
  WORD after stripping harakat and the attached prefixes, and anchor a term to
  its definite form (الوهن، الجمع) when the bare form is also a common word.
  This is the same trap the Stories glossary hit with كلّ / الكَلّ.
- **Never put label text inside an SVG.** Text in an SVG is not a node
  `i18n.js` can walk, so it **never translates**, and a horizontal scroll wrapper
  clips it in RTL where scrolling starts from the right — "Hair, neck and ears"
  rendered as "irs / tly" on the live site. Every figure on this site is HTML for
  that reason. Related: the first hijab figure was an outline of a garment that
  read as a winter hat — **a diagram the reader has to decode teaches less than a
  sentence.** Prefer a labelled comparison in words.
- **An SVG with a `min-width` widens its card instead of scrolling.** A grid
  item defaults to `min-width: auto`, so it grows to fit and pushes the whole
  page sideways on a phone. The scroll wrapper needs `min-width: 0`.
- **`innerText` returns the text of `display:none` elements**, and a CSS
  transition does not advance while the browser pane is not compositing — both
  produced false bug reports. Use `getComputedStyle(el).display`, and read
  resting values with transitions disabled.

## Added 5 August 2026

- **`golden.html` + `js/golden.js`** — the Golden Age of Islam. 28 figures, each
  with the Latinised name Europe used, plus `GOLDEN_ROOT` (why the peak grew out
  of the religion) and `GOLDEN_TAKEN` (7 documented cases of the credit going
  elsewhere). History is graded the same way hadith is: *his own surviving work*
  · *his work plus the Latin translation* · *reported in the histories* ·
  *popular but not established*. The "99% / 1%" framing was built as documented
  receipts — Ibn ash-Shatir against Copernicus, Ibn an-Nafis, Toledo, the
  Latinised names — rather than as a percentage, and one card states plainly
  what is NOT true (Ibn Firnas's flight, ar-Razi's hanging meat, pseudo-Geber).
- **`js/revival.js`** — why the ummah fell and the way back, rendered on
  `guidance.html#revival`. Both key hadith are labelled outside the two Sahihs;
  the 'inah hadith carries its real disagreement (al-Albani Sahih, Zubair Ali
  Zai weak); Imam Malik's sentence is marked as HIS, not a hadith.
- **Stories sectioned** — `STORY_SECTIONS` in `data.js`, 10 sections by what the
  story teaches. 38 → **45 stories**.
- **Guidance** — 11 → **15 rulings**, 10 → **19 scholars** (the four imams,
  al-Bukhari, Muslim, at-Tabari, Ibn Abd al-Barr, ash-Shatibi, Ibn Rajab added).

### Bugs fixed on 5 August that had reached the live site

- **`bump-version.sh` never stamped hyphenated filenames.** The regex was
  `js/[a-z0-9]+\.js`, so `js/scholars-books.js` had been serving a cached copy
  since the day it was added. Now `[a-z0-9-]+`.
- **The nav overflowed at every width between 1200px and ~1467px.** The
  hamburger breakpoint was 1200px while twelve links plus the injected language
  button needed 1467px, so Login sat off the right edge on a 1366px laptop.
  Re-measured: 13 links need **1474px**, breakpoint is now **1480px**, and
  `.nav-wrap` `max-width` was raised to 1560px — that cap is a real constraint,
  because when the bar needs more than it, the nav overflows at EVERY width.
  Verified clean at 390 / 768 / 1024 / 1280 / 1366 / 1440 / 1500 / 1600 / 1920.
- **Guidance led with an irrelevant ruling.** Rulings render first by design
  (correctly — "what counts as hijab" must be answered by the scholars). But
  "first" was unconditional, so "I lose my temper" led with the ruling on
  backbiting. Two guards now: a hadith that beats the best ruling by 35% takes
  the lead, and a ruling set whose top two scores are within 20% of each other
  is treated as a filler-word match and dropped. Verified on 11 queries in both
  languages.

## Current state (4 August 2026)

29 prophets and 65 companions — **all 94 with a full life**, and every prophet
with the message he was sent with · 43 curated hadith (+~15,000 via API) ·
166 sunnah practices · 38 stories of the Prophet ﷺ · the Day of Judgement in
**15 stages** including the Great Intercession · **33 angels** (rendered inside
the Judgement page) · **19 adhkar** with a tap counter · **11 scholars' rulings**
and **10 scholars with their books** on Guidance · 23 guidance themes and 16
worship steps · 114 surahs with 16 reciters and Mushaf page numbers ·
**reader sign-in on the Quran page that saves the exact verse you stopped at** ·
feedback form on every page.

Pages: index, quran, prophets, companions, hadith, sunnah, stories, judgement,
guidance, courses, search, login, staff, meeting. `angels.html` is a redirect to
`judgement.html#angels`.

Open work is listed in Part 5 of the handoff — chiefly: Arabic for the hadith
page titles and the courses page, cross-device saved place (needs a backend),
and Gmail sign-in (needs an OAuth Client ID from the owner).

## The Guidance box: intent first, then scoring

`findGuidance()` reads the whole sentence before scoring any word in it —
`iitwIntent()` returns whether this is a RULING question and which TOPIC it is
about. **A ruling question may only be answered by a ruling**; if nothing
authored matches, `iitwNoRulingHtml()` says so rather than reaching for the
nearest verse. That path exists because "حكم الاحتفال بالمولد النبوي؟" used to
return "Ease After Hardship".

- **Arabic is matched word by word, never as a substring** — `iitwWordSet()`
  and `iitwHasWord()`, which strip the attached prefixes (ال، بال، وال، لل، ب،
  ل، و، ف، ك). This is the third time the substring trap has been found live:
  ولي inside وليس, عينة inside بعينه, and now **ألم inside بالمولد**, which is
  what produced that wrong answer. Never reintroduce `.includes()` on Arabic.
- **When a topic matches, the ANSWER is rendered first** (`iitwDirectAnswerHtml`)
  and the evidence sits under it. The 15 entries in `FIQH_RULINGS` each carry an
  authored `answer` field — surface that, do not quote a hadith and leave the
  reader to work out what it meant.
- Adding a new answerable subject means adding an entry to `GUIDANCE_TOPICS`
  with `words` and a `need` count. Keep `need` at 2 for vague words so a single
  ordinary word can never decide the answer.
- **`must` is a second gate, and it is what makes an ordinary word safe.** A
  topic that carries one is only scored at all when one of its `must` words is
  present. Without it, `mis-sword` — built on "kill" — answered *"I want to
  kill myself"* with the section on the fighting verses. On this page that
  class of mistake is not a relevance bug, it is a harm.
- **Hits count DISTINCT SUBJECTS, not distinct list entries** (`canonWord`).
  `iitwHasWord` matches through `stem()` and `iitwArStrip()`, so a list holding
  kill / kills / killing / killed scored FOUR on the single word "kill", and
  قتل / القتل / بقتل scored three on one Arabic word. `need` is supposed to mean
  "this sentence is about two different things"; the inflation made one word
  look like several. If you add morphological variants to a `words` list they
  now cost nothing and gain nothing — which is correct.
- **The sort is stable, so ORDER IN THE ARRAY BREAKS TIES.** The
  `mis-` entries sit AFTER the `fq-` entries deliberately: "what counts as
  hijab" scores 1 on each and must reach the scholars' ruling, while "why do
  Muslim women wear hijab" scores 5 on `mis-hijab` and must reach the
  misunderstood section. Moving them above the `fq-` block takes every hijab
  question away from the ruling.
- **`js/misunderstood.js` is NOT in `buildIdf()`, and that is deliberate.**
  Those entries are reached only through the intent layer and are never scored
  by `scoreContent`, so the corpus rule — index everything that is SEARCHED —
  is already satisfied. Adding them would shift the df of every word and
  re-tune every existing score on the page. If you ever make that content
  scorable, you MUST index it at the same time.

## The service worker — read this before touching sw.js

`sw.js` is **network-first, always**. The cache is an offline fallback and is
never preferred over the network.

**Never change it to cache-first.** A cache-first worker would bring back the
"reload and see no change" problem permanently and make `bump-version.sh`
stop working — the one failure this project has spent the most time on. The
behaviour was proven by fetching a file through the worker, changing it on
disk, and fetching again: the reader gets the new content.

- Bump `CACHE_VERSION` in `sw.js` whenever that file changes.
- Cross-origin requests are not intercepted at all — the Quran API, the
  per-ayah audio and the hadith API go straight to the network. Caching the
  audio would fill the reader's storage.
- `manifest.webmanifest` is linked from every public page (not staff, login,
  meeting or offline), so the app can be installed from wherever the reader is.

## الوِرْد اليومي — the daily commitment (`js/wird.js`, `quran.html#wird`)

Two rules from the owner govern it and should not be softened:

1. **The intention sits on the button, not in a footnote.** "You are not
   reading this to tick a box." A tracker that made the streak the point would
   be the opposite of what this is for. The streak exists but is deliberately
   not the largest thing on the card.
2. **It tracks the PLACE, not the calendar.** Miss a day and the reader
   carries on from where they stopped. Nothing scolds.

State is `localStorage` under `iitw-wird`, device-only, and the card says so.
`wirdTodaysPages()` wraps at page 604 so a finished khatmah rolls into the
next one instead of stopping dead.

## Offline — what broke and what the rules are now

The owner reported that the Quran did not work offline. Three separate causes,
all worth knowing:

1. **Only the precached files work offline.** Anything not in the list works
   only if it happens to have been visited. The list now covers every page and
   every content file.
2. **The Quran text is NOT on this site** — it comes from `api.alquran.cloud`,
   cross-origin. The worker must handle it explicitly or the reader opens
   empty offline. It is cached **cache-first**, which is safe only because the
   Quran does not change.
3. **The browser caches `sw.js` itself.** Registering `"sw.js"` can return the
   byte-identical old copy, so a rewritten worker never installs while
   reporting itself active. **Always register with
   `{ updateViaCache: "none" }`.** `bump-version.sh` cannot reach this.

And the one that wasted the most time:

- **A service worker's `install` is killed if it takes too long.** Precaching
  3.5MB inside `install` left eleven files cached and the worker reporting
  success — a reader would have gone offline believing the site was saved.
  Install takes `PRECACHE_SHELL` only; `iitwWarmOfflineCache()` in `main.js`
  pulls `PRECACHE_CONTENT` afterwards from the page, where nothing terminates
  it half done.
- **Never cache the recitation audio.** everyayah serves hundreds of megabytes.
- To test offline properly, **stop the dev server** and load a page. A resolved
  `fetch` is not proof the network is up — the worker returns a 504 Response
  rather than rejecting, so check the status.

## Arabic counts nouns by a rule English does not have

1 يوم · 2 يومان · 3–10 أيام · 11–99 يومًا · 100/101 يوم. `wirdArDays()` in
`quran.html` implements it. "١٨ أيام" is wrong and a native reader sees it
immediately.

## The Quran text ships with the site

`js/quran-text.js` (2.2MB) holds all 114 surahs, all 6,236 verses, the English
translation and the Mushaf page of every ayah. `openSurah()` reads it; the API
is only a fallback if that file fails to parse.

**Do not put the reader back on api.alquran.cloud.** The owner reported twice
that a surah would not open without a connection, and no amount of
service-worker tuning fixes a dependency on someone else's server — caching
API replies only ever helps for surahs already read once, which is useless to
someone who installs the app and then goes offline.

**And never pass `cache: "no-store"` to a fetch whose response you want
cached.** A response fetched with no-store cannot be written to the Cache API.
The background warm-up did exactly that: 35 downloads, all returning 200, all
storing nothing, and the "offline ready" flag set before the loop even ran.
Measured live from a clean state: five files cached, zero pages, after 45
seconds. That was the whole reason his pages did not work.

## ورد اليوم — the daily box (`js/daily.js`, on `index.html`)

Four things a day: the Quran page from the commitment, a story, a sunnah to act
on, and revision of something memorised. Ticked off, with the run of days.

- What appears rotates by the **day of the year**, not at random, so it changes
  daily, is the same for everyone, and does not reshuffle on refresh.
- `wirdArDays()` lives in `js/wird.js` and is shared with the Quran page.
  Arabic adjectives must agree with the count — "٧ أيام متتابعة" is wrong;
  "على التوالي" is invariant and correct at every number, and one day takes no
  adjective at all.
- **A home-screen widget is not possible from a web app.** That needs a native
  app. Do not promise it.

## A stemmer that maps two words onto one string is a wrong answer waiting

`stem()` is not decoration. It decides which `must` gate opens, and a gate that
opens on the wrong sentence produces a confident answer to a question nobody
asked. Measured on the live site: `beer -> be`, `weed -> we`,
`betting -> bett`, `better -> bett` — so **"i cant be happy when my friend
succeeds" and "i want to be a better muslim" were both answered with the ruling
on alcohol**, and so was any sentence containing "we".

The rules, and both copies of the stemmer (`guidance.html` and `sunnah.html`)
must keep agreeing on all four:

1. **Three characters must survive a strip.** Otherwise short content words
   land on stop words.
2. **Never strip `-er` or `-ers`.** other→oth, mother→moth, under→und,
   never→nev, answer→answ. The plain `-s` rule already gives prayers→prayer,
   which is the form the lists actually hold.
3. **Try a shorter suffix before giving up.** `eyes` cut at `-es` leaves "ey",
   below the floor — fall through to `-s` and leave "eye".
4. **Undouble the consonant, but not ll / ss / zz / ff.** I got this wrong on
   the first pass by including `l`: `kills` and `killing` became "kil" while
   `kill` stayed "kill", and the three forms of the commonest verb in the
   self-harm gate stopped matching each other.

**Before changing any matching code, run the battery, change it, run it again.**
Both bugs above were found by a battery written for new content, not by reading
the function.

## A `must` gate opened by a generic word is not a gate

`للناس` gated the sincerity topic, so a Moroccan asking why people envy each
other was answered with the section on doing things for Allah rather than for
the room. `js/verify.js` has had this guard for a long time (`V_GENERIC`); the
Guidance matcher did not. There is now an `IITW_GENERIC` set, and a gate needs
one entry that actually names a subject.

Generic words still count toward the hit total once a real subject word has
opened the gate. They are weak evidence, not no evidence.

## Keep `must` phrases short enough to survive being asked differently

A multi-word `must` is matched as a **substring of the whole query**, so
`"how to choose a wife"` does not match `"how do i choose a wife"`. The frame
around the subject changes constantly and the subject does not.

Write the shortest fragment that still names the subject and could not appear
in a sentence about anything else: `"choose a wife"`, `"mahr"`,
`"afford to marry"`, `"without the quran"`, `"marriage contract"`. Enumerating
phrasings never ends and never finishes the job.

## Fold a dialect word onto the form a list actually carries

`كايحسدو` folded to `يحسدون` still matched nothing, because no topic held
`يحسدون`. Folding it to the bare root `حسد` fixed it. **A fold that lands on a
word no list holds is a fold that did nothing** — check the destination, not
just the source.

And verb-prefix stripping stays hand-written. `iitwArStrip` removes NOMINAL
prefixes and must never learn ي ت ن: `نساء` would become `ساء`, `يوم` would
become `وم`. The same reason مال، حق، ماشي are deliberately absent from the map.

## Before adding a section to a page, read what that page already carries

He asked for the new subjects on the Judgement page "if it needs one". It did
not: `j-rights` already had the bankrupt one and `j-alone` already had the
sound heart — both endgames were there before either new section existed. What
was missing was the **join**: the page said settle your debts and never said
where the debts come from. One paragraph, not a section.

The answer to "cover this here too" is sometimes a sentence.

## `rank` on a golden-mirror entry is a KEY, not a sentence

`glBadge` looks `rank` up in `GL_RANK` and returns `""` for anything missing.
Eight entries carried `rank: "reasoning"`, which was not a key, so eight cards
sat with no badge at all on a page where every sourced card wears one — and it
was invisible, because a missing badge looks like a design choice. If you add a
rank value, add it to `GL_RANK` in the same commit.

## Check the famous number before quoting the famous hadith

"If one whose religion and character please you proposes, marry him" is quoted
everywhere as at-Tirmidhi **1084** — and at-Tirmidhi himself records that its
narrator was contradicted, that al-Layth's mursal version is more likely, and
that **al-Bukhari did not consider that wording preserved**. The site cites
**1085** instead.

Reading the collection instead of trusting the number caught this, the same way
it caught al-Bukhari 50 listing five items and not six. The rule is unchanged
and it keeps paying: **search the collection by wording, never cite from
memory, and read what the compiler said underneath the hadith.**

## Check what the search CAN reach before adding words to make it reach

The topic lists on `guidance.html` looked like the problem for months. They
were not. `findGuidance` scored HADITHS, THEMES, RULINGS, WORSHIP_STEPS,
SUNNAH, PROPHETS and COMPANIONS — and **not one of the card sections**. About
180 cards, the most specific writing on the site, were invisible to search
unless a hand-written topic pointed at one. "i shouted at my mum yesterday",
"i havent prayed in years" and "i copied in my exam" all returned NOTHING
while the card answering each sat on the page.

Adding phrases to topic lists would have fixed those three sentences and left
the fault alive. `iitwAllCards()` fixed all of them and every section written
in future.

**So before writing another keyword: enumerate the corpora the matcher
actually reads, and check the thing you are trying to reach is in one.**

## Score a card on its title and keys, never on its prose

A card runs to two thousand characters. Feeding `plain`, `example`, `note`
and `proof` into the haystack means a rare word anywhere in a long card
outranks the curated keys of the card that is actually about the question —
measured: "i had to pay someone to get my papers done" ranked the inheritance
ORDER card above the one on bribery, until the prose came out of the hay.

`keys` is the field for what people type. The title is the subject. Nothing
else on a card is evidence about what it answers.

## Doubled letters: nobody spells them the same way twice

`iitwSqueeze` collapses runs of the same letter so every guess meets:
tattoo / tatoo / tatto / tato all become "tato", and haraam→haram,
halaal→halal, zinaa→zina. **Latin words of five characters or more**, as an
extra form on both sides so it can only add a match. Five and not four —
at four, "good" collapses onto "god".

It lives in `guidance.html`, `hadith.html` and `sunnah.html`. If you touch
one, touch all three.

## Test a safety gate in BOTH directions, every time

The self-harm box was measured for firing and never for staying quiet, and
both halves were broken:

- **Missed:** "i am going to end it" — the pattern needed "end my life".
- **False-fired:** "i want to end my phone contract" — because
  `end (my|it all) *(life|existence)?` made the object OPTIONAL. Pre-existing,
  and it had been opening a crisis box for people cancelling subscriptions.

A gate that fires 12/12 is half-tested until it also stays quiet 6/6. Write
the negative battery in the same commit as the positive one.

## Two words caused two wrong answers, and both were homographs

`"testimony"` on the shahada topic sent **false testimony** to the pillar of
faith. `"النصيب"` on the qadar topic sent **نصيب البنت من الميراث** to the
section on destiny. Each word has two unrelated meanings and neither belongs
in a list on its own.

When a list entry is a word that means two different things in two different
subjects, it is not a keyword — it is a trap. Give it a companion word or
drop it.

## A hadith without an explanation is a hadith most readers cannot use

His words: "some hadiths are hard to understand based on just the words
because it is using old Arabic words." The `explain` / `explainAr` field on a
curated hadith exists for that, and the ones that work share a shape:
**say what the words mean, then give a concrete case.**

- the wet grain under the dry: the grain really WAS wet — the man did not
  lie, he arranged; an omission is a lie
- false testimony: the narrators kept his POSTURE — he was reclining, and he
  sat up before saying it
- arrogance: a man objected on the spot about liking good shoes, and got a
  definition

## Say why a ruling is NOT in a list, when it is not

Smoking is not in the major sins section, and the reason is written down: a
kabirah is defined by a fixed penalty, a curse, a threat of the Fire or a
stated exclusion in the text, and smoking has none — no text names it,
because it arrived a thousand years after the revelation. It went into the
basics instead, with the card stating which part is text and which is the
scholars' application.

Putting it in the list would have been a claim the texts do not make. The
category a thing is placed in is itself a claim.

## And believe an overflow reading only at a real viewport

`document.documentElement.clientWidth` read **0** in the preview pane, which
made every element on the page look like it was overflowing. Resize to a real
viewport — `resize_window` with preset "mobile" — before believing any width
measurement. This is the third time this artifact has cost a wrong report.

## An overview card must hand over its keys when a real section arrives

`pi-salah` — the card that says prayer is the second pillar — was carrying
`"prayer times"`, `"missed prayers"` and `"أوقات الصلاة"`. It had been the
best answer available for months, so it had accumulated the keys for
questions it can only gesture at. The moment `js/prayer.js` shipped, those
searches kept landing on the overview instead of the section that answers
them, and no amount of keyword-adding on the new topics fixed it.

**When a new section overlaps an old card: take the specific keys off the old
card, and add a link between them in both directions.** An overview keeps
what it can answer and gives up what it can only point at. Same thing
happened with `sn-salah`, which is about abandoning prayer and was holding
"years of missed prayers" — that belongs to `#pr-years`.

Check for this every time a section is added. It is not a scoring bug.

## When two scholarly positions produce the same next action, give both and say so

Years of missed prayers: the majority say make them up, Ibn Taymiyyah and
Ibn Hazm held there is no qada for deliberate abandonment. The site states
both and picks neither — because **both produce the same instruction
tonight**: pray the next one, and ask someone qualified while already
praying.

That framing is what makes an unresolved difference usable instead of
paralysing. What actually stops people here is the arithmetic — nine years
computed into the thousands, concluded impossible, nothing prayed — and
neither position asks for it up front. Say that.
