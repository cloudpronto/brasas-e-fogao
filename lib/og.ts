import { restaurant } from './restaurant';

/** Imagem de compartilhamento (1200×630, JPG) em `public/og/`, usada no Open Graph e no Twitter. */
export function shareImage(name: 'home' | 'cardapio' | 'eventos', alt: string) {
  return {
    url: `${restaurant.origin}/og/${name}.jpg`,
    width: 1200,
    height: 630,
    type: 'image/jpeg',
    alt,
  };
}
