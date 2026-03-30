import type { MetadataRoute } from "next";
import { blogPosts } from "@/src/data/blog-posts";

const SITE_URL = "https://stellixsoft.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "practical-for-ai",
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
    "salesforce-development",
    "staff-augmentation",
  ].map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = [
    "enterprise-software-development",
    "healthcare-and-medtech",
    "iot-and-hardware",
    "logistics-and-supply-chain",
  ].map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = [
    "compliance-and-audit-management-system",
    "enterprise-portal-modernization",
    "logistics-management-platform",
    "multi-location-service-business-platform",
    "stock-options-and-equity-management-platform",
  ].map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
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
