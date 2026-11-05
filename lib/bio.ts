import { restaurant, whatsappLink } from './restaurant';

/**
 * Conteúdo da página de links do Instagram (brasasefogao.com.br/bio).
 * Para mudar textos, links ou a mensagem do WhatsApp, edite só este arquivo.
 */
export const bio = {
  title: 'Brasas & Fogão',
  tagline: 'Gastronomia premium para eventos',
  services: 'Churrasco • Parrilla • Fogo de chão • Risotos',
  badge: 'Atendimento personalizado para festas e eventos',

  /** Botão 1 — leva para o cardápio do site oficial. */
  siteLink: {
    href: 'https://brasasefogao.com.br/cardapio/',
    title: 'Conheça nosso site e cardápio completo',
    subtitle: 'Veja nossos serviços, eventos e gastronomia preparada ao vivo',
  },

  /** Botão 2 — WhatsApp com mensagem pronta. */
  whatsappLink: {
    href: whatsappLink(
      'Olá! Vim pelo Instagram e gostaria de saber mais sobre o cardápio e os serviços.',
    ),
    title: 'Desejo fazer meu pedido via WhatsApp',
    subtitle: 'Fale diretamente com a equipe Brasas & Fogão',
  },

  instagramUrl: restaurant.instagramUrl,
  whatsappUrl: restaurant.whatsappUrl,
  phone: restaurant.phone,
  phoneUrl: restaurant.phoneUrl,

  footerNote: 'Gastronomia premium para festas e eventos',
  developer: {
    name: 'CloudPronto',
    href: 'https://www.instagram.com/cloudpronto/',
  },
} as const;
