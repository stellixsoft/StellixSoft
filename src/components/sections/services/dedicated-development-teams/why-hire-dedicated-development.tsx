import { BACKGROUND_URL } from "@/src/lib/background-url";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

/** Image 2 — Why Hire Dedicated (after Why Hiring Is Broken) */
const BENEFITS = [
  "No recruitment delays",
  "Access to global talent",
  "Lower operational costs",
  "Faster time to market",
  "Flexible team scaling",
] as const;

export default function WhyHireDedicatedDevelopment() {
  const firstFour = BENEFITS.slice(0, 4);
  const last = BENEFITS[4];

  return (
    <section
      className="relative px-4 py-20 sm:px-6 md:py-28"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[56rem] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] sm:text-3xl md:text-4xl lg:text-[2.35rem]">
          Why Hire Dedicated Development Team Instead of In House
        </h2>
        <p className="mx-auto mt-5 max-w-[40rem] text-[15px] leading-[1.62] text-slate-600 md:mt-6 md:text-base">
          When you hire a dedicated development team, you bypass traditional hiring challenges and
          gain immediate productivity.
        </p>

        <ul className="mx-auto mt-12 grid max-w-[36rem] grid-cols-1 gap-4 text-left sm:mt-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4">
          {firstFour.map((label) => (
            <li key={label} className="flex items-start gap-3">
              <BlueTickIcon className="mt-0.5 h-[22px] w-[22px]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-electricBlue-solid)] md:text-xs">
                {label}
              </span>
            </li>
          ))}
          <li className="flex justify-center sm:col-span-2">
            <div className="flex items-start gap-3">
              <BlueTickIcon className="mt-0.5 h-[22px] w-[22px]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-electricBlue-solid)] md:text-xs">
                {last}
              </span>
            </div>
          </li>
        </ul>

        <p className="mx-auto mt-10 max-w-[42rem] text-[15px] leading-[1.62] text-slate-600 md:mt-12 md:text-base">
          Compared to in-house hiring, a dedicated development team offers speed, efficiency, and
          long-term reliability.
        </p>
      </div>
    </section>
  );
}
