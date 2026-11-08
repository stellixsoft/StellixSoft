/** Budget ranges offered by the contact form dropdown (USD). Validated server-side. */
export const CONTACT_BUDGET_RANGES = [
  "Under $15k",
  "$15k – $40k",
  "$40k – $100k",
  "$100k+",
  "Not sure yet",
] as const;

/** "How did you hear about us?" options. AI assistants are listed because GA4 under-counts them. */
export const CONTACT_HEAR_OPTIONS = [
  "Google search",
  "ChatGPT / AI assistant",
  "LinkedIn",
  "Clutch / GoodFirms / directory",
  "Referral",
  "Other",
] as const;
