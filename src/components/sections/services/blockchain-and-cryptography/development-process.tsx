import Image from "next/image";
export default function BlockchainDevelopmentProcess() {
  const phases = [
    {
      phase: "Phase 01",
      title: "Feasibility Assessment",
      description:
        "Is blockchain right for this? We analyze your use case and recommend the best approach—blockchain or not.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Feasibility assessment — blockchain development phase icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      phase: "Phase 02",
      title: "Architecture Design",
      description:
        "Chain selection, smart contract design, integration architecture. Plan for scale, security, and maintenance.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Architecture design — blockchain development phase icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      phase: "Phase 03",
      title: "Development & Testing",
      description:
        "Smart contract development, extensive testing, security review, integration with existing systems.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Development and testing — blockchain development phase icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      phase: "Phase 04",
      title: "Deployment & Support",
      description:
        "Mainnet deployment, monitoring, ongoing maintenance and updates as requirements evolve.",
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Deployment and support — blockchain development phase icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          Blockchain Development Process
        </h2>

        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-6 md:gap-7 lg:gap-8">
          {phases.map((phase, idx) => (
            <div
              key={phase.title}
              className="flex-1 rounded-[32px] bg-white border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8 flex flex-col relative"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-xl">
                  {phase.icon}
                </div>
                <div className="text-left">
                  <p className="text-[11px] mb-2 md:text-xs font-medium uppercase text-[var(--color-electricBlue)]">
                    {phase.phase}
                  </p>
                  <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)]">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

