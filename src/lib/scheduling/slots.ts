import { addDays, addMinutes, isBefore, startOfDay } from "date-fns";
import { formatInTimeZone, fromZonedTime, toDate } from "date-fns-tz";
import {
  getEventAvailabilityForDate,
  minutesToTime,
  parseAvailabilityJson,
  parseTimeToMinutes,
} from "./availability";
import type { AvailableDateOption, TimeSlotOption } from "./types";

type BookingWindow = {
  startTime: Date;
  endTime: Date;
};

type SlotParams = {
  availabilityJson: string;
  timezone: string;
  durationMinutes: number;
  bufferBeforeMinutes: number;
  bufferAfterMinutes: number;
  existingBookings: BookingWindow[];
  daysAhead?: number;
};

export function generateTimeSlotsForDate(
  dateStr: string,
  params: Omit<SlotParams, "daysAhead">,
): TimeSlotOption[] {
  const availability = parseAvailabilityJson(params.availabilityJson);
  const ranges = getEventAvailabilityForDate(
    availability,
    dateStr,
    params.timezone,
  );
  if (ranges.length === 0) return [];

  const now = new Date();
  const slots: TimeSlotOption[] = [];

  for (const range of ranges) {
    const rangeStart = parseTimeToMinutes(range.start);
    const rangeEnd = parseTimeToMinutes(range.end);
    let cursor = rangeStart;

    while (cursor + params.durationMinutes <= rangeEnd) {
      const startLocal = `${dateStr}T${minutesToTime(cursor)}:00`;
      const endLocal = `${dateStr}T${minutesToTime(cursor + params.durationMinutes)}:00`;
      const startUtc = fromZonedTime(startLocal, params.timezone);
      const endUtc = fromZonedTime(endLocal, params.timezone);

      if (!isBefore(startUtc, now) && isSlotAvailable(startUtc, endUtc, params)) {
        slots.push({
          startUtc: startUtc.toISOString(),
          endUtc: endUtc.toISOString(),
          label: formatInTimeZone(startUtc, params.timezone, "h:mm a"),
        });
      }

      cursor += params.durationMinutes;
    }
  }

  return slots;
}

export function getAvailableDates(params: SlotParams): AvailableDateOption[] {
  const daysAhead = params.daysAhead ?? 60;
  const results: AvailableDateOption[] = [];
  const timezone = params.timezone;
  const todayStr = formatInTimeZone(new Date(), timezone, "yyyy-MM-dd");
  let cursor = toDate(`${todayStr}T00:00:00`, { timeZone: timezone });

  for (let i = 0; i < daysAhead; i++) {
    const dateStr = formatInTimeZone(cursor, timezone, "yyyy-MM-dd");
    const slots = generateTimeSlotsForDate(dateStr, params);
    if (slots.length > 0) {
      results.push({
        date: dateStr,
        label: formatInTimeZone(cursor, timezone, "EEE, MMM d"),
      });
    }
    cursor = addDays(cursor, 1);
  }

  return results;
}

export function isSlotAvailable(
  requestedStart: Date,
  requestedEnd: Date,
  params: {
    bufferBeforeMinutes: number;
    bufferAfterMinutes: number;
    existingBookings: BookingWindow[];
  },
): boolean {
  const bufferedStart = addMinutes(requestedStart, -params.bufferBeforeMinutes);
  const bufferedEnd = addMinutes(requestedEnd, params.bufferAfterMinutes);

  for (const booking of params.existingBookings) {
    if (
      booking.startTime < bufferedEnd &&
      booking.endTime > bufferedStart
    ) {
      return false;
    }
  }

  return true;
}

export function convertLocalSlotToUtc(
  dateStr: string,
  timeStr: string,
  timezone: string,
): Date {
  return fromZonedTime(`${dateStr}T${timeStr}:00`, timezone);
}

export function formatDateTimeForDisplay(
  isoUtc: string,
  timezone: string,
): string {
  return formatInTimeZone(isoUtc, timezone, "EEEE, MMMM d, yyyy 'at' h:mm a zzz");
}

export function isDateInPast(dateStr: string, timezone: string): boolean {
  const dayStart = fromZonedTime(`${dateStr}T00:00:00`, timezone);
  const todayStart = startOfDay(fromZonedTime(
    formatInTimeZone(new Date(), timezone, "yyyy-MM-dd") + "T00:00:00",
    timezone,
  ));
  return isBefore(dayStart, todayStart);
}
