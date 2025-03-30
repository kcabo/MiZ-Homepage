import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/public/miz-logo-landscape.svg';

export function Header() {
  return (
    <div className='sticky top-0 z-10 mb-10 w-full border-b border-gray-200 backdrop-blur-2xl lg:mb-16'>
      <div className='container mx-auto flex max-w-7xl items-center justify-between px-5 py-2'>
        <div className='flex'>
          <Link href='/' className='w-24 py-2'>
            <Image src={logoImg} alt='MiZ' />
          </Link>
          <nav className='hidden items-center space-x-6 pl-6 text-base md:ml-8 md:flex'>
            <Link href='/about' className='leading-6 font-medium text-gray-600 hover:text-gray-900'>
              運営者情報
            </Link>
            <Link href='/terms' className='leading-6 font-medium text-gray-600 hover:text-gray-900'>
              利用規約
            </Link>
          </nav>
        </div>

        <div className='ml-5'>
          <a
            href='https://lin.ee/LV3cuXP'
            className='whitespace-no-wrap rounded bg-sky-500 px-4 py-2.5 text-base leading-6 font-medium text-white hover:shadow hover:shadow-sky-500/50'
          >
            友だち追加
          </a>
        </div>
      </div>
    </div>
  );
}
