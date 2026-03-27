import type { Metadata } from "next";
import BlogHero from "../../components/sections/blog/blog-hero";
import BlogGrid from "../../components/sections/blog/blog-grid";
import CTAPilot from "../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "Blog - Software Development Insights & Best Practices",
  description:
    "Expert insights on enterprise software development, IoT, legacy modernization, DevOps, AI integration, and more. Practical guides from the StellixSoft engineering team.",
  alternates: { canonical: "https://stellixsoft.com/blog" },
  openGraph: {
    title: "StellixSoft Blog - Software Development Insights",
    description:
      "Expert insights on enterprise software development, IoT, legacy modernization, DevOps, AI integration, and more.",
    url: "https://stellixsoft.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogGrid />
      <CTAPilot />
    </div>
  );
}
