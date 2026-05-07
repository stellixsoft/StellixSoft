import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Monitor distributed devices globally",
  "Automate workflows based on device events",
  "Enable predictive maintenance using real-time data",
  "Deliver mobile and web apps for end-users",
];

export default function IoTApplicationRealWorld() {
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
          IoT Application Development for Real-World Use Cases
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our IoT application development is built around real operational challenges—not generic use
          cases.
        </p>
        <p className="mx-auto mt-2 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          We help businesses:
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
          With our IoT software development services, your devices become part of a complete digital
          system.
        </p>
      </div>
    </section>
  );
}
