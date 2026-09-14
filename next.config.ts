import type { NextConfig } from 'next';

const exportPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = exportPages
  ? {
      output: 'export',
      basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
      trailingSlash: true,
      images: { unoptimized: true },
      typescript: { tsconfigPath: 'tsconfig.pages.json' },
    }
  : {};

export default nextConfig;
