import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { LinkButton } from '@/components/LinkButton';
import { parseMarkdown } from '@/lib/mdParser';
import styles from '@/styles/docs.module.css';

export function getStaticProps() {
  const html = parseMarkdown('docs/terms.md');

  return {
    props: { html },
  };
}

const Home: NextPage<{ html: string }> = ({ html }) => {
  return (
    <Layout>
      <Head>
        <title>利用規約 | MiZ</title>
        <meta property='og:title' content='利用規約 | MiZ' />
      </Head>
      <div className='container px-4 mx-auto space-y-2 sm:px-8'>
        <LinkButton path='/privacy' caption='プライバシーポリシー' />
        <LinkButton path='/rules' caption='サービス利用のルール' />
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={styles.article}
        />
      </div>
    </Layout>
  );
};

export default Home;
