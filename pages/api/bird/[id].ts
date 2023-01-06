import type { NextApiRequest, NextApiResponse } from "next"
import { respondMethodNotAllowed } from "../../../controllers"
import { getBirdHandler } from "../../../controllers/birds"
import connectDB from "../../../middleware/mongodb"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case "GET":
      await getBirdHandler(req, res)
      break
    default:
      respondMethodNotAllowed(res)
      break
  }
}

export default connectDB(handler)
