import { test } from "node:test";
import assert from "node:assert/strict";
import { submitContactForm } from "../../src/app/actions";

test("Lab contact action validates consent, delivers reviewed report through Hub, and keeps retry identity", async () => {
  const previousFetch = globalThis.fetch;
  const previousUrl = process.env.CUSTOMER_HUB_APP_URL;
  const previousId = process.env.CUSTOMER_HUB_FORM_ID;
  process.env.CUSTOMER_HUB_APP_URL = "https://hub.example.com";
  process.env.CUSTOMER_HUB_FORM_ID = "published-form";
  const data = new FormData();
  for (const [key, value] of Object.entries({
    name: "Test Visitor",
    email: "test@example.com",
    project: "Reviewed engineering scenario",
    labTool: "rfid-roi-calculator",
    labInputs: '{"assets":10000}',
    labResults: '{"annualNetSavings":45000}',
    labSubmissionId: "test-submission-001",
  }))
    data.set(key, value);
  const empty = { success: false, message: "" };
  let calls = 0;
  try {
    globalThis.fetch = async (_url, init) => {
      calls++;
      const p = JSON.parse(String(init?.body));
      assert.equal(p.values.message, "Reviewed engineering scenario");
      assert.equal(p.values.tool_inputs, '{"assets":10000}');
      assert.equal(p.values.tool_results, '{"annualNetSavings":45000}');
      assert.equal(p.idempotencyKey, "test-submission-001");
      return new Response('{"success":true}');
    };
    const invalid = await submitContactForm(empty, data);
    assert.equal(invalid.success, false);
    assert.ok(invalid.fieldErrors?.legalTermsConsent);
    assert.equal(calls, 0);
    data.set("legalTermsConsent", "yes");
    const sent = await submitContactForm(empty, data);
    assert.equal(sent.success, true);
    assert.equal(calls, 1);
    await submitContactForm(empty, data);
    assert.equal(calls, 2);
    data.set("project", "x".repeat(8001));
    const oversized = await submitContactForm(empty, data);
    assert.equal(oversized.success, false);
    assert.equal(calls, 2);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousUrl === undefined) delete process.env.CUSTOMER_HUB_APP_URL;
    else process.env.CUSTOMER_HUB_APP_URL = previousUrl;
    if (previousId === undefined) delete process.env.CUSTOMER_HUB_FORM_ID;
    else process.env.CUSTOMER_HUB_FORM_ID = previousId;
  }
});
