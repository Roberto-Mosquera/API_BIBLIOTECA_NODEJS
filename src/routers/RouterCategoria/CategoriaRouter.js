import express from 'express';
import { success,error } from "./../../utils/response.js";
const Router = express.Router();

Router.get("/",(req,res)=>{
    success(req,res,'Todo bien',200,{
        text:"Hola a todos"
    });
});



export default Router;
