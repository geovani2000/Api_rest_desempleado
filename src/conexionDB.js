import { createPool } from "mysql2/promise"
import { 
    DBHOST,
    DBUSER,
    DBPASS,
    DBPORT,
    DBDATABASE
 } from "./config"
// hacemos la conexion de base de datos y la exportamos para ser usada en otros codigos

export const conex = createPool({
    host: DBHOST,
    user: DBUSER,
    password: DBPASS,
    port: DBPORT,
    database: DBDATABASE
})
