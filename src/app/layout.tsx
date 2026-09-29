import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

import { BASE_URL, generateLocalBusinessSchema } from '@/lib/seo-helpers';
import JsonLd from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Quick Lime and Hydrated Lime Manufacturer in India | Satya Bharat Minerals',
    template: '%s | Satya Bharat Minerals',
  },
  description:
    'Satya Bharat Minerals is a premier quick lime and hydrated lime manufacturer in India. Supplying high calcium quicklime lumps, powder, and CaO across industrial sectors.',
  keywords: [
    'Quick Lime Manufacturer',
    'Quicklime Manufacturer in India',
    'Quick Lime Manufacturer in Rajasthan',
    'Quick Lime Supplier',
    'Quick Lime Powder Manufacturer',
    'Quick Lime Powder Supplier',
    'Hydrated Lime Manufacturer',
    'Hydrated Lime Manufacturer in India',
    'Hydrated Lime Supplier',
    'Industrial Lime Manufacturer',
    'Lime Manufacturer in Rajasthan',
    'Lime Supplier in India',
    'High Calcium Quick Lime',
    'High Calcium Lime Manufacturer',
    'Quick Lime Lumps Manufacturer',
    'Quick Lime Lumps Supplier',
    'Calcium Oxide Manufacturer',
    'Calcium Oxide Supplier India',
    'CaO Powder Manufacturer',
    'CaO Manufacturer in India',
    'Satya Bharat Minerals'
  ],
  authors: [{ name: 'Satya Bharat Minerals' }],
  openGraph: {
    title: 'Quick Lime and Hydrated Lime Manufacturer in India | Satya Bharat Minerals',
    description:
      'Premier manufacturer and supplier of High Calcium Quick Lime, Hydrated Lime, Calcined Lime Lumps and CaO Powder in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Satya Bharat Minerals',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick Lime and Hydrated Lime Manufacturer in India | Satya Bharat Minerals',
    description:
      'Premier manufacturer and supplier of High Calcium Quick Lime, Hydrated Lime, Calcined Lime Lumps and CaO Powder in India.',
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'LbtVT0wWZ3RKSqcE4f5GElwFTv1aZtUT-W6IdpupkdY',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <JsonLd data={generateLocalBusinessSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
