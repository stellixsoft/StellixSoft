import Link from "next/link";
import { prisma } from "@/src/lib/prisma";

export default async function AdminEventTypesPage() {
  const eventTypes = await prisma.eventType.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { bookings: true } } },
  });

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-light text-[var(--color-deepSpace)]">Event types</h1>
        <Link
          href="/admin/event-types/new"
          className="rounded-xl px-5 py-2.5 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        >
          Create event type
        </Link>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-[var(--color-lightGray)] text-left text-[var(--color-neutralGray)]">
            <tr>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Slug</th>
              <th className="px-5 py-3 font-medium">Duration</th>
              <th className="px-5 py-3 font-medium">Bookings</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventTypes.map((et) => (
              <tr key={et.id} className="border-t border-gray-100">
                <td className="px-5 py-3">{et.title}</td>
                <td className="px-5 py-3">{et.slug}</td>
                <td className="px-5 py-3">{et.durationMinutes} min</td>
                <td className="px-5 py-3">{et._count.bookings}</td>
                <td className="px-5 py-3">{et.isActive ? "Active" : "Inactive"}</td>
                <td className="px-5 py-3">
                  <Link
                    href={`/admin/event-types/${et.id}/edit`}
                    className="text-[var(--color-electricBlue)] hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
