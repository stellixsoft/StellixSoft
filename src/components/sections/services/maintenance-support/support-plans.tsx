import Link from "next/link";

const plans = [
  {
    id: "essential",
    name: "Essential",
    subtitle: "For stable applications",
    price: "$1,500",
    hours: "10 hours included monthly",
    response: "Response within 24 hours",
    features: [
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
    hours: "25 hours included monthly",
    response: "Response within 8 hours",
    features: [
      "All Essential features",
      "Performance optimization",
      "Minor feature additions",
      "Priority support queue",
      "Weekly check-ins",
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
    hours: "60+ hours included monthly",
    response: "Response within 2 hours",
    features: [
      "All Professional features",
      "24/7 critical support",
      "Dedicated team members",
      "Proactive monitoring",
      "Monthly strategy reviews",
    ],
    bestFor: "Business-critical applications requiring rapid response",
    highlighted: false,
  },
];

export default function SupportPlans() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Support Plans
        </h2>
        <p className="mt-3 text-sm md:text-base text-[var(--color-neutralGray)] text-center max-w-2xl mx-auto">
          Flexible maintenance agreements designed to fit applications of any scale.
        </p>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[36px] border px-7 py-8 md:px-9 md:py-10 flex flex-col ${
                plan.highlighted
                  ? "bg-white shadow-[0_32px_90px_rgba(15,23,42,0.22)] border-sky-200"
                  : "bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] border-slate-100"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[var(--color-electricBlue)] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(56,189,248,0.6)]">
                  {plan.badge}
                </div>
              )}

              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-neutralGray)] mb-1">
                {plan.name}
              </p>
              <p className="text-xs md:text-sm text-[var(--color-neutralGray)] mb-4">
                {plan.subtitle}
              </p>

              <div className="mb-2">
                <p className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)]">
                  {plan.price}
                </p>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mt-1">
                  Per Month
                </p>
              </div>

              <p className="text-xs md:text-sm text-sky-500 mb-1">{plan.hours}</p>
              <p className="text-xs md:text-sm text-[var(--color-neutralGray)] mb-6">
                {plan.response}
              </p>

              <ul className="space-y-2.5 mb-8 text-sm md:text-[15px]">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-left text-[var(--color-neutralGray)]"
                  >
                    <span className="mt-[4px] h-3 w-3 rounded-full border border-[var(--color-electricBlue)] flex items-center justify-center text-[var(--color-electricBlue)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue)]" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="mb-4 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-neutralGray)]">
                  Best For:
                </p>
                <p className="mb-6 text-sm md:text-[15px] text-[var(--color-neutralGray)]">
                  {plan.bestFor}
                </p>
                <Link
                  href={`/contact?plan=${plan.id}`}
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm md:text-[15px] font-medium border transition-colors ${
                    plan.highlighted
                      ? "bg-[var(--color-electricBlue)] border-[var(--color-electricBlue)] text-white hover:bg-sky-500"
                      : "bg-white border-slate-200 text-[var(--color-deepSpace)] hover:bg-slate-50"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-[10px] md:text-xs text-center text-[var(--color-neutralGray)] space-y-1">
          <p>* Unused hours roll over (up to 2 months).</p>
          <p>* Additional hours available at hourly rates.</p>
          <p>* Custom plans available for unique needs.</p>
        </div>
      </div>
    </section>
  );
}

