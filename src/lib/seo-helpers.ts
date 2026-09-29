import { companyInfo } from './site-data';

export const BASE_URL = 'https://satyabharatminerals.com';

/**
 * SEO Utilities for generating structured data (JSON-LD)
 */

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Manufacturer'],
  name: 'Satya Bharat Minerals',
  image: `${BASE_URL}/images/hero-quarry.jpg`,
  '@id': `${BASE_URL}/#organization`,
  url: BASE_URL,
  telephone: companyInfo.phone[0].startsWith('+') ? companyInfo.phone[0] : `+91-${companyInfo.phone[0]}`,
  email: companyInfo.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'K. no. 4201/1418, Prem Nagar, Khinwsar',
    addressLocality: 'Nagaur',
    addressRegion: 'Rajasthan',
    postalCode: '341025',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.9897,
    longitude: 73.4042,
  },
  description:
    'Satya Bharat Minerals is an ISO 9001:2015 certified quick lime manufacturer and hydrated lime supplier in India, operating vertical shaft kilns in Nagaur, Rajasthan.',
  knowsAbout: [
    'Quick Lime Manufacturer',
    'Quicklime Manufacturer in India',
    'Quick Lime Manufacturer in Rajasthan',
    'Quick Lime Supplier',
    'Quick Lime Powder Manufacturer',
    'Hydrated Lime Manufacturer',
    'High Calcium Quick Lime',
    'Quick Lime Lumps Manufacturer',
    'Calcium Oxide Manufacturer',
    'CaO Powder Manufacturer',
  ],
});

export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
  })),
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

export const generateProductCatalogSchema = (
  productsList: { name: string; description: string; id: string; slug?: string; image?: string }[],
  url: string = `${BASE_URL}/products`
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Satya Bharat Minerals - Industrial Lime and Mineral Products Catalog',
  description:
    'Comprehensive range of high-grade industrial lime products including Quick Lime Powder, Calcined Lime Lumps, Hydrated Lime, and Natural Limestone.',
  url,
  numberOfItems: productsList.length,
  itemListElement: productsList.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: product.name,
    description: product.description,
    url: product.slug ? `${BASE_URL}/products/${product.slug}` : `${url}#${product.id}`,
    image: product.image
      ? product.image.startsWith('http')
        ? product.image
        : `${BASE_URL}${product.image}`
      : `${BASE_URL}/icon.png`,
  })),
});

export const generateProductSchema = (
  name: string,
  description: string,
  url: string,
  image?: string,
  specs?: { label: string; value: string }[],
  category: string = 'Industrial Lime & Minerals'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image: image
    ? image.startsWith('http')
      ? image
      : `${BASE_URL}${image}`
    : `${BASE_URL}/icon.png`,
  category,
  brand: {
    '@type': 'Brand',
    name: 'Satya Bharat Minerals',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Satya Bharat Minerals',
    url: BASE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagaur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    price: 'Contact for Bulk Quote',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Satya Bharat Minerals',
    },
  },
  ...(specs && specs.length > 0 && {
    additionalProperty: specs.map((spec) => ({
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
    })),
  }),
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
