/* eslint-disable @next/next/no-img-element */
import { ClockIcon } from '@heroicons/react/outline';
import moment from 'moment';
import Image from 'next/image';
import { FC } from 'react';
import { NftInfo } from 'types/nft';

import BidPriceForm from '@/components/BidPriceForm';

const NFTItem: FC<{ info: NftInfo }> = ({ info }) => {
  const { meta, startPrice, bids, startDate, duration } = info;
  return (
    <div className='py- my-3 flex max-w-sm flex-col rounded-md border border-gray-200 p-2 sm:max-w-none sm:flex-row'>
      <Image src={meta.image} alt={meta.title} width={300} height={200} />
      <div className='ml-2 mt-2 sm:ml-4 sm:mt-0'>
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
        <div className='flex py-2 text-gray-600'>
          <ClockIcon className='mr-1 w-5' />
          <span className='text-sm font-medium'>
            {moment(startDate).add(duration, 'days').fromNow()}
          </span>
        </div>

        <BidPriceForm
          defaultValue={bids.length ? bids[bids.length - 1].price : startPrice}
        />
      </div>
    </div>
  );
};

export default NFTItem;
