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

- `lib/restaurant.ts`: endereço, horários, telefone/WhatsApp, link do mapa e Instagram.
- `lib/menu.ts`: categorias, itens e preços. A maioria dos preços veio de `Cardapio-1.pdf`. Itens sem `price` aparecem como "Consulte" (hoje: espetinhos de frango com bacon e contra filé).
- `components/menu-preview.tsx`: resumo do cardápio na página inicial, com os preços do almoço (executivo e marmitex). Churrasco de segunda a quinta, feijoada na sexta; prato montado pela equipe com valor fixo. Quando o almoço passar a ser por quilo, atualize a categoria `almoco` em `lib/menu.ts`.
- `app/cardapio/page.tsx`: página completa do cardápio, com categorias expansíveis.
- `lib/events.ts`, `components/events-teaser.tsx` e `app/eventos/page.tsx`: chamada de eventos na página inicial e página de eventos. As opções vieram do folheto publicado no Instagram (junho de 2024). Por enquanto, "em breve": o espaço ainda passa por reforma.
- `public/cardapio-brasas-e-fogao.pdf`: cardápio em PDF para baixar. **Desatualizado**: ainda não tem o almoço nem a lista nova de espetinhos.
- `lib/structured-data.ts`: dados estruturados de restaurante e menu, derivados do conteúdo exibido.
- `components/brand.tsx`: chama ancorada na letra E por CSS.
- `app/globals.css`, `app/sections.css`, `app/events.css` e `app/hero-refinement.css`: direção visual, seções, eventos, hero e adaptação para celular.

O link do mapa, os horários e o telefone foram fornecidos pelo usuário: Rua 22, 658, quadra K9, lote 05, Setor Oeste, Goiânia, GO, 74120-130. Segunda a sexta, 7h às 16h (por enquanto, fechado aos sábados). WhatsApp (62) 98248-8406.

## Imagens e fontes

A fotografia do hero é uma cena ilustrativa gerada por IA a partir da direção aprovada. As fotos de pães de queijo, coxinhas e panelas foram fornecidas pelo restaurante e apenas redimensionadas e comprimidas para WebP. As fotos `feijoada-prato.webp` e `sucos-honest.webp` foram fornecidas pelo restaurante e recortadas para o mosaico do cardápio. A foto do fogo de chão (`evento-fogo-de-chao.webp`) veio de um post público do Instagram da casa (@brasasefogao). Fontes locais: Bodoni Moda, Six Caps e DM Sans; licenças em `public/fonts`.

Não há checkout, pedidos, reservas, rastreamento ou formulários. A experiência principal é consultar o cardápio, acessar o mapa e falar com a casa pelo WhatsApp.

## Publicação e SEO

A configuração de hospedagem fica em `.openai/hosting.json`. O site inclui metadados em português, canonical, sitemap, robots e JSON-LD. Uma publicação privada do Sites é uma prévia de revisão e não é indexável publicamente. Antes do lançamento público, atualize `restaurant.origin` para o domínio definitivo e confirme preços, endereço, horários e acesso público.

## Repositório no GitHub

Código da versão atual: https://github.com/cloudpronto/brasas-e-fogao

```bash
git clone https://github.com/cloudpronto/brasas-e-fogao.git
cd brasas-e-fogao
npm ci
npm run dev
```

O repositório é público e pertence à organização CloudPronto no GitHub. O site é publicado no GitHub Pages a cada push na branch `main`.


## GitHub Pages

Site: https://cloudpronto.github.io/brasas-e-fogao/

O workflow `.github/workflows/pages.yml` instala as dependências, gera a exportação estática, confere os caminhos dos arquivos e publica pelo GitHub Actions. Em Settings > Pages, a origem deve ser **GitHub Actions**.

- `npm run build:pages`: gera e valida a versão estática em `out/`.
- `npm run verify:pages`: repete a verificação dos arquivos já exportados.
- `npm run dev` e `npm run build`: continuam usando Vinext para desenvolvimento e Sites / Cloudflare Workers.

O build do Pages usa Next.js, imagens locais sem otimização no servidor, fontes locais e URLs com o prefixo `/brasas-e-fogao`. O workflow obtém `NEXT_PUBLIC_BASE_PATH` e `NEXT_PUBLIC_SITE_URL` da configuração do Pages. Para testar outro domínio ou caminho, defina essas variáveis antes do build. O build local usa o endereço acima por padrão.

## Cloudflare Workers (brasasefogao.com.br)

Site: https://brasasefogao.com.br/

O domínio próprio serve a mesma exportação estática do Next.js, sem o Vinext em produção. O Worker `brasas-e-fogao` só entrega os arquivos de `out/`.

- `npm run build:cloudflare`: gera e valida `out/` para a raiz do domínio (sem prefixo, com `https://brasasefogao.com.br` no canonical e no sitemap).
- `npm run deploy:cloudflare`: publica `out/` usando `wrangler.static.jsonc`.

No painel da Cloudflare (Workers > brasas-e-fogao > Configurações > Build), o comando de build deve ser `npm run build:cloudflare` e o de deploy `npx wrangler deploy --config wrangler.static.jsonc`.
