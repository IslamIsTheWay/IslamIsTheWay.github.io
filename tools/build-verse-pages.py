# -*- coding: utf-8 -*-
"""Give every explained verse a page of its own — for search engines, and to share.

WHY. Google cannot list content that only appears behind a #link. Every
explanation on the Quran page lived inside quran.html and was reachable only as
quran.html#surah-2-255, and Google's own guidance is not to use fragments to
load different content. So the whole site could appear in search results as at
most the 13 pages in sitemap.xml, and someone searching "meaning of Ayat
al-Kursi" could never land on the explanation of it.

WHAT. verse/<surah>-<ayah>.html for every entry in js/tadabbur.js, with the
explanation in the HTML itself — both languages, its own title, description,
canonical URL and social-preview tags — and verse/index.html listing them all.

RULES THIS KEEPS.
  * The Quran is never typed: the verse comes from js/quran-text, the same
    source the reader uses, and every quotation inside the explanation is the
    one already in js/tadabbur.js (cut from the Mushaf when it was written).
  * One renderer: the markup mirrors iitwTadabburAyahHtml in js/quran.js, with
    the same classes, so a verse page looks like the panel it came from. The
    plain sentence comes FIRST, as it does there.
  * <base href="../"> lets the pages reuse the site's header, footer, styles
    and scripts unchanged. The one same-page link in the footer (#feedback) is
    rewritten to name this page, because under <base> a bare "#" would point
    at the home page.

Run by ./bump-version.sh after it stamps the root pages, so these pages always
carry the same ?v= stamp as the rest of the site.

    python tools/build-verse-pages.py           write the pages
    python tools/build-verse-pages.py --check   exit 1 if the pages are out of date
"""
import io, json, os, re, sys, html

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "verse")
SITE = "https://islamistheway.github.io/"
NL = "\n"


# ---------------------------------------------------------------- reading JS data
KEY = re.compile(r"([A-Za-z_$][\w$]*|\d+)\s*:")


def js_literal(src, start):
    """Convert the JS object/array literal beginning at src[start] to Python.
    Handles comments, unquoted keys, single-quoted strings, trailing commas."""
    out, depth, i, n = [], 0, start, len(src)
    last = ""
    while i < n:
        c = src[i]
        if c in "\"'":
            j, buf = i + 1, []
            while j < n:
                ch = src[j]
                if ch == "\\":
                    buf.append(src[j:j + 2]); j += 2; continue
                if ch == c:
                    break
                buf.append(ch); j += 1
            s = "".join(buf)
            if c == "'":
                s = s.replace("\\'", "'").replace('"', '\\"')
            out.append('"' + s + '"'); last = '"'; i = j + 1
            continue
        if src.startswith("//", i):
            j = src.find("\n", i); i = n if j < 0 else j; continue
        if src.startswith("/*", i):
            j = src.find("*/", i + 2); i = n if j < 0 else j + 2; continue
        if c == "`":
            raise ValueError("template literal in data at offset %d" % i)
        if last in ("{", ",") and not c.isspace():
            m = KEY.match(src, i)
            if m:
                out.append('"' + m.group(1) + '":'); last = ":"; i = m.end(); continue
        if c in "{[":
            depth += 1
        elif c in "}]":
            depth -= 1
        out.append(c)
        if not c.isspace():
            last = c
        i += 1
        if depth == 0:
            break
    text = re.sub(r",(\s*[}\]])", r"\1", "".join(out))
    return json.loads(text)


def load_const(path, name):
    s = io.open(path, encoding="utf-8").read()
    m = re.search(r"\bconst\s+" + name + r"\s*=\s*", s)
    if not m:
        raise SystemExit("%s not found in %s" % (name, path))
    return js_literal(s, m.end())


def surah_text(n):
    t = io.open(os.path.join(REPO, "js", "quran-text", "%d.js" % n), encoding="utf-8").read()
    i = t.index("QURAN_TEXT[")
    return json.loads(t[t.index("=", i) + 1: t.rindex("}") + 1])


# ---------------------------------------------------------------- rendering
# These mirror js/quran.js exactly — change one, change the other.
TAD_STRENGTH = {
    "quran":    ("The Quran", "قرآن", "t-quran"),
    "hadith":   ("Hadith — graded, see reference", "حديث — مع درجته", "t-hadith"),
    "lugha":    ("Language — from a named lexicon", "لغة — من معجمٍ مسمّى", "t-lugha"),
    "tafsir":   ("A scholar's reading — not revelation", "قول مفسّر — لا وحي", "t-tafsir"),
    "qiraah":   ("A difference in the established recitations", "اختلاف قراءات متواترة", "t-qiraah"),
    "ikhtilaf": ("The scholars differed — both views given", "خلافٌ بين أهل العلم — والقولان مذكوران", "t-ikhtilaf"),
    "note":     ("A note on coverage", "بيان عن حدود ما أُنجز", "t-note"),
}


def para(text, rtl=False):
    if not text:
        return ""
    out = []
    for p in str(text).split("\n\n"):
        p = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", p.replace("\n", "<br>"))
        out.append("<p" + (' dir="rtl"' if rtl else "") + ">" + p + "</p>")
    return "".join(out)


def badge(k):
    s = TAD_STRENGTH.get(k)
    if not s:
        return ""
    return ('<span class="tad-badge %s"><span class="en-only">%s</span>'
            '<span class="ar-only" dir="rtl">%s</span></span>' % (s[2], s[0], s[1]))


def ar_digits(n):
    return str(n).translate(str.maketrans("0123456789", "٠١٢٣٤٥٦٧٨٩"))


REF = re.compile(r"\((\d{1,3}):(\d{1,3})")

# A handful of verses are known by a name; the name is what people search for.
NAMED = {
    (2, 255): ("Ayat al-Kursi", "آية الكرسي"),
    (24, 35): ("the Verse of Light", "آية النور"),
    (2, 282): ("the Verse of Debt", "آية الدَّين"),
}


def entry_html(surah, a, explained, meta):
    h = []
    if a.get("plain"):
        h.append('<div class="tad-plain tad-plain-first">'
                 '<div class="tad-plain-label">💬 <span class="en-only">In plain words</span>'
                 '<span class="ar-only" dir="rtl">بكلامٍ بسيط</span></div>'
                 '<div class="en-only">' + para(a["plain"]) + '</div>'
                 '<div class="ar-only" dir="rtl">' + para(a.get("plainAr"), True) + '</div></div>')
    if a.get("why"):
        h.append('<div class="tad-sec"><div class="en-only">' + para(a["why"]) + '</div>'
                 '<div class="ar-only">' + para(a.get("whyAr"), True) + '</div>' +
                 ('<div class="tad-ref" dir="auto">' + a["ref"] + '</div>' if a.get("ref") else "") +
                 (badge(a["strength"]) if a.get("strength") else "") + '</div>')
    if a.get("misunderstood"):
        h.append('<div class="tad-misread">'
                 '<div class="tad-misread-label">⚠ <span class="en-only">What people get wrong here</span>'
                 '<span class="ar-only" dir="rtl">ما يُخطئ الناس فيه هنا</span></div>'
                 '<div class="en-only">' + para(a["misunderstood"]) + '</div>'
                 '<div class="ar-only" dir="rtl">' + para(a.get("misunderstoodAr"), True) + '</div></div>')
    for w in a.get("words") or []:
        head = (('<span class="en-only">' + w["w"] + '</span><span class="ar-only tad-w-concept">' + w["wAr"] + '</span>')
                if w.get("wAr") else w["w"])
        x = ('<div class="tad-word"><div class="tad-word-head"><span class="tad-w" dir="rtl">' + head + '</span>'
             '<span class="tad-translit en-only">' + w.get("t", "") + '</span></div>'
             '<div class="tad-word-body"><div class="en-only">' + para(w.get("meaning")) + '</div>'
             '<div class="ar-only">' + para(w.get("meaningAr"), True) + '</div>')
        if w.get("instead"):
            x += ('<div class="tad-instead"><div class="tad-instead-label"><span class="en-only">Why this word and not another</span>'
                  '<span class="ar-only" dir="rtl">لِمَ هذه الكلمة دون غيرها</span></div>'
                  '<div class="en-only">' + para(w["instead"]) + '</div>'
                  '<div class="ar-only">' + para(w.get("insteadAr"), True) + '</div></div>')
        x += (('<div class="tad-ref" dir="auto">' + w["source"] + '</div>' if w.get("source") else "") +
              (badge(w["strength"]) if w.get("strength") else "") + '</div></div>')
        h.append(x)
    for l in a.get("links") or []:
        x = ('<div class="tad-link"><div class="tad-link-label">🔗 <span class="en-only">Where the thought is completed</span>'
             '<span class="ar-only" dir="rtl">حيث يتمّ المعنى</span></div>')
        if l.get("ar"):
            x += '<div class="tad-link-ar" dir="rtl">' + l["ar"] + '</div>'
        if l.get("en"):
            x += '<div class="tad-link-en en-only">' + l["en"] + '</div>'
        x += ('<div class="tad-ref" dir="auto">' + l["ref"] + '</div>'
              '<div class="en-only">' + para(l.get("how")) + '</div>'
              '<div class="ar-only">' + para(l.get("howAr"), True) + '</div>')
        m = REF.search(l.get("ref", ""))
        if m and (int(m.group(1)), int(m.group(2))) in explained:
            s2, a2 = int(m.group(1)), int(m.group(2))
            x += ('<a class="vp-linkpage" href="verse/%d-%d.html"><span class="en-only">Read its explanation →</span>'
                  '<span class="ar-only" dir="rtl">اقرأ شرحها ←</span></a>' % (s2, a2))
        h.append(x + '</div>')
    df = a.get("differ")
    if df:
        x = ('<div class="tad-differ"><div class="tad-differ-head">⚖️ <span class="en-only">' + df.get("title", "") + '</span>'
             '<span class="ar-only" dir="rtl">' + df.get("titleAr", "") + '</span></div>')
        for v in df.get("views") or []:
            x += ('<div class="tad-view"><div class="tad-who"><span class="en-only">' + v.get("who", "") + '</span>'
                  '<span class="ar-only" dir="rtl">' + v.get("whoAr", "") + '</span></div>'
                  '<div class="en-only">' + para(v.get("view")) + '</div>'
                  '<div class="ar-only">' + para(v.get("viewAr"), True) + '</div></div>')
        x += ('<div class="tad-weight"><div class="en-only">' + para(df.get("weight")) + '</div>'
              '<div class="ar-only">' + para(df.get("weightAr"), True) + '</div></div>' +
              badge(df.get("strength") or "ikhtilaf") + '</div>')
        h.append(x)
    return "".join(h)


def plain_text(s, limit):
    s = re.sub(r"<[^>]+>|\*\*", "", s or "").replace("\n", " ").strip()
    s = re.sub(r"\s+", " ", s)
    if len(s) <= limit:
        return s
    return s[:limit].rsplit(" ", 1)[0].rstrip(",;:—-") + "…"


# ---------------------------------------------------------------- the page shell
def shell():
    """Head, header and footer of verify.html, re-pointed for a page one
    folder down. Everything else about the site comes along unchanged."""
    s = io.open(os.path.join(REPO, "verify.html"), encoding="utf-8").read()
    head = s[:s.index("</head>")]
    head = re.sub(r"<title>.*?</title>", "<title>@@TITLE@@</title>", head, flags=re.S)
    head = re.sub(r'<meta name="description" content="[^"]*"\s*/?>',
                  '<meta name="description" content="@@DESC@@" />', head)
    head = re.sub(r'<link rel="canonical" href="[^"]*"\s*/?>',
                  '<link rel="canonical" href="@@URL@@" />', head)
    head = re.sub(r'(<meta property="og:title" content=")[^"]*', r"\1@@TITLE@@", head)
    head = re.sub(r'(<meta property="og:description" content=")[^"]*', r"\1@@DESC@@", head)
    head = re.sub(r'(<meta property="og:url" content=")[^"]*', r"\1@@URL@@", head)
    head = re.sub(r'(<meta name="twitter:title" content=")[^"]*', r"\1@@TITLE@@", head)
    head = re.sub(r'(<meta name="twitter:description" content=")[^"]*', r"\1@@DESC@@", head)
    head = head.replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n  <base href="../" />', 1)
    assert "<base href" in head, "verify.html's head changed shape; update shell()"
    header = s[s.index("<header"):s.index("</header>") + 9]
    footer = s[s.index("<footer"):s.index("</footer>") + 9]
    stamp = re.search(r'css/style\.css\?v=(\d+)', s).group(1)
    return head, header, footer, stamp


SCRIPTS = ["main.js", "reading.js", "nav.js", "i18n.js"]


def page(title, desc, url, header, footer, head, body, stamp, self_path):
    foot = footer.replace('href="#feedback"', 'href="%s#feedback"' % self_path)
    scripts = "".join('  <script src="js/%s?v=%s"></script>\n' % (j, stamp) for j in SCRIPTS)
    out = (head.replace("@@TITLE@@", html.escape(title, quote=True))
               .replace("@@DESC@@", html.escape(desc, quote=True))
               .replace("@@URL@@", url) +
           "</head>\n<body>\n" + header + "\n" + body + "\n" + foot + "\n" + scripts +
           "</body>\n</html>\n")
    return out


def build():
    tad = load_const(os.path.join(REPO, "js", "tadabbur.js"), "TADABBUR")
    surahs = {s["n"]: s for s in load_const(os.path.join(REPO, "js", "data.js"), "SURAHS")}
    head, header, footer, stamp = shell()

    explained = set()
    for k, v in tad.items():
        for a in v.get("ayat", []):
            explained.add((int(k), a["n"]))

    files = {}
    index_rows = []
    for sn in sorted(int(k) for k in tad):
        meta = surahs[sn]
        qt = surah_text(sn)
        ayat = sorted(tad[str(sn)].get("ayat", []), key=lambda x: x["n"])
        links_here = []
        for i, a in enumerate(ayat):
            n = a["n"]
            verse = qt["a"][n - 1].replace(" ", " ").strip()
            en = (qt.get("e") or [None] * 300)[n - 1] or ""
            name = NAMED.get((sn, n))
            ttl_en = "%s %d:%d%s — explained simply" % (meta["name"], sn, n,
                                                         (" (" + name[0] + ")") if name else "")
            ttl_ar = "شرح الآية %s من سورة %s%s" % (ar_digits(n), meta["arabic"],
                                                   (" — " + name[1]) if name else "")
            title = ttl_en + " | " + ttl_ar
            desc = plain_text(a.get("plain"), 150) + " " + plain_text(a.get("plainAr"), 140)
            fname = "%d-%d.html" % (sn, n)
            url = SITE + "verse/" + fname
            prev_a = ayat[i - 1]["n"] if i > 0 else None
            next_a = ayat[i + 1]["n"] if i + 1 < len(ayat) else None
            nav = '<nav class="vp-pager">'
            if prev_a:
                nav += ('<a href="verse/%d-%d.html"><span class="en-only">← Verse %d</span>'
                        '<span class="ar-only" dir="rtl">الآية %s →</span></a>' % (sn, prev_a, prev_a, ar_digits(prev_a)))
            nav += ('<a href="quran.html#surah-%d-%d" class="vp-reader"><span class="en-only">Open in the Quran reader</span>'
                    '<span class="ar-only" dir="rtl">افتحها في المصحف</span></a>' % (sn, n))
            if next_a:
                nav += ('<a href="verse/%d-%d.html"><span class="en-only">Verse %d →</span>'
                        '<span class="ar-only" dir="rtl">← الآية %s</span></a>' % (sn, next_a, next_a, ar_digits(next_a)))
            nav += "</nav>"
            body = (
                '<section class="verse-page"><div class="container">\n'
                '<nav class="vp-crumbs"><a href="quran.html"><span class="en-only">Quran Library</span>'
                '<span class="ar-only" dir="rtl">مكتبة القرآن</span></a> › '
                '<a href="verse/index.html#s%d"><span class="en-only">%s</span><span class="ar-only" dir="rtl">%s</span></a> › '
                '<span class="en-only">Verse %d</span><span class="ar-only" dir="rtl">الآية %s</span></nav>\n'
                '<h1 class="vp-title"><span class="en-only">%s %d:%d%s — explained simply</span>'
                '<span class="ar-only" dir="rtl">%s</span></h1>\n'
                '<div class="tad-verse-ar vp-verse" dir="rtl" lang="ar"><span class="q-hafs">﴿%s﴾</span></div>\n'
                '%s'
                '<div class="tad-ayah vp-entry" style="display:block;">%s</div>\n'
                '%s\n'
                '</div></section>'
            ) % (sn, meta["name"], meta["arabic"], n, ar_digits(n),
                 meta["name"], sn, n, (" — " + name[0]) if name else "",
                 ttl_ar,
                 verse,
                 ('<p class="vp-en en-only">“' + en + '”</p>\n') if en else "",
                 entry_html(sn, a, explained, meta),
                 nav)
            files[fname] = page(title, desc, url, header, footer, head, body, stamp, "verse/" + fname)
            links_here.append('<a href="verse/%d-%d.html">%s</a>' % (sn, n, ar_digits(n) if False else n))
        index_rows.append(
            '<div class="vp-index-surah" id="s%d"><h2><span class="en-only">%d. %s</span>'
            '<span class="ar-only" dir="rtl">%s. %s</span></h2><div class="vp-index-verses">%s</div></div>'
            % (sn, sn, meta["name"], ar_digits(sn), meta["arabic"], " ".join(
                '<a href="verse/%d-%d.html"><span class="en-only">%d:%d</span><span class="ar-only">%s</span></a>'
                % (sn, a["n"], sn, a["n"], ar_digits(a["n"])) for a in ayat)))

    total = sum(len(v.get("ayat", [])) for v in tad.values())
    idx_body = (
        '<section class="verse-page"><div class="container">\n'
        '<h1 class="vp-title"><span class="en-only">Every explained verse</span>'
        '<span class="ar-only" dir="rtl">كلّ الآيات المشروحة</span></h1>\n'
        '<p class="vp-lead"><span class="en-only">Each verse here has its own page: what it says in plain words, why it '
        'is worded the way it is, what people get wrong about it, and where the Quran completes the thought — with '
        'every claim graded. %d explanations across all 114 surahs.</span>'
        '<span class="ar-only" dir="rtl">لكلّ آيةٍ هنا صفحتُها: ما تقوله بكلامٍ بسيط، ولماذا جاءت بهذه الألفاظ، وما يُخطئ '
        'الناسُ فيه، وأين يُتمّ القرآنُ معناها — مع درجة كلّ قول. %s شرحًا في سور القرآن كلّها.</span></p>\n'
        '%s\n</div></section>'
    ) % (total, ar_digits(total), "\n".join(index_rows))
    files["index.html"] = page("Every explained verse of the Quran, in plain words | كل الآيات المشروحة",
                               "%d verses of the Quran explained simply — what each says, why it is worded that "
                               "way, and where the Quran completes it. شرح %s آية من القرآن بكلام بسيط."
                               % (total, ar_digits(total)),
                               SITE + "verse/index.html", header, footer, head, idx_body, stamp, "verse/index.html")
    return files


def sitemap_text(files):
    """sitemap.xml with the hand-written root entries kept as they are and the
    verse pages written after them — regenerated every run, so a verse added
    to js/tadabbur.js is in the sitemap the next time the site is built."""
    sm = io.open(os.path.join(REPO, "sitemap.xml"), encoding="utf-8").read()
    keep = [l for l in sm.split(NL) if l.strip() and "/verse/" not in l and "</urlset>" not in l]
    rows = []
    for name in sorted(files, key=lambda n: (n != "index.html",) + tuple(
            int(x) for x in re.findall(r"\d+", n))):
        pri = "0.8" if name == "index.html" else "0.6"
        rows.append("  <url><loc>%sverse/%s</loc><changefreq>monthly</changefreq><priority>%s</priority></url>"
                    % (SITE, name, pri))
    return NL.join(keep + rows + ["</urlset>"]) + NL


def main():
    files = build()
    sm = sitemap_text(files)
    if "--check" in sys.argv:
        stale = []
        for name, content in files.items():
            p = os.path.join(OUT, name)
            if not os.path.exists(p) or io.open(p, encoding="utf-8").read() != content:
                stale.append(name)
        if io.open(os.path.join(REPO, "sitemap.xml"), encoding="utf-8").read() != sm:
            stale.append("sitemap.xml")
        if stale:
            print("verse pages out of date (%d): run python tools/build-verse-pages.py" % len(stale))
            return 1
        print("verse pages: up to date (%d)" % len(files))
        return 0
    os.makedirs(OUT, exist_ok=True)
    keep = set(files)
    for old in os.listdir(OUT):
        if old.endswith(".html") and old not in keep:
            os.remove(os.path.join(OUT, old))
    for name, content in files.items():
        io.open(os.path.join(OUT, name), "w", encoding="utf-8", newline="").write(content)
    io.open(os.path.join(REPO, "sitemap.xml"), "w", encoding="utf-8", newline="").write(sm)
    print("wrote %d verse pages and the index, and %d sitemap entries" % (len(files) - 1, len(files)))
    return 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
