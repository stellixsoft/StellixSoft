import Image from "next/image";
import type { ReactNode } from "react";
import AnalyticsLink from "@/src/components/sections/hannan/analytics-link";
import CalendlyCardButton from "@/src/components/sections/hannan/calendly-card-button";
import DigitalCardFooter from "@/src/components/sections/hannan/digital-card-footer";
import QrCodeSvg from "@/src/components/sections/hannan/qr-code-svg";
import ShareCardButton from "@/src/components/sections/hannan/share-card-button";
import type { BusinessCard } from "@/src/lib/business-cards";

type Props = {
  card: BusinessCard;
  qrSvg: string;
};

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.46-1.26a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5A8.48 8.48 0 0 1 21 11v.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77A1.77 1.77 0 0 0 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ContactRow({
  href,
  icon,
  label,
  value,
  external = false,
  eventName,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
  eventName?: string;
}) {
  return (
    <AnalyticsLink
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      eventName={eventName}
      eventParams={{ card_slug: "hannan", contact_method: label.toLowerCase() }}
      className="flex min-h-14 items-center gap-4 rounded-2xl border border-black/8 bg-white px-4 py-3 shadow-[0_8px_30px_rgba(3,2,19,0.06)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)] focus-visible:ring-offset-2"
      aria-label={`${label}: ${value}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-surfaceBlue)_12%,white)] text-[var(--color-accentOnLight)]">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-neutralGray)]">
          {label}
        </span>
        <span className="block truncate text-sm font-medium text-[var(--color-deepSpace)]">
          {value}
        </span>
      </span>
    </AnalyticsLink>
  );
}

export default function BusinessCardPage({ card, qrSvg }: Props) {
  const whatsappUrl = `https://wa.me/${card.contact.whatsappDigits}?text=${encodeURIComponent(card.contact.whatsappPrefill)}`;
  const linkedInDisplay = card.contact.personalLinkedInUrl
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--color-lightGray)] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8"
      style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-[420px] md:max-w-[520px]">
        <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(3,2,19,0.12)] motion-safe:animate-fade-in">
          <div className="bg-gradient-to-br from-[var(--color-deepSpace)] via-[var(--color-deepSpace)] to-[var(--color-surfaceBlue)] px-5 pb-16 pt-8 sm:px-6">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Digital Business Card
                </p>
                <p className="mt-2 max-w-[260px] text-sm leading-6 text-white/90">
                  Save contact, book a meeting, and share instantly.
                </p>
              </div>
              <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                {card.company}
              </span>
            </div>
          </div>

          <div className="px-5 pb-6 sm:px-6">
            <div className="-mt-12 flex flex-col items-start">
              <div className="rounded-full border-4 border-white bg-white shadow-[0_10px_30px_rgba(3,2,19,0.16)]">
                <Image
                  src={card.photo.publicPath}
                  alt={card.photo.alt}
                  width={112}
                  height={112}
                  priority
                  sizes="(max-width: 768px) 112px, 128px"
                  className="h-28 w-28 rounded-full object-cover md:h-32 md:w-32"
                />
              </div>

              <div className="mt-5 w-full">
                <h1 className="text-[32px] font-semibold leading-[1.08] text-[var(--color-deepSpace)]">
                  {card.name}
                </h1>
                <p className="mt-2 text-base font-medium text-[var(--color-accentOnLight)]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--color-neutralGray)]">
                  {card.company}
                </p>
                <p className="mt-4 max-w-[32ch] text-sm leading-6 text-[var(--color-deepSpace)]/80">
                  {card.positioningStatement}
                </p>
                {card.photo.todo ? (
                  <p className="mt-3 rounded-xl border border-dashed border-[var(--color-electricBlue-solid)]/30 bg-[color-mix(in_srgb,var(--color-surfaceBlue)_8%,white)] px-3 py-2 text-xs leading-5 text-[var(--color-accentOnLight)]">
                    {card.photo.todo}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <AnalyticsLink
                href={card.urls.vcardPath}
                eventName="business_card_save_contact"
                eventParams={{ card_slug: "hannan" }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-electricBlue-solid)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_30px_rgba(9,128,168,0.28)] transition-colors hover:bg-[var(--color-accentOnLight)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)] focus-visible:ring-offset-2"
              >
                <DownloadIcon />
                Save contact
              </AnalyticsLink>

              <CalendlyCardButton className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[var(--color-deepSpace)] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[color-mix(in_srgb,var(--color-deepSpace)_88%,white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)] focus-visible:ring-offset-2" />

              <AnalyticsLink
                href={card.assets.companyProfilePublicPath}
                target="_blank"
                rel="noopener noreferrer"
                eventName="business_card_download_profile"
                eventParams={{ card_slug: "hannan" }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[var(--color-electricBlue-solid)]/30 bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--color-accentOnLight)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-surfaceBlue)_8%,white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)] focus-visible:ring-offset-2"
              >
                <DownloadIcon />
                Download company profile
              </AnalyticsLink>
            </div>

            <div className="mt-6 space-y-3">
              <ContactRow
                href={`tel:${card.contact.phoneTel}`}
                icon={<PhoneIcon />}
                label="Call"
                value={card.contact.phoneDisplay}
              />
              <ContactRow
                href={whatsappUrl}
                icon={<MessageIcon />}
                label="WhatsApp"
                value={card.contact.whatsappTel}
                external
                eventName="business_card_whatsapp"
              />
              <ContactRow
                href={`mailto:${card.contact.email}`}
                icon={<MailIcon />}
                label="Email"
                value={card.contact.email}
              />
              <ContactRow
                href={card.contact.personalLinkedInUrl}
                icon={<LinkedInIcon />}
                label="LinkedIn"
                value={linkedInDisplay}
                external
              />
              <ContactRow
                href={card.contact.websiteUrl}
                icon={<GlobeIcon />}
                label="Website"
                value={card.contact.websiteDisplay}
                external
              />
            </div>

            <div className="mt-6">
              <ShareCardButton
                title={`${card.name} | ${card.company}`}
                text={`Connect with ${card.name} at ${card.company}.`}
                url={card.urls.pageUrl}
              />
            </div>

            <div className="mt-6 md:hidden">
              <div className="rounded-2xl border border-black/8 bg-[var(--color-lightGray)] px-4 py-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-neutralGray)]">
                  Scan to open on another device
                </p>
                <QrCodeSvg
                  svg={qrSvg}
                  label={`QR code linking to ${card.urls.pageUrl}`}
                  className="mx-auto mt-3 h-24 w-24 [&_svg]:h-full [&_svg]:w-full"
                />
              </div>
            </div>
          </div>

          <DigitalCardFooter />
        </article>
      </div>
    </main>
  );
}
