import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import {
  STELLIX_SOFT_LLC_PHONE_DISPLAY,
  STELLIX_SOFT_LLC_PHONE_TEL,
} from "@/src/lib/constants";

type Props = {
  /** Optional proof link shown as a small text link under the buttons. */
  proofHref?: string;
  proofLabel?: string;
  className?: string;
};

/**
 * Standard above-the-fold CTAs for lead pages: one main CTA (free estimate via the
 * contact form), one secondary (book a call), and a click-to-call link on mobile.
 * Clicks are tracked site-wide by LeadTracker (cta_contact_click, calendly_open,
 * contact_phone_click), so nothing extra is wired here.
 */
export default function HeroCtas({ proofHref, proofLabel, className }: Props) {
  return (
    <div className={`mt-10 flex flex-col items-center gap-4 ${className ?? ""}`.trim()}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
          }}
        >
          Get a free project estimate
        </Link>
        <CalendlyScheduleButton className="inline-flex rounded-lg ring-1 ring-inset ring-white/70 px-8 py-3.5 text-base font-medium text-white bg-transparent transition-colors hover:bg-white/10 hover:ring-white cursor-pointer">
          Book a 15-min call
        </CalendlyScheduleButton>
      </div>
      <a
        href={`tel:${STELLIX_SOFT_LLC_PHONE_TEL}`}
        className="sm:hidden text-base font-medium text-white underline underline-offset-4"
      >
        Call {STELLIX_SOFT_LLC_PHONE_DISPLAY}
      </a>
      {proofHref && proofLabel ? (
        <Link
          href={proofHref}
          className="text-sm text-white/80 underline underline-offset-4 hover:text-white"
        >
          {proofLabel}
        </Link>
      ) : null}
    </div>
  );
}
