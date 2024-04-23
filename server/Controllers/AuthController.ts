import { Request, Response } from 'express';
import UserModel from "../Models/UserModel";
import bcrypt from 'bcryptjs';


// In progress 
export const register = async (req: Request, res: Response) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        req.body.password = passwordHash;
        const newUser = await UserModel.create(req.body);
       // const token = tokenSign(newUser); wait for update token
        res.status(201).json({ message: 'User registered', data: newUser }); //token wait for update token
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({ error: 'USER_NOT_FOUND' });
        }
        const hashPassword = user?.get('password') as string;
        const checkPassword = await bcrypt.compare(password, hashPassword);
       // const tokenSession = tokenSign(user); wait for update token
        const userName = user?.get('name') as string;
        if (checkPassword) {
            const noPassword = { ...user.toJSON(), password: undefined }; //para esconder la contraseña en el navegador
            return res.send({
                message: `Usuario correcto, bienvenid@ ${userName}`,
                // data: user,
                data: noPassword,
               // token: tokenSession wait for update token
            });
        } else {
            return res.status(401).send({ error: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Error interno del servidor' });
    }
}