import { Request, Response, Application } from 'express'
import { getUserController } from '../../../../modules/users/useCases/GetUser';
import { createUserController } from '../../../../modules/users/useCases/CreateUser'

export default class Routes {
    public routes(app: Application): void {
        app.route('/users').get((req, res) => getUserController.index(req, res));

        app.route('/users').post((req, res) => createUserController.handle(req, res));
    }
}