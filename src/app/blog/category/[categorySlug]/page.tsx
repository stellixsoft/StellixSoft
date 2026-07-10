import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogHero from "@/src/components/sections/blog/blog-hero";
import BlogGrid from "@/src/components/sections/blog/blog-grid";
import CTAPilot from "@/src/components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { collectionPageJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
import { blogCategories } from "@/src/data/blog-posts";
import {
  getBlogCategoryFromSlug,
  getBlogCategorySlug,
} from "@/src/lib/blog-category-url";
import { getPublishedBlogPosts } from "@/src/lib/blog-service";

export const dynamic = "force-dynamic";

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return blogCategories
    .filter((cat) => cat !== "All")
    .map((cat) => ({ categorySlug: getBlogCategorySlug(cat) }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getBlogCategoryFromSlug(categorySlug);
  if (!category) return {};

  return buildPageMetadata({
    title: `${category} Articles - StellixSoft Blog`,
    description: `Explore ${category} insights, best practices, and practical guides from the StellixSoft engineering team.`,
    path: `/blog/category/${categorySlug}`,
  });
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getBlogCategoryFromSlug(categorySlug);
  if (!category) notFound();

  const posts = await getPublishedBlogPosts();

  const collectionLd = collectionPageJsonLd({
    name: `StellixSoft Blog - ${category}`,
    description: `Insights and practical guides about ${category}.`,
    path: `/blog/category/${categorySlug}`,
  });

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
