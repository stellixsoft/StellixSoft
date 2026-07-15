import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["client"];
};

export default function CaseStudyClient({ data }: Props) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
            The Client
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
            {data.headingLine1}
            {data.headingLine2 ? (
              <>
                <br />
                {data.headingLine2}
              </>
            ) : null}
          </h2>
          {data.paragraphs.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="mt-4 text-sm leading-relaxed text-[var(--color-neutralGray)] first:mt-5 md:text-base"
            >
              {p}
            </p>
          ))}
          {data.quote ? (
            <blockquote className="mt-6 border-l-2 border-[var(--color-electricBlue)] pl-4 text-sm italic leading-relaxed text-[var(--color-neutralGray)] md:text-base">
              &ldquo;{data.quote}&rdquo;
            </blockquote>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {data.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl bg-[#F3F4F6] px-5 py-5 sm:px-6 sm:py-6"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-neutralGray)] md:text-[11px]">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-[var(--color-deepSpace)] md:text-[15px]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
