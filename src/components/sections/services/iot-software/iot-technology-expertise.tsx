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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeLinecap="round" strokeLinejoin="round" />
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

function PulseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
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
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-deepSpace)] text-center">
          IoT Technology Expertise
        </h2>
        <div
          className="w-24 h-0.5 mx-auto mt-4 mb-12 md:mb-14"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <div
                key={cat.title}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col"
              >
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgba(16, 172, 219, 0.12)",
                    color: "var(--color-electricBlue)",
                  }}
                  aria-hidden
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </span>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-[var(--color-deepSpace)] leading-relaxed">
                  {cat.tech.split(" | ").map((t, i, arr) => (
                    <span key={t}>
                      {t}
                      {i < arr.length - 1 && (
                        <span className="text-[var(--color-neutralGray)] mx-1">|</span>
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
