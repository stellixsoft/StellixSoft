"use client";

import { useEffect, useState } from "react";
import type { TimeSlotOption } from "@/src/lib/scheduling/types";

type Props = {
  eventSlug: string;
  date: string;
  timezone: string;
  onSelectSlot: (slot: TimeSlotOption) => void;
};

export default function TimeStep({
  eventSlug,
  date,
  timezone,
  onSelectSlot,
}: Props) {
  const [slots, setSlots] = useState<TimeSlotOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ slug: eventSlug, date });
    fetch(`/api/scheduling/availability?${params}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load times");
        return res.json();
      })
      .then((data) => setSlots(data.slots ?? []))
      .catch(() => setError("Unable to load time slots."))
      .finally(() => setLoading(false));
  }, [eventSlug, date]);

  if (loading) {
    return <p className="text-sm text-[var(--color-neutralGray)]">Loading times…</p>;
  }

  if (error) {
    return <p className="text-sm text-red-600">{error}</p>;
  }

  if (slots.length === 0) {
    return (
      <p className="text-sm text-[var(--color-neutralGray)]">
        No times available for this date.
      </p>
    );
  }

  return (
    <div>
      <h4 className="text-lg font-light text-[var(--color-deepSpace)] mb-1">
        Select a time
      </h4>
      <p className="text-xs text-[var(--color-neutralGray)] mb-4">
        {date} · {timezone}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[420px] overflow-y-auto pr-1">
        {slots.map((slot) => (
          <button
            key={slot.startUtc}
            type="button"
            onClick={() => onSelectSlot(slot)}
            className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium text-[var(--color-deepSpace)] hover:border-[var(--color-electricBlue)] hover:bg-sky-50 transition-colors"
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  );
}
