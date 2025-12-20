import { StrictMode } from 'react';
import type { ContextWrapper, SsgOptions } from 'vite-plugin-ssg/utils';
import App from '../App';

const wrapWithStrictMode: ContextWrapper = (children) => (
  <StrictMode>{children}</StrictMode>
);

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Maeli LLC',
  url: 'https://maelillc.com/',
  logo: 'https://maelillc.com/images/logo.png',
  description:
    'Maeli LLC is a family-owned auto transport company providing safe, on-time vehicle shipping nationwide with 24/7 dispatch support and driver-first service.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-267-975-3435',
      contactType: 'customer service',
      email: 'maelidispatch@gmail.com',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  ],
};

export const ssgOptions: SsgOptions = {
  slug: 'index',
  routeUrl: '/',
  Head: () => (
    <>
      <title>Maeli LLC | Nationwide Auto Transport &amp; Car Shipping</title>
      <link rel="icon" type="image/png" href="/images/favicon2.png" />
      <link rel="canonical" href="https://maelillc.com/" />
      <meta
        name="description"
        content="Maeli LLC is an auto transport company providing safe, on-time vehicle shipping nationwide with 24/7 dispatch support and driver-first service."
      />
      <meta
        name="keywords"
        content="Maeli LLC, auto transport, car shipping, vehicle shipping, nationwide car hauler, enclosed transport, open transport, car delivery"
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Maeli LLC | Nationwide Auto Transport & Car Shipping"
      />
      <meta
        property="og:description"
        content="Auto transportation with 5+ years of experience, reliable drivers, and 24/7 dispatch. Ship your vehicle anywhere in the U.S."
      />
      <meta property="og:url" content="https://maelillc.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Maeli LLC" />
      <meta property="og:image" content="https://maelillc.com/images/link-pic.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Maeli LLC | Nationwide Auto Transport & Car Shipping"
      />
      <meta
        name="twitter:description"
        content="Auto transport specialists delivering safe, on-time vehicle shipping with 24/7 dispatch support."
      />
      <meta name="twitter:image" content="https://maelillc.com/images/link-pic.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  ),
  context: wrapWithStrictMode,
};

export default function HomePage() {
  return <App />;
}
