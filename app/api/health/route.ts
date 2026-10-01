export function GET() {
  return Response.json({ ok: true, marker: 'SERVERLESS_BUILD_VINEXT_TYPESCRIPT_V1', runtime: 'vinext on Workers' });
}
