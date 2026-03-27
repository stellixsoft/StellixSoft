const specializations = [
  {
    icon: "/assets/images/iot.png",
    smallTitle: "PHASE 1",
    smallItalic: "2-4 Weeks",
    title: "ASSESSMENT",
    items: [
      "Codebase audit",
      "Dependency map",
      "Risk assessment",
      "Migration roadmap"
    ],
  },
  {
    icon: "/assets/images/iot.png",
    smallTitle: "PHASE 2",
    smallItalic: "4-6 Weeks",
    title: "FOUNDATION",
    items: [
      "Architecture design",
      "Cloud infrastructure",
      "CI/CD pipeline",
      "Dev environment",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    smallTitle: "PHASE 3",
    smallItalic: "Ongoing",
    title: "MIGRATE",
    items: [
      "Feature migration",
      "Parallel testing",
      "Performance validation",
      "User acceptance"
    ],
  },
  {
    icon: "/assets/images/iot.png",
    smallTitle: "PHASE 4",
    smallItalic: "1-2 Weeks",
    title: "CUTOVER",
    items: [
      "Zero-downtime switch",
      "Traffic migration",
      "Rollback plan",
      "Decommission plan",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    smallTitle: "PHASE 5",
    smallItalic: "Continuous",
    title: "OPTIMIZE",
    items: [
      "Performance tuning",
      "New feature development",
      "Ongoing support",
      "Debt prevention",
    ],
  },
];

function Icon() {
  return (
    <span
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
      style={{ backgroundColor: "var(--color-electricBlue)", opacity: 0.15 }}
      aria-hidden
    >
      <span
        className="w-5 h-5 rounded"
        style={{ backgroundColor: "var(--color-electricBlue)" }}
      />
    </span>
  );
}

export default function Modernization() {
  return (
    <section
      id="specializations"
      className="py-16 md:py-24 px-4 sm:px-6 bg-white"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 60%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-8">
          Modernization Without the Risk
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-8" style={{ backgroundColor: "var(--color-electricBlue)" }} />
        <p className="max-w-2xl mx-auto text-center text-[var(--color-neutralGray)] text-base md:text-lg leading-relaxed mb-12">
          We don&apos;t do risky "big bang" rewrites that fail 70% of the time. Our
          incremental approach migrates your system piece by piece while keeping it fully operational.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specializations.map((spec) => (
            <article
              key={spec.title}
              className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">

                <div>
                  <img src={spec.icon} alt={spec.title} className="w-10 h-10 mb-6 object-contain" />

                  <p className="text-sm font-medium tracking-widest mb-1" style={{ color: "var(--color-electricBlue)" }}>{spec.smallTitle}</p>
                  <h3 className="text-lg font-medium text-[var(--color-deepSpace)] mb-1">
                    {spec.title}
                  </h3>
                  <p className="text-sm font-medium tracking-widest mb-6 italic" style={{ color: "var(--color-neutralGray)" }}>{spec.smallItalic}</p>
                  <ul className="space-y-2">
                    {spec.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)] leading-relaxed"
                      >
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-electricBlue)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
