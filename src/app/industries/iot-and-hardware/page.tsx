import type { Metadata } from "next";
import IoTAndHardwareHero from "../../../components/sections/industries/iot-and-hardware/hero";
import IndustryStack from "../../../components/sections/industries/iot-and-hardware/industry-stack";
import SoftwareChallenge from "../../../components/sections/industries/iot-and-hardware/software-challenge";
import SoftwareSolutions from "../../../components/sections/industries/iot-and-hardware/software-solutions";
import EnterpriseIoT from "../../../components/sections/industries/iot-and-hardware/interprise-iot";
import SoftwareDivision from "../../../components/sections/industries/iot-and-hardware/software-devision";
import DeviceType from "../../../components/sections/industries/iot-and-hardware/device-type";
import IoTTechnologyStack from "../../../components/sections/industries/iot-and-hardware/iot-technology-stack";
import HardwareComparison from "../../../components/sections/industries/iot-and-hardware/hardware-comparison";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/industries/iot-and-hardware" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "IoT & Hardware Software Development - Device Management Platforms",
  description:
    "Software development for IoT and hardware companies. Device management platforms, firmware OTA updates, real-time telemetry, and fleet management.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "IoT & Hardware Software Development",
  description:
    "Software development for IoT and hardware companies. Device management platforms, firmware OTA updates, real-time telemetry, and fleet management.",
  path: PATH,
  serviceType: "IoT and hardware product software development",
  category: "Industry Solutions",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "IoT & Hardware", path: PATH },
]);

export default function IoTAndHardwarePage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <IoTAndHardwareHero />
        <IndustryStack />
        <SoftwareChallenge />
        <SoftwareSolutions />
        <EnterpriseIoT />
        <SoftwareDivision />
        <DeviceType />
        <IoTTechnologyStack />
        <HardwareComparison />
      </div>
    </>
  );
}
