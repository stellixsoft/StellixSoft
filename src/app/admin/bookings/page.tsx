import BookingsTable from "@/src/components/admin/BookingsTable";
import { prisma } from "@/src/lib/prisma";

export default async function AdminBookingsPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: { startTime: "desc" },
    include: { eventType: { select: { title: true, slug: true } } },
  });

  const rows = bookings.map((b) => ({
    ...b,
    startTime: b.startTime.toISOString(),
    endTime: b.endTime.toISOString(),
  }));

  return (
    <div>
      <h1 className="text-3xl font-light text-[var(--color-deepSpace)] mb-6">
        Bookings
      </h1>
      <BookingsTable bookings={rows} />
    </div>
  );
}
