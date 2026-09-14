/** Public files need the project prefix when deployed to GitHub Pages. */
export function publicAsset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
