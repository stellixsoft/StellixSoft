import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const specializations = [
  {
    smallTitle: "PHASE 1",
    smallItalic: "2-4 Weeks",
    title: "ASSESSMENT",
    items: ["Codebase audit", "Dependency map", "Risk assessment", "Migration roadmap"],
  },
  {
    smallTitle: "PHASE 2",
    smallItalic: "4-6 Weeks",
    title: "FOUNDATION",
    items: ["Architecture design", "Cloud infrastructure", "CI/CD pipeline", "Dev environment"],
  },
  {
    smallTitle: "PHASE 3",
    smallItalic: "Ongoing",
    title: "MIGRATE",
    items: ["Feature migration", "Parallel testing", "Performance validation", "User acceptance"],
  },
  {
    smallTitle: "PHASE 4",
    smallItalic: "1-2 Weeks",
    title: "CUTOVER",
    items: ["Zero-downtime switch", "Traffic migration", "Rollback plan", "Decommission plan"],
  },
  {
    smallTitle: "PHASE 5",
    smallItalic: "Continuous",
    title: "OPTIMIZE",
    items: ["Performance tuning", "New feature development", "Ongoing support", "Debt prevention"],
  },
];

function PhaseDiscIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" opacity="0.9" />
      <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Modernization() {
  return (
    <section
      id="specializations"
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
          backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-4 text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Modernization Without the Risk
        </h2>
        <div
          className="mx-auto mb-8 h-0.5 w-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-slate-600 md:text-lg">
          We don&apos;t do risky &quot;big bang&quot; rewrites that fail 70% of the time. Our incremental
          approach migrates your system piece by piece while keeping it fully operational.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {specializations.map((spec) => (
            <article
              key={spec.title}
              className="flex h-full flex-col rounded-2xl border border-gray-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(3,2,19,0.07)] md:p-7"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full shadow-sm"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              >
                <PhaseDiscIcon className="h-6 w-6" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--color-electricBlue)" }}>
                {spec.smallTitle}
              </p>
              <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--color-deepSpace)]">
                {spec.title}
              </h3>
              <p className="mt-1 text-xs font-medium italic text-slate-500">{spec.smallItalic}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {spec.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                    <BlueTickIcon className="mt-0.5 h-[13px] w-[13px] shrink-0" />
                    <span className={BLUE_TICK_BODY_CLASS}>{item}</span>
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
