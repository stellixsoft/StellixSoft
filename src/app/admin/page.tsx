import Link from "next/link";
import { prisma } from "@/src/lib/prisma";

export default async function AdminDashboardPage() {
  const [eventTypeCount, bookingCount, upcomingCount, cancelledCount] =
    await Promise.all([
      prisma.eventType.count(),
      prisma.booking.count(),
      prisma.booking.count({
        where: { status: "confirmed", startTime: { gte: new Date() } },
      }),
      prisma.booking.count({ where: { status: "cancelled" } }),
    ]);

  const recentBookings = await prisma.booking.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { eventType: { select: { title: true } } },
  });

  return (
    <div>
      <h1 className="text-3xl font-light text-[var(--color-deepSpace)] mb-6">
        Scheduling Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Event types", value: eventTypeCount },
          { label: "Total bookings", value: bookingCount },
          { label: "Upcoming", value: upcomingCount },
          { label: "Cancelled", value: cancelledCount },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--color-neutralGray)]">
              {stat.label}
            </p>
            <p className="text-3xl font-light text-[var(--color-deepSpace)] mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link
          href="/admin/event-types/new"
          className="rounded-xl px-5 py-2.5 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        >
          Create event type
        </Link>
        <Link
          href="/admin/bookings"
          className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-deepSpace)]"
        >
          View all bookings
        </Link>
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-[var(--color-deepSpace)]">
            Recent bookings
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--color-lightGray)] text-left text-[var(--color-neutralGray)]">
              <tr>
                <th className="px-5 py-3 font-medium">Guest</th>
                <th className="px-5 py-3 font-medium">Event</th>
                <th className="px-5 py-3 font-medium">Start</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b) => (
                <tr key={b.id} className="border-t border-gray-100">
                  <td className="px-5 py-3">{b.name}</td>
                  <td className="px-5 py-3">{b.eventType.title}</td>
                  <td className="px-5 py-3">{b.startTime.toLocaleString()}</td>
                  <td className="px-5 py-3 capitalize">{b.status}</td>
                </tr>
              ))}
              {recentBookings.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-[var(--color-neutralGray)]">
                    No bookings yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
