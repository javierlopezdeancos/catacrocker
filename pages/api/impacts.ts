import type { NextApiRequest, NextApiResponse } from "next"

import { Document } from "mongoose"
import { Impact } from "../../types/impact"
import connectDB from "../../middleware/mongodb"
import impactModel from "../../models/impact"

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Impact, {}>[]>
) => {
  // Get all impacts
  if (req.method === "GET") {
    const impacts = (await impactModel.find({})) as Document<Impact, {}>[]

    if (impacts) {
      res.status(200).json(impacts)
    }
  }
}

export default connectDB(handler)
