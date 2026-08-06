> **⚠ This file is a SPLIT COPY and stops at 4 August 2026.**
> The 5–6 August sessions (the Golden Age page, both closing discussions,
> the terms and figures files, and seven live bugs that were fixed) are in
> **Part 8 of `ISLAM-IS-THE-WAY-HANDOFF.md`** in this folder. Read that file
> for the current state — it is the canonical one, and the one CLAUDE.md
> points at.

# Access, publishing and credentials

## Staff logins (in `login.html`, `STAFF_ACCOUNTS`)

| Username | Password | Notes |
|---|---|---|
| `Islam.younis.2026` | `NoorAmmarTamimA'sem` | **Main admin.** Only this account sees Analytics. |
| `Teacher.IITW.2026` | `Bayan#Huda_2026!Teach` | Teacher account, no analytics. |

The owner wants the first account kept as the main one. More accounts can be
added to the same array.

**Security note:** this is a front-end check. The passwords are readable in the
page source by anyone who opens developer tools. This is disclosed on the login
page. It keeps casual visitors out but is not real protection.

## GitHub

- Organisation: **IslamIsTheWay**
- Repo: **IslamIsTheWay/IslamIsTheWay.github.io**
- Owner's personal account: **Ammar-052** (admin of the org)
- Publishing = `git push origin main`. GitHub Pages serves `main` directly.

### Tokens — important

The staff dashboard's "Publish Changes" needs a GitHub token pasted into the bar
at the bottom each time. It is never stored.

**Only classic tokens work.** Fine-grained tokens (`github_pat_…`) were tried
twice and both were rejected with 403 for the organisation repo. Use:

- github.com/settings/tokens/new → **Tokens (classic)** → scope **`repo`**
- The token starts with **`ghp_`**

Several tokens were pasted into the chat during development and **should all be
revoked**. The owner should generate a fresh classic token and keep it private.

## SEO / indexing

- **Bing** — verified and indexed. `BingSiteAuth.xml` must stay at the site root.
  Verification code: `A0F73C20D285C96BE80BF6533C2B936C`.
- **Google Search Console** — **not set up yet.** To do it: add the property
  `https://islamistheway.github.io/`, choose the HTML-tag method, and add the
  `google-site-verification` meta tag to `index.html`.
- `sitemap.xml` — add every new page here.

## Contact

- Site email shown publicly: `contact@islamistheway.com`
- Owner's real email (receives feedback form + trial requests):
  `ammarwalidyounis@gmail.com`

## Third-party accounts

None required. Every external service in use is free and unauthenticated
(Quran API, everyayah audio, hadith API, Jitsi, MyMemory, abacus counters).

The only thing needing the owner's credentials is **Google Sign-In**, which
requires an OAuth Client ID from their own Google Cloud Console — see
`04-known-issues.md`.
</content>
