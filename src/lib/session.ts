import type { SessionOptions } from "iron-session";
import type { AdminPermissionId } from "@/src/lib/admin-permissions";

export interface AdminSessionData {
  isLoggedIn: boolean;
  username?: string;
  /** Env root admin — full access */
  isSuperAdmin?: boolean;
  permissions?: AdminPermissionId[];
  userId?: string;
}

export const sessionOptions: SessionOptions = {
  password:
    process.env.SESSION_SECRET ||
    "complex_password_at_least_32_characters_long",
  cookieName: "stellix_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  },
};
