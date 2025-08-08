import express from "express";

import { LibroMapper } from "../../mapper/LibroMapper.js";

import { LibroService } from "../../Service/LibroService.js";
import { success } from "../../utils/response.js";

const Router = express.Router();

const Service = new LibroService();

const EndPointAgregarLibro = async (req,res) => {
    try {
        const libroRequests = LibroMapper.toLibroRequest(req.body);
        await Service.AgregarLibro(libroRequests);
        success(
            req,
            res,
            'Se creo correctamente el libro'
        )
    } catch (error) {
        console.log("[Algo salio mal al guardar el Libro]");
    }
}

Router.post("/AgregarLibro",EndPointAgregarLibro);

export default Router;