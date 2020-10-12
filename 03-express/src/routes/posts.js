import { Router } from 'express'

const router = new Router()

const posts = new Map()

router.get('', (req, res) => {
  res.json([...posts.values()].filter(post => post))
})

router.post('', (req, res) => {
  const payload = req.body

  const id = posts.size + 1
  const post = {
      id,
      title: payload.title,
      body: payload.body
  }
  posts.set(id, post)

  res.status(201).json(post)
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params['id'])

  const post = posts.get(id)
  if (post) {
      res.json(post)
  } else {
      res.sendStatus(404)
  }
})

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params['id'])

  const post = posts.get(id)
  if (post) {
      posts.set(id, null)
      res.sendStatus(202)
  } else {
      res.sendStatus(404)
  }
})

export const resetPosts = () => {
  posts.clear()
}

export const registerPostsRoutes = app => {
  app.use('/posts', router)
}
