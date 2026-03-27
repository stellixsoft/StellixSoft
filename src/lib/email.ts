import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "devabdulrehmanys@gmail.com";
const FROM_EMAIL = "StellixSoft <onboarding@resend.dev>";

interface SendEmailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ subject, html, replyTo }: SendEmailOptions) {
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(error.message);
  }
}
