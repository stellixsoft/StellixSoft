export type Role = "Administrator" | "Customer" | "Technician";
export type Scenario = "missing" | "outage" | "temperature";
export type Scope = { role: Role; site: string };
export type Device = {
  id: string;
  site: string;
  name: string;
  kind: "Reader" | "Gateway" | "Sensor";
  online: boolean;
  temperature: number | null;
  lastSeen: number;
};
export type Asset = {
  id: string;
  site: string;
  shipment: string;
  description: string;
  zone: string;
  condition: "Available" | "Missing" | "Quarantined";
  history: { at: number; zone: string; reason: string }[];
};
export type Shipment = {
  id: string;
  site: string;
  destination: string;
  expected: number;
  status: "Ready" | "Held" | "Released";
};
export type Incident = {
  id: string;
  site: string;
  kind: Scenario;
  title: string;
  priority: "P1" | "P2";
  status: "Open" | "Assigned" | "Mitigated" | "Resolved";
  owner: string;
  asset: string;
  reason: string;
  opened: number;
  resolved: number | null;
};
export type Event = {
  id: string;
  site: string;
  at: number;
  type: string;
  text: string;
};
export type Integration = {
  id: string;
  site: string;
  target: "ERP" | "WMS";
  payload: string;
  sourceKey: string;
  status: "Delivered" | "Retry pending";
  attempts: number;
  at: number;
};
export type Audit = {
  id: string;
  site: string;
  at: number;
  actor: string;
  action: string;
  before: string;
  after: string;
  reason: string;
};
type Read = {
  observedAt: number;
  id: string;
  site: string;
  asset: string;
  zone: string;
};
export type WarehouseState = {
  clock: number;
  sequence: number;
  devices: Device[];
  assets: Asset[];
  shipments: Shipment[];
  incidents: Incident[];
  events: Event[];
  integrations: Integration[];
  audit: Audit[];
  buffer: Read[];
  seen: string[];
  reads: number;
  duplicates: number;
  scenario: Scenario | null;
};
export const sites = [
  { id: "Chicago", tenant: "Northstar", label: "Chicago · Distribution" },
  { id: "Austin", tenant: "Northstar", label: "Austin · Fulfillment" },
  { id: "Rotterdam", tenant: "Meridian", label: "Rotterdam · European hub" },
];
export const zones = ["Receiving", "Storage", "Cold chain", "Dispatch"];
export const scenarioInfo: Record<
  Scenario,
  { title: string; description: string; impact: string; steps: string[] }
> = {
  missing: {
    title: "Trace a missing pallet",
    description:
      "A shipment is blocked because a pallet was not read at dispatch. Follow its last known location and reconcile the load.",
    impact: "Shipment SH-1042 · 1 of 3 pallets unaccounted for",
    steps: [
      "Assign the exception",
      "Locate the pallet in Storage",
      "Reconcile the shipment and release",
    ],
  },
  outage: {
    title: "Recover an offline warehouse",
    description:
      "The gateway loses its uplink. Local RFID reads buffer at the edge; reconnect, replay, and suppress a duplicate.",
    impact: "Chicago uplink · edge collection continues",
    steps: [
      "Assign the outage",
      "Reconnect and replay buffered reads",
      "Verify delivery and close the incident",
    ],
  },
  temperature: {
    title: "Contain a temperature excursion",
    description:
      "A cold-chain sensor crosses 8°C. Quarantine the pallet, route an exception to WMS, and record a controlled recovery.",
    impact: "Pallet PLT-103 · cold-chain shipment on hold",
    steps: [
      "Assign the cold-chain alert",
      "Contain and restore cooling",
      "Retry WMS delivery, verify, and close",
    ],
  },
};
export function canAccess(role: Role, site: string) {
  return (
    role === "Administrator" ||
    sites.some((s) => s.id === site && s.tenant === "Northstar")
  );
}
export function createWarehouse(): WarehouseState {
  const devices: Device[] = sites.flatMap((s, i) => [
    {
      id: `GW-${i + 1}00`,
      site: s.id,
      name: "Edge gateway",
      kind: "Gateway",
      online: true,
      temperature: null,
      lastSeen: 0,
    },
    {
      id: `RD-${i + 1}01`,
      site: s.id,
      name: "Dock RFID reader",
      kind: "Reader",
      online: true,
      temperature: null,
      lastSeen: 0,
    },
    {
      id: `SN-${i + 1}02`,
      site: s.id,
      name: "Cold-chain sensor",
      kind: "Sensor",
      online: true,
      temperature: 4,
      lastSeen: 0,
    },
  ]);
  const assets: Asset[] = sites.flatMap((s, i) =>
    [1, 2, 3].map((n) => ({
      id: `PLT-${i + 1}0${n}`,
      site: s.id,
      shipment: `SH-${i === 0 ? "1042" : i === 1 ? "2081" : "3094"}`,
      description:
        n === 3
          ? "Temperature-sensitive components"
          : n === 2
            ? "Industrial controller assemblies"
            : "RFID gateway components",
      zone: n === 3 ? "Cold chain" : n === 2 ? "Storage" : "Receiving",
      condition: "Available",
      history: [
        {
          at: 0,
          zone: n === 3 ? "Cold chain" : n === 2 ? "Storage" : "Receiving",
          reason: "Opening inventory verified",
        },
      ],
    })),
  );
  return {
    clock: 0,
    sequence: 0,
    devices,
    assets,
    shipments: sites.map((s, i) => ({
      id: `SH-${i === 0 ? "1042" : i === 1 ? "2081" : "3094"}`,
      site: s.id,
      destination:
        i === 0
          ? "Milwaukee assembly plant"
          : i === 1
            ? "Dallas distribution center"
            : "Antwerp service center",
      expected: 3,
      status: "Ready",
    })),
    incidents: [],
    events: [],
    integrations: [],
    audit: [],
    buffer: [],
    seen: [],
    reads: 0,
    duplicates: 0,
    scenario: null,
  };
}
function event(s: WarehouseState, site: string, type: string, text: string) {
  s.events.unshift({ id: `EV-${++s.sequence}`, site, at: s.clock, type, text });
  s.events = s.events.slice(0, 100);
}
function audit(
  s: WarehouseState,
  site: string,
  actor: string,
  action: string,
  before: string,
  after: string,
  reason: string,
) {
  s.audit.unshift({
    id: `AU-${++s.sequence}`,
    site,
    at: s.clock,
    actor,
    action,
    before,
    after,
    reason,
  });
  s.audit = s.audit.slice(0, 100);
}
function integrate(
  s: WarehouseState,
  site: string,
  payload: string,
  fail = false,
  sourceKey?: string,
) {
  s.integrations.unshift({
    id: `MSG-${++s.sequence}`,
    site,
    target: "WMS",
    payload,
    sourceKey: sourceKey ?? `RULE-${s.sequence}`,
    status: fail ? "Retry pending" : "Delivered",
    attempts: 1,
    at: s.clock,
  });
  s.integrations = s.integrations.slice(0, 60);
}
function applyRead(s: WarehouseState, read: Read) {
  if (s.seen.includes(read.id)) {
    s.duplicates++;
    event(
      s,
      read.site,
      "Deduplicated",
      `${read.id} already processed; duplicate suppressed without another WMS update.`,
    );
    return;
  }
  s.seen.push(read.id);
  s.seen = s.seen.slice(-400);
  s.reads++;
  const asset = s.assets.find((a) => a.id === read.asset)!;
  asset.zone = read.zone;
  asset.history.unshift({
    at: read.observedAt,
    zone: read.zone,
    reason: `RFID read ${read.id}`,
  });
  asset.history = asset.history.slice(0, 20);
  event(
    s,
    read.site,
    "RFID read",
    `${asset.id} detected in ${read.zone}. Read key ${read.id}; observed ${simTime(read.observedAt)} UTC.`,
  );
  integrate(
    s,
    read.site,
    `${asset.id} location → ${read.zone}`,
    false,
    read.id,
  );
}
export type WarehouseAction =
  | { type: "reset" }
  | { type: "tick" }
  | { type: "scenario"; scenario: Scenario; role: Role }
  | {
      type: "incident";
      id: string;
      action: "assign" | "mitigate" | "resolve";
      role: Role;
    }
  | { type: "retry"; id: string; role: Role };
export function warehouseReducer(
  current: WarehouseState,
  action: WarehouseAction,
): WarehouseState {
  if (action.type === "reset") return createWarehouse();
  if (action.type === "scenario") {
    if (action.role !== "Administrator")
      throw new Error("Only Administrator can inject scenarios");
    const s = createWarehouse();
    s.scenario = action.scenario;
    const incident: Incident = {
      id: "INC-1042",
      site: "Chicago",
      kind: action.scenario,
      title: scenarioInfo[action.scenario].title,
      priority: action.scenario === "missing" ? "P2" : "P1",
      status: "Open",
      owner: "Unassigned",
      asset:
        action.scenario === "missing"
          ? "PLT-102"
          : action.scenario === "temperature"
            ? "PLT-103"
            : "GW-100",
      reason: scenarioInfo[action.scenario].impact,
      opened: 0,
      resolved: null,
    };
    s.incidents.push(incident);
    if (action.scenario === "missing") {
      s.assets.find((a) => a.id === "PLT-102")!.condition = "Missing";
      s.shipments[0].status = "Held";
    }
    if (action.scenario === "outage") {
      s.devices[0].online = false;
      for (let i = 0; i < 3; i++)
        s.buffer.push({
          id: `EDGE-${i}`,
          observedAt: 0,
          site: "Chicago",
          asset: "PLT-101",
          zone: zones[i],
        });
    }
    if (action.scenario === "temperature") {
      s.devices[2].temperature = 11.8;
      s.assets[2].condition = "Quarantined";
      s.shipments[0].status = "Held";
      integrate(s, "Chicago", "PLT-103 quarantine / temperature 11.8°C", true);
    }
    event(
      s,
      "Chicago",
      "Alert",
      `${incident.id}: ${incident.reason}. Incident opened automatically.`,
    );
    audit(
      s,
      "Chicago",
      "Rule engine",
      "Open incident",
      "Normal operation",
      "Open",
      incident.reason,
    );
    return s;
  }
  const s = structuredClone(current);
  if (action.type === "tick") {
    s.clock += 5;
    for (const device of s.devices)
      if (
        device.online &&
        !s.devices.some(
          (g) => g.site === device.site && g.kind === "Gateway" && !g.online,
        )
      )
        device.lastSeen = s.clock;
    const site = sites[(s.clock / 5 - 1) % sites.length].id;
    const asset = s.assets.find((a) => a.site === site && a.id.endsWith("01"))!;
    const read = {
      id: `READ-${s.clock}`,
      observedAt: s.clock,
      site,
      asset: asset.id,
      zone: zones[Math.floor(s.clock / 15) % zones.length],
    };
    if (
      s.devices.some(
        (d) => d.site === site && d.kind === "Gateway" && !d.online,
      )
    ) {
      if (s.buffer.length < 30) {
        s.buffer.push(read);
        event(
          s,
          site,
          "Buffered",
          `${asset.id} read retained at edge; uplink offline (${s.buffer.length} queued).`,
        );
      } else
        event(
          s,
          site,
          "Backpressure",
          "Demo buffer capacity reached (30); collection paused until recovery.",
        );
    } else applyRead(s, read);
    return s;
  }
  if (action.role === "Customer") throw new Error("Customer is read-only");
  if (action.type === "retry") {
    const message = s.integrations.find((m) => m.id === action.id);
    if (!message || !canAccess(action.role, message.site))
      throw new Error("Message outside permitted scope");
    if (message.status !== "Retry pending")
      throw new Error("Only failed delivery can retry");
    message.status = "Delivered";
    message.attempts++;
    message.at = s.clock;
    audit(
      s,
      message.site,
      action.role,
      "Retry integration",
      "Retry pending",
      "Delivered",
      message.id,
    );
    event(
      s,
      message.site,
      "Integration",
      `${message.id} acknowledged by WMS on attempt ${message.attempts}.`,
    );
    return s;
  }
  const incident = s.incidents.find((i) => i.id === action.id);
  if (!incident || !canAccess(action.role, incident.site))
    throw new Error("Incident outside permitted scope");
  const before = incident.status;
  if (action.action === "assign" && incident.status === "Open") {
    incident.status = "Assigned";
    incident.owner =
      action.role === "Technician"
        ? "Northstar · on-call technician"
        : "Northstar · operations lead";
  } else if (action.action === "mitigate" && incident.status === "Assigned") {
    if (incident.kind === "missing") {
      const asset = s.assets.find((a) => a.id === incident.asset)!;
      asset.condition = "Available";
      asset.zone = "Dispatch";
      asset.history.unshift({
        at: s.clock,
        zone: "Dispatch",
        reason:
          "Operator verified Storage location and reconciled dispatch scan",
      });
      integrate(s, incident.site, `${asset.id} reconciled at dispatch`);
      event(
        s,
        incident.site,
        "Reconciled",
        `${asset.id} found in Storage and verified at Dispatch. All 3 expected pallets accounted for.`,
      );
    }
    if (incident.kind === "outage") {
      s.devices.find((d) => d.id === incident.asset)!.online = true;
      for (const device of s.devices.filter((d) => d.site === incident.site))
        device.lastSeen = s.clock;
      const queue = s.buffer.filter((r) => r.site === incident.site);
      for (const read of queue) applyRead(s, read);
      if (queue.length) applyRead(s, queue[0]);
      s.buffer = s.buffer.filter((r) => r.site !== incident.site);
      event(
        s,
        incident.site,
        "Recovery",
        `${queue.length} buffered reads replayed in order; 1 duplicate suppressed. Uplink restored.`,
      );
    }
    if (incident.kind === "temperature") {
      s.devices.find(
        (d) => d.site === incident.site && d.kind === "Sensor",
      )!.temperature = 4.2;
      event(
        s,
        incident.site,
        "Containment",
        "Cooling restored to 4.2°C. Pallet remains quarantined pending quality review.",
      );
    }
    incident.status = "Mitigated";
  } else if (action.action === "resolve" && incident.status === "Mitigated") {
    if (
      s.integrations.some(
        (m) => m.site === incident.site && m.status === "Retry pending",
      )
    )
      throw new Error("Confirm integration delivery before closing");
    incident.status = "Resolved";
    incident.resolved = s.clock;
    if (incident.kind === "missing")
      s.shipments.find((sh) => sh.site === incident.site)!.status = "Released";
    // Cold-chain quality disposition is deliberately not inferred from temperature recovery.
    event(
      s,
      incident.site,
      "Resolved",
      `${incident.id} closed after recovery verification.${incident.kind === "temperature" ? " Shipment remains held for independent quality disposition." : ""}`,
    );
  } else throw new Error("Invalid incident transition");
  audit(
    s,
    incident.site,
    action.role,
    action.action,
    before,
    incident.status,
    incident.kind === "temperature" && action.action === "resolve"
      ? "Sensor and delivery verified; product disposition remains with quality team"
      : incident.reason,
  );
  return s;
}
export function scopeWarehouse(
  s: WarehouseState,
  scope: Scope,
): WarehouseState {
  const permitted = (item: { site: string }) =>
    canAccess(scope.role, item.site) &&
    (scope.site === "All" || item.site === scope.site);
  const events = s.events.filter(permitted);
  return {
    ...s,
    devices: s.devices.filter(permitted),
    assets: s.assets.filter(permitted),
    shipments: s.shipments.filter(permitted),
    incidents: s.incidents.filter(permitted),
    events,
    integrations: s.integrations.filter(permitted),
    audit: s.audit.filter(permitted),
    buffer: s.buffer.filter(permitted),
    seen: [],
    reads: events.filter((e) => e.type === "RFID read").length,
    duplicates: events.filter((e) => e.type === "Deduplicated").length,
  };
}
export function simTime(seconds: number) {
  return new Date(Date.UTC(2026, 0, 15, 9, 0, seconds))
    .toISOString()
    .slice(11, 19);
}
