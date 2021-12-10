import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const url = 'https://miz-swim.com';
  return (
    <>
      <Head>
        <title>MiZ</title>
        <meta property='og:title' content='MiZ' />
        <meta
          name='description'
          content='レース結果を一瞬で画像化するサービスです。ラップ計算ももちろん自動で'
        />
        <meta
          property='og:description'
          content='レース結果を一瞬で画像化するサービス'
        />
        <meta property='og:image' content={`${url}/ogp.webp`} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='icon alternate' href='/favicon.ico' type='image/png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />
        <meta property='og:site_name' content='MiZ' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@swim_zero' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
