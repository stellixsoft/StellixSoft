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
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-deepSpace)] text-center">
          Solutions by Device Type
        </h2>
        <div
          className="w-24 h-0.5 mx-auto mt-4 mb-12 md:mb-14"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {deviceTypes.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-left"
                  style={{ color: "var(--color-electricBlue)" }}
                  aria-hidden
                >
                  {Icon && <Icon className="w-7 h-7" />}
                </div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] text-left mb-5">
                  {card.title}
                </h3>

                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
                  Common Devices:
                </p>
                <ul className="space-y-1.5 mb-6">
                  {card.commonDevices.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)]"
                    >
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p
                  className="text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  Software Needs:
                </p>
                <ul className="space-y-1.5 mt-4">
                  {card.softwareNeeds.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-normal text-[var(--color-deepSpace)]"
                    >
                      <span
                        className="shrink-0 mt-1.5 w-2 h-2 rounded-full border-2 flex items-center justify-center"
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
