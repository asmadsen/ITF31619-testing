import supertest from "supertest"
import { validate } from "uuid"
import { app } from "../../src/app"

it('should return created user object with valid uuid', async () => {
  const payload = {
    name: 'Ola Nordmann',
    age: 206
  }

  const response = await supertest(app)
    .post('/users')
    .send(payload)
    .expect(201)

  const isValidUUID = validate(response.body.id)

  expect(isValidUUID).toEqual(true)
  expect(response.body.name).toEqual(payload.name)
  expect(response.body.age).toEqual(payload.age)
})

it('should return error if name is invalid', async () => {
  await supertest(app).post('/users').send({ age: 206}).expect(400, { error: '"name" must be of type string' })

  await supertest(app).post('/users').send({ name: null, age: 206}).expect(400, { error: '"name" must be of type string' })

  await supertest(app).post('/users').send({ name: 'åå', age: 206}).expect(400, { error: '"name" must be longer than 2 characters' })
})


it('should return error if age is invalid', async () => {
  await supertest(app).post('/users').send({ name: 'Ola' }).expect(400, { error: '"age" must be of type number' })

  await supertest(app).post('/users').send({ name: 'Ola', age: null }).expect(400, { error: '"age" must be of type number' })

  await supertest(app).post('/users').send({ name: 'Ola', age: -13 }).expect(400, { error: '"age" must be greater than 0' })

  await supertest(app).post('/users').send({ name: 'Ola', age: 0 }).expect(400, { error: '"age" must be greater than 0' })
})
