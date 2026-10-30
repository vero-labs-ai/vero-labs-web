# Vero Labs launch checklist

Written 30 Oct 2026. This is the single list of what happens before and after deployment. "Deployment" means merging `site-refresh` into `main`, which you do yourself.

Status today: only the `_config.yml` change and the caller's name removal are done, and they're on the branch, not live. Everything else marked "Build" is not built yet.

The work ships in two releases:

- **Release 1:** the home page, /demo and all the technical files.
- **Release 2:** nine new pages: `/ai-services/`, five service pages and three case pages.

---

## Before deployment

### 1. Decisions and facts from Alakh

- [ ] Review and approve the copy in `docs/refresh-plan.md` (blocks all building)
- [ ] Headline: keep "Built in weeks", or switch to "Built fast"
- [ ] Check keywords in Bing Keyword Research (section 3)
- [ ] Refurbisher case: what does the ERP labelling tool label?
- [ ] Refurbisher case: confirm "the agent never agrees a price outside the rules your buyers set"
- [ ] WhatsApp agent and labelling tool: stack notes for the tech-team section, or say to leave them out
- [ ] Blinkit tracker: stack and alerting notes, or say to leave them out
- [ ] FAQ: confirm "your data stays yours; used only to build and run your tool"
- [ ] Typical reply time to an enquiry (optional)
- [ ] LinkedIn company URL (create the page if there isn't one)
- [ ] Show founders' full names on the page? (recommended)
- [ ] Cloudflare Web Analytics token
- [ ] Walkthrough video: upload date, for the video schema
- [ ] OK for `tools/sync_partials.py` (Release 2 only)

### 2. Names, titles and summaries (Build)

- [ ] `lang="en-IN"`, and "Vero Labs" written in full everywhere
- [ ] Unique title and meta description on every page
- [ ] Canonical URL on every page
- [ ] Open Graph and Twitter tags on every page, with an absolute image URL
- [ ] Re-render `og.png` with the new headline
- [ ] One H1 per page, with a logical H2/H3 order
- [ ] Short company summary in the page, using the approved wording below
- [ ] Visible "Last updated" date

**Approved wording to reuse everywhere** (draft until you approve it):

- **One line:** Vero Labs is an applied AI studio in Bangalore, India that builds custom AI tools for businesses.
- **Short:** Vero Labs is an applied AI studio in Bangalore, India. Run by two engineers, we build WhatsApp agents, quick-commerce tracking, process automation, AI quality checks and voice agents, then keep them running.

### 3. Keywords (Build)

Keywords go in titles, headings and body copy. I'm not adding a `<meta name="keywords">` tag, because Google ignores it.

| Page | Main phrases |
|---|---|
| Home | applied AI studio Bangalore, custom AI development, AI development company Bangalore |
| `/ai-services/` | AI services India, AI services for business, AI automation company India |
| `/whatsapp-agents/` | WhatsApp AI agent India, WhatsApp automation for business |
| `/quick-commerce-tracking/` | Blinkit rank tracking, Blinkit ad tracking, Zepto and Instamart tracking |
| `/process-automation/` | AI process automation India, automate Excel and WhatsApp workflows |
| `/ai-quality-checks/` | AI quality inspection India, computer vision quality checks |
| `/voice-agents/` | AI voice agent India, Hindi voice agent, lead qualification calls |

These are estimates until they're checked in Keyword Research.

### 4. Files for search engines and AI (Build)

- [ ] `sitemap.xml`, with every page and its `lastmod`
- [ ] `robots.txt`, allowing Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot and Google-Extended, and pointing to the sitemap
- [ ] `llms.txt`, from the draft below
- [ ] `404.html`, in the Field Report style
- [ ] IndexNow key file (lets Bing hear about changes straight away)
- [ ] Add `tools/` and `partials/` to the `_config.yml` exclude list if the script is approved

**`llms.txt` draft:**

```
# Vero Labs

> Vero Labs is an applied AI studio in Bangalore, India that builds custom AI tools for businesses, usually owner-led Indian companies. Run by two engineers, Alakh Agrawal and Vishal Srivastava.

Vero Labs is a separate company from other businesses with "Vero" in their name.

## What we build
- WhatsApp agents that handle routine conversations
- Blinkit, Zepto and Instamart rank and ad tracking
- Tools that replace manual processes
- AI quality and photo checks
- Phone agents that call and qualify new leads

## How to start
- Every project gets a fixed price after a free 30-minute scope call.
- Email vishal@vero.co.in or alakh@vero.co.in.

## Key pages
- [Home](https://vero.co.in/)
- [Demo](https://vero.co.in/demo/)
```

Release 2 adds the new pages to "Key pages".

### 5. Structured data (Build)

- [ ] `ProfessionalService`: name, URL, description, Bengaluru address, area served, emails, founders, `knowsAbout`, `sameAs`. **No phone number.**
- [ ] `WebSite`
- [ ] `FAQPage`, with wording matching the visible FAQ
- [ ] `VideoObject` for the walkthrough
- [ ] `BreadcrumbList` on the Release 2 pages

### 6. Page content (Build)

- [ ] Hero, What we build, Demo, three case studies, Process, FAQ, Studio, Contact, colophon, as in the plan
- [ ] Link from the home page to `/demo/`, which no page links to today
- [ ] Footer links to the main pages
- [ ] Written summary beside the video and the audio call, because crawlers can't watch or listen
- [ ] Every diagram has `<title>`, `<desc>` and a visible caption
- [ ] Tables are real `<table>`s, and all important text is in the HTML
- [ ] Keep the existing section links (`#demo`, `#work`, `#method`, `#studio`, `#contact`, `#what-we-do`)
- [ ] Pre-filled `mailto:` template on the email buttons
- [ ] Cloudflare script added with the real token

### 7. Tidy-up (Build)

- [ ] Remove internal notes from HTML comments in `index.html` and `demo/index.html`
- [ ] Add a v3 copy doc in `Requirements/`, and mark v2 as replaced
- [ ] Fix `README.md`: the stray `lkkokok` line and the wrong `.nojekyll` claim
- [ ] Lazy-load the YouTube embed so the page loads faster

### 8. Quality checks (Build)

- [ ] Before and after screenshots at 390 and 1440 px
- [ ] No sideways scroll at 390 px
- [ ] Reduced motion shows diagrams fully drawn
- [ ] Lighthouse at 90 or above for Performance, Accessibility, SEO and Best Practices
- [ ] No layout shift from animations
- [ ] Keyboard navigation, visible focus, AA contrast
- [ ] Video, audio, demo number, email links and OG image all work
- [ ] Schema passes validator.schema.org (paste the code)
- [ ] All links work
- [ ] Copy scan: no client names, em dashes, exclamation marks, banned hype words, prices, timelines, or "Vero" on its own
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
