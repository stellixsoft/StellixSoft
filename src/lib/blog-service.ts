import {
  blogPosts as staticBlogPosts,
  getBlogCoverImageSrc as staticCover,
  type BlogPost,
} from "@/src/data/blog-posts";
import {
  getBlogPostById,
  getBlogPostBySlug as getRepoPostBySlug,
  listBlogPosts,
  type BlogPostRecord,
} from "@/src/lib/blog-repo";

export type BlogPostView = BlogPost & {
  id?: string;
  focusKeyword?: string;
  status?: string;
  contentFormat?: "html" | "markdown";
  coverImageAlt?: string;
};

export function dbPostToView(post: BlogPostRecord): BlogPostView {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    contentFormat: post.contentFormat || "html",
    date: post.date,
    updatedAt: post.updatedAt ?? undefined,
    readTime: post.readTime,
    category: post.category,
    tags: post.tags,
    metaTitle: post.metaTitle || post.title,
    metaDescription: post.metaDescription || post.excerpt,
    focusKeyword: post.focusKeyword || undefined,
    featured: post.featured,
    coverImage: post.coverImage ?? undefined,
    coverImageAlt: post.coverImageAlt || undefined,
    status: post.status,
  };
}

function staticToView(post: BlogPost): BlogPostView {
  return {
    ...post,
    contentFormat: "markdown",
    status: "published",
  };
}

export async function getPublishedBlogPosts(): Promise<BlogPostView[]> {
  try {
    const posts = await listBlogPosts({
      status: "published",
      orderBy: "date",
    });
    if (posts.length > 0) {
      return posts.map(dbPostToView);
    }
  } catch {
    // Firestore unavailable — fall back to static posts
  }
  return staticBlogPosts.map(staticToView);
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPostView | null> {
  try {
    const post = await getRepoPostBySlug(slug);
    if (post?.status === "published") {
      return dbPostToView(post);
    }
  } catch {
    // fall through
  }

  const staticPost = staticBlogPosts.find((p) => p.slug === slug);
  if (staticPost) {
    return staticToView(staticPost);
  }

  return null;
}

export async function getAllAdminBlogPosts(): Promise<BlogPostView[]> {
  const posts = await listBlogPosts({ orderBy: "modifiedAt" });
  return posts.map(dbPostToView);
}

export async function getAdminBlogPostById(
  id: string,
): Promise<BlogPostView | null> {
  const post = await getBlogPostById(id);
  return post ? dbPostToView(post) : null;
}

export function getBlogCoverImageSrc(post: BlogPostView): string {
  return staticCover(post);
}
