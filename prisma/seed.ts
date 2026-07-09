import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEFAULT_AVAILABILITY = {
  sunday: [],
  monday: [{ start: "09:00", end: "17:00" }],
  tuesday: [{ start: "09:00", end: "17:00" }],
  wednesday: [{ start: "09:00", end: "17:00" }],
  thursday: [{ start: "09:00", end: "17:00" }],
  friday: [{ start: "09:00", end: "17:00" }],
  saturday: [],
};

async function main() {
  await prisma.eventType.upsert({
    where: { slug: "15-minute-meeting" },
    update: {},
    create: {
      title: "15 Minute Meeting",
      slug: "15-minute-meeting",
      description:
        "Book a short discovery call with the StellixSoft team to discuss your project goals.",
      durationMinutes: 15,
      locationType: "google_meet",
      contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@stellixsoft.com",
      timezone: "Asia/Karachi",
      availabilityJson: JSON.stringify(DEFAULT_AVAILABILITY),
      isActive: true,
    },
  });

  console.log("Seeded default event type: 15-minute-meeting");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
