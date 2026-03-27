"use server";

import { sendEmail } from "@/src/lib/email";

export interface FormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const help = formData.get("help") as string;
  const project = formData.get("project") as string;
  const hear = formData.get("hear") as string;
  const budget = formData.get("budget") as string;

  if (!name || !email || !help || !project) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    await sendEmail({
      subject: `New Contact Form — ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;color:#333">
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;width:140px">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Company</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(company) || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(phone) || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Help With</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(help)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Project Details</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(project)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">How They Heard</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(hear) || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600">Budget</td><td style="padding:8px 12px">${esc(budget) || "—"}</td></tr>
        </table>
        <p style="margin-top:16px;font-size:12px;color:#999">Submitted at ${new Date().toISOString()}</p>
      `,
    });

    return {
      success: true,
      message: "Thanks! We'll be in touch within 1 business day.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}

export async function submitQuoteForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const details = formData.get("details") as string;

  if (!name || !email) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    await sendEmail({
      subject: `Quote Request — ${name}`,
      replyTo: email,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;color:#333">
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;width:140px">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Company</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(company) || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600">Details</td><td style="padding:8px 12px">${esc(details) || "—"}</td></tr>
        </table>
        <p style="margin-top:16px;font-size:12px;color:#999">Submitted at ${new Date().toISOString()}</p>
      `,
    });

    return {
      success: true,
      message: "Quote request received! We'll send a detailed proposal within 5 business days.",
    };
  } catch (err) {
    console.error("Quote form error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}

export async function submitNewsletterForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "Please enter your email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    await sendEmail({
      subject: `New Newsletter Subscriber`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p style="font-family:sans-serif;font-size:14px;color:#333">
          <strong>${esc(email)}</strong> subscribed to the newsletter.
        </p>
        <p style="margin-top:16px;font-size:12px;color:#999">Subscribed at ${new Date().toISOString()}</p>
      `,
    });

    return {
      success: true,
      message: "Thanks for subscribing! Check your inbox to confirm.",
    };
  } catch (err) {
    console.error("Newsletter form error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

function esc(str: string | null): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
