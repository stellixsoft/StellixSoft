import type { Metadata } from "next";
import ComplianceAndAuditManagementSystemHero from "../../../components/sections/case-studies/compliance-and-audit-management-system/hero";
import ComplianceAndAuditManagementSystemProjectOverview from "../../../components/sections/case-studies/compliance-and-audit-management-system/project-overview";
import ComplianceAndAuditManagementSystemClient from "../../../components/sections/case-studies/compliance-and-audit-management-system/client";
import ComplianceAndAuditManagementSystemChallenge from "../../../components/sections/case-studies/compliance-and-audit-management-system/challenge";
import ComplianceAndAuditManagementSystemOurSolution from "../../../components/sections/case-studies/compliance-and-audit-management-system/our-solution";
import ComplianceAndAuditManagementSystemPlatformArchitecture from "../../../components/sections/case-studies/compliance-and-audit-management-system/platform-architecture";
import ComplianceAndAuditManagementSystemAuditWorkflowDesign from "../../../components/sections/case-studies/compliance-and-audit-management-system/audit-workflow-design";
import ComplianceAndAuditManagementSystemKeyFeatures from "../../../components/sections/case-studies/compliance-and-audit-management-system/key-features";
import ComplianceAndAuditManagementSystemResults from "../../../components/sections/case-studies/compliance-and-audit-management-system/results";
import ComplianceAndAuditManagementSystemTestimonial from "../../../components/sections/case-studies/compliance-and-audit-management-system/testimonial";
import CTAPilot from "../../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Compliance & Audit Management System Case Study",
  description:
    "How we developed a SOX-compliant audit management system for a financial services company with automated evidence collection.",
  alternates: {
    canonical:
      "https://stellixsoft.com/case-studies/compliance-and-audit-management-system",
  },
};

export default function ComplianceAndAuditManagementSystemPage() {
  return (
    <div>
      <ComplianceAndAuditManagementSystemHero />
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
      <ComplianceAndAuditManagementSystemProjectOverview />
      <ComplianceAndAuditManagementSystemClient />
      <ComplianceAndAuditManagementSystemChallenge />
      <ComplianceAndAuditManagementSystemOurSolution />
      <ComplianceAndAuditManagementSystemPlatformArchitecture />
      <ComplianceAndAuditManagementSystemAuditWorkflowDesign />
      <ComplianceAndAuditManagementSystemKeyFeatures />
      <ComplianceAndAuditManagementSystemResults />
      <ComplianceAndAuditManagementSystemTestimonial />
      <CTAPilot />
    </div>
  );
}