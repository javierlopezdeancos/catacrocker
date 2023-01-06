import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import { Document } from "mongoose"
import { Flight } from "../../types/flight"
import FlightModel from "../../models/flight"
import { ResponseError } from "../../types/api"

export const getFlightsHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Flight, {}>[] | ResponseError>
): Promise<void> => {
  try {
    const flights = (await FlightModel.find({})) as Document<Flight, {}>[]

    if (flights) {
      res.status(200).json(flights)
    }
  } catch (error) {
    res.status(403).json({
      error: true,
      message: error.message,
    })
  }
}

export const IMPOSIBLE_FIND_FLIGHT_TO_CREATE_IT_ERROR_MESSAGE =
  "Imposible to find flight param to save"

export const createFlightHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Flight, {}> | ResponseError>
): Promise<void> => {
  const flights = req.body

  if (flights) {
    try {
      const flightCreated = (await FlightModel.create(flights)) as Document<
        Flight,
        {}
      >
      res.status(201).json(flightCreated)
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      })
    }
  }

  res.status(400).json({
    error: true,
    message: "Imposible to find flight param to save",
  })
}
