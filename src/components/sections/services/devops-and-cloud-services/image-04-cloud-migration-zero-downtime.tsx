import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Infrastructure assessment",
  "Migration strategy planning",
  "Secure data transfer",
  "Performance validation",
];

export default function DevOpsImage04CloudMigrationZeroDowntime() {
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
          Cloud Migration Services with Zero Downtime
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our cloud migration services ensure smooth and secure transition from legacy systems to modern
          cloud environments. We handle everything from planning to execution, minimizing risk and downtime.
        </p>
        <p className="mx-auto mt-8 text-[14px] text-[var(--color-neutralGray)] md:text-[15px]">
          Our approach includes:
        </p>
        <div className="mt-5 flex w-full justify-center">
          <ul className="grid max-w-[640px] grid-cols-1 gap-x-10 gap-y-3 text-left sm:grid-cols-2">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm md:text-[15px]">
                <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
                <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mx-auto mt-10 max-w-[900px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Through our DevOps consulting services, we ensure your migration aligns with business goals and future
          scalability.
        </p>
      </div>
    </section>
  );
}
