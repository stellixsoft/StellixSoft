const challenges = [
  {
    quote: "Our customers want a portal to manage their devices",
    sub: "You have great hardware, but no customer-facing software",
  },
  {
    quote: "We need a mobile app to configure devices",
    sub: "Bluetooth setup, WiFi configuration, device control",
  },
  {
    quote: "Enterprise clients want real-time monitoring",
    sub: "Live dashboards showing device status across deployments",
  },
  {
    quote: "Our platform needs to integrate with their systems",
    sub: "API connections to customer ERP, WMS, and other systems",
  },
  {
    quote: "We can't find developers who understand our hardware",
    sub: "Most web developers have never worked with device protocols",
  },
];

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SoftwareChallenge() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}
>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-6 leading-tight">
            The Software
            <br />
            Challenge for
            <br />
            Hardware Companies
          </h2>
          <p className="text-base text-[var(--color-deepSpace)] leading-relaxed mb-4">
            Hardware companies face a unique challenge: your core expertise is
            electronics, firmware, and manufacturing. But your customers expect
            modern software experiences—device portals, mobile apps, real-time
            dashboards, and enterprise integrations.
          </p>
          <p className="text-base text-[var(--color-deepSpace)] leading-relaxed">
            Building an in-house software team is expensive and distracting from
            your core business. Generic software agencies don&apos;t understand
            hardware constraints. You need a partner who speaks both languages.
          </p>
        </div>

        {/* Right column - Challenges box */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ backgroundColor: "rgba(16, 172, 219, 0.08)" }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-deepSpace)] mb-6">
            Challenges We Hear
          </p>
          <ul className="space-y-6">
            {challenges.map((item) => (
              <li key={item.quote} className="flex gap-4">
                <span
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                  style={{
                    backgroundColor: "rgba(16, 172, 219, 0.15)",
                    color: "var(--color-electricBlue)",
                  }}
                  aria-hidden
                >
                  <DocumentIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-[var(--color-deepSpace)] mb-1">
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
