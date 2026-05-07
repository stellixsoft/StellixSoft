import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const AGENCIES = [
  "You get direct developer access",
  "Long-term commitment",
  "Better knowledge retention",
] as const;
const INHOUSE = ["Faster onboarding", "Lower cost", "No HR overhead"] as const;

export default function DedicatedTeamVsOtherModels() {
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
        <h2 className="mx-auto max-w-[52rem] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Dedicated Development Team vs Other Hiring Models
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:mb-10 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[42rem] text-[15px] leading-[1.62] text-slate-600 md:text-base">
          Choosing to hire a dedicated development team gives you a balance between control and flexibility that
          other models lack.
        </p>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-10 text-left sm:mt-14 md:flex-row md:justify-center md:gap-16 lg:gap-24">
          <div className="min-w-0 flex-1 md:max-w-[16rem]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-electricBlue-solid)] md:text-xs">
              Unlike agencies:
            </p>
            <ul className="flex flex-col gap-3.5">
              {AGENCIES.map((label) => (
                <li key={label} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                  <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 flex-1 md:max-w-[16rem]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-electricBlue-solid)] md:text-xs">
              Unlike in-house teams:
            </p>
            <ul className="flex flex-col gap-3.5">
              {INHOUSE.map((label) => (
                <li key={label} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                  <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[36rem] text-[15px] leading-[1.62] text-slate-600 md:mt-12 md:text-base">
          A dedicated development team combines the best of both worlds.
        </p>
      </div>
    </section>
  );
}
