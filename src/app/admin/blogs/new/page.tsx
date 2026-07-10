import { redirect } from "next/navigation";
import AdminShell from "@/src/components/admin/admin-shell";
import BlogEditorForm from "@/src/components/admin/blog-editor-form";
import { getAdminSession } from "@/src/lib/auth";

export const dynamic = "force-dynamic";

export default async function NewBlogPage() {
  const session = await getAdminSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  return (
    <AdminShell username={session.username}>
      <div className="mb-6">
        <p className="text-sm text-slate-500">
          Add title, content, SEO fields, and publish
        </p>
      </div>
      <BlogEditorForm mode="create" />
    </AdminShell>
  );
}
