import { notFound, redirect } from "next/navigation";
import AdminShell from "@/src/components/admin/admin-shell";
import BlogEditorForm from "@/src/components/admin/blog-editor-form";
import { getAdminSession, sessionIsSuperAdmin } from "@/src/lib/auth";
import {
  getAdminBlogPostById,
  getBlogCoverImageSrc,
} from "@/src/lib/blog-service";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: PageProps) {
  const session = await getAdminSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const { id } = await params;
  const post = await getAdminBlogPostById(id);
  if (!post) notFound();

  // Public blog uses a fallback cover pool when coverImage is empty —
  // show that same image in the featured image box.
  const resolvedCover = getBlogCoverImageSrc(post);

  return (
    <AdminShell
      username={session.username}
      permissions={session.permissions}
      isSuperAdmin={sessionIsSuperAdmin(session)}
    >      <div className="mb-6">
        <p className="text-sm text-slate-500">{post.title}</p>
      </div>
      <BlogEditorForm
        mode="edit"
        initial={{
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          contentFormat: post.contentFormat,
          category: post.category,
          tags: post.tags,
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          focusKeyword: post.focusKeyword,
          coverImage: post.coverImage || resolvedCover,
          coverImageAlt: post.coverImageAlt || post.title,
          featured: post.featured,
          status: post.status,
          date: post.date,
        }}
      />
    </AdminShell>
  );
}
