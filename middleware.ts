import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  verifyAdminSessionToken,
} from "@/src/lib/admin-auth-edge";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/detail/")) {
    const url = request.nextUrl.clone();
    url.pathname = "/410";
    return NextResponse.rewrite(url, { status: 410 });
  }

  if (pathname.startsWith("/admin")) {
    const isLogin = pathname === "/admin/login";
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const isAuthed = await verifyAdminSessionToken(token);

    if (!isAuthed && !isLogin) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (isAuthed && isLogin) {
      const dashboardUrl = request.nextUrl.clone();
      dashboardUrl.pathname = "/admin";
      dashboardUrl.search = "";
      return NextResponse.redirect(dashboardUrl);
    }
  }

  if (pathname.startsWith("/api/admin")) {
    const isLoginPost =
      pathname === "/api/admin/auth/login" && request.method === "POST";

    if (!isLoginPost) {
      const token = request.cookies.get(COOKIE_NAME)?.value;
      const isAuthed = await verifyAdminSessionToken(token);
      if (!isAuthed) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/detail/:path*", "/admin/:path*", "/api/admin/:path*"],
};
