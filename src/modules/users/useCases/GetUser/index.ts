import { mysqlUsersRepository } from "../CreateUser";
import GetUserController from "./GetUserController";

const getUserController = new GetUserController(
    mysqlUsersRepository
)

export { getUserController }