const implementationItems = [
  "Automated CI/CD pipelines",
  "Infrastructure as Code (IaC)",
  "Continuous monitoring and alerts",
  "Automated rollback and recovery systems",
];

export default function DevOpsAutomationServices() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/background-url.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-6">
          DevOps Automation Services for Faster Delivery
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Our DevOps automation services are designed to remove bottlenecks and streamline your
          development lifecycle. By automating testing, deployment, and infrastructure management, we
          help teams ship faster with fewer errors.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          We implement:
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {implementationItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          With DevOps and Cloud Services, automation becomes the foundation of your development
          process.
        </p>
      </div>
    </section>
  );
}
