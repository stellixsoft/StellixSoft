export default function AiTechnologyWeWorkWith() {
  const columns = [
    {
      title: "Large Language Models",
      items: [
        "OpenAI GPT-4 / GPT-4o",
        "Anthropic Claude",
        "Google Gemini",
        "Azure OpenAI Service",
        "Prompt engineering",
      ],
    },
    {
      title: "Frameworks & Tools",
      items: [
        "LangChain",
        "LlamaIndex",
        "Semantic Kernel",
        "REST APIs",
        "Webhooks",
        "Queue-based processing",
        "Streaming responses",
      ],
    },
    {
      title: "Vector Databases",
      items: ["Pinecone", "Weaviate", "PostgreSQL + pgvector", "ChromaDB"],
    },
    {
      title: "Cloud AI Services",
      items: [
        "AWS Bedrock",
        "Google Vertex AI",
        "Azure AI Services",
        "Node.js / Python",
        "React frontends",
        "Enterprise backends",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050819]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-white">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light mb-10 md:mb-12">
          AI Technology We Work With
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-[28px] bg-[#050819] border border-slate-800/80 shadow-[0_26px_80px_rgba(0,0,0,0.75)] px-6 py-7 md:px-7 md:py-8"
            >
              <h3 className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-white/80 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-white/80">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] text-sky-400">✓</span>
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

