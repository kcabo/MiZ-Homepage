import type { Metadata } from 'next';

import { LinkButton } from '@/components/LinkButton';
import { parseMarkdown } from '@/lib/mdParser';

import '@/styles/markdown.css';

export const metadata: Metadata = {
  title: 'サービス利用のルール',
};

export default async function Page() {
  const html = await parseMarkdown('docs/terms.md');

  return (
    <div className='container mx-auto space-y-2 px-4 sm:px-8'>
      <LinkButton path='/privacy' caption='プライバシーポリシー' />
      <LinkButton path='/rules' caption='サービス利用のルール' />
      <div dangerouslySetInnerHTML={{ __html: html }} className='article' />
    </div>
  );
}
