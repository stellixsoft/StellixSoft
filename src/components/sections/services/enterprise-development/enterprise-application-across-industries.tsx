import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Build scalable platforms",
  "Optimize workflows",
  "Integrate multiple systems",
  "Improve operational efficiency",
];

export default function EnterpriseApplicationAcrossIndustries() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[900px] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-[44px]">
          Enterprise Application Development Across Industries
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          We provide enterprise application development solutions for industries including
          manufacturing, logistics, healthcare, finance, and SaaS platforms.
        </p>
        <p className="mx-auto mt-6 text-sm font-medium text-[var(--color-neutralGray)] md:text-[15px]">
          Our Enterprise software development services help organizations:
        </p>
        <ul className="mx-auto mt-6 grid max-w-[960px] grid-cols-1 gap-x-14 gap-y-3 sm:grid-cols-2 md:gap-x-16">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start justify-center gap-2.5 sm:justify-start">
              <BlueTickIcon className="mt-0.5 h-[13px] w-[13px] shrink-0" />
              <span className="max-w-md text-left text-[11px] font-semibold uppercase leading-snug tracking-[0.13em] text-[var(--color-deepSpace)] md:text-xs">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our custom enterprise software development services ensure every solution is built for
          long-term performance.
        </p>
      </div>
    </section>
  );
}
