import type { Metadata } from "next";
import StaffAugmentationHero from "@/src/components/sections/services/staff-augmentation/hero";
import HowStaffAugmentationWorks from "@/src/components/sections/services/staff-augmentation/how-it-works";
import WhenStaffAugmentationMakesSense from "@/src/components/sections/services/staff-augmentation/when-it-makes-sense";
import StaffAugmentationVsDedicatedTeams from "@/src/components/sections/services/staff-augmentation/vs-dedicated-teams";
import SkillsAvailableForAugmentation from "@/src/components/sections/services/staff-augmentation/skills-available";
import WhatYouGetWithOurDevelopers from "@/src/components/sections/services/staff-augmentation/what-you-get";
import StaffAugmentationRates from "@/src/components/sections/services/staff-augmentation/rates";
import FromRequestToProductiveDeveloper from "@/src/components/sections/services/staff-augmentation/from-request-to-productive";
import StaffAugmentationFAQs from "@/src/components/sections/services/staff-augmentation/faqs";
import RiskFreeTrial from "@/src/components/sections/services/staff-augmentation/risk-free-trial";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Staff Augmentation Services - Hire Senior Software Engineers",
  description: "Scale your team with pre-vetted senior engineers who integrate seamlessly into your existing development processes. US-timezone aligned.",
  alternates: { canonical: "https://stellixsoft.com/services/staff-augmentation" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
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
        text: "Developers join your Slack, Teams, Jira, GitHub—your tools, your workflows. You talk to them daily via standups, async updates, and direct messages.",
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
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Staff Augmentation Services",
  description: "Scale your team with pre-vetted senior engineers who integrate seamlessly into your existing development processes.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/staff-augmentation",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Staff Augmentation", item: "https://stellixsoft.com/services/staff-augmentation" },
  ],
};

export default function StaffAugmentationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div>
      <StaffAugmentationHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
      <HowStaffAugmentationWorks />
      <WhenStaffAugmentationMakesSense />
      <StaffAugmentationVsDedicatedTeams />
      <SkillsAvailableForAugmentation />
      <WhatYouGetWithOurDevelopers />
      <StaffAugmentationRates />
      <FromRequestToProductiveDeveloper />
      <StaffAugmentationFAQs />
      <RiskFreeTrial />
      <CTAPilot />
    </div>
    </>
  );
}