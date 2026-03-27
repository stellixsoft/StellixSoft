const solutions = [
  {
    title: "Device Management Platforms",
    description:
      "Web-based portals for your customers to monitor, configure, and manage their device deployments.",
    icon: "monitor",
    features: [
      "Fleet-wide device visibility",
      "Remote configuration",
      "Firmware update management",
      "User management & permissions",
    ],
  },
  {
    title: "Customer Dashboards",
    description:
      "Self-service portals where customers view analytics, run reports, and manage their accounts without calling support.",
    icon: "dashboard",
    features: [
      "Real-time status displays",
      "Historical trend analysis",
      "Custom reporting",
      "Account management",
    ],
  },
  {
    title: "Mobile Companion Apps",
    description:
      "iOS and Android apps for device setup, control, and monitoring via Bluetooth or WiFi.",
    icon: "phone",
    features: [
      "Bluetooth/WiFi pairing",
      "Device configuration",
      "Real-time notifications",
      "Remote control",
    ],
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Live dashboards with instant updates from thousands of devices using SignalR, WebSockets, and MQTT.",
    icon: "lightning",
    features: [
      "Sub-second updates",
      "Geographic visualization",
      "Alert systems",
      "Performance metrics",
    ],
  },
  {
    title: "Enterprise Integrations",
    description:
      "APIs and connectors that let your devices work seamlessly with customer ERP, WMS, and other systems.",
    icon: "integration",
    features: [
      "REST/MQTT APIs",
      "Webhook notifications",
      "ERP/WMS integration",
      "Third-party platforms",
    ],
  },
  {
    title: "Multi-Tenant Platforms",
    description:
      "Single platform serving multiple enterprise customers with strict data isolation and white-labeling.",
    icon: "layers",
    features: [
      "Per-tenant configuration",
      "White-labeling options",
      "Secure data separation",
      "Role-based access",
    ],
  },
];

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntegrationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M16 4l4 4-4 4M8 20l-4-4 4-4M4 8h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

const iconMap = {
  monitor: MonitorIcon,
  dashboard: DashboardIcon,
  phone: PhoneIcon,
  lightning: LightningIcon,
  integration: IntegrationIcon,
  layers: LayersIcon,
};

export default function SoftwareSolutions() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-white text-center mb-4">
          Software Solutions for Hardware Companies
        </h2>
        <p className="text-base text-gray-300 text-center max-w-2xl mx-auto mb-12 md:mb-14">
          Custom built platforms designed to handle the scale and technical
          requirements of IoT ecosystems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7 flex flex-col shadow-lg"
              >
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ color: "var(--color-electricBlue)" }}
                  aria-hidden
                >
                  {Icon && <Icon className="w-6 h-6" />}
                </span>
                <h3 className="text-sm font-medium uppercase tracking-wider text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-1">
                  {card.description}
                </p>
                <ul className="space-y-2">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <span
                        className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ color: "var(--color-electricBlue)" }}
                        aria-hidden
                      >
                        <CheckIcon className="w-3 h-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
