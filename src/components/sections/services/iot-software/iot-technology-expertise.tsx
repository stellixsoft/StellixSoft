const categories = [
  {
    title: "Backend & API",
    tech: ".NET Core | Node.js | Python | REST APIs",
    icon: "database",
  },
  {
    title: "Real-Time & Messaging",
    tech: "SignalR | WebSockets | MQTT | RabbitMQ",
    icon: "wifi",
  },
  {
    title: "Cloud Platforms",
    tech: "AWS IoT Core | Azure IoT Hub | Google Cloud IoT",
    icon: "cloud",
  },
  {
    title: "Databases",
    tech: "SQL Server | PostgreSQL | TimescaleDB | InfluxDB",
    icon: "database",
  },
  {
    title: "Frontend & Mobile",
    tech: "React | Next.js | Flutter | React Native",
    icon: "monitor",
  },
  {
    title: "DevOps & Monitoring",
    tech: "Docker | Kubernetes | CloudWatch | Grafana",
    icon: "pulse",
  },
];

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <ellipse cx="12" cy="6" rx="8" ry="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PulseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconMap = {
  database: DatabaseIcon,
  wifi: WifiIcon,
  cloud: CloudIcon,
  monitor: MonitorIcon,
  pulse: PulseIcon,
};

export default function IoTTechnologyExpertise() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          IoT Technology Expertise
        </h2>
        <div
          className="mx-auto mb-12 mt-4 h-0.5 w-16 md:mb-14 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <div
                key={cat.title}
                className="flex flex-col rounded-xl bg-[var(--color-deepSpace)] px-4 py-6 text-center shadow-[0_12px_40px_rgba(3,2,19,0.12)] md:px-5 md:py-7"
              >
                <span
                  className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-electricBlue)]"
                  style={{ backgroundColor: "rgba(16, 172, 219, 0.15)" }}
                  aria-hidden
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-electricBlue)]">
                  {cat.title}
                </h3>
                <p className="text-center text-sm leading-relaxed text-white/95 md:text-[13px]">
                  {cat.tech.split(" | ").map((t, i, arr) => (
                    <span key={t}>
                      {t}
                      {i < arr.length - 1 && (
                        <span className="mx-1 text-[var(--color-electricBlue)]">|</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
