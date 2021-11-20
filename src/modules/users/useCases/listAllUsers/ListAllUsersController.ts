import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = "teste"; // somente para teste
    const userList = this.listAllUsersUseCase.execute({ user_id });

    return response.json(userList);
  }
}

export { ListAllUsersController };
