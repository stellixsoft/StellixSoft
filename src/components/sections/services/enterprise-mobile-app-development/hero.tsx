import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function EnterpriseMobileAppDevelopmentHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/75" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-24 text-center text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 md:text-sm">
          Enterprise Mobile App Development
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
          Enterprise Mobile App Development Services for Scalable Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          Our Enterprise mobile app development services are built to support complex business
          operations and large-scale user demands. From internal tools to customer-facing platforms,
          we specialize in mobile app development for enterprises that require performance, security,
          and seamless integration.
        </p>
        <p className="mx-auto mt-4 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          We combine enterprise application development with mobile-first strategies to deliver
          scalable and future-ready applications.
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
            href="/case-studies/logistics-management-platform"
            className="inline-flex rounded-lg border border-white/70 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
