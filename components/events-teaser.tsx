import { publicAsset } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import { eventPhoto, eventServices } from '@/lib/events';

const highlightNames = [
  'Churrasco',
  'Fogo de chão',
  'Parrilla',
  'Porco no rolete',
  'Arroz carreteiro',
  'Feijoada',
];
const highlights = eventServices.filter((service) =>
  highlightNames.includes(service.name),
);

export function EventsTeaser() {
  return (
    <section
      className="events-teaser"
      id="eventos"
      aria-labelledby="events-teaser-title"
    >
      <div className="events-teaser-grid">
        <figure className="events-teaser-photo">
          <Image
            unoptimized
            src={publicAsset(eventPhoto.src)}
            alt={eventPhoto.alt}
            width={eventPhoto.width}
            height={eventPhoto.height}
            loading="lazy"
          />
          <figcaption>Fogo de chão em evento do Brasas e Fogão</figcaption>
        </figure>
        <div className="events-teaser-panel" data-reveal>
          <p className="eyebrow events-teaser-eyebrow">
            Eventos <span className="events-badge">Em breve</span>
          </p>
          <h2 className="display-title" id="events-teaser-title">
            Traga seu
            <br />
            evento.
          </h2>
          <p>
            Antes de ter endereço, o Brasas e Fogão já acendia a brasa em festas
            e encontros. Agora estamos preparando a casa para receber o seu
            evento.
          </p>
          <ul
            className="events-teaser-list"
            aria-label="O que já servimos em eventos"
          >
            {highlights.map((service) => (
              <li key={service.name}>{service.name}</li>
            ))}
          </ul>
          <Link className="button button-dark" href="/eventos">
            Conheça nossos eventos
          </Link>
        </div>
      </div>
    </section>
  );
}
