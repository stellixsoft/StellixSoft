const specializations = [
  {
    icon: "/assets/images/iot.png",
    title: "Multi-Tenant SaaS Platforms",
    description:
      "Build once, serve many. We architect platforms that securely serve multiple enterprise clients from a single codebase with complete data isolation and customization per tenant.",
    items: [
      "Role-based access control",
      "Tenant-specific configurations",
      "Secure data partitioning",
      "White-label capabilities",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Custom ERP & CRM Systems",
    description:
      "When off-the-shelf solutions don&apos;t fit your workflow, we build custom enterprise resource planning and customer relationship management systems tailored to your exact processes.",
    items: [
      "Workflow automation",
      "Integration with existing systems",
      "Custom reporting dashboards",
      "Mobile access",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Real-Time Data Systems",
    description:
      "Live dashboards, instant notifications, and real-time collaboration features using SignalR, WebSockets, and modern event-driven architectures.",
    items: [
      "Live data visualization",
      "Instant alert systems",
      "Collaborative workspaces",
      "High-frequency data processing",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Enterprise Portals & Dashboards",
    description:
      "Internal employee portals, customer-facing dashboards, and partner platforms that unify data and streamline operations across your organization.",
    items: [
      "Self-service customer portals",
      "Employee intranets",
      "Partner/vendor portals",
      "Executive dashboards",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Enterprise Integrations",
    description:
      "Connect your enterprise stack. We build robust integrations between your existing systems, third-party APIs, and new applications you need.",
    items: [
      "ERP integrations",
      "Payment gateway connections",
      "Third-party API development",
      "Data synchronization",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "Secure & Compliant Systems",
    description:
      "Enterprise applications built with security-first architecture. We implement proper authentication, authorization, audit trails, and compliance requirements.",
    items: [
      "SOC 2 considerations",
      "HIPAA compliance (where needed)",
      "Complete audit trails",
      "Enterprise-grade security",
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

export default function KeySpecializations() {
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
          Enterprise Applications We Specialize In
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
