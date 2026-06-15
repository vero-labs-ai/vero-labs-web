# Vero Labs Website Build Guide

This file tells you (Claude Code) how to build the Vero Labs portfolio site. The copy lives in
`vero-labs-website-content.md`. Use the two files together. This one owns the look, the layout,
the build, and the deployment.

Read this whole file before writing code. The design direction here is specific and grounded in
real 2026 sites, not a generic template. Follow it.

---

## 1. The brief, in one paragraph

Vero Labs is a two-person applied AI studio in Bangalore. The site has one job: convince a
technical or semi-technical buyer (a CTO, a product head, a founder) that these two people can
build and run a real AI system in production. Position Vero Labs as a general AI services studio
that works across multi-agent systems, voice agents, computer vision, and applied ML. It is not a
voice shop. The buyer is skeptical because the AI category is full of hype and short on proof, so
the whole site answers that skepticism with specificity. The proof on hand is one anonymized,
in-production system that happens to be a voice build: use it as the evidence that this team ships,
not as the brand. Sell it on its engineering rather than on business metrics (there are none to
publish yet, by design).

Single page. Dark. Engineering-led. Lean. Services-broad, with one deep proof.

---

## 2. Current design trends (grounded in real sites, June 2026)

I looked at how AI and technical B2B companies actually present themselves right now. The visual
language for this category has converged, which is useful: it means there is a recognized "this
team is credible" look, and we can adopt its substance while avoiding its clichés. What follows
is drawn from real sites and current trend write-ups, with a note on what we take from each.

What the category converges on (seen across the field):
- Dark mode as the default for AI and developer-facing brands, often with restrained generative
  gradients rather than flat black.
- Monospace type used for technical credibility: labels, data, stack lists, code-like elements.
- Geometric or terminal-style hero sections. The category has explicitly moved away from the
  abstract "glowing brain" illustration, which now reads as dated and generic.
- Real numbers shown prominently: benchmarks, latency, model names. Specificity is the trust
  signal. Anonymous claims and stock metaphors are read as weakness.
- Product or work shown above the fold, not described. For a product company that means a demo or
  screenshot. For a studio with an anonymized client, it means showing the system itself (the
  architecture, the latency budget, the actual stack).
- One primary call to action, repeated down the page, rather than many competing buttons.

Specific sites worth modelling on, and what to take from each:
- Mistral: leads with a single sharp idea of control (its public tagline is "Frontier AI. In your
  hands."), keeps the layout minimal and confident, and uses a bold warm accent plus pixel-style
  techie icons to add personality without losing credibility. Take from it: one sharp thesis up
  top, a warm accent doing the personality work, restraint everywhere else.
- Linear: the site mirrors the product, fast and precise, with clean typography, generous space
  to breathe, and subtle scroll motion. Take from it: rhythm, whitespace discipline, and motion
  that is felt rather than noticed.
- ElevenLabs: product-led and credibility-first. Most of the colour and character is spent on the
  work itself (voices, demos), not on decoration. Take from it: spend our visual budget on the
  one signature element, keep the surrounding chrome quiet.
- Harvey: calm, trust-first, heavy on typographic restraint and space, which suits a high-stakes
  professional buyer. Take from it: the dry, calm confidence appropriate for an enterprise reader.

What we deliberately reject (these are the 2026 AI-design clichés):
- The glowing brain or neural-net hero. Banned.
- The lazy "near-black background plus one acid-green accent" combo. This is itself a default look
  now. We go warmer and more specific (see tokens below).
- Fake dashboards, fake logos, fake testimonials, fake metrics. We have none of these and we will
  not invent them. Our credibility comes from real engineering detail.
- Stock 3D blobs and gradient meshes used as filler.

---

## 3. The chosen design language for Vero Labs

The direction is "engineering instrument": the site should feel like a well-made piece of
technical equipment. Dark, precise, a single warm signal-colour, and monospace doing real work.
The signature is built from how this studio operates (a systems panel showing the service areas
and the scope-to-run pipeline), not from any one domain.

This is grounded in the subject without pinning Vero Labs to voice. The studio's real identity is
"we take an AI problem from spec to a running system." So the hero signature is a compact systems
panel that names the four service areas and shows the delivery pipeline (scope, build, deploy,
run). The detailed voice call loop, with its real stage names and latency numbers, is strong proof
but it is domain-specific, so it lives inside the case study rather than the hero. That keeps the
top of the page about the studio and lets the deep voice detail do its convincing further down.

### Design tokens

Color (deep slate base, warm signal-amber accent, one minimal status-green for "live" dots only):
```
--bg:            #0B0E14   /* base: very dark blue-slate, not pure black */
--surface:       #11151E   /* elevated cards, the case-study block */
--surface-2:     #161B26   /* nested surfaces, code/stack blocks */
--border:        #232A38   /* hairlines, 1px */
--text:          #E8E6E1   /* primary text, slightly warm off-white */
--text-muted:    #8A93A6   /* secondary text, captions, labels */
--accent:        #E9A23B   /* signal amber: CTAs, key numbers, the active pipeline stage */
--accent-soft:   rgba(233,162,59,0.12)  /* accent washes, hover fills */
--live:          #5FD08A   /* status-green: ONLY tiny "live" / connected dots, used sparingly */
```
Gradient: allowed, but quiet. A single low-opacity radial of `--accent` bleeding from behind the
hero signature panel, and nothing else. No full-screen gradient meshes.

Typography (all three are on Google Fonts, so they load fine on GitHub Pages):
```
Display:  "Space Grotesk"   — headlines, the hero, section headings. Technical personality.
Body:     "Hanken Grotesk"  — paragraphs and intros. Clean and readable, not the ubiquitous Inter.
Mono:     "JetBrains Mono"  — labels, eyebrows, data, the stat strip, the stack list, the loop.
```
The monospace is load-bearing here, not an accent. Eyebrows, the kicker labels, every number, the
stack list, the hero systems panel, and the case-study diagram labels are all mono. That is what
sells "we are engineers."

Type scale (desktop; scale down ~15 to 20% on mobile):
```
Hero headline:    clamp(2.5rem, 6vw, 4.5rem), Space Grotesk, weight 600, tight tracking (-0.02em)
Section heading:  clamp(1.75rem, 3.5vw, 2.5rem), Space Grotesk, weight 600
Card heading:     1.25rem, Space Grotesk, weight 600
Body / intro:     1.0 to 1.125rem, Hanken Grotesk, weight 400, line-height 1.6
Eyebrow / label:  0.8rem, JetBrains Mono, weight 500, letter-spacing 0.08em, UPPERCASE, muted
Data / numerals:  JetBrains Mono, accent colour for the headline number
```

Spacing and shape:
```
Section vertical padding:  6rem desktop, 3.5rem mobile
Max content width:         1080px, centered, 24px side gutters
Card radius:               10px
Button radius:             8px
Hairlines:                 1px solid var(--border)
```
Border-radius is small and consistent, not pill-shaped, not zero. Keep it disciplined.

Motion (subtle, respect `prefers-reduced-motion`):
- One orchestrated moment: the hero systems panel types in the four service areas, then the
  delivery pipeline (scope, build, deploy, run) lights stage by stage and settles on a `live`
  status. The case-study voice loop has its own smaller on-scroll reveal further down the page.
- Scroll-triggered fade-and-rise on each section as it enters (IntersectionObserver, 1 line of
  transform, ~400ms). Nothing flies in from the sides.
- Hover: CTAs and cards get a quiet `--accent-soft` fill and a 1px border shift. No scale-bounce.
- Under `prefers-reduced-motion: reduce`, disable the loop animation and the scroll reveals;
  everything is visible and static.

---

## 4. The two signature elements

The site has two custom diagrams and nothing else. Both are real, both are on-brand (slate,
amber, mono), and neither is decorative. The first sits in the hero and is about the studio. The
second sits in the case study and is the deep voice proof.

### 4a. Hero signature: the systems panel (broad, this is the page's identity)

A compact terminal-style panel that says, at a glance, "we take any AI problem from spec to a
running system." This is what keeps the top of the page about an AI services studio rather than a
voice shop.

```
  vero labs // systems
  ─────────────────────────────
  > multi-agent systems
  > computer vision
  > voice agents
  > rag & applied ml
  ─────────────────────────────
  scope → build → deploy → run        ● live
```
Behaviour:
- On load, the four service lines type in quickly (or fade-rise in sequence if you prefer no
  typewriter effect), then the pipeline row (`scope → build → deploy → run`) lights stage by stage
  in amber and finishes on a `--live` green status dot. Then it rests.
- The four service names are in mono `--text`; the pipeline arrows and the active stage are
  `--accent`; the `live` dot is the only place `--live` green appears.
- Panel is a `--surface` card, 1px `--border`, with the single quiet amber radial behind it.
- Mobile: same panel, full width, the pipeline row wraps if needed.

Keep it honest and plain. Do not invent fake log lines, fake metrics, or a fake console feed
scrolling underneath. It is a calm status panel, not a hacker-movie terminal.

### 4b. Case-study signature: the voice call loop (deep proof, lives in the case study)

Inside the "Selected work" case study, build a compact diagram of one conversational turn, using
the real stage names and real latency figures from the deployed system. This is the specific,
hard-to-fake detail that does the convincing once the reader has scrolled into the case study.

Stages, in order, arranged as a horizontal flow (or a loop that returns to the customer):
```
Customer  →  Telephony      →  Speech-to-text   →  In-call LLM     →  Text-to-speech  →  Customer
             Plivo             Deepgram Nova-3      Azure GPT-4.1      ElevenLabs
             ~44-77ms          ~17-50ms             ~1.0-1.7s          ~350-1000ms
             first audio       per utterance        first token        first token
```
Behaviour:
- On scroll into view, a small amber pulse travels left to right through the stages once, lighting
  each node as it passes. Then the "In-call LLM" node keeps a slow ambient pulse, since that is the
  real latency-dominant stage (call this out honestly).
- A small `--live` dot sits near the "Customer" node with a label `live`.
- Each node is a `--surface-2` card with the stage name in mono, the tool in `--text`, and the
  latency in `--accent`.
- Mobile: stack the stages vertically as a timeline rather than a horizontal row.

Both diagrams are pure HTML, CSS, and a few lines of vanilla JS. No animation library, no canvas.

Honesty note to preserve: in the call loop, label the LLM stage as the dominant latency component.
Do not fudge the numbers to look faster. The realism is the point.

---

## 5. Layout (section order and wireframes)

Single page, sections in this order. ASCII wireframes are the intent, not pixel-exact.

### Nav (sticky, slim, transparent over hero then `--bg` on scroll)
```
[ Vero Labs ]                         Work   What we do   How we work   Team   [ Start a project ]
```

### Hero
```
                            VERO LABS · APPLIED AI STUDIO · BANGALORE      (mono eyebrow)

              Production AI systems, built end to end.                     (display, large)

              Vero Labs is a two-person applied AI studio in Bangalore.
              We design, build, and run AI systems for teams that need
              ML in production but do not have an ML team. We work across
              multi-agent, voice, computer vision, and applied ML...       (body subhead)

              [ Start a project ]   See the work →                         (primary + text link)

              multi-agent · voice · computer vision · applied ml           (mono support line)

         ┌──────────────── systems panel (hero signature) ─────────────────┐
         │  vero labs // systems                                           │
         │  > multi-agent systems   > computer vision                      │
         │  > voice agents          > rag & applied ml                     │
         │  ───────────────────────────────────────────────               │
         │  scope → build → deploy → run                      ● live       │
         └──────────────────────────────────────────────────────────────────┘
```

### Stat strip (full-width, on `--surface`, mono numerals)
```
   4               2              end-to-end     < 2s
   service areas   engineers      scope → run    turns in a shipped system
   ────────────────────────────────────────────────────────────────────────
   caption: the one hard number is from a deployed production system...
```

### What we do (2x2 capability grid)
```
   WHAT WE DO
   Four things we build, end to end.
   intro line...

   ┌───────────────────────┐  ┌───────────────────────┐
   │ Multi-agent &         │  │ Computer vision       │
   │ agentic systems       │  │                       │
   │ copy...               │  │ copy...               │
   └───────────────────────┘  └───────────────────────┘
   ┌───────────────────────┐  ┌───────────────────────┐
   │ Conversational &      │  │ RAG & applied ML      │
   │ voice AI              │  │                       │
   │ copy...               │  │ copy...               │
   └───────────────────────┘  └───────────────────────┘
```

### Selected work (the case study, the visual centre of gravity of the page)
Give this the most space. Put it on `--surface`, full-width band, generous padding.
```
   SELECTED WORK
   One engagement that shows how we work: scoped, built, now in production.   (intro line)
   VOICE AI · REAL ESTATE · IN PRODUCTION              (mono kicker, accent)

   A real-time voice agent that qualifies leads
   before a human picks up.                            (display heading)

   For an enterprise real estate client. Live in production.   (muted client line)

   THE PROBLEM            THE PROBLEM copy in a readable column (~60ch)
   WHAT WE BUILT          ...

   HOW IT WORKS
   ┌── 01 Lead in ──┐  ┌── 02 Qualify ──┐  ┌── 03 Structured result out ──┐

   THE CALL LOOP (case-study signature, see section 4b)
   ┌──────────────────────────────────────────────────────────────────────┐
   │  ● live                                                              │
   │  Customer → Plivo → Deepgram Nova-3 → Azure GPT-4.1 → ElevenLabs →   │
   │             ~60ms     ~30ms             ~1.3s          ~600ms        │
   └──────────────────────────────────────────────────────────────────────┘

   UNDER THE HOOD
   ┌──────────────── architecture diagram ────────────────┐
   │  Salesforce → middleware → FastAPI pipeline → Bolna   │
   │       ↑                          │      (Plivo/STT/   │
   │       └── real-time JSON ────────┘       LLM/TTS)     │
   │           (GPT-5.4 post-call extraction)              │
   └───────────────────────────────────────────────────────┘

   DESIGN NOTES            • determinism over RAG  • resume on drop
                           • no lost leads  • native barge-in  • honest scope

   THE STACK               two-column mono list (component → choice)

   "The system is in production... we do not publish conversion numbers yet..." (honest line)
```
The architecture diagram: build it as inline SVG or styled HTML boxes with connecting lines.
Keep it on-brand (mono labels, `--border` lines, `--accent` on the live data path). Do not use a
heavy diagramming library and do not embed an external image. The three custom diagrams (the hero
systems panel, the case-study call loop, and this architecture diagram) are the only "graphics" on
the site, and all three are real.

### How we work (numbered, because it is a real sequence)
```
   HOW WE WORK
   Small team, no handoffs.

   01 Scope        02 Build a pilot      03 Productionise      04 Run it
   copy...         copy...               copy...               copy...
```

### Team
```
   TEAM
   Two engineers.

   ┌── Vishal ──────────────┐   ┌── Alakh ───────────────┐
   │ Engineer / Developer   │   │ Engineer / Developer   │
   │ bio...                 │   │ bio...                 │
   │ github · email         │   │ github · email         │
   └────────────────────────┘   └────────────────────────┘
```
No photos required. If you want avatars, use a simple monogram tile in `--surface-2` with the
initial in mono, not a stock headshot.

### Contact / CTA
```
   CONTACT
   Have a workflow that needs AI in production?
   body...

   [ Email Vishal ]   [ Email Alakh ]

   vishal@vero.co.in · alakh@vero.co.in · Bangalore, India   (mono)
```

### Footer (quiet)
```
   Vero Labs                Work  What we do  How we work  Team        github · github
   Applied AI studio. Bangalore.                                       emails
   ──────────────────────────────────────────────────────────────────────────────
   © 2026 Vero Labs.
```

---

## 6. Component and quality specs

- Nav: sticky, starts transparent over the hero, transitions to `--bg` with a bottom hairline once
  scrolled past ~80px. Collapses to a simple menu button under 720px (a plain toggled list is
  fine, no fancy drawer needed).
- Buttons: primary is `--accent` fill with `--bg` text; secondary/ghost is transparent with a
  `--border` outline and `--text`. Both get `--accent-soft` on hover. Visible focus ring in
  `--accent` for keyboard users.
- Cards: `--surface` (or `--surface-2` for nested), 1px `--border`, 10px radius, hover lifts the
  border to `--accent` at low opacity. No drop-shadow soup; at most one soft shadow on the
  case-study band.
- Numerals everywhere: JetBrains Mono, and the single most important number in a block is
  `--accent`.
- Responsive: 2x2 grids become single column under 720px; the case-study call loop becomes a
  vertical timeline; the hero systems panel stays full width with its pipeline row wrapping; type scales down via the `clamp()` values. Test at 360px, 768px, 1280px.
- Accessibility (this is a quality floor, not optional): semantic landmarks (`header`, `nav`,
  `main`, `section`, `footer`), one `h1` (the hero), logical heading order, visible focus states,
  colour contrast of at least 4.5:1 for body text (the off-white on slate passes; check the muted
  grey on `--bg` and darken text or lighten muted if it does not), `alt` text or `aria-label` on
  the SVG diagrams describing the flow, and full `prefers-reduced-motion` support.
- Performance: this should be tiny. No framework, no jQuery, no analytics by default. Fonts via a
  single Google Fonts link with `display=swap`. Inline the small CSS and JS or keep them as one
  `styles.css` and one `main.js`. Target a sub-100KB page excluding fonts.

---

## 7. Tech approach (deliberately boring, for GitHub Pages)

Build a plain static site: hand-written HTML, one CSS file, one small JS file. No React, no build
step, no bundler, no static-site generator. Reasons:
- GitHub Pages serves static files directly, so a no-build site has nothing to misconfigure (no
  broken base paths, no SPA routing, no CI).
- The whole site is one page of mostly-static content with two small interactive diagrams. A
  framework would be more setup than substance here.
- It matches the "lean, no handoffs" story the site itself is telling.

Use relative asset paths only (`./styles.css`, `./main.js`, `./assets/...`). This is what makes
the site work unchanged whether it is served from a user site at the domain root or a project site
under a subpath, and later from the custom domain. Do not hardcode an absolute base path.

Suggested file structure:
```
/
├── index.html
├── styles.css
├── main.js
├── .nojekyll          # tells Pages to skip Jekyll processing; safe default for a hand-built site
├── README.md          # short: what this is, how to run locally, how it deploys
└── assets/
    └── favicon.svg    # a simple mono "V" or a small amber dot; no stock logo
```

Fonts: one `<link>` to Google Fonts for Space Grotesk, Hanken Grotesk, and JetBrains Mono, with
`display=swap`. Define them as CSS variables (`--font-display`, `--font-body`, `--font-mono`) with
sensible system fallbacks so the page is readable before fonts load.

Local preview before pushing: `python3 -m http.server 8000` from the repo root, then open
`http://localhost:8000`. Check the three breakpoints and the reduced-motion path.

---

## 8. Deploy to GitHub Pages

Two valid options. Pick based on whether this should live at the account root or under a path.

Option A, project site (recommended): repo named `vero-labs` under the Dark8203 account. Served at
`https://dark8203.github.io/vero-labs/`. Cleaner if you may later point `vero.co.in` at it.

```bash
# from the finished site folder
git init
git add .
git commit -m "Vero Labs site"
git branch -M main
git remote add origin https://github.com/Dark8203/vero-labs.git
git push -u origin main
```
Then on GitHub: repo Settings → Pages → Build and deployment → Source: "Deploy from a branch" →
Branch: `main`, folder: `/ (root)` → Save. The URL appears in that same panel after a minute.

Option B, user site: repo named exactly `Dark8203.github.io`. Served at the account root,
`https://dark8203.github.io/`. Same push steps, same Pages setting. Use this only if you want the
site at the bare account root and are not keeping other things there.

Because all paths are relative, the same code works for either option with no changes.

### Custom domain later (vero.co.in)
When the domain is ready:
1. Add a file named `CNAME` (no extension) at the repo root containing one line: `vero.co.in`
   (or `www.vero.co.in`, whichever you point at it). Commit and push.
2. At the domain registrar, for an apex domain add A records to GitHub Pages' IPs and/or an ALIAS,
   or for a `www` subdomain add a CNAME pointing to `dark8203.github.io`. Follow GitHub's current
   "Managing a custom domain" docs for the exact records, since the IPs can change.
3. Back in Settings → Pages, set the custom domain and enable "Enforce HTTPS" once the cert issues.

You said you will handle the domain later, so the build does not depend on it. Just keep paths
relative and this stays a five-minute job whenever you are ready.

---

## 9. Definition of done (check before calling it finished)

- [ ] Single `index.html`, one `styles.css`, one `main.js`, `.nojekyll` present, relative paths only.
- [ ] All copy matches `vero-labs-website-content.md`. No client name, no sample-tenant name.
- [ ] No business-results metrics anywhere. Numbers shown are engineering numbers (latency, fields,
      languages, stack).
- [ ] Reads as a general AI services studio, not a voice shop: hero, stat strip, and capability
      order all lead with breadth; voice appears as one case study, not the headline identity.
- [ ] Hero systems panel renders with the four service areas and the scope-build-deploy-run
      pipeline, runs its load animation once, and degrades to static under reduced motion.
- [ ] Case-study call loop renders with the real stage names and latency figures, reveals on
      scroll, and degrades to static under reduced motion.
- [ ] Case-study architecture diagram is real, on-brand, and built without a heavy library or an
      external image.
- [ ] Tokens followed exactly: slate base, amber accent, green only on the tiny live dots, the
      three specified fonts with mono carrying the data and labels.
- [ ] Responsive and clean at 360px, 768px, 1280px. Grids collapse, diagrams become vertical.
- [ ] Accessibility floor met: one h1, semantic landmarks, visible focus, contrast checked, SVGs
      labelled, reduced-motion respected.
- [ ] No em dashes, no emoji, no fake logos/testimonials/dashboards anywhere.
- [ ] Pushes to GitHub and serves correctly from the chosen Pages option.

---

## 10. Do not (quick reference)

- Do not position Vero Labs as a voice or voice-AI specialist. It is a general AI services studio;
  voice is one case study, not the brand. Do not let voice lead the hero, the stat strip, or the
  capability order.
- Do not use a glowing-brain hero or any abstract AI mascot.
- Do not fall back to plain near-black plus acid-green; use the slate-and-amber tokens above.
- Do not invent metrics, clients, logos, or testimonials.
- Do not name the real estate client or its sample tenant.
- Do not add a framework, build step, or absolute base paths.
- Do not let the three real diagrams turn into decorative filler; they carry the proof, keep them
  honest and legible.
- Do not use em dashes or emoji in any rendered text.
