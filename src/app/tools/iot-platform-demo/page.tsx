import { ToolShell } from "@/src/components/tools/tool-shell";
import IotSimulator from "@/src/components/tools/iot-simulator";
import { buildPageMetadata } from "@/src/lib/seo-metadata";
export const metadata = buildPageMetadata({
  title: "Enterprise IoT Device Management Platform Demo",
  description:
    "Explore an RFID warehouse demo with asset tracing, offline event replay, temperature alerts, WMS retries, and auditable incident workflows.",
  path: "/tools/iot-platform-demo",
});
export default function Page() {
  return (
    <ToolShell
      title="Enterprise IoT operations simulator"
      intro="Investigate a missing pallet, recover an offline gateway, and contain a cold-chain exception in a connected warehouse operations demo."
      path="/tools/iot-platform-demo"
      service="/services/iot-software"
      serviceLabel="Build an IoT software platform with Stellix Soft"
      explanation={
        <>
          <p>
            Hardware manufacturers and multi-site operators need more than a
            device list. An operational platform connects telemetry,
            tenant-scoped access, incident routing, service ownership, and a
            clear recovery trail.
          </p>
          <p>
            This fictional walkthrough demonstrates the interaction between
            those concepts. Production systems additionally require
            server-enforced authorization, durable queues, device identity,
            retry policies, observability, and audited state transitions.
          </p>
          <p>
            Use the scenario to discuss your hardware protocols, fleet size,
            offline requirements, ERP integrations, and customer-support model.
            No confidential client system is shown here.
          </p>
        </>
      }
    >
      <IotSimulator />
    </ToolShell>
  );
}
