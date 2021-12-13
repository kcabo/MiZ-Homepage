import { Layout } from '@/components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>運営者情報 | MiZ</title>
        <meta property='og:title' content='運営者情報 | MiZ' />
      </Head>
      <div className='text-center'>
        <p className='text-gray-800'>準備中です</p>
      </div>
    </Layout>
  );
};

export default Home;
