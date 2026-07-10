import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { dbPostToView } from "@/src/lib/blog-service";
import { estimateReadTime, slugify } from "@/src/lib/slug";

async function assertAdmin() {
  const session = await getAdminSession();
  if (!session.isLoggedIn) {
    return null;
  }
  return session;
}

export async function GET() {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const posts = await prisma.blogPost.findMany({
    orderBy: { modifiedAt: "desc" },
  });
  return NextResponse.json(posts.map(dbPostToView));
}

export async function POST(req: NextRequest) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const title = String(body.title || "").trim();
    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    let slug = String(body.slug || "").trim() || slugify(title);
    slug = slugify(slug);
    if (!slug) {
      return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
    }

    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 },
      );
    }

    const content = String(body.content || "");
    const status = body.status === "published" ? "published" : "draft";
    const today = new Date().toISOString().slice(0, 10);
    const tags = Array.isArray(body.tags)
      ? body.tags.map(String)
      : String(body.tags || "")
          .split(",")
          .map((t: string) => t.trim())
          .filter(Boolean);

    const post = await prisma.blogPost.create({
      // coverImageAlt requires regenerated Prisma client after migrate
      data: {
        title,
        slug,
        excerpt: String(body.excerpt || "").trim(),
        content,
        contentFormat: "html",
        date: String(body.date || today),
        updatedAt: status === "published" ? today : null,
        readTime: String(body.readTime || estimateReadTime(content)),
        category: String(body.category || "Enterprise Development"),
        tags: JSON.stringify(tags),
        metaTitle: String(body.metaTitle || title).trim(),
        metaDescription: String(body.metaDescription || body.excerpt || "").trim(),
        focusKeyword: String(body.focusKeyword || "").trim(),
        coverImage: body.coverImage ? String(body.coverImage) : null,
        coverImageAlt: String(body.coverImageAlt || "").trim(),
        featured: Boolean(body.featured),
        status,
      } as never,
    });

    return NextResponse.json(dbPostToView(post), { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
