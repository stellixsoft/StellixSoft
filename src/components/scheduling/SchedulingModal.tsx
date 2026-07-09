"use client";

import { useEffect, useRef, useState } from "react";
import type { PublicEventType } from "@/src/lib/scheduling/types";
import { getCompanyName, getContactEmail, getContactPhone } from "@/src/lib/scheduling/branding";
import DateStep from "./steps/DateStep";
import TimeStep from "./steps/TimeStep";
import DetailsStep from "./steps/DetailsStep";
import SuccessStep from "./steps/SuccessStep";
import EventSidebar from "./EventSidebar";

export type SchedulingStep = "date" | "time" | "details" | "success";

export type BookingSuccess = {
  name: string;
  email: string;
  eventTitle: string;
  formattedDateTime: string;
  googleMeetLink: string | null;
  gmailSearchUrl: string;
};

type Props = {
  eventSlug: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function SchedulingModal({ eventSlug, isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<SchedulingStep>("date");
  const [eventType, setEventType] = useState<PublicEventType | null>(null);
  const [companyName, setCompanyName] = useState(getCompanyName());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{
    startUtc: string;
    endUtc: string;
    label: string;
  } | null>(null);
  const [success, setSuccess] = useState<BookingSuccess | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    setStep("date");
    setSelectedDate(null);
    setSelectedSlot(null);
    setSuccess(null);
    setError(null);
    setLoading(true);

    fetch(`/api/scheduling/event-types/${eventSlug}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Event not found");
        return res.json();
      })
      .then((data) => {
        setEventType(data);
        setCompanyName(data.companyName ?? getCompanyName());
      })
      .catch(() => setError("Unable to load this event type."))
      .finally(() => setLoading(false));
  }, [isOpen, eventSlug]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timezone = eventType?.timezone ?? "UTC";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/70 backdrop-blur-sm" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="scheduling-modal-title"
        className="relative z-10 w-full max-w-[960px] max-h-[92vh] overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(3,2,19,0.25)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 sm:px-6 py-3">
          <h2 id="scheduling-modal-title" className="text-sm font-medium text-[var(--color-deepSpace)]">
            Schedule a meeting
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[var(--color-neutralGray)] hover:bg-gray-100 hover:text-[var(--color-deepSpace)]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {loading && !eventType ? (
          <div className="p-12 text-center text-sm text-[var(--color-neutralGray)]">
            Loading availability…
          </div>
        ) : error && !eventType ? (
          <div className="p-12 text-center text-sm text-red-600">{error}</div>
        ) : eventType ? (
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] min-h-0 flex-1 overflow-hidden">
            <EventSidebar
              companyName={companyName}
              eventType={eventType}
              contactEmail={eventType.contactEmail ?? getContactEmail()}
              contactPhone={eventType.contactPhone ?? getContactPhone()}
              selectedDate={selectedDate}
              selectedSlotLabel={selectedSlot?.label ?? null}
              timezone={timezone}
            />

            <div className="min-h-0 overflow-y-auto p-4 sm:p-6 md:p-8">
              {step !== "date" && step !== "success" && (
                <button
                  type="button"
                  onClick={() => {
                    if (step === "time") setStep("date");
                    if (step === "details") setStep("time");
                  }}
                  className="mb-4 text-sm text-[var(--color-electricBlue)] hover:underline"
                >
                  ← Back
                </button>
              )}

              {step === "date" && (
                <DateStep
                  eventSlug={eventSlug}
                  timezone={timezone}
                  onSelectDate={(date) => {
                    setSelectedDate(date);
                    setStep("time");
                  }}
                />
              )}

              {step === "time" && selectedDate && (
                <TimeStep
                  eventSlug={eventSlug}
                  date={selectedDate}
                  timezone={timezone}
                  onSelectSlot={(slot) => {
                    setSelectedSlot(slot);
                    setStep("details");
                  }}
                />
              )}

              {step === "details" && selectedSlot && (
                <DetailsStep
                  eventSlug={eventSlug}
                  timezone={timezone}
                  startUtc={selectedSlot.startUtc}
                  onSuccess={(result) => {
                    setSuccess(result);
                    setStep("success");
                  }}
                />
              )}

              {step === "success" && success && (
                <SuccessStep booking={success} onClose={onClose} />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
