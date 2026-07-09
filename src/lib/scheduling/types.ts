export const WEEKDAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

export type Weekday = (typeof WEEKDAYS)[number];

export type TimeRange = {
  start: string;
  end: string;
};

export type WeeklyAvailability = Record<Weekday, TimeRange[]>;

export const DEFAULT_WEEKLY_AVAILABILITY: WeeklyAvailability = {
  sunday: [],
  monday: [{ start: "09:00", end: "17:00" }],
  tuesday: [{ start: "09:00", end: "17:00" }],
  wednesday: [{ start: "09:00", end: "17:00" }],
  thursday: [{ start: "09:00", end: "17:00" }],
  friday: [{ start: "09:00", end: "17:00" }],
  saturday: [],
};

export type PublicEventType = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  durationMinutes: number;
  locationType: string;
  contactEmail: string | null;
  contactPhone: string | null;
  timezone: string;
};

export type TimeSlotOption = {
  startUtc: string;
  endUtc: string;
  label: string;
};

export type AvailableDateOption = {
  date: string;
  label: string;
};
