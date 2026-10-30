# Vero Labs launch checklist

Written 30 Oct 2026. This is the single list of what happens before and after deployment. "Deployment" means merging `site-refresh` into `main`, which you do yourself.

Status (30 Oct 2026): Release 1 is built on the `site-refresh` branch and not live. Ticked items are done. The Cloudflare script is in the pages as a comment until the token arrives.

The work ships in two releases:

- **Release 1:** the home page, /demo and all the technical files.
- **Release 2:** on hold. It planned `/ai-services/`, service pages and three case pages, but service pages conflict with the open-ended positioning decided on 30 Oct 2026. Case pages still fit.

---

## Before deployment

### 1. Decisions and facts from Alakh

- [ ] Review and approve the copy in `docs/refresh-plan.md` (blocks all building)
- [ ] Headline: keep "Built in weeks", or switch to "Built fast"
- [ ] Check keywords in Bing Keyword Research (section 3)
- [ ] Refurbisher case: confirm the ERP labelling tool labels photos (site now says so)
- [ ] Refurbisher case: confirm "the agent never agrees a price outside the rules your buyers set"
- [ ] WhatsApp agent and labelling tool: stack notes for the tech-team section, or say to leave them out
- [ ] Blinkit tracker: stack and alerting notes, or say to leave them out
- [ ] FAQ: confirm "your data stays yours; used only to build and run your tool"
- [ ] Typical reply time to an enquiry (optional)
- [ ] LinkedIn company URL (create the page if there isn't one)
- [ ] Show founders' full names on the page? (recommended)
- [ ] Cloudflare Web Analytics token
- [x] Walkthrough video: upload date, for the video schema
- [ ] OK for `tools/sync_partials.py` (Release 2 only)

### 2. Names, titles and summaries (Build)

- [x] `lang="en-IN"`, and "Vero Labs" written in full everywhere
- [x] Unique title and meta description on every page
- [x] Canonical URL on every page
- [x] Open Graph and Twitter tags on every page, with an absolute image URL
- [x] Re-render `og.png` with the new headline
- [x] One H1 per page, with a logical H2/H3 order
- [x] Short company summary in the page, using the approved wording below
- [x] Visible "Last updated" date

**Approved wording to reuse everywhere** (draft until you approve it):

- **One line:** Vero Labs is an applied AI studio in Bangalore, India that builds custom AI solutions for businesses in any industry.
- **Short:** Vero Labs is an applied AI studio in Bangalore, India. Run by two engineers, we build custom solutions for businesses in any industry, then keep them running. We are not tied to one industry or one kind of system.

### 3. Keywords (Build)

Keywords go in titles, headings and body copy. I'm not adding a `<meta name="keywords">` tag, because Google ignores it.

| Page | Main phrases |
|---|---|
| Home | applied AI studio Bangalore, custom AI development, AI development company Bangalore |
| `/ai-services/` | AI services India, AI services for business, AI automation company India |
| `/whatsapp-agents/` | WhatsApp AI agent India, WhatsApp automation for business |
| `/quick-commerce-tracking/` | Blinkit rank tracking, Blinkit ad tracking, Zepto and Instamart tracking |
| `/process-automation/` | AI process automation India, automate Excel and WhatsApp workflows |
| `/voice-agents/` | AI voice agent India, Hindi voice agent, lead qualification calls |

These are estimates until they're checked in Keyword Research.

### 4. Files for search engines and AI (Build)

- [x] `sitemap.xml`, with every page and its `lastmod`
- [x] `robots.txt`, allowing Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot and Google-Extended, and pointing to the sitemap
- [x] `llms.txt`, from the draft below
- [x] `404.html`, in the Field Report style
- [x] IndexNow key file (lets Bing hear about changes straight away)
- [ ] Add `tools/` and `partials/` to the `_config.yml` exclude list if the script is approved

**`llms.txt` draft:**

```
# Vero Labs

> Vero Labs is an applied AI studio in Bangalore, India that builds custom AI solutions for businesses in any industry. Run by two engineers, Alakh Agrawal and Vishal Srivastava.

Vero Labs is a separate company from other businesses with "Vero" in their name.

## Some things we have built
- A phone agent that calls and qualifies new leads, live in production
- A WhatsApp agent for routine purchase chats, going live November 2026
- Blinkit rank and ad tracking, in pilot
- A data-labelling tool for training a vision AI

These are examples. We are not tied to one industry or one kind of system.

## How to start
- Every project gets a fixed price after a free 30-minute scope call.
- Email vishal@vero.co.in or alakh@vero.co.in.

## Key pages
- [Home](https://vero.co.in/)
- [Demo](https://vero.co.in/demo/)
```

Release 2 adds the new pages to "Key pages".

### 5. Structured data (Build)

- [x] `ProfessionalService`: name, URL, description, Bengaluru address, area served, emails, founders, `knowsAbout`, `sameAs`. **No phone number.**
- [x] `WebSite`
- [x] `FAQPage`, with wording matching the visible FAQ
- [x] `VideoObject` for the walkthrough
- [ ] `BreadcrumbList` on the Release 2 pages

### 6. Page content (Build)

- [x] Hero, Built so far, Demo, three case studies, Process, FAQ, Studio, Contact, colophon, as in the plan
- [x] Link from the home page to `/demo/`, which no page links to today
- [x] Footer links to the main pages
- [x] Written summary beside the video and the audio call, because crawlers can't watch or listen
- [x] Every diagram has `<title>`, `<desc>` and a visible caption
- [x] Tables are real `<table>`s, and all important text is in the HTML
- [x] Keep the existing section links (`#demo`, `#work`, `#method`, `#studio`, `#contact`, `#what-we-do`)
- [x] Pre-filled `mailto:` template on the email buttons
- [ ] Cloudflare script added with the real token

### 7. Tidy-up (Build)

- [x] Remove internal notes from HTML comments in `index.html` and `demo/index.html`
- [x] Mark the v2 content doc as replaced (the plan and the HTML now hold the copy; clip notes moved to `Requirements/media-notes.md`)
- [x] Fix `README.md`: the stray `lkkokok` line and the wrong `.nojekyll` claim
- [x] Lazy-load the YouTube embed so the page loads faster

### 8. Quality checks (Build)

- [x] Before and after screenshots at 390 and 1440 px
- [x] No sideways scroll at 390 px
- [x] Reduced motion shows diagrams fully drawn
- [x] Lighthouse at 90 or above for Performance, Accessibility, SEO and Best Practices
- [x] No layout shift from animations
- [x] Keyboard navigation, visible focus, AA contrast
- [x] Video, audio, demo number, email links and OG image all work
- [ ] Schema passes validator.schema.org (paste the code)
- [x] All links work
- [x] Copy scan: no client names, em dashes, exclamation marks, banned hype words, prices, timelines, or "Vero" on its own
- [ ] 30-second test and chatbot test, answers written in the report
- [ ] Final report with what changed, scores and open items

### 9. Deploy (Alakh)

- [ ] Check `CNAME` still says `vero.co.in`
- [ ] Review the branch
- [ ] Merge `site-refresh` into `main`

---

## After deployment

### A. Same day: check the live site

- [ ] GitHub repo, Settings → Pages: the build succeeded, the custom domain is `vero.co.in`, and Enforce HTTPS is on
- [ ] vero.co.in loads, and `www` and `http://` redirect to it
- [ ] Check on a real phone and a laptop
- [ ] `/demo/`, the video, the audio, the demo number and both email buttons work
- [ ] These all show "not found":
  - `/Requirements/vero-labs-website-content-v2.html`
  - `/Requirements/vero-labs-website-content-v2.md`
  - `/Requirements/vero-labs-build-guide-v2.html`
  - `/docs/refresh-plan.html`
  - `/docs/launch-checklist.html`
  - `/README.md`
- [ ] `/robots.txt`, `/sitemap.xml` and `/llms.txt` open, and a made-up URL shows the new 404 page
- [ ] Cloudflare Web Analytics shows your own visit
- [ ] Google Rich Results Test on the live URL
- [ ] PageSpeed Insights, mobile and desktop
- [ ] Share preview looks right on WhatsApp and in LinkedIn Post Inspector

### B. Same day: Google Search Console (Domain property)

- [ ] Sitemaps → submit `sitemap.xml`
- [ ] Inspect `https://vero.co.in/` → Test Live URL → Request indexing
- [ ] Inspect `https://vero.co.in/demo/` → Test Live URL → Request indexing
- [ ] Settings → Users and permissions → add Vishal, if he isn't there
- [ ] Optional: remove the unused verification token

### C. Same day: Bing Webmaster Tools

- [ ] Sitemaps → submit `https://vero.co.in/sitemap.xml`
- [ ] URL Inspection / URL Submission → home page and `/demo/`
- [ ] Send the first IndexNow request
- [ ] Robots.txt Tester
- [ ] Site Scan, and send Claude anything it flags

### D. Same day: record the chatbot "before" picture

Ask ChatGPT, Perplexity, Claude and Gemini these questions, and save the answers:

- [ ] "What does Vero Labs in Bangalore do?"
- [ ] "Which applied AI studios in Bangalore build custom AI tools?"
- [ ] "Who can build a WhatsApp AI agent for my business in India?"

### E. First week: get listed elsewhere

Use the same wording everywhere: the one-line summary above.

- [ ] LinkedIn company page, with the URL added to the site schema
- [ ] Google Business Profile, with no public phone number if possible
- [ ] Bing Places (can import from Google Business Profile)
- [ ] Clutch
- [ ] GoodFirms
- [ ] Update the Zapier partner listing wording
- [ ] Update the `vero-labs-ai` GitHub organisation description and website link
- [ ] Ask clients and partners for a link where that's possible, without naming clients unless they agree

### F. One week later

- [ ] Google → Pages: are the home page and `/demo/` indexed?
- [ ] Google and Bing → search performance: compare with the baseline in `docs/indexing-and-analytics.md`
- [ ] Cloudflare → referrers: any visits from chatbots?
- [ ] Re-run the Site Scan if it flagged anything

### G. Monthly

- [ ] New searches in Google and Bing, especially ones not about a name
- [ ] Are "vero studio" searches still taking a large share? They're not you, so don't count them as demand
- [ ] Ask the three chatbot questions again and compare
- [ ] Use what you find to adjust page headings

### H. Release 2 (the nine new pages)

Build and approve the pages first, then repeat:

- [ ] A: check the live pages
- [ ] B and C: submit the updated sitemap, and request indexing for each new URL
- [ ] Add the new pages to `llms.txt`

### I. Update when something changes

- [ ] Refurbisher case: update the status when it goes live (planned November 2026)
- [ ] Sweets brand case: update the status when the pilot ends
- [ ] Add real results only when you have real numbers
- [ ] Add the WhatsApp button when there's a number
- [ ] Add a phone number when there's a human line
- [ ] Add audio clips when the cleared MP3s are ready

### Parked, not planned

- Moving the whole domain to Cloudflare (only if seeing AI crawler visits becomes important)
- Google Analytics (only with a consent banner)
- Making the GitHub repo private (the paid plan is needed, or the site goes offline)
