import type { Metadata } from "next";
import BlockchainAndCryptographyHero from "@/src/components/sections/services/blockchain-and-cryptography/hero";
import BlockchainForBusiness from "@/src/components/sections/services/blockchain-and-cryptography/blockchain-for-business";
import OurBlockchainPhilosophy from "@/src/components/sections/services/blockchain-and-cryptography/our-blockchain-philosophy";
import BlockchainTechnologyExpertise from "@/src/components/sections/services/blockchain-and-cryptography/technology-expertise";
import WhenBlockchainMakesSense from "@/src/components/sections/services/blockchain-and-cryptography/when-blockchain-makes-sense";
import BlockchainDevelopmentProcess from "@/src/components/sections/services/blockchain-and-cryptography/development-process";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/blockchain-and-cryptography" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Blockchain & Cryptography Development Services",
  description:
    "Secure blockchain solutions and cryptographic systems for compliance-heavy and trust-critical enterprise applications.",
  path: PATH,
});

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
        <CTAPilot />
      </div>
    </>
  );
}
