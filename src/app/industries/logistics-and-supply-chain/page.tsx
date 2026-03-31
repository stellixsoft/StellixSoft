import type { Metadata } from "next";
import LogisticsAndSupplyChainHero from "../../../components/sections/industries/logistics-and-supply-chain/hero";
import ZBLines from "../../../components/sections/industries/logistics-and-supply-chain/zblines";
import ChallengesInLogistics from "../../../components/sections/industries/logistics-and-supply-chain/challenges-in-logistics";
import LogisticsSoftwareSolutions from "../../../components/sections/industries/logistics-and-supply-chain/logistics-software-solutions";
import LogisticsPlatform from "../../../components/sections/industries/logistics-and-supply-chain/logistics-platform";
import LogisticsArchitecture from "../../../components/sections/industries/logistics-and-supply-chain/logistics-architecture";
import ShipmentLifecycleFlow from "../../../components/sections/industries/logistics-and-supply-chain/shipment-lifecycle-flow";
import SystemsWeIntegrateWith from "../../../components/sections/industries/logistics-and-supply-chain/system-we-integrate-with";
import CTAPilot from "../../../components/sections/industries/logistics-and-supply-chain/cta-pilot";
import Testimonial from "../../../components/sections/industries/logistics-and-supply-chain/testimonial";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/src/lib/schema";
import { buildPageMetadata } from "@/src/lib/seo-metadata";

const PATH = "/industries/logistics-and-supply-chain" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Logistics & Supply Chain Software Development",
  description:
    "Custom logistics software. Route optimization, warehouse management, real-time tracking, and end-to-end supply chain visibility platforms.",
  path: PATH,
});

const serviceLd = serviceJsonLd({
  name: "Logistics & Supply Chain Software Development",
  description:
    "Custom logistics software. Route optimization, warehouse management, real-time tracking, and end-to-end supply chain visibility platforms.",
  path: PATH,
  serviceType: "Logistics and supply chain software development",
  category: "Industry Solutions",
});

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Logistics & Supply Chain", path: PATH },
]);

export default function LogisticsAndSupplyChainPage() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <div>
        <LogisticsAndSupplyChainHero />
        <ZBLines />
        <ChallengesInLogistics />
        <LogisticsSoftwareSolutions />
        <LogisticsPlatform />
        <LogisticsArchitecture />
        <ShipmentLifecycleFlow />
        <SystemsWeIntegrateWith />
        <Testimonial />
        <CTAPilot />
      </div>
    </>
  );
}
