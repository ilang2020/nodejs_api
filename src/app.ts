import "reflect-metadata";
import { InversifyExpressServer} from "inversify-express-utils";
import * as bodyParser from 'body-parser';
import container from './inversify.config';


import './controllers/post.controllers';
import './controllers/cost.controller';

let server = new InversifyExpressServer(container, null, { rootPath: "/api" });

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
})

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000, thisCallback);

console.log('Server started on port 3000 :)');

function thisCallback(): void {
    console.log('in thisCallback');
}

////////////////////////////////////////////////////////////////////////////////////////////
// import * as dotenv from "dotenv";
// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
//
// dotenv.config();
//
//
// if (!process.env.PORT) {
//     process.exit(1);
// }
//
// const PORT: number = parseInt(process.env.PORT as string, 10);
//
// const app = express();
//
//
// app.use(helmet());
// app.use(cors());
// app.use(express.json());
//
//
// const server = app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
// });
