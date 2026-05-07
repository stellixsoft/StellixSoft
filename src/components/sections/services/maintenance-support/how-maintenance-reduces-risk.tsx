import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const POINTS = [
  "Early detection prevents outages",
  "Continuous updates reduce vulnerabilities",
  "Monitoring ensures system stability",
  "Incremental improvements prevent technical debt",
];

export default function HowMaintenanceReducesRisk() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[900px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          How Our Application Maintenance Services Reduce Risk
        </h2>
        <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Every stage of our application maintenance services is designed to reduce operational risk:
        </p>
        <ul className="mx-auto mt-8 grid max-w-[640px] grid-cols-1 gap-3 text-left sm:mx-auto">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm md:text-[15px]">
              <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
              <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This structured approach makes our Software maintenance and support services reliable for
          long-term use.
        </p>
      </div>
    </section>
  );
}
