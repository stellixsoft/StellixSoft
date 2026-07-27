"use client";

import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { trackEvent } from "@/src/lib/analytics";

type Props = {
  className: string;
};

export default function CalendlyCardButton({ className }: Props) {
  return (
    <CalendlyScheduleButton
      className={className}
      onClick={() => {
        trackEvent("business_card_book_meeting", {
          card_slug: "hannan",
        });
      }}
    >
      Book a 15-minute meeting
    </CalendlyScheduleButton>
  );
}
