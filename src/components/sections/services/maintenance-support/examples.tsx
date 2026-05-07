import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const examples = [
  "Upgraded .NET Framework application to .NET Core 6",
  "Fixed critical security vulnerability in authentication",
  "Optimized slow database queries (page load: 8s → 0.5s)",
  "Updated all npm dependencies to latest secure versions",
  "Implemented automated backup system for production database",
  "Fixed mobile app crash affecting 15% of users",
  "Added two-factor authentication per client request",
  "Migrated hosting from bare metal to AWS for reliability",
  "Implemented CloudWatch monitoring and alerting",
  "Resolved SignalR disconnection issues in real-time system",
];

export default function ExamplesOfMaintenance() {
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
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Examples of Maintenance We Provide
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {examples.map((example) => (
            <div
              key={example}
              className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:items-center md:px-6 md:py-4"
            >
              <BlueTickIcon className="mt-0.5 h-5 w-5 shrink-0 md:mt-0" />
              <p className={`text-left text-sm leading-snug md:text-[15px] ${BLUE_TICK_BODY_CLASS}`}>{example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
