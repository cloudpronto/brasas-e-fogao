export const restaurant = {
  name: 'Brasas e Fogão',
  slogan: 'Fogo na brasa. Gente à mesa.',
  description:
    'Boa comida e bons encontros. Cafeteria, quitandas, lanches, feijoada e espetos no Setor Oeste, em Goiânia.',
  origin: (process.env.NEXT_PUBLIC_SITE_URL || 'https://brasas-e-fogao-brasa-noturna.diipass.chatgpt.site').replace(/\/$/, ''),
  street: 'Rua 22, 658 — quadra K9, lote 05',
  neighborhood: 'Setor Oeste',
  city: 'Goiânia',
  state: 'GO',
  postalCode: '74120-130',
  mapsUrl: 'https://maps.app.goo.gl/KFQ5VfB4hKmaboz98?g_st=iw',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Rua%2022%2C%20658%20-%20Setor%20Oeste%2C%20Goi%C3%A2nia%20-%20GO%2C%2074120-130&ftid=0x935ef1d647c3dcdf%3A0x99d76110a5f30d82&z=17&hl=pt-BR&output=embed',
  instagramUrl: 'https://www.instagram.com/brasasefogao/',
  hours: 'Segunda a sábado, das 7h às 16h',
} as const;
