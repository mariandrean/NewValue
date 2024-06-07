import express from "express";
import { register, login } from "../controllers/AuthController";
import { registerValidation } from "../validators/RegisterValidation";

const router = express.Router()

router.post('/register', registerValidation, register);
router.post('/login', login);

export default router;
