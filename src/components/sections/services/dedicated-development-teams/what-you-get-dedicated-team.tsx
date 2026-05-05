import { BACKGROUND_URL } from "@/src/lib/background-url";
import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

/** Image 3 — What You Get (after What&apos;s Included) */
const LEFT = [
  "Full-time dedicated engineers",
  "Direct communication with developers",
  "Seamless integration with your tools",
] as const;
const RIGHT = ["Long-term knowledge retention", "Continuous delivery and support"] as const;

export default function WhatYouGetDedicatedTeam() {
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
        <h2 className="mx-auto max-w-[48rem] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] sm:text-3xl md:text-4xl lg:text-[2.35rem]">
          What You Get When You Hire Dedicated Development Team
        </h2>
        <p className="mx-auto mt-5 max-w-[40rem] text-[15px] leading-[1.62] text-slate-600 md:mt-6 md:text-base">
          When you hire a dedicated development team, you&apos;re not just getting
          developers—you&apos;re gaining a fully integrated product team.
        </p>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-5 text-left sm:mt-14 md:max-w-2xl md:flex-row md:justify-center md:gap-x-16 lg:gap-x-24">
          <ul className="flex min-w-0 flex-1 flex-col gap-4 md:max-w-[17rem]">
            {LEFT.map((label) => (
              <li key={label} className="flex items-start gap-3">
                <BlueTickIcon className="mt-0.5 h-[22px] w-[22px]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 md:text-xs">
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <ul className="flex min-w-0 flex-1 flex-col gap-4 md:max-w-[17rem]">
            {RIGHT.map((label) => (
              <li key={label} className="flex items-start gap-3">
                <BlueTickIcon className="mt-0.5 h-[22px] w-[22px]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 md:text-xs">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-[44rem] text-[15px] leading-[1.62] text-slate-600 md:mt-12 md:text-base">
          Our dedicated development team model ensures your project stays consistent, scalable, and
          aligned with your business goals.
        </p>
      </div>
    </section>
  );
}
