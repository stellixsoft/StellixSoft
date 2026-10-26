import Link from "next/link";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
export const metadata = buildPageMetadata({
  title: "Engineering Lab — Free Enterprise Planning Tools",
  description:
    "Explore RFID ROI, assess legacy .NET modernization, and try a simulated IoT operations platform. Free tools from Stellix Soft, with no registration.",
  path: "/tools",
});
const tools = [
  {
    number: "01",
    category: "Business value",
    title: "RFID ROI & deployment planner",
    description:
      "Model asset losses, inventory labor, deployment costs, and operating expenses. See annual savings, payback, and three-year ROI.",
    href: "/tools/rfid-roi-calculator",
    action: "Calculate your business case",
    features: [
      "Transparent assumptions",
      "Cash-flow projection",
      "Integration pattern",
    ],
  },
  {
    number: "02",
    category: "Technical direction",
    title: "Legacy .NET modernization assessment",
    description:
      "Explore what your .NET Framework, VB.NET, or Web Forms application needs before a migration. Build a preliminary phased roadmap.",
    href: "/tools/dotnet-modernization-assessment",
    action: "Assess your application",
    features: [
      "10 assessment questions",
      "Explained recommendations",
      "Planning budget ranges",
    ],
  },
  {
    number: "03",
    category: "Engineering in action",
    title: "Enterprise IoT operations simulator",
    description:
      "Trace RFID assets, recover buffered events after an outage, and resolve cold-chain exceptions across a connected warehouse.",
    href: "/tools/iot-platform-demo",
    action: "Enter the control room",
    features: [
      "Guided warehouse scenarios",
      "Tenant-scoped views",
      "Recovery and audit trails",
    ],
  },
];
export default function EngineeringLab() {
  return (
    <>
      <header className="lab-hero">
        <div className="lab-container">
          <span className="lab-eyebrow">Stellix Soft Engineering Lab</span>
          <h1>
            Explore the engineering.
            <br />
            <em>Understand the impact.</em>
          </h1>
          <p>
            Turn a technology question into a clearer business decision.
            Calculate potential value, map a modernization path, or experience
            an enterprise operations workflow.
          </p>
          <div className="lab-tags">
            <span>Free interactive tools</span>
            <span>No registration required</span>
            <span>Your inputs stay in your browser</span>
          </div>
        </div>
      </header>
      <div className="lab-container lab-body">
        <section className="lab-tool-grid" aria-label="Engineering tools">
          {tools.map((tool) => (
            <article className="lab-tool-card" key={tool.number}>
              <div className="lab-tool-number">{tool.number}</div>
              <p className="lab-eyebrow">{tool.category}</p>
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <ul>
                {tool.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href={tool.href} className="lab-button">
                {tool.action} →
              </Link>
            </article>
          ))}
        </section>
        <section className="lab-explainer">
          <span className="lab-eyebrow">
            Useful before the first conversation
          </span>
          <h2>Get a result. Then choose your next step.</h2>
          <p>
            See results without giving us your email. Download a planning report
            or print it to PDF. If you want an engineering review, choose to
            carry the inputs and results into our contact form.
          </p>
          <p>
            Calculators and assessments provide indicative planning guidance.
            The IoT simulator uses fictional data. A production deployment
            starts with discovery, validation, and an agreed scope.
          </p>
          <div className="lab-related">
            <Link href="/services/iot-software">
              IoT software engineering →
            </Link>
            <Link href="/services/legacy-modernization">
              Legacy modernization →
            </Link>
            <Link href="/case-studies">Explore our case studies →</Link>
          </div>
        </section>
      </div>
    </>
  );
}
