import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 4000;

export const DBHOST = process.env.DB_HOST;
export const DBUSER = process.env.DB_USER;
export const DBPASS = process.env.DB_PASS;
export const DBPORT = process.env.DB_PORT;
export const DBDATABASE = process.env.DB_DATABASE;
