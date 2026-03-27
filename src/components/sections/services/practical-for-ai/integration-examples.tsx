export default function AiIntegrationExamples() {
  const examples = [
    {
      title: "Customer Support Automation",
      challenge:
        "Support team overwhelmed with repetitive questions. Response times suffering.",
      solution:
        "AI-powered chatbot that answers common questions from knowledge bases, routes complex issues to humans with context summary.",
      results: [
        "60% of queries auto-resolved",
        "Faster human response for complex issues",
        "24/7 availability",
      ],
    },
    {
      title: "Document Processing Automation",
      challenge:
        "Manual data entry from invoices, contracts, and forms taking hours daily.",
      solution:
        "AI-powered document processing that extracts data, validates against rules, and populates systems automatically.",
      results: [
        "80% reduction in manual entry",
        "Fewer errors",
        "Faster processing time",
      ],
    },
    {
      title: "Intelligent Search",
      challenge:
        "Users can’t find information in large document repositories. Keyword search returns irrelevant results.",
      solution:
        "Semantic search that understands intent, finds relevant documents, and provides direct answers with source citations.",
      results: [
        "70% faster information retrieval",
        "Higher user satisfaction",
        "Better knowledge utilization",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          AI Integration Examples
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {examples.map((ex) => (
            <div
              key={ex.title}
              className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/40 border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9 flex flex-col"
            >
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900 mb-4 flex items-center gap-2">
                {ex.title}
              </h3>
              <div className="space-y-4 text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                <div>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 mb-1">
                    Challenge
                  </p>
                  <p>{ex.challenge}</p>
                </div>
                <div>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 mb-1">
                    Solution
                  </p>
                  <p>{ex.solution}</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-sky-50">
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-2">
                  Result
                </p>
                <ul className="space-y-1.5 text-sm md:text-[15px] text-slate-800">
                  {ex.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-[5px] text-emerald-400">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

