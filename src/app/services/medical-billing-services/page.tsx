import type { Metadata } from "next";
import MedicalBillingHero from "@/src/components/sections/services/medical-billing-services/hero";
import MedicalBillingMadeForYou from "@/src/components/sections/services/medical-billing-services/made-for-you";
import MedicalBillingAiCompliance from "@/src/components/sections/services/medical-billing-services/ai-compliance";
import MedicalBillingEndToEnd from "@/src/components/sections/services/medical-billing-services/end-to-end-services";
import MedicalBillingKnowledgeBase from "@/src/components/sections/services/medical-billing-services/knowledge-base";
import MedicalBillingBenefits from "@/src/components/sections/services/medical-billing-services/benefits-outsourcing";
import MedicalBillingSophisticatedSolutions from "@/src/components/sections/services/medical-billing-services/sophisticated-solutions";
import MedicalBillingFeaturesRelyOn from "@/src/components/sections/services/medical-billing-services/features-rely-on";
import MedicalBillingCta from "@/src/components/sections/services/medical-billing-services/medical-billing-cta";
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/medical-billing-services" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Medical Billing Services | StellixSoft",
  description:
    "End-to-end medical billing services: hospital and physician billing, credentialing, denial management, audits, and HIPAA-compliant revenue cycle workflows.",
  path: PATH,
  keywords: [
    "medical billing services",
    "billing services",
    "healthcare billing outsourcing",
    "revenue cycle management",
    "denial management",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "What is medical billing service?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Medical billing is the process of translating healthcare services into accurate claims, submitting them to payers, posting payments, and following up on denials or underpayments. Outsourced billing teams manage the revenue cycle end-to-end so providers get paid faster with fewer administrative tasks.",
    },
  },
  {
    "@type": "Question",
    name: "What will medical billing services cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Pricing depends on specialty, claim volume, and services needed—such as full RCM versus coding-only support. Most engagements use a predictable percentage-of-collections or per-claim model. After a brief discovery call, we provide a scoped proposal tailored to your practice.",
    },
  },
  {
    "@type": "Question",
    name: "How long does onboarding take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Typical onboarding spans a few weeks: system access and credential verification, payer setup, clearinghouse configuration, workflow alignment, and parallel-run quality checks before go-live. Complex multi-site groups may extend slightly with phased rollouts.",
    },
  },
  {
    "@type": "Question",
    name: "Are your medical billing services HIPAA compliant?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We follow HIPAA safeguards for PHI, including restricted access controls, encrypted transmission where applicable, audit-friendly processes, and business associate workflows aligned with your policies.",
    },
  },
  {
    "@type": "Question",
    name: "Which specialties do you cover?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We support hospital, physician groups, surgical centers, and many outpatient specialties—with billing paths tailored to each payer mix. During discovery we confirm edits, LCD/NCD considerations, and any specialty-specific documentation rules.",
    },
  },
];

const faqItems = faqMainEntity.map((q, i) => ({
  id: `medical-billing-faq-${i + 1}`,
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

const serviceLd = serviceJsonLd({
  name: "Medical Billing Services",
  description:
    "Healthcare revenue cycle and medical billing: claims, credentialing, denial management, and HIPAA-aligned billing operations.",
  path: PATH,
  serviceType: "Medical billing and healthcare revenue cycle services",
  category: "Healthcare Services",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Medical Billing Services", path: PATH },
]);

export default function MedicalBillingServicesPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <MedicalBillingHero />
        {/* <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        /> */}
        <MedicalBillingMadeForYou />
        <MedicalBillingAiCompliance />
        <MedicalBillingEndToEnd />
        <MedicalBillingKnowledgeBase />
        <MedicalBillingBenefits />
        <MedicalBillingSophisticatedSolutions />
        <MedicalBillingFeaturesRelyOn />
        <ServiceFaqs title="Medical Billing Services FAQs" items={faqItems} />
        <MedicalBillingCta />
      </div>
    </>
  );
}