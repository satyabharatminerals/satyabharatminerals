import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo-helpers';
import { products } from '@/lib/site-data';

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

  // Static core routes
  routes.forEach((route) => {
    const url = `${BASE_URL}${route}`;

    let priority = 0.8;
    if (route === '') {
      priority = 1.0;
    } else if (route === '/products') {
      priority = 0.95;
    } else if (route === '/contact') {
      priority = 0.7;
    }

    const changeFrequency:
      | 'yearly'
      | 'monthly'
      | 'weekly'
      | 'daily'
      | 'hourly'
      | 'never' =
      route === '' || route === '/products' ? 'weekly' : 'monthly';

    sitemapEntries.push({
      url,
      changeFrequency,
      priority,
      lastModified: new Date(),
    });
  });

  // Dedicated Product landing pages
  products.forEach((product) => {
    sitemapEntries.push({
      url: `${BASE_URL}/products/${product.slug}`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified: new Date(),
    });
  });

  return sitemapEntries;
}
