import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/brasas-e-fogao';
if (!/^(\/[a-zA-Z0-9_-]+)*$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or an absolute path without a trailing slash.');
}
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || `https://cloudpronto.github.io${basePath}`).replace(/\/$/, '');
const env = {
  ...process.env,
  GITHUB_PAGES: 'true',
  NEXT_PUBLIC_BASE_PATH: basePath,
  NEXT_PUBLIC_SITE_URL: siteUrl,
  NEXT_TELEMETRY_DISABLED: '1',
};
const next = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url));
const build = spawnSync(process.execPath, [next, 'build', '--webpack'], { cwd: root, env, stdio: 'inherit' });
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);
writeFileSync(new URL('../out/.nojekyll', import.meta.url), '');
const verify = spawnSync(process.execPath, ['scripts/verify-pages.mjs'], { cwd: root, env, stdio: 'inherit' });
if (verify.error) throw verify.error;
process.exit(verify.status ?? 1);
