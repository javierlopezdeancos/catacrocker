import type { NextApiRequest, NextApiResponse } from "next";
import { createBirdHandler, getBirdsHandler } from "../../controllers/birds";
import { Bird } from "../../types/bird";
import { Document } from "mongoose";
import { ResponseError } from "../../types/api";
import connectDB from "../../middleware/mongodb";
import { respondMethodNotAllowed } from "../../controllers";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<
    Document<Bird, {}>[] | Document<Bird, {}> | ResponseError
  >
) => {
  switch (req?.method) {
    case "GET":
      await getBirdsHandler(req, res);
      break;
    case "POST":
      await createBirdHandler(req, res);
      break;
    default:
      respondMethodNotAllowed(res);
      break;
  }
};

export default connectDB(handler);
