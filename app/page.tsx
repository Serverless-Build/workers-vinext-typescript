export const dynamic = 'force-dynamic';

export default function Home() {
  const renderedAt = new Date().toISOString();
  return <main style={{ maxWidth: 720, margin: 'auto', padding: '48px 24px' }}>
    <p>SERVERLESS BUILD · FRAMEWORK PATTERN</p>
    <h1>Server-rendered at the edge</h1>
    <p>This page is a React Server Component, rendered by vinext on a Cloudflare Worker.</p>
    <section style={{ padding: 24, background: 'white', borderRadius: 12, margin: '24px 0' }}>
      <h2>A fresh render</h2><p>Refresh to observe server-side rendering:</p>
      <time dateTime={renderedAt}>{renderedAt}</time>
    </section>
    <h2>Try the route handlers</h2>
    <ul><li><a href="/api/health">Health and deployment marker</a></li><li><a href="/api/quote?quantity=3&unitPriceCents=250">Calculate a quote (750 cents)</a></li></ul>
    <p>Change the quantity to 0 to see the API return a validation error.</p>
    <p>vinext is a beta implementation of the Next.js API surface using Vite. Review compatibility before adopting it for an existing application.</p>
    <p><a href="https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/">Workers framework guide</a></p>
  </main>;
}
