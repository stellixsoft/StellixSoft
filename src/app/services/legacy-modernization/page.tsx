import type { Metadata } from "next";
import LegacyModernizationHero from "@/src/components/sections/services/legacy-modernization/hero";
import YourLegacy from "@/src/components/sections/services/legacy-modernization/your-legacy";
import Modernization from "@/src/components/sections/services/legacy-modernization/modernization";
import TechnologiesWeMigrate from "@/src/components/sections/services/legacy-modernization/technologies-we-migrate";
import HowWeModernized from "@/src/components/sections/services/legacy-modernization/how-we-modernized";
import HowWeAvoid from "@/src/components/sections/services/legacy-modernization/how-we-avoid";
import StandBehind from "@/src/components/sections/services/legacy-modernization/stand-behind";
import AfterModernization from "@/src/components/sections/services/legacy-modernization/after-modernization";
import Testimonial from "@/src/components/sections/industries/logistics-and-supply-chain/testimonial";
import FAQs from "@/src/components/sections/services/legacy-modernization/faqs";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/legacy-modernization" as const;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Application Modernization Services - Legacy Software & Cloud Migration",
  description:
    "Legacy modernization services and application modernization. Migrate from VB.NET, legacy .NET Framework, and outdated architectures to modern cloud-native microservices with zero downtime.",
  path: PATH,
  keywords: [
    "legacy modernization services",
    "legacy software modernization",
    "application modernization services",
    "cloud migration",
    ".NET migration",
    "legacy system modernization",
    "software modernization",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "How long does a typical modernization project take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Timeline depends on the complexity and size of the legacy system. A focused migration of a single application typically takes 3-6 months. Larger enterprise portfolios use a phased approach over 6-18 months.",
    },
  },
  {
    "@type": "Question",
    name: "Will my business have to stop during the migration?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. We specialize in zero-downtime migrations. Your existing system continues to run while we build and validate the modern replacement. Traffic is migrated gradually with instant rollback capability.",
    },
  },
  {
    "@type": "Question",
    name: "What if the new system doesn't work as well as the old one?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We run comprehensive parallel testing before any cutover. Both systems run simultaneously, and we validate behavioral parity with automated test suites before migrating any production traffic.",
    },
  },
  {
    "@type": "Question",
    name: "Do we need to change our business processes?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not necessarily. We can modernize the technology while preserving your existing business logic and workflows. However, modernization is also an opportunity to optimize processes if desired.",
    },
  },
  {
    "@type": "Question",
    name: "What about our data? Is migration risky?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Data migration is carefully planned with validation at every step. We use checksums, row counts, and business rule verification to ensure 100% data integrity. Backups and rollback plans are always in place.",
    },
  },
];

const serviceLd = serviceJsonLd({
  name: "Legacy Software Modernization",
  description:
    "Migrate from VB.NET, legacy .NET Framework, and outdated architectures to modern .NET, cloud-native microservices with zero downtime.",
  path: PATH,
  serviceType: "Legacy application modernization and cloud migration",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Legacy Modernization", path: PATH },
]);

export default function LegacyModernizationPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <LegacyModernizationHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <YourLegacy />
        <Modernization />
        <TechnologiesWeMigrate />
        <HowWeModernized />
        <HowWeAvoid />
        <AfterModernization />
        <Testimonial />
        <FAQs />
        <StandBehind />
        <CTAPilot />
      </div>
    </>
  );
}
