import { Airport } from '../types/airport'
import { Bird } from '../types/bird'
import { Document } from 'mongoose'
import type { NextApiResponse } from 'next'
import { ResponseError } from '../types/api'

export const respondMethodNotAllowed = (res: NextApiResponse<Document<Bird | Airport, {}>[] | ResponseError>) => {
  res.status(405).json({
    error: true,
    message: 'Method Not Allowed'
  })
}
