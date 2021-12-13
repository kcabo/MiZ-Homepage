import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { LinkButton } from '@/components/LinkButton';
import { parseMarkdown } from '@/lib/mdParser';
import styles from '@/styles/docs.module.css';

export function getStaticProps() {
  const html = parseMarkdown('docs/privacy.md');

  return {
    props: { html },
  };
}

const Home: NextPage<{ html: string }> = ({ html }) => {
  return (
    <Layout>
      <Head>
        <title>プライバシーポリシー | MiZ</title>
        <meta property='og:title' content='プライバシーポリシー | MiZ' />
      </Head>
      <div className='container px-8 mx-auto'>
        <LinkButton path='/terms' caption='利用規約' />
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={styles.article}
        />
      </div>
    </Layout>
  );
};

export default Home;
