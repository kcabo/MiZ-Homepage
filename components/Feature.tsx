import { Lovely, Icon, ShieldTick, Flashy, EmojiHappy } from 'iconsax-react';

export function Feature() {
  return (
    <div className='mb-8' id='feature'>
      <div className='bg-slate-100'>
        <div className='mx-auto px-4 pt-16 pb-6 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pt-20'>
          <div className='mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl'>
            <div>
              <p className='mb-4 inline-block rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-800 uppercase'>
                Feature
              </p>
            </div>
            <h2 className='mb-6 max-w-lg text-3xl leading-none font-bold tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-slate-300 sm:block lg:-mt-10 lg:-ml-28 lg:w-32'
                >
                  <defs>
                    <pattern id='dc223fcc-6d72-4ebc-b4ef-abe121034d6e' x='0' y='0' width='.135' height='.30'>
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect fill='url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)' width='52' height='24' />
                </svg>
                <span className='relative'>レース記録を</span>
              </span>{' '}
              スマートに
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              レース結果を紙で管理していませんか？
              <br />
              スマホひとつで、レース結果を素早く一枚の画像に記録できます
            </p>
          </div>
        </div>
      </div>
      <div className='relative px-4 md:px-0'>
        <div className='absolute inset-0 h-16 bg-slate-100 md:h-1/4 lg:h-1/2' />
        <div className='relative container mx-auto grid gap-3 md:grid-cols-2 lg:grid-cols-4'>
          <FeatureItem Icon={Lovely} caption='手軽に記録'>
            タイムをLINEで送るだけ。面倒な操作は必要ありません。
          </FeatureItem>
          <FeatureItem Icon={EmojiHappy} caption='無料で使える'>
            もちろん無料です。好きなときに気軽に使えます。
          </FeatureItem>
          <FeatureItem Icon={Flashy} caption='登録不要'>
            メアドやパスワードは不要です。LINEで友だちになるだけで始められます。
          </FeatureItem>
          <FeatureItem Icon={ShieldTick} caption='安心のセキュリティ'>
            データがしっかり保護されるよう、セキュリティを第一に設計してあります。
          </FeatureItem>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ Icon, caption, children }: { Icon: Icon; caption: string; children: React.ReactNode }) {
  return (
    <div className='space-y-2 rounded-xl border border-slate-200 bg-white p-8'>
      <Icon size='36' color='#38bdf8' variant='Bulk' />
      <h3 className='text-lg font-bold tracking-wide text-gray-800'>{caption}</h3>
      <p className='text-gray-600'>{children}</p>
    </div>
  );
}
