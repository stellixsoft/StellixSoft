const phases = [
  {
    num: "01",
    title: "Discovery & architecture",
    timeline: "Week 1–2",
    bullets: [
      "Stakeholder workshops and requirements",
      "System and integration assessment",
      "Technical architecture and roadmap",
    ],
  },
  {
    num: "02",
    title: "Build & integration",
    timeline: "Week 3–8",
    bullets: [
      "Iterative delivery with working increments",
      "API and enterprise system integration",
      "Feature development aligned to priorities",
    ],
  },
  {
    num: "03",
    title: "Quality & security",
    timeline: "Ongoing",
    bullets: [
      "Automated testing and CI/CD",
      "Performance and reliability checks",
      "Security review and hardening",
    ],
  },
  {
    num: "04",
    title: "Launch & scale",
    timeline: "Week 9+",
    bullets: [
      "Production rollout and monitoring",
      "Operational handover and documentation",
      "Continuous optimization and support",
    ],
  },
];

export default function HowWeDeliver() {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/background-img.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/65" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1300px]">
        <header className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-light text-white md:text-3xl lg:text-4xl">
            How We Deliver Enterprise Projects
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            aria-hidden
          />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {phases.map((phase) => (
            <article
              key={phase.num}
              className="relative overflow-hidden rounded-2xl border p-6 md:p-8"
              style={{
                backgroundColor: "rgba(15, 23, 43, 0.55)",
                borderColor: "rgba(16, 172, 219, 0.25)",
              }}
            >
              <span
                className="pointer-events-none absolute -right-1 -top-2 select-none text-6xl font-light leading-none text-white/[0.07] md:text-7xl"
                aria-hidden
              >
                {phase.num}
              </span>
              <h3 className="relative text-sm font-bold uppercase tracking-[0.16em] text-white">
                {phase.title}
              </h3>
              <p
                className="relative mt-2 text-xs font-medium uppercase tracking-widest"
                style={{ color: "var(--color-electricBlue)" }}
              >
                {phase.timeline}
              </p>
              <ul className="relative mt-6 space-y-2.5">
                {phase.bullets.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm leading-relaxed text-white/85 md:text-[15px]"
                  >
                    <span className="shrink-0" style={{ color: "var(--color-electricBlue)" }}>
                      •
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
