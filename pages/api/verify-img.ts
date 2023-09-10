import axios from 'axios';
import FormData from 'form-data';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-iron-session';
import { v4 as uuidv4 } from 'uuid';

import { withSession } from '@/utils/withSession';

import { FileReq } from '@/types/nft';

export default withSession(
  async (req: NextApiRequest & { session: Session }, res: NextApiResponse) => {
    if (req.method === 'POST') {
      const { bytes, fileName, contentType } = req.body as FileReq;

      const buffer = Buffer.from(Object.values(bytes) as any);
      const formData = new FormData();

      formData.append('file', buffer, {
        contentType,
        filename: fileName + '-' + uuidv4(),
      });

      const fileRes = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          maxBodyLength: Infinity,
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
            pinata_api_key: process.env.NEXT_PINIATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PINIATA_API_SECRET,
          },
        }
      );

      return res.status(200).send(fileRes.data);
    } else {
      return res.status(422).send({ message: 'Invalid endpoint' });
    }
  }
);
