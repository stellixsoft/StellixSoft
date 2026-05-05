import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/detail/")) {
    const url = request.nextUrl.clone();
    url.pathname = "/410";
    return NextResponse.rewrite(url, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/detail/:path*"],
};
