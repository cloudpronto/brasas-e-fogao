import { publicAsset } from '@/lib/assets';
import type { Metadata } from 'next';
import { restaurant } from '@/lib/restaurant';
import { fontFaceCss } from '@/lib/fonts';
import './globals.css';
import './sections.css';
import './menu-pages.css';
import './hero-refinement.css';
import './hero-polish.css';
import './hero-slider.css';
import './hero-timer.css';

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.origin),
  title: 'Brasas e Fogão | Restaurante no Setor Oeste, Goiânia',
  description: restaurant.description,
  alternates: { canonical: `${restaurant.origin}/` },
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
  icons: { icon: publicAsset('/favicon.svg') },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <style>{fontFaceCss}</style>
        <link
          rel="preload"
          href={publicAsset('/fonts/bodoni-moda-700.woff2')}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={publicAsset('/fonts/six-caps-400.woff2')}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
