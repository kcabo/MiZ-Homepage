import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import mockImg from '../public/mock.png';
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
          <Image src={mockImg} className='object-cover object-bottom ' alt='' />
        </div>
      </div>

      <Feature />
    </Layout>
  );
};

export default Home;
