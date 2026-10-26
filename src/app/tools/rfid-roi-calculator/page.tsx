import { ToolShell } from "@/src/components/tools/tool-shell";
import RfidCalculator from "@/src/components/tools/rfid-calculator";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
export const metadata = buildPageMetadata({
  title: "RFID ROI Calculator & Asset Tracking Deployment Planner",
  description:
    "Estimate RFID asset-loss savings, inventory labor savings, implementation costs, payback, and three-year ROI with transparent assumptions.",
  path: "/tools/rfid-roi-calculator",
});
export default function Page() {
  return (
    <ToolShell
      title="RFID ROI & deployment planner"
      intro="Build an indicative business case for RFID asset tracking. Include the software and integration behind the readers, not just the tags."
      path="/tools/rfid-roi-calculator"
      service="/services/iot-software"
      serviceLabel="Explore our IoT software services"
      explanation={
        <>
          <p>
            For example, 10,000 assets worth $100 each, a 3% annual loss rate,
            and a 50% reduction imply $15,000 in annual asset-loss savings. That
            figure alone is not ROI: labor, tags, readers, software,
            integration, and recurring operations also matter.
          </p>
          <p>
            Start with a measured inventory baseline. Pilot representative
            assets and read zones, measure accuracy, then validate the software
            connections to your ERP, WMS, and support workflows. Lower read
            accuracy or slower adoption can materially reduce the modeled
            benefit.
          </p>
          <p>
            Stellix Soft focuses on the software platform behind the hardware:
            event ingestion, asset identity, dashboards, system integration, and
            operational automation.
          </p>
        </>
      }
    >
      <RfidCalculator />
    </ToolShell>
  );
}
