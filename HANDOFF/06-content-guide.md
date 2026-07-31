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
