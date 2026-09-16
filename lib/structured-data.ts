import { menu } from './menu';
import { restaurant } from './restaurant';

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${restaurant.origin}/#restaurante`,
  name: restaurant.name,
  url: restaurant.origin,
  description: restaurant.description,
  image: [
    `${restaurant.origin}/images/pao-de-queijo.webp`,
    `${restaurant.origin}/images/coxinhas.webp`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua 22, 658, quadra K9, lote 05 — Setor Oeste',
    addressLocality: restaurant.city,
    addressRegion: restaurant.state,
    postalCode: restaurant.postalCode,
    addressCountry: 'BR',
  },
  telephone: restaurant.phoneE164,
  hasMap: restaurant.mapsUrl,
  servesCuisine: ['Brasileira', 'Churrasco'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00',
    },
  ],
  sameAs: [restaurant.instagramUrl],
  menu: `${restaurant.origin}/cardapio`,
  hasMenu: {
    '@type': 'Menu',
    name: 'Cardápio Brasas e Fogão',
    url: `${restaurant.origin}/cardapio`,
    inLanguage: 'pt-BR',
    hasMenuSection: menu.map((category) => ({
      '@type': 'MenuSection',
      name: category.title,
      hasMenuItem: category.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        ...(item.detail ? { description: item.detail } : {}),
        ...(item.price === undefined
          ? {}
          : {
              offers: {
                '@type': 'Offer',
                price: item.price.toFixed(2),
                priceCurrency: 'BRL',
              },
            }),
      })),
    })),
  },
};
