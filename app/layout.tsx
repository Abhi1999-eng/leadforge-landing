import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({
  src: [
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LeadForge | Website Development, SEO & Digital Marketing Agency',
  description:
    'LeadForge builds high-converting websites and provides SEO & digital marketing services to grow your business online.',
  keywords: [
    'website development',
    'seo services',
    'digital marketing agency',
    'lead generation',
    'business website India',
  ],
  openGraph: {
    title: 'LeadForge | Website Development, SEO & Digital Marketing Agency',
    description:
      'LeadForge builds high-converting websites and provides SEO & digital marketing services to grow your business online.',
    url: 'https://leadforge.in',
    siteName: 'LeadForge',
    images: [
      {
        url: '/og-cover.svg',
        width: 1200,
        height: 630,
        alt: 'LeadForge digital agency hero preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadForge | Website Development, SEO & Digital Marketing Agency',
    description:
      'LeadForge builds high-converting websites and provides SEO & digital marketing services to grow your business online.',
    images: ['/og-cover.svg'],
  },
  metadataBase: new URL('https://leadforge.in'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-dark antialiased`}>{children}</body>
    </html>
  );
}
