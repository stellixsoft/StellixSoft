import { NextResponse } from "next/server";
import { requireAdminSession } from "@/src/lib/admin-auth";
import { prisma } from "@/src/lib/prisma";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  try {
    await requireAdminSession();
  } catch {
    return unauthorized();
  }

  const bookings = await prisma.booking.findMany({
    orderBy: { startTime: "desc" },
    include: { eventType: { select: { title: true, slug: true } } },
  });

  return NextResponse.json({ bookings });
}
