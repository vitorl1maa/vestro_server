import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUserRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [{
      firstName: "Jonh",
      lastName: "Due",
      age: 25,
      email: "jonh@teste.com",
      password: "123"
    }]
  }

}