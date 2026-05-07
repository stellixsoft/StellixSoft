import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function EnterpriseHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/60" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-24 text-center text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/75 md:text-sm">
          Enterprise Software Development
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
          Enterprise Software Development Services for Scalable Businesses
        </h1>
        <p className="mx-auto mt-4 max-w-[720px] text-lg font-light italic text-white/90 md:text-xl">
          For Complex Business Challenges
        </p>
        <p className="mx-auto mt-6 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          Our Enterprise software development services are designed to help organizations build
          reliable, scalable, and high-performance systems. From custom enterprise software
          development services to advanced enterprise application development, we deliver solutions
          tailored to complex business environments.
        </p>
        <p className="mx-auto mt-4 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          We focus on building systems that integrate seamlessly, handle large-scale operations, and
          evolve with your business growth.
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
            Schedule a Call
            <ArrowRightIcon />
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
