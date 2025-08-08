import express from 'express';
import categoria from './RouterCategoria/CategoriaRouter.js';
import libro from "./RouterLibro/LibroRouter.js";

const Router = express.Router();

Router.use('/api/categoria',categoria);
Router.use('/api/libro',libro);


export default Router;