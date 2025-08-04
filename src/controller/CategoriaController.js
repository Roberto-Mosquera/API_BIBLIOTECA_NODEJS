import { CategoriaRepository } from "./../repository/CategoriaRepository.js";

export class CategoriaController{
    
    #Repository
    constructor(){
        this.#Repository = new CategoriaRepository();
    }

    async TraerListaCategoria(){
        try {
            return await this.#Repository.ListaCategoria();
        } catch (error) {
            console.log("[Error en TraerListaCategoria]:",error);
        }
    }

    async TraerListaPorNombreCategoria(){
        try {
            return await this.#Repository.ListaDeNombreCategoria();
        } catch (error) {
            console.log("[Error en TraerListaPorNombreCategoria]:",error);
        }
    }

    async AgregarCategoria(body){
        try {
            return await this.#Repository.AgregarCategoria(body);
        } catch (error) {
            console.log("[Error en TraerListaCategoria]:",error);
        }
    }

}