import Link from 'next/link';
import { Clock3, MapPin, MessageCircle } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { SiteFooter } from '@/components/site-footer';
import { MenuPreview } from '@/components/menu-preview';
import { EventsTeaser } from '@/components/events-teaser';
import { ScrollReveal } from '@/components/scroll-reveal';
import { restaurant } from '@/lib/restaurant';
import { structuredData } from '@/lib/structured-data';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-principal">
        <Hero />
        <div className="welcome-line container">
          <span>Setor Oeste, Goiânia</span>
          <span>
            {restaurant.openDays} <i /> 7h às 16h
          </span>
          <Link href="/cardapio" aria-label="Abrir o cardápio completo">
            À mesa
          </Link>
        </div>
        <MenuPreview />
        <EventsTeaser />
        <section
          className="location-section section"
          id="localizacao"
          aria-labelledby="location-title"
        >
          <div className="container">
            <div className="location-heading">
              <p className="eyebrow">Sua próxima parada</p>
              <h2 className="display-title" id="location-title">
                A gente se encontra
                <br />
                no Setor Oeste.
              </h2>
            </div>
            <div className="location-map">
              <iframe
                src={restaurant.mapsEmbedUrl}
                title="Google Maps — localização do Brasas e Fogão na Rua 22, 658, Setor Oeste, Goiânia"
                width="1200"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="location-grid">
              <div className="location-detail">
                <MapPin aria-hidden="true" />
                <div>
                  <h3>Onde estamos</h3>
                  <address>
                    <strong>Rua 22, 658</strong>
                    <span>Quadra K9, lote 05 · Setor Oeste</span>
                    <span>Goiânia — GO · CEP 74120-130</span>
                  </address>
                  <a
                    className="button"
                    href={restaurant.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Traçar rota
                  </a>
                </div>
              </div>
              <div className="location-detail">
                <Clock3 aria-hidden="true" />
                <div>
                  <h3>Quando chegar</h3>
                  <p className="hours">
                    <strong>{restaurant.openDays}</strong>
                    <span>{restaurant.openTime}</span>
                  </p>
                  <p className="location-note">
                    {restaurant.closedNote}
                    <br />
                    Do café ao almoço, a gente te espera.
                  </p>
                </div>
              </div>
              <div className="location-detail">
                <MessageCircle aria-hidden="true" />
                <div>
                  <h3>Fale com a gente</h3>
                  <p className="hours">
                    <strong>{restaurant.phone}</strong>
                    <span>WhatsApp e ligações</span>
                  </p>
                  <a
                    className="button"
                    href={restaurant.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <div className="mobile-dock">
        <Link href="/cardapio" className="button">
          Ver cardápio
        </Link>
      </div>
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
