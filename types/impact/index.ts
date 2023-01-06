import { Flight } from "../flight"
import { Bird } from "../bird"
import { Airport } from "../airport"

export type Dates = {
  local: Date
  utc: Date
}

export type Impact = {
  id: string
  airportId: Airport
  bird: Bird
  flight: Flight
  dates: Dates
  images?: string[]
}

export type Impacts = Impact[]
