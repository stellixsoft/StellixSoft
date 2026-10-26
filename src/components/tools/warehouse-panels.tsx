"use client";
import {
  simTime,
  zones,
  type Asset,
  type Incident,
  type Role,
  type WarehouseAction,
  type WarehouseState,
} from "@/src/lib/tools/warehouse";

export function OperationsPanel({
  view,
  site,
  zone,
  setZone,
  filtered,
  asset,
  query,
  setQuery,
  setSelected,
}: {
  view: WarehouseState;
  site: string;
  zone: string;
  setZone: (s: string) => void;
  filtered: Asset[];
  asset: Asset | undefined;
  query: string;
  setQuery: (s: string) => void;
  setSelected: (s: string) => void;
}) {
  return (
    <>
      <div className="ops-main-grid">
        <section className="ops-panel">
          <div className="ops-panel-heading">
            <div>
              <h3>Warehouse digital floor</h3>
              <p>{site} · select a zone to filter the asset register</p>
            </div>
            <button
              type="button"
              className="ops-link-button"
              onClick={() => setZone("All")}
            >
              Show all zones
            </button>
          </div>
          <div className="ops-floor" aria-label="Warehouse zones">
            <div className="ops-floor-aisle" aria-hidden>
              ASSET FLOW →
            </div>
            {zones.map((z, i) => (
              <button
                className={`ops-zone ${zone === z ? "selected" : ""} ${view.assets.some((a) => a.zone === z && a.condition !== "Available") ? "attention" : ""}`}
                key={z}
                type="button"
                onClick={() => setZone(z)}
              >
                <span className="ops-zone-index">ZONE 0{i + 1}</span>
                <strong>{z}</strong>
                <span>
                  {view.assets.filter((a) => a.zone === z).length} pallets
                </span>
                <div className="ops-pallets" aria-hidden>
                  {view.assets
                    .filter((a) => a.zone === z)
                    .map((a) => (
                      <span
                        key={a.id}
                        className={
                          a.condition === "Available" ? "" : "exception"
                        }
                      >
                        ▥
                      </span>
                    ))}
                </div>
              </button>
            ))}
          </div>
          <div className="ops-map-legend">
            <span>● Available</span>
            <span>● Exception / quarantine</span>
            <span>Local reads → gateway → WMS</span>
          </div>
        </section>
        <section className="ops-panel">
          <h3>Shipment readiness</h3>
          {view.shipments.map((s) => (
            <article className="ops-shipment" key={s.id}>
              <div>
                <strong>{s.id}</strong>
                <span
                  className={`ops-pill ${s.status === "Held" ? "alert" : ""}`}
                >
                  {s.status}
                </span>
              </div>
              <p>{s.destination}</p>
              <div className="ops-progress">
                <span
                  style={{
                    width: `${(view.assets.filter((a) => a.shipment === s.id && a.condition === "Available").length / s.expected) * 100}%`,
                  }}
                />
              </div>
              <p>
                {
                  view.assets.filter(
                    (a) => a.shipment === s.id && a.condition === "Available",
                  ).length
                }{" "}
                / {s.expected} pallets available for dispatch
              </p>
              {s.status === "Held" && (
                <small>
                  Release requires reconciliation or independent quality
                  disposition.
                </small>
              )}
            </article>
          ))}
          <h4>Signal path</h4>
          <p className="ops-signal-path">
            Reader → Edge gateway → Event rules → WMS
          </p>
          <p className="lab-muted">
            {view.devices.some((d) => d.kind === "Gateway" && !d.online)
              ? "Uplink offline. Reads remain buffered locally."
              : "Gateway connected. Unique reads update asset positions and integration records."}
          </p>
        </section>
      </div>
      <div className="ops-main-grid">
        <section className="ops-panel">
          <div className="ops-panel-heading">
            <h3>Asset register</h3>
            <span>{zone === "All" ? "All zones" : zone}</span>
          </div>
          <label className="lab-field">
            <span>Search asset or shipment</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try PLT-102 or SH-1042"
            />
          </label>
          <div className="ops-asset-list">
            {filtered.map((a) => (
              <button
                type="button"
                key={a.id}
                className={asset?.id === a.id ? "selected" : ""}
                onClick={() => setSelected(a.id)}
              >
                <span>
                  <strong>{a.id}</strong>
                  <small>{a.description}</small>
                </span>
                <span>
                  {a.zone}
                  <small
                    className={
                      a.condition === "Available" ? "" : "ops-text-alert"
                    }
                  >
                    {a.condition}
                  </small>
                </span>
              </button>
            ))}
            {!filtered.length && (
              <p>
                No assets match this search and zone. Select Show all zones to
                broaden the search.
              </p>
            )}
          </div>
        </section>
        <section className="ops-panel" aria-label="Asset investigation">
          <span className="lab-eyebrow">Asset investigation</span>
          <h3>{asset?.id} · movement history</h3>
          <p>{asset?.description}</p>
          <dl className="ops-detail-list">
            <div>
              <dt>Shipment</dt>
              <dd>{asset?.shipment}</dd>
            </div>
            <div>
              <dt>Last known zone</dt>
              <dd>{asset?.zone}</dd>
            </div>
            <div>
              <dt>Disposition</dt>
              <dd>{asset?.condition}</dd>
            </div>
          </dl>
          <ol className="ops-timeline">
            {asset?.history.map((h, i) => (
              <li key={`${h.at}-${i}`}>
                <time>{simTime(h.at)} UTC</time>
                <strong>{h.zone}</strong>
                <p>{h.reason}</p>
              </li>
            ))}
          </ol>
          {asset?.condition === "Missing" && (
            <p className="ops-alert-note">
              No dispatch confirmation. Last verified location is Storage. Open
              Service desk to assign and reconcile the exception.
            </p>
          )}
        </section>
      </div>
    </>
  );
}

export function FleetPanel({
  view,
  incident,
  role,
  act,
}: {
  view: WarehouseState;
  incident: Incident | undefined;
  role: Role;
  act: (a: WarehouseAction) => void;
}) {
  return (
    <>
      <section className="ops-panel">
        <div className="ops-panel-heading">
          <div>
            <h3>Device fleet and edge recovery</h3>
            <p>
              Heartbeats, sensor values, and replay state share the same
              simulated clock.
            </p>
          </div>
          <span className="ops-pill">
            {view.devices.filter((d) => d.online).length}/{view.devices.length}{" "}
            locally healthy
          </span>
        </div>
        <div className="ops-fleet-grid">
          {view.devices.map((d) => (
            <article className="ops-device" key={d.id}>
              <span className={`ops-pill ${!d.online ? "alert" : ""}`}>
                {d.online ? "Online" : "Uplink offline"}
              </span>
              <h4>{d.name}</h4>
              <p>
                {d.id} · {d.kind}
              </p>
              <strong>
                {d.temperature !== null
                  ? `${d.temperature}°C`
                  : d.kind === "Gateway"
                    ? `${view.buffer.length} queued reads`
                    : "RFID / EPC events"}
              </strong>
              <p>Last cloud heartbeat {simTime(d.lastSeen)} UTC</p>
              {d.kind === "Sensor" && (
                <small>
                  Alert threshold: above 8°C. Recovery does not authorize
                  product release.
                </small>
              )}
              {d.kind === "Gateway" && (
                <small>
                  Bounded demo queue: 30 reads. Replay preserves order and
                  suppresses duplicate event keys.
                </small>
              )}
            </article>
          ))}
        </div>
        {incident?.kind === "outage" && (
          <div className="ops-recovery">
            <h4>Recovery checklist</h4>
            <p>
              Assign the incident before reconnecting. Replay processes the
              queued unique reads and injects one duplicate to demonstrate
              idempotent handling.
            </p>
            <IncidentButtons
              incident={incident}
              role={role}
              pending={false}
              act={act}
            />
          </div>
        )}
      </section>
      <section className="ops-panel">
        <h3>Edge buffer</h3>
        {view.buffer.length ? (
          <div className="ops-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Read key</th>
                  <th>Asset</th>
                  <th>Observed zone / time</th>
                </tr>
              </thead>
              <tbody>
                {view.buffer.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.asset}</td>
                    <td>
                      {r.zone}
                      <small>{simTime(r.observedAt)} UTC</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>
            No pending local reads. After recovery, inspect the event stream for
            replay and deduplication records.
          </p>
        )}
      </section>
    </>
  );
}

export function ServicePanel({
  view,
  state,
  role,
  act,
  setTab,
}: {
  view: WarehouseState;
  state: WarehouseState;
  role: Role;
  act: (a: WarehouseAction) => void;
  setTab: (t: "Integrations") => void;
}) {
  return (
    <>
      <section className="ops-panel">
        <h3>Incident investigation and response</h3>
        {view.incidents.length ? (
          view.incidents.map((i) => (
            <article className="ops-incident" key={i.id}>
              <div className="ops-panel-heading">
                <h4>
                  {i.id} · {i.title}
                </h4>
                <div>
                  <span className="ops-pill alert">{i.priority}</span>{" "}
                  <span className="ops-pill">{i.status}</span>
                </div>
              </div>
              <p>{i.reason}</p>
              <dl className="ops-detail-list">
                <div>
                  <dt>Owner</dt>
                  <dd>{i.owner}</dd>
                </div>
                <div>
                  <dt>Opened</dt>
                  <dd>{simTime(i.opened)} UTC</dd>
                </div>
                <div>
                  <dt>Affected entity</dt>
                  <dd>{i.asset}</dd>
                </div>
                <div>
                  <dt>Response objective</dt>
                  <dd>
                    {i.priority === "P1"
                      ? "15 simulated minutes"
                      : "60 simulated minutes"}
                  </dd>
                </div>
              </dl>
              <p className="lab-muted">
                Illustrative response target, not a contractual SLA. Elapsed
                simulation time:{" "}
                {Math.floor(((i.resolved ?? state.clock) - i.opened) / 60)}m{" "}
                {((i.resolved ?? state.clock) - i.opened) % 60}s.
              </p>
              {i.kind === "temperature" && (
                <p className="ops-alert-note">
                  PLT-103 remains quarantined even after cooling recovers.
                  Closing the technical incident does not release the shipment.
                </p>
              )}
              <IncidentButtons
                incident={i}
                role={role}
                pending={view.integrations.some(
                  (m) => m.status === "Retry pending",
                )}
                act={act}
              />
              {i.status === "Mitigated" &&
                view.integrations.some((m) => m.status === "Retry pending") && (
                  <button
                    className="ops-link-button"
                    type="button"
                    onClick={() => setTab("Integrations")}
                  >
                    Inspect pending WMS delivery →
                  </button>
                )}
            </article>
          ))
        ) : (
          <div className="ops-empty">
            <h4>No active scenario at this warehouse</h4>
            <p>
              Load a guided scenario as Administrator to open an incident with
              linked assets and integration activity.
            </p>
          </div>
        )}
      </section>
      <section className="ops-panel">
        <h3>Audit trail</h3>
        <p>
          Simulated actor, state transition, reason, and timestamp for every
          operational mutation.
        </p>
        {view.audit.length ? (
          <div className="ops-audit-list">
            {view.audit.map((a) => (
              <article key={a.id}>
                <time>{simTime(a.at)} UTC</time>
                <div>
                  <strong>
                    {a.actor} · {a.action}
                  </strong>
                  <p>
                    {a.before} → {a.after}
                  </p>
                  <small>{a.reason}</small>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>No mutations recorded yet.</p>
        )}
      </section>
    </>
  );
}

export function IntegrationsPanel({
  view,
  role,
  act,
}: {
  view: WarehouseState;
  role: Role;
  act: (a: WarehouseAction) => void;
}) {
  return (
    <section className="ops-panel">
      <div className="ops-panel-heading">
        <div>
          <h3>WMS integration delivery</h3>
          <p>
            Fictional acknowledgements and retries. No external system is
            contacted.
          </p>
        </div>
        <span className="ops-pill">
          {view.integrations.filter((m) => m.status === "Delivered").length}{" "}
          recent acknowledgements
        </span>
      </div>
      {view.integrations.length ? (
        <div className="ops-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Message / time</th>
                <th>Destination / payload</th>
                <th>Delivery</th>
                <th>Attempts</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {view.integrations.map((m) => (
                <tr key={m.id}>
                  <td>
                    {m.id}
                    <small>{simTime(m.at)} UTC</small>
                  </td>
                  <td>
                    <strong>{m.target}</strong>
                    <small>{m.payload}</small>
                    <small>Source key: {m.sourceKey}</small>
                  </td>
                  <td>
                    <span
                      className={`ops-pill ${m.status === "Retry pending" ? "alert" : ""}`}
                    >
                      {m.status}
                    </span>
                  </td>
                  <td>{m.attempts}</td>
                  <td>
                    {m.status === "Retry pending" && role !== "Customer" ? (
                      <button
                        type="button"
                        className="lab-button secondary"
                        onClick={() => act({ type: "retry", id: m.id, role })}
                      >
                        Retry delivery
                      </button>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Advance the stream or launch a scenario to generate WMS messages.</p>
      )}
      <p className="lab-muted">
        The offline scenario replays a duplicate event key. The event stream
        records its suppression; a second integration message is not produced
        for that read.
      </p>
    </section>
  );
}

export function ArchitecturePanel() {
  return (
    <section className="ops-panel">
      <span className="lab-eyebrow">Design decisions behind the demo</span>
      <h3>From physical signal to an accountable business action</h3>
      <div className="ops-architecture">
        {[
          [
            "01",
            "Collect at the edge",
            "Readers produce keyed events. Gateways retain reads during an uplink outage.",
          ],
          [
            "02",
            "Reconcile events",
            "Ordered replay, duplicate suppression, and bounded queues protect downstream state.",
          ],
          [
            "03",
            "Apply business rules",
            "Inventory exceptions, temperature limits, and shipment holds create actionable incidents.",
          ],
          [
            "04",
            "Deliver and verify",
            "WMS acknowledgements, explicit retries, and an audit trail make recovery visible.",
          ],
        ].map(([n, title, detail]) => (
          <article key={n}>
            <span>{n}</span>
            <h4>{title}</h4>
            <p>{detail}</p>
          </article>
        ))}
      </div>
      <div className="ops-main-grid">
        <div>
          <h4>Implemented in this simulation</h4>
          <ul>
            <li>Deterministic event clock and shared state transitions</li>
            <li>Bounded edge queue, ordered replay, duplicate suppression</li>
            <li>
              Asset history, shipment holds, incident gates, and delivery
              retries
            </li>
            <li>Role-scoped views and mutation guards in browser logic</li>
          </ul>
        </div>
        <div>
          <h4>Required for a production deployment</h4>
          <ul>
            <li>
              Server-enforced identity, authorization, and tenant isolation
            </li>
            <li>
              Durable broker, transactional storage, and device authentication
            </li>
            <li>
              Operational monitoring, retention policies, and immutable audit
              storage
            </li>
            <li>
              Site-specific hardware validation and tested ERP/WMS contracts
            </li>
          </ul>
        </div>
      </div>
      <p className="ops-alert-note">
        This public demonstration is browser-local. It is not evidence of
        production security certification, measured availability, or a connected
        client deployment.
      </p>
    </section>
  );
}

function IncidentButtons({
  incident,
  role,
  pending,
  act,
}: {
  incident: Incident;
  role: Role;
  pending: boolean;
  act: (a: WarehouseAction) => void;
}) {
  if (role === "Customer")
    return (
      <p className="ops-hint">
        Customer view is read-only. Switch to Technician or Administrator to
        respond.
      </p>
    );
  if (incident.status === "Resolved")
    return (
      <p className="ops-success">
        ✓ Recovery verified. Incident closed with an audit trail.
      </p>
    );
  const action =
    incident.status === "Open"
      ? "assign"
      : incident.status === "Assigned"
        ? "mitigate"
        : "resolve";
  const label =
    action === "assign"
      ? "Assign incident"
      : action === "mitigate"
        ? incident.kind === "missing"
          ? "Locate and reconcile pallet"
          : incident.kind === "outage"
            ? "Reconnect and replay reads"
            : "Contain and restore cooling"
        : incident.kind === "missing"
          ? "Verify and release shipment"
          : "Verify recovery and close";
  return (
    <div className="lab-actions">
      <button
        className="lab-button"
        type="button"
        disabled={action === "resolve" && pending}
        onClick={() => act({ type: "incident", id: incident.id, action, role })}
      >
        {label}
      </button>
      {action === "resolve" && pending && (
        <span className="ops-text-alert">
          WMS acknowledgement required before closure.
        </span>
      )}
    </div>
  );
}
