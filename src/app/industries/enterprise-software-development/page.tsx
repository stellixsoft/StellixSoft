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
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/industries/enterprise-software-development" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Enterprise Software Development Services & Solutions",
  description:
    "Custom enterprise software platforms for complex business processes. Multi-tenant SaaS, compliance systems, workflow automation, and digital transformation.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "Enterprise Software Development",
  description:
    "Custom enterprise software platforms for complex business processes. Multi-tenant SaaS, compliance systems, workflow automation, and digital transformation.",
  path: PATH,
  serviceType: "Enterprise software platforms and digital transformation",
  category: "Industry Solutions",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Enterprise Software", path: PATH },
]);

export default function EnterpriseSoftwareDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
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
    </>
  );
}
