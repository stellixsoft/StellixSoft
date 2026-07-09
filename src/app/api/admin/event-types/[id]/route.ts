import { NextResponse } from "next/server";
import { requireAdminSession } from "@/src/lib/admin-auth";
import { prisma } from "@/src/lib/prisma";
import { stringifyAvailability } from "@/src/lib/scheduling/availability";
import { eventTypeSchema } from "@/src/lib/scheduling/validation";

type RouteContext = { params: Promise<{ id: string }> };

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(_request: Request, context: RouteContext) {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  const { id } = await context.params;
  const eventType = await prisma.eventType.findUnique({ where: { id } });
  if (!eventType) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ eventType });
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  const { id } = await context.params;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = eventTypeSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const availabilityJson = data.availability
    ? stringifyAvailability(data.availability)
    : data.availabilityJson;

  const eventType = await prisma.eventType.update({
    where: { id },
    data: {
      ...(data.title !== undefined ? { title: data.title } : {}),
      ...(data.slug !== undefined ? { slug: data.slug } : {}),
      ...(data.description !== undefined ? { description: data.description } : {}),
      ...(data.durationMinutes !== undefined
        ? { durationMinutes: data.durationMinutes }
        : {}),
      ...(data.locationType !== undefined ? { locationType: data.locationType } : {}),
      ...(data.contactEmail !== undefined ? { contactEmail: data.contactEmail } : {}),
      ...(data.contactPhone !== undefined ? { contactPhone: data.contactPhone } : {}),
      ...(data.timezone !== undefined ? { timezone: data.timezone } : {}),
      ...(availabilityJson !== undefined ? { availabilityJson } : {}),
      ...(data.bufferBeforeMinutes !== undefined
        ? { bufferBeforeMinutes: data.bufferBeforeMinutes }
        : {}),
      ...(data.bufferAfterMinutes !== undefined
        ? { bufferAfterMinutes: data.bufferAfterMinutes }
        : {}),
      ...(data.isActive !== undefined ? { isActive: data.isActive } : {}),
    },
  });

  return NextResponse.json({ eventType });
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  const { id } = await context.params;
  await prisma.eventType.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
