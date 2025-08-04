import express from 'express';
import morgan from 'morgan';
import config from "./config/setting.global.js";
import routes from "./routers/routers.controllers.js";
const app = express();

//Configuraciona al middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Asignacion de puerto a variablde
app.set('PORT',config.app.port);

// Usa el controladore de rutas
app.use(routes);


export default app;