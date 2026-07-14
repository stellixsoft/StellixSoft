import { redirect } from "next/navigation";
import AdminShell from "@/src/components/admin/admin-shell";
import MediaLibrary from "@/src/components/admin/media-library";
import { getAdminSession, sessionIsSuperAdmin } from "@/src/lib/auth";
import { listMediaLibrary } from "@/src/lib/media-library";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  const session = await getAdminSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const items = await listMediaLibrary();

  return (
    <AdminShell
      username={session.username}
      permissions={session.permissions}
      isSuperAdmin={sessionIsSuperAdmin(session)}
    >      <MediaLibrary initialItems={items} />
    </AdminShell>
  );
}
