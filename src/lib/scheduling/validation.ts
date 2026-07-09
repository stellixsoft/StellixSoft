import { z } from "zod";
import { DEFAULT_WEEKLY_AVAILABILITY, WEEKDAYS } from "@/src/lib/scheduling/types";

const timeRangeSchema = z.object({
  start: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  end: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
});

const availabilitySchema = z.object(
  Object.fromEntries(WEEKDAYS.map((day) => [day, z.array(timeRangeSchema)])) as Record<
    (typeof WEEKDAYS)[number],
    z.ZodArray<typeof timeRangeSchema>
  >,
);

export const createBookingSchema = z.object({
  eventSlug: z.string().min(1).max(120),
  name: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(320),
  notes: z.string().trim().max(2000).optional(),
  startTimeUtc: z.string().datetime(),
  timezone: z.string().min(1).max(80),
});

export const eventTypeSchema = z.object({
  title: z.string().trim().min(2).max(200),
  slug: z
    .string()
    .trim()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().trim().max(5000).optional().nullable(),
  durationMinutes: z.coerce.number().int().min(5).max(480),
  locationType: z.string().trim().max(50).default("google_meet"),
  contactEmail: z.string().trim().email().max(320).optional().nullable(),
  contactPhone: z.string().trim().max(40).optional().nullable(),
  timezone: z.string().trim().min(1).max(80),
  availabilityJson: z.string().optional(),
  availability: availabilitySchema.optional(),
  bufferBeforeMinutes: z.coerce.number().int().min(0).max(120).default(0),
  bufferAfterMinutes: z.coerce.number().int().min(0).max(120).default(0),
  isActive: z.boolean().default(true),
});

export const adminLoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(200),
});

export function defaultAvailabilityJson(): string {
  return JSON.stringify(DEFAULT_WEEKLY_AVAILABILITY);
}
