"use client";

import { useState } from "react";
import type { BookingSuccess } from "../SchedulingModal";

const inputClass =
  "w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent";

type Props = {
  eventSlug: string;
  timezone: string;
  startUtc: string;
  onSuccess: (result: BookingSuccess) => void;
};

export default function DetailsStep({
  eventSlug,
  timezone,
  startUtc,
  onSuccess,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/scheduling/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventSlug,
          name,
          email,
          notes: notes || undefined,
          startTimeUtc: startUtc,
          timezone,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Unable to schedule this meeting.");
        return;
      }

      onSuccess(data.booking);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h4 className="text-lg font-light text-[var(--color-deepSpace)] mb-4">
          Enter details
        </h4>
      </div>

      <div>
        <label htmlFor="sched-name" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
          Name *
        </label>
        <input
          id="sched-name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={200}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="sched-email" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
          Email *
        </label>
        <input
          id="sched-email"
          name="email"
          type="email"
          required
          maxLength={320}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="sched-notes" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
          Notes (optional)
        </label>
        <textarea
          id="sched-notes"
          name="notes"
          rows={4}
          maxLength={2000}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputClass} resize-y min-h-[100px]`}
          placeholder="Share anything that will help prepare for our meeting."
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-70"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      >
        {loading ? "Scheduling…" : "Schedule Event"}
      </button>
    </form>
  );
}
