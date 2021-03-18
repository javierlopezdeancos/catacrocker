export type Dates = {
  local: string,
  UTC: string,
}

export type Impact = {
  id: string;
  airport: string;
  bird: string;
  flight: string;
  dates: Dates;
  images?: string[];
}

export type Impacts = Impact[]
