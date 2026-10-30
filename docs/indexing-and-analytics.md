# Indexing and analytics setup for vero.co.in

Written 29 Oct 2026. Every step here uses a free account and **none of it touches GoDaddy DNS**. Menu names in these dashboards change from time to time, so if a label differs slightly, look for the nearest match.

Use a shared login if you can (for example a Vero Labs Google account), so Vishal isn't locked out. Each tool also lets you add a second user later.

## The order that works

Google and Bing are already verified, so only the Cloudflare token is needed before deployment. For the full order of work, see `docs/launch-checklist.md`.

---

## A. Google Search Console

**Status (30 Oct 2026): already verified.** vero.co.in exists as a Domain property (verified through DNS, which covers www and http too) and as a URL-prefix property. Skip A1 and A2: no tag is needed. Use the Domain property for everything below.

**A1. Add the site and get the code**
1. Go to https://search.google.com/search-console and sign in.
2. Click **Add property**. Choose **URL prefix**, not "Domain", because "Domain" needs a DNS record at GoDaddy.
3. Enter `https://vero.co.in/` and click **Continue**.
4. Under other verification methods, open **HTML tag**. It shows a line like
   `<meta name="google-site-verification" content="AbC123..." />`
5. Copy **only the `content` value** (`AbC123...`) and send it to Claude. **Don't click Verify yet**, because the tag isn't on the live site.

**A2. Verify (after deploy)**
1. Open the same screen and click **Verify**.

**A3. Submit the sitemap and ask Google to index**
1. Left menu: **Sitemaps** → enter `sitemap.xml` → **Submit**.
2. Top search bar (**URL inspection**): paste `https://vero.co.in/` → **Request indexing**. Repeat for `https://vero.co.in/demo/`, and later for each new page.
3. Optional: **Settings → Users and permissions** → add Vishal.

**What to expect.** Indexing usually takes a few days to a couple of weeks, and Google doesn't guarantee it. After a week, check **Pages** (under Indexing) to see what's indexed. **Performance** then shows which searches you appear for.

---

## B. Bing Webmaster Tools

**Status (30 Oct 2026): already verified.** vero.co.in is in Bing Webmaster Tools, with 66 impressions and 0 clicks over the last three months. Skip B1 and B2. After deploy, do B3, run **Site Scan** and check **Robots.txt Tester**.

This one matters for AI chatbots too: ChatGPT's search draws heavily on Bing's index.

**B1. Add the site.** Pick one of these two routes.

- **Fast route, if Google is already verified:**
  1. Go to https://www.bing.com/webmasters and sign in with a Microsoft, Google or Facebook account.
  2. Choose **Import from Google Search Console** and allow access.
  3. Bing verifies the site and copies the sitemap for you. There's no code to send, and you can skip B2.
- **Manual route:**
  1. Choose **Add your site manually** and enter `https://vero.co.in/`.
  2. Pick **HTML Meta Tag**. It shows `<meta name="msvalidate.01" content="XYZ..." />`.
  3. Copy **only the `content` value** and send it to Claude. **Don't click Verify yet.**

**B2. Verify (manual route only, after deploy)**
1. Click **Verify**.

**B3. Submit**
1. **Sitemaps** → **Submit sitemap** → `https://vero.co.in/sitemap.xml`.
2. **URL Submission** → paste the home page, `/demo/` and later each new page.

---

## C. Cloudflare Web Analytics (visitor counts, no cookies, no banner)

Your domain does **not** need to move to Cloudflare for this. It works with a small script tag.

**C1. Get the token**
1. Go to https://dash.cloudflare.com/sign-up and create a free account (or sign in).
2. Open **Analytics & Logs → Web Analytics** (also findable by searching "Web Analytics" in the dashboard).
3. Click **Add a site**, enter `vero.co.in` and confirm.
4. Because the domain isn't on Cloudflare, it shows a **JS snippet** like
   `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "abc123..."}'></script>`
5. Send the **token** (or the whole snippet) to Claude.

**C2. After deploy**
- Visits start showing in the Web Analytics dashboard within minutes.
- You'll see page views, countries, devices and **referrers**. Visits from chatgpt.com, perplexity.ai and similar sites show up there, which is the easiest way to see whether chatbots are sending people.

**Limits worth knowing**
- Ad blockers hide some visitors.
- No script-based tool can count AI crawler visits (GPTBot, ClaudeBot and so on), because crawlers don't run scripts. GitHub Pages provides no server logs either.

---

## Baseline before the refresh (exports from 30 Oct 2026)

- **Google, last 6 months:** 71 clicks, 3,801 impressions. Clicks by month: Jul 29, Aug 18, Sep 10, Oct 5 (Oct is partial).
- **Top Google searches:** "vero studio ai" (29 clicks, 582 impressions), "vero" (6, 770), "vero labs" (4, 112), "vero studio" (3, 117), "vero company" (0, 129).
- **Bing, 30 Apr to 27 Oct:** see the export. Almost no clicks.
- **Nearly every search is for a name.** None are for a problem we solve (WhatsApp agents, Blinkit tracking, and so on). The Phase 2 pages are the test of whether that changes.

---

## D. After the tools are set up

- Every time a page is added, Claude updates `sitemap.xml`. Request indexing for the new URL in Google (A3) and Bing (B3).
- Check Search Console and Bing once a month: which searches show you, and which pages aren't indexed.
- Off-site mentions matter more than anything above for being recommended by chatbots. These include Google Business Profile, LinkedIn, the Zapier partner directory, GitHub, and directories like Clutch or GoodFirms. Keep the wording the same everywhere: "Vero Labs, applied AI studio in Bangalore, India".
