import { NextResponse } from "next/server";
import { requireAdminSession } from "@/src/lib/admin-auth";
import { cancelGoogleCalendarEvent } from "@/src/lib/google-calendar";
import { prisma } from "@/src/lib/prisma";

type RouteContext = { params: Promise<{ id: string }> };

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  const { id } = await context.params;
  const booking = await prisma.booking.findUnique({
    where: { id },
    include: { eventType: true },
  });

  if (!booking) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let body: { action?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (body.action === "cancel") {
    if (booking.googleCalendarEventId) {
      await cancelGoogleCalendarEvent(booking.googleCalendarEventId);
    }

    const updated = await prisma.booking.update({
      where: { id },
      data: { status: "cancelled" },
      include: { eventType: true },
    });

    return NextResponse.json({ booking: updated });
  }

  return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  const { id } = await context.params;
  const booking = await prisma.booking.findUnique({ where: { id } });

  if (!booking) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (booking.googleCalendarEventId && booking.status === "confirmed") {
    await cancelGoogleCalendarEvent(booking.googleCalendarEventId);
  }

  await prisma.booking.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
