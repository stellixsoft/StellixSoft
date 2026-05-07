import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Automated CI/CD pipelines",
  "Infrastructure as Code (IaC)",
  "Continuous monitoring and alerts",
  "Automated rollback and recovery systems",
];

export default function DevOpsImage03AutomationServices() {
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
          DevOps Automation Services for Faster Delivery
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our DevOps automation services are designed to remove bottlenecks and streamline your development
          lifecycle. By automating testing, deployment, and infrastructure management, we help teams ship
          faster with fewer errors.
        </p>
        <p className="mx-auto mt-8 text-[14px] text-[var(--color-neutralGray)] md:text-[15px]">We implement:</p>
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
          With DevOps and Cloud Services, automation becomes the foundation of your development process.
        </p>
      </div>
    </section>
  );
}
