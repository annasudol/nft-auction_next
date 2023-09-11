import * as React from 'react';

import Seo from '@/components/layout/SEO';
import UnderlineLink from '@/components/links/UnderlineLink';
import Navbar from '@/components/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Seo />
      <div className='flex-col justify-between'>
        <Navbar />
        <main className='mx-auto mt-20 w-full'>{children}</main>
        <footer className='text-gray-700 fixed left-0 right-0 bottom-0 flex justify-center'>
          <span className='mr-1'>© {new Date().getFullYear()} By{' '}</span>
          <UnderlineLink href='https://github.com/annasudol?ref=tsnextstarter'>
            Anna Sudol
          </UnderlineLink>
        </footer>
      </div>
    </div>
  );
}
