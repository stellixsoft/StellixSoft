import type { Metadata } from "next";
import BlockchainAndCryptographyHero from "@/src/components/sections/services/blockchain-and-cryptography/hero";
import BlockchainForBusiness from "@/src/components/sections/services/blockchain-and-cryptography/blockchain-for-business";
import OurBlockchainPhilosophy from "@/src/components/sections/services/blockchain-and-cryptography/our-blockchain-philosophy";
import BlockchainTechnologyExpertise from "@/src/components/sections/services/blockchain-and-cryptography/technology-expertise";
import WhenBlockchainMakesSense from "@/src/components/sections/services/blockchain-and-cryptography/when-blockchain-makes-sense";
import BlockchainDevelopmentProcess from "@/src/components/sections/services/blockchain-and-cryptography/development-process";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Blockchain & Cryptography Development Services",
  description: "Secure blockchain solutions and cryptographic systems for compliance-heavy and trust-critical enterprise applications.",
  alternates: { canonical: "https://stellixsoft.com/services/blockchain-and-cryptography" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blockchain and Cryptography",
  description: "Secure blockchain solutions and cryptographic systems for compliance-heavy and trust-critical enterprise applications.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/blockchain-and-cryptography",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Blockchain and Cryptography", item: "https://stellixsoft.com/services/blockchain-and-cryptography" },
  ],
};

export default function BlockchainAndCryptographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <BlockchainAndCryptographyHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue)" }} />
        <BlockchainForBusiness />
        <OurBlockchainPhilosophy />
        <BlockchainTechnologyExpertise />
        <WhenBlockchainMakesSense />
        <BlockchainDevelopmentProcess />
        <CTAPilot />
      </div>
    </>
  );
}