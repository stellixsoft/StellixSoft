const reasons = [
  {
    title: "Healthcare Expertise",
    description:
      "Experience across providers, payers, and digital health products. We understand clinical, operational, and regulatory constraints.",
  },
  {
    title: "Security & Compliance First",
    description:
      "Architectures and workflows designed for HIPAA, SOC 2, and PHI protection from day one - not bolted on later.",
  },
  {
    title: "Integrated Product Teams",
    description:
      "Engineers, designers, and product leaders who work alongside your clinicians and stakeholders as one team.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We stay after go-live to iterate, scale, and extend your platform as your roadmap and regulations evolve.",
  },
];

export default function WhyHealthcareOrganizationsChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f5f7fb]"
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-12 md:mb-14 leading-tight">
          Why Healthcare Organizations
          <br />
          Choose Us
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
                <span className="text-xl font-bold">+</span>
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

