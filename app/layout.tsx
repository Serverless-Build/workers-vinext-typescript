import type { ReactNode } from 'react';

export const metadata = { title: 'vinext on Workers', description: 'Server rendering and route handlers on Cloudflare Workers' };
export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="en"><body style={{ margin: 0, background: '#fff7ed', color: '#3d2518', fontFamily: 'system-ui, sans-serif' }}>{children}</body></html>;
}
