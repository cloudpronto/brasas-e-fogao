import { publicAsset } from './assets';

// Keep the same local fonts under both the root URL and a Pages project URL.
export const fontFaceCss = [
  ['Brasas Display', 'bodoni-moda-700.woff2', 700],
  ['Six Caps', 'six-caps-400.woff2', 400],
  ['DM Sans', 'dm-sans-400.woff2', 400],
  ['DM Sans', 'dm-sans-600.woff2', 600],
].map(([family, file, weight]) => `@font-face {
  font-family: '${family}';
  src: url('${publicAsset(`/fonts/${file}`)}') format('woff2');
  font-weight: ${weight};
  font-style: normal;
  font-display: swap;
}`).join('\n');
