import EventTypeForm from "@/src/components/admin/EventTypeForm";

export default function NewEventTypePage() {
  return (
    <div>
      <h1 className="text-3xl font-light text-[var(--color-deepSpace)] mb-6">
        Create event type
      </h1>
      <EventTypeForm mode="create" />
    </div>
  );
}
