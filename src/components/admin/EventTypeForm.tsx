"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DEFAULT_WEEKLY_AVAILABILITY,
  WEEKDAYS,
  type WeeklyAvailability,
} from "@/src/lib/scheduling/types";

const inputClass =
  "w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)]";

export type EventTypeFormValues = {
  id?: string;
  title: string;
  slug: string;
  description: string;
  durationMinutes: number;
  locationType: string;
  contactEmail: string;
  contactPhone: string;
  timezone: string;
  bufferBeforeMinutes: number;
  bufferAfterMinutes: number;
  isActive: boolean;
  availability: WeeklyAvailability;
};

type Props = {
  initial?: EventTypeFormValues;
  mode: "create" | "edit";
};

export default function EventTypeForm({ initial, mode }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<EventTypeFormValues>(
    initial ?? {
      title: "",
      slug: "",
      description: "",
      durationMinutes: 15,
      locationType: "google_meet",
      contactEmail: "",
      contactPhone: "",
      timezone: "Asia/Karachi",
      bufferBeforeMinutes: 0,
      bufferAfterMinutes: 0,
      isActive: true,
      availability: { ...DEFAULT_WEEKLY_AVAILABILITY },
    },
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      ...form,
      description: form.description || null,
      contactEmail: form.contactEmail || null,
      contactPhone: form.contactPhone || null,
      availability: form.availability,
    };

    const url =
      mode === "create"
        ? "/api/admin/event-types"
        : `/api/admin/event-types/${form.id}`;
    const method = mode === "create" ? "POST" : "PATCH";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to save event type.");
      setLoading(false);
      return;
    }

    router.push("/admin/event-types");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Title
          </label>
          <input
            className={inputClass}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Slug
          </label>
          <input
            className={inputClass}
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
          Description
        </label>
        <textarea
          className={`${inputClass} min-h-[100px]`}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Duration (minutes)
          </label>
          <input
            type="number"
            min={5}
            max={480}
            className={inputClass}
            value={form.durationMinutes}
            onChange={(e) =>
              setForm({ ...form, durationMinutes: Number(e.target.value) })
            }
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Buffer before
          </label>
          <input
            type="number"
            min={0}
            className={inputClass}
            value={form.bufferBeforeMinutes}
            onChange={(e) =>
              setForm({ ...form, bufferBeforeMinutes: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Buffer after
          </label>
          <input
            type="number"
            min={0}
            className={inputClass}
            value={form.bufferAfterMinutes}
            onChange={(e) =>
              setForm({ ...form, bufferAfterMinutes: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Timezone
          </label>
          <input
            className={inputClass}
            value={form.timezone}
            onChange={(e) => setForm({ ...form, timezone: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Location type
          </label>
          <input
            className={inputClass}
            value={form.locationType}
            onChange={(e) => setForm({ ...form, locationType: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Contact email
          </label>
          <input
            type="email"
            className={inputClass}
            value={form.contactEmail}
            onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
            Contact phone
          </label>
          <input
            className={inputClass}
            value={form.contactPhone}
            onChange={(e) => setForm({ ...form, contactPhone: e.target.value })}
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-[var(--color-deepSpace)]">
        <input
          type="checkbox"
          checked={form.isActive}
          onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
        />
        Active
      </label>

      <fieldset className="rounded-2xl border border-gray-200 p-5 space-y-4">
        <legend className="px-2 text-sm font-medium text-[var(--color-deepSpace)]">
          Weekly availability
        </legend>
        {WEEKDAYS.map((day) => (
          <div key={day} className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3 items-center">
            <span className="capitalize text-sm text-[var(--color-neutralGray)]">{day}</span>
            <input
              className={inputClass}
              placeholder='e.g. 09:00-17:00 or empty'
              value={
                form.availability[day]
                  .map((r) => `${r.start}-${r.end}`)
                  .join(", ") || ""
              }
              onChange={(e) => {
                const ranges = e.target.value
                  .split(",")
                  .map((part) => part.trim())
                  .filter(Boolean)
                  .map((part) => {
                    const [start, end] = part.split("-");
                    return { start: start?.trim() ?? "", end: end?.trim() ?? "" };
                  })
                  .filter((r) => r.start && r.end);
                setForm({
                  ...form,
                  availability: { ...form.availability, [day]: ranges },
                });
              }}
            />
          </div>
        ))}
      </fieldset>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl px-6 py-3 text-sm font-medium text-white disabled:opacity-70"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      >
        {loading ? "Saving…" : mode === "create" ? "Create event type" : "Save changes"}
      </button>
    </form>
  );
}
