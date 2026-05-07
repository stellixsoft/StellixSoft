import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Device constraints (low power, intermittent connectivity)",
  "Firmware limitations",
  "Real-time data challenges",
  "Large-scale deployments",
];

export default function IoTServicesForHardwareTeams() {
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
          IoT Software Services Designed for Hardware Teams
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Hardware teams don&apos;t need generic software vendors—they need specialists.
        </p>
        <p className="mx-auto mt-2 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our IoT software services are built specifically for companies dealing with:
        </p>
        <ul className="mx-auto mt-5 grid max-w-[820px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          We align our IoT software development services with your hardware lifecycle—so software
          evolves as your devices evolve.
        </p>
      </div>
    </section>
  );
}
