import type { MetadataRoute } from "next";
import { blogPosts } from "@/src/data/blog-posts";
import {
  STATIC_CASE_STUDY_LAST_MOD,
  STATIC_HUB_LAST_MOD,
  STATIC_INDUSTRY_PAGE_LAST_MOD,
  STATIC_LEGAL_LAST_MOD,
  STATIC_SERVICE_PAGE_LAST_MOD,
  STATIC_SERVICES_HUB_LAST_MOD,
} from "@/src/lib/site-content-dates";
import { getSiteUrl } from "@/src/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/case-studies`, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/faqs`, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/industries`, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/pricing`, lastModified: STATIC_HUB_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: STATIC_LEGAL_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: `${SITE_URL}/services`, lastModified: STATIC_SERVICES_HUB_LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: STATIC_LEGAL_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceSlugs = [
    "automation-and-custom-apps",
    "blockchain-and-cryptography",
    "dedicated-development-teams",
    "devops-and-cloud-services",
    "e-commerce-development",
    "enterprise-development",
    "enterprise-mobile-app-development",
    "iot-software",
    "legacy-modernization",
    "maintenance-support",
    "practical-for-ai",
    "salesforce-development",
    "staff-augmentation",
  ] as const;

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: STATIC_SERVICE_PAGE_LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industrySlugs = [
    "enterprise-software-development",
    "healthcare-and-medtech",
    "iot-and-hardware",
    "logistics-and-supply-chain",
  ] as const;

  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: STATIC_INDUSTRY_PAGE_LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudySlugs = [
    "compliance-and-audit-management-system",
    "enterprise-portal-modernization",
    "logistics-management-platform",
    "multi-location-service-business-platform",
    "stock-options-and-equity-management-platform",
  ] as const;

  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified: STATIC_CASE_STUDY_LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...caseStudyPages,
    ...blogPages,
  ];
}
