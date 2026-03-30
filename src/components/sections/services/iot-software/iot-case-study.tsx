import Link from "next/link";

const features = [
  "Multi-tenant platform serving Fortune 500 clients",
  "Real-time monitoring of 10,000+ devices worldwide",
  "Automated ticketing from device anomalies",
  "Enterprise reporting and analytics",
];

const metrics = [
  { value: "10,000+", label: "Devices Monitored" },
  { value: "3+ Years", label: "Partnership" },
  { value: "6 Devs", label: "Dedicated Team" },
  { value: "85%", label: "Auto-Resolved" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function RfidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GearsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const architectureItems = [
  { Icon: RfidIcon, label: "RFID" },
  { Icon: MonitorIcon, label: "IP CAM" },
  { Icon: GearsIcon, label: ".NET" },
  { Icon: AppIcon, label: "APP" },
];

const portalLabels = ["Admin Portal", "Client Portal", "Reports"];

export default function IoTCaseStudy() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-8">
          IoT Platform Case Study: Enterprise Device Management
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-12" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />

        <div className="mt-10 md:mt-14 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-0">
          {/* Left panel - dark */}
          <div
            className="flex-1 p-6 md:p-8 lg:p-16 flex flex-col"
            style={{ backgroundColor: "var(--color-deepSpace)" }}
          >
            <p
              className="text-xs font-medium uppercase tracking-widest mb-2"
              style={{ color: "var(--color-electricBlue)" }}
            >
              Global Hardware Manufacturer
            </p>
            <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
              RFID Systems • IP Cameras • Enterprise Networking
            </h3>
            <p className="text-sm text-white/90 leading-relaxed mb-6 flex-1">
              The client&apos;s devices are deployed across Fortune 500 supply
              chains, including operations for PepsiCo in the United States. They
              needed enterprise-grade software to manage their global device
              deployments.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                    aria-hidden
                  >
                    <CheckIcon className="w-3 h-3 text-white" />
                  </span>
                  <span className="uppercase">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/case-studies/enterprise-portal-modernization"
              className="inline-flex items-center gap-2 self-start rounded-lg border-2 border-[var(--color-deepSpace)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-deepSpace)] transition-opacity hover:opacity-90"
            >
              Read Full Case Study
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          {/* Right panel - light */}
          <div className="flex-1 bg-gray-100 p-6 md:p-8 lg:p-16 flex flex-col">
            <p
              className="text-xs font-medium uppercase tracking-widest text-center mb-6"
              style={{ color: "var(--color-electricBlue)" }}
            >
              Platform Architecture
            </p>

            {/* Architecture row: icons */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6">
              {architectureItems.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[var(--color-deepSpace)]">
                    <Icon className="w-full h-full" />
                  </span>
                  <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Core tech box */}
            <div
              className="rounded-xl py-3 px-4 text-center mb-4 mx-auto max-w-xs"
              style={{ backgroundColor: "rgba(16, 172, 219, 0.2)" }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)]">
                .NET Core 6 API + SignalR
              </span>
            </div>

            {/* Portal boxes */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {portalLabels.map((label) => (
                <span
                  key={label}
                  className="rounded-lg bg-white border border-gray-200 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)]"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-white border border-gray-200 p-4 text-center"
                >
                  <p className="text-lg md:text-xl font-medium text-[var(--color-deepSpace)]">
                    {m.value}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mt-0.5">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
