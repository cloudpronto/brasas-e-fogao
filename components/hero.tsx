'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { restaurant } from '@/lib/restaurant';

type Dish = 'feijoada' | 'choripan';

const dishes = [
  {
    id: 'feijoada' as const,
    src: '/images/feijoada-hero.webp',
    alt: 'Feijoada com arroz, couve e farofa em uma travessa rústica',
  },
  {
    id: 'choripan' as const,
    src: '/images/choripan-hero.webp',
    alt: 'Choripan com linguiça grelhada e chimichurri em pão rústico',
  },
];

function getNextDish(dish: Dish): Dish {
  return dish === 'feijoada' ? 'choripan' : 'feijoada';
}

export function Hero() {
  const [activeDish, setActiveDish] = useState<Dish>('feijoada');
  const [isPaused, setIsPaused] = useState(false);
  const nextDish = getNextDish(activeDish);

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveDish((currentDish) => getNextDish(currentDish));
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [activeDish, isPaused]);

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
              fetchPriority={dish.id === 'feijoada' ? 'high' : 'auto'}
            />
          </div>
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow">Restaurante em Goiânia</p>
        <h1 className="hero-title" id="hero-title">
          <span>Fogo na brasa.</span>
          <span>Gente a mesa.</span>
        </h1>
        <p className="hero-description">Boa comida e bons encontros.</p>
        <div className="hero-actions">
          <Link className="button button-hero" href="/cardapio">
            Explorar cardápio
          </Link>
          <a
            className="text-link"
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Como chegar
          </a>
        </div>
      </div>
      <button
        className="hero-dish-switch"
        type="button"
        data-dish={activeDish}
        onClick={() => setActiveDish(nextDish)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        aria-label={`Mostrar ${nextDish === 'feijoada' ? 'a feijoada' : 'o Choripan ao chimichurri'}`}
      >
        <span className="hero-switch-dot" aria-hidden="true" />
      </button>
    </section>
  );
}
