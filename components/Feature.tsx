import { Lovely, Icon, ShieldTick, Flashy, EmojiHappy } from 'iconsax-react';

export function Feature() {
  return (
    <div className='mb-16' id='service'>
      <div className='bg-slate-100'>
        <div className='px-4 pt-16 pb-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-cyan-800 bg-cyan-300'>
                Service
              </p>
            </div>
            <h2 className='max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
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
              レース結果を紙で管理していませんか？MiZはレース結果を素早く一枚の画像にまとめてくれます。全てスマホで完結するので、大会中のマネージャーの負担を軽減します。
            </p>
          </div>
        </div>
      </div>
      <div className='relative px-4 md:px-0'>
        <div className='absolute inset-0 h-10 bg-slate-100 md:h-1/2' />
        <div className='container relative grid gap-3 mx-auto md:grid-cols-4'>
          <FeatureItem Icon={Lovely} caption='手軽に記録'>
            タイムをLINEで送るだけ。面倒な操作は必要ありません。
          </FeatureItem>
          <FeatureItem Icon={EmojiHappy} caption='無料で使える'>
            もちろん無料です。好きなときに気軽に使ってください。
          </FeatureItem>
          <FeatureItem Icon={Flashy} caption='登録不要'>
            メールアドレスやパスワードは不要です。LINEの友だち追加で利用開始。
          </FeatureItem>
          <FeatureItem Icon={ShieldTick} caption='安心のセキュリティ'>
            セキュリティを第一に設計してあります。みなさんのデータを保護します。
          </FeatureItem>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  Icon,
  caption,
  children,
}: {
  Icon: Icon;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className='p-8 space-y-2 bg-white border rounded-xl border-slate-200'>
      <Icon size='36' color='#38bdf8' variant='Bulk' />
      <h3 className='text-lg font-bold tracking-wide text-gray-800'>
        {caption}
      </h3>
      <p className='text-gray-600'>{children}</p>
    </div>
  );
}
