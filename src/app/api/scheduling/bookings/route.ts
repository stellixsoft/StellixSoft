import { addMinutes, isBefore } from "date-fns";
import { NextResponse } from "next/server";
import {
  buildCalendarDescription,
  buildGmailSearchUrl,
  createGoogleCalendarEvent,
} from "@/src/lib/google-calendar";
import { prisma } from "@/src/lib/prisma";
import { checkRateLimit } from "@/src/lib/rate-limit";
import { formatDateTimeForDisplay, isSlotAvailable } from "@/src/lib/scheduling/slots";
import { sendBookingConfirmationEmails } from "@/src/lib/scheduling/booking-email";
import { createBookingSchema } from "@/src/lib/scheduling/validation";

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(request: Request) {
  if (!checkRateLimit(`booking:${getClientIp(request)}`, 8, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = createBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const eventType = await prisma.eventType.findFirst({
    where: { slug: data.eventSlug, isActive: true },
  });

  if (!eventType) {
    return NextResponse.json({ error: "Event type not found" }, { status: 404 });
  }

  const startTime = new Date(data.startTimeUtc);
  const endTime = addMinutes(startTime, eventType.durationMinutes);

  if (isBefore(startTime, new Date())) {
    return NextResponse.json({ error: "Cannot book a time in the past" }, { status: 400 });
  }

  const existingBookings = await prisma.booking.findMany({
    where: { eventTypeId: eventType.id, status: "confirmed" },
    select: { startTime: true, endTime: true },
  });

  if (
    !isSlotAvailable(startTime, endTime, {
      bufferBeforeMinutes: eventType.bufferBeforeMinutes,
      bufferAfterMinutes: eventType.bufferAfterMinutes,
      existingBookings,
    })
  ) {
    return NextResponse.json(
      { error: "This time slot is no longer available" },
      { status: 409 },
    );
  }

  const calendarDescription = buildCalendarDescription({
    eventTitle: eventType.title,
    guestName: data.name,
    guestEmail: data.email,
    guestNotes: data.notes,
    contactEmail: eventType.contactEmail,
    contactPhone: eventType.contactPhone,
  });

  let googleCalendarEventId: string | null = null;
  let googleMeetLink: string | null = null;

  try {
    const calendarResult = await createGoogleCalendarEvent({
      title: `${eventType.title} with ${data.name}`,
      description: calendarDescription,
      startTime,
      endTime,
      timezone: eventType.timezone,
      attendeeEmail: data.email,
      attendeeName: data.name,
    });
    if (calendarResult) {
      googleCalendarEventId = calendarResult.eventId;
      googleMeetLink = calendarResult.meetLink;
    }
  } catch (error) {
    console.error("Google Calendar event creation failed:", error);
  }

  const booking = await prisma.booking.create({
    data: {
      eventTypeId: eventType.id,
      name: data.name,
      email: data.email,
      notes: data.notes ?? null,
      startTime,
      endTime,
      timezone: data.timezone,
      status: "confirmed",
      googleCalendarEventId,
      googleMeetLink,
    },
    include: { eventType: true },
  });

  const formattedDateTime = formatDateTimeForDisplay(
    booking.startTime.toISOString(),
    booking.timezone,
  );

  const { guestEmailSent } = await sendBookingConfirmationEmails({
    guestName: booking.name,
    guestEmail: booking.email,
    eventTitle: booking.eventType.title,
    formattedDateTime,
    durationMinutes: booking.eventType.durationMinutes,
    googleMeetLink: booking.googleMeetLink,
    notes: booking.notes,
    contactEmail: eventType.contactEmail,
  });

  return NextResponse.json({
    success: true,
    booking: {
      id: booking.id,
      name: booking.name,
      email: booking.email,
      eventTitle: booking.eventType.title,
      startTime: booking.startTime.toISOString(),
      endTime: booking.endTime.toISOString(),
      timezone: booking.timezone,
      formattedDateTime,
      googleMeetLink: booking.googleMeetLink,
      guestEmailSent,
      gmailSearchUrl: buildGmailSearchUrl(booking.eventType.title, booking.email),
    },
  });
}
