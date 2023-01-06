import { createRequest, createResponse } from "node-mocks-http"

import { AIRPORTS } from "../../../routes/airports"
import API from "../../../routes"
import { Airport } from "../../../types/airport"
import AirportModel from "../../../models/airport"
import airportsMock, { airport as airportMock } from "../../../mocks/airports"
import {
  getAirportsHandler,
  createAirportHandler,
  IMPOSIBLE_FIND_AIRPORT_TO_CREATE_IT_ERROR_MESSAGE,
} from "../../../controllers/airports"

const AIRPORTS_API_ROUTE = `${API}${AIRPORTS}`

describe(`${AIRPORTS_API_ROUTE}`, () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("should responds 200 when GET to get airports", async () => {
    jest
      .spyOn(AirportModel, "find")
      .mockImplementationOnce(
        (): Promise<Airport[]> => Promise.resolve(airportsMock)
      )

    const request = createRequest({
      method: "GET",
      url: AIRPORTS_API_ROUTE,
    })

    const response = createResponse({
      eventEmitter: require("events").EventEmitter,
    })

    await getAirportsHandler(request, response)

    request.send()

    response.on("end", function () {
      expect(response.statusCode).toBe(200)
    })
  })

  test("should responds with airports in BBDD when GET to get airports", async () => {
    jest
      .spyOn(AirportModel, "find")
      .mockImplementationOnce(
        (): Promise<Airport[]> => Promise.resolve(airportsMock)
      )

    const request = createRequest({
      method: "GET",
      url: AIRPORTS_API_ROUTE,
    })

    const response = createResponse({
      eventEmitter: require("events").EventEmitter,
    })

    await getAirportsHandler(request, response)

    request.send()

    response.on("end", function () {
      const airports = response._getJSONData()
      expect(airports).toMatchObject(airportsMock)
    })
  })

  test("should responds 201 when POST with correct params to create a airport", async () => {
    jest
      .spyOn(AirportModel, "create")
      .mockImplementationOnce(
        (): Promise<Airport> => Promise.resolve(airportMock)
      )

    const request = createRequest({
      method: "POST",
      url: AIRPORTS_API_ROUTE,
      body: airportMock,
    })

    const response = createResponse({
      eventEmitter: require("events").EventEmitter,
    })

    await createAirportHandler(request, response)

    request.send()

    response.on("end", function () {
      expect(response.statusCode).toBe(201)
    })
  })

  test("should responds with airport created in BBDD when POST with correct params to create an airport", async () => {
    jest
      .spyOn(AirportModel, "create")
      .mockImplementationOnce(
        (): Promise<Airport> => Promise.resolve(airportMock)
      )

    const request = createRequest({
      method: "POST",
      url: AIRPORTS_API_ROUTE,
      body: airportMock,
    })

    const response = createResponse({
      eventEmitter: require("events").EventEmitter,
    })

    await createAirportHandler(request, response)

    request.send()

    response.on("end", function () {
      const birdCreated = response._getJSONData()
      expect(birdCreated).toMatchObject(airportMock)
    })
  })

  test("should responds with a 400 error when POST with no params to create an airport", async () => {
    jest
      .spyOn(AirportModel, "create")
      .mockImplementationOnce(
        (): Promise<Airport> => Promise.resolve(airportMock)
      )

    const request = createRequest({
      method: "POST",
      url: AIRPORTS_API_ROUTE,
    })

    const response = createResponse({
      eventEmitter: require("events").EventEmitter,
    })

    await createAirportHandler(request, response)

    request.send()

    response.on("end", function () {
      const error = response._getJSONData()

      expect(response.statusCode).toBe(400)

      expect(error).toMatchObject({
        error: true,
        message: IMPOSIBLE_FIND_AIRPORT_TO_CREATE_IT_ERROR_MESSAGE,
      })
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
