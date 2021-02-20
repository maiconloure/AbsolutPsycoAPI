import MailtrapMailProvider from "../../providers/implementations/MailtrapProvider";
import MySQLUserRepository from "../../repositories/implementations/MySQLUserRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

const mysqlUsersRepository = new MySQLUserRepository();
const mailtrapProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    mysqlUsersRepository,
    mailtrapProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController, mysqlUsersRepository }