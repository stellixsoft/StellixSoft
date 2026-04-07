# StellixSoft

Marketing site for StellixSoft - services, industries, case studies, blog, pricing, and contact flows. Built with the Next.js App Router.

## Stack

- [Next.js](https://nextjs.org) 16 (React 19, Turbopack in dev)
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript

## Prerequisites

- Node.js 20+ (LTS recommended)

## Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` with the values below, then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy from [`.env.example`](./.env.example). Never commit `.env.local`.

| Area | Variables | Notes |
|------|------------|--------|
| **Forms** (contact, quote, newsletter) | `EMAIL_TO` | Inbox that receives submissions. |
| | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Send via your mailbox (SMTP). Optional: `SMTP_FROM`, `SMTP_TO`. |
| | `RESEND_API_KEY`, optional `RESEND_FROM` | Alternative to SMTP; omit `SMTP_*` if you use Resend. |
| **Calendly** (optional) | `CALENDLY_PERSONAL_ACCESS_TOKEN`, optional `CALENDLY_EVENT_TYPE_URI`, `CALENDLY_EVENT_SLUG` | Powers “next available slot” style CTAs. |
| **Analytics** (optional) | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID. |

If both SMTP credentials and `RESEND_API_KEY` are set, **SMTP is used first**.

**SMTP and encryption:** `SMTP_PORT=465` uses implicit TLS (SSL), which matches many cPanel / shared hosting instructions. `SMTP_PORT=587` typically uses STARTTLS (common for Gmail and others). The app configures Nodemailer accordingly; you only need the correct host, port, username, and password from your provider.

For production or preview deployments, set the same variables in your host’s environment (for example Vercel → Project → Settings → Environment Variables).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | ESLint |
| `npm run optimize:media` | Image optimization helper (see `scripts/optimize-media.mjs`) |

## Sitemap

The sitemap is generated at [`/sitemap.xml`](https://stellixsoft.com/sitemap.xml) from [`src/app/sitemap.ts`](./src/app/sitemap.ts). It includes static pages, service and industry routes, case studies, and all blog posts from [`src/data/blog-posts`](./src/data/blog-posts).

Optional: set `NEXT_PUBLIC_SITE_URL` (or `SITE_URL`) so preview/staging builds emit correct absolute URLs in the sitemap. If unset, the production origin from [`src/lib/legal.ts`](./src/lib/legal.ts) is used.

When you add a new top-level marketing route, add its URL to the `staticPages` array in `sitemap.ts` (or the appropriate slug list for nested sections).

## Deploy

The app is a standard Next.js deployment. [Vercel](https://vercel.com/docs/frameworks/nextjs) is the typical target; ensure all required environment variables are configured for Production (and Preview if you test forms there).

## Learn More

- [Next.js documentation](https://nextjs.org/docs)
