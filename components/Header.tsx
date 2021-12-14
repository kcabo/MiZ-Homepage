import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/public/miz-logo-landscape.svg';

export function Header() {
  return (
    <div className='sticky top-0 z-10 w-full mb-10 border-b border-gray-200 lg:mb-16 backdrop-blur-2xl'>
      <div className='container flex items-center justify-between px-5 py-2 mx-auto max-w-7xl'>
        <div className='flex '>
          <Link href='/'>
            <a className='w-24 pt-2'>
              <Image src={logoImg} alt='MiZ' />
            </a>
          </Link>
          <nav className='items-center hidden pl-6 space-x-6 text-base md:flex md:ml-8 '>
            <a
              href='#service'
              className='font-medium leading-6 text-gray-600 hover:text-gray-900'
            >
              特徴
            </a>
            <Link href='/about'>
              <a className='font-medium leading-6 text-gray-600 hover:text-gray-900'>
                運営者情報
              </a>
            </Link>
            <Link href='/terms'>
              <a className='font-medium leading-6 text-gray-600 hover:text-gray-900'>
                利用規約
              </a>
            </Link>
          </nav>
        </div>

        <div className='ml-5 '>
          <a
            href='https://lin.ee/YR8jgpg'
            className='px-4 py-2.5 text-base font-medium leading-6 text-white whitespace-no-wrap rounded hover:shadow bg-sky-500 hover:shadow-sky-500/50'
          >
            友だち追加
          </a>
        </div>
      </div>
    </div>
  );
}
