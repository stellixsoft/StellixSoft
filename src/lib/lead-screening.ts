/**
 * Screens public form submissions before they reach the sales inbox.
 * - "spam": bot traffic (honeypot filled, submitted too fast, link-stuffed). Dropped silently.
 * - "solicitation": vendors, agencies, job seekers, SEO/marketing pitches. Delivered with a
 *   "[Not a lead]" subject tag so an inbox rule can file them, and never counted as a lead.
 * - "lead": everything else.
 */

export const ENQUIRY_TYPES = {
  project: "I want to hire Stellix Soft for a project",
  support: "I'm an existing client and need support",
  vendor: "I'm offering services, a product or a partnership",
  job: "I'm looking for a job or internship",
} as const;

export type EnquiryType = keyof typeof ENQUIRY_TYPES;

export type ScreeningVerdict = "lead" | "solicitation" | "spam";

export type ScreeningResult = {
  verdict: ScreeningVerdict;
  reasons: string[];
};

/** Real people take longer than this to fill the form. */
const MIN_FILL_MS = 4000;

const MAX_LINKS = 3;

/** Phrases that show up in vendor pitches, not in buyer enquiries. */
const PITCH_PATTERNS: RegExp[] = [
  /\b(seo|search engine optimi[sz]ation) (services?|packages?|agency|experts?)\b/i,
  /\b(first|top|1st) page (of|on) google\b/i,
  /\b(rank|ranking) (your|ur) (website|site|business)\b/i,
  /\bback ?links?\b/i,
  /\blink[- ]?building\b/i,
  /\bguest (post|posting|article)s?\b/i,
  /\b(domain authority|\bDA\b \d+)/i,
  /\bwhite[- ]?label\b/i,
  /\blead generation (services?|agency|campaigns?)\b/i,
  /\b(we|i) (can|could|will) (help|get) (you|your (company|business|website))\b/i,
  /\b(we are|i am|i'm) (a|an) [\w\s-]{0,40}(agency|freelancer|service provider|vendor)\b/i,
  /\b(our|my) (team|agency|company) (specializes|specialises|offers|provides)\b/i,
  /\bi (came across|found|visited|was (browsing|checking)) your (website|site|company|profile)\b/i,
  /\b(we|our (team|company|agency)) (offer|provide)s? (outsourcing|offshore|staffing|recruitment|development) services\b/i,
  /\bpartnership (opportunity|proposal)\b/i,
  /\b(redesign|revamp) (your|ur) (website|site)\b/i,
  /\b(social media|digital|email|content) marketing (services?|agency|packages?)\b/i,
  /\b(virtual assistant|data entry|appointment setting|cold calling) services?\b/i,
  /\b(google|business) (reviews?|ratings?) (for sale|service|boost)\b/i,
  /\b(unsubscribe|opt[- ]out|reply (stop|no))\b/i,
  /\b(our|my) (rates|pricing|packages) (start|starts|are) (at|from)\b/i,
  /\b(crypto|forex|bitcoin|casino|betting|loan offer)\b/i,
];

const JOB_PATTERNS: RegExp[] = [
  /\b(my|attached) (cv|resume|résumé|portfolio)\b/i,
  /\b(job|internship|vacancy|position|opening)s? (opportunit(y|ies)|application|available)\b/i,
  /\b(apply|applying) for (a|the|any) (job|role|position|internship)\b/i,
  /\blooking for (a )?(job|internship|work|employment)\b/i,
];

function countLinks(text: string): number {
  return (text.match(/https?:\/\/|www\./gi) ?? []).length;
}

export function screenEnquiry(input: {
  enquiryType?: string;
  honeypot?: string;
  renderedAt?: string;
  name: string;
  company?: string;
  text: string;
  now?: number;
}): ScreeningResult {
  const reasons: string[] = [];
  const now = input.now ?? Date.now();

  if (input.honeypot) reasons.push("honeypot filled");

  const rendered = Number(input.renderedAt);
  if (Number.isFinite(rendered) && rendered > 0 && now - rendered < MIN_FILL_MS) {
    reasons.push("submitted too fast");
  }

  if (countLinks(input.text) > MAX_LINKS) reasons.push("too many links");

  if (reasons.length > 0) return { verdict: "spam", reasons };

  if (input.enquiryType === "vendor") reasons.push("self-identified vendor");
  if (input.enquiryType === "job") reasons.push("self-identified job seeker");

  const haystack = `${input.text}\n${input.company ?? ""}`;
  const pitch = PITCH_PATTERNS.find((p) => p.test(haystack));
  if (pitch) reasons.push(`pitch phrase: ${pitch.source.slice(0, 60)}`);
  const job = JOB_PATTERNS.find((p) => p.test(haystack));
  if (job) reasons.push(`job phrase: ${job.source.slice(0, 60)}`);

  return { verdict: reasons.length > 0 ? "solicitation" : "lead", reasons };
}
