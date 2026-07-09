import { notFound } from "next/navigation";
import EventTypeForm from "@/src/components/admin/EventTypeForm";
import { parseAvailabilityJson } from "@/src/lib/scheduling/availability";
import { prisma } from "@/src/lib/prisma";

type PageProps = { params: Promise<{ id: string }> };

export default async function EditEventTypePage({ params }: PageProps) {
  const { id } = await params;
  const eventType = await prisma.eventType.findUnique({ where: { id } });
  if (!eventType) notFound();

  return (
    <div>
      <h1 className="text-3xl font-light text-[var(--color-deepSpace)] mb-6">
        Edit event type
      </h1>
      <EventTypeForm
        mode="edit"
        initial={{
          id: eventType.id,
          title: eventType.title,
          slug: eventType.slug,
          description: eventType.description ?? "",
          durationMinutes: eventType.durationMinutes,
          locationType: eventType.locationType,
          contactEmail: eventType.contactEmail ?? "",
          contactPhone: eventType.contactPhone ?? "",
          timezone: eventType.timezone,
          bufferBeforeMinutes: eventType.bufferBeforeMinutes,
          bufferAfterMinutes: eventType.bufferAfterMinutes,
          isActive: eventType.isActive,
          availability: parseAvailabilityJson(eventType.availabilityJson),
        }}
      />
    </div>
  );
}
