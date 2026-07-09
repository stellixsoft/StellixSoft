import type { PublicEventType } from "@/src/lib/scheduling/types";

type Props = {
  companyName: string;
  eventType: PublicEventType;
  contactEmail: string;
  contactPhone: string | null;
  selectedDate: string | null;
  selectedSlotLabel: string | null;
  timezone: string;
};

export default function EventSidebar({
  companyName,
  eventType,
  contactEmail,
  contactPhone,
  selectedDate,
  selectedSlotLabel,
  timezone,
}: Props) {
  return (
    <aside className="border-b md:border-b-0 md:border-r border-gray-200 bg-[var(--color-lightGray)] p-5 sm:p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-neutralGray)] mb-2">
        {companyName}
      </p>
      <h3 className="text-xl font-light text-[var(--color-deepSpace)] mb-4">
        {eventType.title}
      </h3>

      <ul className="space-y-3 text-sm text-[var(--color-neutralGray)]">
        <li className="flex items-start gap-2">
          <span aria-hidden>🕒</span>
          <span>{eventType.durationMinutes} min</span>
        </li>
        <li className="flex items-start gap-2">
          <span aria-hidden>💻</span>
          <span>
            {eventType.locationType === "google_meet"
              ? "Web conferencing details provided after confirmation"
              : eventType.locationType}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span aria-hidden>🌐</span>
          <span>{timezone}</span>
        </li>
        {contactEmail && (
          <li className="flex items-start gap-2">
            <span aria-hidden>✉️</span>
            <a
              href={`mailto:${contactEmail}`}
              className="text-[var(--color-electricBlue)] hover:underline"
            >
              {contactEmail}
            </a>
          </li>
        )}
        {contactPhone && (
          <li className="flex items-start gap-2">
            <span aria-hidden>📞</span>
            <a
              href={`tel:${contactPhone.replace(/\s/g, "")}`}
              className="text-[var(--color-electricBlue)] hover:underline"
            >
              {contactPhone}
            </a>
          </li>
        )}
      </ul>

      {eventType.description && (
        <p className="mt-5 text-sm text-[var(--color-neutralGray)] leading-relaxed">
          {eventType.description}
        </p>
      )}

      {(selectedDate || selectedSlotLabel) && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 text-sm">
          {selectedDate && (
            <p className="text-[var(--color-deepSpace)]">
              <span className="text-[var(--color-neutralGray)]">Date: </span>
              {selectedDate}
            </p>
          )}
          {selectedSlotLabel && (
            <p className="text-[var(--color-deepSpace)] mt-1">
              <span className="text-[var(--color-neutralGray)]">Time: </span>
              {selectedSlotLabel}
            </p>
          )}
        </div>
      )}
    </aside>
  );
}
