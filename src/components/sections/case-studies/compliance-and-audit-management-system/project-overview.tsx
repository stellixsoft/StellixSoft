const techStack = ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"];

export default function ComplianceAndAuditManagementSystemProjectOverview() {
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
        <div className="space-y-4 text-[var(--color-deepSpace)] text-sm md:text-[14px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            Project Overview
          </p>

          <div className="space-y-3 mt-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Client
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                Mid-sized Enterprise
              </p>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Industry
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                Enterprise Operations
              </p>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Locations
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                Multiple regional sites
              </p>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Project Type
              </p>
              <p className="mt-1 text-sm md:text-[14px] font-medium">
                Custom SaaS development
              </p>
            </div>
          </div>
        </div>

        {/* Center: Team & duration */}
        <div className="relative flex flex-col justify-center text-[var(--color-deepSpace)]">
          <div className="hidden md:block absolute top-4 bottom-4 left-0 w-px border-l border-dashed border-[var(--color-electricBlue)]/30" aria-hidden />
          <div className="md:pl-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mb-3">
              Team &amp; Duration
            </p>
              <ul className="space-y-3 text-sm md:text-[14px]">
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
                <span className="font-medium">6 months development</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <span className="font-medium">4 dedicated developers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Core stack */}
        <div className="relative flex flex-col justify-center">
          <div className="hidden md:block absolute top-4 bottom-4 left-0 w-px border-l border-dashed border-[var(--color-electricBlue)]/30" aria-hidden />
          <div className="md:pl-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mb-3">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[var(--color-deepSpace)] shadow-[0_8px_24px_rgba(15,23,42,0.12)] border border-slate-100"
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

