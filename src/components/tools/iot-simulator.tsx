"use client";
import { useEffect, useReducer, useRef, useState } from "react";
import {
  canAccess,
  createWarehouse,
  scenarioInfo,
  scopeWarehouse,
  simTime,
  sites,
  warehouseReducer,
  type Role,
  type Scenario,
  type WarehouseAction,
} from "@/src/lib/tools/warehouse";
import { trackEvent } from "@/src/lib/analytics";
import { ReportActions } from "./report-actions";
import {
  OperationsPanel,
  FleetPanel,
  ServicePanel,
  IntegrationsPanel,
  ArchitecturePanel,
} from "./warehouse-panels";
const tabs = [
  "Operations",
  "Fleet health",
  "Service desk",
  "Integrations",
  "Architecture",
] as const;
type Tab = (typeof tabs)[number];
export default function IotSimulator() {
  const [state, dispatch] = useReducer(
    warehouseReducer,
    undefined,
    createWarehouse,
  );
  const [role, setRole] = useState<Role>("Administrator");
  const [site, setSite] = useState("Chicago");
  const [tab, setTab] = useState<Tab>("Operations");
  const [running, setRunning] = useState(false);
  const [query, setQuery] = useState("");
  const [zone, setZone] = useState("All");
  const [selected, setSelected] = useState("PLT-102");
  const [notice, setNotice] = useState(
    "Choose a guided scenario, or start the event stream to explore warehouse activity.",
  );
  const started = useRef(false);
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => dispatch({ type: "tick" }), 2000);
    return () => clearInterval(timer);
  }, [running]);
  const view = scopeWarehouse(state, { role, site });
  const incident = view.incidents[0];
  const guide = incident ? scenarioInfo[incident.kind] : null;
  const stage = incident
    ? ["Open", "Assigned", "Mitigated", "Resolved"].indexOf(incident.status)
    : 0;
  const asset = view.assets.find((a) => a.id === selected) ?? view.assets[0];
  const filtered = view.assets.filter(
    (a) =>
      (zone === "All" || a.zone === zone) &&
      `${a.id} ${a.description} ${a.shipment}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  function start() {
    if (!started.current) {
      started.current = true;
      trackEvent("tool_start", { tool: "iot-platform-demo" });
    }
  }
  function act(action: WarehouseAction) {
    start();
    try {
      const next = warehouseReducer(state, action);
      dispatch(action);
      if (action.type === "scenario") {
        setSite("Chicago");
        setZone("All");
        setQuery("");
        setSelected(action.scenario === "temperature" ? "PLT-103" : "PLT-102");
        setTab("Operations");
        setRunning(false);
        setNotice(
          `${scenarioInfo[action.scenario].title} loaded. Follow the three steps below.`,
        );
      } else if (action.type === "incident") {
        setNotice(
          `${action.id}: ${next.incidents.find((i) => i.id === action.id)?.status}.`,
        );
        if (action.action === "resolve")
          trackEvent("tool_complete", { tool: "iot-platform-demo" });
      } else if (action.type === "retry")
        setNotice(
          "WMS delivery acknowledged. You can now verify and close the incident.",
        );
      trackEvent("simulator_action", {
        tool: "iot-platform-demo",
        action: action.type === "incident" ? action.action : action.type,
      });
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Action unavailable.");
    }
  }
  const report = [
    "Stellix Soft — RFID warehouse operations simulation",
    `View: ${role} / ${site}; simulated UTC ${simTime(state.clock)}`,
    "Fictional data. Browser-local role filtering is not authentication or a production security boundary.",
    ...view.shipments.map(
      (s) => `${s.id}: ${s.status} / ${s.expected} expected pallets`,
    ),
    ...view.incidents.map(
      (i) => `${i.id}: ${i.title} / ${i.status} / ${i.owner}`,
    ),
    `Buffered reads: ${view.buffer.length}; recent suppressed duplicates: ${view.duplicates}`,
    "Recent audit trail:",
    ...view.audit
      .slice(0, 10)
      .map(
        (a) =>
          `${simTime(a.at)} ${a.actor}: ${a.action} ${a.before} → ${a.after}. ${a.reason}`,
      ),
  ].join("\n");
  return (
    <section
      className="ops-console"
      aria-label="Warehouse operations simulation"
    >
      <div className="ops-topbar">
        <div>
          <span className="ops-brand-mark" aria-hidden>
            ▦
          </span>
          <div>
            <strong>Stellix Operations</strong>
            <span>RFID warehouse control plane</span>
          </div>
        </div>
        <span className="ops-demo-badge">
          INTERACTIVE DEMO · FICTIONAL DATA
        </span>
      </div>
      <div className="ops-command">
        <div>
          <p className="lab-eyebrow">Operational workspace</p>
          <h2>{tab}</h2>
          <p>
            Every read, exception, and recovery belongs to one connected
            workflow.
          </p>
        </div>
        <div className="ops-stream-controls">
          <span className={running ? "ops-live" : ""}>
            {running ? "● Streaming" : "Ⅱ Paused"} · {simTime(state.clock)} UTC
          </span>
          <button
            className="lab-button secondary"
            type="button"
            onClick={() => {
              start();
              setRunning(!running);
            }}
          >
            {running ? "Pause stream" : "Start stream"}
          </button>
          <button
            className="lab-button secondary"
            type="button"
            onClick={() => act({ type: "tick" })}
          >
            Advance 5 seconds
          </button>
        </div>
      </div>
      <div className="ops-filters">
        <label className="lab-field">
          <span>Explore a role</span>
          <select
            value={role}
            onChange={(e) => {
              start();
              setRole(e.target.value as Role);
              setSite("Chicago");
              setZone("All");
              setNotice(
                e.target.value === "Administrator"
                  ? "Administrator view: all fictional tenants available."
                  : "Northstar-scoped view. Customer is read-only; Technician can manage incidents.",
              );
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
              setSite(e.target.value);
              setZone("All");
              setQuery("");
            }}
          >
            {sites
              .filter((s) => canAccess(role, s.id))
              .map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
          </select>
        </label>
        <p className="ops-scope">
          {sites.find((s) => s.id === site)?.tenant} / {site}
          <br />
          <small>
            {role === "Customer"
              ? "Read-only operations"
              : role === "Technician"
                ? "Incident response and delivery retries"
                : "Scenario controls and cross-tenant exploration"}
          </small>
        </p>
      </div>
      <div className="ops-scenarios" aria-label="Guided scenarios">
        {(Object.keys(scenarioInfo) as Scenario[]).map((kind, index) => (
          <button
            type="button"
            disabled={role !== "Administrator"}
            className={state.scenario === kind ? "active" : ""}
            key={kind}
            onClick={() => act({ type: "scenario", scenario: kind, role })}
          >
            <span>0{index + 1} / GUIDED SCENARIO</span>
            <strong>{scenarioInfo[kind].title}</strong>
            <small>
              {kind === "missing"
                ? "Trace → reconcile → release"
                : kind === "outage"
                  ? "Buffer → replay → deduplicate"
                  : "Detect → quarantine → verify"}
            </small>
          </button>
        ))}
      </div>
      {role !== "Administrator" && (
        <p className="ops-hint">
          Switch to Administrator to load a new scenario. Scenario loading
          resets the fictional dataset; operational mutations are unavailable to
          Customer.
        </p>
      )}
      {guide && (
        <div className="ops-guide">
          <div>
            <span className="lab-eyebrow">
              {stage === 3 ? "Walkthrough complete" : "Guided investigation"}
            </span>
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
          </div>
          <ol>
            {guide.steps.map((step, i) => (
              <li
                className={i < stage ? "done" : i === stage ? "current" : ""}
                key={step}
              >
                <span>{i < stage ? "✓" : i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="lab-button"
            onClick={() =>
              setTab(
                incident?.kind === "outage" && stage === 1
                  ? "Fleet health"
                  : "Service desk",
              )
            }
          >
            {stage === 3 ? "Review incident record" : "Open next action →"}
          </button>
        </div>
      )}
      <p className="ops-notice" role="status">
        {notice}
      </p>
      <nav className="ops-tabs" aria-label="Operations workspaces">
        {tabs.map((t) => (
          <button
            type="button"
            aria-current={tab === t ? "page" : undefined}
            className={tab === t ? "active" : ""}
            key={t}
            onClick={() => setTab(t)}
          >
            {t}
            {t === "Service desk" &&
              view.incidents.some((i) => i.status !== "Resolved") && (
                <span className="ops-count">1</span>
              )}
          </button>
        ))}
      </nav>
      <div className="ops-content">
        <div className="ops-kpis">
          <div>
            <span>Accounted assets</span>
            <strong>
              {view.assets.filter((a) => a.condition !== "Missing").length}
              <small> / {view.assets.length}</small>
            </strong>
            <p>Within selected warehouse</p>
          </div>
          <div>
            <span>Active incidents</span>
            <strong>
              {view.incidents.filter((i) => i.status !== "Resolved").length}
            </strong>
            <p>Rule-generated exceptions</p>
          </div>
          <div>
            <span>Edge queue</span>
            <strong>
              {view.buffer.length}
              <small> reads</small>
            </strong>
            <p>Buffered during uplink loss</p>
          </div>
          <div>
            <span>WMS delivery</span>
            <strong>
              {
                view.integrations.filter((m) => m.status === "Retry pending")
                  .length
              }
              <small> pending</small>
            </strong>
            <p>{view.duplicates} recent duplicates suppressed</p>
          </div>
        </div>
        {tab === "Operations" && (
          <OperationsPanel
            view={view}
            site={site}
            zone={zone}
            setZone={setZone}
            filtered={filtered}
            asset={asset}
            query={query}
            setQuery={setQuery}
            setSelected={setSelected}
          />
        )}
        {tab === "Fleet health" && (
          <FleetPanel view={view} incident={incident} role={role} act={act} />
        )}
        {tab === "Service desk" && (
          <ServicePanel
            view={view}
            state={state}
            role={role}
            act={act}
            setTab={setTab}
          />
        )}
        {tab === "Integrations" && (
          <IntegrationsPanel view={view} role={role} act={act} />
        )}
        {tab === "Architecture" && <ArchitecturePanel />}
        {tab !== "Architecture" && (
          <section className="ops-panel ops-events">
            <div className="ops-panel-heading">
              <h3>Event stream</h3>
              <span>Latest 12 / bounded to 100 events · simulated UTC</span>
            </div>
            {view.events.length ? (
              <ol>
                {view.events.slice(0, 12).map((e) => (
                  <li key={e.id}>
                    <time>{simTime(e.at)}</time>
                    <span className="ops-event-type">{e.type}</span>
                    <p>{e.text}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p>
                Start the stream, advance the clock, or launch a guided scenario
                to populate the event pipeline.
              </p>
            )}
          </section>
        )}
        <p className="ops-hint">
          Fictional tenants and data. Role switching illustrates scoped
          workflows; it is not authentication. Resetting or reloading clears the
          session. The event clock advances only while streaming or stepping.
        </p>
        <div className="ops-bottom-actions">
          <button
            type="button"
            className="lab-button secondary"
            onClick={() => {
              dispatch({ type: "reset" });
              setSite("Chicago");
              setTab("Operations");
              setRunning(false);
              setQuery("");
              setZone("All");
              setNotice(
                "Demo reset. All warehouses returned to their opening inventory.",
              );
            }}
          >
            Reset demo
          </button>
          <ReportActions
            tool="iot-platform-demo"
            report={report}
            inputs={{ role, site, scenario: state.scenario }}
            results={{
              incidents: view.incidents.map((i) => ({
                id: i.id,
                status: i.status,
              })),
              queuedReads: view.buffer.length,
              pendingDeliveries: view.integrations.filter(
                (m) => m.status === "Retry pending",
              ).length,
              duplicates: view.duplicates,
            }}
            cta="Discuss a platform for your hardware"
          />
        </div>
      </div>
    </section>
  );
}
