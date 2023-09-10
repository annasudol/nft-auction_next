import { NftInfo } from 'types/nft';

const NFTList = () => {
  const list: NftInfo[] = [
    {
      meta: {
        image: 'https://unsplash.com/photos/WUKy4uIDiaw',
        title: 'Nft one',
      },
      tokenId: 1,
      startPrice: 10,
      creator: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872',
      bids: [
        { address: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872', price: 11 },
      ],
      startDate: new Date('2/20/2023').toDateString(),
      duration: 10,
    },
    {
      meta: {
        image:
          'https://unsplash.com/photos/a-camper-trailer-parked-next-to-a-dragon-like-structure-u_xzx8uDCgw',
        title: 'Nft one',
      },
      tokenId: 2,
      startPrice: 1,
      creator: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872',
      bids: [
        { address: '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872', price: 2 },
      ],
      startDate: new Date('2/20/2023').toDateString(),
      duration: 10,
    },
  ];
  return (
    <div className='my-4'>
      {list.map((nftItem) => (
        <div key={nftItem.tokenId}>{nftItem.creator}</div>
      ))}
    </div>
  );
};
export default NFTList;
