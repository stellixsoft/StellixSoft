import { NextRequest, NextResponse } from "next/server";
import { authenticateAdminLogin, getAdminSession } from "@/src/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const username = String(body.username || "");
    const password = String(body.password || "");

    const auth = await authenticateAdminLogin(username, password);
    if (!auth) {
      return NextResponse.json(
        { error: "Invalid email/username or password" },
        { status: 401 },
      );
    }

    const session = await getAdminSession();
    session.isLoggedIn = true;
    session.username = auth.username;
    session.isSuperAdmin = auth.isSuperAdmin;
    session.permissions = auth.permissions;
    session.userId = auth.userId;
    await session.save();

    return NextResponse.json({
      ok: true,
      permissions: auth.permissions,
      isSuperAdmin: auth.isSuperAdmin,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
