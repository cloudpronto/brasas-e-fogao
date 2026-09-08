'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { restaurant } from '@/lib/restaurant';

type Dish = 'choripan' | 'feijoada';

const dishes = [
  {
    id: 'choripan' as const,
    src: '/images/choripan-hero.webp',
    alt: 'Choripán com linguiça grelhada e chimichurri em pão rústico',
  },
  {
    id: 'feijoada' as const,
    src: '/images/feijoada-hero.webp',
    alt: 'Feijoada com arroz, couve e farofa em uma travessa rústica',
  },
];

export function Hero() {
  const [activeDish, setActiveDish] = useState<Dish>('choripan');
  const nextDish = activeDish === 'choripan' ? 'feijoada' : 'choripan';

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-photograph">
        {dishes.map((dish) => (
          <div
            className={`hero-slide ${activeDish === dish.id ? 'is-active' : ''}`}
            aria-hidden={activeDish !== dish.id}
            key={dish.id}
          >
            <Image
              unoptimized
              src={dish.src}
              width={1672}
              height={941}
              alt={dish.alt}
              fetchPriority={dish.id === 'choripan' ? 'high' : 'auto'}
            />
          </div>
        ))}
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
      <button
        className="hero-dish-switch"
        type="button"
        data-dish={activeDish}
        onClick={() => setActiveDish(nextDish)}
        aria-label={`Mostrar ${nextDish === 'feijoada' ? 'a feijoada' : 'o Choripán ao Chimichurri'}`}
      >
        <span className="hero-switch-dot" aria-hidden="true" />
      </button>
    </section>
  );
}
