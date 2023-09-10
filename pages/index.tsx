import * as React from 'react';

import Layout from '@/components/layout';
import NFTList from '@/components/NFTList';

export default function HomePage() {
  return (
    <Layout>
      <div className='mx-auto max-w-7xl px-2 sm:px-12 lg:px-12'>
        <NFTList />
      </div>
    </Layout>
  );
}
