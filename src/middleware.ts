import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import type { AdminSessionData } from "@/src/lib/session";
import { sessionOptions } from "@/src/lib/session";
import {
  ADMIN_PERMISSIONS,
  hasPermission,
  permissionForPath,
} from "@/src/lib/admin-permissions";
import {
  goneResponse,
  isHomepageSearchJunk,
  isLegacyGonePath,
} from "@/src/lib/legacy-gone-paths";

function isSuperAdmin(session: AdminSessionData) {
  if (session.isSuperAdmin) return true;
  const expected = process.env.ADMIN_USERNAME || "admin";
  return Boolean(session.username && session.username.trim() === expected);
}

function firstAllowedPath(session: AdminSessionData): string {
  if (isSuperAdmin(session)) return "/admin";
  for (const perm of ADMIN_PERMISSIONS) {
    if (hasPermission(session.permissions, perm.id, false)) {
      return perm.href;
    }
  }
  return "/admin/login";
}

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (isLegacyGonePath(pathname) || isHomepageSearchJunk(pathname, searchParams)) {
    return goneResponse();
  }

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const session = await getIronSession<AdminSessionData>(
    request,
    response,
    sessionOptions,
  );

  if (!session.isLoggedIn) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const required = permissionForPath(pathname);
  if (
    required &&
    !hasPermission(session.permissions, required, isSuperAdmin(session))
  ) {
    const fallback = firstAllowedPath(session);
    if (fallback === "/admin/login") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    const url = new URL(fallback, request.url);
    if (fallback === "/admin") {
      url.searchParams.set("denied", "1");
    }
    if (url.pathname === pathname) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Run on all paths except Next internals and common static assets.
     * Legacy 410 + admin auth both need broad coverage.
     */
    "/((?!_next/static|_next/image|favicon.ico|assets/|tinymce/|uploads/).*)",
  ],
};
