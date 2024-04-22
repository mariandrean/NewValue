import { DB_PORT, NODE_ENV } from "./config";
import connection_db from "./database/connection_db";
import express from "express";
import cors from 'cors';

export const app = express();
/* app.use(cors());
app.use(express.json());
 */

try {
    connection_db.authenticate();
    console.log('Connection has been established successfully.🚀🚀🚀')
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

if (NODE_ENV !== 'test') {
    app.listen(DB_PORT, () => {
        console.log(`Server up in  http://localhost:${DB_PORT}/api`)
    })
}; 