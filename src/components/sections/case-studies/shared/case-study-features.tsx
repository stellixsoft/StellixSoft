import type { CaseStudyContent, CaseStudyFeature } from "./types";

type Props = {
  data: CaseStudyContent["features"];
};

function CheckIcon() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-electricBlue)]"
      aria-hidden
    >
      <svg
        className="h-3 w-3 text-white"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 6.5 5 9l4.5-6" />
      </svg>
    </span>
  );
}

export function FeatureCheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyFeatures({ data }: Props) {
  return (
    <section className="bg-[#F3F5F8] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            {data.label ?? "What We Built"}
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
            {data.heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:gap-6">
          {data.items.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white px-6 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:px-7 sm:py-7"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-deepSpace)] md:text-[15px]">
                {feature.title}
              </h3>
              <FeatureCheckList items={feature.items} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ type }: { type?: CaseStudyFeature["icon"] }) {
  const className = "h-7 w-7";
  switch (type) {
    case "document":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
        </svg>
      );
    case "nav":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12L3 21l7-4 7 4-3-9m-4-8l-1.5 4h-5L5 7.5 3.5 3 6 5.5 8.5 3 7 7.5l4.5 3.5h-5L5 7" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "clock":
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      );
  }
}

export function CaseStudyHighlightFeatures({
  data,
}: {
  data: NonNullable<CaseStudyContent["highlightFeatures"]>;
}) {
  return (
    <section
      className="px-4 py-20 sm:px-6 md:py-28"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,172,219,0.10) 0%, rgba(255,255,255,0) 60%), #ffffff",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
          {data.heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-6">
          {data.items.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-[28px] border border-slate-100 bg-gradient-to-b from-[#f3fbff] to-white px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-7 sm:py-7"
            >
              <span className="mb-4 text-[var(--color-electricBlue)]">
                <FeatureIcon type={feature.icon} />
              </span>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--color-deepSpace)]">
                {feature.title}
              </h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--color-neutralGray)]">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue)]"
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
