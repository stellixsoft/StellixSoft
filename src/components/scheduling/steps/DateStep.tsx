"use client";

import { useEffect, useState } from "react";
import type { AvailableDateOption } from "@/src/lib/scheduling/types";

type Props = {
  eventSlug: string;
  timezone: string;
  onSelectDate: (date: string) => void;
};

export default function DateStep({ eventSlug, timezone, onSelectDate }: Props) {
  const [dates, setDates] = useState<AvailableDateOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/scheduling/availability?slug=${encodeURIComponent(eventSlug)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load dates");
        return res.json();
      })
      .then((data) => setDates(data.dates ?? []))
      .catch(() => setError("Unable to load available dates."))
      .finally(() => setLoading(false));
  }, [eventSlug]);

  if (loading) {
    return <p className="text-sm text-[var(--color-neutralGray)]">Loading dates…</p>;
  }

  if (error) {
    return <p className="text-sm text-red-600">{error}</p>;
  }

  if (dates.length === 0) {
    return (
      <p className="text-sm text-[var(--color-neutralGray)]">
        No available dates in the next 60 days. Please contact us directly.
      </p>
    );
  }

  return (
    <div>
      <h4 className="text-lg font-light text-[var(--color-deepSpace)] mb-1">
        Select a date
      </h4>
      <p className="text-xs text-[var(--color-neutralGray)] mb-4">
        Times shown in {timezone}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[420px] overflow-y-auto pr-1">
        {dates.map((d) => (
          <button
            key={d.date}
            type="button"
            onClick={() => onSelectDate(d.date)}
            className="rounded-xl border border-gray-200 px-4 py-3 text-left text-sm text-[var(--color-deepSpace)] hover:border-[var(--color-electricBlue)] hover:bg-sky-50 transition-colors"
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}
