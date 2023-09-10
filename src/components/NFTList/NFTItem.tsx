/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { FC } from 'react';
import { NftInfo } from 'types/nft';

import BidPriceForm from '@/components/BidPriceForm';

const NFTItem: FC<{ info: NftInfo }> = ({ info }) => {
  const { meta, tokenId, startPrice, creator, bids, startDate, duration } =
    info;

  return (
    <div className='my-2 flex gap-y-1 border-b border-gray-200 py-2'>
      <Image src={meta.image} alt={meta.title} width={300} height={200} />
      <div className='ml-4'>
        <h4>{meta.title}</h4>
        <div className='text-primary-900 my-2 flex items-center text-sm opacity-90'>
          <span className='text-xs uppercase'>Start price:</span>{' '}
          <div className='mx-1 flex w-8 justify-center rounded-sm bg-gray-200 px-2 font-medium text-blue-900'>
            {startPrice}
          </div>
          ETH
        </div>
        <p className='text-xs text-gray-600'>
          {bids.length > 1 ? `${bids.length} bids` : `${bids.length} bid`}
        </p>
        <BidPriceForm />
      </div>
    </div>
  );
};

export default NFTItem;
