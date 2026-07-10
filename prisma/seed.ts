import { PrismaClient } from "@prisma/client";
import { blogPosts } from "../src/data/blog-posts";

const prisma = new PrismaClient();

async function main() {
  console.log(`Seeding ${blogPosts.length} blog posts...`);

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        contentFormat: "markdown",
        date: post.date,
        updatedAt: post.updatedAt ?? null,
        readTime: post.readTime,
        category: post.category,
        tags: JSON.stringify(post.tags),
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        focusKeyword: "",
        coverImage: post.coverImage ?? null,
        featured: post.featured ?? false,
        status: "published",
      },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        contentFormat: "markdown",
        date: post.date,
        updatedAt: post.updatedAt ?? null,
        readTime: post.readTime,
        category: post.category,
        tags: JSON.stringify(post.tags),
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        coverImage: post.coverImage ?? null,
        featured: post.featured ?? false,
        status: "published",
      },
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
