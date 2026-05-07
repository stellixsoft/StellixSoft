import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function StaffAugmentationHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/75" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-24 text-center text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 md:text-sm">
          Staff Augmentation
        </p>
        <h1 className="text-3xl font-light leading-tight md:text-5xl lg:text-[56px]">
          Staff Augmentation Services for Fast,
          <br />
          <span className="font-semibold">Flexible Team Scaling</span>
        </h1>

        <div className="mx-auto mt-8 flex max-w-[920px] flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 md:text-[11px]">
          <span className="text-[var(--color-electricBlue)]" aria-hidden>
            ◆
          </span>
          <span>Developers currently embedded with Fortune 500 teams and growing startups</span>
        </div>

        <p className="mx-auto mt-8 max-w-[920px] text-sm leading-relaxed text-white/85 md:text-base">
          Our Staff augmentation services help companies quickly expand their development capacity
          without the delays of traditional hiring. Whether you need a single expert or want to
          scale your engineering team, we provide IT staff augmentation services that integrate
          directly into your workflows.
        </p>
        <p className="mx-auto mt-4 max-w-[920px] text-sm leading-relaxed text-white/85 md:text-base">
          From individual contributors to a full dedicated development team, we give you the
          flexibility to scale based on real project needs.
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
