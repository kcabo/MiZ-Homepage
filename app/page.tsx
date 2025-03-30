import Image from 'next/image';

import mockImg from '@/public/mock.png';
import demoChatImg from '@/public/demo-chat.png';
import colorfulSheetImg from '@/public/colorful-sheet.png';

import { Feature } from '@/components/Feature';

export default async function Page() {
  return (
    <main>
      <div className='mx-auto flex max-w-xl flex-col justify-center px-4 md:px-8 lg:max-w-screen-xl lg:flex-row'>
        <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5'>
          <div className='mb-6 max-w-xl'>
            <h2 className='mb-6 max-w-lg text-4xl leading-tight font-black text-gray-900 sm:text-6xl sm:leading-tight'>
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
              className='inline-flex h-12 items-center justify-center rounded bg-sky-500 px-6 font-medium tracking-wide text-white shadow-lg transition duration-200 hover:bg-sky-700'
            >
              LINEで今すぐはじめる
            </a>
          </div>
        </div>
        <div className='mx-auto -mb-1.5 sm:container lg:mx-10 lg:w-80 xl:mr-24'>
          <Image src={mockImg} className='object-cover object-bottom' alt='200m自由形' />
        </div>
      </div>

      <Feature />

      <div className='container mx-auto mb-12 px-5 py-12 lg:max-w-screen-lg'>
        <div className='grid gap-20 md:grid-cols-2'>
          <div className='space-y-4'>
            <div className='h-1.5 w-12 rounded-lg bg-sky-400'></div>
            <h3 className='block text-3xl font-bold'>LINEでタイムを送信</h3>
            <p className='text-gray-600'>
              面倒なコロンやピリオドの入力を省略してタイムを送信します。種目も俗称で素早く入力できます。
            </p>
            <div className='aspect-[9/8] overflow-hidden rounded-lg shadow-lg'>
              <Image src={demoChatImg} alt='チャットで送信' />
            </div>
          </div>

          <div className='space-y-4'>
            <div className='h-1.5 w-12 rounded-lg bg-sky-400'></div>
            <h3 className='block text-3xl font-bold'>ユニークな画像を生成</h3>
            <p className='text-gray-600'>
              25mから2000mまでの全種目に対応しています。種目に応じてシートのテーマカラーが変わります。
            </p>
            <div className='aspect-[9/8] overflow-hidden rounded-lg shadow-lg'>
              <Image src={colorfulSheetImg} alt='カラフルなシートを生成' />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-slate-100 p-8'>
        <div className='mx-auto flex max-w-sm flex-col justify-center gap-4 rounded-xl border-2 border-gray-200 bg-white py-8'>
          <div className='flex w-full justify-center'>
            <Image src='/miz-logo-landscape.svg' alt='MiZ' width={150} height={60} />
          </div>
          <div className='text-gray-7bg-gray-700 text-center text-lg font-black'>
            水泳レース画像化 & <br className='block md:hidden' />
            データ管理サービス
          </div>
          <a href='https://lin.ee/3HTxUXs' className='mx-auto w-32'>
            <img src='https://scdn.line-apps.com/n/line_add_friends/btn/ja.png' alt='友だち追加' />
          </a>
          <div className='hidden w-full justify-center md:flex'>
            <img
              src='https://qr-official.line.me/sid/M/589etzcu.png?appendQueryParameter=oat__id%3D38821'
              alt='QRコード'
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
