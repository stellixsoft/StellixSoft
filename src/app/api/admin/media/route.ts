import { NextResponse } from "next/server";
import { getAdminSession } from "@/src/lib/auth";
import { listMediaLibrary } from "@/src/lib/media-library";

export async function GET() {
  const session = await getAdminSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const items = await listMediaLibrary();

  return NextResponse.json({
    items,
    // Keep legacy shape for the blog editor "Choose from library" picker
    images: items.map((item) => item.url),
  });
}
