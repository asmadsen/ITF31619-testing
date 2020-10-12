import supertest from 'supertest'
import { app } from '../../src/app'
import { resetPosts } from '../../src/routes/posts'

const createPost = title => ({ title, body: `${title} body` })

beforeEach(() => {
  resetPosts()
})


it('should be empty', async () => {
  const response = await supertest(app)
      .get('/posts')

  expect(response.body)
      .toBeInstanceOf(Array)
  expect(response.body)
      .toHaveLength(0)
})


it('should return all created posts', async () => {
  await supertest(app).post('/posts')
      .send(createPost('Post1'))
      .expect(201, {...createPost('Post1'), id: 1})

  await supertest(app).post('/posts')
      .send(createPost('Post2'))
      .expect(201, {...createPost('Post2'), id: 2})

  await supertest(app).post('/posts')
      .send(createPost('Post3'))
      .expect(201, {...createPost('Post3'), id: 3})

  await supertest(app).get('/posts')
      .expect(200, [
          {...createPost('Post1'), id: 1},
          {...createPost('Post2'), id: 2},
          {...createPost('Post3'), id: 3},
      ])
})

it('should return post after created', async () => {
  await supertest(app).post('/posts')
      .send(createPost('Post1'))
      .expect(201, {...createPost('Post1'), id: 1})
  await supertest(app).get('/posts/1')
      .expect(200, {...createPost('Post1'), id: 1})
})


it('should return 404 after deleted', async () => {
  await supertest(app).get('/posts').expect(200, [])

  await supertest(app).post('/posts')
      .send(createPost('Post1'))
      .expect(201, {...createPost('Post1'), id: 1})

  await supertest(app).get('/posts/1')
      .expect(200, {...createPost('Post1'), id: 1})

  await supertest(app).delete('/posts/1')
      .expect(202)

  await supertest(app).delete('/posts/1')
      .expect(404)

  await supertest(app).get('/posts/1')
      .expect(404)

  await supertest(app).get('/posts').expect(200, [])
})


