const frontendModules = ["Dashboard", "Audit Board", "Workflow Builder", "Reports"];

const apiCapabilities = [
  "Workflow engine",
  "Notification svc",
  "Reporting engine",
  "File mgmt",
];

const dataStores = [
  {
    label: "PostgreSQL",
    subtitle: "Primary DB",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    label: "Redis",
    subtitle: "Job Queue",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "AWS S3",
    subtitle: "Document Storage",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.78 2.096A4.001 4.001 0 0 0 3 15z" />
      </svg>
    ),
  },
];

const compliancePillars = [
  {
    label: "Complete Audit Trail",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    label: "Tamper-Evident Logs",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: "Role-Based Access",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Compliance Reports",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
      </svg>
    ),
  },
];

export default function ComplianceAndAuditManagementSystemPlatformArchitecture() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-14">
          Platform Architecture
        </h2>

        <div
          className="rounded-[40px] md:rounded-[46px] px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-14 shadow-[0_26px_90px_rgba(15,23,42,0.18)] border border-slate-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,172,219,0.12) 0%, rgba(255,255,255,1) 65%)",
          }}
        >
          {/* Top: Next.js frontend modules */}
          <div className="mb-8 md:mb-10">
            <div className="mx-auto max-w-[800px] rounded-[28px] bg-[var(--color-electricBlue)] text-white px-6 py-6 md:px-10 md:py-7 shadow-[0_20px_70px_rgba(15,23,42,0.35)] border border-sky-300/60">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 text-center mb-4">
                Next.js Frontend
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {frontendModules.map((mod) => (
                  <span
                    key={mod}
                    className="inline-flex rounded-full bg-sky-100/10 border border-white/30 px-4 py-1.5 text-xs md:text-[13px] font-medium"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <span className="text-xl md:text-2xl text-[var(--color-neutralGray)]" aria-hidden>
              ↓
            </span>
          </div>

          {/* Node.js API server */}
          <div className="mb-8 md:mb-10">
            <div className="mx-auto max-w-[800px] rounded-[28px] bg-[var(--color-deepSpace)] text-white px-6 py-6 md:px-10 md:py-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)]">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] text-center mb-4">
                Node.js API Server
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:text-[11px] text-white/80">
                {apiCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="inline-flex rounded-full border border-white/20 px-3 py-1"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: data stores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {dataStores.map((store) => (
              <div
                key={store.label}
                className="rounded-[26px] bg-[var(--color-electricBlue)] text-white px-5 py-5 md:px-6 md:py-5 flex flex-col items-center text-center gap-2 shadow-[0_20px_70px_rgba(15,23,42,0.45)]"
              >
                <span className="opacity-90">{store.icon}</span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
                  {store.label}
                </p>
                <p className="text-xs text-white/85">{store.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Compliance pillars */}
          <div className="mt-4 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
            {compliancePillars.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex flex-col items-center gap-1.5 rounded-full bg-white/60 px-5 py-3 border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <span className="text-[var(--color-electricBlue)]">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

