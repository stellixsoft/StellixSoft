import type { Metadata } from "next";
import EnterpriseSoftwareDevelopmentHero from "../../../components/sections/industries/enterprise-software-development/hero";
import EnterpriseTrackRecord from "../../../components/sections/industries/enterprise-software-development/enterprise-track-record";
import EnterpriseSoftwareChallenges from "../../../components/sections/industries/enterprise-software-development/software-challenges";
import EnterpriseSoftwareSolutions from "../../../components/sections/industries/enterprise-software-development/software-solutions";
import EnterpriseProjectExamples from "../../../components/sections/industries/enterprise-software-development/project-examples";
import WhyEnterpriseTeamsChooseStellixsoft from "../../../components/sections/industries/enterprise-software-development/why-enterprise-choose";
import HowWeWorkWithEnterpriseClients from "../../../components/sections/industries/enterprise-software-development/engagement-models";
import EnterpriseSecurityCompliance from "../../../components/sections/industries/enterprise-software-development/security-compliance";
import CTAPilot from "../../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Enterprise Software Development Services & Solutions",
  description:
    "Custom enterprise software platforms for complex business processes. Multi-tenant SaaS, compliance systems, workflow automation, and digital transformation.",
  alternates: {
    canonical:
      "https://stellixsoft.com/industries/enterprise-software-development",
  },
};

export default function EnterpriseSoftwareDevelopmentPage() {
  return (
    <div>
      <EnterpriseSoftwareDevelopmentHero />
      <EnterpriseTrackRecord />
      <EnterpriseSoftwareChallenges />
      <EnterpriseSoftwareSolutions />
      <EnterpriseProjectExamples />
      <WhyEnterpriseTeamsChooseStellixsoft />
      <HowWeWorkWithEnterpriseClients />
      <EnterpriseSecurityCompliance />
      <CTAPilot />
    </div>
  );
}