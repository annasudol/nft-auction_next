
import { useAddress } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

import ImageUpload from '@/components/ImageUpload';
import Layout from '@/components/layout';


const NftCreate: NextPage = () => {
  const address = useAddress();
  const [imgSrc, setImgSrc] = useState('');

  const handleImage = async (file: File | null) => {
    if (!file) {
      return;
    }
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
  };

  const handleAttributeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const uploadMetadata = async () => {};

  if (!address) {
    return (
      <Layout>
        <p>Connect wallet</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='mx-auto max-w-2xl px-2 sm:px-12 lg:px-12'>
       <ImageUpload
        accept='image/png, image/gif, image/jpeg, .svg, image/png'
        imgSrc={imgSrc}
        onChange={handleImage}
      />
     </div>
    </Layout>
  );
};

export default NftCreate;
