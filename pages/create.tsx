// import * as React from 'react';

// import Layout from '@/components/layout';

// export default function HomePage() {
//   return (
//     <Layout>
//       <p>create nft</p>
//     </Layout>
//   );
// }
/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import Layout from '@/components/layout';
import { Switch } from '@headlessui/react';
import Link from 'next/link';
// import { NftMeta, PinataRes } from '@_types/nft';
import axios from 'axios';
// import { useWeb3 } from '@providers/web3';
// import { ethers } from 'ethers';
// import { toast } from "react-toastify";
// import { useNetwork } from '@hooks/web3';
import { ExclamationIcon } from '@heroicons/react/solid';
import { useAddress } from '@thirdweb-dev/react';
import ImageUpload from '@/components/ImageUpload';

const ALLOWED_FIELDS = ['name', 'description', 'image', 'attributes'];

const NftCreate: NextPage = () => {
  const address = useAddress();
  // const {ethereum, contract} = useWeb3();
  // const {network} = useNetwork();
  const [imgSrc, setImgSrc] = useState('');
  const [price, setPrice] = useState('');
  const [hasURI, setHasURI] = useState(false);
  const [nftMeta, setNftMeta] = useState<string>();

  const getSignedData = async () => {
    // const messageToSign = await axios.get("/api/verify");
    // const accounts = await ethereum?.request({method: "eth_requestAccounts"}) as string[];
    // const account = accounts[0];
    // const signedData = await ethereum?.request({
    //   method: "personal_sign",
    //   params: [JSON.stringify(messageToSign.data), account, messageToSign.data.id]
    // })
    // return {signedData, account};
  };

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error('Select a file');
      return;
    }

    const file = e.target.files[0];
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    // try {
    //   const {signedData, account} = await getSignedData();
    //   const promise = axios.post("/api/verify-image", {
    //     address: account,
    //     signature: signedData,
    //     bytes,
    //     contentType: file.type,
    //     fileName: file.name.replace(/\.[^/.]+$/, "")
    //   });

    //   const res = await toast.promise(
    //     promise, {
    //       pending: "Uploading image",
    //       success: "Image uploaded",
    //       error: "Image upload error"
    //     }
    //   )

    //   const data = res.data as PinataRes;

    //   setNftMeta({
    //     ...nftMeta,
    //     image: `${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`
    //   });
    // } catch(e: any) {
    //   console.error(e.message);
    // }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // setNftMeta({...nftMeta, [name]: value});
  };

  const handleAttributeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // const attributeIdx = nftMeta.attributes.findIndex(attr => attr.trait_type === name);

    // nftMeta.attributes[attributeIdx].value = value;
    // setNftMeta({
    //   ...nftMeta,
    //   attributes: nftMeta.attributes
    // })
  };

  const uploadMetadata = async () => {
    // try {
    //   const {signedData, account} = await getSignedData();
    //   const promise = axios.post("/api/verify", {
    //     address: account,
    //     signature: signedData,
    //     nft: nftMeta
    //   })
    //   const res = await toast.promise(
    //     promise, {
    //       pending: "Uploading metadata",
    //       success: "Metadata uploaded",
    //       error: "Metadata upload error"
    //     }
    //   )
    //   const data = res.data as PinataRes;
    //   setNftURI(`${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`);
    // } catch (e: any) {
    //   console.error(e.message);
    // }
  };

  const createNft = async () => {
    // try {
    //   const nftRes = await axios.get(nftURI);
    //   const content = nftRes.data;
    //   Object.keys(content).forEach(key => {
    //     if (!ALLOWED_FIELDS.includes(key)) {
    //       throw new Error("Invalid Json structure");
    //     }
    //   })
    //   const tx = await contract?.mintToken(
    //     nftURI,
    //     ethers.utils.parseEther(price), {
    //       value: ethers.utils.parseEther(0.025.toString())
    //     }
    //   );
    //   await toast.promise(
    //     tx!.wait(), {
    //       pending: "Minting Nft Token",
    //       success: "Nft has ben created",
    //       error: "Minting error"
    //     }
    //   );
    // } catch(e: any) {
    //   console.error(e.message);
    // }
  };

  if (!address) {
    return (
      <Layout>
       <p>Connect wallet</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <ImageUpload
        id='nft_img'
        accept='image/png, image/gif, image/jpeg, .svg, image/png'
        imgSrc={imgSrc}
        onChange={(e) => console.log(e)}
      />
    </Layout>
  );
};

export default NftCreate;
