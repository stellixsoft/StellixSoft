import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { getAvailableDates, generateTimeSlotsForDate } from "@/src/lib/scheduling/slots";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const date = searchParams.get("date");

  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  const eventType = await prisma.eventType.findFirst({
    where: { slug, isActive: true },
  });

  if (!eventType) {
    return NextResponse.json({ error: "Event type not found" }, { status: 404 });
  }

  const existingBookings = await prisma.booking.findMany({
    where: { eventTypeId: eventType.id, status: "confirmed" },
    select: { startTime: true, endTime: true },
  });

  const slotParams = {
    availabilityJson: eventType.availabilityJson,
    timezone: eventType.timezone,
    durationMinutes: eventType.durationMinutes,
    bufferBeforeMinutes: eventType.bufferBeforeMinutes,
    bufferAfterMinutes: eventType.bufferAfterMinutes,
    existingBookings,
  };

  if (date) {
    const slots = generateTimeSlotsForDate(date, slotParams);
    return NextResponse.json({ date, timezone: eventType.timezone, slots });
  }

  const dates = getAvailableDates(slotParams);
  return NextResponse.json({
    timezone: eventType.timezone,
    durationMinutes: eventType.durationMinutes,
    dates,
  });
}
