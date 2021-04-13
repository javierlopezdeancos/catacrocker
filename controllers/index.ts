import { Airport } from '../types/airport'
import { Bird } from '../types/bird'
import { Flight } from '../types/flight'
import { Document } from 'mongoose'
import type { NextApiResponse } from 'next'
import { ResponseError } from '../types/api'

export const respondMethodNotAllowed = (
  res: NextApiResponse<Document<Bird | Airport | Flight, {}>[] | Document<Bird | Airport | Flight, {}> | ResponseError>
) => {
  res.status(405).json({
    error: true,
    message: 'Method Not Allowed'
  })
}
