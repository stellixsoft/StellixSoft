import Link from "next/link";

const plans = [
  {
    id: "single-developer",
    name: "Single Developer",
    price: "$4,000 – $5,600",
    subtext: "($25–35/hour effective)",
    features: [
      "Full-time dedication",
      "Direct communication",
      "Your tools & process",
      "Flexible monthly",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "small-team",
    name: "Small Team",
    price: "$11,000 – $15,000",
    subtext: "(3 developers)",
    features: [
      "Senior + mid‑level mix",
      "Technical lead included",
      "Code review processes",
      "Sprint planning",
      "Volume discount applied",
    ],
    badge: "Most Popular",
    cta: "Get Started",
    highlighted: true,
  },
  {
    id: "full-squad",
    name: "Full Squad",
    price: "$17,000 – $24,000",
    subtext: "(5 developers)",
    features: [
      "Full development team",
      "QA included",
      "DevOps support",
      "Dedicated tech lead",
      "Maximum volume discount",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

export default function TransparentPricing() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Transparent Pricing
        </h2>
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
                  ? "bg-[#050819] border-slate-900 text-white shadow-[0_32px_90px_rgba(15,23,42,0.7)]"
                  : "bg-white border-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[var(--color-electricBlue)] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(56,189,248,0.6)]">
                  {plan.badge}
                </div>
              )}

              <p
                className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] mb-4"
                style={{
                  color: plan.highlighted ? "rgba(148, 163, 184, 0.9)" : "rgba(148,163,184,1)",
                }}
              >
                {plan.name}
              </p>

              <div className="mb-2">
                <p
                  className={`text-2xl md:text-2xl font-light ${
                    plan.highlighted ? "text-white" : "text-[var(--color-deepSpace)]"
                  }`}
                >
                  {plan.price}
                  <span className="text-base md:text-lg font-normal text-slate-400">
                    /mo
                  </span>
                </p>
              </div>
              <p
                className={`text-xs md:text-sm mb-6 ${
                  plan.highlighted ? "text-slate-300" : "text-[var(--color-neutralGray)]"
                }`}
              >
                {plan.subtext}
              </p>

              <ul className="space-y-2.5 mb-8 text-sm md:text-[15px]">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-left"
                    style={{
                      color: plan.highlighted ? "rgba(226,232,240,1)" : "rgba(100,116,139,1)",
                    }}
                  >
                    <span
                      className={`mt-[4px] h-3 w-3 rounded-full border flex items-center justify-center ${
                        plan.highlighted
                          ? "border-sky-300/70 text-sky-300"
                          : "border-[var(--color-electricBlue)] text-[var(--color-electricBlue)]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          plan.highlighted ? "bg-sky-300" : "bg-[var(--color-electricBlue)]"
                        }`}
                      />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?plan=${plan.id}`}
                className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-[15px] font-medium border transition-colors text-center ${
                  plan.highlighted
                    ? "bg-[var(--color-electricBlue)] border-[var(--color-electricBlue)] text-white hover:bg-sky-400"
                    : "bg-white border-slate-200 text-[var(--color-deepSpace)] hover:bg-slate-50"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[11px] md:text-xs text-center text-[var(--color-neutralGray)]">
          *Rates vary by technology stack and seniority. Custom compositions available.
        </p>
      </div>
    </section>
  );
}

