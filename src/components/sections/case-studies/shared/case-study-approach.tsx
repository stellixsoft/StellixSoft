import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["approach"];
};

export default function CaseStudyApproach({ data }: Props) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            Our Approach
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-base">
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {data.phases.map((phase) => (
            <article
              key={phase.phase + phase.title}
              className="flex flex-col rounded-2xl bg-[#F3F4F6] px-5 py-5 sm:px-6 sm:py-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-electricBlue)]">
                  {phase.phase}
                </p>
                {phase.months ? (
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-deepSpace)]">
                    {phase.months}
                  </span>
                ) : null}
              </div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--color-deepSpace)] md:text-[15px]">
                {phase.title}
              </h3>

              <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--color-neutralGray)]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[var(--color-electricBlue)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
