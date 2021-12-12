import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import mockImg from '../public/mock.png';
import logoImg from '../public/miz-logo-landscape.svg';

const Home: NextPage = () => {
  return (
    <>
      <div className='fixed z-10 w-full border-b border-gray-200 backdrop-blur-xl '>
        <div className='container flex items-center justify-between px-5 py-2 mx-auto max-w-7xl'>
          <div className='flex '>
            <Link href='/'>
              <a className='w-24 pt-2'>
                <Image src={logoImg} alt='MiZ' />
              </a>
            </Link>
            <nav className='items-center hidden pl-8 space-x-3 text-base md:flex md:ml-8 '>
              <a
                href='#service'
                className='mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900'
              >
                特徴
              </a>
              <Link href='/terms'>
                <a className='mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900'>
                  利用規約
                </a>
              </Link>
            </nav>
          </div>

          <div className='ml-5 '>
            <a
              href='https://lin.ee/YR8jgpg'
              className='px-4 py-2.5 text-base font-medium leading-6 text-white whitespace-no-wrap rounded-md shadow-sm bg-sky-500 hover:bg-sky-500'
            >
              友だち追加
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center max-w-xl px-4 pt-24 mx-auto lg:pt-40 lg:flex-row md:px-8 lg:max-w-screen-xl'>
        <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 '>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 text-4xl font-black leading-tight text-gray-900 sm:text-6xl sm:leading-tight'>
              レース結果を
              <br className='' />
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
        <div className='mx-auto -mb-1 lg:w-80 xl:mr-24 sm:container lg:mx-10'>
          <Image src={mockImg} className='object-cover object-bottom ' alt='' />
        </div>
      </div>

      <div className='mb-16' id='service'>
        <div className='bg-gray-100'>
          <div className='px-4 pt-16 pb-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
              <div>
                <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase bg-teal-400 rounded-full'>
                  Service
                </p>
              </div>
              <h2 className='max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                <span className='relative inline-block'>
                  <svg
                    viewBox='0 0 52 24'
                    fill='currentColor'
                    className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                  >
                    <defs>
                      <pattern
                        id='dc223fcc-6d72-4ebc-b4ef-abe121034d6e'
                        x='0'
                        y='0'
                        width='.135'
                        height='.30'
                      >
                        <circle cx='1' cy='1' r='.7' />
                      </pattern>
                    </defs>
                    <rect
                      fill='url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)'
                      width='52'
                      height='24'
                    />
                  </svg>
                  <span className='relative'>レース記録を</span>
                </span>{' '}
                スマートに
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                レース結果を紙で管理していませんか？MiZにチャット形式でレースタイムを入力すれば、素早く一枚の画像にまとめてくれます。全てスマホで完結するので、大会中のマネージャーの負担を軽減します。
              </p>
            </div>
          </div>
        </div>
        <div className='relative px-4 sm:px-0'>
          <div className='absolute inset-0 bg-gray-100 h-1/2' />
          <div className='relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md'>
            <div className='inline-block p-8 text-center'>
              <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-sky-50'>
                <svg
                  className='w-10 h-10 text-sky-500'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <p className='font-bold tracking-wide text-gray-800'>
                手軽に記録
              </p>
            </div>
            <div className='inline-block p-8 text-center'>
              <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-sky-50'>
                <svg
                  className='w-10 h-10 text-sky-500'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <p className='font-bold tracking-wide text-gray-800'>
                無料で使える
              </p>
            </div>
            <div className='inline-block p-8 text-center'>
              <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-sky-50'>
                <svg
                  className='w-10 h-10 text-sky-500'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <p className='font-bold tracking-wide text-gray-800'>
                パスワードいらず
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-white'>
        <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
          <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
            <div className='px-5 py-2'>
              <Link href='/about'>
                <a className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                  運営者情報
                </a>
              </Link>
            </div>

            <div className='px-5 py-2'>
              <a
                href='https://forms.gle/Sjsh5k1CUo8ziyA29'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'
              >
                お問い合わせ
              </a>
            </div>
            <div className='px-5 py-2'>
              <Link href='/terms'>
                <a className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                  利用規約
                </a>
              </Link>
            </div>
          </nav>
          <div className='flex justify-center mt-8 space-x-6'>
            <a
              href='https://twitter.com/swim_zero'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Twitter</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
              </svg>
            </a>
            <a
              href='https://github.com/kcabo'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>GitHub</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
          <p className='mt-8 text-base leading-6 text-center text-gray-400'>
            © 2021 MiZ開発チーム
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
