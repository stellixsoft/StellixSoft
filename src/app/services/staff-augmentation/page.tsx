import type { Metadata } from "next";
import StaffAugmentationHero from "@/src/components/sections/services/staff-augmentation/hero";
import HiringVsStaffAugmentation from "@/src/components/sections/services/staff-augmentation/hiring-vs-staff-augmentation";
import HowStaffAugmentationWorks from "@/src/components/sections/services/staff-augmentation/how-it-works";
import WhatMakesStaffEffective from "@/src/components/sections/services/staff-augmentation/what-makes-staff-effective";
import WhenStaffAugmentationMakesSense from "@/src/components/sections/services/staff-augmentation/when-it-makes-sense";
import WhenToChooseStaffVsDedicated from "@/src/components/sections/services/staff-augmentation/when-to-choose-staff-vs-dedicated";
import StaffAugmentationVsDedicatedTeams from "@/src/components/sections/services/staff-augmentation/vs-dedicated-teams";
import SkillsAvailableForAugmentation from "@/src/components/sections/services/staff-augmentation/skills-available";
import FlexibleStaffAcrossTech from "@/src/components/sections/services/staff-augmentation/flexible-staff-across-tech";
import WhatYouGetWithOurDevelopers from "@/src/components/sections/services/staff-augmentation/what-you-get";
import BeyondTalentMindset from "@/src/components/sections/services/staff-augmentation/beyond-talent-mindset";
import StaffAugmentationRates from "@/src/components/sections/services/staff-augmentation/rates";
import CostEfficiencyStaffAugmentation from "@/src/components/sections/services/staff-augmentation/cost-efficiency-staff-augmentation";
import FromRequestToProductiveDeveloper from "@/src/components/sections/services/staff-augmentation/from-request-to-productive";
import WhyChooseStaffAugmentation from "@/src/components/sections/services/staff-augmentation/why-choose-staff-augmentation";
import StaffAugmentationFAQs from "@/src/components/sections/services/staff-augmentation/faqs";
import RiskFreeTrial from "@/src/components/sections/services/staff-augmentation/risk-free-trial";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
// import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/staff-augmentation" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Add Top Developers To Your Team",
  description:
    "IT staff augmentation services to scale your team with pre-vetted senior engineers. Dedicated developers who integrate with your processes for US-timezone aligned delivery.",
  path: PATH,
  keywords: [
    "staff augmentation services",
    "IT staff augmentation services",
    "dedicated development team",
    "hire software engineers",
    "software developer augmentation",
    "remote developer hiring",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "How quickly can we start?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Most staff augmentation engagements can start within 1–2 weeks. We confirm your requirements, match developers, and schedule interviews so they can join your standups fast.",
    },
  },
  {
    "@type": "Question",
    name: "Can we interview the developers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. You always interview and approve every developer before they join your team. Use your own interview process or let us suggest one.",
    },
  },
  {
    "@type": "Question",
    name: "What if a developer isn't the right fit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If someone isn't working out, we replace them at no additional cost. We handle handover and knowledge transfer so your progress isn't blocked.",
    },
  },
  {
    "@type": "Question",
    name: "How does communication work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Developers join your Slack, Teams, Jira, GitHub - your tools, your workflows. You talk to them daily via standups, async updates, and direct messages.",
    },
  },
  {
    "@type": "Question",
    name: "Can we scale up or down?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. You can add or reduce capacity with short notice (typically 2 weeks). Many clients start with one developer and scale as needs grow.",
    },
  },
];

const serviceLd = serviceJsonLd({
  name: "Staff Augmentation Services",
  description:
    "Scale your team with pre-vetted senior engineers who integrate seamlessly into your existing development processes.",
  path: PATH,
  serviceType: "Staff augmentation and embedded engineering",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Staff Augmentation", path: PATH },
]);

export default function StaffAugmentationPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <StaffAugmentationHero />
        <HiringVsStaffAugmentation />
        <HowStaffAugmentationWorks />
        <WhatMakesStaffEffective />
        <WhenStaffAugmentationMakesSense />
        <WhenToChooseStaffVsDedicated />
        <StaffAugmentationVsDedicatedTeams />
        <SkillsAvailableForAugmentation />
        <FlexibleStaffAcrossTech />
        <WhatYouGetWithOurDevelopers />
        <BeyondTalentMindset />
        <StaffAugmentationRates />
        <CostEfficiencyStaffAugmentation />
        <FromRequestToProductiveDeveloper />
        <WhyChooseStaffAugmentation />
        <StaffAugmentationFAQs />
        <RiskFreeTrial />
        {/* <ServiceInternalLinks slug="staff-augmentation" /> */}
        <CTAPilot />
      </div>
    </>
  );
}
