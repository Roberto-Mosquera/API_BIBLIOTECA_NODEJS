import express from 'express';
import { success,error, successVoid } from "./../../utils/response.js";
import { CategoriaService } from "../../Service/CategoriaService.js";
import { CategoriaMapper } from '../../mapper/CategoriaMapper.js';

const Router = express.Router();

const Service = new CategoriaService();

const EndPointListaCategoria = async (req,res) => {
    try {
        const ListaCategorias = await Service.TraerListaCategoria();
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
        const ListaCategorias = await Service.TraerListaPorNombreCategoria();
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
        const categoriaPost = CategoriaMapper.toCategoriaNombreRequest(req.body);
        await Service.AgregarCategoria(categoriaPost);
        successVoid(
            req,
            res,
            "Se agrego correctamente una categoria",
            200
        );
    } catch (err) {
        error(req,res,"Error en el EndPointAgregarCategoria",404);
    }
}

Router.get("/ListCategoria",EndPointListaCategoria);
Router.get("/ListCategoria/Por/Nombre",EndPointListaCategoriaPorNombre);
Router.post("/AgregarCategoria",EndPointAgregarCategoria);
export default Router;