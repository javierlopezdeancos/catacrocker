import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { Bird } from "../../types/bird";
import BirdModel from "../../models/bird";
import { Document } from "mongoose";
import { ResponseError } from "../../types/api";

export const getBirdsHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Bird, {}>[] | ResponseError>
): Promise<void> => {
  try {
    const birds = (await BirdModel.find({})) as Document<Bird, {}>[];

    if (birds) {
      res.status(200).json(birds);
    }
  } catch (error) {
    res.status(403).json({
      error: true,
      message: error.message,
    });
  }
};

export const getBirdHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Bird, {}> | ResponseError>
): Promise<void> => {
  try {
    const bird = (await BirdModel.findById(req.query.id)) as Document<Bird, {}>;

    if (bird) {
      res.status(200).json(bird);
    }
  } catch (error) {
    res.status(403).json({
      error: true,
      message: error.message,
    });
  }
};

export const IMPOSIBLE_FIND_BIRD_TO_CREATE_IT_ERROR_MESSAGE =
  "Imposible to find bird param to save";

export const createBirdHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Document<Bird, {}> | ResponseError>
): Promise<void> => {
  const bird = req.body;

  if (bird) {
    try {
      const birdCreated = (await BirdModel.create(bird)) as Document<Bird, {}>;

      if (birdCreated) {
        res.status(201).json(birdCreated);
      }
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      });
    }
  }

  res.status(400).json({
    error: true,
    message: IMPOSIBLE_FIND_BIRD_TO_CREATE_IT_ERROR_MESSAGE,
  });
};
