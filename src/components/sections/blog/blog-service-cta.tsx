import Link from "next/link";

type ServiceCta = {
  heading: string;
  body: string;
  serviceHref: string;
  serviceLabel: string;
  /** Optional Engineering Lab tool that fits readers of this category. */
  tool?: { href: string; label: string };
};

/** Maps a blog category to the service (and tool) a reader of that topic is most likely to buy. */
const ctaByCategory: Record<string, ServiceCta> = {
  "AI & Automation": {
    heading: "Planning an AI feature?",
    body: "We scope, build, and secure AI integrations inside existing enterprise systems, starting with a short pilot.",
    serviceHref: "/services/ai-integration-services",
    serviceLabel: "AI integration services",
  },
  "DevOps & Cloud": {
    heading: "Need CI/CD or cloud work done right?",
    body: "Our DevOps engineers set up pipelines, infrastructure as code, and cost controls for enterprise teams.",
    serviceHref: "/services/devops-and-cloud-services",
    serviceLabel: "DevOps & cloud services",
  },
  "E-Commerce": {
    heading: "Moving to headless or composable commerce?",
    body: "We build headless storefronts and B2B commerce integrations that hold up at enterprise scale.",
    serviceHref: "/services/e-commerce-development",
    serviceLabel: "E-commerce development",
  },
  "Enterprise Development": {
    heading: "Building something like this?",
    body: "Our senior engineers design and deliver enterprise platforms with US-timezone overlap and a low-risk pilot to start.",
    serviceHref: "/services/enterprise-development",
    serviceLabel: "Enterprise software development",
  },
  "Software Architecture": {
    heading: "Want a second opinion on your architecture?",
    body: "We review designs, plan migrations, and run cutovers without downtime for production systems.",
    serviceHref: "/services/enterprise-development",
    serviceLabel: "Enterprise software development",
  },
  "Healthcare Tech": {
    heading: "Building healthcare software?",
    body: "We deliver HIPAA-aware platforms, EHR integrations, and telemedicine features for healthcare teams.",
    serviceHref: "/industries/healthcare-and-medtech",
    serviceLabel: "Healthcare & medtech software",
  },
  "IoT & Hardware": {
    heading: "Planning an IoT platform?",
    body: "We build device management, telemetry pipelines, and dashboards for connected hardware.",
    serviceHref: "/services/iot-software",
    serviceLabel: "IoT software development",
    tool: { href: "/tools/iot-platform-demo", label: "Try the IoT platform demo" },
  },
  "Legacy Modernization": {
    heading: "Modernizing a legacy system?",
    body: "We migrate VB, .NET Framework, and PHP applications to modern stacks in phases, with no big-bang rewrite.",
    serviceHref: "/services/legacy-modernization",
    serviceLabel: "Legacy modernization services",
    tool: {
      href: "/tools/dotnet-modernization-assessment",
      label: "Take the free modernization assessment",
    },
  },
  "Logistics Tech": {
    heading: "Building logistics or warehouse software?",
    body: "We build tracking, WMS, and RFID systems for logistics and supply chain operations.",
    serviceHref: "/industries/logistics-and-supply-chain",
    serviceLabel: "Logistics software solutions",
    tool: { href: "/tools/rfid-roi-calculator", label: "Estimate your RFID ROI" },
  },
  "Team Building": {
    heading: "Need engineers who ship?",
    body: "Hire a dedicated team or add senior developers to yours, from $25/hr with no lock-in contract.",
    serviceHref: "/services/hire-dedicated-development-team",
    serviceLabel: "Hire a dedicated development team",
  },
};

const fallback = ctaByCategory["Enterprise Development"];

export default function BlogServiceCta({ category }: { category: string }) {
  const cta = ctaByCategory[category] ?? fallback;

  return (
    <aside className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6 sm:p-8">
      <p className="text-lg font-medium text-[var(--color-deepSpace)]">
        {cta.heading}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{cta.body}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        >
          Get a free project estimate
        </Link>
        <Link
          href={cta.serviceHref}
          className="text-sm font-medium text-[var(--color-electricBlue)] hover:underline"
        >
          {cta.serviceLabel} →
        </Link>
        {cta.tool ? (
          <Link
            href={cta.tool.href}
            className="text-sm font-medium text-[var(--color-electricBlue)] hover:underline"
          >
            {cta.tool.label} →
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
