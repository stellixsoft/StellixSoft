import CaseStudyStatCounter from "./case-study-stat-counter";
import CaseStudyOutcomesBgVideo from "./case-study-outcomes-bg-video";
import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["outcomes"];
};

function ChipIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M15.75 3v1.5M8.25 19.5V21M15.75 19.5V21M4.5 8.25H3M4.5 15.75H3M21 8.25h-1.5M21 15.75h-1.5M6.75 6.75h10.5v10.5H6.75V6.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5v-4.5z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l5.25-5.25L12 12l6.75-6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19.5h18" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5a7.5 7.5 0 0115 0" />
    </svg>
  );
}

function CardIcon({ type }: { type?: "chip" | "chart" | "users" }) {
  if (type === "chart") return <ChartIcon />;
  if (type === "users") return <UsersIcon />;
  if (type === "chip") return <ChipIcon />;
  return null;
}

function StatsGrid({ stats }: { stats: CaseStudyContent["outcomes"]["stats"] }) {
  const count = stats.length;
  const mdCols =
    count >= 6
      ? "md:grid-cols-6"
      : count === 5
        ? "md:grid-cols-5"
        : "md:grid-cols-4";

  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 ${mdCols}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-5 text-center backdrop-blur-md sm:px-4 sm:py-6 md:px-3 lg:px-4"
        >
          <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
            <CaseStudyStatCounter value={stat.value} />
          </p>
          <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.1em] text-white/80 sm:text-[10px] md:text-[9px] lg:text-[11px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function DetailCards({
  cards,
  columns,
}: {
  cards: CaseStudyContent["outcomes"]["detailCards"];
  columns: 2 | 3;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-1"
      }`}
    >
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-5 backdrop-blur-md sm:px-6 sm:py-6"
        >
          <div className="mb-3 flex items-center gap-2.5 text-[var(--color-electricBlue)]">
            <CardIcon type={card.icon} />
            <p className="text-sm font-medium uppercase tracking-[0.1em]">
              {card.title}
            </p>
          </div>
          <ul className="space-y-2.5 text-sm leading-relaxed text-white/85 md:text-[15px]">
            {card.items.map((item) => (
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
  );
}

export default function CaseStudyOutcomes({ data }: Props) {
  const stacked = data.layout === "stacked";

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      <CaseStudyOutcomesBgVideo />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1200px] text-white">
        {stacked ? (
          <>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
                Outcomes
              </p>
              <h2 className="mt-3 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
                {data.headingLine1}
                {data.headingLine2 ? (
                  <>
                    <br />
                    {data.headingLine2}
                  </>
                ) : null}
              </h2>
              {data.description ? (
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                  {data.description}
                </p>
              ) : null}
            </div>

            <div className="mt-10 md:mt-12">
              <StatsGrid stats={data.stats} />
            </div>

            <div className="mt-4 md:mt-5">
              <DetailCards cards={data.detailCards} columns={2} />
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
                Outcomes
              </p>
              <h2 className="mt-3 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
                {data.headingLine1}
                {data.headingLine2 ? (
                  <>
                    <br />
                    {data.headingLine2}
                  </>
                ) : null}
              </h2>
              {data.description ? (
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                  {data.description}
                </p>
              ) : null}

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {data.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-md sm:px-5 sm:py-5"
                  >
                    <p className="text-xl font-semibold tracking-tight text-[var(--color-electricBlue)] md:text-2xl">
                      <CaseStudyStatCounter value={stat.value} />
                    </p>
                    <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/75 md:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <DetailCards cards={data.detailCards} columns={3} />
          </div>
        )}
      </div>
    </section>
  );
}
