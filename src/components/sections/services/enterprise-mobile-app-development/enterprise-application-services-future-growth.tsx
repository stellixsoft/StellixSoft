import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const ITEMS = [
  "Modernize legacy systems",
  "Improve customer experience",
  "Increase operational efficiency",
  "Scale digital platforms",
];

export default function EnterpriseApplicationServicesFutureGrowth() {
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
          Enterprise Application Services for Future Growth
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our enterprise application services help businesses stay competitive by delivering modern,
          scalable mobile solutions.
        </p>
        <p className="mt-6 text-[14px] text-slate-500 md:text-[15px]">
          Through our mobile app development for enterprises, we enable organizations to:
        </p>
        <ul className="mx-auto mt-4 grid max-w-[880px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          With our Enterprise mobile app development services, your mobile strategy evolves with your
          business.
        </p>
      </div>
    </section>
  );
}
