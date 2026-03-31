"use server";

import { sendEmail } from "@/src/lib/email";

export interface FormState {
  success: boolean;
  message: string;
  fieldErrors?: Partial<
    Record<"name" | "email" | "help" | "project" | "description", string>
  >;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, key: string): string {
  const v = formData.get(key);
  if (typeof v !== "string") return "";
  return v.trim();
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = readText(formData, "name");
  const emailRaw = readText(formData, "email");
  const company = readText(formData, "company");
  const phone = readText(formData, "phone");
  const help = readText(formData, "help");
  const project = readText(formData, "project");
  const hear = readText(formData, "hear");
  const budget = readText(formData, "budget");

  const fieldErrors: FormState["fieldErrors"] = {};

  if (!name) {
    fieldErrors.name = "Please enter your name.";
  } else if (name.length < 2) {
    fieldErrors.name = "Name looks too short.";
  }

  if (!emailRaw) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(emailRaw)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!help) {
    fieldErrors.help = "Please tell us what we can help with.";
  } else if (help.length < 3) {
    fieldErrors.help = "Please add a bit more detail (at least a few characters).";
  }

  if (!project) {
    fieldErrors.project = "Please describe your project or goals.";
  } else if (project.length < 20) {
    fieldErrors.project = "Please share a little more about your project (at least 20 characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: "Please fix the highlighted fields below.",
      fieldErrors,
    };
  }

  try {
    await sendEmail({
      subject: `New Contact Form — ${name}`,
      replyTo: emailRaw,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;color:#333">
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;width:140px">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${esc(emailRaw)}">${esc(emailRaw)}</a></td></tr>
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
      fieldErrors: {},
    };
  } catch (err) {
    console.error("Contact form error:", err);
    if (err instanceof Error && err.message === "EMAIL_NOT_CONFIGURED") {
      return {
        success: false,
        message:
          "Message sending is not configured on the server. Please email info@stellixsoft.com directly.",
      };
    }
    return {
      success: false,
      message:
        "We could not deliver your message. Please email info@stellixsoft.com or try again in a few minutes.",
    };
  }
}

export async function submitQuoteForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = readText(formData, "name");
  const emailRaw = readText(formData, "email");
  const company = readText(formData, "company");
  const projectType = readText(formData, "projectType");
  const budgetRange = readText(formData, "budgetRange");
  const description = readText(formData, "description");

  const fieldErrors: FormState["fieldErrors"] = {};

  if (!name) {
    fieldErrors.name = "Please enter your name.";
  } else if (name.length < 2) {
    fieldErrors.name = "Name looks too short.";
  }

  if (!emailRaw) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(emailRaw)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!description) {
    fieldErrors.description = "Please describe what you need a quote for.";
  } else if (description.length < 20) {
    fieldErrors.description =
      "Please add a bit more detail (at least 20 characters) so we can scope your quote.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: "Please fix the highlighted fields below.",
      fieldErrors,
    };
  }

  try {
    await sendEmail({
      subject: `Quote Request — ${name}`,
      replyTo: emailRaw,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;color:#333">
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;width:140px">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${esc(emailRaw)}">${esc(emailRaw)}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Company</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(company) || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Project Type</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(projectType) || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee">Budget Range</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${esc(budgetRange) || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600">Description</td><td style="padding:8px 12px">${esc(description) || "—"}</td></tr>
        </table>
        <p style="margin-top:16px;font-size:12px;color:#999">Submitted at ${new Date().toISOString()}</p>
      `,
    });

    return {
      success: true,
      message: "Quote request received! We'll send a detailed proposal within 5 business days.",
      fieldErrors: {},
    };
  } catch (err) {
    console.error("Quote form error:", err);
    if (err instanceof Error && err.message === "EMAIL_NOT_CONFIGURED") {
      return {
        success: false,
        message:
          "Message sending is not configured on the server. Please email info@stellixsoft.com directly.",
      };
    }
    return {
      success: false,
      message:
        "We could not deliver your message. Please email info@stellixsoft.com or try again in a few minutes.",
    };
  }
}

export async function submitNewsletterForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const emailRaw = readText(formData, "email");

  const fieldErrors: FormState["fieldErrors"] = {};
  if (!emailRaw) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(emailRaw)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: "Please check your email address.",
      fieldErrors,
    };
  }

  try {
    await sendEmail({
      subject: `New Newsletter Subscriber`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p style="font-family:sans-serif;font-size:14px;color:#333">
          <strong>${esc(emailRaw)}</strong> subscribed to the newsletter.
        </p>
        <p style="margin-top:16px;font-size:12px;color:#999">Subscribed at ${new Date().toISOString()}</p>
      `,
    });

    return {
      success: true,
      message: "Thanks for subscribing! Check your inbox to confirm.",
      fieldErrors: {},
    };
  } catch (err) {
    console.error("Newsletter form error:", err);
    if (err instanceof Error && err.message === "EMAIL_NOT_CONFIGURED") {
      return {
        success: false,
        message: "Subscription is not configured. Please try again later.",
      };
    }
    return {
      success: false,
      message: "We could not subscribe you right now. Please try again later.",
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
