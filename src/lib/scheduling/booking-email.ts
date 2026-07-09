import { sendEmail, sendEmailTo, isEmailConfigured } from "@/src/lib/email";
import { getCompanyName, getContactEmail } from "@/src/lib/scheduling/branding";

type BookingEmailInput = {
  guestName: string;
  guestEmail: string;
  eventTitle: string;
  formattedDateTime: string;
  durationMinutes: number;
  googleMeetLink: string | null;
  notes?: string | null;
  contactEmail?: string | null;
};

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildGuestHtml(input: BookingEmailInput): string {
  const company = esc(getCompanyName());
  const meetBlock = input.googleMeetLink
    ? `<p style="margin:16px 0 0">
        <a href="${esc(input.googleMeetLink)}"
           style="display:inline-block;background:#0980a8;color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:600">
          Join Google Meet
        </a>
      </p>
      <p style="margin:12px 0 0;font-size:13px;color:#717181;word-break:break-all">
        ${esc(input.googleMeetLink)}
      </p>`
    : `<p style="margin:16px 0 0;color:#717181">
        A Google Meet link will be shared separately if video conferencing is enabled.
      </p>`;

  const notesBlock = input.notes?.trim()
    ? `<p style="margin:12px 0 0"><strong>Your notes:</strong><br>${esc(input.notes.trim())}</p>`
    : "";

  return `
    <div style="font-family:Poppins,Arial,sans-serif;max-width:600px;color:#030213;line-height:1.6">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#717181">
        ${company}
      </p>
      <h1 style="margin:0 0 16px;font-size:24px;font-weight:600">Meeting confirmed</h1>
      <p style="margin:0">Hi ${esc(input.guestName)},</p>
      <p style="margin:12px 0 0">Your meeting is scheduled. Here are the details:</p>
      <table style="width:100%;border-collapse:collapse;margin:20px 0;font-size:14px">
        <tr>
          <td style="padding:8px 0;color:#717181;width:120px">Event</td>
          <td style="padding:8px 0">${esc(input.eventTitle)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#717181">When</td>
          <td style="padding:8px 0">${esc(input.formattedDateTime)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#717181">Duration</td>
          <td style="padding:8px 0">${input.durationMinutes} minutes</td>
        </tr>
      </table>
      ${meetBlock}
      ${notesBlock}
      <p style="margin:24px 0 0;font-size:13px;color:#717181">
        Questions? Reply to this email or contact
        <a href="mailto:${esc(input.contactEmail ?? getContactEmail())}" style="color:#0980a8">
          ${esc(input.contactEmail ?? getContactEmail())}
        </a>.
      </p>
    </div>
  `;
}

function buildTeamNotificationHtml(input: BookingEmailInput): string {
  return `
    <h2>New meeting booked</h2>
    <p><strong>Guest:</strong> ${esc(input.guestName)} (${esc(input.guestEmail)})</p>
    <p><strong>Event:</strong> ${esc(input.eventTitle)}</p>
    <p><strong>When:</strong> ${esc(input.formattedDateTime)}</p>
    ${
      input.googleMeetLink
        ? `<p><strong>Google Meet:</strong> <a href="${esc(input.googleMeetLink)}">${esc(input.googleMeetLink)}</a></p>`
        : ""
    }
    ${input.notes?.trim() ? `<p><strong>Notes:</strong> ${esc(input.notes.trim())}</p>` : ""}
  `;
}

export async function sendBookingConfirmationEmails(
  input: BookingEmailInput,
): Promise<{ guestEmailSent: boolean; teamEmailSent: boolean }> {
  if (!isEmailConfigured()) {
    console.warn("Email not configured; skipping booking confirmation emails.");
    return { guestEmailSent: false, teamEmailSent: false };
  }

  const subject = `Meeting confirmed: ${input.eventTitle}`;
  const guestHtml = buildGuestHtml(input);
  const teamHtml = buildTeamNotificationHtml(input);
  const replyTo = input.contactEmail ?? getContactEmail();

  let guestEmailSent = false;
  let teamEmailSent = false;

  try {
    await sendEmailTo(input.guestEmail, {
      subject,
      html: guestHtml,
      replyTo,
    });
    guestEmailSent = true;
  } catch (error) {
    console.error("Failed to send guest booking confirmation:", error);
  }

  try {
    await sendEmail({
      subject: `New booking: ${input.eventTitle} — ${input.guestName}`,
      html: teamHtml,
      replyTo: input.guestEmail,
    });
    teamEmailSent = true;
  } catch (error) {
    console.error("Failed to send team booking notification:", error);
  }

  return { guestEmailSent, teamEmailSent };
}
