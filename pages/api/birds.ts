import type { NextApiRequest, NextApiResponse } from 'next'

import { Bird } from '../../types/bird'
import { ResponseError } from '../../types/api'
import { Document } from 'mongoose'
import birdModel from '../../models/bird'
import connectDB from '../../middleware/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse<Document<Bird, {}>[] | ResponseError>) => {
  // Get all birds
  if (req?.method === 'GET') {
    const birds = await birdModel.find({}) as Document<Bird, {}>[];

    if (birds) {
      res.status(200).json(birds)
    }
  }

  if (req?.method === 'POST') {
    const { bird } = req.body

    if (bird) {
      try {
        const birds = await birdModel.save(bird) as Document<Bird, {}>[];
        res.status(200).json(birds)
      } catch (error) {
        res.status(403).json({
          error: true,
          message: error.message,
        })
      }

    }

    res.status(400).json({
      error: true,
      message: 'Imposible find bird param to save'
    })
  }
}

export default connectDB(handler);
