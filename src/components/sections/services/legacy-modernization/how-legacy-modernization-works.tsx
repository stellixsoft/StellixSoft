import { BACKGROUND_URL } from "@/src/lib/background-url";

const PRINCIPLES = [
  {
    n: "1",
    title: "Keep the system live",
    lines: ["No downtime. No business disruption."],
  },
  {
    n: "2",
    title: "Replace, don't rebuild blindly",
    lines: ["We migrate modules based on impact and priority."],
  },
  {
    n: "3",
    title: "Validate continuously",
    lines: ["Every change is tested in real-world conditions."],
  },
];

export default function HowLegacyModernizationWorks() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[920px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          How Our Legacy Modernization Services Actually Work
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Instead of forcing a full rewrite, our Legacy modernization services focus on controlled
          transformation.
        </p>
        <p className="mx-auto mt-3 max-w-[940px] text-[15px] font-medium text-slate-700 md:text-base">
          We follow three guiding principles:
        </p>

        <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-6 text-left md:grid-cols-3 md:gap-8">
          {PRINCIPLES.map((p) => (
            <article
              key={p.n}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(3,2,19,0.06)] md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white"
                  style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                  aria-hidden
                >
                  {p.n}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-deepSpace)] md:text-[13px]">
                  {p.title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                {p.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This makes our application modernization services far more reliable than traditional
          approaches.
        </p>
      </div>
    </section>
  );
}
