import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo-helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/products',
    '/applications',
    '/contact',
    '/gallery',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    const url = `${BASE_URL}${route}`;

    // Determine priority based on route
    let priority = 0.8;
    if (route === '') {
      priority = 1.0;
    } else if (route === '/contact') {
      priority = 0.6;
    }

    // Determine change frequency
    const changeFrequency:
      | 'yearly'
      | 'monthly'
      | 'weekly'
      | 'daily'
      | 'hourly'
      | 'never' =
      route === '/contact' ? 'yearly' : 'monthly';

    sitemapEntries.push({
      url,
      changeFrequency,
      priority,
      lastModified: new Date(),
    });
  });

  return sitemapEntries;
}
