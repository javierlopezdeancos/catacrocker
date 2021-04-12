export type Flight = {
  _id: string;
  registration: string;
  number: string;
  airplane?: string;
}

export type Flights = Flight[]
