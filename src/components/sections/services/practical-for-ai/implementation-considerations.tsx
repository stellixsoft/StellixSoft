export default function AiImplementationConsiderations() {
  const items = [
    {
      title: "Data Quality",
      description:
        "AI is only as good as the data it works with. We help assess your data readiness and plan for data preparation.",
    },
    {
      title: "Security & Privacy",
      description:
        "Sensitive data requires careful handling. We implement proper data masking, access controls, and audit trails.",
    },
    {
      title: "Continuous Improvement",
      description:
        "AI features need ongoing tuning. Prompts need optimization, edge cases need handling, and models improve over time.",
    },
    {
      title: "Cost Management",
      description:
        "AI API calls have costs. We design for efficiency—caching, batching, and choosing the right models for each task.",
    },
    {
      title: "Realistic Expectations",
      description:
        "AI isn’t magic. We set realistic expectations about what AI can and can’t do for your specific use case.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-[#050819] text-white border border-slate-800 shadow-[0_28px_90px_rgba(0,0,0,0.7)] px-6 md:px-10 lg:px-14 py-8 md:py-10 lg:py-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6">
            AI Implementation Considerations
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-sm md:text-[15px]">
            {items.map((item) => (
              <div key={item.title}>
                <p className="text-[11px] md:text-xs font-medium uppercase text-sky-400 mb-2">
                  {item.title}
                </p>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

