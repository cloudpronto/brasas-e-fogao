import { publicAsset } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Clock3, MapPin } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { SiteFooter } from '@/components/site-footer';
import { MenuPreview } from '@/components/menu-preview';
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
            Segunda a sábado <i /> 7h às 18h
          </span>
          <Link href="/cardapio" aria-label="Abrir o cardápio completo">
            À mesa
          </Link>
        </div>
        <MenuPreview />
        <section
          className="house-section section"
          id="a-casa"
          aria-labelledby="house-title"
        >
          <div className="container house-layout">
            <div className="house-picture" data-reveal>
              <Image
                unoptimized
                src={publicAsset('/images/panelas.webp')}
                alt="Panelas e acompanhamentos preparados pelo Brasas e Fogão"
                width="1200"
                height="800"
                loading="lazy"
              />
              <span className="photo-corner">
                Da nossa cozinha, pra sua mesa.
              </span>
            </div>
            <div className="house-copy" data-reveal>
              <p className="eyebrow">A casa</p>
              <h2 className="display-title" id="house-title">
                A boa comida
                <br />
                ganhou endereço.
              </h2>
              <p>
                Nossa história começa na cozinha dos eventos. Agora, o Brasas e
                Fogão ganha uma casa no Setor Oeste, em Goiânia: um lugar para
                sentar, comer bem e compartilhar a mesa.
              </p>
              <p>
                Do café aos espetos, das quitandas à feijoada, tem espaço para
                diferentes fomes e bons encontros.
              </p>
              <a
                className="text-link small-link"
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conheça nossa história
              </a>
            </div>
          </div>
        </section>
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
                    <strong>Segunda a sábado</strong>
                    <span>Das 7h às 18h</span>
                  </p>
                  <p className="location-note">
                    Um café, uma pausa ou um encontro à mesa.
                    <br />A gente te espera por aqui.
                  </p>
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
