import { config } from "dotenv";
config();

export const DB_DEV_NAME = <string> process.env.DB_DEV_NAME;
export const DB_USER= <string> process.env.DB_USER;
export const DB_PASSWORD= <string> process.env.DB_PASSWORD;
export const DB_PORT = process.env.DB_PORT || 3000;
export const SECRET_KEY = <string> process.env.SECRET_KEY;
export const DB_TEST_NAME = process.env.DB_TEST_NAME;
export const NODE_ENV = process.env.NODE_ENV;