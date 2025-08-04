import mysql from "mysql2/promise";

import config from "./../config/setting.global.js";

const db = {
    user : config.mysql.user,
    password : config.mysql.password,
    host : config.mysql.localhost, 
    database : config.mysql.database
}

let conexion;

const mysqlConxion = async () => {

    try {
        
        conexion = await mysql.createConnection(db);

        console.log("Conxion a mysql establecida");

        conexion.on('error', error => {
            console.log("[ DB Error] ",error);
            if(error.code === "PROTOCOL_CONNECTION_LOST"){
                mysqlConxion();
            }else{
                throw error;
            }
        });

    } catch (error) {
        console.log("[ DB Error ] ",error);
        setInterval(mysqlConxion,2000)
    }

}

mysqlConxion();

export const Todo = async (Tabla) => {
    try {
        const [result] = await conexion.query(`SELECT * FROM ${Tabla}`);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const TodoPerzonalizado = async (Tabla,Datos='*') => {
    try {
        const [result] = await conexion.query(`SELECT ${Datos} FROM ${Tabla}`);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const Uno = async (Tabla,columnaId,id) => {
    try {
        const [result] = await conexion.query(`SELECT * FROM ${Tabla} WHERE ${columnaId} = ?`,[id]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

export const Agregar = async (Tabla,data) => {
    try {
        const [result] = await conexion.query(`INSERT INTO ${Tabla} SET ?`,[data]);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const Eliminar = async (Tabla,columnaId,id) => {
    try {
        const [result] = await conexion.query(`DELETE FROM ${Tabla} WHERE ${columnaId} = ?`,[id]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}