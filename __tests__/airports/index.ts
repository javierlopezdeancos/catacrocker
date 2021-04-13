import {
  createRequest,
  createResponse,
} from 'node-mocks-http'

import { AIRPORTS } from '../../routes/airports'
import API from '../../routes'
import { Airport } from '../../types/airport'
import AirportModel from '../../models/airport'
import airportsMock from '../../mocks/airports'
import { getAirportsHandler } from '../../controllers/airports'

const AIRPORTS_API_ROUTE = `${API}${AIRPORTS}`

describe(`${AIRPORTS_API_ROUTE}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  xtest("should responds 200 when GET", async () => {
    jest.spyOn(AirportModel, 'find').mockImplementationOnce((): Promise<Airport[]> => Promise.resolve(airportsMock))

    const request  = createRequest({
      method: 'GET',
      url: AIRPORTS_API_ROUTE,
  });

    const response = createResponse();
    await getAirportsHandler(request, response)

    expect(response.statusCode).toBe(200)
  })

  xtest("responds with birds in BBDD when GET", async () => {
    jest.spyOn(AirportModel, 'find').mockImplementationOnce((): Promise<Airport[]> => Promise.resolve(airportsMock))

    const request  = createRequest({
      method: 'GET',
      url: AIRPORTS_API_ROUTE,
    });

    const response = createResponse();
    await getAirportsHandler(request, response)
    const airports = response._getJSONData()

    expect(airports).toMatchObject(airportsMock)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
