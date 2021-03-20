import type { NextApiRequest, NextApiResponse } from 'next'

import { Airport } from '../../types/airport'
import { Document } from 'mongoose'
import airportModel from '../../models/airport'
import connectDB from '../../middleware/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse<Document<Airport, {}>[]>) => {
  // Get all airports
  if (req.method === 'GET') {
    const airports = await airportModel.find({}) as Document<Airport, {}>[];

    if (airports) {
      res.status(200).json(airports)
    }
  }
}

export default connectDB(handler);
