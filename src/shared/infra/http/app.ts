import express from 'express';
import cors from 'cors';
import Routes from './routes/router';

class App {
    public express: express.Application

    public appRoutes: Routes = new Routes()

    public constructor() {
        this.express = express();
        this.middlewares();
        this.appRoutes.routes(this.express);
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {

    }
}

export default new App().express;
