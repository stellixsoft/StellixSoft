# SEO and lead generation playbook: 30/60/90 days, ready for AI search

The goal is **qualified leads** (contact form submissions, booked calls, phone and email enquiries, lead magnet downloads that turn into a call) and the revenue they bring. Traffic is only a means to that. The weekly "Weekly SEO & CRO pass" routine reads this file and works on the current phase. Update the status lines as tasks ship.

Plan start: Nov 1, 2026. Day 30 = Dec 1, day 60 = Dec 31, day 90 = Jan 30, 2027.

Owners: **Owner** is Hannan. **Claude** means the code, content and analysis work done by Claude in this repo through PRs, which the owner merges.

Hard rules:

- Don't use the Google Indexing API for normal pages.
- Rewrite a page's title or meta at most once a month. Log every change in the change log at the end of this file.
- Never publish a price, certification, client name or result the business can't back up. `StellixSoft_Knowledge_Base.md` sets what can be claimed.

---

## 0. Baseline (as of Oct 31, 2026)

### What we sell

These are worked out from `StellixSoft_Knowledge_Base.md` and the site. The first three are the lead offers.

| Offer | Live page | Typical deal |
|---|---|---|
| .NET / legacy modernization (VB.NET, .NET Framework, Classic ASP, old PHP and Java) | /services/legacy-modernization | First slice $15k–$40k; full programs $40k–$100k+ |
| RFID software (reader and tag workflows, asset and inventory tracking, warehouse events, portals) | No dedicated page. /services/iot-software is the closest, and the knowledge base says not to lead with "IoT" | $40k–$100k platforms |
| Secure AI, including onsite or private deployment | /services/ai-integration-services covers connected AI only. Onsite AI has no page | Focused integration in a few weeks to 3 months; pilot $10k–$15k |
| Enterprise systems (portals, ERP/CRM-style apps, operations platforms, SaaS) | /services/enterprise-development | $40k–$100k+ |
| Enterprise mobile apps | /services/enterprise-mobile-app-development | $15k–$100k |
| Dedicated teams and staff augmentation | /services/hire-dedicated-development-team, /services/staff-augmentation | $4k–$5.6k per developer per month; $11k–$24k for teams of 3 to 5+ |
| Maintenance plans | /services/maintenance-support | $1.5k–$7k+ per month |
| Also listed: DevOps and cloud, e-commerce, Salesforce, blockchain, medical billing | various | Accepted as connected work |

### Ideal clients

US and Canada first, then Europe. Companies stuck on legacy .NET or SQL Server. Hardware, warehouse, logistics, retail and manufacturing firms that use RFID. Regulated or security-sensitive firms (healthcare, finance, industrial) that want AI without sending data out. Ops-heavy SMB and mid-market firms that need a portal or system. Buyers are CTOs, VPs of Engineering, IT directors, operations heads and founders.

### Locations

Stellix Soft LLC is in Houston, Texas, and Stellix Soft (Pvt.) Ltd. is in Islamabad. Delivery is remote and aligned to US hours. This isn't a local-services business, so plan one Houston/Texas page and a Google Business Profile for the Houston entity, not a location page per city.

### How leads come in today

- Contact form at /contact. Submissions go by email only through nodemailer. There is **no CRM**.
- Calendly popup buttons.
- Customer Hub chat widget, and the voice and chat sales agent (briefed by the knowledge base).
- Warmly visitor identification script.
- Directory profiles: Clutch, GoodFirms, DesignRush, TechReviewer, Trustpilot.
- LinkedIn.

### Current numbers

| Metric | 28 days | 90 days |
|---|---|---|
| Google clicks / impressions | 37 / 3,457 (CTR 1.1%) | — |
| Non-brand Google clicks | about 15 | — |
| Real organic sessions (GA4) | 110 | 369 |
| Referral sessions (directories, Vercel) | 31 | 60 |
| AI assistant sessions (ChatGPT, Gemini, Perplexity) | 4 | 17 (9 engaged, 2 min 20 s average) |
| Direct sessions | 524, about half bots | 1,692 |
| Tracked leads | 0. Tracking only went live on Oct 31 | — |
| Conversion rate per page | Unknown until leads are tracked | — |
| Cost per lead | No ads are running, so n/a | — |

AI assistants already send visitors to case studies, pricing, the DevOps and mobile service pages, and long blog posts. AI search is a real, small channel that's growing.

### What's missing (owner, please fill in)

1. Real leads per month over the last 3 to 6 months, from all sources including email, LinkedIn and referrals, plus how many became clients and the average first-contract value. Without this there is no baseline for lead-to-client rate or revenue per channel.
2. A CRM or a shared lead sheet. Even a Google Sheet works. Claude can wire the contact form to also write to it.
3. Google Business Profile status for Stellix Soft LLC (Houston): whether it exists, who owns it, and how many reviews it has.
4. The true team size. llms.txt says "~15 developers", while the About page and meta description say "50+ developers serving Fortune 500 companies". AI answers distrust a company that contradicts itself, so pick the true number and Claude will make every page match.
5. Which clients can be named in case studies, and which reviews and testimonials can be quoted.
6. An email tool for nurture sequences (Brevo, MailerLite, HubSpot free or similar).
7. Whether any paid ads will run. If yes, the budget, so cost per lead can be tracked.

---

## 1. Targets

These assume about 400 to 500 real visits a month by day 90, and a site conversion rate measured on real sessions with bots excluded.

| Metric | Day 30 | Day 60 | Day 90 |
|---|---|---|---|
| Qualified leads per month (form + booked call + phone/email, after junk is removed) | 3–5 | 6–10 | 10–15 |
| Lead magnet sign-ups per month | — | 10–20 | 25–40 |
| Site conversion rate (leads ÷ real sessions) | 1.0% | 1.5% | 2–3% |
| Contact page conversion rate (submits ÷ contact page views) | 10% | 15% | 20% |
| Non-brand Google clicks per month | 25 | 50 | 90 |
| AI assistant sessions per month | 8 | 15 | 30 |
| New Clutch, GoodFirms and Google reviews (total) | 3 | 6 | 10 |
| Lead response time | under 1 business hour | same | same |
| Cost per lead | n/a while there are no ads; track hours spent. If ads start, target under $150 per qualified lead | | |
| Lead-to-client rate | establish a baseline | 15% | 20% |

Revenue check: at a $25k average first contract, 12 qualified leads a month at 15% to 20% close is 2 clients and about $50k a month.

---

## 2. Phase 1, days 1–30 (Nov 1 – Dec 1): fix the funnel and become citable

Ranked by expected impact on qualified leads.

| # | Task | Owner | Done when |
|---|---|---|---|
| 1 | Check that `generate_lead` arrives in GA4 for form and Calendly. Submit one test of each and confirm it appears under Realtime. | Owner, with Claude checking | Both events seen |
| 2 | Send every contact form lead to a lead sheet or CRM as well as email, with source, landing page, UTM and `ai_referrer` fields. | Claude (code); Owner picks the tool | Every lead has a row |
| 3 | Agree response rules: reply to every enquiry within 1 business hour, with a booking link in the first reply. Alerts go to email and phone. | Owner | Rule written and alerts on |
| 4 | **Fix contradictory company facts** (team size, "Fortune 500", "remote-first" vs Houston) across About, the homepage, llms.txt and schema. | Owner gives the facts; Claude edits | One version everywhere |
| 5 | Above-the-fold CTA audit on the homepage, the 3 lead-offer pages and /pricing: one main CTA ("Get a free project estimate"), one secondary ("Book a 20-min call"), and a click-to-call phone link on mobile. | Claude | Live |
| 6 | Shorten the contact form to name, work email, company, "what do you need" and budget range (optional). Move the rest to after submit. | Claude | Live, with completion rate tracked |
| 7 | Rewrite the titles and metas for the page-one, no-click pages in the title queue below. This is the one rewrite for the month. | Owner in the blog admin (Claude drafts); Claude for static pages | Logged in the change log |
| 8 | Claim and complete the Google Business Profile for Stellix Soft LLC, Houston: category "Software company", services, hours, photos, website with UTM, and the first 3 reviews. | Owner | Profile 100% complete |
| 9 | Add **LocalBusiness** schema (Houston address) next to Organization, plus **Review/AggregateRating** only for reviews shown on the page. | Claude | Validated in Rich Results Test |
| 10 | Allow the AI search crawlers `OAI-SearchBot` and `Perplexity-User` in robots.ts (GPTBot, ClaudeBot and PerplexityBot are already allowed). Update llms.txt so the lead offers are listed first, each with a one-line answer, a price range and a link. | Claude | Live |
| 11 | Ask 5 past clients for reviews on Clutch and GoodFirms. Send them a direct link. | Owner | 3 new reviews |
| 12 | Run PageSpeed Insights on mobile for the homepage, contact page and 3 lead-offer pages. Fix anything with LCP over 2.5 s or CLS over 0.1. Check the cost of the hero video and of third-party scripts (Warmly, Customer Hub, Clarity). | Claude | All 5 pages pass Core Web Vitals |

---

## 3. Phase 2, days 31–60 (Dec 2 – Dec 31): pages that AI recommends, and lead magnets

| # | Task | Owner | Done when |
|---|---|---|---|
| 1 | **New service page: RFID software development.** Direct answer up top ("We build RFID software for ... typical cost $X–$Y, 3–6 months"), process steps, pricing ranges, the ZB Lines and hardware-portal proof, FAQs, and Service + FAQ schema. | Claude drafts, Owner approves claims | Live and linked from /services and the IoT pages |
| 2 | **New service page: Private / onsite AI deployment** (secure AI where data stays inside the client's network). Same structure as task 1. | Claude drafts, Owner approves | Live |
| 3 | Rebuild /services/legacy-modernization into the strongest page on the site: a "VB.NET to .NET 8 migration" direct answer, a cost table (assessment, slice, full program), timeline, risks, a before/after case study, FAQs and Service + FAQ schema. | Claude | Live |
| 4 | Apply the same structure to enterprise-development, mobile, dedicated team and AI integration: a 40 to 60 word answer box at the top, real price ranges, numbered process, 6 to 8 FAQs that match buyer questions, and Service, FAQ and Breadcrumb schema. | Claude | 4 pages done |
| 5 | **Lead magnet 1: .NET modernization assessment report.** The tool already exists at /tools/dotnet-modernization-assessment. Gate the full PDF report behind email, and give a summary for free. | Claude | Live, with `lead_magnet_signup` tracked |
| 6 | **Lead magnet 2: RFID ROI calculator report.** Gate the PDF at /tools/rfid-roi-calculator the same way. | Claude | Live |
| 7 | **Lead magnet 3: "Software project cost estimator"** on /pricing. Pick the type, size and team, get a range on screen, and get an itemised PDF by email. | Claude | Live |
| 8 | Exit-intent on desktop and a 60% scroll slide-in on blog and service pages, offering the matching lead magnet. Show it at most once per visitor every 7 days. | Claude | Live, conversion tracked |
| 9 | Set up the email tool and the 5-email nurture sequence (section 6). Send magnet sign-ups there with tags for each magnet. | Owner (tool), Claude (copy) | Sequence on |
| 10 | Publish 4 buyer-question posts from the content queue, each with a direct answer, a cost range, a table and a CTA to the matching magnet. | Claude drafts, Owner publishes | 4 live |
| 11 | Case-study upgrade: add hard numbers (time saved, error rate, cost, uptime), the stack, the timeline and a client quote to each of the 5 case studies. Add a downloadable case-study pack (PDF, email-gated). | Owner (numbers and permission), Claude (pages) | 5 updated |
| 12 | First A/B tests (section 5). | Claude | 2 tests running |

---

## 4. Phase 3, days 61–90 (Jan 1 – Jan 30): get mentioned off-site and scale what converts

| # | Task | Owner | Done when |
|---|---|---|---|
| 1 | Get listed in "best .NET modernization companies", "top RFID software developers" and "best offshore development companies" roundups. Pitch Clutch and GoodFirms category leaders and 10 blog roundups. | Owner, with Claude finding targets and drafting pitches | 3 listings |
| 2 | Profile completeness everywhere AI answers draw from: Clutch, GoodFirms, DesignRush, TechReviewer, Trustpilot, LinkedIn company page and Crunchbase. Use the same description, services, prices and HQ on each. | Owner, Claude supplies copy | All match |
| 3 | Reddit and community answers: answer 2 real questions a week in r/dotnet, r/csharp, r/sysadmin, r/logistics, r/ITManagers. Give real advice, and link only when it helps. | Owner | 16 helpful answers |
| 4 | LinkedIn: 2 posts a week turning blog posts and case studies into short lessons, plus founder outreach to 20 target accounts a week with a link to a lead magnet. | Owner (Claude drafts) | Steady cadence |
| 5 | YouTube: 3 short walkthroughs (the modernization assessment, the RFID demo, the IoT simulator), embedded on their pages with VideoObject schema. | Owner records, Claude embeds | 3 live |
| 6 | Appear on 2 podcasts or webinars about legacy modernization or private AI. | Owner | 2 booked |
| 7 | Houston/Texas page: "Custom software development company in Houston" with local proof, the address, a map and LocalBusiness schema. | Claude | Live |
| 8 | Lead scoring live in the CRM or sheet (section 6), with a weekly review of which sources bring high-score leads. | Owner + Claude | Running |
| 9 | Scale the winners. Double down on the 2 pages and 1 magnet with the highest lead rate. Expand them, add internal links, and run a second A/B round. | Claude | Done |
| 10 | Month-2 title rewrite for pages that are still high-impression and low-click (once a month at most). | Claude drafts, Owner publishes | Logged |

---

## 5. Conversion on the site (applies across all phases)

- **Above the fold, on every service page:** a headline that names the outcome, a one-line proof (a rating or client logo), the main CTA "Get a free project estimate", the secondary CTA "Book a 20-min call", and click-to-call on mobile.
- **Forms:** 4 to 5 fields at most. The budget field is a range dropdown. Show a "Reply within 1 business hour" promise next to the button.
- **Booking:** a Calendly link in the header on desktop, a sticky "Book a call" bar on mobile, and the booking link on the thank-you page.
- **Lead magnet offers:** exit-intent and scroll offers matched to the page topic (section 3, task 8).
- **Speed and mobile:** Core Web Vitals pass on mobile for the top 10 landing pages. Load the hero video only on desktop, and defer third-party scripts.
- **A/B tests**, run one at a time per page for at least 2 weeks or 100 conversions-worth of traffic:
  1. Contact form with 4 fields vs the current one.
  2. Homepage main CTA "Get a free estimate" vs "Book a call".
  3. Blog end-of-post CTA with a lead magnet vs the "free estimate" CTA.
  4. Pricing page with the cost estimator above the fold vs below the tiers.
  5. Service page answer box with the price range vs without.

## 6. Follow-up

**Response speed:** reply to every enquiry within 1 business hour on weekdays, US time. Leads contacted within an hour are far more likely to convert. Use an auto-reply that gives a booking link straight away.

**Nurture sequence for lead magnet sign-ups** (5 emails over 14 days):

1. Day 0: the asset itself plus one quick win from it.
2. Day 2: the most common mistake in this kind of project and how to avoid it.
3. Day 5: a case study with numbers that matches the magnet's topic.
4. Day 9: what a first slice or pilot looks like, its typical range and timeline.
5. Day 14: a direct offer of a free 30-minute architecture review, with a booking link.

After that, a monthly newsletter.

**Lead scoring:**

| Signal | Points |
|---|---|
| Work email (not a free webmail address) | +10 |
| Company of 50+ people | +10 |
| Budget given at or above $15k | +20 |
| Lead offer (.NET, RFID, private AI) | +15 |
| Booked a call | +25 |
| Visited /pricing or a case study | +5 each |
| Job seeker, vendor or student | −50 |

A score of 50 or more means a reply from the owner the same day. 25 to 49 goes to nurture and a reply within 1 day. Under 25 gets a polite template.

## 7. Measurement

- **GA4 key events:** `generate_lead` (method `contact_form` or `calendly`), `lead_magnet_signup` (to be added in phase 2), and `tool_lead_submit`.
- **Supporting events:** `cta_contact_click`, `calendly_open`, `contact_email_click`, `contact_phone_click`, `tool_consultation_click`.
- **Reports, weekly:** leads by `sessionDefaultChannelGroup` and by landing page, the "AI Assistant" channel separately (chatgpt.com, perplexity.ai, gemini.google.com, copilot), and directory referrals separately.
- **Bot filter:** exclude Singapore and China "Direct" sessions with under 5 seconds of engagement.
- **Search Console:** impressions vs clicks by page and by query group (brand, lead offers, informational). Watch CTR on pages ranked 1 to 10.
- **CRM or sheet:** source, landing page, score, status (new, qualified, proposal, won, lost), deal value. Monthly figures: lead-to-client rate and **revenue per channel**.
- **Ask on the form:** "How did you hear about us?" with options that include "ChatGPT / AI assistant". AI referrals are under-counted in GA4 because many arrive as Direct.

## 8. Quick fixes from the last 28 days of data

Titles live in Firestore. Edit them in the blog admin, once a month at most.

| Page | 28-day impressions | Position | Suggested title |
|---|---|---|---|
| /blog/azure-devops-vs-github-actions-enterprise | 395 | 19.7 | Azure DevOps vs GitHub Actions (2026): Which to Choose? |
| /blog/headless-commerce-enterprise-ecommerce | 123 | 12.8 | Enterprise Headless Commerce: When It Pays Off [2026] |
| /services | 118 | 5.3 | Software Development Services: Modernization, RFID & AI |
| /blog/zero-downtime-database-migration-strategies | 110 | 7.8 | Database Cutover Without Downtime: CDC Migration Plan [2026] |
| /blog/php2shell-wordpress-to-nextjs-migration | 96 | 7.8 | WordPress to Next.js Migration: Enterprise Guide [2026] |
| /blog/vb-net-migration-strategies-modern-stack | 96 | 17.8 | VB to .NET Migration: Strategy, Tools and Costs [2026] |
| /blog/salesforce-custom-development-best-practices | 86 | 12 | Custom Salesforce & SFCC Development: Best Practices [2026] |
| /blog/software-maintenance-support-best-practices | 70 | 12 | Enterprise Software Maintenance: Models, Costs, SLAs |

Other quick fixes:

- **Sitemap:** 89 URLs, 0 errors. No action needed.
- **Google Business Profile:** see phase 1, task 8.
- **Page speed:** see phase 1, task 12.
- **Forms:** the contact form works, and lead tracking was added on Oct 31.
- **Tracking gaps:** no CRM, no `lead_magnet_signup` event, and no "how did you hear" field.

## 9. Buyer-question content queue

Each item is answered on a service page (in an FAQ or answer box) or in a post with a direct answer up top, a price range and a CTA.

| Question buyers ask | Where it gets answered |
|---|---|
| How much does VB.NET to .NET migration cost? | Legacy modernization page + post |
| How long does a .NET Framework to .NET 8 migration take? | Legacy modernization page + post |
| Rewrite vs migrate a legacy app: which is better? | Post |
| How to choose a .NET modernization partner (with red flags) | Post |
| How much does RFID asset-tracking software cost? | RFID page + post |
| RFID vs barcode for warehouse inventory: ROI | Post + RFID calculator |
| Can we run an LLM on-prem? What does private AI cost? | Private AI page + post |
| Custom software development cost in 2026, by team type and region | /pricing + cost estimator |
| Dedicated team vs staff augmentation vs fixed price | Refresh the existing post |
| Offshore vs nearshore vs US dev team: pros, cons, rates | Post |
| Mistakes to avoid when outsourcing software development | Post |
| Alternatives to [big consultancy] for mid-market modernization | Post |

## 10. Weekly routine checklist (for the scheduled pass)

1. Work out which phase applies from today's date (section 2, 3 or 4). Pick the highest-ranked task in that phase that isn't done yet and Claude owns. Do it on a branch and open a PR. Don't push to main.
2. Pull the data for section 7: GA4 leads by channel and landing page, AI assistant sessions, GSC impressions vs clicks. Use the last 7 and 28 days compared with the prior period, with the bot filter applied.
3. Find title and meta candidates (page-one positions, 30+ impressions, 0 clicks). Check the change log first, and skip any page changed in the last 30 days.
4. Update the status column of the phase tables and the change log.
5. Report in under 15 lines: qualified leads this week and month to date against the phase target, top lead sources and pages, what shipped, owner tasks that are overdue, and next week's single focus.

## Change log

| Date | Page | Change |
|---|---|---|
| 2026-10-31 | / | Title now starts with "Stellix Soft" |
| 2026-10-31 | /about | Removed the duplicate brand from the title |
| 2026-10-31 | All blog posts | Added the end-of-post service CTA |
| 2026-10-31 | Site-wide | Added generate_lead and CTA click tracking |
