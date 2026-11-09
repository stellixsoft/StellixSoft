import type { Metadata } from "next";
import IoTSoftwareHero from "../../../components/sections/services/iot-software/hero";
import ServiceAnswerBox from "@/src/components/sections/services/service-answer-box";
import IoTHardwareSoftwareDevelopmentIntro from "../../../components/sections/services/iot-software/iot-hardware-software-development-intro";
import SoftwareSolution from "../../../components/sections/services/iot-software/software-solution";
import IoTRealWorldUseCases from "../../../components/sections/services/iot-software/iot-real-world-use-cases";
import YourHardware from "../../../components/sections/services/iot-software/your-hardware";
import IoTSoftwareForHardwareTeams from "../../../components/sections/services/iot-software/iot-software-for-hardware-teams";
import IoTCaseStudy from "../../../components/sections/services/iot-software/iot-case-study";
import IoTTechnologyExpertise from "../../../components/sections/services/iot-software/iot-technology-expertise";
import IoTBehindTheScenes from "../../../components/sections/services/iot-software/iot-behind-the-scenes";
import SolutionByDeviceType from "../../../components/sections/services/iot-software/solution-by-device-type";
import IoTWhenMakesSense from "../../../components/sections/services/iot-software/iot-when-makes-sense";
import IoTSoftwarePartner from "../../../components/sections/services/iot-software/companies-partner";
import FlexibleEngagement from "../../../components/sections/services/iot-software/flexible-engagement";
import IoTWhyCompaniesChoose from "../../../components/sections/services/iot-software/iot-why-companies-choose";
import Testimonial from "../../../components/sections/services/iot-software/testimonial";
import CTAPilot from "../../../components/sections/home/cta-pilot";
import ServiceInternalLinks from "@/src/components/sections/services/service-internal-links";
import ServiceFaqs from "@/src/components/sections/services/shared-faqs";
import { JsonLd } from "@/src/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  type FaqQuestionBlock,
  serviceJsonLd,
} from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/services/iot-software" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "IoT Software Development Services & Solutions",
  description:
    "IoT software development solutions for hardware teams: RFID reader and tag workflows, device management, telemetry, OTA updates and the portals around them. Platforms from about $40k.",
  path: PATH,
  keywords: [
    "IoT software development solutions",
    "IoT software development services",
    "IoT software services",
    "IoT software solutions",
    "RFID software development",
    "IoT application development",
  ],
});

const faqMainEntity: FaqQuestionBlock[] = [
  {
    "@type": "Question",
    name: "What do your IoT software development solutions include?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The software around your devices: RFID reader and tag workflows, asset and inventory tracking, device management, telemetry pipelines, alerts, dashboards, customer portals and the APIs that connect devices to your business systems. We work beside your hardware and firmware teams and do not manufacture devices or sell tags.",
    },
  },
  {
    "@type": "Question",
    name: "Can you build software for our existing hardware devices?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We specialize in building cloud platforms and management dashboards for hardware companies. Whether you have sensors, gateways, industrial controllers, or consumer devices, we build the software layer that connects, monitors, and manages your fleet.",
    },
  },
  {
    "@type": "Question",
    name: "How do you handle real-time data from thousands of devices?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We architect IoT platforms using message brokers (MQTT, Kafka), time-series databases, and event-driven processing pipelines. Our systems handle millions of data points per minute with sub-second latency for alerting and dashboards.",
    },
  },
  {
    "@type": "Question",
    name: "What about over-the-air (OTA) firmware updates?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We build OTA update systems with staged rollouts, version management, rollback capability, and integrity verification. Updates can be targeted by device group, location, or firmware version to minimize risk.",
    },
  },
  {
    "@type": "Question",
    name: "How do you ensure IoT platform security?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We implement device authentication (X.509 certificates, secure boot), encrypted communication (TLS/DTLS), network segmentation, and anomaly detection. Every device has a unique identity, and all data transmission is encrypted end-to-end.",
    },
  },
  {
    "@type": "Question",
    name: "Can you integrate IoT data with our existing enterprise systems?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We build data pipelines that feed IoT telemetry into your ERP, CRM, BI tools, or custom dashboards. Whether it's predictive maintenance alerts going to your service team or inventory data flowing to your supply chain system, we handle the integration.",
    },
  },
];

const faqItems = [
  {
    id: "iot-solutions-scope",
    question: "What do your IoT software development solutions include?",
    answer:
      "The software around your devices: RFID reader and tag workflows, asset and inventory tracking, device management, telemetry pipelines, alerts, dashboards, customer portals and the APIs that connect devices to your business systems. We work beside your hardware and firmware teams and do not manufacture devices or sell tags.",
  },
  {
    id: "iot-existing-hardware",
    question: "Can you build software for our existing hardware devices?",
    answer:
      "Yes. We specialize in building cloud platforms and management dashboards for hardware companies. Whether you have sensors, gateways, industrial controllers, or consumer devices, we build the software layer that connects, monitors, and manages your fleet.",
  },
  {
    id: "iot-realtime-data",
    question:
      "How do you handle real-time data from thousands of devices?",
    answer:
      "We architect IoT platforms using message brokers (MQTT, Kafka), time-series databases, and event-driven processing pipelines. Our systems handle millions of data points per minute with sub-second latency for alerting and dashboards.",
  },
  {
    id: "iot-ota-updates",
    question: "What about over-the-air (OTA) firmware updates?",
    answer:
      "We build OTA update systems with staged rollouts, version management, rollback capability, and integrity verification. Updates can be targeted by device group, location, or firmware version to minimize risk.",
  },
  {
    id: "iot-security",
    question: "How do you ensure IoT platform security?",
    answer:
      "We implement device authentication (X.509 certificates, secure boot), encrypted communication (TLS/DTLS), network segmentation, and anomaly detection. Every device has a unique identity, and all data transmission is encrypted end-to-end.",
  },
  {
    id: "iot-enterprise-integration",
    question:
      "Can you integrate IoT data with our existing enterprise systems?",
    answer:
      "Yes. We build data pipelines that feed IoT telemetry into your ERP, CRM, BI tools, or custom dashboards. Whether it's predictive maintenance alerts going to your service team or inventory data flowing to your supply chain system, we handle the integration.",
  },
];

const serviceLd = serviceJsonLd({
  name: "IoT Software Development",
  description:
    "End-to-end IoT platform development - device management, real-time telemetry, edge computing, and fleet management dashboards.",
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
      <JsonLd data={faqPageJsonLd(faqMainEntity)} />
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <IoTSoftwareHero />
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />
        <ServiceAnswerBox
          heading="IoT software development solutions, built around RFID and connected devices"
          answer="Stellix Soft builds the software layer for hardware companies and operations teams: RFID reader and tag workflows, asset and inventory tracking, device management, telemetry, alerts and the portals and APIs around them. A typical platform is about $40k to $100k over 3 to 6 months. We work beside your hardware and firmware teams."
          facts={[
            { label: "Who it's for", value: "Hardware makers, warehouses, logistics and manufacturing teams running RFID or connected devices" },
            { label: "Typical cost", value: "About $40k to $100k for a platform; pilots often around $10k to $15k" },
            { label: "Timeline", value: "3 to 6 months for a platform, released in phases" },
            { label: "Proof", value: "Long-running work for a hardware maker of RFID systems, IP cameras and networking gear" },
          ]}
          proof={{ href: "/tools/rfid-roi-calculator", label: "Try the RFID ROI calculator" }}
        />
        <IoTHardwareSoftwareDevelopmentIntro />
        <SoftwareSolution />
        <IoTRealWorldUseCases />
        <YourHardware />
        <IoTSoftwareForHardwareTeams />
        <IoTCaseStudy />
        <IoTTechnologyExpertise />
        <IoTBehindTheScenes />
        <SolutionByDeviceType />
        <IoTWhenMakesSense />
        <IoTSoftwarePartner />
        <Testimonial />
        <FlexibleEngagement />
        <IoTWhyCompaniesChoose />
        <ServiceFaqs
          title="IoT Software Development FAQs"
          items={faqItems}
        />
        <ServiceInternalLinks slug="iot-software" />
        <CTAPilot />
      </div>
    </>
  );
}
