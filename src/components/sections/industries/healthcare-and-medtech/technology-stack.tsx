const categories = [
  {
    title: "Backend & APIs",
    items: [".NET", "Node.js", "Java", "Go"],
  },
  {
    title: "Data & Storage",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Snowflake"],
  },
  {
    title: "Interoperability",
    items: ["FHIR", "HL7 v2", "X12", "Custom EMR APIs"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React / Next.js", "React Native", "Flutter"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Analytics & Observability",
    items: ["Power BI", "Looker", "Datadog", "Elastic"],
  },
];

export default function HealthcareTechnologyStack() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-12 md:mb-14">
          Healthcare Technology Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="flex flex-col">
              <h3
                className="text-xs font-medium uppercase tracking-wider pb-2 mb-4 border-b-2"
                style={{
                  color: "var(--color-electricBlue)",
                  borderColor: "var(--color-electricBlue)",
                }}
              >
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[var(--color-deepSpace)] font-medium tracking-wider"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

