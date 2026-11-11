export const CALENDLY_URL =
  "https://calendly.com/stellixsoft/15-minute-meeting";

/** Comma-separated invitee emails (max 10) passed into Calendly prefill when supported */
export const CALENDLY_DEFAULT_GUEST_EMAILS: string[] = (
  process.env.NEXT_PUBLIC_CALENDLY_GUEST_EMAILS ?? ""
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
  .slice(0, 10);

/** Shown when Calendly API is not configured or no slot is returned. */
export const CALENDLY_NEXT_SLOT_FALLBACK_LABEL = "See Calendly for next opening";

/** Event type slug segment from CALENDLY_URL; used to resolve the API event type. */
export const CALENDLY_EVENT_SLUG = "15-minute-meeting";

/** Stellix Soft LLC (US) business phone - use in tel: links as E.164. */
export const STELLIX_SOFT_LLC_PHONE_TEL = "+18474969803";
export const STELLIX_SOFT_LLC_PHONE_DISPLAY = "(847) 496-9803";

/** Sister brand that sells and onboards medical billing clients. */
export const STELLIX_BILLING_URL = "https://stellixbilling.com";

/**
 * Builds a stellixbilling.com link tagged so GA4 on that site can attribute
 * referrals from this site. `content` identifies the CTA placement.
 */
export function stellixBillingHref(path: string, content: string): string {
  const url = new URL(path, STELLIX_BILLING_URL);
  url.searchParams.set("utm_source", "stellixsoft");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "medical_billing_services");
  url.searchParams.set("utm_content", content);
  return url.toString();
}
