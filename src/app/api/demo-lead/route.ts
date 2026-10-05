import { NextResponse } from "next/server";
import { formatEmailError, sendEmail } from "@/src/lib/email";

/**
 * Public endpoint for StellixSoft trade demo pages (static Firebase hosts).
 * Reuses the same SMTP / EMAIL_TO inbox as the main contact form (sales@stellixsoft.com).
 */

const ALLOWED_ORIGINS = new Set([
  "https://appliance.stellixsoft.com",
  "https://stellixsoft.com",
  "https://www.stellixsoft.com",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3001",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9]{8,20}$/;

type DemoLeadBody = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  note?: string;
  interests?: string[];
  source?: string;
  page?: string;
  website?: string; // honeypot
};

function corsHeaders(origin: string | null): HeadersInit {
  const allow =
    origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://appliance.stellixsoft.com";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function esc(str: string | null | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizePhone(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  const plus = t.startsWith("+");
  const digits = t.replace(/\D/g, "");
  if (!digits) return "";
  return plus ? `+${digits}` : digits;
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const headers = corsHeaders(origin);

  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json(
      { success: false, message: "Origin not allowed." },
      { status: 403, headers },
    );
  }

  let body: DemoLeadBody;
  try {
    body = (await request.json()) as DemoLeadBody;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body." },
      { status: 400, headers },
    );
  }

  // Honeypot — bots fill this; humans never see it.
  if (body.website?.trim()) {
    return NextResponse.json(
      { success: true, message: "Thanks! We'll be in touch within 1 business day." },
      { status: 200, headers },
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = normalizePhone(body.phone ?? "");
  const business = (body.business ?? "").trim();
  const note = (body.note ?? "").trim();
  const source = (body.source ?? "appliance-demo").trim().slice(0, 80);
  const page = (body.page ?? "").trim().slice(0, 500);
  const interests = Array.isArray(body.interests)
    ? body.interests.map((i) => String(i).slice(0, 60)).filter(Boolean).slice(0, 12)
    : [];

  if (!name || name.length < 2) {
    return NextResponse.json(
      { success: false, message: "Please enter your name." },
      { status: 400, headers },
    );
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400, headers },
    );
  }
  if (!phone || !PHONE_REGEX.test(phone)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid phone number." },
      { status: 400, headers },
    );
  }

  try {
    await sendEmail({
      subject: `Appliance demo quote — ${name}${business ? ` (${business})` : ""}`,
      replyTo: email,
      html: `
        <h2>New lead from appliance demo page</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;color:#333">
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;width:140px">Source</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(source)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(phone)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Business</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(business) || " — "}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Interests</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(interests.join(", ")) || " — "}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Note</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(note) || " — "}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600">Page</td><td style="padding:8px 12px">${esc(page) || " — "}</td></tr>
        </table>
        <p style="margin-top:16px;font-size:12px;color:#999">Submitted at ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Thanks! We'll be in touch within 1 business day." },
      { status: 200, headers },
    );
  } catch (err) {
    console.error("demo-lead email error:", formatEmailError(err), err);
    return NextResponse.json(
      {
        success: false,
        message:
          "We could not deliver your message. Please email sales@stellixsoft.com or try again.",
      },
      { status: 502, headers },
    );
  }
}
