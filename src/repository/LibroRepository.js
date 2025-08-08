import {Todo,Uno,Agregar,TodoPerzonalizado} from './../database/mysql.js';

export class CategoriaRepository{
    
    #Tabla
    #ColumnaId
    constructor(){
        this.#Tabla = "libro"; 
        this.#ColumnaId = "id_libro"
    }
    
    async AgregarLibro(Data){
        try {
            await Agregar(this.#Tabla,Data); 
        } catch (error) {
            console.log("[Error en agregarLibro]");
        }
    }
}