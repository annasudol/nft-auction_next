import { ConnectWallet } from '@thirdweb-dev/react';
import * as React from 'react';

import Seo from '@/components/layout/SEO';
import UnderlineLink from '@/components/links/UnderlineLink';

import { siteConfig } from '@/constant/config';

import Logo from '~/svg/Logo.svg';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grad h-screen w-screen'>
      <Seo />
      <div className='mx-auto flex h-screen max-w-5xl flex-col items-center justify-between'>
        <header className='flex w-full items-center justify-between'>
          <Logo className='h-16 w-16' />
          <h1 className='text-xl text-gray-700'>{siteConfig.title}</h1>
          <ConnectWallet />
        </header>
        <main>{children}</main>
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
