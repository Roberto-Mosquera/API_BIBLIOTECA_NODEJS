import { LibroMapper } from "../mapper/LibroMapper.js";
import { CategoriaRepository } from "../repository/LibroRepository.js";
export class LibroService{
    
    #repository
    constructor(){
        this.#repository = new CategoriaRepository();
    }

    async AgregarLibro(Body){
        try {

            const libroRequest = LibroMapper.toLibroEntity(Body);

            await this.#repository.AgregarLibro(libroRequest);
        } catch (error) {
            console.log("[Error en AgregarLibro]");
        }
    }
}