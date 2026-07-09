import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { getCompanyName, getContactEmail, getContactPhone } from "@/src/lib/scheduling/branding";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const eventType = await prisma.eventType.findFirst({
    where: { slug, isActive: true },
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      durationMinutes: true,
      locationType: true,
      contactEmail: true,
      contactPhone: true,
      timezone: true,
    },
  });

  if (!eventType) {
    return NextResponse.json({ error: "Event type not found" }, { status: 404 });
  }

  return NextResponse.json({
    ...eventType,
    companyName: getCompanyName(),
    defaultContactEmail: getContactEmail(),
    defaultContactPhone: getContactPhone(),
  });
}
