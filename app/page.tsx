import Counter from './components/counter';

// Adapted from create-vinext-app's Cloudflare starter (see THIRD_PARTY_NOTICES.md).
export const dynamic = 'force-dynamic';

export default function Home() {
  const renderedAt = new Date().toISOString();
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950">
      <section className="mx-auto flex max-w-4xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">vinext + Cloudflare Workers</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">Build Next.js-style apps with Vite and deploy them to the edge.</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">This App Router project is wired for vinext, Tailwind CSS, and Cloudflare Workers.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ['Develop', 'Run the vinext dev server locally.', 'npm run dev'],
            ['Build', 'Create Worker-ready production output.', 'npm run build'],
            ['Deploy', 'Ship the generated Worker with Wrangler.', 'npm run deploy'],
          ].map(([title, description, command]) => (
            <div className="rounded-lg border border-slate-200 bg-white p-5" key={title}>
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              <code className="mt-4 block rounded bg-slate-100 px-3 py-2 text-sm">{command}</code>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="font-semibold">Rendered on the Worker</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Refresh to see this React Server Component render again.</p>
            <time className="mt-4 block break-all font-mono text-sm" dateTime={renderedAt}>{renderedAt}</time>
          </div>
          <Counter />
        </div>

        <nav aria-label="Starter resources" className="flex flex-wrap gap-3">
          {[
            ['https://github.com/cloudflare/vinext', 'vinext'],
            ['https://developers.cloudflare.com/workers/', 'Workers'],
            ['/api/health', 'Health'],
            ['/api/quote?quantity=3&unitPriceCents=250', 'API route'],
          ].map(([href, label]) => (
            <a className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100" href={href} key={href} rel="noreferrer" target="_blank">{label}</a>
          ))}
        </nav>
      </section>
    </main>
  );
}
