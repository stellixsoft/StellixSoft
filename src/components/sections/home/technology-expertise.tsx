const expertiseCards = [
  {
    title: "Enterprise Backend",
    img: "/assets/images/tech-img-one.png",
    technologies: [
      ".NET Core 6/7/8",
      "Node.js",
      "SignalR (Real-time)",
      "Multi-tenant Architecture",
    ],
  },
  {
    title: "Frontend & Mobile",
    img: "/assets/images/tech-img-two.png",
    technologies: [
      "React / Next.js",
      "TypeScript",
      "Flutter (Cross-platform)",
      "React Native",
    ],
  },
  {
    title: "Data & Cloud",
    img: "/assets/images/tech-img-three.png",
    technologies: [
      "AWS / GCP / Azure",
      "SQL Server / PostgreSQL",
      "MongoDB / Redis",
      "Docker / Kubernetes",
    ],
  },
  {
    title: "Enterprise Quality",
    img: "/assets/images/tech-img-four.png",
    technologies: [
      "70%+ Test Coverage",
      "CI/CD Pipelines",
      "Code Reviews",
      "Security Best Practices",
    ],
  },
];

const techLogos = [".NET", "React", "Node.js", "AWS", "Azure", "Docker"];

export default function TechnologyExpertise() {
  return (
    <section
      className="py-16 md:py-24 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/background-img.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-normal uppercase tracking-widest mb-3"
            style={{ color: "var(--color-electricBlue)" }}
          >
            Technology Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Built for Enterprise
          </h2>
          <p className="text-sm md:text-md uppercase tracking-wider text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our technology stack is optimized for complex, mission-critical
            applications that scale.
          </p>
        </header>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6 md:p-8 border-1 transition-all hover:border-[var(--color-electricBlue)]/50"
              style={{
                backgroundColor: "#0F172B80",
                borderColor: "rgba(16, 172, 219, 0.2)",
              }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-lg flex items-center justify-left mb-2"
              >
                <img src={card.img} alt={card.title} width={56} height={56} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-xl font-light text-white mb-4">
                {card.title}
              </h3>

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

        {/* Bottom Technology Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {techLogos.map((logo) => (
            <span
              key={logo}
              className="text-white/60 text-sm md:text-base font-normal hover:text-white transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
