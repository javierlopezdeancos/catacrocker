export type Airport = {
  id: string,
  name: string,
  iata: string,
  country?: string,
  region?: string,
  images?: string[],
}

export type Airports = Airport[]
