import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function MaintenanceSupportHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/75" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1150px] px-6 py-24 text-center text-white">
        <p className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 md:text-xs">
          <span className="text-sky-300" aria-hidden>
            ◆
          </span>
          <span>Currently maintaining enterprise applications for Fortune 500 supply chains</span>
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
          Software Maintenance and Support Services for Business Continuity
        </h1>
        <p className="mx-auto mt-6 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          Our Software maintenance and support services are designed to keep mission-critical
          applications stable, secure, and continuously improving. From daily monitoring to long-term
          optimization, we provide application maintenance and support services that ensure your
          software performs reliably under real-world conditions.
        </p>
        <p className="mx-auto mt-4 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          Unlike reactive fixes, our application maintenance services focus on preventing issues before
          they impact your users.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CalendlyScheduleButton
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            }}
          >
            Schedule a Call
          </CalendlyScheduleButton>
          <Link
            href="/case-studies/enterprise-portal-modernization"
            className="inline-flex rounded-lg border border-white/70 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
