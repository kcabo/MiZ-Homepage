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
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
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
              レース結果を紙で管理していませんか？MiZにチャット形式でレースタイムを入力すれば、素早く一枚の画像にまとめてくれます。全てスマホで完結するので、大会中のマネージャーの負担を軽減します。
            </p>
          </div>
        </div>
      </div>
      <div className='relative px-4 sm:px-0'>
        <div className='absolute inset-0 bg-slate-100 h-1/2' />
        <div className='relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md'>
          <div className='inline-block p-8 text-center'>
            <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-sky-50'>
              <svg
                className='w-10 h-10 text-sky-500'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <p className='font-bold tracking-wide text-gray-800'>手軽に記録</p>
          </div>
          <div className='inline-block p-8 text-center'>
            <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-sky-50'>
              <svg
                className='w-10 h-10 text-sky-500'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <p className='font-bold tracking-wide text-gray-800'>
              無料で使える
            </p>
          </div>
          <div className='inline-block p-8 text-center'>
            <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-sky-50'>
              <svg
                className='w-10 h-10 text-sky-500'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <p className='font-bold tracking-wide text-gray-800'>
              パスワードいらず
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
