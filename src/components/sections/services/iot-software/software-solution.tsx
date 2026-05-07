import Image from "next/image";
import { BACKGROUND_URL } from "@/src/lib/background-url";
import {
  BlueTickIcon,
  BLUE_TICK_LABEL_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

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

export default function SoftwareSolution() {
  return (
    <section
      id="specializations"
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-4 text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Software Solutions for Hardware Companies
        </h2>
        <div
          className="mx-auto mb-12 h-0.5 w-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {specializations.map((spec) => (
            <article
              key={spec.title}
              className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-[0_4px_24px_rgba(3,2,19,0.06)] md:p-8"
            >
              <div className="flex flex-col items-start">
                <Image src={spec.icon} alt={spec.title} width={40} height={40} className="mb-5 object-contain" />
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-deepSpace)] md:text-[13px]">
                  {spec.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-neutralGray)]">
                  {spec.description}
                </p>
                <ul className="space-y-2">
                  {spec.items.map((item) => (
                    <li key={item} className={`flex items-center gap-2 ${BLUE_TICK_LABEL_CLASS}`}>
                      <BlueTickIcon className="h-[13px] w-[13px] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
