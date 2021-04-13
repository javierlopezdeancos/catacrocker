import {
  createRequest,
  createResponse,
} from 'node-mocks-http'

import API from '../../routes'
import { FLIGHTS } from '../../routes/flights'
import { Flight } from '../../types/flight'
import FlightModel from '../../models/flight'
import flightsMock from '../../mocks/flights'
import { getFlightsHandler } from '../../controllers/flights'

const FLIGHTS_API_ROUTE = `${API}${FLIGHTS}`

describe(`${FLIGHTS_API_ROUTE}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("should responds 200 when GET to get flights", async () => {
    jest.spyOn(FlightModel, 'find').mockImplementationOnce((): Promise<Flight[]> => Promise.resolve(flightsMock))

    const request  = createRequest({
      method: 'GET',
      url: FLIGHTS_API_ROUTE,
    })

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await getFlightsHandler(request, response)

    request.send()

    response.on('end', function () {
      expect(response.statusCode).toBe(200)
    })
  })

  test("should responds with flights in BBDD when GET to get flights", async () => {
    jest.spyOn(FlightModel, 'find').mockImplementationOnce((): Promise<Flight[]> => Promise.resolve(flightsMock))

    const request  = createRequest({
      method: 'GET',
      url: FLIGHTS_API_ROUTE,
    });

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await getFlightsHandler(request, response)

    request.send()

    response.on('end', function () {
      const flights = response._getJSONData()
      expect(flights).toMatchObject(flightsMock)
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
