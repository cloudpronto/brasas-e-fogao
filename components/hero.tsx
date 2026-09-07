import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { restaurant } from '@/lib/restaurant';

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-photograph">
        <Image
          unoptimized
          src="/images/feijoada-hero.webp"
          width="1672"
          height="941"
          alt="Feijoada com arroz, couve e farofa em uma travessa rústica"
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow">Restaurante em Goiânia</p>
        <h1 className="hero-title" id="hero-title">
          <span>Fogo na brasa.</span>
          <span>Gente à mesa.</span>
        </h1>
        <p className="hero-description">Boa comida e bons encontros.</p>
        <div className="hero-actions">
          <a className="button button-hero" href="#cardapio">
            Explorar cardápio
          </a>
          <a
            className="text-link"
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Como chegar <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
