export const labTools = [
  "rfid-roi-calculator",
  "dotnet-modernization-assessment",
  "iot-platform-demo",
] as const;
export type LabTool = (typeof labTools)[number];
export function isLabTool(value: string): value is LabTool {
  return labTools.some((tool) => tool === value);
}
export function customerHubConfigured() {
  return Boolean(
    process.env.CUSTOMER_HUB_APP_URL && process.env.CUSTOMER_HUB_FORM_ID,
  );
}
export type LabLead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  inputs: string;
  results: string;
  tool: LabTool;
  idempotencyKey: string;
};
export function buildHubPayload(lead: LabLead) {
  if (lead.message.length > 8000)
    throw new Error("Tool report exceeds maximum length");
  if (!/^[a-zA-Z0-9_-]{8,100}$/.test(lead.idempotencyKey))
    throw new Error("Invalid submission identifier");
  const values: Record<string, string> = {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
    message: lead.message,
    tool_name: lead.tool,
    tool_source: `/tools/${lead.tool}`,
  };
  for (const [key, value] of Object.entries({
    tool_inputs: lead.inputs,
    tool_results: lead.results,
  })) {
    if (value.length > 500)
      throw new Error("Custom tool field exceeds 500 characters");
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Invalid tool context");
    values[key] = value;
  }
  return { values, idempotencyKey: lead.idempotencyKey };
}
export async function submitLabLead(lead: LabLead) {
  const rawUrl = process.env.CUSTOMER_HUB_APP_URL;
  const formId = process.env.CUSTOMER_HUB_FORM_ID;
  if (!rawUrl || !formId) throw new Error("CUSTOMER_HUB_NOT_CONFIGURED");
  const url = new URL(rawUrl);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/" ||
    !/^[a-zA-Z0-9_-]+$/.test(formId)
  )
    throw new Error("Invalid Customer Hub configuration");
  const response = await fetch(new URL(`/api/v1/forms/${formId}/submit`, url), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildHubPayload(lead)),
    signal: AbortSignal.timeout(12000),
    redirect: "error",
    cache: "no-store",
  });
  if (!response.ok)
    throw new Error(`Customer Hub submission failed (${response.status})`);
  const data = await response.json().catch(() => null);
  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data) ||
    data.success === false ||
    data.error
  )
    throw new Error("Customer Hub rejected submission");
}
