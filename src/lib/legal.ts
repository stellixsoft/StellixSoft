/** Display string shown on Privacy Policy and Terms of Service pages. */
export const LEGAL_LAST_UPDATED = "May 22, 2026";

/** Transactional SMS types disclosed on the contact form, Terms, and Privacy Policy (A2P 10DLC). */
export const SMS_TRANSACTIONAL_MESSAGE_TYPES =
  "service updates, quotes, scheduling, and follow-ups" as const;

/** @deprecated Use SMS_TRANSACTIONAL_MESSAGE_TYPES */
export const SMS_MESSAGE_TYPES = SMS_TRANSACTIONAL_MESSAGE_TYPES;

/** Marketing/promotional SMS types (separate optional opt-in on contact form). */
export const SMS_MARKETING_MESSAGE_TYPES =
  "promotional offers, announcements, and marketing updates" as const;

export const LEGAL_CONTACT_EMAIL = "info@stellixsoft.com";
export const LEGAL_SITE_URL = "https://stellixsoft.com";
