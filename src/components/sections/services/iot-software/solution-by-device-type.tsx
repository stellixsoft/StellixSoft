import { BACKGROUND_URL } from "@/src/lib/background-url";

const deviceTypes = [
  {
    id: "industrial",
    title: "Industrial IoT",
    icon: "cube",
    commonDevices: [
      "RFID tracking systems",
      "Industrial sensors",
      "Manufacturing equipment",
      "Asset tracking devices",
    ],
    softwareNeeds: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Fleet management",
      "Compliance reporting",
    ],
  },
  {
    id: "smart-building",
    title: "Smart Building",
    icon: "monitor",
    commonDevices: [
      "IP cameras",
      "Access control systems",
      "Environmental sensors",
      "Building automation",
    ],
    softwareNeeds: [
      "Video management",
      "Alert systems",
      "Energy monitoring",
      "Multi-site dashboards",
    ],
  },
  {
    id: "consumer-enterprise",
    title: "Consumer & Enterprise",
    icon: "phone",
    commonDevices: [
      "Smart home devices",
      "Wearables",
      "Connected appliances",
      "Enterprise networking",
    ],
    softwareNeeds: [
      "Mobile companion apps",
      "Cloud sync",
      "User portals",
      "Firmware updates OTA",
    ],
  },
];

function CubeIcon({ className }: { className?: string }) {
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconMap = {
  cube: CubeIcon,
  monitor: MonitorIcon,
  phone: PhoneIcon,
};

export default function SolutionByDeviceType() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Solutions by Device Type
        </h2>
        <div
          className="mx-auto mb-12 mt-4 h-0.5 w-16 md:mb-14 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {deviceTypes.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.id}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_4px_24px_rgba(3,2,19,0.06)] md:p-8"
              >
                <div className="mb-5 flex text-[var(--color-electricBlue)]" aria-hidden>
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="mb-5 text-left text-sm font-semibold uppercase tracking-wider text-[var(--color-deepSpace)]">
                  {card.title}
                </h3>

                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-neutralGray)]">
                  Common Devices:
                </p>
                <ul className="mb-6 space-y-1.5">
                  {card.commonDevices.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  Software Needs:
                </p>
                <ul className="mt-4 space-y-1.5">
                  {card.softwareNeeds.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-normal text-[var(--color-deepSpace)]"
                    >
                      <span
                        className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full border-2"
                        style={{ borderColor: "var(--color-electricBlue)" }}
                        aria-hidden
                      />
                      {item}
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
