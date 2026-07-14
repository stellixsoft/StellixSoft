import nodemailer from "nodemailer";
import { Resend } from "resend";

interface SendEmailOptions {
  /** Override recipient. Defaults to the contact/inbox address. */
  to?: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/** Inbox that receives form submissions. Falls back to SMTP_USER when using SMTP only (one mailbox). */
function resolveInbox(hasSmtp: boolean): string | undefined {
  const explicit =
    process.env.EMAIL_TO?.trim() ||
    process.env.SMTP_TO?.trim() ||
    process.env.CONTACT_INBOX_EMAIL?.trim();
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

/** Turn nodemailer / SMTP / Resend failures into clear admin-facing text. */
export function formatEmailError(error: unknown): string {
  if (!error) return "Unknown email error.";

  if (typeof error === "string") return error;

  const err = error as {
    message?: string;
    code?: string;
    response?: string;
    responseCode?: number | string;
    command?: string;
    errno?: number;
    syscall?: string;
    hostname?: string;
  };

  const code = String(err.code || "").toUpperCase();
  const response = String(err.response || err.message || "");
  const responseCode = Number(err.responseCode) || 0;
  const lower = response.toLowerCase();

  if (
    code === "EAUTH" ||
    responseCode === 535 ||
    lower.includes("incorrect authentication") ||
    lower.includes("authentication failed") ||
    lower.includes("invalid login") ||
    lower.includes("username and password not accepted") ||
    lower.includes("535")
  ) {
    return "SMTP authentication failed: wrong username or password (check SMTP_USER / SMTP_PASS).";
  }

  if (
    responseCode === 550 ||
    lower.includes("mailbox unavailable") ||
    lower.includes("user unknown") ||
    lower.includes("recipient")
  ) {
    return `SMTP rejected the recipient address: ${response}`;
  }

  if (
    responseCode === 553 ||
    lower.includes("sender") ||
    lower.includes("from address")
  ) {
    return "SMTP rejected the sender address (check SMTP_FROM / SMTP_USER).";
  }

  if (
    code === "ECONNECTION" ||
    code === "ESOCKET" ||
    code === "ETIMEDOUT" ||
    code === "ENOTFOUND" ||
    code === "ECONNREFUSED"
  ) {
    const hostHint = err.hostname ? ` (${err.hostname})` : "";
    return `Could not connect to SMTP server${hostHint}. Check SMTP_HOST / SMTP_PORT / firewall. (${code})`;
  }

  if (code === "EENVELOPE") {
    return `Invalid email envelope (from/to): ${response || err.message}`;
  }

  if (err.message === "EMAIL_NOT_CONFIGURED") {
    return "Email is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS (or RESEND_API_KEY).";
  }

  if (err.message) return err.message;
  return "Email send failed.";
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

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      ...(replyTo ? { replyTo } : {}),
    });
  } catch (error) {
    const friendly = formatEmailError(error);
    console.error("SMTP send failed:", friendly, error);
    throw new Error(friendly);
  }
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
    throw new Error(formatEmailError(error));
  }
}

export async function sendEmail(options: SendEmailOptions) {
  const hasSmtp =
    Boolean(process.env.SMTP_HOST?.trim()) &&
    Boolean(process.env.SMTP_USER?.trim()) &&
    Boolean(process.env.SMTP_PASS?.trim());

  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());

  const to = options.to?.trim() || resolveInbox(hasSmtp);
  if (!to) {
    console.error(
      "Set a recipient (options.to), or EMAIL_TO / SMTP_TO / CONTACT_INBOX_EMAIL. With SMTP only, SMTP_USER is used if none are set.",
    );
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  try {
    if (hasSmtp) {
      await sendViaSmtp(to, options);
      return;
    }

    if (hasResend) {
      await sendViaResend(to, options);
      return;
    }
  } catch (error) {
    // Already friendly from sendViaSmtp / Resend, but normalize once more
    if (error instanceof Error && error.message !== "EMAIL_NOT_CONFIGURED") {
      throw error;
    }
    throw new Error(formatEmailError(error));
  }

  console.error("Set SMTP_HOST + SMTP_USER + SMTP_PASS, or RESEND_API_KEY");
  throw new Error("EMAIL_NOT_CONFIGURED");
}
