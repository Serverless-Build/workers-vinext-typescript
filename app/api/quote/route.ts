export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const quantity = Number(params.get('quantity'));
  const unitPriceCents = Number(params.get('unitPriceCents'));
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100 || !Number.isInteger(unitPriceCents) || unitPriceCents < 1 || unitPriceCents > 100000) {
    return Response.json({ error: 'quantity must be 1–100 and unitPriceCents must be 1–100000, both integers' }, { status: 400 });
  }
  return Response.json({ quantity, totalCents: quantity * unitPriceCents, marker: 'SERVERLESS_BUILD_VINEXT_TYPESCRIPT_V1' });
}
