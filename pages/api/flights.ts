import type { NextApiRequest, NextApiResponse } from 'next'

import { Document } from 'mongoose'
import { Flight } from '../../types/flight'
import connectDB from '../../middleware/mongodb'
import flightModel from '../../models/flight'

const handler = async (req: NextApiRequest, res: NextApiResponse<Document<Flight, {}>[]>) => {
  // Get all flights
  if (req.method === 'GET') {
    const flight = await flightModel.find({}) as Document<Flight, {}>[];

    if (flight) {
      res.status(200).json(flight)
    }
  }
}

export default connectDB(handler);
