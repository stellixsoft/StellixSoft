import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { CalendlyNextAvailableSlot } from "@/src/components/calendly-next-available-slot";
const BACKGROUND_URL = "/assets/images/background-url.webp";

export default function MedicalBillingCta() {
  return (
    <section
      className="px-4 py-16 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1240px]">
        <div
          className="relative overflow-hidden rounded-2xl p-8 md:rounded-[32px] md:p-14"
          style={{
            backgroundImage: "url('/assets/images/cta-background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 text-center text-white">
            <h2 className="mx-auto max-w-[720px] text-2xl font-light md:text-3xl lg:text-4xl">
              Free Yourself from{" "}
              <span className="font-medium">Billing Hassles</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/95 md:text-[17px] md:leading-relaxed">
              Ready to maximize your revenue while reducing administrative work? Let&apos;s team up! Our
              medical billing expert will reach out within 12 hours.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
              <CalendlyScheduleButton
                className="inline-flex cursor-pointer items-center gap-2 rounded-[50px] px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#10ACDB",
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.13)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Schedule a Discovery Call
              </CalendlyScheduleButton>
              <div className="flex flex-wrap items-center justify-center gap-2 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 shrink-0"
                  aria-hidden
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                <span className="text-center text-sm md:text-[15px]">
                  Or email us:{" "}
                  <a
                    href="mailto:info@stellixsoft.com"
                    className="font-semibold underline decoration-white/50 underline-offset-2 hover:opacity-90"
                  >
                    info@stellixsoft.com
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-green-400" aria-hidden />
                <span className="text-xs font-medium uppercase tracking-wider opacity-95">
                  Next Available Slot: <CalendlyNextAvailableSlot className="uppercase tracking-wider" />
                </span>
              </div>
              <span className="hidden text-white/50 sm:inline" aria-hidden>
                •
              </span>
              <span className="text-xs font-medium uppercase tracking-wider opacity-95">
                Global Team of 55+ Experts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
