# Vero Labs site refresh: plan and copy

> **Changes after review, 30 Oct 2026. These override the copy below; the live HTML is the reference.**
> - "What we build" is now "Built so far": four things actually built, with no categories or service list, and the title "Some things we've built. We can build a lot more."
> - The AI quality and photo check is removed because it has not been built. The data-labelling tool for vision AI takes its place.
> - The Client row is removed from each case summary, and the FAQ no longer lists client types.
> - Release 2 service pages are on hold, since they conflict with this positioning.

Branch: `site-refresh` · Status: **awaiting review** · Written 29 Oct 2026

This document has three parts:

- **Part A** covers what I found in the repo.
- **Part B** lists the questions I need answered before I build.
- **Part C** is the plan and **all new home-page copy in one place**.

Read Part C as the page will read, top to bottom. Phase 2 pages are outlined at the end, and I'll write their full copy after the home page is approved.

Copy conventions used below:
- `mono:` means IBM Plex Mono label text.
- `H1/H2/H3` are the real heading levels.
- `> ...` is body copy, exactly as it will ship.
- `[TODO: Alakh]` means I need a fact from you. I won't invent one. The full list is at the end.
- Existing guardrails I kept from `Requirements/vero-labs-website-content-v2.md`: no em dashes, no emoji, no exclamation marks, no client names, no invented numbers.

---

## Part A. What I found

### A1. File structure

```
vero-labs-web/            (git repo, remote git@github.com:vero-labs-ai/vero-labs-web.git)
├── CNAME                 vero.co.in (untouched)
├── index.html            the whole home page, all copy inline (509 lines)
├── demo/index.html       "Demo Annex" page (263 lines)
├── styles.css            tokens, components, responsive, motion (963 lines)
├── main.js               46 lines of progressive enhancement
├── assets/               favicon.svg, og.png, og.svg, audio/raw-call-01.aac
├── Requirements/         v2 content deck + v2 build guide (the old source of truth)
├── README.md, LICENSE, .gitignore
```

There's no build step, no package.json, no framework and no `.github/` folder. All asset paths are relative.

### A2. How it builds and deploys

- It's **GitHub Pages, "Deploy from a branch", `main` / root.** Here's the evidence:
  - vero.co.in answers with `server: GitHub.com`.
  - The apex A records are GitHub's four Pages IPs (185.199.108-111.153), and `www` is a CNAME to `vero-labs-ai.github.io`.
  - There are no workflows.
  - The live page's ETag size (0x83d3 = 33,747 bytes) matches `index.html` on `main` byte for byte.
  - I couldn't read the Pages settings directly because the `gh` CLI isn't installed, but all of the above points the same way.
- **There's no `.nojekyll` file**, although the README says there is. So GitHub runs Jekyll over the repo on every publish. Plain HTML passes through unchanged, but Markdown files get turned into public pages (see B1).
- `CNAME` contains exactly `vero.co.in`. I won't touch it.
- New pages as `whatsapp-agents/index.html` will serve at `vero.co.in/whatsapp-agents/`, and Pages redirects the version without a slash. No publishing change is needed.

### A3. How the line-drawing works today

- **Where:** CSS in `styles.css` (the "Motion" block at the end) plus 10 lines in `main.js`.
- **How:** Every red stroke in a diagram has `class="live"` (or `"mark"` for the circled bottleneck) and `pathLength="1"`. With JS on, CSS sets `stroke-dasharray: 1; stroke-dashoffset: 1`, which hides the line. When the `<figure class="schematic">` scrolls into view, an `IntersectionObserver` adds `.is-drawn`. Then the offset transitions to 0 over 600 ms, and the arrowheads (`.live-fill`) fade in at 650 ms.
- **Trigger:** It runs once per figure, when about 5% of it enters the viewport. Strictly speaking it's *scroll-triggered*: it plays once as the figure arrives, rather than following the scroll position.
- **Reduced motion and no JS:** Everything shows fully drawn. Both cases are handled correctly today.
- **Reusability:** Very high. Any new inline SVG inside `<figure class="schematic">` that uses `.live` / `.live-fill` / `.mark` with `pathLength="1"` gets the animation for free, with no JS changes. Each diagram is drawn twice, as a wide SVG and a tall SVG, and CSS swaps between them at 720 px.
- **What I'll add (small):**
  - (a) `figure.schematic[data-draw="load"]`, so the hero diagram draws on page load rather than on scroll.
  - (b) A `data-draw="scroll"` mode for the line that joins the four process steps. Its drawn length follows how far you've scrolled through the section, using one passive scroll listener (about 15 lines). Reduced motion keeps it fully drawn.
  - (c) A staggered delay (`--draw-delay`), so the five small "What we build" diagrams don't all fire at once.

  Nothing changes the layout, so the animation causes no layout shift.

### A4. Where the copy lives

All visible copy is hand-written inline in `index.html` and `demo/index.html`. The v2 copy deck in `Requirements/` described it, but this refresh replaces that deck for copy. Once you approve this doc, I propose moving the approved copy into `Requirements/vero-labs-website-content-v3.md` and marking v2 as superseded. The v2 build guide still governs visuals, with the exceptions noted in C0.

### A5. Baseline

- Screenshots at 390 px and 1440 px (full page plus each section, for home and /demo) are in `../screenshots/baseline/`. That's outside the repo, so it never gets published.
- Neither page has horizontal overflow at 390 px today.
- I used the Chromium already in `~/Library/Caches/ms-playwright` and ran no `playwright install`.

### A6. Small things I noticed

- `README.md` starts with a stray line, `lkkokok`, followed by blank lines.
- The README says a `.nojekyll` file exists, but it doesn't.
- The schema telephone in the brief (+91 80 6535 5106) is the **live AI demo agent's number**. Calling it reaches a bot, not you. It stays on the page as the demo number only (see B2).
- The GitHub repo `vero-labs-ai/vero-labs-web` is **public**, so anything committed is readable on github.com, whatever the website serves (see B1).

---

## Part B. Decisions

Updated 29 Oct 2026 after Alakh's answers.

**B1. Internal docs off the public site. Decided: hide them from vero.co.in. Done on `site-refresh`.**
- `_config.yml` excludes `Requirements/`, `docs/` and `README.md` from the Jekyll build, so vero.co.in stops serving them once this branch is deployed.
- The test caller's name is removed from the HTML comment in `index.html` and from the v2 content doc.
- The repo stays public on GitHub. Alakh confirmed this is fine for now.
- Search Console shows the Requirements page was never indexed, so no removal request is needed.

**B2. Phone numbers. Decided.**
- No phone number in the new copy or in the JSON-LD.
- The demo agent's number stays in the Demo section as it is today.

**B3. Timelines. Decided: no numbers, just say we're fast.**
- No "2 weeks", "2-6 weeks" or "typical weeks" anywhere.
- The H1 keeps "Built in weeks", because it's the approved headline and not a specific promise. If you want even that gone, the alternative is "Custom AI for your business. Built fast. Run in production."
- Non-project facts stay: the 30-minute scope call, the Blinkit cadence (every 10 minutes, 9 AM to 10 PM), and "going live in November 2026".

**B4. Placeholders.**
- The WhatsApp link is on hold until there's a number, and nothing is added for now.
- The Cloudflare snippet goes in as a ready-to-enable comment until you send the token.
- No Google or Bing verification tags: both are already verified.
- Setup steps for all three are in `docs/indexing-and-analytics.md`.

**B5. Analytics. Decided: Cloudflare Web Analytics.** It's free, cookieless and needs no banner. Google Search Console and Bing Webmaster Tools are added for search data. GA4 was considered and set aside, because it uses cookies and so needs a consent banner.

**B6. Sharing the header and footer across Phase 2 pages. Still open.**
- My recommendation is a tiny stdlib Python script, `tools/sync_partials.py`, that copies the header and footer from `partials/` into every page between `<!-- partial:header -->` markers.
- The output is plain committed HTML, and publishing doesn't change.
- I'll ask again when Phase 2 starts.

**B7. Facts only you have.** These are in the TODO table at the end.

---

## Part C. Plan and copy

### C0. Design approach (what changes, what stays)

- **Stays:** the masthead, "No. 01 · Field Report · 2026", the fonts, the palette, hairline rules, margin notes, Exhibits, Figs, the redline schematics, "Hand-built; no site builder", and the /demo page.
- **Two layers everywhere:**
  - The executive layer is always visible: mono kicker, plain H2, a 1-2 sentence answer, a figure, and an outcome caption.
  - The engineering layer is a native `<details>` labelled **"Technical details"**, typeset as an evidence block, plus small mono annotations on the figures. The content inside `<details>` is ordinary static HTML, so crawlers and chatbots still read it.
- **"What we build" is not a card grid.** The v2 build guide bans icon cards. I'll set the five entries as an editorial list: hairline rules, a 2-column layout on desktop, and a small hand-drawn redline schematic per entry instead of an icon. No boxes or shadows.
- **Section numbering** becomes 01-07: What we build, Demo, Work, Process, FAQ, Studio, Contact. The colophon stays unnumbered.
- **Figures and exhibits keep running numbers in page order:**
  - Fig. 1 is the hero.
  - Figs. 2-3 are the real-estate case.
  - Fig. 4 is WhatsApp.
  - Fig. 5 is Blinkit.
  - Exhibits A-B are in the Demo section.
  - Exhibits C-E are in the real-estate case.
  - Exhibit F is the Blinkit slot map.
  - The small "What we build" diagrams are unnumbered sketches.
  - /demo keeps its own Fig. 1 because it's a separate document.
- **Keep the existing section IDs** (`#demo`, `#work`, `#method`, `#studio`, `#contact`, `#what-we-do`), even where the visible label changes. Google already shows these links in results (Search Console, 30 Oct 2026), so renaming them would break them.
- **Navigation** (masthead contents and sticky bar): `Build · Demo · Work · Process · FAQ · Contact`. "Studio" drops out of the nav to keep it on one line at 390 px.

### C1. `<head>` (home)

- `<html lang="en-IN">`
- **Title (59 chars):** `Vero Labs · Custom AI Development Studio · Bangalore, India`
- **Meta description:** `Vero Labs is an applied AI studio in Bangalore, India, offering custom AI development for businesses: WhatsApp agents, voice agents and AI quality checks.`
- **Canonical:** `https://vero.co.in/`
- **OG title:** `Vero Labs · Custom AI for your business, built in weeks`
- **OG description:** `An applied AI studio in Bangalore, India. Tell us the tool you need; we build it on your data and keep it running.`
- **OG image:** `https://vero.co.in/assets/og.png` (absolute, because some scrapers ignore relative OG URLs). The current og.png carries the old headline. Re-rendering it with the new H1 is in Phase 1.
- Twitter card tags to match.
- No Google or Bing verification tags: both are already verified.
- Cloudflare Web Analytics snippet, commented out and ready (B4).
- **JSON-LD `ProfessionalService`:**
  - name "Vero Labs", url, description
  - areaServed India
  - address with addressLocality Bengaluru, addressRegion Karnataka, addressCountry IN
  - email alakh@vero.co.in plus vishal@vero.co.in
  - no telephone (B2)
  - founders Alakh Agrawal and Vishal Srivastava
  - knowsAbout: WhatsApp AI agents, quick-commerce rank and ad tracking, process automation, computer vision quality checks, voice AI agents, CRM and ERP integration
  - sameAs the Zapier partner page and github.com/vero-labs-ai
  - The LinkedIn entry is added once you send the URL. A placeholder string would make the schema invalid.
- **JSON-LD `FAQPage`:** generated from the FAQ in C8, with the same wording.

### C2. Masthead

- `mono:` `VERO LABS` · `Applied AI Studio · Bangalore, India`
- `mono:` `No. 01 · Field Report · 2026` · `Contents: Build · Demo · Work · Process · FAQ · Contact`
- **Sticky bar:** `Vero Labs` · the same contents · `Start a project`

### C3. Hero

`mono:` kicker above the H1:
> We build AI systems that survive contact with production.

**H1:**
> Custom AI for your business. Built in weeks. Run in production.

Intro:
> Vero Labs is an applied AI studio in Bangalore, India. We do custom AI development: you tell us the tool you need, whether that's a WhatsApp agent, a monitoring dashboard or an AI quality check, and we build a working version on your data, fast, then keep it running.

Buttons: **Start a project** (primary, goes to #contact) · **See what we've built ↓** (text link, goes to #work)

`mono:` tags:
> whatsapp agents · marketplace tracking · process automation · ai quality checks · voice agents

**Fig. 1.** This is a small schematic that draws on load. The four nodes are joined by the redline: `Your idea` → `Working pilot` → `Live system` → `We run it`. It sits beside the intro on desktop and under the buttons on mobile.

Caption:
> Fig. 1 · How a project runs. A working pilot on your data, then a live system, then we keep it running.

SVG `<title>` / `<desc>`: "How a Vero Labs project runs: your idea becomes a working pilot on your data, then a live system, which Vero Labs keeps running."

### C4. 01 · What we build

`mono:` `01 · What we build`

**H2:**
> AI tools built around a problem you already have.

Intro:
> Our AI services fall into five kinds of custom tools. Find the problem that sounds like yours, and you will see what we would build.

Margin note:
> Four of the five come from client work shown below. The fifth uses our computer vision work.

Each entry has these parts, in order:

- a mono number
- an H3 naming the tool
- the problem in the owner's words (Newsreader italic)
- what we build
- the outcome
- a link
- a 3-4 node sketch drawn on scroll, in the same redline style

**Entry 1**
- `mono:` `01`
- **H3:** WhatsApp agents for routine chats
- *"My team spends hours on repetitive WhatsApp chats with suppliers or customers."*
- > We build an AI agent that handles the routine conversations, like quotes, price negotiation and follow-ups, and passes the tricky ones to a person on your team.
- > Outcome: your team handles the exceptions, not every message.
- link: `See the case ↓`
- Sketch: `Trader or customer` → `Agent` → `Your team, for edge cases`

**Entry 2**
- `mono:` `02`
- **H3:** Blinkit, Zepto and Instamart tracking
- *"I don't know where my products and ads show up on Blinkit, or when competitors outbid me."*
- > We track where your products and ads rank for the searches that matter, at the exact delivery addresses you choose, every few minutes. You get a live dashboard and an alert when your rank drops.
- > Outcome: you see what a shopper sees, all day, before you spend more on ads.
- link: `See the case ↓`
- Sketch: `Keywords × addresses` → `Check every 10 min` → `Alert`

**Entry 3**
- `mono:` `03`
- **H3:** Turn a manual process into a tool
- *"This runs on Excel, WhatsApp and people's memory."*
- > We build a small app or workflow that does the job in one place and plugs into the systems you already use: your ERP, CRM or Google Sheets.
- > Outcome: the process runs the same way every time, and it no longer depends on one person remembering.
- link: `See the case ↓` (goes to the refurbisher's labelling tool)
- Sketch: `Excel + WhatsApp` → `One tool` → `Your ERP or CRM`

**Entry 4**
- `mono:` `04`
- **H3:** AI quality and photo checks
- *"We inspect things by eye, and it's slow and inconsistent."*
- > We build computer vision (software that checks photos) that looks for defects, checks quality or confirms identity, and sends unclear cases to a person to review.
- > Outcome: every photo gets the same check, and your team only looks at the unclear ones.
- link: `Talk to us about it ↓` (no public case yet, so the link goes to contact)
- Sketch: `Photo` → `Check` → `Pass / send for review`

**Entry 5**
- `mono:` `05`
- **H3:** Phone agents that call new leads
- *"Leads go cold before anyone calls them."*
- > We build a voice agent that calls each new lead, asks your qualifying questions in English or Hindi, books the next step and updates your CRM.
- > Outcome: every new lead gets a first call, and your sales team spends its time on the ones ready to talk.
- link: `See the case ↓`
- Sketch: `New lead` → `Call, English or Hindi` → `CRM updated`

In Phase 2, each H3 also links to its own page ("More on WhatsApp agents →").

### C5. 02 · Demo (moved after "What we build")

`mono:` `02 · Demo`

**H2:**
> Hear an agent call a lead.

Intro:
> Hear a real agent call a lead, ask the qualifying questions and update the CRM. This is a recorded walkthrough of a phone agent we built and run in production.

**Exhibit A** (recorded walkthrough): unchanged, same YouTube embed.

**Exhibit B** (one call, unedited): unchanged.
- Caption, lightly edited:
  > A different agent on a similar setup: it takes inbound calls for a study-abroad counselling service. Different script, different personality. One call, start to finish, with nothing cut.
- Callout, unchanged: `Or call this agent yourself, live: +91 80 6535 5106`

Margin note, unchanged:
> Every clip on this page is from an internal test call. No customer audio, ever.

New link under the exhibits, because no page links to `/demo/` today and Google has never found it:
> See the full demo →

### C6. 03 · Selected work

`mono:` `03 · Selected work`

**H2:**
> Three systems we have built, and where each one stands.

Intro:
> One is live, one goes live next month, one is a pilot. Each starts with a one-box summary. The technical details are underneath.

The summary box is an evidence block, laid out as a mono two-column `<dl>`. Its rows are: CLIENT · PROBLEM · WHAT WE BUILT · STATUS. (The brief's TIME TO FIRST VERSION row is dropped per B3.)

#### Case 1. Real-estate lead qualification

**H3:**
> A phone agent that qualifies every new lead before a salesperson calls.

`mono:` `Live in production`

Summary box:

| | |
|---|---|
| CLIENT | An enterprise real-estate developer |
| PROBLEM | Hot leads went cold while tele-callers worked through the queue. |
| WHAT WE BUILT | A phone agent that calls each new lead, asks the qualifying questions in English or Hindi, books site visits and updates Salesforce. |
| STATUS | Live in production |

**The problem** (existing copy, simplified):
> Real-estate developers get warm leads in volume: people who fill an enquiry form from an ad or a landing page. Interest is highest in the first few minutes, but tele-callers cannot call every lead at once, so hot leads cool while the team works through the queue.
>
> The first call is also the same eight to ten questions every time: still interested, budget, timeline, own use or investment, loan or self-funded, ready for a site visit. It is repetitive work that burns callers out, and the answers rarely land in the CRM in a form anyone can search.

**What we built:**
> An AI phone agent that calls each warm lead automatically, talks naturally in English or Hindi, asks every qualifying question, books a site visit when the lead is ready, and writes the answers into Salesforce as soon as the call ends. Salespeople then get only the hot leads, with the full context.

Pull quote, kept:
> A first-touch filter, not a replacement for the sales team.

**Fig. 2.** This is the existing call-turn schematic, unchanged. The stack names stay as small grey labels inside the figure, which is the engineering annotation.
> Fig. 2 · One back-and-forth on a call. The agent replies in about 1.5 to 2.5 seconds and covers the pause with a natural filler, so the caller is never left in silence.

Margin note, kept:
> The slowest step is the AI model thinking. We say so, and design around it.

**Exhibit C** (transcript): kept as it is, with the same caption.

**Fig. 3.** This is the existing architecture schematic, unchanged.
> Fig. 3 · How it fits your CRM. Leads flow in from Salesforce. After each call, the answers go back into Salesforce straight away, with a backup route so no lead is lost.

**How we made it reliable** (the old "Design notes", rewritten for owners):
> **Consistent answers.** The agent answers project questions from a fixed fact sheet for each call, so two callers asking the same thing get the same answer.
>
> **Picks up after a dropped call.** If a call drops, the agent calls back, skips the questions already answered and carries on.
>
> **No lost leads.** Answers are sent to the CRM the moment a call ends. If that fails, a backup check collects them. In testing, the backup fired when the link briefly failed, and no lead data was lost.
>
> **Lets the caller interrupt.** If the caller starts talking, the agent stops and listens.
>
> **Knows its limits.** It qualifies and books. It does not negotiate, and when it doesn't have the answer, it says a person will follow up instead of making one up.

**Technical details** (`<details>`, closed by default):
- Stack: Plivo (telephony), Deepgram Nova-3 (speech-to-text), Azure GPT-4.1 (in-call LLM), ElevenLabs (text-to-speech), Bolna (voice orchestration), Node.js middleware, FastAPI pipeline, GPT-5.4 post-call extraction, Salesforce.
- The original design notes:
  - Determinism over RAG. Project knowledge goes in as structured per-call context instead of a vector store. An earlier retrieval experiment was dropped on purpose.
  - Native barge-in, with endpointing tuned to 100 ms.
  - Real-time push with a polling fallback through the middleware.
- **Exhibit D**, the latency table, moved here unchanged:
  > Everyone says real-time. We show the budget.
- **Exhibit E**, the JSON payload, moved here unchanged:
  > About fifty structured fields across fourteen blocks, per call, pushed to Salesforce in real time.

Honest line, kept:
> The system is in production and we are scaling it carefully. We are not publishing conversion or lift numbers yet, because a real number needs a real cohort behind it. What we can show you is the engineering, and we are happy to walk through any of it.

#### Case 2. WhatsApp purchase agent

**H3:**
> A WhatsApp agent that handles routine purchase chats with traders.

`mono:` `In delivery · going live November 2026`

Summary box:

| | |
|---|---|
| CLIENT | An electronics refurbisher in Bangalore, about 300 people |
| PROBLEM | Buyers negotiate prices with traders one chat at a time on WhatsApp. |
| WHAT WE BUILT | An AI agent that handles routine purchase chats using the company's price sheet and negotiation rules, and sends unusual deals to a buyer to approve. Plus a data-labelling tool inside their ERP, to prepare for AI quality checks. |
| STATUS | Demoed to the client. Going live in November 2026. |

**The problem:**
> The company buys used electronics from traders. Each deal is a WhatsApp conversation: the trader offers stock, a buyer checks the price sheet, and they go back and forth on price. Buyers handle these chats one by one, and most of them follow the same pattern.

**What we built:**
> An AI agent that runs the routine purchase chats on WhatsApp. It reads the company's price sheet, follows the negotiation rules the buyers set, and passes any deal outside those rules to a buyer to approve. Agreed deals go into the company's ERP.
>
> Alongside it, we built a labelling tool inside the same ERP, where staff tag [TODO: Alakh, what gets labelled, e.g. product photos] so a future AI quality check has examples to learn from.

**Fig. 4.** New schematic: `Trader on WhatsApp` → `Agent` (with the annotation "reads price sheet · follows negotiation rules") → `Buyer approves edge cases` → `ERP`. The redline marks the routine path that bypasses the buyer.
> Fig. 4 · One purchase chat. The agent handles the routine back-and-forth. A buyer steps in only for deals outside the rules, and every agreed deal lands in the ERP.

Margin note:
> The agent never agrees a price outside the rules your buyers set.

That note needs your confirmation that it's true. `[TODO: Alakh]`

**Technical details** (`<details>`):
> Stack and integration notes: [TODO: Alakh]. Labelling tool: [TODO: Alakh].

Honest line:
> This system goes live in November 2026. We will publish what it does in production once it has run long enough to measure.

#### Case 3. Blinkit rank and ad tracking

**H3:**
> Showing a sweets brand where its products and ads really appear on Blinkit.

`mono:` `Pilot`

Summary box:

| | |
|---|---|
| CLIENT | A regional sweets brand |
| PROBLEM | Heavy Blinkit ad spend at festive peaks, with no view of where its products and ads actually appeared. |
| WHAT WE BUILT | Tracking of product rank and ad positions for chosen searches, at exact delivery addresses, every 10 minutes from 9 AM to 10 PM, with a live dashboard and rank alerts. |
| STATUS | Pilot |

**The problem:**
> On Blinkit, what a shopper sees depends on what they search and where they are. The brand spends heavily on ads around festivals, but it could not see where its products and ads actually showed up, address by address, through the day.

**What we built:**
> Tracking for the searches the brand cares about, at the exact delivery addresses it chose. Every 10 minutes from 9 AM to 10 PM, we record where each product ranks and which ad slots it holds. A live dashboard shows the picture, and an alert goes out when a rank drops.

**Fig. 5.** New schematic: `Keywords × addresses` → `Scheduled checks · every 10 min` → `Rank and ad positions` → `Dashboard and alerts`.
> Fig. 5 · Every 10 minutes, for each search at each address, we record where the brand's products and ads appear, and alert the team when a rank drops.

**Exhibit F** (from our own market scan, not client data). This is a one-row strip of 30 numbered result slots, with slots 1, 5, 9, 13, 17, 21, 25 and 29 marked in redline. It's also a real `<table>` under the strip for screen readers and crawlers.
> Exhibit F · Blinkit sponsored slots sit at fixed positions (1, 5, 9 and so on, up to 29). The top two slots barely move all day; most churn happens lower down.

Margin note:
> What it means for a brand: watch the lower slots. That is where positions change during the day.

**Technical details** (`<details>`):
> About 80 checks a day for each search at each address (every 10 minutes, 9 AM to 10 PM). Stack and alerting notes: [TODO: Alakh].

### C7. 04 · How working with us works

`mono:` `04 · Process`

**H2:**
> A working tool on your data before you commit to more.

Intro:
> Four steps. You see a working version on your own data before you decide to go further, and you know the price before we start.

There are four numbered steps. A redline runs down the left edge through the step numbers and draws as you scroll through the section (A3 b).

1. **Scope call (free, 30 minutes).**
   > We agree the smallest version that proves value, and a fixed price.
2. **Build Sprint.**
   > A working version on your data. Fixed price, agreed before we start.
3. **Make it production-ready.**
   > We add what a live system needs: handling for things going wrong, monitoring, and connection to your systems.
4. **We run and improve it.**
   > Monthly, or we hand it over to your team. You own the code you paid for.

There are two boxes beside the steps, in the margin column on desktop and stacked below on mobile.

**What we need from you**
> - A decision-maker for 30 minutes a week
> - Sample data
> - Access to the system it plugs into

**What you get at the end of the Build Sprint**
> - A working tool
> - A demo on your real data
> - A fixed quote for going live

### C8. 05 · FAQ (new)

`mono:` `05 · FAQ`

**H2:**
> Questions owners ask us.

The FAQ uses native `<details>` per question with all answers in the static HTML. The same text goes into `FAQPage` JSON-LD.

1. **What kind of businesses do you work with?**
   > Mostly owner-led companies in India that already know the tool they want. Recent work includes an electronics refurbisher, a consumer food brand and a real-estate developer. You do not need an AI plan, just a clear problem that costs your team time or money.

2. **How much does it cost, and how long does it take?**
   > Every project gets a fixed price after a free 30-minute scope call, and you know it before we start. We move fast: you see a working version on your own data before you commit to the full build.

3. **Do we need a tech team?**
   > No. We need one person who knows the process and can make decisions, for about 30 minutes a week. If you do have a tech team, we work with them and give them everything they need.

4. **Who owns the code and the data?**
   > You own the code you paid for. Your data stays yours, and we use it only to build and run your tool.

   That last promise needs your confirmation. `[TODO: Alakh]`

5. **Can it work with our ERP, CRM, Excel or WhatsApp?**
   > Usually, yes. We have connected tools to Salesforce, to a company's own ERP and to WhatsApp. If your system can export data or offers a way to connect, we can plug into it. We check this on the scope call.

6. **What happens after it's built?**
   > You choose. We run and improve it for a monthly fee, or we hand it over to your team with the code and documentation.

7. **You're two people. What if one of you is unavailable?**
   > Both of us know every project. Everything is documented as we build, and you have the code. If one of us is away, the other carries on.

8. **Do you work outside Bangalore, or outside India?**
   > Yes. We work remotely with businesses across India and abroad. Calls and reviews happen over video, and we are happy to meet in person in Bangalore.

### C9. 06 · The studio

`mono:` `06 · The studio`

**H2:**
> Two engineers. You talk to the people building it.

Intro (existing line, plus one new sentence):
> Vero Labs is Vishal and Alakh. We both write the code and we both own delivery. A small team is an advantage for you: you talk directly to the engineers building your tool, with no account managers in between.

The bios stay as they are.

- Full names in schema only: Vishal Srivastava, Alakh Agrawal.
- On the page: Vishal, Alakh. **Do you want full names visible?** Visible full names help chatbots connect founders to the studio, so I recommend it.

### C10. 07 · Contact

`mono:` `07 · Contact`

**H2:**
> Tell us the tool you have in mind.

Body:
> Write to us with three things: what your business does, what you want built, and by when. We reply with a straight answer on whether we can help, and if we can, a time for the free scope call.

That sentence is a soft promise. If you have a typical reply time, give it to me: "within one working day" is useful copy. `[TODO: Alakh]`

Buttons: **Email Vishal** (primary) · **Email Alakh** (secondary). Both are pre-filled `mailto:` links.
- Subject: `Project enquiry from vero.co.in`
- Body:
  ```
  What does your business do?

  What do you want built?

  By when?

  How did you hear about us?
  ```

Mono line:
> vishal@vero.co.in · alakh@vero.co.in · Bangalore, India

WhatsApp: on hold until there's a number (B4). Nothing is added for now.

### C11. Colophon

> Vero Labs · Applied AI studio · Bangalore, India.
> `What we build · Demo · Work · Process · FAQ · Contact`
> github.com/vero-labs-ai · github.com/Dark8203 · github.com/alakhagr · Zapier partner directory
> Set in Newsreader, Instrument Sans, and IBM Plex Mono. Hand-built; no site builder.
> © 2026 Vero Labs.

In Phase 2 the colophon also gets a "Services" line linking the five problem pages and three case pages.

### C12. /demo page (light touch)

- New nav labels and the new masthead descriptor.
- Unique title: `Vero Labs · Voice Agent Demo · Bangalore, India`.
- Meta description: `Hear a phone agent built by Vero Labs, an applied AI studio in Bangalore, India: a recorded walkthrough, an unedited call, and the measured latency.`
- `lang="en-IN"` and canonical `https://vero.co.in/demo/`.
- The CTA mailto gets the same template as C10.
- Body copy stays as it is.

### C13. Site files

- **`robots.txt`:** allows all, and explicitly names Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot and Google-Extended. It points to `https://vero.co.in/sitemap.xml`.
- **`sitemap.xml`:** `/` and `/demo/` with `lastmod`. The Phase 2 URLs are added when those pages exist.
- **`llms.txt`:** draft in `docs/launch-checklist.md`.
- **`404.html`:** a Field Report-styled not-found page with links back to the main sections.
- **Page source clean-up:** the internal notes in HTML comments (clip quarantine, swap instructions) move to `Requirements/`, because anyone can read them with View Source.
- **Video and audio:** add a short written summary beside each, plus `VideoObject` JSON-LD for the walkthrough, because crawlers can't watch or listen.

### C14. Implementation phases

Each phase is one commit on `site-refresh`. I won't push or deploy.

1. **Head, SEO and site files.** The C1 head, JSON-LD, robots.txt, sitemap.xml, llms.txt, re-rendered og.png, and `_config.yml` if B1 is approved.
2. **Hero and "What we build".** C2-C4, Fig. 1 with draw-on-load, five sketches with staggered draw, and nav changes.
3. **Demo and Work.** C5-C6, summary boxes, "Technical details" blocks, Figs. 4-5 and Exhibit F.
4. **Process, FAQ, Studio, Contact and colophon.** C7-C11, the scroll-drawn process line, and /demo touch-ups (C12).
5. **QA.** I'll check all of the following, then write the report:
   - before/after screenshots at 390 and 1440 px
   - horizontal overflow
   - reduced motion
   - Lighthouse at ≥ 90 on all four categories
   - keyboard and focus
   - AA contrast
   - every asset still works (video, audio, tel link, OG)
   - the 30-second test and the chatbot test

   Weight budget: the page stays well under the v2 guide's 150 KB target, excluding fonts and video.

### C15. Phase 2 pages (after the home page is approved)

These are outline only. I'll write the full copy for your review in a second doc.

| URL | H1 (draft) | Title (draft) |
|---|---|---|
| `/ai-services/` | AI services from Vero Labs: the hub linking all five service pages | Vero Labs · AI Services for Business · Bangalore, India |
| `/whatsapp-agents/` | WhatsApp agents for Indian businesses | Vero Labs · WhatsApp AI Agents · Bangalore, India |
| `/quick-commerce-tracking/` | Blinkit, Zepto and Instamart rank and ad tracking | Vero Labs · Quick-Commerce Rank & Ad Tracking |
| `/process-automation/` | Turn a manual process into a tool | Vero Labs · Process Automation · Bangalore, India |
| `/ai-quality-checks/` | AI quality and photo checks | Vero Labs · AI Quality & Photo Checks · Bangalore |
| `/voice-agents/` | Phone agents that call and qualify leads | Vero Labs · Voice AI Agents · Bangalore, India |
| `/work/real-estate-lead-qualification/` | Case: real-estate lead qualification | Vero Labs · Case: Real-Estate Lead Qualification |
| `/work/refurbisher-whatsapp-agent/` | Case: a WhatsApp purchase agent | Vero Labs · Case: WhatsApp Purchase Agent |
| `/work/sweets-brand-blinkit-tracking/` | Case: Blinkit tracking for a sweets brand | Vero Labs · Case: Blinkit Rank & Ad Tracking |

Each page has the same structure, at 400-800 words:

- an answer-first opening ("Vero Labs builds X for Y in Bangalore, India...")
- who it's for
- what we build
- one schematic, reused from the home page
- a mini case
- how we work, with no price and no timeline
- 3-4 FAQs with `FAQPage` JSON-LD
- a CTA
- a visible "Last updated"

The header and footer are shared per B6.

---

## TODO: Alakh (everything I need from you)

| # | Item | Where it's used |
|---|---|---|
| 1 | B6: OK for the `tools/sync_partials.py` script in Phase 2 | Phase 2 |
| 2 | Confirm the H1 keeps "Built in weeks", or switch to "Built fast" | Hero |
| 3 | What the ERP labelling tool labels | C6 case 2 |
| 4 | Confirm: "the agent never agrees a price outside the rules your buyers set" | C6 case 2 margin note |
| 5 | Stack and integration notes for the WhatsApp agent and the labelling tool | C6 case 2 tech layer |
| 6 | Stack and alerting notes for the Blinkit tracker | C6 case 3 tech layer |
| 7 | Confirm: "your data stays yours; used only to build and run your tool" | FAQ 4 |
| 8 | Typical reply time to an enquiry (optional) | Contact |
| 9 | LinkedIn company URL | JSON-LD sameAs, colophon |
| 10 | Cloudflare Web Analytics token (steps in `docs/indexing-and-analytics.md`) | `<head>` |
| 11 | Show founders' full names on the page? (I recommend yes) | Studio |
| 12 | WhatsApp number, whenever you're ready (on hold) | Contact |
