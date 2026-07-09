export function getCompanyName(): string {
  return process.env.NEXT_PUBLIC_COMPANY_NAME?.trim() || "StellixSoft";
}

export function getContactEmail(): string {
  return (
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
    process.env.CONTACT_INBOX_EMAIL?.trim() ||
    "info@stellixsoft.com"
  );
}

export function getContactPhone(): string | null {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
  return phone || null;
}
