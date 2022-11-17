import { createPool } from "mysql2/promise"
// hacemos la conexion de base de datos y la exportamos para ser usada en otros codigos

import {HOST,USER,PASS,DB_PORT,DATABASE} from "./config.js"

export const conex = createPool({
    host:HOST,
    user:USER,
    password:PASS,
    port:DB_PORT,
    database:DATABASE
})
