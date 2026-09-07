# Brasas e Fogão

Site responsivo do restaurante no Setor Oeste, em Goiânia. Implementação em React e Vinext, com estilos próprios e componentes acessíveis de Sheet e Accordion.

## Abrir no VS Code

Abra diretamente a pasta `site` no VS Code. Na primeira vez, abra o terminal integrado e execute `npm install`. Depois, pressione `Ctrl+Shift+B` e escolha `Brasas e Fogão: iniciar site local`, ou execute `npm run dev` no terminal.

Acesse `http://localhost:3000` no Chrome, Edge ou Firefox. As alterações aparecem automaticamente ao salvar. Não use a extensão Live Server: os arquivos TSX precisam ser compilados pelo Vinext.

## Comandos

- `npm run dev`: abre o servidor local com atualização automática.
- `npm run build`: gera a versão de produção para Cloudflare Workers / Sites.
- `npm run lint`: verifica o código do projeto.

O projeto requer Node.js 22.13 ou posterior.

## Editar conteúdo

- `lib/restaurant.ts`: endereço, horários, link do mapa e Instagram.
- `lib/menu.ts`: categorias, itens e preços. Os 59 preços vieram de `Cardapio-1.pdf`; a feijoada foi confirmada pelo proprietário e permanece sem preço até confirmação.
- `lib/structured-data.ts`: dados estruturados de restaurante e menu, derivados do conteúdo exibido.
- `components/brand.tsx`: chama ancorada na letra E por CSS.
- `app/globals.css`, `app/sections.css` e `app/hero-refinement.css`: direção visual, seções, hero e adaptação para celular.

O link do mapa e os horários foram fornecidos pelo usuário: Rua 22, 658, quadra K9, lote 05, Setor Oeste, Goiânia, GO, 74120-130. Segunda a sábado, 7h às 18h.

## Imagens e fontes

A fotografia do hero é uma cena ilustrativa gerada por IA a partir da direção aprovada. As fotos de pães de queijo, coxinhas e panelas foram fornecidas pelo restaurante e apenas redimensionadas e comprimidas para WebP. Fontes locais: Bodoni Moda, Six Caps e DM Sans; licenças em `public/fonts`.

Não há checkout, pedidos, reservas, rastreamento ou formulários. A experiência principal é consultar o cardápio e acessar o mapa.

## Publicação e SEO

A configuração de hospedagem fica em `.openai/hosting.json`. O site inclui metadados em português, canonical, sitemap, robots e JSON-LD. Uma publicação privada do Sites é uma prévia de revisão e não é indexável publicamente. Antes do lançamento público, atualize `restaurant.origin` para o domínio definitivo e confirme preços, endereço, horários e acesso público.
