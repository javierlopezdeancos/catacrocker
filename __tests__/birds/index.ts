import { createMocks } from 'node-mocks-http'

import { getBirdsHandler } from '../../pages/api/birds'
import BirdModel from '../../models/bird'
import birdsMock from '../../mocks/birds'
import { Bird } from '../../types/bird'

describe("get birds", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("responds 200 to authed GET", async () => {
    jest.spyOn(BirdModel, 'find').mockImplementationOnce((): Promise<Bird[]> => Promise.resolve(birdsMock))

    const { req, res } = createMocks({
      method: 'GET',
    });

    await getBirdsHandler(req, res)

    expect(res.statusCode).toBe(200)

    // const client = JSON.parse(JSON.stringify(clientResult));
    // expect(client).toMatchObject(clientMock);
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
