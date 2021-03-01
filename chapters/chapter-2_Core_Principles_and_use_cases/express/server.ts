import "reflect-metadata";
import { interfaces, InversifyExpressServer } from "inversify-express-utils";

import app from "./app";
import container from "./container";

let server = new InversifyExpressServer(container, null, null, app);
server.build().listen();