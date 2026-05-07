import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function SalesforceDevelopmentHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/75" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1150px] px-6 py-24 text-center text-white">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
          Salesforce Development Services for Complex Business Workflows
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-[11px]">
          <span>Apex</span>
          <span className="text-white/40" aria-hidden>
            •
          </span>
          <span>Lightning</span>
          <span className="text-white/40" aria-hidden>
            •
          </span>
          <span>Integration</span>
          <span className="text-white/40" aria-hidden>
            •
          </span>
          <span>Automation</span>
        </div>

        <p className="mx-auto mt-8 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          Our Salesforce development services help organizations extend Salesforce beyond standard
          capabilities. From advanced automation to deep integrations, we deliver salesforce application
          development services that align with real business processes.
        </p>
        <p className="mx-auto mt-4 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          With our Custom Salesforce Development services, you&apos;re not limited by out-of-the-box
          features—you get a system that works exactly the way your business operates.
        </p>

        <div className="mt-10 flex justify-center">
          <CalendlyScheduleButton
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white shadow-[0_0_28px_rgba(56,189,248,0.35)] transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            }}
          >
            Schedule a Call &gt;
          </CalendlyScheduleButton>
        </div>
      </div>
    </section>
  );
}
