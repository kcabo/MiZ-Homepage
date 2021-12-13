import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>運営者情報 | MiZ</title>
        <meta property='og:title' content='運営者情報 | MiZ' />
      </Head>

      <div className='container mx-auto mb-10'>
        <h1 className='px-3 mb-8 text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-blue-500 to-violet-600'>
          水泳に集中できる
          <br className='block sm:hidden' />
          環境を作る
        </h1>
        <div className='flex flex-col items-center justify-center gap-5 sm:flex-row'>
          <div className='flex items-center justify-center w-24 h-24 rounded-full bg-sky-800'>
            <div className='text-4xl font-bold leading-none text-white'>M</div>
          </div>
          <div>
            <div className='mb-2 text-xl font-bold text-gray-800'>
              MiZ開発チーム
            </div>
            <p className='text-gray-400 w-72'>
              半フリのベストタイムは短水で26秒をやっと切れるくらい。そんな大学生が1名。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
