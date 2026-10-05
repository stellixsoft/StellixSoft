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
  title: "Enterprise Software & Tech Architecture Insights | Engineering Blog",
  description:
    "In-depth engineering guides on zero-downtime database migration, enterprise headless commerce, IoT edge computing, cloud cost optimization, and legacy modernization.",
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
