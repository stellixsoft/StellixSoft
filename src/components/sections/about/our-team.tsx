const complianceItems = [
  {
    title: "SENIOR .NET DEVS",
    description: "Enterprise-grade architecture and legacy system experts.",
  },
  {
    title: "FULL-STACK ENGINEERS",
    description: "React, Node.js, and modern web application specialists.",
  },
  {
    title: "MOBILE DEVELOPERS",
    description: "Cross-platform experts in Flutter and React Native.",
  },
  {
    title: "DEVOPS & QA",
    description: "Ensuring stability, scalability, and quality through automation.",
  },
];

export default function OurTeam() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-deepSpace)]">
            Our Team
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--color-neutralGray)] max-w-xl mx-auto">
            50+ developers across multiple specializations, working together to solve enterprise complexity.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {complianceItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(3,2,19,0.06)] text-center"
            >
              {/* <div className="flex justify-center mb-6">
                <ComplianceIcon name={item.icon} />
              </div> */}
              <h3 className="text-base font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Team stats banner */}
        <div
          className="mt-12 md:mt-16 rounded-[28px] p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          style={{ backgroundColor: "var(--color-deepSpace)" }}
        >
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-light text-white">5+ Years</p>
            <p className="mt-1 text-xs font-normal uppercase tracking-widest text-white/70">
              Avg Experience
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-light text-white">Low</p>
            <p className="mt-1 text-xs font-normal uppercase tracking-widest text-white/70">
              Team Turnover
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-light text-white">9-5</p>
            <p className="mt-1 text-xs font-normal uppercase tracking-widest text-white/70">
              Timezone Aligned
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-light text-white">Native</p>
            <p className="mt-1 text-xs font-normal uppercase tracking-widest text-white/70">
              English Proficient
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
