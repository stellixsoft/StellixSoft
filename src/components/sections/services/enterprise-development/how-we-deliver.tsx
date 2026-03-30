const expertiseCards = [
  {
    title: "Enterprise Backend",
    smallTitle: "Week 1-2",
    technologies: [
      ".NET Core 6/7/8",
      "Node.js",
      "SignalR (Real-time)",
      "Multi-tenant Architecture",
    ],
  },
  {
    title: "Frontend & Mobile",
    smallTitle: "Week 3-6",
    technologies: [
      "React / Next.js",
      "TypeScript",
      "Flutter (Cross-platform)",
      "React Native",
    ],
  },
  {
    title: "Data & Cloud",
    smallTitle: "Ongoing",
    technologies: [
      "AWS / GCP / Azure",
      "SQL Server / PostgreSQL",
      "MongoDB / Redis",
      "Docker / Kubernetes",
    ],
  },
  {
    title: "Enterprise Quality",    
    smallTitle: "Continuous",
    technologies: [
      "70%+ Test Coverage",
      "CI/CD Pipelines",
      "Code Reviews",
      "Security Best Practices",
    ],
  },
];

const techLogos = [".NET", "React", "Node.js", "AWS", "Azure", "Docker"];

export default function HowWeDeliver() {
  return (
    <section
      className="py-16 md:py-24 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/background-img.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
            How We Deliver Enterprise Projects
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
            style={{ backgroundColor: "var(--color-electricBlue)" }}
          />
        </header>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6 md:p-8 border-1 transition-all hover:border-[var(--color-electricBlue)]/50"
              style={{
                backgroundColor: "#0F172B80",
                borderColor: "rgba(16, 172, 219, 0.2)",
              }}
            >
              {/* Title */}
              
              <h3 className="text-xl md:text-xl font-light text-white mb-1">
                {card.title}
              </h3>
              <p className="text-sm font-medium tracking-widest mb-8" style={{ color: "var(--color-electricBlue)" }}>{card.smallTitle}</p>

              {/* Technologies List */}
              <ul className="space-y-2">
                {card.technologies.map((tech) => (
                  <li key={tech} className="flex items-start gap-2 text-sm md:text-md text-white/70 mt-2">
                    <span
                      className="shrink-0"
                      style={{ color: "var(--color-electricBlue)" }}
                    >
                      •
                    </span>
                    <span>{tech}</span>
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
