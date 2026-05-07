import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const STAFF_WHEN = [
  "You need 1–2 specialists",
  "You already have a strong internal team",
  "You want direct control over development",
];

const DEDICATED_WHEN = [
  "You need full product ownership",
  "You want managed delivery",
  "You're building from scratch",
];

export default function WhenToChooseStaffVsDedicated() {
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
        <h2 className="mx-auto max-w-[960px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          When to Choose Staff Augmentation vs Dedicated Development Team
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Choosing the right model is critical.
        </p>

        <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-10 text-left md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 md:text-left">
              Use Staff augmentation services when:
            </p>
            <ul className="space-y-3">
              {STAFF_WHEN.map((item) => (
                <li key={item} className={`flex items-start gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                  <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 md:text-left">
              Use a dedicated development team when:
            </p>
            <ul className="space-y-3">
              {DEDICATED_WHEN.map((item) => (
                <li key={item} className={`flex items-start gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
                  <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          We offer both IT staff augmentation services and dedicated development team models—based on
          what fits your situation.
        </p>
      </div>
    </section>
  );
}
