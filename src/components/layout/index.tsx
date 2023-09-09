import { ConnectWallet } from '@thirdweb-dev/react';
import * as React from 'react';

import Seo from '@/components/layout/SEO';
import UnderlineLink from '@/components/links/UnderlineLink';
import Navbar from "@/components/nav"
import { siteConfig } from '@/constant/config';

// import Logo from '~/svg/Logo.svg';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grad h-screen w-screen'>
      <Seo />
      <div className='flex h-screen w-screen flex-col items-center justify-between'>
        <Navbar />
        <main className='mt-44 sm:mt-24'>{children}</main>
        <footer className='text-gray-700'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://github.com/annasudol?ref=tsnextstarter'>
            Anna Sudol
          </UnderlineLink>
        </footer>
      </div>
    </div>
  );
}
