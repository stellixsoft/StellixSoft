import type { Metadata } from "next";
import IoTSoftwareHero from "../../../components/sections/services/iot-software/hero";
import SoftwareSolution from "../../../components/sections/services/iot-software/software-solution";
import YourHardware from "../../../components/sections/services/iot-software/your-hardware";
import IoTCaseStudy from "../../../components/sections/services/iot-software/iot-case-study";
import IoTTechnologyExpertise from "../../../components/sections/services/iot-software/iot-technology-expertise";
import SolutionByDeviceType from "../../../components/sections/services/iot-software/solution-by-device-type";
import IoTSoftwarePartner  from "../../../components/sections/services/iot-software/companies-partner";
import FlexibleEngagement from "../../../components/sections/services/iot-software/flexible-engagement";
import Testimonial from "../../../components/sections/services/iot-software/testimonial";
import CTAPilot from "../../../components/sections/home/cta-pilot";

export const metadata: Metadata = {
  title: "IoT Software Development - Device Management & Telemetry Platforms",
  description: "End-to-end IoT platform development. Device management, real-time telemetry, edge computing, OTA updates, and fleet management dashboards.",
  alternates: { canonical: "https://stellixsoft.com/services/iot-software" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IoT Software Development",
  description: "End-to-end IoT platform development — device management, real-time telemetry, edge computing, and fleet management dashboards.",
  provider: { "@type": "Organization", "@id": "https://stellixsoft.com/#organization" },
  areaServed: ["North America", "Europe"],
  url: "https://stellixsoft.com/services/iot-software",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stellixsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://stellixsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "IoT Software Development", item: "https://stellixsoft.com/services/iot-software" },
  ],
};

export default function IoTSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div>
        <IoTSoftwareHero />
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }} />
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