import { test } from "node:test";
import assert from "node:assert/strict";
import {
  calculateRfid,
  defaultRfid,
  validateRfid,
} from "../../src/lib/tools/rfid";
import {
  assessModernization,
  defaultAssessment,
} from "../../src/lib/tools/modernization";
import {
  initialDevices,
  transitionDevice,
  visibleDevices,
} from "../../src/lib/tools/simulator";
import {
  buildHubPayload,
  submitLabLead,
  type LabLead,
} from "../../src/lib/tools/customer-hub";
test("RFID example includes labor, recurring costs and full three-year costs", () => {
  const r = calculateRfid(defaultRfid);
  assert.equal(r.lossBefore, 30000);
  assert.equal(r.lossSavings, 15000);
  assert.equal(r.laborSavings, 36000);
  assert.equal(r.upfront, 40000);
  assert.equal(r.netAnnual, 45000);
  assert.equal(r.totalCost, 58000);
  assert.equal(r.benefit, 153000);
  assert.equal(r.roi, (95000 / 58000) * 100);
  assert.equal(r.paybackMonths, (40000 / 45000) * 12);
  assert.equal(r.years[3].cashFlow, 95000);
});
test("RFID zero benefits and zero costs do not produce infinity or fake payback", () => {
  const zero = Object.fromEntries(
    Object.keys(defaultRfid).map((k) => [k, 0]),
  ) as typeof defaultRfid;
  zero.facilities = 1;
  const r = calculateRfid(zero);
  assert.equal(r.roi, null);
  assert.equal(r.paybackMonths, null);
  assert.equal(
    calculateRfid({ ...defaultRfid, annualOperatingCost: 100000 })
      .paybackMonths,
    null,
  );
  assert.ok(validateRfid({ ...defaultRfid, assets: 1.5 }).length);
  assert.throws(() => calculateRfid({ ...defaultRfid, lossRate: 101 }));
  assert.throws(() => calculateRfid({ ...defaultRfid, assets: NaN }));
});
test("modernization differentiates retain, replatform, refactor and incremental rebuild", () => {
  assert.equal(
    assessModernization({ ...defaultAssessment, security: 0, change: 0 })
      .approach,
    "Retain",
  );
  assert.equal(
    assessModernization({ ...defaultAssessment, dependencies: 0, stack: 3 })
      .approach,
    "Replatform",
  );
  assert.equal(
    assessModernization({ ...defaultAssessment, dependencies: 0, stack: 2 })
      .approach,
    "Refactor in phases",
  );
  assert.equal(
    assessModernization({
      ...defaultAssessment,
      dependencies: 2,
      database: 2,
      change: 2,
    }).approach,
    "Rebuild incrementally",
  );
  assert.equal(
    assessModernization({
      ...defaultAssessment,
      tests: 0,
      deployment: 0,
      dependencies: 0,
    }).readiness,
    100,
  );
  assert.throws(() => assessModernization({ ...defaultAssessment, stack: 10 }));
});
test("simulator models tenant visibility and valid ticket transitions", () => {
  assert.equal(
    visibleDevices(initialDevices, "Administrator", "All").length,
    5,
  );
  assert.equal(visibleDevices(initialDevices, "Customer", "All").length, 3);
  assert.equal(
    visibleDevices(initialDevices, "Technician", "Rotterdam").length,
    0,
  );
  const failed = transitionDevice(initialDevices[0], "fail", "Administrator");
  assert.equal(failed.ticket, "Open");
  assert.equal(failed.status, "Offline");
  assert.throws(() => transitionDevice(failed, "resolve", "Technician"));
  const assigned = transitionDevice(failed, "assign", "Technician");
  assert.equal(
    transitionDevice(assigned, "resolve", "Technician").status,
    "Online",
  );
  assert.throws(() => transitionDevice(failed, "assign", "Customer"));
  assert.throws(() =>
    transitionDevice(initialDevices[3], "fail", "Technician"),
  );
});
const lead: LabLead = {
  name: "Test User",
  email: "test@example.com",
  phone: "",
  company: "Test",
  message: "x".repeat(8000),
  inputs: JSON.stringify(defaultRfid),
  results: JSON.stringify({
    annualNetSavings: 45000,
    threeYearNetBenefit: 95000,
  }),
  tool: "rfid-roi-calculator",
  idempotencyKey: "test-submission-001",
};
test("Hub preserves full report and structured input/result fields within 500 characters", () => {
  const p = buildHubPayload(lead);
  assert.equal(p.values.message, lead.message);
  assert.equal(p.values.tool_inputs, lead.inputs);
  assert.equal(p.values.tool_results, lead.results);
  assert.ok(p.values.tool_inputs.length <= 500);
  assert.ok(p.values.tool_results.length <= 500);
  assert.throws(() => buildHubPayload({ ...lead, inputs: "x".repeat(501) }));
  assert.equal(p.idempotencyKey, lead.idempotencyKey);
  assert.throws(() => buildHubPayload({ ...lead, message: "x".repeat(8001) }));
});
test("Hub adapter uses published form endpoint, preserves retry key, and surfaces rejection", async () => {
  const previousFetch = globalThis.fetch,
    previousUrl = process.env.CUSTOMER_HUB_APP_URL,
    previousId = process.env.CUSTOMER_HUB_FORM_ID;
  process.env.CUSTOMER_HUB_APP_URL = "https://hub.example.com";
  process.env.CUSTOMER_HUB_FORM_ID = "published-form";
  try {
    globalThis.fetch = async (url, init) => {
      assert.equal(
        String(url),
        "https://hub.example.com/api/v1/forms/published-form/submit",
      );
      assert.equal(init?.method, "POST");
      assert.equal(
        JSON.parse(String(init?.body)).idempotencyKey,
        lead.idempotencyKey,
      );
      return new Response(JSON.stringify({ success: true }));
    };
    await submitLabLead(lead);
    globalThis.fetch = async () => new Response("{}", { status: 503 });
    await assert.rejects(submitLabLead(lead), /503/);
    globalThis.fetch = async () => new Response('{"success":false}');
    await assert.rejects(submitLabLead(lead), /rejected/);
    globalThis.fetch = async () => new Response("Unexpected HTML");
    await assert.rejects(submitLabLead(lead), /rejected/);
    process.env.CUSTOMER_HUB_APP_URL = "http://hub.example.com";
    await assert.rejects(submitLabLead(lead), /configuration/);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousUrl === undefined) delete process.env.CUSTOMER_HUB_APP_URL;
    else process.env.CUSTOMER_HUB_APP_URL = previousUrl;
    if (previousId === undefined) delete process.env.CUSTOMER_HUB_FORM_ID;
    else process.env.CUSTOMER_HUB_FORM_ID = previousId;
  }
});
