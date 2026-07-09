import { formatInTimeZone, toDate } from "date-fns-tz";
import {
  DEFAULT_WEEKLY_AVAILABILITY,
  type TimeRange,
  type WeeklyAvailability,
  WEEKDAYS,
  type Weekday,
} from "./types";

const TIME_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;

export function parseAvailabilityJson(json: string): WeeklyAvailability {
  try {
    const parsed = JSON.parse(json) as Partial<WeeklyAvailability>;
    const result = { ...DEFAULT_WEEKLY_AVAILABILITY };
    for (const day of WEEKDAYS) {
      const ranges = parsed[day];
      if (!Array.isArray(ranges)) continue;
      result[day] = ranges.filter(isValidRange);
    }
    return result;
  } catch {
    return { ...DEFAULT_WEEKLY_AVAILABILITY };
  }
}

function isValidRange(range: unknown): range is TimeRange {
  if (!range || typeof range !== "object") return false;
  const r = range as TimeRange;
  return TIME_RE.test(r.start) && TIME_RE.test(r.end) && r.start < r.end;
}

export function stringifyAvailability(availability: WeeklyAvailability): string {
  return JSON.stringify(availability);
}

export function getWeekdayFromDate(dateStr: string, timezone: string): Weekday {
  const isoDay = Number(
    formatInTimeZone(toDate(dateStr, { timeZone: timezone }), timezone, "i"),
  );
  const map: Record<number, Weekday> = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
    7: "sunday",
  };
  return map[isoDay] ?? "monday";
}

export function getEventAvailabilityForDate(
  availability: WeeklyAvailability,
  dateStr: string,
  timezone: string,
): TimeRange[] {
  const weekday = getWeekdayFromDate(dateStr, timezone);
  return availability[weekday] ?? [];
}

export function parseTimeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function minutesToTime(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
