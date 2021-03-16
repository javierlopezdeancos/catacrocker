import type { NextApiRequest, NextApiResponse } from 'next'
import { Birds } from '../types/bird'

const birds = [{ id: '1' }, { id: '2' }, { id: '3' }]

export default function handler(req: NextApiRequest, res: NextApiResponse<Birds>) {
  res.status(200).json(birds)
}
