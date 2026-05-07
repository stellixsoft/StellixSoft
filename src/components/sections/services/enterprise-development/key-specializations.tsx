import {
  BlueTickIcon,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

const specializations = [
  {
    title: "Multi-tenant SaaS platforms",
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
    title: "Custom ERP & CRM systems",
    description:
      "When off-the-shelf solutions don't fit your workflow, we build custom enterprise resource planning and customer relationship management systems tailored to your exact processes.",
    items: [
      "Workflow automation",
      "Integration with existing systems",
      "Custom reporting dashboards",
      "Mobile access",
    ],
  },
  {
    title: "Real-time data systems",
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
    title: "Enterprise portals & dashboards",
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
    title: "Enterprise integrations",
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
    title: "Secure & compliant systems",
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

function CardIcon() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: "color-mix(in srgb, var(--color-electricBlue-solid) 15%, transparent)" }}
      aria-hidden
    >
      <span className="h-5 w-5 rounded-sm" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
    </span>
  );
}

export default function KeySpecializations() {
  return (
    <section
      id="specializations"
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(16, 172, 219, 0.05) 0%, #ffffff 18%)",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-8 text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Enterprise Applications We Specialize In
        </h2>
        <div
          className="mx-auto mb-12 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {specializations.map((spec) => (
            <article
              key={spec.title}
              className="rounded-2xl border border-[rgba(3,2,19,0.08)] bg-white p-6 shadow-[0_4px_24px_rgba(3,2,19,0.06)] md:p-8"
            >
              <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                <CardIcon />
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-deepSpace)] md:text-[15px]">
                  {spec.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-neutralGray)]">{spec.description}</p>
                <ul className="w-full space-y-2.5">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-left text-sm text-[var(--color-neutralGray)] leading-relaxed">
                      <BlueTickIcon className="mt-0.5 h-[14px] w-[14px] shrink-0" />
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
