import { NftInfo } from 'types/nft';

import NFTItem from '@/components/NFTList/NFTItem';

const NFTList = () => {
  const list: NftInfo[] = [
    {
      meta: {
        image:
          'https://images.unsplash.com/photo-1694213573428-063bcd9c5aee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
        title: 'Nft one',
      },
      tokenId: 1,
      startPrice: 10,
      creator: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872',
      bids: [
        { address: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872', price: 11 },
      ],
      startDate: new Date('2023-09-10').toDateString(),
      duration: 15,
    },
    {
      meta: {
        image:
          'https://images.unsplash.com/photo-1693892256614-6bceaa9e1b67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3516&q=80',
        title: 'Nft one',
      },
      tokenId: 2,
      startPrice: 1,
      creator: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872',
      bids: [
        { address: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872', price: 2 },
      ],
      startDate: new Date('2023-09-09').toDateString(),
      duration: 10,
    },
     {
      meta: {
        image:
          'https://images.unsplash.com/photo-1693892256614-6bceaa9e1b67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3516&q=80',
        title: 'Nft one',
      },
      tokenId: 3,
      startPrice: 1,
      creator: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872',
      bids: [
        { address: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872', price: 2 },
      ],
      startDate: new Date('2023-09-09').toDateString(),
      duration: 10,
    },
     {
      meta: {
        image:
          'https://images.unsplash.com/photo-1693892256614-6bceaa9e1b67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3516&q=80',
        title: 'Nft one',
      },
      tokenId: 4,
      startPrice: 1,
      creator: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872',
      bids: [
        { address: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872', price: 2 },
      ],
      startDate: new Date('2023-09-09').toDateString(),
      duration: 14,
    },
  ];
  return (
    <div className='my-4 max-w-2xl'>
      {list.map((nftItem) => (
        <NFTItem info={nftItem} key={nftItem.tokenId} />
      ))}
    </div>
  );
};
export default NFTList;
