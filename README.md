# vinext on Cloudflare Workers

A Workers-native framework starter adapted from the official create-vinext-app Cloudflare UI: App Router, Tailwind CSS, React Server Components, request-time server rendering, and Next.js-style route handlers. The live iframe shows the actual application. A hydrated counter demonstrates Client Components; a quote calculator uses integer cents. No database is required.

## Setup and development

Install Node.js 22+ and run `npm ci`, then `npm run dev`. Open the printed local URL. Click the counter to check client hydration and refresh the page to see the server-generated timestamp change. The API routes are `/api/health` and `/api/quote?quantity=3&unitPriceCents=250`.

## Build and deploy

Run `npm run check` for TypeScript checking and a production build. The Cloudflare Vite plugin emits `dist/server/wrangler.json` and the client assets. Authenticate with `npx wrangler login`, then run `npm run deploy`. `npm run start` tests the production build with Wrangler locally.

## Test remotely

Open the deployed home page, click the counter, and refresh it. Request `/api/health` to inspect the verification marker. Request `/api/quote?quantity=3&unitPriceCents=250` to receive 750 cents, then try a quantity of 0 for HTTP 400. The pattern page embeds this UI with desktop, tablet, and mobile preview controls.

## Production fit

This example uses **vinext 1.0**, the production-ready release announced in [Next.js applications, powered by Vite](https://blog.cloudflare.com/vinext-nextjs-on-vite/). Check the [compatibility dashboard](https://vinext.dev/compatibility) and run `npx vinext check` when migrating an existing application. This example uses TypeScript because it demonstrates a JavaScript/React framework; Python and Rust versions would be different frameworks.

No bindings or secrets beyond static assets are needed. Add storage bindings only when you need persistence; do not use module-level variables as a database.

## References

- [Next.js / vinext on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [vinext source](https://github.com/cloudflare/vinext)
- [Official starter UI source](https://github.com/cloudflare/vinext/blob/main/packages/create-vinext-app/src/index.ts)

## Pattern and live demo

- [Pattern page](https://serverless.build/patterns/vinext-workers)
- [Live deployment](https://workers-vinext-typescript.dwarven.workers.dev)
