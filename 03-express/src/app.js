import express from 'express'
import bodyParser from 'body-parser'
import { registerUserRoutes } from './routes/users'
import { registerPostsRoutes } from './routes/posts'

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

registerPostsRoutes(app)
registerUserRoutes(app)

export {
  app
}
