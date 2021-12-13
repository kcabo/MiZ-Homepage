import Link from 'next/link';
import { ArrowCircleRight } from 'iconsax-react';

export function LinkButton({
  path,
  caption,
}: {
  path: string;
  caption: string;
}) {
  return (
    <Link href={path}>
      <a className='flex items-center px-4 py-2 space-x-2 border rounded-md w-fit border-slate-200'>
        <ArrowCircleRight size='24' color='#94a3b8' variant='Bulk' />
        <div className='text-lg font-bold text-gray-700 '>{caption}</div>
      </a>
    </Link>
  );
}
