const topApps = [
  { label: "Admin Dashboard", tech: "React", icon: "layout" },
  { label: "Driver App", tech: "Flutter", icon: "phone" },
  { label: "Client Portal", tech: "React", icon: "user" },
];

const bottomIntegrations = [
  { label: "Database", sub: "Shipments & Drivers", icon: "database" },
  { label: "Google Maps API", sub: "Routes & Geo-tracking", icon: "globe" },
  { label: "Twilio", sub: "SMS & Voice Alerts", icon: "chat" },
];

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="4" rx="2" />
      <rect x="13" y="9" width="8" height="12" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-3 4-4.5 8-4.5s6.5 1.5 8 4.5" />
    </svg>
  );
}

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
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M4 5h16v10H7l-3 3z" />
      <path d="M9 9h6M9 12h3" />
    </svg>
  );
}

const iconMap = {
  layout: LayoutIcon,
  phone: PhoneIcon,
  user: UserIcon,
  database: DatabaseIcon,
  globe: GlobeIcon,
  chat: ChatIcon,
};

export default function LogisticsArchitecture() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 60%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center">
          Complete Logistics Architecture
        </h2>
        <p className="text-sm md:text-base text-[var(--color-neutralGray)] text-center max-w-2xl mx-auto mt-3 mb-10 md:mb-14">
          A unified ecosystem connecting every stakeholder in your supply chain.
        </p>

        {/* Top row: apps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
          {topApps.map((app) => {
            const Icon = iconMap[app.icon as keyof typeof iconMap];
            return (
              <div
                key={app.label}
                className="rounded-2xl bg-white shadow-md border border-gray-100 p-6 flex flex-col items-center text-center relative"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgba(16, 172, 219, 0.12)",
                    color: "var(--color-electricBlue)",
                  }}
                  aria-hidden
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </span>
                <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-1">
                  {app.label}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                  {app.tech}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vertical connector line from apps to central API */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div
            className="w-px h-10"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            aria-hidden
          />
        </div>

        {/* Central API Server bar */}
        <div
          className="rounded-[999px] bg-[var(--color-deepSpace)] text-white px-6 md:px-10 py-5 md:py-6 mb-8 md:mb-10 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p className="text-sm md:text-base font-medium uppercase tracking-wider text-center md:text-left">
            Central API Server
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-[11px] md:text-xs font-medium uppercase tracking-wider text-gray-300">
            <span>Shipment Management</span>
            <span>Driver Coordination</span>
            <span>Client Access</span>
            <span>Notifications</span>
          </div>
        </div>

        {/* Vertical connector line to integrations */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div
            className="w-px h-10"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            aria-hidden
          />
        </div>

        {/* Bottom row: integrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomIntegrations.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.label}
                className="rounded-2xl bg-white shadow-md border border-gray-100 p-6 flex items-center gap-4"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(16, 172, 219, 0.12)",
                    color: "var(--color-electricBlue)",
                  }}
                  aria-hidden
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </span>
                <div>
                  <p className="text-sm font-medium text-[var(--color-deepSpace)]">
                    {item.label}
                  </p>
                  <p className="text-xs text-[var(--color-neutralGray)] mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

