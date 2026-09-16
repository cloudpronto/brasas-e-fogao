/**
 * Opções que a casa já serviu em eventos, conforme o folheto publicado no
 * Instagram (@brasasefogao, junho de 2024).
 */
export const eventServices = [
  { name: 'Churrasco', group: 'brasa' },
  { name: 'Fogo de chão', group: 'brasa' },
  { name: 'Parrilla', group: 'brasa' },
  { name: 'Porco no rolete', group: 'brasa' },
  { name: 'Peixe e cordeiro assados', group: 'brasa' },
  { name: 'Arroz carreteiro', group: 'panela' },
  { name: 'Risoto do cerrado', group: 'panela' },
  { name: 'Feijoada', group: 'panela' },
  { name: 'Saladas especiais', group: 'mesa' },
  { name: 'Frios', group: 'mesa' },
  { name: 'Sanduíches gourmet', group: 'mesa' },
  { name: 'Comida de buteco', group: 'mesa' },
] as const;

export const eventServiceGroups = [
  { id: 'brasa', title: 'Na brasa' },
  { id: 'panela', title: 'Na panela' },
  { id: 'mesa', title: 'Pra mesa' },
] as const;

export const eventPhoto = {
  src: '/images/evento-fogo-de-chao.webp',
  alt: 'Assador cuidando de costelas, frangos e carnes no fogo de chão durante um evento ao ar livre',
  width: 1200,
  height: 1200,
};
