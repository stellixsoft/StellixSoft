const frontendSurfaces = [
  {
    label: "Employee Portal",
    subtitle: "(React)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    label: "Admin Dashboard",
    subtitle: "(React)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10V7m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
      </svg>
    ),
  },
];

const apiServices = [
  {
    label: "Grant Service",
    subtitle: "(AWS Lambda)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Vesting Engine",
    subtitle: "(AWS Lambda)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Exercise Service",
    subtitle: "(AWS Lambda)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
];

const dataLayer = [
  {
    label: "PostgreSQL",
    subtitle: "AWS RDS",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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
  {
    label: "Event Bus",
    subtitle: "Audit Log",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
  },
];

export default function StockOptionsAndEquityManagementPlatformArchitecture() {
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
          {/* Top row: employee/admin surfaces */}
          <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[800px] mx-auto">
            {frontendSurfaces.map((surface) => (
              <div
                key={surface.label}
                className="rounded-3xl bg-white text-[var(--color-deepSpace)] shadow-[0_14px_50px_rgba(15,23,42,0.08)] border border-slate-100 px-6 py-5 flex flex-col items-center text-center gap-2"
              >
                <span className="text-[var(--color-electricBlue)]">{surface.icon}</span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
                  {surface.label}
                </p>
                <p className="text-[10px] text-[var(--color-neutralGray)]">{surface.subtitle}</p>
              </div>
            ))}
          </div>

          {/* AWS serverless API layer */}
          <div className="mb-8 md:mb-10">
            <div className="mx-auto max-w-[800px] rounded-[28px] bg-[var(--color-deepSpace)] text-white px-6 py-6 md:px-10 md:py-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)]">
              <p className="text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] text-center mb-5">
                AWS Serverless API Layer
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {apiServices.map((service) => (
                  <div
                    key={service.label}
                    className="rounded-2xl border border-white/15 bg-black/30 px-4 py-4 flex flex-col items-center text-center gap-2"
                  >
                    <span className="text-[var(--color-electricBlue)]">{service.icon}</span>
                    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em]">{service.label}</p>
                    <p className="text-[10px] text-white/60">{service.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: data and infra */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[800px] mx-auto">
            {dataLayer.map((item) => (
              <div
                key={item.label}
                className="rounded-[26px] bg-white text-[var(--color-deepSpace)] px-5 py-5 md:px-6 md:py-5 flex flex-col items-center text-center gap-2 shadow-[0_20px_70px_rgba(15,23,42,0.12)] border border-slate-100"
              >
                <span className="text-[var(--color-electricBlue)]">{item.icon}</span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
                  {item.label}
                </p>
                <p className="text-xs text-[var(--color-neutralGray)]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
