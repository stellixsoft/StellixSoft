import Link from "next/link";
import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

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
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-4 text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          How We Modernized a 15-Year Enterprise System
        </h2>
        <div
          className="mx-auto mb-10 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-electricBlue)" }}>
              The Challenge
            </h3>
            <p className="mb-8 text-base leading-relaxed text-[var(--color-deepSpace)]">
              &quot;A global hardware manufacturer&apos;s business ran on a 15-year-old VB.NET portal
              serving Fortune 500 clients including PepsiCo. The system couldn&apos;t scale,
              couldn&apos;t add modern features, and finding developers was nearly impossible.&quot;
            </p>

            <div className="mb-6">
              <div className="mb-4 flex items-center gap-2">
                <BlueTickIcon className="h-[18px] w-[18px] shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-electricBlue)" }}>
                  The Solution
                </h3>
              </div>
              <ul className="space-y-2">
                {solutionItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <BlueTickIcon className="mt-0.5 h-[13px] w-[13px] shrink-0" />
                    <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/case-studies/enterprise-portal-modernization"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
              }}
            >
              Read the Full Case Study
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(3,2,19,0.08)] md:p-8">
            <h3 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-deepSpace)]">
              Migration Architecture
            </h3>

            <div className="mb-8 flex items-center justify-center gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-red-400 bg-red-50 md:h-20 md:w-20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-8 w-8 text-red-500 md:h-10 md:w-10"
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
                  className="flex h-16 w-16 items-center justify-center rounded-xl border-2 md:h-20 md:w-20"
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
                    className="h-8 w-8 md:h-10 md:w-10"
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

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-center">
                  <p className="text-lg font-medium text-[var(--color-deepSpace)] md:text-xl">{stat.value}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-[var(--color-neutralGray)]">
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
