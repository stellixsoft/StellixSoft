import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { HANNAN_BUSINESS_CARD } from "@/src/lib/business-cards";

export const runtime = "nodejs";

function escapeVCardValue(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function foldVCardLine(line: string): string {
  const limit = 75;
  if (line.length <= limit) return line;

  const chunks: string[] = [];
  for (let index = 0; index < line.length; index += limit) {
    const prefix = index === 0 ? "" : " ";
    chunks.push(`${prefix}${line.slice(index, index + limit)}`);
  }
  return chunks.join("\r\n");
}

async function getPhotoLine(): Promise<string | null> {
  const sourcePath = HANNAN_BUSINESS_CARD.photo.vcardPhotoSourcePath;
  if (!sourcePath) return null;

  try {
    const photo = await readFile(
      join(process.cwd(), "src", "app", "api", "vcard", "hannan", sourcePath),
    );
    if (photo.byteLength > 50_000) return null;
    return foldVCardLine(
      `PHOTO;ENCODING=b;TYPE=JPEG:${photo.toString("base64")}`,
    );
  } catch {
    return null;
  }
}

export async function GET() {
  const card = HANNAN_BUSINESS_CARD;
  const photoLine = await getPhotoLine();

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCardValue(card.structuredName.familyName)};${escapeVCardValue(card.structuredName.givenName)};${escapeVCardValue(card.structuredName.additionalName ?? "")};${escapeVCardValue(card.structuredName.honorificPrefix ?? "")};${escapeVCardValue(card.structuredName.honorificSuffix ?? "")}`,
    `FN:${escapeVCardValue(card.name)}`,
    `ORG:${escapeVCardValue(card.company)}`,
    `TITLE:${escapeVCardValue(card.title)}`,
    `TEL;TYPE=CELL,VOICE:${escapeVCardValue(card.contact.whatsappTel)}`,
    `TEL;TYPE=WORK:${escapeVCardValue(card.contact.phoneTel)}`,
    `EMAIL;TYPE=WORK:${escapeVCardValue(card.contact.email)}`,
    `URL:${escapeVCardValue(card.contact.websiteUrl)}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${escapeVCardValue(card.contact.personalLinkedInUrl)}`,
    ...(photoLine ? [photoLine] : []),
    "END:VCARD",
  ];

  const body = lines.join("\r\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="Hannan-Ahmad-Khan-StellixSoft.vcf"',
    },
  });
}
