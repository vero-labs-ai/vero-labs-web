lkkokok








# Vero Labs

Website for [Vero Labs](https://github.com/Dark8203), an applied AI studio in Bangalore.
This is the v2 "Field Report" design: a light, editorial, print-inspired system defined by
the two documents in `Requirements/` (`vero-labs-website-content-v2.md` governs all copy,
`vero-labs-build-guide-v2.md` governs all visuals). Those files are the source of truth for
every future edit.

Hand-written static site: no framework, no build step, no bundler. All asset paths are
relative, so the site works unchanged at a GitHub Pages project site, a user site, or a
custom domain.

## Structure

```
/
├── index.html          # the field report: masthead, hero, sections 01-07
├── demo/index.html     # the demo annex: walkthrough, Fig. 1, latency table
├── styles.css          # design tokens + components + responsive + motion states
├── main.js             # progressive enhancement: sticky bar, reveals, schematic draw-in
├── .nojekyll           # tell GitHub Pages to skip Jekyll processing
├── README.md
└── assets/
    ├── favicon.svg     # ink "V·L" monogram
    ├── og.png          # social share image (1200x630), rendered from og-source markup
    ├── og.svg          # editable fallback source for the OG image
    └── audio/          # call clips (see "Dropping in the media assets")
```

## Dropping in the media assets

The demo video and audio clips are first-class content but are not committed yet. The
markup is fully wired; shipping them is a drop-in operation.

### Video

Both `index.html` and `demo/index.html` contain a marked block:

```
<!-- VIDEO EMBED SWAP POINT ... -->
<div class="video-frame">
  <p class="video-placeholder">Recorded walkthrough · video embed pending</p>
</div>
```

Replace the `<p class="video-placeholder">…</p>` line with the real iframe (YouTube
unlisted or Loom), as shown in the comment at each swap point. Keep the `.video-frame`
wrapper: it provides the hairline border and the 16:9 ratio. Nothing may autoplay.

### Audio clips

Drop MP3 files into `assets/audio/` with these exact names:

| File               | Used on            | Status                          |
| ------------------ | ------------------ | ------------------------------- |
| `clip-01.mp3`      | /demo              | cleared                         |
| `clip-02.mp3`      | /demo              | cleared                         |
| `clip-03.mp3`      | /demo              | cleared                         |
| `clip-04.mp3`      | /demo              | cleared                         |
| `clip-05.mp3`      | /demo              | cleared                         |
| `clip-07a.mp3`     | home + /demo       | cleared                         |
| `clip-10.mp3`      | home + /demo       | cleared                         |
| `clip-11.mp3`      | /demo              | cleared                         |
| `clip-06.mp3`      | (after bleep pass) | QUARANTINED until bleeped       |
| `clip-08.mp3`      | (after bleep pass) | QUARANTINED until bleeped       |
| `clip-09.mp3`      | (after bleep pass) | QUARANTINED until bleeped       |

The audio players are currently removed from the rendered pages (no files exist yet, so
they showed dead controls). The full ready-to-paste clip lists live in `AUDIO CLIPS
REMOVED` comment blocks inside the Exhibit A figure on both pages; restore them once the
MP3s land. Clips 06, 08, and 09 must not ship until the bleep pass is done; their `<li>`
items (and the clip-06 transcript swap on the home page) are pre-written in the same
comments, with captions ready. Restore after cleaning, never before.

PII rule from the content file: only cleared audio ships. No customer audio, ever. No
client or sample-tenant names anywhere, including file names.

## Run locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. Check the three breakpoints (360 / 768 / 1280) with the
device toolbar and the "emulate prefers-reduced-motion" rendering option. Without
JavaScript, or with reduced motion on, everything is visible and static.

## Design notes

- "Ink on paper, one red pen": soft paper-white page end to end (`#F8F8F5`, a deliberate,
  owner-approved softening of the build guide's pure `#FFFFFF`; neutral, not cream),
  near-black warm ink, a single redline accent used sparingly (CTAs, links, the live path
  in figures, one number per evidence block). No gradients, no shadows, no dark sections.
- Fonts: Newsreader (display), Instrument Sans (body), IBM Plex Mono (data and labels),
  one Google Fonts request with `display=swap`.
- The two schematics are hand-authored inline SVG in a print style, with wide and tall
  variants swapped by CSS at 720px.
- Section 7 of the build guide is a list of explicit negative constraints. Run it
  literally before any ship, along with the copy guardrails in the content file
  (no em dashes, no emoji, no exclamation marks, no client names, no outcome metrics).

## Regenerating og.png

`assets/og.png` is a 1200x630 render of the OG card with the real web fonts. To
regenerate after edits, recreate the card markup (same tokens as the site), then:

```bash
chrome --headless=new --window-size=1200,630 --hide-scrollbars \
  --virtual-time-budget=10000 --screenshot=assets/og.png og-source.html
```

`assets/og.svg` is an editable fallback source using local serif/mono stacks.

## Deploy (GitHub Pages)

```bash
git add .
git commit -m "Vero Labs site v2"
git push -u origin main
```

Then on GitHub: **Settings -> Pages -> Build and deployment -> Source: "Deploy from a
branch" -> Branch: `main`, folder `/ (root)` -> Save**.

### Custom domain (vero.co.in), later

1. Add a `CNAME` file at the repo root containing one line: `vero.co.in`.
2. Point DNS at GitHub Pages per GitHub's "Managing a custom domain" docs.
3. In Settings -> Pages, set the custom domain and enable "Enforce HTTPS".

All paths are relative, so the build does not depend on the domain.
