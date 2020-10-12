import { Router } from 'express'
import { v4 } from 'uuid'

const router = new Router()

const sendErrorResponse = (res, errorMessage) => {
  res
      .status(400)
      .json({
          error: errorMessage
      })
}

router.post('', (req, res) => {
  const payload = req.body
    if (typeof payload.name !== 'string') {
        sendErrorResponse(res, '"name" must be of type string')
        return
    }
    if (typeof payload.age !== 'number') {
        sendErrorResponse(res, '"age" must be of type number')
        return
    }
    if (payload.name.length <= 2) {
        sendErrorResponse(res, '"name" must be longer than 2 characters')
        return
    }
    if (payload.age <= 0) {
        sendErrorResponse(res, '"age" must be greater than 0')
    }

    const user = {
        id: v4(),
        name: payload.name,
        age: payload.age
    }

    res.status(201).json(user)
})

export const registerUserRoutes = app => {
  app.use('/users', router)
}
