import { google } from "googleapis";

export type CalendarEventInput = {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  timezone: string;
  attendeeEmail: string;
  attendeeName: string;
};

export type CalendarEventResult = {
  eventId: string;
  meetLink: string | null;
};

function getOAuthClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  return oauth2Client;
}

export function isGoogleCalendarConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.GOOGLE_REFRESH_TOKEN,
  );
}

export async function createGoogleCalendarEvent(
  input: CalendarEventInput,
): Promise<CalendarEventResult | null> {
  const auth = getOAuthClient();
  if (!auth) return null;

  const calendarId = process.env.GOOGLE_CALENDAR_ID ?? "primary";
  const calendar = google.calendar({ version: "v3", auth });

  const response = await calendar.events.insert({
    calendarId,
    conferenceDataVersion: 1,
    sendUpdates: "all",
    requestBody: {
      summary: input.title,
      description: input.description,
      start: {
        dateTime: input.startTime.toISOString(),
        timeZone: input.timezone,
      },
      end: {
        dateTime: input.endTime.toISOString(),
        timeZone: input.timezone,
      },
      attendees: [
        {
          email: input.attendeeEmail,
          displayName: input.attendeeName,
        },
      ],
      conferenceData: {
        createRequest: {
          requestId: `stellix-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    },
  });

  const eventId = response.data.id ?? "";
  const meetLink =
    response.data.hangoutLink ??
    response.data.conferenceData?.entryPoints?.find(
      (ep) => ep.entryPointType === "video",
    )?.uri ??
    null;

  return { eventId, meetLink };
}

export async function cancelGoogleCalendarEvent(
  eventId: string,
): Promise<void> {
  const auth = getOAuthClient();
  if (!auth || !eventId) return;

  const calendarId = process.env.GOOGLE_CALENDAR_ID ?? "primary";
  const calendar = google.calendar({ version: "v3", auth });

  try {
    await calendar.events.delete({
      calendarId,
      eventId,
      sendUpdates: "all",
    });
  } catch (error) {
    console.error("Failed to cancel Google Calendar event:", error);
  }
}

export function buildCalendarDescription(opts: {
  eventTitle: string;
  guestName: string;
  guestEmail: string;
  guestNotes?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
}): string {
  const lines = [
    `Event: ${opts.eventTitle}`,
    `Guest: ${opts.guestName}`,
    `Guest email: ${opts.guestEmail}`,
  ];
  if (opts.guestNotes?.trim()) {
    lines.push(`Notes: ${opts.guestNotes.trim()}`);
  }
  if (opts.contactEmail) {
    lines.push(`Contact email: ${opts.contactEmail}`);
  }
  if (opts.contactPhone) {
    lines.push(`Contact phone: ${opts.contactPhone}`);
  }
  return lines.join("\n");
}

export function buildGmailSearchUrl(eventTitle: string, guestEmail: string): string {
  const query = encodeURIComponent(`${eventTitle} ${guestEmail}`);
  return `https://mail.google.com/mail/u/0/#search/${query}`;
}
