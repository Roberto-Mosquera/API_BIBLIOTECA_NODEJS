import express from 'express';
import categoria from './RouterCategoria/CategoriaRouter.js';

const Router = express.Router();

Router.use('/api/categoria',categoria);

export default Router;