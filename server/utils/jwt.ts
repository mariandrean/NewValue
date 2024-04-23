import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

//Podemos importar la interface de esteusuario?
export const createToken = (user: any) => {
    const token = jwt.sign(
        {
            role: user.role,
            id: user.id
        },
        SECRET_KEY, { expiresIn: "2h" })

    return token;
}

export const verifyToken = (tokenJwt:any) => {
    try{
        return jwt.verify(tokenJwt, SECRET_KEY)
    } catch(error){
        return null 
    }
}