import type { Metadata } from "next";
import DedicatedDevelopmentTeamsHero from "@/src/components/sections/services/dedicated-development-teams/hero";
import WhyHiringIsBroken from "@/src/components/sections/services/dedicated-development-teams/why-hiring-broken";
import ReadyInTwoWeeks from "@/src/components/sections/services/dedicated-development-teams/ready-in-two-weeks";
import WhatsIncludedWithDedicatedTeam from "@/src/components/sections/services/dedicated-development-teams/whats-included";
import CompareYourOptions from "@/src/components/sections/services/dedicated-development-teams/compare-options";
import DedicatedTeamInAction from "@/src/components/sections/services/dedicated-development-teams/team-in-action";
import TransparentPricing from "@/src/components/sections/services/dedicated-development-teams/transparent-pricing";
import CalculateYourSavings from "@/src/components/sections/services/dedicated-development-teams/calculate-savings";
import BuildYourPerfectTeam from "@/src/components/sections/services/dedicated-development-teams/build-perfect-team";
import DedicatedDevelopmentTeamsFAQs from "@/src/components/sections/services/dedicated-development-teams/faqs";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Dedicated Development Teams - Hire Full-Time Remote Engineers",
  description: "Full-time dedicated engineering teams that integrate with your workflow and culture. US-timezone aligned, long-term partnerships.",
  alternates: { canonical: "https://stellixsoft.com/services/dedicated-development-teams" },
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
        text: "Your team joins your channels directly—Slack, Teams, Jira, GitHub. You talk to developers and leads every day via standups, async updates, and shared tooling. No account-manager bottlenecks.",
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
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dedicated Development Teams",
  description: "Full-time dedicated engineering teams that integrate with your workflow and culture. US-timezone aligned, long-term partnerships.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/dedicated-development-teams",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Dedicated Development Teams", item: "https://stellixsoft.com/services/dedicated-development-teams" },
  ],
};

export default function DedicatedDevelopmentTeamsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div>
      <DedicatedDevelopmentTeamsHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
      <WhyHiringIsBroken />
      <ReadyInTwoWeeks />
      <WhatsIncludedWithDedicatedTeam />
      <CompareYourOptions />
      <DedicatedTeamInAction />
      <TransparentPricing />
      <CalculateYourSavings />
      <BuildYourPerfectTeam />
      <DedicatedDevelopmentTeamsFAQs />
      <CTAPilot />
    </div>
    </>
  );
}