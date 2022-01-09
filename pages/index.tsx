import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import mockImg from '@/public/mock.png';
import logoImg from '@/public/miz-logo-landscape.svg';
import demoChatImg from '@/public/demo-chat.png';
import colorfulSheetImg from '@/public/colorful-sheet.png';

import { Feature } from '@/components/Feature';
import { Layout } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>MiZ | 水泳レース画像化サービス</title>
        <meta property='og:title' content='MiZ | 水泳レース画像化サービス' />
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
              水泳のレース結果を入力すれば、自動でラップタイムを計算。さらに折れ線グラフも描きます。データは自動で保存されるので、いつでも結果を振り返れます。
            </p>
          </div>
          <div className='flex items-center'>
            <a
              href='https://lin.ee/Q5d78ed'
              className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-lg bg-sky-500 hover:bg-sky-700'
            >
              LINEで今すぐはじめる
            </a>
          </div>
        </div>
        <div className='mx-auto -mb-1.5 lg:w-80 xl:mr-24 sm:container lg:mx-10'>
          <Image
            src={mockImg}
            className='object-cover object-bottom '
            alt='200m自由形'
          />
        </div>
      </div>

      <Feature />

      <div className='container px-5 py-12 mx-auto mb-12 lg:max-w-screen-lg'>
        <div className='grid gap-20 md:grid-cols-2'>
          <div className='relative space-y-4'>
            <h3 className='text-3xl font-bold before:w-12 before:h-1.5 before:bg-sky-400 before:absolute before:rounded-lg before:-top-6'>
              LINEでタイムを送信
            </h3>
            <p className='text-gray-600'>
              面倒なコロンやピリオドの入力を省略してタイムを送信します。種目も俗称で素早く入力できます。
            </p>
            <div className='overflow-hidden rounded-lg shadow-lg  aspect-[9/8]'>
              <Image src={demoChatImg} alt='チャットで送信' />
            </div>
          </div>
          <div className='relative space-y-4'>
            <h3 className='text-3xl font-bold before:w-12 before:h-1.5 before:bg-sky-400 before:absolute before:rounded-lg before:-top-6'>
              ユニークな画像を生成
            </h3>
            <p className='text-gray-600'>
              25mから2000mまでの全種目に対応しています。種目に応じてシートのテーマカラーが変わります。
            </p>
            <div className='overflow-hidden rounded-lg shadow-lg aspect-[9/8]'>
              <Image src={colorfulSheetImg} alt='カラフルなシートを生成' />
            </div>
          </div>
        </div>
      </div>

      <div className='p-8 bg-slate-100'>
        <div className='flex flex-col justify-center max-w-sm gap-4 py-8 mx-auto bg-white border-2 border-gray-200 rounded-xl'>
          <div className='flex justify-center w-full '>
            <Image src={logoImg} alt='MiZ' width={150} height={60} />
          </div>
          <div className='text-lg font-black text-center text-gray-7bg-gray-700'>
            水泳レース画像化 & <br className='block md:hidden' />
            データ管理サービス
          </div>
          <a
            href='https://lin.ee/3HTxUXs'
            className='flex justify-center w-full'
          >
            <img
              src='https://scdn.line-apps.com/n/line_add_friends/btn/ja.png'
              alt='友だち追加'
              height={36}
            />
          </a>
          <div className='justify-center hidden w-full md:flex'>
            <img
              src='https://qr-official.line.me/sid/M/589etzcu.png?appendQueryParameter=oat__id%3D38821'
              alt='QRコード'
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
