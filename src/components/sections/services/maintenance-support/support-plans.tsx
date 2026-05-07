import Link from "next/link";
import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const plans = [
  {
    id: "essential",
    name: "Essential",
    subtitle: "For stable applications",
    price: "$1,500",
    hours: "10 hours included monthly",
    response: "Response within 24 hours",
    features: [
      "10 hours included monthly",
      "Response within 24 hours",
      "Security updates",
      "Bug fixes",
      "Monthly health check",
      "Business hours support",
    ],
    bestFor: "Stable apps needing occasional maintenance",
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    subtitle: "Most popular option",
    price: "$3,500",
    hours: "30 hours included monthly",
    response: "Priority support queue",
    features: [
      "30 hours included monthly",
      "Priority support queue",
      "All Essential features",
      "Performance optimization",
      "Minor feature additions",
      "Weekly check-ins",
      "Response within 8 hours",
    ],
    bestFor: "Active applications needing regular attention",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For mission-critical systems",
    price: "$7,000+",
    hours: "50+ hours included monthly",
    response: "24/7 critical support",
    features: [
      "50+ hours included monthly",
      "24/7 critical support",
      "All Professional features",
      "Dedicated team members",
      "Proactive monitoring",
      "Monthly strategy reviews",
      "Response within 2 hours",
    ],
    bestFor: "Business-critical applications requiring rapid response",
    highlighted: false,
  },
];

export default function SupportPlans() {
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
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Support Plans
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--color-neutralGray)] md:text-base">
          Flexible maintenance agreements designed to fit applications of any scale.
        </p>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-[36px] border px-7 py-8 md:px-9 md:py-10 ${
                plan.highlighted
                  ? "border-sky-200 bg-white shadow-[0_32px_90px_rgba(15,23,42,0.22)]"
                  : "border-slate-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-[var(--color-electricBlue-solid)] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(56,189,248,0.6)]">
                  {plan.badge}
                </div>
              )}

              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-neutralGray)] md:text-xs">
                {plan.name}
              </p>
              <p className="mb-4 text-xs text-[var(--color-neutralGray)] md:text-sm">{plan.subtitle}</p>

              <div className="mb-2">
                <p className="text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl">
                  {plan.price}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)] md:text-xs">
                  Per Month
                </p>
              </div>

              <p className="mb-1 text-xs text-sky-600 md:text-sm">{plan.hours}</p>
              <p className="mb-6 text-xs text-[var(--color-neutralGray)] md:text-sm">{plan.response}</p>

              <ul className="mb-8 space-y-2.5 text-left text-sm md:text-[15px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm md:text-[15px]">
                    <BlueTickIcon className="h-4 w-4 shrink-0" />
                    <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-neutralGray)] md:text-xs">
                  Best For:
                </p>
                <p className="mb-6 text-sm text-[var(--color-neutralGray)] md:text-[15px]">
                  &ldquo;{plan.bestFor}&rdquo;
                </p>
                <Link
                  href={`/contact?plan=${plan.id}`}
                  className={`inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-colors md:text-[15px] ${
                    plan.highlighted
                      ? "border-[var(--color-electricBlue)] bg-[var(--color-electricBlue-solid)] text-white hover:bg-sky-500"
                      : "border-slate-200 bg-white text-[var(--color-deepSpace)] hover:bg-slate-50"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[640px] space-y-1 text-center text-[10px] uppercase tracking-[0.12em] text-[var(--color-neutralGray)] md:text-xs md:tracking-normal md:normal-case">
          <p>* Unused hours roll over (up to 2 months).</p>
          <p>* Additional hours available at hourly rates.</p>
          <p>* Custom plans available for unique needs.</p>
        </div>
      </div>
    </section>
  );
}
