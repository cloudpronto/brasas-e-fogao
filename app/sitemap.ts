import type { MetadataRoute } from 'next';
import { restaurant } from '@/lib/restaurant';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${restaurant.origin}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${restaurant.origin}/cardapio/`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
