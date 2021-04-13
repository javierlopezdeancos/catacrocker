import {
  createRequest,
  createResponse,
} from 'node-mocks-http'

import API from '../../routes'
import { FLIGHTS } from '../../routes/flights'
import { Flight } from '../../types/flight'
import FlightModel from '../../models/flight'
import flightsMock from '../../mocks/flights'
import { getAirportsHandler } from '../../controllers/airports'

const FLIGHTS_API_ROUTE = `${API}${FLIGHTS}`

describe(`${FLIGHTS_API_ROUTE}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  xtest("should responds 200 when GET", async () => {
    jest.spyOn(FlightModel, 'find').mockImplementationOnce((): Promise<Flight[]> => Promise.resolve(flightsMock))

    const request  = createRequest({
      method: 'GET',
      url: FLIGHTS_API_ROUTE,
  });

    const response = createResponse();
    await getAirportsHandler(request, response)

    expect(response.statusCode).toBe(200)
  })

  xtest("responds with birds in BBDD when GET", async () => {
    jest.spyOn(FlightModel, 'find').mockImplementationOnce((): Promise<Flight[]> => Promise.resolve(flightsMock))

    const request  = createRequest({
      method: 'GET',
      url: FLIGHTS_API_ROUTE,
  });

    const response = createResponse();
    await getAirportsHandler(request, response)
    const flights = response._getJSONData()

    expect(flights).toMatchObject(flightsMock)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
