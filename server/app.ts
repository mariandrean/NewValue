import { DB_PORT, NODE_ENV } from "./config";
import connection_db from "./database/connection_db";
import express from "express";
import NewsModel from "./models/NewsModel";
import UserModel from "./models/UserModel";
import AuthRouter from "./routes/AuthRouter";
import UserRouter from "./routes/UserRouter";
import cors from 'cors';
import NewsRouter from "./routes/NewsRouter";

export const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRouter)
app.use("/api/users", UserRouter)
app.use('/api/news', NewsRouter);

try {
  connection_db.authenticate();
  console.log('Connection has been established successfully.🚀🚀🚀')
} catch (error) {
  console.error('Unable to connect to the database:', error);
  throw error;
}

try {
  UserModel.sync();
  console.log('The UserModel has been synchronized succesfully 👩🏼‍💻')
  NewsModel.sync();
  console.log('The NewsModel has been synchronized succesfully 👩🏼‍💻')
} catch (error) {
  console.error('Unable to synchronize models:', error);
  throw error;
}

if (NODE_ENV !== 'test') {
  app.listen(DB_PORT, () => {
    console.log(`Server up in  http://localhost:${DB_PORT}/api`)
  })
}; 