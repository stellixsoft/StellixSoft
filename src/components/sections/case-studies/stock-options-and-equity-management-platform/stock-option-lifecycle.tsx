const lifecycleSteps = [
  {
    number: 1,
    title: "Grant Issued",
    description: "Board approves grant. Employee receives grant letter with terms.",
  },
  {
    number: 2,
    title: "Cliff Period (1 Year)",
    description: "No vesting during cliff. Employee stays for 1 year to qualify.",
  },
  {
    number: 3,
    title: "Cliff Vests (25%)",
    description: "25% becomes exercisable. Remaining options vest monthly.",
  },
  {
    number: 4,
    title: "Monthly Vesting (36 Mo)",
    description: "≈2.1% vests each month. Employee can exercise vested options.",
  },
  {
    number: 5,
    title: "Fully Vested (100%)",
    description: "All options are exercisable. Employee chooses when to exercise.",
  },
  {
    number: 6,
    title: "Exercise Options",
    description: "Employee can hold, sell, or exercise at exit event (IPO/M&A).",
  },
];

export default function StockOptionsAndEquityManagementPlatformLifecycle() {
  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,172,219,0.12) 0%, rgba(255,255,255,1) 65%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-12">
          Stock Option Lifecycle
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {lifecycleSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-slate-100 px-5 py-5 md:px-6 md:py-6 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold text-[var(--color-deepSpace)] bg-sky-50 border border-sky-100"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  {step.number}
                </div>
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold uppercase text-[var(--color-deepSpace)] mb-1">
                  {step.title}
                </p>
                <p className="text-xs md:text-sm text-[var(--color-neutralGray)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 text-[10px] md:text-[11px] text-center font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
          Platform handles all lifecycle stages automatically
        </p>
      </div>
    </section>
  );
}

