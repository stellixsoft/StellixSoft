import nodemailer from "nodemailer";
import { Resend } from "resend";

interface SendEmailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

/** Inbox that receives form submissions. Falls back to SMTP_USER when using SMTP only (one mailbox). */
function resolveInbox(hasSmtp: boolean): string | undefined {
  const explicit =
    process.env.EMAIL_TO?.trim() || process.env.SMTP_TO?.trim() || process.env.CONTACT_INBOX_EMAIL?.trim();
  if (explicit) return explicit;
  if (hasSmtp) return process.env.SMTP_USER?.trim();
  return undefined;
}

function defaultSmtpFrom(): string {
  const from = process.env.SMTP_FROM?.trim();
  if (from) return from;
  const user = process.env.SMTP_USER?.trim();
  if (user) return user;
  return "";
}

async function sendViaSmtp(
  to: string,
  { subject, html, replyTo }: SendEmailOptions,
): Promise<void> {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!host || !user || !pass) {
    console.error("SMTP_HOST, SMTP_USER, and SMTP_PASS are required for SMTP");
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  const port = Number(process.env.SMTP_PORT) || 587;
  // Port 465: implicit TLS (SMTPS). Port 587: STARTTLS (secure=false; nodemailer upgrades the connection).
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const from = defaultSmtpFrom();
  if (!from) {
    console.error("Set SMTP_FROM or rely on SMTP_USER as sender address");
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  await transporter.sendMail({
    from,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
}

async function sendViaResend(
  to: string,
  { subject, html, replyTo }: SendEmailOptions,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  const from =
    process.env.RESEND_FROM?.trim() ||
    process.env.SMTP_FROM?.trim() ||
    "StellixSoft <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(error.message);
  }
}

export async function sendEmail(options: SendEmailOptions) {
  const hasSmtp =
    Boolean(process.env.SMTP_HOST?.trim()) &&
    Boolean(process.env.SMTP_USER?.trim()) &&
    Boolean(process.env.SMTP_PASS?.trim());

  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());

  const to = resolveInbox(hasSmtp);
  if (!to) {
    console.error(
      "Set EMAIL_TO (recommended), SMTP_TO, or CONTACT_INBOX_EMAIL. With SMTP only, SMTP_USER is used if none are set.",
    );
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  if (hasSmtp) {
    await sendViaSmtp(to, options);
    return;
  }

  if (hasResend) {
    await sendViaResend(to, options);
    return;
  }

  console.error("Set SMTP_HOST + SMTP_USER + SMTP_PASS, or RESEND_API_KEY");
  throw new Error("EMAIL_NOT_CONFIGURED");
}
