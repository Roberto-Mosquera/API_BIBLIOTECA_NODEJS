import express from 'express';

import { success,error } from "./../../utils/response.js";

import { CategoriaController } from "./../../controller/CategoriaController.js";

const Router = express.Router();

const Controlador = new CategoriaController();

const EndPointListaCategoria = async (req,res) => {
    try {
        const ListaCategorias = await Controlador.TraerListaCategoria();
        success(
            req,
            res,
            "La lista de categorias",
            200,
            ListaCategorias
        );
    } catch (err) {
        error(req,res,"Error en el EndPointListaCategoria",404);
    }
}

const EndPointListaCategoriaPorNombre = async (req,res) => {
    try {
        const ListaCategorias = await Controlador.TraerListaPorNombreCategoria();
        success(
            req,
            res,
            "La lista de categorias",
            200,
            ListaCategorias
        );
    } catch (err) {
        error(req,res,"Error en el EndPointListaCategoria",404);
    }
}

const EndPointAgregarCategoria = async (req,res) => {
        try {
        const categoriaNueva = await Controlador.AgregarCategoria(req.body);
        success(
            req,
            res,
            "Se agrego una nueva categoria",
            200,
            categoriaNueva
        );
    } catch (error) {
        error(req,res,"Error en el EndPointAgregarCategoria",404);
    }
}
Router.get("/ListCategoria",EndPointListaCategoria);
Router.get("/ListCategoria/Por/Nombre",EndPointListaCategoriaPorNombre);
Router.post("/AgregarCategoruia",EndPointAgregarCategoria);
export default Router;