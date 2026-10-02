// Gera o site estático para o domínio próprio (raiz, sem prefixo) e valida a saída em `out/`.
// O deploy no Cloudflare Workers usa `wrangler.static.jsonc`, que serve `out/` como arquivos estáticos.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const env = {
  ...process.env,
  NEXT_PUBLIC_BASE_PATH: '',
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://brasasefogao.com.br',
};
const build = spawnSync(process.execPath, ['scripts/build-pages.mjs'], { cwd: root, env, stdio: 'inherit' });
if (build.error) throw build.error;
process.exit(build.status ?? 1);
