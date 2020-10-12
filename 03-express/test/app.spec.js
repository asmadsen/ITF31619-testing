import supertest from 'supertest'
import { app } from '../src/app'

it('should return "Hello World!" from index route', async () => {
  await supertest(app)
    .get('/')
    .expect(200, 'Hello World!')
})
