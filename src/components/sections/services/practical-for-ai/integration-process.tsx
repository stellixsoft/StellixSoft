export default function AiIntegrationProcess() {
  const steps = [
    {
      phase: "01",
      title: "Identify the Opportunity",
      description:
        "We work with you to identify where AI can deliver real value. Not every problem needs AI - we help you find the right applications.",
      deliverable: "AI opportunity assessment",
    },
    {
      phase: "02",
      title: "Prototype & Validate",
      description:
        "Quick proof-of-concept to validate the approach works for your data and use cases before full investment.",
      deliverable: "Working prototype",
    },
    {
      phase: "03",
      title: "Production Integration",
      description:
        "Build production-ready features integrated with your existing systems, with proper error handling, monitoring, and fallbacks.",
      deliverable: "Production AI features",
    },
    {
      phase: "04",
      title: "Monitor & Optimize",
      description:
        "Ongoing monitoring of AI performance, prompt optimization, and feature enhancement based on real usage.",
      deliverable: "Continuous improvement",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          Our AI Integration Process
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[32px] bg-white border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8 flex flex-col"
            >
              <p className="text-[11px] md:text-xs font-medium uppercase text-slate-300 mb-1">
                {step.phase}
              </p>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900 mb-2 flex items-center gap-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                {step.description}
              </p>
              <div className="mt-auto pt-3 border-t border-slate-100">
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Deliverable:{" "}
                  <span className="text-slate-700 normal-case tracking-normal font-medium">
                    {step.deliverable}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

