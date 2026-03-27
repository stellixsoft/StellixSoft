const complianceItems = [
  {
    title: "HONESTY OVER POLITENESS",
    description: "We'll tell you if your idea needs work, if your timeline is unrealistic, or if there's a better approach. Honest guidance beats comfortable agreement.",
  },
  {
    title: " QUALITY OVER SPEED",
    description: "We don't cut corners to hit deadlines. Rushed code creates long-term debt. We build it right or we don't build it.",
  },
  {
    title: " PARTNERSHIP OVER TRANSACTIONS",
    description: "We invest in understanding your business. We're not optimizing for this project—we're building a multi-year relationship.",
  },
  {
    title: " RESULTS OVER ACTIVITY",
    description: "We measure success by your outcomes, not our hours logged. Did the system work? Did it solve the problem? That's what matters.",
  },
];

export default function OurValues() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-deepSpace)]">
            Our Values
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {complianceItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(3,2,19,0.06)] text-left"
            >
              <h3 className="text-base font-medium uppercase tracking-wider text-[var(--color-electricBlue)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
