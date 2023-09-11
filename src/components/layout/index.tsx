import * as React from 'react';

import Seo from '@/components/layout/SEO';
import UnderlineLink from '@/components/links/UnderlineLink';
import Navbar from '@/components/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grad h-screen w-screen'>
      <Seo />
      <div className='flex-col justify-between'>
        <Navbar />
        <main className='mx-auto mt-20 w-full'>{children}</main>
        <footer className='self-center text-gray-700'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://github.com/annasudol?ref=tsnextstarter'>
            Anna Sudol
          </UnderlineLink>
        </footer>
      </div>
    </div>
  );
}
