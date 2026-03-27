const topNodes = [
  {
    label: "Admin",
    subtitle: "(React)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10V7m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
      </svg>
    ),
  },
  {
    label: "Driver",
    subtitle: "(Flutter)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h.01M12 7h.01M16 7h.01M3 11h18M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    label: "Client",
    subtitle: "(React)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
];

const bottomNodes = [
  {
    label: "MongoDB",
    subtitle: "Primary data",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    label: "Redis",
    subtitle: "Pub/Sub",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "AWS S3",
    subtitle: "Documents",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.78 2.096A4.001 4.001 0 0 0 3 15z" />
      </svg>
    ),
  },
];

export default function LogisticsManagementPlatformArchitecture() {
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
          {/* Top row: admin / driver / client */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            {topNodes.map((node) => (
              <div
                key={node.label}
                className="rounded-3xl bg-[var(--color-electricBlue)] text-white shadow-[0_14px_50px_rgba(15,23,42,0.2)] border border-sky-300/60 px-5 py-5 flex flex-col items-center text-center gap-2"
              >
                <span className="opacity-90">{node.icon}</span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
                  {node.label}
                </p>
                <p className="text-[11px] text-white/85">{node.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Node.js API server */}
          <div className="mb-8 md:mb-10">
            <div className="mx-auto max-w-[1000px] rounded-[28px] bg-[var(--color-deepSpace)] text-white px-6 py-6 md:px-10 md:py-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)]">
              <p className="text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] text-center mb-4">
                Node.js API Server
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:text-[11px] text-white/80">
                <span className="inline-flex rounded-full border border-white/20 px-3 py-1">
                  REST APIs
                </span>
                <span className="inline-flex rounded-full border border-white/20 px-3 py-1">
                  Websocket (real-time)
                </span>
                <span className="inline-flex rounded-full border border-white/20 px-3 py-1">
                  Background jobs
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row: data stores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {bottomNodes.map((node) => (
              <div
                key={node.label}
                className="rounded-[26px] bg-[var(--color-electricBlue)] text-white px-5 py-5 md:px-6 md:py-5 flex flex-col items-center text-center gap-2 shadow-[0_20px_70px_rgba(15,23,42,0.45)]"
              >
                <span className="opacity-90">{node.icon}</span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
                  {node.label}
                </p>
                <p className="text-xs text-white/85">{node.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Google Maps integration */}
          <div className="mt-4 flex items-center justify-center">
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
              ↳ Google Maps API Integration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

