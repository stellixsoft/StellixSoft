import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ENABLES = [
  "Faster deployments",
  "Better system reliability",
  "Improved collaboration",
  "Cost optimization",
];

export default function DevOpsImage05IntegratedStrategy() {
  return (
    <section
      className="relative px-4 py-16 text-center sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[940px]">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-[44px]">
          Integrated DevOps and Cloud Services Strategy
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          We combine DevOps and Cloud Services to create a unified infrastructure strategy that supports
          continuous delivery and scalability.
        </p>
        <p className="mx-auto mt-5 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          By integrating DevOps automation services with cloud platforms, we enable:
        </p>
        <div className="mt-8 flex w-full justify-center">
          <ul className="grid max-w-[520px] grid-cols-1 gap-x-10 gap-y-3 text-left sm:grid-cols-2">
            {ENABLES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm md:text-[15px]">
                <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
                <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
