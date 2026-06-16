import { SITE } from './site';

// Reusable LocalBusiness node — referenced from every page so Google sees
// consistent NAP + hours sitewide. Used as the `provider` on service pages.
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HomeGoodsStore', 'LocalBusiness'],
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  description: SITE.description,
  image: `${SITE.url}/images/storefront-exterior.avif`,
  logo: `${SITE.url}/logo.svg`,
  url: SITE.url,
  telephone: SITE.phone,
  priceRange: SITE.priceRange,
  foundingDate: String(SITE.foundedYear),
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: SITE.hoursSpec.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: [
    { '@type': 'City', name: 'Murphy, NC' },
    { '@type': 'AdministrativeArea', name: 'Cherokee County, NC' },
    { '@type': 'AdministrativeArea', name: 'Clay County, NC' },
    { '@type': 'AdministrativeArea', name: 'Union County, GA' },
    { '@type': 'AdministrativeArea', name: 'Fannin County, GA' },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
