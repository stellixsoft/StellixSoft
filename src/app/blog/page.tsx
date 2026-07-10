import type { Metadata } from "next";
import BlogHero from "../../components/sections/blog/blog-hero";
import BlogGrid from "../../components/sections/blog/blog-grid";
import CTAPilot from "../../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { collectionPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
import { getPublishedBlogPosts } from "@/src/lib/blog-service";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog - Software Development Insights & Best Practices",
  description:
    "Expert insights on enterprise software development, IoT, legacy modernization, DevOps, AI integration, and more. Practical guides from the StellixSoft engineering team.",
  path: "/blog",
});

const collectionLd = collectionPageJsonLd({
  name: "StellixSoft Blog",
  description:
    "Expert insights on enterprise software development, IoT, legacy modernization, DevOps, AI integration, and more.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <>
      <JsonLd data={collectionLd} />
      <div>
        <BlogHero />
        <BlogGrid posts={posts} />
        <CTAPilot />
      </div>
    </>
  );
}
