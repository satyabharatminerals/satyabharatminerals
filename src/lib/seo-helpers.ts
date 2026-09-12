import { companyInfo } from './site-data';

export const BASE_URL = 'https://satyabharatminerals.com';

/**
 * SEO Utilities for generating structured data (JSON-LD)
 */

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Satya Bharat Minerals',
  image: `${BASE_URL}/logo-icon.png`,
  '@id': BASE_URL,
  url: BASE_URL,
  telephone: companyInfo.phone[0],
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.address.line1,
    addressLocality: 'Jodhpur',
    addressRegion: 'Rajasthan',
    postalCode: '342001',
    addressCountry: 'IN',
  },
  description:
    'A pioneer and renowned lime brand in India, specializing in custom-made high grade Hydrated Lime, Quick Lime, and allied minerals.',
});

export const generateFaqSchema = (
  faqData: { q: string; a: string }[],
  url?: string
) => {
  // Helper to remove HTML tags for plain-text Schema
  const stripTags = (str: string) => str.replace(/<[^>]*>?/gm, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(url && {
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    }),
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: stripTags(item.q),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripTags(item.a),
      },
    })),
  };
};

export const generateProductSchema = (
  name: string,
  description: string,
  url: string,
  image?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image: image || `${BASE_URL}/logo-icon.png`,
  brand: {
    '@type': 'Brand',
    name: 'Satya Bharat Minerals',
  },
  url,
});

export function getSeoAlternates(path: string) {
  // Ensure path starts with / if not empty
  const sanitizedPath = path.startsWith('/')
    ? path
    : path === ''
      ? ''
      : `/${path}`;

  return {
    canonical: `${BASE_URL}${sanitizedPath}`,
  };
}
