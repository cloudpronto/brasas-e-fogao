# Brasas e Fogão

Site responsivo do restaurante no Setor Oeste, em Goiânia. Implementação em React e Vinext, com estilos próprios e componentes acessíveis de Sheet e Accordion.

## Rodar

Requer Node.js 22.13 ou posterior. Use `npm install`, depois `npm run dev`. `npm run build` gera a versão de produção para Cloudflare Workers / Sites.

## Editar conteúdo

- `lib/restaurant.ts`: endereço, horários, link do mapa e Instagram.
- `lib/menu.ts`: categorias, itens e preços. Os 59 preços vieram de `Cardapio-1.pdf`; a feijoada foi confirmada pelo proprietário e permanece sem preço até confirmação.
- `lib/structured-data.ts`: dados estruturados de restaurante e menu, derivados do conteúdo exibido.
- `components/brand.tsx`: chama ancorada na letra E por CSS.
- `app/globals.css`: direção visual aprovada, adaptação para celular e redução de movimento.

O link do mapa e os horários foram fornecidos pelo usuário: Rua 22, 658, quadra K9, lote 05, Setor Oeste, Goiânia, GO, 74120-130. Segunda a sábado, 7h às 18h.

## Imagens e fontes

A fotografia da hero é uma cena ilustrativa gerada por IA a partir da direção aprovada. As fotos de pães de queijo, coxinhas e panelas foram fornecidas pelo restaurante e apenas redimensionadas/comprimidas para WebP. Fontes locais: Bodoni Moda, Six Caps e DM Sans; licenças em `public/fonts`.

Não há checkout, pedidos, reservas, rastreamento ou formulários. A experiência principal é consultar o cardápio e acessar o mapa.

## Publicação e SEO

A configuração de hospedagem fica em `.openai/hosting.json`. O site inclui metadados em português, canonical, sitemap, robots e JSON-LD. Uma publicação privada do Sites é uma prévia de revisão e não é indexável publicamente. Antes do lançamento público, atualizar `restaurant.origin` para o domínio definitivo e confirmar os preços, endereço, horários e acesso público.

## Verificação

Build de produção e TypeScript verificados. O lint dos arquivos do site e dos componentes Accordion/Sheet usados passa. O lint global também percorre componentes opcionais do scaffold que não são usados nesta página e ainda apresenta avisos/erros de origem nesses arquivos.

Os estilos das seções, cardápio e rodapé estão em pp/sections.css. As imagens WebP já são otimizadas no repositório e são servidas com Image em modo unoptimized para evitar transformações duplicadas.
