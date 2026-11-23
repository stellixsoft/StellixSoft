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

const PATH = "/services/rfid-software-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "RFID Software Development for Asset Tracking",
  description:
    "Custom RFID software development: reader and tag workflows, asset and inventory tracking, warehouse events, dashboards and the APIs that feed your ERP or WMS. Platforms from about $40k.",
  path: PATH,
  keywords: [
    "RFID software development",
    "RFID asset tracking software",
    "RFID inventory management software",
    "RFID warehouse software",
    "custom RFID software",
  ],
});

const faqItems = [
  {
    id: "rfid-cost",
    question: "How much does custom RFID software cost?",
    answer:
      "A typical RFID platform is about $40,000 to $100,000 over 3 to 6 months. A pilot at one site to prove read rates and the workflow is often discussed around $10,000 to $15,000. Readers, tags and installation are bought separately from your hardware vendor.",
  },
  {
    id: "rfid-readers",
    question: "Which RFID readers do you work with?",
    answer:
      "We build on the reader vendor's SDK or the LLRP standard for fixed readers, and on handheld SDKs for mobile scanners. The team confirms support for your specific models during discovery.",
  },
  {
    id: "rfid-hardware",
    question: "Do you sell RFID tags or hardware?",
    answer:
      "No. We build the software around RFID and work beside your hardware vendor, integrator and firmware team. We do not manufacture devices or sell tags.",
  },
  {
    id: "rfid-integration",
    question: "Can RFID events update our ERP or WMS?",
    answer:
      "Yes. Reads are filtered into business events (received, moved, shipped, missing) and pushed to your ERP, WMS or TMS through APIs, queues or scheduled sync, with retries and an audit trail.",
  },
  {
    id: "rfid-vs-barcode",
    question: "Is RFID better than barcodes for inventory?",
    answer:
      "RFID reads many items at once without line of sight, which suits high-volume receiving, cycle counts and asset tracking. Barcodes are cheaper per item and fine for low volumes. Estimate the payback with our RFID ROI calculator.",
  },
];

const faqMainEntity: FaqQuestionBlock[] = faqItems.map((f) => ({
  "@type": "Question",
  name: f.question,
  acceptedAnswer: { "@type": "Answer", text: f.answer },
}));

const serviceLd = serviceJsonLd({
  name: "RFID Software Development",
  description:
    "Custom software around RFID readers and tags: asset and inventory tracking, warehouse and logistics events, device management, dashboards, portals and ERP/WMS integration.",
  path: PATH,
  serviceType: "RFID software and asset tracking platform development",
  category: "IoT Software Development",
  priceRange: {
    min: 40000,
    max: 100000,
    description: "Typical RFID platform; pilots often around $10,000 to $15,000.",
  },
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "RFID Software Development", path: PATH },
]);

const builds = [
  { title: "Reader and tag workflows", text: "Fixed and handheld reader integration, read filtering, tag commissioning and encoding." },
  { title: "Asset and inventory tracking", text: "Where every asset or pallet is, who moved it and when, with search, history and alerts for missing items." },
  { title: "Warehouse and logistics events", text: "Receiving, put-away, picking, dock-door and shipping events that update stock automatically." },
  { title: "Device management", text: "Reader health, configuration, firmware updates and alerts across sites." },
  { title: "Dashboards and customer portals", text: "Operations dashboards and portals your customers or partners log into." },
  { title: "ERP, WMS and TMS integration", text: "APIs and event streams that turn raw reads into business transactions in your system of record." },
];

export default function RfidSoftwareDevelopmentPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <SimpleServiceHero
          title="RFID Software Development for Asset and Inventory Tracking"
          intro="We build the software around RFID: reader and tag workflows, asset and inventory tracking, warehouse events, dashboards and the integrations that put every read into your business system. We work beside your hardware vendor and firmware team."
          proofHref="/tools/rfid-roi-calculator"
          proofLabel="Estimate your RFID ROI"
        />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
        <ServiceAnswerBox
          heading="Custom RFID software, from reader to ERP"
          answer="Stellix Soft builds RFID software for hardware makers, warehouses, logistics, retail and manufacturing teams: reader integration, read filtering, asset and inventory tracking, alerts, dashboards, portals and ERP or WMS integration. A typical platform is about $40k to $100k over 3 to 6 months, often starting with a single-site pilot."
          facts={[
            { label: "Who it's for", value: "Warehouses, 3PLs, manufacturers, retailers and hardware companies using RFID readers and tags" },
            { label: "Typical cost", value: "About $40k to $100k for a platform; pilots often around $10k to $15k" },
            { label: "Timeline", value: "3 to 6 months for a platform, released site by site" },
            { label: "Proof", value: "Long-running work for a global maker of RFID systems, IP cameras and networking gear" },
          ]}
          proof={{ href: "/tools/rfid-roi-calculator", label: "Try the RFID ROI calculator" }}
        />

        <ContentSection heading="What we build around RFID" tone="gray">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {builds.map((b) => (
              <li key={b.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-medium text-[var(--color-deepSpace)]">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.text}</p>
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection heading="How an RFID software project runs">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Discovery:</strong> fixed readers or handhelds, number of sites, dead zones, what each read should update, and the system of record.</li>
            <li><strong>Single-site pilot:</strong> readers connected, reads filtered into events, a first dashboard and alerts, measured against your current process.</li>
            <li><strong>Platform build:</strong> multi-site device management, portals, reporting and ERP, WMS or TMS integration.</li>
            <li><strong>Rollout and support:</strong> site-by-site rollout, monitoring, and a dedicated team or maintenance plan.</li>
          </ol>
          <p>
            Comparing RFID with barcodes first? Use the <Link href="/tools/rfid-roi-calculator">RFID ROI calculator</Link>.
            For other connected devices, see <Link href="/services/iot-software">IoT software development services</Link>,
            and for logistics operations see <Link href="/industries/logistics-and-supply-chain">logistics and supply chain software</Link>.
          </p>
        </ContentSection>

        <ContentSection heading="Proof from the hardware side" tone="gray">
          <p>
            Our longest-running engagement is with a global hardware manufacturer whose products are
            RFID systems, IP cameras and enterprise networking. We built and modernized the enterprise
            software their teams use to manage deployments, which run in large supply-chain
            operations, including Fortune 500 supply chains. Names stay under NDA; references are
            shared on a qualified call.
          </p>
          <p>
            <Link href="/case-studies/enterprise-portal-modernization">Read the enterprise portal case study</Link>.
          </p>
        </ContentSection>

        <NdaClientProof />
        <ServiceFaqs title="RFID Software FAQs" items={faqItems} />
        <ServiceInternalLinks slug="rfid-software-development" />
        <CTAPilot />
      </div>
    </>
  );
}
