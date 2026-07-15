import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["hero"];
};

export default function CaseStudyHero({ data }: Props) {
  return (
    <section className="relative flex min-h-[calc(80vh+120px)] flex-col overflow-hidden -mt-[100px]">
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-deepSpace)]/55 via-[var(--color-deepSpace)]/25 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-[1300px] flex-1 flex-col items-center justify-center px-6 pb-16 pt-36 text-center text-white md:pt-40">
          <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            {data.titleLine1}
            <br />
            <span className="font-medium">{data.titleLine2}</span>
          </h1>

          <p className="mt-6 text-sm text-white/75 md:text-base lg:text-lg">
            {data.subtitle}
          </p>

          <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:mt-14 md:grid-cols-4 md:gap-5">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-5 backdrop-blur-md md:px-5 md:py-6"
              >
                <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-electricBlue)] md:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/[0.06] backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row sm:gap-6">
            <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 md:text-[11px]">
              Industry: {data.industry}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-white/25 bg-transparent px-3.5 py-1.5 text-[10px] font-medium text-white/90 md:text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
