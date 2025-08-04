import express from 'express';
import morgan from 'morgan';
import config from "./config/setting.global.js";

const app = express();

//Configuraciona al middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Asignacion de puerto a variablde
app.set('PORT',config.app.port);



export default app;