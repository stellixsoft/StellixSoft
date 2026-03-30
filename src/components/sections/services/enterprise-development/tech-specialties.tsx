const categories = [
  {
    title: "Backend",
    techs: [".NET Core 6/7/8", "Node.js", "PHP/Laravel", "Python"],
  },
  {
    title: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    title: "Database",
    techs: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "CI/CD"],
  },
  {
    title: "Real-Time",
    techs: ["SignalR", "WebSockets", "Event-Driven Architecture"],
  },
];

export default function TechSpecialties() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Enterprise Technology Expertise
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="rounded-2xl p-6 md:p-8 text-center"
              style={{ backgroundColor: "var(--color-deepSpace)" }}
            >
              <h3
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--color-electricBlue)" }}
              >
                {cat.title}
              </h3>
              <p className="text-sm text-white leading-relaxed">
                {cat.techs.join(" | ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
