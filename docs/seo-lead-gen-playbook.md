# SEO and lead generation playbook

The goal is qualified leads (contact form submissions and booked Calendly calls), not traffic for its own sake. The weekly SEO and CRO routine reads this file and works through it in order. Update the status lines as items ship.

Baseline (Oct 3 to Oct 30, 2026): 37 Google clicks, 3,457 impressions, about 110 real organic sessions, 0 tracked leads.

## North-star metrics

Check these every week, in this order:

1. `generate_lead` events in GA4 (`method` = `contact_form` or `calendly`). This is the number that matters.
2. Lead-intent clicks: `cta_contact_click`, `calendly_open`, `contact_email_click`, `contact_phone_click`, `tool_consultation_click`.
3. Organic clicks from Search Console, excluding brand queries (stellix, stellix soft, stellixsoft).
4. Brand clicks, which act as a proxy for outbound and referral awareness.

Report on real traffic only. Exclude sessions with under 5 seconds of engagement from Singapore and China "Direct". They are bots (263 of 524 Direct sessions in October).

## Tracking (shipped Oct 31, 2026)

- `generate_lead` fires on every successful contact form submission and on every Calendly booking (`calendly.event_scheduled`).
- `src/components/analytics/LeadTracker.tsx` tracks clicks site-wide on mailto, tel, Calendly and /contact links.
- **Manual step in the GA4 admin (owner):** mark `generate_lead` as a key event. Optionally also mark `tool_lead_submit` and `calendly_open`.

## Weekly routine checklist

1. Pull 7-day and 28-day GSC numbers by query and page, and GA4 lead events by landing page and channel.
2. Find page-one pages (position 10 or better) with 30+ impressions and 0 clicks. Rewrite the title and meta description around the top query, keeping the title under 60 characters with a concrete hook. Blog post titles live in Firestore, so edit them in the admin blog editor, not in `src/data/blog-posts.ts`.
3. Find page-two pages (positions 11 to 20) with 50+ impressions. Expand the content around the queries they already get, add an FAQ section, and add 2 to 3 internal links from related posts and the matching service page (`src/data/service-internal-links.ts`).
4. Check that every new blog post has a category that maps to a CTA in `src/components/sections/blog/blog-service-cta.tsx`.
5. Publish or refresh at least one bottom-of-funnel post per week (list below).
6. Report: leads this week, top lead landing pages, what changed, and next week's single focus.

## Content queue (highest buying intent first)

Bottom-of-funnel posts convert better than general guides. Each one should end with the in-article CTA and link to its service page.

1. VB6 / VB.NET to .NET 8 migration cost and timeline (5+ queries at positions 16 to 29 already)
2. Enterprise software development cost in 2026: rates by region and team type (supports /pricing)
3. Dedicated team vs staff augmentation: costs, pros and cons, which to pick (existing post is at position 38; refresh it)
4. Custom SFCC / Salesforce Commerce Cloud development (64 impressions at position 11.7)
5. Enterprise software maintenance and support pricing models (67 impressions at position 12)
6. Headless commerce migration checklist for enterprise (119 impressions at position 12.8)
7. IoT device management platform: build vs buy (supports /services/iot-software)
8. How to choose an offshore software development company (checklist plus red flags)

## Title and meta queue (edit in the admin blog editor)

| Post | Suggested title |
|---|---|
| zero-downtime-database-migration-strategies | Database Cutover Without Downtime: CDC Migration Plan [2026] |
| azure-devops-vs-github-actions-enterprise | Azure DevOps vs GitHub Actions (2026): Which to Choose? |
| headless-commerce-enterprise-ecommerce | Enterprise Headless Commerce: When It Pays Off [2026] |
| php2shell-wordpress-to-nextjs-migration | WordPress to Next.js Migration: Enterprise Guide [2026] |
| software-maintenance-support-best-practices | Enterprise Software Maintenance: Models, Costs, SLAs |
| vb-net-migration-strategies-modern-stack | VB to .NET Migration: Strategy, Tools and Costs [2026] |

## Off-site (owner actions, highest leverage for fast leads)

SEO compounds slowly. These bring leads faster:

- Collect 3 to 5 new Clutch and GoodFirms reviews from past clients. Directory referrals already send engaged visitors.
- Send LinkedIn outbound to target roles (CTO, VP Engineering) at companies with legacy .NET or IoT needs, linking to the Engineering Lab tools.
- Post the Engineering Lab tools (modernization assessment, RFID ROI calculator, IoT demo) on LinkedIn and in relevant communities.
- Put a "free 30-minute architecture review" offer on LinkedIn, linking to /contact.

## Longer-term

- `/services/enterprise-development` (position 46) and `/services/iot-software` (position 55) target very competitive terms. Add case-study numbers, client logos and reviews, and deeper unique content, and point internal links from every related post at them. Measure progress monthly, not weekly.
