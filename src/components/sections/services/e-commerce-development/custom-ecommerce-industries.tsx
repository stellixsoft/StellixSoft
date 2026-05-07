import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const INDUSTRY_BULLETS = [
  "Build scalable online platforms",
  "Optimize user experience",
  "Integrate third-party systems",
  "Improve conversion rates",
];

export default function CustomEcommerceIndustries() {
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
        <h2 className="mx-auto max-w-[760px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Custom Ecommerce Website
          <br />
          Development Across Industries
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          We offer custom ecommerce website development for businesses across industries including
          retail, wholesale, manufacturing, and marketplaces.
        </p>
        <p className="mx-auto mt-2 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our E-commerce development services help businesses:
        </p>

        <ul className="mx-auto mt-5 grid max-w-[850px] grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2">
          {INDUSTRY_BULLETS.map((item) => (
            <li key={item} className={`flex items-center gap-2.5 ${BLUE_TICK_LABEL_CLASS}`}>
              <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          From startups to enterprises, our custom ecommerce development solutions are built to
          grow with your business.
        </p>
      </div>
    </section>
  );
}
