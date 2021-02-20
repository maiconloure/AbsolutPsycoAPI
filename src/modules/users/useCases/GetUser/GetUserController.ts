import { Request, Response } from "express";
import User from "src/modules/users/entities/User";
import { IUsersRepository } from '../../repositories/IUsersRepository';


export default class GetUserController {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    index(req: Request, res: Response): Response<User[]> {
        const users = this.usersRepository.getUsers();
        return res.json(users)
    }
}