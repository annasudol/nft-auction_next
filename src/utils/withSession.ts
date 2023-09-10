
import { withIronSession } from "next-iron-session";


export function withSession(handler: unknown) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: "nft-auth-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    }
  })
}

// export const addressCheckMiddleware = async (req: NextApiRequest & { session: Session }, res: NextApiResponse) => {
//   return new Promise(async (resolve, reject) => {
//     const message = req.session.get("message-session");
//     const provider = new ethers.providers.JsonRpcProvider(url);
//     const contract = new ethers.Contract(
//       contractAddress,
//       abi,
//       provider
//     ) as unknown as NftMarketContract;

//     let nonce: string | Buffer =
//       "\x19Ethereum Signed Message:\n" +
//       JSON.stringify(message).length +
//       JSON.stringify(message);

//     nonce = util.keccak(Buffer.from(nonce, "utf-8"));
//     const { v, r, s } = util.fromRpcSig(req.body.signature);
//     const pubKey = util.ecrecover(util.toBuffer(nonce), v, r, s);
//     const addrBuffer = util.pubToAddress(pubKey);
//     const address = util.bufferToHex(addrBuffer);

//     if (address === req.body.address) {
//       resolve("Correct Address");
//     } else {
//       reject("Wrong Address");
//     }
//   })
// }

