import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

import { Bird } from '../../types/bird'
import { ResponseError } from '../../types/api'
import { Document } from 'mongoose'
import BirdModel from '../../models/bird'
import connectDB from '../../middleware/mongodb'

const respondMethodNotAllowed = (res: NextApiResponse<Document<Bird, {}>[] | ResponseError>) => {
  res.status(405).json({
    error: true,
    message: 'Method Not Allowed'
  })
}

export const getBirdsHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Bird, {}>[] | ResponseError>
): Promise<void> => {
  try {
    const birds = await BirdModel.find({}) as Document<Bird, {}>[];

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
      const birdCreated = await BirdModel.create(bird) as Document<Bird, {}>[];
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
      await getBirdsHandler(req, res)
      break;
    case 'POST':
      await createBirdHandler(req, res)
      break;
    default:
      respondMethodNotAllowed(res)
      break;
  }
}

export default connectDB(handler);
