import type { CaseStudyContent } from "./types";

type Props = {
  data: NonNullable<CaseStudyContent["workflow"]>;
};

export default function CaseStudyWorkflow({ data }: Props) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/images/case-study-section-bg.jpg)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/70" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1200px] text-white">
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">
          {data.steps.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-center gap-2">
              <article className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center backdrop-blur-md sm:px-4 sm:py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-electricBlue)]">
                  {step.title}
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/85 sm:text-xs">
                  {step.description}
                </p>
              </article>
              {index < data.steps.length - 1 ? (
                <span
                  className="hidden shrink-0 text-white/40 lg:inline"
                  aria-hidden
                >
                  ›
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 text-center md:mt-12 md:grid-cols-3 md:gap-6">
          {data.highlights.map((item) => (
            <div key={item.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-electricBlue)]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
