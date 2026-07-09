import { NextResponse } from "next/server";
import { requireAdminSession } from "@/src/lib/admin-auth";
import { prisma } from "@/src/lib/prisma";
import {
  defaultAvailabilityJson,
  eventTypeSchema,
} from "@/src/lib/scheduling/validation";
import { stringifyAvailability } from "@/src/lib/scheduling/availability";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  const eventTypes = await prisma.eventType.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { bookings: true } } },
  });

  return NextResponse.json({ eventTypes });
}

export async function POST(request: Request) {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = eventTypeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const availabilityJson = data.availability
    ? stringifyAvailability(data.availability)
    : data.availabilityJson ?? defaultAvailabilityJson();

  const eventType = await prisma.eventType.create({
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description ?? null,
      durationMinutes: data.durationMinutes,
      locationType: data.locationType,
      contactEmail: data.contactEmail ?? null,
      contactPhone: data.contactPhone ?? null,
      timezone: data.timezone,
      availabilityJson,
      bufferBeforeMinutes: data.bufferBeforeMinutes,
      bufferAfterMinutes: data.bufferAfterMinutes,
      isActive: data.isActive,
    },
  });

  return NextResponse.json({ eventType }, { status: 201 });
}
