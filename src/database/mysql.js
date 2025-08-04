import mysql from "mysql2/promise";

import config from "./../config/setting.global.js";

const db = {
    user : config.mysql.user,
    password : config.mysql.password,
    locahost : config.mysql.localhost,
    database : config.mysql.database
}

let conexion;

const mysqlConxion = async () => {

    try {
        
        conexion = await mysql.createConnection(db);

        console.log("Conxion a mysql establecida");

        conexion.on( error => {

            console.log("[ DB Error] ",error);

            if(error.code === "PROTOCOL_CONNECTION_LOST"){

                mysqlConxion();

            }else{
                throw error;
            }

        });

    } catch (error) {
        console.log("[ DB Error ] ",error);
        setInterval(mysqlConxion(),2000)
    }

}