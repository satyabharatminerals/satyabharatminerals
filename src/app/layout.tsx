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
    default: 'Satya Bharat Minerals | Lime For Everyday Life',
    template: '%s | Satya Bharat Minerals',
  },
  description:
    'Leading manufacturer of high-grade Hydrated Lime, Quick Lime Powder, Calcined Lime Lumps, and Limestone in India. Serving steel, construction, water treatment, and chemical industries.',
  keywords: [
    'quick lime powder',
    'calcined lime lumps',
    'hydrated lime',
    'slaked lime',
    'limestone supplier India',
    'lime manufacturer Delhi',
    'Satya Bharat Minerals',
    'industrial lime products',
  ],
  authors: [{ name: 'Satya Bharat Minerals' }],
  openGraph: {
    title: 'Satya Bharat Minerals | Lime For Everyday Life',
    description:
      'Leading manufacturer of high-grade Hydrated Lime, Quick Lime Powder, Calcined Lime Lumps, and Limestone in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Satya Bharat Minerals',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satya Bharat Minerals | Lime For Everyday Life',
    description:
      'Leading manufacturer of high-grade lime products in India.',
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
