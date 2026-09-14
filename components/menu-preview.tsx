import Image from 'next/image';
import Link from 'next/link';
import { menuItemCount } from '@/lib/menu';

const menuGroups = [
  {
    label: 'Lanches & cafeteria',
    count: 13,
    href: '/cardapio#categoria-lanches',
  },
  {
    label: 'Quitandas & pastéis',
    count: 16,
    href: '/cardapio#categoria-quitandas',
  },
  {
    label: 'Espetos & acompanhamentos',
    count: 16,
    href: '/cardapio#categoria-espetos',
  },
  { label: 'Bebidas', count: 14, href: '/cardapio#categoria-sem-alcool' },
];

export function MenuPreview() {
  return (
    <section
      className="menu-preview-section section"
      id="cardapio-preview"
      aria-labelledby="menu-preview-title"
    >
      <div className="container menu-preview-layout">
        <div className="menu-preview-mosaic" data-reveal>
          <figure className="menu-preview-tile menu-preview-tile-tall">
            <Image
              unoptimized
              src="/images/pao-de-queijo.webp"
              alt="Pães de queijo dourados do Brasas e Fogão"
              width={1000}
              height={1778}
              loading="lazy"
            />
            <figcaption>Pão de queijo</figcaption>
          </figure>
          <figure className="menu-preview-tile">
            <Image
              unoptimized
              src="/images/coxinhas.webp"
              alt="Coxinhas da casa"
              width={1000}
              height={1778}
              loading="lazy"
            />
            <figcaption>Coxinhas</figcaption>
          </figure>
          <figure className="menu-preview-tile menu-preview-tile-table">
            <Image
              unoptimized
              src="/images/panelas.webp"
              alt="Arroz, farofa e couve servidos nas panelas do Brasas e Fogão"
              width={1200}
              height={800}
              loading="lazy"
            />
            <figcaption>Comida da casa</figcaption>
          </figure>
        </div>
        <div className="menu-preview-copy" data-reveal>
          <p className="eyebrow">O cardápio da casa</p>
          <h2 className="display-title" id="menu-preview-title">
            Pra todas
            <br />
            as fomes.
          </h2>
          <p>
            Do primeiro café ao encontro à mesa. Conheça nossas {menuItemCount}{' '}
            opções entre lanches, quitandas, espetos e bebidas.
          </p>
          <ul className="menu-preview-groups" aria-label="Grupos do cardápio">
            {menuGroups.map((group) => (
              <li key={group.label}>
                <Link href={group.href}>
                  <span>{group.label}</span>
                  <small>{group.count} opções</small>
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-preview-actions">
            <Link className="button" href="/cardapio">
              Ver cardápio completo
            </Link>
            <a
              className="button menu-preview-pdf"
              href="/cardapio-brasas-e-fogao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cardápio em PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
