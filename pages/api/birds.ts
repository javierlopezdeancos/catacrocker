import type { NextApiRequest, NextApiResponse } from 'next'
import { Birds } from '../types/bird'

const birds = [
  {
    id: '1',
    species: 'Pigeon',
  },
  {
    id: '2',
    species: 'Eagle',
  },
  {
    id: '3',
    species: 'Pigeon',
  },
  {
    id: '4',
    species: 'Gull',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Birds>) {
  res.status(200).json(birds)
}
