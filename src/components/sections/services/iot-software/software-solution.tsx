const specializations = [
  {
    icon: "/assets/images/iot.png",
    title: "Device Management Portals",
    description:
      "Web-based platforms for monitoring, configuring, and managing your devices across customer deployments worldwide.",
    items: [
      "Remote device configuration",
      "Firmware update management",
      "Device provisioning workflows",
      "Admin dashboards",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Customer Dashboards",
    description:
      "Self-service portals where your customers view device status, analytics, and reports without contacting your support team.",
    items: [
      "Real-time device status",
      "Historical data & trends",
      "Custom reporting",
      "User management",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Real-Time Monitoring Systems",
    description:
      "Live data visualization with SignalR and WebSocket technology for instant updates from thousands of devices.",
    items: [
      "Live dashboards",
      "Instant alerts",
      "Geographic visualization",
      "Performance metrics",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Multi-Tenant Platforms",
    description:
      "Enterprise architectures that serve multiple customers from a single codebase with proper data isolation and customization.",
    items: [
      "Per-tenant configuration",
      "Data isolation",
      "Custom branding",
      "Role-based access",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Mobile Companion Apps",
    description:
      "iOS and Android apps that let end-users control and monitor their devices from anywhere.",
    items: [
      "Device control",
      "Push notifications",
      "Offline capabilities",
      "Bluetooth/WiFi setup",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Backend APIs & Integrations",
    description:
      "Robust APIs that connect your hardware to mobile apps, web portals, and third-party integrations.",
    items: [
      "RESTful APIs",
      "MQTT integration",
      "Third-party webhooks",
      "Data export APIs",
    ],
  },
];

function Icon() {
  return (
    <span
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
      style={{ backgroundColor: "var(--color-electricBlue-solid)", opacity: 0.15 }}
      aria-hidden
    >
      <span
        className="w-5 h-5 rounded"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />
    </span>
  );
}

export default function SoftwareSolution() {
  return (
    <section
      id="specializations"
      className="py-16 md:py-24 px-4 sm:px-6 bg-white"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(16, 172, 219, 0.04) 0%, transparent 20%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-8">
          Software Solutions for Hardware Companies
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-12" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specializations.map((spec) => (
            <article
              key={spec.title}
              className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">

                <div>
                  <img src={spec.icon} alt={spec.title} className="w-10 h-10 mb-6 object-contain" />
                  <h3 className="text-lg font-medium text-[var(--color-deepSpace)] mb-4">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed mb-4">
                    {spec.description}
                  </p>
                  <ul className="space-y-2">
                    {spec.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)] leading-relaxed"
                      >
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
