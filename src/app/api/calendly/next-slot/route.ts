import { NextResponse } from "next/server";
import { CALENDLY_EVENT_SLUG } from "@/src/lib/constants";

const CALENDLY_API = "https://api.calendly.com";

type CalendlyUserMe = { resource: { uri: string } };
type CalendlyEventTypes = {
  collection: Array<{ uri: string; slug: string; active: boolean }>;
};
type CalendlyAvailableTimes = { collection: Array<{ start_time: string }> };

async function resolveEventTypeUri(token: string): Promise<string | null> {
  const explicit = process.env.CALENDLY_EVENT_TYPE_URI?.trim();
  if (explicit) return explicit;

  const meRes = await fetch(`${CALENDLY_API}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  });
  if (!meRes.ok) return null;
  const me = (await meRes.json()) as CalendlyUserMe;
  const userUri = me.resource.uri;

  const etUrl = new URL(`${CALENDLY_API}/event_types`);
  etUrl.searchParams.set("user", userUri);
  etUrl.searchParams.set("active", "true");

  const etRes = await fetch(etUrl.toString(), {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  });
  if (!etRes.ok) return null;
  const et = (await etRes.json()) as CalendlyEventTypes;
  const slug =
    process.env.CALENDLY_EVENT_SLUG?.trim() || CALENDLY_EVENT_SLUG;
  const match = et.collection.find((t) => t.slug === slug);
  return match?.uri ?? et.collection[0]?.uri ?? null;
}

async function findEarliestSlot(
  token: string,
  eventTypeUri: string
): Promise<string | null> {
  const now = Date.now();
  const weekMs = 7 * 24 * 60 * 60 * 1000;

  for (let w = 0; w < 8; w++) {
    const start = new Date(now + w * weekMs);
    const end = new Date(start.getTime() + weekMs);
    const url = new URL(`${CALENDLY_API}/event_type_available_times`);
    url.searchParams.set("event_type", eventTypeUri);
    url.searchParams.set("start_time", start.toISOString());
    url.searchParams.set("end_time", end.toISOString());

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 120 },
    });
    if (!res.ok) continue;

    const data = (await res.json()) as CalendlyAvailableTimes;
    const times = (data.collection ?? [])
      .map((c) => c.start_time)
      .filter(Boolean)
      .sort();
    if (times.length > 0) return times[0]!;
  }
  return null;
}

/**
 * GET next bookable start time from Calendly API.
 * Env: CALENDLY_PERSONAL_ACCESS_TOKEN (required). Optional: CALENDLY_EVENT_TYPE_URI, CALENDLY_EVENT_SLUG.
 * @see https://developer.calendly.com/how-to-authenticate-with-personal-access-tokens
 */
export async function GET() {
  const token = process.env.CALENDLY_PERSONAL_ACCESS_TOKEN?.trim();
  if (!token) {
    return NextResponse.json({
      ok: true,
      configured: false,
      iso: null as string | null,
    });
  }

  try {
    const eventTypeUri = await resolveEventTypeUri(token);
    if (!eventTypeUri) {
      return NextResponse.json({
        ok: true,
        configured: true,
        iso: null as string | null,
        error: "event_type_not_found",
      });
    }

    const iso = await findEarliestSlot(token, eventTypeUri);
    return NextResponse.json({
      ok: true,
      configured: true,
      iso,
    });
  } catch {
    return NextResponse.json({
      ok: true,
      configured: true,
      iso: null as string | null,
      error: "calendly_request_failed",
    });
  }
}
