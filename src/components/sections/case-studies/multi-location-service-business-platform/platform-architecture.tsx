const frontendSurfaces = [
  "Customer Portal",
  "Admin Dashboard",
  "Field App",
  "Regional Mgr",
];

const apiServices = ["Job service", "Customer service", "Inventory service"];

const dataLayer = [
  {
    label: "PostgreSQL",
    subtitle: "GCP Cloud SQL",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    label: "Cloud Run",
    subtitle: "API Hosting",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-7-4h.01M12 16h.01" />
      </svg>
    ),
  },
  {
    label: "Google Maps",
    subtitle: "Routing API",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },
];

export default function MultiLocationServiceBusinessPlatformArchitecture() {
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
          {/* Top row: customer/admin/field/regional surfaces */}
          <div className="mb-8 md:mb-10 flex flex-wrap items-center justify-center gap-3">
            {frontendSurfaces.map((surface) => (
              <span
                key={surface}
                className="inline-flex min-w-[140px] justify-center rounded-3xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)] border border-sky-200 px-5 py-2 text-xs md:text-[12px] font-medium uppercase"
              >
                {surface}
              </span>
            ))}
          </div>

          {/* Node.js API gateway */}
          <div className="mb-8 md:mb-10">
            <div className="mx-auto max-w-[1000px] rounded-[28px] bg-[var(--color-deepSpace)] text-white px-6 py-6 md:px-10 md:py-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] text-center mb-4">
                Node.js API Gateway
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/80">
                {apiServices.map((service) => (
                  <span
                    key={service}
                    className="inline-flex rounded-full border border-white/20 px-3 py-1"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: data + infra */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {dataLayer.map((layer) => (
              <div
                key={layer.label}
                className="rounded-[26px] bg-white text-[var(--color-deepSpace)] px-5 py-5 md:px-6 md:py-5 flex flex-col items-center text-center gap-2 shadow-[0_20px_70px_rgba(15,23,42,0.12)] border border-slate-100"
              >
                <span className="text-[var(--color-electricBlue)]">{layer.icon}</span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
                  {layer.label}
                </p>
                <p className="text-xs text-[var(--color-neutralGray)]">{layer.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

