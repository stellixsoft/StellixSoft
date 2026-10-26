import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createWarehouse,
  warehouseReducer as reduce,
  scopeWarehouse,
  type Scenario,
  type WarehouseState,
} from "../../src/lib/tools/warehouse";
const scenario = (kind: Scenario) =>
  reduce(createWarehouse(), {
    type: "scenario",
    scenario: kind,
    role: "Administrator",
  });
function incident(
  s: WarehouseState,
  action: "assign" | "mitigate" | "resolve",
) {
  return reduce(s, {
    type: "incident",
    id: "INC-1042",
    action,
    role: "Technician",
  });
}
test("missing pallet requires ownership and reconciliation before releasing its shipment", () => {
  let s = scenario("missing");
  assert.equal(s.shipments[0].status, "Held");
  assert.equal(s.assets[1].condition, "Missing");
  assert.throws(() => incident(s, "resolve"), /transition/);
  assert.throws(() => incident(s, "mitigate"), /transition/);
  s = incident(s, "assign");
  s = incident(s, "mitigate");
  assert.equal(s.assets[1].zone, "Dispatch");
  assert.equal(s.assets[1].condition, "Available");
  assert.equal(s.shipments[0].status, "Held");
  s = incident(s, "resolve");
  assert.equal(s.shipments[0].status, "Released");
  assert.equal(s.incidents[0].status, "Resolved");
  assert.equal(s.audit.length, 4);
  assert.equal(s.audit[0].actor, "Technician");
  assert.throws(() => incident(s, "resolve"), /transition/);
});
test("offline reads buffer without updating cloud state, then replay exactly once per unique key", () => {
  let s = scenario("outage");
  const originalZone = s.assets[0].zone;
  for (let i = 0; i < 10; i++) s = reduce(s, { type: "tick" });
  assert.equal(s.assets[0].zone, originalZone);
  assert.equal(s.devices[1].lastSeen, 0);
  assert.ok(s.buffer.length > 3);
  const queued = s.buffer.length;
  const previousMessages = s.integrations.length;
  const reads = s.reads;
  s = incident(incident(s, "assign"), "mitigate");
  assert.equal(s.buffer.length, 0);
  assert.equal(s.devices[0].online, true);
  assert.equal(s.duplicates, 1);
  assert.equal(s.reads, reads + queued);
  assert.equal(s.integrations.length, previousMessages + queued);
  assert.equal(s.assets[0].history[0].zone, "Dispatch");
  assert.equal(s.assets[0].history[0].at, 50);
  assert.equal(
    new Set(s.integrations.map((m) => m.sourceKey)).size,
    s.integrations.length,
  );
  assert.ok(s.events.some((e) => e.type === "Deduplicated"));
  const count = s.integrations.length;
  assert.throws(() => incident(s, "mitigate"), /transition/);
  assert.equal(s.integrations.length, count);
  s = incident(s, "resolve");
  assert.equal(s.incidents[0].status, "Resolved");
});
test("temperature recovery cannot bypass WMS acknowledgement or quality disposition", () => {
  let s = scenario("temperature");
  assert.equal(s.devices[2].temperature, 11.8);
  assert.equal(s.assets[2].condition, "Quarantined");
  s = incident(incident(s, "assign"), "mitigate");
  assert.equal(s.devices[2].temperature, 4.2);
  assert.throws(() => incident(s, "resolve"), /delivery/);
  s = reduce(s, {
    type: "retry",
    id: s.integrations[0].id,
    role: "Technician",
  });
  assert.equal(s.integrations[0].attempts, 2);
  assert.equal(s.integrations[0].status, "Delivered");
  assert.throws(() =>
    reduce(s, { type: "retry", id: s.integrations[0].id, role: "Technician" }),
  );
  s = incident(s, "resolve");
  assert.equal(s.incidents[0].status, "Resolved");
  assert.equal(s.shipments[0].status, "Held");
  assert.equal(s.assets[2].condition, "Quarantined");
});
test("all views and mutation guards enforce modeled tenant boundaries", () => {
  let s = scenario("temperature");
  for (let i = 0; i < 5; i++) s = reduce(s, { type: "tick" });
  const hidden = { ...s.incidents[0], id: "INC-MERIDIAN", site: "Rotterdam" };
  s.incidents.push(hidden);
  s.audit.push({ ...s.audit[0], id: "hidden-audit", site: "Rotterdam" });
  const view = scopeWarehouse(s, { role: "Customer", site: "All" });
  for (const collection of [
    view.devices,
    view.assets,
    view.shipments,
    view.incidents,
    view.events,
    view.integrations,
    view.audit,
    view.buffer,
  ])
    assert.ok(collection.every((item) => item.site !== "Rotterdam"));
  assert.equal(
    scopeWarehouse(s, { role: "Technician", site: "Rotterdam" }).devices.length,
    0,
  );
  assert.throws(
    () =>
      reduce(s, {
        type: "incident",
        id: hidden.id,
        action: "assign",
        role: "Technician",
      }),
    /scope/,
  );
  assert.throws(
    () =>
      reduce(s, {
        type: "incident",
        id: "INC-1042",
        action: "assign",
        role: "Customer",
      }),
    /read-only/,
  );
  assert.throws(
    () =>
      reduce(s, {
        type: "retry",
        id: s.integrations.find((m) => m.status === "Retry pending")!.id,
        role: "Customer",
      }),
    /read-only/,
  );
  assert.throws(
    () =>
      reduce(s, { type: "scenario", scenario: "missing", role: "Technician" }),
    /Administrator/,
  );
});
test("clock is deterministic, reducer is immutable, and long sessions remain bounded", () => {
  const initial = scenario("outage");
  const copy = structuredClone(initial);
  let s = initial;
  for (let i = 0; i < 240; i++) s = reduce(s, { type: "tick" });
  assert.deepEqual(initial, copy);
  assert.equal(s.clock, 1200);
  assert.equal(s.buffer.length, 30);
  assert.ok(s.events.length <= 100);
  assert.ok(s.integrations.length <= 60);
  assert.ok(s.seen.length <= 400);
  assert.ok(s.assets.every((a) => a.history.length <= 20));
  assert.deepEqual(reduce(s, { type: "reset" }), createWarehouse());
  assert.deepEqual(
    reduce(copy, { type: "tick" }),
    reduce(initial, { type: "tick" }),
  );
});
