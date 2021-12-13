import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>利用規約 | MiZ</title>
        <meta property='og:title' content='利用規約 | MiZ' />
      </Head>
      <div className='text-center'>
        <p className='text-gray-800'>準備中です</p>
      </div>
    </Layout>
  );
};

export default Home;
