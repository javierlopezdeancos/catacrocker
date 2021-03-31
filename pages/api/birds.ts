import type { NextApiRequest, NextApiResponse } from 'next'

import { Bird } from '../../types/bird'
import { ResponseError } from '../../types/api'
import { Document } from 'mongoose'
import birdModel from '../../models/bird'
import connectDB from '../../middleware/mongodb'

const methodNotAllowed = (res: NextApiResponse<Document<Bird, {}>[] | ResponseError>) => {
  res.status(405).json({
    error: true,
    message: 'Method Not Allowed'
  })
}

const getBirdsHandler = async (res: NextApiResponse<Document<Bird, {}>[] | ResponseError>): Promise<void> => {
  try {
    const birds = await birdModel.find({}) as Document<Bird, {}>[];

    if (birds) {
      res.status(200).json(birds)
    }
  } catch (error) {
    res.status(403).json({
      error: true,
      message: error.message,
    })
  }
}

const createBirdHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Bird, {}>[] | ResponseError>
): Promise<void> => {
  const bird = req.body

  if (bird) {
    try {
      const birdCreated = await birdModel.create(bird) as Document<Bird, {}>[];
      res.status(201).json(birdCreated)
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      })
    }
  }

  res.status(400).json({
    error: true,
    message: 'Imposible to find bird param to save'
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Document<Bird, {}>[] | ResponseError>) => {
  switch (req?.method) {
    case 'GET':
      await getBirdsHandler(res)
      break;
    case 'POST':
      createBirdHandler(req, res)
      break;
    default:
      methodNotAllowed(res)
      break;
  }
}

export default connectDB(handler);
