export type MenuItem = { name: string; price: number | null; detail?: string };
export type MenuCategory = { id: string; title: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: 'lanches',
    title: 'Lanches',
    items: [
      { name: 'Salgado', price: 12 },
      { name: 'Torta salgada', price: 15 },
      { name: 'Misto quente', price: 12 },
      { name: 'Misto quente com ovo', price: 14 },
      { name: 'Pão na chapa com manteiga', price: 6 },
      { name: 'Bauru de carne', price: 28 },
      { name: 'Bauru de frango', price: 28 },
    ],
  },
  {
    id: 'cafeteria',
    title: 'Cafeteria',
    items: [
      { name: 'Café expresso', price: 5 },
      { name: 'Café com leite', price: 7 },
      { name: 'Cappuccino', price: 10 },
      { name: 'Cappuccino com canela', price: 10 },
      { name: 'Chocolate quente', price: 10 },
      { name: 'Leite', price: 6 },
    ],
  },
  {
    id: 'quitandas',
    title: 'Quitandas e doces',
    items: [
      { name: 'Pão de queijo', price: 6 },
      { name: 'Pão de queijo recheado', detail: 'Presunto e queijo', price: 6 },
      { name: 'Chipa', price: 5 },
      { name: 'Chipa de carne', price: 12 },
      { name: 'Chipa de frango', price: 12 },
      { name: 'Broa doce', price: 5 },
      { name: 'Croissant', price: 5 },
      { name: 'Bolo do dia', price: 5 },
      { name: 'Biscoito suíço', price: 6 },
      { name: 'Quibe frito', price: 12 },
      { name: 'Coxinha', price: 12 },
      { name: 'Disco de carne', price: 12 },
    ],
  },
  {
    id: 'pasteis',
    title: 'Pastéis',
    items: [
      { name: 'Carne', price: 15 },
      { name: 'Carne com queijo', price: 16 },
      { name: 'Presunto e queijo', price: 15 },
      { name: 'Costela', price: 17 },
    ],
  },
  {
    id: 'espetos',
    title: 'Espetos especiais',
    items: [
      { name: 'Medalhão de kafta bovina', price: 15 },
      { name: 'Filé mignon', price: 35 },
      { name: 'Queijo coalho', price: 15 },
      { name: 'Provolone', price: 15 },
      { name: 'Costelinha suína', price: 15 },
      { name: 'Linguiça apimentada', price: 15 },
      { name: 'Linguiça suína', price: 15 },
      { name: 'Coração de frango', price: 20 },
      { name: 'Kafta bovina recheada', price: 15 },
      { name: 'Cupim Super Grill', price: 27 },
      { name: 'Espeto de frango empanado', price: 20 },
    ],
  },
  {
    id: 'especiais',
    title: 'Da casa',
    items: [
      { name: 'Choripão ao chimichurri', price: 12 },
      {
        name: 'Feijoada',
        detail: 'Consulte o valor e a disponibilidade na casa.',
        price: null,
      },
    ],
  },
  {
    id: 'acompanhamentos',
    title: 'Acompanhamentos',
    items: [
      { name: 'Mandioca ao molho branco', price: 8 },
      { name: 'Vinagrete', price: 5 },
      { name: 'Farofa da casa', price: 5 },
      { name: 'Porção de arroz', price: 8 },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      { name: 'Água mineral com gás', price: 4 },
      { name: 'Água mineral sem gás', price: 4 },
      { name: 'Suco Honest', price: 9 },
      { name: 'Refrigerante em lata', price: 8 },
      { name: 'Água de coco', detail: '200 ml', price: 4 },
      { name: 'Toddynho', price: 4 },
      { name: 'Coca-Cola', detail: '600 ml', price: 10 },
      { name: 'Guaraná Mineiro', detail: '600 ml', price: 9 },
      { name: 'Gatorade', price: 10 },
      { name: 'Monster', detail: '473 ml', price: 15 },
      { name: 'Extra Power', detail: '270 ml', price: 9 },
      { name: 'Cerveja Heineken', price: 10 },
      { name: 'Cerveja Amstel', price: 10 },
      { name: 'Cerveja Stella Artois', price: 10 },
    ],
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    price,
  );
