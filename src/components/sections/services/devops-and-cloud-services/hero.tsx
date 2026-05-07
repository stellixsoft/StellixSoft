import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function DevOpsAndCloudServicesHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/75" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1150px] px-6 py-24 text-center text-white">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/75 md:text-sm">
          DevOps &amp; Cloud Services
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
          DevOps and Cloud Services for Scalable Modern Infrastructure
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/72 md:text-[11px]">
          <span>AWS</span>
          <span className="text-white/35" aria-hidden>
            •
          </span>
          <span>Google Cloud</span>
          <span className="text-white/35" aria-hidden>
            •
          </span>
          <span>Azure</span>
          <span className="text-white/35" aria-hidden>
            •
          </span>
          <span>Docker</span>
          <span className="text-white/35" aria-hidden>
            •
          </span>
          <span>Kubernetes</span>
        </div>

        <p className="mx-auto mt-8 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          Our DevOps and Cloud Services help businesses build, deploy, and scale applications faster with
          automation, reliability, and security at the core. From DevOps consulting services to full-scale
          cloud migration services, we deliver solutions designed for real-world performance.
        </p>
        <p className="mx-auto mt-4 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          We combine DevOps automation services with cloud expertise to eliminate manual processes, reduce
          deployment risks, and accelerate time-to-market.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CalendlyScheduleButton
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
              boxShadow:
                "0 0 28px color-mix(in srgb, var(--color-electricBlue) 38%, transparent)",
            }}
          >
            Consulting Call
          </CalendlyScheduleButton>
          <Link
            href="/case-studies/multi-location-service-business-platform"
            className="inline-flex rounded-lg border border-white/70 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
