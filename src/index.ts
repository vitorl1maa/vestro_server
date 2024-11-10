import express from 'express'
import { config } from 'dotenv'
import { GetUsersController } from './controllers/get-users/get-users'
import { MongoGetUserRepository } from './repositories/get-uers/mongo-get-users'

config()
const app = express()

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`listen on port ${port}`),)

app.get("/users", async (req, res) => {
  const mongoGetUserRepository = new MongoGetUserRepository
  const getUsersController = new GetUsersController(mongoGetUserRepository)

  const { body, statusCode } = await getUsersController.handler()

  res.send(body).status(statusCode)
})