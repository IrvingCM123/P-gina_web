import express from  'express';
import config from './config';
import cors from "cors";
import routes from "./Routes/routes";
import morgan from "morgan";

const app = express()
let port;
app.set('port', config.port)


app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //Recibir datos desde formularios html
app.use(express.json()); //Usar JSON

// Routes
app.use(routes);

export default app;
