import {Todo,Uno,Agregar,Eliminar,TodoPerzonalizado} from './../database/mysql.js';

export class CategoriaRepository{
    
    #Tabla
    #ColumnaId
    constructor(){
        this.#Tabla = "categoria"; 
        this.#ColumnaId = "id_categoria"
    }
    
    async ListaCategoria(){
        try {
            return await Todo(this.#Tabla);
        } catch (error) {
            console.log(error);
        }
    }

    async ListaDeNombreCategoria(){
        try {
            return await TodoPerzonalizado(this.#Tabla,"nombre_categoria");
        } catch (error) {
            console.log(error);
        }
    }

    async AgregarCategoria(Data){
        try {
            return await Agregar(this.#Tabla,Data);
        } catch (error) {
            console.log(error);
        }
    }

    async BuscarCategoria(id){
        try {
            return await Uno(this.#Tabla,this.#ColumnaId,id);
        } catch (error) {
            console.log(error);
        }
    }

    async BuscarCategoriaPorNombre(id){
        try {
            return await Uno(this.#Tabla,"nombre_categoria",id);
        } catch (error) {
            console.log(error);
        }
    }
}