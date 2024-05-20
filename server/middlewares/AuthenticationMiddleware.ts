import { verifyToken } from "../utils/jwt";
import { Request, Response, NextFunction} from "express";

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ").pop();

    if(!token) {
        return res.status(401).send({ error: 'No authentication token provided.' })
    };

    try{
        const dataToken:any = verifyToken(token);
        req.body.user_id = dataToken.id;
    }catch(error){
        return res.status(401).json({message:"No token provided"})
    }

    next();      
}
