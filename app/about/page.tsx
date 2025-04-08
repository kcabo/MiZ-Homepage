import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '運営者情報',
  description: 'MiZは、元スイマーのフリーランスエンジニアによって運営されています。',
};

export default async function Page() {
  return (
    <div className='container mx-auto mb-10'>
      <h1 className='mb-8 bg-gradient-to-br from-green-300 via-blue-500 to-violet-600 bg-clip-text px-3 text-center text-3xl font-black text-transparent'>
        水泳に集中できる
        <br className='block sm:hidden' />
        環境を作る
      </h1>
      <div className='flex flex-col items-center justify-center gap-5 sm:flex-row'>
        <div className='flex h-24 w-24 items-center justify-center rounded-full bg-sky-800'>
          <div className='text-4xl leading-none font-bold text-white'>M</div>
        </div>
        <div>
          <div className='mb-2 text-xl font-bold text-gray-800'>Reo Kanzaki</div>
          <p className='mx-auto w-82 text-gray-500'>
            現役ベストは短水半フリが26秒をやっと切るくらい。そんなフリーランスがほそぼそ運営中。
            <br />
            <a href='https://kcabo.vercel.app/'>https://kcabo.vercel.app/</a>
          </p>
        </div>
      </div>
    </div>
  );
}
