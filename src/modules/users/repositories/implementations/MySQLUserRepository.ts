import User from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export default class MySQLUserRepository implements IUsersRepository {
    private users: User[] = [];

    getUsers(): User[] {
        return this.users;
    }

    getUser(email: string): User {
        const user = this.users[0]
        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}