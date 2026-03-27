const reasons = [
  {
    title: "Enterprise Experience",
    description:
      "We’ve worked with Fortune 500 supply chains. We understand enterprise requirements: security, compliance, scale, reliability.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We don’t do drive-by development. Average client relationship is 3+ years. We learn your business deeply.",
  },
  {
    title: "Complex Systems Expertise",
    description:
      "Legacy migrations, real-time systems, multi-tenant platforms. We handle the complexity others avoid.",
  },
  {
    title: "Timezone Alignment",
    description:
      "US business hours. Real-time collaboration. No waiting overnight for responses from overseas.",
  },
];

export default function WhyEnterpriseTeamsChooseStellixsoft() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-12 md:mb-14 leading-tight">
          Why Enterprise Teams Choose Stellixsoft
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((card) => (
            <article
              key={card.title}
              className="flex flex-col items-center text-center rounded-2xl bg-white shadow-md border border-gray-100 p-6"
            >
              <span
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gray-100 border border-gray-200 shadow-sm"
                style={{ color: "var(--color-electricBlue)" }}
                aria-hidden
              >
                <span className="text-xl font-medium">+</span>
              </span>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

