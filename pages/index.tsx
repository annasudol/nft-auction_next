import * as React from 'react';

import Layout from '@/components/layout';
import NFTList from '@/components/NFTList';

export default function HomePage() {
  return (
    <Layout>
      <NFTList />
    </Layout>
  );
}
