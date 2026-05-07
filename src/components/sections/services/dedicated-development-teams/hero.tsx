import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

const HERO_FEATURES = [
  "Interview before commit",
  "Replace anytime",
  "2-week scale notice",
] as const;

export default function DedicatedDevelopmentTeamsHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/75" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 py-24 text-center text-white">
        <h1 className="text-2xl font-semibold leading-snug md:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Hire Dedicated Development Team for Faster Product Delivery
        </h1>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-electricBlue)] md:text-sm">
          Dedicated Development Teams
        </p>

        <p className="mt-4 text-4xl font-extralight leading-tight md:text-5xl lg:text-6xl">
          Your Team,
          <br />
          <span className="font-semibold">Our Talent</span>
        </p>

        <div className="mx-auto mt-8 flex max-w-[920px] flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 md:text-[11px]">
          {HERO_FEATURES.map((label) => (
            <span key={label} className="inline-flex items-center gap-2">
              <BlueTickIcon className="h-[18px] w-[18px] md:h-[22px] md:w-[22px]" />
              {label}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[920px] text-sm leading-relaxed text-white/85 md:text-base">
          Looking to scale your engineering capacity without delays? Hire dedicated development team
          solutions that give you immediate access to experienced developers working exclusively on your
          projects.
        </p>
        <p className="mx-auto mt-4 max-w-[920px] text-sm leading-relaxed text-white/85 md:text-base">
          Our dedicated development team model helps businesses accelerate development, reduce hiring
          costs, and maintain full control over workflows—without the overhead of in-house recruitment.
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
            <span aria-hidden className="text-lg leading-none">
              &gt;
            </span>
          </CalendlyScheduleButton>
          <Link
            href="/case-studies"
            className="inline-flex rounded-lg border border-white/70 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
