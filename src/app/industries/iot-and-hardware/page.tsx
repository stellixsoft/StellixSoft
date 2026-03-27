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

export const metadata: Metadata = {
  title: "IoT & Hardware Software Development - Device Management Platforms",
  description:
    "Software development for IoT and hardware companies. Device management platforms, firmware OTA updates, real-time telemetry, and fleet management.",
  alternates: {
    canonical: "https://stellixsoft.com/industries/iot-and-hardware",
  },
};

export default function IoTAndHardwarePage() {
  return (
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
  );
}