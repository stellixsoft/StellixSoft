import type { BookingSuccess } from "../SchedulingModal";

type Props = {
  booking: BookingSuccess;
  onClose: () => void;
};

export default function SuccessStep({ booking, onClose }: Props) {
  return (
    <div className="text-center sm:text-left">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 text-xl">
        ✓
      </div>
      <h4 className="text-2xl font-light text-[var(--color-deepSpace)] mb-2">
        Meeting Scheduled
      </h4>
      <p className="text-sm text-[var(--color-neutralGray)] mb-6">
        {booking.googleMeetLink
          ? "A confirmation email with your Google Meet link has been sent to your inbox."
          : "A confirmation email has been sent to your inbox with your meeting details."}
      </p>

      <dl className="space-y-3 text-sm text-left rounded-xl border border-gray-200 bg-[var(--color-lightGray)] p-4 mb-6">
        <div>
          <dt className="text-[var(--color-neutralGray)]">Event</dt>
          <dd className="text-[var(--color-deepSpace)] font-medium">{booking.eventTitle}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-neutralGray)]">When</dt>
          <dd className="text-[var(--color-deepSpace)]">{booking.formattedDateTime}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-neutralGray)]">Guest</dt>
          <dd className="text-[var(--color-deepSpace)]">{booking.email}</dd>
        </div>
        {booking.googleMeetLink && (
          <div>
            <dt className="text-[var(--color-neutralGray)]">Google Meet</dt>
            <dd>
              <a
                href={booking.googleMeetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-electricBlue)] hover:underline break-all"
              >
                {booking.googleMeetLink}
              </a>
            </dd>
          </div>
        )}
      </dl>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => window.open(booking.gmailSearchUrl, "_blank")}
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        >
          Open Email
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-[var(--color-deepSpace)] hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  );
}
