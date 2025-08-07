import { CategoriaNombreRequest } from "../dto/Request/CategoriaNombreRequest.js";
import { CategoriaNombreResponse } from "../dto/Response/CategoriaNombreResponse.js";
import { Categoria } from "../model/Categoria.js";
export class CategoriaMapper{

    static toListaCategoria(ListaEntity){
        return ListaEntity.map( (entity) => {   
            return new CategoriaNombreResponse(
                entity.id_categoria,
                entity.nombre_categoria);
            });
    }

    static toListaCategoriaNombre(ListaEntity){
        return ListaEntity.map((entity)=>{
            return entity.nombre_categoria;
        });
    }

    static toCategoriaEntity(BodyRequest){
        return new Categoria(null,BodyRequest.nombre);
    }

    static toCategoriaNombreRequest(BodyRequest){
        return new CategoriaNombreRequest(BodyRequest.nombre);
    }
}