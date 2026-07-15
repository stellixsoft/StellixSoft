import type { Metadata } from "next";
import CaseStudyPageLayout from "@/src/components/sections/case-studies/shared/case-study-page-layout";
import { complianceCaseStudy } from "@/src/data/case-studies/compliance";
import { JsonLd } from "@/src/components/seo/json-ld";
import { articleCaseStudyJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/case-studies/compliance-and-audit-management-system" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Compliance & Audit Management System Case Study",
  description:
    "How we developed a SOX-compliant audit management system for a financial services company with automated evidence collection.",
  path: PATH,
});

const articleLd = articleCaseStudyJsonLd({
  headline: "Compliance & Audit Management System Case Study",
  description:
    "How we developed a SOX-compliant audit management system for a financial services company with automated evidence collection.",
  path: PATH,
  breadcrumbName: "Compliance & Audit System",
  datePublished: "2024-01-15",
});

export default function ComplianceAndAuditManagementSystemPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <CaseStudyPageLayout data={complianceCaseStudy} />
    </>
  );
}
