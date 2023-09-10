export type NftMeta = {
  title: string;
  image: string;
};
export type NftInfo = {
  meta: NftMeta;
  tokenId: number;
  startPrice: number;
  creator: string;
  bids: { address: string; price: number }[];
  startDate: string;
  duration: number;
};
