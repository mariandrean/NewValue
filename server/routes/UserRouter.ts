import express from "express";
import { getUsers } from "../controllers/UserController";

const router = express.Router() 

router.get('/getall', getUsers );

export default router;
