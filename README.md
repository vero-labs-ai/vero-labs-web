# Vero Labs

Single-page portfolio site for [Vero Labs](https://github.com/Dark8203), an applied AI
studio in Bangalore.

Hand-written static site: one `index.html`, one `styles.css`, one `main.js`. No framework,
no build step, no bundler. All asset paths are relative, so the site works unchanged at any
base URL: a GitHub Pages project site, a user site, or a custom domain later.

## Structure

```
/
├── index.html        # the whole page (semantic HTML, all copy)
├── styles.css        # design tokens + components + responsive + motion states
├── main.js           # progressive enhancement: nav, reveals, hero/loop motion, copy-email
├── .nojekyll         # tell GitHub Pages to skip Jekyll processing
├── README.md
└── assets/
    ├── favicon.svg   # mono "V" mark
    ├── og.png        # social share image used by link unfurls (1200x630)
    └── og.svg        # editable source for og.png; re-export to PNG after edits
```

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. To check the responsive and reduced-motion paths, use
the browser dev tools device toolbar (test 360, 768, 1280px) and the "emulate
prefers-reduced-motion" rendering option.

## Design notes

- Dark slate base with a single warm amber accent. Green is used only for the small "live"
  status dots. Fonts: Space Grotesk (display), Hanken Grotesk (body), JetBrains Mono (labels
  and all data), loaded from Google Fonts with `display=swap`.
- Three custom diagrams, all pure HTML/CSS plus a few lines of vanilla JS: the hero systems
  panel, the case-study call loop, and the architecture diagram.
- Motion is subtle and fully gated behind `prefers-reduced-motion`. Without JavaScript, or
  with reduced motion enabled, every element is visible and static.
- No build step is intentional. The CSS and JS are shipped as-is (a minify pass is the only
  thing a bundler would add, and it is not worth the toolchain for a single page).

Verified with Lighthouse: Performance 99, Accessibility 100, Best Practices 100, SEO 100.

## Deploy (GitHub Pages)

This is a static site; Pages serves it directly. Recommended: a project site.

```bash
git init
git add .
git commit -m "Vero Labs site"
git branch -M main
git remote add origin https://github.com/Dark8203/vero-labs.git
git push -u origin main
```

Then on GitHub: **Settings -> Pages -> Build and deployment -> Source: "Deploy from a
branch" -> Branch: `main`, folder `/ (root)` -> Save**. The URL appears in that panel after
a minute.

Because all paths are relative, the same code also works as a user site (a repo named
`Dark8203.github.io`) with no changes.

### Custom domain (vero.co.in), later

1. Add a `CNAME` file at the repo root containing one line: `vero.co.in`.
2. At the registrar, point the domain at GitHub Pages per GitHub's "Managing a custom
   domain" docs (apex A/ALIAS records, or a `www` CNAME to `dark8203.github.io`).
3. In Settings -> Pages, set the custom domain and enable "Enforce HTTPS" once the cert
   issues.

The build does not depend on the domain; keeping paths relative makes this a five-minute job.
