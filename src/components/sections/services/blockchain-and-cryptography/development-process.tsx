import { Fragment } from "react";

function IconFeasibility() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function IconArchitecture() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round" />
    </svg>
  );
}

function IconDevelopment() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDeploy() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlockchainDevelopmentProcess() {
  const phases = [
    {
      phase: "Phase 01",
      title: "Feasibility Assessment",
      description:
        "Is blockchain right for this? We analyze your use case and recommend the best approach - blockchain or not.",
      icon: <IconFeasibility />,
    },
    {
      phase: "Phase 02",
      title: "Architecture & Design",
      description:
        "Chain selection, smart contract design, integration architecture. Plan for scale, security, and maintenance.",
      icon: <IconArchitecture />,
    },
    {
      phase: "Phase 03",
      title: "Development & Testing",
      description:
        "Smart contract development, extensive testing, security review, integration with existing systems.",
      icon: <IconDevelopment />,
    },
    {
      phase: "Phase 04",
      title: "Deployment & Support",
      description:
        "Mainnet deployment, monitoring, ongoing maintenance and updates as requirements evolve.",
      icon: <IconDeploy />,
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-4 text-center text-2xl font-light text-[var(--color-deepSpace)] md:mb-5 md:text-3xl lg:text-4xl">
          Blockchain Development Process
        </h2>
        <div
          className="mx-auto mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:items-stretch md:justify-center md:gap-2 lg:gap-4">
          {phases.map((phase, idx) => (
            <Fragment key={phase.title}>
              <article className="flex w-full max-w-[22rem] flex-1 flex-col rounded-[32px] border border-[rgba(3,2,19,0.08)] bg-white px-6 py-7 text-center shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:min-h-full md:w-auto md:max-w-none md:min-w-0 md:px-7 md:py-8 md:text-left lg:max-w-[280px]">
                <div className="mb-5 flex flex-col items-center gap-3 md:flex-row md:items-start">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "rgba(16, 172, 219, 0.14)",
                      color: "var(--color-electricBlue)",
                    }}
                  >
                    {phase.icon}
                  </div>
                  <div className="min-w-0 text-center md:text-left">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-electricBlue)] md:text-xs">
                      {phase.phase}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold uppercase tracking-wide text-[var(--color-deepSpace)] md:text-[15px]">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                  {phase.description}
                </p>
              </article>
              {idx < phases.length - 1 && (
                <>
                  <div className="flex justify-center py-2 text-2xl font-light text-[var(--color-electricBlue)] md:hidden" aria-hidden>
                    ↓
                  </div>
                  <div
                    className="hidden shrink-0 self-center px-2 text-2xl font-light text-[var(--color-electricBlue)] md:flex"
                    aria-hidden
                  >
                    →
                  </div>
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
