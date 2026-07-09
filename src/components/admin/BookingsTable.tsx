"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type BookingRow = {
  id: string;
  name: string;
  email: string;
  notes: string | null;
  startTime: string;
  endTime: string;
  status: string;
  googleMeetLink: string | null;
  eventType: { title: string; slug: string };
};

type Props = {
  bookings: BookingRow[];
};

export default function BookingsTable({ bookings: initial }: Props) {
  const router = useRouter();
  const [bookings, setBookings] = useState(initial);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function cancelBooking(id: string) {
    setLoadingId(id);
    const res = await fetch(`/api/admin/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "cancel" }),
    });
    if (res.ok) {
      setBookings((rows) =>
        rows.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b)),
      );
      router.refresh();
    }
    setLoadingId(null);
  }

  async function deleteBooking(id: string) {
    if (!confirm("Delete this booking permanently?")) return;
    setLoadingId(id);
    const res = await fetch(`/api/admin/bookings/${id}`, { method: "DELETE" });
    if (res.ok) {
      setBookings((rows) => rows.filter((b) => b.id !== id));
      router.refresh();
    }
    setLoadingId(null);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-[var(--color-lightGray)] text-left text-[var(--color-neutralGray)]">
            <tr>
              <th className="px-5 py-3 font-medium">Guest</th>
              <th className="px-5 py-3 font-medium">Event</th>
              <th className="px-5 py-3 font-medium">Start</th>
              <th className="px-5 py-3 font-medium">Notes</th>
              <th className="px-5 py-3 font-medium">Meet</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-gray-100 align-top">
                <td className="px-5 py-3">
                  <div className="font-medium text-[var(--color-deepSpace)]">{b.name}</div>
                  <div className="text-[var(--color-neutralGray)]">{b.email}</div>
                </td>
                <td className="px-5 py-3">{b.eventType.title}</td>
                <td className="px-5 py-3 whitespace-nowrap">
                  {new Date(b.startTime).toLocaleString()}
                </td>
                <td className="px-5 py-3 max-w-xs">{b.notes ?? "—"}</td>
                <td className="px-5 py-3">
                  {b.googleMeetLink ? (
                    <a
                      href={b.googleMeetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-electricBlue)] hover:underline"
                    >
                      Meet link
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="px-5 py-3 capitalize">{b.status}</td>
                <td className="px-5 py-3 space-x-2 whitespace-nowrap">
                  {b.status === "confirmed" && (
                    <button
                      type="button"
                      disabled={loadingId === b.id}
                      onClick={() => cancelBooking(b.id)}
                      className="text-[var(--color-electricBlue)] hover:underline disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={loadingId === b.id}
                    onClick={() => deleteBooking(b.id)}
                    className="text-red-600 hover:underline disabled:opacity-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-[var(--color-neutralGray)]">
                  No bookings yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
