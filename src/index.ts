import express from 'express';
import { config } from 'dotenv';
import { GetUsersController } from './controllers/get-users/get-users';
import { MongoGetUserRepository } from './repositories/get-uers/mongo-get-users';
import { MongoClient } from './db/mongo';

const main = async () => {
  config();

  const app = express();
  await MongoClient.connect();


  app.get("/users", async (req, res) => {
    const mongoGetUserRepository = new MongoGetUserRepository();
    const getUsersController = new GetUsersController(mongoGetUserRepository);

    const { body, statusCode } = await getUsersController.handler();

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

main();
