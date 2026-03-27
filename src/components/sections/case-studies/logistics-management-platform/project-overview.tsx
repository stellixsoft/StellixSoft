const techStack = ["React", "Node.js", "Flutter", "MongoDB", "AWS", "Google Maps"];

export default function LogisticsManagementPlatformProjectOverview() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div
        className="max-w-[1100px] mx-auto rounded-[32px] md:rounded-[40px] px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-100 grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1.2fr] gap-8 lg:gap-12"
        style={{
          background:
            "linear-gradient(135deg, rgba(16,172,219,0.12) 0%, rgba(255,255,255,1) 60%)",
        }}
      >
        {/* Left: Project overview */}
        <div className="space-y-4 text-[var(--color-deepSpace)]">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            Project Overview
          </p>

          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Client
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                ZB Lines
              </p>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Industry
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                Third-Party Logistics (3PL)
              </p>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Services
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                Freight, distribution, last-mile
              </p>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Project Type
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                Custom platform development
              </p>
            </div>
          </div>
        </div>

        {/* Center: Team & duration */}
        <div className="relative flex flex-col justify-center text-[var(--color-deepSpace)]">
          <div className="hidden md:block absolute top-4 bottom-4 left-0 w-px border-l border-dashed border-[var(--color-electricBlue)]/30" aria-hidden />
          <div className="md:pl-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mb-4">
              Team &amp; Duration
            </p>
              <ul className="space-y-4 text-sm md:text-[14px]">
              <li className="flex items-center gap-3">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-electricBlue)]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeWidth="1.5" d="M12 6v6l4 2" />
                  </svg>
                </span>
                <span className="font-medium">4 months initial + ongoing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-electricBlue)]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeWidth="1.5" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <span className="font-medium">3 dedicated developers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Core stack */}
        <div className="relative flex flex-col justify-center">
          <div className="hidden md:block absolute top-4 bottom-4 left-0 w-px border-l border-dashed border-[var(--color-electricBlue)]/30" aria-hidden />
          <div className="md:pl-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mb-4">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium text-[var(--color-deepSpace)] shadow-[0_2px_8px_rgba(15,23,42,0.08)] border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
