import type { NextApiRequest, NextApiResponse } from 'next'
import { Flights } from '../types/flight'

const flights = [
  {
    id: '1',
    registration: '1-JVN-3456',
    number: '1-3282347927483',
  },
  {
    id: '2',
    registration: '2-BZN-2886',
    number: '2-3282347927483',
  },
  {
    id: '3',
    registration: '3-ZVN-0871',
    number: '3-3282347927483',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Flights>) {
  res.status(200).json(flights)
}
