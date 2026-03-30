const plans = [
  {
    level: "Mid-Level Developer",
    experience: "3–5 years experience",
    price: "$3,500 – $4,500",
    hourly: "($22–28/hour)",
    features: [
      "Solid technical skills",
      "Works independently",
      "Good communication",
      "Full-time dedication",
    ],
    highlighted: false,
  },
  {
    level: "Senior Developer",
    experience: "5–8 years experience",
    price: "$4,500 – $5,600",
    hourly: "($28–35/hour)",
    features: [
      "Advanced expertise",
      "Architectural input",
      "Mentors others",
      "Complex problem solving",
    ],
    badge: "Most Popular",
    highlighted: true,
  },
  {
    level: "Tech Lead / Architect",
    experience: "8+ years experience",
    price: "$5,600 – $7,000",
    hourly: "($35–44/hour)",
    features: [
      "System design",
      "Team leadership",
      "Technical strategy",
      "Enterprise experience",
    ],
    highlighted: false,
  },
];

export default function StaffAugmentationRates() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Staff Augmentation Rates
        </h2>
        <p className="mt-3 text-sm md:text-base text-[var(--color-neutralGray)] text-center max-w-2xl mx-auto">
          Transparent, predictable monthly rates based on developer seniority.
        </p>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.level}
              className={`relative rounded-[36px] border px-7 py-8 md:px-9 md:py-10 flex flex-col ${
                plan.highlighted
                  ? "bg-white shadow-[0_32px_90px_rgba(15,23,42,0.22)] border-sky-200"
                  : "bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] border-slate-100"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[var(--color-electricBlue-solid)] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(56,189,248,0.6)]">
                  {plan.badge}
                </div>
              )}

              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-neutralGray)] mb-1">
                {plan.level}
              </p>
              <p className="text-xs md:text-sm text-[var(--color-neutralGray)] mb-4">
                {plan.experience}
              </p>

              <div className="mb-2">
                <p className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)]">
                  {plan.price}
                </p>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mt-1">
                  Per Month
                </p>
              </div>
              <p className="text-xs md:text-sm text-sky-500 mb-6">{plan.hourly}</p>

              <ul className="space-y-2.5 mb-8 text-sm md:text-[15px]">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-left text-[var(--color-neutralGray)]"
                  >
                    <span className="mt-[4px] h-3 w-3 rounded-full border border-[var(--color-electricBlue)] flex items-center justify-center text-[var(--color-electricBlue)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-[15px] font-medium border transition-colors ${
                  plan.highlighted
                    ? "bg-[var(--color-electricBlue-solid)] border-[var(--color-electricBlue)] text-white hover:bg-sky-500"
                    : "bg-white border-slate-200 text-[var(--color-deepSpace)] hover:bg-slate-50"
                }`}
              >
                Discuss Hiring
              </button>
            </article>
          ))}
        </div>

        <div className="mt-8 text-[10px] md:text-xs text-center text-[var(--color-neutralGray)] space-y-1">
          <p>* Rates vary by specific technology and availability.</p>
          <p>* Part-time arrangements available (minimum 20 hrs/week).</p>
          <p>* Long-term discounts available.</p>
        </div>
      </div>
    </section>
  );
}

