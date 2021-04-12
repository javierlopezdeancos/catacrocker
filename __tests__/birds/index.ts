import {
  createBirdHandler,
  getBirdsHandler,
} from '../../pages/api/birds'
import {
  createRequest,
  createResponse,
} from 'node-mocks-http'

import API from '../../routes'
import { BIRDS } from '../../routes/birds'
import { Bird } from '../../types/bird'
import BirdModel from '../../models/bird'
import birdsMock from '../../mocks/birds'

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
    });

    const response = createResponse();
    await getBirdsHandler(request, response)

    expect(response.statusCode).toBe(200)
  })

  test("should responds with birds in BBDD when GET to get birds", async () => {
    jest.spyOn(BirdModel, 'find').mockImplementationOnce((): Promise<Bird[]> => Promise.resolve(birdsMock))

    const request  = createRequest({
      method: 'GET',
      url: BIRDS_API_ROUTE,
    });

    const response = createResponse();
    await getBirdsHandler(request, response)
    const birds = response._getJSONData()

    expect(birds).toMatchObject(birdsMock)
  })

  test('should responds 200 when POST with correct params to create a bird', () => {
        jest.spyOn(BirdModel, 'find').mockImplementationOnce((): Promise<Bird[]> => Promise.resolve(birdsMock))

  })


  afterEach(() => {
    jest.restoreAllMocks()
  })
})
