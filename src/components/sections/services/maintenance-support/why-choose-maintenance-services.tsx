import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const DIFFERENT = [
  "Real enterprise system experience",
  "Proactive monitoring approach",
  "Long-term partnership mindset",
  "Focus on stability + improvement",
];

export default function WhyChooseMaintenanceServices() {
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
          Why Companies Choose Our Application Maintenance Services
        </h2>
        <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Companies trust our application maintenance services because we go beyond basic support.
        </p>
        <p className="mt-6 text-[14px] text-slate-500 md:text-[15px]">What makes us different:</p>
        <ul className="mx-auto mt-4 grid max-w-[560px] grid-cols-1 gap-3 text-left sm:mx-auto">
          {DIFFERENT.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] md:text-base">
              <BlueTickIcon className="mt-1 h-[14px] w-[14px] shrink-0" />
              <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[880px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our Software maintenance and support services ensure your applications stay reliable, secure,
          and scalable.
        </p>
      </div>
    </section>
  );
}
