const techStack = [".NET Core 6", "SignalR", "React", "SQL Server", "AWS"];

export default function EnterprisePortalProjectOverview() {
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
        <div className="space-y-4 text-[var(--color-deepSpace)] text-sm md:text-[15px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            Project Overview
          </p>

          <div className="space-y-3 mt-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Client
              </p>
              <p className="mt-1 text-sm md:text-[15px] font-medium">
                Global hardware manufacturer
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Industry
              </p>
              <p className="mt-1 text-sm md:text-[15px] font-medium">
                IoT / Hardware
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                End Clients
              </p>
              <p className="mt-1 text-sm md:text-[15px] font-medium">
                Fortune 500 (e.g. PepsiCo)
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                Project Type
              </p>
              <p className="mt-1 text-sm md:text-[15px] font-medium">
                Legacy modernization
              </p>
            </div>
          </div>
        </div>

        {/* Center: Team & duration */}
        <div className="relative flex flex-col justify-center text-[var(--color-deepSpace)]">
          <div className="hidden md:block absolute top-4 bottom-4 left-0 w-px bg-sky-100" aria-hidden />
          <div className="md:pl-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mb-3">
              Team &amp; Duration
            </p>
            <ul className="space-y-3 text-sm md:text-[15px]">
              <li className="flex items-start gap-2">
                <span
                  className="mt-1 inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                  aria-hidden
                />
                <span>3+ years (ongoing partnership)</span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-1 inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                  aria-hidden
                />
                <span>6 dedicated developers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Core stack */}
        <div className="relative flex flex-col justify-center">
          <div className="hidden md:block absolute top-4 bottom-4 left-0 w-px bg-sky-100" aria-hidden />
          <div className="md:pl-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)] mb-3">
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

