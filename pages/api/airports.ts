import type { NextApiRequest, NextApiResponse } from "next"
import {
  createAirportHandler,
  getAirportsHandler,
} from "../../controllers/airports"

import { Airport } from "../../types/airport"
import { Document } from "mongoose"
import { ResponseError } from "../../types/api"
import connectDB from "../../middleware/mongodb"
import { respondMethodNotAllowed } from "../../controllers"

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<
    Document<Airport, {}>[] | Document<Airport, {}> | ResponseError
  >
) => {
  switch (req?.method) {
    case "GET":
      await getAirportsHandler(req, res)
      break
    case "POST":
      await createAirportHandler(req, res)
      break
    default:
      respondMethodNotAllowed(res)
      break
  }
}

export default connectDB(handler)
