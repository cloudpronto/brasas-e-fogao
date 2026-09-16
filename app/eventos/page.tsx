import type { Metadata } from 'next';
import Image from 'next/image';
import { publicAsset } from '@/lib/assets';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { eventPhoto, eventServiceGroups, eventServices } from '@/lib/events';
import { restaurant, whatsappLink } from '@/lib/restaurant';

const description =
  'Churrasco, fogo de chão, parrilla e porco no rolete. O Brasas e Fogão nasceu servindo eventos e está preparando sua casa no Setor Oeste, em Goiânia, para receber o seu.';

export const metadata: Metadata = {
  title: 'Eventos | Brasas e Fogão em Goiânia',
  description,
  alternates: { canonical: `${restaurant.origin}/eventos/` },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Traga seu evento para o Brasas e Fogão',
    description,
    url: `${restaurant.origin}/eventos/`,
    siteName: restaurant.name,
    images: [`${restaurant.origin}${eventPhoto.src}`],
  },
};

const eventsMessage = 'Olá! Quero saber mais sobre eventos no Brasas e Fogão.';

const steps = [
  {
    label: 'Onde tudo começou',
    title: 'A brasa dos eventos',
    text: 'Antes de ter endereço, o Brasas e Fogão já cozinhava para festas e encontros, com fogo de chão, parrilla e churrasco.',
  },
  {
    label: 'Hoje',
    title: 'A casa no Setor Oeste',
    text: 'De segunda a sexta, servimos café, quitandas e almoço: churrasco de segunda a quinta e feijoada na sexta.',
  },
  {
    label: 'Em breve',
    title: 'Eventos na nossa casa',
    text: 'Queremos receber eventos no nosso próprio espaço. Ainda tem reforma pela frente, e a gente avisa quando estiver tudo pronto.',
    upcoming: true,
  },
];

export default function EventosPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <SiteHeader current="eventos" />
      <main id="conteudo-principal">
        <section
          className="events-hero"
          id="inicio"
          aria-labelledby="events-title"
        >
          <figure className="events-hero-photo">
            <Image
              unoptimized
              src={publicAsset(eventPhoto.src)}
              alt={eventPhoto.alt}
              width={eventPhoto.width}
              height={eventPhoto.height}
              fetchPriority="high"
            />
          </figure>
          <div className="container events-hero-inner">
            <div className="events-hero-copy">
              <p className="eyebrow events-hero-eyebrow">
                Eventos <span className="events-badge">Em breve</span>
              </p>
              <h1 className="display-title" id="events-title">
                Traga seu
                <br />
                evento.
              </h1>
              <p className="events-hero-description">
                Foi em volta da brasa, servindo festas e encontros, que o Brasas
                e Fogão começou. Agora estamos preparando nossa casa no Setor
                Oeste para receber você e seus convidados.
              </p>
              <div className="events-actions">
                <a
                  className="button"
                  href={whatsappLink(eventsMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conversar no WhatsApp
                </a>
                <a className="text-link small-link" href="#cardapio-eventos">
                  Ver o que servimos
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="events-menu section"
          id="cardapio-eventos"
          aria-labelledby="events-menu-title"
        >
          <div className="container events-menu-layout">
            <figure className="events-menu-photo" data-reveal>
              <Image
                unoptimized
                src={publicAsset('/images/panelas.webp')}
                alt="Panelas de arroz, farofa e couve servidas pelo Brasas e Fogão"
                width={1200}
                height={800}
                loading="lazy"
              />
            </figure>
            <div className="events-menu-copy">
              <div className="events-menu-heading" data-reveal>
                <p className="eyebrow">O que a gente leva pro evento</p>
                <h2 className="display-title" id="events-menu-title">
                  Do fogo de chão
                  <br />
                  ao buteco.
                </h2>
                <p>
                  Algumas das opções que já servimos em eventos. Conte o que
                  você imagina e a gente conversa sobre o cardápio.
                </p>
              </div>
              <div className="events-menu-groups">
                {eventServiceGroups.map((group) => (
                  <div className="events-menu-group" key={group.id} data-reveal>
                    <h3>{group.title}</h3>
                    <ul>
                      {eventServices
                        .filter((service) => service.group === group.id)
                        .map((service) => (
                          <li key={service.name}>{service.name}</li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="events-story section"
          aria-labelledby="events-story-title"
        >
          <div className="container">
            <div className="events-story-heading" data-reveal>
              <p className="eyebrow">Nossa história</p>
              <h2 className="display-title" id="events-story-title">
                Dos eventos
                <br />
                pra casa, e de volta.
              </h2>
            </div>
            <ol className="events-steps">
              {steps.map((step, index) => (
                <li
                  className={`events-step${step.upcoming ? ' is-upcoming' : ''}`}
                  key={step.title}
                  data-reveal
                >
                  <span className="events-step-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="events-step-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="events-contact section"
          aria-labelledby="events-contact-title"
        >
          <div className="container events-contact-layout">
            <div>
              <p className="eyebrow">Tem um evento em mente?</p>
              <h2 className="display-title" id="events-contact-title">
                Fale com
                <br />a gente.
              </h2>
            </div>
            <div className="events-contact-copy">
              <p>
                Ainda não temos data para começar os eventos na casa. Mande uma
                mensagem contando o que você imagina, ou acompanhe as novidades
                no Instagram.
              </p>
              <p className="events-phone">
                <span>WhatsApp</span>
                <a href={restaurant.phoneUrl}>{restaurant.phone}</a>
              </p>
              <div className="events-actions">
                <a
                  className="button"
                  href={whatsappLink(eventsMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conversar no WhatsApp
                </a>
                <a
                  className="text-link small-link"
                  href={restaurant.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @brasasefogao
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <div className="mobile-dock">
        <a
          className="button"
          href={whatsappLink(eventsMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conversar no WhatsApp
        </a>
      </div>
      <ScrollReveal />
    </>
  );
}
