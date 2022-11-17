import { Router } from "express"; // importamos el modulo Router de express que nos ayuda juntar todas la rutas posibles que tengamos en nuestra api.
import {conex} from "../conexionDB.js" // importamos la conexion de base de datos

const rutas = Router();

// Esta es un consulta para verificar si tenemos conexion ala base de datos
const verfica = async (req,res)=> {
    const result = await conex.query('SELECT "Si funciona tenemos la conexión" AS resultado');
    res.send(result[0]);
}

rutas.get('/ping',verfica);

// exportamos rutas 
export default rutas;