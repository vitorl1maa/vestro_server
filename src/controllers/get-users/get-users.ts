import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) { }

  async handler() {
    try {
      //validar req
      // direciona para o repository
      const users = await this.getUsersRepository.getUsers()

      return {
        statusCode: 200,
        body: users,
      }
    } catch (error) {
      console.error("Error in GetUsersController:", error);
      return {
        statusCode: 500,
        body: "Something went wrong."
      }
    }
  }
}