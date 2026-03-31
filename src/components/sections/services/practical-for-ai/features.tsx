import Image from "next/image";
export default function AiPoweredFeaturesWeImplement() {
  const cards = [
    {
      title: "Intelligent Document Processing",
      description:
        "Extract, analyze, and process documents automatically.",
      bullets: [
        "Invoice data extraction",
        "Contract analysis",
        "Form processing",
        "Document summarization",
        "Classification & routing",
      ],
      useCases: "Finance, Legal, Operations, Customer Service",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Intelligent document processing — AI feature icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Conversational AI & Chatbots",
      description:
        "Intelligent chat interfaces for customer service and internal tools.",
      bullets: [
        "Customer support bots",
        "Internal knowledge assistants",
        "FAQ automation",
        "Ticket routing",
        "Lead qualification",
      ],
      useCases: "Support, Sales, HR, Internal Operations",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Conversational AI and chatbots — AI feature icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Content Generation & Assistance",
      description:
        "AI-powered content creation and writing assistance.",
      bullets: [
        "Report generation",
        "Email drafting",
        "Content summarization",
        "Translation",
        "Writing enhancement",
      ],
      useCases: "Marketing, Sales, Operations, Communications",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Content generation and assistance — AI feature icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Intelligent Search & Retrieval",
      description:
        "Search that understands meaning, not just keywords.",
      bullets: [
        "Semantic search",
        "Knowledge base search",
        "Document retrieval",
        "Question answering",
        "Recommendation systems",
      ],
      useCases: "Support, Knowledge Management, Research",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Intelligent search and retrieval — AI feature icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Data Analysis & Insights",
      description:
        "AI-assisted analysis of business data and trends.",
      bullets: [
        "Anomaly detection",
        "Trend identification",
        "Predictive insights",
        "Natural language queries",
        "Automated reporting",
      ],
      useCases: "Operations, Finance, Executive Dashboards",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Data analysis and insights — AI feature icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Workflow Automation",
      description:
        "Intelligent automation that handles complex decisions.",
      bullets: [
        "Smart routing",
        "Approval suggestions",
        "Priority scoring",
        "Classification",
        "Exception handling",
      ],
      useCases: "Operations, Support, Process Automation",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Workflow automation — AI feature icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          AI-Powered Features We Implement
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/40 border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9 flex flex-col"
            >
              <div className="flex mb-4 h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                {card.icon}
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900 mb-2 flex items-center gap-2">
                {card.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                {card.description}
              </p>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5">
                {card.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Use Cases:{" "}
                <span className="text-slate-600 normal-case tracking-normal font-medium">
                  {card.useCases}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

