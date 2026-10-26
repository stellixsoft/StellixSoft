import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE || "playwright"
);
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
    headless: true,
    args: ["--no-sandbox"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1050 },
    acceptDownloads: true,
  });
  await context.route("**/*", (route) => {
    const url = new URL(route.request().url());
    return url.hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
  const analytics = [];
  await context.exposeBinding("captureLabEvent", (_source, event) =>
    analytics.push(event),
  );
  await context.addInitScript(() => {
    window.gtag = (...args) => {
      if (args[0] === "event")
        window.captureLabEvent({ name: args[1], params: args[2] });
    };
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://127.0.0.1:3000/tools");
  await page
    .getByRole("heading", {
      name: "Explore the engineering. Understand the impact.",
    })
    .waitFor();
  await page.screenshot({ path: "/tmp/lab-desktop.png", fullPage: true });
  await page
    .getByRole("link", { name: "Calculate your business case" })
    .click();
  await page.getByRole("button", { name: "Calculate my scenario" }).click();
  await page.getByText("$45,000", { exact: true }).waitFor();
  assert.equal(
    (await page.locator('script[type="application/ld+json"]').count()) >= 1,
    true,
  );
  await page.getByLabel("Annual operating cost").fill("100000");
  await page.getByRole("button", { name: "Calculate my scenario" }).click();
  await page.getByText("Not reached", { exact: true }).waitFor();
  await page.getByLabel("Annual asset loss rate").fill("101");
  await page.getByRole("button", { name: "Calculate my scenario" }).click();
  assert.equal(
    await page
      .getByLabel("Annual asset loss rate")
      .evaluate((el) => el.validity.valid),
    false,
  );
  await page.getByRole("button", { name: "Reset example" }).click();
  await page.getByRole("button", { name: "Calculate my scenario" }).click();
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Download report", exact: true }).click(),
  ]);
  assert.match(download.suggestedFilename(), /rfid-roi-calculator/);
  assert.match(
    await readFile(await download.path(), "utf8"),
    /Annual net savings: \$45,000/,
  );
  await page
    .getByRole("link", { name: "Request an RFID integration plan" })
    .click();
  await page.locator("#project").waitFor();
  await page.waitForFunction(() =>
    document
      .querySelector("#project")
      .value.includes("Annual net savings: $45,000"),
  );
  assert.equal(
    await page
      .locator("[name=labSubmissionId]")
      .inputValue()
      .then((s) => s.length > 8),
    true,
  );
  assert.match(
    await page.locator("#project").inputValue(),
    /Tracked assets: 10000/,
  );
  assert.equal(
    JSON.parse(await page.locator("[name=labInputs]").inputValue()).assets,
    10000,
  );
  await page
    .getByLabel("Include original tool inputs and result summary")
    .uncheck();
  assert.equal(await page.locator("[name=labInputs]").inputValue(), "{}");
  await page.goto(
    "http://127.0.0.1:3000/tools/dotnet-modernization-assessment",
  );
  await page.getByLabel("Primary application stack").selectOption("2");
  await page
    .getByLabel("Windows-specific or vendor dependencies")
    .selectOption("0");
  await page.getByRole("button", { name: "Build my roadmap" }).click();
  await page.getByRole("heading", { name: "Refactor in phases" }).waitFor();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Web Forms requires a new UI approach" })
    .waitFor();
  await page.getByRole("button", { name: "Print / save PDF" }).waitFor();
  await page.emulateMedia({ media: "print" });
  assert.equal(await page.locator(".lab-print-report").isVisible(), true);
  await page.pdf({ path: "/tmp/lab-modernization.pdf", format: "A4" });
  await page.emulateMedia({ media: "screen" });
  await page.goto("http://127.0.0.1:3000/tools/iot-platform-demo");
  const card = page.locator("article").filter({ hasText: "RD-101" });
  await card.getByRole("button", { name: "Simulate failure" }).click();
  await page.getByRole("status").filter({ hasText: "alert raised" }).waitFor();
  await page.getByLabel("Explore a role").selectOption("Customer");
  assert.equal(await page.locator(".lab-device").count(), 3);
  assert.equal(
    await page.getByRole("button", { name: "Assign ticket" }).count(),
    0,
  );
  assert.equal(await page.getByText("Meridian", { exact: true }).count(), 0);
  await page.getByLabel("Explore a role").selectOption("Technician");
  await card.getByRole("button", { name: "Assign ticket" }).click();
  await card.getByRole("button", { name: "Resolve and restore" }).click();
  await card.getByText("Resolved", { exact: true }).waitFor();
  await page.getByLabel("Warehouse").selectOption("Austin");
  assert.equal(await page.locator(".lab-device").count(), 1);
  await page.getByRole("button", { name: "Reset simulation" }).click();
  for (const width of [1151, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://127.0.0.1:3000/tools");
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Desktop overflow at ${width}`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  for (const path of [
    "/tools",
    "/tools/rfid-roi-calculator",
    "/tools/dotnet-modernization-assessment",
    "/tools/iot-platform-demo",
  ]) {
    await page.goto("http://127.0.0.1:3000" + path);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Overflow on ${path}`,
    );
  }
  await page.screenshot({ path: "/tmp/lab-mobile.png", fullPage: true });
  assert.deepEqual(errors, []);
  for (const name of [
    "tool_start",
    "tool_complete",
    "tool_report_download",
    "tool_consultation_click",
    "simulator_action",
  ])
    assert.ok(
      analytics.some((e) => e.name === name),
      `Missing analytics ${name}`,
    );
  assert.ok(
    analytics.every((e) =>
      Object.keys(e.params).every((key) =>
        ["tool", "action", "role"].includes(key),
      ),
    ),
    "Analytics must exclude scenario inputs and contact details",
  );

  console.log(
    "PASS: desktop and mobile routes, RFID validation and negative ROI, download, report handoff, modernization recommendation, simulator role/site filtering and full ticket lifecycle; no page errors.",
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
