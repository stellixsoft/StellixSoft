import { NextResponse } from "next/server";
import {
  clearAdminSessionCookie,
  requireAdminSession,
  setAdminSessionCookie,
  verifyAdminCredentials,
} from "@/src/lib/admin-auth";
import { adminLoginSchema } from "@/src/lib/scheduling/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = adminLoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const valid = await verifyAdminCredentials(
    parsed.data.email,
    parsed.data.password,
  );

  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const { createAdminSession } = await import("@/src/lib/admin-auth");
  const token = await createAdminSession(parsed.data.email);
  await setAdminSessionCookie(token);

  return NextResponse.json({ success: true });
}

export async function DELETE() {
  try {
    await requireAdminSession();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await clearAdminSessionCookie();
  return NextResponse.json({ success: true });
}
