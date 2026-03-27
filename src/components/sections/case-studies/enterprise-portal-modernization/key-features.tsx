import Image from "next/image";
const features = [
  {
    title: "Multi-tenant Platform",
    description: [
      "Single codebase serving multiple Fortune 500 clients",
      "Complete data isolation between tenants",
      "Customizable branding and workflows per client",
      "Role-based access control with granular permissions",
    ],
  },
  {
    title: "Real-time Device Monitoring",
    description: [
      "Live dashboard showing 10,000+ devices worldwide",
      "Instant alerts when devices go offline or malfunction",
      "Historical performance data and trend analysis",
      "Geographic visualization of device deployments",
    ],
  },
  {
    title: "Automated Ticketing System",
    description: [
      "Tickets auto-created from device anomalies",
      "Smart routing based on issue type and severity",
      "SLA tracking with escalation workflows",
      "Integration with email and SMS notifications",
    ],
  },
  {
    title: "Advanced Reporting Suite",
    description: [
      "Executive dashboards for C-level visibility",
      "Operational reports for field teams",
      "Compliance reports for enterprise clients",
      "Scheduled report delivery via email",
    ],
  },
];

export default function EnterprisePortalKeyFeatures() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Key Features Delivered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-7 md:py-7 flex flex-col"
            >
              {/* Icon placeholder */}
              <Image src="/assets/images/iot.png" alt="Enterprise Portal Key Features" width={40} height={40} className="object-contain mb-4" />

              <h3 className="text-sm md:text-[15px] font-medium tracking-[0.16em] uppercase text-[var(--color-deepSpace)] mb-4">
                {feature.title}
              </h3>

              <ul className="space-y-2.5 text-sm md:text-[15px] text-[var(--color-deepSpace)]">
                {feature.description.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "var(--color-electricBlue)" }}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

