import { CategoriaRepository } from "../repository/CategoriaRepository.js";
import { CategoriaMapper } from "../mapper/CategoriaMapper.js"; 

export class CategoriaService{
    
    #Repository
    constructor(){
        this.#Repository = new CategoriaRepository();
    }

    async TraerListaCategoria(){
        try {
            const entityList = await this.#Repository.ListaCategoria(); 
            return await CategoriaMapper.toListaCategoria(entityList);
        } catch (error) {
            console.log("[Error en TraerListaCategoria]:",error);
        }
    }

    async TraerListaPorNombreCategoria(){
        try {

            const entityList = await this.#Repository.ListaDeNombreCategoria();
            return await CategoriaMapper.toListaCategoriaNombre(entityList);

        } catch (error) {
            console.log("[Error en TraerListaPorNombreCategoria]:",error);
        }
    }

    async AgregarCategoria(categoria){
        try {
            const entityCategoria = CategoriaMapper.toCategoriaEntity(categoria);
            return await this.#Repository.AgregarCategoria(entityCategoria);
        } catch (error) {
            console.log("[Error en TraerListaCategoria]:",error);
        }
    }

}