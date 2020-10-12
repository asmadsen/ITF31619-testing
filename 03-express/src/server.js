import displayRoutes from 'express-routemap'
import { app } from "./app"

const port = process.env.PORT ?? 8080

app.listen(port, () => {
  console.log(`Server is runnin on http://localhost:${port}`)
  if (process.env.NODE_ENV !== 'production') {
    displayRoutes(app)
  }
})
