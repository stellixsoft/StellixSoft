const deviceTypes = [
  {
    title: "Industrial IoT",
    icon: "circuit",
    items: [
      "RFID readers/tags",
      "Industrial sensors",
      "PLCs & controllers",
      "Asset trackers",
    ],
  },
  {
    title: "Commercial IoT",
    icon: "camera",
    items: [
      "IP cameras",
      "Access control systems",
      "Environmental sensors",
      "Smart building equipment",
    ],
  },
  {
    title: "Consumer IoT",
    icon: "phone",
    items: [
      "Connected appliances",
      "Smart home devices",
      "Wearables",
      "Personal trackers",
    ],
  },
  {
    title: "Networking",
    icon: "globe",
    items: [
      "Enterprise routers",
      "Access points",
      "Network management",
      "Edge computing devices",
    ],
  },
];

function CircuitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9h2v2H9zM13 9h2v2h-2zM9 13h2v2H9zM13 13h2v2h-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" />
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

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconMap = {
  circuit: CircuitIcon,
  camera: CameraIcon,
  phone: PhoneIcon,
  globe: GlobeIcon,
};

export default function DeviceType() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-12 md:mb-14">
          Device Types We&apos;ve Worked With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deviceTypes.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.title}
                className="rounded-2xl bg-white shadow-md border border-gray-100 p-6 flex flex-col"
              >
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ color: "var(--color-electricBlue)" }}
                  aria-hidden
                >
                  {Icon && <Icon className="w-6 h-6" />}
                </span>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)]"
                    >
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400" />
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
