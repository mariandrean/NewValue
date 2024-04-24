import { Request, Response } from 'express';
import UserModel from "../models/UserModel";
import { createToken } from '../utils/jwt';
import bcryptjs from 'bcryptjs';


// In progress 
export const register = async (req: Request, res: Response) => {
    try {

        const saltRounds = 10;
      const password = req.body.password; 

        const passwordHash = await bcryptjs.hash(password, saltRounds);
        req.body.password = passwordHash;
        const newUser:any = await UserModel.create(req.body);
       const token = await createToken(newUser);
       console.log(token + 'Hola desde el controlador')
        res.status(201).json({ message: 'User registered', data: newUser, token });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Error at user registration' });
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({ error: 'USER_NOT_FOUND' });
        }
        const hashPassword = await bcryptjs.compare(req.body.password, password); 
       const tokenSession = createToken(user);
        const userName = user?.get('name') as string;
        const userRole = user?.get('role') as string;
        if (hashPassword) {
            const noPassword = { ...user.toJSON(), password: undefined }; //para esconder la contraseña en el navegador
            return res.send({
                message: `Usuario correcto, bienvenid@ ${userName}`,
                // data: user,
                data: noPassword,
               token: tokenSession,
               role: userRole
            });
        } else {
            return res.status(401).send({ error: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Error interno del servidor' });
    }
}