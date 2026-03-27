export default function OurApproachToAiIntegration() {
  const pillars = [
    {
      title: "Practical Applications",
      description:
        "We build AI features that deliver measurable business value—not AI for AI’s sake. Every feature must solve a real problem.",
    },
    {
      title: "Proven Services",
      description:
        "We leverage established AI services (OpenAI, Claude, Google AI) rather than training custom models. Faster to market, proven reliability.",
    },
    {
      title: "Integrated Solutions",
      description:
        "AI features integrated into your existing applications and workflows. Not standalone experiments but production systems.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:gap-12 md:grid-cols-[1.1fr,1.4fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-4">
              Our Approach to AI Integration
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-xl">
              We’re not an AI research lab. We’re enterprise software developers who integrate AI
              services to solve real business problems. We focus on:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-left">
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 mb-2">
                  {pillar.title}
                </p>
                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

