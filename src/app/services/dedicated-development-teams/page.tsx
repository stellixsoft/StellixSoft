import type { Metadata } from "next";
import DedicatedDevelopmentTeamsHero from "@/src/components/sections/services/dedicated-development-teams/hero";
import DedicatedDevelopmentTeamModelIntro from "@/src/components/sections/services/dedicated-development-teams/dedicated-development-team-model-intro";
import WhyHiringIsBroken from "@/src/components/sections/services/dedicated-development-teams/why-hiring-broken";
import HireDedicatedVsInHouse from "@/src/components/sections/services/dedicated-development-teams/hire-dedicated-vs-in-house";
import ReadyInTwoWeeks from "@/src/components/sections/services/dedicated-development-teams/ready-in-two-weeks";
import WhatsIncludedWithDedicatedTeam from "@/src/components/sections/services/dedicated-development-teams/whats-included";
import WhatYouGetDedicatedTeam from "@/src/components/sections/services/dedicated-development-teams/what-you-get-dedicated-team";
import CompareYourOptions from "@/src/components/sections/services/dedicated-development-teams/compare-options";
import DedicatedTeamVsOtherHiringModels from "@/src/components/sections/services/dedicated-development-teams/dedicated-team-vs-other-hiring-models";
import ScalableDedicatedTeam from "@/src/components/sections/services/dedicated-development-teams/scalable-dedicated-team";
import DedicatedTeamInAction from "@/src/components/sections/services/dedicated-development-teams/team-in-action";
import TransparentPricing from "@/src/components/sections/services/dedicated-development-teams/transparent-pricing";
import CalculateYourSavings from "@/src/components/sections/services/dedicated-development-teams/calculate-savings";
import BuildYourPerfectTeam from "@/src/components/sections/services/dedicated-development-teams/build-perfect-team";
import HireDedicatedWithConfidence from "@/src/components/sections/services/dedicated-development-teams/hire-dedicated-with-confidence";
import DedicatedDevelopmentTeamsFAQs from "@/src/components/sections/services/dedicated-development-teams/faqs";
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

const PATH = "/services/dedicated-development-teams" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Dedicated Development Teams | Hire Expert Software Developers",
  description:
    "Scale your business with dedicated development teams from StellixSoft. Hire experienced software developers for web, mobile, cloud, AI, and enterprise projects.",
  path: PATH,
  keywords: [
    "Dedicated development team",
    "Hire dedicated development team",
    "Dedicated development team services",
    "remote development team",
    "full-time remote engineers",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "How quickly can we start?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Most dedicated teams are operational within 2 weeks. We align on your needs, you interview and approve developers, and we handle onboarding so they join your standups and workflows quickly.",
    },
  },
  {
    "@type": "Question",
    name: "Can we interview the developers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. You always interview and approve every developer before they join your team. We can run technical interviews with your process, or propose our own structure if you prefer.",
    },
  },
  {
    "@type": "Question",
    name: "What if a developer isn't the right fit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If someone isn't working out, we replace them at no additional cost. We handle the transition while keeping your velocity and knowledge transfer protected.",
    },
  },
  {
    "@type": "Question",
    name: "How does communication work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Your team joins your channels directly - Slack, Teams, Jira, GitHub. You talk to developers and leads every day via standups, async updates, and shared tooling. No account-manager bottlenecks.",
    },
  },
  {
    "@type": "Question",
    name: "Can we scale up or down?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. You can add or reduce capacity with typically 2 weeks notice. Many clients start small and then scale once they see fit and results.",
    },
  },
];

const serviceLd = serviceJsonLd({
  name: "Dedicated Development Teams",
  description:
    "Full-time dedicated engineering teams that integrate with your workflow and culture. US-timezone aligned, long-term partnerships.",
  path: PATH,
  serviceType: "Dedicated software development teams",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Dedicated Development Teams", path: PATH },
]);

export default function DedicatedDevelopmentTeamsPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <DedicatedDevelopmentTeamsHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <DedicatedDevelopmentTeamModelIntro />
        <WhyHiringIsBroken />
        <HireDedicatedVsInHouse />
        <ReadyInTwoWeeks />
        <WhatsIncludedWithDedicatedTeam />
        <WhatYouGetDedicatedTeam />
        <CompareYourOptions />
        <DedicatedTeamVsOtherHiringModels />
        <ScalableDedicatedTeam />
        <DedicatedTeamInAction />
        <TransparentPricing />
        <CalculateYourSavings />
        <BuildYourPerfectTeam />
        <HireDedicatedWithConfidence />
        <DedicatedDevelopmentTeamsFAQs />
        <ServiceInternalLinks slug="dedicated-development-teams" />
        <CTAPilot />
      </div>
    </>
  );
}
