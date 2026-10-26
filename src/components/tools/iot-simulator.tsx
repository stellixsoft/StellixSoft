"use client";
import { useRef, useState } from "react";
import {
  initialDevices,
  transitionDevice,
  visibleDevices,
  type Device,
  type Role,
} from "@/src/lib/tools/simulator";
import { trackEvent } from "@/src/lib/analytics";
import { ReportActions } from "./report-actions";
export default function IotSimulator() {
  const [devices, setDevices] = useState<Device[]>(() =>
    initialDevices.map((d) => ({ ...d })),
  );
  const [role, setRole] = useState<Role>("Administrator");
  const [site, setSite] = useState("All");
  const [events, setEvents] = useState<
    { id: string; tenant: string; text: string }[]
  >([]);
  const [message, setMessage] = useState(
    "Ready. Trigger a device failure to begin the workflow.",
  );
  const sequence = useRef(0);
  const started = useRef(false);
  function start() {
    if (!started.current) {
      started.current = true;
      trackEvent("tool_start", { tool: "iot-platform-demo" });
    }
  }
  const visible = visibleDevices(devices, role, site);
  const sites = [
    ...new Set(
      devices
        .filter((d) => role === "Administrator" || d.tenant === "Northstar")
        .map((d) => d.site),
    ),
  ];
  const log = events.filter(
    (e) => role === "Administrator" || e.tenant === "Northstar",
  );
  function act(device: Device, action: "fail" | "assign" | "resolve") {
    start();
    const updated = transitionDevice(device, action, role);
    setDevices(devices.map((d) => (d.id === device.id ? updated : d)));
    const text =
      action === "fail"
        ? `${device.id} heartbeat lost. Device offline; alert raised and support ticket opened automatically.`
        : action === "assign"
          ? `${device.id} ticket assigned to the ${device.tenant} technician queue.`
          : `${device.id} repaired. Heartbeat restored, alert cleared, and ticket resolved.`;
    setEvents(
      [
        { id: String(++sequence.current), tenant: device.tenant, text },
        ...events,
      ].slice(0, 30),
    );
    setMessage(text);
    trackEvent(action === "resolve" ? "tool_complete" : "simulator_action", {
      tool: "iot-platform-demo",
      action,
    });
  }
  const report = [
    "Stellix Soft — simulated IoT operations walkthrough",
    `Role: ${role}; site: ${site}`,
    "All records are fictional. Role filtering is a browser demonstration, not authentication or a security boundary.",
    ...visible.map(
      (d) =>
        `${d.tenant} / ${d.site} / ${d.id}: ${d.status}, ticket ${d.ticket ?? "none"}`,
    ),
    "Visible event log:",
    ...log.map((e) => e.text),
  ].join("\n");
  return (
    <section className="lab-card lab-simulator">
      <div className="lab-simulator-heading">
        <div>
          <p className="lab-eyebrow">
            Simulation · fictional tenants and devices
          </p>
          <h2>Operations control room</h2>
        </div>
        <button
          className="lab-button secondary"
          type="button"
          onClick={() => {
            setDevices(initialDevices.map((d) => ({ ...d })));
            setEvents([]);
            setMessage("Simulation reset. All devices online.");
          }}
        >
          Reset simulation
        </button>
      </div>
      <p>
        Try this: fail a reader as Administrator → switch to Technician → assign
        its ticket → resolve it. Customer is read-only. Technicians and
        customers are scoped to the fictional Northstar tenant.
      </p>
      <div className="lab-toolbar">
        <label className="lab-field">
          <span>Explore a role</span>
          <select
            value={role}
            onChange={(e) => {
              start();
              setRole(e.target.value as Role);
              setSite("All");
              setMessage(`Viewing as ${e.target.value}.`);
              trackEvent("simulator_role_change", {
                tool: "iot-platform-demo",
                role: e.target.value,
              });
            }}
          >
            {(["Administrator", "Customer", "Technician"] as const).map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className="lab-field">
          <span>Warehouse</span>
          <select
            value={site}
            onChange={(e) => {
              start();
              setSite(e.target.value);
            }}
          >
            <option value="All">All permitted sites</option>
            {sites.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <div className="lab-notice">
          {role === "Administrator"
            ? "All tenants · failure injection and ticket management"
            : role === "Technician"
              ? "Northstar only · assign and resolve tickets"
              : "Northstar only · read-only monitoring"}
        </div>
      </div>
      <div className="lab-metrics">
        <div>
          <span>Visible devices</span>
          <strong>{visible.length}</strong>
        </div>
        <div>
          <span>Online</span>
          <strong>{visible.filter((d) => d.status === "Online").length}</strong>
        </div>
        <div>
          <span>Active alerts</span>
          <strong>
            {visible.filter((d) => d.status === "Offline").length}
          </strong>
        </div>
        <div>
          <span>Unresolved tickets</span>
          <strong>
            {
              visible.filter(
                (d) => d.ticket === "Open" || d.ticket === "Assigned",
              ).length
            }
          </strong>
        </div>
      </div>
      <p role="status" className="lab-notice">
        {message}
      </p>
      <div className="lab-device-grid">
        {visible.map((d) => (
          <article className="lab-device" key={d.id}>
            <div className="lab-device-top">
              <span
                className={`lab-status ${d.status === "Offline" ? "offline" : ""}`}
              >
                {d.status}
              </span>
              <span>{d.id}</span>
            </div>
            <h3>{d.name}</h3>
            <p>
              {d.tenant} · {d.site}
            </p>
            <p>
              Last simulated reading: {d.temperature}°C
              {d.status === "Offline" ? " · stale" : ""}
            </p>
            <p>
              Ticket: <strong>{d.ticket ?? "None"}</strong>
            </p>
            <div className="lab-actions">
              {role === "Administrator" && d.status === "Online" && (
                <button
                  type="button"
                  className="lab-button secondary"
                  onClick={() => act(d, "fail")}
                >
                  Simulate failure
                </button>
              )}
              {role !== "Customer" && d.ticket === "Open" && (
                <button
                  type="button"
                  className="lab-button"
                  onClick={() => act(d, "assign")}
                >
                  Assign ticket
                </button>
              )}
              {role !== "Customer" && d.ticket === "Assigned" && (
                <button
                  type="button"
                  className="lab-button"
                  onClick={() => act(d, "resolve")}
                >
                  Resolve and restore
                </button>
              )}
              {role === "Customer" && (
                <span className="lab-muted">Monitoring access only</span>
              )}
            </div>
          </article>
        ))}
      </div>
      <section className="lab-event-log">
        <h3>Automation event log</h3>
        {log.length ? (
          <ol>
            {log.map((e) => (
              <li key={e.id}>{e.text}</li>
            ))}
          </ol>
        ) : (
          <p>
            No events yet for your permitted tenants. Simulate a failure as
            Administrator to see the workflow.
          </p>
        )}
      </section>
      <p className="lab-muted">
        This demonstration runs entirely in your browser. Role switching
        illustrates tenant-scoped views; production permissions must be enforced
        on the server. No real devices, customers, service tickets, or telemetry
        are connected.
      </p>
      <ReportActions
        tool="iot-platform-demo"
        report={report}
        inputs={{ role, site }}
        results={{
          devices: visible.map((d) => ({
            id: d.id,
            status: d.status,
            ticket: d.ticket,
          })),
        }}
        cta="Discuss a platform for your hardware"
      />
    </section>
  );
}
