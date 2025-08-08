import {v4 as uuid} from 'uuid';
import {parse as uuidParse} from 'uuid-parse';
export class libro{
    constructor(id_libro,nombre_libro,autor,pagina,stock,id_categoria){
        this.id_libro = id_libro;
        this.nombre_libro = nombre_libro;
        this.autor = autor;
        this.pagina = pagina;
        this.stock = stock;
        this.id_categoria = id_categoria;
        this.codigo = Buffer.from(uuidParse(uuid()));
    }
}