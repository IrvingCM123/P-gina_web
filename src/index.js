import config from "./Connection/config";
import cors from "cors";
import routes from "./Connection/Routes/routes";
import { env } from "process";

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

let port;

// settings
app.set("port", config.port || 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(morgan("dev")); // middlewares
app.use(express.urlencoded({ extended: false })); //Recibir datos desde formularios html
app.use(express.json()); //Usar JSON
app.use(express.static(path.join(__dirname, 'public')));// static files

app.use(routes);

app.listen(app.get('port'))

console.log("Servidor Ejecutandose");
console.log('Puerto-Server: ', app.get('port'))

