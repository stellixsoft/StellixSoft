import type { Metadata } from "next";
import Link from "next/link";
import SimpleServiceHero from "@/src/components/sections/services/shared/simple-service-hero";
import ContentSection from "@/src/components/sections/services/shared/content-section";
import NdaClientProof from "@/src/components/sections/services/shared/nda-client-proof";
import ServiceAnswerBox from "@/src/components/sections/services/service-answer-box";
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/dotnet-migration" as const;

export const metadata: Metadata = buildPageMetadata({
  title: ".NET Migration Services: VB6, VB.NET to .NET 8",
  description:
    ".NET migration services for VB6, VB.NET, WebForms and .NET Framework apps: assessment, phased migration to .NET 8 or later, and cutover while the old system keeps running. First slices from about $15k.",
  path: PATH,
  keywords: [
    ".NET migration services",
    "VB to .NET migration",
    "VB6 to .NET migration",
    "VB.NET to .NET 8 migration",
    ".NET Framework to .NET 8 migration services",
  ],
});

const faqItems = [
  {
    id: "dotnet-cost",
    question: "How much does a VB or .NET Framework migration cost?",
    answer:
      "A first production slice is typically $15,000 to $40,000. Full programs for larger applications are commonly $40,000 to $100,000 or more, delivered in phases. The team prices your actual code after a short assessment.",
  },
  {
    id: "dotnet-time",
    question: "How long does a migration to .NET 8 take?",
    answer:
      "A first slice usually reaches production in about 6 to 12 weeks after a short assessment. A single application is commonly migrated over 3 to 6 months; larger portfolios run in phases over 6 to 18 months.",
  },
  {
    id: "dotnet-vb6",
    question: "Can you migrate VB6 applications?",
    answer:
      "Yes. VB6 does not run on .NET, so we combine conversion tools with a module-by-module rewrite, usually to C# with a WinForms, WPF or web front end, and test every slice against the old behavior.",
  },
  {
    id: "dotnet-running",
    question: "Does the old system keep running during the migration?",
    answer:
      "Yes. We move the application in slices behind the running system, validate each slice, and cut over with a rollback plan. The team confirms the cutover approach once it has seen your system.",
  },
  {
    id: "dotnet-target",
    question: "Which .NET version do you migrate to?",
    answer:
      "Usually the current long-term support release of .NET (for example .NET 8 or .NET 10), with ASP.NET Core for web apps, and React or Next.js when the front end is also being replaced.",
  },
];

const faqMainEntity: FaqQuestionBlock[] = faqItems.map((f) => ({
  "@type": "Question",
  name: f.question,
  acceptedAnswer: { "@type": "Answer", text: f.answer },
}));

const serviceLd = serviceJsonLd({
  name: ".NET Migration Services",
  description:
    "Migration of VB6, VB.NET, WebForms, WCF and .NET Framework applications to modern .NET, in phases while the existing system keeps running.",
  path: PATH,
  serviceType: ".NET and Visual Basic application migration",
  category: "Legacy Modernization",
  priceRange: {
    min: 15000,
    max: 100000,
    description: "First slice about $15,000 to $40,000; full programs about $40,000 to $100,000 or more.",
  },
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: ".NET Migration", path: PATH },
]);

export default function DotnetMigrationPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <SimpleServiceHero
          title=".NET Migration Services: VB6, VB.NET and .NET Framework to .NET 8"
          intro="We move Visual Basic and .NET Framework applications to modern .NET in slices, while your current system keeps running. US company, US hours, and a fixed-scope first slice so you see working code before a long commitment."
          proofHref="/case-studies/enterprise-portal-modernization"
          proofLabel="VB.NET to .NET case study"
        />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <ServiceAnswerBox
          heading="VB to .NET migration, done in slices"
          answer="Stellix Soft migrates VB6, VB.NET, WebForms, WCF and .NET Framework applications to .NET 8 or later, usually in C#, with React or Next.js when the front end also needs replacing. We assess the code, migrate a first slice in about 6 to 12 weeks (typically $15k to $40k), then move the rest in phases with a rollback plan."
          facts={[
            { label: "Who it's for", value: "Companies running business-critical VB6, VB.NET or .NET Framework apps that are hard to staff, secure or extend" },
            { label: "Typical cost", value: "First slice about $15k to $40k; full programs $40k to $100k+" },
            { label: "Timeline", value: "First slice about 6 to 12 weeks; one application 3 to 6 months; portfolios 6 to 18 months" },
            { label: "Target stack", value: ".NET 8 or later, ASP.NET Core, C#, SQL Server or PostgreSQL, React or Next.js, AWS or Azure" },
          ]}
          proof={{ href: "/tools/dotnet-modernization-assessment", label: "Take the free .NET modernization assessment" }}
        />

        <ContentSection heading="What we migrate" tone="gray">
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table>
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>How</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>VB6 desktop apps</td>
                  <td>C# on .NET 8+ (WinForms, WPF or web)</td>
                  <td>Tool-assisted conversion plus module-by-module rewrite</td>
                </tr>
                <tr>
                  <td>VB.NET on .NET Framework</td>
                  <td>.NET 8+, VB.NET or C#</td>
                  <td>Project upgrade, API replacement, then optional move to C#</td>
                </tr>
                <tr>
                  <td>ASP.NET WebForms</td>
                  <td>ASP.NET Core MVC, Razor Pages, or a React / Next.js front end</td>
                  <td>Strangler pattern: new pages behind the same URL space</td>
                </tr>
                <tr>
                  <td>WCF services</td>
                  <td>ASP.NET Core Web API, gRPC or CoreWCF</td>
                  <td>Contract-first rewrite with compatibility tests</td>
                </tr>
                <tr>
                  <td>Classic ASP</td>
                  <td>ASP.NET Core or Next.js</td>
                  <td>Rewrite by workflow, keeping URLs and data</td>
                </tr>
                <tr>
                  <td>On-prem IIS and SQL Server</td>
                  <td>AWS or Azure, current SQL Server or PostgreSQL</td>
                  <td>Containerize, replicate data, cut over with rollback</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentSection>

        <ContentSection heading="How a .NET migration runs">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Assessment:</strong> code and dependency inventory, risky areas such as COM, WebForms and stored procedures, and a slice plan with cost.</li>
            <li><strong>Safety net:</strong> characterization tests that record what the current system does today.</li>
            <li><strong>First slice (about 6 to 12 weeks):</strong> the new foundation plus one workflow in production, running beside the old app.</li>
            <li><strong>Phased migration:</strong> the remaining modules in slices, each validated against the old behavior.</li>
            <li><strong>Cutover and retirement:</strong> data sync, a short cutover with a rollback plan, then the old system is switched off.</li>
          </ol>
          <p>
            Read the details in our <Link href="/blog/vb-net-migration-strategies-modern-stack">VB to .NET migration guide</Link>,
            the <Link href="/blog/legacy-net-framework-to-dotnet-8-migration-guide">.NET Framework to .NET 8 guide</Link> and
            our <Link href="/blog/zero-downtime-database-migration-strategies">zero-downtime database migration guide</Link>.
          </p>
        </ContentSection>

        <ContentSection heading="Proof: a 15-year-old VB.NET portal, modernized" tone="gray">
          <p>
            For a global hardware manufacturer, we moved a VB.NET enterprise portal onto .NET, React,
            SignalR, SQL Server and AWS with a long-running dedicated team, while their teams kept
            using the system every day. Their end customers include Fortune 500 supply chains, so the
            client and its customers stay under NDA.
          </p>
          <p>
            <Link href="/case-studies/enterprise-portal-modernization">Read the enterprise portal modernization case study</Link>{" "}
            or see the wider <Link href="/services/legacy-modernization">legacy modernization services</Link>.
          </p>
        </ContentSection>

        <NdaClientProof />
        <ServiceFaqs title=".NET Migration FAQs" items={faqItems} />
        <ServiceInternalLinks slug="dotnet-migration" />
        <CTAPilot />
      </div>
    </>
  );
}
