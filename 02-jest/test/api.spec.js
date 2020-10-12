import Axios from "axios"
import { getPosts } from "../src/api"

it('should fetch posts with count and statuscode', async () => {
  jest.spyOn(Axios, 'get')
  const response = await getPosts()
  expect(response).toEqual(expect.objectContaining({
      posts: expect.any(Array),
      count: expect.any(Number),
      status: 'OK'
  }))
})

it('should have same amout of posts as count property says', async () => {
  const response = await getPosts()
  expect(response.posts).toHaveLength(response.count)
})


it('should return status NOT FOUND when posts is empty - mock', async () => {
  const fakeAxios = {
    get: jest.fn()
  }

  fakeAxios.get.mockResolvedValue({
    statusText: 'NOT FOUND',
    data: []
  })

  const response = await getPosts(fakeAxios)
  expect(response.count).toEqual(0)
  expect(response.posts).toHaveLength(0)
  expect(response.status).toEqual("NOT FOUND")

  expect(fakeAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')
})

beforeEach(() => {
  jest.clearAllMocks()
})

it('should return status NOT FOUND when posts is empty - spy', async () => {
  const axiosGetSpy = jest.spyOn(Axios, 'get')

  axiosGetSpy.mockResolvedValue({
    statusText: 'NOT FOUND',
    data: []
  })

  expect(axiosGetSpy).not.toHaveBeenCalled()

  const response = await getPosts()
  expect(response.count).toEqual(0)
  expect(response.posts).toHaveLength(0)
  expect(response.status).toEqual("NOT FOUND")

  expect(axiosGetSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')
})
