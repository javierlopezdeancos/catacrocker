import {
  createRequest,
  createResponse,
} from 'node-mocks-http'

import API from '../../../routes'
import { FLIGHTS } from '../../../routes/flights'
import { Flight } from '../../../types/flight'
import FlightModel from '../../../models/flight'
import flightsMock, { flight as flightMock } from '../../../mocks/flights'
import {
  getFlightsHandler,
  createFlightHandler,
  IMPOSIBLE_FIND_FLIGHT_TO_CREATE_IT_ERROR_MESSAGE,
} from '../../../controllers/flights'

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
    })

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

  test('should responds with flight created in BBDD when POST with correct params to create an flight', async () => {
    jest.spyOn(FlightModel, 'create').mockImplementationOnce((): Promise<Flight> => Promise.resolve(flightMock))

    const request = createRequest({
      method: 'POST',
      url: FLIGHTS_API_ROUTE,
      body: flightMock,
    })

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await createFlightHandler(request, response)

    request.send()

    response.on('end', function () {
      const birdCreated = response._getJSONData()
      expect(birdCreated).toMatchObject(flightMock)
    })
  })

  test('should responds with a 400 error when POST with no params to create a flight', async () => {
    jest.spyOn(FlightModel, 'create').mockImplementationOnce((): Promise<Flight> => Promise.resolve(flightMock))

    const request = createRequest({
      method: 'POST',
      url: FLIGHTS_API_ROUTE,
    })

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await createFlightHandler(request, response)

    request.send()

    response.on('end', function () {
      const error = response._getJSONData()

      expect(response.statusCode).toBe(400)

      expect(error).toMatchObject({
        error: true,
        message: IMPOSIBLE_FIND_FLIGHT_TO_CREATE_IT_ERROR_MESSAGE,
      })
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
