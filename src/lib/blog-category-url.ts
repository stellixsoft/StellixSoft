import type { BlogCategory } from "@/src/data/blog-posts";

type NamedCategory = Exclude<BlogCategory, "All">;

const categorySlugMap: Record<NamedCategory, string> = {
  "Enterprise Development": "enterprise-development",
  "IoT & Hardware": "iot-hardware",
  "Legacy Modernization": "legacy-modernization",
  "DevOps & Cloud": "cloud-services",
  "AI & Automation": "ai-automation",
  "Healthcare Tech": "healthcare-tech",
  "Logistics Tech": "logistics-tech",
  "E-Commerce": "e-commerce",
  "Team Building": "team-building",
  "Software Architecture": "software-architecture",
};

export function getBlogCategorySlug(category: NamedCategory): string {
  return categorySlugMap[category];
}

export function getBlogCategoryFromSlug(slug: string): NamedCategory | null {
  const normalized = slug.trim().toLowerCase();
  for (const [category, value] of Object.entries(categorySlugMap)) {
    if (value === normalized) {
      return category as NamedCategory;
    }
  }
  return null;
}

export function getBlogCategoryPath(category: BlogCategory): string {
  if (category === "All") return "/blog";
  return `/blog/category/${getBlogCategorySlug(category)}`;
}
