import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const POINTS = [
  "Real experience with 10,000+ device deployments",
  "Strong backend + cloud expertise",
  "Long-term partnerships (not one-off builds)",
  "Deep understanding of hardware + software integration",
];

export default function WhyChooseIoTServices() {
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
        <h2 className="mx-auto max-w-[940px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Why Companies Choose Our IoT Software Development Services
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Companies choose our IoT software development services because we go beyond dashboards
          and demos—we build production-grade systems.
        </p>
        <p className="mx-auto mt-2 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          What sets us apart:
        </p>
        <ul className="mx-auto mt-5 grid max-w-[880px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {POINTS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our IoT application development ensures your product is reliable, scalable, and ready for
          enterprise use.
        </p>
      </div>
    </section>
  );
}
