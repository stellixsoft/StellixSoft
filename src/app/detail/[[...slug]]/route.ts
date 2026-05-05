function goneResponse() {
  return new Response("Gone", { status: 410 });
}

export function GET() {
  return goneResponse();
}

export function HEAD() {
  return goneResponse();
}

export function POST() {
  return goneResponse();
}

export function PUT() {
  return goneResponse();
}

export function PATCH() {
  return goneResponse();
}

export function DELETE() {
  return goneResponse();
}
