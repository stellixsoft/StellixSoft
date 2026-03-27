import Link from "next/link";

const solutionItems = [
  "Migrated from VB.NET to .NET Core 6",
  "Added SignalR for real-time monitoring",
  "Implemented multi-tenant architecture",
  "Deployed to AWS for scalability",
  "Zero downtime throughout migration",
];

const stats = [
  { value: "Zero", label: "Downtime" },
  { value: "60%", label: "Faster" },
  { value: "3+", label: "Years" },
  { value: "10K+", label: "Devices" },
];

export default function HowWeModernized() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 60%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-8">
          How We Modernized a 15-Year Enterprise System
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-8" style={{ backgroundColor: "var(--color-electricBlue)" }} />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-electricBlue)" }}
            >
              The Challenge
            </h3>
            <p className="text-base text-[var(--color-deepSpace)] leading-relaxed mb-8">
              &quot;A global hardware manufacturer&apos;s business ran on a
              15-year-old VB.NET portal serving Fortune 500 clients including
              PepsiCo. The system couldn&apos;t scale, couldn&apos;t add modern
              features, and finding developers was nearly impossible.&quot;
            </p>

            <div className="flex items-start gap-3 mb-6">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: "var(--color-electricBlue)" }}
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  The Solution
                </h3>
                <ul className="space-y-2">
                  {solutionItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--color-deepSpace)]"
                    >
                      <span
                        className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--color-electricBlue)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue) 100%)",
              }}
            >
              Read the Full Case Study
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          {/* Right column: Migration Architecture card */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.08)] p-6 md:p-8">
            <h3 className="text-xs font-medium uppercase tracking-widest text-[var(--color-deepSpace)] text-center mb-8">
              Migration Architecture
            </h3>

            {/* Flow: Legacy → Modern */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 border-red-400 bg-red-50 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 md:w-10 md:h-10 text-red-500"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l-4 4" />
                  </svg>
                </div>
                <span className="mt-2 text-xs font-medium uppercase tracking-wider text-red-500">
                  Legacy Monolith
                </span>
              </div>
              <span className="text-2xl text-[var(--color-neutralGray)]" aria-hidden>
                &rarr;
              </span>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 flex items-center justify-center"
                  style={{
                    borderColor: "var(--color-electricBlue)",
                    backgroundColor: "rgba(16, 172, 219, 0.08)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={{ color: "var(--color-electricBlue)" }}
                    aria-hidden
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span
                  className="mt-2 text-xs font-medium uppercase tracking-wider"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  Modern API
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-center"
                >
                  <p className="text-lg md:text-xl font-medium text-[var(--color-deepSpace)]">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-neutralGray)] mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
