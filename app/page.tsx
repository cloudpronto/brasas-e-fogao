import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Camera } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Brand } from '@/components/brand';
import { MenuSection } from '@/components/menu-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { restaurant } from '@/lib/restaurant';
import { structuredData } from '@/lib/structured-data';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#cardapio">
        Pular para o cardápio
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <div className="welcome-line container">
          <span>Setor Oeste, Goiânia</span>
          <span>
            Segunda a sábado <i /> 7h às 18h
          </span>
          <a href="#cardapio" aria-label="Explorar o cardápio abaixo">
            À mesa <ArrowRight size={22} aria-hidden="true" />
          </a>
        </div>
        <MenuSection />
        <section
          className="house-section section"
          id="a-casa"
          aria-labelledby="house-title"
        >
          <div className="container house-layout">
            <div className="house-picture" data-reveal>
              <Image
                unoptimized
                src="/images/panelas.webp"
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
                Conheça nossa história <ArrowUpRight size={20} />
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
                    Traçar rota <ArrowUpRight size={20} aria-hidden="true" />
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
      <footer className="site-footer">
        <div className="container footer-top">
          <Brand />
          <p>Boa comida e bons encontros.</p>
          <a
            className="social-link"
            href={restaurant.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Camera size={20} aria-hidden="true" />
            <span>@brasasefogao</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Brasas e Fogão</span>
          <span>Setor Oeste · Goiânia, GO</span>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>
      <div className="mobile-dock">
        <a href="#cardapio" className="button">
          Ver cardápio
        </a>
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
