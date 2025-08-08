import { LibroRequest } from "../dto/Request/LibroRequest.js";
import { LibroResponse } from "../dto/Response/LibroResponse.js";
import { libro } from "../model/libro.js";

export class LibroMapper{
    static toLibroResponse(entity){
        return new LibroResponse(
            entity.id_libro,
            entity.nombre_libro,
            entity.autor,
            entity.pagina,
            entity.stock,
            entity.nombre_categoria,
            entity.codigo
        );
    }

    static toLibroBarResponse(entity){
        return new LibroResponse(
            entity.id_libro,
            entity.nombre_libro,
            entity.autor,
            entity.nombre_categoria,
        );
    }

    static toLibroEntity(libroRequest){
        return new libro(
            null,
            libroRequest.nombre,
            libroRequest.autor,
            libroRequest.pagina,
            libroRequest.stock,
            libroRequest.id_categoria
        );
    }

    static toLibroRequest(Body){
        return new LibroRequest(
            Body.nombre,
            Body.autor,
            Body.pagina,
            Body.stock,
            Body.id_categoria,
        );
    }

}
