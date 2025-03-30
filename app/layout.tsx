import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'MiZ | 水泳レース画像化サービス',
    template: '%s | MiZ',
  },
  description: '水泳のレース結果を画像化する無料サービス。ラップ計算ももちろん自動で。',
  openGraph: {
    title: {
      default: 'MiZ | 水泳レース画像化サービス',
      template: '%s | MiZ',
    },
    description: '水泳のレース結果を画像化する無料サービス。ラップ計算ももちろん自動で。',
    images: ['https://d9it8rcta7jk.cloudfront.net/ads/OGP.png'],
    type: 'website',
    url: 'https://miz-swim.com',
    siteName: 'MiZ',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swim_zero',
    images: ['https://d9it8rcta7jk.cloudfront.net/ads/OGP.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className=''>
        <Header />
        {children}
        <Footer />
        <Script
          src='https://static.cloudflareinsights.com/beacon.min.js'
          data-cf-beacon='{"token": "ecd2b75853ff4f85aec1bd4ec6cf8a74"}'
        />
      </body>
    </html>
  );
}
