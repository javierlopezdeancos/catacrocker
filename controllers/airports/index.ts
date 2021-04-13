import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import { Airport } from '../../types/airport'
import AirportModel from '../../models/airport'
import { Document } from 'mongoose'
import { ResponseError } from '../../types/api'

export const getAirportsHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Airport, {}>[] | ResponseError>
): Promise<void> => {
  try {
    const airports = await AirportModel.find({}) as Document<Airport, {}>[];

    if (airports) {
      res.status(200).json(airports)
    }
  } catch (error) {
    res.status(403).json({
      error: true,
      message: error.message,
    })
  }
}

export const IMPOSIBLE_FIND_AIRPORT_TO_CREATE_IT_ERROR_MESSAGE = 'Imposible to find airport param to save'

export const createAirportHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Airport, {}> | ResponseError>
): Promise<void> => {
  const airport = req.body

  if (airport) {
    try {
      const airportCreated = await AirportModel.create(airport) as Document<Airport, {}>;
      res.status(201).json(airportCreated)
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      })
    }
  }

  res.status(400).json({
    error: true,
    message: IMPOSIBLE_FIND_AIRPORT_TO_CREATE_IT_ERROR_MESSAGE
  })
}
