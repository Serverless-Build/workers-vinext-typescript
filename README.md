# vinext on Cloudflare Workers

A Workers-native framework example: React Server Components, request-time server rendering, and Next.js-style route handlers, built with vinext and Vite. A quote calculator uses integer cents; no database is required.

## Setup and development

Install Node.js 22+ and run `npm install`, then `npm run dev`. Open the printed local URL. Refresh the page to see the server-generated timestamp change. The API routes are `/api/health` and `/api/quote?quantity=3&unitPriceCents=250`.

## Build and deploy

Run `npm run check` for TypeScript checking and a production build. The Cloudflare Vite plugin emits `dist/server/wrangler.json` and the client assets. Authenticate with `npx wrangler login`, then run `npm run deploy`. `npm run start` tests the production build with Wrangler locally.

## Test remotely

Open the deployed home page and refresh it. Request `/api/health` to inspect the verification marker. Request `/api/quote?quantity=3&unitPriceCents=250` to receive 750 cents, then try a quantity of 0 for HTTP 400. The pattern page provides the same API requests.

## Production fit

vinext reimplements the Next.js API surface on Vite and is **in beta**. Check the [compatibility dashboard](https://vinext.dev/compatibility) and run `npx vinext check` before migrating an existing application. This example uses TypeScript because it demonstrates a JavaScript/React framework; Python and Rust versions would be different frameworks.

No bindings or secrets beyond static assets are needed. Add storage bindings only when you need persistence; do not use module-level variables as a database.

## References

- [Next.js / vinext on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [vinext source](https://github.com/cloudflare/vinext)

## Pattern and live demo

- [Pattern page](https://serverless.build/patterns/vinext-workers)
- [Live deployment](https://workers-vinext-typescript.dwarven.workers.dev)
