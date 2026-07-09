import { jwtVerify } from "jose";

const COOKIE_NAME = "stellix_admin_session";

function getSessionSecret(): Uint8Array {
  const secret =
    process.env.ADMIN_SESSION_SECRET ??
    process.env.ADMIN_PASSWORD_HASH ??
    "dev-insecure-secret-change-me";
  return new TextEncoder().encode(secret);
}

export async function verifyAdminSessionToken(
  token: string | undefined,
): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSessionSecret());
    return payload.role === "admin" && typeof payload.email === "string";
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
