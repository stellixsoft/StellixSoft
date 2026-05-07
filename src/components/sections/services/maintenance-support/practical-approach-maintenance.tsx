import { BACKGROUND_URL } from "@/src/lib/background-url";

const STEPS = [
  { verb: "Observe", rest: "→ Monitor systems and detect anomalies early" },
  { verb: "Diagnose", rest: "→ Identify root causes, not just symptoms" },
  { verb: "Resolve", rest: "→ Apply permanent fixes" },
  { verb: "Improve", rest: "→ Optimize performance and prevent recurrence" },
];

export default function PracticalApproachMaintenance() {
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
        <h2 className="mx-auto max-w-[900px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          A Practical Approach to Application Maintenance Services
        </h2>
        <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Instead of random fixes, we follow a structured approach:
        </p>
        <div className="mx-auto mt-8 grid max-w-[720px] grid-cols-1 gap-4 text-left sm:text-center md:gap-5">
          {STEPS.map((row) => (
            <p
              key={row.verb}
              className="text-[15px] leading-relaxed text-slate-600 md:text-base"
            >
              <span className="font-semibold text-[var(--color-deepSpace)]">{row.verb}</span>{" "}
              <span>{row.rest}</span>
            </p>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This makes our application maintenance services proactive, not reactive.
        </p>
      </div>
    </section>
  );
}
