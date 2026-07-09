import Link from "next/link";
import AdminSignOut from "@/src/components/admin/AdminSignOut";
import { getAdminSession } from "@/src/lib/admin-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  return (
    <div className="min-h-screen bg-[var(--color-lightGray)]">
      {session && (
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link href="/admin" className="text-sm font-semibold text-[var(--color-deepSpace)]">
                StellixSoft Admin
              </Link>
              <nav className="flex gap-4 text-sm">
                <Link href="/admin" className="text-[var(--color-neutralGray)] hover:text-[var(--color-deepSpace)]">
                  Dashboard
                </Link>
                <Link href="/admin/event-types" className="text-[var(--color-neutralGray)] hover:text-[var(--color-deepSpace)]">
                  Event Types
                </Link>
                <Link href="/admin/bookings" className="text-[var(--color-neutralGray)] hover:text-[var(--color-deepSpace)]">
                  Bookings
                </Link>
              </nav>
            </div>
            <AdminSignOut />
          </div>
        </header>
      )}
      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 py-8">{children}</main>
    </div>
  );
}
