const skillColumns = [
  {
    title: "Backend Development",
    items: [".NET Core / C#", "Node.js / Express", "PHP / Laravel", "Python / Django", "Java / Spring Boot"],
  },
  {
    title: "Frontend Development",
    items: ["React / Next.js", "Vue.js / Nuxt.js", "Angular", "TypeScript", "JavaScript"],
  },
  {
    title: "Mobile Development",
    items: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    title: "Database & Data",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis / Caching", "Data Engineering"],
  },
  {
    title: "DevOps & Cloud",
    items: ["AWS", "Google Cloud", "Azure", "Docker / Kubernetes", "CI/CD Pipelines"],
  },
  {
    title: "Specialized",
    items: ["SignalR / Real-time", "Blockchain / Solidity", "AI/ML Integration", "IoT Development", "Salesforce"],
  },
];

export default function SkillsAvailableForAugmentation() {
  return (
    <section
      className="relative py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-deepSpace)]"
      style={{
        backgroundImage: "url('/assets/images/background-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden />
      <div className="relative z-10 max-w-[1300px] mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">Skills Available for Augmentation</h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 text-left">
          {skillColumns.map((column) => (
            <div key={column.title}>
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.22em] text-sky-300 mb-3">
                {column.title}
              </p>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-white/80 font-medium">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[8px] h-1 w-1 rounded-full bg-white/45" />
                    <span>{item}</span>
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

