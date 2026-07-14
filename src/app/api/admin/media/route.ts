import { NextResponse } from "next/server";
import { requirePermission } from "@/src/lib/auth";
import { listMediaLibrary } from "@/src/lib/media-library";

export async function GET() {
  const gate = await requirePermission("media");
  if (!gate.ok) {
    // Blog editors also need library picker — allow blogs permission too
    const blogs = await requirePermission("blogs");
    if (!blogs.ok) {
      return NextResponse.json(
        { error: gate.status === 401 ? "Unauthorized" : "Forbidden" },
        { status: gate.status === 401 ? 401 : 403 },
      );
    }
  }

  const items = await listMediaLibrary();

  return NextResponse.json({
    items,
    images: items.map((item) => item.url),
  });
}
