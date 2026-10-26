# Stellix Soft Engineering Lab

## Routes and behavior

- `/tools`: server-rendered discovery page, linked in site navigation and footer.
- `/tools/rfid-roi-calculator`: USD planning model with editable loss, labor, deployment and operating assumptions; annual net savings, simple payback, three-year ROI and cash flow. Undefined ROI and unreachable payback are explicit. Assumes immediate adoption and constant savings, without discounting, financing or taxes.
- `/tools/dotnet-modernization-assessment`: ten-question heuristic covering .NET Framework, VB.NET, Web Forms, dependencies, data, deployment, tests and business constraints. Recommendations and score methods are explained. Budget ranges use an explicit staffing model; they are not quotes or source-code assessments.
- `/tools/iot-platform-demo`: connected RFID warehouse simulation across two fictional tenants and three sites, with Operations, Fleet health, Service desk, Integrations, and Architecture workspaces. See the scenario details below. All state is browser-local; role filtering is a permissions illustration, not real authentication or production tenant isolation.

Results are ungated. Reports download as plain text; the print action supports the browser's Save as PDF option. The print version includes the submitted assumptions and results. All routes have canonical metadata, share metadata and sitemap entries; individual tools have WebApplication JSON-LD.

## Consultation flow

A consultation click stores the report in same-tab session storage, then navigates to `/contact?tool=...`. Matching reports expire after 24 hours and prefill the editable Project Details field. No data is sent until the visitor submits the contact form with its existing consent requirements. Storage failure does not prevent using the contact form. Reports are not placed in URLs or analytics parameters.

When Customer Hub is configured, Engineering Lab contact submissions use the published public form API instead of SMTP. Other contact submissions retain their existing email behavior. With no Hub configuration, Lab submissions also use the existing email route. A configured but failing Hub returns an error; it does not silently route elsewhere or report success. The visitor can retry with the same idempotency key. Real email delivery requires existing SMTP or Resend configuration.

## Customer Hub configuration (live delivery pending)

The integration follows the API contract supplied for `POST /api/v1/forms/{formId}/submit`. No automation API key is needed for this public endpoint.

Set server-side variables in the deployment environment:

- `CUSTOMER_HUB_APP_URL`: confirmed HTTPS app origin, without a path or trailing query.
- `CUSTOMER_HUB_FORM_ID`: the published Website form ID for the real Stellix Soft website product.

Allow HTTPS egress to that app hostname in the cloud environment if restricted. Do not use a demo product ID. Configure the published form with these exact field keys:

| Key | Mapping |
| --- | --- |
| `name` | name |
| `email` | email |
| `phone` | phone (optional) |
| `company` | company (optional) |
| `message` | message |
| `tool_name` | custom |
| `tool_source` | custom |
| `tool_inputs` | custom; text, up to 500 characters |
| `tool_results` | custom; text, up to 500 characters |

`tool_inputs` and `tool_results` contain compact JSON objects (each within the 500-character limit). Inputs use the named fields defined in `src/lib/tools`; assessment choices are option indexes from `assessmentQuestions`. Result summaries contain the calculated financial metrics, assessment scores/approach, or simulated visible device statuses. `message` contains the full editable human-readable report (up to 8,000 characters). The contact form discloses both the report and original scenario summary; these are submitted only with the visitor's request. Mapping is based on the provided API documentation; the live console configuration has not been inspected.

Before launch, submit a consented test lead through the real published form, confirm core fields and structured input/result fields in Customer Hub, retry the same idempotency key, and verify a later report for the same email merges as expected. Adapter tests use a mocked transport and do not prove live delivery. Do not send real visitor data to a placeholder endpoint.

## Analytics

Uses the existing `trackEvent` GA4 helper. No extra analytics dependency:

- `tool_start`: first interaction or calculation.
- `tool_complete`: calculation/assessment completion, or successful simulator resolution.
- `tool_report_download`, `tool_report_print`.
- `tool_consultation_click`, `tool_lead_submit` (after successful contact submission).
- `simulator_action`, `simulator_role_change`.

Event parameters contain the tool slug and, where applicable, simulator action or role. They exclude business inputs, scores, report text, and contact details. Multiple recalculations emit multiple completions; use user/session funnels rather than treating raw event counts as unique leads. Configure GA4 key events in the analytics console if desired. Existing site analytics consent behavior remains in effect.

## Validation

From `/workspace/StellixSoft`:

```sh
npx tsx --test tests/tools/*.test.ts
npx tsc --noEmit --incremental false
npx eslint src/app/tools src/components/tools src/lib/tools tests/tools src/app/contact/page.tsx src/app/actions.ts src/components/sections/contact/contact-form.tsx src/app/sitemap.ts
npx next build
npm run start
```

Use `npx next build` directly during validation to avoid the existing npm build wrapper regenerating tracked media timestamps. Font downloads require `fonts.googleapis.com` and `fonts.gstatic.com`. The full repository lint command also scans generated TinyMCE and has existing source errors; the new tools are checked separately.

Browser checks: verify numeric limits and negative savings, download and print reports, hand off results to contact, generate a Web Forms roadmap, complete failure → assignment → resolution, switch roles/sites, and check phone and desktop layouts. External analytics/widget calls should be blocked during automated tests so fictional actions do not enter production analytics.

The browser runner is saved at `tests/tools/browser.mjs`. With the production server running, use `node tests/tools/browser.mjs` where Playwright is available. On this cloud image:

```sh
PLAYWRIGHT_MODULE=/opt/codex/cua_node/lib/node_modules/playwright/index.mjs node tests/tools/browser.mjs
```

It uses `/usr/bin/chromium` (override with `CHROMIUM_PATH`), blocks all external requests, checks the report handoff and opt-out, and writes desktop/mobile screenshots and a sample print PDF under `/tmp`. It does not submit real leads.

## Advanced warehouse simulator

The pure reducer in `src/lib/tools/warehouse.ts` owns the simulation clock and all domain state. `iot-simulator.tsx` coordinates controls and guided scenarios; `warehouse-panels.tsx` renders workspace views. No device or WMS connection is made.

- **Missing pallet:** shipment SH-1042 is held with PLT-102 missing at dispatch. Assign an owner, investigate the last Storage location, reconcile the pallet at Dispatch, then explicitly verify and release the shipment.
- **Gateway outage:** Chicago buffers reads at the edge while its cloud heartbeat is stale. Reconnect after assignment, replay unique reads in order, and suppress one intentionally repeated read key. Duplicate suppression does not create another integration message. Verify recovery before closing.
- **Temperature excursion:** 11.8°C triggers quarantine and a shipment hold. Restore cooling to 4.2°C, retry the failed WMS exception delivery, and verify before closing. The pallet remains quarantined and the shipment held for independent quality disposition.

Administrator loads scenarios; Technician can respond within Northstar; Customer is read-only. Views filter assets, devices, shipments, incidents, buffers, events, integration messages, and audit entries together. This filtering and the reducer guards run in the browser and do not secure confidential data. The Architecture workspace distinguishes implemented simulation behavior from production requirements.

The stream starts paused. Start advances simulated time by 5 seconds every 2 real seconds; Pause or Advance supports controlled walkthroughs. Loading a scenario or Reset clears the dataset. Scenarios and event order are deterministic. The sample clock begins at 09:00:00 UTC on a fictional operating day, not wall time.

Demo retention limits: 30 buffered reads (collection pauses at capacity), 100 events, 100 audit entries, 60 integration records, 400 recent deduplication keys, and 20 movement entries per asset. The UI reports recent records rather than lifetime throughput. These are bounded browser-demo structures, not a durable queue, permanent audit ledger, or production exactly-once delivery guarantee.

Tests exercise ordered replay, immutable transitions, duplicate suppression, closure gates, held cold-chain disposition, tenant filtering, read-only and cross-tenant mutation rejection, and bounded long-running state. The browser runner covers all three guided scenarios and every workspace at mobile size.
