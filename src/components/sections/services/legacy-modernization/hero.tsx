import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function LegacyModernizationHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/65" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[980px] px-6 py-24 text-center">
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] md:text-sm"
          style={{ color: "var(--color-electricBlue)" }}
        >
          Zero Disruption Migration
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl lg:text-[52px]">
          Legacy Modernization Services Without Business Risk
        </h1>

        <div className="mx-auto mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full px-4 py-2.5 text-left">
          <BlueTickIcon className="h-3.5 w-3.5" />
          
          <span className="text-[11px] font-medium uppercase tracking-wide text-white/95 md:text-xs">
            Successfully migrated 15-year-old VB.NET to .NET Core 8
          </span>
        </div>

        <p className="mx-auto mt-8 max-w-[920px] text-base leading-relaxed text-white/85">
          Our Legacy modernization services help enterprises upgrade outdated systems without
          disrupting operations. Whether you&apos;re dealing with VB.NET, .NET Framework, or aging
          monolithic systems, we specialize in legacy software modernization that keeps your business
          running while transforming your technology.
        </p>
        <p className="mx-auto mt-4 max-w-[920px] text-base leading-relaxed text-white/85">
          Unlike traditional application modernization services, our approach prioritizes continuity,
          stability, and measurable progress at every stage.
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
