import type { Metadata } from "next";
import IoTSoftwareHero from "../../../components/sections/services/iot-software/hero";
import SoftwareSolution from "../../../components/sections/services/iot-software/software-solution";
import YourHardware from "../../../components/sections/services/iot-software/your-hardware";
import IoTCaseStudy from "../../../components/sections/services/iot-software/iot-case-study";
import IoTTechnologyExpertise from "../../../components/sections/services/iot-software/iot-technology-expertise";
import SolutionByDeviceType from "../../../components/sections/services/iot-software/solution-by-device-type";
import IoTSoftwarePartner from "../../../components/sections/services/iot-software/companies-partner";
import FlexibleEngagement from "../../../components/sections/services/iot-software/flexible-engagement";
import Testimonial from "../../../components/sections/services/iot-software/testimonial";
import CTAPilot from "../../../components/sections/home/cta-pilot";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/iot-software" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "IoT Software Development - Device Management & Telemetry Platforms",
  description:
    "End-to-end IoT platform development. Device management, real-time telemetry, edge computing, OTA updates, and fleet management dashboards.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "IoT Software Development",
  description:
    "End-to-end IoT platform development — device management, real-time telemetry, edge computing, and fleet management dashboards.",
  path: PATH,
  serviceType: "IoT platform and connected device software development",
  category: "Custom Software Development",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "IoT Software Development", path: PATH },
]);

export default function IoTSoftwarePage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <IoTSoftwareHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <SoftwareSolution />
        <YourHardware />
        <IoTCaseStudy />
        <IoTTechnologyExpertise />
        <SolutionByDeviceType />
        <IoTSoftwarePartner />
        <Testimonial />
        <FlexibleEngagement />
        <CTAPilot />
      </div>
    </>
  );
}
