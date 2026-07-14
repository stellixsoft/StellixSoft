export const ADMIN_PERMISSIONS = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Overview and stats",
    href: "/admin",
  },
  {
    id: "blogs",
    label: "Blogs",
    description: "Create and edit blog posts",
    href: "/admin/blogs",
  },
  {
    id: "media",
    label: "Media",
    description: "Media library",
    href: "/admin/media",
  },
  {
    id: "pages",
    label: "Pages",
    description: "Site pages (coming soon)",
    href: "/admin/pages",
  },
  {
    id: "services",
    label: "Services",
    description: "Services content (coming soon)",
    href: "/admin/services",
  },
  {
    id: "users",
    label: "Users",
    description: "Invite and manage admin users",
    href: "/admin/users",
  },
] as const;

export type AdminPermissionId = (typeof ADMIN_PERMISSIONS)[number]["id"];

export const ALL_ADMIN_PERMISSION_IDS: AdminPermissionId[] =
  ADMIN_PERMISSIONS.map((p) => p.id);

export function isAdminPermissionId(value: string): value is AdminPermissionId {
  return ALL_ADMIN_PERMISSION_IDS.includes(value as AdminPermissionId);
}

export function normalizePermissions(input: unknown): AdminPermissionId[] {
  if (!Array.isArray(input)) return [];
  const unique = new Set<AdminPermissionId>();
  for (const item of input) {
    const id = String(item || "").trim();
    if (isAdminPermissionId(id)) unique.add(id);
  }
  return Array.from(unique);
}

export function permissionForPath(pathname: string): AdminPermissionId | null {
  if (pathname === "/admin" || pathname === "/admin/") return "dashboard";
  if (pathname.startsWith("/admin/blogs")) return "blogs";
  if (pathname.startsWith("/admin/media")) return "media";
  if (pathname.startsWith("/admin/pages")) return "pages";
  if (pathname.startsWith("/admin/services")) return "services";
  if (pathname.startsWith("/admin/users")) return "users";
  return null;
}

export function hasPermission(
  permissions: string[] | undefined,
  required: AdminPermissionId,
  isSuperAdmin?: boolean,
): boolean {
  if (isSuperAdmin) return true;
  return Boolean(permissions?.includes(required));
}
