const yourTeam = [
  { label: "Hardware Engineers", icon: "chip" },
  { label: "Firmware Devs", icon: "code" },
];

const ourTeam = [
  { label: "Web Platform Devs", icon: "monitor" },
  { label: "Mobile App Devs", icon: "phone" },
  { label: "Cloud & DevOps", icon: "cloud" },
];

const collaborateItems = [
  "Work alongside your firmware team to understand device capabilities",
  "Design APIs that align with your device communication protocols",
  "Participate in your product planning discussions",
  "Match your development cycles and release schedules",
  "Use your project management tools and communication channels",
];

function ChipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9h6v6H9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 4v4M15 4v4M9 16v4M15 16v4M4 9h4M4 15h4M16 9h4M16 15h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <span className={`font-mono text-lg font-semibold text-[var(--color-deepSpace)] ${className ?? ""}`} aria-hidden>
      &lt;/&gt;
    </span>
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

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeLinecap="round" strokeLinejoin="round" />
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
  chip: ChipIcon,
  code: CodeIcon,
  monitor: MonitorIcon,
  phone: PhoneIcon,
  cloud: CloudIcon,
};

export default function SoftwareDivision() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-4">
          Your Software Division
        </h2>
        <p className="text-base text-[var(--color-neutralGray)] text-center max-w-2xl mx-auto mb-10 md:mb-12">
          We don&apos;t just build software for you; we become your software
          team, integrating directly with your engineering department.
        </p>

        <div
          className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg flex flex-col lg:flex-row gap-10 lg:gap-12"
          style={{
            background: "linear-gradient(90deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 45%)",
          }}
        >
          {/* Left: YOUR TEAM + OUR TEAM */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-neutralGray)] mb-4">
                Your Team
              </p>
              <div className="space-y-3">
                {yourTeam.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl bg-white shadow-sm border border-gray-100 p-4 flex items-center gap-3"
                    >
                      <span className="shrink-0 w-9 h-9 flex items-center justify-center text-[var(--color-deepSpace)]">
                        {Icon && <Icon className="w-5 h-5" />}
                      </span>
                      <span className="text-sm font-medium text-[var(--color-deepSpace)]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--color-electricBlue)" }}
              >
                Our Team
              </p>
              <div className="space-y-3">
                {ourTeam.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl bg-white shadow-sm border border-gray-100 p-4 flex items-center gap-3"
                    >
                      <span className="shrink-0 w-9 h-9 flex items-center justify-center text-[var(--color-deepSpace)]">
                        {Icon && <Icon className="w-5 h-5" />}
                      </span>
                      <span className="text-sm font-medium text-[var(--color-deepSpace)]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: HOW WE COLLABORATE */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-5">
              How We Collaborate
            </h3>
            <ul className="space-y-3 mb-6 flex-1">
              {collaborateItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-deepSpace)]">
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-white"
                    style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                    aria-hidden
                  >
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="rounded-xl p-4 md:p-5 text-center"
              style={{ backgroundColor: "var(--color-deepSpace)" }}
            >
              <p className="text-xs font-medium uppercase tracking-wider text-white mb-1">
                Daily Collaboration
              </p>
              <p className="text-xs text-gray-400">
                Same timezone • Shared tools • One team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
