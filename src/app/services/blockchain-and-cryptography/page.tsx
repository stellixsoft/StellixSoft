import type { Metadata } from "next";
import BlockchainAndCryptographyHero from "@/src/components/sections/services/blockchain-and-cryptography/hero";
import BlockchainForBusiness from "@/src/components/sections/services/blockchain-and-cryptography/blockchain-for-business";
import OurBlockchainPhilosophy from "@/src/components/sections/services/blockchain-and-cryptography/our-blockchain-philosophy";
import BlockchainTechnologyExpertise from "@/src/components/sections/services/blockchain-and-cryptography/technology-expertise";
import WhenBlockchainMakesSense from "@/src/components/sections/services/blockchain-and-cryptography/when-blockchain-makes-sense";
import BlockchainDevelopmentProcess from "@/src/components/sections/services/blockchain-and-cryptography/development-process";
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/blockchain-and-cryptography" as const;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Blockchain Development Services - Enterprise Blockchain & Cryptography",
  description:
    "Blockchain development services and blockchain integration for enterprise applications. Secure cryptographic systems, smart contracts, and distributed ledger solutions for compliance-heavy industries.",
  path: PATH,
  keywords: [
    "blockchain development services",
    "blockchain integration services",
    "enterprise blockchain solutions",
    "smart contract development",
    "cryptography development",
    "distributed ledger technology",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "When does blockchain actually make sense for a business?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Blockchain adds value when you need tamper-proof audit trails, multi-party trust without a central authority, or verifiable data provenance. Common use cases include supply chain tracking, compliance verification, digital identity, and financial settlement systems.",
    },
  },
  {
    "@type": "Question",
    name: "How is enterprise blockchain different from cryptocurrency?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enterprise blockchain focuses on permissioned networks for business processes - not speculation. We build solutions using Hyperledger, private Ethereum networks, or custom chains that solve real operational problems like compliance, provenance, and inter-organization data sharing.",
    },
  },
  {
    "@type": "Question",
    name: "Can blockchain integrate with our existing systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We design blockchain solutions that connect to your existing databases, ERPs, and APIs through middleware layers. The blockchain becomes a trust layer on top of your current infrastructure, not a replacement for it.",
    },
  },
  {
    "@type": "Question",
    name: "What about performance and scalability?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enterprise blockchains are designed for throughput, not decentralization. We architect solutions using off-chain storage, layer-2 protocols, and optimized consensus mechanisms to handle thousands of transactions per second.",
    },
  },
  {
    "@type": "Question",
    name: "How do you handle regulatory compliance with blockchain?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We build compliance into the architecture from day one - data residency controls, GDPR-compatible privacy layers, audit logging, and permissioned access. Our solutions meet regulatory requirements across healthcare, finance, and government sectors.",
    },
  },
];

const faqItems = faqMainEntity.map((q, i) => ({
  id: `blockchain-faq-${i + 1}`,
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

const serviceLd = serviceJsonLd({
  name: "Blockchain and Cryptography",
  description:
    "Secure blockchain solutions and cryptographic systems for compliance-heavy and trust-critical enterprise applications.",
  path: PATH,
  serviceType: "Blockchain and enterprise cryptography development",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Blockchain and Cryptography", path: PATH },
]);

export default function BlockchainAndCryptographyPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <BlockchainAndCryptographyHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <BlockchainForBusiness />
        <OurBlockchainPhilosophy />
        <BlockchainTechnologyExpertise />
        <WhenBlockchainMakesSense />
        <BlockchainDevelopmentProcess />
        <ServiceFaqs
          title="Blockchain & Cryptography FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="blockchain-and-cryptography" />
        <CTAPilot />
      </div>
    </>
  );
}
