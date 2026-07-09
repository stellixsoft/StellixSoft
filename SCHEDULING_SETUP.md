# StellixSoft Scheduling System Setup

This project includes a Calendly-style scheduling widget, SQLite/Prisma database, Google Calendar integration, and a protected admin dashboard.

## 1. Install dependencies

```bash
npm install
```

## 2. Environment variables

Copy the example file and fill in values:

```bash
cp .env.example .env.local
```

Required for local development:

```env
DATABASE_URL="file:./dev.db"
ADMIN_EMAIL="admin@stellixsoft.com"
ADMIN_PASSWORD_HASH="your_bcrypt_hash"
ADMIN_SESSION_SECRET="a_long_random_secret"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_COMPANY_NAME="StellixSoft"
NEXT_PUBLIC_CONTACT_EMAIL="info@stellixsoft.com"
```

Google Calendar is optional for local testing. Without it, bookings are saved but no calendar invite is created.

## 3. Create admin password hash (bcrypt)

Generate a bcrypt hash for your admin password:

```bash
node -e "const bcrypt=require('bcryptjs'); bcrypt.hash('YourStrongPassword', 12).then(h=>console.log(h))"
```

Put the output in `.env.local`:

```env
ADMIN_PASSWORD_HASH="$2a$12$..."
```

Never commit `.env.local` or store plain-text passwords in code.

## 4. Prisma setup

Generate the Prisma client:

```bash
npm run prisma:generate
```

Run the initial migration (creates `prisma/dev.db`):

```bash
npm run prisma:migrate
```

When prompted for a migration name, use: `init_scheduling`

Seed the default event type (`15-minute-meeting`):

```bash
npm run db:seed
```

Optional: open Prisma Studio

```bash
npm run prisma:studio
```

### Production database (PostgreSQL)

Change `provider` in `prisma/schema.prisma` to `postgresql` and set:

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"
```

Then run:

```bash
npm run prisma:migrate
npm run db:seed
```

## 5. Google Calendar OAuth setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project.
3. Enable **Google Calendar API**.
4. Create **OAuth 2.0 Client ID** credentials (Web application).
5. Add authorized redirect URI for OAuth playground or your token generator flow.
6. Use [Google OAuth Playground](https://developers.google.com/oauthplayground/) or a small script to obtain a **refresh token** with scope:
   - `https://www.googleapis.com/auth/calendar`
7. Add to `.env.local`:

```env
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GOOGLE_REFRESH_TOKEN="..."
GOOGLE_CALENDAR_ID="primary"
```

When configured, new bookings:

- Create a Google Calendar event
- Add the guest as an attendee
- Request a Google Meet link
- Send calendar invitations via `sendUpdates: "all"`

## 6. Run the app

```bash
npm run dev
```

- Public site: `http://localhost:3000`
- Admin login: `http://localhost:3000/admin/login`
- Admin dashboard: `http://localhost:3000/admin`

## 7. Embed the scheduling widget

Import and use on any page:

```tsx
import ScheduleMeetingButton from "@/src/components/scheduling/ScheduleMeetingButton";

<ScheduleMeetingButton
  eventSlug="15-minute-meeting"
  label="Schedule Meeting"
/>
```

Optional custom styling (matches your existing button classes):

```tsx
<ScheduleMeetingButton
  eventSlug="15-minute-meeting"
  label="Schedule a Call"
  className="your-existing-button-classes"
/>
```

The default seeded event slug is `15-minute-meeting`.

## 8. Admin dashboard

After logging in at `/admin/login`, you can:

- Create / edit / delete event types
- Configure weekly availability, buffers, timezone, duration
- View all bookings
- Cancel bookings (updates Google Calendar when configured)
- Delete bookings

## 9. API overview

### Public

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/scheduling/event-types/[slug]` | Event details |
| GET | `/api/scheduling/availability?slug=...` | Available dates |
| GET | `/api/scheduling/availability?slug=...&date=YYYY-MM-DD` | Time slots |
| POST | `/api/scheduling/bookings` | Create booking |

### Admin (session required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/auth/login` | Login |
| DELETE | `/api/admin/auth/login` | Logout |
| GET/POST | `/api/admin/event-types` | List / create |
| GET/PATCH/DELETE | `/api/admin/event-types/[id]` | Read / update / delete |
| GET | `/api/admin/bookings` | List bookings |
| PATCH/DELETE | `/api/admin/bookings/[id]` | Cancel / delete |

## 10. Build for production

```bash
npm run build
npm start
```

## Troubleshooting

- **No available dates**: Check event type is active and availability JSON includes the selected weekdays.
- **Admin login fails**: Verify `ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH` in `.env.local`, then restart the dev server.
- **Google Calendar errors**: Confirm refresh token scope includes Calendar API write access.
- **Gmail “Open Email” button**: Opens a Gmail search for `event title + guest email`; it cannot open the exact invite without a Gmail message ID.
