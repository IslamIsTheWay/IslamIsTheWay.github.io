"""Write js/recent.js — "Recently Added" on the home page — FROM GIT.

WHY THIS EXISTS. That section was six cards typed into index.html. Nothing
made them wrong, and nothing made them right either: they said "recently"
for as long as nobody edited them, which on this site meant months. The
owner reads the home page.

WHAT IS GENERATED AND WHAT IS NOT. The wording of each card is here, in the
table below, in English — because js/i18n.js already carries the Arabic for
these strings, and translating in one place is this site's rule. What is
GENERATED is which cards appear and in what order: git is asked when each
area's files last changed, the areas are sorted newest first, and the date
is printed on the card. A card can therefore never claim to be new when it
is not.

usage:  python build-recent.py            (writes js/recent.js)
        python build-recent.py --check    (fails if the file is out of date)
"""
import io, json, subprocess, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "js", "recent.js")

AREAS = [
    dict(id="raghib", icon="📜",
         paths=["js/raghib.js", "js/raghib-index.js", "js/raghib/"],
         title="Ar-Raghib al-Isfahani on the Quran",
         blurb="His own explanation under the verses of the first ten surahs — from his tafsir where it survives, and from his dictionary of the Quran where it does not. Every word of his is checked letter by letter against the printed book, every verse he connects is in the Mushaf's own text, and the page he said it on is printed with it.",
         href="quran.html", cta="Open the Quran"),
    dict(id="comfort", icon="🌙",
         paths=["js/reading.js", "js/nav.js", "js/resume.js", "js/quran-search.js"],
         title="Night reading, bigger text, and one search",
         blurb="A dark theme for reading at night, a text size that holds across the whole site, one search in the header of every page — and the home page now opens on what you were last reading.",
         href="index.html", cta="See for yourself"),
    dict(id="golden", icon="🏛️",
         paths=["golden.html", "js/golden.js", "js/golden-lives.js", "js/golden-mirror.js", "js/golden-closing.js"],
         title="The Golden Age of Islam",
         blurb="41 of the men and women who built it — algebra, optics, surgery, the hospital, the university — with the Latinised name Europe gave each of them, what Europe built on their work, and the documented cases where the credit went elsewhere. Every claim says how strong its evidence is, the same way every hadith on this site does.",
         href="golden.html", cta="See What We Built"),
    dict(id="stories", icon="📖", paths=["stories.html"],
         symbols=[("js/data.js", "PROPHET_STORIES"), ("js/data.js", "STORY_SECTIONS")],
         title="Stories of the Prophet ﷺ",
         blurb="57 stories, every one found in the text of Sahih al-Bukhari or Sahih Muslim before it was written here — none from memory. The classical Arabic words in each story are explained in plain modern Arabic and English, and the eight stories about the Dajjal are linked together as one series, each with its own plain-words box.",
         href="stories.html", cta="Read the Stories"),
    dict(id="judgement", icon="⏳",
         paths=["judgement.html", "js/judgement.js", "js/judgement-closing.js", "js/signs.js", "js/angels.js", "js/grave.js", "js/endmap.js", "js/destination.js"],
         title="The Day of Judgement",
         blurb="Fifteen stages in the order they happen: death and the soul, the grave and its questions, the Trumpet, the standing, the seven under the shade, the settling of what people owe each other, the Records, the Scales, the Bridge, and the gates. 64 referenced points and 54 passages of the Quran.",
         href="judgement.html", cta="See the Stages"),
]

AREAS += [
    dict(id="sunnah", icon="🌿", paths=["sunnah.html", "js/sunnah.js"],
         title="199 Sunnah Practices",
         blurb="The Prophet's practice through an ordinary day — waking, eating, dressing, entering and leaving, sleeping — each with the hadith it comes from and its grading.",
         href="sunnah.html", cta="Browse the Sunnah"),
    dict(id="guidance", icon="🕌",
         paths=["guidance.html", "js/prayer.js", "js/adhkar.js", "js/pillars.js", "js/misunderstood.js", "js/morals.js", "js/marriage.js", "js/inheritance.js"],
         symbols=[("js/data.js", "WORSHIP_STEPS"), ("js/data.js", "COURSES")],
         title="What to Say, and When",
         blurb="The worship reference: how each act of worship is performed, what is said in it, and what to do when something goes wrong — with the evidence beside every ruling.",
         href="guidance.html", cta="Open the Worship Reference"),
    dict(id="hadith", icon="🕋", paths=["hadith.html"],
         symbols=[("js/data.js", "HADITHS"), ("js/data.js", "HADITH_TOPIC_AR")],
         title="Words of the Prophet",
         blurb="Hadith from the two Sahihs, each with its book, its number and the grading the scholars gave it, and the Arabic beside the English.",
         href="hadith.html", cta="Read the Hadith"),
    dict(id="verify", icon="✅", paths=["verify.html", "js/verify.js"],
         title="Check what you were told",
         blurb="Paste a hadith, a claim or a quotation and see whether this site can find it in the sources it carries, and how strong it is.",
         href="verify.html", cta="Check something"),
    dict(id="companions", icon="📚",
         paths=["companions.html", "js/lives.js"],
         symbols=[("js/data.js", "COMPANIONS"), ("js/data.js", "PROPHETS")],
         title="94 Full Life Stories",
         blurb="94 lives told in full rather than in summary — all 65 Companions and all 29 Prophets — from before Islam, through the moment of belief, to what changed in them, their greatest hour, and their death. Every source is listed with its rank.",
         href="companions.html", cta="Read a Full Life"),
    dict(id="daily", icon="🌱", paths=["js/daily.js", "js/wird.js"],
         title="Today's reading",
         blurb="A small daily plan on the home page — read from the Quran, a moment from his life, a sunnah to act on, and what you have started to forget — with the run of days you have kept.",
         href="index.html#daily", cta="Start today"),
]

import re

VERSION_LINE = re.compile(r"\?v=\d{12}")

# A change to the SHELL of a page is not a change to what the page says. The
# asset stamp is rewritten on every commit, and a change to the header or to
# the list of scripts touches all eighteen pages at once — which would make
# every card claim it was worked on today, the very failure this replaces.
STRUCTURAL = re.compile(
    r"<script\s|<link\s|class=\"brand|brand-name|nav-toggle|main-nav|"
    r"data-theme|iitw-theme|iitw-text-scale|reading\.js|nav\.js|resume\.js")

def git(*args):
    """git output is UTF-8; on Windows Python would otherwise decode it as
    cp1252 and throw on the first Arabic character in a commit message."""
    out = subprocess.run(["git"] + list(args), cwd=HERE, capture_output=True,
                         encoding="utf-8", errors="replace", timeout=180)
    return out.stdout or ""

def touched_html(sha):
    """How many pages this commit changed. A change to what a SECTION says
    touches that section; a change that edits eight pages at once is the
    shell — a header, a script tag, the brand — and says nothing about the
    content of any of them."""
    if sha not in TOUCHED:
        names = git("show", "--name-only", "--format=", sha).split()
        TOUCHED[sha] = sum(1 for n in names if n.endswith(".html"))
    return TOUCHED[sha]


TOUCHED = {}
DIFFS = {}

def diff_of(sha, paths):
    """git is asked for the same commit by several areas; ask it once."""
    k = (sha, tuple(paths))
    if k not in DIFFS:
        DIFFS[k] = git("show", "--unified=0", "--format=", sha, "--", *paths)
    return DIFFS[k]


def says_something(diff, path=None):
    """True if a diff changes what a page SAYS — not its asset stamp, and not
    its shell. bump-version.sh rewrites ?v=… in every HTML file on every
    commit, so without this every card would report that it changed today —
    exactly the kind of quietly-wrong date this file exists to end.

    The shell filter is for HTML only. js/reading.js is ABOUT data-theme and
    js/nav.js is about nav.js: run the filter over their own source and the
    work that built them would read as no work at all."""
    cur = path
    for line in diff.splitlines():
        if line.startswith("diff --git "):
            cur = line.split(" b/", 1)[1].strip() if " b/" in line else None
            continue
        if not line or line[0] not in "+-":
            continue
        if line.startswith("+++") or line.startswith("---"):
            continue
        if VERSION_LINE.sub("", line).strip() != line.strip():
            continue            # this line differs only by the stamp
        if cur and cur.endswith(".html") and STRUCTURAL.search(line):
            continue            # the page's shell, not what it says
        if line[1:].strip():
            return True
    return False


# --- the parts of js/data.js -----------------------------------------------
# The stories, the hadith, the lives and the worship steps are four sections
# of ONE 500 KB file. Asking git when js/data.js last changed would date all
# four from whichever was edited last, so each area names its own array and
# only changes INSIDE that array count as work on it.

def hunk_start(line):
    """'@@ -12,3 +14,5 @@' -> 14, the first line of the hunk in the new file."""
    if not line.startswith("@@"):
        return None
    try:
        return int(line.split("+", 1)[1].split(" ", 1)[0].split(",")[0])
    except Exception:
        return None


def find_range(text, name):
    """The first and last line of `const NAME = [ … ];` in this version of
    the file, 1-based."""
    lines = text.splitlines()
    head = "const " + name + " = "
    for i, ln in enumerate(lines):
        if ln.startswith(head):
            for j in range(i + 1, len(lines)):
                s = lines[j].rstrip()
                if s == "];" or s == "};":
                    return (i + 1, j + 1)
            return (i + 1, len(lines))
    return None


def in_symbol(diff, text, name):
    """True if this diff changes something inside that array."""
    rng = find_range(text, name)
    if not rng:
        return False
    lo, hi = rng
    pos = None
    for line in diff.splitlines():
        h = hunk_start(line)
        if h is not None:
            pos = h
            continue
        if pos is None:
            continue
        if line.startswith("+++") or line.startswith("---"):
            continue
        if line.startswith("+"):
            if lo <= pos <= hi and says_something(line, path="js/data.js"):
                return True
            pos += 1
        elif line.startswith("-"):
            # a deletion sits between two lines of the new file; `pos` is close
            # enough to place it inside or outside the array
            if lo <= pos <= hi and says_something(line, path="js/data.js"):
                return True


BLOBS = {}

def blob(sha, path):
    k = (sha, path)
    if k not in BLOBS:
        BLOBS[k] = git("show", sha + ":" + path)
    return BLOBS[k]


def real_change(sha, paths, symbols):
    """Did this commit do work on this area?"""
    html_paths = [p for p in paths if p.endswith(".html")]
    other = [p for p in paths if not p.endswith(".html")]
    look = paths
    if html_paths and touched_html(sha) >= 8:
        # a site-wide pass: only this area's own data files can still count
        look = other
    if look and says_something(diff_of(sha, look)):
        return True
    for path, name in symbols:
        diff = diff_of(sha, [path])
        if diff.strip() and in_symbol(diff, blob(sha, path), name):
            return True
    return False


def pending_change(paths, symbols):
    """Work that is in the tree but not yet committed. Without this a card
    would carry the date of the PREVIOUS commit on the very day its section
    was rewritten — the newest work would look the oldest."""
    dirty_html = [n for n in git("diff", "HEAD", "--name-only").split()
                  if n.endswith(".html")]
    html_paths = [p for p in paths if p.endswith(".html")]
    other = [p for p in paths if not p.endswith(".html")]
    look = other if (html_paths and len(dirty_html) >= 8) else paths
    if look and says_something(git("diff", "HEAD", "--unified=0", "--", *look)):
        return True
    for path, name in symbols:
        diff = git("diff", "HEAD", "--unified=0", "--", path)
        if not diff.strip():
            continue
        try:
            text = io.open(os.path.join(HERE, path), encoding="utf-8").read()
        except Exception:
            continue
        if in_symbol(diff, text, name):
            return True
    return False


def last_change(paths, symbols):
    """The day this area last had real work done on it, or "" if no commit in
    living memory did — an area nobody has touched says nothing rather than
    borrowing the date of a site-wide pass over its page."""
    where = list(paths) + [p for p, _ in symbols]
    log = git("log", "-250", "--format=%H %cs", "--", *where).strip().splitlines()
    for row in log:
        if not row.strip():
            continue
        sha, date = row.split(" ", 1)
        if real_change(sha, paths, symbols):
            return date.strip()
    return ""


TODAY = __import__("datetime").date.today().isoformat()

rows = []
for a in AREAS:
    syms = a.get("symbols", [])
    at = TODAY if pending_change(a["paths"], syms) else last_change(a["paths"], syms)
    row = {k: a[k] for k in ("id", "icon", "title", "blurb", "href", "cta")}
    row["at"] = at
    rows.append(row)
rows.sort(key=lambda r: r["at"] or "", reverse=True)


HEAD = '''/* ============================================================
   RECENTLY ADDED — GENERATED, DO NOT EDIT BY HAND
   ============================================================
   Written by ./build-recent.py, which asks git when each part of the site
   last changed and sorts the cards newest first. bump-version.sh runs it
   before every commit, and the weekly workflow fails if it is out of date.

   The wording lives in build-recent.py and is English here on purpose:
   js/i18n.js carries the Arabic for every one of these strings, the same
   way it does for the rest of the site.
   ============================================================ */
const RECENT = [
'''

TAIL = '''
];

/* The newest six, each with the day it was last worked on. The month names
   and the Arabic digits are written out here on purpose: the helper that
   does this elsewhere lives in js/quran.js, which is 2 MB and is not loaded
   on the home page. */
var RECENT_MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function iitwArDigits(s) {
  return String(s).replace(/[0-9]/g, function (c) {
    return String.fromCharCode(0x0660 + Number(c));
  });
}

function iitwRecentDate(iso) {
  var d = String(iso).split("-");
  if (d.length !== 3) return { en: iso, ar: iso };
  return {
    en: Number(d[2]) + " " + (RECENT_MONTHS[Number(d[1]) - 1] || d[1]) + " " + d[0],
    ar: iitwArDigits(Number(d[2]) + "/" + Number(d[1]) + "/" + d[0])
  };
}

function iitwRenderRecent() {
  var box = document.getElementById("recentGrid");
  if (!box || typeof RECENT === "undefined") return;
  box.innerHTML = RECENT.slice(0, 6).map(function (r) {
    var when = iitwRecentDate(r.at);
    return '<div class="card recent-card">' +
      '<div class="icon">' + r.icon + '</div>' +
      '<div class="recent-when">' +
        '<span class="en-only">Last worked on ' + when.en + '</span>' +
        '<span class="ar-only" dir="rtl">آخر تحديث ' + when.ar + '</span>' +
      '</div>' +
      '<h3>' + r.title + '</h3><p>' + r.blurb + '</p><br>' +
      '<a href="' + r.href + '" class="btn btn-outline btn-small">' + r.cta + '</a>' +
      '</div>';
  }).join("");
  if (window.applyI18n) window.applyI18n();
}

document.addEventListener("DOMContentLoaded", iitwRenderRecent);
'''

js = HEAD + ",\n".join("  " + json.dumps(r, ensure_ascii=False) for r in rows) + TAIL

if "--check" in sys.argv:
    cur = io.open(OUT, encoding="utf-8").read() if os.path.exists(OUT) else ""
    if cur.strip() != js.strip():
        print("js/recent.js is out of date — run ./build-recent.py")
        sys.exit(1)
    print("js/recent.js is current")
else:
    io.open(OUT, "w", encoding="utf-8", newline="").write(js)
    print("wrote js/recent.js with %d cards, newest %s" % (len(rows), rows[0]["at"] if rows else "-"))
