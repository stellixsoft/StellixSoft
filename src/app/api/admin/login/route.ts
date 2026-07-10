import { NextRequest, NextResponse } from "next/server";
import {
  getAdminSession,
  validateAdminCredentials,
} from "@/src/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const username = String(body.username || "");
    const password = String(body.password || "");

    if (!validateAdminCredentials(username, password)) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 },
      );
    }

    const session = await getAdminSession();
    session.isLoggedIn = true;
    session.username = username.trim();
    await session.save();

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
