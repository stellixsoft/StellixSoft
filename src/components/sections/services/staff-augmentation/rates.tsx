import Link from "next/link";
import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const plans = [
  {
    level: "Mid-Level Developer",
    experience: "3–5 years experience",
    price: "$3,500 – $4,500",
    hourly: "PER MONTH (~$22–28/HOUR)",
    features: ["Solid technical skills", "Works independently", "Good communication", "Full-time dedication"],
    highlighted: false,
  },
  {
    level: "Senior Developer",
    experience: "5–8 years experience",
    price: "$4,500 – $5,600",
    hourly: "PER MONTH (~$28–35/HOUR)",
    features: ["Advanced expertise", "Architectural input", "Mentors others", "Complex problem solving"],
    badge: "MOST POPULAR",
    highlighted: true,
  },
  {
    level: "Tech Lead / Architect",
    experience: "8+ years experience",
    price: "$5,600 – $7,000",
    hourly: "PER MONTH (~$35–44/HOUR)",
    features: ["System design", "Team leadership", "Technical strategy", "Enterprise experience"],
    highlighted: false,
  },
];

export default function StaffAugmentationRates() {
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
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">Staff Augmentation Rates</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--color-neutralGray)] md:text-base">
          Transparent, predictable monthly rates based on developer seniority.
        </p>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.level}
              className={`relative flex flex-col rounded-[36px] border px-7 py-8 md:px-9 md:py-10 ${
                plan.highlighted
                  ? "border-sky-300 bg-white shadow-[0_32px_90px_rgba(15,23,42,0.22)]"
                  : "border-slate-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-[var(--color-electricBlue-solid)] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(56,189,248,0.45)]">
                  {plan.badge}
                </div>
              )}

              <p className="mb-1 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-neutralGray)] md:text-xs">
                {plan.level}
              </p>
              <p className="mb-4 text-center text-xs text-[var(--color-neutralGray)] md:text-sm">{plan.experience}</p>

              <div className="mb-2 text-center">
                <p className="text-2xl font-semibold text-[var(--color-deepSpace)] md:text-3xl">{plan.price}</p>
              </div>
              <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-600 md:text-xs">{plan.hourly}</p>

              <ul className="mb-8 flex-1 space-y-2.5 text-sm md:text-[15px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-left text-sm md:text-[15px]">
                    <BlueTickIcon className="h-[14px] w-[14px] shrink-0" />
                    <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto inline-flex items-center justify-center rounded-full border px-6 py-3 text-center text-sm font-medium transition-colors md:text-[15px] ${
                  plan.highlighted
                    ? "border-[var(--color-electricBlue)] bg-[var(--color-electricBlue-solid)] text-white hover:bg-sky-600"
                    : "border-slate-200 bg-white text-[var(--color-deepSpace)] hover:bg-slate-50"
                }`}
              >
                Discuss Hiring
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 space-y-1 text-center text-[10px] text-[var(--color-neutralGray)] md:text-xs">
          <p>* Rates vary by specific technology and availability.</p>
          <p>* Part-time arrangements available (minimum 20 hrs/week).</p>
          <p>* Long-term discounts available.</p>
        </div>
      </div>
    </section>
  );
}
