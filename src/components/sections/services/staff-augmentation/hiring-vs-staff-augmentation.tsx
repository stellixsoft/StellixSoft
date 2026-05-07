import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const BENEFITS = ["Skip recruitment cycles", "Avoid long-term commitments", "Get immediate access to experienced developers"];

export default function HiringVsStaffAugmentation() {
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
          The Reality of Hiring vs Staff Augmentation
        </h2>
        <div
          className="mx-auto mb-8 mt-4 h-0.5 w-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Hiring full-time developers takes time—often months. Projects can&apos;t wait.
        </p>
        <p className="mx-auto mt-3 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          With Staff augmentation services, you:
        </p>
        <ul className="mx-auto mt-6 grid max-w-[640px] grid-cols-1 gap-3 text-left sm:mx-auto sm:max-w-none sm:grid-cols-1">
          {BENEFITS.map((item) => (
            <li
              key={item}
              className={`flex items-center justify-center gap-2.5 text-left sm:justify-start md:mx-auto md:max-w-[520px] ${BLUE_TICK_LABEL_CLASS}`}
            >
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our IT staff augmentation services are designed for speed, without compromising quality.
        </p>
      </div>
    </section>
  );
}
