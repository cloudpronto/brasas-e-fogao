import type { Metadata } from 'next';
import { restaurant } from '@/lib/restaurant';
import './globals.css';
import './sections.css';

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.origin),
  title: 'Brasas e Fogão | Restaurante no Setor Oeste, Goiânia',
  description: restaurant.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Brasas e Fogão — Goiânia',
    description: restaurant.description,
    url: restaurant.origin,
    siteName: restaurant.name,
  },
  twitter: {
    card: 'summary',
    title: 'Brasas e Fogão — Goiânia',
    description: restaurant.description,
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          rel="preload"
          href="/fonts/bodoni-moda-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/six-caps-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
