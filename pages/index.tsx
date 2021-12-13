import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import mockImg from '../public/mock.png';
import sheetsImg from '../public/sheets.png';
import logoImg from '../public/miz-logo-landscape.svg';
import addFriendsImg from '../public/friends-btn.png';
import qrImg from '../public/qr.png';

import { Feature } from '@/components/Feature';
import { Layout } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>MiZ</title>
        <meta property='og:title' content='MiZ' />
      </Head>
      <div className='flex flex-col justify-center max-w-xl px-4 mx-auto md:px-8 lg:max-w-screen-xl lg:flex-row '>
        <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 '>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 text-4xl font-black leading-tight text-gray-900 sm:text-6xl sm:leading-tight'>
              レース結果を
              <br />
              一瞬で <span className='inline-block text-sky-500'>画像化</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              水泳のレース結果を入力すれば、自動でラップタイムを計算。さらには折れ線グラフまで描きます。データは自動で保存されるので、いつでも結果を振り返れます。
            </p>
          </div>
          <div className='flex items-center'>
            <a
              href='https://lin.ee/YR8jgpg'
              className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-700 focus:shadow-outline focus:outline-none'
            >
              LINEで今すぐはじめる
            </a>
          </div>
        </div>
        <div className='mx-auto -mb-1.5 lg:w-80 xl:mr-24 sm:container lg:mx-10'>
          <Image
            src={mockImg}
            className='object-cover object-bottom '
            alt='スマホで記録証'
          />
        </div>
      </div>

      <Feature />

      <div className='relative w-full h-96 md:h-[600px] '>
        <Image
          src={sheetsImg}
          alt='カラフルな画像が生成されます'
          layout='fill'
          objectFit='cover'
          quality={100}
          className='opacity-60'
        />
        <div className='absolute flex items-center justify-center w-full h-full'>
          <div className='w-2/3 max-w-2xl py-8 space-y-6 bg-white border-2 shadow-lg border-slate-100 rounded-2xl md:py-12'>
            <div className='flex justify-center w-full '>
              <Image src={logoImg} alt='MiZ' width={150} height={60} />
            </div>
            <div className='text-lg font-black text-center text-slate-800'>
              水泳レース画像化 & <br className='block md:hidden' />
              データ管理サービス
            </div>
            <a
              href='https://lin.ee/YR8jgpg'
              className='flex justify-center w-full'
            >
              <Image
                src={addFriendsImg}
                alt='友だち追加'
                height={36}
                width={116}
              />
            </a>
            <div className='justify-center hidden w-full md:flex'>
              <Image src={qrImg} alt='QRコード' width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
