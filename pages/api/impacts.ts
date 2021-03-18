import type { NextApiRequest, NextApiResponse } from 'next'
import { Impacts } from '../types/impact'

const impacts = [
  {
    id: '1',
    airport: '',
    bird: '',
    flight: '',
    dates: {
      local: "2021-03-18T09:11:24.792Z",
      UTC: "1899-12-31T00:00:00.000Z",
    },
  },
  {
    id: '2',
    airport: '',
    bird: '',
    flight: '',
    dates: {
      local: "2021-03-18T09:11:24.792Z",
      UTC: "1899-12-31T00:00:00.000Z",
    },
  },
  {
    id: '3',
    airport: '',
    bird: '',
    flight: '',
    dates: {
      local: "2021-03-18T09:11:24.792Z",
      UTC: "1899-12-31T00:00:00.000Z",
    },
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Impacts>) {
  res.status(200).json(impacts)
}
