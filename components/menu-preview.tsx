import { publicAsset } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, menu, menuItemCount } from '@/lib/menu';

function countItems(ids: string[]) {
  return menu
    .filter((category) => ids.includes(category.id))
    .reduce((total, category) => total + category.items.length, 0);
}

const lunchItems = menu.find((category) => category.id === 'almoco')!.items;

const menuGroups = [
  {
    label: 'Lanches & cafeteria',
    count: countItems(['lanches', 'cafeteria']),
    href: '/cardapio#categoria-lanches',
  },
  {
    label: 'Quitandas & pastéis',
    count: countItems(['quitandas', 'pasteis']),
    href: '/cardapio#categoria-quitandas',
  },
  {
    label: 'Espetinhos & acompanhamentos',
    count: countItems(['espetos', 'especial-da-casa', 'acompanhamentos']),
    href: '/cardapio#categoria-espetos',
  },
  {
    label: 'Bebidas',
    count: countItems(['sem-alcool', 'cervejas']),
    href: '/cardapio#categoria-sem-alcool',
  },
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
              src={publicAsset('/images/pao-de-queijo.webp')}
              alt="Pães de queijo dourados do Brasas e Fogão"
              width={1000}
              height={1778}
              loading="lazy"
            />
            <figcaption>Pão de queijo</figcaption>
          </figure>
          <figure className="menu-preview-tile menu-preview-tile-plate">
            <Image
              unoptimized
              src={publicAsset('/images/feijoada-prato.webp')}
              alt="Prato de feijoada com arroz, couve e farofa servido no Brasas e Fogão"
              width={900}
              height={1200}
              loading="lazy"
            />
            <figcaption>Feijoada</figcaption>
          </figure>
          <figure className="menu-preview-tile menu-preview-tile-drinks">
            <Image
              unoptimized
              src={publicAsset('/images/sucos-honest.webp')}
              alt="Garrafas de suco Honest de morango com maracujá e frutas vermelhas"
              width={900}
              height={1329}
              loading="lazy"
            />
            <figcaption>Sucos Honest</figcaption>
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
            opções entre almoço, lanches, quitandas, espetinhos e bebidas.
          </p>
          <div className="menu-preview-lunch">
            <p className="menu-preview-lunch-heading">
              <Link href="/cardapio#categoria-almoco">Almoço</Link>
              <span>Churrasco de segunda a quinta, feijoada na sexta</span>
            </p>
            <dl>
              {lunchItems.map((item) => (
                <div key={item.name}>
                  <dt>{item.name}</dt>
                  <dd>
                    {item.price === undefined
                      ? 'Consulte'
                      : formatPrice(item.price)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
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
              href={publicAsset('/cardapio-brasas-e-fogao.pdf')}
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
