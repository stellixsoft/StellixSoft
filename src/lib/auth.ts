import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { timingSafeEqual } from "crypto";
import {
  type AdminSessionData,
  sessionOptions,
} from "@/src/lib/session";

export type { AdminSessionData };
export { sessionOptions };

export async function getAdminSession() {
  return getIronSession<AdminSessionData>(await cookies(), sessionOptions);
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session.isLoggedIn) {
    throw new Error("Unauthorized");
  }
  return session;
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

export function validateAdminCredentials(
  username: string,
  password: string,
): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD || "";
  if (!expectedPass) return false;
  return (
    safeEqual(username.trim(), expectedUser) &&
    safeEqual(password, expectedPass)
  );
}
