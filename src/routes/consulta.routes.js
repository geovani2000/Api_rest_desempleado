import { Router } from "express";
import {conex} from "../conexionDB.js"; 

const rutas = Router();


// Extrae todo los datos de base de datos
const obtenerDatos = async (req,res)=>{
    try {
        const [datos] = await conex.query('SELECT* FROM empleo');
        res.send(datos);
    } catch (error) {
        return res.send("Ocurrio un error")
    }
    
}


// crea un nuevo dato
const creaEmpleo = async (req,res)=>{
    const {empresa,categoria,tipoEmpleo,fecha,salario,lugar,telefono,numPuesto} = req.body;
    try {
        const [nuevoEmple] = await conex.query('INSERT INTO empleo (empresa,categoria,tipoEmpleo,fecha,salario,lugar,telefono,numPuesto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [empresa,categoria,tipoEmpleo,fecha,salario,lugar,telefono,numPuesto]);
    res.send("dato ingresado");
    } catch (error) {
        return res.send("Ocurrio un error")
    }
}


// Consulta para actualizar los datos
const actulizaDato = async(req,res)=>{    
    const {id} = req.params;
    const {empresa,categoria,tipoEmpleo,fecha,salario,lugar,telefono,numPuesto} = req.body;
    try {        
        const [actualiza] = await conex.query(
            'UPDATE empleo SET empresa = IFNULL(?,empresa), categoria = IFNULL(?,categoria), tipoEmpleo = IFNULL(?,tipoEmpleo), fecha = IFNULL(?,fecha), salario = IFNULL(?,salario), lugar = IFNULL(?,lugar), telefono = IFNULL(?,telefono), numPuesto = IFNULL(?,numPuesto) WHERE id = ?',
            [empresa,categoria,tipoEmpleo,fecha,salario,lugar,telefono,numPuesto,id]);
        if(actualiza.affectedRows === 0){ 
            return res.status(404).json({
                message: 'No se encotro nada'
            })
        }
        console.log(actualiza)
        const datoActualizado = await conex.query('SELECT* FROM empleo WHERE id=?',[id])
            res.send(datoActualizado[0])
    } catch (error) {
        return res.send("Se derecto un error")
    }
}


// Este una consulta que elimina un dato
const eliminaDato =async (req,res)=>{
    const {id}= req.params;
    try {
        const elimina = await conex.query('DELETE FROM empleo WHERE id = ?', [id]);
        if(elimina.affectedRows === 0){
            return res.send("No se elimino nada")
        }
        console.log(elimina);
        res.send("dato eliminado");
    } catch (error) {
        return res.send("Ocurrio un error")
    }
}



// Aqui este apartado son todas las rutas que utilizaremos para consultar api
rutas.get('/empleo',obtenerDatos);
rutas.post('/empleo',creaEmpleo)
rutas.patch('/empleo/:id',actulizaDato)
rutas.delete('/empleo/:id',eliminaDato)

// Exportamos todas las rutas
export default rutas;

