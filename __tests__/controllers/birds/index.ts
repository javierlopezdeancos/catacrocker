import birdsMock, { bird as birdMock } from '../../../mocks/birds'
import { createBirdHandler, getBirdsHandler } from '../../../controllers/birds'
import {
  createRequest,
  createResponse,
} from 'node-mocks-http'

import API from '../../../routes'
import { BIRDS } from '../../../routes/birds'
import { Bird } from '../../../types/bird'
import BirdModel from '../../../models/bird'

const BIRDS_API_ROUTE = `${API}${BIRDS}`

describe(`${BIRDS_API_ROUTE}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("should responds 200 when GET to get birds", async () => {
    jest.spyOn(BirdModel, 'find').mockImplementationOnce((): Promise<Bird[]> => Promise.resolve(birdsMock))

    const request  = createRequest({
      method: 'GET',
      url: BIRDS_API_ROUTE,
    })

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await getBirdsHandler(request, response)

    request.send()

    response.on('end', function () {
      expect(response.statusCode).toBe(200)
    })
  })

  test("should responds with birds in BBDD when GET to get birds", async () => {
    jest.spyOn(BirdModel, 'find').mockImplementationOnce((): Promise<Bird[]> => Promise.resolve(birdsMock))

    const request  = createRequest({
      method: 'GET',
      url: BIRDS_API_ROUTE,
    })

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await getBirdsHandler(request, response)

    request.send()

    response.on('end', function () {
      const birds = response._getJSONData()
      expect(birds).toMatchObject(birdsMock)
    });
  })

  test('should responds 201 when POST with correct params to create a bird', async () => {
    jest.spyOn(BirdModel, 'create').mockImplementationOnce((): Promise<Bird> => Promise.resolve(birdMock))

    const request = createRequest({
      method: 'POST',
      url: BIRDS_API_ROUTE,
      body: birdMock,
    })

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await createBirdHandler(request, response)

    request.send()

    response.on('end', function () {
      expect(response.statusCode).toBe(201)
    });
  })

  test('should responds with bird created in BBDD when POST with correct params to create a bird', async () => {
    jest.spyOn(BirdModel, 'create').mockImplementationOnce((): Promise<Bird> => Promise.resolve(birdMock))

    const request = createRequest({
      method: 'POST',
      url: BIRDS_API_ROUTE,
      body: birdMock,
    })

    const response = createResponse({
      eventEmitter: require('events').EventEmitter
    })

    await createBirdHandler(request, response)

    request.send()

    response.on('end', function () {
      const birdCreated = response._getJSONData()
      expect(birdCreated).toMatchObject(birdMock)
    });
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
