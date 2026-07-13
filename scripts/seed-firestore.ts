import { readFileSync, existsSync } from "fs";
import path from "path";
import { blogPosts } from "../src/data/blog-posts";
import { upsertBlogPostBySlug } from "../src/lib/blog-repo";

function loadEnvFile() {
  const envPath = path.join(process.cwd(), ".env");
  if (!existsSync(envPath)) return;
  const text = readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

async function main() {
  loadEnvFile();
  console.log(`Seeding ${blogPosts.length} blog posts into Firestore...`);

  for (const post of blogPosts) {
    await upsertBlogPostBySlug({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      contentFormat: "markdown",
      date: post.date,
      updatedAt: post.updatedAt ?? null,
      readTime: post.readTime,
      category: post.category,
      tags: post.tags,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      focusKeyword: "",
      coverImage: post.coverImage ?? null,
      coverImageAlt: post.coverImageAlt || "",
      featured: post.featured ?? false,
      status: "published",
    });
    console.log(`  ✓ ${post.slug}`);
  }

  console.log("Seed complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
