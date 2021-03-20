export type Dates = {
  local: Date,
  utc: Date,
}

export type Impact = {
  id: string;
  airportId: string;
  birdId: string;
  flightId: string;
  dates: Dates;
  images?: string[];
}

export type Impacts = Impact[]
