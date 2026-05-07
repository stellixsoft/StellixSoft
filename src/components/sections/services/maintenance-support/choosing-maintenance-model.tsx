import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const LEVELS = [
  {
    title: "Light maintenance",
    detail: "→ Occasional bug fixes and updates",
  },
  {
    title: "Active maintenance",
    detail: "→ Regular optimization and feature updates",
  },
  {
    title: "Critical support",
    detail: "→ 24/7 monitoring and rapid response",
  },
];

export default function ChoosingMaintenanceModel() {
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
        <h2 className="mx-auto max-w-[920px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Choosing the Right Software Maintenance and Support Services Model
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Different applications need different levels of support.
        </p>
        <ul className="mx-auto mt-8 flex max-w-[640px] flex-col gap-4 text-left sm:mx-auto">
          {LEVELS.map((lvl) => (
            <li key={lvl.title} className="flex items-start gap-3 text-[15px] md:text-base">
              <BlueTickIcon className="mt-1 h-[14px] w-[14px] shrink-0" />
              <span>
                <span className="font-semibold text-[var(--color-deepSpace)]">{lvl.title}</span>
                <br />
                <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{lvl.detail}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our application maintenance and support services are flexible—so you only pay for what your
          system actually needs.
        </p>
      </div>
    </section>
  );
}
