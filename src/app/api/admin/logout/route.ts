import { NextResponse } from "next/server";
import { getAdminSession } from "@/src/lib/auth";

export async function POST() {
  const session = await getAdminSession();
  session.destroy();
  return NextResponse.json({ ok: true });
}
