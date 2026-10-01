import type { ReactNode } from 'react';
import './globals.css';

export const metadata = { title: 'vinext on Workers', description: 'Server rendering and route handlers on Cloudflare Workers' };
export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
