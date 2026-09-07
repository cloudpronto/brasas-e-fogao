import type { MetadataRoute } from 'next';
import { restaurant } from '@/lib/restaurant';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: restaurant.origin, changeFrequency: 'weekly', priority: 1 }];
}
