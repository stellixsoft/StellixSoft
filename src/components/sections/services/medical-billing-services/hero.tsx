import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MedicalBillingHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/65" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[960px] px-6 py-24 text-center text-white">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl lg:text-[52px]">
          Medical Billing Services
        </h1>
        <p className="mx-auto mt-5 max-w-[820px] text-xl font-semibold leading-snug md:text-2xl">
          Optimize Revenue. Reduce Denials. Accelerate Growth.
        </p>
        <p className="mx-auto mt-8 max-w-[880px] text-base leading-relaxed text-white/88 md:text-[17px]">
          At Stellix Soft, we provide end-to-end medical billing solutions that help healthcare providers
          streamline operations, improve cash flow, and maximize reimbursements. Our experienced
          billing specialists and technology-driven workflows ensure accurate claim processing, reduced
          administrative burden, and faster payment cycles.
        </p>
        <CalendlyScheduleButton
          className="mx-auto mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full px-9 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            boxShadow: "0 0 24px color-mix(in srgb, var(--color-electricBlue) 40%, transparent)",
          }}
        >
          Schedule a Call
          <ChevronRight />
        </CalendlyScheduleButton>
      </div>
    </section>
  );
}
