import type { NextApiRequest, NextApiResponse } from 'next'

import { Document } from 'mongoose'
import { Flight } from '../../types/flight'
import connectDB from '../../middleware/mongodb'
import { getFlightsHandler, createFlightHandler } from '../../controllers/flights'
import { ResponseError } from '../../types/api'
import { respondMethodNotAllowed } from '../../controllers'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Flight, {}>[] | Document<Flight, {}> | ResponseError>
) => {
  switch (req?.method) {
    case 'GET':
      await getFlightsHandler(req, res)
      break;
    case 'POST':
      await createFlightHandler(req, res)
      break;
    default:
      respondMethodNotAllowed(res)
      break;
  }
}

export default connectDB(handler);
