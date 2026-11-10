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
      'Olá! Gostaria de saber mais sobre o cardápio e os serviços.',
    ),
    title: 'Desejo fazer meu pedido via WhatsApp',
    subtitle: 'Fale diretamente com a equipe Brasas & Fogão',
  },

  ifoodLink: {
    href: 'https://www.ifood.com.br/delivery/goiania-go/brasas-e-fogao-st-oeste/3b7ea151-bcac-4f21-b59c-e24235dc0433',
    title: 'Faça seu pedido pelo iFood',
    subtitle: 'Acesse nosso cardápio e peça pelo iFood',
  },

  food99Link: {
    href: 'https://oia.99app.com/dlp9/elw9h2',
    title: 'Faça seu pedido pela 99Food',
    subtitle: 'Acesse nosso cardápio e peça pela 99Food',
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
