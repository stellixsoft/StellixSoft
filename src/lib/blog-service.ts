import type { BlogPost as PrismaBlogPost } from "@prisma/client";
import {
  blogPosts as staticBlogPosts,
  getBlogCoverImageSrc as staticCover,
  type BlogPost,
} from "@/src/data/blog-posts";
import { prisma } from "@/src/lib/prisma";

export type BlogPostView = BlogPost & {
  id?: string;
  focusKeyword?: string;
  status?: string;
  contentFormat?: "html" | "markdown";
  coverImageAlt?: string;
};

function parseTags(tags: string): string[] {
  try {
    const parsed = JSON.parse(tags);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

export function dbPostToView(post: PrismaBlogPost): BlogPostView {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    contentFormat: (post.contentFormat as "html" | "markdown") || "html",
    date: post.date,
    updatedAt: post.updatedAt ?? undefined,
    readTime: post.readTime,
    category: post.category,
    tags: parseTags(post.tags),
    metaTitle: post.metaTitle || post.title,
    metaDescription: post.metaDescription || post.excerpt,
    focusKeyword: post.focusKeyword || undefined,
    featured: post.featured,
    coverImage: post.coverImage ?? undefined,
    coverImageAlt:
      "coverImageAlt" in post && typeof post.coverImageAlt === "string"
        ? post.coverImageAlt
        : undefined,
    status: post.status,
  };
}

export async function getPublishedBlogPosts(): Promise<BlogPostView[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { status: "published" },
      orderBy: { date: "desc" },
    });
    if (posts.length > 0) {
      return posts.map(dbPostToView);
    }
  } catch {
    // DB unavailable — fall back to static posts
  }
  return staticBlogPosts.map((p) => ({
    ...p,
    contentFormat: "markdown" as const,
    status: "published",
  }));
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPostView | null> {
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    if (post && post.status === "published") {
      return dbPostToView(post);
    }
    // Allow draft preview only via admin — public gets published only
    if (post && post.status !== "published") {
      // still check static fallback for same slug if DB has draft
    }
  } catch {
    // fall through
  }

  const staticPost = staticBlogPosts.find((p) => p.slug === slug);
  if (staticPost) {
    return {
      ...staticPost,
      contentFormat: "markdown",
      status: "published",
    };
  }

  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    if (post?.status === "published") return dbPostToView(post);
  } catch {
    /* ignore */
  }

  return null;
}

export async function getAllAdminBlogPosts(): Promise<BlogPostView[]> {
  const posts = await prisma.blogPost.findMany({
    orderBy: { modifiedAt: "desc" },
  });
  return posts.map(dbPostToView);
}

export async function getAdminBlogPostById(
  id: string,
): Promise<BlogPostView | null> {
  const post = await prisma.blogPost.findUnique({ where: { id } });
  return post ? dbPostToView(post) : null;
}

export function getBlogCoverImageSrc(post: BlogPostView): string {
  return staticCover(post);
}
