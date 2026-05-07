const categories = [
  {
    title: "Backend",
    techs: [".NET Core", "NodeJS", "Python"],
  },
  {
    title: "Frontend",
    techs: ["React", "Next.js", "Vue"],
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
    title: "Real-time",
    techs: ["SignalR", "WebSockets", "Event-driven architecture"],
  },
];

export default function TechSpecialties() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Enterprise Technology Expertise
        </h2>
        <div
          className="mx-auto mt-4 mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="rounded-2xl px-6 py-7 text-center md:px-8 md:py-8"
              style={{ backgroundColor: "var(--color-deepSpace)" }}
            >
              <h3
                className="text-[11px] font-semibold uppercase tracking-[0.2em] md:text-xs"
                style={{ color: "var(--color-electricBlue)" }}
              >
                {cat.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white md:text-[15px]">
                {cat.techs.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
