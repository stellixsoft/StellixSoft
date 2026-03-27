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

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Software Development",
  description:
    "Custom logistics software. Route optimization, warehouse management, real-time tracking, and end-to-end supply chain visibility platforms.",
  alternates: {
    canonical:
      "https://stellixsoft.com/industries/logistics-and-supply-chain",
  },
};

export default function LogisticsAndSupplyChainPage() {
  return (
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
  );
}
