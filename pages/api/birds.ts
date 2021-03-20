import type { NextApiRequest, NextApiResponse } from 'next'

import { Bird } from '../../types/bird'
import { Document } from 'mongoose'
import birdModel from '../../models/bird'
import connectDB from '../../middleware/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse<Document<Bird, {}>[]>) => {
  // Get all birds
  if (req.method === 'GET') {
    const birds = await birdModel.find({}) as Document<Bird, {}>[];

    if (birds) {
      res.status(200).json(birds)
    }
  }
}

export default connectDB(handler);
