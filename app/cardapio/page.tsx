import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MenuSection } from '@/components/menu-section';
import { restaurant } from '@/lib/restaurant';
import { structuredData } from '@/lib/structured-data';
export const metadata: Metadata = {
  title: 'Cardápio | Brasas e Fogão em Goiânia',
  description:
    'Confira o cardápio do Brasas e Fogão no Setor Oeste, em Goiânia: lanches, cafeteria, quitandas, pastéis, espetos, acompanhamentos e bebidas.',
  alternates: { canonical: '/cardapio' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Cardápio do Brasas e Fogão em Goiânia',
    description:
      'Lanches, cafeteria, quitandas, pastéis, espetos, acompanhamentos e bebidas no Setor Oeste.',
    url: '/cardapio',
    siteName: restaurant.name,
    images: ['/images/choripan-hero.webp'],
  },
};

export default function CardapioPage() {
  return (
    <div className="menu-route" id="inicio">
      <a className="skip-link" href="#cardapio">
        Pular para o cardápio
      </a>
      <SiteHeader compact />
      <main className="menu-page">
        <header className="container menu-page-heading">
          <h1 id="menu-page-title">
            Cardápio<span className="menu-desktop-title"> da casa</span>
          </h1>
          <p className="menu-page-location">
            {restaurant.neighborhood} · {restaurant.city}
          </p>
          <a
            className="menu-mobile-directions"
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Como chegar
          </a>
        </header>
        <MenuSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\u003c'),
        }}
      />
    </div>
  );
}
